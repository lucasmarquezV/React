import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Conta from './src/pages/Conta/index';
import Dados from './src/pages/Dados/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Conta">
        <Stack.Screen name="Conta" component={Conta} options={{ title: 'Conta' }} />
        <Stack.Screen name="Dados" component={Dados} options={{ title: 'Dados' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}