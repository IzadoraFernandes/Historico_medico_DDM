import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Login } from "./pages/Login";
import { PaineldeControle } from "./pages/PaineldeControle";
import { NovosPacientes } from "./pages/NovosPacientes";
import { ListadePacientes } from "./pages/ListadePacientes";
import { Perfil } from "./pages/Perfil";
import { DadosdoPaciente } from "./pages/DadosdoPaciente";
import { Historico } from "./pages/Historico";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function RoutesStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Menu" component={PaineldeControle} />

      <Stack.Screen name="Novos Pacientes" component={NovosPacientes} />

      <Stack.Screen name="Pacientes Cadastrados" component={ListadePacientes} />

      <Stack.Screen name="Prontuário" component={Routes} />
      
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 

        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color="#FF0D47" />
          )
        }}
        
      />

      <Tab.Screen
        name="Dados do Paciente"
        component={DadosdoPaciente}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard" size={24} color="#FF0D47" />
          ),
        }}
      />

      <Tab.Screen
        name="Historico"
        component={Historico}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="list" size={24} color="#FF0D47" />
          ),
        title:"Histórico"
        }}
      />
    </Tab.Navigator>
  );
}
