import React from 'react'
import { Text, View } from 'react-native'

const PrimeiroProps = (props) => {

    const texto = props.numero >= 10 ? "Numero Grande!" : "Numero Pequeno!"
    return (
        
            <Text>
                {texto}
            </Text>
            
        
        
  )
}

export default PrimeiroProps