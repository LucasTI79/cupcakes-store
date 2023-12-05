import storage from '@react-native-firebase/storage';

export const uploadFile = async (
  path: string,
  file: Blob | Uint8Array | ArrayBuffer,
) => {
  if (file) {
    const storageRef = storage().ref(path);

    if (storageRef) {
      await storageRef.put(file);
      return storageRef.getDownloadURL();
    }
    return null;
  }
  console.log('Arquivo não encontrado localmente');
  return null;
};

export const deleteFile = async (path: string) => {
  const storageRef = storage().ref(path);

  const fileExists = await storageRef
    .getDownloadURL()
    .then(() => true)
    .catch(() => false);

  if (fileExists) {
    await storageRef.delete();
    console.log('Arquivo deletado com sucesso');
  } else {
    console.log('Arquivo não encontrado no caminho especificado');
  }
};
