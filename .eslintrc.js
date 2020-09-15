module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort"],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "import/default": "off",
    "import/order": "off",
    "no-console": "off",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "simple-import-sort/sort": "error",
    "sort-imports": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    {
      files: "*.js",
      rules: {
        "import/order": ["error", { "newlines-between": "always" }],
        "simple-import-sort/sort": "off",
      },
    },
  ],
};
