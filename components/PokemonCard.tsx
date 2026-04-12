import { Pokemon, typeColors } from "@/types/pokemon";

export default function PokemonCard({ pokemon }: { pokemon: { id: number; name: string; types: string[] } }) {
  const spriteUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png?raw=true`;

  return (
    <div className="border rounded-2xl p-4 flex flex-col bg-gradient-to-b from-green-400 to-gray-300 items-center text-black gap-2">
      <img src={spriteUrl} alt={pokemon.name} className="w-64 h-64" />
      <p className="capitalize text-lg font-semibold">{pokemon.name}</p>
      <div className="flex gap-1">
        {pokemon.types.map((type) => (
          <span key={type} className={` ${typeColors[type]} text-white text-sm px-4 py-1 rounded-full capitalize`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}