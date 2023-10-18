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
    var PROVIDER, DOMAIN, directUrl, parseDetail, _i, _a, item, directQuality, parseDirect, patternSize, _b, patternSize_1, patternItem, quality, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                PROVIDER = 'SUSFlix';
                DOMAIN = "https://susflix.tv";
                _c.label = 1;
            case 1:
                _c.trys.push([1, 8, , 9]);
                directUrl = '';
                if (movieInfo.type == 'movie') {
                    directUrl = "".concat(DOMAIN, "/api/movie?id=").concat(movieInfo.tmdb_id);
                }
                else {
                    directUrl = "".concat(DOMAIN, "/api/tv?id=").concat(movieInfo.tmdb_id, "&s=").concat(movieInfo.season, "&e=").concat(movieInfo.episode);
                }
                return [4, libs.request_get(directUrl)];
            case 2:
                parseDetail = _c.sent();
                libs.log({
                    parseDetail: parseDetail,
                    directUrl: directUrl
                }, PROVIDER, 'PARSE DETAIL');
                _i = 0, _a = parseDetail.Qualities;
                _c.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3, 7];
                item = _a[_i];
                directQuality = [];
                if (!(item.path && item.path.indexOf('febbox') != -1)) return [3, 5];
                return [4, libs.request_get(item.path)];
            case 4:
                parseDirect = _c.sent();
                patternSize = parseDirect.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                libs.log({
                    parseDirect: parseDirect,
                    patternSize: patternSize
                }, PROVIDER, 'PARSE DIRECT');
                if (!patternSize) {
                    libs.embed_callback(item.path, PROVIDER, PROVIDER, 1080, callback, 1, []);
                    return [3, 6];
                }
                for (_b = 0, patternSize_1 = patternSize; _b < patternSize_1.length; _b++) {
                    patternItem = patternSize_1[_b];
                    quality = patternItem.match(/quality\=([A-z0-9]+)/i);
                    quality = quality ? quality[1] : 1080;
                    libs.log({ patternItem: patternItem, quality: quality }, PROVIDER, 'PATTERN ITEM');
                    if (quality == '4k' || quality == '4k_hdr') {
                        quality = 4096;
                    }
                    else {
                        quality = Number(quality.trim().replace(/[A-z]+/, ''));
                    }
                    if (quality == 0) {
                        quality = 720;
                    }
                    directQuality.push({
                        file: patternItem,
                        quality: quality,
                    });
                }
                _c.label = 5;
            case 5:
                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                if (!directQuality.length) {
                    return [3, 6];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality);
                _c.label = 6;
            case 6:
                _i++;
                return [3, 3];
            case 7: return [3, 9];
            case 8:
                e_1 = _c.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 9];
            case 9: return [2, true];
        }
    });
}); };
