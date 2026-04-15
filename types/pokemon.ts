export interface Pokemon {
  id: number;
  name: string;
  types: string[];
}

export const typeColors: Record<  string, { bg: string; gradient: string }> = {
  fire: { bg: "bg-orange-500", 
          gradient: "from-orange-500" },
  water: { bg: "bg-blue-500", 
           gradient: "from-blue-500" },
  grass: { bg: "bg-green-500",
           gradient: "from-green-500" },
  electric: { bg: "bg-yellow-400",
             gradient: "from-yellow-400" },
  psychic: { bg: "bg-pink-500",
             gradient: "from-pink-500" },
  poison: { bg: "bg-purple-500",
            gradient: "from-purple-500" },
  normal: { bg: "bg-zinc-400",
            gradient: "from-zinc-400" },
  bug: { bg: "bg-lime-500",
         gradient: "from-lime-500" },
  ghost: { bg: "bg-violet-700",
           gradient: "from-violet-700" },
  fighting: { bg: "bg-red-700",
              gradient: "from-red-700" },
  rock: { bg: "bg-stone-500",
          gradient: "from-stone-500" },
  ground: { bg: "bg-yellow-600",
            gradient: "from-yellow-600" },
  ice: { bg: "bg-cyan-400",
         gradient: "from-cyan-400" },
  dragon: { bg: "bg-indigo-600",
            gradient: "from-indigo-600" },
  dark: { bg: "bg-zinc-700",
          gradient: "from-zinc-700" },
  steel: { bg: "bg-slate-400",
           gradient: "from-slate-400" },
  fairy: { bg: "bg-rose-300",
           gradient: "from-rose-300" },
  flying: { bg: "bg-sky-400",
            gradient: "from-sky-400" },
};