var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var PROVIDER, DOMAIN, headers, urlIco, sources, urlSources, _i, sources_1, item, buildUrl, _a, urlSources_1, item, res, tracks, _b, _c, item2, directSizes, patternSize, directQuality, _d, patternSize_1, patternItem, sizeQuality, e_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                PROVIDER = 'XVidsrcVip';
                DOMAIN = "https://vidsrc.vip";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': "https://vidsrc.vip/"
                };
                _e.label = 1;
            case 1:
                _e.trys.push([1, 9, , 10]);
                urlIco = "".concat(DOMAIN, "/statics/icon/jihccab.ico");
                sources = ["nova", "hydrax"];
                urlSources = [];
                for (_i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
                    item = sources_1[_i];
                    buildUrl = "".concat(DOMAIN, "/").concat(item, ".php?id=").concat(movieInfo.tmdb_id);
                    if (movieInfo.type == 'tv') {
                        buildUrl += "&season=".concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                    }
                    urlSources.push(buildUrl);
                }
                libs.log({ urlSources: urlSources }, PROVIDER, "URL SOURCE");
                _a = 0, urlSources_1 = urlSources;
                _e.label = 2;
            case 2:
                if (!(_a < urlSources_1.length)) return [3, 8];
                item = urlSources_1[_a];
                return [4, libs.request_get(urlIco, __assign(__assign({}, headers), { Referer: item }))];
            case 3:
                res = _e.sent();
                libs.log({ res: res }, PROVIDER, "INFO");
                tracks = [];
                if (!res.sources) {
                    return [3, 7];
                }
                _b = 0, _c = res.sources;
                _e.label = 4;
            case 4:
                if (!(_b < _c.length)) return [3, 7];
                item2 = _c[_b];
                if (!item2.file) {
                    return [3, 6];
                }
                return [4, libs.request_get(item2.file, {})];
            case 5:
                directSizes = _e.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    libs.embed_callback(item2.file, PROVIDER, PROVIDER, item2.type, callback, 1, tracks);
                    return [3, 6];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize }, PROVIDER, 'PATTERN SIZE');
                for (_d = 0, patternSize_1 = patternSize; _d < patternSize_1.length; _d++) {
                    patternItem = patternSize_1[_d];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? Number(sizeQuality[1]) : 1080;
                    directQuality.push({
                        file: patternItem,
                        quality: sizeQuality
                    });
                }
                if (!directQuality.length) {
                    return [3, 6];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, directQuality, {
                    "Referer": "https://vidsrc.vip/",
                    "Origin": "https://vidsrc.vip"
                });
                _e.label = 6;
            case 6:
                _b++;
                return [3, 4];
            case 7:
                _a++;
                return [3, 2];
            case 8: return [3, 10];
            case 9:
                e_1 = _e.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 10];
            case 10: return [2];
        }
    });
}); };
