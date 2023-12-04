import React from 'react';
import { Text } from 'react-native';

import { Container, ProductName } from './styles';
import { OrderItemInfoProps } from './types';

export function OrderItemInfo({ productName, quantity }: OrderItemInfoProps) {
  return (
    <Container>
      <ProductName>{productName}</ProductName>
      <Text>{quantity}x</Text>
    </Container>
  );
}
