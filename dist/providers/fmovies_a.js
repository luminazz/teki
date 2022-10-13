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
    var PROVIDER, DOMAIN, userAgent, LINK_DETAIL, genrandom, ji, li, gen, a, headers, urlSearch, parseSearch, SERVER_ID, tvid, tvInfoUrl, tvInfo, parseTvInfo_1, embedTokens_1, _a, _b, _i, episodeItem, token, urlGetEmbed, embedData, urlEmbed, encodeEmbed, movieId, movieInfoUrl, movieInfo_1, LINK_MOVIE, parseMovieInfo, episodeToken, _c, _d, _e, episodeItem, token, urlGetEmbed, embedData, urlEmbed, encodeEmbed;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'AMOVIESTREAM_2';
                DOMAIN = "https://fmovies.to";
                userAgent = {};
                LINK_DETAIL = '';
                genrandom = function () {
                    for (var r = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", u = 62, o = 0; o < 6; o += 1) {
                        r += i.charAt(Math.floor(Math.random() * 62));
                    }
                    return r;
                };
                ji = function (t, n) {
                    for (var u, o = [], e = 0, c = "", f = 1543 + -5 * 1973 + 8578, s = -4132 + -3907 + 8039; s < f; s += -2 * -16 + -6317 + -2 * -3143) {
                        o[s] = s;
                    }
                    for (s = 0; s < f; s += 1) {
                        e = ((e + o[s]) + (t.charCodeAt(s % t.length))) % f,
                            u = o[s],
                            o[s] = o[e],
                            o[e] = u;
                    }
                    for (var e = s = 0, a = 0; a < n.length; a += 1) {
                        e = (e + o[s = (s + a) % f]) % f, u = o[s], o[s] = o[e], o[e] = u,
                            c += String.fromCharCode(n.charCodeAt(a) ^ o[(o[s] + o[e]) % f]);
                    }
                    return c;
                };
                li = function (t) {
                    for (r = 0; r < t.length; r++) {
                        if (255 < t.charCodeAt(r))
                            return null;
                    }
                    for (var n = "", r = -1 * 5867 + -2617 + 202 * 42; r < t.length; r += -1546 + 7 * -577 + 5588) {
                        var i = [void (-1371 + 6543 * 1 + -5172), void (1 * -2512 + -2 * -4171 + -2915 * 2), void (-1367 * 2 + 3086 + -32 * 11), void (-1319 * 1 + -4022 + -109 * -49)];
                        i[-6509 * -1 + 1126 + -509 * 15] = t.charCodeAt(r) >> -1217 * -6 + -4230 + -3070,
                            i[-4994 + 1732 + 251 * 13] = (7704 + 974 + -8675 & t.charCodeAt(r)) << -26 * 262 + 7502 + -1 * 686,
                            t.length > r + (-2857 * 1 + 1 * 9328 + 5 * -1294) && (i[6645 + 1 * -4421 + -2223] |= t.charCodeAt(r + (-80 * -78 + 1129 * -7 + 1664)) >> -470 * 17 + 7 * -1023 + 15155,
                                i[1 * 7066 + 707 * 1 + -7771] = (-1 * -3449 + -8851 + 1 * 5417 & t.charCodeAt(r + (34 * 21 + 3831 + -71 * 64))) << 16 * -93 + 2 * -4216 + 11 * 902),
                            t.length > r + (-44 * -130 + 2777 + -8495) && (i[3 * -87 + 4192 + -3929] |= t.charCodeAt(r + (656 + -11 * -738 + -8772)) >> 5616 + -583 * -8 + 5137 * -2,
                                i[-3562 + -1 * 6866 + 171 * 61] = 2604 + 1967 + -4508 & t.charCodeAt(r + (-3066 + -138 * -33 + 1 * -1486)));
                        for (var u = 3752 + -1 * -5311 + -19 * 477; u < i.length; u++)
                            "undefined" == typeof i[u] ? n += "=" : n += function (t) {
                                if (-1119 * -5 + -7978 + 2383 <= t && t < -9695 + 515 + -4 * -2311)
                                    return "5uLKesbh0nkrpPq9VwMC6+tQBdomjJ4HNl/fWOSiREvAYagT8yIG7zx2D13UZFXc"[t];
                            }(i[u]);
                    }
                    return n;
                };
                gen = function (title) {
                    var rand = genrandom();
                    var hash = li(ji(rand, title));
                    return rand + hash.replace(/=+$/, "");
                };
                a = {
                    hn: function (t) {
                        var n = 3152 + -915 + 23 * -97, r = t["substr"](-48 * -64 + 88 * -12 + -2016, n), n = t["substr"](n);
                        return decodeURIComponent(a["Mi"](r, (9607 + 3569 + 732 * -18, a["mi"])(n)));
                    },
                    Mi: function (t, n) {
                        for (var r, i = [], u = 3385 + -3189 * -1 + 346 * -19, o = "", e = 277 * -7 + 3077 * -2 + -253 * -33, c = -593 * 9 + -2972 + 7 * 1187; c < e; c += 8721 + 5477 + -14197)
                            i[c] = c;
                        for (c = -1 * 1138 + 1 * 5179 + 1 * -4041; c < e; c += 8049 + 5073 + -13121 * 1)
                            u = (u + i[c] + t["charCodeAt"](c % t["length"])) % e, r = i[c], i[c] = i[u], i[u] = r;
                        for (var u = c = -1385 + -8285 + 9670 * 1, f = -9358 + -929 * -4 + 806 * 7; f < n["length"]; f += -4547 + -3 * -2630 + -3342)
                            u = (u + i[c = (c + f) % e]) % e, r = i[c], i[c] = i[u], i[u] = r, o += String["fromCharCode"](n["charCodeAt"](f) ^ i[(i[c] + i[u]) % e]);
                        return o;
                    },
                    mi: function (t) {
                        var tt = "5uLKesbh0nkrpPq9VwMC6+tQBdomjJ4HNl/fWOSiREvAYagT8yIG7zx2D13UZFXc";
                        if ((t = (t = (t = ""["concat"](t))["replace"](/[\t\n\f\r]/g, ""))["length"] % (-9568 + -225 * -1 + 9347) == 1351 + 2127 + 37 * -94 ? t["replace"](/==?$/, "") : t)["length"] % (3648 + 1 * 4882 + -8526) == -636 * 15 + -9 * -593 + 4204 || /[^+/0-9A-Za-z]/["test"](t))
                            return null;
                        for (var r, i = "", u = 2595 + -9382 + 6787, o = -5580 + -61 * 121 + 997 * 13, e = -721 * -5 + 3058 * -2 + -27 * -93; e < t["length"]; e++)
                            u <<= 3925 + 1 * 2687 + -6606, u |= (r = t[e], (r = tt["indexOf"](r)) < 1660 * 1 + 1 * 667 + -2327 * 1 ? void (3330 + -2169 * -1 + -5499) : r), 6233 + 53 * 169 + 2 * -7583 === (o += 5312 + -60 * -22 + 3313 * -2) && (i += String["fromCharCode"]((21063954 + 15270719 + 1509461 * -13 & u) >> 521 + -8 * 1016 + 21 * 363), i += String["fromCharCode"](a["Fwmui"](-46798 * -1 + 666 * -137 + -4 * -27431 & u, -4184 + -6832 + 11024)), i += String["fromCharCode"](-11 * -668 + 37 * -53 + 2566 * -2 & u), u = o = -5598 * 1 + -18 * -516 + -3690);
                        return -611 * 7 + 2930 + 1359 === o ? (u >>= -427 * 7 + -4773 + 7766, i += String["fromCharCode"](u)) : -1099 + 6060 + -4943 === o && (u >>= 197 * -17 + 17 * -157 + 6020, i += String["fromCharCode"](a["Fwmui"](-123223 + -91331 * -1 + 97172 & u, 1013 * -9 + -1536 + 10661)), i += String["fromCharCode"](9907 * -1 + 5414 + 4748 & u)), i;
                    },
                    Fwmui: function (t, n) {
                        return t >> n;
                    }
                };
                headers = {
                    'user-agent': libs.request_getRandomUserAgent()
                };
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 1:
                parseSearch = _f.sent();
                if (!!parseSearch) return [3, 3];
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 2:
                parseSearch = _f.sent();
                _f.label = 3;
            case 3:
                if (!!parseSearch) return [3, 5];
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 4:
                parseSearch = _f.sent();
                _f.label = 5;
            case 5:
                if (!!parseSearch) return [3, 7];
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 6:
                parseSearch = _f.sent();
                _f.label = 7;
            case 7:
                if (!!parseSearch) return [3, 9];
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 8:
                parseSearch = _f.sent();
                _f.label = 9;
            case 9:
                if (!!parseSearch) return [3, 11];
                urlSearch = DOMAIN + "/search?vrf=" + gen(movieInfo.title) + "&keyword=" + movieInfo.title.trim().replace(/ /g, '+');
                return [4, libs.request_get(urlSearch, headers, true)];
            case 10:
                parseSearch = _f.sent();
                _f.label = 11;
            case 11:
                libs.log({ length: parseSearch('.item').length }, PROVIDER, 'LENGTH SEARCH INFO');
                parseSearch('.item').each(function (key, item) {
                    var title = parseSearch(item).find('.title').text();
                    var year = parseSearch(item).find('.meta').html();
                    year = year.match(/([0-9]+)/i);
                    year = year ? year[1] : 0;
                    var href = parseSearch(item).find('.title').attr('href');
                    var type = parseSearch(item).find('.type').text();
                    libs.log({ title: title, year: year, href: href, type: type }, PROVIDER, 'MOVIE INFO');
                    if (title && href && !LINK_DETAIL && type) {
                        if (libs.string_matching_title(movieInfo, title, false)) {
                            if (movieInfo.type == 'tv' && type.toLowerCase() == 'tv') {
                                LINK_DETAIL = "" + DOMAIN + href;
                            }
                            if (movieInfo.type == 'movie' && type.toLowerCase() == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL = "" + DOMAIN + href;
                            }
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL }, PROVIDER, 'LINK DETAIl');
                if (!LINK_DETAIL) {
                    return [2];
                }
                SERVER_ID = '';
                if (!(movieInfo.type == 'tv')) return [3, 28];
                tvid = LINK_DETAIL.match(/.([A-z0-9]+)$/i);
                tvid = tvid ? tvid[1] : '';
                libs.log({ tvid: tvid }, PROVIDER, 'TV ID');
                if (!tvid) {
                    return [2];
                }
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 12:
                tvInfo = _f.sent();
                if (!!tvInfo) return [3, 14];
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 13:
                tvInfo = _f.sent();
                _f.label = 14;
            case 14:
                if (!!tvInfo) return [3, 16];
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 15:
                tvInfo = _f.sent();
                _f.label = 16;
            case 16:
                if (!!tvInfo) return [3, 18];
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 17:
                tvInfo = _f.sent();
                _f.label = 18;
            case 18:
                if (!!tvInfo) return [3, 20];
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 19:
                tvInfo = _f.sent();
                _f.label = 20;
            case 20:
                if (!!tvInfo) return [3, 22];
                tvInfoUrl = DOMAIN + "/ajax/film/servers?id=" + tvid + "&vrf=" + gen(tvid);
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 21:
                tvInfo = _f.sent();
                _f.label = 22;
            case 22:
                libs.log({ tvInfoUrl: tvInfoUrl, tvInfo: tvInfo }, PROVIDER, 'TV INFO');
                if (!tvInfo.html) return [3, 27];
                parseTvInfo_1 = cheerio.load(tvInfo.html);
                libs.log({ length: parseTvInfo_1("a[data-kname=\"" + movieInfo.season + "-" + movieInfo.episode + "\"]").length }, PROVIDER, 'SEARCH TV');
                embedTokens_1 = {};
                parseTvInfo_1("a[data-kname=\"" + movieInfo.season + "-" + movieInfo.episode + "\"]").each(function (key, item) {
                    var embedToken = parseTvInfo_1(item).attr('data-ep');
                    if (embedToken) {
                        embedTokens_1 = JSON.parse(embedToken);
                    }
                });
                libs.log({
                    embedTokens: embedTokens_1,
                }, PROVIDER, 'EPISODE TOKEN');
                _a = [];
                for (_b in embedTokens_1)
                    _a.push(_b);
                _i = 0;
                _f.label = 23;
            case 23:
                if (!(_i < _a.length)) return [3, 27];
                episodeItem = _a[_i];
                token = embedTokens_1[episodeItem];
                urlGetEmbed = DOMAIN + "/ajax/episode/info?id=" + token;
                return [4, libs.request_get(urlGetEmbed, {}, false)];
            case 24:
                embedData = _f.sent();
                libs.log({
                    embedData: embedData
                }, PROVIDER, 'EMBED DATA');
                urlEmbed = embedData.url;
                encodeEmbed = a.hn(urlEmbed);
                libs.log({
                    encodeEmbed: encodeEmbed,
                }, PROVIDER, 'ENCODE EMBED');
                if (!encodeEmbed) {
                    return [3, 26];
                }
                return [4, libs.embed_redirect(encodeEmbed, '', movieInfo, PROVIDER, callback, undefined, [])];
            case 25:
                _f.sent();
                _f.label = 26;
            case 26:
                _i++;
                return [3, 23];
            case 27:
                LINK_DETAIL = LINK_DETAIL + "/" + movieInfo.season + "-" + movieInfo.episode;
                return [3, 45];
            case 28:
                movieId = LINK_DETAIL.match(/.([A-z0-9]+)$/i);
                movieId = movieId ? movieId[1] : '';
                libs.log({ movieId: movieId }, PROVIDER, 'MOVIE ID');
                if (!movieId) {
                    return [2];
                }
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 29:
                movieInfo_1 = _f.sent();
                if (!!movieInfo_1) return [3, 31];
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 30:
                movieInfo_1 = _f.sent();
                _f.label = 31;
            case 31:
                if (!!movieInfo_1) return [3, 33];
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 32:
                movieInfo_1 = _f.sent();
                _f.label = 33;
            case 33:
                if (!!movieInfo_1) return [3, 35];
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 34:
                movieInfo_1 = _f.sent();
                _f.label = 35;
            case 35:
                if (!!movieInfo_1) return [3, 37];
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 36:
                movieInfo_1 = _f.sent();
                _f.label = 37;
            case 37:
                if (!!movieInfo_1) return [3, 39];
                movieInfoUrl = DOMAIN + "/ajax/film/servers?id=" + movieId + "&vrf=" + gen(movieId);
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 38:
                movieInfo_1 = _f.sent();
                _f.label = 39;
            case 39:
                libs.log({ movieInfoUrl: movieInfoUrl, movieInfo: movieInfo_1 }, PROVIDER, 'MOVIE INFO');
                LINK_MOVIE = '';
                if (!movieInfo_1.html) {
                    return [2];
                }
                parseMovieInfo = cheerio.load(movieInfo_1.html);
                episodeToken = parseMovieInfo('a.active').attr('data-ep');
                if (!episodeToken) {
                    return [2];
                }
                episodeToken = JSON.parse(episodeToken);
                libs.log({
                    episodeToken: episodeToken,
                }, PROVIDER, 'EPISODE TOKEN');
                _c = [];
                for (_d in episodeToken)
                    _c.push(_d);
                _e = 0;
                _f.label = 40;
            case 40:
                if (!(_e < _c.length)) return [3, 44];
                episodeItem = _c[_e];
                token = episodeToken[episodeItem];
                urlGetEmbed = DOMAIN + "/ajax/episode/info?id=" + token;
                return [4, libs.request_get(urlGetEmbed, {}, false)];
            case 41:
                embedData = _f.sent();
                libs.log({
                    embedData: embedData
                }, PROVIDER, 'EMBED DATA');
                urlEmbed = embedData.url;
                encodeEmbed = a.hn(urlEmbed);
                libs.log({
                    encodeEmbed: encodeEmbed,
                }, PROVIDER, 'ENCODE EMBED');
                if (!encodeEmbed) {
                    return [3, 43];
                }
                return [4, libs.embed_redirect(encodeEmbed, '', movieInfo_1, PROVIDER, callback, undefined, [])];
            case 42:
                _f.sent();
                _f.label = 43;
            case 43:
                _e++;
                return [3, 40];
            case 44:
                LINK_DETAIL = LINK_DETAIL + "/1-full";
                _f.label = 45;
            case 45:
                libs.log({
                    PROVIDER: PROVIDER,
                    LINK_DETAIL: LINK_DETAIL,
                }, PROVIDER, 'LINK CALLBACK');
                callback({
                    callback: {
                        provider: PROVIDER,
                        host: PROVIDER,
                        url: LINK_DETAIL,
                        callback: callback,
                        headers: {
                            "referer": "https://fmovies.to",
                            "user-agent": libs.request_getRandomUserAgent(),
                        },
                        beforeLoadScript: "var open = XMLHttpRequest.prototype.open;\n            XMLHttpRequest.prototype.open = function() {\n                this.addEventListener(\"load\", function() {\n                    var message = {\"status\" : this.status, \"responseURL\" : this.responseURL, \"responseText\": this.responseText, \"response\": this.response}\n                    \n                    window.ReactNativeWebView.postMessage(JSON.stringify(message));\n                });\n                open.apply(this, arguments);\n            };",
                        metadata: {
                            PROVIDER: PROVIDER,
                            DOMAIN: DOMAIN,
                            movieInfo: movieInfo,
                        }
                    }
                });
                return [2, true];
        }
    });
}); };
