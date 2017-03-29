// webpack.config.js

module.exports = {
    entry: {
        'jr-qrcode': './index.js'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        libraryTarget: 'umd', // 模块采用UMD格式打包
        library: 'jrQrcode' // 模块名称
    },

    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader',
                exclude: /(node_modules)/
            }
        ]
    }
};