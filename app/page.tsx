import PokemonCard from "@/components/PokemonCard";

const limit = 151;

async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit);
  const data = await res.json();

  const results = [];
  for (const pokemon of data.results as { name: string; url: string }[]) {
    const details = await fetch(pokemon.url);
    const json = await details.json();
    results.push({
      id: json.id,
      name: json.name,
      types: json.types.map((t: { type: { name: string } }) => t.type.name) as string[],
    });
  }
  return results;
}

export default async function Home() {
  const pokemons = await getPokemons();

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