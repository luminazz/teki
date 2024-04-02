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
hosts["megacloud"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, megacloudLink, getSecret, extractVariables, id, urlSource, sourceData, scriptData, vara, secret, decryptData, source3, rank, tracks, _i, source3_1, item, directSizes, patternSize, directQuality, firstFile, _a, patternSize_1, patternItem, sizeQuality, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                DOMAIN = 'https://megacloud.tv';
                HOST = 'Megacloud';
                headers = {
                    'content-type': 'application/json;charset=UTF-8'
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 8, , 9]);
                megacloudLink = {
                    script: "https://megacloud.tv/js/player/a/prod/e1-player.min.js?v=",
                    sources: "https://megacloud.tv/embed-2/ajax/e-1/getSources?id=",
                };
                getSecret = function (encryptedString, values) {
                    var secret = "", encryptedSource = encryptedString, totalInc = 0;
                    for (var i = 0; i < values[0]; i++) {
                        var start = void 0, inc = void 0;
                        switch (i) {
                            case 0:
                                (start = values[2]), (inc = values[1]);
                                break;
                            case 1:
                                (start = values[4]), (inc = values[3]);
                                break;
                            case 2:
                                (start = values[6]), (inc = values[5]);
                                break;
                            case 3:
                                (start = values[8]), (inc = values[7]);
                                break;
                            case 4:
                                (start = values[10]), (inc = values[9]);
                                break;
                            case 5:
                                (start = values[12]), (inc = values[11]);
                                break;
                            case 6:
                                (start = values[14]), (inc = values[13]);
                                break;
                            case 7:
                                (start = values[16]), (inc = values[15]);
                                break;
                            case 8:
                                (start = values[18]), (inc = values[17]);
                        }
                        var from = start + totalInc, to = from + inc;
                        (secret += encryptedString.slice(from, to)),
                            (encryptedSource = encryptedSource.replace(encryptedString.substring(from, to), "")),
                            (totalInc += inc);
                    }
                    return { secret: secret, encryptedSource: encryptedSource };
                };
                extractVariables = function (text, sourceName) {
                    var _a, _b, _c, _d;
                    var allvars;
                    if (sourceName !== "MEGACLOUD") {
                        allvars =
                            (_b = (_a = text
                                .match(/const (?:\w{1,2}=(?:'.{0,50}?'|\w{1,2}\(.{0,20}?\)).{0,20}?,){7}.+?;/gm)) === null || _a === void 0 ? void 0 : _a.at(-1)) !== null && _b !== void 0 ? _b : "";
                    }
                    else {
                        allvars =
                            (_d = (_c = text
                                .match(/const \w{1,2}=new URLSearchParams.+?;(?=function)/gm)) === null || _c === void 0 ? void 0 : _c.at(-1)) !== null && _d !== void 0 ? _d : "";
                    }
                    var vars = allvars
                        .slice(0, -1)
                        .split("=")
                        .slice(1)
                        .map(function (pair) { return Number(pair.split(",").at(0)); })
                        .filter(function (num) { return num === 0 || num; });
                    return vars;
                };
                id = url.split("/").pop().split("?")[0];
                libs.log({ id: id }, HOST, "id");
                if (!id) {
                    return [2];
                }
                urlSource = "".concat(DOMAIN, "/embed-2/ajax/e-1/getSources?id=").concat(id);
                return [4, libs.request_get(urlSource)];
            case 2:
                sourceData = _b.sent();
                libs.log({ sourceData: sourceData }, HOST, "sourceData");
                if (!sourceData) {
                    return [2];
                }
                return [4, libs.request_get(megacloudLink.script + Date.now().toString())];
            case 3:
                scriptData = _b.sent();
                libs.log({ scriptData: scriptData }, HOST, "scriptData");
                if (!scriptData) {
                    return [2];
                }
                vara = extractVariables(scriptData, "MEGACLOUD");
                libs.log({ vara: vara }, HOST, "var");
                if (!vara) {
                    return [2];
                }
                secret = getSecret(sourceData.sources, vara);
                libs.log({ secret: secret }, HOST, "secret");
                if (!secret) {
                    return [2];
                }
                decryptData = (cryptoS.AES.decrypt(secret.encryptedSource, secret.secret)).toString(cryptoS.enc.Utf8);
                libs.log({
                    decryptData: decryptData,
                    secret: secret
                }, HOST, 'EMBED DECRYPT DATA');
                source3 = JSON.parse(decryptData);
                rank = 0;
                tracks = sourceData.tracks;
                _i = 0, source3_1 = source3;
                _b.label = 4;
            case 4:
                if (!(_i < source3_1.length)) return [3, 7];
                item = source3_1[_i];
                if (!item.file) {
                    return [3, 6];
                }
                return [4, libs.request_get(item.file, {})];
            case 5:
                directSizes = _b.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                libs.log({ patternSize: patternSize }, provider, 'PATTERN SIZE');
                if (!patternSize) {
                    libs.embed_callback(item.file, provider, HOST, item.type, callback, ++rank, tracks, [{ file: item.file, quality: 1080 }]);
                    return [3, 6];
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
                _b.label = 6;
            case 6:
                _i++;
                return [3, 4];
            case 7: return [3, 9];
            case 8:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, HOST, "error");
                return [3, 9];
            case 9: return [2];
        }
    });
}); };
