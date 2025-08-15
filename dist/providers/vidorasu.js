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
    var PROVIDER, DOMAIN, headers, mt_1, pt_1, r, dataDirect, i, e, _i, _a, item, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'AVidora';
                DOMAIN = "https://stats.vidora.su";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': "https://vidsrc.su/"
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                mt_1 = "WWpKV2VWbHVWbTVpTWtveFdsZHNiMk50WkdsaU0yd3hZVWRzYmxwWVNuWmhXRlp2WlZka2VWcFhTbTloVnpreFpWUkNiRm96U25aaFIyd3hZVzAxZVZveVZtOWliV3d4WWpKd2JtTnRWbTlrVjJ4MVdqSldlV0p0YkhaWmJXZDNaRmRXZVZveVNuQmlNbWd4V2xoS2JtSnRiREU9";
                pt_1 = "eWFwcGl0eSB5YXAgeWFwIIHlhcCBreXMgY3VudCBhc3MgYml0Y2gg=";
                r = function (e, t) {
                    var r = Date.now();
                    var n = Math.random().toString(36).substring(2, 15);
                    var i = {
                        type: e,
                        id: t,
                        timestamp: r,
                        random: n,
                        checksum: cryptoS.SHA256("".concat(e).concat(t).concat(r).concat(n).concat(mt_1)).toString()
                    };
                    libs.log({ r: r, n: n, i: i }, PROVIDER, "COMBINE DATA");
                    var a = {
                        data: cryptoS.AES.encrypt(JSON.stringify(i), pt_1).toString(),
                        timestamp: r
                    };
                    var s = {
                        data: cryptoS.AES.encrypt(JSON.stringify(a), "".concat(pt_1).concat(r)).toString(),
                        timestamp: r,
                        random: n
                    };
                    return cryptoS.AES.encrypt(JSON.stringify(s), mt_1).toString();
                };
                r = r(movieInfo.type, "tv" === movieInfo.type ? "".concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode) : movieInfo.tmdb_id);
                libs.log({ r: r }, PROVIDER, "R DATA");
                return [4, fetch("https://stats.vidora.su", {
                        headers: {
                            "x-auth": r
                        }
                    })];
            case 2:
                dataDirect = _b.sent();
                return [4, dataDirect.json()];
            case 3:
                i = _b.sent();
                if (i.encrypted) {
                    e = function (e) {
                        try {
                            var t = cryptoS.AES.decrypt(e, mt_1).toString(cryptoS.enc.Utf8), r_1 = JSON.parse(t), n = cryptoS.AES.decrypt(r_1.data, "".concat(pt_1).concat(r_1.timestamp)).toString(cryptoS.enc.Utf8), i_1 = JSON.parse(n), a = cryptoS.AES.decrypt(i_1.data, pt_1).toString(cryptoS.enc.Utf8), s = JSON.parse(a);
                            return cryptoS.SHA256("".concat(JSON.stringify(s.data)).concat(s.timestamp).concat(s.random).concat(mt_1)).toString(),
                                s.data;
                        }
                        catch (t) {
                            return null;
                        }
                    }(i.encrypted);
                    libs.log({ e: e }, PROVIDER, "DATA DIRECT");
                    if (!e.sources) {
                        return [2];
                    }
                    for (_i = 0, _a = e.sources; _i < _a.length; _i++) {
                        item = _a[_i];
                        libs.embed_callback(item.url, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: item.url, quality: 1080 }], headers, {
                            type: "m3u8"
                        });
                    }
                }
                return [2];
            case 4:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 5];
            case 5: return [2];
        }
    });
}); };
