import React, { useState} from "react";
import { Button, Text, View } from "react-native";
import Estilos from "./Estilos";
import Icon from 'react-native-vector-icons/AntDesign';


export default ({ inicial = 0}) => {

    

    const [numero, setNumero] = useState(inicial);

    const [mensagem, setMensagem] = useState();


    function inc(passo){
        setNumero(numero + passo)
    }

    function dec(passo){
        setNumero(numero - passo)

    }


    return(

        <>
        <Text style = {Estilos.text}>
            {numero}
            
        </Text>
        <Text style = {Estilos.text}>
            {mensagem}
        </Text>

        <View style = {Estilos.contador}>
       

        <Icon.Button 
        name = 'doubleleft'
        onPress={() => dec(5)}/>

        <Icon.Button 
        name = 'left'
        onPress={() => dec(1)}/>

         <Icon.Button
        name = 'right'
        onPress={() => inc(1)}/>

        <Icon.Button
        name = 'doubleright'
        onPress={() => inc(5)}/>

        </View>
        <Icon.Button
        name = 'calculator'
        onPress={() => numero%2==0 ? setMensagem('Numero é par!'):setMensagem('Numero é impar!')}
        />
        </>
        
    )

}