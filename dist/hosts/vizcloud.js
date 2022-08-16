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
hosts["vizcloud"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, secretKey, id, hashMovie, urlEmbed, dataEmbed, rank, _i, _a, embedItem, embedData, patternQuality, directQuality, _b, patternQuality_1, patternItem, sizeQuality, urlDirect, urlDirect;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                DOMAIN = 'https://vizcloud.cloud';
                HOST = 'Vidcloud';
                headers = {
                    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
                    'Accept': 'application/json, text/javascript, */*; q=0.01',
                    'DNT': '1',
                    'X-Requested-With': 'XMLHttpRequest',
                    'sec-ch-ua-mobile': '?0',
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36',
                    'sec-ch-ua-platform': '"macOS"',
                    'Sec-Fetch-Site': 'same-origin',
                    'Sec-Fetch-Mode': 'cors',
                    'Sec-Fetch-Dest': 'empty',
                    'Referer': url,
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5'
                };
                secretKey = 'G1UcnhKcRLT1gcdb';
                id = url.match(/\/e\/([^\?]+)/i);
                id = id ? id[1] : '';
                if (!id) {
                    return [2];
                }
                libs.log({ id: id }, provider, 'ID VIZCLOUD');
                hashMovie = libs.string_join_fmovies(libs.string_encrypt_fmovies(libs.string_cipher_fmovies("yLiqSRbm5p9ZSFva", libs.string_encrypt_fmovies(id))).replace(/\//g, "_").replace(/=+$/, ""));
                libs.log({ hashMovie: hashMovie }, provider, 'HASH VIZCLOUD');
                urlEmbed = DOMAIN + "/mediainfo/" + hashMovie + "?key=" + secretKey;
                return [4, libs.request_get(urlEmbed, headers, false)];
            case 1:
                dataEmbed = _c.sent();
                libs.log({ urlEmbed: urlEmbed, id: id, dataEmbed: dataEmbed, subs: config.subs, hashMovie: hashMovie, urlEmbed: urlEmbed }, provider, 'DATA EMBED VIZCLOUD');
                if (!dataEmbed || !dataEmbed.status || !dataEmbed.data || !dataEmbed.data.media || !dataEmbed.data.media.sources) {
                    return [2];
                }
                rank = 0;
                _i = 0, _a = dataEmbed.data.media.sources;
                _c.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3, 5];
                embedItem = _a[_i];
                if (!embedItem.file) {
                    return [3, 4];
                }
                if (!(embedItem.file.indexOf('vidstream') != -1 || embedItem.file.indexOf('mcloud.to') != -1 || embedItem.file.indexOf('vizcloud') != -1)) return [3, 4];
                return [4, libs.request_get(embedItem.file, headers)];
            case 3:
                embedData = _c.sent();
                if (!embedData) {
                    return [3, 4];
                }
                patternQuality = embedData.match(/hls\/([0-9]+)\/[0-9]+\.m3u8/ig);
                libs.log({ patternQuality: patternQuality, file: embedItem.file }, provider, 'PATTERN QUALITY');
                if (!patternQuality) {
                    libs.embed_callback(embedItem.file, provider, HOST, 'Hls', callback, ++rank, config.subs ? config.subs : []);
                    return [3, 4];
                }
                directQuality = [];
                for (_b = 0, patternQuality_1 = patternQuality; _b < patternQuality_1.length; _b++) {
                    patternItem = patternQuality_1[_b];
                    sizeQuality = patternItem.match(/([0-9]+)/i);
                    sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                    if (embedItem.file.indexOf("list.m3u8#.mp4") != -1) {
                        urlDirect = embedItem.file.replace('list.m3u8#.mp4', patternItem);
                        libs.log({ urlDirect: urlDirect, sizeQuality: sizeQuality }, provider, 'URL DIRECR REPLACE');
                        directQuality.push({
                            file: urlDirect,
                            quality: sizeQuality
                        });
                    }
                    else if (embedItem.file.indexOf("list.m3u8") != -1) {
                        urlDirect = embedItem.file.replace('list.m3u8', patternItem);
                        libs.log({ urlDirect: urlDirect, sizeQuality: sizeQuality }, provider, 'URL DIRECR REPLACE');
                        directQuality.push({
                            file: urlDirect,
                            quality: sizeQuality
                        });
                    }
                }
                libs.embed_callback(embedItem.file, provider, HOST, 'Hls', callback, ++rank, config.subs ? config.subs : [], directQuality, {
                    referer: url,
                    origin: DOMAIN,
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'cross-site',
                });
                _c.label = 4;
            case 4:
                _i++;
                return [3, 2];
            case 5: return [2];
        }
    });
}); };
