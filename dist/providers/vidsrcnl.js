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
    var PROVIDER, DOMAIN, headers, urlSearch, parseSearch, iframeURL, parseIframeURL_1, urls_2, _loop_1, _i, urls_1, item, state_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'UVidsrcNl';
                DOMAIN = "https://vidsrc.nl";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                    'Referer': "https://vidsrc.nl/",
                    'Origin': DOMAIN,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                urlSearch = "https://player.vidsrc.nl/embed/movie/".concat(movieInfo.tmdb_id);
                if (movieInfo.type == 'tv') {
                    urlSearch = "https://player.vidsrc.nl/embed/tv/".concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                return [4, libs.request_get(urlSearch, headers, true)];
            case 2:
                parseSearch = _a.sent();
                iframeURL = parseSearch("#server-iframe").attr("src");
                libs.log({ iframeURL: iframeURL }, PROVIDER, "IFRAME URL");
                if (!iframeURL) {
                    return [2];
                }
                if (!(iframeURL.indexOf("hyplexnetworks") != -1)) return [3, 7];
                return [4, libs.request_get(iframeURL, headers, true)];
            case 3:
                parseIframeURL_1 = _a.sent();
                urls_2 = [];
                parseIframeURL_1("#dropdownMenu a").each(function (key, item) {
                    var u = parseIframeURL_1(item).attr('data-url');
                    if (u) {
                        var e = u.replace("https://node.hyplexnetworks.pw/embed/decode.php?url=", "");
                        e = libs.string_base64_decode(e);
                        urls_2.push(e);
                    }
                });
                libs.log({ urls: urls_2 }, PROVIDER, "PFIRAME");
                if (!urls_2.length) {
                    return [2];
                }
                _loop_1 = function (item) {
                    var parseDirect, script, unpacker, file;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (item.indexOf("vidhidepro") == -1) {
                                    return [2, "continue"];
                                }
                                return [4, libs.request_get(item, {
                                        "Sec-Fetch-Site": "same-origin",
                                        "Sec-Fetch-Mode": "navigate",
                                        "Sec-Fetch-Dest": "iframe"
                                    }, true)];
                            case 1:
                                parseDirect = _b.sent();
                                script = "";
                                parseDirect("script").each(function (key, item) {
                                    var text = parseDirect(item).text();
                                    if (text.indexOf("eval(") != -1) {
                                        script = text;
                                    }
                                });
                                libs.log({ script: script }, PROVIDER, 'SCRIPT');
                                if (!script) {
                                    return [2, { value: void 0 }];
                                }
                                unpacker = libs.string_unpacker_v2(script);
                                libs.log({ unpacker: unpacker }, PROVIDER, 'Unpacker');
                                file = unpacker.match(/file *\: *\"([^\"]+)/i);
                                file = file ? file[1] : '';
                                libs.log({ file: file }, PROVIDER, 'FILE');
                                if (!file) {
                                    return [2, { value: void 0 }];
                                }
                                libs.embed_callback(file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: file, quality: 1080 }]);
                                return [2];
                        }
                    });
                };
                _i = 0, urls_1 = urls_2;
                _a.label = 4;
            case 4:
                if (!(_i < urls_1.length)) return [3, 7];
                item = urls_1[_i];
                return [5, _loop_1(item)];
            case 5:
                state_1 = _a.sent();
                if (typeof state_1 === "object")
                    return [2, state_1.value];
                _a.label = 6;
            case 6:
                _i++;
                return [3, 4];
            case 7: return [3, 9];
            case 8:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 9];
            case 9: return [2];
        }
    });
}); };
