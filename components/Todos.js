
import React from "react";
import {Text, View, StyleSheet, Button, FlatList, TouchableOpacity} from "react-native";

function Todo({title, date, removeTodo}){

    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={styles.touchAbleOpacity}
                activeOpacity={0.6}
                onLongPress={()=>console.log(title, date)}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
                <Text style={styles.text}>
                    {date.toLocaleDateString()}
                </Text>
                <Text style={styles.text}>
                    {date.toLocaleTimeString()}
                </Text>
            </TouchableOpacity>
            <Button title={"DONE"} onPress={removeTodo}/>
        </View>
    )
}

export default function Todos({todos, setTodos}){

    function removeTodo(index){
        setTodos(prev=>prev.filter((elm, idx)=>idx !== index))
    }

    return <FlatList
        data={todos}
        renderItem={({item: todo, index})=> <Todo
                removeTodo={() => removeTodo(index)}
                {...todo}
            />}
        keyExtractor={item => item.date.getTime().toString()}
    />

}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#747474",
        flexDirection: "row",
        margin: 10,
        marginTop: 0,
        borderRadius: 5,
        width: 390
    },
    text: {
        fontSize: 20,
        marginHorizontal: 15,
        marginVertical: 5,
        maxWidth: 100,
        color: "white"
    },
    touchAbleOpacity: {
        flexDirection: "row",
        width: 340,
        justifyContent: "space-between",
    }
})