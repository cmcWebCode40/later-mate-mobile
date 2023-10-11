import { router } from 'expo-router';
import { shareInfo } from 'libs/utils';
import React from 'react';

import { IconNames } from 'components/common/icon/Icon';
import { StyledView } from 'components/nativewind-wrapper';

import AccountOptionCard from './AccountOptionCard';

type AccountData = {
  title: string;
  screen: string;
  icon: IconNames;
};
interface AccountOptionListProps {
  data: AccountData[];
}

const AccountOptionList: React.FunctionComponent<AccountOptionListProps> = ({
  data,
}) => {
  const handleShareLink = () => {
    shareInfo('https://latermate.come');
  };

  const handleNavigate = (screen: string) => {
    if (screen === 'share') {
      handleShareLink();
      return;
    }
    router.push(screen);
  };
  return (
    <StyledView>
      <StyledView className='mb-8' />
      {data.map((item) => (
        <StyledView className='mb-4' key={item.title}>
          <AccountOptionCard
            onNavigate={handleNavigate}
            screen={item.screen}
            title={item.title}
            iconName={item.icon}
          />
        </StyledView>
      ))}
    </StyledView>
  );
};

export default AccountOptionList;
