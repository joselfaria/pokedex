export interface PokemonStats {
  base_stat: number;
  stat: { name: string };
}

export interface PokemonHabilidades {
  ability: { name: string };
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: { type: { name: string } }[];
  stats: PokemonStats[];
  abilities: PokemonHabilidades[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export const typeColors: Record<  string, { bg: string; gradient: string }> = {
  fire: { bg: "bg-orange-500", 
          gradient: "from-orange-500" },
  water: { bg: "bg-blue-500", 
           gradient: "from-blue-500" },
  grass: { bg: "bg-green-600",
           gradient: "from-green-600" },
  electric: { bg: "bg-yellow-500",
             gradient: "from-yellow-500" },
  psychic: { bg: "bg-pink-600",
             gradient: "from-pink-600" },
  poison: { bg: "bg-purple-600",
            gradient: "from-purple-600" },
  normal: { bg: "bg-zinc-500",
            gradient: "from-zinc-500" },
  bug: { bg: "bg-lime-600",
         gradient: "from-lime-600" },
  ghost: { bg: "bg-violet-700",
           gradient: "from-violet-700" },
  fighting: { bg: "bg-red-700",
              gradient: "from-red-700" },
  rock: { bg: "bg-stone-600",
          gradient: "from-stone-600" },
  ground: { bg: "bg-yellow-700",
            gradient: "from-yellow-600" },
  ice: { bg: "bg-cyan-400",
         gradient: "from-cyan-400" },
  dragon: { bg: "bg-indigo-700",
            gradient: "from-indigo-700" },
  dark: { bg: "bg-zinc-700",
          gradient: "from-zinc-700" },
  steel: { bg: "bg-slate-400",
           gradient: "from-slate-400" },
  fairy: { bg: "bg-rose-400",
           gradient: "from-rose-400" },
  flying: { bg: "bg-sky-500",
            gradient: "from-sky-500" },
};