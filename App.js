import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigation, createNativeStackNavigator} from "@react-navigation/native-stack";


import Home from "./src/Home";
import Sobre from "./src/Sobre";
import Contato from "./src/Contato";

const Stack = createNativeStackNavigator();

export default function App () { 
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home"
          component={Home}
          options={{
            title: 'Tela de Início',
            headerStyle: {
              backgroundColor: '#121212'
            },
            headerTintColor: '#fff',
            headerShown: false
          }}
          />
          <Stack.Screen name="Contato"
          component={Contato}
          options={{
            title: 'Tela de Contatos',
            headerStyle: {
              backgroundColor: '#121212'
            },
            headerTintColor: '#fff',
            headerShown: false
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}



