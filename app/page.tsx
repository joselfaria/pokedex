import PokemonCard from "@/components/PokemonCard";
import pokemons from "@/data/pokemons.json";


export default async function Home() {
  return (
    <main className="bg-white">
      <h1 className="bg-red-500 text-6xl font-bold text-left mb-8 text-white p-8 flex items-center gap-4">
        <img src="/pokemon-icon.webp" alt="pokemon icon" className="w-16 h-16 ml-10" />
        Pokédex
      </h1>
      <div className="grid grid-cols-5 gap-4 ml-20 mr-20">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}