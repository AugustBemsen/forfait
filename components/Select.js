import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Select({ label, items, value, setValue }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: "1.3rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "18px",
    color: "#161616",
    marginBottom: "1rem",
  },
  input: {
    backgroundColor: "rgba(243, 243, 243, 0.3)",
    border: "2px solid #161616",
    borderRadius: "8px",
    width: "100%",
    padding: "1rem",
  },
});
