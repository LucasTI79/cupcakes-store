import { useNavigation } from '@react-navigation/native';
import { ShoppingBagIcon } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Load } from '../../loading/Load';

import { Container, TextContainer, Title } from './styles';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
};

export function CreateProduct({ isLoading = false, ...rest }: Props) {
  const { COLORS } = useTheme();
  const navigate = useNavigation();

  return (
    <Container
      disabled={isLoading}
      onPress={() => navigate.navigate('registerProduct')}
      {...rest}
    >
      {isLoading ? (
        <Load />
      ) : (
        <TextContainer>
          <Title>Cadastrar Produto</Title>
          <ShoppingBagIcon color={COLORS.WHITE} />
        </TextContainer>
      )}
    </Container>
  );
}
