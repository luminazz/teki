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
    var PROVIDER, DOMAIN, lang, filmInfo_1, urlSearch, titleSlug_1, parseSearch_1, LINK_DETAIL_1, parseTv_1, linkFirstEpisode, LINK_DETAIL_TV_1, parseDetailTv, id, urlAjaxDetail, headerRequest, body, parseDetail, filmId, directUrl1, directUrl2, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'Phimmoichills';
                DOMAIN = "https://phimmoichills.net";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 12, , 13]);
                lang = 'vi';
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
                urlSearch = "".concat(DOMAIN, "/tim-kiem/").concat(libs.url_slug_search(movieInfo, '+'), "/");
                titleSlug_1 = libs.url_slug_search(movieInfo, '-');
                libs.log({ urlSearch: urlSearch, filmInfo: filmInfo_1 }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 6:
                parseSearch_1 = _a.sent();
                LINK_DETAIL_1 = '';
                libs.log({
                    urlSearch: urlSearch,
                    filmInfo: filmInfo_1,
                    titleSlug: titleSlug_1,
                    length: parseSearch_1('.list-film .item').length,
                }, PROVIDER, 'SEARCH INFO');
                parseSearch_1('.list-film .item').each(function (key, item) {
                    var title = parseSearch_1(item).find('a h3').text();
                    var href = parseSearch_1(item).find('a').attr('href');
                    var label = parseSearch_1(item).find('.label').text();
                    var type = 'movie';
                    var image = parseSearch_1(item).find('a img').attr('src');
                    if (label.toLowerCase().indexOf('tập') !== -1 || label.toLowerCase().indexOf('hoàn tất') !== -1) {
                        type = 'tv';
                    }
                    var movieTitle = filmInfo_1.title;
                    if (movieInfo.type == 'tv') {
                        movieTitle = "".concat(filmInfo_1.title, " ").concat(Number(movieInfo.season));
                    }
                    libs.log({
                        title: title,
                        href: href,
                        label: label,
                        type: type,
                        movieTitle: movieTitle,
                        image: image,
                        matching: filmInfo_1.title.toLowerCase() == title.toLowerCase(),
                    }, PROVIDER, 'SEARCH INFO');
                    if (title && href && !LINK_DETAIL_1 && type) {
                        if (type == 'movie' && movieInfo.type == 'movie') {
                            if (libs.string_matching_title({ title: filmInfo_1.title }, title) || image.indexOf(titleSlug_1) != -1) {
                                LINK_DETAIL_1 = href;
                            }
                        }
                        if (type == 'tv' && movieInfo.type == 'tv') {
                            if (libs.string_matching_title({ title: movieTitle }, title)) {
                                LINK_DETAIL_1 = href;
                            }
                            if (libs.string_matching_title({ title: filmInfo_1.title }, title) && movieInfo.season == 1) {
                                LINK_DETAIL_1 = href;
                            }
                            if (image.indexOf("".concat(titleSlug_1, "-").concat(movieInfo.season)) != -1) {
                                LINK_DETAIL_1 = href;
                            }
                            else if (image.indexOf("".concat(titleSlug_1, "-season-").concat(movieInfo.season)) != -1) {
                                LINK_DETAIL_1 = href;
                            }
                            else if (image.indexOf("".concat(titleSlug_1, ".jpg")) && movieInfo.season == 1) {
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
                return [4, libs.request_get(LINK_DETAIL_1, {}, true)];
            case 7:
                parseTv_1 = _a.sent();
                linkFirstEpisode = parseTv_1('.film-info .icon-play').attr('href');
                if (!(movieInfo.type === 'tv')) return [3, 9];
                LINK_DETAIL_TV_1 = '';
                return [4, libs.request_get(linkFirstEpisode, {}, true)];
            case 8:
                parseDetailTv = _a.sent();
                libs.log({
                    length: parseDetailTv('#list_episodes li').length,
                }, PROVIDER, 'TV LENGTH');
                parseDetailTv('#list_episodes li').each(function (key, item) {
                    var hrefTv = parseTv_1(item).find('a').attr('href');
                    var episode = parseTv_1(item).find('a').text();
                    episode = episode.match(/tập *([0-9]+)/i);
                    episode = episode ? episode[1] : 0;
                    libs.log({
                        episode: episode,
                        hrefTv: hrefTv
                    }, PROVIDER, 'EPISODE');
                    if (episode == movieInfo.episode) {
                        LINK_DETAIL_TV_1 = hrefTv;
                    }
                });
                if (!LINK_DETAIL_TV_1) {
                    return [2];
                }
                LINK_DETAIL_1 = LINK_DETAIL_TV_1;
                return [3, 10];
            case 9:
                LINK_DETAIL_1 = linkFirstEpisode;
                _a.label = 10;
            case 10:
                id = LINK_DETAIL_1.match(/-pm([0-9]+)$/i);
                id = id ? id[1] : '';
                libs.log({
                    id: id,
                }, PROVIDER, 'ID DETAIL');
                if (!id) {
                    return [2];
                }
                urlAjaxDetail = "".concat(DOMAIN, "/pmplayer.php");
                headerRequest = {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
                    'x-requested-with': 'XMLHttpRequest',
                };
                body = "qcao=".concat(id);
                return [4, libs.request_post(urlAjaxDetail, headerRequest, body)];
            case 11:
                parseDetail = _a.sent();
                filmId = parseDetail.match(/iniPlayers\(\"([^\"]+)/i);
                filmId = filmId ? filmId[1] : '';
                libs.log({
                    urlAjaxDetail: urlAjaxDetail,
                    filmId: filmId,
                    id: id
                }, PROVIDER, 'FILM ID');
                if (!filmId) {
                    return [2];
                }
                directUrl1 = "https://so-trym.topphimmoi.org/raw/".concat(filmId, "/index.m3u8");
                libs.embed_callback(directUrl1, PROVIDER, PROVIDER, 'Hls', callback, 1, [], []);
                directUrl2 = "https://dash.megacdn.xyz/raw/".concat(filmId, "/index.m3u8");
                libs.embed_callback(directUrl2, PROVIDER, PROVIDER, 'Hls', callback, 1, [], []);
                return [2, true];
            case 12:
                e_1 = _a.sent();
                libs.log(e_1, PROVIDER, 'ERROR GET');
                return [2];
            case 13: return [2];
        }
    });
}); };
