import React, { useState } from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';

export default function App() {
  const [pessoa, setPessoa] = useState(0);

  const aumentar = () => {
    setPessoa(pessoa + 1)
  };

  const diminuir = () => {
    if(pessoa <= 0){
      setPessoa(0)
    }else{
      setPessoa(pessoa - 1)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de pessoas</Text>
      <View style={styles.displayContainer}>
        <Text style={[styles.display, styles.displayContent]}>{pessoa}</Text>
      </View>

      <Pressable style={[styles.buttonMore, styles.button]} onPress={aumentar}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <Pressable style={[styles.buttonLess, styles.button]} onPress={diminuir}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  displayContainer: {
    alignItems: 'center',
  },
  titulo: {
    marginTop: 50,
    fontSize: 28,
    color: 'orange',
  },
  display: {
    fontSize: 60,
    borderWidth: 5,
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginBottom: 20,
    marginTop: 30
  },
  displayContent: {
    color: 'red'
  },
  button: {
    width: '80%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonMore: {
    backgroundColor: 'green',
    marginTop: 20,
  },
  buttonLess: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
});
