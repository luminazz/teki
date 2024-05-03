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
hosts["fstream365"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    function convertToHex(_0x561fd4) {
        var _0x2ebcd2 = {
            'ptEMH': function (_0x57bcb4, _0x4a04fc) {
                return _0x57bcb4 == _0x4a04fc;
            },
            'gnSRz': function (_0x35a30b, _0x50280f) {
                return _0x35a30b(_0x50280f);
            },
            'YpozJ': function (_0x6084eb, _0xbe34f2) {
                return _0x6084eb < _0xbe34f2;
            },
            'YUgMo': function (_0x4a445f, _0x1affb7) {
                return _0x4a445f !== _0x1affb7;
            },
            'JTtGZ': "JnOEl",
            'zYNJf': "pLFfC",
            'XwjlA': function (_0x353055, _0x5cfedf) {
                return _0x353055 + _0x5cfedf;
            }
        };
        var _0x3e2feb = '';
        for (var _0x1b5743 = 0; _0x2ebcd2["YpozJ"](_0x1b5743, _0x561fd4["length"]); _0x1b5743++) {
            if (_0x2ebcd2["YUgMo"](_0x2ebcd2["JTtGZ"], _0x2ebcd2["zYNJf"])) {
                _0x3e2feb += _0x2ebcd2["XwjlA"]('', _0x561fd4["charCodeAt"](_0x1b5743)["toString"](16));
            }
        }
        return _0x3e2feb;
    }
    var DOMAIN, HOST, headers, CryptoJSAesJson, headers_1, parseDetail, id, key, _0xabef83, _0x2bc27a, idDirect, h, a, t, urlDirect, parseDirect, _i, _a, item, e_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                DOMAIN = 'https://fstream365.com';
                HOST = 'fstream365';
                headers = {
                    'content-type': 'application/json;charset=UTF-8',
                    'Referer': config.options.link_detail,
                };
                _c.label = 1;
            case 1:
                _c.trys.push([1, 4, , 5]);
                CryptoJSAesJson = {
                    'stringify': function (_0x2446ec) {
                        var _0x168df0 = {
                            'ct': _0x2446ec["ciphertext"]["toString"](cryptoS["enc"]["Base64"])
                        };
                        if (_0x2446ec.iv) {
                            _0x168df0.iv = _0x2446ec.iv["toString"]();
                        }
                        if (_0x2446ec["salt"]) {
                            _0x168df0.s = _0x2446ec["salt"]["toString"]();
                        }
                        return JSON["stringify"](_0x168df0);
                    },
                    'parse': function (_0x50e8b5) {
                        var _a;
                        var _0x2ff517 = (_a = {},
                            _a["oPPMn"] = "3|1|0|2|4",
                            _a);
                        var _0x16be06 = _0x2ff517["oPPMn"]["split"]('|');
                        var _0x2c7ffe = 0;
                        while (true) {
                            switch (_0x16be06[_0x2c7ffe++]) {
                                case '0':
                                    if (_0x41868a.iv) {
                                        _0x4032ce.iv = cryptoS["enc"]["Hex"]["parse"](_0x41868a.iv);
                                    }
                                    continue;
                                case '1':
                                    var _0x4032ce = cryptoS["lib"]["CipherParams"]["create"]({
                                        'ciphertext': cryptoS["enc"]["Base64"]["parse"](_0x41868a.ct)
                                    });
                                    continue;
                                case '2':
                                    if (_0x41868a.s) {
                                        _0x4032ce["salt"] = cryptoS["enc"]["Hex"]["parse"](_0x41868a.s);
                                    }
                                    continue;
                                case '3':
                                    var _0x41868a = JSON["parse"](_0x50e8b5);
                                    continue;
                                case '4':
                                    return _0x4032ce;
                            }
                            break;
                        }
                    }
                };
                headers_1 = {
                    "Referer": "https://ymovies.vip/",
                };
                return [4, libs.request_get(url, headers_1, true)];
            case 2:
                parseDetail = _c.sent();
                id = parseDetail("#player").attr("data-id");
                key = parseDetail("#player").attr("data-hash");
                libs.log({ id: id, key: key }, HOST, "ID & KEY");
                if (!id || !key) {
                    return [2];
                }
                _0xabef83 = (_b = {},
                    _b["format"] = CryptoJSAesJson,
                    _b);
                _0x2bc27a = JSON['parse'](cryptoS['AES']['encrypt'](JSON['stringify'](id), key, _0xabef83)['toString']());
                libs.log({ _0x2bc27a: _0x2bc27a }, HOST, "ENCRYPT DATA");
                idDirect = convertToHex(_0x2bc27a.ct);
                h = convertToHex(key);
                a = _0x2bc27a.iv;
                t = _0x2bc27a.s;
                libs.log({ idDirect: idDirect, h: h, a: a, t: t }, HOST, 'ID DIRECT');
                urlDirect = "".concat(DOMAIN, "/ajax/getSources/?id=").concat(idDirect, "&h=").concat(h, "&a=").concat(a, "&t=").concat(t);
                return [4, libs.request_get(urlDirect, headers_1, false)];
            case 3:
                parseDirect = _c.sent();
                libs.log({ parseDirect: parseDirect }, HOST, 'PARSE parseDirect');
                for (_i = 0, _a = parseDirect.sources; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (!item.file) {
                        continue;
                    }
                    if (item.file.indexOf("vs025831") != -1) {
                        continue;
                    }
                    libs.embed_callback(item.file, provider, HOST, 'Hls', callback, 1, item.tracks, [{ file: item.file, quality: 1080 }], headers_1);
                }
                return [3, 5];
            case 4:
                e_1 = _c.sent();
                libs.log({ e: e_1 }, HOST, 'ERROR');
                return [3, 5];
            case 5: return [2];
        }
    });
}); };
