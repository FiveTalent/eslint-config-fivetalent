module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    "airbnb",
    "prettier",
  ],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  env: {
    "browser": true,
    "node": true,
    "jquery": true,
    "jest": true
  },
  rules: {
    "no-debugger": 0,
    'no-use-before-define': "off",
    "no-alert": 0,
    "no-await-in-loop": 0,
    "no-return-assign": [
      "error",
      "except-parens"
    ],
    "no-restricted-syntax": [
      2,
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
      }
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "no-unused-expressions": [
      2,
      {
        "allowTaggedTemplates": true
      }
    ],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-console": 0,
    "import/prefer-default-export": 0,
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "react/display-name": 1,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/function-component-definition": 0,
    "jsx-a11y/accessible-emoji": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      }
    ],
    "radix": 0,
    "no-shadow": [
      2,
      {
        "hoist": "all",
        "allow": [
          "resolve",
          "reject",
          "done",
          "next",
          "err",
          "error"
        ]
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "endOfLine": 'auto',
      }
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": [
          "invalidHref"
        ]
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-use-before-define": 0,
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      },
      {
        "blankLine": "always",
        "prev": [
          "const",
          "let",
          "var"
        ],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": [
          "const",
          "let",
          "var"
        ],
        "next": [
          "const",
          "let",
          "var"
        ]
      }
    ],
    "no-plusplus": 0,
    "no-unused-vars": [
      1,
      {
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "res|next|^err|event|context|callback|^_",
        "varsIgnorePattern": "^_"
      }
    ],
    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended', // Uses rules from `@typescript-eslint/eslint-plugin`,
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb',
        'prettier',
        // Layer in all the JS Rules
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      // Then we add our own custom typescript rules
      rules: {
        // This allows us to use async function on addEventListener(). Discussion: https://twitter.com/wesbos/status/1337074242161172486
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': [
          'warn',
          {
            ignoreDeclarationMerge: true,
          },
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        //New
        //
        //
        "no-debugger": 0,
        'no-use-before-define': "off",
        "no-alert": 0,
        "no-await-in-loop": 0,
        "no-return-assign": [
          "error",
          "except-parens"
        ],
        "no-restricted-syntax": [
          2,
          "ForInStatement",
          "LabeledStatement",
          "WithStatement"
        ],
        "prefer-const": [
          "error",
          {
            "destructuring": "all",
          }
        ],
        "arrow-body-style": [
          2,
          "as-needed"
        ],
        "no-unused-expressions": [
          2,
          {
            "allowTaggedTemplates": true
          }
        ],
        "no-param-reassign": [
          2,
          {
            "props": false
          }
        ],
        "no-console": 0,
        "import/prefer-default-export": 0,
        "import": 0,
        "func-names": 0,
        "space-before-function-paren": 0,
        "comma-dangle": 0,
        "max-len": 0,
        "import/extensions": 0,
        "no-underscore-dangle": 0,
        "consistent-return": 0,
        "react/display-name": 1,
        "react/no-array-index-key": 0,
        "react/react-in-jsx-scope": 0,
        "react/prefer-stateless-function": 0,
        "react/forbid-prop-types": 0,
        "react/no-unescaped-entities": 0,
        "react/function-component-definition": 0,
        "jsx-a11y/accessible-emoji": 0,
        "react/require-default-props": 0,
        "react/jsx-filename-extension": [
          1,
          {
            extensions: ['.js', '.jsx', '.mdx', '.tsx', '.ts'],
          }
        ],
        "radix": 0,
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "quotes": [
          2,
          "single",
          {
            "avoidEscape": true,
            "allowTemplateLiterals": true
          }
        ],
        "prettier/prettier": [
          "error",
          {
            "trailingComma": "es5",
            "singleQuote": true,
            "printWidth": 120,
            "endOfLine": 'auto',
          }
        ],
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": [
          "warn",
          {
            "aspects": [
              "invalidHref"
            ]
          }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-use-before-define": 0,
        "padding-line-between-statements": [
          "error",
          {
            "blankLine": "always",
            "prev": "*",
            "next": "return"
          },
          {
            "blankLine": "always",
            "prev": [
              "const",
              "let",
              "var"
            ],
            "next": "*"
          },
          {
            "blankLine": "any",
            "prev": [
              "const",
              "let",
              "var"
            ],
            "next": [
              "const",
              "let",
              "var"
            ]
          }
        ],
        "no-plusplus": 0,
        "no-unused-vars": [
          1,
          {
            "ignoreRestSiblings": true,
            "argsIgnorePattern": "res|next|^err|event|context|callback|^_",
            "varsIgnorePattern": "^_"
          }
        ],
        '@typescript-eslint/comma-dangle': ['off'],
        'react/jsx-props-no-spreading': 'off',
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['__test__/**'],
      plugins: ['jest'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
  plugins: [
    "html",
    "prettier",
    "react-hooks"
  ],
}
