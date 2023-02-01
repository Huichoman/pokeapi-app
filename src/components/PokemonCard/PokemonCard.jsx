import { useEffect, useState } from "react";
import { fetchData } from "../../helpers/fetchData";
import styles from "./PokemonCard.module.css";

export const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getPokemonData = async () => {
    const newPokemonData = await fetchData(pokemon);
    setPokemonData(newPokemonData);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  useEffect(() => {
    console.log("pokemonData >", pokemonData);
  }, [pokemonData]);

  return (
    <>
      {!isLoading && <div className={styles.pokemoncard}>{pokemonData.id}</div>}
    </>
  );
};
