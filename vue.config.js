const path = require("path");
module.exports = {
    publicPath: "/vue3-ts-ui",
    configureWebpack: config => {


        let myConfig = {
            "devtool": "none",
            module: {}
        }
        myConfig.module = {
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