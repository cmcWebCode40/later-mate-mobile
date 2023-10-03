import { Link, Stack } from 'expo-router';

import { Heading, Paragraph } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

const NotFoundScreen: React.FunctionComponent = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <StyledView>
        <Heading>This screen doesn't exist.</Heading>
        <Link href='/'>
          <Paragraph>Go to home screen!</Paragraph>
        </Link>
      </StyledView>
    </>
  );
}

export default NotFoundScreen