import { RadioGroupProps as RadioProps } from 'react-native-radio-buttons-group';

export type RadioGroupProps<T> = Omit<RadioProps, 'onPress' | 'selectedId'> & {
  errorMessage?: string;
  onChange?: (value: T) => void;
  data: T[];
};
