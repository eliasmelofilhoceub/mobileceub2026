import {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {} from './src/firebaseConfig';
import {doc, getDoc, onSnapshot} from 'firebase/firestore';

export default function App2 {
    const [nome, setNome] = useState("Carregando")

    useEffect (() => {
        async function getDados() {
            
            onSnapshot(doc("usuario", 1), (doc) => {
                setNome(doc.data() ?.nome)
            })
        }

        getDados();
    }, [])
    return(
        <View style={style.container}>
            <Text>Nome: {nome}</Text>
        </View>
    );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  }  
})