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
    var PROVIDER, DOMAIN, headerFebbox, urlSearch, LINK_DETAIL, parseDetail, headingName, id, shareLink, parseShareLink, splitShareLink, shareID, parseFebbox, febboxId, seasonUrl, parseSeason_1, parseSeason, SEASON_ID_1, episodeUrl, parseEpisode_1, parseEpisode, EPISODE_ID_1, headerDirect, urlDirect, dataDirect, jsonDirect, parseDirect_1, directQuality_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'WFebbox';
                DOMAIN = "https://www.showbox.media";
                headerFebbox = {
                    "Referer": "https://www.showbox.media/",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
                    "Origin": "https://www.showbox.media",
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 11, , 12]);
                urlSearch = "".concat(DOMAIN, "/search?keyword=").concat(libs.url_slug_search(movieInfo, '+'));
                LINK_DETAIL = "";
                if (movieInfo.type == 'movie') {
                    LINK_DETAIL = "".concat(DOMAIN, "/movie/m-").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year);
                }
                else {
                    LINK_DETAIL = "".concat(DOMAIN, "/tv/t-").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year);
                }
                libs.log({ LINK_DETAIL: LINK_DETAIL }, PROVIDER, 'LINK_DETAIL');
                if (!LINK_DETAIL) {
                    return [2];
                }
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 2:
                parseDetail = _a.sent();
                headingName = parseDetail('.heading-name a').attr('href');
                libs.log({ headingName: headingName }, PROVIDER, 'HEADING NAME');
                if (!headingName) {
                    return [2];
                }
                id = headingName.match(/detail\/([0-9]+)/i);
                id = id ? id[1] : '';
                libs.log({ id: id }, PROVIDER, 'ID');
                if (!id) {
                    return [2];
                }
                shareLink = "".concat(DOMAIN, "/index/share_link?id=").concat(id, "&type=").concat(movieInfo.type == "movie" ? "1" : "2");
                return [4, libs.request_get(shareLink, {})];
            case 3:
                parseShareLink = _a.sent();
                libs.log({ parseShareLink: parseShareLink, shareLink: shareLink }, PROVIDER, 'PARSE SHARE LINK');
                if (!parseShareLink || !parseShareLink.data || !parseShareLink.data.link) {
                    return [2];
                }
                if (parseShareLink.data.link.indexOf("febbox") == -1) {
                    return [2];
                }
                parseShareLink = parseShareLink.data.link;
                splitShareLink = parseShareLink.split("/");
                shareID = splitShareLink[splitShareLink.length - 1];
                libs.log({ shareID: shareID }, PROVIDER, 'SHARE ID');
                return [4, libs.request_get(parseShareLink, headerFebbox, true)];
            case 4:
                parseFebbox = _a.sent();
                febboxId = parseFebbox(".file").attr("data-id");
                libs.log({ febboxId: febboxId }, PROVIDER, 'FEBBOX ID');
                if (!febboxId) {
                    return [2];
                }
                if (!(movieInfo.type == 'tv')) return [3, 7];
                seasonUrl = "https://www.febbox.com/file/file_share_list?share_key=".concat(shareID, "&pwd=&is_html=1");
                return [4, libs.request_get(seasonUrl, headerFebbox)];
            case 5:
                parseSeason_1 = _a.sent();
                libs.log({ parseSeason: parseSeason_1, seasonUrl: seasonUrl }, PROVIDER, 'PARSE SEASON');
                if (!parseSeason_1.html) {
                    return [2];
                }
                parseSeason_1 = cheerio.load(parseSeason_1.html);
                SEASON_ID_1 = "";
                parseSeason_1(".file").each(function (index, item) {
                    var seasonID = parseSeason_1(item).attr("data-id");
                    var season = parseSeason_1(item).find(".file_name").text();
                    season = season.match(/season *([0-9]+)/i);
                    season = season ? season[1] : 0;
                    if (season == movieInfo.season && !SEASON_ID_1) {
                        SEASON_ID_1 = seasonID;
                    }
                });
                libs.log({ SEASON_ID: SEASON_ID_1 }, PROVIDER, 'SEASON ID');
                if (!SEASON_ID_1) {
                    return [2];
                }
                episodeUrl = "https://www.febbox.com/file/file_share_list?share_key=".concat(shareID, "&pwd=&parent_id=").concat(SEASON_ID_1, "&is_html=1");
                return [4, libs.request_get(episodeUrl, headerFebbox)];
            case 6:
                parseEpisode_1 = _a.sent();
                libs.log({ parseEpisode: parseEpisode_1, episodeUrl: episodeUrl }, PROVIDER, 'PARSE EPISODE');
                if (!parseEpisode_1.html) {
                    return [2];
                }
                parseEpisode_1 = cheerio.load(parseEpisode_1.html);
                EPISODE_ID_1 = "";
                parseEpisode_1(".file").each(function (index, item) {
                    var episodeID = parseEpisode_1(item).attr("data-id");
                    var episode = parseEpisode_1(item).find(".file_name").text().toLowerCase();
                    var episodePatterm = new RegExp("s".concat(movieInfo.season < 10 ? "0".concat(movieInfo.season) : movieInfo.season, "e").concat(movieInfo.episode < 10 ? "0".concat(movieInfo.episode) : movieInfo.episode));
                    if (episodePatterm.test(episode)) {
                        EPISODE_ID_1 = episodeID;
                    }
                });
                libs.log({ EPISODE_ID: EPISODE_ID_1 }, PROVIDER, 'EPISODE ID');
                if (!EPISODE_ID_1) {
                    return [2];
                }
                febboxId = EPISODE_ID_1;
                _a.label = 7;
            case 7:
                headerDirect = {
                    "Referer": "https://www.febbox.com/",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
                    "Origin": "https://www.febbox.com",
                    "Cookie": "ui=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDIyOTMyMTQsIm5iZiI6MTc0MjI5MzIxNCwiZXhwIjoxNzczMzk3MjM0LCJkYXRhIjp7InVpZCI6MTU4NzMwLCJ0b2tlbiI6IjkxODdjNDRkNTg3OGYzMGZmMGViNGFkODdjN2ExNWMzIn19.mK7Q1BjxvFRo7IHY8wwI87P-QVvCMlcA8v5G4kGcYuo;"
                };
                return [4, libs.cookies_clearAll()];
            case 8:
                _a.sent();
                urlDirect = "https://www.febbox.com/console/video_quality_list?fid=".concat(febboxId);
                return [4, fetch(urlDirect, {
                        headers: headerDirect,
                        method: "GET",
                        credentials: 'include',
                    })];
            case 9:
                dataDirect = _a.sent();
                return [4, dataDirect.json()];
            case 10:
                jsonDirect = _a.sent();
                libs.log({ jsonDirect: jsonDirect }, PROVIDER, 'PARSE DIRECT');
                if (!jsonDirect.html) {
                    return [2];
                }
                parseDirect_1 = cheerio.load(jsonDirect.html);
                directQuality_1 = [];
                parseDirect_1(".file_quality").each(function (index, element) {
                    var file = parseDirect_1(element).attr("data-url");
                    var quality = parseDirect_1(element).attr("data-quality");
                    if (quality.indexOf("4K") != -1) {
                        quality = "2160";
                        directQuality_1.push({ file: file, quality: quality });
                    }
                    else {
                        quality = quality.match(/[0-9]+/i);
                        if (quality) {
                            quality = Number(quality);
                            directQuality_1.push({ file: file, quality: quality });
                        }
                    }
                });
                libs.log({ directQuality: directQuality_1 }, PROVIDER, 'DIRECT URLS');
                if (!directQuality_1.length) {
                    return [2];
                }
                directQuality_1 = _.orderBy(directQuality_1, ['quality'], ['desc']);
                libs.embed_callback(directQuality_1[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality_1, headerDirect);
                return [3, 12];
            case 11:
                e_1 = _a.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 12];
            case 12: return [2, true];
        }
    });
}); };
