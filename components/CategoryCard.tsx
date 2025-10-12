"use client";

import Link from "next/link";
import type { CategoryInfo } from "@/types";

interface CategoryCardProps {
  category: CategoryInfo;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/cards/${category.id}`}
      className="group relative overflow-hidden rounded-3xl p-8 min-h-[280px] flex flex-col justify-end transition-all duration-500 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl backdrop-blur-md"
      style={{
        background: 'rgba(255, 255, 255, 0.65)'
      }}
    >
      {/* Glass effect border */}
      <div className="absolute inset-0 border border-white/20 rounded-3xl" />
      
      {/* Emoji in top right */}
      <div className="absolute top-6 right-6 text-5xl z-10 drop-shadow-lg">
        {category.emoji}
      </div>
      
      {/* Content */}
      <div className="relative z-10 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
        <div className="mb-3">
          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight inline-block px-3 py-1 bg-white/90 rounded-lg"
            style={{ color: category.textColor }}
          >
            {category.name}
          </h2>
        </div>
        <div>
          <p 
            className="text-xl font-medium inline-block px-3 py-1 bg-white/80 rounded-md"
            style={{ color: category.textColor }}
          >
            {category.description}
          </p>
        </div>
      </div>

      {/* Subtle pulse animation on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at center, ${category.textColor}20 0%, transparent 70%)`
        }}
      />
    </Link>
  );
}

