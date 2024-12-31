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
subs.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER, DOMAIN, slug, headers, body, dataSearch, urlGetSub, subLang, _i, _a, item, lang, _b, _c, _d, _e, i, _f, _g, item, linkDetail, title, lang, subID, episode, slugGetSub, body_1, dataSub, token, urlDownload, e_1;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                PROVIDER = "SubSource";
                DOMAIN = "https://subsource.net";
                _h.label = 1;
            case 1:
                _h.trys.push([1, 11, , 12]);
                slug = "".concat(libs.url_slug_search(movieInfo, "-"), "-").concat(movieInfo.year);
                if (movieInfo.type == "tv") {
                    slug = "".concat(libs.url_slug_search(movieInfo, "-"));
                }
                headers = {
                    "Content-type": "application/json",
                };
                body = { langs: [], movieName: slug };
                if (movieInfo.type == "tv") {
                    body.season = "season-".concat(movieInfo.season);
                }
                libs.log({ body: body }, PROVIDER, "== BODY ==");
                return [4, libs.request_post("https://api.subsource.net/api/getMovie", headers, body, false)];
            case 2:
                dataSearch = _h.sent();
                libs.log({ dataSearch: dataSearch }, PROVIDER, "== DATA SEARCH ==");
                if (!!dataSearch.success) return [3, 4];
                if (movieInfo.type == "tv") {
                    body = {
                        langs: [],
                        movieName: "".concat(libs.url_slug_search(movieInfo, "-"), "-").concat(movieInfo.year),
                        season: "season-".concat(movieInfo.season),
                    };
                }
                return [4, libs.request_post("https://api.subsource.net/api/getMovie", headers, body, false)];
            case 3:
                dataSearch = _h.sent();
                if (!dataSearch.success) {
                    return [2];
                }
                _h.label = 4;
            case 4:
                urlGetSub = "https://api.subsource.net/api/getSub";
                subLang = {};
                for (_i = 0, _a = dataSearch.subs; _i < _a.length; _i++) {
                    item = _a[_i];
                    lang = item.lang;
                    if (!lang) {
                        continue;
                    }
                    if (!subLang[lang]) {
                        subLang[lang] = [];
                    }
                    if (subLang[lang].length >= 1) {
                        continue;
                    }
                    subLang[lang].push(item);
                }
                libs.log({ subLang: subLang }, PROVIDER, "SUB LANG");
                _b = subLang;
                _c = [];
                for (_d in _b)
                    _c.push(_d);
                _e = 0;
                _h.label = 5;
            case 5:
                if (!(_e < _c.length)) return [3, 10];
                _d = _c[_e];
                if (!(_d in _b)) return [3, 9];
                i = _d;
                _f = 0, _g = subLang[i];
                _h.label = 6;
            case 6:
                if (!(_f < _g.length)) return [3, 9];
                item = _g[_f];
                linkDetail = item.fullLink;
                title = item.releaseName;
                lang = item.lang;
                subID = item.subId;
                libs.log({ linkDetail: linkDetail, title: title, lang: lang, subID: subID }, PROVIDER, "SUB");
                if (!linkDetail || !title || !lang) {
                    return [3, 8];
                }
                if (movieInfo.type == "tv") {
                    episode = "S".concat(movieInfo.season < 10 ? "0" + movieInfo.season : movieInfo.season, "E").concat(movieInfo.episode < 10 ? "0" + movieInfo.episode : movieInfo.episode);
                    if (title.indexOf(episode) == -1) {
                        return [3, 8];
                    }
                }
                linkDetail = "".concat(DOMAIN).concat(linkDetail);
                slugGetSub = slug;
                if (movieInfo.type == "tv") {
                    slugGetSub = "".concat(slug, "-season-").concat(movieInfo.season);
                }
                body_1 = { movie: slugGetSub, lang: lang.toLowerCase(), id: subID };
                return [4, libs.request_post(urlGetSub, headers, body_1, false)];
            case 7:
                dataSub = _h.sent();
                libs.log({ dataSub: dataSub, body: body_1, urlGetSub: urlGetSub }, PROVIDER, "== DATA SUB ==");
                token = dataSub.sub.downloadToken;
                if (!token) {
                    return [3, 8];
                }
                urlDownload = "https://api.subsource.net/api/downloadSub/".concat(token);
                libs.log({ urlDownload: urlDownload }, PROVIDER, "== URL DOWNLOAD ==");
                callback({
                    file: urlDownload,
                    kind: "Captions",
                    label: lang,
                    type: "download",
                });
                _h.label = 8;
            case 8:
                _f++;
                return [3, 6];
            case 9:
                _e++;
                return [3, 5];
            case 10: return [2];
            case 11:
                e_1 = _h.sent();
                libs.log({ e: e_1 }, PROVIDER, "ERROR");
                return [3, 12];
            case 12: return [2, true];
        }
    });
}); };
