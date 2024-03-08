import React, { useState } from 'react';
import { Text, StyleSheet, Pressable, View, TextInput } from 'react-native';

export default function App() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [result, setResult] = useState(0);

  function calc() {
    setResult(n1 * n2)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multiplicador de Numeros</Text>
    <TextInput
    style={styles.input}
    placeholder="Digite o primeiro n°"
    onChangeText= {(num) => setN1(num)}
    />
    <TextInput
    style={styles.input}
    placeholder="Digite o Segundo n°"
    onChangeText = {(num) => setN2(num)}
    />
    <Pressable style={ styles.button} onPress={calc}>
        <Text style={styles.buttonText}>Calcular</Text>
    </Pressable>
    <Text style={styles.result}>
      Resultado: {result}
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    marginTop: 25,
    fontSize: 20,
    padding: 10,
  },

  titulo: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 24,
    color: 'orange',
  },
  button: {
    backgroundColor: 'lightblue',
    width: '80%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'blue'
  },

  buttonText: {
    fontSize: 30,
    color: 'black',
  },

  result: {
    marginTop: 30,
    color: 'green',
    fontSize: 32
  }

});
