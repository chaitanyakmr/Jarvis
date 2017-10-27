module.exports = {
    env: {
      browser: true,
      jasmine: true,
      jest: true,
    },
    extends: ['airbnb-base', 'plugin:import/errors', 'plugin:import/warnings'],
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
    },
    plugins: ['react'],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.js',
            '**/test-setup.js',
            '**/*.spec.js',
            '**/webpack-*.config.js',
          ],
        },
      ],
      'no-console': 0,
      'import/prefer-default-export': 0,
      'linebreak-style': 0,
      'new-cap': 0,
      'no-use-before-define': [
        'error',
        {
          classes: true,
          functions: false,
        },
      ],
      'prefer-const': 2,
      'react/forbid-prop-types': [
        2,
        {
          forbid: ['any', 'array'],
        },
      ],
      'react/no-children-prop': 2,
      'react/no-danger-with-children': 2,
      'react/no-deprecated': 2,
      'react/no-did-mount-set-state': 2,
      'react/no-did-update-set-state': 2,
      'react/no-direct-mutation-state': 2,
      'react/no-find-dom-node': 2,
      'react/no-multi-comp': [
        2,
        {
          ignoreStateless: true,
        },
      ],
      'no-case-declarations': 'off',
      'arrow-body-style': 0,
      'react/no-render-return-value': 2,
      'react/no-string-refs': 2,
      'react/no-unknown-property': 2,
      'react/prefer-es6-class': [2, 'always'],
      'react/prop-types': 2,
      'react/require-render-return': 2,
      'react/sort-comp': [
        2,
        {
          order: ['static-methods', 'lifecycle', 'render', 'everything-else'],
        },
      ],
      'react/sort-prop-types': 2,
      'react/style-prop-object': 2,
    },
  };
  