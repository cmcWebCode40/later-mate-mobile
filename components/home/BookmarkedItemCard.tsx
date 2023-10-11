import { Heading, Icon, Paragraph } from 'components/common';
import { StyledPressable, StyledView } from 'components/nativewind-wrapper';
import { useTheme } from 'libs/hooks';
import React from 'react';

const BookmarkedItemCard: React.FunctionComponent = () => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <StyledPressable className='flex-row items-start p-3 border w-64 border-b active:opacity-75 border-b-green-600  border-gray-950 rounded-lg dark:border-slate-50 '>
      <Icon color={colors.primary[100]} name='bookmark' />
      <StyledView className='space-y-3 ml-1'>
        <Heading className=''>Check tweet</Heading>
        <Paragraph className='text-sm'>label</Paragraph>
        <Paragraph className='font-medium text-xs'>
          12/12/2023
        </Paragraph>
      </StyledView>
    </StyledPressable>
  );
};

export default BookmarkedItemCard;
