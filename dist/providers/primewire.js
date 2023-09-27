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
    function decryptGomoviesJson(str) {
        key = dKey_1;
        var b = "";
        for (var i = 0; i < str.length;) {
            for (var j = 0; (j < eKey_1.toString().length && i < str.length); j++, i++) {
                b += String.fromCharCode(str[i].charCodeAt(0) ^ eKey_1.toString()[j].charCodeAt(0));
            }
        }
        return b;
    }
    var PROVIDER, DOMAIN, urlSearch, parseSearch_1, LINK_DETAIL_1, LINK_TV_DETAIL_1, parseTvDetail_1, htmlDetail, sKey, serverEndpoint, cookieDetail, urlServer, cookieDatas, item, parseCookieData, headers, htmlServer, parseServer_1, servers_2, evalData, evalData, unpacker, dKey_1, eKey_1, directQuality, qualities, _i, servers_1, item, urlGetIframe, dataIframe, encode, parseEncode, parseFirstEncode, _a, qualities_1, qualityItem, urlReplace, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'Primewire';
                DOMAIN = "https://real-primewire.club";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 13, , 14]);
                urlSearch = '';
                if (movieInfo.type == 'movie') {
                    urlSearch = "".concat(DOMAIN, "/search/").concat(libs.url_slug_search(movieInfo, '+'), "/movies");
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/search/").concat(libs.url_slug_search(movieInfo, '+'), "+season+").concat(movieInfo.season, "/series");
                }
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch_1 = _b.sent();
                LINK_DETAIL_1 = '';
                libs.log({ length: parseSearch_1('.RvnMfoxhgm').length }, PROVIDER, 'SEARCH LENGTH');
                parseSearch_1('.RvnMfoxhgm').each(function (key, item) {
                    var title = parseSearch_1(item).attr('data-filmname');
                    var year = parseSearch_1(item).attr('data-year');
                    var season = title.match(/\- *season *([0-9]+)/i);
                    season = season ? season[1] : 0;
                    title = title.replace(/\- *season.*/i, '').trim();
                    var href = parseSearch_1(item).find('a').attr('href');
                    libs.log({ title: title, year: year, season: season, href: href, LINK_DETAIL: LINK_DETAIL_1, match: libs.string_matching_title(movieInfo, title) });
                    if (href && !LINK_DETAIL_1 && libs.string_matching_title(movieInfo, title) && year == movieInfo.year) {
                        if (movieInfo.type == 'movie') {
                            LINK_DETAIL_1 = href;
                        }
                        else if (movieInfo.type == 'tv' && movieInfo.season == season) {
                            LINK_DETAIL_1 = href;
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, 'LINK DETAIL');
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                LINK_DETAIL_1 = "".concat(DOMAIN).concat(LINK_DETAIL_1);
                if (!(movieInfo.type == 'tv')) return [3, 4];
                LINK_TV_DETAIL_1 = "";
                return [4, libs.request_get(LINK_DETAIL_1, {}, true)];
            case 3:
                parseTvDetail_1 = _b.sent();
                libs.log({ length: parseTvDetail_1('.KsOSQEEnbs a').length }, PROVIDER, 'EPISODE LENGTH');
                parseTvDetail_1('.KsOSQEEnbs a').each(function (key, item) {
                    var episodeTitle = parseTvDetail_1(item).find('span').text();
                    var episode = episodeTitle.match(/episode *([0-9]+)/i);
                    episode = episode ? Number(episode[1]) : 0;
                    var href = parseTvDetail_1(item).attr('href');
                    libs.log({ href: href, episodeTitle: episodeTitle }, PROVIDER, 'EPISODE');
                    if (episode == movieInfo.episode && href) {
                        LINK_TV_DETAIL_1 = "".concat(DOMAIN).concat(href);
                    }
                });
                if (!LINK_TV_DETAIL_1) {
                    return [2];
                }
                LINK_DETAIL_1 = LINK_TV_DETAIL_1;
                _b.label = 4;
            case 4: return [4, libs.cookies_clearAll()];
            case 5:
                _b.sent();
                return [4, libs.request_get(LINK_DETAIL_1, {})];
            case 6:
                htmlDetail = _b.sent();
                sKey = htmlDetail.match(/key *\: *\'([^\']+)/i);
                sKey = sKey ? sKey[1] : '';
                serverEndpoint = htmlDetail.match(/\/user\/servers\/([^\']+)/i);
                serverEndpoint = serverEndpoint ? serverEndpoint[1] : '';
                return [4, libs.cookies_get(LINK_DETAIL_1)];
            case 7:
                cookieDetail = _b.sent();
                libs.log({ sKey: sKey, serverEndpoint: serverEndpoint, cookieDetail: cookieDetail }, PROVIDER, 'SEVER DETAIL ENDPOINT');
                if (!sKey || !serverEndpoint) {
                    return [2];
                }
                urlServer = "".concat(DOMAIN, "/user/servers/").concat(serverEndpoint);
                cookieDatas = [];
                for (item in cookieDetail) {
                    cookieDatas.push("".concat(item, "=").concat(cookieDetail[item]['value']));
                }
                parseCookieData = cookieDatas.join('; ');
                libs.log({
                    parseCookieData: parseCookieData
                }, PROVIDER, 'PARSE COOKIE DATA');
                headers = {
                    'Cookie': parseCookieData
                };
                return [4, libs.request_get(urlServer, headers)];
            case 8:
                htmlServer = _b.sent();
                parseServer_1 = cheerio.load(htmlServer);
                servers_2 = [];
                evalData = htmlServer.match(/eval\(function\(p,a,c,k,e,.*\)\)/i);
                evalData = evalData ? evalData[0] : '';
                if (!evalData) {
                    return [2];
                }
                unpacker = libs.string_unpacker_v2(evalData);
                dKey_1 = unpacker.match(/\( *key *\=([A-z0-9]+)/i);
                dKey_1 = dKey_1 ? dKey_1[1] : '';
                eKey_1 = unpacker.match(/j *\< *\"([^\"]+)/i);
                eKey_1 = eKey_1 ? eKey_1[1] : "";
                libs.log({ dKey: dKey_1, eKey: eKey_1 }, PROVIDER, 'DKEY');
                if (!dKey_1 || !eKey_1) {
                    return [2];
                }
                libs.log({ length: parseServer_1('.JCsLCBlQBF').length }, PROVIDER, 'SERVER LENGTH');
                parseServer_1('.JCsLCBlQBF').each(function (key, item) {
                    var serverName = parseServer_1(item).attr('data-value');
                    if (serverName) {
                        servers_2.push(serverName);
                    }
                });
                directQuality = [];
                qualities = [2160, 1440, 1080, 720, 480, 360];
                _i = 0, servers_1 = servers_2;
                _b.label = 9;
            case 9:
                if (!(_i < servers_1.length)) return [3, 12];
                item = servers_1[_i];
                urlGetIframe = "".concat(LINK_DETAIL_1, "?server=").concat(item, "&_=").concat(Date.now());
                return [4, libs.request_get(urlGetIframe, {
                        Cookie: parseCookieData,
                        'x-requested-with': 'XMLHttpRequest'
                    })];
            case 10:
                dataIframe = _b.sent();
                encode = decryptGomoviesJson(libs.string_atob(dataIframe));
                libs.log({ encode: encode }, PROVIDER, "decryptGomoviesJson");
                parseEncode = JSON.parse("{\"a\": ".concat(encode, "}"));
                libs.log({ parseEncode: parseEncode }, PROVIDER, 'ENCODE');
                parseFirstEncode = parseEncode['a'][0];
                if (!parseFirstEncode) {
                    return [3, 11];
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
                _b.label = 11;
            case 11:
                _i++;
                return [3, 9];
            case 12:
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({ directQuality: directQuality }, PROVIDER, 'directQuality');
                if (directQuality.length) {
                    libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality, {});
                }
                return [3, 14];
            case 13:
                e_1 = _b.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 14];
            case 14: return [2, true];
        }
    });
}); };
