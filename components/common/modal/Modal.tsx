import React from 'react';
import {
  Modal as UIModal,
  ModalProps as UIModalProps,
  ViewStyle,
} from 'react-native';

import { StyledView } from 'components/nativewind-wrapper';

type ModalProps = {
  title?: string;
  visible?: boolean;
  onClose?: () => void;
  contentClassName?: string;
  contentStyles?: ViewStyle;
  children: React.ReactNode;
} & UIModalProps;

const Modal = ({
  onClose,
  visible,
  children,
  title,
  contentStyles,
  transparent = true,
  contentClassName,
  animationType = 'slide',
  ...rest
}: ModalProps) => {
  return (
    <UIModal
      {...rest}
      transparent={transparent}
      visible={visible}
      animationType={animationType}
      onRequestClose={onClose}
    >
      <StyledView className='flex-1 my-auto relative bg-black-100'>
        <StyledView
          className={`rounded-xl  bg-white-100 ${contentClassName}`}
          style={[contentStyles]}
        >
          {title && <StyledView className='h-[0.4px] bg-grey-400' />}
          <StyledView>{children}</StyledView>
        </StyledView>
      </StyledView>
    </UIModal>
  );
};

export default Modal;
