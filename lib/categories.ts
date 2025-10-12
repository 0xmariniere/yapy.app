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
    textColor: "#FFD700", // Yellow from background
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
    textColor: "#FF0000", // Red from background
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
    textColor: "#0033FF", // Blue from background
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
    textColor: "#8B2252", // Burgundy from background
    description: "pillow talk"
  }
];

export function getCategoryById(id: string): CategoryInfo | undefined {
  return categories.find(cat => cat.id === id);
}


