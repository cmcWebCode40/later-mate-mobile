import React from 'react';

import { Button } from 'components/common';
import { IconNames } from 'components/common/icon/Icon';
import { ScreenLayout } from 'components/layout';
import { StyledView } from 'components/nativewind-wrapper';
import { AccountOptionList, ProfileHeader } from 'components/profile';

const ProfileScreen: React.FunctionComponent = () => {
  return (
    <ScreenLayout className='justify-between'>
      <StyledView>
        <ProfileHeader
          email='info@gmail.com'
          firstName='Michael '
          lastName='C.'
        />
        <StyledView className='mt-4'>
          <AccountOptionList data={GENERAL_OPTIONS} />
        </StyledView>
      </StyledView>
      <StyledView className='mb-1'>
        <Button className='' variant='outlined'>
          Logout
        </Button>
      </StyledView>
    </ScreenLayout>
  );
};

export default ProfileScreen;

type GeneralOptions = {
  title: string;
  screen: string;
  icon: IconNames;
};

const GENERAL_OPTIONS: GeneralOptions[] = [
  {
    title: 'My Account Info',
    screen: 'account/information',
    icon: 'user',
  },
  {
    title: 'Settings',
    screen: 'settings',
    icon: 'settings-outline',
  },
  {
    title: 'Notifications',
    screen: 'notifications',
    icon: 'notifications-outline',
  },
  {
    title: 'Share app with friends',
    screen: 'share',
    icon: 'share-outline',
  },
  {
    title: 'Rate app',
    screen: 'account/notifications',
    icon: 'star-outline',
  },
  {
    title: 'Privacy Policy',
    screen: 'account/terms-conditions',
    icon: 'book-outline',
  },
];
