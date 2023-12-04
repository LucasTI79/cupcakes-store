import { Controller } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'styled-components/native';

import { Button } from '@components/controllers/buttons/Button';
import { TextInput } from '@components/controllers/inputs/TextInput';
import { ErrorMessage } from '@components/controllers/inputs/TextInput/styles';
import { Logo } from '@components/view/Logo/Logo';

import {
  Container,
  FooterText,
  FooterView,
  InputContainer,
  TextLink,
} from './styles';
import { useLoginController } from './useLoginController';

export function Login() {
  const { COLORS } = useTheme();
  const {
    form: { control, formErrors, handleSubmit, isSubmiting, loginErrorMessage },
    navigate,
  } = useLoginController();

  function handleNavigateToRegister() {
    navigate.navigate('register');
  }

  function handleNavigateToForgotPassword() {
    navigate.navigate('forgotPassword');
  }

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, width: '100%' }}
      keyboardShouldPersistTaps="always"
    >
      <Container>
        <Logo />
        <InputContainer>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="E-mail"
                placeholderTextColor="#aaaaaa"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                errorMessage={formErrors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder="Senha"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                errorMessage={formErrors.password?.message}
              />
            )}
          />
          <TextLink
            color={COLORS.SUBTEXT}
            onPress={handleNavigateToForgotPassword}
            style={{ alignSelf: 'flex-end' }}
          >
            Esqueci minha senha
          </TextLink>
        </InputContainer>
        <Button
          onPress={() => handleSubmit()}
          title="Entrar"
          isLoading={isSubmiting}
        />
        {loginErrorMessage && <ErrorMessage>{loginErrorMessage}</ErrorMessage>}
        <FooterView>
          <FooterText>
            {' '}
            Não tem uma conta?{' '}
            <TextLink onPress={handleNavigateToRegister}>Criar conta</TextLink>
          </FooterText>
        </FooterView>
      </Container>
    </KeyboardAwareScrollView>
  );
}
