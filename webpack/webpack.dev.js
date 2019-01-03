/**
 * @overview generated by ghoti-cli
 * @fileoverview webpack dev configs
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '..', 'dist');
const APP_DIR = path.resolve(__dirname, '..', 'src');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public', 'template.html');
const FAVICON_DIR = path.resolve(__dirname, '..', 'public', 'favicon.png');
const MANIFEST_DIR = path.resolve(__dirname, '..', 'public', 'manifest.json');
// const A = path.resolve(__dirname, '..', 'public', 'photo-sphere-viewer.min.js');
const B = path.resolve(__dirname, '..', 'public', 'three.min.js');
const C = path.resolve(__dirname, '..', 'public', 'D.min.js');
const D = path.resolve(__dirname, '..', 'public', 'doT.min.js');
const E = path.resolve(__dirname, '..', 'public', 'uevent.min.js');
let config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        APP_DIR + "/index.dev.tsx"
    ],
    output: {
        filename: "bundle.js",
        path: BUILD_DIR,
        publicPath: '/'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".sass", ".png", ".jpg", ".gif", ".webp"],
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: './tsconfig.json'
                    }
                }]
            },
            {　　　　　　
                test: /\.(jpg|png|gif|webp)$/,
                loader: 'url-loader?limit=8192'　　　　
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                enforce: "pre",
                test: /\.(t|j)sx?$/,
                loader: "source-map-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'workflow',
            template: PUBLIC_DIR
        }),
        new CopyWebpackPlugin([{
            from: FAVICON_DIR,
            to: BUILD_DIR,
        }, {
            from: MANIFEST_DIR,
            to: BUILD_DIR,
        },
        // {
        //     from: A,
        //     to: BUILD_DIR,
        // },
        {
            from: B,
            to: BUILD_DIR,
        },
        {
            from: C,
            to: BUILD_DIR,
        },{
            from: D,
            to: BUILD_DIR,
        },{
            from: E,
            to: BUILD_DIR,
        }
    ], {}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 8080,
        inline: true,
        historyApiFallback: true
    }
};

module.exports = config;
