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
    var PROVIDER, DOMAIN, userAgent, LINK_DETAIL, KEY, ENCRYPT_KEY, gen, genMovie, decode, a, rc4, encode, headers, urlSearch, parseSearch, LINK_TV_DETAIL, parseTvDetail, tvId, episodeInfoUrl, episodeRes, parseEpisodeData, dataId, serverData, parseServerData_1, serverIds_3, _i, serverIds_1, idItem, embedUrl, embedData, directData, decodeUrl, parseMovieDetail, movieId, movieInfoUrl, movieInfoRes, parseMovieInfo, dataId, serverData, parseServerData_2, serverIds_4, _a, serverIds_2, idItem, embedUrl, embedData, directData, decodeUrl;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'AMOVIESTREAM_2';
                DOMAIN = "https://fmovies.to";
                userAgent = {};
                LINK_DETAIL = '';
                KEY = 'MPPBJLgFwShfqIBx';
                ENCRYPT_KEY = 'hlPeNwkncH0fq9so';
                gen = function (title) {
                    var encode = encodeURIComponent(title);
                    var Mi = a.j(KEY, encode);
                    var wi = a.o(Mi);
                    return a.O(wi);
                };
                genMovie = function (title) {
                    var encode = encodeURIComponent(title);
                    var Mi = a.j(KEY, encode);
                    var wi = a.o(Mi);
                    return encodeURIComponent(a.O(wi));
                };
                decode = function (url) {
                    var u = a.u(url);
                    var j = a.j(ENCRYPT_KEY, u);
                    return decodeURIComponent(j);
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
                    u: function (t) {
                        var f = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
                        if ((t = (t = (t = ""['concat'](t))["replace"](/[\t\n\f\r]/g, ""))["length"] % (-794 + 608 + 190) == -227 * -29 + -1 * -1313 + -7896 ? t["replace"](/==?$/, "") : t)["length"] % (-2380 + -8186 + -10 * -1057) == 1154 + -2 * -3084 + -7321 * 1 || /[^+/0-9A-Za-z]/["test"](t))
                            return null;
                        for (var r, o = "", s = -1736 + 8144 + -534 * 12, u = -7 * 587 + -5281 + 9390, h = 6 * 617 + -79 * -71 + -9311; h < t["length"]; h++)
                            s = (s <<= -653 * -5 + 7174 + 10433 * -1) | (r = t[h], (r = f["indexOf"](r)) < 3784 + 5 * -1544 + 3936 ? void (7 * 379 + 573 * -7 + 1358) : r), 5 * -561 + -1 * 3001 + 5830 === (u += -6047 + 343 * 13 + -797 * -2) && (o = (o = (o += String["fromCharCode"]((-17257949 + 22284100 + 11685529 & s) >> 344 + 2 * 2895 + -6118)) + String["fromCharCode"]((-1 * 77989 + 79339 + 63930 & s) >> -3910 * 1 + 4968 + -1050)) + String["fromCharCode"](-3 * 1601 + 27 * 1 + 5031 & s), s = u = -6737 + -1 * 7051 + 766 * 18);
                        return 1937 * -2 + 1312 + 2574 === u ? (s >>= -4913 + -2967 + 7884, o += String["fromCharCode"](s)) : 262 * -13 + 828 + 2596 * 1 === u && (s >>= 26 * -76 + 1 * -57 + 2035, o = (o += String["fromCharCode"](14 * 6241 + -93063 + 70969 & s >> -683 * -3 + -197 * 49 + 7612)) + String["fromCharCode"](-1076 + -3559 + 4890 & s)), o;
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
                    j: function (t, n) {
                        for (var r, o = [], s = -149 * 55 + -91 * -91 + -86, u = '', h = 4 * 1123 + 6 * 757 + -9034 * 1; h < -2988 + 857 + -77 * -31; h++)
                            o[h] = h;
                        for (h = -7 * -1364 + 145 * -6 + -8678; h < -359 * -5 + 1117 + -2656; h++)
                            s = (s + o[h] + t['charCodeAt'](h % t['length'])) % (-2933 * -2 + 9289 + -14899 * 1), r = o[h], o[h] = o[s], o[s] = r;
                        for (var h = -4580 + 3 * 757 + 2309, s = 199 + 5012 + 27 * -193, c = 987 + 167 * 35 + -6832; c < n['length']; c++)
                            r = o[h = (h + (1821 * -1 + -3303 + 1 * 5125)) % (3232 + -2427 + 3 * -183)], o[h] = o[s = (s + o[h]) % (-2846 + 7937 + 4835 * -1)], o[s] = r, u += String['fromCharCode'](n['charCodeAt'](c) ^ o[(o[h] + o[s]) % (-1383 + 2373 + 734 * -1)]);
                        return u;
                    },
                    f: function (t) {
                        var i = {};
                        i["voigd"] = function (t, n) {
                            return t >= n;
                        };
                        var r = i;
                        return t["replace"](/[a-zA-Z]/g, function (t) {
                            return String["fromCharCode"](r["voigd"](t <= "Z" ? 9061 + 1454 * 3 + -13333 : 1 * -1867 + -17 * -461 + -1 * 5848, t = t["charCodeAt"](1065 + -758 + -307) + (152 * 13 + 8 * 1169 + 5 * -2263)) ? t : t - (1 * 6122 + 5507 + -11603));
                        });
                    },
                    O: function (t) {
                        var n = {};
                        n['uvwVX'] = function (t, n) {
                            return t + n;
                        }, n['RnHhs'] = function (t, n) {
                            return t % n;
                        }, n['EiFCa'] = function (t, n) {
                            return t % n;
                        };
                        var e = n;
                        return (0, a.o)(function (t) {
                            for (var r = -21 * 413 + 7547 * -1 + -601 * -27, o = (t = a.f(t), t = a.f(t), ""), s = -6597 + 9230 + -2633; s < t["length"]; s++) {
                                var u = t["charCodeAt"](s);
                                1046 + 10 * 607 + 1779 * -4 ? u = 11 * -247 + 19 * 140 + 57 : s % r == -12 * -527 + 8 * -410 + -3040 ? u -= 5718 + -524 * -8 + -9904 * 1 : s % r == 1940 + -274 * 24 + 4639 ? u -= -1037 + -8621 + -1 * -9662 : s % r == -7929 + 490 * -6 + 10874 ? u += -2 * 1017 + 42 * -8 + 44 * 54 : s % r == -1 * 5713 + 1 * 8318 + -2604 || s % r == -4491 + -6325 + -676 * -16 || e['RnHhs'](s, r) == 1 * -9245 + 1 * 1949 + -1217 * -6 ? u -= 5182 + -7200 + 2020 : e["EiFCa"](s, r) == 5318 + 3 * -1722 + -2 * 75 && (u += 9 * 369 + -3865 + 10 * 55), o += String["fromCharCode"](u);
                            }
                            return o = o["split"]("")["reverse"]()["join"]("");
                        }(t));
                    },
                    o: function (t) {
                        var h = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
                        for (t = ""["concat"](t), o = -2632 + 8467 * 1 + -5835; o < t["length"]; o++)
                            if (52 * -1 + -31 * 307 + 9824 < t['charCodeAt'](o))
                                return null;
                        for (var r = "", o = 8667 + 5342 + -14009; o < t['length']; o += 7165 + 7995 + 15157 * -1) {
                            var s = [void (-8193 + 467 + 7726), void (3 * 3198 + 1 * 2222 + -1688 * 7), void (-890 + 12 * 249 + -2098), void (-3695 + -6512 + 10207)];
                            s[-229 * 37 + -8988 + 17461] = t['charCodeAt'](o) >> -4337 + 4066 + -21 * -13, s[4518 + -1464 + -3053] = (-41 * 20 + -965 * -2 + -1107 & t['charCodeAt'](o)) << -6734 + -99 * 10 + 7728, t["length"] > o + (-1 * 5765 + 615 * -5 + 8841) && (s[-8881 + 2991 + -5891 * -1] |= t['charCodeAt'](o + (-7580 + 6307 + 7 * 182)) >> 7508 + 1 * -7497 + -7 * 1, s[3 * -865 + 29 * 311 + -6422] = (1 * 802 + 934 * 5 + -5457 & t["charCodeAt"](o + (14 * -64 + -3125 * 1 + 1 * 4022))) << -4 * 1766 + -1 * -3145 + 3921), t["length"] > o + (-3588 + 12 * 20 + 3350) && (s[-9086 + -6 * 199 + 10282] |= t["charCodeAt"](o + (-1 * -6101 + -36 * -13 + -11 * 597)) >> 26 + 9631 + -9651, s[-367 * -11 + 7514 + 4 * -2887] = -4953 * 1 + 1 * 2521 + -499 * -5 & t["charCodeAt"](o + (-930 * -6 + 1 * 1019 + -6597)));
                            for (var u = -2222 + -101 * 73 + 9595; u < s["length"]; u++)
                                r += "undefined" == typeof s[u] ? '=' : function (t) {
                                    if (1428 + -5539 * 1 + 4111 <= t && t < -37 * -186 + -125 * 38 + -2068)
                                        return h[t];
                                }(s[u]);
                        }
                        return r;
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
                urlSearch = "".concat(DOMAIN, "/filter?keyword=").concat(movieInfo.title.trim().replace(/ /g, '+'));
                return [4, libs.request_get(urlSearch, headers, true)];
            case 1:
                parseSearch = _b.sent();
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                libs.log({ length: parseSearch('.item').length }, PROVIDER, 'LENGTH SEARCH INFO');
                parseSearch('.item').each(function (key, item) {
                    var title = parseSearch(item).find('a').text();
                    var year = parseSearch(item).find('.meta').find('span').first().html();
                    year = year ? year.match(/([0-9]+)/i) : 0;
                    year = year ? year[1] : 0;
                    var href = parseSearch(item).find('a').attr('href');
                    var typeFilm = parseSearch(item).find('.type').text();
                    var type = 'tv';
                    if (typeFilm && typeFilm.toLowerCase() == 'movie') {
                        type = 'movie';
                    }
                    libs.log({ title: title, year: year, href: href, type: type }, PROVIDER, 'MOVIE INFO');
                    if (title && href && !LINK_DETAIL && type) {
                        if (libs.string_matching_title(movieInfo, title, false)) {
                            if (movieInfo.type == 'tv' && type.toLowerCase() == 'tv' && movieInfo.year == year) {
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
                if (!(movieInfo.type == 'tv')) return [3, 10];
                LINK_TV_DETAIL = "".concat(LINK_DETAIL, "/").concat(movieInfo.season, "-").concat(movieInfo.episode);
                return [4, libs.request_get(LINK_TV_DETAIL, headers, true)];
            case 2:
                parseTvDetail = _b.sent();
                tvId = parseTvDetail('div.watch').attr('data-id');
                libs.log({ tvId: tvId, LINK_TV_DETAIL: LINK_TV_DETAIL }, PROVIDER, 'TVID');
                if (!tvId) {
                    return [2];
                }
                episodeInfoUrl = "".concat(DOMAIN, "/ajax/episode/list/").concat(tvId, "?vrf=").concat(gen(tvId));
                return [4, libs.request_get(episodeInfoUrl, headers, false)];
            case 3:
                episodeRes = _b.sent();
                libs.log({ episodeRes: episodeRes, episodeInfoUrl: episodeInfoUrl }, PROVIDER, 'EPISODE RES');
                if (episodeRes.status != 200) {
                    return [2];
                }
                parseEpisodeData = cheerio.load(episodeRes.result);
                dataId = parseEpisodeData("ul[data-season=\"".concat(movieInfo.season, "\"] li a[data-num=\"").concat(movieInfo.episode, "\"]")).attr('data-id');
                libs.log({ dataId: dataId }, PROVIDER, 'DATA ID');
                if (!dataId) {
                    return [2];
                }
                return [4, libs.request_get("".concat(DOMAIN, "/ajax/server/list/").concat(dataId, "?vrf=").concat(gen(dataId)), headers, false)];
            case 4:
                serverData = _b.sent();
                if (serverData.status != 200) {
                    return [2];
                }
                parseServerData_1 = cheerio.load(serverData.result);
                serverIds_3 = [];
                parseServerData_1('li').each(function (key, item) {
                    var id = parseServerData_1(item).attr('data-link-id');
                    if (id) {
                        serverIds_3.push(id);
                    }
                });
                libs.log({ serverIds: serverIds_3 }, PROVIDER, 'serverId');
                if (!serverIds_3.length) {
                    return [2];
                }
                _i = 0, serverIds_1 = serverIds_3;
                _b.label = 5;
            case 5:
                if (!(_i < serverIds_1.length)) return [3, 9];
                idItem = serverIds_1[_i];
                embedUrl = "".concat(DOMAIN, "/ajax/server/").concat(idItem, "?vrf=").concat(gen(idItem));
                return [4, libs.request_get(embedUrl, headers, false)];
            case 6:
                embedData = _b.sent();
                libs.log({ embedData: embedData }, PROVIDER, 'EMBED DATA');
                if (embedData.status != 200) {
                    return [3, 8];
                }
                directData = embedData.result.url;
                if (!directData) {
                    return [3, 8];
                }
                decodeUrl = decode(directData);
                libs.log({ decodeUrl: decodeUrl }, PROVIDER, 'DECODE URL');
                return [4, libs.embed_redirect(decodeUrl, '', movieInfo, PROVIDER, callback, undefined, [])];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8:
                _i++;
                return [3, 5];
            case 9: return [3, 18];
            case 10: return [4, libs.request_get(LINK_DETAIL, headers, true)];
            case 11:
                parseMovieDetail = _b.sent();
                movieId = parseMovieDetail('div.watch').attr('data-id');
                libs.log({ movieId: movieId }, PROVIDER, 'MOVIEID');
                if (!movieId) {
                    return [2];
                }
                movieInfoUrl = "".concat(DOMAIN, "/ajax/episode/list/").concat(movieId, "?vrf=").concat(genMovie(movieId));
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 12:
                movieInfoRes = _b.sent();
                libs.log({ movieInfoRes: movieInfoRes, movieInfoUrl: movieInfoUrl }, PROVIDER, 'MOVIE RES');
                if (movieInfoRes.status != 200) {
                    return [2];
                }
                parseMovieInfo = cheerio.load(movieInfoRes.result);
                dataId = parseMovieInfo(".episodes li a[title=\"".concat(1, "\"]")).attr('data-id');
                libs.log({ dataId: dataId }, PROVIDER, 'DATA ID');
                if (!dataId) {
                    return [2];
                }
                return [4, libs.request_get("".concat(DOMAIN, "/ajax/server/list/").concat(dataId, "?vrf=").concat(genMovie(dataId)), headers, false)];
            case 13:
                serverData = _b.sent();
                if (serverData.status != 200) {
                    return [2];
                }
                parseServerData_2 = cheerio.load(serverData.result);
                serverIds_4 = [];
                parseServerData_2('li').each(function (key, item) {
                    var id = parseServerData_2(item).attr('data-link-id');
                    if (id) {
                        serverIds_4.push(id);
                    }
                });
                _a = 0, serverIds_2 = serverIds_4;
                _b.label = 14;
            case 14:
                if (!(_a < serverIds_2.length)) return [3, 18];
                idItem = serverIds_2[_a];
                embedUrl = "".concat(DOMAIN, "/ajax/server/").concat(idItem, "?vrf=").concat(genMovie(idItem));
                return [4, libs.request_get(embedUrl, headers, false)];
            case 15:
                embedData = _b.sent();
                libs.log({ embedData: embedData }, PROVIDER, 'EMBED DATA');
                if (embedData.status != 200) {
                    return [3, 17];
                }
                directData = embedData.result.url;
                if (!directData) {
                    return [3, 17];
                }
                decodeUrl = decode(directData);
                libs.log({ decodeUrl: decodeUrl }, PROVIDER, 'DECODE URL');
                return [4, libs.embed_redirect(decodeUrl, '', movieInfo, PROVIDER, callback, undefined, [])];
            case 16:
                _b.sent();
                _b.label = 17;
            case 17:
                _a++;
                return [3, 14];
            case 18:
                ;
                return [2, true];
        }
    });
}); };
