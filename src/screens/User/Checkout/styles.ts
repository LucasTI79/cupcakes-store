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

export const PaymentFormContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const FinishPaymentButton = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.COLORS.DISABLED : theme.COLORS.PRIMARY};
`;

export const FinishPaymentText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
`;

export const OrderInfoContainer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const OrderInfoTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: bold;
`;

export const OrderTotal = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: medium;
`;
