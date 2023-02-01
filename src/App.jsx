import { useState } from "react";
import "./App.css";
import { CardsGrid, SearchPokemon } from "./components";
import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import { fetchData } from "./helpers/fetchData";

export const App = () => {
  const [pokemonArray, setPokemonArray] = useState([]);
  // fetchData("pikachu");

  const onSearchPokemon = (pokemon) => {
    console.log("Inside onSearchPokemon");
    setPokemonArray([...pokemonArray, pokemon]);
  };

  return (
    <>
      <h1>Pokemon</h1>
      <SearchPokemon onSearchPokemon={onSearchPokemon} />

      {pokemonArray.map((pokemon, index) => (
        <PokemonCard key={pokemon[index] + index} pokemon={pokemon} />
      ))}
    </>
  );
};
