import React from "react";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import { Button } from "../components/Botoes";


export function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/background.jpeg")}
        style={styles.ImageBackground}
      >
        <View style={styles.elementos}>
          <View>
            <Image style={styles.logo} source={require("../img/logo.png")} />
          </View>

          <View style={styles.main}>
            <Text style={styles.textHeader}> Bem-Vindo</Text>

            <Button
              texto={"Entrar"}
              onPress={() => navigation.navigate("Menu")}
            />
          </View>
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
  ImageBackground: {
    flex: 1,
  },
  elementos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  main: {
    alignItems: "center",
    marginBottom: 160,
  },

  logo: {
    marginBottom: 50,
    marginTop: 60
  },
  textHeader: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 60,
    },
});
