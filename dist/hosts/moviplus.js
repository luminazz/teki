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
hosts["e.moviplus"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, parseEmbed, id, urlIframe, body, headersAdmin, resultIframe, embedIframe, htmlDirect, resultDirect, parseResult, a, tracks, directQuality, _i, _a, item, quality, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                DOMAIN = 'https://e.moviplus.net';
                HOST = 'MoviPlus';
                headers = {
                    'content-type': 'application/json;charset=UTF-8',
                    referer: url,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4, libs.request_get(url, {
                        Referer: "https://e.moviplus.net/",
                        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                    }, true)];
            case 2:
                parseEmbed = _b.sent();
                id = parseEmbed('.server-view').attr("data-name");
                libs.log({ id: id }, HOST, "ID");
                if (!id) {
                    return [2];
                }
                urlIframe = "".concat(DOMAIN, "//structure/s.php");
                body = "id=".concat(id);
                headersAdmin = {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    referer: DOMAIN,
                    'X-Requested-With': 'XMLHttpRequest',
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
                };
                return [4, libs.request_post(urlIframe, headersAdmin, body, true)];
            case 3:
                resultIframe = _b.sent();
                embedIframe = resultIframe("iframe").attr("src");
                libs.log({ embedIframe: embedIframe }, HOST, "EMBED IFRAME");
                if (!embedIframe) {
                    return [2];
                }
                return [4, fetch(embedIframe, {
                        headers: headers
                    })];
            case 4:
                htmlDirect = _b.sent();
                return [4, htmlDirect.text()];
            case 5:
                resultDirect = _b.sent();
                if (!resultDirect) {
                    return [2];
                }
                parseResult = resultDirect.match(/setup\((\{[\s\S]*?\})\)/im);
                parseResult = parseResult ? parseResult[1] : "";
                libs.log({ parseResult: parseResult }, HOST, "PARSE RESULT");
                if (!parseResult) {
                    return [2];
                }
                libs.log({ parseResult: parseResult }, HOST, "PARSE RESULT 2");
                a = {};
                eval("a = ".concat(parseResult));
                libs.log({ a: a }, HOST, "A RESULT");
                tracks = a.tracks || [];
                directQuality = [];
                for (_i = 0, _a = a.sources; _i < _a.length; _i++) {
                    item = _a[_i];
                    quality = item.label.match(/([0-9]+)/);
                    quality = quality ? Number(quality[1]) : 1080;
                    directQuality.push({
                        quality: quality,
                        file: item.file
                    });
                }
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({ directQuality: directQuality }, provider, 'DIRECT QUALITY');
                libs.embed_callback(directQuality[0].file, provider, HOST, 'Hls', callback, 1, tracks, directQuality);
                return [3, 7];
            case 6:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, HOST, "error");
                return [3, 7];
            case 7: return [2];
        }
    });
}); };
