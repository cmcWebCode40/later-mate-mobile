import { useTheme } from 'libs/hooks';
import React from 'react';

import { Heading, Icon } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

const Header: React.FunctionComponent = () => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <StyledView className='flex-row justify-between items-center'>
      <StyledView>
        <Heading className='text-xl font-semibold'>Michael Chinweike</Heading>
      </StyledView>
      <StyledView>
        <Icon size={32} color={colors.text} name='notifications-outline' />
      </StyledView>
    </StyledView>
  );
};

export default Header;
