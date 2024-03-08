import { View, Text } from 'react-native';
import { styles } from './styles';

const Formacao = () => {
  return (
    <View>
      <Text style={styles.titulo}>Formação: </Text>
      <Text style={styles.texto}>Analise e Desenvolvimento de Sistemas</Text>
    </View>
  );
};

export default Formacao;
