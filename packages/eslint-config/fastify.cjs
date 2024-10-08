module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `node` related come first.
              ['^node(?!:?$)', '^dotenv'],
              // Packages `fastify` related come after.
              ['^fastify', '^@fastify(?!/?$)', '^@?\\w'],
              // Internal packages.
              ['^(@|plugins)(/.*|$)', '^(@|routes)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Other relative imports. Put same-folder imports and `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Stylesheet file imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
}
