import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
export function CardButton({ texto, onPress, imagemdopainel }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.imagem} source={imagemdopainel} />
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  texto: {
    color: "#FF0D47",
    fontSize: 20,
    marginBottom: 18,
    padding: 30,
  },
  imagem:{
    marginLeft: 10,
  }
});
