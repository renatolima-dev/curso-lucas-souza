// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "@typescript-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import { fixupConfigRules } from "@eslint/compat";

// export default [
//   { languageOptions: { globals: globals.browser, parser: tsParser } },
//   pluginJs.configs.recommended,
//   tseslint.configs.recommended,
//   ...fixupConfigRules(pluginReactConfig),
// ];

// eslint.config.js
// eslint.config.js
// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      react: reactPlugin,
      reactHooks: reactHooks,
      '@typescript-eslint': tsPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      'indent': ['error', 2],  // Define a indentação de 2 espaços para JavaScript e TypeScript
      'react/jsx-indent': ['error', 2],  // Define a indentação de 2 espaços para JSX
      'react/jsx-indent-props': ['error', 2],  // Define a indentação de 2 espaços para as props JSX
      '@typescript-eslint/indent': ['error', 2],  // Define a indentação de 2 espaços para TypeScript
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
    settings: {
      react: {
        version: '18.2',
      },
    },
    ignores: ['dist', 'eslint.config.js'],
  }
];


