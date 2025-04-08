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
    function convertHTML(str) {
        var htmlEntitiesMap = {
            '&quot;': '"',
            '&apos;': "'",
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
        };
        var parseStr = str;
        for (var item in htmlEntitiesMap) {
            var convertHTMLEntitiesRegExp = new RegExp(item, 'g');
            parseStr = parseStr.replace(convertHTMLEntitiesRegExp, htmlEntitiesMap[item]);
        }
        return parseStr;
    }
    var PROVIDER, DOMAIN, urlSearch, parseSearch, files, parseFile, jsonFile, movieLink, parseLink, directUrls, _i, parseLink_1, linkItem, trimLink, quality, parseTrimLink, firstTrimLink, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                PROVIDER = 'HSvetaCdn';
                DOMAIN = "https://5100.svetacdn.in/IAF0wWTdNYZm";
                urlSearch = '';
                urlSearch = "".concat(DOMAIN, "?imdb_id=").concat(movieInfo.imdb_id);
                return [4, libs.request_get(urlSearch, {}, true)];
            case 1:
                parseSearch = _a.sent();
                libs.log({ length: parseSearch('#files').length, urlSearch: urlSearch }, PROVIDER, 'FILES');
                files = parseSearch('#files').attr('value');
                if (!files) {
                    return [2];
                }
                parseFile = convertHTML(files);
                libs.log({ parseFile: parseFile }, PROVIDER, "PARSE FILE");
                parseFile = parseFile.replace('"381"', "\"".concat(movieInfo.type, "\""));
                libs.log({ parseFile: parseFile }, PROVIDER, "PARSE FILE 2");
                jsonFile = JSON.parse(parseFile);
                libs.log({ jsonFile: jsonFile }, PROVIDER, "JSON FILE");
                movieLink = jsonFile[movieInfo.type];
                parseLink = movieLink.split(',');
                libs.log({ parseLink: parseLink }, PROVIDER, 'PARSE LINK');
                directUrls = [];
                for (_i = 0, parseLink_1 = parseLink; _i < parseLink_1.length; _i++) {
                    linkItem = parseLink_1[_i];
                    trimLink = linkItem.trim();
                    quality = trimLink.match(/\[([0-9]+p*)\]/i);
                    quality = quality ? Number(quality[1].replace('p', '')) : 720;
                    libs.log({ quality: quality, trimLink: trimLink }, PROVIDER, 'QUALITY');
                    trimLink = trimLink.replace(/\[[0-9]+p*\]/i, '');
                    trimLink = trimLink.trim();
                    parseTrimLink = trimLink.split(' or ');
                    firstTrimLink = parseTrimLink[0];
                    if (_.startsWith(firstTrimLink, '/')) {
                        firstTrimLink = "https:".concat(firstTrimLink);
                    }
                    directUrls.push({
                        file: firstTrimLink,
                        quality: quality,
                    });
                }
                directUrls = _.orderBy(directUrls, ['quality'], ['desc']);
                libs.log({ directUrls: directUrls }, PROVIDER, 'DIRECT URLS');
                if (!directUrls.length) {
                    return [2];
                }
                libs.embed_callback(directUrls[0].file, PROVIDER, PROVIDER, 'Hls', callback, 1, [], directUrls);
                return [3, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1, 'ERROR SVERACDN');
                return [3, 3];
            case 3: return [2, true];
        }
    });
}); };
