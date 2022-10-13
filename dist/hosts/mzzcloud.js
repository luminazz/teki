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
hosts["mzzcloud"] = function (url, movieInfo, provider, config, callback) { return __awaiter(_this, void 0, void 0, function () {
    var DOMAIN, HOST, id, ws, embedSid;
    var _this = this;
    return __generator(this, function (_a) {
        libs.log({ provider: provider }, provider, 'PROVIDER');
        DOMAIN = 'https://mzzcloud.life';
        HOST = 'Mzzcloud';
        id = url.match(/embed\-[0-9]+\/([A-z0-9]+)/);
        id = id ? id[1] : '';
        libs.log({
            id: id
        }, HOST, 'ID');
        if (!id) {
            return [2];
        }
        ws = new WebSocket('wss://wsx.dokicloud.one/socket.io/?EIO=4&transport=websocket');
        ws.onopen = function () {
            ws.send('40');
            ws.send("42[\"getSources\",{\"id\":\"".concat(id, "\"}]"));
        };
        embedSid = '';
        ws.onmessage = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var responseMessage, decryptData, parse, source1, source3, tracks, rank, _i, source3_1, item, directSizes, patternSize, directQuality, _a, patternSize_1, patternItem, sizeQuality;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        responseMessage = e.data;
                        libs.log({
                            responseMessage: responseMessage
                        }, provider, 'RESPONSE MESSAGE');
                        if (responseMessage.indexOf('40{') != -1) {
                            sid = responseMessage.match(/sid *\" *\: *\"([^\"]+)/i);
                            sid = sid ? sid[1] : '';
                            libs.log({
                                sid: sid
                            }, provider, 'SIDDDDDD');
                            if (sid) {
                                embedSid = sid;
                            }
                        }
                        libs.log({
                            embedSid: embedSid
                        }, provider, 'METADATA SID');
                        if (!(responseMessage.indexOf("getSources") != -1)) return [3, 4];
                        decryptData = function (hash) {
                            var decryptData = (crypto.AES.decrypt(hash, embedSid)).toString(crypto.enc.Utf8);
                            libs.log({
                                decryptData: decryptData
                            }, provider, 'decryptData');
                            return JSON.parse(decryptData);
                        };
                        parse = JSON.parse(responseMessage.replace('42[', '['));
                        libs.log({
                            parse: parse,
                        }, provider, 'PARSE GET SOURCE');
                        source1 = decryptData(parse[1]['sources']) || [];
                        source3 = __spreadArray([], source1, true);
                        tracks = parse[1]['tracks'] || [];
                        libs.log({ source3: source3, tracks: tracks }, provider, 'SOURCES');
                        rank = 0;
                        _i = 0, source3_1 = source3;
                        _b.label = 1;
                    case 1:
                        if (!(_i < source3_1.length)) return [3, 4];
                        item = source3_1[_i];
                        if (!item.file) {
                            return [3, 3];
                        }
                        return [4, libs.request_get(item.file, {})];
                    case 2:
                        directSizes = _b.sent();
                        patternSize = directSizes.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
                        if (!patternSize) {
                            libs.embed_callback(item.file, provider, HOST, item.type, callback, ++rank, tracks);
                            return [3, 3];
                        }
                        directQuality = [];
                        libs.log({ patternSize: patternSize }, provider, 'PATTERN SIZE');
                        for (_a = 0, patternSize_1 = patternSize; _a < patternSize_1.length; _a++) {
                            patternItem = patternSize_1[_a];
                            sizeQuality = patternItem.match(/\/([0-9]+)\//i);
                            sizeQuality = sizeQuality ? sizeQuality[1] : 'HD';
                            directQuality.push({
                                file: patternItem,
                                quality: sizeQuality
                            });
                        }
                        libs.log({ directQuality: directQuality }, provider, 'DIRECT QUALITY');
                        libs.embed_callback(item.file, provider, HOST, 'Hls', callback, ++rank, tracks, directQuality);
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        }); };
        ws.onerror = function (e) {
            console.log(e, 'socket_error');
        };
        ws.onclose = function (e) {
            console.log(e.code, e.reason, 'socket_close');
        };
        return [2];
    });
}); };
