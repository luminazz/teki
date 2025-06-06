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
    var PROVIDER, DOMAIN, subLang, subLanguageIds, url, _i, subLanguageIds_1, item, urlLang, responseLang, dataLang, _a, dataLang_1, itemLang, fileName, lang, season, episode, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = "OpenSubtitles";
                DOMAIN = "https://www.opensubtitles.org";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                subLang = {
                    eng: "English",
                    spa: "Spanish",
                    fre: "French",
                    ger: "German",
                    ita: "Italian",
                    por: "Portuguese",
                    rus: "Russian",
                    chi: "Chinese",
                    jpn: "Japanese",
                    kor: "Korean",
                    ara: "Arabic",
                    hin: "Hindi",
                    dut: "Dutch",
                    swe: "Swedish",
                    pol: "Polish",
                    tur: "Turkish",
                    dan: "Danish",
                    nor: "Norwegian",
                    fin: "Finnish",
                    vie: "Vietnamese",
                    ind: "Indonesian",
                };
                subLanguageIds = [
                    { name: 'English', id: 'eng' },
                    { name: 'Arabic', id: 'ara' },
                    { name: 'Spanish', id: 'spa' },
                    { name: 'French', id: 'fre' },
                    { name: 'Vietnamese', id: 'vie' },
                    { name: 'Italian', id: 'ita' },
                    { name: 'Portuguese', id: 'por' },
                    { name: 'Chinese', id: 'chi' },
                    { name: 'Korean', id: 'kor' },
                    { name: 'Hindi', id: 'hin' },
                    { name: 'Dutch', id: 'dut' },
                    { name: 'Swedish', id: 'swe' },
                    { name: 'Polish', id: 'pol' },
                    { name: 'Turkish', id: 'tur' },
                    { name: 'Indonesian', id: 'ind' },
                ];
                url = "https://rest.opensubtitles.org/search/imdbid-".concat(movieInfo.imdb_id.replace("tt", ""));
                libs.log({ url: url }, PROVIDER, "URL SEARCH");
                _i = 0, subLanguageIds_1 = subLanguageIds;
                _b.label = 2;
            case 2:
                if (!(_i < subLanguageIds_1.length)) return [3, 6];
                item = subLanguageIds_1[_i];
                urlLang = "https://rest.opensubtitles.org/search/imdbid-".concat(movieInfo.imdb_id.replace("tt", ""), "/sublanguageid-").concat(item.id);
                return [4, fetch(urlLang, {
                        method: "GET",
                        headers: {
                            "x-user-agent": "VLSub 0.10.2",
                        },
                    })];
            case 3:
                responseLang = _b.sent();
                return [4, responseLang.json()];
            case 4:
                dataLang = _b.sent();
                libs.log({ urlLang: urlLang, dataLang: dataLang, item: item }, PROVIDER, "URL SEARCH LANG");
                for (_a = 0, dataLang_1 = dataLang; _a < dataLang_1.length; _a++) {
                    itemLang = dataLang_1[_a];
                    fileName = itemLang.SubFileName;
                    lang = itemLang.SubLanguageID.toLowerCase();
                    libs.log({ fileName: fileName, langID: itemLang.SubLanguageID, zip: itemLang.ZipDownloadLink }, PROVIDER, "ITEM INFO");
                    if (movieInfo.type == "tv") {
                        season = Number(itemLang.SeriesSeason);
                        episode = Number(itemLang.SeriesEpisode);
                        libs.log({
                            episode: episode,
                            season: season,
                            fileName: fileName,
                            lang: lang,
                            zip: itemLang.ZipDownloadLink,
                            movieInfo: movieInfo,
                        }, PROVIDER, "EPISODE COMPARE");
                        if (movieInfo.season !== season || movieInfo.episode !== episode) {
                            continue;
                        }
                    }
                    libs.log({ lang: lang, subLang: subLang[lang], zip: itemLang.ZipDownloadLink }, PROVIDER, "LANG INFO");
                    if (!subLang[lang]) {
                        continue;
                    }
                    if (!itemLang.ZipDownloadLink) {
                        continue;
                    }
                    libs.log({ fileName: fileName, lang: lang, zip: itemLang.ZipDownloadLink }, PROVIDER, "ITEM INFO PASS==>");
                    callback({
                        file: itemLang.ZipDownloadLink,
                        kind: "Captions",
                        label: subLang[lang],
                        type: "zip",
                        provider: PROVIDER,
                        headers: {
                            "x-user-agent": "VLSub 0.10.2",
                        },
                    });
                }
                _b.label = 5;
            case 5:
                _i++;
                return [3, 2];
            case 6: return [3, 8];
            case 7:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 8];
            case 8: return [2, true];
        }
    });
}); };
