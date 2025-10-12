"use client";

import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/categories";

export default function Home() {
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
              convos that hit
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
