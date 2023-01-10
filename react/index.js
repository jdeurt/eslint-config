/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        "../index.js",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],

    rules: {
        "react/jsx-sort-props": "warn",
        "react/prefer-read-only-props": "error",
        "react/prefer-stateless-function": "error",
    },
};
