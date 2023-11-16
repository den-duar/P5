import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";


export default props =>{


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const logar = _=>{
        console.warn(`Email: ${email}    Password: ${password}`)
    }

    return (
        <View>
            <TextInput
                style={{borderWidth:1}}
                keyboardType="email-address"
                placeholder="Email"
                value={email}
                onChangeText={email => setEmail(email)}
            />

            <TextInput
                style={{borderWidth:1}}
                secureTextEntry
                keyboardType="number-pad"
                placeholder="Password"
                value={password}
                onChangeText={password => setPassword(password)}
            />

            <Button
                title="Logar"
                onPress={logar}
            />
        </View>
    )
}