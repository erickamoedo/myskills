import React from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/pages/Home';

export default function App() {
  return (
    <>
      <StatusBar
        // Deixando as fonts do status bar claras
        barStyle="light-content"
      />
      <StatusBar
        // Aplicando cor no status bar
        backgroundColor={'#121015'}
      />
      <Home />
    </>
  );
}
