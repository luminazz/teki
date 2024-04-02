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
    var PROVIDER, DOMAIN, urlSearch, parseSearch_1, LINK_DETAIL_1, id, detailID, urlEpisode, dataDetail, parseDetail_1, episodeID_1, episodeServer, serverIDs_2, dataEpisode, parseEpisode_1, _i, serverIDs_1, serverID, urlServer, dataServer, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = '9Anime - Anime';
                DOMAIN = "https://9animetv.to";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 10, , 11]);
                urlSearch = "".concat(DOMAIN, "/search?keyword=").concat(libs.url_slug_search(movieInfo, "+"));
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch_1 = _a.sent();
                LINK_DETAIL_1 = "";
                parseSearch_1(".flw-item").each(function (key, item) {
                    var title = parseSearch_1(item).find(".film-name").text();
                    var href = parseSearch_1(item).find(".film-poster a.film-poster-ahref").attr("href");
                    libs.log({ title: title, href: href, matching: libs.string_matching_title(movieInfo, title, false) }, PROVIDER, "LINK_DETAIL INFO");
                    if (title && href && libs.string_matching_title(movieInfo, title, false) && !LINK_DETAIL_1) {
                        LINK_DETAIL_1 = href;
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, "LINK_DETAIL");
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                if (_.startsWith(LINK_DETAIL_1, "/")) {
                    LINK_DETAIL_1 = "".concat(DOMAIN).concat(LINK_DETAIL_1);
                }
                id = LINK_DETAIL_1.match(/watch\/(.*)/i);
                id = id ? id[1] : "";
                libs.log({ id: id }, PROVIDER, "id");
                if (!id) {
                    return [2];
                }
                detailID = id.match(/([0-9]+$)/i);
                detailID = detailID ? detailID[1] : "";
                libs.log({ detailID: detailID }, PROVIDER, "detailID");
                if (!detailID) {
                    return [2];
                }
                urlEpisode = "".concat(DOMAIN, "/ajax/episode/list/").concat(detailID);
                return [4, libs.request_get(urlEpisode, {})];
            case 3:
                dataDetail = _a.sent();
                parseDetail_1 = cheerio.load(dataDetail.html);
                libs.log({ detailID: detailID, html: dataDetail.html }, PROVIDER, "urlEpisode, dataDetail");
                episodeID_1 = "";
                parseDetail_1('.ep-item').each(function (key, item) {
                    var dataId = parseDetail_1(item).attr("data-id");
                    var episode = parseDetail_1(item).attr('data-number');
                    libs.log({ dataId: dataId, episode: episode }, PROVIDER, "dataId, episode");
                    if (episode == movieInfo.episode && !episodeID_1) {
                        episodeID_1 = dataId;
                    }
                });
                libs.log({ episodeID: episodeID_1 }, PROVIDER, "episodeID");
                if (!episodeID_1) {
                    return [2];
                }
                episodeServer = "".concat(DOMAIN, "/ajax/episode/servers?episodeId=").concat(episodeID_1);
                serverIDs_2 = [];
                return [4, libs.request_get(episodeServer, {})];
            case 4:
                dataEpisode = _a.sent();
                parseEpisode_1 = cheerio.load(dataEpisode.html);
                parseEpisode_1(".server-item").each(function (key, item) {
                    var id = parseEpisode_1(item).attr("data-id");
                    if (id) {
                        serverIDs_2.push(id);
                    }
                });
                libs.log({ serverIDs: serverIDs_2 }, PROVIDER, "serverIDs");
                if (!serverIDs_2) {
                    return [2];
                }
                _i = 0, serverIDs_1 = serverIDs_2;
                _a.label = 5;
            case 5:
                if (!(_i < serverIDs_1.length)) return [3, 9];
                serverID = serverIDs_1[_i];
                urlServer = "".concat(DOMAIN, "/ajax/episode/sources?id=").concat(serverID);
                return [4, libs.request_get(urlServer, {})];
            case 6:
                dataServer = _a.sent();
                libs.log({ dataServer: dataServer }, PROVIDER, "dataServer");
                if (!dataServer || !dataServer.link) {
                    return [3, 8];
                }
                return [4, libs.embed_redirect(dataServer.link, '', movieInfo, PROVIDER, callback, '')];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8:
                _i++;
                return [3, 5];
            case 9: return [3, 11];
            case 10:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 11];
            case 11: return [2, true];
        }
    });
}); };
