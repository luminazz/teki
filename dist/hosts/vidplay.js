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
hosts["vid2faf"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
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
    var DOMAIN, HOST, PARSEDOMAIN, subParse, t, subs, headers, keys_1, enc_1, dec_1, id_1, stream, playlist, rank, _i, _a, embedItem, embedData, patternQuality, directQuality, _b, patternQuality_1, patternItem, sizeQuality, urlDirect, urlDirect, e_1, e1_1;
    var _this = this;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                DOMAIN = 'https://vid2faf.site';
                HOST = 'Vidplay';
                PARSEDOMAIN = "vid2faf.site";
                _c.label = 1;
            case 1:
                _c.trys.push([1, 12, , 13]);
                subParse = url.match(/\&sub\.info\=([^\&]+)/i);
                subParse = subParse ? decodeURIComponent(subParse[1]) : '';
                t = url.match(/\?t\=([^\&]+)/i);
                t = t ? t[1] : '';
                libs.log({ subParse: subParse, t: t }, HOST, 'SUBPARSE');
                subs = [];
                if (!subParse) return [3, 3];
                return [4, libs.request_get(subParse)];
            case 2:
                subs = _c.sent();
                libs.log({ subs: subs }, HOST, 'SUBTITLE');
                _c.label = 3;
            case 3:
                headers = {
                    'Referer': url,
                    'user-agent': libs.request_getRandomUserAgent()
                };
                return [4, libs.request_get("https://raw.githubusercontent.com/giammirove/videogatherer/main/src/keys.json")];
            case 4:
                keys_1 = _c.sent();
                keys_1 = keys_1["vid2faf.site"] || [];
                enc_1 = function (inp) {
                    var a = mapp(inp, keys_1[0], keys_1[1]);
                    a = reverse(a);
                    a = rc4(keys_1[2], a);
                    a = subst(a);
                    a = reverse(a);
                    a = mapp(a, keys_1[3], keys_1[4]);
                    a = rc4(keys_1[5], a);
                    a = subst(a);
                    a = rc4(keys_1[6], a);
                    a = subst(a);
                    a = reverse(a);
                    a = mapp(a, keys_1[7], keys_1[8]);
                    a = subst(a);
                    return a;
                };
                dec_1 = function (inp) {
                    var a = subst_(inp);
                    a = mapp(a, keys_1[8], keys_1[7]);
                    a = reverse(a);
                    a = subst_(a);
                    a = rc4(keys_1[6], a);
                    a = subst_(a);
                    a = rc4(keys_1[5], a);
                    a = mapp(a, keys_1[4], keys_1[3]);
                    a = reverse(a);
                    a = subst_(a);
                    a = rc4(keys_1[2], a);
                    a = reverse(a);
                    a = mapp(a, keys_1[1], keys_1[0]);
                    return a;
                };
                id_1 = url.match(/\/e\/([^\?]+)/i);
                id_1 = id_1 ? id_1[1] : '';
                if (!id_1) {
                    return [2];
                }
                stream = function (url) { return __awaiter(_this, void 0, void 0, function () {
                    var search, embed_id, hash, mediainfo_url, resp, playlist;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                search = url.replace("".concat(DOMAIN, "/e/").concat(id_1), "");
                                embed_id = id_1;
                                hash = enc_1(embed_id);
                                mediainfo_url = "".concat(DOMAIN, "/mediainfo/").concat(hash).concat(search, "&ads=0");
                                return [4, fetch(mediainfo_url)];
                            case 1: return [4, (_a.sent()).json()];
                            case 2:
                                resp = _a.sent();
                                libs.log({ mediainfo_url: mediainfo_url, hash: hash, resp: resp }, HOST, 'MEDIAINFO URL');
                                playlist = (dec_1(resp['result'])).replace(/\\\//g, "/");
                                return [2, JSON.parse(playlist)];
                        }
                    });
                }); };
                return [4, stream(url)];
            case 5:
                playlist = _c.sent();
                libs.log({ playlist: playlist }, HOST, 'PLAYLIST');
                rank = 0;
                _i = 0, _a = playlist.sources;
                _c.label = 6;
            case 6:
                if (!(_i < _a.length)) return [3, 11];
                embedItem = _a[_i];
                _c.label = 7;
            case 7:
                _c.trys.push([7, 9, , 10]);
                if (!embedItem.file) {
                    return [3, 10];
                }
                return [4, libs.request_get(embedItem.file, headers)];
            case 8:
                embedData = _c.sent();
                libs.log({
                    embedData: embedData
                }, provider, 'EMBED PARSE DATA');
                if (!embedData) {
                    return [3, 10];
                }
                patternQuality = embedData.match(/hls\/([0-9]+)\/[0-9]+\.m3u8/ig);
                libs.log({ patternQuality: patternQuality, file: embedItem.file }, provider, 'PATTERN QUALITY');
                if (!patternQuality) {
                    libs.embed_callback(embedItem.file, provider, provider, 'Hls', callback, ++rank, config.subs ? config.subs : [], [{ file: embedItem.file, quality: 1080 }]);
                    return [3, 10];
                }
                directQuality = [];
                for (_b = 0, patternQuality_1 = patternQuality; _b < patternQuality_1.length; _b++) {
                    patternItem = patternQuality_1[_b];
                    sizeQuality = patternItem.match(/([0-9]+)/i);
                    sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                    if (embedItem.file.indexOf("list.m3u8#.mp4") != -1) {
                        urlDirect = embedItem.file.replace('list.m3u8#.mp4', patternItem);
                        libs.log({ urlDirect: urlDirect, sizeQuality: sizeQuality }, provider, 'URL DIRECR REPLACE');
                        directQuality.push({
                            file: urlDirect,
                            quality: sizeQuality
                        });
                    }
                    else if (embedItem.file.indexOf("list.m3u8") != -1) {
                        urlDirect = embedItem.file.replace('list.m3u8', patternItem);
                        libs.log({ urlDirect: urlDirect, sizeQuality: sizeQuality }, provider, 'URL DIRECR REPLACE');
                        directQuality.push({
                            file: urlDirect,
                            quality: sizeQuality
                        });
                    }
                }
                if (!directQuality.length) {
                    return [2];
                }
                libs.embed_callback(directQuality[0].file, provider, provider, 'Hls', callback, ++rank, subs, directQuality, {
                    referer: "".concat(metadata.domain, "/"),
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'cross-site',
                }, {
                    is_end_webview: true,
                    url_webview: metadata.url_webview || ''
                });
                return [3, 10];
            case 9:
                e_1 = _c.sent();
                libs.log({ e: e_1 }, provider, "ERROR LOOP");
                return [3, 10];
            case 10:
                _i++;
                return [3, 6];
            case 11: return [3, 13];
            case 12:
                e1_1 = _c.sent();
                libs.log({ e1: e1_1 }, HOST, "ERROR");
                return [3, 13];
            case 13: return [2];
        }
    });
}); };
