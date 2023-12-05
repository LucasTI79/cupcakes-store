import { LogOut } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { useAuth } from '@hooks/useAuth';

import { Load } from '../../loading/Load';

import { Container, TextContainer, Title } from './styles';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
};

export function Logout({ isLoading = false, ...rest }: Props) {
  const { handleSignOut } = useAuth();
  const { COLORS } = useTheme();

  return (
    <Container onPress={handleSignOut} disabled={isLoading} {...rest}>
      {isLoading ? (
        <Load />
      ) : (
        <TextContainer>
          <Title>Sair do aplicativo</Title>
          <LogOut color={COLORS.WHITE} />
        </TextContainer>
      )}
    </Container>
  );
}
