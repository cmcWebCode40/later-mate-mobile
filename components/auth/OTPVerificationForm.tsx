import { useTimer } from 'libs/hooks';
import React, { useState } from 'react';

import { Button, Paragraph } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

import OtpInput from './OtpInput';

interface OTPVerificationFormProps {
  onSubmit: (otp: string) => void;
  onResendCode: () => void;
  isLoading: boolean;
  isResending: boolean;
}

const DEFAULT_OTP_DURATIION = 120;

const OTPVerificationForm: React.FunctionComponent<
  OTPVerificationFormProps
> = ({ onResendCode, onSubmit, isLoading, isResending }) => {
  const [otpCode, setOTPCode] = useState('');
  const { timeLeft, hasTimeout, resetOtpTimer } = useTimer(
    DEFAULT_OTP_DURATIION
  );

  return (
    <StyledView>
      <OtpInput code={otpCode} onSetCode={setOTPCode} maximumLength={5} />
      <StyledView className='space-y-4 mt-10'>
        <Button
          isLoading={isLoading}
          disabled={String(otpCode).length !== 5}
          onPress={() => {
            onSubmit(otpCode);
          }}
        >
          Verify
        </Button>
        {!hasTimeout ? (
          <Paragraph className='text-center'>{timeLeft}</Paragraph>
        ) : (
          <Button
            isLoading={isResending}
            onPress={() => {
              onResendCode();
              resetOtpTimer(DEFAULT_OTP_DURATIION);
            }}
            variant='ghost'
          >
            Resend code
          </Button>
        )}
      </StyledView>
    </StyledView>
  );
};

export default OTPVerificationForm;
