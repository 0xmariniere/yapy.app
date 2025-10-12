"use client";

import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/categories";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradient that blends all categories */}
      <div 
        className="fixed inset-0 z-0 animate-pulse-glow"
        style={{
          background: `linear-gradient(
            135deg,
            #FF9A9E 0%,
            #FAD0C4 15%,
            #FF0080 35%,
            #FF8C00 50%,
            #FC00FF 70%,
            #00DBDE 85%,
            #DD2476 100%
          )`,
          opacity: 0.15
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-16 pb-8 px-6 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            yapy.app
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium">
            convos that hit
          </p>
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
