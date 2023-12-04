import storage from '@react-native-firebase/storage';

export const uploadFile = async (
  path: string,
  file: Blob | Uint8Array | ArrayBuffer,
) => {
  const storageRef = storage().ref(path);
  const snapshot = await storageRef.put(file);
  return snapshot.ref.getDownloadURL();
};

export const deleteFile = async (path: string) => {
  const storageRef = storage().ref(path);
  await storageRef.delete();
};
