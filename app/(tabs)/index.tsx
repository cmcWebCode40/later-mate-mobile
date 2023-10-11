import { useTheme } from 'libs/hooks';
import React from 'react';

import { Button, Heading, Icon } from 'components/common';
import { SearchInput } from 'components/common/searchInput';
import { FolderList } from 'components/folders';
import { BookmarkList, Header } from 'components/home';
import { ScreenLayout } from 'components/layout';
import { StyledView } from 'components/nativewind-wrapper';

const HomeScreen: React.FunctionComponent = () => {
  const {
    theme: { colors },
  } = useTheme();
  return (
    <ScreenLayout className='px-0 flex-1 justify-between'>
      <StyledView>
        <StyledView className='px-5'>
          <Header />
        </StyledView>
        <StyledView className='mt-8 px-5'>
          <SearchInput />
        </StyledView>
        <StyledView className='pl-5 w-full mt-8'>
          <Heading className='mb-4'>Upcoming Mates ✨</Heading>
          <BookmarkList />
        </StyledView>
        <StyledView className='px-5 mt-8'>
          <StyledView className='flex-row justify-between items-center'>
            <Heading className='mb-4'>Your Folders ✨</Heading>
            <Button
              variant='text'
              textStyle='text-pink-600 underline'
              className='p-0'
            >
              see all
            </Button>
          </StyledView>
          <FolderList />
        </StyledView>
      </StyledView>
      <StyledView className='flex-row justify-between px-5'>
        <StyledView className='w-[48%]'>
          <Button
            starIcon={<Icon name='camera-outline' color={colors.white[100]} />}
          >
            Scan QR
          </Button>
        </StyledView>
        <StyledView className='w-[48%]'>
          <Button
            variant='outlined'
            starIcon={<Icon name='add' color={colors.black[100]} />}
          >
            New Bookmark
          </Button>
        </StyledView>
      </StyledView>
    </ScreenLayout>
  );
};

export default HomeScreen;
