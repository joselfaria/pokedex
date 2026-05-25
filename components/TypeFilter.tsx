"use client";

import { useRef } from "react";
import { typeColors } from "@/types/pokemon";

const ALL_TYPES = Object.keys(typeColors);

interface TypeFilterProps {
  selectedTypes: string[];
  onToggleType: (type: string) => void;
}

export default function TypeFilter({ selectedTypes, onToggleType }: TypeFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-2 w-full">

      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className="flex-shrink-0 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-110 active:scale-95"
        style={{ width: 28, height: 28 }}
        aria-label="Scroll left"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Scrollable pill strip */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto flex-1 min-w-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {ALL_TYPES.map((type) => {
          const isSelected = selectedTypes.includes(type);
          return (
            <button
              key={type}
              onClick={() => onToggleType(type)}
              className={[
                "flex-shrink-0 px-4 py-1.5 text-sm font-semibold text-white rounded-full capitalize",
                "transition-all duration-200",
                typeColors[type].bg,
                isSelected
                  ? "brightness-110"
                  : "opacity-60 hover:opacity-100",
              ].join(" ")}
            >
              {type}
            </button>
          );
        })}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className="flex-shrink-0 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-110 active:scale-95"
        style={{ width: 28, height: 28 }}
        aria-label="Scroll right"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}
