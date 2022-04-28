import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, title, outlined = false } = props
  return (
    <Pressable
      style={outlined ? styles.outlined : styles.filled}
      onPress={onPress}
    >
      <Text style={outlined ? styles.text2 : styles.text1}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  filled: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: "#FFA902",
    minWidth: 120,
  },

  outlined: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 3,
    minWidth: 120,
    borderWidth: 1,
    borderColor: "#FFA902",
  },

  text1: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    color: "#FFA902",
  },
});
