import { StyleSheet, View,} from 'react-native';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import {useState} from "react";
import Todos from "./components/Todos";

export default function App() {

    const [todos,  setTodos] = useState([])

    return (
        <View style={styles.view}>
            <Navbar/>
            <Form setTodos={setTodos}/>
            <Todos
                todos={todos}
                setTodos={setTodos}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "rgba(49,49,49,0.9)",
    }
})