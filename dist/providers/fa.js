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
    function c(t) {
        return ""["concat"]((2199 + -1789 + -410, i1_1)(t))["replace"](/\//g, "_")["replace"](/\+/g, "-");
    }
    function rc4(key, inp) {
        var arr = [];
        var counter = 0;
        var i = 0;
        var tmp = 0;
        var decrypted = "";
        for (i = 0; i < 256; i++) {
            arr[i] = i;
        }
        for (i = 0; i < 256; i++) {
            counter = (counter + arr[i] + key.charCodeAt(i % key.length)) % 256;
            tmp = arr[i];
            arr[i] = arr[counter];
            arr[counter] = tmp;
        }
        i = 0;
        counter = 0;
        for (var j = 0; j < inp.length; j++) {
            i = (i + 1) % 256;
            counter = (counter + arr[i]) % 256;
            tmp = arr[i];
            arr[i] = arr[counter];
            arr[counter] = tmp;
            decrypted += String.fromCharCode(inp.charCodeAt(j) ^ arr[(arr[i] + arr[counter]) % 256]);
        }
        return decrypted;
    }
    function subst(a) {
        return (libs.string_btoa(a)).replace(/\//g, '_').replace(/\+/g, '-');
    }
    function subst_(a) {
        return libs.string_atob((a).replace(/_/g, '/').replace(/-/g, '+'));
    }
    function mapp(a, b, c) {
        var d = b.length;
        var e = {};
        while (d-- && (e[b[d]] = c[d] || '')) {
            ;
        }
        return a.split('').map(function (a) { return e[a] || a; }).join('');
    }
    function reverse(a) {
        return a.split('').reverse().join('');
    }
    function string_to_func(func) {
        switch (func) {
            case "rc4":
                return rc4;
            case "mapp":
                return mapp;
            case "subst":
                return subst;
            case "reverse":
                return reverse;
        }
    }
    function get_encrypt_order(host) {
        if (rootKey_1["encrypt_order"][host])
            return rootKey_1["encrypt_order"][host].map(function (f) { return string_to_func(f); });
        return [];
    }
    function enc_with_order(keys, order, inp) {
        var res = "";
        var k_i = 0;
        function use_func(func, inp) {
            var r = 0;
            switch (func) {
                case rc4:
                    r = rc4(keys[k_i], inp);
                    k_i++;
                    break;
                case mapp:
                    r = mapp(inp, keys[k_i], keys[k_i + 1]);
                    k_i += 2;
                    break;
                default:
                    r = func(inp);
                    break;
            }
            return r;
        }
        try {
            for (var i = 0; i < order.length; i++)
                res = use_func(order[i], i == 0 ? inp : res);
        }
        catch (e) {
            libs.log({ e: e }, PROVIDER, 'ERROR ENC');
            return "";
        }
        return res;
    }
    function dec_with_order(keys, order, inp) {
        return enc_with_order(keys.concat().reverse(), order.concat().reverse().map(function (f) { return f == subst ? subst_ : f; }), inp);
    }
    var PROVIDER, DOMAIN, userAgent, LINK_DETAIL, i1_1, O_1, genMovie, u_1, decodeRes_2, decodeRes_1, rootKey_1, keys_1, enc, dec, headers, urlSearch, parseSearch_1, LINK_TV_DETAIL, parseTvDetail, tvId, episodeInfoUrl, episodeRes, parseEpisodeData, dataId, serverData, parseServerData_1, serverIds_3, _i, serverIds_1, idItem, embedUrl, embedData, directData, decodeUrl, parseMovieDetail, movieId, movieInfoUrl, movieInfoRes, parseMovieInfo, dataId, serverData, parseServerData_2, serverIds_4, _a, serverIds_2, idItem, embedUrl, embedData, directData, decodeUrl, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'AMOVIESTREAM_2';
                DOMAIN = "https://cinezone.to";
                userAgent = {};
                LINK_DETAIL = '';
                _b.label = 1;
            case 1:
                _b.trys.push([1, 21, , 22]);
                i1_1 = function (t) {
                    for (t = ""["concat"](t), r = -1 * -4109 + -1361 * 2 + -1387; r < t["length"]; r++)
                        if (1 * -1682 + 461 * 11 + 2 * -1567 < t["charCodeAt"](r))
                            return null;
                    for (var i = "", r = -6447 + 8962 + -2515; r < t["length"]; r += -5290 + 4172 + -1121 * -1) {
                        var o = [void (-44 + 6779 * -1 + 6823 * 1), void (4577 + 5589 + -46 * 221), void (-9570 + -739 * -2 + 8092), void (-1 * -669 + -829 * -9 + 6 * -1355)];
                        o[-917 * -9 + -7801 + 2 * -226] = t["charCodeAt"](r) >> -2257 + 11 * -158 + 3997, o[-2687 + 243 * 17 + 39 * -37] = (-20 * 214 + -1 * -7617 + -3334 & t["charCodeAt"](r)) << -1406 * -5 + -3 * 2943 + -1 * -1803, t["length"] > r + (4047 + 7919 + -5 * 2393) && (o[-2 * 2457 + -1 * 7694 + 1 * 12609] |= t["charCodeAt"](r + (4327 * -1 + -1 * 7729 + 1 * 12057)) >> -964 * 6 + -821 * -11 + 3243 * -1, o[38 * -109 + 2029 + 2115] = (5949 + -8983 + -3049 * -1 & t["charCodeAt"](r + (2 * 1593 + 4808 + -7993))) << 189 * 21 + -29 * 317 + -5226 * -1), t["length"] > r + (2 * 4834 + -9375 + 97 * -3) && (o[80 * -75 + 3408 + 2594] |= t["charCodeAt"](r + (-3 * -2413 + 7364 + -14601)) >> -446 * -21 + 4002 + -13362, o[-1811 + -5990 + 3902 * 2] = -9319 * 1 + 5081 * -1 + 14463 & t["charCodeAt"](r + (-9041 + -8401 + 17444)));
                        for (var u = 46 * 214 + -2027 + -7817 * 1; u < o["length"]; u++)
                            i += "undefined" == typeof o[u] ? "=" : function (t) {
                                if (-1537 * -5 + 7791 + -106 * 146 <= t && t < 1 * -156 + -583 * 5 + 285 * 11)
                                    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[t];
                            }(o[u]);
                    }
                    return i;
                };
                O_1 = function (t, n) {
                    for (var o, u = [], s = 851 + -9067 + 8216, e = "", h = 17 * 436 + 4374 + -11786; h < 1 * -6784 + -4832 * 1 + 11872; h++)
                        u[h] = h;
                    for (h = -8335 + -717 + -4 * -2263; h < 1 * 8247 + -1754 + -9 * 693; h++)
                        s = (s + u[h] + t["charCodeAt"](h % t["length"])) % (1787 + -3 * -362 + 1 * -2617), o = u[h], u[h] = u[s], u[s] = o;
                    for (var h = -1 * -3043 + 2398 + -1 * 5441, s = 747 + -38 * 131 + -1 * -4231, c = -185 * -29 + 9228 + -14593; c < n["length"]; c++)
                        o = u[h = (h + (1 * 7418 + 8974 + -16391)) % (7239 + 9821 + -4201 * 4)], u[h] = u[s = (s + u[h]) % (9891 + -1514 + -8121)], u[s] = o, e += String["fromCharCode"]((n["charCodeAt"](c) ^ u[(u[h] + u[s]) % (-305 * 13 + -1069 * 3 + -1857 * -4)]));
                    return e;
                };
                genMovie = function (t) {
                    var i = {};
                    i["iinzD"] = function (t, n) {
                        return t < n;
                    }, i["mmGxz"] = function (t, n) {
                        return t % n;
                    }, i["ArkTS"] = function (t, n) {
                        return t + n;
                    };
                    var s = i;
                    return t = encodeURIComponent(""["concat"](t))
                        , function (t) {
                            for (var i = -1 * -3721 + -3 * -1171 + 7226 * -1, r = (t = c(t), t = c(t = t['split']("")["reverse"]()["join"]("")), ""), o = -4874 + 1711 + -1 * -3163; s["iinzD"](o, t["length"]); o++) {
                                var u = t["charCodeAt"](o);
                                -1 * 2421 + 1 * 2383 + 38 ? u = -6749 + 619 * -10 + -19 * -681 : o % i == 3 * -866 + 7139 + -51 * 89 ? u -= -53 * 29 + 9682 * 1 + 479 * -17 : o % i == 5542 + 1 * -6217 + 679 || o % i == -105 * -10 + 1811 + 1 * -2854 ? u += 7027 * -1 + 51 * -57 + -1242 * -8 : o % i == 9287 * -1 + -21 * -391 + -2 * -538 ? u += -66 + 4891 + 1 * -4821 : s["mmGxz"](o, i) == 7229 + -1914 + 177 * -30 || o % i == 2671 + 9693 + -12358 * 1 ? u -= -137 * 38 + -4 * -2042 + 34 * -87 : o % i == 2872 * -3 + -166 * -59 + -1177 ? u += -1796 + -9187 + 3662 * 3 : o % i == -3829 * 1 + -7326 + 1594 * 7 && (u += -7109 + -9975 + 17089), r += String["fromCharCode"](u);
                            }
                            return r;
                        }(c(O_1("VmSazcydpguRBnhG", t)));
                };
                u_1 = function (t) {
                    var c = {
                        QdvsY: function (t, n) {
                            return t == n;
                        },
                        nEBnz: function (t, n) {
                            return t == n;
                        },
                        rQRQS: function (t, n) {
                            return t & n;
                        },
                        skJkn: function (t, n) {
                            return t + n;
                        },
                        MdEMg: function (t, n) {
                            return t + n;
                        }
                    };
                    if (c["QdvsY"]((t = c["nEBnz"]((t = (t = ""["concat"](t))["replace"](/[\t\n\f\r]/g, ""))["length"] % (-8164 + -4 * -2383 + -1364), -7228 + -2871 + 10099) ? t["replace"](/==?$/, "") : t)["length"] % (8 * 589 + 1 * 7859 + -12567), 3670 + 7988 + -11657 * 1) || /[^+/0-9A-Za-z]/["test"](t))
                        return null;
                    for (var r, o = "", u = -2 * 1347 + 1 * -4637 + -7331 * -1, s = -2 * -3107 + -3403 + -2811, e = -5025 * -1 + -7064 + 2039; e < t["length"]; e++)
                        u = (u <<= 3896 + 1633 * -2 + -104 * 6) | (r = t[e], (r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"["indexOf"](r)) < 9541 + -752 + -17 * 517 ? void (-109 * 1 + 1802 + 1 * -1693) : r), 7344 + 17 * 125 + 9445 * -1 === (s += 13 * 691 + -592 * -15 + -17857) && (o = (o = (o += String["fromCharCode"]((19012171 + 12170 * 1516 + -20750211 & u) >> 4808 + 23 * -384 + 4040)) + String["fromCharCode"]((47 * -1378 + 80921 + 49125 & u) >> 5843 + -344 * 13 + 1 * -1363)) + String["fromCharCode"]((-6913 + -9482 * -1 + -2314 & u)), u = s = -190 * -28 + 5743 * 1 + 299 * -37);
                    return -4877 + 2050 * 4 + -3311 === s ? (u >>= -5268 + -7159 * -1 + -1887, o += String["fromCharCode"](u)) : 44 * 65 + 492 + -3334 === s && (u >>= -9224 + 5853 * -1 + -17 * -887, o = (o += String["fromCharCode"]((-18277 + -73892 + 157449 & u) >> -2606 * 2 + -7 * -1417 + 37 * -127)) + String["fromCharCode"](9423 + 3 * 239 + 5 * -1977 & u)), o;
                };
                decodeRes_2 = function (t) {
                    return t = (1007 + 679 * -10 + 5783, u_1)(""["concat"](t)["replace"](/_/g, "/")["replace"](/-/g, "+")), t = O_1("8z5Ag5wgagfsOuhz", t), t;
                };
                decodeRes_1 = function (t) {
                    return (decodeRes_2(t));
                };
                return [4, libs.request_get("https://raw.githubusercontent.com/giammirove/videogatherer/main/src/keys.json")];
            case 2:
                rootKey_1 = _b.sent();
                keys_1 = rootKey_1["keys"]["watchseriesx.to"] || [];
                libs.log({ keys: keys_1 }, PROVIDER, 'KEYS');
                enc = function (inp) {
                    var order = get_encrypt_order("watchseriesx.to");
                    libs.log({ order: order }, PROVIDER, 'ORDER');
                    if (order.length > 0) {
                        return enc_with_order(keys_1, order, inp);
                    }
                    var a = subst(rc4(keys_1[2], reverse(mapp(inp, keys_1[0], keys_1[1]))));
                    a = subst(rc4(keys_1[5], reverse(mapp(a, keys_1[3], keys_1[4]))));
                    a = subst(rc4(keys_1[8], reverse(mapp(a, keys_1[6], keys_1[7]))));
                    a = subst(a);
                    return a;
                };
                dec = function (inp) {
                    var order = get_encrypt_order("watchseriesx.to");
                    if (order.length > 0)
                        return dec_with_order(keys_1, order, inp);
                    var c = subst_(inp);
                    c = mapp(reverse(rc4(keys_1[8], subst_(c))), keys_1[7], keys_1[6]);
                    c = mapp(reverse(rc4(keys_1[5], subst_(c))), keys_1[4], keys_1[3]);
                    c = mapp(reverse(rc4(keys_1[2], subst_(c))), keys_1[1], keys_1[0]);
                    return c;
                };
                headers = {
                    'user-agent': libs.request_getRandomUserAgent()
                };
                urlSearch = "".concat(DOMAIN, "/filter?keyword=").concat(movieInfo.title.trim().replace(/ /g, '+'));
                return [4, libs.request_get(urlSearch, headers, true)];
            case 3:
                parseSearch_1 = _b.sent();
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                libs.log({ length: parseSearch_1('.item').length }, PROVIDER, 'LENGTH SEARCH INFO');
                parseSearch_1('.item').each(function (key, item) {
                    var title = parseSearch_1(item).find('.info a.title').text();
                    var spanInfo = parseSearch_1(item).find('.sub-info').find('span').first().html();
                    var year = spanInfo ? spanInfo.match(/([0-9]+)/i) : 0;
                    year = year ? year[1] : 0;
                    var href = parseSearch_1(item).find('.info a.title').attr('href');
                    var season = spanInfo ? spanInfo.match(/ss *([0-9]+)/i) : 0;
                    season = season ? Number(season[1]) : 0;
                    var type = 'tv';
                    if (season == 0) {
                        type = 'movie';
                    }
                    libs.log({ title: title, year: year, href: href, type: type, season: season, spanInfo: spanInfo }, PROVIDER, 'MOVIE INFO');
                    if (title && href && !LINK_DETAIL && type) {
                        if (libs.string_matching_title(movieInfo, title.trim(), false)) {
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
                if (!(movieInfo.type == 'tv')) return [3, 12];
                LINK_TV_DETAIL = "".concat(LINK_DETAIL, "/").concat(movieInfo.season, "-").concat(movieInfo.episode);
                return [4, libs.request_get(LINK_TV_DETAIL, headers, true)];
            case 4:
                parseTvDetail = _b.sent();
                tvId = parseTvDetail('div.watch-wrap').attr('data-id');
                libs.log({ tvId: tvId, LINK_TV_DETAIL: LINK_TV_DETAIL }, PROVIDER, 'TVID');
                if (!tvId) {
                    return [2];
                }
                episodeInfoUrl = "".concat(DOMAIN, "/ajax/episode/list/").concat(tvId, "?vrf=").concat(enc(tvId));
                return [4, libs.request_get(episodeInfoUrl, headers, false)];
            case 5:
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
                return [4, libs.request_get("".concat(DOMAIN, "/ajax/server/list/").concat(dataId, "?vrf=").concat(enc(dataId)), headers, false)];
            case 6:
                serverData = _b.sent();
                if (serverData.status != 200) {
                    return [2];
                }
                parseServerData_1 = cheerio.load(serverData.result);
                serverIds_3 = [];
                parseServerData_1('span').each(function (key, item) {
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
                _b.label = 7;
            case 7:
                if (!(_i < serverIds_1.length)) return [3, 11];
                idItem = serverIds_1[_i];
                embedUrl = "".concat(DOMAIN, "/ajax/server/").concat(idItem, "?vrf=").concat(enc(idItem));
                return [4, libs.request_get(embedUrl, headers, false)];
            case 8:
                embedData = _b.sent();
                libs.log({ embedData: embedData }, PROVIDER, 'EMBED DATA');
                if (embedData.status != 200) {
                    return [3, 10];
                }
                directData = embedData.result.url;
                if (!directData) {
                    return [3, 10];
                }
                decodeUrl = dec(directData);
                libs.log({ decodeUrl: decodeURIComponent(decodeUrl) }, PROVIDER, 'DECODE URL');
                return [4, libs.embed_redirect(decodeURIComponent(decodeUrl), '', movieInfo, PROVIDER, callback, undefined, [])];
            case 9:
                _b.sent();
                _b.label = 10;
            case 10:
                _i++;
                return [3, 7];
            case 11: return [3, 20];
            case 12: return [4, libs.request_get(LINK_DETAIL, headers, true)];
            case 13:
                parseMovieDetail = _b.sent();
                movieId = parseMovieDetail('div.watch-wrap').attr('data-id');
                libs.log({ movieId: movieId }, PROVIDER, 'MOVIEID');
                if (!movieId) {
                    return [2];
                }
                movieInfoUrl = "".concat(DOMAIN, "/ajax/episode/list/").concat(movieId, "?vrf=").concat(enc(movieId));
                return [4, libs.request_get(movieInfoUrl, headers, false)];
            case 14:
                movieInfoRes = _b.sent();
                libs.log({ movieInfoRes: movieInfoRes, movieInfoUrl: movieInfoUrl }, PROVIDER, 'MOVIE RES');
                if (movieInfoRes.status != 200) {
                    return [2];
                }
                parseMovieInfo = cheerio.load(movieInfoRes.result);
                dataId = parseMovieInfo(".episodes li a[data-num=\"".concat(1, "\"]")).attr('data-id');
                libs.log({ dataId: dataId }, PROVIDER, 'DATA ID');
                if (!dataId) {
                    return [2];
                }
                return [4, libs.request_get("".concat(DOMAIN, "/ajax/server/list/").concat(dataId, "?vrf=").concat(enc(dataId)), headers, false)];
            case 15:
                serverData = _b.sent();
                libs.log({ serverData: serverData }, PROVIDER, 'SERVER DATA');
                if (serverData.status != 200) {
                    return [2];
                }
                parseServerData_2 = cheerio.load(serverData.result);
                serverIds_4 = [];
                parseServerData_2('span').each(function (key, item) {
                    var id = parseServerData_2(item).attr('data-link-id');
                    if (id) {
                        serverIds_4.push(id);
                    }
                });
                _a = 0, serverIds_2 = serverIds_4;
                _b.label = 16;
            case 16:
                if (!(_a < serverIds_2.length)) return [3, 20];
                idItem = serverIds_2[_a];
                embedUrl = "".concat(DOMAIN, "/ajax/server/").concat(idItem, "?vrf=").concat(enc(idItem));
                return [4, libs.request_get(embedUrl, headers, false)];
            case 17:
                embedData = _b.sent();
                libs.log({ embedData: embedData }, PROVIDER, 'EMBED DATA');
                if (embedData.status != 200) {
                    return [3, 19];
                }
                directData = embedData.result.url;
                if (!directData) {
                    return [3, 19];
                }
                decodeUrl = dec(directData);
                libs.log({ decodeUrl: decodeURIComponent(decodeUrl) }, PROVIDER, 'DECODE URL');
                return [4, libs.embed_redirect(decodeURIComponent(decodeUrl), '', movieInfo, PROVIDER, callback, undefined, [])];
            case 18:
                _b.sent();
                _b.label = 19;
            case 19:
                _a++;
                return [3, 16];
            case 20:
                ;
                return [3, 22];
            case 21:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 22];
            case 22: return [2, true];
        }
    });
}); };
