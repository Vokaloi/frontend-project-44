import globals from 'globals'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single', { avoidEscape: true }],
    },
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      'coverage/',
      '.git/',
    ],
  },
]
