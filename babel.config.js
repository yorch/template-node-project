module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: '10',
                },
                // corejs: '3',
                // useBuiltIns: 'usage',
            },
        ],
    ],
};
