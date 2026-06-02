import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigation} from "@react-navigation/bottom-tabs";


import Home from "./src/Home";
import Sobre from "./src/Sobre";
import Contato from "./src/Contato";

const Tab = createBottomTabNavigation();

export default function App () { 
  return(
      <NavigationContainer>
        <Tab.Navigation
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
        }}
      
        >
        <Tab.Screen
        name="Home"
        component={Home}
        />

        <Tab.Screen
        name="Sobre"
        component={Sobre}
        />

        <Tab.Screen
        name="Contato"
        component={Contato}
        />

      </Tab.Navigation>
      </NavigationContainer>
  );
}



