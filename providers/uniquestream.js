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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, sourceData, iframeUrl, _i, sourceData_1, sourceItem, urlAjax, body, headers, resultAjax, embedUrl, _a, iframeUrl_1, iframeItem, hlsUrl, parseHls, directUrl;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'DUniqueStream';
                DOMAIN = "https://uniquestream.net";
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/episodes/").concat(libs.url_slug_search(movieInfo), "-season-").concat(movieInfo.season, "-episode-").concat(movieInfo.episode);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/movies/").concat(libs.url_slug_search(movieInfo), "-").concat(movieInfo.year);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _b.sent();
                sourceData = [];
                libs.log({ length: parseSearch('ul#playeroptionsul > li').length }, PROVIDER, 'SEARCH LENGTH');
                parseSearch('ul#playeroptionsul > li').each(function (key, item) {
                    var id = parseSearch(item).attr('data-post');
                    var nume = parseSearch(item).attr('data-nume');
                    libs.log({ id: id, nume: nume }, PROVIDER, 'NUME');
                    sourceData.push({
                        id: id,
                        nume: nume
                    });
                });
                iframeUrl = [];
                _i = 0, sourceData_1 = sourceData;
                _b.label = 2;
            case 2:
                if (!(_i < sourceData_1.length)) return [3, 5];
                sourceItem = sourceData_1[_i];
                urlAjax = "".concat(DOMAIN, "/wp-admin/admin-ajax.php");
                body = "action=doo_player_ajax&post=".concat(sourceItem.id, "&nume=").concat(sourceItem.nume, "&type=").concat(movieInfo.type);
                headers = {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    referer: DOMAIN,
                    'X-Requested-With': 'XMLHttpRequest'
                };
                libs.log({ urlAjax: urlAjax, body: body, headers: headers }, PROVIDER, 'AJAX INFO');
                return [4, libs.request_post(urlAjax, headers, body)];
            case 3:
                resultAjax = _b.sent();
                libs.log({ resultAjax: resultAjax }, PROVIDER, 'RESULT AJAX');
                embedUrl = resultAjax.embed_url;
                if (!embedUrl) {
                    return [3, 4];
                }
                iframeUrl.push(embedUrl);
                _b.label = 4;
            case 4:
                _i++;
                return [3, 2];
            case 5:
                libs.log({ iframeUrl: iframeUrl }, PROVIDER, 'IFRAME URL');
                _a = 0, iframeUrl_1 = iframeUrl;
                _b.label = 6;
            case 6:
                if (!(_a < iframeUrl_1.length)) return [3, 9];
                iframeItem = iframeUrl_1[_a];
                hlsUrl = iframeItem;
                if (_.startsWith(hlsUrl, '/')) {
                    hlsUrl = "https:".concat(hlsUrl);
                }
                libs.log({ hlsUrl: hlsUrl }, PROVIDER, 'HLS URL');
                if (!(hlsUrl.indexOf('uniquestream') != -1)) return [3, 8];
                return [4, libs.request_get(hlsUrl, {
                        referer: "".concat(DOMAIN, "/"),
                        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
                    })];
            case 7:
                parseHls = _b.sent();
                directUrl = parseHls.match(/let *url *\= *\'([^\']+)/i);
                directUrl = directUrl ? directUrl[1] : '';
                directUrl = directUrl.replace("/master/", "/shared/");
                libs.log({ directUrl: directUrl }, PROVIDER, 'DIRECT URL');
                if (!directUrl) {
                    return [3, 8];
                }
                libs.embed_callback(directUrl, PROVIDER, PROVIDER, 'hls', callback, 1, [], [], {
                    Referer: hlsUrl
                });
                _b.label = 8;
            case 8:
                _a++;
                return [3, 6];
            case 9: return [2, true];
        }
    });
}); };
