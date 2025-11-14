export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json'],
    rootDir: 'src',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
        '^.+\\.ts$': [
            'ts-jest',
            { useESM: true }
        ]
    },
    extensionsToTreatAsEsm: ['.ts'],
    collectCoverageFrom: ['**/*.ts'],
    coverageDirectory: '../coverage',
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
        "^@tasks/(.*)$": "<rootDir>/modules/tasks/$1"
    }
};
