import React from 'react';
import { TextProps } from 'react-native';

import { StyledText } from 'components/nativewind-wrapper';

type Size = 'sm' | 'md' | 'lg' | 'base';

interface ParagraphProps extends TextProps {
  variant?: Size;
  className?: string;
}

const variantStyles = {
  sm: 'text-sm',
  md: 'text-xl',
  lg: 'text-4xl',
  base: 'text-base',
};

const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  variant = 'md',
  className,
  ...rest
}) => {
  return (
    <StyledText
      className={`${variantStyles[variant]} text-slate-950 dark:text-slate-50 ${className}`}
      {...rest}
    />
  );
};

export default Paragraph;
