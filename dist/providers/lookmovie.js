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
    var PROVIDER, HOST, DOMAIN, userAgent, LINK_DETAIL, id, urlSearch, parseSearch, hash, expires, idFilm, movieID, seasonID, seasonData, directUrl, parseDirect, directQuality, item, quality, tracks, _i, _a, item, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'LOOKMOVIE';
                HOST = 'LookMovie';
                DOMAIN = "https://lookmovie.foundation";
                userAgent = libs.request_getRandomUserAgent();
                LINK_DETAIL = '';
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                id = movieInfo.imdb_id.replace('tt', '');
                urlSearch = "".concat(DOMAIN, "/movies/play/").concat(id, "-").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year);
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/shows/play/").concat(id, "-").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {})];
            case 2:
                parseSearch = _b.sent();
                libs.log({ parseSearch: parseSearch }, PROVIDER, 'PARSE SEARCH');
                hash = parseSearch.match(/hash *\: *\'([^\']+)/i);
                hash = hash ? hash[1] : '';
                if (!hash) {
                    hash = parseSearch.match(/hash *\: *\"([^\"]+)/i);
                    hash = hash ? hash[1] : '';
                }
                expires = parseSearch.match(/expires *\: *([0-9]+)/i);
                expires = expires ? expires[1] : 0;
                idFilm = '';
                if (movieInfo.type == 'movie') {
                    movieID = parseSearch.match(/id_movie:\s*(\d+)/i);
                    idFilm = movieID ? movieID[1] : '';
                }
                else {
                    seasonID = parseSearch.match(/window\.seasons *\= *\'([^\']+)/i);
                    seasonID = seasonID ? seasonID[1] : '';
                    if (!seasonID) {
                        return [2];
                    }
                    seasonID = seasonID.replace(/\\*/ig, '');
                    seasonData = JSON.parse(seasonID);
                    idFilm = seasonData[movieInfo.season]['episodes'][movieInfo.episode]['id_episode'];
                }
                libs.log({ hash: hash, expires: expires }, PROVIDER, 'HASH EXPIRES');
                if (!hash || !expires || !idFilm) {
                    return [2];
                }
                directUrl = '';
                if (movieInfo.type == 'movie') {
                    directUrl = "".concat(DOMAIN, "/api/v1/security/movie-access?id_movie=").concat(idFilm, "&hash=").concat(hash, "&expires=").concat(expires);
                }
                else {
                    directUrl = "".concat(DOMAIN, "/api/v1/security/episode-access?id_episode=").concat(idFilm, "&hash=").concat(hash, "&expires=").concat(expires);
                }
                libs.log({ directUrl: directUrl }, PROVIDER, 'DIRECT URL');
                return [4, libs.request_get(directUrl, {
                        Referer: urlSearch,
                        'X-Requested-With': 'XMLHttpRequest'
                    })];
            case 3:
                parseDirect = _b.sent();
                libs.log({ parseDirect: parseDirect }, PROVIDER, 'PARSE DIRECT');
                directQuality = [];
                for (item in parseDirect.streams) {
                    quality = Number(item.replace('p', ''));
                    directQuality.push({
                        quality: quality,
                        file: parseDirect.streams[item]
                    });
                }
                tracks = [];
                for (_i = 0, _a = parseDirect.subtitles; _i < _a.length; _i++) {
                    item = _a[_i];
                    tracks.push({
                        file: "".concat(DOMAIN).concat(item.file),
                        kind: 'captions',
                        label: item.language
                    });
                }
                libs.log({ directQuality: directQuality, tracks: tracks }, PROVIDER, 'TRACSKS DIRECT');
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, directQuality);
                return [3, 5];
            case 4:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 5];
            case 5: return [2];
        }
    });
}); };
