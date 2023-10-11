import React from 'react';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

import { StyledSafeAreaView } from 'components/nativewind-wrapper';

interface ScreenLayoutProps extends SafeAreaViewProps {
  className?: string;
}

const ScreenLayout: React.FunctionComponent<ScreenLayoutProps> = ({
  className,
  ...rest
}) => {
  return (
    <StyledSafeAreaView
      className={`flex-1 bg-slate-50 dark:bg-gray-950 pt-4 px-5 ${className}`}
      {...rest}
    />
  );
};

export default ScreenLayout;
