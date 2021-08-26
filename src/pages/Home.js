import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <TextInput
        style={styles.input}
        placeholder={'new skill'}
        placeholderTextColor={'#555'}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7} //Opacidade no click
      >
        <Text style={styles.buttonColor}> add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 50}]}>My Skills</Text>
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
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonColor: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
