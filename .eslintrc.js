/**
 * Top or root level ESLint configurations
 * Don't be tempted to move this to JSON format as `.eslintrc.json` or an RC file as `.eslintrc`
 * This file being in JS, would benefit from Prettier formatting or JS Docs typedefs
 * And we can add detailed comments to explain our rationale behind each decisions
 */

module.exports = {
  /**
   * Specifies the ESLint Parser
   * We want to Lint both JS and TS files
   * Hence we are using TypeScript ESLint Parser
   */
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'react',
    'react-hooks',
    'jest',
    'prettier',
  ],
  env: {
    /**
     * ES6 and future EcmaScript versions are enabled by default
     */
    es6: true,
    /* It makes sense to add browser related stuff in web projects */
    browser: true,
    commonjs: true,
    jest: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    /**
     * Generally speaking, there are three popular ESLint standards - Airbnb, Google, Standard
     * In React community, Airbnb has been prevalent for more than 3 years now
     * Airbnb linting rules also has open-source explanation for each rule, as well as great community support
     * For now, we would stick to Airbnb recommendations
     */
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended', // disables rules that TypeScript covers
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // should be last to override codestyle rules
    /**
     * Sonarqube code complexity rules as lint checks
     */
    'plugin:sonarjs/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    // we can also provide a separate TSConfig, just for ESLint
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.json'], // cover .json files as well
  },
  settings: {
    react: {
      version: 'detect', // detect version of react automatically
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    /**
     * This is enabled to allow using style objects
     * before defining them at the bottom with StyleSheet.create()
     * disable the rule for variables, but enable it for functions and classes
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    /**
     * Do NOT allow `any`
     * Prefer `unknown` over `any`
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
     */
    '@typescript-eslint/ban-types': [
      2,
      {
        types: {
          any: "Don't use 'any' because it is unsafe",
        },
        extendDefaults: true,
      },
    ],
    /**
     *
     * We don't want ESLint to raise errors where these extensions are not specified
     * TypeScript is to be treated as first-class cititzens, and compatible with VSCode intellisense
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    /**
     * File paths should be resolved properly
     * For image file extensions, this doesn't work, so we can suppress those errors
     */
    'import/no-unresolved': [2, { ignore: ['\\.(png|jpg|svg)\\?(lqip)$'] }],
    /**
     * Turn off this rule
     * https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
     */
    'import/no-named-as-default': 0,
    /**
     * This is a nonsensical rule
     * So for the time being, we can turn it off
     */
    'import/prefer-default-export': 'off',
    /**
     * Turn off consistent returns
     * To not have to write `return undefined` at the end of each file
     * TypeScript return types would do the rest
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        /**
         * These files can import developer dependencies
         */
        devDependencies: ['**/*.test.ts', '**/*.test.tsx', '__tests__/**/*'],
      },
    ],
    'consistent-return': 0,
    /**
     * We want to disable this rule for immer
     * Because immer uses JS Proxies under the hood to intercept assignments
     * And perform a structurally-shared update
     * So it would allow assignments to "draft"
     */
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draft'] },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    /**
     * We want rule of hooks, as defined in React documentation, to be enforced
     * This rule throws error in development time,
     * and informs developer that they have potentially violated a rule of hooks
     * Rule of hooks: https://reactjs.org/docs/hooks-rules.html
     */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off', // not required to import react in react v17
    /**
     * Disable order of component methods / functions in React class components
     */
    'react/sort-comp': 'off',
    /**
     * Enable checks on not having display name set on exported names
     * Reference: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    'react/display-name': 'warn',
    'react/prop-types': 'off', // we use typescript, no point in having prop-types
    /**
     * It can get difficult to always have to destructure props & state
     */
    'react/destructuring-assignment': 0,
    /**
     * default props assignnment alphabetical order
     */
    'react/jsx-sort-default-props': [
      2,
      {
        ignoreCase: true,
      },
    ],
    /**
     * Sorting order for props
     */
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
      },
    ],
    'react/sort-prop-types': [
      2,
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],
    /**
     * A rule from createClass days of React
     * We use stateful functions now
     */
    'react/prefer-stateless-function': 0,

    /**
     * We are enforcing Prettier, the AST based formatting tool, through ESLint
     * A formatting violation would be considered an ESLint violation
     * If someone has Prettier plugin installed in their IDE / editor, with auto-formatting on
     * They don't need to worry about this
     * We would also enforce this through Git pre-commit hook
     * However, CI Build would fail if someone has bypassed both these checks
     * Effectively, this makes it near impossible to check in code to main branches which isn't consistently formatted
     */
    'prettier/prettier': ['error'],
    /**
     * We allow prop spreading because we are already using TypeScript to validate the types
     * We also wrap over common Native elements, like Button / Image etc.
     * It's important that consumer of these components be able to pass any prop that's specific to that component
     * But not touched by the wrapper itself
     */
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    /**
     * Disabled tests should throw error
     * test.skip() shouldn't be allowed to pass in CI
     * Rather, use test.todo()
     */
    'jest/no-disabled-tests': 'error',
    /**
     * No focused tests
     * Reference: https://timdeschryver.dev/blog/dont-commit-focused-tests
     */
    'jest/no-focused-tests': 'error',
    /**
     * Cannot have duplicate titles for two different tests
     */
    'jest/no-identical-title': 'error',
    /**
     * Prefer to use `.toHaveLength()` over checking actual `length`
     * Reference: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
     */
    'jest/prefer-to-have-length': 'error',
    /**
     * `expect()` should be called in a valid way
     */
    'jest/valid-expect': 'error',
  },
  ignorePatterns: ['coverage/**/*'],
};
