import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function Button({ texto, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 260,
    backgroundColor: "#FF0D47",
    borderRadius: 13,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
