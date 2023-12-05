import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: ${getStatusBarHeight() + 24}px 0 ${getBottomSpace() + 14}px;
  flex: 1;
  width: 100%;
  gap: 16px;
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

export const ImageContainer = styled.View`
  width: 100%;
  height: 300px;
  margin-bottom: 24px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FooterContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
`;

export const ProductInfo = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  padding: 0 16px;
`;
