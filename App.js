import React, {Component} from "react";
import {View, Text, StyleSheet, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from "@react-native-community/slider";

class App extends Component{
    constructor(props) {
      super(props);
      this.state = {
        status: false,
        pizza: 0,
        pizzas: [
          {key: 1, nome: " Calabresa", valor: 50.00},
          {key: 1, nome: " Cachorro-Quente", valor: 60.00},
          {key: 1, nome: " Frango", valor: 80.00},
          {key: 1, nome: " Milho", valor: 45.00},
          {key: 1, nome: " Portuguesa", valor: 55.00},
          {key: 1, nome: " Marguerita", valor: 70.00},
          {key: 1, nome: " Marguerita", valor: 70.00},
          {key: 1, nome: " Marguerita", valor: 70.00},
          {key: 1, nome: " Marguerita", valor: 70.00},
        ] 
      };
    };

  render() {
      let pizzasItem = this.state.pizzas.map((v, k) => {
        return <Picker.Item key={k} value={k} label={v.nome}/>
      })
      return(
        <View style={sytles.container}>
          <Text style={sytles.menu}></Text>
          <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}
          >
          {pizzasItem}
          </Picker>
          <Text style={sytles.pizzas}>Você escolheu o sabor: 
            {this.state.pizzas[this.state.pizza].nome}
          </Text>
          <Text style={sytles.pizzas}> Valor: R$
            {this.state.pizzas[this.state.pizza].valor}
          </Text>

          <Switch
          value={this.state.status}
          onValueChange={(valorswitch) => this.setState({status: valorswitch})}
          thumbColor="blue"
          />


          <Text style={{textAlign: 'center', fontSize: 40}}>
            {(this.state.status) ? "Ativo " : "Inativo"}
          </Text>

          <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorselecionado) => this.setState({valorslider: valorselecionado})}
          value={this.state.valorslider}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          />

          <Text style={{textAlign: 'center', fontSize: 35}}>
            {this.state.valorslider}
          </Text>
        </View>
    );
  }
}


const sytles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  menu: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  }, 
});

export default App;
