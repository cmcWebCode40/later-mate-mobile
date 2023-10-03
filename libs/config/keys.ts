import Constants from 'expo-constants';

const env = Constants?.expoConfig?.extra;

export const Config = {
  easProjectId: env?.eas.projectId,
  serverApiUrl: env?.SERVER_API_URL,
  // modify to use main apps
  oAuthClient: {
    androidId: env?.GOOGLE_OAUTH_ANDROID_CLIENT_ID,
    expoId: env?.GOOGLE_OAUTH_EXPO_CLIENT_ID,
    webId: env?.GOOGLE_OAUTH_WEB_CLIENT_ID,
    iosId: env?.GOOGLE_OAUTH_IOS_CLIENT_ID,
  },
};
