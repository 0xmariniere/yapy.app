import type { CategoryInfo } from "@/types";

export const categories: CategoryInfo[] = [
  {
    id: "frens",
    name: "FRENS",
    emoji: "✨",
    gradient: {
      from: "#FF9A9E",
      to: "#FAD0C4"
    },
    description: "spark new takes"
  },
  {
    id: "babe",
    name: "BABE",
    emoji: "💌",
    gradient: {
      from: "#FF0080",
      to: "#FF8C00"
    },
    description: "evolve ur relationship"
  },
  {
    id: "deep",
    name: "DEEP",
    emoji: "💭",
    gradient: {
      from: "#00DBDE",
      to: "#FC00FF"
    },
    description: "go philosophical"
  },
  {
    id: "unfiltered",
    name: "UNFILTERED",
    emoji: "🍑",
    gradient: {
      from: "#FF512F",
      to: "#DD2476"
    },
    description: "pillow talk"
  }
];

export function getCategoryById(id: string): CategoryInfo | undefined {
  return categories.find(cat => cat.id === id);
}


