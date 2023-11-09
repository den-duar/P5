import React, { useState} from "react";
import { Button, Text, View } from "react-native";
import Estilos from "./Estilos";


export default ({ inicial, passo }) => {

    const [numero, setNumero] = useState(inicial);

    const [mensagem, setMensagem] = useState();


    function inc(){
        setNumero(numero + passo)
    }

    function dec(){
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
        <Button 
        title = "+"
        onPress={inc}/>

        <Button 
        title = "-"
        onPress={dec}/>

        </View>
        <Button
        title = "Por ou Impar?"
        onPress={() => numero%2==0 ? setMensagem('Numero é par!'):setMensagem('Numero é impar!')}
        />
        </>
        
    )

}