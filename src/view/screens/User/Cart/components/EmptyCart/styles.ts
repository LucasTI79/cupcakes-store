import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const ActionButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  padding: 16px;
  border-radius: 8px;
  margin-top: 32px;
`;

export const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;
  font-weight: bold;
`;
