import { SwitchProps as SwitchPropsNative } from 'react-native';

import { Container, Input, Label } from './styles';

type SwitchProps = SwitchPropsNative & {
  label: string;
};

export function Switch({ label, ...rest }: SwitchProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  );
}
