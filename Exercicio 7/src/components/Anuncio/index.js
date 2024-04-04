import { View, Text, Image } from 'react-native';
import {styles} from './Style.js'

function Anuncio(props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.link }}
        style={ styles.anuncio}
      />
      <Text style={styles.desc}> {props.desc}</Text>
    </View>
  );
}

export default Anuncio;