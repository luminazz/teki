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
    var PROVIDER, DOMAIN, headers, urlSearch, headers_1, body, dataSearch, ID, _i, _a, item, title, urlDirect, dataDirect, streamQuality, _b, _c, item, HlsQuality, _d, _e, item, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'CAoneroom';
                DOMAIN = "https://h5.aoneroom.com";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': "hhttps://h5.aoneroom.com/"
                };
                _f.label = 1;
            case 1:
                _f.trys.push([1, 4, , 5]);
                urlSearch = "".concat(DOMAIN, "/wefeed-h5-bff/web/subject/search");
                headers_1 = {
                    "Content-Type": "application/json",
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': DOMAIN
                };
                body = {
                    keyword: movieInfo.title,
                    page: 1,
                    perPage: 24,
                    subjectType: movieInfo.type == 'movie' ? 1 : 2
                };
                return [4, libs.request_post(urlSearch, headers_1, body)];
            case 2:
                dataSearch = _f.sent();
                libs.log({ dataSearch: dataSearch }, PROVIDER, "DATA SEARCH");
                if (!dataSearch.data) {
                    return [2];
                }
                ID = "";
                for (_i = 0, _a = dataSearch.data.items; _i < _a.length; _i++) {
                    item = _a[_i];
                    title = item.title;
                    if (item && item.subjectId && libs.string_matching_title(movieInfo, title)) {
                        ID = item.subjectId;
                        break;
                    }
                }
                libs.log({ ID: ID }, PROVIDER, "ID");
                if (!ID) {
                    return [2];
                }
                urlDirect = "".concat(DOMAIN, "/wefeed-h5-bff/web/subject/play?subjectId=").concat(ID, "&se=").concat(movieInfo.season || 0, "&ep=").concat(movieInfo.episode || 0);
                return [4, libs.request_get(urlDirect, headers_1)];
            case 3:
                dataDirect = _f.sent();
                libs.log({ dataDirect: dataDirect }, PROVIDER, "DATA DIRECT");
                if (!dataDirect.data) {
                    return [2];
                }
                streamQuality = [];
                for (_b = 0, _c = dataDirect.data.streams; _b < _c.length; _b++) {
                    item = _c[_b];
                    if (!item.url) {
                        continue;
                    }
                    streamQuality.push({
                        file: item.url,
                        quality: item.resolutions ? Number(item.resolutions) : 1080
                    });
                }
                if (streamQuality.length) {
                    streamQuality = _.orderBy(streamQuality, ['quality'], ['desc']);
                    libs.embed_callback(streamQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], streamQuality, headers_1);
                }
                HlsQuality = [];
                for (_d = 0, _e = dataDirect.data.hls; _d < _e.length; _d++) {
                    item = _e[_d];
                    if (!item.url) {
                        continue;
                    }
                    HlsQuality.push({
                        file: item.url,
                        quality: item.resolutions ? Number(item.resolutions) : 1080
                    });
                }
                if (HlsQuality.length) {
                    HlsQuality = _.orderBy(HlsQuality, ['quality'], ['desc']);
                    libs.embed_callback(HlsQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], HlsQuality, headers_1);
                }
                return [3, 5];
            case 4:
                e_1 = _f.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 5];
            case 5: return [2];
        }
    });
}); };
