import { Text, TextInput, View, Pressable } from 'react-native';
import { useState } from 'react';
import {styles} from './style';
import Image from '../../components/img/index';

const Imc = () =>{
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

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Calculo de IMC
      </Text>
      <Image />
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

export default Imc;