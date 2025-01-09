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
libs.embed_redirect = function (embed_1, quality_1, movieInfo_1, provider_1, callback_1, host_1, subs_1) {
    var args_1 = [];
    for (var _i = 7; _i < arguments.length; _i++) {
        args_1[_i - 7] = arguments[_i];
    }
    return __awaiter(_this, __spreadArray([embed_1, quality_1, movieInfo_1, provider_1, callback_1, host_1, subs_1], args_1, true), void 0, function (embed, quality, movieInfo, provider, callback, host, subs, options, headers) {
        var hostname, headersData, contentLength;
        if (options === void 0) { options = {}; }
        if (headers === void 0) { headers = {}; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!embed) {
                        return [2];
                    }
                    hostname = libs.url_get_host(embed);
                    libs.log({ hostname: hostname, embed: embed }, provider, 'EMBED HOST');
                    if (embed.indexOf('.m3u8') != -1 || embed.indexOf('.hls') != -1) {
                        libs.embed_callback(embed, provider, host ? host : hostname.toUpperCase(), 'Hls', callback, 1, subs, [], headers);
                        return [2];
                    }
                    if (!hostname) {
                        return [2];
                    }
                    if (quality) {
                        libs.embed_callback(embed, provider, host ? host : hostname.toUpperCase(), '', callback, 1, subs, [], headers);
                        return [2];
                    }
                    if (hosts && hosts[hostname]) {
                        hosts[hostname](embed, movieInfo, provider, {
                            subs: subs ? subs : [],
                            options: options,
                        }, callback);
                        return [2];
                    }
                    return [4, libs.request_head(embed, headers)];
                case 1:
                    headersData = _a.sent();
                    contentLength = headersData['content-length'];
                    libs.log({ contentLength: contentLength }, 'CONTENT_LENGTH');
                    if (contentLength > 100000000) {
                        libs.embed_callback(embed, provider, host ? host : hostname.toUpperCase(), '', callback, 1, subs, [], headers);
                    }
                    return [2];
            }
        });
    });
};
libs.embed_parse_source = function (html) {
    var source = html.match(/sources *\: *([^\]]+)/i);
    source = source ? source[1] + "]" : "[]";
    var parse = [];
    source = "parse = ".concat(source);
    eval(source);
    return parse;
};
libs.embed_callback = function (urlDirect, provider, host, quality, callback, rank, subs, direct_quality, headers, options) {
    if (subs === void 0) { subs = []; }
    if (direct_quality === void 0) { direct_quality = []; }
    if (headers === void 0) { headers = {}; }
    if (options === void 0) { options = {}; }
    var parseSubs = [];
    if (subs.length > 0) {
        for (var _i = 0, subs_1 = subs; _i < subs_1.length; _i++) {
            var item = subs_1[_i];
            var type = "office";
            if (item.file.indexOf(".srt") == -1 && item.file.indexOf(".vtt") == -1) {
                type = "download";
            }
            if (item.file.indexOf("opensubtitles") != -1) {
                continue;
            }
            parseSubs.push({
                file: item.file,
                kind: 'captions',
                label: item.label,
                type: type,
            });
        }
        console.log({ subs: subs }, "SUBDATAPARSE");
    }
    callback(__assign({ file: urlDirect, quality: quality, host: host, source: provider, provider: libs.string_provider(provider, rank), subs: parseSubs, direct_quality: direct_quality, headers: headers }, options));
};
libs.parse_size = function (file, provider, host, type, callback, rank, tracks) { return __awaiter(_this, void 0, void 0, function () {
    var directSizes, patternSize, directQuality, _i, patternSize_1, patternItem, sizeQuality;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, libs.request_get(file, {})];
            case 1:
                directSizes = _a.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    libs.embed_callback(file, provider, host, item.type, callback, ++rank, tracks);
                    return [2];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize }, provider, 'PATTERN SIZE');
                for (_i = 0, patternSize_1 = patternSize; _i < patternSize_1.length; _i++) {
                    patternItem = patternSize_1[_i];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                    directQuality.push({
                        file: patternItem,
                        quality: sizeQuality
                    });
                }
                libs.log({ directQuality: directQuality }, provider, 'DIRECT QUALITY');
                libs.embed_callback(file, provider, host, 'Hls', callback, ++rank, tracks, directQuality);
                return [2];
        }
    });
}); };
