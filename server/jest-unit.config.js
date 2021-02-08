module.exports = {
  clearMocks: true,
  rootDir: './src',
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/app/services/**/*.ts'],
  coverageDirectory: '<rootDir>/tests/coverage/units',
  testMatch: ['<rootDir>/tests/units/**/*.test.ts'],
  verbose: true
};
