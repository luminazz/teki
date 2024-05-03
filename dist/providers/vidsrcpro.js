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
source.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER, DOMAIN, headers, urlSearch, htmlSearch, textSearch, decodeHash, hash, parseHash, _i, parseHash_1, item, urlDirect, dataDirect, tracks, _a, _b, itemTrack, label, q, endpoint, urlDirect, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                PROVIDER = 'ZVidsrcPro';
                DOMAIN = "https://vidsrc.pro";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': "https://vidsrc.pro/"
                };
                _c.label = 1;
            case 1:
                _c.trys.push([1, 8, , 9]);
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
                htmlSearch = _c.sent();
                return [4, htmlSearch.text()];
            case 3:
                textSearch = _c.sent();
                decodeHash = function (a) { return libs.string_atob(a.split("").reverse().join("")); };
                hash = textSearch.match(/hash\" *\: *\"([^\"]+)/i);
                hash = hash ? hash[1] : "";
                libs.log({ hash: hash }, PROVIDER, 'HASH');
                if (!hash) {
                    return [2];
                }
                parseHash = JSON.parse(decodeHash(hash));
                libs.log({ parseHash: parseHash }, PROVIDER, 'PARSE HASH');
                _i = 0, parseHash_1 = parseHash;
                _c.label = 4;
            case 4:
                if (!(_i < parseHash_1.length)) return [3, 7];
                item = parseHash_1[_i];
                urlDirect = "".concat(DOMAIN, "/api/e/").concat(item.hash);
                return [4, libs.request_get(urlDirect, headers, false)];
            case 5:
                dataDirect = _c.sent();
                libs.log({ dataDirect: dataDirect }, PROVIDER, 'DATA DIRECT');
                if (!dataDirect.source) {
                    return [3, 6];
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
                q = dataDirect.source.match(/\?base\=([A-z0-9.]+)/i);
                q = q ? q[1] : "";
                endpoint = dataDirect.source.match(/proxy\/viper([A-z0-9_/.]+\.m3u8)/i);
                endpoint = endpoint ? endpoint[1] : "";
                libs.log({ q: q, endpoint: endpoint }, PROVIDER, 'Q AND ENDPOINT');
                if (!q || !endpoint) {
                    return [3, 6];
                }
                urlDirect = "https://".concat(q).concat(endpoint);
                libs.embed_callback(urlDirect, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, [{ file: urlDirect, quality: 1080 }], headers);
                _c.label = 6;
            case 6:
                _i++;
                return [3, 4];
            case 7: return [3, 9];
            case 8:
                e_1 = _c.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 9];
            case 9: return [2];
        }
    });
}); };
