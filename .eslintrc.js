module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.js',
    },
    sourceType: 'module',
  },
  extends: ['standard', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['html'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
    },
  ],
}
