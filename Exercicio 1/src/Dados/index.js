import { View, Text } from 'react-native';
import { styles } from './styles';

const Dados = () => {
  return (
    <View>
      <Text style={styles.titulo}>Dados Pessoais: </Text>
      <Text style={styles.texto}>Nome: Lucas Marquez Vianna</Text>
    </View>
  );
};

export default Dados;
