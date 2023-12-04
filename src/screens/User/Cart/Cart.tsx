import React from 'react';
import { FlatList } from 'react-native';

import { HeaderBack } from '@components/layout/HeaderBack';
import { ProductItemCart } from '@context/cart/types';

import { CartCard } from './components/CartCard';
import { Container } from './styles';
import { useCartController } from './useCartController';

export function Cart() {
  const { items } = useCartController();
  return (
    <Container>
      <HeaderBack />
      <FlatList
        data={items}
        keyExtractor={(item: ProductItemCart) => item.id!}
        renderItem={({ item }) => <CartCard item={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      />
    </Container>
  );
}
