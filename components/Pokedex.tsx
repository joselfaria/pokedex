"use client";

import PokemonCard from "@/components/PokemonCard";
import SearchBar from "@/components/SearchBar";
import TypeFilter from "@/components/TypeFilter";
import { Pokemon } from "@/types/pokemon";
import { useState } from "react";

function getTypeNames(types: Pokemon["types"]): string[] {
  if (!Array.isArray(types)) return [];
  return types.map((t) => {
    if (typeof t === "string") return t;
    if (typeof t === "object" && t !== null) {
      if ("type" in t && t.type?.name) return t.type.name;
      if ("name" in t) return (t as any).name;
    }
    return "";
  }).filter(Boolean);
}

export default function Pokedex({ pokemons }: { pokemons: Pokemon[] }) {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filtered = pokemons.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toString().includes(search);

    const typeNames = getTypeNames(p.types);

    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.every((selected) => typeNames.includes(selected));

    return matchesSearch && matchesType;
  });

  return (
    <div
      className="relative flex flex-col w-full px-8 xl:px-20 pb-100"
      style={{ backgroundColor: "#1564a8" }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center w-full pt-10 z-10">
        <img
          src="/pokedex-logo.webp"
          alt="pokedex logo"
          className="w-1/4 min-w-[300px] max-w-[400px]"
        />
      </div>

      {/* Search + Type filter row */}
      {/* mobile: coluna (search em cima, filter em baixo) | desktop: linha lado a lado */}
      <div className="flex flex-col lg:flex-row gap-4 py-10 z-10">
        {/* SearchBar ocupa 40% no desktop */}
        <div className="w-full lg:w-[40%]">
          <SearchBar onSearch={setSearch} />
        </div>
        {/* TypeFilter ocupa o restante (60%) no desktop */}
        <div className="w-full lg:flex-1 min-w-0">
          <TypeFilter selectedTypes={selectedTypes} onToggleType={toggleType} />
        </div>
      </div>

      {/* Active types badges */}
      {selectedTypes.length > 0 && (
        <div className="flex items-center gap-2 mb-4 z-10 flex-wrap">
          <span className="text-white/70 text-sm">Filtrando por:</span>
          {selectedTypes.map((type) => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className="flex items-center gap-1.5 px-3 py-1 text-white text-sm font-semibold rounded-full bg-white/20 hover:bg-white/30 transition-all capitalize"
            >
              {type}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 2L10 10M10 2L2 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          ))}
          {selectedTypes.length > 1 && (
            <button
              onClick={() => setSelectedTypes([])}
              className="text-white/50 hover:text-white/80 text-xs underline transition-all"
            >
              limpar todos
            </button>
          )}
          <span className="text-white/50 text-sm">({filtered.length} encontrados)</span>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 z-10">
        {filtered.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {/* Background image */}
      <div className="absolute inset-x-0 bottom-0 top-16 z-0 flex items-end overflow-visible pointer-events-none pt-200">
        <img
          src="day-background.webp"
          alt="day background"
          className="w-full h-auto transform translate-y-60"
        />
      </div>
    </div>
  );
}
