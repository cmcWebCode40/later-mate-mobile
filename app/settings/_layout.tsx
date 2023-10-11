import { Stack, useRouter } from 'expo-router';
import { useTheme } from 'libs/hooks';
import React from 'react';

import { Icon } from 'components/common';

const SettingsLayout: React.FunctionComponent = () => {
  const {
    theme: { colors },
  } = useTheme();
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: colors.background,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.text,
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          headerShadowVisible: false,
          headerTitle: 'Settings',
          headerLeft: () => (
            <Icon
              color={colors.text}
              onPress={router.back}
              name='arrow-back-sharp'
            />
          ),
        }}
      />
    </Stack>
  );
};

export default SettingsLayout;
