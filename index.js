const fs = require("fs");
const path = require("path");

const tsConfig = fs.existsSync("tsconfig.json")
    ? path.resolve("tsconfig.json")
    : fs.existsSync("types/tsconfig.json")
    ? path.resolve("types/tsconfig.json")
    : undefined;

/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
        "prettier",
    ],

    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: tsConfig,
    },

    rules: {
        "sort-imports": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "unicorn/prevent-abbreviations": "off",
    },
};
