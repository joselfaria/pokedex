import { typeColors, Pokemon } from "@/types/pokemon";
import Link from "next/link";

async function getPokemon(id: string): Promise<Pokemon> {
const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
return res.json();
}

export default async function PokemonPage({ params }: { params: Promise<{ id: string }> }) {
const { id } = await params;
const pokemon = await getPokemon(id);
const sprite = pokemon.sprites.other["official-artwork"].front_default;
const primaryType = pokemon.types[0].type.name;
const color = typeColors[primaryType];

return (
<main className="min-h-screen flex">

<div className="flex flex-col gap-8 p-16 w-2/3 bg-white">
<div>
<h1>
<Link href="/" className="text-xl text-zinc-400 hover:text-zinc-600 transition-colors">
&larr; Voltar
</Link>
</h1>
<h1 className="text-4xl font-bold capitalize text-zinc-800">{pokemon.name}</h1>
<p className="text-zinc-400 mt-1">#{String(pokemon.id).padStart(3, "0")}</p>
<div className="flex gap-2 mt-3">
{pokemon.types.map(({ type }) => (
<span key={type.name} className={`${typeColors[type.name]?.bg} text-white text-sm px-6 py-1 rounded-full capitalize`}>
{type.name}
</span>
))}
</div>
</div>

<div className="flex gap-8">
<div>
<p className="text-zinc-400">Peso</p>
<p className="text-zinc-800 font-bold">{pokemon.weight / 10} kg</p>
</div>
<div>
<p className="text-zinc-400">Altura</p>
<p className="text-zinc-800 font-bold">{pokemon.height / 10} m</p>
</div>
<div>
<p className="text-zinc-400">Habilidades</p>
<p className="text-zinc-800 font-bold capitalize"><span>{pokemon.abilities.map((a) => a.ability.name).join(", ")}</span></p>
</div>
</div>

<div className="flex flex-col gap-3">
<h2 className="text-lg font-bold text-zinc-700">Stats</h2>
{pokemon.stats.map((s) => (
<div key={s.stat.name} className="flex items-center gap-3">
<span className=" text-zinc-500 capitalize w-32">{s.stat.name}</span>
<div className="flex-1 bg-zinc-200 rounded-full h-2">
<div
className={`${color.bg} h-2 rounded-full`}
style={{ width: `${Math.min((s.base_stat / 255) * 100, 100)}%` }}
/>
</div>
<span className="font-bold text-zinc-700 w-8 text-right">{s.base_stat}</span>
</div>
))}
</div>
</div>

<div className={`w-1/3 ${color.bg} flex items-center justify-center`}>
<img src={sprite} alt={pokemon.name} className="object-contain drop-shadow-2xl w-80 h-80" />
</div>

</main>
);
}