import React from "react";
import { View, StyleSheet } from "react-native";
import { ImageBackground, Image } from "react-native";
import { CardButton } from "../components/CardButton";

export function PaineldeControle({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/background.jpeg")}
        style={styles.imageBackground}
      >
        <View style={styles.elementos}>
          <View style={styles.logo}>
            <Image source={require("../img/logo.png")} />
          </View>

          <CardButton
            texto={"Cadastrar Pacientes"}
            onPress={() => navigation.navigate("Novos Pacientes")}
            imagemdopainel = {require("../img/usuario.png")}
          />
          
          <CardButton
            texto={"Pacientes Cadastrados"}
            onPress={() => navigation.navigate("Pacientes Cadastrados")}
            imagemdopainel = {require("../img/usuariolista.png")}
          />          
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageBackground: {
    flex: 1,
  },
  elementos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  logo: {
    marginBottom: 30,
  },
});
