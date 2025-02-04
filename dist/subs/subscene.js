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
    var PROVIDER, movieTitle, slug, urlSearch, dataSearch_1, hrefId_1, urlSub, dataSub_1, subLang_1, _a, _b, _c, _i, i, _d, _e, item, urlGetSub, dataGetSub, link, urlDownload, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                PROVIDER = "SubScene";
                if (movieInfo.type === "tv") {
                    return [2];
                }
                _f.label = 1;
            case 1:
                _f.trys.push([1, 10, , 11]);
                movieTitle = movieInfo.title.split(":")[0];
                slug = movieTitle.split(" ").join("+");
                urlSearch = "https://sub-scene.com/search?query=".concat(slug);
                return [4, libs.request_get(urlSearch, {}, {}, true)];
            case 2:
                dataSearch_1 = _f.sent();
                hrefId_1 = "";
                dataSearch_1("div.title").each(function (key, item) {
                    var href = dataSearch_1(item).find("a").attr("href");
                    var title = dataSearch_1(item).find("a").text();
                    var checkTitle = "".concat(movieInfo.title, " (").concat(movieInfo.year, ")");
                    if (title === checkTitle) {
                        hrefId_1 = href;
                    }
                });
                libs.log("https://sub-scene.com".concat(hrefId_1), PROVIDER, "== href ==>");
                if (!hrefId_1) {
                    return [2];
                }
                urlSub = "https://sub-scene.com".concat(hrefId_1);
                return [4, libs.request_get(urlSub, {}, {}, true)];
            case 3:
                dataSub_1 = _f.sent();
                subLang_1 = {};
                dataSub_1("td.a1").each(function (key, item) {
                    var href = dataSub_1(item).find("a").attr("href");
                    var title = dataSub_1(item)
                        .find("span.new")
                        .text()
                        .replace("\n\t\t\t\t\t\t\t\t\t\t\t", "")
                        .replace("\t\t\t\t\t\t\t\t\t\t", "");
                    var lang = dataSub_1(item)
                        .find("span.l.r")
                        .text()
                        .replace("\n\t\t\t\t\t\t\t\t\t\t\t", "")
                        .replace("\t\t\t\t\t\t\t\t\t\t", "");
                    if (!subLang_1[lang]) {
                        subLang_1[lang] = [];
                        if (href && title && lang) {
                            subLang_1[lang].push({ title: title, lang: lang, href: href });
                        }
                    }
                });
                _a = subLang_1;
                _b = [];
                for (_c in _a)
                    _b.push(_c);
                _i = 0;
                _f.label = 4;
            case 4:
                if (!(_i < _b.length)) return [3, 9];
                _c = _b[_i];
                if (!(_c in _a)) return [3, 8];
                i = _c;
                _d = 0, _e = subLang_1[i];
                _f.label = 5;
            case 5:
                if (!(_d < _e.length)) return [3, 8];
                item = _e[_d];
                urlGetSub = "https://sub-scene.com".concat(item.href);
                return [4, libs.request_get(urlGetSub, {}, {}, true)];
            case 6:
                dataGetSub = _f.sent();
                link = dataGetSub("div.download").find("a.button").attr("href");
                if (link) {
                    urlDownload = "https://sub-scene.com".concat(link);
                    libs.log({
                        file: urlDownload,
                        kind: "Captions",
                        label: item.lang,
                        type: "download",
                        provider: PROVIDER,
                    }, PROVIDER, "== CALLBACK ==>");
                    callback({
                        file: urlDownload,
                        kind: "Captions",
                        label: item.lang,
                        type: "download",
                        provider: PROVIDER,
                    });
                }
                _f.label = 7;
            case 7:
                _d++;
                return [3, 5];
            case 8:
                _i++;
                return [3, 4];
            case 9: return [2];
            case 10:
                e_1 = _f.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 11];
            case 11: return [2, true];
        }
    });
}); };
