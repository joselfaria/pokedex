"use client";

import PokemonCard from "@/components/PokemonCard";
import SearchBar from "@/components/SearchBar";
import { Pokemon } from "@/types/pokemon";
import { useState } from "react";

export default function Pokedex({ pokemons }: { pokemons: Pokemon[] }) {
  const [search, setSearch] = useState("");

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) || p.id.toString().includes(search)
  );

  return (
    <div className="flex flex-col w-full px-8 xl:px-20" style={{ backgroundColor: "#1564a8" }}>  

      <div className="flex items-center justify-center gap-4 w-full pt-10">
        <img 
          src="/pokedex-logo.webp" 
          alt="pokedex logo" 
          className="w-1/4 min-w-[300px] max-w-[400px]" 
        />
      </div>

      <div className="flex flex-row justify-between py-10">
        <div className="">
        <SearchBar onSearch={setSearch} />
        </div>
        <div className="">
        <SearchBar onSearch={setSearch} />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filtered.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

    </div>
   
  );
}