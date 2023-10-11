import { FlashList } from '@shopify/flash-list'
import { StyledView } from 'components/nativewind-wrapper'
import React from 'react'
import BookmarkedItemCard from './BookmarkedItemCard'

const BookmarkList: React.FunctionComponent = () => {
  return (
    <FlashList
      data={[1, 2, 3, 4, 5, 6, 7]}
      horizontal={true}
      ItemSeparatorComponent={() => <StyledView className='mr-4' />}
      renderItem={() => <BookmarkedItemCard />}
      estimatedItemSize={200}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default BookmarkList
