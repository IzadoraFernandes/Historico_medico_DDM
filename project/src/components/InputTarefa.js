import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export function InputTarefa(props) {
  return (
    <View style={styles.inputArea}>
      <Icon name={props.iconName} style={styles.IconStyle} />
      <TextInput
        defaultValue={props.default}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    width: 280,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B2B2B2",
    paddingVertical: 12,
    marginBottom: 15,
    flexDirection: "row",
  },
  input: {
    color: "#FF0D47",
    fontSize: 18,
  },
  IconStyle: {
    marginLeft: 10,
    fontSize: 25,
    marginRight: 10,
    color: "#FF0D47",
  },
});
