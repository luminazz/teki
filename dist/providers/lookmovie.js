var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
source.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER, HOST, DOMAIN, PROXY, userAgent, LINK_DETAIL, urlSearchMovie, urlSearchTvshow, parseSearch, parseDetailMovie, linkRedirect, parseDetailTv_1, scriptTv_1, tvInfo, _i, _a, seasonItem;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'LOOKMOVIE';
                HOST = 'LookMovie';
                DOMAIN = "https://lookmovie2.to";
                PROXY = "https://cors-anywhere.herokuapp.com/";
                userAgent = libs.request_getRandomUserAgent();
                LINK_DETAIL = '';
                urlSearchMovie = DOMAIN + "/movies/search/?q=" + libs.url_slug_search(movieInfo, '%20');
                urlSearchTvshow = DOMAIN + "/shows/search/?q=" + libs.url_slug_search(movieInfo, '%20');
                parseSearch = null;
                if (!(movieInfo.type == 'movie')) return [3, 2];
                return [4, libs.request_get(urlSearchMovie, {}, true)];
            case 1:
                parseSearch = _b.sent();
                return [3, 4];
            case 2: return [4, libs.request_get(urlSearchTvshow, {}, true)];
            case 3:
                parseSearch = _b.sent();
                _b.label = 4;
            case 4:
                libs.log({ length: parseSearch('.movie-item-style-2').length }, PROVIDER, 'SEARCH TOTAL');
                parseSearch('.movie-item-style-2').each(function (key, item) {
                    var title = parseSearch(item).find('.mv-item-infor a').text();
                    var href = parseSearch(item).find('.mv-item-infor a').attr('href');
                    var year = parseSearch(item).find('.year').text();
                    if (libs.string_matching_title(movieInfo, title) && !LINK_DETAIL) {
                        if (movieInfo.type == 'movie' && year == movieInfo.year) {
                            LINK_DETAIL = href;
                        }
                        else if (movieInfo.type == 'tv') {
                            LINK_DETAIL = href;
                        }
                    }
                });
                libs.log(LINK_DETAIL, PROVIDER, 'LINK DETAIL');
                if (!LINK_DETAIL) {
                    return [2];
                }
                LINK_DETAIL = "" + DOMAIN + LINK_DETAIL;
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 5:
                parseDetailMovie = _b.sent();
                linkRedirect = parseDetailMovie('.view-movie .container .round-button').attr('href');
                if (!linkRedirect) {
                    return [2];
                }
                if (movieInfo.type == 'movie') {
                    LINK_DETAIL = linkRedirect;
                }
                if (!(movieInfo.type == 'tv')) return [3, 7];
                return [4, libs.request_get(linkRedirect, {}, true)];
            case 6:
                parseDetailTv_1 = _b.sent();
                scriptTv_1 = '';
                parseDetailTv_1('script').each(function (key, item) {
                    var scriptData = parseDetailTv_1(item).text();
                    if (scriptData && scriptData.indexOf("window['show_storage']") != -1) {
                        scriptTv_1 = scriptData;
                    }
                });
                libs.log(scriptTv_1, PROVIDER, 'SCRIPT TV');
                if (!scriptTv_1) {
                    return [2];
                }
                tvInfo = {};
                scriptTv_1 = scriptTv_1.replace("window['show_storage']", "tvInfo");
                libs.log(scriptTv_1, PROVIDER, 'REPLACE SCRIPT TV');
                eval(scriptTv_1);
                libs.log(tvInfo, PROVIDER, 'TV INFO');
                if (!tvInfo.seasons) {
                    return [2];
                }
                for (_i = 0, _a = tvInfo.seasons; _i < _a.length; _i++) {
                    seasonItem = _a[_i];
                    if (seasonItem.season == movieInfo.season && seasonItem.episode == movieInfo.episode) {
                        LINK_DETAIL = linkRedirect + ("#S" + movieInfo.season + "-E" + movieInfo.episode + "-" + seasonItem.id_episode);
                        break;
                    }
                }
                _b.label = 7;
            case 7:
                libs.log({
                    LINK_DETAIL: LINK_DETAIL,
                    linkRedirect: linkRedirect
                }, PROVIDER, 'URL LINK DETAIL');
                callback({
                    callback: {
                        provider: PROVIDER,
                        host: HOST,
                        url: LINK_DETAIL,
                        headers: {
                            'user-agent': userAgent
                        },
                        callback: callback,
                        script: "window.alert=window.confirm=window.prompt=function(n){};",
                        beforeLoadScript: "window.alert=window.confirm=window.prompt=function(n){};\n            var open = XMLHttpRequest.prototype.open;\n            XMLHttpRequest.prototype.open = function() {\n                this.addEventListener(\"load\", function() {\n                    var message = {\"status\" : this.status, \"responseURL\" : this.responseURL, \"responseText\": this.responseText, \"response\": this.response}\n                    \n                    window.ReactNativeWebView.postMessage(JSON.stringify(message));\n                });\n                open.apply(this, arguments);\n            };",
                        metadata: {
                            PROVIDER: PROVIDER,
                            DOMAIN: DOMAIN,
                            movieInfo: movieInfo,
                            userAgent: userAgent,
                        }
                    }
                });
                return [2, true];
        }
    });
}); };
