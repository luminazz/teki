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
    var PROVIDER, DOMAIN, urlSearch, headers, parseSearch_1, LINK_DETAIL_1, id, hrefEpisode, dataEpisode, parseEpisode_1, tokens_2, _i, tokens_1, item, urlEmbed, dataEmbed, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'YMovies';
                DOMAIN = "https://ymovies.vip";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                urlSearch = "https://ymovies.vip/movie/search/".concat(libs.url_slug_search(movieInfo, '+'));
                headers = {};
                return [4, libs.request_get(urlSearch, headers, true)];
            case 2:
                parseSearch_1 = _a.sent();
                libs.log({ parseSearch: parseSearch_1 }, PROVIDER, 'DATA SEARCH');
                LINK_DETAIL_1 = "";
                parseSearch_1('.ml-item').each(function (key, item) {
                    var title = parseSearch_1(item).find('.mi-name a').text();
                    var href = parseSearch_1(item).find('.mi-name a').attr('href');
                    var year = parseSearch_1(item).find('.mi-meta span').first().text();
                    var type = parseSearch_1(item).find('.mim-type').text();
                    libs.log({ title: title, href: href, year: year, type: type }, PROVIDER, 'SEARCH ITEM');
                    if (title && href && type && !LINK_DETAIL_1) {
                        if (libs.string_matching_title(movieInfo, title, false)) {
                            if (movieInfo.type == 'movie' && type.toLowerCase() == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL_1 = _.startsWith(href, '/') ? "".concat(DOMAIN).concat(href) : href;
                            }
                            if (movieInfo.type == 'tv' && type.toLowerCase() == 'tv') {
                                LINK_DETAIL_1 = _.startsWith(href, '/') ? "".concat(DOMAIN).concat(href) : href;
                            }
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, 'LINK DETAIL');
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                id = LINK_DETAIL_1.split('-');
                id = id[id.length - 1];
                libs.log({ id: id }, PROVIDER, 'ID');
                if (!id) {
                    return [2];
                }
                hrefEpisode = "";
                if (movieInfo.type == "movie") {
                    hrefEpisode = "https://ymovies.vip/ajax/movie/episode/servers/".concat(id, "_1_full");
                }
                else {
                    hrefEpisode = "https://ymovies.vip/ajax/movie/episode/servers/".concat(id, "_").concat(movieInfo.season, "_").concat(movieInfo.episode);
                }
                return [4, libs.request_get(hrefEpisode)];
            case 3:
                dataEpisode = _a.sent();
                libs.log({ dataEpisode: dataEpisode }, PROVIDER, 'DATA EPISODE');
                if (!dataEpisode.status) {
                    return [2];
                }
                parseEpisode_1 = cheerio.load(dataEpisode.html);
                tokens_2 = [];
                parseEpisode_1('.link-item').each(function (key, item) {
                    var dataId = parseEpisode_1(item).attr('data-id');
                    var dataName = parseEpisode_1(item).attr('data-name');
                    if (dataId) {
                        tokens_2.push({
                            id: dataId,
                            name: dataName
                        });
                    }
                });
                libs.log({ tokens: tokens_2 }, PROVIDER, 'TOKENS');
                if (!tokens_2.length) {
                    return [2];
                }
                _i = 0, tokens_1 = tokens_2;
                _a.label = 4;
            case 4:
                if (!(_i < tokens_1.length)) return [3, 8];
                item = tokens_1[_i];
                urlEmbed = "".concat(DOMAIN, "/ajax/movie/episode/server/sources/").concat(item.id, "_").concat(item.name);
                return [4, libs.request_get(urlEmbed)];
            case 5:
                dataEmbed = _a.sent();
                if (!dataEmbed.status || !dataEmbed.src) {
                    return [2];
                }
                return [4, libs.embed_redirect(dataEmbed.src, '', movieInfo, PROVIDER, callback, '')];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7:
                _i++;
                return [3, 4];
            case 8: return [3, 10];
            case 9:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER);
                return [3, 10];
            case 10: return [2, true];
        }
    });
}); };
