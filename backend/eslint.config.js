import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
        ],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            "@stylistic" : stylistic,
        },
        rules: {
            "@stylistic/quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: "always" }],
            "@stylistic/indent": ["error", 4, { SwitchCase: 1 }],
            "@stylistic/semi": ["error", "never"],
        },
    },
])
