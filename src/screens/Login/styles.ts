import { StyleSheet, Text, TextProps } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px;
  flex: 1;
  align-items: center;
  width: '100%';
  height: '100%';
`;

export const FooterView = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

export const FooterText = styled(Text)`
  color: #2e2e2d;
  font-size: 16px;
`;

type TextLinkProps = TextProps & {
  color?: string;
};

export const TextLink = styled(Text)<TextLinkProps>`
  color: ${(props) => props?.color ?? '#788eec'};
  font-weight: bold;
  font-size: 16px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: 'center',
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#788eec',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: '#788eec',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
