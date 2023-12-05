import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  ActionButton,
  ActionButtonText,
  Container,
  SubTitle,
  Title,
} from './styles';

export function EmptyList() {
  const navigation = useNavigation();

  function navigateToRegisterProduct() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Title>Você não tem pedidos feitos!</Title>
      <SubTitle>Deseja fazer um pedido?</SubTitle>
      <ActionButton onPress={navigateToRegisterProduct}>
        <ActionButtonText>Fazer pedido</ActionButtonText>
      </ActionButton>
    </Container>
  );
}
