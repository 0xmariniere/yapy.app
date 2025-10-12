export interface Card {
  id: string;
  prompt: string;
  tags: string[];
}

export interface CardsResponse {
  total: number;
  offset: number;
  limit: number;
  items: Card[];
}

export interface TagsResponse {
  tags: string[];
}

export type Category = "frens" | "babe" | "deep" | "unfiltered";

export interface CategoryInfo {
  id: Category;
  name: string;
  emoji: string;
  gradient: {
    from: string;
    to: string;
  };
  textColor: string;
  description: string;
}


