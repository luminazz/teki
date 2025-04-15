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
    var DOMAIN, PROVIDER, headers, urlDetail, parseDetail, streamKey, urlAjax, headersAjax, bodyAjax, dataAjax, embedUrl, parseEmbed, csrfToken, formData, headersAjax, embedData, jsonEmbed, _i, _a, item, directUrl, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                DOMAIN = "https://hollymoviehd.cc";
                PROVIDER = 'NHollyMovieHD';
                headers = {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
                    "Referer": "https://hollymoviehd.cc/",
                    "Origin": "https://hollymoviehd.cc",
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                urlDetail = "".concat(DOMAIN, "/").concat(libs.url_slug_search(movieInfo, '-'), "-").concat(movieInfo.year, "/");
                if (movieInfo.type == "tv") {
                    urlDetail = "".concat(DOMAIN, "/episode/").concat(libs.url_slug_search(movieInfo, '-'), "-season-").concat(movieInfo.season, "-episode-").concat(movieInfo.episode, "/");
                }
                libs.log(urlDetail, PROVIDER, 'INFO');
                return [4, libs.request_get(urlDetail, headers, true)];
            case 2:
                parseDetail = _b.sent();
                streamKey = parseDetail("#player2").attr("data-streamkey");
                libs.log(streamKey, PROVIDER, 'STREAM KEY');
                if (!streamKey) {
                    return [2];
                }
                urlAjax = "".concat(DOMAIN, "/wp-admin/admin-ajax.php");
                headersAjax = {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
                    "Referer": DOMAIN,
                    "Origin": DOMAIN,
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                };
                bodyAjax = qs.stringify({
                    action: "ajax_getlinkstream",
                    streamkey: streamKey,
                });
                return [4, libs.request_post(urlAjax, headersAjax, bodyAjax)];
            case 3:
                dataAjax = _b.sent();
                libs.log(dataAjax, PROVIDER, 'DATA AJAX');
                if (!dataAjax.servers_iframe.streamsvr) {
                    return [2];
                }
                embedUrl = dataAjax.servers_iframe.streamsvr;
                if (!embedUrl.indexOf("hollymoviehd") == -1) {
                    return [2];
                }
                return [4, libs.request_get(embedUrl, headers, true)];
            case 4:
                parseEmbed = _b.sent();
                csrfToken = parseEmbed('#csrf_token').val();
                libs.log(csrfToken, PROVIDER, 'CSRF TOKEN');
                formData = new FormData();
                formData.append("csrf_token", csrfToken);
                headersAjax = {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
                    "Referer": DOMAIN,
                    "Origin": DOMAIN,
                    "Content-Type": "multipart/form-data",
                };
                return [4, fetch(embedUrl, {
                        method: "POST",
                        body: formData,
                        headers: headersAjax,
                    })];
            case 5:
                embedData = _b.sent();
                return [4, embedData.json()];
            case 6:
                jsonEmbed = _b.sent();
                libs.log(jsonEmbed, PROVIDER, 'JSON EMBED');
                if (!jsonEmbed.sources) {
                    return [2, false];
                }
                for (_i = 0, _a = jsonEmbed.sources; _i < _a.length; _i++) {
                    item = _a[_i];
                    if (!item.file) {
                        continue;
                    }
                    if (item.file.indexOf("streamsvr") == -1) {
                        continue;
                    }
                    if (_.startsWith(item.file, "/")) {
                        directUrl = "https://gstream.hollymoviehd.cc".concat(item.file);
                        libs.embed_callback(directUrl, PROVIDER, PROVIDER, 'Hls', callback, 1, [], [{ file: directUrl, quality: 1080 }], {}, {
                            type: "m3u8",
                        });
                        continue;
                    }
                }
                return [3, 8];
            case 7:
                e_1 = _b.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 8];
            case 8: return [2, true];
        }
    });
}); };
