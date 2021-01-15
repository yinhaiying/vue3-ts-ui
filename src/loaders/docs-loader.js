const fs = require("fs");
const loaderUtils = require("loader-utils");
const {baseParse} = require("@vue/compiler-core")

module.exports = function (source) {
    const options = loaderUtils.getOptions(this) || {};
    const path = this.resourcePath;
     const file = fs.readFileSync(path).toString();
    const parsed = baseParse(file).children.find(n => n.tag === 'docs');
    const main = file.split(parsed.loc.source).join('').trim();
    const titleReg = /<title>([\s\S]*)<\/title>/;
    const descReg = /<desc>([\s\S]*)<\/desc>/;
    const title = parsed.children[0].loc.source.replace(titleReg, (a, b) => {
        return b;
    })
    const desc = parsed.children[1].loc.source.replace(descReg, (a, b) => {
        return b;
    })
    this.callback(
        null,
        `export default function (Component) {
            Component.__docs = ${JSON.stringify(main)}
            Component.__title = ${JSON.stringify(title)}
            Component.__desc = ${JSON.stringify(desc)}
        }`
    )
}