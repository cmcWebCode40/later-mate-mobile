import { Theme } from 'libs/constants';
import { useThemedStyles } from 'libs/hooks';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Heading } from 'components/common';
import {
  StyledPressable,
  StyledTextInput,
  StyledView,
} from 'components/nativewind-wrapper';

type OtpInputProps = {
  maximumLength: number;
  onPinReady?: (arg1: boolean) => void;
  code: string;
  onSetCode: Dispatch<SetStateAction<string>>;
};
const OtpInput: React.FunctionComponent<OtpInputProps> = ({
  maximumLength,
  onPinReady,
  code,
  onSetCode,
}) => {
  const style = useThemedStyles(styles);
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef<TextInput | null>(null);
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    if (onPinReady) {
      // update pin ready status
      onPinReady(code.length === maximumLength);
      // clean up function
      return () => {
        onPinReady(false);
      };
    }
  }, [code, maximumLength, onPinReady]);

  const boxDigit = (_arrayItem: number, index: number) => {
    const emptyInput = '';
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const isFocused = isInputBoxFocused && isValueFocused;

    return (
      <View
        style={[style.boxInput, isFocused ? style.focusedBoxInput : {}]}
        key={index}
      >
        <Heading style={[style.boxText, isFocused ? style.boxTextFocused : {}]}>
          {digit}
        </Heading>
      </View>
    );
  };

  return (
    <StyledView className='justify-center items-center'>
      <StyledPressable
        className='justify-evenly flex-row w-[80%] space-x-4'
        onPress={handleOnPress}
      >
        {boxArray.map(boxDigit)}
      </StyledPressable>
      <StyledTextInput
        value={code}
        className='absolute opacity-0 rounded-full border border-white-200 p-4'
        keyboardType='number-pad'
        onChangeText={onSetCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
      />
    </StyledView>
  );
};

export default OtpInput;

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    focusedBoxInput: {
      borderColor: theme.colors.primary[100],
    },
    boxInput: {
      borderColor: theme.colors.tabIconDefault,
      borderWidth: 1,
      borderRadius: 40,
      height: 58,
      width: 58,
      minWidth: 50,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxText: {
      fontSize: 18,
    },
    boxTextFocused: {
      color: theme.colors.tabIconDefault,
    },
    boxContainer: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });
};
