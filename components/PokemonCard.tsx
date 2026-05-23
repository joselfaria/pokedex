import {typeColors } from "@/types/pokemon";
import Link from "next/link";

export default function PokemonCard({ pokemon }: { pokemon: { id: number; name: string; types: string[] } }) {
  const spriteUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png?raw=true`;
  const paddedId = String(pokemon.id).padStart(3, "0");
  const primaryType = pokemon.types[0];

  return (
    <Link href={`/pokemon/${pokemon.id}`}>

      <div 
      className="relative flex flex-col items-center hover:scale-105 transition-transform duration-200 overflow-hidden w-full"
      style={{
        fontFamily: "Poppins, sans-serif",
        height: "313px",
        borderRadius: "24px",
        boxShadow: "6px 6px 4px 0 rgba(0, 0, 0, 0.34)",
        backdropFilter: "blur(2px)",
      }}
      >

        {/* Top section — colored background */}
        <div
          className={`relative flex items-center justify-center w-full  ${typeColors[primaryType].bg} `}
          style={{ 
            height: "195px",
            backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.20), rgba(0, 0, 0, 0.20))"
          }}  
        >
          
          {/* Decorative Pokeball */}   
          <img 
            src="/pokeball-background.webp" 
            alt="pokeball-background"
            className="absolute -left-30"
          />

          {/* Sprite wrapper: projected shadow (z-0) + sprite (z-10) */}
          <div className="relative flex items-center justify-center w-full" style={{ pointerEvents: 'none' }}>
            {/* ground shadow (elliptical, responsive) */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                bottom: '6%',
                width: 'clamp(6rem, 18vw, 9rem)',
                height: 'clamp(0.9rem, 2.2vw, 1.6rem)',
                background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.15))',
                borderRadius: '50%',
                filter: 'blur(6px)',
                transform: 'translateY(18%)',
                opacity: 0.65,
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Pokémon sprite */}
            <img
              src={spriteUrl}
              alt={pokemon.name}
              className="relative z-10 object-contain"
              style={{ width: 'clamp(7rem, 22vw, 10rem)', height: 'auto' }}
            />
          </div>
        </div>

        {/* Bottom section — white */}
        <div 
          className="flex flex-col justify-center flex-1 w-full px-4 py-4 gap-2 bg-white"
        >

          {/* Name */}
          <p className="text-gray-900 font-medium text-lg capitalize">
            {pokemon.name}
          </p>

          {/* Number */}          
          <p className="text-gray-900 font-medium text-sm" style={{ marginTop: "-10px", opacity: 0.6 }}>
            N°{paddedId}
          </p>

          {/* Type badges */}
          <div className="flex gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={`${typeColors[type].bg} text-white text-xs font-medium px-4 py-1 rounded-full capitalize`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
        
      </div>


    </Link>
  );
}
