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
      <div className="min-h-screen flex items-center justify-center bg-[#d9d9d9]">
        <div className="text-center">
          <div 
            className="w-16 h-16 border-4 border-transparent rounded-full animate-spin mx-auto mb-4"
            style={{ 
              borderTopColor: categoryInfo.textColor,
              borderRightColor: categoryInfo.textColor 
            }}
          />
          <p className="text-xl font-medium px-4 py-2 bg-white/90 rounded-lg inline-block" style={{ color: categoryInfo.textColor }}>
            Loading cards...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#d9d9d9]">
        <div className="text-center px-6">
          <p className="text-xl mb-4 px-4 py-2 bg-white/90 rounded-lg inline-block" style={{ color: categoryInfo.textColor }}>
            Error loading cards
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-white/70 hover:bg-white/90 rounded-full font-semibold transition-all"
            style={{ color: categoryInfo.textColor }}
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#d9d9d9]">
        <div className="text-center px-6">
          <p className="text-xl mb-4 px-4 py-2 bg-white/90 rounded-lg inline-block" style={{ color: categoryInfo.textColor }}>
            No cards available
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-white/70 hover:bg-white/90 rounded-full font-semibold transition-all"
            style={{ color: categoryInfo.textColor }}
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  // Color variations for each category's postmodern background
  const getBackgroundShapes = () => {
    switch (categoryInfo.id) {
      case "frens": // Yellow theme
        return (
          <>
            <div className="absolute top-[18%] left-0 w-[82%] h-[14%] bg-[#FFD700] rounded-r-[70px]" />
            <div className="absolute top-[32%] left-0 w-[35%] h-[13%] bg-[#FFA500] rounded-r-[60px]" />
            <div className="absolute bottom-[8%] left-[1%] w-[33%] h-[40%] bg-[#FFEC8B] rounded-[50px]" />
            <div className="absolute bottom-[8%] left-[35%] w-[45%] h-[60%] bg-[#FFB90F] rounded-[50px]" />
            <div className="absolute top-[15%] right-0 w-[16%] h-[62%] bg-[#FFC125] rounded-l-[80px]" />
            <div className="absolute bottom-[8%] right-[8%] w-[15%] h-[15%] bg-[#FF8C00] rounded-full" />
          </>
        );
      case "babe": // Red theme
        return (
          <>
            <div className="absolute top-[18%] left-0 w-[82%] h-[14%] bg-[#FF0000] rounded-r-[70px]" />
            <div className="absolute top-[32%] left-0 w-[35%] h-[13%] bg-[#DC143C] rounded-r-[60px]" />
            <div className="absolute bottom-[8%] left-[1%] w-[33%] h-[40%] bg-[#FF6347] rounded-[50px]" />
            <div className="absolute bottom-[8%] left-[35%] w-[45%] h-[60%] bg-[#FF1493] rounded-[50px]" />
            <div className="absolute top-[15%] right-0 w-[16%] h-[62%] bg-[#FF4500] rounded-l-[80px]" />
            <div className="absolute bottom-[8%] right-[8%] w-[15%] h-[15%] bg-[#C71585] rounded-full" />
          </>
        );
      case "deep": // Blue theme
        return (
          <>
            <div className="absolute top-[18%] left-0 w-[82%] h-[14%] bg-[#0033FF] rounded-r-[70px]" />
            <div className="absolute top-[32%] left-0 w-[35%] h-[13%] bg-[#1E90FF] rounded-r-[60px]" />
            <div className="absolute bottom-[8%] left-[1%] w-[33%] h-[40%] bg-[#4169E1] rounded-[50px]" />
            <div className="absolute bottom-[8%] left-[35%] w-[45%] h-[60%] bg-[#0000CD] rounded-[50px]" />
            <div className="absolute top-[15%] right-0 w-[16%] h-[62%] bg-[#00BFFF] rounded-l-[80px]" />
            <div className="absolute bottom-[8%] right-[8%] w-[15%] h-[15%] bg-[#000080] rounded-full" />
          </>
        );
      case "unfiltered": // Burgundy/Purple theme
        return (
          <>
            <div className="absolute top-[18%] left-0 w-[82%] h-[14%] bg-[#8B2252] rounded-r-[70px]" />
            <div className="absolute top-[32%] left-0 w-[35%] h-[13%] bg-[#9932CC] rounded-r-[60px]" />
            <div className="absolute bottom-[8%] left-[1%] w-[33%] h-[40%] bg-[#BA55D3] rounded-[50px]" />
            <div className="absolute bottom-[8%] left-[35%] w-[45%] h-[60%] bg-[#8B008B] rounded-[50px]" />
            <div className="absolute top-[15%] right-0 w-[16%] h-[62%] bg-[#9370DB] rounded-l-[80px]" />
            <div className="absolute bottom-[8%] right-[8%] w-[15%] h-[15%] bg-[#4B0082] rounded-full" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#d9d9d9]">
      {/* Postmodern Background Shapes */}
      <div className="fixed inset-0 z-0">
        {getBackgroundShapes()}
      </div>

      {/* Back button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 z-20 p-3 rounded-full bg-white/30 hover:bg-white/40 active:bg-white/50 backdrop-blur-sm transition-all duration-200"
        aria-label="Go back home"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          style={{ color: categoryInfo.textColor }}
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

