import React, { FC } from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';

import styles from './styles';
import { ButtonPropsTypes } from '../../interfaces/components/Button';

const Button: FC<ButtonPropsTypes> = ({ value, color, backgroundColor, isLarge, customStyles, action }) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity
      onPress={() => action(value)}
      style={[
        customStyles,
        styles.container,
        {
          width: isLarge ? 'auto' : 70,
          flex: isLarge ? 1 : 0,
          marginHorizontal: isLarge ? (windowWidth - (70 * 4)) / 8 : 0,
          backgroundColor: backgroundColor ? backgroundColor : '#2D2D2D',
        }
      ]}
    >
      <Text
        style={[styles.value, { color: color ? color : 'white' }]}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
