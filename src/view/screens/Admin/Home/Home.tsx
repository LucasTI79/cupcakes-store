import { FlatList } from 'react-native';
import { Text } from 'react-native-svg';

import { Load } from '@components/controllers/loading/Load';

import { Container, Title } from './styles';
import { useHomeController } from './useHomeController';

export function Home() {
  const {
    orders: { data, isLoading },
  } = useHomeController();

  if (isLoading) {
    return (
      <Container>
        <Load />
      </Container>
    );
  }

  return (
    <Container>
      <Title>Últimos pedidos</Title>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => <Text>{item.total}</Text>}
        ListEmptyComponent={() => <Text>Nenhum pedido encontrado</Text>}
      />
    </Container>
  );
}
