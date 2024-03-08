import { View, Text } from 'react-native';
import { styles } from './styles';

const Experiencia = () => {
  return (
    <View>
      <Text style={styles.titulo}>Experiencia: </Text>
      <Text style={styles.texto}>
        Não tenho experiencia ainda
      </Text>
    </View>
  );
};

export default Experiencia;
