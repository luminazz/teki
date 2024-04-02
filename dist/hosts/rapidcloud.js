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
hosts["rapid-cloud"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, megacloudLink_1, get_key, id, urlSource, sourceData, scriptData, secret, decryptData, source3, rank, tracks, _i, source3_1, item, directSizes, patternSize, directQuality, firstFile, _a, patternSize_1, patternItem, sizeQuality, e_1;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                DOMAIN = 'https://rapid-cloud.co';
                HOST = 'RapidCloud';
                headers = {
                    'content-type': 'application/json;charset=UTF-8'
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 9, , 10]);
                megacloudLink_1 = {
                    script: "https://rapid-cloud.co/js/player/prod/e6-player-v2.min.js?v=",
                    sources: "https://rapid-cloud.co/ajax/embed-6-v2/getSources?id=",
                };
                get_key = function (cipher) { return __awaiter(_this, void 0, void 0, function () {
                    var res, filt, filt_area, objectFromVars, P, C, I, C9, CC, CW, CR, CJ, CI, CN;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, libs.request_get(megacloudLink_1.script + Date.now().toString())];
                            case 1:
                                res = _a.sent();
                                libs.log({ res: res }, HOST, "scriptData");
                                filt = res.match(/case 0x\d{1,2}:\w{1,2}=\w{1,2},\w{1,2}=\w{1,2}/g).map(function (element) {
                                    return element.match(/=(\w{1,2})/g).map(function (element) {
                                        return element.substring(1);
                                    });
                                });
                                filt_area = res.match(/\w{1,2}=0x\w{1,2},\w{1,2}=0x\w{1,2},\w{1,2}=0x\w{1,2},\w{1,2}=0x\w{1,2},.+?;/)[0];
                                objectFromVars = filt_area.split(",").reduce(function (acc, pair) {
                                    var _a = pair.split("="), key = _a[0], value = _a[1];
                                    acc[key] = parseInt(value);
                                    return acc;
                                }, {});
                                P = filt.length;
                                C = cipher;
                                I = '', C9 = C, CC = 0x0;
                                for (CW = 0x0; CW < P; CW++) {
                                    CR = void 0, CJ = void 0;
                                    switch (CW) {
                                        case 0x0:
                                            CR = objectFromVars[filt[0][0]],
                                                CJ = objectFromVars[filt[0][1]];
                                            break;
                                        case 0x1:
                                            CR = objectFromVars[filt[1][0]],
                                                CJ = objectFromVars[filt[1][1]];
                                            break;
                                        case 0x2:
                                            CR = objectFromVars[filt[2][0]],
                                                CJ = objectFromVars[filt[2][1]];
                                            break;
                                        case 0x3:
                                            CR = objectFromVars[filt[3][0]],
                                                CJ = objectFromVars[filt[3][1]];
                                            break;
                                        case 0x4:
                                            CR = objectFromVars[filt[4][0]],
                                                CJ = objectFromVars[filt[4][1]];
                                            break;
                                        case 0x5:
                                            CR = objectFromVars[filt[5][0]],
                                                CJ = objectFromVars[filt[5][1]];
                                            break;
                                        case 0x6:
                                            CR = objectFromVars[filt[6][0]],
                                                CJ = objectFromVars[filt[6][1]];
                                            break;
                                        case 0x7:
                                            CR = objectFromVars[filt[7][0]],
                                                CJ = objectFromVars[filt[7][1]];
                                            break;
                                        case 0x8:
                                            CR = objectFromVars[filt[8][0]],
                                                CJ = objectFromVars[filt[8][1]];
                                    }
                                    CI = CR + CC, CN = CI + CJ;
                                    I += C.slice(CI, CN),
                                        C9 = C9.replace(C.substring(CI, CN), ''),
                                        CC += CJ;
                                }
                                return [2, [I, C9]];
                        }
                    });
                }); };
                id = url.split("/").pop().split("?")[0];
                libs.log({ id: id }, HOST, "id");
                if (!id) {
                    return [2];
                }
                urlSource = "".concat(DOMAIN, "/ajax/embed-6-v2/getSources?id=").concat(id);
                return [4, libs.request_get(urlSource)];
            case 2:
                sourceData = _b.sent();
                libs.log({ sourceData: sourceData }, HOST, "sourceData");
                if (!sourceData) {
                    return [2];
                }
                return [4, libs.request_get(megacloudLink_1.script + Date.now().toString())];
            case 3:
                scriptData = _b.sent();
                libs.log({ scriptData: scriptData }, HOST, "scriptData");
                if (!scriptData) {
                    return [2];
                }
                return [4, get_key(sourceData.sources)];
            case 4:
                secret = _b.sent();
                libs.log({ secret: secret }, HOST, "data");
                decryptData = (cryptoS.AES.decrypt(secret[1], secret[0])).toString(cryptoS.enc.Utf8);
                libs.log({
                    decryptData: decryptData,
                    secret: secret
                }, HOST, 'EMBED DECRYPT DATA');
                source3 = JSON.parse(decryptData);
                rank = 0;
                tracks = sourceData.tracks;
                _i = 0, source3_1 = source3;
                _b.label = 5;
            case 5:
                if (!(_i < source3_1.length)) return [3, 8];
                item = source3_1[_i];
                if (!item.file) {
                    return [3, 7];
                }
                return [4, libs.request_get(item.file, {})];
            case 6:
                directSizes = _b.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                libs.log({ patternSize: patternSize }, provider, 'PATTERN SIZE');
                if (!patternSize) {
                    libs.embed_callback(item.file, provider, HOST, item.type, callback, ++rank, tracks, [{ file: item.file, quality: 1080 }]);
                    return [3, 7];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize }, provider, 'PATTERN SIZE');
                firstFile = '';
                for (_a = 0, patternSize_1 = patternSize; _a < patternSize_1.length; _a++) {
                    patternItem = patternSize_1[_a];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                    if (!firstFile) {
                        firstFile = patternItem;
                    }
                    directQuality.push({
                        file: patternItem,
                        quality: sizeQuality
                    });
                }
                libs.log({ directQuality: directQuality }, provider, 'DIRECT QUALITY');
                libs.embed_callback(firstFile, provider, HOST, 'Hls', callback, ++rank, tracks, directQuality);
                _b.label = 7;
            case 7:
                _i++;
                return [3, 5];
            case 8: return [3, 10];
            case 9:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, HOST, "error");
                return [3, 10];
            case 10: return [2];
        }
    });
}); };
