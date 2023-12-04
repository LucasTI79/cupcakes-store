import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button } from '@components/controllers/buttons/Button';
import { TextInput } from '@components/controllers/inputs/TextInput';
import { useAuth } from '@hooks/useAuth';

import { Container, FooterLink, FooterText, FooterView } from './styles';

export function ForgotPassword() {
  const { handleForgotPassword: handleSubmit } = useAuth();
  const [email, setEmail] = useState('');

  const navigate = useNavigation();

  function handleForgotPassword() {
    handleSubmit(email)
      .then(() => {
        Alert.alert('Redefinição de senha', 'Enviamos um email para você');
      })
      .catch(() => {
        Alert.alert(
          'Redefinição de senha',
          'Tivemos um problema ao enviar o email, tente novamente mais tarde',
        );
      });
  }

  function handleNavigateToLogin() {
    navigate.navigate('login');
  }

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, width: '100%', height: '100%' }}
      keyboardShouldPersistTaps="always"
    >
      <Container>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Button title="Enviar email" onPress={handleForgotPassword} />
        <FooterView>
          <FooterText>
            {' '}
            Remember account?{' '}
            <FooterLink onPress={handleNavigateToLogin}>Login</FooterLink>
          </FooterText>
        </FooterView>
      </Container>
    </KeyboardAwareScrollView>
  );
}
