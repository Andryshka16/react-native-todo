import {Text, View, StyleSheet} from "react-native";

export default function Navbar(){
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Todo app</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(107,107,107,0.9)",
    },
    text: {
        fontSize: 25,
        color: "white",
    }

})