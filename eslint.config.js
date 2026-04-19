import globals from 'globals';

export default [
  {
    // Какие файлы проверяем
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      // Определяем глобальные переменные для Node.js
      globals: {
        ...globals.node,
        // Добавляем глобальные переменные для вашего проекта
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      // Базовые рекомендуемые правила
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off', // В учебном проекте console разрешен
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
    },
  },
  {
    // Игнорируем ненужные директории и файлы
    ignores: [
      'node_modules/',
      'dist/',
      'coverage/',
      '.git/',
    ],
  },
];
