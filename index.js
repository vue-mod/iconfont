import {iconfont} from "./src";

const install = function (app, cdn = null) {
    if (cdn !== null) {
        addIconByLink(cdn)
    }
    app.component(iconfont.name, iconfont)
}

function addIconByLink(url) {
    let doc = document;
    const link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", url);

    const heads = doc.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(link);
    else
        doc.documentElement.appendChild(link);
}

export default {
    install
}

export {iconfont, addIconByLink}