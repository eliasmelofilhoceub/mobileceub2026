import React, {Component} from "react";
import {View, Text, Image, Button, StyleSheet} from 'react-native';

const Card = ({title, description}) => {
  return(
    <View style={sytles.card}>
      <Text style={sytles.title}>{title}</Text>
      <Text style={sytles.description}>{description}</Text>
    </View>
  );
};

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nome: ""
        };
        this.entrar = this.entrar.bind(this);
    }

    entrar(nome) {
        this.setState({
            nome: nome
        })
    }
  render() {
    return(
      <View style={sytles.container}>
        <Text style={{color: '#4B0082', fontSize: 25, margin: 10}}>
          Aplicação Inicial
          </Text>
        <Text>
          Primeiro Projeto - Padrão</Text>
          <Button title="entrar" onPress={() => this.entrar('Seja bem vindo a aplicação')}
          />
          <Text style={{fontSize: 12, color: 'green', textAlign: 'center'}}>
            {this.state.nome}
          </Text>
          <Image
          source={{uri: 'https://inovaveterinaria.com.br/wp-content/uploads/2015/04/gato-sem-raca-INOVA-scaled.jpg'}}
          style={{width: 300, height: 300}}
          />

        <Card title='Título' description='Este é um exemplo de Card'
        />

          <Jobs
          largura={200} altura={200}
          />
      </View>
    );
  }
}
export default App;

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: 'yellow',
  },
  title: {
    fontSize: 16,
    margin: 8,
  },
  description: {
    fontSize: 11,
    color: 'green',
  },
  card: {
    width: 300,
    height: 200,
    padding: 20,
    borderRadius: 10,
  },
})

class Jobs extends Component {
    render(){
        let img = 'https://ciclovivo.com.br/wp-content/uploads/2016/08/foto_natureza_2.jpeg';
        return(
            <View>
                <Image
                source={{uri: img}}
                style={{width: this.props.largura, height: this.props.altura}}
                />
                <Text style={{textAlign: 'center'}}>Imagem de Natureza</Text>
            </View>
        );
    }
}
