const limit = 151;

async function main() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await res.json();

  const results = [];
  const batchSize = 10;

  for (let i = 0; i < data.results.length; i += batchSize) {
    const batch = data.results.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(async (pokemon: { url: string }) => {
        const details = await fetch(pokemon.url);
        const json = await details.json();
        return {
          id: json.id,
          name: json.name,
          types: json.types.map((t: { type: { name: string } }) => t.type.name),
        };
      })
    );
    results.push(...batchResults);
    console.log(`${i + batchSize} pokémons fetched...`);
  }

  const fs = await import("fs");
  fs.writeFileSync("data/pokemons.json", JSON.stringify(results, null, 2));
  console.log("Done!");
}

main();