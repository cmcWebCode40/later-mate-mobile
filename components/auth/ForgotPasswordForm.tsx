import { Link } from 'expo-router';
import React from 'react';

import { Button, FormGroup, Paragraph } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

interface ForgotPasswordFormProps {
  isLoading: boolean;
  error?: string;
  onSubmit: (phone: string) => void;
}

const ForgotPasswordForm: React.FunctionComponent<ForgotPasswordFormProps> = ({
  isLoading,
  error,
}) => {
  const handleSubmit = () => {
    return true;
  };

  return (
    <StyledView className='mt-5'>
      <StyledView className='space-y-6'>
        <StyledView>
          <FormGroup label='Email address' placeholder='Enter email or phone' />
          <Paragraph variant='sm' className='text-primary-100 mt-3'>
            {error}
          </Paragraph>
        </StyledView>
      </StyledView>
      <StyledView className='mt-8 space-y-3'>
        <Button
          isLoading={isLoading}
          onPress={handleSubmit}
          variant='contained'
        >
          Send OTP
        </Button>
        <Link
          asChild
          href={{
            params: {
              mode: 1,
            },
            pathname: '(auth)/authentication',
          }}
        >
          <Button variant='outlined'>Log In</Button>
        </Link>
      </StyledView>
    </StyledView>
  );
};

export default ForgotPasswordForm;
