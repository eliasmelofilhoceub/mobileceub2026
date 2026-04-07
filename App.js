import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    
    const [nome, setNome] = useState("Nome XY");
    const [input, setInput] = useState('');

    function alteracaoNome() {
      setNome(input);
      setInput('');
    }
  
      return(
          <View style={sytles.container}>
            <TextInput
            placeholder="Digite seu nome: "
            value={input}
            onChangeText={(texto) => setInput(texto)}
            />

            <TouchableOpacity onPress={alteracaoNome}>
          <Text style={{color: 'red', fontSize: 20}}>Altere o nome</Text>
            </TouchableOpacity>

            <Text style={{color: 'yellow', fontSize: 25}}>{nome}</Text>
          </View>
      );
}
  
const sytles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
  },

});



