import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "eslint:recommended", // Reglas básicas recomendadas por ESLint
    "plugin:@typescript-eslint/recommended", // Reglas específicas de TypeScript
    "next/core-web-vitals" // Reglas de Next.js
  ),
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"], // Ajusta según tus necesidades
      "@typescript-eslint/no-explicit-any": "warn", // Advierte si usas `any`
    },
  },
];

export default eslintConfig;