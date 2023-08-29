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
hosts["hihihaha1"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, parseHtml, token, parseAtob, id, subFix, _a, i, r, o, domainDirect, directQuality, _i, _b, item;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                DOMAIN = 'https://hihihaha1.xyz';
                HOST = 'ABYSS';
                headers = {
                    'content-type': 'application/json;charset=UTF-8',
                    'Referer': config.options.link_detail,
                };
                return [4, libs.request_get(url, headers, false)];
            case 1:
                parseHtml = _c.sent();
                token = parseHtml.match(/new *PLAYER\(atob\("([^\"]+)/i);
                token = token ? token[1] : '';
                if (!token) {
                    return [2];
                }
                parseAtob = JSON.parse(libs.string_atob(token));
                id = parseAtob['id'];
                subFix = "#current-browser-timestamp=" + +new Date;
                _a = parseAtob['domain_cdn'].match(/^(apicdn|cdnz)([0-9]+)\.one/), i = _a[0], r = _a[1], o = _a[2];
                libs.log({ parseAtob: parseAtob }, HOST, 'PARSEATOB');
                domainDirect = id + ".backendapi" + (({
                    apicdn: 1,
                    cdnz: 99
                })[r] + Number(o)).toString().padStart(3, "0") + ".cfd" + subFix;
                libs.log({ domainDirect: domainDirect }, HOST, "DOMAIN DIRECT");
                directQuality = [];
                for (_i = 0, _b = parseAtob["sources"]; _i < _b.length; _i++) {
                    item = _b[_i];
                    if (["sd", "mHd"].includes(item)) {
                        directQuality.push({
                            file: "https://" + domainDirect,
                            quality: 360
                        });
                    }
                    else if (["fullHd", "origin"].includes(item)) {
                        directQuality.push({
                            file: "https://whw" + domainDirect,
                            quality: 1080
                        });
                    }
                    else {
                        directQuality.push({
                            file: "https://www" + domainDirect,
                            quality: 720
                        });
                    }
                }
                libs.log({ directQuality: directQuality }, HOST, "DIRECT QUALITY");
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.embed_callback(directQuality[0].file, provider, HOST, 'Hls', callback, 1, [], directQuality, {
                    Referer: url,
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
                });
                return [2];
        }
    });
}); };
