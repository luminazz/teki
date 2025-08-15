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
    var PROVIDER, DOMAIN, headers, C, B, A, D, urlovo, formattedString, reversedString, firstBase64, secondBase64, response, json, firstSource, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                PROVIDER = 'XVidsrcVip';
                DOMAIN = "https://vidsrc.vip";
                headers = {
                    'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    'referer': "https://vidsrc.vip/",
                    'origin': "https://vidsrc.vip"
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                C = movieInfo.tmdb_id
                    .toString()
                    .split("")
                    .map(function (digit) {
                    var encoding = "abcdefghij";
                    return encoding[parseInt(digit)];
                })
                    .join("");
                B = C.split("").reverse().join("");
                A = libs.string_btoa(B);
                D = libs.string_btoa(A);
                urlovo = "https://api2.vidsrc.vip/movie/".concat(D);
                if (movieInfo.type == 'tv') {
                    formattedString = "".concat(movieInfo.tmdb_id, "-").concat(movieInfo.season, "-").concat(movieInfo.episode);
                    reversedString = formattedString.split('').reverse().join('');
                    firstBase64 = libs.string_btoa(reversedString);
                    secondBase64 = libs.string_btoa(firstBase64);
                    urlovo = "https://api2.vidsrc.vip/tv/".concat(secondBase64);
                }
                return [4, fetch(urlovo)];
            case 2:
                response = _a.sent();
                if (!response.ok) {
                    return [2];
                }
                return [4, response.json()];
            case 3:
                json = _a.sent();
                libs.log({ json: json }, PROVIDER, "JSON");
                firstSource = json["source1"];
                if (!firstSource.url) {
                    return [2];
                }
                if (firstSource.language != "English") {
                    return [2];
                }
                libs.embed_callback(firstSource.url, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: firstSource.url, quality: 1080 }], headers, {
                    type: "m3u8"
                });
                return [3, 5];
            case 4:
                e_1 = _a.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 5];
            case 5: return [2];
        }
    });
}); };
