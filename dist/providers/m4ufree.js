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
    var PROVIDER, DOMAIN, userAgent, headers, urlSearch, cookieData, laravel_session, xsrf, cookie, parseSearch_1, LINK_DETAIL_1, LINK_TV_1, episodeIdMatching_1, parseTvDetail_1, hasLinkTv_1, singlemv, filmToken, filmCookie, htmlMovie, _token, parseMovie, cookieMovie, laravel_session_movie, xsrf_movie, parseCookieMovie, htmlTv, cookieTv, _token, laravel_session_tv, xsrf_tv, parseCookieTv, domainDetailTv, body, parseDetailTv, cookieDetailTv, ajaxIframeUrl, bodyIframe, parseIframe, iframeUrl, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'M4UFREE';
                DOMAIN = "https://ww1.m4ufree.tv";
                userAgent = libs.request_getRandomUserAgent();
                headers = {
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1660.14',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                    'Sec-Fetch-Site': 'none',
                    'Sec-Fetch-Mode': 'navigate',
                    'Sec-Fetch-User': '?1',
                    'Sec-Fetch-Dest': 'document',
                    'Host': 'ww1.m4ufree.tv',
                    'sec-ch-ua': '"Microsoft Edge";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
                    'Upgrade-Insecure-Requests': 1,
                    'Connection': 'keep-alive',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    'Accept-Language': 'en-US,en;q=0.9'
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 25, , 26]);
                urlSearch = "".concat(DOMAIN, "/search/").concat(libs.url_slug_search(movieInfo, '-', true, 2), ".html");
                return [4, libs.cookies_clearAll()];
            case 2:
                _a.sent();
                return [4, libs.request_get("".concat(DOMAIN, "/"), headers)];
            case 3:
                _a.sent();
                return [4, libs.cookies_get(DOMAIN)];
            case 4:
                cookieData = _a.sent();
                return [4, libs.cookies_clearAll()];
            case 5:
                _a.sent();
                libs.log({ cookieData: cookieData }, PROVIDER, 'COOKIE DATA');
                laravel_session = cookieData['laravel_session']['value'];
                xsrf = cookieData['XSRF-TOKEN']['value'];
                cookie = "laravel_session=".concat(laravel_session, "; XSRF-TOKEN=").concat(xsrf);
                headers['cookie'] = cookie;
                return [4, libs.request_get(urlSearch, headers, true)];
            case 6:
                parseSearch_1 = _a.sent();
                libs.log({
                    length: parseSearch_1('.row.border .item').length
                }, PROVIDER, 'SEARCH LENGTH');
                LINK_DETAIL_1 = '';
                parseSearch_1('.row.border .item').each(function (key, item) {
                    var tipTitle = parseSearch_1(item).find('.tiptitle').text();
                    var year = tipTitle.match(/\(([0-9]+)/i);
                    year = year ? year[1] : 0;
                    var title = tipTitle.replace(/\( *[0-9]+ *\)/i, '').trim();
                    var href = parseSearch_1(item).find('.imagecover a').attr('href');
                    libs.log({ title: title, tipTitle: tipTitle, year: year, href: href }, PROVIDER, 'SEARCH INFO');
                    if (libs.string_matching_title(movieInfo, title)) {
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
                LINK_TV_1 = '';
                episodeIdMatching_1 = '';
                if (!(movieInfo.type == "tv")) return [3, 8];
                return [4, libs.request_get(LINK_DETAIL_1, headers, true)];
            case 7:
                parseTvDetail_1 = _a.sent();
                hasLinkTv_1 = false;
                libs.log({ length: parseTvDetail_1('.episode').length }, PROVIDER, "TV LENGTH");
                parseTvDetail_1('.episode').each(function (key, item) {
                    var id = parseTvDetail_1(item).attr('idepisode');
                    var epiLInk = parseTvDetail_1(item).attr('epilink');
                    var season = parseTvDetail_1(item).attr('season');
                    var episode = parseTvDetail_1(item).attr('episode');
                    var rowname = parseTvDetail_1(item).attr('rowname');
                    libs.log({ id: id, epiLInk: epiLInk, season: season, episode: episode, rowname: rowname }, PROVIDER, 'TVSHOW MATCHING');
                    if (season == movieInfo.season && episode == movieInfo.episode) {
                        LINK_TV_1 = "".concat(DOMAIN, "/tvshow/").concat(rowname, "-season-").concat(season, "-episode-").concat(episode, "-").concat(epiLInk, ".html");
                        libs.log(LINK_TV_1, PROVIDER, 'LINK TV DETAIL');
                        hasLinkTv_1 = true;
                        episodeIdMatching_1 = id;
                    }
                });
                libs.log({ hasLinkTv: hasLinkTv_1, LINK_TV: LINK_TV_1 }, PROVIDER, "LINK TV");
                if (!hasLinkTv_1) {
                    return [2];
                }
                LINK_DETAIL_1 = LINK_TV_1;
                _a.label = 8;
            case 8:
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, 'LINK DETAIL END');
                singlemv = '';
                filmToken = '';
                filmCookie = '';
                if (!(movieInfo.type == 'movie')) return [3, 14];
                return [4, libs.request_get(LINK_DETAIL_1, headers)];
            case 9:
                htmlMovie = _a.sent();
                _token = htmlMovie.match(/_token *\: *\'([^\']+)/i);
                _token = _token ? _token[1] : '';
                filmToken = _token;
                return [4, libs.cookies_clearAll()];
            case 10:
                _a.sent();
                return [4, libs.request_get(LINK_DETAIL_1, headers, true)];
            case 11:
                parseMovie = _a.sent();
                singlemv = parseMovie('.singlemv').attr('data');
                return [4, libs.cookies_get(LINK_DETAIL_1)];
            case 12:
                cookieMovie = _a.sent();
                return [4, libs.cookies_clearAll()];
            case 13:
                _a.sent();
                laravel_session_movie = cookieMovie['laravel_session']['value'];
                xsrf_movie = cookieMovie['XSRF-TOKEN']['value'];
                parseCookieMovie = "laravel_session=".concat(laravel_session_movie, "; XSRF-TOKEN=").concat(xsrf_movie);
                filmCookie = parseCookieMovie;
                return [3, 22];
            case 14: return [4, libs.cookies_clearAll()];
            case 15:
                _a.sent();
                return [4, libs.request_get(LINK_DETAIL_1, headers)];
            case 16:
                htmlTv = _a.sent();
                return [4, libs.cookies_get(LINK_DETAIL_1)];
            case 17:
                cookieTv = _a.sent();
                return [4, libs.cookies_clearAll()];
            case 18:
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
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1660.14',
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
            case 19:
                parseDetailTv = _a.sent();
                singlemv = parseDetailTv('.singlemv').attr('data');
                return [4, libs.cookies_get(domainDetailTv)];
            case 20:
                cookieDetailTv = _a.sent();
                return [4, libs.cookies_clearAll()];
            case 21:
                _a.sent();
                libs.log({ cookieDetailTv: cookieDetailTv }, PROVIDER, 'COOKIE DETAIL TV');
                _a.label = 22;
            case 22:
                libs.log({ singlemv: singlemv, filmCookie: filmCookie, filmToken: filmToken }, PROVIDER, 'singlemv');
                ajaxIframeUrl = "".concat(DOMAIN, "/ajax");
                bodyIframe = qs.stringify({
                    _token: filmToken,
                    m4u: singlemv,
                });
                return [4, libs.request_post(ajaxIframeUrl, {
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1660.14',
                        'Accept': '*/*',
                        cookie: filmCookie,
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
                    }, bodyIframe, true)];
            case 23:
                parseIframe = _a.sent();
                iframeUrl = parseIframe('iframe').attr('src');
                libs.log({ iframeUrl: iframeUrl }, PROVIDER, 'IFRAME URL');
                if (!iframeUrl) {
                    return [2];
                }
                return [4, libs.embed_redirect(iframeUrl, '', movieInfo, PROVIDER, callback)];
            case 24:
                _a.sent();
                return [3, 26];
            case 25:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR M4UFREE');
                return [3, 26];
            case 26: return [2];
        }
    });
}); };
