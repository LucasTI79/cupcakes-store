import { HelpCircle, InfoIcon, ShieldIcon } from 'lucide-react-native';
import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Logout as LogoutButton } from '@components/controllers/buttons/Logout';

import { Container, SettingsItem, SettingsList, Title } from './styles';

export function Profile() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Title>Profile</Title>
      <SettingsList>
        <SettingsItem>
          <Text>Meus Dados</Text>
          <InfoIcon size={16} color={COLORS.TEXT} />
        </SettingsItem>
        {/* <SettingsItem>
          <Text>Endereços Salvos</Text>
          <MapPinIcon size={16} color={COLORS.TEXT} />
        </SettingsItem> */}
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
