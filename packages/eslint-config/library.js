import onlyWarn from "eslint-plugin-only-warn";
import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

export default [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    ignores: [".*.js", "node_modules/", "dist/"],
    languageOptions: {
      globals: {
        React: "readonly",
        JSX: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "only-warn": onlyWarn,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project,
        },
      },
    },
  },
];
