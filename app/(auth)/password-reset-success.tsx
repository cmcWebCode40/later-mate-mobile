import { Link } from 'expo-router';
import React from 'react';

import { Button, Heading } from 'components/common';
import { ScreenLayout } from 'components/layout';
import { StyledView } from 'components/nativewind-wrapper';

const PasswordResetScreen: React.FunctionComponent = () => {
  return (
    <ScreenLayout className='px-5 pt-6 pb-2'>
      <StyledView className='justify-center flex-1 items-center'>
        <Heading className='mb-12'>Password successfully reset</Heading>
        <Link
          asChild
          href={{
            pathname: '(auth)/authentication',
            params: {
              mode: 1,
            },
          }}
        >
          <Button className='w-full'>Login</Button>
        </Link>
      </StyledView>
    </ScreenLayout>
  );
};

export default PasswordResetScreen;
