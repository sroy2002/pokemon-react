import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
export const Search = ({ cards, cardFunc }) => {
  const [searchWord, setSearchWord] = useState("");
  const handleSearch = () => {
    const filteredPokemons = cards.filter((poke) => {
      return poke.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    cardFunc(filteredPokemons);
  };
  const handleCross = async () =>{
    setSearchWord("");
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    const details = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonDetails = await fetch(pokemon.url);
        return pokemonDetails.json();
      })
    );
    cardFunc(details);
    
  }
  return (
    <div className="flex justify-center items-center my-8 w-full ">
      <div className="relative w-[40%]">
        <input
          type="text"
          value={searchWord}
          className="w-full rounded-full px-6 p-3 pr-12 "
          placeholder="Search Pokemons"
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <div className="flex gap-2 ">
         
          <FiSearch
            className=" text-black bg-white absolute right-6 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
            size={30}
            onClick={handleSearch}
          />
          { (searchWord) &&

            <RxCross1
            className=" text-black bg-white absolute right-[4rem] top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
            size={20}
            onClick={handleCross}
            />
          }
        </div>
      </div>
    </div>
  );
};
