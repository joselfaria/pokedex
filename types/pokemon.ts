export interface Pokemon {
  id: number;
  name: string;
  types: string[];
}

export const typeColors: Record<string, string> = {
  fire: "bg-orange-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400",
  psychic: "bg-pink-500",
  poison: "bg-purple-500",
  normal: "bg-zinc-400",
  bug: "bg-lime-500",
  ghost: "bg-violet-700",
  fighting: "bg-red-700",
  rock: "bg-stone-500",
  ground: "bg-yellow-600",
  ice: "bg-cyan-400",
  dragon: "bg-indigo-600",
  dark: "bg-zinc-700",
  steel: "bg-slate-400",
  fairy: "bg-rose-300",
  flying: "bg-sky-400",
};