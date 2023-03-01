module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', '!scr/**/*.spec.tsx'],
  coverageReporters: ['lcov'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@assets(.*)$': '<rootDir>/assets$1'
  },
  setupFiles: ['<rootDir>/src/tests/setup.js']
}
