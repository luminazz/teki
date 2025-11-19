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
    function _0x35fb63(_0x2bbed3, _0x58fa9b) {
        var _0x20e08e = [];
        var _0x3b4750 = 0;
        var _0x29527d;
        var _0xc68cb0 = "";
        var _0x344511;
        for (_0x344511 = 0; _0x344511 < 256; _0x344511++) {
            _0x20e08e[_0x344511] = _0x344511;
        }
        for (_0x344511 = 0; _0x344511 < 256; _0x344511++) {
            _0x3b4750 = (_0x3b4750 + _0x20e08e[_0x344511] + _0x58fa9b.charCodeAt(_0x344511 % _0x58fa9b.length)) % 256;
            _0x29527d = _0x20e08e[_0x344511];
            _0x20e08e[_0x344511] = _0x20e08e[_0x3b4750];
            _0x20e08e[_0x3b4750] = _0x29527d;
        }
        _0x344511 = 0;
        _0x3b4750 = 0;
        for (var _0x35d1b8 = 0; _0x35d1b8 < _0x2bbed3.length; _0x35d1b8++) {
            _0x344511 = (_0x344511 + 1) % 256;
            _0x3b4750 = (_0x3b4750 + _0x20e08e[_0x344511]) % 256;
            _0x29527d = _0x20e08e[_0x344511];
            _0x20e08e[_0x344511] = _0x20e08e[_0x3b4750];
            _0x20e08e[_0x3b4750] = _0x29527d;
            _0xc68cb0 += String.fromCharCode(_0x2bbed3.charCodeAt(_0x35d1b8) ^ _0x20e08e[(_0x20e08e[_0x344511] + _0x20e08e[_0x3b4750]) % 256]);
        }
        return _0xc68cb0;
    }
    function _0x2dc7d6(_0x288bb5) {
        var _0xd5131b = libs.string_btoa(_0x288bb5);
        return _0xd5131b.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    var PROVIDER, DOMAIN, headers, urlDetail, dataDetail, textDetail, userID, v, reqVrf, vrf, apiIDUrl, srcIds, _i, _a, item, directUrl, res, tracks, _b, _c, item_1, lang, parseLang, e_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                PROVIDER = 'VidsrcCC';
                DOMAIN = "https://vidsrc.cc";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
                    'Referer': "https://vidsrc.cc/",
                    'Origin': DOMAIN,
                };
                _d.label = 1;
            case 1:
                _d.trys.push([1, 11, , 12]);
                urlDetail = "".concat(DOMAIN, "/v2/embed/movie/").concat(movieInfo.tmdb_id, "?autoPlay=false");
                if (movieInfo.type == 'tv') {
                    urlDetail = "".concat(DOMAIN, "/v2/embed/tv/").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode, "?autoPlay=false");
                }
                libs.log({ urlDetail: urlDetail }, PROVIDER, "URL DETAIL");
                return [4, fetch(urlDetail, {
                        headers: headers
                    })];
            case 2:
                dataDetail = _d.sent();
                return [4, dataDetail.text()];
            case 3:
                textDetail = _d.sent();
                userID = textDetail.match(/userId *\= *\"([^\"]+)/i);
                userID = userID ? userID[1] : '';
                libs.log({ userID: userID }, PROVIDER, "USER ID");
                if (!userID) {
                    return [2];
                }
                v = textDetail.match(/var *v *\= *\"([^\"]+)/i);
                v = v ? v[1] : '';
                libs.log({ v: v }, PROVIDER, "V");
                if (!v) {
                    return [2];
                }
                return [4, fetch("https://aquariumtv.app/vidsrccc?id=".concat(movieInfo.tmdb_id, "&user_id=").concat(userID))];
            case 4:
                reqVrf = _d.sent();
                return [4, reqVrf.text()];
            case 5:
                vrf = _d.sent();
                libs.log({ vrf: vrf }, PROVIDER, "VRF");
                if (!vrf) {
                    return [2];
                }
                apiIDUrl = "".concat(DOMAIN, "/api/").concat(movieInfo.tmdb_id, "/servers?id=").concat(movieInfo.tmdb_id, "&type=movie&v=").concat(v, "&vrf=").concat(vrf, "&imdbId=").concat(movieInfo.imdb_id);
                return [4, libs.request_get(apiIDUrl, headers)];
            case 6:
                srcIds = _d.sent();
                libs.log({ srcIds: srcIds }, PROVIDER, "SRC IDS");
                if (!srcIds || !srcIds.data || !srcIds.data.length) {
                    return [2];
                }
                _i = 0, _a = srcIds.data;
                _d.label = 7;
            case 7:
                if (!(_i < _a.length)) return [3, 10];
                item = _a[_i];
                directUrl = "".concat(DOMAIN, "/api/source/").concat(item.hash);
                return [4, libs.request_get(directUrl, headers)];
            case 8:
                res = _d.sent();
                libs.log({ res: res }, PROVIDER, 'RES FINAL');
                if (!res || !res.data) {
                    return [3, 9];
                }
                tracks = [];
                for (_b = 0, _c = res.data.subtitles || []; _b < _c.length; _b++) {
                    item_1 = _c[_b];
                    lang = item_1.label;
                    if (!lang) {
                        continue;
                    }
                    libs.log({ lang: lang, item: item_1 }, PROVIDER, "TRACK ITEM");
                    parseLang = lang.match(/([A-z0-9]+)/i);
                    parseLang = parseLang ? parseLang[1].trim() : '';
                    if (!parseLang) {
                        continue;
                    }
                    tracks.push({
                        file: item_1.file,
                        kind: 'captions',
                        label: parseLang
                    });
                }
                if (!res.data.source) {
                    return [3, 9];
                }
                libs.embed_callback(res.data.source, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, [{ "file": res.data.source, "quality": 1080 }], headers, {
                    type: "m3u8"
                });
                _d.label = 9;
            case 9:
                _i++;
                return [3, 7];
            case 10: return [3, 12];
            case 11:
                e_1 = _d.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 12];
            case 12: return [2];
        }
    });
}); };
