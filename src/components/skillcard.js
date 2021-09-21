import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard() {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.buttonText}>skill</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
