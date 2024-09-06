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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
    var PROVIDER, DOMAIN, urlSearch, parseIframe_1, LINK_DETAIL_1, id, embedUrl, headerEmbed, parseEmbed_1, ScriptEval_1, evalData, evalData, unpacker, fileDirect, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'PTOWEMBEDCC';
                DOMAIN = "https://2embed.cc";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                urlSearch = "".concat(DOMAIN, "/embed/").concat(movieInfo.tmdb_id);
                if (movieInfo.type == "tv") {
                    urlSearch = "".concat(DOMAIN, "/embedtv/").concat(movieInfo.tmdb_id, "&s=").concat(movieInfo.season, "&e=").concat(movieInfo.episode);
                }
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseIframe_1 = _a.sent();
                LINK_DETAIL_1 = "";
                parseIframe_1("iframe").each(function (key, item) {
                    var src = parseIframe_1(item).attr('data-src');
                    libs.log({ src: src }, PROVIDER, 'DATA-SRC');
                    if (src && src.indexOf("swish") != -1) {
                        LINK_DETAIL_1 = src;
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 });
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                id = LINK_DETAIL_1.match(/id\=([A-z0-9]+)/i);
                id = id ? id[1] : "";
                libs.log({ id: id }, PROVIDER, 'ID');
                if (!id) {
                    return [2];
                }
                embedUrl = "https://uqloads.xyz/e/".concat(id);
                headerEmbed = {
                    Referer: "https://streamsrcs.2embed.cc/"
                };
                return [4, libs.request_get(embedUrl, headerEmbed, true)];
            case 3:
                parseEmbed_1 = _a.sent();
                ScriptEval_1 = "";
                parseEmbed_1("script").each(function (key, item) {
                    var s = parseEmbed_1(item).text();
                    if (s.indexOf("eval") != -1) {
                        ScriptEval_1 = s;
                    }
                });
                libs.log({ ScriptEval: ScriptEval_1 }, PROVIDER, 'SCRIPT EVAL');
                if (!ScriptEval_1) {
                    return [2];
                }
                evalData = ScriptEval_1.match(/eval\(function\(p,a,c,k,e,.*\)\)/i);
                evalData = evalData ? evalData[0] : '';
                if (!evalData) {
                    return [2];
                }
                unpacker = libs.string_unpacker_v2(evalData);
                libs.log({ unpacker: unpacker }, PROVIDER, 'UNPACKER');
                fileDirect = unpacker.match(/file *\: *\"([^\"]+)/i);
                fileDirect = fileDirect ? fileDirect[1] : "";
                libs.log({ fileDirect: fileDirect }, PROVIDER, 'FILE DIRECT');
                if (!fileDirect) {
                    return [2];
                }
                libs.embed_callback(fileDirect, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ "file": fileDirect, "quality": 1080 }]);
                return [3, 5];
            case 4:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 5];
            case 5: return [2, true];
        }
    });
}); };
