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
    var PROVIDER, DOMAIN, urlSearch, resultSearch, MEDIA_ID, EPISODE_ID, _i, _a, searchItem, id, image, title, type, url, year, filmType, urlInfo, resultInfo, listEpisodeData, _b, listEpisodeData_1, episodeItem, urlWatch, resultWatch, listDirectData, tracks, directQuality, _c, listDirectData_1, directItem, quality, url, _d, _e, trackItem;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'LFLIXHQ';
                DOMAIN = "https://proxy-02.no-cors-proxy.workers.dev/?destination=";
                urlSearch = "".concat(DOMAIN, "https://api.consumet.org/movies/flixhq/").concat(libs.url_slug_search(movieInfo, '+'));
                return [4, libs.request_get(urlSearch, {})];
            case 1:
                resultSearch = _f.sent();
                MEDIA_ID = '';
                EPISODE_ID = '';
                libs.log({ resultSearch: resultSearch }, PROVIDER, 'RESULT SEARCH');
                for (_i = 0, _a = resultSearch.results; _i < _a.length; _i++) {
                    searchItem = _a[_i];
                    id = searchItem.id;
                    image = searchItem.image;
                    title = searchItem.title;
                    type = searchItem.type;
                    url = searchItem.url;
                    year = Number(searchItem.releaseDate);
                    filmType = 'tv';
                    if (type == 'Movie') {
                        filmType = 'movie';
                    }
                    libs.log({ id: id, image: image, title: title, type: type, url: url, year: year, searchItem: searchItem, compare: libs.string_matching_title(movieInfo, title), filmType: filmType, movieInfo: movieInfo }, PROVIDER, 'INFO');
                    if (movieInfo.type != filmType) {
                        continue;
                    }
                    if (libs.string_matching_title(movieInfo, title)) {
                        if (movieInfo.type == 'tv') {
                            MEDIA_ID = id;
                        }
                        else if (movieInfo.year == year && movieInfo.type == 'movie') {
                            MEDIA_ID = id;
                        }
                    }
                }
                libs.log({ MEDIA_ID: MEDIA_ID }, PROVIDER, 'MEDIA_ID');
                if (!MEDIA_ID) {
                    return [2];
                }
                urlInfo = "".concat(DOMAIN, "https://api.consumet.org/movies/flixhq/info?id=").concat(MEDIA_ID);
                return [4, libs.request_get(urlInfo, {})];
            case 2:
                resultInfo = _f.sent();
                libs.log({ resultInfo: resultInfo }, PROVIDER, 'RESULT_INFO');
                listEpisodeData = resultInfo.episodes || [];
                if (!listEpisodeData.length) {
                    return [2];
                }
                if (movieInfo.type == 'movie') {
                    EPISODE_ID = listEpisodeData[0].id;
                }
                else {
                    for (_b = 0, listEpisodeData_1 = listEpisodeData; _b < listEpisodeData_1.length; _b++) {
                        episodeItem = listEpisodeData_1[_b];
                        if (episodeItem.number == movieInfo.episode && episodeItem.season == movieInfo.season) {
                            EPISODE_ID = episodeItem.id;
                        }
                    }
                }
                if (!EPISODE_ID) {
                    return [2];
                }
                urlWatch = "".concat(DOMAIN).concat(encodeURIComponent("https://api.consumet.org/movies/flixhq/watch?episodeId=".concat(EPISODE_ID, "&mediaId=").concat(MEDIA_ID)));
                return [4, libs.request_get(urlWatch, {})];
            case 3:
                resultWatch = _f.sent();
                libs.log({
                    urlWatch: urlWatch,
                    resultWatch: resultWatch,
                    EPISODE_ID: EPISODE_ID
                }, PROVIDER, 'RESULT_WATCH');
                listDirectData = resultWatch.sources || [];
                tracks = [];
                directQuality = [];
                for (_c = 0, listDirectData_1 = listDirectData; _c < listDirectData_1.length; _c++) {
                    directItem = listDirectData_1[_c];
                    if (!directItem.quality || directItem.quality == 'auto') {
                        continue;
                    }
                    quality = Number(directItem.quality.replace('p'));
                    url = directItem.url;
                    if (!url) {
                        continue;
                    }
                    if (url.indexOf('.mkv') != -1) {
                        continue;
                    }
                    directQuality.push({
                        file: url,
                        quality: quality
                    });
                }
                for (_d = 0, _e = resultWatch.subtitles; _d < _e.length; _d++) {
                    trackItem = _e[_d];
                    tracks.push({
                        file: trackItem.url,
                        label: trackItem.lang,
                        kind: 'captions'
                    });
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                if (!directQuality.length) {
                    return [2];
                }
                libs.embed_callback(directQuality[0].file || '', PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, directQuality);
                return [2, true];
        }
    });
}); };
