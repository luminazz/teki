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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, parseEmbed, parseHls, hlsData, hls1, hls2, _i, hlsData_1, hlsItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'RVIDSRC';
                DOMAIN = "https://v2.vidsrc.me";
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/embed/").concat(movieInfo.imdb_id, "/").concat(movieInfo.season, "-").concat(movieInfo.episode);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/embed/").concat(movieInfo.imdb_id);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _a.sent();
                parseEmbed = parseSearch('#player_iframe').attr('src');
                libs.log({ parseEmbed: parseEmbed }, PROVIDER, 'PARSE EMBED');
                if (!parseEmbed) {
                    return [2];
                }
                if (_.startsWith(parseEmbed, '/')) {
                    parseEmbed = "https:".concat(parseEmbed);
                }
                parseEmbed = parseEmbed.replace('https://rcp.vidsrc.me/rcp', 'https://v2.vidsrc.me/srcrcp');
                libs.log({
                    parseEmbed: parseEmbed
                }, PROVIDER, 'PARSE EMBED REPLACE');
                return [4, libs.request_get(parseEmbed, {
                        referer: 'https://v2.vidsrc.me/'
                    })];
            case 2:
                parseHls = _a.sent();
                hlsData = [];
                hls1 = parseHls.match(/hls\.loadSource\( *\"([^\"]+)/i);
                if (hls1) {
                    hlsData.push(hls1 ? hls1[1] : '');
                }
                hls2 = parseHls.match(/video\.setAttribute\(\"src\" *\, *\"([^\"]+)/i);
                if (hls2) {
                    hlsData.push(hls2 ? hls2[1] : '');
                }
                libs.log({ hlsData: hlsData }, PROVIDER, 'HLS DIRECT LINK');
                _i = 0, hlsData_1 = hlsData;
                _a.label = 3;
            case 3:
                if (!(_i < hlsData_1.length)) return [3, 6];
                hlsItem = hlsData_1[_i];
                return [4, libs.embed_callback(hlsItem, PROVIDER, PROVIDER, 'HLS', callback, 1, [], [{ file: hlsItem, quality: 1080 }], {
                        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
                        referer: 'https://vidsrc.stream/',
                    })];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                _i++;
                return [3, 3];
            case 6: return [2, true];
        }
    });
}); };
