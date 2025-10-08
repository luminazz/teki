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
    var PROVIDER, DOMAIN, headers, decryptWithPassword, _i, _a, serverID, urlDirect, dataDirect, t, a, decryptData, directUrl, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'TomAutoEmbed';
                DOMAIN = "https://test.autoembed.cc";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                    'Referer': "".concat(DOMAIN, "/"),
                    'Origin': DOMAIN,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                decryptWithPassword = function (e) {
                    var t = cryptoS.enc.Hex.parse(e.salt);
                    var a = cryptoS.enc.Hex.parse(e.iv);
                    var l = e.encryptedData;
                    var n = cryptoS.PBKDF2(e.key, t, {
                        keySize: 8,
                        iterations: e.iterations,
                        hasher: cryptoS.algo.SHA256
                    });
                    var s = cryptoS.AES.decrypt(l, n, {
                        iv: a,
                        padding: cryptoS.pad.Pkcs7,
                        mode: cryptoS.mode.CBC
                    }).toString(cryptoS.enc.Utf8);
                    if (!s) {
                        throw Error("Decryption failed: Invalid key or malformed data.");
                    }
                    return JSON.parse(s);
                };
                _i = 0, _a = [4, 5];
                _b.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3, 5];
                serverID = _a[_i];
                urlDirect = "".concat(DOMAIN, "/api/server?id=").concat(movieInfo.tmdb_id, "&sr=").concat(serverID, "&ep=").concat(movieInfo.episode, "&ss=").concat(movieInfo.season);
                if (movieInfo.type == "movie") {
                    urlDirect = "".concat(DOMAIN, "/api/server?id=").concat(movieInfo.tmdb_id, "&sr=").concat(serverID);
                }
                libs.log({ urlDirect: urlDirect }, PROVIDER, "URL DIRECT");
                return [4, libs.request_get(urlDirect, headers, false)];
            case 3:
                dataDirect = _b.sent();
                libs.log({ dataDirect: dataDirect }, PROVIDER, "DATA DIRECT");
                if (!dataDirect.data) {
                    return [3, 4];
                }
                t = libs.string_atob(dataDirect.data);
                a = JSON.parse(t);
                libs.log({ a: a }, PROVIDER, "A DATA");
                decryptData = decryptWithPassword(a);
                libs.log({ decryptData: decryptData }, PROVIDER, "DECRYPT DATA");
                if (!decryptData.url) {
                    return [3, 4];
                }
                if (decryptData.url.indexOf("https://") != -1 && decryptData.url.indexOf(".m3u8") != -1) {
                    libs.embed_callback(decryptData.url, PROVIDER, PROVIDER, 'hls', callback, 1, [], [{ file: decryptData.url, quality: 1080 }], headers, {
                        type: "m3u8"
                    });
                    return [3, 4];
                }
                if (!_.startsWith(decryptData.url, "/")) {
                    return [3, 4];
                }
                if (decryptData.url.indexOf("/api/embed-proxy") == -1) {
                    return [3, 4];
                }
                directUrl = "".concat(DOMAIN).concat(decryptData.url);
                libs.embed_callback(directUrl, PROVIDER, PROVIDER, 'hls', callback, 1, [], [{ file: directUrl, quality: 1080 }], headers, {
                    type: "m3u8"
                });
                _b.label = 4;
            case 4:
                _i++;
                return [3, 2];
            case 5: return [3, 7];
            case 6:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 7];
            case 7: return [2];
        }
    });
}); };
