module.exports = {

    extends: [
        // add more generic rulesets here, such as:
        //'eslint:recommended',
        //"plugin:vue/vue3-recommended",
        "plugin:vue/essential", // Use this if you are using Vue.js 2.x.
    ],

    rules: {
        "eqeqeq": "error",
        "no-var": "error",
        "prefer-const": "error",
        "no-console": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double",
            "avoid-escape"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    }
};
