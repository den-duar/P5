import React from "react";
import { View, Text, FlatList } from "react-native";
import Estilos from "./Estilos";
import produtos from "./mocks/produtos";

    const produtoRender = ({item}) =>{
        return <Text>{item.id}) {item.nome} {item.preco}</Text>
    }

export default props =>{
    return(
        <View> 
            <Text style={Estilos.text}>Lista de produto 2:</Text>
                <FlatList
                    keyExtractor={i => i.id}
                    data={produtos}
                    renderItem={produtoRender}
                />
        </View>
    )
}