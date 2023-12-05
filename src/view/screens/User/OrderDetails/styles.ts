import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${getStatusBarHeight() + 8}px 24px ${getBottomSpace() + 14}px;
`;

export const OrderInfoContainer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 500;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 400;
`;

export const ProductsInfoContainer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const ProductsInfoTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: bold;
`;

export const OrderTotal = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: medium;
`;
