import { useTheme } from 'libs/hooks';
import React, { ForwardedRef, forwardRef, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import {
  StyledPressable,
  StyledTextInput,
  StyledView,
} from 'components/nativewind-wrapper';

import { Heading } from '../heading';
import { Icon } from '../icon';
import { Paragraph } from '../paragraph';

interface FormInputProps extends TextInputProps {
  className?: string;
  isError?: boolean;
  errorMessage?: string;
  hasPassword?: boolean;
  label?: string;
  icon?: React.ReactNode;
}

const FormInput: React.FunctionComponent<FormInputProps> = forwardRef(
  (
    {
      className,
      errorMessage,
      isError,
      hasPassword,
      label,
      editable,
      icon,
      ...rest
    },
    ref: ForwardedRef<TextInput>
  ) => {
    const { theme } = useTheme();
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true);

    const handlePasswordVisibility = () => {
      setPasswordVisibility(!passwordVisibility);
    };

    const PasswordIcon = (
      <StyledPressable onPress={handlePasswordVisibility}>
        {/* <Icon
          color={colors.grey[200]}
          name={!passwordVisibility ? 'visibility' : 'visibility-off'}
        /> */}
      </StyledPressable>
    );

    return (
      <StyledView>
        <Heading variant='sm' className='font-semibold my-2'>
          {label}
        </Heading>
        <StyledView
          style={[
            isError && {
              borderColor: theme.colors.primary[100],
              borderWidth: 1,
            },
          ]}
          className='flex-row px-4 justify-between items-center border-none border-black bg-grey-500 rounded-md'
        >
          {icon && <StyledView className='w-[10%]'>{icon}</StyledView>}
          <StyledTextInput
            {...rest}
            autoCapitalize={'none'}
            className={`${className} items-center justify-between w-11/12 py-4`}
            ref={ref}
            editable={editable}
            secureTextEntry={hasPassword && passwordVisibility}
          />
          {hasPassword && PasswordIcon}
        </StyledView>
        {isError && (
          <Paragraph variant='sm' className='text-primary-100 mt-0.5'>
            {errorMessage}
          </Paragraph>
        )}
      </StyledView>
    );
  }
);

export default FormInput;
