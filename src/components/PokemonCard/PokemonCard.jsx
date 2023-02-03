import { useEffect, useState } from "react";
import { fetchData } from "../../helpers/fetchData";
import { useFetchData } from "../../hooks/usefetchData";

import styles from "./PokemonCard.module.css";

export const PokemonCard = ({ pokemon }) => {
  // const [pokemonData, setPokemonData] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const getPokemonData = async () => {
  //   const newPokemonData = await fetchData(pokemon);
  //   setPokemonData(newPokemonData);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getPokemonData();
  // }, []);

  // useEffect(() => {
  //   console.log("pokemonData >", pokemonData);
  // }, [pokemonData]);

  const { pokemonData, isLoading } = useFetchData(pokemon);

  return (
    <>
      {!isLoading && (
        <div className={styles.pokemoncard}>
          {pokemonData.name}
          <img src={pokemonData.imgUrl} />
        </div>
      )}
    </>
  );
};
