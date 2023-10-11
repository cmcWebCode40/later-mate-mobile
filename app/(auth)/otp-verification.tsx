import { useMutation } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { errorHandler } from 'libs/config';
import { resquestApi } from 'libs/utils/apiHelpers';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { OTPVerificationForm } from 'components/auth';
import { Heading, Paragraph } from 'components/common';
import { ScreenLayout } from 'components/layout';

const OTPVerificationScreen: React.FunctionComponent = () => {
  const params = useLocalSearchParams<{ phone: string }>();
  const router = useRouter();

  const phoneNumber = params.phone || null;

  const verifyPhoneMutation = useMutation<unknown, Error, unknown>(
    () =>
      resquestApi({
        url: '/auth/verify/phone',
        data: {},
      }),
    {
      onSuccess: () => {
        router.push('home');
      },
    }
  );

  const resendVerifyPhoneMutation = useMutation<unknown, Error, unknown>(
    () =>
      resquestApi({
        url: '/auth/verify/phone/resend',
        data: {},
      }),
    {
      onSuccess: () => {
        router.push('home');
      },
    }
  );

  return (
    <ScreenLayout className='px-5 pt-6 pb-2'>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Heading className='mb-4 text-center'>Verify your phone number</Heading>
        <Paragraph className='text-center mb-4 text-lg'>
          A special code has been sent to{' '}
          <Paragraph className='font-bold text-black'>
            {params?.phone},
          </Paragraph>{' '}
          enter code below to proceed
        </Paragraph>
        <Paragraph variant='sm' className='text-primary-100 mb-1 text-center'>
          {errorHandler(verifyPhoneMutation || resendVerifyPhoneMutation)}
        </Paragraph>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          {phoneNumber && (
            <OTPVerificationForm
              isResending={resendVerifyPhoneMutation.isLoading}
              isLoading={verifyPhoneMutation.isLoading}
              onSubmit={(token) => {
                verifyPhoneMutation.mutate({
                  token,
                  phone: phoneNumber,
                });
              }}
              onResendCode={() => {
                resendVerifyPhoneMutation.mutate({
                  phone: phoneNumber,
                });
              }}
            />
          )}
        </KeyboardAwareScrollView>
      </KeyboardAwareScrollView>
    </ScreenLayout>
  );
};

export default OTPVerificationScreen;
