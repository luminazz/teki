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
    var PROVIDER, DOMAIN, urlSearch, parseSearch_1, LINK_DETAIL_1, LINK_EPISODE_1, parseTv_1, id, urlDirect, headers, body, dataDirect, parseDataDirect, directURL, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'OSOAPER';
                DOMAIN = "https://soaper.tv";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                urlSearch = "".concat(DOMAIN, "/search.html?keyword=").concat(libs.url_slug_search(movieInfo, "%20"));
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch_1 = _a.sent();
                LINK_DETAIL_1 = "";
                libs.log({ length_parse: parseSearch_1(".panel.panel-info.panel-default").length }, PROVIDER, "LENGTH PARSE");
                parseSearch_1(".panel.panel-info.panel-default").each(function (key, item) {
                    var heading = parseSearch_1(item).find(".panel-heading").text();
                    if (heading && (heading.trim() == "Related Movies" || heading == "Related TVs")) {
                        libs.log({ length: parseSearch_1(item).find(".col-lg-2.col-md-3.col-sm-4.col-xs-6.no-padding").length }, PROVIDER, "SEARCH LENGTH");
                        parseSearch_1(item).find(".col-lg-2.col-md-3.col-sm-4.col-xs-6.no-padding").each(function (key2, item2) {
                            var year = parseSearch_1(item2).find(".img-group .img-tip.label.label-info").text();
                            var title = parseSearch_1(item2).find("h5 a").text().trim();
                            var href = parseSearch_1(item2).find("h5 a").attr('href');
                            var type = href.indexOf("movie_") !== -1 ? "movie" : "tv";
                            libs.log({ year: year, title: title, href: href, type: type }, PROVIDER, "SEARCH INFO");
                            if (title && href) {
                                if (libs.string_matching_title(movieInfo, title)) {
                                    if (movieInfo.type == 'movie' && type == "movie" && year == movieInfo.year) {
                                        LINK_DETAIL_1 = "".concat(DOMAIN).concat(href);
                                    }
                                    else if (movieInfo.type == 'tv' && type == "tv") {
                                        LINK_DETAIL_1 = "".concat(DOMAIN).concat(href);
                                    }
                                }
                            }
                        });
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, "LINK_DETAIL");
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                LINK_EPISODE_1 = "";
                if (movieInfo.type == "movie") {
                    LINK_EPISODE_1 = LINK_DETAIL_1;
                }
                if (!(movieInfo.type == "tv")) return [3, 4];
                return [4, libs.request_get(LINK_DETAIL_1, {}, true)];
            case 3:
                parseTv_1 = _a.sent();
                parseTv_1(".alert.alert-info-ex.col-sm-12").each(function (key, item) {
                    var season = parseTv_1(item).find("h4").text();
                    season = season.match(/season *([0-9]+)/i);
                    season = season ? season[1] : 0;
                    libs.log({ season: season }, PROVIDER, "SEASON");
                    if (season == movieInfo.season) {
                        parseTv_1(item).find(".col-sm-12.col-md-6.col-lg-4.myp1").each(function (key2, item2) {
                            var episodeTitle = parseTv_1(item2).find("a").text();
                            var episodeHref = parseTv_1(item2).find("a").attr("href");
                            var parseEpisode = episodeTitle.match(/^([0-9]+) *\./i);
                            parseEpisode = parseEpisode ? parseEpisode[1] : 0;
                            libs.log({ episodeTitle: episodeTitle, episodeHref: episodeHref, parseEpisode: parseEpisode }, PROVIDER, "EPISODE");
                            if (parseEpisode == movieInfo.episode && episodeHref) {
                                LINK_EPISODE_1 = "".concat(DOMAIN).concat(episodeHref);
                            }
                        });
                    }
                });
                _a.label = 4;
            case 4:
                libs.log({ LINK_EPISODE: LINK_EPISODE_1 }, PROVIDER, 'LINK_EPISODE');
                if (!LINK_EPISODE_1) {
                    return [2];
                }
                id = LINK_EPISODE_1.match(/\_([A-z0-9]+).html/i);
                id = id ? id[1] : "";
                libs.log({ id: id }, PROVIDER, 'ID');
                if (!id) {
                    return [2];
                }
                urlDirect = "".concat(DOMAIN, "/home/index/GetEInfoAjax");
                headers = {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                    Referer: LINK_EPISODE_1
                };
                body = qs.stringify({
                    pass: id,
                    param: "",
                    extra: "",
                    e2: 0,
                    server: 1
                });
                return [4, libs.request_post(urlDirect, headers, body)];
            case 5:
                dataDirect = _a.sent();
                libs.log({ dataDirect: dataDirect, urlDirect: urlDirect, headers: headers, body: body }, PROVIDER, 'DATA_DIRECT');
                parseDataDirect = JSON.parse(dataDirect);
                libs.log({ parseDataDirect: parseDataDirect }, PROVIDER, 'PARSE_DATA_DIRECT');
                if (!parseDataDirect.val) {
                    return [2];
                }
                directURL = "".concat(DOMAIN).concat(parseDataDirect.val);
                directURL = directURL.replace("/dev/Apis/tw_m3u8", "/home/index/M3U8");
                libs.log({ directURL: directURL }, PROVIDER, 'DIRECT_URL');
                libs.embed_callback(directURL, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: directURL, quality: 1080 }], {
                    referer: LINK_EPISODE_1,
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
                    "Accept-Encoding": "gzip, deflate, br, zstd"
                });
                return [3, 7];
            case 6:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 7];
            case 7: return [2];
        }
    });
}); };
