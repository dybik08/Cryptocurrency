const fs = require('fs');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const entryFile = fs.existsSync('./src/index.tsx') ? './src/index.tsx' : './src/index.js';

module.exports = {
    entry: ['@babel/polyfill', entryFile],
    devtool: "inline-source-map",
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    mode: isProduction ? 'production' : 'development',
    resolve: {
        extensions: ['.tsx', '.js', '.ts'],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.tsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    'ts-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    'ts-loader'
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ],
    },
    plugins: [
        new WriteFilePlugin(),
        new CleanWebpackPlugin(['dist/*.*']),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'src/static'),
                to: path.join(__dirname, 'dist')
            }
        ])
    ],
    performance: {
        hints: false
    }
};