module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "globals": {
    "browser": false,
    "expect": false,
    "pages": false
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "plugins": [],
  "rules": {
    "indent": ["error",
      2, {
        "SwitchCase": 1
      }
    ],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-console": "off",
    "no-underscore-dangle": "error"
  }
};
