import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 8}px 24px ${getBottomSpace() + 14}px;
  flex: 1;
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const GrettingsTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: 400;
`;

export const GrettingsSubTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  font-weight: 600;
`;

export const SettingsList = styled.View`
  flex: 1;
  justify-content: flex-start;
  margin-bottom: 24px;
`;

export const SettingsItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 24px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
`;
