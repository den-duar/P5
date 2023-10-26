import Primeiro from "./src/components/Primeiro";
import PrimeiroProps from "./src/components/PrimeiroProps";
import { View } from "react-native";
import Estilos from "./src/components/Estilos";
import { Group1, Group2 } from "./src/components/Multi";
import Aleatorio from "./src/components/Aleatorio";
import VerificaNum from "./src/components/VerificaNum";

export default function App() {
  return (

      <View style = {Estilos.view}>
        <Aleatorio min={7} max = {99}/>
        <Aleatorio min={7} max = {99}/>
        <Aleatorio min={7} max = {99}/>
        <Primeiro/>
        <PrimeiroProps/>
        <Group1/>
        <Group2/>
        <VerificaNum valor1={10} valor2={9}/>
        <VerificaNum valor1={1} valor2={90}/>
        <VerificaNum valor1={2} valor2={2}/>
      </View>

  );
}

/*
Grupo: 
1 Alexandre de Carvalho Paiva ;
2 Dennis França de Oliveira Duarte;
3 José Roberto da Silva Junior;
4 Mateus Jonas Ferreira
5 Josimere Santos da Silveira Garcia;
6 João Guilherme Silveira Garcia
*/

