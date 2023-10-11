import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ResetPasswordForm } from 'components/auth';
import { Heading } from 'components/common';
import { ScreenLayout } from 'components/layout';

const PasswordResetScreen: React.FunctionComponent = () => {
  const params = useLocalSearchParams<{ phone: string }>();
  const { phone } = params;

  return (
    <ScreenLayout className='px-5 pt-6 pb-2'>
      <Heading className='text-primary-500 text-lg mt-8'>
        Enter the OTP sent to {phone} below.
      </Heading>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ResetPasswordForm
          onSubmit={() => {
            return true;
          }}
        />
      </KeyboardAwareScrollView>
    </ScreenLayout>
  );
};

export default PasswordResetScreen;
