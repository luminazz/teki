var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
libs.embed_redirect = function (embed, quality, movieInfo, provider, callback, host, subs, options, headers) {
    if (options === void 0) { options = {}; }
    if (headers === void 0) { headers = {}; }
    return __awaiter(_this, void 0, void 0, function () {
        var hostname, headersData, contentLength;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!embed) {
                        return [2];
                    }
                    hostname = libs.url_get_host(embed);
                    libs.log({ hostname: hostname, embed: embed }, provider, 'EMBED HOST');
                    if (embed.indexOf('.m3u8') != -1 || embed.indexOf('.hls') != -1) {
                        libs.embed_callback(embed, provider, host ? host : hostname.toUpperCase(), 'Hls', callback, 1, subs, [], headers);
                        return [2];
                    }
                    if (!hostname) {
                        return [2];
                    }
                    if (quality) {
                        libs.embed_callback(embed, provider, host ? host : hostname.toUpperCase(), '', callback, 1, subs, [], headers);
                        return [2];
                    }
                    if (hosts && hosts[hostname]) {
                        hosts[hostname](embed, movieInfo, provider, {
                            subs: subs ? subs : [],
                            options: options,
                        }, callback);
                        return [2];
                    }
                    return [4, libs.request_head(embed, headers)];
                case 1:
                    headersData = _a.sent();
                    contentLength = headersData['content-length'];
                    libs.log({ contentLength: contentLength }, 'CONTENT_LENGTH');
                    if (contentLength > 100000000) {
                        libs.embed_callback(embed, provider, host ? host : hostname.toUpperCase(), '', callback, 1, subs, [], headers);
                    }
                    return [2];
            }
        });
    });
};
libs.embed_parse_source = function (html) {
    var source = html.match(/sources *\: *([^\]]+)/i);
    source = source ? source[1] + "]" : "[]";
    var parse = [];
    source = "parse = ".concat(source);
    eval(source);
    return parse;
};
libs.embed_callback = function (urlDirect, provider, host, quality, callback, rank, subs, direct_quality, headers, options) {
    if (subs === void 0) { subs = []; }
    if (direct_quality === void 0) { direct_quality = []; }
    if (headers === void 0) { headers = {}; }
    if (options === void 0) { options = {}; }
    callback(__assign({ file: urlDirect, quality: quality, host: host, source: provider, provider: libs.string_provider(provider, rank), subs: subs, direct_quality: direct_quality, headers: headers }, options));
};
libs.parse_size = function (file, provider, host, type, callback, rank, tracks) { return __awaiter(_this, void 0, void 0, function () {
    var directSizes, patternSize, directQuality, _i, patternSize_1, patternItem, sizeQuality;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, libs.request_get(file, {})];
            case 1:
                directSizes = _a.sent();
                patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                if (!patternSize) {
                    libs.embed_callback(file, provider, host, item.type, callback, ++rank, tracks);
                    return [2];
                }
                directQuality = [];
                libs.log({ patternSize: patternSize }, provider, 'PATTERN SIZE');
                for (_i = 0, patternSize_1 = patternSize; _i < patternSize_1.length; _i++) {
                    patternItem = patternSize_1[_i];
                    sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                    sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                    directQuality.push({
                        file: patternItem,
                        quality: sizeQuality
                    });
                }
                libs.log({ directQuality: directQuality }, provider, 'DIRECT QUALITY');
                libs.embed_callback(file, provider, host, 'Hls', callback, ++rank, tracks, directQuality);
                return [2];
        }
    });
}); };
libs.embed_fmovies_id = function (hash, headers, embedUrl) { return __awaiter(_this, void 0, void 0, function () {
    function extractKeyComp(id, js) {
        var functionsAdded = [];
        function getFunction(funcName, js, recur) {
            if (recur === void 0) { recur = true; }
            var string = "";
            if (functionsAdded.includes(funcName)) {
                return "";
            }
            functionsAdded.push(funcName);
            var funcNameWFunction = "function " + funcName;
            var jsTemp = "(" + js.substringAfter(funcNameWFunction + "(");
            if (jsTemp == "(") {
                return "";
            }
            var params = findClosingBraces(jsTemp);
            jsTemp = jsTemp.substringAfter(params);
            var funcBody = findClosingBraces(jsTemp);
            if (recur) {
                var otherFunc = findFirstBrace(funcBody.substringAfter("return "));
                string += getFunction(otherFunc, js);
            }
            string += (funcNameWFunction + params + funcBody);
            return string;
        }
        String.prototype.substringAfter = function substringAfter(toFind) {
            var str = this;
            var index = str.indexOf(toFind);
            return index == -1 ? "" : str.substring(index + toFind.length);
        };
        String.prototype.substringBefore = function substringBefore(toFind) {
            var str = this;
            var index = str.indexOf(toFind);
            return index == -1 ? "" : str.substring(0, index);
        };
        String.prototype.substringAfterLast = function substringAfterLast(toFind) {
            var str = this;
            var index = str.lastIndexOf(toFind);
            return index == -1 ? "" : str.substring(index + toFind.length);
        };
        String.prototype.substringBeforeLast = function substringBeforeLast(toFind) {
            var str = this;
            var index = str.lastIndexOf(toFind);
            return index == -1 ? "" : str.substring(0, index);
        };
        String.prototype.onlyOnce = function substringBeforeLast(substring) {
            var str = this;
            return str.lastIndexOf(substring) == str.indexOf(substring);
        };
        function findClosingBraces(str) {
            var output = "";
            var stack = [];
            var brackets = ["(", "[", "{"];
            var closingBrackets = [")", "]", "}"];
            var braces = ["\'", "\""];
            var escapedBraces = ["\\\'", "\\\""];
            var lastChar = "";
            for (var i = 0; i < str.length; i++) {
                output += str[i];
                if (brackets.includes(str[i]) && !braces.includes(stack[stack.length - 1])) {
                    stack.push(str[i]);
                }
                else if (closingBrackets.includes(str[i]) && !braces.includes(stack[stack.length - 1])) {
                    stack.pop();
                }
                else if (braces.includes(str[i])) {
                    if (lastChar == "\\" && escapedBraces.includes("\\".concat(str[i]))) {
                    }
                    else {
                        if (str[i] == stack[stack.length - 1]) {
                            stack.pop();
                        }
                        else {
                            stack.push(str[i]);
                        }
                    }
                }
                lastChar = str[i];
                if (stack.length == 0) {
                    break;
                }
            }
            return output;
        }
        function findFirstBrace(str) {
            var output = "";
            for (var i = 0; i < str.length; i++) {
                if (str[i] == "(") {
                    break;
                }
                output += str[i];
            }
            return output;
        }
        function findFirstBraceEmpty(str) {
            var output = "";
            var check = false;
            for (var i = 0; i < str.length; i++) {
                if (str[i] == "(") {
                    check = true;
                    break;
                }
                output += str[i];
            }
            if (check) {
                return output;
            }
            else {
                return "";
            }
        }
        function getPassword(js) {
            var regex = /\.\.\..+?=/g;
            var funcName = null;
            var funcArgs;
            var transformDecodeFunc;
            while (match = regex.exec(js)) {
                var tempFuncName = "_0x" + js.substring(0, match.index).substringBeforeLast("=").substringAfterLast("_0x");
                if (js.includes(tempFuncName + "(")) {
                    funcName = tempFuncName;
                    break;
                }
            }
            var otherParams;
            var decFuncName2;
            var concatFunc, transformFunc, keyVarName;
            if (id == 4) {
                otherParams = findClosingBraces(js.substringAfter("".concat(funcName)));
            }
            else {
                var cryptoVar = "(" + js.substringAfter("CryptoJS[").substringBefore("return").substringAfterLast("(");
                cryptoVar = cryptoVar.substringAfterLast(",").substringBefore(")");
                var cryptoFuncName = js.substringBeforeLast(cryptoVar).substringAfterLast("const").substringBefore("=").trim();
                var replaceVar = js.substringAfter("".concat(cryptoFuncName, "(")).substringBefore(")").substringAfter(",");
                var replaceFuncName = replaceVar;
                var replaceTemp = js.indexOf("".concat(replaceFuncName, "=").concat(replaceFuncName));
                var keyValue = void 0, replaceFunc = void 0, decFuncName = "";
                if (replaceTemp > -1) {
                    var replaceString = "".concat(replaceFuncName, "=").concat(replaceFuncName) + findClosingBraces(js.substringAfter("".concat(replaceFuncName, "=").concat(replaceFuncName)));
                    replaceFunc = findClosingBraces(js.substring(replaceTemp + replaceString.length));
                    decFuncName = "_0x" + replaceFunc.substringAfter("_0x").substringBefore("(");
                    var keyVar = "_0x" + js.substringBefore(replaceFuncName).substringBeforeLast("=").substringAfterLast("_0x").trim();
                    var keyFunc = findClosingBraces("(" + js.substringAfter(keyVar + "("));
                    keyValue = keyFunc.substringAfter(",");
                }
                else {
                    var replaceTemp_1 = js.indexOf("".concat(replaceFuncName, "="));
                    var jsTemp = js.substring(replaceTemp_1 + "".concat(replaceFuncName, "=").length);
                    if (jsTemp[0] == "'") {
                        keyValue = findClosingBraces(jsTemp);
                    }
                    else {
                        keyValue = jsTemp.substringBefore(")[") + ")";
                    }
                    jsTemp = jsTemp.substring(keyValue.length);
                    var replaceFuncTitle = findClosingBraces(jsTemp);
                    jsTemp = jsTemp.substring(replaceFuncTitle.length);
                    replaceFunc = findClosingBraces(jsTemp);
                }
                if (keyValue[0] == "'") {
                }
                else {
                    decFuncName2 = "_0x" + keyValue.substringAfter("_0x").substringBefore("(");
                }
                funcArgs = {
                    "keyValue": keyValue,
                    "replaceFunc": replaceFunc,
                    "decFuncName": decFuncName,
                    "decFuncName2": decFuncName2
                };
            }
            if (id == 6) {
                funcArgs.transform = true;
            }
            else {
                otherParams = otherParams.substring(1, otherParams.length - 1);
                otherParams = otherParams.split(",");
                var decodeFunc = findFirstBrace(otherParams[0]);
                for (var i = 0; i < otherParams.length; i++) {
                    if (otherParams[i][0] != "'") {
                        decodeFunc = findFirstBrace(otherParams[i]);
                    }
                }
                otherParams = otherParams.join(",");
                funcArgs = {
                    "paramString": otherParams,
                    "decFuncName": decodeFunc
                };
            }
            return [getPasswordFromJS(js, funcArgs), false];
        }
        function getPasswordFromJS(js, getKeyArgs) {
            var script = "";
            var anonWhileString = "(" + js.substringBefore("while(!![])").substringAfterLast("(function(");
            var anonParam = findClosingBraces(anonWhileString);
            anonWhileString = js.substringAfter(anonParam);
            var anonBody = findClosingBraces(anonWhileString);
            var anonCall = findClosingBraces(js.substringAfter(anonBody).trim());
            var anonFunc = "(function" + anonParam + anonBody + ")" + anonCall;
            var arrayFuncName;
            for (var _i = 0, _a = anonFunc.split("return "); _i < _a.length; _i++) {
                var func = _a[_i];
                var funcName = findFirstBrace(func);
                if (funcName.trim() != "") {
                    var f = getFunction(funcName, js, false);
                    script += f;
                    arrayFuncName = "_0x" + f.substringBefore("()").substringAfterLast("_0x");
                    script += "\n";
                }
            }
            script += anonFunc;
            script = getFunction(arrayFuncName, js, false) + ";" + script + ";";
            if (typeof getKeyArgs == "string") {
                script += "\n".concat(decoderFunName).concat(getKeyArgs);
            }
            else if (getKeyArgs.justEval) {
                script += "var ".concat(getKeyArgs.decodeFunc, " = ").concat(decoderFunName, ";");
                script += getKeyArgs.paramString.replaceAll(getKeyArgs.decFuncName, decoderFunName);
            }
            else {
                if (getKeyArgs.splice) {
                    script += getKeyArgs.concatFunc;
                    script += getKeyArgs.concatFuncName + "(".concat(getKeyArgs.paramString.replaceAll(getKeyArgs.decFuncName, decoderFunName), ")");
                }
                else if (getKeyArgs.transform) {
                    var decodeArray = [];
                    var tempReplaceFunc = getKeyArgs.replaceFunc;
                    if (tempReplaceFunc[0] == "(") {
                        tempReplaceFunc = getKeyArgs.replaceFunc.substring(1);
                    }
                    for (var _b = 0, _c = tempReplaceFunc.split(","); _b < _c.length; _b++) {
                        var decode = _c[_b];
                        var k = findFirstBraceEmpty(decode);
                        if (k != "") {
                            decodeArray.push(k);
                        }
                    }
                    for (var _d = 0, decodeArray_1 = decodeArray; _d < decodeArray_1.length; _d++) {
                        var decode = decodeArray_1[_d];
                        script += getFunction(decode, js) + ";";
                    }
                    script += getFunction(getKeyArgs.decFuncName2, js) + ";";
                    script += getFunction(getKeyArgs.decFuncName, js) + ";";
                    script += "\n" + getKeyArgs.keyValue + ".replace" + getKeyArgs.replaceFunc;
                }
                else {
                    var decodeArray = [];
                    for (var _e = 0, _f = getKeyArgs.paramString.split(","); _e < _f.length; _e++) {
                        var decode = _f[_e];
                        var k = findFirstBraceEmpty(decode);
                        if (k != "") {
                            decodeArray.push(k);
                        }
                    }
                    for (var _g = 0, decodeArray_2 = decodeArray; _g < decodeArray_2.length; _g++) {
                        var decode = decodeArray_2[_g];
                        script += getFunction(decode, js) + ";";
                    }
                    script += "\nlet tempArray = [";
                    script += getKeyArgs.paramString;
                    script += "];";
                    script += "tempArray.join('');";
                    script += "console.log(tempArray.join(''), 'tempArray');";
                    script += "secretKey = tempArray.join('');";
                }
            }
            return (script);
        }
        return getPassword(js);
    }
    var secretKey, encryptedURL, e_1, words, textString, decryptData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                secretKey = '';
                encryptedURL = "";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                libs.log({
                    hash: hash,
                }, 'HASH EMBED FMOVIES');
                if (Array.isArray(hash)) {
                    return [2, hash];
                }
                return [4, libs.request_get("https://keys4.fun")];
            case 2:
                secretKey = _a.sent();
                secretKey = secretKey.rabbitstream.keys.key;
                libs.log({ secretKey: secretKey }, 'KEY EMBED FMOVIES');
                return [3, 4];
            case 3:
                e_1 = _a.sent();
                libs.log({ e: e_1, secretKey: secretKey }, 'errorDecrypt');
                return [3, 4];
            case 4:
                try {
                    if (!hash) {
                        return [2, ''];
                    }
                    libs.log({
                        secretKey: secretKey,
                        hash: hash,
                        hash: hash,
                    }, 'SECRET DECRYPT DATA FMOVIES');
                    words = cryptoS.enc.Base64.parse(hash);
                    textString = cryptoS.enc.Utf8.stringify(words);
                    decryptData = (cryptoS.AES.decrypt(textString, secretKey)).toString(cryptoS.enc.Utf8);
                    libs.log({
                        decryptData: decryptData,
                        secretKey: secretKey
                    }, 'EMBED DECRYPT DATA FMOVIES');
                    return [2, JSON.parse(decryptData)];
                }
                catch (e) {
                    libs.log({ secretKey: secretKey, e: e }, 'errorDecrypt_2');
                }
                return [2, ''];
        }
    });
}); };
