const PATH = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ROOT = PATH.resolve(__dirname, '../');

const devConfig = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: [ROOT],
        disableHostCheck: true,
        useLocalIp: false,
        host: '127.0.0.1',
        port: 9090,
        overlay: {
            errors: true
        },
        open: 'chrome',
        historyApiFallback: true,
        watchContentBase: true
    }
});

module.exports = merge(devConfig, {});
