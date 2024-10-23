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
    var CryptoJSAesJson, PROVIDER, DOMAIN, urlSearch, parseSeach, iframeUrl, parseDetail_1, scriptData_1, Encrypted, decryptData, hlsUrl, parseDirect, parseQuality, directQuality, newDomain, _i, parseQuality_1, item, quality, direct, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                CryptoJSAesJson = {
                    'encrypt': function (value, password) {
                        if (password.match(/[^\x00-\x7F]/)) {
                            console.warn('CryptoJSAES: Your passphrase contains non ASCII characters - This is not supported. Hash your passphrase with MD5 or similar hashes to prevent those issues');
                        }
                        return cryptoS.AES.encrypt(JSON.stringify(value), password, { format: CryptoJSAesJson }).toString();
                    },
                    'decrypt': function (jsonStr, password) {
                        if (password.match(/[^\x00-\x7F]/)) {
                            console.warn('CryptoJSAES: Your passphrase contains non ASCII characters - This is not supported. Hash your passphrase with MD5 or similar hashes to prevent those issues');
                        }
                        return JSON.parse(cryptoS.AES.decrypt(jsonStr, password, { format: CryptoJSAesJson }).toString(cryptoS.enc.Utf8));
                    },
                    'stringify': function (cipherParams) {
                        var j = { ct: cipherParams.ciphertext.toString(cryptoS.enc.Base64) };
                        if (cipherParams.iv)
                            j.iv = cipherParams.iv.toString();
                        if (cipherParams.salt)
                            j.s = cipherParams.salt.toString();
                        return JSON.stringify(j).replace(/\s/g, '');
                    },
                    'parse': function (jsonStr) {
                        var j = JSON.parse(jsonStr);
                        var cipherParams = cryptoS.lib.CipherParams.create({ ciphertext: cryptoS.enc.Base64.parse(j.ct) });
                        if (j.iv)
                            cipherParams.iv = cryptoS.enc.Hex.parse(j.iv);
                        if (j.s)
                            cipherParams.salt = cryptoS.enc.Hex.parse(j.s);
                        return cipherParams;
                    }
                };
                PROVIDER = 'SMOVIESAPI';
                DOMAIN = "https://moviesapi.club";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                urlSearch = "";
                if (movieInfo.type == 'movie') {
                    urlSearch = "".concat(DOMAIN, "/movie/").concat(movieInfo.tmdb_id);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/tv/").concat(movieInfo.tmdb_id, "-").concat(movieInfo.season, "-").concat(movieInfo.episode);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, "URL SEARCH");
                return [4, libs.request_get(urlSearch, {
                        Referer: "https://pressplay.top/",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
                        "Sec-Fetch-Dest": "empty",
                        "Sec-Fetch-Mode": "cors",
                        "Sec-Fetch-Site": "cross-site"
                    }, true)];
            case 2:
                parseSeach = _a.sent();
                iframeUrl = parseSeach('.vidframe').attr('src');
                libs.log({ iframeUrl: iframeUrl }, PROVIDER, 'IFRAME URL');
                if (!iframeUrl) {
                    return [2];
                }
                return [4, libs.request_get(iframeUrl, {
                        Referer: "https://moviesapi.club/",
                        Origin: "https://w1.moviesapi.club",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
                        "Sec-Fetch-Dest": "empty",
                        "Sec-Fetch-Mode": "cors",
                        "Sec-Fetch-Site": "cross-site"
                    }, true)];
            case 3:
                parseDetail_1 = _a.sent();
                scriptData_1 = "";
                Encrypted = "";
                parseDetail_1("script").each(function (key, item) {
                    var text = parseDetail_1(item).text();
                    if (text.indexOf("Encrypted") != -1) {
                        scriptData_1 = text;
                    }
                });
                libs.log({ scriptData: scriptData_1 }, PROVIDER, "SCRIPT DATA");
                if (!scriptData_1) {
                    return [2];
                }
                scriptData_1 = scriptData_1.replace(/const *Encrypted/, 'Encrypted');
                eval(scriptData_1);
                libs.log({ Encrypted: Encrypted }, PROVIDER, "Encrypted");
                decryptData = CryptoJSAesJson.decrypt(Encrypted, "=JV[t}{trEV=Ilh5");
                libs.log({ decryptData: decryptData }, PROVIDER, 'DECRYPT DATA');
                hlsUrl = decryptData.match(/\"file\" *\: *\"([^\"]+)/i);
                hlsUrl = hlsUrl ? hlsUrl[1] : '';
                libs.log({ hlsUrl: hlsUrl }, PROVIDER, 'HLS URL');
                if (!hlsUrl) {
                    return [2];
                }
                return [4, libs.request_get(hlsUrl, {
                        Origin: "https://w1.moviesapi.club",
                        Referer: "https://w1.moviesapi.club/",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
                        "Sec-Fetch-Dest": "empty",
                        "Sec-Fetch-Mode": "cors",
                        "Sec-Fetch-Site": "cross-site"
                    })];
            case 4:
                parseDirect = _a.sent();
                libs.log({ parseDirect: parseDirect }, PROVIDER, "DATA DIRECT");
                parseQuality = parseDirect.match(/[0-9]+.m3u8.*/ig);
                directQuality = [];
                newDomain = hlsUrl.replace(/video\.m3u8.*/i, '');
                libs.log({ parseDirect: parseDirect, parseQuality: parseQuality, newDomain: newDomain }, PROVIDER, 'PARSE QUALITY');
                for (_i = 0, parseQuality_1 = parseQuality; _i < parseQuality_1.length; _i++) {
                    item = parseQuality_1[_i];
                    libs.log({ item: item }, PROVIDER, "ITEM PARSE");
                    quality = item.match(/([0-9]+).m3u8/i);
                    quality = quality ? Number(quality[1]) : '720';
                    direct = "".concat(newDomain).concat(item);
                    directQuality.push({
                        quality: quality,
                        file: direct
                    });
                }
                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT URL');
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality, {
                    Referer: "https://w1.moviesapi.club/",
                    Origin: "https://w1.moviesapi.club",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
                    "Accept": "*/*",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "cross-site"
                });
                return [3, 6];
            case 5:
                e_1 = _a.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 6];
            case 6: return [2, true];
        }
    });
}); };
