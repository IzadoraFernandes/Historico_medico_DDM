import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CampoCadastroDeDados from "../components/campocadastrodedados";


export function Historico({navigation}) {
  const keyAsyncStorage = "@historico";

  const [patient, setPatient] = useState([]);

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

  async function handleDeletePatient(id) {
    const newData = patient.filter((item) => item.id != id);
    await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(newData));
    loadData();
  }



  return (
    <View style={styles.container}>
      <View>
      <FlatList
          data={patient}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CampoCadastroDeDados
              tiposanguineo = {item.tiposanguineo}
              queixas = {item.queixas}
              tratamento = {item.tratamento}
              evolucao = {item.evolucao}
              apagar={() => handleDeletePatient(item.id)}
             
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
  },
  containerToDo: {
    width: 350,
    backgroundColor: "#FF0D47",
    marginVertical: 20,
    borderRadius: 4,
    paddingVertical: 10,
  },
});
