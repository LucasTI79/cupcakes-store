import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 8}px 24px ${getBottomSpace() + 14}px;
  flex: 1;
  width: 100%;
  gap: 16px;
`;

export const ShoppingCartContainer = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const ShoppingCartText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-weight: 600;
`;
