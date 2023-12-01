import React from 'react';

import { LogoutButton } from '@components/controllers/buttons/LogoutButton';

import { Container, Greeting, SubTitle, Title } from './styles';

export function Header() {
  function handleSignOut() {}

  return (
    <Container>
      <Greeting>
        <Title>HelpDesk</Title>
        <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
      </Greeting>

      <LogoutButton onPress={handleSignOut} />
    </Container>
  );
}
