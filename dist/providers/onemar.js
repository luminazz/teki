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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, LINK_ID, _i, parseSearch_1, parseItem, title, type, id, urlEmbed, embedData, directUrl, subs, tracks, _a, subs_1, item, _b, _c, item, _d, _e, itemE, embed, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'ZOneMar';
                DOMAIN = "https://softexploit.com";
                _f.label = 1;
            case 1:
                _f.trys.push([1, 4, , 5]);
                urlSearch = "".concat(DOMAIN, "/movies/search?name=").concat(encodeURIComponent(movieInfo.title.toLowerCase()));
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/series/search?name=").concat(encodeURIComponent(movieInfo.title.toLowerCase()));
                }
                return [4, libs.request_get(urlSearch, {})];
            case 2:
                parseSearch = _f.sent();
                libs.log({ urlSearch: urlSearch, parseSearch: parseSearch }, PROVIDER, "URL SEARCH");
                LINK_ID = "";
                for (_i = 0, parseSearch_1 = parseSearch; _i < parseSearch_1.length; _i++) {
                    parseItem = parseSearch_1[_i];
                    title = parseItem.title;
                    type = parseItem.type;
                    id = parseItem._id;
                    libs.log({ title: title, type: type }, PROVIDER, "SEARCH INFO");
                    if (title && type) {
                        if (libs.string_matching_title(movieInfo, title)) {
                            if (movieInfo.type == 'tv' && type == 'tv') {
                                LINK_ID = id;
                            }
                            else if (movieInfo.type == 'movie' && type == 'movie') {
                                LINK_ID = id;
                            }
                        }
                    }
                }
                libs.log({ LINK_ID: LINK_ID }, PROVIDER, "LINK_ID");
                if (!LINK_ID) {
                    return [2];
                }
                urlEmbed = "https://softexploit.com/movie/".concat(LINK_ID, "?season=1&episode=1");
                if (movieInfo.type == 'tv') {
                    urlEmbed = "https://softexploit.com/serie/".concat(LINK_ID, "?season=").concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                }
                libs.log({ urlEmbed: urlEmbed }, PROVIDER, "URL EMBED");
                return [4, libs.request_get(urlEmbed)];
            case 3:
                embedData = _f.sent();
                libs.log({ embedData: embedData }, PROVIDER, "EMBED DATA");
                if (movieInfo.type == 'movie') {
                    directUrl = embedData.video.link;
                    subs = embedData.video.captions;
                    tracks = [];
                    for (_a = 0, subs_1 = subs; _a < subs_1.length; _a++) {
                        item = subs_1[_a];
                        tracks.push({
                            file: item.file,
                            kind: 'captions',
                            label: item.label
                        });
                    }
                    if (directUrl.indexOf(".m3u8") != -1) {
                        libs.embed_callback(directUrl, PROVIDER, PROVIDER, '1080', callback, 1, tracks, [{ file: directUrl, quality: 1080 }]);
                    }
                    else {
                        libs.embed_redirect(directUrl, '', movieInfo, PROVIDER, callback, '');
                    }
                }
                if (movieInfo.type == 'tv') {
                    for (_b = 0, _c = embedData.seasons; _b < _c.length; _b++) {
                        item = _c[_b];
                        if (Number(item.number) != movieInfo.season) {
                            continue;
                        }
                        for (_d = 0, _e = item.episodes; _d < _e.length; _d++) {
                            itemE = _e[_d];
                            if (Number(itemE.number) != movieInfo.episode) {
                                continue;
                            }
                            for (embed in itemE.providers) {
                                if (itemE.providers[embed].sourceIframe) {
                                    libs.embed_redirect(itemE.providers[embed].sourceIframe, '', movieInfo, PROVIDER, callback, '');
                                }
                                try {
                                    if (itemE.providers[embed].sourceIframe.video.link) {
                                        libs.embed_callback(itemE.providers[embed].sourceIframe.video.link, PROVIDER, PROVIDER, '1080', callback, 1, tracks, [{ file: itemE.providers[embed].sourceIframe.video.link, quality: 1080 }]);
                                    }
                                }
                                catch (error) { }
                            }
                        }
                    }
                }
                return [3, 5];
            case 4:
                e_1 = _f.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR CATCH');
                return [3, 5];
            case 5: return [2, true];
        }
    });
}); };
