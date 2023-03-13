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
hosts["membed"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var userAgent, decrypt, encrypt, DOMAIN, HOST, newUrl, parseURl, scriptData, encryptParam, parseEncypt, parseArrEncrypt, _i, parseEncypt_1, parseItem, splitItem, id, hashId, directUrl, directData, decryptDirectData, parseDirectData, directQuality, directFile;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userAgent = libs.request_getRandomUserAgent();
                decrypt = function (str) {
                    var _0x48af28 = '9225679083961858';
                    var _0x4405f4 = '25742532592138496744665879883281';
                    var _0x549f1f = cryptoS['enc']['Utf8']['stringify'](cryptoS['AES']['decrypt'](str, cryptoS['enc']['Utf8']['parse'](_0x4405f4), {
                        'iv': cryptoS['enc']['Utf8']['parse'](_0x48af28)
                    }));
                    return _0x549f1f;
                };
                encrypt = function (str) {
                    var _0x48af28 = '9225679083961858';
                    var _0x4405f4 = '25742532592138496744665879883281';
                    return cryptoS['AES']['encrypt'](str, cryptoS['enc']['Utf8']['parse'](_0x4405f4), {
                        'iv': cryptoS['enc']['Utf8']['parse'](_0x48af28)
                    })['toString']();
                };
                DOMAIN = 'https://membed1.net';
                HOST = 'MEMBED';
                newUrl = url.replace('membed.net', 'membed1.net');
                newUrl = url.replace('http:', 'https:');
                return [4, libs.request_get(newUrl, {}, true)];
            case 1:
                parseURl = _a.sent();
                scriptData = parseURl("script[data-name='crypto']").attr('data-value');
                libs.log({ scriptData: scriptData }, provider, 'SCRIPT Data');
                encryptParam = decrypt(scriptData);
                libs.log({ encryptParam: encryptParam }, provider, 'ENCRYPT PARAM');
                parseEncypt = "id=".concat(encryptParam).split('&');
                parseArrEncrypt = [];
                for (_i = 0, parseEncypt_1 = parseEncypt; _i < parseEncypt_1.length; _i++) {
                    parseItem = parseEncypt_1[_i];
                    splitItem = parseItem.split('=');
                    id = splitItem[1] || '';
                    hashId = encrypt(id);
                    parseArrEncrypt.push("".concat(splitItem[0], "=").concat(hashId));
                }
                directUrl = "https://membed1.com/encrypt-ajax.php?".concat(parseArrEncrypt.join('&'));
                return [4, libs.request_get(directUrl, {
                        'Accept': 'application/json, text/javascript, */*; q=0.01',
                        'X-Requested-With': 'XMLHttpRequest'
                    })];
            case 2:
                directData = _a.sent();
                libs.log({ directUrl: directUrl }, provider, 'direct url');
                libs.log({ directData: directData }, provider, 'direct Data');
                decryptDirectData = decrypt(directData.data || '');
                parseDirectData = JSON.parse(decryptDirectData);
                libs.log({ parseDirectData: parseDirectData }, provider, 'PARSE DIRECT DATA');
                directQuality = parseDirectData.source || [];
                if (!directQuality.length) {
                    return [2];
                }
                directFile = directQuality[0].file || '';
                if (!directFile) {
                    return [2];
                }
                libs.embed_callback(directFile, provider, HOST, 'Hls', callback, 1, [], [{ file: directFile, quality: 720 }]);
                return [2];
        }
    });
}); };
