import { FlatList, Text } from 'react-native';

import { Load } from '@components/controllers/buttons/Logout/styles';

import { useHomeController } from '../../useHomeController';

import { ProductCard } from './components/ProductCard';
import { Container, Content } from './styles';

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
        <Text>No products found</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Text>Products: {products.length}</Text>
      <Content>
        <FlatList
          data={products}
          onRefresh={refetch}
          refreshing={isLoading}
          keyExtractor={(item: Product) => item.id!}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      </Content>
    </Container>
  );
}
