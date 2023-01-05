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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, LINK_DETAIL, videoId, searchInfo, parseSearchInfo, mainListData, _i, mainListData_1, mainItem, title, releaseDate, year, href, videoMovieId, parseTvDetail, parseTvDetailScript, parseTvInfo, urlDirectData, headers, parseIframe, directUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'TheFlix';
                DOMAIN = "https://theflix.to";
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/tv-shows/trending?search=").concat(libs.url_slug_search(movieInfo, '+'));
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/movies/trending?search=").concat(libs.url_slug_search(movieInfo, '+'));
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _a.sent();
                LINK_DETAIL = '';
                videoId = '';
                searchInfo = parseSearch('#__NEXT_DATA__').text();
                parseSearchInfo = JSON.parse(searchInfo);
                mainListData = parseSearchInfo.props.pageProps.mainList.docs || [];
                libs.log({ urlSearch: urlSearch, mainListData: mainListData }, PROVIDER, 'SEARCH');
                for (_i = 0, mainListData_1 = mainListData; _i < mainListData_1.length; _i++) {
                    mainItem = mainListData_1[_i];
                    title = mainItem.name;
                    releaseDate = mainItem.releaseDate;
                    year = releaseDate.split('-')[0];
                    href = "/".concat(movieInfo.type == 'movie' ? 'movie' : 'tv-show', "/").concat(mainItem.id, "-").concat(libs.url_slug_search(movieInfo, '-'));
                    videoMovieId = movieInfo.type == 'movie' ? mainItem.videos[0] || '' : '';
                    libs.log({ title: title, href: href, year: year, videoMovieId: videoMovieId }, PROVIDER, 'SEARCH ITEM');
                    if (title && href && !LINK_DETAIL) {
                        if (libs.string_matching_title(movieInfo, title)) {
                            if (movieInfo.type == 'tv') {
                                LINK_DETAIL = href;
                                videoId = videoMovieId;
                            }
                            if (movieInfo.type == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL = href;
                                videoId = videoMovieId;
                            }
                        }
                    }
                }
                libs.log(LINK_DETAIL, PROVIDER, "LINK DETAIL");
                if (!LINK_DETAIL) {
                    return [2];
                }
                LINK_DETAIL = "".concat(DOMAIN).concat(LINK_DETAIL);
                if (!(movieInfo.type == 'tv')) return [3, 3];
                LINK_DETAIL = LINK_DETAIL.replace(/\/season\-[0-9]+\/episode\-[0-9]+/i, "");
                LINK_DETAIL = "".concat(LINK_DETAIL, "/season-").concat(movieInfo.season, "/episode-").concat(movieInfo.episode);
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 2:
                parseTvDetail = _a.sent();
                parseTvDetailScript = parseTvDetail('#__NEXT_DATA__').text();
                parseTvInfo = JSON.parse(parseTvDetailScript);
                libs.log({
                    a: parseTvInfo.props.pageProps.selectedTvEpisode
                }, PROVIDER, "parseTvInfo");
                videoId = parseTvInfo.props.pageProps.selectedTvEpisode.videos[0] || '';
                _a.label = 3;
            case 3:
                libs.log(LINK_DETAIL, PROVIDER, "LINK DETAIL TV");
                urlDirectData = "".concat(DOMAIN, ":5679/").concat(movieInfo.type == 'movie' ? 'movies' : 'tv', "/videos/").concat(videoId, "/request-access?contentUsageType=Viewing");
                libs.log({
                    urlDirectData: urlDirectData
                }, PROVIDER, "URL DIRECT");
                headers = {
                    'Host': 'theflixvd.b-cdn.net',
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
                    'referer': LINK_DETAIL,
                };
                return [4, libs.request_get(urlDirectData, {
                        Cookie: "theflix.ipiid=6320b59054023c11feb17fa7;",
                    })];
            case 4:
                parseIframe = _a.sent();
                directUrl = parseIframe.url;
                libs.log({
                    directUrl: directUrl,
                    urlDirectData: urlDirectData
                }, PROVIDER, "URL DIRECT DATA");
                if (!directUrl) {
                    return [2];
                }
                libs.embed_callback(directUrl, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [], headers);
                return [2, true];
        }
    });
}); };
