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
    var PROVIDER, DOMAIN, urlSearch, headers, parseSearch, LINK_DETAIL, _i, _a, item, parseLinkDetail, id, urlEmbed, body, headerEmbed, parseEmbed, directUrl, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'Nepu';
                DOMAIN = "https://nepu.to";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                urlSearch = "".concat(DOMAIN, "/ajax/posts?q=").concat(libs.url_slug_search(movieInfo, '%20'));
                headers = {
                    'X-Requested-With': 'XMLHttpRequest',
                };
                return [4, libs.request_get(urlSearch, headers)];
            case 2:
                parseSearch = _b.sent();
                LINK_DETAIL = "";
                libs.log({ parseSearch: parseSearch }, PROVIDER, 'PARSE SEARCH');
                for (_i = 0, _a = parseSearch.data; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (libs.string_matching_title(movieInfo, item.name)) {
                        libs.log({ url: item.url, index: "/movie/".concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year, "-"), c: item.url.indexOf("/movie/".concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year, "-")) }, PROVIDER, 'DATA');
                        if (movieInfo.type == 'movie' && item.type == "Movie" && item.url.indexOf("/movie/".concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year, "-")) != -1) {
                            LINK_DETAIL = item.url;
                        }
                        else if (movieInfo.type == 'tv' && item.type == "Serie" && item.url.indexOf("/serie/".concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year, "-")) != -1) {
                            LINK_DETAIL = item.url;
                        }
                    }
                }
                libs.log({ LINK_DETAIL: LINK_DETAIL }, PROVIDER, 'LINK_DETAIL');
                if (!LINK_DETAIL) {
                    return [2];
                }
                LINK_DETAIL = "".concat(DOMAIN).concat(LINK_DETAIL);
                if (movieInfo.type == 'tv') {
                    LINK_DETAIL = "".concat(LINK_DETAIL, "/season/").concat(movieInfo.season, "/episode/").concat(movieInfo.episode);
                }
                libs.log({ LINK_DETAIL: LINK_DETAIL }, PROVIDER, 'LINK_DETAIL');
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 3:
                parseLinkDetail = _b.sent();
                id = parseLinkDetail('a[data-embed]').attr('data-embed');
                libs.log({ id: id }, PROVIDER, 'ID');
                if (!id) {
                    return [2];
                }
                urlEmbed = "".concat(DOMAIN, "/ajax/embed");
                body = qs.stringify({
                    id: id
                });
                headerEmbed = {
                    'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
                    Referer: LINK_DETAIL
                };
                return [4, libs.request_post(urlEmbed, headerEmbed, body)];
            case 4:
                parseEmbed = _b.sent();
                libs.log({ parseEmbed: parseEmbed }, PROVIDER, 'PARSE EMBED');
                directUrl = parseEmbed.match(/file\" *\: *\"([^\"]+)/i);
                directUrl = directUrl ? directUrl[1] : '';
                libs.log({ directUrl: directUrl }, PROVIDER, 'DIRECT URL');
                if (!directUrl) {
                    return [2];
                }
                libs.embed_callback(directUrl, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: directUrl, quality: 1080 }]);
                return [3, 6];
            case 5:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 6];
            case 6: return [2];
        }
    });
}); };
