import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text } from 'react-native';

import { Checkout as CheckoutButton } from '@components/controllers/buttons/Checkout';
import { HeaderBack } from '@components/layout/HeaderBack';
import { ProductItemCart } from '@context/cart/types';
import { currencyFormat } from '@utils/currencyFormat';

import { CartCard } from './components/CartCard';
import { ClearCartAction } from './components/ClearCart';
import { EmptyCart } from './components/EmptyCart';
import { Container, ShoppingCartContainer, ShoppingCartText } from './styles';
import { useCartController } from './useCartController';

export function Cart() {
  const { items, total } = useCartController();
  const hasItemIntoCart = items.length > 0;

  const navigate = useNavigation();

  function goToShop() {
    navigate.navigate('home');
  }

  return (
    <Container>
      <HeaderBack rightAction={hasItemIntoCart ? <ClearCartAction /> : null} />
      <FlatList
        data={items}
        keyExtractor={(item: ProductItemCart) => item.product.id!}
        renderItem={({ item }) => <CartCard item={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        ListEmptyComponent={EmptyCart}
      />
      {hasItemIntoCart && (
        <>
          <Text>Total do pedido: {currencyFormat(total)}</Text>
          <ShoppingCartContainer onPress={goToShop}>
            <ShoppingCartText>Continuar comprando</ShoppingCartText>
          </ShoppingCartContainer>
          <CheckoutButton />
        </>
      )}
    </Container>
  );
}
