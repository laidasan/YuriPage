module.exports = {
    plugins: [
      'stylelint-scss'
    ],
    extends: [
      'stylelint-config-standard',
      'stylelint-config-recommended-scss'
    ],
    rules: {
      'block-opening-brace-space-before': 'always',
      'no-descending-specificity': null,
      'selector-pseudo-element-no-unknown': [
        true,
        {
          ignorePseudoElements: ['v-deep']
        }
      ],
      // css modules pseudo class
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: [
            'export',
            'global'
          ]
        }
      ],
    //   'scss/at-rule-no-unknown': [
    //     true,
    //     {
    //     ignoreAtRules: [
    //       "tailwind",
    //       "apply",
    //       "variants",
    //       "responsive",
    //       "screen",
    //       "layer"
    //     ]
    //     }
    //   ],
    }
  }
  