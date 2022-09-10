import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';
import { ButtonPropsTypes } from '../../interfaces/components/Button';

const Button = ({ value, color, backgroundColor, isLarge, action }: ButtonPropsTypes) => {
  return (
    <TouchableOpacity
      onPress={() => action(value)}
      style={{
        ...styles.container,
        width: isLarge ? 157.8 : 70,
        backgroundColor: backgroundColor ? backgroundColor : '#2D2D2D'
      }}
    >
      <Text
        style={{
          ...styles.value,
          color: color ? color : 'white'
        }}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
