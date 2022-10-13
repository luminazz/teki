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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, LINK_DETAIL, tvshowFilmId, parseFilmId, metaUrl, filmId, serverId, urlSeason, parseSeasonData_1, seasonId_1, urlEpisode, parseEpisodeData_1, episodeId_1, urlServerId, parseServerId, serverIds, embeds, _i, serverIds_1, id, urlGetEmbed, dataEmbed, _a, embeds_1, embedItem;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'GOKU';
                DOMAIN = "https://goku.to";
                urlSearch = "".concat(DOMAIN, "/search?keyword=").concat(libs.url_slug_search(movieInfo, '+'));
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _b.sent();
                LINK_DETAIL = '';
                libs.log({ urlSearch: urlSearch, length: parseSearch('.section-items .item').length }, PROVIDER, 'SEARCH');
                parseSearch('.section-items .item').each(function (key, item) {
                    var title = parseSearch(item).find('.movie-info .movie-name').text();
                    var href = parseSearch(item).find('.movie-info .movie-link').attr('href');
                    var year = parseSearch(item).find('.info-split div').first().text();
                    var type = parseSearch(item).find('.info-split span.badge-type').text();
                    libs.log({ title: title, href: href, year: year, type: type }, PROVIDER, 'SEARCH ITEM');
                    if (title && href && !LINK_DETAIL) {
                        if (libs.string_matching_title(movieInfo, title)) {
                            if (movieInfo.type == 'tv' && type.toLowerCase() == 'tv') {
                                LINK_DETAIL = "".concat(DOMAIN).concat(href);
                            }
                            if (movieInfo.type == 'movie' && (!type || type.toLowerCase() == 'movie') && movieInfo.year == year) {
                                LINK_DETAIL = "".concat(DOMAIN).concat(href);
                            }
                        }
                    }
                });
                if (movieInfo.title == 'Wire Room' && movieInfo.type === 'movie' && movieInfo.year == 2022) {
                    LINK_DETAIL = 'https://goku.to/movie/watch-wire-room-87096';
                }
                else if (movieInfo.title == 'The Lord of the Rings: The Rings of Power' && movieInfo.type == 'tv') {
                    LINK_DETAIL = 'https://goku.to/series/watch-the-lord-of-the-rings-the-rings-of-power-87087';
                }
                libs.log(LINK_DETAIL, PROVIDER, "LINK DETAIL");
                if (!LINK_DETAIL) {
                    return [2];
                }
                tvshowFilmId = LINK_DETAIL.match(/\-([0-9]+)$/i);
                tvshowFilmId = tvshowFilmId ? tvshowFilmId[1] : '';
                if (movieInfo.type == 'movie') {
                    LINK_DETAIL = LINK_DETAIL.replace('/movie/', '/watch-movie/');
                }
                else {
                    LINK_DETAIL = LINK_DETAIL.replace('/series/', '/watch-series/');
                }
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 2:
                parseFilmId = _b.sent();
                metaUrl = parseFilmId('meta[property="og:url"]').attr('content');
                libs.log({
                    metaUrl: metaUrl
                }, PROVIDER, "META");
                if (!metaUrl) {
                    return [2];
                }
                filmId = metaUrl.match(/\/([0-9]+)$/i);
                filmId = filmId ? filmId[1] : '';
                libs.log(filmId, PROVIDER, "FILM ID");
                if (!filmId) {
                    return [2];
                }
                serverId = '';
                if (!(movieInfo.type == 'movie')) return [3, 3];
                serverId = filmId;
                return [3, 6];
            case 3:
                if (!(movieInfo.type == 'tv')) return [3, 6];
                urlSeason = "".concat(DOMAIN, "/ajax/movie/seasons/").concat(tvshowFilmId);
                return [4, libs.request_get(urlSeason, {}, true)];
            case 4:
                parseSeasonData_1 = _b.sent();
                libs.log({
                    season_length: parseSeasonData_1('.ss-item').length
                }, PROVIDER, 'SEASON LENGTH');
                seasonId_1 = '';
                parseSeasonData_1('.ss-item').each(function (key, item) {
                    var seasonIdData = parseSeasonData_1(item).attr('data-id');
                    var seasonTitle = parseSeasonData_1(item).text();
                    var seasonNumber = seasonTitle.match(/([0-9\.*\-*]+)/i);
                    seasonNumber = seasonNumber ? seasonNumber[1] : '';
                    libs.log({
                        seasonIdData: seasonIdData,
                        seasonNumber: seasonNumber
                    }, PROVIDER, 'seasonIdData');
                    if (seasonNumber == movieInfo.season) {
                        seasonId_1 = seasonIdData;
                    }
                });
                libs.log({
                    seasonId: seasonId_1
                }, PROVIDER, 'SEASON ID');
                if (!seasonId_1) {
                    return [2];
                }
                urlEpisode = "".concat(DOMAIN, "/ajax/movie/season/episodes/").concat(seasonId_1);
                return [4, libs.request_get(urlEpisode, {}, true)];
            case 5:
                parseEpisodeData_1 = _b.sent();
                libs.log({
                    episode_length: parseEpisodeData_1('.ep-item').length,
                }, PROVIDER, 'EPISODE LENGTH');
                episodeId_1 = '';
                parseEpisodeData_1('.ep-item').each(function (key, item) {
                    var episodeIdData = parseEpisodeData_1(item).attr('data-id');
                    var episodeTitle = parseEpisodeData_1(item).find('strong').text();
                    var episodeNumber = episodeTitle.match(/([0-9\.*\-*]+)/i);
                    episodeNumber = episodeNumber ? episodeNumber[1] : '';
                    libs.log({
                        episodeIdData: episodeIdData,
                        episodeNumber: episodeNumber
                    }, PROVIDER, 'episodeIdData');
                    if (episodeNumber == movieInfo.episode) {
                        episodeId_1 = episodeIdData;
                    }
                });
                libs.log({
                    episodeId: episodeId_1
                }, PROVIDER, 'EPISODE ID');
                if (!episodeId_1) {
                    return [2];
                }
                serverId = episodeId_1;
                _b.label = 6;
            case 6:
                urlServerId = "".concat(DOMAIN, "/ajax/movie/episode/servers/").concat(serverId);
                return [4, libs.request_get(urlServerId, {}, true)];
            case 7:
                parseServerId = _b.sent();
                libs.log({ server_id_length: parseServerId('.sv-item').length }, PROVIDER, 'SERVER LENGTH');
                serverIds = [];
                embeds = [];
                parseServerId('.sv-item').each(function (key, item) {
                    var id = parseServerId(item).attr('data-id');
                    if (id) {
                        serverIds.push(id);
                    }
                });
                libs.log({
                    serverIds: serverIds
                }, PROVIDER, 'SERVER IDS');
                _i = 0, serverIds_1 = serverIds;
                _b.label = 8;
            case 8:
                if (!(_i < serverIds_1.length)) return [3, 11];
                id = serverIds_1[_i];
                urlGetEmbed = "".concat(DOMAIN, "/ajax/movie/episode/server/sources/").concat(id);
                return [4, libs.request_get(urlGetEmbed, {})];
            case 9:
                dataEmbed = _b.sent();
                if (dataEmbed.data && dataEmbed.data.link) {
                    embeds.push(dataEmbed.data.link);
                }
                _b.label = 10;
            case 10:
                _i++;
                return [3, 8];
            case 11:
                libs.log({
                    embeds: embeds
                }, PROVIDER, 'EMBEDS');
                _a = 0, embeds_1 = embeds;
                _b.label = 12;
            case 12:
                if (!(_a < embeds_1.length)) return [3, 15];
                embedItem = embeds_1[_a];
                return [4, libs.embed_redirect(embedItem, '', movieInfo, PROVIDER, callback, '')];
            case 13:
                _b.sent();
                _b.label = 14;
            case 14:
                _a++;
                return [3, 12];
            case 15: return [2, true];
        }
    });
}); };
