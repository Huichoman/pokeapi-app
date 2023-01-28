export const fetchData = async (keyWord) => {
  console.log("keyWord > ", keyWord);
  const endPoint = `https://pokeapi.co/api/v2/pokemon/${keyWord}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  const pokemonData = {
    id: data.id,
    name: data.name,
    type: data.types[0].type.name,
    image: data.sprites.other.dream_world.front_default,
  };

  return pokemonData;
  // console.log(pokemonData);
  //   console.log("response >", response);
  console.log("data >", data);
};
