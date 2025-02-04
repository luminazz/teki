var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var _this = this;
subs.getResource = function (movieInfo, config, callback) {
  return __awaiter(_this, void 0, void 0, function () {
    var PROVIDER,
      SEARCH_URL,
      slug,
      urlSearch,
      dataSearch,
      ID,
      _i,
      _a,
      item,
      urlDetail,
      parseSub_1,
      validLangs_1,
      e_1;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          PROVIDER = "Podnapisi";
          SEARCH_URL = "https://www.podnapisi.net/en/moviedb/search/";
          slug = "".concat(libs.url_slug_search(movieInfo, "-"));
          urlSearch = "".concat(SEARCH_URL, "?keywords=").concat(slug);
          libs.log(
            {
              urlSearch: urlSearch,
              year: movieInfo.year,
              type: movieInfo.type,
            },
            PROVIDER,
            "==URL SEARCH=="
          );
          _b.label = 1;
        case 1:
          _b.trys.push([1, 4, , 5]);
          return [
            4,
            libs.request_get(
              urlSearch,
              {
                "X-Requested-With": "XMLHttpRequest",
              },
              false
            ),
          ];
        case 2:
          dataSearch = _b.sent();
          libs.log({ dataSearch: dataSearch }, PROVIDER, "==DATA SEARCH==");
          ID = "";
          for (_i = 0, _a = dataSearch.data; _i < _a.length; _i++) {
            item = _a[_i];
            if (
              ""
                .concat(libs.url_slug_search(movieInfo, "-"), "-")
                .concat(movieInfo.year) == item.slug &&
              !ID
            ) {
              ID = item.id;
            }
          }
          libs.log(
            {
              ID: ID,
              slug: ""
                .concat(libs.url_slug_search(movieInfo, "-"), "-")
                .concat(movieInfo.year),
            },
            PROVIDER,
            "==ID=="
          );
          if (!ID) {
            return [2];
          }
          urlDetail = "https://www.podnapisi.net/subtitles/search/".concat(ID);
          return [4, libs.request_get(urlDetail, {}, true)];
        case 3:
          parseSub_1 = _b.sent();
          validLangs_1 = [
            { code: "ar", name: "Arabic", id: "sublanguageid-ara" },
            { code: "zh", name: "Chinese", id: "sublanguageid-chi" },
            { code: "hr", name: "Croatian", id: "sublanguageid-hrv" },
            { code: "nl", name: "Dutch", id: "sublanguageid-dut" },
            { code: "no", name: "Norwegian", id: "sublanguageid-nor" },
            { code: "en", name: "English", id: "sublanguageid-eng" },
            { code: "fr", name: "French", id: "sublanguageid-fre" },
            { code: "de", name: "German", id: "sublanguageid-ger" },
            { code: "el", name: "Greek", id: "sublanguageid-ell" },
            { code: "he", name: "Hebrew", id: "sublanguageid-heb" },
            { code: "it", name: "Italian", id: "sublanguageid-ita" },
            { code: "id", name: "Indonesia", id: "sublanguageid-ind" },
            { code: "ja", name: "Japanese", id: "sublanguageid-jpn" },
            { code: "la", name: "Latin", id: "sublanguageid-lav" },
            { code: "pl", name: "Polish", id: "sublanguageid-pol" },
            { code: "pt", name: "Portuguese", id: "sublanguageid-por" },
            { code: "ro", name: "Romanian", id: "sublanguageid-rum" },
            { code: "ru", name: "Russian", id: "sublanguageid-rus" },
            { code: "es", name: "Spanish", id: "sublanguageid-spa" },
            { code: "sr", name: "Serbian", id: "sublanguageid-scc" },
            { code: "sv", name: "Swedish", id: "sublanguageid-swe" },
            { code: "th", name: "Thai", id: "sublanguageid-tha" },
            { code: "tr", name: "Turkish", id: "sublanguageid-tur" },
            { code: "ukr", name: "Ukrainian", id: "sublanguageid-ukr" },
            { code: "vi", name: "Vietnamese", id: "sublanguageid-vie" },
          ];
          parseSub_1("tr.subtitle-entry").each(function (key, item) {
            var link = parseSub_1(item).attr("data-href");
            var title = parseSub_1(item).find("span.release").text();
            if (movieInfo.type == "tv") {
              var episode = "S"
                .concat(
                  movieInfo.season < 10
                    ? "0" + movieInfo.season
                    : movieInfo.season,
                  "E"
                )
                .concat(
                  movieInfo.episode < 10
                    ? "0" + movieInfo.episode
                    : movieInfo.episode
                );
              if (title.indexOf(episode) == -1) {
                link = "";
              }
            }
            if (link) {
              libs.log(
                { link: link, title: title },
                PROVIDER,
                "SUBS LINK ====>"
              );
              var linkData = link.split("/");
              if (linkData.length > 2) {
                var langData = linkData[2].split("-");
                var lang_1 = langData[0];
                var validLang = validLangs_1.find(function (item) {
                  return item.code == lang_1;
                });
                if (validLang) {
                  link = "https://www.podnapisi.net/".concat(link, "/download");
                  callback({
                    file: link,
                    kind: "Captions",
                    label: validLang.name,
                    type: "download",
                    provider: PROVIDER,
                  });
                  libs.log(
                    {
                      file: link,
                      kind: "Captions",
                      label: validLang.name,
                      type: "download",
                      provider: PROVIDER,
                    },
                    PROVIDER,
                    "SUBS CALLBACK ====>"
                  );
                }
              }
            }
          });
          return [3, 5];
        case 4:
          e_1 = _b.sent();
          libs.log({ e: e_1 }, PROVIDER, "ERROR");
          return [3, 5];
        case 5:
          return [2, true];
      }
    });
  });
};
