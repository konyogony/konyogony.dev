module.exports = {
    env: {
        browser: true,
    },
    globals: {
        foo: "readonly",
    },
    settings: {},
    rules: {
        eqeqeq: "warn",
        "import/no-cycle": "error",
    },
};