import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { Card, TagsResponse } from "@/types";

export const runtime = "nodejs";

const DATA_PATH = path.join(process.cwd(), "data", "cards.json");

export async function GET() {
  try {
    // Read cards from JSON file
    const raw = await fs.readFile(DATA_PATH, "utf8");
    const cards: Card[] = JSON.parse(raw);

    // Extract unique tags
    const tagsSet = new Set<string>();
    cards.forEach(card => {
      card.tags.forEach(tag => tagsSet.add(tag));
    });

    const tags = Array.from(tagsSet).sort();

    const response: TagsResponse = { tags };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error reading tags:", error);
    return NextResponse.json(
      { error: "Failed to load tags" },
      { status: 500 }
    );
  }
}


