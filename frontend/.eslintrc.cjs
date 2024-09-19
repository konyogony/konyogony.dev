/** @type {import('eslint').Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2020: true,
    },
    plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint', 'mdx'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:mdx/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        eqeqeq: 'error',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/prop-types': 'off', // TypeScript provides better type checking.
        'react/display-name': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-use-before-define': 'off', // Disable base rule
        '@typescript-eslint/no-use-before-define': ['warn'], // Enable TypeScript specific rule
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
        'react/no-unknown-property': [
            'error',
            { ignore: ['css'] }, // Add any custom JSX attributes here.
        ],
        'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    },
};
