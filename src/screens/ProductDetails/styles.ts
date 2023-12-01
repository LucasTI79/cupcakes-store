import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 24}px 0 ${getBottomSpace() + 14}px;
  flex: 1;
  width: 100%;
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
