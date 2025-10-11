import type { CategoryInfo } from "@/types";

export const categories: CategoryInfo[] = [
  {
    id: "friends",
    name: "Friends",
    gradient: {
      from: "#FF9A9E",
      to: "#FAD0C4"
    },
    description: "Fun and meaningful conversations for friends"
  },
  {
    id: "couples",
    name: "Couples",
    gradient: {
      from: "#FF0080",
      to: "#FF8C00"
    },
    description: "Deepen your connection and spark intimacy"
  },
  {
    id: "philosophical",
    name: "Philosophical",
    gradient: {
      from: "#00DBDE",
      to: "#FC00FF"
    },
    description: "Deep, abstract, and reflective discussions"
  },
  {
    id: "spicy",
    name: "Spicy",
    gradient: {
      from: "#FF512F",
      to: "#DD2476"
    },
    description: "Bold, controversial, and debate-style topics"
  }
];

export function getCategoryById(id: string): CategoryInfo | undefined {
  return categories.find(cat => cat.id === id);
}


