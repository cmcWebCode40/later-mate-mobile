/* eslint-disable react-hooks/exhaustive-deps */
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { Config } from 'libs/config';
import { ESocialAuth } from 'libs/types';
import React, { useEffect } from 'react';
import { Alert } from 'react-native';

import { Button, Icon } from 'components/common';

WebBrowser.maybeCompleteAuthSession();

interface GoogleSignInButtonProps {
  isLoading: boolean;
  onSubmit: (oAuthToken: string, url: string) => void;
  onSelectSocialType: (socials?: ESocialAuth) => void;
}

const GoogleSignInButton: React.FunctionComponent<GoogleSignInButtonProps> = ({
  onSubmit,
  isLoading,
  onSelectSocialType,
}) => {
  const { oAuthClient } = Config;
  const authRequestConfig = {
    iosClientId: oAuthClient.iosId,
    androidClientId: oAuthClient.iosId,
    expoClientId: oAuthClient.expoId,
    webClientId: oAuthClient.webId,
    // TODO: update to use DEV and Production Config settings
    redirectUri: 'com.amatnow.devapp:/(auth)',
  };

  const [_request, response, promptAsync] =
    Google.useAuthRequest(authRequestConfig);

  useEffect(() => {
    onSelectSocialType(ESocialAuth.GOOGLE);
    if (response?.type === 'success' && response?.authentication) {
      const apiUrl = '/auth/social/google';
      onSubmit(response?.authentication?.accessToken, apiUrl);
    }
    if (response?.type === 'error' && response?.error) {
      Alert.alert(response?.error?.message);
    }
  }, [response]);

  const handleSignIn = async () => {
    promptAsync();
  };

  return (
    <Button
      variant='outlined'
      onPress={handleSignIn}
      isLoading={isLoading}
      starIcon={<Icon name='google' />}
      textStyle='text-black-500 font-normal'
    >
      Continue with Google
    </Button>
  );
};

export default GoogleSignInButton;
