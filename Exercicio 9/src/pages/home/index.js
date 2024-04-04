import { View, Text, TextInput, Switch, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {styles} from './style';
import { useState } from 'react';

const Home = () =>{
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [status, setStatus] = useState(false);
  const [valor, setValor] = useState(0);
  const [show, setShow] = useState(false);
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridade] = useState('Incompleto');

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Abertura de conta</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome: "
          onChangeText={setNome}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Idade: "
          onChangeText={setIdade}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Sexo</Text>
        <Picker
          selectedValue={sexo}
          style={styles.picker}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Escolaridade</Text>
        <Picker
          selectedValue={escolaridade}
          style={styles.picker}
          onValueChange={(itemValue) => setEscolaridade(itemValue)}
        >
          <Picker.Item label="Incompleto" value="Incompleto" />
          <Picker.Item label="Ensino médio completo" value="Ensino médio completo" />
          <Picker.Item label="Ensino superior" value="Ensino superior" />
          <Picker.Item label="Doutorado" value="Doutorado" />
        </Picker>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Limite: {valor.toFixed(2)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={2000}
          onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
          value={valor}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Brasileiro</Text>
        <Switch
          value={status}
          onValueChange={(valorSwitch) => setStatus(valorSwitch)}
        />
      </View>
      <Pressable style={styles.confirmButton} onPress={() => setShow(!show)}>
        <Text style={styles.confirmButtonText}>Confirma</Text>
      </Pressable>
      {show && (
        <View style={styles.content}>
          <Text style={styles.contentText}>Nome: {nome}</Text>
          <Text style={styles.contentText}>Idade: {idade}</Text>
          <Text style={styles.contentText}>Sexo: {sexo}</Text>
          <Text style={styles.contentText}>Escolaridade: {escolaridade}</Text>
          <Text style={styles.contentText}>Limite: {valor.toFixed(2)}</Text>
          <Text style={styles.contentText}>
            Brasileiro: {status ? 'Sim' : 'Não'}
          </Text>
        </View>
      )}
    </View>
  );
}

export default Home;