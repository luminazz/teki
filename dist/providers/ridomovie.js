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
    var PROVIDER, DOMAIN, slugDetail, url, parseSearch, _i, _a, item, url, htmlSearch, parseSeach, id, detailUrl, parseDetail, _b, _c, item, iframeUrl, htmlDetail, textDetail, parseDirect, e_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                PROVIDER = 'LRIDOMOVIE';
                DOMAIN = "https://ridomovies.tv";
                _d.label = 1;
            case 1:
                _d.trys.push([1, 15, , 16]);
                slugDetail = '';
                if (!(movieInfo.type == 'movie')) return [3, 3];
                url = "".concat(DOMAIN, "/core/api/search?q=").concat(movieInfo.imdb_id);
                return [4, libs.request_get(url)];
            case 2:
                parseSearch = _d.sent();
                libs.log({ parseSearch: parseSearch }, PROVIDER, "PARSE SEARCH");
                for (_i = 0, _a = parseSearch.data.items; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (item.contentable.tmdbId == movieInfo.tmdb_id) {
                        slugDetail = item.slug;
                        break;
                    }
                }
                return [3, 6];
            case 3:
                url = "".concat(DOMAIN, "/tv/").concat(libs.url_slug_search(movieInfo, '-'), "/season-").concat(movieInfo.season, "/episode-").concat(movieInfo.episode);
                return [4, fetch(url)];
            case 4:
                htmlSearch = _d.sent();
                return [4, htmlSearch.text()];
            case 5:
                parseSeach = _d.sent();
                libs.log({ parseSeach: parseSeach, url: url }, PROVIDER, "PARSE SEARCH");
                id = parseSeach.match(/postid\\\"\:\\\"([0-9]+)/i);
                id = id ? id[1] : '';
                libs.log({ id: id }, PROVIDER, "PARSE SEARCH");
                if (!id) {
                    return [2];
                }
                slugDetail = id;
                _d.label = 6;
            case 6:
                libs.log({ slugDetail: slugDetail }, PROVIDER, 'SLUG_DETAIL');
                if (!slugDetail) {
                    return [2];
                }
                detailUrl = "".concat(DOMAIN, "/core/api/movies/").concat(slugDetail, "/videos");
                if (movieInfo.type == 'tv') {
                    detailUrl = "".concat(DOMAIN, "/core/api/episodes/").concat(slugDetail, "/videos");
                }
                return [4, libs.request_get(detailUrl)];
            case 7:
                parseDetail = _d.sent();
                libs.log({ parseDetail: parseDetail }, PROVIDER, "PARSE DETAIL");
                _b = 0, _c = parseDetail.data;
                _d.label = 8;
            case 8:
                if (!(_b < _c.length)) return [3, 14];
                item = _c[_b];
                iframeUrl = item.url.match(/data\-src\=\"([^\"]+)/i);
                iframeUrl = iframeUrl ? iframeUrl[1] : '';
                libs.log({ iframeUrl: iframeUrl }, PROVIDER, 'IFRAME URL');
                if (!iframeUrl) {
                    return [3, 13];
                }
                if (!(iframeUrl.indexOf("ridoo.net") != -1)) return [3, 11];
                return [4, fetch(iframeUrl, {
                        headers: {
                            Referer: "".concat(DOMAIN, "/"),
                            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                        }
                    }, false)];
            case 9:
                htmlDetail = _d.sent();
                return [4, htmlDetail.text()];
            case 10:
                textDetail = _d.sent();
                parseDirect = textDetail.match(/file\:\"([^\"]+)/i);
                parseDirect = parseDirect ? parseDirect[1] : "";
                libs.log({ parseDirect: parseDirect }, PROVIDER, 'PARSE DIRECT');
                libs.embed_callback(parseDirect, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: parseDirect, quality: 1080 }], {
                    Referer: "".concat(DOMAIN, "/"),
                });
                return [3, 13];
            case 11: return [4, libs.embed_redirect(iframeUrl, '', movieInfo, PROVIDER, callback, undefined, [])];
            case 12:
                _d.sent();
                _d.label = 13;
            case 13:
                _b++;
                return [3, 8];
            case 14: return [3, 16];
            case 15:
                e_1 = _d.sent();
                libs.log({ e: e_1 }, PROVIDER);
                return [3, 16];
            case 16: return [2, true];
        }
    });
}); };
