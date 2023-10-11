import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { errorHandler } from 'libs/config';
import { resquestApi } from 'libs/utils/apiHelpers';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ForgotPasswordForm } from 'components/auth';
import { StyledView } from 'components/nativewind-wrapper';

const ForgotPasswordScreen: React.FunctionComponent = () => {
  const router = useRouter();

  const { mutate, isLoading, error } = useMutation<unknown, Error, unknown>(
    () =>
      resquestApi({
        url: '/auth/forgot-password',
        data: {},
      }),
    {
      onSuccess: () => {
        router.push('home');
      },
    }
  );

  return (
    <StyledView className='px-5 pt-4'>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ForgotPasswordForm
          onSubmit={(phone) => {
            mutate({ phone });
          }}
          isLoading={isLoading}
          error={errorHandler(error)}
        />
      </KeyboardAwareScrollView>
    </StyledView>
  );
};

export default ForgotPasswordScreen;
