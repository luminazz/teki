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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
subs.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER, DOMAIN, urlSearch, headerSearch, bodySearch, parseSearch_1, LINK_DETAIL_1, parseDetail_1, parseEpisode_1, subsLangHref_2, _i, subsLangHref_1, item, parseSubtitle, lang, downloadSubLangUrl, parseDownloadSubtitle, e1_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = "Tvsubtitles";
                DOMAIN = "https://www.tvsubtitles.net";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 11, , 12]);
                if (movieInfo.type == "movie") {
                    return [2];
                }
                urlSearch = "".concat(DOMAIN, "/search.php");
                headerSearch = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };
                bodySearch = qs.stringify({
                    "qs": movieInfo.title
                });
                return [4, libs.request_post(urlSearch, headerSearch, bodySearch, true)];
            case 2:
                parseSearch_1 = _a.sent();
                LINK_DETAIL_1 = "";
                parseSearch_1(".left_articles ul li").each(function (key, item) {
                    var href = parseSearch_1(item).find("a").attr("href");
                    var text = parseSearch_1(item).find("a").text();
                    text = text.replace(/\( *[0-9]+ *\- *[0-9]+ *\)/i, "").trim();
                    libs.log({ href: href, text: text }, PROVIDER, "SEARCH INFO");
                    if (href && text) {
                        if (libs.string_matching_title(movieInfo, text)) {
                            LINK_DETAIL_1 = "".concat(DOMAIN).concat(href);
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, "LINK_DETAIL");
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                LINK_DETAIL_1 = LINK_DETAIL_1.replace(".html", "-".concat(movieInfo.season, ".html"));
                return [4, libs.request_get(LINK_DETAIL_1, {}, true)];
            case 3:
                parseDetail_1 = _a.sent();
                parseEpisode_1 = "".concat(movieInfo.season, "x").concat(movieInfo.episode < 10 ? "0" + movieInfo.episode : movieInfo.episode);
                subsLangHref_2 = [];
                parseDetail_1("#table5 tr").each(function (key, item) {
                    var episode = parseDetail_1(item).find("td").first().text();
                    libs.log({ episode: episode, parseEpisode: parseEpisode_1 }, PROVIDER, "EPISODE");
                    if (episode && episode.trim() == parseEpisode_1) {
                        parseDetail_1(item).find("a").each(function (key1, item1) {
                            var hrefEpisode = parseDetail_1(item1).attr("href");
                            libs.log({ hrefEpisode: hrefEpisode }, PROVIDER, "HREF EPISODE");
                            if (hrefEpisode && hrefEpisode.indexOf("episode-") == -1) {
                                subsLangHref_2.push("".concat(DOMAIN, "/").concat(hrefEpisode));
                            }
                        });
                    }
                });
                libs.log({ subsLangHref: subsLangHref_2 }, PROVIDER, "subsLangHref");
                _i = 0, subsLangHref_1 = subsLangHref_2;
                _a.label = 4;
            case 4:
                if (!(_i < subsLangHref_1.length)) return [3, 10];
                item = subsLangHref_1[_i];
                _a.label = 5;
            case 5:
                _a.trys.push([5, 8, , 9]);
                return [4, libs.request_get(item, {}, true)];
            case 6:
                parseSubtitle = _a.sent();
                lang = parseSubtitle(".description b").text();
                lang = lang.replace("subtitles", "").trim();
                libs.log({ lang: lang }, PROVIDER, "LANGUAGE");
                if (!lang) {
                    return [3, 9];
                }
                downloadSubLangUrl = item.replace("subtitle-", "download-");
                libs.log({ downloadSubLangUrl: downloadSubLangUrl }, PROVIDER, "downloadSubLangUrl");
                return [4, fetch(downloadSubLangUrl, {
                        redirect: 'manual',
                        method: "HEAD"
                    })];
            case 7:
                parseDownloadSubtitle = _a.sent();
                libs.log({ url: parseDownloadSubtitle.url }, PROVIDER, "textParseDownload");
                if (!parseDownloadSubtitle.url) {
                    return [3, 9];
                }
                callback({
                    file: parseDownloadSubtitle.url,
                    kind: "Captions",
                    label: lang.charAt(0).toUpperCase() + lang.slice(1),
                    type: "download",
                });
                return [3, 9];
            case 8:
                e1_1 = _a.sent();
                return [3, 9];
            case 9:
                _i++;
                return [3, 4];
            case 10: return [3, 12];
            case 11:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 12];
            case 12: return [2, true];
        }
    });
}); };
