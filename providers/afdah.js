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
    var PROVIDER, DOMAIN, LINK_DETAIL, maxLoop, _loop_1, index, state_1, parseDetail, iframe, parseIframe, embed, parseEmbed, directUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'NAFDAH';
                DOMAIN = "https://afdah.live";
                LINK_DETAIL = '';
                maxLoop = movieInfo.type == 'movie' ? 1 : 10;
                _loop_1 = function (index) {
                    var urlSearch, parseSearch;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (LINK_DETAIL) {
                                    return [2, "break"];
                                }
                                urlSearch = "".concat(DOMAIN, "/page/").concat(index, "/?s=").concat(libs.url_slug_search(movieInfo, '+'));
                                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                                return [4, libs.request_get(urlSearch, {}, true)];
                            case 1:
                                parseSearch = _b.sent();
                                libs.log({ length: parseSearch('#main .post').length }, PROVIDER, 'PARSE SEARCH');
                                parseSearch('#main .post').each(function (key, item) {
                                    var title = parseSearch(item).find('#featured-thumbnail').attr('title');
                                    var href = parseSearch(item).find('#featured-thumbnail').attr('href');
                                    var season = 0;
                                    var episode = 0;
                                    var matchSeason = title.match(/season *([0-9])+ *episode *([0-9]+)/i);
                                    if (!matchSeason) {
                                        matchSeason = title.match(/s([0-9]+) *e([0-9]+)/i);
                                        if (matchSeason) {
                                            season = matchSeason[1];
                                            episode = matchSeason[2];
                                            title = title.replace(/s[0-9]+ *e[0-9]+.*/i, '');
                                        }
                                    }
                                    else {
                                        season = matchSeason[1];
                                        episode = matchSeason[2];
                                        title = title.replace(/season *[0-9]+ *episode *[0-9]+.*/i, '');
                                    }
                                    var matchYear = title.indexOf(movieInfo.year);
                                    title = title.replace(movieInfo.year, '');
                                    title = title.replace(/\(.*\)/i, '');
                                    title = title.trim();
                                    libs.log({ title: title, href: href, season: season, episode: episode, matchYear: matchYear }, PROVIDER, 'SEARCH ITEM');
                                    if (title && href && !LINK_DETAIL) {
                                        if (libs.string_matching_title(movieInfo, title)) {
                                            if (movieInfo.type == 'tv' && season == movieInfo.season && episode == movieInfo.episode) {
                                                LINK_DETAIL = "".concat(href);
                                            }
                                            if (movieInfo.type == 'movie' && !season && !episode && matchYear) {
                                                LINK_DETAIL = "".concat(href);
                                            }
                                        }
                                    }
                                });
                                return [2];
                        }
                    });
                };
                index = 1;
                _a.label = 1;
            case 1:
                if (!(index <= maxLoop)) return [3, 4];
                return [5, _loop_1(index)];
            case 2:
                state_1 = _a.sent();
                if (state_1 === "break")
                    return [3, 4];
                _a.label = 3;
            case 3:
                index++;
                return [3, 1];
            case 4:
                libs.log({
                    LINK_DETAIL: LINK_DETAIL
                }, PROVIDER, 'LINK_DETAIL');
                if (!LINK_DETAIL) {
                    return [2];
                }
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 5:
                parseDetail = _a.sent();
                iframe = parseDetail('iframe').attr('src');
                libs.log({
                    iframe: iframe
                }, PROVIDER, 'IFRAME');
                if (!iframe) {
                    return [2];
                }
                return [4, libs.request_get(iframe, {}, true)];
            case 6:
                parseIframe = _a.sent();
                embed = parseIframe('iframe').attr('src');
                libs.log({
                    embed: embed
                }, PROVIDER, 'EMBED');
                if (!embed) {
                    return [2];
                }
                return [4, libs.request_get(embed)];
            case 7:
                parseEmbed = _a.sent();
                directUrl = parseEmbed.match(/file *\: *\'([^\']+)/i);
                directUrl = directUrl ? directUrl[1] : '';
                libs.log({
                    directUrl: directUrl
                }, PROVIDER, 'DIRECT');
                libs.embed_callback(directUrl, PROVIDER, PROVIDER, 'Hls', callback, 1, [], []);
                return [2, true];
        }
    });
}); };
