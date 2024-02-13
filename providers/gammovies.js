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
source.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var revertJson, PROVIDER, DOMAIN, urlSearch, body, headers, mimeType, querySearch, dataFiles, directUrls, _i, dataFiles_1, fileItem, tvIndexOf, pathData, urlI2Path, id2PathData, directUrl, parseDirect, quality, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                revertJson = function (json) {
                    var slug = json.split("").reverse().join("").substring(24);
                    return libs.string_base64_decode(slug.substring(0, slug.length - 20));
                };
                PROVIDER = 'JGAMMOVIE';
                DOMAIN = "https://chill.aicirou.workers.dev/0:";
                urlSearch = "".concat(DOMAIN, "search");
                body = {
                    q: "".concat(movieInfo.type == 'movie' ? "".concat(movieInfo.title, " ").concat(movieInfo.year) : "".concat(movieInfo.title, " S").concat(movieInfo.season < 10 ? "0".concat(movieInfo.season) : "".concat(movieInfo.season), "E").concat(movieInfo.episode < 10 ? "0".concat(movieInfo.episode) : "".concat(movieInfo.episode))),
                    page_token: '',
                    page_index: 0,
                };
                headers = {
                    'content-type': 'application/x-www-form-urlencoded'
                };
                mimeType = ["video/x-matroska",
                    "video/mp4",
                    "video/x-msvideo"];
                return [4, libs.request_post(urlSearch, headers, body)];
            case 1:
                querySearch = _a.sent();
                libs.log({ body: body, headers: headers, querySearch: querySearch }, PROVIDER, 'SEARCH INFO');
                dataFiles = querySearch.data.files || [];
                directUrls = [];
                _i = 0, dataFiles_1 = dataFiles;
                _a.label = 2;
            case 2:
                if (!(_i < dataFiles_1.length)) return [3, 6];
                fileItem = dataFiles_1[_i];
                if (!mimeType.includes(fileItem.mimeType)) {
                    return [3, 5];
                }
                if (movieInfo.type == 'movie') {
                    if (fileItem.name.indexOf(movieInfo.year) == -1) {
                        return [3, 5];
                    }
                }
                else {
                    tvIndexOf = fileItem.name.indexOf("S".concat(movieInfo.season < 10 ? "0".concat(Number(movieInfo.season)) : "".concat(movieInfo.season), "E").concat(movieInfo.episode < 10 ? "0".concat(Number(movieInfo.episode)) : "".concat(movieInfo.episode)));
                    libs.log({ tvIndexOf: tvIndexOf }, PROVIDER, 'TV INDEX');
                    if (tvIndexOf == -1) {
                        return [3, 5];
                    }
                }
                if (fileItem.name.indexOf('2160p') == -1 && fileItem.name.indexOf('1080p') == -1) {
                    return [3, 5];
                }
                if (movieInfo.platform == 'ios' && fileItem.mimeType != 'video/mp4') {
                    return [3, 5];
                }
                pathData = {
                    id: fileItem.id
                };
                urlI2Path = "".concat(DOMAIN, "id2path");
                return [4, libs.request_post(urlI2Path, headers, pathData)];
            case 3:
                id2PathData = _a.sent();
                libs.log({ pathData: pathData, urlI2Path: urlI2Path, id2PathData: id2PathData }, PROVIDER, 'I2DATA');
                directUrl = "".concat(DOMAIN).concat(encodeURI(id2PathData));
                return [4, libs.request_head(directUrl)];
            case 4:
                parseDirect = _a.sent();
                libs.log({ parseDirect: parseDirect }, PROVIDER, 'HEADER DIRECT');
                if (parseDirect['content-type'] && parseDirect['content-type'].indexOf('text/html') != -1) {
                    return [3, 5];
                }
                quality = fileItem.name.match(/\.*([0-9]+)p/i);
                quality = quality ? quality[1] : 720;
                directUrls.push({
                    file: directUrl,
                    quality: quality
                });
                _a.label = 5;
            case 5:
                _i++;
                return [3, 2];
            case 6:
                libs.log({ directUrls: directUrls }, PROVIDER, 'DIRECT URL');
                if (!directUrls.length) {
                    return [2];
                }
                return [4, libs.embed_callback(directUrls[0].file, PROVIDER, PROVIDER, 'HLS', callback, 1, [], directUrl)];
            case 7:
                _a.sent();
                return [3, 9];
            case 8:
                error_1 = _a.sent();
                console.log(error_1, 'ERROR GAM');
                return [3, 9];
            case 9: return [2, true];
        }
    });
}); };
