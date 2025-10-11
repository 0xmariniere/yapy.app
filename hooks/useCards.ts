"use client";

import { useState, useEffect } from "react";
import type { Card, CardsResponse } from "@/types";

interface UseCardsOptions {
  category?: string;
  shuffle?: boolean;
  limit?: number;
}

export function useCards(options: UseCardsOptions = {}) {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (options.category) {
          params.append("tag", options.category);
        }
        if (options.shuffle) {
          params.append("shuffle", "1");
        }
        if (options.limit) {
          params.append("limit", options.limit.toString());
        } else {
          params.append("limit", "100"); // Get all cards
        }

        const response = await fetch(`/api/cards?${params.toString()}`);
        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }

        const data: CardsResponse = await response.json();
        setCards(data.items);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, [options.category, options.shuffle, options.limit]);

  return { cards, loading, error };
}


