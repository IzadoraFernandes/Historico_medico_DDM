import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import { Button } from "../components/Botoes";
import { InputTarefa } from "../components/InputTarefa";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function DadosdoPaciente() {
  const keyAsyncStorage = "@historico";

  const [tiposanguineo, setTipoSanguineo] = useState("");
  const [queixas, setQueixas] = useState("");
  const [tratamento, setTratamento] = useState("");
  const [evolucao, setEvolucao] = useState("");
  const [data, setData] = useState("");
  


  const [patient, setPatient] = useState([]);

  async function clear() {
    await AsyncStorage.clear();
  }

  async function handleSavePatient() {
    const data = {
      id: String(new Date().getTime()),
      tiposanguineo: tiposanguineo,
      queixas: queixas,
      tratamento: tratamento,
      evolucao: evolucao,
      data: data,
    };
    setTipoSanguineo("");
    setQueixas("");
    setTratamento("");
    setEvolucao("");
    setData("");

    const vetData = [...patient, data];
    try {
      await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetData));
    } catch (error) {
      Alert.alert("Não foi possível Cadastrar");
    }
  }

  async function handleDeletePatient(id) {
    const newData = patient.filter((item) => item.id != id);
    await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(newData));

    //setPatient(newData);
    await loadData();
  }

  async function loadData() {
    try {
      const retorno = await AsyncStorage.getItem(keyAsyncStorage);
      const dadosPatient = await JSON.parse(retorno);
      console.log("loadData -> ", dadosPatient);
      setPatient(dadosPatient || []);
    } catch (error) {
      Alert.alert("Erro na leitura dos dados");
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/background.jpeg")}
        style={styles.ImageBackground}
      >
        <View style={styles.main}>
          <View style={styles.elementos}>
            <View>
              <Image style={styles.logo} source={require("../img/logo.png")} />
            </View>
          </View>
          <InputTarefa
            default={queixas}
            placeholder={"Queixas"}
            onChangeText={(queixas) => setQueixas(queixas)}
          />
          <InputTarefa
            default={tratamento}
            placeholder={"Tratamentos"}
            onChangeText={(tratamento) => setTratamento(tratamento)}
          />
          <InputTarefa
            default={evolucao}
            placeholder={"Notas de evolução"}
            onChangeText={(evolucao) => setEvolucao(evolucao)}
          />
          <InputTarefa
            default={data}
            placeholder={"Data da consulta"}
            onChangeText={(data) => setData(data)}
          />

          <Button texto={"Cadastrar"} onPress={handleSavePatient} />
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
  logo: {
    marginTop: 30,
    marginBottom: 20,
  },

  textHeader: {
    color: "#FFFFFF",
    fontSize: 28,
    margin: 20,
  },
  main: {
    alignItems: "center",
  },
});
