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
    var PROVIDER, DOMAIN, headers, urlSearch, dataDetail, htmlDetail, urlDirect, token, expires, buildUrlDirect, dataDirect, htmlDirect, dataVideo, directQuality, _i, dataVideo_1, item, quality, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'Vixsrc';
                DOMAIN = "https://vixsrc.to";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
                    'Referer': "https://vixsrc.to/",
                    'Origin': DOMAIN,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                urlSearch = "".concat(DOMAIN, "/movie/").concat(movieInfo.tmdb_id);
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/tv/").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                return [4, fetch(urlSearch, {
                        headers: headers,
                    })];
            case 2:
                dataDetail = _a.sent();
                return [4, dataDetail.text()];
            case 3:
                htmlDetail = _a.sent();
                urlDirect = htmlDetail.match(/url *\: *\'([^\']+)/i);
                urlDirect = urlDirect ? urlDirect[1] : "";
                libs.log({ urlDirect: urlDirect }, PROVIDER, "URL DIRECT");
                if (!urlDirect) {
                    return [2];
                }
                token = htmlDetail.match(/\'token\' *\: *\'([^\']+)/i);
                token = token ? token[1] : "";
                libs.log({ token: token }, PROVIDER, "TOKEN");
                if (!token) {
                    return [2];
                }
                expires = htmlDetail.match(/\'expires\' *\: *\'([^\']+)/i);
                expires = expires ? expires[1] : "";
                libs.log({ expires: expires }, PROVIDER, "EXPIRES");
                if (!expires) {
                    return [2];
                }
                buildUrlDirect = "".concat(urlDirect, "?token=").concat(token, "&expires=").concat(expires, "&h=1&lang=en");
                if (urlDirect.indexOf("?") != -1) {
                    buildUrlDirect = "".concat(urlDirect, "&token=").concat(token, "&expires=").concat(expires, "&h=1&lang=en");
                }
                return [4, fetch(buildUrlDirect, {
                        headers: headers,
                    })];
            case 4:
                dataDirect = _a.sent();
                return [4, dataDirect.text()];
            case 5:
                htmlDirect = _a.sent();
                libs.log({ buildUrlDirect: buildUrlDirect, htmlDirect: htmlDirect }, PROVIDER, "FINAL URL DIRECT");
                dataVideo = htmlDirect.match(/^https:\/\/vixsrc\.to\/playlist\/.*?type=video.*?$/igm);
                libs.log({ dataVideo: dataVideo }, PROVIDER, "DATA VIDEO");
                directQuality = [];
                for (_i = 0, dataVideo_1 = dataVideo; _i < dataVideo_1.length; _i++) {
                    item = dataVideo_1[_i];
                    if (item.indexOf("type=video") == -1 || item.indexOf("https") == -1) {
                        continue;
                    }
                    quality = item.match(/rendition\=([0-9]+)/i);
                    libs.log({ quality: quality }, PROVIDER, "QUALITY MATCH");
                    quality = quality ? quality[1] : 1080;
                    directQuality.push({ file: item, quality: Number(quality) });
                }
                libs.log({ directQuality: directQuality }, PROVIDER, "DIRECT QUALITY");
                if (!directQuality.length) {
                    return [2];
                }
                directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                libs.embed_callback(directQuality[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directQuality, headers);
                return [3, 7];
            case 6:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 7];
            case 7: return [2];
        }
    });
}); };
