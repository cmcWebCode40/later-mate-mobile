import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList } from 'react-native';

import { StyledView } from 'components/nativewind-wrapper';
import { ProfileDetailsCard } from 'components/profile';

const AccountInformation: React.FunctionComponent = () => {
  const profile = {
    firstName: 'Micke',
    lastName: 'Oluwa',
    email: 'info@gmail.com',
  };
  const router = useRouter();

  const handleProfileNavigation = (screen: string) => {
    router.push(screen);
  };

  const userNames = [
    {
      editable: true,
      title: 'Your name',
      screen: `profile/user/`,
      value: `${profile?.firstName} ${profile?.lastName}`,
    },
    {
      editable: true,
      title: 'Email address',
      screen: `profile/user/=true`,
      value: profile?.email,
    },
  ];

  return (
    <StyledView className='mt-8 px-5'>
      <FlatList
        data={userNames}
        renderItem={({ item }) => (
          <ProfileDetailsCard
            screen={item.screen}
            editable={item.editable}
            onPress={handleProfileNavigation}
            value={item.value}
            title={item.title}
          />
        )}
        ItemSeparatorComponent={() => <StyledView className='mb-5' />}
      />
    </StyledView>
  );
};

export default AccountInformation;
