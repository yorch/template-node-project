module.exports = {
    parser: 'babel-eslint',
    // parserOptions: {
    //     sourceType: 'module',
    //     allowImportExportEverywhere: false,
    //     ecmaFeatures: {
    //         globalReturn: false,
    //     },
    //     babelOptions: {
    //         configFile: 'babel.config.js',
    //     },
    // },
    extends: ['plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 'error',
    },
    plugins: ['prettier'],
};
