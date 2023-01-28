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
    var PROVIDER, DOMAIN, urlSearch, parseSearch_1, directUrl_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'DNoverse';
                DOMAIN = "https://nollyverse.com";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                urlSearch = '';
                if (movieInfo.type == 'movie') {
                    urlSearch = "".concat(DOMAIN, "/movie/").concat(libs.url_slug_search(movieInfo), "/download/");
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/serie/").concat(libs.url_slug_search(movieInfo), "/season-").concat(movieInfo.season);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch_1 = _a.sent();
                directUrl_1 = [];
                libs.log({ length: parseSearch_1('.table-striped tbody tr').length }, PROVIDER, 'LENGTH');
                if (movieInfo.type == 'movie') {
                    parseSearch_1('.table-striped tbody tr').each(function (key, item) {
                        var quality = parseSearch_1(item).find('td').first().text();
                        var link = parseSearch_1(item).find('td').last().find('a').attr('href');
                        var realQuality = quality.match(/([0-9]+)/i);
                        realQuality = realQuality ? Number(realQuality[1]) : 720;
                        libs.log({ quality: quality, link: link, realQuality: realQuality, movieInfo: movieInfo }, PROVIDER, 'INFO');
                        if (link && link.indexOf('.mkv') != -1 && movieInfo.platform && movieInfo.platform == 'android') {
                            directUrl_1.push({ quality: quality, file: link });
                        }
                    });
                }
                else {
                    parseSearch_1('.table-striped tbody tr').each(function (key, item) {
                        var episode = parseSearch_1(item).find('td').first().text();
                        var parseEpisode = episode.match(/([0-9]+)/i);
                        parseEpisode = parseEpisode ? Number(parseEpisode[1]) : 0;
                        libs.log({ episode: episode, parseEpisode: parseEpisode }, PROVIDER, 'PARSE EPISODE');
                        if (movieInfo.episode == parseEpisode) {
                            libs.log({
                                length_episode: parseSearch_1(item).find('td').length
                            }, PROVIDER, 'LENGTH EPISODE');
                            parseSearch_1(item).find('td').each(function (keyLink, itemLink) {
                                var link = parseSearch_1(itemLink).find('a').attr('href');
                                libs.log({ link: link }, PROVIDER, 'LINK TV');
                                if (link && (link.indexOf('.mp4') != -1 || link.indexOf('.mkv') != -1)) {
                                    var quality = link.match(/\.([0-9]+)p\./i);
                                    quality = quality ? Number(quality[1]) : 720;
                                    libs.log({ quality: quality, link: link }, PROVIDER, 'QUALITY');
                                    if (link && link.indexOf('.mkv') != -1 && movieInfo.platform && movieInfo.platform == 'android') {
                                        directUrl_1.push({ quality: quality, file: link });
                                    }
                                }
                            });
                        }
                    });
                }
                if (!directUrl_1.length) {
                    return [2];
                }
                libs.log({ directUrl: directUrl_1 }, PROVIDER, 'DIRECT URL');
                directUrl_1 = _.uniqBy(directUrl_1, 'quality');
                directUrl_1 = _.orderBy(directUrl_1, ['quality'], ['desc']);
                return [4, libs.embed_callback(directUrl_1[0].file, PROVIDER, PROVIDER, 'HLS', callback, 1, [], directUrl_1)];
            case 3:
                _a.sent();
                return [3, 5];
            case 4:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR CATCH');
                return [3, 5];
            case 5: return [2, true];
        }
    });
}); };
