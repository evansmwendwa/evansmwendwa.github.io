// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
var data = {
  "sale_date": "2020-04-21",
  "errors": [{
    "status": "error",
    "route_name": "Mombasa Road Route - Key Accounts",
    "route_id": "0607dc1c-af82-4fa2-9f65-880ddc7e8463",
    "message": "No solutions found. Please verify shop/depot locations"
  }, {
    "status": "error",
    "route_name": "Thika Road Route - Key Accounts",
    "route_id": "4f0bcfb8-c408-4770-8c4b-a1b63a676411",
    "message": "No solutions found. Please verify shop/depot locations"
  }],
  "routes": [{
    "status": "success",
    "route_name": "CBD Nairobi",
    "route_id": "4a10003b-f1ff-4e4a-93ed-30346459b417",
    "matrix_info": {
      "DistanceMatrixAPI requests": 72,
      "cache_hit": "89%"
    },
    "distance": "33.09km",
    "path": "dsfG_se`FqnK~uKG\\SOIMGIDEKH??BRYUFS?ACEEOHKFC?I?I?CB?KDVmLpLb]xXp[DDZGk@b@r@p@|AcDkCyGAKOCdiJwtL",
    "shops": [{
      "shop_id": "0afed5f4-291a-4224-a524-25d284335b1d",
      "location": [-1.28586, 36.8328]
    }, {
      "shop_id": "86bea01e-2b31-4f16-b0c9-9a4c02b6b194",
      "location": [-1.2858207, 36.83265]
    }, {
      "shop_id": "8f730677-7dda-48b3-84b3-ad409fedc4cb",
      "location": [-1.285716, 36.832726]
    }, {
      "shop_id": "7f27d3f9-fea1-48da-b2e0-cd703c78d137",
      "location": [-1.2856733, 36.832798]
    }, {
      "shop_id": "64f5fc7f-84e1-4f94-b61b-71b535fe4f12",
      "location": [-1.28563475608826, 36.8328514099121]
    }, {
      "shop_id": "f88bfeb4-a062-48c3-8665-e2acaa903827",
      "location": [-1.28565680980682, 36.832878112793]
    }, {
      "shop_id": "2e967053-9ddf-459c-9d48-4d31d5a04c8a",
      "location": [-1.285601, 36.83283]
    }, {
      "shop_id": "9cb1b102-5e6a-4ff3-b5fe-6904e78259d1",
      "location": [-1.2856008, 36.83283]
    }, {
      "shop_id": "ad5dc552-50dd-4e56-837e-409147c995b2",
      "location": [-1.2856207, 36.832726]
    }, {
      "shop_id": "314ceb52-fc78-4ecf-bf83-e345ed6b1630",
      "location": [-1.285493, 36.832836]
    }, {
      "shop_id": "a75e6ff5-cb22-4e97-8777-aceb7256f473",
      "location": [-1.2855324, 36.832943]
    }, {
      "shop_id": "70b6de82-8169-456f-beb4-67c6508745c1",
      "location": [-1.2855302, 36.832947]
    }, {
      "shop_id": "c9dfb85c-fcf5-449a-a718-31b448ca833d",
      "location": [-1.2855057, 36.832977]
    }, {
      "shop_id": "7f97cbc1-1efb-47ec-8faa-0fb69d524e90",
      "location": [-1.285484, 36.833057]
    }, {
      "shop_id": "e36b8380-1d58-4d29-8fdd-b32816364e3c",
      "location": [-1.2855257, 36.833122]
    }, {
      "shop_id": "0e83990f-d7fb-4f87-be24-3f9da6da7f9c",
      "location": [-1.2855707, 36.833138]
    }, {
      "shop_id": "927a2ab2-b3c2-4d0c-bbb8-7707aa158f15",
      "location": [-1.28557240962982, 36.8331871032715]
    }, {
      "shop_id": "85db0ea4-0623-400a-b1ef-b3f9da75cc40",
      "location": [-1.2855651, 36.833244]
    }, {
      "shop_id": "7636e30b-712a-40c0-b0b3-c091c479a686",
      "location": [-1.2855748, 36.833263]
    }, {
      "shop_id": "f5e8562f-6c01-46af-a21a-3186536ea887",
      "location": [-1.2855946, 36.83326]
    }, {
      "shop_id": "c61ad965-b5da-4ecc-af43-e174cca360b7",
      "location": [-1.2855282, 36.833233]
    }, {
      "shop_id": "102d25ac-7eb4-40d4-a5c3-a3d37c591fb6",
      "location": [-1.2856451, 36.83538]
    }, {
      "shop_id": "b393fc9d-0de5-4fc5-b90d-0b6e6c477ddf",
      "location": [-1.2878247, 36.830563]
    }, {
      "shop_id": "16ff5db2-8e47-40a1-8d17-b74be9e246c4",
      "location": [-1.2919482, 36.82599]
    }, {
      "shop_id": "5747f840-db56-4bbe-ba30-8a79ca29b610",
      "location": [-1.2919815, 36.825962]
    }, {
      "shop_id": "8fa0d954-dbed-450e-b68a-7c4d351180cd",
      "location": [-1.2921168, 36.826004]
    }, {
      "shop_id": "81329f05-1414-49b3-a640-d2d6e7f63ef9",
      "location": [-1.2919028, 36.825817]
    }, {
      "shop_id": "cdf55121-215f-40a6-80bd-6d3b08024db3",
      "location": [-1.2921565, 36.825573]
    }, {
      "shop_id": "622c0447-bc32-4e79-96ac-4c49580e00c9",
      "location": [-1.2926323, 36.82639]
    }, {
      "shop_id": "7db2573e-c4fe-4301-b39a-0da8b1baadee",
      "location": [-1.29192674160004, 36.8278045654297]
    }, {
      "shop_id": "3ade60c0-62e9-4716-a752-df253e0123aa",
      "location": [-1.2919182, 36.82786]
    }, {
      "shop_id": "516af36b-6fc3-42fd-83fd-bed64fac3b6d",
      "location": [-1.2918404, 36.827877]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Embakasi Village Kabansoora",
    "route_id": "fc39aa9f-28a7-4ce0-ae9e-ac8d7b45df2c",
    "matrix_info": {
      "DistanceMatrixAPI requests": 108,
      "cache_hit": "88%"
    },
    "distance": "29.36km",
    "path": "dsfG_se`F_fI_tDhu@~z@eF~C@@OECJHFQ@CFCQM?Ru@_B^cAfB|Ji@dK~a@FLcP~JxArDps@kIi@FaGyMXwDFD@FBB??FIfMrJJXyMoZ_CzAhjF`gB",
    "shops": [{
      "shop_id": "8f929eeb-f3fd-4f57-a5ab-fe82ecc63e34",
      "location": [-1.2974724, 36.926876]
    }, {
      "shop_id": "3f39c2a8-e773-45ce-b7e0-6544f9a69a50",
      "location": [-1.3061557, 36.917282]
    }, {
      "shop_id": "62eceaae-3f3b-4362-b548-17120f3c1ac6",
      "location": [-1.3050137, 36.916477]
    }, {
      "shop_id": "502c9aaa-9ee2-48f8-ba93-feb1870cb405",
      "location": [-1.3050174, 36.916473]
    }, {
      "shop_id": "430fbdb3-678a-45a4-8064-e5e1fdab225a",
      "location": [-1.3049424, 36.916504]
    }, {
      "shop_id": "9c095cc6-9fc8-4805-b31f-3180d1a5a520",
      "location": [-1.3049177, 36.916435]
    }, {
      "shop_id": "668f282e-ce92-41f2-9d1a-7267e8f9e1a1",
      "location": [-1.3049664, 36.916405]
    }, {
      "shop_id": "1d0ce462-e4d7-488b-ab03-8b301322a579",
      "location": [-1.304877, 36.916393]
    }, {
      "shop_id": "100d8fe2-46c1-42fb-aa1c-c92537372a4e",
      "location": [-1.3048635, 36.916348]
    }, {
      "shop_id": "649f672b-7fba-44f5-9c11-cb824afbe65a",
      "location": [-1.3048357, 36.916435]
    }, {
      "shop_id": "6f7f1e50-b8d6-468f-8a11-5f8cadbbcec5",
      "location": [-1.3047734, 36.916443]
    }, {
      "shop_id": "95cdfab3-14d0-467c-aa4a-5c57a2fa2559",
      "location": [-1.3048656, 36.916706]
    }, {
      "shop_id": "91276b87-4e60-4b76-b4fb-ebecb1d949fa",
      "location": [-1.3043921, 36.91655]
    }, {
      "shop_id": "13ca24d4-5391-4b11-9c0f-a5e2ef5fa765",
      "location": [-1.3040462, 36.91603]
    }, {
      "shop_id": "02de9603-631c-4944-a7cc-3c9511ebd31e",
      "location": [-1.3059571, 36.91624]
    }, {
      "shop_id": "b528cb30-c97b-4e37-86a1-21411c3b08c8",
      "location": [-1.3079135, 36.91064]
    }, {
      "shop_id": "4223cffe-5eb4-4aba-b314-0e0143203c43",
      "location": [-1.3079529, 36.910572]
    }, {
      "shop_id": "e0fd80bc-f79b-4164-8561-f0fc17d821f0",
      "location": [-1.305213, 36.90865]
    }, {
      "shop_id": "c45a6e71-b54c-4e2d-9578-1ac151bac23a",
      "location": [-1.30566167831421, 36.9077491760254]
    }, {
      "shop_id": "b5c3a19e-667f-4053-888a-5d3f74ad5e74",
      "location": [-1.3140694, 36.909405]
    }, {
      "shop_id": "ce9ac66c-98c9-40df-a5d8-3ebdcbcf1b4b",
      "location": [-1.3138566, 36.909374]
    }, {
      "shop_id": "910f42eb-7577-433a-b49f-0fdca9799521",
      "location": [-1.3125732, 36.91174]
    }, {
      "shop_id": "2eaa0acc-ad89-453d-b67b-aa6a64a5cea5",
      "location": [-1.3126998, 36.912655]
    }, {
      "shop_id": "ae2ac322-1d1f-4978-a514-b76d91cd6c66",
      "location": [-1.3127424, 36.91263]
    }, {
      "shop_id": "aea5e6f1-e979-4bb1-afde-2143c87e701f",
      "location": [-1.3127488, 36.91259]
    }, {
      "shop_id": "c54c627d-a7fc-42d3-81a0-94fc8b93ea03",
      "location": [-1.3127689, 36.91257]
    }, {
      "shop_id": "938c45fc-bda0-4b4f-b877-5acb2e9fcf83",
      "location": [-1.312769, 36.91257]
    }, {
      "shop_id": "fb7e514a-617f-4b97-9907-373229836ccf",
      "location": [-1.3128082, 36.91262]
    }, {
      "shop_id": "1acb1e14-837b-494f-8150-8a3f2c2066ad",
      "location": [-1.3150945, 36.91076]
    }, {
      "shop_id": "e3d711da-02b7-4f17-b3b1-964b2886c3a2",
      "location": [-1.3151493, 36.910625]
    }, {
      "shop_id": "64eb4769-a0c9-4b02-8272-cfafe4bcb543",
      "location": [-1.312776, 36.915028]
    }, {
      "shop_id": "0a861d95-7818-46ba-b298-55cd2f495ed5",
      "location": [-1.3121397, 36.914574]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Imara",
    "route_id": "7aead0f3-cef4-42c1-ba36-be6d3fcd7688",
    "matrix_info": {
      "DistanceMatrixAPI requests": 192,
      "cache_hit": "86%"
    },
    "distance": "27.16km",
    "path": "dsfG_se`FqxC|jBTfA|AjBiGnWaE`DpFmGy@]jB{[uInJ}BoR~GfKyFoa@qHkCwSqBrVaH~MsIzBsTnEgANiBeCc@_@p@}Be@z@eCg@ZeFxCs@I_g@nSzx@o@vAhBpE_EuBnD_FfFy@\\u@{@vCnUXTtClHjCMbjCqoA",
    "shops": [{
      "shop_id": "2a09ec07-506f-4e3f-9a8f-463a82f6f241",
      "location": [-1.32522249221802, 36.8806495666504]
    }, {
      "shop_id": "90ed1a1d-9eda-431c-bb65-9075b211705e",
      "location": [-1.3253329, 36.880295]
    }, {
      "shop_id": "d6c6d136-9e3c-41a5-bff8-8db35578065b",
      "location": [-1.3258021, 36.879745]
    }, {
      "shop_id": "363c68eb-9401-49cc-8d65-dbe086e57814",
      "location": [-1.3244737, 36.87583]
    }, {
      "shop_id": "706d6261-58c9-4a72-b3db-2da8edcf3ed1",
      "location": [-1.3235023, 36.875023]
    }, {
      "shop_id": "8c7701af-6b2d-4228-9999-523440ec62ff",
      "location": [-1.3247131, 36.876366]
    }, {
      "shop_id": "2c3b42e8-5251-4da8-b2f4-ac31abe24d1b",
      "location": [-1.3244212, 36.87652]
    }, {
      "shop_id": "247a0763-c486-439a-9970-6186038638dd",
      "location": [-1.3249649, 36.881145]
    }, {
      "shop_id": "fbdad33b-9e35-4e49-8f70-f20315e473f0",
      "location": [-1.3232538, 36.879295]
    }, {
      "shop_id": "b77522b7-2689-4647-8eea-12b2129bcb1e",
      "location": [-1.322617, 36.88242]
    }, {
      "shop_id": "283936e8-5465-413e-9e33-2e0997daf14f",
      "location": [-1.3240589, 36.880455]
    }, {
      "shop_id": "f44fe54a-f448-4f05-9dcb-6ae1f3e2d70b",
      "location": [-1.3228135, 36.885975]
    }, {
      "shop_id": "c3494c3c-19d8-4a22-a2d0-c48c72e23183",
      "location": [-1.321281, 36.886677]
    }, {
      "shop_id": "32d8a827-80cc-42fc-8671-7442c0d16300",
      "location": [-1.3179562, 36.88725]
    }, {
      "shop_id": "d9c83c3a-caab-4f01-a1d1-a21cd0143747",
      "location": [-1.3217351, 36.8887]
    }, {
      "shop_id": "e8bb38d1-a458-4759-bf65-df73d954a593",
      "location": [-1.3241417, 36.890396]
    }, {
      "shop_id": "757e54f2-1afa-41b1-92d4-2c28b6b74601",
      "location": [-1.3247554, 36.893864]
    }, {
      "shop_id": "d318fbfd-6284-4a2c-83c6-a61686fb59b7",
      "location": [-1.325798, 36.89422]
    }, {
      "shop_id": "0592992c-d564-4d64-95c0-3132218d7ccb",
      "location": [-1.3258762, 36.89475]
    }, {
      "shop_id": "69b54b31-87c3-4a50-bc64-d16d084908aa",
      "location": [-1.3252124, 36.894928]
    }, {
      "shop_id": "099c8bb9-be85-4832-8330-af44740d1add",
      "location": [-1.3250468, 36.894676]
    }, {
      "shop_id": "af8ccb0c-abbf-4aa6-bafd-15c177b59aa0",
      "location": [-1.3244193, 36.894867]
    }, {
      "shop_id": "33fc2bb8-e259-44f4-9992-5a7cc5bd5810",
      "location": [-1.3247232, 36.895535]
    }, {
      "shop_id": "6a0e9809-03d6-40ba-8b7a-8ba4aa60c1cb",
      "location": [-1.3245234, 36.895405]
    }, {
      "shop_id": "dc89c364-96b0-4b77-89e2-1dc71806b475",
      "location": [-1.3233745098114, 36.8946304321289]
    }, {
      "shop_id": "538c01a7-ce03-44c8-9d7e-de9b5cacf90e",
      "location": [-1.323108, 36.894676]
    }, {
      "shop_id": "19802fd0-f139-4e22-ba2c-2cbefacfea7d",
      "location": [-1.3167098, 36.8914]
    }, {
      "shop_id": "7a7516fb-602e-41fe-b8c7-79105ec96c98",
      "location": [-1.3259743, 36.891644]
    }, {
      "shop_id": "80fac97c-4ba0-4121-aa7b-103d2f486909",
      "location": [-1.3264108, 36.89111]
    }, {
      "shop_id": "5aa06ac6-0f6b-4b5e-8f60-b48e39d362b8",
      "location": [-1.3274553, 36.89207]
    }, {
      "shop_id": "a882eba9-da15-4812-bdf3-fda5f7b6c56a",
      "location": [-1.3268691, 36.891193]
    }, {
      "shop_id": "79cd9eb1-ea18-419e-8657-fca9dbfaa2df",
      "location": [-1.3257498, 36.890034]
    }, {
      "shop_id": "2ece0c65-6a8a-44b6-85c2-c0730fb6f020",
      "location": [-1.32546401023865, 36.8898811340332]
    }, {
      "shop_id": "013a94a2-7a14-4271-a398-13e6546b4622",
      "location": [-1.325185, 36.890182]
    }, {
      "shop_id": "08ac9880-4d25-4782-8cdb-9e9624aff03c",
      "location": [-1.3259451, 36.88658]
    }, {
      "shop_id": "43b46136-4713-4dc8-86d5-e53140c7b257",
      "location": [-1.3260794, 36.886475]
    }, {
      "shop_id": "fc8b2f2a-9ce8-4acc-9d6e-689f543afc60",
      "location": [-1.32683062553406, 36.8849639892578]
    }, {
      "shop_id": "25a6d529-56bb-47cb-8ad0-0b30b544aaf4",
      "location": [-1.3275285, 36.88503]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Fedha Tel Aviv",
    "route_id": "662778e9-ef6b-4d6e-8a62-620671f0bdaa",
    "matrix_info": {
      "DistanceMatrixAPI requests": 283,
      "cache_hit": "74%"
    },
    "distance": "27.51km",
    "path": "dsfG_se`Fm{Dq@l@cDfAiAoYdXORk@f@eKe@E?AKKQA?zGaEcDvAiGuCuQgYgE}CNmAqBkE[m@MM{XwC@~Fxg@lWn@hClU{SnFjAfN_DpAU`ASCIG]I?f@|@RBj_E|X",
    "shops": [{
      "shop_id": "3b5bc275-f403-44a7-b16e-7ee3456c676a",
      "location": [-1.3196431, 36.898174]
    }, {
      "shop_id": "00865526-76e9-4843-9b25-d7ff4fde89e7",
      "location": [-1.3198678, 36.898994]
    }, {
      "shop_id": "e872f483-c3ab-4832-a86c-0fb4db019348",
      "location": [-1.3202337, 36.899357]
    }, {
      "shop_id": "5b2bb30d-75b1-4cdd-ae48-19944385a8af",
      "location": [-1.315987, 36.895325]
    }, {
      "shop_id": "e10feb66-e231-424d-9aa6-4466f7043967",
      "location": [-1.315906, 36.895226]
    }, {
      "shop_id": "b2dfa086-29a0-4550-8368-75546fc0b738",
      "location": [-1.315688, 36.895027]
    }, {
      "shop_id": "bba86a80-9087-4e2a-bf28-986d2de9d8e2",
      "location": [-1.31374382972717, 36.8952217102051]
    }, {
      "shop_id": "70d9ecfc-8567-4128-b63a-0732c8df5204",
      "location": [-1.31371414661407, 36.8952217102051]
    }, {
      "shop_id": "d4a3fcc3-013f-4048-aa35-7b86fe00901f",
      "location": [-1.31369650363922, 36.8952789306641]
    }, {
      "shop_id": "b6b68fe8-5d2f-45ff-becf-6352023a8215",
      "location": [-1.3136449, 36.89537]
    }, {
      "shop_id": "0c86fb8b-4d07-44e6-af59-c3f79f84062e",
      "location": [-1.3136265, 36.895374]
    }, {
      "shop_id": "451d9f68-e38a-4c0f-8543-3798933f98a1",
      "location": [-1.3150542974472, 36.8963356018066]
    }, {
      "shop_id": "4ee27fe6-980b-475b-8e44-ee76d121dca5",
      "location": [-1.31422901153564, 36.8959007263184]
    }, {
      "shop_id": "0f3278fa-a15b-4b7e-a122-f1c5a6546d4d",
      "location": [-1.3128986, 36.89665]
    }, {
      "shop_id": "1ec9b734-24e2-47d4-873f-92ba77fc8e42",
      "location": [-1.3099095, 36.90085]
    }, {
      "shop_id": "5492180c-5a85-4c03-bce6-a28e81dcfa82",
      "location": [-1.3089062, 36.901638]
    }, {
      "shop_id": "38789373-f772-436f-ac7c-88dd274e6df0",
      "location": [-1.3089895, 36.902027]
    }, {
      "shop_id": "11cc7c17-e7fd-47fa-82cf-3865c14024d2",
      "location": [-1.3084223, 36.90305]
    }, {
      "shop_id": "2e6d2cd9-c622-4ce4-906c-74f395384923",
      "location": [-1.30828, 36.903282]
    }, {
      "shop_id": "4b52b5ff-4318-40b7-9e3a-05e88e74fc9e",
      "location": [-1.3082070350647, 36.9033508300781]
    }, {
      "shop_id": "a9eb7ce7-1750-4b05-88ef-f62b990cba56",
      "location": [-1.30407, 36.90411]
    }, {
      "shop_id": "85c2d642-e800-48c2-ab4e-385f00478c90",
      "location": [-1.3040833, 36.90283]
    }, {
      "shop_id": "426d42fb-6967-4f8e-a97f-364c2d27b4c3",
      "location": [-1.31060576438904, 36.8989181518555]
    }, {
      "shop_id": "9176b511-859b-4d78-9116-8a21d1f2bb10",
      "location": [-1.3108509, 36.898228]
    }, {
      "shop_id": "1dec390e-7acc-417d-80a2-ab444f8572b8",
      "location": [-1.3144405, 36.901566]
    }, {
      "shop_id": "6f6764dc-435e-42cb-8746-5842c4269f9b",
      "location": [-1.3156382, 36.901188]
    }, {
      "shop_id": "b2d4a651-abac-43f0-9b37-286289d840ae",
      "location": [-1.3180822, 36.90199]
    }, {
      "shop_id": "4397d1a5-3357-4581-89bf-cc23acc3382a",
      "location": [-1.3184922, 36.902103]
    }, {
      "shop_id": "f613acf5-81f1-4c4d-99c4-6c3b09711575",
      "location": [-1.31881546974182, 36.9022026062012]
    }, {
      "shop_id": "223903a8-e86b-47dd-b241-7398700d4a0c",
      "location": [-1.3187993, 36.90225]
    }, {
      "shop_id": "3cb760c1-cbd3-4711-866f-e3cd38341dc6",
      "location": [-1.3187598, 36.902397]
    }, {
      "shop_id": "6ed86d33-ae61-4300-928f-07bb6c5ad5a4",
      "location": [-1.318712, 36.9024]
    }, {
      "shop_id": "e730b00b-66be-472e-8747-f0d6e1da93e4",
      "location": [-1.3189135, 36.90209]
    }, {
      "shop_id": "e001d248-3769-43c5-9e7f-a193083ad13d",
      "location": [-1.319005, 36.90207]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Jacaranda",
    "route_id": "91ba2436-8cf3-47ba-9979-e7ff1ff99402",
    "matrix_info": {
      "DistanceMatrixAPI requests": 290,
      "cache_hit": "78%"
    },
    "distance": "17.68km",
    "path": "|qoF_r``FmsE{|DIA}@b@ARc@Q_@H~FuWfHmAqItJ~IqXd@sBdEsJh@_BhMfIcBdDsBlJMoCCaIyAxFW`CrCdOaB|Gg@hAqAn@jChEmDrEoFaJyGnCs@iAi@y@Lq@Nc@?W^mBoBzJSHpMxNfdEdjD",
    "shops": [{
      "shop_id": "c864bf99-9cbe-4a00-8506-75c2527b7656",
      "location": [-1.1978363, 36.902542]
    }, {
      "shop_id": "c1015b96-63a6-480c-afc5-2f55b22a6779",
      "location": [-1.1977878, 36.902554]
    }, {
      "shop_id": "b9c51ff1-b6f6-44bb-82ce-a50172be754f",
      "location": [-1.1974773, 36.90237]
    }, {
      "shop_id": "cae7072d-2af6-47d9-8e56-1960c0352979",
      "location": [-1.197473, 36.902267]
    }, {
      "shop_id": "0473d0a3-4d1a-4d51-8a14-1b96368a38eb",
      "location": [-1.1972893, 36.90236]
    }, {
      "shop_id": "afb9953b-e1c7-4e73-8fae-046f8f805f5c",
      "location": [-1.197125, 36.902306]
    }, {
      "shop_id": "18f90a2f-ef59-4855-aa6c-cf85d4d03ad6",
      "location": [-1.1984131, 36.906258]
    }, {
      "shop_id": "f55e2104-2c15-4580-ad98-cc17e03fdbfe",
      "location": [-1.1998932, 36.906654]
    }, {
      "shop_id": "4377fc85-a6d0-463d-9618-c9b7aa2842c3",
      "location": [-1.1982018, 36.90478]
    }, {
      "shop_id": "ee5281c8-2c98-476e-880e-07a540c0bba5",
      "location": [-1.1999567, 36.90887]
    }, {
      "shop_id": "4b14833d-6cba-4bae-b9ce-1a24e9ee5960",
      "location": [-1.200151, 36.90945]
    }, {
      "shop_id": "55ec272c-82e6-41d2-bd11-40f17c88ccd6",
      "location": [-1.2011368, 36.911312]
    }, {
      "shop_id": "ed0c352b-9a08-4a18-beee-f813980a45fe",
      "location": [-1.2013535, 36.911793]
    }, {
      "shop_id": "01130207-0f7f-4b0c-b5b5-9b0e0445abfb",
      "location": [-1.2036378, 36.910145]
    }, {
      "shop_id": "407f0c9d-e264-48d6-8579-f6b0c0e87e5c",
      "location": [-1.2031364, 36.909317]
    }, {
      "shop_id": "b56a1283-6b59-48c9-901f-261d1ebd25d2",
      "location": [-1.2025567, 36.907486]
    }, {
      "shop_id": "888176f1-1437-45bf-a6f9-91417a3ad80e",
      "location": [-1.2024858, 36.90821]
    }, {
      "shop_id": "18e7d7c7-d037-4e95-9340-790598acf9b0",
      "location": [-1.2024661, 36.90982]
    }, {
      "shop_id": "d020b8c7-86c5-42ca-8c86-abf2eb86012d",
      "location": [-1.2020209, 36.908566]
    }, {
      "shop_id": "2efffd45-ca10-4d67-a035-0acff7eb194e",
      "location": [-1.2018954, 36.907917]
    }, {
      "shop_id": "4e4f3018-3223-4d8f-ba1e-5381f60a5ec5",
      "location": [-1.2026359, 36.905334]
    }, {
      "shop_id": "fe1460fc-fca9-45ff-b8a1-5b34325d93b5",
      "location": [-1.2021466, 36.903904]
    }, {
      "shop_id": "ba1aee57-e624-404e-abf8-1f7489b8d800",
      "location": [-1.2019471, 36.90353]
    }, {
      "shop_id": "f1b2be37-1b1c-4251-9261-cd7236cec907",
      "location": [-1.2015402, 36.903294]
    }, {
      "shop_id": "f3b21cf4-2e26-4973-b29f-859b1ee2039b",
      "location": [-1.2022381, 36.90228]
    }, {
      "shop_id": "16cb5c0a-84bb-46eb-bbf8-7e1a464d6440",
      "location": [-1.2013679, 36.901215]
    }, {
      "shop_id": "87011427-8b71-4b84-8e2c-c39bb9dea1d6",
      "location": [-1.2001734, 36.902985]
    }, {
      "shop_id": "2df8a9dd-2e5a-439e-8bbd-9c658053b20d",
      "location": [-1.1987629, 36.90227]
    }, {
      "shop_id": "06fc6146-8be8-4fee-bb49-6bca7e644247",
      "location": [-1.1984996, 36.90264]
    }, {
      "shop_id": "3e90acc3-0ca8-42ca-bdc2-9b307a533eda",
      "location": [-1.1982932, 36.90293]
    }, {
      "shop_id": "97bf4a84-9dff-4292-a6ec-b6704a8f5676",
      "location": [-1.1983591, 36.90318]
    }, {
      "shop_id": "bc712590-b796-4871-b3f2-9f0b996ebb61",
      "location": [-1.1984429, 36.90336]
    }, {
      "shop_id": "0f5f30af-dec1-474e-ae8b-c42bbf577fdb",
      "location": [-1.198436, 36.903477]
    }, {
      "shop_id": "16954b26-cdf8-4aff-83ff-4654b482eedd",
      "location": [-1.1986017, 36.904034]
    }, {
      "shop_id": "92a6758a-ec97-425b-9ae9-93677b9ea0d8",
      "location": [-1.1980373, 36.902126]
    }, {
      "shop_id": "25fe421b-0894-4883-a12f-7d8656708ebb",
      "location": [-1.1979407, 36.90208]
    }, {
      "shop_id": "abc7dfe4-9abf-41ac-92b3-9022cab8cc54",
      "location": [-1.2002738, 36.899548]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Industrial Area",
    "route_id": "361537d4-fe12-4101-bd0c-35d7b57a96b6",
    "matrix_info": {
      "DistanceMatrixAPI requests": 301,
      "cache_hit": "80%"
    },
    "distance": "34.39km",
    "path": "dsfG_se`FguCzpDE`CjCbuAvCCTpQqYeD?E_NnBmD_@G@JFD??BJDH^wFgBoEnBjAgEtL~PCBm@jMeA\\mBxA`EpBSFjDvEZ`DLMeBJl@tJg`BlX|fByaEHQo`@cGq@IJY~BnAxEmCpA_DhByEr_EytC",
    "shops": [{
      "shop_id": "aa6c95b0-fdcd-4c37-abcc-92d6d0138804",
      "location": [-1.3257458, 36.86946]
    }, {
      "shop_id": "c52fef7d-cbc7-4088-8d34-87e4f615f0a2",
      "location": [-1.3257219, 36.868805]
    }, {
      "shop_id": "0ed5c10b-8f33-464b-bf4a-405332adcf7f",
      "location": [-1.3264186, 36.855026]
    }, {
      "shop_id": "31097090-8b4d-475e-8e9d-3300a2713e0f",
      "location": [-1.3271838, 36.855053]
    }, {
      "shop_id": "91db5964-5b40-4662-9ccf-c828f5c80f66",
      "location": [-1.327291, 36.85208]
    }, {
      "shop_id": "8b7d6bf6-7fc4-4cdd-91da-34333e95c8ee",
      "location": [-1.323039, 36.852905]
    }, {
      "shop_id": "2d91c0a1-49be-43c3-a4ba-f87446cedb5d",
      "location": [-1.3230377, 36.852936]
    }, {
      "shop_id": "11bd9f9a-bce7-4cc2-8347-de847f83d4be",
      "location": [-1.3206434, 36.852383]
    }, {
      "shop_id": "6411f9a3-a83f-43ee-954d-5cb59b93574c",
      "location": [-1.3197724, 36.852543]
    }, {
      "shop_id": "5d0d9e02-4913-4564-bf5e-e5f75e597b86",
      "location": [-1.3197289, 36.85253]
    }, {
      "shop_id": "9c623dfc-bde3-4717-83b7-c3b67bf11626",
      "location": [-1.3197912, 36.852486]
    }, {
      "shop_id": "cb7bfc33-10e0-4fbb-aad8-6a4d9be6bebe",
      "location": [-1.3198209, 36.85249]
    }, {
      "shop_id": "f7131b8a-d31c-487e-829a-c3db2d9bfe85",
      "location": [-1.3198212, 36.852467]
    }, {
      "shop_id": "0a171330-fd29-40c6-b3d4-e75d91a5579f",
      "location": [-1.3198833, 36.852444]
    }, {
      "shop_id": "61be96e9-d5df-4f28-865f-fd13e71d1f3a",
      "location": [-1.3199311, 36.852283]
    }, {
      "shop_id": "0e971574-ce08-484a-99e2-51a2777356f0",
      "location": [-1.3186933, 36.852795]
    }, {
      "shop_id": "4d400386-b91d-44bd-8dc7-eb50937c7b40",
      "location": [-1.317653, 36.85224]
    }, {
      "shop_id": "f1ea07bf-d0e2-4384-b5c5-32ec063bbded",
      "location": [-1.3180283, 36.85324]
    }, {
      "shop_id": "85e5945a-c4f7-486d-8aa3-057d574d6814",
      "location": [-1.3202223, 36.850357]
    }, {
      "shop_id": "cd99fd74-5e39-447a-a6c1-0044a7b31c50",
      "location": [-1.3202, 36.85034]
    }, {
      "shop_id": "ad9cdf98-3afc-4b01-bf77-f88669e1215b",
      "location": [-1.3199704, 36.84804]
    }, {
      "shop_id": "7bbbd445-15e8-4db3-aaac-e1403fd304cb",
      "location": [-1.3196207, 36.847885]
    }, {
      "shop_id": "47ee5e68-1ea2-4822-add2-990565516010",
      "location": [-1.3190734, 36.847443]
    }, {
      "shop_id": "aa2dde3d-3b4b-4a33-b78c-0beb804f6322",
      "location": [-1.3200368, 36.846874]
    }, {
      "shop_id": "f8a49b22-8b93-45d1-98ee-3b2d8761d463",
      "location": [-1.3199426, 36.846832]
    }, {
      "shop_id": "cf3841aa-a6a5-45c0-81e0-e53b3e99b91a",
      "location": [-1.3208001, 36.845745]
    }, {
      "shop_id": "056eaeee-7307-4ff6-ae22-4edd3bc6cb6c",
      "location": [-1.3209425, 36.844944]
    }, {
      "shop_id": "02bc4261-bd1b-4eec-b405-745c5cef566f",
      "location": [-1.3210138, 36.845005]
    }, {
      "shop_id": "fba58fed-c456-4f73-9c9a-2bb0e8d25c5c",
      "location": [-1.3205041, 36.844948]
    }, {
      "shop_id": "cbb97edc-cc7b-40a0-a8a1-e8ba4da795ef",
      "location": [-1.3207272, 36.843082]
    }, {
      "shop_id": "11aa328d-a359-42a9-a9cf-30d854926ef2",
      "location": [-1.3051744, 36.83901]
    }, {
      "shop_id": "4f75195c-3c3a-4dfe-a48c-1e98919f94d7",
      "location": [-1.3218033, 36.87018]
    }, {
      "shop_id": "f5b3e418-f81d-4806-b18f-a9df29886548",
      "location": [-1.3218489, 36.870274]
    }, {
      "shop_id": "60e9be82-f421-4a02-8d31-2dece503660a",
      "location": [-1.3164937, 36.871567]
    }, {
      "shop_id": "e854a54c-aab1-4c13-8ec5-40b3923e28c0",
      "location": [-1.3162355, 36.871616]
    }, {
      "shop_id": "85ebdf3c-6db9-4ae9-bad2-830a8f29116d",
      "location": [-1.3162967, 36.871754]
    }, {
      "shop_id": "9a3981a4-69c4-456d-aff4-5eae768d9600",
      "location": [-1.3169407, 36.871353]
    }, {
      "shop_id": "7404d5c1-e879-4fbb-aed5-5148c5671765",
      "location": [-1.3180327, 36.872055]
    }, {
      "shop_id": "9a477be6-4800-43d9-8366-6214540279b7",
      "location": [-1.3184416, 36.87286]
    }, {
      "shop_id": "f2a0d5f2-22c0-457f-a19d-3633e8aea37a",
      "location": [-1.3189694, 36.873947]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Eastleigh/Pangani",
    "route_id": "3beb9e97-76e2-4d6c-9d3d-277370381f75",
    "matrix_info": {
      "DistanceMatrixAPI requests": 415,
      "cache_hit": "72%"
    },
    "distance": "41.26km",
    "path": "dsfG_se`FauMpaIkHn@~EnSaQ|AwCbAOMwGeJWeDRyTx@NkMuTL@kB{@VyDUYZoJbCz@Oa@xa@|WhEwB[k@[QMO^QSwBk@T`@qAi@OtCQnHs@~Df@@t@p@lHmGnElJiIEi@TtBHVZ~CjbMghH",
    "shops": [{
      "shop_id": "aa6225df-8e9b-4ab2-9388-925b58286643",
      "location": [-1.2745769, 36.84631]
    }, {
      "shop_id": "16e82c2a-9dea-407f-9908-7f8a938145a6",
      "location": [-1.2730792, 36.846066]
    }, {
      "shop_id": "f536a5c5-33c7-463e-a00c-36d78dcb97f9",
      "location": [-1.2741969, 36.842793]
    }, {
      "shop_id": "8b395b14-e3ff-4c21-b819-8c6bd4091174",
      "location": [-1.2713101, 36.842323]
    }, {
      "shop_id": "886dabf4-7e44-4640-9d4e-71e9ae3f0bdb",
      "location": [-1.2705534, 36.84198]
    }, {
      "shop_id": "d2cd1737-d277-4f44-a520-be9ae4f52c32",
      "location": [-1.2704695, 36.84205]
    }, {
      "shop_id": "a8ceecff-7072-4c1f-8fc6-fb01e6a541a3",
      "location": [-1.2690699, 36.84384]
    }, {
      "shop_id": "63ea5894-6051-47e2-b2a1-a1d9721d96ed",
      "location": [-1.2689531, 36.844673]
    }, {
      "shop_id": "5ce965c6-3631-4776-afc6-92b65fee2797",
      "location": [-1.2690465, 36.848164]
    }, {
      "shop_id": "a1faef56-332f-4743-9bae-aa76f890f500",
      "location": [-1.2693446, 36.848083]
    }, {
      "shop_id": "fa92ae31-9f2e-4a36-a1dc-f347d8afa7ce",
      "location": [-1.2670366, 36.851555]
    }, {
      "shop_id": "da63bb12-3e8c-434d-90a1-83b64ac8d6ae",
      "location": [-1.2671067, 36.851543]
    }, {
      "shop_id": "ac030f46-3e4a-469b-8390-09680b053807",
      "location": [-1.2665738, 36.85184]
    }, {
      "shop_id": "ab3bfcb2-a167-41a3-be95-37da82c73446",
      "location": [-1.2666931, 36.852768]
    }, {
      "shop_id": "97d8aa1c-b508-4886-b4e8-746f2531beff",
      "location": [-1.266575, 36.852898]
    }, {
      "shop_id": "04b9c1f6-f7b2-4294-9875-b60ea4e7b77d",
      "location": [-1.2667202, 36.854736]
    }, {
      "shop_id": "5e7b7d48-92fc-4f8c-a7d5-1020b7f0829f",
      "location": [-1.2673784, 36.854443]
    }, {
      "shop_id": "41974f0e-0c70-44ac-b2d3-b9942b996233",
      "location": [-1.2673047, 36.85461]
    }, {
      "shop_id": "dbe2cd0b-b3cb-444d-bc56-916dcb3f1120",
      "location": [-1.2728666, 36.85062]
    }, {
      "shop_id": "cde9d5b1-d9f0-4f6e-8eaf-ff855b79200a",
      "location": [-1.2738776, 36.85122]
    }, {
      "shop_id": "e0a22b70-2819-44a1-8b0e-10f98b8b3b38",
      "location": [-1.2737439, 36.85144]
    }, {
      "shop_id": "d2ea4aa7-ae87-4367-b3b2-77d6f4f07218",
      "location": [-1.2735994, 36.85153]
    }, {
      "shop_id": "483099fc-3c77-41b3-a8ea-c5a44a221146",
      "location": [-1.2735347, 36.85161]
    }, {
      "shop_id": "8904c0e8-672c-460a-bb37-6e26fa472205",
      "location": [-1.2736928, 36.851696]
    }, {
      "shop_id": "d6219182-22bc-4464-a842-e5246e67527b",
      "location": [-1.273589, 36.852303]
    }, {
      "shop_id": "5686a563-06f4-4a07-808e-37e4849c465f",
      "location": [-1.2733672, 36.852192]
    }, {
      "shop_id": "fd1a5529-8070-4d10-a97f-2b2997388eb0",
      "location": [-1.2735351, 36.852596]
    }, {
      "shop_id": "d5ba67e7-7e9d-4b3c-b035-f437360f091c",
      "location": [-1.2733341, 36.852676]
    }, {
      "shop_id": "1f97ebb8-8a03-4fb3-a2c8-146cb10325fd",
      "location": [-1.2740791, 36.85277]
    }, {
      "shop_id": "4fdea504-9eea-4a08-85a6-0c1530cd8b34",
      "location": [-1.275603, 36.85303]
    }, {
      "shop_id": "575588af-b9a3-4a27-843a-9724997cd8df",
      "location": [-1.2765633, 36.852825]
    }, {
      "shop_id": "2bce8c09-beca-4fc2-9e49-526273adcf2f",
      "location": [-1.2765702, 36.852562]
    }, {
      "shop_id": "e1f791f0-00ca-43a5-8794-f025864c8115",
      "location": [-1.276818, 36.85105]
    }, {
      "shop_id": "df41b0a3-6f80-4ec0-9987-c2b0e29591f1",
      "location": [-1.2754683, 36.850006]
    }, {
      "shop_id": "7922cb0d-4293-4b6e-b9b6-be32f18099f5",
      "location": [-1.2772951, 36.85166]
    }, {
      "shop_id": "5c521df1-4ba0-44d6-8390-52db215572b7",
      "location": [-1.2772704, 36.851868]
    }, {
      "shop_id": "de8cffdb-8cc5-403f-959c-d930e5743f02",
      "location": [-1.2773826, 36.851276]
    }, {
      "shop_id": "f69fed21-ec48-4b3b-8780-954ff36fb876",
      "location": [-1.277425, 36.85116]
    }, {
      "shop_id": "c6b0f074-7296-473b-8987-c6b8d7a04afb",
      "location": [-1.2775737, 36.850357]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Jogoo Road 1",
    "route_id": "f6c0d941-bf97-405a-bf6b-71256c335dcb",
    "matrix_info": {
      "DistanceMatrixAPI requests": 390,
      "cache_hit": "78%"
    },
    "distance": "39.17km",
    "path": "dsfG_se`Fk{FbaGkeBb`Blc@{NsV_CkBeF~Jc{A~I|@`BuOwItFMAA~@D_El@{At|@cdCKKmAw@OAaHaEVPFHdAr@Kb@?H_@TsAhD|J|E|AEj@GHaAdCxA|IbMyDXSsIVnE\\fKT@aOLCUe@G@a@Na@dHfaA^SjbG_wD",
    "shops": [{
      "shop_id": "c7f93bff-1785-430b-852f-5852b5f0d975",
      "location": [-1.309407, 36.85662]
    }, {
      "shop_id": "7343f3f3-f60f-4d9a-86ae-8660e2d7ccb7",
      "location": [-1.2930316, 36.841084]
    }, {
      "shop_id": "034f1888-a0f6-4df6-82ea-2d8053e11997",
      "location": [-1.2988639, 36.84362]
    }, {
      "shop_id": "76365d49-7e55-40ed-9633-13b312c8a6c8",
      "location": [-1.2950795, 36.84426]
    }, {
      "shop_id": "f10a9a04-67fb-4048-928c-c6e99d78eb0a",
      "location": [-1.2945384, 36.845413]
    }, {
      "shop_id": "a5137f43-1f34-41b2-8a79-820ee4f8eeb4",
      "location": [-1.2964551, 36.860153]
    }, {
      "shop_id": "5f38ea04-4c29-484e-8c21-9db0d1266fb4",
      "location": [-1.2982239, 36.859837]
    }, {
      "shop_id": "ce9b5a0c-1591-4f0e-a090-6464bf64310a",
      "location": [-1.2987124, 36.862507]
    }, {
      "shop_id": "dbab5c1b-807f-411c-9e41-319e7d827299",
      "location": [-1.2969890832901, 36.8612823486328]
    }, {
      "shop_id": "c4c51740-b829-4f9d-858c-f5571b369e8f",
      "location": [-1.2969193, 36.86129]
    }, {
      "shop_id": "8a1772ae-fd34-42cc-b9aa-c9133dbfbdca",
      "location": [-1.29691195487976, 36.8609657287598]
    }, {
      "shop_id": "eb63bb4c-6995-4325-8f11-9b753c3c03e0",
      "location": [-1.296944, 36.86193]
    }, {
      "shop_id": "37a4d996-8aab-40b7-90f0-487e75d3b875",
      "location": [-1.2971667, 36.86239]
    }, {
      "shop_id": "b987b0e7-875d-44ad-b687-adaeb8a7170d",
      "location": [-1.3070428, 36.883686]
    }, {
      "shop_id": "30ab3580-8cd5-45e6-8dff-4323e7af8866",
      "location": [-1.3069845, 36.883747]
    }, {
      "shop_id": "cd0671a3-f4b2-4e9a-8db6-12bfc044af4a",
      "location": [-1.306593, 36.884033]
    }, {
      "shop_id": "2309090f-01b7-4014-9106-8820606b831a",
      "location": [-1.3065094, 36.884037]
    }, {
      "shop_id": "6b46d59c-1548-42bc-b7d6-56a2aa537e2b",
      "location": [-1.3050613, 36.88501]
    }, {
      "shop_id": "1ac63018-58a9-436b-96d6-dec78702ba7e",
      "location": [-1.3051829, 36.88492]
    }, {
      "shop_id": "3c823396-1e45-48b3-95f2-550073acbdfc",
      "location": [-1.3052202, 36.88487]
    }, {
      "shop_id": "5a16cd3d-1b13-4dbc-814c-8ff810b4bba6",
      "location": [-1.305572, 36.88461]
    }, {
      "shop_id": "f7c643c2-ba22-4590-b808-6929b3c4f482",
      "location": [-1.305509, 36.884434]
    }, {
      "shop_id": "bdc05b4a-3d17-4d21-973a-87adcf493c3b",
      "location": [-1.3055083, 36.884377]
    }, {
      "shop_id": "bd9fd62b-ef0f-4906-9fe4-af24d36dbea3",
      "location": [-1.3053519, 36.88427]
    }, {
      "shop_id": "19ea5142-795c-4c13-85b4-fc5b15c104d1",
      "location": [-1.3049309, 36.88342]
    }, {
      "shop_id": "831c982b-26ed-4ff9-93c3-493699018e11",
      "location": [-1.3068415, 36.882313]
    }, {
      "shop_id": "dd2abb9e-9486-43a4-a091-6ef35a6913ca",
      "location": [-1.3073072, 36.882343]
    }, {
      "shop_id": "5721b48c-05b0-4586-a93f-671cb558bd65",
      "location": [-1.3075254, 36.882378]
    }, {
      "shop_id": "1171f99c-54cb-4217-8269-113d3725256f",
      "location": [-1.3075788, 36.882706]
    }, {
      "shop_id": "853d22b5-d3b1-458c-88b2-966ac34ff360",
      "location": [-1.3082488, 36.882263]
    }, {
      "shop_id": "6b20ccbc-d3bd-4208-87f6-84b0b463de66",
      "location": [-1.31, 36.88]
    }, {
      "shop_id": "44d146ed-8f71-4645-bb0e-904dfbca07a4",
      "location": [-1.3090664, 36.879868]
    }, {
      "shop_id": "c4b0b520-7e59-4d96-9724-56f124561bfb",
      "location": [-1.3089666, 36.881565]
    }, {
      "shop_id": "90eb76b3-bb3e-40d5-aa27-cdb4bb629108",
      "location": [-1.3090867, 36.880527]
    }, {
      "shop_id": "3d280b21-3ed6-4b8e-bd97-f3337a2176c6",
      "location": [-1.3092421, 36.878574]
    }, {
      "shop_id": "a464dc81-6129-4e9a-9fc1-fca4eb486a8c",
      "location": [-1.3093523, 36.878563]
    }, {
      "shop_id": "14e980dc-8444-4d08-9442-ede438bae374",
      "location": [-1.3067821, 36.878487]
    }, {
      "shop_id": "21a88bf6-283d-47bf-864a-6336f36d5bf4",
      "location": [-1.3067579, 36.8786]
    }, {
      "shop_id": "e41bb4c1-e661-4b4c-b334-3fc4112fd1e2",
      "location": [-1.3065703, 36.87864]
    }, {
      "shop_id": "9992031f-d923-4fda-aa07-a2b735fabb30",
      "location": [-1.3065822, 36.878807]
    }, {
      "shop_id": "3133ce22-fdf7-4c7b-bc81-7682c30a530f",
      "location": [-1.306659, 36.87898]
    }, {
      "shop_id": "38f9ee25-37b5-42e0-b9b6-c945b1d9aa75",
      "location": [-1.3081259, 36.868378]
    }, {
      "shop_id": "8d61f0e8-171f-4bbb-8c79-990d9d2abe95",
      "location": [-1.3082873, 36.86848]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Babadogo",
    "route_id": "211b0b2d-ad7b-450f-b4a1-f0cea56d887b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 460,
      "cache_hit": "74%"
    },
    "distance": "14.43km",
    "path": "|qoF_r``FfOecA]g@fAJcEwFG?WK{@f@eH`BbBEjE|AtAKd@wJnBCBEHLDBV]hCzCtSxAWJrInBNe@r@ccAwCyOSBmG}TpQz[`O|XKPnY`e@sAVaDzGo@l@w@f_@t@^R@bBTp@Wv@PIhBiBgDaTm\\gt@p@mTxeA",
    "shops": [{
      "shop_id": "b03626b7-e125-403a-b9c7-f63c7b1372ed",
      "location": [-1.2344292, 36.88307]
    }, {
      "shop_id": "25221334-e6af-4805-bea3-4aeb49e7d40a",
      "location": [-1.23427903652191, 36.8832664489746]
    }, {
      "shop_id": "cb19edfc-b199-49b4-98d0-bd080c0d6c7d",
      "location": [-1.2346419, 36.88321]
    }, {
      "shop_id": "87f7791c-1fc4-44f8-8cf9-e05486e9a327",
      "location": [-1.2336595, 36.88445]
    }, {
      "shop_id": "f6c25d13-57ad-4639-a1b9-0a07cb0f78d1",
      "location": [-1.2336195, 36.884445]
    }, {
      "shop_id": "4af3ed83-1340-4751-8b3c-e073f3922b27",
      "location": [-1.2335042, 36.88451]
    }, {
      "shop_id": "ec8a5ad8-1eca-4386-b627-35d9d662356b",
      "location": [-1.2332013, 36.88431]
    }, {
      "shop_id": "4715d4f7-cd55-4a10-892d-4b22dcb4fbc5",
      "location": [-1.2317253, 36.88382]
    }, {
      "shop_id": "416f747a-5671-413e-95e4-752dcee75a92",
      "location": [-1.2322304, 36.883846]
    }, {
      "shop_id": "dc0de385-50a5-44a8-a5f0-4b6831c6885d",
      "location": [-1.233249, 36.88338]
    }, {
      "shop_id": "5b407dba-e60c-4961-9cd8-e1c3ba8a769b",
      "location": [-1.2336808, 36.883442]
    }, {
      "shop_id": "df4374d8-5a6c-473b-be97-a39757772e11",
      "location": [-1.23386788368225, 36.8853225708008]
    }, {
      "shop_id": "bdd5c11a-afbc-4a93-81e9-af7a33af8ea6",
      "location": [-1.2344302, 36.88534]
    }, {
      "shop_id": "e9a5dc9b-9e0d-4948-8a7a-b0bce037049d",
      "location": [-1.2344502, 36.88537]
    }, {
      "shop_id": "645c9247-9e92-4b8d-85d9-81cecfc70a96",
      "location": [-1.2344989, 36.885303]
    }, {
      "shop_id": "2d2b9ae7-8397-4120-bf08-b66a7dcbbe99",
      "location": [-1.2345284, 36.885284]
    }, {
      "shop_id": "67660730-2539-4417-8d6e-0e4bd83552a3",
      "location": [-1.2346474, 36.885426]
    }, {
      "shop_id": "18ac4556-3364-423b-bec4-38a3a262e0a2",
      "location": [-1.2353402, 36.884647]
    }, {
      "shop_id": "f716cd41-2ef4-4260-a234-84b0b26f74eb",
      "location": [-1.2386498, 36.884197]
    }, {
      "shop_id": "87e5d160-4895-4b5a-89a8-f5f426f8a024",
      "location": [-1.23853, 36.88414]
    }, {
      "shop_id": "0da7ee41-a333-4e85-aa60-76731b7c79d7",
      "location": [-1.2402273, 36.883575]
    }, {
      "shop_id": "8f9ce42f-23d5-4ca4-a879-4b9228a7f7a8",
      "location": [-1.2403069, 36.883774]
    }, {
      "shop_id": "76565278-974e-4c44-a0e6-852d3d47ff6c",
      "location": [-1.2405664, 36.894672]
    }, {
      "shop_id": "7674dbbd-c6a9-4c58-b9da-8df7526d0d68",
      "location": [-1.2398142, 36.897358]
    }, {
      "shop_id": "16a78614-2fff-4e6c-9d0d-bd196c39a056",
      "location": [-1.2397093, 36.897343]
    }, {
      "shop_id": "0c8c6b14-7c06-4f4f-9153-d3160caddf8b",
      "location": [-1.238361120224, 36.9008522033691]
    }, {
      "shop_id": "8f893bb2-d1a1-451a-8184-1bdb3b9efdef",
      "location": [-1.2413254, 36.89623]
    }, {
      "shop_id": "87d9196e-01d1-4165-ba86-60e17d60f13d",
      "location": [-1.2438987, 36.89208]
    }, {
      "shop_id": "a30d24ac-3e99-4c48-9d46-60c516e7650b",
      "location": [-1.2438371, 36.89199]
    }, {
      "shop_id": "77d41568-afa9-481b-8cdd-6191362e5e5e",
      "location": [-1.2480778, 36.885895]
    }, {
      "shop_id": "d29b75a8-dc03-41dc-8001-eaa270128272",
      "location": [-1.24765515327454, 36.8857841491699]
    }, {
      "shop_id": "a14b26ea-dd4e-4dd3-863a-1f50b6768a2b",
      "location": [-1.2468507, 36.88436]
    }, {
      "shop_id": "ec33e2b5-2265-4219-9bd0-273a4509d41a",
      "location": [-1.24661099910736, 36.8841285705566]
    }, {
      "shop_id": "b028627d-79cf-41be-8f21-0738837c1ac8",
      "location": [-1.2463278, 36.878967]
    }, {
      "shop_id": "aac6f1a7-0325-4ecb-ab9f-62f520fcd990",
      "location": [-1.246596, 36.878807]
    }, {
      "shop_id": "271db135-af6c-4176-a0a9-adac24bbbdad",
      "location": [-1.2467004, 36.878803]
    }, {
      "shop_id": "1838b882-def9-4477-bec4-961ae2d91ac2",
      "location": [-1.2471952, 36.87869]
    }, {
      "shop_id": "ca967e49-737d-4646-a246-9161b736ebc0",
      "location": [-1.2474501, 36.878807]
    }, {
      "shop_id": "545b4b78-17bd-4daf-9375-c5df61e5b700",
      "location": [-1.247734, 36.878716]
    }, {
      "shop_id": "0e5c9579-0109-4bb9-ae99-623f48424f2a",
      "location": [-1.2476834, 36.87819]
    }, {
      "shop_id": "d965b889-8879-4a88-93be-a26ea26c9ab0",
      "location": [-1.2471486, 36.87903]
    }, {
      "shop_id": "cf7923d2-70a6-4772-a2d4-60326e3cec2d",
      "location": [-1.2437801, 36.883736]
    }, {
      "shop_id": "ac401d92-7f7c-4748-9620-8259f3d10502",
      "location": [-1.2352604, 36.88349]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kabete",
    "route_id": "fd8d05e0-3c99-4f16-a297-a78c930ac666",
    "matrix_info": {
      "DistanceMatrixAPI requests": 361,
      "cache_hit": "69%"
    },
    "distance": "62.53km",
    "path": "`z|Fedx_Fm}G`dF_O~k@sqBh|EcHrbEtm@gnA_Gj~@cB~Ics@|wFCKpg@|c@TsOk@uA~eAusExZay@j\\gQ^U@GfAoFdAx@cEdGoEbHlSlCIGgFj@jDj]nT{GlE[@A|ClBpCd@fJzDtT{X_LqD{JEbyE_fT",
    "shops": [{
      "shop_id": "d200d6cc-6de5-44ef-baeb-0f7b02d56279",
      "location": [-1.2538646, 36.79234]
    }, {
      "shop_id": "026b8210-b730-46b1-972c-a435a9a4b0eb",
      "location": [-1.2513, 36.785137]
    }, {
      "shop_id": "0d81a748-6220-4559-9bb6-e731fb936b2a",
      "location": [-1.2329632, 36.74973]
    }, {
      "shop_id": "ab1a88d7-ca5f-4212-9b81-00b84cb3a724",
      "location": [-1.2314954, 36.718426]
    }, {
      "shop_id": "6ff1c4f6-307a-4c27-bf23-6f12c3140a86",
      "location": [-1.2389678, 36.731113]
    }, {
      "shop_id": "897da827-d704-44e5-956c-7003fedef1b1",
      "location": [-1.2376947, 36.72097]
    }, {
      "shop_id": "5e742934-e519-4b58-8730-b643e6d4d6ff",
      "location": [-1.2371895, 36.719208]
    }, {
      "shop_id": "32aacc0c-b4b3-49bd-8a99-404b6ab5b85d",
      "location": [-1.2288454, 36.679375]
    }, {
      "shop_id": "5c7ce274-5396-4e6f-9a54-b175e34cf65f",
      "location": [-1.228828, 36.67944]
    }, {
      "shop_id": "8b477452-07f7-430c-add3-4655089a9f2a",
      "location": [-1.2353165, 36.673527]
    }, {
      "shop_id": "62b43a3c-65ce-49a0-80b4-5cf04da9eafb",
      "location": [-1.235431, 36.676186]
    }, {
      "shop_id": "bdb29c19-f45b-4a43-847d-2627b9b2bc88",
      "location": [-1.2352054, 36.67662]
    }, {
      "shop_id": "283893aa-9e17-49f9-b96f-65df492e63c4",
      "location": [-1.2465678, 36.710648]
    }, {
      "shop_id": "cb63e373-99bd-491b-9a49-2918436b42dc",
      "location": [-1.2510184, 36.71994]
    }, {
      "shop_id": "857ab227-d5e3-4300-889a-9a679c88d85c",
      "location": [-1.2557217, 36.722855]
    }, {
      "shop_id": "b1dc9db1-bd74-4548-bcfe-71452b3ca872",
      "location": [-1.2558799, 36.72297]
    }, {
      "shop_id": "55acdc52-b30e-49d6-ae73-9663e6ddc850",
      "location": [-1.2558942, 36.72301]
    }, {
      "shop_id": "dc9b5151-c4b6-42f3-99cd-87c2f04e51ed",
      "location": [-1.2562468, 36.724213]
    }, {
      "shop_id": "6f5e5dce-35b0-4fa7-b551-42878357defa",
      "location": [-1.2565956, 36.723923]
    }, {
      "shop_id": "a3a42cf1-88f4-4248-9f14-280ef86af28a",
      "location": [-1.2556244, 36.722607]
    }, {
      "shop_id": "0e642914-d6e4-47a8-b1b2-2365d5cc3c3b",
      "location": [-1.2545803, 36.721153]
    }, {
      "shop_id": "129491ea-caba-4c6f-ba50-08daebd5b5de",
      "location": [-1.2578458, 36.72044]
    }, {
      "shop_id": "69a536a0-0277-4191-a6c1-60072d9f3a4c",
      "location": [-1.2578002, 36.72048]
    }, {
      "shop_id": "32b8780c-c9e3-485d-9b9f-2b8bf1550e9d",
      "location": [-1.2566415, 36.72026]
    }, {
      "shop_id": "dd24d52a-38b9-41a4-b920-7bbaa1157203",
      "location": [-1.2574998, 36.715397]
    }, {
      "shop_id": "fb80238e-9dd0-4b3c-94b5-218b8f815eb5",
      "location": [-1.2609413, 36.71682]
    }, {
      "shop_id": "98c490a9-dd35-470f-aeda-a90b79dbbfbe",
      "location": [-1.2619662, 36.716957]
    }, {
      "shop_id": "4b24be2c-221b-4d8a-888e-05e0eccc9d27",
      "location": [-1.2619781, 36.716965]
    }, {
      "shop_id": "60254faa-e8b5-498e-82c0-9d5a707f4ff0",
      "location": [-1.2627732, 36.716423]
    }, {
      "shop_id": "1b703a19-9697-4a62-8304-4005221c556f",
      "location": [-1.263504, 36.71623]
    }, {
      "shop_id": "4c191114-d65f-4fc8-87be-ff5b450dde50",
      "location": [-1.2652951, 36.715294]
    }, {
      "shop_id": "126a2726-e225-47fb-992d-8e6ec4356b73",
      "location": [-1.2687736, 36.71943]
    }, {
      "shop_id": "e76bc2a2-7a27-4ad7-9bfa-b165e43311ab",
      "location": [-1.2666916, 36.720318]
    }, {
      "shop_id": "4ae18884-1ac1-4302-bbe6-1dc7837bbc6c",
      "location": [-1.2647943, 36.720345]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Juja",
    "route_id": "62790b65-5446-4433-abac-0b4ac0ec9585",
    "matrix_info": {
      "DistanceMatrixAPI requests": 398,
      "cache_hit": "69%"
    },
    "distance": "63.31km",
    "path": "l~mEa_raF`nFpjRbm@`o@veBvbApd@rjGMOz]{x@?AJKydAagEmJjIuqAi`AaGzC}Qv^BR}Gp@gCwCmEeI_i@}x@OMiBEEBiXa@wDvCYZ_~@ty@br@o|@hTkKzOqZzDkFbEgF@OtJxDeOnZgFpMfZe@t@uAq~EidS",
    "shops": [{
      "shop_id": "eaeedf5a-a887-43c2-a40c-c71c0686c77f",
      "location": [-1.0980048, 37.025997]
    }, {
      "shop_id": "0bdde714-8d26-4935-a8a0-8016c64e942f",
      "location": [-1.1053832, 37.018314]
    }, {
      "shop_id": "56bd6e1f-e3f3-4160-b41d-42a783866a48",
      "location": [-1.1218151, 37.007465]
    }, {
      "shop_id": "e4173732-f0c6-4d03-922e-6c505999debb",
      "location": [-1.1278338432312, 36.9646492004395]
    }, {
      "shop_id": "324759cb-6377-442b-b88a-a093f4f80112",
      "location": [-1.12776100635529, 36.964729309082]
    }, {
      "shop_id": "d4facf23-88e5-4bba-ac20-c990bcb61339",
      "location": [-1.1326967, 36.97399]
    }, {
      "shop_id": "19f80157-f7e1-4863-8eda-e5ee00ce44d5",
      "location": [-1.1327032, 36.973995]
    }, {
      "shop_id": "6c8bcf1e-1474-44d1-b7e8-dff208ee22a1",
      "location": [-1.1327579, 36.974056]
    }, {
      "shop_id": "79fc1ee6-2ba8-427a-933b-8ac67b6389ab",
      "location": [-1.1215894, 37.006065]
    }, {
      "shop_id": "dbdf4078-ec85-4ba2-9218-d9314651442c",
      "location": [-1.1197612, 37.004414]
    }, {
      "shop_id": "bb985fb3-c2e6-4b84-8670-151c07d7bb28",
      "location": [-1.10653233528137, 37.0148620605469]
    }, {
      "shop_id": "309fb26d-b734-4ed5-ba60-41ef2b5c0260",
      "location": [-1.105241, 37.01408]
    }, {
      "shop_id": "ecae764e-361f-401a-9b77-dd398b61c83c",
      "location": [-1.1022128, 37.009]
    }, {
      "shop_id": "054b62a4-457f-4f9f-afd5-9ac902098ecb",
      "location": [-1.1022254, 37.0089]
    }, {
      "shop_id": "7d4fdee1-4744-4017-8eaf-44c2449c51e6",
      "location": [-1.100804, 37.00865]
    }, {
      "shop_id": "43662069-5e59-4eab-b92d-e396a9275a67",
      "location": [-1.10011696815491, 37.0094108581543]
    }, {
      "shop_id": "343648ae-646c-4644-8cd7-80c04ae65fa2",
      "location": [-1.0990896, 37.011036]
    }, {
      "shop_id": "9517c640-2867-4fed-9dd0-9e73d15bb8b9",
      "location": [-1.092369556427, 37.0203094482422]
    }, {
      "shop_id": "adffded5-ae09-4d9b-89f7-cf770da212ac",
      "location": [-1.0922918, 37.02038]
    }, {
      "shop_id": "b54275a0-d010-4b36-a81d-a7ac6ada9632",
      "location": [-1.0917599, 37.02041]
    }, {
      "shop_id": "b77c193a-4b74-42c2-9970-ae5b3dba9b4f",
      "location": [-1.0917273, 37.020393]
    }, {
      "shop_id": "8b7f1077-e630-4006-91bd-1cde12d785e6",
      "location": [-1.0876771, 37.02056]
    }, {
      "shop_id": "a70b50f8-9717-472b-81e0-f82e51fa576e",
      "location": [-1.0867589, 37.0198]
    }, {
      "shop_id": "c9dedc17-2355-4a35-ba42-16d206675334",
      "location": [-1.0866327, 37.01966]
    }, {
      "shop_id": "ca6b2045-1fdd-4afe-9ee6-e30784840ccb",
      "location": [-1.0765508, 37.010273]
    }, {
      "shop_id": "f42cc03a-0ff5-4480-a8ad-a2363a149aa5",
      "location": [-1.0847286, 37.020107]
    }, {
      "shop_id": "6187b6d6-3fd0-474a-8c7d-25cfb312c5a2",
      "location": [-1.088143, 37.02209]
    }, {
      "shop_id": "2dd13b06-530a-470c-aa11-e7c8324cebb0",
      "location": [-1.0908448, 37.0265]
    }, {
      "shop_id": "329bccaf-3388-4617-a6cb-a01ecdb08b06",
      "location": [-1.091782, 37.027676]
    }, {
      "shop_id": "71254c99-aee6-426c-b300-d4ec09a93208",
      "location": [-1.0927604, 37.02884]
    }, {
      "shop_id": "e96c13a6-b277-4343-aa2c-7962b3257169",
      "location": [-1.0927733, 37.02892]
    }, {
      "shop_id": "03840d1c-62ae-4797-bcc3-0f3534545fb1",
      "location": [-1.0946379, 37.02799]
    }, {
      "shop_id": "6c9d47cd-0886-4ca6-9055-d2ec54444820",
      "location": [-1.0920523, 37.023594]
    }, {
      "shop_id": "28504a43-b0d3-4557-9530-b9b9bc7253a2",
      "location": [-1.0908877, 37.02126]
    }, {
      "shop_id": "958772ee-1a76-451d-bb4c-abd900853e87",
      "location": [-1.0952466, 37.02145]
    }, {
      "shop_id": "3011b33c-9092-4f7d-8f7a-8221eaa646ce",
      "location": [-1.0955205, 37.021877]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Greater Mombasa Road 1",
    "route_id": "09d246ef-29b3-41c6-a723-e542554091e6",
    "matrix_info": {
      "DistanceMatrixAPI requests": 457,
      "cache_hit": "82%"
    },
    "distance": "31.32km",
    "path": "n{hH_ilbFECFEoZ{QMpHqGhiBRn@CfAlAtSDPCv@R~Cb@fDjyAh|G`CdCiDeIqVqa@{f@__BwX{iCC?Es@wDc@iZ}IDKjZwFSg@tByAGgFaDoy@{l@aPb@IKaB^gCkM}D[On]fJ|\\cpAeGwAbMgSPD@Ef@Wj@JHCaHf@_Ff@IOlpCdeAK^{b@gKsa@}WjDkBia@|f@",
    "shops": [{
      "shop_id": "ebdf26bf-5770-4ba4-9bfe-5e4b778c17ff",
      "location": [-1.5251737, 37.25986]
    }, {
      "shop_id": "b0a57cd8-4a5f-4231-bd3a-2d077e510d60",
      "location": [-1.5252104, 37.259888]
    }, {
      "shop_id": "949bf164-0760-43cd-9d92-011eb314560c",
      "location": [-1.520805, 37.26291]
    }, {
      "shop_id": "2f876749-9b99-4233-9f1e-ebcd3527bbcd",
      "location": [-1.52074468135834, 37.2613792419434]
    }, {
      "shop_id": "90a657f0-4056-4336-9a7e-e7fe3e415fda",
      "location": [-1.519371, 37.24437]
    }, {
      "shop_id": "06930442-1c5c-483c-8de1-1b8f3d06713c",
      "location": [-1.519471, 37.24413]
    }, {
      "shop_id": "7f093da1-f939-4de3-bde0-893576b0ab6a",
      "location": [-1.51944708824158, 37.2437744140625]
    }, {
      "shop_id": "0d453a87-c244-4b63-9170-3095b6aeb7cb",
      "location": [-1.5198445, 37.24046]
    }, {
      "shop_id": "3c48cc42-de85-420a-8429-9053ce9f4b55",
      "location": [-1.5198692, 37.240368]
    }, {
      "shop_id": "c76de5d9-879b-4b33-a4ae-18455239a078",
      "location": [-1.5198458, 37.240093]
    }, {
      "shop_id": "27af0b22-cc2c-4262-aa4b-e695dae401ab",
      "location": [-1.5199455, 37.239292]
    }, {
      "shop_id": "6718e310-0f4a-4dfe-ba77-7d695b61d2a2",
      "location": [-1.5201318, 37.23845]
    }, {
      "shop_id": "d8584e01-68ca-4f39-af26-3ed7ec4c1542",
      "location": [-1.5345944, 37.1928]
    }, {
      "shop_id": "32172661-b067-495d-a592-ec714a88ca92",
      "location": [-1.53524327278137, 37.1921348571777]
    }, {
      "shop_id": "16deab9c-620d-4325-8eca-eae23d268428",
      "location": [-1.5343906, 37.193764]
    }, {
      "shop_id": "282e8a0c-815b-4ae9-be89-b2f3d44a96ec",
      "location": [-1.530623, 37.199287]
    }, {
      "shop_id": "8ca29443-6de2-4e0d-8ca3-9287f2c9b227",
      "location": [-1.5242399, 37.214653]
    }, {
      "shop_id": "3748c23a-f322-44e5-beae-010cff29874a",
      "location": [-1.520117, 37.23687]
    }, {
      "shop_id": "f6329dae-c0c4-4156-a276-59a9f1c0dd08",
      "location": [-1.5201018, 37.23687]
    }, {
      "shop_id": "21ce62ca-8e0d-4246-9f9e-2afe962f5661",
      "location": [-1.52007, 37.237125]
    }, {
      "shop_id": "529e6774-c5ad-4f54-a9b2-4230510dfd45",
      "location": [-1.51915, 37.237312]
    }, {
      "shop_id": "dbef6c24-dcf1-43ea-8503-3ed5ea5dc111",
      "location": [-1.5147833, 37.239063]
    }, {
      "shop_id": "3f5f8628-1bb6-4364-9669-671ffbe77203",
      "location": [-1.514808, 37.239117]
    }, {
      "shop_id": "5f9d999d-407c-428e-b1d1-ebd17098acb3",
      "location": [-1.5191901, 37.24036]
    }, {
      "shop_id": "2eb5e8ab-6639-4b38-b692-fc9c03451e31",
      "location": [-1.5190852, 37.240562]
    }, {
      "shop_id": "6dfdf84b-0267-4641-a38a-113024b21685",
      "location": [-1.5196767, 37.241005]
    }, {
      "shop_id": "4466260a-2c8c-42ec-a108-58445a585598",
      "location": [-1.5196387, 37.242172]
    }, {
      "shop_id": "c806af73-202b-4205-91ec-3442bb47092c",
      "location": [-1.5188344, 37.25153]
    }, {
      "shop_id": "541916e3-3b3f-4b6d-8137-1b4502476153",
      "location": [-1.5114886, 37.254257]
    }, {
      "shop_id": "6223c3a4-5574-4c68-97a7-1f7ee3ec0e87",
      "location": [-1.5116717, 37.254307]
    }, {
      "shop_id": "d6dc5a32-5b84-46a7-a85f-a56833b97291",
      "location": [-1.5116104, 37.254795]
    }, {
      "shop_id": "567c1698-8b98-47a8-9a10-242e38317052",
      "location": [-1.5117683, 37.255478]
    }, {
      "shop_id": "41a653d3-d447-4790-813a-af122a66a4f6",
      "location": [-1.5094728, 37.256428]
    }, {
      "shop_id": "2ced74c6-2646-4740-a92b-8ca6fda79952",
      "location": [-1.5093307, 37.256508]
    }, {
      "shop_id": "06ffd69a-1e58-4047-9be4-3aee59ada42a",
      "location": [-1.5142093, 37.254715]
    }, {
      "shop_id": "b9041862-34bf-49d5-8eaf-93a35f50dd9c",
      "location": [-1.5190006, 37.26769]
    }, {
      "shop_id": "313bfa4a-9d36-4244-9a20-3a408268e284",
      "location": [-1.5176942, 37.26813]
    }, {
      "shop_id": "43bbcef6-b3c1-4d4b-a2b1-1ca1ac9d6970",
      "location": [-1.5199457, 37.27137]
    }, {
      "shop_id": "6da46393-3057-4925-bc4b-502678793f75",
      "location": [-1.52003717422485, 37.2713394165039]
    }, {
      "shop_id": "bd990ba0-faa5-4bb0-af29-85499e31688f",
      "location": [-1.5200479, 37.271366]
    }, {
      "shop_id": "e5b1c2e7-4929-49e1-8932-2ea2770f92ec",
      "location": [-1.5202454, 37.27149]
    }, {
      "shop_id": "380c87b2-49d5-4e12-877f-71f0d255550c",
      "location": [-1.5204747, 37.27143]
    }, {
      "shop_id": "b192c074-bbcb-43e9-bfea-57950ae917c7",
      "location": [-1.5205154, 37.271454]
    }, {
      "shop_id": "baf6a113-5f63-4b16-aaea-3b3971f3ae70",
      "location": [-1.5190661, 37.271248]
    }, {
      "shop_id": "2b510a62-30de-432b-9e08-d5d1605b12df",
      "location": [-1.5179478, 37.271053]
    }, {
      "shop_id": "0d6da57d-3511-4cfa-8e99-ef1d3b69af87",
      "location": [-1.5179048, 37.27113]
    }, {
      "shop_id": "e37ffd58-3816-4cb3-8680-eb00728ad2d5",
      "location": [-1.5411673, 37.259895]
    }, {
      "shop_id": "ea3adfa8-bb1d-458c-92ae-956a0d543e62",
      "location": [-1.54110896587372, 37.2597427368164]
    }, {
      "shop_id": "5807993f-02e5-4333-8ce4-c73967e2ba4d",
      "location": [-1.53536868095398, 37.2616996765137]
    }, {
      "shop_id": "a5033e35-f5e5-4c10-b236-fc2350cf6f3c",
      "location": [-1.5298263, 37.26569]
    }, {
      "shop_id": "251484d7-0a0c-497a-a0f5-a54102861ba3",
      "location": [-1.5306873, 37.266228]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Daystar",
    "route_id": "7bb8f200-13b3-43fd-ae21-81b981584b2b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 380,
      "cache_hit": "87%"
    },
    "distance": "69.62km",
    "path": "dsfG_se`FxeQsjQpKyW{X_lHiAaIyACE?ADBBgaFh{AOn@GFr`@aNdBfDkJbCnE~AEFwg@b@Q~@u@s@QtD\\c@`~FbpFgBjAa@^IJaAhCRF_B}@{D_AsZlm@w@hAgNyd@?JlBrC}c@|m@{@P_B_@jRnkA{C`NuCdFgEyAqDd@Q]EcDJAFi@KA|A}@tB_DqJdHZzEv@JgCVrIlCpAkAEWmfNn_L",
    "shops": [{
      "shop_id": "4c5de4af-d58f-4c5a-8166-2067cfdf3372",
      "location": [-1.4430362, 36.991936]
    }, {
      "shop_id": "02c4b698-9dc0-4ac8-aca9-a23127de2b88",
      "location": [-1.4450514, 36.99591]
    }, {
      "shop_id": "b7d9c26c-d7f4-4d0c-be87-e6c4f1ffeaa7",
      "location": [-1.4409148, 37.04407]
    }, {
      "shop_id": "6f65171d-510b-49f9-a2ff-86a83ae96307",
      "location": [-1.44054126739502, 37.0456809997559]
    }, {
      "shop_id": "8c042111-646c-4fea-ab4d-7525df6dc92d",
      "location": [-1.44008803367615, 37.0457000732422]
    }, {
      "shop_id": "18a41fb7-654b-4e65-be3c-49f4fa9f44bd",
      "location": [-1.44006443023682, 37.0457000732422]
    }, {
      "shop_id": "5d3c3db3-1bea-41c1-94f0-195e9b92b1f9",
      "location": [-1.4400516, 37.04567]
    }, {
      "shop_id": "002702e7-ebe9-4463-bbb6-5d83e2d9d67a",
      "location": [-1.44007444381714, 37.0456504821777]
    }, {
      "shop_id": "c37c2acc-cd09-42a3-8445-695c84e5b2cc",
      "location": [-1.4038748, 37.030884]
    }, {
      "shop_id": "cf0f51e3-bd10-4c04-8ddf-f90b34fec74d",
      "location": [-1.4037873, 37.030643]
    }, {
      "shop_id": "c39093c7-ec2e-4730-a736-7e3e9a99e3fd",
      "location": [-1.4037489, 37.0306]
    }, {
      "shop_id": "9749995e-f6bc-4033-b95d-e636e2fb6a0f",
      "location": [-1.409131, 37.033005]
    }, {
      "shop_id": "08a01025-9bd1-4ac7-85be-c45b7d4a52fc",
      "location": [-1.4096406, 37.032166]
    }, {
      "shop_id": "bb5c5907-4de5-4fde-876e-e3d01e72c450",
      "location": [-1.407815, 37.031513]
    }, {
      "shop_id": "c83f9295-afbb-422f-b210-f2ae2e6036db",
      "location": [-1.4088562, 37.031025]
    }, {
      "shop_id": "7dab87e8-f5aa-4ae3-b6f9-c7ba8c835a4a",
      "location": [-1.4088289, 37.030987]
    }, {
      "shop_id": "fe575268-4cce-4217-a6d9-b4f94f72d869",
      "location": [-1.4023119, 37.030815]
    }, {
      "shop_id": "f7e84ea1-e772-40f8-8770-5e5fb4e58a71",
      "location": [-1.402219, 37.030487]
    }, {
      "shop_id": "ac048386-451c-4a59-9379-1fd789d6ce1a",
      "location": [-1.4019535, 37.03075]
    }, {
      "shop_id": "5c915c64-4403-44d9-9191-1f534af4720d",
      "location": [-1.4018633, 37.02984]
    }, {
      "shop_id": "ffabd17a-881a-4602-9cd1-283f85eb8932",
      "location": [-1.40201091766357, 37.0300216674805]
    }, {
      "shop_id": "19fc7633-9700-4af0-aba3-8338c406003b",
      "location": [-1.4428179, 36.99144]
    }, {
      "shop_id": "a0c60436-e99b-4013-ae05-94837a21190a",
      "location": [-1.442303, 36.99106]
    }, {
      "shop_id": "49378fde-241a-464e-8334-7f3c5a933353",
      "location": [-1.442129, 36.990902]
    }, {
      "shop_id": "ae7bc132-84ab-44de-949c-fa17fbe37b89",
      "location": [-1.4420763, 36.99084]
    }, {
      "shop_id": "aee3d619-e674-469d-afb8-70b17fa44180",
      "location": [-1.441745, 36.990147]
    }, {
      "shop_id": "c9a35540-d663-41c8-8c28-1b793db49a02",
      "location": [-1.4418465, 36.990105]
    }, {
      "shop_id": "e74d3313-3a1b-4635-8d61-8ccec125f64e",
      "location": [-1.441374, 36.99042]
    }, {
      "shop_id": "fa481ec1-5ed5-4914-9bda-b5906f191a0c",
      "location": [-1.4404316, 36.99074]
    }, {
      "shop_id": "4235386e-858a-4000-866d-5f7a4240464a",
      "location": [-1.4360077, 36.983307]
    }, {
      "shop_id": "85c1967f-8ab2-42e0-9276-a8a045bfbd90",
      "location": [-1.43573415279388, 36.9829444885254]
    }, {
      "shop_id": "8a40363b-8059-418c-b00e-ab124cfc7eaa",
      "location": [-1.433286, 36.988987]
    }, {
      "shop_id": "9ca86081-dbd5-4ae3-8f40-70def9148bf3",
      "location": [-1.433285, 36.98893]
    }, {
      "shop_id": "221c6883-0e98-4763-8d64-f2e9c787373e",
      "location": [-1.4338391, 36.988186]
    }, {
      "shop_id": "bb0e79d1-f17e-4d81-a526-8df775a452be",
      "location": [-1.4279339, 36.98068]
    }, {
      "shop_id": "30244488-cbf5-4b4e-b24a-06078d288e61",
      "location": [-1.4276302, 36.98059]
    }, {
      "shop_id": "cfac48c9-1bb0-4de1-913b-161eccd3800a",
      "location": [-1.4271545, 36.98075]
    }, {
      "shop_id": "6e95418a-cc73-49b7-8920-aaf54d4b1a37",
      "location": [-1.4302454, 36.968513]
    }, {
      "shop_id": "78d01de4-fd24-40ef-aec8-5c74f2dacf68",
      "location": [-1.4294683, 36.966095]
    }, {
      "shop_id": "614c183d-cf4a-415c-b9eb-22153b0606ed",
      "location": [-1.4287163, 36.964947]
    }, {
      "shop_id": "bc2387a8-4395-4b6f-89af-f3f463d73bb3",
      "location": [-1.4277189, 36.9654]
    }, {
      "shop_id": "6e1fc617-234b-4f4b-a36c-aa19d2257344",
      "location": [-1.4268314, 36.965206]
    }, {
      "shop_id": "e0148f0c-98a8-412b-a4d4-b3aef48e9360",
      "location": [-1.4267391, 36.96536]
    }, {
      "shop_id": "d3d29f67-f98f-4a30-978f-230111884b00",
      "location": [-1.426713, 36.96618]
    }, {
      "shop_id": "93db11e1-d283-44cf-8ba5-18b62a95a6a1",
      "location": [-1.42676568031311, 36.9661865234375]
    }, {
      "shop_id": "7a9c8346-33af-4982-8310-ea7c4713f79d",
      "location": [-1.4268062, 36.966396]
    }, {
      "shop_id": "278b8091-6b49-4631-bbe0-4e24c99cf83b",
      "location": [-1.4267452955246, 36.9664077758789]
    }, {
      "shop_id": "3d81acb1-2ba2-43c7-bfe4-e3c8b7d6a267",
      "location": [-1.4272208, 36.966717]
    }, {
      "shop_id": "b36b08b9-f650-4aa3-a5d4-ed885110fbd1",
      "location": [-1.42780935764313, 36.9675216674805]
    }, {
      "shop_id": "489e9f73-bec1-4fbf-a485-51e31f10ae0e",
      "location": [-1.4259632, 36.966045]
    }, {
      "shop_id": "7bd945a9-898c-44cf-9473-52df258a3560",
      "location": [-1.4260975, 36.96495]
    }, {
      "shop_id": "0e2bb133-31d9-47e9-aa5e-b0894164639a",
      "location": [-1.4263766, 36.964893]
    }, {
      "shop_id": "9e3ecf28-b6f0-4608-8b87-1ab0f325d2a5",
      "location": [-1.4256992, 36.964767]
    }, {
      "shop_id": "711d2927-81da-4bcf-a032-babf4463043d",
      "location": [-1.4273981, 36.96406]
    }, {
      "shop_id": "49554095-a0a8-4319-ae3a-fd2389139bb2",
      "location": [-1.4278086, 36.96444]
    }, {
      "shop_id": "23db03b4-a1f8-4916-9574-76904ce37b7c",
      "location": [-1.4277846, 36.964558]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Athi River",
    "route_id": "5ee6a28b-54bc-44ae-b8d6-b5fb6d6d91f3",
    "matrix_info": {
      "DistanceMatrixAPI requests": 601,
      "cache_hit": "73%"
    },
    "distance": "44.11km",
    "path": "dsfG_se`Fb|RezL`Po\\HKZlEpCo@zDmE`EgEl@JP_@TuBB?ZcCGoLV[BSLEVJqByAlF~FG?AP?DALDDHrBpIkJbRqQvCyGpDqBoPkCaH_DkD{AiEI?w@jC{BoDdQiG_TMI{DgD~Jf@SmDyOi@S|@I|AmAdFgQ{CeW||@?XcgRhqN",
    "shops": [{
      "shop_id": "dea9d3fd-d8a0-486e-bb30-11307cf47b0f",
      "location": [-1.4517251, 36.968826]
    }, {
      "shop_id": "34caa2ae-4c12-4eb9-b2a5-661d1e63ab9e",
      "location": [-1.45445954799652, 36.9735527038574]
    }, {
      "shop_id": "4cc154d8-1c4f-41a1-ac63-532c18be8825",
      "location": [-1.4545058, 36.97361]
    }, {
      "shop_id": "98aeac2c-9f39-41f6-8921-b12cae8be61d",
      "location": [-1.4546458, 36.97258]
    }, {
      "shop_id": "797a5f66-62f7-47cc-a2ea-987754eba240",
      "location": [-1.4553812, 36.97282]
    }, {
      "shop_id": "e3e45751-a0b4-4407-92ac-a7c16d11bdf8",
      "location": [-1.4563231, 36.973854]
    }, {
      "shop_id": "6c300ab9-96a7-46ac-9abb-943b7ef96008",
      "location": [-1.45728850364685, 36.974853515625]
    }, {
      "shop_id": "c77ae7cd-194b-418c-9fd0-1434dd5afcc8",
      "location": [-1.4575176, 36.974792]
    }, {
      "shop_id": "c529f9d9-e374-4c0e-86ae-fc9dd2a23331",
      "location": [-1.4576097, 36.97495]
    }, {
      "shop_id": "6d4a8c55-4fbc-4027-844c-a56dc3747f6a",
      "location": [-1.45772111415863, 36.9755401611328]
    }, {
      "shop_id": "8a80501f-3432-4f64-a760-25661f619f21",
      "location": [-1.45773828029633, 36.9755363464355]
    }, {
      "shop_id": "6b6555d3-03e8-421d-9723-af4593727589",
      "location": [-1.45787584781647, 36.9762001037598]
    }, {
      "shop_id": "647cd8ba-8b81-4afb-8eaa-bdf0aefb082d",
      "location": [-1.4578412, 36.978355]
    }, {
      "shop_id": "81e28394-d2c4-4646-a968-a2be4388bff7",
      "location": [-1.4579582, 36.978504]
    }, {
      "shop_id": "7fc8ba33-46b4-4d6e-858c-eb30c8b170fc",
      "location": [-1.4579751, 36.9786]
    }, {
      "shop_id": "568ae3b8-44ec-4c70-a8cf-1be0b9180200",
      "location": [-1.4580547, 36.978626]
    }, {
      "shop_id": "8bd1f7b3-4fef-4472-bcc7-476d537cbed4",
      "location": [-1.45816767215729, 36.9785652160645]
    }, {
      "shop_id": "bebd97e0-56fc-4884-9dd3-a516fcc94cea",
      "location": [-1.45760071277618, 36.9790229797363]
    }, {
      "shop_id": "ecc2869f-2264-4bb3-a1db-b89aff5c74cc",
      "location": [-1.4587901, 36.977737]
    }, {
      "shop_id": "486c2aeb-4ef4-4dd2-82d5-516523ca6ab1",
      "location": [-1.458746, 36.97774]
    }, {
      "shop_id": "ce65893a-2748-456a-a53e-bd7edc2739d4",
      "location": [-1.4587413, 36.977646]
    }, {
      "shop_id": "c17ec32e-3ceb-4724-a3f4-eac9c6a1464d",
      "location": [-1.4587396, 36.977623]
    }, {
      "shop_id": "5a3eb916-388c-470d-8158-43b5392e194a",
      "location": [-1.4587256, 36.97755]
    }, {
      "shop_id": "5eab7be1-6b27-4a78-b116-80e0f9b3937e",
      "location": [-1.45876407623291, 36.9775161743164]
    }, {
      "shop_id": "7fe5479f-7038-4ffd-a58b-c884e409c2c5",
      "location": [-1.45881485939026, 36.9769401550293]
    }, {
      "shop_id": "f90782c7-b027-486c-ba7f-1efd0e71ca19",
      "location": [-1.4605032, 36.978764]
    }, {
      "shop_id": "c58496b5-a5ce-4a22-ae3d-ce9170fc7382",
      "location": [-1.4635632, 36.981728]
    }, {
      "shop_id": "a54587c9-2aa0-4445-895c-a28969beac14",
      "location": [-1.4643245, 36.98314]
    }, {
      "shop_id": "4af3798f-aae8-404f-be26-9567cf2a4a1c",
      "location": [-1.4652084, 36.983707]
    }, {
      "shop_id": "0fd77563-0d19-4212-a554-1141d2b756d7",
      "location": [-1.4624116, 36.98441]
    }, {
      "shop_id": "940af343-5504-4cb9-9be6-6b3a391caa5e",
      "location": [-1.4609627, 36.985214]
    }, {
      "shop_id": "33b56c24-2a6a-424f-a0d2-77d51633278b",
      "location": [-1.4601017, 36.985672]
    }, {
      "shop_id": "e8b7776c-7905-4598-a6fc-8af743fa92fc",
      "location": [-1.459087, 36.98572]
    }, {
      "shop_id": "d9319a16-a134-4e15-b282-e4974b8ec13a",
      "location": [-1.4590918, 36.986]
    }, {
      "shop_id": "d21cb67b-4d2f-4ba7-9fd8-72cec7fdc94e",
      "location": [-1.4597943, 36.986618]
    }, {
      "shop_id": "4523d3d1-63c2-432d-8fa9-4db70f7ed0a4",
      "location": [-1.4589056, 36.983715]
    }, {
      "shop_id": "bedfefec-2594-40b4-bbaa-89a93cbaeb0d",
      "location": [-1.4575789, 36.98707]
    }, {
      "shop_id": "82f5bce7-b941-47f1-8be4-a4c828fd245a",
      "location": [-1.4575137, 36.98712]
    }, {
      "shop_id": "ac0b9c00-f0fe-4321-89ff-e08cdb89d697",
      "location": [-1.4565743, 36.98796]
    }, {
      "shop_id": "72739ff5-6ea7-4a59-b854-61391376d08e",
      "location": [-1.4584861, 36.98776]
    }, {
      "shop_id": "f4ce5205-5abe-4027-b118-a2072a5cbd4d",
      "location": [-1.4583939, 36.98863]
    }, {
      "shop_id": "18069533-e40b-4488-a6aa-6ba06bb99419",
      "location": [-1.4556967, 36.98884]
    }, {
      "shop_id": "7649b524-2c83-4303-9491-9332f96aeb11",
      "location": [-1.4556015, 36.98853]
    }, {
      "shop_id": "c1d0d755-34c1-4578-9460-cf3ff075637d",
      "location": [-1.455549, 36.98806]
    }, {
      "shop_id": "63658b38-4ec0-4542-8234-83af5193bffc",
      "location": [-1.4551631, 36.98691]
    }, {
      "shop_id": "31fc8420-e8e3-4e83-9b42-01d2dd04005a",
      "location": [-1.4522381, 36.987686]
    }, {
      "shop_id": "c1d30917-22e5-4a11-aaa8-59da44a7f9f0",
      "location": [-1.4483695, 36.977783]
    }, {
      "shop_id": "20cb9e6d-0449-4c2f-9e89-274ad07e7c16",
      "location": [-1.4483705, 36.977654]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Jogoo Road 2",
    "route_id": "1f01ed41-efdd-47d8-a9e1-aae3e8f95884",
    "matrix_info": {
      "DistanceMatrixAPI requests": 546,
      "cache_hit": "76%"
    },
    "distance": "44.0km",
    "path": "dsfG_se`F{EgXc`J`aH_AIDbDCGsADg@cBgNIyBUQsA~Q}NgAqD{Uj@oGeO_FeKlAwL`KmBqBaAwA_CoE}@}AoFmL}GtFyPEI`HoGDMiM`BmAoA}AwDhXpJQbAzSbe@vLk]nXh^vC`HaNzHiGfTj@{AxA{@hIt@fDrFHK@EUCG\\mAe@y@WaC~^pzIgkG",
    "shops": [{
      "shop_id": "89877a1c-a9ac-4d89-a46e-57384c74dcb3",
      "location": [-1.3486922, 36.901962]
    }, {
      "shop_id": "c6627eb1-9ed6-4eb7-a364-c4eb31c3a8a6",
      "location": [-1.2921888, 36.855545]
    }, {
      "shop_id": "fec7c5a3-887a-4659-8f5c-b91a1c8ebe17",
      "location": [-1.291874, 36.855595]
    }, {
      "shop_id": "f646f6f2-5904-42c0-9130-d0767609de18",
      "location": [-1.2919039, 36.854782]
    }, {
      "shop_id": "e2d04cfd-d889-4824-8937-2906959ff2f5",
      "location": [-1.29188370704651, 36.8548240661621]
    }, {
      "shop_id": "1101dd01-aa0c-427a-a228-21ea712e0ae1",
      "location": [-1.29145705699921, 36.8547859191895]
    }, {
      "shop_id": "ee849b60-8420-473c-9ff4-639d58cd5d14",
      "location": [-1.2912596, 36.855293]
    }, {
      "shop_id": "72d00ea0-cb23-41e0-8a9a-5013838a589d",
      "location": [-1.288816, 36.85534]
    }, {
      "shop_id": "3258305d-a187-466e-81b0-43fa34ac54ed",
      "location": [-1.2882116, 36.855446]
    }, {
      "shop_id": "e344f00b-06e4-4c5b-bb83-2e84cea1c290",
      "location": [-1.2881188, 36.855865]
    }, {
      "shop_id": "0e5a0b1b-61c3-4876-a470-0bfd61d6dc68",
      "location": [-1.2911621, 36.85842]
    }, {
      "shop_id": "08531cc2-0024-49c0-811b-6c7c22bd480e",
      "location": [-1.2907984, 36.85931]
    }, {
      "shop_id": "59161b82-c206-4ed4-bf4f-68a9a7731172",
      "location": [-1.28714454174042, 36.8590850830078]
    }, {
      "shop_id": "35cce7f0-6108-4b41-b42d-2468d6b5f5ca",
      "location": [-1.2857772, 36.861683]
    }, {
      "shop_id": "026c6c3d-0452-45a6-bf6c-a98888399c5d",
      "location": [-1.2846556, 36.863632]
    }, {
      "shop_id": "55baeef3-0c69-49bf-a3b7-e93344be49be",
      "location": [-1.2850493, 36.86583]
    }, {
      "shop_id": "7fdac33b-2a15-4058-b30e-4cfdedbec6c5",
      "location": [-1.2869786, 36.866383]
    }, {
      "shop_id": "470366c0-d181-4da4-88bf-dddf34fdcb8a",
      "location": [-1.2864144, 36.866707]
    }, {
      "shop_id": "58ee20d1-6a89-4636-9ac0-e3a154fc44d7",
      "location": [-1.28597176074982, 36.8673515319824]
    }, {
      "shop_id": "39fddcd8-8fee-4623-8b95-d8423d2e3d88",
      "location": [-1.2849293, 36.86766]
    }, {
      "shop_id": "7cb770a1-de3c-40e1-93b7-655e03d92c4c",
      "location": [-1.284463, 36.86886]
    }, {
      "shop_id": "942459f5-a101-4843-84ae-01d06a0917ce",
      "location": [-1.2823071, 36.870293]
    }, {
      "shop_id": "c92786c7-a472-4487-8f83-abf3c04dc4e0",
      "location": [-1.28353571891785, 36.8731384277344]
    }, {
      "shop_id": "8a36e347-690c-4529-b9b4-5567e948c01b",
      "location": [-1.28350710868835, 36.8731918334961]
    }, {
      "shop_id": "347e5b5e-7cbb-400b-9244-aab106a3ed53",
      "location": [-1.2849602, 36.874554]
    }, {
      "shop_id": "ca205426-4e17-4b52-a7aa-45874dfe3612",
      "location": [-1.28499138355255, 36.8746223449707]
    }, {
      "shop_id": "cdc5c07a-376d-4b6b-80f5-82e787b2ecff",
      "location": [-1.28270184993744, 36.8741302490234]
    }, {
      "shop_id": "ca6e25d9-a290-4602-beb4-a483ddfc49d1",
      "location": [-1.28231143951416, 36.8745269775391]
    }, {
      "shop_id": "66de02af-07aa-4042-a083-c497055833cf",
      "location": [-1.28184366226196, 36.8754501342773]
    }, {
      "shop_id": "f7e0a0ce-8b42-4631-93ea-7678c0c560b0",
      "location": [-1.2858942, 36.8736]
    }, {
      "shop_id": "790cc4dc-7ccb-4bce-8816-5bb75126e0b9",
      "location": [-1.28580439090729, 36.8732643127441]
    }, {
      "shop_id": "54a907ca-4a9b-449c-ac07-4e723f93e326",
      "location": [-1.2891437, 36.867157]
    }, {
      "shop_id": "bd17fc02-2310-49f7-904e-ba217a3dbe4d",
      "location": [-1.2913445, 36.872017]
    }, {
      "shop_id": "90da44ac-ee5d-4579-ba06-afae7d783a99",
      "location": [-1.2954233, 36.86701]
    }, {
      "shop_id": "0fb911fb-d42b-43f7-88d2-2cf57afab07c",
      "location": [-1.2961829, 36.86556]
    }, {
      "shop_id": "62901379-f0c6-427f-b2fb-f407f382a25c",
      "location": [-1.2937711, 36.863983]
    }, {
      "shop_id": "b94a1c3d-eac8-456d-9d01-397b78750b0c",
      "location": [-1.2924439, 36.860584]
    }, {
      "shop_id": "4020bad5-e7f0-423a-a1cc-d41a1c4480bc",
      "location": [-1.29265570640564, 36.8610420227051]
    }, {
      "shop_id": "d89e3765-8b38-4915-a34d-7de22a2ea365",
      "location": [-1.2931073, 36.86134]
    }, {
      "shop_id": "d4d15fad-817f-46b5-8e68-05454388affb",
      "location": [-1.2947595, 36.861073]
    }, {
      "shop_id": "387c0b04-82c2-481e-b451-02ddcdb41f23",
      "location": [-1.2956008, 36.85985]
    }, {
      "shop_id": "daca23cf-c282-4949-a003-5e1ef012b73d",
      "location": [-1.2956463, 36.859905]
    }, {
      "shop_id": "adaab6ff-d53d-4d1e-9dd0-c2581c8c9ac6",
      "location": [-1.2956586, 36.859936]
    }, {
      "shop_id": "27594441-5ef2-45cf-a18a-ec06bf37cc89",
      "location": [-1.2955519, 36.859962]
    }, {
      "shop_id": "3eafa0dc-dce1-428d-98ac-b5cd1fc15d77",
      "location": [-1.2955085, 36.859814]
    }, {
      "shop_id": "4d2f9ed4-b2fa-445f-ae14-054625c048a3",
      "location": [-1.2951218, 36.86]
    }, {
      "shop_id": "8adda32f-ccfb-4031-8350-97cac1cba8a1",
      "location": [-1.294834, 36.86012]
    }, {
      "shop_id": "222b1f15-4e3b-445a-bb71-9a540b85f458",
      "location": [-1.2941815, 36.855003]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Donholm 1",
    "route_id": "f5cb750d-b5c5-4c3f-8221-a83bbbff3fb7",
    "matrix_info": {
      "DistanceMatrixAPI requests": 422,
      "cache_hit": "85%"
    },
    "distance": "15.87km",
    "path": "`h{F{`g`F{|@fCh`Bh_AHn@\\XhAvAKT\\C|HbUADx@x@\\n@rGwAJRM|@~CXUEE@^QsAdAbG}AMh@y@j@aCjB`HOyJqM_GaC{@iAyAvH@DHD|@r@mBoCn^_QgAh@{@zD|Aq@{f@na@gA_@SC]aB]_@ESpEsKaAoExBpA}E}^`C?{RjSeDlBNBbAt@{DmDyAyBL_@}@YyEghA",
    "shops": [{
      "shop_id": "d985e0e7-06e7-4694-ba3c-1b5276c9d1a1",
      "location": [-1.2817864, 36.90458]
    }, {
      "shop_id": "bbdb73e4-9d93-47d0-b442-b4934cdd7e32",
      "location": [-1.29736185073853, 36.8942909240723]
    }, {
      "shop_id": "fdc29731-f4e7-4327-85bd-1553e871d63f",
      "location": [-1.2974068, 36.894054]
    }, {
      "shop_id": "6428e153-02ab-4a81-91a6-f87968f64f5c",
      "location": [-1.2975564, 36.893917]
    }, {
      "shop_id": "39275141-3a0f-4e2e-90e5-68e18eae455c",
      "location": [-1.2979295, 36.893475]
    }, {
      "shop_id": "46d404c4-6504-4371-9bab-8ab75e1329ae",
      "location": [-1.2978711, 36.893368]
    }, {
      "shop_id": "5d19d4a3-4f64-4a2c-9755-663378a0d115",
      "location": [-1.2980233, 36.893387]
    }, {
      "shop_id": "653a2b9b-cb01-4596-a2b0-af8df68a419f",
      "location": [-1.2996087, 36.889847]
    }, {
      "shop_id": "5a4bb6c0-6516-4363-a44f-f771a0a48a87",
      "location": [-1.29960381984711, 36.889820098877]
    }, {
      "shop_id": "f991e8b5-a63c-4fde-85f2-8bf09c920ae2",
      "location": [-1.2998918, 36.889534]
    }, {
      "shop_id": "33c944e9-78e4-4651-887c-09754fb4b19e",
      "location": [-1.3000414, 36.88929]
    }, {
      "shop_id": "deab7e7c-42f8-4a78-b5c7-c39ac11f2beb",
      "location": [-1.301418, 36.88973]
    }, {
      "shop_id": "d5039629-fbce-4223-bf9e-868d307606d4",
      "location": [-1.30147862434387, 36.8896331787109]
    }, {
      "shop_id": "eafe4210-6748-4f9e-9593-5a4d024bcee8",
      "location": [-1.3014112, 36.889317]
    }, {
      "shop_id": "daef7717-a662-45f3-8e95-5ca71ecb4256",
      "location": [-1.3022089, 36.889187]
    }, {
      "shop_id": "7e71d9a1-49a6-4a95-94ab-146f08150b5f",
      "location": [-1.3021033, 36.889217]
    }, {
      "shop_id": "60afb720-7883-494c-8b23-55b9cd599c9f",
      "location": [-1.3020684, 36.889214]
    }, {
      "shop_id": "ad5ef361-ec0b-4f0b-90df-3333a1bf22b5",
      "location": [-1.3022277, 36.889297]
    }, {
      "shop_id": "b8f180eb-024b-4b81-8e79-85f5d1f213a1",
      "location": [-1.3018115, 36.888947]
    }, {
      "shop_id": "1f368f45-f162-4e98-b6cd-0e4bbe63ec7d",
      "location": [-1.3031081, 36.889416]
    }, {
      "shop_id": "683b9c8e-2e6b-4561-8337-90b4eee6ec9d",
      "location": [-1.3030424118042, 36.8892135620117]
    }, {
      "shop_id": "7a3b3fde-6adb-4430-bbe3-03690dabbd06",
      "location": [-1.30275309085846, 36.888988494873]
    }, {
      "shop_id": "65e1e726-712e-4e5b-895a-cc0d38ea3508",
      "location": [-1.30210185050964, 36.8884468078613]
    }, {
      "shop_id": "1fc9875e-c9ca-4794-9e90-1e725aeb6f9d",
      "location": [-1.3035518, 36.888527]
    }, {
      "shop_id": "4af1cc31-d3df-428b-9cd7-c12a7d24e64b",
      "location": [-1.3016582, 36.890858]
    }, {
      "shop_id": "e53f33e4-0c0c-4880-9ada-f3a1ed3b5844",
      "location": [-1.3003823, 36.891506]
    }, {
      "shop_id": "b3959fe3-428a-400e-8962-3b33b227c4de",
      "location": [-1.3000777, 36.891884]
    }, {
      "shop_id": "8c4310fc-3ccc-4918-9aec-2095c6028d09",
      "location": [-1.2996311, 36.890324]
    }, {
      "shop_id": "d394ec70-a143-45b6-aeee-b69d3047d8b5",
      "location": [-1.2996421, 36.890293]
    }, {
      "shop_id": "af281918-6d32-4891-b1ae-5e091bf2147b",
      "location": [-1.2996942, 36.890255]
    }, {
      "shop_id": "985f2fbd-420f-4e6a-9a37-f27c7d7e9b6e",
      "location": [-1.3, 36.89]
    }, {
      "shop_id": "28a74c3d-4a8f-4a10-b354-52c9cac66162",
      "location": [-1.2994525, 36.890717]
    }, {
      "shop_id": "2eac2635-c945-421c-8e9e-05cf50ecd00b",
      "location": [-1.3044921, 36.893597]
    }, {
      "shop_id": "b5491951-27a9-44a7-8a63-de10131f005f",
      "location": [-1.3041307, 36.893394]
    }, {
      "shop_id": "bde4b232-53e3-4fb8-b566-798b6c640e11",
      "location": [-1.3038265, 36.892452]
    }, {
      "shop_id": "f3785e2b-90aa-452b-a995-55d1b5731cf5",
      "location": [-1.3042985, 36.892704]
    }, {
      "shop_id": "ebb80ebb-a20b-4eff-9c5c-d4c3ca14d81d",
      "location": [-1.2979227, 36.8871832]
    }, {
      "shop_id": "380facd0-b190-4a6e-b465-2d3f28daf0f8",
      "location": [-1.2975606, 36.88734]
    }, {
      "shop_id": "a82809a6-f4bf-40ad-8fa8-e8a633f6e5ea",
      "location": [-1.2974633, 36.887363]
    }, {
      "shop_id": "1964cde8-34a7-4f02-86fe-edd7c2ba2468",
      "location": [-1.2973083, 36.88785]
    }, {
      "shop_id": "682ab44c-3daa-4fac-8530-6a078d00e663",
      "location": [-1.2971573, 36.88801]
    }, {
      "shop_id": "16ed553d-7e39-498b-8c5f-5c9e229a5513",
      "location": [-1.2971323, 36.888107]
    }, {
      "shop_id": "ea68563e-3945-4390-8fbd-39ed302cc54a",
      "location": [-1.29817974567413, 36.8901290893555]
    }, {
      "shop_id": "cf3a0e8e-767d-45a6-ab62-b73a51a7db9f",
      "location": [-1.2978479, 36.891167]
    }, {
      "shop_id": "5b28b223-5e72-4968-8d4a-1747aea9ba69",
      "location": [-1.2984619, 36.890762]
    }, {
      "shop_id": "316fe920-b1b4-4651-8522-32bea07c9fa0",
      "location": [-1.2973483, 36.895866]
    }, {
      "shop_id": "1d6930f1-ceda-4c13-b1d8-b016478df815",
      "location": [-1.29799687862396, 36.895866394043]
    }, {
      "shop_id": "2bcf283b-4ac6-4081-a288-ff1bb5afd898",
      "location": [-1.29482436180115, 36.8926086425781]
    }, {
      "shop_id": "94d0d0c4-bbbd-41a3-bc18-9804056ae5fe",
      "location": [-1.2939866, 36.892063]
    }, {
      "shop_id": "2519725d-fb2e-4521-9eee-8ac28cd53179",
      "location": [-1.2940749, 36.892044]
    }, {
      "shop_id": "795f7461-c2da-4415-89ac-2b7d4212f199",
      "location": [-1.294409, 36.891766]
    }, {
      "shop_id": "a9eaf32a-cb18-4eed-96f0-397a2e52bed0",
      "location": [-1.2934736, 36.892643]
    }, {
      "shop_id": "31ed6ee9-2604-426f-9717-96c3f0d855c6",
      "location": [-1.2930157, 36.893246]
    }, {
      "shop_id": "01c11c7d-2fd6-4be1-88b1-93d05b7b02a6",
      "location": [-1.2930882, 36.893406]
    }, {
      "shop_id": "3d29162d-14ef-4d81-8d08-46e00903aa46",
      "location": [-1.2927794, 36.893536]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Dagorreti Corner",
    "route_id": "9893d81f-df1e-49a9-a0d4-0a5016e00e0f",
    "matrix_info": {
      "DistanceMatrixAPI requests": 548,
      "cache_hit": "79%"
    },
    "distance": "34.61km",
    "path": "`z|Fedx_FvTncJjHgMiAfA`@zGjAd@ZIaCzDaAdFoCv~@qXp@?L@a@hi@sAo]d}@dKpUaGL[_@?CAMm@DRn@mOz_@zc@`ViJW~JdWXlHqPic@MCn@wB?uB@?PqAk@Wq@P~@}DfAC~H}FiIYBgFvCLmEiBSuC_EiQnD{@{J}NGw@[sa@xFtLmCvHGo@qNc@fFi{@rAg~K",
    "shops": [{
      "shop_id": "1a97dc20-0d20-4b47-8a02-893d7d1c43fa",
      "location": [-1.3031677, 36.771954]
    }, {
      "shop_id": "f19fdd30-a7a3-4e74-bc39-56916fc2c0db",
      "location": [-1.3046703, 36.77423]
    }, {
      "shop_id": "d6fee8c3-77a5-4eff-9ac9-e4ee04a55125",
      "location": [-1.3043003, 36.773872]
    }, {
      "shop_id": "ca29e792-00b6-4a8d-a099-f97da27d6482",
      "location": [-1.3044693, 36.772453]
    }, {
      "shop_id": "8f1ae690-2a26-414d-b4f6-00de61bec0e3",
      "location": [-1.3048455, 36.772263]
    }, {
      "shop_id": "9c4294f9-ba97-45e6-87b8-60160afa5d1e",
      "location": [-1.3049885, 36.77231]
    }, {
      "shop_id": "97233bd2-accd-4a13-a711-dd3bc9af9382",
      "location": [-1.3043431, 36.771366]
    }, {
      "shop_id": "ec34a046-afce-4c86-89aa-08ae7589e16c",
      "location": [-1.3040086, 36.770218]
    }, {
      "shop_id": "7dcb8366-506e-4b14-91e1-b039faee5137",
      "location": [-1.3032888, 36.76002]
    }, {
      "shop_id": "9bb7b8bd-4848-4baa-bc6b-8aa045f5c622",
      "location": [-1.2991965, 36.75977]
    }, {
      "shop_id": "24b065b9-7523-424f-b04d-320241f169e2",
      "location": [-1.299197, 36.7597]
    }, {
      "shop_id": "e9e5455e-99b7-485f-bf5d-9306353da415",
      "location": [-1.2992113, 36.75987]
    }, {
      "shop_id": "1ed85163-7f09-4bbc-b708-170ed43d08d7",
      "location": [-1.3059776, 36.760292]
    }, {
      "shop_id": "98b773e3-4d51-41fe-bbaf-20df34acefbb",
      "location": [-1.3011028, 36.750343]
    }, {
      "shop_id": "59c8018b-5e55-4fa2-8e70-46f35a81c221",
      "location": [-1.3030494, 36.74673]
    }, {
      "shop_id": "f7ff3eb6-7057-4eec-9efd-3369e5bb56b0",
      "location": [-1.301764, 36.74666]
    }, {
      "shop_id": "399de213-0485-4d2a-a16d-ef386468bfb7",
      "location": [-1.3016154, 36.746822]
    }, {
      "shop_id": "3a7de023-cc43-4a3f-ae3f-da4b8b786cf7",
      "location": [-1.301617, 36.746838]
    }, {
      "shop_id": "2f62f205-5114-41c4-a474-af57672ac719",
      "location": [-1.3016099, 36.74691]
    }, {
      "shop_id": "f0dee3b1-0b47-40a9-8bfd-1c26b1b8bb26",
      "location": [-1.301381, 36.74688]
    }, {
      "shop_id": "59c11035-ce3b-4f27-a92b-756f6dc6f71e",
      "location": [-1.3014789, 36.74664]
    }, {
      "shop_id": "d38a3d61-3340-45bd-9782-b849a99514bb",
      "location": [-1.2988477, 36.741375]
    }, {
      "shop_id": "c345a424-544e-4400-b741-ada39a34df7f",
      "location": [-1.304748, 36.73769]
    }, {
      "shop_id": "2a50bf17-84c3-4342-9fc7-ff992d0f0ac4",
      "location": [-1.3029416, 36.737812]
    }, {
      "shop_id": "5172fa34-d260-467b-9e21-1f6695de56e6",
      "location": [-1.3048593, 36.733944]
    }, {
      "shop_id": "403c65b7-3d76-4209-a963-9944e0b874b3",
      "location": [-1.304985, 36.73243]
    }, {
      "shop_id": "f1f01cfc-17ec-414b-9c97-cf9641af5b3b",
      "location": [-1.3021803, 36.738235]
    }, {
      "shop_id": "c2a94011-80bf-46f5-bbec-81f2e0ce9f4a",
      "location": [-1.3021114, 36.73826]
    }, {
      "shop_id": "8fb442c9-803c-4baf-a8d3-b0bb7624814b",
      "location": [-1.3023525, 36.738857]
    }, {
      "shop_id": "2433450d-1051-4cf9-b53b-c73ef4b82a4a",
      "location": [-1.3023492, 36.73945]
    }, {
      "shop_id": "9ab91cbf-33eb-4946-8a30-92fa7dda651f",
      "location": [-1.3023612, 36.73945]
    }, {
      "shop_id": "9b0d4590-5c33-4182-9ee1-71571225c8df",
      "location": [-1.3024482, 36.739857]
    }, {
      "shop_id": "ac106dc4-1e52-45cb-b0ab-e2c6f4d9b54d",
      "location": [-1.30222523212433, 36.7399787902832]
    }, {
      "shop_id": "30ed2d62-b6ef-4799-a762-5923c60a0cad",
      "location": [-1.3019849, 36.739887]
    }, {
      "shop_id": "d09c1166-2d89-4cff-b591-2bcc5769e4f9",
      "location": [-1.3022983, 36.74084]
    }, {
      "shop_id": "63f17c45-a6f7-41c8-8fa5-8f6188546d34",
      "location": [-1.3026586, 36.740856]
    }, {
      "shop_id": "336f2c2f-2e96-43b3-85bc-97efd39a1040",
      "location": [-1.304262, 36.74213]
    }, {
      "shop_id": "112c8070-7b67-4d7f-a2cc-0974a29bc9c2",
      "location": [-1.3026063, 36.74226]
    }, {
      "shop_id": "643b0462-9953-4e6d-8eaa-f17b6cd574d9",
      "location": [-1.3026265, 36.743416]
    }, {
      "shop_id": "67ee093e-c940-4c5f-bb19-4021312f8005",
      "location": [-1.3033884, 36.74335]
    }, {
      "shop_id": "4e040f08-b888-4a48-a738-7f7c50fb104b",
      "location": [-1.3023629, 36.74388]
    }, {
      "shop_id": "bceeab5f-1bbd-4107-93d2-75dc8ddacb3c",
      "location": [-1.3022616, 36.744625]
    }, {
      "shop_id": "27a4506c-3f30-42a8-8a91-4f2e4b013b5f",
      "location": [-1.3013026, 36.747555]
    }, {
      "shop_id": "8ec29620-ece9-4e7f-81ec-cc0a941f9de0",
      "location": [-1.3021815, 36.74786]
    }, {
      "shop_id": "fb79e191-3481-4498-9d7e-966df205cb62",
      "location": [-1.300285, 36.75041]
    }, {
      "shop_id": "1f799258-14fc-4f8c-abab-56714dce4bec",
      "location": [-1.3002357, 36.750694]
    }, {
      "shop_id": "540350c1-80ce-4bb1-8d21-912d41ef460f",
      "location": [-1.3000957, 36.75623]
    }, {
      "shop_id": "ea01657d-7dfe-4fed-89de-d3744aaca6ff",
      "location": [-1.3013473, 36.754044]
    }, {
      "shop_id": "7d918084-c7dc-4b5b-a5c5-5ae980fc1363",
      "location": [-1.3006372, 36.752483]
    }, {
      "shop_id": "79b37676-1c07-481d-8f91-1e63fd014475",
      "location": [-1.3006043, 36.75272]
    }, {
      "shop_id": "2f30d9b6-0f7c-4481-8a3b-f27039d2d536",
      "location": [-1.2981113, 36.752903]
    }, {
      "shop_id": "f3cf4d9d-3522-4c57-8b77-d9cd78feb9d4",
      "location": [-1.2992741, 36.76255]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kahawa",
    "route_id": "1af5573b-2a80-44b7-a1d7-d54196bff007",
    "matrix_info": {
      "DistanceMatrixAPI requests": 337,
      "cache_hit": "77%"
    },
    "distance": "26.66km",
    "path": "|qoF_r``Fa_H{uEORc@_@lBuACaBbDsJoQzJ_AbF?KaIsDk~@sZ|QhG@?tf@~^pGbKfEfA`Bh@HIDa@?rAoA~D~B}JrBnA~FrEaAvII@wBbQnLsOgRdCg@[sAO{s@ro@hrA{ThJcINPKNg@h@Q|L@gFrcG~pC",
    "shops": [{
      "shop_id": "f675d61a-362e-40fa-8342-c39b206ffc46",
      "location": [-1.1857408, 36.906536]
    }, {
      "shop_id": "b6a9890a-e2f8-428c-abd5-7adc6016b49a",
      "location": [-1.1856583, 36.906437]
    }, {
      "shop_id": "2f1f8382-f151-4aeb-85e1-67bd912169f4",
      "location": [-1.1854798, 36.906597]
    }, {
      "shop_id": "08a342aa-2261-4914-87a6-46d7bc065693",
      "location": [-1.1860266, 36.907032]
    }, {
      "shop_id": "9d3dfa23-52e6-44d1-8b7a-3760fd403dd7",
      "location": [-1.1860111, 36.907524]
    }, {
      "shop_id": "12fed21c-b422-4af1-9fc4-0d586c70c849",
      "location": [-1.1868349, 36.90938]
    }, {
      "shop_id": "704da373-1f9e-47d1-a672-149b09d6f8ee",
      "location": [-1.1838708, 36.907475]
    }, {
      "shop_id": "09770309-3604-4445-8e41-ab1a90d60584",
      "location": [-1.18355166912079, 36.9063377380371]
    }, {
      "shop_id": "6f930323-a01e-41c7-8e95-b3534630906b",
      "location": [-1.1835483, 36.906403]
    }, {
      "shop_id": "af9fff45-acfb-47d5-8c97-216e3bd834f9",
      "location": [-1.18193995952606, 36.9072952270508]
    }, {
      "shop_id": "48118b46-b62f-4368-99a6-905c18774b8d",
      "location": [-1.1718042, 36.911724]
    }, {
      "shop_id": "0d34a8b1-5b4c-4719-925d-549c8ed88458",
      "location": [-1.1748269, 36.910393]
    }, {
      "shop_id": "4fac1b02-a269-4943-8fa8-e99a1007e3de",
      "location": [-1.174835, 36.910385]
    }, {
      "shop_id": "84da276d-f97d-4dad-b127-f0d71a47c87d",
      "location": [-1.18118584156036, 36.9052658081055]
    }, {
      "shop_id": "eb0c5360-2cce-40d7-b7e8-304229048328",
      "location": [-1.1825612, 36.90333]
    }, {
      "shop_id": "8d417ae8-539c-4626-ab9f-391270d60c1a",
      "location": [-1.1835625, 36.902966]
    }, {
      "shop_id": "46d7038a-88e0-40db-b0ab-10b8d3057f97",
      "location": [-1.184052, 36.902756]
    }, {
      "shop_id": "09453b56-3406-4229-9fea-3e123b3e9c21",
      "location": [-1.1841013, 36.90281]
    }, {
      "shop_id": "b8289735-dfef-4a19-9f3b-5d64f2a1565b",
      "location": [-1.18412852287292, 36.9029846191406]
    }, {
      "shop_id": "714e683e-6a0d-4748-bc22-e02f2c56ae2d",
      "location": [-1.1841289, 36.902557]
    }, {
      "shop_id": "78ce1fa0-7327-4a38-9895-31eb1b4de460",
      "location": [-1.1837265, 36.901604]
    }, {
      "shop_id": "0a886f19-1dac-43a3-899f-12507ce39db5",
      "location": [-1.184373, 36.90351]
    }, {
      "shop_id": "6a518f56-1580-49fa-a5f4-f317eee10f89",
      "location": [-1.1849467, 36.903107]
    }, {
      "shop_id": "16597c4e-b71b-4851-9598-f756381cf002",
      "location": [-1.1862333, 36.902046]
    }, {
      "shop_id": "5c15f90e-d486-4c9e-9e97-5d0af9c3a320",
      "location": [-1.18589794635773, 36.9003257751465]
    }, {
      "shop_id": "f830809e-846a-4821-88b8-509567ce071a",
      "location": [-1.1858484, 36.90032]
    }, {
      "shop_id": "0a2a9c6b-e41b-4330-9c8f-70eeaf1bac3a",
      "location": [-1.1852508, 36.897415]
    }, {
      "shop_id": "bb44e258-975a-45eb-964b-3a35f2d2746d",
      "location": [-1.1874079, 36.900078]
    }, {
      "shop_id": "16a42dfd-10be-4d01-aa82-bde3e16313cf",
      "location": [-1.18433, 36.899414]
    }, {
      "shop_id": "566f1c45-3830-4287-b80b-618b1f98e005",
      "location": [-1.1841319, 36.899548]
    }, {
      "shop_id": "a20f7e5e-78d8-4112-9a18-487b20453c02",
      "location": [-1.1837122, 36.899628]
    }, {
      "shop_id": "d4787edd-2cb7-4c5d-8b50-f224c4a5933a",
      "location": [-1.17525, 36.89185]
    }, {
      "shop_id": "c1530e3d-d449-40f0-8df1-c8d363a6f37f",
      "location": [-1.1885842, 36.895348]
    }, {
      "shop_id": "6145b5ef-4583-4ba9-8631-7078d3eaf28b",
      "location": [-1.19039154052734, 36.8969650268555]
    }, {
      "shop_id": "5611adb9-023a-43c8-ad05-03e4e4263994",
      "location": [-1.1904703, 36.89688]
    }, {
      "shop_id": "30ad3a5d-b04a-48d9-96cf-f51e2945ee56",
      "location": [-1.19040751457214, 36.896800994873]
    }, {
      "shop_id": "00d2acf8-1f4f-47c0-b1da-82cdc976799e",
      "location": [-1.1902101, 36.896587]
    }, {
      "shop_id": "9d793a1f-8ca5-4198-bb85-29caf1c2f7b2",
      "location": [-1.19012141227722, 36.894359588623]
    }, {
      "shop_id": "474732c4-9d62-4fac-8051-ea7e7b6ece78",
      "location": [-1.1901257, 36.895515]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Greater Mombasa Road 2",
    "route_id": "7ecc276a-11aa-4fc3-be26-d78fa06655bd",
    "matrix_info": {
      "DistanceMatrixAPI requests": 529,
      "cache_hit": "81%"
    },
    "distance": "109.68km",
    "path": "n{hH_ilbFzqWviLb|O}o@d@xBj@WxzTobJFFnAqF|FkKfDqFAa@giUbeKs@M{FDead@`zJaEaAiZtFqc@~WWa@wFfSpPwb@nJaLiJpAf@W_NxTCv@gEd@BPRdDiByB~A~D@zCiAmAyCoFr@fBWSqBtBQNI`McISJrFhZoaHDElAaASuAf@iB|BRaBKdBu@n@u@EiH{@cA?L{Csl@czAw}NjY|k@",
    "shops": [{
      "shop_id": "1161a9dc-bc8f-42c4-89a3-0fda3da16898",
      "location": [-1.6511043, 37.191563]
    }, {
      "shop_id": "49c8a7d2-3892-4cf0-aa29-cd54d69ff72a",
      "location": [-1.737675, 37.199394]
    }, {
      "shop_id": "8d997c31-2ec6-4f28-8de5-6c8bcadb8582",
      "location": [-1.7378731, 37.198776]
    }, {
      "shop_id": "84f6cfc8-d6e0-443e-bc77-a519406c3d17",
      "location": [-1.7380906, 37.1989]
    }, {
      "shop_id": "48065053-0861-43bd-bc2d-43c8a7543e68",
      "location": [-1.8500621, 37.25578]
    }, {
      "shop_id": "20df967a-cc0f-4cc2-a9ed-5dd77e474553",
      "location": [-1.8501022, 37.255737]
    }, {
      "shop_id": "2db95283-cbb6-4655-b21f-ede4666dc519",
      "location": [-1.850498, 37.25695]
    }, {
      "shop_id": "6f76c841-968c-4dcf-8bd6-b7d7523ff4b5",
      "location": [-1.85177, 37.258926]
    }, {
      "shop_id": "24c3c0e0-f90c-41b7-8ade-471f414d69ee",
      "location": [-1.8526146, 37.260136]
    }, {
      "shop_id": "891f551b-b240-4ece-bdcc-bf6ebb7ae163",
      "location": [-1.8526043, 37.260307]
    }, {
      "shop_id": "4806fc0b-35d5-4861-b422-cda5b37a1f17",
      "location": [-1.7383211, 37.19789]
    }, {
      "shop_id": "9f9bdfb3-68f8-4134-8571-f5ca701399a0",
      "location": [-1.7380587, 37.197956]
    }, {
      "shop_id": "810b7e4b-5ca3-4a0c-aee2-aa408b0d64b2",
      "location": [-1.736797, 37.197926]
    }, {
      "shop_id": "eefd5da0-7a20-4e44-a6f3-6f879e45cfca",
      "location": [-1.547005, 37.13728]
    }, {
      "shop_id": "eda4a1ef-0084-4546-83f2-d31b326bdf48",
      "location": [-1.5460441, 37.13761]
    }, {
      "shop_id": "1120e471-264d-4476-a271-fb4053674e60",
      "location": [-1.5416698, 37.13638]
    }, {
      "shop_id": "e216f1f6-9b09-4ec9-9022-30a72fe1ebc2",
      "location": [-1.535821, 37.132378]
    }, {
      "shop_id": "8aecd662-3b8b-46ea-8ce3-1a2672b68a46",
      "location": [-1.5357021, 37.132553]
    }, {
      "shop_id": "57c6bdac-2462-484e-abc0-d914c78a4f99",
      "location": [-1.5344566, 37.12931]
    }, {
      "shop_id": "ee1e7f6f-8eb7-42c5-a5b7-99e482456b07",
      "location": [-1.5372716, 37.135025]
    }, {
      "shop_id": "32d76503-62a9-4f37-b42d-87152296f345",
      "location": [-1.5391057, 37.13712]
    }, {
      "shop_id": "a635a076-38ca-431e-a21d-b7573e45835c",
      "location": [-1.5372964, 37.136707]
    }, {
      "shop_id": "fe2e3a93-ff03-4e2d-a922-267fdd1acdde",
      "location": [-1.5374988, 37.136833]
    }, {
      "shop_id": "7b5cedbf-62be-4f68-ade5-758b65f5eb7f",
      "location": [-1.5351003, 37.13334]
    }, {
      "shop_id": "8c089eb4-a15a-4f5f-b223-36761f8d0681",
      "location": [-1.53507506847382, 37.1330604553223]
    }, {
      "shop_id": "b5aa71bf-d4a3-440d-afc4-de66bb348584",
      "location": [-1.534084, 37.132866]
    }, {
      "shop_id": "83480aa8-e783-496a-ab5b-546560e9d366",
      "location": [-1.5341011, 37.132782]
    }, {
      "shop_id": "e26daa01-2d41-4675-94ff-351e2e925d44",
      "location": [-1.5342005, 37.131954]
    }, {
      "shop_id": "0c585b25-414d-4075-88ee-dd55f2d3c9c9",
      "location": [-1.5336686, 37.13256]
    }, {
      "shop_id": "37771dd8-1465-4d43-bd28-2c659d195c30",
      "location": [-1.5341473, 37.1316]
    }, {
      "shop_id": "e55e8c98-9b78-4e5c-a9c7-cc7a4d7b09ae",
      "location": [-1.5341572, 37.13082]
    }, {
      "shop_id": "73471067-01f9-4d5a-8669-43f6c55954e3",
      "location": [-1.533786, 37.131207]
    }, {
      "shop_id": "54273ec8-5013-47d6-9488-383341b26609",
      "location": [-1.5330217, 37.132412]
    }, {
      "shop_id": "19e461de-2843-40c3-99ff-fe81c0c765f4",
      "location": [-1.5332818, 37.131893]
    }, {
      "shop_id": "7ec79413-b5f5-4d0d-a76b-94f2466ba109",
      "location": [-1.533161, 37.131992]
    }, {
      "shop_id": "fac95e36-b0fe-4eac-a052-909e21796ec6",
      "location": [-1.532587, 37.131397]
    }, {
      "shop_id": "fe2bb093-b7fd-45bc-aec2-fa458efb7a30",
      "location": [-1.53250074386597, 37.1313171386719]
    }, {
      "shop_id": "d4227214-fe00-4f11-856b-12ad7c4b390c",
      "location": [-1.53245365619659, 37.1290664672852]
    }, {
      "shop_id": "0a8d6103-9670-424a-bf44-ee3853bb586b",
      "location": [-1.53082859516144, 37.1291656494141]
    }, {
      "shop_id": "e2785837-41d0-456c-93b4-d8a2e22ba8c4",
      "location": [-1.5308869, 37.12795]
    }, {
      "shop_id": "497ab2e0-f8e3-4f1b-9d62-44d0f137584c",
      "location": [-1.53525567054749, 37.174430847168]
    }, {
      "shop_id": "08b6fa28-fd33-4826-a4b4-a4d25eda723d",
      "location": [-1.53529250621796, 37.1744575500488]
    }, {
      "shop_id": "54606888-dc7a-43f0-a400-f347e1d66448",
      "location": [-1.5356796, 37.174793]
    }, {
      "shop_id": "e6bab7bd-b00b-4ca0-8fcc-dbacb711fd95",
      "location": [-1.5355797, 37.17522]
    }, {
      "shop_id": "f5d4d2ae-cb94-4750-81ba-e0f428a72244",
      "location": [-1.53577601909637, 37.1757507324219]
    }, {
      "shop_id": "6ff059b2-3568-4cfc-a0d5-b337d2a69a82",
      "location": [-1.5364115, 37.17565]
    }, {
      "shop_id": "8a9dbf1f-6e95-4d8d-a796-1ebe05a1a5dd",
      "location": [-1.5359205, 37.17571]
    }, {
      "shop_id": "c2c54146-a838-4314-88a4-c2d6a792daad",
      "location": [-1.5364263, 37.175976]
    }, {
      "shop_id": "f6988274-db83-4a4b-85c9-4475da05efd7",
      "location": [-1.5366741, 37.176247]
    }, {
      "shop_id": "b766b670-a1c9-410c-8d73-eee64071ed1b",
      "location": [-1.5366426, 37.17774]
    }, {
      "shop_id": "cacfa9de-5800-4edb-a118-723b629f6588",
      "location": [-1.5363361, 37.178078]
    }, {
      "shop_id": "b67a99bf-e21a-4872-9ba6-96e71721155c",
      "location": [-1.5363352, 37.17801]
    }, {
      "shop_id": "ad89ef6b-b482-4452-aced-c58f484cd96d",
      "location": [-1.5355645, 37.185307]
    }, {
      "shop_id": "cb78bb40-9b65-4550-a50c-cc837661f207",
      "location": [-1.5209751, 37.267033]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Highrise/Ngumo",
    "route_id": "5a8c002c-dfd3-4c87-88b3-0f8649e9698a",
    "matrix_info": {
      "DistanceMatrixAPI requests": 417,
      "cache_hit": "87%"
    },
    "distance": "20.09km",
    "path": "tz|Fmdx_FdbBxcCCWzBtESPHFBHCHlAdAb@GBQP@aGhGCRB^H@DFD@j@hEsCyFKECp@@@v@`CwBoI{k@nQEEkB~@aEhC@DGGK@?ZVj@GDiAs@bVnSJM{QeLoFBmEg@eYpqAlS_A?AiPu@]d@ne@jAh@|@pAxCE@AAVNJCx@r@n@BfBb@t@`AJ`BoJ_Re\\}KyMeqF",
    "shops": [{
      "shop_id": "315a276e-dfeb-450c-a5ca-212ceaca45a5",
      "location": [-1.3156614, 36.807777]
    }, {
      "shop_id": "19620e73-5698-4636-8c53-6238d018d2ad",
      "location": [-1.3156438, 36.8079]
    }, {
      "shop_id": "26b099ad-9ccb-4d4f-86e8-be81a59c5dd8",
      "location": [-1.3162626, 36.806828]
    }, {
      "shop_id": "5074373a-2eaa-4cb7-98f8-cd51c8b597a4",
      "location": [-1.3161591, 36.806744]
    }, {
      "shop_id": "b2db54ea-29f0-48e0-bbad-29146d78e09f",
      "location": [-1.3162063, 36.806698]
    }, {
      "shop_id": "12f55d76-8ada-40c4-a860-a3cfb1163ad6",
      "location": [-1.3162291, 36.80665]
    }, {
      "shop_id": "2ffc18cc-a9af-44aa-86ca-72462c752424",
      "location": [-1.3162117, 36.8066]
    }, {
      "shop_id": "68296f4d-930e-445f-9a42-fffcb84bf12a",
      "location": [-1.3165988, 36.80625]
    }, {
      "shop_id": "a7373bc9-97ec-4a3c-8057-f99a957a3823",
      "location": [-1.3167847, 36.80629]
    }, {
      "shop_id": "d1e0d007-6a76-423c-a050-6a762413d1b1",
      "location": [-1.3168046, 36.80638]
    }, {
      "shop_id": "145a48cf-53c3-4eeb-a106-ad2d53f3467d",
      "location": [-1.3168916, 36.80637]
    }, {
      "shop_id": "7a2f4759-3ebb-41ad-92a4-ecac416e5aaa",
      "location": [-1.3155959, 36.80504]
    }, {
      "shop_id": "c6e53fc6-9110-458a-b5fa-4d2a07553d57",
      "location": [-1.315579, 36.80494]
    }, {
      "shop_id": "1f55816e-ea58-43fb-b0ad-aece8c138484",
      "location": [-1.3156011, 36.80478]
    }, {
      "shop_id": "199692db-a575-4670-862c-ea1b92eba23f",
      "location": [-1.3156474, 36.80477]
    }, {
      "shop_id": "0b55a516-52d2-4f50-9755-0dd11d597a5a",
      "location": [-1.3156782, 36.804733]
    }, {
      "shop_id": "814cca9a-5355-443b-8c49-985f8146a808",
      "location": [-1.315705, 36.804718]
    }, {
      "shop_id": "e8672cb3-8879-4030-8c54-449ad64d9738",
      "location": [-1.3159313, 36.80371]
    }, {
      "shop_id": "1859434b-2ce8-47b6-a4a3-2784b319b9e9",
      "location": [-1.3151861, 36.804955]
    }, {
      "shop_id": "8a062e34-0774-4949-b1a8-760ade1acb4d",
      "location": [-1.3151286, 36.804993]
    }, {
      "shop_id": "116e490f-4679-49ee-a90b-7b323cc6c684",
      "location": [-1.315112, 36.80474]
    }, {
      "shop_id": "7ad697b9-b0f1-4704-8ae3-34d771ed6068",
      "location": [-1.3151206, 36.80473]
    }, {
      "shop_id": "9b88ccbe-2650-4dde-ad40-9bf1b88ca350",
      "location": [-1.3153979, 36.804077]
    }, {
      "shop_id": "ea2698be-49e6-4b5f-8294-21bf1b3f12d9",
      "location": [-1.3148, 36.80576]
    }, {
      "shop_id": "75deca63-8f68-405b-84d3-ff400f7d5061",
      "location": [-1.3076206445694, 36.8028030395508]
    }, {
      "shop_id": "ea93947f-b5ca-485d-9aeb-66e656cebe75",
      "location": [-1.30759, 36.802826]
    }, {
      "shop_id": "d05f525d-5287-41bd-8408-8a3408fc385d",
      "location": [-1.3070492, 36.802513]
    }, {
      "shop_id": "fd85b441-e074-40e2-a61d-59d9060e2384",
      "location": [-1.3060794, 36.801815]
    }, {
      "shop_id": "22cd9fe9-3679-4f0b-8dfb-c342d32cd1ce",
      "location": [-1.3060879, 36.801792]
    }, {
      "shop_id": "1664d35a-4594-4f60-9619-31ba05e4efb7",
      "location": [-1.3060548, 36.801834]
    }, {
      "shop_id": "a9b5ace1-0024-43e1-a2b2-e3a26255bc0e",
      "location": [-1.3059859, 36.80182]
    }, {
      "shop_id": "97c23ff9-1884-46a1-9032-1b9682dff15a",
      "location": [-1.3059877, 36.80168]
    }, {
      "shop_id": "0fda065a-4a6c-49e4-8fc6-9482d9f75d8e",
      "location": [-1.30611479282379, 36.8014602661133]
    }, {
      "shop_id": "6f4f378c-d88f-4927-83d8-a72267398fb3",
      "location": [-1.3060693, 36.80143]
    }, {
      "shop_id": "83884c0e-f4bc-4c96-ad37-e5919cfde584",
      "location": [-1.3056985, 36.801693]
    }, {
      "shop_id": "6b1f1034-f203-4008-9a3d-5102be92b0eb",
      "location": [-1.3094023, 36.79841]
    }, {
      "shop_id": "c2bbddc1-aa14-4468-a208-809f5688d9dd",
      "location": [-1.309455037117, 36.7984809875488]
    }, {
      "shop_id": "f851d82f-8cf7-424d-adbf-8b80ee7fb36f",
      "location": [-1.3064449, 36.800587]
    }, {
      "shop_id": "5da95547-e018-41fc-8358-fd07f3096684",
      "location": [-1.3052434, 36.80057]
    }, {
      "shop_id": "d6ccaced-8326-4425-8096-15488d5dfd6c",
      "location": [-1.3042125, 36.800774]
    }, {
      "shop_id": "b315a888-0d5c-45b7-91b9-94ca68985c05",
      "location": [-1.3000165, 36.78756]
    }, {
      "shop_id": "a669b6f7-c218-40c8-a5cc-3d17665f0d01",
      "location": [-1.3032943, 36.78788]
    }, {
      "shop_id": "20d67837-6a4c-4672-bbc6-0348fb9daf7c",
      "location": [-1.3032867, 36.787888]
    }, {
      "shop_id": "305e7740-b39e-4ecb-a913-d30867571242",
      "location": [-1.30051600933075, 36.788158416748]
    }, {
      "shop_id": "dda5268c-ac7b-4590-af2a-4667a942ecc6",
      "location": [-1.300368, 36.787968]
    }, {
      "shop_id": "45efeb6c-03dc-43c8-a53e-79172fb8f237",
      "location": [-1.3065277, 36.78759]
    }, {
      "shop_id": "a4af319d-0f58-4726-a466-e344a5751c7e",
      "location": [-1.3067365, 36.78728]
    }, {
      "shop_id": "eade5012-49f2-4ecb-b83e-0e82f78e26c4",
      "location": [-1.3071455, 36.786514]
    }, {
      "shop_id": "90beca23-2964-4792-a418-f238fb59864d",
      "location": [-1.3071216, 36.7865]
    }, {
      "shop_id": "6dbd707f-9c54-47a6-8327-d00c819b80c8",
      "location": [-1.307105, 36.78651]
    }, {
      "shop_id": "408e666d-060d-4c96-9f36-bb100c500d39",
      "location": [-1.3072284, 36.786434]
    }, {
      "shop_id": "28151dad-09f8-49de-926b-b40a55a912a0",
      "location": [-1.3072895, 36.786453]
    }, {
      "shop_id": "9d7221c3-a6fe-42cf-8698-b48151b162ef",
      "location": [-1.3075831, 36.786194]
    }, {
      "shop_id": "3fae17af-33c0-4823-9c24-87665c6454f3",
      "location": [-1.3078221, 36.786167]
    }, {
      "shop_id": "74a9f523-73ad-4024-8e64-60f0f28515bc",
      "location": [-1.30834, 36.785988]
    }, {
      "shop_id": "51ad7dd5-e0e5-4e72-8b2e-4ac063722e50",
      "location": [-1.3086119, 36.785656]
    }, {
      "shop_id": "c89c6d79-dacf-43b4-a359-c94b8b0f7c8f",
      "location": [-1.3086718, 36.785168]
    }, {
      "shop_id": "f9da05a8-f341-4e57-b5b1-9eb4737c7e43",
      "location": [-1.3068341, 36.788208]
    }, {
      "shop_id": "41b3a310-870c-4772-a92f-43817ae571f0",
      "location": [-1.3021646, 36.790276]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Githurai",
    "route_id": "f8b14275-7ff4-444b-ab74-2d482ba63400",
    "matrix_info": {
      "DistanceMatrixAPI requests": 675,
      "cache_hit": "72%"
    },
    "distance": "26.35km",
    "path": "|qoF_r``FgsCmbHjMYa@gAl@]rCfCsCtOrBY`GmEBcGSiAxEoEnHuE^{FQeBDO{BmC]cAsFbGoGtIiDaIzJsIbC{Dth@g]cb@rQkOlI}GiGoBa@EKSAMBiBgFtD_Nd@U`AyEg@mB{ByEdAsKmEgErM}Qt@ZzDPwNoD[VeC~K_HvY{HrXaVtp@pa@v^AY|sCftG",
    "shops": [{
      "shop_id": "71cdb9c3-e9c0-49e2-8002-d5ee9aa3c96a",
      "location": [-1.208106, 36.918793]
    }, {
      "shop_id": "fed37f25-3a3e-4853-aed8-24ed578e8bc4",
      "location": [-1.2104053, 36.918915]
    }, {
      "shop_id": "bae42f7f-b44d-4ffe-935c-02a1ee1d19e5",
      "location": [-1.2102363, 36.919277]
    }, {
      "shop_id": "beccff4b-7a29-45ee-b5a1-c922a5a5777f",
      "location": [-1.2104671, 36.919426]
    }, {
      "shop_id": "239eea04-5639-4291-ad6e-9b0adb7675e9",
      "location": [-1.2112066, 36.918755]
    }, {
      "shop_id": "fedf14a8-9b8d-4334-b0d2-d22099faafc9",
      "location": [-1.2104708, 36.916084]
    }, {
      "shop_id": "5f5d3030-bdf1-4550-b7d9-e23c079f4385",
      "location": [-1.211053, 36.916206]
    }, {
      "shop_id": "466749fa-65f9-4093-91ef-3c1e03f95842",
      "location": [-1.2123352, 36.917244]
    }, {
      "shop_id": "4c711864-4bf4-4f13-bf64-968bef5886bd",
      "location": [-1.2123615, 36.918537]
    }, {
      "shop_id": "60d84824-ad5a-4c75-8e14-aef38c9af210",
      "location": [-1.2122586, 36.918907]
    }, {
      "shop_id": "cf685382-3cdc-44ad-8abf-eb429ff8779c",
      "location": [-1.2133526, 36.919945]
    }, {
      "shop_id": "11d599d3-d745-47f3-a2f5-69f63ae6b0c2",
      "location": [-1.2148728, 36.921024]
    }, {
      "shop_id": "e09b2327-a924-403f-9cd6-0f9952df62d2",
      "location": [-1.2150255, 36.922283]
    }, {
      "shop_id": "4566859c-e723-405c-8a52-577521c9e11d",
      "location": [-1.2149408, 36.92279]
    }, {
      "shop_id": "54425b96-1007-4408-9d03-0cb1becec927",
      "location": [-1.2149711, 36.92287]
    }, {
      "shop_id": "ec1ba2dc-a1bf-4c44-aa01-f039cd8bf350",
      "location": [-1.214352, 36.92358]
    }, {
      "shop_id": "a68c1133-c6e4-40a4-b1ce-7ea142bf2a78",
      "location": [-1.214203, 36.92392]
    }, {
      "shop_id": "fd82095c-f912-479e-b9f4-e47c2af70af4",
      "location": [-1.2129796, 36.922615]
    }, {
      "shop_id": "a68c7d20-a31b-405d-9137-10275a0f07f1",
      "location": [-1.2116233, 36.920906]
    }, {
      "shop_id": "febe1d3f-2a55-4bfd-a94f-b795c90a7420",
      "location": [-1.2107685, 36.92252]
    }, {
      "shop_id": "e275a760-3ac5-47f1-acc4-d3a233537102",
      "location": [-1.2126667, 36.924217]
    }, {
      "shop_id": "3820e25a-df6e-40f0-ba55-6dc6da9510dc",
      "location": [-1.2133281, 36.925163]
    }, {
      "shop_id": "0f9ba4ba-9876-4774-8232-fac078b26f12",
      "location": [-1.22, 36.93]
    }, {
      "shop_id": "ce9f766b-b36a-44ec-aff5-172507d2ef36",
      "location": [-1.2143844, 36.92702]
    }, {
      "shop_id": "e428dff2-1cfa-4036-b3a9-151de1cf9373",
      "location": [-1.2117627, 36.925346]
    }, {
      "shop_id": "4428f21b-866e-4ddf-b3d1-27c05862e852",
      "location": [-1.210326, 36.92668]
    }, {
      "shop_id": "20a7f6a8-ab59-40ad-ad45-f330de2de395",
      "location": [-1.2097692, 36.926853]
    }, {
      "shop_id": "db9ff463-8212-49ee-8bd3-f1a9231bb0a4",
      "location": [-1.209743, 36.926907]
    }, {
      "shop_id": "6f8187dc-b7d9-4e70-8103-67bb66998495",
      "location": [-1.2096407, 36.92692]
    }, {
      "shop_id": "d0265f43-53e7-46e9-b406-a6dbd72f12cb",
      "location": [-1.2095695, 36.926895]
    }, {
      "shop_id": "8c2875a7-ff73-438a-bf94-72de0eb2603d",
      "location": [-1.2090415, 36.928062]
    }, {
      "shop_id": "50f48b09-f371-4947-9870-8490faf75479",
      "location": [-1.2099507, 36.930458]
    }, {
      "shop_id": "5146fbc5-0a69-4dd4-b5b7-c5e536aee45f",
      "location": [-1.210142, 36.930573]
    }, {
      "shop_id": "b8cb54a4-8a3a-4f54-a535-ba2047068482",
      "location": [-1.2104669, 36.931664]
    }, {
      "shop_id": "6a019bba-c511-4db8-9ad9-f5631ac628a6",
      "location": [-1.2102675, 36.93221]
    }, {
      "shop_id": "b3389cf1-9f56-4b74-957b-5f3411a62586",
      "location": [-1.209654, 36.9333]
    }, {
      "shop_id": "41536047-d3f7-42d8-8667-de9cefb8bb04",
      "location": [-1.2100005, 36.93532]
    }, {
      "shop_id": "ff05abee-0ceb-4f85-aa4b-29d79d3edcde",
      "location": [-1.2089713, 36.936325]
    }, {
      "shop_id": "ea4bebf0-43fe-4957-b97a-4d8707806832",
      "location": [-1.2113115, 36.939354]
    }, {
      "shop_id": "b1edc9ba-ac19-488e-bd5e-fccbdead7e99",
      "location": [-1.2115844, 36.93921]
    }, {
      "shop_id": "2062b0ba-f5b8-41c9-b080-c4bac73e4e4a",
      "location": [-1.2125196, 36.939117]
    }, {
      "shop_id": "f968b8b9-e18d-4d50-ad56-9948b030e50f",
      "location": [-1.21, 36.94]
    }, {
      "shop_id": "7035527d-1373-411c-9f53-7d81c50aa965",
      "location": [-1.2098581, 36.93988]
    }, {
      "shop_id": "573f7c52-82da-49df-b4ac-1fb8a6170525",
      "location": [-1.2091917, 36.937798]
    }, {
      "shop_id": "c9b5ee6b-ee57-45f2-a995-05ecc7f901de",
      "location": [-1.2077456, 36.93352]
    }, {
      "shop_id": "4c9353a7-7233-4ea6-be16-6dd178a99be9",
      "location": [-1.2061687, 36.92942]
    }, {
      "shop_id": "b4d2bdcb-fac0-4ba9-ad35-3a11ea8a8e32",
      "location": [-1.2024802, 36.921474]
    }, {
      "shop_id": "ffea82bb-e3ab-4e59-a7aa-1f3268428f88",
      "location": [-1.2080063, 36.91639]
    }, {
      "shop_id": "a11c1e65-7757-4461-b07f-046de3d24c39",
      "location": [-1.2079979, 36.916523]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Donholm 2",
    "route_id": "d7be2f4e-f98e-458d-aef4-b8e6faa6a3ab",
    "matrix_info": {
      "DistanceMatrixAPI requests": 639,
      "cache_hit": "79%"
    },
    "distance": "9.63km",
    "path": "`h{F{`g`FF@w@n@_Af@e@`@f@ZsANYv@e@aGaCrHMOt@oESx@uCdCa@n@_A@eYf@b\\pBDDj@z@tMdIpB|BbFKLHmBhFU?CC@Jc@RoQxLu@?f\\lDdAs@bQmQwBrBkCuQ[b@}@hIoH}LeA|AEB_Fs@[OCFZyArEsDkFx@kBhFo@Pg@MmAiBuFy@?iB`@]XQx@e@HBxF{I",
    "shops": [{
      "shop_id": "2132e8cf-86dc-47ab-a033-f9c37d6424bc",
      "location": [-1.2917341, 36.905247]
    }, {
      "shop_id": "af5c916a-71f7-4c3c-80e3-06154ea60dbb",
      "location": [-1.2914469, 36.905006]
    }, {
      "shop_id": "8362467a-5254-425c-bdcb-a68cf5b97683",
      "location": [-1.2911327, 36.90481]
    }, {
      "shop_id": "c631bf58-353a-4604-b3dd-72a900d11f28",
      "location": [-1.29093778133392, 36.9046401977539]
    }, {
      "shop_id": "cfa9c0e1-1dbd-4e5c-9b0a-1f2456061f14",
      "location": [-1.2911392, 36.904503]
    }, {
      "shop_id": "9b0d1c6e-4554-4b92-9da6-c0764c42e84d",
      "location": [-1.2907212, 36.90442]
    }, {
      "shop_id": "6f0bc691-70fb-4675-80f0-ef42532ef46b",
      "location": [-1.2905922, 36.904137]
    }, {
      "shop_id": "77baf6ed-bf0b-4534-ae92-6c0bdb26cac8",
      "location": [-1.2903981, 36.90543]
    }, {
      "shop_id": "5bef1b66-4571-43a8-99ae-84e583ec0c01",
      "location": [-1.2897539, 36.903885]
    }, {
      "shop_id": "035ccc5a-6d8f-4411-b7f7-337123232cd2",
      "location": [-1.2896754, 36.903965]
    }, {
      "shop_id": "1ba5db5a-7f34-4a3d-b205-ec7da878f38d",
      "location": [-1.28994762897491, 36.9050102233887]
    }, {
      "shop_id": "93c86168-baa8-4bbe-833f-83327cae9e6e",
      "location": [-1.2898545, 36.904724]
    }, {
      "shop_id": "712aad3b-e15c-4e63-aef9-b109b05a06c5",
      "location": [-1.2891035, 36.904053]
    }, {
      "shop_id": "7d5b8221-a406-4009-a2ab-4a43c30baeca",
      "location": [-1.2889284, 36.903805]
    }, {
      "shop_id": "1c701cd2-30b3-46ad-b2e1-17f231ab744b",
      "location": [-1.28860867023468, 36.9038047790527]
    }, {
      "shop_id": "c413dc6c-43d5-4f1d-b297-816c12253171",
      "location": [-1.284422, 36.903603]
    }, {
      "shop_id": "10af85f0-3a4f-44d8-a149-6ffcbae2e0cc",
      "location": [-1.2890766, 36.90303]
    }, {
      "shop_id": "7a94aeec-15ba-478b-a907-e8da306d2b0e",
      "location": [-1.28911459445953, 36.903003692627]
    }, {
      "shop_id": "14a2341d-aff4-439f-b6d4-e8ab71b457f3",
      "location": [-1.2893294, 36.9027]
    }, {
      "shop_id": "3d366fdd-2894-4b4f-bcec-c29e7e559c30",
      "location": [-1.2916752, 36.90107]
    }, {
      "shop_id": "e8face8f-80fb-4a76-8463-dd3fb35e02d9",
      "location": [-1.2922549, 36.90044]
    }, {
      "shop_id": "003d71e5-47f2-4eb5-a079-86c6be539c32",
      "location": [-1.2933928, 36.9005]
    }, {
      "shop_id": "e28ae0dc-52e3-4ec1-abd9-9cb03d25b0dc",
      "location": [-1.2934622, 36.900448]
    }, {
      "shop_id": "3b0bb220-5806-462e-8ae6-b575bda36054",
      "location": [-1.29291093349457, 36.8992805480957]
    }, {
      "shop_id": "b85ba37d-3b7e-40e5-9da9-c2937e6c4680",
      "location": [-1.2928005, 36.899284]
    }, {
      "shop_id": "ee8de2c8-5d7e-4097-ab59-e8efe71b13b8",
      "location": [-1.292784, 36.8993]
    }, {
      "shop_id": "5a349ce4-00a3-4f56-9b9c-8e4ef9069bac",
      "location": [-1.29279255867004, 36.8992385864258]
    }, {
      "shop_id": "ca49af7e-a8ac-49c8-873a-d17726e50d54",
      "location": [-1.29261469841003, 36.8991432189941]
    }, {
      "shop_id": "68141dd7-4248-4114-8fa3-623b17ad589b",
      "location": [-1.2896461, 36.89693]
    }, {
      "shop_id": "79057d75-376e-4dd3-95f0-2278e200ed86",
      "location": [-1.28938341140747, 36.8969268798828]
    }, {
      "shop_id": "f0b2b219-0336-414b-af98-43e5a1f37208",
      "location": [-1.29405510425568, 36.8960647583008]
    }, {
      "shop_id": "3c471fb8-b72b-44ea-9bf2-24a88ccdeb16",
      "location": [-1.2944119, 36.896324]
    }, {
      "shop_id": "3aa80f62-eb06-426c-bc5f-fe935b5a2a9a",
      "location": [-1.2973121, 36.89927]
    }, {
      "shop_id": "b1c31ce0-f0c7-4212-a992-f8de3424680c",
      "location": [-1.2967118, 36.89869]
    }, {
      "shop_id": "52764e91-d18a-411e-a1a8-ffdadcffa6db",
      "location": [-1.2960148, 36.901676]
    }, {
      "shop_id": "8fc38176-658d-4e4a-ab6d-90b5c64c8af3",
      "location": [-1.2958683, 36.901497]
    }, {
      "shop_id": "55d18169-5e06-4fee-ab0e-26d3b735b750",
      "location": [-1.29556429386139, 36.899845123291]
    }, {
      "shop_id": "e4cabd8f-5eee-4022-8e9a-88a5a0dc618b",
      "location": [-1.2940387, 36.90208]
    }, {
      "shop_id": "8b3bf70d-bfa8-47d6-a058-265c23a65508",
      "location": [-1.2936901, 36.90161]
    }, {
      "shop_id": "85c50091-aea8-417e-8a27-0ecce2f56c77",
      "location": [-1.29366171360016, 36.9015884399414]
    }, {
      "shop_id": "256ec9ea-6a6e-4149-84af-f97769d96620",
      "location": [-1.2925425, 36.901848]
    }, {
      "shop_id": "5dfa27ec-fe97-40a9-b0f6-3f800c394ccd",
      "location": [-1.2924027, 36.90193]
    }, {
      "shop_id": "f86e158d-367b-47ce-b682-3f2dc7d51590",
      "location": [-1.29237723350525, 36.9018859863281]
    }, {
      "shop_id": "7df5b4a8-3003-4e03-9e4f-910452648817",
      "location": [-1.2925192, 36.902344]
    }, {
      "shop_id": "3ea32cb2-6500-49c0-96e6-1ce8176c41e3",
      "location": [-1.29357624053955, 36.9032363891602]
    }, {
      "shop_id": "5abe6cae-7cda-4567-b3cd-7408c2d1abb3",
      "location": [-1.2923971, 36.90295]
    }, {
      "shop_id": "88081d88-3281-4fab-ad1a-5ee52cbe2358",
      "location": [-1.29185605049133, 36.901782989502]
    }, {
      "shop_id": "e2c48c54-62b7-4eec-87d1-8d06b0800421",
      "location": [-1.2916218, 36.9016856]
    }, {
      "shop_id": "c6299235-b109-422e-91ae-8add4de93761",
      "location": [-1.2914171, 36.901764]
    }, {
      "shop_id": "974bc311-8ad1-4991-808d-8283bbfd256a",
      "location": [-1.2910321, 36.902294]
    }, {
      "shop_id": "3bebe7d6-dab4-43ea-9543-b8b378c20ebc",
      "location": [-1.2897958, 36.90258]
    }, {
      "shop_id": "f324de28-0e62-4f32-a55d-0a84714e2df8",
      "location": [-1.289795, 36.90311]
    }, {
      "shop_id": "57199ff9-17b1-439e-bb3a-62703ee9342d",
      "location": [-1.289968, 36.90326]
    }, {
      "shop_id": "c0bd99d9-b434-4927-ac89-25eb451c04e1",
      "location": [-1.29010415077209, 36.9033508300781]
    }, {
      "shop_id": "360332c0-2587-4956-88d6-8d32f4cf539e",
      "location": [-1.2903916, 36.90354]
    }, {
      "shop_id": "c292c3f2-d308-44dc-b4c2-6a134038ee71",
      "location": [-1.2904397, 36.90352]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kawangware",
    "route_id": "63738e51-d524-4445-96d7-a048aa99f2ea",
    "matrix_info": {
      "DistanceMatrixAPI requests": 134,
      "cache_hit": "91%"
    },
    "distance": "29.97km",
    "path": "`z|Fedx_FsbB|nLgCng@MMkARoAViIeKgA_@pKbSTr@GlAl@`KpCeSXAr@YhH_AaEbGDBTKoRBiCXA^Y?kAL{P{KxOnv@p@`@BLOPv\\mHoBmAlItShBxAJBX^A@xMoQ}CkO?SRi@sAaLuCgZxmA_oM",
    "shops": [{
      "shop_id": "2535d099-b221-4d3d-be2d-89d47008d407",
      "location": [-1.2837517, 36.75988]
    }, {
      "shop_id": "9a01cad1-52a3-44d1-98df-08dcf935692a",
      "location": [-1.2830737, 36.7534]
    }, {
      "shop_id": "1dfaa8dd-0ac4-43ca-8138-4e17b306cb94",
      "location": [-1.2829998, 36.753468]
    }, {
      "shop_id": "c93975bd-400d-4c69-8db7-a02c6e2cf3e8",
      "location": [-1.2826172, 36.75337]
    }, {
      "shop_id": "cf121ca5-d3c4-48b7-b142-f48ace7e9d8d",
      "location": [-1.2822195, 36.753254]
    }, {
      "shop_id": "47ab7355-a362-4c69-af70-fd00224e4e32",
      "location": [-1.2805688, 36.7552]
    }, {
      "shop_id": "f570198e-6492-460f-bb45-ea95ae3f7f7d",
      "location": [-1.2802087, 36.755363]
    }, {
      "shop_id": "b4c009ef-5129-4efa-884e-6049cee015e8",
      "location": [-1.2822218, 36.75214]
    }, {
      "shop_id": "0aa73984-6744-49f2-8345-a13b2216feb3",
      "location": [-1.2823336, 36.751884]
    }, {
      "shop_id": "34f0bec5-80a7-4749-9af2-abe39751ac88",
      "location": [-1.28228747844696, 36.7514915466309]
    }, {
      "shop_id": "38a7246b-e649-49c1-ae3f-b0ddeeccc12e",
      "location": [-1.2825197, 36.74956]
    }, {
      "shop_id": "c9574075-49e7-4d66-89c4-c0a8d0c8a19b",
      "location": [-1.283251, 36.752792]
    }, {
      "shop_id": "8fc4f75d-8720-4438-8a89-afb8c1d4912c",
      "location": [-1.2833796, 36.752796]
    }, {
      "shop_id": "c8093801-8a6e-49bb-95a8-80acb9e7cbe2",
      "location": [-1.283639, 36.75293]
    }, {
      "shop_id": "705f15bc-82b5-4f6b-a173-0e478ff8205b",
      "location": [-1.2851349, 36.753254]
    }, {
      "shop_id": "294143c3-78b2-440c-8b15-4f795bc9cca4",
      "location": [-1.2841622, 36.75195]
    }, {
      "shop_id": "9ec24bad-16a3-4436-8c3b-fab1e84ca6b4",
      "location": [-1.284192, 36.751934]
    }, {
      "shop_id": "e7be6a32-6620-4b78-b6e4-7328e2e92bd4",
      "location": [-1.2843024, 36.75199]
    }, {
      "shop_id": "98837097-b2d9-4f76-9ace-abeb32af5b3a",
      "location": [-1.2811849, 36.751972]
    }, {
      "shop_id": "06ef3d31-3f48-4449-8d96-3bc0f73f25e7",
      "location": [-1.2804933, 36.751835]
    }, {
      "shop_id": "3e830932-b90b-4265-9c9b-0931c69c4fff",
      "location": [-1.2804832, 36.75168]
    }, {
      "shop_id": "a87a9384-226f-4331-9d61-893f96bd18d2",
      "location": [-1.2803451, 36.751682]
    }, {
      "shop_id": "14c06598-70df-4466-856c-a2644fe26d64",
      "location": [-1.279965, 36.751606]
    }, {
      "shop_id": "bbc4c35d-6cf1-4a92-8a6a-d7d0a95b4cb2",
      "location": [-1.2771105, 36.75367]
    }, {
      "shop_id": "4c449658-8d33-4bb1-b34c-6956331b4886",
      "location": [-1.2798033, 36.744793]
    }, {
      "shop_id": "bc7045a1-7eb2-484c-aea3-f2db160c7a9d",
      "location": [-1.2800514, 36.744617]
    }, {
      "shop_id": "4f5126a4-b31c-4601-82fc-ca5609953142",
      "location": [-1.28007435798645, 36.7445526123047]
    }, {
      "shop_id": "ba192d01-2053-4fc1-8076-c933b1de7d39",
      "location": [-1.2799867, 36.74446]
    }, {
      "shop_id": "10641cd6-4fa7-438b-86bb-fcc3c7bdcb30",
      "location": [-1.2847506, 36.745968]
    }, {
      "shop_id": "1b05d0e6-7efe-4737-b263-ff647fb83732",
      "location": [-1.2841936, 36.746365]
    }, {
      "shop_id": "d4653a2d-1932-4000-a05e-f479bf7a10a5",
      "location": [-1.2858613, 36.743046]
    }, {
      "shop_id": "24395736-539e-49e0-b935-7629234cd36c",
      "location": [-1.2863944, 36.7426]
    }, {
      "shop_id": "4895d50c-5a52-42c5-83df-8f3496807842",
      "location": [-1.286454, 36.742584]
    }, {
      "shop_id": "e34d34dd-8b9c-46c4-8e1c-9c9abcee77dc",
      "location": [-1.2865793, 36.74242]
    }, {
      "shop_id": "251e21c5-6b1f-49ec-bbdf-debf29c2ca40",
      "location": [-1.2865663, 36.742405]
    }, {
      "shop_id": "9c9bd095-0eda-4187-82dd-0e45b48a4d97",
      "location": [-1.2889353, 36.745365]
    }, {
      "shop_id": "aca98331-4b9d-49f0-91b1-6492cbc9c872",
      "location": [-1.2881519, 36.747986]
    }, {
      "shop_id": "3ec503e9-622b-4387-b191-e003c1be7764",
      "location": [-1.2881542, 36.74809]
    }, {
      "shop_id": "d3738924-3723-43be-9a99-7ad0dc1b89a9",
      "location": [-1.28824961185455, 36.7483024597168]
    }, {
      "shop_id": "6368c10d-9506-49cc-bd99-edb30263ea85",
      "location": [-1.28782844543457, 36.7503852844238]
    }, {
      "shop_id": "13b33ab9-f226-4138-8ba0-3b7cbd7e9707",
      "location": [-1.2870764, 36.754745]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kasarani",
    "route_id": "49a0a162-80d7-43d2-b428-31017bf4330e",
    "matrix_info": {
      "DistanceMatrixAPI requests": 247,
      "cache_hit": "83%"
    },
    "distance": "18.75km",
    "path": "|qoF_r``FshAgiCv@i@OuCxIYxSkMeh@gKQR_@ZQqUh@aD^jArXct@zByw@oOvj@hCg@Zq@l@k@Zc@aFrH_OdVqf@cCO~KpHnUZEh@GzAiDtB]~CxLtH|ADeA|@B`@fBt@dFgDdKqASvEvACTl@xIl@~FxsAnuC",
    "shops": [{
      "shop_id": "80f586ef-118c-4e4b-8cb9-909cf124ca88",
      "location": [-1.22005426883698, 36.8942794799805]
    }, {
      "shop_id": "8b685129-036d-4a13-803c-0c4db4db19e8",
      "location": [-1.2203289270401, 36.8944931030273]
    }, {
      "shop_id": "c83f8a19-87be-41a7-91bd-98006ac4231d",
      "location": [-1.22024774551392, 36.8952407836914]
    }, {
      "shop_id": "6143cbfd-b6bd-4af9-ae31-ef3893672f4d",
      "location": [-1.221977, 36.895367]
    }, {
      "shop_id": "d54a0f41-c15b-4fcd-a5b3-55ebcd5e7a39",
      "location": [-1.2253128, 36.897667]
    }, {
      "shop_id": "0a54046c-5f35-4550-a791-665230edd7ed",
      "location": [-1.2187238, 36.899628]
    }, {
      "shop_id": "4b238941-1dd5-47aa-a488-b0da2559ca17",
      "location": [-1.218626, 36.89953]
    }, {
      "shop_id": "1a7753e5-d05e-4a29-8e46-5f3f05a59aca",
      "location": [-1.21846604347229, 36.8993873596191]
    }, {
      "shop_id": "1dbd6aaf-c496-4fb0-99e7-3149fb88a807",
      "location": [-1.2183815, 36.902996]
    }, {
      "shop_id": "367dac36-41fb-45b0-bb2a-08c98e3f6b1e",
      "location": [-1.2185874, 36.90381]
    }, {
      "shop_id": "58fcf26e-ef09-4cd6-9f99-21d0eece8c35",
      "location": [-1.2187489, 36.903427]
    }, {
      "shop_id": "d359e8c6-2138-4c19-8cbd-adb0115478e3",
      "location": [-1.2228476, 36.911934]
    }, {
      "shop_id": "c4102918-5432-4b0c-b529-a7e50eacdad9",
      "location": [-1.22347319126129, 36.9210205078125]
    }, {
      "shop_id": "f0ca4aea-b509-4c97-8aba-7c8b8cea31d9",
      "location": [-1.2208346, 36.914024]
    }, {
      "shop_id": "ca842369-38da-42ce-9a8e-d200a9e9661d",
      "location": [-1.22152304649353, 36.9142227172852]
    }, {
      "shop_id": "554edf82-878b-4c7b-80d1-b4af6d9c5032",
      "location": [-1.2216599, 36.914467]
    }, {
      "shop_id": "38a6586f-0843-4467-92cf-8f546fc38435",
      "location": [-1.22189199924469, 36.9146881103516]
    }, {
      "shop_id": "7a271644-9f76-4b63-b9bd-c50014617448",
      "location": [-1.2220267, 36.914867]
    }, {
      "shop_id": "425f3a5d-1006-468a-a5e0-7c756a8caadc",
      "location": [-1.220905, 36.913334]
    }, {
      "shop_id": "95136b15-f125-4ddd-8630-23c2400bee41",
      "location": [-1.218338, 36.909622]
    }, {
      "shop_id": "6794bb17-4c9c-4218-9b94-b34bd200de40",
      "location": [-1.212006, 36.910282]
    }, {
      "shop_id": "43f61753-1977-47ab-916f-c88ef20ca6fc",
      "location": [-1.2119325, 36.908203]
    }, {
      "shop_id": "ffee94cd-0e87-4990-939e-19749bdc3e9d",
      "location": [-1.2134604, 36.904602]
    }, {
      "shop_id": "cc481b51-cf26-42af-a28a-1e0a80398b79",
      "location": [-1.213599, 36.90463]
    }, {
      "shop_id": "627121b2-0dec-4cb7-a21c-0fc968fb540b",
      "location": [-1.2138071, 36.904675]
    }, {
      "shop_id": "a983a726-7e43-44c1-a1b7-7059b3a486ef",
      "location": [-1.2142704, 36.905525]
    }, {
      "shop_id": "dcc8695a-28c2-4674-8fb3-be142ea4aa34",
      "location": [-1.2148591, 36.905666]
    }, {
      "shop_id": "cbe0703f-f0f6-416a-a4c4-81ca5c0acc27",
      "location": [-1.2156589, 36.90346]
    }, {
      "shop_id": "fb28e602-ba30-4777-8cb1-bc5f8ce1b3c9",
      "location": [-1.21720910072327, 36.9029922485352]
    }, {
      "shop_id": "ecda89d3-b7e6-4fab-a7b5-e156ddd53a38",
      "location": [-1.2172351, 36.903336]
    }, {
      "shop_id": "b35c5230-2de3-4cdf-afd4-d42b3e965c28",
      "location": [-1.2175523, 36.903316]
    }, {
      "shop_id": "4e7a0cdc-8c69-46ed-9afa-2bb27fbbbaaa",
      "location": [-1.217715, 36.9028]
    }, {
      "shop_id": "67d32b8a-325b-4410-b082-a38b85227fd8",
      "location": [-1.2179933, 36.901646]
    }, {
      "shop_id": "7b87ccb7-0ea8-458c-81ca-95188bf0f992",
      "location": [-1.21714544296265, 36.8996963500977]
    }, {
      "shop_id": "d8c75218-c148-4c44-bf42-f4626c269ee6",
      "location": [-1.2167387008667, 36.8997955322266]
    }, {
      "shop_id": "092e056b-6ee5-40e7-b62c-29e8c9e8414d",
      "location": [-1.2178227, 36.89936]
    }, {
      "shop_id": "4f152050-e367-4192-9567-31c655666191",
      "location": [-1.2178046, 36.899254]
    }, {
      "shop_id": "c840aa5d-5056-4281-9229-47339b7e2bf4",
      "location": [-1.2180302, 36.89752]
    }, {
      "shop_id": "8a01a569-5f10-4484-a704-fca4169c6a7f",
      "location": [-1.2182634, 36.896244]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kayole 2",
    "route_id": "1f1a9a88-caa7-45d5-b878-f2f9118a5d1d",
    "matrix_info": {
      "DistanceMatrixAPI requests": 246,
      "cache_hit": "74%"
    },
    "distance": "50.45km",
    "path": "`h{F{`g`FaMePuGcPm@u@Vu@wAEzDiB@{DuAoAws@kJqMpEyJeGqDmKp@nBa@XCBoZeQuFhNuAg@uBi@cBClIiQkBgIuF{@oAhAeArIwHmNuSkq@fJmBPK`@Vjk@brXlaCsoS",
    "shops": [{
      "shop_id": "6d20649f-4813-444d-98db-ba839ec15cb8",
      "location": [-1.2894428, 36.908012]
    }, {
      "shop_id": "ec97284c-d624-4b9e-b71c-f8cdf771eaac",
      "location": [-1.2880487, 36.91075]
    }, {
      "shop_id": "9ff4c6be-6c9f-40ce-a92f-cfdad1bde21b",
      "location": [-1.2878226, 36.91102]
    }, {
      "shop_id": "3c9d9962-8370-42c0-ac61-582f534bc308",
      "location": [-1.2879441, 36.911293]
    }, {
      "shop_id": "2e54c96f-c5b8-48ed-8d9f-ca4155f53ed7",
      "location": [-1.2875007, 36.911324]
    }, {
      "shop_id": "2ece72ed-f9ce-4912-8564-5c2b36f77bd1",
      "location": [-1.2884436, 36.91185]
    }, {
      "shop_id": "a461cd15-ae1c-43c4-92bd-e9c69131879c",
      "location": [-1.2884476, 36.912792]
    }, {
      "shop_id": "f13109f4-cf2f-4aea-83f9-65c11c5d91e0",
      "location": [-1.2880187, 36.9131898]
    }, {
      "shop_id": "c6f45ee9-3055-458c-ba2c-8c7e1a126cda",
      "location": [-1.2795827, 36.915005]
    }, {
      "shop_id": "7db87610-27f0-4cf3-97a8-bcfebf481001",
      "location": [-1.2772498, 36.913963]
    }, {
      "shop_id": "68ee4011-f04f-4fa9-80e8-d5e166c020cb",
      "location": [-1.2753599, 36.91527]
    }, {
      "shop_id": "e5272387-faad-40f9-916f-5da0cb7d51b8",
      "location": [-1.2744665, 36.917263]
    }, {
      "shop_id": "dda1342b-ffdc-489c-bd39-53f2e6ac944f",
      "location": [-1.2747163, 36.9167]
    }, {
      "shop_id": "718b23a9-04ed-47d7-8f7c-00ab0f89270b",
      "location": [-1.2745467, 36.91657]
    }, {
      "shop_id": "c2eb1d2e-5ff9-4b49-86e3-1dc0b4c7dc61",
      "location": [-1.2745281, 36.91655]
    }, {
      "shop_id": "eebcf694-054c-4dc3-b0be-de3957fc5d95",
      "location": [-1.2701333, 36.919456]
    }, {
      "shop_id": "04684643-dad5-4daa-98e9-68155802b270",
      "location": [-1.2688993, 36.91701]
    }, {
      "shop_id": "f6f3d3dc-81f4-4202-9717-366c79e02771",
      "location": [-1.268469, 36.91721]
    }, {
      "shop_id": "53971d22-7836-4e8f-939d-2354180ade5c",
      "location": [-1.2678844, 36.917416]
    }, {
      "shop_id": "1dc57c83-f30f-4e7e-90e1-4c89e6a5b273",
      "location": [-1.267381, 36.91744]
    }, {
      "shop_id": "a0361ee9-dc3e-4549-a6f7-01151d909f28",
      "location": [-1.2690531, 36.920372]
    }, {
      "shop_id": "58ca2691-a993-445b-aec9-530136abfba1",
      "location": [-1.2685139, 36.92201]
    }, {
      "shop_id": "e600e21e-2de6-468a-aeda-a05f3f2b2a32",
      "location": [-1.2672836, 36.922314]
    }, {
      "shop_id": "3fd6f627-7461-475a-ba96-5a29b65aa173",
      "location": [-1.2668843, 36.92194]
    }, {
      "shop_id": "0193b31e-9d71-4564-8982-696e18cd6a43",
      "location": [-1.2665333, 36.92024]
    }, {
      "shop_id": "985f1896-8067-4ada-a513-122f35437e83",
      "location": [-1.2649742, 36.922714]
    }, {
      "shop_id": "b08e6138-cfb9-4ba0-bd77-3e667b926492",
      "location": [-1.2616577, 36.93077]
    }, {
      "shop_id": "3c994875-e96e-44f7-b363-e09abcedd50a",
      "location": [-1.2634588, 36.93132]
    }, {
      "shop_id": "be04d019-7168-4089-b86e-351d1cc29043",
      "location": [-1.263552, 36.93138]
    }, {
      "shop_id": "66fa445a-02c0-46be-9cfd-80cfcbc34c83",
      "location": [-1.2637185, 36.931255]
    }, {
      "shop_id": "8c79058b-746b-4a36-8cf9-dee07de55dfc",
      "location": [-1.2708195, 36.800198]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kinoo",
    "route_id": "0ecb2d3b-321a-4a61-a977-d7ee9402013e",
    "matrix_info": {
      "DistanceMatrixAPI requests": 206,
      "cache_hit": "79%"
    },
    "distance": "47.93km",
    "path": "`z|Fedx_FqmGn{Xe@|Bq@~BECMd@EFCt@AFzIp@kFrPyHw@u_@~o@|AqBeAs@zDyHpDyEfRg]RsF_AGaV`EwClDeBnAIMi@IsDlGiBhRcFaPDi@aF_@k@r@NtIcyAgt@xlL{yX",
    "shops": [{
      "shop_id": "80a88e64-8c23-4178-a086-8a25d62fa189",
      "location": [-1.2564039, 36.696434]
    }, {
      "shop_id": "6a6b44c1-d16c-4795-9bc6-acdab6551981",
      "location": [-1.2562088, 36.6958]
    }, {
      "shop_id": "d9638bba-9233-4771-93d0-edb8edfd4755",
      "location": [-1.2559642, 36.69516]
    }, {
      "shop_id": "22d26d0e-9f8f-4283-a7f7-cc3ebe48af28",
      "location": [-1.255925, 36.695175]
    }, {
      "shop_id": "ff5a327d-ba39-4e7b-a51d-2a065edcf8b7",
      "location": [-1.2558601, 36.694992]
    }, {
      "shop_id": "0d17dba8-2e78-4324-8fca-5b6838352655",
      "location": [-1.2558292, 36.694946]
    }, {
      "shop_id": "440fa85c-5540-43d6-832f-9c43891ae1cd",
      "location": [-1.255809, 36.694683]
    }, {
      "shop_id": "1be492ff-a737-484c-b802-1bdbddd57c74",
      "location": [-1.255795, 36.69464]
    }, {
      "shop_id": "0738c641-cc71-4c34-8e9d-74c4dd50294f",
      "location": [-1.2575389, 36.694393]
    }, {
      "shop_id": "2653df33-2510-4b7f-b4f6-cc993fe0faca",
      "location": [-1.2563622, 36.69157]
    }, {
      "shop_id": "d6eb9bcc-6943-4640-b6df-ca9bc00b2752",
      "location": [-1.2547926, 36.691845]
    }, {
      "shop_id": "2cdd8385-63fa-4852-83cc-b141d8dc46c3",
      "location": [-1.2495648, 36.68401]
    }, {
      "shop_id": "61c7ab2f-e2af-432d-91b2-6db83ee82c9f",
      "location": [-1.2500265, 36.684578]
    }, {
      "shop_id": "f98dfaf8-373c-4eb9-a574-9a9e93e30fc4",
      "location": [-1.2496794, 36.68484]
    }, {
      "shop_id": "42bff8cb-b0c4-4751-9532-c963e29a9a3a",
      "location": [-1.2506214, 36.68641]
    }, {
      "shop_id": "54c6c1c9-cc9e-4c2b-8fdc-169ad41eb6eb",
      "location": [-1.2515142, 36.687504]
    }, {
      "shop_id": "f29878d2-25c7-44eb-affb-f7a6fdce289c",
      "location": [-1.2545930147171, 36.6923408508301]
    }, {
      "shop_id": "8eba8e14-997b-47f0-8f3a-3aec77d0e1d0",
      "location": [-1.2546916, 36.69356]
    }, {
      "shop_id": "f9714eea-0195-4a60-82be-14d6bc2fb993",
      "location": [-1.2543675, 36.693604]
    }, {
      "shop_id": "3684af02-82f5-4b6e-9329-9b6b0b81df1c",
      "location": [-1.2506793, 36.69263]
    }, {
      "shop_id": "f6ff573a-2bcd-46d8-bb89-2be449d79260",
      "location": [-1.2499152, 36.691765]
    }, {
      "shop_id": "49498fb2-6b98-40b4-9fea-b49a92c659d5",
      "location": [-1.2494088, 36.691364]
    }, {
      "shop_id": "39248698-a1cf-4ea7-bb53-b1ef94cb9877",
      "location": [-1.2493609, 36.691425]
    }, {
      "shop_id": "206c4f67-82a3-4603-b654-2a2feea25dbe",
      "location": [-1.2491537, 36.691483]
    }, {
      "shop_id": "e866fcaf-2a43-4b3f-8336-9b23289184ba",
      "location": [-1.2482508, 36.690132]
    }, {
      "shop_id": "706dbdaf-4043-4785-874c-f95f0f170d09",
      "location": [-1.2477221, 36.68704]
    }, {
      "shop_id": "e1cb089b-689c-48f0-a53e-93bc487359e8",
      "location": [-1.246581, 36.689766]
    }, {
      "shop_id": "de93cdf9-32cc-42bb-88bc-0242ece879d0",
      "location": [-1.2466085, 36.689976]
    }, {
      "shop_id": "f900c9d1-8b8f-4f26-af3f-52433d1348cf",
      "location": [-1.245475, 36.690144]
    }, {
      "shop_id": "51691b83-c568-43ab-83a5-0a80c2cb98d6",
      "location": [-1.2452635, 36.68988]
    }, {
      "shop_id": "589e3e1a-4aa7-47fe-ba17-8f5f62d9a599",
      "location": [-1.2453364, 36.688168]
    }, {
      "shop_id": "048e4ff3-e0b6-47d2-b21c-4a74d3431d52",
      "location": [-1.2309214, 36.696686]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kenol/Gotinyaga",
    "route_id": "49914d3d-c2f6-41e5-bc09-8af190d5f0f5",
    "matrix_info": {
      "DistanceMatrixAPI requests": 327,
      "cache_hit": "72%"
    },
    "distance": "69.87km",
    "path": "l~mEa_raFuaI~qHijEyxH~@}@vAYa_Ars@g|@xr@k^~TsBxCz@J{IH^NfNmFpDyBgoAwlBt@VpGsCmDmAyMnBgEjJDbB?LC@eC|BiEnBuBjCs@Bu@\\ybJ{sBvpIz|ARJvJhAlN`F|L~B_@iD~vVkK",
    "shops": [{
      "shop_id": "bcc5f21a-3c4e-4f87-a432-a8a6768c5ec3",
      "location": [-1.0081155, 37.076008]
    }, {
      "shop_id": "6c8eb705-d71b-42eb-aeea-1e0c8068bf8c",
      "location": [-0.9755923, 37.12622]
    }, {
      "shop_id": "e6d19713-f2ca-44dd-964e-2369f6e6b442",
      "location": [-0.9759123, 37.126534]
    }, {
      "shop_id": "91a028e4-ba32-4c8f-bc5d-82c5ba1a9dc0",
      "location": [-0.9763473, 37.12666]
    }, {
      "shop_id": "79e99ec5-5b96-4bb6-8cb5-e418b52aedb9",
      "location": [-0.9661002, 37.118244]
    }, {
      "shop_id": "5e1dbaa2-3344-4f97-95b0-7ca58b77d4f3",
      "location": [-0.9563034, 37.109947]
    }, {
      "shop_id": "14022270-6471-4b88-b25c-74fdb225df5f",
      "location": [-0.9512805, 37.106434]
    }, {
      "shop_id": "be219c1e-5ebf-43d3-8d73-8b7ed3eb8f4b",
      "location": [-0.9507021, 37.105656]
    }, {
      "shop_id": "b6eaeb1d-8efb-4b14-ab23-cd28741dc009",
      "location": [-0.950995, 37.105595]
    }, {
      "shop_id": "5461ff44-95ea-4bc8-b9f6-0a6036619361",
      "location": [-0.9492567, 37.105545]
    }, {
      "shop_id": "efc7d76e-4e00-4ab0-bd4f-023604b87a3a",
      "location": [-0.9494199, 37.105465]
    }, {
      "shop_id": "6b021d4f-1f5b-4b19-835b-567f933845b5",
      "location": [-0.9518611, 37.10666]
    }, {
      "shop_id": "1967d562-9891-4506-9e14-1593ff1f7188",
      "location": [-0.9527464, 37.107273]
    }, {
      "shop_id": "a7426d0f-350f-46e1-abdf-866964e5d39e",
      "location": [-0.9399147, 37.12483]
    }, {
      "shop_id": "ad431468-aae3-4dd1-bbf4-0b7d5d6fce5d",
      "location": [-0.940176, 37.124714]
    }, {
      "shop_id": "eadd9194-284a-4d83-a87a-705519c1eeb7",
      "location": [-0.9415485, 37.12545]
    }, {
      "shop_id": "91195288-e66c-42f1-a29c-4a46b51b5e35",
      "location": [-0.9406844, 37.125843]
    }, {
      "shop_id": "7aa2767d-be9e-4943-8bd5-4761f3a255b1",
      "location": [-0.9383095, 37.125275]
    }, {
      "shop_id": "1078cb74-bdce-473c-aff2-e3ee7a450505",
      "location": [-0.9373093, 37.123463]
    }, {
      "shop_id": "d4af2706-ea02-46a6-81e5-4754d4b097f7",
      "location": [-0.9373431, 37.122963]
    }, {
      "shop_id": "6a93224a-8e33-4eb9-a234-689a39767943",
      "location": [-0.9373376, 37.122887]
    }, {
      "shop_id": "45a92554-8b33-4aaf-bd2f-67b20a2d9af9",
      "location": [-0.9373224, 37.122883]
    }, {
      "shop_id": "5b644ccd-7dda-476e-ae37-a36f865eb642",
      "location": [-0.9366498, 37.122253]
    }, {
      "shop_id": "ba4ddae7-a9af-41e3-9afe-4ba1cdcc12dc",
      "location": [-0.9356393, 37.121685]
    }, {
      "shop_id": "40fe2b31-d80c-4373-818c-30b0ee209067",
      "location": [-0.9350484, 37.12099]
    }, {
      "shop_id": "9e2e220e-8b6c-4d5f-8b8b-fc6d8cf8be0a",
      "location": [-0.9347865, 37.120968]
    }, {
      "shop_id": "84d1becc-85f8-47e7-9480-dbee497b76f4",
      "location": [-0.9345167, 37.12082]
    }, {
      "shop_id": "0bf722a2-bed6-494d-9b16-4ac558a4648b",
      "location": [-0.877593, 37.139515]
    }, {
      "shop_id": "5fe9fbdf-4c56-4442-b6e9-38ae583b767a",
      "location": [-0.9316255, 37.124496]
    }, {
      "shop_id": "d9a804af-86db-4c35-9ba3-dc57c725fd12",
      "location": [-0.9317293, 37.124435]
    }, {
      "shop_id": "e75cca7c-fd38-4b95-8def-2b51ac866300",
      "location": [-0.933609, 37.124065]
    }, {
      "shop_id": "849abac3-b1c8-4d7f-afa0-3e596ecc2322",
      "location": [-0.9360833, 37.12294]
    }, {
      "shop_id": "06f98cf6-875c-403b-b0f2-7c4cfdb42a45",
      "location": [-0.9383142, 37.122295]
    }, {
      "shop_id": "0e0c280b-ed6c-4e1a-9d13-b6dbf647d9bd",
      "location": [-0.9381484, 37.123146]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Karen/Bulbul",
    "route_id": "6e427d8e-adec-4801-8e38-90e93e904cd6",
    "matrix_info": {
      "DistanceMatrixAPI requests": 402,
      "cache_hit": "77%"
    },
    "distance": "49.09km",
    "path": "tz|Fmdx_FO@hcG`gMoEjMu@rBm@jBvFvKRRNFBKkG`Ss]jLBz@R`CIn@CrBvUbQhB{GmAjKSAaAlSe{@tvBcjAoFlc@zjA|KiPiMrJrOyQc@Az@jBr_G}tBFHpj@es@ym@ya@XMVGMt@OJiGcrAT\\{~@lv@cEe^{Ae_@caAkg@eiGkyK",
    "shops": [{
      "shop_id": "944705f9-2658-45cd-b353-ef2fcb15fac9",
      "location": [-1.2997102, 36.829018]
    }, {
      "shop_id": "35379f5f-1347-4f6f-88b4-d5f76a5b238a",
      "location": [-1.3413568, 36.756054]
    }, {
      "shop_id": "d1b9428c-5651-47d5-9561-558d32bdd2ad",
      "location": [-1.3403212, 36.75375]
    }, {
      "shop_id": "e1c4848d-8e16-4f2b-9c91-57d79bd2ebc4",
      "location": [-1.340048, 36.753174]
    }, {
      "shop_id": "0b3e0c7b-17ce-4a08-977d-a919adb26900",
      "location": [-1.3398222, 36.752625]
    }, {
      "shop_id": "1e619b25-cda9-4833-a5d4-d3fdf2aad0d4",
      "location": [-1.3410636, 36.750587]
    }, {
      "shop_id": "845544d9-4d4c-48d1-a2bb-1c7fd346630e",
      "location": [-1.3411604, 36.75049]
    }, {
      "shop_id": "800e36a0-5f41-4b28-a768-07b663e10ef3",
      "location": [-1.3412437, 36.750446]
    }, {
      "shop_id": "e40528c3-cd43-46af-b576-5234441e748f",
      "location": [-1.3412606, 36.75051]
    }, {
      "shop_id": "f481d4bf-748e-4065-a637-f0425ade6a3b",
      "location": [-1.3399175, 36.747303]
    }, {
      "shop_id": "eb8ecdae-4791-4a97-878d-30d8e0febc3c",
      "location": [-1.33502244949341, 36.7451553344727]
    }, {
      "shop_id": "770eff8e-9f34-476f-bd3c-909de12115b1",
      "location": [-1.3350449, 36.744865]
    }, {
      "shop_id": "debaaa0d-9058-43c0-9346-6b57f52035ac",
      "location": [-1.3351372, 36.744205]
    }, {
      "shop_id": "73280b1d-f6c9-486c-9674-1eda2dee1093",
      "location": [-1.3350943, 36.743973]
    }, {
      "shop_id": "ffdf0d64-07fc-4a28-a55d-0008b790f204",
      "location": [-1.33506846427917, 36.7433891296387]
    }, {
      "shop_id": "efc35d13-f79d-4d94-8953-afc7a1e8287f",
      "location": [-1.3387104, 36.740486]
    }, {
      "shop_id": "1d62897c-d89d-4f3c-a18c-950603cbcc24",
      "location": [-1.339238, 36.74191]
    }, {
      "shop_id": "e6f30f25-78b8-476d-86ee-b5ce871c3b39",
      "location": [-1.3388458, 36.739933]
    }, {
      "shop_id": "02be5f52-cadf-4a21-a691-54be801e2be8",
      "location": [-1.3387454, 36.739937]
    }, {
      "shop_id": "ad85b198-6360-4042-8149-05654ca4af14",
      "location": [-1.3384236, 36.736668]
    }, {
      "shop_id": "750684e7-51de-4863-901e-03ec1dd2ae80",
      "location": [-1.3287889, 36.71752]
    }, {
      "shop_id": "ec64727a-8e58-4f2d-a0f2-72ec026e3dd4",
      "location": [-1.3167685, 36.71872]
    }, {
      "shop_id": "391824d3-9f51-4c8a-9680-e1806bfa9280",
      "location": [-1.3225969, 36.706577]
    }, {
      "shop_id": "317de83a-9e94-4a28-8d49-c23781fd641c",
      "location": [-1.3246654, 36.70935]
    }, {
      "shop_id": "a763e074-8b3a-4fb1-a58d-cbdc34a32701",
      "location": [-1.3223829, 36.70749]
    }, {
      "shop_id": "6b46327d-cc3f-40dc-93a9-10695e855eab",
      "location": [-1.3250442, 36.7105]
    }, {
      "shop_id": "57507a0e-1abe-4a8c-b420-b227753dffbd",
      "location": [-1.32485520839691, 36.710506439209]
    }, {
      "shop_id": "bde96177-4fa2-4ffd-ae9c-3cd9cae05776",
      "location": [-1.3251648, 36.709972]
    }, {
      "shop_id": "c8ecb31e-d775-4d31-aa71-1d5635597d65",
      "location": [-1.3662221, 36.728836]
    }, {
      "shop_id": "edf60174-1695-40f2-8dc4-f82050486ec1",
      "location": [-1.36625874042511, 36.7287940979004]
    }, {
      "shop_id": "f7833a09-7ca4-4577-9e4c-2da6b47736b8",
      "location": [-1.3732316, 36.737144]
    }, {
      "shop_id": "8a482801-2bd3-4588-86cf-b5903d098ae0",
      "location": [-1.3657438, 36.742706]
    }, {
      "shop_id": "e2e9adbc-e5f0-46c9-9f18-cac0cb38039e",
      "location": [-1.365869, 36.742783]
    }, {
      "shop_id": "ae82ce23-d3b8-4dba-9499-0d9cd94cf520",
      "location": [-1.36599242687225, 36.7428245544434]
    }, {
      "shop_id": "3e08038d-73df-4502-a9d5-0e1f8592f1f1",
      "location": [-1.3659178, 36.742546]
    }, {
      "shop_id": "b2046e4c-872c-45d0-a4b1-66169313aaf5",
      "location": [-1.365838, 36.74249]
    }, {
      "shop_id": "164bc23f-a292-47b6-9059-fd812007c902",
      "location": [-1.36450862884521, 36.7557907104492]
    }, {
      "shop_id": "e30af53c-dda9-4d31-96a5-c7a6892d217e",
      "location": [-1.3646208, 36.755642]
    }, {
      "shop_id": "0cffd7d7-3dc3-4df3-9694-9eb0346f9acc",
      "location": [-1.3544039, 36.746773]
    }, {
      "shop_id": "683b4fe4-5983-434c-8c5b-80f2fe7d37f1",
      "location": [-1.35342180728912, 36.7517623901367]
    }, {
      "shop_id": "3f89055e-60d8-4000-a4d0-91e8a343bd6a",
      "location": [-1.352962, 36.756912]
    }, {
      "shop_id": "1087e764-575a-45c4-b282-2f40574eef15",
      "location": [-1.3423764, 36.763367]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Langata Road Route - Key Accounts",
    "route_id": "5b1945fb-6d33-4190-9363-79f9327df6a3",
    "matrix_info": {
      "DistanceMatrixAPI requests": 0,
      "cache_hit": "100%"
    },
    "distance": "33.61km",
    "path": "dsfG_se`FipLjxAhpLkxA",
    "shops": [{
      "shop_id": "73182b7f-d187-4073-b222-aa063718a2cd",
      "location": [-1.28045547008514, 36.8836212158203]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kangundo Road",
    "route_id": "7c24a15d-10cd-48e0-a939-f9704f02058d",
    "matrix_info": {
      "DistanceMatrixAPI requests": 502,
      "cache_hit": "74%"
    },
    "distance": "19.42km",
    "path": "`h{F{`g`FieBfr@ka@p_@So@qEgJqApA}CqKnBjB{GiOlAwGdBs@n@WlABtB`F~DiA_N_LESsD]kIaHg@UsBoBiHmEMFcImFqN{[qA_L|Ak@_U|BINwAQa@L{DU??qC{@kn@wm@jm@vRbDnBpBKHGRk@w@tB~IeCrCyA|ELzGrCzmEx_A",
    "shops": [{
      "shop_id": "84c2d23b-ca07-4556-823e-c80a0c22869d",
      "location": [-1.275318, 36.89706]
    }, {
      "shop_id": "35f5068d-8cac-4cda-841c-b109d656a17c",
      "location": [-1.2698174, 36.891853]
    }, {
      "shop_id": "9813ae08-7994-4764-be54-907c10edeb7f",
      "location": [-1.2697239, 36.892086]
    }, {
      "shop_id": "17d8fe16-47e0-4d5b-92c8-61b2295dad94",
      "location": [-1.268665, 36.893894]
    }, {
      "shop_id": "6185cc7f-556b-4338-b777-935b65937d53",
      "location": [-1.2682636, 36.893482]
    }, {
      "shop_id": "4855236d-0092-4e47-bbc1-dede1e383487",
      "location": [-1.267465, 36.89549]
    }, {
      "shop_id": "b9393e3d-ce1a-40b9-8a6c-eff43e73ca3f",
      "location": [-1.2680333, 36.89495]
    }, {
      "shop_id": "f0c5a515-375a-4d87-8daf-0f5398d0ede5",
      "location": [-1.2666128, 36.897564]
    }, {
      "shop_id": "b591b385-7b28-4543-a751-2dfc0983bf00",
      "location": [-1.2670014, 36.898964]
    }, {
      "shop_id": "d6b8df8d-d31e-4e22-ae71-88a86823a17a",
      "location": [-1.2675103, 36.89922]
    }, {
      "shop_id": "a1e53db2-3c99-4ded-b9a7-c497740b4098",
      "location": [-1.2677478, 36.899338]
    }, {
      "shop_id": "f60a2469-db45-447d-ad4b-4136690ecb6f",
      "location": [-1.26814, 36.899315]
    }, {
      "shop_id": "3ef3d1ff-3b41-4f44-bf33-354747d2b34d",
      "location": [-1.2687268, 36.898193]
    }, {
      "shop_id": "46703c62-09bb-46f2-9bf9-399c93ab72dd",
      "location": [-1.2696948, 36.898556]
    }, {
      "shop_id": "51c4fe6a-ecde-4cf3-a678-6e57cf520d7b",
      "location": [-1.2672871, 36.90064]
    }, {
      "shop_id": "18b005ea-28a3-4c9c-8869-73bae5ca55c5",
      "location": [-1.2672583, 36.90074]
    }, {
      "shop_id": "cdcd9634-3884-43cc-8490-92c6bf83699c",
      "location": [-1.2663553, 36.900887]
    }, {
      "shop_id": "b774256a-bd22-46f3-8abb-feaf23cd2ccc",
      "location": [-1.2646967, 36.90234]
    }, {
      "shop_id": "c872a175-499f-4efa-aca5-33199e361039",
      "location": [-1.2645049, 36.90245]
    }, {
      "shop_id": "65c9a3db-d31b-4bba-96ac-18eacafe3d50",
      "location": [-1.2639186, 36.90301]
    }, {
      "shop_id": "41050190-9177-4611-96f0-913cd81e7e47",
      "location": [-1.2624338, 36.90404]
    }, {
      "shop_id": "054376ef-e279-4d83-9e81-c9711c4eac83",
      "location": [-1.2623585, 36.904]
    }, {
      "shop_id": "5df79553-d3ae-4d7c-8aec-00aab3b75461",
      "location": [-1.2607383, 36.905193]
    }, {
      "shop_id": "08484acb-5916-479d-ba99-93c85d1e925f",
      "location": [-1.2582517, 36.909805]
    }, {
      "shop_id": "326dfeaf-8507-4a0b-acaf-737fab3fe2ea",
      "location": [-1.2578437, 36.911892]
    }, {
      "shop_id": "8703756e-1d9e-4833-9751-f2b19ae21369",
      "location": [-1.2583081, 36.9121114]
    }, {
      "shop_id": "272b6486-af2c-4a56-803e-a900dab1591f",
      "location": [-1.2547852, 36.91148]
    }, {
      "shop_id": "d7f35aa8-04b4-422b-bf51-439b0b62c524",
      "location": [-1.25473892688751, 36.9113998413086]
    }, {
      "shop_id": "439b1b35-2c3f-4195-9980-a2825fd85e73",
      "location": [-1.2542977, 36.91149]
    }, {
      "shop_id": "3bdf0bb6-a839-4331-a011-638a8ed1c57f",
      "location": [-1.25412821769714, 36.9114227294922]
    }, {
      "shop_id": "3b7ec2a9-e02b-4551-a64a-a43180a7c2bf",
      "location": [-1.2531908, 36.911533]
    }, {
      "shop_id": "5fb2132d-e3e9-476d-9d19-5e1e41b6818b",
      "location": [-1.25319194793701, 36.9115295410156]
    }, {
      "shop_id": "0446c748-8bd5-4ec0-a63d-93e2587d6909",
      "location": [-1.2524619102478, 36.9118347167969]
    }, {
      "shop_id": "ec2adf06-7cb4-4e22-8717-546c20396f85",
      "location": [-1.2448791, 36.919315]
    }, {
      "shop_id": "46d60596-5d85-4552-bd2b-5a50055a9f89",
      "location": [-1.2522982, 36.91615]
    }, {
      "shop_id": "25446dd3-59fe-462c-ab0b-3043dc1601b5",
      "location": [-1.2531165, 36.915592]
    }, {
      "shop_id": "8207ea74-b14d-48b5-843b-2715249740bb",
      "location": [-1.2536922, 36.91565]
    }, {
      "shop_id": "b9e4a59e-3947-487e-998d-e97e53e770e6",
      "location": [-1.2537371, 36.91569]
    }, {
      "shop_id": "8fe473b1-8677-461d-a426-d9ec606037ca",
      "location": [-1.2538404, 36.915913]
    }, {
      "shop_id": "7f964e62-b47a-48a0-bb13-ca9721f471bc",
      "location": [-1.2535613, 36.915318]
    }, {
      "shop_id": "7b386d11-95d5-4cd1-bd02-0633b7699a07",
      "location": [-1.255321, 36.91599]
    }, {
      "shop_id": "b99f32be-6c1c-4887-98af-5a8530bf75b1",
      "location": [-1.2560645, 36.91644]
    }, {
      "shop_id": "78f8477c-6830-4677-a9d6-5e7eeefab981",
      "location": [-1.2571736574173, 36.9163665771484]
    }, {
      "shop_id": "36d40bb0-28b4-4020-a4d9-5664deb70a4f",
      "location": [-1.258585, 36.915627]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "BuruBuru",
    "route_id": "ad52851f-7f97-4186-a2e5-f9fae9249948",
    "matrix_info": {
      "DistanceMatrixAPI requests": 967,
      "cache_hit": "74%"
    },
    "distance": "54.43km",
    "path": "dsfG_se`FwvI|vCsAlMnDjGpDUdBpAb@Nh@UoAk^}Ok`@@?K^G}@yE`BdBePQ@c^xDCf@NTf@nEgH{CmZdPzCpAhEcKvAy@tBaCeKbZqY|Lf@IFOgDkTyIzKFNCJQG{HKEByE?kCD{S_BSI}@dAo@AE]@C|JfCLNhAz@fAz@l@z@j@Ut@tA|Dj@bCX}I{GoEeTb@mDzJnD_LqGD??SmIg@qBgfGfuNfvC",
    "shops": [{
      "shop_id": "cf81ed09-455c-4003-9d1c-352640ab9505",
      "location": [-1.2947946, 36.873608]
    }, {
      "shop_id": "cdb62c79-12df-4f24-af77-e60d35f0df9e",
      "location": [-1.2943717, 36.871296]
    }, {
      "shop_id": "2ead1cbe-2970-416d-b2ae-e3f86b1054c0",
      "location": [-1.2952461, 36.86996]
    }, {
      "shop_id": "0b46f291-0772-44d5-8641-da6775b84964",
      "location": [-1.2961384, 36.870068]
    }, {
      "shop_id": "66b0ac6e-17ed-48b0-9baf-93dd930e4d2f",
      "location": [-1.296648, 36.86966]
    }, {
      "shop_id": "35c26e07-7943-4569-a26c-8ed36adf4bd8",
      "location": [-1.2968266, 36.869576]
    }, {
      "shop_id": "8c430e8a-e387-4689-bc75-acb404d26e2c",
      "location": [-1.2970352, 36.86969]
    }, {
      "shop_id": "c314d1ee-b9d6-4564-8da8-cec8403b6c3a",
      "location": [-1.2966385, 36.874706]
    }, {
      "shop_id": "38286034-a8ce-4099-a173-b441d4943d2d",
      "location": [-1.2939333, 36.88005]
    }, {
      "shop_id": "84f7e3ad-ace3-493a-b9df-f94271c2d8a3",
      "location": [-1.2939417, 36.880054]
    }, {
      "shop_id": "8748be81-7455-470f-bb2d-782535555d8d",
      "location": [-1.2938814, 36.87989]
    }, {
      "shop_id": "70ab2b09-ed73-4193-a640-ae85c1a8c0bf",
      "location": [-1.29383957386017, 36.880199432373]
    }, {
      "shop_id": "53ad63ad-910a-4a9f-a120-759c436b15d1",
      "location": [-1.2927498, 36.879715]
    }, {
      "shop_id": "59cc8535-8d36-430e-9f90-bfba2f726888",
      "location": [-1.2932574, 36.88246]
    }, {
      "shop_id": "e1174556-f7c9-49c8-89a9-44d31c5350f6",
      "location": [-1.2931669, 36.882446]
    }, {
      "shop_id": "98d83270-a0cf-4c87-90e6-bff3ed92d1c7",
      "location": [-1.2881933, 36.881523]
    }, {
      "shop_id": "382ac3a7-529e-425a-aef4-c4a385f70825",
      "location": [-1.288165, 36.881317]
    }, {
      "shop_id": "09dae571-e961-446f-9e5d-123fd671fe2b",
      "location": [-1.2882463, 36.881214]
    }, {
      "shop_id": "3846fc58-9749-46fc-a8d4-6fc60aa8e16c",
      "location": [-1.2884526, 36.880173]
    }, {
      "shop_id": "1805c67d-257f-487a-b925-4f25649d1727",
      "location": [-1.2869705, 36.880947]
    }, {
      "shop_id": "7d919bf0-754d-426e-85ab-89fe88cc32e4",
      "location": [-1.2825803, 36.878197]
    }, {
      "shop_id": "4c2e77ec-1437-4068-8ad3-e96497b1f81a",
      "location": [-1.2833568, 36.87779]
    }, {
      "shop_id": "675a2dee-4141-4240-a1ce-811a28fa5968",
      "location": [-1.2843693, 36.879726]
    }, {
      "shop_id": "9e01377b-f469-464c-8263-c5d786b99cab",
      "location": [-1.2848144, 36.88002]
    }, {
      "shop_id": "ea5f684e-f9f5-44cd-abe3-b4495922cb30",
      "location": [-1.2853982, 36.88067]
    }, {
      "shop_id": "ec0e90c2-7408-4568-82a7-75a7e2b9948b",
      "location": [-1.2834541, 36.876328]
    }, {
      "shop_id": "76e29ab9-f784-41a5-b694-62e44ce5f54c",
      "location": [-1.2792015, 36.8741]
    }, {
      "shop_id": "a9868126-53c3-43a4-8b68-ab07761df69a",
      "location": [-1.2794007, 36.874146]
    }, {
      "shop_id": "1d75bced-ce9b-49a6-abcc-6ce468441ba9",
      "location": [-1.279442, 36.874226]
    }, {
      "shop_id": "ff3745b2-b881-40c7-a2ae-63479f81acf5",
      "location": [-1.2785985, 36.87765]
    }, {
      "shop_id": "29f8cf16-f9e7-4465-b394-184b4a75d80b",
      "location": [-1.2768714, 36.87559]
    }, {
      "shop_id": "11c65c55-4447-4399-adbc-1d1fe853c070",
      "location": [-1.276907, 36.87551]
    }, {
      "shop_id": "ff4835d5-029e-40c1-850f-e92ddf5ff80c",
      "location": [-1.276894, 36.875454]
    }, {
      "shop_id": "f7843fc9-1685-4fb2-9557-42b5efb4b56b",
      "location": [-1.2768, 36.87549]
    }, {
      "shop_id": "14cbb23d-2865-4bf9-b757-5e4db417dbef",
      "location": [-1.275217, 36.875546]
    }, {
      "shop_id": "a61fdb0e-7c62-40de-80cf-290b4d699fc1",
      "location": [-1.2751856, 36.875526]
    }, {
      "shop_id": "1d4d1658-96d4-47e9-a980-9c49dd383c26",
      "location": [-1.2741045, 36.875526]
    }, {
      "shop_id": "3efa6d9b-252e-4dcc-9ad7-b025c49d5870",
      "location": [-1.273395, 36.875504]
    }, {
      "shop_id": "e1879985-472d-4498-b17d-e8030c02f3f7",
      "location": [-1.270056, 36.87598]
    }, {
      "shop_id": "f932d491-7636-4241-8320-be3ad190c791",
      "location": [-1.2699648, 36.87603]
    }, {
      "shop_id": "bbe30501-056d-4e3e-b94c-b2664c254687",
      "location": [-1.26965129375458, 36.875675201416]
    }, {
      "shop_id": "7960ca87-c556-4888-b3d5-90631a9a0725",
      "location": [-1.2694119, 36.87569]
    }, {
      "shop_id": "4e39dc06-1cea-424c-beb0-63dcdb4e01c1",
      "location": [-1.2693827, 36.875835]
    }, {
      "shop_id": "7c54438a-753b-46c8-842a-2c64b46e157e",
      "location": [-1.2693874, 36.87586]
    }, {
      "shop_id": "42bdb591-7673-4e85-ac06-e729388cbc66",
      "location": [-1.2712983, 36.87518]
    }, {
      "shop_id": "5c383968-ab87-4fe3-b73d-d3f24a35348d",
      "location": [-1.27136528491974, 36.8751029968262]
    }, {
      "shop_id": "bc537685-8756-4abd-b8fd-a18c22b0b31b",
      "location": [-1.2717392, 36.874798]
    }, {
      "shop_id": "65778cf7-56fd-4a01-86f7-9c9a1db20511",
      "location": [-1.2721015, 36.874496]
    }, {
      "shop_id": "a324cc5b-b56f-44a6-af99-32be91427401",
      "location": [-1.2723258, 36.874195]
    }, {
      "shop_id": "33b51955-71b6-456f-ae46-87aece5d6b21",
      "location": [-1.2725542, 36.87431]
    }, {
      "shop_id": "205fdd07-efc6-475c-a3ed-48ac2859a9f1",
      "location": [-1.2728211, 36.87388]
    }, {
      "shop_id": "0c8eef63-4de7-40c0-9967-174ff2a9613f",
      "location": [-1.2737674, 36.87366]
    }, {
      "shop_id": "b1dc42d4-c754-41dd-ba9b-c8a188262747",
      "location": [-1.2744298, 36.873535]
    }, {
      "shop_id": "60b3357e-b3d1-4092-b30b-ad4a0aeb0f22",
      "location": [-1.2726767, 36.87495]
    }, {
      "shop_id": "cfaa0aad-e93b-4b18-a3da-f358babc661e",
      "location": [-1.2716397, 36.87834]
    }, {
      "shop_id": "27c77c8c-b1e7-410c-a152-ac2da4e51b9d",
      "location": [-1.2718151, 36.879208]
    }, {
      "shop_id": "39ea076a-614e-47ac-9eee-95955f81198c",
      "location": [-1.2737172, 36.87833]
    }, {
      "shop_id": "0438e896-ec19-4041-addf-abb3ca6b7aa5",
      "location": [-1.2716398, 36.879696]
    }, {
      "shop_id": "fd4d4bfb-3a0b-4b13-a8fc-c395f170c858",
      "location": [-1.2716706, 36.8797]
    }, {
      "shop_id": "bd4b6637-68e2-4be3-b78f-73e8a76cb5b9",
      "location": [-1.2716727, 36.879803]
    }, {
      "shop_id": "2aa6563f-00dc-4bad-bda9-081d077e3743",
      "location": [-1.27, 36.88]
    }, {
      "shop_id": "36d3c6d2-ba18-43a3-879f-3d12ac1585ce",
      "location": [-1.2694339, 36.922115]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kariobangi",
    "route_id": "2c3d618a-c018-44a3-ad03-905667cab539",
    "matrix_info": {
      "DistanceMatrixAPI requests": 504,
      "cache_hit": "71%"
    },
    "distance": "28.32km",
    "path": "`h{F{`g`FJj@s_A|{A@q@yg@uEo@Ek@FkDvd@IDwAMgFk@jAfs@uOqa@AE^iEgLuHLoCpKtC}FcKoH|EyF|@g@e@{AcWgR{DDvBf@pLfF`HtCf@y@fHwAb@jExEoJFt@pAhDhH|@kCnFiA~@nGmX~@kPWgXy}@a`AuyAhmBzcAgKpAveEmbA",
    "shops": [{
      "shop_id": "ec43ae5d-2697-4e02-a6ed-0cba5aa69e73",
      "location": [-1.2917548418045, 36.9050445556641]
    }, {
      "shop_id": "7d8f4788-d233-4a70-8cd1-7d12fceca3ff",
      "location": [-1.28141415119171, 36.8901748657227]
    }, {
      "shop_id": "8f1211cc-3169-4094-bb70-bf4bb0ba8788",
      "location": [-1.2814168, 36.890423]
    }, {
      "shop_id": "e1d7372b-2495-4c3b-848e-5296e99fdadd",
      "location": [-1.2748919, 36.89149]
    }, {
      "shop_id": "9583516c-12aa-4bfa-aa28-6406543e1e6f",
      "location": [-1.2746502, 36.89152]
    }, {
      "shop_id": "2175d10f-0f9e-4197-845e-d1ce8029f279",
      "location": [-1.2744266, 36.89148]
    }, {
      "shop_id": "6c0c5077-9fdc-4639-b5c7-3ba107e583e8",
      "location": [-1.2735733, 36.8854367]
    }, {
      "shop_id": "1eb37714-b239-4dbd-a052-9aee097a94d6",
      "location": [-1.273523, 36.885406]
    }, {
      "shop_id": "c6576e7f-0c2d-4d03-8677-97352c3812df",
      "location": [-1.2730805, 36.88548]
    }, {
      "shop_id": "752091b9-51c6-48fa-ba2b-351d3a1d365a",
      "location": [-1.2719163, 36.885704]
    }, {
      "shop_id": "95f35faf-9ea0-4d7b-bbe9-86281c4ce16e",
      "location": [-1.2723018, 36.877335]
    }, {
      "shop_id": "9b07cb58-c7b5-45f6-a004-7f7ef42fe231",
      "location": [-1.2696345, 36.882866]
    }, {
      "shop_id": "683ed649-e35e-43b6-bb04-7e530e4c6dc7",
      "location": [-1.2696224, 36.882896]
    }, {
      "shop_id": "b95cb824-76f1-47c5-9cc8-37ebe0f328d1",
      "location": [-1.2697765827179, 36.8839111328125]
    }, {
      "shop_id": "1ee3b505-f480-4884-b26c-73d9fdd2daa0",
      "location": [-1.267656, 36.885464]
    }, {
      "shop_id": "61213218-0233-4527-8812-7066f4adeec2",
      "location": [-1.2677325, 36.886177]
    }, {
      "shop_id": "c29b4ed3-a95d-4de6-b438-49c146cbd3a7",
      "location": [-1.2697355, 36.88543]
    }, {
      "shop_id": "0fb1272a-6f92-4ede-be3a-f8c445430b3e",
      "location": [-1.26846897602081, 36.8873748779297]
    }, {
      "shop_id": "2c5b4983-c877-4a68-a39b-534535b16c07",
      "location": [-1.2669519, 36.88626]
    }, {
      "shop_id": "d6dad581-9d9f-49c5-8328-8b88b7fa0af9",
      "location": [-1.26569581031799, 36.8859481811523]
    }, {
      "shop_id": "5441ba04-6f38-45ab-950d-089bd5fa34d2",
      "location": [-1.26549780368805, 36.8861351013184]
    }, {
      "shop_id": "70154b26-be07-4f01-9418-50831a890b9e",
      "location": [-1.2650439, 36.890003]
    }, {
      "shop_id": "989954a4-315b-4e7a-bb18-db81c2025687",
      "location": [-1.2619569, 36.89094]
    }, {
      "shop_id": "c969414e-62cb-43cd-a304-d0a579cb863c",
      "location": [-1.2619928, 36.89034]
    }, {
      "shop_id": "3c774902-8bc6-4493-8b3f-db3c0aa761b2",
      "location": [-1.2621909, 36.888165]
    }, {
      "shop_id": "64bb636e-35ce-44d3-8ad7-01d937231095",
      "location": [-1.26334524154663, 36.88671875]
    }, {
      "shop_id": "67dfa210-f885-4c21-a077-50c2245d350c",
      "location": [-1.26409947872162, 36.8865165710449]
    }, {
      "shop_id": "3eb3c61d-d882-4eff-b77f-d0bc0bebffc2",
      "location": [-1.263807, 36.88504]
    }, {
      "shop_id": "b34d267c-de04-4557-88c9-9a7e1d29b012",
      "location": [-1.2633661031723, 36.8848648071289]
    }, {
      "shop_id": "1684a749-f874-4e19-a95b-b1361abe22a6",
      "location": [-1.2643939, 36.883774]
    }, {
      "shop_id": "b039db3e-cb5f-4af2-b848-b342c824cc32",
      "location": [-1.2625455, 36.883728]
    }, {
      "shop_id": "85a32477-80da-42fb-b71a-dc44a435bf27",
      "location": [-1.2628231, 36.883324]
    }, {
      "shop_id": "399d9766-92e1-4e11-b9cd-4aa7a0bf4565",
      "location": [-1.2636695, 36.88183]
    }, {
      "shop_id": "e4a8292a-9609-4975-95ec-4477136e4d4f",
      "location": [-1.26397836208344, 36.8825263977051]
    }, {
      "shop_id": "088f7f0e-3eec-4708-83e7-15e8aec9a142",
      "location": [-1.26518070697784, 36.8829040527344]
    }, {
      "shop_id": "abf832d7-645b-49bd-94f5-4750d7c82aca",
      "location": [-1.2654998, 36.881542]
    }, {
      "shop_id": "0512c49b-2c3a-4006-ad02-2fdd0b763fbe",
      "location": [-1.2614282, 36.881218]
    }, {
      "shop_id": "cc848cb1-ec7e-40d5-91a7-92cb62a4081a",
      "location": [-1.25864803791046, 36.8813438415527]
    }, {
      "shop_id": "7add8242-0ef2-4dc1-bd48-b77761aa3625",
      "location": [-1.254605, 36.891388]
    }, {
      "shop_id": "283ea6d0-4ebd-4ad1-be7d-d281392cd3e4",
      "location": [-1.2441994, 36.9059]
    }, {
      "shop_id": "3c4e1866-a3bf-4eca-a7ae-6d3a3e11c0b7",
      "location": [-1.2618546, 36.89488]
    }, {
      "shop_id": "9492495c-8c0e-4d6d-9ee8-8d9fa80178ac",
      "location": [-1.2598906, 36.89447]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kayole",
    "route_id": "2bc68658-8279-4bb8-b5d5-d02a20d1ac57",
    "matrix_info": {
      "DistanceMatrixAPI requests": 363,
      "cache_hit": "76%"
    },
    "distance": "11.28km",
    "path": "`h{F{`g`F}z@~DiFkFsACqB}AwC}FyBqDsWd@{AyVkFj@{AgDg@e@zSEUrCbDcP|CvBh@hEeCxHrGxBpBsCvAiJh@_B|B`AdDiNxBfHsFdSaBhBWVgE`EtBxCp@b@WXxAMGgAzAs@jDqDm@aArJzBh@u@lSmKza@ti@",
    "shops": [{
      "shop_id": "4faf08b9-724a-49c1-af50-319bb926a992",
      "location": [-1.2820979, 36.904297]
    }, {
      "shop_id": "00aad427-0cfd-493c-9f3a-9c164085c52d",
      "location": [-1.2809258, 36.90548]
    }, {
      "shop_id": "59f2710a-1ea8-4ae9-97cd-b875d3c3ed0a",
      "location": [-1.2805089, 36.9055]
    }, {
      "shop_id": "5d2c361f-8e94-4147-95b6-6eba0835e997",
      "location": [-1.2799408, 36.905968]
    }, {
      "shop_id": "300ad1be-84e3-49b0-9fcc-815cafd6750e",
      "location": [-1.27918124198914, 36.9072380065918]
    }, {
      "shop_id": "94a40422-43e7-4107-ad3b-59c136483b49",
      "location": [-1.2785707, 36.908134]
    }, {
      "shop_id": "f284080e-6bcc-4d11-85bb-ff4d3cd2caef",
      "location": [-1.2746328, 36.907936]
    }, {
      "shop_id": "04998ae2-0e90-427a-af84-3cf6bcd74f84",
      "location": [-1.2741708, 36.91175]
    }, {
      "shop_id": "00e26d23-9bfc-4afe-a614-eb4430a5d2bd",
      "location": [-1.2729937, 36.911526]
    }, {
      "shop_id": "7f6c3dce-f314-4768-a2c2-c7d4af295965",
      "location": [-1.2725255, 36.912365]
    }, {
      "shop_id": "5c477bd9-3ec0-4360-8138-adece065d764",
      "location": [-1.2723253, 36.912556]
    }, {
      "shop_id": "be3bf2e3-f7b7-4fe3-bc0c-d56f45c71def",
      "location": [-1.2756689, 36.91259]
    }, {
      "shop_id": "b35bda7d-429c-429b-8401-0729a9b00ed3",
      "location": [-1.2755597, 36.91185]
    }, {
      "shop_id": "45a6f233-940f-4d35-9d66-e6cb9579a20f",
      "location": [-1.2763754, 36.914585]
    }, {
      "shop_id": "aec45927-9101-4844-8a7b-2d55e74ba69e",
      "location": [-1.277173, 36.91399]
    }, {
      "shop_id": "e6a180ff-1687-4352-ad17-972c2b3d3a31",
      "location": [-1.2773768, 36.912983]
    }, {
      "shop_id": "bdbc31ff-ccd4-4bde-8445-fd13a6e8ca08",
      "location": [-1.2767099, 36.911407]
    }, {
      "shop_id": "2b3e1281-12db-4e4d-9853-d5ee39e521ba",
      "location": [-1.2780906, 36.9108]
    }, {
      "shop_id": "f008429b-240f-4a6e-8ec9-38d671e182af",
      "location": [-1.2786633, 36.91154]
    }, {
      "shop_id": "84bfe786-5d4f-41b8-8da8-bd385f691e14",
      "location": [-1.279095, 36.913345]
    }, {
      "shop_id": "cdec80e6-7977-4059-8bc8-d26877c9cfc8",
      "location": [-1.279307, 36.913834]
    }, {
      "shop_id": "2d2cf48d-6958-479b-a319-a8bf458867f7",
      "location": [-1.2799449, 36.9135]
    }, {
      "shop_id": "66b8c69a-0fc8-45e6-a4a1-6de0ad058522",
      "location": [-1.2807682, 36.915955]
    }, {
      "shop_id": "82a872d9-2617-41de-85da-e4e7490660fc",
      "location": [-1.2813792, 36.914474]
    }, {
      "shop_id": "83db71bb-982f-4d20-9538-3869f8bcc6f5",
      "location": [-1.2801648, 36.911243]
    }, {
      "shop_id": "a3a6691b-54b9-4fbd-bc97-96986dede6e9",
      "location": [-1.2796667, 36.910706]
    }, {
      "shop_id": "bd214906-202a-45f3-b10b-06d5a27791bd",
      "location": [-1.2795469, 36.91059]
    }, {
      "shop_id": "0b13f63d-93ab-447f-b8fe-5656957f1812",
      "location": [-1.2785486, 36.90962]
    }, {
      "shop_id": "e04a4d69-8e6c-4164-b4c3-918fe04ad12d",
      "location": [-1.2791392, 36.908848]
    }, {
      "shop_id": "d42e6568-3857-4222-948e-4b5ad502772b",
      "location": [-1.2793856, 36.90867]
    }, {
      "shop_id": "9dc8bf4f-6aff-44b4-aa72-d37e46094b54",
      "location": [-1.2792718, 36.908535]
    }, {
      "shop_id": "0f0be611-c416-4b30-8090-ce1d5f5cc7af",
      "location": [-1.2797189, 36.908607]
    }, {
      "shop_id": "d6335bbe-6c7c-4452-8d31-b18a58704986",
      "location": [-1.2796835, 36.908966]
    }, {
      "shop_id": "024b6423-37f6-4d7e-a346-f249a6a805b2",
      "location": [-1.2801402, 36.90923]
    }, {
      "shop_id": "11c3657a-4cd9-45ec-822e-0a4cf704b233",
      "location": [-1.280996, 36.91012]
    }, {
      "shop_id": "ffd0ac18-bfbd-4403-8838-e669cad43c23",
      "location": [-1.2807668, 36.91045]
    }, {
      "shop_id": "e47ab21d-e37e-4735-bd15-e04ce057b9c9",
      "location": [-1.2826326, 36.909832]
    }, {
      "shop_id": "fc3b010d-17f4-438d-b7d4-7c02345ae753",
      "location": [-1.2828405, 36.910095]
    }, {
      "shop_id": "e57ff41b-fc8f-4b59-9c74-8391a17d6a3a",
      "location": [-1.2861129, 36.91209]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kahawa 2",
    "route_id": "cd318fe6-b8ba-49d3-bda6-40361f55de57",
    "matrix_info": {
      "DistanceMatrixAPI requests": 733,
      "cache_hit": "73%"
    },
    "distance": "35.33km",
    "path": "|qoF_r``FyrE_zDzGieCwCh@T_BdDgIFS[cGtAyHEjD}Jd@_FjOFNnEYIuGuNoOaI}Iw@p@{D_DQ@g@J}CsC}CcCKDyBqAOC`@ELEKVC@??gBOkA|AFHH[dJzA~_@lBhAVfKbKbA}CzCiMrMsh@e@lDnFiB``@kuAIq@uKuWvHeD}BiS|d@bOy@aEfRskAeAV~@yCnaBppR",
    "shops": [{
      "shop_id": "25fe421b-0894-4883-a12f-7d8656708ebb",
      "location": [-1.1979407, 36.90208]
    }, {
      "shop_id": "edb78145-8106-4d86-b4c1-75dde6621f49",
      "location": [-1.1993645, 36.923573]
    }, {
      "shop_id": "8412b5c8-d372-49ef-9c24-a65e9b79efea",
      "location": [-1.1986015, 36.923355]
    }, {
      "shop_id": "26726d27-ba3f-4755-9380-c2bba0c6561c",
      "location": [-1.1987092, 36.923836]
    }, {
      "shop_id": "558d0fc1-b6af-4dc5-aee8-864c64c5963c",
      "location": [-1.1995363, 36.92548]
    }, {
      "shop_id": "c2061227-0859-4d8e-93ed-1b1837598ea1",
      "location": [-1.1995771, 36.92558]
    }, {
      "shop_id": "2a49ea89-83df-4050-b59a-f2886005f97c",
      "location": [-1.1994417, 36.92688]
    }, {
      "shop_id": "43bd8cf2-8ec2-4c6b-9103-c9dcd5c4d4bf",
      "location": [-1.1998723, 36.92845]
    }, {
      "shop_id": "3af5245e-cf2c-4d54-98a2-80b21a4d9217",
      "location": [-1.1998428, 36.927593]
    }, {
      "shop_id": "ed9fa4e5-e6f6-4b53-ac8e-cb180b3cceb7",
      "location": [-1.1979312, 36.927402]
    }, {
      "shop_id": "49c581d9-0292-49e8-bdb2-890d5d488f09",
      "location": [-1.196806, 36.924778]
    }, {
      "shop_id": "bb339db4-5e25-437f-8f3c-59635dc794ab",
      "location": [-1.196849, 36.9247]
    }, {
      "shop_id": "5c59d896-420b-4349-9f94-c9c9289127cb",
      "location": [-1.1978927, 36.924828]
    }, {
      "shop_id": "19c7212f-9a5e-42a7-9cb8-c499e4111f7b",
      "location": [-1.1978385, 36.926216]
    }, {
      "shop_id": "f735ac6c-278d-4eca-a1e2-6bdbb6de1478",
      "location": [-1.1953329, 36.928856]
    }, {
      "shop_id": "fac9be7c-4775-4d36-8c89-1d82b8cbea46",
      "location": [-1.1937182, 36.93061]
    }, {
      "shop_id": "11586154-848c-4ba8-b526-45e7d052a70a",
      "location": [-1.1934447, 36.930355]
    }, {
      "shop_id": "229ab6e1-733b-4559-8b12-a4ae7a6daad6",
      "location": [-1.192499, 36.93116]
    }, {
      "shop_id": "ecb1b0cd-edb5-4cd6-b7d5-a95d1761b575",
      "location": [-1.192414, 36.931152]
    }, {
      "shop_id": "eeac5cdf-846a-4881-bc18-229c8853eac2",
      "location": [-1.19220638275146, 36.9310874938965]
    }, {
      "shop_id": "886e8b9a-4bfa-4e93-bc50-536c0b933423",
      "location": [-1.1914171, 36.93183]
    }, {
      "shop_id": "77222911-9aa9-48c3-9ab7-86dd5ee8c815",
      "location": [-1.19062638282776, 36.9324913024902]
    }, {
      "shop_id": "82b462c5-562d-429f-84ba-f185cdb3ac5a",
      "location": [-1.1905684, 36.932457]
    }, {
      "shop_id": "1b182de7-c6a0-443a-9616-0d863462efb2",
      "location": [-1.1899616, 36.932873]
    }, {
      "shop_id": "6a6a08d5-0e76-4361-afe2-51bc2d4c26eb",
      "location": [-1.189884, 36.93289]
    }, {
      "shop_id": "d81c568e-8b5a-4cc1-bb98-4f3b8816a2e9",
      "location": [-1.190046, 36.932915]
    }, {
      "shop_id": "0e0f0612-28e6-42e7-9968-ff268084b49c",
      "location": [-1.19011747837067, 36.9329452514648]
    }, {
      "shop_id": "88bf8636-040f-4a5a-8177-305c047b633b",
      "location": [-1.190056, 36.932835]
    }, {
      "shop_id": "930dab0b-21b9-4c9f-a107-940d2d621ff7",
      "location": [-1.190041, 36.93282]
    }, {
      "shop_id": "2d160fd5-4c19-4092-b43b-115209946c48",
      "location": [-1.190035, 36.932823]
    }, {
      "shop_id": "5081f38e-57b7-4864-bfa3-f80f80adbfaf",
      "location": [-1.1895214, 36.9329]
    }, {
      "shop_id": "fe985da7-83fd-414a-8af2-821edbfd3053",
      "location": [-1.1891352, 36.932426]
    }, {
      "shop_id": "c7edb724-cf26-4bc5-9992-42e051b1df68",
      "location": [-1.1891761, 36.932377]
    }, {
      "shop_id": "224b5e91-3f6e-4fcd-b05a-57e28db39aee",
      "location": [-1.1892312, 36.93252]
    }, {
      "shop_id": "984cf258-e41c-445a-b2cb-49b40a766514",
      "location": [-1.191015, 36.93206]
    }, {
      "shop_id": "6ad51190-970a-4895-b114-b2c14c0fe856",
      "location": [-1.196296, 36.931507]
    }, {
      "shop_id": "99460906-0d29-43b7-be72-da082dc428ff",
      "location": [-1.196667, 36.931385]
    }, {
      "shop_id": "8901e666-20c1-4bbc-afa2-bf6653ac7289",
      "location": [-1.1986291, 36.929447]
    }, {
      "shop_id": "c7e19e72-27f6-41c9-8bdd-35bf32c970b4",
      "location": [-1.1989712, 36.930237]
    }, {
      "shop_id": "507109fd-64b7-46a5-81f1-0e9a12c253e8",
      "location": [-1.19975304603577, 36.9325294494629]
    }, {
      "shop_id": "b437badb-d58f-4373-99be-bfafe23564df",
      "location": [-1.2020882, 36.939186]
    }, {
      "shop_id": "3440824b-1a8f-4f65-b11a-42ed3cd51ad6",
      "location": [-1.201895, 36.938324]
    }, {
      "shop_id": "b33c9ae4-e9ca-4854-bebe-4798fb5d8bc5",
      "location": [-1.2030982, 36.93885]
    }, {
      "shop_id": "4e6c00f3-0738-4bf7-9311-7affb39e97a8",
      "location": [-1.20838558673859, 36.9526748657227]
    }, {
      "shop_id": "8827b34b-da7e-43c4-84ed-45b411649145",
      "location": [-1.20833790302277, 36.9529151916504]
    }, {
      "shop_id": "ab71ad01-f800-4854-9789-7b6b999fc3c9",
      "location": [-1.206307, 36.95687]
    }, {
      "shop_id": "72681e3f-1a12-47b1-8f1c-7183c5b3134f",
      "location": [-1.20787239074707, 36.9577026367188]
    }, {
      "shop_id": "95c31dfe-9ecf-4c16-97f0-74e420e4f843",
      "location": [-1.2072427, 36.960953]
    }, {
      "shop_id": "cdaac418-77c1-4053-8d7a-823fcf8cb249",
      "location": [-1.2133054, 36.958366]
    }, {
      "shop_id": "daae795a-95c5-460c-83bd-813124026726",
      "location": [-1.2130239, 36.95934]
    }, {
      "shop_id": "692472e8-d0c7-47d5-8cb0-97aeb98096a9",
      "location": [-1.2160988, 36.971596]
    }, {
      "shop_id": "428a707a-8e76-4676-b052-18ca55aa9954",
      "location": [-1.2157491, 36.97148]
    }, {
      "shop_id": "7bc2b2f0-1f55-4a7d-9d35-0de0c7dabe98",
      "location": [-1.2160712, 36.972248]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kamakis",
    "route_id": "be3557d6-7d12-4a10-a406-191541374e18",
    "matrix_info": {
      "DistanceMatrixAPI requests": 519,
      "cache_hit": "85%"
    },
    "distance": "72.42km",
    "path": "dsfG_se`FwnRywI`n@avEoE_IuEcNeb@vRUJ?TAFccBcE|@CbAX{Md^{FdQb~@ms@nw@rCe@kEzPqiArf@kg@lM{E`BnDjl@~f@BKh@DoB}VdbAyvFGACl@L{C?KDC?ChJvtED@ai@ndAmDOcLlXh@eAcGbL\\~DCZ|PtNsT}AjB{BZH_MrB}@zBQTt@BwDdGg@ZqQtd@Wh@`BNPLELWBgAEEF_@QwAjB^BryOlqO",
    "shops": [{
      "shop_id": "99d545cf-69ea-4bf5-9778-6b94a072b894",
      "location": [-1.2499933, 36.953094]
    }, {
      "shop_id": "ff11d2a7-3e35-4bb2-9fa8-b3cd6fb70721",
      "location": [-1.2575206, 36.987503]
    }, {
      "shop_id": "b1c0b8c1-8476-4eec-a48e-35f4ce286a98",
      "location": [-1.2564768, 36.9891]
    }, {
      "shop_id": "9df92967-09b7-4335-a625-969617adba1f",
      "location": [-1.2554095, 36.99152]
    }, {
      "shop_id": "d36ed9ca-f764-4a87-9a39-c7eb76d6f668",
      "location": [-1.2497817, 36.98836]
    }, {
      "shop_id": "657a55bf-027b-4845-92cb-f255ce50a9a2",
      "location": [-1.24966824054718, 36.9883041381836]
    }, {
      "shop_id": "73c1fe3c-0bab-4187-8541-07e04e9f0b33",
      "location": [-1.2496749162674, 36.9881858825684]
    }, {
      "shop_id": "27ba0718-9801-42a2-a051-b1af947bf32a",
      "location": [-1.2496623, 36.98815]
    }, {
      "shop_id": "96a3a398-9aad-4e4d-b134-36e91144dd98",
      "location": [-1.23364281654358, 36.989128112793]
    }, {
      "shop_id": "a636e971-71a3-4025-bf6e-a7a4f02da2d8",
      "location": [-1.2339509, 36.98915]
    }, {
      "shop_id": "17442c12-64de-4052-a433-e2ed29469224",
      "location": [-1.2342885, 36.989017]
    }, {
      "shop_id": "638d126e-b543-4e5e-8965-e889a57523a6",
      "location": [-1.231914, 36.984028]
    }, {
      "shop_id": "e7e014ce-110c-459a-97a2-1df04decbdcc",
      "location": [-1.23065114021301, 36.9811172485352]
    }, {
      "shop_id": "fac6fb72-f863-4e9d-9944-94023e35f87d",
      "location": [-1.24075210094452, 36.9895095825195]
    }, {
      "shop_id": "21954b4c-8af5-4d07-8534-7255f2863c1e",
      "location": [-1.2497865, 36.98877]
    }, {
      "shop_id": "9f218d29-acbc-4946-9a68-cacbb322f76e",
      "location": [-1.2495958, 36.989788]
    }, {
      "shop_id": "96a81123-4aa2-4e1b-ac9f-799e29b8a2b4",
      "location": [-1.2524645, 37.001724]
    }, {
      "shop_id": "caeed305-ec4b-498d-af37-3c48b9f87f17",
      "location": [-1.2588049, 37.008175]
    }, {
      "shop_id": "7472cc75-a576-47b4-af99-b3609dbf3726",
      "location": [-1.2611108, 37.00928]
    }, {
      "shop_id": "d4503f02-7f94-454f-9388-726e58c1ab2e",
      "location": [-1.2615988, 37.0084]
    }, {
      "shop_id": "7f3cba4f-1492-42dc-8a5d-152c3135fc85",
      "location": [-1.2688643, 37.002]
    }, {
      "shop_id": "5f785cdb-6b25-4245-b71d-e1d9e3c18d84",
      "location": [-1.2688806, 37.00206]
    }, {
      "shop_id": "8067c3be-0d3f-4ad1-8c8a-1c1d19780934",
      "location": [-1.2690867, 37.00203]
    }, {
      "shop_id": "bcbde01c-9cff-4653-bc04-02b4ce99a7ae",
      "location": [-1.2685252, 37.005856]
    }, {
      "shop_id": "cf535fdb-59b3-487c-9ace-8093d67454b1",
      "location": [-1.2792786, 37.045506]
    }, {
      "shop_id": "3b0b8bfc-dde8-4a6d-8183-6ca6a8552955",
      "location": [-1.2792387, 37.04552]
    }, {
      "shop_id": "f21c7c6d-fbaf-470f-a9a8-58b40b0909f1",
      "location": [-1.2792183, 37.045288]
    }, {
      "shop_id": "c52edfb6-a37c-4292-8855-6c1ec9f14ba1",
      "location": [-1.2792885, 37.04607]
    }, {
      "shop_id": "743a0314-aa9d-4bec-9a13-edd1afd9b3b3",
      "location": [-1.2792913, 37.046127]
    }, {
      "shop_id": "c530fbec-40dc-4260-924e-436b415d77b7",
      "location": [-1.279316, 37.04615]
    }, {
      "shop_id": "f94eda7f-27fa-4cef-8763-eaf63aef0874",
      "location": [-1.2793179, 37.04617]
    }, {
      "shop_id": "73ac3395-f10c-4722-9b5c-105e6faf6a40",
      "location": [-1.2811311, 37.011967]
    }, {
      "shop_id": "14f3c229-e105-4a46-aa88-c4b829223b23",
      "location": [-1.2811552, 37.011955]
    }, {
      "shop_id": "5d971ce6-e81b-4067-8038-e8d429e7e2e5",
      "location": [-1.2744287, 37.000835]
    }, {
      "shop_id": "0a9eb82a-43f8-40b4-9056-a135377f8178",
      "location": [-1.2735583, 37.000923]
    }, {
      "shop_id": "61809680-ae55-4de7-8ae2-0c1c7d81bf33",
      "location": [-1.2714584, 36.99685]
    }, {
      "shop_id": "dc215b8c-a723-4716-8a81-2a92bff1ed9b",
      "location": [-1.2716737, 36.997204]
    }, {
      "shop_id": "6dfd6366-7e64-402b-b8be-c862814104cb",
      "location": [-1.270369, 36.995102]
    }, {
      "shop_id": "da5610d9-5400-4780-8cb1-a3a5f2466611",
      "location": [-1.2705207, 36.99414]
    }, {
      "shop_id": "360870e8-e8ac-4c98-b110-2a4c580e5e86",
      "location": [-1.2705041, 36.994003]
    }, {
      "shop_id": "8c0d1cc0-419a-4af8-b467-80ac260e04e8",
      "location": [-1.2733729, 36.99149]
    }, {
      "shop_id": "a6af8751-dcbc-456a-ac7e-0885ceab670f",
      "location": [-1.2699114, 36.99196]
    }, {
      "shop_id": "c83559b6-8aa8-48d0-9cc2-b4c9c49a7309",
      "location": [-1.2704482, 36.992584]
    }, {
      "shop_id": "58a07775-78e5-4ccb-9a2e-7386739be302",
      "location": [-1.27058708667755, 36.9925270080566]
    }, {
      "shop_id": "d396d993-7bf3-4b6b-aea3-44a7800a006f",
      "location": [-1.2683492, 36.991947]
    }, {
      "shop_id": "aef4098a-dccf-4d60-ab20-c4a136875cb0",
      "location": [-1.2680424, 36.991333]
    }, {
      "shop_id": "85ec0a0b-0983-48a6-8a80-71bc931971d3",
      "location": [-1.2679507, 36.991222]
    }, {
      "shop_id": "0d037a2c-acea-4de7-ab34-38a3c0c31f5d",
      "location": [-1.2682157, 36.991196]
    }, {
      "shop_id": "d8b49651-ca09-43a3-98ed-76835f486d6d",
      "location": [-1.2673038, 36.98989]
    }, {
      "shop_id": "5382972f-740a-4eee-a7cd-8726bb452e4c",
      "location": [-1.2670989, 36.989746]
    }, {
      "shop_id": "601bab4f-cf7b-468e-9390-c28c16e8e997",
      "location": [-1.2641312, 36.98372]
    }, {
      "shop_id": "12e2233f-910b-4a84-8db7-18d974b15dfb",
      "location": [-1.2640117, 36.983505]
    }, {
      "shop_id": "29321378-2b01-4ea2-87cf-31f6fb130402",
      "location": [-1.264499, 36.98343]
    }, {
      "shop_id": "6736514f-87bf-466e-8ca7-2f1173adbeed",
      "location": [-1.2645853, 36.983356]
    }, {
      "shop_id": "6ba2444d-6b34-456f-875a-40b059951744",
      "location": [-1.2645591, 36.98329]
    }, {
      "shop_id": "fc068dac-614b-419d-9243-dd7c3a75d050",
      "location": [-1.264442, 36.98327]
    }, {
      "shop_id": "b6c6dd05-8d5f-473f-b420-d1f2e2bdfe80",
      "location": [-1.2640767, 36.983295]
    }, {
      "shop_id": "7523eabe-979c-411a-a40f-4177ec140a17",
      "location": [-1.264048, 36.98326]
    }, {
      "shop_id": "aeedb841-8e89-4a3e-87af-84bb27f1239f",
      "location": [-1.2638948, 36.983345]
    }, {
      "shop_id": "d8c92a9d-ae0f-4b31-b53f-c4887df7e2ba",
      "location": [-1.2634538, 36.982807]
    }, {
      "shop_id": "25cd4d7b-047e-45d2-a024-17b8365bcddb",
      "location": [-1.2636096, 36.982788]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kikuyu",
    "route_id": "a153b9a0-e018-4389-9f66-c2f6799a8aaa",
    "matrix_info": {
      "DistanceMatrixAPI requests": 391,
      "cache_hit": "80%"
    },
    "distance": "77.07km",
    "path": "`z|Fedx_FtsCxhGshJ|uU_@TGFyeAfUr@wC`IaI\\OU[aStDRnBO~CoGp@pDdD{Z~GpC~FbEyMcUwJmR|ClRvF[E?GMF@WCQ[PCDWBA?Fj@a|Gz{@qBoIbpGon@ADnExCbDvK~A}CZ[|AwI@GMH@@C?IEHOAAxnI_c_@",
    "shops": [{
      "shop_id": "fc66ff3a-a5ac-48f5-bca8-a6198a814105",
      "location": [-1.3234771490097, 36.7864570617676]
    }, {
      "shop_id": "731fb063-7591-4c3d-ad41-b4af8850fe90",
      "location": [-1.265624, 36.67015]
    }, {
      "shop_id": "2d0c2814-135b-4ea7-a2ae-cd341b905a56",
      "location": [-1.2654576, 36.67004]
    }, {
      "shop_id": "632e9236-3769-4b09-ade8-07069f24c474",
      "location": [-1.2654177, 36.67]
    }, {
      "shop_id": "942361d9-c98a-40a4-8acd-44c3a2bf82fd",
      "location": [-1.2540936, 36.66644]
    }, {
      "shop_id": "e713d97c-2e57-4af1-8924-ed8b500a2aa6",
      "location": [-1.2543503, 36.667202]
    }, {
      "shop_id": "40ae4816-9b96-49af-98b7-23040cf2c313",
      "location": [-1.2559572, 36.668808]
    }, {
      "shop_id": "a8eaf3e1-eb7b-4c56-b455-3391cb873412",
      "location": [-1.2561103, 36.668888]
    }, {
      "shop_id": "6bd596b3-04af-4343-9d64-a2878307cf98",
      "location": [-1.2559977, 36.669033]
    }, {
      "shop_id": "f17be675-9483-4150-aecd-b87cbf99ec30",
      "location": [-1.2527907, 36.668118]
    }, {
      "shop_id": "052b8e82-3441-46b9-867b-e69b7f48f6a9",
      "location": [-1.2528892, 36.667557]
    }, {
      "shop_id": "1ed1fd7b-376d-496a-8b9b-e093bcda9736",
      "location": [-1.2528143, 36.666763]
    }, {
      "shop_id": "d8e1ee44-bbf6-4464-a9b2-f477adedfc85",
      "location": [-1.2514466, 36.666508]
    }, {
      "shop_id": "56fb5373-d3c5-4efb-a008-e8688bceedb7",
      "location": [-1.2523437, 36.665676]
    }, {
      "shop_id": "6b54b144-3689-416b-bfa9-9f070c41109b",
      "location": [-1.247877, 36.664238]
    }, {
      "shop_id": "60d8b4f3-f514-4474-aced-9c79202261f5",
      "location": [-1.2486064, 36.662956]
    }, {
      "shop_id": "1f8d4676-9b6e-411b-b827-b67bc0afd53b",
      "location": [-1.2495917, 36.665325]
    }, {
      "shop_id": "9efa4bc1-ed56-439c-8564-05e983656059",
      "location": [-1.246047, 36.66721]
    }, {
      "shop_id": "64194223-76aa-42c0-9b29-2bad80a39e57",
      "location": [-1.2429368, 36.666424]
    }, {
      "shop_id": "16be5e46-ac30-49f8-9a56-83482e3226a9",
      "location": [-1.2460468, 36.665184]
    }, {
      "shop_id": "d95d41e1-ed50-4530-b79a-73abceaaaa1a",
      "location": [-1.24591, 36.665207]
    }, {
      "shop_id": "2eeab47b-27aa-4803-bcd6-07a27daeef6d",
      "location": [-1.2459145, 36.665253]
    }, {
      "shop_id": "78cf9a95-62f7-4c7a-883e-3063624ddbc9",
      "location": [-1.2458436, 36.66521]
    }, {
      "shop_id": "52e8dc57-a1de-4f3e-a372-8dfafc77cee6",
      "location": [-1.2458519, 36.665333]
    }, {
      "shop_id": "3c29e385-3e47-41ca-9291-1310a4a32737",
      "location": [-1.2458303, 36.665417]
    }, {
      "shop_id": "59eb0d58-a808-4a99-8cf9-59f46e20913e",
      "location": [-1.2456886, 36.665333]
    }, {
      "shop_id": "6d753558-b1b3-4795-9d04-f500114f56cc",
      "location": [-1.2456667, 36.6653]
    }, {
      "shop_id": "68ff62d8-e2ad-4b31-a49d-0667e3cbaa71",
      "location": [-1.245554, 36.665276]
    }, {
      "shop_id": "27b8b014-d756-47ad-970d-415dc4d20834",
      "location": [-1.245537, 36.665276]
    }, {
      "shop_id": "610e0328-3ec4-4129-903f-8d7e1ee0b103",
      "location": [-1.2455751, 36.66506]
    }, {
      "shop_id": "6778ee18-8cb9-4712-a84e-46422dd34b15",
      "location": [-1.1999747, 36.65532]
    }, {
      "shop_id": "e9687797-b96e-404a-8ed0-fc7c86bd7373",
      "location": [-1.1994003, 36.657]
    }, {
      "shop_id": "f25dd2e0-2937-4007-887c-b7ff5af053d9",
      "location": [-1.2431005, 36.664597]
    }, {
      "shop_id": "f90a23a6-3c9d-411f-91ab-d1ff900eb59c",
      "location": [-1.2430918, 36.664574]
    }, {
      "shop_id": "2b317ddc-a20b-4545-b57e-d198e58d835e",
      "location": [-1.2441337, 36.6638]
    }, {
      "shop_id": "24c046fc-4bd0-4b0b-95ac-cf5768e3f698",
      "location": [-1.2449495, 36.66176]
    }, {
      "shop_id": "2c202f14-ae76-4068-83be-e6f39646bebb",
      "location": [-1.2454267, 36.662548]
    }, {
      "shop_id": "4a8852e5-e4ea-44c9-82ff-3a39bc942250",
      "location": [-1.2455716, 36.662685]
    }, {
      "shop_id": "e5e5ded7-c914-43e2-9c2e-0e5377e42685",
      "location": [-1.2460442, 36.664413]
    }, {
      "shop_id": "0d624a90-dec3-48b1-96fe-cd42cbb3eeb2",
      "location": [-1.2460532, 36.66445]
    }, {
      "shop_id": "bec3f592-63be-4802-b8e8-a28c74827f63",
      "location": [-1.245985, 36.664402]
    }, {
      "shop_id": "bec3d4e4-ce4e-4132-8587-cdbc1024a421",
      "location": [-1.2459931, 36.66439]
    }, {
      "shop_id": "6e386adb-62a3-4edb-8d1f-bd89e9a08d44",
      "location": [-1.245971, 36.664394]
    }, {
      "shop_id": "88768114-a175-4d0e-acda-e621d2b04d3b",
      "location": [-1.2459179, 36.664417]
    }, {
      "shop_id": "aac2f925-e1c4-4871-b8f2-c6f2c37f6ab1",
      "location": [-1.2459712, 36.664497]
    }, {
      "shop_id": "205e12c6-4699-4a3f-abd9-7a605e6b9e16",
      "location": [-1.24595975875854, 36.6645050048828]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "KU/Membey",
    "route_id": "0b477464-2778-481f-a153-b91b2e6db813",
    "matrix_info": {
      "DistanceMatrixAPI requests": 145,
      "cache_hit": "85%"
    },
    "distance": "36.87km",
    "path": "|qoF_r``FoyJm~GeAg@aKeHwaBYp@jAY`@xIzFg@rAkAjl@wAhE[WoGgaAjQ}k@t[isAa@gE|HyRMa@ObAzd@`o@za@zRnK`POp@DTj@DuGiCUJgFf@~BjRb@m@dDvNcMPbG|a@tmJjkH",
    "shops": [{
      "shop_id": "771d3b16-8096-479a-9ff3-9cbe2d1c1d9f",
      "location": [-1.1712689, 36.91815]
    }, {
      "shop_id": "41621a60-b351-473e-9a6a-dcac3deb25ef",
      "location": [-1.1709218, 36.918354]
    }, {
      "shop_id": "13080594-1747-4064-8614-107d7135b400",
      "location": [-1.1689899, 36.919815]
    }, {
      "shop_id": "70841b95-83ef-4af1-9507-86280e2fba94",
      "location": [-1.1531925, 36.919945]
    }, {
      "shop_id": "eb4724b6-2a3a-452e-b3e8-54883dc9ce6a",
      "location": [-1.1534361, 36.919567]
    }, {
      "shop_id": "becd9206-abdf-43d5-9516-9bd3ff8e3773",
      "location": [-1.1533072, 36.919403]
    }, {
      "shop_id": "ce56c005-3154-419c-96e6-9f25b2096dc8",
      "location": [-1.1550369, 36.91814]
    }, {
      "shop_id": "20687c24-e5a5-4ede-b72e-3317fcf04996",
      "location": [-1.1548376, 36.91772]
    }, {
      "shop_id": "dcf9275c-1692-4bc4-b4eb-a926f79f9c2e",
      "location": [-1.1544616, 36.91046]
    }, {
      "shop_id": "74281f04-8281-42ed-acde-d05e545d4bc7",
      "location": [-1.1540248, 36.909454]
    }, {
      "shop_id": "0c1b9098-f5a5-4067-9af3-b5cb22b431a8",
      "location": [-1.1538802, 36.909565]
    }, {
      "shop_id": "8b0ae2c9-3712-419f-93a5-def61daf97f1",
      "location": [-1.1525239, 36.920174]
    }, {
      "shop_id": "bfc55962-c8b2-408d-8ceb-d516365c3de8",
      "location": [-1.1554582, 36.927364]
    }, {
      "shop_id": "1ca7892b-9e7f-41d3-a09d-b93c78c0e0b7",
      "location": [-1.1600496, 36.94085]
    }, {
      "shop_id": "7572127b-f125-4036-ab96-b980c9e8cf19",
      "location": [-1.1598791, 36.94185]
    }, {
      "shop_id": "ff408f80-57b7-471a-9cc4-48ab95edfc45",
      "location": [-1.1614746, 36.945015]
    }, {
      "shop_id": "520501bc-c66e-469c-a062-5433ce80b051",
      "location": [-1.1613967, 36.945194]
    }, {
      "shop_id": "bcda0795-cd05-4621-82f6-218c4309b244",
      "location": [-1.1613183, 36.944847]
    }, {
      "shop_id": "909abca4-d31c-4f12-bdee-8620399e3cd1",
      "location": [-1.1673768, 36.937157]
    }, {
      "shop_id": "e2e53453-8784-4d94-b093-efddd3eba894",
      "location": [-1.1729624, 36.933983]
    }, {
      "shop_id": "b60463cf-2740-40de-a047-acd6de933d1b",
      "location": [-1.1749645, 36.931248]
    }, {
      "shop_id": "4795ab3e-60c1-484c-824d-bf997c09f6c4",
      "location": [-1.17488300800323, 36.9309959411621]
    }, {
      "shop_id": "c4fb4978-00c5-4b10-9f90-68571e48740b",
      "location": [-1.17491185665131, 36.9308891296387]
    }, {
      "shop_id": "ad8fabdc-dc11-4e94-b362-bee6b00db485",
      "location": [-1.1751307, 36.93086]
    }, {
      "shop_id": "24cea96c-6356-44cc-8290-0df0736be70a",
      "location": [-1.1737446, 36.931553]
    }, {
      "shop_id": "c25a4f85-e802-4282-9bd2-bd38623f2474",
      "location": [-1.1736329, 36.931488]
    }, {
      "shop_id": "722fa4de-3080-42c2-b3eb-c17615ae0c59",
      "location": [-1.17247414588928, 36.9312858581543]
    }, {
      "shop_id": "4edfc7e1-46a5-4b63-aa9b-5a8d61594a41",
      "location": [-1.1731064, 36.92819]
    }, {
      "shop_id": "988b813f-7d25-47b9-bde1-632ceb4e39d7",
      "location": [-1.1732938, 36.928417]
    }, {
      "shop_id": "ff6ed0b2-4021-416c-8eea-b4ea9c6cfbb2",
      "location": [-1.17412137985229, 36.9258995056152]
    }, {
      "shop_id": "3d6fe074-1ff2-4ea8-8f0a-af2057550576",
      "location": [-1.1718606, 36.925808]
    }, {
      "shop_id": "2bc74ab0-3c04-4cc1-ab84-7708e6932952",
      "location": [-1.1731585, 36.920216]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kiambui",
    "route_id": "89d6b8a5-f194-4890-a69f-5046aa7c1016",
    "matrix_info": {
      "DistanceMatrixAPI requests": 343,
      "cache_hit": "85%"
    },
    "distance": "37.79km",
    "path": "dsfG_se`FucLvdHJvAVfBD@P`CGdAaJ|@uA^WDu@B_@uK~Bo@CCh\\oMyEiGg@oAvA_C`@_@\\M_A[EMWwB_@mHASsCl@jFmAIwA}@oChCtOnCtCKOYsBpAtHfBzI?GRALJp@Y^BH@LtEZy@vBgAXcA{AcAoFzE{BFwEr@`EhBppKq_H",
    "shops": [{
      "shop_id": "7b263d37-24b6-416d-a15c-3a4fbfd2d20a",
      "location": [-1.2824835, 36.850925]
    }, {
      "shop_id": "91e3ce8f-1598-44d6-a4f2-be7e59c86824",
      "location": [-1.2825383, 36.850483]
    }, {
      "shop_id": "dfe8bea8-a948-4dab-aad1-a45a6af2ff45",
      "location": [-1.2826612, 36.849957]
    }, {
      "shop_id": "7b418907-062b-4716-b42f-155dbdeae19b",
      "location": [-1.2826864, 36.849945]
    }, {
      "shop_id": "94ed8638-330e-402b-8d4e-efddaf9f0af3",
      "location": [-1.2827816, 36.849304]
    }, {
      "shop_id": "2f938d58-022c-45fb-806b-93203d735ef2",
      "location": [-1.2827353, 36.848946]
    }, {
      "shop_id": "85642d0f-0af7-4246-9a1f-666d9cdaa5c6",
      "location": [-1.2809671, 36.848644]
    }, {
      "shop_id": "b17222ac-ec9e-4360-a1bd-6e07d2320b1d",
      "location": [-1.28054, 36.84848]
    }, {
      "shop_id": "27aa84cd-ba10-4773-abe7-ac6ab05e7a12",
      "location": [-1.2804213, 36.848446]
    }, {
      "shop_id": "8c05757b-b1e4-48bf-b661-946023bb49ae",
      "location": [-1.2801481, 36.84843]
    }, {
      "shop_id": "ba9fe33b-4275-4c42-b6c1-670766a35f68",
      "location": [-1.2799876, 36.85046]
    }, {
      "shop_id": "7fae211a-406c-48e2-8b40-e31b7d9c93ad",
      "location": [-1.280631, 36.850704]
    }, {
      "shop_id": "676b6fd3-483d-443d-8f17-4efa8833d1ad",
      "location": [-1.2806146, 36.85072]
    }, {
      "shop_id": "c9c4702b-aad5-4e6c-ba6a-3048231c5a07",
      "location": [-1.2853012, 36.85304]
    }, {
      "shop_id": "e7be734a-7ffd-4fbf-adc9-d0ebc96396cc",
      "location": [-1.2842096, 36.854366]
    }, {
      "shop_id": "bc7b077c-f85a-43c7-882f-5f77724e7be8",
      "location": [-1.2840095, 36.854767]
    }, {
      "shop_id": "654d75a9-cd11-483c-a3c5-51e2aad67d9c",
      "location": [-1.2844476, 36.85541]
    }, {
      "shop_id": "977d1dcc-a705-4cd5-b7a8-a82c5e5a372f",
      "location": [-1.2846153, 36.85557]
    }, {
      "shop_id": "0f1e5af1-68e1-419b-82f0-c30fbeee8d2c",
      "location": [-1.2847735, 36.855644]
    }, {
      "shop_id": "d6bcb1af-7c0a-4dca-8333-776df4f92268",
      "location": [-1.2844529, 36.85578]
    }, {
      "shop_id": "893b3796-9f88-443a-b234-be8341ed7799",
      "location": [-1.2844208, 36.855846]
    }, {
      "shop_id": "f440c6c8-af04-4d79-a3af-aacdaf51a63d",
      "location": [-1.284297, 36.856453]
    }, {
      "shop_id": "f6e50824-f23a-4a8b-ba71-be4d053d3da3",
      "location": [-1.28413844108582, 36.8579597473145]
    }, {
      "shop_id": "78460e90-1bc6-49bd-9ec8-4d9ac30e19ab",
      "location": [-1.2841257, 36.858055]
    }, {
      "shop_id": "e06942a3-fe7c-4b97-b530-13e90bf9561b",
      "location": [-1.2833884, 36.85783]
    }, {
      "shop_id": "2604f881-6de3-472a-b3d0-6b58b1102746",
      "location": [-1.2845702, 36.858223]
    }, {
      "shop_id": "657fc0e4-76bb-4d5a-9e89-027ba53a9877",
      "location": [-1.2845217, 36.85866]
    }, {
      "shop_id": "9d20fc12-d4bd-4fa0-b68f-7d435b0f0033",
      "location": [-1.2842118, 36.859383]
    }, {
      "shop_id": "b7c03605-4f7d-451b-a589-53ac434dfd1f",
      "location": [-1.2848969, 36.856712]
    }, {
      "shop_id": "3a928bd6-0fb2-454d-a6ba-4db98788ba50",
      "location": [-1.285623, 36.85596]
    }, {
      "shop_id": "24464f37-0462-4b85-95d8-dc744dcf8451",
      "location": [-1.2855619, 36.85604]
    }, {
      "shop_id": "61162480-906d-4a58-be24-f9970b576f5c",
      "location": [-1.2854263, 36.856617]
    }, {
      "shop_id": "563e8d1e-4f19-4512-b149-ee7a0ba9848b",
      "location": [-1.2858355, 36.855072]
    }, {
      "shop_id": "575850c7-34f4-4bd6-974a-05c400f5ee63",
      "location": [-1.2863598, 36.853325]
    }, {
      "shop_id": "8abc175d-17cd-4856-803a-342efa537cf1",
      "location": [-1.2863606, 36.853367]
    }, {
      "shop_id": "e311529c-1bdb-4a2f-a15a-9dfc877cc434",
      "location": [-1.2864603, 36.85338]
    }, {
      "shop_id": "1224bef7-1713-47a1-9742-d71994cc2ab2",
      "location": [-1.2865348, 36.853317]
    }, {
      "shop_id": "b0c6e273-1ebb-477b-ab92-c728de7d1c6c",
      "location": [-1.2867769, 36.853447]
    }, {
      "shop_id": "c16807ed-aa4c-4169-aece-c45161559fca",
      "location": [-1.2869416, 36.85343]
    }, {
      "shop_id": "b299452e-e7da-482a-868e-f00e8c847c5e",
      "location": [-1.2869881, 36.853416]
    }, {
      "shop_id": "e8823862-14ba-424a-8015-f0580f02ff6f",
      "location": [-1.287063, 36.852345]
    }, {
      "shop_id": "bddcdf5c-71a7-47b2-aeed-e67250811f20",
      "location": [-1.2872002, 36.852642]
    }, {
      "shop_id": "92a73403-cd6e-451f-88c0-8d0f467e6378",
      "location": [-1.2877952, 36.853]
    }, {
      "shop_id": "c3a7e7db-d44e-462a-87a2-630b2770fa33",
      "location": [-1.2879262, 36.85334]
    }, {
      "shop_id": "23366676-05f6-43f3-ba2a-847128ae19e6",
      "location": [-1.2874731, 36.85368]
    }, {
      "shop_id": "a1d9bd14-6c25-49b1-9610-0c26199f6110",
      "location": [-1.2862651, 36.852577]
    }, {
      "shop_id": "59cece85-c7a9-43e1-a132-b99e5d047b36",
      "location": [-1.2856479, 36.852543]
    }, {
      "shop_id": "ebce23bb-5b52-41e9-9df2-0691bf32240d",
      "location": [-1.2845688, 36.852283]
    }, {
      "shop_id": "e99a65c0-a0b9-4c3f-b818-ade66b4f98e7",
      "location": [-1.2855419, 36.851746]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kiambu Road 1",
    "route_id": "2e179fd0-4b0b-4342-b938-732c71efd593",
    "matrix_info": {
      "DistanceMatrixAPI requests": 325,
      "cache_hit": "89%"
    },
    "distance": "41.46km",
    "path": "`ijF{`p_F|ZulAew@mjCxf@ijAAE|EgFNOp@iAz@wAgKiIib@dDDLIJYv@?@oAdDGJHBg@lAEVmdCmOgk@}}@fAnb@dY~QvCAxRyLdsCsFtsCqlAzPnuAqD`@oDvFqaB|NsAjB`QzhA@B?vA?LyQ^xEG~Ca@xJ|AlCfQSQQTTy@GCC?Ku@tA`CbEXFCsAiAIEFGF}B??qoAvvE",
    "shops": [{
      "shop_id": "2aa486e1-2330-45ec-a368-80e4fcf706d0",
      "location": [-1.2092783, 36.799934]
    }, {
      "shop_id": "b64a33aa-8d45-422f-bc07-6b7634af0f2b",
      "location": [-1.2002914, 36.822243]
    }, {
      "shop_id": "038a4518-3914-4b04-9bfa-a77a7cac0ca2",
      "location": [-1.2066627, 36.83429]
    }, {
      "shop_id": "c5a35b1f-6e79-41ef-84c7-b5d362401ae5",
      "location": [-1.2066532, 36.834324]
    }, {
      "shop_id": "a93f398f-0c3a-4653-b800-3395d6f14411",
      "location": [-1.2077594, 36.83548]
    }, {
      "shop_id": "d4e7708c-dd95-4874-b6d5-5b0007ea9a9a",
      "location": [-1.2078424, 36.835556]
    }, {
      "shop_id": "0dce90d0-68ab-4ca4-92db-dd97b416c261",
      "location": [-1.2080909, 36.835926]
    }, {
      "shop_id": "3fdab20d-4e1c-4987-90b8-045ee3fac205",
      "location": [-1.2083945, 36.836365]
    }, {
      "shop_id": "8bf29c61-f4e9-4433-890f-91f4e66a2678",
      "location": [-1.2064316, 36.838024]
    }, {
      "shop_id": "76d1c3bd-60e4-4f95-8829-ef9bb35f1d02",
      "location": [-1.2007823, 36.837185]
    }, {
      "shop_id": "5bea1b65-7143-41d2-a1a8-20231d877476",
      "location": [-1.2008061, 36.837124]
    }, {
      "shop_id": "d1caa2f8-2447-48d6-8c8a-be1ddbad03d5",
      "location": [-1.2007564, 36.83706]
    }, {
      "shop_id": "1517bb45-6240-4a80-bdb9-5a775aa4eae9",
      "location": [-1.2006278, 36.836784]
    }, {
      "shop_id": "df22cd54-9542-4965-ba44-39d77d682e83",
      "location": [-1.2006277, 36.83677]
    }, {
      "shop_id": "715658b6-5082-4052-8d78-6aaf01f2b38c",
      "location": [-1.2002298, 36.83594]
    }, {
      "shop_id": "1238dafe-743b-4352-abcb-a2b8114d6c16",
      "location": [-1.2001939, 36.83588]
    }, {
      "shop_id": "e5ebd2a2-fc03-44aa-afb1-5ab9eaf1b3b8",
      "location": [-1.2002368, 36.83586]
    }, {
      "shop_id": "7f3745e6-caee-46e3-b596-7c3b578fa415",
      "location": [-1.2000424, 36.835472]
    }, {
      "shop_id": "f90984b9-74f9-4c9d-be80-27168ce1856d",
      "location": [-1.200007, 36.83535]
    }, {
      "shop_id": "cb367690-4867-409c-b4f8-bb50e94b6206",
      "location": [-1.1786591, 36.83798]
    }, {
      "shop_id": "d771d3b9-a6ac-4335-b8d8-cd60dba4b0ff",
      "location": [-1.1715778, 36.848045]
    }, {
      "shop_id": "116641ae-2446-46b2-98f1-e7d675b17902",
      "location": [-1.1719406, 36.842373]
    }, {
      "shop_id": "0d70906f-a37d-490b-8eca-73d21fc6bb1f",
      "location": [-1.1761271, 36.839333]
    }, {
      "shop_id": "34912a73-acb0-4736-ae92-4cfc5c43fab7",
      "location": [-1.1768934, 36.839336]
    }, {
      "shop_id": "669335db-607b-43d8-a024-0934b0deb910",
      "location": [-1.1800593, 36.84155]
    }, {
      "shop_id": "22fca8d6-d6e6-41d4-9826-5c59f7217b69",
      "location": [-1.2037731, 36.842773]
    }, {
      "shop_id": "5c953592-2740-4985-94fa-33cac1905fc2",
      "location": [-1.2275615, 36.855183]
    }, {
      "shop_id": "2da8a812-52f9-4cae-9ec6-5f3197ba9b0c",
      "location": [-1.2304171, 36.841335]
    }, {
      "shop_id": "01f82ebf-e51f-4ca6-b86f-bdb76e3a5c20",
      "location": [-1.2295349, 36.84117]
    }, {
      "shop_id": "96834ef3-57ed-4e48-b282-58e2b3d9d2e1",
      "location": [-1.2286514, 36.839928]
    }, {
      "shop_id": "a767c58b-099c-4d8d-9238-d78f43621803",
      "location": [-1.2128838, 36.837383]
    }, {
      "shop_id": "f9be2b84-3dcc-4b4f-924a-7687cd7a8cb1",
      "location": [-1.2124598, 36.836838]
    }, {
      "shop_id": "2e9ac1ca-e2f0-46a0-897d-120e3949daa6",
      "location": [-1.2153487, 36.825016]
    }, {
      "shop_id": "0cbe2326-0f9d-4704-b03f-01d8e74cc972",
      "location": [-1.2153627, 36.824997]
    }, {
      "shop_id": "170e2b57-8d5d-419e-a16f-94c580a0ebd9",
      "location": [-1.2153563, 36.82456]
    }, {
      "shop_id": "c1f31e63-7d0a-4032-91c4-22725d224508",
      "location": [-1.2153596, 36.82449]
    }, {
      "shop_id": "31188a6d-a3a0-4e0b-b139-188c77360a51",
      "location": [-1.2123547, 36.824333]
    }, {
      "shop_id": "e126aaad-6ee8-405e-a355-968df6120c31",
      "location": [-1.2134423, 36.82437]
    }, {
      "shop_id": "475ad702-d7cd-4e55-a6c6-2be9b365d673",
      "location": [-1.2142371, 36.824543]
    }, {
      "shop_id": "a302e211-40c8-4b8b-92e0-0ce1426e3958",
      "location": [-1.216126, 36.824074]
    }, {
      "shop_id": "93243844-d809-4548-9ec9-ff0e832a3221",
      "location": [-1.2168429, 36.82115]
    }, {
      "shop_id": "84b9517d-80b0-45b3-8631-92a076f94ed7",
      "location": [-1.2167434, 36.821236]
    }, {
      "shop_id": "9c8ecfdc-2897-4625-92ff-63186945c7c2",
      "location": [-1.2166548, 36.821125]
    }, {
      "shop_id": "bd56eacb-e712-487c-8fdb-5da9c73a4138",
      "location": [-1.2167604, 36.821423]
    }, {
      "shop_id": "ae6cc79e-674b-4aae-95d2-1156230deced",
      "location": [-1.2167239, 36.821445]
    }, {
      "shop_id": "8dd1bb15-3ffe-41d1-8354-e48cd05776fc",
      "location": [-1.2167, 36.821445]
    }, {
      "shop_id": "e4cd9be7-c4b8-46df-903a-46477901e6b1",
      "location": [-1.2166401, 36.821705]
    }, {
      "shop_id": "863abb65-9345-419d-b216-c2c46ef7449b",
      "location": [-1.2170653, 36.82106]
    }, {
      "shop_id": "720a0ff0-783b-487b-a8c5-4247f0c315ff",
      "location": [-1.2180502, 36.820934]
    }, {
      "shop_id": "84c67ec7-19c0-4d98-839a-fab790e57feb",
      "location": [-1.2180934, 36.820946]
    }, {
      "shop_id": "27497e54-17e9-44fd-ad95-2064577e9b33",
      "location": [-1.217666, 36.821316]
    }, {
      "shop_id": "a7434da0-cb74-494c-bb6f-1b65eef938ee",
      "location": [-1.2176217, 36.82135]
    }, {
      "shop_id": "cb0bfd14-a228-4a86-8e21-e62e803f6a45",
      "location": [-1.2176623, 36.821392]
    }, {
      "shop_id": "e0addf33-eab7-44a8-9613-550456103aff",
      "location": [-1.2177022, 36.82202]
    }, {
      "shop_id": "76fd8b58-41a8-49b5-8db1-e10c463c8224",
      "location": [-1.2177047, 36.822018]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Komarock",
    "route_id": "a6648784-f04c-4e3b-b649-1f6daab1d8c7",
    "matrix_info": {
      "DistanceMatrixAPI requests": 215,
      "cache_hit": "85%"
    },
    "distance": "17.57km",
    "path": "`h{F{`g`FwlA`Xy@mArBySEByKiB}BpAwHzCx@|Ax@lC~DOaUhHVAOiByEnBpQ~@tAdCuSjl@{KxGeIrBv@oJv@MuDeDeNsoAmAVnRaVxb@HqSzGECgEXkF`MpH`KdMrA~O{LbB{CfBb@nFbCdAeFvJzIliAzC",
    "shops": [{
      "shop_id": "e0f30038-ab34-4c25-981d-965133479969",
      "location": [-1.2792459, 36.901245]
    }, {
      "shop_id": "72cc1567-657e-4e5c-abd3-3819498b23d3",
      "location": [-1.2789587, 36.90164]
    }, {
      "shop_id": "6214078b-3e4c-413a-8a7e-294c5d9309f5",
      "location": [-1.2795382, 36.904972]
    }, {
      "shop_id": "d52dc48b-d145-44a2-a9b3-3795d6b84bf2",
      "location": [-1.2795091, 36.904945]
    }, {
      "shop_id": "f43aaf67-c8c0-4ea5-ba1e-4de5e4dc1c88",
      "location": [-1.2774599, 36.905483]
    }, {
      "shop_id": "19055e5c-29c8-41f4-892c-74b2ffc4e218",
      "location": [-1.2768261, 36.90507]
    }, {
      "shop_id": "18cc001f-c8dc-459c-849e-77b4b909b8ea",
      "location": [-1.2752671, 36.904293]
    }, {
      "shop_id": "1816387f-d22a-475e-baca-f6e8654b3a4f",
      "location": [-1.2755578, 36.903824]
    }, {
      "shop_id": "ee5ff901-2bd0-416e-9338-6d840c5a52ad",
      "location": [-1.2758495, 36.903107]
    }, {
      "shop_id": "32723f4c-8df7-43d9-bc0f-363fc9d8d7a9",
      "location": [-1.276808, 36.903194]
    }, {
      "shop_id": "4499cbdd-aefd-4a33-8eb2-c01b9ef95a0e",
      "location": [-1.27328431606293, 36.9017028808594]
    }, {
      "shop_id": "a6b16de8-8628-4f2a-b0e8-0f3ca31c1bfc",
      "location": [-1.27339935302734, 36.9017066955566]
    }, {
      "shop_id": "ee75fe8b-49bc-4b81-a810-1530942c3ac6",
      "location": [-1.2733152, 36.90224]
    }, {
      "shop_id": "ea81dca4-2e8d-443b-9674-d131abdeaa30",
      "location": [-1.2722343, 36.90168]
    }, {
      "shop_id": "26132b2f-a565-4a0a-a831-d570f4b734dc",
      "location": [-1.2752017, 36.901356]
    }, {
      "shop_id": "7866b4c2-8682-44e2-89c9-ad5bf7d6dd68",
      "location": [-1.2756289, 36.90069]
    }, {
      "shop_id": "f7416388-edce-4293-a10f-3727da2a076e",
      "location": [-1.2723153, 36.893425]
    }, {
      "shop_id": "452bcfba-220a-4da9-baea-7695f352e206",
      "location": [-1.2702582, 36.892025]
    }, {
      "shop_id": "b170d684-6764-4f60-bdf7-41738262f8ed",
      "location": [-1.2686259, 36.89144]
    }, {
      "shop_id": "be53c990-63db-44f3-a438-6dcaf39bff5e",
      "location": [-1.2689086, 36.893284]
    }, {
      "shop_id": "ca068085-0d85-48c0-9005-20cbd18fb009",
      "location": [-1.2691905, 36.893353]
    }, {
      "shop_id": "a1a7d477-75ea-46d4-bfd5-389c458a57e2",
      "location": [-1.268275, 36.894184]
    }, {
      "shop_id": "8efcc558-8d0b-42aa-9dcb-15bb185ee17d",
      "location": [-1.2658532, 36.9070806]
    }, {
      "shop_id": "587b438a-4146-45f3-9912-cc3a05e53872",
      "location": [-1.26546204090118, 36.9069633483887]
    }, {
      "shop_id": "18de4da0-9b22-4818-bf10-8e978982e30b",
      "location": [-1.2685767, 36.910652]
    }, {
      "shop_id": "8a734355-0813-46c5-b688-1f29a8e3d4e9",
      "location": [-1.2743115, 36.9106]
    }, {
      "shop_id": "5498fa1d-8214-48b3-aefd-f5006390b534",
      "location": [-1.2710227, 36.90918]
    }, {
      "shop_id": "e8434ba4-3178-40c0-9917-075e0e6e9d0c",
      "location": [-1.2709854, 36.9092]
    }, {
      "shop_id": "a6495c9c-02af-4206-8bc9-9034b34a0b46",
      "location": [-1.26999, 36.909065]
    }, {
      "shop_id": "f8f56931-d00a-4d3f-81ab-a1ff1ab8a9c2",
      "location": [-1.26881492137909, 36.9068183898926]
    }, {
      "shop_id": "7d2cfc1f-c837-4ed2-9499-40789232a3b9",
      "location": [-1.2703412, 36.904892]
    }, {
      "shop_id": "3034d49e-d2d3-4a3a-bfad-b84e61afdfe7",
      "location": [-1.2726076, 36.90447]
    }, {
      "shop_id": "e76b24f8-2cb5-4910-ae4a-895e3b5da859",
      "location": [-1.2753271, 36.90669]
    }, {
      "shop_id": "4d4c57b7-16a3-4edd-a90e-99beaeffe004",
      "location": [-1.27582764625549, 36.9074745178223]
    }, {
      "shop_id": "20636921-e320-41ec-be83-bdbd4d18a8d4",
      "location": [-1.2763485, 36.90729]
    }, {
      "shop_id": "db55b0da-fc04-4188-a4b9-0e9707370a9c",
      "location": [-1.27755081653595, 36.9066276550293]
    }, {
      "shop_id": "d7cc33c9-dcb0-45f4-8780-fecf268387bf",
      "location": [-1.2779009, 36.90778]
    }, {
      "shop_id": "5f72c6b6-941c-4c26-a880-4535c81e2b34",
      "location": [-1.2797822, 36.90604]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Langata",
    "route_id": "72408a53-d85d-4ff3-8a61-9aebf38a1571",
    "matrix_info": {
      "DistanceMatrixAPI requests": 140,
      "cache_hit": "93%"
    },
    "distance": "21.85km",
    "path": "tz|Fmdx_FldBpxAlg@hpAWEaFgKNjN{Bo@C@FVFHDLFHz@jI@@dKpAAl@KtBCFCdCLH[vEjCCr@jAvS|l@LEBIF?B@NMCCLGDFoA\\EBCHDiCW@gAaBCJO[yVjFhWzBKD@FdAx@hWmfCaAyDbHs^ugEetA",
    "shops": [{
      "shop_id": "a006060b-170c-411f-9152-db5810b77822",
      "location": [-1.3160151, 36.814697]
    }, {
      "shop_id": "d2c7610c-4b1c-4469-9c87-834382213477",
      "location": [-1.32249295711517, 36.8016929626465]
    }, {
      "shop_id": "0377dcc9-e0ac-477f-a773-625a676287a8",
      "location": [-1.3223726, 36.801716]
    }, {
      "shop_id": "c300a5e7-3a7f-42b3-b6a6-22741dfad0c0",
      "location": [-1.3212405, 36.803677]
    }, {
      "shop_id": "480bbcb2-a6b4-4123-9860-d1251ecc4929",
      "location": [-1.321317, 36.801224]
    }, {
      "shop_id": "e6a924b3-ce25-4cdc-9151-fa393f920aae",
      "location": [-1.32070434093475, 36.8014640808105]
    }, {
      "shop_id": "73541150-6141-4022-bde6-bed195e8f749",
      "location": [-1.32068085670471, 36.8014450073242]
    }, {
      "shop_id": "a09a37ed-43f0-4ebf-9585-f0516bde84ff",
      "location": [-1.32071554660797, 36.801326751709]
    }, {
      "shop_id": "df16eb8f-e9d8-40fd-9f39-4e0a25876325",
      "location": [-1.32076, 36.80128]
    }, {
      "shop_id": "b3954257-d442-4e1c-adfb-cbf6a38beb2d",
      "location": [-1.3207856, 36.801212]
    }, {
      "shop_id": "793c5688-e7e2-4137-ad76-ea3aebd7dbca",
      "location": [-1.3208303, 36.80116]
    }, {
      "shop_id": "7396bc9c-7ff6-484f-a45c-6c030f488722",
      "location": [-1.3211251, 36.7995]
    }, {
      "shop_id": "1d7d307b-150c-43d4-8411-ec38ecda25c4",
      "location": [-1.3211367, 36.799488]
    }, {
      "shop_id": "e03520ef-fc2b-4204-afb0-8c1ab5d4b1d6",
      "location": [-1.3230892, 36.799076]
    }, {
      "shop_id": "1ec22c61-4c28-4b09-909c-681e2c53364c",
      "location": [-1.32308256626129, 36.7988471984863]
    }, {
      "shop_id": "a97cd0bf-f3ed-491d-8891-89bfd6cc3e71",
      "location": [-1.3230169, 36.798256]
    }, {
      "shop_id": "50bc6cf7-1fbf-478f-bf75-b361e337fb27",
      "location": [-1.3229986, 36.798218]
    }, {
      "shop_id": "049a1e09-ed1b-49e8-983a-d2270279d37f",
      "location": [-1.3229803, 36.79755]
    }, {
      "shop_id": "bac8cbfd-45b5-4964-82a8-f7a9f57dced7",
      "location": [-1.3230504, 36.797504]
    }, {
      "shop_id": "bf5a50b0-ff55-4c17-9d0c-64579bdc3a3b",
      "location": [-1.3229094, 36.796417]
    }, {
      "shop_id": "aae7786e-1aa1-4487-bcf9-42719a4a285f",
      "location": [-1.3236051, 36.796444]
    }, {
      "shop_id": "9f26af6e-7ad8-49fb-bea2-70b2ad2da659",
      "location": [-1.3238738, 36.79606]
    }, {
      "shop_id": "514027a9-351a-4efb-bdb1-dbdd89c0c021",
      "location": [-1.3271891, 36.788708]
    }, {
      "shop_id": "4246a92c-0ba0-4926-b1b4-2831061103a4",
      "location": [-1.32725715637207, 36.7887420654297]
    }, {
      "shop_id": "640ea347-571e-4e23-958a-9ec9dbf15bf3",
      "location": [-1.3272785, 36.78879]
    }, {
      "shop_id": "42f31fa7-744c-47b8-b3cf-31f58aa46de7",
      "location": [-1.3273206949234, 36.7887916564941]
    }, {
      "shop_id": "e8a83c37-1249-4e73-b33b-b6f8e12c2e05",
      "location": [-1.32733535766602, 36.7887763977051]
    }, {
      "shop_id": "a01ff5f3-4a35-41ae-a32c-c0aba06c585d",
      "location": [-1.32742357254028, 36.7888450622559]
    }, {
      "shop_id": "42ac58b4-44ae-43e6-a1e8-71ff0ca846c1",
      "location": [-1.32740294933319, 36.7888717651367]
    }, {
      "shop_id": "af5441db-814f-4769-b4b7-e8a47a857497",
      "location": [-1.32746541500092, 36.7889137268066]
    }, {
      "shop_id": "744360a5-4c31-4cd3-84df-927341f98296",
      "location": [-1.3274968, 36.788868]
    }, {
      "shop_id": "a1538c68-389d-4ae8-970d-31257adb1a97",
      "location": [-1.3271028, 36.788723]
    }, {
      "shop_id": "416f2730-2619-48b1-a2fa-63112501be4c",
      "location": [-1.3270684, 36.788704]
    }, {
      "shop_id": "0c4c509b-7c12-49a9-8128-da59fe1639df",
      "location": [-1.32704854011536, 36.7886543273926]
    }, {
      "shop_id": "1bab16c9-3e78-4818-b4d1-b002a27be8c3",
      "location": [-1.3270764, 36.789337]
    }, {
      "shop_id": "c7511c40-911c-4e60-9db3-c639a95e8b51",
      "location": [-1.3269557, 36.789333]
    }, {
      "shop_id": "e8c31d96-bcad-4b4a-b992-fbda6e9d0bb9",
      "location": [-1.3265996, 36.78982]
    }, {
      "shop_id": "b83a8587-e386-44ff-82c5-35d5cf16e7ee",
      "location": [-1.3265785, 36.789764]
    }, {
      "shop_id": "dfaffd03-e203-40dc-9ea3-0706e00a4be7",
      "location": [-1.3264983, 36.7899]
    }, {
      "shop_id": "bd397005-19ca-4eea-bab2-3a4814acb0b8",
      "location": [-1.3226857, 36.78872]
    }, {
      "shop_id": "ac8e42bd-d7ec-419e-ba99-c5fc00cf0e0a",
      "location": [-1.3265831, 36.7881]
    }, {
      "shop_id": "7cc224a3-d59a-4d60-9d6b-9ad80342aace",
      "location": [-1.3265182, 36.788067]
    }, {
      "shop_id": "4a021032-6a18-4f2b-91c4-b17ef3f76547",
      "location": [-1.3265331, 36.788033]
    }, {
      "shop_id": "45c95f18-fa89-4961-90b4-06629403527a",
      "location": [-1.3268777, 36.787735]
    }, {
      "shop_id": "54fa755b-2df3-400a-8849-2b40f603074f",
      "location": [-1.3307664, 36.80941]
    }, {
      "shop_id": "99b9381a-c895-4772-845a-03f4648d8c59",
      "location": [-1.3304423, 36.81034]
    }, {
      "shop_id": "ff143bb8-c054-4dac-95e1-4c77c2c52d3f",
      "location": [-1.331898, 36.8154]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kitengela 1",
    "route_id": "32bb1577-9bc2-42ce-ae26-7c606228a3be",
    "matrix_info": {
      "DistanceMatrixAPI requests": 383,
      "cache_hit": "79%"
    },
    "distance": "56.79km",
    "path": "dsfG_se`FdmWe~Jk@@tSdHrxD`_@k@n@g@k@g@fAeyAeL{O{GnJ{z@qVbh@}CzGw@fBjD[kGlD_U{KpLec@{HeP{BQtBaMaLpIyLm@xIbIuBtCO~Hk[mAbABfJrHXxLQGn@xBkArAkAtCkGsJcHyCEDoAb@mCIwDh@aAyDu@mAoAZ_AwFavVxvK",
    "shops": [{
      "shop_id": "81f05818-dcb9-41ba-adf6-f756a9cebc7a",
      "location": [-1.4749392, 36.95923]
    }, {
      "shop_id": "7afca783-3887-448c-9a46-29f4e5db7d5a",
      "location": [-1.47471868991852, 36.9592170715332]
    }, {
      "shop_id": "2c1ecdd9-b007-4a35-a962-b0ad85ef2f08",
      "location": [-1.4780335, 36.95775]
    }, {
      "shop_id": "b39ad506-c501-4f0d-8138-6d383a024029",
      "location": [-1.50772655010223, 36.9526214599609]
    }, {
      "shop_id": "172df939-80fd-4944-b67a-176c9b1688e6",
      "location": [-1.5075122, 36.952377]
    }, {
      "shop_id": "96aab887-b10a-4e0b-a66d-cabf3ad696c3",
      "location": [-1.5073054, 36.952595]
    }, {
      "shop_id": "bd18c4e3-adcb-4cb7-ac21-f7127c56b191",
      "location": [-1.5071096, 36.952244]
    }, {
      "shop_id": "0b45d0a9-97cc-4b5d-a54d-0c201320a47c",
      "location": [-1.4926829, 36.954346]
    }, {
      "shop_id": "5c219d77-6791-4fb4-9140-b3ae85db75fd",
      "location": [-1.4899791, 36.955772]
    }, {
      "shop_id": "5f637494-353c-4ae5-a9be-15dc5719627a",
      "location": [-1.4918243, 36.96535]
    }, {
      "shop_id": "3a55d3e7-4eac-4e7b-8ae4-f4f1d200d65b",
      "location": [-1.4880496, 36.958767]
    }, {
      "shop_id": "aaf4bc23-ea2f-453b-a86c-78f90435ddd8",
      "location": [-1.4872558, 36.957348]
    }, {
      "shop_id": "610a19da-b624-411a-861b-58264e16b21f",
      "location": [-1.4869832, 36.956833]
    }, {
      "shop_id": "cf8b0e6a-45a8-438e-8ea6-4441845d6b7c",
      "location": [-1.48784375190735, 36.9569702148438]
    }, {
      "shop_id": "14ec1211-fdef-4fae-97f9-488185ff3e94",
      "location": [-1.486496, 36.956097]
    }, {
      "shop_id": "93e8773b-a470-491e-80d1-db0b44d76ad8",
      "location": [-1.4829761, 36.958164]
    }, {
      "shop_id": "517a4198-4667-4f9e-9904-07093ed03195",
      "location": [-1.4851524, 36.96395]
    }, {
      "shop_id": "b8af6b56-770d-4e8b-89fb-9c858e96244c",
      "location": [-1.4835708, 36.966698]
    }, {
      "shop_id": "ed6bda26-e539-47b9-ab70-bd71095055ba",
      "location": [-1.4829487, 36.966785]
    }, {
      "shop_id": "7de602b5-09c1-4bd4-9b16-2a1879199250",
      "location": [-1.4835368, 36.96904]
    }, {
      "shop_id": "9f38d204-6f43-4040-b3c6-bc805cffccfe",
      "location": [-1.481445, 36.967346]
    }, {
      "shop_id": "141c6bf5-0789-422e-90e9-133513b68c10",
      "location": [-1.4792384, 36.96758]
    }, {
      "shop_id": "c667303e-b1de-4d82-9c53-baea03dd7520",
      "location": [-1.4809716, 36.965958]
    }, {
      "shop_id": "e2587168-c82f-4eb3-b948-4297112311b9",
      "location": [-1.480384, 36.965214]
    }, {
      "shop_id": "354285a9-556d-4018-988b-6ebf634fe3e8",
      "location": [-1.4802953, 36.96361]
    }, {
      "shop_id": "6fb49b82-9d26-4f05-99c5-f813794cb64c",
      "location": [-1.4757593, 36.964]
    }, {
      "shop_id": "4de7fe84-23d6-40cf-ae36-0f7d0e99d2e6",
      "location": [-1.476095, 36.96398]
    }, {
      "shop_id": "e01d795a-c1a4-438a-97db-2ba2a8e94415",
      "location": [-1.477897, 36.962437]
    }, {
      "shop_id": "54aeef9d-db82-4b41-a31f-f3ad29ca2bfb",
      "location": [-1.47803044319153, 36.9602317810059]
    }, {
      "shop_id": "476ca078-ec98-4dd9-9c85-4c7f370bec21",
      "location": [-1.4779439, 36.960266]
    }, {
      "shop_id": "e0da205f-3240-4640-aafb-8a46dacfbcb9",
      "location": [-1.4781779, 36.95966]
    }, {
      "shop_id": "f9b6ee62-bb2a-4bc4-8875-206e81519c9d",
      "location": [-1.4777997, 36.959236]
    }, {
      "shop_id": "60c8dcb5-5c8e-4c11-bc84-98f8bf7d4364",
      "location": [-1.4774158, 36.95849]
    }, {
      "shop_id": "a21dc96a-cbda-4731-8797-e8e9d80807fe",
      "location": [-1.4760828, 36.960354]
    }, {
      "shop_id": "d8862e5a-cb6c-4841-82c4-783762e617ae",
      "location": [-1.4746172, 36.961117]
    }, {
      "shop_id": "5f8e6818-4d43-4e4c-b0ae-6fffc6db9c0e",
      "location": [-1.4745859, 36.961094]
    }, {
      "shop_id": "0bae0f65-34fd-4c27-98a2-7e59dcefbd9e",
      "location": [-1.4741943, 36.960907]
    }, {
      "shop_id": "4ec48f51-3117-4e60-8fc5-808d53136a69",
      "location": [-1.4734787, 36.960957]
    }, {
      "shop_id": "2c905a3a-7373-4acf-b384-784c15343fd8",
      "location": [-1.4725626, 36.96075]
    }, {
      "shop_id": "ba0bc45d-6c41-4d35-8192-29513ffb0783",
      "location": [-1.4722283, 36.961678]
    }, {
      "shop_id": "e6ceda9a-9bc6-4914-b40f-8173d1d180f0",
      "location": [-1.4719638, 36.96207]
    }, {
      "shop_id": "eb332cdc-658e-41dc-9431-7d8c087d1dd7",
      "location": [-1.47156, 36.961926]
    }, {
      "shop_id": "16b8ea74-99b4-40da-b0db-b5c6e07e09e2",
      "location": [-1.4712412, 36.96317]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kibera",
    "route_id": "f8e6cdbe-8bea-4a90-bb47-24282fd37e61",
    "matrix_info": {
      "DistanceMatrixAPI requests": 709,
      "cache_hit": "68%"
    },
    "distance": "25.96km",
    "path": "tz|Fmdx_FbdAvmEpc@pCHYt@xB}Aq@M`@bBqFyHpSaAp@iOpTWfVbO?aa@xiAwGsNrGZZQNNFGvCNdDsDxAoCfLiMBpKkCTmZeUvEnBr@_AtBuC|BaGmFaRiAIbBmEz@s@yBmPvI}Re@mD}@sFtHrCvJ{IkDcFiAl@_@UP}@tC~FmFyKiAu@xMqMo}AinD",
    "shops": [{
      "shop_id": "b0c24bb3-1605-4ffa-b2ea-bd69372bb85d",
      "location": [-1.3108495, 36.79595]
    }, {
      "shop_id": "dca7fbc3-12b6-433e-9e3d-04e16021e574",
      "location": [-1.3166984, 36.79522]
    }, {
      "shop_id": "0914ac59-3ddc-4a8d-8f1b-dcf0619aa88e",
      "location": [-1.3167491, 36.79535]
    }, {
      "shop_id": "26126e85-142a-4413-a46b-7fdf75373cc3",
      "location": [-1.3170176, 36.79474]
    }, {
      "shop_id": "edb963ae-8b93-4131-aa27-27beae1757f7",
      "location": [-1.3165514, 36.79499]
    }, {
      "shop_id": "931e708a-4fce-4fca-8d6a-d5a1054ef22e",
      "location": [-1.3164752, 36.79482]
    }, {
      "shop_id": "7920dd06-cfc1-4d48-baeb-6a90125727ec",
      "location": [-1.3169818, 36.796032]
    }, {
      "shop_id": "e33e3735-3ff3-4452-9b60-ecb382bcf3dc",
      "location": [-1.3154079, 36.792744]
    }, {
      "shop_id": "1c35850a-192e-47ab-bb7a-4feb49669216",
      "location": [-1.315079, 36.792492]
    }, {
      "shop_id": "6d4a5d89-162e-436b-bc64-33cba697c9ae",
      "location": [-1.3124675, 36.78904]
    }, {
      "shop_id": "e74f02e5-3748-4b8b-8b32-67b586225a7f",
      "location": [-1.3123496, 36.785324]
    }, {
      "shop_id": "3b863872-2478-4ac5-8ec8-62079213df26",
      "location": [-1.3149323, 36.785324]
    }, {
      "shop_id": "9774194a-f409-426d-85a7-075895624378",
      "location": [-1.3094778, 36.77335]
    }, {
      "shop_id": "e0810237-b11c-4fee-b87b-d8801f8d3aac",
      "location": [-1.3080764, 36.77585]
    }, {
      "shop_id": "2340d3a5-cbcd-4721-8813-daf2969e092d",
      "location": [-1.3094645, 36.775707]
    }, {
      "shop_id": "eaab2d14-eeaf-49dc-b403-b43dfda3be90",
      "location": [-1.3096004, 36.7758]
    }, {
      "shop_id": "e42485d0-a0b7-4192-a463-63f6fdfec25c",
      "location": [-1.3096794, 36.775715]
    }, {
      "shop_id": "b836e7cc-c64d-4d29-af75-79e63a84b8b8",
      "location": [-1.3097205, 36.77576]
    }, {
      "shop_id": "c4958b53-5145-45ab-94f5-0dbcad90e030",
      "location": [-1.3104773, 36.77568]
    }, {
      "shop_id": "8186f8bf-f17b-4e16-9d61-eedaebf75099",
      "location": [-1.3113111, 36.77658]
    }, {
      "shop_id": "2f131bcc-28b6-4dc9-bcaa-b744cf379a10",
      "location": [-1.3117605, 36.777298]
    }, {
      "shop_id": "9529d270-8d04-4fb1-a986-3e60e4924abc",
      "location": [-1.3138794, 36.779594]
    }, {
      "shop_id": "a737541d-052a-4b40-981d-ad190e286db5",
      "location": [-1.3139033, 36.77758]
    }, {
      "shop_id": "a2bdb091-df30-4a0a-bce1-bf77cf28f922",
      "location": [-1.3132036, 36.777466]
    }, {
      "shop_id": "4e536640-f0c6-4185-9b80-f4bb7f53795b",
      "location": [-1.3088067, 36.78102]
    }, {
      "shop_id": "35654bab-7ce9-4a59-b79a-c55a5baab0d8",
      "location": [-1.3098944, 36.780464]
    }, {
      "shop_id": "64273358-3210-4d56-895c-c0c831e845db",
      "location": [-1.310154, 36.780777]
    }, {
      "shop_id": "38ae0b56-e30b-4ff1-a476-4e2217850bd6",
      "location": [-1.3107423, 36.78153]
    }, {
      "shop_id": "e642de4e-62a9-4e4f-a03e-ad21c2a73bd4",
      "location": [-1.3113723, 36.782818]
    }, {
      "shop_id": "181b64ea-5ad2-4add-af85-37990d1c584b",
      "location": [-1.3101773, 36.785866]
    }, {
      "shop_id": "b8cf97b8-e05a-427e-8862-ace3254c6491",
      "location": [-1.3098129, 36.785923]
    }, {
      "shop_id": "e48a69f1-ef51-4c4c-84fc-322e85db4d4e",
      "location": [-1.3103126, 36.786945]
    }, {
      "shop_id": "118ff2ea-bc4f-414f-b1db-b8866b97711d",
      "location": [-1.3106079, 36.78721]
    }, {
      "shop_id": "e781328b-575f-47e4-904e-34d1bd3f0c5b",
      "location": [-1.31, 36.79]
    }, {
      "shop_id": "a7b05e65-5721-4872-9856-29ba04ed0481",
      "location": [-1.3117245, 36.793194]
    }, {
      "shop_id": "d6b4da1e-9327-4f95-80ee-29c58224222e",
      "location": [-1.311525, 36.794056]
    }, {
      "shop_id": "1c91e169-efd7-457d-8530-6d03d355c7e4",
      "location": [-1.3112189, 36.795277]
    }, {
      "shop_id": "f50b84ac-4737-4f63-90ea-7b69ccd857d5",
      "location": [-1.3127717, 36.794544]
    }, {
      "shop_id": "1fea668b-2a36-4c0d-ad64-46e0e3249dc5",
      "location": [-1.3146482, 36.796276]
    }, {
      "shop_id": "dc50b8df-d376-454b-a392-ffb50ecc114e",
      "location": [-1.3137914, 36.797424]
    }, {
      "shop_id": "f845b3ae-41fc-4a3c-b5e1-6edd85760b44",
      "location": [-1.3134223, 36.79719]
    }, {
      "shop_id": "d5a2a20a-1363-4657-8d4d-7d94e5cb5af5",
      "location": [-1.3132617, 36.797295]
    }, {
      "shop_id": "c976690f-b70d-4a22-b0bd-495f26788f84",
      "location": [-1.3133475, 36.797607]
    }, {
      "shop_id": "7661dd3f-b818-4809-924b-12635502b2f8",
      "location": [-1.3141032, 36.79633]
    }, {
      "shop_id": "1d31faa7-7548-4b03-933f-069459316e54",
      "location": [-1.3129146, 36.79838]
    }, {
      "shop_id": "890fc4ff-81f4-43dc-8510-e637ad4e32e7",
      "location": [-1.3125445, 36.798645]
    }, {
      "shop_id": "c246fbec-af35-4e40-8fd9-77cd5995222b",
      "location": [-1.3149054, 36.800976]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kiambu Road 2",
    "route_id": "4f87d3fa-208f-4cb6-9e99-2713aecd8e09",
    "matrix_info": {
      "DistanceMatrixAPI requests": 636,
      "cache_hit": "75%"
    },
    "distance": "71.28km",
    "path": "`ijF{`p_F{pEafB~H_]xW_cABYUMBIZi@@ADM{AeLqH}MiKcH{CzGnEyh@_JABdUuKtBgCxF{@bBMPAFAHMGSMA?GDLOHK^~@kBbCwVrHu@kAq@bBoXfPe@Fgf@jbAsFhVkrQdkDs@B_B|BMxHrF~@zXfi@GPzjDvkEt}C{ZppEmqJbSwZjDmCBCb@TrUpaH~sHyuD",
    "shops": [{
      "shop_id": "4c2ff557-b8c7-47c5-a39e-06a44e7f5dfa",
      "location": [-1.171227, 36.803986]
    }, {
      "shop_id": "9c48f02c-9423-4fb3-b3e9-0d7777eab2f0",
      "location": [-1.1728339, 36.80879]
    }, {
      "shop_id": "beb78536-44ee-466a-bb0c-380b55d5a083",
      "location": [-1.1767972, 36.819675]
    }, {
      "shop_id": "57c3b1bb-caac-4a72-b7c0-7833fd071c95",
      "location": [-1.1768161, 36.819798]
    }, {
      "shop_id": "aa7faf54-ba4f-4e43-9236-35bc3546eb05",
      "location": [-1.1767071, 36.81987]
    }, {
      "shop_id": "0d707d06-17d0-4113-adbb-f0c6f28c345c",
      "location": [-1.1767299, 36.819923]
    }, {
      "shop_id": "70e123b3-2917-4c44-8355-ac80a38dff96",
      "location": [-1.1768708, 36.820126]
    }, {
      "shop_id": "d1c0d7af-f906-445e-a141-0f341b14ea6c",
      "location": [-1.1768814, 36.820145]
    }, {
      "shop_id": "a6f54dd7-e4e6-4515-a933-85b5b9ea28c6",
      "location": [-1.176911, 36.82021]
    }, {
      "shop_id": "e677695e-0f2f-4bfb-b1ff-cfb1d67899b7",
      "location": [-1.1764477, 36.82232]
    }, {
      "shop_id": "5af221a2-3940-44e3-8f21-fc510a3ebdb6",
      "location": [-1.174923, 36.82471]
    }, {
      "shop_id": "c6c860f0-723b-4268-9df4-14fa26d40ede",
      "location": [-1.1729531, 36.826168]
    }, {
      "shop_id": "c8ae185b-f8ec-41ac-a3b2-94e969aa9bfd",
      "location": [-1.1721658, 36.82475]
    }, {
      "shop_id": "af698ba4-bf9a-431d-ab02-faa46304a70f",
      "location": [-1.1732147, 36.831444]
    }, {
      "shop_id": "0e94062f-2454-441c-b387-4a1bed5d7cf8",
      "location": [-1.1714507, 36.831448]
    }, {
      "shop_id": "a5f7f300-1df0-405e-a800-02e1bf003ac0",
      "location": [-1.1714681, 36.8279]
    }, {
      "shop_id": "f347ff51-dc6f-4e87-821d-8b88b9225f40",
      "location": [-1.1694436, 36.827305]
    }, {
      "shop_id": "9dc8f935-9b8c-48d2-8650-f9c94028302c",
      "location": [-1.1687597, 36.82606]
    }, {
      "shop_id": "eb5e47e9-bf03-498d-aff7-acd1f1cce6f2",
      "location": [-1.16846, 36.82556]
    }, {
      "shop_id": "7049c9f3-2c82-40cc-b030-a28ba01450b7",
      "location": [-1.1683893, 36.825474]
    }, {
      "shop_id": "1d5bcf74-7c5d-41c6-822c-4c491cf2834d",
      "location": [-1.1683751, 36.82543]
    }, {
      "shop_id": "f38c6669-e0ef-491f-92c3-520b104cd696",
      "location": [-1.168365, 36.825375]
    }, {
      "shop_id": "6c498777-2913-4ac2-9320-bf4700a62766",
      "location": [-1.1682974, 36.82542]
    }, {
      "shop_id": "fb3046f3-e489-4e2e-9f05-225991a1538c",
      "location": [-1.1681997, 36.825493]
    }, {
      "shop_id": "b1885b48-a777-4e7d-942f-f558d95bc012",
      "location": [-1.168186, 36.82549]
    }, {
      "shop_id": "c8832ef6-1899-4be6-ae49-27afcf9563aa",
      "location": [-1.1681505, 36.82546]
    }, {
      "shop_id": "99f5c9c3-a130-45dd-82b1-a399d06a1c4e",
      "location": [-1.1682235, 36.825542]
    }, {
      "shop_id": "89591aa1-64ff-4d34-915f-0aeca5bba83e",
      "location": [-1.1682742, 36.8256]
    }, {
      "shop_id": "95ad12cf-dd2b-4cb0-be9c-1b045f579a7d",
      "location": [-1.1684318, 36.825275]
    }, {
      "shop_id": "3107e74f-1714-4b15-b867-028276ee6003",
      "location": [-1.1678914, 36.82462]
    }, {
      "shop_id": "9c9897e3-7722-47c9-98a9-f755e18a960e",
      "location": [-1.1640878, 36.82308]
    }, {
      "shop_id": "67e02f77-9ccf-4ea0-b41f-2432e141d2da",
      "location": [-1.163824, 36.823456]
    }, {
      "shop_id": "e23dbc93-157b-496a-bb2a-a99366bd807f",
      "location": [-1.1635654, 36.822956]
    }, {
      "shop_id": "898d97a6-16ad-4351-9f91-cc931cd14f4a",
      "location": [-1.159487, 36.820198]
    }, {
      "shop_id": "d8f61250-d98b-4594-bf97-7e67b1524c4c",
      "location": [-1.159295, 36.82016]
    }, {
      "shop_id": "d11e4de5-5843-4629-8187-32c6e9e2c103",
      "location": [-1.1530174, 36.80938]
    }, {
      "shop_id": "8d1967b7-9e1c-4e5c-8624-6538ee06b2af",
      "location": [-1.1517984, 36.805653]
    }, {
      "shop_id": "c85fb212-bd70-483f-b010-771d6249ee71",
      "location": [-1.0565399, 36.778095]
    }, {
      "shop_id": "fa6b2488-9180-4151-b937-94d6067dbd37",
      "location": [-1.0562814, 36.77808]
    }, {
      "shop_id": "bd9ceb62-2343-4664-9b77-7c3b0acce350",
      "location": [-1.0557994, 36.77745]
    }, {
      "shop_id": "d2ae63e2-b1bb-4fcf-a607-01851b60e8ac",
      "location": [-1.0557269, 36.775875]
    }, {
      "shop_id": "600a1f20-7cfe-4651-abe0-44ee45e65710",
      "location": [-1.0569504, 36.77556]
    }, {
      "shop_id": "98a30285-c497-4c26-905e-200be60d3891",
      "location": [-1.0610901, 36.7688]
    }, {
      "shop_id": "c6a9c238-76f4-45b6-b34b-27a1661d77ff",
      "location": [-1.0610468, 36.76871]
    }, {
      "shop_id": "ffa917d4-9c68-4413-9a39-2c6118d2cb08",
      "location": [-1.0885513, 36.735954]
    }, {
      "shop_id": "798f312c-71a8-4ef6-a530-cf176403f141",
      "location": [-1.11393809318542, 36.7404098510742]
    }, {
      "shop_id": "2a8205bb-e78d-4c30-8cd1-a18934a27e86",
      "location": [-1.1474717, 36.799683]
    }, {
      "shop_id": "7945a80f-47f0-4e32-96b2-ad72394065be",
      "location": [-1.1506945, 36.80412]
    }, {
      "shop_id": "aea12021-98fe-4ab6-aca0-6244bd4926bf",
      "location": [-1.1515471, 36.804832]
    }, {
      "shop_id": "f94fb4bf-9c3d-4acb-824e-f74b8c7f1a3b",
      "location": [-1.1515695, 36.80485]
    }, {
      "shop_id": "a77a7cd2-7413-401c-839b-08529391504c",
      "location": [-1.1517471, 36.804745]
    }, {
      "shop_id": "6a936bce-6ba3-45c7-b9d9-725cc1c9858c",
      "location": [-1.1553652, 36.75825]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Machakos 1",
    "route_id": "5e6687f8-f29a-4f19-b7dc-d946540b2706",
    "matrix_info": {
      "DistanceMatrixAPI requests": 184,
      "cache_hit": "89%"
    },
    "distance": "95.31km",
    "path": "n{hH_ilbFse@}XoCq[|KeQGl@aBiAEGJwBFDpuBqjDzU_eBdyBu{BwaDvqB{tAijBCwCSF@e@Ca@a@Fd@i@WaAof@yfBGKa`E{nE}|Cq{GsC}H_A[dByC@ROeAbJ}QFyA?QBi@x@TZg@yA_CWeA`GzEUZ_D|FuoHyqEsyJp{Bbf`@xqb@hT~t@",
    "shops": [{
      "shop_id": "fc3b9424-9889-4473-9798-dde3d7403115",
      "location": [-1.519015, 37.263992]
    }, {
      "shop_id": "58c6e9ee-6c6b-402a-9871-1e1a3d7b87af",
      "location": [-1.5183027, 37.26856]
    }, {
      "shop_id": "f25e4ad9-8bc4-4192-ba0a-93b52a9b1464",
      "location": [-1.520369, 37.271465]
    }, {
      "shop_id": "b6de3dea-8117-4d65-9793-8c889df9731b",
      "location": [-1.520332, 37.27124]
    }, {
      "shop_id": "2659b8f9-5f5b-4ff5-bbd9-af53c95eb384",
      "location": [-1.5198374, 37.27161]
    }, {
      "shop_id": "635f5ae6-a60f-4b4d-b979-6cbee9c2cbe5",
      "location": [-1.5198092, 37.271652]
    }, {
      "shop_id": "11c1ce51-f294-4357-8470-90d818c54f0b",
      "location": [-1.5198722, 37.272247]
    }, {
      "shop_id": "3bd9c2f9-16e5-4a5b-a908-40876369b7d1",
      "location": [-1.519906, 37.272217]
    }, {
      "shop_id": "0c5c5b44-e177-4999-8a42-e08598da09cf",
      "location": [-1.5388821, 37.29967]
    }, {
      "shop_id": "59ab4008-8169-4db4-adf7-7f2ef9ae87a1",
      "location": [-1.5425382, 37.31599]
    }, {
      "shop_id": "b75279da-b3a7-4d08-9006-44c9a3256ce9",
      "location": [-1.562092, 37.335938]
    }, {
      "shop_id": "f3752b22-f4bb-4438-a6dd-482d86740f5d",
      "location": [-1.5360484, 37.317577]
    }, {
      "shop_id": "c79bc565-4b6d-4d57-a453-f4671da519e8",
      "location": [-1.5223109, 37.334747]
    }, {
      "shop_id": "5da63593-f6ff-4ee3-82d6-015f38833be5",
      "location": [-1.5222938, 37.335514]
    }, {
      "shop_id": "23085759-4477-42ec-9be1-55a3d78a8781",
      "location": [-1.5221854, 37.33547]
    }, {
      "shop_id": "869b0ba6-617f-41b5-b06e-c6665f4d280c",
      "location": [-1.52220225334167, 37.3356628417969]
    }, {
      "shop_id": "d45e9e87-99f1-4043-a3e6-acc40c226f69",
      "location": [-1.5221771, 37.33583]
    }, {
      "shop_id": "1aed69cf-8849-4744-805e-53fc5e4f9cf0",
      "location": [-1.5220093, 37.335793]
    }, {
      "shop_id": "9c9d656a-0df8-474e-bc2b-e6c931a3b263",
      "location": [-1.5221981, 37.336002]
    }, {
      "shop_id": "8a28a9ee-2d90-43c5-aa70-c981b9cc7349",
      "location": [-1.5220762, 37.336327]
    }, {
      "shop_id": "44d515c0-c435-4187-9b11-eec73d08d569",
      "location": [-1.5157568, 37.35294]
    }, {
      "shop_id": "c4f75dee-92ca-4284-86df-6f582e4e2f8d",
      "location": [-1.515724, 37.353]
    }, {
      "shop_id": "96d1b0b4-249a-4fed-ac01-0ab1c984f018",
      "location": [-1.4848294, 37.38626]
    }, {
      "shop_id": "6f754bc1-ae55-400b-9e92-422651b14090",
      "location": [-1.4595611, 37.431786]
    }, {
      "shop_id": "ec0bbe96-5420-49c8-830f-a21dbcb5ca1e",
      "location": [-1.4588178, 37.433384]
    }, {
      "shop_id": "83b341ad-00d2-4f5c-a90d-f042396dde89",
      "location": [-1.4584968, 37.433517]
    }, {
      "shop_id": "6dc53e95-4e39-42f0-b4ec-7b527368f24e",
      "location": [-1.45901381969452, 37.4342880249023]
    }, {
      "shop_id": "bcee6e98-1dc5-45c0-b90d-c08c8db60464",
      "location": [-1.4590178, 37.434185]
    }, {
      "shop_id": "1d867eb1-874e-497b-9dd8-da4ddd21388f",
      "location": [-1.4589357, 37.434544]
    }, {
      "shop_id": "72c10f20-38a3-46ce-ac41-ae12144c0131",
      "location": [-1.4607162, 37.43757]
    }, {
      "shop_id": "329a1c4f-f5ee-4f9c-9a9b-bb90c90b3dc0",
      "location": [-1.4607595, 37.43802]
    }, {
      "shop_id": "2d887ed4-7720-4e13-990f-43ffdba83235",
      "location": [-1.460764, 37.438107]
    }, {
      "shop_id": "25fc9832-bd1f-48ef-b67e-64cdcc485ecb",
      "location": [-1.4607848, 37.43832]
    }, {
      "shop_id": "91546134-240f-4d65-a4e2-d4d472d4370a",
      "location": [-1.4610724, 37.438213]
    }, {
      "shop_id": "7ec158ec-03e0-4cca-8a15-6bdb7fa63471",
      "location": [-1.4612063, 37.438408]
    }, {
      "shop_id": "f60703c4-f99c-4ccb-8f76-d3b864fddffc",
      "location": [-1.4607619, 37.439053]
    }, {
      "shop_id": "a151e0b7-7507-4540-bc5c-7d8602ee3b1a",
      "location": [-1.4606442, 37.4394]
    }, {
      "shop_id": "cbc4ea60-93e3-4636-b9a2-4970000afcea",
      "location": [-1.4619281, 37.4383]
    }, {
      "shop_id": "5a50ec20-5bad-4616-af88-32ba00d08558",
      "location": [-1.4618171, 37.438164]
    }, {
      "shop_id": "ebdd230d-356d-4ea6-8d33-18b74a9fbea6",
      "location": [-1.4610205, 37.43689]
    }, {
      "shop_id": "1c56278f-d05b-44ee-8f77-856cc52054f8",
      "location": [-1.4122713, 37.470623]
    }, {
      "shop_id": "5a8cb617-be41-4fc2-8b06-207f7e09685c",
      "location": [-1.3516943, 37.45069]
    }, {
      "shop_id": "8919d656-527c-4038-86c0-733d90e414f3",
      "location": [-1.5217948, 37.26848]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kiserian",
    "route_id": "a532f203-da12-4e58-883a-8f9a1d3b45bd",
    "matrix_info": {
      "DistanceMatrixAPI requests": 618,
      "cache_hit": "77%"
    },
    "distance": "36.05km",
    "path": "zipGwtf_FYRakGrvKrz@_@}PdDIAeCVI~@Kt@JNk@~AQZEAqErh@W|@@pAhS?zAcG_YnKPtB@h@LNCfBaAdBgEO|KdTODl@fAORKEHp@PRAPsGxNQTsJsB{B~DbD}Hx@kHgZp@PWwGe@}u@kr@oAKcK_C{A}HwEkZvq@jF~AfBkV}[vIaCrIaEvLmOroHcrJ",
    "shops": [{
      "shop_id": "2b1a20ac-1ca4-4f0a-87af-d4d788be52c2",
      "location": [-1.3993706, 36.73938]
    }, {
      "shop_id": "b3dbe12a-9724-4e25-a025-b1b05de576b9",
      "location": [-1.3564801, 36.67416]
    }, {
      "shop_id": "121c51aa-b7ed-471d-bd86-338660dc184f",
      "location": [-1.3660202, 36.67432]
    }, {
      "shop_id": "98db196d-732f-4d4c-b076-3f5fec51e088",
      "location": [-1.3631487, 36.67349]
    }, {
      "shop_id": "10f151e8-6ea3-4f97-8f44-d76b37fcd64c",
      "location": [-1.3631003, 36.6735]
    }, {
      "shop_id": "54a3ac9b-86a2-4287-98bb-a824a85c3f84",
      "location": [-1.36243069171906, 36.6733818054199]
    }, {
      "shop_id": "68b71314-520a-4059-8e13-c9010a3b3843",
      "location": [-1.3623794, 36.67306]
    }, {
      "shop_id": "84323695-6182-4add-b58f-0b878ab71e8d",
      "location": [-1.3623182, 36.672794]
    }, {
      "shop_id": "c07ee1b5-d7ee-4207-92a9-5ade6f2723a2",
      "location": [-1.3623796, 36.67271]
    }, {
      "shop_id": "a53ee7d2-d12f-4c2b-b1cb-f573b4552007",
      "location": [-1.3621562, 36.67223]
    }, {
      "shop_id": "58f8a62f-deed-4b47-87f6-928a68947772",
      "location": [-1.3620684, 36.672092]
    }, {
      "shop_id": "b6825c29-90f2-4c00-9a22-2bc422d0ec1a",
      "location": [-1.3620379, 36.672104]
    }, {
      "shop_id": "01ae359b-3af6-406f-a251-fd2416e140bd",
      "location": [-1.3609931, 36.665436]
    }, {
      "shop_id": "deb42e13-de2e-4075-8b38-c34e557eb8b6",
      "location": [-1.36086928844452, 36.6651306152344]
    }, {
      "shop_id": "1fa40bf3-9f11-4042-a2aa-ab9c13f5ce26",
      "location": [-1.3608817, 36.66472]
    }, {
      "shop_id": "27ae8cf0-dbc8-46ce-8ddb-be923238c742",
      "location": [-1.3641336, 36.664722]
    }, {
      "shop_id": "2d042d1c-ec12-4b03-8884-e58cfd0c475c",
      "location": [-1.3645927, 36.666023]
    }, {
      "shop_id": "35c296bb-b29a-4f27-8db1-e8c18cc1bf44",
      "location": [-1.36043238639832, 36.6640205383301]
    }, {
      "shop_id": "144edb13-b5dd-4cac-a551-9c5b37418ff6",
      "location": [-1.360516, 36.66343]
    }, {
      "shop_id": "d9ef73a0-acc0-4ab2-8ff0-7fb6b6ae3e03",
      "location": [-1.3605283, 36.66322]
    }, {
      "shop_id": "33511ce6-1e3f-49b3-b376-033436eed4b8",
      "location": [-1.3606045, 36.66314]
    }, {
      "shop_id": "49577fd3-29da-4b69-b9ec-2de827459962",
      "location": [-1.3605789, 36.662617]
    }, {
      "shop_id": "056426d3-315c-4c77-9a6c-e3659fdb07ea",
      "location": [-1.3602512, 36.66211]
    }, {
      "shop_id": "a9380fa1-ef3a-441a-80a0-1d810123373b",
      "location": [-1.35924875736237, 36.6621856689453]
    }, {
      "shop_id": "bd0775fe-4db6-4de7-b7d2-516466f65d30",
      "location": [-1.3613167, 36.6588]
    }, {
      "shop_id": "8a334e49-9490-439e-a15e-61eb541c5a1b",
      "location": [-1.3612413, 36.65877]
    }, {
      "shop_id": "fde48cf2-515a-40ab-a60d-718824fc23b4",
      "location": [-1.3614719, 36.658413]
    }, {
      "shop_id": "be1d153b-47da-45dd-b755-e45ebc55327f",
      "location": [-1.3613862, 36.658314]
    }, {
      "shop_id": "2d29387c-b458-4faf-aa5b-b75b2057ac40",
      "location": [-1.3613338, 36.65834]
    }, {
      "shop_id": "57a6fa41-5735-43b6-b860-e64030a060e7",
      "location": [-1.3613849, 36.658085]
    }, {
      "shop_id": "6d52e8fe-02f5-4539-84e0-69e3eb0c2b62",
      "location": [-1.361466, 36.657993]
    }, {
      "shop_id": "05bd4be5-412f-4db6-b1a3-a21ae87f1a98",
      "location": [-1.3614587, 36.657898]
    }, {
      "shop_id": "95b462dc-e4f9-4f63-8fda-0d38c6636c24",
      "location": [-1.36008489131927, 36.6553726196289]
    }, {
      "shop_id": "2332b8c4-20a2-4697-b876-23662db12df8",
      "location": [-1.3599873, 36.65526]
    }, {
      "shop_id": "b2feef5d-59ec-480e-916b-58e079c0af68",
      "location": [-1.358128, 36.655838]
    }, {
      "shop_id": "a956f93c-0718-4052-bf35-810f237531a1",
      "location": [-1.35750615596771, 36.6548843383789]
    }, {
      "shop_id": "3c9c1e2d-0114-4ff4-a957-01b53d5e7e11",
      "location": [-1.3583317, 36.656467]
    }, {
      "shop_id": "81530e5a-59b1-43ba-a92b-a6cd8ad3eeba",
      "location": [-1.358624, 36.657967]
    }, {
      "shop_id": "efc4a4cc-8f2e-4a0f-9db7-66085a17e695",
      "location": [-1.35426, 36.65772]
    }, {
      "shop_id": "0ce1c542-b8e7-4d46-8a0c-072474abde32",
      "location": [-1.35435020923615, 36.6578369140625]
    }, {
      "shop_id": "1b0cf52d-57b5-4485-9b34-cbb9c1a124cb",
      "location": [-1.352951, 36.658028]
    }, {
      "shop_id": "adbc4f00-7f2f-4f9f-8b29-1b9be6427a05",
      "location": [-1.3441607, 36.666245]
    }, {
      "shop_id": "a944eef2-e002-4e5a-98f3-a6c8f3db5ffc",
      "location": [-1.3437644, 36.666306]
    }, {
      "shop_id": "90ec525d-9d38-47f4-9035-bf40dd5f74fa",
      "location": [-1.3418212, 36.66695]
    }, {
      "shop_id": "cfecb383-31ce-4a04-98ee-e9d2a7a2e82d",
      "location": [-1.34136354923248, 36.6685447692871]
    }, {
      "shop_id": "918a6364-d133-4f76-ad0d-5c7d26fd1de8",
      "location": [-1.3402818, 36.672924]
    }, {
      "shop_id": "207223f8-2354-4493-a223-f8dee2b59d70",
      "location": [-1.3483987, 36.67174]
    }, {
      "shop_id": "4036747b-5f55-4333-801d-0a352e961716",
      "location": [-1.348878, 36.671223]
    }, {
      "shop_id": "2e88676a-0f37-4954-91e5-9155600bbfcc",
      "location": [-1.3451374, 36.67585]
    }, {
      "shop_id": "f18b7e5c-8332-440a-af7c-23fbf939a70e",
      "location": [-1.3468617, 36.6765]
    }, {
      "shop_id": "3fba0027-ab01-49c9-8bf9-022210d24488",
      "location": [-1.3485619, 36.677467]
    }, {
      "shop_id": "df4f4b53-c362-4f6b-a602-585d7a58e9d8",
      "location": [-1.35076105594635, 36.6800994873047]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Lavington",
    "route_id": "ed42a2c7-d733-4bd6-8232-ac0e7f9e096b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 295,
      "cache_hit": "85%"
    },
    "distance": "42.32km",
    "path": "tz|Fmdx_FcxB||EYeEcFz[td@`HECAIGGTDAY@ARIoe@xt@d[gBvDv@[f@Lr@}@~CQ|`@qUbWCm@GIeBbEuU~y@r@nBxrAm~@fGeJ_@EgFwINKESxAs@lMA^iHXFrs@~B{KzfBkBkhBoU?gPy^nYc]aDcMdISx@aZfWwkCt~AcxD}jBhvA",
    "shops": [{
      "shop_id": "00973bb1-a9bf-491c-9d72-bb67700368cc",
      "location": [-1.2804117, 36.79352]
    }, {
      "shop_id": "00de6c36-205a-4bd0-b51d-4fd80185714f",
      "location": [-1.2802774, 36.794514]
    }, {
      "shop_id": "2df14f39-c623-4bde-9258-6f20c7008ee9",
      "location": [-1.2791363, 36.789886]
    }, {
      "shop_id": "af1e0b2d-6d25-4e24-a6c7-c8a97cb8429e",
      "location": [-1.2851748, 36.78844]
    }, {
      "shop_id": "9e0e08d8-734a-45eb-8adc-462f1bb35ce2",
      "location": [-1.2851369, 36.788456]
    }, {
      "shop_id": "ab823ab1-69ae-4e0d-b970-f89e4c7bb15e",
      "location": [-1.2851303, 36.788513]
    }, {
      "shop_id": "c6079de9-d098-4806-8803-a6c091ec576b",
      "location": [-1.2850857, 36.788548]
    }, {
      "shop_id": "3833dbde-c66e-4170-8917-ccb72c798877",
      "location": [-1.285203, 36.788517]
    }, {
      "shop_id": "94d65180-66e0-4b15-b29f-604628c23112",
      "location": [-1.2851882, 36.78865]
    }, {
      "shop_id": "2fb1d726-4c18-4ca7-90e9-0ecb859a6750",
      "location": [-1.28520429134369, 36.7886619567871]
    }, {
      "shop_id": "e866047b-6d8d-4cd1-bd47-00e457594b10",
      "location": [-1.2852954, 36.788708]
    }, {
      "shop_id": "7259cbb6-92a5-407f-bc6c-473725cccb8b",
      "location": [-1.2791367, 36.780098]
    }, {
      "shop_id": "a4daeb0c-3278-458b-a830-a3fe1294ccc5",
      "location": [-1.2836457, 36.78062]
    }, {
      "shop_id": "5ad0b755-5daa-417a-855c-269cd98d1ded",
      "location": [-1.2845705, 36.78034]
    }, {
      "shop_id": "03f349b6-8fac-485c-96d9-dbefd74b897f",
      "location": [-1.2844307, 36.78014]
    }, {
      "shop_id": "263cc62c-ef76-498d-a766-4d25505c71bd",
      "location": [-1.284504, 36.77988]
    }, {
      "shop_id": "98acce57-9511-4eaa-97a2-b5054a2196cf",
      "location": [-1.2841938, 36.77908]
    }, {
      "shop_id": "20095a27-f05e-4f22-9735-484b9cbfe3c8",
      "location": [-1.2841024, 36.773647]
    }, {
      "shop_id": "3672377d-c0c6-4004-a5a1-2143c00e6949",
      "location": [-1.2804931, 36.769787]
    }, {
      "shop_id": "eeb2bea7-3cd3-4e33-bfdc-f0fd4bd1ec83",
      "location": [-1.2804712, 36.77002]
    }, {
      "shop_id": "c4ce2180-b446-4db5-8859-770b8290dcfc",
      "location": [-1.28043, 36.770065]
    }, {
      "shop_id": "6548fa44-b64f-45aa-a7ae-9305ba2748dd",
      "location": [-1.279921, 36.76909]
    }, {
      "shop_id": "c2ceff06-7d38-4c52-a229-b0bf97baa158",
      "location": [-1.2762864, 36.759647]
    }, {
      "shop_id": "d7f06af4-2f9d-4c78-b4a6-8275bb709235",
      "location": [-1.2765535, 36.759087]
    }, {
      "shop_id": "e9169286-1655-495b-b776-6ef6cceb0ed2",
      "location": [-1.2899607, 36.769238]
    }, {
      "shop_id": "6b2ab895-e74c-4cce-9b8c-6e9fa2eae95c",
      "location": [-1.2912842, 36.77103]
    }, {
      "shop_id": "128eed53-c1f6-407c-8946-74cca5dfe422",
      "location": [-1.2911173, 36.771057]
    }, {
      "shop_id": "ef74c2e6-a531-4af7-96da-7cc76b82cf2e",
      "location": [-1.2899587, 36.772778]
    }, {
      "shop_id": "68695d56-366f-472e-93e3-bc353fd186fa",
      "location": [-1.2900394, 36.77284]
    }, {
      "shop_id": "8ac165ab-bb6f-4a72-bbce-79aa3ae2032e",
      "location": [-1.2900141, 36.77294]
    }, {
      "shop_id": "ac51c8c8-7cfc-41d2-bfe8-08416f7a28f9",
      "location": [-1.2904589, 36.7732]
    }, {
      "shop_id": "27cf411c-6552-4b2e-be27-ac453eeabedf",
      "location": [-1.2927684, 36.773212]
    }, {
      "shop_id": "ff822759-d7f2-4b9f-bbef-23b4e6aef10d",
      "location": [-1.2929316, 36.7747]
    }, {
      "shop_id": "670778bd-d51d-4f99-a36e-fd222a0145e4",
      "location": [-1.29306316375732, 36.7746620178223]
    }, {
      "shop_id": "d39bb293-8088-47fe-a30d-bff835dfc4e3",
      "location": [-1.3014761, 36.77402]
    }, {
      "shop_id": "a4763aad-9101-48f0-bce9-b0662db41cc0",
      "location": [-1.2994163, 36.757397]
    }, {
      "shop_id": "e84d63f8-3c28-4064-8ca2-b8b79c07c7eb",
      "location": [-1.2988834, 36.77426]
    }, {
      "shop_id": "6523fec6-2ee1-4b5d-b666-cd9dac89129a",
      "location": [-1.2952807, 36.774258]
    }, {
      "shop_id": "afcd9a2d-07d0-4980-a45a-e382ea9f0b6d",
      "location": [-1.2925177, 36.77935]
    }, {
      "shop_id": "d0c1f959-391a-4f1f-83f6-8e8f6e15e0e0",
      "location": [-1.2967573, 36.78417]
    }, {
      "shop_id": "924974e6-271b-4a21-9671-e8b3ebec6ea0",
      "location": [-1.2959538, 36.786434]
    }, {
      "shop_id": "c3e0fff4-b2cf-4401-8806-d501b4184ae8",
      "location": [-1.2975783, 36.786533]
    }, {
      "shop_id": "a4b425eb-70b1-4d24-a2f9-a68c758c1ef5",
      "location": [-1.2978675, 36.790855]
    }, {
      "shop_id": "9cd7e3cf-f833-4837-acf6-ae6de79204cd",
      "location": [-1.30175280570984, 36.8133811950684]
    }, {
      "shop_id": "02d4781c-c244-4742-9191-0c590a889823",
      "location": [-1.3170553445816, 36.8430023193359]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kitengela 2",
    "route_id": "1002e77b-80ca-4b56-952d-581512362491",
    "matrix_info": {
      "DistanceMatrixAPI requests": 544,
      "cache_hit": "76%"
    },
    "distance": "51.99km",
    "path": "dsfG_se`FxfWazJlCLMChJl@`w@nOgU|DnFjIcQmBeBmCoY~@PcGQoA@E~AnC@sLhFh@_Qs@LBANsIGH\\DFaBMu@QQGGLhClC{@`EBBkEOUf@cDvQl@e@BGaJtUMHpJtw@ILaDe~AjI{Ef@oCiDw@aIkElBeF|DkCxCzAAo@y@Q}sVnaK",
    "shops": [{
      "shop_id": "7ec4ae6a-e054-4c06-9ac6-80377947eba6",
      "location": [-1.4739174, 36.958572]
    }, {
      "shop_id": "02398c23-3452-4c8a-9e34-d5e18d43b81b",
      "location": [-1.4746318, 36.9585]
    }, {
      "shop_id": "b8d2d0ad-8f0d-44db-b566-78a40b550fde",
      "location": [-1.4745554, 36.958523]
    }, {
      "shop_id": "53bf3cbc-93b4-423d-b341-a28a607be1cd",
      "location": [-1.4763701, 36.958294]
    }, {
      "shop_id": "8cd7a0cd-a42e-400d-b1d7-684d3ca616e5",
      "location": [-1.4853362, 36.955647]
    }, {
      "shop_id": "f192795e-54f9-4de3-ac83-f88d4d8b20d6",
      "location": [-1.48178, 36.9547]
    }, {
      "shop_id": "c012e56d-d715-4427-9867-dffccd568e30",
      "location": [-1.4829801, 36.95304]
    }, {
      "shop_id": "bdfa38e2-f443-497c-b175-13bfcb001423",
      "location": [-1.48008406162262, 36.9535865783691]
    }, {
      "shop_id": "3e966a74-485b-4077-a81c-a82772b0940c",
      "location": [-1.4795707, 36.954296]
    }, {
      "shop_id": "ec18e8b0-5e59-46ee-8092-90afd8df8331",
      "location": [-1.475331, 36.953983]
    }, {
      "shop_id": "2269e780-4a2d-4611-83f1-f35185422235",
      "location": [-1.4754201, 36.955284]
    }, {
      "shop_id": "94b36e75-dbae-4092-8ba5-8ad2c895ec57",
      "location": [-1.4753339, 36.95568]
    }, {
      "shop_id": "2681693d-59e4-4f90-8f24-1afe1ea0a18f",
      "location": [-1.4753392, 36.95571]
    }, {
      "shop_id": "aff5d0c7-24c5-42fb-9c60-1f305af8592a",
      "location": [-1.475819, 36.954987]
    }, {
      "shop_id": "4f99f00b-634a-4743-8042-4f75aa14f276",
      "location": [-1.4758308, 36.957165]
    }, {
      "shop_id": "55de994b-440b-43ae-84b3-80a85431c992",
      "location": [-1.4770005, 36.956955]
    }, {
      "shop_id": "6f345299-d534-46c3-b011-628a04f52581",
      "location": [-1.474121, 36.95722]
    }, {
      "shop_id": "0a87cde9-6e42-4f41-927a-5b2512e69a62",
      "location": [-1.4741876, 36.957195]
    }, {
      "shop_id": "52f67dcb-314c-4c78-92e5-0ecac1e1ec00",
      "location": [-1.4741768, 36.957115]
    }, {
      "shop_id": "ecfe4cdd-6d4b-42b1-807f-6b9e1a36f0c4",
      "location": [-1.4724848, 36.957157]
    }, {
      "shop_id": "0cee83db-a8d3-4af4-91c0-f2a06c556609",
      "location": [-1.4725348, 36.95701]
    }, {
      "shop_id": "3f5b0bd0-bae7-400d-b9db-4d3e956fe7d3",
      "location": [-1.4725614, 36.95697]
    }, {
      "shop_id": "ada2a394-96db-4db1-a194-bb9e966830ee",
      "location": [-1.4720728, 36.957043]
    }, {
      "shop_id": "70fb9f6d-c9f9-46c9-81e4-640ddafdad5d",
      "location": [-1.4717972, 36.95713]
    }, {
      "shop_id": "39082a35-9db8-4fdc-aa53-d123d4c4e788",
      "location": [-1.4717088, 36.95717]
    }, {
      "shop_id": "f25b73e4-541e-4db5-9217-ee8fdb685f55",
      "location": [-1.4716744, 36.957096]
    }, {
      "shop_id": "421dbbcb-7d75-460a-aad9-28db383259e1",
      "location": [-1.4723561, 36.956394]
    }, {
      "shop_id": "9d8e0b83-4439-4b8e-9c6e-f231c67cce87",
      "location": [-1.4720622, 36.95542]
    }, {
      "shop_id": "3cf5362c-a1ac-411f-b436-7c9c5f804287",
      "location": [-1.4720824, 36.955395]
    }, {
      "shop_id": "b3452664-f61f-41db-b4f8-4de23f2261db",
      "location": [-1.4710628, 36.95548]
    }, {
      "shop_id": "22ae96d4-7dfa-4d51-8bd8-d5fb86a11490",
      "location": [-1.47094964981079, 36.9552803039551]
    }, {
      "shop_id": "e7e7e13c-2325-4a3c-99f7-b355ffb9ed93",
      "location": [-1.4701326, 36.952282]
    }, {
      "shop_id": "cc0149cb-8fe2-46e3-ab16-eb485f801807",
      "location": [-1.4703553, 36.952473]
    }, {
      "shop_id": "7cac01dd-6903-40a2-8149-c8e20b9f1767",
      "location": [-1.4703796, 36.952507]
    }, {
      "shop_id": "3d8fe3f6-111a-451b-a880-2c50d7929680",
      "location": [-1.4686123, 36.94888]
    }, {
      "shop_id": "ffbb5bf6-84c4-4b14-9ec5-1a72fe2ad5a9",
      "location": [-1.4685386, 36.948833]
    }, {
      "shop_id": "6bf4e88f-8125-4f72-9d8f-cfb26bc906ea",
      "location": [-1.4703875, 36.939762]
    }, {
      "shop_id": "be8b8dcf-a03c-4448-995a-b34e10235804",
      "location": [-1.4703394, 36.939686]
    }, {
      "shop_id": "b2da7587-2502-4cc6-b718-848d8467375a",
      "location": [-1.4695288, 36.95492]
    }, {
      "shop_id": "830ea3fb-59f0-499c-a4fd-96d14196c3e3",
      "location": [-1.4711885, 36.95602]
    }, {
      "shop_id": "ef748d0b-0094-427c-a84a-28d938ca7c97",
      "location": [-1.4713918, 36.956738]
    }, {
      "shop_id": "627b4d90-8a1b-4f3f-b056-8a7f422f5bdc",
      "location": [-1.4705449, 36.95702]
    }, {
      "shop_id": "e0cd9e06-f7fb-4a6f-8bab-db3f65ed6b66",
      "location": [-1.4689316, 36.958035]
    }, {
      "shop_id": "33063ec7-34ca-4c53-a7e0-ff63094f3682",
      "location": [-1.4694816, 36.959194]
    }, {
      "shop_id": "73b9cfb0-c534-4460-b5e2-db6c0df8fc5b",
      "location": [-1.4704331, 36.959885]
    }, {
      "shop_id": "9008c39d-89f9-4834-845c-f5f4929a5729",
      "location": [-1.4711983, 36.959427]
    }, {
      "shop_id": "e222b0a6-e200-4078-997d-29e21f66bf84",
      "location": [-1.4711899, 36.959667]
    }, {
      "shop_id": "493a2a4c-def1-44af-80dc-352a183f3f51",
      "location": [-1.4708956, 36.959755]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ngong Road/CBD Route - Key Accounts",
    "route_id": "ec2c8504-c3ad-4d54-bdec-931fd8cb05d2",
    "matrix_info": {
      "DistanceMatrixAPI requests": 2,
      "cache_hit": "66%"
    },
    "distance": "38.58km",
    "path": "dsfG_se`Fy}IleV`JkkGvrIayM",
    "shops": [{
      "shop_id": "ac1f7ba2-98b5-4a6c-96c5-7c95b232397c",
      "location": [-1.2936583, 36.779133]
    }, {
      "shop_id": "ad5f2ece-16eb-47ef-abfe-2e03650c26c6",
      "location": [-1.295431, 36.82207]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Limuru",
    "route_id": "b81634ee-7222-439f-ad45-24e330b8837e",
    "matrix_info": {
      "DistanceMatrixAPI requests": 429,
      "cache_hit": "81%"
    },
    "distance": "57.93km",
    "path": "`ijF{`p_FarIzkVUSb@j@N?cbFj~CI?uASqAWhCbHeFsF_CKqI}A_BiAC}@CGE@A?@B_@SELDc@OADOYNcHe@_EUt@zFj@Zf@fBcTnN{GtF[LdiAmb@?k@UGB[TS?CAIAE\\\\HDDUF?LFoQoGl\\vBv@TyCbHz{HzKxMwaDrzEqmV",
    "shops": [{
      "shop_id": "43a85028-bbb8-4fd5-a34b-8f8fb9b8d833",
      "location": [-1.1505564, 36.667683]
    }, {
      "shop_id": "cae54fed-f318-4dd5-a38f-3c6991774cef",
      "location": [-1.15045309066772, 36.6677780151367]
    }, {
      "shop_id": "da6443cb-b82b-4f95-b99f-19c8a7345b9e",
      "location": [-1.1506282, 36.66756]
    }, {
      "shop_id": "293939e6-0423-4c65-b610-2918a4a612ec",
      "location": [-1.1507144, 36.667557]
    }, {
      "shop_id": "485a33e5-63b5-49b3-8b0f-cc0fd752e6d7",
      "location": [-1.1143726, 36.642056]
    }, {
      "shop_id": "c15402dc-6005-4e5e-8e94-5cc7faaf6d41",
      "location": [-1.1143153, 36.642063]
    }, {
      "shop_id": "a06565a0-7a29-45c2-848f-017b0edd7318",
      "location": [-1.1138885, 36.64216]
    }, {
      "shop_id": "7820fc28-7a07-4db9-aa7d-ee7d77405a25",
      "location": [-1.1134816, 36.64228]
    }, {
      "shop_id": "aabd41c0-7218-4d21-a671-ed0a5a2a81b9",
      "location": [-1.11417365074158, 36.6408157348633]
    }, {
      "shop_id": "1d94b540-e794-4812-bdf5-6fc065072f73",
      "location": [-1.113023, 36.642036]
    }, {
      "shop_id": "17ec9a8c-237b-4e54-9142-464f4392b050",
      "location": [-1.1123763, 36.6421]
    }, {
      "shop_id": "0b5fd5ab-0b08-414c-a801-1d06c5c257f8",
      "location": [-1.1106905, 36.64257]
    }, {
      "shop_id": "d9bbe355-23a4-483f-a69e-69ed79d40567",
      "location": [-1.1102117, 36.642944]
    }, {
      "shop_id": "8d526887-3d9b-49a1-8b34-d9130fe2f01b",
      "location": [-1.110185, 36.643246]
    }, {
      "shop_id": "3c4f27d9-e9c4-488e-a829-113486e4604b",
      "location": [-1.1101726, 36.643288]
    }, {
      "shop_id": "590ccc21-5b79-409a-b60b-a78e2721da6d",
      "location": [-1.1101439, 36.643276]
    }, {
      "shop_id": "2c6c6e6d-6106-4ee3-839a-069dd5365fe7",
      "location": [-1.1101316, 36.643284]
    }, {
      "shop_id": "80109517-7bd9-43ef-ac5a-93c3bb8935fb",
      "location": [-1.1101376, 36.64326]
    }, {
      "shop_id": "548e0305-6867-4fe6-9f4c-b8bf2a27fe46",
      "location": [-1.1099837, 36.643356]
    }, {
      "shop_id": "ea859273-adad-44ea-9935-1ad11b3cd759",
      "location": [-1.1099527, 36.64329]
    }, {
      "shop_id": "aaed22aa-3f28-4efb-9831-f5c034a658b7",
      "location": [-1.1099831, 36.643467]
    }, {
      "shop_id": "a4561572-c320-40b0-b37a-3aaed024641b",
      "location": [-1.1098958, 36.643482]
    }, {
      "shop_id": "ac318d61-2860-4945-a4cd-4760bfd1e50b",
      "location": [-1.1099253, 36.643555]
    }, {
      "shop_id": "7409bcde-beab-46f4-a0d7-c739c8eafaed",
      "location": [-1.1098047, 36.643475]
    }, {
      "shop_id": "a927c28e-ff1b-418a-8c9f-8e6da92e280f",
      "location": [-1.1083429, 36.643673]
    }, {
      "shop_id": "3970a61d-8897-4b4d-9896-920136e7485a",
      "location": [-1.1073765, 36.643776]
    }, {
      "shop_id": "8112bba0-6aa4-4a20-8a70-4408e8c421a7",
      "location": [-1.1076504, 36.642517]
    }, {
      "shop_id": "8a63a39b-47aa-4f3f-aad2-42fe4278cb57",
      "location": [-1.1078655, 36.642384]
    }, {
      "shop_id": "6a17de6b-836e-409d-be16-739ed97a7294",
      "location": [-1.1080714, 36.641857]
    }, {
      "shop_id": "60cfb25e-1f3d-4d26-88ff-6787b87b7ddd",
      "location": [-1.1046873, 36.63938]
    }, {
      "shop_id": "361bf813-7c58-4557-8119-647bcb685358",
      "location": [-1.1032723, 36.638145]
    }, {
      "shop_id": "a518e9c4-4c09-4af1-83e2-237a7e7c85e3",
      "location": [-1.1031252, 36.638077]
    }, {
      "shop_id": "9d3f6ff7-a889-4a66-8259-2f00748594a5",
      "location": [-1.1150006, 36.643753]
    }, {
      "shop_id": "7fa5f415-8d8c-48de-ba38-cec2402eef8e",
      "location": [-1.1150041, 36.64397]
    }, {
      "shop_id": "19938018-7522-45fb-9f41-f031597d285f",
      "location": [-1.1148928, 36.644012]
    }, {
      "shop_id": "fd84bc53-be75-4bec-b555-7c61d99125e9",
      "location": [-1.1149142, 36.644154]
    }, {
      "shop_id": "271add95-6d15-435f-9e66-0a3de9102583",
      "location": [-1.1150162, 36.64425]
    }, {
      "shop_id": "347da1d8-3bf0-490f-ba0b-b72771b7a65a",
      "location": [-1.1150217, 36.64427]
    }, {
      "shop_id": "5ca5c683-475e-4889-87e1-6cdf9904aa0c",
      "location": [-1.1150123, 36.644318]
    }, {
      "shop_id": "f44fa02a-1bfc-4442-956c-c4741ec2dcbc",
      "location": [-1.1150008, 36.64435]
    }, {
      "shop_id": "aaae6105-b7e9-4c37-9c1c-6648d8fcd01f",
      "location": [-1.1151485, 36.6442]
    }, {
      "shop_id": "47dece68-c3f5-4338-adca-a394b42fc613",
      "location": [-1.1151952, 36.644165]
    }, {
      "shop_id": "d2d4d65b-70ba-4424-b935-e261f6b90d48",
      "location": [-1.11522769927979, 36.6442832946777]
    }, {
      "shop_id": "e59a8c9a-37d3-4048-b916-f9d02d5f4b97",
      "location": [-1.1152682, 36.644283]
    }, {
      "shop_id": "53cd4ed1-b3d4-4694-9fa6-bbd778a790de",
      "location": [-1.1153367, 36.64424]
    }, {
      "shop_id": "d043f207-fe4b-4f13-93de-1bbf2e494ef5",
      "location": [-1.1123784, 36.645603]
    }, {
      "shop_id": "3fab2b5b-bdca-44c0-9dd1-7ccfc320d58b",
      "location": [-1.1170852, 36.645]
    }, {
      "shop_id": "943dc5c2-9c17-4197-9755-78f7a070b2ba",
      "location": [-1.1173716, 36.644894]
    }, {
      "shop_id": "4ac726b2-344f-4167-a3c5-96984df16d09",
      "location": [-1.1166039, 36.643433]
    }, {
      "shop_id": "a9e8a81d-da85-46d5-a768-b6fd78b46c33",
      "location": [-1.1672982, 36.641373]
    }, {
      "shop_id": "d1725434-0c2b-411a-aaff-bd6de363efa3",
      "location": [-1.1696672, 36.66741]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Machakos C.B.D",
    "route_id": "60854a1c-a68d-47c2-bc6a-4f14ab161c10",
    "matrix_info": {
      "DistanceMatrixAPI requests": 208,
      "cache_hit": "91%"
    },
    "distance": "101.03km",
    "path": "n{hH_ilbF{Rif@AKGBh@DlAuBECnGdFAPnAVHNMD`@MvAo@e@{@[eB`RrMa@kAAC?AIBtUvF`YrEnRvNb`@|OlGlHjAb@A@dqU_vDPoALY`G`Dv@ZzqGekKYq@^s@REwCZAd@dgBilDzsLlmAb@CnBIp@l@~bBj`BkjBqzAqB`B{aTdrGygC`lEgeWfvCsz@eWiStY",
    "shops": [{
      "shop_id": "963b03eb-a3c6-4835-a8c3-cecbc9653c54",
      "location": [-1.5220155, 37.266125]
    }, {
      "shop_id": "d82662dc-c826-4b1a-ad8b-51743142def2",
      "location": [-1.5220087, 37.26619]
    }, {
      "shop_id": "b2fb241c-17ba-49c2-a6c7-82c56426d64d",
      "location": [-1.5219699, 37.266174]
    }, {
      "shop_id": "48a6ecd5-1219-4333-bb88-cefb4503be28",
      "location": [-1.5221789, 37.266136]
    }, {
      "shop_id": "ca616f8c-5d8f-4481-a038-6b60af21506a",
      "location": [-1.5225677, 37.266735]
    }, {
      "shop_id": "37d6b515-e4db-4b06-855e-064ef1d4d06e",
      "location": [-1.522541, 37.26675]
    }, {
      "shop_id": "d3ea23f3-d25d-43b5-be38-02d196e43ec1",
      "location": [-1.52389776706696, 37.2656021118164]
    }, {
      "shop_id": "50b264a5-7d42-463f-bb9a-d30da5d4fee4",
      "location": [-1.5238873, 37.26551]
    }, {
      "shop_id": "02932d2d-2783-487e-8c79-e0797fd78e75",
      "location": [-1.5242949, 37.26539]
    }, {
      "shop_id": "8415bfd0-20bc-47be-a39d-3253456a5e1b",
      "location": [-1.5243382, 37.265312]
    }, {
      "shop_id": "a92db631-e421-4625-bea5-9b7170a74825",
      "location": [-1.52427017688751, 37.2652778625488]
    }, {
      "shop_id": "989f1211-b752-41c4-bbbe-6b44065b99f3",
      "location": [-1.5244397, 37.265347]
    }, {
      "shop_id": "73b63a89-700e-4ebd-bb46-3ec67bf8bf02",
      "location": [-1.524877, 37.26559]
    }, {
      "shop_id": "997e0627-7fb4-4a9a-8d18-b14b0124d12f",
      "location": [-1.5246857, 37.265892]
    }, {
      "shop_id": "b6610fd1-8d11-4908-a4fb-a0e893019aab",
      "location": [-1.5245525, 37.266403]
    }, {
      "shop_id": "bff1bf39-088f-4805-a68a-c89567beaa1e",
      "location": [-1.5276035, 37.26406]
    }, {
      "shop_id": "5d8f9da7-9022-446a-ab33-d6a0e6d9849e",
      "location": [-1.5274282, 37.264435]
    }, {
      "shop_id": "b4cd110b-8e97-4ce0-8f00-1fd4f593f597",
      "location": [-1.5274189, 37.26446]
    }, {
      "shop_id": "556282cd-38ed-4b59-92ec-d54232d0580d",
      "location": [-1.527421, 37.264473]
    }, {
      "shop_id": "808f5ab7-77e0-483d-99d9-22122e68f6b5",
      "location": [-1.52736711502075, 37.2644500732422]
    }, {
      "shop_id": "81ad35a2-cc89-4254-876d-033ce2af288c",
      "location": [-1.5310004, 37.26321]
    }, {
      "shop_id": "11cfdd06-64ea-4a92-a601-380f17dad2e5",
      "location": [-1.5351738, 37.262154]
    }, {
      "shop_id": "5c534804-0128-4490-b6ee-5d80043136b0",
      "location": [-1.53829061985016, 37.2596321105957]
    }, {
      "shop_id": "612c75d0-41fc-4e00-99be-d702b9a6444f",
      "location": [-1.54359424114227, 37.2569160461426]
    }, {
      "shop_id": "c1a48d09-2843-47d9-a5f4-c1c66de635d1",
      "location": [-1.5449407, 37.255405]
    }, {
      "shop_id": "b30323a1-d7ed-481d-ac58-2ab7d26af19d",
      "location": [-1.5453162, 37.255226]
    }, {
      "shop_id": "c52f5b39-331c-4a0c-bc79-5bd1ddb6b762",
      "location": [-1.5453116, 37.255215]
    }, {
      "shop_id": "ff5cc761-f151-436e-ab46-e05493e4518d",
      "location": [-1.6608607, 37.284496]
    }, {
      "shop_id": "f56ee50d-bd8c-4674-8285-79b82ff00f10",
      "location": [-1.66095077991486, 37.2849006652832]
    }, {
      "shop_id": "ad64ffda-4b89-400f-89f7-65342e7a6812",
      "location": [-1.6610197, 37.28503]
    }, {
      "shop_id": "0b6a5f45-1d41-433b-911f-867bf4ee1d08",
      "location": [-1.6623061, 37.28422]
    }, {
      "shop_id": "447f81e0-70a7-4e5a-b420-4905b333721c",
      "location": [-1.6625905, 37.28408]
    }, {
      "shop_id": "9bfc240a-6f70-47a8-9e17-34fd5fda7cc5",
      "location": [-1.7065657377243, 37.3474731445312]
    }, {
      "shop_id": "8c1bfc30-08c6-4420-9788-db4bec48c3c5",
      "location": [-1.7064439, 37.347717]
    }, {
      "shop_id": "653d5838-fbf2-4532-aed0-e59ba9b25a4b",
      "location": [-1.7065986, 37.347977]
    }, {
      "shop_id": "e1f85701-0dd2-4df1-bef3-e04b9ab4bac3",
      "location": [-1.7067028, 37.348007]
    }, {
      "shop_id": "8ae61b99-a0a0-4cc7-848d-801792d648b1",
      "location": [-1.7059407, 37.34787]
    }, {
      "shop_id": "047dbce3-683f-40d7-be2a-521b20b31a4f",
      "location": [-1.705934, 37.34768]
    }, {
      "shop_id": "3da474be-fac8-4fd9-bceb-47e1fe56ca43",
      "location": [-1.7226036, 37.37541]
    }, {
      "shop_id": "7868c591-540d-44bd-a9aa-753297616412",
      "location": [-1.7925035, 37.362858]
    }, {
      "shop_id": "0ff197b1-44fd-4d29-88ac-965d9e7341ef",
      "location": [-1.7926778, 37.36288]
    }, {
      "shop_id": "44353037-e001-4922-b5c7-de4ccdd314a5",
      "location": [-1.7932394, 37.362926]
    }, {
      "shop_id": "900b15b9-7b9a-4bcc-b99f-ac97bcd3d74f",
      "location": [-1.7934932, 37.362698]
    }, {
      "shop_id": "11fdb3ba-20a3-4b3f-aeb9-140ccb549d57",
      "location": [-1.8094887, 37.347122]
    }, {
      "shop_id": "c772f735-1890-465e-925f-71b7a2a34466",
      "location": [-1.7923107, 37.36177]
    }, {
      "shop_id": "f7b6d2b3-68f0-461a-95fc-a1c902c0d2a2",
      "location": [-1.7917368, 37.36128]
    }, {
      "shop_id": "4c5c4afe-36e0-4292-a1c9-592fd42e7951",
      "location": [-1.6837575, 37.317245]
    }, {
      "shop_id": "8730ac17-6950-4e36-a705-88310640c3b5",
      "location": [-1.66187155246735, 37.2844352722168]
    }, {
      "shop_id": "81a1d7b2-cd42-4b8a-a0ec-f55e5c967da7",
      "location": [-1.5379864, 37.260242]
    }, {
      "shop_id": "41c6e795-b1a6-4973-9c3a-fba5c89df094",
      "location": [-1.52844548225403, 37.2641105651855]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Lower Rongai",
    "route_id": "36ed0ad7-a24e-45ef-97d6-b643ad4d9095",
    "matrix_info": {
      "DistanceMatrixAPI requests": 422,
      "cache_hit": "82%"
    },
    "distance": "23.76km",
    "path": "zipGwtf_F}t@{oDCk@?K@?@A@@D@?AM?WiJRg@OUR{DJ}@CUCG~EuBaAyUdCqe@rFhDIh@h@XfA?VvApMvIJIz`@i~CDGPkAn@Y@CVeGVD`@sE`@R?AjCb@~@BqAwBHFtHrCgA~@vD~BT`@l@E_I\\SM{Eb@`KveCuy@v[dVrvF",
    "shops": [{
      "shop_id": "3efd781f-a3f0-4ebf-a477-eeec99b14864",
      "location": [-1.3908662, 36.767784]
    }, {
      "shop_id": "7f10839e-d3ba-480e-9c5a-0fea3503d259",
      "location": [-1.3908471, 36.767998]
    }, {
      "shop_id": "46523b79-7649-457a-9b94-c49cc7c88d3a",
      "location": [-1.3908526, 36.76806]
    }, {
      "shop_id": "16532589-d425-4720-9a57-a254427c8f5c",
      "location": [-1.3908627, 36.768063]
    }, {
      "shop_id": "2542daf6-37b4-4147-b534-45ade14b092d",
      "location": [-1.390873, 36.76807]
    }, {
      "shop_id": "1e9e4cef-7a5b-4ee7-807c-3ca69b5a084b",
      "location": [-1.3908828, 36.76806]
    }, {
      "shop_id": "2a0fae43-d112-4162-b4e3-1d6b3405d72a",
      "location": [-1.3909122, 36.768055]
    }, {
      "shop_id": "45582810-aa23-4504-99e7-37027d3a10db",
      "location": [-1.3909146, 36.768063]
    }, {
      "shop_id": "7818b1c2-cc65-4576-8943-f4cc5de066f2",
      "location": [-1.3908421, 36.768063]
    }, {
      "shop_id": "b7a0a1ac-9808-444b-bb96-283453a38bc9",
      "location": [-1.3907212, 36.769867]
    }, {
      "shop_id": "f3743c35-b3ad-404e-93ed-bdde5b503f2a",
      "location": [-1.39081573486328, 36.7700729370117]
    }, {
      "shop_id": "c0efa60e-102a-4b7e-bf92-c913d88bf33d",
      "location": [-1.3907357, 36.77018]
    }, {
      "shop_id": "29c372a0-1d3c-4bb8-a3a0-68866e6694b7",
      "location": [-1.39084410667419, 36.7711219787598]
    }, {
      "shop_id": "6b510d8c-837e-44b1-a6f4-7d308cea07fc",
      "location": [-1.3908955, 36.771435]
    }, {
      "shop_id": "8a579287-4f05-4e18-8488-872dc2121d51",
      "location": [-1.3908751, 36.771538]
    }, {
      "shop_id": "9b278a9b-40d0-4849-8a0c-b476709c0fa1",
      "location": [-1.3908567, 36.77158]
    }, {
      "shop_id": "de7a96d1-bc6c-40ee-980a-2ab3fc6d238d",
      "location": [-1.39198, 36.772175]
    }, {
      "shop_id": "3cc68f56-8563-4f44-bcec-48028d4c4444",
      "location": [-1.391654, 36.775818]
    }, {
      "shop_id": "9ff7d841-e1db-42a3-8aaf-cb88badbacf7",
      "location": [-1.3923209, 36.78199]
    }, {
      "shop_id": "c0d3e40e-d7c6-4095-ad57-6404c462f748",
      "location": [-1.3935432, 36.781143]
    }, {
      "shop_id": "f245fc8f-55a0-4efb-945d-919443386828",
      "location": [-1.393485, 36.780926]
    }, {
      "shop_id": "ded684ef-e899-4445-828f-273f2a4ec1d1",
      "location": [-1.393701, 36.780804]
    }, {
      "shop_id": "2a766af6-8745-4b57-af95-ab6e8e8ffd67",
      "location": [-1.394061, 36.780804]
    }, {
      "shop_id": "dd464150-5dfc-4baf-9457-70adb38b9720",
      "location": [-1.394182, 36.780357]
    }, {
      "shop_id": "028061bf-0443-4e69-8034-0230a69ebca1",
      "location": [-1.3965082, 36.77864]
    }, {
      "shop_id": "e8deafd5-da16-4a6f-bdef-65df24e07772",
      "location": [-1.3965743, 36.77869]
    }, {
      "shop_id": "3f1839bd-31da-4498-8859-bdca4a804a78",
      "location": [-1.4019938, 36.804184]
    }, {
      "shop_id": "d76202c1-8a1e-42a5-8e09-60b3030653cb",
      "location": [-1.4020241, 36.80422]
    }, {
      "shop_id": "c08bd00c-3f80-4afd-8352-e41fa4e087a3",
      "location": [-1.40210556983948, 36.8045959472656]
    }, {
      "shop_id": "bec31c57-6af3-46df-9daa-3f0a19964fe7",
      "location": [-1.402351, 36.804726]
    }, {
      "shop_id": "e3f5c09f-9c66-4ff4-b502-f96a5ec578f7",
      "location": [-1.4023589, 36.80475]
    }, {
      "shop_id": "a9aa9aac-240a-4291-93a6-60cd3a0e42cf",
      "location": [-1.4024767, 36.806065]
    }, {
      "shop_id": "a974da87-2962-4e73-980f-28225c65ac7c",
      "location": [-1.402595, 36.806034]
    }, {
      "shop_id": "1521f64d-79da-439f-8ecc-b634b9f68092",
      "location": [-1.4027708, 36.807087]
    }, {
      "shop_id": "d618b260-5c79-4a08-aafc-b958778352b9",
      "location": [-1.402937, 36.80699]
    }, {
      "shop_id": "8240aead-f41d-44d1-9d99-9711d9752d48",
      "location": [-1.4029416, 36.806995]
    }, {
      "shop_id": "4a1c89a2-6511-4c84-aad4-c6c2577a2cae",
      "location": [-1.4036368, 36.806816]
    }, {
      "shop_id": "7d10a1cb-3426-489d-8438-547e991506d3",
      "location": [-1.4039637, 36.806797]
    }, {
      "shop_id": "b437cb30-cf5c-4892-b88f-933c31c535f8",
      "location": [-1.4035541, 36.807404]
    }, {
      "shop_id": "2fd665ca-7ff5-4687-953c-b7a35127929f",
      "location": [-1.40359914302826, 36.8073577880859]
    }, {
      "shop_id": "3bd772e3-52a6-4384-a984-e199f4ebbc77",
      "location": [-1.4051532, 36.806618]
    }, {
      "shop_id": "81ccd4aa-4e9a-41c2-991b-590e7673d55c",
      "location": [-1.4047853, 36.8063]
    }, {
      "shop_id": "c1c5994f-a2a4-4ef9-bb23-e3b489412c82",
      "location": [-1.405714, 36.805664]
    }, {
      "shop_id": "0932df2b-7d39-435e-a01f-967d1f2413a2",
      "location": [-1.405822, 36.805492]
    }, {
      "shop_id": "fc5b8e37-11ab-48d6-9e2a-495c4453e94f",
      "location": [-1.40604686737061, 36.8055191040039]
    }, {
      "shop_id": "3f54ec82-9103-492c-9860-90a727f4a403",
      "location": [-1.40445339679718, 36.8053741455078]
    }, {
      "shop_id": "5c4f68fc-dae2-4a60-8b54-ba064a0117e1",
      "location": [-1.4043471, 36.805443]
    }, {
      "shop_id": "6675950c-3178-46ec-ba87-761d9badf980",
      "location": [-1.4032546, 36.80526]
    }, {
      "shop_id": "287f6409-3b9d-471f-baaf-918e06845b15",
      "location": [-1.405184, 36.783703]
    }, {
      "shop_id": "164577b5-3a3f-417c-bb24-d3518e2b6834",
      "location": [-1.3957915, 36.779102]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Mlolongo",
    "route_id": "4dd70fe1-ce95-4cbe-9cf1-d9167c0d28fa",
    "matrix_info": {
      "DistanceMatrixAPI requests": 414,
      "cache_hit": "72%"
    },
    "distance": "51.81km",
    "path": "dsfG_se`Fo}Nt}@_C|MznSs{Eli@en@bg@eg@Ac@GAAAA@K@yRmULGjYoNrCsJDi@ECxDcDj@iAkDi@nFxNlBf@lEz@sB`Dv@tF~AZ~CsDhEmBrFy@hDuFmBgH_IeDr@G`ViAj@d@d@Rj@v@bBtLuEoAmMx^osG|vF",
    "shops": [{
      "shop_id": "26c23507-b11b-4e6d-b55e-d79155881ec1",
      "location": [-1.2681055, 36.887894]
    }, {
      "shop_id": "be5b1d41-2fb6-4fa7-ad33-d7b410a15fc9",
      "location": [-1.2674695, 36.8855]
    }, {
      "shop_id": "4f780db4-02e0-42f9-b410-b8fa98876738",
      "location": [-1.3724113, 36.920803]
    }, {
      "shop_id": "a07f722a-def2-4e95-9f00-2ccadfc19608",
      "location": [-1.379198, 36.928345]
    }, {
      "shop_id": "0989c7b7-cfa1-47ab-ab59-454f80a3549d",
      "location": [-1.3856235, 36.934776]
    }, {
      "shop_id": "645592ab-6ed4-4ea5-99df-7d6514a429f7",
      "location": [-1.3856055, 36.93496]
    }, {
      "shop_id": "e1c20a2a-397d-4918-8ef4-b13bd467e041",
      "location": [-1.38556683063507, 36.9349708557129]
    }, {
      "shop_id": "b26867c6-0cbc-4e2d-98db-a66300c722d8",
      "location": [-1.3855639, 36.934975]
    }, {
      "shop_id": "a4a8b980-54f7-4b2d-9a16-2a0f20c7bdca",
      "location": [-1.38555264472961, 36.9349670410156]
    }, {
      "shop_id": "472b8c02-4970-497c-b3bd-24ebb8bc7b0f",
      "location": [-1.3854933, 36.934956]
    }, {
      "shop_id": "f5271c8f-325a-436a-bd8e-6ccfcf64d0c2",
      "location": [-1.3823229, 36.938553]
    }, {
      "shop_id": "14aa3f4a-8894-43eb-bd73-5bcee04d0911",
      "location": [-1.3823949, 36.93859]
    }, {
      "shop_id": "b81360c0-3225-4603-bb0e-3fac126bcf74",
      "location": [-1.3866111, 36.941067]
    }, {
      "shop_id": "ac0bb7e9-af6e-4e44-a91d-782d1ca2234c",
      "location": [-1.38735055923462, 36.9429321289062]
    }, {
      "shop_id": "1971f431-c851-4daf-854c-fb758c0c4f72",
      "location": [-1.3873757, 36.943142]
    }, {
      "shop_id": "9777902c-8ff1-477e-ba46-dc680fd8890b",
      "location": [-1.387354, 36.94316]
    }, {
      "shop_id": "a83898b1-0c5e-4fc9-be0c-085b15bdaf91",
      "location": [-1.3882779, 36.94398]
    }, {
      "shop_id": "a53f32d9-aeaf-4d6d-a25a-7fc841db615c",
      "location": [-1.3885044, 36.944347]
    }, {
      "shop_id": "430cb662-37de-42fc-b037-690e4921d066",
      "location": [-1.3876368, 36.944557]
    }, {
      "shop_id": "37053f21-694c-435e-a16c-30f9292a7373",
      "location": [-1.3888412, 36.94203]
    }, {
      "shop_id": "fb5f680f-6677-4dad-ba7b-30780f7c8a85",
      "location": [-1.3893912, 36.941826]
    }, {
      "shop_id": "6b785239-8593-46d9-b0e0-fe67699c1674",
      "location": [-1.39042, 36.941525]
    }, {
      "shop_id": "ca1d36b9-e9f0-4e38-aae5-b9223e5454c2",
      "location": [-1.3898422, 36.940716]
    }, {
      "shop_id": "16a7b692-24c5-4b67-92d3-1f7a1233da3f",
      "location": [-1.3901159, 36.93949]
    }, {
      "shop_id": "e75181ff-d09f-4da9-93f0-acb4c9c6a90f",
      "location": [-1.3906038, 36.939354]
    }, {
      "shop_id": "2e0ba894-5022-4c31-b410-79791083dc9c",
      "location": [-1.3914037, 36.940247]
    }, {
      "shop_id": "8bf87de2-8ded-4e19-9dcd-d364bba08f02",
      "location": [-1.3924054, 36.940804]
    }, {
      "shop_id": "ab50aacc-a37c-45f1-8cf3-9661dce0439b",
      "location": [-1.3936346, 36.941086]
    }, {
      "shop_id": "acee6d38-8882-440f-8630-ebd2332af116",
      "location": [-1.3944837, 36.94232]
    }, {
      "shop_id": "e88c6820-0875-4633-9ad2-855d864019bc",
      "location": [-1.3939327, 36.943798]
    }, {
      "shop_id": "b48ae642-c9e2-4fa9-8d4f-8a042c3fe013",
      "location": [-1.392326, 36.94463]
    }, {
      "shop_id": "0f981c67-dd16-4d33-af96-26f5a0567576",
      "location": [-1.3925892, 36.94467]
    }, {
      "shop_id": "a90cf962-1595-4190-abbf-a25021a3c09d",
      "location": [-1.3962815, 36.94504]
    }, {
      "shop_id": "f5480435-b2fd-4f53-9e0f-68bada314e92",
      "location": [-1.3965011, 36.944855]
    }, {
      "shop_id": "fff739b8-8e42-4c29-92cd-4a568713a183",
      "location": [-1.396688, 36.94475]
    }, {
      "shop_id": "4eb7128c-0de3-4f2b-be1e-2bb3f8fb3494",
      "location": [-1.3969069, 36.94447]
    }, {
      "shop_id": "28667dda-48c2-495c-89de-f34427be0f0b",
      "location": [-1.39741289615631, 36.9422836303711]
    }, {
      "shop_id": "d0186221-d2ab-4dc1-bcb4-0ff867e5d1b7",
      "location": [-1.3963426, 36.94268]
    }, {
      "shop_id": "7e05bced-e820-4bbd-a930-25466efa81fa",
      "location": [-1.394026, 36.937588]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Machakos 2",
    "route_id": "67fd6b10-68c8-48fd-bf70-0ba07be45e55",
    "matrix_info": {
      "DistanceMatrixAPI requests": 411,
      "cache_hit": "82%"
    },
    "distance": "92.29km",
    "path": "n{hH_ilbF?dAic]z|EqCkG}EmE}`EygEgDwp@RkB_dA}cCq@QAy@w@NdAyAaKuEebCi_JMaAK}FtDaXaAxCwk@tYxN|G?Qi@aChCtFzDv@voMrnQhIwCpBcEuZpgBcQbx@FLKpAxnHg|@~`Na{CtqCct@QREE~DwCzBwIHHDEDC?OGg@m@D?NMBA[?AAMdAg@b]viA",
    "shops": [{
      "shop_id": "916670fd-17d8-440d-b1c8-f382a4e250bd",
      "location": [-1.5252041, 37.25949]
    }, {
      "shop_id": "5af839e1-399f-4cf3-9f44-4e5ced2bc62c",
      "location": [-1.3709095, 37.223988]
    }, {
      "shop_id": "bf8bec48-ff61-4655-920a-2647ed12baf2",
      "location": [-1.3701826, 37.225327]
    }, {
      "shop_id": "108d66e9-a983-4abd-a447-1d62d3a5efb7",
      "location": [-1.3690722, 37.226357]
    }, {
      "shop_id": "2512db0b-f92f-4cc7-a2a7-6219b96b2a22",
      "location": [-1.3380388, 37.25849]
    }, {
      "shop_id": "4dfdfc0c-856a-4f6d-9dfe-bfec9c543539",
      "location": [-1.3372014, 37.26645]
    }, {
      "shop_id": "c4e523b9-f114-4a5f-aa5b-5edd8e4f78e9",
      "location": [-1.3373002, 37.266994]
    }, {
      "shop_id": "3d7f7b4f-683e-4fb0-8860-edf521d25984",
      "location": [-1.326263, 37.288258]
    }, {
      "shop_id": "29bd0377-2ffa-47e9-91c6-c05fb6ff7ae9",
      "location": [-1.3260138, 37.288353]
    }, {
      "shop_id": "d5937fba-68a8-4577-a54c-ae2f980c969c",
      "location": [-1.3259999, 37.288643]
    }, {
      "shop_id": "f1189828-7fc1-47c6-9bb3-c851fffbc9d6",
      "location": [-1.3257155, 37.288555]
    }, {
      "shop_id": "45ae69e6-57ba-437e-a9fe-f87f1ec7060d",
      "location": [-1.3260746, 37.289005]
    }, {
      "shop_id": "8cb770cb-af4d-4c7b-8695-4ef89c74baa6",
      "location": [-1.3241369, 37.29008]
    }, {
      "shop_id": "6343883e-0af0-44e4-b404-5f2c47093857",
      "location": [-1.3031535, 37.34645]
    }, {
      "shop_id": "d0dc8617-fc10-4877-81d3-25371996f429",
      "location": [-1.3030831, 37.34678]
    }, {
      "shop_id": "17a89f32-b3aa-470d-9b94-42babceab8c7",
      "location": [-1.3030236, 37.34805]
    }, {
      "shop_id": "e4a2000b-2616-4e80-82a1-5e2958744829",
      "location": [-1.3039252, 37.352055]
    }, {
      "shop_id": "f3f1106a-fa68-411d-8ea9-fefe6aed1baf",
      "location": [-1.3035959, 37.35129]
    }, {
      "shop_id": "d44cb421-514a-4e1f-b337-be6af8000c44",
      "location": [-1.29643845558167, 37.3470153808594]
    }, {
      "shop_id": "c4e1a764-2c8c-407a-89f8-d81b20dbee1c",
      "location": [-1.2989678, 37.34559]
    }, {
      "shop_id": "ed8fed44-6905-4f3e-84bf-1f7924e32045",
      "location": [-1.2989713, 37.345684]
    }, {
      "shop_id": "f95b3a3f-6b04-47c8-a846-024eb28aa761",
      "location": [-1.2987559, 37.346333]
    }, {
      "shop_id": "b059f1cf-db01-4d55-8ac2-9f457614b248",
      "location": [-1.2994543, 37.345097]
    }, {
      "shop_id": "fc1c06bb-3136-4871-8841-c92403647d05",
      "location": [-1.3003879, 37.344822]
    }, {
      "shop_id": "0ec80e1f-d6a0-4ddd-a002-d558342c0d8b",
      "location": [-1.3747469, 37.25016]
    }, {
      "shop_id": "13cf8538-2e77-48c7-ab15-37bc0c909088",
      "location": [-1.3764042, 37.250923]
    }, {
      "shop_id": "58398759-f826-431d-b942-f2c7ca61a41c",
      "location": [-1.376965, 37.2519]
    }, {
      "shop_id": "e96ff3be-b292-4a31-93ad-9e63ec233db3",
      "location": [-1.3725353, 37.235172]
    }, {
      "shop_id": "ea0421c4-15d5-4445-a853-df5f90a1f28d",
      "location": [-1.3696364, 37.226025]
    }, {
      "shop_id": "9c1f2288-e640-4d22-a241-477636d3b74c",
      "location": [-1.3696772, 37.22596]
    }, {
      "shop_id": "a09b938c-488a-4497-94b9-dee1fc01fff4",
      "location": [-1.369616, 37.22555]
    }, {
      "shop_id": "86da7370-a604-4bf1-a2de-d1055c7efeb3",
      "location": [-1.4182336, 37.23535]
    }, {
      "shop_id": "164ef9b0-ddcf-48b8-9749-9735f3907984",
      "location": [-1.49534690380096, 37.2603187561035]
    }, {
      "shop_id": "10aa6898-3cf6-4479-a8df-b68d1db55431",
      "location": [-1.5188202, 37.268818]
    }, {
      "shop_id": "656d43e8-e0f9-4d40-bf8a-25330f508129",
      "location": [-1.5187283, 37.268723]
    }, {
      "shop_id": "8f30d5b0-7acd-4adb-8ec7-b1853209e691",
      "location": [-1.5186955, 37.268745]
    }, {
      "shop_id": "5f5812bf-30cf-4b2c-98e1-3eccb9859397",
      "location": [-1.519659, 37.26951]
    }, {
      "shop_id": "08674a3c-3ad7-4352-82ed-f54d1d8635a7",
      "location": [-1.5202761, 37.271225]
    }, {
      "shop_id": "05d3df3e-635f-4393-b389-6b8aca0f2984",
      "location": [-1.5203323, 37.27118]
    }, {
      "shop_id": "f5079f76-16a9-45da-b7b1-bc015a6c42bd",
      "location": [-1.5203633, 37.271206]
    }, {
      "shop_id": "59530e8e-6cfa-4ead-9445-2ac870c4e053",
      "location": [-1.5203897, 37.271233]
    }, {
      "shop_id": "5d385780-5e77-49fb-a52d-b3078ebd97d6",
      "location": [-1.520386, 37.271305]
    }, {
      "shop_id": "10365544-1cea-48d3-86f1-d6fa378cff54",
      "location": [-1.5203453, 37.27151]
    }, {
      "shop_id": "44b1d7ea-1fa0-4a5b-9ed9-07a5369ee818",
      "location": [-1.5201223, 37.271477]
    }, {
      "shop_id": "dc95fe2e-a894-4247-9a34-3a99b7bfcb62",
      "location": [-1.520121, 37.271397]
    }, {
      "shop_id": "0a892b81-4112-48e9-9289-855f08477e94",
      "location": [-1.5200489, 37.271378]
    }, {
      "shop_id": "ac97f40b-33cc-4341-bd60-4adfe9b56c16",
      "location": [-1.5200381, 37.271523]
    }, {
      "shop_id": "927dd018-b0a5-4bef-9bd1-d42058923c1f",
      "location": [-1.5200361, 37.27153]
    }, {
      "shop_id": "3ea7f704-aafe-4160-b4db-320a7c6914df",
      "location": [-1.5200347, 37.2716]
    }, {
      "shop_id": "8b6faf1d-5018-4ab7-8f4a-bf21aaed36a0",
      "location": [-1.5203786, 37.2718]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kangemi",
    "route_id": "27f92fa7-3972-425b-a619-90b1622f8eb8",
    "matrix_info": {
      "DistanceMatrixAPI requests": 1174,
      "cache_hit": "73%"
    },
    "distance": "47.14km",
    "path": "`z|Fedx_FumHjcMn@rFnAtE~A`@@?h@G`fAlv@c@mMb@nD_A~r@wGcc@m@~HlAmlAcAMa@_@s@GuJ_AtYnGnl@jj@hAxByMoKf@xKtAj@]jBjEtCaAA`DvJhHgBpA?hC`NKrDDd@P`BbGdA_EzIwVfOvJgKeHhEYX_DxA}FbA_PvMs@bBsAxM@hAcJrIpAiG`EgC}CgAxBos@Z{`@dJcPvCs_@xPmDQ@xJmQaQvIuMs_@`H}ArCJb@eGn@OmAgDn@Jo@cBaA[p`Eq~K",
    "shops": [{
      "shop_id": "b3fc133f-c15b-440b-adc5-0459cbbd959d",
      "location": [-1.251256, 36.756615]
    }, {
      "shop_id": "11ecaa74-972c-48ec-9120-21cd66224b1f",
      "location": [-1.2514997, 36.75539]
    }, {
      "shop_id": "d74f9cd5-68bb-450a-9696-2a8f789ecc9d",
      "location": [-1.2518986, 36.75432]
    }, {
      "shop_id": "cb2f6f7f-97e0-4135-89ee-f5168f9bd0cf",
      "location": [-1.2523808, 36.754147]
    }, {
      "shop_id": "709f15e5-5740-43f6-a776-7bf35dc266c8",
      "location": [-1.2523904, 36.754154]
    }, {
      "shop_id": "25fd30b7-fc1d-4387-8c21-7aa69a541960",
      "location": [-1.2525994, 36.754192]
    }, {
      "shop_id": "ec265bff-a927-40c8-83bc-0011a616a560",
      "location": [-1.2639718, 36.74532]
    }, {
      "shop_id": "da94f45f-6d09-4b59-a1b6-478b4eac9085",
      "location": [-1.2637857, 36.74763]
    }, {
      "shop_id": "3eab821d-a2c4-4224-8af2-5f22dafeb2ab",
      "location": [-1.2639692, 36.746754]
    }, {
      "shop_id": "90029b6f-4af4-490c-83c8-c85e0d649867",
      "location": [-1.2636453, 36.738426]
    }, {
      "shop_id": "61043305-3d10-45d1-a039-c8a8031840cb",
      "location": [-1.2622527, 36.744213]
    }, {
      "shop_id": "5a0698df-f3be-46f7-923f-8e379e302933",
      "location": [-1.2620205, 36.74261]
    }, {
      "shop_id": "f096a91c-b850-488e-8c50-6df137d6c53d",
      "location": [-1.2624078, 36.755]
    }, {
      "shop_id": "eb0c9bb3-18a6-4e6d-a286-f0046966a187",
      "location": [-1.2620691, 36.75507]
    }, {
      "shop_id": "da5fec8e-526e-4260-a053-480537dcbcce",
      "location": [-1.2618966, 36.75523]
    }, {
      "shop_id": "770bbbd4-8bb8-4719-9d4a-2a1c816cfd17",
      "location": [-1.2616351, 36.75527]
    }, {
      "shop_id": "75cc226a-9846-4949-b7ba-60feceb6523d",
      "location": [-1.2597688, 36.755585]
    }, {
      "shop_id": "2d8d307a-93a7-43c1-869c-d5813671c27c",
      "location": [-1.2640411, 36.75423]
    }, {
      "shop_id": "b1c1d781-d83a-4a68-b33e-24f214493d6a",
      "location": [-1.2713248, 36.74729]
    }, {
      "shop_id": "3d7574ed-db6d-471c-a5dc-3c9d343f529d",
      "location": [-1.2716854, 36.746677]
    }, {
      "shop_id": "00735f8f-2890-4684-9d62-f0eb7b11f59d",
      "location": [-1.2693183, 36.74868]
    }, {
      "shop_id": "d7185b24-5eb3-4eaa-a9cf-7eda9e3608a7",
      "location": [-1.2695233, 36.746628]
    }, {
      "shop_id": "18439e5b-28f5-42af-9478-db97940c8472",
      "location": [-1.2699465, 36.746414]
    }, {
      "shop_id": "62671c79-339c-46c6-944d-d638141d6724",
      "location": [-1.269798, 36.745872]
    }, {
      "shop_id": "1c6a2702-eec0-4afe-9b2f-16192f8b69c6",
      "location": [-1.2708237, 36.74512]
    }, {
      "shop_id": "feaeb484-8cae-44fe-8513-cc9e3b1ef68e",
      "location": [-1.2704928, 36.745125]
    }, {
      "shop_id": "318014ea-1beb-4f2f-833d-e05c320ed4ac",
      "location": [-1.2713027, 36.743248]
    }, {
      "shop_id": "3f7901ac-fd27-4a5a-900a-c6d373915542",
      "location": [-1.2727906, 36.743767]
    }, {
      "shop_id": "7cc8d6ad-2184-48a9-a736-e957777a39fa",
      "location": [-1.2732033, 36.743774]
    }, {
      "shop_id": "8fc9bf4d-9e60-4b94-a104-bbc875629bd9",
      "location": [-1.2738885, 36.741364]
    }, {
      "shop_id": "733d2e47-c0f8-4e24-b229-dd3987c14685",
      "location": [-1.2738343, 36.740456]
    }, {
      "shop_id": "a09d32c7-5dc9-450d-89c5-65a8f5357133",
      "location": [-1.2738576, 36.740273]
    }, {
      "shop_id": "78359695-6e92-4179-9ba1-17d4fd2dd4c8",
      "location": [-1.2739524, 36.73978]
    }, {
      "shop_id": "e1cca2c7-467e-4a58-87bc-38c80933373c",
      "location": [-1.2752469, 36.73943]
    }, {
      "shop_id": "1b5e5ad7-03b5-4590-93bc-a458a33d0c37",
      "location": [-1.2742937, 36.73769]
    }, {
      "shop_id": "c11ba13e-e625-44f9-b023-03e5aff597e3",
      "location": [-1.27049, 36.735085]
    }, {
      "shop_id": "334a980b-aa65-458f-93a4-a049e914dbdc",
      "location": [-1.2723736, 36.737045]
    }, {
      "shop_id": "90944564-d7a9-49ab-a84a-82b925a4f0bc",
      "location": [-1.2709031, 36.73604]
    }, {
      "shop_id": "33cddc9f-5e36-434c-94db-f76263574ac5",
      "location": [-1.2707686, 36.735905]
    }, {
      "shop_id": "7248a502-e5ee-48db-abb3-34a3be667d75",
      "location": [-1.2699658, 36.735455]
    }, {
      "shop_id": "ed9ff458-bd60-4862-85ea-a1ddd26fcf68",
      "location": [-1.2686998, 36.735115]
    }, {
      "shop_id": "33235c49-78ac-4663-8499-47896ccf53f6",
      "location": [-1.2659767, 36.73276]
    }, {
      "shop_id": "5c1cac54-42c0-4563-aa97-60f8968f6ea1",
      "location": [-1.2657193, 36.732258]
    }, {
      "shop_id": "ecb794ca-a069-4db2-ae65-e6db1a442316",
      "location": [-1.2653036, 36.729885]
    }, {
      "shop_id": "e60d3e1e-373d-4e24-8e91-f7175ee6a33a",
      "location": [-1.2653085, 36.729515]
    }, {
      "shop_id": "2164c2b0-8917-46eb-bdfc-ccbbbcc44381",
      "location": [-1.2635337, 36.727818]
    }, {
      "shop_id": "4e5bfe93-6842-4e8f-8cf5-67a35b10c74d",
      "location": [-1.2639428, 36.72915]
    }, {
      "shop_id": "0ac430a9-8b09-43b3-b3f6-5184251cb1a8",
      "location": [-1.2649069, 36.72983]
    }, {
      "shop_id": "bcf3cd0d-39aa-43ce-84a9-ebc303ce178f",
      "location": [-1.26411819458008, 36.7301864624023]
    }, {
      "shop_id": "45dddc52-758c-4aef-889d-00e440f55fa9",
      "location": [-1.2647264, 36.73859]
    }, {
      "shop_id": "d3095849-4821-4167-80c6-361ffb3afdca",
      "location": [-1.2648698, 36.744007]
    }, {
      "shop_id": "c09a2e43-81e8-4aee-9425-7d152fd83e0c",
      "location": [-1.2666644, 36.74675]
    }, {
      "shop_id": "a58984ad-dffe-47fb-be97-6aedb4da4a17",
      "location": [-1.2674197, 36.751965]
    }, {
      "shop_id": "b43af9c3-85e6-4d59-a541-48d0c46f6ada",
      "location": [-1.27027, 36.75284]
    }, {
      "shop_id": "719106e7-0bce-4e36-ab38-f5ca66e2e811",
      "location": [-1.270182, 36.75283]
    }, {
      "shop_id": "b678ae28-2d82-4cdf-90bb-f8ddea6d31b1",
      "location": [-1.2720685, 36.755775]
    }, {
      "shop_id": "439ec0fc-93d6-4357-93ca-1155cc9e0143",
      "location": [-1.2691846, 36.754063]
    }, {
      "shop_id": "a2d453b6-941f-4b89-8adb-27620891c21f",
      "location": [-1.266825, 36.759277]
    }, {
      "shop_id": "dc7e754d-43c4-4b7c-b19c-7ff7ec1da56f",
      "location": [-1.2682807, 36.759747]
    }, {
      "shop_id": "af0daf15-1f09-4625-886a-b838c4dfe1fd",
      "location": [-1.2690231, 36.759686]
    }, {
      "shop_id": "7b4788c0-03af-4c77-a23f-4ec320c707fb",
      "location": [-1.2691962, 36.761]
    }, {
      "shop_id": "6c638bc2-39cf-46f1-98d4-d2a948f865d0",
      "location": [-1.269443, 36.761078]
    }, {
      "shop_id": "83c7826f-d62b-4e5b-9e6a-d1819d4da67e",
      "location": [-1.269048, 36.76192]
    }, {
      "shop_id": "451aa35d-b782-4f52-892e-2b203567630e",
      "location": [-1.2692949, 36.76186]
    }, {
      "shop_id": "dc90f309-ead7-4254-a208-0f8193b1bac7",
      "location": [-1.2690516, 36.76236]
    }, {
      "shop_id": "8d24af73-376a-4109-be5e-ecb359955819",
      "location": [-1.2687153, 36.762505]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kaijado",
    "route_id": "51264b3c-d33f-4bc1-8037-d9108c6c2564",
    "matrix_info": {
      "DistanceMatrixAPI requests": 1295,
      "cache_hit": "72%"
    },
    "distance": "139.7km",
    "path": "dsfG_se`FjbXwdKf|Kr`CD?bcExfAzT~J~BeWtqSvnO_@NlBZxAo@x@X`B@rAPJK`@j@_AqCtCqCn@pAfl\\fhIcH``@xNyIfIfJN@tBLmBKGOAAH?n@NPTFsAfAlSaEkBPcSi@S|BL_Bg@_n[yvJwBc@MBi@`EaAuByW}Aa@@cFa@kA\\wAtDu@p@yC_@r@|@o@dFisGycDiASETOACRDR@D[^[r@o@q@JUpAwByfL{`JxGcLZd@WVgCxHe@pAsak@biE",
    "shops": [{
      "shop_id": "aad94bfb-e260-4e11-90c8-330d99a18e22",
      "location": [-1.4783299, 36.960278]
    }, {
      "shop_id": "fcc6fd54-3213-4e1a-a8b4-c5f76c041ff1",
      "location": [-1.5444525, 36.939537]
    }, {
      "shop_id": "6bd55b2d-fec0-4752-8c69-05acfe340fe7",
      "location": [-1.544477, 36.93954]
    }, {
      "shop_id": "75ec6c2c-bbe1-4522-a43b-aa557da7ec9d",
      "location": [-1.5758555, 36.92805]
    }, {
      "shop_id": "9de1cd86-dbbf-4994-99c7-2cd5e5d9bf65",
      "location": [-1.5793616, 36.92613]
    }, {
      "shop_id": "6f5444cf-6a16-4e8b-99ae-13b2ef72c35b",
      "location": [-1.58, 36.93]
    }, {
      "shop_id": "64a4b216-ea96-4a4f-afd8-7f9f0713e2f4",
      "location": [-1.6853894, 36.84556]
    }, {
      "shop_id": "6cb82d95-3659-4b1a-8725-c8e97631f961",
      "location": [-1.6852332, 36.845478]
    }, {
      "shop_id": "0ab105c9-8096-4273-b764-c6670b06857c",
      "location": [-1.685775, 36.845337]
    }, {
      "shop_id": "2516b794-e28a-4003-bdc0-8ed37e14dc79",
      "location": [-1.6862261, 36.845577]
    }, {
      "shop_id": "52b1619e-affc-4768-82d3-053ef4e21bda",
      "location": [-1.6865228, 36.84545]
    }, {
      "shop_id": "072c8c1b-ca93-4308-a4fe-94c7db37215a",
      "location": [-1.6870062, 36.84544]
    }, {
      "shop_id": "4adbc785-571e-4232-b634-4c1bcbff8bd2",
      "location": [-1.6874272, 36.84535]
    }, {
      "shop_id": "4fcfa95b-710e-4d15-adc0-4648caea70b6",
      "location": [-1.6874886, 36.84541]
    }, {
      "shop_id": "54466ccd-5476-4bbf-8a7f-405e78009b86",
      "location": [-1.6876574, 36.84519]
    }, {
      "shop_id": "01e8fbe0-7deb-41bc-bb68-a007424ed211",
      "location": [-1.687344, 36.845917]
    }, {
      "shop_id": "dd244977-e5d0-4a56-9f4b-843df889fca2",
      "location": [-1.6880891, 36.846645]
    }, {
      "shop_id": "1c4b74ce-4658-42c5-9459-6a43f36663af",
      "location": [-1.6883274, 36.846237]
    }, {
      "shop_id": "ad85d9f6-5521-450c-87b2-1d461162964e",
      "location": [-1.8389318, 36.793564]
    }, {
      "shop_id": "9cc0105e-d31f-46c6-bdfc-bee6b8f64f8e",
      "location": [-1.8374704, 36.788273]
    }, {
      "shop_id": "9d4fca26-b626-4940-bc22-a3f521c40f39",
      "location": [-1.84, 36.79]
    }, {
      "shop_id": "57aed9c9-7666-442f-8dfc-2591e5a75b77",
      "location": [-1.8416398, 36.7882]
    }, {
      "shop_id": "c13058f1-9828-44fe-8b84-f197f7615ba6",
      "location": [-1.8417234, 36.788193]
    }, {
      "shop_id": "99eb894e-29c7-4eb9-9ccf-301d80660f9a",
      "location": [-1.842307, 36.78812]
    }, {
      "shop_id": "8df6a45c-9bc4-4812-98ad-896ec7eeba85",
      "location": [-1.841762, 36.788177]
    }, {
      "shop_id": "2d7de386-c60c-40c6-8ba2-66bb7e86d2f7",
      "location": [-1.8417197, 36.788258]
    }, {
      "shop_id": "b8e9cbf2-bb84-4a00-a8a3-bf1b9e988056",
      "location": [-1.8417075, 36.788273]
    }, {
      "shop_id": "75a26f07-0411-44dd-a185-d95a9e92e450",
      "location": [-1.8417557477951, 36.7882690429688]
    }, {
      "shop_id": "a15961d0-66e9-4f9e-90e3-2c5c979287cb",
      "location": [-1.84200167655945, 36.7881889343262]
    }, {
      "shop_id": "cff67f6d-f6b2-4de6-a522-7caa1b8e6d86",
      "location": [-1.84209322929382, 36.7880783081055]
    }, {
      "shop_id": "9edb465c-9f1f-4e52-bbf5-148655ab9f92",
      "location": [-1.8421324, 36.788498]
    }, {
      "shop_id": "43a113cb-3688-44fe-b914-9d8240055e9a",
      "location": [-1.8424879, 36.785233]
    }, {
      "shop_id": "c9265805-0228-49ce-8aea-a94d9fe067cb",
      "location": [-1.841522, 36.785774]
    }, {
      "shop_id": "081844d2-f42d-4ff9-8dcb-599ddae400aa",
      "location": [-1.8416071, 36.788994]
    }, {
      "shop_id": "9483418f-6a84-4121-8b60-5dabed14387e",
      "location": [-1.8414028, 36.78909]
    }, {
      "shop_id": "e12d94f4-49aa-4ab7-bd8a-a7119ab8f273",
      "location": [-1.8420283, 36.78902]
    }, {
      "shop_id": "abf53e36-cccf-4a2f-ada9-4f5bf18acde6",
      "location": [-1.8415459, 36.78922]
    }, {
      "shop_id": "bc26ad67-c8f6-4cd2-bdd9-a1b5cacb4dcb",
      "location": [-1.6957856, 36.84935]
    }, {
      "shop_id": "acb5defe-a646-459d-a964-5338f695b794",
      "location": [-1.6951913, 36.849525]
    }, {
      "shop_id": "5934eed5-1237-4c3a-a579-adf9ca9d1efb",
      "location": [-1.6951208, 36.849514]
    }, {
      "shop_id": "f6e96af5-0693-4a3e-b212-d001088409bf",
      "location": [-1.6949056, 36.848537]
    }, {
      "shop_id": "fb61fd8e-e85a-40ef-b34c-ce4abdeeece3",
      "location": [-1.6945791, 36.849133]
    }, {
      "shop_id": "a3442e13-f7dc-4b0d-b485-841edc95be99",
      "location": [-1.6906133, 36.849598]
    }, {
      "shop_id": "3f68a8c9-924b-425b-b660-8e3bb1790216",
      "location": [-1.6904417, 36.84959]
    }, {
      "shop_id": "899efc51-1b37-4ff8-afea-ba5109d6e31d",
      "location": [-1.6893039, 36.849762]
    }, {
      "shop_id": "348ff9bf-760b-4313-b84b-0cada1eae6b1",
      "location": [-1.68892407417297, 36.8496055603027]
    }, {
      "shop_id": "41b254e5-3d92-4aed-afea-be827fa74cd0",
      "location": [-1.6884751, 36.848698]
    }, {
      "shop_id": "03f24ff8-fbce-42b7-8760-707130f070b2",
      "location": [-1.6882071, 36.84845]
    }, {
      "shop_id": "38af66a8-cb87-4363-9bdf-afd269224d50",
      "location": [-1.6874363, 36.848614]
    }, {
      "shop_id": "61b43a75-c603-47ff-915c-3d3aaca4c419",
      "location": [-1.6876994, 36.8483]
    }, {
      "shop_id": "ebf68508-add1-4704-a361-99709cb33bb0",
      "location": [-1.6874583, 36.847153]
    }, {
      "shop_id": "f357720a-82aa-4642-82c8-3cea29752eba",
      "location": [-1.6432478, 36.87352]
    }, {
      "shop_id": "869807cf-3d23-4542-b2b5-a40a8223c654",
      "location": [-1.6428803, 36.873615]
    }, {
      "shop_id": "fb2e38cf-0be9-43bd-82d6-b1c17d0e4f09",
      "location": [-1.6428498, 36.87351]
    }, {
      "shop_id": "ed8e73db-f228-4da5-beea-dc79ddbd3cef",
      "location": [-1.64277, 36.873516]
    }, {
      "shop_id": "ffab006d-62cc-4f4a-9973-2ff4fa16f235",
      "location": [-1.6427543, 36.873425]
    }, {
      "shop_id": "e01b3c69-8483-4bd1-967e-bcb1e606831a",
      "location": [-1.642777, 36.873318]
    }, {
      "shop_id": "081080e7-5dfb-44a1-91ed-a65c2a9eada7",
      "location": [-1.6427878, 36.87329]
    }, {
      "shop_id": "e5761fc7-edae-434d-ae55-e51c7323b5ba",
      "location": [-1.6426461, 36.873127]
    }, {
      "shop_id": "6013d6e4-1e3c-44a6-9d2b-7395966e1ff5",
      "location": [-1.6425116, 36.87287]
    }, {
      "shop_id": "3dff90b2-983c-43be-8142-b545412f424b",
      "location": [-1.6422709, 36.873116]
    }, {
      "shop_id": "4f40ab1b-c499-4510-b62f-ee320b44d7f9",
      "location": [-1.64233362674713, 36.8732261657715]
    }, {
      "shop_id": "9d1a04dd-3e61-4455-8377-c2b63a84e746",
      "location": [-1.6427435, 36.873833]
    }, {
      "shop_id": "76f93060-dda1-45ae-8878-3d185f471482",
      "location": [-1.5749347, 36.930454]
    }, {
      "shop_id": "956a5a6c-9ae7-434c-8b01-c87dd52e04ab",
      "location": [-1.5763433, 36.93255]
    }, {
      "shop_id": "764a4d9a-d379-4b75-ad49-457fc300f138",
      "location": [-1.5764759, 36.93236]
    }, {
      "shop_id": "b3dc3518-1c23-4761-9cea-91d45bc49e95",
      "location": [-1.5763643, 36.932236]
    }, {
      "shop_id": "9f4b4b36-42d4-401f-b307-501a60c8f4d1",
      "location": [-1.5756814, 36.93067]
    }, {
      "shop_id": "a33813c3-5dd2-4426-883e-02fed80e583c",
      "location": [-1.5754926, 36.930264]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Mutituni",
    "route_id": "e1c1135c-6a99-41b0-939a-78f3dd75ff8a",
    "matrix_info": {
      "DistanceMatrixAPI requests": 283,
      "cache_hit": "82%"
    },
    "distance": "56.81km",
    "path": "n{hH_ilbFsBug@mN{MoVpZsyAq@{HjAOGD]@jAeAl@u@P}WhLoHv@h@W\\HZ?oTy@mASwtNejLh@gGBmIrqM`xLmIhEYb@ec@hVSHi@lAgMjC{B|@kj@tQgd@Qgv@nXx@J~A}@f`Dmx@n{Awf@oBsApBwGRFnr@uCxyA`S|d@tZ",
    "shops": [{
      "shop_id": "2839dc16-bad6-418d-969d-4afc2c90fdd9",
      "location": [-1.5246165, 37.266354]
    }, {
      "shop_id": "c23f8029-b078-4f12-b5eb-f3883a82abc7",
      "location": [-1.5221455, 37.26873]
    }, {
      "shop_id": "ab00a279-a911-40d8-b84d-bd9e95467cf1",
      "location": [-1.5183891, 37.264324]
    }, {
      "shop_id": "7e3e6d70-d07e-4ec6-aa1f-5016cccb4018",
      "location": [-1.5038949, 37.264572]
    }, {
      "shop_id": "adf73825-9d5c-4dde-a738-5f2a99599ae8",
      "location": [-1.5023113489151, 37.2641868591309]
    }, {
      "shop_id": "ffec4349-1fbe-451a-aae9-893030adac8a",
      "location": [-1.5022259, 37.264225]
    }, {
      "shop_id": "24941278-0f61-4309-8573-0238a9b21f29",
      "location": [-1.5022558, 37.264385]
    }, {
      "shop_id": "736c652e-e845-4425-963c-96149421d4e5",
      "location": [-1.502268, 37.263996]
    }, {
      "shop_id": "061abd16-23e6-414a-9c34-53648a9132f6",
      "location": [-1.501916, 37.26377]
    }, {
      "shop_id": "62a0c8c2-4740-4e08-a1ed-e349f3be10ad",
      "location": [-1.50165379047394, 37.2636795043945]
    }, {
      "shop_id": "e2492c13-ba64-4ea0-8115-89408178614e",
      "location": [-1.4976565, 37.26155]
    }, {
      "shop_id": "24ab0f0e-9a44-4271-9061-7859e0315385",
      "location": [-1.4961385, 37.26127]
    }, {
      "shop_id": "78805796-f8a9-48d1-b849-c15a8dc544de",
      "location": [-1.4963536, 37.26139]
    }, {
      "shop_id": "29c82c41-c796-41eb-8425-0123280af838",
      "location": [-1.49650466442108, 37.261344909668]
    }, {
      "shop_id": "2801cf58-e7d1-41fe-aa96-7269cf94fbbf",
      "location": [-1.4966357, 37.26134]
    }, {
      "shop_id": "daec6cc9-3c1f-46ea-8e1a-2918d7ac7755",
      "location": [-1.4931978, 37.26163]
    }, {
      "shop_id": "c36e6906-c5e4-4504-aeda-d7ea0122ebe3",
      "location": [-1.4928077, 37.261734]
    }, {
      "shop_id": "6256cedb-7129-4115-bbdc-36d4ee23a0fd",
      "location": [-1.4125344, 37.33008]
    }, {
      "shop_id": "bb39b7fa-6ef1-414c-902d-b22a96524cd2",
      "location": [-1.412737, 37.331398]
    }, {
      "shop_id": "29f97e7d-156b-4c53-ac66-d7d75aaa0431",
      "location": [-1.4127617, 37.33307]
    }, {
      "shop_id": "3069e65c-9c29-4b6b-ad7c-33b7483107d4",
      "location": [-1.4874238, 37.262497]
    }, {
      "shop_id": "d1ebddd4-6c9b-4570-85ed-0bcf97fc3214",
      "location": [-1.48574995994568, 37.2614936828613]
    }, {
      "shop_id": "0c0f8a64-7d29-48a4-9744-63f347840f94",
      "location": [-1.4856197, 37.26131]
    }, {
      "shop_id": "fdf26de1-2027-4147-80f6-d27a93bfd816",
      "location": [-1.4798287, 37.257576]
    }, {
      "shop_id": "92f145ee-1af3-40c5-a5f8-c6e3249c79a7",
      "location": [-1.4797312, 37.257526]
    }, {
      "shop_id": "0b5f4e8b-0977-4718-92ed-f3a7515169de",
      "location": [-1.4795167, 37.257137]
    }, {
      "shop_id": "99050157-c20d-4e39-a333-23068ee3803c",
      "location": [-1.4772372, 37.256443]
    }, {
      "shop_id": "cbfdcd4f-9f8f-488b-8561-142c68ee4fab",
      "location": [-1.4766227, 37.25613]
    }, {
      "shop_id": "1600474c-afc6-4ecd-bc72-aca815949b20",
      "location": [-1.4696759, 37.253136]
    }, {
      "shop_id": "60dec7e3-1b35-47ce-a8d0-b67fad686467",
      "location": [-1.4637231, 37.253235]
    }, {
      "shop_id": "67158ee5-6c18-4c7a-93aa-26f88e6912a8",
      "location": [-1.4548839, 37.249153]
    }, {
      "shop_id": "1b82379b-0318-4eb4-bc3f-067f7fc1b0a5",
      "location": [-1.4551736, 37.249092]
    }, {
      "shop_id": "a129fc51-e017-4051-a703-9cc33dc24a6b",
      "location": [-1.4556489, 37.249397]
    }, {
      "shop_id": "07087aba-f1d9-4480-a605-9d707fd02ad3",
      "location": [-1.4814466, 37.258587]
    }, {
      "shop_id": "5cf9163d-cc51-4e94-9ee3-844cd0a755f4",
      "location": [-1.4962468, 37.26495]
    }, {
      "shop_id": "d7e55cd4-412b-48d5-b72f-eb093e1d47ef",
      "location": [-1.4956924, 37.265373]
    }, {
      "shop_id": "02f85cd6-0127-4e02-803d-f0f816dd1383",
      "location": [-1.4962621, 37.266773]
    }, {
      "shop_id": "5ea67af6-9af1-4f8c-a431-3f175504d376",
      "location": [-1.4963607, 37.266727]
    }, {
      "shop_id": "b0946ee2-6401-4660-8a97-2898933ef858",
      "location": [-1.5045967, 37.267483]
    }, {
      "shop_id": "6e2fddec-7732-404a-9335-4ba3efc3499e",
      "location": [-1.5191277, 37.26427]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Mwiki",
    "route_id": "d183d751-718b-4938-80b7-f13883674439",
    "matrix_info": {
      "DistanceMatrixAPI requests": 402,
      "cache_hit": "69%"
    },
    "distance": "32.89km",
    "path": "|qoF_r``FhGoaJpDgJzD{RaI~GeFjHCSgGvFgHcAeLiHcLl@_EkK`PrDpQeEfPo]qGcBPApLtC`g@}Jxy@`t@{cAgVaEfMuAvMkBxMlGrJxCuH`@aFa@gBtELcAI{AmHsCpDa@B}LeDeBhEyB}AqGjLsGx}I",
    "shops": [{
      "shop_id": "91bea2aa-6e23-4ac9-8dbf-06243699a17e",
      "location": [-1.2331603, 36.92888]
    }, {
      "shop_id": "8bc19347-545b-47da-a26d-e2bfe726ab36",
      "location": [-1.234055, 36.930683]
    }, {
      "shop_id": "38e8f8df-7ed4-41d3-98cf-b399c3d80b71",
      "location": [-1.2349927, 36.933865]
    }, {
      "shop_id": "40426cdf-32c7-40a3-a06b-b990710781d7",
      "location": [-1.2333783, 36.93242]
    }, {
      "shop_id": "f2b394fe-bedf-40fa-abe0-61e9b671b6dd",
      "location": [-1.23223483562469, 36.9309234619141]
    }, {
      "shop_id": "ece32d5f-533a-4762-90da-d78b193ceb58",
      "location": [-1.2322055, 36.931015]
    }, {
      "shop_id": "15c15663-b6cb-4d4d-ab13-91f247fe4374",
      "location": [-1.2308934, 36.929775]
    }, {
      "shop_id": "b462ad36-49d7-490e-a71a-eecf52d01a25",
      "location": [-1.2294079, 36.930122]
    }, {
      "shop_id": "beafc037-cf98-4a11-a566-962d83842a72",
      "location": [-1.2272958, 36.931606]
    }, {
      "shop_id": "159ea48d-4a0d-4be3-b85f-b20c79a20e41",
      "location": [-1.2251959, 36.93138]
    }, {
      "shop_id": "d4178318-0670-4caa-ac62-e6c6fc59e5ab",
      "location": [-1.2242439, 36.933357]
    }, {
      "shop_id": "aeb94196-b85f-4b1f-8c16-ebde0f84f276",
      "location": [-1.2269653, 36.93246]
    }, {
      "shop_id": "7e65ab4f-c068-4260-beb2-33691ed84c3d",
      "location": [-1.2299362, 36.93345]
    }, {
      "shop_id": "9044217f-cd38-4b1c-bd02-ee8ec8209513",
      "location": [-1.2326967, 36.938328]
    }, {
      "shop_id": "26a0d280-b48c-4b2f-be5e-6f62af052ed0",
      "location": [-1.2313304, 36.938828]
    }, {
      "shop_id": "ff22f8e6-122b-4e5f-b30a-88f717fd7501",
      "location": [-1.23141765594482, 36.9388389587402]
    }, {
      "shop_id": "e58c84e6-1ad0-46dd-82be-fd6de851c2f7",
      "location": [-1.2335893, 36.938087]
    }, {
      "shop_id": "3b7ac4de-c071-4004-abfc-c61a7f59f8f6",
      "location": [-1.24, 36.94]
    }, {
      "shop_id": "2d7e4bd2-5c2c-410b-8770-af3ef7c95342",
      "location": [-1.249407, 36.931507]
    }, {
      "shop_id": "bcc973ca-91d1-4e21-8491-babce08e9524",
      "location": [-1.2383893, 36.935226]
    }, {
      "shop_id": "61482fad-ed37-4064-baf1-e9820230f983",
      "location": [-1.237421, 36.93295]
    }, {
      "shop_id": "dcc220ce-2f91-4c03-8742-4d67be82555e",
      "location": [-1.2369899, 36.93059]
    }, {
      "shop_id": "1a1e4ed6-e1a0-4d2d-b764-04c06657e066",
      "location": [-1.2364533, 36.92822]
    }, {
      "shop_id": "6ff8b934-2aab-4841-b081-da984b1cd54d",
      "location": [-1.2378006, 36.92636]
    }, {
      "shop_id": "d3f0eff2-10d0-4240-8d12-d167f6319a75",
      "location": [-1.2385658, 36.927914]
    }, {
      "shop_id": "91b49669-2ea0-4b43-9f98-826b979e240a",
      "location": [-1.2387385, 36.929035]
    }, {
      "shop_id": "6fd5e51e-53ee-4f72-abee-47e59c35eaa5",
      "location": [-1.238571, 36.92956]
    }, {
      "shop_id": "dea03b28-5759-45da-b059-63ab060e0f69",
      "location": [-1.2396394, 36.92949]
    }, {
      "shop_id": "8173f049-af64-4fb3-866b-b4310dfdae00",
      "location": [-1.239301, 36.929543]
    }, {
      "shop_id": "c6150fd4-42c8-4651-a9ef-3601683a02ea",
      "location": [-1.2388432, 36.931053]
    }, {
      "shop_id": "93f84b3c-9144-4ca4-8368-af7e9738afd8",
      "location": [-1.2381043, 36.93016]
    }, {
      "shop_id": "a0c48c50-74ee-4555-ab34-5c657a8aaebc",
      "location": [-1.2379271, 36.930138]
    }, {
      "shop_id": "b3a1b0d5-abd8-4332-bb29-3aaec4fbe84c",
      "location": [-1.2357022, 36.930973]
    }, {
      "shop_id": "8f8f3a20-71b1-4071-9a38-6ef16f4c8a6f",
      "location": [-1.2351873, 36.929962]
    }, {
      "shop_id": "ea97a021-36f6-4c25-ada3-523765ba992d",
      "location": [-1.2345841, 36.930428]
    }, {
      "shop_id": "4d2f77ae-c717-4e48-80fb-0512b16c02d7",
      "location": [-1.233211, 36.92829]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Parklands",
    "route_id": "480c0bd9-7fb5-4287-bc30-5c697f712b9d",
    "matrix_info": {
      "DistanceMatrixAPI requests": 94,
      "cache_hit": "89%"
    },
    "distance": "20.81km",
    "path": "`z|Fedx_F__EeKkf@`f@_ScOtAMB@FIOnBeNiHzUbLZD@ADFFBQ[p@N_JjD{AnHjFtE}TdA_FxI~VvOuFVw@bBhIvTpVgOFdDdAhAh@Nf@G|HoL\\l@zpE{hA",
    "shops": [{
      "shop_id": "ad02cc97-7e8e-44d5-b2a6-2dd618182b5c",
      "location": [-1.2689669, 36.830936]
    }, {
      "shop_id": "f586fe1b-8f13-4018-be41-184321b6d1a5",
      "location": [-1.262666, 36.824688]
    }, {
      "shop_id": "25e3285a-1db6-4940-baa6-c10b298003e3",
      "location": [-1.2594738, 36.82727]
    }, {
      "shop_id": "91e51312-99f2-477b-8ae3-d3b76dc58835",
      "location": [-1.2599021, 36.82734]
    }, {
      "shop_id": "6a35202c-8516-44b5-9a99-ccd37b56b717",
      "location": [-1.2599158, 36.82733]
    }, {
      "shop_id": "e9c15609-fd56-4c9c-bf2d-ca8254c7d431",
      "location": [-1.2599635, 36.82738]
    }, {
      "shop_id": "37f72783-d029-4f9b-91ef-66805cccf7be",
      "location": [-1.2598836, 36.826824]
    }, {
      "shop_id": "7205b400-7369-4fd3-bb94-350645489398",
      "location": [-1.2574543, 36.82831]
    }, {
      "shop_id": "4c34441c-985a-4804-86e9-4a344fffbb24",
      "location": [-1.2611064, 36.82621]
    }, {
      "shop_id": "061f00ec-9635-496c-989d-76eec067d6e0",
      "location": [-1.2612463, 36.82618]
    }, {
      "shop_id": "fddfecc5-46da-4ffc-a053-cad200f2b04e",
      "location": [-1.2612617, 36.82619]
    }, {
      "shop_id": "c936951b-4cf4-4856-b008-28874f2dc3be",
      "location": [-1.261291, 36.82615]
    }, {
      "shop_id": "277aa323-c1f3-4966-95b0-46273ac01d68",
      "location": [-1.261328, 36.82613]
    }, {
      "shop_id": "4c3534c9-cedd-4da6-9500-1db2f82d6e2f",
      "location": [-1.2612408, 36.82627]
    }, {
      "shop_id": "79368a15-b7d9-4d2d-810f-709864818043",
      "location": [-1.2614945, 36.826187]
    }, {
      "shop_id": "085ab34d-b6f5-4036-839f-28a4ec896b4c",
      "location": [-1.2597251, 36.825325]
    }, {
      "shop_id": "3c43f0be-c57e-4167-a22e-1dd2f5555215",
      "location": [-1.2592679, 36.823814]
    }, {
      "shop_id": "92267e87-4ec5-4592-929b-7b243e3bda01",
      "location": [-1.2604483, 36.822735]
    }, {
      "shop_id": "b4cd271b-3ec3-428c-8aca-9f6e793bc050",
      "location": [-1.2569369, 36.82239]
    }, {
      "shop_id": "1d8805a4-fa89-4b9c-a937-ba565ea2e4c9",
      "location": [-1.255817, 36.820656]
    }, {
      "shop_id": "ee20550f-aee2-40ce-a65f-ff5c7656d865",
      "location": [-1.2596616, 36.817978]
    }, {
      "shop_id": "d695305d-6c08-4743-92a6-c6ad6eb9ae1a",
      "location": [-1.2584339, 36.817856]
    }, {
      "shop_id": "fe467e92-e514-40e4-8d9e-b34e42cc7ddd",
      "location": [-1.258148, 36.81736]
    }, {
      "shop_id": "8c011360-ce7a-488a-ab91-08ce94ae5509",
      "location": [-1.2597978, 36.81388]
    }, {
      "shop_id": "57463082-9805-48f4-988c-9158eb94c0f5",
      "location": [-1.2635725, 36.81648]
    }, {
      "shop_id": "d5c93b3f-03d8-4f59-896d-7715abff72b8",
      "location": [-1.26361417770386, 36.8156509399414]
    }, {
      "shop_id": "96278b7c-175c-45b6-bf1b-c0da70814efb",
      "location": [-1.2639635, 36.81528]
    }, {
      "shop_id": "c851d21e-bf9c-48ae-9b6e-25c3847c126c",
      "location": [-1.2641748, 36.8152]
    }, {
      "shop_id": "f2f42c9d-3456-444b-b00d-6fb38aa8a78b",
      "location": [-1.2643747, 36.81524]
    }, {
      "shop_id": "5c68c114-33d6-4ee3-b959-26594616999e",
      "location": [-1.2659593, 36.817398]
    }, {
      "shop_id": "54d96547-45f0-47e9-b221-b387ebd5ace6",
      "location": [-1.266105, 36.817173]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Limuru 2",
    "route_id": "0638e859-fa10-46a8-b9c4-90d49e185bd0",
    "matrix_info": {
      "DistanceMatrixAPI requests": 650,
      "cache_hit": "80%"
    },
    "distance": "111.75km",
    "path": "`ijF{`p_Fmq\\fn]CA?ENWJONTDD{@uB}@i@}fA}f@jdA|b@lDgC?FxExGRxECBi@V_vG`]glWlvHvaRckICGHA@B]UiFeEf|WbEn@P@L`@THUEOf@pEQE]F~@DKj@RRaAXB~@`Az@bAiBDhFhADsEASuT|AiAnBZn@xC`A~CTLVRWJP}@j@EDIH\\nx@jNE?rxDsaGztIakV",
    "shops": [{
      "shop_id": "455b7f09-5e54-4700-a128-47af3452c744",
      "location": [-1.0533761, 36.631462]
    }, {
      "shop_id": "810536e4-dc3c-4701-bb9a-8119e974da60",
      "location": [-1.0533602, 36.63147]
    }, {
      "shop_id": "cae19712-5e55-40e2-8451-2c9b1134de7b",
      "location": [-1.0533632, 36.6315]
    }, {
      "shop_id": "1cd011b5-e393-41b6-946c-ca6e230e5590",
      "location": [-1.0534449, 36.631622]
    }, {
      "shop_id": "52f07ef3-fc6a-455d-a6a7-6b387b147686",
      "location": [-1.0535038, 36.631695]
    }, {
      "shop_id": "4ae05c81-e356-4f07-89ff-1f91f058117d",
      "location": [-1.0535796, 36.631588]
    }, {
      "shop_id": "686653cd-bb46-47e4-8ba3-9957d1273f15",
      "location": [-1.0536056, 36.631557]
    }, {
      "shop_id": "b354365d-896f-446d-85d7-2b61afa92173",
      "location": [-1.0533074, 36.632145]
    }, {
      "shop_id": "679ec0af-730c-4a98-9a8f-4b97e03e3962",
      "location": [-1.0529983, 36.63236]
    }, {
      "shop_id": "29630f6f-ed68-45f3-ad3a-979d3a439210",
      "location": [-1.0414898, 36.638752]
    }, {
      "shop_id": "9e2ffa5e-c7ba-49eb-a043-56013a2d363f",
      "location": [-1.0525948, 36.633003]
    }, {
      "shop_id": "e743d279-ce04-4255-9530-38e90d34cc69",
      "location": [-1.0534627, 36.633682]
    }, {
      "shop_id": "6fd6716d-4829-4f7a-875e-5aed123e2624",
      "location": [-1.0534558, 36.633644]
    }, {
      "shop_id": "e92f6247-c43e-42c6-82fd-a4ad71d2bf17",
      "location": [-1.0545503, 36.632233]
    }, {
      "shop_id": "96d86e25-dda1-4b35-8b5e-362609acefbd",
      "location": [-1.0546488, 36.63114]
    }, {
      "shop_id": "0c9ec35a-21da-4410-8523-cac887431087",
      "location": [-1.0546299, 36.631123]
    }, {
      "shop_id": "b47433f8-2be5-499e-a442-a887fbf8341d",
      "location": [-1.0544174, 36.631]
    }, {
      "shop_id": "962073ab-66e6-4bf5-acde-18faeb45e1a5",
      "location": [-1.0097837, 36.626186]
    }, {
      "shop_id": "23ec8521-f543-4c5f-acfe-e91ccc77eaf7",
      "location": [-0.8847781, 36.576355]
    }, {
      "shop_id": "3b260af1-ed40-4264-9c56-12ad61bf6c6f",
      "location": [-0.9824975, 36.6295]
    }, {
      "shop_id": "3139159a-876c-4635-8439-57ce6cca668c",
      "location": [-0.9824763, 36.629543]
    }, {
      "shop_id": "7ae36771-b39b-4631-a9bf-c5e7e215161c",
      "location": [-0.9825283, 36.629547]
    }, {
      "shop_id": "4d88917b-a71c-4790-af2e-837826696731",
      "location": [-0.9825449, 36.62953]
    }, {
      "shop_id": "75f04900-35b5-4596-87eb-6c7304b46910",
      "location": [-0.9823915, 36.629635]
    }, {
      "shop_id": "fde6083e-a7ee-4c75-8e83-890983af7d93",
      "location": [-0.9812152, 36.630627]
    }, {
      "shop_id": "de42b654-aef9-4f9e-8b94-f2245681ab9a",
      "location": [-1.1087772, 36.629654]
    }, {
      "shop_id": "77ce6157-dfe7-4967-9f82-83a45fe9ec37",
      "location": [-1.1090248, 36.629555]
    }, {
      "shop_id": "bf9a2e75-12e6-4391-b290-7709e6bf7ac1",
      "location": [-1.1090314, 36.629494]
    }, {
      "shop_id": "8354fafd-b96e-4d6c-b905-8cb242a9deaf",
      "location": [-1.1091964, 36.62938]
    }, {
      "shop_id": "dcefe1ac-ec28-4328-a58c-9fe9d929c1cb",
      "location": [-1.1092452, 36.629494]
    }, {
      "shop_id": "dcffa5d6-26fa-460b-ac0e-019cbd60dda0",
      "location": [-1.1092191, 36.629574]
    }, {
      "shop_id": "18c036ec-da11-4639-8534-9adf7ca7defb",
      "location": [-1.1094209, 36.62852]
    }, {
      "shop_id": "5c7b8bc7-ff6c-4eb9-913e-e95edc837698",
      "location": [-1.1093342, 36.628548]
    }, {
      "shop_id": "e848a16a-92fd-41ba-841d-7d30e4d2e6f5",
      "location": [-1.1091777, 36.628506]
    }, {
      "shop_id": "4ba27e21-71df-4c7a-bab7-4a4c4888edd3",
      "location": [-1.1095048, 36.628483]
    }, {
      "shop_id": "a4ef195e-19a6-4ba4-8b27-2830a714c0cf",
      "location": [-1.1094391, 36.62826]
    }, {
      "shop_id": "c5dec7b6-3943-4017-983c-c6b8b02fc31b",
      "location": [-1.1095417, 36.628155]
    }, {
      "shop_id": "e1c6d0bd-7ab8-4435-a406-db1db1c33901",
      "location": [-1.1092145, 36.62803]
    }, {
      "shop_id": "53415e8f-044a-4b44-83f4-d8ffb0c155ff",
      "location": [-1.1092293, 36.62771]
    }, {
      "shop_id": "355a75d5-19dd-474b-95d4-b8d513409299",
      "location": [-1.1095635, 36.62741]
    }, {
      "shop_id": "26b8b7d0-1623-4a5a-962a-abaacb764bbe",
      "location": [-1.109905, 36.627945]
    }, {
      "shop_id": "04b02c22-a452-4551-b1bf-64e0e1a853b3",
      "location": [-1.1099339, 36.62677]
    }, {
      "shop_id": "457e30b4-ade0-4a02-857b-8febe0a4a5cb",
      "location": [-1.1102979, 36.626743]
    }, {
      "shop_id": "ac3334c3-782c-4632-bfa8-a54654e7ab7f",
      "location": [-1.1092373, 36.626747]
    }, {
      "shop_id": "9ed751a4-f3a8-4616-a936-2050af7e50ec",
      "location": [-1.1091352, 36.630222]
    }, {
      "shop_id": "71afb35d-145a-4ada-9048-df113951bc20",
      "location": [-1.1096106, 36.630585]
    }, {
      "shop_id": "ddccf324-9dab-4701-98d2-4cd85ae4bd4b",
      "location": [-1.1101705, 36.630447]
    }, {
      "shop_id": "c2d43fa4-05cd-46c4-9de4-06e543fa7aa1",
      "location": [-1.1104141, 36.62968]
    }, {
      "shop_id": "1db380d2-cd04-4712-9bef-1657b45b8ffe",
      "location": [-1.1107368, 36.628876]
    }, {
      "shop_id": "2f33c8fd-88a3-4256-9c97-1f2c751a5fc2",
      "location": [-1.1108522, 36.628807]
    }, {
      "shop_id": "66629e01-f388-4c88-93b2-f31fe61375c8",
      "location": [-1.110972, 36.62871]
    }, {
      "shop_id": "ebc45d26-b18f-45b1-a57f-6c6c35436b71",
      "location": [-1.110851, 36.62865]
    }, {
      "shop_id": "3ac38da3-3620-4f1c-91ec-5c34d7111b9e",
      "location": [-1.1109365, 36.62896]
    }, {
      "shop_id": "11165e2f-bbfc-4653-960d-4cf036ace0e7",
      "location": [-1.1111604, 36.628994]
    }, {
      "shop_id": "b7a5be91-2224-47d6-aaa8-294939b482b1",
      "location": [-1.111193, 36.62904]
    }, {
      "shop_id": "e009e651-ca57-4af1-9d71-5cee133d2b11",
      "location": [-1.1112401, 36.628887]
    }, {
      "shop_id": "6b46ed02-2ea0-4790-a4dd-c20bf5dd9198",
      "location": [-1.1204447, 36.626434]
    }, {
      "shop_id": "dbc74bdd-08d4-4930-b0d7-097bd48150a9",
      "location": [-1.1204077, 36.626434]
    }, {
      "shop_id": "f915de02-a635-4f70-8e6b-a9bf15e89742",
      "location": [-1.1501102, 36.66781]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Otiende",
    "route_id": "22c0bf9f-00cd-47aa-a2e2-11d12bfea8af",
    "matrix_info": {
      "DistanceMatrixAPI requests": 50,
      "cache_hit": "97%"
    },
    "distance": "25.13km",
    "path": "tz|Fmdx_FlpDfiGBFgPxEe\\_BfBrAtH_JCMUI[@U_@~@wBVMaMpCdQtDrEfCrCdGqCShAhCeB|Ci@`BK??FBFLA[GuDh]z@dC?KJCxMeEfRxCABmi@jCuFdCyAkMQKCBsBUXDpTsBCOIW~pAcMAoVqdFiqG",
    "shops": [{
      "shop_id": "f7c24c98-4737-4976-9ca6-273c4b1e167d",
      "location": [-1.3281817, 36.786427]
    }, {
      "shop_id": "affb18e1-0506-4a13-a554-b50bdfe7ef95",
      "location": [-1.3281963, 36.78639]
    }, {
      "shop_id": "1bed0121-fe7b-460a-b60a-379f2397f70a",
      "location": [-1.3254417, 36.785297]
    }, {
      "shop_id": "bf30ef46-f1c7-44f4-82ac-f0cf17867312",
      "location": [-1.3207703, 36.78578]
    }, {
      "shop_id": "0a46b40e-fc4a-4197-92d1-aa2e6d4e38ee",
      "location": [-1.3212885, 36.78536]
    }, {
      "shop_id": "ff0ba683-b8c1-4dcd-85e7-6c218e208267",
      "location": [-1.3228407, 36.78712]
    }, {
      "shop_id": "6533a95c-c280-468d-968a-073b746b0099",
      "location": [-1.3228177, 36.787186]
    }, {
      "shop_id": "cc3e752e-ab07-4a8c-9941-7d5125d312c8",
      "location": [-1.3227053, 36.78724]
    }, {
      "shop_id": "2002dcc8-7561-4cb8-b0bd-ae0ab9cc868f",
      "location": [-1.3225685, 36.78723]
    }, {
      "shop_id": "3d47ee1d-5342-45be-bffe-2fea4da6a4c7",
      "location": [-1.3224642, 36.78739]
    }, {
      "shop_id": "06ec7818-53bd-492c-b207-d17a9188948b",
      "location": [-1.3227817, 36.78799]
    }, {
      "shop_id": "10f97557-b99d-4b65-923c-e6564672c3c9",
      "location": [-1.322899, 36.78806]
    }, {
      "shop_id": "78ff1dfa-1ba4-4f5f-a9cc-a5560c75a89d",
      "location": [-1.3206508, 36.78733]
    }, {
      "shop_id": "4b8d387a-9fda-41fb-9c9b-f4ea033b1c04",
      "location": [-1.32355964183807, 36.7864227294922]
    }, {
      "shop_id": "e7625bd2-1457-4371-b7e0-dd5a0ffdcec9",
      "location": [-1.32462, 36.785744]
    }, {
      "shop_id": "95f9edba-52a3-47ad-b027-fa22e6d49cee",
      "location": [-1.3253603, 36.78443]
    }, {
      "shop_id": "56071ef4-1951-4d1d-b1b5-cc7f36b63623",
      "location": [-1.324629, 36.78453]
    }, {
      "shop_id": "20ad2cbf-8823-41b3-8c6a-20396dcd2891",
      "location": [-1.3250029, 36.783836]
    }, {
      "shop_id": "a016566c-8bd9-4211-91f5-53ac89a903f0",
      "location": [-1.3244938, 36.783054]
    }, {
      "shop_id": "cfff35a8-e55f-40e6-9e44-fce1ac75dcfb",
      "location": [-1.3242803, 36.782562]
    }, {
      "shop_id": "0b06f2da-2336-4d53-a0e1-782f248424aa",
      "location": [-1.3242179, 36.782562]
    }, {
      "shop_id": "ab036dd4-c676-4653-a462-b5daffe8ad1e",
      "location": [-1.3242238, 36.782516]
    }, {
      "shop_id": "e9c649e2-22d0-43c0-b4c3-a5ef0bbffa04",
      "location": [-1.3242372, 36.782482]
    }, {
      "shop_id": "f17e3ccf-330b-4542-b99e-a98fb7b628e5",
      "location": [-1.3243066, 36.782494]
    }, {
      "shop_id": "3954506a-3400-48b8-aef9-1a1ee2ec7b53",
      "location": [-1.3241682, 36.78253]
    }, {
      "shop_id": "17699a3c-3ed0-4513-9b53-e7ae7652281e",
      "location": [-1.3232594, 36.777683]
    }, {
      "shop_id": "23d9cd43-3659-4b75-9404-9d52dca3e795",
      "location": [-1.3235636, 36.777008]
    }, {
      "shop_id": "464b6a83-a413-4b9c-a16d-1ba98ab64237",
      "location": [-1.3235576, 36.777073]
    }, {
      "shop_id": "6ce5d85a-a9f8-4a04-80d8-8b3c76772177",
      "location": [-1.32361912727356, 36.7770881652832]
    }, {
      "shop_id": "a4ec3d74-b19c-4081-b479-cf6a52b44d19",
      "location": [-1.3259941, 36.778076]
    }, {
      "shop_id": "3ba2f673-544a-4986-9096-25b934e0666d",
      "location": [-1.329072, 36.777306]
    }, {
      "shop_id": "9aec57cc-b7cb-4d15-bca2-0c4f43087160",
      "location": [-1.3290616, 36.777287]
    }, {
      "shop_id": "6930ccc2-13d7-4d12-afe8-f606aea485f7",
      "location": [-1.3222682, 36.77659]
    }, {
      "shop_id": "81d4bb70-173c-45b4-b0ec-e4bec5a16c91",
      "location": [-1.3210366, 36.77592]
    }, {
      "shop_id": "290251e3-5058-4b79-80fc-230f1338aaae",
      "location": [-1.3205878, 36.778217]
    }, {
      "shop_id": "c2d1f290-ae85-4cd3-805f-99d9fa7c3ed2",
      "location": [-1.3204983, 36.778275]
    }, {
      "shop_id": "c769b9b2-b427-49a8-a2fa-f1e94d8295f3",
      "location": [-1.3204825, 36.778255]
    }, {
      "shop_id": "da7ec227-42eb-43f7-a7e6-d50ec0b5de57",
      "location": [-1.3199012, 36.778374]
    }, {
      "shop_id": "d2538c7a-fc16-4fd6-9d9a-fa818a45898c",
      "location": [-1.32002949714661, 36.7783432006836]
    }, {
      "shop_id": "a1d01adc-5d67-4aeb-b7d9-46ebe7ea372b",
      "location": [-1.323483, 36.77892]
    }, {
      "shop_id": "290f6813-d7e5-44cf-a9ac-16d311121816",
      "location": [-1.3234613, 36.779]
    }, {
      "shop_id": "f3659017-fe74-47dd-895c-d8d6331075da",
      "location": [-1.3234106, 36.77912]
    }, {
      "shop_id": "e4b4fe76-df95-4c89-a197-b18f6f0aa411",
      "location": [-1.3365252, 36.781384]
    }, {
      "shop_id": "bebd0605-04cf-4dba-8cbe-0051120d976d",
      "location": [-1.3365238904953, 36.7851371765137]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Makongeni",
    "route_id": "8e162a5b-a70d-46d4-ba8b-e14649757164",
    "matrix_info": {
      "DistanceMatrixAPI requests": 718,
      "cache_hit": "73%"
    },
    "distance": "27.26km",
    "path": "l~mEa_raFiBm@MqzBzMilDoK}T}AgXeAj@bTvQoLx~C~Nne@eEHxGxxBgChNbGgEbNyDxDg@LVc@q@FzDsF~d@}N}@AA?~JcOiMj@`JzY`XeA`OkIkCg@Km\\Na@jBBn@_@hAwBtD_B_AdIFJ`OiWle@xE_AyK_m@F_@kGgBlQeHNXlIkJ^{@l@pBfJaTFERWz@jAeFaHdGiQJa_@",
    "shops": [{
      "shop_id": "1f0fcb02-2799-49ce-80e5-7910098b5abf",
      "location": [-1.059221, 37.12536]
    }, {
      "shop_id": "34828679-7de7-45d6-a976-64958775f75b",
      "location": [-1.0591494, 37.145126]
    }, {
      "shop_id": "74138cb2-c3c0-40b5-9e01-7cfe1e3dcc59",
      "location": [-1.0615317, 37.172863]
    }, {
      "shop_id": "a8d8cf2e-c7a1-43bf-b788-e85f5af6f654",
      "location": [-1.059525, 37.176373]
    }, {
      "shop_id": "2886113b-7537-44c1-b40e-37451aa0b1a5",
      "location": [-1.0590597, 37.180405]
    }, {
      "shop_id": "e4d0f32d-8a33-452e-b1de-d488ac16ec31",
      "location": [-1.0587146, 37.180187]
    }, {
      "shop_id": "30dd4cca-f937-438e-932d-eb978f64ec45",
      "location": [-1.0620923, 37.177193]
    }, {
      "shop_id": "8f097ea2-b16d-4da9-ba4f-f3a2939df1b7",
      "location": [-1.0599259, 37.151615]
    }, {
      "shop_id": "12abd896-59e4-4a18-b618-97844e7d25be",
      "location": [-1.0624903, 37.14546]
    }, {
      "shop_id": "9cb851f3-dbc1-40a6-a484-f64869171ce6",
      "location": [-1.06149792671204, 37.1454086303711]
    }, {
      "shop_id": "2e7434fe-70c3-4f09-9f85-da5918267e89",
      "location": [-1.062913, 37.12592]
    }, {
      "shop_id": "8ff42277-c05c-4d67-b5c1-4e5bd0757640",
      "location": [-1.0622292, 37.123474]
    }, {
      "shop_id": "22b6edbd-640b-4993-9147-b8fbb59348e4",
      "location": [-1.0635267, 37.12447]
    }, {
      "shop_id": "084e07b0-83cf-4831-8be0-25639fcef990",
      "location": [-1.065947, 37.125397]
    }, {
      "shop_id": "5a4d2c27-b58c-4ad0-a134-af2651c75ee6",
      "location": [-1.0668786, 37.125603]
    }, {
      "shop_id": "d6c4cdf9-c7b0-4aa8-8927-1e5bdfa957d7",
      "location": [-1.06695, 37.12548]
    }, {
      "shop_id": "ae3e7dff-59f7-4c08-a4ef-dc60a28498ce",
      "location": [-1.0667678, 37.125725]
    }, {
      "shop_id": "71d316c5-1a34-4729-b9e1-4006f0328a5c",
      "location": [-1.0668143, 37.124786]
    }, {
      "shop_id": "cf80e175-1557-47a0-8353-02e10e88759e",
      "location": [-1.065591, 37.118713]
    }, {
      "shop_id": "82f08627-dead-4a97-8e11-05c4ed2e9516",
      "location": [-1.0630381, 37.11902]
    }, {
      "shop_id": "ce7e8e88-1134-4465-ba61-a2a5b5873228",
      "location": [-1.0630333, 37.11903]
    }, {
      "shop_id": "97d4aabb-bf55-43c3-8d12-5ed43965cc95",
      "location": [-1.0630287, 37.11711]
    }, {
      "shop_id": "b4cf63ef-5f99-4d2b-ab60-35fd2a6632bc",
      "location": [-1.0604461, 37.1194]
    }, {
      "shop_id": "49865692-3541-43b3-a1dd-1785dae3568f",
      "location": [-1.0606682, 37.117626]
    }, {
      "shop_id": "e0287473-73a9-40a2-9b47-51df6c694e6f",
      "location": [-1.0649709, 37.113617]
    }, {
      "shop_id": "292dd195-e6fa-46e5-a311-c13781e772e1",
      "location": [-1.0646157, 37.111053]
    }, {
      "shop_id": "5a02080c-2580-414e-a27e-44c9b1f6733a",
      "location": [-1.0629591, 37.111748]
    }, {
      "shop_id": "a69f1205-5804-4463-bd2d-ef2208121762",
      "location": [-1.0627595, 37.111813]
    }, {
      "shop_id": "510421d1-1914-40b2-a90e-592d92dd52f8",
      "location": [-1.0580497, 37.111725]
    }, {
      "shop_id": "938350a5-08b8-46f1-8916-67d69cd4663a",
      "location": [-1.0578815, 37.11119]
    }, {
      "shop_id": "6aee9ef9-6877-4b03-a906-495346deadc4",
      "location": [-1.0579016, 37.110954]
    }, {
      "shop_id": "3e4ec9e5-5e52-45d7-a72f-cef3f158ae6f",
      "location": [-1.0577353, 37.110584]
    }, {
      "shop_id": "a78b5b60-b0ec-4db5-89fd-c9405413e43b",
      "location": [-1.0571418, 37.109665]
    }, {
      "shop_id": "3d8ae131-63ed-4320-b6a9-d527acf9e486",
      "location": [-1.0566589, 37.10999]
    }, {
      "shop_id": "95634a11-aa94-4d55-8e68-4cd8c5df4ee6",
      "location": [-1.0582856, 37.10995]
    }, {
      "shop_id": "d461fe29-c06d-4134-9afe-f9695ffcc54e",
      "location": [-1.0583466, 37.10738]
    }, {
      "shop_id": "90cf904f-0833-47f4-8a84-64ec08068e6b",
      "location": [-1.0544637, 37.101234]
    }, {
      "shop_id": "520819d4-bab2-448e-978a-a986e99fe7d6",
      "location": [-1.0555478, 37.101555]
    }, {
      "shop_id": "ed92ecb2-d73d-4d86-8fdd-de64f25772c9",
      "location": [-1.0535023, 37.10891]
    }, {
      "shop_id": "70df5bf1-7831-4fc1-851f-d36dd9a4d4c8",
      "location": [-1.0535363, 37.10907]
    }, {
      "shop_id": "01ffdbd7-3352-4b0d-b0b5-d2cabf446328",
      "location": [-1.0521992, 37.109585]
    }, {
      "shop_id": "73e08c39-8173-4157-a539-a077f18103a6",
      "location": [-1.0551456, 37.111057]
    }, {
      "shop_id": "4d457325-221c-4c21-ad13-7ee462a46c29",
      "location": [-1.0552299, 37.110928]
    }, {
      "shop_id": "09c8bc18-2a9f-44ea-99e3-0c31e5e9950a",
      "location": [-1.0568992, 37.112747]
    }, {
      "shop_id": "cc47dc79-1e4f-4759-a652-753ecf057d8f",
      "location": [-1.0570558, 37.113045]
    }, {
      "shop_id": "7ced93cd-c0d3-478c-8f7e-e2092017229e",
      "location": [-1.0572855, 37.11248]
    }, {
      "shop_id": "9e33934a-3f8f-44e1-9cfb-ae78d24f6ba1",
      "location": [-1.0590888, 37.115852]
    }, {
      "shop_id": "5021857e-76eb-4065-8199-e29a780e50b4",
      "location": [-1.0591277, 37.115875]
    }, {
      "shop_id": "2175dee0-14ff-4f76-a7f5-a1ae9dc2ba68",
      "location": [-1.05923140048981, 37.1160011291504]
    }, {
      "shop_id": "f6acfde1-d510-4afc-9d32-8f1229fad905",
      "location": [-1.0595322, 37.115623]
    }, {
      "shop_id": "1301814b-4153-4560-ab7d-271574d94d2a",
      "location": [-1.05838418006897, 37.1170692443848]
    }, {
      "shop_id": "ff680c88-943d-4668-aa7a-457d317f4c64",
      "location": [-1.0596881, 37.119995]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Mathare/Huruma",
    "route_id": "4e8383ca-6c31-4e8f-939f-6379eb4afb26",
    "matrix_info": {
      "DistanceMatrixAPI requests": 648,
      "cache_hit": "77%"
    },
    "distance": "53.27km",
    "path": "dsfG_se`FshOzkImPqfAHwAou@ck@iPwWQaSoE}DjAgDuC{CNMaJHQKMm@r@Ui@zCEZGbAgDj@d@|E_Bn@bT_Vi@GoEa@~@eGjA_@~WlV{HdErAvCbPbS{DrEbTrQj@uG{CkR?c@rB_@tGyCkKXu@s@Bi@w@?qAmME{@sBP`EcFl@lBnV}JqAcC]@yB{@cGqN~AFx@FrIKAeDdhPyvB",
    "shops": [{
      "shop_id": "d50fa12c-4a1a-4a57-81a6-963d8ee5e8a1",
      "location": [-1.2663326, 36.844658]
    }, {
      "shop_id": "2699c7c4-9843-44af-9baf-8b75a015513c",
      "location": [-1.2635429, 36.85611]
    }, {
      "shop_id": "1f64f689-1bdd-4e1f-b1fd-ae8e76eb163f",
      "location": [-1.26359474658966, 36.8565483093262]
    }, {
      "shop_id": "35419a5e-17f4-4dcd-bdfc-452095b23252",
      "location": [-1.2548662, 36.863605]
    }, {
      "shop_id": "6da7492c-d21f-46a0-81e8-0ac5235ad411",
      "location": [-1.2521033, 36.867573]
    }, {
      "shop_id": "5fdcd173-f31e-49f9-b4d5-7a37cd8322c9",
      "location": [-1.2520094, 36.870777]
    }, {
      "shop_id": "b2086fb0-2364-49f2-87a6-024a973f4274",
      "location": [-1.2509674, 36.87173]
    }, {
      "shop_id": "749e25d3-a4ce-43f8-b97e-1aee9c7ade65",
      "location": [-1.251352, 36.872566]
    }, {
      "shop_id": "59999125-4b2f-4746-aa49-d698acea88e7",
      "location": [-1.2505963, 36.873352]
    }, {
      "shop_id": "39875d44-9d78-4756-99ff-9c2372d5aed6",
      "location": [-1.2506783, 36.87342]
    }, {
      "shop_id": "704e0076-7bea-4d4c-be44-b855bf5e3f81",
      "location": [-1.24890863895416, 36.8733711242676]
    }, {
      "shop_id": "a6bb6899-0825-4e0c-b70c-42a1d509bf29",
      "location": [-1.248815, 36.87343]
    }, {
      "shop_id": "18561bc6-0cd7-49eb-bb14-7b9ace6ad614",
      "location": [-1.2487454, 36.873657]
    }, {
      "shop_id": "c2d8d03b-a81d-455f-b0df-fb056ba0ad6d",
      "location": [-1.24901103973389, 36.8737678527832]
    }, {
      "shop_id": "ebc9c1b8-2bae-49ec-a226-64d2b3a45739",
      "location": [-1.2488004, 36.872986]
    }, {
      "shop_id": "041a8ae2-f74f-435a-a646-b6b9f5885953",
      "location": [-1.2487713, 36.872845]
    }, {
      "shop_id": "3c54fac3-19c3-48bf-a6f4-1c0e6301f0ab",
      "location": [-1.2487338, 36.87251]
    }, {
      "shop_id": "da1c348a-575b-4574-b97a-f53749d08e62",
      "location": [-1.2478851, 36.872288]
    }, {
      "shop_id": "b53e7d02-fd78-4fbe-af4c-196c64b677e6",
      "location": [-1.2480763, 36.871185]
    }, {
      "shop_id": "261dbd1d-ae91-45d6-b332-86ad328b12dd",
      "location": [-1.247603, 36.870937]
    }, {
      "shop_id": "72981685-6283-4695-aeb9-235f0385650c",
      "location": [-1.250982, 36.874615]
    }, {
      "shop_id": "53be1825-31e0-4f59-8701-11062b542c13",
      "location": [-1.2507715, 36.874657]
    }, {
      "shop_id": "2adb6fd7-4f4a-4c5e-91cd-fbb8174325a4",
      "location": [-1.2497293, 36.87483]
    }, {
      "shop_id": "6ef0e326-0e73-4057-8924-95e31c93ad4e",
      "location": [-1.2500539, 36.876137]
    }, {
      "shop_id": "db718c7f-e299-4ef3-ba30-96f076b7b108",
      "location": [-1.2504337, 36.8763]
    }, {
      "shop_id": "21e5da41-e438-43af-917a-e821a41dd166",
      "location": [-1.2544304, 36.872547]
    }, {
      "shop_id": "1b88e51b-93eb-457f-977e-ed614a517de2",
      "location": [-1.252851, 36.871555]
    }, {
      "shop_id": "d19d1da4-5ba6-43e9-8f29-c5061e7bf16f",
      "location": [-1.2532717, 36.8708]
    }, {
      "shop_id": "f140f0ca-cae2-4e3b-bce0-a6375ab00e78",
      "location": [-1.2560133, 36.867577]
    }, {
      "shop_id": "ff17b7a0-3f45-4d63-81d2-fd7dbd0562b1",
      "location": [-1.2550703, 36.866524]
    }, {
      "shop_id": "ba6319e1-1f6f-463f-a4e0-f8113d221bc2",
      "location": [-1.2584491, 36.86354]
    }, {
      "shop_id": "594756a7-760a-41d2-b9cb-ee72aa49bf70",
      "location": [-1.2586668, 36.864933]
    }, {
      "shop_id": "56a3ecdc-2e5c-4067-9501-25154bd39484",
      "location": [-1.2578871, 36.868034]
    }, {
      "shop_id": "73f56503-d793-4f1d-94e7-4cd06ed003f0",
      "location": [-1.2578886, 36.868206]
    }, {
      "shop_id": "8f113683-3cd3-41b0-aaea-c8a756198807",
      "location": [-1.2584717, 36.86837]
    }, {
      "shop_id": "90585f23-9ba6-42ca-9c24-af2b223012d9",
      "location": [-1.2598597, 36.86914]
    }, {
      "shop_id": "2dd5b072-d163-4d81-b7bb-851d5da10821",
      "location": [-1.2578754, 36.86901]
    }, {
      "shop_id": "0ce895c0-fbe3-4775-89b1-da049bc00214",
      "location": [-1.257612, 36.869274]
    }, {
      "shop_id": "90eb5f05-dab4-4d91-8baa-26ace38bcb7c",
      "location": [-1.2576299, 36.869484]
    }, {
      "shop_id": "598f60f4-eae4-4280-affa-1b69131b1e04",
      "location": [-1.2573491, 36.869476]
    }, {
      "shop_id": "572b437f-a729-463e-92be-50ff9e84e0d5",
      "location": [-1.2569402, 36.871788]
    }, {
      "shop_id": "d49d7c72-9280-4afc-b1f7-610a8010360c",
      "location": [-1.2569118, 36.872093]
    }, {
      "shop_id": "a5c3ca68-6167-4e2b-a922-dd33dedce546",
      "location": [-1.2563266, 36.872]
    }, {
      "shop_id": "7ebd9def-845e-4c64-802c-8ade043c09a5",
      "location": [-1.2572958, 36.873142]
    }, {
      "shop_id": "48b45e1e-0eaa-4cb8-904a-4099e6257e6f",
      "location": [-1.2575276, 36.872593]
    }, {
      "shop_id": "fe4425e8-b07e-4210-8c2d-778f0364c04d",
      "location": [-1.2612911, 36.874496]
    }, {
      "shop_id": "119699ea-ca5e-4b7d-8105-802f070682d5",
      "location": [-1.2608823, 36.87516]
    }, {
      "shop_id": "b1bb7e7a-1300-49a7-836e-f216fa088198",
      "location": [-1.2607332, 36.875145]
    }, {
      "shop_id": "fd3fb24b-2c91-41c5-9095-a23feb53dceb",
      "location": [-1.260118, 36.87545]
    }, {
      "shop_id": "62cbb2d0-ed92-4a2e-a2de-46f9f3cb24db",
      "location": [-1.2588181, 36.877937]
    }, {
      "shop_id": "7e4ac011-ffce-40b8-8407-8e262488d84d",
      "location": [-1.2592978, 36.877903]
    }, {
      "shop_id": "062b8195-b594-4ba4-a163-229a99ee621c",
      "location": [-1.25958645343781, 36.8778648376465]
    }, {
      "shop_id": "c3bca20c-bd73-45a3-bb98-1fb455a72c19",
      "location": [-1.2612889, 36.87792]
    }, {
      "shop_id": "f83a1f81-dc04-4fc8-94ac-ceb65cb698d7",
      "location": [-1.2612807, 36.87875]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ngoingwa",
    "route_id": "40e76b4d-3360-4e12-9dd4-718796bcfc3b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 358,
      "cache_hit": "83%"
    },
    "distance": "42.45km",
    "path": "l~mEa_raFilBrpLmDdUi@dMbAlPn[jr@j@v@uuCvbD`aBetCRgCrA_@lAeG~AmBIeKhDsI_AaE~Dor@rNus@n}D~p@ZKeDeGlDfB}HbHqOgMmEbCES_CnAEkCyCtEeDi@tA}GyDkJKzNnDuGnBgDx@aDrBkC|BjIa@AlB{D|@iBHk@rHw@VcDaD}BGaDcOg\\kp@qyJ",
    "shops": [{
      "shop_id": "5f9b8b96-4794-4e80-b50b-4051f380f1cd",
      "location": [-1.0422574, 37.05575]
    }, {
      "shop_id": "c1209077-62c1-41bb-bbcc-b3d9c11b4012",
      "location": [-1.041393, 37.052197]
    }, {
      "shop_id": "cf9caf8f-894b-4f7e-bda1-b076cb1b4c6f",
      "location": [-1.04118180274963, 37.0499305725098]
    }, {
      "shop_id": "820e4530-ec1d-446e-aaf3-3339071c45c5",
      "location": [-1.0415186882019, 37.0471420288086]
    }, {
      "shop_id": "0e337b35-ccde-46df-a8b4-b98ce770f471",
      "location": [-1.04607713222504, 37.0389213562012]
    }, {
      "shop_id": "8072ff82-56bd-427d-8a25-4e1660011e27",
      "location": [-1.0462976, 37.038635]
    }, {
      "shop_id": "e64e9bce-9e38-47ec-b73a-70da69e57e78",
      "location": [-1.0221876, 37.01244]
    }, {
      "shop_id": "204c1dd1-e9c5-4377-9f05-200b33d1b016",
      "location": [-1.0378784, 37.03631]
    }, {
      "shop_id": "3a8d29bc-fa28-449e-a6ea-26d23af17ef0",
      "location": [-1.0379755, 37.036987]
    }, {
      "shop_id": "468ed76a-d782-4a51-b94d-70a66d91f0b3",
      "location": [-1.0384023, 37.03715]
    }, {
      "shop_id": "baf63517-7740-4c32-be56-c21b0979019a",
      "location": [-1.0387948, 37.03846]
    }, {
      "shop_id": "0eab50df-389e-463e-b56a-e05102959d0d",
      "location": [-1.03926885128021, 37.039005279541]
    }, {
      "shop_id": "eb42dce6-7bfc-4616-8194-64a65f02411d",
      "location": [-1.0392205, 37.04096]
    }, {
      "shop_id": "0dcb93cb-1d3f-4626-8e5d-fa90b9f5320f",
      "location": [-1.0400666, 37.042656]
    }, {
      "shop_id": "4c791670-4272-4063-94b8-7c9f6afe2dfc",
      "location": [-1.0397522, 37.043633]
    }, {
      "shop_id": "84acdb1d-6161-462a-ba55-5038d6048ae0",
      "location": [-1.0407112, 37.051872]
    }, {
      "shop_id": "a8d1b02a-1719-46b5-bf77-0c83b4ad8688",
      "location": [-1.0432107, 37.060295]
    }, {
      "shop_id": "3adcd204-6c7b-4214-a80a-355e66abcd67",
      "location": [-1.0736891, 37.052303]
    }, {
      "shop_id": "de907683-95cd-4754-8be8-4be0d25331d1",
      "location": [-1.0738258, 37.052357]
    }, {
      "shop_id": "ea767846-e457-4cf3-b730-8226bb4ca041",
      "location": [-1.072998, 37.053665]
    }, {
      "shop_id": "b2b0eef7-dc5a-4591-b911-6a335dddb696",
      "location": [-1.0738736, 37.05315]
    }, {
      "shop_id": "2ddf0661-e99d-4041-a9ed-35e8a919f27d",
      "location": [-1.0722753, 37.05169]
    }, {
      "shop_id": "fd824018-bf37-400d-81cc-1fc56fb65652",
      "location": [-1.0696336, 37.053967]
    }, {
      "shop_id": "21326e26-2251-43c5-8de7-200cbdc92d9b",
      "location": [-1.068596, 37.05331]
    }, {
      "shop_id": "c0658183-30b0-46dc-9c41-0aaef2e18f80",
      "location": [-1.0685652, 37.053413]
    }, {
      "shop_id": "084d7463-5ee8-482d-8751-3413b167034c",
      "location": [-1.0679332, 37.05301]
    }, {
      "shop_id": "43c49d27-1ead-486e-b238-520d2fcf32fc",
      "location": [-1.0679001, 37.05371]
    }, {
      "shop_id": "47ae129e-d362-4791-93cc-2d2963324d3d",
      "location": [-1.067132, 37.05264]
    }, {
      "shop_id": "a6992a29-533d-4b18-93a3-829e5a61bae6",
      "location": [-1.0663024, 37.052853]
    }, {
      "shop_id": "71484abe-f2e2-439a-bbf3-ed662f4313c8",
      "location": [-1.0667297, 37.054276]
    }, {
      "shop_id": "ef0d2343-8e19-49cd-9507-8fefd0dc3c14",
      "location": [-1.0658025, 37.0561]
    }, {
      "shop_id": "99b92dee-c86a-4c3d-b0b5-2edd443a4b70",
      "location": [-1.0657411, 37.053562]
    }, {
      "shop_id": "1e2398dd-d8a1-4d5e-9ebf-da2a829ecb52",
      "location": [-1.0666237, 37.05495]
    }, {
      "shop_id": "0b197f28-b5e7-4dd8-8021-dd8684d8ba25",
      "location": [-1.0671784, 37.055794]
    }, {
      "shop_id": "ecae34f8-86d8-4f83-ab35-53bdd90b2e8b",
      "location": [-1.0674677, 37.056602]
    }, {
      "shop_id": "d38268ec-4845-476a-9cd4-9749acde2c34",
      "location": [-1.0680536, 37.057297]
    }, {
      "shop_id": "cf296387-2e24-469f-a403-fb8e7d07f2a1",
      "location": [-1.0686753, 37.05564]
    }, {
      "shop_id": "1d68215b-bc45-4187-81aa-ed3c6aa6dd4b",
      "location": [-1.068506, 37.05565]
    }, {
      "shop_id": "d691443d-2cae-4ac8-aee1-73af222da62f",
      "location": [-1.0690585, 37.056587]
    }, {
      "shop_id": "999cea36-4d2a-41b2-bade-7eab50c71802",
      "location": [-1.0693676, 37.057117]
    }, {
      "shop_id": "ad847f08-a9c6-4349-97fb-3edd2912ea93",
      "location": [-1.0694163, 37.057335]
    }, {
      "shop_id": "c3b8895b-a5d7-46f4-b64a-9920ca994c3d",
      "location": [-1.0709628, 37.05762]
    }, {
      "shop_id": "638107c6-007e-4614-9f26-b74a25be6f41",
      "location": [-1.0710766, 37.05844]
    }, {
      "shop_id": "a24f147b-3725-4b2d-bf48-1ec62242d250",
      "location": [-1.0702701, 37.059074]
    }, {
      "shop_id": "417ad209-b97a-4ebd-8c05-696a046d623a",
      "location": [-1.0702269, 37.059875]
    }, {
      "shop_id": "ba823af6-5de7-4108-ba99-a87a8bb5c148",
      "location": [-1.0676502, 37.064556]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Pangani/Ngara",
    "route_id": "6f4d202c-3421-483e-9b0b-53f59c5c5e2a",
    "matrix_info": {
      "DistanceMatrixAPI requests": 250,
      "cache_hit": "81%"
    },
    "distance": "42.23km",
    "path": "dsfG_se`Fe}L|fLud@cSmGOcOu`@wB|A`Aj@wA~@[oDR}@CMrCsHsE_AhAyISToIQc@hCCvI[tBo@lAc@j@@ZsAc@Iq@u@yC~FdM\\ZT_AsFh@nI_E|@kEQ^nBxHInBcBbDZXD@~[bpBjhNcpN",
    "shops": [{
      "shop_id": "ef2c1bfc-ce4c-41a8-ac9d-d3b008362c16",
      "location": [-1.2783971, 36.830086]
    }, {
      "shop_id": "e569ff14-8db9-4cb6-a7de-53a42a041e59",
      "location": [-1.2723744, 36.833305]
    }, {
      "shop_id": "39281809-b437-4d6d-adf9-041433661be8",
      "location": [-1.2710232, 36.83339]
    }, {
      "shop_id": "6af28fb2-7158-4145-a3bf-02e7b39a9e2c",
      "location": [-1.2684375, 36.838776]
    }, {
      "shop_id": "c5b5f2c4-b6e2-49cf-aa48-25cca23922f4",
      "location": [-1.2678391, 36.838314]
    }, {
      "shop_id": "117ecaf4-2bd5-4e8c-9100-346cea1188a6",
      "location": [-1.2681657, 36.838093]
    }, {
      "shop_id": "78ba005f-75aa-4d3b-bb9b-1e06c9e2abe7",
      "location": [-1.2677273, 36.837772]
    }, {
      "shop_id": "ed111e61-e4cf-4d28-862c-507a16e12354",
      "location": [-1.2675924, 36.83865]
    }, {
      "shop_id": "8d9586c6-f75b-48a5-87c6-55dc72bd59f5",
      "location": [-1.2676942, 36.838955]
    }, {
      "shop_id": "c3d170cb-e863-4db1-98cf-1ca80fcca130",
      "location": [-1.267674, 36.839027]
    }, {
      "shop_id": "63a3e09f-ef59-4f2a-91ec-6eaecbfc2ecc",
      "location": [-1.268409, 36.840572]
    }, {
      "shop_id": "68fb1412-71d6-4985-bc89-0265b3d59330",
      "location": [-1.267353, 36.840885]
    }, {
      "shop_id": "c8dd33bd-646e-4eed-8cf2-233c8691ef5b",
      "location": [-1.2677213, 36.84262]
    }, {
      "shop_id": "e3969983-7c38-47db-8c3e-f5575d4307a7",
      "location": [-1.2676151, 36.84251]
    }, {
      "shop_id": "ffbe6753-8042-4090-b34c-a4820eec4031",
      "location": [-1.2659367, 36.842598]
    }, {
      "shop_id": "1c5b88fc-f89c-4c4b-ab6d-6bcb5ba9e2d2",
      "location": [-1.2657562, 36.84191]
    }, {
      "shop_id": "25768bb0-51f9-4e02-a1f0-a75c660f5721",
      "location": [-1.2657363, 36.84019]
    }, {
      "shop_id": "1ca0792a-13d4-4ef2-a103-2b88233c7313",
      "location": [-1.2655979, 36.839596]
    }, {
      "shop_id": "3cd630d2-58e5-4280-981a-2f4cafe2490c",
      "location": [-1.2653602, 36.83921]
    }, {
      "shop_id": "f353f277-ba10-42b0-8f5b-a36930a6567d",
      "location": [-1.2651818, 36.838985]
    }, {
      "shop_id": "f90e484a-a18a-4380-b999-e66b0c2e4006",
      "location": [-1.2651876, 36.83885]
    }, {
      "shop_id": "c407be38-4ccf-4c11-bb3f-7ea5129dde68",
      "location": [-1.264768242836, 36.8390312194824]
    }, {
      "shop_id": "c95c5f06-dc95-47bc-984a-2b6425a37870",
      "location": [-1.2647208, 36.839275]
    }, {
      "shop_id": "17cbfd79-c200-4dac-b282-91b8e9b526ca",
      "location": [-1.2644496, 36.840046]
    }, {
      "shop_id": "34ae80c9-ef37-4ced-8f4d-e65bd2933540",
      "location": [-1.2657253, 36.837784]
    }, {
      "shop_id": "954e3822-c928-41f4-9c35-71b262fe120b",
      "location": [-1.265875, 36.83764]
    }, {
      "shop_id": "c4c0783e-6ac6-46e5-a45b-86b2c3dedcd5",
      "location": [-1.2659864, 36.83796]
    }, {
      "shop_id": "69e17b50-fa87-4dae-8741-b3efc26316bb",
      "location": [-1.26476633548737, 36.8377494812012]
    }, {
      "shop_id": "be465224-83d7-4124-bcf7-fa063f51c302",
      "location": [-1.2664521, 36.83871]
    }, {
      "shop_id": "1990fb17-c201-4425-b36b-fcf441e46a10",
      "location": [-1.266755, 36.839733]
    }, {
      "shop_id": "b2eef9fd-27fc-456b-87b4-652cc5775da1",
      "location": [-1.2666696, 36.839565]
    }, {
      "shop_id": "a05a0744-1188-495a-a922-3d69f8a8fd22",
      "location": [-1.26723384857178, 36.8379974365234]
    }, {
      "shop_id": "aa7bcf1d-023d-4982-98d2-0553272f0e22",
      "location": [-1.2671809, 36.837437]
    }, {
      "shop_id": "111fc94b-5f1c-4f0e-bbde-b12d711dc290",
      "location": [-1.2666848897934, 36.8366241455078]
    }, {
      "shop_id": "f27b654d-01a1-4e93-8234-1f2431963d38",
      "location": [-1.2668182, 36.836487]
    }, {
      "shop_id": "dcb58276-e02f-44b6-8296-e1e6a3757f18",
      "location": [-1.26685082912445, 36.8364791870117]
    }, {
      "shop_id": "1ee663c6-7d81-4248-9d62-d607d3d37d5c",
      "location": [-1.2714947, 36.81838]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ndonyo",
    "route_id": "ca400c53-ca8b-4d8e-bbc1-d14a832a02a7",
    "matrix_info": {
      "DistanceMatrixAPI requests": 425,
      "cache_hit": "82%"
    },
    "distance": "52.26km",
    "path": "`z|Fedx_FaM|nMerAtzBwFvPcXcVzCjMeJdv@pFv@ErCLfFXjKEd@xAEcDpRzBl\\^JI^|A`D?AD?ND}ShXdUiK^A|Fhp@fCdNcA~HsEjf@|FdE`H|Gaq@pnBpfDs[Zn@cAyBmxAi`A?AE@ACM@rAeEaNtH`EorAaVgpAb@k@_BqNmHfDs@KnEabAlGsMpEk_@d}Ae{Q",
    "shops": [{
      "shop_id": "9675b298-87e4-4c20-842e-dad04e716fb7",
      "location": [-1.29744291305542, 36.7547569274902]
    }, {
      "shop_id": "58f82cd8-0ba2-42e9-9b59-360dddb2d6b1",
      "location": [-1.2841281, 36.734974]
    }, {
      "shop_id": "dac43536-48fe-40a4-b70d-5b58040e62d6",
      "location": [-1.2828933, 36.732132]
    }, {
      "shop_id": "092c9286-90d1-4360-8585-c0726bcf3b75",
      "location": [-1.2788733, 36.735832]
    }, {
      "shop_id": "e0da70d4-e30d-480a-a1e4-e1d00922872d",
      "location": [-1.2796463, 36.73353]
    }, {
      "shop_id": "e1ad7ddb-5823-4d37-923f-075d7f50b1cd",
      "location": [-1.277863, 36.724697]
    }, {
      "shop_id": "fa236438-7059-4db3-a908-498890319584",
      "location": [-1.2790726, 36.724415]
    }, {
      "shop_id": "42caecc5-5853-4cf6-a38c-61238447fa20",
      "location": [-1.2790387, 36.72368]
    }, {
      "shop_id": "0ba9a7f0-21a9-4634-acf9-f423fd1ce83c",
      "location": [-1.2791137, 36.722523]
    }, {
      "shop_id": "be02ba35-5f81-4926-b240-92bbd9efb900",
      "location": [-1.2792375, 36.72054]
    }, {
      "shop_id": "9208c7ca-ed4f-433c-8b1e-9026569fa74f",
      "location": [-1.2792084, 36.720345]
    }, {
      "shop_id": "3dd30994-14a6-415a-9435-5734b0847dd1",
      "location": [-1.2796572, 36.72038]
    }, {
      "shop_id": "3c015dae-c484-4cc5-a776-c82936a6d6b4",
      "location": [-1.2788368, 36.71725]
    }, {
      "shop_id": "80c2fc96-bbe8-46c7-a795-effb6e694a8e",
      "location": [-1.2794625, 36.71254]
    }, {
      "shop_id": "60c5be93-e79b-4b7f-86bf-37a6fb61730b",
      "location": [-1.2796162, 36.712475]
    }, {
      "shop_id": "dd99e1b6-9f31-4dc2-8acb-900c406c7b20",
      "location": [-1.2795694, 36.712322]
    }, {
      "shop_id": "d5e0d788-e1c4-438d-96ef-799bd23c18b2",
      "location": [-1.28003859519958, 36.7115058898926]
    }, {
      "shop_id": "3b1aba43-b9d0-4e56-9096-03132ba31e91",
      "location": [-1.28003859519958, 36.7115211486816]
    }, {
      "shop_id": "40bd049f-8a06-4507-b810-817563666af8",
      "location": [-1.28007078170776, 36.7115249633789]
    }, {
      "shop_id": "f92d9cfa-0357-4ef3-aea0-5056aa88abf5",
      "location": [-1.28014624118805, 36.7114868164062]
    }, {
      "shop_id": "94481af9-ebce-4e68-9dc1-68984539df7b",
      "location": [-1.2768006, 36.707443]
    }, {
      "shop_id": "980bb5f1-5b52-4617-9625-d60591b038ae",
      "location": [-1.2803525, 36.70941]
    }, {
      "shop_id": "a3be57cf-ea44-4120-811f-69ec4fc433e1",
      "location": [-1.2805077, 36.70942]
    }, {
      "shop_id": "5ce104dc-03f1-4363-bb73-96e9e2bdc664",
      "location": [-1.2817762, 36.701527]
    }, {
      "shop_id": "02e13144-cc99-4c47-88b8-89660bdb35ae",
      "location": [-1.2824615, 36.699104]
    }, {
      "shop_id": "e2ab829a-be9d-4842-a239-aa71dc446233",
      "location": [-1.2821245, 36.6975]
    }, {
      "shop_id": "723ffaac-27e4-4c52-8eaa-35a7b18e0915",
      "location": [-1.2810594, 36.691196]
    }, {
      "shop_id": "53cb9d10-178b-400f-8769-75d471251d19",
      "location": [-1.2823273, 36.69021]
    }, {
      "shop_id": "50977f62-68e7-4b4d-b5e1-3220c50e5ac4",
      "location": [-1.2837818, 36.68878]
    }, {
      "shop_id": "9e896138-3f92-4076-831a-5aab94bf22ab",
      "location": [-1.2757741, 36.67093]
    }, {
      "shop_id": "52fb622b-920a-4256-82b8-f7c8265bc653",
      "location": [-1.3025792, 36.67551]
    }, {
      "shop_id": "7735e2f0-107e-4641-bb88-ab7b250a11e4",
      "location": [-1.3027171, 36.67527]
    }, {
      "shop_id": "1087d051-beb3-4746-ba34-2e4bf03cc838",
      "location": [-1.30237948894501, 36.6758804321289]
    }, {
      "shop_id": "b6f6f300-5dde-4a09-890a-e45dcb4bfac2",
      "location": [-1.2880741, 36.686333]
    }, {
      "shop_id": "122252f9-52c0-4d6d-891b-e957d8a63198",
      "location": [-1.2880737, 36.686344]
    }, {
      "shop_id": "6104363e-6891-417e-9a16-62ab2fb2aba9",
      "location": [-1.288037, 36.686333]
    }, {
      "shop_id": "332d0d05-06f9-4f94-8d69-88bbddf3429f",
      "location": [-1.2880303, 36.686348]
    }, {
      "shop_id": "dc4b7974-9cb3-44a0-bb92-e056d55c1391",
      "location": [-1.2879559, 36.686337]
    }, {
      "shop_id": "0f3090e0-e105-46a7-9fe7-c973bcc31d6c",
      "location": [-1.2883822, 36.68733]
    }, {
      "shop_id": "fcc199e0-9b16-4c8b-b68e-a72dc4ef33f6",
      "location": [-1.285966, 36.685776]
    }, {
      "shop_id": "34cc858b-c8f9-4186-bbad-d772f836c8c5",
      "location": [-1.2869387, 36.699142]
    }, {
      "shop_id": "17e14da3-11a4-42d7-8bce-31169bc6fe74",
      "location": [-1.2832458, 36.71214]
    }, {
      "shop_id": "7dcab620-1627-4e33-b5d2-8cc6f67870db",
      "location": [-1.2834306, 36.712357]
    }, {
      "shop_id": "860fa8f6-98e4-46a0-bf3c-46bc46bfd7de",
      "location": [-1.2829481, 36.714848]
    }, {
      "shop_id": "9d107159-ac94-4289-8596-9c78b9efc077",
      "location": [-1.2814422, 36.71401]
    }, {
      "shop_id": "d4d98cdc-341b-4deb-91a1-87d1ed7314a7",
      "location": [-1.2811849, 36.714066]
    }, {
      "shop_id": "7e6c565f-8616-4873-8976-0e0ed0f63a66",
      "location": [-1.2822182, 36.724804]
    }, {
      "shop_id": "b912572a-fef8-4be6-8032-a92c7d29b18b",
      "location": [-1.2835681, 36.72714]
    }, {
      "shop_id": "d6c7139e-100c-4233-8c07-aa82130a00a2",
      "location": [-1.2846242, 36.73232]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Matasia",
    "route_id": "1c9cfc41-e3e9-4d1f-b574-c5eb9ee7c123",
    "matrix_info": {
      "DistanceMatrixAPI requests": 719,
      "cache_hit": "76%"
    },
    "distance": "43.52km",
    "path": "zipGwtf_F`aD~}GjYlo@iGyCJCTKBGch@dFoMIsIcCq{@aJqQHwf@nE{E|AM~@wA\\GAGGIF{UhISRyCzCqC|Bc@u@qH~Dgx@|`@aC_@_Bn@k@Fi@\\ih@z\\}n@pzAkAwCBc@aCb@oLtMsWrKsaAlh@roBmk@gPw@_@Kg@i@a@]EEG?C@AHGS??M?Xe@`pA{a@rr@}eBd@OOkGbdAu`At_BzEe`AkbI",
    "shops": [{
      "shop_id": "85df9825-32a1-4bd7-8a74-93995c96f71c",
      "location": [-1.4254276, 36.693558]
    }, {
      "shop_id": "637c5289-2772-43cc-9abb-5dbbfeb2d459",
      "location": [-1.4296492, 36.68581]
    }, {
      "shop_id": "6c539ab2-cfdb-4da6-baed-1d64563f04ba",
      "location": [-1.428324, 36.686584]
    }, {
      "shop_id": "ec0eb70c-27d7-44d0-a9a5-7e5ccb043be8",
      "location": [-1.4283834, 36.686604]
    }, {
      "shop_id": "e72f691b-cc69-4668-9a1e-334de11d3689",
      "location": [-1.42848539352417, 36.6866645812988]
    }, {
      "shop_id": "2c766f0d-7587-4121-a86d-2f3e99b93b85",
      "location": [-1.4285053, 36.686695]
    }, {
      "shop_id": "13b8cb7e-d47c-40b1-b628-e10436cd0130",
      "location": [-1.4219286, 36.68555]
    }, {
      "shop_id": "5b4bc9f3-af21-4742-aa53-85ae0fe52db5",
      "location": [-1.419611, 36.685596]
    }, {
      "shop_id": "211f786f-dc5f-464c-a755-21d21a913d2b",
      "location": [-1.4179103, 36.686256]
    }, {
      "shop_id": "e3739814-a177-459d-ba9b-6b15a5a5a64c",
      "location": [-1.4082154, 36.688034]
    }, {
      "shop_id": "d3d32b4c-f883-4ae3-a50c-20232d2a1ed8",
      "location": [-1.4052489, 36.68798]
    }, {
      "shop_id": "945b2ee5-5759-47da-8790-a8467e2ece29",
      "location": [-1.3988925, 36.686943]
    }, {
      "shop_id": "419dc4fd-0806-4068-8229-82b864bf5c32",
      "location": [-1.39778685569763, 36.6864738464355]
    }, {
      "shop_id": "d1aac3e2-90fa-491d-839a-f2c22500afaf",
      "location": [-1.3977174, 36.686146]
    }, {
      "shop_id": "308869a8-d21e-478a-a172-4f093f8418c1",
      "location": [-1.39728379249573, 36.6859970092773]
    }, {
      "shop_id": "16eb71b7-7ecf-41d5-a273-cd86d6f206d3",
      "location": [-1.3972363, 36.68601]
    }, {
      "shop_id": "759eb35a-f5d6-440a-ba3b-71f0a416e59e",
      "location": [-1.3971996, 36.68605]
    }, {
      "shop_id": "7f5af159-f708-4ac9-92c9-25a95e801718",
      "location": [-1.3971467, 36.68601]
    }, {
      "shop_id": "132fe21b-817e-4230-977c-a49e60457e8f",
      "location": [-1.3934945, 36.684357]
    }, {
      "shop_id": "2d6727ff-de14-4178-bcb3-e9477de085e8",
      "location": [-1.393394, 36.684258]
    }, {
      "shop_id": "b0bdb91f-0b07-46b0-aca2-5fc2e90ecb5c",
      "location": [-1.3926157, 36.683483]
    }, {
      "shop_id": "b9a5ab93-7b12-4671-9183-e20fb1dbc89d",
      "location": [-1.3918864, 36.68285]
    }, {
      "shop_id": "ffbfbbaa-8fb2-498a-baa2-7d8f6d4f646b",
      "location": [-1.3917094, 36.683125]
    }, {
      "shop_id": "765c6ba5-cac9-4021-b6eb-1c71aff73bea",
      "location": [-1.3901786, 36.682163]
    }, {
      "shop_id": "19f22dd7-6dd2-4e85-831c-0c4e3e9b966b",
      "location": [-1.3810215, 36.676727]
    }, {
      "shop_id": "3265c7a4-748d-4b16-aaf1-51ff799812f5",
      "location": [-1.380366, 36.676888]
    }, {
      "shop_id": "e84ec45e-4080-4847-9480-6ebc27a179f7",
      "location": [-1.3798852, 36.676647]
    }, {
      "shop_id": "b14a8b42-099b-4a69-974d-10d2460396a8",
      "location": [-1.3796669, 36.67661]
    }, {
      "shop_id": "039a596b-a9d3-4b09-9f49-3ea7512aaa05",
      "location": [-1.3794647, 36.67646]
    }, {
      "shop_id": "6a5281b7-e644-4756-9b4e-8af8f63a8e05",
      "location": [-1.37284648418427, 36.6716804504395]
    }, {
      "shop_id": "994852e3-7b5c-4aa1-97bd-67eca4ebfc63",
      "location": [-1.3651752, 36.65703]
    }, {
      "shop_id": "9c12247b-24ad-4095-ab33-f7b38c202b8d",
      "location": [-1.3647956, 36.65779]
    }, {
      "shop_id": "e3b1c2a5-cfab-47f5-baf9-99e83320f16e",
      "location": [-1.3648176, 36.65797]
    }, {
      "shop_id": "87e25075-1478-453c-8378-4b61e4b76e37",
      "location": [-1.3641675, 36.657787]
    }, {
      "shop_id": "b900b024-dc7c-4466-a285-f28a098a6819",
      "location": [-1.3620071, 36.65544]
    }, {
      "shop_id": "5f38febd-5fcc-4989-99b7-5232524a8d52",
      "location": [-1.3580686, 36.65342]
    }, {
      "shop_id": "29bee70f-ca7a-43fe-8c8c-de762b78fb9e",
      "location": [-1.3474094, 36.646793]
    }, {
      "shop_id": "1b6245ac-0fbd-4843-a215-45c8f69595e7",
      "location": [-1.3654251, 36.653904]
    }, {
      "shop_id": "37bf4479-b246-4eec-9701-e7cd3b6656ae",
      "location": [-1.36266648769379, 36.6541786193848]
    }, {
      "shop_id": "99c1083e-fc02-4737-92e8-469e93945560",
      "location": [-1.3625144, 36.65424]
    }, {
      "shop_id": "c9d760a1-304c-482f-ae05-ab7884261a46",
      "location": [-1.3623129, 36.654446]
    }, {
      "shop_id": "5a4432fb-4975-4509-9e45-d91362656242",
      "location": [-1.3621414, 36.654602]
    }, {
      "shop_id": "a7e13dd4-f883-4ee5-ac9b-4ed1ce731738",
      "location": [-1.3621078, 36.654625]
    }, {
      "shop_id": "088a2db9-47b0-4daf-8585-23ffbe247c0d",
      "location": [-1.3620657, 36.654625]
    }, {
      "shop_id": "96ca4f33-d516-4488-bf80-9ae3fbb0d2e3",
      "location": [-1.3620541, 36.65462]
    }, {
      "shop_id": "1385fcd3-2e0e-4172-add8-562955cb016f",
      "location": [-1.3620353937149, 36.6545715332031]
    }, {
      "shop_id": "df28b333-9c75-4bc6-bfcf-f4966c47b60b",
      "location": [-1.3619983, 36.65467]
    }, {
      "shop_id": "597d7ce2-fca9-40c4-8388-d77c84c14eed",
      "location": [-1.361996, 36.654675]
    }, {
      "shop_id": "0120a36b-cd3c-466f-a6e6-e0333e9b266e",
      "location": [-1.3619266, 36.654675]
    }, {
      "shop_id": "0ae35f86-b964-48c8-ae7c-1dc5fa6afd0d",
      "location": [-1.3620591, 36.654858]
    }, {
      "shop_id": "180f43d9-22ab-467f-8017-59fe4f66f849",
      "location": [-1.375031, 36.660435]
    }, {
      "shop_id": "9c427cc4-fa66-400c-8aca-7409b2e3b8df",
      "location": [-1.3832922, 36.67691]
    }, {
      "shop_id": "56c94707-9061-4e35-a78f-0ee95af0460b",
      "location": [-1.3834836, 36.676987]
    }, {
      "shop_id": "127fa544-21e0-43ae-88d3-712c0e93d474",
      "location": [-1.3834049, 36.67833]
    }, {
      "shop_id": "06ef786f-7a86-43db-b3f3-0ab543a01fc4",
      "location": [-1.3944644, 36.68884]
    }, {
      "shop_id": "1486963f-9aae-4601-af0a-3637336f08a5",
      "location": [-1.4099323, 36.68774]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ruiru/Kimbo",
    "route_id": "21bf95d8-275d-4a56-904d-9864b87bed0c",
    "matrix_info": {
      "DistanceMatrixAPI requests": 141,
      "cache_hit": "74%"
    },
    "distance": "69.12km",
    "path": "l~mEa_raFtjOzs\\b@nSoDvInx@`pFnGzD_E{@mB~EMkP@gCL_@Gu}@tV_^{ImVhIk`@bNiLbCuCxFlGwA_Ap[nHpl@ijBgUd^gVqLulBiyBa}O_lY",
    "shops": [{
      "shop_id": "d52e6660-a6c9-408e-941e-0e005b6e020f",
      "location": [-1.1435378, 36.97331]
    }, {
      "shop_id": "691b9bac-4ef7-4750-8a7e-3f7496061305",
      "location": [-1.143721, 36.970028]
    }, {
      "shop_id": "7dedaf90-374f-4ac6-8a25-a3a8d630c43a",
      "location": [-1.1428411, 36.968315]
    }, {
      "shop_id": "8a154747-e51f-4853-b761-92bc33dd5050",
      "location": [-1.1520398, 36.929745]
    }, {
      "shop_id": "9bd68af5-0cff-47e9-a410-2ef2a0846d58",
      "location": [-1.1533996, 36.928802]
    }, {
      "shop_id": "b5f2b575-d52b-4d8b-b86a-a6d8f30cee28",
      "location": [-1.1524374, 36.9291]
    }, {
      "shop_id": "2d7ee135-f2bc-4635-967f-c47691fb1700",
      "location": [-1.1518866, 36.927975]
    }, {
      "shop_id": "304fdcc3-aa8d-4915-adc5-367bfb6c9f2c",
      "location": [-1.1518159, 36.930763]
    }, {
      "shop_id": "dfd7f43c-f8fe-4be6-9049-9a69b7d07d45",
      "location": [-1.15183365345001, 36.9314422607422]
    }, {
      "shop_id": "2b88716c-41c8-4560-8846-44df0f3ef3f5",
      "location": [-1.1518953, 36.931595]
    }, {
      "shop_id": "1a4695c5-24cc-4f16-8c2d-7bba49096325",
      "location": [-1.1518558, 36.94163]
    }, {
      "shop_id": "ee97ad1d-3680-48b5-ba04-10b474c1a084",
      "location": [-1.155651, 36.946587]
    }, {
      "shop_id": "68deb714-4c01-41a0-ae79-f3e0c9308213",
      "location": [-1.1539145, 36.950344]
    }, {
      "shop_id": "7d34f364-3b50-47ce-a5fc-22eb44f96774",
      "location": [-1.1555597, 36.95568]
    }, {
      "shop_id": "861cf9eb-4b0d-42e2-b1c3-0811fe13e485",
      "location": [-1.1579759, 36.957806]
    }, {
      "shop_id": "46f371cd-356a-4a86-9efa-cf1aaa5e61c3",
      "location": [-1.1586447, 36.958557]
    }, {
      "shop_id": "5320d8f8-2d2c-4185-80ad-3eab1e1ae083",
      "location": [-1.1598908, 36.957214]
    }, {
      "shop_id": "5463a6b7-f40b-4eba-b9b6-a8ee316ff23e",
      "location": [-1.1594522, 36.95753]
    }, {
      "shop_id": "adc4fc42-4e89-4c4a-a046-7dadaac0e397",
      "location": [-1.164021, 36.956013]
    }, {
      "shop_id": "e5368945-3322-432c-aaf1-b387f8b9b823",
      "location": [-1.1713058, 36.97318]
    }, {
      "shop_id": "812340b6-282d-4038-9c81-31331d830320",
      "location": [-1.16774606704712, 36.968189239502]
    }, {
      "shop_id": "dec07f00-8d1e-4bb0-a6b2-939dc46d026c",
      "location": [-1.1640273, 36.970364]
    }, {
      "shop_id": "4a858bf5-e1c5-436e-9051-70d2ebb9a276",
      "location": [-1.1464815, 36.989933]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Staff Route",
    "route_id": "88f615ac-26fc-4090-8662-e4c7df779023",
    "matrix_info": {
      "DistanceMatrixAPI requests": 33,
      "cache_hit": "78%"
    },
    "distance": "38.26km",
    "path": "dsfG_se`FeEYGE@?EJu@m@MAZYbHaI_sN~oR??[jOe@BAGCM|sNyrR",
    "shops": [{
      "shop_id": "0ffa74b7-0cd6-4504-9b63-08f56397d91f",
      "location": [-1.3488009, 36.89805]
    }, {
      "shop_id": "e61862a0-4c6e-4bcf-8dd3-ea089303c281",
      "location": [-1.3487633, 36.89808]
    }, {
      "shop_id": "b1bb32bd-b172-476e-b506-88693ae54f62",
      "location": [-1.3487653, 36.898083]
    }, {
      "shop_id": "db017e66-8750-4f54-9887-99ee87383bd1",
      "location": [-1.3487414, 36.898018]
    }, {
      "shop_id": "63977a1f-a52b-49d3-8e1e-5ee94ed3af94",
      "location": [-1.34846937656403, 36.898250579834]
    }, {
      "shop_id": "dbb6a5f4-74f2-46ea-a3b6-69c26f9d74fd",
      "location": [-1.34839534759521, 36.8982582092285]
    }, {
      "shop_id": "708551c4-5aaa-4c01-acd7-3ef85a5fa36d",
      "location": [-1.34854328632355, 36.8983917236328]
    }, {
      "shop_id": "43729cf6-1ee5-45cc-9709-244ba399d808",
      "location": [-1.35, 36.9]
    }, {
      "shop_id": "4c2de0d7-f190-457f-bb6e-06fb02741503",
      "location": [-1.27, 36.8]
    }, {
      "shop_id": "9eac0f45-b9ed-4381-ac7e-ff74b837450d",
      "location": [-1.27, 36.8]
    }, {
      "shop_id": "d167b81e-65e0-4015-a29f-7a2475f1aa2a",
      "location": [-1.2698559, 36.797382]
    }, {
      "shop_id": "fe54eaed-9f1e-4275-93a4-39992c818dcb",
      "location": [-1.269674, 36.79736]
    }, {
      "shop_id": "1a825e61-ece3-412d-a059-6c65923277d3",
      "location": [-1.2696579, 36.7974]
    }, {
      "shop_id": "2d60985c-dc7e-4f18-9028-8ee11d22edb0",
      "location": [-1.2696373462677, 36.7974662780762]
    }],
    "flagged_shops": [{
      "shop_id": "ccee4f68-876b-4e25-9030-89f8e007d422",
      "location": [0.0, 0.0]
    }]
  }, {
    "status": "success",
    "route_name": "Pipeline",
    "route_id": "09455434-79c9-42f5-a7a7-c87c236436d2",
    "matrix_info": {
      "DistanceMatrixAPI requests": 362,
      "cache_hit": "73%"
    },
    "distance": "28.03km",
    "path": "dsfG_se`FccD{FmNh_@Lx@~CcEyLvG_KjPlIoDih@dQ{@z@yKwFXzGxDeFD?HGd@Y|Bu@dCk@lFkEIAt@_@GS|Al@^g@`QsM~GsBCgBvFeFF_A?y@]Kc@j@zGyB@AFf@|AtB\\}K?OriDb@",
    "shops": [{
      "shop_id": "4d116d57-6429-4cd8-8d59-1ff9d20969de",
      "location": [-1.3235266, 36.89918]
    }, {
      "shop_id": "3494e3f2-a4aa-4474-a166-2e8910645069",
      "location": [-1.3210574, 36.89401]
    }, {
      "shop_id": "c1f31024-fbeb-4975-95d6-fb28e9d4f193",
      "location": [-1.3211292, 36.893715]
    }, {
      "shop_id": "ba56dff0-0aa4-4698-8255-2264ba53618f",
      "location": [-1.321925, 36.894695]
    }, {
      "shop_id": "de99b707-a34e-4151-8e93-8c95e05dcc68",
      "location": [-1.3197232, 36.8933]
    }, {
      "shop_id": "57ec81e4-12f8-4ca2-b857-1fdc334e97bf",
      "location": [-1.3178025, 36.89052]
    }, {
      "shop_id": "ab99ac1b-867b-4810-acd4-c273e65bf1e8",
      "location": [-1.3194656, 36.891403]
    }, {
      "shop_id": "e640cf00-a871-4121-a54f-6ebfc2aa0e38",
      "location": [-1.3128606, 36.88849]
    }, {
      "shop_id": "56e30df7-50d9-4cca-b5e9-840ffa608fbb",
      "location": [-1.3125612, 36.88819]
    }, {
      "shop_id": "50ff384f-0836-4c84-8514-1cba0abd0af5",
      "location": [-1.3105141, 36.889427]
    }, {
      "shop_id": "212a0c3a-f57d-47d0-b314-61f1869d2267",
      "location": [-1.310644, 36.88801]
    }, {
      "shop_id": "a8767bbf-a8fa-4d82-9f32-e128052cdb47",
      "location": [-1.3115686, 36.889164]
    }, {
      "shop_id": "99067954-5cd7-4cdd-a52d-eb342fb9b0df",
      "location": [-1.311595, 36.88916]
    }, {
      "shop_id": "5accea4d-340a-477b-85bf-554307806b5b",
      "location": [-1.3116527, 36.8892]
    }, {
      "shop_id": "400ffa2c-6d4e-4ac9-b585-b591aeb34c2e",
      "location": [-1.3118395, 36.88933]
    }, {
      "shop_id": "84acd8ae-be77-4a47-b343-ce69ffa33925",
      "location": [-1.3124697, 36.889603]
    }, {
      "shop_id": "8f118b55-3425-4f14-9a02-35ff51974018",
      "location": [-1.3131399, 36.889824]
    }, {
      "shop_id": "ea2ea987-1b8a-45da-b74e-5c7a199322b8",
      "location": [-1.3143342, 36.890835]
    }, {
      "shop_id": "9eda676d-7c08-4175-86b2-eb4291671573",
      "location": [-1.31428, 36.89085]
    }, {
      "shop_id": "b336eee9-3218-4c20-8595-4f54a63b8627",
      "location": [-1.3145453, 36.89101]
    }, {
      "shop_id": "b4d1a696-f904-4b4d-ae4a-9319a42be65f",
      "location": [-1.3145131, 36.89111]
    }, {
      "shop_id": "de81fbc1-d7b9-4148-a9b3-1ecf838d528b",
      "location": [-1.314977, 36.890877]
    }, {
      "shop_id": "35ca03f7-c379-483a-acfe-3d02a1d48f26",
      "location": [-1.3151387, 36.891083]
    }, {
      "shop_id": "94af4a1b-f101-45aa-9983-e0041b9c7160",
      "location": [-1.3180264, 36.893417]
    }, {
      "shop_id": "ecd152c2-0bf1-49f8-a26e-760ae1217287",
      "location": [-1.3194729, 36.893997]
    }, {
      "shop_id": "6b55b755-59d8-4080-ba77-e85740e8f6d9",
      "location": [-1.3194458, 36.894524]
    }, {
      "shop_id": "0257cf4b-acd8-4646-8a6e-15cb5be45a5d",
      "location": [-1.3206916, 36.895668]
    }, {
      "shop_id": "cde8e2e9-f0b7-4b5a-968e-265c01df01e2",
      "location": [-1.3207307, 36.895992]
    }, {
      "shop_id": "9dc4f487-79ea-48b5-b587-f873c188b73f",
      "location": [-1.3207256, 36.896275]
    }, {
      "shop_id": "7e19b895-9c4d-4f44-ad42-9294039c995c",
      "location": [-1.3205793, 36.896336]
    }, {
      "shop_id": "8be3cfd1-961b-4f7e-8189-fbde5570ee48",
      "location": [-1.320401, 36.89612]
    }, {
      "shop_id": "5b0d535e-73ae-4baa-8a27-01bccdce20a5",
      "location": [-1.3218243, 36.89673]
    }, {
      "shop_id": "041eeaa5-5a73-4570-a4dd-f40cd17babd6",
      "location": [-1.3218274, 36.896744]
    }, {
      "shop_id": "b8f081fd-0457-4a8f-a6a4-0d6af951dead",
      "location": [-1.3218668, 36.896538]
    }, {
      "shop_id": "9bd760ed-729b-4583-8200-44c8d7ae592e",
      "location": [-1.3223358, 36.895954]
    }, {
      "shop_id": "a167069e-801e-4e90-b3a5-78306d8f546d",
      "location": [-1.3224884, 36.89802]
    }, {
      "shop_id": "b6686e68-c646-4dd2-8762-b8bb39ca0f67",
      "location": [-1.3224891, 36.898098]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Rongai North",
    "route_id": "781c7064-a4b3-4d12-a296-f3e71728e922",
    "matrix_info": {
      "DistanceMatrixAPI requests": 324,
      "cache_hit": "77%"
    },
    "distance": "17.75km",
    "path": "zipGwtf_FIFBJ}[qHpEu@yNw]gKma@ECQAs@BaBmJaFGiMiN`AgL^yKdAISaBbFkSFWVw@rGgENGdM`QxBpCl@fCaHbFrYeW~H`Nd@r@xNuFyYlXtCxHI`FiAxJzAb@kDmS}IpIzd@|jEc_@_s@~Vmu@",
    "shops": [{
      "shop_id": "884921dc-eeeb-4859-91a0-e432b7965359",
      "location": [-1.3994513, 36.73944]
    }, {
      "shop_id": "862cd636-6665-4011-bad0-f94a6cd76c17",
      "location": [-1.3994704, 36.739384]
    }, {
      "shop_id": "383f679d-06c2-40c7-8ce5-d5ca0ce9544b",
      "location": [-1.394835, 36.740913]
    }, {
      "shop_id": "8d2b0552-bb15-4293-85d0-0f9b2169d18b",
      "location": [-1.3958908, 36.741184]
    }, {
      "shop_id": "a643c99f-1bdc-4213-92e2-e8495c52cbc9",
      "location": [-1.3933617, 36.746098]
    }, {
      "shop_id": "a33f5aa5-8e7f-4943-b5ef-6913b7b19936",
      "location": [-1.3913985, 36.751606]
    }, {
      "shop_id": "832a433a-7fe2-4292-9363-856b7a345467",
      "location": [-1.39137065410614, 36.7516288757324]
    }, {
      "shop_id": "fc64accb-7726-4f47-838d-d85e7b097b42",
      "location": [-1.3912836, 36.751637]
    }, {
      "shop_id": "425a45eb-f0d9-485c-bc1c-70d01844c7b9",
      "location": [-1.3910158, 36.751617]
    }, {
      "shop_id": "7278b8b7-b4b6-4879-a25f-2d372cecae23",
      "location": [-1.3905305, 36.753452]
    }, {
      "shop_id": "6344cfe6-0567-4505-a022-8aa7c83a5f49",
      "location": [-1.3893983, 36.753494]
    }, {
      "shop_id": "7cbde3c3-9bb3-47f8-b46b-2eca25901675",
      "location": [-1.3871117, 36.755936]
    }, {
      "shop_id": "3f881832-c026-4c57-aeae-9868a1c7880a",
      "location": [-1.3874388, 36.758057]
    }, {
      "shop_id": "492f04f8-1082-427e-8945-74e36e435502",
      "location": [-1.3876029, 36.760105]
    }, {
      "shop_id": "a53aaada-8cee-4180-a698-9efa8b46e083",
      "location": [-1.38795304298401, 36.7601585388184]
    }, {
      "shop_id": "d3aa6ff7-593e-4854-b10f-d098953663bf",
      "location": [-1.3878547, 36.760647]
    }, {
      "shop_id": "5c185da5-da97-4c4c-9d00-11d9ac18154e",
      "location": [-1.388986, 36.763912]
    }, {
      "shop_id": "207a1760-d38e-4b56-8761-7578daa2bb48",
      "location": [-1.38902962207794, 36.764030456543]
    }, {
      "shop_id": "0c2bfaff-71b7-4b3e-8193-059dc049052b",
      "location": [-1.38914752006531, 36.7643051147461]
    }, {
      "shop_id": "dac9456d-f5e0-4f3b-97be-d9003a8a74a1",
      "location": [-1.3905326128006, 36.7653121948242]
    }, {
      "shop_id": "664b3a23-a8f2-47bf-b3c3-258884992b64",
      "location": [-1.3906132, 36.765354]
    }, {
      "shop_id": "b90c24d1-0c6b-4b2e-9f94-3f3067e07df2",
      "location": [-1.3928751, 36.762463]
    }, {
      "shop_id": "4179fe13-488c-476e-b39b-0c45b7a9ebf4",
      "location": [-1.3934878, 36.761734]
    }, {
      "shop_id": "8cfe2339-adec-4e8c-aacc-6aa1060542eb",
      "location": [-1.393715, 36.76105]
    }, {
      "shop_id": "58803867-0442-44b2-b626-967cf9560b15",
      "location": [-1.392266, 36.759907]
    }, {
      "shop_id": "f9411802-4853-41cb-a45e-2e61b80d3823",
      "location": [-1.3965299, 36.76378]
    }, {
      "shop_id": "c1087d55-60b2-4007-b498-c5fa9abac729",
      "location": [-1.398134, 36.76137]
    }, {
      "shop_id": "2cd7dd10-8fb7-448a-9aa5-dd6ae106414e",
      "location": [-1.3983235, 36.761112]
    }, {
      "shop_id": "4461386c-2c40-4676-8ba1-26b408a97755",
      "location": [-1.4008538, 36.762344]
    }, {
      "shop_id": "17a44ce1-96d0-433c-b44d-faea1fb22ac2",
      "location": [-1.39656209945679, 36.7582740783691]
    }, {
      "shop_id": "ecb3d239-d542-4105-9eab-f4d5189e1a4b",
      "location": [-1.397309, 36.756702]
    }, {
      "shop_id": "9d00782e-a254-4d9b-8bcf-1d60b30e73ae",
      "location": [-1.3972636, 36.755573]
    }, {
      "shop_id": "daa982b1-878c-4804-a474-25652de75efe",
      "location": [-1.3968948, 36.753685]
    }, {
      "shop_id": "8f425bcc-775c-4269-98dd-bd06b0fc09fb",
      "location": [-1.3973509, 36.7535]
    }, {
      "shop_id": "abce2961-11bc-4481-be09-562397c085bd",
      "location": [-1.3964934, 36.756775]
    }, {
      "shop_id": "d8ee85e4-f1e7-4e8d-b383-5375ac8ae8c0",
      "location": [-1.3947355, 36.755077]
    }, {
      "shop_id": "4a31c9b9-c005-406d-a9f0-79f43cc1f82c",
      "location": [-1.4007963, 36.722446]
    }, {
      "shop_id": "03bcbe26-1c41-48a7-b775-7c15bf0185d6",
      "location": [-1.3956621, 36.730766]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Matuu",
    "route_id": "f00f74eb-7d3f-4410-b1d3-0a032f23fff4",
    "matrix_info": {
      "DistanceMatrixAPI requests": 735,
      "cache_hit": "81%"
    },
    "distance": "124.31km",
    "path": "l~mEa_raFgPg_[i@_GBa@R{@`[eqBnMg_@iAaABYveBqxB^Wd}@i}@pp@adAt@fAT?BBBDCDs@@lfAgpAz}Equ[c@PFJSP@LoBwB?[xEmvGqE}o@GKcAeRBEi@}EQ{EEG|b@hMm@eA{BdTBfPjsE~gRsCxFaHpH}`JhsJq{Gj}LeaBjiMDDREM[a@`@GJIfAAB\\Bo@R`CeA@BBCvAg@z@Gv@g@tCoAryB_nA|AbA~D_M_aDtcX",
    "shops": [{
      "shop_id": "5c84fa52-5b7c-4cd9-bd2b-0d5b744b3d7b",
      "location": [-1.05699050426483, 37.2685317993164]
    }, {
      "shop_id": "f2e075c9-f5a8-4107-a255-4774e6a261b5",
      "location": [-1.05678, 37.26981]
    }, {
      "shop_id": "37f8a06c-5b8a-4387-96e3-efa37246dfe6",
      "location": [-1.0567961, 37.26998]
    }, {
      "shop_id": "aebd890d-a807-4dc2-b69b-a5ef519fb8e9",
      "location": [-1.0568978, 37.270283]
    }, {
      "shop_id": "d0e08372-1044-48ad-9636-faae5a8f12f1",
      "location": [-1.0613906, 37.288548]
    }, {
      "shop_id": "ec7a7e0a-06ec-4f4c-8a5b-5f9f3c07c681",
      "location": [-1.0637085, 37.293713]
    }, {
      "shop_id": "b99f3569-cc9c-484e-9229-e7fc9dd229e1",
      "location": [-1.0633401, 37.29404]
    }, {
      "shop_id": "d590f9f8-6ee3-4904-a2a6-557cfff7817c",
      "location": [-1.0633587, 37.29417]
    }, {
      "shop_id": "ec0cd797-ff8b-441d-82c5-dee25348d01f",
      "location": [-1.0797966, 37.31362]
    }, {
      "shop_id": "b6db6215-ed9e-4122-866f-5f77ee36f3ae",
      "location": [-1.079963, 37.313736]
    }, {
      "shop_id": "03e97309-2705-4ebe-99cb-78027b1b0163",
      "location": [-1.0899122, 37.32371]
    }, {
      "shop_id": "e1adbaba-1c58-4902-98dc-f557920f130c",
      "location": [-1.0978371, 37.334763]
    }, {
      "shop_id": "8eb7ee0a-0601-4701-9f10-e569c21ed40a",
      "location": [-1.09811055660248, 37.3344039916992]
    }, {
      "shop_id": "c496c780-5d9f-463d-ba90-736a2ef20fe1",
      "location": [-1.09821748733521, 37.3343963623047]
    }, {
      "shop_id": "f517b839-4da2-4a38-80cb-33f67340c65b",
      "location": [-1.0982366, 37.334385]
    }, {
      "shop_id": "837deae3-e6d5-4adc-bc48-f31f3971f682",
      "location": [-1.09825825691223, 37.3343467712402]
    }, {
      "shop_id": "4283c469-d70c-4786-ae20-8c9eaf947c76",
      "location": [-1.0982374, 37.33432]
    }, {
      "shop_id": "5f79fe5d-5e1b-48d9-9442-0afabd4a36de",
      "location": [-1.0979841, 37.334305]
    }, {
      "shop_id": "4af402ae-28c3-46a7-8efb-8c04cfd09e67",
      "location": [-1.1094054, 37.347313]
    }, {
      "shop_id": "96823915-f278-4059-8874-6d0378e591fa",
      "location": [-1.1450728, 37.49428]
    }, {
      "shop_id": "9c06928f-3ff7-48c6-9cfe-71a4892456fc",
      "location": [-1.14489459991455, 37.4941864013672]
    }, {
      "shop_id": "efaacdee-6bba-4779-9cc0-a1c02bd7f981",
      "location": [-1.1449268, 37.49413]
    }, {
      "shop_id": "c1e9e0db-cdbc-47be-a702-06bb1af05784",
      "location": [-1.1448339, 37.49404]
    }, {
      "shop_id": "e9d7aa3c-5da8-424c-8839-f6f934ed7288",
      "location": [-1.144839, 37.493973]
    }, {
      "shop_id": "ab17b524-6b75-470a-99df-7491c863f3cb",
      "location": [-1.1442845, 37.49457]
    }, {
      "shop_id": "3d0d84fb-fce7-4511-ab19-1eb3cba948ee",
      "location": [-1.144279, 37.494705]
    }, {
      "shop_id": "73f790e1-79c2-4d1d-ac96-d4239c0da5f8",
      "location": [-1.1453677, 37.53942]
    }, {
      "shop_id": "a0928997-ec1d-4059-9a58-fdbfeb56a77b",
      "location": [-1.14431869983673, 37.5472526550293]
    }, {
      "shop_id": "f90e23b1-8458-4ee9-b8c2-8028bcde7984",
      "location": [-1.14428329467773, 37.547306060791]
    }, {
      "shop_id": "01f88bce-0daf-4856-bbf1-e9f8203f955e",
      "location": [-1.1439448595047, 37.5503807067871]
    }, {
      "shop_id": "eb828c5c-4db7-485f-b434-7eba1b19fb64",
      "location": [-1.1439625, 37.55041]
    }, {
      "shop_id": "2cabfef2-c442-4bfd-a457-5433c30c5691",
      "location": [-1.1437531709671, 37.5515174865723]
    }, {
      "shop_id": "028d4344-5d9e-4b6b-8598-9b18e78299db",
      "location": [-1.14366018772125, 37.552619934082]
    }, {
      "shop_id": "4e2a5a10-d147-4056-b5be-f2a9afc70e1a",
      "location": [-1.14362716674805, 37.5526580810547]
    }, {
      "shop_id": "14f20cc7-1f0b-4126-8694-0ff754eb0f83",
      "location": [-1.14938080310822, 37.5503692626953]
    }, {
      "shop_id": "02332dbd-3063-4224-bef3-90efc9b459da",
      "location": [-1.1491544, 37.550716]
    }, {
      "shop_id": "2dea50ed-50fb-4848-9d1f-3c710652a386",
      "location": [-1.1485344, 37.547333]
    }, {
      "shop_id": "31ceee27-d63b-4dac-abd2-7ac241a1e637",
      "location": [-1.1485475, 37.54457]
    }, {
      "shop_id": "2afe7391-0b2b-4afe-82f5-2f4d7d0ecb8d",
      "location": [-1.1825289, 37.44585]
    }, {
      "shop_id": "1b0466e8-6a77-4ab8-9346-e6627a1446d4",
      "location": [-1.1817927, 37.444603]
    }, {
      "shop_id": "6386ee6d-80fc-4354-a860-046753c04788",
      "location": [-1.1803437, 37.44307]
    }, {
      "shop_id": "1d3a5945-e3d5-4721-9724-b75a40d91e10",
      "location": [-1.1237104, 37.383503]
    }, {
      "shop_id": "752cd889-b9d0-4c07-9c85-1302b9f02601",
      "location": [-1.0781763, 37.312077]
    }, {
      "shop_id": "23efccfa-45b5-4976-b452-b1657819e966",
      "location": [-1.0624694, 37.238735]
    }, {
      "shop_id": "2113ebec-93cd-4b3c-a497-71e5c86db738",
      "location": [-1.062504, 37.238712]
    }, {
      "shop_id": "e14a883a-e4c0-4cdb-90e0-1546ecade405",
      "location": [-1.0625993, 37.238743]
    }, {
      "shop_id": "28134638-1eee-4fef-a4e8-6199f0e64387",
      "location": [-1.0625329, 37.23888]
    }, {
      "shop_id": "0683d842-b409-43d9-b568-b726446e750d",
      "location": [-1.0623627, 37.23871]
    }, {
      "shop_id": "2319780f-8e90-444d-a216-704c6ca3b898",
      "location": [-1.0623224, 37.238647]
    }, {
      "shop_id": "81fec8c0-4ad2-48a4-a08a-010946ee7d39",
      "location": [-1.06227159500122, 37.2382850646973]
    }, {
      "shop_id": "91b799bb-d8c3-49be-b694-dbb70a562a78",
      "location": [-1.0622629, 37.23827]
    }, {
      "shop_id": "ecc0e488-63a1-4cbe-a914-d471b4250600",
      "location": [-1.0624068, 37.23825]
    }, {
      "shop_id": "48a74ad9-100a-4bcb-b935-bf35c4ea88bc",
      "location": [-1.0621704, 37.238148]
    }, {
      "shop_id": "7f0c6432-299d-4470-80cb-50e888d32f73",
      "location": [-1.0628155, 37.2385]
    }, {
      "shop_id": "dae11db6-386d-4cbb-8148-99bc8ff223ae",
      "location": [-1.0628349, 37.238483]
    }, {
      "shop_id": "92bc4391-8770-4658-96f1-51a8cd8ffdeb",
      "location": [-1.0628496, 37.2385]
    }, {
      "shop_id": "6caea556-3958-4bdb-b520-7f91fb405995",
      "location": [-1.0632871, 37.238697]
    }, {
      "shop_id": "ec083913-194e-43a5-b2fa-d124353307a2",
      "location": [-1.0635889, 37.238735]
    }, {
      "shop_id": "5b6873cc-8997-4d98-9af6-9259a1e110e4",
      "location": [-1.0638669, 37.23894]
    }, {
      "shop_id": "b41219d3-6030-4c61-ad9d-32b816593ce0",
      "location": [-1.0646237, 37.23934]
    }, {
      "shop_id": "de923486-8cda-4ec0-94c7-9cb2bf0017d4",
      "location": [-1.084241, 37.251984]
    }, {
      "shop_id": "7f387bdd-12f1-4bf8-853b-8a45cde1ada5",
      "location": [-1.0847057, 37.25164]
    }, {
      "shop_id": "8049ba3d-9657-4e37-95d7-e706f02ebe63",
      "location": [-1.0856739, 37.25388]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Nairobi West/Madaraka",
    "route_id": "46f80ee6-fbd3-45a7-827f-a71e198bac9a",
    "matrix_info": {
      "DistanceMatrixAPI requests": 376,
      "cache_hit": "91%"
    },
    "distance": "11.83km",
    "path": "tz|Fmdx_Fhc@|Q`Ah@RWBAyAlA~ChJAA`CGROeCrENaTn@k@j@tDPABCJ@D?FAfKw@dBsDP@Hm@n@hDl@xB]nDGbAuBDiDh@sCPC@?EVBi@J?RR~@GTIR`@\\J?@BFGGWNrAX~@@P@PUMII[}LOHqAnICdDpUrEi[fZ?FAWbPbb@g@_Af@aA`Rl@PFyWmAkFwMk_@usAcAzGQC_KqO",
    "shops": [{
      "shop_id": "137338ea-3471-4f34-9597-c2203646816e",
      "location": [-1.3056045, 36.826]
    }, {
      "shop_id": "84cda661-63d1-4d5b-8293-021fc2be4348",
      "location": [-1.3059314, 36.825794]
    }, {
      "shop_id": "3aa7ce6d-ea79-4534-bfbc-22233aa79a98",
      "location": [-1.3060322, 36.825912]
    }, {
      "shop_id": "01fca956-3228-4f97-b916-c1c3681d1f50",
      "location": [-1.30605, 36.825916]
    }, {
      "shop_id": "ef071e3a-0d4f-4768-bd4c-6205159c9f88",
      "location": [-1.3055989, 36.825527]
    }, {
      "shop_id": "356dc356-5511-4105-b6ac-db4c4bbc65c9",
      "location": [-1.3064004, 36.823723]
    }, {
      "shop_id": "00259c7d-328f-4b09-9a41-5d61f2fe4ac3",
      "location": [-1.3063931, 36.82373]
    }, {
      "shop_id": "47a91658-4bc4-4df9-9582-c67c6abfcfe5",
      "location": [-1.3070352, 36.823765]
    }, {
      "shop_id": "3bf21544-b642-4368-82e6-3167a891f7da",
      "location": [-1.3071365, 36.823853]
    }, {
      "shop_id": "f2c80757-c7e0-464d-b9e2-41ca472493e8",
      "location": [-1.3064713, 36.82279]
    }, {
      "shop_id": "98214fe0-6ec7-44f8-8b5a-615709145484",
      "location": [-1.3065507, 36.826157]
    }, {
      "shop_id": "2999ac79-6840-4b82-98ef-6d5bd6c9f405",
      "location": [-1.30678725242615, 36.8263816833496]
    }, {
      "shop_id": "4eb6cc85-e0ad-4342-b9da-427e2f6a2206",
      "location": [-1.3070143, 36.82547]
    }, {
      "shop_id": "aaa67894-9acf-4384-81ef-3cc8cd645ac1",
      "location": [-1.3071026802063, 36.8254814147949]
    }, {
      "shop_id": "343caf87-2e34-495a-b220-15a32ce2e344",
      "location": [-1.3071172, 36.8255]
    }, {
      "shop_id": "49b34ed0-2602-4bbe-9422-29f46ac99126",
      "location": [-1.3071808, 36.82549]
    }, {
      "shop_id": "e5a0c884-9999-467a-8be4-b199410b756e",
      "location": [-1.30721175670624, 36.8254890441895]
    }, {
      "shop_id": "c7f10a7b-3c0e-40e8-9b2b-54fc5b6f4c5e",
      "location": [-1.30724847316742, 36.8255004882812]
    }, {
      "shop_id": "4001e232-5912-4479-ad80-f9bfec5dc503",
      "location": [-1.3092058, 36.825783]
    }, {
      "shop_id": "e9a3ef13-618d-4bd6-82d2-228e071cd2af",
      "location": [-1.3097154, 36.82668]
    }, {
      "shop_id": "c073e4c9-42a9-4a86-b228-f991457bf2dc",
      "location": [-1.3098062, 36.82667]
    }, {
      "shop_id": "dd7644f1-ad82-4686-b438-5b3b1dcade17",
      "location": [-1.3098577, 36.826897]
    }, {
      "shop_id": "4ace17c7-d926-4939-a6fe-00037e0365a7",
      "location": [-1.3100955, 36.826054]
    }, {
      "shop_id": "95061bd6-f8c8-4262-9284-96d5ecf6e5fb",
      "location": [-1.3103323, 36.825443]
    }, {
      "shop_id": "69e494bb-76a0-462e-9eb5-39e0a4dfbd5e",
      "location": [-1.3101763, 36.82456]
    }, {
      "shop_id": "017f974b-dff0-4125-8215-2121e8117930",
      "location": [-1.3101448, 36.82422]
    }, {
      "shop_id": "4256d516-580f-4fb5-9c9c-536c19945416",
      "location": [-1.3095481, 36.82419]
    }, {
      "shop_id": "bd97bf59-783d-44fe-99d3-ceaba911d790",
      "location": [-1.3086973, 36.82398]
    }, {
      "shop_id": "0e79234c-70e6-4cb0-92e8-53afe8f3bbfb",
      "location": [-1.3079587, 36.82389]
    }, {
      "shop_id": "95ee5814-dadd-4bc5-9454-a55ea69fed8d",
      "location": [-1.30793845653534, 36.8238792419434]
    }, {
      "shop_id": "5b73323b-8e9e-44f4-8de5-b3c5676fcd40",
      "location": [-1.3079422, 36.823906]
    }, {
      "shop_id": "8e3d4151-721c-47b1-bb57-77fb04dd68a3",
      "location": [-1.3080606, 36.823887]
    }, {
      "shop_id": "0564e6d6-1ab3-490b-a233-7bc9cfda25a4",
      "location": [-1.3078502, 36.823826]
    }, {
      "shop_id": "b2cd4fdc-0cba-4176-9de2-34220ec8f219",
      "location": [-1.3078451, 36.82373]
    }, {
      "shop_id": "0007c6f0-d06c-4096-96ef-ae3f715bba63",
      "location": [-1.3079547, 36.823406]
    }, {
      "shop_id": "bedd44b3-c63e-4bba-84d6-bf217e67e8c8",
      "location": [-1.3079115, 36.823296]
    }, {
      "shop_id": "379de799-48a8-47a8-ac58-07e140131a74",
      "location": [-1.3078624, 36.823204]
    }, {
      "shop_id": "cdb91f09-29eb-4f87-af54-ba823522ce15",
      "location": [-1.3080333, 36.823055]
    }, {
      "shop_id": "9d2f1fd0-fc12-4295-8d98-bc6965a3b691",
      "location": [-1.3080895, 36.82305]
    }, {
      "shop_id": "342036f4-5deb-469e-9498-4ebaa5eb6a3f",
      "location": [-1.3081003, 36.82303]
    }, {
      "shop_id": "806e6b7e-1781-42ca-80b8-e853462c7b6a",
      "location": [-1.3081425, 36.823074]
    }, {
      "shop_id": "085570d2-3326-455d-affc-931252746190",
      "location": [-1.3081033, 36.823185]
    }, {
      "shop_id": "f5a8daa9-9d50-45e9-9476-3f2c5c39527f",
      "location": [-1.3081775, 36.82277]
    }, {
      "shop_id": "9ff09fb9-ba34-4cec-9ee7-d89f12834f9f",
      "location": [-1.3083084, 36.822445]
    }, {
      "shop_id": "f1c1d361-b844-48b3-8ef8-c65569dde2fc",
      "location": [-1.3083222, 36.822357]
    }, {
      "shop_id": "272d326e-7520-40c4-aa98-0c44ac77a949",
      "location": [-1.3083295, 36.822273]
    }, {
      "shop_id": "b9370aa9-1a11-43a4-ab47-025b662090f5",
      "location": [-1.3082216, 36.82234]
    }, {
      "shop_id": "94385a2a-7fd3-44e2-ac4f-af23e53ec15a",
      "location": [-1.3081714, 36.82239]
    }, {
      "shop_id": "c5b13f76-648b-4c73-ae54-a89b32d6d5be",
      "location": [-1.3080313205719, 36.8246231079102]
    }, {
      "shop_id": "541cdf9a-6413-4ed6-89ff-dd42790979fa",
      "location": [-1.30795359611511, 36.8245658874512]
    }, {
      "shop_id": "6a0a8ecc-810b-4eec-b0a3-22aa19c8325c",
      "location": [-1.3075424, 36.82289]
    }, {
      "shop_id": "cca0625c-1859-4b21-afdc-e63313c19b8e",
      "location": [-1.3075184, 36.82206]
    }, {
      "shop_id": "31672210-e3b5-478c-a3b3-ae4d04226e84",
      "location": [-1.3111258, 36.821003]
    }, {
      "shop_id": "1d187dc0-a8da-4fd1-ac3a-aca73d391f1b",
      "location": [-1.3066003, 36.81664]
    }, {
      "shop_id": "5376fb5d-19a4-4f1b-bad9-bfc8fd85caca",
      "location": [-1.3065977, 36.816597]
    }, {
      "shop_id": "fb3d66d6-730f-4026-bf53-1946cb7306f0",
      "location": [-1.3065933, 36.816723]
    }, {
      "shop_id": "cc17550f-582f-44a6-9915-159c2f366676",
      "location": [-1.3093292, 36.811104]
    }, {
      "shop_id": "5365bda3-3256-41a4-93db-253b230c314b",
      "location": [-1.3091286, 36.81142]
    }, {
      "shop_id": "42ffcf6e-085c-4e9e-8262-39f0814f0cf6",
      "location": [-1.309334, 36.811745]
    }, {
      "shop_id": "39157067-2bcc-4c2b-b14c-109cf4e5f6e4",
      "location": [-1.31237959861755, 36.8115158081055]
    }, {
      "shop_id": "c37ed04a-daab-4a9d-9e39-471ae76b4b16",
      "location": [-1.3124671, 36.81148]
    }, {
      "shop_id": "839f138d-0ce1-4cee-a7ef-9b7df70d1979",
      "location": [-1.3084993, 36.811867]
    }, {
      "shop_id": "9aa2cdcb-54c5-4145-8937-4d700796ac4e",
      "location": [-1.3073196, 36.81423]
    }, {
      "shop_id": "a406442c-d0d4-4c6c-8626-c0c405b57aa3",
      "location": [-1.3021389, 36.82778]
    }, {
      "shop_id": "c90c0430-c512-45dc-846e-525bee266f21",
      "location": [-1.30180215835571, 36.826358795166]
    }, {
      "shop_id": "2418ce40-e6ca-4143-bd83-abfea8c1bab7",
      "location": [-1.3017052, 36.82638]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Riruta/satellite",
    "route_id": "77aa4768-810d-4c2b-8b1e-7d802401e336",
    "matrix_info": {
      "DistanceMatrixAPI requests": 558,
      "cache_hit": "73%"
    },
    "distance": "34.53km",
    "path": "`z|Fedx_FgNzsMbCjOu@TyJjOdJ~UeUv]ACyBdGaLp`@{BfIG|FCfG@d@L?jKv@nDN\\Fd_@n^C\\OXU@rAXiJxPTo@_g@cm@aHnGsXk@s@oSJkCEoB^vWd]`HB`FQToG|KnBzXGnCjR_kBlN}_@n@qr@|N{KxCaEmEoSrGuEJoEu@wBhF{}L",
    "shops": [{
      "shop_id": "03fdb7dd-fd55-45af-b753-981001d1a207",
      "location": [-1.2972482, 36.753975]
    }, {
      "shop_id": "a9c8549f-a255-4491-973a-94453d8f50f9",
      "location": [-1.2979094, 36.751347]
    }, {
      "shop_id": "eab1cf59-8405-4d40-9ec2-445ca582babb",
      "location": [-1.2976356, 36.75124]
    }, {
      "shop_id": "a927aa87-553f-4716-925e-6f2ee28b66cd",
      "location": [-1.2957548, 36.74862]
    }, {
      "shop_id": "957ae807-23fe-4ff4-9c5e-bed089517e77",
      "location": [-1.297542, 36.744938]
    }, {
      "shop_id": "f8147ab7-9ee9-478b-992a-c193d168ba7d",
      "location": [-1.2939879, 36.740017]
    }, {
      "shop_id": "ae3e976b-7081-469b-bb33-285ad8024b5d",
      "location": [-1.293977, 36.74004]
    }, {
      "shop_id": "eedc5043-3d82-4b0c-9d2b-4a5a50282259",
      "location": [-1.2933742, 36.738728]
    }, {
      "shop_id": "d9da5d07-5ef2-4514-8e9f-5cd5e05b9631",
      "location": [-1.2912796, 36.733364]
    }, {
      "shop_id": "a1f6e107-28e4-4936-8d51-8319c9c58400",
      "location": [-1.2906649, 36.73172]
    }, {
      "shop_id": "e3b4ec34-078d-4233-b133-fb60f00d121a",
      "location": [-1.2906187, 36.730446]
    }, {
      "shop_id": "ad9feef4-8f54-4ff6-8e56-6074120dfab0",
      "location": [-1.2905966, 36.72913]
    }, {
      "shop_id": "0e4b0628-54cb-4d11-bbbb-39de7e4c08aa",
      "location": [-1.2906117, 36.728935]
    }, {
      "shop_id": "49fd133f-c491-46c0-8759-322511a2817a",
      "location": [-1.2906787, 36.728943]
    }, {
      "shop_id": "901872a9-7a30-4255-8c00-643118341735",
      "location": [-1.2926595, 36.728664]
    }, {
      "shop_id": "5e58bb41-07ae-4c6d-ad47-a13498364360",
      "location": [-1.2935407, 36.72858]
    }, {
      "shop_id": "a879352f-4b20-4a8f-a9bf-b6beb86cd7b1",
      "location": [-1.2936931, 36.728542]
    }, {
      "shop_id": "7754f976-85d8-45a4-b46a-2779225318b1",
      "location": [-1.2988383, 36.723495]
    }, {
      "shop_id": "eca900d2-38e9-403e-a542-a98a823512a0",
      "location": [-1.298822, 36.72335]
    }, {
      "shop_id": "a895079f-0fe4-4bc7-9700-cf95139327c7",
      "location": [-1.2987407, 36.72322]
    }, {
      "shop_id": "0ce0e9f3-6825-49c7-8fbe-d01e03d1b19c",
      "location": [-1.2986274, 36.723206]
    }, {
      "shop_id": "01cc5c28-1939-4e38-9899-03f557864ae2",
      "location": [-1.299045, 36.72308]
    }, {
      "shop_id": "2fd150d5-873f-4dd2-874c-288fa6dd0b2e",
      "location": [-1.2972366, 36.72023]
    }, {
      "shop_id": "0dbfd7f3-b532-40c0-b83a-aabd6dd8d4d6",
      "location": [-1.2973454, 36.72047]
    }, {
      "shop_id": "5d9cde04-6c84-4daa-9aad-a66c88c0651f",
      "location": [-1.2909542, 36.72785]
    }, {
      "shop_id": "072d280b-670c-465c-b800-ad22f8f81742",
      "location": [-1.2894965, 36.726494]
    }, {
      "shop_id": "24a6600e-3d1f-48dc-9cc5-5ed04a5eba56",
      "location": [-1.2854007, 36.72671]
    }, {
      "shop_id": "83219b1b-6818-4b86-992c-2ee40cfbbc49",
      "location": [-1.2851362, 36.729992]
    }, {
      "shop_id": "0028d05d-ffe8-4ada-84bf-387bb5aa39ff",
      "location": [-1.2851986, 36.730686]
    }, {
      "shop_id": "706bfd01-95cf-46fb-bf4e-5c6a2cd93941",
      "location": [-1.2851703, 36.73125]
    }, {
      "shop_id": "2ae94db8-29f4-4b47-a415-82949af81ada",
      "location": [-1.2853262, 36.72729]
    }, {
      "shop_id": "b49ac6bc-7123-471c-81c1-73a2d3a68786",
      "location": [-1.2901611, 36.725838]
    }, {
      "shop_id": "0a714559-033d-497c-8e33-c28a4927e2ea",
      "location": [-1.290181, 36.724705]
    }, {
      "shop_id": "36347001-8991-4b30-9415-6289d0442f95",
      "location": [-1.290093, 36.7246]
    }, {
      "shop_id": "ab9e40e4-9b8d-4204-906f-4df86b83fe88",
      "location": [-1.2887297, 36.722527]
    }, {
      "shop_id": "ea85ecc9-dae9-4d13-9d39-456c6051ea5d",
      "location": [-1.2892905, 36.71839]
    }, {
      "shop_id": "d5832a94-794c-4edf-b0bb-076f882c1af1",
      "location": [-1.2892513, 36.717667]
    }, {
      "shop_id": "b841d078-5425-43b0-9e47-b67584a7310d",
      "location": [-1.2923521, 36.734947]
    }, {
      "shop_id": "8b880c1c-4773-4e90-9708-4b9c59621636",
      "location": [-1.294825, 36.740215]
    }, {
      "shop_id": "4e185830-1fc3-4ca8-8363-43dcd339b3bf",
      "location": [-1.295055, 36.748474]
    }, {
      "shop_id": "df80c0d0-37ce-4051-b481-df860d341894",
      "location": [-1.2976117, 36.750534]
    }, {
      "shop_id": "de8ff79c-2891-43a2-9940-72c2aa989e3b",
      "location": [-1.2983767, 36.7515]
    }, {
      "shop_id": "380abe5f-ecfd-425e-87ec-35020c2d5ec8",
      "location": [-1.297354, 36.75478]
    }, {
      "shop_id": "288d4e2e-e45b-4ddd-8e63-d3dc6543f289",
      "location": [-1.2987336, 36.75585]
    }, {
      "shop_id": "aba4ecdc-d816-4e7f-b4ad-ea3c5df09c2e",
      "location": [-1.2987916, 36.756893]
    }, {
      "shop_id": "bd4661dc-1e3e-4a0b-ad27-94199ee66e02",
      "location": [-1.298523, 36.757492]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Twiga B2C Donholm",
    "route_id": "eb32db54-0a9c-4adc-a23f-88ba5fa98312",
    "matrix_info": {
      "DistanceMatrixAPI requests": 0,
      "cache_hit": "0%"
    },
    "distance": "0.01km",
    "path": "`h{F{`g`FBFCG",
    "shops": [{
      "shop_id": "b68ba082-5220-4cbb-90ea-efc79a6d30ac",
      "location": [-1.2917078, 36.905224]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Sabaki",
    "route_id": "cb98bcf6-040a-4e00-964c-e0c9692588e8",
    "matrix_info": {
      "DistanceMatrixAPI requests": 424,
      "cache_hit": "65%"
    },
    "distance": "25.67km",
    "path": "dsfG_se`FzeH{tGdIsIzKoCg@g@Jg@z@Q\\QaGiR?PJlB_WyHsDbAbGgKgLpAs@vAyAKuCmB_B|DoHpBaE`G`ElE_HwGe@m@WGcBaCs@vE~@x@Uf@{@XzBaBoEnDAe@aELaA~DNlAgdFbkH",
    "shops": [{
      "shop_id": "5da89bf4-c22c-432b-913d-456045f36a19",
      "location": [-1.3969663, 36.942383]
    }, {
      "shop_id": "7f3f1a7c-14b7-4406-9274-7857d3696e0f",
      "location": [-1.3986037, 36.944077]
    }, {
      "shop_id": "4f8dcc64-9035-4061-9971-e6d2e1a6593d",
      "location": [-1.4006555, 36.9448]
    }, {
      "shop_id": "ebc56ddf-4fcb-4d9c-a0fb-38e16cf5ebce",
      "location": [-1.4004556, 36.945]
    }, {
      "shop_id": "5a9718c6-7a96-4f3c-873b-c3ac25afee95",
      "location": [-1.4005164, 36.9452]
    }, {
      "shop_id": "8b4b3413-b5b2-4f39-9070-b79935f7c4b2",
      "location": [-1.4008201, 36.945286]
    }, {
      "shop_id": "33abbe49-17e1-4fed-a144-91adf21e4449",
      "location": [-1.40096580982208, 36.9453811645508]
    }, {
      "shop_id": "815f7117-6569-4fd4-9083-58c2745ff97b",
      "location": [-1.3996779, 36.948467]
    }, {
      "shop_id": "f17609fd-daa5-4ea8-996e-ea9d23e40b0e",
      "location": [-1.3996772, 36.948383]
    }, {
      "shop_id": "a3be3b5c-6931-477d-a2f1-1436256095dd",
      "location": [-1.3997444, 36.947826]
    }, {
      "shop_id": "a290cbdc-9de9-4ef1-ae28-707fa5ee177d",
      "location": [-1.3959006, 36.949398]
    }, {
      "shop_id": "36c292fe-9cbf-4f17-8a8c-d934e228d7b3",
      "location": [-1.3950032, 36.94906]
    }, {
      "shop_id": "12a63397-02ad-411a-bc2b-6ff45226ea11",
      "location": [-1.3962992, 36.951023]
    }, {
      "shop_id": "15a924b3-b180-4d19-88bb-b97a363c723c",
      "location": [-1.3941821, 36.950607]
    }, {
      "shop_id": "22434342-4099-461f-a669-011ffd55340f",
      "location": [-1.3939189, 36.95017]
    }, {
      "shop_id": "1bbc15ff-69fa-4827-b546-5a4d8eb2d6c2",
      "location": [-1.3934681, 36.950233]
    }, {
      "shop_id": "c604376d-3c93-401d-b5fd-469cf109d586",
      "location": [-1.392718, 36.950783]
    }, {
      "shop_id": "99714b94-0717-4237-a8b9-f0f58256521f",
      "location": [-1.3922362, 36.949833]
    }, {
      "shop_id": "0ff2baaf-ef30-4817-a45a-b8a0f7dd22f2",
      "location": [-1.3907207, 36.949265]
    }, {
      "shop_id": "95e46a7b-bb99-4975-b0a4-38466e28c993",
      "location": [-1.3897483, 36.94797]
    }, {
      "shop_id": "8c83e662-3c87-42a8-a822-ffbb474c0181",
      "location": [-1.3907171, 36.94694]
    }, {
      "shop_id": "db6ef18c-ab9a-4bea-bc7f-d45ad8851841",
      "location": [-1.3892832, 36.94834]
    }, {
      "shop_id": "900fe538-8a9d-4bfa-80b8-108b140ffb5b",
      "location": [-1.3890891, 36.948566]
    }, {
      "shop_id": "d5902c12-0f32-4bc7-bdc4-091f75eff6e0",
      "location": [-1.388966, 36.948605]
    }, {
      "shop_id": "d43fd511-0331-435a-b4c1-787e35bbbd99",
      "location": [-1.3884705, 36.949265]
    }, {
      "shop_id": "393bddf6-e6a8-4498-af6c-af155edc6f75",
      "location": [-1.3882062, 36.948177]
    }, {
      "shop_id": "fc84730f-eb3d-4d9b-858b-45cef79201bd",
      "location": [-1.388529, 36.94789]
    }, {
      "shop_id": "7aa8bf7b-1f08-4317-8449-a1d96b64a8b9",
      "location": [-1.388419, 36.947693]
    }, {
      "shop_id": "5f65dd36-ee27-4637-9136-141092c84397",
      "location": [-1.38812, 36.94756]
    }, {
      "shop_id": "f6f26575-c1f7-45aa-bf4e-61e80218c4aa",
      "location": [-1.3887362, 36.948048]
    }, {
      "shop_id": "8e8683fa-4853-465e-990f-40959c985441",
      "location": [-1.3876983, 36.947174]
    }, {
      "shop_id": "7c57f65d-ec24-4b35-94b2-19169898086f",
      "location": [-1.3876897, 36.947357]
    }, {
      "shop_id": "a82e3f89-8dc7-48a1-adc4-7ae11befeff6",
      "location": [-1.3867215, 36.947285]
    }, {
      "shop_id": "189219ca-a30b-40cd-96ae-03cc9d7292ed",
      "location": [-1.3863866, 36.946327]
    }, {
      "shop_id": "0d554830-c5a4-44a4-bf77-27f22088c732",
      "location": [-1.3864695, 36.94594]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Thogoto",
    "route_id": "4451f4a8-1872-4490-953d-d7042ff18735",
    "matrix_info": {
      "DistanceMatrixAPI requests": 87,
      "cache_hit": "91%"
    },
    "distance": "73.72km",
    "path": "`z|Fedx_FmAB{qCfz]GFcBw@_Au@dByBZm@JO@?AIeMmAq@sBSeAk@qA}FeJyN_NGHlEgIcJlFpx@t|@jHjY?@hGrTzD|j@oB|KPb@kPxj@lTf@sMfaDmUjm@swChd@fzC_k@zsCkhi@",
    "shops": [{
      "shop_id": "22063b96-89c8-4544-a03b-5c5b21ddcae9",
      "location": [-1.29929935932159, 36.828971862793]
    }, {
      "shop_id": "3372e3e5-1248-46d0-863c-d313abc55ab2",
      "location": [-1.2758037, 36.671005]
    }, {
      "shop_id": "19da73bb-10bf-4ee4-bec6-c635bb53eafa",
      "location": [-1.2757579, 36.67097]
    }, {
      "shop_id": "c53c34fa-082d-4402-b88e-9e1573344db4",
      "location": [-1.2752568, 36.671246]
    }, {
      "shop_id": "b06f843c-dc51-4c79-9cd0-3bc955de56eb",
      "location": [-1.27493786811829, 36.6715240478516]
    }, {
      "shop_id": "b4de15dd-3a00-45cd-9b6a-2ab8ea27f0e1",
      "location": [-1.2754519, 36.67213]
    }, {
      "shop_id": "368675b8-587c-4b76-9e62-4c75b8ed3415",
      "location": [-1.2755907, 36.672363]
    }, {
      "shop_id": "76418429-374f-4504-a568-547fba41c705",
      "location": [-1.27565324306488, 36.672435760498]
    }, {
      "shop_id": "8d82c9c7-56b5-488c-af41-0f1783d19255",
      "location": [-1.27565550804138, 36.6724395751953]
    }, {
      "shop_id": "8a5fdfaf-95d6-4930-a962-a653712a88a8",
      "location": [-1.27565324306488, 36.672492980957]
    }, {
      "shop_id": "a3024033-4a12-4399-bef3-c429d7f923ba",
      "location": [-1.2733799, 36.67288]
    }, {
      "shop_id": "9e4a86de-725d-4dc8-b375-a0f907ebc75e",
      "location": [-1.2731254, 36.67346]
    }, {
      "shop_id": "3fd214c1-74da-4733-a70f-de2392f59d32",
      "location": [-1.2730341, 36.673805]
    }, {
      "shop_id": "f49f6122-3aca-4bce-a15c-80077dc4fa01",
      "location": [-1.27280855178833, 36.6742210388184]
    }, {
      "shop_id": "4751e6a6-cf2f-4d2b-b63b-0d4f23be5b7e",
      "location": [-1.2715389, 36.676014]
    }, {
      "shop_id": "70578b3c-9689-414d-9ee7-1f76a6ef86aa",
      "location": [-1.26901149749756, 36.6784057617188]
    }, {
      "shop_id": "5cd246f4-55ca-40eb-b89c-335730ecbcc3",
      "location": [-1.2689683, 36.678356]
    }, {
      "shop_id": "7dcec57a-fc9b-4e5c-b953-648daf48d29b",
      "location": [-1.27, 36.68]
    }, {
      "shop_id": "61254b00-b3a1-4e82-99f7-cd36ef40338a",
      "location": [-1.2682241, 36.678814]
    }, {
      "shop_id": "6653fc43-c965-4071-9b94-c325ef6c1478",
      "location": [-1.2774318, 36.66894]
    }, {
      "shop_id": "a1afb1e9-9929-466e-b64c-e56c30e442ec",
      "location": [-1.2789279, 36.66472]
    }, {
      "shop_id": "1d8b4537-36b6-4fcc-b8da-bb140bb6d6e9",
      "location": [-1.2789257, 36.664707]
    }, {
      "shop_id": "d1a4a5c5-4bb8-4f6d-8789-8db396726e93",
      "location": [-1.28025686740875, 36.6612510681152]
    }, {
      "shop_id": "92b2ad02-c41c-4c2d-bf42-2af13d933447",
      "location": [-1.2812045, 36.65422]
    }, {
      "shop_id": "c959f22a-8b14-4b47-80af-b380a47f5c2e",
      "location": [-1.2806436, 36.65215]
    }, {
      "shop_id": "56565faa-3557-4009-9e08-11187c0a2bc7",
      "location": [-1.2807333, 36.651974]
    }, {
      "shop_id": "d4eecf4f-35a2-4230-9f7c-2dcef77e76b6",
      "location": [-1.2779529, 36.644962]
    }, {
      "shop_id": "a3e83ffe-9086-412d-b861-9c98f892b420",
      "location": [-1.28137588500977, 36.6447563171387]
    }, {
      "shop_id": "9caddd46-5a33-46da-9f71-d1f517e0225a",
      "location": [-1.2790437, 36.618797]
    }, {
      "shop_id": "c31058ec-2317-4600-b98f-911b309039f6",
      "location": [-1.275454, 36.61138]
    }, {
      "shop_id": "57ed6fa8-02f1-451a-a85e-66dcbe397408",
      "location": [-1.2510309, 36.60541]
    }, {
      "shop_id": "4ab51949-dc0d-481e-b700-a775aea91ffd",
      "location": [-1.2758738, 36.61245]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Muchatha",
    "route_id": "66008fa3-723c-401e-bb0a-d31e54472146",
    "matrix_info": {
      "DistanceMatrixAPI requests": 852,
      "cache_hit": "79%"
    },
    "distance": "41.16km",
    "path": "`ijF{`p_FaMfLMPoJdAoXfPq@x@Rj@q@{M}@Qs@J@dEYfLz@RyAdBsAtCoAh@kBbD^@_ElCiI|NTDcAhAWR}FdHeC|CwArBo[fq@yH~DwB|@cq@zVmDpAqpA{m@oLeJkdCpdGuBjD~z@sbD}]u^lBjUjoBnv@~o@mpA|q@hIF^@^`BpNxAzBjFvHa@iM~EkDtGgGpz@stBuWeQZsIj`@etAt@Un@y@h@aP}QxGg@zBxt@z[f@oAzGlC@HuApBuC`JdGbEtPuD|S}K",
    "shops": [{
      "shop_id": "d9532492-0d00-456c-ab14-29011ab5cc2a",
      "location": [-1.2025635, 36.785378]
    }, {
      "shop_id": "35372628-1912-40c5-b30c-25d769864c42",
      "location": [-1.2024915, 36.785294]
    }, {
      "shop_id": "842043a0-a7ea-4a70-ba87-0f5066c997c6",
      "location": [-1.2006465, 36.784943]
    }, {
      "shop_id": "191056b9-0b37-494b-9fec-61d3b798c97f",
      "location": [-1.1965652, 36.782177]
    }, {
      "shop_id": "3e9c8724-30e1-4b5b-9fee-1509767f9ae2",
      "location": [-1.1963153, 36.78189]
    }, {
      "shop_id": "bc92999d-0792-4be3-b14c-700a18846d2a",
      "location": [-1.1964217, 36.781666]
    }, {
      "shop_id": "ce401cab-e660-42fa-99ad-715bad0d3c39",
      "location": [-1.1961682, 36.78405]
    }, {
      "shop_id": "8ffbad24-8155-4cba-a37c-89fd55765ddd",
      "location": [-1.1958625, 36.784138]
    }, {
      "shop_id": "3b411b9a-2bd8-424d-8580-45b7b7e59b3e",
      "location": [-1.1956018, 36.78408]
    }, {
      "shop_id": "982253c6-e201-466a-b50d-bb9f3b4c9f49",
      "location": [-1.1956111, 36.783085]
    }, {
      "shop_id": "d925b1fc-b48b-4806-a26f-2443994c504c",
      "location": [-1.195475, 36.780968]
    }, {
      "shop_id": "732d9087-f3e4-4c44-94d3-25372e4093c7",
      "location": [-1.1957829, 36.780865]
    }, {
      "shop_id": "8965875c-31ec-43ee-b038-c0edbe4fd374",
      "location": [-1.195329, 36.78036]
    }, {
      "shop_id": "360010df-8807-426b-bcd5-67ed159d61d8",
      "location": [-1.1949141, 36.779606]
    }, {
      "shop_id": "21dbd6d3-e867-4f77-8626-87126a534e59",
      "location": [-1.1945096, 36.779396]
    }, {
      "shop_id": "a4ec4a1c-0146-4637-af38-41e3e58f8d63",
      "location": [-1.1939716, 36.77858]
    }, {
      "shop_id": "88f6a91e-d66e-4380-a877-a4e67f1cfe7a",
      "location": [-1.1941264, 36.77857]
    }, {
      "shop_id": "2a633a63-790e-4d4d-a44b-f8aaa7b71a8b",
      "location": [-1.19317162036896, 36.7778625488281]
    }, {
      "shop_id": "77aadb21-500d-4faf-be8d-76169bbb7a0a",
      "location": [-1.1915203, 36.775307]
    }, {
      "shop_id": "c9941e81-1047-4aba-8334-f546eedaae27",
      "location": [-1.1916318, 36.775276]
    }, {
      "shop_id": "af74c66a-6bc2-4057-bfa2-410b32a68930",
      "location": [-1.19128894805908, 36.7749061584473]
    }, {
      "shop_id": "7a5a9fb2-2691-43e3-9400-a673c6b808a8",
      "location": [-1.1911736, 36.774807]
    }, {
      "shop_id": "0cd8bb48-294c-4b09-8ecf-e6c849aa17b5",
      "location": [-1.1899025, 36.773335]
    }, {
      "shop_id": "ec1bc115-e4c5-4b9d-89ec-ba62765612c7",
      "location": [-1.1892306, 36.772552]
    }, {
      "shop_id": "f8d93ad2-4c46-4158-a446-29877ebac864",
      "location": [-1.1887851, 36.77197]
    }, {
      "shop_id": "3af33c7f-1b01-4f71-9fb6-c13311486ee6",
      "location": [-1.1842347, 36.763935]
    }, {
      "shop_id": "325d7ebe-1a04-4852-b570-1faa35761c49",
      "location": [-1.1826642, 36.76297]
    }, {
      "shop_id": "70c9d7b7-15a3-4159-a68c-5cbd201f4f5f",
      "location": [-1.18205714225769, 36.7626609802246]
    }, {
      "shop_id": "8be1ee98-7271-467c-a673-c3fab2373816",
      "location": [-1.1740398, 36.758842]
    }, {
      "shop_id": "c1cf535e-7559-41d0-88a1-81bb1debd826",
      "location": [-1.1731681, 36.758434]
    }, {
      "shop_id": "f0f23705-eb41-41f0-8fa4-6c7b8cce28a1",
      "location": [-1.1601249, 36.765926]
    }, {
      "shop_id": "69643562-28c0-4df2-975f-ea20cf4e7467",
      "location": [-1.1579645, 36.76772]
    }, {
      "shop_id": "d2615a80-f4db-4041-a28e-16a5a6a640e4",
      "location": [-1.1366243, 36.725872]
    }, {
      "shop_id": "95d8adf9-3677-4937-af3d-cb1c1d4b17b9",
      "location": [-1.1360292, 36.72501]
    }, {
      "shop_id": "c53ba6ba-325a-4931-88a2-fc6e47358ea8",
      "location": [-1.14562594890594, 36.7511863708496]
    }, {
      "shop_id": "e3ecdc5f-3046-4646-9d80-2170f2221495",
      "location": [-1.1406847, 36.75626]
    }, {
      "shop_id": "e0974bd4-8916-4316-bb0d-130a15c6879c",
      "location": [-1.1412336, 36.752678]
    }, {
      "shop_id": "cba5dddf-4156-4fc0-a1e4-c7adbd3f0aac",
      "location": [-1.1592118, 36.7438]
    }, {
      "shop_id": "3f592ba3-4a36-4d9f-b631-eb9f0ed4640d",
      "location": [-1.1670479, 36.756832]
    }, {
      "shop_id": "4a6a7f1d-543d-4fc5-8bee-cb24ee808851",
      "location": [-1.1752014, 36.755177]
    }, {
      "shop_id": "29d376d6-bbdb-4de3-a74f-b026aa20a2cd",
      "location": [-1.1752375, 36.755016]
    }, {
      "shop_id": "cc5f1d1a-511d-42f3-8012-42981cae64fe",
      "location": [-1.17525017261505, 36.7548561096191]
    }, {
      "shop_id": "23b3315b-df9c-4a70-b1f0-7aaab8eb7a20",
      "location": [-1.1757361, 36.75237]
    }, {
      "shop_id": "c6ff979a-880a-4f91-84d4-bbaaa6be4f62",
      "location": [-1.1761913, 36.751747]
    }, {
      "shop_id": "8ce6123e-2d6e-4b29-9b0a-a9de59bd826e",
      "location": [-1.1773665, 36.75019]
    }, {
      "shop_id": "23165dc2-ecbe-445b-9d58-d702fb69c8b1",
      "location": [-1.1771979, 36.75248]
    }, {
      "shop_id": "5ed649f6-b45e-424f-aed8-ae3814597251",
      "location": [-1.17832338809967, 36.7533416748047]
    }, {
      "shop_id": "2d0fc0de-0180-4057-ba87-08f32322686f",
      "location": [-1.1797111, 36.75466]
    }, {
      "shop_id": "5ff96e00-774e-4a9e-9314-cb2f535c6af9",
      "location": [-1.1892406, 36.773483]
    }, {
      "shop_id": "55b184df-6024-4fa1-a5f3-f57753d94bf8",
      "location": [-1.1852913, 36.776394]
    }, {
      "shop_id": "581289b6-a463-4865-aac2-863cb3950402",
      "location": [-1.1854303, 36.77809]
    }, {
      "shop_id": "59d029bc-b2ca-40db-8ec5-f7d5748fe9ab",
      "location": [-1.1907659, 36.79172]
    }, {
      "shop_id": "2e4f612f-b9e9-472f-96a0-9c6b985ece39",
      "location": [-1.191037, 36.791832]
    }, {
      "shop_id": "d2569b1b-2801-4d85-a158-d43349ead091",
      "location": [-1.1912774, 36.792118]
    }, {
      "shop_id": "40f633d0-0bc0-4e87-a5af-c039fecffbbe",
      "location": [-1.1914864, 36.794853]
    }, {
      "shop_id": "dc879136-d500-4de2-9ff3-c5691ed4ed10",
      "location": [-1.1884615, 36.793438]
    }, {
      "shop_id": "1f42a239-91a5-4679-a0df-de28d8f2e5b5",
      "location": [-1.188258, 36.792824]
    }, {
      "shop_id": "58bb2091-2eed-4a80-9f1e-32c9dcd13e1f",
      "location": [-1.1968718, 36.7882]
    }, {
      "shop_id": "022a200b-49ab-4775-8277-fc97a4b07ef8",
      "location": [-1.197074, 36.7886]
    }, {
      "shop_id": "c340d791-102c-44c7-b601-5058818685b8",
      "location": [-1.1984895, 36.787888]
    }, {
      "shop_id": "285fdd6d-1f04-4c75-881c-8fb5249d5c18",
      "location": [-1.1984984, 36.78784]
    }, {
      "shop_id": "3697dd1b-e4d7-43ba-aaf2-28d2ae8676df",
      "location": [-1.1980697, 36.78727]
    }, {
      "shop_id": "0ad7d184-badf-47de-997d-a49c1da11d95",
      "location": [-1.1973236, 36.785503]
    }, {
      "shop_id": "032dd163-4e47-4aac-b356-09533262f3da",
      "location": [-1.1986299, 36.784523]
    }, {
      "shop_id": "c37e4ee2-8b2d-423c-8f4a-00c7400bb189",
      "location": [-1.2014627, 36.78543]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Tala",
    "route_id": "41e901de-4225-4016-8710-ec0036fb4bb9",
    "matrix_info": {
      "DistanceMatrixAPI requests": 393,
      "cache_hit": "74%"
    },
    "distance": "42.93km",
    "path": "dsfG_se`FcnLi~KjAYnFJzWkQdMa\\RCq@Al\\{m@cAQPe@rG{JRJfAaAjAkEvB{Cq@Q{q@kP_SgO{DeN~Io[gO|SbKp_@n@BnNdk@d@G`Mxd@iH~MAV}Cm@aBh@CX}iAgBxX~\\iOtBbPEbBvDfGzDZ_@tCv@thLfcL",
    "shops": [{
      "shop_id": "c7f6db1b-58c2-45bb-99d8-561421b262ee",
      "location": [-1.280811, 36.96437]
    }, {
      "shop_id": "9e6f52ea-9e9e-4b7b-9e39-160177ac8c64",
      "location": [-1.2811862, 36.964497]
    }, {
      "shop_id": "acb75597-7a97-429a-91a1-917c3a6d4872",
      "location": [-1.2823931, 36.964436]
    }, {
      "shop_id": "8a5e6ad7-6ffe-443e-99ff-dd7f09d09a8c",
      "location": [-1.2863652, 36.967384]
    }, {
      "shop_id": "2c23f49d-c8a9-4d9d-9f9b-e758c59feb29",
      "location": [-1.2886428, 36.972034]
    }, {
      "shop_id": "d8297635-d2f7-4fb3-88a9-f637c14ae61e",
      "location": [-1.2887427, 36.97205]
    }, {
      "shop_id": "9c1b64b1-caae-4316-a585-e23f329765e2",
      "location": [-1.28849, 36.972057]
    }, {
      "shop_id": "5657e696-a2ef-4a23-839b-17e7ca6e2216",
      "location": [-1.2931973, 36.97956]
    }, {
      "shop_id": "4dce6922-fe6d-4b51-902e-83768ea450db",
      "location": [-1.2928632, 36.979645]
    }, {
      "shop_id": "3fcb22fa-34e9-430d-8c84-5b65c9554d77",
      "location": [-1.2929518, 36.979836]
    }, {
      "shop_id": "c28c31ec-2271-46b7-b540-69c5ed26c92b",
      "location": [-1.2943317, 36.98174]
    }, {
      "shop_id": "aed1f81b-561a-44cf-a9e2-3f73616d039f",
      "location": [-1.2944329, 36.98168]
    }, {
      "shop_id": "b99fc943-ac06-4e01-9916-637468a9be50",
      "location": [-1.2947872, 36.982006]
    }, {
      "shop_id": "dad25d19-931f-44d8-b13e-2b82af1dbefe",
      "location": [-1.2951691, 36.983025]
    }, {
      "shop_id": "bf1b391e-3f4d-4cea-a1fc-11c66bf18516",
      "location": [-1.2957681, 36.983814]
    }, {
      "shop_id": "b9734eb9-643d-4a76-a8dc-7575cefa9d53",
      "location": [-1.2955219, 36.9839]
    }, {
      "shop_id": "e94a9532-38c4-41a1-bbee-2bab6c442b3c",
      "location": [-1.2873824, 36.986675]
    }, {
      "shop_id": "9e73aa17-0567-4d9c-93f0-68d2d29b0ee1",
      "location": [-1.2841763, 36.989277]
    }, {
      "shop_id": "52b57c4f-129c-4d38-9810-e5d8ca51e62a",
      "location": [-1.28324329853058, 36.9917068481445]
    }, {
      "shop_id": "4bce3e71-87c9-4ad3-b1f5-e81973b34d09",
      "location": [-1.2849958, 36.996265]
    }, {
      "shop_id": "4f8d842c-889d-44e9-9be7-4bceec9ff46d",
      "location": [-1.2824016, 36.992924]
    }, {
      "shop_id": "f9764dea-a267-4539-860f-bd63a8238805",
      "location": [-1.284343, 36.987713]
    }, {
      "shop_id": "31d69597-4c67-452b-843d-de5be065a091",
      "location": [-1.2845755, 36.987694]
    }, {
      "shop_id": "d7e070ab-9bd2-4eb8-9c38-279315bf972f",
      "location": [-1.2870603, 36.980618]
    }, {
      "shop_id": "75073526-39b6-41c2-8731-a03c21319600",
      "location": [-1.2872483, 36.980663]
    }, {
      "shop_id": "5288d020-3dac-44df-8746-bab9599105c6",
      "location": [-1.2895008, 36.97461]
    }, {
      "shop_id": "b9b193b4-1107-478f-9a5e-c62e36f69456",
      "location": [-1.2880147, 36.972206]
    }, {
      "shop_id": "9be7a446-ffe9-463b-a0d3-84a45889dc41",
      "location": [-1.2879997, 36.97209]
    }, {
      "shop_id": "4691d694-6fa8-4d9e-8019-225fa3e0664f",
      "location": [-1.2872137, 36.972324]
    }, {
      "shop_id": "4cb6f835-4dc4-4b80-af03-03a9c7a3d18a",
      "location": [-1.2867181, 36.97211]
    }, {
      "shop_id": "1d01683f-3616-4f88-b458-c686c30e31d3",
      "location": [-1.2867006, 36.971977]
    }, {
      "shop_id": "62e58ec3-0556-418b-ba19-473a4ced6af1",
      "location": [-1.274711, 36.9725]
    }, {
      "shop_id": "45b5fecf-a1aa-482b-b1ff-b6f987772875",
      "location": [-1.2788419, 36.967697]
    }, {
      "shop_id": "254c54a1-3698-4dbc-9d8c-12d7621db9ba",
      "location": [-1.2762343, 36.96711]
    }, {
      "shop_id": "9a20f26b-4dfe-4ae8-af44-996621103498",
      "location": [-1.2789708, 36.967136]
    }, {
      "shop_id": "b2f87aa7-3172-4de9-9315-5c7fcfe3460f",
      "location": [-1.2794693, 36.96622]
    }, {
      "shop_id": "a3ea4602-e433-4d1e-90cb-bef581e50224",
      "location": [-1.2807922, 36.965275]
    }, {
      "shop_id": "bbb0d439-9267-4f1a-9ae2-5c3474a652d4",
      "location": [-1.280932, 36.965443]
    }, {
      "shop_id": "65d74606-3018-4301-9515-78a3da93da65",
      "location": [-1.2816814, 36.96516]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Rongai South",
    "route_id": "d999c856-a2e9-4563-826c-b06027be365b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 745,
      "cache_hit": "69%"
    },
    "distance": "14.27km",
    "path": "zipGwtf_FFRkVvFh@IdAaY|B}r@|@gDrKyQkMg@n@qDCmAVSRsD~DGgQ}f@BWNEgDiAnDiJRuBw@cAnAy@GOzCzCpBpBBDDHfAhBfA_@rMmEeQpH^ZFBBF_DtAlF|AcDvN`@jGtOg@tUwCuf@lHbArCjE`BiLtFIJ_Lre@gJb@pHfAnFpAhBRzUr}@",
    "shops": [{
      "shop_id": "31de7038-49b9-4038-b308-e8b7c1c3a630",
      "location": [-1.3995391, 36.739376]
    }, {
      "shop_id": "a9303683-867b-499a-b511-1e1b390a6f28",
      "location": [-1.39580309391022, 36.7381439208984]
    }, {
      "shop_id": "dad28fde-e2a8-49ce-a2f5-52f6b716e0bf",
      "location": [-1.396014, 36.738186]
    }, {
      "shop_id": "71c5e049-f2c7-4fcd-999a-833245e8ebc6",
      "location": [-1.3963634, 36.74236]
    }, {
      "shop_id": "f28a4c0c-e082-4702-be30-16462df7c3e2",
      "location": [-1.39699304103851, 36.7506713867188]
    }, {
      "shop_id": "93637a69-778d-4f93-b1f1-c30987b9e8d6",
      "location": [-1.3973048, 36.751514]
    }, {
      "shop_id": "dc7d16ab-5a1e-4552-869f-5d163640a20d",
      "location": [-1.3993174, 36.75452]
    }, {
      "shop_id": "310beb82-d501-4a9a-80ce-eb3e3f758107",
      "location": [-1.397016, 36.75472]
    }, {
      "shop_id": "7f3f8607-c7db-4031-ac29-d84449e51e86",
      "location": [-1.3972591, 36.75561]
    }, {
      "shop_id": "f87d6101-3323-42a0-9fa2-90f8ca40b880",
      "location": [-1.3972405, 36.756004]
    }, {
      "shop_id": "2cea311d-5914-443b-bdd7-b21941af8246",
      "location": [-1.39735734462738, 36.7560958862305]
    }, {
      "shop_id": "62db7336-089c-4286-8412-1828b64d459b",
      "location": [-1.3974634, 36.757004]
    }, {
      "shop_id": "cc0d2f01-351d-4348-ab22-c745280d7616",
      "location": [-1.3984171, 36.75704]
    }, {
      "shop_id": "becb2179-9e2e-47fc-8635-9e4407e87d86",
      "location": [-1.3955029, 36.76343]
    }, {
      "shop_id": "90f91b91-7c44-4ba3-ad1e-495f649ae954",
      "location": [-1.3955163, 36.763546]
    }, {
      "shop_id": "3cfb1b38-bea5-41ae-acc1-b440c0d66e6d",
      "location": [-1.3955958, 36.76358]
    }, {
      "shop_id": "5f50c7a7-5884-4181-b60e-d261a1d1e89c",
      "location": [-1.39475882053375, 36.7639465332031]
    }, {
      "shop_id": "bad0b049-b650-44ae-acd2-dbe12838bfdc",
      "location": [-1.3956351, 36.765755]
    }, {
      "shop_id": "2fb78695-46c4-4e21-9066-c18a11ebe510",
      "location": [-1.3957374, 36.766354]
    }, {
      "shop_id": "e3522207-0669-450f-8fe5-7f61df3f8730",
      "location": [-1.3954568, 36.766693]
    }, {
      "shop_id": "45105ca3-7744-4ac1-b7ce-3e05b826830d",
      "location": [-1.3958575, 36.766983]
    }, {
      "shop_id": "f42c8f54-abd4-4353-90a9-ac1a819a9655",
      "location": [-1.3958155, 36.76706]
    }, {
      "shop_id": "18c32b40-2274-4615-9478-78b117dd9c00",
      "location": [-1.396604, 36.76628]
    }, {
      "shop_id": "7434e0d7-fe22-44e7-b1cc-10b109ee1c08",
      "location": [-1.3971655, 36.765713]
    }, {
      "shop_id": "dd314619-09ff-48f4-99d8-8d8206e9b7ae",
      "location": [-1.3971915, 36.76568]
    }, {
      "shop_id": "f2d8a7f3-bda6-44ca-8a63-8d618446c9a5",
      "location": [-1.3972167, 36.765633]
    }, {
      "shop_id": "e11dd380-666d-44d2-846a-3d749d84c4dd",
      "location": [-1.3975812, 36.765102]
    }, {
      "shop_id": "83c743eb-8df9-4041-bfb2-49565226907a",
      "location": [-1.39794, 36.765255]
    }, {
      "shop_id": "d3255c52-302c-4f9d-9c8d-4f1c4f7a449f",
      "location": [-1.400279, 36.766285]
    }, {
      "shop_id": "5acfab1e-db18-4042-97f5-b6a52938261d",
      "location": [-1.3973706, 36.76476]
    }, {
      "shop_id": "0a8ae381-8bd0-495a-85b7-b29eec625943",
      "location": [-1.3975283, 36.76462]
    }, {
      "shop_id": "8fd5df4e-b238-4d9c-b955-127a9fcae04b",
      "location": [-1.3975718, 36.764595]
    }, {
      "shop_id": "89f38a17-8459-40fb-a3ff-ee2de0382b6e",
      "location": [-1.3975861, 36.764565]
    }, {
      "shop_id": "62f5c6e2-7d26-4874-b9a3-7280c884ff69",
      "location": [-1.3967901, 36.76413]
    }, {
      "shop_id": "146b3bb3-5336-4975-8419-f4ef7fef10fc",
      "location": [-1.3979799, 36.763657]
    }, {
      "shop_id": "a58a6039-5d0d-41ac-8e22-8926d56a35c1",
      "location": [-1.3971575, 36.761143]
    }, {
      "shop_id": "64730884-98a2-47fe-ab2e-b57e915a0787",
      "location": [-1.39733, 36.759796]
    }, {
      "shop_id": "3b85794e-7eeb-4c16-87c7-4ec333a4c274",
      "location": [-1.4, 36.76]
    }, {
      "shop_id": "d709bfd2-5d47-4096-8d03-56abc41fe372",
      "location": [-1.403631, 36.76076]
    }, {
      "shop_id": "6de2ca54-a88b-4a44-8556-9cb305e6e49d",
      "location": [-1.3972803, 36.759247]
    }, {
      "shop_id": "550f4b14-ef81-4637-9fdc-f982c82e5856",
      "location": [-1.397616, 36.758514]
    }, {
      "shop_id": "c15387f5-3d49-4738-a34a-2b7955bfcc60",
      "location": [-1.398643, 36.75802]
    }, {
      "shop_id": "d8ac02c4-c393-4b00-bc88-0fd6bcc6fbfa",
      "location": [-1.3965087, 36.75679]
    }, {
      "shop_id": "a5a4b51d-346f-4aac-8c50-5cf024fe55e4",
      "location": [-1.3964627, 36.756733]
    }, {
      "shop_id": "0518f31e-acad-4c5f-a1e0-c34911b39056",
      "location": [-1.394382, 36.75055]
    }, {
      "shop_id": "02eb102d-6a3e-47e2-ae89-5fa326b5df0e",
      "location": [-1.3925843, 36.750374]
    }, {
      "shop_id": "3ea7e24a-2198-4954-819d-3d19fb54fd08",
      "location": [-1.3941079, 36.750008]
    }, {
      "shop_id": "4a1ced94-664f-49a0-b9a3-37f43cd83fd5",
      "location": [-1.3953121, 36.749596]
    }, {
      "shop_id": "ff898958-b069-4c22-8bf6-6f9867cfd4d7",
      "location": [-1.395843, 36.7495]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ruaka 1",
    "route_id": "6df6b35d-fe12-4c80-84ab-5ac841d21bbe",
    "matrix_info": {
      "DistanceMatrixAPI requests": 528,
      "cache_hit": "81%"
    },
    "distance": "77.04km",
    "path": "`ijF{`p_FfMrKE?a@`@c@`@FVJDITA@@BED`@GVo@u@hGDRIXrJpDm@CyJJ@z@|@jBcBrF~B`BwDdAWj@\\p@_FxOFNHKfA]}@cAk@xDo@UQBdA`DsB~KsC~EU\\WhAmAnYLyFhAiG~CiZSUcAhRxC}DUcQdGy]dPiWF@pC}Z|CsA|JfG`xa@`gJs|a@kwJyf@~O",
    "shops": [{
      "shop_id": "fe3300a9-4362-4e96-826e-2be010c88bb5",
      "location": [-1.20708954334259, 36.7854766845703]
    }, {
      "shop_id": "69de8e1e-c147-4b0b-8685-4b416b865679",
      "location": [-1.20706415176392, 36.7854804992676]
    }, {
      "shop_id": "2acec029-28e4-4bf0-b25f-3e752f2687cb",
      "location": [-1.20688986778259, 36.7853088378906]
    }, {
      "shop_id": "fcac8d23-ddd7-44c9-938f-a7cf76b663d3",
      "location": [-1.20671153068542, 36.7851448059082]
    }, {
      "shop_id": "5ecbf525-63ae-42b5-bbd5-7820ade94436",
      "location": [-1.20675, 36.785023]
    }, {
      "shop_id": "a0da92e6-31ba-429a-a5c0-0318267521a4",
      "location": [-1.2068110704422, 36.7849884033203]
    }, {
      "shop_id": "1f1266f6-e5a9-4c59-b2d7-08e859440952",
      "location": [-1.206757, 36.78488]
    }, {
      "shop_id": "a68309e6-bfa8-4669-971d-62dc1493b86c",
      "location": [-1.2067536, 36.784866]
    }, {
      "shop_id": "5d0f9a71-4008-4b31-977b-dd7d46afd763",
      "location": [-1.2067639, 36.78485]
    }, {
      "shop_id": "0ec547dd-150b-4824-8474-971e492cc64c",
      "location": [-1.2067333, 36.784817]
    }, {
      "shop_id": "1613cd53-ec8f-469d-8f47-e954f66acfb1",
      "location": [-1.2069013, 36.784855]
    }, {
      "shop_id": "9aa83a27-d238-4d02-af25-641535729da7",
      "location": [-1.2070222, 36.785095]
    }, {
      "shop_id": "65ca99e3-2ad8-485a-8743-14110a4f6b30",
      "location": [-1.206745, 36.783768]
    }, {
      "shop_id": "96b3de5e-a812-4cf1-b15e-e22095cb24dc",
      "location": [-1.2067806, 36.783665]
    }, {
      "shop_id": "8d10e49a-b689-4f67-8aac-3721d53eebab",
      "location": [-1.2067281, 36.783543]
    }, {
      "shop_id": "2620a45a-2873-4f23-8291-1be92463dcb7",
      "location": [-1.2085937, 36.782654]
    }, {
      "shop_id": "7b9f2785-e5df-45ae-980b-96ea3b4efdc4",
      "location": [-1.2083598, 36.78267]
    }, {
      "shop_id": "7b9b49ae-6309-4320-a0f4-fe695ecd5b92",
      "location": [-1.2064712, 36.782608]
    }, {
      "shop_id": "9e313163-ba8f-4a56-a1c0-006dd4353049",
      "location": [-1.206483, 36.78231]
    }, {
      "shop_id": "12b20784-8ff1-4645-aa7e-8027d368cd0a",
      "location": [-1.2067863, 36.781765]
    }, {
      "shop_id": "6d4f269f-20ad-4f44-b804-73cf295df4fc",
      "location": [-1.2062943, 36.780552]
    }, {
      "shop_id": "39a1d3bb-b5ca-4e57-a0ca-759bf634f094",
      "location": [-1.2069345, 36.78006]
    }, {
      "shop_id": "924c030c-b724-4d9c-852a-fceb8dd44801",
      "location": [-1.2060093, 36.77971]
    }, {
      "shop_id": "45d76eed-172a-4b4e-bef8-64710115c85c",
      "location": [-1.2058928, 36.779495]
    }, {
      "shop_id": "1dc2b355-87eb-4aa1-9b51-bfcfb27766e3",
      "location": [-1.2060378, 36.779236]
    }, {
      "shop_id": "44475675-d12d-4b74-9e46-346a4e0bbb6e",
      "location": [-1.2049214, 36.776554]
    }, {
      "shop_id": "e85dffaa-0e10-48f6-8509-b144dfa92d19",
      "location": [-1.2049599, 36.776474]
    }, {
      "shop_id": "11993d01-1752-4c5c-b81d-54494258f870",
      "location": [-1.2050123, 36.77653]
    }, {
      "shop_id": "32b90824-45d9-4bdc-a327-cac37c2551f0",
      "location": [-1.2053689, 36.776676]
    }, {
      "shop_id": "2a48d9b3-b538-4b2c-a7f4-02c4239b2217",
      "location": [-1.205058, 36.777023]
    }, {
      "shop_id": "eb8c447c-4156-4d52-80d1-01e8067d95d2",
      "location": [-1.2048362, 36.77609]
    }, {
      "shop_id": "ac4f3acc-ce0f-4550-8823-ce751066b601",
      "location": [-1.2045954, 36.776196]
    }, {
      "shop_id": "20b33c8c-d8f4-4580-8f41-cbd41db9016b",
      "location": [-1.2045145, 36.776176]
    }, {
      "shop_id": "ce4d76f7-22cf-4b46-acc1-dc792be4e6ed",
      "location": [-1.2048564, 36.775368]
    }, {
      "shop_id": "3273fb32-6903-471d-80e1-a005343dcd7d",
      "location": [-1.2042832, 36.77329]
    }, {
      "shop_id": "4b3135c9-bf4d-40b3-8f30-83e9ec525759",
      "location": [-1.2035375, 36.77217]
    }, {
      "shop_id": "df484143-607e-4da6-808d-86aaeefe4346",
      "location": [-1.2034256, 36.77202]
    }, {
      "shop_id": "40c097f0-e6c9-4dd7-8e82-dd7a9af3d9c4",
      "location": [-1.203311, 36.77165]
    }, {
      "shop_id": "f5f5657d-af91-416e-87ac-872ca1928f76",
      "location": [-1.2029235, 36.767414]
    }, {
      "shop_id": "211900d3-c930-4e28-8533-9ec846063090",
      "location": [-1.2029903, 36.76866]
    }, {
      "shop_id": "0d9e06a2-3ddd-4af7-82dc-7e6771a36051",
      "location": [-1.2033582, 36.76999]
    }, {
      "shop_id": "f95a3ae8-358b-4372-88ef-23ba7ed55621",
      "location": [-1.2041594, 36.774357]
    }, {
      "shop_id": "60897791-c181-48fc-98bd-c78d936ef925",
      "location": [-1.2040613, 36.77447]
    }, {
      "shop_id": "c3af1c04-4c04-49de-bfff-2e7940037794",
      "location": [-1.2037154, 36.771378]
    }, {
      "shop_id": "1b1cbd94-178b-43b1-918b-aeb235fa2453",
      "location": [-1.2044928, 36.77233]
    }, {
      "shop_id": "a87500b3-682d-43e0-acbd-5af6f2927b32",
      "location": [-1.2043806, 36.775227]
    }, {
      "shop_id": "aa8f0a78-2a10-4092-ac0a-90e936507c0a",
      "location": [-1.2056862, 36.780155]
    }, {
      "shop_id": "3e030fb5-f05c-490d-8f22-282653e84e09",
      "location": [-1.2084434, 36.784046]
    }, {
      "shop_id": "36e1f963-110d-48e2-b780-0e2c4f711468",
      "location": [-1.2084779, 36.784035]
    }, {
      "shop_id": "e512bdf2-0611-4160-aeff-e4bc4b2d54e5",
      "location": [-1.2092139, 36.78851]
    }, {
      "shop_id": "2ed47dc7-12e5-4f0c-9e02-eac1ffcbd3a1",
      "location": [-1.2100002, 36.788933]
    }, {
      "shop_id": "541d8d00-b83f-46c0-a9ff-167df7db5bd7",
      "location": [-1.2119135, 36.787613]
    }, {
      "shop_id": "e284db7c-f706-4fbd-b3d5-f11560cb29ce",
      "location": [-1.39, 36.73]
    }, {
      "shop_id": "e4fc51eb-d2cd-4b2a-99d9-18f66fc07dd9",
      "location": [-1.2111752, 36.790222]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Santon",
    "route_id": "8a4d5834-2671-4339-a1b6-3f0466e445fd",
    "matrix_info": {
      "DistanceMatrixAPI requests": 478,
      "cache_hit": "79%"
    },
    "distance": "21.42km",
    "path": "|qoF_r``FkwA_fDbXytBuIeM??p[@d@GJIZd@yBj@jL~ClBxBrQqICIr@u@@mAnFzAL^h@Nv@c@n@pA_FjDhIp@TO~DWfG~@JbArFoM_AaC}[aMyJqJ[q@QqC_a@yUpLzh@qBt@~Dr@BRZCbDzAtD~ADDF@gAhA`DWB@p@b@\\NbC{AjJlsH",
    "shops": [{
      "shop_id": "0af56236-7680-4fdf-95fc-1a38c1de66b4",
      "location": [-1.21768796443939, 36.8988838195801]
    }, {
      "shop_id": "f13729d0-aeb0-443c-bc2c-172342cbce42",
      "location": [-1.2217113, 36.91773]
    }, {
      "shop_id": "67be9928-9863-4e86-94a4-2252fc1da115",
      "location": [-1.22, 36.92]
    }, {
      "shop_id": "24afc7a2-284f-43a3-9657-8fbd008eaf7f",
      "location": [-1.22, 36.92]
    }, {
      "shop_id": "cf8fa7f2-4e57-44c5-b388-f4b1732fee9e",
      "location": [-1.2245677, 36.91999]
    }, {
      "shop_id": "b3989bcd-6cff-4da7-bd02-9dd052ccd2db",
      "location": [-1.2247592, 36.92003]
    }, {
      "shop_id": "4f8411c4-548f-4e6c-847f-ae9befdc82b6",
      "location": [-1.2248245, 36.92008]
    }, {
      "shop_id": "5d4c921a-576c-4597-a5f7-d9485b0c10ff",
      "location": [-1.2249643, 36.91989]
    }, {
      "shop_id": "7450925f-263b-4ebe-ba7d-1739ea659060",
      "location": [-1.224349, 36.919674]
    }, {
      "shop_id": "daedb220-2eac-4b58-bd51-044ff4b50734",
      "location": [-1.2264878, 36.91887]
    }, {
      "shop_id": "f048ba31-3776-4307-8798-b2d9bfd27fd3",
      "location": [-1.2270356, 36.91826]
    }, {
      "shop_id": "89a19aa3-01a0-48ae-a483-0916c559b6dd",
      "location": [-1.2300212, 36.91995]
    }, {
      "shop_id": "16db478a-6a06-4372-aa16-a7139aa719d0",
      "location": [-1.23, 36.92]
    }, {
      "shop_id": "9b50e9c1-6789-43e4-969f-1b89d07e7cec",
      "location": [-1.2302588, 36.920273]
    }, {
      "shop_id": "a5b43a76-7432-444e-81d4-55bf20f66dc8",
      "location": [-1.2302669, 36.92066]
    }, {
      "shop_id": "b509cbe5-5ab1-4f6e-81cd-1f909cca0a17",
      "location": [-1.2314677, 36.9202]
    }, {
      "shop_id": "1f1be18e-abba-4d2c-bec7-cbe95366a182",
      "location": [-1.2315423, 36.92004]
    }, {
      "shop_id": "5ec26e23-3014-4339-805e-9ded14326906",
      "location": [-1.2317532, 36.919956]
    }, {
      "shop_id": "2a4b3e9c-3cb6-4a8b-a5eb-a1dd60d2cb09",
      "location": [-1.2320302, 36.920143]
    }, {
      "shop_id": "24e499e9-8eb7-4472-a24b-1ae2d5b142ed",
      "location": [-1.232269, 36.91973]
    }, {
      "shop_id": "714611a5-dff6-44dc-a5fd-6bd9b6d552b6",
      "location": [-1.231147, 36.91887]
    }, {
      "shop_id": "7c9d1ada-bef9-4284-b59d-f3158208bd4e",
      "location": [-1.23279893398285, 36.9186248779297]
    }, {
      "shop_id": "d402268d-6b64-4c82-8938-5c31a3913d26",
      "location": [-1.232906, 36.918697]
    }, {
      "shop_id": "a3ee881f-6de4-464a-8914-2f5079464eb1",
      "location": [-1.2338734, 36.91882]
    }, {
      "shop_id": "8c9f9034-aa96-4b3b-84a1-bb775c3896b7",
      "location": [-1.2351931, 36.918495]
    }, {
      "shop_id": "69fd7fac-9b95-4c4c-807d-39f7581d257c",
      "location": [-1.235254, 36.918163]
    }, {
      "shop_id": "6dbd1ebe-4a9c-4ba8-b138-823d919052e5",
      "location": [-1.2364678, 36.92048]
    }, {
      "shop_id": "e7438b5d-7707-4b0e-9730-fdda2fc1dbe0",
      "location": [-1.2361519, 36.92113]
    }, {
      "shop_id": "2e3fbc51-b785-4027-a6ac-41fbd9c5d8d6",
      "location": [-1.2315212, 36.92338]
    }, {
      "shop_id": "6a484baf-ac87-421a-885e-1fb816c85538",
      "location": [-1.2296288, 36.925232]
    }, {
      "shop_id": "9cbdc508-ac19-409b-b281-3e0794c93686",
      "location": [-1.2294858, 36.925476]
    }, {
      "shop_id": "6808186f-71f1-41f1-bd31-101a9e3ad558",
      "location": [-1.2293983, 36.926212]
    }, {
      "shop_id": "a6ac9018-2f7b-45e7-8a54-24e9e87a7e75",
      "location": [-1.2239575, 36.92986]
    }, {
      "shop_id": "3c6e4c10-7311-4abe-b896-fa07cfb89cd8",
      "location": [-1.2261318, 36.923164]
    }, {
      "shop_id": "caad874b-f606-4ecb-9996-8812e36d91e3",
      "location": [-1.225556, 36.922894]
    }, {
      "shop_id": "65f41ff8-7f0f-4431-986c-219ff3e8251d",
      "location": [-1.2265235, 36.92263]
    }, {
      "shop_id": "9b9d04e7-fb70-4019-88ba-971dcd0eff28",
      "location": [-1.226539, 36.922527]
    }, {
      "shop_id": "2925e585-e7d7-4510-99c6-d022e3c7c0a8",
      "location": [-1.2266809, 36.922546]
    }, {
      "shop_id": "c753f463-fb55-4303-b884-3a8c665d773f",
      "location": [-1.2275021, 36.922085]
    }, {
      "shop_id": "1a57f47e-5f9c-4187-94c3-7dd1fcc56043",
      "location": [-1.228414, 36.92161]
    }, {
      "shop_id": "0ae2fe1e-725b-4124-8f54-8979166e72aa",
      "location": [-1.228443, 36.92158]
    }, {
      "shop_id": "5fe92431-367f-4149-876d-47f9e0f89a4a",
      "location": [-1.228479, 36.921574]
    }, {
      "shop_id": "789991f7-f96d-4ae8-812d-58f8c5933a22",
      "location": [-1.228119, 36.9212]
    }, {
      "shop_id": "76270d3d-2247-49f8-820d-398f0e8e0f27",
      "location": [-1.2289256, 36.921318]
    }, {
      "shop_id": "03afe4a0-14e2-4fbe-87f3-d44956127de3",
      "location": [-1.2289461, 36.921307]
    }, {
      "shop_id": "7b3689ae-fd7f-49df-8353-4a9266f113d7",
      "location": [-1.229202, 36.92113]
    }, {
      "shop_id": "088e8a97-4759-4a73-93e2-8f8975e9907b",
      "location": [-1.2293525, 36.92105]
    }, {
      "shop_id": "8f058ca1-a5f4-4cec-bb31-804275f17c3a",
      "location": [-1.23000991344452, 36.9215126037598]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "South C",
    "route_id": "e4eeb1fb-e753-424c-a553-5e123def20ba",
    "matrix_info": {
      "DistanceMatrixAPI requests": 328,
      "cache_hit": "88%"
    },
    "distance": "19.12km",
    "path": "tz|Fmdx_FzvCmjA{GpFdT{Ky@XmAdCdN`ImAjJS?{GrBg@}@EfQUdBj@nGhAlGQb@VjAFrFbCXNAt@FBQ|AUj@NlHrImDiAeLaDK|@\\vAMBd@dBf@jGF|AlID^`@kElByRaCu@oBBMQQs@_BkIiH_C}A|BwLb@|`@JhAl@pAf@x@yFh@BBPNxXdUOY{XdAchC}s@",
    "shops": [{
      "shop_id": "3f8f6cb0-9504-428e-a269-5ad7eb1b6015",
      "location": [-1.3240858, 36.841095]
    }, {
      "shop_id": "cc1af282-67dd-4de5-be99-1e4c4771e8e9",
      "location": [-1.3226731, 36.839893]
    }, {
      "shop_id": "a7d22dd4-a9cb-43b3-9238-b86f88de2e90",
      "location": [-1.32606, 36.841953]
    }, {
      "shop_id": "f6cdb270-b35e-4ecd-a0a0-77ecb16f4580",
      "location": [-1.3257688, 36.84182]
    }, {
      "shop_id": "f458a2d9-73e7-432c-87a1-2c871c470c95",
      "location": [-1.3253757, 36.84115]
    }, {
      "shop_id": "de9ca680-eca7-4af9-bc34-7227c4703a42",
      "location": [-1.3278129, 36.83954]
    }, {
      "shop_id": "a66e5802-2c1d-44d9-a1bb-4d86c366a1a9",
      "location": [-1.3274204, 36.837715]
    }, {
      "shop_id": "1e6db0dd-0266-47cb-92e5-763ae363dff2",
      "location": [-1.3273152, 36.83772]
    }, {
      "shop_id": "0b5339b7-a72f-4d89-830d-1891690791da",
      "location": [-1.3259033, 36.837143]
    }, {
      "shop_id": "fbb43e6d-76d4-40d6-b846-94d45ea3d4cf",
      "location": [-1.3256963, 36.83745]
    }, {
      "shop_id": "f09e54bc-f81f-4b89-963f-d93e9650eb1c",
      "location": [-1.3256693, 36.834534]
    }, {
      "shop_id": "df04d9d8-5e8f-4de8-84a8-00cfafbe0bee",
      "location": [-1.3255591, 36.834023]
    }, {
      "shop_id": "831868ba-3b73-4856-846f-4ec77145e84e",
      "location": [-1.32578, 36.83266]
    }, {
      "shop_id": "f77c94b3-1761-4622-9e1e-8684085d3566",
      "location": [-1.3261493, 36.831314]
    }, {
      "shop_id": "2107e464-a43f-49e8-a159-fae747c4d47d",
      "location": [-1.32605671882629, 36.8311347961426]
    }, {
      "shop_id": "a9973b82-106f-46fd-9164-308334a4a80a",
      "location": [-1.3261812, 36.830746]
    }, {
      "shop_id": "7b1378fd-3aa6-40e6-9f11-730961468294",
      "location": [-1.3262231, 36.829533]
    }, {
      "shop_id": "d78a67b9-36a5-48b5-ba6a-e4113e409592",
      "location": [-1.3268794, 36.829403]
    }, {
      "shop_id": "f846d0a4-cf9f-4ee4-811e-d70c0c4965c8",
      "location": [-1.3269596, 36.829414]
    }, {
      "shop_id": "1a43d824-adca-494a-b547-482b6de39bde",
      "location": [-1.3272265, 36.82937]
    }, {
      "shop_id": "43b7f24e-2721-4f59-89c2-18ddac9c7c80",
      "location": [-1.3272533, 36.82946]
    }, {
      "shop_id": "a4165be6-349d-45cc-9e2d-73e6e3b37fd4",
      "location": [-1.3277187, 36.829567]
    }, {
      "shop_id": "eaec91c7-28b2-4782-8409-c2dccb9e4db9",
      "location": [-1.3279406, 36.829494]
    }, {
      "shop_id": "0b066893-4b9b-497e-bd0c-122581bae71b",
      "location": [-1.3294513, 36.827793]
    }, {
      "shop_id": "b6afa68a-69fc-4710-97bd-1c01c3bf4bb3",
      "location": [-1.3285805, 36.828163]
    }, {
      "shop_id": "c0960a5f-aac3-4cbf-bd95-14f06ddeb8b2",
      "location": [-1.3264697, 36.828968]
    }, {
      "shop_id": "f3aca4e7-1334-4fe9-a541-0fc6e22a599a",
      "location": [-1.3264062, 36.82866]
    }, {
      "shop_id": "c6d1b6b4-c679-4735-a7ab-c6e651deba48",
      "location": [-1.3265624, 36.82822]
    }, {
      "shop_id": "12b1b7d4-38cc-45a3-8658-0f06b7af337d",
      "location": [-1.32648515701294, 36.828197479248]
    }, {
      "shop_id": "358446a5-2c4a-4fe0-857b-da6cedeab992",
      "location": [-1.3266782, 36.827686]
    }, {
      "shop_id": "7c82d17e-7d55-4494-adae-9da830b1ea8b",
      "location": [-1.326877, 36.826347]
    }, {
      "shop_id": "232e1eed-8895-4397-8161-2096cab394de",
      "location": [-1.326918, 36.825882]
    }, {
      "shop_id": "9f4eb9db-5844-47b8-9afe-96186cf993b1",
      "location": [-1.3285941, 36.825848]
    }, {
      "shop_id": "fd211202-ee41-43f9-a44b-9029842f16f7",
      "location": [-1.3287506, 36.825676]
    }, {
      "shop_id": "c3bccaf2-e059-4e6a-bd32-0c1b809aee97",
      "location": [-1.3277324, 36.82513]
    }, {
      "shop_id": "d33e8080-eea0-48aa-8789-8dc530c9001d",
      "location": [-1.3245598, 36.825775]
    }, {
      "shop_id": "286a34ee-65b3-4809-9321-86c347be4096",
      "location": [-1.324287, 36.826336]
    }, {
      "shop_id": "624c6caa-ac2d-4143-a0fd-eb9c93febdc1",
      "location": [-1.3243082, 36.826405]
    }, {
      "shop_id": "7ddbd0f9-5bdb-42c2-939f-31dbc2909826",
      "location": [-1.324221, 36.826496]
    }, {
      "shop_id": "b32b32ac-1190-4f22-ab44-0fc1db8c950f",
      "location": [-1.3239613, 36.826977]
    }, {
      "shop_id": "4f0dba92-b299-4e52-abfc-07916316cd28",
      "location": [-1.3222991, 36.82847]
    }, {
      "shop_id": "18cfa5ce-d4e5-40de-a42a-1e89fcacdc44",
      "location": [-1.3216592, 36.828945]
    }, {
      "shop_id": "e5141cf3-9e45-4c5c-b627-fe2694a326dc",
      "location": [-1.3222877, 36.831142]
    }, {
      "shop_id": "30428019-ee53-4d73-976b-11b87e433333",
      "location": [-1.3224663, 36.825706]
    }, {
      "shop_id": "4cd18335-cdb4-432d-a5b1-0e328da3c417",
      "location": [-1.3225332, 36.82534]
    }, {
      "shop_id": "d14f253a-0812-491f-9b21-c6b125aabb2b",
      "location": [-1.3227632, 36.82493]
    }, {
      "shop_id": "8684f7d0-44a0-43d0-a54b-8af7eded064b",
      "location": [-1.3229572, 36.824635]
    }, {
      "shop_id": "5e8de6e3-4447-49ae-812b-d7b116f3377c",
      "location": [-1.3217106, 36.824425]
    }, {
      "shop_id": "2281e36e-56a2-4d75-83be-4a444a9dcbda",
      "location": [-1.3217275, 36.824413]
    }, {
      "shop_id": "4df5844b-7560-4b41-9d55-01423cf2c168",
      "location": [-1.32182013988495, 36.824333190918]
    }, {
      "shop_id": "edb2ff56-1511-455d-9952-4f0ceb5a3f1a",
      "location": [-1.3259462, 36.82078]
    }, {
      "shop_id": "fcab53cb-8f53-4c9f-8bf8-8d54d745fc0a",
      "location": [-1.3258713, 36.820908]
    }, {
      "shop_id": "88f65e56-9cf9-4b6a-9230-ef9ad068896d",
      "location": [-1.3217338, 36.820557]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Tassia",
    "route_id": "4c2cad0f-1672-4ad7-a915-c94f5e8424ca",
    "matrix_info": {
      "DistanceMatrixAPI requests": 473,
      "cache_hit": "74%"
    },
    "distance": "30.66km",
    "path": "dsfG_se`FopHut@nFxKlFbK[|@wMbEtKpGvJwL|@[|@I@\\Zy@tAbBnEtClRbEeBcB{KbGgDaCaAjFfAbMUgErG_BdBlAd@KLt@}AlVIlBCA[QoAcBJSFxEGD]`@pCzCt@yE~@R|AuBe@LzBv@rAo@G`G}FrCpR{YbkF_N",
    "shops": [{
      "shop_id": "cb6bb750-c3f3-4e90-a0d7-126841bb8961",
      "location": [-1.3009077, 36.906513]
    }, {
      "shop_id": "1e1d8137-1e55-4bea-a16e-3f1344c834ad",
      "location": [-1.3021066, 36.90446]
    }, {
      "shop_id": "6440c354-67c5-43e3-b022-12406e594493",
      "location": [-1.3033044, 36.90252]
    }, {
      "shop_id": "549e9574-f1fc-47d1-8457-512c994afd3f",
      "location": [-1.3031564, 36.90221]
    }, {
      "shop_id": "229bbd21-d286-4247-af4e-86addb0956cd",
      "location": [-1.3008035, 36.901226]
    }, {
      "shop_id": "98b94f67-3581-4989-860d-2b1d65bfaaf3",
      "location": [-1.302828, 36.899864]
    }, {
      "shop_id": "53c40077-d4e7-4f68-85ed-62de979cdb9a",
      "location": [-1.3047106, 36.90206]
    }, {
      "shop_id": "0a32facd-e8aa-4f09-80b2-ee3081aca896",
      "location": [-1.3050212, 36.9022]
    }, {
      "shop_id": "7bc475cf-24ce-4481-b891-ee29736b381f",
      "location": [-1.305334, 36.902245]
    }, {
      "shop_id": "6ff62740-127e-456e-9314-25f6ca28f5fa",
      "location": [-1.3053448, 36.902103]
    }, {
      "shop_id": "ecc1d4f4-d5de-4a19-b7bd-6d9a01aede3b",
      "location": [-1.305477, 36.902393]
    }, {
      "shop_id": "dd43c5a7-d5e0-4e2d-b681-937a16350f4e",
      "location": [-1.3059072, 36.901894]
    }, {
      "shop_id": "9f81ad57-48dc-40a5-a352-d246908f0216",
      "location": [-1.3069482, 36.901142]
    }, {
      "shop_id": "a9095110-4112-45d2-8e1c-f787dbf59105",
      "location": [-1.3100576, 36.90016]
    }, {
      "shop_id": "29d78bec-9ec6-43d9-8641-76e700ba1d28",
      "location": [-1.3095516, 36.900665]
    }, {
      "shop_id": "f54f84ae-eba8-46ac-a715-6a982d67e2f6",
      "location": [-1.3074862, 36.899357]
    }, {
      "shop_id": "fb49d7a4-fc7a-4b0d-8eea-59ca182f4b93",
      "location": [-1.3066528, 36.90001]
    }, {
      "shop_id": "7822161e-9375-4d37-9cb7-96925b1d8347",
      "location": [-1.3063213, 36.898827]
    }, {
      "shop_id": "c39c80e6-6c5e-4f88-a306-06fc6b2bdf04",
      "location": [-1.3066756, 36.896572]
    }, {
      "shop_id": "7b4aa622-6b7a-4ab1-9473-d8895d4f0dba",
      "location": [-1.3065689, 36.89757]
    }, {
      "shop_id": "f9fcc9a3-a7b4-4cf1-a98e-ed4462806185",
      "location": [-1.307952, 36.898045]
    }, {
      "shop_id": "2aa1e5f4-4352-4fbf-98e6-8f8e12fb2828",
      "location": [-1.3084598, 36.89766]
    }, {
      "shop_id": "74f1bcfa-5832-46c9-8e58-beda3bbb526f",
      "location": [-1.3086543, 36.897724]
    }, {
      "shop_id": "f8afaaf7-c4d7-461a-afd7-73b83129aa33",
      "location": [-1.308723, 36.897446]
    }, {
      "shop_id": "fbedd25c-650f-44a7-a5c1-13dab4f990ca",
      "location": [-1.3082502, 36.893696]
    }, {
      "shop_id": "2b6a0e12-4f3d-47cc-9cc2-691121803e92",
      "location": [-1.3082048, 36.893154]
    }, {
      "shop_id": "90bc5a4b-fa6f-44f8-9c69-fbba40097684",
      "location": [-1.3081805, 36.893158]
    }, {
      "shop_id": "d7d70304-7667-443e-b32e-0eed3ee89650",
      "location": [-1.3080411, 36.893253]
    }, {
      "shop_id": "da81ea4b-758b-4c3b-9d19-db1700ada544",
      "location": [-1.3076378, 36.893745]
    }, {
      "shop_id": "5f54de37-976e-4e88-8012-586236c05e03",
      "location": [-1.3077004, 36.893852]
    }, {
      "shop_id": "43bcb01b-3326-44b8-9682-de826e2d05bb",
      "location": [-1.307738, 36.89276]
    }, {
      "shop_id": "3ceb73b1-95b4-47f7-99fc-01d1ff98f511",
      "location": [-1.3076967, 36.89273]
    }, {
      "shop_id": "a003b10d-d855-461d-8d18-ba12dd78cc0f",
      "location": [-1.307554, 36.892555]
    }, {
      "shop_id": "c5ffd603-953f-47d7-b6ed-77a00c934842",
      "location": [-1.308276, 36.891777]
    }, {
      "shop_id": "46bf9e83-0d0b-4da8-8e6b-5b8e2df5a8e1",
      "location": [-1.3085461, 36.892868]
    }, {
      "shop_id": "69a87e16-c256-4b22-ae42-42141ff56e0f",
      "location": [-1.3088661, 36.892773]
    }, {
      "shop_id": "b952aab1-c1fd-4a72-9c1a-9d680725a58d",
      "location": [-1.3093438, 36.893364]
    }, {
      "shop_id": "5c0173df-0c4e-47f4-97c6-3382861409de",
      "location": [-1.3091459, 36.89329]
    }, {
      "shop_id": "d8e490eb-9fbf-4d5e-8198-ca295afd4fff",
      "location": [-1.3097711, 36.89301]
    }, {
      "shop_id": "e9f36ed5-ca38-48f2-8b45-3bcf443772ca",
      "location": [-1.3101853, 36.89325]
    }, {
      "shop_id": "ebc93198-4840-4def-aec2-b2522d966835",
      "location": [-1.3101499, 36.891964]
    }, {
      "shop_id": "dc9c89df-2858-4e25-a46d-26bd081612c1",
      "location": [-1.3088841, 36.891216]
    }, {
      "shop_id": "8d5b16fa-48f9-477c-a296-0a4e806c7b14",
      "location": [-1.3120089, 36.895515]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Westlands Route - Key Accounts",
    "route_id": "dfe88d77-d858-47aa-9862-a6338fa79dd9",
    "matrix_info": {
      "DistanceMatrixAPI requests": 0,
      "cache_hit": "100%"
    },
    "distance": "30.03km",
    "path": "dsfG_se`FaxL~{A`xL_|A",
    "shops": [{
      "shop_id": "e37bef3d-27e5-4712-9a59-62deb80c7631",
      "location": [-1.27922248840332, 36.8830413818359]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Roysambu",
    "route_id": "68f5950e-3a8e-4823-8849-f982a91e9a63",
    "matrix_info": {
      "DistanceMatrixAPI requests": 666,
      "cache_hit": "78%"
    },
    "distance": "19.04km",
    "path": "|qoF_r``F`@L{ThK}B@}A\\I@i@Vm_AnN{Jk@iYui@cAp@NdBAxKJvQeByGsNmD[Ab@sBoI}JrFqF|@fCp@}BzQqABEc@OfF`@AQkI}x@v@{D^eDc@Wa@I`DyBB[fXgI?ZtDL`@v@h@aDk@N[DfBoJdBIgIbV`GrBdJbAfR~o@kRgs@xAoKUOIIrz@vw@pBtBfH~KxV~e@m@e@b@xKkLuS",
    "shops": [{
      "shop_id": "f543a88f-e980-45f2-b7e8-d576382e9791",
      "location": [-1.2319978, 36.87209]
    }, {
      "shop_id": "28b1d5a8-7f0d-4946-90e2-90ad11c5bcd1",
      "location": [-1.22849929332733, 36.8701210021973]
    }, {
      "shop_id": "872c9d88-bbbe-4eef-aa76-3426bd69e80d",
      "location": [-1.2278696, 36.87011]
    }, {
      "shop_id": "d6f22b67-a33c-41a4-aab5-9abc1f810259",
      "location": [-1.2274019, 36.86996]
    }, {
      "shop_id": "1e04ce4a-edb6-42b2-8389-c46e9089a78d",
      "location": [-1.227349, 36.869946]
    }, {
      "shop_id": "3d999b14-558b-46b4-bdd0-6a8676215163",
      "location": [-1.2271404, 36.869827]
    }, {
      "shop_id": "d7c9ec12-bb67-4d10-9cec-84602fd92afd",
      "location": [-1.216825, 36.867348]
    }, {
      "shop_id": "e9259c33-a13b-424d-b917-afb0caeed26f",
      "location": [-1.2149278, 36.867565]
    }, {
      "shop_id": "6f34d02c-ed26-4908-995f-dacecd6cd5d4",
      "location": [-1.210715, 36.8744]
    }, {
      "shop_id": "3c031c42-efac-4554-9be0-5c9b1fb21bfe",
      "location": [-1.2103794, 36.87415]
    }, {
      "shop_id": "7ea6bdbd-c7c5-46ba-a082-938363a5e3fa",
      "location": [-1.2104623, 36.87364]
    }, {
      "shop_id": "fab5962a-f1a0-4031-b565-b3d128d76528",
      "location": [-1.2104456, 36.871586]
    }, {
      "shop_id": "f0e58454-dc1f-41b1-b448-48af9a373127",
      "location": [-1.210512, 36.868587]
    }, {
      "shop_id": "51618cd6-c520-4aaf-984b-0cc6f9773203",
      "location": [-1.21, 36.87]
    }, {
      "shop_id": "aea7ac6f-56f2-4826-9581-3a1878e00017",
      "location": [-1.2075021, 36.870872]
    }, {
      "shop_id": "e743ba67-898a-40e6-b7f4-e136076bddae",
      "location": [-1.2073566, 36.870876]
    }, {
      "shop_id": "7ade71bf-fcb5-41fb-965b-f907acba03ed",
      "location": [-1.2075412, 36.871464]
    }, {
      "shop_id": "6844b8b0-2bcc-47de-9b38-fe13ef2366da",
      "location": [-1.205864, 36.873367]
    }, {
      "shop_id": "fdc51d01-60ca-4f29-8d50-d53852bb3524",
      "location": [-1.2070755, 36.874577]
    }, {
      "shop_id": "4f92429f-a06d-414d-808a-a6247934dada",
      "location": [-1.20738637447357, 36.8738975524902]
    }, {
      "shop_id": "2a33ff41-9bd4-4c36-ac5e-0efd9d19bbe4",
      "location": [-1.2076393, 36.874527]
    }, {
      "shop_id": "9c964bed-2d77-4e45-b099-11099cd31bd2",
      "location": [-1.2106631, 36.874935]
    }, {
      "shop_id": "cddd7ffb-8609-4ead-ad98-32308462988e",
      "location": [-1.21067953109741, 36.8749732971191]
    }, {
      "shop_id": "c25033a6-0867-448a-90ce-b1ad8ec41756",
      "location": [-1.2104977, 36.875053]
    }, {
      "shop_id": "d7a1fdeb-f571-46ba-b228-2a8b0d58f285",
      "location": [-1.2116553, 36.874878]
    }, {
      "shop_id": "e8500318-dd52-4438-ab77-06138e66e7c1",
      "location": [-1.21165239810944, 36.8749732971191]
    }, {
      "shop_id": "0c2d0976-c81b-4386-a8cb-70474d61fa9b",
      "location": [-1.20999455451965, 36.8842430114746]
    }, {
      "shop_id": "9cb86334-13ed-4f63-b40c-5114730cd20d",
      "location": [-1.21026730537415, 36.8851776123047]
    }, {
      "shop_id": "c80aa773-e8e1-4080-99b1-5cde80ac16a7",
      "location": [-1.21042728424072, 36.8860054016113]
    }, {
      "shop_id": "9127dfa6-5a4d-445c-a513-e538707ecb5f",
      "location": [-1.2102461, 36.88613]
    }, {
      "shop_id": "0eef6e6b-3557-4e65-b3eb-b58e0e16d69c",
      "location": [-1.2100832, 36.88618]
    }, {
      "shop_id": "4cf41e3f-d084-4386-829a-cf49b6a6361e",
      "location": [-1.2108896, 36.886787]
    }, {
      "shop_id": "4485ec7b-cead-464d-9927-609e563bd5cc",
      "location": [-1.2109138, 36.88693]
    }, {
      "shop_id": "512c4f55-12bd-43a4-8254-e3427573ae68",
      "location": [-1.2149484, 36.88857]
    }, {
      "shop_id": "453f59f8-5c7c-41dc-b093-d8789cea7282",
      "location": [-1.2149478, 36.88843]
    }, {
      "shop_id": "40ce3fba-5709-41fd-b987-6e7c503ceb79",
      "location": [-1.2158568, 36.888363]
    }, {
      "shop_id": "a717be1d-d9be-4d75-9684-afdf05be85e3",
      "location": [-1.216034, 36.888084]
    }, {
      "shop_id": "bb6f7bbb-a0ef-433f-8981-95dad2c4f196",
      "location": [-1.2162411, 36.888893]
    }, {
      "shop_id": "2f8e29b1-400a-4042-9670-ed3be4f22eb2",
      "location": [-1.2160188, 36.888813]
    }, {
      "shop_id": "5b434358-650a-433a-b392-ce2bcbd855d6",
      "location": [-1.2158785, 36.888775]
    }, {
      "shop_id": "7dc15f43-50e6-42e6-bff7-535e7e523197",
      "location": [-1.2164006, 36.890617]
    }, {
      "shop_id": "ef94531e-a82e-4b10-ae3f-4bd008a164a0",
      "location": [-1.216913, 36.890667]
    }, {
      "shop_id": "22a682e9-690d-4ba7-8ddd-20078d976863",
      "location": [-1.2152709, 36.886974]
    }, {
      "shop_id": "0646a67f-c194-41c1-89da-12843af39c95",
      "location": [-1.21656179428101, 36.8863868713379]
    }, {
      "shop_id": "803a22ba-2fda-4f4c-a09a-d79223cfd13e",
      "location": [-1.2183526, 36.88605]
    }, {
      "shop_id": "c746b251-3a60-4c4c-b276-0d1614c6f9a2",
      "location": [-1.2214341, 36.878212]
    }, {
      "shop_id": "b4c3b64c-a797-4348-b606-b6db0ebbc7a2",
      "location": [-1.2183261, 36.886574]
    }, {
      "shop_id": "44c773e2-46ca-4358-a40e-76355832a44d",
      "location": [-1.2187809, 36.888573]
    }, {
      "shop_id": "1ddf0251-b612-4b33-817e-2d2a491bd697",
      "location": [-1.2186683, 36.888653]
    }, {
      "shop_id": "8ff65ddd-d158-4c73-a89a-cce8a3fd7166",
      "location": [-1.2186184, 36.888695]
    }, {
      "shop_id": "a0eb70e5-6e51-4de1-9174-8e02c00dc1cd",
      "location": [-1.2281631, 36.879616]
    }, {
      "shop_id": "b0f26d6b-8fe5-47f6-9eb3-468cf9e91054",
      "location": [-1.2287261, 36.879032]
    }, {
      "shop_id": "d14af2ef-579c-47b0-8dd4-9ed1fb15699f",
      "location": [-1.2302064, 36.876945]
    }, {
      "shop_id": "3cb3dc53-dd31-43b5-ad71-269841adb2af",
      "location": [-1.23402333259583, 36.8707084655762]
    }, {
      "shop_id": "8db34eef-0426-4a35-a13a-7619a9db96bd",
      "location": [-1.2337934, 36.870903]
    }, {
      "shop_id": "c83d3dec-571e-4143-b3c9-389298e854f4",
      "location": [-1.2339684, 36.86885]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ole Kasasi",
    "route_id": "54f0d22d-fcbf-4f53-8470-81b7e2ba2152",
    "matrix_info": {
      "DistanceMatrixAPI requests": 921,
      "cache_hit": "75%"
    },
    "distance": "90.21km",
    "path": "zipGwtf_FaMhmIlqBn\\lNepDzCqD\\i@Z[jGiG`G_n@mXip@SSkJ_N?uASs@mCeg@}@qFl@ErQoj@rCOzBZ`BQsMXk\\iAaDVKFy\\k@AAdAiKzb@cSqNaFCC`HyYKBh[i\\lEBUrArCuC}p@nFOqAmd@ebAq@u@kVsNyBy@}Br@}Pv@[iIxBmCj@FJ?LLQg@{@i@hCpBz@@\\lADZf@O{CC_GyIOGetSa{Wb~S~_[bMffC",
    "shops": [{
      "shop_id": "e4207ac5-887d-47a6-9571-452052a7d4d2",
      "location": [-1.39724946022034, 36.6859893798828]
    }, {
      "shop_id": "00de2667-6654-48c4-9b81-5cef555b150c",
      "location": [-1.41555917263031, 36.6812705993652]
    }, {
      "shop_id": "28d19c70-b69b-4513-a8e4-1cb2872ec8b3",
      "location": [-1.4180325, 36.709618]
    }, {
      "shop_id": "4cc49ce9-1c14-4b26-96e6-4299c1abfd7e",
      "location": [-1.4188113, 36.710514]
    }, {
      "shop_id": "c7099f5e-0467-41f8-9afd-2c8625db9e80",
      "location": [-1.4189557, 36.710716]
    }, {
      "shop_id": "16f12f5c-960a-4f07-a822-8338c4524aec",
      "location": [-1.4191033, 36.71086]
    }, {
      "shop_id": "b5778beb-f4bf-44db-b745-0466e41bc3bd",
      "location": [-1.420443, 36.712185]
    }, {
      "shop_id": "501aaed3-cf3d-4447-8df2-67fab72416a2",
      "location": [-1.42173, 36.71971]
    }, {
      "shop_id": "0770286a-ad53-4937-ab6d-91abb93f2e9a",
      "location": [-1.4176565, 36.727604]
    }, {
      "shop_id": "1295c638-be58-4208-880e-d50e37704b37",
      "location": [-1.4175633, 36.727703]
    }, {
      "shop_id": "9fea0d58-ff29-45f8-abf9-2fd94b36c3c8",
      "location": [-1.4157377, 36.730103]
    }, {
      "shop_id": "045442de-c8ad-4219-bc2b-7a10d7079cdc",
      "location": [-1.4157375, 36.730534]
    }, {
      "shop_id": "8ff2edc9-bc66-4461-a56c-63cc817d1d49",
      "location": [-1.415644, 36.73079]
    }, {
      "shop_id": "e7e73028-1f6a-4234-a50a-08e490222618",
      "location": [-1.4149286, 36.737217]
    }, {
      "shop_id": "9e7ce745-1261-4f4b-b833-e57aebf00cf2",
      "location": [-1.4146198, 36.738434]
    }, {
      "shop_id": "a85c15b5-839c-4628-8349-778448ab6e79",
      "location": [-1.4148488, 36.73846]
    }, {
      "shop_id": "3932091a-74c7-47c6-bda2-d398fdcacdeb",
      "location": [-1.41783, 36.745415]
    }, {
      "shop_id": "a34d5103-685a-4d25-866e-33e5520cc09b",
      "location": [-1.41857, 36.745502]
    }, {
      "shop_id": "265eecc1-fb84-4ca6-bd2d-2c734e575f6a",
      "location": [-1.4191923, 36.74536]
    }, {
      "shop_id": "2600b9bb-ea74-4be7-9219-480a98d44b0f",
      "location": [-1.4196823, 36.745453]
    }, {
      "shop_id": "0b4abc36-198f-449b-8f48-a326ddfd74b3",
      "location": [-1.4173368, 36.745316]
    }, {
      "shop_id": "72064165-95a1-4295-8e7e-55248ac4d1d8",
      "location": [-1.4126413, 36.745693]
    }, {
      "shop_id": "5b251994-da0c-491f-b81b-bd1bc25c6c59",
      "location": [-1.411827, 36.745567]
    }, {
      "shop_id": "0fad1c9f-bc28-4f05-a8ac-9986a722090e",
      "location": [-1.4117656, 36.745533]
    }, {
      "shop_id": "4fdaaf67-2ae9-4b6b-af6c-b9c2e6a51be6",
      "location": [-1.4069957, 36.745747]
    }, {
      "shop_id": "2a9bae3f-f0fc-406a-9e2d-7253ed47e090",
      "location": [-1.4069933, 36.74576]
    }, {
      "shop_id": "ede88a16-8fb7-4017-b657-94a693a1c336",
      "location": [-1.4073367, 36.747726]
    }, {
      "shop_id": "d71c2286-43bb-4a08-982f-d9e222cf12fa",
      "location": [-1.4130836, 36.75095]
    }, {
      "shop_id": "008552e3-7d66-45cc-8700-3c43a1d659c1",
      "location": [-1.410587, 36.75208]
    }, {
      "shop_id": "53a7ef90-806a-4ca0-947a-6de6d5d55cba",
      "location": [-1.4105732, 36.752098]
    }, {
      "shop_id": "1f881a75-e637-4eaf-907e-fe5bd9d2e315",
      "location": [-1.41202, 36.756386]
    }, {
      "shop_id": "b58a2a80-671f-487e-9f0e-e3d2cdbf0829",
      "location": [-1.4119607, 36.756374]
    }, {
      "shop_id": "26e2c66f-51bd-4ce3-a07d-8eb27c314ed8",
      "location": [-1.4164877, 36.761063]
    }, {
      "shop_id": "8596fd9d-8e73-4a36-8b61-4cb3f4ec40ac",
      "location": [-1.4175204, 36.76104]
    }, {
      "shop_id": "b6a43841-67f5-48cb-90be-f820cdde364e",
      "location": [-1.4174097, 36.760624]
    }, {
      "shop_id": "47350468-8be9-4199-aa09-45385b51f8f4",
      "location": [-1.4181522, 36.761368]
    }, {
      "shop_id": "c29e8af2-955d-4f21-8f88-72d8251d8da9",
      "location": [-1.4101613, 36.76017]
    }, {
      "shop_id": "8e487f7a-7b03-4fae-ac05-b2eb131b870d",
      "location": [-1.4100754, 36.76058]
    }, {
      "shop_id": "3171507e-68b0-4db2-82cc-f5e3c0d0fdf3",
      "location": [-1.4040931, 36.771328]
    }, {
      "shop_id": "63c51c38-bcf3-456b-885c-4dad3fd3fc8d",
      "location": [-1.4038393, 36.771603]
    }, {
      "shop_id": "32689e68-c9c9-4b88-87e9-27884d564fb7",
      "location": [-1.4000973, 36.7741]
    }, {
      "shop_id": "3a383c79-4212-46ec-b108-67ddf866bfb4",
      "location": [-1.3994927, 36.774387]
    }, {
      "shop_id": "2b5609fe-f4d7-4bdb-b6ad-5c8de3d3b5ee",
      "location": [-1.3988574, 36.77413]
    }, {
      "shop_id": "9c02bc7c-8ebd-4f0d-bf9f-875b24945534",
      "location": [-1.3959903, 36.773853]
    }, {
      "shop_id": "cc05630c-9284-4498-801d-c59c2aca768a",
      "location": [-1.395845, 36.775497]
    }, {
      "shop_id": "4b9bfd54-8d4f-4af7-a8ee-0c9f925dfa8c",
      "location": [-1.3964583, 36.77621]
    }, {
      "shop_id": "4adec997-4921-477d-ab50-2a7368894299",
      "location": [-1.3966823, 36.776165]
    }, {
      "shop_id": "b5c36a2a-5fc9-416b-90c2-eca06b23db03",
      "location": [-1.3967361, 36.776173]
    }, {
      "shop_id": "97df9fc6-d6da-47ca-befe-499b43ec521e",
      "location": [-1.3968105, 36.776096]
    }, {
      "shop_id": "a6c7d40d-e72f-4bef-b28f-90a192429b95",
      "location": [-1.3967226, 36.7763]
    }, {
      "shop_id": "d5859721-7a9e-4dd3-af2f-68eb114efe5e",
      "location": [-1.39642, 36.776505]
    }, {
      "shop_id": "cc8beb75-4886-4788-a5a1-f6247efb13de",
      "location": [-1.39711, 36.77594]
    }, {
      "shop_id": "3b806d99-b0c5-4f71-8f71-5ebf74ea1006",
      "location": [-1.3974068, 36.77593]
    }, {
      "shop_id": "3546c44b-34cb-4a72-b922-55ec03b79918",
      "location": [-1.3975632, 36.775543]
    }, {
      "shop_id": "e59bd01f-b6ce-47ed-9a81-70759d0117dd",
      "location": [-1.3975947, 36.7754]
    }, {
      "shop_id": "7aa26a26-5dee-4bfd-9945-1cabb7dc0860",
      "location": [-1.3977917, 36.775482]
    }, {
      "shop_id": "ade3e546-077b-4982-8734-cabd719a8f53",
      "location": [-1.3970065, 36.7755]
    }, {
      "shop_id": "37abe4ab-8da3-4c9b-ac58-a6dbe16d6694",
      "location": [-1.3957283, 36.77723]
    }, {
      "shop_id": "93f353e4-8868-4e9a-aaa2-b1205f9e526a",
      "location": [-1.3956546, 36.777267]
    }, {
      "shop_id": "bdb9f3c6-045a-48c3-b547-870bf94cdcad",
      "location": [-1.28986072540283, 36.9046401977539]
    }, {
      "shop_id": "773a1f84-03f8-4a5d-a4b2-4f17748d690b",
      "location": [-1.3972412, 36.761116]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "UpTown",
    "route_id": "e65b0f01-e0e2-407d-8d95-ef5f54e44fef",
    "matrix_info": {
      "DistanceMatrixAPI requests": 168,
      "cache_hit": "82%"
    },
    "distance": "24.86km",
    "path": "tz|Fmdx_FwBeByCvcAzR|}@bSA@a@gAf^APcH|@fUcE{s@lZz@jEuCzSNGbGo@oOnYwb@dPbAec@bQg[xG_Me@}\\KELZ?DaGJg_@fOCFi}@`A`Yyq@rRiM`w@rSxAeHfZklB",
    "shops": [{
      "shop_id": "57a19a2f-dc7d-42e6-a01f-47001f5eacfa",
      "location": [-1.29919, 36.82954]
    }, {
      "shop_id": "a32ab63e-406c-42c5-8416-fd957f70feb9",
      "location": [-1.29841601848602, 36.8185386657715]
    }, {
      "shop_id": "a5b0d4e8-8893-4f26-b159-fd09b1c1ca6d",
      "location": [-1.3016002, 36.808468]
    }, {
      "shop_id": "eba87838-6558-478b-8e9c-ae2463e9613d",
      "location": [-1.3048235, 36.808483]
    }, {
      "shop_id": "1edfab19-42aa-497e-9fb8-312a85142768",
      "location": [-1.3048333, 36.808647]
    }, {
      "shop_id": "d68f0704-5720-4863-90f8-de13244065aa",
      "location": [-1.3044688, 36.803654]
    }, {
      "shop_id": "54addc60-91fc-46b1-a9c1-9a9e21983859",
      "location": [-1.3044554, 36.803562]
    }, {
      "shop_id": "5baa04ad-9152-4ee0-bd05-b67e3eb5114b",
      "location": [-1.3030024, 36.80325]
    }, {
      "shop_id": "baa85c31-6374-46eb-a274-8dab41638942",
      "location": [-1.3065588, 36.804226]
    }, {
      "shop_id": "d076e07a-f96f-40a9-b973-09a2ccb710ea",
      "location": [-1.2981024, 36.79984]
    }, {
      "shop_id": "4b0e4643-d2b5-4586-9188-29477f75a3c6",
      "location": [-1.2984042, 36.798817]
    }, {
      "shop_id": "b3d7756d-6c8f-4b0b-8e42-fa7391c3545a",
      "location": [-1.2976514, 36.79548]
    }, {
      "shop_id": "f4651f06-b8da-497c-9cb4-55c3ad32ce39",
      "location": [-1.2977293, 36.79552]
    }, {
      "shop_id": "852edcf5-6844-4c41-b951-a191bf21817a",
      "location": [-1.2990276, 36.795757]
    }, {
      "shop_id": "6622430d-a686-4951-a2d0-a5a29b3d028d",
      "location": [-1.29639, 36.791523]
    }, {
      "shop_id": "77df4826-9153-4af4-815c-7d7db705b945",
      "location": [-1.2906702, 36.788773]
    }, {
      "shop_id": "4a011e53-8a6e-4872-93ad-48b03218b57d",
      "location": [-1.2910088300705, 36.7945556640625]
    }, {
      "shop_id": "5e6b250e-e784-4409-ad51-f2ac713d009a",
      "location": [-1.2939061, 36.79908]
    }, {
      "shop_id": "5dc8d08a-d6ee-4a6d-b5aa-b195ff84d24e",
      "location": [-1.2953249, 36.801315]
    }, {
      "shop_id": "b4351064-5d3d-49f6-967b-2570313743ba",
      "location": [-1.295129, 36.806114]
    }, {
      "shop_id": "04475665-2668-46b8-8918-139111dd93c7",
      "location": [-1.2950662, 36.806137]
    }, {
      "shop_id": "287dbb4f-a903-4525-ad06-cbedb040d42c",
      "location": [-1.2951409, 36.805996]
    }, {
      "shop_id": "aeee4f37-592a-4742-81b1-2377c7f86dc8",
      "location": [-1.2951387, 36.80597]
    }, {
      "shop_id": "accabe05-baa6-4a61-80cb-6bf54f2d3778",
      "location": [-1.2938479, 36.80591]
    }, {
      "shop_id": "771ec837-6b5d-4f9f-b96b-7bc7c96ba4bc",
      "location": [-1.2886888, 36.803314]
    }, {
      "shop_id": "6a7809df-92a8-476a-ac28-af6e4c118334",
      "location": [-1.2886701, 36.803272]
    }, {
      "shop_id": "6db1b79f-f45b-40c2-9c3a-b52e3eea3684",
      "location": [-1.27869880199432, 36.8029441833496]
    }, {
      "shop_id": "e2d6c07a-ce2f-4c04-92f7-b1bf2ba128d7",
      "location": [-1.2828686, 36.81107]
    }, {
      "shop_id": "96b9597d-c2ad-45a6-b175-006b2414db28",
      "location": [-1.2860138, 36.81336]
    }, {
      "shop_id": "1a9f43c3-a712-49d8-8e63-1ec6a8569c30",
      "location": [-1.2949767, 36.810055]
    }, {
      "shop_id": "b50b11b9-7067-44af-b545-55ff2271dc91",
      "location": [-1.2954302, 36.81153]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "South B",
    "route_id": "95e538a3-a232-4a80-9419-fa575d0de857",
    "matrix_info": {
      "DistanceMatrixAPI requests": 500,
      "cache_hit": "83%"
    },
    "distance": "32.98km",
    "path": "dsfG_se`Fs{DdgHoc@pM[}HcDBKBoCo@pk@xd@i@d@}FtFF\\B@nApAVu@XAHHk@jBV?^z@CFTGuGwGQ{@LEYIh@oAPEz@T_N}[eUth@MnShASNAQShBTLCnE@FMlDbAuFoGKsDgZvQe@BsC~Q\\tAj@~[I?tDe]|MuHvO^tCGRBHIQ~C|AeGrCyNxh@kg@rfDojI",
    "shops": [{
      "shop_id": "8480066e-8f40-4c01-a7c8-d834d84ce101",
      "location": [-1.3196135, 36.85053]
    }, {
      "shop_id": "dcd64522-1deb-472f-bde7-1e593dd096dd",
      "location": [-1.3137664, 36.848198]
    }, {
      "shop_id": "7bd607c3-1183-4ab5-a584-535d35bb133d",
      "location": [-1.3136264, 36.84979]
    }, {
      "shop_id": "285cebd8-e75e-49a2-82c3-cb94bff74d4a",
      "location": [-1.3128124, 36.849766]
    }, {
      "shop_id": "8d06b734-74e2-415e-870d-8eaf64a3aea0",
      "location": [-1.312754, 36.84975]
    }, {
      "shop_id": "bc4c97b1-8aef-4bc1-8189-69900f98eb9d",
      "location": [-1.3120252, 36.849987]
    }, {
      "shop_id": "9e7b5093-8b4c-4f40-80c5-cc4108d82d49",
      "location": [-1.3191577, 36.84394]
    }, {
      "shop_id": "e7fa9755-e643-4350-a394-148aa9001556",
      "location": [-1.31895112991333, 36.84375]
    }, {
      "shop_id": "ffac054c-1093-4f45-824e-bcfbe008a2c4",
      "location": [-1.3176835, 36.84252]
    }, {
      "shop_id": "26be611a-1a40-4d48-8bc4-69052bf4141b",
      "location": [-1.3177162, 36.842365]
    }, {
      "shop_id": "bed99f57-90ce-43cd-afd0-765c15ccbbad",
      "location": [-1.3177398, 36.842358]
    }, {
      "shop_id": "15c39e13-3624-4067-a48b-dfea3740184b",
      "location": [-1.3181382, 36.841953]
    }, {
      "shop_id": "12611ac9-b149-460c-bbbf-332b9f70c484",
      "location": [-1.3182573, 36.842216]
    }, {
      "shop_id": "aed56939-b8c2-480b-ab79-ab54d1f7117f",
      "location": [-1.3183937, 36.84223]
    }, {
      "shop_id": "beadbfbb-5f87-4083-b4fb-58bebfbefb9a",
      "location": [-1.318444, 36.842182]
    }, {
      "shop_id": "5d2cb0fd-d042-4718-bdae-af1fec961b19",
      "location": [-1.3182192, 36.841637]
    }, {
      "shop_id": "2070f23e-5daa-49cb-99fe-144ba532a39d",
      "location": [-1.318337, 36.841637]
    }, {
      "shop_id": "35e17bcc-0d55-4c6f-a8cd-e08a977b37bb",
      "location": [-1.3185019493103, 36.8413391113281]
    }, {
      "shop_id": "aa0aedde-b1e6-46a5-be92-42ca9fb9d168",
      "location": [-1.3184808, 36.841297]
    }, {
      "shop_id": "bb2ae1da-5286-4cbc-9956-7204ce073b1d",
      "location": [-1.3185942, 36.84134]
    }, {
      "shop_id": "8a10a243-eb18-43f0-b5c1-e7a15569e6b8",
      "location": [-1.3172041, 36.842743]
    }, {
      "shop_id": "bd3266a4-888f-4c72-bef3-7945093cd6e8",
      "location": [-1.3171071, 36.843037]
    }, {
      "shop_id": "3c6d4827-4379-496f-b4fd-f6b6c27d2ebb",
      "location": [-1.3171842, 36.84307]
    }, {
      "shop_id": "aeca8575-cefc-497d-b13f-14edd9e2873f",
      "location": [-1.3170512, 36.84312]
    }, {
      "shop_id": "aef5dc7d-67c4-43c0-8929-0b612520e26b",
      "location": [-1.3172584, 36.84352]
    }, {
      "shop_id": "8f62f176-b333-464d-85e1-6ab43510249d",
      "location": [-1.3173457, 36.843548]
    }, {
      "shop_id": "0148792a-cc7d-4ea0-8492-f033dd276b4a",
      "location": [-1.3176497, 36.843437]
    }, {
      "shop_id": "9ab14a97-c570-4788-b0d1-319178a59db1",
      "location": [-1.3152536, 36.84807]
    }, {
      "shop_id": "09e10d43-7c21-4c6f-852d-98cdba0a0378",
      "location": [-1.3117032, 36.8414]
    }, {
      "shop_id": "d005441e-c18c-4abc-a702-8f221a150d04",
      "location": [-1.3116256, 36.838123]
    }, {
      "shop_id": "03ef2960-ce38-47cf-9517-db6c08237956",
      "location": [-1.3119981, 36.83822]
    }, {
      "shop_id": "69fa719e-171c-43b4-8dd1-b4207a150a40",
      "location": [-1.3120767, 36.838226]
    }, {
      "shop_id": "228f8f5e-9cbe-4bd8-940b-566bfe5d2e96",
      "location": [-1.3119898, 36.838333]
    }, {
      "shop_id": "9370b2b3-156b-450a-8924-03477ad7b211",
      "location": [-1.3125165, 36.838215]
    }, {
      "shop_id": "f84a19b6-8f40-483a-85e9-0497d597dece",
      "location": [-1.3125898, 36.83824]
    }, {
      "shop_id": "637ac1d9-a107-41f8-bc40-1cf4165afcc0",
      "location": [-1.3136349, 36.83823]
    }, {
      "shop_id": "480dc805-6b9a-4616-ae95-0773c4631d70",
      "location": [-1.3136693, 36.838295]
    }, {
      "shop_id": "7edfa026-54a2-44e7-8f8d-a9e34a67edd0",
      "location": [-1.314541, 36.83796]
    }, {
      "shop_id": "ece07b36-c4c6-4df4-9a5d-ffa585aa3a7d",
      "location": [-1.3133085, 36.83932]
    }, {
      "shop_id": "c21f0da5-8040-43e1-96d9-e6ac6d9d5357",
      "location": [-1.3132501, 36.840218]
    }, {
      "shop_id": "79c15fa4-7b24-4058-8b9e-db328de38f2a",
      "location": [-1.3088894, 36.83722]
    }, {
      "shop_id": "4d068119-05cc-4a13-a595-785aa91fbca2",
      "location": [-1.3087012, 36.837204]
    }, {
      "shop_id": "7a34c5ea-cf72-4204-9dad-33f5a4295e46",
      "location": [-1.3079568, 36.834156]
    }, {
      "shop_id": "33c6bb3d-831f-4f07-83d9-cea76c8ae448",
      "location": [-1.3081053, 36.833733]
    }, {
      "shop_id": "23cd16dd-be7b-4565-9331-d43c60b2f3ba",
      "location": [-1.308328, 36.829094]
    }, {
      "shop_id": "20c25b55-95d9-4aef-a06c-12b6a1dc4a9d",
      "location": [-1.30828332901001, 36.8290939331055]
    }, {
      "shop_id": "ce9f0f92-e27e-4895-8b2a-ec2ae9d78873",
      "location": [-1.3091855, 36.83392]
    }, {
      "shop_id": "e96e7bc6-553c-476f-a03d-31f9dd73ef05",
      "location": [-1.3115805, 36.835472]
    }, {
      "shop_id": "3635eb61-963a-4dd9-8e8d-9d01b10d0390",
      "location": [-1.3142629, 36.835308]
    }, {
      "shop_id": "2b3f2281-b1df-48ca-b12a-2bc5ca5ad63e",
      "location": [-1.3150091, 36.835346]
    }, {
      "shop_id": "284f14c7-5b51-4db9-96be-e1092faddb9e",
      "location": [-1.3151095, 36.835327]
    }, {
      "shop_id": "06c499c8-a350-48c6-b1c3-e2ec6ad8f1b3",
      "location": [-1.3151588, 36.835377]
    }, {
      "shop_id": "e91ee3ff-6fb5-418e-a95c-34ff04b63d85",
      "location": [-1.3150703, 36.834583]
    }, {
      "shop_id": "d6edccb6-311f-4b0f-b7da-2c64d2f51036",
      "location": [-1.3155407, 36.835888]
    }, {
      "shop_id": "7de126b9-e05d-445d-84f7-b591d6069cb6",
      "location": [-1.3162825, 36.838417]
    }, {
      "shop_id": "9652441e-093a-4aae-b12c-deca9683286a",
      "location": [-1.3229681, 36.84488]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Syokimau",
    "route_id": "58346854-846d-4eb8-b550-7974a704a183",
    "matrix_info": {
      "DistanceMatrixAPI requests": 649,
      "cache_hit": "70%"
    },
    "distance": "127.22km",
    "path": "dsfG_se`Fl~Dm|Dv_[}z`Auj[`~`AWVYVCDMPAAEDCA?EDJKDqJaS}KyMmR|EpFqSuBcCkApAe@t@a@?_@eLeBqF}DuCaKyNctAmaDeL}u@}_@w^gKaEoEq@Uk@sFqC?AoBw@P@phAn`EuVhoADXhf@xQbaApiA~^~Zmu@zm@_@IeAsAQEfIuCyn@raACFih@vb@",
    "shops": [{
      "shop_id": "fb1af3cd-7a35-45c1-9dc7-701192b286a5",
      "location": [-1.3804234, 36.92823]
    }, {
      "shop_id": "07e99e0f-3ee8-4fc3-9f03-55134a97fc2e",
      "location": [-1.52389657497406, 37.265495300293]
    }, {
      "shop_id": "79b7aa19-a2fd-44c1-b86a-62d37d7516de",
      "location": [-1.3786733, 36.927727]
    }, {
      "shop_id": "122392ce-3882-478a-a50b-376ac46e7e91",
      "location": [-1.37854778766632, 36.9276123046875]
    }, {
      "shop_id": "8f449abc-b6ce-4d3e-822c-ceecacc77e40",
      "location": [-1.3784183, 36.927494]
    }, {
      "shop_id": "3f67abd2-7d87-46fe-8a32-373907cd75e0",
      "location": [-1.37840020656586, 36.9274597167969]
    }, {
      "shop_id": "28efbe08-2666-48e4-8e2f-8fc4b79fa233",
      "location": [-1.3783287, 36.927372]
    }, {
      "shop_id": "72eceb8f-8a1d-4be7-ada5-97acac7c84a6",
      "location": [-1.3783156, 36.927376]
    }, {
      "shop_id": "28cce737-1b67-4d1a-aa57-da8444feb896",
      "location": [-1.3782876, 36.927353]
    }, {
      "shop_id": "db6b8b77-5a78-4a73-a82c-48959eb05956",
      "location": [-1.378271, 36.927357]
    }, {
      "shop_id": "5541a801-55a2-4884-a5c8-e9fda7365220",
      "location": [-1.3782705, 36.927395]
    }, {
      "shop_id": "3b9d1d56-1ebf-4f24-ab61-295baf731c1d",
      "location": [-1.3783047, 36.92733]
    }, {
      "shop_id": "2cf1ee8f-0025-410b-b507-a0615fcfae92",
      "location": [-1.3782377, 36.927303]
    }, {
      "shop_id": "e2ff99cb-ff25-408e-bc40-1193e44056c5",
      "location": [-1.3763874, 36.930508]
    }, {
      "shop_id": "d2751964-d721-42fc-a194-b10de3e28c85",
      "location": [-1.374321, 36.93288]
    }, {
      "shop_id": "05424e45-04c6-4ec7-b80d-48c28938855f",
      "location": [-1.3712058, 36.931767]
    }, {
      "shop_id": "4cf23e3b-8969-4387-ae20-6550593682bb",
      "location": [-1.3724214, 36.935062]
    }, {
      "shop_id": "68490a26-ee08-458f-8192-16acfe248f23",
      "location": [-1.3718274, 36.93572]
    }, {
      "shop_id": "2fdec2e0-e1ec-4e61-b788-d1bcede2fd7a",
      "location": [-1.37145006656647, 36.9353065490723]
    }, {
      "shop_id": "0358fdb8-c78a-4a58-826b-4a4f4b4c038f",
      "location": [-1.371257, 36.935043]
    }, {
      "shop_id": "793bb0dd-8b24-4a0b-881f-05b3aa5c8482",
      "location": [-1.3710947, 36.93504]
    }, {
      "shop_id": "9cbb4728-2632-47da-a12d-30e7329175d5",
      "location": [-1.3709291, 36.937145]
    }, {
      "shop_id": "454ec629-15dd-4f6e-8c4a-eb7c8456ee0a",
      "location": [-1.3704213, 36.93836]
    }, {
      "shop_id": "dac98afa-5b1d-495e-9886-6e729dfad6ac",
      "location": [-1.3694718, 36.939114]
    }, {
      "shop_id": "a7a1a578-2b8d-4135-9116-a11583276fc6",
      "location": [-1.3675429, 36.941635]
    }, {
      "shop_id": "9ca9d041-4a50-41d8-9e61-2f39cec02eaf",
      "location": [-1.3539175, 36.967632]
    }, {
      "shop_id": "c9a6cc24-f847-4d88-8569-7d2fe2c8a9be",
      "location": [-1.3518126, 36.976418]
    }, {
      "shop_id": "46d9a96c-095f-4782-9aed-b6a5ed8f727a",
      "location": [-1.346543, 36.981495]
    }, {
      "shop_id": "3c656143-2ebf-45c1-a7a4-d1bb99af3405",
      "location": [-1.3445764, 36.98247]
    }, {
      "shop_id": "d5e300a7-00a2-4558-a8e7-4fd4af9fbd85",
      "location": [-1.343542, 36.982723]
    }, {
      "shop_id": "2b60f11b-9f0a-4bfe-8829-16ddda14fa81",
      "location": [-1.3434323, 36.98294]
    }, {
      "shop_id": "36e1eee9-af84-447a-8b61-057012ad6c17",
      "location": [-1.3422147, 36.983673]
    }, {
      "shop_id": "ac67e1c8-efe5-4b59-b41f-e015a1c62051",
      "location": [-1.3422095, 36.98368]
    }, {
      "shop_id": "66d782f1-2ce3-4710-ba75-bbcbaea37511",
      "location": [-1.3416487, 36.983963]
    }, {
      "shop_id": "4b1e55be-3ab6-49fb-9929-4b3d75cd5d7a",
      "location": [-1.341743, 36.98395]
    }, {
      "shop_id": "c7e62782-5377-4d82-a340-157eecaa04c1",
      "location": [-1.3535085, 36.952988]
    }, {
      "shop_id": "4cc7b12a-39bc-4943-921b-0277a2735070",
      "location": [-1.3497208, 36.940136]
    }, {
      "shop_id": "787fc8fc-857e-4b3d-91d7-5cf176f5132d",
      "location": [-1.3497511, 36.94001]
    }, {
      "shop_id": "e0bf74c7-5832-44ec-8324-3ad5198ebd1d",
      "location": [-1.3560351, 36.937]
    }, {
      "shop_id": "284f6f5c-5f02-46c5-8ced-341d988c1e10",
      "location": [-1.3666177, 36.92507]
    }, {
      "shop_id": "d7c6b4e2-b978-495d-8d7c-1a5699e0d603",
      "location": [-1.3717413, 36.920593]
    }, {
      "shop_id": "1ab428af-73ed-4f35-b903-0d6f98ece3a8",
      "location": [-1.363034, 36.913094]
    }, {
      "shop_id": "dd9d2ffb-8978-4feb-a53f-477790e75f93",
      "location": [-1.3628722, 36.913136]
    }, {
      "shop_id": "4a79f5a6-acb1-4395-aee2-7854a3c6e87e",
      "location": [-1.3625196, 36.913555]
    }, {
      "shop_id": "3a937e6e-283e-401f-a789-48f91153646a",
      "location": [-1.3624307, 36.913586]
    }, {
      "shop_id": "72a5e113-c3b7-4570-83f3-b8ac08d4940a",
      "location": [-1.364073, 36.914345]
    }, {
      "shop_id": "53f64dcb-c8f5-4f67-9fac-fd51f0aa4bb9",
      "location": [-1.3564187, 36.90368]
    }, {
      "shop_id": "854fd168-2c6a-4795-acdb-c04bf3f8833b",
      "location": [-1.3564043, 36.903645]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Tononoka",
    "route_id": "ce2b2b3b-39ce-482f-bbe0-4858c09028b0",
    "matrix_info": {
      "DistanceMatrixAPI requests": 337,
      "cache_hit": "84%"
    },
    "distance": "31.41km",
    "path": "`h{F{`g`F{wEauAjBcWmAkJRo@`ByRWqI_@}Au^kw@}DqMxEcs@~MbArVeJoa@fE_DsOPEBAoGfA~@hDgEsD_APgAYdl@uy@}m@tp@u@Ns@k@U_@[|HqR[jAvd@tt@hmBx@rC@?n@XdG~LuHlBgBr@VlGcFiAyKrHpWyDvAf@rDj@f@WjLbvAz|Av{AzxA}qAjT|P",
    "shops": [{
      "shop_id": "8450a9a8-7e7c-4a12-8f67-fd998ef62d8f",
      "location": [-1.2569891, 36.919033]
    }, {
      "shop_id": "dc74d91f-f06f-4859-ae63-c13d82d5866d",
      "location": [-1.2575251, 36.922886]
    }, {
      "shop_id": "c10c5754-da25-4040-8e4b-fee01da00061",
      "location": [-1.2571391, 36.924706]
    }, {
      "shop_id": "084a0d46-a7c5-4854-99f2-803c546f6fbf",
      "location": [-1.2572418, 36.924946]
    }, {
      "shop_id": "7cc62cfd-df1d-41fb-bd6e-f4276ffd425b",
      "location": [-1.2577255, 36.92812]
    }, {
      "shop_id": "c4587a81-dbd6-43d0-8df6-3690d30d6452",
      "location": [-1.2576092, 36.929813]
    }, {
      "shop_id": "fcd3c765-6cd3-4513-908f-424166cb1e6e",
      "location": [-1.2574528, 36.930275]
    }, {
      "shop_id": "ef36e294-f159-4947-8f10-173a074d754c",
      "location": [-1.2523788, 36.9393]
    }, {
      "shop_id": "f2bbee3e-e867-4557-bcf3-fbe5af3fca7e",
      "location": [-1.2514328, 36.94163]
    }, {
      "shop_id": "fd11438b-6a1c-4c92-83aa-031e40791385",
      "location": [-1.2525194, 36.94997]
    }, {
      "shop_id": "6c0b60d5-26cb-4de0-acad-0bed6d6aff0e",
      "location": [-1.2549208, 36.949627]
    }, {
      "shop_id": "9e1771be-2951-4eb2-8d54-5136cd7d42e2",
      "location": [-1.2587037, 36.951424]
    }, {
      "shop_id": "4f8d0548-95f4-4d82-97c0-081749f1e1e5",
      "location": [-1.2531817, 36.95042]
    }, {
      "shop_id": "3ef34165-f1c3-4f36-aa8a-37928f67c70a",
      "location": [-1.2523817, 36.95308]
    }, {
      "shop_id": "ad136af3-b19d-4087-977f-89a7970cb1a6",
      "location": [-1.2524654, 36.953106]
    }, {
      "shop_id": "b2aa840f-428b-461f-8daa-dfa0cd9433ea",
      "location": [-1.2524941, 36.953117]
    }, {
      "shop_id": "458c8f77-90ed-44d5-a7d8-913055051ff9",
      "location": [-1.2511255, 36.952763]
    }, {
      "shop_id": "e2b30e8a-45a8-43a0-94da-b28d37afb514",
      "location": [-1.25144743919373, 36.9519119262695]
    }, {
      "shop_id": "a2f5d39b-5b8d-432e-90be-a3c17fa157df",
      "location": [-1.2504461, 36.95281]
    }, {
      "shop_id": "e1f23358-d2af-4d3d-a3ae-33411a66891a",
      "location": [-1.2501311, 36.952724]
    }, {
      "shop_id": "ab2c4a57-1733-462b-bd1c-372b7c7409a4",
      "location": [-1.2497731, 36.95285]
    }, {
      "shop_id": "899a7e0d-f345-43b6-a20f-c10becce8fea",
      "location": [-1.2570021, 36.96224]
    }, {
      "shop_id": "f0f8f75f-3eb0-421d-ab55-a19be61c7737",
      "location": [-1.249488, 36.954292]
    }, {
      "shop_id": "e4d6be38-49ef-4fb9-ab68-37142f1d383b",
      "location": [-1.2492164, 36.954205]
    }, {
      "shop_id": "0debe9ec-c7be-4c54-ac78-a7888b755f85",
      "location": [-1.2489564, 36.954426]
    }, {
      "shop_id": "a743fbd7-c2e4-49ac-96f2-ca05a12bc778",
      "location": [-1.2488451, 36.954594]
    }, {
      "shop_id": "6c46683b-87fe-4c32-beea-ec2cbe86679b",
      "location": [-1.2487096, 36.953]
    }, {
      "shop_id": "f6a4bab6-c57f-4379-8139-9ed01d68db73",
      "location": [-1.245579, 36.953144]
    }, {
      "shop_id": "04b6a48d-3878-4091-934a-cd75e5f54c8b",
      "location": [-1.2459574, 36.947098]
    }, {
      "shop_id": "15bbb83a-4fbd-4cb9-a0bf-03a295670a9b",
      "location": [-1.2545518, 36.929447]
    }, {
      "shop_id": "c7b725b6-f009-4605-9c35-e8b20eccf85e",
      "location": [-1.2548429, 36.928715]
    }, {
      "shop_id": "cc871f7c-3a6b-4e58-aa6a-352a9e9a2895",
      "location": [-1.2548501, 36.92871]
    }, {
      "shop_id": "82b0448a-b61f-466d-9eb3-ef3f452d55f1",
      "location": [-1.2550921, 36.928577]
    }, {
      "shop_id": "668a79d2-60bc-454b-b6e1-9c58f4b21e84",
      "location": [-1.2563998, 36.92634]
    }, {
      "shop_id": "40535ba0-78e6-4a81-9db5-dee55e667328",
      "location": [-1.2548517, 36.92579]
    }, {
      "shop_id": "acf1936a-63f9-4929-a59c-ba2f643016e6",
      "location": [-1.2543257, 36.925533]
    }, {
      "shop_id": "544a0bb9-4f63-4767-baf5-945b272bd16c",
      "location": [-1.2544526, 36.924175]
    }, {
      "shop_id": "06125fe5-e165-4688-bfd4-7f4153704c81",
      "location": [-1.2533104, 36.924545]
    }, {
      "shop_id": "7e23331d-0fd6-42cc-a407-c33515e0db0f",
      "location": [-1.2512583, 36.92301]
    }, {
      "shop_id": "be081e55-5d3c-44a0-89e3-8ae663078ffd",
      "location": [-1.25519, 36.923935]
    }, {
      "shop_id": "5022c904-28d5-426d-986a-819f9c6ebc37",
      "location": [-1.2556252, 36.923744]
    }, {
      "shop_id": "5c1850e8-23f5-48da-bf7d-518e02702e5c",
      "location": [-1.2565349, 36.923515]
    }, {
      "shop_id": "f51f0b11-5b65-4c9b-9860-1e87721e7f23",
      "location": [-1.25673, 36.923637]
    }, {
      "shop_id": "a9027e74-7c29-4e2e-a2a6-4129d43b3406",
      "location": [-1.2588742, 36.9096951]
    }, {
      "shop_id": "322faaf8-93e5-42e1-87d2-5771d8b3644b",
      "location": [-1.2738869, 36.894863]
    }, {
      "shop_id": "aa26ab5a-147d-4a3b-8fe4-c8f7cd4fc00b",
      "location": [-1.2882721, 36.908134]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ruaka 2",
    "route_id": "2b821c38-4de6-47b6-8593-cae13ffb97c4",
    "matrix_info": {
      "DistanceMatrixAPI requests": 602,
      "cache_hit": "84%"
    },
    "distance": "35.4km",
    "path": "`ijF{`p_FpBxy@xR{[qVjd@mZ~cBk@KGX{A`GZ~EvCUiLbJaCfEgWb_@uBzR{@ZMBc@KA@CApDp@F?@@sEjKETo@nFUXNPFL[VUrAqkA`sCl`As_C|QgZtLgC?~kApyAouAzCmIrTm_BpR|FtGuQpD{HtBwTyBiN_Fz@SVaV`NxGcMbP{KiC_FhFwDZK|DcIzA}CfEyJb@DF?E_Aj@e@_T`Q_FKoAoAKQSCaeBfoB|VygD",
    "shops": [{
      "shop_id": "eba77a94-5c3e-4259-aab8-383ab74c415f",
      "location": [-1.2053818, 36.778088]
    }, {
      "shop_id": "cb035861-cfc9-4a6f-b6f3-bc2168ca52f1",
      "location": [-1.2085543, 36.782707]
    }, {
      "shop_id": "0cbb6f39-c4d6-47eb-9d7f-81512754441b",
      "location": [-1.2047845, 36.776726]
    }, {
      "shop_id": "8a40e4bc-8319-4335-beaa-fa41d9b18279",
      "location": [-1.20039093494415, 36.7605743408203]
    }, {
      "shop_id": "a7811437-af04-46a4-a62e-25758d2910ae",
      "location": [-1.2001654, 36.76063]
    }, {
      "shop_id": "d18ecd11-4257-45f0-8071-1a551644d2b7",
      "location": [-1.20013165473938, 36.760498046875]
    }, {
      "shop_id": "0d35f27e-72cf-4a7a-a938-40783699c258",
      "location": [-1.1996682, 36.759205]
    }, {
      "shop_id": "00066d09-6e2e-4104-b03b-6927490e1972",
      "location": [-1.1998146, 36.758095]
    }, {
      "shop_id": "bc267140-d84f-4cae-b8f4-0abc79e9ee48",
      "location": [-1.2005719, 36.758205]
    }, {
      "shop_id": "e81807e4-c326-4ad0-a93f-0635cabbb1b8",
      "location": [-1.19844055175781, 36.7564239501953]
    }, {
      "shop_id": "69fca443-4ee9-4bd6-ac68-d83fd7dc0439",
      "location": [-1.19778621196747, 36.7554244995117]
    }, {
      "shop_id": "ef3344b1-3e33-483f-8ca2-2ccc8732d6bb",
      "location": [-1.1939117, 36.75028]
    }, {
      "shop_id": "9c904337-227f-4fc5-a93c-c2e81877c18e",
      "location": [-1.1933209, 36.747097]
    }, {
      "shop_id": "b656c503-b026-41b4-9678-dff89de54466",
      "location": [-1.1930238, 36.74696]
    }, {
      "shop_id": "92a8da71-a215-4d89-9535-cf970f7e54dd",
      "location": [-1.1929507, 36.746944]
    }, {
      "shop_id": "291420c5-d2f9-4ad5-a208-1576fb4d97ad",
      "location": [-1.1927685, 36.746998]
    }, {
      "shop_id": "5133b2dd-d389-4ad2-8371-c7c8409f921d",
      "location": [-1.192761, 36.746986]
    }, {
      "shop_id": "3b95132f-221a-41ae-b892-6ac4bd2c48f0",
      "location": [-1.1927432, 36.746998]
    }, {
      "shop_id": "58a00838-42e8-4898-81c0-c84ea9b9a404",
      "location": [-1.1936259, 36.746754]
    }, {
      "shop_id": "3f087c91-c5e1-4109-b031-851ad24f353b",
      "location": [-1.1936696, 36.746746]
    }, {
      "shop_id": "c253068c-abad-4d62-b88f-b499677914f9",
      "location": [-1.1936821, 36.746742]
    }, {
      "shop_id": "6f47fd70-d133-448d-8ee1-ff8720b35e65",
      "location": [-1.1926172, 36.744762]
    }, {
      "shop_id": "8ace153b-37e5-4727-80a8-98532bc29bee",
      "location": [-1.192589, 36.744648]
    }, {
      "shop_id": "efc085ab-c951-41bd-be41-04931f1be073",
      "location": [-1.1923516, 36.74345]
    }, {
      "shop_id": "4f97d996-0888-4d73-b808-4e7974a58264",
      "location": [-1.1922446, 36.743317]
    }, {
      "shop_id": "4ee4fcd9-12cc-4ea5-bd2e-6d640dc3b612",
      "location": [-1.1923229, 36.743233]
    }, {
      "shop_id": "377b0666-b8f1-42a8-84f1-5800090ae195",
      "location": [-1.1923609, 36.743164]
    }, {
      "shop_id": "e9d24395-d697-44c7-bb44-051ab1e747f0",
      "location": [-1.1922224, 36.74304]
    }, {
      "shop_id": "8c43b81e-462c-454d-bfd5-fa609f9ae81b",
      "location": [-1.1921115, 36.742622]
    }, {
      "shop_id": "646871ed-41d6-4661-a671-bf2981d9d318",
      "location": [-1.1798584, 36.718933]
    }, {
      "shop_id": "f635326d-dbc9-4422-a28d-7e16a69e4d14",
      "location": [-1.1903342, 36.739513]
    }, {
      "shop_id": "c8bcbb21-47d8-4715-9a4c-1041325fb8f8",
      "location": [-1.1933638, 36.74387]
    }, {
      "shop_id": "af369643-63ef-4d14-a631-151a8334092b",
      "location": [-1.1955484, 36.744545]
    }, {
      "shop_id": "881b2264-f5f6-405c-9a69-ec6df969a028",
      "location": [-1.19554853439331, 36.7322311401367]
    }, {
      "shop_id": "ebe479b3-04ba-4905-bf49-a215320ed8e1",
      "location": [-1.2100438, 36.746067]
    }, {
      "shop_id": "ee260888-95bd-4522-902d-ea72c0a4059a",
      "location": [-1.2108219, 36.747738]
    }, {
      "shop_id": "b4efe0ee-d5a5-498e-889c-293f6825f129",
      "location": [-1.2142768, 36.763165]
    }, {
      "shop_id": "4beccdda-b0d8-49cc-9f31-fec4003384fd",
      "location": [-1.2174069, 36.7619]
    }, {
      "shop_id": "50d5706b-9182-4329-8e80-5166f8e7a399",
      "location": [-1.2188001, 36.764893]
    }, {
      "shop_id": "513fc9d5-2269-4f08-8889-b338c259e190",
      "location": [-1.2196867, 36.766468]
    }, {
      "shop_id": "9788446f-3b5e-4f43-927b-de9bd38b4370",
      "location": [-1.2202764, 36.76995]
    }, {
      "shop_id": "6b3a8cf1-cfa1-4640-9e8e-57fe4ae6358d",
      "location": [-1.2196724, 36.772396]
    }, {
      "shop_id": "ba28b708-0415-42ef-ab74-867ca779a623",
      "location": [-1.2185463, 36.772095]
    }, {
      "shop_id": "2687de4a-4116-4dfd-9132-54639613ef7a",
      "location": [-1.2184486, 36.771984]
    }, {
      "shop_id": "34dbe44d-a588-4d1d-b9dd-1afaed2653d4",
      "location": [-1.214762, 36.769566]
    }, {
      "shop_id": "38661206-5f4c-4a80-add4-5d5bc18e7870",
      "location": [-1.2161729, 36.771828]
    }, {
      "shop_id": "f8b2da1f-2fa9-4932-933b-f90f262c50d0",
      "location": [-1.218908, 36.77389]
    }, {
      "shop_id": "1a49c20d-f842-42a5-a75a-835db6f8d00f",
      "location": [-1.2182221, 36.775013]
    }, {
      "shop_id": "e1da4790-6a59-4ba3-ba2c-7a0b31188da2",
      "location": [-1.2193857, 36.775925]
    }, {
      "shop_id": "00069d0b-c994-4555-a30e-0c0799d77fe1",
      "location": [-1.2195334, 36.775993]
    }, {
      "shop_id": "7f5312b3-bcbc-47ca-bb96-c716417e5a2c",
      "location": [-1.2204808, 36.777607]
    }, {
      "shop_id": "16f8f63d-a30c-4336-8025-7c9205154259",
      "location": [-1.2209437, 36.7784]
    }, {
      "shop_id": "605c04af-c87d-4f4e-9246-e0abd99b9b2a",
      "location": [-1.2219445, 36.78029]
    }, {
      "shop_id": "ef10363c-8214-42a9-80b8-d865a87a188f",
      "location": [-1.2221162, 36.780262]
    }, {
      "shop_id": "5f28db91-ee14-48a4-92b2-079328030fab",
      "location": [-1.2221615, 36.78026]
    }, {
      "shop_id": "6c91ad9c-4b2a-433e-a103-f6c8f7cf8f90",
      "location": [-1.222127, 36.78058]
    }, {
      "shop_id": "8c475fc7-0996-44e1-9519-ec2dfe25f212",
      "location": [-1.2223524, 36.780773]
    }, {
      "shop_id": "2cb27c73-00e4-4531-891b-2f38989c0ce5",
      "location": [-1.2189945, 36.777878]
    }, {
      "shop_id": "ddd2e15b-0c89-4afd-a2d8-7bd4a571e43d",
      "location": [-1.2178729, 36.777935]
    }, {
      "shop_id": "7cb47c68-3c84-4344-8ffa-2c17e33025fc",
      "location": [-1.2174743, 36.77834]
    }, {
      "shop_id": "91a7f88d-627b-4480-99c4-8a2a2747412b",
      "location": [-1.2174093, 36.77843]
    }, {
      "shop_id": "d912fa44-ea37-43e2-8ff3-5dea4312b0d0",
      "location": [-1.2173086, 36.77845]
    }, {
      "shop_id": "7cb4663c-981d-410a-9710-fce9dcff7bbf",
      "location": [-1.2009766, 36.760487]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Utawala",
    "route_id": "6a9cfdbb-6da0-4a76-a28d-40121cce78bb",
    "matrix_info": {
      "DistanceMatrixAPI requests": 121,
      "cache_hit": "90%"
    },
    "distance": "37.53km",
    "path": "dsfG_se`FqoJqgHoKaCoEtIgHwIwWmRwF~BYb@epAhLaHs\\f^gFEQbQiCrUfDtBrGrJ}c@mCsDlAmDnAwAaBcC`GbBDFuS|BwFdA_QiTuB{NvI{LfDsD|PkCn@vAGCzs@f`B@BxN~XnAbC`A]dpJxqH",
    "shops": [{
      "shop_id": "926a767c-d004-4dc6-9991-65204b8ff795",
      "location": [-1.2908165, 36.945366]
    }, {
      "shop_id": "659cbbef-dcfe-4669-9de2-b2271057666a",
      "location": [-1.2888188, 36.946022]
    }, {
      "shop_id": "80367113-12a9-4cd6-815f-2e627aacae6f",
      "location": [-1.2877778, 36.944305]
    }, {
      "shop_id": "3b2c0f6e-d7b3-42cb-b9a1-1f09923245e6",
      "location": [-1.2862978, 36.946033]
    }, {
      "shop_id": "66fc6d73-cc6f-4e8b-8552-e184831a6865",
      "location": [-1.2823431, 36.949135]
    }, {
      "shop_id": "35213f45-0255-423e-9ddf-4b4c878b8f39",
      "location": [-1.2810986, 36.948505]
    }, {
      "shop_id": "0a8cc0b5-8774-40ee-b423-f3cae5aaee18",
      "location": [-1.2809707, 36.948315]
    }, {
      "shop_id": "2fa99215-66de-4749-9d1b-7bd1c1bd56a3",
      "location": [-1.2679795, 36.946186]
    }, {
      "shop_id": "29fc795d-3737-4153-ad81-2cfacfba3d5a",
      "location": [-1.2665256, 36.950928]
    }, {
      "shop_id": "bffe28c2-777a-4ce6-96f8-22c44c8e7b01",
      "location": [-1.27153027057648, 36.9520874023438]
    }, {
      "shop_id": "46ba5188-1a4d-464e-a907-234df1a0738f",
      "location": [-1.2715008, 36.95218]
    }, {
      "shop_id": "37fc75f5-2f64-48c9-88b7-0bd402a6f7e9",
      "location": [-1.27440249919891, 36.9528694152832]
    }, {
      "shop_id": "0f976068-3d2a-4402-9cee-ae415b0d9e3b",
      "location": [-1.2780205, 36.952026]
    }, {
      "shop_id": "55efb8e9-cdfe-4af4-ad1e-c835c89751b9",
      "location": [-1.2786093, 36.95065]
    }, {
      "shop_id": "d5101e1e-79f9-415d-aae1-265b038a3af0",
      "location": [-1.2804708, 36.956562]
    }, {
      "shop_id": "e08f6724-0380-4d0f-bb86-022c927d885f",
      "location": [-1.2797632, 36.957455]
    }, {
      "shop_id": "b055749c-f641-4ff3-8478-1d7f04a1d1ab",
      "location": [-1.2801487, 36.95833]
    }, {
      "shop_id": "c040417f-ed84-412c-b607-9e52544eaf64",
      "location": [-1.28054714202881, 36.9587745666504]
    }, {
      "shop_id": "15171890-2911-4c7b-97cb-d73b62d53255",
      "location": [-1.28006, 36.959427]
    }, {
      "shop_id": "b0423bd8-e25d-469e-bcf3-c9b70fc975c3",
      "location": [-1.2813535, 36.95893]
    }, {
      "shop_id": "1ae4ca89-dc1f-4c34-8062-284cbaf5f443",
      "location": [-1.2813804, 36.958893]
    }, {
      "shop_id": "2574e6f8-b5fd-42c9-ae2d-0596c744eccd",
      "location": [-1.2780651, 36.95826]
    }, {
      "shop_id": "53790f03-9b80-4b8c-8b4e-3da2d87c5e91",
      "location": [-1.2768292, 36.95791]
    }, {
      "shop_id": "9cc11e21-a7cf-4d7c-9804-247522658a04",
      "location": [-1.2739458, 36.96132]
    }, {
      "shop_id": "a35ea147-a5f8-485b-ae5b-d5e6de816a8d",
      "location": [-1.2733599, 36.963856]
    }, {
      "shop_id": "f972020c-6520-4326-a897-320d3267a9b6",
      "location": [-1.27508187294006, 36.9660758972168]
    }, {
      "shop_id": "6e2d851d-7551-45a2-9a65-b31392177a70",
      "location": [-1.2759221, 36.966984]
    }, {
      "shop_id": "8593f2fa-0b55-4d87-a9eb-3b3b54261051",
      "location": [-1.2787888, 36.96768]
    }, {
      "shop_id": "9198d3d9-4965-4bb2-89ab-4d70c90cc54d",
      "location": [-1.2790254, 36.967236]
    }, {
      "shop_id": "d4e9f5d6-e6b8-4a76-9077-38bb605866d9",
      "location": [-1.2789855, 36.96726]
    }, {
      "shop_id": "e77050ff-9b08-44c0-8780-a9138d8c3688",
      "location": [-1.2874523, 36.9517]
    }, {
      "shop_id": "14de7c4d-78f4-4907-8736-1eff0e7a7c33",
      "location": [-1.2874628, 36.951675]
    }, {
      "shop_id": "b4c5e7a5-4743-4a25-b141-39909dff6bfe",
      "location": [-1.2899914, 36.947517]
    }, {
      "shop_id": "74d2f5b8-3e34-4363-9deb-3c3d4e998ee4",
      "location": [-1.2903928, 36.94686]
    }, {
      "shop_id": "faeeb6e6-5016-4409-985b-66e0a2d5c390",
      "location": [-1.2907237, 36.94701]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Upper Rongai",
    "route_id": "e26f7e87-5356-4e56-b7aa-5c37cb04635f",
    "matrix_info": {
      "DistanceMatrixAPI requests": 303,
      "cache_hit": "83%"
    },
    "distance": "69.11km",
    "path": "zipGwtf_FyYlb@{AtA{R|QkCo@f@tCILECoBdBcKoCzU}Dr@y@zA}@rOEG\\`F`YHErMjIvc@tr@f@p@xB}GCWvb@eA~Clk@pb@`Pf@cAf[vcAns@kQoo@vb@xGlFAChDxD|rApXbvVkcTA^DDADj@GDE?WrNdNafYndTGGa]t_AmxCahK",
    "shops": [{
      "shop_id": "75d57783-29be-43bc-8598-045703e62338",
      "location": [-1.395206, 36.733807]
    }, {
      "shop_id": "efd4db34-a928-4199-b4f1-883e0daaf1b1",
      "location": [-1.3947451, 36.733383]
    }, {
      "shop_id": "3932d904-8554-4c32-9acf-c8060dbcffb1",
      "location": [-1.3915673, 36.730347]
    }, {
      "shop_id": "67252dbf-5568-4acf-bb2c-760e17b6c88c",
      "location": [-1.3908681, 36.73059]
    }, {
      "shop_id": "1e2aac0a-24c3-4955-8220-6866a8f0c0b9",
      "location": [-1.3910747, 36.729843]
    }, {
      "shop_id": "69015a21-d8a4-4f0b-9967-d6e52234cbbe",
      "location": [-1.3910195, 36.729767]
    }, {
      "shop_id": "e69bb69e-c85d-4cc5-af75-091127a2f3e4",
      "location": [-1.3909928, 36.729786]
    }, {
      "shop_id": "b312f627-57e5-4af4-8b46-0605b8e13271",
      "location": [-1.3904278, 36.729275]
    }, {
      "shop_id": "18d9ca8c-c9b4-4b5f-b2d1-15db4a5ca034",
      "location": [-1.388488, 36.730003]
    }, {
      "shop_id": "f5a48e6f-6079-4151-8c6a-d8e17626081a",
      "location": [-1.3921492, 36.730953]
    }, {
      "shop_id": "bb99e399-bc4f-4f60-a831-834f7de63adc",
      "location": [-1.3924133, 36.731236]
    }, {
      "shop_id": "a81738e5-529b-49b7-b836-a272bd98b25d",
      "location": [-1.3928674, 36.731552]
    }, {
      "shop_id": "19db0432-baaa-45d7-a3b2-09249e5c1d80",
      "location": [-1.395528, 36.73158]
    }, {
      "shop_id": "ab672b1d-eaac-49a8-9274-e1886fb9f5c7",
      "location": [-1.3954871, 36.73143]
    }, {
      "shop_id": "27768f36-4df4-4b4e-a7ce-c48bf3bd0066",
      "location": [-1.3966169, 36.727257]
    }, {
      "shop_id": "c6ab2ccd-59fb-4af8-9326-52c423cd1d64",
      "location": [-1.396671, 36.72729]
    }, {
      "shop_id": "651a1123-c631-429b-bc6f-0bcedd827ca8",
      "location": [-1.39900863170624, 36.7256278991699]
    }, {
      "shop_id": "b24f5699-4604-41d9-8604-1a236c4683b6",
      "location": [-1.4048876, 36.71736]
    }, {
      "shop_id": "c435fb62-ed34-4a19-98ce-d1a2f314c94c",
      "location": [-1.405091, 36.717106]
    }, {
      "shop_id": "0522c3c3-f97c-4081-95d3-d33507d5997d",
      "location": [-1.40570187568665, 36.7185401916504]
    }, {
      "shop_id": "cdbcda58-c9a6-4f36-a5b8-275cce0b8bde",
      "location": [-1.4056768, 36.718662]
    }, {
      "shop_id": "b7c67445-1e43-4e92-a02d-89e36cf7f06f",
      "location": [-1.4113955, 36.71901]
    }, {
      "shop_id": "8c5dc613-4abc-4e7f-9dfb-a249c592e129",
      "location": [-1.4121974, 36.7119]
    }, {
      "shop_id": "ba78f826-a74d-417c-b486-8d333acbae72",
      "location": [-1.4178855, 36.709167]
    }, {
      "shop_id": "dd16eafc-ce8a-4339-b3be-77eeb78d28fe",
      "location": [-1.4180863, 36.70951]
    }, {
      "shop_id": "7553166e-ec3c-4d92-ab29-371e19bd975c",
      "location": [-1.4226114, 36.69851]
    }, {
      "shop_id": "133b464d-97f3-4ed7-be2c-9e45983b5d31",
      "location": [-1.4310058, 36.70145]
    }, {
      "shop_id": "d2f94604-bd49-413b-89cb-c7aac10144b0",
      "location": [-1.4232539, 36.695732]
    }, {
      "shop_id": "9d6167d0-c0bc-4956-9dee-91d66416e51d",
      "location": [-1.4246583, 36.69454]
    }, {
      "shop_id": "f8fd344a-b378-4c4b-bfeb-90ee6b0284cc",
      "location": [-1.42465126514435, 36.6945571899414]
    }, {
      "shop_id": "d3146b56-de06-423d-8a6f-2bcf73cdbd43",
      "location": [-1.4255035, 36.693626]
    }, {
      "shop_id": "2db0748a-8c10-4f80-9b9d-d8b4c02024dd",
      "location": [-1.438927, 36.68954]
    }, {
      "shop_id": "66223d50-f2ae-4971-a7ea-a521025173b4",
      "location": [-1.560389, 36.797764]
    }, {
      "shop_id": "91fa72e6-0df8-473c-969d-aa373bd4a25b",
      "location": [-1.56037724018097, 36.7976036071777]
    }, {
      "shop_id": "daf9f5cd-57c7-4816-8b5b-b9dcbb918243",
      "location": [-1.5604059, 36.79757]
    }, {
      "shop_id": "934b4ed4-146c-4857-86e6-49c7a749006e",
      "location": [-1.5604017, 36.797543]
    }, {
      "shop_id": "c067a657-52f5-4887-be88-97e482301a9a",
      "location": [-1.5606169, 36.797577]
    }, {
      "shop_id": "04d0552c-4d9e-4040-9bd8-9d9160d9062a",
      "location": [-1.5606464, 36.79761]
    }, {
      "shop_id": "dce41b0e-4da3-41c8-9e67-3e34261ad635",
      "location": [-1.560647, 36.79773]
    }, {
      "shop_id": "c9aaf72c-3f7d-408a-8715-7b7184705840",
      "location": [-1.5631468, 36.795303]
    }, {
      "shop_id": "53bd8fe6-8080-47e0-b01d-cb34a03eec64",
      "location": [-1.4289044, 36.6869]
    }, {
      "shop_id": "c89afcf1-aa3e-4512-ad02-dcc216f43365",
      "location": [-1.4288605, 36.68694]
    }, {
      "shop_id": "51061812-f744-4fd5-aef0-877825abcb20",
      "location": [-1.4240528345108, 36.676586151123]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Umoja 2/3",
    "route_id": "08b2bccd-e7c0-46d4-9beb-746ad7cd6de7",
    "matrix_info": {
      "DistanceMatrixAPI requests": 371,
      "cache_hit": "78%"
    },
    "distance": "9.76km",
    "path": "`h{F{`g`Fy[aAsMnc@?y@@ON|UtHCqDIsMbE~@z@y@h@tDn@?wA_G}CWDeC}B_Eh@?@{g@mCdEY|@qCzC_@PDtCjC~@}DkBa@`D`F^KzJuLQBKq@jH_Cr@hFHrAbCqC`Ai@BS\\e@{@U`HoANEQQ`Af@tl@g\\",
    "shops": [{
      "shop_id": "748d3661-18b5-4405-a587-1542b6741947",
      "location": [-1.2870783, 36.905586]
    }, {
      "shop_id": "97f4e29c-9dce-40c1-85d1-f9700f2ff855",
      "location": [-1.284738, 36.899746]
    }, {
      "shop_id": "2aec8130-1a6b-4a75-a5ab-1da11483734f",
      "location": [-1.2847393, 36.90004]
    }, {
      "shop_id": "24b6af24-a7df-4992-9223-43b3bd74fe33",
      "location": [-1.2847533, 36.900124]
    }, {
      "shop_id": "6edfed06-03df-4c0b-a041-7c37e8ff3837",
      "location": [-1.2848324, 36.896454]
    }, {
      "shop_id": "45ec8f1d-f0f7-4bf9-820c-a621b9ecd088",
      "location": [-1.2863796, 36.896465]
    }, {
      "shop_id": "e695846a-068b-4b83-a02d-69b217fbaf42",
      "location": [-1.2854867, 36.896523]
    }, {
      "shop_id": "4ba544ec-30d7-42ce-a427-8ef910441514",
      "location": [-1.283146, 36.895542]
    }, {
      "shop_id": "5906738c-6990-4275-aa4b-ee067da443bc",
      "location": [-1.28346884250641, 36.8952369689941]
    }, {
      "shop_id": "a4246d9d-0f4d-4ec1-822a-a2830acc1446",
      "location": [-1.28318452835083, 36.8950309753418]
    }, {
      "shop_id": "ab2be8fb-ec5b-43de-91d6-c8376a8a7987",
      "location": [-1.28408908843994, 36.8947906494141]
    }, {
      "shop_id": "fc724d99-2bf5-454d-9edf-518d0c600e7b",
      "location": [-1.28409147262573, 36.8952331542969]
    }, {
      "shop_id": "2f45cc13-26a0-49d3-aee2-d8d0d14a7132",
      "location": [-1.2828099, 36.896015]
    }, {
      "shop_id": "d361e18a-61fc-49a5-9892-2b8b55d17908",
      "location": [-1.2826935, 36.895985]
    }, {
      "shop_id": "b77036bb-07eb-4e09-acc2-8564038f2b61",
      "location": [-1.28202414512634, 36.8966217041016]
    }, {
      "shop_id": "e0d4245c-0c32-4416-94a6-3c12fbdd5d61",
      "location": [-1.2810566, 36.896408]
    }, {
      "shop_id": "3b83acf1-3be7-40d9-9e7f-d687df6053ff",
      "location": [-1.28105580806732, 36.8964042663574]
    }, {
      "shop_id": "6d627ebf-7492-40df-b2c1-3406347f69a7",
      "location": [-1.2745209, 36.897114]
    }, {
      "shop_id": "60400c74-f0ff-4ae2-a743-21c69b6cbc63",
      "location": [-1.2755101, 36.897236]
    }, {
      "shop_id": "a9ca5c41-0be6-40f9-bf21-8194d3ff11fa",
      "location": [-1.2758229, 36.897972]
    }, {
      "shop_id": "eab699e4-bdeb-4994-ab32-f1a244992014",
      "location": [-1.2766035, 36.89813]
    }, {
      "shop_id": "32d00b4a-5bc5-470d-82aa-6ee548d9cb54",
      "location": [-1.2766927, 36.8981]
    }, {
      "shop_id": "4775de5c-eee0-490f-8298-75711f75e8ee",
      "location": [-1.2774446, 36.897404]
    }, {
      "shop_id": "8b5e7389-001a-4fe9-93d6-e9268454251e",
      "location": [-1.2777556180954, 36.8983497619629]
    }, {
      "shop_id": "bd5c573d-6281-4ead-aa19-2d8fc6a6aef6",
      "location": [-1.2772238, 36.89852]
    }, {
      "shop_id": "991a2cb9-98f2-409f-a6dd-20b76bcac18a",
      "location": [-1.2780282, 36.897392]
    }, {
      "shop_id": "25943a6d-fdde-4868-98dd-793f339bb3fb",
      "location": [-1.2781925, 36.897453]
    }, {
      "shop_id": "c8a13323-2215-44bf-ac94-17b410fdaf6f",
      "location": [-1.2800868, 36.899635]
    }, {
      "shop_id": "69a52f96-2504-4139-bd5a-4a8a75aa82c5",
      "location": [-1.2800035, 36.8996182]
    }, {
      "shop_id": "af890f1b-ca8c-4117-bb2e-a9933b8b609c",
      "location": [-1.27994, 36.89987]
    }, {
      "shop_id": "fbee7714-a21d-4ce9-8a31-ad19e4c57e58",
      "location": [-1.2814401, 36.90051]
    }, {
      "shop_id": "2a3c104c-1523-4f93-a03b-9202fb021d09",
      "location": [-1.2816983, 36.89934]
    }, {
      "shop_id": "30f4a767-69d1-457c-9f41-5ebd70c67c7d",
      "location": [-1.2817473, 36.898922]
    }, {
      "shop_id": "1f4b0762-8728-4a9a-bc94-7041f1e02684",
      "location": [-1.28241395950317, 36.8996467590332]
    }, {
      "shop_id": "cca20562-6150-45bb-905c-29d4f3e3c388",
      "location": [-1.2827429, 36.89986]
    }, {
      "shop_id": "0c0457e1-53cc-4053-91a6-f79376a4e608",
      "location": [-1.2827642, 36.89996]
    }, {
      "shop_id": "2a381d83-1d2b-4192-b62c-d0b628a38b07",
      "location": [-1.2829139, 36.900146]
    }, {
      "shop_id": "ef1526ae-f348-4bba-bb7a-948ed37f2ef0",
      "location": [-1.28261077404022, 36.900260925293]
    }, {
      "shop_id": "4cbc78c6-bfe0-4c49-b4b5-118dd74a573b",
      "location": [-1.2840644, 36.900665]
    }, {
      "shop_id": "1c8d0f51-787b-4d54-85ac-65992f58bde7",
      "location": [-1.2841426, 36.90069]
    }, {
      "shop_id": "ad38dcc6-79f2-4562-8017-d842f6fc8f70",
      "location": [-1.2840492, 36.900784]
    }, {
      "shop_id": "20a2f0d9-42f9-46b0-a6ac-8533a4a1fba6",
      "location": [-1.2843796, 36.900578]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ngong Bulbul",
    "route_id": "8f7a1712-b837-41a9-b2e0-ec699c21207b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 1281,
      "cache_hit": "69%"
    },
    "distance": "48.96km",
    "path": "zipGwtf_FwSbGkGiOiEu@w~AtiB?EiEeGwB]YTgRjBtQbUgJyHuCzDa@~@ME]GKQgAgAbCdFeGcDlAvFOA}@`AUGLl@y@z@k@jAyBxAeAjAoBxBmAdA}B`CqeDnkEw\\~e@K?mBrDiANADo@rEyLwGQsDe@lOuFuBmw@~q@k]vi@mNfDm@GsADs`@~Uhu@a_@e@EAExAGbb@{l@fs@gb@EAhC|ADZt@w@|AjBde@r]lmEceC`vEmyBy@xAa`BchCGHlh@kp@",
    "shops": [{
      "shop_id": "caf07d41-aecb-4694-aaa2-e54b3e1e0c92",
      "location": [-1.3961817, 36.738182]
    }, {
      "shop_id": "718c3499-cfb0-43e4-9901-c017f3cdddc2",
      "location": [-1.3948405, 36.74079]
    }, {
      "shop_id": "d29d5655-4cfa-4d86-b368-826cf4184720",
      "location": [-1.3938338, 36.74106]
    }, {
      "shop_id": "29345910-75df-4037-9524-f65e9b7e4333",
      "location": [-1.3785129, 36.72399]
    }, {
      "shop_id": "7c19ebfb-e684-4987-a11a-86049fdf9f92",
      "location": [-1.3785088, 36.72402]
    }, {
      "shop_id": "a22a412a-3397-43a6-9878-bc01c85d520d",
      "location": [-1.3774992, 36.725334]
    }, {
      "shop_id": "bcb35b09-f355-42c4-8bea-7a89588f3850",
      "location": [-1.3769037, 36.725483]
    }, {
      "shop_id": "63f98f43-f884-46af-9a17-5096801e6026",
      "location": [-1.37676894664764, 36.7253684997559]
    }, {
      "shop_id": "64692f23-8f75-44fd-b77c-3c2fb8c48640",
      "location": [-1.3736949, 36.72483]
    }, {
      "shop_id": "da798959-2f5d-4aa5-abba-f27cc8ea7267",
      "location": [-1.3766786, 36.721287]
    }, {
      "shop_id": "a2f24015-93db-4051-8541-e6aa7c44bb7d",
      "location": [-1.3748846, 36.72286]
    }, {
      "shop_id": "6b0c84e5-1df7-4d54-9a4a-e46c3b93d459",
      "location": [-1.3741263, 36.72192]
    }, {
      "shop_id": "eb6e29ef-9260-4ec8-af11-c44a6969fd87",
      "location": [-1.3739613, 36.721596]
    }, {
      "shop_id": "0123307e-50b3-412e-8625-4b1817209135",
      "location": [-1.37389290332794, 36.7216262817383]
    }, {
      "shop_id": "534b3e1e-a466-448e-9975-a867a61356c1",
      "location": [-1.3737378, 36.721672]
    }, {
      "shop_id": "e20e4890-442b-4c9c-b7fd-351b259f7705",
      "location": [-1.3736798, 36.721756]
    }, {
      "shop_id": "88b56644-45ac-40b0-bba8-626d033d4ef3",
      "location": [-1.3733155, 36.72212]
    }, {
      "shop_id": "3376027b-a9b3-4615-a33c-3ec3145ea8d3",
      "location": [-1.3739797, 36.720974]
    }, {
      "shop_id": "7c06c327-91fd-4899-a77b-722bf932bcf6",
      "location": [-1.3726708, 36.721794]
    }, {
      "shop_id": "a8ee8846-6c43-4603-b4fe-3de8957392a8",
      "location": [-1.3730623, 36.720547]
    }, {
      "shop_id": "f1ce6cba-39da-4e1f-af48-8960fa80f2c3",
      "location": [-1.3729821, 36.720562]
    }, {
      "shop_id": "e82be6b5-c80c-43c4-b77f-45aa3e86379d",
      "location": [-1.3726683, 36.72023]
    }, {
      "shop_id": "5a23c2c1-cf4d-492f-867d-f2a088041dce",
      "location": [-1.3725566, 36.72027]
    }, {
      "shop_id": "e2a5ec00-9646-470f-86da-d022b570ee85",
      "location": [-1.3726312, 36.72004]
    }, {
      "shop_id": "5f4341d8-9608-4b4b-a91a-6977f7b8744e",
      "location": [-1.3723352, 36.719738]
    }, {
      "shop_id": "aec77aac-cbb2-4ab9-a945-caacd7f7bf4d",
      "location": [-1.3721169, 36.719357]
    }, {
      "shop_id": "97081ad5-93a6-46c1-974f-5b817c34c5fe",
      "location": [-1.3715082, 36.71891]
    }, {
      "shop_id": "0dc44a6d-dea5-4412-80c2-e4cd02e30b5b",
      "location": [-1.3711553, 36.71853]
    }, {
      "shop_id": "126ab5ec-1910-4745-9fa4-dfc759cdd3c2",
      "location": [-1.3705984, 36.71792]
    }, {
      "shop_id": "7887a7c8-47b9-4df7-94ea-2c822ac5b13d",
      "location": [-1.3702147, 36.717575]
    }, {
      "shop_id": "614d9387-38a6-4d1c-86ff-cc1f8ab38d8a",
      "location": [-1.3695774, 36.716915]
    }, {
      "shop_id": "575c1dde-d495-4d75-8d41-3fe41458eb5c",
      "location": [-1.3429319, 36.684196]
    }, {
      "shop_id": "d8db63a9-f2d3-4bf2-b3fa-f0f8e0f91dbb",
      "location": [-1.3381684, 36.677956]
    }, {
      "shop_id": "6d4a0fc5-dafe-4bfa-91f2-332343c532c0",
      "location": [-1.3381125, 36.677956]
    }, {
      "shop_id": "9031ca99-4e16-4b0a-9db8-0cc12c0f9a26",
      "location": [-1.3375556, 36.677055]
    }, {
      "shop_id": "d0a0dc88-5ffb-4be1-bfe3-3e984d7c5347",
      "location": [-1.3371942, 36.67698]
    }, {
      "shop_id": "d5656c9f-dea1-4ffe-8cdb-d2b12895ad42",
      "location": [-1.3371835, 36.67695]
    }, {
      "shop_id": "45d17ceb-8ee0-4435-8c44-02b1a2f317de",
      "location": [-1.3369392, 36.675888]
    }, {
      "shop_id": "83d45dc0-29b2-458e-83ac-4f5fd6b4e93d",
      "location": [-1.3347255, 36.67729]
    }, {
      "shop_id": "6463874c-b40a-4938-baa5-59c4c3d57621",
      "location": [-1.3346394, 36.678185]
    }, {
      "shop_id": "36faddcb-e035-4a1b-b53a-ae67a2202282",
      "location": [-1.3344495, 36.67556]
    }, {
      "shop_id": "20406aae-9a15-4e54-a95e-e024281cb0cd",
      "location": [-1.3332217, 36.676147]
    }, {
      "shop_id": "9f3e4145-0bcd-4593-b6bb-d11fc5ad3a82",
      "location": [-1.3241909, 36.66799]
    }, {
      "shop_id": "b0eca38c-b6b0-4eba-973f-303bffb11820",
      "location": [-1.3193277, 36.661148]
    }, {
      "shop_id": "a2a968fa-1034-40da-adc4-ce39add62b61",
      "location": [-1.3168567, 36.660313]
    }, {
      "shop_id": "3173a995-e3e2-4127-916b-b64597055ea1",
      "location": [-1.316625, 36.66035]
    }, {
      "shop_id": "75d48092-65fe-458e-8fc5-e4c532fbd5f0",
      "location": [-1.3162059, 36.660316]
    }, {
      "shop_id": "7adf7fdb-58cc-4097-b80f-0175342b9636",
      "location": [-1.3108327, 36.65664]
    }, {
      "shop_id": "ada72ac2-d168-445d-893a-6678181538c4",
      "location": [-1.3195233, 36.661766]
    }, {
      "shop_id": "c6337639-4a27-4f20-9e50-c21b8cf16a5e",
      "location": [-1.3193254, 36.6618]
    }, {
      "shop_id": "2dd536e1-6690-4386-91d4-e2027f039acf",
      "location": [-1.3193179, 36.661827]
    }, {
      "shop_id": "7366a6bf-2bc3-4937-8891-cc3fe280ee6e",
      "location": [-1.3197674, 36.661865]
    }, {
      "shop_id": "5a503b92-9419-4fda-a9eb-edd70fc88755",
      "location": [-1.3253887, 36.669205]
    }, {
      "shop_id": "21c44a43-a77d-4d9d-af0a-9389c1edb220",
      "location": [-1.333754, 36.67485]
    }, {
      "shop_id": "8602357d-f20c-4881-98bc-e7369d357f7f",
      "location": [-1.3337182, 36.67486]
    }, {
      "shop_id": "0034bcba-eb40-4456-a8c6-1c7b3dfbb09c",
      "location": [-1.3344096, 36.67439]
    }, {
      "shop_id": "dfd9cc63-42a1-4dc3-b227-ec34106f5432",
      "location": [-1.3344431, 36.674248]
    }, {
      "shop_id": "e06aac88-23fc-469c-8015-05d380173840",
      "location": [-1.3347099, 36.674534]
    }, {
      "shop_id": "346c8bad-58a2-4a2d-acad-ae8b234d81f8",
      "location": [-1.3351752, 36.67399]
    }, {
      "shop_id": "3baa3be9-48e1-4d73-8d76-48ceb17d0b65",
      "location": [-1.3412898, 36.66909]
    }, {
      "shop_id": "535a3a8c-700c-4db6-ba0b-86f126aab548",
      "location": [-1.3743156, 36.690548]
    }, {
      "shop_id": "0459f82a-df2f-4e51-981a-eedf8ed3356f",
      "location": [-1.4087344, 36.71014]
    }, {
      "shop_id": "cc1f1d15-e0cc-4e84-807e-d6b36748a905",
      "location": [-1.4084369, 36.70969]
    }, {
      "shop_id": "b8979d40-6e55-4056-8496-0a1eb93c53d1",
      "location": [-1.392908, 36.731625]
    }, {
      "shop_id": "75fcb485-91df-4637-ba18-cec8d7007f3b",
      "location": [-1.3928686, 36.731575]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Upper South C",
    "route_id": "3ecdc817-8cad-4aac-ae9e-221964b5f945",
    "matrix_info": {
      "DistanceMatrixAPI requests": 185,
      "cache_hit": "92%"
    },
    "distance": "12.27km",
    "path": "tz|Fmdx_FzgAjByAb@A@@@FC~MlD~EwPpFh@nVxFF@?@pGxDT?H@b@XOdCcAtEWh@ABHFoTfm@Rr@x@MQe@@g`@Yg@I?oAAkB]wDwAgAzF}Bx@vJhA_LV_BpA{@YoAYwAuFfJaKdBWv@f@pEU}A}ERiBJaAAQNSEMAMEG_Aj@}C_Be~AeE",
    "shops": [{
      "shop_id": "ab04e9cd-8b47-4158-9a02-a83a8b6f4037",
      "location": [-1.3114457, 36.828495]
    }, {
      "shop_id": "08a2c479-38e0-4143-8fed-d7f85ead32f3",
      "location": [-1.3109994, 36.82831]
    }, {
      "shop_id": "8a1487a7-d80b-4f3c-9492-bfbe5276b6c4",
      "location": [-1.3109932, 36.8283]
    }, {
      "shop_id": "da6955d0-03e3-45e5-bbe6-e05aba815599",
      "location": [-1.311001, 36.82829]
    }, {
      "shop_id": "33b744d5-86d3-4d86-9cb0-f372340a3584",
      "location": [-1.3110399, 36.828312]
    }, {
      "shop_id": "280432e8-973c-413d-8cf7-ddffeac43d7f",
      "location": [-1.3134437, 36.827435]
    }, {
      "shop_id": "e7418da9-d3d2-464a-be4e-9413e9515061",
      "location": [-1.31456398963928, 36.8302841186523]
    }, {
      "shop_id": "138fe6d5-a6e3-4721-a7cd-41b8468593a9",
      "location": [-1.31577289104462, 36.8300743103027]
    }, {
      "shop_id": "7f8b1b9c-3d22-426c-ae57-61e348daf1f4",
      "location": [-1.3195322, 36.828815]
    }, {
      "shop_id": "f8c7995d-a01f-4f99-9f4f-ac62d2dfce34",
      "location": [-1.319565, 36.828808]
    }, {
      "shop_id": "e2c7e463-e4c7-4491-8180-81052f4594e7",
      "location": [-1.319571, 36.8288]
    }, {
      "shop_id": "5aecb5cd-2065-4bab-a90e-da551f8f8791",
      "location": [-1.320935, 36.827873]
    }, {
      "shop_id": "6047c0a4-279e-43e5-9407-e16a0e6b0c29",
      "location": [-1.3210483, 36.82787]
    }, {
      "shop_id": "9e01f28d-7fc4-4942-bbbd-cc760cf11eca",
      "location": [-1.3211035, 36.82786]
    }, {
      "shop_id": "7dac8f43-5f23-4f67-bb80-dde9cf136da5",
      "location": [-1.3212783, 36.82773]
    }, {
      "shop_id": "12f27bd9-068b-4379-b3a6-df0c429aa251",
      "location": [-1.3212012, 36.827065]
    }, {
      "shop_id": "f8d478f6-6406-4415-93cf-656aa4ad1b67",
      "location": [-1.3208596, 36.82599]
    }, {
      "shop_id": "09916200-bc55-4aa2-bd90-9612cf75cb06",
      "location": [-1.320741, 36.825783]
    }, {
      "shop_id": "6907b873-7449-448f-8917-6acdc7644dfb",
      "location": [-1.320728, 36.825764]
    }, {
      "shop_id": "26964f2e-3c47-4ea0-ac67-2716f79fc1cc",
      "location": [-1.3207781, 36.825718]
    }, {
      "shop_id": "e0fd93af-a178-4603-b963-a92c7f60f493",
      "location": [-1.3173403, 36.818317]
    }, {
      "shop_id": "396e085f-e261-478a-abb2-8b7ab3fadd54",
      "location": [-1.3174433, 36.81806]
    }, {
      "shop_id": "628cbdfc-b754-406e-9d16-b0a85c1e49a9",
      "location": [-1.3177317, 36.81813]
    }, {
      "shop_id": "8b882e36-3a50-4d89-9474-9c09a5bfce7f",
      "location": [-1.3176421, 36.818317]
    }, {
      "shop_id": "078b8c6c-1550-48a6-abc1-645cec17d100",
      "location": [-1.3176545, 36.823643]
    }, {
      "shop_id": "d4506098-9399-4769-ba99-6496dfe5727b",
      "location": [-1.3175246, 36.82384]
    }, {
      "shop_id": "22ae7b76-32d6-4c2b-8f64-9d6d29e2705c",
      "location": [-1.3174717, 36.82384]
    }, {
      "shop_id": "966dff29-7f08-4320-ab12-b1241ec92f72",
      "location": [-1.3170717, 36.823845]
    }, {
      "shop_id": "546c4412-ee68-479e-87c0-32de0d512b3b",
      "location": [-1.3165329, 36.823997]
    }, {
      "shop_id": "be962540-244e-4b80-9ace-eaac9271f1b1",
      "location": [-1.3156054, 36.824444]
    }, {
      "shop_id": "fed19a8c-3d7a-4f1d-9081-15dc21f461a2",
      "location": [-1.3152518, 36.823177]
    }, {
      "shop_id": "9817e746-247c-4959-97f9-98cbe9eb0d5f",
      "location": [-1.3146242, 36.82289]
    }, {
      "shop_id": "d88904d7-3aa6-4cae-890e-23d4e280bdb2",
      "location": [-1.316495, 36.82252]
    }, {
      "shop_id": "13103489-8002-4ffd-af91-bb9eaab0fe94",
      "location": [-1.3144244, 36.822395]
    }, {
      "shop_id": "ca78ddd9-5d73-4639-b4a1-e46f2a8ecd91",
      "location": [-1.3139353, 36.82199]
    }, {
      "shop_id": "d9c5e3a9-aa1e-4ac2-a3d6-c926dff0d741",
      "location": [-1.3136432, 36.822124]
    }, {
      "shop_id": "9f49173a-46e6-4e62-b1b4-f4ec68eb1aab",
      "location": [-1.313242, 36.822254]
    }, {
      "shop_id": "f22882de-b28c-4273-b494-0311e4b94935",
      "location": [-1.3128031, 36.82348]
    }, {
      "shop_id": "3360aa55-9828-4ae2-86a5-037723e6c609",
      "location": [-1.3146008, 36.825405]
    }, {
      "shop_id": "edbb717c-0f24-4b88-a973-71ba655373f8",
      "location": [-1.3151065, 36.82553]
    }, {
      "shop_id": "85ec8c29-4f68-4a45-a213-ec81ca9ee5d1",
      "location": [-1.315388, 36.825333]
    }, {
      "shop_id": "9140eac1-dc37-495e-b920-952c9efc1605",
      "location": [-1.3164375, 36.825443]
    }, {
      "shop_id": "ee0cd701-b4dc-4c4a-9554-8703c3e5e562",
      "location": [-1.3159698, 36.82655]
    }, {
      "shop_id": "332b6096-f5a2-4d8d-83ca-fa1b814b8cb1",
      "location": [-1.316065, 36.827084]
    }, {
      "shop_id": "cb8268d6-e9ff-4763-a63e-a712f5fa1aa8",
      "location": [-1.3161329, 36.82741]
    }, {
      "shop_id": "f5489f85-0c2e-4ebc-93f1-86d8f4d570dd",
      "location": [-1.3161157, 36.827503]
    }, {
      "shop_id": "977fb9c0-aa2b-4fb5-a23f-8522c3c56742",
      "location": [-1.3161982, 36.8276]
    }, {
      "shop_id": "97d0a739-2cfd-4833-9518-3532fa1c5595",
      "location": [-1.3161682, 36.82767]
    }, {
      "shop_id": "f1d8a5be-7e8e-4c03-8afc-03941f94721b",
      "location": [-1.3161553, 36.82774]
    }, {
      "shop_id": "5f51d868-52e4-41b9-a204-e9a6d846fe46",
      "location": [-1.3161305, 36.827778]
    }, {
      "shop_id": "a20c68e3-eeee-4959-a503-db550a5d72ef",
      "location": [-1.3158063, 36.827564]
    }, {
      "shop_id": "20bba024-7011-4267-8375-daf7b34e607f",
      "location": [-1.315019, 36.828037]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Thika Town 1",
    "route_id": "da74cef1-d78e-483a-89a5-514acf867182",
    "matrix_info": {
      "DistanceMatrixAPI requests": 707,
      "cache_hit": "75%"
    },
    "distance": "28.13km",
    "path": "l~mEa_raF?AftAjfBosCtuAwMrGCPLpBNNHFnArBsA`@GfAEZ@j@oFiB[A}EoKwf@la@c@BgCvFzBlCfHxCfBt@hDrCiFjZwClTpA`[|R|\\~GbChExBeWg@_HeIuJHa@xGS[km@w]AOd^_YGgARC|Fv@oA}ZsAkF~CuIBWrFgC~f@mpANp@d@HVXd@Cbj@fGxB_NvCv@nF}Fl`@qdD",
    "shops": [{
      "shop_id": "293823a1-149d-4eeb-b53c-e8cbc766a571",
      "location": [-1.0597495, 37.12514]
    }, {
      "shop_id": "8a437302-2401-4ba6-9701-6f2821c7cffa",
      "location": [-1.0733941, 37.1086]
    }, {
      "shop_id": "ba00c3a4-acce-4693-8a47-81f2e3072eba",
      "location": [-1.0496331, 37.094734]
    }, {
      "shop_id": "09460387-bc3a-4b14-87b1-0564e6609093",
      "location": [-1.0472697, 37.09335]
    }, {
      "shop_id": "755ad7ba-52ab-4fef-bd83-3da7b2831e7a",
      "location": [-1.0472474, 37.093258]
    }, {
      "shop_id": "8ca161b9-fff8-4159-b35f-d66893a27875",
      "location": [-1.0473224, 37.092693]
    }, {
      "shop_id": "4dc957af-072d-4ad2-953c-fa1f7313e6ef",
      "location": [-1.0473984, 37.092613]
    }, {
      "shop_id": "c7028ff8-9fcc-4953-9103-2ce6077700f4",
      "location": [-1.04744625091553, 37.0925712585449]
    }, {
      "shop_id": "39dbc26c-ae59-4d05-8c55-b5e04710585b",
      "location": [-1.04784691333771, 37.0919914245605]
    }, {
      "shop_id": "7e85689e-9791-49da-bb8d-4acb997be2ee",
      "location": [-1.04742550849915, 37.0918159484863]
    }, {
      "shop_id": "26feee00-7835-40df-b1c2-a046d4c02d5c",
      "location": [-1.0473877, 37.091457]
    }, {
      "shop_id": "f4aeac9e-d690-47e9-9cf5-2318d1883d58",
      "location": [-1.0473624, 37.09132]
    }, {
      "shop_id": "3b6db933-564e-4173-b48e-868fc8e68e12",
      "location": [-1.0473653, 37.091095]
    }, {
      "shop_id": "8eea5adb-2ed4-46e5-975e-3a2d42637ba8",
      "location": [-1.0461687, 37.091625]
    }, {
      "shop_id": "d0ece38b-f670-4c41-b906-5d340717a6fc",
      "location": [-1.0460292, 37.091637]
    }, {
      "shop_id": "5b7ee46f-407a-41bd-a196-47f21433b449",
      "location": [-1.0449157, 37.093643]
    }, {
      "shop_id": "9fa88282-c68e-4b93-b458-88b100d56d3d",
      "location": [-1.0385596, 37.08813]
    }, {
      "shop_id": "f9e68e70-568f-49a6-bfe4-dbc36fda04c0",
      "location": [-1.0383847, 37.08811]
    }, {
      "shop_id": "8d5edb48-8f48-463a-abb3-9e380367a3da",
      "location": [-1.037702, 37.08687]
    }, {
      "shop_id": "679caa72-59d9-4244-b032-97ffbd9ed1f5",
      "location": [-1.0383168, 37.08616]
    }, {
      "shop_id": "274d4576-8510-489d-b86e-1a65a659d351",
      "location": [-1.03979825973511, 37.085391998291]
    }, {
      "shop_id": "68f1ef58-3a9a-490e-87b0-0e1cc5b439fe",
      "location": [-1.0403167, 37.08512]
    }, {
      "shop_id": "3a0abbef-c315-41da-af32-05b71bce4d8c",
      "location": [-1.0411664, 37.08438]
    }, {
      "shop_id": "6c0befc5-8817-4bda-9e11-32c5e193ff70",
      "location": [-1.04, 37.08]
    }, {
      "shop_id": "1b860f8e-5d50-4acd-a036-0d2bec39bdac",
      "location": [-1.039239, 37.076572]
    }, {
      "shop_id": "0a80c0d1-cafe-4540-b976-b6c30773aed9",
      "location": [-1.0396457, 37.07208]
    }, {
      "shop_id": "5a62bf69-ecb3-4556-b018-7a6489ca91d7",
      "location": [-1.04284, 37.067287]
    }, {
      "shop_id": "7992cc43-3fc4-4e1a-9bca-eb95d584c9d4",
      "location": [-1.044285, 37.066628]
    }, {
      "shop_id": "d74f11cd-6f6b-40ff-8ddb-175d6a32b7a5",
      "location": [-1.045290350914, 37.0660247802734]
    }, {
      "shop_id": "2c1cbf9f-d80c-40e3-a802-93dd8362e38f",
      "location": [-1.04141962528229, 37.0662155151367]
    }, {
      "shop_id": "7a1d2864-5ea6-4bef-bb21-350491326d09",
      "location": [-1.03998124599457, 37.0678482055664]
    }, {
      "shop_id": "bd3d1aae-468a-45a3-ba77-218b828e0076",
      "location": [-1.0381094, 37.067802]
    }, {
      "shop_id": "53ef770c-d730-4de1-a7f5-db413c4e390c",
      "location": [-1.0379432, 37.066387]
    }, {
      "shop_id": "fbdc6921-5947-4895-a8c5-d2241d7d2ff1",
      "location": [-1.037845, 37.06653]
    }, {
      "shop_id": "813c9b35-6583-4bac-9e98-69016e704286",
      "location": [-1.0304194688797, 37.0714454650879]
    }, {
      "shop_id": "7cbf3d5e-2934-4999-8b9a-ffef9749ef2d",
      "location": [-1.0304081, 37.07153]
    }, {
      "shop_id": "5b916775-9a2e-44de-99d7-7d2769b4cc62",
      "location": [-1.0354027, 37.07569]
    }, {
      "shop_id": "6067c372-bd45-4089-836a-454aaaadd3eb",
      "location": [-1.03535795211792, 37.0760536193848]
    }, {
      "shop_id": "7e95564f-ee37-4d60-9e30-60283ee91838",
      "location": [-1.03545749187469, 37.0760726928711]
    }, {
      "shop_id": "b259175c-b2dd-45ea-a2b7-ff215252199d",
      "location": [-1.03673, 37.07579]
    }, {
      "shop_id": "3c4d93a9-4114-4632-af29-2d2c70c0d308",
      "location": [-1.0363345, 37.080257]
    }, {
      "shop_id": "d30cb8a7-2f89-4f27-a2d1-df4c50120cc1",
      "location": [-1.0359054, 37.081436]
    }, {
      "shop_id": "2c5e36c5-dc42-4f58-a0dd-7d9fc2567490",
      "location": [-1.0367116, 37.083145]
    }, {
      "shop_id": "a9f2a49a-72c4-4494-83cb-3356bf0a210e",
      "location": [-1.0367323, 37.08327]
    }, {
      "shop_id": "45bb010b-e049-49fd-a188-8ac3d6f16e2b",
      "location": [-1.0379477, 37.08395]
    }, {
      "shop_id": "d6fbc054-5406-46ae-ba4f-05a3c24e2f53",
      "location": [-1.0443542, 37.09698]
    }, {
      "shop_id": "06fdb883-efea-46fa-bec9-682084b9e6e1",
      "location": [-1.0444263, 37.096725]
    }, {
      "shop_id": "44867222-48b0-4cdb-bc96-06e782c671f0",
      "location": [-1.0446184, 37.09668]
    }, {
      "shop_id": "af8d3f80-2aa2-4910-a657-ce3e5769b344",
      "location": [-1.0447445, 37.096546]
    }, {
      "shop_id": "3d247995-d769-4cba-abd9-dbb0fa988ff1",
      "location": [-1.04493, 37.09657]
    }, {
      "shop_id": "a9e538cd-0c7e-4b07-85e2-22312bfca1e8",
      "location": [-1.0518279, 37.09525]
    }, {
      "shop_id": "29142b56-b521-42ee-b3a9-92afcffc2b4d",
      "location": [-1.052437, 37.09765]
    }, {
      "shop_id": "42ace492-b8f8-43c8-bae1-aad4d32064b7",
      "location": [-1.0532022, 37.09737]
    }, {
      "shop_id": "136c7072-184d-4b7c-82e9-af908c205a98",
      "location": [-1.054402, 37.098644]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Tena/Umoja 1 Innercore",
    "route_id": "b64fc5cb-e6d4-467a-b7d7-2a89f4ea7546",
    "matrix_info": {
      "DistanceMatrixAPI requests": 862,
      "cache_hit": "62%"
    },
    "distance": "16.03km",
    "path": "`h{F{`g`Fg_Ajg@cBcEmAtE[pBiM~^~RdOzCbXPx@tHt@hChGgIiVjCk@`@yA@]bAVpBw@NhCxKf@l@wHlGuFzI`FxPhBmDXa@e@xIjEPzGgOrAOe@r@nCkM_PcIe^CUiA`@eAZI@\\b@w@RmJlA~NyGZ]mAeAgBtCqEgDCp@iL[~@iX~PsZrZeFzD{C",
    "shops": [{
      "shop_id": "d0b41cbe-14cd-4416-b0a5-559bf1475460",
      "location": [-1.2814098, 36.8988028]
    }, {
      "shop_id": "b6b7bf7d-ebdc-4b0a-906e-fa6e5e79f0b4",
      "location": [-1.28090929985046, 36.8997840881348]
    }, {
      "shop_id": "f476a65b-68ce-4df6-8169-fd9fea41df34",
      "location": [-1.2805228, 36.898705]
    }, {
      "shop_id": "462bd6f8-7a9f-45e3-9f37-3e38fecafada",
      "location": [-1.2803814, 36.89814]
    }, {
      "shop_id": "f358854c-a2bd-427a-837c-3c9e404df56e",
      "location": [-1.2780857, 36.893024]
    }, {
      "shop_id": "ffa2a674-b56a-4689-90f9-fe67e0cd16e5",
      "location": [-1.28129386901855, 36.8904342651367]
    }, {
      "shop_id": "6affc3f0-2486-4d8d-882e-8f414c125a0a",
      "location": [-1.2820663, 36.88641]
    }, {
      "shop_id": "eb51d14e-2e2d-4eee-941b-7586aa43745d",
      "location": [-1.28216338157654, 36.8861198425293]
    }, {
      "shop_id": "bc9ad6b6-2209-458f-b595-c984dd0ac96d",
      "location": [-1.2837051, 36.885845]
    }, {
      "shop_id": "6363a101-4499-43fc-bd8a-1c3e2fbf9473",
      "location": [-1.2844012, 36.884525]
    }, {
      "shop_id": "4440e564-3dd6-4b3a-a5a2-739209c7c2c7",
      "location": [-1.2827599, 36.888245]
    }, {
      "shop_id": "7ce513cb-08ef-4a36-a02b-406d14753b3b",
      "location": [-1.283455, 36.888474]
    }, {
      "shop_id": "f2d761fb-c1ae-4aaf-b031-3832bd4c9bd2",
      "location": [-1.2836255, 36.888916]
    }, {
      "shop_id": "b54f9912-394c-485b-bf85-1bbf6108027e",
      "location": [-1.2836424, 36.889065]
    }, {
      "shop_id": "4f6ca44a-75ed-4746-b5aa-d631592f1116",
      "location": [-1.283976, 36.88895]
    }, {
      "shop_id": "bebd9d7f-e5fc-48c7-a5be-6254820c0dba",
      "location": [-1.28455233573914, 36.8892250061035]
    }, {
      "shop_id": "1e9238a4-2a4a-46e2-855a-13e2efbf2083",
      "location": [-1.2846283, 36.888542]
    }, {
      "shop_id": "9f284d9a-5aed-4ada-9ee9-a342c2de9d9b",
      "location": [-1.28667724132538, 36.8883361816406]
    }, {
      "shop_id": "aee5df39-63ce-4b8c-976f-5249bc7935c8",
      "location": [-1.2869124, 36.889896]
    }, {
      "shop_id": "a06a56d9-260b-4baa-a635-a612d2ece933",
      "location": [-1.288255, 36.891125]
    }, {
      "shop_id": "5d443e8e-1076-48c7-96bc-5f2a4fac0d71",
      "location": [-1.29, 36.89]
    }, {
      "shop_id": "837c0045-2e11-4d9d-ad00-d88d990011b2",
      "location": [-1.29284512996674, 36.8894729614258]
    }, {
      "shop_id": "abcbff09-f399-4a1f-9381-c110e22026b7",
      "location": [-1.291983, 36.889336]
    }, {
      "shop_id": "64a4c2b1-0eba-4807-aa98-7fee49453d27",
      "location": [-1.2918059, 36.88953]
    }, {
      "shop_id": "ecc26bcf-5586-4817-ae88-eed055be8260",
      "location": [-1.2935435, 36.888508]
    }, {
      "shop_id": "4ea8aafc-be64-45fc-8807-6e75dca4ba52",
      "location": [-1.2936295, 36.887085]
    }, {
      "shop_id": "d462f148-89e2-4759-a4cf-d74aea62bb29",
      "location": [-1.2910346, 36.886673]
    }, {
      "shop_id": "c2bd3e32-f2f4-4260-bd3b-bebea1750683",
      "location": [-1.2909546, 36.88686]
    }, {
      "shop_id": "5df60025-6f5a-4097-964e-a1676cb5395c",
      "location": [-1.2912098, 36.886135]
    }, {
      "shop_id": "fa613a04-6d18-4934-ac02-85a7189d3f9e",
      "location": [-1.2889075, 36.88886]
    }, {
      "shop_id": "79ce9c22-d3ca-4026-802c-3e39ddb23f9e",
      "location": [-1.28728818893433, 36.8938522338867]
    }, {
      "shop_id": "3dd18666-5467-42cf-a948-ed272605fb96",
      "location": [-1.28726577758789, 36.8939628601074]
    }, {
      "shop_id": "860fe02e-eeb7-42f9-b8c4-2fd48047da3e",
      "location": [-1.2869016, 36.89379]
    }, {
      "shop_id": "b9c10ecd-9727-4b28-a053-da28e4af0267",
      "location": [-1.2865508, 36.893654]
    }, {
      "shop_id": "485e191b-4302-44e4-b699-a50809805acc",
      "location": [-1.28650271892548, 36.8936386108398]
    }, {
      "shop_id": "80046599-296d-4934-ab0c-6c4c3dd4c158",
      "location": [-1.2866467, 36.89346]
    }, {
      "shop_id": "62713ee8-1b04-4b99-a854-86f4b96b2c97",
      "location": [-1.28636586666107, 36.8933601379395]
    }, {
      "shop_id": "2530018d-800e-47dc-8dc6-483a44618ec1",
      "location": [-1.2845417, 36.89297]
    }, {
      "shop_id": "0b9d7eda-3470-4b9a-9dbc-0e10a2473952",
      "location": [-1.287104, 36.89438]
    }, {
      "shop_id": "616217ea-980b-4ff6-a6da-816783eac649",
      "location": [-1.2872415, 36.894535]
    }, {
      "shop_id": "d5619044-977a-4ef4-8bcb-6da2a41b73b4",
      "location": [-1.2868515, 36.894882]
    }, {
      "shop_id": "3390538d-92e9-4177-ba5d-55afefade736",
      "location": [-1.2863266, 36.89413]
    }, {
      "shop_id": "62355b37-d4b2-47e3-8dbe-46e2ad8e8667",
      "location": [-1.28527855873108, 36.8949661254883]
    }, {
      "shop_id": "2a9a6699-7d21-48bf-81c2-b1a74cbbe04d",
      "location": [-1.2852644, 36.89472]
    }, {
      "shop_id": "e53afba0-7411-4f8c-8fa4-d937b7084ec7",
      "location": [-1.2831327, 36.894863]
    }, {
      "shop_id": "6fa1d29c-19d5-40f2-92fb-eb7e7682cae0",
      "location": [-1.28344714641571, 36.8989143371582]
    }, {
      "shop_id": "a53866d4-4819-44b3-b3b6-96df93bb5bfe",
      "location": [-1.2863295, 36.903328]
    }, {
      "shop_id": "ca6a34bf-90c2-4b46-92b8-852e0278cc76",
      "location": [-1.2907493, 36.904476]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Utawala 2",
    "route_id": "d4956fd9-29c8-49c4-a84e-d5e6dad07be6",
    "matrix_info": {
      "DistanceMatrixAPI requests": 189,
      "cache_hit": "91%"
    },
    "distance": "115.17km",
    "path": "dsfG_se`FclKezIcm@owA@CY@gQ_mG??BE`[_{G|N}x@s@_DHSAM?AB?J@_AR|GkjDTUAsD@???C??E??A???JGBF@k@Bk@}g@{zDUagAN_HCEA?DGp]}vZL]EGu@\\GPA?i~A_yFKRtJmFbC}ApdCn}SuaAtg[tMdh@}@{ElfLdp_@",
    "shops": [{
      "shop_id": "a5777c5b-8568-4d85-868e-345535fafee0",
      "location": [-1.2862521, 36.953472]
    }, {
      "shop_id": "195e16ac-7f4c-4064-995b-41f8177ee1c5",
      "location": [-1.2788733, 36.96763]
    }, {
      "shop_id": "3e204239-b9de-4556-9b5f-da7bd0ce9049",
      "location": [-1.2788765, 36.967648]
    }, {
      "shop_id": "d8b75e59-448c-4f12-987a-2b2b0c2cca04",
      "location": [-1.2787452, 36.967644]
    }, {
      "shop_id": "912e53c6-1848-4675-b548-eb939b1e3f10",
      "location": [-1.2758272, 37.01084]
    }, {
      "shop_id": "fe9dc207-968c-4910-8cd8-92388f852d92",
      "location": [-1.2758307, 37.01084]
    }, {
      "shop_id": "6231c013-5b75-4533-b653-3fb1d7df8ba2",
      "location": [-1.2758476, 37.010868]
    }, {
      "shop_id": "cc44f862-2c2c-47b1-b2d8-f2947d59d311",
      "location": [-1.2803397, 37.056313]
    }, {
      "shop_id": "44aeb7e7-07b1-4417-b73b-c77b71c468d5",
      "location": [-1.2828919, 37.065582]
    }, {
      "shop_id": "4912d89d-776a-49e2-8f5b-9bac68324406",
      "location": [-1.2826319, 37.06638]
    }, {
      "shop_id": "751d5262-f7f0-4ed7-84c5-8c88b355bc88",
      "location": [-1.2826834, 37.06648]
    }, {
      "shop_id": "b138c6ec-d2fc-48d8-a56a-2963bc407206",
      "location": [-1.2826746, 37.06655]
    }, {
      "shop_id": "63155a98-475d-4789-b5b3-75f4f12aece1",
      "location": [-1.2826744, 37.06656]
    }, {
      "shop_id": "aed92b0f-fe2a-4275-8546-a5f00615e5da",
      "location": [-1.2826924, 37.066555]
    }, {
      "shop_id": "dd7d10cc-76f5-4d6b-8efa-a66a45c0fb61",
      "location": [-1.2827488, 37.06655]
    }, {
      "shop_id": "94da7a0b-6bbb-42c9-8d21-132600de080c",
      "location": [-1.2824322, 37.06645]
    }, {
      "shop_id": "1ea71c6f-4adb-4a72-a71e-5138e4eb90b4",
      "location": [-1.2838632, 37.09387]
    }, {
      "shop_id": "b1b1e649-fdf9-4eb7-b474-6b7d3b296e9a",
      "location": [-1.2839701, 37.093975]
    }, {
      "shop_id": "9ebc21ea-3186-4d4d-ac82-551b5d148811",
      "location": [-1.2839624, 37.094875]
    }, {
      "shop_id": "66e02026-7027-4828-8c81-f729c23a21cd",
      "location": [-1.2839653, 37.09488]
    }, {
      "shop_id": "6b26d465-e832-4fdc-80f4-3d6a7817403c",
      "location": [-1.283966, 37.09488]
    }, {
      "shop_id": "555820d7-4756-4e89-a912-0bbae72e375f",
      "location": [-1.2839549, 37.094875]
    }, {
      "shop_id": "4dbe78e9-7794-4794-af3c-fff2e5fd4d46",
      "location": [-1.2839497, 37.094906]
    }, {
      "shop_id": "dd3c99ef-19f7-45b8-96be-140d735997b7",
      "location": [-1.2839464, 37.094906]
    }, {
      "shop_id": "aa19cf66-d2b2-44fe-bfec-49f49809e248",
      "location": [-1.2839422, 37.094906]
    }, {
      "shop_id": "dafacd90-fb75-4b0a-b723-ac61067a253b",
      "location": [-1.2839369, 37.094913]
    }, {
      "shop_id": "a0939b1a-eadf-4f29-829e-05209c44c9be",
      "location": [-1.2840017, 37.09495]
    }, {
      "shop_id": "0ea93277-bc9e-4df6-8adc-4728bd8e51cb",
      "location": [-1.2840174, 37.094913]
    }, {
      "shop_id": "5106a0a9-290e-47e4-aad7-273eec1c4ca6",
      "location": [-1.2840266, 37.09513]
    }, {
      "shop_id": "332dc10b-17f2-483a-8614-7bb433264c93",
      "location": [-1.28404557704926, 37.0953483581543]
    }, {
      "shop_id": "c6de9702-ecd2-4085-96ee-231cf37d5ae9",
      "location": [-1.2775033, 37.125412]
    }, {
      "shop_id": "5e93f2a7-ca8c-44b0-9c73-4b935204ca5b",
      "location": [-1.2773904, 37.136936]
    }, {
      "shop_id": "89d76d01-d296-414a-97dd-ceaa6b192509",
      "location": [-1.2774736, 37.13838]
    }, {
      "shop_id": "95cad76d-a9f5-4c62-a28f-17d00dfe0adb",
      "location": [-1.2774506, 37.138405]
    }, {
      "shop_id": "0861f388-f6e6-4a2c-bd12-bcc07ae584fa",
      "location": [-1.2774446, 37.138405]
    }, {
      "shop_id": "1b0f7077-5725-4838-8d90-56984500d05c",
      "location": [-1.2774738, 37.138447]
    }, {
      "shop_id": "dbe4389d-7960-43ed-9ddc-9b34984524a9",
      "location": [-1.2823647, 37.280518]
    }, {
      "shop_id": "c26dd2a1-c074-4947-a2c6-e29e5ef67e65",
      "location": [-1.2824299, 37.28067]
    }, {
      "shop_id": "1067fe0b-ac0d-4998-853a-8eed5eeb3e0f",
      "location": [-1.2824006, 37.280712]
    }, {
      "shop_id": "8660cf02-2420-4fe4-b266-56ea7fa132de",
      "location": [-1.2821271, 37.28056]
    }, {
      "shop_id": "9de75833-f54d-4ec2-b83f-9993e1a0b7d9",
      "location": [-1.2820855, 37.280468]
    }, {
      "shop_id": "34e4174f-7e78-4179-97c4-46f9d6729a41",
      "location": [-1.2820822, 37.280468]
    }, {
      "shop_id": "618816ac-49d8-48c9-aaa2-86eaf8726115",
      "location": [-1.2668335, 37.32047]
    }, {
      "shop_id": "61360381-b14f-4552-adb4-774a848da3d7",
      "location": [-1.2667731, 37.320366]
    }, {
      "shop_id": "bce5e60e-f548-4fbf-9d8a-355235defb74",
      "location": [-1.2686431, 37.321556]
    }, {
      "shop_id": "d93be82c-10d5-4756-b748-1a5f6c79917d",
      "location": [-1.2693037, 37.322033]
    }, {
      "shop_id": "0103f94d-861e-4b4f-b8e5-e210a8b7ce9e",
      "location": [-1.2906702, 37.214752]
    }, {
      "shop_id": "79522528-ce13-4455-87db-e977f6d9f077",
      "location": [-1.28, 37.07]
    }, {
      "shop_id": "a0fae7f3-7f42-48d0-b45a-0ee09cd0afe7",
      "location": [-1.2823532, 37.063408]
    }, {
      "shop_id": "a7173043-1d7c-4e1c-b004-191e41925e7b",
      "location": [-1.2820389, 37.064507]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Thika Town 2",
    "route_id": "0ff144fc-39f4-4901-88ca-279e277de009",
    "matrix_info": {
      "DistanceMatrixAPI requests": 843,
      "cache_hit": "68%"
    },
    "distance": "30.15km",
    "path": "l~mEa_raF`@nuBp@rHUEeCvA{EaAqLtBJrMGRzCr@aBpBsKlUIOkGeAcCm@`@PhFfAXfGl@lAyJcQIDwjA|pDppDajApOg~@~IEjAsH}H}@g@lCoA[iFFw@_MnCuA|B|@nDu\\~GfPf@bFUGoCpDNxAzF}FxN~FbBuGeIkCeAaKbIiDMkJgCmIuBYxq@jAg]mWkAz@snAyhAqb@kf@",
    "shops": [{
      "shop_id": "0f52ed28-24c9-4f66-bce8-c6977ea6e718",
      "location": [-1.0599186, 37.10617]
    }, {
      "shop_id": "1537c321-cd94-43c3-bb0a-514cd326cb93",
      "location": [-1.0601689, 37.104633]
    }, {
      "shop_id": "f9fb5f9a-cd44-41fe-a38d-6ba608a4bb74",
      "location": [-1.0600611, 37.10466]
    }, {
      "shop_id": "eedcde44-da0a-41b0-8bf9-c53667554a85",
      "location": [-1.0593888, 37.104218]
    }, {
      "shop_id": "2aff51cf-5e86-4c2a-b4de-cd6985867d6b",
      "location": [-1.0582924, 37.104553]
    }, {
      "shop_id": "a984df9a-395e-49b1-a0e2-9d66669c260c",
      "location": [-1.0561188, 37.10396]
    }, {
      "shop_id": "9498f7ac-5468-475c-8f74-b504b26f4b25",
      "location": [-1.0561824, 37.10162]
    }, {
      "shop_id": "b412c706-121d-4ef3-88db-92588cef0e89",
      "location": [-1.0561433, 37.101517]
    }, {
      "shop_id": "14df03f5-c7fb-4487-9fb9-c21329c4eac6",
      "location": [-1.056923, 37.10126]
    }, {
      "shop_id": "2178d59b-8d1c-4450-b12c-82c9b936cb88",
      "location": [-1.0564284, 37.10069]
    }, {
      "shop_id": "1767b6ce-8e39-49d2-9bc8-ec3781a5c587",
      "location": [-1.0544077, 37.097103]
    }, {
      "shop_id": "50658a3f-20ab-4ef2-b4f8-5cd4a43664b0",
      "location": [-1.0543559, 37.097176]
    }, {
      "shop_id": "813f9583-d23b-4a34-aaf6-dd8c2ad1e69b",
      "location": [-1.0530154, 37.097527]
    }, {
      "shop_id": "7df9deb7-e312-4afe-8fb1-5d4b9eea7265",
      "location": [-1.0523612, 37.097763]
    }, {
      "shop_id": "40d2eaca-286e-4782-a277-3de115ac8481",
      "location": [-1.0525305, 37.09767]
    }, {
      "shop_id": "72e415d6-a2bd-478f-94bc-1139b9f5462b",
      "location": [-1.0537041, 37.09731]
    }, {
      "shop_id": "5dce9335-192b-4ba6-9f2d-32aa2b48fdd2",
      "location": [-1.0538338, 37.09599]
    }, {
      "shop_id": "36cc5fe5-c325-4026-9f3a-6a4c166d5a6e",
      "location": [-1.0540578, 37.0956]
    }, {
      "shop_id": "8de5b9cc-8262-4ff7-a633-0251fe753a9b",
      "location": [-1.0521736, 37.098495]
    }, {
      "shop_id": "06f78312-24fe-4ff7-ad8a-6ef98b18647a",
      "location": [-1.0521162, 37.098473]
    }, {
      "shop_id": "26db54e3-8869-47c2-9260-1fb8b485d39a",
      "location": [-1.04, 37.07]
    }, {
      "shop_id": "a013bfbc-10bc-4cb5-ab33-d52a5d5715e1",
      "location": [-1.0684128, 37.082012]
    }, {
      "shop_id": "829287d4-7926-4aaf-b23e-6df33961f52f",
      "location": [-1.0710585, 37.09213]
    }, {
      "shop_id": "4526f7a9-b205-4a1a-ace1-30e89894aa8a",
      "location": [-1.0728179, 37.092163]
    }, {
      "shop_id": "53259f40-fada-4af4-b06b-0d0c36709991",
      "location": [-1.0731972, 37.0937]
    }, {
      "shop_id": "c3cf23a1-910a-4e7a-a906-c879eb98213f",
      "location": [-1.0716054, 37.09401]
    }, {
      "shop_id": "24653713-f315-46c3-a432-9c9fd18b6328",
      "location": [-1.0714077, 37.093304]
    }, {
      "shop_id": "928d711f-e943-4d69-92b8-d0ef906a4be2",
      "location": [-1.0710146, 37.093437]
    }, {
      "shop_id": "4c31d9c6-b0d6-45fa-8b55-51e0a1e339a7",
      "location": [-1.069835, 37.093403]
    }, {
      "shop_id": "fce077d1-a8d5-47ef-8844-c0dcfd90fc31",
      "location": [-1.0695643, 37.095642]
    }, {
      "shop_id": "dd93f19d-74db-4ab3-80cb-6a7aa7a14a0c",
      "location": [-1.0702775, 37.096066]
    }, {
      "shop_id": "29cbbb8a-4033-47bf-a489-ea526cf74247",
      "location": [-1.0709103, 37.09576]
    }, {
      "shop_id": "47fc29bc-3631-4502-831b-198cb2d63e88",
      "location": [-1.0717946, 37.100506]
    }, {
      "shop_id": "c5389411-1082-4350-8ee4-3148a9d4f7af",
      "location": [-1.0732274, 37.09775]
    }, {
      "shop_id": "98cc65d6-4c74-47da-ba75-89eb4556d43f",
      "location": [-1.073427, 37.096607]
    }, {
      "shop_id": "c832ff15-c780-4138-b67d-d474a24cd8a0",
      "location": [-1.0733156, 37.09665]
    }, {
      "shop_id": "6fa0c664-c5ef-4d4a-8ccc-439de2eafc9f",
      "location": [-1.072598, 37.09576]
    }, {
      "shop_id": "d276a3db-792d-4325-bd41-b9df95a2c695",
      "location": [-1.0726786, 37.095314]
    }, {
      "shop_id": "fee404ed-8024-4dab-bf51-d0f010ea2c55",
      "location": [-1.0739388, 37.096584]
    }, {
      "shop_id": "000d4ec4-89bc-459c-ac8a-f935424f0bf6",
      "location": [-1.0764726, 37.0953]
    }, {
      "shop_id": "3229a645-a6ac-489a-b563-e890ab2db74a",
      "location": [-1.0769718, 37.096695]
    }, {
      "shop_id": "b3bfbc2a-158f-4760-b902-8a512b39ad28",
      "location": [-1.0753423, 37.09739]
    }, {
      "shop_id": "aef59e1a-89e2-4022-a903-8c08180c2097",
      "location": [-1.0749899, 37.099316]
    }, {
      "shop_id": "70791229-8035-4c40-a054-4f3c5556c2b2",
      "location": [-1.0766102, 37.100166]
    }, {
      "shop_id": "4ec23ab3-0b99-4556-8d19-4ceb7fe2c891",
      "location": [-1.0765369, 37.101994]
    }, {
      "shop_id": "9c42ee6e-a180-499e-9d79-97e445694588",
      "location": [-1.0758553, 37.103657]
    }, {
      "shop_id": "eb924ec5-24bb-4e6d-aed1-8db6914fe061",
      "location": [-1.0752672, 37.103794]
    }, {
      "shop_id": "89bdf773-9c2c-4014-9717-8edc0dc32a9a",
      "location": [-1.083401, 37.103405]
    }, {
      "shop_id": "bead3489-6cab-46c4-8738-33a9f9d6f359",
      "location": [-1.0785635, 37.10732]
    }, {
      "shop_id": "df56adf6-0664-4086-a4e4-ade0325dcff7",
      "location": [-1.0781816, 37.107018]
    }, {
      "shop_id": "b4e49fe7-2738-4423-8ccf-7d562101c6a5",
      "location": [-1.0654367, 37.118828]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Westlands",
    "route_id": "9e805ae4-3124-4236-a64d-acf18e71d4d1",
    "matrix_info": {
      "DistanceMatrixAPI requests": 313,
      "cache_hit": "81%"
    },
    "distance": "34.97km",
    "path": "`z|Fedx_FcqDdjC?KaCwPoF~E}LtEeB]cB_DiZl\\~JxDjHe@JiGxJ~Q_Ivz@@oCyb@bm@nVap@aKk]dPtz@JDTLWn@qWaDbV{Uc[xW]kp@wD`DhD~MjAe^wEyUmGWzCmJ`@AE[pJhCiBgFyVcl@?BNNT[uDaApNiiB~eGa@",
    "shops": [{
      "shop_id": "e8de12cf-f29f-40a2-bfa6-43302907bbfa",
      "location": [-1.2711945, 36.806717]
    }, {
      "shop_id": "d069fc54-3688-421c-91a9-c704e563b485",
      "location": [-1.2711914, 36.806778]
    }, {
      "shop_id": "a9269e0e-fa94-4ee3-827d-24ad0d170778",
      "location": [-1.2705396, 36.80962]
    }, {
      "shop_id": "e9f63b6f-3849-46b9-89de-bd0cbb0fd9aa",
      "location": [-1.2693354, 36.808502]
    }, {
      "shop_id": "b6637623-0428-4c2f-b73e-854c83e4b6dd",
      "location": [-1.2671063, 36.807426]
    }, {
      "shop_id": "eacb056c-794c-45f1-bb80-fb95814469f4",
      "location": [-1.2666044, 36.807583]
    }, {
      "shop_id": "3335e76f-8ccd-4718-bdef-41fa51369a13",
      "location": [-1.266096, 36.80838]
    }, {
      "shop_id": "cf5c84b8-7526-4f51-beb4-8aeb7c5bcf71",
      "location": [-1.261728, 36.803673]
    }, {
      "shop_id": "caef6a50-b5fc-4c60-8b9d-d714464ee3ee",
      "location": [-1.2636458, 36.80274]
    }, {
      "shop_id": "ce58755d-ed06-45e8-8df1-16f1ec64b766",
      "location": [-1.265146, 36.802933]
    }, {
      "shop_id": "648a2c19-a11e-462f-b260-a1a1641c8b49",
      "location": [-1.2652093, 36.804264]
    }, {
      "shop_id": "7addb4d8-efeb-4912-8d71-3f9d04515f9f",
      "location": [-1.2671001, 36.80122]
    }, {
      "shop_id": "920344ce-605a-4db3-8929-6d938568fd94",
      "location": [-1.2655004, 36.791664]
    }, {
      "shop_id": "55ffcc4e-6262-4e4b-9347-dc6639f24337",
      "location": [-1.2655073, 36.792377]
    }, {
      "shop_id": "5d8c1834-5b1f-4ea9-9519-6a49732967e8",
      "location": [-1.259784, 36.785]
    }, {
      "shop_id": "c60a5115-00a7-44b2-80e8-a1b404a59182",
      "location": [-1.2635357, 36.792854]
    }, {
      "shop_id": "c494e25e-9c3e-4a67-b22b-356ca95b6bf7",
      "location": [-1.2616086, 36.797714]
    }, {
      "shop_id": "b9fc55eb-ee73-4def-a7b3-5189b4219b23",
      "location": [-1.2643579, 36.788155]
    }, {
      "shop_id": "1bcee2ae-8063-4dd9-b58e-37aca6baba76",
      "location": [-1.2644217, 36.788128]
    }, {
      "shop_id": "8e8af160-4998-4fa9-8cd9-55f0c8ecb286",
      "location": [-1.264533, 36.78806]
    }, {
      "shop_id": "c422d494-1897-4b56-97a7-52c02b757117",
      "location": [-1.2644088, 36.787815]
    }, {
      "shop_id": "eb6df004-c127-488d-8e6d-3d7766c954d5",
      "location": [-1.2604773, 36.78863]
    }, {
      "shop_id": "dc802507-0e38-421d-8489-ca1353aec6a1",
      "location": [-1.2641788, 36.792294]
    }, {
      "shop_id": "534dd55c-3a42-4658-89ad-da4a5c810fff",
      "location": [-1.259679, 36.78832]
    }, {
      "shop_id": "34f5ae95-0a8a-42ed-a20d-ce0ca427f815",
      "location": [-1.25953, 36.79622]
    }, {
      "shop_id": "47ee82e8-da3a-4256-9cf2-2a70cecf8376",
      "location": [-1.2586122, 36.795406]
    }, {
      "shop_id": "d38e1d14-5a12-4e2e-b48b-7aa4d02049e2",
      "location": [-1.2594619, 36.793015]
    }, {
      "shop_id": "cb61ea89-304d-4845-9b53-4615ed050df3",
      "location": [-1.2598395, 36.798]
    }, {
      "shop_id": "88b3eba0-03a9-4a29-a4af-3b74be4abe98",
      "location": [-1.2587645, 36.80165]
    }, {
      "shop_id": "4045fea2-5d55-4709-a401-8b364fd40c25",
      "location": [-1.257409, 36.801765]
    }, {
      "shop_id": "4f32c532-b1d0-4acb-b195-d4bb10e6cdd7",
      "location": [-1.2581872, 36.8036]
    }, {
      "shop_id": "b1c7642a-3fae-4a4c-918b-91c47d6e778a",
      "location": [-1.25836, 36.803608]
    }, {
      "shop_id": "619e9199-6e0c-4cb8-a1cf-7ceadf74d3f8",
      "location": [-1.2583303, 36.80375]
    }, {
      "shop_id": "54d7b073-c196-4ccd-b6f0-a18ae8f77580",
      "location": [-1.2601846, 36.803062]
    }, {
      "shop_id": "397fabbe-4f60-4aa7-bef0-15d986ba1c33",
      "location": [-1.2596458, 36.80422]
    }, {
      "shop_id": "4731e431-e211-4d51-82d8-e6d25ed40708",
      "location": [-1.2558433, 36.811436]
    }, {
      "shop_id": "c6e098db-1aaa-4f4e-bc2f-9d53728cdde1",
      "location": [-1.2558358, 36.81142]
    }, {
      "shop_id": "888cf5fa-f75a-4083-96a6-0485f6671699",
      "location": [-1.2559195, 36.811337]
    }, {
      "shop_id": "6f8ed1c4-00e0-41d5-b3a7-793d00f3df14",
      "location": [-1.2560328, 36.811478]
    }, {
      "shop_id": "889ed282-a54c-4d1b-9650-acfb1ce1e79f",
      "location": [-1.25511634349823, 36.8118095397949]
    }, {
      "shop_id": "a8fa04eb-d04d-4110-b767-cc620c60048c",
      "location": [-1.2576079, 36.828815]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Wanginge",
    "route_id": "b7797862-72ad-449a-9b6e-0e6517e3f298",
    "matrix_info": {
      "DistanceMatrixAPI requests": 286,
      "cache_hit": "88%"
    },
    "distance": "68.48km",
    "path": "`z|Fedx_FclNfiUiIpIuh@fwHuV`DuHhCy\\dRaDjAgOvMMCuE|AvMnFxcAk[yA`@~Jo@TQdV|NeA_@fDrHUVPzA^f@pA`KpNnLoG_H]iAYeAnA}Ang@aVOBq@b@iTpL{f@w]q@eEtoAsgAtk@qD{JpJ`dBstAm@x@sBfDgOlVhHd@MP}@?hBlBFe@@G?El@tE`OmLoQuAhfIm`\\",
    "shops": [{
      "shop_id": "5371251d-c3c6-4f96-ab5d-58d5a5a0ca93",
      "location": [-1.2207859, 36.714706]
    }, {
      "shop_id": "c3e63499-7454-4072-b219-856e85067600",
      "location": [-1.2191381, 36.713024]
    }, {
      "shop_id": "2a2c8b65-ab09-4416-b4b2-fcdcf460af3c",
      "location": [-1.212467, 36.66306]
    }, {
      "shop_id": "ed2f59d5-2cda-4376-98e8-921b53347f77",
      "location": [-1.2086847, 36.662254]
    }, {
      "shop_id": "4a4cf6df-3395-40c0-967b-9aa2780b9df8",
      "location": [-1.2071259, 36.661564]
    }, {
      "shop_id": "7bf641ad-897f-460a-9807-d71cd40c4f52",
      "location": [-1.2023609, 36.65849]
    }, {
      "shop_id": "a71b3207-0f86-4ac8-b86f-3de3691ae1d6",
      "location": [-1.201548, 36.658108]
    }, {
      "shop_id": "8ce525f3-1497-45af-b8b7-42fbb8cd5d30",
      "location": [-1.1989534, 36.655754]
    }, {
      "shop_id": "25696bd8-422d-46cf-8e13-5e77c76a09ac",
      "location": [-1.1988775, 36.655773]
    }, {
      "shop_id": "19392149-d03e-444c-a84e-624eff9b934e",
      "location": [-1.1978137, 36.6553]
    }, {
      "shop_id": "12940b12-2687-45d4-841c-8608cd7b3c3f",
      "location": [-1.2001728, 36.654095]
    }, {
      "shop_id": "44badcc6-9b8e-4145-8731-932bd75fb658",
      "location": [-1.2111816, 36.65864]
    }, {
      "shop_id": "73a3f600-232a-4e9a-a7c1-c249966765af",
      "location": [-1.2107303, 36.658466]
    }, {
      "shop_id": "18eb3751-f3d0-40f7-bf91-799d02a3f016",
      "location": [-1.2126479, 36.65871]
    }, {
      "shop_id": "fef2a2c3-7ae9-4c3e-8272-0aee3c43ffd5",
      "location": [-1.2127618, 36.658802]
    }, {
      "shop_id": "3cb263ba-ef88-47ac-9264-e2ad2b4eec64",
      "location": [-1.2164688, 36.65625]
    }, {
      "shop_id": "f5160f4d-6557-4395-8a57-c57fd591d3ee",
      "location": [-1.2161164, 36.656406]
    }, {
      "shop_id": "1ca37d04-1a0b-4b7e-83c9-d0ee4501d908",
      "location": [-1.2169555, 36.654873]
    }, {
      "shop_id": "a0e82b74-cc63-4d05-b06d-30aa543dcba3",
      "location": [-1.2168463, 36.65475]
    }, {
      "shop_id": "6b269755-fcfa-4906-8da4-29c800ff3633",
      "location": [-1.2169435, 36.65429]
    }, {
      "shop_id": "cd372851-df25-4c17-b2bf-61a8e9954c35",
      "location": [-1.2171043, 36.654087]
    }, {
      "shop_id": "e115be9b-fdb9-4c2b-a97a-4bac980b3df6",
      "location": [-1.2175068, 36.652157]
    }, {
      "shop_id": "077431a2-cdf6-46e1-a198-c06cbbc9dbb4",
      "location": [-1.22, 36.65]
    }, {
      "shop_id": "c3779d68-9bde-4203-93a3-aa5b0bd8c28d",
      "location": [-1.2186404, 36.651443]
    }, {
      "shop_id": "ea2477d2-1572-477a-85d5-aed2116287e2",
      "location": [-1.2184873, 36.65181]
    }, {
      "shop_id": "184a86ab-31e3-43ca-8f0d-c9878b3ec024",
      "location": [-1.2183561, 36.65216]
    }, {
      "shop_id": "8cb88630-27cd-4814-8ca8-ed2ef3d15b91",
      "location": [-1.2187581, 36.652634]
    }, {
      "shop_id": "a6a45344-4ff0-4d5e-956d-4954c2a2d061",
      "location": [-1.225241, 36.656322]
    }, {
      "shop_id": "e05d669e-5083-472d-9db8-d7f8f9771b21",
      "location": [-1.2251564, 36.656303]
    }, {
      "shop_id": "d94d8298-3953-4ea9-aa70-267cbbca4fa0",
      "location": [-1.224907, 36.65612]
    }, {
      "shop_id": "6f0ba888-46a6-4c05-bc72-55e581b3ccc7",
      "location": [-1.2215027, 36.653954]
    }, {
      "shop_id": "a9897d6a-3cc7-4501-b1e4-bd110cb99a0c",
      "location": [-1.2151204, 36.65887]
    }, {
      "shop_id": "3bf349f4-5850-45c2-9c7e-94168779666d",
      "location": [-1.2148676, 36.659855]
    }, {
      "shop_id": "a495947c-b84e-4f2d-b7db-f67de8e389ad",
      "location": [-1.2277756, 36.671482]
    }, {
      "shop_id": "f304cd39-b3cf-4385-bdb4-5ba573168bad",
      "location": [-1.2349343, 36.67237]
    }, {
      "shop_id": "fd39ce47-9b15-4bbe-8500-3b63bb5ffbb5",
      "location": [-1.2330315, 36.67052]
    }, {
      "shop_id": "f84f545e-1c30-4dcf-9440-213e8c32a7fc",
      "location": [-1.2492013, 36.684223]
    }, {
      "shop_id": "2730ff96-4b12-46ba-af1e-27cba7b75360",
      "location": [-1.2489736, 36.683933]
    }, {
      "shop_id": "5354033d-e1e5-4a64-ae4b-4ffa1f9338fc",
      "location": [-1.2483895, 36.683086]
    }, {
      "shop_id": "d444bd13-7b0a-4229-9973-b1cdbd4d8fc1",
      "location": [-1.2457879, 36.67934]
    }, {
      "shop_id": "90263d58-0d56-4209-b290-3608939a9293",
      "location": [-1.2472848, 36.67915]
    }, {
      "shop_id": "77502397-bb63-490c-a7f4-2fb4a6c89b19",
      "location": [-1.2472118139267, 36.6790618896484]
    }, {
      "shop_id": "ffff7e5c-6fe8-4dfa-b843-df7bbc5ef1c2",
      "location": [-1.2469039, 36.67906]
    }, {
      "shop_id": "ecff73de-2f7c-40b4-9885-a2f32672d293",
      "location": [-1.247425, 36.678505]
    }, {
      "shop_id": "02e71dd0-7465-4593-aa9b-c2d994cdb719",
      "location": [-1.2474651, 36.6787]
    }, {
      "shop_id": "5aadc1e7-f2d1-47a5-b8f6-7e1ac85ef866",
      "location": [-1.247477, 36.67874]
    }, {
      "shop_id": "816a9068-2ba0-48ec-8363-39298bce1f2d",
      "location": [-1.2474777, 36.678772]
    }, {
      "shop_id": "56179181-66e4-4b53-af37-61154c20fa71",
      "location": [-1.2477107, 36.6777]
    }, {
      "shop_id": "0b44f4bb-450f-43b1-a887-16fd553fbc40",
      "location": [-1.2502792, 36.679848]
    }, {
      "shop_id": "bb2d08e9-8aaf-4848-9d34-439625826d2b",
      "location": [-1.2473159, 36.680275]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Zimmerman",
    "route_id": "00d7a3ea-7667-4f2c-a51d-e011c6f1bcc5",
    "matrix_info": {
      "DistanceMatrixAPI requests": 529,
      "cache_hit": "76%"
    },
    "distance": "115.87km",
    "path": "|qoF_r``FadBkoCeAAmEiCo@NkEaAo@~B{Ew@hC}JyM_MDqCI_@}C_@yA{BdB}MJGwae@cNxt`@jPnBzh@~sBlWh@fAsA^{IoC?y@bD?xIySkJaOARjSnP_AbCtDiA|@xGe@Id@vAbJaBF_DJgAx@nCfB|AxAf@z@LHQr@p@ZPx@R~AfApB^zhSaFuzOrmC",
    "shops": [{
      "shop_id": "36be3f6f-f905-4197-b834-88ee297e934b",
      "location": [-1.2156608, 36.895264]
    }, {
      "shop_id": "6ab15097-0a32-413e-8f57-5c180d94e640",
      "location": [-1.2153103, 36.89527]
    }, {
      "shop_id": "f327ff87-43ba-4204-80ff-f79a870c49bf",
      "location": [-1.2142752, 36.89596]
    }, {
      "shop_id": "a1861fea-cda5-4e51-bdc1-8b3f6422bf34",
      "location": [-1.2140412, 36.895878]
    }, {
      "shop_id": "e9989835-6e3e-4b20-b9d8-f57ef6da4be9",
      "location": [-1.2130159, 36.896214]
    }, {
      "shop_id": "6382675e-74de-425e-be88-e363144eb842",
      "location": [-1.2127807, 36.895565]
    }, {
      "shop_id": "a5e8cc20-5cde-4bd9-a247-e89ff11e6b01",
      "location": [-1.2116774, 36.895855]
    }, {
      "shop_id": "8c0d83ea-75af-4d86-8fb5-7fc411501ead",
      "location": [-1.212374, 36.897762]
    }, {
      "shop_id": "b1c2cbb9-eaf0-4b89-85cb-47e76718ae74",
      "location": [-1.21, 36.9]
    }, {
      "shop_id": "2a3bf2b8-3da2-45b4-b29f-6d51d85e347c",
      "location": [-1.2100344, 36.900726]
    }, {
      "shop_id": "e82dc1eb-2d5b-456a-9c66-4f0a3d851b95",
      "location": [-1.209977, 36.90089]
    }, {
      "shop_id": "52ede0ed-0ba0-419e-9463-588b3c041d09",
      "location": [-1.2091902, 36.90105]
    }, {
      "shop_id": "c16e1995-000d-45ea-9f5a-2340ce1f8e2b",
      "location": [-1.2087413, 36.90167]
    }, {
      "shop_id": "c5adb59d-5ea5-4d1a-b2ac-313ad1c55f06",
      "location": [-1.2092503, 36.904064]
    }, {
      "shop_id": "0716b85d-5fe4-4da4-9496-7bf517f21c5d",
      "location": [-1.2093091, 36.9041]
    }, {
      "shop_id": "f6cad088-3f0c-4496-9daf-73329f3b343f",
      "location": [-1.01431465148926, 36.9065170288086]
    }, {
      "shop_id": "c691fa24-b45d-4326-b00c-a3651f479aa8",
      "location": [-1.18676269054413, 36.903736114502]
    }, {
      "shop_id": "acf7225d-15b6-4385-8429-aea2df0637f9",
      "location": [-1.1873211, 36.897038]
    }, {
      "shop_id": "79750d79-e4f1-4842-af74-03858948c640",
      "location": [-1.2060422, 36.893127]
    }, {
      "shop_id": "887ce16d-344d-44cb-8f8a-ce182025264b",
      "location": [-1.2062544, 36.892773]
    }, {
      "shop_id": "5df7261b-3761-46f8-91c7-3480419d0d85",
      "location": [-1.2058347, 36.892605]
    }, {
      "shop_id": "c0dec705-c746-4dd3-a53f-6566a283af2a",
      "location": [-1.2040913, 36.893333]
    }, {
      "shop_id": "35455455-6da7-4769-84c1-b023835b857b",
      "location": [-1.2040877, 36.893616]
    }, {
      "shop_id": "8ad7e3a3-07db-4098-ad72-88dc7a8cf93a",
      "location": [-1.2049134, 36.89362]
    }, {
      "shop_id": "da652662-8bb7-4962-bda5-39f7b3a5e7bc",
      "location": [-1.206637, 36.89695]
    }, {
      "shop_id": "d792bd9f-c7fb-45c7-8f7b-2532feff3fef",
      "location": [-1.2048161, 36.899525]
    }, {
      "shop_id": "9d460355-9248-4753-99c2-920d091efcd3",
      "location": [-1.2048099, 36.899418]
    }, {
      "shop_id": "fb5cf7ba-a08b-4fbf-9464-cd674721eb4d",
      "location": [-1.20806622505188, 36.8966178894043]
    }, {
      "shop_id": "4eff7fa6-aa5a-4ce4-967f-4989d9880fa9",
      "location": [-1.20775, 36.895958]
    }, {
      "shop_id": "e8ffaed7-d84e-4bdc-af74-2f834a8d51a2",
      "location": [-1.2086571, 36.896328]
    }, {
      "shop_id": "54833412-8f2d-4dbb-8042-3a70751e071a",
      "location": [-1.2089654, 36.894917]
    }, {
      "shop_id": "47311b4e-8a3c-4691-9dca-3ffbe8886bff",
      "location": [-1.2087804, 36.894974]
    }, {
      "shop_id": "5f31ee42-a53b-4dd9-9c57-717fdfd625c1",
      "location": [-1.2089663, 36.894527]
    }, {
      "shop_id": "c45769e3-b82c-4b3f-80df-3dbf8bd0efb0",
      "location": [-1.2107497, 36.895016]
    }, {
      "shop_id": "e25cc172-0fea-49f2-93e6-e5c801b21e79",
      "location": [-1.210792, 36.895817]
    }, {
      "shop_id": "f1e8c306-a077-4b0a-a75f-2077f5857c63",
      "location": [-1.2108471, 36.896183]
    }, {
      "shop_id": "d1ef4af3-991a-44cf-a99b-7e7c83652a7e",
      "location": [-1.2111377, 36.895462]
    }, {
      "shop_id": "513a1101-2b38-47bc-84a3-74dae8c8658d",
      "location": [-1.211657, 36.894985]
    }, {
      "shop_id": "09e5eee5-a78f-42b7-bec2-e2e3a239c153",
      "location": [-1.2121063, 36.89479]
    }, {
      "shop_id": "27f8fba0-704a-4f7c-ab4c-b33314111619",
      "location": [-1.2124088, 36.894722]
    }, {
      "shop_id": "a8a83f96-937e-4321-8f6e-a8005cf23e9d",
      "location": [-1.212462, 36.894806]
    }, {
      "shop_id": "611ce91d-9429-4c4d-9399-85ef2cb9fff1",
      "location": [-1.2127249, 36.894558]
    }, {
      "shop_id": "6442f7d6-0fd2-45e3-a26a-84c15a4fe285",
      "location": [-1.2128565, 36.894474]
    }, {
      "shop_id": "38bb6329-9644-43b2-b384-cf2f76e4b295",
      "location": [-1.2131468, 36.89437]
    }, {
      "shop_id": "7fe5e2c6-292b-4f38-9119-5970abe4466b",
      "location": [-1.2136309, 36.894012]
    }, {
      "shop_id": "4e00835c-48df-4153-8e51-82dc6a456820",
      "location": [-1.2142034, 36.893845]
    }, {
      "shop_id": "694a0cee-4331-4795-8947-3b66f2d6bd15",
      "location": [-1.3181814, 36.89498]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Uthiru",
    "route_id": "7ea36fdb-88fd-48fd-bb20-2ae3ca2cba18",
    "matrix_info": {
      "DistanceMatrixAPI requests": 698,
      "cache_hit": "78%"
    },
    "distance": "41.7km",
    "path": "`z|Fedx_F{fFltTaOtu@{GeL?e@@i@@WJyAGCEWmMiDkCJaBQuBECe@HkCD_CIyCB_KQa@n@e@u@}@nDPJ@sDvi@H~JG~AOhHGzMMAXr@GdAGhE|@vOhGDED@Xz@MBK@C@CM?~BbG`@oRdUGhAl@^NZPdBhAq@fCrFyA@A`PoGAKvCmMxAsP_d@{T?oBhrFoxU",
    "shops": [{
      "shop_id": "b0b745b7-5f56-4247-b88b-13c55473a4a2",
      "location": [-1.2625941, 36.718037]
    }, {
      "shop_id": "8d67f9f1-ab4f-4cfa-a402-9a881ff28284",
      "location": [-1.2600157, 36.709286]
    }, {
      "shop_id": "148324a7-1111-4465-809c-759cab290347",
      "location": [-1.2586006, 36.711395]
    }, {
      "shop_id": "4e1452b1-91bf-44fd-ba4a-33e718f81d2e",
      "location": [-1.2585979, 36.711586]
    }, {
      "shop_id": "262a3e80-a72e-4fa4-aa2c-5244e940ce1a",
      "location": [-1.2586094, 36.7118]
    }, {
      "shop_id": "a6b62592-668e-4c04-b370-10b30e9aba9c",
      "location": [-1.2586244, 36.71192]
    }, {
      "shop_id": "d1a36bd2-5578-467a-8a14-f3a2bf6bffed",
      "location": [-1.2586793, 36.712368]
    }, {
      "shop_id": "447b64fc-1c81-4d34-bb21-d44f7e3ba861",
      "location": [-1.2586352, 36.712387]
    }, {
      "shop_id": "3968627c-b727-45d8-808a-26d13d6f8212",
      "location": [-1.2586066, 36.71251]
    }, {
      "shop_id": "6a211779-11f4-4782-bb14-413c70d6ae82",
      "location": [-1.2563006, 36.713356]
    }, {
      "shop_id": "c0c0f517-c824-4b36-9ab4-603da4190de2",
      "location": [-1.255599, 36.7133]
    }, {
      "shop_id": "3aa2e439-243d-4042-a08b-f8b9616ae1d7",
      "location": [-1.255112, 36.713394]
    }, {
      "shop_id": "a3ffa924-0a38-4e47-95fe-e09c90797b24",
      "location": [-1.25452, 36.71342]
    }, {
      "shop_id": "5b8c7827-5ae5-4e47-b183-88bf87251b6f",
      "location": [-1.254496, 36.713608]
    }, {
      "shop_id": "a08eeac7-5a51-450f-8ebb-aac1dc7e5694",
      "location": [-1.2545455, 36.714306]
    }, {
      "shop_id": "603ddb03-a154-4533-ab4d-30ff00440435",
      "location": [-1.2545805, 36.714954]
    }, {
      "shop_id": "86a8df2d-a21e-46ff-a799-be8b013723f5",
      "location": [-1.2545277, 36.71572]
    }, {
      "shop_id": "ee8bb9bb-409f-4694-859e-3fcf943a6da9",
      "location": [-1.2545505, 36.717644]
    }, {
      "shop_id": "5e755884-ac60-4158-9659-613bc02489b0",
      "location": [-1.2544616, 36.717808]
    }, {
      "shop_id": "b51a0dc4-669d-49a5-b647-26155324357f",
      "location": [-1.2546986, 36.718]
    }, {
      "shop_id": "78e5dca9-10ff-4f2e-92da-9b5ec98e936e",
      "location": [-1.2544339, 36.718307]
    }, {
      "shop_id": "4056481d-f7b8-4557-b8b6-96054197a4af",
      "location": [-1.2553054, 36.71822]
    }, {
      "shop_id": "b6a41ae3-a3d8-4d16-8ece-5b449aeca659",
      "location": [-1.2553669, 36.71821]
    }, {
      "shop_id": "b64300d5-194b-44db-aa70-070ea1dde84f",
      "location": [-1.2544726, 36.711365]
    }, {
      "shop_id": "fd78d852-4f31-48df-8a47-08100b3b25c3",
      "location": [-1.2545245, 36.709446]
    }, {
      "shop_id": "b621904c-f443-4955-b57c-e2864cdeb7e6",
      "location": [-1.2544826, 36.70897]
    }, {
      "shop_id": "b81c2be6-827a-48ef-9162-78d8ee22a13d",
      "location": [-1.2543968, 36.70748]
    }, {
      "shop_id": "118f3721-6ef7-442d-8459-eae1637d65b2",
      "location": [-1.2543567, 36.705097]
    }, {
      "shop_id": "328deadc-380b-4de9-934a-4a83b89153d0",
      "location": [-1.2542945, 36.705105]
    }, {
      "shop_id": "595b2988-98ee-4288-885f-503963d80d89",
      "location": [-1.2544248, 36.704853]
    }, {
      "shop_id": "3ac5c750-3843-457c-a999-e0456b8442db",
      "location": [-1.2543837, 36.704502]
    }, {
      "shop_id": "bf769cc9-b7cf-48eb-875a-65c7e860ba1f",
      "location": [-1.2543429, 36.70349]
    }, {
      "shop_id": "8c06f3db-4424-4d65-820b-96a2802255ef",
      "location": [-1.2546523, 36.700806]
    }, {
      "shop_id": "5d33a1d7-bc01-421c-9df9-bcf1c28544cb",
      "location": [-1.255984, 36.700783]
    }, {
      "shop_id": "fedb8b5d-994f-4d4a-aa6d-939c2f9df943",
      "location": [-1.2559505, 36.70075]
    }, {
      "shop_id": "122ad006-15de-47af-ba11-b23996df5b28",
      "location": [-1.2559566, 36.700615]
    }, {
      "shop_id": "25b9eac4-c792-4ee8-8e1a-89e61759f51a",
      "location": [-1.25625681877136, 36.7006912231445]
    }, {
      "shop_id": "9aed1d7c-f59d-4ef8-9994-2241e7d84e62",
      "location": [-1.2562845, 36.700745]
    }, {
      "shop_id": "c9c7072c-125f-44ce-8b02-bb5415166946",
      "location": [-1.25629329681396, 36.7007713317871]
    }, {
      "shop_id": "7dcba31f-4c94-4fd4-8272-69861419d0d2",
      "location": [-1.25630187988281, 36.7007904052734]
    }, {
      "shop_id": "38c24e4e-0bc3-455b-97be-e5cc86b786bc",
      "location": [-1.2562335, 36.700787]
    }, {
      "shop_id": "afdc486c-22d0-49ea-a32a-b31f0a0f5246",
      "location": [-1.2568702, 36.699486]
    }, {
      "shop_id": "5163a3e0-0de1-4fca-aeb0-364cdb4c4b29",
      "location": [-1.257042, 36.702606]
    }, {
      "shop_id": "f42b49e6-e7d0-42bf-bda2-6f35d231ad99",
      "location": [-1.260587, 36.702652]
    }, {
      "shop_id": "fde3f744-4a9f-41f9-9dea-7f25f0733696",
      "location": [-1.26096284389496, 36.7024192810059]
    }, {
      "shop_id": "e1cb4ac3-6efc-4c56-9e57-721bff56943c",
      "location": [-1.2611187, 36.702343]
    }, {
      "shop_id": "c6df6ba5-72d4-43e2-b29a-67b80e03006f",
      "location": [-1.2612613, 36.70225]
    }, {
      "shop_id": "80117acb-b1a5-4997-94cb-556f52e7d077",
      "location": [-1.2617652, 36.701885]
    }, {
      "shop_id": "0ffbf249-0a6b-431a-8699-705743bae999",
      "location": [-1.2615198, 36.701195]
    }, {
      "shop_id": "e3183951-4756-46d9-9aa6-01fca1fc4780",
      "location": [-1.2627405, 36.701653]
    }, {
      "shop_id": "6e3d4409-c64d-4391-a8aa-fb03600d6258",
      "location": [-1.2627543, 36.701656]
    }, {
      "shop_id": "47711ac7-f25b-4811-92a1-87572e5f05f3",
      "location": [-1.2654849, 36.70302]
    }, {
      "shop_id": "d34d6727-84e2-4f46-ab5c-0862181b023a",
      "location": [-1.265469, 36.70308]
    }, {
      "shop_id": "b546f651-2f6f-4243-aa31-794131ce7305",
      "location": [-1.2662349, 36.70539]
    }, {
      "shop_id": "2a5b7fb6-6e29-497b-a3df-fef31d49f9b0",
      "location": [-1.2666758, 36.708214]
    }, {
      "shop_id": "5ce531c6-e31b-4eed-945d-cf8df17da2e6",
      "location": [-1.260755, 36.71171]
    }, {
      "shop_id": "fb93dc74-e255-43ab-bc87-1c00cff0e06c",
      "location": [-1.2607636, 36.712265]
    }],
    "flagged_shops": []
  }]
};
exports.data = data;
},{}],"../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51823" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","data.js"], null)
//# sourceMappingURL=/data.c2b69d8e.js.map