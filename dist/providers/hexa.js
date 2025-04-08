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
    var DOMAIN, PROVIDER, t, urlSearch, dataSearch, headerHexa, dataHexa, headerAqua, dataAqua, item, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                DOMAIN = "https://heartbeat.hexa.watch";
                PROVIDER = 'XHexaWatch';
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                t = Date.now();
                urlSearch = "https://aquariumtv.app/hexae?media_type=movie&tmdb_id=".concat(movieInfo.tmdb_id, "&timestamp=").concat(t);
                if (movieInfo.type == 'tv') {
                    urlSearch = "https://aquariumtv.app/hexae?media_type=tv&tmdb_id=".concat(movieInfo.tmdb_id, "&season_id=").concat(movieInfo.season, "&episode_id=").concat(movieInfo.episode, "&timestamp=").concat(t);
                }
                return [4, libs.request_get(urlSearch)];
            case 2:
                dataSearch = _a.sent();
                libs.log({ dataSearch: dataSearch }, PROVIDER, 'SEARCH');
                if (!dataSearch) {
                    return [2];
                }
                headerHexa = {
                    "content-type": "application/json",
                    "Referer": "https://hexa.watch/",
                    "Origin": "https://hexa.watch",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
                };
                return [4, libs.request_post(DOMAIN, headerHexa, dataSearch)];
            case 3:
                dataHexa = _a.sent();
                libs.log({ dataHexa: dataHexa }, PROVIDER, 'HEXA');
                if (!dataHexa) {
                    return [2];
                }
                headerAqua = {
                    "content-type": "application/json",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
                };
                return [4, libs.request_post("https://aquariumtv.app/hexad", headerAqua, dataHexa)];
            case 4:
                dataAqua = _a.sent();
                libs.log({ dataAqua: dataAqua }, PROVIDER, 'AQUA');
                if (!dataAqua) {
                    return [2];
                }
                for (item in dataAqua.sources) {
                    if (!dataAqua.sources[item].file) {
                        continue;
                    }
                    libs.embed_callback(dataAqua.sources[item].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: dataAqua.sources[item].file, quality: 1080 }], {
                        "Referer": "https://hexa.watch/",
                        "Origin": "https://hexa.watch",
                        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
                    });
                }
                return [3, 6];
            case 5:
                e_1 = _a.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 6];
            case 6: return [2, true];
        }
    });
}); };
