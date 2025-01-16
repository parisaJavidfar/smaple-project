// eslint.config.js
const prettierConfig = require("eslint-config-prettier");

module.exports = {
  files: ["**/*.js", "**/*.ts"],
  languageOptions: {
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  plugins: {
    prettier: require("eslint-plugin-prettier"),
  },
  rules: {
    ...prettierConfig.rules,
    "prettier/prettier": "error",
  },
};
