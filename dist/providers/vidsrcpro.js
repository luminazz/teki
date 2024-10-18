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
    var PROVIDER, DOMAIN, headers, urlSearch, htmlSearch, textSearch, hashEncode, hashDecode, mEncrypt, mDEcrypt, _i, mDEcrypt_1, item, urlDirect, dataDirect, tracks, _a, _b, itemTrack, label, urlDirect, requestDirectSize, parseRequest, patternSize, parseDirectSize, _c, parseDirectSize_1, item_1, directQuality, _d, patternSize_1, patternItem, sizeQuality, dURL, e_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                PROVIDER = 'ZVidsrcPro';
                DOMAIN = "https://embed.su";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'Referer': "https://embed.su/",
                    'Origin': "https://embed.su",
                };
                _e.label = 1;
            case 1:
                _e.trys.push([1, 10, , 11]);
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/embed/tv/").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/embed/movie/").concat(movieInfo.tmdb_id);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URLSEARCH');
                return [4, fetch(urlSearch, {
                        method: 'GET',
                        headers: headers,
                    })];
            case 2:
                htmlSearch = _e.sent();
                return [4, htmlSearch.text()];
            case 3:
                textSearch = _e.sent();
                hashEncode = textSearch.match(/JSON\.parse\(atob\(\`([^\`]+)/i);
                hashEncode = hashEncode ? hashEncode[1] : "";
                libs.log({ hashEncode: hashEncode }, PROVIDER, "HASH ENCODE");
                if (!hashEncode) {
                    return [2];
                }
                hashDecode = JSON.parse(libs.string_atob(hashEncode));
                libs.log({ hashDecode: hashDecode }, PROVIDER, "HASH DECODE");
                mEncrypt = hashDecode.hash;
                if (!mEncrypt) {
                    return [2];
                }
                mDEcrypt = JSON["parse"](libs.string_atob(mEncrypt.split("")["reverse"]()["join"]("")));
                libs.log({ mDEcrypt: mDEcrypt }, PROVIDER, 'M DECRYPT');
                if (!mDEcrypt || mDEcrypt.length == 0) {
                    return [2];
                }
                _i = 0, mDEcrypt_1 = mDEcrypt;
                _e.label = 4;
            case 4:
                if (!(_i < mDEcrypt_1.length)) return [3, 9];
                item = mDEcrypt_1[_i];
                if (item.name.toLowerCase() != "viper") {
                    return [3, 8];
                }
                urlDirect = "".concat(DOMAIN, "/api/e/").concat(item.hash);
                return [4, libs.request_get(urlDirect, {
                        'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    }, false)];
            case 5:
                dataDirect = _e.sent();
                libs.log({ dataDirect: dataDirect, urlDirect: urlDirect }, PROVIDER, 'DATA DIRECT');
                if (!dataDirect.source) {
                    return [3, 8];
                }
                tracks = [];
                try {
                    for (_a = 0, _b = dataDirect.subtitles; _a < _b.length; _a++) {
                        itemTrack = _b[_a];
                        label = itemTrack.label.match(/^([A-z]+)/i);
                        label = label ? label[1] : "";
                        if (!label) {
                            continue;
                        }
                        tracks.push({
                            file: itemTrack.file,
                            label: label
                        });
                    }
                }
                catch (etrack) { }
                libs.log({ tracks: tracks }, PROVIDER, 'TRACKS');
                urlDirect = dataDirect.source;
                return [4, fetch(urlDirect, {
                        headers: {
                            "Referer": "https://embed.su/",
                            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                            "Accept": "*/*"
                        },
                        method: "GET",
                    })];
            case 6:
                requestDirectSize = _e.sent();
                return [4, requestDirectSize.text()];
            case 7:
                parseRequest = _e.sent();
                libs.log({ parseRequest: parseRequest, urlDirect: urlDirect }, PROVIDER, 'DIRECT SIZES');
                patternSize = [];
                parseDirectSize = parseRequest.split('\n');
                libs.log({ parseDirectSize: parseDirectSize }, PROVIDER, 'PARSE DIRECT SIZE');
                for (_c = 0, parseDirectSize_1 = parseDirectSize; _c < parseDirectSize_1.length; _c++) {
                    item_1 = parseDirectSize_1[_c];
                    if (item_1.indexOf('/proxy/') == -1) {
                        continue;
                    }
                    patternSize.push(item_1);
                }
                libs.log({ patternSize: patternSize }, PROVIDER, 'PATTERN SIZES');
                directQuality = [];
                for (_d = 0, patternSize_1 = patternSize; _d < patternSize_1.length; _d++) {
                    patternItem = patternSize_1[_d];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? Number(sizeQuality[1]) : 1080;
                    dURL = "".concat(DOMAIN).concat(patternItem);
                    directQuality.push({
                        file: dURL,
                        quality: sizeQuality
                    });
                }
                if (!directQuality.length) {
                    return [3, 8];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, directQuality, {
                    "Referer": "https://embed.su/",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    "Origin": "https://embed.su",
                    "Sec-Fetch-Site": "same-origin",
                    "Accept": "*/*",
                    "Sec-Fetch-Dest": "iframe",
                    "DNT": "1",
                    "sec-ch-ua": '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-User": "?1",
                    "sec-ch-ua-mobile": "?0",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    "Access-Control-Allow-Headers": "If-Modified-Since,Range",
                    "Access-Control-Expose-Headers": "Accept-Ranges,Content-Encoding,Content-Length,Content-Range"
                });
                _e.label = 8;
            case 8:
                _i++;
                return [3, 4];
            case 9: return [3, 11];
            case 10:
                e_1 = _e.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 11];
            case 11: return [2];
        }
    });
}); };
