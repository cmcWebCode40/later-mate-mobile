import * as AppleAuthentication from 'expo-apple-authentication';
import { ESocialAuth } from 'libs/types';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { Button, Icon } from 'components/common';

interface AppleSigInButtonProps {
  isLoading: boolean;
  onSelectSocialType: (socials?: ESocialAuth) => void;
  onSubmit: (oAuthToken: string, url: string) => void;
}

const AppleSigInButton: React.FunctionComponent<AppleSigInButtonProps> = ({
  isLoading,
  onSubmit,
  onSelectSocialType,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const handleAppleLogin = async () => {
    setErrorMessage(undefined);
    onSelectSocialType(ESocialAuth.APPLE);
    try {
      const credentials = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      const apiUrl = '/auth/social/sign-in-with-apple';
      if (credentials.identityToken) {
        onSubmit(credentials.identityToken, apiUrl);
      }
    } catch {
      setErrorMessage('something went wrong');
    }
  };

  useEffect(() => {
    if (errorMessage) {
      Alert.alert(errorMessage);
    }
  }, [errorMessage]);

  return (
    <Button
      variant='outlined'
      isLoading={isLoading}
      onPress={handleAppleLogin}
      starIcon={<Icon name='apple1' />}
      textStyle='text-black-500 font-normal'
    >
      Continue with Apple
    </Button>
  );
};

export default AppleSigInButton;
