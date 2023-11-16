import React from "react";
import { View, Text, SectionList, StyleSheet, Button } from "react-native";
import Estilos from "./Estilos";
import produtos from "./mocks/produtos";



export default props =>{

    const produtosTituloUm = [{
        title: "Produtos Um",
        data: produtos
    }]

    const produtosTituloDois = [{
        title: "Produtos Dois",
        data: produtos
    }]

    const somar = _=>{
        console.warn('Funcao ativa')
    }

    return(
        <View style= {Estilos.view}> 
            <Text style={Estilos.text}>Lista de produto Section:</Text>
            <SectionList
              sections={[...produtosTituloUm, ...produtosTituloDois]}
              renderSectionHeader={({section}) =>(
                <Text>{section.title}</Text>
            )}
                renderItem={({item})=>(
                <Text>{item.nome}  R${item.preco}</Text>
            )}  
                renderSectionFooter={({}) =>(
                    <Button
                        title= 'Somar Todos'
                        onPress={somar}
                    />
            )}
                
            />

        </View>
    )
}