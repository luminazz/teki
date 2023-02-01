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
hosts["streamsss"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, makeId, encode, randomMakeId, code, path, hashCode, urlAjax, resultEmbed, streamData, fileUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                libs.log({ provider: provider }, provider, 'PROVIDER STREAMSS');
                DOMAIN = 'https://streamsss.net';
                HOST = 'Streamsss';
                headers = {
                    "referer": "https://streamsss.net/",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
                    "watchsb": "sbstream",
                };
                makeId = function (_0x356f1d) {
                    var _0x1a9f52 = '', _0x4d2700 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', _0x58ca4b = _0x4d2700.length;
                    for (var _0x5651c2 = 0; _0x5651c2 < _0x356f1d; _0x5651c2++) {
                        _0x1a9f52 += _0x4d2700.charAt(Math.floor(Math.random() * _0x58ca4b));
                    }
                    return _0x1a9f52;
                };
                encode = function (_0x10c015) {
                    _0x10c015 =
                        makeId(12) +
                            '||' +
                            _0x10c015 +
                            '||' +
                            makeId(12) +
                            '||streamsb';
                    var _0x81ea84 = '', _0x3588e0 = _0x10c015.split(''), _0x81ea84 = '';
                    for (var _0x23e4a0 = 0; _0x23e4a0 < _0x10c015.length; _0x23e4a0++) {
                        _0x81ea84 += parseInt(_0x3588e0[_0x23e4a0].charCodeAt(0), 10).toString(16);
                    }
                    return _0x81ea84;
                };
                randomMakeId = makeId(12);
                code = '';
                path = url.match(/streamsss\.net\/([^\?]+)/i);
                path = path ? path[1] : '';
                path.includes('-')
                    ? ((code = path.split('-')),
                        (code = code[code.length - 1]),
                        (code = code.replace('.html', '')))
                    : ((code = path.split('/')),
                        (code = code[code.length - 1]),
                        (code = code.replace('.html', '')));
                hashCode = encode(code);
                urlAjax = "".concat(DOMAIN, "/sources50/").concat(hashCode, "/");
                libs.log({
                    hashCode: hashCode,
                    urlAjax: urlAjax,
                    headers: headers
                }, provider, 'RESULT INFO');
                return [4, libs.request_get(urlAjax, {
                        'authority': 'streamsss.net',
                        'accept': 'application/json, text/plain, */*',
                        'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
                        'dnt': '1',
                        'referer': url,
                        'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"macOS"',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
                        'watchsb': 'sbstream'
                    })];
            case 1:
                resultEmbed = _a.sent();
                libs.log({ resultEmbed: resultEmbed }, provider, "RESULT EMBED");
                streamData = resultEmbed.stream_data || [];
                fileUrl = streamData.file || streamData.backup || '';
                if (!fileUrl) {
                    return [2];
                }
                libs.embed_callback(fileUrl, provider, HOST, 720, callback, 1, [], [{ file: fileUrl, quality: 720 }], {
                    'Accept': '*/*',
                    'Accept-Language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
                    'Connection': 'keep-alive',
                    'DNT': '1',
                    'Origin': 'https://streamsss.net',
                    'Referer': 'https://streamsss.net/',
                    'Sec-Fetch-Dest': 'empty',
                    'Sec-Fetch-Mode': 'cors',
                    'Sec-Fetch-Site': 'cross-site',
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
                    'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"'
                });
                return [2];
        }
    });
}); };
