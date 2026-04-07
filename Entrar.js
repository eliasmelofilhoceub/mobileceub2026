import React, {Component} from "react";
import {View, Text, Button} from 'react-native';

export default class Entrar extends Component {
    render() {
        return(
            <View style={{
                backgroundColor: 'blue,',
                width: '100%',
                height: 350,
                borderRadius: 15,
                }}>
                <Text style={{marginTop: 15, color: 'red', fontSize: 25, textAlign: 'center'}}>
                Seja bem vindo a minha aplicação!!!!
                </Text>
                <Button title="Sair" onPress={this.props.fechar}/>
            </View>
        );
    }
}