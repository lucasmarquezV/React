import { Text, View, ScrollView } from 'react-native';
import {styles} from './style';
import Vaga from '../../components/Vaga/index';

const Home = () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
      <ScrollView>
        <Vaga desc='Descrição: Construir e criar web sites para empresa seguindo padrões de estilização da empresa' title='Desenvolvedor Web' salary='Salario: R$: 3.200' contact='Contatos: empresaX@gmail.com' />
        <Vaga desc='Descrição: Programar logica do site da empresa e realizar conexões com banco de dados' title='Desenvolvedor BackEnd' salary='Salario: R$: 4.500' contact='Contatos: empresaY@gmail.com' />
        <Vaga desc='Descrição: Garantir a proteção de dados dos usuarios da empresa assim como garantir a proteção contra possiveis ataques contra a empresa' title='Segurança da informação' salary='Salario: R$: 5.000' contact='Contatos: empresaZ@gmail.com' />
        <Vaga desc='Descrição: Criar e gerenciar requisitos das novas aplicações criadas pela empresa e coordenar a equipe de desenvolvimento' title='Engenheiro de software' salary='Salario: R$: 10.000' contact='Contatos: empresaF@gmail.com' />
      </ScrollView>
    </View>
  );
}

export default Home;