import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px;
  flex: 1;
  width: 100%;
`;
