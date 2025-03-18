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
    function rc4(key, inp) {
        var arr = [];
        var counter = 0;
        var i = 0;
        var tmp = 0;
        var decrypted = "";
        for (i = 0; i < 256; i++) {
            arr[i] = i;
        }
        for (i = 0; i < 256; i++) {
            counter = (counter + arr[i] + key.charCodeAt(i % key.length)) % 256;
            tmp = arr[i];
            arr[i] = arr[counter];
            arr[counter] = tmp;
        }
        i = 0;
        counter = 0;
        for (var j = 0; j < inp.length; j++) {
            i = (i + 1) % 256;
            counter = (counter + arr[i]) % 256;
            tmp = arr[i];
            arr[i] = arr[counter];
            arr[counter] = tmp;
            decrypted += String.fromCharCode(inp.charCodeAt(j) ^ arr[(arr[i] + arr[counter]) % 256]);
        }
        return decrypted;
    }
    function enc(input) {
        var key = "BCwZFCsLYWbz2ONSzAYN";
        return libs.string_btoa(libs.string_btoa(rc4(key, input)));
    }
    var PROVIDER, DOMAIN, headers, vrf, urlHash, resHash, _i, _a, item, urlDirect, resDirect, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = 'AVidsrcCC';
                DOMAIN = "https://vidsrc.cc";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'Referer': "https://vidsrc.cc/",
                    'Origin': DOMAIN,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 8, , 9]);
                return [4, libs.request_get("https://aquariumtv.app/vidsrccc?id=".concat(movieInfo.tmdb_id))];
            case 2:
                vrf = _b.sent();
                urlHash = "".concat(DOMAIN, "/api/").concat(movieInfo.tmdb_id, "/servers?id=").concat(movieInfo.tmdb_id, "&type=").concat(movieInfo.type, "&vrf=").concat(vrf);
                if (movieInfo.type == 'tv') {
                    urlHash += "&season=".concat(movieInfo.season, "&episode=").concat(movieInfo.episode);
                }
                libs.log({ vrf: vrf }, PROVIDER, "VRF");
                return [4, libs.request_get(urlHash, headers)];
            case 3:
                resHash = _b.sent();
                libs.log({ urlHash: urlHash, resHash: resHash, vrf: vrf }, PROVIDER, 'RES HASH');
                if (!resHash || !resHash.data || resHash.data.length == 0) {
                    return [2];
                }
                _i = 0, _a = resHash.data;
                _b.label = 4;
            case 4:
                if (!(_i < _a.length)) return [3, 7];
                item = _a[_i];
                urlDirect = "".concat(DOMAIN, "/api/source/").concat(item.hash, "?t=1735063337497");
                return [4, libs.request_get(urlDirect, headers)];
            case 5:
                resDirect = _b.sent();
                libs.log({ resDirect: resDirect }, PROVIDER, 'RES DIRECT');
                if (!resDirect || !resDirect.data || !resDirect.data.source) {
                    return [3, 6];
                }
                libs.embed_callback(resDirect.data.source, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: resDirect.data.source, quality: 1080 }], headers);
                _b.label = 6;
            case 6:
                _i++;
                return [3, 4];
            case 7: return [3, 9];
            case 8:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 9];
            case 9: return [2];
        }
    });
}); };
