module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    "rules": {
      // `.jsx` extension cannot be used with React Native
      // https://github.com/airbnb/javascript/issues/982
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],

      "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
      "no-tabs": "off",
      "indent": [2, "tab"],

      "no-case-declarations": "off",
      "no-param-reassign": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-unresolved": "off",
      "import/no-cycle": "off",
      "no-console": "off",
      "react/destructuring-assignment": "off",
      "react/prefer-stateless-function": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/no-multi-comp": "off",
      "class-methods-use-this": "off",
      "object-curly-newline": "off",
      "no-useless-constructor": "off",
      "no-throw-literal": "off",
      "no-alert": "off"
    }
};