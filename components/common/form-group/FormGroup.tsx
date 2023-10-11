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
        <Icon
          color={theme.colors.text}
          name={!passwordVisibility ? 'visibility' : 'visibility-off'}
        />
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
              borderColor: theme.colors.red[600],
              borderWidth: 1,
            },
          ]}
          className='flex-row px-4 justify-between items-center border-none  bg-slate-100 dark:bg-transparent dark:border dark:border-gray-100 rounded-md'
        >
          {icon && <StyledView className='w-[10%]'>{icon}</StyledView>}
          <StyledTextInput
            {...rest}
            autoCapitalize={'none'}
            className={`${className} items-center justify-between w-11/12 py-4 placeholder:text-slate-950 dark:placeholder:text-slate-50`}
            ref={ref}
            editable={editable}
            placeholderTextColor={theme.colors.text}
            secureTextEntry={hasPassword && passwordVisibility}
          />
          {hasPassword && PasswordIcon}
        </StyledView>
        {isError && (
          <Paragraph variant='sm' className='text-red-600 mt-0.5'>
            {errorMessage}
          </Paragraph>
        )}
      </StyledView>
    );
  }
);

export default FormInput;
