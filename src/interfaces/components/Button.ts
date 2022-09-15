import { ViewStyle } from 'react-native';

export interface ButtonPropsTypes {
  value: string;
  color?: string;
  backgroundColor?: string;
  isLarge?: boolean;
  customStyles?: ViewStyle;
  action: (value: string) => void;
};
