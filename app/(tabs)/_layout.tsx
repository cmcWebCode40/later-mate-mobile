import { Tabs } from 'expo-router';
import { useTheme } from 'libs/hooks';
import React from 'react';

import { Heading, Icon } from 'components/common';

type TabIconArgs = {
  focused: boolean;
};

const TabsLayout: React.FunctionComponent = () => {
  const {
    theme: { colors },
  } = useTheme();

  const getTabColor = (focused: boolean) => {
    return focused ? colors.primary[100] : colors.text;
  };

  const tabsList = [
    {
      name: 'index',
      label: 'Home',
      icon: ({ focused }: TabIconArgs) => (
        <Icon name='home' color={getTabColor(focused)} />
      ),
    },
    {
      name: 'links',
      label: 'Link',
      icon: ({ focused }: TabIconArgs) => (
        <Icon color={getTabColor(focused)} name='link' />
      ),
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: ({ focused }: TabIconArgs) => (
        <Icon name='user' color={getTabColor(focused)} />
      ),
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          height: '10%',
        },
      }}
    >
      {tabsList.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            tabBarLabel: ({ focused }) => (
              <Heading
                className={`${
                  focused
                    ? 'text-pink-600'
                    : 'text-slate-950 dark:text-slate-50'
                } capitalize font-semibold text-sm `}
                variant={`sm`}
              >
                {item.label}
              </Heading>
            ),
            tabBarIcon: item.icon,
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
