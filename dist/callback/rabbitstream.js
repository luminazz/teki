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
callbacksEmbed["rabbitstream"] = function (dataCallback, provider, host, callback, metadata) { return __awaiter(_this, void 0, void 0, function () {
    var data, decryptData, source3, tracks, rank, _i, source3_1, item, itemFile, directSizes, patternSize, directQuality, firstFile, _a, patternSize_1, patternItem, sizeQuality, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                libs.log(dataCallback, provider, 'DATA CALLBACK');
                if (!dataCallback) {
                    return [2];
                }
                metadata.s += 1;
                libs.log({
                    s: metadata.s,
                }, provider, 'metadataS');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                data = JSON.parse(dataCallback);
                libs.log({
                    data: data
                }, provider, 'PARSE GET SOURCE');
                decryptData = (crypto.AES.decrypt(data.hash, data.key)).toString(crypto.enc.Utf8);
                libs.log({
                    decryptData: decryptData
                }, provider, 'decryptData');
                source3 = JSON.parse(decryptData);
                tracks = [];
                libs.log({ source3: source3, tracks: tracks }, provider, 'SOURCES');
                rank = 0;
                _i = 0, source3_1 = source3;
                _b.label = 2;
            case 2:
                if (!(_i < source3_1.length)) return [3, 5];
                item = source3_1[_i];
                if (!item.file) {
                    return [3, 4];
                }
                itemFile = item.file;
                libs.log({ file: itemFile }, provider, 'FILE ITEM');
                return [4, libs.request_get(itemFile, {})];
            case 3:
                directSizes = _b.sent();
                if (!directSizes) {
                    return [2];
                }
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    libs.embed_callback(itemFile, provider, host, item.type, callback, ++rank, tracks);
                    return [3, 4];
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
                libs.embed_callback(firstFile, provider, host, 'Hls', callback, ++rank, tracks, directQuality, {}, {
                    is_end_webview: true,
                    url_webview: metadata.url_webview || ''
                });
                _b.label = 4;
            case 4:
                _i++;
                return [3, 2];
            case 5: return [3, 7];
            case 6:
                e_1 = _b.sent();
                libs.log({
                    e: e_1
                }, provider, 'ERROR');
                return [3, 7];
            case 7: return [2];
        }
    });
}); };
