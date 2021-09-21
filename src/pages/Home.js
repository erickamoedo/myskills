import React, {useState} from 'react';
import {View, Text, TextInput, Platform, StyleSheet} from 'react-native';

import {Botao} from '../components/button';
import {SkillCard} from '../components/skillcard';

// Detalhe, nao coloquei o export default* pois isso me possibilita ter varios export em uma pagina!
export function Home() {
  // Aqui eu vou armazenar novas skills
  const [newSkill, setNewSkill] = useState('');

  // Aqui eu vou armazenar minhas novas skills
  const [mySkills, setMySkills] = useState([]);

  // quando a funcao é disparada quando o usuario interage com a aplicação, usar sempre o "Handle"
  function handleAddNewSkill() {
    // Chapter 1 - Conceitos importantes > Imutabilidade > 13:37
    setMySkills(oldState => [...oldState, newSkill]);
  }

  // No return fica os elementos visuais
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <TextInput
        style={styles.input}
        placeholder={'new skill'}
        placeholderTextColor={'#555'}
        onChangeText={setNewSkill}
      />

      <Botao
      // Importando o componente do botao
      />

      <Text
        //Aqui é um exemplo que eu consigo passar mais de um parametro de estilização
        style={[styles.title, {marginVertical: 50}]}>
        My Skills
      </Text>

      {mySkills.map(skill => (
        <SkillCard />
      ))}
    </View>
  );
}

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
});
