import { useState } from "react";
import styles from "./SearchPokemon.module.css";

export const SearchPokemon = ({ onSearchPokemon }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchPokemon(inputValue);
    console.log("submit value >", inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Buscar pokemon </h2>
      <input
        type="text"
        placeholder="Enter pokemon name to search"
        value={inputValue}
        onChange={onInputChange}
      />

      <button type="submit">Search</button>
    </form>
  );
};
