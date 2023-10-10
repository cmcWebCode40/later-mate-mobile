import { Theme } from 'libs/constants';
import { useThemedStyles } from 'libs/hooks';
import React from 'react';
import { StyleSheet } from 'react-native';

import { StyledPressable, StyledView } from 'components/nativewind-wrapper';

import { Heading } from '../heading';

interface SegmentProps {
  items: string[];
  tab: number;
  onSelect: (tab: number) => void;
}

const Segment: React.FunctionComponent<SegmentProps> = ({
  items,
  tab,
  onSelect,
}) => {
  const style = useThemedStyles(styles);
  return (
    <StyledView className='flex-row justify-between items-center  py-1 px-1 bg-grey-500 rounded-full'>
      {items.map((item, index) => (
        <StyledPressable
          key={item}
          onTouchStart={() => onSelect(index)}
          onPress={() => onSelect(index)}
          className={`flex-1 py-3 ${
            index !== tab ? '' : 'flex-1 bg-black-200 rounded-full'
          }`}
          style={index === tab && style.boxShadowStyle}
        >
          <Heading
            variant='sm'
            className={`text-center ${
              index !== tab
                ? 'text-grey-700 font-semibold'
                : 'text-primary-100 font-semibold'
            }`}
          >
            {item}
          </Heading>
        </StyledPressable>
      ))}
    </StyledView>
  );
};

export default Segment;

const styles = ({ colors }: Theme) => {
  return StyleSheet.create({
    boxShadowStyle: {
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 1,
      shadowRadius: 30,
      shadowColor: colors.black[200],
      backgroundColor: colors.white[100],
      elevation: 4,
    },
  });
};
