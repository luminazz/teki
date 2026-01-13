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
    var PROVIDER, DOMAIN, subLanguageIds, url, _i, subLanguageIds_1, item, urlLang, dataLang, stt, _a, dataLang_1, itemLang, fileName, format, url_1, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = "LibreSub";
                DOMAIN = "https://libre-subs.fifthwit.net";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                subLanguageIds = [
                    { name: 'English', id: 'en' },
                    { name: 'Arabic', id: 'ar' },
                    { name: 'Spanish', id: 'es' },
                    { name: 'French', id: 'fr' },
                    { name: 'Vietnamese', id: 'vi' },
                    { name: 'Italian', id: 'it' },
                    { name: 'Portuguese', id: 'pt' },
                    { name: 'Chinese', id: 'cn' },
                    { name: 'Korean', id: 'kr' },
                    { name: 'Hindi', id: 'in' },
                    { name: 'Dutch', id: 'nl' },
                    { name: 'Swedish', id: 'se' },
                    { name: 'Polish', id: 'pl' },
                    { name: 'Turkish', id: 'tr' },
                    { name: 'Indonesian', id: 'id' },
                ];
                url = "".concat(DOMAIN, "/search?id=").concat(movieInfo.tmdb_id);
                if (movieInfo.type == "tv") {
                    url += "&season=".concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                }
                libs.log({ url: url }, PROVIDER, "URL SEARCH");
                _i = 0, subLanguageIds_1 = subLanguageIds;
                _b.label = 2;
            case 2:
                if (!(_i < subLanguageIds_1.length)) return [3, 5];
                item = subLanguageIds_1[_i];
                urlLang = "".concat(url, "&language=").concat(item.id);
                return [4, libs.request_get(urlLang)];
            case 3:
                dataLang = _b.sent();
                libs.log({ urlLang: urlLang, dataLang: dataLang, item: item }, PROVIDER, "URL SEARCH LANG");
                stt = 0;
                for (_a = 0, dataLang_1 = dataLang; _a < dataLang_1.length; _a++) {
                    itemLang = dataLang_1[_a];
                    stt += 1;
                    fileName = "".concat(itemLang.media, " ").concat(stt) || "No file name";
                    format = itemLang.format;
                    url_1 = itemLang.url;
                    libs.log({ fileName: fileName, format: format, url: url_1 }, PROVIDER, "ITEM INFO");
                    if (!url_1) {
                        continue;
                    }
                    callback({
                        file: url_1,
                        kind: "Captions",
                        label: itemLang.display,
                        type: format == "srt" ? "download" : "zip",
                        provider: PROVIDER,
                    });
                }
                _b.label = 4;
            case 4:
                _i++;
                return [3, 2];
            case 5: return [3, 7];
            case 6:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 7];
            case 7: return [2, true];
        }
    });
}); };
