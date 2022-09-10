module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  ignorePatterns: [
    // Generated
    "/dist/",

    // Inverse matches (DO lint these)
    "!/.eslintrc.js",
    "!/.posthtmlrc.js",
    "!/.prettierrc.js",
    "!/.stylelintrc.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "json"],
  rules: {
    // Keep imports organized
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
        "newlines-between": "always",
        warnOnUnassignedImports: true,
      },
    ],
  },
  overrides: [
    // Allow devDependencies to be imported in certain configuration files
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
