import theme from '@theme/index';
import { ShoppingCart } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Container, Load, TextContainer, Title } from './styles';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
};

export function Cart({ isLoading = false, ...rest }: Props) {
  return (
    <Container disabled={isLoading} {...rest}>
      {isLoading ? (
        <Load />
      ) : (
        <TextContainer>
          <Title>Finalizar compra</Title>
          <ShoppingCart color={theme.COLORS.WHITE} />
        </TextContainer>
      )}
    </Container>
  );
}

export function CartIcon({ isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity disabled={isLoading} {...rest}>
      <ShoppingCart color={theme.COLORS.PRIMARY} />
    </TouchableOpacity>
  );
}
