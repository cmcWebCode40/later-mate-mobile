import { useTheme } from 'libs/hooks';
import React from 'react';
import { Switch } from 'react-native';

import { Paragraph } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

interface PreferenceCardProps {
  title: string;
  onToggle: () => void;
  icon: React.ReactNode;
  isEnabled: boolean;
}

const PreferenceCard: React.FunctionComponent<PreferenceCardProps> = ({
  icon,
  title,
  onToggle,
  isEnabled,
}) => {
  const { theme: { colors } } = useTheme();

  return (
    <StyledView className='flex-row justify-between items-center py-4'>
      <StyledView className='flex-row items-center'>
        {icon}
        <Paragraph variant='sm' className='ml-3'>
          {title}
        </Paragraph>
      </StyledView>
      <Switch
        value={isEnabled}
        onValueChange={onToggle}
        ios_backgroundColor={colors.tabIconDefault}
        thumbColor={isEnabled ? colors.white[100] : colors.tint}
        trackColor={{ false: colors.tint, true: colors.primary[100] }}
      />
    </StyledView>
  );
};

export default PreferenceCard;
