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
    var currentDate, keyCache, userAgent, PROVIDER, DOMAIN, cookieCache, urlSearch, cookieUrl, ppsseidDetail, secureID, guestToken, cookieUrlSearchData, ppsseid, parseLoginGuest, userNonce, loginData, cookieLogin, dataCache, parseData, userNonceDetail, userIdDetail, listSe, listSeId, parseSe, _i, listSeId_1, listSeIdItem, linkDetails, dSubtitles, bodyDirectData, directData, directUrl, directIndex, quality, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentDate = "".concat(libs.date_getCurrentDate(), "_").concat(libs.date_getCurrentHour());
                keyCache = "FILMXY_".concat(currentDate);
                userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36';
                PROVIDER = 'BFilmXy';
                DOMAIN = "https://www.filmxy.vip";
                libs.log({ keyCache: keyCache }, PROVIDER, 'KEY CACHE');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 19, , 20]);
                return [4, libs.db_get(keyCache)];
            case 2:
                cookieCache = _a.sent();
                libs.log({ cookieCache: cookieCache }, PROVIDER, 'cookieCache');
                urlSearch = '';
                if (movieInfo.type == 'movie') {
                    urlSearch = "".concat(DOMAIN, "/movie/").concat(movieInfo.imdb_id);
                }
                else {
                    urlSearch = "".concat(DOMAIN, "/tv/").concat(movieInfo.imdb_id);
                }
                libs.log({ urlSearch: urlSearch }, PROVIDER, 'URL SEARCH');
                cookieUrl = "".concat(DOMAIN, "/wp-admin/admin-ajax.php");
                ppsseidDetail = '';
                secureID = '';
                guestToken = '';
                return [4, libs.cookies_clearAll()];
            case 3:
                _a.sent();
                if (!!cookieCache) return [3, 12];
                return [4, axiosS.get(DOMAIN, {
                        headers: {
                            'Host': 'www.filmxy.vip',
                            'Connection': 'keep-alive',
                            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
                            'sec-ch-ua-mobile': '?0',
                            'sec-ch-ua-platform': '"macOS"',
                            'DNT': '1',
                            'Upgrade-Insecure-Requests': '1',
                            'User-Agent': userAgent,
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                            'Sec-Fetch-Site': 'none',
                            'Sec-Fetch-Mode': 'navigate',
                            'Sec-Fetch-User': '?1',
                            'Sec-Fetch-Dest': 'document',
                            'Accept-Language': 'vi-VN,vi;q=0.9',
                        }
                    })];
            case 4:
                _a.sent();
                return [4, libs.cookies_get(DOMAIN)];
            case 5:
                cookieUrlSearchData = _a.sent();
                ppsseid = cookieUrlSearchData['PHPSESSID']['value'];
                ppsseidDetail = ppsseid;
                return [4, libs.cookies_clearAll()];
            case 6:
                _a.sent();
                return [4, axiosS.get("".concat(DOMAIN, "/login/?redirect_to=https://www.filmxy.vip/"), {
                        headers: {
                            'user-agent': userAgent,
                            'cookie': "PHPSESSID=".concat(ppsseid),
                        }
                    })];
            case 7:
                parseLoginGuest = _a.sent();
                userNonce = parseLoginGuest.data.match(/var *userNonce *\= *\"([^\"]+)/i);
                userNonce = userNonce ? userNonce[1] : '';
                libs.log({ userNonce: userNonce }, PROVIDER, 'userNonce');
                if (!userNonce) {
                    return [2];
                }
                return [4, libs.cookies_clearAll()];
            case 8:
                _a.sent();
                libs.log({ ppsseid: ppsseid }, PROVIDER, 'PPSSEID');
                return [4, libs.request_post(cookieUrl, {
                        Cookie: "PHPSESSID=".concat(ppsseid, "; G_ENABLED_IDPS=google"),
                        'Host': 'www.filmxy.vip',
                        'Connection': 'keep-alive',
                        'Content-Length': '35',
                        'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
                        'DNT': '1',
                        'sec-ch-ua-mobile': '?0',
                        'User-Agent': userAgent,
                        'Accept': '*/*',
                        'X-Requested-With': 'XMLHttpRequest',
                        'sec-ch-ua-platform': '"macOS"',
                        'Origin': 'https://www.filmxy.vip',
                        'Sec-Fetch-Site': 'same-origin',
                        'Sec-Fetch-Mode': 'cors',
                        'Sec-Fetch-Dest': 'empty',
                        'Referer': 'https://www.filmxy.vip/login/?redirect_to=https://www.filmxy.vip/',
                        'Accept-Language': 'vi-VN,vi;q=0.9',
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    }, qs.stringify({
                        nonce: userNonce,
                        action: 'guest_login'
                    }), false, false)];
            case 9:
                loginData = _a.sent();
                return [4, libs.cookies_get(cookieUrl)];
            case 10:
                cookieLogin = _a.sent();
                libs.log({ cookieLogin: cookieLogin, loginData: loginData }, PROVIDER, 'cookieLogin');
                secureID = cookieLogin['wp-secure-id']['value'];
                guestToken = cookieLogin['wp-guest-token']['value'];
                return [4, libs.cookies_clearAll()];
            case 11:
                _a.sent();
                return [3, 13];
            case 12:
                dataCache = JSON.parse(cookieCache);
                libs.log({ dataCache: dataCache }, PROVIDER, "DATA CACHE");
                secureID = dataCache.secureID;
                guestToken = dataCache.guestToken;
                ppsseidDetail = dataCache.ppsseidDetail;
                _a.label = 13;
            case 13:
                libs.log({ secureID: secureID, guestToken: guestToken, ppsseidDetail: ppsseidDetail }, PROVIDER, 'DETAIL LOGGER PPSSEID');
                return [4, axiosS.request({
                        method: 'GET',
                        url: urlSearch,
                        headers: {
                            'Host': 'www.filmxy.vip',
                            'Connection': 'keep-alive',
                            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
                            'sec-ch-ua-mobile': '?0',
                            'sec-ch-ua-platform': '"macOS"',
                            'Upgrade-Insecure-Requests': '1',
                            'DNT': '1',
                            'User-Agent': userAgent,
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                            'Sec-Fetch-Site': 'same-origin',
                            'Sec-Fetch-Mode': 'navigate',
                            'Sec-Fetch-User': '?1',
                            'Sec-Fetch-Dest': 'document',
                            'Referer': 'https://www.filmxy.vip/',
                            'Accept-Language': 'vi-VN,vi;q=0.9',
                            Cookie: "wp-secure-id=".concat(secureID, "; wp-guest-token=").concat(guestToken, "; PHPSESSID=").concat(ppsseidDetail, "; G_ENABLED_IDPS=google;"),
                        },
                        withCredentials: true,
                    })];
            case 14:
                parseData = _a.sent();
                libs.log({ parseDetail: parseData.data, cookie: "wp-secure-id=".concat(secureID, "; wp-guest-token=").concat(guestToken, "; PHPSESSID=").concat(ppsseidDetail, "; G_ENABLED_IDPS=google;") }, PROVIDER, 'PARSE DETAIL');
                userNonceDetail = parseData.data.match(/var *userNonce *\= *\"([^\"]+)/i);
                userNonceDetail = userNonceDetail ? userNonceDetail[1] : '';
                userIdDetail = parseData.data.match(/var *user_id *\= *\"([^\"]+)/i);
                userIdDetail = userIdDetail ? userIdDetail[1] : '';
                libs.log({ userNonceDetail: userNonceDetail, userIdDetail: userIdDetail }, PROVIDER, 'userNonceDetail');
                listSe = parseData.data.match(/listSE\s*=\s*(\{.*\})/i);
                listSe = listSe ? listSe[1] : '{}';
                listSe = JSON.parse(listSe);
                listSeId = [];
                if (movieInfo.type == 'movie') {
                    listSeId = listSe['movie']['movie'] || [];
                }
                else {
                    listSeId = listSe["s".concat(movieInfo.season < 10 ? "0".concat(movieInfo.season) : movieInfo.season)]["e".concat(movieInfo.episode < 10 ? "0".concat(movieInfo.episode) : movieInfo.episode)] || [];
                }
                parseSe = ['action=get_vid_links', "user_id=".concat(userIdDetail), "nonce=".concat(userNonceDetail)];
                for (_i = 0, listSeId_1 = listSeId; _i < listSeId_1.length; _i++) {
                    listSeIdItem = listSeId_1[_i];
                    parseSe.push("linkIDs%5B%5D=".concat(listSeIdItem));
                }
                libs.log({ listSeId: listSeId, movieInfo: movieInfo, parseSe: parseSe, listSe: listSe }, PROVIDER, 'PARSE SE');
                linkDetails = parseData.data.match(/linkDetails\s*=\s*(\{.*\})/i);
                linkDetails = linkDetails ? linkDetails[1] : '{}';
                linkDetails = JSON.parse(linkDetails);
                libs.log({ linkDetails: linkDetails }, PROVIDER, 'LINK PARSE DETAIL ID');
                dSubtitles = parseData.data.match(/dSubtitles\s*=\s*(\{.*\})/i);
                dSubtitles = dSubtitles ? dSubtitles[1] : '{}';
                dSubtitles = JSON.parse(dSubtitles);
                libs.log({ dSubtitles: dSubtitles }, PROVIDER, 'SUBTITLE');
                bodyDirectData = parseSe.join('&');
                return [4, libs.cookies_clearAll()];
            case 15:
                _a.sent();
                return [4, libs.request_post(cookieUrl, {
                        cookie: "wp-secure-id=".concat(secureID, "; wp-guest-token=").concat(guestToken, "; PHPSESSID=").concat(ppsseidDetail, "; G_ENABLED_IDPS=google;"),
                        'content-type': 'application/x-www-form-urlencoded;',
                        accept: "*/*",
                        "x-requested-with": "XMLHttpRequest",
                        "Origin": DOMAIN,
                    }, bodyDirectData, false, false)];
            case 16:
                directData = _a.sent();
                directUrl = [];
                for (directIndex in directData) {
                    if (!directData[directIndex]) {
                        continue;
                    }
                    libs.log({ quality: linkDetails[directIndex] }, PROVIDER, 'QUALITY');
                    quality = linkDetails[directIndex] ? Number(linkDetails[directIndex]['resolution'].replace('p', '')) : 720;
                    directUrl.push({
                        file: directData[directIndex],
                        quality: quality,
                    });
                }
                libs.log({ directUrl: directUrl }, PROVIDER, 'DIRECT URL');
                if (!directUrl.length) {
                    return [2];
                }
                directUrl = _.orderBy(directUrl, ['quality'], ['desc']);
                libs.embed_callback(directUrl[0].file || '', PROVIDER, PROVIDER, 'Hls', callback, 1, [], directUrl);
                return [4, libs.db_store(keyCache, { ppsseidDetail: ppsseidDetail, secureID: secureID, guestToken: guestToken })];
            case 17:
                _a.sent();
                return [4, libs.cookies_clearAll()];
            case 18:
                _a.sent();
                return [3, 20];
            case 19:
                e_1 = _a.sent();
                libs.cookies_clearAll();
                libs.db_remove(keyCache);
                libs.log({ e: e_1 }, PROVIDER, 'ERROR CATCH');
                return [3, 20];
            case 20: return [2, true];
        }
    });
}); };
