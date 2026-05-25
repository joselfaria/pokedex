"use client";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div
      className="bg-white/20 flex items-center px-4 py-3 gap-2 w-full"
      style={{ borderRadius: '12px' }}
    >
      <img src="search.svg" alt="search" height="20" width="20" className="opacity-70 flex-shrink-0" />
      <input
        type="text"
        placeholder="Buscar Pokémon por nome ou ID"
        className="bg-transparent outline-none w-full text-white placeholder-white/70 text-sm"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
