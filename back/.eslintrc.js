module.exports = {
  env: {
    browser: false,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'arrow-parens': 'off',
    camelcase: 'off',
    'no-bitwise': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-unused-vars': 'warn',
    semi: 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
}
