import { Minus, Plus } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { ProductItemCart } from '@context/cart/types';
import { currencyFormat } from '@utils/currencyFormat';

import {
  Container,
  Content,
  FooterContainer,
  ImageContainer,
  Observations,
  Price,
  ProductImage,
  ProductInfo,
  QuantityContainer,
  Title,
} from './styles';
import { useCartCardController } from './useCartCardController';

type CartCardProps = {
  item: Required<ProductItemCart>;
};

export function CartCard({ item }: CartCardProps) {
  const { COLORS } = useTheme();

  const { addCartItem, decreaseCartItem, getItemQuantity, goToProductDetails } =
    useCartCardController();

  const { product } = item;
  const cartQuantity = getItemQuantity(product.id!);
  const disableDecrease = cartQuantity === 0;
  const imageUrl = product.image ?? 'https://picsum.photos/200/300';

  return (
    <Container>
      <Content onPress={() => goToProductDetails(product)}>
        <ImageContainer>
          <ProductImage source={{ uri: imageUrl }} />
        </ImageContainer>
        <ProductInfo>
          <View>
            <Title>{product.name}</Title>
            <Text>{item.quantity}x</Text>
          </View>
          <Observations>Nenhuma</Observations>
        </ProductInfo>
      </Content>
      <FooterContainer>
        <Price>{currencyFormat(product.price * item.quantity)}</Price>
        <QuantityContainer>
          <TouchableOpacity
            disabled={disableDecrease}
            onPress={() => decreaseCartItem(product.id!)}
          >
            <Minus color={COLORS.PRIMARY} />
          </TouchableOpacity>
          <Text>{cartQuantity}</Text>
          <TouchableOpacity onPress={() => addCartItem(product)}>
            <Plus color={COLORS.PRIMARY} />
          </TouchableOpacity>
        </QuantityContainer>
      </FooterContainer>
    </Container>
  );
}
