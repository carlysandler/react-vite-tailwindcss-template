module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Added for Prettier integration
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'], // 'prettier' not needed here as it's included in extends
  rules: {
    // Add or adjust rules here
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Prettier rule
    'prettier/prettier': 'error',
  },
};
