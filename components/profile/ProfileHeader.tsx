import { useRouter } from 'expo-router';
import React from 'react';

import AvatarImage from 'assets/images/user_avatar.png';
import { Heading, Paragraph } from 'components/common';
import {
  StyledImage,
  StyledPressable,
  StyledView,
} from 'components/nativewind-wrapper';

interface ProfileHeaderProps {
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
}

const ProfileHeader: React.FunctionComponent<ProfileHeaderProps> = ({
  firstName,
  lastName,
  email,
}) => {
  const router = useRouter();
  const imageSource = AvatarImage;

  const handleEditAvatar = () => {
    router.push(`profile/user/avatar?email=${email}`);
  };

  return (
    <StyledView>
      <StyledView className='flex-row'>
        <StyledPressable
          onPress={handleEditAvatar}
          className='active:opacity-75'
        >
          <StyledImage
            source={imageSource}
            className='h-24 w-24 rounded-full'
          />
        </StyledPressable>
        <StyledView className='ml-4'>
          <StyledView className='flex-row space-x-2'>
            <Heading variant='md' className='mb-3'>
              {firstName}
            </Heading>
            <Heading variant='md' className='mb-3'>
              {lastName}
            </Heading>
          </StyledView>
          <Paragraph variant='sm'>{email}</Paragraph>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default ProfileHeader;
