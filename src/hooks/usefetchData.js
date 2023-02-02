import { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = (pokemon) => {
  //const {pokemonData, isLoading} = useFetchData( pokemon );

  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState("");

  const getNewPokemonData = async (pokemon) => {
    const newPokemonData = await fetchData(pokemon);
    console.log(newPokemonData);
    setPokemonData(newPokemonData);
    setIsLoading(false);
  };

  useEffect(() => {
    getNewPokemonData(pokemon);
  }, []);

  return {
    pokemonData: pokemonData,
    isLoading: isLoading,
  };
};
