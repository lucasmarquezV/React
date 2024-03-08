import { Text, TextInput, StyleSheet, View, Image, Pressable,  } from 'react-native';
import React, { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [result, setResult] = useState('');

  function calc(){
    let imc = peso / (altura * altura);
    if(imc < 18.5){
      setResult('Abaixo do Peso');
    } else if(imc >= 18.5 && imc < 25){
      setResult('Peso Normal');
    } else if(imc >= 25 && imc < 30){
      setResult('Sobrepeso');
    } else if(imc >= 30 && imc < 35){
      setResult('Obesidade Grau I');
    } else if(imc >= 35 && imc < 40){
      setResult('Obseidade Grau II');
    } else{
      setResult('Obseidade Grau III ou Morbida');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Calculo de IMC
      </Text>
      <Imagem />
      <TextInput
        style={styles.input}
        placeholder="Peso"
        onChangeText = {(peso) => setPeso(peso)}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        onChangeText = {(altura) => setAltura(altura)}
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
  let img = 'https://th.bing.com/th/id/OIP.yMOdBvjqu3bNkC9yKbVwIgAAAA?rs=1&pid=ImgDetMain';
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
