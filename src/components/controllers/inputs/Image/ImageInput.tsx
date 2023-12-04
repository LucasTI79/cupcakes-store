import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Button, Image, View } from 'react-native';

import { Load } from '@components/controllers/loading/Load';
import { useAuth } from '@hooks/useAuth';
import { uploadFile } from '@lib/firebase/storage';

type UploadInputProps = {
  onChange?: (uri: string) => void;
  value: string;
  folder?: string | null;
};

export function ImageInput({
  onChange,
  folder,
  value,
}: Readonly<UploadInputProps>) {
  const [uploadIsLoading, setUploadIsLoading] = useState(false);
  const [photo, setPhoto] = useState<string | undefined | null>(value);
  const { getCurrentUser } = useAuth();

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
        const photoSize = photoInfo?.size;

        if (photoSize && photoSize / 1024 / 1024 > 5) {
          Alert.alert('Imagem muito grande. Escolha uma de até 5MB');
          return;
        }
        const response = await fetch(photoSelected.uri);
        const blob = await response.blob();

        const user = await getCurrentUser();
        const path = `/images/${user?.uid}/${folder ? `${folder}/` : ''}${
          photoSelected.fileName
        }`;
        const uploadUri = await uploadFile(path, blob);
        onChange?.(uploadUri);
        setPhoto(uploadUri);
      }
    } catch (error) {
    } finally {
      setUploadIsLoading(false);
    }
  }

  return (
    <View>
      {uploadIsLoading && <Load />}
      {photo && (
        <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />
      )}
      <Button
        title="Pick Image"
        disabled={uploadIsLoading}
        onPress={handleUploadImage}
      />
    </View>
  );
}
