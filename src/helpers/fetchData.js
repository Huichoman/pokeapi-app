export const fetchData = async (keyWord) => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${keyWord}`;

  const response = await fetch(endpoint);

  const data = await response.json();
  const pokemonData = {
    name: data.name,
    type: data.types[0].type.name,
    id: data.id,
    imgUrl: data.sprites.other.dream_world.front_default,
  };

  // console.log("response >", response);
  // console.log("data >", data);
  // console.log("keyword >", keyWord);
  // console.log("endpoint >", endpoint);
  console.log("pokemon data >", pokemonData);
  return pokemonData;
};
