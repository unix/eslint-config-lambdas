
module.exports = {
  'unicorn/filename-case': [0],
  'unicorn/explicit-length-check': [0],
  'unicorn/no-console-spaces': [0],
  'padding-line-between-statements': [0],
  'no-script-url': [0],
  'no-alert': [0],
  'no-floating-decimal': [0],
  'prefer-object-spread': [0],
  'no-mixed-operators': [0],
  'prefer-promise-reject-errors': [0],
  'no-negated-condition': [0],
  'operator-linebreak': [1, 'before'],
  'unicorn/escape-case': [0],
  'prefer-destructuring': [0],
  'capitalized-comments': [0],
  'space-unary-ops': [0],
  'import/no-unresolved': [0, 'nerver'],
  'import/no-unassigned-import': [0, 'nerver'],
  'import/order': [0, 'nerver'],
  'new-cap': [1, {
    newIsCap: true,
    capIsNew: false,
  }],
  'no-implicit-coercion': [0],
  'array-element-newline': [0],
  'array-callback-return': [0],
  'no-return-assign': [2, 'except-parens'],
  'curly': [2, 'multi-line'],
  'semi': [0, 'never'],
  'no-console': [0],
  'no-global-assign': [0],
  'eqeqeq': [2],
  'no-eval': [2],
  'no-undef': [2],
  'no-debugger': [1],
  'prefer-const': [1],
  'default-case': [1],
  'no-fallthrough': [1],
  'no-unused-vars': [1],
  'no-unreachable': [1],
  'no-new-wrappers': [1],
  'no-multi-spaces': [1],
  'no-sparse-arrays': [1],
  'no-constant-condition': [1],
  'no-unused-expressions': [1, {
    allowShortCircuit: true,
  }],
  'quotes': [2, 'single'],
  'eol-last': [2, 'always'],
  'linebreak-style': [1, 'unix'],
  'indent': [1, 2, { 'SwitchCase': 1 }],
  'no-cond-assign': [1, 'except-parens'],
  'comma-dangle': [2, 'always-multiline'],
  'space-infix-ops': [1, { 'int32Hint': true }],
  'object-curly-spacing': [1, 'always'],
  'keyword-spacing': [1, { before: true, after: true }],
  'lines-around-comment': [1, {
    'beforeBlockComment': true,
  }],
}
