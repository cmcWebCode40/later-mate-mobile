import { ThemeContext } from 'libs/contexts';
import { useContext } from 'react';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
