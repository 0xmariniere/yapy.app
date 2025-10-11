"use client";

import type { Card, CategoryInfo } from "@/types";

interface ConversationCardProps {
  card: Card;
  category: CategoryInfo;
  onNext: () => void;
  onPrevious: () => void;
  onSkip: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  currentIndex: number;
  totalCards: number;
}

export default function ConversationCard({
  card,
  category,
  onNext,
  onPrevious,
  onSkip,
  hasNext,
  hasPrevious,
  currentIndex,
  totalCards
}: ConversationCardProps) {
  return (
    <div className="flex flex-col h-full animate-fade-in">
      {/* Progress indicator */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between text-white/60 text-sm mb-2 font-medium">
          <span>{category.name}</span>
          <span>{currentIndex + 1} / {totalCards}</span>
        </div>
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white/60 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
          />
        </div>
      </div>

      {/* Card content */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="text-center max-w-2xl animate-slide-up">
          <p className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
            {card.prompt}
          </p>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="px-6 pb-safe-8">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {/* Previous button */}
          <button
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 touch-manipulation"
            aria-label="Previous card"
            title="Previous card"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
              fill="none" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Skip button */}
          <button
            onClick={onSkip}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-200 touch-manipulation"
            aria-label="Skip to next card"
            title="Skip this card"
          >
            <span className="text-white font-semibold text-base sm:text-lg">Skip</span>
          </button>

          {/* Next button */}
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 touch-manipulation"
            aria-label="Next card"
            title="Next card"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
              fill="none" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Hint text */}
        <p className="text-center text-white/40 text-xs sm:text-sm mt-4 sm:mt-6">
          Swipe or tap to navigate
        </p>
      </div>
    </div>
  );
}

