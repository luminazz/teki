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
    var PROVIDER, DOMAIN, fflix, dude;
    var _this = this;
    return __generator(this, function (_a) {
        PROVIDER = 'TSmashyStream';
        DOMAIN = "https://embed.smashystream.com";
        fflix = function () { return __awaiter(_this, void 0, void 0, function () {
            var urlSearch, htmlDetail, fileDetail, parseDetail, directQuality, _i, parseDetail_1, parseItem, quality, directUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlSearch = "".concat(DOMAIN, "/ffix1.php?tmdb=").concat(movieInfo.tmdb_id);
                        if (movieInfo.type == 'tv') {
                            urlSearch = "".concat(DOMAIN, "/ffix1.php?tmdb=").concat(movieInfo.tmdb_id, "&season=").concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                        }
                        libs.log({
                            urlSearch: urlSearch
                        }, PROVIDER, 'URL SEARCH');
                        return [4, libs.request_get(urlSearch, {})];
                    case 1:
                        htmlDetail = _a.sent();
                        fileDetail = htmlDetail.match(/file *\: *\"([^\"]+)/i);
                        fileDetail = fileDetail ? fileDetail[1] : '';
                        libs.log({
                            fileDetail: fileDetail
                        }, PROVIDER, 'FILE DETAIL');
                        if (!fileDetail) {
                            return [2];
                        }
                        parseDetail = fileDetail.split(',');
                        directQuality = [];
                        libs.log({ parseDetail: parseDetail }, PROVIDER, 'PARSE DETAIL');
                        for (_i = 0, parseDetail_1 = parseDetail; _i < parseDetail_1.length; _i++) {
                            parseItem = parseDetail_1[_i];
                            if (!parseItem) {
                                continue;
                            }
                            quality = parseItem.match(/\[ *([0-9]+) *\]/i);
                            quality = quality ? Number(quality[1]) : 720;
                            directUrl = parseItem.replace(/\[ *.+ *\]/i, '').trim();
                            directQuality.push({
                                file: directUrl,
                                quality: quality,
                            });
                        }
                        libs.log({
                            directQuality: directQuality
                        }, PROVIDER, 'DIRECT QUALITY');
                        if (!directQuality.length) {
                            return [2];
                        }
                        directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                        libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality);
                        return [2];
                }
            });
        }); };
        dude = function () { return __awaiter(_this, void 0, void 0, function () {
            var urlSearch, htmlDetail, fileDetail, parseDetail, _i, parseDetail_2, item, directQuality, directUrl, parseDirectUrl, directQualityRegex, _a, directQualityRegex_1, directQualityItem, quality, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        urlSearch = "";
                        if (movieInfo.type == 'tv') {
                            urlSearch = "".concat(DOMAIN, "/dude_tv.php?imdb=").concat(movieInfo.imdb_id, "&season=").concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                        }
                        if (!urlSearch) {
                            return [2];
                        }
                        libs.log({
                            urlSearch: urlSearch
                        }, PROVIDER, 'URL SEARCH');
                        return [4, libs.request_get(urlSearch, {})];
                    case 1:
                        htmlDetail = _b.sent();
                        fileDetail = htmlDetail.match(/file *\: *\[([^\]]+)/i);
                        fileDetail = fileDetail ? fileDetail[1] : '';
                        libs.log({
                            fileDetail: fileDetail
                        }, PROVIDER, 'FILE DETAIL');
                        if (!fileDetail) {
                            return [2];
                        }
                        fileDetail = "{\"a\": [".concat(fileDetail, "]}");
                        parseDetail = JSON.parse(fileDetail);
                        parseDetail = parseDetail['a'];
                        libs.log({ parseDetail: parseDetail }, PROVIDER, 'PARSE DETAIL');
                        if (!parseDetail) {
                            return [2];
                        }
                        _i = 0, parseDetail_2 = parseDetail;
                        _b.label = 2;
                    case 2:
                        if (!(_i < parseDetail_2.length)) return [3, 7];
                        item = parseDetail_2[_i];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        directQuality = [];
                        directUrl = item.file;
                        if (!directUrl) {
                            return [3, 6];
                        }
                        if (directUrl.indexOf('https://') === -1) {
                            return [3, 6];
                        }
                        return [4, libs.request_get(directUrl, {})];
                    case 4:
                        parseDirectUrl = _b.sent();
                        directQualityRegex = parseDirectUrl.match(/\/[0-9]+\/index\.m3u8/ig);
                        libs.log({ directQualityRegex: directQualityRegex }, PROVIDER, 'DIRECT QUALITY REGEX');
                        for (_a = 0, directQualityRegex_1 = directQualityRegex; _a < directQualityRegex_1.length; _a++) {
                            directQualityItem = directQualityRegex_1[_a];
                            quality = directQualityItem.match(/\/([0-9]+)\//i);
                            quality = quality ? Number(quality[1]) : 720;
                            libs.log({ quality: quality, directQualityItem: directQualityItem }, PROVIDER, 'DIRECT QUALITY ITEM');
                            directQuality.push({
                                file: directUrl.replace('/index.m3u8', directQualityItem),
                                quality: quality,
                            });
                        }
                        if (!directQuality.length) {
                            return [3, 6];
                        }
                        directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                        libs.log({ directQuality: directQuality }, PROVIDER, 'directQuality');
                        libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality);
                        return [3, 6];
                    case 5:
                        e_1 = _b.sent();
                        return [3, 6];
                    case 6:
                        _i++;
                        return [3, 2];
                    case 7: return [2];
                }
            });
        }); };
        fflix();
        return [2];
    });
}); };
