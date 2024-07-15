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
source.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER, DOMAIN, urlSearch, parseSearch_1, LINK_DETAIL_1, TYPE_1, parseDetail, id, urlEpisode, parseEpisode, HREF_EPISODE, parseDetailEpisode_1, embeds_2, _i, embeds_1, item, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'GoGoAnime - Anime';
                DOMAIN = "https://gogoanime3.co";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 10, , 11]);
                urlSearch = "".concat(DOMAIN, "/search.html?keyword=").concat(libs.url_slug_search(movieInfo, "%20"));
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch_1 = _a.sent();
                LINK_DETAIL_1 = "";
                TYPE_1 = "SUB";
                libs.log({ urlSearch: urlSearch }, PROVIDER, "URL SEARCH");
                parseSearch_1(".last_episodes .items li").each(function (key, item) {
                    var title = parseSearch_1(item).find(".name a").text();
                    var titleRoot = parseSearch_1(item).find(".name a").text();
                    var href = parseSearch_1(item).find(".name a").attr("href");
                    var year = parseSearch_1(item).find(".released").text();
                    year = year.match(/([0-9]+)/i);
                    year = year ? year[1] : 0;
                    var parseTitle = title.match(/\(([A-z0-9]+)/g);
                    title = title.replace(/\([A-z0-9]+\)/ig, "").trim();
                    var matchMovie = false;
                    if (title.toLowerCase().indexOf("season") != -1) {
                        matchMovie = libs.string_matching_title(movieInfo, title, true, "");
                    }
                    if (parseTitle) {
                        for (var _i = 0, parseTitle_1 = parseTitle; _i < parseTitle_1.length; _i++) {
                            var item_1 = parseTitle_1[_i];
                            if (item_1.toLowerCase().indexOf("dub") != -1) {
                                TYPE_1 = "DUB";
                            }
                        }
                    }
                    libs.log({ title: title, href: href, year: year, match_title: libs.string_matching_title(movieInfo, title, false, ""), match_year: year == movieInfo.year, parseTitle: parseTitle }, PROVIDER, "SEARCH INFO");
                    if (title && href && !LINK_DETAIL_1) {
                        if ((libs.string_matching_title(movieInfo, title, false, "") || matchMovie || movieInfo.title.trim() == titleRoot.trim()) && year == movieInfo.year) {
                            LINK_DETAIL_1 = href;
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, "LINK_DETAIL");
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                if (_.startsWith(LINK_DETAIL_1, "/")) {
                    LINK_DETAIL_1 = "".concat(DOMAIN).concat(LINK_DETAIL_1);
                }
                return [4, libs.request_get(LINK_DETAIL_1, {}, true)];
            case 3:
                parseDetail = _a.sent();
                id = parseDetail("#movie_id").attr("value");
                libs.log({ id: id }, PROVIDER, "ID");
                if (!id) {
                    return [2];
                }
                urlEpisode = "https://ajax.gogocdn.net/ajax/load-list-episode?ep_start=".concat(movieInfo.episode, "&ep_end=").concat(movieInfo.episode, "&id=").concat(id);
                return [4, libs.request_get(urlEpisode, {}, true)];
            case 4:
                parseEpisode = _a.sent();
                HREF_EPISODE = parseEpisode("a").attr("href");
                HREF_EPISODE = HREF_EPISODE.trim();
                libs.log({ HREF_EPISODE: HREF_EPISODE }, PROVIDER, "HREF_EPISODE");
                if (!HREF_EPISODE) {
                    return [2];
                }
                if (_.startsWith(HREF_EPISODE, "/")) {
                    HREF_EPISODE = "".concat(DOMAIN).concat(HREF_EPISODE);
                }
                libs.log({ HREF_EPISODE: HREF_EPISODE }, PROVIDER, "HREF_EPISODE");
                return [4, libs.request_get(HREF_EPISODE, {}, true)];
            case 5:
                parseDetailEpisode_1 = _a.sent();
                embeds_2 = [];
                parseDetailEpisode_1(".anime_muti_link li").each(function (key, item) {
                    var link = parseDetailEpisode_1(item).find("a").attr("data-video");
                    if (link) {
                        embeds_2.push(link);
                    }
                });
                libs.log({ embeds: embeds_2 }, PROVIDER, "EMBEDS");
                if (!embeds_2.length) {
                    return [2];
                }
                _i = 0, embeds_1 = embeds_2;
                _a.label = 6;
            case 6:
                if (!(_i < embeds_1.length)) return [3, 9];
                item = embeds_1[_i];
                return [4, libs.embed_redirect(item, '', movieInfo, PROVIDER, callback, '', [], {
                        type: TYPE_1
                    })];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8:
                _i++;
                return [3, 6];
            case 9: return [3, 11];
            case 10:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 11];
            case 11: return [2, true];
        }
    });
}); };
