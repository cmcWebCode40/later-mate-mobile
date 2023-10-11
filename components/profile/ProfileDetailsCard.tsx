import React from 'react';
import { Heading, Icon, Paragraph } from 'components/common';
import { StyledPressable, StyledView } from 'components/nativewind-wrapper';
import { useTheme } from 'libs/hooks';

interface ProfileDetailsCardProps {
  title?: string;
  value?: string;
  screen: string;
  editable: boolean;
  onPress: (screen: string) => void;
}

const ProfileDetailsCard: React.FunctionComponent<ProfileDetailsCardProps> = ({
  title,
  value,
  onPress,
  screen,
  editable,
}) => {
  const { theme: { colors } } = useTheme()
  return (
    <StyledPressable>
      {() => (
        <StyledView className='flex-row justify-between  items-center bg-slate-100 dark:bg-transparent dark:border-slate-50 dark:border rounded-lg px-4 py-3'>
          <StyledView>
            <Heading variant='sm'>{title}</Heading>
            <Paragraph className='text-xs mt-1'>{value || ''}</Paragraph>
          </StyledView>
          {editable && (
            <StyledPressable
              onPress={() => onPress(screen)}
              className='p-2 bg-white-100 rounded-full active:opacity-75'
            >
              <Icon name='edit' color={colors.text} />
            </StyledPressable>
          )}
        </StyledView>
      )}
    </StyledPressable>
  );
};

export default ProfileDetailsCard;
