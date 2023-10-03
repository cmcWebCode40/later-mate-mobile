import 'dotenv/config';

let config = {
  SERVER_API_URL: process.env.SERVER_API_URL,
  EAS_PROJECT_ID: process.env.EAS_PROJECT_ID,
  GOOGLE_SERVICES_FILE: process.env.GOOGLE_SERVICES_FILE,
  GOOGLE_OAUTH_WEB_CLIENT_ID:process.env.GOOGLE_OAUTH_WEB_CLIENT_ID,
  GOOGLE_OAUTH_IOS_CLIENT_ID:process.env.GOOGLE_OAUTH_IOS_CLIENT_ID,
  GOOGLE_OAUTH_ANDROID_CLIENT_ID:process.env.GOOGLE_OAUTH_ANDROID_CLIENT_ID,
  GOOGLE_OAUTH_EXPO_CLIENT_ID:process.env.GOOGLE_OAUTH_EXPO_CLIENT_ID,
  GOOGLE_IOS_CF_BUNDLE_URL_SCHEMES: process.env.GOOGLE_IOS_CF_BUNDLE_URL_SCHEMES,
};

//TODO: switch .env base on current environment
if (process.env.APP_ENV === 'production') {
  config.SERVER_API_URL = process.env.SERVER_API_URL;
} else if (process.env.APP_ENV === 'staging') {
  config.SERVER_API_URL = process.env.SERVER_API_URL;
}

export default {
  expo: {
    name: 'later-mate',
    slug: 'later-mate',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    userInterfaceStyle: 'light',
    //TODO:  modify to match app bundle id in low cases 
    scheme: 'com.cmcwebcode.latermate',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#fffffb',
    },
    assetBundlePatterns: ['**/*'],
    androidStatusBar: {
      backgroundColor: "#fffffb",
      translucent: false
    },
    ios: {
      bundleIdentifier: 'com.cmcwebcode.latermate',
      buildNumber: '10',
      supportsTablet: true,
      usesAppleSignIn: true,
      associatedDomains: ["applinks:latermate.com"],
      userInterfaceStyle: 'light',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#D93621',
      },
      package: 'com.cmcwebcode.latermate',

      intentFilters: [
        {
          action: "VIEW",
          autoVerify: true,
          data: [
            {
              scheme: "https",
              host: "*.myapp.io",
              pathPrefix: "/records"
            }
          ],
          category: ["BROWSABLE", "DEFAULT"]
        }
      ],
      //TODO: update with live app google-services file for Push-N
      // googleServicesFile: './google-services.json'
    },
    web: {
      bundler: 'metro',
      favicon: './assets/images/favicon.png',
    },
    extra: {
      ...config,
      eas: {
        projectId: config.EAS_PROJECT_ID,
      },
    },
    updates: {
      url: `https://u.expo.dev/${config.EAS_PROJECT_ID}`
    },
    runtimeVersion: {
      "policy": "appVersion"
    },
    plugins: [
      "expo-apple-authentication",
      ["expo-router", 
      { origin: "https://latermate.com" }
    ],
  ],
  },
};
