const tintColorLight = '#DB2777';
const tintColorDark = '#fff';

export const USER_COLOR_PREFERENCE = 'user_color_preference';

const commonColors = {
  white: {
    100: '#FFFFFF',
    200: '#EFEFEF',
    300: 'transparent',
  },
  black: {
    100: '#000',
    200: 'rgba(0,0,0, 0.05)',
  },
  primary: {
    100: '#DB2777',
  },
  red: {
    600: '#dc2626',
  },
};

export const colors = {
  light: {
    text: '#020617',
    background: '#f8fafc',
    tint: tintColorLight,
    tabIconDefault: '#f3f3f3',
    tabIconSelected: tintColorLight,
    ...commonColors,
  },
  dark: {
    text: '#f8fafc',
    background: '#030712',
    tint: tintColorDark,
    tabIconDefault: '#f3f3f3',
    tabIconSelected: tintColorDark,
    ...commonColors,
  },
};

export const appTheme = {
  colors: colors.light,
};
export type Theme = typeof appTheme;
