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
    var PROVIDER, DOMAIN, urlSearch, dataSearch, ID, _i, dataSearch_1, item, urlDetail, URL_DETAIL_1, parseDetail_1, numSeason_1, parseSeason, sourceSubs_2, _loop_1, i, state_1, res, _a, sourceSubs_1, item, parseSub, id, urlDownload, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'OpenSubtitles';
                DOMAIN = "https://www.opensubtitles.org";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 10, , 11]);
                urlSearch = "".concat(DOMAIN, "/libs/suggest.php?format=json3&MovieName=").concat(libs.url_slug_search(movieInfo, "%20"), "&SubLanguageID=null");
                return [4, libs.request_get(urlSearch, {}, false)];
            case 2:
                dataSearch = _b.sent();
                ID = "";
                for (_i = 0, dataSearch_1 = dataSearch; _i < dataSearch_1.length; _i++) {
                    item = dataSearch_1[_i];
                    if (libs.string_matching_title(movieInfo, item.name) && movieInfo.year == item.year && item.kind == movieInfo.type && !ID) {
                        ID = item.id;
                    }
                }
                libs.log({ ID: ID }, PROVIDER, 'ID');
                if (!ID) {
                    return [2];
                }
                urlDetail = "".concat(DOMAIN, "/en/search/sublanguageid-all/idmovie-").concat(ID);
                URL_DETAIL_1 = "";
                if (!(movieInfo.type == 'tv')) return [3, 4];
                return [4, libs.request_get(urlDetail, {}, true)];
            case 3:
                parseDetail_1 = _b.sent();
                numSeason_1 = 0;
                libs.log({ length: parseDetail_1("#search_results").length, urlDetail: urlDetail }, PROVIDER, "TV SEARCH");
                parseSeason = {};
                parseDetail_1("#search_results tr").each(function (key, item) {
                    var season = parseDetail_1(item).find("td span").attr("id");
                    libs.log({ season: season }, PROVIDER, "SEASON");
                    if (season) {
                        season = season.match(/season\-+([0-9]+)/i);
                        season = season ? season[1] : 0;
                        numSeason_1 = season;
                    }
                    else {
                        var checkEpisode = parseDetail_1(item).attr("itemprop");
                        libs.log({ checkEpisode: checkEpisode }, PROVIDER, "CHECK EPISODE");
                        if (checkEpisode) {
                            var numEpisode = parseDetail_1(item).find("td span[itemprop=\"episodeNumber\"]").text();
                            if (numSeason_1 == movieInfo.season && numEpisode == movieInfo.episode) {
                                var urlEpisode = parseDetail_1(item).find("td a[itemprop=\"url\"]").attr("href");
                                if (urlEpisode) {
                                    URL_DETAIL_1 = "".concat(DOMAIN).concat(urlEpisode);
                                    libs.log({ numEpisode: numEpisode, numSeason: numSeason_1, URL_DETAIL: URL_DETAIL_1 }, PROVIDER, "EPISODE");
                                }
                            }
                        }
                    }
                });
                return [3, 5];
            case 4:
                URL_DETAIL_1 = urlDetail;
                _b.label = 5;
            case 5:
                libs.log({ URL_DETAIL: URL_DETAIL_1 }, PROVIDER, 'URL_DETAIL');
                if (!URL_DETAIL_1) {
                    return [2];
                }
                sourceSubs_2 = [];
                _loop_1 = function (i) {
                    var parseSub, length_1;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4, libs.request_get("".concat(URL_DETAIL_1, "/offset-").concat(i), {}, true)];
                            case 1:
                                parseSub = _c.sent();
                                length_1 = parseSub("#search_results tr.change").length;
                                libs.log({ length: length_1, i: i }, PROVIDER, "OFFSET");
                                if (!length_1) {
                                    return [2, "break"];
                                }
                                parseSub("#search_results tr.change").each(function (key, item) {
                                    var link = parseSub(item).find("td a.bnone").attr("href");
                                    var lang = parseSub(item).find("td:nth-child(2)").find("a").attr('title');
                                    libs.log({ link: link, lang: lang }, PROVIDER, 'SUBS');
                                    if (link && lang) {
                                        link = "".concat(DOMAIN).concat(link);
                                        sourceSubs_2.push({
                                            lang: lang,
                                            link: link
                                        });
                                    }
                                });
                                return [2];
                        }
                    });
                };
                i = 0;
                _b.label = 6;
            case 6:
                if (!(i <= 160)) return [3, 9];
                return [5, _loop_1(i)];
            case 7:
                state_1 = _b.sent();
                if (state_1 === "break")
                    return [3, 9];
                _b.label = 8;
            case 8:
                i += 40;
                return [3, 6];
            case 9:
                libs.log({ sourceSubs: sourceSubs_2 }, PROVIDER, 'SOURCE SUBS');
                if (!sourceSubs_2.length) {
                    return [2];
                }
                res = [];
                for (_a = 0, sourceSubs_1 = sourceSubs_2; _a < sourceSubs_1.length; _a++) {
                    item = sourceSubs_1[_a];
                    parseSub = item.link.split('/');
                    id = parseSub[parseSub.length - 2];
                    urlDownload = "https://dl.opensubtitles.org/en/download/sub/".concat(id);
                    callback({
                        file: urlDownload,
                        kind: "Captions",
                        label: item.lang,
                        type: "download",
                    });
                }
                return [3, 11];
            case 10:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 11];
            case 11: return [2, true];
        }
    });
}); };
