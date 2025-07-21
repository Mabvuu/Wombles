module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  env: {
    browser: true, // Allows browser-specific globals like `window` and `document`
    node: true,    // Enables Node.js globals like `process`
    es2021: true,  // Enables modern ECMAScript globals
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Add custom ESLint rules here
  },
};
