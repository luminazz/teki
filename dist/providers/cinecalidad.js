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
    var PROVIDER, DOMAIN, lang, filmInfo, originalName, urlSearch, parseSearch, LINK_DETAIL, parseDetail, embeds, _i, embeds_1, embedItem, parseEmbed, embedUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'ICINECALIDAD';
                DOMAIN = "https://cinecalidad.dev";
                lang = 'es';
                filmInfo = {};
                if (!(movieInfo.type == 'movie')) return [3, 2];
                return [4, libs.tmdb_movie_info(movieInfo.tmdb_id, lang)];
            case 1:
                filmInfo = _a.sent();
                return [3, 4];
            case 2: return [4, libs.tmdb_tv_info(movieInfo.tmdb_id, lang)];
            case 3:
                filmInfo = _a.sent();
                _a.label = 4;
            case 4:
                originalName = filmInfo.title || '';
                libs.log({
                    originalName: originalName
                }, PROVIDER, 'ORIGINAL NAME');
                if (!originalName) {
                    return [2];
                }
                urlSearch = "".concat(DOMAIN, "/?s=").concat(libs.url_slug_search({ title: originalName, year: movieInfo.year }, '+'));
                return [4, libs.request_get(urlSearch, {}, true)];
            case 5:
                parseSearch = _a.sent();
                LINK_DETAIL = '';
                libs.log({ urlSearch: urlSearch, length: parseSearch('.relative.group').length }, PROVIDER, 'SEARCH');
                parseSearch('.relative.group').each(function (key, item) {
                    var title = parseSearch(item).find('.sr-only').text();
                    var href = parseSearch(item).find('a.w-full.h-full').attr('href');
                    var year = parseSearch(item).find('div').first().text();
                    libs.log({ title: title, href: href, year: year }, PROVIDER, 'SEARCH ITEM');
                    if (title && href && !LINK_DETAIL) {
                        if (title == originalName) {
                            if (movieInfo.type == 'tv') {
                                LINK_DETAIL = href;
                            }
                            if (movieInfo.type == 'movie' && year.indexOf(movieInfo.year) != -1) {
                                LINK_DETAIL = href;
                            }
                        }
                    }
                });
                libs.log(LINK_DETAIL, PROVIDER, "LINK DETAIL");
                if (!LINK_DETAIL) {
                    return [2];
                }
                if (movieInfo.type == 'tv') {
                    LINK_DETAIL = LINK_DETAIL.replace('/serie/', '/episodio/');
                    if (LINK_DETAIL[LINK_DETAIL.length - 1] == '/') {
                        LINK_DETAIL = LINK_DETAIL.slice(0, -1) + "-".concat(movieInfo.season, "x").concat(movieInfo.episode);
                    }
                }
                libs.log(LINK_DETAIL, PROVIDER, "LINK DETAIL TV");
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 6:
                parseDetail = _a.sent();
                libs.log({
                    length: parseDetail('ul.options li').length
                }, PROVIDER, 'LI OPTIONS');
                embeds = [];
                parseDetail('ul.options li').each(function (key, item) {
                    var href = parseDetail(item).find('a').attr('data-src');
                    libs.log({ href: href }, PROVIDER, "HREF");
                    if (href) {
                        var words = cryptoS.enc.Base64.parse(href);
                        var textString = cryptoS.enc.Utf8.stringify(words);
                        href = textString;
                        libs.log({ href: href }, PROVIDER, "HREF_BASE64");
                        if (href) {
                            embeds.push(href);
                        }
                    }
                });
                libs.log({
                    embeds: embeds
                }, PROVIDER, 'EMBEDS');
                _i = 0, embeds_1 = embeds;
                _a.label = 7;
            case 7:
                if (!(_i < embeds_1.length)) return [3, 14];
                embedItem = embeds_1[_i];
                if (!(embedItem.indexOf('cinecalidad') != -1)) return [3, 11];
                return [4, libs.request_get(embedItem, {}, true)];
            case 8:
                parseEmbed = _a.sent();
                embedUrl = parseEmbed('iframe').attr('src');
                libs.log({ embedUrl: embedUrl }, PROVIDER, "embedUrl");
                if (!embedUrl) return [3, 10];
                return [4, libs.embed_redirect(embedUrl, '', movieInfo, PROVIDER, callback, '')];
            case 9:
                _a.sent();
                _a.label = 10;
            case 10: return [3, 13];
            case 11: return [4, libs.embed_redirect(embedItem, '', movieInfo, PROVIDER, callback, '')];
            case 12:
                _a.sent();
                _a.label = 13;
            case 13:
                _i++;
                return [3, 7];
            case 14: return [2, true];
        }
    });
}); };
