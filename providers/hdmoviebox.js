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
    var PROVIDER, DOMAIN, urlSearch, parseSearch, id, urlIframe, body, headers, iframeData, apiIFrame, headers, parseIFrame, iframeUrl, parseDetailIframe, firePlayer, parseFirePlayer, words, textString, domainIframe, directUrl, parseM3u8Data, parseM3u8, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'BHDMobiesBox';
                DOMAIN = "https://hdmoviebox.net";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                urlSearch = "";
                if (movieInfo.type == 'movie') {
                    urlSearch = "".concat(DOMAIN, "/watch/").concat(libs.url_slug_search(movieInfo));
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/watch/").concat(libs.url_slug_search(movieInfo), "/season-").concat(movieInfo.season, "/episode-").concat(movieInfo.episode);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseSearch = _a.sent();
                id = parseSearch('div.player div#not-loaded').attr('data-whatwehave');
                libs.log({ id: id }, PROVIDER, 'id');
                urlIframe = "".concat(DOMAIN, "/ajax/service");
                body = qs.stringify({
                    e_id: id,
                    v_lang: 'en',
                    type: 'get_whatwehave'
                });
                headers = {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'X-Requested-With': 'XMLHttpRequest'
                };
                return [4, libs.request_post(urlIframe, headers, body)];
            case 3:
                iframeData = _a.sent();
                libs.log({ urlIframe: urlIframe, body: body, headers: headers, iframeData: iframeData }, PROVIDER, 'IFRAME DATA');
                apiIFrame = iframeData.api_iframe;
                if (!apiIFrame) {
                    return [2];
                }
                headers = {
                    'user-agent': libs.request_getRandomUserAgent(),
                    Referer: "".concat(DOMAIN, "/")
                };
                return [4, libs.request_get(apiIFrame, headers, true)];
            case 4:
                parseIFrame = _a.sent();
                iframeUrl = parseIFrame('iframe').attr('src');
                libs.log({
                    iframeUrl: iframeUrl
                }, PROVIDER, 'IFRAME URL');
                if (!iframeUrl) {
                    return [2];
                }
                return [4, libs.request_get(iframeUrl, headers)];
            case 5:
                parseDetailIframe = _a.sent();
                firePlayer = parseDetailIframe.match(/FirePlayer\(vhash\, *([^\)]+)/i);
                firePlayer = firePlayer ? firePlayer[1] : '';
                libs.log({ firePlayer: firePlayer }, PROVIDER, 'FIREPLAYER');
                if (!firePlayer) {
                    return [2];
                }
                firePlayer = firePlayer.replace(/, *false/i, '');
                libs.log({ firePlayer: firePlayer }, PROVIDER, 'FIREPLAYER_2');
                parseFirePlayer = JSON.parse(firePlayer);
                words = cryptoS.enc.Utf8.parse(parseFirePlayer.videoDisk || '');
                textString = cryptoS.enc.Base64.stringify(words);
                libs.log({ parseFirePlayer: parseFirePlayer, textString: textString }, PROVIDER, 'PARSE FILE PLAYER');
                domainIframe = "https://".concat(libs.url_extractRootDomain(iframeUrl));
                directUrl = "".concat(domainIframe).concat(parseFirePlayer.videoUrl, "?s=").concat(parseFirePlayer.videoServer, "&d=").concat(textString);
                libs.log({ directUrl: directUrl, domainIframe: domainIframe }, PROVIDER, 'DIRECT URL');
                return [4, libs.request_get(directUrl, {
                        Referer: "".concat(domainIframe, "/"),
                        'Accept': '*/*'
                    })];
            case 6:
                parseM3u8Data = _a.sent();
                parseM3u8 = parseM3u8Data.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                libs.log({ parseM3u8: parseM3u8, parseM3u8Data: parseM3u8Data }, PROVIDER, 'PARSE m3u8');
                parseM3u8 = parseM3u8 ? parseM3u8[parseM3u8.length - 1] : '';
                if (!parseM3u8) {
                    return [2];
                }
                libs.embed_callback(parseM3u8, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: parseM3u8, quality: 1080 }], {
                    Referer: "".concat(domainIframe, "/")
                });
                return [3, 8];
            case 7:
                e_1 = _a.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 8];
            case 8: return [2, true];
        }
    });
}); };
