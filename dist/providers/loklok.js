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
    var PROVIDER, DOMAIN, urlSearch, headerLokLok, searchInfo, FILM_ID, _i, _a, searchItem, title, year, type, season, id, urlGetInfo, filmInfoData, episodeInfo, _b, episodeInfo_1, episodeItem, sources, _c, _d, defItem, urlPreview, previewData;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                PROVIDER = 'ZLOKLOK';
                DOMAIN = "https://ga-mobile-api.loklok.tv";
                urlSearch = DOMAIN + "/cms/app/search/v1/searchWithKeyWord";
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                headerLokLok = {
                    versioncode: 11,
                    lang: 'en',
                    clienttype: 'ios_jike_default',
                    'sec-ch-ua-platform': '"macOS"',
                };
                return [4, libs.request_post(urlSearch, {
                        accept: 'application/json, text/plain, */*',
                        'content-type': 'application/json',
                        versioncode: 11,
                        lang: 'en',
                        clienttype: 'ios_jike_default',
                        'sec-ch-ua-platform': '"macOS"',
                    }, {
                        searchKeyWord: libs.url_slug_search(movieInfo),
                        searchType: "",
                        size: 200,
                        sort: "",
                    })];
            case 1:
                searchInfo = _e.sent();
                libs.log({ searchInfo: searchInfo }, PROVIDER, 'SEARCH INFO');
                FILM_ID = '';
                for (_i = 0, _a = searchInfo.data.searchResults; _i < _a.length; _i++) {
                    searchItem = _a[_i];
                    title = searchItem.name;
                    year = searchItem.releaseTime;
                    type = 'movie';
                    season = title.match(/season *([0-9]+)/i);
                    season = season ? season[1] : 0;
                    title = title.replace(/season *[0-9]+/i, '');
                    if (season) {
                        type = 'tv';
                    }
                    id = searchItem.id;
                    libs.log({ title: title, year: year, type: type, season: season, id: id }, PROVIDER, 'SEARCH ITEM');
                    if (libs.string_matching_title(movieInfo, title)) {
                        if (movieInfo.type == 'movie' && year == movieInfo.year && type == 'movie') {
                            FILM_ID = id;
                        }
                        else if (movieInfo.type == 'tv' && type == 'tv' && season == movieInfo.season) {
                            FILM_ID = id;
                        }
                    }
                }
                libs.log({ FILM_ID: FILM_ID }, PROVIDER, 'FILM ID');
                if (!FILM_ID) {
                    return [2];
                }
                urlGetInfo = DOMAIN + "/cms/app/movieDrama/get?id=" + FILM_ID + "&category=" + (movieInfo.type == 'tv' ? 1 : 0);
                return [4, libs.request_get(urlGetInfo, headerLokLok)];
            case 2:
                filmInfoData = _e.sent();
                libs.log({ filmInfoData: filmInfoData }, PROVIDER, 'FILM INFO DATA');
                if (!filmInfoData.data) {
                    return [2];
                }
                episodeInfo = filmInfoData.data.episodeVo || [];
                _b = 0, episodeInfo_1 = episodeInfo;
                _e.label = 3;
            case 3:
                if (!(_b < episodeInfo_1.length)) return [3, 9];
                episodeItem = episodeInfo_1[_b];
                if (!(movieInfo.type == 'movie' ||
                    (movieInfo.type == 'tv' && movieInfo.episode == episodeItem.seriesNo))) return [3, 8];
                sources = [];
                _c = 0, _d = episodeItem.definitionList;
                _e.label = 4;
            case 4:
                if (!(_c < _d.length)) return [3, 7];
                defItem = _d[_c];
                urlPreview = DOMAIN + "/cms/app/media/previewInfo?category=" + (movieInfo.type === 'tv' ? 1 : 0) + "&contentId=" + FILM_ID + "&episodeId=" + episodeItem.id + "&definition=" + defItem.code;
                return [4, libs.request_get(urlPreview, headerLokLok)];
            case 5:
                previewData = _e.sent();
                libs.log({ previewData: previewData, urlPreview: urlPreview }, PROVIDER, 'PREVIEW DATA');
                if (!previewData.data) {
                    return [3, 6];
                }
                sources.push({
                    file: previewData.data.mediaUrl,
                    quality: defItem.description.replace('P', ''),
                });
                _e.label = 6;
            case 6:
                _c++;
                return [3, 4];
            case 7:
                libs.log({ sources: sources }, PROVIDER, 'SOURCES');
                if (sources.length > 0) {
                    libs.embed_callback(sources[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], sources);
                }
                _e.label = 8;
            case 8:
                _b++;
                return [3, 3];
            case 9: return [2, true];
        }
    });
}); };
