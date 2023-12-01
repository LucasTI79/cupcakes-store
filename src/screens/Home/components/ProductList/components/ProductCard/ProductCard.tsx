import React from 'react';
import { View } from 'react-native';

import { currencyFormat, decimalFormat } from '@utils/index';

import {
  Container,
  Description,
  ImageContainer,
  Price,
  ProductImage,
  ProductInfo,
  Title,
  Weight,
} from './styles';
import { useProductCardController } from './useProductCardController';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: Readonly<ProductCardProps>) {
  const { navigateToProductDetails } = useProductCardController();
  const image = product.image ?? 'https://picsum.photos/200/300';
  const description = product.description
    ? `${product.description.slice(0, 50)}...`
    : '-';

  return (
    <Container onPress={() => navigateToProductDetails(product)}>
      <ImageContainer>
        <ProductImage source={{ uri: image }} />
      </ImageContainer>
      <ProductInfo>
        <Title>{product.name}</Title>
        <Description>{`${description}`}</Description>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 'auto',
            gap: 16,
          }}
        >
          <Weight>{decimalFormat(product.weight, 1)} g</Weight>
          <Price>{currencyFormat(product.price)}</Price>
        </View>
      </ProductInfo>
    </Container>
  );
}