import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export function Perfil({ navigation }) {
  const route = useRoute();
  const currentData = route.params;
  console.log(currentData);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require("../img/perfil.png")} />
      </View>
      <View>
        <Text style={styles.campo}>
          <Text style={styles.campoTexto}>Nome: </Text>
          {currentData.name}
        </Text>
        <Text style={styles.campo}>
          <Text style={styles.campoTexto}>Idade: </Text>
          {currentData.age}
        </Text>
        <Text style={styles.campo}>
          <Text style={styles.campoTexto}>Sexo: </Text>
          {currentData.sex}
        </Text>
        <Text style={styles.campo}>
          <Text style={styles.campoTexto}>Data de nascimento: </Text>
          {currentData.dateofbirth}
        </Text>
        <Text style={styles.campo}>
          <Text style={styles.campoTexto}>Identificação: </Text>
          {currentData.identification}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  campo: {
    marginLeft: 40,
    marginTop: 30,
    fontSize: 20,
    color: "#FF0D47",
  },
  logo: {
    marginLeft: 140,
  },
  campoTexto:{
    color: "#000000",
  },
  container:{
    backgroundColor: "#FFFFFF",
    flex: 1

  }
});
