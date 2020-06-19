module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "plugins": [
        "html",
        "prettier",
        "react-hooks"
    ],
    "rules": {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "printWidth": 80,
                "tabWidth": 4,
                "useTabs": false,
                "trailingComma": "none",
                "arrowParens": "avoid"
            }
        ],
        "no-underscore-dangle": [
            "error",
            {
                "allow": [
                    "_id"
                ] // mongodb _id key
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
        ]
    }
}