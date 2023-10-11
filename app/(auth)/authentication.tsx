import { useMutation } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { errorHandler } from 'libs/config';
import { resquestApi } from 'libs/utils/apiHelpers';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { LoginForm, RegisterForm } from 'components/auth';
import { Segment } from 'components/common';
import { ScreenLayout } from 'components/layout';
import { StyledView } from 'components/nativewind-wrapper';

const segmentItems = ['Create Account', 'Login'];

const AuthenticationScreen: React.FunctionComponent = () => {
  const params = useLocalSearchParams<{ mode: string }>();
  const { mode } = params;
  const [tab, setTab] = useState<number>(0);

  useEffect(() => {
    if (mode) {
      setTab(parseInt(mode, 10));
    }
  }, [mode]);

  const loginMutation = useMutation<unknown, Error, unknown>(() =>
    resquestApi({
      url: '/auth/login',
      data: {},
    })
  );

  const registerMutation = useMutation<unknown, Error, unknown>(
    () =>
      resquestApi({
        url: '/auth/register',
        data: {},
      }),
    {
      onSuccess: () => {
        setTab(1);
      },
    }
  );

  return (
    <ScreenLayout className='px-5 pt-6 pb-2'>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <StyledView className='flex-1 justify-between flex-col'>
          <StyledView>
            <StyledView>
              <Segment tab={tab} onSelect={setTab} items={segmentItems} />
              {tab === 0 ? (
                <RegisterForm
                  isLoading={registerMutation.isLoading}
                  onSubmit={(data) => {
                    registerMutation.mutate(data);
                  }}
                  errorMessage={errorHandler(registerMutation.error)}
                />
              ) : (
                <LoginForm
                  isLoading={loginMutation.isLoading}
                  errorMessage={errorHandler(loginMutation.error)}
                  onSubmit={(data) => {
                    loginMutation.mutate(data);
                  }}
                />
              )}
            </StyledView>
          </StyledView>
        </StyledView>
      </KeyboardAwareScrollView>
    </ScreenLayout>
  );
};

export default AuthenticationScreen;
