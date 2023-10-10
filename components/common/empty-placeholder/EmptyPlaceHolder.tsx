import React from 'react';
import { ImageSourcePropType, ViewProps } from 'react-native';

import { StyledImage, StyledView } from 'components/nativewind-wrapper';

import { Heading } from '../heading';
import { Paragraph } from '../paragraph';

interface EmptyPlaceHolderProps extends ViewProps {
  title?: string;
  message?: string;
  imageSize?: number;
  image?: ImageSourcePropType;
  icon?: React.ReactNode;
}

const DEFAULT_IMAGE_SIZE = 250;

const EmptyPlaceHolder: React.FunctionComponent<EmptyPlaceHolderProps> = ({
  image,
  message,
  title,
  icon,
  imageSize = DEFAULT_IMAGE_SIZE,
  ...otherViewProps
}) => {
  return (
    <StyledView
      {...otherViewProps}
      className='flex justify-center items-center'
    >
      {icon ? (
        icon
      ) : (
        <>
          {image && (
            <StyledImage
              style={{
                width: imageSize,
                height: imageSize,
              }}
              source={image}
            />
          )}
        </>
      )}
      <Heading className='text-xl font-medium mb-3'>
        {title || 'No search results found'}
      </Heading>
      <Paragraph variant='sm'>
        {message || 'Try searching for something else.'}
      </Paragraph>
    </StyledView>
  );
};

export default EmptyPlaceHolder;
