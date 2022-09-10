import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import theme from './src/theme';
import CalculatorScreen from './src/screens/CalculatorScreen';

const App = () => {
  return (
    <SafeAreaView style={theme.background}>
      <StatusBar backgroundColor='black' barStyle='light-content' />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
