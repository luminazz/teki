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
    function Iry9MQXnLs(hexInput) {
        var key = "pWB9V)[*4I`nJpp?ozyB~dbr9yt!*n4u";
        var hexDecoded = hexInput.match(/.{1,2}/g)
            .map(function (hex) { return String.fromCharCode(parseInt(hex, 16)); })
            .join("");
        var xorResult = "";
        for (var i = 0; i < hexDecoded.length; i++) {
            xorResult += String.fromCharCode(hexDecoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        var shiftResult = "";
        for (var i = 0; i < xorResult.length; i++) {
            shiftResult += String.fromCharCode(xorResult.charCodeAt(i) - 3);
        }
        return libs.string_atob(shiftResult);
    }
    function IGLImMhWrI(input) {
        var reversed = input.split("").reverse().join("");
        var rot13Applied = reversed.replace(/[a-zA-Z]/g, function (char) {
            return String.fromCharCode(char.charCodeAt(0) + (char.toLowerCase() < "n" ? 13 : -13));
        });
        var finalReversed = rot13Applied.split("").reverse().join("");
        return libs.string_atob(finalReversed);
    }
    function GTAxQyTyBx(input) {
        var reversed = input.split("").reverse().join("");
        var evenCharsOnly = "";
        for (var i = 0; i < reversed.length; i += 2) {
            evenCharsOnly += reversed[i];
        }
        return libs.string_atob(evenCharsOnly);
    }
    function MyL1IRSfHe(_0xa54f5f) {
        var _0x2b197e = _0xa54f5f.split("").reverse().join("");
        var _0x14fe01 = "";
        for (var _0x1e1913 = 0; _0x1e1913 < _0x2b197e.length; _0x1e1913++) {
            _0x14fe01 += String.fromCharCode(_0x2b197e.charCodeAt(_0x1e1913) - 1);
        }
        var _0x5e7210 = "";
        for (var _0x3f77d8 = 0; _0x3f77d8 < _0x14fe01.length; _0x3f77d8 += 2) {
            _0x5e7210 += String.fromCharCode(parseInt(_0x14fe01.substr(_0x3f77d8, 2), 16));
        }
        return _0x5e7210;
    }
    function detdj7JHiK(encodedInput) {
        var trimmedInput = encodedInput.slice(10, -16);
        var xorKey = "3SAY~#%Y(V%>5d/Yg\"$G[Lh1rK4a;7ok";
        var base64Decoded = libs.string_atob(trimmedInput);
        var repeatedKey = "";
        var keyLength = xorKey.length;
        var neededLength = base64Decoded.length;
        for (var i = 0; i < neededLength; i++) {
            repeatedKey += xorKey[i % keyLength];
        }
        var result = "";
        for (var i = 0; i < base64Decoded.length; i++) {
            result += String.fromCharCode(base64Decoded.charCodeAt(i) ^ repeatedKey.charCodeAt(i));
        }
        return result;
    }
    function nZlUnj2VSo(_0x132a77) {
        var _0x4577d0 = {
            x: "a",
            y: "b",
            z: "c",
            a: "d",
            b: "e",
            c: "f",
            d: "g",
            e: "h",
            f: "i",
            g: "j",
            h: "k",
            i: "l",
            j: "m",
            k: "n",
            l: "o",
            m: "p",
            n: "q",
            o: "r",
            p: "s",
            q: "t",
            r: "u",
            s: "v",
            t: "w",
            u: "x",
            v: "y",
            w: "z",
            X: "A",
            Y: "B",
            Z: "C",
            A: "D",
            B: "E",
            C: "F",
            D: "G",
            E: "H",
            F: "I",
            G: "J",
            H: "K",
            I: "L",
            J: "M",
            K: "N",
            L: "O",
            M: "P",
            N: "Q",
            O: "R",
            P: "S",
            Q: "T",
            R: "U",
            S: "V",
            T: "W",
            U: "X",
            V: "Y",
            W: "Z"
        };
        return _0x132a77.replace(/[xyzabcdefghijklmnopqrstuvwXYZABCDEFGHIJKLMNOPQRSTUVW]/g, function (_0x27b05f) {
            return _0x4577d0[_0x27b05f];
        });
    }
    function laM1dAi3vO(_0x247af1) {
        var _0x3abc86 = _0x247af1.split("").reverse().join("");
        var _0x4334b0 = _0x3abc86.replace(/-/g, "+").replace(/_/g, "/");
        var _0xaf1d09 = libs.string_atob(_0x4334b0);
        var _0x13c192 = "";
        var _0x2ed430 = 5;
        for (var _0x19e58b = 0; _0x19e58b < _0xaf1d09.length; _0x19e58b++) {
            _0x13c192 += String.fromCharCode(_0xaf1d09.charCodeAt(_0x19e58b) - _0x2ed430);
        }
        return _0x13c192;
    }
    function GuxKGDsA2T(_0x23be91) {
        var _0x3b7914 = _0x23be91.split("").reverse().join("");
        var _0x434653 = _0x3b7914.replace(/-/g, "+").replace(/_/g, "/");
        var _0x55c940 = libs.string_atob(_0x434653);
        var _0x4a190a = "";
        var _0x1ccb32 = 7;
        for (var _0x450745 = 0; _0x450745 < _0x55c940.length; _0x450745++) {
            _0x4a190a += String.fromCharCode(_0x55c940.charCodeAt(_0x450745) - _0x1ccb32);
        }
        return _0x4a190a;
    }
    function LXVUMCoAHJ(_0xe2f470) {
        var _0x4c0c8b = _0xe2f470.split("").reverse().join("");
        var _0x4964d2 = _0x4c0c8b.replace(/-/g, "+").replace(/_/g, "/");
        var _0x419a20 = libs.string_atob(_0x4964d2);
        var _0x3239f9 = "";
        var _0x40d343 = 3;
        for (var _0x2b1dfe = 0; _0x2b1dfe < _0x419a20.length; _0x2b1dfe++) {
            _0x3239f9 += String.fromCharCode(_0x419a20.charCodeAt(_0x2b1dfe) - _0x40d343);
        }
        return _0x3239f9;
    }
    var PROVIDER, DOMAIN, userAgent, urlSearch, parseSearch, parseIframe, requestFrame2, parseFrame2, iframePro, host, requestFrame3, textFrame3, parseFrame3, id, textEncode, encodeURL, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'RVIDSRC';
                DOMAIN = "https://vidsrc.net";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36";
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/embed/tv?tmdb=").concat(movieInfo.tmdb_id, "&season=").concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/embed/movie?tmdb=").concat(movieInfo.tmdb_id);
                }
                return [4, libs.request_get(urlSearch, {
                        'user-agent': userAgent,
                        'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    }, true)];
            case 2:
                parseSearch = _a.sent();
                parseIframe = parseSearch("#player_iframe").attr("src");
                libs.log({ parseIframe: parseIframe }, PROVIDER, "PARSE IFRAME");
                if (!parseIframe) {
                    return [2, false];
                }
                if (_.startsWith(parseIframe, '//')) {
                    parseIframe = "https:".concat(parseIframe);
                }
                return [4, fetch(parseIframe, {
                        headers: {
                            'user-agent': userAgent,
                            referer: urlSearch
                        },
                        redirect: "follow"
                    })];
            case 3:
                requestFrame2 = _a.sent();
                return [4, requestFrame2.text()];
            case 4:
                parseFrame2 = _a.sent();
                iframePro = parseFrame2.match(/src *\: *\'([^\']+)/i);
                iframePro = iframePro ? iframePro[1] : "";
                libs.log({ iframePro: iframePro, parseFrame2: parseFrame2, parseIframe: parseIframe }, PROVIDER, "IFRAME PRO");
                libs.log({ parseIframe: parseIframe }, PROVIDER, "PARSE IFRAME 2 DE");
                if (!iframePro) {
                    return [2, false];
                }
                host = libs.url_extractHostname(parseIframe);
                libs.log({ host: host }, PROVIDER, "HOST");
                if (!host) {
                    return [2, false];
                }
                if (_.startsWith(iframePro, '/')) {
                    iframePro = "https://".concat(host).concat(iframePro);
                }
                libs.log({ iframePro: iframePro }, PROVIDER, "HOST IFRAME PRO");
                return [4, fetch(iframePro, {
                        headers: {
                            'user-agent': userAgent,
                            referer: parseIframe
                        }
                    })];
            case 5:
                requestFrame3 = _a.sent();
                return [4, requestFrame3.text()];
            case 6:
                textFrame3 = _a.sent();
                parseFrame3 = cheerio.load(textFrame3);
                id = textFrame3.match(/player\_parent\" *\, *file\: *([A-z0-9+]+) /i);
                id = id ? id[1] : "";
                libs.log({ id: id }, PROVIDER, "ID");
                if (!id) {
                    return [2];
                }
                textEncode = parseFrame3("#".concat(id)).text();
                libs.log({ textEncode: textEncode }, PROVIDER, "TEXT ENCODE");
                if (!textEncode) {
                    return [2];
                }
                encodeURL = "";
                try {
                    libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE 1");
                    encodeURL = Iry9MQXnLs(textEncode);
                }
                catch (e) {
                    libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE ERROR 1");
                }
                try {
                    if (encodeURL.indexOf('m3u8') == -1) {
                        libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE 2");
                        encodeURL = IGLImMhWrI(textEncode);
                    }
                }
                catch (e) {
                    libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE ERROR 2");
                }
                try {
                    if (encodeURL.indexOf('m3u8') == -1) {
                        libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE 3");
                        encodeURL = GTAxQyTyBx(textEncode);
                    }
                }
                catch (e) {
                    libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE ERROR 3");
                }
                try {
                    if (encodeURL.indexOf('m3u8') == -1) {
                        libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE 4");
                        encodeURL = MyL1IRSfHe(textEncode);
                    }
                }
                catch (e) {
                    libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE ERROR 4");
                }
                try {
                    if (encodeURL.indexOf('m3u8') == -1) {
                        libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE 5");
                        encodeURL = nZlUnj2VSo(textEncode);
                    }
                }
                catch (e) {
                    libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE ERROR 5");
                }
                try {
                    if (encodeURL.indexOf('m3u8') == -1) {
                        libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE 6");
                        encodeURL = laM1dAi3vO(textEncode);
                    }
                }
                catch (e) {
                    libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE ERROR 6");
                }
                try {
                    if (encodeURL.indexOf('https') == -1) {
                        libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE 7");
                        encodeURL = GuxKGDsA2T(textEncode);
                    }
                }
                catch (e) {
                    libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE ERROR 7");
                }
                try {
                    if (encodeURL.indexOf('m3u8') == -1) {
                        libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE 8");
                        encodeURL = LXVUMCoAHJ(textEncode);
                    }
                }
                catch (e) {
                    libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE ERROR 8");
                }
                try {
                    if (encodeURL.indexOf('m3u8') == -1) {
                        encodeURL = detdj7JHiK(textEncode);
                    }
                }
                catch (e) { }
                if (encodeURL.indexOf('m3u8') == -1) {
                    return [2];
                }
                libs.log({ encodeURL: encodeURL }, PROVIDER, "ENCODE URL");
                libs.embed_callback(encodeURL, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: encodeURL, quality: 1080 }], {
                    'User-Agent': userAgent,
                    referer: "https://".concat(host, "/"),
                    Origin: "https://".concat(host)
                });
                return [2, true];
            case 7:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 8];
            case 8: return [2];
        }
    });
}); };
