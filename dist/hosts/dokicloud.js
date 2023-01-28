var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
hosts["dokicloud"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, id, urlDirect, parseDirect, source1, source2, source3, parseTrack, tracks, _i, parseTrack_1, trackItem, lang, parseLang, rank, _a, source1_1, item, directSizes, patternSize, directQuality, _b, patternSize_1, patternItem, sizeQuality;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                libs.log({ provider: provider }, provider, 'PROVIDER');
                DOMAIN = 'https://dokicloud.one';
                HOST = 'DokiCloud';
                headers = {
                    'referer': 'https://fmovies.ps'
                };
                id = url.match(/embed\-[0-9]+\/([A-z0-9]+)/);
                id = id ? id[1] : '';
                libs.log({
                    id: id
                }, HOST, 'ID');
                if (!id) {
                    return [2];
                }
                urlDirect = "".concat(DOMAIN, "/ajax/embed-4/getSources?id=").concat(id);
                return [4, libs.request_get(urlDirect, __assign(__assign({}, headers), { 'x-requested-with': 'XMLHttpRequest' }))];
            case 1:
                parseDirect = _c.sent();
                libs.log({
                    parseDirect: parseDirect
                }, HOST, "PARSE DIRECT");
                return [4, libs.embed_fmovies_id(parseDirect['sources'], headers)];
            case 2:
                source1 = (_c.sent()) || [];
                libs.log({ source1: source1, tracks: tracks }, HOST, 'SOURCES_1');
                return [4, libs.embed_fmovies_id(parseDirect['sourcesBackup'], headers)];
            case 3:
                source2 = (_c.sent()) || [];
                source3 = __spreadArray(__spreadArray([], source1, true), source2, true);
                parseTrack = parseDirect['tracks'] || [];
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
                _a = 0, source1_1 = source1;
                _c.label = 4;
            case 4:
                if (!(_a < source1_1.length)) return [3, 7];
                item = source1_1[_a];
                if (!item.file) {
                    return [3, 6];
                }
                if (item.file.indexOf('thedaywestream') !== -1) {
                    return [3, 6];
                }
                if (item.file.indexOf('birdsystem') !== -1) {
                    return [3, 6];
                }
                return [4, libs.request_get(item.file, {})];
            case 5:
                directSizes = _c.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    libs.embed_callback(item.file, provider, host, item.type, callback, ++rank, tracks);
                    return [3, 6];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize }, provider, 'PATTERN SIZE');
                for (_b = 0, patternSize_1 = patternSize; _b < patternSize_1.length; _b++) {
                    patternItem = patternSize_1[_b];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                    if (patternItem.indexOf('feetcdn.com:2223') != -1 && movieInfo.platform && movieInfo.platform == 'android') {
                        libs.log({ patternItem: patternItem, movieInfo: movieInfo }, provider, 'ignorePattern');
                        continue;
                    }
                    directQuality.push({
                        file: patternItem,
                        quality: sizeQuality
                    });
                }
                if (!directQuality.length) {
                    return [3, 6];
                }
                libs.log({ directQuality: directQuality }, provider, 'DIRECT QUALITY');
                libs.embed_callback(item.file, provider, HOST, 'Hls', callback, ++rank, tracks, directQuality);
                _c.label = 6;
            case 6:
                _a++;
                return [3, 4];
            case 7: return [2];
        }
    });
}); };
