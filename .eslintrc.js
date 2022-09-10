module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  ignorePatterns: [
    // Ignore generated files.
    "dist/",

    // Use inverse matching (!) to NOT ignore certain files. By default, ESLint
    // ignores hidden files, but some hidden files can and should be linted.
    "!.eslintrc.js",
    "!.posthtmlrc.js",
    "!.prettierrc.js",
    "!.stylelintrc.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // Keep imports as well-organized as possible.
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always-and-inside-groups",
        warnOnUnassignedImports: true,
      },
    ],
  },
  overrides: [
    // Allow devDependencies to be imported in certain configuration files.
    {
      files: [".posthtmlrc.js", "vite.{js,ts}"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
  ],
};
