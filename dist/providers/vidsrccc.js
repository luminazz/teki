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
    var PROVIDER, DOMAIN, headers, hashData, dataParse, key, hash, domain, res, tracks, _i, _a, item, lang, parseLang, directUrl, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'VidsrcCC';
                DOMAIN = "https://vidsrc.cc";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
                    'Referer': "https://vidsrc.cc/",
                    'Origin': DOMAIN,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                hashData = {
                    tmdb: movieInfo.tmdb_id,
                    imdb: movieInfo.imdb_id,
                    year: movieInfo.year,
                    title: movieInfo.title
                };
                if (movieInfo.type == 'tv') {
                    hashData.season = movieInfo.season;
                    hashData.episode = movieInfo.episode;
                }
                libs.log({ hashData: hashData }, PROVIDER, 'HASH DATA');
                dataParse = JSON.stringify(hashData);
                key = cryptoS.enc.Utf8.parse("FMwmgDBDszBnnAso");
                hash = cryptoS.RC4.encrypt(dataParse, key).toString().replace(/\//g, "-");
                libs.log({ hash: hash }, PROVIDER, 'HASH');
                domain = "".concat(DOMAIN, "/api/vidplay/sources?hash=").concat(encodeURIComponent(hash));
                return [4, libs.request_get(domain, headers)];
            case 2:
                res = _b.sent();
                libs.log({ res: res }, PROVIDER, 'RES');
                if (!res || !res.data) {
                    return [2];
                }
                tracks = [];
                for (_i = 0, _a = res.data.subtitles || []; _i < _a.length; _i++) {
                    item = _a[_i];
                    lang = item.label;
                    if (!lang) {
                        continue;
                    }
                    libs.log({ lang: lang, item: item }, PROVIDER, "TRACK ITEM");
                    parseLang = lang.match(/([A-z0-9]+)/i);
                    parseLang = parseLang ? parseLang[1].trim() : '';
                    if (!parseLang) {
                        continue;
                    }
                    tracks.push({
                        file: item.file,
                        kind: 'captions',
                        label: parseLang
                    });
                }
                directUrl = res.data.stream;
                if (!directUrl) {
                    return [2];
                }
                libs.embed_callback(directUrl, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, [{ "file": directUrl, "quality": 1080 }], headers, {
                    type: "m3u8"
                });
                return [3, 4];
            case 3:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
