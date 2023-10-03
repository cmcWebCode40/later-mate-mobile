import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const AUTH_TOKEN = 'user_access_token';

export const USER_ONBOARDED = 'user_onboarded';

export const PREVIOUS_USER_SCREEN = 'previous_user_screen';

export const saveToSecureStore = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getFromSecureStore = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

export const deleteFromSecureStore = async (key: string) => {
  return await SecureStore.deleteItemAsync(key);
};

export const saveToAsyncStore = async <T>(key: string, value: T) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

export const deleteFromAsyncStore = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export const clearAsyncStore = async () => {
  await AsyncStorage.clear();
};

export const getFromAsyncStore = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
