import FontAwesome from '@expo/vector-icons/FontAwesome';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AppContextProvider } from 'libs/contexts';
import { useColorScheme } from 'nativewind';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { SheetProvider } from 'react-native-actions-sheet';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const RootLayout: React.FunctionComponent = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
};

export default RootLayout;

const RootLayoutNav: React.FunctionComponent = () => {
  const { colorScheme } = useColorScheme();
  const statusBarStyleIos =
    colorScheme === 'dark'
      ? 'light'
      : colorScheme === 'light'
      ? 'dark'
      : 'auto';
  const statusBarStyle =
    colorScheme === 'dark'
      ? 'light'
      : colorScheme === 'light'
      ? 'dark'
      : 'auto';

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <SheetProvider>
          <StatusBar
            style={Platform.OS === 'ios' ? statusBarStyleIos : statusBarStyle}
          />
          <Stack
            initialRouteName='(tabs)'
            screenOptions={{
              headerShown: false,
            }}
          />
        </SheetProvider>
      </AppContextProvider>
    </QueryClientProvider>
  );
};
