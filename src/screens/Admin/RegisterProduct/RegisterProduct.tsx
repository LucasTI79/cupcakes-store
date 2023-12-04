import { Controller } from 'react-hook-form';
import { View } from 'react-native';

import { Button } from '@components/controllers/buttons/Button';
import { ImageInput } from '@components/controllers/inputs/Image';
import { Switch } from '@components/controllers/inputs/Switch';
import { TextInput } from '@components/controllers/inputs/TextInput';
import { ErrorMessage } from '@components/controllers/inputs/TextInput/styles';

import { Container, InputContainer } from './styles';
import { useRegisterProductController } from './useRegisterProductController';

export function RegisterProduct() {
  const {
    form: { control, formErrors, isSubmiting, handleSubmit, errorMessage },
  } = useRegisterProductController();
  return (
    <Container>
      <InputContainer>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Nome"
              placeholderTextColor="#aaaaaa"
              onChangeText={onChange}
              value={value}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              errorMessage={formErrors?.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Nome"
              placeholderTextColor="#aaaaaa"
              onChangeText={onChange}
              value={value}
              inputMode="numeric"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              errorMessage={formErrors?.price?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="active"
          render={({ field: { onChange, value } }) => (
            <View style={{ alignItems: 'flex-start' }}>
              <Switch
                label="Item ativo"
                onChange={() => onChange(!value)}
                value={value}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="image"
          render={({ field: { onChange, value } }) => (
            <ImageInput onChange={(url) => onChange(url)} value={value} />
          )}
        />
      </InputContainer>
      <Button
        isLoading={isSubmiting}
        title="Criar produto"
        onPress={handleSubmit}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
