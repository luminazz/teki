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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, LINK_DETAIL, _i, _a, item, URL_DETAIL_1, parseTv_1, episode, language, _b, language_1, item, urlBuilder, parseURLBuilder, langSlug, _c, _d, item1, titleEpisode, link, language_2, e_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                PROVIDER = "SubDL";
                DOMAIN = "https://subdl.com";
                _e.label = 1;
            case 1:
                _e.trys.push([1, 10, , 11]);
                urlSearch = "https://api.subdl.net/auto?query=".concat(libs.url_slug_search(movieInfo, '%20'));
                return [4, libs.request_get(urlSearch, {}, false)];
            case 2:
                parseSearch = _e.sent();
                libs.log({ parseSearch: parseSearch }, PROVIDER, "PARSE SEARCH");
                LINK_DETAIL = "";
                for (_i = 0, _a = parseSearch.results; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (movieInfo.type != item.type || !item.name) {
                        continue;
                    }
                    if (!libs.string_matching_title(movieInfo, item.name)) {
                        continue;
                    }
                    if (movieInfo.type == "movie" && movieInfo.year != item.year) {
                        continue;
                    }
                    if (!item.link) {
                        continue;
                    }
                    LINK_DETAIL = "".concat(item.link);
                    break;
                }
                libs.log({ LINK_DETAIL: LINK_DETAIL }, PROVIDER, "LINK DETAIL");
                if (!LINK_DETAIL) {
                    return [2];
                }
                URL_DETAIL_1 = "";
                if (!(movieInfo.type == "movie")) return [3, 3];
                URL_DETAIL_1 = LINK_DETAIL;
                return [3, 5];
            case 3: return [4, libs.request_get("".concat(DOMAIN).concat(LINK_DETAIL), {}, true)];
            case 4:
                parseTv_1 = _e.sent();
                parseTv_1(".mx-auto.mt-10 .flex.flex-col.gap-4 a").each(function (key, item) {
                    var season = parseTv_1(item).find(".text-xl.font-bold").text();
                    season = season.match(/season *([0-9]+)/i);
                    season = season ? season[1] : 0;
                    var href = parseTv_1(item).attr("href");
                    libs.log({ season: season, href: href }, PROVIDER, "SEASON INFO");
                    if (season == movieInfo.season && href) {
                        URL_DETAIL_1 = "".concat(href);
                    }
                });
                _e.label = 5;
            case 5:
                libs.log({ URL_DETAIL: URL_DETAIL_1 }, PROVIDER, "URL DETAIL");
                episode = "S".concat(movieInfo.season < 10 ? "0" + movieInfo.season : movieInfo.season, "E").concat(movieInfo.episode < 10 ? "0" + movieInfo.episode : movieInfo.episode);
                if (!URL_DETAIL_1) {
                    return [2];
                }
                language = ["vietnamese", "english", "bengali", "czech", "farsi_persian", "spanish", "arabic", "french", "brazillian%20portuguese", "indonesian", "turkish", "italian", "korean", "russian", "swedish", "ukranian"];
                _b = 0, language_1 = language;
                _e.label = 6;
            case 6:
                if (!(_b < language_1.length)) return [3, 9];
                item = language_1[_b];
                urlBuilder = "".concat(DOMAIN, "/_next/data/PQgETeqUr90_Aeyr8zSEt").concat(URL_DETAIL_1, "/").concat(item, ".json");
                libs.log({ urlBuilder: urlBuilder }, PROVIDER, "URL BUILDER");
                return [4, libs.request_get(urlBuilder, {}, false)];
            case 7:
                parseURLBuilder = _e.sent();
                libs.log({ parseURLBuilder: parseURLBuilder }, PROVIDER, "PARSE URL BUILDER");
                langSlug = parseURLBuilder["pageProps"]["langSlug"];
                if (parseURLBuilder["pageProps"]["groupedSubtitles"][langSlug]) {
                    for (_c = 0, _d = parseURLBuilder["pageProps"]["groupedSubtitles"][langSlug]; _c < _d.length; _c++) {
                        item1 = _d[_c];
                        titleEpisode = item1.title;
                        link = item1.link;
                        language_2 = item1.language;
                        libs.log({ titleEpisode: titleEpisode, link: link, language: language_2 }, PROVIDER, "SEASON INFO");
                        if (movieInfo.type == "movie") {
                            callback({
                                file: "https://dl.subdl.com/subtitle/".concat(link),
                                kind: "Captions",
                                label: language_2,
                                type: "download",
                            });
                        }
                        else {
                            if (titleEpisode.indexOf(episode) == -1) {
                                continue;
                            }
                            callback({
                                file: "https://dl.subdl.com/subtitle/".concat(link),
                                kind: "Captions",
                                label: language_2,
                                type: "download",
                            });
                        }
                    }
                }
                _e.label = 8;
            case 8:
                _b++;
                return [3, 6];
            case 9: return [3, 11];
            case 10:
                e_1 = _e.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 11];
            case 11: return [2, true];
        }
    });
}); };
