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
    function parseM3U8(content, urlDirect) {
        var lines = content.split('\n').filter(function (line) { return line.trim() !== ''; });
        var result = [];
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('#EXT-X-STREAM-INF:')) {
                var resolutionMatch = lines[i].match(/RESOLUTION=(\d+)x(\d+)/);
                if (resolutionMatch && lines[i + 1]) {
                    var quality = parseInt(resolutionMatch[2]);
                    var file = lines[i + 1];
                    if (!file) {
                        continue;
                    }
                    var qualityInFile = file.match(/\/([0-9]+)\/index.m3u8/i);
                    if (qualityInFile) {
                        quality = Number(qualityInFile[1]);
                    }
                    libs.log({ file: file, quality: quality }, PROVIDER, "PARSE M3U8 DATA");
                    if (file.indexOf(".m3u8") == -1) {
                        file += ".m3u8";
                    }
                    if (file.indexOf("https://") != -1) {
                        result.push({
                            file: file,
                            quality: quality
                        });
                    }
                    else if (_.startsWith(file, '/')) {
                        file = urlDirect.replace("/index.m3u8", file);
                        result.push({
                            file: file,
                            quality: quality
                        });
                    }
                    else if (_.startsWith(file, '.')) {
                        file = file.replace('./', '/');
                        file = urlDirect.replace("/index.m3u8", file);
                        result.push({
                            file: file,
                            quality: quality
                        });
                    }
                    else {
                        file = urlDirect.replace("index.m3u8", file);
                        result.push({
                            file: file,
                            quality: quality
                        });
                    }
                }
                i++;
            }
        }
        return result;
    }
    var PROVIDER, DOMAIN, headers, urlSearch, domainAPI, parseSearch, urlDecrypt, resDecrypt, tracks, _i, _a, item, _b, _c, item, label, directUrl, parseDirect, textDirect, m3u8Data, e_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                PROVIDER = 'TomAutoEmbed';
                DOMAIN = "https://hin.autoembed.cc";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                    'Referer': "https://hin.autoembed.cc/",
                    'Origin': DOMAIN,
                };
                _d.label = 1;
            case 1:
                _d.trys.push([1, 9, , 10]);
                urlSearch = "".concat(DOMAIN, "/api/getVideoSource?type=movie&id=").concat(movieInfo.tmdb_id);
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/api/getVideoSource?type=tv&id=").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                domainAPI = "".concat(DOMAIN, "/tv/").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                if (movieInfo.type == 'movie') {
                    domainAPI = "".concat(DOMAIN, "/movie/").concat(movieInfo.tmdb_id);
                }
                return [4, libs.request_get(urlSearch, headers, false)];
            case 2:
                parseSearch = _d.sent();
                libs.log({ parseSearch: parseSearch }, PROVIDER, "PARSE SEARCH");
                if (!parseSearch.encryptedData) {
                    return [2];
                }
                urlDecrypt = "".concat(DOMAIN, "/api/decryptVideoSource");
                return [4, libs.request_post(urlDecrypt, {
                        'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                        'referer': "https://hin.autoembed.cc",
                        'Origin': 'https://hin.autoembed.cc',
                        "content-type": "application/json"
                    }, {
                        encryptedData: parseSearch.encryptedData,
                    })];
            case 3:
                resDecrypt = _d.sent();
                libs.log({ resDecrypt: resDecrypt }, PROVIDER, 'RES DECRYPT');
                tracks = [];
                for (_i = 0, _a = resDecrypt.subtitles || []; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (!item.file || !item.label) {
                        continue;
                    }
                    tracks.push({
                        file: item.file,
                        label: item.label,
                        kind: item.kind
                    });
                }
                _b = 0, _c = resDecrypt.audioTracks || [];
                _d.label = 4;
            case 4:
                if (!(_b < _c.length)) return [3, 8];
                item = _c[_b];
                label = item.label;
                if (label != 'English') {
                    return [3, 7];
                }
                directUrl = item.file.replace("i-cdn-0.simba344doe.com", "cdn4504.simba344doe.com");
                return [4, fetch(directUrl, {
                        headers: headers
                    })];
            case 5:
                parseDirect = _d.sent();
                return [4, parseDirect.text()];
            case 6:
                textDirect = _d.sent();
                m3u8Data = parseM3U8(textDirect, directUrl);
                libs.log({ directUrl: directUrl, m3u8Data: m3u8Data }, PROVIDER, "M3U8 DATA");
                if (m3u8Data.length) {
                    m3u8Data = _.orderBy(m3u8Data, ['quality'], ['desc']);
                    libs.embed_callback(m3u8Data[0].file, PROVIDER, PROVIDER, 'hls', callback, 1, tracks, m3u8Data, headers);
                }
                _d.label = 7;
            case 7:
                _b++;
                return [3, 4];
            case 8: return [3, 10];
            case 9:
                e_1 = _d.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 10];
            case 10: return [2];
        }
    });
}); };
