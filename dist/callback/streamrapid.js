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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _this = this;
callbacksEmbed["vidcloud"] = function (dataCallback, provider, host, callback, metadata) { return __awaiter(_this, void 0, void 0, function () {
    var data, parse, source1, source2, source3, tracks, rank, _i, source3_1, item, directSizes, patternSize, directQuality, _a, patternSize_1, patternItem, sizeQuality;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                libs.log({ dataCallback: dataCallback }, provider, 'DATACALLBACK');
                if (!dataCallback) {
                    return [2];
                }
                data = JSON.parse(dataCallback);
                if (!data.responseURL) {
                    return [2];
                }
                if (!(data.responseURL.indexOf("getSources") != -1)) return [3, 4];
                parse = JSON.parse(data.responseText);
                source1 = parse['sources'] || [];
                source2 = parse['sourcesBackup'] || [];
                source3 = __spreadArray(__spreadArray([], source1), source2);
                tracks = parse['tracks'] || [];
                libs.log({ source3: source3, tracks: tracks }, provider, 'SOURCES');
                rank = 0;
                _i = 0, source3_1 = source3;
                _b.label = 1;
            case 1:
                if (!(_i < source3_1.length)) return [3, 4];
                item = source3_1[_i];
                if (!item.file) {
                    return [3, 3];
                }
                if (item.file.indexOf('thedaywestream') !== -1) {
                    return [3, 3];
                }
                if (item.file.indexOf('birdsystem') !== -1) {
                    return [3, 3];
                }
                return [4, libs.request_get(item.file, {})];
            case 2:
                directSizes = _b.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    libs.embed_callback(item.file, provider, host, item.type, callback, ++rank, tracks);
                    return [3, 3];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize }, provider, 'PATTERN SIZE');
                for (_a = 0, patternSize_1 = patternSize; _a < patternSize_1.length; _a++) {
                    patternItem = patternSize_1[_a];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                    if (patternItem.indexOf('thedaywestream') === -1) {
                        directQuality.push({
                            file: patternItem,
                            quality: sizeQuality
                        });
                    }
                }
                libs.log({ directQuality: directQuality }, provider, 'DIRECT QUALITY');
                libs.embed_callback(item.file, provider, host, 'Hls', callback, ++rank, tracks, directQuality);
                _b.label = 3;
            case 3:
                _i++;
                return [3, 1];
            case 4: return [2];
        }
    });
}); };
