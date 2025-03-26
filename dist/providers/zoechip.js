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
    var PROVIDER, DOMAIN, headers, urlSearch, parseSearch, id, urlDetail, headers_1, body, parseDetail, filemoon, requestData, redirectUrl, parseRedirect, iframeURL, dataDetailIframe, htmlServer, evalData, evalData, unpacker, file, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'JZoeChip';
                DOMAIN = "https://zoechip.org";
                headers = {
                    Referer: DOMAIN,
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                urlSearch = "".concat(DOMAIN, "/film/").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year);
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/episode/").concat(libs.url_slug_search(movieInfo, '-'), "-season-").concat(movieInfo.season, "-episode-").concat(movieInfo.episode);
                }
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch = _a.sent();
                id = parseSearch('div#show_player_ajax').attr('movie-id');
                libs.log({ id: id, urlSearch: urlSearch }, PROVIDER, 'ID');
                if (!id) {
                    return [2];
                }
                urlDetail = "".concat(DOMAIN, "/wp-admin/admin-ajax.php");
                headers_1 = {
                    Referer: urlSearch,
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                };
                body = qs.stringify({
                    action: "lazy_player",
                    movieID: id,
                });
                return [4, libs.request_post(urlDetail, headers_1, body, true)];
            case 3:
                parseDetail = _a.sent();
                filemoon = parseDetail("ul.nav a:contains(Filemoon)").attr('data-server');
                libs.log({ filemoon: filemoon }, PROVIDER, 'FILEMOON');
                return [4, fetch(filemoon, {
                        redirect: 'manual',
                        method: 'HEAD',
                        headers: headers_1,
                    })];
            case 4:
                requestData = _a.sent();
                redirectUrl = requestData.url;
                libs.log({ redirectUrl: redirectUrl, requestData: requestData }, PROVIDER, 'REQUEST DATA');
                if (!redirectUrl) {
                    return [2];
                }
                return [4, libs.request_get(redirectUrl, headers_1, true)];
            case 5:
                parseRedirect = _a.sent();
                iframeURL = parseRedirect('iframe').attr('src');
                libs.log({ iframeURL: iframeURL }, PROVIDER, 'IFRAME URL');
                if (!iframeURL) {
                    return [2];
                }
                return [4, fetch(iframeURL, {
                        headers: headers_1,
                    })];
            case 6:
                dataDetailIframe = _a.sent();
                return [4, dataDetailIframe.text()];
            case 7:
                htmlServer = _a.sent();
                evalData = htmlServer.match(/eval\(function\(p,a,c,k,e,.*\)\)/i);
                evalData = evalData ? evalData[0] : '';
                if (!evalData) {
                    return [2];
                }
                unpacker = libs.string_unpacker_v2(evalData);
                libs.log({ unpacker: unpacker }, PROVIDER, 'UNPACKER');
                file = unpacker.match(/file *\: *\"([^\"]+)/i);
                file = file ? file[1] : '';
                libs.log({ file: file }, PROVIDER, 'FILE');
                if (!file) {
                    return [2];
                }
                libs.embed_callback(file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: file, quality: 1080 }], headers_1);
                return [3, 9];
            case 8:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER);
                return [3, 9];
            case 9: return [2, true];
        }
    });
}); };
