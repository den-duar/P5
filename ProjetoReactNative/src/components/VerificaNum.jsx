import { Text } from "react-native";
import Estilos from "./Estilos";

export default ({valor1, valor2}) => {
    
let mensagem;
    
    if (valor1 == valor2){
        mensagem = 'Os valores são iguais'
    }else if (valor1 > valor2){
        mensagem = `O valor 1 (${valor1}) é MAIOR que o valor 2 (${valor2})`
    }else{
        mensagem = `O valor 1 (${valor1}) é MENOR que o valor 2 (${valor2})`
    }

    return <Text style = {Estilos.text}>{mensagem}</Text>;
}
