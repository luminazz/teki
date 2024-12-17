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
    function u(e) {
        if (e !== undefined) {
            return c_1[e % c_1.length];
        }
        else {
            return "rive";
        }
    }
    var PROVIDER, DOMAIN, providers, c_1, _i, _a, item, apiUrl, resDirect, tracks, directQuality, _b, _c, directItem, directUrl, quality, _d, _e, directItem, label, e_1, e_2;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'MRIVESTREAM';
                DOMAIN = "https://rivestream.live";
                _f.label = 1;
            case 1:
                _f.trys.push([1, 9, , 10]);
                return [4, libs.request_get("".concat(DOMAIN, "/api/backendfetch?requestID=VideoProviderServices&secretKey=rive"))];
            case 2:
                providers = _f.sent();
                libs.log({ providers: providers }, PROVIDER, "PROVIDER");
                if (!providers || !providers.data) {
                    return [2];
                }
                c_1 = ["N", "1y", "R", "efH", "bR", "CY", "HF", "JL", "5", "A", "mh", "4", "F7g", "GzH", "7cb", "gfg", "f", "Q", "8", "c", "YP", "I", "KL", "CzW", "YTL", "4", "u", "3", "Vlg", "9q", "NzG", "9CK", "AbS", "jUG", "Fd", "c3S", "VWx", "wp", "bgx", "V", "o1H", "Pa", "yk", "a", "KJ", "VnV", "O", "m", "ihF", "x"];
                _i = 0, _a = providers.data;
                _f.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3, 8];
                item = _a[_i];
                if (!["fastx", "astra", "ghost"].includes(item)) {
                    return [3, 7];
                }
                apiUrl = "".concat(DOMAIN, "/api/backendfetch?requestID=movieVideoProvider&id=").concat(movieInfo.tmdb_id, "&service=").concat(item, "&secretKey=").concat(u(movieInfo.tmdb_id));
                if (movieInfo.type == "tv") {
                    apiUrl = "".concat(DOMAIN, "/api/backendfetch?requestID=tvVideoProvider&id=").concat(movieInfo.tmdb_id, "&service=").concat(item, "&season=").concat(movieInfo.season, "&episode=").concat(movieInfo.episode, "&secretKey=").concat(u(movieInfo.tmdb_id));
                }
                libs.log({ apiUrl: apiUrl }, PROVIDER, "API URL");
                _f.label = 4;
            case 4:
                _f.trys.push([4, 6, , 7]);
                return [4, libs.request_get(apiUrl)];
            case 5:
                resDirect = _f.sent();
                libs.log({ resDirect: resDirect, item: item }, PROVIDER, "RES DIRECT");
                if (!resDirect || !resDirect.data.sources || resDirect.data.sources.length == 0) {
                    return [3, 7];
                }
                tracks = [];
                directQuality = [];
                for (_b = 0, _c = resDirect.data.sources; _b < _c.length; _b++) {
                    directItem = _c[_b];
                    directUrl = directItem.file || directItem.url;
                    if (!directUrl) {
                        continue;
                    }
                    quality = Number(directItem.quality);
                    directQuality.push({
                        file: directUrl,
                        quality: isNaN(quality) ? 1080 : quality,
                    });
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                for (_d = 0, _e = resDirect.data.captions; _d < _e.length; _d++) {
                    directItem = _e[_d];
                    if (!directItem.file) {
                        continue;
                    }
                    label = directItem.label.match(/([A-z0-9]+)/i);
                    label = label ? label[1] : "";
                    tracks.push({
                        file: directItem.file,
                        label: label,
                    });
                }
                if (!directQuality.length) {
                    return [3, 7];
                }
                libs.log({ tracks: tracks, directQuality: directQuality }, PROVIDER, "TRACKS - DIRECT");
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, directQuality);
                return [3, 7];
            case 6:
                e_1 = _f.sent();
                libs.log({ e: e_1, item: item }, PROVIDER, "ERROR - DIRECT");
                return [3, 7];
            case 7:
                _i++;
                return [3, 3];
            case 8: return [3, 10];
            case 9:
                e_2 = _f.sent();
                libs.log({ e: e_2 }, PROVIDER, "ERROR");
                return [3, 10];
            case 10: return [2];
        }
    });
}); };
