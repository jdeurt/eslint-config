/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        "../index.js",
        "plugin:functional/external-recommended",
        "plugin:functional/recommended",
        "plugin:functional/stylistic",
    ],
};
