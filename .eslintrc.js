module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  rules: {
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        semi: false,
        singleQuote: false,
        trailingComma: "none",
        arrowParens: "avoid"
      }
    ],
    "react/display-name": [0],
    "react/jsx-no-undef": [1, { allowGlobals: true }],
    "react/prop-types": [0]
  },
  plugins: ["prettier", "react"],
  settings: {
    react: {
      pragma: "React"
    }
  }
}
