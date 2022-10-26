import React, {useState} from "react"
import {View, StyleSheet, Button, TextInput, Alert} from "react-native"

function newTodo(title){
    return {
        title,
        date: new Date(),
    }
}

export default function Form({setTodos}){

    const [value, setValue] = useState("")

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                placeholder={"Enter the text"}
                onChangeText={text => setValue(text)}
            />
            <Button
                style={styles.button}
                title={"Add"}
                onPress={() => {
                    if (value.trim()) {
                        setValue("")
                        setTodos(prev => [...prev, newTodo(value)])
                    }
                    else {
                        Alert.alert("Enter the title of todo!")
                    }
                }}
            />
            <Button
                style={styles.button}
                title={"Clear"}
                onPress={()=>setTodos([])}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        width: 270,
        height: 40,
        fontSize: 20,
        borderRadius: 15,
        color: "white",
        backgroundColor: "#626262"
    },
    button: {
        backgroundColor: "black",
        height: 10
    }
})