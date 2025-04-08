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
    var PROVIDER, DOMAIN, headers, urlSearch, parseDetail_1, script_1, direct, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'VVidsrcUK';
                DOMAIN = "https://vidsrc.uk";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': "https://vidsrc.uk/"
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/embed/tv/").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/embed/movie/").concat(movieInfo.tmdb_id);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URLSEARCH');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 2:
                parseDetail_1 = _a.sent();
                script_1 = "";
                parseDetail_1("script").each(function (key, item) {
                    var text = parseDetail_1(item).text();
                    if (text.indexOf("m3u8") != -1) {
                        script_1 = text;
                    }
                });
                script_1 = script_1.replace("self.__next_f.push", "direct");
                libs.log({ script: script_1 }, PROVIDER, 'SCRIPT');
                if (!script_1) {
                    return [2];
                }
                direct = function (data) {
                    try {
                        var parseChild = JSON.parse(data[1].replace("6:", ""));
                        var child = parseChild[3].children[3];
                        var directQuality = [];
                        var tracks = [];
                        for (var _i = 0, _a = child.sources; _i < _a.length; _i++) {
                            var s = _a[_i];
                            if (!s.isM3U8) {
                                continue;
                            }
                            var quality = s.quality ? Number(s.quality) : 1080;
                            if (isNaN(quality)) {
                                continue;
                            }
                            directQuality.push({
                                file: s.url,
                                quality: quality
                            });
                        }
                        for (var _b = 0, _c = child.subtitles; _b < _c.length; _b++) {
                            var s = _c[_b];
                            if (!s.url) {
                                continue;
                            }
                            tracks.push({
                                file: s.url,
                                label: s.lang
                            });
                        }
                        if (directQuality.length > 0) {
                            directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                            libs.log({ directQuality: directQuality, tracks: tracks }, PROVIDER, 'DIRECT QUALITY');
                            libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, directQuality);
                        }
                    }
                    catch (e) {
                        console.log(e, "ERROR");
                    }
                };
                eval(script_1);
                return [3, 4];
            case 3:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
