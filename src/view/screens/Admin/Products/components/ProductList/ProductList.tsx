import React from 'react';
import { FlatList, Text } from 'react-native';

import { Load } from '@components/controllers/loading/Load';

import { useProductController } from '../../useProductController';

import { EmptyList } from './components/EmptyList';
import { ProductCard } from './components/ProductCard';
import { Container, Content, ProductListTitle } from './styles';

export function ProductList() {
  const {
    products: { isLoading, data, error, refetch },
  } = useProductController();

  const products = data;

  if (isLoading) {
    return <Load />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Container>
      <ProductListTitle>Total de produtos: {products.length}</ProductListTitle>
      <Content>
        <FlatList
          data={products}
          onRefresh={refetch}
          refreshing={isLoading}
          keyExtractor={(item: ProductResponse) => item.id!}
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
