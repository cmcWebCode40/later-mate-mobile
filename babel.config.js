module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel", [
      "module-resolver",
      {
        alias: {
          components: "./components",
          libs: "./libs",
          assets: "./assets",
          app: "./app",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ], 'react-native-iconify/plugin', require.resolve("expo-router/babel")],
  };
};
