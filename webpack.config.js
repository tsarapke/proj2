const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    mode: 'development',
    output: {
        publicPath: '',
        pathinfo: true,
        path: path.resolve(__dirname, 'build'),
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
        globalObject: 'this',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false,
        },
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
        },
    },
    devtool: 'nosources-source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: path.resolve(__dirname, "node_modules"),
        }, ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'public/index.html',
        }),
    ],
    devServer: {
        contentBase: './build',
    }
}