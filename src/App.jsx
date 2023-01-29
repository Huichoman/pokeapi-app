import "./App.css";
import { PokemonCard } from "./components/PokemonCard/PokemonCard";
import { fetchData } from "./helpers/fetchData";

export const App = () => {
  fetchData("pikachu");

  return (
    <>
      <div>Pokemon</div>
      <PokemonCard />
    </>
  );
};
