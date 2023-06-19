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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, embeds, _i, parseSearch_1, parseItem, s, tmdbId, _a, _b, embedItem, _c, _d, embedItem, _e, embeds_1, item, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = 'WXCine';
                DOMAIN = "https://api.xcine.info";
                _f.label = 1;
            case 1:
                _f.trys.push([1, 3, , 4]);
                urlSearch = "https://api.xcine.info/data/search/?lang=1&keyword=".concat(movieInfo.title.replace(/\+/ig, ""));
                return [4, libs.request_get(urlSearch, {})];
            case 2:
                parseSearch = _f.sent();
                libs.log({ urlSearch: urlSearch, parseSearch: parseSearch }, PROVIDER, "PARSE SEARCH");
                embeds = [];
                for (_i = 0, parseSearch_1 = parseSearch; _i < parseSearch_1.length; _i++) {
                    parseItem = parseSearch_1[_i];
                    s = parseItem.s;
                    tmdbId = parseItem.imdb_id;
                    libs.log({
                        s: s,
                        tmdbId: tmdbId
                    }, PROVIDER, "SEARCH INFO");
                    if (movieInfo.imdb_id == tmdbId) {
                        if (movieInfo.type == 'tv' && Number(s) == movieInfo.season) {
                            for (_a = 0, _b = parseItem.streams; _a < _b.length; _a++) {
                                embedItem = _b[_a];
                                if (embedItem.stream && embedItem.stream.indexOf("streamtape") != -1 && embedItem.stream.indexOf(".mkv") == -1) {
                                    embeds.push(embedItem.stream);
                                }
                            }
                        }
                        if (movieInfo.type == 'movie') {
                            for (_c = 0, _d = parseItem.streams; _c < _d.length; _c++) {
                                embedItem = _d[_c];
                                if (embedItem.stream && embedItem.stream.indexOf("streamtape") != -1 && embedItem.stream.indexOf(".mkv") == -1) {
                                    embeds.push(embedItem.stream);
                                }
                            }
                        }
                    }
                }
                libs.log({ embeds: embeds }, PROVIDER, "EMBED");
                if (!embeds.length) {
                    return [2];
                }
                for (_e = 0, embeds_1 = embeds; _e < embeds_1.length; _e++) {
                    item = embeds_1[_e];
                    libs.embed_redirect(item, '', movieInfo, PROVIDER, callback, '');
                }
                return [3, 4];
            case 3:
                e_1 = _f.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR CATCH');
                return [3, 4];
            case 4: return [2, true];
        }
    });
}); };
