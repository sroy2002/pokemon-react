import api_url from "./api"
import Card from "./components/Card";
import { useEffect, useState } from "react";
function App() {
  const [pokemonCard, setPokemonCard] = useState([]);
  useEffect(()=>{
    const fetchPokemon = async () =>{
      const response = await fetch(api_url);
      const data = await response.json();
      const details = await Promise.all(
        data.results.map(async (pokemon)=>{
          const pokemonDetails = await fetch(pokemon.url);
          return pokemonDetails.json();
        })
      );
      setPokemonCard(details);
    };
    fetchPokemon();
  },[]);
  
  return (
    <div >
      <div className=" m-4 flex justify-center items-center">
        <h1 className="font-bold text-3xl text-white">POKEMON CARDS</h1>
      </div>
        {console.log(pokemonCard)}
      <div>
        {
          pokemonCard.map((pokemon)=>(
            <div>
              <img src={pokemon.sprites.front_default} alt="" />
            </div>

          ))
         
        }
      </div>
    </div>
  );
}

export default App;
