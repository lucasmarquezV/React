import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

function Job(props) {
  return (
    <View>
      <View style={styles.border}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>Salario: {props.salary}</Text>
        <Text style={styles.description}>Descricao: {props.description}</Text>
      </View>
    </View>
  );
}

export default Job; 
