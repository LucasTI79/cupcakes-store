import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button } from '@components/controllers/buttons/Button';
import { Switch } from '@components/controllers/inputs/Switch';
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
import { useRegisterController } from './useRegisterController';

export function Register() {
  const {
    navigate: { handleNavigateToLogin },
    form: {
      handleSubmit,
      control,
      registerErrorMessage,
      isSubmiting,
      formErrors,
    },
  } = useRegisterController();

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, width: '100%', height: '100%' }}
      keyboardShouldPersistTaps="always"
    >
      <Container>
        <Logo />
        <InputContainer>
          <Controller
            control={control}
            name="fullname"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Nome completo"
                placeholderTextColor="#aaaaaa"
                onChangeText={onChange}
                value={value}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                errorMessage={formErrors?.fullname?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="E-mail"
                placeholderTextColor="#aaaaaa"
                onChangeText={onChange}
                value={value}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                errorMessage={formErrors?.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Celular"
                placeholderTextColor="#aaaaaa"
                onChangeText={onChange}
                value={value}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                errorMessage={formErrors?.phone?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Senha"
                placeholderTextColor="#aaaaaa"
                onChangeText={onChange}
                value={value}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                errorMessage={formErrors?.password?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Confirmação de senha"
                placeholderTextColor="#aaaaaa"
                onChangeText={onChange}
                value={value}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                errorMessage={formErrors?.confirmPassword?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="isAdmin"
            render={({ field: { onChange, value } }) => (
              <View style={{ alignItems: 'flex-start' }}>
                <Switch
                  label="Admin"
                  onChange={() => onChange(!value)}
                  value={value}
                />
              </View>
            )}
          />
        </InputContainer>

        <Button
          isLoading={isSubmiting}
          title="Criar conta"
          onPress={handleSubmit}
        />
        {registerErrorMessage && (
          <ErrorMessage>{registerErrorMessage}</ErrorMessage>
        )}
        <FooterView>
          <FooterText>
            {' '}
            Já tem uma conta?{' '}
            <TextLink onPress={handleNavigateToLogin}>Login</TextLink>
          </FooterText>
        </FooterView>
      </Container>
    </KeyboardAwareScrollView>
  );
}
