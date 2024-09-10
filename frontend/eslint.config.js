/** @type {import('eslint').Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: './',
        sourceType: 'module',
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
    extends: [
        // 'standard',
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        eqeqeq: 'error',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        // TypeScript can infer this significantly better than eslint ever can.
        'react/prop-types': 0,
        'react/display-name': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        // This setup is required to avoid a spam of errors when running eslint about React being
        // used before it is defined.
        //
        // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
        'react/react-in-jsx-scope': 'off',
    },
};
