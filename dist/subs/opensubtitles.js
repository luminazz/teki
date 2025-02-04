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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
subs.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER, DOMAIN, subLang, subLanguageIds, url, response, data, parseData, _i, subLanguageIds_1, item, urlLang, responseLang, dataLang, _a, data_1, item, fileName, lang, season, episode, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'OpenSubtitles';
                DOMAIN = "https://www.opensubtitles.org";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 9, , 10]);
                subLang = {
                    "eng": "English",
                    "spa": "Spanish",
                    "fre": "French",
                    "ger": "German",
                    "ita": "Italian",
                    "por": "Portuguese",
                    "rus": "Russian",
                    "chi": "Chinese",
                    "jpn": "Japanese",
                    "kor": "Korean",
                    "ara": "Arabic",
                    "hin": "Hindi",
                    "dut": "Dutch",
                    "swe": "Swedish",
                    "pol": "Polish",
                    "tur": "Turkish",
                    "dan": "Danish",
                    "nor": "Norwegian",
                    "fin": "Finnish",
                    "vie": "Vietnamese",
                    "ind": "Indonesian"
                };
                subLanguageIds = [];
                url = "https://rest.opensubtitles.org/search/imdbid-".concat(movieInfo.imdb_id.replace("tt", ""));
                libs.log({ url: url }, PROVIDER, "URL SEARCH");
                return [4, fetch(url, {
                        method: 'GET',
                        headers: {
                            'x-user-agent': 'VLSub 0.10.2',
                        },
                    })];
            case 2:
                response = _b.sent();
                return [4, response.json()];
            case 3:
                data = _b.sent();
                console.log('openSubtitles', data);
                parseData = __spreadArray([], data, true);
                _i = 0, subLanguageIds_1 = subLanguageIds;
                _b.label = 4;
            case 4:
                if (!(_i < subLanguageIds_1.length)) return [3, 8];
                item = subLanguageIds_1[_i];
                urlLang = "https://rest.opensubtitles.org/search/imdbid-".concat(movieInfo.imdb_id.replace("tt", ""), "/sublanguageid-").concat(item.id);
                return [4, fetch(urlLang, {
                        method: 'GET',
                        headers: {
                            'x-user-agent': 'VLSub 0.10.2',
                        },
                    })];
            case 5:
                responseLang = _b.sent();
                return [4, responseLang.json()];
            case 6:
                dataLang = _b.sent();
                libs.log({ urlLang: urlLang, dataLang: dataLang, item: item }, PROVIDER, "URL SEARCH LANG");
                if (dataLang.length > 0) {
                    parseData.push.apply(parseData, dataLang);
                }
                _b.label = 7;
            case 7:
                _i++;
                return [3, 4];
            case 8:
                for (_a = 0, data_1 = data; _a < data_1.length; _a++) {
                    item = data_1[_a];
                    fileName = item.SubFileName;
                    lang = item.SubLanguageID.toLowerCase();
                    libs.log({ fileName: fileName, langID: item.SubLanguageID, zip: item.ZipDownloadLink }, PROVIDER, "ITEM INFO");
                    if (movieInfo.type == "tv") {
                        season = Number(item.SeriesSeason);
                        episode = Number(item.SeriesEpisode);
                        libs.log({ episode: episode, season: season, fileName: fileName, lang: lang, zip: item.ZipDownloadLink }, PROVIDER, "EPISODE COMPARE");
                        if (movieInfo.season == season && movieInfo.episode == episode) {
                            continue;
                        }
                    }
                    libs.log({ lang: lang, subLang: subLang[lang], zip: item.ZipDownloadLink }, PROVIDER, "LANG INFO");
                    if (!subLang[lang]) {
                        continue;
                    }
                    if (!item.ZipDownloadLink) {
                        continue;
                    }
                    libs.log({ fileName: fileName, lang: lang, zip: item.ZipDownloadLink }, PROVIDER, "ITEM INFO PASS");
                    callback({
                        file: item.ZipDownloadLink,
                        kind: "Captions",
                        label: subLang[lang],
                        type: "download",
                        provider: PROVIDER,
                    });
                }
                return [3, 10];
            case 9:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 10];
            case 10: return [2, true];
        }
    });
}); };
