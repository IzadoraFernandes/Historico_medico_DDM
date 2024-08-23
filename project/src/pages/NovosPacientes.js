import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Button } from "../components/Botoes";
import { InputTarefa } from "../components/InputTarefa";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function NovosPacientes() {
  const keyAsyncStorage = "@prontuario";

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [identification, setIdentification] = useState("");

  const [patient, setPatient] = useState([]);

  async function clear() {
    await AsyncStorage.clear();
  }

  async function handleSavePatient() {
    const data = {
      id: String(new Date().getTime()),
      name: name,
      age: age,
      sex: sex,
      dateofbirth: dateofbirth,
      identification: identification,
    };

    const vetData = [...patient, data];
    try {
      await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetData));
    } catch (error) {
      Alert.alert("Não foi possível Cadastrar Paciente");
    }

    setName(""),
    setAge("");
    setSex("");
    setDateofbirth("");
    setIdentification("");
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
        <View style={styles.elementos}>
          <View>
            <Image style={styles.logo} source={require("../img/logo.png")} />
            <Text style={styles.textHeader}>Identificação</Text>
          </View>

          <View style={styles.main}>
            <InputTarefa
              default={name}
              placeholder={"Nome"}
              onChangeText={(name) => setName(name)}
            />
            <InputTarefa
              default={age}
              placeholder={"Idade"}
              onChangeText={(age) => setAge(age)}
            />
            {/* <Select options={} onChange={(cetegoria) => setCategory(categoria)}/> */}
            <InputTarefa
              default={sex}
              placeholder={"Sexo"}
              onChangeText={(sex) => setSex(sex)}
            />
            <InputTarefa
              default={dateofbirth}
              placeholder={"Data de Nascimento"}
              onChangeText={(dateofbirth) => setDateofbirth(dateofbirth)}
            />
            <InputTarefa
              default={identification}
              placeholder={"Identificação do Paciente"}
              onChangeText={(identification) =>
                setIdentification(identification)
              }
            />
          </View>

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
  elementos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 96,
  },

  logo: {
    marginLeft: 45,
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
