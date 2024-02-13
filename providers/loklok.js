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
    var PROVIDER, DOMAIN, APIDOMAIN, urlSearch, headerLokLok, parseSearch_1, LINK_DETAIL_1, splitDetail, id, type, directUrl, parseDirect, subs, codeId, quality, _i, _a, episodeItem, _b, _c, subItem, episodeItem, _d, _e, subItem, fileUrl, body, result, mediaUrl, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'ZLOKLOK';
                DOMAIN = "https://loklok.com";
                APIDOMAIN = "https://ga-mobile-api.loklok.tv/cms/app";
                _f.label = 1;
            case 1:
                _f.trys.push([1, 5, , 6]);
                urlSearch = "".concat(DOMAIN, "/search?keyword=").concat(libs.url_slug_search(movieInfo));
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                headerLokLok = {
                    versioncode: 11,
                    lang: 'en',
                    clienttype: 'ios_jike_default',
                    'sec-ch-ua-platform': '"macOS"',
                };
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch_1 = _f.sent();
                LINK_DETAIL_1 = '';
                libs.log({
                    length: parseSearch_1('div.search-list div.search-video-card').length,
                }, PROVIDER, 'LENGHT');
                parseSearch_1('div.search-list div.search-video-card').each(function (key, item) {
                    var title = parseSearch_1(item).find('h2.title').text();
                    var href = "".concat(DOMAIN).concat(parseSearch_1(item).find('a').attr('href'));
                    var parseYear = parseSearch_1(item).find('.desc').text();
                    parseYear = parseYear.split('.');
                    parseYear = Number(parseYear[0]);
                    var season = title.match(/season *([0-9]+)/i);
                    season = season ? season[1] : '';
                    title = title.replace(/season *[0-9]+/i, '').trim();
                    title = title.replace(/\[.*\]/i, '').trim();
                    var type = parseSearch_1(item).find(".tip").text();
                    libs.log({ title: title, href: href, parseYear: parseYear, season: season }, PROVIDER, "INFO");
                    if (movieInfo.title == title) {
                        if (movieInfo.type == 'movie' && type == 'movie') {
                            if (movieInfo.year == parseYear) {
                                LINK_DETAIL_1 = href;
                            }
                        }
                        else {
                            if (season == movieInfo.season || !season && movieInfo.season == 1) {
                                LINK_DETAIL_1 = href;
                            }
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, 'LINK_DETAIL');
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                splitDetail = LINK_DETAIL_1.split('/');
                id = splitDetail[splitDetail.length - 1];
                type = splitDetail[splitDetail.length - 2];
                libs.log({ splitDetail: splitDetail, id: id, type: type }, PROVIDER, 'TYPE');
                directUrl = "".concat(APIDOMAIN, "/movieDrama/get?id=").concat(id, "&category=").concat(type);
                return [4, libs.request_get(directUrl, headerLokLok)];
            case 3:
                parseDirect = _f.sent();
                libs.log({ parseDirect: parseDirect }, PROVIDER, 'PARSE DIRECT');
                if (parseDirect.code != '00000') {
                    return [2];
                }
                subs = [];
                codeId = '';
                quality = '';
                if (movieInfo.type == 'tv') {
                    for (_i = 0, _a = parseDirect.data.episodeVo; _i < _a.length; _i++) {
                        episodeItem = _a[_i];
                        if (episodeItem.seriesNo == movieInfo.episode) {
                            for (_b = 0, _c = episodeItem.subtitlingList; _b < _c.length; _b++) {
                                subItem = _c[_b];
                                subs.push({
                                    label: subItem.language,
                                    file: subItem.subtitlingUrl,
                                    kind: 'Captions'
                                });
                            }
                            codeId = episodeItem.definitionList[0].code;
                            quality = episodeItem.definitionList[0].description;
                        }
                    }
                }
                else {
                    episodeItem = parseDirect.data.episodeVo[0];
                    for (_d = 0, _e = episodeItem.subtitlingList; _d < _e.length; _d++) {
                        subItem = _e[_d];
                        subs.push({
                            label: subItem.language,
                            file: subItem.subtitlingUrl,
                            kind: 'Captions'
                        });
                    }
                    codeId = episodeItem.definitionList[0].code;
                    quality = episodeItem.definitionList[0].description;
                }
                libs.log({ codeId: codeId, quality: quality }, PROVIDER, 'CODE_ID');
                if (!codeId) {
                    return [2];
                }
                fileUrl = "".concat(APIDOMAIN, "/media/bathGetplayInfo");
                body = [{ "category": type, "contentId": id, "episodeId": parseDirect.data.id, "definition": codeId }];
                return [4, libs.request_post(fileUrl, {
                        versioncode: 11,
                        lang: 'en',
                        clienttype: 'ios_jike_default',
                        'sec-ch-ua-platform': '"macOS"',
                        'content-type': 'application/json'
                    }, body)];
            case 4:
                result = _f.sent();
                libs.log({ fileUrl: fileUrl, body: body, result: result, headerLokLok: headerLokLok }, PROVIDER, 'FILE ULR');
                if (result.code != '00000') {
                    return [2];
                }
                mediaUrl = Array.isArray(result.data) ? result.data[0] : result.data;
                libs.embed_callback(mediaUrl.mediaUrl, PROVIDER, PROVIDER, 'Hls', callback, 1, subs, [{ file: mediaUrl.mediaUrl, quality: Number(quality.replace(/p/i, '')) }]);
                return [3, 6];
            case 5:
                e_1 = _f.sent();
                libs.log(e_1, PROVIDER, "ERROR");
                return [3, 6];
            case 6: return [2, true];
        }
    });
}); };
