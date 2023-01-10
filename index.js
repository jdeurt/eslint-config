/** @type {import('eslint').Linter.Config} */
module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],

    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
        "prettier",
    ],

    rules: {
        "sort-imports": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
    },
};
