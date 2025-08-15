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
    function f0001(_0x3f90c2, _0x1b80b5) {
        var _0x49e0af = cryptoS.AES.encrypt(_0x3f90c2, _0x1b80b5).toString();
        var _0x2e5b8c = cryptoS.enc.Base64.parse(_0x49e0af);
        _0x49e0af = _0x2e5b8c.toString(cryptoS.enc.Hex);
        return _0x49e0af;
    }
    function f0002(_0x110358, _0xdc15f3) {
        var _0x5580e5;
        try {
            var _0x3587e7 = cryptoS.enc.Hex.parse(_0x110358);
            var _0x1a2aa2 = _0x3587e7.toString(cryptoS.enc.Base64);
            _0x5580e5 = cryptoS.AES.decrypt(_0x1a2aa2, _0xdc15f3);
            _0x5580e5 = _0x5580e5.toString(cryptoS.enc.Utf8);
        }
        catch (_0xae9527) {
            console.log("Error decrypting data: " + _0xae9527);
        }
        return _0x5580e5;
    }
    var PROVIDER, DOMAIN, userAgent, pureheaders, headers, urlSearch, parseSearch_1, cookieData, laravel_session, xsrf, cookie, LINK_DETAIL_1, LINK_TV, episodeIdMatching_1, parseTvDetail_1, hasLinkTv, singlemv_1, filmToken, filmCookie, htmlMovie, _token, cookieMovie, laravel_session_movie, xsrf_movie, parseCookieMovie_1, parseMovie_1, htmlTv, cookieTv, _token, laravel_session_tv, xsrf_tv, parseCookieTv, domainDetailTv, body, parseDetailTv_1, cookieDetailTv, laravel_session_movie, xsrf_movie, parseCookieMovie_2, ajaxIframeUrl, embedDirectYtb, tempCookie, i, bodyIframe, headerAjax, parseIframe, cookieMovie, laravel_session_movie, xsrf_movie, parseCookieMovie, iframeUrl, e_1;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'LM4UFREE';
                DOMAIN = "https://streamm4u.com.co";
                userAgent = libs.request_getRandomUserAgent();
                pureheaders = {
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                };
                headers = {
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 26, , 27]);
                urlSearch = "".concat(DOMAIN, "/search/").concat(libs.url_slug_search(movieInfo, '-', true, 2));
                libs.log({ urlSearch: urlSearch }, PROVIDER, "URL SEARCH");
                return [4, libs.request_get(urlSearch, headers, true)];
            case 2:
                parseSearch_1 = _a.sent();
                return [4, libs.cookies_get(urlSearch)];
            case 3:
                cookieData = _a.sent();
                return [4, libs.cookies_clearAll()];
            case 4:
                _a.sent();
                libs.log({
                    length: parseSearch_1('.row .item').length,
                    cookieData: cookieData
                }, PROVIDER, 'SEARCH LENGTH');
                laravel_session = cookieData['laravel_session']['value'];
                xsrf = cookieData['XSRF-TOKEN']['value'];
                cookie = "laravel_session=".concat(laravel_session, "; XSRF-TOKEN=").concat(xsrf);
                headers['cookie'] = cookie;
                LINK_DETAIL_1 = '';
                parseSearch_1('.row .item').each(function (key, item) {
                    var tipTitle = parseSearch_1(item).find('.tiptitle').text();
                    var year = tipTitle.match(/\(([0-9]+)/i);
                    year = year ? year[1] : 0;
                    var title = tipTitle.replace(/\( *[0-9]+ *\)/i, '').trim();
                    var href = parseSearch_1(item).find('.imagecover a').attr('href');
                    libs.log({ title: title, tipTitle: tipTitle, year: year, href: href }, PROVIDER, 'SEARCH INFO');
                    if (libs.string_matching_title(movieInfo, title) && href) {
                        if (movieInfo.type == 'tv') {
                            LINK_DETAIL_1 = "".concat(DOMAIN, "/").concat(href);
                        }
                        else if (movieInfo.type == 'movie' && year == movieInfo.year) {
                            LINK_DETAIL_1 = "".concat(DOMAIN, "/").concat(href);
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, 'LINK_DETAIL');
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                LINK_TV = '';
                episodeIdMatching_1 = '';
                if (!(movieInfo.type == "tv")) return [3, 6];
                return [4, libs.request_get(LINK_DETAIL_1, headers, true)];
            case 5:
                parseTvDetail_1 = _a.sent();
                hasLinkTv = false;
                libs.log({ length: parseTvDetail_1('.episode').length }, PROVIDER, "TV LENGTH");
                parseTvDetail_1('.episode').each(function (key, item) {
                    var id = parseTvDetail_1(item).attr('idepisode');
                    var tvText = parseTvDetail_1(item).text();
                    var season = tvText.match(/S([0-9]+)/i);
                    season = season ? Number(season[1]) : 0;
                    var episode = tvText.match(/S[0-9]+\-E([0-9]+)/i);
                    episode = episode ? Number(episode[1]) : 0;
                    libs.log({ id: id, season: season, episode: episode, tvText: tvText }, PROVIDER, 'TVSHOW MATCHING');
                    if (season == movieInfo.season && episode == movieInfo.episode) {
                        episodeIdMatching_1 = id;
                    }
                });
                libs.log({ episodeIdMatching: episodeIdMatching_1 }, PROVIDER, "episodeIdMatching");
                if (!episodeIdMatching_1) {
                    return [2];
                }
                _a.label = 6;
            case 6:
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, 'LINK DETAIL END');
                singlemv_1 = [];
                filmToken = '';
                filmCookie = '';
                if (!(movieInfo.type == 'movie')) return [3, 10];
                return [4, libs.request_get(LINK_DETAIL_1, headers, false)];
            case 7:
                htmlMovie = _a.sent();
                _token = htmlMovie.match(/_token *\: *\'([^\']+)/i);
                _token = _token ? _token[1] : '';
                filmToken = _token;
                libs.log({ filmToken: filmToken }, PROVIDER, 'FILM TOKEN');
                return [4, libs.cookies_get(LINK_DETAIL_1)];
            case 8:
                cookieMovie = _a.sent();
                return [4, libs.cookies_clearAll()];
            case 9:
                _a.sent();
                laravel_session_movie = cookieMovie['laravel_session']['value'];
                xsrf_movie = cookieMovie['XSRF-TOKEN']['value'];
                parseCookieMovie_1 = "laravel_session=".concat(laravel_session_movie, "; XSRF-TOKEN=").concat(xsrf_movie);
                parseMovie_1 = cheerio.load(htmlMovie);
                libs.log({ length: parseMovie_1('.singlemv').length }, PROVIDER, "SINGLEMV");
                parseMovie_1(".singlemv").each(function (key, item) {
                    var single = parseMovie_1(item).attr('data');
                    if (single) {
                        singlemv_1.push({
                            token: single,
                            film_cookie: parseCookieMovie_1,
                        });
                    }
                });
                return [3, 18];
            case 10: return [4, libs.cookies_clearAll()];
            case 11:
                _a.sent();
                return [4, libs.request_get(LINK_DETAIL_1, headers)];
            case 12:
                htmlTv = _a.sent();
                return [4, libs.cookies_get(LINK_DETAIL_1)];
            case 13:
                cookieTv = _a.sent();
                return [4, libs.cookies_clearAll()];
            case 14:
                _a.sent();
                _token = htmlTv.match(/_token *\: *\'([^\']+)/i);
                _token = _token ? _token[1] : '';
                libs.log({ cookieTv: cookieTv, _token: _token }, PROVIDER, 'COOKIE TV');
                laravel_session_tv = cookieData['laravel_session']['value'];
                xsrf_tv = cookieData['XSRF-TOKEN']['value'];
                parseCookieTv = "laravel_session=".concat(laravel_session_tv, "; XSRF-TOKEN=").concat(xsrf_tv);
                libs.log({ parseCookieTv: parseCookieTv }, PROVIDER, 'parseCookieTv');
                filmCookie = parseCookieTv;
                domainDetailTv = "".concat(DOMAIN, "/ajaxtv");
                body = qs.stringify({
                    idepisode: episodeIdMatching_1,
                    _token: _token
                });
                filmToken = _token;
                return [4, libs.request_post(domainDetailTv, {
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                        'Accept': '*/*',
                        cookie: parseCookieTv,
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'x-requested-with': 'XMLHttpRequest',
                        authority: 'ww1.m4ufree.tv',
                        origin: DOMAIN,
                        referer: LINK_DETAIL_1,
                        'Sec-Fetch-Site': 'none',
                        'Sec-Fetch-Mode': 'navigate',
                        'Sec-Fetch-User': '?1',
                        'Sec-Fetch-Dest': 'document',
                        'Upgrade-Insecure-Requests': 1,
                        'Connection': 'keep-alive',
                        'sec-ch-ua-mobile': '?0',
                        'sec-ch-ua-platform': '"macOS"',
                        'Accept-Language': 'en-US,en;q=0.9'
                    }, body, true)];
            case 15:
                parseDetailTv_1 = _a.sent();
                libs.log({ length: parseDetailTv_1('.singlemv').length }, PROVIDER, "SINGLEMV");
                return [4, libs.cookies_get(domainDetailTv)];
            case 16:
                cookieDetailTv = _a.sent();
                return [4, libs.cookies_clearAll()];
            case 17:
                _a.sent();
                libs.log({ cookieDetailTv: cookieDetailTv }, PROVIDER, 'COOKIE DETAIL TV');
                laravel_session_movie = cookieDetailTv['laravel_session']['value'];
                xsrf_movie = cookieDetailTv['XSRF-TOKEN']['value'];
                parseCookieMovie_2 = "laravel_session=".concat(laravel_session_movie, "; XSRF-TOKEN=").concat(xsrf_movie);
                parseDetailTv_1('.singlemv').each(function (key, item) {
                    var single = parseDetailTv_1(item).attr('data');
                    if (single) {
                        singlemv_1.push({
                            token: single,
                            film_cookie: parseCookieMovie_2,
                        });
                    }
                });
                _a.label = 18;
            case 18:
                libs.log({ singlemv: singlemv_1, filmCookie: filmCookie, filmToken: filmToken }, PROVIDER, 'singlemv');
                if (singlemv_1.length == 0) {
                    return [2];
                }
                ajaxIframeUrl = "".concat(DOMAIN, "/ajax");
                embedDirectYtb = function (embedUrl) { return __awaiter(_this, void 0, void 0, function () {
                    var dataEmbedDirect, htmlEmbedDirect, DomainDirect, idFile, idUser, _0x32b828, _0x972dd1, _0x30ca8c, headerAjaxDirect, body, dataDirect, decryptData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, fetch(embedUrl, {
                                    headers: pureheaders,
                                })];
                            case 1:
                                dataEmbedDirect = _a.sent();
                                return [4, dataEmbedDirect.text()];
                            case 2:
                                htmlEmbedDirect = _a.sent();
                                DomainDirect = htmlEmbedDirect.match(/const *DOMAIN\_API *\= *\'([^\']+)/i);
                                DomainDirect = DomainDirect ? DomainDirect[1] : "";
                                libs.log({ DomainDirect: DomainDirect }, PROVIDER, "DOMAIN DIRECT");
                                if (!DomainDirect) {
                                    return [2];
                                }
                                DomainDirect = "".concat(DomainDirect, "/playiframe");
                                idFile = htmlEmbedDirect.match(/const *idfile\_enc *\= *\"([^\"]+)/);
                                idFile = idFile ? idFile[1] : "";
                                idUser = htmlEmbedDirect.match(/const *idUser\_enc *\= *"([^\"]+)/i);
                                idUser = idUser ? idUser[1] : "";
                                libs.log({ idFile: idFile, idUser: idUser }, PROVIDER, "ID INFO");
                                if (!idFile || !idUser) {
                                    return [2];
                                }
                                _0x32b828 = {
                                    idfile: f0002(idFile, "jcLycoRJT6OWjoWspgLMOZwS3aSS0lEn"),
                                    iduser: f0002(idUser, "PZZ3J3LDbLT0GY7qSA5wW5vchqgpO36O"),
                                    domain_play: "https://streamm4u.com.co",
                                    platform: "MacIntel",
                                    hlsSupport: true,
                                    jwplayer: { "jwplayer": { "Browser": { "androidNative": false, "chrome": true, "edge": false, "facebook": false, "firefox": false, "ie": false, "msie": false, "safari": false, "version": { "version": "138.0.0.0", "major": 138, "minor": 0 } }, "OS": { "android": false, "iOS": false, "mobile": false, "mac": true, "iPad": false, "iPhone": false, "windows": false, "tizen": false, "tizenApp": false, "version": { "version": "10_15_7", "major": 10, "minor": 15 } }, "Features": { "iframe": false, "passiveEvents": true, "backgroundLoading": true } } }
                                };
                                _0x972dd1 = f0001(JSON.stringify(_0x32b828), "vlVbUQhkOhoSfyteyzGeeDzU0BHoeTyZ");
                                _0x30ca8c = cryptoS.MD5(_0x972dd1 + "KRWN3AdgmxEMcd2vLN1ju9qKe8Feco5h").toString();
                                headerAjaxDirect = {
                                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                    "Referer": "https://if9.ppzj-youtube.cfd/",
                                    "Origin": "https://if9.ppzj-youtube.cfd",
                                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                                };
                                body = qs.stringify({
                                    data: _0x972dd1 + "|" + _0x30ca8c
                                });
                                return [4, libs.request_post(DomainDirect, headerAjaxDirect, body)];
                            case 3:
                                dataDirect = _a.sent();
                                libs.log({ dataDirect: dataDirect }, PROVIDER, "DATA DIRECT");
                                if (dataDirect.status != 1 || dataDirect.type != "url-m3u8-encv1") {
                                    return [2];
                                }
                                decryptData = f0002(dataDirect.data, "oJwmvmVBajMaRCTklxbfjavpQO7SZpsL");
                                libs.log({ decryptData: decryptData }, PROVIDER, "decryptData");
                                if (!decryptData) {
                                    return [2];
                                }
                                libs.embed_callback(decryptData, PROVIDER, PROVIDER, 'hls', callback, 1, [], [{ file: decryptData, quality: 1080 }], {
                                    "Referer": "https://if9.ppzj-youtube.cfd/",
                                    "Origin": "https://if9.ppzj-youtube.cfd",
                                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                                }, {
                                    type: "m3u8"
                                });
                                return [2];
                        }
                    });
                }); };
                tempCookie = '';
                i = 0;
                _a.label = 19;
            case 19:
                if (!(i <= singlemv_1.length)) return [3, 25];
                return [4, libs.cookies_clearAll()];
            case 20:
                _a.sent();
                bodyIframe = qs.stringify({
                    _token: filmToken,
                    m4u: singlemv_1[i].token,
                });
                headerAjax = {
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
                    'Accept': '*/*',
                    cookie: singlemv_1[i].film_cookie,
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'x-requested-with': 'XMLHttpRequest',
                    authority: 'ww1.m4ufree.tv',
                    origin: DOMAIN,
                    referer: LINK_DETAIL_1,
                    'Sec-Fetch-Site': 'none',
                    'Sec-Fetch-Mode': 'navigate',
                    'Sec-Fetch-User': '?1',
                    'Sec-Fetch-Dest': 'document',
                    'Upgrade-Insecure-Requests': 1,
                    'Connection': 'keep-alive',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    'Accept-Language': 'en-US,en;q=0.9'
                };
                if (i > 0) {
                    headerAjax['cookie'] = tempCookie;
                }
                return [4, libs.request_post(ajaxIframeUrl, headerAjax, bodyIframe, true)];
            case 21:
                parseIframe = _a.sent();
                return [4, libs.cookies_get(ajaxIframeUrl)];
            case 22:
                cookieMovie = _a.sent();
                return [4, libs.cookies_clearAll()];
            case 23:
                _a.sent();
                laravel_session_movie = cookieMovie['laravel_session']['value'];
                xsrf_movie = cookieMovie['XSRF-TOKEN']['value'];
                parseCookieMovie = "laravel_session=".concat(laravel_session_movie, "; XSRF-TOKEN=").concat(xsrf_movie);
                libs.log({ parseCookieMovie: parseCookieMovie }, PROVIDER, "tempCookie");
                tempCookie = parseCookieMovie;
                iframeUrl = parseIframe('iframe').attr('src');
                libs.log({ iframeUrl: iframeUrl }, PROVIDER, "iframeUrl");
                iframeUrl = iframeUrl.replace(/\\r/im, '');
                iframeUrl = iframeUrl.replace(/\\n/im, '');
                iframeUrl = iframeUrl.trim();
                libs.log({ iframeUrl: iframeUrl }, PROVIDER, 'IFRAME URL');
                if (iframeUrl.indexOf("ppzj-youtube") != -1) {
                    embedDirectYtb(iframeUrl);
                }
                _a.label = 24;
            case 24:
                i++;
                return [3, 19];
            case 25: return [3, 27];
            case 26:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR M4UFREE');
                return [3, 27];
            case 27: return [2];
        }
    });
}); };
