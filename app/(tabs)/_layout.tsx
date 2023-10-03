import { Heading, Icon } from 'components/common';
import { Tabs } from 'expo-router';
import React from 'react';


type TabIconArgs = {
  focused: boolean;
};

const TabsLayout: React.FunctionComponent = () => {
  // const { colors } = useTheme();

  const tabsList = [
    {
      name: 'index',
      icon: ({ focused }: TabIconArgs) => (
        <Icon
          name='account'
        // color={focused ? colors.primary[100] : colors.grey[400]}
        />
      ),
    },
    {
      name: 'links',
      icon: ({ focused }: TabIconArgs) => <Icon name='account' />,
    },
    {
      name: 'profile',
      icon: ({ focused }: TabIconArgs) => (
        <Icon
          name='account'
        // color={focused ? colors.primary[100] : colors.grey[400]}
        />
      ),
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {tabsList.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            tabBarLabel: ({ focused }) => (
              <Heading
                className={`${focused
                  ? 'text-primary-100 opacity-1 '
                  : 'text-black-500 opacity-50'
                  } capitalize font-medium text-sm `}
                variant={`sm`}
              >
                {item.name}
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
