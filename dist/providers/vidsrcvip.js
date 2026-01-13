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
    var PROVIDER, DOMAIN, headers, qw_1, RL, enc, urlovo, response, json, _a, _b, _c, _i, item, source, qualityData, directQuality, _d, _e, qItem, errorRequest_1, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'XVidsrcVip';
                DOMAIN = "https://vidrock.net";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': "https://vidrock.net/",
                    'origin': "https://vidrock.net"
                };
                _f.label = 1;
            case 1:
                _f.trys.push([1, 11, , 12]);
                qw_1 = "x7k9mPqT2rWvY8zA5bC3nF6hJ2lK4mN9";
                RL = function (r, e, t, n) {
                    var s = e === "tv" ? "".concat(r, "_").concat(t, "_").concat(n) : r, i = cryptoS.enc.Utf8.parse(qw_1), a = cryptoS.enc.Utf8.parse(qw_1.substring(0, 16));
                    libs.log({ s: s, i: i, a: a }, PROVIDER, "ENCRYPTION INPUTS");
                    var c = cryptoS.AES.encrypt(s, i, {
                        iv: a
                    }).ciphertext.toString(cryptoS.enc.Base64);
                    c = c.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
                    return c;
                };
                enc = RL(String(movieInfo.tmdb_id), movieInfo.type, movieInfo.season, movieInfo.episode);
                libs.log({ enc: enc }, PROVIDER, "ENCODED");
                urlovo = "".concat(DOMAIN, "/api/").concat(movieInfo.type, "/").concat(encodeURIComponent(enc));
                libs.log({ urlovo: urlovo }, PROVIDER, "URL");
                return [4, fetch(urlovo)];
            case 2:
                response = _f.sent();
                if (!response.ok) {
                    return [2];
                }
                return [4, response.json()];
            case 3:
                json = _f.sent();
                libs.log({ json: json }, PROVIDER, "JSON");
                _a = json;
                _b = [];
                for (_c in _a)
                    _b.push(_c);
                _i = 0;
                _f.label = 4;
            case 4:
                if (!(_i < _b.length)) return [3, 10];
                _c = _b[_i];
                if (!(_c in _a)) return [3, 9];
                item = _c;
                _f.label = 5;
            case 5:
                _f.trys.push([5, 8, , 9]);
                if (!["Astra", "Nova"].includes(item)) {
                    return [3, 9];
                }
                source = json[item];
                if (!source.url) {
                    return [3, 9];
                }
                if (!(source.url.indexOf("cdn.vidrock.store") != -1)) return [3, 7];
                return [4, libs.request_get(source.url, headers)];
            case 6:
                qualityData = _f.sent();
                libs.log({ qualityData: qualityData }, PROVIDER, "QUALITY DATA");
                directQuality = [];
                for (_d = 0, _e = qualityData || []; _d < _e.length; _d++) {
                    qItem = _e[_d];
                    libs.log({ qItem: qItem }, PROVIDER, "QUALITY ITEM");
                    if (qItem.resolution && qItem.url) {
                        directQuality.push({
                            file: qItem.url,
                            quality: qItem.resolution,
                        });
                    }
                }
                if (directQuality.length > 0) {
                    libs.log({ directQuality: directQuality }, PROVIDER, "DIRECT QUALITY");
                    directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                    libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality, headers, {
                        type: "m3u8"
                    });
                }
                return [3, 9];
            case 7:
                libs.embed_callback(source.url, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: source.url, quality: 1080 }], headers, {
                    type: "m3u8"
                });
                return [3, 9];
            case 8:
                errorRequest_1 = _f.sent();
                return [3, 9];
            case 9:
                _i++;
                return [3, 4];
            case 10: return [3, 12];
            case 11:
                e_1 = _f.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 12];
            case 12: return [2];
        }
    });
}); };
