import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {styles} from './style';

const Home = () =>{
  const [result, setResult] = useState(0);
    const [valor, setValor] = useState(0);
    const [moeda, setMoeda] = useState('Real');
    const [conversao, setConversao] = useState('Dolar');
    const [show, setShow] = useState(false);

    function converter() {
        setShow(true);
        if (moeda === 'Real' && conversao === 'Dolar') {
            setResult(valor / 5);
        } else if (moeda === 'Real' && conversao === 'Euro') {
            setResult(valor / 5.4);
        } else if (moeda === 'Dolar' && conversao === 'Real') {
            setResult(valor * 5);
        } else if (moeda === 'Dolar' && conversao === 'Euro') {
            setResult(valor * 0.92);
        } else if (moeda === 'Euro' && conversao === 'Real') {
            setResult(valor * 5.4);
        } else if (moeda === 'Euro' && conversao === 'Dolar') {
            setResult(valor * 1.08);
        } else {
            setResult(0);
        }
    }

  return(
    <View style={styles.container}>
            <Text style={styles.titulo}> Conversor de moedas </Text>
            <Text style={styles.titulo}> Dolar, real, euro </Text>
            <View style={styles.form}>
                <Text style={styles.texto}>Valor: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setValor}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.form}>
                <Text style={styles.texto}>De: </Text>
                <Picker
                    selectedValue={moeda}
                    style={styles.selecao}
                    onValueChange={(itemValue) => setMoeda(itemValue)}
                >
                    <Picker.Item label="Dolar" value="Dolar" />
                    <Picker.Item label="Real" value="Real" />
                    <Picker.Item label="Euro" value="Euro" />
                </Picker>
            </View>

            <View style={styles.form}>
                <Text style={styles.texto}>Para: </Text>
                <Picker
                    selectedValue={conversao}
                    style={styles.selecao}
                    onValueChange={(itemValue) => setConversao(itemValue)}
                >
                    <Picker.Item label="Dolar" value="Dolar" />
                    <Picker.Item label="Real" value="Real" />
                    <Picker.Item label="Euro" value="Euro" />
                </Picker>
            </View>

            <Pressable style={styles.confirmar} onPress={converter}>
                <Text style={styles.confirmarText}> Converter </Text>
            </Pressable>

            {show && <Text style={styles.resultText}> Result: {result} </Text>}
        </View>
  );
}

export default Home;