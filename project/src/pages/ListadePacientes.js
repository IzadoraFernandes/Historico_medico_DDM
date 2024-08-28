import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CampoCadastroDePaciente from "../components/campocadastrodepaciente";

export function ListadePacientes({ navigation }) {
  const keyAsyncStorage = "@prontuario";

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

  async function DetailsPacient(id) {
    const newData = patient.filter((item) => item.id == id);
    //await loadData();
    navigation.navigate("Prontuário", {
      screen: "Perfil",
      params: newData[0],
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={patient}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CampoCadastroDePaciente
              name={item.name}
              identification={item.identification}
              apagar={() => handleDeletePatient(item.id)}
              details={() => DetailsPacient(item.id)}
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
  toDo: {
    flexDirection: "row",
    justifyContent: "space-around",
    color: "FFFFFF",
  },
});
