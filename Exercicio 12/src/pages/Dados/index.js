import { View, Text } from 'react-native';
import { styles } from './style';
 
const Dados = ({ route }) => {
  const { nome, idade, sexo, escolaridade, valor, status } = route.params;
 
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>Dados</Text>
      <Text style={styles.contentText}>Nome: {nome}</Text>
      <Text style={styles.contentText}>Idade: {idade}</Text>
      <Text style={styles.contentText}>Sexo: {sexo}</Text>
      <Text style={styles.contentText}>Escolaridade: {escolaridade}</Text>
      <Text style={styles.contentText}>Limite: {valor.toFixed(2)}</Text>
      <Text style={styles.contentText}>Brasileiro: {status ? 'Sim' : 'Não'}</Text>
    </View>
  );
};
 
export default Dados;