const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
];

module.exports = merge(common, {
    plugins
});
