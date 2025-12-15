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
    <div className="flex flex-col h-full animate-fade-in relative z-10">
      {/* Card content */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-8 py-16 md:py-20">
        <div className="text-center max-w-4xl w-full animate-slide-up">
          <p 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance inline-block px-6 sm:px-10 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10 lg:py-12 bg-white/95 rounded-3xl shadow-xl"
            style={{ color: category.textColor }}
          >
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
            className="p-3 sm:p-4 rounded-full bg-white/90 hover:bg-white active:bg-white/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 touch-manipulation backdrop-blur-sm"
            aria-label="Previous card"
            title="Previous card"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6" 
              fill="none" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: category.textColor }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Skip button */}
          <button
            onClick={onSkip}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/90 hover:bg-white active:bg-white/80 transition-all duration-200 touch-manipulation backdrop-blur-sm"
            aria-label="Skip to next card"
            title="Skip this card"
          >
            <span className="font-semibold text-base sm:text-lg" style={{ color: category.textColor }}>Skip</span>
          </button>

          {/* Next button */}
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="p-3 sm:p-4 rounded-full bg-white/90 hover:bg-white active:bg-white/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 touch-manipulation backdrop-blur-sm"
            aria-label="Next card"
            title="Next card"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6" 
              fill="none" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: category.textColor }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

