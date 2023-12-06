import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 8}px 24px ${getBottomSpace() + 14}px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const IconContainer = styled.View`
  height: 100px;
  width: 100px;
  background-color: #4ade80;
  border-radius: 144px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  padding: 4px;
  text-align: center;
`;
