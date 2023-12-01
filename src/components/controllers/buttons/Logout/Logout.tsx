import { LogOut } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Load, Title } from './styles';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
};

export function Logout({ isLoading = false, ...rest }: Props) {
  return (
    <Container disabled={isLoading} {...rest}>
      {isLoading ? (
        <Load />
      ) : (
        <>
          <Title>Logout</Title>
          <LogOut />
        </>
      )}
    </Container>
  );
}
