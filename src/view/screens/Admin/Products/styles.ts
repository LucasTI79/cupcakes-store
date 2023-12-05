import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${getStatusBarHeight() + 8}px 24px ${getBottomSpace() + 14}px;
  gap: 16px;
`;

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;
