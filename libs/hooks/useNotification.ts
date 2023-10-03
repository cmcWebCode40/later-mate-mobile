import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { AndroidNotificationPriority, ExpoPushToken } from 'expo-notifications';
import { Config } from 'libs/config';
import { useEffect, useRef, useState } from 'react';
import { Alert, Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    priority: AndroidNotificationPriority.HIGH,
  }),
});

const registerForPushNotificationsAsync = async () => {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Config.easProjectId,
    });
  } else {
    Alert.alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      // lightColor: colors.primary[100],
    });
  }

  return token;
};

const useNotification = () => {
  const [pushToken, setPushToken] = useState<ExpoPushToken | undefined>(
    undefined
  );
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    if (Device.isDevice) {
      registerForPushNotificationsAsync().then((token) => setPushToken(token));
    }

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification as Notifications.Notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // TODO: implement callback logic when notification snackbar is pressed.

        return response.notification.request.content.body;
      });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return {
    pushToken,
    notification,
  };
};

export default useNotification;
