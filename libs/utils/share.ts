import { errorHandler } from 'libs/config';
import { Alert, Share } from 'react-native';

export const shareInfo = async (message: string) => {
  try {
    await Share.share({
      message,
    });
  } catch (error) {
    const errorMessage = errorHandler(error);
    Alert.alert(errorMessage);
  }
};
