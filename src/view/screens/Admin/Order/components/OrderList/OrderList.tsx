import React from 'react';
import { FlatList, Text } from 'react-native';

import { Load } from '@components/controllers/loading/Load';

import { useOrderController } from '../../useOrderController';

import { EmptyList } from './components/EmptyList';
import { OrderCard } from './components/OrderCard';
import { Container, Content, ProductListTitle } from './styles';

export function OrderList() {
  const {
    orders: { isLoading, data, error, refetch },
  } = useOrderController();

  const orders = data;

  if (isLoading) {
    return <Load />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Container>
      <ProductListTitle>Total de pedidos: {orders.length}</ProductListTitle>
      <Content>
        <FlatList
          data={orders}
          onRefresh={refetch}
          refreshing={isLoading}
          keyExtractor={(item: OrderResponse) => item.id!}
          renderItem={({ item }) => <OrderCard order={item} />}
          contentContainerStyle={{ paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={EmptyList}
          style={{ flex: 1 }}
        />
      </Content>
    </Container>
  );
}
