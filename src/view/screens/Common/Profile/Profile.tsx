import { HelpCircle, ShieldIcon } from 'lucide-react-native';
import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Logout as LogoutButton } from '@components/controllers/buttons/Logout';
import { useAuth } from '@hooks/useAuth';

import {
  Container,
  GrettingsSubTitle,
  GrettingsTitle,
  SettingsItem,
  SettingsList,
  Title,
} from './styles';

export function Profile() {
  const { COLORS } = useTheme();
  const { user } = useAuth();

  return (
    <Container>
      <Title>Perfil</Title>
      <GrettingsTitle>
        Olá, <GrettingsSubTitle>{user?.fullname}</GrettingsSubTitle>
      </GrettingsTitle>
      <SettingsList>
        <SettingsItem>
          <Text>Politica de privacidade</Text>
          <ShieldIcon size={16} color={COLORS.TEXT} />
        </SettingsItem>
        <SettingsItem>
          <Text>Ajuda</Text>
          <HelpCircle size={16} color={COLORS.TEXT} />
        </SettingsItem>
      </SettingsList>
      <LogoutButton />
    </Container>
  );
}
