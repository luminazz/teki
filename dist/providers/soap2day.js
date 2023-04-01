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
    function makeRequest(token_g, userAgent) {
        return fetch("https://soap2day.to/gotocaptcha", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "en-US,en;q=0.9",
                "authority": "soap2day.to",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Chromium\";v=\"112\", \"Microsoft Edge\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
                "user-agent": userAgent
            },
            "referrer": "https://soap2day.to/enter.html",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "token=" + token_g + "&url=0",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
    }
    var PROVIDER, DOMAIN, DOMAINENTER, headers;
    return __generator(this, function (_a) {
        PROVIDER = 'WSoap2Day';
        DOMAIN = "https://soap2day.to";
        DOMAINENTER = "".concat(DOMAIN, "/enter.html");
        try {
            headers = {
                'authority': 'soap2day.to',
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'accept-language': 'en-US,en;q=0.9',
                'sec-ch-ua': '"Chromium";v="112", "Microsoft Edge";v="112", "Not:A-Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': "\"Android\"",
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'none',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36'
            };
            libs.log({ movieInfo: movieInfo }, PROVIDER, 'MOVIEINFO_SOAP');
            callback({
                callback: {
                    provider: PROVIDER,
                    host: PROVIDER,
                    url: DOMAINENTER,
                    headers: headers,
                    userAgent: 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36',
                    metadata: {
                        url_webview: DOMAINENTER,
                        movieInfo: movieInfo,
                    },
                    callback: callback,
                    script: "\n                try {\n                    setTimeout(() => {\n                        let agent = navigator.userAgent;\n                        try {\n                            ".concat(makeRequest.toString(), "\n                            makeRequest(token_g, agent).then(function(a) {\n\n                                a.text().then(function(textData) {\n                                    if (textData.indexOf('<html') == -1) {\n                                        window.ReactNativeWebView.postMessage(JSON.stringify({cookie: document.cookie, agent, code: a.status, textData}));\n                                    } else {\n                                        makeRequest(token_g, agent).then(function(b) {\n                                            window.ReactNativeWebView.postMessage(JSON.stringify({cookie: document.cookie, agent}));\n                                        })\n                                    }\n                                    \n                                })\n                                \n                            })\n                        } catch(error1) {\n                            window.ReactNativeWebView.postMessage(JSON.stringify({e: String(error1)}));\n                        }\n                        \n                    }, 2000)\n                    \n                } catch(e) {\n                    window.ReactNativeWebView.postMessage(JSON.stringify({e: String(e)}));\n                }\n                \n                ")
                }
            });
        }
        catch (e) {
            libs.log({ e: e }, PROVIDER, 'ERROR');
        }
        return [2];
    });
}); };
