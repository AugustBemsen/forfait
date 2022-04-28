import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { BsPersonCircle } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.icon}>
        <BsPersonCircle />
      </Text>
      <Text style={styles.icon}>
        <GrNotification />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 25,
    width: "100%",
    padding: 18,
    paddingBottom: 0
  },

  icon: {
    fontSize: "2rem",
  },
});
