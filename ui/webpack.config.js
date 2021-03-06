const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'app', 'main.jsx'),
    // babel will run and put all the files in .dist
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'tetra.bundle.js'
    },
    devServer: {
        inline: true,
        port: 80,
        host: '0.0.0.0'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                resolve: {
                    extensions: ['.js', '.jsx']
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html'
        })
    ]
};
