// eslint.config.js
const prettierConfig = require('eslint-config-prettier');

module.exports = {
    files: ['**/*.js', '**/*.ts'], // Specify file extensions
    languageOptions: {
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
    plugins: {
        prettier: require('eslint-plugin-prettier'), // Import Prettier plugin
    },
    rules: {
        ...prettierConfig.rules, // Import Prettier rules
        'prettier/prettier': 'error', // Treat Prettier errors as ESLint errors
    },
}
