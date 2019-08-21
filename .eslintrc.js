module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        // Can I remove these now?
        "ecmaFeatures": {
            "impliedStrict": true,
            "classes": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-underscore-dangle": [
            "error",
            {
                "allow": ["_id"] // mongodb _id key
            }
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
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
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "printWidth": 80,
                "tabWidth": 4,
                "useTabs": false
            },
        ],
    },
    "plugins": [
        "html",
        "prettier",
        "react-hooks"
    ]
}