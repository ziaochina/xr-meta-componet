var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


var plugins = [
    /*new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify('production')
    }),*/
    new HtmlWebpackPlugin({
        filename: './index.html', //生成的html存放路径，相对于 path
        template: './index.html', //html模板路径
        inject: true, //允许插件修改哪些内容，包括head与body`
    })
]

if (process.env.COMPRESS) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
}

plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor'))


module.exports = {
    devtool: 'source-map',

    entry: {
        bundle: ["./index.js"],
        vendor: [ "react", "react-dom", 'xr-app-loader', 'xr-component', 'xr-meta-component'],
    },

    output: {
        path: path.join(__dirname, "/dist/"),
        filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[name].[hash:8].chunk.js'
    },

    resolve: {
        extensions: [".js"],
    },

    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,

            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.less$/,
            // exclude: /node_modules/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        }, {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
            //exclude: /node_modules/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]',
                }
            }
        }],
    },

    plugins: plugins
};