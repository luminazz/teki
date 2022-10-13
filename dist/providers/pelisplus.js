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
    var PROVIDER, DOMAIN, lang, filmInfo_1, urlSearch, parseSearch_1, LINK_DETAIL_1, embeds_2, parseDetail_1, _i, embeds_1, embedItem, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'JPelisplus';
                DOMAIN = "https://pelisplus.icu";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 12, , 13]);
                lang = 'es';
                filmInfo_1 = {};
                if (!(movieInfo.type == 'movie')) return [3, 3];
                return [4, libs.tmdb_movie_info(movieInfo.tmdb_id, lang)];
            case 2:
                filmInfo_1 = _a.sent();
                return [3, 5];
            case 3: return [4, libs.tmdb_tv_info(movieInfo.tmdb_id, lang)];
            case 4:
                filmInfo_1 = _a.sent();
                _a.label = 5;
            case 5:
                urlSearch = "".concat(DOMAIN, "/search.html?keyword=").concat(libs.url_slug_search({ title: filmInfo_1.title }, '%20'));
                libs.log({ urlSearch: urlSearch, filmInfo: filmInfo_1 }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 6:
                parseSearch_1 = _a.sent();
                LINK_DETAIL_1 = '';
                libs.log({
                    urlSearch: urlSearch,
                    filmInfo: filmInfo_1,
                    length: parseSearch_1('.listing.items li').length,
                }, PROVIDER, 'SEARCH INFO');
                parseSearch_1('.listing.items li').each(function (key, item) {
                    var title = parseSearch_1(item).find('.name').text();
                    var href = parseSearch_1(item).find('a').attr('href');
                    var type = 'movie';
                    var matchSeasonEpisode = title.match(/Temporada *([0-9]+) *Capítulo *([0-9]+)/i);
                    var season = matchSeasonEpisode ? matchSeasonEpisode[1] : 0;
                    var episode = matchSeasonEpisode ? matchSeasonEpisode[2] : 0;
                    if (season && episode) {
                        type = 'tv';
                    }
                    title = title.replace(/Temporada *[0-9]+ *Capítulo *[0-9]+/i, '');
                    title = title.trim();
                    libs.log({
                        title: title,
                        href: href,
                        type: type,
                        season: season,
                        episode: episode
                    }, PROVIDER, 'SEARCH INFO');
                    if (title && href && !LINK_DETAIL_1 && type) {
                        if (title.toLowerCase() == filmInfo_1.title.toLowerCase()) {
                            if (movieInfo.type == 'tv') {
                                LINK_DETAIL_1 = href;
                            }
                            else {
                                LINK_DETAIL_1 = href;
                            }
                        }
                    }
                });
                libs.log({
                    LINK_DETAIL: LINK_DETAIL_1
                }, PROVIDER, 'LINK DETAIL');
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                LINK_DETAIL_1 = "".concat(DOMAIN).concat(LINK_DETAIL_1);
                if (movieInfo.type == 'tv') {
                    LINK_DETAIL_1 = LINK_DETAIL_1.replace(/-temporada-[0-9]+-capitulo-[0-9]+/i, "-temporada-".concat(movieInfo.season, "-capitulo-").concat(movieInfo.episode));
                }
                embeds_2 = [];
                return [4, libs.request_get(LINK_DETAIL_1, {}, true)];
            case 7:
                parseDetail_1 = _a.sent();
                libs.log({
                    length: parseDetail_1('.tab-video').length
                }, PROVIDER, 'LENGTH EMBED');
                parseDetail_1('.tab-video').each(function (key, item) {
                    var embedUrl = parseDetail_1(item).attr('data-video');
                    if (embedUrl) {
                        if (_.startsWith(embedUrl, '/')) {
                            embedUrl = "https:".concat(embedUrl);
                        }
                        embeds_2.push(embedUrl);
                    }
                });
                libs.log({
                    embeds: embeds_2
                }, PROVIDER, 'EMBEDS');
                _i = 0, embeds_1 = embeds_2;
                _a.label = 8;
            case 8:
                if (!(_i < embeds_1.length)) return [3, 11];
                embedItem = embeds_1[_i];
                return [4, libs.embed_redirect(embedItem, '', movieInfo, PROVIDER, callback, '')];
            case 9:
                _a.sent();
                _a.label = 10;
            case 10:
                _i++;
                return [3, 8];
            case 11: return [2, true];
            case 12:
                e_1 = _a.sent();
                libs.log(e_1, PROVIDER, 'ERROR GET');
                return [2];
            case 13: return [2];
        }
    });
}); };
