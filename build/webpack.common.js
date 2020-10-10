/* eslint-disable max-len */
const PATH = require('path');
const aliases = require('./aliases');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT = PATH.resolve(__dirname, '../');
const SRC_FOLDER = PATH.resolve(__dirname, ROOT, 'client/src');
const NODE_MODULES = PATH.resolve(__dirname, ROOT, 'node_modules');
const BUILD_FOLDER = PATH.resolve(__dirname, ROOT, 'dist');
const publicPath = '/';

const plugins = [
    new HtmlWebpackPlugin({
        inject: true,
        filename: '../dist/index.html',
        template: 'build/template/htmlTemplate.ejs',
        minify: {
            removeComments: true,
            collapseWhitespace: false,
            removeRedundantAttributes: true
        }
    }),
    new MiniCssExtractPlugin({
        filename: 'styleCss_[hash:8].css'
    })
];

module.exports = {
    cache: true,
    context: ROOT,
    entry: {
        demo: SRC_FOLDER
    },
    output: {
        filename: '[name]_[hash:8].js',
        publicPath,
        path: BUILD_FOLDER,
        chunkFilename: '[name]_[hash:8].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '_',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                reactVendor: {
                    test: /[\\/]node_modules[\\/](react|react-redux|react-dom)[\\/]/,
                    name: 'reactVendor'
                }
            }
        }
    },
    plugins,
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                include: [SRC_FOLDER],
                loader: 'babel-loader',
                options: {
                    compact: false,
                    cacheDirectory: false,
                    babelrc: false,
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { 
                        loader: MiniCssExtractPlugin.loader, 
                        options: {
                            minimize: true,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '../../dist/assets/resources/images/[name].[ext]',
                    limit: 10000
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '../../dist/assets/resources/fonts/[name].[ext]',
                    limit: 10000
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.scss'],
        modules: [NODE_MODULES, 'node_modules'],
        symlinks: false,
        alias: Object.assign({}, aliases)
    }
};

