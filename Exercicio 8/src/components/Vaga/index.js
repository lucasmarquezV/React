import { View, Text } from 'react-native';
import {styles} from './style.js'

function Vaga(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {props.title} </Text>
      <Text style={styles.salary}> {props.salary}</Text>
      <Text style={styles.desc}> {props.desc}</Text>
      <Text style={styles.contact}> {props.contact}</Text>
    </View>
  );
}

export default Vaga;