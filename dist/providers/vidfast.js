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
    var PROVIDER, DOMAIN, headers, url, dataDetail, htmlDetail, ID, deID, urlSource, headerSources, dataSources, _i, dataSources_1, item, urlDirect, headerDirect, dataDirect, tracks, _a, _b, trackItem, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                PROVIDER = 'BVidfast';
                DOMAIN = "https://www.vidfast.pro";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': "".concat(DOMAIN, "/"),
                    "origin": "".concat(DOMAIN)
                };
                _c.label = 1;
            case 1:
                _c.trys.push([1, 10, , 11]);
                url = "".concat(DOMAIN, "/movie/").concat(movieInfo.tmdb_id);
                if (movieInfo.type == "tv") {
                    url = "".concat(DOMAIN, "/tv/").concat(movieInfo.tmdb_id, "/").concat(movieInfo.season, "/").concat(movieInfo.episode);
                }
                return [4, fetch(url, {
                        headers: headers
                    })];
            case 2:
                dataDetail = _c.sent();
                return [4, dataDetail.text()];
            case 3:
                htmlDetail = _c.sent();
                ID = htmlDetail.match(/\"en\\\" *\: *\\ *\"([^\\]+)/i);
                ID = ID ? ID[1] : "";
                libs.log({ ID: ID }, PROVIDER, 'ID');
                if (!ID) {
                    return [2];
                }
                return [4, libs.request_get("https://aquariumtv.app/vf?id=".concat(ID))];
            case 4:
                deID = _c.sent();
                libs.log({ deID: deID }, PROVIDER, 'DE ID');
                if (!deID) {
                    return [2];
                }
                urlSource = "".concat(DOMAIN, "/he/20d11827-f529-5383-a1d6-a3080212d24e/APA916qimcHD7WH8DxkU8i5aOa2pH6KMjb8y0_0cA6XU0zYRHeEsNTSk-7ZtIrzsF6-rRLKW31ibthrXP1mQLt_NJQpLf0P_SwkFEN511q87n5UP0qvaUD30YLbPajKQWz29WUupqiCSo4TNR5qpbkHL0jX_KOZbULMTh-T4o4wTb1_0b3XM_92/f15e41055649bce34cf0b709011dee2cbebc6259/3YpJdj9D/").concat(deID);
                headerSources = {
                    referer: url,
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    "content-type": "application/x-www-form-urlencoded"
                };
                return [4, libs.request_post(urlSource, headerSources, {})];
            case 5:
                dataSources = _c.sent();
                libs.log({ dataSources: dataSources }, PROVIDER, 'DATA SOURCES');
                if (!dataSources) {
                    return [2];
                }
                _i = 0, dataSources_1 = dataSources;
                _c.label = 6;
            case 6:
                if (!(_i < dataSources_1.length)) return [3, 9];
                item = dataSources_1[_i];
                urlDirect = "".concat(DOMAIN, "/he/20d11827-f529-5383-a1d6-a3080212d24e/APA916qimcHD7WH8DxkU8i5aOa2pH6KMjb8y0_0cA6XU0zYRHeEsNTSk-7ZtIrzsF6-rRLKW31ibthrXP1mQLt_NJQpLf0P_SwkFEN511q87n5UP0qvaUD30YLbPajKQWz29WUupqiCSo4TNR5qpbkHL0jX_KOZbULMTh-T4o4wTb1_0b3XM_92/f15e41055649bce34cf0b709011dee2cbebc6259/C-BrgxRt0A/").concat(item.data);
                headerDirect = {
                    referer: url,
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    "content-type": "application/x-www-form-urlencoded"
                };
                return [4, libs.request_post(urlDirect, headerDirect, {})];
            case 7:
                dataDirect = _c.sent();
                libs.log({ dataDirect: dataDirect }, PROVIDER, 'DATA DIRECT');
                if (!dataDirect || !dataDirect.url) {
                    return [3, 8];
                }
                tracks = [];
                for (_a = 0, _b = dataDirect.tracks; _a < _b.length; _a++) {
                    trackItem = _b[_a];
                    tracks.push({
                        file: trackItem.file,
                        kind: 'captions',
                        label: trackItem.label,
                    });
                }
                libs.log({ tracks: tracks }, PROVIDER, 'TRACKS');
                libs.embed_callback(dataDirect.url, PROVIDER, PROVIDER, 'Hls', callback, 1, tracks, [{ file: dataDirect.url, quality: 1080 }], headers);
                _c.label = 8;
            case 8:
                _i++;
                return [3, 6];
            case 9: return [3, 11];
            case 10:
                e_1 = _c.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 11];
            case 11: return [2];
        }
    });
}); };
