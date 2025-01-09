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
subs.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    function numberToOrdinalText(num) {
        if (!Number.isInteger(num) || num < 1 || num > 100) {
            throw new Error('Input must be an integer between 1 and 100');
        }
        var ordinals = {
            1: 'first',
            2: 'second',
            3: 'third',
            4: 'fourth',
            5: 'fifth',
            6: 'sixth',
            7: 'seventh',
            8: 'eighth',
            9: 'ninth',
            10: 'tenth',
            11: 'eleventh',
            12: 'twelfth',
            13: 'thirteenth',
            14: 'fourteenth',
            15: 'fifteenth',
            16: 'sixteenth',
            17: 'seventeenth',
            18: 'eighteenth',
            19: 'nineteenth',
            20: 'twentieth',
            30: 'thirtieth',
            40: 'fortieth',
            50: 'fiftieth',
            60: 'sixtieth',
            70: 'seventieth',
            80: 'eightieth',
            90: 'ninetieth',
            100: 'hundredth'
        };
        var tens = {
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety'
        };
        if (ordinals[num]) {
            return ordinals[num];
        }
        var tensDigit = Math.floor(num / 10);
        var onesDigit = num % 10;
        return tens[tensDigit] + '-' + ordinals[onesDigit];
    }
    var PROVIDER, DOMAIN, seasonText, urlBuilder, parseBuilder, findNotFound, parseBuilder, findNotFound, lang_1, episode_1, episode2_1, url, parse_1, linksDownload_2, _i, linksDownload_1, link, parseDownloadSubtitle, e_1, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = "Subf2m";
                DOMAIN = "https://subf2m.co";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 13, , 14]);
                seasonText = "";
                if (movieInfo.type == "tv") {
                    seasonText = "".concat(numberToOrdinalText(movieInfo.season), "-season");
                }
                urlBuilder = "";
                if (!(movieInfo.type == "tv")) return [3, 3];
                urlBuilder = "https://subf2m.co/subtitles/".concat(libs.url_slug_search(movieInfo, "-"), "-").concat(seasonText);
                return [4, libs.request_get(urlBuilder, {}, true)];
            case 2:
                parseBuilder = _a.sent();
                findNotFound = parseBuilder(".notfound");
                libs.log({ urlBuilder: urlBuilder, length: findNotFound.length }, PROVIDER, "NOT FOUND");
                if (findNotFound.length > 0) {
                    urlBuilder = "https://subf2m.co/subtitles/".concat(libs.url_slug_search(movieInfo, "-"), "-season-").concat(movieInfo.season);
                }
                return [3, 5];
            case 3:
                urlBuilder = "https://subf2m.co/subtitles/".concat(libs.url_slug_search(movieInfo, "-"), "-").concat(movieInfo.year);
                return [4, libs.request_get(urlBuilder, {}, true)];
            case 4:
                parseBuilder = _a.sent();
                findNotFound = parseBuilder(".notfound");
                libs.log({ urlBuilder: urlBuilder, length: findNotFound.length }, PROVIDER, "NOT FOUND");
                if (findNotFound.length > 0) {
                    urlBuilder = "https://subf2m.co/subtitles/".concat(libs.url_slug_search(movieInfo, "-"));
                }
                _a.label = 5;
            case 5:
                libs.log({ urlBuilder: urlBuilder }, PROVIDER, "URL BUILDER");
                lang_1 = {
                    "english": "English",
                    "arabic": "Arabic",
                    "vietnamese": "Vietnamese",
                    "indonesian": "Indonesia",
                    "ukrainian": "Ukrainian",
                    "turkish": "Turkish",
                    "french": "French",
                    "greek": "Greek",
                    "hebrew": "Hebrew",
                    "italian": "Italian",
                    "polish": "Polish",
                    "portuguese": "Portuguese",
                    "rusian": "Russian",
                    "spanish": "Spanish",
                    "swedish": "Swedish",
                    "thai": "Thai",
                };
                episode_1 = "S".concat(movieInfo.season < 10 ? "0" + movieInfo.season : movieInfo.season, "E").concat(movieInfo.episode < 10 ? "0" + movieInfo.episode : movieInfo.episode);
                episode2_1 = "S".concat(movieInfo.season < 10 ? "0" + movieInfo.season : movieInfo.season, ".E").concat(movieInfo.episode < 10 ? "0" + movieInfo.episode : movieInfo.episode);
                url = "".concat(urlBuilder);
                return [4, libs.request_get(url, {}, true)];
            case 6:
                parse_1 = _a.sent();
                linksDownload_2 = [];
                parse_1(".item").each(function (key, item) {
                    var title = parse_1(item).find(".scrolllist").text();
                    var href = parse_1(item).find("a.download").attr("href");
                    libs.log({ title: title, href: href }, PROVIDER, "SUB INFO");
                    if (title && href) {
                        var parseHref = href.split("/");
                        var langHref = parseHref[parseHref.length - 2];
                        if (lang_1[langHref]) {
                            if (movieInfo.type == "movie") {
                                linksDownload_2.push({
                                    href: "".concat(DOMAIN).concat(href, "/download"),
                                    lang: lang_1[langHref]
                                });
                            }
                            else {
                                if (title.indexOf(episode_1) > -1 || title.indexOf(episode2_1) > -1) {
                                    linksDownload_2.push({
                                        href: "".concat(DOMAIN).concat(href, "/download"),
                                        lang: lang_1[langHref]
                                    });
                                }
                            }
                        }
                    }
                });
                libs.log({ linksDownload: linksDownload_2 }, PROVIDER, "LINKS DOWNLOAD");
                if (!(linksDownload_2.length > 0)) return [3, 12];
                _i = 0, linksDownload_1 = linksDownload_2;
                _a.label = 7;
            case 7:
                if (!(_i < linksDownload_1.length)) return [3, 12];
                link = linksDownload_1[_i];
                _a.label = 8;
            case 8:
                _a.trys.push([8, 10, , 11]);
                return [4, fetch(link.href, {
                        redirect: 'manual',
                        method: "HEAD"
                    })];
            case 9:
                parseDownloadSubtitle = _a.sent();
                libs.log({ url: parseDownloadSubtitle.url }, PROVIDER, "textParseDownload");
                if (!parseDownloadSubtitle.url) {
                    return [3, 11];
                }
                callback({
                    file: parseDownloadSubtitle.url,
                    kind: "Captions",
                    label: link.lang,
                    type: "download",
                });
                return [3, 11];
            case 10:
                e_1 = _a.sent();
                return [3, 11];
            case 11:
                _i++;
                return [3, 7];
            case 12: return [3, 14];
            case 13:
                e_2 = _a.sent();
                libs.log({ e: e_2 }, PROVIDER, "ERROR");
                return [3, 14];
            case 14: return [2, true];
        }
    });
}); };
