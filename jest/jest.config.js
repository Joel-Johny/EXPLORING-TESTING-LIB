// module.exports = {
//   preset: "react-native",
//   setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
//   testEnvironment: 'node',
//   transform: {
//     // "^.+\\.(js|ts|jsx|tsx)$": "@swc/jest",
//     // "^.+\\.(t|j)sx?$": "@swc/jest",
//     "^.+/((@)?react-native)/.+\\.(js|jsx)$": "babel-jest",
//   },

//   transformIgnorePatterns: [
//     "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
//   ],
// };

// module.exports ={
//     preset : 'react-native',
//       transform: {
//     "^.+\\.(js|ts|jsx|tsx)$": "@swc/jest",
//     "^.+\\.(t|j)sx?$": "@swc/jest",
//     "^.+/((@)?react-native)/.+\\.(js|jsx)$": "babel-jest",
//   },
//     transformIgnorePatterns: [
//         '/node_modules/(?!(@react-native|react-native)/).*/'
//     ]
// }

module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  // transform: {
  // "^.+\\.(js|ts|jsx|tsx)$": "@swc/jest",
  // "^.+\\.(js|ts|jsx|tsx)$": "babel-jest",

  // },
  // esbuild-jest
  // transform: {
  //   "^.+\\.tsx?$": [
  //     "esbuild-jest",
  //     {
  //       sourcemap: true,
  //       loaders: {
  //         ".spec.ts": "tsx",
  //       },
  //     },
  //   ],
  // },
  transformIgnorePatterns: [],
  // maxWorkers: "100%",
  // testMatch: ["src/**/*.test.js"]
};
