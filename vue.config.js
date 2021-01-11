
module.exports = {
    // publicPath:"./",
    configureWebpack: config => {
        
        
        let myConfig = {
            module:{}
        }
        myConfig.module = {
            // rules: [
            //     {
            //         test: /\.vue$/,
            //         loader: 'vue-loader',
            //         options: {
            //             loaders: {
            //                 'docs': require.resolve("./src/loaders/docs-loader.js")
            //             }
            //         }
            //     }
            // ]
                rules: [{
                    resourceQuery: /blockType=docs/,
                    loader: require.resolve("./src/loaders/docs-loader.js"),
                }]
        }
        return myConfig;
    },
    chainWebpack: config => {
        config.module
            .rule('md')
            .test(/\.md/)
            .use('html-loader')
            .loader('html-loader')
            .end()
            .use('markdown-loader')
            .loader('markdown-loader')
            .end()
    },

}