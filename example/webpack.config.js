// webpack.config.js
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'common', /* filename= */'common.js'); // 分析以下模块的共用代码, 单独打一个包到common.js
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 单独打包CSS
var HtmlWebpackPlugin = require('html-webpack-plugin'); // Html文件处理

module.exports = {
    entry: {
        Index: './src/modules/app/index.js'
    },
    output: {
        path: './release', // This is where images & js will go
        //publicPath: 'http://xxx.com/webpack-demo/', // This is used to generate URLs to e.g. images
        publicPath: '../', // This is used to generate URLs to e.g. images
        filename: '[name].js',
        chunkFilename: "[id].chunk.js?[hash:8]"
    },
    plugins: [
        commonsPlugin,
        new ExtractTextPlugin('[name].css', {allChunks: true}), // 单独打包CSS

        // 全局变量
        new webpack.DefinePlugin({
            //__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')) // 通过环境变量设置
            __DEV__: JSON.stringify(JSON.parse('false')) // 开发调试时把它改为true
        }),

        // HTML文件编译，自动引用JS/CSS
        new HtmlWebpackPlugin({
            filename: 'views/index.html', // 输出文件名，相对路径output.path
            template: 'src/views/index.html', // HTML模板，相对配置文件目录
            chunks: ['common', 'Index'], // 只包含指定的文件（打包后输出的JS/CSS）,不指定的话，它会包含生成的所有js和css文件
            //excludeChunks: ['dev-helper'], // 排除指定的文件（打包后输出的JS/CSS）
            hash: true
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader', // ES6
                exclude: /(node_modules|libs|lib)/
            },
            // CSS,LESS打包进JS
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            // CSS,LESS单独打包
            // { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            // { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },

            { test: /\.tpl$/, loader: 'ejs'}, // artTemplate/ejs 's tpl
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    name: '[path][name].[ext]?[hash:8]',
                    limit: 8192 // inline base64 URLs for <=8k images, direct URLs for the rest
                }
            }
        ],
        resolveLoader: {
            // modulesDirectories: [
            //     '../../release'
            // ]
        }
    },
    resolve: {
        alias: {
            'lib0': '../../libs', // 从module调用工程上公共lib库路径简写
            'lib1': '../../../libs', // 从module的子文件夹调用工程上公共lib库路径简写
            'lib2': '../../../../libs' // 从module的两层子文件夹调用工程上的公共lib库路径简写
        },
        // 现在可以写 require('file') 代替 require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    }
};