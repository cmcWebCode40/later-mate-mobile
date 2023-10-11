import { useTheme } from 'libs/hooks';
import { getFormattedDate } from 'libs/utils';
import React from 'react';

import { Icon, Paragraph } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

interface NotificationCardProps {
  title: string;
  body: string;
  date: string;
}
const NotificationCard: React.FunctionComponent<NotificationCardProps> = ({
  body,
  date,
  title,
}) => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <StyledView className='flex-row items-center border rounded-lg py-3 border-gray-950 dark:border-slate-50'>
      <StyledView className='rounded-full bg-grey-500 p-4'>
        <Icon color={colors.text} name='notification' />
      </StyledView>
      <StyledView className='ml-4'>
        <Paragraph variant='base' className='mb-0.5 text-pink-600'>
          {title}
        </Paragraph>
        <Paragraph className='text-xs mb-2'>{body}</Paragraph>
        <Paragraph className='text-[10px] text-grey-700'>
          {getFormattedDate(date)}
        </Paragraph>
      </StyledView>
    </StyledView>
  );
};

export default NotificationCard;
