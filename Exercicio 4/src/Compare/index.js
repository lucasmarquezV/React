import { Text, TextInput, StyleSheet, View, Image, Pressable,  } from 'react-native';
import { useState } from 'react';
import Imagem from '../Foto/Foto';
import {styles} from './style';

const Compare = () => {
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

export default Compare;