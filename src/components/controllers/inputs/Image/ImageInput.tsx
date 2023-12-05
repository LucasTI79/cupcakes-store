import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image } from 'react-native';

import { Load } from '@components/controllers/loading/Load';
import { useAuth } from '@hooks/useAuth';
import { uploadFile } from '@lib/firebase/storage';

import { ErrorMessage } from '../TextInput/styles';

import { Button, Container, TextButton } from './styles';

type UploadInputProps = {
  onChange?: (uri: string) => void;
  value: string;
  folder?: string | null;
  errorMessage?: string;
};

export function ImageInput({
  onChange,
  errorMessage,
  folder,
  value,
}: Readonly<UploadInputProps>) {
  const [uploadIsLoading, setUploadIsLoading] = useState(false);
  const [photo, setPhoto] = useState<string | undefined | null>(value);
  const { user } = useAuth();

  async function handleUploadImage() {
    try {
      setUploadIsLoading(true);
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
        selectionLimit: 1,
        allowsMultipleSelection: false,
      });

      if (result.canceled) {
        return;
      }

      const photoSelected = result.assets[0];

      if (photoSelected.uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.uri, {
          size: true,
        });
        const photoSizeInBytes = photoInfo?.size;
        const photoSizeInMegaBytes = photoSizeInBytes / 1024 / 1024;

        if (photoSizeInBytes && photoSizeInMegaBytes > 5) {
          Alert.alert('Imagem muito grande. Escolha uma de até 5MB');
          return;
        }
        const response = await fetch(photoSelected.uri);
        const blob = await response.blob();

        const path = `/images/${user?.uid}/${
          folder ? `${folder}/` : ''
        }${photoSelected.uri.split('/').pop()!}`;
        const uploadUri = await uploadFile(path, blob);
        if (uploadUri) {
          onChange?.(uploadUri);
        }
        setPhoto(uploadUri);
      }
    } catch (error) {
      Alert.alert('Ocorreu um erro ao fazer upload da imagem');
    } finally {
      setUploadIsLoading(false);
    }
  }

  return (
    <Container>
      {uploadIsLoading && <Load />}
      {photo && (
        <Image
          source={{ uri: photo }}
          style={{
            width: 144,
            height: 144,
            borderRadius: 32,
          }}
        />
      )}
      <Button disabled={uploadIsLoading} onPress={handleUploadImage}>
        <TextButton>Selecionar Imagem</TextButton>
      </Button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
