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
    var PROVIDER, DOMAIN, userAgent, LINK_DETAIL, KEY, gen, a, rc4, encode, headers, urlSearch, parseSearch, SERVER_ID, tvid, tvInfoUrl, tvInfo, parseTvInfo_1, embedTokens_1, _a, _b, _i, episodeItem, token, urlGetEmbed, embedData, urlEmbed, encodeEmbed, movieId, movieInfoUrl, movieInfo_1, parseMovieInfo, episodeToken, _c, _d, _e, episodeItem, token, urlGetEmbed, embedData, urlEmbed, encodeEmbed, errorEncode_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'AMOVIESTREAM_2';
                DOMAIN = "https://fmovies.to";
                userAgent = {};
                LINK_DETAIL = '';
                KEY = 'DZmuZuXqa9O0z3b7';
                gen = function (title) {
                    var encode = encodeURIComponent(title);
                    var Mi = a.Mi(KEY, encode);
                    return encodeURIComponent(a.wi(Mi));
                };
                a = {
                    Mi: function (t, n) {
                        for (var i, u = [], e = -5495 + -3263 + 8758, o = '', c = 5790 + -2195 + -3595 * 1; c < -3114 * 3 + 811 * -5 + -333 * -41; c++)
                            u[c] = c;
                        for (c = 2659 + 9754 + -12413 * 1; c < 2595 * -1 + 465 * -8 + -6571 * -1; c++)
                            e = (e + u[c] + t['charCodeAt'](c % t['length'])) % (-5149 * 1 + 1 * 2549 + 2856),
                                i = u[c],
                                u[c] = u[e],
                                u[e] = i;
                        for (var c = 1 * -9953 + 1 * 5816 + 4137, e = 926 + -1921 + 199 * 5, f = -7599 + -9973 * 1 + -17572 * -1; f < n['length']; f++)
                            e = (e + u[c = (c + (-20 * -158 + -1107 * -5 + -8694)) % (8092 + -1 * 1896 + -45 * 132)]) % (8842 + 8020 + 437 * -38),
                                i = u[c],
                                u[c] = u[e],
                                u[e] = i,
                                o += String['fromCharCode'](n['charCodeAt'](f) ^ u[(u[c] + u[e]) % (-351 + 9068 + 1 * -8461)]);
                        return o;
                    },
                    mi: function (t) {
                        var a = {};
                        a['hYrne'] = function (t, n) {
                            return t < n;
                        }
                            ,
                                a["ZXzSr"] = function (t, n) {
                                    return t + n;
                                }
                            ,
                                a['KfgkC'] = function (t, n) {
                                    return t > n;
                                }
                            ,
                                a['mbjtf'] = function (t, n) {
                                    return t >> n;
                                }
                            ,
                                a["HINAh"] = function (t, n) {
                                    return t & n;
                                };
                        var u = {};
                        u['value'] = !(9328 + -1 * -245 + -9573);
                        var h = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
                        if ((t = (t = (t = ""["concat"](t))['replace'](/[\t\n\f\r]/g, ""))['length'] % (228 * -8 + 6220 + 1098 * -4) == 1994 + -1 * -3392 + -5386 ? t['replace'](/==?$/, "") : t)["length"] % (-68 * 17 + -9618 + 10778) == 154 * -61 + -3 * -1709 + 4268 || /[^+/0-9A-Za-z]/['test'](t))
                            return null;
                        for (var i, u = '', e = -6316 + -8542 + 874 * 17, o = 7125 + -4834 + -2291, c = -1326 + -1 * 2713 + 4039 * 1; c < t['length']; c++)
                            e = (e <<= 14 * 191 + 2873 + -5541) | (i = t[c],
                                (i = h['indexOf'](i)) < -6083 + -2 * -3846 + -1609 ? void (-19 * -127 + -3999 * 1 + 1586) : i),
                                -1 * -8156 + -10 * 320 + -1 * 4932 === (o += -3446 + 9446 + -74 * 81) && (u = (u = (u += String['fromCharCode']((26321917 + 31234713 + -40844950 & e) >> 4557 + -8532 + 3991)) + String['fromCharCode'](a['mbjtf'](-1 * -91577 + -36 + -26261 & e, 471 * 9 + -1 * 64 + -4167))) + String['fromCharCode'](1 * 1609 + 687 * -1 + -667 & e),
                                    e = o = 1055 + 9079 + 563 * -18);
                        return 198 + 999 * 3 + 1061 * -3 === o ? (e >>= -3992 + 6923 + -2927,
                            u += String['fromCharCode'](e)) : -1 * 393 + 1 * 2089 + -1678 === o && (e >>= -6519 + 7739 * -1 + 14260,
                            u = (u += String['fromCharCode']((-63876 + 126422 + 2734 & e) >> -8707 * 1 + 4195 * -2 + -3421 * -5)) + String['fromCharCode'](a[n(976, "zdb8") + "Ah"](-278 * 5 + 281 * -32 + 967 * 11, e))),
                            u;
                    },
                    wi: function (title) {
                        var i = {};
                        i['hYrne'] = function (t, n) {
                            return t < n;
                        }
                            ,
                                i["ZXzSr"] = function (t, n) {
                                    return t + n;
                                }
                            ,
                                i['KfgkC'] = function (t, n) {
                                    return t > n;
                                }
                            ,
                                i['mbjtf'] = function (t, n) {
                                    return t >> n;
                                }
                            ,
                                i["HINAh"] = function (t, n) {
                                    return t & n;
                                };
                        var a = i;
                        var u = {};
                        u['value'] = !(9328 + -1 * -245 + -9573);
                        var h = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
                        function e(t) {
                            for (t = ""['concat'](t),
                                u = -10 * 966 + 1314 + 2 * 4173; u < t['length']; u++)
                                if (8437 + 6138 + 1432 * -10 < t['charCodeAt'](u))
                                    return null;
                            for (var i = "", u = -17 * 223 + 214 + -7 * -511; u < t['length']; u += 43 * 13 + 8335 + -8891) {
                                var e = [void (4945 + -8811 + 3866), void (57 * 1 + -6428 + -6371 * -1), void (-1 * 5923 + -76 + 5999), void (1 * 2657 + 523 * -11 + 1548 * 2)];
                                e[11 * 155 + -3811 + 2106] = t['charCodeAt'](u) >> 7936 + 9 * -37 + 1 * -7601,
                                    e[5488 + 3726 + -9213] = (-9222 + -8653 * -1 + -44 * -13 & t['charCodeAt'](u)) << 1819 * 1 + -3977 + 2162,
                                    t['length'] > u + (-1431 * -5 + -4155 + -1 * 2999) && (e[2 * 180 + 7 * -1012 + 6725] |= t['charCodeAt'](u + (354 * -24 + -4412 + 12909)) >> -11 * -409 + -7438 + 2943,
                                        e[1678 * -3 + 603 * 13 + -2803] = (276 * -32 + 396 + 1 * 8451 & t['charCodeAt'](u + (-3 * -417 + 2344 + -3594))) << 5854 + -9518 + 3666),
                                    a["KfgkC"](t['length'], u + (405 + 1 * 7129 + -7532)) && (e[-7085 + 6656 + 431] |= t['charCodeAt'](u + (-767 * -11 + -3 * -3130 + -23 * 775)) >> -2179 + 6816 + -4631,
                                        e[9631 + -272 * -31 + 258 * -70] = -3423 + -315 + 3801 & t['charCodeAt'](u + (3092 + -9779 + -6689 * -1)));
                                for (var o = -1 * -4426 + 4437 + -8863; o < e['length']; o++)
                                    'undefined' == typeof e[o] ? i += '=' : i += function (t) {
                                        if (2 * 1961 + 4408 + -8330 <= t && a['hYrne'](t, 1 * 6644 + -2791 + -3789))
                                            return h[t];
                                    }(e[o]);
                            }
                            return i;
                        }
                        return e(title);
                    }
                };
                rc4 = function (key, str) {
                    var s = [];
                    var j = 0;
                    var x;
                    var res = '';
                    for (var i = 0; i < 256; i++) {
                        s[i] = i;
                    }
                    for (i = 0; i < 256; i++) {
                        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
                        x = s[i];
                        s[i] = s[j];
                        s[j] = x;
                    }
                    i = 0;
                    j = 0;
                    for (var y = 0; y < str.length; y++) {
                        i = (i + 1) % 256;
                        j = (j + s[i]) % 256;
                        x = s[i];
                        s[i] = s[j];
                        s[j] = x;
                        res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
                    }
                    return res;
                };
                encode = function (url) {
                    return decodeURIComponent(rc4(KEY, libs.string_atob(url)));
                };
                headers = {
                    'user-agent': libs.request_getRandomUserAgent()
                };
                urlSearch = "".concat(DOMAIN, "/search?vrf=").concat(gen(movieInfo.title), "&keyword=").concat(movieInfo.title.trim().replace(/ /g, '+'));
                return [4, libs.request_get(urlSearch, headers, true)];
            case 1:
                parseSearch = _f.sent();
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
                                LINK_DETAIL = "".concat(DOMAIN).concat(href);
                            }
                            if (movieInfo.type == 'movie' && type.toLowerCase() == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL = "".concat(DOMAIN).concat(href);
                            }
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL }, PROVIDER, 'LINK DETAIl');
                if (!LINK_DETAIL) {
                    return [2];
                }
                SERVER_ID = '';
                if (!(movieInfo.type == 'tv')) return [3, 8];
                tvid = LINK_DETAIL.match(/.([A-z0-9]+)$/i);
                tvid = tvid ? tvid[1] : '';
                libs.log({ tvid: tvid }, PROVIDER, 'TV ID');
                if (!tvid) {
                    return [2];
                }
                tvInfoUrl = "".concat(DOMAIN, "/ajax/film/servers?id=").concat(tvid, "&vrf=").concat(gen(tvid));
                return [4, libs.request_get(tvInfoUrl, headers, false)];
            case 2:
                tvInfo = _f.sent();
                libs.log({ tvInfoUrl: tvInfoUrl, tvInfo: tvInfo }, PROVIDER, 'TV INFO');
                if (!tvInfo.html) return [3, 7];
                parseTvInfo_1 = cheerio.load(tvInfo.html);
                libs.log({ length: parseTvInfo_1("a[data-kname=\"".concat(movieInfo.season, "-").concat(movieInfo.episode, "\"]")).length }, PROVIDER, 'SEARCH TV');
                embedTokens_1 = {};
                parseTvInfo_1("a[data-kname=\"".concat(movieInfo.season, "-").concat(movieInfo.episode, "\"]")).each(function (key, item) {
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
                _f.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3, 7];
                episodeItem = _a[_i];
                token = embedTokens_1[episodeItem];
                urlGetEmbed = "".concat(DOMAIN, "/ajax/episode/info?id=").concat(token);
                return [4, libs.request_get(urlGetEmbed, headers, false)];
            case 4:
                embedData = _f.sent();
                libs.log({
                    embedData: embedData
                }, PROVIDER, 'EMBED DATA');
                urlEmbed = embedData.url;
                encodeEmbed = encode(urlEmbed);
                libs.log({
                    encodeEmbed: encodeEmbed,
                }, PROVIDER, 'ENCODE EMBED');
                if (!encodeEmbed) {
                    return [3, 6];
                }
                return [4, libs.embed_redirect(encodeEmbed, '', movieInfo, PROVIDER, callback, undefined, [])];
            case 5:
                _f.sent();
                _f.label = 6;
            case 6:
                _i++;
                return [3, 3];
            case 7: return [3, 16];
            case 8:
                movieId = LINK_DETAIL.match(/-([A-z0-9]+)$/i);
                movieId = movieId ? movieId[1] : '';
                libs.log({ movieId: movieId }, PROVIDER, 'MOVIE ID');
                if (!movieId) {
                    return [2];
                }
                movieInfoUrl = "".concat(DOMAIN, "/ajax/film/servers?id=").concat(movieId, "&vrf=").concat(gen(movieId));
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 9:
                movieInfo_1 = _f.sent();
                libs.log({ movieInfoUrl: movieInfoUrl, movieInfo: movieInfo_1 }, PROVIDER, 'MOVIE INFO');
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
                _f.label = 10;
            case 10:
                if (!(_e < _c.length)) return [3, 16];
                episodeItem = _c[_e];
                _f.label = 11;
            case 11:
                _f.trys.push([11, 14, , 15]);
                token = episodeToken[episodeItem];
                urlGetEmbed = "".concat(DOMAIN, "/ajax/episode/info?id=").concat(token);
                return [4, libs.request_get(urlGetEmbed, {}, false)];
            case 12:
                embedData = _f.sent();
                libs.log({
                    embedData: embedData
                }, PROVIDER, 'EMBED DATA');
                urlEmbed = embedData.url;
                encodeEmbed = encode(urlEmbed);
                libs.log({
                    encodeEmbed: encodeEmbed,
                }, PROVIDER, 'ENCODE EMBED');
                if (!encodeEmbed) {
                    return [3, 15];
                }
                return [4, libs.embed_redirect(encodeEmbed, '', movieInfo_1, PROVIDER, callback, undefined, [])];
            case 13:
                _f.sent();
                return [3, 15];
            case 14:
                errorEncode_1 = _f.sent();
                libs.log({ errorEncode: errorEncode_1 }, PROVIDER, 'ERROR ENCODE');
                return [3, 15];
            case 15:
                _e++;
                return [3, 10];
            case 16:
                ;
                return [2, true];
        }
    });
}); };
