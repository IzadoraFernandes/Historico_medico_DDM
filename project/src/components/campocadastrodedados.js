import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon3 from "react-native-vector-icons/AntDesign";

export default function CampoCadastroDeDados(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.textContact}>{props.identification}</Text>
        <Text style={styles.textContact}>{props.tiposanguineo}</Text>
        <Text style={styles.textContact}>{props.queixas}</Text>
        <Text style={styles.textContact}>{props.tratamento}</Text>
        <Text style={styles.textContact}>{props.evolucao}</Text>
      </View>
      <View style={styles.icones}>
        <TouchableOpacity onPress={props.apagar}>
          <Icon3 name="delete" style={styles.IconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    padding: 10,
    width: 360,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FF0D47",
    borderWidth: 1,
    borderColor: "#B6B4B4",
    borderRadius: 10,
    margin: 5,
  },
  textContact: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  text:{
    marginBottom: 20
  },

  IconStyle: {
    margin: 10,
    fontSize: 25,
    color: "#FFFFFF",
  },
  icones:{
    flexDirection: "row",
  }
});
