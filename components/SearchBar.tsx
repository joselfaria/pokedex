"use client";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="bg-white/20 border border-white/40 rounded-full px-4 py-2 w-64">
      <input
        type="text"
        placeholder="🔍 Buscar Pokémon..."
        className="bg-transparent outline-none w-full text-white placeholder-white/70 text-sm"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}