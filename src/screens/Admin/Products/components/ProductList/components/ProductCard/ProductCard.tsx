import React from 'react';

import { currencyFormat, decimalFormat } from '@utils/index';

import {
  Container,
  Description,
  ImageContainer,
  Price,
  ProductImage,
  ProductInfo,
  ProductInfoFooter,
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
        <ProductInfoFooter>
          <Weight>{decimalFormat(product.weight, 1)} g</Weight>
          <Price>{currencyFormat(product.price)}</Price>
        </ProductInfoFooter>
      </ProductInfo>
    </Container>
  );
}
