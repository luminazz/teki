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
    function decryptGomoviesJson(key, str) {
        var b = "";
        for (var i = 0; i < str.length;) {
            for (var j = 0; (j < key.toString().length && i < str.length); j++, i++) {
                b += String.fromCharCode(str[i].charCodeAt(0) ^ key.toString()[j].charCodeAt(0));
            }
        }
        return b;
    }
    var PROVIDER, DOMAIN, urlSearch, userAgent, LINK_DETAIL_1, parseSearch_1, LINK_TV_DETAIL, parseTv, hrefTv, cookieSearch, htmlDetail, parseEndpoint, parseId, id, idEpisode, cookieDatas, item, parseCookieData, urlServer, headers, htmlServer, parseServer, servers_2, evalData, evalData, unpacker, dKey, qualities, _i, servers_1, item, directQuality, embedUrl, parseEmbed, atobIframe, decrypt, parseEncode, parseFirstEncode, _a, qualities_1, qualityItem, urlReplace, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'EGoMovies';
                DOMAIN = "https://gomovies-online.cam";
                urlSearch = "".concat(DOMAIN, "/search/").concat(libs.url_slug_search(movieInfo, '%20'));
                userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 13, , 14]);
                LINK_DETAIL_1 = '';
                return [4, libs.request_get(urlSearch, {
                        'user-agent': userAgent,
                    }, true)];
            case 2:
                parseSearch_1 = _b.sent();
                libs.log({ length: parseSearch_1('div._smQamBQsETb').length }, PROVIDER, 'SEARCH LENGTH');
                parseSearch_1('div._smQamBQsETb').each(function (key, item) {
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
                return [4, libs.request_get(LINK_DETAIL_1, {
                        'user-agent': userAgent,
                    }, true)];
            case 3:
                parseTv = _b.sent();
                hrefTv = parseTv("div#_sBWcqbTBMaT a:contains(Episode ".concat(movieInfo.episode >= 10 ? movieInfo.episode : "0".concat(movieInfo.episode), ")")).attr('href');
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
                return [4, libs.cookies_get(urlSearch)];
            case 5:
                cookieSearch = _b.sent();
                libs.log({ cookieSearch: cookieSearch }, PROVIDER, 'COOKIE SEARCH');
                return [4, libs.cookies_clearAll()];
            case 6:
                _b.sent();
                return [4, libs.request_get(LINK_DETAIL_1, {
                        'user-agent': userAgent,
                    })];
            case 7:
                htmlDetail = _b.sent();
                parseEndpoint = htmlDetail.match(/pushState\( *\{\} *\, *\' *\' *\, *\'([^\']+)/i);
                parseEndpoint = parseEndpoint ? parseEndpoint[1] : '';
                libs.log({ parseEndpoint: parseEndpoint }, PROVIDER, 'PARSE ENDPOINT');
                if (!parseEndpoint) {
                    return [2];
                }
                parseId = parseEndpoint.split('/');
                id = parseId[parseId.length - 2];
                idEpisode = "0";
                if (movieInfo.type == 'tv') {
                    id = parseId[parseId.length - 3];
                    idEpisode = parseId[parseId.length - 2];
                }
                cookieDatas = [];
                for (item in cookieSearch) {
                    cookieDatas.push("".concat(item, "=").concat(cookieSearch[item]['value']));
                }
                cookieDatas.push("_identitygomovies7=52fdc70b008c0b1d881dac0f01cca819edd512de01cc8bbc1224ed4aafb78b52a%3A2%3A%7Bi%3A0%3Bs%3A18%3A%22_identitygomovies7%22%3Bi%3A1%3Bs%3A52%3A%22%5B2050366%2C%22HnVRRAObTASOJEr45YyCM8wiHol0V1ko%22%2C2592000%5D%22%3B%7D");
                parseCookieData = cookieDatas.join('; ');
                libs.log({
                    parseCookieData: parseCookieData
                }, PROVIDER, 'PARSE COOKIE DATA');
                urlServer = "".concat(DOMAIN, "/user/servers/").concat(id, "?ep=").concat(idEpisode);
                headers = {
                    'Cookie': parseCookieData,
                    'user-agent': userAgent,
                };
                return [4, libs.request_get(urlServer, headers, false)];
            case 8:
                htmlServer = _b.sent();
                parseServer = cheerio.load(htmlServer);
                servers_2 = [];
                libs.log({ length: parseServer('ul li').length }, PROVIDER, 'UL LENGTH');
                parseServer('ul li').each(function (key, item) {
                    var d = parseSearch_1(item).attr("data-value");
                    if (d) {
                        servers_2.push(d);
                    }
                });
                libs.log({ servers: servers_2 }, PROVIDER, 'SERVERS');
                if (!servers_2.length) {
                    return [2];
                }
                evalData = htmlServer.match(/eval\(function\(p,a,c,k,e,.*\)\)/i);
                evalData = evalData ? evalData[0] : '';
                if (!evalData) {
                    return [2];
                }
                unpacker = libs.string_unpacker_v2(evalData);
                dKey = unpacker.match(/\( *key *\=([A-z0-9]+)/i);
                dKey = dKey ? dKey[1] : '';
                libs.log({ dKey: dKey }, PROVIDER, 'D KEY');
                qualities = [2160, 1440, 1080, 720, 480, 360];
                _i = 0, servers_1 = servers_2;
                _b.label = 9;
            case 9:
                if (!(_i < servers_1.length)) return [3, 12];
                item = servers_1[_i];
                directQuality = [];
                embedUrl = "".concat(DOMAIN).concat(parseEndpoint, "?server=").concat(item, "&_=").concat(Date.now());
                return [4, libs.request_get(embedUrl, {
                        'Cookie': parseCookieData,
                        'user-agent': userAgent,
                        'x-requested-with': 'XMLHttpRequest'
                    })];
            case 10:
                parseEmbed = _b.sent();
                libs.log({ embedUrl: embedUrl, parseEmbed: parseEmbed }, PROVIDER, 'PARSE EMBED');
                atobIframe = libs.string_atob(parseEmbed);
                decrypt = decryptGomoviesJson(dKey, atobIframe);
                libs.log({ decrypt: decrypt }, PROVIDER, 'DECRYPT');
                parseEncode = JSON.parse("{\"a\": ".concat(decrypt, "}"));
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
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({ directQuality: directQuality }, PROVIDER, 'directQuality');
                if (directQuality.length) {
                    libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality, {});
                }
                _b.label = 11;
            case 11:
                _i++;
                return [3, 9];
            case 12: return [3, 14];
            case 13:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 14];
            case 14: return [2];
        }
    });
}); };
