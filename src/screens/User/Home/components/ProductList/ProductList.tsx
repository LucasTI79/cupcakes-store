import React from 'react';
import { FlatList, Text } from 'react-native';

import { Load } from '@components/controllers/loading/Load';

import { useHomeController } from '../../useHomeController';

import { ProductCard } from './components/ProductCard';
import { Container, Content, ProductListTitle } from './styles';

export function ProductList() {
  const {
    products: { isLoading, data, error, refetch },
  } = useHomeController();

  const products = data?.data;

  if (isLoading) {
    return <Load />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  if (!products?.length) {
    return (
      <Container>
        <Text>Não encontramos nenhum produto</Text>
      </Container>
    );
  }

  return (
    <Container>
      <ProductListTitle>Total de produtos: {products.length}</ProductListTitle>
      <Content>
        <FlatList
          data={products}
          onRefresh={refetch}
          refreshing={isLoading}
          keyExtractor={(item: Product) => item.id!}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={{ paddingBottom: 50 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      </Content>
    </Container>
  );
}
