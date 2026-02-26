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
    function customEncode(input) {
        var src = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
        var dst = "TuzHOxl7b0RW9o_1FPV3eGfmL4Z5pD8cahBQr2U-6yvEYwngXCdJjANtqKIMiSks";
        var b64 = libs.string_btoa(unescape(encodeURIComponent(input)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
        return b64.split('').map(function (char) {
            var index = src.indexOf(char);
            return index !== -1 ? dst[index] : char;
        }).join('');
    }
    function hexToBytes(hex) {
        var bytes = [];
        for (var i = 0; i < hex.length; i += 2) {
            bytes.push(parseInt(hex.substr(i, 2), 16));
        }
        return new Uint8Array(bytes);
    }
    var PROVIDER, DOMAIN, headers, staticID, urlDetail, dataDetail, textDetail, rawData, encodedFinal, urlServer, requestServer, dataServer, _i, dataServer_1, itemServer, id, urlEmbed, requestEmbed, dataEmbed, tracks, _a, _b, itemTrack, lang, file, parseLang, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                PROVIDER = 'OneOneOne';
                DOMAIN = "https://111movies.com";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
                    "X-Requested-With": "XMLHttpRequest",
                    "Referer": "".concat(DOMAIN, "/"),
                    "Content-Type": "application/octet-stream",
                    "Accept": "*"
                };
                _c.label = 1;
            case 1:
                _c.trys.push([1, 12, , 13]);
                staticID = "APA91jkm9izwoCjqLPR78ZKT1SE0jVyJz0GDV5BOIgjCDvBU9_B1ymKNYHbOAFeZi6fe1D6xLPgSmhEcQMGCm1f6WyiQRfF4YJlJG5IE5ZDjO38yNE1Zv1wnMGVL6QtRPbsR2s7MvvyFnSTJhTil-H4z60VBjZSyfHArb9qkGwCm_3IB8JtOF9Y/1000019584590139/em";
                urlDetail = "".concat(DOMAIN, "/movie/").concat(movieInfo.tmdb_id);
                if (movieInfo.type == 'tv') {
                    urlDetail = "".concat(DOMAIN, "/tv/").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                return [4, fetch(urlDetail, {
                        headers: {
                            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
                            "Referer": "".concat(DOMAIN, "/"),
                            "Origin": DOMAIN,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })];
            case 2:
                dataDetail = _c.sent();
                return [4, dataDetail.text()];
            case 3:
                textDetail = _c.sent();
                rawData = textDetail.match(/\"data\" *\: *\"([^\"]+)/i);
                rawData = rawData ? rawData[1] : "";
                libs.log({ rawData: rawData }, PROVIDER, "RAW DATA");
                if (!rawData) {
                    return [2];
                }
                return [4, libs.request_get("https://aquariumtv.app/one?id=".concat(rawData))];
            case 4:
                encodedFinal = _c.sent();
                libs.log({ encodedFinal: encodedFinal }, PROVIDER, "FINAL ENCODED");
                if (!encodedFinal) {
                    return [2];
                }
                urlServer = "".concat(DOMAIN, "/").concat(staticID, "/").concat(encodedFinal, "/sr");
                libs.log({ urlServer: urlServer }, PROVIDER, "URL SERVER");
                return [4, fetch(urlServer, {
                        method: "POST",
                        headers: {
                            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
                            "Referer": "".concat(DOMAIN, "/"),
                            "Origin": DOMAIN,
                            "Content-Type": "text/javascript",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })];
            case 5:
                requestServer = _c.sent();
                return [4, requestServer.json()];
            case 6:
                dataServer = _c.sent();
                libs.log({ dataServer: dataServer, urlServer: urlServer }, PROVIDER, "DATA SERVER");
                if (!dataServer || !dataServer.length) {
                    return [2];
                }
                dataServer = [dataServer[0]];
                _i = 0, dataServer_1 = dataServer;
                _c.label = 7;
            case 7:
                if (!(_i < dataServer_1.length)) return [3, 11];
                itemServer = dataServer_1[_i];
                id = itemServer.data;
                if (!id) {
                    return [3, 10];
                }
                urlEmbed = "".concat(DOMAIN, "/").concat(staticID, "/").concat(id);
                return [4, fetch(urlEmbed, {
                        method: 'POST',
                        headers: {
                            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
                            "Referer": "".concat(DOMAIN, "/"),
                            "Origin": DOMAIN,
                            "Content-Type": "text/javascript",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })];
            case 8:
                requestEmbed = _c.sent();
                return [4, requestEmbed.json()];
            case 9:
                dataEmbed = _c.sent();
                libs.log({ dataEmbed: dataEmbed, urlEmbed: urlEmbed }, PROVIDER, "DATA EMBED");
                if (!dataEmbed || !dataEmbed.url) {
                    return [3, 10];
                }
                tracks = [];
                for (_a = 0, _b = dataEmbed.tracks || []; _a < _b.length; _a++) {
                    itemTrack = _b[_a];
                    lang = itemTrack.label;
                    if (!lang) {
                        continue;
                    }
                    file = itemTrack.file;
                    if (!file) {
                        continue;
                    }
                    parseLang = lang.split("-");
                    if (parseLang.length > 0) {
                        lang = parseLang[0].trim();
                    }
                    tracks.push({
                        file: itemTrack.file,
                        kind: 'captions',
                        label: lang
                    });
                }
                libs.embed_callback(dataEmbed.url, PROVIDER, PROVIDER, 'Hls', callback, 0, tracks, [{ file: dataEmbed.url, quality: 1080 }], {
                    type: "m3u8"
                });
                _c.label = 10;
            case 10:
                _i++;
                return [3, 7];
            case 11: return [3, 13];
            case 12:
                e_1 = _c.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 13];
            case 13: return [2, true];
        }
    });
}); };
