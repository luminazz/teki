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
hosts["play.playm4u"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, headers, movieId, domainGetDirect, body, playmeData, directUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                DOMAIN = 'https://play.playm4u.xyz';
                HOST = 'PLAYM4U';
                headers = {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'referer': 'https://play.playm4u.xyz/',
                };
                movieId = url.match(/v1\/([A-z0-9]+)/i);
                movieId = movieId ? movieId[1] : '';
                libs.log(movieId, provider, 'MOVIE ID');
                if (!movieId) {
                    return [2];
                }
                domainGetDirect = "https://api-plhq.playm4u.xyz/apiv4/5e8dd16b70eac4137a676553/" + movieId;
                body = qs.stringify({
                    referrer: 'https://m4ufree.tv',
                    typeend: 'html'
                });
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 1:
                playmeData = _a.sent();
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 3];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 2:
                playmeData = _a.sent();
                _a.label = 3;
            case 3:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 5];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 4:
                playmeData = _a.sent();
                _a.label = 5;
            case 5:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 7];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 6:
                playmeData = _a.sent();
                _a.label = 7;
            case 7:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 9];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 8:
                playmeData = _a.sent();
                _a.label = 9;
            case 9:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 11];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 10:
                playmeData = _a.sent();
                _a.label = 11;
            case 11:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 13];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 12:
                playmeData = _a.sent();
                _a.label = 13;
            case 13:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 15];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 14:
                playmeData = _a.sent();
                _a.label = 15;
            case 15:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 17];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 16:
                playmeData = _a.sent();
                _a.label = 17;
            case 17:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 19];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 18:
                playmeData = _a.sent();
                _a.label = 19;
            case 19:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 21];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 20:
                playmeData = _a.sent();
                _a.label = 21;
            case 21:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 23];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 22:
                playmeData = _a.sent();
                _a.label = 23;
            case 23:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 25];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 24:
                playmeData = _a.sent();
                _a.label = 25;
            case 25:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 27];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 26:
                playmeData = _a.sent();
                _a.label = 27;
            case 27:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 29];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 28:
                playmeData = _a.sent();
                _a.label = 29;
            case 29:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 31];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 30:
                playmeData = _a.sent();
                _a.label = 31;
            case 31:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 33];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 32:
                playmeData = _a.sent();
                _a.label = 33;
            case 33:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 35];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 34:
                playmeData = _a.sent();
                _a.label = 35;
            case 35:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 37];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 36:
                playmeData = _a.sent();
                _a.label = 37;
            case 37:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 39];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 38:
                playmeData = _a.sent();
                _a.label = 39;
            case 39:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 41];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 40:
                playmeData = _a.sent();
                _a.label = 41;
            case 41:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 43];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 42:
                playmeData = _a.sent();
                _a.label = 43;
            case 43:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 45];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 44:
                playmeData = _a.sent();
                _a.label = 45;
            case 45:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 47];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 46:
                playmeData = _a.sent();
                _a.label = 47;
            case 47:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 49];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 48:
                playmeData = _a.sent();
                _a.label = 49;
            case 49:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 51];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 50:
                playmeData = _a.sent();
                _a.label = 51;
            case 51:
                if (!(!playmeData.status || playmeData.status != 1 || playmeData.type == 1 || Array.isArray(playmeData.data))) return [3, 53];
                return [4, libs.request_post(domainGetDirect, headers, body, false, false)];
            case 52:
                playmeData = _a.sent();
                _a.label = 53;
            case 53:
                libs.log({ domainGetDirect: domainGetDirect, headers: headers, body: body, playmeData: playmeData }, provider, 'PLAY ME DATA');
                directUrl = playmeData.data && !Array.isArray(playmeData.data) ? playmeData.data : '';
                if (!directUrl) {
                    return [2];
                }
                libs.log({ headers: headers, body: body, domainGetDirect: domainGetDirect, playmeData: playmeData, directUrl: directUrl }, provider, 'PLAYDATA');
                libs.embed_callback(directUrl, provider, HOST, 'Hls', callback);
                return [2];
        }
    });
}); };
