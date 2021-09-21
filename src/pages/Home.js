import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  StyleSheet,
  FlatList,
} from 'react-native';

import {Botao} from '../components/button';
import {SkillCard} from '../components/skillcard';

// Detalhe, nao coloquei o export default* pois isso me possibilita ter varios export em uma pagina!
export function Home() {
  const [newSkill, setNewSkill] = useState(''); // Aqui eu vou armazenar novas skills
  const [mySkills, setMySkills] = useState([]); // Aqui eu vou armazenar minhas novas skills
  const [greeting, setGreeting] = useState(''); // Aqui eu vou armazenar a saudações do app

  // quando a funcao é disparada quando o usuario interage com a aplicação, usar sempre o "Handle"
  function handleAddNewSkill() {
    // Chapter 1 - Conceitos importantes > Imutabilidade > 13:37
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    // com o useEffect, eu tomo uma ação antes da contrução dos blocos
    const currentHour = new Date().getHours(); // Aqui estou pegando o horario e armazenando
    if (currentHour < 12) {
      setGreeting('Bom Dia');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde');
    } else {
      setGreeting('Boa Noite');
    }
    console.log(currentHour);
  }, []); // aqui eu posso colocar uma dependencia, vazia = ele carrega qnd a app é construido

  // No return fica os elementos visuais
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Erick</Text>

      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder={'new skill'}
        placeholderTextColor={'#555'}
        onChangeText={setNewSkill}
      />

      <Botao
        // Importando o componente do botao
        // Passando uma propriedade
        onPress={handleAddNewSkill}
      />

      <Text
        //Aqui é um exemplo que eu consigo passar mais de um parametro de estilização
        style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>

      <FlatList
        // ScrollView = indicado para exibir poucos elementos, pois ele renderiza todos elementos
        // FlatList = Ela é pensada em performance, pois renderiza aos poucos
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}

// Customização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10, // se for ios, coloca 15, caso contrario 10
    marginTop: 30,
    borderRadius: 5,
  },
  greeting: {
    color: '#fff',
  },
});
