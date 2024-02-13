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
    var PROVIDER, DOMAIN, urlSearch, LINK_DETAIL, resSearch, _i, _a, searchItem, title, href, season, type, id, body, header, urlEmbed, resEmbed, hashEmbed, embedData, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'Yesmovies';
                DOMAIN = "https://ww.yesmovies.ag";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                urlSearch = "".concat(DOMAIN, "/searching?q=").concat(movieInfo.title.replace(/\s+/ig, '+'), "&limit=40&offset=0");
                LINK_DETAIL = '';
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {})];
            case 2:
                resSearch = _b.sent();
                libs.log({
                    length: resSearch,
                }, PROVIDER, 'SEARCH LENGTH');
                for (_i = 0, _a = resSearch.data; _i < _a.length; _i++) {
                    searchItem = _a[_i];
                    title = searchItem.t;
                    href = searchItem.s;
                    season = title.match(/\- *season *([0-9]+)/i);
                    season = season ? season[1] : 0;
                    title = title.replace(/\- *season *[0-9]+/i, '').trim();
                    type = 'movie';
                    if (season) {
                        type = 'tv';
                    }
                    libs.log({
                        title: title,
                        href: href,
                        season: season,
                        type: type
                    }, PROVIDER, 'SEARCH INFO');
                    if (libs.string_matching_title(movieInfo, title) && !LINK_DETAIL) {
                        if (movieInfo.type == 'movie' && type == 'movie') {
                            LINK_DETAIL = "".concat(DOMAIN, "/movie/").concat(href, ".html");
                        }
                        else if (movieInfo.type == 'tv' && type == 'tv') {
                            LINK_DETAIL = "".concat(DOMAIN, "/movie/").concat(href, ".html");
                        }
                    }
                }
                libs.log({
                    LINK_DETAIL: LINK_DETAIL
                }, PROVIDER, 'LINK DETAIL');
                if (!LINK_DETAIL) {
                    return [2];
                }
                id = LINK_DETAIL.match(/([0-9]+)\.html$/i);
                id = id ? id[1] : '';
                libs.log({ id: id }, PROVIDER, 'ID');
                if (!id) {
                    return [2];
                }
                body = {
                    m: String(id),
                    s: movieInfo.type == 'tv' ? String(movieInfo.season) : "1",
                    e: movieInfo.type == 'tv' ? String(movieInfo.episode) : "1",
                };
                header = {
                    'content-type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    Referer: LINK_DETAIL,
                    'Cookie': "srv=1"
                };
                urlEmbed = "".concat(DOMAIN, "/datas");
                return [4, libs.request_post(urlEmbed, header, body)];
            case 3:
                resEmbed = _b.sent();
                libs.log({ body: body, header: header, urlEmbed: urlEmbed, resEmbed: resEmbed }, PROVIDER, 'RES EMBED');
                hashEmbed = resEmbed['url'] || '';
                if (!hashEmbed) {
                    return [2];
                }
                embedData = "https://vidcloud9.org/watch?v=".concat(hashEmbed);
                libs.log({ embedData: embedData }, PROVIDER, 'EMBED DATA');
                return [4, libs.embed_redirect(embedData, '', movieInfo, PROVIDER, callback, '')];
            case 4:
                _b.sent();
                return [2];
            case 5:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR CATCH');
                return [3, 6];
            case 6: return [2, true];
        }
    });
}); };
