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
    function b1(str) {
        return libs.string_btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode("0x" + p1);
        }));
    }
    function b2(str) {
        return decodeURIComponent(libs.string_atob(str).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    }
    var PROVIDER, DOMAIN, fflix, e, video1, urlSearch, parseSearch, _i, _a, item, parsetxt, lastTxt, href;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'TSmashyStream';
                DOMAIN = "https://embed.smashystream.com";
                fflix = function (urlSearch) { return __awaiter(_this, void 0, void 0, function () {
                    var htmlDetail, fileDetail, parseDetail, directQuality, _i, parseDetail_1, parseItem, quality, directUrl;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                libs.log({
                                    urlSearch: urlSearch
                                }, PROVIDER, 'URL SEARCH');
                                return [4, libs.request_get(urlSearch, {
                                        Referer: movieInfo.type == 'tv' ? "".concat(DOMAIN, "/video1.php?tmdb=").concat(movieInfo.tmdb_id, "&season=").concat(movieInfo.season, "&episode=").concat(movieInfo.episode) : "".concat(DOMAIN, "/playere.php?tmdb=").concat(movieInfo.tmdb_id)
                                    })];
                            case 1:
                                htmlDetail = _a.sent();
                                fileDetail = htmlDetail.match(/file *\" *\: *\"([^\"]+)/i);
                                fileDetail = fileDetail ? fileDetail[1] : '';
                                libs.log({
                                    fileDetail: fileDetail
                                }, PROVIDER, 'FILE DETAIL');
                                if (!fileDetail) {
                                    return [2];
                                }
                                parseDetail = fileDetail.split(',');
                                directQuality = [];
                                libs.log({ parseDetail: parseDetail }, PROVIDER, 'PARSE DETAIL');
                                for (_i = 0, parseDetail_1 = parseDetail; _i < parseDetail_1.length; _i++) {
                                    parseItem = parseDetail_1[_i];
                                    if (!parseItem) {
                                        continue;
                                    }
                                    quality = parseItem.match(/\[ *([0-9]+) *\]/i);
                                    quality = quality ? Number(quality[1]) : 720;
                                    directUrl = parseItem.replace(/\[ *.+ *\]/i, '').trim();
                                    directUrl = directUrl.replace(/\\\//ig, "/");
                                    directQuality.push({
                                        file: directUrl,
                                        quality: quality,
                                    });
                                }
                                libs.log({
                                    directQuality: directQuality
                                }, PROVIDER, 'DIRECT QUALITY');
                                if (!directQuality.length) {
                                    return [2];
                                }
                                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality);
                                return [2];
                        }
                    });
                }); };
                e = function (x) {
                    var a = x.substr(2);
                    var v = {
                        "bk0": "vXch5\/GNVBbrXO\/Xt", "bk1": "qxO\/5lMkx\/N5Gjv5J", "bk2": "OVw\/M39ryrfCs\/yO5", "bk3": "eeAd\/OwcV07\/Wgo7T", "bk4": "UN\/35mMFQjt3\/9vst"
                    };
                    for (var i = 4; i > -1; i--) {
                        if (v["bk" + i] != "") {
                            a = a.replace("///" + b1(v["bk" + i]), "");
                        }
                    }
                    try {
                        var data = b2(a);
                        var v3 = "/";
                        var v2 = ".";
                        var v5 = "5";
                        var v1 = "0";
                        var v4 = "m3u8";
                        data = data.replace(/\{v1\}/ig, v1);
                        data = data.replace(/\{v2\}/ig, v2);
                        data = data.replace(/\{v3\}/ig, v3);
                        data = data.replace(/\{v4\}/ig, v4);
                        data = data.replace(/\{v5\}/ig, v5);
                        return data;
                    }
                    catch (e) {
                        libs.log({ e: e }, PROVIDER, 'ERROR');
                    }
                    return "";
                };
                video1 = function (urlSearch) { return __awaiter(_this, void 0, void 0, function () {
                    var headers, parseDetail, subs, parseTitles, _i, parseTitles_1, subItem, lang, parseSub, _a, _b, file, decodeFile, parseDecodeFile, splitDecode, fileDirect, fileHeader, directSizes, patternSize, directQuality, _c, patternSize_1, patternItem, sizeQuality;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                libs.log({
                                    urlSearch: urlSearch
                                }, PROVIDER, 'URL SEARCH');
                                headers = {
                                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
                                    "Origin": "https://player.smashy.stream",
                                    "Referer": "https://player.smashy.stream/",
                                };
                                return [4, libs.request_get(urlSearch, {
                                        'Sec-Fetch-Site': "cross-site",
                                        Referer: "https://player.smashy.stream/"
                                    })];
                            case 1:
                                parseDetail = _d.sent();
                                libs.log({ parseDetail: parseDetail }, PROVIDER, 'PARSE DETAIL VIDEO 1');
                                if (!parseDetail.sourceUrls) {
                                    return [2];
                                }
                                subs = [];
                                try {
                                    parseTitles = parseDetail.subtitles.split(",");
                                    for (_i = 0, parseTitles_1 = parseTitles; _i < parseTitles_1.length; _i++) {
                                        subItem = parseTitles_1[_i];
                                        lang = subItem.match(/\[([^\]]+)/i);
                                        lang = lang ? lang[1] : '';
                                        parseSub = subItem.replace(/\[[A-z0-9]+\]/i, "").trim();
                                        if (!lang || !parseSub) {
                                            continue;
                                        }
                                        subs.push({
                                            file: parseSub,
                                            label: lang,
                                            kind: "captions"
                                        });
                                    }
                                }
                                catch (e) { }
                                libs.log({ subs: subs }, PROVIDER, 'SUBS');
                                _a = 0, _b = parseDetail.sourceUrls;
                                _d.label = 2;
                            case 2:
                                if (!(_a < _b.length)) return [3, 5];
                                file = _b[_a];
                                decodeFile = e(file);
                                libs.log({ decodeFile: decodeFile }, PROVIDER, 'DECODE FILE');
                                if (!decodeFile) {
                                    return [3, 4];
                                }
                                if (decodeFile.indexOf('.m3u8') == -1) {
                                    return [3, 4];
                                }
                                parseDecodeFile = decodeFile.replace("https://stream.smashystream.com/proxy/m3u8/", "");
                                parseDecodeFile = decodeURIComponent(parseDecodeFile);
                                splitDecode = parseDecodeFile.split("/{");
                                fileDirect = splitDecode[0];
                                fileHeader = splitDecode[1];
                                if (!fileDirect) {
                                    return [3, 4];
                                }
                                if (fileHeader) {
                                    fileHeader = JSON.parse("{" + fileHeader);
                                }
                                libs.log({ fileDirect: fileDirect, fileHeader: fileHeader, decodeFile: decodeFile }, PROVIDER, 'FILE DIRECT');
                                return [4, libs.request_get(fileDirect, fileHeader)];
                            case 3:
                                directSizes = _d.sent();
                                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                                if (!patternSize) {
                                    libs.embed_callback(fileDirect, PROVIDER, PROVIDER, 'hls', callback, 1, subs, [], fileHeader || headers);
                                    return [3, 4];
                                }
                                directQuality = [];
                                libs.log({ patternSize: patternSize, decodeFile: decodeFile }, PROVIDER, 'PATTERN SIZE');
                                for (_c = 0, patternSize_1 = patternSize; _c < patternSize_1.length; _c++) {
                                    patternItem = patternSize_1[_c];
                                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                                    sizeQuality = sizeQuality ? Number(sizeQuality[1]) : 720;
                                    directQuality.push({
                                        file: patternItem,
                                        quality: sizeQuality
                                    });
                                }
                                if (!directQuality.length) {
                                    return [3, 4];
                                }
                                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, subs, directQuality, fileHeader || headers);
                                _d.label = 4;
                            case 4:
                                _a++;
                                return [3, 2];
                            case 5: return [2];
                        }
                    });
                }); };
                urlSearch = "https://smashystream.top/dataad.php?tmdb=".concat(movieInfo.tmdb_id);
                if (movieInfo.type == 'tv') {
                    urlSearch = "https://smashystream.top/dataad.php?tmdb=".concat(movieInfo.tmdb_id, "&season=").concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, "URL SEARCH");
                return [4, libs.request_get(urlSearch, {})];
            case 1:
                parseSearch = _b.sent();
                for (_i = 0, _a = parseSearch.url_array; _i < _a.length; _i++) {
                    item = _a[_i];
                    parsetxt = item.name.trim().split(" ");
                    lastTxt = parsetxt[parsetxt.length - 1];
                    href = item.url;
                    libs.log({ item: item, href: href, parsetxt: parsetxt, lastTxt: lastTxt }, PROVIDER, "INFO");
                    if (lastTxt.toLowerCase() == 'fmd' || lastTxt.toLowerCase() == 'o' || lastTxt.toLowerCase() == 'f' || lastTxt.toLowerCase() == 'm') {
                        video1(item.url);
                    }
                }
                return [2];
        }
    });
}); };
