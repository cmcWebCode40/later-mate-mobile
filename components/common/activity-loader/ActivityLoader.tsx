import { useTheme } from 'libs/hooks';
import React from 'react';
import { ActivityIndicatorProps } from 'react-native';

import { StyledActivityIndicator } from 'components/nativewind-wrapper';

type ActivityLoaderProps = ActivityIndicatorProps;

const ActivityLoader: React.FunctionComponent<ActivityLoaderProps> = ({
  color,
  ...otherLoaderProps
}) => {
  const { theme } = useTheme();
  return (
    <StyledActivityIndicator
      {...otherLoaderProps}
      color={color || theme.colors.primary[100]}
    />
  );
};

export default ActivityLoader;
