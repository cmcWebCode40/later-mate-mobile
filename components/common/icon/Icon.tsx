import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { SvgProps } from 'react-native-svg';

import GoogleIcon from './GoogleIcon';

const antDesignIcons = [
  'home',
  'link',
  'user',
  'apple1',
  'notification',
  'edit',
  'search1',
];
const materialIcons = ['visibility', 'visibility-off', 'email'];
const socialsIcon = ['google'];
const entyposIcon = ['chevron-thin-right'];
const ionIcons = [
  'star-outline',
  'settings-outline',
  'notifications-outline',
  'share-outline',
  'book-outline',
  'bookmark',
  'add',
  'camera-outline',
  'md-folder-outline',
  'arrow-back-sharp',
];

type AntDesignIconName =
  | 'home'
  | 'link'
  | 'user'
  | 'apple1'
  | 'notification'
  | 'edit'
  | 'search1';
type MaterialIconName = 'visibility' | 'visibility-off' | 'email';
type SocialsIconName = 'google';
type EntypoIconName = 'chevron-thin-right';
type IonIconNames =
  | 'star-outline'
  | 'settings-outline'
  | 'notifications-outline'
  | 'share-outline'
  | 'book-outline'
  | 'arrow-back-sharp'
  | 'add'
  | 'md-folder-outline'
  | 'camera-outline'
  | 'bookmark';

export type IconNames =
  | AntDesignIconName
  | MaterialIconName
  | SocialsIconName
  | EntypoIconName
  | IonIconNames;

type IconProps = {
  name: IconNames;
  size?: number;
} & SvgProps;

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  size = 24,
  ...otherProps
}) => {
  if (antDesignIcons.includes(name)) {
    return (
      <AntDesign size={size} name={name as AntDesignIconName} {...otherProps} />
    );
  }

  if (materialIcons.includes(name)) {
    return (
      <MaterialIcons
        size={size}
        name={name as MaterialIconName}
        {...otherProps}
      />
    );
  }

  if (entyposIcon.includes(name)) {
    return <Entypo size={size} name={name as EntypoIconName} {...otherProps} />;
  }

  if (materialIcons.includes(name)) {
    return (
      <MaterialIcons
        size={size}
        name={name as MaterialIconName}
        {...otherProps}
      />
    );
  }

  if (ionIcons.includes(name)) {
    return <Ionicons size={size} name={name as IonIconNames} {...otherProps} />;
  }

  if (socialsIcon.includes(name)) {
    const socialIconTypes: any = {
      google: <GoogleIcon {...otherProps} size={size} />,
    };
    return socialIconTypes[name];
  }

  throw new Error(`Icon with name (${name}) is not supported`);
};

export default Icon;
