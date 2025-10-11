"use client";

import { useState, useCallback, use } from "react";
import { useRouter } from "next/navigation";
import { useCards } from "@/hooks/useCards";
import { useSwipe } from "@/hooks/useSwipe";
import { getCategoryById } from "@/lib/categories";
import ConversationCard from "@/components/ConversationCard";
import Timer from "@/components/Timer";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { category } = use(params);
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoryInfo = getCategoryById(category);

  const { cards, loading, error } = useCards({
    category,
    shuffle: true
  });

  const goToNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, cards.length]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const skipCard = useCallback(() => {
    goToNext();
  }, [goToNext]);

  // Setup swipe handlers
  useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious
  });

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Category not found</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${categoryInfo.gradient.from} 0%, ${categoryInfo.gradient.to} 100%)`
        }}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-xl font-medium">Loading cards...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${categoryInfo.gradient.from} 0%, ${categoryInfo.gradient.to} 100%)`
        }}
      >
        <div className="text-center px-6">
          <p className="text-white text-xl mb-4">Error loading cards</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full text-white font-semibold transition-all"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${categoryInfo.gradient.from} 0%, ${categoryInfo.gradient.to} 100%)`
        }}
      >
        <div className="text-center px-6">
          <p className="text-white text-xl mb-4">No cards available</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full text-white font-semibold transition-all"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div 
      className="min-h-screen relative"
      style={{
        background: `linear-gradient(135deg, ${categoryInfo.gradient.from} 0%, ${categoryInfo.gradient.to} 100%)`
      }}
    >
      {/* Back button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-200"
        aria-label="Go back home"
      >
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Card */}
      <ConversationCard
        card={currentCard}
        category={categoryInfo}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onSkip={skipCard}
        hasNext={currentIndex < cards.length - 1}
        hasPrevious={currentIndex > 0}
        currentIndex={currentIndex}
        totalCards={cards.length}
      />

      {/* Timer */}
      <Timer />
    </div>
  );
}

