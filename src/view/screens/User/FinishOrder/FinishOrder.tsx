import { useNavigation } from '@react-navigation/native';
import { CheckIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { ButtonOutline } from '@components/controllers/buttons/Button';

import { Container, IconContainer, SubTitle, Title } from './styles';

export function FinishOrder() {
  const navigate = useNavigation();

  function handleNavigateToOrders() {
    navigate.reset({
      index: 0,
      routes: [{ name: 'cartStack' }],
    });
    navigate.navigate('order');
  }

  const { COLORS } = useTheme();
  return (
    <Container>
      <IconContainer>
        <CheckIcon size={56} color={COLORS.WHITE} />
      </IconContainer>
      <Title>Pedido realizado com sucesso</Title>
      <SubTitle>
        um link para o pagamento será enviado para o seu número
      </SubTitle>
      <ButtonOutline title="CONFERIR PEDIDO" onPress={handleNavigateToOrders} />
    </Container>
  );
}
