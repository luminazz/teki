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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, LINK_DETAIL, parseDetail, iframeUrl, parseEmbed, embeds, _i, embeds_1, embedItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'UMEMBED';
                DOMAIN = "https://membed.net/";
                urlSearch = DOMAIN + "/search.html?keyword=" + libs.url_slug_search(movieInfo, '%20', true, 2);
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _a.sent();
                LINK_DETAIL = '';
                libs.log({ length: parseSearch('.items').length }, PROVIDER, 'PARSE SEARCH');
                parseSearch('.items').each(function (key, item) {
                    var title = parseSearch(item).find('.name').text();
                    var href = parseSearch(item).find('.video-block a').attr('href');
                    var season = title.match(/season *([0-9]+)/i);
                    season = season ? season[1] : 0;
                    var episode = title.match(/episode *([0-9]+)/i);
                    episode = episode ? episode[1] : 0;
                    if (episode && season) {
                        title = title.replace(/\-.+/i, '').trim();
                    }
                    if (libs.string_matching_title(movieInfo, title) && !LINK_DETAIL) {
                        if (season && episode) {
                            if (movieInfo.season === season && movieInfo.episode === episode) {
                                LINK_DETAIL = href;
                            }
                        }
                        else {
                            LINK_DETAIL = href;
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL }, PROVIDER, 'LINK_DETAIL');
                if (!LINK_DETAIL) {
                    return [2];
                }
                LINK_DETAIL = "" + DOMAIN + LINK_DETAIL;
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 2:
                parseDetail = _a.sent();
                iframeUrl = parseDetail('.play-video iframe').attr('src');
                libs.log({ iframeUrl: iframeUrl }, PROVIDER, 'iframeUrl');
                if (!iframeUrl) {
                    return [2];
                }
                if (_.startsWith(iframeUrl, '/')) {
                    iframeUrl = "https:" + iframeUrl;
                }
                return [4, libs.request_get(iframeUrl, {}, true)];
            case 3:
                parseEmbed = _a.sent();
                embeds = [];
                libs.log({ length: parseEmbed('.linkserver').length }, PROVIDER, 'LINK SERVER LENGTH');
                parseEmbed('.linkserver').each(function (key, item) {
                    var embedUrl = parseEmbed(item).attr('data-video');
                    libs.log({ embedUrl: embedUrl }, PROVIDER, 'embedUrl');
                    if (embedUrl) {
                        embeds.push(embedUrl);
                    }
                });
                _i = 0, embeds_1 = embeds;
                _a.label = 4;
            case 4:
                if (!(_i < embeds_1.length)) return [3, 7];
                embedItem = embeds_1[_i];
                return [4, libs.embed_redirect(embedItem, '', movieInfo, PROVIDER, callback, undefined, [])];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                _i++;
                return [3, 4];
            case 7: return [2, true];
        }
    });
}); };
