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
    navigation.navigate('registerProduct');
  }

  return (
    <Container>
      <Title>Você ainda não tem pedidos</Title>
      <SubTitle>Quer aproveitar para cadastrar um novo produto?</SubTitle>
      <ActionButton onPress={navigateToRegisterProduct}>
        <ActionButtonText>Adicionar Produto</ActionButtonText>
      </ActionButton>
    </Container>
  );
}
