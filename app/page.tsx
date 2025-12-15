"use client";

import { useEffect, useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/categories";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.localStorage.getItem("yapyIntroSeen");
    if (!seen) {
      setShowIntro(true);
    }
  }, []);

  const closeIntro = () => {
    setShowIntro(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("yapyIntroSeen", "1");
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#d9d9d9]">
      {/* Postmodern Background Shapes - Exact Match */}
      <div className="fixed inset-0 z-0">
        {/* Red horizontal bar - top */}
        <div className="absolute top-[18%] left-0 w-[82%] h-[14%] bg-[#FF0000] rounded-r-[70px]" />
        
        {/* Black rounded rectangle - left middle */}
        <div className="absolute top-[32%] left-0 w-[35%] h-[13%] bg-[#2d2d2d] rounded-r-[60px]" />
        
        {/* Gray square - bottom left */}
        <div className="absolute bottom-[8%] left-[1%] w-[33%] h-[40%] bg-[#b5b5b5] rounded-[50px]" />
        
        {/* Blue large square - center bottom */}
        <div className="absolute bottom-[8%] left-[35%] w-[45%] h-[60%] bg-[#0033FF] rounded-[50px]" />
        
        {/* Yellow vertical bar - right */}
        <div className="absolute top-[15%] right-0 w-[16%] h-[62%] bg-[#FFD700] rounded-l-[80px]" />
        
        {/* Burgundy circle - bottom right */}
        <div className="absolute bottom-[8%] right-[8%] w-[15%] h-[15%] bg-[#8B2252] rounded-full" style={{ aspectRatio: '1/1' }} />
      </div>

      {/* Intro overlay */}
      {showIntro && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
          <div className="relative max-w-xl md:max-w-2xl w-full bg-white rounded-3xl shadow-2xl px-6 sm:px-10 py-8 sm:py-10 text-center">
            {/* Corner emojis */}
            <span className="absolute -top-4 left-4 text-2xl sm:text-3xl select-none">💬</span>
            <span className="absolute -top-4 right-6 text-2xl sm:text-3xl rotate-6 select-none">✨</span>
            <span className="absolute bottom-0 -left-2 text-2xl sm:text-3xl translate-y-1/2 select-none">🦜</span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#2d2d2d] mb-4">
              Yapy is a conversation starter.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#2d2d2d] mb-6 sm:mb-8 leading-relaxed">
              Open it with someone, pick a category,
              <br className="hidden sm:block" />
              and get new questions to discuss.
            </p>
            <button
              onClick={closeIntro}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#2d2d2d] text-white font-semibold text-base sm:text-lg shadow-md hover:bg-black transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-16 pb-8 px-6 text-center animate-fade-in">
          <div className="mb-4">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight inline-block px-4 py-2 bg-white/90 rounded-xl text-[#2d2d2d]">
              yapy.app
            </h1>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-medium inline-block px-4 py-2 bg-white/80 rounded-lg text-[#2d2d2d]">
              spark conversations
            </p>
          </div>
        </header>

        {/* Category Grid */}
        <div className="flex-1 px-6 pb-16 animate-slide-up">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-fade-in"
                >
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 text-center text-white/50 text-sm">
        </footer>
      </div>
    </main>
  );
}
