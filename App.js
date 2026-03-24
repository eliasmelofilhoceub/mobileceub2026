import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          feed: [
            {id: '1', nome: 'João', idade: '20'},
            {id: '2', nome: 'Maria', idade: '30'},
            {id: '3', nome: 'Ana', idade: '40'},
            {id: '4', nome: 'Clara', idade: '50'},
          ]
        };
    }
  render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Person data={item}/>}
        />
      </View>     
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    areaPessoa: {
      backgroundColor: 'yellow',
      height: 100,
      marginBottom: 15,
    },
    textoPessoa: {
      color: 'red',
      fontSize: 18,
    },
}); 

export default App;

class Person extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.idade}</Text>
      </View>
    );
  }
}

