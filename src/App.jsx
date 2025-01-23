import api_url from "./api";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { Search } from "./components/Search";
function App() {
  const [pokemonCard, setPokemonCard] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(api_url);
      const data = await response.json();
      const details = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonDetails = await fetch(pokemon.url);
          return pokemonDetails.json();
        })
      );
      setPokemonCard(details);
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      <div className=" m-4 flex justify-center items-center">
        <h1 className="text-3xl text-white poppins-semibold ">POKEMON CARDS</h1>
      </div>
      <div className="w-full">
        <Search cards={pokemonCard} cardFunc={setPokemonCard}/>
      </div>
      <div className="flex items-center  flex-wrap justify-center">
        {pokemonCard.map((poke) => (
          <Card
            key={poke.id}
            name={poke.name}
            image={poke.sprites.front_default}
            alt_name={poke.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
