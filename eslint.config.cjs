const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");

module.exports = [
  {
    ignores: ["**/.next/**", "**/dist/**", "**/node_modules/**"],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      "curly": ["error", "all"],
      "eqeqeq": ["error", "always"],
      "no-debugger": "error",
      "no-alert": "error",
      "object-shorthand": ["error", "always"],
      "prefer-template": "error",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
      "react-hooks/immutability": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element": "off",
    },
  },
];
