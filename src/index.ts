import * as unicorn from "eslint-plugin-unicorn";

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    rules: unicorn.rules,
    configs: {
        recommended: {
            ...unicorn.configs.recommended,
            extends: [
                "plugin:unicorn/recommended",
                "plugin:sonarjs/recommended",
                "eslint:recommended",
                "plugin:prettier/recommended"
            ],
            plugins: ["unicorn", "simple-import-sort", "sonarjs", "jest"],
            rules: {
                ...unicorn.configs.recommended.rules,
                quotes: ["error", "double"],
                semi: ["error", "always"],
                indent: ["warn", 4],
                "linebreak-style": ["error", "unix"],
                "simple-import-sort/imports": "error",
                "simple-import-sort/exports": "error",
                "no-unused-vars": "error",
                "sonarjs/cognitive-complexity": "off",
                "sonarjs/no-duplicate-string": "off",
                "no-var": "error",
                "prefer-destructuring": "warn",
                "prefer-arrow-callback": "warn",
                "prefer-const": "error",
                "no-useless-return": "error",
                "padding-line-between-statements": [
                    "error",
                    {
                        blankLine: "always",
                        prev: "*",
                        next: ["if", "switch", "try", "for"]
                    },
                    {
                        blankLine: "always",
                        prev: ["if", "switch", "try", "const", "let"],
                        next: "*"
                    },
                    {
                        blankLine: "any",
                        prev: ["const", "let"],
                        next: ["const", "let"]
                    }
                ],
                "object-curly-spacing": ["error", "always"],
                "unicorn/filename-case": "off",
                "unicorn/prefer-at": [
                    "error",
                    {
                        checkAllIndexAccess: false
                    }
                ],
                "unicorn/no-array-callback-reference": "off",
                "unicorn/no-array-reduce": "warn",
                "unicorn/no-await-expression-member": "off",
                "unicorn/prefer-module": "off",
                "unicorn/prevent-abbreviations": "off", // fuck this rule,
                "unicorn/numeric-separators-style": [
                    "error",
                    {
                        onlyIfContainsSeparator: true // fuck this rule too
                    }
                ],
                "no-nested-ternary": "off",
                "no-unneeded-ternary": "warn"
            }
        }
    }
};
