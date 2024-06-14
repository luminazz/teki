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
hosts["rabbitstream"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, idRabbit, dataRabbit, source3, parseTrack, tracks, _i, parseTrack_1, trackItem, lang, parseLang, rank, _a, source3_1, item, directSizes, patternSize, directQuality, _b, patternSize_1, patternItem, sizeQuality;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                libs.log({ provider: provider }, provider, 'PROVIDER');
                DOMAIN = 'https://rabbitstream.net';
                HOST = 'Rabbitstream';
                headers = {
                    "Referer": "https://fmovies.ps/"
                };
                idRabbit = url.match(/embed\-[0-9]+\/([A-z0-9]+)/);
                idRabbit = idRabbit ? idRabbit[1] : '';
                return [4, libs.request_get("https://aquariumtv.app/rabbit?id=".concat(idRabbit))];
            case 1:
                dataRabbit = _c.sent();
                libs.log({ dataRabbit: dataRabbit }, HOST, "DATA RABBIT");
                source3 = dataRabbit['sources'] || [];
                parseTrack = dataRabbit['tracks'] || [];
                tracks = [];
                for (_i = 0, parseTrack_1 = parseTrack; _i < parseTrack_1.length; _i++) {
                    trackItem = parseTrack_1[_i];
                    lang = trackItem.label;
                    if (!lang) {
                        continue;
                    }
                    libs.log({ lang: lang, trackItem: trackItem }, HOST, "TRACK ITEM");
                    parseLang = lang.match(/([A-z0-9]+)/i);
                    parseLang = parseLang ? parseLang[1].trim() : '';
                    if (!parseLang) {
                        continue;
                    }
                    tracks.push({
                        file: trackItem.file,
                        kind: 'captions',
                        label: parseLang
                    });
                }
                libs.log({ source3: source3, tracks: tracks }, HOST, 'SOURCES_TRACK');
                rank = 0;
                _a = 0, source3_1 = source3;
                _c.label = 2;
            case 2:
                if (!(_a < source3_1.length)) return [3, 5];
                item = source3_1[_a];
                if (!item.file) {
                    return [3, 4];
                }
                return [4, libs.request_get(item.file, {})];
            case 3:
                directSizes = _c.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    libs.embed_callback(item.file, provider, host, item.type, callback, ++rank, tracks);
                    return [3, 4];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize }, provider, 'PATTERN SIZE');
                for (_b = 0, patternSize_1 = patternSize; _b < patternSize_1.length; _b++) {
                    patternItem = patternSize_1[_b];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? Number(sizeQuality[1]) : 1080;
                    directQuality.push({
                        file: patternItem,
                        quality: sizeQuality
                    });
                }
                if (!directQuality.length) {
                    return [3, 4];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.log({ directQuality: directQuality }, provider, 'DIRECT QUALITY');
                libs.embed_callback(directQuality[0].file, provider, HOST, 'Hls', callback, ++rank, tracks, directQuality);
                _c.label = 4;
            case 4:
                _a++;
                return [3, 2];
            case 5: return [2];
        }
    });
}); };
