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
    var PROVIDER, DOMAIN, urlSearch, LINK_DETAIL_1, parseSearch_1, id, shareLink, parseShareLink, parseShareLink, shareId, febboxEmbed, parseFeb, fileList, parentId, _i, _a, item, sName, urlEpisode, parseEpisode, _b, _c, item, _d, fileList_1, item, ossID, directUrl, parseDirect, directQuality, qualityMatch, _e, qualityMatch_1, quality, q, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'WFebbox';
                DOMAIN = "https://www.showbox.media";
                _f.label = 1;
            case 1:
                _f.trys.push([1, 12, , 13]);
                urlSearch = "".concat(DOMAIN, "/search?keyword=").concat(libs.url_slug_search(movieInfo, '+'));
                LINK_DETAIL_1 = "";
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch_1 = _f.sent();
                parseSearch_1("div.film_list-wrap div.flw-item").each(function (key, item) {
                    var href = parseSearch_1(item).find("h2.film-name a").attr("href");
                    var title = parseSearch_1(item).find("h2.film-name a").text();
                    var year = parseSearch_1(item).find("div.fd-infor > span:first-child").text();
                    var type = parseSearch_1(item).find("div.fd-infor > span:last-child").text();
                    libs.log({ href: href, title: title, year: year, type: type }, PROVIDER, "SEARCH_INFO");
                    if (href && title && type && !LINK_DETAIL_1) {
                        type = type.toLowerCase() == "movie" ? "movie" : "tv";
                        if (libs.string_matching_title(movieInfo, title)) {
                            if (movieInfo.type == 'tv' && type.toLowerCase() == 'tv') {
                                LINK_DETAIL_1 = href;
                            }
                            if (movieInfo.type == 'movie' && type.toLowerCase() == 'movie' && movieInfo.year == year) {
                                LINK_DETAIL_1 = href;
                            }
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, 'LINK_DETAIL');
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                id = LINK_DETAIL_1.match(/detail\/([0-9]+)/i);
                id = id ? id[1] : '';
                libs.log({ id: id }, PROVIDER, 'ID');
                if (!id) {
                    return [2];
                }
                shareLink = "".concat(DOMAIN, "/index/share_link?id=").concat(id, "&type=").concat(movieInfo.type == "movie" ? "1" : "2");
                return [4, libs.request_get(shareLink, {})];
            case 3:
                parseShareLink = _f.sent();
                libs.log({ parseShareLink: parseShareLink, shareLink: shareLink }, PROVIDER, 'PARSE SHARE LINK');
                if (!parseShareLink || !parseShareLink.data || !parseShareLink.data.link) {
                    return [2];
                }
                parseShareLink = parseShareLink.data.link.split("/");
                shareId = parseShareLink[parseShareLink.length - 1];
                libs.log({ shareId: shareId }, PROVIDER, 'SHAREID');
                if (!shareId) {
                    return [2];
                }
                febboxEmbed = "https://www.febbox.com/file/file_share_list?share_key=".concat(shareId);
                return [4, libs.request_get(febboxEmbed)];
            case 4:
                parseFeb = _f.sent();
                libs.log({ parseFeb: parseFeb }, PROVIDER, 'PARSE FEB');
                if (!parseFeb || !parseFeb.data || !parseFeb.data.file_list) {
                    return [2];
                }
                fileList = [];
                if (!(movieInfo.type == 'movie')) return [3, 5];
                fileList = parseFeb.data.file_list;
                return [3, 7];
            case 5:
                parentId = "";
                for (_i = 0, _a = parseFeb.data.file_list; _i < _a.length; _i++) {
                    item = _a[_i];
                    sName = item.file_name.match(/season *([0-9]+)/i);
                    sName = sName ? sName[1] : 0;
                    libs.log({ sName: sName }, PROVIDER, "SNAME");
                    if (sName == movieInfo.season) {
                        parentId = item.fid;
                    }
                }
                libs.log({ parentId: parentId }, PROVIDER, 'PARENT ID');
                if (!parentId) {
                    return [2];
                }
                urlEpisode = "https://www.febbox.com/file/file_share_list?share_key=".concat(shareId, "&parent_id=").concat(parentId, "&page=1");
                return [4, libs.request_get(urlEpisode)];
            case 6:
                parseEpisode = _f.sent();
                if (!parseEpisode || !parseEpisode.data || !parseEpisode.data.file_list) {
                    return [2];
                }
                for (_b = 0, _c = parseEpisode.data.file_list; _b < _c.length; _b++) {
                    item = _c[_b];
                    if (item.file_name.indexOf("s".concat(movieInfo.season < 10 ? "0".concat(movieInfo.season) : movieInfo.season, "e").concat(movieInfo.episode < 10 ? "0".concat(movieInfo.episode) : movieInfo.episode)) != -1) {
                        fileList.push(item);
                    }
                }
                _f.label = 7;
            case 7:
                libs.log({ fileList: fileList }, PROVIDER, 'FILE LIST');
                if (fileList.length == 0) {
                    return [2];
                }
                _d = 0, fileList_1 = fileList;
                _f.label = 8;
            case 8:
                if (!(_d < fileList_1.length)) return [3, 11];
                item = fileList_1[_d];
                ossID = item.oss_fid;
                directUrl = "https://www.febbox.com/hls/main/".concat(ossID, ".m3u8");
                libs.log({ directUrl: directUrl }, PROVIDER, 'DIRECT URL');
                return [4, libs.request_get(directUrl)];
            case 9:
                parseDirect = _f.sent();
                directQuality = [];
                qualityMatch = parseDirect.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                libs.log({ qualityMatch: qualityMatch }, PROVIDER, 'QUALITY MATCH');
                if (!qualityMatch) {
                    return [3, 10];
                }
                for (_e = 0, qualityMatch_1 = qualityMatch; _e < qualityMatch_1.length; _e++) {
                    quality = qualityMatch_1[_e];
                    q = quality.match(/quality\=([0-9A-z_]+)/i);
                    q = q ? q[1] : "";
                    if (!q) {
                        q = 1080;
                    }
                    else {
                        if (q.indexOf("4k") != -1) {
                            q = 2160;
                        }
                        else if (q.indexOf("stereo") != -1) {
                            q = 720;
                        }
                        else {
                            q = Number(q);
                        }
                    }
                    if (isNaN(q)) {
                        q = 1080;
                    }
                    if (q < 360) {
                        q = 360;
                    }
                    directQuality.push({
                        file: quality,
                        quality: q
                    });
                }
                libs.log({ directQuality: directQuality }, PROVIDER, 'DIRECT QUALITY');
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality);
                _f.label = 10;
            case 10:
                _d++;
                return [3, 8];
            case 11: return [3, 13];
            case 12:
                e_1 = _f.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 13];
            case 13: return [2, true];
        }
    });
}); };
