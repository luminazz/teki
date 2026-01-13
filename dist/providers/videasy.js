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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    var PROVIDER, DOMAIN, headers, sources, _i, sources_1, item, url, dataDetail, textDetail, urlDecrypt, body, random, decryptData, directQuality, tracks, _a, _b, itemDirect, quality, _c, _d, itemSubtitle, lang, errorSource_1, e_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                PROVIDER = 'AVideasy';
                DOMAIN = "https://api.videasy.net";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': "".concat(DOMAIN, "/"),
                    "origin": "".concat(DOMAIN)
                };
                _e.label = 1;
            case 1:
                _e.trys.push([1, 10, , 11]);
                sources = ["myflixerzupcloud"];
                _i = 0, sources_1 = sources;
                _e.label = 2;
            case 2:
                if (!(_i < sources_1.length)) return [3, 9];
                item = sources_1[_i];
                _e.label = 3;
            case 3:
                _e.trys.push([3, 7, , 8]);
                url = "https://api.videasy.net/myflixerzupcloud/sources-with-title?mediaType=".concat(movieInfo.type, "&year=").concat(movieInfo.year, "&tmdbId=").concat(movieInfo.tmdb_id, "&imdbId=").concat(movieInfo.imdb_id, "&title=").concat(encodeURIComponent(movieInfo.title));
                if (movieInfo.type == "tv") {
                    url += "&episodeId=".concat(movieInfo.episode, "&seasonId=").concat(movieInfo.season);
                }
                return [4, fetch(url, {
                        headers: headers
                    })];
            case 4:
                dataDetail = _e.sent();
                return [4, dataDetail.text()];
            case 5:
                textDetail = _e.sent();
                libs.log({ textDetail: textDetail }, PROVIDER, 'TEXT DETAIL');
                if (!textDetail) {
                    return [3, 8];
                }
                urlDecrypt = "https://enc-dec.app/api/dec-videasy";
                body = {
                    text: textDetail,
                    id: movieInfo.tmdb_id
                };
                random = _.random(0, 1000000);
                return [4, libs.request_post(urlDecrypt, {
                        "content-type": "application/json",
                        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
                        Referer: "https://vidsrc-embed.ru/",
                    }, body)];
            case 6:
                decryptData = _e.sent();
                libs.log({ decryptData: decryptData }, PROVIDER, 'DECRYPT DATA');
                if (!decryptData || !decryptData.result.sources) {
                    return [3, 8];
                }
                directQuality = [];
                tracks = [];
                for (_a = 0, _b = decryptData.result.sources; _a < _b.length; _a++) {
                    itemDirect = _b[_a];
                    quality = itemDirect.quality;
                    quality = quality.match(/([0-9]+)/i);
                    quality = quality ? Number(quality[1]) : 1080;
                    directQuality.push({
                        file: itemDirect.url,
                        quality: quality,
                    });
                }
                for (_c = 0, _d = decryptData.result.subtitles; _c < _d.length; _c++) {
                    itemSubtitle = _d[_c];
                    lang = itemSubtitle.language;
                    tracks.push({
                        file: itemSubtitle.url,
                        kind: 'captions',
                        label: lang
                    });
                }
                if (directQuality.length == 0) {
                    return [3, 8];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({ directQuality: directQuality, tracks: tracks }, PROVIDER, "FINAL QUALITY");
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, directQuality, headers);
                return [3, 8];
            case 7:
                errorSource_1 = _e.sent();
                return [3, 8];
            case 8:
                _i++;
                return [3, 2];
            case 9: return [2];
            case 10:
                e_1 = _e.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 11];
            case 11: return [2];
        }
    });
}); };
