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
    function parseM3U8(content) {
        var lines = content.split('\n').filter(function (line) { return line.trim() !== ''; });
        var result = [];
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('#EXT-X-STREAM-INF:')) {
                var resolutionMatch = lines[i].match(/RESOLUTION=(\d+)x(\d+)/);
                if (resolutionMatch && lines[i + 1]) {
                    var quality = parseInt(resolutionMatch[2]);
                    var file = lines[i + 1];
                    if (!file) {
                        continue;
                    }
                    if (file.indexOf(".m3u8") == -1) {
                        file += ".m3u8";
                    }
                    result.push({
                        file: file,
                        quality: quality
                    });
                }
                i++;
            }
        }
        return result;
    }
    var PROVIDER, DOMAIN, titleSlug, urlSearch, dataSearch, SLUG_DETAIL, _i, _a, item, title, year, slug, urlDetail, dataDetail, ID, _b, _c, item, urlM3u8, parseDirect, textDirect, m3u8Data, e_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                PROVIDER = 'Sudachi - Anime';
                DOMAIN = "https://sudatchi.com";
                _d.label = 1;
            case 1:
                _d.trys.push([1, 6, , 7]);
                titleSlug = movieInfo.title.replace(/ +/ig, '%20');
                urlSearch = "".concat(DOMAIN, "/api/directory?page=1&genres=&years=&types=&status=&title=").concat(titleSlug, "&category=");
                return [4, libs.request_get(urlSearch, {}, false)];
            case 2:
                dataSearch = _d.sent();
                libs.log({ urlSearch: urlSearch, dataSearch: dataSearch }, PROVIDER, "DATA SEARCH");
                SLUG_DETAIL = "";
                for (_i = 0, _a = dataSearch.animes; _i < _a.length; _i++) {
                    item = _a[_i];
                    title = item.titleEnglish;
                    year = item.year;
                    slug = item.slug;
                    if (libs.string_matching_title(movieInfo, title, false, "") && year == movieInfo.year && slug) {
                        SLUG_DETAIL = slug;
                    }
                }
                libs.log({ SLUG_DETAIL: SLUG_DETAIL }, PROVIDER, "SLUG_DETAIL");
                if (!SLUG_DETAIL) {
                    return [2];
                }
                urlDetail = "".concat(DOMAIN, "/_next/data/Oe_mTrRPuCNfAv3ljeOzA/en/watch/").concat(SLUG_DETAIL, "/").concat(movieInfo.episode, ".json");
                return [4, libs.request_get(urlDetail, {}, false)];
            case 3:
                dataDetail = _d.sent();
                ID = 0;
                for (_b = 0, _c = dataDetail.pageProps.episodeData.episodes; _b < _c.length; _b++) {
                    item = _c[_b];
                    if (item.number == movieInfo.episode) {
                        ID = item.id;
                    }
                }
                libs.log({ ID: ID }, PROVIDER, "ID");
                if (!ID) {
                    return [2];
                }
                urlM3u8 = "".concat(DOMAIN, "/videos/m3u8/episode-").concat(ID, ".m3u8");
                libs.log({ urlM3u8: urlM3u8 }, PROVIDER, "urlM3u8");
                return [4, fetch(urlM3u8)];
            case 4:
                parseDirect = _d.sent();
                return [4, parseDirect.text()];
            case 5:
                textDirect = _d.sent();
                m3u8Data = parseM3U8(textDirect);
                libs.log({ m3u8Data: m3u8Data }, PROVIDER, "M3U8 DATA");
                if (!m3u8Data || m3u8Data.length == 0) {
                    return [2];
                }
                libs.embed_callback(m3u8Data[0].file, PROVIDER, PROVIDER, 'hls', callback, 1, [], m3u8Data, {
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                });
                return [3, 7];
            case 6:
                e_1 = _d.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 7];
            case 7: return [2, true];
        }
    });
}); };
