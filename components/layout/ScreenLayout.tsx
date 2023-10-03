import React from 'react';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

import { StyledSafeAreaView } from 'components/nativewind-wrapper';

const ScreenLayout: React.FunctionComponent<SafeAreaViewProps> = ({
  ...rest
}) => {
  return (
    <StyledSafeAreaView
      className={`flex-1 bg-white-100 pt-4 px-[25px]`}
      {...rest}
    />
  );
};

export default ScreenLayout;
