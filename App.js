
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';

class App extends Component{
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        nome: ''
      };

      this.gravaNome = this.gravaNome.bind(this);
      }

      async componentDidMount() {
        await AsyncStorage.getItem().then((value) => {
          this.setState({nome: value})
        })
      }

      async componentDidUpdate(_, prevState) {
        const nome = this.state.nome;

        if(prevState !== nome) {
          await AsyncStorage.setItem('nome', nome);
        }
      }

      gravaNome() {
        this.setState({
          nome: this.state.input
        });
        alert('Salvo com sucesso!!!')
        Keyboard.dismiss();
      }
    

  render() {
      return(
        <View style={sytles.container}>
        <View style={sytles.ViewInput}>
          <TextInput
          style={sytles.input}
          value={this.state.input}
          onChangeText={(text) => this.setState({input: text})}
          underlineColorAndroid="transparent"
          />

          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={sytles.botao}>+</Text>
          </TouchableOpacity>

          <Text style={sytles.nome}>{this.state.nome}</Text>
        </View>
        </View>

    );
  }

}


const sytles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  ViewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 360,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: 'black',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center',
  }
});

export default App;
