module.exports = {
  clearMocks: true,
  rootDir: './src',
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/app/controllers/**/*.ts'],
  coverageDirectory: '<rootDir>/tests/coverage',
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  verbose: true
};
