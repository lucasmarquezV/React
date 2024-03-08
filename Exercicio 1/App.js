import { View, Text } from 'react-native';

import Foto from './src/Foto/index';
import Dados from './src/Dados/index';
import Formacao from './src/Formacao/index';
import Experiencia from './src/Experiencia/index';
import Projetos from './src/Projetos/index';

const App = () => {
  return (
    <View>
      <Foto />
      <Dados />
      <Formacao />
      <Experiencia />
      <Projetos />
    </View>
  );
};


export default App;
