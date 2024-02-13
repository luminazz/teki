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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
source.getResource = function (movieInfo, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var handleStreamsb, handleVidCloud, PROVIDER, DOMAIN, urlSearch, headers, parseSearch, serversData, serverItem;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                handleStreamsb = function (code) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2];
                }); }); };
                handleVidCloud = function (code) { return __awaiter(_this, void 0, void 0, function () {
                    var PROVIDER_EMBED, DOMAIN_MEMBED, urlEmbed, parseUrlEmbed, scriptData, secretKey, ivKey, decryptScriptData, scriptStringify, subScript, encryptScript, urlSources, parseSourceData, sourcesEmbed, parseSourceEmbed, totalSource, _i, totalSource_1, hlsItem;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                PROVIDER_EMBED = 'MEMBED';
                                DOMAIN_MEMBED = 'https://membed.net';
                                urlEmbed = "".concat(DOMAIN_MEMBED, "/streaming.php?id=").concat(code);
                                libs.log({
                                    urlEmbed: urlEmbed
                                }, PROVIDER_EMBED, 'urlEmbed');
                                return [4, libs.request_get(urlEmbed, {}, true)];
                            case 1:
                                parseUrlEmbed = _a.sent();
                                scriptData = parseUrlEmbed("script[data-name='crypto']").attr('data-value');
                                libs.log({
                                    parseUrlEmbed: parseUrlEmbed,
                                    scriptData: scriptData,
                                    urlEmbed: urlEmbed
                                }, PROVIDER_EMBED, 'SCRIPT DATA');
                                if (!scriptData) {
                                    return [2];
                                }
                                secretKey = "25742532592" + "1384967446658" + "79883281";
                                ivKey = "922567" + "90839" + "61858";
                                decryptScriptData = crypto.AES.decrypt(scriptData, crypto.enc.Utf8.parse(secretKey), { iv: crypto.enc.Utf8.parse(ivKey) });
                                scriptStringify = crypto.enc.Utf8.stringify(decryptScriptData);
                                subScript = scriptStringify.substr(0, scriptStringify.indexOf('&'));
                                libs.log({
                                    subScript: subScript,
                                }, PROVIDER_EMBED, 'SUBSCRIPT');
                                encryptScript = crypto.AES.encrypt(subScript, crypto.enc.Utf8.parse(secretKey), { iv: crypto.enc.Utf8.parse(ivKey) }).toString();
                                libs.log({
                                    encryptScript: encryptScript,
                                }, PROVIDER_EMBED, 'ENCRYPT_DATA');
                                urlSources = "".concat(DOMAIN_MEMBED, "/encrypt-ajax.php?id=").concat(encryptScript, "&alias=").concat(subScript);
                                return [4, libs.request_get(urlSources, {
                                        'x-requested-with': 'XMLHttpRequest',
                                    })];
                            case 2:
                                parseSourceData = _a.sent();
                                libs.log({
                                    parseSourceData: parseSourceData,
                                    urlSources: urlSources,
                                }, PROVIDER_EMBED, 'parseSourceData');
                                if (!parseSourceData.data) {
                                    return [2];
                                }
                                sourcesEmbed = crypto.enc.Utf8.stringify(crypto.AES.decrypt(parseSourceData.data, crypto.enc.Utf8.parse(secretKey), {
                                    iv: crypto.enc.Utf8.parse(ivKey)
                                }));
                                libs.log({
                                    sourcesEmbed: sourcesEmbed,
                                }, PROVIDER_EMBED, 'sourcesEmbed');
                                parseSourceEmbed = JSON.parse(sourcesEmbed);
                                totalSource = __spreadArray([], (parseSourceEmbed.source || []), true);
                                _i = 0, totalSource_1 = totalSource;
                                _a.label = 3;
                            case 3:
                                if (!(_i < totalSource_1.length)) return [3, 6];
                                hlsItem = totalSource_1[_i];
                                return [4, libs.embed_redirect(hlsItem.file, 'HLS', movieInfo, PROVIDER, callback, PROVIDER, parseSourceEmbed.track.tracks || [])];
                            case 4:
                                _a.sent();
                                _a.label = 5;
                            case 5:
                                _i++;
                                return [3, 3];
                            case 6: return [2];
                        }
                    });
                }); };
                PROVIDER = 'OpenVids';
                DOMAIN = "https://openvids.io";
                urlSearch = '';
                if (movieInfo.type == 'tv') {
                    urlSearch = "".concat(DOMAIN, "/api/servers.json?imdb=").concat(movieInfo.imdb_id, "-").concat(movieInfo.season, "-").concat(movieInfo.episode);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/api/servers.json?imdb=").concat(movieInfo.imdb_id);
                }
                headers = {
                    authority: 'openvids.io',
                    accept: '*/*',
                    referer: urlSearch,
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
                    year: movieInfo.year,
                    updatedat: '2022-08-27T23:34:15.558Z',
                    title: movieInfo.title
                };
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                return [4, libs.request_get(urlSearch, headers)];
            case 1:
                parseSearch = _a.sent();
                libs.log({ parseSearch: parseSearch }, PROVIDER, 'DATA SEARCH');
                if (!parseSearch.ok) {
                    return [2];
                }
                serversData = parseSearch.servers || {};
                for (serverItem in serversData) {
                    libs.log({ serverItem: serverItem }, PROVIDER, 'serverItem');
                    if (serverItem === 'streamsb') {
                        handleStreamsb(serversData[serverItem].code);
                    }
                    else if (serverItem === 'vidcloud') {
                        handleVidCloud(serversData[serverItem].code);
                    }
                }
                return [2, true];
        }
    });
}); };
