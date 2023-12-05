import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  ActionButton,
  ActionButtonText,
  Container,
  SubTitle,
  Title,
} from './styles';

export function EmptyCart() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Title>Seu carrinho está vazio!</Title>
      <SubTitle>Deseja ir as compras?</SubTitle>
      <ActionButton onPress={navigateToHome}>
        <ActionButtonText>Adicionar itens ao carrinho</ActionButtonText>
      </ActionButton>
    </Container>
  );
}
