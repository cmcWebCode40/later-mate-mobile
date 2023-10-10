import * as Clipboard from 'expo-clipboard';
import React, { useEffect, useState } from 'react';

import { StyledPressable } from 'components/nativewind-wrapper';

interface CopyToClipboardProps {
  value: string;
}

const CopyToClipboard: React.FunctionComponent<CopyToClipboardProps> = ({
  value,
}) => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(value);
    setHasCopied(true);
  };

  useEffect(() => {
    const timerHandler = setTimeout(() => {
      setHasCopied(false);
    }, 1500);
    return () => {
      clearTimeout(timerHandler);
    };
  }, [hasCopied]);

  return (
    <StyledPressable
      onPress={copyToClipboard}
      className='bg-grey-500 p-2 rounded-full active:bg-grey-900'
    >
      {/* <Icon name={hasCopied ? 'check-mark' : 'copy2'} /> */}
    </StyledPressable>
  );
};

export default CopyToClipboard;
