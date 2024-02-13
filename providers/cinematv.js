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
    var PROVIDER, DOMAIN, id, urlSearch, textSearch, htmlSearch, hash, expires, episodeID, idm, parseSeason, parseEpisode, _i, parseEpisode_1, item, videoUrl, parseDetail, tracks, directQuality, _a, _b, item, trackUrl, item, quality, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                PROVIDER = 'CINEMATV';
                DOMAIN = "https://seo.lookmovie2.to";
                _c.label = 1;
            case 1:
                _c.trys.push([1, 5, , 6]);
                id = movieInfo.imdb_id.replace('tt', '');
                urlSearch = "".concat(DOMAIN, "/movies/play/").concat(id, "-").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year);
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/shows/play/").concat(id, "-").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year);
                }
                libs.log({ id: id, urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, fetch(urlSearch, {
                        headers: {
                            'x-requested-with': 'XMLHttpRequest'
                        }
                    })];
            case 2:
                textSearch = _c.sent();
                return [4, textSearch.text()];
            case 3:
                htmlSearch = _c.sent();
                hash = htmlSearch.match(/hash *\: *\"([^\"]+)/i);
                hash = hash ? hash[1] : '';
                if (!hash) {
                    hash = htmlSearch.match(/hash *\: *\'([^\']+)/i);
                    hash = hash ? hash[1] : '';
                }
                expires = htmlSearch.match(/expires *\: *([0-9]+)/i);
                expires = expires ? expires[1] : 0;
                libs.log({ hash: hash, expires: expires }, PROVIDER, 'HASH AND EXPIRES');
                if (!hash || !expires) {
                    return [2];
                }
                episodeID = "";
                if (movieInfo.type == 'movie') {
                    idm = htmlSearch.match(/id_movie *\: *([^\,]+)/i);
                    idm = idm ? idm[1] : "";
                    episodeID = idm;
                }
                else {
                    parseSeason = htmlSearch.match(/seasons: ([^\]]+)/i);
                    parseSeason = parseSeason ? parseSeason[1] : "";
                    libs.log({ parseSeason: parseSeason }, PROVIDER, 'PARSE SEASON');
                    if (!parseSeason) {
                        return [2];
                    }
                    parseEpisode = [];
                    eval("parseEpisode = ".concat(parseSeason, "]"));
                    libs.log({ parseEpisode: parseEpisode }, PROVIDER, 'parseEpisode');
                    for (_i = 0, parseEpisode_1 = parseEpisode; _i < parseEpisode_1.length; _i++) {
                        item = parseEpisode_1[_i];
                        if (item.episode == movieInfo.episode && item.season == movieInfo.season) {
                            episodeID = item.id_episode;
                            break;
                        }
                    }
                }
                libs.log({ idm: idm }, PROVIDER, 'IDM');
                if (!episodeID) {
                    return [2];
                }
                videoUrl = "".concat(DOMAIN, "/api/v1/security/movie-access?id_movie=").concat(episodeID, "&hash=").concat(hash, "&expires=").concat(expires);
                if (movieInfo.type == 'tv') {
                    videoUrl = "".concat(DOMAIN, "/api/v1/security/episode-access?id_episode=").concat(episodeID, "&hash=").concat(hash, "&expires=").concat(expires);
                }
                return [4, libs.request_get(videoUrl)];
            case 4:
                parseDetail = _c.sent();
                libs.log({ parseDetail: parseDetail }, PROVIDER, 'PARSE DETAIL');
                tracks = [];
                directQuality = [];
                for (_a = 0, _b = parseDetail.subtitles; _a < _b.length; _a++) {
                    item = _b[_a];
                    trackUrl = item.url;
                    if (_.startsWith(trackUrl, "/")) {
                        trackUrl = "".concat(DOMAIN).concat(trackUrl);
                    }
                    tracks.push({
                        file: trackUrl,
                        kind: 'captions',
                        label: item.language
                    });
                }
                for (item in parseDetail.streams) {
                    quality = item.match(/([0-9]+)/i);
                    quality = quality ? Number(quality[1]) : 720;
                    directQuality.push({
                        file: parseDetail.streams[item],
                        quality: quality
                    });
                }
                libs.log({ tracks: tracks, directQuality: directQuality }, PROVIDER, 'TRACKS DIRECT');
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, directQuality);
                return [3, 6];
            case 5:
                e_1 = _c.sent();
                libs.log({ e: e_1 }, PROVIDER);
                return [3, 6];
            case 6: return [2, true];
        }
    });
}); };
