module.exports = {
  clearMocks: true,
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['./src/app/**/*.ts'],
  coverageDirectory: './src/tests/coverage',
  testMatch: ['<rootDir>/src/tests/**/*.ts']
};
