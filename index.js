const fs = require("fs");
const path = require("path");

const tsConfig = fs.existsSync("tsconfig.json")
    ? path.resolve("tsconfig.json")
    : fs.existsSync("types/tsconfig.json")
    ? path.resolve("types/tsconfig.json")
    : undefined;

if (tsConfig === undefined) {
    throw new Error(
        "@jdeurt/eslint-config requires that this project be a Typescript project. Could not find tsconfig.json or types/tsconfig.json!"
    );
}

/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:unicorn/recommended",
        "prettier",
        "plugin:sonarjs/recommended",
    ],

    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: tsConfig,
    },

    rules: {
        // Imports
        "sort-imports": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",

        // Naming
        "unicorn/prevent-abbreviations": "off",

        // Syntax
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "warn",
        curly: ["error", "all"],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/method-signature-style": "warn",
    },
};
