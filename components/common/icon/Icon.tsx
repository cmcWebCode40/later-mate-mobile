import React from 'react';
import { Iconify } from 'react-native-iconify';
import { SvgProps } from 'react-native-svg';

const validIconNames: Record<IconName, string> = {
  account: 'prime:chevron-down',
  // 'pepicons:internet',
  // 'akar-icons:twitter-fill',
  // 'mi:notification',
  // 'ant-design:user-outlined',
  // 'ic:outline-home',
  // 'ic:outline-visibility-off',
  // 'ic:outline-visibility',
  // 'radix-icons:chevron-right',
  // 'formkit:arrowleft',
};

export type IconName =
  | 'account'
// | 'pepicons:internet'
// | 'akar-icons:twitter-fill'
// | 'mi:notification'
// | 'ant-design:user-outlined'
// | 'ic:outline-home'
// | 'ic:outline-visibility-off'
// | 'ic:outline-visibility'
// | 'radix-icons:chevron-right'
// | 'formkit:arrowleft';

type IconProps = {
  name: IconName;
  size?: number;
} & SvgProps;

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  size = 24,
  ...otherProps
}) => {
  if (!name || !Object.keys(validIconNames).includes(name)) {
    throw new Error(`Icon with name (${name}) is not supported`);
  }

  console.log(validIconNames.account);

  if (!validIconNames[name]) {
    return null
  }

  return <Iconify size={size} icon={'ic:outline-home'} {...otherProps} />;
};

export default Icon;
