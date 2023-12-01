import auth from '@react-native-firebase/auth';

import { Logout } from '@components/controllers/buttons/Logout';

import { Container } from './styles';

export function Home() {
  function handleLogout() {
    auth().signOut();
  }

  return (
    <Container>
      <Logout onPress={handleLogout} />
    </Container>
  );
}
