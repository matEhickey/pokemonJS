module.exports = {
		"parser": "babel-eslint",
		"plugins": [
			"flowtype"
		],
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
      "no-tabs": "off",
      "indent": [2, "tab"],
      "brace-style": ["error", "stroustrup", { "allowSingleLine": true }],
      "object-curly-newline": "off",
      "class-methods-use-this": "off",
      "consistent-return": "off",
      "lines-between-class-members": "off",

      "no-alert": "off",
      "no-console": "off",
      "no-useless-constructor": "off",
      "no-throw-literal": "off",
      "no-case-declarations": "off",
      "no-param-reassign": "off",
      "no-use-before-define": "off",
      "no-restricted-globals": "off",

      "import/no-extraneous-dependencies": "off",
      "import/no-unresolved": "off",
      "import/no-cycle": "off"
    }
};
