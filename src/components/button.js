import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Botao({onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7} //Opacidade no click
      onPress={onPress}>
      <Text style={styles.buttonText}> add +</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
