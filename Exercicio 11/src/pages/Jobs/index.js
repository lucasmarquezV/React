import React, { useState } from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import Job from '../../components/Job';
import { styles } from './styles';

function Jobs() {
 let initial_jobs = [
    {
      id: '1',
      title: 'Desenvolvedor Backend',
      salary: 'R$5.000,00 - R$10.000,00',
      description: 'Desenvolver e manter sistemas de backend para aplicações web e móveis.',
    },
    {
      id: '2',
      title: 'Engenheiro de Dados',
      salary: 'R$10.000,00 - R$20.000,00',
      description: 'Desenvolver, analisar e gerenciar banco de dados.',
    },
    {
      id: '3',
      title: 'Arquiteto de Software',
      salary: 'R$20.000,00 - R$50.000,00',
      description: 'Projetar e documentar o sistema',
    },
    {
      id: '4',
      title: 'Desenvolvedor FrontEnd',
      salary: 'R$2.000,00 - R$5.000,00',
      description: 'Realizar o design e funcionalidades visuais do site.',
    },
  ];

  const [jobs, setJobs] = useState(initial_jobs)


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Vagas
      </Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Job
              title={item.title}
              salary={item.salary}
              description={item.description}
            />
          </Card>
        )}
      />
    </SafeAreaView>
  );
}

export default Jobs;
