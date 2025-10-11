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

export type Category = "friends" | "couples" | "philosophical" | "spicy";

export interface CategoryInfo {
  id: Category;
  name: string;
  gradient: {
    from: string;
    to: string;
  };
  description: string;
}


