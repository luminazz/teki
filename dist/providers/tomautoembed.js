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
    var PROVIDER, DOMAIN, headers, urlSearch, parseSearch, tracks, _i, _a, item, headerDirect, parseDirect, textDirect, m3u8Data, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'TomAutoEmbed';
                DOMAIN = "https://tom.autoembed.cc";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                    'Referer': "".concat(DOMAIN, "/"),
                    'Origin': DOMAIN,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                urlSearch = "".concat(DOMAIN, "/api/getVideoSource?type=movie&id=").concat(movieInfo.tmdb_id);
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/api/getVideoSource?type=tv&id=").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                return [4, libs.request_get(urlSearch, headers, false)];
            case 2:
                parseSearch = _b.sent();
                libs.log({ parseSearch: parseSearch }, PROVIDER, "PARSE SEARCH");
                if (!parseSearch.videoSource) {
                    return [2];
                }
                tracks = [];
                for (_i = 0, _a = parseSearch.subtitles || []; _i < _a.length; _i++) {
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
                if (parseSearch.videoSource.indexOf(".mp4") != -1) {
                    libs.embed_callback(parseSearch.videoSource, PROVIDER, PROVIDER, 'mp4', callback, 1, tracks, [{ file: parseSearch.videoSource, quality: 1080 }], headerDirect);
                    return [2];
                }
                headerDirect = {
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                    "Referer": "".concat(DOMAIN, "/"),
                    "Origin": "".concat(DOMAIN),
                };
                return [4, fetch(parseSearch.videoSource, {
                        headers: headerDirect
                    })];
            case 3:
                parseDirect = _b.sent();
                return [4, parseDirect.text()];
            case 4:
                textDirect = _b.sent();
                m3u8Data = parseM3U8(textDirect, parseSearch.videoSource);
                libs.log({ m3u8Data: m3u8Data }, PROVIDER, "M3U8 DATA");
                if (!m3u8Data.length) {
                    libs.embed_callback(parseSearch.videoSource, PROVIDER, PROVIDER, 'hls', callback, 1, tracks, [{ file: parseSearch.videoSource, quality: 1080 }], headerDirect);
                    return [2];
                }
                libs.embed_callback(m3u8Data[0].file, PROVIDER, PROVIDER, 'hls', callback, 1, tracks, m3u8Data, headerDirect, {
                    type: "m3u8"
                });
                return [3, 6];
            case 5:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 6];
            case 6: return [2];
        }
    });
}); };
