const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js"
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules:[{ 
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: {
                    interpolate: true
                }
            }
        },{
            test:/\.css$/,
            use: ['style-loader','css-loader']
        },{
            test: /\.(gif|svg|jp?g|png)$/,
            loader: 'file-loader'
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({  
            title: 'WebGIS Dati Agroambientali',
            template: './src/index.html'
        })
    ]
}