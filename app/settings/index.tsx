import { useTheme } from 'libs/hooks';
import { useColorScheme } from 'nativewind';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Button, Heading, Icon } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';
import { PreferenceCard } from 'components/settings';

const SettingsScreen: React.FunctionComponent = () => {
  const [isPNEnabled, setIsPNEnabled] = useState(false);
  const {
    theme: { colors },
    toggleColorScheme,
    mode,
  } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(mode === 'dark' ? true : false);
  const { colorScheme } = useColorScheme();

  const handleColorThemeSwitch = () => {
    if (mode === 'dark') {
      toggleColorScheme('light');
      setIsDarkMode(false);
    } else {
      toggleColorScheme('dark');
      setIsDarkMode(true);
    }
  };

  const handleTogglePushNotification = () => {
    setIsPNEnabled((previousState) => !previousState);
  };

  const handleDeletAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account ?',
      [
        {
          text: 'delete',
          style: 'destructive',
        },
        {
          text: 'cancel',
          style: 'cancel',
        },
      ]
    );
  };

  return (
    <StyledView className='px-5 flex-1 mb-5 pb-4 justify-between'>
      <StyledView className='space-y-6 mt-10'>
        <StyledView>
          <Heading className='mb-3 text-sm text-grey-700'>Preference</Heading>
          <StyledView>
            <PreferenceCard
              title='Push Notification'
              isEnabled={isPNEnabled}
              icon={<Icon color={colors.text} name='notifications-outline' />}
              onToggle={handleTogglePushNotification}
            />
            <PreferenceCard
              title={`${colorScheme === 'dark' ? 'Dark' : 'Light'} Mode`}
              isEnabled={isDarkMode}
              icon={<Icon color={colors.text} name='settings-outline' />}
              onToggle={handleColorThemeSwitch}
            />
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView className='mt-6'>
        <Button onPress={handleDeletAccount}>Delete my account</Button>
      </StyledView>
    </StyledView>
  );
};

export default SettingsScreen;
