import React from 'react';

import { StyledView } from 'components/nativewind-wrapper';
import { NotificationList } from 'components/notifications';

const NotificationScreen: React.FunctionComponent = () => {
  const notifications = [
    {
      title: 'Check scholarship tweet',
      body: 'https://www.netflix.com/ng',
      date: new Date(),
    },
    {
      title: 'Check scholarship tweet',
      body: 'https://www.netflix.com/ng',
      date: new Date(),
    },
    {
      title: 'Check scholarship tweet',
      body: 'https://www.netflix.com/ng',
      date: new Date(),
    },
    {
      title: 'Check scholarship tweet',
      body: 'https://www.netflix.com/ng',
      date: new Date(),
    },
    {
      title: 'Check scholarship tweet',
      body: 'https://www.netflix.com/ng',
      date: new Date(),
    },
  ];

  return (
    <StyledView className='flex-1 mt-9 px-5'>
      <NotificationList data={notifications} />
    </StyledView>
  );
};

export default NotificationScreen;
