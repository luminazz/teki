libs.url_get_host = function (url) {
    var hostName = url.match(/^:?\/\/|https?:\/\/([^/]*@)?(.+?)(:\d{2,5})?([/?].*)?$/i);
    if (!hostName || hostName.length == 0) {
        return "";
    }
    hostName = hostName[2].replace("www.", "");
    hostName = hostName.replace("\r", "");
    return hostName.replace(/\.[A-z]+$/, "");
};
libs.url_slug_search = function (movieInfo, replacement, isConcatYear, minConcat) {
    if (replacement === void 0) { replacement = '-'; }
    if (isConcatYear === void 0) { isConcatYear = false; }
    if (minConcat === void 0) { minConcat = 3; }
    if (isConcatYear && movieInfo.title.length < minConcat) {
        return slugify("" + movieInfo.title + replacement + movieInfo.year, { lower: true, replacement: replacement, remove: /[*+~.()'"!:?@]/g });
    }
    return slugify(movieInfo.title, { lower: true, replacement: replacement, remove: /[*+~.()'"!:?@]/g });
};
