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
    var PROVIDER, DOMAIN, headers, urlSearch, parseSearch, DETAIL_HREF, _i, _a, item, _b, _c, b, _d, b_1, s, svideo, season, episode, parseDetail, parseQuality, directQuality, _e, parseQuality_1, item, quality, direct, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'UStreamflix';
                DOMAIN = "https://streamflix.website";
                _f.label = 1;
            case 1:
                _f.trys.push([1, 4, , 5]);
                headers = {
                    "Authorization": "Bearer 44d784c55e9a1e3dbb586f24b18b1cbcd1521673bd6178ef385890d2f989681fe22d05e291e2e0f03fce99cbc50cd520219e52cc6e30c944a559daf53a129af18349ec98f6a0e4e66b8d370a354f4f7fbd49df0ab806d533a3db71eecc7f75131a59ce8cffc5e0cc38e8af5919c23c0d904fbe31995308f065f0ff9cd1eda488",
                };
                urlSearch = "".concat(DOMAIN, "/api/mains?filters[title][$contains]=").concat(movieInfo.title);
                return [4, libs.request_get(urlSearch, headers, false)];
            case 2:
                parseSearch = _f.sent();
                libs.log({ parseSearch: parseSearch, urlSearch: urlSearch }, PROVIDER, 'PARSE SEARCH');
                DETAIL_HREF = '';
                for (_i = 0, _a = parseSearch.data; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (item.attributes.contentId != movieInfo.tmdb_id) {
                        continue;
                    }
                    if (movieInfo.type == 'movie') {
                        if (item.attributes.video) {
                            DETAIL_HREF = item.attributes.video;
                        }
                    }
                    else {
                        if (item.attributes.seriess.length > 0) {
                            for (_b = 0, _c = item.attributes.seriess; _b < _c.length; _b++) {
                                b = _c[_b];
                                for (_d = 0, b_1 = b; _d < b_1.length; _d++) {
                                    s = b_1[_d];
                                    libs.log({ s: s }, PROVIDER, 'DETAIL S');
                                    svideo = s.svideos;
                                    season = svideo.match(/\/season *([0-9]+)\//i);
                                    season = season ? season[1] : 0;
                                    episode = svideo.match(/\/season *[0-9]+\/e([0-9]+)\//i);
                                    episode = episode ? episode[1] : 0;
                                    libs.log({ season: season, episode: episode }, PROVIDER, 'SEASON');
                                    if (movieInfo.season == season && episode == movieInfo.episode) {
                                        DETAIL_HREF = svideo;
                                    }
                                }
                            }
                        }
                    }
                }
                libs.log({ DETAIL_HREF: DETAIL_HREF }, PROVIDER, 'DETAIL HREF');
                if (!DETAIL_HREF) {
                    return [2];
                }
                if (DETAIL_HREF.indexOf('.mkv') != -1) {
                    return [2];
                }
                DETAIL_HREF = "https://watchfree.blob.core.windows.net/watchfree" + DETAIL_HREF.replace(/ /g, '%20');
                libs.log({ DETAIL_HREF: DETAIL_HREF }, PROVIDER, 'DETAIL HREF');
                return [4, libs.request_get(DETAIL_HREF, {}, false)];
            case 3:
                parseDetail = _f.sent();
                parseQuality = parseDetail.match(/video[0-9]+\/main\.m3u8/ig);
                libs.log({ parseQuality: parseQuality }, PROVIDER, 'PARSE QUALITY');
                directQuality = [];
                for (_e = 0, parseQuality_1 = parseQuality; _e < parseQuality_1.length; _e++) {
                    item = parseQuality_1[_e];
                    quality = item.match(/video([0-9]+)/i);
                    quality = quality ? Number(quality[1]) : 1080;
                    direct = DETAIL_HREF.replace('master.m3u8', item);
                    directQuality.push({
                        quality: quality,
                        file: direct
                    });
                }
                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality);
                return [3, 5];
            case 4:
                e_1 = _f.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 5];
            case 5: return [2];
        }
    });
}); };
