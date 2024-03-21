import { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { styles } from './style';

const Calculo = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [result, setResult] = useState(0);

  function calc() {
    setResult(n1 * n2)
  }

  return (
    <View style={ styles.container }>
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

export default Calculo;