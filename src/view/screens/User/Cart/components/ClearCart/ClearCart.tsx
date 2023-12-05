import React from 'react';

import { useCartController } from '../../useCartController';

import { Container, Text } from './styles';

export function ClearCartAction() {
  const { clearCart } = useCartController();
  return (
    <Container onPress={clearCart}>
      <Text>Limpar</Text>
    </Container>
  );
}
