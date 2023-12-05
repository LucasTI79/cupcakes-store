import { useNavigation } from '@react-navigation/native';

export function useHeaderBackController() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
  return {
    handleBack,
  };
}
