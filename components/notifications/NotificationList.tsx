import { FlashList } from '@shopify/flash-list';
import { useTheme } from 'libs/hooks';
import React from 'react';
import { FlatList } from 'react-native';

import { EmptyPlaceHolder, Heading, Icon } from 'components/common';
import { StyledView } from 'components/nativewind-wrapper';

import NotificationCard from './NotificationCard';

interface NotificationListProps {
  data?: any[];
  isLoading?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
}

const DEFAUL_SKELETON_DATA = Array.from({ length: 5 }, () => 0);

const NotificationList: React.FunctionComponent<NotificationListProps> = ({
  onRefresh,
  isLoading,
  refreshing,
  data,
}) => {
  const {
    theme: { colors },
  } = useTheme();

  if (isLoading) {
    return (
      <StyledView className='pl-4 w-full h-full mb-4'>
        <FlashList
          onRefresh={onRefresh}
          refreshing={refreshing}
          estimatedItemSize={200}
          data={DEFAUL_SKELETON_DATA}
          showsHorizontalScrollIndicator={false}
          renderItem={() => <Heading>loading...</Heading>}
          ItemSeparatorComponent={() => <StyledView className='mb-8' />}
        />
      </StyledView>
    );
  }

  if (!data) {
    return (
      <StyledView className='flex-1 justify-center'>
        <EmptyPlaceHolder
          icon={
            <Icon size={200} color={colors.text} name='notifications-outline' />
          }
          title='No notifications'
        />
      </StyledView>
    );
  }

  return (
    <StyledView>
      <FlatList
        data={data}
        onRefresh={onRefresh}
        refreshing={refreshing}
        renderItem={({ item }) => (
          <NotificationCard
            date={item.date}
            title={item.title}
            body={item.body}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <StyledView className='mb-6' />}
      />
    </StyledView>
  );
};

export default NotificationList;
