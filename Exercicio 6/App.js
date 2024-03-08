import { Text, StyleSheet, View, Image, Pressable,  } from 'react-native';
import React, { useState, useEffect } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [result, setResult] = useState(null);
  const [visible, setVisible] = useState(false);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 11);
    setResult(randomNumber);
    setVisible(true);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Jogo do n° Aleatorio
      </Text>
      <Imagem />
      <Text style={styles.result}>
        Pense em um número de 0 a 10
      </Text>
      {visible && (
      <Text style={styles.result}>
       {result}
      </Text>
      )}
      <Pressable style={styles.button} onPress={generateRandomNumber}>
        <Text style={styles.buttonText}>Descobrir</Text>
      </Pressable>
    </View>
  );
}

function Imagem(){
  let img = 'https://cdn.pixabay.com/photo/2014/09/25/19/36/question-mark-460864_640.png';
  return(
    <Image
    source={{ uri: img }}
    style={{ width: 200, height: 200, marginBottom: 30 }}
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
    margin: 20,
    color: 'red',
    fontSize: 24
  }
});