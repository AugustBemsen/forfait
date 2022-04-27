import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Flash() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo} >Forfait</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "linear-gradient(354.43deg, rgba(222, 140, 3, 0.97) 0.37%, #FFC462 95.54%)",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    fontSize: "40px",
    fontWeight: "700",
    color: "#fff",
  }

});
