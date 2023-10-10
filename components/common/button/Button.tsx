import { useTheme } from 'libs/hooks';
import React from 'react';
import { PressableProps } from 'react-native';

import {
  StyledActivityIndicator,
  StyledPressable,
  StyledText,
  StyledView,
} from 'components/nativewind-wrapper';

type Size = 'sm' | 'md' | 'lg';
type ButtonVariant = 'contained' | 'outlined' | 'ghost' | 'text';

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  size?: Size;
  className?: string;
  starIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  isLoading?: boolean;
  textStyle?: string;
}

const variantStyles = {
  contained: 'bg-pink-600 text-white hover:bg-slate-800',
  outlined: 'bg-slate-50 text-slate-950 hover:opacity-50 border border-black',
  ghost: 'bg-gray-500 text-pink-600 hover:opacity-50',
  text: 'text-slate-950',
};

const variantSizes = {
  md: 'py-4',
  sm: 'py-2.5 px-4',
  lg: 'py-8 px-8',
};

const buttonTextClass = {
  contained: 'text-slate-50',
  outlined: 'text-slate-950',
  text: 'text-slate-950',
  ghost: 'text-pink-600',
};

const Button: React.FunctionComponent<ButtonProps> = ({
  size = 'md',
  variant = 'contained',
  className,
  children,
  textStyle,
  isLoading,
  disabled,
  starIcon,
  endIcon,
  ...rest
}) => {
  const {
    theme: { colors },
  } = useTheme();
  const disabledClassname = disabled || isLoading ? 'opacity-70' : '';

  return (
    <StyledPressable
      className={`flex-row items-center justify-center rounded-lg space-x-2 
      active:opacity-80
 ${variantSizes[size]} ${variantStyles[variant]} ${className} ${disabledClassname}`}
      disabled={disabled || isLoading}
      {...rest}
    >
      {starIcon && <StyledView>{starIcon}</StyledView>}
      <StyledText
        className={`${buttonTextClass[variant]} text-base font-semibold text-center flex-row items-center justify-center ${textStyle}`}
      >
        {children}
      </StyledText>
      {endIcon && <StyledView>{endIcon}</StyledView>}
      {isLoading && (
        <StyledActivityIndicator
          color={variant === 'contained' ? colors.text : colors.primary[100]}
          className='ml-2'
        />
      )}
    </StyledPressable>
  );
};

export default Button;
