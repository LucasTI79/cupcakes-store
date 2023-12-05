import React from 'react';
import { FlatList, Text } from 'react-native';

import { Load } from '@components/controllers/loading/Load';

import { useHomeController } from '../../useHomeController';

import { EmptyList } from './components/EmptyList';
import { ProductCard } from './components/ProductCard';
import { Container, Content, ProductListTitle } from './styles';

export function ProductList() {
  const {
    products: { isLoading, data, error, refetch },
  } = useHomeController();

  const products = data;

  const productsQuantity = products?.length ?? 0;

  if (isLoading) {
    return <Load />;
  }

  return (
    <Container>
      <ProductListTitle>Total de produtos: {productsQuantity}</ProductListTitle>
      <Content>
        {error && <Text>{error.message}</Text>}
        <FlatList
          data={products}
          onRefresh={refetch}
          refreshing={isLoading}
          keyExtractor={(item: Product) => item.id!}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={{ paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={EmptyList}
          style={{ flex: 1 }}
        />
      </Content>
    </Container>
  );
}
