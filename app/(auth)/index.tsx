import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { errorHandler } from 'libs/config';
import { useTheme } from 'libs/hooks';
import { ESocialAuth } from 'libs/types';
import { resquestApi } from 'libs/utils/apiHelpers';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';

import AuthAtomBackgroundImage from 'assets/images/auth_background.jpg';
import AuthAtomDarkBackgroundImage from 'assets/images/auth_dark_background.jpg';
import { AppleSigInButton, GoogleSignInButton } from 'components/auth';
import { Button, Heading, Icon } from 'components/common';
import { ScreenLayout } from 'components/layout';
import {
  StyledImageBackground,
  StyledView,
} from 'components/nativewind-wrapper';

const AuthenticationOptionsScreen: React.FunctionComponent = () => {
  const [socialsType, setSocialsType] = useState<ESocialAuth | undefined>(
    undefined
  );

  const {
    mode,
    theme: { colors },
  } = useTheme();

  const { data, isLoading, error, mutate } = useMutation<
    { data: unknown },
    Error,
    { url: string; oAuthToken: string }
  >((variable) =>
    resquestApi({
      url: variable.url,
      data: { token: variable.oAuthToken },
    })
  );

  useEffect(() => {
    if (error) {
      Alert.alert(errorHandler(error));
    }
  }, [data, error]);

  const handleEmailLogin = () => {
    // router.push('(tabs)')
    router.push({
      pathname: '(auth)/authentication',
      params: {
        mode: 1,
      },
    });
  };

  const handleSocialType = (socials?: ESocialAuth) => {
    setSocialsType(socials);
  };

  return (
    <ScreenLayout className=''>
      <StyledImageBackground
        style={styles.map}
        className='px-5'
        source={
          mode === 'dark'
            ? AuthAtomDarkBackgroundImage
            : AuthAtomBackgroundImage
        }
      >
        <StyledView className='flex-1 justify-center'>
          <StyledView className='flex-row justify-center mb-4 items-center'>
            <Heading className='text-2xl font-bold text-center'>
              Sign In
            </Heading>
          </StyledView>
          <StyledView className='space-y-6 mt-4'>
            {Platform.OS === 'ios' && (
              <StyledView>
                <AppleSigInButton
                  onSelectSocialType={handleSocialType}
                  isLoading={socialsType === ESocialAuth.APPLE && isLoading}
                  onSubmit={(oAuthToken, url) => mutate({ oAuthToken, url })}
                />
              </StyledView>
            )}
            <StyledView>
              <GoogleSignInButton
                onSelectSocialType={handleSocialType}
                isLoading={socialsType === ESocialAuth.GOOGLE && isLoading}
                onSubmit={(oAuthToken, url) => mutate({ oAuthToken, url })}
              />
            </StyledView>
            <Button
              onPress={handleEmailLogin}
              starIcon={<Icon name='email' color={colors.white[100]} />}
              textStyle='text-black-500 font-normal'
            >
              Continue with Email
            </Button>
          </StyledView>
        </StyledView>
      </StyledImageBackground>
    </ScreenLayout>
  );
};

export default AuthenticationOptionsScreen;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
