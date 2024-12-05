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
    function parseM3U8(content) {
        var lines = content.split('\n').filter(function (line) { return line.trim() !== ''; });
        var result = [];
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('#EXT-X-STREAM-INF:')) {
                var resolutionMatch = lines[i].match(/RESOLUTION=(\d+)x(\d+)/);
                if (resolutionMatch && lines[i + 1]) {
                    var quality = parseInt(resolutionMatch[2]);
                    var file = lines[i + 1];
                    if (!file) {
                        continue;
                    }
                    file += ".m3u8";
                    result.push({
                        file: file,
                        quality: quality
                    });
                }
                i++;
            }
        }
        return result;
    }
    var PROVIDER, DOMAIN, userAgent, urlSearch, parseSearch, LINK_DETAIL, ID, index, title, year, href, type, season, parseDetail_1, sourceData_2, iframeUrl, _i, sourceData_1, sourceItem, urlAjax, body, headers, resultAjax, embedUrl, parseEmbedUrl, _a, iframeUrl_1, iframeItem, headerAkamai, fAkamai, textAkamai, sniff, parseSniff, uid, md5, directUrl, parseDirect, textDirect, m3u8Data, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'KHDMOVIE2';
                DOMAIN = "https://hdmovie2.ad";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 15, , 16]);
                userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36";
                urlSearch = "".concat(DOMAIN, "/wp-json/dooplay/search/?keyword=").concat(libs.url_slug_search(movieInfo, '%20'), "&nonce=1827d015db");
                return [4, libs.request_get(urlSearch, {}, false)];
            case 2:
                parseSearch = _b.sent();
                LINK_DETAIL = "";
                ID = "";
                libs.log({ parseSearch: parseSearch }, PROVIDER, 'SEARCH');
                for (index in parseSearch) {
                    title = parseSearch[index]['title'];
                    year = parseSearch[index]['extra']['date'];
                    href = parseSearch[index]['url'];
                    type = 'movie';
                    season = title.match(/season *([0-9]+)/i);
                    season = season ? season[1] : 0;
                    if (season) {
                        type = 'tv';
                    }
                    title = title.replace(/ *\(.*/i, "").trim();
                    libs.log({ title: title, href: href, year: year, type: type, season: season }, PROVIDER, 'SEARCH ITEM');
                    if (title && href && !LINK_DETAIL) {
                        if (libs.string_matching_title(movieInfo, title)) {
                            if (movieInfo.type == 'tv' && type == 'tv' && season == movieInfo.season) {
                                LINK_DETAIL = href;
                                ID = index;
                            }
                            else if (movieInfo.type == 'movie' && type == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL = href;
                                ID = index;
                            }
                        }
                    }
                }
                libs.log({ LINK_DETAIL: LINK_DETAIL, ID: ID }, PROVIDER, 'LINK_DETAIL');
                if (!LINK_DETAIL) {
                    return [2];
                }
                return [4, libs.request_get(LINK_DETAIL, {}, true)];
            case 3:
                parseDetail_1 = _b.sent();
                sourceData_2 = [];
                libs.log({ length: parseDetail_1('ul#playeroptionsul > li').length }, PROVIDER, 'SEARCH LENGTH');
                parseDetail_1('ul#playeroptionsul > li').each(function (key, item) {
                    var id = parseDetail_1(item).attr('data-post');
                    var nume = parseDetail_1(item).attr('data-nume');
                    var episodeName = parseDetail_1(item).find('.title').text();
                    var episode = episodeName.match(/EP([0-9]+)/i);
                    episode = episode ? episode[1] : 0;
                    libs.log({ id: id, nume: nume, episode: episode, episodeName: episodeName }, PROVIDER, 'NUME');
                    if (movieInfo.type == 'movie') {
                        sourceData_2.push({
                            id: id,
                            nume: nume
                        });
                    }
                    else {
                        if (episode == movieInfo.episode) {
                            sourceData_2.push({
                                id: id,
                                nume: nume
                            });
                        }
                    }
                });
                iframeUrl = [];
                _i = 0, sourceData_1 = sourceData_2;
                _b.label = 4;
            case 4:
                if (!(_i < sourceData_1.length)) return [3, 7];
                sourceItem = sourceData_1[_i];
                urlAjax = "".concat(DOMAIN, "/wp-admin/admin-ajax.php");
                body = "action=doo_player_ajax&post=".concat(sourceItem.id, "&nume=").concat(sourceItem.nume, "&type=").concat(movieInfo.type);
                headers = {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    referer: DOMAIN,
                    'X-Requested-With': 'XMLHttpRequest'
                };
                libs.log({ urlAjax: urlAjax, body: body, headers: headers }, PROVIDER, 'AJAX INFO');
                return [4, libs.request_post(urlAjax, headers, body)];
            case 5:
                resultAjax = _b.sent();
                libs.log({ resultAjax: resultAjax }, PROVIDER, 'RESULT AJAX');
                embedUrl = resultAjax.embed_url;
                if (!embedUrl) {
                    return [3, 6];
                }
                parseEmbedUrl = embedUrl.match(/src=\"([^\"]+)/i);
                if (!parseEmbedUrl) {
                    parseEmbedUrl = embedUrl.match(/src=([^ *]+)/i);
                }
                parseEmbedUrl = parseEmbedUrl ? parseEmbedUrl[1] : "";
                libs.log({ parseEmbedUrl: parseEmbedUrl }, PROVIDER, 'PARSE EMBED URL');
                if (!parseEmbedUrl) {
                    return [3, 6];
                }
                iframeUrl.push(parseEmbedUrl);
                _b.label = 6;
            case 6:
                _i++;
                return [3, 4];
            case 7:
                libs.log({ iframeUrl: iframeUrl }, PROVIDER, 'IFRAME URL');
                _a = 0, iframeUrl_1 = iframeUrl;
                _b.label = 8;
            case 8:
                if (!(_a < iframeUrl_1.length)) return [3, 14];
                iframeItem = iframeUrl_1[_a];
                if (iframeItem.indexOf('akamaicdn') == -1) {
                    return [3, 13];
                }
                headerAkamai = {
                    Referer: DOMAIN,
                    'user-agent': userAgent,
                };
                return [4, fetch(iframeItem, {
                        headers: headerAkamai
                    })];
            case 9:
                fAkamai = _b.sent();
                return [4, fAkamai.text()];
            case 10:
                textAkamai = _b.sent();
                sniff = textAkamai.match(/sniff\(([^\)]+)/i);
                sniff = sniff ? sniff[1] : "";
                libs.log({ sniff: sniff, iframeItem: iframeItem }, PROVIDER, 'SNIFF');
                if (!sniff) {
                    return [3, 13];
                }
                parseSniff = sniff.split(",");
                libs.log({ parseSniff: parseSniff }, PROVIDER, 'PARSE SNIFF');
                uid = parseSniff[1].replace(/\"/g, "");
                md5 = parseSniff[2].replace(/\"/g, "");
                directUrl = "https://akamaicdn.life" + "/m3u8/" + "".concat(uid, "/").concat(md5, "/master.txt?s=1&cache=1");
                libs.log({ directUrl: directUrl }, PROVIDER, 'DIRECT URL');
                return [4, fetch(directUrl)];
            case 11:
                parseDirect = _b.sent();
                return [4, parseDirect.text()];
            case 12:
                textDirect = _b.sent();
                m3u8Data = parseM3U8(textDirect);
                libs.log({ m3u8Data: m3u8Data }, PROVIDER, 'M3u8 data');
                if (!m3u8Data.length) {
                    return [3, 13];
                }
                libs.embed_callback(m3u8Data[0].file, PROVIDER, PROVIDER, 'hls', callback, 1, [], m3u8Data, {
                    Referer: directUrl,
                    "User-Agent": userAgent
                });
                _b.label = 13;
            case 13:
                _a++;
                return [3, 8];
            case 14: return [2, true];
            case 15:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 16];
            case 16: return [2];
        }
    });
}); };
