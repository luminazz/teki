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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, LINK_DETAIL, TV_LINK_DETAIL, flagTv, _loop_1, _i, TV_LINK_DETAIL_1, linkTvItem, filmId, serverIds, apiUrlEmbed, parseEmbedServer_1, apiUrlGetSeason, parseGetSeason_1, seasonId_1, apiUrlGetEpisode, episodeId_1, parseGetEpisode_1, urlGetEmbedTv, parseEmbedTv_1, apiGetLinkEmbed, _a, serverIds_1, serverIdItem, getLinkEmbedData;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'FMOVIES';
                DOMAIN = "https://fmovies.ps";
                urlSearch = "".concat(DOMAIN, "/search/").concat(libs.url_slug_search(movieInfo));
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _b.sent();
                LINK_DETAIL = '';
                TV_LINK_DETAIL = [];
                libs.log({ urlSearch: urlSearch, length: parseSearch('.flw-item') }, PROVIDER, 'SEARCH');
                parseSearch('.flw-item').each(function (key, item) {
                    var title = parseSearch(item).find('.film-poster-ahref').attr('title');
                    var href = parseSearch(item).find('.film-poster-ahref').attr('href');
                    var year = parseSearch(item).find('.fdi-item').first().text();
                    var type = parseSearch(item).find('.fdi-type').text();
                    libs.log({ title: title, href: href, year: year, type: type }, PROVIDER, 'SEARCH ITEM');
                    if (title && href && !LINK_DETAIL && type) {
                        if (libs.string_matching_title(movieInfo, title)) {
                            if (movieInfo.type == 'tv' && type.toLowerCase() == 'tv') {
                                var tvLinkDetail = href;
                                if (_.startsWith(tvLinkDetail, '/')) {
                                    tvLinkDetail = "".concat(DOMAIN).concat(href);
                                }
                                TV_LINK_DETAIL.push(tvLinkDetail);
                            }
                            if (movieInfo.type == 'movie' && type.toLowerCase() == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL = _.startsWith(href, '/') ? "".concat(DOMAIN).concat(href) : href;
                            }
                        }
                    }
                });
                libs.log({ TV_LINK_DETAIL: TV_LINK_DETAIL }, PROVIDER, 'TV_LINK_DETAIL');
                flagTv = false;
                if (!(movieInfo.type == 'tv' && TV_LINK_DETAIL.length)) return [3, 5];
                _loop_1 = function (linkTvItem) {
                    var parseTvLinkDetail, yearTv;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                libs.log({ linkTvItem: linkTvItem }, PROVIDER, 'TV LINK DETAIL');
                                return [4, libs.request_get(linkTvItem, {}, true)];
                            case 1:
                                parseTvLinkDetail = _c.sent();
                                yearTv = 0;
                                libs.log({ length: parseTvLinkDetail('.m_i-d-content .elements .row-line').length }, PROVIDER, 'LENGTH TV');
                                parseTvLinkDetail('.m_i-d-content .elements .row-line').each(function (keyTv, itemTv) {
                                    var text = parseTvLinkDetail(itemTv).text();
                                    libs.log({ text: text }, PROVIDER, 'TEXT TV');
                                    if (text && text.toLowerCase().indexOf('released') != -1) {
                                        yearTv = text.match(/Released *\: *([0-9]+)/i);
                                        yearTv = yearTv ? yearTv[1] : 0;
                                        libs.log({ yearTv: yearTv }, PROVIDER, 'YEARTV');
                                        if (yearTv == movieInfo.year && !flagTv) {
                                            flagTv = true;
                                            LINK_DETAIL = linkTvItem;
                                        }
                                    }
                                });
                                return [2];
                        }
                    });
                };
                _i = 0, TV_LINK_DETAIL_1 = TV_LINK_DETAIL;
                _b.label = 2;
            case 2:
                if (!(_i < TV_LINK_DETAIL_1.length)) return [3, 5];
                linkTvItem = TV_LINK_DETAIL_1[_i];
                return [5, _loop_1(linkTvItem)];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4:
                _i++;
                return [3, 2];
            case 5:
                libs.log(LINK_DETAIL, PROVIDER, "LINK DETAIL");
                if (!LINK_DETAIL) {
                    return [2];
                }
                filmId = LINK_DETAIL.match(/-([0-9]+)$/i);
                filmId = filmId ? filmId[1] : '';
                libs.log(filmId, PROVIDER, "FILM ID");
                if (!filmId) {
                    return [2];
                }
                serverIds = [];
                if (!(movieInfo.type == 'movie')) return [3, 7];
                apiUrlEmbed = "".concat(DOMAIN, "/ajax/movie/episodes/").concat(filmId);
                return [4, libs.request_get(apiUrlEmbed, {}, true)];
            case 6:
                parseEmbedServer_1 = _b.sent();
                libs.log({ apiUrlEmbed: apiUrlEmbed, length: parseEmbedServer_1('.link-item').length }, PROVIDER, "LENGTH LINK ITEM");
                parseEmbedServer_1('.link-item').each(function (key, item) {
                    var serverId = parseEmbedServer_1(item).attr('data-linkid');
                    var serverName = parseEmbedServer_1(item).find('span').text();
                    if (serverId && serverName.toLowerCase() == "upcloud") {
                        serverIds.push(serverId);
                    }
                });
                return [3, 11];
            case 7:
                if (!(movieInfo.type == 'tv')) return [3, 11];
                apiUrlGetSeason = "".concat(DOMAIN, "/ajax/v2/tv/seasons/").concat(filmId);
                return [4, libs.request_get(apiUrlGetSeason, {}, true)];
            case 8:
                parseGetSeason_1 = _b.sent();
                seasonId_1 = 0;
                libs.log({ apiUrlGetSeason: apiUrlGetSeason, length: parseGetSeason_1('.ss-item').length }, PROVIDER, "SEASSON INFO");
                parseGetSeason_1('.ss-item').each(function (key, item) {
                    var season = parseGetSeason_1(item).text();
                    var seasonDataId = parseGetSeason_1(item).attr('data-id');
                    if (season && seasonDataId) {
                        season = season.match(/([0-9.*]+)/i);
                        season = season ? season[1] : 0;
                        if (Number(season) == movieInfo.season) {
                            seasonId_1 = seasonDataId;
                        }
                    }
                });
                libs.log({ seasonId: seasonId_1 }, PROVIDER, 'SEASON ID');
                if (!seasonId_1) {
                    return [2];
                }
                apiUrlGetEpisode = "".concat(DOMAIN, "/ajax/v2/season/episodes/").concat(seasonId_1);
                episodeId_1 = 0;
                return [4, libs.request_get(apiUrlGetEpisode, {}, true)];
            case 9:
                parseGetEpisode_1 = _b.sent();
                libs.log({ apiUrlGetEpisode: apiUrlGetEpisode, length: parseGetEpisode_1('.eps-item').length }, PROVIDER, 'SEASON INFO');
                parseGetEpisode_1('.eps-item').each(function (key, item) {
                    var episode = parseGetEpisode_1(item).find('strong').text();
                    var episodeDataId = parseGetEpisode_1(item).attr('data-id');
                    libs.log({ episode: episode, episodeDataId: episodeDataId }, PROVIDER, 'EPISODE INFO');
                    if (episode && episodeDataId) {
                        episode = episode.match(/([0-9.]+)/i);
                        libs.log({ episode: episode }, PROVIDER, 'EPISODE PATTERN');
                        episode = episode ? episode[1] : 0;
                        if (episode == movieInfo.episode) {
                            episodeId_1 = episodeDataId;
                        }
                    }
                });
                libs.log(episodeId_1, PROVIDER, 'EPISODE ID');
                if (!episodeId_1) {
                    return [2];
                }
                urlGetEmbedTv = "".concat(DOMAIN, "/ajax/v2/episode/servers/").concat(episodeId_1);
                return [4, libs.request_get(urlGetEmbedTv, {}, true)];
            case 10:
                parseEmbedTv_1 = _b.sent();
                libs.log({ urlGetEmbedTv: urlGetEmbedTv, length: parseEmbedTv_1('.link-item').length }, PROVIDER, 'EMBED INFO');
                parseEmbedTv_1('.link-item').each(function (key, item) {
                    var serverId = parseEmbedTv_1(item).attr('data-id');
                    var serverName = parseEmbedTv_1(item).find('span').text();
                    if (serverId && serverName.toLowerCase() == "upcloud") {
                        serverIds.push(serverId);
                    }
                });
                _b.label = 11;
            case 11:
                libs.log({ serverIds: serverIds }, PROVIDER, 'SERVER IDS');
                apiGetLinkEmbed = "".concat(DOMAIN, "/ajax/get_link/");
                _a = 0, serverIds_1 = serverIds;
                _b.label = 12;
            case 12:
                if (!(_a < serverIds_1.length)) return [3, 16];
                serverIdItem = serverIds_1[_a];
                libs.log({ serverIdItem: serverIdItem }, PROVIDER, "SERVER ID ITEM");
                return [4, libs.request_get(apiGetLinkEmbed + serverIdItem, {})];
            case 13:
                getLinkEmbedData = _b.sent();
                libs.log({ getLinkEmbedData: getLinkEmbedData }, PROVIDER, 'LINK EMBED DATA');
                if (!(getLinkEmbedData && getLinkEmbedData.link)) return [3, 15];
                return [4, libs.embed_redirect(getLinkEmbedData.link, '', movieInfo, PROVIDER, callback, '')];
            case 14:
                _b.sent();
                _b.label = 15;
            case 15:
                _a++;
                return [3, 12];
            case 16: return [2, true];
        }
    });
}); };
