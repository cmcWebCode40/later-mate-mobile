import { Theme } from 'libs/constants';
import { useTheme, useThemedStyles } from 'libs/hooks';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Icon, Paragraph } from 'components/common';
import { StyledPressable } from 'components/nativewind-wrapper';

const FolderListItem: React.FunctionComponent = () => {
  const {
    theme: { colors },
  } = useTheme();
  const style = useThemedStyles(baseStyle);
  return (
    <StyledPressable
      style={style.boxShadow}
      className='flex-row bg-slate-50 px-3 py-5 active:opacity-75 rounded-lg dark:bg-transparent dark:border dark:border-slate-50'
    >
      <Icon color={colors.text} name='md-folder-outline' />
      <Paragraph variant='base' className='ml-3'>
        Facebook
      </Paragraph>
    </StyledPressable>
  );
};

export default FolderListItem;

const baseStyle = ({ colors }: Theme) => {
  return StyleSheet.create({
    boxShadow: {
      shadowColor: colors.black[100],
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.16,
      shadowRadius: 1.51,
      elevation: 2,
    },
  });
};
