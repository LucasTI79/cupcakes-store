import { Minus, Plus } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import { HeaderBack } from '@components/layout/HeaderBack';

import { Container, Image, ImageContainer } from './styles';
import { useProductDetailsController } from './useProductDetailsController';

type ProductDetailsProps = {
  route: {
    params: {
      product: Required<Product>;
    };
  };
};

export function ProductDetails({
  route: {
    params: { product },
  },
}: Readonly<ProductDetailsProps>) {
  const { addCartItem, decreaseCartItem, getItemQuantity } =
    useProductDetailsController();

  const { COLORS } = useTheme();

  const cartQuantity = getItemQuantity(product.id);
  const disableDecrease = cartQuantity === 0;

  const imageUrl = product.image ?? 'https://picsum.photos/200/300';

  return (
    <Container>
      <HeaderBack />
      <ImageContainer>
        <Image source={{ uri: imageUrl }} />
      </ImageContainer>
      <TouchableOpacity
        disabled={disableDecrease}
        onPress={() => decreaseCartItem(product.id)}
      >
        <Minus color={COLORS.PRIMARY} />
      </TouchableOpacity>
      <Text>{cartQuantity}</Text>
      <TouchableOpacity onPress={() => addCartItem(product)}>
        <Plus color={COLORS.PRIMARY} />
      </TouchableOpacity>
    </Container>
  );
}
