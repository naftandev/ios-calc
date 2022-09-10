import React, { useState } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { Button } from '../../components';

const CalculatorScreen = () => {
  const [operation, setOperation] = useState('0');
  const [currentValue, setCurrentValue] = useState('0');

  const handleClean = () => setCurrentValue('0');

  const handleDelete = () => {
    let isNegative = false;
    let tempValue = currentValue;

    if (tempValue.startsWith('-')) {
      isNegative = true;
      tempValue = tempValue.substring(1);
    };

    if (tempValue.length > 1) {
      setCurrentValue(`${isNegative ? '-' : ''}${tempValue.slice(0, -1)}`);
    } else {
      setCurrentValue('0');
    };
  };

  const handleNumber = (enteredValue: string) => {
    // Verifica si existe un punto decimal
    if (enteredValue === '.' && currentValue.includes('.')) return;

    if (currentValue.startsWith('0') || currentValue.startsWith('-0')) {
      // Punto decimal
      if (enteredValue === '.') {
        setCurrentValue(currentValue + enteredValue);

        // Evaluar si se está construyendo un número decimal
      } else if (enteredValue === '0' && currentValue.includes('.')) {
        setCurrentValue(currentValue + enteredValue);

        // Sustituir el solamente hay un 0
      } else if (enteredValue !== '0' && !currentValue.includes('.')) {
        setCurrentValue(enteredValue)

        // Evitar 0000.0
      } else if (enteredValue === '0' && !currentValue.includes('.')) {
        setCurrentValue(currentValue)
      } else {
        setCurrentValue(currentValue + enteredValue);
      };
    } else {
      setCurrentValue(currentValue + enteredValue);
    };
  };

  const toggleAddSubtract = () => {
    if (currentValue.includes('-')) {
      setCurrentValue(currentValue.replace('-', ''));
    } else {
      setCurrentValue(`-${currentValue}`);
    };
  };

  return (
    <View style={styles.container}>
      {operation.length > 0 && operation !== '0' && <Text style={styles.operation}>{operation}</Text>}
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {currentValue}
      </Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsRowContainer}>
          <Button value='C' color='black' backgroundColor='#9B9B9B' action={handleClean} />
          <Button value='+/-' color='black' backgroundColor='#9B9B9B' action={toggleAddSubtract} />
          <Button value='del' color='black' backgroundColor='#9B9B9B' action={handleDelete} />
          <Button value='/' backgroundColor='#FF9427' action={handleClean} />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button value='7' action={handleNumber} />
          <Button value='8' action={handleNumber} />
          <Button value='9' action={handleNumber} />
          <Button value='x' backgroundColor='#FF9427' action={handleClean} />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button value='4' action={handleNumber} />
          <Button value='5' action={handleNumber} />
          <Button value='6' action={handleNumber} />
          <Button value='-' backgroundColor='#FF9427' action={handleClean} />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button value='1' action={handleNumber} />
          <Button value='2' action={handleNumber} />
          <Button value='3' action={handleNumber} />
          <Button value='+' backgroundColor='#FF9427' action={handleClean} />
        </View>
        <View style={styles.buttonsRowContainer}>
          <Button isLarge value='0' action={handleNumber} />
          <Button value='.' action={handleNumber} />
          <Button value='=' backgroundColor='#FF9427' action={handleClean} />
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;
