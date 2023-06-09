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
        return slugify("".concat(movieInfo.title).concat(replacement).concat(movieInfo.year), { lower: true, replacement: replacement, remove: /[*+~.()'"!:?@]/g });
    }
    return slugify(movieInfo.title, { lower: true, replacement: replacement, remove: /[*+~.()'"!:?@]/g });
};
libs.url_extractHostname = function (url) {
    var hostname;
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
};
libs.url_extractRootDomain = function (url) {
    var domain = libs.url_extractHostname(url), splitArr = domain.split('.'), arrLen = splitArr.length;
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
};
libs.url_getHttp = function (str) {
    var match = str.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/ig);
    return match ? match : [];
};
