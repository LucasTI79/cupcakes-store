import React, { useCallback, useState } from 'react';
import { RadioGroup } from 'react-native-radio-buttons-group';

import { ErrorMessage } from '../TextInput/styles';

import { Container } from './styles';
import { RadioGroupProps } from './types';

export function RadioGroupInput<T>({
  errorMessage,
  onChange,
  data,
  ...props
}: RadioGroupProps<T>) {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined,
  );

  const handleChangeItemSelect = useCallback(
    (selectedItemId: string) => {
      if (Array.isArray(data)) {
        if (data.length === 0) return;
        const selectedItemMatch = data.find((d) => d.id === selectedItemId);
        if (selectedItemMatch) {
          setSelectedItem(selectedItemMatch?.id);
          onChange?.(selectedItemMatch.value);
        }
      }
    },
    [data, onChange],
  );

  return (
    <Container>
      <RadioGroup
        containerStyle={{ alignItems: 'flex-start' }}
        selectedId={selectedItem}
        onPress={(selectedItemId: string) =>
          handleChangeItemSelect(selectedItemId)
        }
        {...props}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
