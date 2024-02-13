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
    var PROVIDER, DOMAIN, headers, titleSlug, urlSearch, body, VIDEOID, dataSearch, _i, _a, item, TVID, dataSearch, _b, _c, item, urlSeason, dataSeason, SEASONID, _d, dataSeason_1, item, urlEpisode, dataEpisode, _e, dataEpisode_1, item, directUrl, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'Jump1';
                DOMAIN = "https://ca.jump1.net";
                _f.label = 1;
            case 1:
                _f.trys.push([1, 9, , 10]);
                headers = {
                    referer: 'https://jump1.net/',
                    'content-type': 'application/json'
                };
                titleSlug = "".concat(libs.url_slug_search(movieInfo), "-").concat(movieInfo.year);
                urlSearch = "";
                if (movieInfo.type == 'movie') {
                    urlSearch = "".concat(DOMAIN, "/api/movies");
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/api/shows");
                }
                body = { "filters": [{ "type": "slug", "args": { "slugs": ["".concat(libs.url_slug_search(movieInfo), "-").concat(movieInfo.year)] } }], "sort": "addedRecent", "skip": 0, "limit": 100 };
                VIDEOID = '';
                if (!(movieInfo.type == 'movie')) return [3, 3];
                return [4, libs.request_post(urlSearch, headers, body)];
            case 2:
                dataSearch = _f.sent();
                libs.log({ dataSearch: dataSearch }, PROVIDER, 'DATA SEARCH MOVIE');
                for (_i = 0, _a = dataSearch.movies; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (item.id == movieInfo.tmdb_id) {
                        VIDEOID = item.videoId;
                    }
                }
                return [3, 7];
            case 3:
                TVID = '';
                return [4, libs.request_post(urlSearch, headers, body)];
            case 4:
                dataSearch = _f.sent();
                for (_b = 0, _c = dataSearch.shows; _b < _c.length; _b++) {
                    item = _c[_b];
                    if (titleSlug == item.slug) {
                        TVID = item.id;
                    }
                }
                libs.log({ TVID: TVID }, PROVIDER, 'TVID');
                if (!TVID) {
                    return [2];
                }
                urlSeason = "".concat(DOMAIN, "/api/shows/").concat(TVID, "/seasons");
                return [4, libs.request_get(urlSeason, headers)];
            case 5:
                dataSeason = _f.sent();
                libs.log({ dataSeason: dataSeason }, PROVIDER, 'DATA SEASON');
                SEASONID = '';
                for (_d = 0, dataSeason_1 = dataSeason; _d < dataSeason_1.length; _d++) {
                    item = dataSeason_1[_d];
                    if (item.seasonNumber == movieInfo.season) {
                        SEASONID = item.id;
                    }
                }
                libs.log({ SEASONID: SEASONID }, PROVIDER, 'SEASON ID');
                if (!SEASONID) {
                    return [2];
                }
                urlEpisode = "".concat(DOMAIN, "/api/shows/seasons/").concat(SEASONID, "/episodes");
                return [4, libs.request_get(urlEpisode, headers)];
            case 6:
                dataEpisode = _f.sent();
                libs.log({ dataEpisode: dataEpisode }, PROVIDER, 'DATA EPISODE');
                for (_e = 0, dataEpisode_1 = dataEpisode; _e < dataEpisode_1.length; _e++) {
                    item = dataEpisode_1[_e];
                    if (item.episodeNumber == movieInfo.episode) {
                        libs.log({ videoId: item.videoId }, PROVIDER, 'EPISODE VIDEOID');
                        VIDEOID = item.videoId;
                    }
                }
                _f.label = 7;
            case 7:
                libs.log({ VIDEOID: VIDEOID }, PROVIDER, 'VIDEO_ID');
                if (!VIDEOID) {
                    return [2];
                }
                directUrl = "".concat(DOMAIN, "/hls/").concat(VIDEOID, "/master.m3u8?ts=").concat(Date.now());
                libs.log({ directUrl: directUrl }, PROVIDER, 'DIRECT URL');
                return [4, libs.embed_redirect(directUrl, 1080, movieInfo, PROVIDER, callback, undefined, [])];
            case 8:
                _f.sent();
                return [3, 10];
            case 9:
                e_1 = _f.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 10];
            case 10: return [2, true];
        }
    });
}); };
