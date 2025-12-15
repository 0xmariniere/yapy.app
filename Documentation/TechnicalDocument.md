Perfect — here’s a cohesive and polished **Technical Document** that ties everything together: your frontend stack, backend setup, and data model in one clear spec.
This is suitable for inclusion in your PRD or as a standalone internal technical reference.

---

# 🧠 Technical Document

## 1. Overview

**Project Name:** *Chattr*
**Purpose:**
Chattr is a conversation starter web app that presents beautifully designed digital “cards” with curated prompts to spark meaningful discussions.

The stack is intentionally minimal — using **Next.js** for both the frontend and API routes, with a lightweight **JSON-based backend** that stores all cards (prompts). The entire app is deployed and hosted on **Vercel** for simplicity, scalability, and zero-config deployment.

---

## 2. Tech Stack

| Layer            | Technology               | Purpose                                                                       |
| ---------------- | ------------------------ | ----------------------------------------------------------------------------- |
| **Frontend**     | **Next.js (App Router)** | Modern React framework for server-side rendering and static site generation.  |
| **Styling**      | **Tailwind CSS**         | Utility-first CSS for rapid UI development with a minimal, elegant aesthetic. |
| **Backend**      | **Next.js API Routes**   | Handles requests to read and filter cards from a JSON file (no external DB).  |
| **Data Storage** | **JSON file**            | Stores the full collection of conversation cards and associated tags.         |
| **Hosting**      | **Vercel**               | Seamless deployment for both static assets and serverless API routes.         |

---

## 3. Data Model

All cards are stored in a single **non-relational JSON collection** located at `/data/cards.json`.
Each object represents one conversation prompt.

### Card Schema

```json
{
  "id": "c_045",
  "prompt": "What’s a belief you’ve changed your mind about recently?",
  "tags": ["philosophical", "deep", "introspective"]
}
```

### Field Definitions

* **id** — unique identifier for the card.
* **prompt** — text of the conversation starter.
* **tags** — array of strings used for categorization and filtering.

  * Includes both **deck tags** (e.g., `"friends"`, `"couples"`, `"philosophical"`, `"spicy"`) and **descriptive tags** (e.g., `"light"`, `"deep"`, `"fun"`).
  * There is **no distinction** between “deck” and “tag” — decks are simply higher-level tags.

### Benefits

* Flexible filtering without strict schema enforcement.
* Easy to extend with new categories, decks, or languages.
* Lightweight and versionable (ideal for a static or serverless setup).

---

## 4. Backend Architecture

The backend is powered by **Next.js API routes** that read from the JSON data file.
This setup provides simple REST endpoints for fetching and filtering cards without a separate server or database.

### Endpoints

#### **`GET /api/cards`**

Returns a filtered list of cards.

**Query Parameters**

| Param     | Type     | Description                                                      |
| --------- | -------- | ---------------------------------------------------------------- |
| `q`       | string   | Full-text search in prompt                                       |
| `tag`     | string[] | Filter by one or more tags (repeatable: `?tag=friends&tag=deep`) |
| `limit`   | number   | Max cards returned (default: 24)                                 |
| `offset`  | number   | Pagination offset (default: 0)                                   |
| `shuffle` | boolean  | Randomize results (`shuffle=1`)                                  |

**Example requests:**

* `/api/cards` → all cards
* `/api/cards?tag=friends` → all cards in the “Friends” deck
* `/api/cards?tag=philosophical&tag=deep` → philosophical AND deep
* `/api/cards?q=smile` → search by keyword
* `/api/cards?tag=spicy&shuffle=1&limit=10` → random spicy cards

**Response example:**

```json
{
  "total": 54,
  "offset": 0,
  "limit": 10,
  "items": [
    { "id": "c_201", "prompt": "What’s your most controversial opinion?", "tags": ["spicy", "polemic"] }
  ]
}
```

---

#### **`GET /api/tags`**

Returns a list of all distinct tags (including deck tags).

**Response example:**

```json
{
  "tags": ["friends", "couples", "philosophical", "spicy", "light", "deep", "fun"]
}
```

---

### Backend Implementation (Simplified Example)

```ts
// app/api/cards/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

type Card = { id: string; prompt: string; tags: string[] };
const DATA_PATH = path.join(process.cwd(), "data", "cards.json");

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || "";
  const tags = url.searchParams.getAll("tag").map(t => t.toLowerCase());
  const limit = parseInt(url.searchParams.get("limit") || "24");
  const offset = parseInt(url.searchParams.get("offset") || "0");
  const shuffle = url.searchParams.get("shuffle") === "1";

  const raw = await fs.readFile(DATA_PATH, "utf8");
  let cards: Card[] = JSON.parse(raw);

  cards = cards.filter(c =>
    (!q || c.prompt.toLowerCase().includes(q.toLowerCase())) &&
    (tags.length === 0 || tags.every(t => c.tags.includes(t)))
  );

  if (shuffle) cards.sort(() => Math.random() - 0.5);

  return NextResponse.json({
    total: cards.length,
    offset,
    limit,
    items: cards.slice(offset, offset + limit)
  });
}
```

---

## 5. Frontend Architecture

The frontend is a **Next.js web app** styled with **Tailwind CSS**, designed for minimalism and ease of interaction.

### Features

* Responsive layout that displays one card at a time (swipe or click to advance).
* Filters by tag/deck (Friends, Couples, Philosophical, Spicy).
* Optional “shuffle” or “random card” mode.
* Simple navigation and state handled by React hooks.

### Example structure

```
/app
 ├─ /api               → API routes
 ├─ /cards             → UI pages for decks
 ├─ /components
 │   ├─ Card.tsx       → renders a conversation card
 │   ├─ TagFilter.tsx  → filter bar for selecting decks/tags
 │   └─ Layout.tsx     → shared layout and styling
 ├─ /hooks
 │   └─ useCards.ts    → custom hook for fetching cards via API
 └─ /data/cards.json   → prompt data source
```

---

## 6. Deployment & Hosting

* **Platform:** Vercel
* **Build command:** `next build`
* **Output:** Static frontend + serverless API endpoints
* **Runtime:** Node.js (for file system reads in API routes)
* **Environment:** No external database or environment variables required

Vercel automatically handles caching, scaling, and CDN distribution.

---

## 7. Future Enhancements

* Add `/api/random` endpoint for instant random card retrieval.
* Support for multiple languages (localized JSON files).
* Admin UI for editing and adding new prompts.
* Persistent user sessions or favorites (via local storage or lightweight backend).

---

Would you like me to add a **section 8: “Folder Structure and File Conventions”** (e.g. naming standards, TypeScript types, data file schema)? It fits naturally right after this and helps make the dev handoff airtight.
