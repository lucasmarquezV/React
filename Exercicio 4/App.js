import { Text, TextInput, StyleSheet, View, Image, Pressable,  } from 'react-native';
import React, { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [gasolina, setGalsolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [result, setResult] = useState('');

  function calc(){
    if(alcool / gasolina < 0.7){
      setResult('Etanol é melhor');
    } else{
      setResult('Gasolina é melhor');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Alcool ou Gasolina
      </Text>
      <Imagem />
      <TextInput
        style={styles.input}
        placeholder="Preço do Alcool"
        onChangeText = {(gasolina) => setGalsolina(gasolina)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina°"
        onChangeText = {(alcool) => setAlcool(alcool)}
      />
      <Pressable style={ styles.button} onPress={calc}>
        <Text style={styles.buttonText}>Verificar</Text>
    < /Pressable>
    <Text style={styles.result}>
        {result}
    </Text>
    </View>
  );
}

function Imagem(){
  let img = 'https://th.bing.com/th/id/R.56ccadf128cfb77a382a79d159343b9f?rik=zFMVGrQwLB4H4g&riu=http%3a%2f%2fwww.carrodegaragem.com%2fwp-content%2fuploads%2f2016%2f03%2fcombustiveis.jpg&ehk=kKgYQFUcvq55btnvv6xYX5g89eKRJTHek0l0vYEJ1Oc%3d&risl=&pid=ImgRaw&r=0';
  return(
    <Image
    source={{ uri: img }}
    style={{ width: 250, height: 150, marginBottom: 30 }}
    />
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 26,
  },
  input:{
    height: 50,
    borderWidth: 1,
    borderColor: '#222',
    margin: 5,

    fontSize: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'lightgreen',
    width: '80%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 2
  },

  buttonText: {
    fontSize: 30,
  },
  result: {
    marginTop: 30,
    color: 'red',
    fontSize: 32
  }
});
