import "./App.css";
import { fetchData } from "./helpers/fetchData";

export const App = () => {
  // const arrayDatos = [46.776, 11.879, 46.7762, 11.883, 46.784, 11.891];

  // const datosCombinados = [];
  // arrayDatos.forEach((element, index) => {
  //   if (index === 0 || index % 2 === 0) {
  //     datosCombinados.push([arrayDatos[index], arrayDatos[index + 1]]);
  //   }
  // });
  // console.log("Array original >", arrayDatos);
  // console.log("Datos combinados >", datosCombinados);

  fetchData("pikachu");

  return <div>Pokemon</div>;
};
