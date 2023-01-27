export const fetchData = async (keyWord) => {
  console.log("keyWord > ", keyWord);
  const endPoint = `https://pokeapi.co/api/v2/pokemon/${keyWord}`;
  const apiKey = "rnY4RhqwuO7FUe1Fl9Q93dzyTKOqZ337";
  //   const endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyWord}&limit=5&offset=0&rating=g&lang=en`;

  const response = await fetch(endPoint);
  const data = await response.json();
  const pokemonData = {
    id: data.id,
    name: data.name,
    type: data.types[0].type.name,
    image: data.sprites.other.dream_world.front_default,
  };

  console.log(pokemonData);
  //   console.log("response >", response);
  console.log("data >", data);
};
