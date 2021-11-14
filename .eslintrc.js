module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'space-before-function-paren': 'off',
        'semi': 'off',
        'indent': ['error', 4],
        'no-unused-vars': ['warn'],
    },
};
