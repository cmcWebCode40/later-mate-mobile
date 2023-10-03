import React from 'react';
import { TextProps } from 'react-native';

import { StyledText } from 'components/nativewind-wrapper';

type Size = 'sm' | 'md' | 'lg';

interface HeadingProps extends TextProps {
  variant?: Size;
  className?: string;
}

const variantStyles = {
  sm: 'text-base font-normal',
  md: 'text-lg font-medium',
  lg: 'text-2xl font-medium',
};

const Heading: React.FunctionComponent<HeadingProps> = ({
  variant = 'md',
  className,
  ...rest
}) => {
  return (
    <StyledText
      className={`
       text-black-600  ${className} ${variantStyles[variant]}`}
      {...rest}
    />
  );
};

export default Heading;
