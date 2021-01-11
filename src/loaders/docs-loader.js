const fs = require("fs");
const loaderUtils = require("loader-utils");
const {baseParse} = require("@vue/compiler-core")

module.exports = function (source) {
    const options = loaderUtils.getOptions(this) || {};
    const path = this.resourcePath;
     const file = fs.readFileSync(path).toString();
    const parsed = baseParse(file).children.find(n => n.tag === 'docs');
    const main = file.split(parsed.loc.source).join('').trim();
    console.log("main:",main)
    this.callback(
        null,
        `export default function (Component) {
            Component.__docs = ${JSON.stringify(main)}
        }`
    )
}