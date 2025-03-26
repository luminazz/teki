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
    var PROVIDER, DOMAIN, headers, url, res, urlDecrypt, resDecrypt, directUrl, tracks, _i, _a, itemTrack, label, directSizes, patternSize, directQuality, _b, patternSize_1, patternItem, sizeQuality, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                PROVIDER = 'YAutoEmbed';
                DOMAIN = "https://nono.autoembed.cc";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': "https://autoembed.cc",
                    'Origin': 'https://autoembed.cc'
                };
                _c.label = 1;
            case 1:
                _c.trys.push([1, 5, , 6]);
                url = "".concat(DOMAIN, "/api/getVideoSource?type=movie&id=").concat(movieInfo.tmdb_id);
                if (movieInfo.type == 'tv') {
                    url = "".concat(DOMAIN, "/api/getVideoSource?type=tv&id=").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                return [4, libs.request_get(url, headers)];
            case 2:
                res = _c.sent();
                libs.log({ res: res }, PROVIDER, 'RES');
                if (!res.encryptedData) {
                    return [2];
                }
                urlDecrypt = "".concat(DOMAIN, "/api/decryptVideoSource");
                return [4, libs.request_post(urlDecrypt, {
                        'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                        'referer': "https://nono.autoembed.cc",
                        'Origin': 'https://nono.autoembed.cc',
                        "content-type": "application/json"
                    }, {
                        encryptedData: res.encryptedData,
                    })];
            case 3:
                resDecrypt = _c.sent();
                libs.log({ resDecrypt: resDecrypt }, PROVIDER, 'RES DECRYPT');
                directUrl = resDecrypt.videoSource;
                if (!directUrl) {
                    return [2];
                }
                tracks = [];
                try {
                    for (_i = 0, _a = resDecrypt.subtitles; _i < _a.length; _i++) {
                        itemTrack = _a[_i];
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
                libs.log({ directUrl: directUrl }, PROVIDER, 'DIRECT URL');
                if (directUrl.indexOf(".mp4") != -1) {
                    libs.embed_callback(directUrl, PROVIDER, PROVIDER, "hls", callback, 1, tracks);
                    return [2];
                }
                return [4, libs.request_get(directUrl, {})];
            case 4:
                directSizes = _c.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    libs.embed_callback(directUrl, PROVIDER, PROVIDER, "hls", callback, 1, tracks);
                    return [2];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize }, PROVIDER, 'PATTERN SIZE');
                for (_b = 0, patternSize_1 = patternSize; _b < patternSize_1.length; _b++) {
                    patternItem = patternSize_1[_b];
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
                return [3, 6];
            case 5:
                e_1 = _c.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 6];
            case 6: return [2];
        }
    });
}); };
