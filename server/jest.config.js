module.exports = {
  clearMocks: true,
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: './src/tests/coverage',
  testMatch: ['<rootDir>/src/tests/**/*.ts']
};
