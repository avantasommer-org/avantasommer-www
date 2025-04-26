export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules/**", "out/**", ".next/**"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    extends: [
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier"
    ],
    rules: {}
  }
];
