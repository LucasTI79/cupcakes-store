import React from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';

import { Button } from '@components/controllers/buttons/Button';
import { ImageInput } from '@components/controllers/inputs/Image';
import { Switch } from '@components/controllers/inputs/Switch';
import { TextInput } from '@components/controllers/inputs/TextInput';
import { ErrorMessage } from '@components/controllers/inputs/TextInput/styles';
import { HeaderBack } from '@components/layout/HeaderBack';

import { Container, Content, InputContainer } from './styles';
import { useRegisterProductController } from './useRegisterProductController';

export function RegisterProduct() {
  const {
    form: { control, formErrors, isSubmiting, handleSubmit, errorMessage },
  } = useRegisterProductController();
  return (
    <Container>
      <HeaderBack />
      <Content>
        <InputContainer>
          <Controller
            control={control}
            name="image"
            render={({ field: { onChange, value } }) => (
              <ImageInput
                folder="products"
                errorMessage={formErrors?.image?.message}
                onChange={(url) => onChange(url)}
                value={value}
              />
            )}
          />
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
            name="description"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Descrição do produto"
                placeholderTextColor="#aaaaaa"
                onChangeText={onChange}
                value={value}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                errorMessage={formErrors?.description?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Preço"
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
            name="weight"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Peso em gramas"
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
            defaultValue
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
        </InputContainer>
        <Button
          isLoading={isSubmiting}
          title="Criar produto"
          onPress={handleSubmit}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Content>
    </Container>
  );
}
