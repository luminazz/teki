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
    function hash_o_1(t) {
        var h = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
        for (t = ""["concat"](t), o = -3 * -882 + -2543 + -103 * 1; o < t["length"]; o++)
            if (-7012 * -1 + 727 + -7484 < t["charCodeAt"](o))
                return null;
        for (var r = "", o = 907 * -10 + -8743 + 17813; o < t["length"]; o += -853 * 1 + 46 * -21 + 911 * 2) {
            var s = [void (829 * 1 + -7612 + -17 * -399), void (-9708 + -7 * -524 + 6040), void (-233 * -3 + 1313 + -2012), void (5849 + 4420 + -3 * 3423)];
            s[-80 + -3612 + -1 * -3692] = t["charCodeAt"](o) >> 2, s[-1 * -9320 + -3766 * -2 + -16851] = ((1922 + -983 * -9 + 1 * -10766 & t["charCodeAt"](o)) << 1132 + -3112 * -2 + -1 * 7352), t["length"] > o + (-1187 + 3 * 2415 + 1 * -6057) && (s[4145 + 5260 + -9404] |= t["charCodeAt"](o + (-3345 * 2 + -7828 * 1 + -1 * -14519)) >> 1 * -5230 + 8700 + 1 * -3466, s[35 * -245 + -9807 + 18384] = (-3101 + 111 * -83 + -1 * -12329 & t["charCodeAt"](o + (-8910 + -9087 + 1 * 17998))) << 7318 * -1 + 954 * -1 + -42 * -197), t["length"] > (o + -6293 + -1139 + -21 * -354) && (s[5216 + -33 * -13 + -5643] |= t["charCodeAt"]((o + 6226 + 3433 * 1 + -333 * 29)) >> 1 * -46 + 137 * -71 + 9779, s[-14 * 546 + -769 * -3 + 4 * 1335] = -1 * -8545 + -1827 + -6655 & t["charCodeAt"](o + (-4 * 1237 + 5 * -3 + 4965)));
            for (var u = 683 * 1 + 3517 * -1 + 2834; u < s["length"]; u++)
                r += "undefined" == typeof s[u] ? "=" : function (t) {
                    if (-701 * 5 + -5081 + -54 * -159 <= t && t < 6718 + -127 + 1 * -6527)
                        return h[t];
                }(s[u]);
        }
        return r;
    }
    function hash_j(t, n) {
        for (var i, r = [], o = -15 * 422 + -415 * 4 + 7990, s = "", u = -4061 * -1 + -52 * 123 + 2335; u < -2 * 4435 + 1 * -3855 + 12981; u++)
            r[u] = u;
        for (u = -1137 * -1 + 3392 * -1 + -41 * -55; u < -2292 + 10 * -301 + 5558 * 1; u++)
            o = (o + r[u] + t["charCodeAt"](u % t["length"])) % (257 * -31 + 1677 + 6546), i = r[u], r[u] = r[o], r[o] = i;
        for (var u = 152 * -50 + -9237 + 16837, o = 8 * -919 + 31 * 227 + 315 * 1, e = -1 * 5961 + 2152 * -2 + 10265; e < n["length"]; e++)
            i = r[u = (u + (-58 * -1 + 202 * 1 + -259)) % (-1999 + -66 * -86 + -1 * 3421)], r[u] = r[o = (o + r[u]) % (-209 + -6 * 347 + 283 * 9)], r[o] = i, s += String["fromCharCode"](n["charCodeAt"](e) ^ r[(r[u] + r[o]) % (-9810 + -2018 + 1007 * 12)]);
        return s;
    }
    function hash_W(t) {
        return (-2478 + 7692 + 474 * -11, hash_o_1)(t);
    }
    function hash_O(t) {
        var e = {
            eHngA: function (t, n) {
                return t(n);
            },
            RIxcF: function (t, n) {
                return t % n;
            },
            IKlJp: function (t, n) {
                return t % n;
            },
            snYYK: function (t, n) {
                return t == n;
            },
            bAoIb: function (t, n) {
                return t == n;
            },
            wFzHj: function (t, n) {
                return t(n);
            }
        };
        return (8023 + 8 * 347 + 10799 * -1, hash_o_1)(function (t) {
            for (var r = -9350 + -6768 + -139 * -116, o = (t = hash_W(t), ""), s = -8095 + -2839 + 10934; s < t["length"]; s++) {
                var u = t["charCodeAt"](s);
                -6895 + -1 * -5108 + -1 * -1787 ? u = -421 + -5813 * -1 + 674 * -8 : (s % r) == 1 * -2946 + -1302 + 7 * 607 ? u += -40 * 34 + 1179 * 1 + 186 : (s % r) == -9006 + -1 * 9701 + 18712 ? u -= -4519 + -7755 + 307 * 40 : ((s % r) == -15 * 255 + 9987 + 3 * -2054) || ((s % r) == -1 * -356 + -2473 * -1 + -2825) ? u += -6292 + 4077 + 2221 : s % r != 6772 + 31 * 140 + -11109 && s % r != -1623 * 3 + -505 * -5 + -2 * -1173 || (u -= -4177 * 1 + 199 * 3 + -717 * -5), o += String["fromCharCode"](u);
            }
            return o = function (t) {
                return t["replace"](/[a-zA-Z]/g, function (t) {
                    return String["fromCharCode"]((t <= "Z" ? 4 * 146 + 8255 + -8749 : -1 * 5159 + 9491 * -1 + -4 * -3693) >= (t = t["charCodeAt"](-68 * -3 + -5 * -568 + -4 * 761) + (-2306 + -157 * 51 + 10326)) ? t : t - (-10 * -626 + 6673 + -12907));
                });
            }(o = hash_W(o));
        }(t));
    }
    function C(t, n) {
        for (var r, u = [], o = 73 * 66 + 8102 + -12920, s = "", c = 5908 + -2 * -1355 + -8618; c < 9279 * 1 + -2262 + -6761; c++)
            u[c] = c;
        for (c = -7180 + 4316 + -358 * -8; c < -494 + 49 * -62 + 2 * 1894; c++)
            o = ((o + u[c]) + t["charCodeAt"](c % t["length"])) % (-10 * 484 + 3740 + 1356), r = u[c], u[c] = u[o], u[o] = r;
        for (var c = 9583 + 7146 + -16729, o = 3939 + -74 * 111 + -75 * -57, h = 5512 + -8164 + 34 * 78; h < n["length"]; h++)
            r = u[c = (c + (913 * 1 + -7581 + 27 * 247)) % (5 * -1082 + 6553 + -887)], u[c] = u[o = (o + u[c]) % (-4518 + -6408 + 11182)], u[o] = r, s += String["fromCharCode"](n["charCodeAt"](h) ^ u[(u[c] + u[o]) % (-17 * 283 + -8402 + -1 * -13469)]);
        return s;
    }
    function icode(t) {
        var f = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
        for (t = ""["concat"](t), u = 247 * -8 + -3584 + 5560; u < t["length"]; u++)
            if (-404 + 1383 * 2 + -2107 < t["charCodeAt"](u))
                return null;
        for (var r = "", u = 604 * -7 + 3 * 419 + 1 * 2971; u < t["length"]; u += 9605 + 681 + 1 * -10283) {
            var o = [void (-2 * -2549 + -1307 * -1 + -6405), void (7e3 + 2098 + -9098), void (256 + -100 * 19 + 1644), void (9 * -1098 + 2545 + -253 * -29)];
            o[-9862 + -9980 + 19842] = t["charCodeAt"](u) >> -6003 + -6290 * 1 + -5 * -2459, o[-1710 + 8833 + -3 * 2374] = (4179 * -2 + -1894 + -2051 * -5 & t["charCodeAt"](u)) << -30 * 296 + -3 * -2857 + 313, (t["length"] > (u + (-9674 + -407 * 11 + 488 * 29))) && (o[1013 + -482 + -530] |= t["charCodeAt"](u + (8733 + 964 + 8 * -1212)) >> -1 * -1436 + 1051 * 1 + -2483, o[1 * -971 + -2503 * -1 + -30 * 51] = ((-3580 + -2248 + 5843 * 1) & (t["charCodeAt"](u + (19 * -19 + 2 * -1399 + 3160)))) << 58 * 85 + 9595 + -14523), (t["length"] > (u + (-5177 + 9120 + 563 * -7))) && (o[-4398 * -2 + -275 + -8519] |= t["charCodeAt"]((u + (-1491 + 2 * -299 + -17 * -123))) >> 3692 + -7078 + 424 * 8, o[-26 * -358 + 9524 + 1 * -18829] = -2474 * -4 + -2666 + -2389 * 3 & t["charCodeAt"](u + (4188 + 5289 + -9475)));
            for (var s = 1033 * -4 + -1232 + 5364; s < o["length"]; s++)
                r += "undefined" == typeof o[s] ? "=" : function (t) {
                    if (3 * -2165 + -1 * 8965 + 15460 <= t && t < 225 * -13 + -107 + 3096)
                        return f[t];
                }(o[s]);
        }
        return r;
    }
    function aCode(t) {
        return ""["concat"]((1307 + 2998 + -3 * 1435, icode)(t))["replace"](/\//g, "_")["replace"](/\+/g, "-");
    }
    function genMovie(t) {
        var f = "F" + "Wsfu0" + "K" + "Qd9vx" + "Y" + "G" + "N" + "B";
        var i = {};
        i["GnfuU"] = function (t, n) {
            return t + n;
        };
        return t = encodeURIComponent(t),
            function (t) {
                var i = {};
                i["nvFwT"] = function (t, n) {
                    return t + n;
                }, i["JfzDB"] = function (t, n) {
                    return t - n;
                };
                var r = i;
                for (var u = -5827 + 7343 + -1511, o = (t = aCode(t = function (t) {
                    return t["replace"](/[a-zA-Z]/g, function (t) {
                        return String["fromCharCode"]((t <= "Z" ? -3841 * 2 + -1618 * 4 + 14244 : 7183 + 1907 * -1 + 5154 * -1) >= (t = t["charCodeAt"](-8320 + -11 * -299 + 5031) + (37 * 17 + 2243 + 1 * -2859)) ? t : r["JfzDB"](t, -519 + -2172 + -19 * -143));
                    });
                }(t)), ""), s = -5 * -479 + -9911 * -1 + 14 * -879; s < t["length"]; s++) {
                    var c = t["charCodeAt"](s);
                    -108 * 49 + 8601 + 3 * -1103 ? c = -2074 + 1 * -5473 + 1 * 7547 : s % u == -359 * 25 + 2401 + -6575 * -1 || s % u == 7430 + 3057 + -10483 ? c -= 68 * 147 + 4 * -700 + -7194 : s % u == 9261 + -114 * 12 + -7890 ? c += -2928 + -295 * -17 + -694 * 3 : s % u == 3 * 553 + 254 * 13 + -4961 ? c -= -5 * -836 + -1407 + -2769 : s % u == 661 + 6370 + -7029 && (c -= -4712 * -2 + -8676 + -742), o += String["fromCharCode"](c);
                }
                return encodeURIComponent(o);
            }(aCode(C(f, t)));
    }
    function uCode(t) {
        var f = 'A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'LM' + 'N' + 'O' + 'P' + 'Q' + 'RS' + 'T' + 'U' + 'V' + 'W' + 'X' + 'YZabcdefghijklmnopqrstuvwxyz0123456789+' + '/';
        if ((t = (t = (t = ""["concat"](t))["replace"](/[\t\n\f\r]/g, ""))["length"] % (-24 * -162 + 1848 + -5732 * 1) == -1 * 9859 + -2545 + 12404 ? t["replace"](/==?$/, "") : t)["length"] % (-1 * -6491 + -59 * -43 + -4512 * 2) == -15 * 531 + 9329 + -1363 || /[^+/0-9A-Za-z]/["test"](t))
            return null;
        for (var r, u = "", o = 6702 * -1 + -2616 * 2 + -1 * -11934, s = 1 * 2809 + -3133 * 1 + 324, c = 1336 + 1 * -6067 + 4731; c < t["length"]; c++)
            o = (o <<= -7938 + 25 + 7919 * 1) | (r = t[c], (r = f["indexOf"](r)) < -2422 + -4900 + -3661 * -2 ? void (17 * -291 + -1 * 8031 + 6489 * 2) : r), 63 * -1 + -3562 + 3649 === (s += -1229 + -81 * -59 + -3544) && (u = (u = (u += String["fromCharCode"]((14705491 * -2 + -1 * 9895747 + 811861 * 69 & o) >> -6315 + -4789 * -1 + 3 * 514)) + String["fromCharCode"](((-1 * 56037 + -56905 + 178222) & o) >> -1 * -8355 + -1 * -549 + 8896 * -1)) + String["fromCharCode"](-1 * -6919 + -6790 + 126 & o), o = s = 1 * -2803 + 9473 + -290 * 23);
        return 5 * -79 + 1943 * 2 + -3479 === s ? (o >>= 8512 + -1275 + -7233, u += String["fromCharCode"](o)) : -1 * -3658 + -6358 + 2718 === s && (o >>= -7130 + -6891 * -1 + 241, u = (u += String["fromCharCode"]((172 * -681 + -18854 * -5 + 88142 & o) >> -1 * -5813 + 8910 + -14715)) + String["fromCharCode"](-244 + -6703 + -7202 * -1 & o)), u;
    }
    function decode(t) {
        var h = "8z5" + "Ag5wgagfs" + "Ouh" + "z";
        return t = (907 * -5 + -448 * 12 + 9911, uCode)(""["concat"](t)["replace"](/_/g, "/")["replace"](/-/g, "+")), t = C(h, t), decodeURIComponent(t);
    }
    var PROVIDER, DOMAIN, userAgent, KEY_1, ENCRYPT_KEY, gen, urlSearch, parseSearch, id, detailUrl, parseDetailData, _i, _a, item, embedUrl, parseEmbedUrl, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'WVIDSRCTO';
                DOMAIN = "https://vidsrc.to";
                userAgent = libs.request_getRandomUserAgent();
                _b.label = 1;
            case 1:
                _b.trys.push([1, 9, , 10]);
                KEY_1 = "8z5Ag5wgagfsOuhz";
                ENCRYPT_KEY = '8z5Ag5wgagfsOuhz';
                gen = function (title) {
                    var encode = encodeURIComponent(title);
                    var Mi = a.j(KEY_1, encode);
                    var wi = a.o(Mi);
                    return a.O(wi);
                };
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/embed/tv/").concat(movieInfo.imdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/embed/movie/").concat(movieInfo.imdb_id);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URLSEARCH');
                return [4, libs.request_get(urlSearch, {
                        'user-agent': userAgent
                    }, true)];
            case 2:
                parseSearch = _b.sent();
                id = parseSearch('.episodes li a').attr('data-id');
                libs.log({ id: id }, PROVIDER, 'ID');
                if (!id) {
                    return [2];
                }
                detailUrl = "".concat(DOMAIN, "/ajax/embed/episode/").concat(id, "/sources");
                return [4, libs.request_get(detailUrl)];
            case 3:
                parseDetailData = _b.sent();
                libs.log({ detailUrl: detailUrl, parseDetailData: parseDetailData }, PROVIDER, 'PARSE DETAIL DATA');
                _i = 0, _a = parseDetailData.result;
                _b.label = 4;
            case 4:
                if (!(_i < _a.length)) return [3, 8];
                item = _a[_i];
                return [4, libs.request_get("".concat(DOMAIN, "/ajax/embed/source/").concat(item.id))];
            case 5:
                embedUrl = _b.sent();
                libs.log({ embedUrl: embedUrl }, PROVIDER, 'EMBED DATA');
                parseEmbedUrl = decode(embedUrl.result.url);
                libs.log({ embedUrl: embedUrl, parseEmbedUrl: parseEmbedUrl }, PROVIDER, 'PARSE EMBED URL');
                if (!parseEmbedUrl) {
                    return [3, 7];
                }
                return [4, libs.embed_redirect(parseEmbedUrl, '', movieInfo, PROVIDER, callback, undefined, [])];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7:
                _i++;
                return [3, 4];
            case 8: return [3, 10];
            case 9:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 10];
            case 10: return [2];
        }
    });
}); };
