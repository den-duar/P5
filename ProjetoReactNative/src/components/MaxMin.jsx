import { Text } from "react-native";
import Estilos from "./Estilos";

export default ({x, y}) => {
    
let mensagem;
    
    if (x == y){
        mensagem = `Valor ${x} e ${y} são iguais`
    }else if (x > y){
        mensagem = `Valor ${x} é MAIOR que o valor ${y}`
    }else{
        mensagem = `Valor ${y} é MAIOR que o valor ${x}`
    }

    return <Text style = {Estilos.text}>{mensagem}</Text>;
}
