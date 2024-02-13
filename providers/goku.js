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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, LINK_DETAIL, TV_LINK_DETAIL, _loop_1, _i, TV_LINK_DETAIL_1, linkTvItem, parseFilmId, metaUrl, filmId, serverId, eId, urlServerId, parseServerId, serverIds, embeds, _a, serverIds_1, id, urlGetEmbed, dataEmbed, _b, embeds_1, embedItem;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                PROVIDER = 'GOKU';
                DOMAIN = "https://goku.sx";
                urlSearch = "".concat(DOMAIN, "/search?keyword=").concat(libs.url_slug_search(movieInfo, '+'));
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _c.sent();
                LINK_DETAIL = '';
                TV_LINK_DETAIL = [];
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
                                var tvLinkDetail = href;
                                if (_.startsWith(tvLinkDetail, '/')) {
                                    tvLinkDetail = "".concat(DOMAIN).concat(href);
                                }
                                TV_LINK_DETAIL.push(tvLinkDetail);
                            }
                            if (movieInfo.type == 'movie' && (!type || type.toLowerCase() == 'movie') && movieInfo.year == year) {
                                LINK_DETAIL = "".concat(DOMAIN).concat(href);
                            }
                        }
                    }
                });
                libs.log({ TV_LINK_DETAIL: TV_LINK_DETAIL }, PROVIDER, 'TV_LINK_DETAIL');
                if (!(movieInfo.type == 'tv' && TV_LINK_DETAIL.length)) return [3, 5];
                _loop_1 = function (linkTvItem) {
                    var id, urlSeason, parseTvLinkDetail, seasonID, urlEpisode, parseTvEpisodeDetail;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                libs.log({ linkTvItem: linkTvItem }, PROVIDER, 'TV LINK DETAIL');
                                id = linkTvItem.match(/([0-9]+)$/i);
                                id = id ? id[1] : 0;
                                if (!id) {
                                    return [2, "continue"];
                                }
                                urlSeason = "".concat(DOMAIN, "/ajax/movie/seasons/").concat(id);
                                return [4, libs.request_get(urlSeason, {}, true)];
                            case 1:
                                parseTvLinkDetail = _d.sent();
                                seasonID = 0;
                                libs.log({ length: parseTvLinkDetail('.ss-item').length }, PROVIDER, "LENGTH TV SEASON");
                                parseTvLinkDetail('.ss-item').each(function (keytv, itemtv) {
                                    var sText = parseTvLinkDetail(itemtv).text();
                                    var id = parseTvLinkDetail(itemtv).attr('data-id');
                                    var season = sText.match(/([0-9]+)/i);
                                    season = season ? season[1] : 0;
                                    libs.log({ sText: sText, id: id, season: season }, PROVIDER, 'TV SEASON INFO');
                                    if (season == movieInfo.season) {
                                        seasonID = id;
                                    }
                                });
                                if (seasonID == 0) {
                                    return [2, "continue"];
                                }
                                urlEpisode = "".concat(DOMAIN, "/ajax/movie/season/episodes/").concat(seasonID);
                                return [4, libs.request_get(urlEpisode, {}, true)];
                            case 2:
                                parseTvEpisodeDetail = _d.sent();
                                libs.log({ length: parseTvEpisodeDetail(".ep-item").length }, PROVIDER, 'EPISODE LENGHT');
                                parseTvEpisodeDetail(".ep-item").each(function (keye, iteme) {
                                    var eText = parseTvEpisodeDetail(iteme).text();
                                    var episode = eText.match(/Eps *([0-9]+)/i);
                                    episode = episode ? episode[1] : 0;
                                    var href = parseTvEpisodeDetail(iteme).attr("href");
                                    libs.log({ eText: eText, episode: episode, href: href }, PROVIDER, 'EPISODE HREF');
                                    if (episode == movieInfo.episode) {
                                        LINK_DETAIL = "".concat(DOMAIN).concat(href);
                                    }
                                });
                                return [2];
                        }
                    });
                };
                _i = 0, TV_LINK_DETAIL_1 = TV_LINK_DETAIL;
                _c.label = 2;
            case 2:
                if (!(_i < TV_LINK_DETAIL_1.length)) return [3, 5];
                linkTvItem = TV_LINK_DETAIL_1[_i];
                return [5, _loop_1(linkTvItem)];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4:
                _i++;
                return [3, 2];
            case 5:
                libs.log({ LINK_DETAIL: LINK_DETAIL }, PROVIDER, "LINK DETAIL");
                if (!LINK_DETAIL) {
                    return [2];
                }
                if (movieInfo.type == 'movie') {
                    LINK_DETAIL = LINK_DETAIL.replace('/movie/', '/watch-movie/');
                }
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 6:
                parseFilmId = _c.sent();
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
                if (movieInfo.type == 'movie') {
                    serverId = filmId;
                }
                else if (movieInfo.type == 'tv') {
                    eId = LINK_DETAIL.match(/([0-9]+)$/i);
                    eId = eId ? eId[1] : 0;
                    if (!eId) {
                        return [2];
                    }
                    serverId = eId;
                }
                urlServerId = "".concat(DOMAIN, "/ajax/movie/episode/servers/").concat(serverId);
                return [4, libs.request_get(urlServerId, {}, true)];
            case 7:
                parseServerId = _c.sent();
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
                _a = 0, serverIds_1 = serverIds;
                _c.label = 8;
            case 8:
                if (!(_a < serverIds_1.length)) return [3, 11];
                id = serverIds_1[_a];
                urlGetEmbed = "".concat(DOMAIN, "/ajax/movie/episode/server/sources/").concat(id);
                return [4, libs.request_get(urlGetEmbed, {})];
            case 9:
                dataEmbed = _c.sent();
                if (dataEmbed.data && dataEmbed.data.link) {
                    embeds.push(dataEmbed.data.link);
                }
                _c.label = 10;
            case 10:
                _a++;
                return [3, 8];
            case 11:
                libs.log({
                    embeds: embeds
                }, PROVIDER, 'EMBEDS');
                _b = 0, embeds_1 = embeds;
                _c.label = 12;
            case 12:
                if (!(_b < embeds_1.length)) return [3, 15];
                embedItem = embeds_1[_b];
                return [4, libs.embed_redirect(embedItem, '', movieInfo, PROVIDER, callback, '')];
            case 13:
                _c.sent();
                _c.label = 14;
            case 14:
                _b++;
                return [3, 12];
            case 15: return [2, true];
        }
    });
}); };
