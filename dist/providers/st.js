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
    function makeid(length) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    var iv, key, ip, appKey, appId, PROVIDER, encrypt_1, md5_1, getVerify_1, randomString_1, headers_1, getExpiryDate, queryAPI, searchQuery, resultSearch, ID, _i, _a, searchItem, title, year, id, queryDirect, directData, listDirectData, _b, listDirectData_1, directItem, quality, url, e_1;
    var _this = this;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                iv = 'wEiphTn!';
                key = '123d6cedf626dy54233aa1w6';
                ip = "http://152.32.149.160";
                appKey = "moviebox";
                appId = 'com.tdo.showbox';
                PROVIDER = 'XSUPERSTREAM';
                _c.label = 1;
            case 1:
                _c.trys.push([1, 4, , 5]);
                encrypt_1 = function (message) {
                    var keyHex = cryptoS.enc.Utf8.parse(key);
                    var ivHex = cryptoS.enc.Utf8.parse(iv);
                    var encrypted = cryptoS.TripleDES.encrypt(message, keyHex, { iv: ivHex, mode: cryptoS.mode.CBC, padding: cryptoS.pad.Pkcs7 });
                    var data = encrypted.ciphertext.toString(cryptoS.enc.Base64);
                    return data;
                };
                md5_1 = function (str) {
                    return cryptoS.MD5(str).toString();
                };
                getVerify_1 = function (str, str2, str3) {
                    if (str) {
                        return md5_1(md5_1(str2) + str3 + str);
                    }
                    return null;
                };
                randomString_1 = makeid(32);
                headers_1 = {
                    Platform: 'android',
                    Accept: 'charset=utf-8',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
                getExpiryDate = function () {
                    return (Math.floor(Date.now() / 1000)) + 60 * 60 * 12;
                };
                queryAPI = function (query) { return __awaiter(_this, void 0, void 0, function () {
                    var encryptedQuery, appKeyHash, newBody, words, base64, data, parseData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                encryptedQuery = encrypt_1(query);
                                appKeyHash = md5_1(appKey);
                                newBody = "{\"app_key\":\"".concat(appKeyHash, "\",\"verify\": \"").concat(getVerify_1(encryptedQuery, appKey, key), "\",\"encrypt_data\":\"").concat(encryptedQuery, "\"}");
                                words = cryptoS.enc.Utf8.parse(newBody);
                                base64 = cryptoS.enc.Base64.stringify(words);
                                data = qs.stringify({
                                    "data": base64,
                                    "appid": "27",
                                    "platform": "android",
                                    "version": "129",
                                    "medium": "Website&token".concat(randomString_1)
                                });
                                libs.log({
                                    data: data
                                }, PROVIDER, 'DATA QUERY API');
                                return [4, libs.request_post('http://152.32.149.160/api/api_client/index/', headers_1, data)];
                            case 1:
                                parseData = _a.sent();
                                return [2, parseData];
                        }
                    });
                }); };
                searchQuery = "{\"childmode\":\"1\",\"app_version\":\"11.5\",\"appid\":\"".concat(appId, "\",\"module\":\"Search3\",\"channel\":\"Website\",\"page\":\"1\",\"lang\":\"en\",\"type\":\"all\",\"keyword\":\"").concat(movieInfo.title, "\",\"pagelimit\":\"20\",\"expired_date\":\"").concat(getExpiryDate(), "\",\"platform\":\"android\"}");
                return [4, queryAPI(searchQuery)];
            case 2:
                resultSearch = _c.sent();
                libs.log({
                    resultSearch: resultSearch,
                }, PROVIDER, 'RESULT SEARCH');
                if (!resultSearch.code) {
                    return [2];
                }
                ID = '';
                for (_i = 0, _a = resultSearch.data; _i < _a.length; _i++) {
                    searchItem = _a[_i];
                    title = searchItem.title;
                    year = searchItem.year;
                    id = searchItem.id;
                    libs.log({
                        title: title,
                        year: year,
                        id: id,
                        matching: libs.string_matching_title(movieInfo, title),
                        matching_year: movieInfo.year == year,
                    }, PROVIDER, 'SEARCH INFO');
                    if (libs.string_matching_title(movieInfo, title) && movieInfo.year == year) {
                        if (movieInfo.type == 'movie') {
                            ID = id;
                            break;
                        }
                        else if (movieInfo.type == 'tv') {
                            ID = id;
                            break;
                        }
                    }
                }
                libs.log({
                    ID: ID
                }, PROVIDER, 'ID');
                if (!ID) {
                    return [2];
                }
                queryDirect = "{\"childmode\":\"0\",\"uid\":\"\",\"app_version\":\"11.5\",\"appid\":\"".concat(appId, "\",\"module\":\"Movie_downloadurl_v3\",\"channel\":\"Website\",\"mid\":\"").concat(ID, "\",\"lang\":\"\",\"expired_date\":\"").concat(getExpiryDate(), "\",\"platform\":\"android\",\"oss\":\"1\",\"group\":\"\"}");
                if (movieInfo.type == 'tv') {
                    queryDirect = "{\"childmode\":\"0\",\"app_version\":\"11.5\",\"module\":\"TV_downloadurl_v3\",\"channel\":\"Website\",\"episode\":\"".concat(movieInfo.episode, "\",\"expired_date\":\"").concat(getExpiryDate(), "\",\"platform\":\"android\",\"tid\":\"").concat(ID, "\",\"oss\":\"1\",\"uid\":\"\",\"appid\":\"").concat(appId, "\",\"season\":\"").concat(movieInfo.season, "\",\"lang\":\"en\",\"group\":\"\"}");
                }
                return [4, queryAPI(queryDirect)];
            case 3:
                directData = _c.sent();
                libs.log({
                    directData: directData,
                    queryDirect: queryDirect
                }, PROVIDER, 'DIRECT DATA');
                if (!directData.code) {
                    return [2];
                }
                listDirectData = directData.data.list || [];
                for (_b = 0, listDirectData_1 = listDirectData; _b < listDirectData_1.length; _b++) {
                    directItem = listDirectData_1[_b];
                    quality = (directItem.real_quality.toLowerCase().replace('K', '').replace('p', '')) || 720;
                    url = directItem.path;
                    libs.log({
                        quality: quality,
                        url: url
                    }, PROVIDER, 'QUALITY');
                    if (!url) {
                        continue;
                    }
                    if (url.indexOf('.mkv') != -1) {
                        continue;
                    }
                    libs.embed_callback(url, PROVIDER, PROVIDER, quality, callback, 1, [], [{ file: url, quality: Number(isNaN(quality) ? 720 : quality) }]);
                }
                return [3, 5];
            case 4:
                e_1 = _c.sent();
                libs.log({ e: e_1 }, PROVIDER, 'ERROR SUPERSTREAM');
                return [3, 5];
            case 5: return [2, true];
        }
    });
}); };
