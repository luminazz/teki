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
    var PROVIDER, DOMAIN, userAgent, urlSearch, urlReferer, parseSearch, unpack, sources, parseSource, _i, _a, item, quality, directSizes, patternSize, directQuality, _b, patternSize_1, patternItem, sizeQuality, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                PROVIDER = 'ZBlackVid';
                DOMAIN = "https://blackvid.space";
                _c.label = 1;
            case 1:
                _c.trys.push([1, 8, , 9]);
                userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36';
                urlSearch = "".concat(DOMAIN, "/js/blackvid.js?tmdb=").concat(movieInfo.tmdb_id);
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/js/blackvid.js?tmdb=").concat(movieInfo.tmdb_id, "&season=").concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                }
                urlReferer = "".concat(DOMAIN, "/embed?tmdb=").concat(movieInfo.tmdb_id);
                if (movieInfo.type == 'tv') {
                    urlReferer = "".concat(DOMAIN, "/embed?tmdb=").concat(movieInfo.tmdb_id, "&season=").concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                }
                return [4, libs.request_get(urlSearch, {
                        Referer: urlReferer,
                        'user-agent': userAgent,
                    })];
            case 2:
                parseSearch = _c.sent();
                libs.log({ parseSearch: parseSearch, urlReferer: urlReferer, urlSearch: urlSearch }, PROVIDER, 'SEARCH DATA');
                unpack = libs.string_unpack(parseSearch);
                libs.log({
                    unpack: unpack,
                }, PROVIDER, 'UNPACK REPLACE');
                sources = unpack.match(/JSON\.parse\(([^\)]+)/i);
                sources = sources ? sources[1] : '';
                sources = sources.replace(/[\n]+/ig, '').replace(/[\t]+/ig, '').replace(/[\']+/ig, '');
                sources = "{\"a\": ".concat(sources, "}");
                libs.log({ sources: sources }, PROVIDER, 'SOURCES');
                parseSource = JSON.parse(sources);
                libs.log({ parseSource: parseSource.a }, PROVIDER, 'PARSE SOURCE');
                _i = 0, _a = parseSource.a;
                _c.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3, 7];
                item = _a[_i];
                libs.log({ item: item }, PROVIDER, 'ITEM');
                quality = item.quality.match(/([0-9]+)/i);
                quality = quality ? Number(quality[1]) : 1080;
                if (!(item.url.indexOf('playlist.m3u8') != -1)) return [3, 5];
                return [4, libs.request_get(item.url, {})];
            case 4:
                directSizes = _c.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    return [3, 6];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize }, PROVIDER, 'PATTERN SIZE');
                for (_b = 0, patternSize_1 = patternSize; _b < patternSize_1.length; _b++) {
                    patternItem = patternSize_1[_b];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                    if (patternItem.indexOf('feetcdn.com:2223') != -1 && movieInfo.platform && movieInfo.platform == 'android') {
                        libs.log({ patternItem: patternItem, movieInfo: movieInfo }, PROVIDER, 'ignorePattern');
                        continue;
                    }
                    directQuality.push({
                        file: patternItem,
                        quality: sizeQuality
                    });
                }
                if (!directQuality.length) {
                    return [3, 6];
                }
                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                libs.embed_callback(item.url, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality);
                return [3, 6];
            case 5:
                libs.embed_callback(item.url, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: item.url, quality: quality }]);
                _c.label = 6;
            case 6:
                _i++;
                return [3, 3];
            case 7: return [3, 9];
            case 8:
                e_1 = _c.sent();
                return [3, 9];
            case 9: return [2];
        }
    });
}); };
