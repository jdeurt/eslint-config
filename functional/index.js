/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        "../index.js",
        "plugin:functional/external-recommended",
        "plugin:functional/recommended",
        "plugin:functional/stylistic",
    ],

    plugins: ["functional"],

    rules: {
        "functional/no-expression-statement": ["error", { ignoreVoid: true }],
    },
};
