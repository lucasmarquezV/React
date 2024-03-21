import React, { useState } from 'react';
import {View, Text, Pressable} from 'react-native';
import { styles } from './Styles'

const Contador = () => {
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
};

export default Contador;