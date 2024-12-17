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
    var PROVIDER, DOMAIN, headers, decryptjs, urlEmbed, parseEmbed_1, scripts_2, keyEndpoint, _i, scripts_1, item, scriptData, textData, matchEndpoint, hash, textHash, urlSearch, parseSearch, directUrl, tracks, _a, _b, item, type, directSizes, patternSize, directQuality, _c, patternSize_1, patternItem, sizeQuality, e_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                PROVIDER = 'MVidlink';
                DOMAIN = "https://vidlink.pro";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                    'Referer': "https://vidlink.pro/",
                    'Origin': DOMAIN,
                };
                _d.label = 1;
            case 1:
                _d.trys.push([1, 12, , 13]);
                decryptjs = function (e, t) {
                    var n = JSON.parse(e);
                    libs.log({ n: n }, PROVIDER, "N");
                    var a = cryptoS.enc.Hex.parse(n.s);
                    var i = cryptoS.enc.Hex.parse(n.iv);
                    var s = cryptoS.PBKDF2(t, a, {
                        keySize: 8,
                        iterations: 1000
                    });
                    var c = cryptoS.lib.CipherParams.create({
                        ciphertext: cryptoS.enc.Base64.parse(n.ct)
                    });
                    var b = cryptoS.AES.decrypt(c, s, {
                        iv: i,
                        padding: cryptoS.pad.Pkcs7,
                        mode: cryptoS.mode.CBC
                    }).toString(cryptoS.enc.Utf8);
                    libs.log({ b: b }, PROVIDER, "B");
                    return JSON.parse(cryptoS.AES.decrypt(c, s, {
                        iv: i,
                        padding: cryptoS.pad.Pkcs7,
                        mode: cryptoS.mode.CBC
                    }).toString(cryptoS.enc.Utf8));
                };
                urlEmbed = "".concat(DOMAIN, "/movie/").concat(movieInfo.tmdb_id);
                if (movieInfo.type == "tv") {
                    urlEmbed = "".concat(DOMAIN, "/tv/").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                libs.log({ urlEmbed: urlEmbed }, PROVIDER, 'URL EMBED');
                return [4, libs.request_get(urlEmbed, {}, true)];
            case 2:
                parseEmbed_1 = _d.sent();
                scripts_2 = [];
                parseEmbed_1("script").each(function (key, item) {
                    var scriptData = parseEmbed_1(item).attr("src");
                    if (scriptData && scriptData.indexOf("/page-") != -1) {
                        scripts_2.push("".concat(DOMAIN).concat(scriptData));
                    }
                });
                libs.log({ scripts: scripts_2 }, PROVIDER, "SCRIPT");
                keyEndpoint = "";
                _i = 0, scripts_1 = scripts_2;
                _d.label = 3;
            case 3:
                if (!(_i < scripts_1.length)) return [3, 7];
                item = scripts_1[_i];
                return [4, fetch(item)];
            case 4:
                scriptData = _d.sent();
                return [4, scriptData.text()];
            case 5:
                textData = _d.sent();
                matchEndpoint = textData.match(/\/api\/([A-z]+)\/[A-z]+\//i);
                matchEndpoint = matchEndpoint ? matchEndpoint[1] : "";
                if (matchEndpoint) {
                    keyEndpoint = matchEndpoint;
                }
                _d.label = 6;
            case 6:
                _i++;
                return [3, 3];
            case 7:
                libs.log({ keyEndpoint: keyEndpoint }, PROVIDER, "KEY");
                if (!keyEndpoint) {
                    return [2];
                }
                return [4, fetch("https://aquariumtv.app/vlinktoken?id=".concat(movieInfo.tmdb_id))];
            case 8:
                hash = _d.sent();
                return [4, hash.text()];
            case 9:
                textHash = _d.sent();
                libs.log({ textHash: textHash }, PROVIDER, "HASH");
                if (!textHash) {
                    return [2];
                }
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/api/").concat(keyEndpoint, "/tv/").concat(textHash, "/").concat(movieInfo.season, "/").concat(movieInfo.episode, "?multiLang=0");
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/api/").concat(keyEndpoint, "/movie/").concat(textHash, "?multiLang=0");
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URLSEARCH');
                return [4, libs.request_get(urlSearch, {}, false)];
            case 10:
                parseSearch = _d.sent();
                libs.log({ parseSearch: parseSearch }, PROVIDER, "PARSE SEARCH");
                directUrl = parseSearch.stream.playlist;
                tracks = [];
                for (_a = 0, _b = parseSearch.stream.captions; _a < _b.length; _a++) {
                    item = _b[_a];
                    type = "";
                    if (item.url.indexOf(".srt") == -1 && item.url.indexOf(".vtt") == -1) {
                        type = "download";
                    }
                    tracks.push({
                        file: item.url,
                        kind: 'captions',
                        label: item.language,
                        type: type,
                    });
                }
                if (!directUrl) {
                    return [2];
                }
                return [4, libs.request_get(directUrl, {})];
            case 11:
                directSizes = _d.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    libs.embed_callback(directUrl, PROVIDER, PROVIDER, "hls", callback, 1, tracks);
                    return [2];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize, tracks: tracks }, PROVIDER, 'PATTERN SIZE');
                for (_c = 0, patternSize_1 = patternSize; _c < patternSize_1.length; _c++) {
                    patternItem = patternSize_1[_c];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? Number(sizeQuality[1]) : 1080;
                    directQuality.push({
                        file: patternItem,
                        quality: sizeQuality
                    });
                }
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, directQuality);
                return [3, 13];
            case 12:
                e_1 = _d.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 13];
            case 13: return [2];
        }
    });
}); };
