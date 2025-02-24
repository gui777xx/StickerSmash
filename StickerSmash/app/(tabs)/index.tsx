import { Text, View, StyleSheet, Button } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      

      <Text style={styles.text}>Home</Text>
      <Link href="/about" style={styles.button}>
        Quati Indiano
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252926",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#FF0004",
    marginTop: 10, 
  },

})
