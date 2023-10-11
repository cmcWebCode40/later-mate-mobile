import { FlashList } from '@shopify/flash-list';
import React from 'react';

import { StyledView } from 'components/nativewind-wrapper';

import FolderListItem from './FolderListItem';

const FolderList: React.FunctionComponent = () => {
  return (
    <StyledView className='h-56'>
      <FlashList
        data={[1, 2]}
        renderItem={() => <FolderListItem />}
        estimatedItemSize={200}
        ItemSeparatorComponent={() => <StyledView className='mb-5' />}
        showsHorizontalScrollIndicator={false}
      />
    </StyledView>
  );
};

export default FolderList;
