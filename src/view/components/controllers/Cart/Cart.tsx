import { ShoppingCart } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Load } from '../loading/Load';

import { Container, TextContainer, Title } from './styles';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
};

export function Cart({ isLoading = false, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container disabled={isLoading} {...rest}>
      {isLoading ? (
        <Load />
      ) : (
        <TextContainer>
          <Title>Finalizar compra</Title>
          <ShoppingCart color={COLORS.WHITE} />
        </TextContainer>
      )}
    </Container>
  );
}
