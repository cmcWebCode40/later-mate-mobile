import { Link, Stack } from 'expo-router';
import React from 'react';

import { Heading, Paragraph } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

const NotFoundScreen: React.FunctionComponent = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <StyledView>
        <Heading>This screen doesn&apos;t exist.</Heading>
        <Link href='/'>
          <Paragraph>Go to home screen!</Paragraph>
        </Link>
      </StyledView>
    </>
  );
};

export default NotFoundScreen;
