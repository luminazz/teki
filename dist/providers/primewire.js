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
    function getLinks(encryptedInput) {
        var key = encryptedInput.slice(-10);
        var data = encryptedInput.slice(0, -10);
        var cipher = new Blowfish(key);
        var decryptedData = cipher.decrypt(cipher.base64(data)).match(/.{1,5}/g);
        if (!decryptedData) {
            return "";
        }
        else {
            return decryptedData;
        }
    }
    var pArray, sBox0, sBox1, sBox2, sBox3, Blowfish, PROVIDER, DOMAIN, KEY, headers, urlSearch, dataSearch, urlDetail, parseDetail, userData, links, embeds, _i, links_1, linkItem, urlEmbed, dataRedirect, redirectUrl, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pArray = [
                    608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567,
                    3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731,
                ];
                sBox0 = [
                    3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279,
                    134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518,
                    2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982,
                    1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394,
                    1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397,
                    1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131,
                    1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993,
                    3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713,
                    2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837,
                    967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327,
                    1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385,
                    2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258,
                    426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964,
                    3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718,
                    1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082,
                    4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358,
                    2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241,
                    3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166,
                    737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851,
                    4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030,
                    2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246,
                    2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187,
                    2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657,
                    3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330,
                    2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265,
                    3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946,
                ];
                sBox1 = [
                    1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367,
                    1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782,
                    2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473,
                    1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316,
                    1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977,
                    2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182,
                    2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880,
                    613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022,
                    2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066,
                    4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773,
                    2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206,
                    2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621,
                    776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456,
                    1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133,
                    1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568,
                    332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695,
                    2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511,
                    2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414,
                    2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896,
                    1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338,
                    3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730,
                    1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616,
                    2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801,
                    1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706,
                    3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097,
                    3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055,
                ];
                sBox2 = [
                    3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738,
                    1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893,
                    3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812,
                    170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102,
                    2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854,
                    648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951,
                    1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593,
                    1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548,
                    133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280,
                    3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642,
                    2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842,
                    3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669,
                    3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036,
                    2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949,
                    1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866,
                    1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982,
                    2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115,
                    4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658,
                    4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033,
                    2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182,
                    3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567,
                    677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071,
                    2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636,
                    3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895,
                    1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617,
                    1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504,
                ];
                sBox3 = [
                    976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757,
                    3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808,
                    1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906,
                    1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088,
                    3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141,
                    2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182,
                    2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525,
                    674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813,
                    90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200,
                    2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658,
                    2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792,
                    2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160,
                    3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903,
                    3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104,
                    1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651,
                    661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718,
                    3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588,
                    3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473,
                    3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038,
                    846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421,
                    2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117,
                    4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580,
                    3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056,
                    3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576,
                    3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436,
                    29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462,
                ];
                Blowfish = (function () {
                    function Blowfish(t) {
                        this.sBox0 = sBox0.slice();
                        this.sBox1 = sBox1.slice();
                        this.sBox2 = sBox2.slice();
                        this.sBox3 = sBox3.slice();
                        this.pArray = pArray.slice();
                        this.keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                        this.iv = 'abc12345';
                        this.generateSubkeys(t);
                    }
                    Blowfish.prototype.encrypt = function (e) {
                        var _a;
                        var root = this.utf8Decode(e);
                        var encrypted = '';
                        var blockSize = 8;
                        var paddingChar = '\0';
                        var numBlocks = Math.ceil(e.length / blockSize);
                        for (var i = 0; i < numBlocks; i++) {
                            var block = root.substr(blockSize * i, blockSize);
                            if (block.length < blockSize) {
                                block += paddingChar.repeat(blockSize - block.length);
                            }
                            var _b = this.split64by32(block), left = _b[0], right = _b[1];
                            _a = this.encipher(left, right), left = _a[0], right = _a[1];
                            encrypted += this.num2block32(left) + this.num2block32(right);
                        }
                        return encrypted;
                    };
                    Blowfish.prototype.decrypt = function (input) {
                        var numBlocks = Math.ceil(input.length / 8);
                        var decrypted = '';
                        for (var i = 0; i < numBlocks; i++) {
                            var block = input.substr(8 * i, 8);
                            if (block.length < 8) {
                                throw new Error('Invalid block size');
                            }
                            var _a = this.split64by32(block), left = _a[0], right = _a[1];
                            var _b = this.decipher(left, right), decipheredLeft = _b[0], decipheredRight = _b[1];
                            decrypted += this.num2block32(decipheredLeft) + this.num2block32(decipheredRight);
                        }
                        return this.utf8Encode(decrypted);
                    };
                    Blowfish.prototype.substitute = function (value) {
                        var t = value >>> 24;
                        var n = (value << 8) >>> 24;
                        var r = (value << 16) >>> 24;
                        var i = (value << 24) >>> 24;
                        var result = this.addMod32(this.sBox0[t], this.sBox1[n]);
                        result = this.xor(result, this.sBox2[r]);
                        result = this.addMod32(result, this.sBox3[i]);
                        return result;
                    };
                    Blowfish.prototype.encipher = function (plaintext, key) {
                        for (var temp, round = 0; round < 16; round++) {
                            temp = plaintext = this.xor(plaintext, this.pArray[round]);
                            plaintext = key = this.xor(this.substitute(plaintext), key);
                            key = temp;
                        }
                        temp = plaintext;
                        plaintext = key;
                        key = temp;
                        key = this.xor(key, this.pArray[16]);
                        return [(plaintext = this.xor(plaintext, this.pArray[17])), key];
                    };
                    Blowfish.prototype.decipher = function (left, right) {
                        var n;
                        var e = left;
                        var t = right;
                        n = this.xor(e, this.pArray[17]);
                        e = this.xor(t, this.pArray[16]);
                        t = n;
                        for (var r = 15; r >= 0; r--) {
                            n = e;
                            e = t;
                            t = n;
                            t = this.xor(this.substitute(e), t);
                            e = this.xor(e, this.pArray[r]);
                        }
                        return [e, t];
                    };
                    Blowfish.prototype.generateSubkeys = function (key) {
                        var temp;
                        var keyIndex = 0;
                        var pIndex = 0;
                        for (var i = 0; i < 18; i++) {
                            temp = 0;
                            for (var j = 0; j < 4; j++) {
                                temp = this.fixNegative((temp << 8) | key.charCodeAt(keyIndex));
                                keyIndex = (keyIndex + 1) % key.length;
                            }
                            this.pArray[pIndex] = this.xor(this.pArray[pIndex], temp);
                            pIndex++;
                        }
                        var tempSubkey = [0, 0];
                        for (var i = 0; i < 18; i += 2) {
                            tempSubkey = this.encipher(tempSubkey[0], tempSubkey[1]);
                            this.pArray[i] = tempSubkey[0];
                            this.pArray[i + 1] = tempSubkey[1];
                        }
                        for (var i = 0; i < 256; i += 2) {
                            tempSubkey = this.encipher(tempSubkey[0], tempSubkey[1]);
                            this.sBox0[i] = tempSubkey[0];
                            this.sBox0[i + 1] = tempSubkey[1];
                        }
                        for (var i = 0; i < 256; i += 2) {
                            tempSubkey = this.encipher(tempSubkey[0], tempSubkey[1]);
                            this.sBox1[i] = tempSubkey[0];
                            this.sBox1[i + 1] = tempSubkey[1];
                        }
                        for (var i = 0; i < 256; i += 2) {
                            tempSubkey = this.encipher(tempSubkey[0], tempSubkey[1]);
                            this.sBox2[i] = tempSubkey[0];
                            this.sBox2[i + 1] = tempSubkey[1];
                        }
                        for (var i = 0; i < 256; i += 2) {
                            tempSubkey = this.encipher(tempSubkey[0], tempSubkey[1]);
                            this.sBox3[i] = tempSubkey[0];
                            this.sBox3[i + 1] = tempSubkey[1];
                        }
                    };
                    Blowfish.prototype.block32toNum = function (e) {
                        return this.fixNegative((e.charCodeAt(0) << 24) | (e.charCodeAt(1) << 16) | (e.charCodeAt(2) << 8) | e.charCodeAt(3));
                    };
                    Blowfish.prototype.num2block32 = function (e) {
                        return (String.fromCharCode(e >>> 24) +
                            String.fromCharCode((e << 8) >>> 24) +
                            String.fromCharCode((e << 16) >>> 24) +
                            String.fromCharCode((e << 24) >>> 24));
                    };
                    Blowfish.prototype.xor = function (e, t) {
                        return this.fixNegative(e ^ t);
                    };
                    Blowfish.prototype.addMod32 = function (e, t) {
                        return this.fixNegative((e + t) | 0);
                    };
                    Blowfish.prototype.fixNegative = function (e) {
                        return e >>> 0;
                    };
                    Blowfish.prototype.split64by32 = function (e) {
                        var t = e.substring(0, 4);
                        var n = e.substring(4, 8);
                        return [this.block32toNum(t), this.block32toNum(n)];
                    };
                    Blowfish.prototype.utf8Decode = function (input) {
                        var decoded = '';
                        for (var i = 0; i < input.length; i++) {
                            var charCode = input.charCodeAt(i);
                            if (charCode < 128) {
                                decoded += String.fromCharCode(charCode);
                            }
                            else if (charCode > 127 && charCode < 2048) {
                                var firstCharCode = (charCode >> 6) | 192;
                                var secondCharCode = (63 & charCode) | 128;
                                decoded += String.fromCharCode(firstCharCode, secondCharCode);
                            }
                            else {
                                var firstCharCode = (charCode >> 12) | 224;
                                var secondCharCode = ((charCode >> 6) & 63) | 128;
                                var thirdCharCode = (63 & charCode) | 128;
                                decoded += String.fromCharCode(firstCharCode, secondCharCode, thirdCharCode);
                            }
                        }
                        return decoded;
                    };
                    Blowfish.prototype.utf8Encode = function (input) {
                        var encoded = '';
                        var charCode;
                        for (var i = 0; i < input.length; i++) {
                            charCode = input.charCodeAt(i);
                            if (charCode < 128) {
                                encoded += String.fromCharCode(charCode);
                            }
                            else if (charCode > 191 && charCode < 224) {
                                var secondCharCode = input.charCodeAt(i + 1);
                                encoded += String.fromCharCode(((31 & charCode) << 6) | (63 & secondCharCode));
                                i += 1;
                            }
                            else {
                                var secondCharCode = input.charCodeAt(i + 1);
                                var thirdCharCode = input.charCodeAt(i + 2);
                                encoded += String.fromCharCode(((15 & charCode) << 12) | ((63 & secondCharCode) << 6) | (63 & thirdCharCode));
                                i += 2;
                            }
                        }
                        return encoded;
                    };
                    Blowfish.prototype.base64 = function (e) {
                        var t;
                        var n;
                        var r;
                        var i;
                        var o;
                        var a;
                        var s = '';
                        var l = 0;
                        var root = e.replace(/[^A-Za-z0-9\\+\\/=]/g, '');
                        while (l < root.length) {
                            t = (this.keyStr.indexOf(root.charAt(l++)) << 2) | ((i = this.keyStr.indexOf(root.charAt(l++))) >> 4);
                            n = ((15 & i) << 4) | ((o = this.keyStr.indexOf(root.charAt(l++))) >> 2);
                            r = ((3 & o) << 6) | (a = this.keyStr.indexOf(root.charAt(l++)));
                            s += String.fromCharCode(t);
                            if (o !== 64) {
                                s += String.fromCharCode(n);
                            }
                            if (a !== 64) {
                                s += String.fromCharCode(r);
                            }
                        }
                        return s;
                    };
                    return Blowfish;
                }());
                PROVIDER = 'Primewire';
                DOMAIN = "https://www.primewire.tf";
                KEY = "lzQPsXSKcG";
                headers = {
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                urlSearch = "".concat(DOMAIN, "/api/v1/show/?key=").concat(KEY, "&imdb_id=").concat(movieInfo.imdb_id);
                return [4, libs.request_get(urlSearch, headers)];
            case 2:
                dataSearch = _a.sent();
                libs.log(dataSearch, PROVIDER, 'SEARCH');
                if (!dataSearch.id) {
                    return [2];
                }
                urlDetail = "".concat(DOMAIN, "/movie/").concat(dataSearch.id, "-").concat(libs.url_slug_search(movieInfo, '-'));
                if (movieInfo.type == 'tv') {
                    urlDetail = "".concat(DOMAIN, "/tv/").concat(dataSearch.id, "/").concat(libs.url_slug_search(movieInfo, '-'), "-season-").concat(movieInfo.season, "-episode-").concat(movieInfo.episode);
                }
                libs.log(urlDetail, PROVIDER, 'DETAIL');
                return [4, libs.request_get(urlDetail, headers, true)];
            case 3:
                parseDetail = _a.sent();
                userData = parseDetail("#user-data").attr("v");
                if (!userData) {
                    return [2];
                }
                links = getLinks(userData);
                libs.log(links, PROVIDER, 'LINKS');
                embeds = [];
                _i = 0, links_1 = links;
                _a.label = 4;
            case 4:
                if (!(_i < links_1.length)) return [3, 7];
                linkItem = links_1[_i];
                urlEmbed = "".concat(DOMAIN, "/links/go/").concat(linkItem);
                return [4, fetch(urlEmbed, {
                        method: "HEAD",
                        headers: headers,
                        redirect: "manual"
                    })];
            case 5:
                dataRedirect = _a.sent();
                redirectUrl = dataRedirect.url;
                libs.log(redirectUrl, PROVIDER, 'REDIRECT URL');
                if (redirectUrl && redirectUrl.indexOf("hlsflex") != -1) {
                    libs.log(redirectUrl, PROVIDER, 'REDIRECT URL');
                    libs.embed_redirect(redirectUrl, '', movieInfo, PROVIDER, callback, undefined, []);
                }
                _a.label = 6;
            case 6:
                _i++;
                return [3, 4];
            case 7: return [3, 9];
            case 8:
                e_1 = _a.sent();
                libs.log(e_1, PROVIDER, 'ERROR');
                return [3, 9];
            case 9: return [2, true];
        }
    });
}); };
