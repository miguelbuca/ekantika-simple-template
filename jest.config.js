/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
exports.module = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$':'ts-jest'
  },
  testRegex: ('/__tests__/.*|(\\.|/)(test|spec)\\.ts?$'),
  moduleFileExtensions: ['ts','js','json','node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: 'coverage'
};