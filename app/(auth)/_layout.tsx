import { router, Stack } from 'expo-router';
import { useTheme } from 'libs/hooks';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Icon } from 'components/common';

const AuthLayout: React.FunctionComponent = () => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerLeft: () => (
            <Icon
              color={colors.text}
              onPress={router.back}
              name='arrow-back-sharp'
            />
          ),
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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='authentication'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='forgot-password'
          options={{
            headerShown: true,
            headerTitle: 'Forgot Password',
          }}
        />
        <Stack.Screen
          name='otp-verification'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='password-reset-success'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='reset-password'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default AuthLayout;
