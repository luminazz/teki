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
hosts["embtaku"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, parseDetail, a, key, iv, _0x302318, _0x249a7e, _0x4d306e, hashID, directData, d, _0x3b405f, _i, _a, item, file, parseFile, patternSize, fileQuality, _b, patternSize_1, patternItem, directUrl, size, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                DOMAIN = 'https://dood.ws';
                HOST = 'Embtaku';
                headers = {
                    'content-type': 'application/json;charset=UTF-8'
                };
                _c.label = 1;
            case 1:
                _c.trys.push([1, 8, , 9]);
                return [4, libs.request_get(url, {
                        Referer: "https://gogoanime3.co/",
                        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                    }, true)];
            case 2:
                parseDetail = _c.sent();
                a = parseDetail("script[data-name='episode']").data("value");
                key = parseDetail("body[class^='container-']").attr("class").split('-').pop();
                iv = parseDetail("div[class*='container-']").attr("class").split('-').pop();
                libs.log({ a: a }, HOST, "A");
                _0x302318 = cryptoS.AES.decrypt(a, cryptoS.enc.Utf8.parse(key), {
                    'iv': cryptoS.enc.Utf8.parse(iv)
                });
                libs.log({ _0x302318: _0x302318 }, HOST, "DECRYPT");
                _0x249a7e = cryptoS.enc.Utf8.stringify(_0x302318);
                _0x4d306e = _0x249a7e.substr(0x0, _0x249a7e.indexOf('&'));
                hashID = cryptoS.AES.encrypt(_0x4d306e, cryptoS.enc.Utf8.parse(key), {
                    'iv': cryptoS.enc.Utf8.parse(iv)
                }).toString() + _0x249a7e.substr(_0x249a7e.indexOf('&')) + '&alias=' + _0x4d306e;
                libs.log({ hashID: hashID }, HOST, "HASHID");
                return [4, libs.request_get("https://embtaku.pro/encrypt-ajax.php?id=".concat(hashID), {
                        referer: url,
                        "X-Requested-With": "XMLHttpRequest",
                        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
                    })];
            case 3:
                directData = _c.sent();
                d = directData.data;
                libs.log({ d: d }, HOST, "D");
                _0x3b405f = JSON.parse(cryptoS.enc.Utf8.stringify(cryptoS.AES.decrypt(d, cryptoS.enc.Utf8.parse(parseDetail("div[class*='videocontent-']").attr("class").split('-').pop()), {
                    'iv': cryptoS.enc.Utf8.parse(parseDetail("div[class*='container-']").attr("class").split('-').pop())
                })));
                libs.log({ _0x3b405f: _0x3b405f }, HOST, "DATA");
                _i = 0, _a = _0x3b405f.source;
                _c.label = 4;
            case 4:
                if (!(_i < _a.length)) return [3, 7];
                item = _a[_i];
                file = item.file;
                return [4, libs.request_get(file)];
            case 5:
                parseFile = _c.sent();
                patternSize = parseFile.match(/ep.*/ig);
                fileQuality = [];
                for (_b = 0, patternSize_1 = patternSize; _b < patternSize_1.length; _b++) {
                    patternItem = patternSize_1[_b];
                    libs.log({ patternItem: patternItem }, HOST, "PATTERN");
                    directUrl = file.replace(/\/ep.*/i, "/".concat(patternItem));
                    size = directUrl.match(/([A-z0-9]+)\.m3u8/i);
                    size = size ? size[1] : 720;
                    fileQuality.push({
                        file: directUrl,
                        quality: size,
                    });
                }
                libs.log({ fileQuality: fileQuality }, HOST, "FILE QUALITY");
                if (!fileQuality.length) {
                    return [3, 6];
                }
                fileQuality = _.orderBy(fileQuality, ['quality'], ['desc']);
                libs.embed_callback(fileQuality[0].file, provider, HOST, 'Hls', callback, 0, [], fileQuality);
                _c.label = 6;
            case 6:
                _i++;
                return [3, 4];
            case 7: return [3, 9];
            case 8:
                e_1 = _c.sent();
                libs.log({ e: e_1 }, HOST, "error");
                return [3, 9];
            case 9: return [2];
        }
    });
}); };
