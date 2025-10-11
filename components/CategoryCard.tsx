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
      className="group relative overflow-hidden rounded-3xl p-8 min-h-[280px] flex flex-col justify-end transition-all duration-500 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-2xl hover:shadow-3xl"
      style={{
        background: `linear-gradient(135deg, ${category.gradient.from} 0%, ${category.gradient.to} 100%)`
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500" />
      
      {/* Content */}
      <div className="relative z-10 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight drop-shadow-lg">
          {category.name}
        </h2>
        <p className="text-white/90 text-lg font-medium drop-shadow-md">
          {category.description}
        </p>
      </div>

      {/* Subtle pulse animation on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at center, ${category.gradient.from}40 0%, transparent 70%)`
        }}
      />
    </Link>
  );
}

