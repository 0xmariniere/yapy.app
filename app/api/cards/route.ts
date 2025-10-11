import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { Card, CardsResponse } from "@/types";

export const runtime = "nodejs";

const DATA_PATH = path.join(process.cwd(), "data", "cards.json");

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const q = url.searchParams.get("q") || "";
    const tags = url.searchParams.getAll("tag").map(t => t.toLowerCase());
    const limit = parseInt(url.searchParams.get("limit") || "24");
    const offset = parseInt(url.searchParams.get("offset") || "0");
    const shuffle = url.searchParams.get("shuffle") === "1";

    // Read cards from JSON file
    const raw = await fs.readFile(DATA_PATH, "utf8");
    let cards: Card[] = JSON.parse(raw);

    // Filter by search query
    if (q) {
      cards = cards.filter(c =>
        c.prompt.toLowerCase().includes(q.toLowerCase())
      );
    }

    // Filter by tags (AND logic - card must have all specified tags)
    if (tags.length > 0) {
      cards = cards.filter(c =>
        tags.every(t => c.tags.includes(t))
      );
    }

    // Shuffle if requested
    if (shuffle) {
      cards = cards.sort(() => Math.random() - 0.5);
    }

    // Pagination
    const total = cards.length;
    const paginatedCards = cards.slice(offset, offset + limit);

    const response: CardsResponse = {
      total,
      offset,
      limit,
      items: paginatedCards
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error reading cards:", error);
    return NextResponse.json(
      { error: "Failed to load cards" },
      { status: 500 }
    );
  }
}


