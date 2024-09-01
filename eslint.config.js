import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import sonarjs from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default tseslint.config(
  {
    ignores: ["**/dist/**"],
  },
  eslintConfigPrettier,
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: "tsconfig.json",
        sourceType: "module",
        createDefaultProgram: false,
      },
    },
  },
  {
    ...sonarjs.configs.recommended,
    plugins: {
      sonarjs,
    },
  },
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      //
      "@typescript-eslint/no-unsafe-argument": "off",
    },
  },
);
