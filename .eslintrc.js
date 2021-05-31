module.exports = {
    env: {
        node: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {},
};
