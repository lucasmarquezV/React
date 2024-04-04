import { Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import {styles} from './style';
import Image from '../../components/image/index';

const Number = () =>{
  const [result, setResult] = useState(null);
  const [visible, setVisible] = useState(false);
  
  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 11);
    setResult(randomNumber);
    setVisible(true);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Jogo do n° Aleatorio
      </Text>
      <Image />
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

export default Number;