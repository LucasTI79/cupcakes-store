import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 8}px 24px ${getBottomSpace() + 14}px;
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 16px;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-top: 16px;
`;
