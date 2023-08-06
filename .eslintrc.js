module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  overrides: [],
  plugins: ['react', 'import'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'no-shadow': ['warn'],
    'import/prefer-default-export': 'off',
    'import/no-anonymous-default-export': 'off',
    'no-restricted-globals': 'off',
    'array-callback-return': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],
  },
};