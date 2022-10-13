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
    var PROVIDER, DOMAIN, exist_1, decode, lang, filmInfo_1, urlSearch, parseSearch_1, LINK_DETAIL_1, parseDetail_1, filmIds_2, dataFav, dataId, timestamp, urlGetHash, headersHash, hashData, _i, filmIds_1, filmItem, body, resultHash, _a, hashData_1, hashItem, decryptData, parseDirect, directQuality, _b, parseDirect_1, parseDirectItem, quality, urlDirect, requestData, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                PROVIDER = 'KREZKA';
                DOMAIN = "https://rezka.ag";
                _c.label = 1;
            case 1:
                _c.trys.push([1, 19, , 20]);
                exist_1 = function (x) {
                    return x != null && typeof (x) != 'undefined' && x != 'undefined';
                };
                decode = function (x) {
                    var a;
                    a = x.substr(2);
                    var v = {
                        4: '$$!!@$$@^!@#$$@',
                        3: '@@@@@!##!^^^',
                        2: '####^!!##!@@',
                        1: '^^^!@##!!##',
                        0: '$$#!!@#!@##',
                        file3_separator: '//_//'
                    };
                    for (var i = 4; i > -1; i--) {
                        if (exist_1(v[i])) {
                            if (v[i] != "") {
                                a = a.replace(v.file3_separator + b1(v[i]), "");
                            }
                        }
                    }
                    try {
                        a = b2(a);
                    }
                    catch (e) {
                        a = "";
                    }
                    function b1(str) {
                        return libs.string_btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
                            return String.fromCharCode("0x" + p1);
                        }));
                    }
                    function b2(str) {
                        return decodeURIComponent(libs.string_atob(str).split("").map(function (c) {
                            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                        }).join(""));
                    }
                    console.log({ a: a }, 'DECODE');
                    return a;
                };
                lang = 'ru';
                filmInfo_1 = {};
                if (!(movieInfo.type == 'movie')) return [3, 3];
                return [4, libs.tmdb_movie_info(movieInfo.tmdb_id, lang)];
            case 2:
                filmInfo_1 = _c.sent();
                return [3, 5];
            case 3: return [4, libs.tmdb_tv_info(movieInfo.tmdb_id, lang)];
            case 4:
                filmInfo_1 = _c.sent();
                _c.label = 5;
            case 5:
                urlSearch = "".concat(DOMAIN, "/search/?do=search&subaction=search&q=").concat(libs.url_slug_search(movieInfo, '+'));
                libs.log({ urlSearch: urlSearch, filmInfo: filmInfo_1 }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 6:
                parseSearch_1 = _c.sent();
                LINK_DETAIL_1 = '';
                libs.log({
                    urlSearch: urlSearch,
                    filmInfo: filmInfo_1,
                    length: parseSearch_1('.b-content__inline_item').length,
                }, PROVIDER, 'SEARCH INFO');
                parseSearch_1('.b-content__inline_item').each(function (key, item) {
                    var title = parseSearch_1(item).find('.b-content__inline_item-link a').text();
                    var href = parseSearch_1(item).attr('data-url');
                    var year = parseSearch_1(item).find('.b-content__inline_item-link div').text();
                    year = year.trim().match(/(^[0-9]+)/i);
                    year = year ? year[1] : 0;
                    var label = parseSearch_1(item).find('.films .entity').text();
                    var type = 'movie';
                    if (label != 'Фильм') {
                        type = 'tv';
                    }
                    var movieTitle = filmInfo_1.title;
                    libs.log({
                        title: title,
                        href: href,
                        label: label,
                        type: type,
                        movieTitle: movieTitle,
                        matching: filmInfo_1.title.toLowerCase() == title.toLowerCase(),
                    }, PROVIDER, 'SEARCH INFO');
                    if (title && href && !LINK_DETAIL_1 && type) {
                        if (type == 'movie' && movieInfo.type == 'movie' && year == movieInfo.year) {
                            if (libs.string_matching_title({ title: movieTitle }, title)) {
                                LINK_DETAIL_1 = href;
                            }
                        }
                        if (type == 'tv' && movieInfo.type == 'tv') {
                            if (libs.string_matching_title({ title: movieTitle }, title) || title.indexOf(movieTitle) != -1) {
                                LINK_DETAIL_1 = href;
                            }
                        }
                    }
                });
                libs.log({
                    LINK_DETAIL: LINK_DETAIL_1
                }, PROVIDER, 'LINK DETAIL');
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                return [4, libs.request_get(LINK_DETAIL_1, {}, true)];
            case 7:
                parseDetail_1 = _c.sent();
                filmIds_2 = [];
                dataFav = parseDetail_1('#ctrl_favs').val();
                dataId = parseDetail_1('.b-sidelinks__link.show-trailer').attr('data-id');
                libs.log({
                    length: parseDetail_1('#translators-list .b-translator__item').length,
                    dataId: dataId,
                }, PROVIDER, 'TRANSLATOR LENGTH');
                parseDetail_1('#translators-list .b-translator__item').each(function (key, item) {
                    var dataTransId = parseDetail_1(item).attr('data-translator_id');
                    if (dataTransId) {
                        filmIds_2.push({
                            data_trans_id: dataTransId,
                        });
                    }
                });
                timestamp = new Date().getTime();
                urlGetHash = "".concat(DOMAIN, "/ajax/get_cdn_series/?t=").concat(timestamp);
                headersHash = {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                };
                libs.log({
                    filmIds: filmIds_2
                }, PROVIDER, 'FILM ID');
                hashData = [];
                _i = 0, filmIds_1 = filmIds_2;
                _c.label = 8;
            case 8:
                if (!(_i < filmIds_1.length)) return [3, 11];
                filmItem = filmIds_1[_i];
                body = {};
                if (movieInfo.type == 'movie') {
                    body = {
                        id: dataId,
                        translator_id: filmItem.data_trans_id,
                        is_camrip: 0,
                        is_ads: 0,
                        is_director: 0,
                        favs: dataFav,
                        action: 'get_movie'
                    };
                }
                else {
                    body = {
                        id: dataId,
                        translator_id: filmItem.data_trans_id,
                        season: movieInfo.season,
                        episode: movieInfo.episode,
                        favs: dataFav,
                        action: 'get_stream'
                    };
                }
                return [4, libs.request_post(urlGetHash, headersHash, qs.stringify(body), false, false)];
            case 9:
                resultHash = _c.sent();
                libs.log({
                    urlGetHash: urlGetHash,
                    headersHash: headersHash,
                    body: qs.stringify(body),
                    resultHash: resultHash
                }, PROVIDER, 'REQUEST HASH');
                if (resultHash.url) {
                    hashData.push(resultHash.url);
                }
                _c.label = 10;
            case 10:
                _i++;
                return [3, 8];
            case 11:
                libs.log({
                    hashData: hashData
                }, PROVIDER, 'HASH DATA');
                _a = 0, hashData_1 = hashData;
                _c.label = 12;
            case 12:
                if (!(_a < hashData_1.length)) return [3, 18];
                hashItem = hashData_1[_a];
                decryptData = decode(hashItem);
                libs.log({
                    decryptData: decryptData
                }, PROVIDER, 'DECRYPT DATA');
                if (!decryptData) {
                    return [3, 17];
                }
                parseDirect = decryptData.split(',');
                directQuality = [];
                _b = 0, parseDirect_1 = parseDirect;
                _c.label = 13;
            case 13:
                if (!(_b < parseDirect_1.length)) return [3, 16];
                parseDirectItem = parseDirect_1[_b];
                quality = parseDirectItem.match(/^\[([0-9]+)p/i);
                quality = quality ? quality[1] : '720';
                urlDirect = parseDirectItem.replace(/^\[[^\]]+\]/i, '');
                urlDirect = urlDirect.split(' or ');
                urlDirect = urlDirect[0].trim();
                libs.log({
                    urlDirect: urlDirect
                }, PROVIDER, 'urlDirect');
                return [4, fetch(urlDirect, {
                        redirect: 'manual',
                    })];
            case 14:
                requestData = _c.sent();
                libs.log({
                    requestData: requestData
                }, PROVIDER, 'REQUEST_DATA');
                urlDirect = requestData.url;
                directQuality.push({
                    file: urlDirect,
                    quality: Number(quality),
                });
                _c.label = 15;
            case 15:
                _b++;
                return [3, 13];
            case 16:
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({
                    directQuality: directQuality
                }, PROVIDER, 'directQuality');
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality);
                _c.label = 17;
            case 17:
                _a++;
                return [3, 12];
            case 18: return [2, true];
            case 19:
                e_1 = _c.sent();
                libs.log(e_1, PROVIDER, 'ERROR GET');
                return [2];
            case 20: return [2];
        }
    });
}); };
