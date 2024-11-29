module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    collectCoverage: true,
  coverageReporters: ["json", "html"],
  setupFiles: ['./jest.setup.js']
};