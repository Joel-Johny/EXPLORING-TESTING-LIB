module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // env: {
    //   test: {
    //     presets: ["@babel/preset-expo"], // Add necessary presets for testing
    //     ignore: [
    //       "**/node_modules/*" ,// Ignore all other node_modules,
    //       "!**/node_modules/(react-native|@react-native)/*", // Only transform node_modules/react-native

    //     ]
    //   }
    // }
  
  };
};
