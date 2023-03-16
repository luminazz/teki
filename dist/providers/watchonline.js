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
    var PROVIDER, DOMAIN, urlSearch, parseSearch_1, LINK_DETAIL_1, id_1, parseDetail_1, parseDetail, idMovie, hrefDirect, directData, directQuality, directItem, quality, subs, _i, _a, subItem, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'WatchOnline';
                DOMAIN = "https://dev.watchonline.ag";
                urlSearch = "".concat(DOMAIN, "/movies/search/?like=").concat(libs.url_slug_search(movieInfo, '%20'));
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/shows/search/?like=").concat(libs.url_slug_search(movieInfo, '%20'));
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 8, , 9]);
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch_1 = _b.sent();
                libs.log({
                    length: parseSearch_1('.movie-card').length,
                    urlSearch: urlSearch,
                }, PROVIDER, 'SEARCH LENGTH');
                LINK_DETAIL_1 = '';
                parseSearch_1('.movie-card').each(function (key, item) {
                    var title = parseSearch_1(item).find('.movie-card-title h3').text();
                    var year = parseSearch_1(item).find('.movie-stats__item span').first().text();
                    var href = parseSearch_1(item).find('.movie-card-side').find('a').attr('href');
                    libs.log({
                        href: href,
                        title: title,
                        year: year
                    }, PROVIDER, 'SEARCH INFO');
                    if (href) {
                        href = "".concat(DOMAIN).concat(href);
                    }
                    var type = 'movie';
                    if (href.indexOf('/shows/') !== -1) {
                        type = 'tv';
                    }
                    libs.log({ type: type }, PROVIDER, 'TYPE');
                    if (libs.string_matching_title(movieInfo, title)) {
                        if (movieInfo.type == 'movie' && type == 'movie' && year == movieInfo.year) {
                            LINK_DETAIL_1 = href;
                        }
                        if (movieInfo.type == 'tv' && type == 'tv') {
                            LINK_DETAIL_1 = href;
                        }
                    }
                });
                libs.log({
                    LINK_DETAIL: LINK_DETAIL_1
                }, PROVIDER, 'LINK_DETAIL');
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                id_1 = '';
                if (!(movieInfo.type == 'tv')) return [3, 4];
                return [4, libs.request_get(LINK_DETAIL_1, {}, true)];
            case 3:
                parseDetail_1 = _b.sent();
                libs.log({
                    length: parseDetail_1('.episodes__item').length,
                }, PROVIDER, 'TV LENGTH');
                parseDetail_1('.episodes__item').each(function (key, item) {
                    var season = parseDetail_1(item).attr('data-season');
                    var episode = parseDetail_1(item).attr('data-episode');
                    var idTv = parseDetail_1(item).attr('data-id-episode');
                    libs.log({
                        season: season,
                        episode: episode,
                        idTv: idTv
                    }, PROVIDER, 'IDTV');
                    if (movieInfo.season == Number(season) && movieInfo.episode == Number(episode)) {
                        id_1 = idTv;
                    }
                });
                return [3, 6];
            case 4: return [4, libs.request_get(LINK_DETAIL_1, {})];
            case 5:
                parseDetail = _b.sent();
                idMovie = parseDetail.match(/id_movie *\: *([0-9]+)/i);
                idMovie = idMovie ? idMovie[1] : 0;
                libs.log({
                    idMovie: idMovie
                }, PROVIDER, 'IV_MOVIE');
                if (!idMovie) {
                    return [2];
                }
                id_1 = idMovie;
                _b.label = 6;
            case 6:
                if (!id_1) {
                    return [2];
                }
                hrefDirect = "".concat(DOMAIN, "/api/v1/security/episode-access?id=").concat(id_1);
                return [4, libs.request_get(hrefDirect, {})];
            case 7:
                directData = _b.sent();
                libs.log({
                    hrefDirect: hrefDirect,
                    directData: directData
                }, PROVIDER, 'DIRECT DATA');
                directQuality = [];
                for (directItem in (directData.streams || {})) {
                    quality = Number(directItem.replace('p', ''));
                    libs.log({
                        quality: quality,
                        directItem: directItem
                    }, PROVIDER, 'DIRECT QUALITY');
                    directQuality.push({
                        file: directData.streams[directItem],
                        quality: quality,
                    });
                }
                subs = [];
                for (_i = 0, _a = (directData.subtitles || []); _i < _a.length; _i++) {
                    subItem = _a[_i];
                    subs.push({
                        file: _.startsWith(subItem.url, '/') ? "".concat(DOMAIN).concat(subItem.url) : subItem.url,
                        label: subItem.language,
                        kind: 'captions'
                    });
                }
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, subs, directQuality);
                return [3, 9];
            case 8:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 9];
            case 9: return [2, true];
        }
    });
}); };
