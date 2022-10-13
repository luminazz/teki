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
hosts["fembed"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, replaceUrl, headers, body, embedData, directQuality, _i, _a, embedItem, requestData, errorFvs_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                DOMAIN = 'https://vanfem.com';
                HOST = 'VANFEM';
                headers = {
                    'content-type': 'application/json;charset=UTF-8'
                };
                replaceUrl = url.replace('https://www.fembed.com/v/', 'https://vanfem.com/api/source/');
                headers = {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                };
                body = "r=https%3A%2F%2Fcinecalidad.dev%2F&d=vanfem.com";
                return [4, libs.request_post(replaceUrl, headers, body)];
            case 1:
                embedData = _b.sent();
                libs.log({
                    embedData: embedData
                }, provider, 'EMBED DATA');
                directQuality = [];
                _i = 0, _a = embedData.data;
                _b.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3, 7];
                embedItem = _a[_i];
                _b.label = 3;
            case 3:
                _b.trys.push([3, 5, , 6]);
                libs.log({
                    embedItem: embedItem,
                }, provider, 'EMBED ITEM');
                return [4, fetch(embedItem.file, {
                        redirect: 'manual',
                        method: 'HEAD'
                    })];
            case 4:
                requestData = _b.sent();
                if (requestData.url) {
                    directQuality.push({
                        file: requestData.url,
                        quality: embedItem.label.replace('p', '')
                    });
                }
                libs.log({
                    requestData: requestData.url,
                }, provider, 'requestData');
                return [3, 6];
            case 5:
                errorFvs_1 = _b.sent();
                libs.log({ errorFvs: errorFvs_1 }, provider, 'ERROR_FVS');
                return [3, 6];
            case 6:
                _i++;
                return [3, 2];
            case 7:
                if (directQuality.length) {
                    directQuality = _.orderBy(directQuality, ['quality'], ['desc']);
                    libs.log({
                        directQuality: directQuality
                    }, provider, 'DIRECT URL');
                    libs.embed_callback(directQuality[0].file, provider, HOST, 'Hls', callback, 1, [], directQuality);
                }
                return [2];
        }
    });
}); };
