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
    function decryptStreamUrl(data) {
        function getTrash(arr, item) {
            var trash = [];
            for (var i = 1; i <= item; i++) {
                trash.push(arr);
            }
            return trash.reduce(function (acc, list) {
                var temp = [];
                acc.forEach(function (ac) {
                    list.forEach(function (li) {
                        temp.push(ac.concat(li));
                    });
                });
                return temp;
            });
        }
        var trashList = ["@", "#", "!", "^", "$"];
        var trashSet = getTrash(trashList, 2).concat(getTrash(trashList, 3));
        var trashString = data.replace("#2", "").split("//_//").join("");
        trashSet.forEach(function (item) {
            var temp = libs.string_base64_encode(item);
            trashString = trashString.replace(temp, "");
        });
        libs.log({ trashString: trashString }, 'trashString');
        return Base64.decode(trashString.toString('utf-8'));
    }
    var PROVIDER, DOMAIN, Base64, urlSearch, parseSearch, iframeUrl, parseIframe_1, SCRIPT_DETAIL_1, parseToken, voidbootUrl, parseVoid_1, parseSource, parseSub, decryptData, splitDirect, directQuality, userAgent, _i, splitDirect_1, parseDirectItem, quality, urlDirect, fetchHeader, er_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'YDbGo';
                DOMAIN = "https://dbgo.fun";
                Base64 = {
                    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    encode: function (string) {
                        var characters = Base64.characters;
                        var result = '';
                        var i = 0;
                        do {
                            var a = string.charCodeAt(i++);
                            var b = string.charCodeAt(i++);
                            var c = string.charCodeAt(i++);
                            a = a ? a : 0;
                            b = b ? b : 0;
                            c = c ? c : 0;
                            var b1 = (a >> 2) & 0x3F;
                            var b2 = ((a & 0x3) << 4) | ((b >> 4) & 0xF);
                            var b3 = ((b & 0xF) << 2) | ((c >> 6) & 0x3);
                            var b4 = c & 0x3F;
                            if (!b) {
                                b3 = b4 = 64;
                            }
                            else if (!c) {
                                b4 = 64;
                            }
                            result += Base64.characters.charAt(b1) + Base64.characters.charAt(b2) + Base64.characters.charAt(b3) + Base64.characters.charAt(b4);
                        } while (i < string.length);
                        return result;
                    },
                    decode: function (string) {
                        var characters = Base64.characters;
                        var result = '';
                        var i = 0;
                        do {
                            var b1 = Base64.characters.indexOf(string.charAt(i++));
                            var b2 = Base64.characters.indexOf(string.charAt(i++));
                            var b3 = Base64.characters.indexOf(string.charAt(i++));
                            var b4 = Base64.characters.indexOf(string.charAt(i++));
                            var a = ((b1 & 0x3F) << 2) | ((b2 >> 4) & 0x3);
                            var b = ((b2 & 0xF) << 4) | ((b3 >> 2) & 0xF);
                            var c = ((b3 & 0x3) << 6) | (b4 & 0x3F);
                            result += String.fromCharCode(a) + (b ? String.fromCharCode(b) : '') + (c ? String.fromCharCode(c) : '');
                        } while (i < string.length);
                        return result;
                    }
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 13, , 14]);
                urlSearch = '';
                if (movieInfo.type == 'movie') {
                    urlSearch = "".concat(DOMAIN, "/imdb.php?id=").concat(movieInfo.imdb_id);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/imdb.php?id=").concat(movieInfo.imdb_id, "&s=").concat(movieInfo.season);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch = _a.sent();
                iframeUrl = parseSearch('div.myvideo iframe').attr('src');
                libs.log({ iframeUrl: iframeUrl }, PROVIDER, 'IFRAME URL');
                if (!iframeUrl) {
                    return [2];
                }
                return [4, libs.request_get(iframeUrl, {
                        Referer: "".concat(DOMAIN, "/")
                    }, true)];
            case 3:
                parseIframe_1 = _a.sent();
                SCRIPT_DETAIL_1 = '';
                if (!(movieInfo.type == 'movie')) return [3, 4];
                parseIframe_1('script').each(function (key, item) {
                    if (!SCRIPT_DETAIL_1) {
                        var sData = parseIframe_1(item).text();
                        if (sData.indexOf('CDNplayerConfig =') != -1) {
                            SCRIPT_DETAIL_1 = sData;
                        }
                    }
                });
                return [3, 6];
            case 4:
                parseToken = parseIframe_1('select#translator-name option').attr('data-token');
                libs.log({ parseToken: parseToken }, PROVIDER, 'PARSE TOKEN');
                if (!parseToken) {
                    return [2];
                }
                voidbootUrl = "https://voidboost.net/serial/".concat(parseToken, "/iframe?s=").concat(movieInfo.season, "&e=").concat(movieInfo.episode, "&h=dbgo.fun");
                return [4, libs.request_get(voidbootUrl, {}, true)];
            case 5:
                parseVoid_1 = _a.sent();
                parseVoid_1('script').each(function (key, item) {
                    if (!SCRIPT_DETAIL_1) {
                        var sData = parseVoid_1(item).text();
                        if (sData.indexOf('CDNplayerConfig =') != -1) {
                            SCRIPT_DETAIL_1 = sData;
                        }
                    }
                });
                _a.label = 6;
            case 6:
                libs.log({ SCRIPT_DETAIL: SCRIPT_DETAIL_1 }, PROVIDER, 'SCRIPT DETAIL');
                if (!SCRIPT_DETAIL_1) {
                    return [2];
                }
                parseSource = SCRIPT_DETAIL_1.match(/['|"]file['|"]:\s['|"](#\S+?)['|"]/i);
                parseSource = parseSource ? parseSource[1] : '';
                parseSub = SCRIPT_DETAIL_1.match(/['|"]subtitle['|"]:\s['|"](\S+?)['|"]/i);
                parseSub = parseSub ? parseSub[1] : '';
                libs.log({ parseSource: parseSource, parseSub: parseSub }, PROVIDER, "PARSE SOURCE");
                if (!parseSource) {
                    return [2];
                }
                decryptData = decryptStreamUrl(parseSource);
                libs.log({ decryptData: decryptData }, PROVIDER, 'DECRYPT DATA');
                splitDirect = decryptData.split(',');
                directQuality = [];
                userAgent = libs.request_getRandomUserAgent();
                _i = 0, splitDirect_1 = splitDirect;
                _a.label = 7;
            case 7:
                if (!(_i < splitDirect_1.length)) return [3, 12];
                parseDirectItem = splitDirect_1[_i];
                _a.label = 8;
            case 8:
                _a.trys.push([8, 10, , 11]);
                quality = parseDirectItem.match(/^\[([0-9]+)p/i);
                quality = quality ? quality[1] : '720';
                urlDirect = parseDirectItem.replace(/^\[[^\]]+\]/i, '');
                urlDirect = urlDirect.split(' or ');
                urlDirect = urlDirect[0].trim();
                return [4, fetch(urlDirect, {
                        headers: {
                            'user-agent': userAgent,
                        },
                        redirect: 'manual',
                    })];
            case 9:
                fetchHeader = _a.sent();
                if (fetchHeader.status == 404) {
                    return [3, 11];
                }
                libs.log({
                    urlDirect: urlDirect,
                    quality: quality,
                    fetchHeader: fetchHeader
                }, PROVIDER, 'urlDirect');
                directQuality.push({
                    file: fetchHeader.url,
                    quality: Number(quality),
                });
                return [3, 11];
            case 10:
                er_1 = _a.sent();
                return [3, 11];
            case 11:
                _i++;
                return [3, 7];
            case 12:
                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality);
                return [3, 14];
            case 13:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 14];
            case 14: return [2, true];
        }
    });
}); };
