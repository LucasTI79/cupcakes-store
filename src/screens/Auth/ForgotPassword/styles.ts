import { Text } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 8}px 24px ${getBottomSpace() + 14}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const FooterView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

export const FooterText = styled(Text)`
  color: #2e2e2d;
  font-size: 16px;
`;

export const FooterLink = styled(Text)`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  font-weight: bold;
  font-size: 16px;
`;
