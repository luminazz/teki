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
    var PROVIDER, DOMAIN, urlDetail, parseDetail_1, embeds_2, _i, embeds_1, item, parseIframe, iframe, parseBflix, textBflix, evalData, evalData, unpacker, parseFile, quality, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'HNites';
                DOMAIN = "https://w1.nites.is";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                urlDetail = "".concat(DOMAIN, "/movie/").concat(libs.url_slug_search(movieInfo, '-'), "/");
                if (movieInfo.type == 'tv') {
                    urlDetail = "".concat(DOMAIN, "/episode/").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.season, "x").concat(movieInfo.episode, "/");
                }
                return [4, libs.request_get(urlDetail, {}, true)];
            case 2:
                parseDetail_1 = _a.sent();
                embeds_2 = [];
                parseDetail_1('.video').each(function (key, item) {
                    var urlIframe = parseDetail_1(item).find("iframe").attr("data-lazy-src");
                    if (urlIframe) {
                        embeds_2.push(urlIframe);
                    }
                });
                libs.log({ embeds: embeds_2 }, PROVIDER, 'EMBEDS');
                if (!embeds_2.length) {
                    return [2];
                }
                _i = 0, embeds_1 = embeds_2;
                _a.label = 3;
            case 3:
                if (!(_i < embeds_1.length)) return [3, 8];
                item = embeds_1[_i];
                if (item.indexOf('nites') == -1) {
                    return [3, 7];
                }
                return [4, libs.request_get(item, {}, true)];
            case 4:
                parseIframe = _a.sent();
                iframe = parseIframe('.Video iframe').attr("src");
                libs.log({ iframe: iframe }, PROVIDER, 'IFRAME');
                if (!iframe) {
                    return [3, 7];
                }
                if (iframe.indexOf("bflix") == -1) {
                    return [3, 7];
                }
                return [4, fetch(iframe, {
                        method: "GET",
                        headers: {},
                    })];
            case 5:
                parseBflix = _a.sent();
                return [4, parseBflix.text()];
            case 6:
                textBflix = _a.sent();
                evalData = textBflix.match(/eval\(function\(p,a,c,k,e,.*\)\)/i);
                evalData = evalData ? evalData[0] : '';
                if (!evalData) {
                    return [2];
                }
                unpacker = libs.string_unpacker_v2(evalData);
                libs.log({ unpacker: unpacker }, PROVIDER, 'UNPACKER');
                parseFile = unpacker.match(/file\' *\: *\'([^\']+)/i);
                parseFile = parseFile ? parseFile[1] : "";
                quality = unpacker.match(/label\' *\: *\'([0-9]+)/i);
                quality = quality ? Number(quality[1]) : 720;
                libs.log({ parseFile: parseFile }, PROVIDER, 'PARSE FILE');
                if (!parseFile) {
                    return [3, 7];
                }
                libs.embed_callback(parseFile, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: parseFile, quality: quality }], {
                    "Referer": "https://bflix.gs/"
                });
                _a.label = 7;
            case 7:
                _i++;
                return [3, 3];
            case 8: return [3, 10];
            case 9:
                e_1 = _a.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 10];
            case 10: return [2, true];
        }
    });
}); };
