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
    function deobfstr(_0x1dbe96, _0x1ddb3a) {
        _0x1ddb3a = _0x1ddb3a['toString']();
        var _0x4c518c = '';
        for (var _0x2f1b4f = 0x0; _0x2f1b4f < _0x1dbe96['length']; _0x2f1b4f += 0x2) {
            var _0xee7ec2 = _0x1dbe96['substr'](_0x2f1b4f, 0x2);
            _0x4c518c += String['fromCharCode'](parseInt(_0xee7ec2, 0x10) ^ _0x1ddb3a['charCodeAt'](_0x2f1b4f / 0x2 % _0x1ddb3a['length']));
        }
        return _0x4c518c;
    }
    var PROVIDER, DOMAIN, userAgent, urlSearch, parseSearch, parseEmbed, cookieUrlSearchData_t, parseRcp, id, hash, refererDirect, parseDirect, parseFile, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                PROVIDER = 'RVIDSRC';
                DOMAIN = "https://vidsrc.xyz";
                userAgent = libs.request_getRandomUserAgent();
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/embed/tv?tmdb=").concat(movieInfo.tmdb_id, "&season=").concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/embed/movie?tmdb=").concat(movieInfo.tmdb_id);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {
                        'user-agent': userAgent,
                    }, true)];
            case 1:
                parseSearch = _a.sent();
                parseEmbed = parseSearch('#player_iframe').attr('src');
                return [4, libs.cookies_get(urlSearch)];
            case 2:
                cookieUrlSearchData_t = _a.sent();
                return [4, libs.cookies_clearAll()];
            case 3:
                _a.sent();
                libs.log({ parseEmbed: parseEmbed, cookieUrlSearchData_t: cookieUrlSearchData_t }, PROVIDER, 'PARSE EMBED');
                if (!parseEmbed) {
                    return [2];
                }
                if (_.startsWith(parseEmbed, '/')) {
                    parseEmbed = "https:".concat(parseEmbed);
                }
                libs.log({
                    parseEmbed: parseEmbed,
                    urlSearch: urlSearch
                }, PROVIDER, 'PARSE EMBED REPLACE');
                return [4, libs.request_get(parseEmbed, {
                        'user-agent': userAgent,
                        Referer: urlSearch,
                    })];
            case 4:
                parseRcp = _a.sent();
                id = parseRcp.match(/data\-i\=\"([^\"]+)/i);
                id = id ? id[1] : '';
                hash = parseRcp.match(/data\-h\=\"([^\"]+)/i);
                hash = hash ? hash[1] : '';
                libs.log({ id: id, hash: hash }, PROVIDER, 'ID HASH');
                if (!id || !hash) {
                    return [2];
                }
                refererDirect = deobfstr(hash, id);
                libs.log({ refererDirect: refererDirect }, PROVIDER, 'refererDirect');
                if (_.startsWith(refererDirect, '/')) {
                    refererDirect = "https:".concat(refererDirect);
                }
                return [4, libs.request_get(refererDirect, {
                        'user-agent': userAgent,
                        Referer: parseEmbed,
                    })];
            case 5:
                parseDirect = _a.sent();
                parseFile = parseDirect.match(/file *\: *\"([^\"]+)/i);
                parseFile = parseFile ? parseFile[1] : "";
                libs.log({ parseFile: parseFile }, PROVIDER, 'PARSE FILE');
                if (!parseFile) {
                    return [2];
                }
                parseFile = parseFile.replace("#2", '');
                parseFile = parseFile.replace(/(\/\/\S+?=)/g, "");
                parseFile = libs.string_base64_decode(parseFile);
                libs.log({ parseFile: parseFile, userAgent: userAgent }, PROVIDER, 'PARSE FILE REPLACE');
                libs.embed_callback(parseFile, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: parseFile, quality: 1080 }], {
                    Referer: "https://vidsrc.stream/",
                    'User-Agent': userAgent,
                });
                return [2, true];
            case 6:
                e_1 = _a.sent();
                return [3, 7];
            case 7: return [2];
        }
    });
}); };
