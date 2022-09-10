export interface ButtonPropsTypes {
  value: string;
  color?: string;
  backgroundColor?: string;
  isLarge?: boolean;
  action: (value: string) => void;
};
