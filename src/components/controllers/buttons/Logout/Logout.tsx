import { LogOut } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { useAuth } from '@hooks/useAuth';
import theme from '@theme/index';

import { Load } from '../../loading/Load';

import { Container, TextContainer, Title } from './styles';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
};

export function Logout({ isLoading = false, ...rest }: Props) {
  const { handleSignOut } = useAuth();
  return (
    <Container onPress={handleSignOut} disabled={isLoading} {...rest}>
      {isLoading ? (
        <Load />
      ) : (
        <TextContainer>
          <Title>Sair</Title>
          <LogOut color={theme.COLORS.WHITE} />
        </TextContainer>
      )}
    </Container>
  );
}
