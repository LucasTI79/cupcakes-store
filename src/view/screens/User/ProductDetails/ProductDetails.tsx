import { Minus, Plus } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Cart } from '@components/controllers/buttons/Cart';
import { HeaderBack } from '@components/layout/HeaderBack';
import { currencyFormat } from '@utils/currencyFormat';

import {
  Container,
  FooterContainer,
  Image,
  ImageContainer,
  ProductInfo,
  SubTitle,
  Title,
} from './styles';
import { useProductDetailsController } from './useProductDetailsController';

type ProductDetailsProps = {
  route: {
    params: {
      product: Required<ProductResponse>;
    };
  };
};

export function ProductDetails({
  route: {
    params: { product },
  },
}: Readonly<ProductDetailsProps>) {
  const { addCartItem, decreaseCartItem, getItemQuantity, goToCart } =
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
      <ProductInfo>
        <Title>
          Nome: <SubTitle>{product.name}</SubTitle>
        </Title>
        <Title>
          Descrição: <SubTitle>{product.description}</SubTitle>
        </Title>
        <Title>
          Preço unitário: <SubTitle>{currencyFormat(product.price)}</SubTitle>
        </Title>
        <FooterContainer>
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
        </FooterContainer>
        <Cart onPress={goToCart} />
      </ProductInfo>
    </Container>
  );
}
