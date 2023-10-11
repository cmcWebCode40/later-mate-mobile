import { useTheme } from 'libs/hooks';
import React from 'react';

import { Icon, Paragraph } from 'components/common';
import { IconNames } from 'components/common/icon/Icon';
import { StyledPressable, StyledView } from 'components/nativewind-wrapper';

interface AccountOptionCardProps {
  title: string;
  onNavigate: (screen: string) => void;
  screen: string;
  iconName: IconNames;
}

const AccountOptionCard: React.FunctionComponent<AccountOptionCardProps> = ({
  onNavigate,
  screen,
  title,
  iconName,
}) => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <StyledPressable
      className='flex-row justify-between py-3 rounded-lg px-2  items-center active:opacity-75'
      onPress={() => onNavigate(screen)}
    >
      <StyledView className='flex-row'>
        <Icon name={iconName} color={colors.text} />
        <Paragraph className='ml-2' variant='base'>
          {title}
        </Paragraph>
      </StyledView>

      <Icon size={20} name='chevron-thin-right' color={colors.text} />
    </StyledPressable>
  );
};

export default AccountOptionCard;
