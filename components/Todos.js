
import React from "react";
import {Text, View, StyleSheet, Button, FlatList} from "react-native";

function Todo({title, date, removeTodo}){

    return <View style={styles.view}>
        <Text style={styles.text}>
            {title}
        </Text>
        <Text style={styles.text}>
            {date.toLocaleDateString()}
        </Text>
        <Text style={styles.text}>
            {date.toLocaleTimeString()}
        </Text>
        <Button title={"DONE"} onPress={removeTodo}/>
    </View>
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
        justifyContent: "space-between",
        margin: 10,
        marginTop: 0,
        borderRadius: 5
    },
    text: {
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 5,
        color: "white"
    }
})