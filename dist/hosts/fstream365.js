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
hosts["fstream365"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    function convertToHex(_0x561fd4) {
        var _0x2ebcd2 = {
            'ptEMH': function (_0x57bcb4, _0x4a04fc) {
                return _0x57bcb4 == _0x4a04fc;
            },
            'gnSRz': function (_0x35a30b, _0x50280f) {
                return _0x35a30b(_0x50280f);
            },
            'YpozJ': function (_0x6084eb, _0xbe34f2) {
                return _0x6084eb < _0xbe34f2;
            },
            'YUgMo': function (_0x4a445f, _0x1affb7) {
                return _0x4a445f !== _0x1affb7;
            },
            'JTtGZ': "JnOEl",
            'zYNJf': "pLFfC",
            'XwjlA': function (_0x353055, _0x5cfedf) {
                return _0x353055 + _0x5cfedf;
            }
        };
        var _0x3e2feb = '';
        for (var _0x1b5743 = 0; _0x2ebcd2["YpozJ"](_0x1b5743, _0x561fd4["length"]); _0x1b5743++) {
            if (_0x2ebcd2["YUgMo"](_0x2ebcd2["JTtGZ"], _0x2ebcd2["zYNJf"])) {
                _0x3e2feb += _0x2ebcd2["XwjlA"]('', _0x561fd4["charCodeAt"](_0x1b5743)["toString"](16));
            }
        }
        return _0x3e2feb;
    }
    function q(a) { }
    function s(a, b) {
        var c = 0;
        for (var d = b + 4 - 1; d > b - 1; d--) {
            c = c << 8 | a[d];
        }
        return c >>> 0;
    }
    function t(a, b, c) {
        for (var d = 3; d > -1; d--) {
            var e = b >>> d * 8;
            b = b ^ e << d * 8;
            a[c + d] = e;
        }
        return a;
    }
    function u(a, b, c) {
        for (var d = 3; d > -1; d--) {
            var e = b >>> d * 8;
            b = b ^ e << d * 8;
            a[c + (3 - d)] = e;
        }
        return a;
    }
    function v(a, b) {
        var c = a << b | a >>> 32 - b;
        return c >>> 0;
    }
    function w(a, b, c, d) {
        var e = s(c, 8);
        var f = s(d, 0);
        t(a, f, 8);
        t(a, e, 0);
        f = s(a, 12);
        var g = s(c, 12);
        f = f ^ g;
        t(b, f, 12);
        f = s(a, 8);
        g = s(c, 8);
        f = f ^ g;
        t(b, f, 8);
        f = s(a, 4);
        g = s(c, 4);
        f = f ^ g;
        t(b, f, 4);
        f = s(a, 0);
        g = s(c, 0);
        f = f ^ g;
        t(b, f, 0);
    }
    function x(a, b, c) {
        var d = s(c, 12);
        var e = s(b, 12);
        t(a, d + e, 12);
        var d = s(c, 8);
        var e = s(b, 8);
        t(a, d + e, 8);
        var d = s(c, 4);
        var e = s(b, 4);
        t(a, d + e, 4);
        var d = s(c, 0);
        var e = s(b, 0);
        t(a, d + e, 0);
    }
    function y(a, b, c, d, e) {
        if (e == 0) {
            var f = [153, 121, 130, 90, 153, 121, 130, 90, 153, 121, 130, 90, 153, 121, 130, 90];
            x(a, d, f);
            var g = s(a, 0);
            e = s(c, 0);
            g = v(e, 5) + g;
            var h = s(c, 4);
            var i = s(c, 12);
            var j = s(c, 8);
            var k = ((i ^ j) & h ^ i) + g;
            var l = v(k, 30);
            q(g + " " + h + " " + i + " " + j + " " + k + " " + l);
            t(b, l, 12);
            g = s(a, 4);
            h = v(h, 30);
            g = ((j ^ h) & e ^ j) + i + g;
            i = v(k, 5) + g;
            g = v(i, 30);
            t(b, g, 8);
            g = s(a, 8);
            g = j + g;
            j = v(e, 30);
            g = ((j ^ h) & k ^ h) + g;
            e = v(i, 5) + g;
            t(b, e, 4);
            g = s(a, 12);
            g = g + h;
            g = ((j ^ l) & i ^ j) + g;
            g = v(e, 5) + g;
            t(b, g, 0);
        }
        else if (e == 1) {
            var m = [161, 235, 217, 110, 161, 235, 217, 110, 161, 235, 217, 110, 161, 235, 217, 110];
            x(a, d, m);
            var n = s(a, 0);
            var k = s(c, 12);
            var h = s(c, 8);
            var i = s(c, 4);
            var o = i ^ h ^ k;
            j = s(c, 0);
            e = v(j, 5) + o + n;
            var l = v(e, 30);
            t(b, l, 12);
            n = s(a, 4);
            i = v(i, 30);
            n = (i ^ j ^ h) + k + n;
            k = v(e, 5) + n;
            n = v(k, 30);
            t(b, n, 8);
            n = s(a, 8);
            n = n + h;
            j = v(j, 30);
            n = (j ^ i ^ e) + n;
            h = v(k, 5) + n;
            t(b, h, 4);
            n = s(a, 12);
            n = n + i;
            n = (j ^ l ^ k) + n;
            n = v(h, 5) + n;
            t(b, n, 0);
        }
        else if (e == 2) {
            var p = [220, 188, 27, 143, 220, 188, 27, 143, 220, 188, 27, 143, 220, 188, 27, 143];
            x(a, d, p);
            var n = s(a, 0);
            var e = s(c, 0);
            n = v(e, 5) + n;
            var h = s(c, 4);
            var i = s(c, 12);
            var j = s(c, 8);
            var o = (j ^ i) & h;
            var k = (i & j ^ o) + n;
            var l = v(k, 30);
            t(b, l, 12);
            n = s(a, 4);
            h = v(h, 30);
            n = ((h ^ j) & e ^ h & j) + i + n;
            i = v(k, 5) + n;
            n = v(i, 30);
            t(b, n, 8);
            n = s(a, 8);
            n = j + n;
            j = v(e, 30);
            n = ((j ^ h) & k ^ h & j) + n;
            e = v(i, 5) + n;
            t(b, e, 4);
            n = s(a, 12);
            n = h + n;
            n = ((l ^ j) & i ^ l & j) + n;
            n = v(e, 5) + n;
            t(b, n, 0);
        }
        else if (e == 3) {
            var u = [214, 193, 98, 202, 214, 193, 98, 202, 214, 193, 98, 202, 214, 193, 98, 202];
            x(a, d, u);
            var n = s(a, 0);
            var k = s(c, 12);
            var h = s(c, 8);
            var i = s(c, 4);
            var o = i ^ h ^ k;
            j = s(c, 0);
            e = v(j, 5) + o + n;
            var l = v(e, 30);
            t(b, l, 12);
            n = s(a, 4);
            i = v(i, 30);
            n = (i ^ j ^ h) + k + n;
            k = v(e, 5) + n;
            n = v(k, 30);
            t(b, n, 8);
            n = s(a, 8);
            n = n + h;
            j = v(j, 30);
            n = (j ^ i ^ e) + n;
            h = v(k, 5) + n;
            t(b, h, 4);
            n = s(a, 12);
            n = n + i;
            n = (j ^ l ^ k) + n;
            n = v(h, 5) + n;
            t(b, n, 0);
        }
    }
    function z(a, b, c) {
        var d = 7;
        var e = 12;
        var f = 0;
        var g = 32;
        var h = [1, 2, 3, 4, 5, 6, 7];
        var i = [];
        for (var d_1 = 0; d_1 < c.length; d_1++) {
            var j = c.charCodeAt(d_1);
            if (j > 127) {
                break;
            }
            i[d_1] = j;
        }
        var k = [];
        for (var d_2 = 0; d_2 < a.length; d_2++) {
            var j = a.charCodeAt(d_2);
            if (j > 127) {
                break;
            }
            k[d_2] = j;
        }
        var l = [];
        var m = -1;
        while (d != f) {
            m++;
            var2 = h[m];
            var n = k[f % e];
            var o = i[f % e];
            o ^= var2;
            o ^= n;
            l[f] = o;
            f++;
        }
        l[f] = 128;
        var p = [1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 84, 50, 16, 240, 225, 210, 195, 61];
        var x = [1, 35, 69, 103, 137, 171, 205, 239, 254, 220, 186, 152, 118, 84, 50, 16, 240, 225, 210, 195, 61];
        var z = new Array(16);
        var d = 0;
        var A = new Array(64);
        while (d != 64) {
            if (d == 64) { }
            else {
                f = s(l, d);
                var n = f << 24;
                n = n | (f & 65280) << 8;
                n = n | (f >>> 8 & 65280 | f >>> 24);
                t(A, n, d);
                d += 4;
            }
        }
        q(A);
        var d = 0;
        var f = 0;
        var B = 0;
        var C = 0;
        var D = 0;
        var E = 0;
        var F = 0;
        var G = 0;
        var H = 0;
        var I = 0;
        var J = 0;
        var K = 0;
        var L = new Array(200);
        var g = s(p, 0);
        var M = s(p, 4);
        var N = s(A, 0);
        var O = s(A, 4);
        var P = s(A, 8);
        var Q = s(A, 12);
        var n = s(p, 12);
        t(L, n, 108);
        t(L, M, 100);
        t(L, g, 96);
        t(L, Q, 124);
        t(L, P, 120);
        t(L, O, 116);
        n = s(p, 16);
        t(L, n + N, 112);
        var R = L.slice(112, 128);
        var S = new Array(16);
        y(S, z, x, R, 0);
        n = s(z, 0);
        t(L, n, 64);
        n = s(z, 4);
        t(L, n, 68);
        n = s(z, 8);
        t(L, n, 72);
        n = s(z, 12);
        t(L, n, 76);
        K = s(L, 16);
        C = s(L, 20);
        D = s(L, 24);
        G = s(L, 28);
        t(L, G, 124);
        t(L, D, 120);
        t(L, C, 116);
        t(L, v(g, 30) + K, 112);
        R = L.slice(112, 128);
        q("array1048000");
        q(z);
        q("array1048032");
        q(x);
        q("array1048048");
        q(R);
        y(S, x, z, R, 0);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        H = s(L, 96);
        M = s(L, 100);
        f = s(L, 32);
        E = s(L, 36);
        F = s(L, 40);
        B = s(L, 44);
        t(L, M, 100);
        t(L, H, 96);
        t(L, B, 124);
        t(L, F, 120);
        t(L, E, 116);
        n = s(L, 64);
        t(L, v(n, 30) + f, 112);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, z, x, R, 0);
        n = s(z, 0);
        t(L, n, 64);
        n = s(z, 4);
        t(L, n, 68);
        n = s(z, 8);
        t(L, n, 72);
        n = s(z, 12);
        t(L, n, 76);
        I = s(L, 48);
        g = s(L, 52);
        d = s(L, 56);
        J = 56;
        t(L, J, 124);
        t(L, d, 120);
        t(L, g, 116);
        t(L, v(H, 30) + 0, 112);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, x, z, R, 0);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        H = s(L, 96);
        M = s(L, 100);
        var T = s(L, 108);
        t(L, 0, 108);
        t(L, 0, 104);
        t(L, O, 100);
        t(L, N, 96);
        t(L, 0, 124);
        t(L, 0, 120);
        t(L, 0, 116);
        t(L, 0, 112);
        R = L.slice(112, 128);
        var U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        Q = s(L, 84);
        P = s(L, 88);
        N = s(L, 80);
        O = s(L, 92);
        t(L, T, 108);
        t(L, M, 100);
        t(L, H, 96);
        n = N ^ f ^ g;
        N = v(n, 1);
        n = N ^ B ^ O;
        O = v(n, 1);
        t(L, O, 124);
        n = J ^ P ^ F;
        P = v(n, 1);
        t(L, P, 120);
        n = d ^ Q ^ E;
        Q = v(n, 1);
        t(L, Q, 116);
        n = s(L, 64);
        n = v(n, 30);
        n = n + N;
        t(L, n, 112);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, z, x, R, 0);
        n = s(z, 0);
        t(L, n, 64);
        n = s(z, 4);
        t(L, n, 68);
        n = s(z, 8);
        t(L, n, 72);
        n = s(z, 12);
        t(L, n, 76);
        t(L, G, 108);
        t(L, D, 104);
        t(L, C, 100);
        t(L, K, 96);
        t(L, B, 124);
        t(L, F, 120);
        t(L, E, 116);
        t(L, f, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        G = s(L, 92);
        D = s(L, 80);
        C = s(L, 84);
        n = s(L, 88);
        n = n ^ d ^ O;
        K = v(n, 1);
        t(L, K, 120);
        n = g ^ C ^ P;
        C = v(n, 1);
        t(L, C, 116);
        n = D ^ I ^ Q;
        D = v(n, 1);
        n = v(H, 30);
        n = n + D;
        t(L, n, 112);
        n = G ^ J ^ D;
        G = v(n, 1);
        t(L, G, 124);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, x, z, R, 1);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        H = s(L, 96);
        M = s(L, 100);
        T = s(L, 108);
        t(L, B, 108);
        t(L, F, 104);
        t(L, E, 100);
        t(L, f, 96);
        t(L, J, 124);
        t(L, d, 120);
        t(L, g, 116);
        t(L, I, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        B = s(L, 84);
        F = s(L, 88);
        f = s(L, 80);
        E = s(L, 92);
        t(L, T, 108);
        t(L, M, 100);
        t(L, H, 96);
        n = C ^ N ^ f;
        f = v(n, 1);
        n = O ^ E ^ f;
        E = v(n, 1);
        t(L, E, 124);
        n = G ^ F ^ P;
        F = v(n, 1);
        t(L, F, 120);
        n = K ^ Q ^ B;
        B = v(n, 1);
        t(L, B, 116);
        n = s(L, 64);
        n = v(n, 30) + f;
        t(L, n, 112);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, z, x, R, 1);
        n = s(z, 0);
        t(L, n, 64);
        n = s(z, 4);
        t(L, n, 68);
        n = s(z, 8);
        t(L, n, 72);
        n = s(z, 12);
        t(L, n, 76);
        t(L, J, 108);
        t(L, d, 104);
        t(L, g, 100);
        t(L, I, 96);
        t(L, O, 124);
        t(L, P, 120);
        t(L, Q, 116);
        t(L, N, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        J = s(L, 92);
        I = s(L, 80);
        d = s(L, 84);
        n = s(L, 88);
        n = K ^ n ^ E;
        g = v(n, 1);
        t(L, g, 120);
        n = d ^ C ^ F;
        d = v(n, 1);
        t(L, d, 116);
        n = D ^ I ^ B;
        I = v(n, 1);
        n = v(H, 30) + I;
        t(L, n, 112);
        n = I ^ J ^ G;
        J = v(n, 1);
        t(L, J, 124);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, x, z, R, 1);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        H = s(L, 96);
        M = s(L, 100);
        T = s(L, 108);
        t(L, O, 108);
        t(L, P, 104);
        t(L, Q, 100);
        t(L, N, 96);
        t(L, G, 124);
        t(L, K, 120);
        t(L, C, 116);
        t(L, D, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        Q = s(L, 84);
        P = s(L, 88);
        N = s(L, 80);
        O = s(L, 92);
        t(L, T, 108);
        t(L, M, 100);
        t(L, H, 96);
        n = d ^ N ^ f;
        N = v(n, 1);
        n = E ^ O ^ N;
        O = v(n, 1);
        t(L, O, 124);
        n = J ^ F ^ P;
        P = v(n, 1);
        t(L, P, 120);
        n = g ^ Q ^ B;
        Q = v(n, 1);
        t(L, Q, 116);
        n = s(L, 64);
        n = v(n, 30) + N;
        t(L, n, 112);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, z, x, R, 1);
        n = s(z, 0);
        t(L, n, 64);
        n = s(z, 4);
        t(L, n, 68);
        n = s(z, 8);
        t(L, n, 72);
        n = s(z, 12);
        t(L, n, 76);
        t(L, G, 108);
        t(L, K, 104);
        t(L, C, 100);
        t(L, D, 96);
        t(L, E, 124);
        t(L, F, 120);
        t(L, B, 116);
        t(L, f, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        G = s(L, 92);
        D = s(L, 80);
        C = s(L, 84);
        n = s(L, 88);
        n = O ^ n ^ g;
        K = v(n, 1);
        t(L, K, 120);
        n = P ^ C ^ d;
        C = v(n, 1);
        t(L, C, 116);
        n = Q ^ I ^ D;
        D = v(n, 1);
        n = v(H, 30) + D;
        t(L, n, 112);
        n = D ^ J ^ G;
        G = v(n, 1);
        t(L, G, 124);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, x, z, R, 1);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        H = s(L, 96);
        M = s(L, 100);
        T = s(L, 108);
        t(L, E, 108);
        t(L, F, 104);
        t(L, B, 100);
        t(L, f, 96);
        t(L, J, 124);
        t(L, g, 120);
        t(L, d, 116);
        t(L, I, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        B = s(L, 84);
        F = s(L, 88);
        f = s(L, 80);
        E = s(L, 92);
        t(L, T, 108);
        t(L, M, 100);
        t(L, H, 96);
        n = C ^ N ^ f;
        f = v(n, 1);
        n = E ^ O ^ f;
        E = v(n, 1);
        t(L, E, 124);
        n = G ^ F ^ P;
        F = v(n, 1);
        t(L, F, 120);
        n = K ^ Q ^ B;
        B = v(n, 1);
        t(L, B, 116);
        n = s(L, 64);
        n = v(n, 30) + f;
        t(L, n, 112);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, z, x, R, 2);
        n = s(z, 0);
        t(L, n, 64);
        n = s(z, 4);
        t(L, n, 68);
        n = s(z, 8);
        t(L, n, 72);
        n = s(z, 12);
        t(L, n, 76);
        t(L, J, 108);
        t(L, g, 104);
        t(L, d, 100);
        t(L, I, 96);
        t(L, O, 124);
        t(L, P, 120);
        t(L, Q, 116);
        t(L, N, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        J = s(L, 92);
        I = s(L, 80);
        d = s(L, 84);
        n = s(L, 88);
        n = E ^ n ^ K;
        g = v(n, 1);
        t(L, g, 120);
        n = F ^ C ^ d;
        d = v(n, 1);
        t(L, d, 116);
        n = B ^ I ^ D;
        I = v(n, 1);
        n = v(H, 30) + I;
        t(L, n, 112);
        n = I ^ J ^ G;
        J = v(n, 1);
        t(L, J, 124);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, x, z, R, 2);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        H = s(L, 96);
        M = s(L, 100);
        T = s(L, 108);
        t(L, O, 108);
        t(L, P, 104);
        t(L, Q, 100);
        t(L, N, 96);
        t(L, G, 124);
        t(L, K, 120);
        t(L, C, 116);
        t(L, D, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        Q = s(L, 84);
        P = s(L, 88);
        N = s(L, 80);
        O = s(L, 92);
        t(L, T, 108);
        t(L, M, 100);
        t(L, H, 96);
        n = d ^ N ^ f;
        N = v(n, 1);
        n = E ^ O ^ N;
        O = v(n, 1);
        t(L, O, 124);
        n = J ^ F ^ P;
        P = v(n, 1);
        t(L, P, 120);
        n = g ^ Q ^ B;
        Q = v(n, 1);
        t(L, Q, 116);
        n = s(L, 64);
        n = v(n, 30) + N;
        t(L, n, 112);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, z, x, R, 2);
        n = s(z, 0);
        t(L, n, 64);
        n = s(z, 4);
        t(L, n, 68);
        n = s(z, 8);
        t(L, n, 72);
        n = s(z, 12);
        t(L, n, 76);
        t(L, G, 108);
        t(L, K, 104);
        t(L, C, 100);
        t(L, D, 96);
        t(L, E, 124);
        t(L, F, 120);
        t(L, B, 116);
        t(L, f, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        G = s(L, 92);
        D = s(L, 80);
        C = s(L, 84);
        n = s(L, 88);
        n = O ^ n ^ g;
        K = v(n, 1);
        t(L, K, 120);
        n = P ^ C ^ d;
        C = v(n, 1);
        t(L, C, 116);
        n = Q ^ I ^ D;
        D = v(n, 1);
        n = v(H, 30) + D;
        t(L, n, 112);
        n = D ^ J ^ G;
        G = v(n, 1);
        t(L, G, 124);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, x, z, R, 2);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        H = s(L, 96);
        M = s(L, 100);
        T = s(L, 108);
        t(L, E, 108);
        t(L, F, 104);
        t(L, B, 100);
        t(L, f, 96);
        t(L, J, 124);
        t(L, g, 120);
        t(L, d, 116);
        t(L, I, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        B = s(L, 84);
        F = s(L, 88);
        f = s(L, 80);
        E = s(L, 92);
        t(L, T, 108);
        t(L, M, 100);
        t(L, H, 96);
        n = C ^ N ^ f;
        f = v(n, 1);
        n = E ^ O ^ f;
        E = v(n, 1);
        t(L, E, 124);
        n = G ^ F ^ P;
        F = v(n, 1);
        t(L, F, 120);
        n = K ^ Q ^ B;
        B = v(n, 1);
        t(L, B, 116);
        n = s(L, 64);
        n = v(n, 30) + f;
        t(L, n, 112);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, z, x, R, 2);
        n = s(z, 0);
        t(L, n, 64);
        n = s(z, 4);
        t(L, n, 68);
        n = s(z, 8);
        t(L, n, 72);
        n = s(z, 12);
        t(L, n, 76);
        t(L, J, 108);
        t(L, g, 104);
        t(L, d, 100);
        t(L, I, 96);
        t(L, O, 124);
        t(L, P, 120);
        t(L, Q, 116);
        t(L, N, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        J = s(L, 92);
        I = s(L, 80);
        d = s(L, 84);
        n = s(L, 88);
        n = E ^ n ^ K;
        g = v(n, 1);
        t(L, g, 120);
        n = F ^ C ^ d;
        d = v(n, 1);
        t(L, d, 116);
        n = B ^ I ^ D;
        I = v(n, 1);
        n = v(H, 30) + I;
        t(L, n, 112);
        n = I ^ J ^ G;
        J = v(n, 1);
        t(L, J, 124);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, x, z, R, 3);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        H = s(L, 96);
        T = s(L, 100);
        var24 = s(L, 104);
        var25 = s(L, 108);
        t(L, O, 108);
        t(L, P, 104);
        t(L, Q, 100);
        t(L, N, 96);
        t(L, G, 124);
        t(L, K, 120);
        t(L, C, 116);
        t(L, D, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        Q = s(L, 84);
        P = s(L, 88);
        N = s(L, 80);
        O = s(L, 92);
        t(L, var25, 108);
        t(L, var24, 104);
        t(L, T, 100);
        t(L, H, 96);
        n = d ^ N ^ f;
        N = v(n, 1);
        n = E ^ O ^ N;
        O = v(n, 1);
        t(L, O, 124);
        n = J ^ F ^ P;
        P = v(n, 1);
        t(L, P, 120);
        n = g ^ Q ^ B;
        Q = v(n, 1);
        t(L, Q, 116);
        n = s(L, 64);
        n = v(n, 30) + N;
        t(L, n, 112);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, z, x, R, 3);
        n = s(z, 0);
        t(L, n, 64);
        n = s(z, 4);
        t(L, n, 68);
        n = s(z, 8);
        t(L, n, 72);
        n = s(z, 12);
        t(L, n, 76);
        t(L, G, 108);
        t(L, K, 104);
        t(L, C, 100);
        t(L, D, 96);
        t(L, E, 124);
        t(L, F, 120);
        t(L, B, 116);
        t(L, f, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        G = s(L, 84);
        D = s(L, 88);
        C = s(L, 92);
        n = s(L, 80);
        n = Q ^ n ^ I;
        K = v(n, 1);
        n = v(H, 30) + K;
        t(L, n, 112);
        n = K ^ J ^ C;
        C = v(n, 1);
        t(L, C, 124);
        n = O ^ D ^ g;
        D = v(n, 1);
        t(L, D, 120);
        n = P ^ G ^ d;
        G = v(n, 1);
        t(L, G, 116);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, x, z, R, 3);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        H = s(L, 96);
        T = s(L, 100);
        var24 = s(L, 104);
        var25 = s(L, 108);
        t(L, E, 108);
        t(L, F, 104);
        t(L, B, 100);
        t(L, f, 96);
        t(L, J, 124);
        t(L, g, 120);
        t(L, d, 116);
        t(L, I, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        f = s(L, 88);
        E = s(L, 84);
        F = s(L, 92);
        B = s(L, 80);
        t(L, var25, 108);
        t(L, var24, 104);
        t(L, T, 100);
        t(L, H, 96);
        n = G ^ N ^ B;
        B = v(n, 1);
        n = s(L, 64);
        n = v(n, 30) + B;
        t(L, n, 112);
        n = B ^ F ^ O;
        F = v(n, 1);
        t(L, F, 124);
        n = D ^ E ^ Q;
        E = v(n, 1);
        t(L, E, 116);
        n = C ^ P ^ f;
        f = v(n, 1);
        t(L, f, 120);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, z, x, R, 3);
        n = s(z, 0);
        t(L, n, 64);
        n = s(z, 4);
        t(L, n, 68);
        n = s(z, 8);
        t(L, n, 72);
        n = s(z, 12);
        t(L, n, 76);
        t(L, J, 108);
        t(L, g, 104);
        t(L, d, 100);
        t(L, I, 96);
        t(L, O, 124);
        t(L, P, 120);
        t(L, Q, 116);
        t(L, N, 112);
        R = L.slice(112, 128);
        U = L.slice(80, 96);
        x = L.slice(96, 112);
        w(S, U, x, R);
        n = s(U, 0);
        t(L, n, 80);
        n = s(U, 4);
        t(L, n, 84);
        n = s(U, 8);
        t(L, n, 88);
        n = s(U, 12);
        t(L, n, 92);
        g = s(L, 92);
        d = s(L, 80);
        B = s(L, 84);
        n = s(L, 88);
        n = F ^ n ^ D;
        n = v(n, 1);
        t(L, n, 120);
        n = f ^ G ^ B;
        n = v(n, 1);
        t(L, n, 116);
        n = E ^ K ^ d;
        d = v(n, 1);
        n = v(H, 30) + d;
        t(L, n, 112);
        n = d ^ C ^ g;
        n = v(n, 1);
        t(L, n, 124);
        R = L.slice(112, 128);
        x = L.slice(96, 112);
        y(S, x, z, R, 3);
        n = s(x, 0);
        t(L, n, 96);
        n = s(x, 4);
        t(L, n, 100);
        n = s(x, 8);
        t(L, n, 104);
        n = s(x, 12);
        t(L, n, 108);
        g = s(L, 108);
        d = s(L, 104);
        f = s(L, 100);
        n = s(p, 0);
        o = s(L, 96);
        t(p, n + o, 0);
        n = s(p, 4);
        t(p, n + f, 4);
        n = s(p, 8);
        t(p, n + d, 8);
        n = s(p, 12);
        t(p, n + g, 12);
        n = s(p, 16);
        o = s(L, 64);
        n = v(o, 30) + n;
        t(p, n, 16);
        O = s(p, 0);
        u(p, O, 0);
        e = s(p, 4);
        u(p, e, 4);
        var4 = s(p, 8);
        u(p, var4, 8);
        d = s(p, 12);
        u(p, d, 12);
        g = s(p, 16);
        u(p, g, 16);
        q("array1048096");
        q(p);
        function V(a) {
            return [(a & 4278190080) >> 24, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255];
        }
        r = function (a, b) {
            try {
                for (var c_1 = 0; c_1 < a.length; c_1++) {
                    a[c_1] = a[c_1] ^ b[c_1 % b.length];
                }
            }
            catch (a) {
                return null;
            }
        };
        var W = p.slice(4, 20);
        var X = new Uint8Array(W);
        mG = X;
        q(mG);
        mG = libs.string_btoa(String.fromCharCode.apply(null, new Uint8Array(mG)));
        return mG;
    }
    function I(a, b, c, d) {
        var e = z(b, c, d);
        a = libs.string_atob(a);
        libs.log({ e: e, a: a }, HOST, 'I DECODE');
        var f = {
            format: CryptoJSAesJson
        };
        var g = cryptoS.AES.decrypt(a, e, f);
        console.log(g.toString(cryptoS.enc.Utf8));
        return JSON.parse(JSON.parse(g.toString(cryptoS.enc.Utf8)));
    }
    var DOMAIN, HOST, headers, CryptoJSAesJson, R, _0xabef83, headers_1, parseDetail, id, key, _0x2bc27a, idDirect, decodeH, decodeIv, decodeS, headerAPI, urlDirect, dataDirect, parseDirect, parseSource, _i, parseSource_1, item, e_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                DOMAIN = 'https://fstream365.com';
                HOST = 'fstream365';
                headers = {
                    'content-type': 'application/json;charset=UTF-8',
                    'Referer': config.options.link_detail,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                CryptoJSAesJson = {
                    'stringify': function (_0x2446ec) {
                        var _0x168df0 = {
                            'ct': _0x2446ec["ciphertext"]["toString"](cryptoS["enc"]["Base64"])
                        };
                        if (_0x2446ec.iv) {
                            _0x168df0.iv = _0x2446ec.iv["toString"]();
                        }
                        if (_0x2446ec["salt"]) {
                            _0x168df0.s = _0x2446ec["salt"]["toString"]();
                        }
                        return JSON["stringify"](_0x168df0);
                    },
                    'parse': function (_0x50e8b5) {
                        var _a;
                        var _0x2ff517 = (_a = {},
                            _a["oPPMn"] = "3|1|0|2|4",
                            _a);
                        var _0x16be06 = _0x2ff517["oPPMn"]["split"]('|');
                        var _0x2c7ffe = 0;
                        while (true) {
                            switch (_0x16be06[_0x2c7ffe++]) {
                                case '0':
                                    if (_0x41868a.iv) {
                                        _0x4032ce.iv = cryptoS["enc"]["Hex"]["parse"](_0x41868a.iv);
                                    }
                                    continue;
                                case '1':
                                    var _0x4032ce = cryptoS["lib"]["CipherParams"]["create"]({
                                        'ciphertext': cryptoS["enc"]["Base64"]["parse"](_0x41868a.ct)
                                    });
                                    continue;
                                case '2':
                                    if (_0x41868a.s) {
                                        _0x4032ce["salt"] = cryptoS["enc"]["Hex"]["parse"](_0x41868a.s);
                                    }
                                    continue;
                                case '3':
                                    var _0x41868a = JSON["parse"](_0x50e8b5);
                                    continue;
                                case '4':
                                    return _0x4032ce;
                            }
                            break;
                        }
                    }
                };
                R = {
                    stringify: function (a) {
                        var b = {
                            ct: a.ciphertext.toString(cryptoS.enc.Base64)
                        };
                        if (a.iv) {
                            b.iv = a.iv.toString();
                        }
                        if (a.salt) {
                            b.s = a.salt.toString();
                        }
                        return JSON.stringify(b);
                    },
                    parse: function (a) {
                        var b = JSON.parse(a);
                        var c = cryptoS.lib.CipherParams.create({
                            ciphertext: cryptoS.enc.Base64.parse(b.ct)
                        });
                        if (b.iv) {
                            c.iv = cryptoS.enc.Hex.parse(b.iv);
                        }
                        if (b.s) {
                            c.salt = cryptoS.enc.Hex.parse(b.s);
                        }
                        return c;
                    }
                };
                _0xabef83 = (_a = {},
                    _a["format"] = CryptoJSAesJson,
                    _a);
                ;
                headers_1 = {
                    "Referer": "https://ww.ymovies.vip/",
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
                };
                return [4, libs.request_get(url, headers_1, true)];
            case 2:
                parseDetail = _b.sent();
                id = parseDetail("#player").attr("data-id");
                key = parseDetail("#player").attr("data-hash");
                libs.log({ id: id, key: key }, HOST, "ID & KEY");
                if (!id || !key) {
                    return [2];
                }
                _0x2bc27a = JSON['parse'](cryptoS['AES']['encrypt'](JSON['stringify'](id), key, _0xabef83)['toString']());
                libs.log({ _0x2bc27a: _0x2bc27a }, HOST, "ENCRYPT DATA");
                idDirect = convertToHex(_0x2bc27a.ct);
                decodeH = convertToHex(key);
                decodeIv = _0x2bc27a.iv;
                decodeS = _0x2bc27a.s;
                libs.log({ idDirect: idDirect, decodeH: decodeH, decodeS: decodeS, decodeIv: decodeIv }, HOST, 'ID DIRECT');
                headerAPI = {
                    "Referer": url,
                };
                urlDirect = "".concat(DOMAIN, "/ajax/getSources/?id=").concat(idDirect, "&h=").concat(decodeH, "&a=").concat(decodeIv, "&t=").concat(decodeS);
                return [4, fetch(urlDirect, {
                        headers: headerAPI,
                        method: "GET"
                    })];
            case 3:
                dataDirect = _b.sent();
                return [4, dataDirect.json()];
            case 4:
                parseDirect = _b.sent();
                libs.log({ parseDirect: parseDirect, urlDirect: urlDirect, url: url }, HOST, 'PARSE parseDirect');
                parseSource = I(parseDirect.sources, decodeIv, 0, decodeS);
                libs.log({ parseSource: parseSource }, HOST, 'PARSE parseSource');
                for (_i = 0, parseSource_1 = parseSource; _i < parseSource_1.length; _i++) {
                    item = parseSource_1[_i];
                    libs.log({ file: item.file }, HOST, "FILE");
                    if (!item.file) {
                        continue;
                    }
                    libs.embed_callback(item.file, provider, HOST, 'Hls', callback, 1, item.tracks, [{ file: item.file, quality: 1080 }], headerAPI);
                }
                return [3, 6];
            case 5:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, HOST, 'ERROR');
                return [3, 6];
            case 6: return [2];
        }
    });
}); };
