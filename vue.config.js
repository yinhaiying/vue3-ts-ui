const path = require("path");
module.exports = {
    // publicPath:"./",
    configureWebpack: config => {


        let myConfig = {
            "devtool": "none",
            output: {
                filename: "js/index.js",
                path: path.join(__dirname, "dist")
            },
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