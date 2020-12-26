module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  modulePaths: [
    "<rootDir>"
  ],
  setupFilesAfterEnv: [],
  modulePathIgnorePatterns: ["<rootDir>/example/", "<rootDir>/dist/"],
}
