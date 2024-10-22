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
    function encode(text, encoding) {
        if (encoding === void 0) { encoding = 'utf-8'; }
        var codePoints = Array.from(text, function (char) { return char.charCodeAt(0); });
        var encodedData = new Uint8Array(codePoints.map(function (point) { return point & 0xff; }));
        return encodedData;
    }
    function digestSHA256(data) {
        return __awaiter(this, void 0, void 0, function () {
            var message, hash, hashHex, hashBytes;
            return __generator(this, function (_a) {
                message = cryptoS.enc.Utf8.parse(data);
                hash = cryptoS.SHA256(message);
                hashHex = hash.toString(cryptoS.enc.Hex);
                hashBytes = cryptoS.enc.Hex.parse(hashHex);
                return [2, new Uint8Array(hashBytes.words)];
            });
        });
    }
    function getRandomValues(length) {
        var randomBytes = cryptoS.lib.WordArray.random(length);
        var randomBytesHex = randomBytes.toString(cryptoS.enc.Hex);
        var randomBytesArray = cryptoS.enc.Hex.parse(randomBytesHex);
        return new Uint8Array(randomBytesArray.words);
    }
    function importKey(format, keyData, algorithm, extractable, keyUsages) {
        return __awaiter(this, void 0, void 0, function () {
            var encodedKeyData, key;
            return __generator(this, function (_a) {
                encodedKeyData = cryptoS.enc.Hex.parse(cryptoS.enc.Hex.stringify(keyData));
                key = {
                    format: format,
                    encoded: encodedKeyData,
                    algorithm: algorithm,
                    extractable: extractable,
                    usages: keyUsages
                };
                return [2, key];
            });
        });
    }
    function encrypt(algorithm, key, plaintext, iv) {
        return __awaiter(this, void 0, void 0, function () {
            var encryptedData, ciphertext, ciphertextBytes;
            return __generator(this, function (_a) {
                encryptedData = cryptoS[algorithm].encrypt(plaintext, key, {
                    iv: cryptoS.enc.Hex.parse(cryptoS.enc.Hex.stringify(iv)),
                    mode: cryptoS.mode.GCM,
                });
                ciphertext = encryptedData.ciphertext;
                ciphertextBytes = cryptoS.enc.Hex.parse(ciphertext.toString());
                return [2, new Uint8Array(ciphertextBytes.words)];
            });
        });
    }
    function encox(plaintext, pwd) {
        return __awaiter(this, void 0, void 0, function () {
            var pwUtf8, pwHash, iv, ivStr, alg, key, ptUint8, ctBuffer, ctArray, ctStr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pwUtf8 = encode(pwd);
                        return [4, digestSHA256('SHA-256', pwUtf8)];
                    case 1:
                        pwHash = _a.sent();
                        iv = getRandomValues(12);
                        ivStr = Array.from(iv).map(function (b) { return String.fromCharCode(b); }).join('');
                        alg = {
                            name: 'AES',
                            iv: iv
                        };
                        return [4, importKey('raw', pwHash, alg, false, ['encrypt'])];
                    case 2:
                        key = _a.sent();
                        ptUint8 = encode(plaintext);
                        return [4, encrypt(alg.name, key, ptUint8, alg.iv)];
                    case 3:
                        ctBuffer = _a.sent();
                        ctArray = Array.from(new Uint8Array(ctBuffer));
                        ctStr = ctArray.map(function (byte) { return String.fromCharCode(byte); }).join('');
                        return [2, libs.string_btoa(ivStr + ctStr)];
                }
            });
        });
    }
    var PROVIDER, DOMAIN, headers, urlDoc_1, getIP_1, getEmbed, urlSearch, LINK_DETAIL, resSearch, _i, _a, searchItem, title, href, season, type, id, htmlDetail, textHtml, playURL, parseURL, ipData, loc, sv, eid, mid, u, genHash, deHash, hashURL, hashID, directURL, e_1;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'IYesMovies';
                DOMAIN = "https://ww.yesmovies.ag";
                headers = {
                    "referer": DOMAIN,
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 9, , 10]);
                urlDoc_1 = "https://doc.vidcloud9.org";
                getIP_1 = function (urlDoc) { return __awaiter(_this, void 0, void 0, function () {
                    var urlDocTrace, traceData, arr;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                urlDocTrace = "".concat(urlDoc, "/cdn-cgi/trace");
                                return [4, libs.request_get(urlDocTrace, headers)];
                            case 1:
                                traceData = _a.sent();
                                libs.log({ traceData: traceData }, PROVIDER, 'TRACE DATA');
                                arr = traceData.trim().split('\n').map(function (e) { return e.split('='); });
                                return [2, Object.fromEntries(arr)];
                        }
                    });
                }); };
                getEmbed = function (sv, mi, ei) { return __awaiter(_this, void 0, void 0, function () {
                    var ipData, pwd, tsx, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4, getIP_1()];
                            case 1:
                                ipData = _c.sent();
                                pwd = ipData['loc'];
                                tsx = Math.floor((new Date()).getTime() / 1000);
                                _b = (_a = libs).string_base64_encode;
                                return [4, encox(mi + "+" + ei + "+" + sv + "+" + pwd + "+" + tsx, pwd)];
                            case 2:
                                urix = _b.apply(_a, [_c.sent()]);
                                return [2, "".concat(urlDoc_1, "/watch/?v").concat(sv).concat(ei, "#").concat(urix)];
                        }
                    });
                }); };
                urlSearch = "".concat(DOMAIN, "/searching?q=").concat(movieInfo.title.replace(/\s+/ig, '+'), "&limit=40&offset=0");
                LINK_DETAIL = '';
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {})];
            case 2:
                resSearch = _b.sent();
                libs.log({
                    length: resSearch,
                }, PROVIDER, 'SEARCH LENGTH');
                for (_i = 0, _a = resSearch.data; _i < _a.length; _i++) {
                    searchItem = _a[_i];
                    title = searchItem.t;
                    href = searchItem.s;
                    season = title.match(/\- *season *([0-9]+)/i);
                    season = season ? season[1] : 0;
                    title = title.replace(/\- *season *[0-9]+/i, '').trim();
                    type = 'movie';
                    if (season) {
                        type = 'tv';
                    }
                    libs.log({
                        title: title,
                        href: href,
                        season: season,
                        type: type
                    }, PROVIDER, 'SEARCH INFO');
                    if (libs.string_matching_title(movieInfo, title) && !LINK_DETAIL) {
                        if (movieInfo.type == 'movie' && type == 'movie') {
                            LINK_DETAIL = "".concat(DOMAIN, "/movie/").concat(href, ".html");
                        }
                        else if (movieInfo.type == 'tv' && type == 'tv' && season == movieInfo.season) {
                            LINK_DETAIL = "".concat(DOMAIN, "/movie/").concat(href, ".html");
                        }
                    }
                }
                libs.log({
                    LINK_DETAIL: LINK_DETAIL
                }, PROVIDER, 'LINK DETAIL');
                if (!LINK_DETAIL) {
                    return [2];
                }
                id = LINK_DETAIL.match(/([0-9]+)\.html$/i);
                id = id ? id[1] : '';
                libs.log({ id: id }, PROVIDER, 'ID');
                if (!id) {
                    return [2];
                }
                return [4, fetch(LINK_DETAIL, {
                        headers: headers
                    })];
            case 3:
                htmlDetail = _b.sent();
                return [4, htmlDetail.text()];
            case 4:
                textHtml = _b.sent();
                playURL = textHtml.match(/plyURL *\= *\"([^\"]+)/i);
                playURL = playURL ? playURL[1] : "";
                libs.log({ playURL: playURL }, PROVIDER, "PLAY URL");
                if (!playURL) {
                    return [2];
                }
                parseURL = libs.string_atob(playURL);
                return [4, getIP_1(parseURL)];
            case 5:
                ipData = _b.sent();
                loc = ipData['loc'];
                libs.log({ parseURL: parseURL, loc: loc }, PROVIDER, "PARSE URL");
                if (!parseURL || !loc) {
                    return [2];
                }
                sv = 1;
                eid = movieInfo.type == 'movie' ? 1 : movieInfo.episode;
                mid = id;
                u = Math.floor(new Date().getTime() / 1000);
                return [4, libs.request_get("https://aquariumtv.app/yesgenhash?loc=".concat(loc, "&sv=").concat(sv, "&mid=").concat(mid, "&eid=").concat(eid, "&tsx=").concat(u))];
            case 6:
                genHash = _b.sent();
                libs.log({ genHash: genHash, u: u, loc: loc, sv: sv, mid: mid, eid: eid }, PROVIDER, 'GEN HASH');
                if (!genHash) {
                    return [2];
                }
                return [4, libs.request_get("https://aquariumtv.app/yesdehash?loc=".concat(loc, "&hash=").concat(genHash, "&tsx=").concat(u))];
            case 7:
                deHash = _b.sent();
                libs.log({ deHash: deHash }, PROVIDER, 'DEHASH');
                if (!deHash) {
                    return [2];
                }
                hashURL = "".concat(parseURL, "/get/").concat(deHash);
                return [4, libs.request_get(hashURL, headers)];
            case 8:
                hashID = _b.sent();
                libs.log({ hashID: hashID, hashURL: hashURL }, PROVIDER, 'HASH ID');
                if (!hashID.info) {
                    return [2];
                }
                directURL = "".concat(parseURL, "/hls/").concat(hashID.info, "/master.m3u8");
                libs.log({ directURL: directURL }, PROVIDER, 'DIRECT QUALITY');
                libs.embed_callback(directURL, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: directURL, quality: 1080 }], headers);
                return [2];
            case 9:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR CATCH');
                return [3, 10];
            case 10: return [2, true];
        }
    });
}); };
