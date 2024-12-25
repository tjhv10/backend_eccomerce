module.exports = {
  env: { node: true },
  extends: ['./index', 'plugin:node/recommended'],
  rules: {
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
    'node/no-missing-import': [
      'error',
      {
        allowModules: [],
        tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
        moduleDirectory: ['node_modules/', 'src/'],
      },
    },
  },
};
