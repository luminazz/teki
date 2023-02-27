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
    function decryptGomoviesJson(str, key) {
        if (key === void 0) { key = "123"; }
        var output = '';
        var i = 0;
        while (i < str.length) {
            var j = 0;
            while (j < key.length && i < str.length) {
                output += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(j));
                j++;
                i++;
            }
        }
        return output;
    }
    var PROVIDER, DOMAIN, urlSearch, LINK_DETAIL_1, parseSearch_1, LINK_TV_DETAIL, parseTv, hrefTv, parseDetail, cookieData, serverData, serverUrl, advanced, parseServer_1, iframeUrls_2, qualities, directQuality, _i, iframeUrls_1, iframeItem, parseIframe, encode, parseEncode, parseFirstEncode, _a, qualities_1, qualityItem, urlReplace, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'EGoMovies';
                DOMAIN = "https://gomovies-online.com";
                urlSearch = "".concat(DOMAIN, "/search/").concat(libs.url_slug_search(movieInfo, '%20'));
                _b.label = 1;
            case 1:
                _b.trys.push([1, 14, , 15]);
                LINK_DETAIL_1 = '';
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch_1 = _b.sent();
                libs.log({ length: parseSearch_1('div._gory div.g_yFsxmKnYLvpKDTrdbizeYMWy').length }, PROVIDER, 'SEARCH LENGTH');
                parseSearch_1('div._gory div.g_yFsxmKnYLvpKDTrdbizeYMWy').each(function (key, item) {
                    var title = parseSearch_1(item).attr('data-filmname');
                    var year = parseSearch_1(item).attr('data-year');
                    var herf = parseSearch_1(item).find('a').attr('href');
                    if (title) {
                        var season = title.match(/season *([0-9]+)/i);
                        season = season ? Number(season[1]) : 0;
                        title = title.replace(/\- *season *.*/i, '').trim();
                        libs.log({ title: title, year: year, herf: herf, season: season }, PROVIDER, 'SEARCH INFO');
                        if (libs.string_matching_title(movieInfo, title) && !LINK_DETAIL_1) {
                            if (movieInfo.type == 'movie' && !season && movieInfo.year == year) {
                                LINK_DETAIL_1 = "".concat(DOMAIN).concat(herf);
                            }
                            if (movieInfo.type == 'tv' && season && season === movieInfo.season) {
                                LINK_DETAIL_1 = "".concat(DOMAIN).concat(herf);
                            }
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, 'LINK DETAIL');
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                LINK_TV_DETAIL = '';
                if (!(movieInfo.type == 'tv')) return [3, 4];
                return [4, libs.request_get(LINK_DETAIL_1, {}, true)];
            case 3:
                parseTv = _b.sent();
                hrefTv = parseTv("div#g_MXOzFGouZrOAUioXjpddqkZK a:nth-child(".concat(movieInfo.episode, ")")).attr('href');
                libs.log({ hrefTv: hrefTv }, PROVIDER, 'HREF TV');
                if (hrefTv) {
                    LINK_TV_DETAIL = "".concat(DOMAIN).concat(hrefTv);
                }
                _b.label = 4;
            case 4:
                libs.log({ LINK_TV_DETAIL: LINK_TV_DETAIL }, PROVIDER, 'LINK DETAIL TV');
                if (movieInfo.type == 'tv' && !LINK_TV_DETAIL) {
                    return [2];
                }
                if (movieInfo.type == 'tv' && LINK_TV_DETAIL) {
                    LINK_DETAIL_1 = LINK_TV_DETAIL;
                }
                return [4, libs.cookies_clearAll()];
            case 5:
                _b.sent();
                return [4, libs.request_get(LINK_DETAIL_1, {}, false)];
            case 6:
                parseDetail = _b.sent();
                return [4, libs.cookies_get(LINK_DETAIL_1)];
            case 7:
                cookieData = _b.sent();
                return [4, libs.cookies_clearAll()];
            case 8:
                _b.sent();
                libs.log({ cookieData: cookieData }, PROVIDER, "COOKIE DATA");
                serverData = parseDetail.match(/var *url *\= *\'([^\']+)/i);
                serverData = serverData ? serverData[1] : '';
                libs.log({ serverData: serverData }, PROVIDER, 'SERVER DATA');
                if (!serverData) {
                    return [2];
                }
                serverUrl = "".concat(DOMAIN).concat(serverData);
                advanced = cookieData['advanced-frontendgomovies3']['value'] || '';
                return [4, libs.request_get(serverUrl, {
                        cookie: "advanced-frontendgomovies3=".concat(advanced),
                        referer: LINK_DETAIL_1,
                        'X-Requested-With': 'XMLHttpRequest'
                    }, true)];
            case 9:
                parseServer_1 = _b.sent();
                iframeUrls_2 = [];
                parseServer_1('ul li').each(function (key, item) {
                    var server = parseServer_1(item).attr('data-value');
                    var iframeUrl = "".concat(LINK_DETAIL_1, "?server=").concat(server, "&_=").concat(Date.now());
                    iframeUrls_2.push(iframeUrl);
                });
                qualities = [2160, 1440, 1080, 720, 480, 360];
                directQuality = [];
                _i = 0, iframeUrls_1 = iframeUrls_2;
                _b.label = 10;
            case 10:
                if (!(_i < iframeUrls_1.length)) return [3, 13];
                iframeItem = iframeUrls_1[_i];
                return [4, libs.request_get(iframeItem, {
                        cookie: "advanced-frontendgomovies3=".concat(advanced),
                        referer: LINK_DETAIL_1,
                        'X-Requested-With': 'XMLHttpRequest'
                    })];
            case 11:
                parseIframe = _b.sent();
                encode = decryptGomoviesJson(libs.string_base64_decode(parseIframe));
                parseEncode = JSON.parse("{\"a\": ".concat(encode, "}"));
                libs.log({ parseEncode: parseEncode }, PROVIDER, 'ENCODE');
                parseFirstEncode = parseEncode['a'][0];
                if (!parseFirstEncode) {
                    return [3, 12];
                }
                libs.log(parseFirstEncode, PROVIDER, 'PARSE FIRST ENCODE');
                for (_a = 0, qualities_1 = qualities; _a < qualities_1.length; _a++) {
                    qualityItem = qualities_1[_a];
                    urlReplace = parseFirstEncode.src.replace(360, qualityItem);
                    libs.log({
                        urlReplace: urlReplace,
                    }, PROVIDER, 'URL STATUS');
                    if (Number(parseFirstEncode.max) >= qualityItem) {
                        directQuality.push({
                            file: urlReplace,
                            quality: qualityItem,
                        });
                    }
                }
                _b.label = 12;
            case 12:
                _i++;
                return [3, 10];
            case 13:
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({ directQuality: directQuality }, PROVIDER, 'directQuality');
                if (directQuality.length) {
                    libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality, {});
                }
                return [3, 15];
            case 14:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 15];
            case 15: return [2];
        }
    });
}); };
