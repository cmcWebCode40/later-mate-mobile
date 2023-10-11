import { useTheme } from 'libs/hooks';
import React, { useRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import {
  StyledPressable,
  StyledTextInput,
  StyledView,
} from 'components/nativewind-wrapper';

import { Icon } from '../icon';

type SearchInput = TextInputProps;
const SearchInput: React.FunctionComponent<SearchInput> = ({
  ...otherTextInputProps
}) => {
  const inputRef = useRef<TextInput | null>(null);
  const {
    theme: { colors },
  } = useTheme();

  const handlePressedInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <StyledPressable
      onPress={handlePressedInput}
      className='py-3 space-x-4 border-none bg-slate-100 dark:bg-transparent dark:border dark:border-gray-100 rounded-md flex-row'
    >
      <StyledView className='ml-4'>
        <Icon name='search1' color={colors.text} size={24} />
      </StyledView>
      <StyledTextInput
        {...otherTextInputProps}
        ref={inputRef}
        placeholder='Search'
        className='mx-4 text-gray-900 dark:text-slate-50'
        autoCapitalize='none'
        placeholderTextColor={colors.text}
      />
      <StyledView />
    </StyledPressable>
  );
};

export default SearchInput;
