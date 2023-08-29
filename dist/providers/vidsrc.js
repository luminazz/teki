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
    var PROVIDER, DOMAIN, userAgent, urlSearch, parseSearch, parseEmbed, parseHls, id, hash, refererDirect, fetchHeader, streamUrl, parseStream, hls, setPass, parseSetPass, domainEmbed, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                PROVIDER = 'RVIDSRC';
                DOMAIN = "https://v2.vidsrc.me";
                userAgent = libs.request_getRandomUserAgent();
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/embed/").concat(movieInfo.imdb_id, "/").concat(movieInfo.season, "-").concat(movieInfo.episode);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/embed/").concat(movieInfo.imdb_id);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {
                        'user-agent': userAgent,
                    }, true)];
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
                libs.log({
                    parseEmbed: parseEmbed
                }, PROVIDER, 'PARSE EMBED REPLACE');
                return [4, libs.request_get(parseEmbed, {
                        referer: urlSearch
                    })];
            case 2:
                parseHls = _a.sent();
                id = parseHls.match(/data\-i\=\"([^\"]+)/i);
                id = id ? id[1] : '';
                hash = parseHls.match(/data\-h\=\"([^\"]+)/i);
                hash = hash ? hash[1] : '';
                libs.log({ hash: hash, id: id }, PROVIDER, 'HLS');
                if (!id || !hash) {
                    return [2];
                }
                refererDirect = deobfstr(hash, id);
                libs.log({ refererDirect: refererDirect }, PROVIDER, 'refererDirect');
                if (!refererDirect) {
                    return [2];
                }
                if (_.startsWith(refererDirect, '/')) {
                    refererDirect = 'https:' + refererDirect;
                }
                return [4, fetch(refererDirect, {
                        headers: {
                            Referer: parseEmbed,
                            'user-agent': userAgent,
                        },
                        redirect: 'manual',
                        method: 'HEAD'
                    })];
            case 3:
                fetchHeader = _a.sent();
                libs.log({ fetchHeader: fetchHeader }, PROVIDER, 'fetchHeader');
                streamUrl = fetchHeader.url;
                libs.log({ streamUrl: streamUrl }, PROVIDER, 'STREAM URL');
                if (!streamUrl) {
                    return [2];
                }
                return [4, libs.request_get(streamUrl, {
                        Referer: refererDirect,
                        'user-agent': userAgent,
                        Host: 'vidsrc.stream',
                        'Connection': 'keep-alive',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                        'Sec-Fetch-Site': 'cross-site',
                        'Sec-Fetch-Mode': 'navigate',
                        'Sec-Fetch-Dest': 'iframe',
                        'Sec-Fetch-User': '?1',
                        'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
                        'Accept-Language': 'en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7'
                    }, false)];
            case 4:
                parseStream = _a.sent();
                hls = parseStream.match(/var *hls_url *\= *\"([^\"]+)/i);
                hls = hls ? hls[1] : '';
                setPass = parseStream.match(/(tm[0-9]+p.vidsrc.stream\/set_pass.php\?[A-z0-9\=]+)/i);
                setPass = setPass ? setPass[1] : '';
                libs.log({ hls: hls, streamUrl: streamUrl, setPass: setPass }, PROVIDER, "HLS");
                if (!hls) {
                    return [2];
                }
                setPass = "https://".concat(setPass);
                return [4, libs.request_get(setPass, {
                        Referer: streamUrl
                    })];
            case 5:
                parseSetPass = _a.sent();
                domainEmbed = libs.url_extractHostname(hls);
                libs.log({ domainEmbed: domainEmbed, parseSetPass: parseSetPass }, PROVIDER, "DOMAIN EMBED");
                libs.embed_callback(hls, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: hls, quality: 1080 }], {
                    Referer: streamUrl,
                    'User-Agent': userAgent,
                    Host: domainEmbed,
                    Connection: 'keep-alive',
                    'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
                    DNT: '1',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    Accept: '*/*',
                    'Sec-Fetch-Site': 'cross-site',
                    'Sec-Fetch-Mode': 'cors',
                    'Sec-Fetch-Dest': 'empty',
                    'Accept-Language': 'en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7'
                });
                return [2, true];
            case 6:
                e_1 = _a.sent();
                return [3, 7];
            case 7: return [2];
        }
    });
}); };
