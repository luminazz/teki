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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
subs.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER, urlSearch, dataSearch_1, subLang_1, i, _i, _a, item, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                PROVIDER = "YTSSubs";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                if (!movieInfo.imdb_id) {
                    return [2];
                }
                urlSearch = "https://yifysubtitles.ch/movie-imdb/".concat(movieInfo.imdb_id);
                return [4, libs.request_post(urlSearch, {}, {}, true)];
            case 2:
                dataSearch_1 = _b.sent();
                subLang_1 = {};
                dataSearch_1("tr").each(function (key, item) {
                    var dataId = dataSearch_1(item).attr("data-id");
                    if (dataId) {
                        var title = dataSearch_1(item).find("a").text().replace("subtitle", "");
                        var lang = dataSearch_1(item).find("span.sub-lang").text();
                        var url = dataSearch_1(item)
                            .find("a")
                            .attr("href")
                            .replace("/subtitles/", "/subtitle/");
                        var link = "https://yifysubtitles.ch".concat(url, ".zip");
                        if (!subLang_1[lang]) {
                            subLang_1[lang] = [];
                            if (title && lang && link) {
                                subLang_1[lang].push({ title: title, lang: lang, link: link });
                            }
                        }
                    }
                });
                for (i in subLang_1) {
                    for (_i = 0, _a = subLang_1[i]; _i < _a.length; _i++) {
                        item = _a[_i];
                        libs.log({
                            file: item.link,
                            kind: "Captions",
                            label: item.lang,
                            type: "download",
                            provider: PROVIDER,
                        }, PROVIDER, "== CALLBACK ==>");
                        callback({
                            file: item.link,
                            kind: "Captions",
                            label: item.lang,
                            type: "zip",
                            provider: PROVIDER,
                        });
                    }
                }
                return [2];
            case 3:
                e_1 = _b.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 4];
            case 4: return [2, true];
        }
    });
}); };
