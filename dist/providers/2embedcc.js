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
    var PROVIDER, DOMAIN, urlSearch, parseIframe_1, LINK_DETAIL_1, LINK_IDS_2, parseDetail_1, _loop_1, _i, LINK_IDS_1, id, state_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'PTOWEMBEDCC';
                DOMAIN = "https://www.2embed.cc";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                urlSearch = "".concat(DOMAIN, "/embed/").concat(movieInfo.tmdb_id);
                if (movieInfo.type == "tv") {
                    urlSearch = "".concat(DOMAIN, "/embedtv/").concat(movieInfo.tmdb_id, "&s=").concat(movieInfo.season, "&e=").concat(movieInfo.episode);
                }
                return [4, libs.request_get(urlSearch, {}, true)];
            case 2:
                parseIframe_1 = _a.sent();
                LINK_DETAIL_1 = "";
                LINK_IDS_2 = [];
                parseIframe_1("#myDropdown a").each(function (key, item) {
                    var src = parseIframe_1(item).attr('onclick');
                    libs.log({ src: src }, PROVIDER, 'DATA-SRC');
                    if (src && src.indexOf("player4u") != -1) {
                        var pSrc = src.match(/go\(\'([^\']+)/i);
                        if (pSrc) {
                            LINK_DETAIL_1 = pSrc[1].replace(/\s/g, '%20');
                        }
                    }
                });
                libs.log({ LINK_DETAIL: LINK_DETAIL_1 }, PROVIDER, "LINK DETAIL");
                if (!LINK_DETAIL_1) {
                    return [2];
                }
                return [4, libs.request_get(LINK_DETAIL_1, {}, true)];
            case 3:
                parseDetail_1 = _a.sent();
                parseDetail_1(".playbtnx").each(function (key, item) {
                    var src = parseDetail_1(item).attr('onclick');
                    libs.log({ src: src }, PROVIDER, 'DETAIL SRC');
                    if (src) {
                        var pID = src.match(/\/swp\/\?id\=([^\&]+)/i);
                        if (pID) {
                            LINK_IDS_2.push(pID[1]);
                        }
                    }
                });
                libs.log({ LINK_IDS: LINK_IDS_2 }, PROVIDER, 'LINK IDS');
                if (!LINK_IDS_2.length) {
                    return [2];
                }
                _loop_1 = function (id) {
                    var embedUrl, headerEmbed, parseEmbed, ScriptEval, evalData, evalData, unpacker, fileDirect;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                embedUrl = "https://uqloads.xyz/e/".concat(id);
                                headerEmbed = {
                                    Referer: "https://streamsrcs.2embed.cc/"
                                };
                                return [4, libs.request_get(embedUrl, headerEmbed, true)];
                            case 1:
                                parseEmbed = _b.sent();
                                ScriptEval = "";
                                parseEmbed("script").each(function (key, item) {
                                    var s = parseEmbed(item).text();
                                    if (s.indexOf("eval") != -1) {
                                        ScriptEval = s;
                                    }
                                });
                                if (!ScriptEval) {
                                    return [2, { value: void 0 }];
                                }
                                evalData = ScriptEval.match(/eval\(function\(p,a,c,k,e,.*\)\)/i);
                                evalData = evalData ? evalData[0] : '';
                                if (!evalData) {
                                    return [2, { value: void 0 }];
                                }
                                unpacker = libs.string_unpacker_v2(evalData);
                                fileDirect = unpacker.match(/hls2 *\" *\: *\"([^\"]+)/i);
                                fileDirect = fileDirect ? fileDirect[1] : "";
                                libs.log({ fileDirect: fileDirect }, PROVIDER, 'FILE DIRECT');
                                if (!fileDirect) {
                                    return [2, { value: void 0 }];
                                }
                                if (fileDirect.indexOf("https://") == -1) {
                                    return [2, { value: void 0 }];
                                }
                                libs.embed_callback(fileDirect, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ "file": fileDirect, "quality": 1080 }]);
                                return [2];
                        }
                    });
                };
                _i = 0, LINK_IDS_1 = LINK_IDS_2;
                _a.label = 4;
            case 4:
                if (!(_i < LINK_IDS_1.length)) return [3, 7];
                id = LINK_IDS_1[_i];
                return [5, _loop_1(id)];
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
                libs.log({ e: e_1 }, PROVIDER, 'ERROR');
                return [3, 9];
            case 9: return [2, true];
        }
    });
}); };
