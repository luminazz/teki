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
hosts["streamlare"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, urlDirect, id, body, result, directUrls, directQuality, playlistDirect, patternSize, i, directUrl, size;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                libs.log({ provider: provider }, provider, 'PROVIDER RABBIT');
                DOMAIN = 'https://sltube.org';
                HOST = 'Streamlare';
                headers = {
                    "referer": url,
                    "user-agent": libs.request_getRandomUserAgent(),
                    "content-type": 'application/json;charset=UTF-8'
                };
                urlDirect = url.replace('streamlare.com', 'sltube.org');
                id = url.match(/\/e\/(.+)/i);
                id = id ? id[1] : '';
                if (!id) {
                    return [2];
                }
                libs.log({ id: id }, provider, 'ID');
                body = {
                    id: id
                };
                return [4, libs.request_post("".concat(DOMAIN, "/api/video/stream/get"), headers, body)];
            case 1:
                result = _a.sent();
                if (!result.status || result.status != 'success') {
                    return [2];
                }
                libs.log({
                    result: result,
                }, HOST, 'result api');
                directUrls = result.result || {};
                directQuality = [];
                libs.log({
                    directUrls: directUrls.file
                }, HOST, 'DIRECT URL');
                return [4, libs.request_get(directUrls.file)];
            case 2:
                playlistDirect = _a.sent();
                libs.log({ playlistDirect: playlistDirect }, HOST, 'PLAYLIST DIRECT');
                try {
                    patternSize = playlistDirect.split('\n');
                    libs.log({ patternSize: patternSize }, HOST, 'patternSize');
                    for (i = 0; i < patternSize.length; i++) {
                        if (patternSize[i].indexOf('.m3u8') == -1) {
                            continue;
                        }
                        directUrl = "".concat(directUrls.file.replace('master.m3u8', patternSize[i]));
                        size = patternSize[i - 1].match(/RESOLUTION\=([0-9]+)/);
                        size = size ? size[1] : '852';
                        if (size == '640') {
                            size = 480;
                        }
                        else if (size == '852') {
                            size = 720;
                        }
                        else if (size == '1280') {
                            size = 1080;
                        }
                        else {
                            size = 720;
                        }
                        directQuality.push({
                            file: directUrl,
                            quality: size,
                        });
                    }
                    libs.log({
                        directQuality: directQuality,
                    }, HOST, 'directQuality');
                    directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                    directQuality = _.uniqBy(directQuality, 'quality');
                    if (directQuality.length > 0) {
                        libs.embed_callback(directQuality[0].file, provider, HOST, 'Hls', callback, 1, [], directQuality);
                    }
                }
                catch (e) {
                    libs.log({ e: e }, HOST, 'ERROR PARSE');
                }
                return [2];
        }
    });
}); };
