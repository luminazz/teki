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
hosts["vidembed"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    function getRandomInt(_0x328a59, _0x4272ab) {
        return Math['floor'](Math['random']() * (_0x4272ab - _0x328a59 + (0x13b4 + -0x8 * 0x42d + 0xdb5))) + _0x328a59;
    }
    function f_random(_0x5d69df) {
        var _0x27c3ac = _0x5d69df, _0x5696c0 = '';
        while (_0x27c3ac > -0x1 * 0xc47 + 0x3 * -0x96c + 0x288b) {
            _0x27c3ac--, _0x5696c0 += getRandomInt(0x565 + 0x1393 + 0x2f * -0x88, -0xace + 0x2 * 0xf91 + -0x144b);
        }
        return _0x5696c0;
    }
    var DOMAIN, HOST, headers, parseDetail, random1, random2, scriptData, decryptScript, token, id, urlEmbed, dataEmbed, decryptDataEmbed, sourceEmbed, tracks, _i, _a, parseItem, label, parseTrack, _b, parseTrack_1, trackItem;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                DOMAIN = 'https://vidembed.me';
                HOST = 'VidEmbed';
                headers = {
                    "user-agent": libs.request_getRandomUserAgent(),
                };
                return [4, libs.request_get(url, headers, true)];
            case 1:
                parseDetail = _c.sent();
                random1 = "25742532592138496744665879883281";
                random2 = "9225679083961858";
                scriptData = parseDetail("script[data-name=crypto]").attr('data-value');
                decryptScript = cryptoS.AES.decrypt(scriptData, cryptoS.enc.Utf8.parse(random1), {
                    "iv": cryptoS.enc.Utf8.parse(random2)
                });
                libs.log({
                    decryptScript: decryptScript,
                }, provider, 'decryptScript');
                decryptScript = cryptoS.enc.Utf8.stringify(decryptScript);
                libs.log({
                    decryptScript: decryptScript,
                }, provider, 'decryptScript_2');
                token = decryptScript.substr(0x0, decryptScript.indexOf('&'));
                libs.log({
                    token: token,
                }, provider, 'TOKEN');
                id = cryptoS.AES.encrypt(token, cryptoS.enc.Utf8.parse(random1), {
                    "iv": cryptoS.enc.Utf8.parse(random2)
                });
                libs.log({
                    scriptData: scriptData,
                    decryptScript: decryptScript,
                    token: token,
                    id: id.toString(),
                }, provider, 'IDS');
                urlEmbed = "".concat(DOMAIN, "/encrypt-ajax.php?id=").concat(id.toString());
                return [4, libs.request_get(urlEmbed, {
                        responseType: 'json',
                        'x-requested-with': 'XMLHttpRequest'
                    })];
            case 2:
                dataEmbed = _c.sent();
                dataEmbed = dataEmbed.data;
                libs.log({ dataEmbed: dataEmbed, urlEmbed: urlEmbed }, provider, 'DATA EMBED VID');
                decryptDataEmbed = cryptoS.AES.decrypt(dataEmbed, cryptoS.enc.Utf8.parse(random1), {
                    "iv": cryptoS.enc.Utf8.parse(random2)
                });
                decryptDataEmbed = JSON.parse(cryptoS.enc.Utf8.stringify(decryptDataEmbed));
                libs.log({
                    decryptDataEmbed: decryptDataEmbed
                }, provider, 'DECRYPT DATA EMBED');
                sourceEmbed = [];
                tracks = [];
                for (_i = 0, _a = (decryptDataEmbed.source || []); _i < _a.length; _i++) {
                    parseItem = _a[_i];
                    label = parseItem.label.match(/([0-9]+)/i);
                    label = label ? label[1] : 0;
                    if (!label) {
                        continue;
                    }
                    sourceEmbed.push({
                        file: parseItem.file,
                        quality: label
                    });
                }
                sourceEmbed = _.orderBy(sourceEmbed, ['quality'], ['desc']);
                parseTrack = decryptDataEmbed.track.tracks || [];
                for (_b = 0, parseTrack_1 = parseTrack; _b < parseTrack_1.length; _b++) {
                    trackItem = parseTrack_1[_b];
                    tracks.push({
                        file: trackItem.file,
                        label: trackItem.label,
                        kind: trackItem.kind,
                    });
                }
                libs.embed_callback(sourceEmbed[0].file, provider, HOST, 'Hls', callback, 1, tracks, sourceEmbed, {
                    Referer: 'https://vidembed.io/',
                    Host: 'fstreaming.net',
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36',
                    'accept': '*/*',
                    'sec-fetch-site': 'cross-site',
                    'sec-fetch-mode': 'no-cors',
                    'sec-fetch-dest': 'video',
                    'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
                });
                return [2];
        }
    });
}); };
