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
    var PROVIDER, DOMAIN, langDirect, url, subsData, _i, _a, item, lang, link, subLinksData, downloadToken, downloadTokenLink, parseLang, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = "SubSource";
                DOMAIN = "https://api.subsource.net";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                langDirect = {
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
                url = "".concat(DOMAIN, "/v1/subtitles/").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year);
                if (movieInfo.type == 'tv') {
                    url += "/season-".concat(movieInfo.season);
                }
                return [4, libs.request_get(url, {}, false)];
            case 2:
                subsData = _b.sent();
                libs.log({ subsData: subsData }, PROVIDER, "SUB DATA");
                _i = 0, _a = subsData.subtitles;
                _b.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3, 6];
                item = _a[_i];
                lang = item.language;
                link = "".concat(DOMAIN, "/v1/subtitle/").concat(item.link);
                return [4, libs.request_get(link, {}, false)];
            case 4:
                subLinksData = _b.sent();
                downloadToken = subLinksData.subtitle.download_token;
                libs.log({ lang: lang, link: link, downloadToken: downloadToken }, PROVIDER, "DOWNLOAD TOKEN");
                if (!downloadToken) {
                    return [3, 5];
                }
                downloadTokenLink = "".concat(DOMAIN, "/v1/subtitle/download/").concat(downloadToken);
                libs.log({ downloadTokenLink: downloadTokenLink }, PROVIDER, "DOWNLOAD TOKEN LINK");
                parseLang = langDirect[lang];
                if (!parseLang) {
                    return [3, 5];
                }
                callback({
                    file: downloadTokenLink,
                    kind: "Captions_Season",
                    label: parseLang,
                    type: "zip",
                    provider: PROVIDER,
                });
                _b.label = 5;
            case 5:
                _i++;
                return [3, 3];
            case 6: return [2];
            case 7:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 8];
            case 8: return [2, true];
        }
    });
}); };
