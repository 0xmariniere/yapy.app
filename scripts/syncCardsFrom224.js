const fs = require("fs");
const path = require("path");

const SOURCE_PATH = path.join(process.cwd(), "cards chatgpt224.json");
const TARGET_PATH = path.join(process.cwd(), "data", "cards.json");

/** Map new deck tags to legacy app categories */
function mapTag(tag) {
  switch (tag) {
    case "friends":
      return "frens";
    case "couples":
      return "babe";
    case "philosophical":
      return "deep";
    case "spicy":
      return "unfiltered";
    default:
      return tag;
  }
}

function main() {
  const raw = fs.readFileSync(SOURCE_PATH, "utf8");
  const parsed = JSON.parse(raw);
  const cards = parsed.cards || [];

  const transformed = cards.map((card, index) => {
    const tags = Array.isArray(card.tags) ? card.tags : [];
    const mappedTags = tags.map(mapTag);

    return {
      id: `c_${String(index + 1).padStart(3, "0")}`,
      prompt: card.prompt,
      tags: mappedTags,
    };
  });

  fs.writeFileSync(TARGET_PATH, JSON.stringify(transformed, null, 2) + "\n", "utf8");
  console.log(`Wrote ${transformed.length} cards to`, TARGET_PATH);
}

main();


