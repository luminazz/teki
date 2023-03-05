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
hosts["play.playm4u"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, movieId, domainGetDirect, body, playmeData, directUrl, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                DOMAIN = 'https://play.playm4u.xyz';
                HOST = 'PLAYM4U';
                headers = {
                    authority: 'api-plhq.playm4u.xyz',
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.9',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'origin': 'https://play.playm4u.xyz',
                    'sec-ch-ua': '"Microsoft Edge";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-site',
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1660.14'
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                movieId = url.match(/play\/([A-z0-9]+)/i);
                movieId = movieId ? movieId[1] : '';
                libs.log(movieId, provider, 'MOVIE ID');
                if (!movieId) {
                    return [2];
                }
                domainGetDirect = "https://api-plhq.playm4u.xyz/apidatard/5e8dd16b70eac4137a676553/".concat(movieId);
                body = qs.stringify({
                    referrer: 'https://ww1.m4ufree.tv',
                });
                return [4, libs.request_post(domainGetDirect, headers, body)];
            case 2:
                playmeData = _a.sent();
                libs.log({ domainGetDirect: domainGetDirect, headers: headers, body: body, playmeData: playmeData }, provider, 'PLAY ME DATA');
                directUrl = playmeData.data && !Array.isArray(playmeData.data) ? playmeData.data : '';
                if (!directUrl) {
                    return [2];
                }
                libs.log({ headers: headers, body: body, domainGetDirect: domainGetDirect, playmeData: playmeData, directUrl: directUrl }, provider, 'PLAYDATA');
                libs.embed_callback(directUrl, provider, HOST, 'Hls', callback, 1, [], [{ file: directUrl, quality: 1080 }], {}, config.options ? config.options : {});
                return [3, 4];
            case 3:
                error_1 = _a.sent();
                libs.log({ error: error_1 }, HOST, 'ERROR EMBED PLAYU');
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
