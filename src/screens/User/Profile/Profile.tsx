import { HelpCircle, InfoIcon, ShieldIcon } from 'lucide-react-native';
import React from 'react';
import { Text } from 'react-native';

import { Logout as LogoutButton } from '@components/controllers/buttons/Logout';
import theme from '@theme/index';

import { Container, SettingsItem, SettingsList, Title } from './styles';

export function Profile() {
  return (
    <Container>
      <Title>Profile</Title>
      <SettingsList>
        <SettingsItem>
          <Text>Meus Dados</Text>
          <InfoIcon size={16} color={theme.COLORS.TEXT} />
        </SettingsItem>
        {/* <SettingsItem>
          <Text>Endereços Salvos</Text>
          <MapPinIcon size={16} color={theme.COLORS.TEXT} />
        </SettingsItem> */}
        <SettingsItem>
          <Text>Politica de privacidade</Text>
          <ShieldIcon size={16} color={theme.COLORS.TEXT} />
        </SettingsItem>
        <SettingsItem>
          <Text>Ajuda</Text>
          <HelpCircle size={16} color={theme.COLORS.TEXT} />
        </SettingsItem>
      </SettingsList>
      <LogoutButton />
    </Container>
  );
}
