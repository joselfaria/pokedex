import PokemonCard from "@/components/PokemonCard";
import pokemons from "@/data/pokemons.json";
import SearchBar from "@/components/SearchBar";
import Pokedex from "@/components/Pokedex";


export default async function Home() {
  return (
    <main className="bg-white">
      <Pokedex pokemons={pokemons} />
    </main>
  );
}