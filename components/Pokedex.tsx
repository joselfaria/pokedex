"use client";

import PokemonCard from "@/components/PokemonCard";
import SearchBar from "@/components/SearchBar";
import { Pokemon } from "@/types/pokemon";
import { useState } from "react";

export default function Pokedex({ pokemons }: { pokemons: Pokemon[] }) {
  const [search, setSearch] = useState("");

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-red-500 flex items-center justify-between p-8 mb-8">
        <div className="flex items-center gap-4 ml-10">
          <img src="/pokemon-icon.webp" alt="pokemon icon" className="w-16 h-16" />
          <span className="text-6xl font-bold text-white">Pokédex</span>
        </div>
        <div className="mr-20">
          <SearchBar onSearch={setSearch} />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 ml-20 mr-20 bg-white">
        {filtered.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}