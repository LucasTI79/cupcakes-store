import React from 'react';
import { Text } from 'react-native';

import { currencyFormat } from '@utils/currencyFormat';

import { Container, ProductName } from './styles';
import { ProductItemInfoProps } from './types';

export function ProductItemInfo({
  productName,
  quantity,
  price,
}: ProductItemInfoProps) {
  return (
    <Container>
      <Text>{quantity}x</Text>
      <ProductName>{productName}</ProductName>
      <Text>{currencyFormat(price)}</Text>
    </Container>
  );
}
