module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:jest/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  settings: {
    jest: {
      version: 28
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off", // Not needed for React 17+
    "react/prop-types": "off", // If you're using TypeScript
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies,
    "react/no-unknown-property": "off",

    'import/order': [
      1,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
          'parent',
          'sibling',
          'unknown'
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal'
          }
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
  },
  ignorePatterns: [
    'dist',
    'docs',
    '.eslintrc.js'
  ]
}
