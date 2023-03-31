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
callbacksEmbed["wsoap2day"] = function (dataCallback, provider, host, callback, metadata) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN_1, parseCode, cookieData, userAgent, htmlSearch, textSearch, parseSearch_1, LINK_DETAIL_1, LINK_DETAIL_TV_1, htmlTV, textTv, parseTv_1, htmlDetail, textDetail, parseDetail, id, divU, extra, e2, body, urlDirect, dataDirect, textData, parseDirect, directUrl, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 11, , 12]);
                libs.log({ dataCallback: dataCallback }, provider, 'datacallback');
                DOMAIN_1 = 'https://soap2day.to';
                parseCode = JSON.parse(dataCallback);
                cookieData = parseCode.cookie || '';
                userAgent = parseCode.agent || '';
                libs.log({ cookieData: cookieData, userAgent: userAgent }, provider, 'CALLBACK');
                return [4, libs.cookies_clearAll()];
            case 1:
                _a.sent();
                return [4, fetch("".concat(DOMAIN_1, "/search/keyword/").concat(libs.url_slug_search(metadata.movieInfo, '%20')), {
                        redirect: 'manual',
                        "headers": {
                            "cookie": cookieData,
                            "user-agent": userAgent,
                            "referer": "https://soap2day.to/enter.html"
                        },
                        credentials: 'include',
                    })];
            case 2:
                htmlSearch = _a.sent();
                return [4, htmlSearch.text()];
            case 3:
                textSearch = _a.sent();
                parseSearch_1 = cheerio.load(textSearch);
                LINK_DETAIL_1 = '';
                libs.log({
                    length: parseSearch_1('.thumbnail.text-center').length
                }, provider, 'SEARCH LENGTH');
                parseSearch_1('.thumbnail.text-center').each(function (key, item) {
                    var titleType = parseSearch_1(item).find('h5').text();
                    var title = parseSearch_1(item).find('h5 a').first().text();
                    var href = parseSearch_1(item).find('h5 a').attr('href');
                    var year = parseSearch_1(item).find('.img-group .img-tip').text();
                    var type = 'movie';
                    var season = titleType.match(/(\[ *[0-9]+)/i);
                    if (season) {
                        type = 'tv';
                    }
                    libs.log({ titleType: titleType, title: title, href: href, year: year, type: type }, provider, 'SEARCH INFO');
                    if (title && href && !LINK_DETAIL_1 && type) {
                        if (libs.string_matching_title(metadata.movieInfo, title)) {
                            if (metadata.movieInfo.type == 'tv' && type.toLowerCase() == 'tv') {
                                LINK_DETAIL_1 = _.startsWith(href, '/') ? "".concat(DOMAIN_1).concat(href) : href;
                            }
                            if (metadata.movieInfo.type == 'movie' && type.toLowerCase() == 'movie' && metadata.movieInfo.year == year) {
                                LINK_DETAIL_1 = _.startsWith(href, '/') ? "".concat(DOMAIN_1).concat(href) : href;
                            }
                        }
                    }
                });
                libs.log({
                    LINK_DETAIL: LINK_DETAIL_1
                }, provider, 'LINK DETAIL');
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                LINK_DETAIL_TV_1 = '';
                if (!(metadata.movieInfo.type == 'tv')) return [3, 6];
                return [4, fetch(LINK_DETAIL_1, {
                        redirect: 'manual',
                        "headers": {
                            "cookie": cookieData,
                            "user-agent": userAgent,
                        },
                        credentials: 'include',
                    })];
            case 4:
                htmlTV = _a.sent();
                return [4, htmlTV.text()];
            case 5:
                textTv = _a.sent();
                parseTv_1 = cheerio.load(textTv);
                libs.log({
                    length_tv: parseTv_1('.row .alert').length
                }, provider, 'LENGTH TV');
                parseTv_1('.row .alert').each(function (key, item) {
                    var season = parseTv_1(item).find('h4').text();
                    season = season.match(/([0-9]+)/i);
                    season = season ? season[1] : -1;
                    libs.log({ season: season }, provider, 'SEASON');
                    if (season == metadata.movieInfo.season) {
                        libs.log({
                            length_episode: parseTv_1(item).find('a').length
                        }, provider, 'length episode');
                        parseTv_1(item).find('a').each(function (key1, item1) {
                            var episode = parseTv_1(item1).text();
                            episode = episode.match(/^([0-9]+)/i);
                            episode = episode ? episode[1] : -1;
                            var hrefEpispode = parseTv_1(item1).attr('href');
                            libs.log({
                                text: parseTv_1(item1).text(),
                                episode: episode,
                                hrefEpispode: hrefEpispode
                            }, provider, 'EPISODE');
                            if (episode == metadata.movieInfo.episode) {
                                LINK_DETAIL_TV_1 = "".concat(DOMAIN_1).concat(hrefEpispode);
                            }
                        });
                    }
                });
                if (!LINK_DETAIL_TV_1) {
                    return [2];
                }
                LINK_DETAIL_1 = LINK_DETAIL_TV_1;
                _a.label = 6;
            case 6: return [4, fetch(LINK_DETAIL_1, {
                    redirect: 'manual',
                    "headers": {
                        "cookie": cookieData,
                        "user-agent": userAgent,
                    },
                    credentials: 'include',
                })];
            case 7:
                htmlDetail = _a.sent();
                return [4, htmlDetail.text()];
            case 8:
                textDetail = _a.sent();
                parseDetail = cheerio.load(textDetail);
                id = parseDetail('#hId').attr('value');
                divU = parseDetail('#divU').text();
                extra = '';
                e2 = 1;
                libs.log({
                    id: id,
                    divU: divU,
                }, provider, 'PARAM BODY');
                body = qs.stringify({
                    pass: id,
                    param: divU,
                    extra: extra,
                    e2: e2
                });
                urlDirect = "".concat(DOMAIN_1, "/home/index/").concat(metadata.movieInfo.type == 'movie' ? 'GetMInfoAjax' : 'GetEInfoAjax');
                return [4, fetch(urlDirect, {
                        "headers": {
                            "cookie": cookieData,
                            "user-agent": userAgent,
                            "referer": LINK_DETAIL_1,
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        body: body,
                        method: "POST",
                        credentials: 'include',
                    })];
            case 9:
                dataDirect = _a.sent();
                return [4, dataDirect.text()];
            case 10:
                textData = _a.sent();
                parseDirect = JSON.parse(textData);
                libs.log({ parseDirect: parseDirect }, provider, 'TEXT DATA');
                directUrl = parseDirect.val || '';
                libs.log({ directUrl: directUrl }, provider, 'DIRECT URL');
                if (!directUrl) {
                    return [2];
                }
                libs.embed_callback(directUrl, provider, provider, 'Hls', callback, 1, [], [{ file: directUrl, quality: 1080 }], {}, {
                    is_end_webview: true,
                    url_webview: metadata.url_webview || ''
                });
                return [3, 12];
            case 11:
                e_1 = _a.sent();
                libs.log({
                    e: e_1
                }, provider, 'ERROR');
                return [3, 12];
            case 12: return [2];
        }
    });
}); };
