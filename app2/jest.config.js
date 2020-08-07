module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: [
    "../node_modules/@testing-library/jest-dom/dist/index.js",
  ],
};
