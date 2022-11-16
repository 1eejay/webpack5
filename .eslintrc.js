module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['standard', 'prettier', 'plugin:prettier/recommended'],
  rules: {},
}
