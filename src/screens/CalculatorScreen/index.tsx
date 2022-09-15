import React from 'react';
import { Text, View } from 'react-native';

import useCalculator from '../../hooks/useCalculator';

import styles from './styles';
import { Button } from '../../components';

const CalculatorScreen = () => {
  const {
    previousValue,
    currentValue,
    handleClean,
    toggleNegative,
    handleDelete,
    handleNumber,
    handleDivision,
    handlemultiplication,
    handleSubtraction,
    handleAddition,
    calculate
  } = useCalculator();

  return (
    <View style={styles.container}>
      {previousValue.length > 0 && previousValue !== '0' && (
        <Text style={styles.previousValue}>
          {previousValue}
        </Text>
      )}
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {currentValue}
      </Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.column}>
          <View style={styles.row}>
            <Button customStyles={styles.button} value='C' color='black' backgroundColor='#9B9B9B' action={handleClean} />
            <Button customStyles={styles.button} value='+/-' color='black' backgroundColor='#9B9B9B' action={toggleNegative} />
          </View>
          <View style={styles.row}>
            <Button customStyles={styles.button} value='7' action={handleNumber} />
            <Button customStyles={styles.button} value='8' action={handleNumber} />
          </View>
          <View style={styles.row}>
            <Button customStyles={styles.button} value='4' action={handleNumber} />
            <Button customStyles={styles.button} value='5' action={handleNumber} />
          </View>
          <View style={styles.row}>
            <Button customStyles={styles.button} value='1' action={handleNumber} />
            <Button customStyles={styles.button} value='2' action={handleNumber} />
          </View>
          <View style={styles.row}>
            <Button customStyles={styles.button} isLarge value='0' action={handleNumber} />
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row}>
            <Button customStyles={styles.button} value='del' color='black' backgroundColor='#9B9B9B' action={handleDelete} />
            <Button customStyles={styles.button} value='/' backgroundColor='#FF9427' action={handleDivision} />
          </View>
          <View style={styles.row}>
            <Button customStyles={styles.button} value='9' action={handleNumber} />
            <Button customStyles={styles.button} value='x' backgroundColor='#FF9427' action={handlemultiplication} />
          </View>
          <View style={styles.row}>
            <Button customStyles={styles.button} value='6' action={handleNumber} />
            <Button customStyles={styles.button} value='-' backgroundColor='#FF9427' action={handleSubtraction} />
          </View>
          <View style={styles.row}>
            <Button customStyles={styles.button} value='3' action={handleNumber} />
            <Button customStyles={styles.button} value='+' backgroundColor='#FF9427' action={handleAddition} />
          </View>
          <View style={styles.row}>
            <Button customStyles={styles.button} value='.' action={handleNumber} />
            <Button customStyles={styles.button} value='=' backgroundColor='#FF9427' action={calculate} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;
