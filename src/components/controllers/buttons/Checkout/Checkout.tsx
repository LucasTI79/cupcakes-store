import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Container, TextContainer, Title } from './styles';

export function Checkout() {
  const navigate = useNavigation();

  const navigateToCheckout = () => {
    navigate.navigate('checkout');
  };
  return (
    <Container onPress={navigateToCheckout}>
      <TextContainer>
        <Title>Finalizar pedido</Title>
      </TextContainer>
    </Container>
  );
}
