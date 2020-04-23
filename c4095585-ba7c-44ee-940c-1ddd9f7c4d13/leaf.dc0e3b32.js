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
})({"data2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataset = void 0;
var dataset = {
  "sale_date": "2020-04-22",
  "errors": [{
    "status": "error",
    "route_name": "Mombasa Road Route - Key Accounts",
    "route_id": "0607dc1c-af82-4fa2-9f65-880ddc7e8463",
    "message": "No solutions found. Please verify shop/depot locations"
  }],
  "routes": [{
    "status": "success",
    "route_name": "CBD Nairobi",
    "route_id": "4a10003b-f1ff-4e4a-93ed-30346459b417",
    "matrix_info": {
      "DistanceMatrixAPI requests": 54,
      "cache_hit": "78%"
    },
    "distance": "32.86km",
    "path": "dsfG_se`FohJp`MDDLDYaK_RiBwRcZQWDEKH??MW?a@FC?I?IG@j@j@KqH|Ctg@tjKysL",
    "shops": [{
      "shop_id": "16ff5db2-8e47-40a1-8d17-b74be9e246c4",
      "location": [-1.2919482, 36.82599]
    }, {
      "shop_id": "5747f840-db56-4bbe-ba30-8a79ca29b610",
      "location": [-1.2919815, 36.825962]
    }, {
      "shop_id": "4aeae2cf-17f8-481e-a486-a44432e5f415",
      "location": [-1.2920454, 36.82593]
    }, {
      "shop_id": "3ade60c0-62e9-4716-a752-df253e0123aa",
      "location": [-1.2919182, 36.82786]
    }, {
      "shop_id": "89ca0482-a26f-4e01-adc2-7365b43f3673",
      "location": [-1.2888824, 36.828392]
    }, {
      "shop_id": "8f730677-7dda-48b3-84b3-ad409fedc4cb",
      "location": [-1.285716, 36.832726]
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
      "shop_id": "70b6de82-8169-456f-beb4-67c6508745c1",
      "location": [-1.2855302, 36.832947]
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
      "shop_id": "c61ad965-b5da-4ecc-af43-e174cca360b7",
      "location": [-1.2855282, 36.833233]
    }, {
      "shop_id": "7d63493a-0264-4d4e-96f3-c88c67ae487b",
      "location": [-1.2857544, 36.833008]
    }, {
      "shop_id": "84328819-516a-4ada-89cf-00ca66650c15",
      "location": [-1.2856948, 36.83454]
    }, {
      "shop_id": "8548b7d5-dd11-4631-ad8e-66f71a8f1a9d",
      "location": [-1.2864805, 36.82803]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Fedha Tel Aviv",
    "route_id": "662778e9-ef6b-4d6e-8a62-620671f0bdaa",
    "matrix_info": {
      "DistanceMatrixAPI requests": 112,
      "cache_hit": "86%"
    },
    "distance": "28.27km",
    "path": "dsfG_se`FqxDoKuD_MmAQG]wBhB{BuJwHdKcAvB_@ZkPnZxD~F@?JN@LD?`MU{DiE_@HwYmOuKkW?M_@_@[m@MM}MvCc@|@wHmBA_Gpb@yt@dyFn{A",
    "shops": [{
      "shop_id": "e9f5341f-e037-4db1-ba37-c665c9486d06",
      "location": [-1.3200982, 36.89992]
    }, {
      "shop_id": "e44a6d77-da2c-42bf-ad40-08a396f08fcb",
      "location": [-1.3191876, 36.90216]
    }, {
      "shop_id": "223903a8-e86b-47dd-b241-7398700d4a0c",
      "location": [-1.3187993, 36.90225]
    }, {
      "shop_id": "3cb760c1-cbd3-4711-866f-e3cd38341dc6",
      "location": [-1.3187598, 36.902397]
    }, {
      "shop_id": "7cc6f064-562e-4c2a-8d12-8b44d7beb05c",
      "location": [-1.3181581, 36.901867]
    }, {
      "shop_id": "78003b0b-a241-4545-b155-55652856f8f9",
      "location": [-1.3175381, 36.903736]
    }, {
      "shop_id": "40f20fa7-3e75-4293-bc90-05b8ab8ffd66",
      "location": [-1.3159807, 36.90179]
    }, {
      "shop_id": "6f6764dc-435e-42cb-8746-5842c4269f9b",
      "location": [-1.3156382, 36.901188]
    }, {
      "shop_id": "79e70428-806e-4269-81f4-351813a698f2",
      "location": [-1.3154767, 36.901054]
    }, {
      "shop_id": "301e760e-a856-4062-a726-a606040d8734",
      "location": [-1.3126996, 36.89665]
    }, {
      "shop_id": "0c86fb8b-4d07-44e6-af59-c3f79f84062e",
      "location": [-1.3136265, 36.895374]
    }, {
      "shop_id": "b6b68fe8-5d2f-45ff-becf-6352023a8215",
      "location": [-1.3136449, 36.89537]
    }, {
      "shop_id": "10e5d9a9-395f-4f5e-9346-f13861cd02b7",
      "location": [-1.3137013, 36.895294]
    }, {
      "shop_id": "70d9ecfc-8567-4128-b63a-0732c8df5204",
      "location": [-1.31371414661407, 36.8952217102051]
    }, {
      "shop_id": "bba86a80-9087-4e2a-bf28-986d2de9d8e2",
      "location": [-1.31374382972717, 36.8952217102051]
    }, {
      "shop_id": "5b2bb30d-75b1-4cdd-ae48-19944385a8af",
      "location": [-1.315987, 36.895325]
    }, {
      "shop_id": "451d9f68-e38a-4c0f-8543-3798933f98a1",
      "location": [-1.3150542974472, 36.8963356018066]
    }, {
      "shop_id": "e12ea79e-6e83-4513-a91a-b75e7ea909c0",
      "location": [-1.31488740444183, 36.8962936401367]
    }, {
      "shop_id": "426d42fb-6967-4f8e-a97f-364c2d27b4c3",
      "location": [-1.31060576438904, 36.8989181518555]
    }, {
      "shop_id": "a2122944-b431-4f00-bf3e-82388e64edca",
      "location": [-1.3085775, 36.90282]
    }, {
      "shop_id": "0de656a0-c53c-4319-aab3-b90e487db4df",
      "location": [-1.3085848, 36.902885]
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
      "shop_id": "4b35426a-8dfe-47d7-bc74-1c0129a7799c",
      "location": [-1.3058182, 36.902588]
    }, {
      "shop_id": "8597632f-1b79-4c76-9fb8-2f0a66b6b82d",
      "location": [-1.3056375, 36.90228]
    }, {
      "shop_id": "85c2d642-e800-48c2-ab4e-385f00478c90",
      "location": [-1.3040833, 36.90283]
    }, {
      "shop_id": "a9eb7ce7-1750-4b05-88ef-f62b990cba56",
      "location": [-1.30407, 36.90411]
    }, {
      "shop_id": "8adede20-f8bb-4ce6-b4c1-f25667f83610",
      "location": [-1.3097616, 36.912724]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Athi River",
    "route_id": "5ee6a28b-54bc-44ae-b8d6-b5fb6d6d91f3",
    "matrix_info": {
      "DistanceMatrixAPI requests": 244,
      "cache_hit": "77%"
    },
    "distance": "48.19km",
    "path": "dsfG_se`FbwQkoNjQmO|Df@rReq@|CK~Jg@H}AjAmBvDnADEvH|Db@y@bAfA_Av@kFx@LHbTrJvF~BnJ|Ae`@|g@NxB_CeIi@LWZSrP`BvCmCAoFzDiJn@IJbBtDryB`gAwmFsZe|OpeL",
    "shops": [{
      "shop_id": "5f86f996-d29e-4d7f-9590-797c1091b94e",
      "location": [-1.4458065, 36.97734]
    }, {
      "shop_id": "54611ab3-6cf4-4b97-b9f9-d06a68a68918",
      "location": [-1.4487524, 36.979973]
    }, {
      "shop_id": "5b05cf4c-b852-4765-bb39-7c36282354e6",
      "location": [-1.4496992, 36.97977]
    }, {
      "shop_id": "5080092a-cea3-429a-a584-8c9129868ebd",
      "location": [-1.4528418, 36.9878]
    }, {
      "shop_id": "83f49581-e05f-41b2-9325-1feb33c5ad5f",
      "location": [-1.4536335, 36.98786]
    }, {
      "shop_id": "c1d0d755-34c1-4578-9460-cf3ff075637d",
      "location": [-1.455549, 36.98806]
    }, {
      "shop_id": "7649b524-2c83-4303-9491-9332f96aeb11",
      "location": [-1.4556015, 36.98853]
    }, {
      "shop_id": "ad626cd2-84b5-484a-a59e-e389ff32f90b",
      "location": [-1.4559822, 36.989082]
    }, {
      "shop_id": "57d70863-9241-4dcc-b52e-c7d35ff7a73b",
      "location": [-1.4568999, 36.988678]
    }, {
      "shop_id": "1a2dc453-a5aa-4bf4-beb0-10228035c96c",
      "location": [-1.456932, 36.98871]
    }, {
      "shop_id": "72739ff5-6ea7-4a59-b854-61391376d08e",
      "location": [-1.4584861, 36.98776]
    }, {
      "shop_id": "99c4b6bf-f7be-45d3-b903-e8a1409b1ba3",
      "location": [-1.458674, 36.988045]
    }, {
      "shop_id": "c783d338-c131-48c8-818c-c65a6266eff3",
      "location": [-1.4590111, 36.987694]
    }, {
      "shop_id": "dc4e16f2-4046-4766-ab5b-526b96cceb74",
      "location": [-1.4586923, 36.98741]
    }, {
      "shop_id": "82f5bce7-b941-47f1-8be4-a4c828fd245a",
      "location": [-1.4575137, 36.98712]
    }, {
      "shop_id": "bedfefec-2594-40b4-bbaa-89a93cbaeb0d",
      "location": [-1.4575789, 36.98707]
    }, {
      "shop_id": "940af343-5504-4cb9-9be6-6b3a391caa5e",
      "location": [-1.4609627, 36.985214]
    }, {
      "shop_id": "34be37db-04d0-4367-97e9-82428f190e77",
      "location": [-1.4621959, 36.984566]
    }, {
      "shop_id": "c85bbdfe-4fd1-4957-8f6a-28651f4bd6e7",
      "location": [-1.4640409, 36.9841]
    }, {
      "shop_id": "4efbbda5-ed9e-458d-86b0-735de0262a2b",
      "location": [-1.4587255, 36.977554]
    }, {
      "shop_id": "7fe5479f-7038-4ffd-a58b-c884e409c2c5",
      "location": [-1.45881485939026, 36.9769401550293]
    }, {
      "shop_id": "8bd1f7b3-4fef-4472-bcc7-476d537cbed4",
      "location": [-1.45816767215729, 36.9785652160645]
    }, {
      "shop_id": "81e28394-d2c4-4646-a968-a2be4388bff7",
      "location": [-1.4579582, 36.978504]
    }, {
      "shop_id": "647cd8ba-8b81-4afb-8eaa-bdf0aefb082d",
      "location": [-1.4578412, 36.978355]
    }, {
      "shop_id": "8a80501f-3432-4f64-a760-25661f619f21",
      "location": [-1.45773828029633, 36.9755363464355]
    }, {
      "shop_id": "e391186b-874a-49ca-a955-3030ea49c0d4",
      "location": [-1.4582251, 36.974777]
    }, {
      "shop_id": "c77ae7cd-194b-418c-9fd0-1434dd5afcc8",
      "location": [-1.4575176, 36.974792]
    }, {
      "shop_id": "e3e45751-a0b4-4407-92ac-a7c16d11bdf8",
      "location": [-1.4563231, 36.973854]
    }, {
      "shop_id": "4cc154d8-1c4f-41a1-ac63-532c18be8825",
      "location": [-1.4545058, 36.97361]
    }, {
      "shop_id": "34caa2ae-4c12-4eb9-b2a5-661d1e63ab9e",
      "location": [-1.45445954799652, 36.9735527038574]
    }, {
      "shop_id": "74e1272f-2697-45ff-b3a8-1dab1846d1a8",
      "location": [-1.4549589, 36.97264]
    }, {
      "shop_id": "d6dacd1d-e5da-46aa-93de-70ab720500c2",
      "location": [-1.4745824, 36.961113]
    }, {
      "shop_id": "f439e89d-5e08-4ff8-99e4-a1e69f35b270",
      "location": [-1.43638002872467, 36.9655303955078]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Jacaranda",
    "route_id": "91ba2436-8cf3-47ba-9979-e7ff1ff99402",
    "matrix_info": {
      "DistanceMatrixAPI requests": 266,
      "cache_hit": "80%"
    },
    "distance": "18.55km",
    "path": "|qoF_r``FchEewDqD_CoAd@OiCd@DDR[kBNc@?WpCaKz@kE~@o@RBcZhRdL}AiBvIbAFtEqMkCzK`SsTt@uFjAq@f@wAp@}Cn@aDN{@_FiKi@~AlGjR\\~PxFyDiIzWo@xA{AcHqGz@nF`Jo@x@z~DxrD",
    "shops": [{
      "shop_id": "6b419761-5e23-400a-84ff-5032c21cfa38",
      "location": [-1.1996502, 36.901627]
    }, {
      "shop_id": "2df8a9dd-2e5a-439e-8bbd-9c658053b20d",
      "location": [-1.1987629, 36.90227]
    }, {
      "shop_id": "8f0378b4-c147-4b0f-a3c6-3b6e2c0ecc87",
      "location": [-1.1983587, 36.90208]
    }, {
      "shop_id": "3fc3f7f5-8130-4003-b213-1adcc6f380d8",
      "location": [-1.1982836, 36.902767]
    }, {
      "shop_id": "e6705668-944e-495f-8d98-de8ef472d891",
      "location": [-1.1984705, 36.902737]
    }, {
      "shop_id": "06fc6146-8be8-4fee-bb49-6bca7e644247",
      "location": [-1.1984996, 36.90264]
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
      "shop_id": "5f403910-3d68-40d4-8f8d-c8f431ac0ac6",
      "location": [-1.1991745, 36.90541]
    }, {
      "shop_id": "532545b8-387e-4464-8bc8-07716ef9b0c2",
      "location": [-1.1994691, 36.906433]
    }, {
      "shop_id": "f829d425-e6e0-4f97-a6bf-ff120e2dc4f0",
      "location": [-1.1997904, 36.90667]
    }, {
      "shop_id": "f55e2104-2c15-4580-ad98-cc17e03fdbfe",
      "location": [-1.1998932, 36.906654]
    }, {
      "shop_id": "d9ae6766-87f9-4a96-88e0-7abd653bc4f4",
      "location": [-1.1955518, 36.903557]
    }, {
      "shop_id": "06a9d5ea-c44f-4a94-84e0-f29082d3725e",
      "location": [-1.1976633, 36.904034]
    }, {
      "shop_id": "afb9953b-e1c7-4e73-8fae-046f8f805f5c",
      "location": [-1.197125, 36.902306]
    }, {
      "shop_id": "cae7072d-2af6-47d9-8e56-1960c0352979",
      "location": [-1.197473, 36.902267]
    }, {
      "shop_id": "a6fdb6f0-2f58-4ebd-8542-3e6459e9a336",
      "location": [-1.1985376, 36.9046]
    }, {
      "shop_id": "c864bf99-9cbe-4a00-8506-75c2527b7656",
      "location": [-1.1978363, 36.902542]
    }, {
      "shop_id": "43e7ab13-cd91-4e6c-a45c-261936e37daa",
      "location": [-1.2010454, 36.906]
    }, {
      "shop_id": "de6d6422-06ea-425a-a044-f79ce66d24fb",
      "location": [-1.2013249, 36.907227]
    }, {
      "shop_id": "eeb5b03e-4c84-48d9-9e27-899812cc47d3",
      "location": [-1.2016993, 36.907475]
    }, {
      "shop_id": "2efffd45-ca10-4d67-a035-0acff7eb194e",
      "location": [-1.2018954, 36.907917]
    }, {
      "shop_id": "e8df7a49-c84c-49e4-a52d-132eef0a2fa7",
      "location": [-1.2021483, 36.908707]
    }, {
      "shop_id": "81a8cd64-8875-41dc-9310-d9e36f489c2e",
      "location": [-1.2023926, 36.909523]
    }, {
      "shop_id": "18e7d7c7-d037-4e95-9340-790598acf9b0",
      "location": [-1.2024661, 36.90982]
    }, {
      "shop_id": "ed0c352b-9a08-4a18-beee-f813980a45fe",
      "location": [-1.2013535, 36.911793]
    }, {
      "shop_id": "55ec272c-82e6-41d2-bd11-40f17c88ccd6",
      "location": [-1.2011368, 36.911312]
    }, {
      "shop_id": "888176f1-1437-45bf-a6f9-91417a3ad80e",
      "location": [-1.2024858, 36.90821]
    }, {
      "shop_id": "4e4f3018-3223-4d8f-ba1e-5381f60a5ec5",
      "location": [-1.2026359, 36.905334]
    }, {
      "shop_id": "816af36f-0b23-4253-b673-1bf37fb01f42",
      "location": [-1.2038882, 36.90626]
    }, {
      "shop_id": "f3b21cf4-2e26-4973-b29f-859b1ee2039b",
      "location": [-1.2022381, 36.90228]
    }, {
      "shop_id": "6be15929-2a12-4952-b305-31743b54433c",
      "location": [-1.2020042, 36.90183]
    }, {
      "shop_id": "f1b2be37-1b1c-4251-9261-cd7236cec907",
      "location": [-1.2015402, 36.903294]
    }, {
      "shop_id": "87011427-8b71-4b84-8e2c-c39bb9dea1d6",
      "location": [-1.2001734, 36.902985]
    }, {
      "shop_id": "16cb5c0a-84bb-46eb-bbf8-7e1a464d6440",
      "location": [-1.2013679, 36.901215]
    }, {
      "shop_id": "24b00ea4-0b2f-4677-b012-e4808b660886",
      "location": [-1.2011333, 36.900925]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Industrial Area",
    "route_id": "361537d4-fe12-4101-bd0c-35d7b57a96b6",
    "matrix_info": {
      "DistanceMatrixAPI requests": 211,
      "cache_hit": "87%"
    },
    "distance": "34.25km",
    "path": "dsfG_se`FguCzpDQLJrBjCbuAcTfL?E_NnBuD]JFD??BTd@URk@}AAJcyAzsA~lAuqA\\UpL|YeA\\`D~CmAj@SFfExJDeA}AbAz@_DpD`A~a@sh@U_AMuE]kJg_@a|AHQ__@uFyOg`@vLlD|EvDg@hAfKnDDe@p~DutC",
    "shops": [{
      "shop_id": "aa6c95b0-fdcd-4c37-abcc-92d6d0138804",
      "location": [-1.3257458, 36.86946]
    }, {
      "shop_id": "ff8ae4f5-6496-42ef-b1a1-eef21a81684d",
      "location": [-1.3256578, 36.869392]
    }, {
      "shop_id": "c52fef7d-cbc7-4088-8d34-87e4f615f0a2",
      "location": [-1.3257219, 36.868805]
    }, {
      "shop_id": "0ed5c10b-8f33-464b-bf4a-405332adcf7f",
      "location": [-1.3264186, 36.855026]
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
      "shop_id": "61be96e9-d5df-4f28-865f-fd13e71d1f3a",
      "location": [-1.3199311, 36.852283]
    }, {
      "shop_id": "357a52e3-d9c9-4cce-9a33-48236c24a091",
      "location": [-1.3198193, 36.852177]
    }, {
      "shop_id": "ba8852ff-96c1-4dd9-92a4-83c27f19779f",
      "location": [-1.3195999, 36.852646]
    }, {
      "shop_id": "4de25c4d-121a-475d-9025-7fd52ee8a3f6",
      "location": [-1.3195901, 36.852592]
    }, {
      "shop_id": "11aa328d-a359-42a9-a9cf-30d854926ef2",
      "location": [-1.3051744, 36.83901]
    }, {
      "shop_id": "4d400386-b91d-44bd-8dc7-eb50937c7b40",
      "location": [-1.317653, 36.85224]
    }, {
      "shop_id": "aba078fd-7351-4c60-b010-e1e3ca8010c2",
      "location": [-1.3178014, 36.852352]
    }, {
      "shop_id": "ad9cdf98-3afc-4b01-bf77-f88669e1215b",
      "location": [-1.3199704, 36.84804]
    }, {
      "shop_id": "7bbbd445-15e8-4db3-aaac-e1403fd304cb",
      "location": [-1.3196207, 36.847885]
    }, {
      "shop_id": "018d157e-de1a-46ff-9bb4-34b67def17ce",
      "location": [-1.320425, 36.84709]
    }, {
      "shop_id": "aa2dde3d-3b4b-4a33-b78c-0beb804f6322",
      "location": [-1.3200368, 36.846874]
    }, {
      "shop_id": "f8a49b22-8b93-45d1-98ee-3b2d8761d463",
      "location": [-1.3199426, 36.846832]
    }, {
      "shop_id": "056eaeee-7307-4ff6-ae22-4edd3bc6cb6c",
      "location": [-1.3209425, 36.844944]
    }, {
      "shop_id": "7aaf6b64-ff66-4991-96b0-f336195300f9",
      "location": [-1.320973, 36.84529]
    }, {
      "shop_id": "fba58fed-c456-4f73-9c9a-2bb0e8d25c5c",
      "location": [-1.3205041, 36.844948]
    }, {
      "shop_id": "cf3841aa-a6a5-45c0-81e0-e53b3e99b91a",
      "location": [-1.3208001, 36.845745]
    }, {
      "shop_id": "2e63dd2c-ad79-4099-921c-14ce601d1801",
      "location": [-1.3216882, 36.84542]
    }, {
      "shop_id": "91db5964-5b40-4662-9ccf-c828f5c80f66",
      "location": [-1.327291, 36.85208]
    }, {
      "shop_id": "09c557e9-0c28-45c8-a182-e88abe8019ea",
      "location": [-1.3271786, 36.8524]
    }, {
      "shop_id": "7a5f782f-af17-489b-a418-73e193ee49f3",
      "location": [-1.3271146, 36.853474]
    }, {
      "shop_id": "0f081add-e94c-490c-af1d-52816c2d6b10",
      "location": [-1.3269593, 36.855293]
    }, {
      "shop_id": "4f75195c-3c3a-4dfe-a48c-1e98919f94d7",
      "location": [-1.3218033, 36.87018]
    }, {
      "shop_id": "f5b3e418-f81d-4806-b18f-a9df29886548",
      "location": [-1.3218489, 36.870274]
    }, {
      "shop_id": "0296215b-e81a-4186-8ebe-fde32b69ba8e",
      "location": [-1.3167284, 36.871502]
    }, {
      "shop_id": "5534fa9b-6803-4d1b-a504-952a85f49f18",
      "location": [-1.3140439, 36.876823]
    }, {
      "shop_id": "e6193815-05a4-4dc9-a9e4-2a84731ed11f",
      "location": [-1.3162414, 36.875954]
    }, {
      "shop_id": "3ff1fd4d-39d8-4191-8148-2045cc5e95eb",
      "location": [-1.3173503, 36.875034]
    }, {
      "shop_id": "8ef05abe-9af1-4338-b045-61025bf86318",
      "location": [-1.317153, 36.874657]
    }, {
      "shop_id": "3ffb7a2b-6751-49f3-aad3-ab5dd5a856be",
      "location": [-1.3191066, 36.87378]
    }, {
      "shop_id": "ca01f1f6-08b9-401f-be6f-b81725ea9f71",
      "location": [-1.3191363, 36.87397]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Eastleigh/Pangani",
    "route_id": "3beb9e97-76e2-4d6c-9d3d-277370381f75",
    "matrix_info": {
      "DistanceMatrixAPI requests": 287,
      "cache_hit": "80%"
    },
    "distance": "45.67km",
    "path": "dsfG_se`FycJ~cFwmAjw@C@gCmAsKnGSiAAk@z@lHgEwLAu@SQkCxBqL@I{@OOl@bE_@PLNZPZj@qBpBwA?GJqa@}AGA?wHNyJCPrKtf@`PlH`BQqUlKVdDvGdJNLvCcAvDnDpc@d[d_Me|J",
    "shops": [{
      "shop_id": "32ac514a-77b9-45a5-858d-8ab80556a904",
      "location": [-1.2927049, 36.86128]
    }, {
      "shop_id": "9fe36a48-1c19-46e4-974a-b67f65e10272",
      "location": [-1.2801006, 36.852264]
    }, {
      "shop_id": "d64d2f14-1aec-420e-95e4-f868e1cd6ac3",
      "location": [-1.280078, 36.852253]
    }, {
      "shop_id": "7908d68d-e87d-44cd-9d66-4c598ce5aa9f",
      "location": [-1.2793971, 36.85264]
    }, {
      "shop_id": "de8cffdb-8cc5-403f-959c-d930e5743f02",
      "location": [-1.2773826, 36.851276]
    }, {
      "shop_id": "b9863448-bbf4-40ff-95af-5ac630f96e8d",
      "location": [-1.2772788, 36.851654]
    }, {
      "shop_id": "5c521df1-4ba0-44d6-8390-52db215572b7",
      "location": [-1.2772704, 36.851868]
    }, {
      "shop_id": "c6b0f074-7296-473b-8987-c6b8d7a04afb",
      "location": [-1.2775737, 36.850357]
    }, {
      "shop_id": "2bce8c09-beca-4fc2-9e49-526273adcf2f",
      "location": [-1.2765702, 36.852562]
    }, {
      "shop_id": "575588af-b9a3-4a27-843a-9724997cd8df",
      "location": [-1.2765633, 36.852825]
    }, {
      "shop_id": "9454881e-45e3-4249-ade3-8ea3d9b37dd3",
      "location": [-1.2764564, 36.852924]
    }, {
      "shop_id": "9006c276-3451-41ae-b896-934a6651baeb",
      "location": [-1.2757564, 36.852314]
    }, {
      "shop_id": "d6219182-22bc-4464-a842-e5246e67527b",
      "location": [-1.273589, 36.852303]
    }, {
      "shop_id": "fd1a5529-8070-4d10-a97f-2b2997388eb0",
      "location": [-1.2735351, 36.852596]
    }, {
      "shop_id": "fa4da332-c331-42c6-a960-aea4d1176ac6",
      "location": [-1.2734638, 36.852684]
    }, {
      "shop_id": "8904c0e8-672c-460a-bb37-6e26fa472205",
      "location": [-1.2736928, 36.851696]
    }, {
      "shop_id": "483099fc-3c77-41b3-a8ea-c5a44a221146",
      "location": [-1.2735347, 36.85161]
    }, {
      "shop_id": "d2ea4aa7-ae87-4367-b3b2-77d6f4f07218",
      "location": [-1.2735994, 36.85153]
    }, {
      "shop_id": "e0a22b70-2819-44a1-8b0e-10f98b8b3b38",
      "location": [-1.2737439, 36.85144]
    }, {
      "shop_id": "cde9d5b1-d9f0-4f6e-8eaf-ff855b79200a",
      "location": [-1.2738776, 36.85122]
    }, {
      "shop_id": "6a92b674-4211-421b-896c-454968e4578b",
      "location": [-1.2733107, 36.850647]
    }, {
      "shop_id": "bc50bae5-dc38-4ce1-aa62-0dbecca09f7d",
      "location": [-1.27287268638611, 36.8506469726562]
    }, {
      "shop_id": "50042cf5-22c1-4300-b0bc-17d40ecc78fd",
      "location": [-1.2728308, 36.850586]
    }, {
      "shop_id": "e7a6ca52-c441-4923-901e-d811c37cd18a",
      "location": [-1.2672995, 36.851055]
    }, {
      "shop_id": "7f387de1-b68d-4531-b238-dce636f0348d",
      "location": [-1.2672553, 36.851067]
    }, {
      "shop_id": "90d64211-db61-4968-a52f-b8a703614881",
      "location": [-1.2672571, 36.852627]
    }, {
      "shop_id": "2ae46d73-9655-4907-82b3-80cb6640d5d0",
      "location": [-1.2673395, 36.854515]
    }, {
      "shop_id": "f26c29e8-7cd1-41f3-ba52-2c491dcda37e",
      "location": [-1.2673156, 36.85443]
    }, {
      "shop_id": "a1faef56-332f-4743-9bae-aa76f890f500",
      "location": [-1.2693446, 36.848083]
    }, {
      "shop_id": "4ffbd6a5-d060-4e57-a64b-9bc09976ca87",
      "location": [-1.2720653, 36.846573]
    }, {
      "shop_id": "54e1ee47-6a1b-4a8e-821a-0272eb0d09f8",
      "location": [-1.2725642, 36.846664]
    }, {
      "shop_id": "63ea5894-6051-47e2-b2a1-a1d9721d96ed",
      "location": [-1.2689531, 36.844673]
    }, {
      "shop_id": "a8ceecff-7072-4c1f-8fc6-fb01e6a541a3",
      "location": [-1.2690699, 36.84384]
    }, {
      "shop_id": "d2cd1737-d277-4f44-a520-be9ae4f52c32",
      "location": [-1.2704695, 36.84205]
    }, {
      "shop_id": "886dabf4-7e44-4640-9d4e-71e9ae3f0bdb",
      "location": [-1.2705534, 36.84198]
    }, {
      "shop_id": "8b395b14-e3ff-4c21-b819-8c6bd4091174",
      "location": [-1.2713101, 36.842323]
    }, {
      "shop_id": "c476d926-0647-422a-b2f8-4b254dd73c4c",
      "location": [-1.2722257, 36.841442]
    }, {
      "shop_id": "136573f0-ec8e-422b-bb57-4e5d0c368f92",
      "location": [-1.278080701828, 36.8369255065918]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Jogoo Road 2",
    "route_id": "1f01ed41-efdd-47d8-a9e1-aae3e8f95884",
    "matrix_info": {
      "DistanceMatrixAPI requests": 262,
      "cache_hit": "84%"
    },
    "distance": "42.15km",
    "path": "dsfG_se`FsJeWvCa@_kJliJ`HqbACGsADg@cBxB}@ae@_e@AV}E}K?m@lAiKnO`Cq^gi@rDoFEIrGwHLf@uFb@pn@tMzMp]fA@wV]oA|G~EpItFn@rHMN}CaCnTkBx@k@zA|MzAx@VlAd@PGBADI@EUC~@FqIv]pzIgkG",
    "shops": [{
      "shop_id": "355fcdbd-827f-4cc3-b15f-ce91217f3786",
      "location": [-1.34793, 36.90179]
    }, {
      "shop_id": "89877a1c-a9ac-4d89-a46e-57384c74dcb3",
      "location": [-1.3486922, 36.901962]
    }, {
      "shop_id": "f7eb0ae7-4a54-494a-9ff4-6e776138df86",
      "location": [-1.2904468, 36.843967]
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
      "shop_id": "fec7c5a3-887a-4659-8f5c-b91a1c8ebe17",
      "location": [-1.291874, 36.855595]
    }, {
      "shop_id": "35cce7f0-6108-4b41-b42d-2468d6b5f5ca",
      "location": [-1.2857772, 36.861683]
    }, {
      "shop_id": "20709089-10b4-4d38-8e6d-8a53336b1b02",
      "location": [-1.2857678, 36.861557]
    }, {
      "shop_id": "026c6c3d-0452-45a6-bf6c-a98888399c5d",
      "location": [-1.2846556, 36.863632]
    }, {
      "shop_id": "f7161f21-069f-4d60-b8e1-e90551857b88",
      "location": [-1.2846624, 36.86386]
    }, {
      "shop_id": "55baeef3-0c69-49bf-a3b7-e93344be49be",
      "location": [-1.2850493, 36.86583]
    }, {
      "shop_id": "d791444a-e292-48aa-a412-3227e973e0cc",
      "location": [-1.28769338130951, 36.8651809692383]
    }, {
      "shop_id": "fa575804-ec99-48cf-ae3e-cb4ad7f7c048",
      "location": [-1.28263604640961, 36.8719444274902]
    }, {
      "shop_id": "c92786c7-a472-4487-8f83-abf3c04dc4e0",
      "location": [-1.28353571891785, 36.8731384277344]
    }, {
      "shop_id": "8a36e347-690c-4529-b9b4-5567e948c01b",
      "location": [-1.28350710868835, 36.8731918334961]
    }, {
      "shop_id": "23fe99e6-7d3d-484d-97fb-8f4cef159caa",
      "location": [-1.28489, 36.874752]
    }, {
      "shop_id": "347e5b5e-7cbb-400b-9244-aab106a3ed53",
      "location": [-1.2849602, 36.874554]
    }, {
      "shop_id": "f79ed851-adc6-4a83-ae64-ced6760035df",
      "location": [-1.2837253, 36.874367]
    }, {
      "shop_id": "bd17fc02-2310-49f7-904e-ba217a3dbe4d",
      "location": [-1.2913445, 36.872017]
    }, {
      "shop_id": "eb8c3efb-0d39-4ebd-b009-bf42fd0b773e",
      "location": [-1.2937208, 36.867134]
    }, {
      "shop_id": "44a75595-216e-4de9-90bc-ffe317d67028",
      "location": [-1.2940774, 36.867123]
    }, {
      "shop_id": "d50954f1-39ac-4f20-8679-a9ff3e5a102a",
      "location": [-1.29028069972992, 36.8672676086426]
    }, {
      "shop_id": "89f3bca3-c1d5-45ef-bc85-f1697beb7b2b",
      "location": [-1.2898782491684, 36.8658409118652]
    }, {
      "shop_id": "f9916e0f-6c35-464e-9175-9087aac0aa96",
      "location": [-1.290999, 36.864147]
    }, {
      "shop_id": "23ccdf20-9993-469b-9162-0fba34b6bbce",
      "location": [-1.292226, 36.86391]
    }, {
      "shop_id": "62901379-f0c6-427f-b2fb-f407f382a25c",
      "location": [-1.2937711, 36.863983]
    }, {
      "shop_id": "73a11229-f5aa-4dc6-8064-bbf328d1d376",
      "location": [-1.2938521, 36.864765]
    }, {
      "shop_id": "da48d704-96e1-446a-9498-9a9aed319b9b",
      "location": [-1.2931952, 36.861332]
    }, {
      "shop_id": "4020bad5-e7f0-423a-a1cc-d41a1c4480bc",
      "location": [-1.29265570640564, 36.8610420227051]
    }, {
      "shop_id": "b94a1c3d-eac8-456d-9d01-397b78750b0c",
      "location": [-1.2924439, 36.860584]
    }, {
      "shop_id": "8adda32f-ccfb-4031-8350-97cac1cba8a1",
      "location": [-1.294834, 36.86012]
    }, {
      "shop_id": "4d2f9ed4-b2fa-445f-ae14-054625c048a3",
      "location": [-1.2951218, 36.86]
    }, {
      "shop_id": "3eafa0dc-dce1-428d-98ac-b5cd1fc15d77",
      "location": [-1.2955085, 36.859814]
    }, {
      "shop_id": "387c0b04-82c2-481e-b451-02ddcdb41f23",
      "location": [-1.2956008, 36.85985]
    }, {
      "shop_id": "0460a5be-f472-4352-98e9-18d599f88551",
      "location": [-1.2956203, 36.85986]
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
      "shop_id": "45327e87-f92d-4cf0-94ac-5adbdfdc531a",
      "location": [-1.2958732843399, 36.859920501709]
    }, {
      "shop_id": "222b1f15-4e3b-445a-bb71-9a540b85f458",
      "location": [-1.2941815, 36.855003]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Embakasi Village Kabansoora",
    "route_id": "fc39aa9f-28a7-4ce0-ae9e-ac8d7b45df2c",
    "matrix_info": {
      "DistanceMatrixAPI requests": 314,
      "cache_hit": "81%"
    },
    "distance": "30.16km",
    "path": "dsfG_se`F_fI_tDxN~i@dt@jE{H?v@lD@Jq@e@o@dBqBxAmFOLrCC\\OEKTUIRu@aE~@OMvPpR~Nd@aDpFcB`GFLYp@t@rF_ZGxJtGla@zFnRaK}HoYFD@FBB??BABGF^~LrIJXN`C`FeWfLiEtbEzhB",
    "shops": [{
      "shop_id": "8f929eeb-f3fd-4f57-a5ab-fe82ecc63e34",
      "location": [-1.2974724, 36.926876]
    }, {
      "shop_id": "e1f22ee5-82ec-4365-9e1d-b48b796a8d35",
      "location": [-1.3, 36.92]
    }, {
      "shop_id": "dbcd3497-2fab-43db-bcbe-d56e1ba39208",
      "location": [-1.3085063, 36.918976]
    }, {
      "shop_id": "62c08bb5-7d99-4a32-afb9-74f275d8946b",
      "location": [-1.3069277, 36.91898]
    }, {
      "shop_id": "74e8494d-17cd-4de0-8e52-0ff16f074257",
      "location": [-1.3072057, 36.91811]
    }, {
      "shop_id": "4cd3f855-c591-40fe-97d5-67dbb03b01a8",
      "location": [-1.3072155, 36.91805]
    }, {
      "shop_id": "eab93e52-1316-4c08-8b96-a2955c76ac25",
      "location": [-1.30696856975555, 36.9182357788086]
    }, {
      "shop_id": "c9e68cc9-25d5-4a7d-b719-326f9a337bbe",
      "location": [-1.3067296, 36.917732]
    }, {
      "shop_id": "3f39c2a8-e773-45ce-b7e0-6544f9a69a50",
      "location": [-1.3061557, 36.917282]
    }, {
      "shop_id": "0d0d9a3a-f50d-46df-bc5c-159c3d48a7b4",
      "location": [-1.3049695, 36.917355]
    }, {
      "shop_id": "53abed45-10bc-44ed-8d6f-1f198983307f",
      "location": [-1.3050354, 36.916622]
    }, {
      "shop_id": "502c9aaa-9ee2-48f8-ba93-feb1870cb405",
      "location": [-1.3050174, 36.916473]
    }, {
      "shop_id": "430fbdb3-678a-45a4-8064-e5e1fdab225a",
      "location": [-1.3049424, 36.916504]
    }, {
      "shop_id": "1d0ce462-e4d7-488b-ab03-8b301322a579",
      "location": [-1.304877, 36.916393]
    }, {
      "shop_id": "6f7f1e50-b8d6-468f-8a11-5f8cadbbcec5",
      "location": [-1.3047734, 36.916443]
    }, {
      "shop_id": "95cdfab3-14d0-467c-aa4a-5c57a2fa2559",
      "location": [-1.3048656, 36.916706]
    }, {
      "shop_id": "c9673a85-6b47-4a30-8a03-d29cbfdb8b88",
      "location": [-1.303902, 36.91639]
    }, {
      "shop_id": "486ce9be-55a1-415a-b317-c50c80118164",
      "location": [-1.3038247, 36.91646]
    }, {
      "shop_id": "7cba86a9-5487-4b03-8240-d799a3717072",
      "location": [-1.3066611, 36.913326]
    }, {
      "shop_id": "1a109b18-9126-4570-8076-2128553fa32b",
      "location": [-1.30921936035156, 36.9131355285645]
    }, {
      "shop_id": "861ccd07-eb88-4281-856a-887227f155cc",
      "location": [-1.3084114, 36.911934]
    }, {
      "shop_id": "b528cb30-c97b-4e37-86a1-21411c3b08c8",
      "location": [-1.3079135, 36.91064]
    }, {
      "shop_id": "4223cffe-5eb4-4aba-b314-0e0143203c43",
      "location": [-1.3079529, 36.910572]
    }, {
      "shop_id": "4d1c07d4-cc7c-4dc5-8853-0d8dc07e71dc",
      "location": [-1.3078243, 36.910316]
    }, {
      "shop_id": "11e9cab9-8e83-4b00-ab7b-8b15718a3be1",
      "location": [-1.3080894, 36.909096]
    }, {
      "shop_id": "fec308b7-7050-4947-aaa1-43ac482e8a19",
      "location": [-1.3037678, 36.909138]
    }, {
      "shop_id": "c45a6e71-b54c-4e2d-9578-1ac151bac23a",
      "location": [-1.30566167831421, 36.9077491760254]
    }, {
      "shop_id": "3cc7c21e-b82a-4033-bfa1-e1c434df1674",
      "location": [-1.3111726, 36.906494]
    }, {
      "shop_id": "ba4e4f28-15aa-4d38-9069-cd24b21d48d2",
      "location": [-1.314291, 36.90842]
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
      "shop_id": "c1290bd7-669a-463d-818b-7fa498ab2772",
      "location": [-1.3127882, 36.91258]
    }, {
      "shop_id": "fb7e514a-617f-4b97-9907-373229836ccf",
      "location": [-1.3128082, 36.91262]
    }, {
      "shop_id": "6f5781f2-760e-4916-aae7-d606002ab05b",
      "location": [-1.3128538, 36.91246]
    }, {
      "shop_id": "1acb1e14-837b-494f-8150-8a3f2c2066ad",
      "location": [-1.3150945, 36.91076]
    }, {
      "shop_id": "e3d711da-02b7-4f17-b3b1-964b2886c3a2",
      "location": [-1.3151493, 36.910625]
    }, {
      "shop_id": "aace7726-44b9-443c-8712-d5e49c5dcb6b",
      "location": [-1.31523442268372, 36.9099807739258]
    }, {
      "shop_id": "a185fa4f-8efa-417e-b61c-da79ba1bf2b0",
      "location": [-1.31636214256287, 36.9138450622559]
    }, {
      "shop_id": "2a73f71c-da7f-4fea-b292-5a43d29a3617",
      "location": [-1.3184785, 36.914856]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Donholm 2",
    "route_id": "d7be2f4e-f98e-458d-aef4-b8e6faa6a3ab",
    "matrix_info": {
      "DistanceMatrixAPI requests": 209,
      "cache_hit": "90%"
    },
    "distance": "7.78km",
    "path": "`h{F{`g`FF@}@f@DFiC]gGhDcAr@a@n@b@`DEEhOdKvDbKb@S@GCCXBaUtMf\\lDlOkOgCwQyAlJoH}LlE{@sGxCC?ABg@d@wDyAQo@kEcLlL|DwIbHo@Pg@MwCcEo@~@Fz@{AoAg@KFe@GcA`@]DDRWx@e@`By@y@}@dAcBtC{B",
    "shops": [{
      "shop_id": "2132e8cf-86dc-47ab-a033-f9c37d6424bc",
      "location": [-1.2917341, 36.905247]
    }, {
      "shop_id": "3ecd9da9-76e5-43fb-ac0a-a9113d05b373",
      "location": [-1.29142487049103, 36.9050521850586]
    }, {
      "shop_id": "af5c916a-71f7-4c3c-80e3-06154ea60dbb",
      "location": [-1.2914469, 36.905006]
    }, {
      "shop_id": "4b7ca1e2-379f-47fa-90ae-2d27f51451e8",
      "location": [-1.2907637, 36.90516]
    }, {
      "shop_id": "4777fc92-b837-469d-b1e6-895b0962e258",
      "location": [-1.289436, 36.904305]
    }, {
      "shop_id": "712aad3b-e15c-4e63-aef9-b109b05a06c5",
      "location": [-1.2891035, 36.904053]
    }, {
      "shop_id": "7d5b8221-a406-4009-a2ab-4a43c30baeca",
      "location": [-1.2889284, 36.903805]
    }, {
      "shop_id": "7a94aeec-15ba-478b-a907-e8da306d2b0e",
      "location": [-1.28911459445953, 36.903003692627]
    }, {
      "shop_id": "10af85f0-3a4f-44d8-a149-6ffcbae2e0cc",
      "location": [-1.2890766, 36.90303]
    }, {
      "shop_id": "8596c24e-e3e6-4060-85e6-b24121ba8181",
      "location": [-1.2916927, 36.901077]
    }, {
      "shop_id": "ca49af7e-a8ac-49c8-873a-d17726e50d54",
      "location": [-1.29261469841003, 36.8991432189941]
    }, {
      "shop_id": "5a349ce4-00a3-4f56-9b9c-8e4ef9069bac",
      "location": [-1.29279255867004, 36.8992385864258]
    }, {
      "shop_id": "b85ba37d-3b7e-40e5-9da9-c2937e6c4680",
      "location": [-1.2928005, 36.899284]
    }, {
      "shop_id": "ee8de2c8-5d7e-4097-ab59-e8efe71b13b8",
      "location": [-1.292784, 36.8993]
    }, {
      "shop_id": "3b0bb220-5806-462e-8ae6-b575bda36054",
      "location": [-1.29291093349457, 36.8992805480957]
    }, {
      "shop_id": "79057d75-376e-4dd3-95f0-2278e200ed86",
      "location": [-1.28938341140747, 36.8969268798828]
    }, {
      "shop_id": "f0b2b219-0336-414b-af98-43e5a1f37208",
      "location": [-1.29405510425568, 36.8960647583008]
    }, {
      "shop_id": "0e3e26a7-f662-4e7f-b6cc-2ad7396b53f3",
      "location": [-1.2966914, 36.89868]
    }, {
      "shop_id": "52764e91-d18a-411e-a1a8-ffdadcffa6db",
      "location": [-1.2960148, 36.901676]
    }, {
      "shop_id": "55d18169-5e06-4fee-ab0e-26d3b735b750",
      "location": [-1.29556429386139, 36.899845123291]
    }, {
      "shop_id": "e4cabd8f-5eee-4022-8e9a-88a5a0dc618b",
      "location": [-1.2940387, 36.90208]
    }, {
      "shop_id": "f374f61e-c125-401d-b40d-2fa3bda594c6",
      "location": [-1.2950672, 36.90238]
    }, {
      "shop_id": "8b3bf70d-bfa8-47d6-a058-265c23a65508",
      "location": [-1.2936901, 36.90161]
    }, {
      "shop_id": "a698be9f-3bdc-4568-b705-c82f0393bf4e",
      "location": [-1.2936677, 36.90161]
    }, {
      "shop_id": "85c50091-aea8-417e-8a27-0ecce2f56c77",
      "location": [-1.29366171360016, 36.9015884399414]
    }, {
      "shop_id": "0ff3e822-d30f-4e2a-8464-18b421ad0da3",
      "location": [-1.29346120357513, 36.9013977050781]
    }, {
      "shop_id": "256ec9ea-6a6e-4149-84af-f97769d96620",
      "location": [-1.2925425, 36.901848]
    }, {
      "shop_id": "12317def-144d-45cf-bbd5-502b9bfd7995",
      "location": [-1.2924521, 36.902092]
    }, {
      "shop_id": "52aa0466-4dba-41bb-b0de-5ec2f8ead734",
      "location": [-1.2914265, 36.904194]
    }, {
      "shop_id": "3ea32cb2-6500-49c0-96e6-1ce8176c41e3",
      "location": [-1.29357624053955, 36.9032363891602]
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
      "shop_id": "658e6151-75a2-47ec-b6d6-fda984605c4e",
      "location": [-1.2906649, 36.90274]
    }, {
      "shop_id": "25eb2f7d-c0ee-40da-9c4a-104c24080d26",
      "location": [-1.2904208, 36.90242]
    }, {
      "shop_id": "45a89f3c-5ff8-47e8-ac9f-5407151aa4ba",
      "location": [-1.2904589, 36.902122]
    }, {
      "shop_id": "2b60d4ae-7c06-4c66-971b-8a5e86150a9d",
      "location": [-1.2900012, 36.90252]
    }, {
      "shop_id": "3bebe7d6-dab4-43ea-9543-b8b378c20ebc",
      "location": [-1.2897958, 36.90258]
    }, {
      "shop_id": "9e4a8eaf-fabd-420e-841a-a16e97a2d8f3",
      "location": [-1.289837, 36.90277]
    }, {
      "shop_id": "f324de28-0e62-4f32-a55d-0a84714e2df8",
      "location": [-1.289795, 36.90311]
    }, {
      "shop_id": "57199ff9-17b1-439e-bb3a-62703ee9342d",
      "location": [-1.289968, 36.90326]
    }, {
      "shop_id": "80c62208-f386-41a4-b8d3-e82f33a10bdb",
      "location": [-1.2899995, 36.903233]
    }, {
      "shop_id": "c0bd99d9-b434-4927-ac89-25eb451c04e1",
      "location": [-1.29010415077209, 36.9033508300781]
    }, {
      "shop_id": "360332c0-2587-4956-88d6-8d32f4cf539e",
      "location": [-1.2903916, 36.90354]
    }, {
      "shop_id": "128132c0-d5db-44d2-97a0-d7856b92a1d2",
      "location": [-1.2908756, 36.903828]
    }, {
      "shop_id": "6f0bc691-70fb-4675-80f0-ef42532ef46b",
      "location": [-1.2905922, 36.904137]
    }, {
      "shop_id": "c631bf58-353a-4604-b3dd-72a900d11f28",
      "location": [-1.29093778133392, 36.9046401977539]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Greater Mombasa Road 2",
    "route_id": "7ecc276a-11aa-4fc3-be26-d78fa06655bd",
    "matrix_info": {
      "DistanceMatrixAPI requests": 283,
      "cache_hit": "86%"
    },
    "distance": "107.51km",
    "path": "n{hH_ilbFyd@mfAbjBtdQdAzADhHo@t@aCb@ZP}@vAL~AiA~@{I`nGkC_CsAtOcISxPeSXElA~AEM?EMqCCQpAgLxQoJpCiEeQbVjOwLeCdGkJjH}@\\|@pBp@r@hZeO`F}D`@Iz@o@~]_E~|c@m~JjGhAfEsBvAH|zTukJtCoFa}Tf|JPHeW_Cg_h@qaK",
    "shops": [{
      "shop_id": "32ea16ff-6fff-4680-9d7c-c0e83f1d7286",
      "location": [-1.51915121078491, 37.2712669372559]
    }, {
      "shop_id": "5275feca-d18c-44f3-ac7f-509dfc4c4b94",
      "location": [-1.5362942, 37.1782]
    }, {
      "shop_id": "b766b670-a1c9-410c-8d73-eee64071ed1b",
      "location": [-1.5366426, 37.17774]
    }, {
      "shop_id": "f6988274-db83-4a4b-85c9-4475da05efd7",
      "location": [-1.5366741, 37.176247]
    }, {
      "shop_id": "c2c54146-a838-4314-88a4-c2d6a792daad",
      "location": [-1.5364263, 37.175976]
    }, {
      "shop_id": "a079062e-f949-4ef6-b588-273b1d05cd9a",
      "location": [-1.5357811, 37.175797]
    }, {
      "shop_id": "8a9dbf1f-6e95-4d8d-a796-1ebe05a1a5dd",
      "location": [-1.5359205, 37.17571]
    }, {
      "shop_id": "40d9945b-5271-4ce4-8c09-b3dc8a26e175",
      "location": [-1.5356106, 37.175274]
    }, {
      "shop_id": "54606888-dc7a-43f0-a400-f347e1d66448",
      "location": [-1.5356796, 37.174793]
    }, {
      "shop_id": "aebc0f29-04ce-4e39-98ce-93bf2b673957",
      "location": [-1.5353063, 37.174473]
    }, {
      "shop_id": "f17c01bf-2c81-4cd2-a865-1b0f5ca57067",
      "location": [-1.533567, 37.131096]
    }, {
      "shop_id": "bca19411-7c20-4f67-a64d-0cd39062075d",
      "location": [-1.5328683, 37.13174]
    }, {
      "shop_id": "d4227214-fe00-4f11-856b-12ad7c4b390c",
      "location": [-1.53245365619659, 37.1290664672852]
    }, {
      "shop_id": "0a8d6103-9670-424a-bf44-ee3853bb586b",
      "location": [-1.53082859516144, 37.1291656494141]
    }, {
      "shop_id": "1732142f-b8dd-4971-8eda-e028f043fdb2",
      "location": [-1.5336773, 37.1324]
    }, {
      "shop_id": "af0a1e49-012e-46a7-a4ab-9b9d4ce1a78f",
      "location": [-1.5338078, 37.13243]
    }, {
      "shop_id": "e26daa01-2d41-4675-94ff-351e2e925d44",
      "location": [-1.5342005, 37.131954]
    }, {
      "shop_id": "7e895e9a-9ad4-4ba0-adbb-4b5ae0bb8a02",
      "location": [-1.5341694355011, 37.132022857666]
    }, {
      "shop_id": "b71b3e04-4a5c-418f-925a-81f95cfd6dbb",
      "location": [-1.53416848182678, 37.1320533752441]
    }, {
      "shop_id": "83480aa8-e783-496a-ab5b-546560e9d366",
      "location": [-1.5341011, 37.132782]
    }, {
      "shop_id": "b5aa71bf-d4a3-440d-afc4-de66bb348584",
      "location": [-1.534084, 37.132866]
    }, {
      "shop_id": "6f6848c0-e2a2-4827-9cdf-07397617fed6",
      "location": [-1.5344911, 37.13499]
    }, {
      "shop_id": "fe2e3a93-ff03-4e2d-a922-267fdd1acdde",
      "location": [-1.5374988, 37.136833]
    }, {
      "shop_id": "3119a487-8473-4a5a-a485-911a911c4aea",
      "location": [-1.538232, 37.137836]
    }, {
      "shop_id": "bac42a92-5bdb-41c7-bb11-7a2ab261f55c",
      "location": [-1.5353206, 37.134144]
    }, {
      "shop_id": "a69bc08c-ffd4-46e0-99fa-0d71bc7794de",
      "location": [-1.5379359, 37.136337]
    }, {
      "shop_id": "ee1e7f6f-8eb7-42c5-a5b7-99e482456b07",
      "location": [-1.5372716, 37.135025]
    }, {
      "shop_id": "fd840794-3a70-4e2c-9912-615e4fae2383",
      "location": [-1.5354509, 37.13353]
    }, {
      "shop_id": "28ee9632-d0b2-4025-a9a8-fbd188def2a6",
      "location": [-1.5351357, 37.13338]
    }, {
      "shop_id": "3f9be88e-8cc5-4307-8c4e-497d8386985d",
      "location": [-1.5354528, 37.13281]
    }, {
      "shop_id": "8aecd662-3b8b-46ea-8ce3-1a2672b68a46",
      "location": [-1.5357021, 37.132553]
    }, {
      "shop_id": "d7500b46-2baf-48d9-8e65-1c0938058339",
      "location": [-1.540072, 37.135143]
    }, {
      "shop_id": "46a40b2f-f065-449e-b298-9b4a9d5f75a8",
      "location": [-1.5411978, 37.136086]
    }, {
      "shop_id": "a4ea187b-ac5c-493e-8e3e-25ccdf3be542",
      "location": [-1.5413681, 37.13614]
    }, {
      "shop_id": "1120e471-264d-4476-a271-fb4053674e60",
      "location": [-1.5416698, 37.13638]
    }, {
      "shop_id": "27ad055b-b083-466c-875b-21eebb2b2b2a",
      "location": [-1.546629, 37.137344]
    }, {
      "shop_id": "f161cb29-8d9f-4424-bf22-c5c11735e1e5",
      "location": [-1.735746, 37.19869]
    }, {
      "shop_id": "d875f66c-5e8a-45db-b186-ba38cf155e3f",
      "location": [-1.7370931, 37.198322]
    }, {
      "shop_id": "84f6cfc8-d6e0-443e-bc77-a519406c3d17",
      "location": [-1.7380906, 37.1989]
    }, {
      "shop_id": "f9d7fdea-bf7a-4cb5-9ba4-567637efedf1",
      "location": [-1.73852944374084, 37.1988525390625]
    }, {
      "shop_id": "80c32737-63c8-4878-8a96-e62598121bc1",
      "location": [-1.850518, 37.2572]
    }, {
      "shop_id": "ba419209-eb20-4b34-8b0e-594c80269ab9",
      "location": [-1.8512664, 37.2584]
    }, {
      "shop_id": "aa1ef643-eb91-44f1-babb-3dc4d2211afc",
      "location": [-1.738939, 37.1974]
    }, {
      "shop_id": "ecf287ae-daa5-4fc9-8ea5-334785523d17",
      "location": [-1.7390308380127, 37.1973533630371]
    }, {
      "shop_id": "cb0dfbf9-6cde-474f-bc2f-4bc9a2de0bdf",
      "location": [-1.73515582084656, 37.1979904174805]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Juja",
    "route_id": "62790b65-5446-4433-abac-0b4ac0ec9585",
    "matrix_info": {
      "DistanceMatrixAPI requests": 368,
      "cache_hit": "73%"
    },
    "distance": "60.37km",
    "path": "l~mEa_raFd|GhzSBACJnfAja@v`@p_@sLeQvKh@hQnPbo@|oEH@KJ?@EGu]by@LNxLonBsu@edCiFgEmAjAB@lJkIgdCw}A{m@ao@aTtg@iPdPnQgIbGFjCrAf@nAMNpBCNLvq@pw@pAxBhG|IbRif@ql@qbAanFqjR",
    "shops": [{
      "shop_id": "9b7cdec9-fdc7-49e8-8382-2d44ea2a205a",
      "location": [-1.1053764, 37.01836]
    }, {
      "shop_id": "4a6f638e-0fa1-4daf-b0ec-7dbdc028d56b",
      "location": [-1.1054022, 37.018368]
    }, {
      "shop_id": "0bdde714-8d26-4935-a8a0-8016c64e942f",
      "location": [-1.1053832, 37.018314]
    }, {
      "shop_id": "412171c8-a67f-493a-ac46-0c6b439a8e8c",
      "location": [-1.1168175, 37.012814]
    }, {
      "shop_id": "691552f1-0ce8-425f-856b-ec669309f7c3",
      "location": [-1.1222185, 37.007595]
    }, {
      "shop_id": "c1faf015-9887-463d-a6bd-ae602fff269e",
      "location": [-1.1200435, 37.010513]
    }, {
      "shop_id": "d5c4e6e9-6b11-4cf2-9f9d-6a9aafd0f209",
      "location": [-1.1220791, 37.0103]
    }, {
      "shop_id": "b2dd5092-1b9f-4b98-81f7-e567b76cbd2b",
      "location": [-1.12501, 37.007504]
    }, {
      "shop_id": "2e274797-bcfa-4d94-8a5b-bb3221d63247",
      "location": [-1.1327132, 36.974068]
    }, {
      "shop_id": "6c8bcf1e-1474-44d1-b7e8-dff208ee22a1",
      "location": [-1.1327579, 36.974056]
    }, {
      "shop_id": "19f80157-f7e1-4863-8eda-e5ee00ce44d5",
      "location": [-1.1327032, 36.973995]
    }, {
      "shop_id": "d4facf23-88e5-4bba-ac20-c990bcb61339",
      "location": [-1.1326967, 36.97399]
    }, {
      "shop_id": "29df465c-fdb0-4803-b87a-a4eb872531df",
      "location": [-1.1326711, 36.974033]
    }, {
      "shop_id": "324759cb-6377-442b-b88a-a093f4f80112",
      "location": [-1.12776100635529, 36.964729309082]
    }, {
      "shop_id": "e4173732-f0c6-4d03-922e-6c505999debb",
      "location": [-1.1278338432312, 36.9646492004395]
    }, {
      "shop_id": "5ba00d8f-a12f-4e31-ba0c-615430525f02",
      "location": [-1.13004, 36.98249]
    }, {
      "shop_id": "f5b242b4-a887-4580-b232-66050c3d7f1b",
      "location": [-1.1212987, 37.0038]
    }, {
      "shop_id": "60a6bf81-96f9-4285-9456-fcf983104c49",
      "location": [-1.1201342, 37.0048]
    }, {
      "shop_id": "72817182-77bd-4629-aa8a-9a8e7b2aa6ad",
      "location": [-1.1197431, 37.004417]
    }, {
      "shop_id": "dbdf4078-ec85-4ba2-9218-d9314651442c",
      "location": [-1.1197612, 37.004414]
    }, {
      "shop_id": "79fc1ee6-2ba8-427a-933b-8ac67b6389ab",
      "location": [-1.1215894, 37.006065]
    }, {
      "shop_id": "041b0a42-9624-4fe6-8d81-8269f6779ebf",
      "location": [-1.1002727, 37.021225]
    }, {
      "shop_id": "e96c13a6-b277-4343-aa2c-7962b3257169",
      "location": [-1.0927733, 37.02892]
    }, {
      "shop_id": "537e543f-bf27-4fe6-a785-f03175672fe4",
      "location": [-1.0893965, 37.02241]
    }, {
      "shop_id": "c9dedc17-2355-4a35-ba42-16d206675334",
      "location": [-1.0866327, 37.01966]
    }, {
      "shop_id": "7e2b3057-54a9-4346-ac69-8ec094a30b45",
      "location": [-1.0895866, 37.0213]
    }, {
      "shop_id": "28504a43-b0d3-4557-9530-b9b9bc7253a2",
      "location": [-1.0908877, 37.02126]
    }, {
      "shop_id": "eee62949-27c8-4900-a57a-8b9cb135e7da",
      "location": [-1.0915906, 37.02084]
    }, {
      "shop_id": "24d3ba2b-c7f6-4821-bde1-08cd5a3e6823",
      "location": [-1.0917858, 37.020443]
    }, {
      "shop_id": "2c3b89a7-0db1-465d-8691-137feaa7f0c4",
      "location": [-1.091721, 37.02036]
    }, {
      "shop_id": "adffded5-ae09-4d9b-89f7-cf770da212ac",
      "location": [-1.0922918, 37.02038]
    }, {
      "shop_id": "9517c640-2867-4fed-9dd0-9e73d15bb8b9",
      "location": [-1.092369556427, 37.0203094482422]
    }, {
      "shop_id": "3024cfca-d8b2-489d-b6a5-ecadc62b0c3b",
      "location": [-1.1004857, 37.011257]
    }, {
      "shop_id": "7d5a8e39-c0c1-4014-92b4-9fa8ed2b3eb4",
      "location": [-1.1008956, 37.01065]
    }, {
      "shop_id": "054b62a4-457f-4f9f-afd5-9ac902098ecb",
      "location": [-1.1022254, 37.0089]
    }, {
      "shop_id": "15181982-a90e-41bc-ac74-7891d4b42be5",
      "location": [-1.1052908, 37.015186]
    }, {
      "shop_id": "eaeedf5a-a887-43c2-a40c-c71c0686c77f",
      "location": [-1.0980048, 37.025997]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Babadogo",
    "route_id": "211b0b2d-ad7b-450f-b4a1-f0cea56d887b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 439,
      "cache_hit": "75%"
    },
    "distance": "14.41km",
    "path": "|qoF_r``FpPadAyCeLdBOHJaDpD_CmBrHbBrChEdo@yAv\\r_@MEaDab@JqKoNqSC]LCmKi\\gDgFq@sAMYcGjDOgG[eCSBBm@O{Am@iEaBaCu@wE{@Or@eA}D`QzBbHjB`GjHzVSAEZiA~@yDrFfJqEmA|l@kIuAsi@fjA",
    "shops": [{
      "shop_id": "cb19edfc-b199-49b4-98d0-bd080c0d6c7d",
      "location": [-1.2346419, 36.88321]
    }, {
      "shop_id": "df4374d8-5a6c-473b-be97-a39757772e11",
      "location": [-1.23386788368225, 36.8853225708008]
    }, {
      "shop_id": "a31c07bb-1d7a-492a-a091-8b8ca4400ada",
      "location": [-1.23437559604645, 36.8853950500488]
    }, {
      "shop_id": "bdd5c11a-afbc-4a93-81e9-af7a33af8ea6",
      "location": [-1.2344302, 36.88534]
    }, {
      "shop_id": "f6c25d13-57ad-4639-a1b9-0a07cb0f78d1",
      "location": [-1.2336195, 36.884445]
    }, {
      "shop_id": "e97ab299-aebe-4bc1-8174-89e93dfdc350",
      "location": [-1.2329762, 36.885]
    }, {
      "shop_id": "fadc5a45-ded9-4615-8641-434dc799bee2",
      "location": [-1.2345232, 36.8845]
    }, {
      "shop_id": "ac401d92-7f7c-4748-9620-8259f3d10502",
      "location": [-1.2352604, 36.88349]
    }, {
      "shop_id": "9b4f0294-9e33-4b35-941a-961345b05f60",
      "location": [-1.2429672, 36.883938]
    }, {
      "shop_id": "545b4b78-17bd-4daf-9375-c5df61e5b700",
      "location": [-1.247734, 36.878716]
    }, {
      "shop_id": "3cbd3826-878c-4ef7-a8ea-6ab2b9f942a4",
      "location": [-1.2476565, 36.878754]
    }, {
      "shop_id": "a14b26ea-dd4e-4dd3-863a-1f50b6768a2b",
      "location": [-1.2468507, 36.88436]
    }, {
      "shop_id": "aa517ce2-d3c1-49f3-8304-eb171e52fe13",
      "location": [-1.2469074, 36.886368]
    }, {
      "shop_id": "c89ebe00-8adb-4633-b3c8-e8b503353f4d",
      "location": [-1.2444288, 36.889656]
    }, {
      "shop_id": "f63a7e4c-2536-4e20-91da-ed699b99e0d0",
      "location": [-1.2444081, 36.88981]
    }, {
      "shop_id": "329c932e-7277-4e50-b8d3-064d2beb0c29",
      "location": [-1.2444766, 36.889828]
    }, {
      "shop_id": "38ac2a4a-d0e5-49f5-93ea-d80796163033",
      "location": [-1.242487, 36.894524]
    }, {
      "shop_id": "7550f24e-8a72-4575-9c1f-f5353f4421c5",
      "location": [-1.2416534, 36.895676]
    }, {
      "shop_id": "d20b1f9e-3ba0-4d43-aaf6-e2fd8d9a951b",
      "location": [-1.241399, 36.896103]
    }, {
      "shop_id": "8f893bb2-d1a1-451a-8184-1bdb3b9efdef",
      "location": [-1.2413254, 36.89623]
    }, {
      "shop_id": "ad399743-675b-48f0-871c-403a20b2ff79",
      "location": [-1.2400254, 36.895367]
    }, {
      "shop_id": "c7177680-a814-4757-b660-e1bd6bf44b66",
      "location": [-1.2399536, 36.896694]
    }, {
      "shop_id": "7674dbbd-c6a9-4c58-b9da-8df7526d0d68",
      "location": [-1.2398142, 36.897358]
    }, {
      "shop_id": "16a78614-2fff-4e6c-9d0d-bd196c39a056",
      "location": [-1.2397093, 36.897343]
    }, {
      "shop_id": "83f956a7-ed55-4202-ace4-87b05a710c7b",
      "location": [-1.2397292, 36.897568]
    }, {
      "shop_id": "3bc5f2c7-c859-4d9a-a097-79425b6c7ef2",
      "location": [-1.2396544, 36.898026]
    }, {
      "shop_id": "5051709e-9044-4856-9f24-fdee267d3d71",
      "location": [-1.2394241, 36.899036]
    }, {
      "shop_id": "d0c7f7b2-8721-4430-8744-9a12ca7d3208",
      "location": [-1.2389323, 36.899685]
    }, {
      "shop_id": "ca1b1096-03e6-4331-a160-7d048bf89c95",
      "location": [-1.23866438865662, 36.9007682800293]
    }, {
      "shop_id": "0c8c6b14-7c06-4f4f-9153-d3160caddf8b",
      "location": [-1.238361120224, 36.9008522033691]
    }, {
      "shop_id": "37bbccaf-e121-4317-b80c-131f9b90da0c",
      "location": [-1.2386199, 36.9012]
    }, {
      "shop_id": "c9768871-f7a1-4f83-b0db-47c52fe044d1",
      "location": [-1.2376728, 36.898315]
    }, {
      "shop_id": "9c7ad44d-b4da-4b01-a58b-6b5e7b37c75c",
      "location": [-1.2382919, 36.896847]
    }, {
      "shop_id": "730b3569-aba8-482e-a00a-1909e67b3512",
      "location": [-1.23883056640625, 36.8955574035645]
    }, {
      "shop_id": "aa579d83-8dfb-43a2-94de-2a926d875951",
      "location": [-1.2403252, 36.89174]
    }, {
      "shop_id": "b0e5f7e2-61bb-412b-8f81-df1e9c7656fd",
      "location": [-1.24023342132568, 36.8917465209961]
    }, {
      "shop_id": "9a85c2f5-1953-4082-912d-1f6a547cac56",
      "location": [-1.2401993, 36.891613]
    }, {
      "shop_id": "1913b0fd-134c-496d-9346-be90685b9fe7",
      "location": [-1.2398301, 36.891285]
    }, {
      "shop_id": "78d44fca-ec48-458f-8346-85b1b0e9fe17",
      "location": [-1.238895, 36.890068]
    }, {
      "shop_id": "cedb998b-c3ed-4922-a325-9b10f46f0367",
      "location": [-1.2407039, 36.891117]
    }, {
      "shop_id": "8f9ce42f-23d5-4ca4-a879-4b9228a7f7a8",
      "location": [-1.2403069, 36.883774]
    }, {
      "shop_id": "f716cd41-2ef4-4260-a234-84b0b26f74eb",
      "location": [-1.2386498, 36.884197]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Imara",
    "route_id": "7aead0f3-cef4-42c1-ba36-be6d3fcd7688",
    "matrix_info": {
      "DistanceMatrixAPI requests": 418,
      "cache_hit": "78%"
    },
    "distance": "25.57km",
    "path": "dsfG_se`FonC~oAuCmHIMOGo@kC_EmJ`DsBSe@x@]n@MiFt@xGcFeHaQnEgAc@_CqBb@I{Bw@o@mGtDgEwTx^vd@sFrB\\PhAd@TBkWbTaCgBa@_AcBJkBVi@XkHxJvJm@pHjClL`]?DsDfC_Bv@aAnDoGsBxSyCTfAkDzZn@kBv{CueC",
    "shops": [{
      "shop_id": "fc8b2f2a-9ce8-4acc-9d6e-689f543afc60",
      "location": [-1.32683062553406, 36.8849639892578]
    }, {
      "shop_id": "43b46136-4713-4dc8-86d5-e53140c7b257",
      "location": [-1.3260794, 36.886475]
    }, {
      "shop_id": "3c9614d5-eb30-4833-81f3-fc897560d9ba",
      "location": [-1.32602846622467, 36.8865394592285]
    }, {
      "shop_id": "08ac9880-4d25-4782-8cdb-9e9624aff03c",
      "location": [-1.3259451, 36.88658]
    }, {
      "shop_id": "e7914983-23d2-43c5-accb-46a79a5b243a",
      "location": [-1.3257062, 36.887283]
    }, {
      "shop_id": "2fac79e0-c2d7-4e6b-bb37-d4944915277c",
      "location": [-1.3247463, 36.88911]
    }, {
      "shop_id": "004b6806-ddf7-4e19-9cb5-da14aa2722d6",
      "location": [-1.32556, 36.889687]
    }, {
      "shop_id": "2ece0c65-6a8a-44b6-85c2-c0730fb6f020",
      "location": [-1.32546401023865, 36.8898811340332]
    }, {
      "shop_id": "79cd9eb1-ea18-419e-8657-fca9dbfaa2df",
      "location": [-1.3257498, 36.890034]
    }, {
      "shop_id": "1865fbca-55e8-41a1-8cdc-e7235d932ad8",
      "location": [-1.3259933, 36.890095]
    }, {
      "shop_id": "eddffc9b-36c0-4ab4-9c91-6f67ff95c247",
      "location": [-1.3248223, 36.88983]
    }, {
      "shop_id": "09d60e72-6608-4373-86cd-27352751ad09",
      "location": [-1.3262275, 36.890972]
    }, {
      "shop_id": "757e54f2-1afa-41b1-92d4-2c28b6b74601",
      "location": [-1.3247554, 36.893864]
    }, {
      "shop_id": "d318fbfd-6284-4a2c-83c6-a61686fb59b7",
      "location": [-1.325798, 36.89422]
    }, {
      "shop_id": "bb51d1d9-0877-4bd3-9a04-9cacc683f9f8",
      "location": [-1.32562339305878, 36.8948593139648]
    }, {
      "shop_id": "099c8bb9-be85-4832-8330-af44740d1add",
      "location": [-1.3250468, 36.894676]
    }, {
      "shop_id": "c49b4ea6-d3d2-4aad-9f24-57cd68c63e43",
      "location": [-1.3249997, 36.895298]
    }, {
      "shop_id": "33fc2bb8-e259-44f4-9992-5a7cc5bd5810",
      "location": [-1.3247232, 36.895535]
    }, {
      "shop_id": "dc89c364-96b0-4b77-89e2-1dc71806b475",
      "location": [-1.3233745098114, 36.8946304321289]
    }, {
      "shop_id": "784a8c6a-2f43-4fff-839e-b766865d4e84",
      "location": [-1.3223733, 36.89811]
    }, {
      "shop_id": "5aa06ac6-0f6b-4b5e-8f60-b48e39d362b8",
      "location": [-1.3274553, 36.89207]
    }, {
      "shop_id": "e8b7c126-ec4c-4b45-90f9-5ab2b462ec4a",
      "location": [-1.3262433, 36.891487]
    }, {
      "shop_id": "15e8c4de-6556-449a-9ad9-dc318570774b",
      "location": [-1.326394, 36.8914]
    }, {
      "shop_id": "fd0fba41-95e5-4e59-b42f-120d9fea8297",
      "location": [-1.3267553, 36.891205]
    }, {
      "shop_id": "a882eba9-da15-4812-bdf3-fda5f7b6c56a",
      "location": [-1.3268691, 36.891193]
    }, {
      "shop_id": "950441a8-647f-48fa-b4b5-423c5cf4ed4c",
      "location": [-1.3229696, 36.88781]
    }, {
      "shop_id": "fd3c6580-eef8-4fe3-a849-fdc5b43314df",
      "location": [-1.3223205, 36.888325]
    }, {
      "shop_id": "7e60d230-cfec-4ed7-8a52-e3208bddeee4",
      "location": [-1.3221548, 36.888653]
    }, {
      "shop_id": "d0f5e22e-5c4b-4601-b882-c97a36d4fbef",
      "location": [-1.3216507, 36.888588]
    }, {
      "shop_id": "49123b57-1c16-4cc4-b2ec-cc511ce675d3",
      "location": [-1.3211142, 36.888474]
    }, {
      "shop_id": "c1bc2a25-03cb-4240-8c3a-2a4734ac56f7",
      "location": [-1.3208973, 36.888344]
    }, {
      "shop_id": "447d80b5-8bba-46d4-bd3f-db160ad761ee",
      "location": [-1.3193963, 36.886448]
    }, {
      "shop_id": "c3494c3c-19d8-4a22-a2d0-c48c72e23183",
      "location": [-1.321281, 36.886677]
    }, {
      "shop_id": "f44fe54a-f448-4f05-9dcb-6ae1f3e2d70b",
      "location": [-1.3228135, 36.885975]
    }, {
      "shop_id": "e9d84012-868d-47fd-8845-48aac6d4e33e",
      "location": [-1.3249564, 36.881165]
    }, {
      "shop_id": "247a0763-c486-439a-9970-6186038638dd",
      "location": [-1.3249649, 36.881145]
    }, {
      "shop_id": "283936e8-5465-413e-9e33-2e0997daf14f",
      "location": [-1.3240589, 36.880455]
    }, {
      "shop_id": "8581885d-996c-4793-93d1-9fbcb9520509",
      "location": [-1.32358431816101, 36.880184173584]
    }, {
      "shop_id": "fbdad33b-9e35-4e49-8f70-f20315e473f0",
      "location": [-1.3232538, 36.879295]
    }, {
      "shop_id": "88431894-a01d-46cb-9395-438a864a4b15",
      "location": [-1.3218884, 36.879875]
    }, {
      "shop_id": "2a09ec07-506f-4e3f-9a8f-463a82f6f241",
      "location": [-1.32522249221802, 36.8806495666504]
    }, {
      "shop_id": "90ed1a1d-9eda-431c-bb65-9075b211705e",
      "location": [-1.3253329, 36.880295]
    }, {
      "shop_id": "363c68eb-9401-49cc-8d65-dbe086e57814",
      "location": [-1.3244737, 36.87583]
    }, {
      "shop_id": "8c7701af-6b2d-4228-9999-523440ec62ff",
      "location": [-1.3247131, 36.876366]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kabete",
    "route_id": "fd8d05e0-3c99-4f16-a297-a78c930ac666",
    "matrix_info": {
      "DistanceMatrixAPI requests": 296,
      "cache_hit": "69%"
    },
    "distance": "57.86km",
    "path": "`z|Fedx_FeqF`|TnE]|ClBh@?nS~H|@iAbDkGbDiGxAeGiKeF{JEer@iU[Ai@w@aBfF_G~LeQdDiNzBzJsBlEK|b@_BgFj@l@h^wV`yAcnCv}An^rw@_ANtAxQtJo|GdgBahMzcB{hHpxDxcA",
    "shops": [{
      "shop_id": "fb80238e-9dd0-4b3c-94b5-218b8f815eb5",
      "location": [-1.2609413, 36.71682]
    }, {
      "shop_id": "4b24be2c-221b-4d8a-888e-05e0eccc9d27",
      "location": [-1.2619781, 36.716965]
    }, {
      "shop_id": "60254faa-e8b5-498e-82c0-9d5a707f4ff0",
      "location": [-1.2627732, 36.716423]
    }, {
      "shop_id": "c8979a8a-cdc8-4361-803b-210d2484dcbd",
      "location": [-1.2629766, 36.716415]
    }, {
      "shop_id": "a494f4f8-5ed6-43f5-94de-b4ab561a5361",
      "location": [-1.2662619, 36.714817]
    }, {
      "shop_id": "17e785bc-216f-4a53-af86-481c174c1a30",
      "location": [-1.2665668, 36.715187]
    }, {
      "shop_id": "8ef37e76-5883-48da-9570-e33457722716",
      "location": [-1.2673935, 36.71653]
    }, {
      "shop_id": "51558dd6-41f5-4e0e-bf29-991d9375d265",
      "location": [-1.2682068, 36.71786]
    }, {
      "shop_id": "216011ee-ccd8-4f12-bc93-cf6c2e74edbf",
      "location": [-1.2686577, 36.719166]
    }, {
      "shop_id": "e76bc2a2-7a27-4ad7-9bfa-b165e43311ab",
      "location": [-1.2666916, 36.720318]
    }, {
      "shop_id": "4ae18884-1ac1-4302-bbe6-1dc7837bbc6c",
      "location": [-1.2647943, 36.720345]
    }, {
      "shop_id": "6f5e5dce-35b0-4fa7-b551-42878357defa",
      "location": [-1.2565956, 36.723923]
    }, {
      "shop_id": "af1acb7c-7528-4796-b13b-41b3401e5363",
      "location": [-1.2564648, 36.723927]
    }, {
      "shop_id": "dc9b5151-c4b6-42f3-99cd-87c2f04e51ed",
      "location": [-1.2562468, 36.724213]
    }, {
      "shop_id": "192dafb6-a1e2-4aa9-962d-96485267afa8",
      "location": [-1.2557623, 36.723045]
    }, {
      "shop_id": "28535275-decd-46d8-b6cd-ba0cd5602498",
      "location": [-1.2544799, 36.720806]
    }, {
      "shop_id": "2b11cd35-3d26-4459-bfaa-07ea70bc366f",
      "location": [-1.2515686, 36.719982]
    }, {
      "shop_id": "415dac39-76ac-41fd-8390-208a4cc80d52",
      "location": [-1.2491213, 36.719364]
    }, {
      "shop_id": "cb63e373-99bd-491b-9a49-2918436b42dc",
      "location": [-1.2510184, 36.71994]
    }, {
      "shop_id": "f55fd2d5-10e5-4ba2-8410-a736ee01a131",
      "location": [-1.2520461, 36.719997]
    }, {
      "shop_id": "69a536a0-0277-4191-a6c1-60072d9f3a4c",
      "location": [-1.2578002, 36.72048]
    }, {
      "shop_id": "32b8780c-c9e3-485d-9b9f-2b8bf1550e9d",
      "location": [-1.2566415, 36.72026]
    }, {
      "shop_id": "cf0d5527-f2f2-43b6-83e3-06e000245401",
      "location": [-1.2568741, 36.715252]
    }, {
      "shop_id": "ff48ced0-7daa-426f-92d2-ccbbcb30f03d",
      "location": [-1.25306570529938, 36.7008399963379]
    }, {
      "shop_id": "0a38bd4a-648a-4903-854e-f060d54bd059",
      "location": [-1.230168, 36.68568]
    }, {
      "shop_id": "bdb29c19-f45b-4a43-847d-2627b9b2bc88",
      "location": [-1.2352054, 36.67662]
    }, {
      "shop_id": "222745f0-e4d9-47a3-9232-d1e615f6ba99",
      "location": [-1.234887, 36.676537]
    }, {
      "shop_id": "8b477452-07f7-430c-add3-4655089a9f2a",
      "location": [-1.2353165, 36.673527]
    }, {
      "shop_id": "5e742934-e519-4b58-8730-b643e6d4d6ff",
      "location": [-1.2371895, 36.719208]
    }, {
      "shop_id": "d200d6cc-6de5-44ef-baeb-0f7b02d56279",
      "location": [-1.2538646, 36.79234]
    }, {
      "shop_id": "2bace806-0049-4a72-a8f9-84c70386dc64",
      "location": [-1.27, 36.84]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Dagorreti Corner",
    "route_id": "9893d81f-df1e-49a9-a0d4-0a5016e00e0f",
    "matrix_info": {
      "DistanceMatrixAPI requests": 467,
      "cache_hit": "76%"
    },
    "distance": "32.55km",
    "path": "`z|Fedx_FlElhJ`OrdAqXp@ABBWwCpH~Jrb@l@OgAtKFv@LHlHhO~@UoBnEZ^r@pBxAtOFtB\\hKmArDy@LjAvAORa@xELBbMrYb@Hn@AdKcA`CbDwIoe@oIdKz@_[oGw[BA`Q_pAoJc`AKObCgF~@yDzBeFeGqA`@zGsIiAgRa~I",
    "shops": [{
      "shop_id": "a881976d-c53c-43fa-96de-d3e2e847edbc",
      "location": [-1.3007188, 36.771156]
    }, {
      "shop_id": "7dcb8366-506e-4b14-91e1-b039faee5137",
      "location": [-1.3032888, 36.76002]
    }, {
      "shop_id": "9bb7b8bd-4848-4baa-bc6b-8aa045f5c622",
      "location": [-1.2991965, 36.75977]
    }, {
      "shop_id": "8dde27de-10e2-4118-90d0-7f68fbca02e4",
      "location": [-1.2991884, 36.759754]
    }, {
      "shop_id": "e9e5455e-99b7-485f-bf5d-9306353da415",
      "location": [-1.2992113, 36.75987]
    }, {
      "shop_id": "c86b9278-ff93-4e32-a616-6baa7ba2db6c",
      "location": [-1.2984484, 36.758343]
    }, {
      "shop_id": "903babb7-a9ed-450a-8f8f-cf472d14220b",
      "location": [-1.3003702, 36.75264]
    }, {
      "shop_id": "79b37676-1c07-481d-8f91-1e63fd014475",
      "location": [-1.3006043, 36.75272]
    }, {
      "shop_id": "1f799258-14fc-4f8c-abab-56714dce4bec",
      "location": [-1.3002357, 36.750694]
    }, {
      "shop_id": "fb79e191-3481-4498-9d7e-966df205cb62",
      "location": [-1.300285, 36.75041]
    }, {
      "shop_id": "927a3be1-f286-41c0-a00e-92dbeb83e7f7",
      "location": [-1.3003459, 36.750362]
    }, {
      "shop_id": "0dca0d15-653f-46a7-95c5-b532de5d361f",
      "location": [-1.3018639, 36.747753]
    }, {
      "shop_id": "8ec29620-ece9-4e7f-81ec-cc0a941f9de0",
      "location": [-1.3021815, 36.74786]
    }, {
      "shop_id": "399de213-0485-4d2a-a16d-ef386468bfb7",
      "location": [-1.3016154, 36.746822]
    }, {
      "shop_id": "f7ff3eb6-7057-4eec-9efd-3369e5bb56b0",
      "location": [-1.301764, 36.74666]
    }, {
      "shop_id": "c132d504-e91d-4a21-a5b3-cf3ca7ca2ffb",
      "location": [-1.3020188, 36.74609]
    }, {
      "shop_id": "942b2c5f-c00f-48b0-ad01-a3e6c2c12bba",
      "location": [-1.302466, 36.74342]
    }, {
      "shop_id": "4f75ac27-c8be-420b-ad80-95c29f8090f0",
      "location": [-1.3025122, 36.74283]
    }, {
      "shop_id": "63f17c45-a6f7-41c8-8fa5-8f6188546d34",
      "location": [-1.3026586, 36.740856]
    }, {
      "shop_id": "cda59453-912f-4f7e-91a7-a833039d120b",
      "location": [-1.3022697, 36.73996]
    }, {
      "shop_id": "30ed2d62-b6ef-4799-a762-5923c60a0cad",
      "location": [-1.3019849, 36.739887]
    }, {
      "shop_id": "9ab91cbf-33eb-4946-8a30-92fa7dda651f",
      "location": [-1.3023612, 36.73945]
    }, {
      "shop_id": "b2efed3e-fa4c-4bd6-bfe1-8388f5ae455c",
      "location": [-1.30228316783905, 36.7393493652344]
    }, {
      "shop_id": "c2a94011-80bf-46f5-bbec-81f2e0ce9f4a",
      "location": [-1.3021114, 36.73826]
    }, {
      "shop_id": "f1f01cfc-17ec-414b-9c97-cf9641af5b3b",
      "location": [-1.3021803, 36.738235]
    }, {
      "shop_id": "d8e312d0-36e9-45f1-985d-dc1718fdf98d",
      "location": [-1.3044358, 36.733982]
    }, {
      "shop_id": "5d4f885f-23c5-4300-89d5-7e32c6720904",
      "location": [-1.3046203, 36.733932]
    }, {
      "shop_id": "5172fa34-d260-467b-9e21-1f6695de56e6",
      "location": [-1.3048593, 36.733944]
    }, {
      "shop_id": "02a9b7fc-fb03-42ac-a664-8a3c2a86bc59",
      "location": [-1.3068101, 36.734283]
    }, {
      "shop_id": "bdee4047-4007-4927-be83-a8b74e04691a",
      "location": [-1.3074577, 36.733463]
    }, {
      "shop_id": "1bc9fa8f-da67-494e-9ee5-42b781d7e6d3",
      "location": [-1.3057367, 36.739624]
    }, {
      "shop_id": "4e769d0f-dfd4-40fc-a226-dd997b2361eb",
      "location": [-1.304058, 36.737667]
    }, {
      "shop_id": "6fc25f7c-1920-4e25-89e3-ac931a33d938",
      "location": [-1.3043585, 36.74215]
    }, {
      "shop_id": "03b826a8-8a2e-406b-9d75-47731924e752",
      "location": [-1.3029968, 36.74675]
    }, {
      "shop_id": "8d382c1c-e7c8-4639-9c12-0e93e4f4a930",
      "location": [-1.3030193, 36.74676]
    }, {
      "shop_id": "d7be73e3-5069-41ff-ae33-07d4c747b725",
      "location": [-1.3059105, 36.75972]
    }, {
      "shop_id": "c491cfa0-2fa4-4dc4-87fa-280debbaa4b8",
      "location": [-1.3040723, 36.77014]
    }, {
      "shop_id": "ec34a046-afce-4c86-89aa-08ae7589e16c",
      "location": [-1.3040086, 36.770218]
    }, {
      "shop_id": "c29e6e54-1150-44c8-bf84-79bd47d66ce0",
      "location": [-1.3046715, 36.77138]
    }, {
      "shop_id": "9c4294f9-ba97-45e6-87b8-60160afa5d1e",
      "location": [-1.3049885, 36.77231]
    }, {
      "shop_id": "ff7de728-4695-45a1-97cd-e760401306d2",
      "location": [-1.30561304092407, 36.7734642028809]
    }, {
      "shop_id": "d6fee8c3-77a5-4eff-9ac9-e4ee04a55125",
      "location": [-1.3043003, 36.773872]
    }, {
      "shop_id": "ca29e792-00b6-4a8d-a099-f97da27d6482",
      "location": [-1.3044693, 36.772453]
    }, {
      "shop_id": "b6169cdf-ce10-4c48-902d-4e471ba012a3",
      "location": [-1.3027726, 36.772823]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Donholm 1",
    "route_id": "f5cb750d-b5c5-4c3f-8221-a83bbbff3fb7",
    "matrix_info": {
      "DistanceMatrixAPI requests": 297,
      "cache_hit": "89%"
    },
    "distance": "13.72km",
    "path": "`h{F{`g`FxEfhAz@V@@x@zAP|@fBrBdDmBzNoI@RBk@JEvD}JiA~AAJs@dLZ`AxFdT~A^B?AEv@~@\\n@oAgEAECA_@mA`Da@C_CdHqEIvI?lDo@r@JRM|@eBbBhFmADArE]Xj@r@zB_D{AqBtAlMo^qa@ze@uLpAjBoD]_@ES^pBwJaLb@HpR{Go@j@XzEgj@k`B",
    "shops": [{
      "shop_id": "3d29162d-14ef-4d81-8d08-46e00903aa46",
      "location": [-1.2927794, 36.893536]
    }, {
      "shop_id": "fba42540-0c27-443f-aead-ee0f474ed77b",
      "location": [-1.2930789, 36.893417]
    }, {
      "shop_id": "01c11c7d-2fd6-4be1-88b1-93d05b7b02a6",
      "location": [-1.2930882, 36.893406]
    }, {
      "shop_id": "d7386615-b07c-491f-bce2-2fbec28367d2",
      "location": [-1.29338, 36.89295]
    }, {
      "shop_id": "a9eaf32a-cb18-4eed-96f0-397a2e52bed0",
      "location": [-1.2934736, 36.892643]
    }, {
      "shop_id": "94d0d0c4-bbbd-41a3-bc18-9804056ae5fe",
      "location": [-1.2939866, 36.892063]
    }, {
      "shop_id": "2bcf283b-4ac6-4081-a288-ff1bb5afd898",
      "location": [-1.29482436180115, 36.8926086425781]
    }, {
      "shop_id": "bbdb73e4-9d93-47d0-b442-b4934cdd7e32",
      "location": [-1.29736185073853, 36.8942909240723]
    }, {
      "shop_id": "7cd043ad-1957-43bc-bc75-e2ae8af7e3b4",
      "location": [-1.297365, 36.89419]
    }, {
      "shop_id": "8aff1518-6b54-4445-b6dd-f0008f3bdeec",
      "location": [-1.29739379882812, 36.8944091796875]
    }, {
      "shop_id": "10f95a42-8e05-4148-9ee7-ac747c526331",
      "location": [-1.29745185375214, 36.8944358825684]
    }, {
      "shop_id": "2efc3450-300a-4474-8806-32f180338229",
      "location": [-1.298367, 36.896347]
    }, {
      "shop_id": "1d6930f1-ceda-4c13-b1d8-b016478df815",
      "location": [-1.29799687862396, 36.895866394043]
    }, {
      "shop_id": "666f83fc-3568-48a6-9eea-ebf17fb156cf",
      "location": [-1.29798591136932, 36.8958053588867]
    }, {
      "shop_id": "1c098872-bcd3-4b06-98d7-5f92af013551",
      "location": [-1.2977337, 36.893696]
    }, {
      "shop_id": "46d404c4-6504-4371-9bab-8ab75e1329ae",
      "location": [-1.2978711, 36.893368]
    }, {
      "shop_id": "c9375923-2b73-44e5-a4b5-f8dbc31c1659",
      "location": [-1.2991197, 36.88998]
    }, {
      "shop_id": "5a4bb6c0-6516-4363-a44f-f771a0a48a87",
      "location": [-1.29960381984711, 36.889820098877]
    }, {
      "shop_id": "2c3a6f59-fe49-44b8-a6c0-32b94111ddcd",
      "location": [-1.29961800575256, 36.8898162841797]
    }, {
      "shop_id": "653a2b9b-cb01-4596-a2b0-af8df68a419f",
      "location": [-1.2996087, 36.889847]
    }, {
      "shop_id": "f991e8b5-a63c-4fde-85f2-8bf09c920ae2",
      "location": [-1.2998918, 36.889534]
    }, {
      "shop_id": "33c944e9-78e4-4651-887c-09754fb4b19e",
      "location": [-1.3000414, 36.88929]
    }, {
      "shop_id": "d394ec70-a143-45b6-aeee-b69d3047d8b5",
      "location": [-1.2996421, 36.890293]
    }, {
      "shop_id": "8c4310fc-3ccc-4918-9aec-2095c6028d09",
      "location": [-1.2996311, 36.890324]
    }, {
      "shop_id": "0b61673d-d27b-41fe-8f4c-2742298bf905",
      "location": [-1.29960739612579, 36.8903312683105]
    }, {
      "shop_id": "28a74c3d-4a8f-4a10-b354-52c9cac66162",
      "location": [-1.2994525, 36.890717]
    }, {
      "shop_id": "ff1e70a7-f2e0-46aa-98f0-d1d958c83396",
      "location": [-1.300263, 36.89089]
    }, {
      "shop_id": "d6e83a7e-1ae6-4fa5-bf31-b438378fa1bf",
      "location": [-1.3002366, 36.891525]
    }, {
      "shop_id": "3a4cde71-96d3-4a35-abe1-cc6d5482c76d",
      "location": [-1.3017098903656, 36.892578125]
    }, {
      "shop_id": "4af1cc31-d3df-428b-9cd7-c12a7d24e64b",
      "location": [-1.3016582, 36.890858]
    }, {
      "shop_id": "8dca3464-9dd1-426f-8763-5ee901cb76ec",
      "location": [-1.3016558, 36.889988]
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
      "shop_id": "c0721d0f-762c-4d0d-bb26-24eef9e1a7cb",
      "location": [-1.3009032, 36.888817]
    }, {
      "shop_id": "60afb720-7883-494c-8b23-55b9cd599c9f",
      "location": [-1.3020684, 36.889214]
    }, {
      "shop_id": "7e71d9a1-49a6-4a95-94ab-146f08150b5f",
      "location": [-1.3021033, 36.889217]
    }, {
      "shop_id": "2624adb6-dff8-41f3-9256-8f48a8ea94dd",
      "location": [-1.3031557, 36.889366]
    }, {
      "shop_id": "b4cad820-c516-4caf-a5c4-338b401eb205",
      "location": [-1.3032922, 36.88915]
    }, {
      "shop_id": "1fc9875e-c9ca-4794-9e90-1e725aeb6f9d",
      "location": [-1.3035518, 36.888527]
    }, {
      "shop_id": "7a3b3fde-6adb-4430-bbe3-03690dabbd06",
      "location": [-1.30275309085846, 36.888988494873]
    }, {
      "shop_id": "ead44f8d-8341-477f-87e8-3cee7434f88a",
      "location": [-1.30218422412872, 36.8885612487793]
    }, {
      "shop_id": "2eac2635-c945-421c-8e9e-05cf50ecd00b",
      "location": [-1.3044921, 36.893597]
    }, {
      "shop_id": "02af6761-4305-441a-a5f7-b6a07cbfe1ca",
      "location": [-1.29896, 36.88738]
    }, {
      "shop_id": "423e021e-0f52-4e4a-86b0-7856b0e9a36a",
      "location": [-1.2967671, 36.88697]
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
      "shop_id": "dc3808b2-684f-4d23-91bb-10da5c6af92b",
      "location": [-1.2972852, 36.887535]
    }, {
      "shop_id": "c9cab2c7-5f95-4bef-be44-89673ea0b601",
      "location": [-1.29540526866913, 36.8896293640137]
    }, {
      "shop_id": "d0f83a49-fc1d-401c-9a6f-24d7a30cbafb",
      "location": [-1.2955922, 36.889576]
    }, {
      "shop_id": "2c415d46-90b7-492a-b019-89a27025735d",
      "location": [-1.2987211, 36.891003]
    }, {
      "shop_id": "2184da0f-6ab7-4165-bc02-3748c29f2fb0",
      "location": [-1.29848253726959, 36.8907775878906]
    }, {
      "shop_id": "3a88d1e3-611e-4fc7-b0d6-d3110220edeb",
      "location": [-1.2986089, 36.88968]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Daystar",
    "route_id": "7bb8f200-13b3-43fd-ae21-81b981584b2b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 384,
      "cache_hit": "84%"
    },
    "distance": "71.32km",
    "path": "dsfG_se`F`uQevS}m@s~E~Ksc@BBBCEEzCi@kpFj_B~a@kEbYdAwMiEym@hNx}F|aFl@nHaAxAwAd@e@^Ab@YXm@h@MrARFy@UaFgBbDxHw_@rc@qLo]mb@tl@kBx@_B_@|FrHiJpeAk@h@CAqAlI|CgA~ChEaCf@MAQ]_CpAi@YYn@KLfH`Ch@A@LrAeArDkBZhBemNr~K",
    "shops": [{
      "shop_id": "68a57ad2-9f4e-4e09-b4c7-4b37b074274c",
      "location": [-1.4454838, 37.004032]
    }, {
      "shop_id": "cd9eaa8e-0fd0-48fd-82c0-d26fe2edb179",
      "location": [-1.4379658, 37.03981]
    }, {
      "shop_id": "5d3c3db3-1bea-41c1-94f0-195e9b92b1f9",
      "location": [-1.4400516, 37.04567]
    }, {
      "shop_id": "002702e7-ebe9-4463-bbb6-5d83e2d9d67a",
      "location": [-1.44007444381714, 37.0456504821777]
    }, {
      "shop_id": "38eaf2bd-0cab-432f-996a-84bcdf176d2b",
      "location": [-1.4400914, 37.04567]
    }, {
      "shop_id": "18a41fb7-654b-4e65-be3c-49f4fa9f44bd",
      "location": [-1.44006443023682, 37.0457000732422]
    }, {
      "shop_id": "0c40840e-0aab-47c4-bc07-a8bbccc54f39",
      "location": [-1.4408364, 37.045906]
    }, {
      "shop_id": "f7e84ea1-e772-40f8-8770-5e5fb4e58a71",
      "location": [-1.402219, 37.030487]
    }, {
      "shop_id": "bb5c5907-4de5-4fde-876e-e3d01e72c450",
      "location": [-1.407815, 37.031513]
    }, {
      "shop_id": "140e561c-1439-442d-a21f-e580332007d3",
      "location": [-1.4120003, 37.031155]
    }, {
      "shop_id": "08a01025-9bd1-4ac7-85be-c45b7d4a52fc",
      "location": [-1.4096406, 37.032166]
    }, {
      "shop_id": "4d7a668b-35d1-40c2-9403-13231eb50636",
      "location": [-1.4021528, 37.029716]
    }, {
      "shop_id": "21504e59-7970-474a-a440-ca3ec9cab51e",
      "location": [-1.4429197, 36.99341]
    }, {
      "shop_id": "4b1f70b3-1366-41a1-9204-86c1bdc5dcd2",
      "location": [-1.4431455, 36.991894]
    }, {
      "shop_id": "19fc7633-9700-4af0-aba3-8338c406003b",
      "location": [-1.4428179, 36.99144]
    }, {
      "shop_id": "5d978f14-46d3-4e4d-a307-b2cfa541c326",
      "location": [-1.4423776, 36.991253]
    }, {
      "shop_id": "a8ca76b9-ac57-4ee1-8155-65bdb0c11e09",
      "location": [-1.4421875, 36.99109]
    }, {
      "shop_id": "9068311e-5be6-44cc-ac89-0c25fd1255f9",
      "location": [-1.4421808, 36.990906]
    }, {
      "shop_id": "ec154c45-2ca7-409c-84ff-15d47c704e05",
      "location": [-1.4420507, 36.990776]
    }, {
      "shop_id": "349b45eb-0443-4a9f-b9ff-5e072a2e6b3d",
      "location": [-1.441823, 36.990566]
    }, {
      "shop_id": "aee3d619-e674-469d-afb8-70b17fa44180",
      "location": [-1.441745, 36.990147]
    }, {
      "shop_id": "c9a35540-d663-41c8-8c28-1b793db49a02",
      "location": [-1.4418465, 36.990105]
    }, {
      "shop_id": "71fc6940-d0ad-42ad-b945-c9fd0159705b",
      "location": [-1.44156, 36.990223]
    }, {
      "shop_id": "fa481ec1-5ed5-4914-9bda-b5906f191a0c",
      "location": [-1.4404316, 36.99074]
    }, {
      "shop_id": "0767dd1e-2ee8-4dee-a0de-39737a2c6cda",
      "location": [-1.4412488, 36.989174]
    }, {
      "shop_id": "4235386e-858a-4000-866d-5f7a4240464a",
      "location": [-1.4360077, 36.983307]
    }, {
      "shop_id": "221c6883-0e98-4763-8d64-f2e9c787373e",
      "location": [-1.4338391, 36.988186]
    }, {
      "shop_id": "83270576-35d9-4751-b6d5-daaf9586cd60",
      "location": [-1.4281673, 36.98088]
    }, {
      "shop_id": "30244488-cbf5-4b4e-b24a-06078d288e61",
      "location": [-1.4276302, 36.98059]
    }, {
      "shop_id": "cfac48c9-1bb0-4de1-913b-161eccd3800a",
      "location": [-1.4271545, 36.98075]
    }, {
      "shop_id": "aed77e72-34cc-42e1-812f-be7814577187",
      "location": [-1.4284228, 36.97921]
    }, {
      "shop_id": "de613541-89d8-4e81-857b-656fd0dbbcbb",
      "location": [-1.426606, 36.967922]
    }, {
      "shop_id": "3351ad29-2a6a-4df1-816a-fe7d0063f311",
      "location": [-1.4263897, 36.96771]
    }, {
      "shop_id": "9f7ed459-85e7-4885-b836-009b8da3f9c8",
      "location": [-1.4263711, 36.967724]
    }, {
      "shop_id": "489e9f73-bec1-4fbf-a485-51e31f10ae0e",
      "location": [-1.4259632, 36.966045]
    }, {
      "shop_id": "278b8091-6b49-4631-bbe0-4e24c99cf83b",
      "location": [-1.4267452955246, 36.9664077758789]
    }, {
      "shop_id": "debabc29-2837-4e4d-b16b-ab0bb0f0ce65",
      "location": [-1.4275512, 36.9654]
    }, {
      "shop_id": "8bc19855-e623-4b32-b64f-b64478cc4fc7",
      "location": [-1.4269038, 36.9652]
    }, {
      "shop_id": "6e1fc617-234b-4f4b-a36c-aa19d2257344",
      "location": [-1.4268314, 36.965206]
    }, {
      "shop_id": "e0148f0c-98a8-412b-a4d4-b3aef48e9360",
      "location": [-1.4267391, 36.96536]
    }, {
      "shop_id": "7bd945a9-898c-44cf-9473-52df258a3560",
      "location": [-1.4260975, 36.96495]
    }, {
      "shop_id": "aee938f9-8836-4255-a777-b4cf146f9798",
      "location": [-1.4258914, 36.965076]
    }, {
      "shop_id": "c59f4cd6-7aab-4e83-98d5-2551575b6e96",
      "location": [-1.4257588, 36.964836]
    }, {
      "shop_id": "9e3ecf28-b6f0-4608-8b87-1ab0f325d2a5",
      "location": [-1.4256992, 36.964767]
    }, {
      "shop_id": "029e4ec9-8842-4cad-8b4b-2b8043d3bc96",
      "location": [-1.4271803, 36.964115]
    }, {
      "shop_id": "c4fe44c3-9b2b-4d1b-b4d8-0e224a15fa88",
      "location": [-1.4273897, 36.96413]
    }, {
      "shop_id": "711d2927-81da-4bcf-a032-babf4463043d",
      "location": [-1.4273981, 36.96406]
    }, {
      "shop_id": "7f2d0146-986b-4352-95ff-c9059f740b65",
      "location": [-1.4278181, 36.964405]
    }, {
      "shop_id": "614c183d-cf4a-415c-b9eb-22153b0606ed",
      "location": [-1.4287163, 36.964947]
    }, {
      "shop_id": "55c3fe0c-ee60-4a80-9451-d6004d9fed04",
      "location": [-1.4288646, 36.964424]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Highrise/Ngumo",
    "route_id": "5a8c002c-dfd3-4c87-88b3-0f8649e9698a",
    "matrix_info": {
      "DistanceMatrixAPI requests": 225,
      "cache_hit": "93%"
    },
    "distance": "20.42km",
    "path": "tz|Fmdx_Ff@nmGvJb`@zGmm@?A~W~G[KC?A@AAlCbAFV~AJ_IaGi@}@z@{Bqi@`CdYqqA|Lb@zQdLKL_T}QLCi@YPQBUCEHE@BD@@DG?CQjE}BdBq@@k@EAln@oK?ZCT@@v@`CwBoIjDsKCWzBtESPHFBHCHv@t@x@FBQP@aGhGCRB^H@DFFHh@`E{cBg}C",
    "shops": [{
      "shop_id": "8789f29b-4a16-4740-b079-b2d54815b9a9",
      "location": [-1.2999898, 36.78575]
    }, {
      "shop_id": "55447b30-a538-4c23-affc-f7e9558f886c",
      "location": [-1.3018749, 36.780453]
    }, {
      "shop_id": "a669b6f7-c218-40c8-a5cc-3d17665f0d01",
      "location": [-1.3032943, 36.78788]
    }, {
      "shop_id": "20d67837-6a4c-4672-bbc6-0348fb9daf7c",
      "location": [-1.3032867, 36.787888]
    }, {
      "shop_id": "28151dad-09f8-49de-926b-b40a55a912a0",
      "location": [-1.3072895, 36.786453]
    }, {
      "shop_id": "eade5012-49f2-4ecb-b83e-0e82f78e26c4",
      "location": [-1.3071455, 36.786514]
    }, {
      "shop_id": "04e8151a-84dd-4c14-86de-ebec79ec0f1e",
      "location": [-1.3071327, 36.786507]
    }, {
      "shop_id": "90beca23-2964-4792-a418-f238fb59864d",
      "location": [-1.3071216, 36.7865]
    }, {
      "shop_id": "6dbd707f-9c54-47a6-8327-d00c819b80c8",
      "location": [-1.307105, 36.78651]
    }, {
      "shop_id": "3fae17af-33c0-4823-9c24-87665c6454f3",
      "location": [-1.3078221, 36.786167]
    }, {
      "shop_id": "91f9c51f-501d-4116-ac47-984136131e8a",
      "location": [-1.30786, 36.78605]
    }, {
      "shop_id": "74a9f523-73ad-4024-8e64-60f0f28515bc",
      "location": [-1.30834, 36.785988]
    }, {
      "shop_id": "a4af319d-0f58-4726-a466-e344a5751c7e",
      "location": [-1.3067365, 36.78728]
    }, {
      "shop_id": "45efeb6c-03dc-43c8-a53e-79172fb8f237",
      "location": [-1.3065277, 36.78759]
    }, {
      "shop_id": "f9da05a8-f341-4e57-b5b1-9eb4737c7e43",
      "location": [-1.3068341, 36.788208]
    }, {
      "shop_id": "b315a888-0d5c-45b7-91b9-94ca68985c05",
      "location": [-1.3000165, 36.78756]
    }, {
      "shop_id": "d6ccaced-8326-4425-8096-15488d5dfd6c",
      "location": [-1.3042125, 36.800774]
    }, {
      "shop_id": "f851d82f-8cf7-424d-adbf-8b80ee7fb36f",
      "location": [-1.3064449, 36.800587]
    }, {
      "shop_id": "c2bbddc1-aa14-4468-a208-809f5688d9dd",
      "location": [-1.309455037117, 36.7984809875488]
    }, {
      "shop_id": "6b1f1034-f203-4008-9a3d-5102be92b0eb",
      "location": [-1.3094023, 36.79841]
    }, {
      "shop_id": "fb0541a9-d0a3-4d10-8078-aa1f4f51e71f",
      "location": [-1.3060434, 36.80144]
    }, {
      "shop_id": "0fda065a-4a6c-49e4-8fc6-9482d9f75d8e",
      "location": [-1.30611479282379, 36.8014602661133]
    }, {
      "shop_id": "8a2014dc-cf0e-402b-b700-a6d05ff04756",
      "location": [-1.3059047, 36.801594]
    }, {
      "shop_id": "97c23ff9-1884-46a1-9032-1b9682dff15a",
      "location": [-1.3059877, 36.80168]
    }, {
      "shop_id": "7ec24b2b-88a2-4858-ae34-a798c45851be",
      "location": [-1.306009, 36.801785]
    }, {
      "shop_id": "a9b5ace1-0024-43e1-a2b2-e3a26255bc0e",
      "location": [-1.3059859, 36.80182]
    }, {
      "shop_id": "40a5232e-a157-4555-992a-385643fc5d49",
      "location": [-1.3060404, 36.801853]
    }, {
      "shop_id": "1664d35a-4594-4f60-9619-31ba05e4efb7",
      "location": [-1.3060548, 36.801834]
    }, {
      "shop_id": "fd85b441-e074-40e2-a61d-59d9060e2384",
      "location": [-1.3060794, 36.801815]
    }, {
      "shop_id": "22cd9fe9-3679-4f0b-8dfb-c342d32cd1ce",
      "location": [-1.3060879, 36.801792]
    }, {
      "shop_id": "2a5c61f2-fd7a-4e75-bf68-6384a595f2bc",
      "location": [-1.3060523, 36.80179]
    }, {
      "shop_id": "814cca9a-5355-443b-8c49-985f8146a808",
      "location": [-1.306028, 36.801876]
    }, {
      "shop_id": "d05f525d-5287-41bd-8408-8a3408fc385d",
      "location": [-1.3070492, 36.802513]
    }, {
      "shop_id": "02b30fab-7d9d-4219-a810-12145a9ddf8b",
      "location": [-1.3075624, 36.802757]
    }, {
      "shop_id": "ab0ebc90-cd21-4955-aec7-82eb93edbc74",
      "location": [-1.307569, 36.802975]
    }, {
      "shop_id": "7c7efe80-8680-4637-98be-dc3a7c0ffbf0",
      "location": [-1.3075393, 36.802986]
    }, {
      "shop_id": "8a062e34-0774-4949-b1a8-760ade1acb4d",
      "location": [-1.3151286, 36.804993]
    }, {
      "shop_id": "79a360a4-fe5f-4618-9608-470686bedec1",
      "location": [-1.3151307, 36.804848]
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
      "shop_id": "b0ac9e46-38b9-4a8b-a80c-3f79186740d3",
      "location": [-1.3164855, 36.806328]
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
      "shop_id": "dd1e2456-90df-4a15-bd64-12bd3ec0e1b3",
      "location": [-1.3157204, 36.804684]
    }, {
      "shop_id": "e8672cb3-8879-4030-8c54-449ad64d9738",
      "location": [-1.3159313, 36.80371]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "BuruBuru",
    "route_id": "ad52851f-7f97-4186-a2e5-f9fae9249948",
    "matrix_info": {
      "DistanceMatrixAPI requests": 457,
      "cache_hit": "83%"
    },
    "distance": "40.88km",
    "path": "dsfG_se`F}tKvnB}A|@kBeBsR|P_Ly@}CjJaHcDjBdF{[kFaCiIDoFBGCk@aIzVqAz@r@XrC\\`Cj@LNhAz@JD@DBEt@t@l@z@pBl@k@cEtErFZLla@aBbBhDrd@MjWkTyHsZSABSf^aFdC`MP\\@?K^aFb@hWf^oIrCa@fAgD|DjAhLvDpBvGz@b@NHBLQfiIuoD",
    "shops": [{
      "shop_id": "b73b847f-e42e-4bf6-b3e0-f78014c7e808",
      "location": [-1.2848411, 36.880035]
    }, {
      "shop_id": "675a2dee-4141-4240-a1ce-811a28fa5968",
      "location": [-1.2843693, 36.879726]
    }, {
      "shop_id": "50543916-b66f-4bd0-be88-677ee4991f0b",
      "location": [-1.28383, 36.88024]
    }, {
      "shop_id": "8ceb92c6-02a2-4bf9-aebe-e8d25e3c1570",
      "location": [-1.28069, 36.877373]
    }, {
      "shop_id": "59e2c674-f17f-4e42-9fc9-68ccf6202e4c",
      "location": [-1.2786133, 36.877663]
    }, {
      "shop_id": "cbc4f7c7-1c23-4c7d-abf9-1b4274ece662",
      "location": [-1.2778214, 36.875835]
    }, {
      "shop_id": "1c69a4d1-e159-4e19-80c1-b398e21e5681",
      "location": [-1.27636861801147, 36.8766632080078]
    }, {
      "shop_id": "11c65c55-4447-4399-adbc-1d1fe853c070",
      "location": [-1.276907, 36.87551]
    }, {
      "shop_id": "5e7d6847-0c99-4f52-bf50-2317ff53a993",
      "location": [-1.2722852, 36.876694]
    }, {
      "shop_id": "cfaa0aad-e93b-4b18-a3da-f358babc661e",
      "location": [-1.2716397, 36.87834]
    }, {
      "shop_id": "7f54a459-f1dd-4ab4-a8b9-6b51e85eaa6a",
      "location": [-1.2716743, 36.879543]
    }, {
      "shop_id": "848182c2-45d1-43d0-b13f-05ecf99c18de",
      "location": [-1.2716898, 36.879578]
    }, {
      "shop_id": "bd4b6637-68e2-4be3-b78f-73e8a76cb5b9",
      "location": [-1.2716727, 36.879803]
    }, {
      "shop_id": "e1879985-472d-4498-b17d-e8030c02f3f7",
      "location": [-1.270056, 36.87598]
    }, {
      "shop_id": "bbe30501-056d-4e3e-b94c-b2664c254687",
      "location": [-1.26965129375458, 36.875675201416]
    }, {
      "shop_id": "f24427f9-b920-4c47-80c4-06bd3dd7bdad",
      "location": [-1.269908, 36.87555]
    }, {
      "shop_id": "a5b767a1-505d-47d7-b32a-c681fdfa324f",
      "location": [-1.2706476, 36.875397]
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
      "shop_id": "8e9f08c7-bcbe-4f51-8c7a-b0096085668f",
      "location": [-1.2717978, 36.874767]
    }, {
      "shop_id": "dfeb27e8-5c9e-4024-ad09-bbfef4c6e6e8",
      "location": [-1.2718122, 36.87474]
    }, {
      "shop_id": "7fc96756-c02c-474d-b311-5996aab1c438",
      "location": [-1.2718341, 36.87477]
    }, {
      "shop_id": "65778cf7-56fd-4a01-86f7-9c9a1db20511",
      "location": [-1.2721015, 36.874496]
    }, {
      "shop_id": "a324cc5b-b56f-44a6-af99-32be91427401",
      "location": [-1.2723258, 36.874195]
    }, {
      "shop_id": "06c5a450-b9f3-4de9-aa0e-f3800a32219c",
      "location": [-1.2728997, 36.873974]
    }, {
      "shop_id": "60b3357e-b3d1-4092-b30b-ad4a0aeb0f22",
      "location": [-1.2726767, 36.87495]
    }, {
      "shop_id": "e9865838-25b4-41e8-a5ca-1e0f248011c1",
      "location": [-1.2737501, 36.873734]
    }, {
      "shop_id": "629cc6e7-988a-4db6-b9a1-0242627697d8",
      "location": [-1.2738906, 36.87366]
    }, {
      "shop_id": "a9868126-53c3-43a4-8b68-ab07761df69a",
      "location": [-1.2794007, 36.874146]
    }, {
      "shop_id": "c1f9a037-3e89-4974-99cb-f8cfb7a368a6",
      "location": [-1.2799022, 36.8733]
    }, {
      "shop_id": "ad2d627d-1a5f-4845-a300-76c3c89f4cc3",
      "location": [-1.2859219, 36.87337]
    }, {
      "shop_id": "9fb9baa2-a127-4f69-b342-8e81953b6085",
      "location": [-1.2898192, 36.876793]
    }, {
      "shop_id": "09dae571-e961-446f-9e5d-123fd671fe2b",
      "location": [-1.2882463, 36.881214]
    }, {
      "shop_id": "6421226a-2e71-428d-8d89-b1888ea27853",
      "location": [-1.2881535, 36.88122]
    }, {
      "shop_id": "382ac3a7-529e-425a-aef4-c4a385f70825",
      "location": [-1.288165, 36.881317]
    }, {
      "shop_id": "e1174556-f7c9-49c8-89a9-44d31c5350f6",
      "location": [-1.2931669, 36.882446]
    }, {
      "shop_id": "70ab2b09-ed73-4193-a640-ae85c1a8c0bf",
      "location": [-1.29383957386017, 36.880199432373]
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
      "shop_id": "53ad63ad-910a-4a9f-a120-759c436b15d1",
      "location": [-1.2927498, 36.879715]
    }, {
      "shop_id": "c314d1ee-b9d6-4564-8da8-cec8403b6c3a",
      "location": [-1.2966385, 36.874706]
    }, {
      "shop_id": "c0d0fb21-a641-4e9b-8604-1dd38fdbcc46",
      "location": [-1.2949635, 36.873966]
    }, {
      "shop_id": "cf81ed09-455c-4003-9d1c-352640ab9505",
      "location": [-1.2947946, 36.873608]
    }, {
      "shop_id": "50270246-de49-464d-bd2d-2e4a8432bc2a",
      "location": [-1.2939515, 36.872658]
    }, {
      "shop_id": "eed299a1-6ea9-4064-9927-f138e921bd12",
      "location": [-1.294329, 36.870525]
    }, {
      "shop_id": "2ead1cbe-2970-416d-b2ae-e3f86b1054c0",
      "location": [-1.2952461, 36.86996]
    }, {
      "shop_id": "66b0ac6e-17ed-48b0-9baf-93dd930e4d2f",
      "location": [-1.296648, 36.86966]
    }, {
      "shop_id": "35c26e07-7943-4569-a26c-8ed36adf4bd8",
      "location": [-1.2968266, 36.869576]
    }, {
      "shop_id": "f164323f-0f2a-4c27-b15e-2c5356ebb0f6",
      "location": [-1.296884, 36.869564]
    }, {
      "shop_id": "8d549145-613a-41d3-918c-7a8ba5f415bb",
      "location": [-1.2969522, 36.869648]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Greater Mombasa Road 1",
    "route_id": "09d246ef-29b3-41c6-a723-e542554091e6",
    "matrix_info": {
      "DistanceMatrixAPI requests": 475,
      "cache_hit": "82%"
    },
    "distance": "50.25km",
    "path": "n{hH_ilbF@IoZ{Q_Xrr@tDpJrE~EtBtl@Rn@n@dPXvDDPgC@Sg@wY~GbZhJvDb@Dr@B?f@\\d[tbC{AvH`f@n{ArDeBdRvj@jBs@TxDwcAwkCuXwsCe@cDyYqmA{WmNc@Hv@sFfNxCHGr\\{oAeGwAlMuJL}GCJS?JSn@Ct@FaHf@{@@uBH`oArRmGzOtfA`b@|nIhUm@{CoBdBmmLgT",
    "shops": [{
      "shop_id": "b0a57cd8-4a5f-4231-bd3a-2d077e510d60",
      "location": [-1.5252104, 37.259888]
    }, {
      "shop_id": "949bf164-0760-43cd-9d92-011eb314560c",
      "location": [-1.520805, 37.26291]
    }, {
      "shop_id": "cda17257-22bc-4071-877b-2f10bf9e7dce",
      "location": [-1.5168139, 37.254646]
    }, {
      "shop_id": "5b6409e9-b7cd-4280-a75d-ddea7cb8034f",
      "location": [-1.517715, 37.252804]
    }, {
      "shop_id": "59e3e2cb-5791-4643-918f-07e87fe2e995",
      "location": [-1.5187812, 37.251682]
    }, {
      "shop_id": "90a657f0-4056-4336-9a7e-e7fe3e415fda",
      "location": [-1.519371, 37.24437]
    }, {
      "shop_id": "06930442-1c5c-483c-8de1-1b8f3d06713c",
      "location": [-1.519471, 37.24413]
    }, {
      "shop_id": "51fcdcec-12f1-4d5a-8197-7f108a3c5c56",
      "location": [-1.5197077, 37.24138]
    }, {
      "shop_id": "0d453a87-c244-4b63-9170-3095b6aeb7cb",
      "location": [-1.5198445, 37.24046]
    }, {
      "shop_id": "3c48cc42-de85-420a-8429-9053ce9f4b55",
      "location": [-1.5198692, 37.240368]
    }, {
      "shop_id": "5f9d999d-407c-428e-b1d1-ebd17098acb3",
      "location": [-1.5191901, 37.24036]
    }, {
      "shop_id": "2eb5e8ab-6639-4b38-b692-fc9c03451e31",
      "location": [-1.5190852, 37.240562]
    }, {
      "shop_id": "3f5f8628-1bb6-4364-9669-671ffbe77203",
      "location": [-1.514808, 37.239117]
    }, {
      "shop_id": "529e6774-c5ad-4f54-a9b2-4230510dfd45",
      "location": [-1.51915, 37.237312]
    }, {
      "shop_id": "21ce62ca-8e0d-4246-9f9e-2afe962f5661",
      "location": [-1.52007, 37.237125]
    }, {
      "shop_id": "f6329dae-c0c4-4156-a276-59a9f1c0dd08",
      "location": [-1.5201018, 37.23687]
    }, {
      "shop_id": "3748c23a-f322-44e5-beae-010cff29874a",
      "location": [-1.520117, 37.23687]
    }, {
      "shop_id": "d4b3763e-4f1c-47f2-b82d-f65dd7be5588",
      "location": [-1.5203223, 37.23672]
    }, {
      "shop_id": "2f7236b1-7e8d-4998-885c-a7a1345f5755",
      "location": [-1.52483069896698, 37.215648651123]
    }, {
      "shop_id": "3897e72e-82d1-44fa-b2c7-ea00604b2a1c",
      "location": [-1.5243697, 37.21409]
    }, {
      "shop_id": "282e8a0c-815b-4ae9-be89-b2f3d44a96ec",
      "location": [-1.530623, 37.199287]
    }, {
      "shop_id": "076bdcda-a7f5-4219-9e48-7b65a4ecd60c",
      "location": [-1.531524, 37.199795]
    }, {
      "shop_id": "d8584e01-68ca-4f39-af26-3ed7ec4c1542",
      "location": [-1.5345944, 37.1928]
    }, {
      "shop_id": "ddcac400-87b5-4ada-9d4b-eda0dda5f632",
      "location": [-1.5351284, 37.193058]
    }, {
      "shop_id": "32172661-b067-495d-a592-ec714a88ca92",
      "location": [-1.53524327278137, 37.1921348571777]
    }, {
      "shop_id": "8ca29443-6de2-4e0d-8ca3-9287f2c9b227",
      "location": [-1.5242399, 37.214653]
    }, {
      "shop_id": "6718e310-0f4a-4dfe-ba77-7d695b61d2a2",
      "location": [-1.5201318, 37.23845]
    }, {
      "shop_id": "af0c09a1-98ad-4e79-a4d0-de5d17662c93",
      "location": [-1.5199426, 37.239273]
    }, {
      "shop_id": "2269494f-9fc5-41a1-bb6c-ab533c31c232",
      "location": [-1.5156544, 37.251842]
    }, {
      "shop_id": "37c390bf-27cc-4cc7-8f27-079c1177705a",
      "location": [-1.5116653, 37.254307]
    }, {
      "shop_id": "541916e3-3b3f-4b6d-8137-1b4502476153",
      "location": [-1.5114886, 37.254257]
    }, {
      "shop_id": "567c1698-8b98-47a8-9a10-242e38317052",
      "location": [-1.5117683, 37.255478]
    }, {
      "shop_id": "06ffd69a-1e58-4047-9be4-3aee59ada42a",
      "location": [-1.5142093, 37.254715]
    }, {
      "shop_id": "989b60d2-8871-4636-95e0-755d062a04cd",
      "location": [-1.514255, 37.25475]
    }, {
      "shop_id": "b9041862-34bf-49d5-8eaf-93a35f50dd9c",
      "location": [-1.5190006, 37.26769]
    }, {
      "shop_id": "313bfa4a-9d36-4244-9a20-3a408268e284",
      "location": [-1.5176942, 37.26813]
    }, {
      "shop_id": "cef0245a-03ba-461e-a4c6-9f1ffb9be780",
      "location": [-1.52, 37.27]
    }, {
      "shop_id": "38ae6bb6-18a4-4c32-842d-c76fbd317f8e",
      "location": [-1.5200651884079, 37.271427154541]
    }, {
      "shop_id": "bd990ba0-faa5-4bb0-af29-85499e31688f",
      "location": [-1.5200479, 37.271366]
    }, {
      "shop_id": "43bbcef6-b3c1-4d4b-a2b1-1ca1ac9d6970",
      "location": [-1.5199457, 37.27137]
    }, {
      "shop_id": "d7820860-76ea-48fb-a05e-1440be18150b",
      "location": [-1.5200095, 37.271465]
    }, {
      "shop_id": "e5b1c2e7-4929-49e1-8932-2ea2770f92ec",
      "location": [-1.5202454, 37.27149]
    }, {
      "shop_id": "b192c074-bbcb-43e9-bfea-57950ae917c7",
      "location": [-1.5205154, 37.271454]
    }, {
      "shop_id": "baf6a113-5f63-4b16-aaea-3b3971f3ae70",
      "location": [-1.5190661, 37.271248]
    }, {
      "shop_id": "942cc07d-cdfd-4a5f-a295-4ab5c98340be",
      "location": [-1.5187724, 37.27124]
    }, {
      "shop_id": "3f2f1cd8-e5d1-4acb-8bd8-3579f9fa1eff",
      "location": [-1.5181801, 37.271194]
    }, {
      "shop_id": "e764ef3c-aa4a-4bfb-93ee-fed4ffc0b7ba",
      "location": [-1.5309875, 37.268047]
    }, {
      "shop_id": "02ea238c-a7ac-488c-8cdb-4b3fe95a614f",
      "location": [-1.5296389, 37.265347]
    }, {
      "shop_id": "ea3adfa8-bb1d-458c-92ae-956a0d543e62",
      "location": [-1.54110896587372, 37.2597427368164]
    }, {
      "shop_id": "59667d56-a989-419b-8c58-e495d38a855a",
      "location": [-1.5948611, 37.256165]
    }, {
      "shop_id": "ede99840-2173-4df6-902a-b3850172e355",
      "location": [-1.59462678432465, 37.2569541931152]
    }, {
      "shop_id": "ec9119c5-b29d-45e3-8eb8-5edf298dfe5c",
      "location": [-1.594074, 37.256435]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kangundo Road",
    "route_id": "7c24a15d-10cd-48e0-a939-f9704f02058d",
    "matrix_info": {
      "DistanceMatrixAPI requests": 202,
      "cache_hit": "79%"
    },
    "distance": "15.94km",
    "path": "`h{F{`g`F_cC`f@oDxA{fA{cAJm@Wi@{ScHINwAQa@L{DUqC{@zEyTeAKQi@cDoB~GzAIF\\s@hCY|CHlk@tiAtZb_@`C_An@WVgAjCjG}Dt@kClDpVt]rE_CdEwCluBegA",
    "shops": [{
      "shop_id": "eb1e05a3-e769-4702-b79b-146b2885f567",
      "location": [-1.2705734, 36.899006]
    }, {
      "shop_id": "46703c62-09bb-46f2-9bf9-399c93ab72dd",
      "location": [-1.2696948, 36.898556]
    }, {
      "shop_id": "31e959d8-f6e2-4315-b289-73a6720d29f4",
      "location": [-1.2581894, 36.90958]
    }, {
      "shop_id": "08484acb-5916-479d-ba99-93c85d1e925f",
      "location": [-1.2582517, 36.909805]
    }, {
      "shop_id": "7fb64c2c-8850-45f9-830f-29eacfbf1e79",
      "location": [-1.2581342, 36.910023]
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
      "shop_id": "5fb2132d-e3e9-476d-9d19-5e1e41b6818b",
      "location": [-1.25319194793701, 36.9115295410156]
    }, {
      "shop_id": "0446c748-8bd5-4ec0-a63d-93e2587d6909",
      "location": [-1.2524619102478, 36.9118347167969]
    }, {
      "shop_id": "7f964e62-b47a-48a0-bb13-ca9721f471bc",
      "location": [-1.2535613, 36.915318]
    }, {
      "shop_id": "a72c3760-3885-4e5e-a146-6b1e5c78aaad",
      "location": [-1.25321209430695, 36.9153823852539]
    }, {
      "shop_id": "25446dd3-59fe-462c-ab0b-3043dc1601b5",
      "location": [-1.2531165, 36.915592]
    }, {
      "shop_id": "46d60596-5d85-4552-bd2b-5a50055a9f89",
      "location": [-1.2522982, 36.91615]
    }, {
      "shop_id": "b9e4a59e-3947-487e-998d-e97e53e770e6",
      "location": [-1.2537371, 36.91569]
    }, {
      "shop_id": "8207ea74-b14d-48b5-843b-2715249740bb",
      "location": [-1.2536922, 36.91565]
    }, {
      "shop_id": "8fe473b1-8677-461d-a426-d9ec606037ca",
      "location": [-1.2538404, 36.915913]
    }, {
      "shop_id": "fd284527-bcf5-43c4-a540-6cdfff28ee2f",
      "location": [-1.2545267, 36.91604]
    }, {
      "shop_id": "7b386d11-95d5-4cd1-bd02-0633b7699a07",
      "location": [-1.255321, 36.91599]
    }, {
      "shop_id": "41050190-9177-4611-96f0-913cd81e7e47",
      "location": [-1.2624338, 36.90404]
    }, {
      "shop_id": "6e443bae-685b-402b-9bb2-cf9c3fa196ab",
      "location": [-1.2668579, 36.8989]
    }, {
      "shop_id": "d6b8df8d-d31e-4e22-ae71-88a86823a17a",
      "location": [-1.2675103, 36.89922]
    }, {
      "shop_id": "a1e53db2-3c99-4ded-b9a7-c497740b4098",
      "location": [-1.2677478, 36.899338]
    }, {
      "shop_id": "5dc7d8f5-ab34-4549-8c53-a32fc9997a31",
      "location": [-1.2678717, 36.899696]
    }, {
      "shop_id": "06c82c28-42bd-40f6-97b5-103b299b45c3",
      "location": [-1.2685717, 36.89836]
    }, {
      "shop_id": "a40db041-d98f-4e1a-8fc3-b2d76db4a87d",
      "location": [-1.2676175, 36.898094]
    }, {
      "shop_id": "d2a0e3ba-f749-4d45-a5d3-f061eeb9aafc",
      "location": [-1.2669193, 36.89722]
    }, {
      "shop_id": "9eedf94d-5d3c-4334-8fa2-e93bab0ef633",
      "location": [-1.2706937, 36.89231]
    }, {
      "shop_id": "5ac8f938-02a2-4835-998c-4ceffb625b11",
      "location": [-1.2717543, 36.892952]
    }, {
      "shop_id": "dc7bcb40-adf1-4712-a30c-c64b74d4fb40",
      "location": [-1.27274405956268, 36.8937110900879]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Karen/Bulbul",
    "route_id": "6e427d8e-adec-4801-8e38-90e93e904cd6",
    "matrix_info": {
      "DistanceMatrixAPI requests": 205,
      "cache_hit": "80%"
    },
    "distance": "53.61km",
    "path": "tz|Fmdx_FO@GF?BjpFbdKrSdw@sHj[m@jBsB~aAsXkMpUtYPHsAbS}tAviD`B{BWiB{]cm@pJz_AlvBilGRRNFBKDIn_AzM|Pj`@rhAxvApj@es@km@ea@TJLAWk@oGipAv@iA{dCa_AkoGkfK",
    "shops": [{
      "shop_id": "944705f9-2658-45cd-b353-ef2fcb15fac9",
      "location": [-1.2997102, 36.829018]
    }, {
      "shop_id": "0cffd7d7-3dc3-4df3-9694-9eb0346f9acc",
      "location": [-1.2996737, 36.828976]
    }, {
      "shop_id": "35379f5f-1347-4f6f-88b4-d5f76a5b238a",
      "location": [-1.2996683, 36.828964]
    }, {
      "shop_id": "e3b41bae-19be-4262-8ef2-ea2afe2bcb0c",
      "location": [-1.3382902, 36.766697]
    }, {
      "shop_id": "20848f94-2b85-4d13-8fdf-fd65c4251fb4",
      "location": [-1.3415942, 36.757713]
    }, {
      "shop_id": "e1c4848d-8e16-4f2b-9c91-57d79bd2ebc4",
      "location": [-1.340048, 36.753174]
    }, {
      "shop_id": "0b3e0c7b-17ce-4a08-977d-a919adb26900",
      "location": [-1.3398222, 36.752625]
    }, {
      "shop_id": "1d62897c-d89d-4f3c-a18c-950603cbcc24",
      "location": [-1.339238, 36.74191]
    }, {
      "shop_id": "debaaa0d-9058-43c0-9346-6b57f52035ac",
      "location": [-1.3351372, 36.744205]
    }, {
      "shop_id": "02be5f52-cadf-4a21-a691-54be801e2be8",
      "location": [-1.3387454, 36.739937]
    }, {
      "shop_id": "5371b807-06d2-4599-957b-ddfa9ab8ec5c",
      "location": [-1.3388371, 36.739895]
    }, {
      "shop_id": "ad85b198-6360-4042-8149-05654ca4af14",
      "location": [-1.3384236, 36.736668]
    }, {
      "shop_id": "317de83a-9e94-4a28-8d49-c23781fd641c",
      "location": [-1.3246654, 36.70935]
    }, {
      "shop_id": "bde96177-4fa2-4ffd-ae9c-3cd9cae05776",
      "location": [-1.3251648, 36.709972]
    }, {
      "shop_id": "6b46327d-cc3f-40dc-93a9-10695e855eab",
      "location": [-1.3250442, 36.7105]
    }, {
      "shop_id": "7835dd06-1f73-4f53-be93-3976e7b0ba2c",
      "location": [-1.3200976, 36.71788]
    }, {
      "shop_id": "75d73827-058c-4bf4-84fd-e46734042f6c",
      "location": [-1.3219523, 36.707497]
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
      "shop_id": "3544734f-a0c3-4d00-8cfa-3cbc740575c0",
      "location": [-1.3412896, 36.75056]
    }, {
      "shop_id": "c66a1153-db70-4bd1-8a23-69e3dd17a8b7",
      "location": [-1.35160624980927, 36.7481842041016]
    }, {
      "shop_id": "24b2ec7a-e6ba-4cad-ab59-167eada674fb",
      "location": [-1.3544781, 36.74284]
    }, {
      "shop_id": "edf60174-1695-40f2-8dc4-f82050486ec1",
      "location": [-1.36625874042511, 36.7287940979004]
    }, {
      "shop_id": "f7833a09-7ca4-4577-9e4c-2da6b47736b8",
      "location": [-1.3732316, 36.737144]
    }, {
      "shop_id": "c53544a3-f0ef-4543-8bdb-a2445fb64da9",
      "location": [-1.3658063, 36.742607]
    }, {
      "shop_id": "3e08038d-73df-4502-a9d5-0e1f8592f1f1",
      "location": [-1.3659178, 36.742546]
    }, {
      "shop_id": "4c01761f-14e5-4663-b328-1b743ee5bff5",
      "location": [-1.3659922, 36.742558]
    }, {
      "shop_id": "e2e9adbc-e5f0-46c9-9f18-cac0cb38039e",
      "location": [-1.365869, 36.742783]
    }, {
      "shop_id": "164bc23f-a292-47b6-9059-fd812007c902",
      "location": [-1.36450862884521, 36.7557907104492]
    }, {
      "shop_id": "7f9b088a-776e-46eb-bb9f-62514d99ca92",
      "location": [-1.36478805541992, 36.756160736084]
    }, {
      "shop_id": "0610c9e3-9f57-4df7-80ab-510d1eb79b97",
      "location": [-1.3433682, 36.766407]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Githurai",
    "route_id": "f8b14275-7ff4-444b-ab74-2d482ba63400",
    "matrix_info": {
      "DistanceMatrixAPI requests": 633,
      "cache_hit": "74%"
    },
    "distance": "25.68km",
    "path": "|qoF_r``F}sCgtG@XJT|ApD|T}IzA{HIQg@SuIXWSCGc@cAn@a@_CpDwIq@p@kB~G\\nLoD`DsNs@aBmAwDvGoEe@]|BrDz@dAOP`@n@fCbGbNwSqb@p@wI{FIe@k@IqCqF^_AfBoHPGZgBd@UoCsLl@mBdAsKnV}QaQcSmDxHoDzTQpBqIdNpACjPrJbdCzrJ",
    "shops": [{
      "shop_id": "a11c1e65-7757-4461-b07f-046de3d24c39",
      "location": [-1.2079979, 36.916523]
    }, {
      "shop_id": "ffea82bb-e3ab-4e59-a7aa-1f3268428f88",
      "location": [-1.2080063, 36.91639]
    }, {
      "shop_id": "3562d78a-5c54-4013-8dfc-846db731560a",
      "location": [-1.2080677, 36.916275]
    }, {
      "shop_id": "2d4bd153-60d2-4291-ae5c-09c94ac16cea",
      "location": [-1.2085387, 36.915386]
    }, {
      "shop_id": "7217b1bc-f895-4c94-9d26-b8e81447044f",
      "location": [-1.2120458, 36.917137]
    }, {
      "shop_id": "a7100dd9-fa8e-4551-af81-aea5831e626e",
      "location": [-1.2125069, 36.918724]
    }, {
      "shop_id": "e4ee5f0a-99be-43ae-9d43-086f3fc6b32f",
      "location": [-1.2124647, 36.918808]
    }, {
      "shop_id": "60d84824-ad5a-4c75-8e14-aef38c9af210",
      "location": [-1.2122586, 36.918907]
    }, {
      "shop_id": "40a8a04c-0b57-4638-92bc-5cd2274c366d",
      "location": [-1.2105542, 36.918777]
    }, {
      "shop_id": "e467de42-eeb2-458d-85ab-1f2e814fdf3b",
      "location": [-1.210429, 36.91888]
    }, {
      "shop_id": "fed37f25-3a3e-4853-aed8-24ed578e8bc4",
      "location": [-1.2104053, 36.918915]
    }, {
      "shop_id": "d02984dd-e990-4e22-844d-fb2d8d2bef3e",
      "location": [-1.2102338, 36.91926]
    }, {
      "shop_id": "beccff4b-7a29-45ee-b5a1-c922a5a5777f",
      "location": [-1.2104671, 36.919426]
    }, {
      "shop_id": "9ecffc7b-cd1b-466b-a86f-929f3fa9f9b6",
      "location": [-1.2098309, 36.91854]
    }, {
      "shop_id": "71cdb9c3-e9c0-49e2-8002-d5ee9aa3c96a",
      "location": [-1.208106, 36.918793]
    }, {
      "shop_id": "01b78e84-e6a7-45cf-8917-db12707e0ff3",
      "location": [-1.2083635, 36.91933]
    }, {
      "shop_id": "9f08d46c-201b-4a67-9ac5-1e4d47e6a021",
      "location": [-1.2098033, 36.919178]
    }, {
      "shop_id": "37bdd51f-aa6d-4390-bfd8-08f690fb5baa",
      "location": [-1.2119566, 36.920063]
    }, {
      "shop_id": "0a6abc59-c589-4277-9f6e-f00806bf9f29",
      "location": [-1.2127692, 36.922558]
    }, {
      "shop_id": "a17abc17-7392-4969-a3df-690fdc93d445",
      "location": [-1.2125117, 36.92305]
    }, {
      "shop_id": "4ffeccea-747e-4c84-b448-197142588676",
      "location": [-1.2121203, 36.923965]
    }, {
      "shop_id": "af125a00-c395-4af8-a8c1-f1b6bfd48275",
      "location": [-1.2135154, 36.925014]
    }, {
      "shop_id": "3820e25a-df6e-40f0-ba55-6dc6da9510dc",
      "location": [-1.2133281, 36.925163]
    }, {
      "shop_id": "f3256101-31db-48f3-93a4-d0d64f424812",
      "location": [-1.2139637, 36.924263]
    }, {
      "shop_id": "644f9b1e-e7c7-4a45-92d9-d8673496a6ab",
      "location": [-1.2142643, 36.923912]
    }, {
      "shop_id": "4b6eb147-239f-4c1a-a313-4239ec6b1852",
      "location": [-1.2141794, 36.923824]
    }, {
      "shop_id": "ec1ba2dc-a1bf-4c44-aa01-f039cd8bf350",
      "location": [-1.214352, 36.92358]
    }, {
      "shop_id": "e09b2327-a924-403f-9cd6-0f9952df62d2",
      "location": [-1.2150255, 36.922283]
    }, {
      "shop_id": "3423780b-750f-46b3-9bbb-61649833e6f1",
      "location": [-1.2174456, 36.9256]
    }, {
      "shop_id": "e428dff2-1cfa-4036-b3a9-151de1cf9373",
      "location": [-1.2117627, 36.925346]
    }, {
      "shop_id": "dbfbd197-cb22-4179-8096-1cd04579120b",
      "location": [-1.2100441, 36.926613]
    }, {
      "shop_id": "6bcdb606-afb8-4c4a-89ac-6dffa9ddb13c",
      "location": [-1.2099855, 36.926804]
    }, {
      "shop_id": "20a7f6a8-ab59-40ad-ad45-f330de2de395",
      "location": [-1.2097692, 36.926853]
    }, {
      "shop_id": "8c2875a7-ff73-438a-bf94-72de0eb2603d",
      "location": [-1.2090415, 36.928062]
    }, {
      "shop_id": "80f5ca8a-76fa-42e9-b824-29e715d408bb",
      "location": [-1.2092048, 36.92838]
    }, {
      "shop_id": "ad934129-97fd-4916-856c-78a46a2112b2",
      "location": [-1.2097164, 36.9299]
    }, {
      "shop_id": "862fbafd-5507-45e3-a3ab-d6b234be1266",
      "location": [-1.2098126, 36.92994]
    }, {
      "shop_id": "50f48b09-f371-4947-9870-8490faf75479",
      "location": [-1.2099507, 36.930458]
    }, {
      "shop_id": "5146fbc5-0a69-4dd4-b5b7-c5e536aee45f",
      "location": [-1.210142, 36.930573]
    }, {
      "shop_id": "bcb78bf7-306b-4038-8a43-aeb7a77a4e7a",
      "location": [-1.2094228, 36.93275]
    }, {
      "shop_id": "b3389cf1-9f56-4b74-957b-5f3411a62586",
      "location": [-1.209654, 36.9333]
    }, {
      "shop_id": "41536047-d3f7-42d8-8667-de9cefb8bb04",
      "location": [-1.2100005, 36.93532]
    }, {
      "shop_id": "95148e3e-1200-4af1-b600-b317e1d66f09",
      "location": [-1.2137556, 36.938354]
    }, {
      "shop_id": "09199930-868d-4005-99fe-f74a45968096",
      "location": [-1.2108693, 36.941574]
    }, {
      "shop_id": "e5a2fa51-1ee0-4479-ba5d-5a1c849c38a4",
      "location": [-1.21, 36.94]
    }, {
      "shop_id": "9c0c7445-e379-4a70-aa3e-d272c2d3e343",
      "location": [-1.2091233, 36.936504]
    }, {
      "shop_id": "9a541d41-af58-4051-8285-a255b721cd7d",
      "location": [-1.209033, 36.93593]
    }, {
      "shop_id": "266f23ea-d298-4799-b393-887272509518",
      "location": [-1.2073447, 36.9335]
    }, {
      "shop_id": "c9b5ee6b-ee57-45f2-a995-05ecc7f901de",
      "location": [-1.2077456, 36.93352]
    }, {
      "shop_id": "c3cbd546-6ff4-4e7e-a085-9dbe0ac9285b",
      "location": [-1.2105297, 36.931656]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kawangware",
    "route_id": "63738e51-d524-4445-96d7-a048aa99f2ea",
    "matrix_info": {
      "DistanceMatrixAPI requests": 165,
      "cache_hit": "89%"
    },
    "distance": "29.66km",
    "path": "`z|Fedx_FcgA`~MoAjFvCMs@hQS|@_@T|DtNwMlQA@Wa@KCcCe@cE{RoBmAoVnU}@}IMUK^ySy~@tSbRjAMZ_@~NmDf@OlA[bEk@_CtEiIf@GlAFdDs@ExA`F{@aVnAWjASLLjDk@nO_HdB|@xmA_oM",
    "shops": [{
      "shop_id": "a2ff4ba0-1ca9-4277-bcc9-12d0afef0e83",
      "location": [-1.2881452, 36.75234]
    }, {
      "shop_id": "03b56179-9c5e-4d02-b98f-d2948bc4be45",
      "location": [-1.2877516, 36.751156]
    }, {
      "shop_id": "2b52f3cf-3380-4e29-a787-5cdb3335c282",
      "location": [-1.2885112, 36.751225]
    }, {
      "shop_id": "d3738924-3723-43be-9a99-7ad0dc1b89a9",
      "location": [-1.28824961185455, 36.7483024597168]
    }, {
      "shop_id": "aca98331-4b9d-49f0-91b1-6492cbc9c872",
      "location": [-1.2881519, 36.747986]
    }, {
      "shop_id": "371b9c11-7036-4e3b-9ccc-c50d0f29b44e",
      "location": [-1.2879916, 36.74788]
    }, {
      "shop_id": "9c9bd095-0eda-4187-82dd-0e45b48a4d97",
      "location": [-1.2889353, 36.745365]
    }, {
      "shop_id": "e34d34dd-8b9c-46c4-8e1c-9c9abcee77dc",
      "location": [-1.2865793, 36.74242]
    }, {
      "shop_id": "251e21c5-6b1f-49ec-bbdf-debf29c2ca40",
      "location": [-1.2865663, 36.742405]
    }, {
      "shop_id": "4895d50c-5a52-42c5-83df-8f3496807842",
      "location": [-1.286454, 36.742584]
    }, {
      "shop_id": "24395736-539e-49e0-b935-7629234cd36c",
      "location": [-1.2863944, 36.7426]
    }, {
      "shop_id": "11b6f9ca-926c-4660-b2ce-c80c474e5955",
      "location": [-1.2857281, 36.742786]
    }, {
      "shop_id": "10641cd6-4fa7-438b-86bb-fcc3c7bdcb30",
      "location": [-1.2847506, 36.745968]
    }, {
      "shop_id": "1b05d0e6-7efe-4737-b263-ff647fb83732",
      "location": [-1.2841936, 36.746365]
    }, {
      "shop_id": "0241bd29-ce66-49ba-b476-ed11385f47cb",
      "location": [-1.2804296, 36.74276]
    }, {
      "shop_id": "fea68533-8f85-4bcb-aa46-d5ba24e1a2b8",
      "location": [-1.2801197, 36.74451]
    }, {
      "shop_id": "bc7045a1-7eb2-484c-aea3-f2db160c7a9d",
      "location": [-1.2800514, 36.744617]
    }, {
      "shop_id": "ba192d01-2053-4fc1-8076-c933b1de7d39",
      "location": [-1.2799867, 36.74446]
    }, {
      "shop_id": "02c3aa9c-7af6-426e-b275-e23faae1b4a5",
      "location": [-1.2766627073288, 36.7546653747559]
    }, {
      "shop_id": "14c06598-70df-4466-856c-a2644fe26d64",
      "location": [-1.279965, 36.751606]
    }, {
      "shop_id": "a87a9384-226f-4331-9d61-893f96bd18d2",
      "location": [-1.2803451, 36.751682]
    }, {
      "shop_id": "06ef3d31-3f48-4449-8d96-3bc0f73f25e7",
      "location": [-1.2804933, 36.751835]
    }, {
      "shop_id": "991dcdc1-03ea-4297-b498-28e19bf30f11",
      "location": [-1.2830524, 36.752712]
    }, {
      "shop_id": "c9574075-49e7-4d66-89c4-c0a8d0c8a19b",
      "location": [-1.283251, 36.752792]
    }, {
      "shop_id": "c8093801-8a6e-49bb-95a8-80acb9e7cbe2",
      "location": [-1.283639, 36.75293]
    }, {
      "shop_id": "76d58e31-7d8c-47ee-bc85-9340cb0f891a",
      "location": [-1.2846203, 36.75315]
    }, {
      "shop_id": "589ff38e-0505-4205-9074-c03b021ac0c1",
      "location": [-1.2839789, 36.75208]
    }, {
      "shop_id": "0aa73984-6744-49f2-8345-a13b2216feb3",
      "location": [-1.2823336, 36.751884]
    }, {
      "shop_id": "34f0bec5-80a7-4749-9af2-abe39751ac88",
      "location": [-1.28228747844696, 36.7514915466309]
    }, {
      "shop_id": "309a7ca2-2a53-4f17-8d25-381d171be1f3",
      "location": [-1.2823284, 36.750664]
    }, {
      "shop_id": "84e6a8c7-63c0-4db3-9ad0-cb6bf177dbbe",
      "location": [-1.2820739, 36.750687]
    }, {
      "shop_id": "38a7246b-e649-49c1-ae3f-b0ddeeccc12e",
      "location": [-1.2825197, 36.74956]
    }, {
      "shop_id": "cf121ca5-d3c4-48b7-b142-f48ace7e9d8d",
      "location": [-1.2822195, 36.753254]
    }, {
      "shop_id": "c93975bd-400d-4c69-8db7-a02c6e2cf3e8",
      "location": [-1.2826172, 36.75337]
    }, {
      "shop_id": "1dfaa8dd-0ac4-43ca-8138-4e17b306cb94",
      "location": [-1.2829998, 36.753468]
    }, {
      "shop_id": "9a01cad1-52a3-44d1-98df-08dcf935692a",
      "location": [-1.2830737, 36.7534]
    }, {
      "shop_id": "71abcc0b-8559-4c35-83b7-b32ed77178d3",
      "location": [-1.2839344, 36.753624]
    }, {
      "shop_id": "a39e7c5c-e742-47ca-b74c-5d1242fa08a0",
      "location": [-1.2865714, 36.75506]
    }, {
      "shop_id": "13b33ab9-f226-4138-8ba0-3b7cbd7e9707",
      "location": [-1.2870764, 36.754745]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kayole",
    "route_id": "2bc68658-8279-4bb8-b5d5-d02a20d1ac57",
    "matrix_info": {
      "DistanceMatrixAPI requests": 255,
      "cache_hit": "82%"
    },
    "distance": "12.86km",
    "path": "`h{F{`g`F}t@}]tUwVe`@{A_H`Em@zBwI_IkHvOkCgCqD_Sw@iCsKhN{@pKfRjFnBnCeG|KnWoImAcElHUVXg@`@`ByBNk@bFbAeBjACLPRZl@yAlBqAbAyCq@U@rAbBFfAyALkCpApGnLdE`BwLz]~oAo\\",
    "shops": [{
      "shop_id": "5ab932b6-23fc-484a-9567-a0d926006dbf",
      "location": [-1.2830641, 36.910213]
    }, {
      "shop_id": "a0878135-f648-4001-9e8b-578a00163fbf",
      "location": [-1.2866937, 36.914005]
    }, {
      "shop_id": "82a872d9-2617-41de-85da-e4e7490660fc",
      "location": [-1.2813792, 36.914474]
    }, {
      "shop_id": "2d2cf48d-6958-479b-a319-a8bf458867f7",
      "location": [-1.2799449, 36.9135]
    }, {
      "shop_id": "6f6f42eb-3f9d-448a-8fdd-a18074f78f9d",
      "location": [-1.2797086, 36.912884]
    }, {
      "shop_id": "222bf235-1195-4fdb-b683-c76eb1ffb298",
      "location": [-1.2779912, 36.91448]
    }, {
      "shop_id": "29a8f025-2361-4125-ac1a-6b6853fdcdd2",
      "location": [-1.2764885, 36.911804]
    }, {
      "shop_id": "5575abf3-3d27-485c-9e8b-af5f8a426108",
      "location": [-1.2757874, 36.912476]
    }, {
      "shop_id": "1efbb712-d562-4d3b-a881-989e9cd91698",
      "location": [-1.2748989, 36.915684]
    }, {
      "shop_id": "72bddc8d-31bb-4238-962f-7e6824131a99",
      "location": [-1.2746203, 36.916367]
    }, {
      "shop_id": "7e9dae8f-104a-489d-b52a-0679b9eb8dab",
      "location": [-1.2725978, 36.913918]
    }, {
      "shop_id": "c3933fe3-b29d-4063-8fda-67232b05c36f",
      "location": [-1.2723023, 36.911907]
    }, {
      "shop_id": "d99c8cf1-5b37-4477-b1c9-d77e0651e424",
      "location": [-1.2753767, 36.91073]
    }, {
      "shop_id": "cd16c4f6-a162-4cbe-a773-61f86e98b0b5",
      "location": [-1.27593958377838, 36.9100074768066]
    }, {
      "shop_id": "f284080e-6bcc-4d11-85bb-ff4d3cd2caef",
      "location": [-1.2746328, 36.907936]
    }, {
      "shop_id": "0b13f63d-93ab-447f-b8fe-5656957f1812",
      "location": [-1.2785486, 36.90962]
    }, {
      "shop_id": "f5d85fae-ddc3-4e64-97df-a030719ad88b",
      "location": [-1.2781585, 36.9106]
    }, {
      "shop_id": "a3a6691b-54b9-4fbd-bc97-96986dede6e9",
      "location": [-1.2796667, 36.910706]
    }, {
      "shop_id": "72692b7a-22df-4ef2-96bb-9d1e296565e8",
      "location": [-1.2797887, 36.910583]
    }, {
      "shop_id": "47ae958b-ce64-419d-9e1d-e894637b10e9",
      "location": [-1.27958965301514, 36.9104080200195]
    }, {
      "shop_id": "0558c681-0be4-4d7b-86a4-45603da9ea1e",
      "location": [-1.2800847, 36.911022]
    }, {
      "shop_id": "83db71bb-982f-4d20-9538-3869f8bcc6f5",
      "location": [-1.2801648, 36.911243]
    }, {
      "shop_id": "b2361514-2bbc-4023-b4fe-ee1bc90a1a54",
      "location": [-1.2813033, 36.9109]
    }, {
      "shop_id": "2002d49c-5a9f-488f-acf7-bb22300d00bd",
      "location": [-1.280792, 36.910522]
    }, {
      "shop_id": "ffd0ac18-bfbd-4403-8838-e669cad43c23",
      "location": [-1.2807668, 36.91045]
    }, {
      "shop_id": "e71169cb-af96-4ed0-a348-dcb217613a4d",
      "location": [-1.2808598, 36.910347]
    }, {
      "shop_id": "11c3657a-4cd9-45ec-822e-0a4cf704b233",
      "location": [-1.280996, 36.91012]
    }, {
      "shop_id": "09229a2e-306b-45fd-a1d0-8c061ae4fe27",
      "location": [-1.2805474, 36.909573]
    }, {
      "shop_id": "024b6423-37f6-4d7e-a346-f249a6a805b2",
      "location": [-1.2801402, 36.90923]
    }, {
      "shop_id": "a1aeb7f5-f448-4fb3-abb9-661da8a4c88f",
      "location": [-1.2793676, 36.909485]
    }, {
      "shop_id": "1551ad41-3e4e-4add-bde0-8587ad8a0577",
      "location": [-1.2792557, 36.909473]
    }, {
      "shop_id": "d6335bbe-6c7c-4452-8d31-b18a58704986",
      "location": [-1.2796835, 36.908966]
    }, {
      "shop_id": "0f0be611-c416-4b30-8090-ce1d5f5cc7af",
      "location": [-1.2797189, 36.908607]
    }, {
      "shop_id": "9dc8bf4f-6aff-44b4-aa72-d37e46094b54",
      "location": [-1.2792718, 36.908535]
    }, {
      "shop_id": "94a40422-43e7-4107-ad3b-59c136483b49",
      "location": [-1.2785707, 36.908134]
    }, {
      "shop_id": "5d2c361f-8e94-4147-95b6-6eba0835e997",
      "location": [-1.2799408, 36.905968]
    }, {
      "shop_id": "00aad427-0cfd-493c-9f3a-9c164085c52d",
      "location": [-1.2809258, 36.90548]
    }, {
      "shop_id": "f2ce1018-a1e2-4481-98d2-fa67113e3845",
      "location": [-1.27872896194458, 36.9005432128906]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kaijado",
    "route_id": "51264b3c-d33f-4bc1-8037-d9108c6c2564",
    "matrix_info": {
      "DistanceMatrixAPI requests": 346,
      "cache_hit": "84%"
    },
    "distance": "139.5km",
    "path": "dsfG_se`Fr_e@ccG~|ZdaQh@}Fb@sCZsDpB`@X~@o@tCbDsEjCo@zB}Ec@nHrGv@hRxCv@eEMBhEn@k@SjiOjuDjyAhFh`HdbD~IbQy@zI@@FA?PWCGhAiASjD]uAhH[bD`EjBk^_Rof\\kbJqKi@kAaAAT|@bB_bGsiDeHuG?zASAsAb@ehKijI{T_KzB}Y_ErKyak@riE",
    "shops": [{
      "shop_id": "fcc6fd54-3213-4e1a-a8b4-c5f76c041ff1",
      "location": [-1.5444525, 36.939537]
    }, {
      "shop_id": "e40509c8-6c7b-4e50-87cc-f4c951b568c1",
      "location": [-1.6874892, 36.847034]
    }, {
      "shop_id": "61b43a75-c603-47ff-915c-3d3aaca4c419",
      "location": [-1.6876994, 36.8483]
    }, {
      "shop_id": "331f7641-e8fb-4cb1-9b91-1d4cdfc11540",
      "location": [-1.6878752, 36.849037]
    }, {
      "shop_id": "a0880552-b35c-4e1b-a3fc-feee31fedd88",
      "location": [-1.688021, 36.849937]
    }, {
      "shop_id": "a33b79dd-5f0d-46e1-8468-268f5d456172",
      "location": [-1.6885859, 36.849766]
    }, {
      "shop_id": "395f3a09-1ec3-4024-8a9c-1a5d25b719d1",
      "location": [-1.6887163, 36.849453]
    }, {
      "shop_id": "41b254e5-3d92-4aed-afea-be827fa74cd0",
      "location": [-1.6884751, 36.848698]
    }, {
      "shop_id": "899efc51-1b37-4ff8-afea-ba5109d6e31d",
      "location": [-1.6893039, 36.849762]
    }, {
      "shop_id": "cc807be6-1d20-41e1-83ce-aad347e6b0ef",
      "location": [-1.69, 36.85]
    }, {
      "shop_id": "0099c4b4-f69f-48d4-ba04-58546c971ca5",
      "location": [-1.6906241, 36.85111]
    }, {
      "shop_id": "3f68a8c9-924b-425b-b660-8e3bb1790216",
      "location": [-1.6904417, 36.84959]
    }, {
      "shop_id": "7ede3665-0764-47fc-8df0-de84528b097b",
      "location": [-1.691819, 36.84931]
    }, {
      "shop_id": "f6e96af5-0693-4a3e-b212-d001088409bf",
      "location": [-1.6949056, 36.848537]
    }, {
      "shop_id": "acb5defe-a646-459d-a964-5338f695b794",
      "location": [-1.6951913, 36.849525]
    }, {
      "shop_id": "5934eed5-1237-4c3a-a579-adf9ca9d1efb",
      "location": [-1.6951208, 36.849514]
    }, {
      "shop_id": "455a9fce-9aad-4698-8b82-ade924021c0e",
      "location": [-1.6961274, 36.849274]
    }, {
      "shop_id": "1a322fe1-f592-4071-b587-f23d7cb842be",
      "location": [-1.6959131, 36.849373]
    }, {
      "shop_id": "00d26a25-502f-44c3-b27e-351c3595eaf0",
      "location": [-1.77949464321136, 36.8201942443848]
    }, {
      "shop_id": "9a554102-f3c1-483a-9ded-9dcdee40c75a",
      "location": [-1.7939523, 36.819023]
    }, {
      "shop_id": "b24ded21-8b35-42bd-ace8-1c689ef3fa41",
      "location": [-1.840244, 36.792908]
    }, {
      "shop_id": "83f798ed-a0e3-4440-a521-47d948bf63c1",
      "location": [-1.8419982, 36.790012]
    }, {
      "shop_id": "b8e9cbf2-bb84-4a00-a8a3-bf1b9e988056",
      "location": [-1.8417075, 36.788273]
    }, {
      "shop_id": "2d7de386-c60c-40c6-8ba2-66bb7e86d2f7",
      "location": [-1.8417197, 36.788258]
    }, {
      "shop_id": "75a26f07-0411-44dd-a185-d95a9e92e450",
      "location": [-1.8417557477951, 36.7882690429688]
    }, {
      "shop_id": "8df6a45c-9bc4-4812-98ad-896ec7eeba85",
      "location": [-1.841762, 36.788177]
    }, {
      "shop_id": "57aed9c9-7666-442f-8dfc-2591e5a75b77",
      "location": [-1.8416398, 36.7882]
    }, {
      "shop_id": "41640b6a-5fca-452c-8461-b11742f8119f",
      "location": [-1.841602, 36.787827]
    }, {
      "shop_id": "7803345c-2173-4f57-8082-e8bf04f52369",
      "location": [-1.8412328, 36.78793]
    }, {
      "shop_id": "cff67f6d-f6b2-4de6-a522-7caa1b8e6d86",
      "location": [-1.84209322929382, 36.7880783081055]
    }, {
      "shop_id": "b8bd6552-e99c-4142-ad2e-a2a021a7dbba",
      "location": [-1.84166038036346, 36.7865867614746]
    }, {
      "shop_id": "c9265805-0228-49ce-8aea-a94d9fe067cb",
      "location": [-1.841522, 36.785774]
    }, {
      "shop_id": "43a113cb-3688-44fe-b914-9d8240055e9a",
      "location": [-1.8424879, 36.785233]
    }, {
      "shop_id": "9cc0105e-d31f-46c6-bdfc-bee6b8f64f8e",
      "location": [-1.8374704, 36.788273]
    }, {
      "shop_id": "df0eefe7-2e22-4355-970c-0553be34a328",
      "location": [-1.6877921, 36.845127]
    }, {
      "shop_id": "0ab105c9-8096-4273-b764-c6670b06857c",
      "location": [-1.685775, 36.845337]
    }, {
      "shop_id": "5991158a-de08-429d-a6b9-d56085df164c",
      "location": [-1.6853962, 36.84567]
    }, {
      "shop_id": "64a4b216-ea96-4a4f-afd8-7f9f0713e2f4",
      "location": [-1.6853894, 36.84556]
    }, {
      "shop_id": "b5119aa1-8f3b-4104-9c55-1833718a1825",
      "location": [-1.6856984, 36.84506]
    }, {
      "shop_id": "4f40ab1b-c499-4510-b62f-ee320b44d7f9",
      "location": [-1.6442628, 36.872364]
    }, {
      "shop_id": "b8ee7388-5b6b-4e3f-9f63-b08d0ba8d9ba",
      "location": [-1.6427871, 36.87375]
    }, {
      "shop_id": "081080e7-5dfb-44a1-91ed-a65c2a9eada7",
      "location": [-1.6427878, 36.87329]
    }, {
      "shop_id": "8bab7efd-3c57-4943-90ac-988453fad5eb",
      "location": [-1.6426933, 36.873302]
    }, {
      "shop_id": "3dff90b2-983c-43be-8142-b545412f424b",
      "location": [-1.6422709, 36.873116]
    }, {
      "shop_id": "9de1cd86-dbbf-4994-99c7-2cd5e5d9bf65",
      "location": [-1.5793616, 36.92613]
    }, {
      "shop_id": "75ec6c2c-bbe1-4522-a43b-aa557da7ec9d",
      "location": [-1.5758555, 36.92805]
    }, {
      "shop_id": "764a4d9a-d379-4b75-ad49-457fc300f138",
      "location": [-1.5764759, 36.93236]
    }, {
      "shop_id": "17fbf78d-a79e-45e3-b918-f62c571065ef",
      "location": [-1.5755249, 36.93034]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kinoo",
    "route_id": "0ecb2d3b-321a-4a61-a977-d7ee9402013e",
    "matrix_info": {
      "DistanceMatrixAPI requests": 168,
      "cache_hit": "84%"
    },
    "distance": "49.03km",
    "path": "`z|Fedx_FqmGn{Xe@|Bw@zBDBMXEFEFE|@nBdR\\Qe\\r^gMdO|AqBeAs@zDyHnDoEtTcd@]}BpHsS|AmGaRlLqLbJjBbJ{LnFoB`A}EbGmIfADi@aEoA_@n@k@r@NtIcyAgt@xlL{yX",
    "shops": [{
      "shop_id": "80a88e64-8c23-4178-a086-8a25d62fa189",
      "location": [-1.2564039, 36.696434]
    }, {
      "shop_id": "6a6b44c1-d16c-4795-9bc6-acdab6551981",
      "location": [-1.2562088, 36.6958]
    }, {
      "shop_id": "22d26d0e-9f8f-4283-a7f7-cc3ebe48af28",
      "location": [-1.255925, 36.695175]
    }, {
      "shop_id": "d9638bba-9233-4771-93d0-edb8edfd4755",
      "location": [-1.2559642, 36.69516]
    }, {
      "shop_id": "890b64d5-bbf1-4384-846c-6ee2c217a878",
      "location": [-1.25588738918304, 36.6950302124023]
    }, {
      "shop_id": "ff5a327d-ba39-4e7b-a51d-2a065edcf8b7",
      "location": [-1.2558601, 36.694992]
    }, {
      "shop_id": "0d17dba8-2e78-4324-8fca-5b6838352655",
      "location": [-1.2558292, 36.694946]
    }, {
      "shop_id": "1be492ff-a737-484c-b802-1bdbddd57c74",
      "location": [-1.255795, 36.69464]
    }, {
      "shop_id": "2653df33-2510-4b7f-b4f6-cc993fe0faca",
      "location": [-1.2563622, 36.69157]
    }, {
      "shop_id": "265a30ac-b143-4c06-9b55-a259549ff0d4",
      "location": [-1.25650775432587, 36.6916580200195]
    }, {
      "shop_id": "0b28d793-508b-4abf-9eb4-e75c5d0208a4",
      "location": [-1.2518357, 36.6866]
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
      "shop_id": "1b230e17-e5b7-40a2-b38e-43e10eee7b03",
      "location": [-1.2515043, 36.68745]
    }, {
      "shop_id": "88bb46dc-b99b-420d-a910-1544b67ebd28",
      "location": [-1.25497114658356, 36.6933937072754]
    }, {
      "shop_id": "e2d7ecd3-43fd-48b5-97f0-a0fee2653b92",
      "location": [-1.2548162, 36.69402]
    }, {
      "shop_id": "bed511ed-abc4-4ac1-9aee-c96e19d17074",
      "location": [-1.2563472, 36.69732]
    }, {
      "shop_id": "293400b8-e567-48ea-83f2-073e30ea1ad1",
      "location": [-1.2568196, 36.69867]
    }, {
      "shop_id": "6a296a2c-d610-4137-8918-11134195605d",
      "location": [-1.253769, 36.69652]
    }, {
      "shop_id": "bcaaeee5-bf68-4ec6-a662-c5ab808eee34",
      "location": [-1.2515996, 36.694736]
    }, {
      "shop_id": "f54893be-3ca9-4362-be79-0ac909621cd6",
      "location": [-1.2521358, 36.692955]
    }, {
      "shop_id": "f6ff573a-2bcd-46d8-bb89-2be449d79260",
      "location": [-1.2499152, 36.691765]
    }, {
      "shop_id": "39248698-a1cf-4ea7-bb53-b1ef94cb9877",
      "location": [-1.2493609, 36.691425]
    }, {
      "shop_id": "e866fcaf-2a43-4b3f-8336-9b23289184ba",
      "location": [-1.2482508, 36.690132]
    }, {
      "shop_id": "e1cb089b-689c-48f0-a53e-93bc487359e8",
      "location": [-1.246581, 36.689766]
    }, {
      "shop_id": "de93cdf9-32cc-42bb-88bc-0242ece879d0",
      "location": [-1.2466085, 36.689976]
    }, {
      "shop_id": "e8cafff0-cdd4-4659-8664-771d458a9e7c",
      "location": [-1.245641, 36.69038]
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
    "route_name": "Kayole 2",
    "route_id": "1f1a9a88-caa7-45d5-b878-f2f9118a5d1d",
    "matrix_info": {
      "DistanceMatrixAPI requests": 397,
      "cache_hit": "71%"
    },
    "distance": "16.12km",
    "path": "`h{F{`g`Fe|@fDiaAi|@e{@kfB~FoGzClDSxKn@~CfHzXpGbWa@b@SPC\\h@pNAfEvC{Dv@_@n@\\CDvAn@xEiDd@gCt\\pG`HnDxA_AdEhMlL{@d@k@pSrL|ET~VrI\\y@??_AkFhAkCrAjGxL~HqF~L`MdP",
    "shops": [{
      "shop_id": "9e304339-82e0-4247-8cd9-93ab426741bf",
      "location": [-1.28189814090729, 36.9044189453125]
    }, {
      "shop_id": "ab33b31b-13f9-4d67-be08-9338b0487749",
      "location": [-1.271294, 36.914234]
    }, {
      "shop_id": "b08e6138-cfb9-4ba0-bd77-3e667b926492",
      "location": [-1.2616577, 36.93077]
    }, {
      "shop_id": "01f770b6-4657-42f6-930d-871b1c0c16b5",
      "location": [-1.2629429, 36.932133]
    }, {
      "shop_id": "66fa445a-02c0-46be-9cfd-80cfcbc34c83",
      "location": [-1.2637185, 36.931255]
    }, {
      "shop_id": "32795dd3-c492-49e4-86e5-b6dc5987accf",
      "location": [-1.2636154, 36.929214]
    }, {
      "shop_id": "99065624-7fc6-4de6-aec8-fa36f75efe0e",
      "location": [-1.2638571, 36.928413]
    }, {
      "shop_id": "1aeb6423-41c9-4a0a-9008-493c609e15f8",
      "location": [-1.2653383, 36.924267]
    }, {
      "shop_id": "8b323a00-213f-4e59-a518-64bec74a8a02",
      "location": [-1.2667067, 36.92041]
    }, {
      "shop_id": "ac4c5b4d-f034-4c24-8023-d51af653423d",
      "location": [-1.2665446, 36.92023]
    }, {
      "shop_id": "a6bdbeb1-9cba-4201-8b92-f768da86ee05",
      "location": [-1.2664381, 36.92014]
    }, {
      "shop_id": "e2b4ca5c-e6b6-4f40-a908-39bd18ddf128",
      "location": [-1.2664249, 36.919987]
    }, {
      "shop_id": "8201c6cd-97c4-4cc8-a742-9133ce28d3b7",
      "location": [-1.2666291, 36.917503]
    }, {
      "shop_id": "ac7dd911-117f-4b04-ab45-8ccbdfd31a4e",
      "location": [-1.2666222, 36.9165]
    }, {
      "shop_id": "1dc57c83-f30f-4e7e-90e1-4c89e6a5b273",
      "location": [-1.267381, 36.91744]
    }, {
      "shop_id": "11d0d542-6580-4661-bb9d-7d12ed1f4056",
      "location": [-1.2676579, 36.9176]
    }, {
      "shop_id": "bd3fdc0f-e267-4127-bf5b-ab7f41437c72",
      "location": [-1.2679048, 36.917454]
    }, {
      "shop_id": "53971d22-7836-4e8f-939d-2354180ade5c",
      "location": [-1.2678844, 36.917416]
    }, {
      "shop_id": "3598a0e1-fb7e-44b8-96c1-d93756367acb",
      "location": [-1.2683198, 36.917183]
    }, {
      "shop_id": "33163087-1f41-44d9-9ea0-1c6af1d177aa",
      "location": [-1.2694134, 36.918034]
    }, {
      "shop_id": "063c9906-f158-4f5a-b8da-776ba1d57f34",
      "location": [-1.2696021, 36.918713]
    }, {
      "shop_id": "283d43db-ee23-494d-b154-8cb4e30c620d",
      "location": [-1.2743486, 36.91734]
    }, {
      "shop_id": "fc457e07-9097-4476-bb7b-b11cd5fa29b8",
      "location": [-1.2758044, 36.916462]
    }, {
      "shop_id": "9b708854-138d-4628-aeb1-04d03aaefce9",
      "location": [-1.276248, 36.916782]
    }, {
      "shop_id": "f85005bf-b4d4-4bbd-ba73-4ccd8caa8e90",
      "location": [-1.27724, 36.914494]
    }, {
      "shop_id": "46398398-3964-42ea-9da9-ee88bc9ff9b9",
      "location": [-1.2793868, 36.91479]
    }, {
      "shop_id": "c6f45ee9-3055-458c-ba2c-8c7e1a126cda",
      "location": [-1.2795827, 36.915005]
    }, {
      "shop_id": "818b6e99-7687-4bc2-bce4-143c7ab77099",
      "location": [-1.2828743, 36.912834]
    }, {
      "shop_id": "283adbe5-b8ea-4c82-892d-ed42e1ca380f",
      "location": [-1.2839833, 36.912716]
    }, {
      "shop_id": "9ff4c6be-6c9f-40ce-a92f-cfdad1bde21b",
      "location": [-1.2878226, 36.91102]
    }, {
      "shop_id": "db133e4c-a23a-41db-9a5b-9790090f115b",
      "location": [-1.2879654, 36.911312]
    }, {
      "shop_id": "e8aeabb8-8b13-42b1-86aa-028665c0b0fe",
      "location": [-1.28797, 36.91131]
    }, {
      "shop_id": "f6eee645-13be-4f7d-a468-e4cd779c56a8",
      "location": [-1.2876542, 36.912487]
    }, {
      "shop_id": "f13109f4-cf2f-4aea-83f9-65c11c5d91e0",
      "location": [-1.2880187, 36.9131898]
    }, {
      "shop_id": "2ece72ed-f9ce-4912-8564-5c2b36f77bd1",
      "location": [-1.2884436, 36.91185]
    }, {
      "shop_id": "1ddcb8a2-2e16-4833-b62c-9f6adc2c87ec",
      "location": [-1.2906479, 36.91025]
    }, {
      "shop_id": "6d20649f-4813-444d-98db-ba839ec15cb8",
      "location": [-1.2894428, 36.908012]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Langata Road Route - Key Accounts",
    "route_id": "5b1945fb-6d33-4190-9363-79f9327df6a3",
    "matrix_info": {
      "DistanceMatrixAPI requests": 2,
      "cache_hit": "66%"
    },
    "distance": "39.3km",
    "path": "dsfG_se`FipLjxA~iElhJheFyaM",
    "shops": [{
      "shop_id": "73182b7f-d187-4073-b222-aa063718a2cd",
      "location": [-1.28045547008514, 36.8836212158203]
    }, {
      "shop_id": "4368b739-c407-4618-b24e-e400edd1a1be",
      "location": [-1.31294333934784, 36.8257904052734]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kitengela 1",
    "route_id": "32bb1577-9bc2-42ce-ae26-7c606228a3be",
    "matrix_info": {
      "DistanceMatrixAPI requests": 179,
      "cache_hit": "85%"
    },
    "distance": "54.57km",
    "path": "dsfG_se`Fn`X}tJxmDj[fRlFaJsBBTF?ZTgA\\a@A_|AgEmNcLdAuAqSGe@y@~AqCp@qByPsLaG}EzKkS{HePw@cKoJ`GuEjLO~Hk[mAjLvHl@~LaA~DkAtCoNsCk@@S{J}MoBu@mAoAZaxV`oK",
    "shops": [{
      "shop_id": "2c1ecdd9-b007-4a35-a962-b0ad85ef2f08",
      "location": [-1.4780335, 36.95775]
    }, {
      "shop_id": "3c68ecf9-6ff0-4f7d-9efd-8ad693b58f8b",
      "location": [-1.5059973, 36.953213]
    }, {
      "shop_id": "129db69c-e6db-4949-9d50-babea47ac6d8",
      "location": [-1.5090798, 36.952015]
    }, {
      "shop_id": "96aab887-b10a-4e0b-a66d-cabf3ad696c3",
      "location": [-1.5073054, 36.952595]
    }, {
      "shop_id": "268d42f8-5aca-4456-954c-b7300fedd738",
      "location": [-1.50732827186584, 36.9524879455566]
    }, {
      "shop_id": "46553af4-d8f3-43e8-afc3-69dfc8eaeab3",
      "location": [-1.50736701488495, 36.9524879455566]
    }, {
      "shop_id": "172df939-80fd-4944-b67a-176c9b1688e6",
      "location": [-1.5075122, 36.952377]
    }, {
      "shop_id": "c56ca770-270f-4324-9e4b-c6cc018d01d1",
      "location": [-1.5071487, 36.952225]
    }, {
      "shop_id": "d5e1b90c-ba00-4143-b8e2-909200ed8379",
      "location": [-1.5069776, 36.952236]
    }, {
      "shop_id": "27677c94-6afd-4d82-8a9d-b584f6d45586",
      "location": [-1.4921043, 36.95324]
    }, {
      "shop_id": "219b0664-cafb-4701-94b8-5715b047f34f",
      "location": [-1.489631, 36.95534]
    }, {
      "shop_id": "5c219d77-6791-4fb4-9140-b3ae85db75fd",
      "location": [-1.4899791, 36.955772]
    }, {
      "shop_id": "891d60e9-783d-4918-ad68-8214f3aaf8fb",
      "location": [-1.4866889, 36.95581]
    }, {
      "shop_id": "14ec1211-fdef-4fae-97f9-488185ff3e94",
      "location": [-1.486496, 36.956097]
    }, {
      "shop_id": "610a19da-b624-411a-861b-58264e16b21f",
      "location": [-1.4869832, 36.956833]
    }, {
      "shop_id": "4ab53f85-65bd-4a6a-94c3-bc197106b9bc",
      "location": [-1.4872252, 36.957397]
    }, {
      "shop_id": "1e693fa2-3fa3-482e-b598-082b596d65a8",
      "location": [-1.4843771, 36.959583]
    }, {
      "shop_id": "fbf27d26-668a-4b8a-acbe-16bb253409fc",
      "location": [-1.4830865, 36.96069]
    }, {
      "shop_id": "517a4198-4667-4f9e-9904-07093ed03195",
      "location": [-1.4851524, 36.96395]
    }, {
      "shop_id": "b8af6b56-770d-4e8b-89fb-9c858e96244c",
      "location": [-1.4835708, 36.966698]
    }, {
      "shop_id": "15411ac0-d2e8-44b0-8bcc-93871af3a49a",
      "location": [-1.4832892, 36.968636]
    }, {
      "shop_id": "9f38d204-6f43-4040-b3c6-bc805cffccfe",
      "location": [-1.481445, 36.967346]
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
      "shop_id": "e01d795a-c1a4-438a-97db-2ba2a8e94415",
      "location": [-1.477897, 36.962437]
    }, {
      "shop_id": "1d532a18-d81c-4d57-a4e4-32d111d73c79",
      "location": [-1.4781289, 36.960197]
    }, {
      "shop_id": "f9b6ee62-bb2a-4bc4-8875-206e81519c9d",
      "location": [-1.4777997, 36.959236]
    }, {
      "shop_id": "60c8dcb5-5c8e-4c11-bc84-98f8bf7d4364",
      "location": [-1.4774158, 36.95849]
    }, {
      "shop_id": "81f05818-dcb9-41ba-adf6-f756a9cebc7a",
      "location": [-1.4749392, 36.95923]
    }, {
      "shop_id": "7afca783-3887-448c-9a46-29f4e5db7d5a",
      "location": [-1.47471868991852, 36.9592170715332]
    }, {
      "shop_id": "d8862e5a-cb6c-4841-82c4-783762e617ae",
      "location": [-1.4746172, 36.961117]
    }, {
      "shop_id": "ba0bc45d-6c41-4d35-8192-29513ffb0783",
      "location": [-1.4722283, 36.961678]
    }, {
      "shop_id": "e6ceda9a-9bc6-4914-b40f-8173d1d180f0",
      "location": [-1.4719638, 36.96207]
    }, {
      "shop_id": "eb332cdc-658e-41dc-9431-7d8c087d1dd7",
      "location": [-1.47156, 36.961926]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kahawa 2",
    "route_id": "cd318fe6-b8ba-49d3-bda6-40361f55de57",
    "matrix_info": {
      "DistanceMatrixAPI requests": 470,
      "cache_hit": "79%"
    },
    "distance": "33.41km",
    "path": "|qoF_r``FudGmzJNHBAeBOjExAJEpBvBEfAnEvA`AMvFx@gA~A|JpHhMlNj@`@}@bAoCzEFNhCzE{BCdJk@?uGbDq@@?VlGpEcEJUaEeH_BYuGsB~BkKJMBAkKaKLH~LtEADnR}v@jAC@x@|c@}tAIq@cC{HkM{k@tf@wi@vWwNwExz@}HhLptBz_P",
    "shops": [{
      "shop_id": "1b182de7-c6a0-443a-9616-0d863462efb2",
      "location": [-1.1899616, 36.932873]
    }, {
      "shop_id": "2d160fd5-4c19-4092-b43b-115209946c48",
      "location": [-1.190035, 36.932823]
    }, {
      "shop_id": "88bf8636-040f-4a5a-8177-305c047b633b",
      "location": [-1.190056, 36.932835]
    }, {
      "shop_id": "a9331b73-9233-49a1-bb8d-b6f516d9ba90",
      "location": [-1.1895483, 36.932907]
    }, {
      "shop_id": "82b462c5-562d-429f-84ba-f185cdb3ac5a",
      "location": [-1.1905684, 36.932457]
    }, {
      "shop_id": "77222911-9aa9-48c3-9ab7-86dd5ee8c815",
      "location": [-1.19062638282776, 36.9324913024902]
    }, {
      "shop_id": "4a8b7679-6ca2-43b6-84f2-c448aad74469",
      "location": [-1.191197, 36.93189]
    }, {
      "shop_id": "7a1c36cb-0896-4b8c-8e68-24e4b9cb3f3c",
      "location": [-1.191172, 36.931534]
    }, {
      "shop_id": "eeac5cdf-846a-4881-bc18-229c8853eac2",
      "location": [-1.19220638275146, 36.9310874938965]
    }, {
      "shop_id": "0ce9794b-413f-40a6-8a0a-a8480bf3cd0e",
      "location": [-1.1925423, 36.93116]
    }, {
      "shop_id": "7efeccf0-a90d-42ca-963f-ecf1f238f95c",
      "location": [-1.1937819, 36.93087]
    }, {
      "shop_id": "5c423d5d-09b3-4653-ade6-d1f09091da3e",
      "location": [-1.1934184, 36.930393]
    }, {
      "shop_id": "f735ac6c-278d-4eca-a1e2-6bdbb6de1478",
      "location": [-1.1953329, 36.928856]
    }, {
      "shop_id": "610e3fa3-d965-40bb-8661-82282fee1403",
      "location": [-1.1976223, 36.926388]
    }, {
      "shop_id": "19c7212f-9a5e-42a7-9cb8-c499e4111f7b",
      "location": [-1.1978385, 36.926216]
    }, {
      "shop_id": "53e2536b-1ed2-4116-b778-26077b48e621",
      "location": [-1.1975275, 36.925884]
    }, {
      "shop_id": "49c581d9-0292-49e8-bdb2-890d5d488f09",
      "location": [-1.196806, 36.924778]
    }, {
      "shop_id": "bb339db4-5e25-437f-8f3c-59635dc794ab",
      "location": [-1.196849, 36.9247]
    }, {
      "shop_id": "06a4c452-da0c-4e2d-b2c5-8d678d4c5d9a",
      "location": [-1.1975421, 36.923595]
    }, {
      "shop_id": "eedd66b2-de85-434f-9e7f-5ea51e0a3ab4",
      "location": [-1.1969156, 36.92362]
    }, {
      "shop_id": "26726d27-ba3f-4755-9380-c2bba0c6561c",
      "location": [-1.1987092, 36.923836]
    }, {
      "shop_id": "5cae5de2-89b9-40b1-bdd7-4c8bf234ae55",
      "location": [-1.198709, 36.92523]
    }, {
      "shop_id": "be924131-05fe-4c76-b922-e5d51c922c32",
      "location": [-1.1995277, 36.925484]
    }, {
      "shop_id": "558d0fc1-b6af-4dc5-aee8-864c64c5963c",
      "location": [-1.1995363, 36.92548]
    }, {
      "shop_id": "1dbf1d0c-06d2-4b69-9dc0-a46b353acc02",
      "location": [-1.19966280460358, 36.9241256713867]
    }, {
      "shop_id": "e97fe87c-aa93-469a-8605-319c51ac5513",
      "location": [-1.2007082, 36.92511]
    }, {
      "shop_id": "71a3430a-1d69-43f7-8237-1ce36011e9d5",
      "location": [-1.2007728, 36.925224]
    }, {
      "shop_id": "06e3fb44-6c47-47d3-8d0c-0600575f0b0c",
      "location": [-1.1997992, 36.92669]
    }, {
      "shop_id": "89ca0bf7-2342-49c4-b197-fb382bc714b9",
      "location": [-1.1993202, 36.926823]
    }, {
      "shop_id": "ed9fa4e5-e6f6-4b53-ac8e-cb180b3cceb7",
      "location": [-1.1979312, 36.927402]
    }, {
      "shop_id": "84abf3e2-206f-4750-827e-8b2e57c5ec0d",
      "location": [-1.1985726, 36.92938]
    }, {
      "shop_id": "8901e666-20c1-4bbc-afa2-bf6653ac7289",
      "location": [-1.1986291, 36.929447]
    }, {
      "shop_id": "a0020015-ca24-4c5e-801b-8aa2bc0aa1b6",
      "location": [-1.1986504, 36.92946]
    }, {
      "shop_id": "99460906-0d29-43b7-be72-da082dc428ff",
      "location": [-1.196667, 36.931385]
    }, {
      "shop_id": "01cffd3a-5b9d-4274-8128-7b31093cf024",
      "location": [-1.19673597812653, 36.931339263916]
    }, {
      "shop_id": "c3db78d0-ca68-4499-95ef-03081b5c8895",
      "location": [-1.19898092746735, 36.9302673339844]
    }, {
      "shop_id": "c7e19e72-27f6-41c9-8bdd-35bf32c970b4",
      "location": [-1.1989712, 36.930237]
    }, {
      "shop_id": "b437badb-d58f-4373-99be-bfafe23564df",
      "location": [-1.2020882, 36.939186]
    }, {
      "shop_id": "a4e8fd0d-9d9b-4a5d-82c6-9071ca423369",
      "location": [-1.2024672, 36.939213]
    }, {
      "shop_id": "69922c70-1b4e-44fb-8e7e-e399747444e4",
      "location": [-1.20247900485992, 36.9389152526855]
    }, {
      "shop_id": "4e6c00f3-0738-4bf7-9311-7affb39e97a8",
      "location": [-1.20838558673859, 36.9526748657227]
    }, {
      "shop_id": "8827b34b-da7e-43c4-84ed-45b411649145",
      "location": [-1.20833790302277, 36.9529151916504]
    }, {
      "shop_id": "7c0c78b1-2c37-46d0-9cea-16f6a2efd249",
      "location": [-1.20767617225647, 36.9545021057129]
    }, {
      "shop_id": "df3f77e4-762b-4ff8-8e2b-88f40006761b",
      "location": [-1.2053846, 36.961678]
    }, {
      "shop_id": "cfe6e868-d8a1-4d03-8975-6ec4c519966f",
      "location": [-1.2117306, 36.968517]
    }, {
      "shop_id": "c90dc94b-d585-4b83-a459-523d49342273",
      "location": [-1.2156936, 36.971043]
    }, {
      "shop_id": "a95df104-ef46-4229-be33-bcc56b81dfe1",
      "location": [-1.2146146, 36.961468]
    }, {
      "shop_id": "daae795a-95c5-460c-83bd-813124026726",
      "location": [-1.2130239, 36.95934]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kariobangi",
    "route_id": "2c3d618a-c018-44a3-ad03-905667cab539",
    "matrix_info": {
      "DistanceMatrixAPI requests": 443,
      "cache_hit": "77%"
    },
    "distance": "30.32km",
    "path": "`h{F{`g`FqfCz_@ev@n[gElGGEaVnGhApOaAuGmpAucBdi@dV`Uje@nDxf@oHpg@}AvGIpN{Ho@wBmDrr@zCxj@jCcD?wEsFQDMKjA_C_E{Dk@PvHcAeEcFvAy@{D\\~AwILHfMnC`KhBDGLoCrCmFnEfZlPlb@dOmwAo@Ek@Frj@dG@q@p@k]r}@k}@",
    "shops": [{
      "shop_id": "c2be3520-7af9-4250-9991-da7a59209c59",
      "location": [-1.27, 36.9]
    }, {
      "shop_id": "3a41b863-8679-4fc1-a582-5dc55ab98e67",
      "location": [-1.2611727, 36.895443]
    }, {
      "shop_id": "07436176-7a8f-4105-9afe-d3ff03b1409e",
      "location": [-1.260168, 36.89409]
    }, {
      "shop_id": "4bfbb4b2-2a1d-4f2e-8f5b-3893e6ce6c63",
      "location": [-1.2601286, 36.89412]
    }, {
      "shop_id": "53313202-58b5-4284-9ae8-17750fcb7ebe",
      "location": [-1.2564445, 36.892757]
    }, {
      "shop_id": "bebd2378-ac55-479b-9531-7ae0afe283bd",
      "location": [-1.2568136, 36.890106]
    }, {
      "shop_id": "fc61aacb-046f-4cb4-a7cd-2de10481cb6c",
      "location": [-1.2564799, 36.8915]
    }, {
      "shop_id": "ca1f3155-2557-4a64-b770-979fad33ff37",
      "location": [-1.2434516, 36.907608]
    }, {
      "shop_id": "31d563eb-44da-4a18-9454-2f3914954556",
      "location": [-1.2502033, 36.9039]
    }, {
      "shop_id": "003c354f-dd94-484b-b9a5-866999bcb220",
      "location": [-1.2537318, 36.897762]
    }, {
      "shop_id": "7add8242-0ef2-4dc1-bd48-b77761aa3625",
      "location": [-1.254605, 36.891388]
    }, {
      "shop_id": "69197ae9-30b3-46c4-a005-ecac4be2a8e2",
      "location": [-1.2530862, 36.884903]
    }, {
      "shop_id": "65a16abc-3589-4987-9c3e-e84bbdf83a03",
      "location": [-1.2526207, 36.883503]
    }, {
      "shop_id": "4b7c356d-206f-4006-8874-c09cb7c4921a",
      "location": [-1.252565, 36.881012]
    }, {
      "shop_id": "c6b3f04a-858e-4ae0-9e5e-36ffd2795a00",
      "location": [-1.2509893, 36.881245]
    }, {
      "shop_id": "e3f4f9ed-21dd-40a1-8fd3-d977f1090a15",
      "location": [-1.2503856, 36.88212]
    }, {
      "shop_id": "cc848cb1-ec7e-40d5-91a7-92cb62a4081a",
      "location": [-1.25864803791046, 36.8813438415527]
    }, {
      "shop_id": "bd23b6ec-03e5-4265-abbd-ebfb50c43441",
      "location": [-1.26566445827484, 36.8806381225586]
    }, {
      "shop_id": "199fe64f-138c-478e-830c-5e5c78870265",
      "location": [-1.2648417, 36.880642]
    }, {
      "shop_id": "2ee80135-e997-47b8-a618-c491639ad878",
      "location": [-1.2637638, 36.881863]
    }, {
      "shop_id": "399d9766-92e1-4e11-b9cd-4aa7a0bf4565",
      "location": [-1.2636695, 36.88183]
    }, {
      "shop_id": "b4799ce1-79a3-418f-9494-da6830581543",
      "location": [-1.2636046, 36.881886]
    }, {
      "shop_id": "e4a8292a-9609-4975-95ec-4477136e4d4f",
      "location": [-1.26397836208344, 36.8825263977051]
    }, {
      "shop_id": "08185300-0e91-4ef4-ade6-015b47120fcd",
      "location": [-1.2630162, 36.883472]
    }, {
      "shop_id": "44d2b9f1-5bc1-4302-9a8c-64a6603dd4f7",
      "location": [-1.2628002, 36.88338]
    }, {
      "shop_id": "3a66df40-9ed4-4ed3-ac41-a0d84fe99812",
      "location": [-1.2643647, 36.88372]
    }, {
      "shop_id": "b34d267c-de04-4557-88c9-9a7e1d29b012",
      "location": [-1.2633661031723, 36.8848648071289]
    }, {
      "shop_id": "077b2024-a7a2-4d0c-a368-328b7a3fadf5",
      "location": [-1.2638084, 36.885155]
    }, {
      "shop_id": "0f0e7f91-f566-4791-aad8-6441d789e24e",
      "location": [-1.2628702, 36.885]
    }, {
      "shop_id": "64bb636e-35ce-44d3-8ad7-01d937231095",
      "location": [-1.26334524154663, 36.88671875]
    }, {
      "shop_id": "a6840825-5868-4154-a79c-67678962b11d",
      "location": [-1.2634218, 36.886673]
    }, {
      "shop_id": "d6dad581-9d9f-49c5-8328-8b88b7fa0af9",
      "location": [-1.26569581031799, 36.8859481811523]
    }, {
      "shop_id": "98634616-64fe-464e-b964-3672b6e24c78",
      "location": [-1.2676332, 36.885418]
    }, {
      "shop_id": "1ee3b505-f480-4884-b26c-73d9fdd2daa0",
      "location": [-1.267656, 36.885464]
    }, {
      "shop_id": "61213218-0233-4527-8812-7066f4adeec2",
      "location": [-1.2677325, 36.886177]
    }, {
      "shop_id": "0fb1272a-6f92-4ede-be3a-f8c445430b3e",
      "location": [-1.26846897602081, 36.8873748779297]
    }, {
      "shop_id": "01c9a04d-14a5-410e-9815-875a821d5e7a",
      "location": [-1.2695132, 36.88301]
    }, {
      "shop_id": "95f35faf-9ea0-4d7b-bbe9-86281c4ce16e",
      "location": [-1.2723018, 36.877335]
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
      "shop_id": "7d8f4788-d233-4a70-8cd1-7d12fceca3ff",
      "location": [-1.28141415119171, 36.8901748657227]
    }, {
      "shop_id": "8f1211cc-3169-4094-bb70-bf4bb0ba8788",
      "location": [-1.2814168, 36.890423]
    }, {
      "shop_id": "19599bc9-8fe6-4738-9760-0649df78a79d",
      "location": [-1.2816718, 36.895283]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kasarani",
    "route_id": "49a0a162-80d7-43d2-b428-31017bf4330e",
    "matrix_info": {
      "DistanceMatrixAPI requests": 386,
      "cache_hit": "81%"
    },
    "distance": "19.95km",
    "path": "|qoF_r``FshAgiCv@i@q@gEzJVrOaEdCiGh\\qMqeA`Co@Gp@o@gEyReBe@P}@p@CvEsd@y@w@pNoZfAS`ASqBeAzDWZc@mDrIf@j@HDvS{k@{FwDadAtmAZn@nEfUh@Gv@Ib@_DnD`GxAYiCtCtC\\fFlBjCbP`@X}Dn@vEvACTl@xIl@~FxsAnuC",
    "shops": [{
      "shop_id": "80f586ef-118c-4e4b-8cb9-909cf124ca88",
      "location": [-1.22005426883698, 36.8942794799805]
    }, {
      "shop_id": "8b685129-036d-4a13-803c-0c4db4db19e8",
      "location": [-1.2203289270401, 36.8944931030273]
    }, {
      "shop_id": "6d5efa59-b2f1-437c-adc6-0efd9da204af",
      "location": [-1.22008383274078, 36.8954925537109]
    }, {
      "shop_id": "6143cbfd-b6bd-4af9-ae31-ef3893672f4d",
      "location": [-1.221977, 36.895367]
    }, {
      "shop_id": "9e312f3a-686a-4496-a19e-444e910f7c9f",
      "location": [-1.22464454174042, 36.8963432312012]
    }, {
      "shop_id": "d54a0f41-c15b-4fcd-a5b3-55ebcd5e7a39",
      "location": [-1.2253128, 36.897667]
    }, {
      "shop_id": "5213c646-7320-43fc-88a1-65577062b928",
      "location": [-1.23, 36.9]
    }, {
      "shop_id": "4a6f2b73-f21d-4680-8ef9-a14ec600c7a2",
      "location": [-1.2187135, 36.89935]
    }, {
      "shop_id": "1a7753e5-d05e-4a29-8e46-5f3f05a59aca",
      "location": [-1.21846604347229, 36.8993873596191]
    }, {
      "shop_id": "0a54046c-5f35-4550-a791-665230edd7ed",
      "location": [-1.2187238, 36.899628]
    }, {
      "shop_id": "4e7a0cdc-8c69-46ed-9afa-2bb27fbbbaaa",
      "location": [-1.217715, 36.9028]
    }, {
      "shop_id": "fb28e602-ba30-4777-8cb1-bc5f8ce1b3c9",
      "location": [-1.21720910072327, 36.9029922485352]
    }, {
      "shop_id": "389c55e1-54ab-4edc-bcda-e64679efca4e",
      "location": [-1.2172953, 36.903297]
    }, {
      "shop_id": "b35c5230-2de3-4cdf-afd4-d42b3e965c28",
      "location": [-1.2175523, 36.903316]
    }, {
      "shop_id": "6d7ef850-7d04-462e-80c9-9bbcc6021e15",
      "location": [-1.218632, 36.90934]
    }, {
      "shop_id": "95136b15-f125-4ddd-8630-23c2400bee41",
      "location": [-1.218338, 36.909622]
    }, {
      "shop_id": "f0ca4aea-b509-4c97-8aba-7c8b8cea31d9",
      "location": [-1.2208346, 36.914024]
    }, {
      "shop_id": "bca9ab4b-eb9b-4812-95b5-96dc768dfa4d",
      "location": [-1.2211933, 36.914124]
    }, {
      "shop_id": "ca842369-38da-42ce-9a8e-d200a9e9661d",
      "location": [-1.22152304649353, 36.9142227172852]
    }, {
      "shop_id": "1aee08b3-bd85-4ee2-bde2-109d4fea3950",
      "location": [-1.2209476, 36.914566]
    }, {
      "shop_id": "38a6586f-0843-4467-92cf-8f546fc38435",
      "location": [-1.22189199924469, 36.9146881103516]
    }, {
      "shop_id": "7a271644-9f76-4b63-b9bd-c50014617448",
      "location": [-1.2220267, 36.914867]
    }, {
      "shop_id": "bb992ea8-d37f-4eb6-929b-236e3ef9d32a",
      "location": [-1.2211628, 36.913166]
    }, {
      "shop_id": "6d767b9c-8457-42c5-a94c-f2dd812edfd7",
      "location": [-1.2213607, 36.912952]
    }, {
      "shop_id": "a28a128d-822f-4f7f-8d2f-52a544c4ddc4",
      "location": [-1.2214088, 36.91292]
    }, {
      "shop_id": "2d01fc54-6f44-4b4f-b2f2-cfb5e52cae2a",
      "location": [-1.2247349023819, 36.9201049804688]
    }, {
      "shop_id": "c4102918-5432-4b0c-b529-a7e50eacdad9",
      "location": [-1.22347319126129, 36.9210205078125]
    }, {
      "shop_id": "45d265b6-a313-497b-bb6f-a68f9136e85c",
      "location": [-1.2124221, 36.908432]
    }, {
      "shop_id": "16562dac-4708-402f-b1d4-045592c333d2",
      "location": [-1.2125624, 36.908188]
    }, {
      "shop_id": "cc481b51-cf26-42af-a28a-1e0a80398b79",
      "location": [-1.213599, 36.90463]
    }, {
      "shop_id": "627121b2-0dec-4cb7-a21c-0fc968fb540b",
      "location": [-1.2138071, 36.904675]
    }, {
      "shop_id": "b43f6b61-7b66-4bb8-aee1-d60dd35eb30a",
      "location": [-1.2140934, 36.904724]
    }, {
      "shop_id": "a983a726-7e43-44c1-a1b7-7059b3a486ef",
      "location": [-1.2142704, 36.905525]
    }, {
      "shop_id": "fc235abc-f360-499c-bb16-1b92bec21e08",
      "location": [-1.21514821052551, 36.9042282104492]
    }, {
      "shop_id": "f0bdd578-85df-4517-ab71-4c8736154eff",
      "location": [-1.2155982, 36.90436]
    }, {
      "shop_id": "1c562194-439f-418c-bfa1-63eb0965a212",
      "location": [-1.2149065, 36.90361]
    }, {
      "shop_id": "cbe0703f-f0f6-416a-a4c4-81ca5c0acc27",
      "location": [-1.2156589, 36.90346]
    }, {
      "shop_id": "f961b55f-66c1-4622-afab-d5645fa1afcb",
      "location": [-1.2168227, 36.90291]
    }, {
      "shop_id": "670ba2c5-0dcc-450a-94d2-8ce5554b509e",
      "location": [-1.21752369403839, 36.9001655578613]
    }, {
      "shop_id": "9cd89dd8-2b27-4dca-a48c-8ccd7a12d93c",
      "location": [-1.2176946, 36.900043]
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
    "route_name": "Kikuyu",
    "route_id": "a153b9a0-e018-4389-9f66-c2f6799a8aaa",
    "matrix_info": {
      "DistanceMatrixAPI requests": 284,
      "cache_hit": "81%"
    },
    "distance": "71.97km",
    "path": "`z|Fedx_FeuEt`^MM]p@odAxUt@mEgDoCtNsDNF@YUW{QxDe@CBnGgYvVjGmLgAk@aTh@}@QM?GQHEc@DYB?BFf@g_Ht|@KiJjBnIt~Gkx@@P?@IAVGPA^b@EDT]aDtI[Zo@hBsEcJfzImg_@",
    "shops": [{
      "shop_id": "339e4791-d5e7-4657-8dcb-3742a0c8d37e",
      "location": [-1.2654191, 36.67]
    }, {
      "shop_id": "f3128971-1b73-4cd8-aa2b-9341370b3c3c",
      "location": [-1.2653491, 36.67007]
    }, {
      "shop_id": "d8255a3a-a57c-4a36-aa22-7f1e6995b8e3",
      "location": [-1.2652016, 36.669815]
    }, {
      "shop_id": "ed99fd12-81bb-4556-bd25-4a913ae6a975",
      "location": [-1.25407993793488, 36.6661720275879]
    }, {
      "shop_id": "e713d97c-2e57-4af1-8924-ed8b500a2aa6",
      "location": [-1.2543503, 36.667202]
    }, {
      "shop_id": "76fa74b4-1597-4072-9f21-a1edf6488a14",
      "location": [-1.253514, 36.66792]
    }, {
      "shop_id": "d77f7f2a-ef55-4849-aa9d-d1b98698fce8",
      "location": [-1.25601613521576, 36.6688194274902]
    }, {
      "shop_id": "8f6c68dd-5f6e-4684-84a3-ca8b390f1c59",
      "location": [-1.2560998, 36.668777]
    }, {
      "shop_id": "63296f10-42e0-4128-8584-df08e8ff18ec",
      "location": [-1.2561054, 36.66891]
    }, {
      "shop_id": "6bd596b3-04af-4343-9d64-a2878307cf98",
      "location": [-1.2559977, 36.669033]
    }, {
      "shop_id": "5d6c5dfe-44c3-4d9b-b169-9394b89edf0f",
      "location": [-1.2529823, 36.668095]
    }, {
      "shop_id": "f17be675-9483-4150-aecd-b87cbf99ec30",
      "location": [-1.2527907, 36.668118]
    }, {
      "shop_id": "1ed1fd7b-376d-496a-8b9b-e093bcda9736",
      "location": [-1.2528143, 36.666763]
    }, {
      "shop_id": "60d8b4f3-f514-4474-aced-9c79202261f5",
      "location": [-1.2486064, 36.662956]
    }, {
      "shop_id": "f495e56d-5a8a-4308-be3d-69294a96e8a3",
      "location": [-1.2499506, 36.665108]
    }, {
      "shop_id": "1f8d4676-9b6e-411b-b827-b67bc0afd53b",
      "location": [-1.2495917, 36.665325]
    }, {
      "shop_id": "ba7aca59-3b7f-4706-9b51-e101a72e8526",
      "location": [-1.2462239, 36.66512]
    }, {
      "shop_id": "d95d41e1-ed50-4530-b79a-73abceaaaa1a",
      "location": [-1.24591, 36.665207]
    }, {
      "shop_id": "78cf9a95-62f7-4c7a-883e-3063624ddbc9",
      "location": [-1.2458436, 36.66521]
    }, {
      "shop_id": "71673499-b73d-4640-83aa-1a45c370f85e",
      "location": [-1.2458009, 36.665302]
    }, {
      "shop_id": "52e8dc57-a1de-4f3e-a372-8dfafc77cee6",
      "location": [-1.2458519, 36.665333]
    }, {
      "shop_id": "6d753558-b1b3-4795-9d04-f500114f56cc",
      "location": [-1.2456667, 36.6653]
    }, {
      "shop_id": "27b8b014-d756-47ad-970d-415dc4d20834",
      "location": [-1.245537, 36.665276]
    }, {
      "shop_id": "6c244e39-adec-4bee-93e4-93d737779f8d",
      "location": [-1.24554, 36.66526]
    }, {
      "shop_id": "610e0328-3ec4-4129-903f-8d7e1ee0b103",
      "location": [-1.2455751, 36.66506]
    }, {
      "shop_id": "9e6ffcd6-417c-4b2c-abae-47e3c4e42a7e",
      "location": [-1.199459, 36.65519]
    }, {
      "shop_id": "e9687797-b96e-404a-8ed0-fc7c86bd7373",
      "location": [-1.1994003, 36.657]
    }, {
      "shop_id": "e4a4a238-3c22-48c8-a8e1-8185bac4f9d8",
      "location": [-1.1999397, 36.65532]
    }, {
      "shop_id": "aac2f925-e1c4-4871-b8f2-c6f2c37f6ab1",
      "location": [-1.2459712, 36.664497]
    }, {
      "shop_id": "d5dcbf29-e347-44c9-bded-c6fb23803686",
      "location": [-1.2459762, 36.664413]
    }, {
      "shop_id": "bec3f592-63be-4802-b8e8-a28c74827f63",
      "location": [-1.245985, 36.664402]
    }, {
      "shop_id": "5ca17ae1-bddd-4685-8272-4a39898402ea",
      "location": [-1.2459323, 36.664406]
    }, {
      "shop_id": "0d624a90-dec3-48b1-96fe-cd42cbb3eeb2",
      "location": [-1.2460532, 36.66445]
    }, {
      "shop_id": "274c187c-1f15-40b2-9513-56fc33bd164b",
      "location": [-1.2461373, 36.664463]
    }, {
      "shop_id": "4ac40b19-b7cf-4a76-8757-c8c377198343",
      "location": [-1.2463005, 36.66428]
    }, {
      "shop_id": "a69ee857-7dd3-42ef-a750-4141ba86b67c",
      "location": [-1.2462659, 36.66425]
    }, {
      "shop_id": "6b586478-3f62-4ec9-97e7-200fccdac09c",
      "location": [-1.246384, 36.664402]
    }, {
      "shop_id": "4a8852e5-e4ea-44c9-82ff-3a39bc942250",
      "location": [-1.2455716, 36.662685]
    }, {
      "shop_id": "2c202f14-ae76-4068-83be-e6f39646bebb",
      "location": [-1.2454267, 36.662548]
    }, {
      "shop_id": "f5013a9c-3187-4b8e-aa5e-a0e56bda18fd",
      "location": [-1.2451891, 36.66202]
    }, {
      "shop_id": "2b317ddc-a20b-4545-b57e-d198e58d835e",
      "location": [-1.2441337, 36.6638]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kiambu Road 2",
    "route_id": "4f87d3fa-208f-4cb6-9e99-2713aecd8e09",
    "matrix_info": {
      "DistanceMatrixAPI requests": 333,
      "cache_hit": "81%"
    },
    "distance": "73.09km",
    "path": "`ijF{`p_FqoEgfBn`@y`BBYHaA@ADMiB}LLVe^_yBaJbyAq@T{GbIf@\\EHGD\\FNA@GIQV?Qb@JRkBbCwVrHs@eAAEq@bBuYnPgf@jbAeGhXcBSesB}y@dAkPwaN~cGtCjB|Ak@dcJtzEbeFanKfBiCn@^DGBCb@TrUpaH~sHyuD",
    "shops": [{
      "shop_id": "9082bada-ea73-414b-b737-81330002504f",
      "location": [-1.17144048213959, 36.8040161132812]
    }, {
      "shop_id": "beb78536-44ee-466a-bb0c-380b55d5a083",
      "location": [-1.1767972, 36.819675]
    }, {
      "shop_id": "57c3b1bb-caac-4a72-b7c0-7833fd071c95",
      "location": [-1.1768161, 36.819798]
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
      "shop_id": "6e3a55dd-295b-4f46-a062-dee935932065",
      "location": [-1.1763828, 36.82244]
    }, {
      "shop_id": "e677695e-0f2f-4bfb-b1ff-cfb1d67899b7",
      "location": [-1.1764477, 36.82232]
    }, {
      "shop_id": "dd30d700-7f33-4cee-96be-132478049992",
      "location": [-1.1714551, 36.841835]
    }, {
      "shop_id": "638d7d0a-a077-49f4-a243-b7d8abc09915",
      "location": [-1.1696866, 36.82742]
    }, {
      "shop_id": "f347ff51-dc6f-4e87-821d-8b88b9225f40",
      "location": [-1.1694436, 36.827305]
    }, {
      "shop_id": "4665f1f3-da83-4f40-aa67-70e452a7376b",
      "location": [-1.1680216, 36.82569]
    }, {
      "shop_id": "99f5c9c3-a130-45dd-82b1-a399d06a1c4e",
      "location": [-1.1682235, 36.825542]
    }, {
      "shop_id": "b1885b48-a777-4e7d-942f-f558d95bc012",
      "location": [-1.168186, 36.82549]
    }, {
      "shop_id": "c8832ef6-1899-4be6-ae49-27afcf9563aa",
      "location": [-1.1681505, 36.82546]
    }, {
      "shop_id": "6c498777-2913-4ac2-9320-bf4700a62766",
      "location": [-1.1682974, 36.82542]
    }, {
      "shop_id": "1d5bcf74-7c5d-41c6-822c-4c491cf2834d",
      "location": [-1.1683751, 36.82543]
    }, {
      "shop_id": "7049c9f3-2c82-40cc-b030-a28ba01450b7",
      "location": [-1.1683893, 36.825474]
    }, {
      "shop_id": "73e0f1b7-41cf-4188-a6d5-07cc6c56676c",
      "location": [-1.168342, 36.825558]
    }, {
      "shop_id": "eb5e47e9-bf03-498d-aff7-acd1f1cce6f2",
      "location": [-1.16846, 36.82556]
    }, {
      "shop_id": "f38c6669-e0ef-491f-92c3-520b104cd696",
      "location": [-1.168365, 36.825375]
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
      "shop_id": "e02dd2ab-5a98-47db-881f-fcc4325f1575",
      "location": [-1.1638303, 36.823433]
    }, {
      "shop_id": "67e02f77-9ccf-4ea0-b41f-2432e141d2da",
      "location": [-1.163824, 36.823456]
    }, {
      "shop_id": "e23dbc93-157b-496a-bb2a-a99366bd807f",
      "location": [-1.1635654, 36.822956]
    }, {
      "shop_id": "d8f61250-d98b-4594-bf97-7e67b1524c4c",
      "location": [-1.159295, 36.82016]
    }, {
      "shop_id": "d11e4de5-5843-4629-8187-32c6e9e2c103",
      "location": [-1.1530174, 36.80938]
    }, {
      "shop_id": "8cb62036-fe44-4893-9c99-636cb0a6859c",
      "location": [-1.1517098, 36.805325]
    }, {
      "shop_id": "fe5ab1f5-b146-4dce-b560-ab3fccce01b9",
      "location": [-1.1512126, 36.805428]
    }, {
      "shop_id": "75883517-493d-4754-af4e-7908ad411ef8",
      "location": [-1.1326249, 36.81486]
    }, {
      "shop_id": "ba4e4e7c-4926-4730-87ab-d3e6ab13475b",
      "location": [-1.1329668, 36.817635]
    }, {
      "shop_id": "d2ae63e2-b1bb-4fcf-a607-01851b60e8ac",
      "location": [-1.0557269, 36.775875]
    }, {
      "shop_id": "49eb2837-a7d5-4ce9-9716-68d37d2b654d",
      "location": [-1.0564806, 36.77534]
    }, {
      "shop_id": "600a1f20-7cfe-4651-abe0-44ee45e65710",
      "location": [-1.0569504, 36.77556]
    }, {
      "shop_id": "798f312c-71a8-4ef6-a530-cf176403f141",
      "location": [-1.11393809318542, 36.7404098510742]
    }, {
      "shop_id": "244d4380-ca93-4df3-911d-9e558aeb37dc",
      "location": [-1.1507616, 36.80426]
    }, {
      "shop_id": "2865e14d-addb-4dc9-b0ff-4577bda95034",
      "location": [-1.151284, 36.80495]
    }, {
      "shop_id": "35eef9fb-1fa2-4097-b114-0a716bcb271e",
      "location": [-1.1515166, 36.804794]
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
    "route_name": "Kahawa",
    "route_id": "1af5573b-2a80-44b7-a1d7-d54196bff007",
    "matrix_info": {
      "DistanceMatrixAPI requests": 616,
      "cache_hit": "78%"
    },
    "distance": "30.12km",
    "path": "|qoF_r``F_bGazCB`@g@h@m@HmEsOpE_DtT{s@om@|GCaBAIpAw@lFoKyC|AgQfJGR_AvEVMuAbFM`@KhBuEoAiDo@e@h@_EwFu@}@m@yJuPqFwJgC@?yZo\\jk@|`@pr@rRHIY\\ECeBfG{B`I[?m@lBE`@IHaBi@`@pGnAxKf@ZRSfJ{NjFhKoG|ScDsCk~@na@hsAgTtHa@rcG~pC",
    "shops": [{
      "shop_id": "6145b5ef-4583-4ba9-8631-7078d3eaf28b",
      "location": [-1.19039154052734, 36.8969650268555]
    }, {
      "shop_id": "30ad3a5d-b04a-48d9-96cf-f51e2945ee56",
      "location": [-1.19040751457214, 36.896800994873]
    }, {
      "shop_id": "00d2acf8-1f4f-47c0-b1da-82cdc976799e",
      "location": [-1.1902101, 36.896587]
    }, {
      "shop_id": "f9b24664-8ea1-44ce-983a-c1aefcc9f4dd",
      "location": [-1.1899791, 36.89654]
    }, {
      "shop_id": "b0b99d4f-784e-4bc0-8b13-24f481a7e096",
      "location": [-1.1889513, 36.899204]
    }, {
      "shop_id": "27ebc508-41d3-4b4a-8d6b-09671c90b86b",
      "location": [-1.19, 36.9]
    }, {
      "shop_id": "fa31cf05-4a38-4bc6-83b6-dd2a49657179",
      "location": [-1.1934661, 36.908463]
    }, {
      "shop_id": "08a342aa-2261-4914-87a6-46d7bc065693",
      "location": [-1.1860266, 36.907032]
    }, {
      "shop_id": "9d3dfa23-52e6-44d1-8b7a-3760fd403dd7",
      "location": [-1.1860111, 36.907524]
    }, {
      "shop_id": "6b3533a3-5b98-4e83-aa33-210eec0f6917",
      "location": [-1.1860048, 36.907566]
    }, {
      "shop_id": "4a3e41c2-72ae-4882-a22a-3fbe83e6f94f",
      "location": [-1.1864098, 36.907852]
    }, {
      "shop_id": "69cbef8c-1e4f-429b-bee0-24b7dc04cca8",
      "location": [-1.1876036, 36.909847]
    }, {
      "shop_id": "12fed21c-b422-4af1-9fc4-0d586c70c849",
      "location": [-1.1868349, 36.90938]
    }, {
      "shop_id": "c5bfddd6-36a3-44b9-9c5d-78d01385f9ab",
      "location": [-1.1839057, 36.907578]
    }, {
      "shop_id": "704da373-1f9e-47d1-a672-149b09d6f8ee",
      "location": [-1.1838708, 36.907475]
    }, {
      "shop_id": "6f930323-a01e-41c7-8e95-b3534630906b",
      "location": [-1.1835483, 36.906403]
    }, {
      "shop_id": "4c84751e-1083-4984-b5e0-bc1654b9a815",
      "location": [-1.1836748, 36.90647]
    }, {
      "shop_id": "cfc2e7b0-8d47-447f-ab33-d9e1f9ceb19a",
      "location": [-1.1832378, 36.90533]
    }, {
      "shop_id": "ded04612-01d8-404f-86eb-bd79dbb67f23",
      "location": [-1.1831732, 36.905155]
    }, {
      "shop_id": "e98e1f1e-8df3-4ae7-baaf-54bfa4a5bcea",
      "location": [-1.1831139, 36.904633]
    }, {
      "shop_id": "8cada46f-72e0-4d6c-bdbb-a20d1264c3af",
      "location": [-1.1820365190506, 36.905029296875]
    }, {
      "shop_id": "84da276d-f97d-4dad-b127-f0d71a47c87d",
      "location": [-1.18118584156036, 36.9052658081055]
    }, {
      "shop_id": "cd75da39-52b6-4ba9-a508-3ae8beb3cb19",
      "location": [-1.1810015, 36.905056]
    }, {
      "shop_id": "85ad0a01-1809-4605-b71f-6cfd4fea15d5",
      "location": [-1.1800388, 36.906303]
    }, {
      "shop_id": "54c760d1-073e-498a-8c17-1b1e2bbc5272",
      "location": [-1.1797739, 36.906612]
    }, {
      "shop_id": "bf0b49b0-528c-417e-8128-495b347767a9",
      "location": [-1.1795365, 36.9085]
    }, {
      "shop_id": "d74b12fc-c690-4d10-be1a-a11b5f7bab3a",
      "location": [-1.1767114, 36.909706]
    }, {
      "shop_id": "0d34a8b1-5b4c-4719-925d-549c8ed88458",
      "location": [-1.1748269, 36.910393]
    }, {
      "shop_id": "4fac1b02-a269-4943-8fa8-e99a1007e3de",
      "location": [-1.174835, 36.910385]
    }, {
      "shop_id": "9e220cf2-9c0a-4481-95f2-4d43163078da",
      "location": [-1.1703876, 36.915108]
    }, {
      "shop_id": "fec7116c-36d4-4dbf-bbc2-a0d762e4b12a",
      "location": [-1.1774925, 36.90968]
    }, {
      "shop_id": "f675d61a-362e-40fa-8342-c39b206ffc46",
      "location": [-1.1857408, 36.906536]
    }, {
      "shop_id": "0580d2c9-4d38-41da-a584-1885e9533539",
      "location": [-1.1857896, 36.906593]
    }, {
      "shop_id": "b6a9890a-e2f8-428c-abd5-7adc6016b49a",
      "location": [-1.1856583, 36.906437]
    }, {
      "shop_id": "9c2d4c46-d711-47b1-9c6b-dec49e9f6fe0",
      "location": [-1.1856315, 36.906456]
    }, {
      "shop_id": "85bf9777-60ab-424c-a495-5616beb45a18",
      "location": [-1.1851183, 36.905136]
    }, {
      "shop_id": "17b83202-0b61-4db8-8887-2587fa76f200",
      "location": [-1.18450427055359, 36.9035301208496]
    }, {
      "shop_id": "a941ae21-fb1d-41ff-aa4f-8795322ee7b8",
      "location": [-1.1843601, 36.903526]
    }, {
      "shop_id": "b8289735-dfef-4a19-9f3b-5d64f2a1565b",
      "location": [-1.18412852287292, 36.9029846191406]
    }, {
      "shop_id": "09453b56-3406-4229-9fea-3e123b3e9c21",
      "location": [-1.1841013, 36.90281]
    }, {
      "shop_id": "46d7038a-88e0-40db-b0ab-10b8d3057f97",
      "location": [-1.184052, 36.902756]
    }, {
      "shop_id": "8d417ae8-539c-4626-ab9f-391270d60c1a",
      "location": [-1.1835625, 36.902966]
    }, {
      "shop_id": "78ce1fa0-7327-4a38-9895-31eb1b4de460",
      "location": [-1.1837265, 36.901604]
    }, {
      "shop_id": "566f1c45-3830-4287-b80b-618b1f98e005",
      "location": [-1.1841319, 36.899548]
    }, {
      "shop_id": "16a42dfd-10be-4d01-aa82-bde3e16313cf",
      "location": [-1.18433, 36.899414]
    }, {
      "shop_id": "32ba2dba-8754-42bb-b103-6d0e19bbc267",
      "location": [-1.1844294, 36.899506]
    }, {
      "shop_id": "16597c4e-b71b-4851-9598-f756381cf002",
      "location": [-1.1862333, 36.902046]
    }, {
      "shop_id": "bb44e258-975a-45eb-964b-3a35f2d2746d",
      "location": [-1.1874079, 36.900078]
    }, {
      "shop_id": "ad446803-f339-49f1-8330-858b867b67d9",
      "location": [-1.18604898452759, 36.896728515625]
    }, {
      "shop_id": "62a17f55-bc8e-4576-b5ff-2c71980e41e9",
      "location": [-1.1852313, 36.897472]
    }, {
      "shop_id": "7667fadb-6fbc-451f-81bc-db1b43301f92",
      "location": [-1.17509, 36.891945]
    }, {
      "shop_id": "c1530e3d-d449-40f0-8df1-c8d363a6f37f",
      "location": [-1.1885842, 36.895348]
    }, {
      "shop_id": "474732c4-9d62-4fac-8051-ea7e7b6ece78",
      "location": [-1.1901257, 36.895515]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kamakis",
    "route_id": "be3557d6-7d12-4a10-a406-191541374e18",
    "matrix_info": {
      "DistanceMatrixAPI requests": 477,
      "cache_hit": "84%"
    },
    "distance": "67.21km",
    "path": "dsfG_se`F}tUayP_@IfDbe@iA}d@ni@gAnw@rCW|A?TAF|b@aTmQw~@bx@wh@aBoD|s@pz@kCmMdDoAkFgTh{AsjFeXgOH@?CK~AE\\@B?DFCQRFHAL?LbKznEEAin@`dAcRfj@rb@d^}b@_WZ~@mDMd@~Ba@bBqDAaDZQTt@BoAfB_^lBk`@lOrf@`Yd@LGq@`BNPLELWBp@aB@KxrOzwO",
    "shops": [{
      "shop_id": "96a3a398-9aad-4e4d-b134-36e91144dd98",
      "location": [-1.23364281654358, 36.989128112793]
    }, {
      "shop_id": "a111875e-1b6b-4f2f-9f1f-69f5f3406b2f",
      "location": [-1.2334785, 36.98918]
    }, {
      "shop_id": "292b4f7b-7946-440f-adc7-a899dd53d54a",
      "location": [-1.2343206, 36.98308]
    }, {
      "shop_id": "a636e971-71a3-4025-bf6e-a7a4f02da2d8",
      "location": [-1.2339509, 36.98915]
    }, {
      "shop_id": "fac6fb72-f863-4e9d-9944-94023e35f87d",
      "location": [-1.24075210094452, 36.9895095825195]
    }, {
      "shop_id": "21954b4c-8af5-4d07-8534-7255f2863c1e",
      "location": [-1.2497865, 36.98877]
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
      "shop_id": "9df92967-09b7-4335-a625-969617adba1f",
      "location": [-1.2554095, 36.99152]
    }, {
      "shop_id": "96a81123-4aa2-4e1b-ac9f-799e29b8a2b4",
      "location": [-1.2524645, 37.001724]
    }, {
      "shop_id": "d4503f02-7f94-454f-9388-726e58c1ab2e",
      "location": [-1.2615988, 37.0084]
    }, {
      "shop_id": "7472cc75-a576-47b4-af99-b3609dbf3726",
      "location": [-1.2611108, 37.00928]
    }, {
      "shop_id": "8ae08584-1da6-4d6e-9f62-298b2c802cd4",
      "location": [-1.2695831, 36.99975]
    }, {
      "shop_id": "5f785cdb-6b25-4245-b71d-e1d9e3c18d84",
      "location": [-1.2688806, 37.00206]
    }, {
      "shop_id": "51b69db2-45bd-4458-b425-13fe2f297356",
      "location": [-1.2697082, 37.002464]
    }, {
      "shop_id": "bcbde01c-9cff-4653-bc04-02b4ce99a7ae",
      "location": [-1.2685252, 37.005856]
    }, {
      "shop_id": "0afb4c59-0d8e-4912-881b-29c8d56b6c8e",
      "location": [-1.2833005, 37.043564]
    }, {
      "shop_id": "f9612019-3edd-4887-8e0e-2b8a50919963",
      "location": [-1.2792714, 37.046158]
    }, {
      "shop_id": "c530fbec-40dc-4260-924e-436b415d77b7",
      "location": [-1.279316, 37.04615]
    }, {
      "shop_id": "f94eda7f-27fa-4cef-8763-eaf63aef0874",
      "location": [-1.2793179, 37.04617]
    }, {
      "shop_id": "40abf082-783d-41c4-9abb-dccee7afbd8a",
      "location": [-1.2792569, 37.045685]
    }, {
      "shop_id": "0d46bf2b-a1ca-4901-9208-c7c7f977dfdd",
      "location": [-1.279235, 37.04554]
    }, {
      "shop_id": "3b0b8bfc-dde8-4a6d-8183-6ca6a8552955",
      "location": [-1.2792387, 37.04552]
    }, {
      "shop_id": "aa5d6b1b-3e33-46bd-99bb-c92db363bf81",
      "location": [-1.2792405, 37.04549]
    }, {
      "shop_id": "cf535fdb-59b3-487c-9ace-8093d67454b1",
      "location": [-1.2792786, 37.045506]
    }, {
      "shop_id": "0b853912-467f-4274-a09e-0630fb4e393e",
      "location": [-1.279194, 37.04541]
    }, {
      "shop_id": "42a982bf-f66f-4194-b443-a9e160f97666",
      "location": [-1.279227, 37.04536]
    }, {
      "shop_id": "f21c7c6d-fbaf-470f-a9a8-58b40b0909f1",
      "location": [-1.2792183, 37.045288]
    }, {
      "shop_id": "7f2702cf-4095-479d-aa1e-b0decd10f459",
      "location": [-1.2792155, 37.04522]
    }, {
      "shop_id": "14f3c229-e105-4a46-aa88-c4b829223b23",
      "location": [-1.2811552, 37.011955]
    }, {
      "shop_id": "73ac3395-f10c-4722-9b5c-105e6faf6a40",
      "location": [-1.2811311, 37.011967]
    }, {
      "shop_id": "0a9eb82a-43f8-40b4-9056-a135377f8178",
      "location": [-1.2735583, 37.000923]
    }, {
      "shop_id": "360870e8-e8ac-4c98-b110-2a4c580e5e86",
      "location": [-1.2705041, 36.994003]
    }, {
      "shop_id": "0568497e-fee2-45f4-aa45-3d1b429bc138",
      "location": [-1.2762018, 36.989014]
    }, {
      "shop_id": "e6aefd54-48d4-4290-bd58-548f92b8cf01",
      "location": [-1.270455, 36.992847]
    }, {
      "shop_id": "58a07775-78e5-4ccb-9a2e-7386739be302",
      "location": [-1.27058708667755, 36.9925270080566]
    }, {
      "shop_id": "9568d766-a264-48f3-b91f-c87ff7504678",
      "location": [-1.2697216, 36.9926]
    }, {
      "shop_id": "a6af8751-dcbc-456a-ac7e-0885ceab670f",
      "location": [-1.2699114, 36.99196]
    }, {
      "shop_id": "47e028e5-49e8-4663-a04d-52dcf9c45495",
      "location": [-1.2697372, 36.991463]
    }, {
      "shop_id": "c90a9688-4b0c-4a07-8876-afda1a492e42",
      "location": [-1.2688452, 36.991474]
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
      "shop_id": "1b8d0943-4a2a-4ac5-b2b9-444806cdcf17",
      "location": [-1.2678181, 36.990677]
    }, {
      "shop_id": "090372ca-436c-4e36-b7ff-391ae33b54a9",
      "location": [-1.262862, 36.990128]
    }, {
      "shop_id": "ff11d2a7-3e35-4bb2-9fa8-b3cd6fb70721",
      "location": [-1.2575206, 36.987503]
    }, {
      "shop_id": "7509b3f9-6b6b-4420-a622-787686bda330",
      "location": [-1.2638565, 36.98333]
    }, {
      "shop_id": "7523eabe-979c-411a-a40f-4177ec140a17",
      "location": [-1.264048, 36.98326]
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
      "shop_id": "20a5b25a-bed4-4d4d-8d92-32924ec2a3f0",
      "location": [-1.2646892, 36.983757]
    }, {
      "shop_id": "3710f4df-723b-497e-affb-6a1091e36b0a",
      "location": [-1.2646958, 36.983818]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kenol/Gotinyaga",
    "route_id": "49914d3d-c2f6-41e5-bc09-8af190d5f0f5",
    "matrix_info": {
      "DistanceMatrixAPI requests": 523,
      "cache_hit": "70%"
    },
    "distance": "66.48km",
    "path": "l~mEa_raF{}I`uHutImsDrNiJsCjBpb@qXQg@u}AieBgFsAoIbHgFlAh@o@BrHG`Cab@kHSK}mIowAa@u@wB{H~{JzkBgI~DaFpCpIbFxuCnc@dD}Ad@CTLvDqEvHmG~BiDtDwAtBkCns@ek@~Am@\\g@tGuCf@VbHkGhw@sLxAcAm@oBwAgF|DpHbzLff@",
    "shops": [{
      "shop_id": "b70c6a60-f8ae-4270-b9ec-fe1556cd79e0",
      "location": [-1.00360691547394, 37.0755157470703]
    }, {
      "shop_id": "b00c4c6e-7242-4421-aeab-9074da132eea",
      "location": [-0.9489355, 37.104393]
    }, {
      "shop_id": "d27e37a9-0778-445c-bb54-bdf570dbcf3b",
      "location": [-0.9514418, 37.106197]
    }, {
      "shop_id": "be219c1e-5ebf-43d3-8d73-8b7ed3eb8f4b",
      "location": [-0.9507021, 37.105656]
    }, {
      "shop_id": "050c1791-f0ba-496b-a55f-2dec9d853237",
      "location": [-0.9563918, 37.10975]
    }, {
      "shop_id": "5e1dbaa2-3344-4f97-95b0-7ca58b77d4f3",
      "location": [-0.9563034, 37.109947]
    }, {
      "shop_id": "35e835d2-1489-491b-850c-8ae89671d627",
      "location": [-0.9411487, 37.126324]
    }, {
      "shop_id": "775f90b9-feaf-4ce8-a4ad-eddf6e9108e2",
      "location": [-0.9399934, 37.126743]
    }, {
      "shop_id": "7aa2767d-be9e-4943-8bd5-4761f3a255b1",
      "location": [-0.9383095, 37.125275]
    }, {
      "shop_id": "8d658ea3-63bb-43a3-b05c-57c5f7d1bb16",
      "location": [-0.937151, 37.12489]
    }, {
      "shop_id": "8d598e2a-1c09-40c3-8348-d23f3d966954",
      "location": [-0.937364, 37.125126]
    }, {
      "shop_id": "e371c617-8ff5-479e-a1c9-4ce7e3c13692",
      "location": [-0.937377, 37.123592]
    }, {
      "shop_id": "39fb5ad7-c685-4a29-94f9-c921f2682e10",
      "location": [-0.937343, 37.122944]
    }, {
      "shop_id": "d9a804af-86db-4c35-9ba3-dc57c725fd12",
      "location": [-0.9317293, 37.124435]
    }, {
      "shop_id": "5fe9fbdf-4c56-4442-b6e9-38ae583b767a",
      "location": [-0.9316255, 37.124496]
    }, {
      "shop_id": "4d9caa28-71e3-4a01-9aa5-fa6d560553cb",
      "location": [-0.878042, 37.138657]
    }, {
      "shop_id": "a9aff436-09f3-4ed7-909e-66dd24f5389e",
      "location": [-0.8778727, 37.13893]
    }, {
      "shop_id": "3f825138-c66b-4795-ab9e-4f154098dafd",
      "location": [-0.8772721, 37.140514]
    }, {
      "shop_id": "8a05a7d2-8fed-470d-8020-ce589fb14929",
      "location": [-0.9382266, 37.123085]
    }, {
      "shop_id": "549e1487-7e3e-4ccd-b60b-f309a85b27a4",
      "location": [-0.936592698097229, 37.1221313476562]
    }, {
      "shop_id": "e61359fb-9dda-463f-8bd7-dd94b5193ea6",
      "location": [-0.9354605, 37.1214]
    }, {
      "shop_id": "ce03e6bf-38da-4e68-8519-b3ebb8898b43",
      "location": [-0.9371486, 37.120262]
    }, {
      "shop_id": "744c1503-327d-4c5e-91aa-b489ed8ceb37",
      "location": [-0.9612804, 37.11442]
    }, {
      "shop_id": "4809beab-c894-4428-8549-3dc3b92caf49",
      "location": [-0.9621123, 37.11489]
    }, {
      "shop_id": "5c3cdb58-63b1-4b23-83c0-92a37362397f",
      "location": [-0.9622984, 37.114906]
    }, {
      "shop_id": "6ac75e0f-83a1-40e0-8aa2-0d26ca1c9449",
      "location": [-0.9624133, 37.114838]
    }, {
      "shop_id": "95848064-8530-48cd-baab-c45aa75fe674",
      "location": [-0.9633315, 37.11589]
    }, {
      "shop_id": "fd5ea941-15fb-48bf-b671-f9363224c531",
      "location": [-0.9648945, 37.117245]
    }, {
      "shop_id": "7edc707e-6c12-47b3-bd2b-d29793857168",
      "location": [-0.9655326, 37.11809]
    }, {
      "shop_id": "18f6211e-a3b9-450c-9618-8c3bba358b14",
      "location": [-0.9664428, 37.11853]
    }, {
      "shop_id": "cc3bbdcb-6ae3-4dd4-a075-01dbf43c22d2",
      "location": [-0.9670335, 37.119232]
    }, {
      "shop_id": "a91c1892-36a2-42c8-b66a-e414d4bbfcb1",
      "location": [-0.9754311, 37.1263]
    }, {
      "shop_id": "e6d19713-f2ca-44dd-964e-2369f6e6b442",
      "location": [-0.9759123, 37.126534]
    }, {
      "shop_id": "fa6b04b4-b5a5-49dc-bf27-99b6df693235",
      "location": [-0.9760634, 37.126728]
    }, {
      "shop_id": "8aaf908d-8385-4bc1-988c-33fa55993cee",
      "location": [-0.9774537, 37.127476]
    }, {
      "shop_id": "035fff2e-b0d3-40a2-99ed-54e0d726a1e1",
      "location": [-0.9776494, 37.12736]
    }, {
      "shop_id": "456965bd-739f-475a-8447-c4387a270d97",
      "location": [-0.9791065, 37.128704]
    }, {
      "shop_id": "cb986e48-fd55-47fa-9b0d-81f40e4bf870",
      "location": [-0.9881152, 37.130882]
    }, {
      "shop_id": "3e541541-1419-4517-b5bc-3ec9b21f82c1",
      "location": [-0.9885733, 37.131218]
    }, {
      "shop_id": "f739aa51-bbde-46dd-a74a-da628149c2fc",
      "location": [-0.9883368, 37.131783]
    }, {
      "shop_id": "3b20fe0d-12a4-4a6f-b576-6fc365bba07c",
      "location": [-0.9879047, 37.132942]
    }, {
      "shop_id": "22e05329-7c05-4cbd-8e9b-cbc6b4d5b5b8",
      "location": [-0.9888547, 37.131405]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kiambu Road 1",
    "route_id": "2e179fd0-4b0b-4342-b938-732c71efd593",
    "matrix_info": {
      "DistanceMatrixAPI requests": 288,
      "cache_hit": "90%"
    },
    "distance": "35.62km",
    "path": "`ijF{`p_F|ZulAnn@u}C{~@aw@AE~GaIz@wA}g@cNqGTKBhAdHCXYv@?@oAdDGJHBURQx@EVqhDaf@}DyD@^dY~QvCA`JnGlmCpSlfAyOjr@mx@fy@d_@?NqD`@oDvF}lAdxAC\\PdB_D_@]tAJn@?tMlE}F|@hKB?FBH`@DRN^\\MsAMAsBlElAIENeCdAxEFCNBorA|oE",
    "shops": [{
      "shop_id": "2aa486e1-2330-45ec-a368-80e4fcf706d0",
      "location": [-1.2092783, 36.799934]
    }, {
      "shop_id": "b0e3f006-173e-4cb5-b870-01fc569f6d59",
      "location": [-1.2168758, 36.82532]
    }, {
      "shop_id": "038a4518-3914-4b04-9bfa-a77a7cac0ca2",
      "location": [-1.2066627, 36.83429]
    }, {
      "shop_id": "c5a35b1f-6e79-41ef-84c7-b5d362401ae5",
      "location": [-1.2066532, 36.834324]
    }, {
      "shop_id": "0dce90d0-68ab-4ca4-92db-dd97b416c261",
      "location": [-1.2080909, 36.835926]
    }, {
      "shop_id": "3fdab20d-4e1c-4987-90b8-045ee3fac205",
      "location": [-1.2083945, 36.836365]
    }, {
      "shop_id": "c56466ef-b720-40ef-93a1-a2bfa0dd60bf",
      "location": [-1.2018427, 36.838795]
    }, {
      "shop_id": "2835885e-529a-4a10-818d-79b501bb3dc5",
      "location": [-1.2004744, 36.83868]
    }, {
      "shop_id": "9320e90b-d642-4c77-90ed-11a04da5e5a9",
      "location": [-1.2004144, 36.838657]
    }, {
      "shop_id": "76d1c3bd-60e4-4f95-8829-ef9bb35f1d02",
      "location": [-1.2007823, 36.837185]
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
      "shop_id": "09cce640-7318-45ec-ad56-02503a853bf5",
      "location": [-1.2001327, 36.835762]
    }, {
      "shop_id": "7f3745e6-caee-46e3-b596-7c3b578fa415",
      "location": [-1.2000424, 36.835472]
    }, {
      "shop_id": "f90984b9-74f9-4c9d-be80-27168ce1856d",
      "location": [-1.200007, 36.83535]
    }, {
      "shop_id": "543d8adf-ed57-42c8-bf14-7c0dfe381a3d",
      "location": [-1.1728799, 36.841595]
    }, {
      "shop_id": "d13c384d-b52a-40a0-81ca-cc3d89e4f757",
      "location": [-1.1719267, 36.84253]
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
      "shop_id": "cb367690-4867-409c-b4f8-bb50e94b6206",
      "location": [-1.1786591, 36.83798]
    }, {
      "shop_id": "936862d0-04b7-4aa0-b2eb-301d807dc2bd",
      "location": [-1.201448, 36.834686]
    }, {
      "shop_id": "a767c58b-099c-4d8d-9238-d78f43621803",
      "location": [-1.2128838, 36.837383]
    }, {
      "shop_id": "baab72d4-eb5c-45bc-a38b-b30db2f20ec8",
      "location": [-1.2211001, 36.846565]
    }, {
      "shop_id": "bab4f98c-032d-4394-a9a8-069a896f1d93",
      "location": [-1.2304153, 36.841415]
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
      "shop_id": "6f681e3e-5e6a-495f-9500-5e9dd950c219",
      "location": [-1.2161788, 36.825657]
    }, {
      "shop_id": "00ef72e0-976a-45c0-9516-314ddff2eaeb",
      "location": [-1.2161558, 36.82551]
    }, {
      "shop_id": "f7ae6a8a-9be6-4f2b-847d-fafecccf4605",
      "location": [-1.2162486, 36.825005]
    }, {
      "shop_id": "848ea469-17c2-4c38-b37d-5823c17f81cb",
      "location": [-1.2154503, 36.825157]
    }, {
      "shop_id": "5de2a47d-5458-4f57-9351-66797ff08b67",
      "location": [-1.215303, 36.824734]
    }, {
      "shop_id": "c1f31e63-7d0a-4032-91c4-22725d224508",
      "location": [-1.2153596, 36.82449]
    }, {
      "shop_id": "0f8a1285-f423-4ad2-95ce-7a0ce7f3b021",
      "location": [-1.2153556, 36.822144]
    }, {
      "shop_id": "a2a10afe-08ce-423d-9653-1bd5e1b3ec85",
      "location": [-1.2163888, 36.82341]
    }, {
      "shop_id": "8dd1bb15-3ffe-41d1-8354-e48cd05776fc",
      "location": [-1.2167, 36.821445]
    }, {
      "shop_id": "ae6cc79e-674b-4aae-95d2-1156230deced",
      "location": [-1.2167239, 36.821445]
    }, {
      "shop_id": "bd56eacb-e712-487c-8fdb-5da9c73a4138",
      "location": [-1.2167604, 36.821423]
    }, {
      "shop_id": "efeda45b-7454-4ecf-bace-92a1a073426e",
      "location": [-1.2168119, 36.821247]
    }, {
      "shop_id": "93243844-d809-4548-9ec9-ff0e832a3221",
      "location": [-1.2168429, 36.82115]
    }, {
      "shop_id": "990b3e7e-c619-44ee-8d2b-f8a53bb5243b",
      "location": [-1.2169228, 36.820988]
    }, {
      "shop_id": "863abb65-9345-419d-b216-c2c46ef7449b",
      "location": [-1.2170653, 36.82106]
    }, {
      "shop_id": "9c8ecfdc-2897-4625-92ff-63186945c7c2",
      "location": [-1.2166548, 36.821125]
    }, {
      "shop_id": "e4cd9be7-c4b8-46df-903a-46477901e6b1",
      "location": [-1.2166401, 36.821705]
    }, {
      "shop_id": "27497e54-17e9-44fd-ad95-2064577e9b33",
      "location": [-1.217666, 36.821316]
    }, {
      "shop_id": "a7434da0-cb74-494c-bb6f-1b65eef938ee",
      "location": [-1.2176217, 36.82135]
    }, {
      "shop_id": "e0addf33-eab7-44a8-9613-550456103aff",
      "location": [-1.2177022, 36.82202]
    }, {
      "shop_id": "720a0ff0-783b-487b-a8c5-4247f0c315ff",
      "location": [-1.2180502, 36.820934]
    }, {
      "shop_id": "84c67ec7-19c0-4d98-839a-fab790e57feb",
      "location": [-1.2180934, 36.820946]
    }, {
      "shop_id": "5af39b9e-c231-4f2e-b7f9-9d08c1b3f74d",
      "location": [-1.21817, 36.82093]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "KU/Membey",
    "route_id": "0b477464-2778-481f-a153-b91b2e6db813",
    "matrix_info": {
      "DistanceMatrixAPI requests": 173,
      "cache_hit": "78%"
    },
    "distance": "44.56km",
    "path": "|qoF_r``FetMmzHkM`kAjAkl@wGqJu@a@Bi@xKmh@j@{CT_C~ZioAa@gEp\\koDiCl_D`Uze@aY|y@n{@u_@^fMnJxAOp@sGjJi@vCc@l@mRiJfKpWqQ`f@vLdDNfDbAh@jwJb}G",
    "shops": [{
      "shop_id": "19340109-5035-4f41-94e3-6d837f5d8742",
      "location": [-1.1567585, 36.92263]
    }, {
      "shop_id": "dcf9275c-1692-4bc4-b4eb-a926f79f9c2e",
      "location": [-1.1544616, 36.91046]
    }, {
      "shop_id": "20687c24-e5a5-4ede-b72e-3317fcf04996",
      "location": [-1.1548376, 36.91772]
    }, {
      "shop_id": "eb4724b6-2a3a-452e-b3e8-54883dc9ce6a",
      "location": [-1.1534361, 36.919567]
    }, {
      "shop_id": "f7f11dfe-dd7a-44e6-a05a-a74c82441c47",
      "location": [-1.153169, 36.91974]
    }, {
      "shop_id": "70841b95-83ef-4af1-9507-86280e2fba94",
      "location": [-1.1531925, 36.919945]
    }, {
      "shop_id": "9447eedc-87d3-401a-b441-20b02051db03",
      "location": [-1.1552387, 36.926582]
    }, {
      "shop_id": "bfc55962-c8b2-408d-8ceb-d516365c3de8",
      "location": [-1.1554582, 36.927364]
    }, {
      "shop_id": "4a8e5762-8723-407e-9f1e-122347dc5ab1",
      "location": [-1.1555653, 36.927998]
    }, {
      "shop_id": "1ca7892b-9e7f-41d3-a09d-b93c78c0e0b7",
      "location": [-1.1600496, 36.94085]
    }, {
      "shop_id": "7572127b-f125-4036-ab96-b980c9e8cf19",
      "location": [-1.1598791, 36.94185]
    }, {
      "shop_id": "29b9e525-3c8b-45e7-8aa5-43a7a7964616",
      "location": [-1.1646125, 36.97007]
    }, {
      "shop_id": "79eafae3-56ed-45f0-b0c8-1bc08c2b1c61",
      "location": [-1.16391563415527, 36.9443969726562]
    }, {
      "shop_id": "df99e89e-a9cc-441c-a7de-7b6f784de83a",
      "location": [-1.1674489, 36.93818]
    }, {
      "shop_id": "bb57efb1-243a-4a07-be05-687d83d2f634",
      "location": [-1.16327905654907, 36.9287490844727]
    }, {
      "shop_id": "e2e53453-8784-4d94-b093-efddd3eba894",
      "location": [-1.1729624, 36.933983]
    }, {
      "shop_id": "20c7ff4f-c338-47b2-ac30-c384185e79ed",
      "location": [-1.1731184, 36.931698]
    }, {
      "shop_id": "b60463cf-2740-40de-a047-acd6de933d1b",
      "location": [-1.1749645, 36.931248]
    }, {
      "shop_id": "4795ab3e-60c1-484c-824d-bf997c09f6c4",
      "location": [-1.17488300800323, 36.9309959411621]
    }, {
      "shop_id": "35b2c9d7-47ec-45d8-933f-ba2a69ac20d8",
      "location": [-1.1735029, 36.92918]
    }, {
      "shop_id": "988b813f-7d25-47b9-bde1-632ceb4e39d7",
      "location": [-1.1732938, 36.928417]
    }, {
      "shop_id": "4edfc7e1-46a5-4b63-aa9b-5a8d61594a41",
      "location": [-1.1731064, 36.92819]
    }, {
      "shop_id": "db82bae3-496b-4a9e-8c54-9d0b90fa481f",
      "location": [-1.17, 36.93]
    }, {
      "shop_id": "d7294bff-113c-456a-89ae-606b70367a9c",
      "location": [-1.1719568, 36.92607]
    }, {
      "shop_id": "13080594-1747-4064-8614-107d7135b400",
      "location": [-1.1689899, 36.919815]
    }, {
      "shop_id": "37966cbd-c425-45f5-9e11-b35fad5b3d13",
      "location": [-1.1711899, 36.918987]
    }, {
      "shop_id": "771d3b16-8096-479a-9ff3-9cbe2d1c1d9f",
      "location": [-1.1712689, 36.91815]
    }, {
      "shop_id": "192e51cc-bc3b-4361-bca7-ba7fb5bff4eb",
      "location": [-1.1716064, 36.917942]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Lavington",
    "route_id": "ed42a2c7-d733-4bd6-8232-ac0e7f9e096b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 27,
      "cache_hit": "97%"
    },
    "distance": "31.86km",
    "path": "tz|Fmdx_FmtCfeFjSjMhB{BrCyQYeEf]be@BIDBDOM@GGRSTK_Ddv@Ms@o@rE~J@tGqCtOfYfO|M^iHtMvAw_@zGOJH_@isA|rA~z@ekAvWvGWrEfFkJv_AoQ_Oe`AwC_FwGvGyVoJ|[gBx@aZ~JqmF",
    "shops": [{
      "shop_id": "cb16e138-61fe-47b9-b253-7d05062e25d5",
      "location": [-1.2758784, 36.792187]
    }, {
      "shop_id": "2df14f39-c623-4bde-9258-6f20c7008ee9",
      "location": [-1.2791363, 36.789886]
    }, {
      "shop_id": "05be95e7-26fb-41de-a0f3-ff55808bb24e",
      "location": [-1.2796736, 36.79051]
    }, {
      "shop_id": "00973bb1-a9bf-491c-9d72-bb67700368cc",
      "location": [-1.2804117, 36.79352]
    }, {
      "shop_id": "00de6c36-205a-4bd0-b51d-4fd80185714f",
      "location": [-1.2802774, 36.794514]
    }, {
      "shop_id": "7fd299e7-4d93-4235-b465-8fb00602fa92",
      "location": [-1.2851241, 36.788406]
    }, {
      "shop_id": "9e0e08d8-734a-45eb-8adc-462f1bb35ce2",
      "location": [-1.2851369, 36.788456]
    }, {
      "shop_id": "af1e0b2d-6d25-4e24-a6c7-c8a97cb8429e",
      "location": [-1.2851748, 36.78844]
    }, {
      "shop_id": "3833dbde-c66e-4170-8917-ccb72c798877",
      "location": [-1.285203, 36.788517]
    }, {
      "shop_id": "ab823ab1-69ae-4e0d-b970-f89e4c7bb15e",
      "location": [-1.2851303, 36.788513]
    }, {
      "shop_id": "c6079de9-d098-4806-8803-a6c091ec576b",
      "location": [-1.2850857, 36.788548]
    }, {
      "shop_id": "94d65180-66e0-4b15-b29f-604628c23112",
      "location": [-1.2851882, 36.78865]
    }, {
      "shop_id": "e866047b-6d8d-4cd1-bd47-00e457594b10",
      "location": [-1.2852954, 36.788708]
    }, {
      "shop_id": "263cc62c-ef76-498d-a766-4d25505c71bd",
      "location": [-1.284504, 36.77988]
    }, {
      "shop_id": "03f349b6-8fac-485c-96d9-dbefd74b897f",
      "location": [-1.2844307, 36.78014]
    }, {
      "shop_id": "98acce57-9511-4eaa-97a2-b5054a2196cf",
      "location": [-1.2841938, 36.77908]
    }, {
      "shop_id": "038683d6-d6e4-4df1-bb61-4618989cfbd1",
      "location": [-1.2861114, 36.77907]
    }, {
      "shop_id": "1c33c2cc-48b8-45e7-95d6-9a27208e14e3",
      "location": [-1.28750324249268, 36.7798042297363]
    }, {
      "shop_id": "87b38292-4085-4eab-b4bc-7bd8ac97f984",
      "location": [-1.2901655, 36.7756]
    }, {
      "shop_id": "27cf411c-6552-4b2e-be27-ac453eeabedf",
      "location": [-1.2927684, 36.773212]
    }, {
      "shop_id": "ff822759-d7f2-4b9f-bbef-23b4e6aef10d",
      "location": [-1.2929316, 36.7747]
    }, {
      "shop_id": "6523fec6-2ee1-4b5d-b666-cd9dac89129a",
      "location": [-1.2952807, 36.774258]
    }, {
      "shop_id": "68695d56-366f-472e-93e3-bc353fd186fa",
      "location": [-1.2900394, 36.77284]
    }, {
      "shop_id": "ef74c2e6-a531-4af7-96da-7cc76b82cf2e",
      "location": [-1.2899587, 36.772778]
    }, {
      "shop_id": "8ac165ab-bb6f-4a72-bbce-79aa3ae2032e",
      "location": [-1.2900141, 36.77294]
    }, {
      "shop_id": "b821aaaa-de80-4f76-910d-98ca7dd96898",
      "location": [-1.27652, 36.759506]
    }, {
      "shop_id": "7f2dc800-a2d9-4488-9d26-1b83ff8d85a1",
      "location": [-1.2861233, 36.771698]
    }, {
      "shop_id": "0a1fd5eb-cf6d-413b-b667-df92b63e5f4d",
      "location": [-1.2900774, 36.7703]
    }, {
      "shop_id": "e9169286-1655-495b-b776-6ef6cceb0ed2",
      "location": [-1.2899607, 36.769238]
    }, {
      "shop_id": "128eed53-c1f6-407c-8946-74cca5dfe422",
      "location": [-1.2911173, 36.771057]
    }, {
      "shop_id": "d39bb293-8088-47fe-a30d-bff835dfc4e3",
      "location": [-1.3014761, 36.77402]
    }, {
      "shop_id": "9f5f3ae8-0e8d-4b16-b442-b1789931fcde",
      "location": [-1.2989187, 36.784454]
    }, {
      "shop_id": "e431b050-33f0-424b-a3c3-598ff186a476",
      "location": [-1.2981589, 36.78557]
    }, {
      "shop_id": "d0c1f959-391a-4f1f-83f6-8e8f6e15e0e0",
      "location": [-1.2967573, 36.78417]
    }, {
      "shop_id": "097a451b-b5c8-47b0-a7c3-9b29c5bd94b3",
      "location": [-1.29294538497925, 36.7860107421875]
    }, {
      "shop_id": "c3e0fff4-b2cf-4401-8806-d501b4184ae8",
      "location": [-1.2975783, 36.786533]
    }, {
      "shop_id": "a4b425eb-70b1-4d24-a2f9-a68c758c1ef5",
      "location": [-1.2978675, 36.790855]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kitengela 2",
    "route_id": "1002e77b-80ca-4b56-952d-581512362491",
    "matrix_info": {
      "DistanceMatrixAPI requests": 312,
      "cache_hit": "82%"
    },
    "distance": "53.68km",
    "path": "dsfG_se`F~jWwiKrp@~OqBfJc@rJnFjIqKgEqDxAc\\qInAx@jFiKiFi@jB_F{Ii@mCMaAbB?@}ErDH\\DFQT]e@q@@gAYGLxClBO^k@fCSYFvAeKnRp@m@eDhv@fDjWmc@}ZhXa\\lA{DsGyMdUeWj@gC_GqDkFqAjHqJ_qVhbK",
    "shops": [{
      "shop_id": "552cb528-e145-4848-8e2d-4928e144a8f0",
      "location": [-1.47458529472351, 36.9610824584961]
    }, {
      "shop_id": "713629cb-be15-4f59-84b6-ce6db14747ec",
      "location": [-1.4825301, 36.95836]
    }, {
      "shop_id": "82942aa7-0b50-43d4-ae75-9bccaa1ad4b8",
      "location": [-1.4819599, 36.956562]
    }, {
      "shop_id": "f192795e-54f9-4de3-ac83-f88d4d8b20d6",
      "location": [-1.48178, 36.9547]
    }, {
      "shop_id": "c012e56d-d715-4427-9867-dffccd568e30",
      "location": [-1.4829801, 36.95304]
    }, {
      "shop_id": "8cd7a0cd-a42e-400d-b1d7-684d3ca616e5",
      "location": [-1.4809709, 36.954044]
    }, {
      "shop_id": "bdfa38e2-f443-497c-b175-13bfcb001423",
      "location": [-1.48008406162262, 36.9535865783691]
    }, {
      "shop_id": "2269e780-4a2d-4611-83f1-f35185422235",
      "location": [-1.4754201, 36.955284]
    }, {
      "shop_id": "aff5d0c7-24c5-42fb-9c60-1f305af8592a",
      "location": [-1.475819, 36.954987]
    }, {
      "shop_id": "55de994b-440b-43ae-84b3-80a85431c992",
      "location": [-1.4770005, 36.956955]
    }, {
      "shop_id": "4f99f00b-634a-4743-8042-4f75aa14f276",
      "location": [-1.4758308, 36.957165]
    }, {
      "shop_id": "53bf3cbc-93b4-423d-b341-a28a607be1cd",
      "location": [-1.4763701, 36.958294]
    }, {
      "shop_id": "02398c23-3452-4c8a-9e34-d5e18d43b81b",
      "location": [-1.4746318, 36.9585]
    }, {
      "shop_id": "7ec4ae6a-e054-4c06-9ac6-80377947eba6",
      "location": [-1.4739174, 36.958572]
    }, {
      "shop_id": "a128687f-14b0-4831-a3fb-7918a8910320",
      "location": [-1.4735936, 36.958073]
    }, {
      "shop_id": "5d708608-5635-4453-bf06-b112d02407be",
      "location": [-1.4735888, 36.958057]
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
      "shop_id": "6de6a1ed-eba3-4e0f-b2f5-a87f6aedf70c",
      "location": [-1.4724665, 36.956863]
    }, {
      "shop_id": "fc2aea42-92bd-4861-b731-ae141979dd75",
      "location": [-1.4723241, 36.957054]
    }, {
      "shop_id": "ada2a394-96db-4db1-a194-bb9e966830ee",
      "location": [-1.4720728, 36.957043]
    }, {
      "shop_id": "39082a35-9db8-4fdc-aa53-d123d4c4e788",
      "location": [-1.4717088, 36.95717]
    }, {
      "shop_id": "f25b73e4-541e-4db5-9217-ee8fdb685f55",
      "location": [-1.4716744, 36.957096]
    }, {
      "shop_id": "9cc1b055-d003-4088-b4df-266b2c6eca58",
      "location": [-1.4724440574646, 36.9565467834473]
    }, {
      "shop_id": "421dbbcb-7d75-460a-aad9-28db383259e1",
      "location": [-1.4723561, 36.956394]
    }, {
      "shop_id": "a766f538-a763-4507-9755-20de0fe4375c",
      "location": [-1.4721377, 36.955708]
    }, {
      "shop_id": "6d810029-afb4-448a-a3cd-8c1ac4eeefdd",
      "location": [-1.4720424, 36.95584]
    }, {
      "shop_id": "3cf5362c-a1ac-411f-b436-7c9c5f804287",
      "location": [-1.4720824, 36.955395]
    }, {
      "shop_id": "e7e7e13c-2325-4a3c-99f7-b355ffb9ed93",
      "location": [-1.4701326, 36.952282]
    }, {
      "shop_id": "7cac01dd-6903-40a2-8149-c8e20b9f1767",
      "location": [-1.4703796, 36.952507]
    }, {
      "shop_id": "0c69e19b-b695-4ee8-bf77-a74154194398",
      "location": [-1.4695481, 36.94366]
    }, {
      "shop_id": "6bf4e88f-8125-4f72-9d8f-cfb26bc906ea",
      "location": [-1.4703875, 36.939762]
    }, {
      "shop_id": "b08f28d9-9350-49c7-b60d-9a92f458c2ac",
      "location": [-1.4645633, 36.94423]
    }, {
      "shop_id": "3d8fe3f6-111a-451b-a880-2c50d7929680",
      "location": [-1.4686123, 36.94888]
    }, {
      "shop_id": "5cc9c0b8-ac59-4e1b-a4a8-c377c9c44d35",
      "location": [-1.4690042, 36.949818]
    }, {
      "shop_id": "cf097980-b592-4c71-bf1f-929faeb6cbe9",
      "location": [-1.4676222, 36.95219]
    }, {
      "shop_id": "ec0bff10-4f01-40fc-b434-2f00a76348ba",
      "location": [-1.4711692, 36.956062]
    }, {
      "shop_id": "ef748d0b-0094-427c-a84a-28d938ca7c97",
      "location": [-1.4713918, 36.956738]
    }, {
      "shop_id": "52f67dcb-314c-4c78-92e5-0ecac1e1ec00",
      "location": [-1.4701113, 36.95763]
    }, {
      "shop_id": "e0cd9e06-f7fb-4a6f-8bab-db3f65ed6b66",
      "location": [-1.4689316, 36.958035]
    }, {
      "shop_id": "73b9cfb0-c534-4460-b5e2-db6c0df8fc5b",
      "location": [-1.4704331, 36.959885]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kibera",
    "route_id": "f8e6cdbe-8bea-4a90-bb47-24282fd37e61",
    "matrix_info": {
      "DistanceMatrixAPI requests": 594,
      "cache_hit": "72%"
    },
    "distance": "24.92km",
    "path": "tz|Fmdx_Fn}AhnDLlDbQnCy@vDcB|J{@fFQb@]l@nBvA}Bu@d@QsH{A_BsAvC`ReAx@y]|g@HDFNsCvlAD?jI{GuI{DZQnDVzKeTqOuGrGi[mHgF~Kyh@xDsI~EgGRVbCkBVc@rAwD{@oH_Cu@{IjBfDjEo@PYlA`Az@|CbBoOfD`DcHeMaRy~@mtD",
    "shops": [{
      "shop_id": "c246fbec-af35-4e40-8fd9-77cd5995222b",
      "location": [-1.3149054, 36.800976]
    }, {
      "shop_id": "518f0e12-311b-42e2-b1e6-3d2c8f23aee0",
      "location": [-1.3149815, 36.80011]
    }, {
      "shop_id": "ff160f8a-f2af-40f0-b88b-b312cb79244c",
      "location": [-1.3178753, 36.799393]
    }, {
      "shop_id": "2ae65dc8-acdc-4c56-a467-d07a91d17324",
      "location": [-1.3175856, 36.798466]
    }, {
      "shop_id": "d02c69e1-6154-4d92-b871-391de03141e1",
      "location": [-1.3170907, 36.796555]
    }, {
      "shop_id": "47312664-7f79-49f4-bd43-77b537316dbf",
      "location": [-1.3167903, 36.7954]
    }, {
      "shop_id": "dca7fbc3-12b6-433e-9e3d-04e16021e574",
      "location": [-1.3166984, 36.79522]
    }, {
      "shop_id": "edb963ae-8b93-4131-aa27-27beae1757f7",
      "location": [-1.3165514, 36.79499]
    }, {
      "shop_id": "018ea672-bde7-4ab7-9453-01bc2513a32c",
      "location": [-1.3171122, 36.79455]
    }, {
      "shop_id": "931e708a-4fce-4fca-8d6a-d5a1054ef22e",
      "location": [-1.3164752, 36.79482]
    }, {
      "shop_id": "21388b20-7bac-4bf1-8f7d-912d43d9c8fc",
      "location": [-1.3166718, 36.794907]
    }, {
      "shop_id": "e0c7224d-a5c4-40ca-b415-f5017059da45",
      "location": [-1.3151315, 36.79537]
    }, {
      "shop_id": "29454124-d816-48b4-97d9-3e6d2e941e09",
      "location": [-1.3146461, 36.795788]
    }, {
      "shop_id": "e33e3735-3ff3-4452-9b60-ecb382bcf3dc",
      "location": [-1.3154079, 36.792744]
    }, {
      "shop_id": "973b3608-9607-4148-8161-1b2d642edb12",
      "location": [-1.3150648, 36.792446]
    }, {
      "shop_id": "91c35aa4-9f45-4240-8f79-ca9954fe6b56",
      "location": [-1.3101321, 36.785896]
    }, {
      "shop_id": "181b64ea-5ad2-4add-af85-37990d1c584b",
      "location": [-1.3101773, 36.785866]
    }, {
      "shop_id": "730a41c6-754f-47e3-953a-1f5d25b9e951",
      "location": [-1.3102187, 36.78579]
    }, {
      "shop_id": "9774194a-f409-426d-85a7-075895624378",
      "location": [-1.3094778, 36.77335]
    }, {
      "shop_id": "19c728ff-0a17-469e-9bd9-8e5ba909d71f",
      "location": [-1.309514, 36.773346]
    }, {
      "shop_id": "11b4ea18-523a-4ca5-8ad2-ed86bb0b0c9b",
      "location": [-1.31117, 36.774765]
    }, {
      "shop_id": "2340d3a5-cbcd-4721-8813-daf2969e092d",
      "location": [-1.3094645, 36.775707]
    }, {
      "shop_id": "eaab2d14-eeaf-49dc-b403-b43dfda3be90",
      "location": [-1.3096004, 36.7758]
    }, {
      "shop_id": "c4958b53-5145-45ab-94f5-0dbcad90e030",
      "location": [-1.3104773, 36.77568]
    }, {
      "shop_id": "c07b5339-046f-4510-8572-5458a5fbc3fe",
      "location": [-1.3125365, 36.779068]
    }, {
      "shop_id": "35654bab-7ce9-4a59-b79a-c55a5baab0d8",
      "location": [-1.3098944, 36.780464]
    }, {
      "shop_id": "65345ced-d069-497c-9d58-52e0a6cdf498",
      "location": [-1.3112698, 36.784992]
    }, {
      "shop_id": "609320fd-015e-4bf6-a020-fd4991b33eba",
      "location": [-1.3097593, 36.78615]
    }, {
      "shop_id": "e77a1a91-2004-436f-bc47-40927aca85be",
      "location": [-1.3118376, 36.792843]
    }, {
      "shop_id": "f50b84ac-4737-4f63-90ea-7b69ccd857d5",
      "location": [-1.3127717, 36.794544]
    }, {
      "shop_id": "c761e4bd-45f2-4b40-8749-8718861f3f04",
      "location": [-1.313889, 36.79586]
    }, {
      "shop_id": "077ab1bf-e774-4771-af80-30db197ac253",
      "location": [-1.3139911, 36.795742]
    }, {
      "shop_id": "1fea668b-2a36-4c0d-ad64-46e0e3249dc5",
      "location": [-1.3146482, 36.796276]
    }, {
      "shop_id": "db61b953-e371-44db-ba26-cc00ef73602c",
      "location": [-1.31476724147797, 36.7964553833008]
    }, {
      "shop_id": "e37427e8-c1f8-4ba4-930c-4545af780089",
      "location": [-1.3151937, 36.797382]
    }, {
      "shop_id": "6b054dc0-2eef-4373-bf1b-389086a5c5a6",
      "location": [-1.314893, 36.798904]
    }, {
      "shop_id": "c651de5f-692a-4cda-8de1-9de890c7bb1f",
      "location": [-1.3142467, 36.799168]
    }, {
      "shop_id": "05b15235-c7e5-4909-9e00-d2c6425ac4da",
      "location": [-1.3125142, 36.79863]
    }, {
      "shop_id": "c976690f-b70d-4a22-b0bd-495f26788f84",
      "location": [-1.3133475, 36.797607]
    }, {
      "shop_id": "1196c7e3-5787-4d34-ba98-6d454108eb63",
      "location": [-1.3131123, 36.79752]
    }, {
      "shop_id": "c31892e4-3384-4708-8720-80caf510faa8",
      "location": [-1.312983, 36.797134]
    }, {
      "shop_id": "7f598f9e-255e-4fc6-ac79-71842a3c0cfa",
      "location": [-1.3133084, 36.79683]
    }, {
      "shop_id": "7661dd3f-b818-4809-924b-12635502b2f8",
      "location": [-1.3141032, 36.79633]
    }, {
      "shop_id": "fd4e9cd5-6ad5-49a7-bbec-cd24e63a59c1",
      "location": [-1.3114556, 36.795494]
    }, {
      "shop_id": "99ec2ba1-f257-4dd1-997f-be4ec7efee93",
      "location": [-1.3122653, 36.796947]
    }, {
      "shop_id": "8a023310-34f6-4b0d-9cbf-a58331431859",
      "location": [-1.31, 36.8]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Limuru 2",
    "route_id": "0638e859-fa10-46a8-b9c4-90d49e185bd0",
    "matrix_info": {
      "DistanceMatrixAPI requests": 122,
      "cache_hit": "92%"
    },
    "distance": "84.68km",
    "path": "`ijF{`p_F{tI`kVs~FdoFFUEOe@Nq@_@fAqBd@lI`@LlGaA?^}DlCcAhBg~IqXBFJ_@HG@GNTDDf@b@wGuHb@M?UkdAgb@pgAjf@zEQo@OzDuAu@`Ki@V_vG`]rDd@ktDkSpCkAPRBFFEk@mA{EmCltj@ms]",
    "shops": [{
      "shop_id": "f915de02-a635-4f70-8e6b-a9bf15e89742",
      "location": [-1.1501102, 36.66781]
    }, {
      "shop_id": "a52aa910-7482-4083-a5cd-aa950fb59a2b",
      "location": [-1.109214, 36.629375]
    }, {
      "shop_id": "dcefe1ac-ec28-4328-a58c-9fe9d929c1cb",
      "location": [-1.1092452, 36.629494]
    }, {
      "shop_id": "dcffa5d6-26fa-460b-ac0e-019cbd60dda0",
      "location": [-1.1092191, 36.629574]
    }, {
      "shop_id": "bf9a2e75-12e6-4391-b290-7709e6bf7ac1",
      "location": [-1.1090314, 36.629494]
    }, {
      "shop_id": "de42b654-aef9-4f9e-8b94-f2245681ab9a",
      "location": [-1.1087772, 36.629654]
    }, {
      "shop_id": "9ed751a4-f3a8-4616-a936-2050af7e50ec",
      "location": [-1.1091352, 36.630222]
    }, {
      "shop_id": "5c7b8bc7-ff6c-4eb9-913e-e95edc837698",
      "location": [-1.1093342, 36.628548]
    }, {
      "shop_id": "4ba27e21-71df-4c7a-bab7-4a4c4888edd3",
      "location": [-1.1095048, 36.628483]
    }, {
      "shop_id": "2f33c8fd-88a3-4256-9c97-1f2c751a5fc2",
      "location": [-1.1108522, 36.628807]
    }, {
      "shop_id": "ebc45d26-b18f-45b1-a57f-6c6c35436b71",
      "location": [-1.110851, 36.62865]
    }, {
      "shop_id": "26b8b7d0-1623-4a5a-962a-abaacb764bbe",
      "location": [-1.109905, 36.627945]
    }, {
      "shop_id": "355a75d5-19dd-474b-95d4-b8d513409299",
      "location": [-1.1095635, 36.62741]
    }, {
      "shop_id": "cae19712-5e55-40e2-8451-2c9b1134de7b",
      "location": [-1.0533632, 36.6315]
    }, {
      "shop_id": "455b7f09-5e54-4700-a128-47af3452c744",
      "location": [-1.0533761, 36.631462]
    }, {
      "shop_id": "1cd011b5-e393-41b6-946c-ca6e230e5590",
      "location": [-1.0534449, 36.631622]
    }, {
      "shop_id": "9c233726-63af-44ac-aa6b-5cc53f35632e",
      "location": [-1.0534867, 36.631664]
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
      "shop_id": "eadd0436-0c54-4c1e-96e8-4248ebb86203",
      "location": [-1.0538125, 36.63138]
    }, {
      "shop_id": "fa40d7a3-8e7c-4ad6-a8fd-b37fb42e36c3",
      "location": [-1.05241060256958, 36.6329345703125]
    }, {
      "shop_id": "9e2ffa5e-c7ba-49eb-a043-56013a2d363f",
      "location": [-1.0525948, 36.633003]
    }, {
      "shop_id": "ee4c45d5-b6ee-451d-a921-e9efd8d83287",
      "location": [-1.0525897, 36.633106]
    }, {
      "shop_id": "29630f6f-ed68-45f3-ad3a-979d3a439210",
      "location": [-1.0414898, 36.638752]
    }, {
      "shop_id": "49d72728-d917-4b19-b8ef-b4c306c092c5",
      "location": [-1.0530978, 36.632454]
    }, {
      "shop_id": "06f1ed2a-aac6-45ed-9076-1e0353000697",
      "location": [-1.0541961, 36.63254]
    }, {
      "shop_id": "4270c6ce-4e05-4418-bce6-79243d2889c0",
      "location": [-1.0539646, 36.63262]
    }, {
      "shop_id": "c2aeb85b-090e-4027-9a39-8882ffc56571",
      "location": [-1.0549046, 36.633053]
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
      "shop_id": "f1a4c129-ba23-4de5-9918-b26fc5f5290a",
      "location": [-1.0106819, 36.625996]
    }, {
      "shop_id": "9c95d471-18af-484b-9c26-d8c53d18930f",
      "location": [-0.9816589, 36.629265]
    }, {
      "shop_id": "75f04900-35b5-4596-87eb-6c7304b46910",
      "location": [-0.9823915, 36.629635]
    }, {
      "shop_id": "3139159a-876c-4635-8439-57ce6cca668c",
      "location": [-0.9824763, 36.629543]
    }, {
      "shop_id": "3b260af1-ed40-4264-9c56-12ad61bf6c6f",
      "location": [-0.9824975, 36.6295]
    }, {
      "shop_id": "4d88917b-a71c-4790-af2e-837826696731",
      "location": [-0.9825449, 36.62953]
    }, {
      "shop_id": "a6f90633-71a2-4ec9-98b5-e1c67ffd381e",
      "location": [-0.9823156, 36.629917]
    }, {
      "shop_id": "fde6083e-a7ee-4c75-8e83-890983af7d93",
      "location": [-0.9812152, 36.630627]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kangemi",
    "route_id": "27f92fa7-3972-425b-a619-90b1622f8eb8",
    "matrix_info": {
      "DistanceMatrixAPI requests": 787,
      "cache_hit": "76%"
    },
    "distance": "41.3km",
    "path": "`z|Fedx_Fq`Ep~KpAlAOd@RrBmD|HcHtAY_@tBlCsItLnUvNdDnEPNoOu@hAlIcW|\\c@oDnd@wQ}AdKp@NaB~Dv@xBSr@IDp@BJPtAj@mA`JdCqFb@|AnCv@|G_GmBB_A_AFMm@}@vDtHpC~WbFzVgCdL}O{AcQhLgMhIiDiO[gVFmQtImPb@cCrGlI_BmJDkA_DGSqBz@sIs\\tUi{@k}@i@FA?oDwFdlH_kM",
    "shops": [{
      "shop_id": "8d24af73-376a-4109-be5e-ecb359955819",
      "location": [-1.2687153, 36.762505]
    }, {
      "shop_id": "f1884d0d-091f-4a9b-8053-483f2329e65e",
      "location": [-1.269127, 36.76211]
    }, {
      "shop_id": "83c7826f-d62b-4e5b-9e6a-d1819d4da67e",
      "location": [-1.269048, 36.76192]
    }, {
      "shop_id": "ce4cf18d-5222-4ace-a5a6-6b17fa8dfe7a",
      "location": [-1.2691513, 36.761337]
    }, {
      "shop_id": "dc7e754d-43c4-4b7c-b19c-7ff7ec1da56f",
      "location": [-1.2682807, 36.759747]
    }, {
      "shop_id": "db22c34d-63fa-40ca-9b41-18ad188bb943",
      "location": [-1.2668155, 36.75932]
    }, {
      "shop_id": "cdd98d02-2e25-459f-b046-606b458be392",
      "location": [-1.266689, 36.759476]
    }, {
      "shop_id": "15b15ad8-a3f6-45ae-83aa-6e2471d63d3c",
      "location": [-1.2672842, 36.75877]
    }, {
      "shop_id": "c61ba6df-b8cb-4bf8-8a55-f285eba7c681",
      "location": [-1.2655822, 36.75658]
    }, {
      "shop_id": "439ec0fc-93d6-4357-93ca-1155cc9e0143",
      "location": [-1.2691846, 36.754063]
    }, {
      "shop_id": "145e73d5-98a4-4b4a-9aea-d1b6638f051a",
      "location": [-1.2700144, 36.753017]
    }, {
      "shop_id": "09471603-90ec-4d56-be7e-070c5fc4112f",
      "location": [-1.2700979, 36.752945]
    }, {
      "shop_id": "838f2ab1-a55d-4999-b65c-f950bd601618",
      "location": [-1.2674594, 36.75321]
    }, {
      "shop_id": "adb9feaf-e979-4845-b39a-19a66c7f36dc",
      "location": [-1.2678325, 36.75154]
    }, {
      "shop_id": "3eab821d-a2c4-4224-8af2-5f22dafeb2ab",
      "location": [-1.2639692, 36.746754]
    }, {
      "shop_id": "da94f45f-6d09-4b59-a1b6-478b4eac9085",
      "location": [-1.2637857, 36.74763]
    }, {
      "shop_id": "0b0d7827-a00e-421e-9fa3-7c86c869f6bc",
      "location": [-1.2697933, 36.750626]
    }, {
      "shop_id": "00735f8f-2890-4684-9d62-f0eb7b11f59d",
      "location": [-1.2693183, 36.74868]
    }, {
      "shop_id": "158040e8-984b-4c3e-911f-7dc212a60c87",
      "location": [-1.2695748, 36.748604]
    }, {
      "shop_id": "b797cbf0-ea1d-4902-b1f2-810b5472189f",
      "location": [-1.2690777, 36.747635]
    }, {
      "shop_id": "67f461bb-feb2-4a9b-bf3a-ba8771ae5e0b",
      "location": [-1.2693611, 36.74703]
    }, {
      "shop_id": "c8497b40-ea53-4a7f-93d6-f58f5288c0ce",
      "location": [-1.2692574, 36.74677]
    }, {
      "shop_id": "affd5431-bce1-4d08-bd6c-feb6c67641b4",
      "location": [-1.2692078, 36.74674]
    }, {
      "shop_id": "4c77beb6-edce-46bd-8377-23d473caf482",
      "location": [-1.269456, 36.746723]
    }, {
      "shop_id": "d7185b24-5eb3-4eaa-a9cf-7eda9e3608a7",
      "location": [-1.2695233, 36.746628]
    }, {
      "shop_id": "18439e5b-28f5-42af-9478-db97940c8472",
      "location": [-1.2699465, 36.746414]
    }, {
      "shop_id": "e392d5ac-f07e-412b-a7ec-7d5ee6032ebc",
      "location": [-1.2695606, 36.744644]
    }, {
      "shop_id": "df780432-983c-4ed4-80fd-0b440d810dcd",
      "location": [-1.2702346, 36.74585]
    }, {
      "shop_id": "93d1c2fa-5f68-49b0-a2a5-f7b81662f795",
      "location": [-1.270413, 36.745384]
    }, {
      "shop_id": "51cea7b3-a45b-4d8e-9826-9303afdd2968",
      "location": [-1.2711315, 36.7451]
    }, {
      "shop_id": "a52190da-e8df-4f1e-8b6a-fba28b47fb04",
      "location": [-1.2725563, 36.746376]
    }, {
      "shop_id": "c3059ee6-ba70-4c83-9bc1-d65e406fbacf",
      "location": [-1.2720068, 36.746365]
    }, {
      "shop_id": "3d7574ed-db6d-471c-a5dc-3c9d343f529d",
      "location": [-1.2716854, 36.746677]
    }, {
      "shop_id": "e9661d88-78a3-4932-8d4f-aed632b339a9",
      "location": [-1.2717344, 36.746746]
    }, {
      "shop_id": "a349bb8d-b74f-472f-abc7-95e65d10239a",
      "location": [-1.2715045, 36.747055]
    }, {
      "shop_id": "a5405232-bff0-4f1c-a93b-124430b69c9f",
      "location": [-1.2724195, 36.745506]
    }, {
      "shop_id": "adfe9e33-6685-4808-9f84-861b3e71b84d",
      "location": [-1.2731514, 36.741512]
    }, {
      "shop_id": "1b5e5ad7-03b5-4590-93bc-a458a33d0c37",
      "location": [-1.2742937, 36.73769]
    }, {
      "shop_id": "47dd28bf-7b96-4e3f-8154-9c9a4f786f00",
      "location": [-1.2736115, 36.73558]
    }, {
      "shop_id": "90944564-d7a9-49ab-a84a-82b925a4f0bc",
      "location": [-1.2709031, 36.73604]
    }, {
      "shop_id": "331607b9-f28c-4a3f-ac2b-0a15665afebe",
      "location": [-1.2679951, 36.733906]
    }, {
      "shop_id": "5c1cac54-42c0-4563-aa97-60f8968f6ea1",
      "location": [-1.2657193, 36.732258]
    }, {
      "shop_id": "305e1122-5527-41fc-b573-981f97c95f4a",
      "location": [-1.2648686, 36.734867]
    }, {
      "shop_id": "45dddc52-758c-4aef-889d-00e440f55fa9",
      "location": [-1.2647264, 36.73859]
    }, {
      "shop_id": "6bd8510b-d340-4e21-8d85-d7f458f33dc0",
      "location": [-1.264772, 36.74154]
    }, {
      "shop_id": "90bc78ce-aee7-4339-a092-ef9904f1a29f",
      "location": [-1.2664808, 36.74433]
    }, {
      "shop_id": "eaf7e743-667a-414f-af68-893693b86ed3",
      "location": [-1.2666574, 36.744987]
    }, {
      "shop_id": "938e51c6-db5f-49ba-a232-57f9de89c532",
      "location": [-1.2680417, 36.74332]
    }, {
      "shop_id": "83c123a6-2b0b-428a-9f29-f0bf9a924f71",
      "location": [-1.2675585, 36.745155]
    }, {
      "shop_id": "c0a80338-827b-4d20-8992-af8a0cccb6a1",
      "location": [-1.2675853, 36.74553]
    }, {
      "shop_id": "d6c77dc2-6321-41fd-ae19-b1cb2575d9e6",
      "location": [-1.26679, 36.74557]
    }, {
      "shop_id": "3ee12063-92bf-4beb-8c23-1e556e973f3b",
      "location": [-1.2666934, 36.746136]
    }, {
      "shop_id": "da2507bf-dfaf-4f70-a68b-9a35dbb54282",
      "location": [-1.2669939, 36.747837]
    }, {
      "shop_id": "61043305-3d10-45d1-a039-c8a8031840cb",
      "location": [-1.2622527, 36.744213]
    }, {
      "shop_id": "25fd30b7-fc1d-4387-8c21-7aa69a541960",
      "location": [-1.2525994, 36.754192]
    }, {
      "shop_id": "709f15e5-5740-43f6-a776-7bf35dc266c8",
      "location": [-1.2523904, 36.754154]
    }, {
      "shop_id": "cb2f6f7f-97e0-4135-89ee-f5168f9bd0cf",
      "location": [-1.2523808, 36.754147]
    }, {
      "shop_id": "11ecaa74-972c-48ec-9120-21cd66224b1f",
      "location": [-1.2514997, 36.75539]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Machakos 1",
    "route_id": "5e6687f8-f29a-4f19-b7dc-d946540b2706",
    "matrix_info": {
      "DistanceMatrixAPI requests": 177,
      "cache_hit": "90%"
    },
    "distance": "102.57km",
    "path": "n{hH_ilbFPq\\iUqJx@qpL`@GB`@?cAKu@KKoeAerDicIwlLm@DUcAhA}ALp@~@sEvPeN}A_BmCtDc}HeyW`rSxeh@b@pA`h@toB~tAtkBn~C}tBbCx@aw@xy@_bAfbA{U~dB}rBtpD?@Fo@]UkAEAGC?@v@QDb@oDGEiC`EkDPoDtAjDvLbj@nu@",
    "shops": [{
      "shop_id": "07751279-5788-4fce-a96a-06d07b898977",
      "location": [-1.5252942, 37.264572]
    }, {
      "shop_id": "034ffc57-2d61-4444-864b-941b98d53a3b",
      "location": [-1.5217181, 37.26642]
    }, {
      "shop_id": "1aed69cf-8849-4744-805e-53fc5e4f9cf0",
      "location": [-1.5220093, 37.335793]
    }, {
      "shop_id": "d45e9e87-99f1-4043-a3e6-acc40c226f69",
      "location": [-1.5221771, 37.33583]
    }, {
      "shop_id": "869b0ba6-617f-41b5-b06e-c6665f4d280c",
      "location": [-1.52220225334167, 37.3356628417969]
    }, {
      "shop_id": "9c9d656a-0df8-474e-bc2b-e6c931a3b263",
      "location": [-1.5221981, 37.336002]
    }, {
      "shop_id": "fee4fb37-1d8d-431c-804b-46c7a3bc49b0",
      "location": [-1.52214276790619, 37.3362655639648]
    }, {
      "shop_id": "8a28a9ee-2d90-43c5-aa70-c981b9cc7349",
      "location": [-1.5220762, 37.336327]
    }, {
      "shop_id": "3c6556ba-28ec-461d-9f1b-1dd82094bd8a",
      "location": [-1.5107981, 37.365]
    }, {
      "shop_id": "59a29098-f0c4-4b48-8007-0257f4bac8f3",
      "location": [-1.4589083, 37.43376]
    }, {
      "shop_id": "32b0cf79-039e-4c4b-8259-6c39cd06da9d",
      "location": [-1.4586806, 37.433727]
    }, {
      "shop_id": "b28084dd-a3f7-4a31-aea0-20470cba4ad9",
      "location": [-1.4585739, 37.43407]
    }, {
      "shop_id": "1d867eb1-874e-497b-9dd8-da4ddd21388f",
      "location": [-1.4589357, 37.434544]
    }, {
      "shop_id": "6dc53e95-4e39-42f0-b4ec-7b527368f24e",
      "location": [-1.45901381969452, 37.4342880249023]
    }, {
      "shop_id": "f96ec0e1-720c-493e-ad2b-c98d9259ee14",
      "location": [-1.4593304, 37.43535]
    }, {
      "shop_id": "c1b1923f-455d-41a9-b078-8c7d1170c707",
      "location": [-1.4621675, 37.437782]
    }, {
      "shop_id": "e791de8c-a856-4d87-9afb-8b634fc25b69",
      "location": [-1.4617021, 37.43826]
    }, {
      "shop_id": "ca5fe456-75e1-43d3-bf2e-d0d37439081d",
      "location": [-1.460986, 37.437347]
    }, {
      "shop_id": "bd4e9e4c-dcdd-4b70-ab4a-cdf109c55861",
      "location": [-1.410091, 37.564423]
    }, {
      "shop_id": "dc9ca9bb-d550-48a2-9ef7-5d3fc2042eec",
      "location": [-1.515539, 37.353405]
    }, {
      "shop_id": "c4f75dee-92ca-4284-86df-6f582e4e2f8d",
      "location": [-1.515724, 37.353]
    }, {
      "shop_id": "5205dd61-0c74-41c9-bf37-dd3e5e2ebb72",
      "location": [-1.5222898, 37.33497]
    }, {
      "shop_id": "f3752b22-f4bb-4438-a6dd-482d86740f5d",
      "location": [-1.5360484, 37.317577]
    }, {
      "shop_id": "8399c386-b33b-4b07-b819-ad3327da5a86",
      "location": [-1.5615675, 37.336452]
    }, {
      "shop_id": "ef3b5f0e-dc8d-4bad-94aa-1f16d5eabb28",
      "location": [-1.5622253, 37.336163]
    }, {
      "shop_id": "fb7425a0-7df7-41c6-9579-dd9d499b6ad0",
      "location": [-1.553261, 37.326748]
    }, {
      "shop_id": "59ab4008-8169-4db4-adf7-7f2ef9ae87a1",
      "location": [-1.5425382, 37.31599]
    }, {
      "shop_id": "0c5c5b44-e177-4999-8a42-e08598da09cf",
      "location": [-1.5388821, 37.29967]
    }, {
      "shop_id": "b6de3dea-8117-4d65-9793-8c889df9731b",
      "location": [-1.520332, 37.27124]
    }, {
      "shop_id": "1848b656-9b90-483e-9220-e81d068f6484",
      "location": [-1.5203345, 37.271233]
    }, {
      "shop_id": "f25e4ad9-8bc4-4192-ba0a-93b52a9b1464",
      "location": [-1.520369, 37.271465]
    }, {
      "shop_id": "e38de074-3346-480b-9f09-9e401678687b",
      "location": [-1.520221, 37.271584]
    }, {
      "shop_id": "2659b8f9-5f5b-4ff5-bbd9-af53c95eb384",
      "location": [-1.5198374, 37.27161]
    }, {
      "shop_id": "883f6238-cf7b-4cf4-bea3-0f617b655c10",
      "location": [-1.5198293, 37.271645]
    }, {
      "shop_id": "635f5ae6-a60f-4b4d-b979-6cbee9c2cbe5",
      "location": [-1.5198092, 37.271652]
    }, {
      "shop_id": "b41d7180-56dc-4d11-91f6-a53a1a6739e4",
      "location": [-1.5198153, 37.271366]
    }, {
      "shop_id": "bd73c91a-aa18-416e-8580-37e772b4152c",
      "location": [-1.51973032951355, 37.2713394165039]
    }, {
      "shop_id": "3bd9c2f9-16e5-4a5b-a908-40876369b7d1",
      "location": [-1.519906, 37.272217]
    }, {
      "shop_id": "11c1ce51-f294-4357-8470-90d818c54f0b",
      "location": [-1.5198722, 37.272247]
    }, {
      "shop_id": "0c8f23a0-cad6-42e8-a4f1-6f5299274ce0",
      "location": [-1.5191802, 37.27128]
    }, {
      "shop_id": "57d4f76e-a9ca-4b7a-bd45-a404ba32b9b0",
      "location": [-1.5183249, 37.271187]
    }, {
      "shop_id": "0ab31447-da7b-4d73-9f96-84425a5845ac",
      "location": [-1.51744, 37.270756]
    }, {
      "shop_id": "58c6e9ee-6c6b-402a-9871-1e1a3d7b87af",
      "location": [-1.5183027, 37.26856]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Langata",
    "route_id": "72408a53-d85d-4ff3-8a61-9aebf38a1571",
    "matrix_info": {
      "DistanceMatrixAPI requests": 160,
      "cache_hit": "93%"
    },
    "distance": "20.23km",
    "path": "tz|Fmdx_FdlD~yFEGMFBBOLKACHMDQAEBCHFD`AScA{BUFAEs@cAGSO@O[_Ay@yTdHdYbEeAy@AGgPos@]Dr@jA_EgABwEHILHDmGKJ?hBCFGn@yJvYLec@AA{@kIGIEMGIGWBAzBn@vCsAx@OVDvr@go@aAyDq~DysB",
    "shops": [{
      "shop_id": "744360a5-4c31-4cd3-84df-927341f98296",
      "location": [-1.3274968, 36.788868]
    }, {
      "shop_id": "af5441db-814f-4769-b4b7-e8a47a857497",
      "location": [-1.32746541500092, 36.7889137268066]
    }, {
      "shop_id": "42ac58b4-44ae-43e6-a1e8-71ff0ca846c1",
      "location": [-1.32740294933319, 36.7888717651367]
    }, {
      "shop_id": "a01ff5f3-4a35-41ae-a32c-c0aba06c585d",
      "location": [-1.32742357254028, 36.7888450622559]
    }, {
      "shop_id": "e8a83c37-1249-4e73-b33b-b6f8e12c2e05",
      "location": [-1.32733535766602, 36.7887763977051]
    }, {
      "shop_id": "640ea347-571e-4e23-958a-9ec9dbf15bf3",
      "location": [-1.3272785, 36.78879]
    }, {
      "shop_id": "4246a92c-0ba0-4926-b1b4-2831061103a4",
      "location": [-1.32725715637207, 36.7887420654297]
    }, {
      "shop_id": "514027a9-351a-4efb-bdb1-dbdd89c0c021",
      "location": [-1.3271891, 36.788708]
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
      "shop_id": "fa70e489-baf4-4583-b4f1-9187c44a75e4",
      "location": [-1.3270948, 36.788616]
    }, {
      "shop_id": "a121e4ec-fe56-4928-8e2f-cfcbb7bafe87",
      "location": [-1.3274237, 36.788723]
    }, {
      "shop_id": "1bab16c9-3e78-4818-b4d1-b002a27be8c3",
      "location": [-1.3270764, 36.789337]
    }, {
      "shop_id": "aefaaaef-1d99-4b81-8593-b3c23d396d30",
      "location": [-1.32696545124054, 36.7893028259277]
    }, {
      "shop_id": "c7511c40-911c-4e60-9db3-c639a95e8b51",
      "location": [-1.3269557, 36.789333]
    }, {
      "shop_id": "11895bc9-b722-4736-aedb-a986fece01e4",
      "location": [-1.326702, 36.789673]
    }, {
      "shop_id": "389df29d-b71a-47fa-b9be-26a1260b7fc4",
      "location": [-1.32666122913361, 36.7897682189941]
    }, {
      "shop_id": "b83a8587-e386-44ff-82c5-35d5cf16e7ee",
      "location": [-1.3265785, 36.789764]
    }, {
      "shop_id": "dfaffd03-e203-40dc-9ea3-0706e00a4be7",
      "location": [-1.3264983, 36.7899]
    }, {
      "shop_id": "e9625ddd-1f68-480c-be47-5da3917827b6",
      "location": [-1.3261819, 36.790195]
    }, {
      "shop_id": "bd397005-19ca-4eea-bab2-3a4814acb0b8",
      "location": [-1.3226857, 36.78872]
    }, {
      "shop_id": "45c95f18-fa89-4961-90b4-06629403527a",
      "location": [-1.3268777, 36.787735]
    }, {
      "shop_id": "4a021032-6a18-4f2b-91c4-b17ef3f76547",
      "location": [-1.3265331, 36.788033]
    }, {
      "shop_id": "7cc224a3-d59a-4d60-9d6b-9ad80342aace",
      "location": [-1.3265182, 36.788067]
    }, {
      "shop_id": "247a08f2-6833-47c8-afd0-d45a25b8d0f4",
      "location": [-1.32375824451447, 36.7964744567871]
    }, {
      "shop_id": "aae7786e-1aa1-4487-bcf9-42719a4a285f",
      "location": [-1.3236051, 36.796444]
    }, {
      "shop_id": "9f26af6e-7ad8-49fb-bea2-70b2ad2da659",
      "location": [-1.3238738, 36.79606]
    }, {
      "shop_id": "bf5a50b0-ff55-4c17-9d0c-64579bdc3a3b",
      "location": [-1.3229094, 36.796417]
    }, {
      "shop_id": "3c096f7d-2e6b-402b-904b-a765a129e74e",
      "location": [-1.322934, 36.797504]
    }, {
      "shop_id": "049a1e09-ed1b-49e8-983a-d2270279d37f",
      "location": [-1.3229803, 36.79755]
    }, {
      "shop_id": "bac8cbfd-45b5-4964-82a8-f7a9f57dced7",
      "location": [-1.3230504, 36.797504]
    }, {
      "shop_id": "1ec22c61-4c28-4b09-909c-681e2c53364c",
      "location": [-1.32308256626129, 36.7988471984863]
    }, {
      "shop_id": "ae119d78-e3e4-4886-9bd9-cbf70fdda65b",
      "location": [-1.32302415370941, 36.7987937927246]
    }, {
      "shop_id": "a97cd0bf-f3ed-491d-8891-89bfd6cc3e71",
      "location": [-1.3230169, 36.798256]
    }, {
      "shop_id": "50bc6cf7-1fbf-478f-bf75-b361e337fb27",
      "location": [-1.3229986, 36.798218]
    }, {
      "shop_id": "e469396f-1007-4055-9727-93ade9605c1f",
      "location": [-1.3229626, 36.797985]
    }, {
      "shop_id": "0cae24dc-760c-4e18-be7c-f415400d56ca",
      "location": [-1.3210658, 36.793697]
    }, {
      "shop_id": "1d7d307b-150c-43d4-8411-ec38ecda25c4",
      "location": [-1.3211367, 36.799488]
    }, {
      "shop_id": "7396bc9c-7ff6-484f-a45c-6c030f488722",
      "location": [-1.3211251, 36.7995]
    }, {
      "shop_id": "793c5688-e7e2-4137-ad76-ea3aebd7dbca",
      "location": [-1.3208303, 36.80116]
    }, {
      "shop_id": "b3954257-d442-4e1c-adfb-cbf6a38beb2d",
      "location": [-1.3207856, 36.801212]
    }, {
      "shop_id": "df16eb8f-e9d8-40fd-9f39-4e0a25876325",
      "location": [-1.32076, 36.80128]
    }, {
      "shop_id": "a09a37ed-43f0-4ebf-9585-f0516bde84ff",
      "location": [-1.32071554660797, 36.801326751709]
    }, {
      "shop_id": "73541150-6141-4022-bde6-bed195e8f749",
      "location": [-1.32068085670471, 36.8014450073242]
    }, {
      "shop_id": "e6a924b3-ce25-4cdc-9151-fa393f920aae",
      "location": [-1.32070434093475, 36.8014640808105]
    }, {
      "shop_id": "480bbcb2-a6b4-4123-9860-d1251ecc4929",
      "location": [-1.321317, 36.801224]
    }, {
      "shop_id": "5f2c9351-6a76-4565-9879-640ef9fbf212",
      "location": [-1.3220779, 36.801643]
    }, {
      "shop_id": "0377dcc9-e0ac-477f-a773-625a676287a8",
      "location": [-1.3223726, 36.801716]
    }, {
      "shop_id": "d2c7610c-4b1c-4469-9c87-834382213477",
      "location": [-1.32249295711517, 36.8016929626465]
    }, {
      "shop_id": "54fa755b-2df3-400a-8849-2b40f603074f",
      "location": [-1.3307664, 36.80941]
    }, {
      "shop_id": "99b9381a-c895-4772-845a-03f4648d8c59",
      "location": [-1.3304423, 36.81034]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Jogoo Road 1",
    "route_id": "f6c0d941-bf97-405a-bf6b-71256c335dcb",
    "matrix_info": {
      "DistanceMatrixAPI requests": 1449,
      "cache_hit": "66%"
    },
    "distance": "46.36km",
    "path": "dsfG_se`FuqGfnAoAdELYFOB]m@u@W@dDlBXC`Az@|Ax@[~GhCM{DjTTA?j@YTtHmW_@yAbF|Qb@fHBFDn@XnDvAbIaJxl@ySxAfe@pX_`Bxr@uEbn@pCfJyGKw@`@hFhCbVlHfBr@RBlC}AeHnDwFtCgBmF}BaDwA[]f@GZ{D}@uBZgB|SfUccA^YzKeXACDs@cA{Wj@eLuAkNwA_M|AbJgCpBuB`UWF_ExBhCzBxHj@E^beAbRj{FcaG",
    "shops": [{
      "shop_id": "330f9b6a-19eb-40bb-9cc8-c4a755788933",
      "location": [-1.3058412, 36.88524]
    }, {
      "shop_id": "457ed4ba-b826-4aec-805b-cf5fe4493c6a",
      "location": [-1.3054422, 36.884247]
    }, {
      "shop_id": "bdc05b4a-3d17-4d21-973a-87adcf493c3b",
      "location": [-1.3055083, 36.884377]
    }, {
      "shop_id": "74be0249-12ec-4ac2-a87c-3854cc3ceb81",
      "location": [-1.3055542, 36.884464]
    }, {
      "shop_id": "5a16cd3d-1b13-4dbc-814c-8ff810b4bba6",
      "location": [-1.305572, 36.88461]
    }, {
      "shop_id": "de67988a-8f94-455c-8970-9cb8a0cc8058",
      "location": [-1.3053362, 36.884876]
    }, {
      "shop_id": "3c823396-1e45-48b3-95f2-550073acbdfc",
      "location": [-1.3052202, 36.88487]
    }, {
      "shop_id": "4a7d81b5-0011-404e-92a2-0dbfbfd88ddc",
      "location": [-1.3060538, 36.884323]
    }, {
      "shop_id": "14940446-ab16-489c-867b-7963c24933a0",
      "location": [-1.3061829, 36.884335]
    }, {
      "shop_id": "2309090f-01b7-4014-9106-8820606b831a",
      "location": [-1.3065094, 36.884037]
    }, {
      "shop_id": "30ab3580-8cd5-45e6-8dff-4323e7af8866",
      "location": [-1.3069845, 36.883747]
    }, {
      "shop_id": "831c982b-26ed-4ff9-93c3-493699018e11",
      "location": [-1.3068415, 36.882313]
    }, {
      "shop_id": "5721b48c-05b0-4586-a93f-671cb558bd65",
      "location": [-1.3075254, 36.882378]
    }, {
      "shop_id": "626a46e5-c5dd-4c8c-b312-5019f90f8029",
      "location": [-1.3065892, 36.87896]
    }, {
      "shop_id": "64dd0505-d358-47bb-8efd-09825c793188",
      "location": [-1.3066975, 36.87897]
    }, {
      "shop_id": "1f3e7aad-e614-4363-b948-2941602514ab",
      "location": [-1.3067033, 36.87875]
    }, {
      "shop_id": "e41bb4c1-e661-4b4c-b334-3fc4112fd1e2",
      "location": [-1.3065703, 36.87864]
    }, {
      "shop_id": "f98f2084-4d17-4179-8597-0984b4a647f3",
      "location": [-1.3081175, 36.882545]
    }, {
      "shop_id": "33167905-28e7-402f-9981-0786cb263ee0",
      "location": [-1.3079574, 36.883]
    }, {
      "shop_id": "cc815b49-8d66-4027-b96a-c5060dc678a5",
      "location": [-1.3090963, 36.87997]
    }, {
      "shop_id": "26a916d3-6483-4dfe-ad62-7cf18461b450",
      "location": [-1.3092841, 36.87849]
    }, {
      "shop_id": "6b4b2d3d-b8df-4a27-ab9c-248fe4aec63a",
      "location": [-1.309295, 36.878452]
    }, {
      "shop_id": "79f3103b-fd99-4c66-a7cd-1ba639186a52",
      "location": [-1.3093313, 36.878212]
    }, {
      "shop_id": "423dd2ca-9830-4ed8-b76b-08925dd56ad6",
      "location": [-1.3094556, 36.87733]
    }, {
      "shop_id": "d3b7282b-72df-4392-bbf7-a838e9f8a00e",
      "location": [-1.3098993, 36.875713]
    }, {
      "shop_id": "38f9ee25-37b5-42e0-b9b6-c945b1d9aa75",
      "location": [-1.3081259, 36.868378]
    }, {
      "shop_id": "565eeb19-6ab2-4419-b2bf-ea903ba0a40e",
      "location": [-1.304796, 36.867928]
    }, {
      "shop_id": "3518b5b7-8608-4124-81ac-406d478c03f5",
      "location": [-1.3109198, 36.86384]
    }, {
      "shop_id": "e106c011-dd60-4ffd-a6da-f66e81a0940d",
      "location": [-1.2954, 36.855553]
    }, {
      "shop_id": "e61f5952-3a08-4874-91ac-3d79d7b8d092",
      "location": [-1.2943267, 36.848015]
    }, {
      "shop_id": "5074d050-275d-4439-80a2-db096e6d01d8",
      "location": [-1.2950641, 36.846214]
    }, {
      "shop_id": "e4c34888-fba0-4ef5-abf7-8d773834994f",
      "location": [-1.2936465, 36.846268]
    }, {
      "shop_id": "39fe4314-6548-4f7b-9621-64abaa52f0a5",
      "location": [-1.2933705, 36.8461]
    }, {
      "shop_id": "f10a9a04-67fb-4048-928c-c6e99d78eb0a",
      "location": [-1.2945384, 36.845413]
    }, {
      "shop_id": "99ae6df3-43e8-4dda-8ffd-7591628c0693",
      "location": [-1.2982374, 36.843895]
    }, {
      "shop_id": "dc72678a-a88f-4f39-a416-475a6a371d9c",
      "location": [-1.29875874519348, 36.8436393737793]
    }, {
      "shop_id": "034f1888-a0f6-4df6-82ea-2d8053e11997",
      "location": [-1.2988639, 36.84362]
    }, {
      "shop_id": "9f5e8c14-0b5b-46ee-9469-fb163e15426f",
      "location": [-1.2995661, 36.844093]
    }, {
      "shop_id": "afb98d3f-3b8d-443c-961c-88e73ed13b0c",
      "location": [-1.298100233078, 36.8432083129883]
    }, {
      "shop_id": "8bf14521-ca37-421a-b71f-894af06fb4f8",
      "location": [-1.2968628, 36.84246]
    }, {
      "shop_id": "b4a5aea9-d0f9-443d-93dc-7a1bb8884d3f",
      "location": [-1.2963443, 36.84365]
    }, {
      "shop_id": "1bfd6ea6-21bf-4222-a5ec-89915825c12f",
      "location": [-1.2957067, 36.844463]
    }, {
      "shop_id": "c1cf6714-2c46-4284-bd74-a55af2d1c96f",
      "location": [-1.2952735, 36.844604]
    }, {
      "shop_id": "62c689b8-dbc5-493d-8aba-95810dbd82ca",
      "location": [-1.29511594772339, 36.8443984985352]
    }, {
      "shop_id": "76365d49-7e55-40ed-9633-13b312c8a6c8",
      "location": [-1.2950795, 36.84426]
    }, {
      "shop_id": "b44bc91f-bf1f-4fc3-afc7-cedf6051611c",
      "location": [-1.29414033889771, 36.8445701599121]
    }, {
      "shop_id": "8819e459-6c63-42b2-816e-dd300d22a432",
      "location": [-1.2935529, 36.844425]
    }, {
      "shop_id": "7343f3f3-f60f-4d9a-86ae-8660e2d7ccb7",
      "location": [-1.2930316, 36.841084]
    }, {
      "shop_id": "b743c072-05d1-4034-b4dd-71f0d6e1777b",
      "location": [-1.2965931, 36.85198]
    }, {
      "shop_id": "0a0629fe-bd74-48fe-aa20-363902e239e6",
      "location": [-1.2967459, 36.852108]
    }, {
      "shop_id": "8e939f8b-8cea-41c9-9ae1-7d3956d00482",
      "location": [-1.2988099, 36.85614]
    }, {
      "shop_id": "02c82a33-7752-453f-881e-64bc3366162c",
      "location": [-1.2988044, 36.85616]
    }, {
      "shop_id": "b7d42c62-26b2-49fc-a563-a925c7d0ebb7",
      "location": [-1.2988327, 36.856422]
    }, {
      "shop_id": "0822f14c-ae00-4a16-877b-00f1cfa0273f",
      "location": [-1.29848730564117, 36.8604011535645]
    }, {
      "shop_id": "ce9b5a0c-1591-4f0e-a090-6464bf64310a",
      "location": [-1.2987124, 36.862507]
    }, {
      "shop_id": "4ee230ba-f31f-45b5-ac6f-27a4d3f6228c",
      "location": [-1.2982833, 36.86497]
    }, {
      "shop_id": "9c1e1fac-7f93-4a79-90d8-e94e4786064e",
      "location": [-1.2978361, 36.867207]
    }, {
      "shop_id": "edf99e64-7110-48bf-85e9-71b2a1452f30",
      "location": [-1.2983143, 36.865425]
    }, {
      "shop_id": "aedd097e-2148-499e-b10e-da59a10c0019",
      "location": [-1.2976272, 36.86486]
    }, {
      "shop_id": "af41435d-29b0-41d5-9c6f-d09920cde1ad",
      "location": [-1.2970376, 36.861332]
    }, {
      "shop_id": "c4c51740-b829-4f9d-858c-f5571b369e8f",
      "location": [-1.2969193, 36.86129]
    }, {
      "shop_id": "fca8e688-2e31-413c-8c7c-f8083dafdda3",
      "location": [-1.2959623, 36.860683]
    }, {
      "shop_id": "81bad125-98fa-4eb2-9890-1978d716c86f",
      "location": [-1.2966528, 36.86006]
    }, {
      "shop_id": "5f38ea04-4c29-484e-8c21-9db0d1266fb4",
      "location": [-1.2982239, 36.859837]
    }, {
      "shop_id": "5fca26dc-4efc-407d-8ad9-895d365e1189",
      "location": [-1.2981883, 36.859676]
    }, {
      "shop_id": "c7f93bff-1785-430b-852f-5852b5f0d975",
      "location": [-1.309407, 36.85662]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ngong Road/CBD Route - Key Accounts",
    "route_id": "ec2c8504-c3ad-4d54-bdec-931fd8cb05d2",
    "matrix_info": {
      "DistanceMatrixAPI requests": 0,
      "cache_hit": "100%"
    },
    "distance": "26.78km",
    "path": "dsfG_se`FwrI`yMvrIayM",
    "shops": [{
      "shop_id": "ad5f2ece-16eb-47ef-abfe-2e03650c26c6",
      "location": [-1.295431, 36.82207]
    }],
    "flagged_shops": [{
      "shop_id": "7837c6db-4d12-4552-a332-7dc0c1a14350",
      "location": [0.0, 0.0]
    }]
  }, {
    "status": "success",
    "route_name": "Kiambui",
    "route_id": "89d6b8a5-f194-4890-a69f-5046aa7c1016",
    "matrix_info": {
      "DistanceMatrixAPI requests": 743,
      "cache_hit": "79%"
    },
    "distance": "40.26km",
    "path": "dsfG_se`F_lKjzGoBACHxCgDLJa@ArAWt@D@tERsAl@WpAUUiB_@SKISuD`@BkHrBeHmY?{@I[C]y@qBoC_MKFyFiPxCuAyGqLFPXuAj@dGdJxg@b@nD@~Bl@EAS{D_@JTbEnGd@rDDL~@Z_Al@oCJ@NzDzDt@lDkAjFl@CeYzHBB_Cn@hAlDxB|DuA^fLgHD@P`CGdAs@iKb@SpbLcdH",
    "shops": [{
      "shop_id": "a1d9bd14-6c25-49b1-9610-0c26199f6110",
      "location": [-1.2862651, 36.852577]
    }, {
      "shop_id": "9de802ad-d8b6-4f1c-8c82-1374a505086e",
      "location": [-1.2857085, 36.85259]
    }, {
      "shop_id": "a43b1731-73b1-41b6-aee5-a935795954bd",
      "location": [-1.285685, 36.85254]
    }, {
      "shop_id": "e311529c-1bdb-4a2f-a15a-9dfc877cc434",
      "location": [-1.2864603, 36.85338]
    }, {
      "shop_id": "1224bef7-1713-47a1-9742-d71994cc2ab2",
      "location": [-1.2865348, 36.853317]
    }, {
      "shop_id": "575850c7-34f4-4bd6-974a-05c400f5ee63",
      "location": [-1.2863598, 36.853325]
    }, {
      "shop_id": "b0c6e273-1ebb-477b-ab92-c728de7d1c6c",
      "location": [-1.2867769, 36.853447]
    }, {
      "shop_id": "21c048c1-c9f9-4c72-bfb9-911bd609e043",
      "location": [-1.2870511, 36.853416]
    }, {
      "shop_id": "e8823862-14ba-424a-8015-f0580f02ff6f",
      "location": [-1.287063, 36.852345]
    }, {
      "shop_id": "93ef2f5d-899b-4f05-b0a1-4e583b30fef9",
      "location": [-1.287164, 36.852768]
    }, {
      "shop_id": "f7ce4bca-c80d-4482-8b87-f00a65b932cc",
      "location": [-1.2873856, 36.852886]
    }, {
      "shop_id": "92a73403-cd6e-451f-88c0-8d0f467e6378",
      "location": [-1.2877952, 36.853]
    }, {
      "shop_id": "dc3fba1b-fa52-4a4f-a163-a77a64b7387d",
      "location": [-1.2876946, 36.85353]
    }, {
      "shop_id": "f28f7da9-8edf-411a-8e40-e0f600b9ffb4",
      "location": [-1.2875335, 36.85363]
    }, {
      "shop_id": "23366676-05f6-43f3-ba2a-847128ae19e6",
      "location": [-1.2874731, 36.85368]
    }, {
      "shop_id": "314df0cd-579d-4273-8caf-747e8877c420",
      "location": [-1.2873671, 36.854588]
    }, {
      "shop_id": "d2a89a4c-0e81-4c08-ad2b-8008df2a4e35",
      "location": [-1.2875423, 36.854565]
    }, {
      "shop_id": "8f1663fa-7097-4637-bc18-82d433b8e0b5",
      "location": [-1.2860363, 36.85399]
    }, {
      "shop_id": "2604f881-6de3-472a-b3d0-6b58b1102746",
      "location": [-1.2845702, 36.858223]
    }, {
      "shop_id": "e0da8195-3e29-4cb4-ac8e-392cba14b7ee",
      "location": [-1.2845693, 36.858517]
    }, {
      "shop_id": "657fc0e4-76bb-4d5a-9e89-027ba53a9877",
      "location": [-1.2845217, 36.85866]
    }, {
      "shop_id": "03bb0452-f24b-4f42-a8ce-403e1cf6d7a3",
      "location": [-1.2845031, 36.85881]
    }, {
      "shop_id": "9d20fc12-d4bd-4fa0-b68f-7d435b0f0033",
      "location": [-1.2842118, 36.859383]
    }, {
      "shop_id": "9a2f3cb9-cadb-4018-89f7-a24e3fae0ed4",
      "location": [-1.2834877, 36.86162]
    }, {
      "shop_id": "27731156-b9f9-415e-ad05-95a055381ace",
      "location": [-1.2834264, 36.86158]
    }, {
      "shop_id": "d14776e3-6c62-4815-9283-19e29ac3a041",
      "location": [-1.2821766, 36.86435]
    }, {
      "shop_id": "b93e2c28-91c1-46c5-8307-b255be037251",
      "location": [-1.2829502, 36.864777]
    }, {
      "shop_id": "fe854e0b-5733-4499-a336-6a4722bad039",
      "location": [-1.281538, 36.86695]
    }, {
      "shop_id": "ce9412f8-ce2c-439f-834a-c7ddead581d4",
      "location": [-1.281578, 36.86686]
    }, {
      "shop_id": "550db1b0-b7e3-40b6-a58f-1b44a677ea28",
      "location": [-1.2817059, 36.867287]
    }, {
      "shop_id": "480f5c61-e7a0-4e69-b27e-c9eb93efd01c",
      "location": [-1.2819269, 36.865982]
    }, {
      "shop_id": "279d3174-8d97-4eb9-800d-d40cc234b288",
      "location": [-1.2837198, 36.859455]
    }, {
      "shop_id": "1dd57407-8ed8-4ad5-8634-9ce0308e3380",
      "location": [-1.2838998, 36.858566]
    }, {
      "shop_id": "47674a5c-13e0-4cc3-9d9a-8e7589f3a384",
      "location": [-1.2839133, 36.857925]
    }, {
      "shop_id": "f6e50824-f23a-4a8b-ba71-be4d053d3da3",
      "location": [-1.28413844108582, 36.8579597473145]
    }, {
      "shop_id": "78460e90-1bc6-49bd-9ec8-4d9ac30e19ab",
      "location": [-1.2841257, 36.858055]
    }, {
      "shop_id": "3fafe7a3-2d47-4aba-b803-9d9bc0625973",
      "location": [-1.2831949, 36.858223]
    }, {
      "shop_id": "253ffc6d-aaff-4449-afde-9224f9880b88",
      "location": [-1.2832512, 36.858105]
    }, {
      "shop_id": "03a5f315-9423-4dd0-84c6-efd202ce4c2b",
      "location": [-1.2842258, 36.85675]
    }, {
      "shop_id": "893b3796-9f88-443a-b234-be8341ed7799",
      "location": [-1.2844208, 36.855846]
    }, {
      "shop_id": "d6bcb1af-7c0a-4dca-8333-776df4f92268",
      "location": [-1.2844529, 36.85578]
    }, {
      "shop_id": "0f1e5af1-68e1-419b-82f0-c30fbeee8d2c",
      "location": [-1.2847735, 36.855644]
    }, {
      "shop_id": "654d75a9-cd11-483c-a3c5-51e2aad67d9c",
      "location": [-1.2844476, 36.85541]
    }, {
      "shop_id": "c95dc130-a615-4038-bbb6-a1ea81f3750c",
      "location": [-1.2837269, 36.85535]
    }, {
      "shop_id": "f04049e2-714d-4bc0-88e0-c1c2a22f6f64",
      "location": [-1.2837404, 36.855274]
    }, {
      "shop_id": "aae0c6bb-81cf-47e9-bced-8ad4782a153f",
      "location": [-1.2846837, 36.854332]
    }, {
      "shop_id": "5aec307b-a9b9-4c6d-acb0-42aefb326e88",
      "location": [-1.2849545, 36.853462]
    }, {
      "shop_id": "ebce23bb-5b52-41e9-9df2-0691bf32240d",
      "location": [-1.2845688, 36.852283]
    }, {
      "shop_id": "f2f4f46f-4db4-4c15-894c-748cda56c5b1",
      "location": [-1.284804, 36.8523]
    }, {
      "shop_id": "676b6fd3-483d-443d-8f17-4efa8833d1ad",
      "location": [-1.2806146, 36.85072]
    }, {
      "shop_id": "7fae211a-406c-48e2-8b40-e31b7d9c93ad",
      "location": [-1.280631, 36.850704]
    }, {
      "shop_id": "ba9fe33b-4275-4c42-b6c1-670766a35f68",
      "location": [-1.2799876, 36.85046]
    }, {
      "shop_id": "f68ffd03-596d-416a-b8fa-afc9d220e51b",
      "location": [-1.2803632, 36.849586]
    }, {
      "shop_id": "85642d0f-0af7-4246-9a1f-666d9cdaa5c6",
      "location": [-1.2809671, 36.848644]
    }, {
      "shop_id": "b17222ac-ec9e-4360-a1bd-6e07d2320b1d",
      "location": [-1.28054, 36.84848]
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
      "shop_id": "7b263d37-24b6-416d-a15c-3a4fbfd2d20a",
      "location": [-1.2824835, 36.850925]
    }, {
      "shop_id": "a8054f8f-c87d-4ab6-9359-5273f177026a",
      "location": [-1.282658, 36.851017]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Machakos 2",
    "route_id": "67fd6b10-68c8-48fd-bf70-0ba07be45e55",
    "matrix_info": {
      "DistanceMatrixAPI requests": 365,
      "cache_hit": "84%"
    },
    "distance": "98.25km",
    "path": "n{hH_ilbF?dAk]ss@aSpuBg_UvtCswE}C]s@j`@_yChAlAc@mDzA{BAe@~A|EnABnThOcjG}pBoz@abC{GgDaAg@Lc@Zu@uM_Jyj@yWav@__Bi\\{aFzB}`@N{@wCzYg@_AJ|FuXlF~mLrfVjyHsu@bi@~TpiQefFQREE~DwCzBwIHHDEDSGg@m@D?NMBA[?AbAu@vX}TjCt_B",
    "shops": [{
      "shop_id": "916670fd-17d8-440d-b1c8-f382a4e250bd",
      "location": [-1.5252041, 37.25949]
    }, {
      "shop_id": "716ae7d7-6fc9-4789-8801-385f5fd66d1a",
      "location": [-1.520335, 37.267914]
    }, {
      "shop_id": "88aa1291-9ed8-4f0d-88d7-c1f35dced085",
      "location": [-1.5171343, 37.248943]
    }, {
      "shop_id": "987a37b7-7a3f-429b-8490-bd633714c2d4",
      "location": [-1.4044456, 37.224976]
    }, {
      "shop_id": "65886655-dcc5-4dbc-a6a1-6f78335bc6bc",
      "location": [-1.3697934, 37.22577]
    }, {
      "shop_id": "ea0421c4-15d5-4445-a853-df5f90a1f28d",
      "location": [-1.3696364, 37.226025]
    }, {
      "shop_id": "1d6cd519-8659-4222-afe7-4e3d48d734cc",
      "location": [-1.3749789, 37.250668]
    }, {
      "shop_id": "f83360a7-2bf1-4a78-b852-1b7118061b0f",
      "location": [-1.3753504, 37.250275]
    }, {
      "shop_id": "4becf590-481e-48c8-9fe2-9c6d6313d666",
      "location": [-1.3751719, 37.251152]
    }, {
      "shop_id": "f207995a-cfff-4e8e-89ae-badad8a7754d",
      "location": [-1.3756267, 37.25177]
    }, {
      "shop_id": "1160e874-8691-422d-9cdf-0d918b80bf26",
      "location": [-1.3756187, 37.251957]
    }, {
      "shop_id": "aaadf1a3-2bd1-4950-9aa8-7f0aca859fa4",
      "location": [-1.3760972, 37.250854]
    }, {
      "shop_id": "d8a668da-c00c-48a0-b641-be0ed68115e5",
      "location": [-1.3765029, 37.250828]
    }, {
      "shop_id": "58398759-f826-431d-b942-f2c7ca61a41c",
      "location": [-1.3799378, 37.24822]
    }, {
      "shop_id": "4dfdfc0c-856a-4f6d-9dfe-bfec9c543539",
      "location": [-1.3372014, 37.26645]
    }, {
      "shop_id": "fb357a2d-e962-4930-9fd0-e93054b51e61",
      "location": [-1.3276753, 37.287422]
    }, {
      "shop_id": "3d7f7b4f-683e-4fb0-8860-edf521d25984",
      "location": [-1.326263, 37.288258]
    }, {
      "shop_id": "21e0dfc5-ba88-40f7-86e2-05613d620808",
      "location": [-1.3259257, 37.288456]
    }, {
      "shop_id": "d5937fba-68a8-4577-a54c-ae2f980c969c",
      "location": [-1.3259999, 37.288643]
    }, {
      "shop_id": "6cc08096-a55c-44c4-88db-070e3d49a612",
      "location": [-1.3261405, 37.288906]
    }, {
      "shop_id": "585da82e-d324-4988-adc6-57057b4c6293",
      "location": [-1.3237923, 37.290672]
    }, {
      "shop_id": "93d63f40-a3ac-4cb3-8b9c-467e0bd1c990",
      "location": [-1.3167807, 37.294643]
    }, {
      "shop_id": "6e78c60e-ba58-4d83-b376-d958a8bd47d1",
      "location": [-1.3079724, 37.31]
    }, {
      "shop_id": "8e0f8137-10d8-4524-86d3-88a93af572bd",
      "location": [-1.3032827, 37.346302]
    }, {
      "shop_id": "9221996f-ce78-434f-acd0-d6ba50bd87c4",
      "location": [-1.3038979, 37.351734]
    }, {
      "shop_id": "b0ff14b2-8821-44e2-a0fb-bb9d27570765",
      "location": [-1.3039782, 37.352028]
    }, {
      "shop_id": "edf9eee7-3904-42de-a554-b8389363d444",
      "location": [-1.3032193, 37.34773]
    }, {
      "shop_id": "17a89f32-b3aa-470d-9b94-42babceab8c7",
      "location": [-1.3030236, 37.34805]
    }, {
      "shop_id": "d0dc8617-fc10-4877-81d3-25371996f429",
      "location": [-1.3030831, 37.34678]
    }, {
      "shop_id": "c4e1a764-2c8c-407a-89f8-d81b20dbee1c",
      "location": [-1.2989678, 37.34559]
    }, {
      "shop_id": "b63f0679-a49d-4a57-892d-3e32347a3c4e",
      "location": [-1.3679304, 37.226612]
    }, {
      "shop_id": "86da7370-a604-4bf1-a2de-d1055c7efeb3",
      "location": [-1.4182336, 37.23535]
    }, {
      "shop_id": "c554b96a-27a9-4f96-b031-3432e54bf393",
      "location": [-1.4249709, 37.23183]
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
      "shop_id": "8b6faf1d-5018-4ab7-8f4a-bf21aaed36a0",
      "location": [-1.5203786, 37.2718]
    }, {
      "shop_id": "a46b8c25-29db-4e5a-9cf4-55fcb7295616",
      "location": [-1.5244955, 37.275307]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Limuru",
    "route_id": "b81634ee-7222-439f-ad45-24e330b8837e",
    "matrix_info": {
      "DistanceMatrixAPI requests": 455,
      "cache_hit": "79%"
    },
    "distance": "96.39km",
    "path": "`ijF{`p_FprAr{@fzBtsa@jA]aD_Cj@k@{nHnIq@NgrG{ImbGudF[LsYrNzu@kj@u@{FbNz@XOHP?T^P?@DC?ABFfErHcBkD~@_@`@~@rRdAH?qLgAjPaHC@FUUGXo@?CAIAEh@FBD?BFC@HJA[LIEiPwGI_MfmFs{Br@j@haBtJxnFixV",
    "shops": [{
      "shop_id": "77eaf377-1fab-4ecd-9302-bf5a7ebbbcf0",
      "location": [-1.218179, 36.777798]
    }, {
      "shop_id": "e37e96d6-2128-4ba8-9b61-82af1af07d98",
      "location": [-1.2378954, 36.600407]
    }, {
      "shop_id": "b5564eee-1168-40e3-a9f2-7ce7c00ab2b4",
      "location": [-1.238275, 36.600555]
    }, {
      "shop_id": "5c1a82ad-dbc0-41ec-bf66-5fb1e3d5c4df",
      "location": [-1.2374707, 36.6012]
    }, {
      "shop_id": "717d161a-92fd-43e3-8b1c-ce2c25fff43d",
      "location": [-1.237689, 36.60142]
    }, {
      "shop_id": "c782fe9a-7d85-4d48-b4e3-29df951b6c75",
      "location": [-1.1890705, 36.599743]
    }, {
      "shop_id": "d32fdee7-346d-4070-844f-2623109e637f",
      "location": [-1.1888239, 36.59966]
    }, {
      "shop_id": "ccef3633-47d4-4859-a9dd-d2093725980d",
      "location": [-1.1447753, 36.6014]
    }, {
      "shop_id": "361bf813-7c58-4557-8119-647bcb685358",
      "location": [-1.1032723, 36.638145]
    }, {
      "shop_id": "a518e9c4-4c09-4af1-83e2-237a7e7c85e3",
      "location": [-1.1031252, 36.638077]
    }, {
      "shop_id": "b2c16686-7fa0-4b52-929f-be18e9be853b",
      "location": [-1.0988721, 36.63558]
    }, {
      "shop_id": "8112bba0-6aa4-4a20-8a70-4408e8c421a7",
      "location": [-1.1076504, 36.642517]
    }, {
      "shop_id": "3970a61d-8897-4b4d-9896-920136e7485a",
      "location": [-1.1073765, 36.643776]
    }, {
      "shop_id": "7409bcde-beab-46f4-a0d7-c739c8eafaed",
      "location": [-1.1098047, 36.643475]
    }, {
      "shop_id": "ac318d61-2860-4945-a4cd-4760bfd1e50b",
      "location": [-1.1099253, 36.643555]
    }, {
      "shop_id": "aaed22aa-3f28-4efb-9831-f5c034a658b7",
      "location": [-1.1099831, 36.643467]
    }, {
      "shop_id": "548e0305-6867-4fe6-9f4c-b8bf2a27fe46",
      "location": [-1.1099837, 36.643356]
    }, {
      "shop_id": "8003ac60-07d2-41ae-8bfb-2d3c91bdb331",
      "location": [-1.1101379, 36.643272]
    }, {
      "shop_id": "80109517-7bd9-43ef-ac5a-93c3bb8935fb",
      "location": [-1.1101376, 36.64326]
    }, {
      "shop_id": "b32f37f6-3202-4e44-8d95-36d4e64e8732",
      "location": [-1.110172, 36.64328]
    }, {
      "shop_id": "3c4f27d9-e9c4-488e-a829-113486e4604b",
      "location": [-1.1101726, 36.643288]
    }, {
      "shop_id": "8d526887-3d9b-49a1-8b34-d9130fe2f01b",
      "location": [-1.110185, 36.643246]
    }, {
      "shop_id": "4ba19416-722d-4668-b69b-70d24441d872",
      "location": [-1.1111892, 36.641712]
    }, {
      "shop_id": "0b5fd5ab-0b08-414c-a801-1d06c5c257f8",
      "location": [-1.1106905, 36.64257]
    }, {
      "shop_id": "6eddc727-bce0-46f0-b2ba-07e2c5b2f6ae",
      "location": [-1.1110138, 36.64273]
    }, {
      "shop_id": "03642509-19e9-4f73-a649-e8fc3998d3be",
      "location": [-1.1111811, 36.64241]
    }, {
      "shop_id": "c15402dc-6005-4e5e-8e94-5cc7faaf6d41",
      "location": [-1.1143153, 36.642063]
    }, {
      "shop_id": "485a33e5-63b5-49b3-8b0f-cc0fd752e6d7",
      "location": [-1.1143726, 36.642056]
    }, {
      "shop_id": "6103df45-0179-4633-9afa-01d2ade91232",
      "location": [-1.11219644546509, 36.6424179077148]
    }, {
      "shop_id": "c3d5785e-54e8-42d5-8dc1-3cc2c142944e",
      "location": [-1.1149815, 36.64387]
    }, {
      "shop_id": "0dd2d39e-68fb-436a-b6af-c6205d9bac9e",
      "location": [-1.1149614, 36.64386]
    }, {
      "shop_id": "7fa5f415-8d8c-48de-ba38-cec2402eef8e",
      "location": [-1.1150041, 36.64397]
    }, {
      "shop_id": "19938018-7522-45fb-9f41-f031597d285f",
      "location": [-1.1148928, 36.644012]
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
      "shop_id": "653adf4e-9ec8-4952-9e8f-dc8f8663cfdd",
      "location": [-1.11520731449127, 36.6443099975586]
    }, {
      "shop_id": "d2d4d65b-70ba-4424-b935-e261f6b90d48",
      "location": [-1.11522769927979, 36.6442832946777]
    }, {
      "shop_id": "6ae82cb1-da0f-45c6-b6d1-e034d80cc651",
      "location": [-1.1152313, 36.64426]
    }, {
      "shop_id": "e59a8c9a-37d3-4048-b916-f9d02d5f4b97",
      "location": [-1.1152682, 36.644283]
    }, {
      "shop_id": "22852819-e266-4c50-b88d-ede0a80159d3",
      "location": [-1.1152841, 36.644234]
    }, {
      "shop_id": "53cd4ed1-b3d4-4694-9fa6-bbd778a790de",
      "location": [-1.1153367, 36.64424]
    }, {
      "shop_id": "47dece68-c3f5-4338-adca-a394b42fc613",
      "location": [-1.1151952, 36.644165]
    }, {
      "shop_id": "aaae6105-b7e9-4c37-9c1c-6648d8fcd01f",
      "location": [-1.1151485, 36.6442]
    }, {
      "shop_id": "d043f207-fe4b-4f13-93de-1bbf2e494ef5",
      "location": [-1.1123784, 36.645603]
    }, {
      "shop_id": "fecbe84d-8e75-404e-be98-bc0341e83546",
      "location": [-1.1123278, 36.647835]
    }, {
      "shop_id": "cae54fed-f318-4dd5-a38f-3c6991774cef",
      "location": [-1.15045309066772, 36.6677780151367]
    }, {
      "shop_id": "293939e6-0423-4c65-b610-2918a4a612ec",
      "location": [-1.1507144, 36.667557]
    }, {
      "shop_id": "65e2389f-9624-450d-8767-ea1ae8cf7c85",
      "location": [-1.1664397, 36.66569]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Matasia",
    "route_id": "1c9cfc41-e3e9-4d1f-b574-c5eb9ee7c123",
    "matrix_info": {
      "DistanceMatrixAPI requests": 362,
      "cache_hit": "83%"
    },
    "distance": "52.85km",
    "path": "zipGwtf_FzyDfmIRPLVyF}CJCTKBGmsCcF_n@lJQ?{UhISRkHxGkkA~e@qyAjyBoRpLAZIH??M?VHAHLK_AMnCzAwELMBaASmAOwKpC}dApi@a_DljAk@D|oC~FzO_OfaAalBdS{FlCwCiG_BrJwEbM}CroAiTi]o`A~m@q_@`bAg`@~Smh@xSxMtIijI",
    "shops": [{
      "shop_id": "da6b8e31-ce7e-468f-b6b7-7b707d0699db",
      "location": [-1.4294009, 36.686]
    }, {
      "shop_id": "66c8fb81-c69b-49b2-a991-4cba75b2b216",
      "location": [-1.4295012, 36.685913]
    }, {
      "shop_id": "c57d2a06-4700-4133-99cb-33c1c6584c91",
      "location": [-1.42956829071045, 36.6857872009277]
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
      "shop_id": "96353b28-85d3-4f7b-9293-470d383a1dcf",
      "location": [-1.404761, 36.687836]
    }, {
      "shop_id": "16eb71b7-7ecf-41d5-a273-cd86d6f206d3",
      "location": [-1.3972363, 36.68601]
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
      "shop_id": "b9a5ab93-7b12-4671-9183-e20fb1dbc89d",
      "location": [-1.3918864, 36.68285]
    }, {
      "shop_id": "b14a8b42-099b-4a69-974d-10d2460396a8",
      "location": [-1.3796669, 36.67661]
    }, {
      "shop_id": "994852e3-7b5c-4aa1-97bd-67eca4ebfc63",
      "location": [-1.3651752, 36.65703]
    }, {
      "shop_id": "0ae35f86-b964-48c8-ae7c-1dc5fa6afd0d",
      "location": [-1.3620591, 36.654858]
    }, {
      "shop_id": "09bfd8f8-81cf-4bc3-add0-34be2aa637a6",
      "location": [-1.36204874515533, 36.6547203063965]
    }, {
      "shop_id": "597d7ce2-fca9-40c4-8388-d77c84c14eed",
      "location": [-1.361996, 36.654675]
    }, {
      "shop_id": "df28b333-9c75-4bc6-bfcf-f4966c47b60b",
      "location": [-1.3619983, 36.65467]
    }, {
      "shop_id": "0120a36b-cd3c-466f-a6e6-e0333e9b266e",
      "location": [-1.3619266, 36.654675]
    }, {
      "shop_id": "96ca4f33-d516-4488-bf80-9ae3fbb0d2e3",
      "location": [-1.3620541, 36.65462]
    }, {
      "shop_id": "1385fcd3-2e0e-4172-add8-562955cb016f",
      "location": [-1.3620353937149, 36.6545715332031]
    }, {
      "shop_id": "a7e13dd4-f883-4ee5-ac9b-4ed1ce731738",
      "location": [-1.3621078, 36.654625]
    }, {
      "shop_id": "0624af50-d352-4cca-91fa-e78f9b5fd12d",
      "location": [-1.3617868, 36.654697]
    }, {
      "shop_id": "99c1083e-fc02-4737-92e8-469e93945560",
      "location": [-1.3625144, 36.65424]
    }, {
      "shop_id": "676cf4ec-0983-4831-9372-a4b2594f38be",
      "location": [-1.3614255, 36.654167]
    }, {
      "shop_id": "af3cea0d-c4a1-4c7f-a3c3-7c5a06102870",
      "location": [-1.3613617, 36.654152]
    }, {
      "shop_id": "b80df255-e7c0-4cdb-a7f4-39838408c5f4",
      "location": [-1.3610295, 36.65425]
    }, {
      "shop_id": "d84d73fd-42f3-4cad-8517-dea3a0dcc010",
      "location": [-1.3606387, 36.654327]
    }, {
      "shop_id": "d8648029-f779-4a20-8e19-05bf518f09b0",
      "location": [-1.358595, 36.653595]
    }, {
      "shop_id": "29bee70f-ca7a-43fe-8c8c-de762b78fb9e",
      "location": [-1.3474094, 36.646793]
    }, {
      "shop_id": "e356d2ee-5594-4e76-aac7-30d421605437",
      "location": [-1.32180118560791, 36.6347160339355]
    }, {
      "shop_id": "73c91c78-f484-45a0-bbde-3b17a1f11360",
      "location": [-1.3215754032135, 36.6346855163574]
    }, {
      "shop_id": "c77bc8b2-80ff-46fc-9a82-78fe739405a5",
      "location": [-1.3447671, 36.63341]
    }, {
      "shop_id": "16b1b32e-be0c-419c-8811-aeeaf273461b",
      "location": [-1.3474674, 36.635967]
    }, {
      "shop_id": "5f38febd-5fcc-4989-99b7-5232524a8d52",
      "location": [-1.3580686, 36.65342]
    }, {
      "shop_id": "611592b9-a904-45a3-ba21-454296d36fc9",
      "location": [-1.3612993, 36.65468]
    }, {
      "shop_id": "b900b024-dc7c-4466-a285-f28a098a6819",
      "location": [-1.3620071, 36.65544]
    }, {
      "shop_id": "346b65aa-4dc9-4c88-9895-44670599c068",
      "location": [-1.360681, 36.655922]
    }, {
      "shop_id": "512954dc-6833-4dd4-91f5-8c4d675ee506",
      "location": [-1.3625352, 36.656998]
    }, {
      "shop_id": "9c12247b-24ad-4095-ab33-f7b38c202b8d",
      "location": [-1.3647956, 36.65779]
    }, {
      "shop_id": "f30909fa-426c-4ffd-98ae-7bb0b05e2609",
      "location": [-1.37769675254822, 36.6612014770508]
    }, {
      "shop_id": "6a5281b7-e644-4756-9b4e-8af8f63a8e05",
      "location": [-1.37284648418427, 36.6716804504395]
    }, {
      "shop_id": "3265c7a4-748d-4b16-aaf1-51ff799812f5",
      "location": [-1.380366, 36.676888]
    }, {
      "shop_id": "547d4758-ddd0-457c-83e4-63df0dcb8686",
      "location": [-1.3911029, 36.682205]
    }, {
      "shop_id": "06ef786f-7a86-43db-b3f3-0ab543a01fc4",
      "location": [-1.3944644, 36.68884]
    }, {
      "shop_id": "419dc4fd-0806-4068-8229-82b864bf5c32",
      "location": [-1.39778685569763, 36.6864738464355]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Kiserian",
    "route_id": "a532f203-da12-4e58-883a-8f9a1d3b45bd",
    "matrix_info": {
      "DistanceMatrixAPI requests": 685,
      "cache_hit": "81%"
    },
    "distance": "36.19km",
    "path": "zipGwtf_Fg_GfhJOL_JBsq@vXJ{DaIza@H~BrFtA@@BGdAzAj@TgUhGtAvLsIvGTFoAKy@e@qJmAHb@lA?cJye@\\hFtDfR~]nb@\\XpAvBe@CbCw@fPtGzPrRdG|@zWxIrGEzA`CrGyNOe@@A]eCNEqE_TCH`AeBNmC?W[BQuB`Ioq@VYj@_BKOJu@DcARAv@lBzA_DS`@IAr^eFkL`Aka@un@rrFqfJ",
    "shops": [{
      "shop_id": "a50fbabe-9d49-424d-a3a6-fcfc7a0df89c",
      "location": [-1.3585047, 36.68168]
    }, {
      "shop_id": "4ea14954-c988-42ad-ad6e-df38d9cfaa78",
      "location": [-1.35842168331146, 36.6816101074219]
    }, {
      "shop_id": "dff8e455-3f05-4e48-80d2-51a9418f5c3c",
      "location": [-1.35666263103485, 36.6815948486328]
    }, {
      "shop_id": "3fba0027-ab01-49c9-8bf9-022210d24488",
      "location": [-1.3485619, 36.677467]
    }, {
      "shop_id": "b45308d2-38ad-48db-a8ae-3b654e915c96",
      "location": [-1.3486247, 36.678406]
    }, {
      "shop_id": "026ff6c5-9291-4676-8061-e29e2defbf6e",
      "location": [-1.3470137, 36.67283]
    }, {
      "shop_id": "f22d1d28-8417-4fa7-b2f6-27538e904db6",
      "location": [-1.3470558, 36.672188]
    }, {
      "shop_id": "906d45f8-ebe0-4038-af4a-1f43a3946e4c",
      "location": [-1.3482794, 36.671757]
    }, {
      "shop_id": "8e64f13d-0f4c-4181-885d-7680469205e5",
      "location": [-1.3482883, 36.671753]
    }, {
      "shop_id": "aebcd52a-4443-48e0-ba45-a0a8cac0cd84",
      "location": [-1.3483068, 36.671787]
    }, {
      "shop_id": "c4f9b410-2eb2-43de-986b-f2e0d71f1c37",
      "location": [-1.3486623, 36.67133]
    }, {
      "shop_id": "4036747b-5f55-4333-801d-0a352e961716",
      "location": [-1.348878, 36.671223]
    }, {
      "shop_id": "6fc019d9-f4ae-4ec7-b7f9-7d32a7b4e232",
      "location": [-1.34532, 36.66989]
    }, {
      "shop_id": "56a03190-cbaa-4f04-9940-b3a0b43f0a20",
      "location": [-1.34575307369232, 36.6676864624023]
    }, {
      "shop_id": "966ab6bf-1fb9-4522-acbd-80b59378ffb4",
      "location": [-1.3440545, 36.666294]
    }, {
      "shop_id": "adbc4f00-7f2f-4f9f-8b29-1b9be6427a05",
      "location": [-1.3441607, 36.666245]
    }, {
      "shop_id": "a944eef2-e002-4e5a-98f3-a6c8f3db5ffc",
      "location": [-1.3437644, 36.666306]
    }, {
      "shop_id": "44ff4ac0-c8df-41c8-9493-831189524e97",
      "location": [-1.343467, 36.6665]
    }, {
      "shop_id": "11edcc79-0390-4c05-9faf-ebdd4077b252",
      "location": [-1.3416156, 36.66689]
    }, {
      "shop_id": "15dba73e-1883-4671-8d89-1a1595572483",
      "location": [-1.34167301654816, 36.6667060852051]
    }, {
      "shop_id": "d9be4f6c-14e7-4c76-ac7f-f0bab8c8162d",
      "location": [-1.342057, 36.66671]
    }, {
      "shop_id": "918a6364-d133-4f76-ad0d-5c7d26fd1de8",
      "location": [-1.3402818, 36.672924]
    }, {
      "shop_id": "fa6b59be-ebce-4da9-806f-ab2ac507c5f7",
      "location": [-1.340432, 36.671753]
    }, {
      "shop_id": "87d5660e-5cfa-40b3-a2af-566235e65b3a",
      "location": [-1.34133636951447, 36.6686668395996]
    }, {
      "shop_id": "df3ea7ab-7831-415e-a5e3-0d7d58c941a4",
      "location": [-1.3462993, 36.66299]
    }, {
      "shop_id": "e62327e6-a42a-4f0a-8d3c-d51190f8e3b5",
      "location": [-1.3464524, 36.662857]
    }, {
      "shop_id": "596b1b96-29a0-4707-af26-07e4161ee3d5",
      "location": [-1.346861, 36.66226]
    }, {
      "shop_id": "76f266c8-f56b-4035-b924-021096279fc2",
      "location": [-1.3466741, 36.662277]
    }, {
      "shop_id": "56dea546-cfb9-43d7-addf-887c4ee87236",
      "location": [-1.34733235836029, 36.6625556945801]
    }, {
      "shop_id": "8e9eae46-128b-4e46-90d9-f55bbf75bd61",
      "location": [-1.3500917, 36.66117]
    }, {
      "shop_id": "1b0cf52d-57b5-4485-9b34-cbb9c1a124cb",
      "location": [-1.352951, 36.658028]
    }, {
      "shop_id": "efc4a4cc-8f2e-4a0f-9db7-66085a17e695",
      "location": [-1.35426, 36.65772]
    }, {
      "shop_id": "edea848a-6cff-46eb-baf4-55e2184bd469",
      "location": [-1.3582448, 36.65599]
    }, {
      "shop_id": "16da2e9d-471a-4d50-aa0c-b5eb52102abf",
      "location": [-1.3596216, 36.656017]
    }, {
      "shop_id": "95b462dc-e4f9-4f63-8fda-0d38c6636c24",
      "location": [-1.36008489131927, 36.6553726196289]
    }, {
      "shop_id": "05bd4be5-412f-4db6-b1a3-a21ae87f1a98",
      "location": [-1.3614587, 36.657898]
    }, {
      "shop_id": "57a6fa41-5735-43b6-b860-e64030a060e7",
      "location": [-1.3613849, 36.658085]
    }, {
      "shop_id": "d2093763-0985-40c5-8e38-cf2f7e9e7327",
      "location": [-1.3613864, 36.6581]
    }, {
      "shop_id": "8a334e49-9490-439e-a15e-61eb541c5a1b",
      "location": [-1.3612413, 36.65877]
    }, {
      "shop_id": "bd0775fe-4db6-4de7-b7d2-516466f65d30",
      "location": [-1.3613167, 36.6588]
    }, {
      "shop_id": "015e207b-eebf-4590-8601-180040bca926",
      "location": [-1.36027204990387, 36.6621627807617]
    }, {
      "shop_id": "056426d3-315c-4c77-9a6c-e3659fdb07ea",
      "location": [-1.3602512, 36.66211]
    }, {
      "shop_id": "49577fd3-29da-4b69-b9ec-2de827459962",
      "location": [-1.3605789, 36.662617]
    }, {
      "shop_id": "acc6527f-e224-4906-934e-5f0d147117fb",
      "location": [-1.3606584, 36.663326]
    }, {
      "shop_id": "e63f469d-fce2-4fcb-ac4e-ba49bcee6af9",
      "location": [-1.3606592, 36.663445]
    }, {
      "shop_id": "144edb13-b5dd-4cac-a551-9c5b37418ff6",
      "location": [-1.360516, 36.66343]
    }, {
      "shop_id": "35c296bb-b29a-4f27-8db1-e8c18cc1bf44",
      "location": [-1.36043238639832, 36.6640205383301]
    }, {
      "shop_id": "b6825c29-90f2-4c00-9a22-2bc422d0ec1a",
      "location": [-1.3620379, 36.672104]
    }, {
      "shop_id": "a53ee7d2-d12f-4c2b-b1cb-f573b4552007",
      "location": [-1.3621562, 36.67223]
    }, {
      "shop_id": "c07ee1b5-d7ee-4207-92a9-5ade6f2723a2",
      "location": [-1.3623796, 36.67271]
    }, {
      "shop_id": "84323695-6182-4add-b58f-0b878ab71e8d",
      "location": [-1.3623182, 36.672794]
    }, {
      "shop_id": "68b71314-520a-4059-8e13-c9010a3b3843",
      "location": [-1.3623794, 36.67306]
    }, {
      "shop_id": "6d7cb3ad-ea6a-40e2-8692-25570fbc6c95",
      "location": [-1.3624115, 36.673397]
    }, {
      "shop_id": "a1345773-3beb-4d8b-b8a0-e1018e10254c",
      "location": [-1.3625122, 36.67341]
    }, {
      "shop_id": "a280af4b-7863-4c28-83e4-fcb671ea9935",
      "location": [-1.36279368400574, 36.6728553771973]
    }, {
      "shop_id": "d5435189-1fbb-4e7b-888b-d8d2921c7868",
      "location": [-1.3632514, 36.673656]
    }, {
      "shop_id": "98db196d-732f-4d4c-b076-3f5fec51e088",
      "location": [-1.3631487, 36.67349]
    }, {
      "shop_id": "10f151e8-6ea3-4f97-8f44-d76b37fcd64c",
      "location": [-1.3631003, 36.6735]
    }, {
      "shop_id": "cfe19be0-1f09-4bdf-930d-c35872dc27e5",
      "location": [-1.36816, 36.67465]
    }, {
      "shop_id": "121c51aa-b7ed-471d-bd86-338660dc184f",
      "location": [-1.3660202, 36.67432]
    }, {
      "shop_id": "574926f9-305c-49ab-864a-c7a9462757e2",
      "location": [-1.3605217, 36.68195]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Mwiki",
    "route_id": "d183d751-718b-4938-80b7-f13883674439",
    "matrix_info": {
      "DistanceMatrixAPI requests": 282,
      "cache_hit": "77%"
    },
    "distance": "27.31km",
    "path": "|qoF_r``F~KszI|HhFfLdAb@SrRaEsLHe@}BSiCRmT{ErHG\\cE{AuCa@r@{MfH{CxZ_e@oe@~\\DJgOWec@xFwl@}Kvh@dVb@CLVAB~J~A~En@d@ZfC`@zCcAlBtCBRjJn@BScBvJ{IraJ",
    "shops": [{
      "shop_id": "a9954579-b9db-486b-93e0-c1477f76e5d9",
      "location": [-1.2339104, 36.927784]
    }, {
      "shop_id": "7624728f-2dca-4f0a-9de0-da48e2d4ad51",
      "location": [-1.2355016, 36.926605]
    }, {
      "shop_id": "fb1ecee0-f3b5-4892-b45b-6dff8942e245",
      "location": [-1.2376184, 36.926258]
    }, {
      "shop_id": "6ff8b934-2aab-4841-b081-da984b1cd54d",
      "location": [-1.2378006, 36.92636]
    }, {
      "shop_id": "0ba67dee-ce94-4fac-bbbb-a4e02859a926",
      "location": [-1.2409395, 36.927334]
    }, {
      "shop_id": "f514b4a0-219f-430e-93c3-61a10f0ae7db",
      "location": [-1.2387612, 36.927277]
    }, {
      "shop_id": "d3f0eff2-10d0-4240-8d12-d167f6319a75",
      "location": [-1.2385658, 36.927914]
    }, {
      "shop_id": "d2ac1872-d743-41f0-b5df-5ce5f42c54e2",
      "location": [-1.2384696, 36.928596]
    }, {
      "shop_id": "1e87da63-ae6d-4d73-a1ff-65396ddd8f05",
      "location": [-1.2385681, 36.93203]
    }, {
      "shop_id": "e72076ca-d90d-44b5-8653-62f041db7d70",
      "location": [-1.2374659, 36.93049]
    }, {
      "shop_id": "52c9e3f6-5f9f-439a-86ad-d7e95fdfd6a9",
      "location": [-1.23743, 36.930344]
    }, {
      "shop_id": "ee7bc974-50ae-4c82-b446-c7f38919240f",
      "location": [-1.2364469, 36.930798]
    }, {
      "shop_id": "b3a1b0d5-abd8-4332-bb29-3aaec4fbe84c",
      "location": [-1.2357022, 36.930973]
    }, {
      "shop_id": "8a737ed4-ad1f-4edb-990c-960cef6df27e",
      "location": [-1.2359594, 36.933353]
    }, {
      "shop_id": "eb07a6a7-fdc9-4abb-bd1f-ba7201695d6a",
      "location": [-1.2374437, 36.934128]
    }, {
      "shop_id": "143df17a-bfb8-4a39-ac95-b7a409944498",
      "location": [-1.2418945, 36.94021]
    }, {
      "shop_id": "973c231f-37df-4fd2-b4cc-d644c1f524f9",
      "location": [-1.2357343, 36.93541]
    }, {
      "shop_id": "c69814de-8d91-4205-be42-d1b1885311f5",
      "location": [-1.2357594, 36.93535]
    }, {
      "shop_id": "b85476ab-ee13-4481-98b4-e9fe3e4a589d",
      "location": [-1.2331631, 36.93547]
    }, {
      "shop_id": "d802a615-4541-4bef-9ead-e390c92f76b2",
      "location": [-1.2273659, 36.93422]
    }, {
      "shop_id": "411111b6-0175-401c-88e7-2ab3a5f1e459",
      "location": [-1.2200539, 36.936287]
    }, {
      "shop_id": "4e632dfc-8628-429e-bc89-829719282cad",
      "location": [-1.2267278, 36.93258]
    }, {
      "shop_id": "ec6706ae-b031-4c75-b8b1-353b38f3ec30",
      "location": [-1.22691082954407, 36.9326019287109]
    }, {
      "shop_id": "e24f2911-50f6-4322-ac4c-4483ddbc0e98",
      "location": [-1.2269777, 36.932484]
    }, {
      "shop_id": "aeb94196-b85f-4b1f-8c16-ebde0f84f276",
      "location": [-1.2269653, 36.93246]
    }, {
      "shop_id": "84428a86-b678-408b-871e-d1e0e33e00ab",
      "location": [-1.2288933, 36.931976]
    }, {
      "shop_id": "124faeb4-0b4a-418a-bab7-c25da0df78e5",
      "location": [-1.2300144, 36.931736]
    }, {
      "shop_id": "cac5f386-4841-4d20-9a96-95640552985c",
      "location": [-1.2302009, 36.931602]
    }, {
      "shop_id": "1c57d0c9-2189-44c9-a176-1152de019dad",
      "location": [-1.23087990283966, 36.9314270019531]
    }, {
      "shop_id": "249b1115-bc04-464d-91ad-e96013e43d36",
      "location": [-1.2316576, 36.93177]
    }, {
      "shop_id": "ece32d5f-533a-4762-90da-d78b193ceb58",
      "location": [-1.2322055, 36.931015]
    }, {
      "shop_id": "f2b394fe-bedf-40fa-abe0-61e9b671b6dd",
      "location": [-1.23223483562469, 36.9309234619141]
    }, {
      "shop_id": "8bc19347-545b-47da-a26d-e2bfe726ab36",
      "location": [-1.234055, 36.930683]
    }, {
      "shop_id": "0a6800c0-3e3e-495b-8e8a-c40fd40557b6",
      "location": [-1.2340682, 36.930782]
    }, {
      "shop_id": "84cb99d7-d9c8-4696-9400-5bffc1789d8e",
      "location": [-1.2335728, 36.928898]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Machakos C.B.D",
    "route_id": "60854a1c-a68d-47c2-bc6a-4f14ab161c10",
    "matrix_info": {
      "DistanceMatrixAPI requests": 341,
      "cache_hit": "86%"
    },
    "distance": "106.89km",
    "path": "n{hH_ilbFxReYlObDdPj@jDbA]Tn`Apk@jAb@bsUiuDTLrGpAdrGqoKSDEdBbcB{kDdoLpuApBaBlBcBjA}BoBBjhBvcBcqWlwDSoAqAh@yQbQcqB~xDUbAvAj@aGaDq~Xl`CiAr@a@kAAC?AIBTiKcPhBI?d@z@wAn@SFMDEU{KuC_@@AKGB{GkLq@yBdHtCxCzGDBlO`j@",
    "shops": [{
      "shop_id": "565e365e-7602-47bd-b0c4-fe60cd539348",
      "location": [-1.5283657, 37.26403]
    }, {
      "shop_id": "81ad35a2-cc89-4254-876d-033ce2af288c",
      "location": [-1.5310004, 37.26321]
    }, {
      "shop_id": "a85337a5-22ff-4683-9a2a-8be3da20d9cb",
      "location": [-1.53375482559204, 37.2629852294922]
    }, {
      "shop_id": "cd4b6847-f6f0-4740-8b33-173d6953bc82",
      "location": [-1.5346085, 37.262646]
    }, {
      "shop_id": "279960b1-0f43-46c7-ace2-03d92d1eb4b3",
      "location": [-1.5344611, 37.26254]
    }, {
      "shop_id": "c1a48d09-2843-47d9-a5f4-c1c66de635d1",
      "location": [-1.5449407, 37.255405]
    }, {
      "shop_id": "b30323a1-d7ed-481d-ac58-2ab7d26af19d",
      "location": [-1.5453162, 37.255226]
    }, {
      "shop_id": "1bd6d4db-b646-4e1f-a741-989cc8bd0b3d",
      "location": [-1.661184, 37.2844]
    }, {
      "shop_id": "b14f09dc-6f02-4ff5-8e7c-7e3cd3e6a1b0",
      "location": [-1.6612872, 37.284325]
    }, {
      "shop_id": "1cbe2df2-8726-4eb2-aaa3-465027a7c57c",
      "location": [-1.6626709, 37.28392]
    }, {
      "shop_id": "e1f85701-0dd2-4df1-bef3-e04b9ab4bac3",
      "location": [-1.7067028, 37.348007]
    }, {
      "shop_id": "653d5838-fbf2-4532-aed0-e59ba9b25a4b",
      "location": [-1.7065986, 37.347977]
    }, {
      "shop_id": "9bfc240a-6f70-47a8-9e17-34fd5fda7cc5",
      "location": [-1.7065657377243, 37.3474731445312]
    }, {
      "shop_id": "e9d0a98b-c16c-4db8-a0c6-9ef7c2f850d2",
      "location": [-1.7225894, 37.375134]
    }, {
      "shop_id": "f7b6d2b3-68f0-461a-95fc-a1c902c0d2a2",
      "location": [-1.7917368, 37.36128]
    }, {
      "shop_id": "c772f735-1890-465e-925f-71b7a2a34466",
      "location": [-1.7923107, 37.36177]
    }, {
      "shop_id": "3617c1bd-800b-4185-8303-840912f87c70",
      "location": [-1.7928612, 37.36227]
    }, {
      "shop_id": "b4cce552-ba61-4963-a741-44f43c67fed4",
      "location": [-1.793244, 37.362896]
    }, {
      "shop_id": "0ff197b1-44fd-4d29-88ac-965d9e7341ef",
      "location": [-1.7926778, 37.36288]
    }, {
      "shop_id": "6d7900fc-16dd-4970-8ea4-89836bd54c59",
      "location": [-1.8095382, 37.34676]
    }, {
      "shop_id": "4c5c4afe-36e0-4292-a1c9-592fd42e7951",
      "location": [-1.6837575, 37.317245]
    }, {
      "shop_id": "8737554d-7ade-40c6-a9c5-822db28f4b15",
      "location": [-1.68366003036499, 37.3176460266113]
    }, {
      "shop_id": "ff168a26-d925-4d53-810a-40e74e9e0715",
      "location": [-1.6832496, 37.317436]
    }, {
      "shop_id": "c7322bda-762e-49e0-99de-5ed03d86b7f8",
      "location": [-1.6802415, 37.31454]
    }, {
      "shop_id": "2cf754a3-afcd-44e1-84bb-cf0417a14a71",
      "location": [-1.6619769, 37.284775]
    }, {
      "shop_id": "8730ac17-6950-4e36-a705-88310640c3b5",
      "location": [-1.66187155246735, 37.2844352722168]
    }, {
      "shop_id": "0b6a5f45-1d41-433b-911f-867bf4ee1d08",
      "location": [-1.6623061, 37.28422]
    }, {
      "shop_id": "ad64ffda-4b89-400f-89f7-65342e7a6812",
      "location": [-1.6610197, 37.28503]
    }, {
      "shop_id": "54e7b963-ad54-403e-89e0-56ec7b093caa",
      "location": [-1.5279675, 37.26432]
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
      "shop_id": "93b4bba4-e1a6-45f1-a75b-a777140b3d0c",
      "location": [-1.5274836, 37.266422]
    }, {
      "shop_id": "41da91bd-76ad-4be3-a9ab-65d6bd71bf71",
      "location": [-1.5247436, 37.265892]
    }, {
      "shop_id": "997e0627-7fb4-4a9a-8d18-b14b0124d12f",
      "location": [-1.5246857, 37.265892]
    }, {
      "shop_id": "73b63a89-700e-4ebd-bb46-3ec67bf8bf02",
      "location": [-1.524877, 37.26559]
    }, {
      "shop_id": "989f1211-b752-41c4-bbbe-6b44065b99f3",
      "location": [-1.5244397, 37.265347]
    }, {
      "shop_id": "8415bfd0-20bc-47be-a39d-3253456a5e1b",
      "location": [-1.5243382, 37.265312]
    }, {
      "shop_id": "a92db631-e421-4625-bea5-9b7170a74825",
      "location": [-1.52427017688751, 37.2652778625488]
    }, {
      "shop_id": "c34fbc69-6dae-4dad-a957-bcf072d4b139",
      "location": [-1.5242443, 37.26539]
    }, {
      "shop_id": "48a6ecd5-1219-4333-bb88-cefb4503be28",
      "location": [-1.5221789, 37.266136]
    }, {
      "shop_id": "963b03eb-a3c6-4835-a8c3-cecbc9653c54",
      "location": [-1.5220155, 37.266125]
    }, {
      "shop_id": "d82662dc-c826-4b1a-ad8b-51743142def2",
      "location": [-1.5220087, 37.26619]
    }, {
      "shop_id": "b2fb241c-17ba-49c2-a6c7-82c56426d64d",
      "location": [-1.5219699, 37.266174]
    }, {
      "shop_id": "0d65d6ab-687c-4fba-b0bc-ab29a1ccaca9",
      "location": [-1.5205456, 37.268307]
    }, {
      "shop_id": "6df17a7f-86f2-43c4-a5db-5ba8b924f73e",
      "location": [-1.5203036, 37.268917]
    }, {
      "shop_id": "5cc39acd-f893-49df-afed-802cf7f0c937",
      "location": [-1.5217702, 37.268166]
    }, {
      "shop_id": "37d6b515-e4db-4b06-855e-064ef1d4d06e",
      "location": [-1.522541, 37.26675]
    }, {
      "shop_id": "ca616f8c-5d8f-4481-a038-6b60af21506a",
      "location": [-1.5225677, 37.266735]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Komarock",
    "route_id": "a6648784-f04c-4e3b-b649-1f6daab1d8c7",
    "matrix_info": {
      "DistanceMatrixAPI requests": 625,
      "cache_hit": "80%"
    },
    "distance": "19.05km",
    "path": "`h{F{`g`FOw@}hAcBa@n@f@PkBmAyFkFJGiBhCwGjBcUbI~UkOJg@_BS_IaGnAj@vB{B_EoHqSzGxAeM}LeHgUpRCBBD{FqCf@dMtF~EdNroA|BrDpHo@tBo@h@rEv@ToBBmA`@|ImEs@Srp@mg@oEgI{SdE}AsB_GIgIoAxBqH|@Wp@bIW@`OyG~DOyF}By@}AdHaBPy@|BqACG|KpBDC|jAy@",
    "shops": [{
      "shop_id": "6887d499-d784-4ef7-be60-ff4fbe5a4dfb",
      "location": [-1.29161334037781, 36.9055404663086]
    }, {
      "shop_id": "5f72c6b6-941c-4c26-a880-4535c81e2b34",
      "location": [-1.2797822, 36.90604]
    }, {
      "shop_id": "bbed0f19-dda5-43e8-ac2f-8bd2681780c1",
      "location": [-1.27960634231567, 36.9057960510254]
    }, {
      "shop_id": "f2b3bbfa-4685-420e-bffa-0689046fadd2",
      "location": [-1.27981269359589, 36.9057121276855]
    }, {
      "shop_id": "780c35dd-5fd1-408f-9aad-b2317a6202a4",
      "location": [-1.27926552295685, 36.9061012268066]
    }, {
      "shop_id": "056ba809-7681-4f27-983c-cbf158b34ad1",
      "location": [-1.2780163, 36.907276]
    }, {
      "shop_id": "f7b86534-1832-4452-9ed6-ed919bd8dbc5",
      "location": [-1.2780818, 36.907322]
    }, {
      "shop_id": "db55b0da-fc04-4188-a4b9-0e9707370a9c",
      "location": [-1.27755081653595, 36.9066276550293]
    }, {
      "shop_id": "7244f30d-d2ee-44a2-9bdf-510ea92d4ced",
      "location": [-1.2761513, 36.906086]
    }, {
      "shop_id": "3034d49e-d2d3-4a3a-bfad-b84e61afdfe7",
      "location": [-1.2726076, 36.90447]
    }, {
      "shop_id": "77a6c5f7-3163-4229-913e-3fa7271b5fb0",
      "location": [-1.2762915, 36.907085]
    }, {
      "shop_id": "20636921-e320-41ec-be83-bdbd4d18a8d4",
      "location": [-1.2763485, 36.90729]
    }, {
      "shop_id": "94bafad4-6995-412a-b072-4d1046ba1e4b",
      "location": [-1.2758716, 36.907394]
    }, {
      "shop_id": "8e466862-264d-4a82-9d68-dd09f0885f09",
      "location": [-1.2742745, 36.908684]
    }, {
      "shop_id": "961bed05-204a-4f70-96de-b2ef00141096",
      "location": [-1.2746725, 36.908463]
    }, {
      "shop_id": "b3599f9b-c699-436b-83b4-6fe84b7b42dd",
      "location": [-1.2752655, 36.90908]
    }, {
      "shop_id": "8a734355-0813-46c5-b688-1f29a8e3d4e9",
      "location": [-1.2743115, 36.9106]
    }, {
      "shop_id": "5498fa1d-8214-48b3-aefd-f5006390b534",
      "location": [-1.2710227, 36.90918]
    }, {
      "shop_id": "b1a2de2c-b553-4b9c-82ec-68a50475cf5a",
      "location": [-1.2714741, 36.911446]
    }, {
      "shop_id": "c321c436-0071-4d02-afc6-f199aac721ee",
      "location": [-1.2692412, 36.912918]
    }, {
      "shop_id": "0b625aea-3a2b-4e0f-8fa3-6c368e733401",
      "location": [-1.2656764, 36.90979]
    }, {
      "shop_id": "080361de-db47-4c8a-aa07-bc5ec3e31d05",
      "location": [-1.265664935112, 36.9097671508789]
    }, {
      "shop_id": "f9119a19-a2bf-4c78-9743-2703d397224b",
      "location": [-1.26568, 36.909737]
    }, {
      "shop_id": "083db30b-6993-48a5-9713-1ee241cba5fc",
      "location": [-1.2644248, 36.910465]
    }, {
      "shop_id": "98bf38ac-ec6e-4fc2-9273-bec85ae28f30",
      "location": [-1.2646185, 36.908203]
    }, {
      "shop_id": "8efcc558-8d0b-42aa-9dcb-15bb185ee17d",
      "location": [-1.2658532, 36.9070806]
    }, {
      "shop_id": "a1a7d477-75ea-46d4-bfd5-389c458a57e2",
      "location": [-1.268275, 36.894184]
    }, {
      "shop_id": "be53c990-63db-44f3-a438-6dcaf39bff5e",
      "location": [-1.2689086, 36.893284]
    }, {
      "shop_id": "516ed336-0c3a-4c95-9028-a0a9999b027f",
      "location": [-1.2704359, 36.893521]
    }, {
      "shop_id": "75f01b8e-fea0-4860-a53c-fd2afd8edace",
      "location": [-1.271028, 36.893757]
    }, {
      "shop_id": "b28ee1be-339f-447d-9168-f27d4b095e2c",
      "location": [-1.2712431, 36.892696]
    }, {
      "shop_id": "e1f648f3-8029-45da-98a7-750ea35861ba",
      "location": [-1.2715232, 36.892593]
    }, {
      "shop_id": "038939bb-5641-43f0-b8aa-cc0cb29e1e59",
      "location": [-1.2709621, 36.892567]
    }, {
      "shop_id": "82385ad5-7b71-4560-b7be-8643e31b5d84",
      "location": [-1.2705745, 36.8924]
    }, {
      "shop_id": "f7416388-edce-4293-a10f-3727da2a076e",
      "location": [-1.2723153, 36.893425]
    }, {
      "shop_id": "ed956dae-3e69-4add-a623-4bd4b1a9f342",
      "location": [-1.2720611, 36.89353]
    }, {
      "shop_id": "86d0952f-aef8-4eb6-b653-8b9050c7b18c",
      "location": [-1.28, 36.9]
    }, {
      "shop_id": "72cc1567-657e-4e5c-abd3-3819498b23d3",
      "location": [-1.2789587, 36.90164]
    }, {
      "shop_id": "e27b77ce-1fe0-4f7a-99e9-b9d85444122d",
      "location": [-1.2756199, 36.900654]
    }, {
      "shop_id": "2433b92d-5d69-4f3f-967b-7db32aa02990",
      "location": [-1.27514934539795, 36.9012336730957]
    }, {
      "shop_id": "8d848a30-d30c-4a73-b87f-34a474f0a8f6",
      "location": [-1.2738699, 36.90128]
    }, {
      "shop_id": "ea81dca4-2e8d-443b-9674-d131abdeaa30",
      "location": [-1.2722343, 36.90168]
    }, {
      "shop_id": "dd36ece0-5be6-4b6f-b870-2927324e4a75",
      "location": [-1.2728428, 36.90321]
    }, {
      "shop_id": "5c44379a-b867-44cd-a63f-ccd0a126167f",
      "location": [-1.27314925193787, 36.9033279418945]
    }, {
      "shop_id": "a6b16de8-8628-4f2a-b0e8-0f3ca31c1bfc",
      "location": [-1.27339935302734, 36.9017066955566]
    }, {
      "shop_id": "4499cbdd-aefd-4a33-8eb2-c01b9ef95a0e",
      "location": [-1.27328431606293, 36.9017028808594]
    }, {
      "shop_id": "ee5ff901-2bd0-416e-9338-6d840c5a52ad",
      "location": [-1.2758495, 36.903107]
    }, {
      "shop_id": "32723f4c-8df7-43d9-bc0f-363fc9d8d7a9",
      "location": [-1.276808, 36.903194]
    }, {
      "shop_id": "1816387f-d22a-475e-baca-f6e8654b3a4f",
      "location": [-1.2755578, 36.903824]
    }, {
      "shop_id": "18cc001f-c8dc-459c-849e-77b4b909b8ea",
      "location": [-1.2752671, 36.904293]
    }, {
      "shop_id": "b24f2538-c32e-481f-918f-46361a3b7ecb",
      "location": [-1.2767372, 36.904785]
    }, {
      "shop_id": "19055e5c-29c8-41f4-892c-74b2ffc4e218",
      "location": [-1.2768261, 36.90507]
    }, {
      "shop_id": "f43aaf67-c8c0-4ea5-ba1e-4de5e4dc1c88",
      "location": [-1.2774599, 36.905483]
    }, {
      "shop_id": "bb0cff33-2688-462b-bed7-387e1d554deb",
      "location": [-1.2774442, 36.905518]
    }, {
      "shop_id": "d52dc48b-d145-44a2-a9b3-3795d6b84bf2",
      "location": [-1.2795091, 36.904945]
    }, {
      "shop_id": "6214078b-3e4c-413a-8a7e-294c5d9309f5",
      "location": [-1.2795382, 36.904972]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Parklands",
    "route_id": "480c0bd9-7fb5-4287-bc30-5c697f712b9d",
    "matrix_info": {
      "DistanceMatrixAPI requests": 57,
      "cache_hit": "92%"
    },
    "distance": "19.37km",
    "path": "`z|Fedx_FyqElgAm@KO_@qb@_|@GHyAJsKoEzUbLZD@ADFFB?CQWp@N_JjD{AnHjFtE}TdA_FxIDd@xVpNmHzB}G`XfRiBpVgOFdDhBzAl@Iv{E}tA",
    "shops": [{
      "shop_id": "5c68c114-33d6-4ee3-b959-26594616999e",
      "location": [-1.2659593, 36.817398]
    }, {
      "shop_id": "917696fa-6cd0-4584-9c20-d83782043323",
      "location": [-1.2657293, 36.81746]
    }, {
      "shop_id": "21b0b97e-b678-4ae6-b791-27ebdab70c12",
      "location": [-1.2656522, 36.817616]
    }, {
      "shop_id": "e9c15609-fd56-4c9c-bf2d-ca8254c7d431",
      "location": [-1.2599635, 36.82738]
    }, {
      "shop_id": "6a35202c-8516-44b5-9a99-ccd37b56b717",
      "location": [-1.2599158, 36.82733]
    }, {
      "shop_id": "25e3285a-1db6-4940-baa6-c10b298003e3",
      "location": [-1.2594738, 36.82727]
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
      "shop_id": "1f8a59d9-d364-47ec-a950-31ee722aa3f8",
      "location": [-1.2613333, 36.82615]
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
      "shop_id": "e762387a-e5c1-4b2a-adf5-25efd0478f2a",
      "location": [-1.2558482, 36.820465]
    }, {
      "shop_id": "ee20550f-aee2-40ce-a65f-ff5c7656d865",
      "location": [-1.2596616, 36.817978]
    }, {
      "shop_id": "fe467e92-e514-40e4-8d9e-b34e42cc7ddd",
      "location": [-1.258148, 36.81736]
    }, {
      "shop_id": "f4f0816c-8d2b-495c-9cd3-db4eb5d9eced",
      "location": [-1.2567244, 36.813347]
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
      "shop_id": "14a19cc9-e164-46cb-9275-a7d0ea2b21d4",
      "location": [-1.2641401, 36.815193]
    }, {
      "shop_id": "f2f42c9d-3456-444b-b00d-6fb38aa8a78b",
      "location": [-1.2643747, 36.81524]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Mlolongo",
    "route_id": "4dd70fe1-ce95-4cbe-9cf1-d9167c0d28fa",
    "matrix_info": {
      "DistanceMatrixAPI requests": 576,
      "cache_hit": "76%"
    },
    "distance": "51.22km",
    "path": "dsfG_se`FmaOr~@jaV_eHAc@AAE?AAA@K@TUf^wYOmAFuBoCmAnEUk@sCtFpONsAv@kL|LgDwAj@tChGDAfGsB|FwDLiFnB}BkCs@}Vp@qBA}FLbCwBr@GbCs@{I{@sL`GoE_@AVsDhBEx@DBEh@lEtCf@XP{@uf@vVLG}R~~@yh@nm@?HSJklC~mC",
    "shops": [{
      "shop_id": "6029ed05-1d1a-4130-8d66-e19606e3ba9d",
      "location": [-1.2674818, 36.887737]
    }, {
      "shop_id": "0989c7b7-cfa1-47ab-ab59-454f80a3549d",
      "location": [-1.3856235, 36.934776]
    }, {
      "shop_id": "645592ab-6ed4-4ea5-99df-7d6514a429f7",
      "location": [-1.3856055, 36.93496]
    }, {
      "shop_id": "2833916e-bb9c-415e-957f-0b1949a251b0",
      "location": [-1.3855991, 36.93497]
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
      "shop_id": "81118c58-713f-431a-b246-e3bb01627d32",
      "location": [-1.3856022, 36.935066]
    }, {
      "shop_id": "e75181ff-d09f-4da9-93f0-acb4c9c6a90f",
      "location": [-1.3906038, 36.939354]
    }, {
      "shop_id": "11030f9c-928d-48a6-a772-7364ef0713ad",
      "location": [-1.3905171, 36.939735]
    }, {
      "shop_id": "3af59ff7-bda4-442a-94e7-f861441e7029",
      "location": [-1.3905574, 36.940327]
    }, {
      "shop_id": "ca1d36b9-e9f0-4e38-aae5-b9223e5454c2",
      "location": [-1.3898422, 36.940716]
    }, {
      "shop_id": "ff486ff4-1e86-4340-b455-6e5d7abdef88",
      "location": [-1.3908844, 36.94083]
    }, {
      "shop_id": "2e620ff2-47be-45de-8f38-45fd7b9cbe28",
      "location": [-1.3906585, 36.94157]
    }, {
      "shop_id": "e5358f03-4bd9-47bc-938f-450c93dbed2c",
      "location": [-1.3918861, 36.938923]
    }, {
      "shop_id": "0b4d2596-d23a-4c82-850e-515e8ddf5d74",
      "location": [-1.3919681, 36.939335]
    }, {
      "shop_id": "5c1e3cf3-7e80-478c-b7c6-08e6ef8920f1",
      "location": [-1.3922497, 36.941483]
    }, {
      "shop_id": "acee6d38-8882-440f-8630-ebd2332af116",
      "location": [-1.3944837, 36.94232]
    }, {
      "shop_id": "b8b68c2a-0cd0-4565-8a61-14d2f9bbcb25",
      "location": [-1.3940369, 36.942097]
    }, {
      "shop_id": "866e2031-256c-44f4-b539-05049f7d2d21",
      "location": [-1.3947943, 36.940765]
    }, {
      "shop_id": "e601b07d-25e4-407a-93a4-bc8d99a458d5",
      "location": [-1.3948156, 36.94078]
    }, {
      "shop_id": "25aab801-fcbc-4052-b4fe-9a0bcf9638f0",
      "location": [-1.3961384, 36.94136]
    }, {
      "shop_id": "28667dda-48c2-495c-89de-f34427be0f0b",
      "location": [-1.39741289615631, 36.9422836303711]
    }, {
      "shop_id": "30a1263f-ab32-46f4-9940-586965a88679",
      "location": [-1.39747512340546, 36.9434509277344]
    }, {
      "shop_id": "d8737ed1-823a-4097-b5bf-81593bf48cdd",
      "location": [-1.3980376, 36.944084]
    }, {
      "shop_id": "5ab893c2-ef44-488d-9471-7fd8e58cdff5",
      "location": [-1.3973432, 36.944344]
    }, {
      "shop_id": "e5c769e6-812f-4c93-9065-b7e1dfaf5a82",
      "location": [-1.3935149, 36.944088]
    }, {
      "shop_id": "2e9cedbd-2b85-4476-9eff-73b6182ee497",
      "location": [-1.3929431, 36.944096]
    }, {
      "shop_id": "8182676b-a001-4bb6-83fa-f79b22aa65e3",
      "location": [-1.3916675, 36.944027]
    }, {
      "shop_id": "b48ae642-c9e2-4fa9-8d4f-8a042c3fe013",
      "location": [-1.392326, 36.94463]
    }, {
      "shop_id": "0f981c67-dd16-4d33-af96-26f5a0567576",
      "location": [-1.3925892, 36.94467]
    }, {
      "shop_id": "ebde3a44-242b-4cf0-b34b-697948ce4a61",
      "location": [-1.3932458, 36.94493]
    }, {
      "shop_id": "70146f6f-b9e2-4ce6-8fac-24d28691309a",
      "location": [-1.3915075, 36.94523]
    }, {
      "shop_id": "1f9b557e-bd92-4da6-904a-da5151619ad4",
      "location": [-1.3893298, 36.94394]
    }, {
      "shop_id": "9aa1980a-e291-4cd8-bf8a-b90b048861ed",
      "location": [-1.3882914, 36.944096]
    }, {
      "shop_id": "a83898b1-0c5e-4fc9-be0c-085b15bdaf91",
      "location": [-1.3882779, 36.94398]
    }, {
      "shop_id": "f2c7dac3-1bf8-4df0-92f6-95911f04faf5",
      "location": [-1.3873844, 36.94345]
    }, {
      "shop_id": "9777902c-8ff1-477e-ba46-dc680fd8890b",
      "location": [-1.387354, 36.94316]
    }, {
      "shop_id": "1971f431-c851-4daf-854c-fb758c0c4f72",
      "location": [-1.3873757, 36.943142]
    }, {
      "shop_id": "ac0bb7e9-af6e-4e44-a91d-782d1ca2234c",
      "location": [-1.38735055923462, 36.9429321289062]
    }, {
      "shop_id": "1e42a31d-affd-457a-a5f6-2f95f979f856",
      "location": [-1.38837885856628, 36.9421844482422]
    }, {
      "shop_id": "dfa9edf5-add9-439a-a1ff-f1b8050dfbe0",
      "location": [-1.3885818, 36.94205]
    }, {
      "shop_id": "f9c9167e-95d7-4b74-b291-67e29c5e1ce0",
      "location": [-1.388669, 36.94235]
    }, {
      "shop_id": "f5271c8f-325a-436a-bd8e-6ccfcf64d0c2",
      "location": [-1.3823229, 36.938553]
    }, {
      "shop_id": "14aa3f4a-8894-43eb-bd73-5bcee04d0911",
      "location": [-1.3823949, 36.93859]
    }, {
      "shop_id": "a07f722a-def2-4e95-9f00-2ccadfc19608",
      "location": [-1.379198, 36.928345]
    }, {
      "shop_id": "fc242176-8f15-46da-9fb0-98a1b2b7e567",
      "location": [-1.3725085, 36.920906]
    }, {
      "shop_id": "2de79406-eba6-4461-841e-a605a7943a2e",
      "location": [-1.3725076, 36.92086]
    }, {
      "shop_id": "4f780db4-02e0-42f9-b410-b8fa98876738",
      "location": [-1.3724113, 36.920803]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Mutituni",
    "route_id": "e1c1135c-6a99-41b0-939a-78f3dd75ff8a",
    "matrix_info": {
      "DistanceMatrixAPI requests": 471,
      "cache_hit": "75%"
    },
    "distance": "65.36km",
    "path": "n{hH_ilbFjJgPmyC}HGd@oAjA{XvKMDm@DyDb@Z?cBLILy@}UggEwiIw~HkkAZuG|qM`mLkCfB]lAiDd@Yb@yc@rVoAJd@`AqFfAwnC`n@qFaA}C`@u@}An@JNIyF~AENEClfAsgBhU`iAxz@}JliDws@zCqJtEwBfuAaIpHJdCuApAp@lN~MrBtg@",
    "shops": [{
      "shop_id": "0d20112a-05f6-4401-9d14-0b3f5b66a25b",
      "location": [-1.5270222, 37.2626]
    }, {
      "shop_id": "adf73825-9d5c-4dde-a738-5f2a99599ae8",
      "location": [-1.5023113489151, 37.2641868591309]
    }, {
      "shop_id": "736c652e-e845-4425-963c-96149421d4e5",
      "location": [-1.502268, 37.263996]
    }, {
      "shop_id": "16c602db-83b5-48bc-942d-2cc679fa58e7",
      "location": [-1.5018734, 37.263615]
    }, {
      "shop_id": "e53ff0cf-b514-4bc1-9f8c-7811e9f607a1",
      "location": [-1.4977307, 37.261585]
    }, {
      "shop_id": "e2492c13-ba64-4ea0-8115-89408178614e",
      "location": [-1.4976565, 37.26155]
    }, {
      "shop_id": "c0b69fcb-bd35-4012-b044-0620ece5c8cc",
      "location": [-1.4974276, 37.261524]
    }, {
      "shop_id": "29c82c41-c796-41eb-8425-0123280af838",
      "location": [-1.49650466442108, 37.261344909668]
    }, {
      "shop_id": "2801cf58-e7d1-41fe-aa96-7269cf94fbbf",
      "location": [-1.4966357, 37.26134]
    }, {
      "shop_id": "24ab0f0e-9a44-4271-9061-7859e0315385",
      "location": [-1.4961385, 37.26127]
    }, {
      "shop_id": "36a33ed2-7b46-480f-847c-b6ddfb721ceb",
      "location": [-1.4960887, 37.2612]
    }, {
      "shop_id": "69e62966-722d-4ea0-a6ad-312d49c80525",
      "location": [-1.49580478668213, 37.2648696899414]
    }, {
      "shop_id": "7162f2de-9d0f-467c-9ea2-151db313e6fc",
      "location": [-1.4637617, 37.317795]
    }, {
      "shop_id": "89ca4efd-630f-4686-9053-6cd962b9e89a",
      "location": [-1.4126002, 37.33001]
    }, {
      "shop_id": "bb39b7fa-6ef1-414c-902d-b22a96524cd2",
      "location": [-1.412737, 37.331398]
    }, {
      "shop_id": "200a6f95-05b2-48d6-9491-a67ccf178a77",
      "location": [-1.4874451, 37.26259]
    }, {
      "shop_id": "63d984f9-a51a-415d-9a50-b531076daf3a",
      "location": [-1.4867489, 37.262074]
    }, {
      "shop_id": "d9c63373-92c3-4ee8-b747-7da141dded5a",
      "location": [-1.4865987, 37.26168]
    }, {
      "shop_id": "d1ebddd4-6c9b-4570-85ed-0bcf97fc3214",
      "location": [-1.48574995994568, 37.2614936828613]
    }, {
      "shop_id": "0c0f8a64-7d29-48a4-9744-63f347840f94",
      "location": [-1.4856197, 37.26131]
    }, {
      "shop_id": "92f145ee-1af3-40c5-a5f8-c6e3249c79a7",
      "location": [-1.4797312, 37.257526]
    }, {
      "shop_id": "d41a4eee-72bd-4323-b5c0-b2256cc462a6",
      "location": [-1.4793285, 37.257465]
    }, {
      "shop_id": "0b5f4e8b-0977-4718-92ed-f3a7515169de",
      "location": [-1.4795167, 37.257137]
    }, {
      "shop_id": "4769757d-14ba-452f-b048-860653ce4c1d",
      "location": [-1.4783114, 37.256783]
    }, {
      "shop_id": "9fd19418-60d5-424d-a105-8b8a8608d8f2",
      "location": [-1.4553083, 37.249252]
    }, {
      "shop_id": "3c33166e-cf53-484e-bc6d-bcd97ce73351",
      "location": [-1.4540998, 37.249577]
    }, {
      "shop_id": "e8c89278-bfbf-485e-86cc-6ec213dbd10e",
      "location": [-1.4533072, 37.249413]
    }, {
      "shop_id": "56c3b217-abed-40e7-a667-a19a985efee5",
      "location": [-1.4530425, 37.249878]
    }, {
      "shop_id": "1110b278-35ee-4d07-8f2f-bb3452b177d2",
      "location": [-1.45327544212341, 37.2498207092285]
    }, {
      "shop_id": "713462d3-2643-4fe5-86ec-05a28a299e3f",
      "location": [-1.4533613, 37.249866]
    }, {
      "shop_id": "812390b1-c188-4023-9472-9af3e42aa0f4",
      "location": [-1.4521102, 37.249393]
    }, {
      "shop_id": "8ae01ae0-ef3d-44e8-a4c5-f649980d2c29",
      "location": [-1.4520779, 37.24931]
    }, {
      "shop_id": "5f80e20a-cff9-416a-ba23-e286ee4baf0c",
      "location": [-1.4520493, 37.249325]
    }, {
      "shop_id": "5869868c-d8fe-4a11-ae70-25ea610fab5c",
      "location": [-1.463476, 37.26607]
    }, {
      "shop_id": "65694945-54fa-4096-95b6-436a1c94efed",
      "location": [-1.4670485, 37.254223]
    }, {
      "shop_id": "cbfdcd4f-9f8f-488b-8561-142c68ee4fab",
      "location": [-1.4766227, 37.25613]
    }, {
      "shop_id": "7e3e6d70-d07e-4ec6-aa1f-5016cccb4018",
      "location": [-1.5038949, 37.264572]
    }, {
      "shop_id": "4f2f8638-388f-4f6b-b24c-1980cadff5ea",
      "location": [-1.5046734, 37.266415]
    }, {
      "shop_id": "2547eb0f-4e20-4235-b0aa-3f6f70b4d216",
      "location": [-1.5057421, 37.267025]
    }, {
      "shop_id": "0cc10fd2-1fac-4d51-89cd-8f487c5afcdb",
      "location": [-1.5195359, 37.268627]
    }, {
      "shop_id": "b9604ff7-c615-4c97-aa74-9540bbbeb376",
      "location": [-1.5210745, 37.268574]
    }, {
      "shop_id": "f2a70ab1-3756-4866-afb4-889385acadaf",
      "location": [-1.5217419, 37.269]
    }, {
      "shop_id": "d75779c5-af95-4c3c-9904-eddbd39a4335",
      "location": [-1.5221478, 37.26875]
    }, {
      "shop_id": "2839dc16-bad6-418d-969d-4afc2c90fdd9",
      "location": [-1.5246165, 37.266354]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ruaka 1",
    "route_id": "6df6b35d-fe12-4c80-84ab-5ac841d21bbe",
    "matrix_info": {
      "DistanceMatrixAPI requests": 96,
      "cache_hit": "83%"
    },
    "distance": "77.48km",
    "path": "`ijF{`p_FpPjHvCuGbIsHjFaGr|a@jwJowa@cuI{]x_AcLcLgAt@kBxIeEde@iOpi@tSe}@F@DC{@cCxAm@b@{AdYi|@{HgEd@_@lHi@yIeD@AeKkO",
    "shops": [{
      "shop_id": "11d0d6fa-34fb-47e4-8817-bed0975222dc",
      "location": [-1.2076216, 36.786003]
    }, {
      "shop_id": "ad69f5b6-f137-49b3-b77d-bb008fa157ca",
      "location": [-1.20837831497192, 36.7873916625977]
    }, {
      "shop_id": "2ed47dc7-12e5-4f0c-9e02-eac1ffcbd3a1",
      "location": [-1.2100002, 36.788933]
    }, {
      "shop_id": "e4fc51eb-d2cd-4b2a-99d9-18f66fc07dd9",
      "location": [-1.2111752, 36.790222]
    }, {
      "shop_id": "e284db7c-f706-4fbd-b3d5-f11560cb29ce",
      "location": [-1.39, 36.73]
    }, {
      "shop_id": "c661be5b-8c34-49e0-b58a-470a1956fbfc",
      "location": [-1.211998, 36.78474]
    }, {
      "shop_id": "650e77fe-338c-4612-9c2c-c142b82c590d",
      "location": [-1.2070644, 36.77437]
    }, {
      "shop_id": "e85dffaa-0e10-48f6-8509-b144dfa92d19",
      "location": [-1.2049599, 36.776474]
    }, {
      "shop_id": "ac4f3acc-ce0f-4550-8823-ce751066b601",
      "location": [-1.2045954, 36.776196]
    }, {
      "shop_id": "60897791-c181-48fc-98bd-c78d936ef925",
      "location": [-1.2040613, 36.77447]
    }, {
      "shop_id": "59ad6711-5911-41fc-8791-aab4cdbed5ab",
      "location": [-1.2030717, 36.768364]
    }, {
      "shop_id": "2048041b-535f-4afb-a7c0-8e89e957aed3",
      "location": [-1.20045614242554, 36.761547088623]
    }, {
      "shop_id": "2c22ef1a-9eb3-41c4-a535-c78f45afbfea",
      "location": [-1.2037702, 36.771496]
    }, {
      "shop_id": "a8f2926f-f19e-4d9e-b159-629544a05504",
      "location": [-1.2038132, 36.77149]
    }, {
      "shop_id": "fddba87a-555a-4f0e-a09f-23aa65755088",
      "location": [-1.203841, 36.77151]
    }, {
      "shop_id": "4b3135c9-bf4d-40b3-8f30-83e9ec525759",
      "location": [-1.2035375, 36.77217]
    }, {
      "shop_id": "c57a7230-42be-4fc6-a0c8-21fa4b9247f5",
      "location": [-1.203995, 36.7724]
    }, {
      "shop_id": "5bae22d6-7d9c-4aef-ad94-baa4ecfed2bd",
      "location": [-1.2041715, 36.77286]
    }, {
      "shop_id": "7b9f2785-e5df-45ae-980b-96ea3b4efdc4",
      "location": [-1.2083598, 36.78267]
    }, {
      "shop_id": "96b3de5e-a812-4cf1-b15e-e22095cb24dc",
      "location": [-1.2067806, 36.783665]
    }, {
      "shop_id": "8bac62ce-e2bb-41b4-870a-3a60d8094652",
      "location": [-1.2069721, 36.783833]
    }, {
      "shop_id": "36e1f963-110d-48e2-b780-0e2c4f711468",
      "location": [-1.2084779, 36.784035]
    }, {
      "shop_id": "a68309e6-bfa8-4669-971d-62dc1493b86c",
      "location": [-1.2067536, 36.784866]
    }, {
      "shop_id": "1f1266f6-e5a9-4c59-b2d7-08e859440952",
      "location": [-1.206757, 36.78488]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Makongeni",
    "route_id": "8e162a5b-a70d-46d4-ba8b-e14649757164",
    "matrix_info": {
      "DistanceMatrixAPI requests": 634,
      "cache_hit": "80%"
    },
    "distance": "32.81km",
    "path": "l~mEa_raFc@`VYzQcFvFrEt@uBdH~@qAFERWz@jAgv@oO{ObaACeAxPmIj@XfFCzE`Bn@DpK~m@aLfGtFy@~Xav@sEgEaCbCvC_G@kGyEm@Nm@bS?bZhEhCiLkK}\\lQkQhC}RG{DU?t@CeGK}OUmIwxBr@AJ@xDK{S`AbGc]gBmIzv@{gCaZ|NyQyJeFuSbBhEpFuKuQ}Q_M{h@fM|[m@jPjCvLePhT`QxoH",
    "shops": [{
      "shop_id": "ae3588cf-b290-408c-8776-f2fd2768a3d6",
      "location": [-1.0595738, 37.121437]
    }, {
      "shop_id": "e0e24db5-6514-4ecd-bc6f-43cd827d7a4e",
      "location": [-1.059441, 37.118416]
    }, {
      "shop_id": "43f91c01-ee72-4b0d-9958-7b829a506048",
      "location": [-1.0582957, 37.117176]
    }, {
      "shop_id": "cf4fc1c8-02d7-48cd-ad14-276ed4d48325",
      "location": [-1.05935728549957, 37.1169090270996]
    }, {
      "shop_id": "efa4b31d-c7f6-4b64-b72a-905adce16d97",
      "location": [-1.0587711, 37.115437]
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
      "shop_id": "7989ed74-b035-44f1-aa4b-39ed45f32453",
      "location": [-1.05068731307983, 37.1182556152344]
    }, {
      "shop_id": "169cd4cf-22f2-492d-8afb-511bb7ac7565",
      "location": [-1.0479869, 37.107685]
    }, {
      "shop_id": "a9ad584f-0c41-43e8-9f00-6e02dcf2bec3",
      "location": [-1.0479712, 37.108025]
    }, {
      "shop_id": "f57dc438-3bd9-467f-ab54-18e66d0b8172",
      "location": [-1.0508214, 37.109695]
    }, {
      "shop_id": "5372c7f6-184f-465f-b2ce-555249b29822",
      "location": [-1.0510437, 37.10957]
    }, {
      "shop_id": "01ffdbd7-3352-4b0d-b0b5-d2cabf446328",
      "location": [-1.0521992, 37.109585]
    }, {
      "shop_id": "5b182f60-5433-44fb-a878-480db85baccd",
      "location": [-1.0533031, 37.1091]
    }, {
      "shop_id": "70df5bf1-7831-4fc1-851f-d36dd9a4d4c8",
      "location": [-1.0535363, 37.10907]
    }, {
      "shop_id": "520819d4-bab2-448e-978a-a986e99fe7d6",
      "location": [-1.0555478, 37.101555]
    }, {
      "shop_id": "86b96ac4-9ec9-40e1-9b5c-5472e4718aac",
      "location": [-1.0534616, 37.10023]
    }, {
      "shop_id": "fbf31cca-312b-4986-aa49-e0216d0e47d4",
      "location": [-1.0546916, 37.10052]
    }, {
      "shop_id": "ffceb186-245f-4b55-8fcf-fd2b69e0e854",
      "location": [-1.0588496, 37.10933]
    }, {
      "shop_id": "598cdbc9-a9cb-4e1d-aa42-89de7bea863c",
      "location": [-1.0577922, 37.110325]
    }, {
      "shop_id": "a78b5b60-b0ec-4db5-89fd-c9405413e43b",
      "location": [-1.0571418, 37.109665]
    }, {
      "shop_id": "6aee9ef9-6877-4b03-a906-495346deadc4",
      "location": [-1.0579016, 37.110954]
    }, {
      "shop_id": "c0a1dd8b-5453-4ac8-ae63-237933d4acdb",
      "location": [-1.0579138, 37.112286]
    }, {
      "shop_id": "34de7e2c-dfc0-4bca-9596-68f77453d8bb",
      "location": [-1.0568166, 37.11252]
    }, {
      "shop_id": "09c8bc18-2a9f-44ea-99e3-0c31e5e9950a",
      "location": [-1.0568992, 37.112747]
    }, {
      "shop_id": "cc2b710a-d6cf-4a85-9814-eb5404ddd33d",
      "location": [-1.0601155, 37.11275]
    }, {
      "shop_id": "e4cf8c1c-c614-4dd9-991d-7ec34d9742d2",
      "location": [-1.0644562, 37.111736]
    }, {
      "shop_id": "634829d2-c842-49c9-98dc-70108beb5395",
      "location": [-1.0651495, 37.113873]
    }, {
      "shop_id": "2aeaca01-9b5a-4b11-80dc-032c8dd196ad",
      "location": [-1.0631682, 37.118664]
    }, {
      "shop_id": "414e0705-2556-44e2-a53c-f5810799dbe3",
      "location": [-1.0661168, 37.1216]
    }, {
      "shop_id": "71d316c5-1a34-4729-b9e1-4006f0328a5c",
      "location": [-1.0668143, 37.124786]
    }, {
      "shop_id": "ae3e7dff-59f7-4c08-a4ef-dc60a28498ce",
      "location": [-1.0667678, 37.125725]
    }, {
      "shop_id": "f17e18b5-f1c1-4d49-bca2-2b1e1bb6468a",
      "location": [-1.066657, 37.12573]
    }, {
      "shop_id": "b86973d4-1689-43c8-8c94-5877c7bb4692",
      "location": [-1.0669307, 37.125748]
    }, {
      "shop_id": "3d053a9a-35b2-499a-b463-8bd50309d85e",
      "location": [-1.0656157, 37.125813]
    }, {
      "shop_id": "2e7434fe-70c3-4f09-9f85-da5918267e89",
      "location": [-1.062913, 37.12592]
    }, {
      "shop_id": "a56be73b-989e-414d-9290-2f364576638d",
      "location": [-1.0612426, 37.1454]
    }, {
      "shop_id": "9cb851f3-dbc1-40a6-a484-f64869171ce6",
      "location": [-1.06149792671204, 37.1454086303711]
    }, {
      "shop_id": "dc1c6d63-e4d8-40b3-8e84-f14aae68a725",
      "location": [-1.06156075000763, 37.1453971862793]
    }, {
      "shop_id": "12abd896-59e4-4a18-b618-97844e7d25be",
      "location": [-1.0624903, 37.14546]
    }, {
      "shop_id": "34828679-7de7-45d6-a976-64958775f75b",
      "location": [-1.0591494, 37.145126]
    }, {
      "shop_id": "d468a3ba-3eeb-4dce-b87e-930f6e0258cf",
      "location": [-1.0604527, 37.14995]
    }, {
      "shop_id": "8f097ea2-b16d-4da9-ba4f-f3a2939df1b7",
      "location": [-1.0599259, 37.151615]
    }, {
      "shop_id": "eeddb60e-4167-4a59-af1b-3e058110a73f",
      "location": [-1.0688667, 37.173515]
    }, {
      "shop_id": "3e3931a8-7065-4356-9ad5-8a7c1db4ec4b",
      "location": [-1.0645375, 37.170967]
    }, {
      "shop_id": "74138cb2-c3c0-40b5-9e01-7cfe1e3dcc59",
      "location": [-1.0615317, 37.172863]
    }, {
      "shop_id": "0a95f079-ebde-4b1a-91b9-d4b898d835e9",
      "location": [-1.0603815, 37.176167]
    }, {
      "shop_id": "00aff304-e35b-493a-8968-df0b20243000",
      "location": [-1.0608764, 37.175163]
    }, {
      "shop_id": "30dd4cca-f937-438e-932d-eb978f64ec45",
      "location": [-1.0620923, 37.177193]
    }, {
      "shop_id": "193e0dcf-0254-4d55-ae25-886f3b767854",
      "location": [-1.0590979, 37.18022]
    }, {
      "shop_id": "fd3afb51-bc12-430b-a89f-070f87bf685b",
      "location": [-1.0568573, 37.18692]
    }, {
      "shop_id": "9e8a745a-c4a7-4db9-94ca-8d2dd3c0ed58",
      "location": [-1.059144, 37.182293]
    }, {
      "shop_id": "2652a813-a3d9-4b8e-af7b-a2bf158c0a9f",
      "location": [-1.0589108, 37.179512]
    }, {
      "shop_id": "4c433868-a649-45bc-bad4-e5263ee76488",
      "location": [-1.0596074, 37.17731]
    }, {
      "shop_id": "1501d5c6-f98c-4c74-bc10-5d6759a8d8d1",
      "location": [-1.0568634, 37.173897]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ndonyo",
    "route_id": "ca400c53-ca8b-4d8e-bbc1-d14a832a02a7",
    "matrix_info": {
      "DistanceMatrixAPI requests": 495,
      "cache_hit": "76%"
    },
    "distance": "55.08km",
    "path": "`z|Fedx_Fi`CdhScFrAtFtHBTExFRjDJlAt@Hu@~@lDfu@F?OEE?A~Cj@rARpDpHvPe@pZxCbRuBfNTxC_DxZWn@wAtBi]~yBlgDcZ{fAssAuRnN?AE@ACM@oAJ}HbBeAz@bHgMl@OiAyP@mBma@imClIwDqIyGxBuGiGiHJ}DtZel@ryA}yR",
    "shops": [{
      "shop_id": "fa3d67fe-5a1c-48cc-846c-56bf1238e24f",
      "location": [-1.2790015, 36.72512]
    }, {
      "shop_id": "e1ad7ddb-5823-4d37-923f-075d7f50b1cd",
      "location": [-1.277863, 36.724697]
    }, {
      "shop_id": "4336f03b-9ebe-4f9a-a2be-964ee3777c78",
      "location": [-1.2790909, 36.723145]
    }, {
      "shop_id": "2eb1f357-2342-4c93-a543-797a3f19f478",
      "location": [-1.2791086, 36.72304]
    }, {
      "shop_id": "ceb5cbac-2d9e-49f5-9efa-df9625540d72",
      "location": [-1.2790834, 36.721794]
    }, {
      "shop_id": "fea378e4-737d-407d-80b0-fc70de8dea77",
      "location": [-1.2791822, 36.720932]
    }, {
      "shop_id": "be02ba35-5f81-4926-b240-92bbd9efb900",
      "location": [-1.2792375, 36.72054]
    }, {
      "shop_id": "6c8c224c-e62e-43b2-9c7b-3d314ac8d725",
      "location": [-1.2795092, 36.72049]
    }, {
      "shop_id": "e2c94174-b4f4-47d3-9ac5-a51c02935877",
      "location": [-1.27924144268036, 36.7201690673828]
    }, {
      "shop_id": "4a366dfd-0c03-4ecf-9443-803170f2b38b",
      "location": [-1.2801061, 36.71149]
    }, {
      "shop_id": "f92d9cfa-0357-4ef3-aea0-5056aa88abf5",
      "location": [-1.28014624118805, 36.7114868164062]
    }, {
      "shop_id": "40bd049f-8a06-4507-b810-817563666af8",
      "location": [-1.28007078170776, 36.7115249633789]
    }, {
      "shop_id": "3b1aba43-b9d0-4e56-9096-03132ba31e91",
      "location": [-1.28003859519958, 36.7115211486816]
    }, {
      "shop_id": "55b91da8-ba54-4e40-a5a5-5ab0538a4cf0",
      "location": [-1.2800344, 36.71072]
    }, {
      "shop_id": "ae009f3f-5c96-46f3-b0cd-db5ae01b8be8",
      "location": [-1.2802503, 36.7103]
    }, {
      "shop_id": "980bb5f1-5b52-4617-9625-d60591b038ae",
      "location": [-1.2803525, 36.70941]
    }, {
      "shop_id": "31684a5f-80a0-4eff-b89b-156fcefe7488",
      "location": [-1.2818754, 36.706566]
    }, {
      "shop_id": "0fd9e5b3-de07-471b-adbe-8cad53b70a0c",
      "location": [-1.2816917, 36.702156]
    }, {
      "shop_id": "02e13144-cc99-4c47-88b8-89660bdb35ae",
      "location": [-1.2824615, 36.699104]
    }, {
      "shop_id": "78a78815-8c38-453d-a554-abb44d2ddc5b",
      "location": [-1.28187036514282, 36.696662902832]
    }, {
      "shop_id": "32741fd9-8c52-4749-85ec-9d952962f17f",
      "location": [-1.2819825, 36.695892]
    }, {
      "shop_id": "42c314e1-7d60-4f21-a397-e21e70c4b72c",
      "location": [-1.2811781167984, 36.6914367675781]
    }, {
      "shop_id": "723ffaac-27e4-4c52-8eaa-35a7b18e0915",
      "location": [-1.2810594, 36.691196]
    }, {
      "shop_id": "5ec139f6-dd59-42a0-bc55-3917451ad81d",
      "location": [-1.2806202, 36.690613]
    }, {
      "shop_id": "9e896138-3f92-4076-831a-5aab94bf22ab",
      "location": [-1.2757741, 36.67093]
    }, {
      "shop_id": "7735e2f0-107e-4641-bb88-ab7b250a11e4",
      "location": [-1.3027171, 36.67527]
    }, {
      "shop_id": "bd5beb32-516a-471c-8400-8f986204a957",
      "location": [-1.2912227, 36.688812]
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
      "shop_id": "bc157567-d160-4a94-b0ad-ea74f5d2e353",
      "location": [-1.28756499290466, 36.6862754821777]
    }, {
      "shop_id": "fcc199e0-9b16-4c8b-b68e-a72dc4ef33f6",
      "location": [-1.285966, 36.685776]
    }, {
      "shop_id": "8b7bb11b-7c23-4257-a0a5-fa416e54c571",
      "location": [-1.2856196, 36.685482]
    }, {
      "shop_id": "bbdc94ca-8aaf-4f55-8b7a-4848d65c1ac6",
      "location": [-1.2870778, 36.687756]
    }, {
      "shop_id": "d7f94617-b9f0-42f3-a8e7-c95ceb7663a7",
      "location": [-1.2873051, 36.687843]
    }, {
      "shop_id": "27d664b8-d48e-42d2-90f5-7a80a2d1cdf4",
      "location": [-1.2869351, 36.69069]
    }, {
      "shop_id": "53a58040-803d-439a-ba05-d33474f0d019",
      "location": [-1.2869465, 36.691242]
    }, {
      "shop_id": "9d107159-ac94-4289-8596-9c78b9efc077",
      "location": [-1.2814422, 36.71401]
    }, {
      "shop_id": "310bbd18-73a1-49ad-882c-a7bb09876868",
      "location": [-1.283112, 36.714928]
    }, {
      "shop_id": "5c955057-f126-4203-865b-22f6b8977aad",
      "location": [-1.281419, 36.716343]
    }, {
      "shop_id": "71950f62-cab5-43bc-8be7-4400f9ed671e",
      "location": [-1.2820297, 36.71773]
    }, {
      "shop_id": "a397b320-b321-484a-a54f-7e169c41ab82",
      "location": [-1.2807031, 36.71922]
    }, {
      "shop_id": "54ee9d10-f75b-433e-94ac-87987d73b1f3",
      "location": [-1.2807602, 36.72017]
    }, {
      "shop_id": "0e831f62-a801-4647-9c6c-1ff764ebaab7",
      "location": [-1.2851914, 36.727398]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Nairobi West/Madaraka",
    "route_id": "46f80ee6-fbd3-45a7-827f-a71e198bac9a",
    "matrix_info": {
      "DistanceMatrixAPI requests": 275,
      "cache_hit": "92%"
    },
    "distance": "11.37km",
    "path": "tz|Fmdx_Fvb@~RPz@`As@RWBAFjAEZh@pDVzC@@FrDDDNjB`BoHROKaHMa@PANALA{AoDo@j@xIe@~GaAP@Hm@n@hDl@xBiD~F{Cb@uCuB@fCC@?EVBi@J?RR~@GTIR`@\\J?@BFGGWNrAJVC|@TLaDh@yDj`@@Nbc@~^_RWAjBeDyCkFwM_GypAkW{AuAvG_KqO",
    "shops": [{
      "shop_id": "14a9bd4e-f724-4856-b2c7-8ab8c369bd20",
      "location": [-1.3055063, 36.825825]
    }, {
      "shop_id": "ef071e3a-0d4f-4768-bd4c-6205159c9f88",
      "location": [-1.3055989, 36.825527]
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
      "shop_id": "fe2342e7-617a-4b37-9f13-05747fcc1394",
      "location": [-1.3060879, 36.82554]
    }, {
      "shop_id": "0c5ba777-2e23-4672-90a9-6211e50df94d",
      "location": [-1.3060597, 36.8254]
    }, {
      "shop_id": "74dce1dc-c162-4756-b025-cc839d533bc8",
      "location": [-1.3062747, 36.824512]
    }, {
      "shop_id": "00259c7d-328f-4b09-9a41-5d61f2fe4ac3",
      "location": [-1.3063931, 36.82373]
    }, {
      "shop_id": "356dc356-5511-4105-b6ac-db4c4bbc65c9",
      "location": [-1.3064004, 36.823723]
    }, {
      "shop_id": "b2d01162-df59-4803-8de9-ddba7374ef3c",
      "location": [-1.3064395, 36.822823]
    }, {
      "shop_id": "f2c80757-c7e0-464d-b9e2-41ca472493e8",
      "location": [-1.3064713, 36.82279]
    }, {
      "shop_id": "2da12ffe-02f3-4c26-bb47-723ad6a5a83c",
      "location": [-1.3065538, 36.822254]
    }, {
      "shop_id": "47a91658-4bc4-4df9-9582-c67c6abfcfe5",
      "location": [-1.3070352, 36.823765]
    }, {
      "shop_id": "3bf21544-b642-4368-82e6-3167a891f7da",
      "location": [-1.3071365, 36.823853]
    }, {
      "shop_id": "d24ba592-b57f-4c84-9fba-2849d50445c9",
      "location": [-1.3070756, 36.825302]
    }, {
      "shop_id": "4eb6cc85-e0ad-4342-b9da-427e2f6a2206",
      "location": [-1.3070143, 36.82547]
    }, {
      "shop_id": "aaa67894-9acf-4384-81ef-3cc8cd645ac1",
      "location": [-1.3071026802063, 36.8254814147949]
    }, {
      "shop_id": "49b34ed0-2602-4bbe-9422-29f46ac99126",
      "location": [-1.3071808, 36.82549]
    }, {
      "shop_id": "c7f10a7b-3c0e-40e8-9b2b-54fc5b6f4c5e",
      "location": [-1.30724847316742, 36.8255004882812]
    }, {
      "shop_id": "2999ac79-6840-4b82-98ef-6d5bd6c9f405",
      "location": [-1.30678725242615, 36.8263816833496]
    }, {
      "shop_id": "98214fe0-6ec7-44f8-8b5a-615709145484",
      "location": [-1.3065507, 36.826157]
    }, {
      "shop_id": "91bf90aa-8b43-4827-a75a-29a89286afe8",
      "location": [-1.3082782, 36.82635]
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
      "shop_id": "a5d7e0b1-e1e9-44ba-a678-79c976973d6e",
      "location": [-1.30948317050934, 36.8241577148438]
    }, {
      "shop_id": "bd97bf59-783d-44fe-99d3-ceaba911d790",
      "location": [-1.3086973, 36.82398]
    }, {
      "shop_id": "541cdf9a-6413-4ed6-89ff-dd42790979fa",
      "location": [-1.30795359611511, 36.8245658874512]
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
      "shop_id": "2a058193-2162-4652-93b5-a8fa62c35dc3",
      "location": [-1.3082424, 36.822647]
    }, {
      "shop_id": "b9370aa9-1a11-43a4-ab47-025b662090f5",
      "location": [-1.3082216, 36.82234]
    }, {
      "shop_id": "272d326e-7520-40c4-aa98-0c44ac77a949",
      "location": [-1.3083295, 36.822273]
    }, {
      "shop_id": "cca0625c-1859-4b21-afdc-e63313c19b8e",
      "location": [-1.3075184, 36.82206]
    }, {
      "shop_id": "fb3d66d6-730f-4026-bf53-1946cb7306f0",
      "location": [-1.3065933, 36.816723]
    }, {
      "shop_id": "1d187dc0-a8da-4fd1-ac3a-aca73d391f1b",
      "location": [-1.3066003, 36.81664]
    }, {
      "shop_id": "39157067-2bcc-4c2b-b14c-109cf4e5f6e4",
      "location": [-1.31237959861755, 36.8115158081055]
    }, {
      "shop_id": "189abbb5-b207-4108-9088-d4c7535a4fe6",
      "location": [-1.3093414, 36.81164]
    }, {
      "shop_id": "cc17550f-582f-44a6-9915-159c2f366676",
      "location": [-1.3093292, 36.811104]
    }, {
      "shop_id": "839f138d-0ce1-4cee-a7ef-9b7df70d1979",
      "location": [-1.3084993, 36.811867]
    }, {
      "shop_id": "9aa2cdcb-54c5-4145-8937-4d700796ac4e",
      "location": [-1.3073196, 36.81423]
    }, {
      "shop_id": "65797457-a762-47a0-bee3-34b2bca38265",
      "location": [-1.3060417, 36.827324]
    }, {
      "shop_id": "a406442c-d0d4-4c6c-8626-c0c405b57aa3",
      "location": [-1.3021389, 36.82778]
    }, {
      "shop_id": "2418ce40-e6ca-4143-bd83-abfea8c1bab7",
      "location": [-1.3017052, 36.82638]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Lower Rongai",
    "route_id": "36ed0ad7-a24e-45ef-97d6-b643ad4d9095",
    "matrix_info": {
      "DistanceMatrixAPI requests": 772,
      "cache_hit": "79%"
    },
    "distance": "32.77km",
    "path": "zipGwtf_Feu@ikDg@g@b@}@FwA?K@?@AE@L?e@iJRg@OU^yFCUCGDmCBKvEn@rA`@bEB_E}^p@oa@iAtB@EjFrCAf@?Vh@Xj@f@|InHfDvAJIz`@i~CDG`AeBNeEHcAh@P{@{BpCy@fBJp@`@L]rAv@{CgDtAiE`oA|B~n@tjArK|JrAvAs_CuhA_AuAACm@DUa@gBqAaDdCEGm@tEj@`hC~@kC{YxzAkD`tD",
    "shops": [{
      "shop_id": "72ab9fc4-ca54-4b7b-9234-8f0d480b6db3",
      "location": [-1.39083325862885, 36.7670516967773]
    }, {
      "shop_id": "607eb7b2-5eb5-4358-b88a-9b09d53d6bd8",
      "location": [-1.3906329, 36.767246]
    }, {
      "shop_id": "751c24fa-bbcd-460a-aacb-3e4751c84a88",
      "location": [-1.3908107, 36.76756]
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
      "shop_id": "7818b1c2-cc65-4576-8943-f4cc5de066f2",
      "location": [-1.3908421, 36.768063]
    }, {
      "shop_id": "45582810-aa23-4504-99e7-37027d3a10db",
      "location": [-1.3909146, 36.768063]
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
      "shop_id": "6b510d8c-837e-44b1-a6f4-7d308cea07fc",
      "location": [-1.3908955, 36.771435]
    }, {
      "shop_id": "8a579287-4f05-4e18-8488-872dc2121d51",
      "location": [-1.3908751, 36.771538]
    }, {
      "shop_id": "9b278a9b-40d0-4849-8a0c-b476709c0fa1",
      "location": [-1.3908567, 36.77158]
    }, {
      "shop_id": "b2b4aa56-7279-4fbd-9617-679c262d0af6",
      "location": [-1.39089286327362, 36.7722854614258]
    }, {
      "shop_id": "f46114a6-50ea-49e3-adc7-f86b4d3b3631",
      "location": [-1.39090526103973, 36.772346496582]
    }, {
      "shop_id": "f00a0821-780b-4e2a-bf41-0cd3554fb7f9",
      "location": [-1.3919868, 36.772106]
    }, {
      "shop_id": "816ab24e-80f5-4c17-9359-f6aed072bd16",
      "location": [-1.3924147, 36.771942]
    }, {
      "shop_id": "63dcab65-3cc6-4a2b-9638-d1f84bf7be99",
      "location": [-1.3933902, 36.771923]
    }, {
      "shop_id": "eaeb2f13-82a0-4d4c-8f02-6c6be073a90d",
      "location": [-1.392427, 36.77703]
    }, {
      "shop_id": "1c4bdd6c-beff-49e9-8fc7-8be0d4fb2dd2",
      "location": [-1.3926808, 36.78255]
    }, {
      "shop_id": "a62c2496-106a-49b1-aba1-e778d5826c8c",
      "location": [-1.3923109, 36.781963]
    }, {
      "shop_id": "9ff7d841-e1db-42a3-8aaf-cb88badbacf7",
      "location": [-1.3923209, 36.78199]
    }, {
      "shop_id": "f74a05d9-f8ab-449a-a2ab-b5ea24a08e5d",
      "location": [-1.3934951, 36.781246]
    }, {
      "shop_id": "83c51e50-e499-4232-b5aa-65b001137be0",
      "location": [-1.3934941, 36.78105]
    }, {
      "shop_id": "f245fc8f-55a0-4efb-945d-919443386828",
      "location": [-1.393485, 36.780926]
    }, {
      "shop_id": "ded684ef-e899-4445-828f-273f2a4ec1d1",
      "location": [-1.393701, 36.780804]
    }, {
      "shop_id": "f5dc5633-1450-4c2b-8a54-40d8629315c0",
      "location": [-1.3939229, 36.7806]
    }, {
      "shop_id": "3eef7207-1534-49e8-92d7-b391da5f05f3",
      "location": [-1.3956728, 36.77908]
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
      "shop_id": "bec31c57-6af3-46df-9daa-3f0a19964fe7",
      "location": [-1.402351, 36.804726]
    }, {
      "shop_id": "370539dd-883d-460a-9182-221a6d4b10b5",
      "location": [-1.4024343, 36.80572]
    }, {
      "shop_id": "a9aa9aac-240a-4291-93a6-60cd3a0e42cf",
      "location": [-1.4024767, 36.806065]
    }, {
      "shop_id": "3060fd9f-f0ff-483f-83d4-ff15fc87887d",
      "location": [-1.402689, 36.805965]
    }, {
      "shop_id": "0cab504d-cbfe-4de1-a9dd-894fb62c09ee",
      "location": [-1.4023939, 36.806587]
    }, {
      "shop_id": "190f6207-7c4f-4caa-8100-6a3d264080cb",
      "location": [-1.40312385559082, 36.8068809509277]
    }, {
      "shop_id": "4a1c89a2-6511-4c84-aad4-c6c2577a2cae",
      "location": [-1.4036368, 36.806816]
    }, {
      "shop_id": "0c676b73-9e43-411a-95d5-af12dba005aa",
      "location": [-1.4038883, 36.806652]
    }, {
      "shop_id": "7d10a1cb-3426-489d-8438-547e991506d3",
      "location": [-1.4039637, 36.806797]
    }, {
      "shop_id": "e69ad305-3fa4-4a58-8098-08207709065a",
      "location": [-1.404378, 36.80652]
    }, {
      "shop_id": "2fd665ca-7ff5-4687-953c-b7a35127929f",
      "location": [-1.40359914302826, 36.8073577880859]
    }, {
      "shop_id": "a74ca557-793f-47aa-bdc3-f14ad020cda7",
      "location": [-1.4040265, 36.808372]
    }, {
      "shop_id": "83b75d62-95c3-470a-b698-c6988501042b",
      "location": [-1.4168377, 36.807735]
    }, {
      "shop_id": "77a46535-ae75-431b-a46c-ac40bea0cb3a",
      "location": [-1.4245152, 36.795628]
    }, {
      "shop_id": "da38f6f9-97cf-4382-9948-33e5a36967b4",
      "location": [-1.42653703689575, 36.7937202453613]
    }, {
      "shop_id": "7eb81623-a2c5-4908-b97d-d9836271f3c7",
      "location": [-1.4269634, 36.79328]
    }, {
      "shop_id": "d9d96332-6408-49ca-a4d9-c0de2fe6aff1",
      "location": [-1.40637564659119, 36.8050651550293]
    }, {
      "shop_id": "100f15c8-cca2-42ce-9f99-0d5268635361",
      "location": [-1.40605878829956, 36.8055000305176]
    }, {
      "shop_id": "fc5b8e37-11ab-48d6-9e2a-495c4453e94f",
      "location": [-1.40604686737061, 36.8055191040039]
    }, {
      "shop_id": "0932df2b-7d39-435e-a01f-967d1f2413a2",
      "location": [-1.405822, 36.805492]
    }, {
      "shop_id": "c1c5994f-a2a4-4ef9-bb23-e3b489412c82",
      "location": [-1.405714, 36.805664]
    }, {
      "shop_id": "47e65b29-8e0b-4139-8bee-cf4e4631bea0",
      "location": [-1.4051927, 36.806072]
    }, {
      "shop_id": "8bc1a469-4b07-4429-bafe-def62fef80a9",
      "location": [-1.4043788, 36.805397]
    }, {
      "shop_id": "5c4f68fc-dae2-4a60-8b54-ba064a0117e1",
      "location": [-1.4043471, 36.805443]
    }, {
      "shop_id": "77a1f1dd-8629-44b6-8de9-03f613393490",
      "location": [-1.4041191, 36.80437]
    }, {
      "shop_id": "b3df8e23-76f4-4bff-a4a9-75987e86bd85",
      "location": [-1.4043448, 36.78244]
    }, {
      "shop_id": "5577b5bb-e388-40ad-b8df-5f0567a9bbaa",
      "location": [-1.4046583, 36.78314]
    }, {
      "shop_id": "86d1a156-b7ec-452e-9dc4-728db7969162",
      "location": [-1.4003558, 36.768448]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Muchatha",
    "route_id": "66008fa3-723c-401e-bb0a-d31e54472146",
    "matrix_info": {
      "DistanceMatrixAPI requests": 560,
      "cache_hit": "84%"
    },
    "distance": "40.69km",
    "path": "`ijF{`p_FaMfL?K}JbBmYlSWBgBzC{@S}DyBJpKRdAoElD_B`BaIaHmAb[VSwRbX}d@lr@_n@tTcBdAuj@pKhJtxAi{@gGelC`oBGDmBdD~z@sbD{@EQ\\gI}Y_OKgFvE|MfPNtB`nBg|AoLeJve@o|@hw@pvB|KhT@^gBRhE|MxAzB@Zn@Dv@dBNFpBfDrM}Z_CcKyIsF`j@ee@n[gq@vAsBMaFeW}OZsIv@yCvdAky@zDzExUlI|S}K",
    "shops": [{
      "shop_id": "d9532492-0d00-456c-ab14-29011ab5cc2a",
      "location": [-1.2025635, 36.785378]
    }, {
      "shop_id": "078f60df-756e-46e3-9234-143fc620c279",
      "location": [-1.2025557, 36.785435]
    }, {
      "shop_id": "842043a0-a7ea-4a70-ba87-0f5066c997c6",
      "location": [-1.2006465, 36.784943]
    }, {
      "shop_id": "bc92999d-0792-4be3-b14c-700a18846d2a",
      "location": [-1.1964217, 36.781666]
    }, {
      "shop_id": "3b4eb704-74cb-4276-a4ce-c0391c6bfe47",
      "location": [-1.1963007, 36.78165]
    }, {
      "shop_id": "732d9087-f3e4-4c44-94d3-25372e4093c7",
      "location": [-1.1957829, 36.780865]
    }, {
      "shop_id": "d925b1fc-b48b-4806-a26f-2443994c504c",
      "location": [-1.195475, 36.780968]
    }, {
      "shop_id": "773d0c5e-1afb-42d0-8e14-761b918bf768",
      "location": [-1.1945302, 36.78158]
    }, {
      "shop_id": "5e1fbad7-7626-4aa2-85c7-1e05495ad827",
      "location": [-1.1945891, 36.77957]
    }, {
      "shop_id": "4204d0d6-d225-482c-8753-4d61ffe625cf",
      "location": [-1.1946867, 36.779224]
    }, {
      "shop_id": "0208f436-9679-403d-9db2-9f1626447a20",
      "location": [-1.1936525, 36.778347]
    }, {
      "shop_id": "2a633a63-790e-4d4d-a44b-f8aaa7b71a8b",
      "location": [-1.19317162036896, 36.7778625488281]
    }, {
      "shop_id": "ff0f1a92-6b00-463f-8af9-f3eea8a709e1",
      "location": [-1.1915593, 36.779305]
    }, {
      "shop_id": "7a5a9fb2-2691-43e3-9400-a673c6b808a8",
      "location": [-1.1911736, 36.774807]
    }, {
      "shop_id": "af74c66a-6bc2-4057-bfa2-410b32a68930",
      "location": [-1.19128894805908, 36.7749061584473]
    }, {
      "shop_id": "42a72cce-9005-41c5-b40b-e79d0fa9e07f",
      "location": [-1.1881348, 36.77089]
    }, {
      "shop_id": "70c9d7b7-15a3-4159-a68c-5cbd201f4f5f",
      "location": [-1.18205714225769, 36.7626609802246]
    }, {
      "shop_id": "7eab4725-0a62-419e-9247-ba3757f23dd1",
      "location": [-1.1745353, 36.759186]
    }, {
      "shop_id": "8be1ee98-7271-467c-a673-c3fab2373816",
      "location": [-1.1740398, 36.758842]
    }, {
      "shop_id": "3f592ba3-4a36-4d9f-b631-eb9f0ed4640d",
      "location": [-1.1670479, 36.756832]
    }, {
      "shop_id": "b57f091a-3db9-4d60-81b0-dec1904519d3",
      "location": [-1.1688648, 36.74248]
    }, {
      "shop_id": "cba5dddf-4156-4fc0-a1e4-c7adbd3f0aac",
      "location": [-1.1592118, 36.7438]
    }, {
      "shop_id": "d2615a80-f4db-4041-a28e-16a5a6a640e4",
      "location": [-1.1366243, 36.725872]
    }, {
      "shop_id": "7d7b4ab6-5cd5-42d1-a542-70e826751363",
      "location": [-1.1365823, 36.725838]
    }, {
      "shop_id": "95d8adf9-3677-4937-af3d-cb1c1d4b17b9",
      "location": [-1.1360292, 36.72501]
    }, {
      "shop_id": "c53ba6ba-325a-4931-88a2-fc6e47358ea8",
      "location": [-1.14562594890594, 36.7511863708496]
    }, {
      "shop_id": "479f3b09-3638-4ebc-8364-59f36905e593",
      "location": [-1.145332, 36.751217]
    }, {
      "shop_id": "ea39915d-a3f9-4090-8878-165cd1edfc2f",
      "location": [-1.1452359, 36.75107]
    }, {
      "shop_id": "243cac28-7c26-4ad5-bad4-04f8b3541d48",
      "location": [-1.1436023, 36.755375]
    }, {
      "shop_id": "1c292668-84d8-4d7d-959c-a0dfff7e4fd6",
      "location": [-1.1410407, 36.755436]
    }, {
      "shop_id": "eb02424d-627e-4d0d-944a-e8dc2332d2a6",
      "location": [-1.139877, 36.754356]
    }, {
      "shop_id": "f1d8f5dc-2ec3-47e2-b965-a4ac2bf0ff2d",
      "location": [-1.1422715, 36.7516]
    }, {
      "shop_id": "7202e20a-ab54-49c4-ad3c-8859f64fc335",
      "location": [-1.1423514, 36.75101]
    }, {
      "shop_id": "f0f23705-eb41-41f0-8fa4-6c7b8cce28a1",
      "location": [-1.1601249, 36.765926]
    }, {
      "shop_id": "69643562-28c0-4df2-975f-ea20cf4e7467",
      "location": [-1.1579645, 36.76772]
    }, {
      "shop_id": "2090720c-2047-4962-9e8e-e5af2a964858",
      "location": [-1.1641611, 36.777557]
    }, {
      "shop_id": "c1cf535e-7559-41d0-88a1-81bb1debd826",
      "location": [-1.1731681, 36.758434]
    }, {
      "shop_id": "29d376d6-bbdb-4de3-a74f-b026aa20a2cd",
      "location": [-1.1752375, 36.755016]
    }, {
      "shop_id": "cc5f1d1a-511d-42f3-8012-42981cae64fe",
      "location": [-1.17525017261505, 36.7548561096191]
    }, {
      "shop_id": "9234049a-9f8d-4390-9027-a624fe0cea90",
      "location": [-1.1747282, 36.75476]
    }, {
      "shop_id": "23b3315b-df9c-4a70-b1f0-7aaab8eb7a20",
      "location": [-1.1757361, 36.75237]
    }, {
      "shop_id": "c6ff979a-880a-4f91-84d4-bbaaa6be4f62",
      "location": [-1.1761913, 36.751747]
    }, {
      "shop_id": "1a5d8515-6ce3-4966-8053-39e32147a119",
      "location": [-1.1761982, 36.751606]
    }, {
      "shop_id": "3751abd6-4d23-4249-b74d-ac7f2f434b7b",
      "location": [-1.1764425, 36.751583]
    }, {
      "shop_id": "42aed160-adbc-4653-b3f1-470876c2150a",
      "location": [-1.176721, 36.75107]
    }, {
      "shop_id": "de6804ef-0904-44cb-865c-22ae06e4fd5a",
      "location": [-1.1767954, 36.751026]
    }, {
      "shop_id": "8ce6123e-2d6e-4b29-9b0a-a9de59bd826e",
      "location": [-1.1773665, 36.75019]
    }, {
      "shop_id": "2d0fc0de-0180-4057-ba87-08f32322686f",
      "location": [-1.1797111, 36.75466]
    }, {
      "shop_id": "52c3f86a-9de9-4a47-912c-354934c1fd23",
      "location": [-1.1790684, 36.7566]
    }, {
      "shop_id": "d283e319-4716-4189-a977-fef060e0cbd0",
      "location": [-1.1773436, 36.75782]
    }, {
      "shop_id": "3af33c7f-1b01-4f71-9fb6-c13311486ee6",
      "location": [-1.1842347, 36.763935]
    }, {
      "shop_id": "f8d93ad2-4c46-4158-a446-29877ebac864",
      "location": [-1.1887851, 36.77197]
    }, {
      "shop_id": "ec1bc115-e4c5-4b9d-89ec-ba62765612c7",
      "location": [-1.1892306, 36.772552]
    }, {
      "shop_id": "008afdb8-b552-48ba-9947-4ed4b826b33e",
      "location": [-1.1891603, 36.77368]
    }, {
      "shop_id": "55b184df-6024-4fa1-a5f3-f57753d94bf8",
      "location": [-1.1852913, 36.776394]
    }, {
      "shop_id": "581289b6-a463-4865-aac2-863cb3950402",
      "location": [-1.1854303, 36.77809]
    }, {
      "shop_id": "88ce685b-6eff-44fa-94bd-79bdee34b119",
      "location": [-1.1857059, 36.778862]
    }, {
      "shop_id": "58bb2091-2eed-4a80-9f1e-32c9dcd13e1f",
      "location": [-1.1968718, 36.7882]
    }, {
      "shop_id": "7cec6ff4-7b25-4104-b9ff-c16f530fede1",
      "location": [-1.1978106, 36.7871]
    }, {
      "shop_id": "c37e4ee2-8b2d-423c-8f4a-00c7400bb189",
      "location": [-1.2014627, 36.78543]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Matuu",
    "route_id": "f00f74eb-7d3f-4410-b1d3-0a032f23fff4",
    "matrix_info": {
      "DistanceMatrixAPI requests": 618,
      "cache_hit": "83%"
    },
    "distance": "125.2km",
    "path": "l~mEa_raFmQih[QGd@s@tQtJnP}oBx_B__D|JuIppBo_CCECCU?QSc@s@lFh@j`AmpAlqJevM`x@cmA`JwOulFydDTYzLw}N`AyCcAqQ_A}MDFha@zJu@h[w[raIzBT`@b@c@PFJQ^{@jD_@s@v_FjyHt@Yg@aAi@`DkyUf`\\ae@lyCz]b_E`@WTEDDRE]m@yEtGhHwDE?uA^BP[GAB]fBpIoFx~BwqAAh@|AbA~D_MkJbDo_CvxAcUxdU",
    "shops": [{
      "shop_id": "37f8a06c-5b8a-4387-96e3-efa37246dfe6",
      "location": [-1.0567961, 37.26998]
    }, {
      "shop_id": "a1f494c0-cfa3-4114-8adf-e062dc953c68",
      "location": [-1.0567129, 37.27002]
    }, {
      "shop_id": "aebd890d-a807-4dc2-b69b-a5ef519fb8e9",
      "location": [-1.0568978, 37.270283]
    }, {
      "shop_id": "8ce8d85d-aabd-4abc-90ba-29d3c5230323",
      "location": [-1.0598934, 37.26841]
    }, {
      "shop_id": "1d620c76-304c-47ab-b630-fa463cb4dfe0",
      "location": [-1.0626892, 37.286476]
    }, {
      "shop_id": "752cd889-b9d0-4c07-9c85-1302b9f02601",
      "location": [-1.0781763, 37.312077]
    }, {
      "shop_id": "ce75409e-dc10-4927-8e29-d2a3780212c3",
      "location": [-1.0800858, 37.31379]
    }, {
      "shop_id": "837deae3-e6d5-4adc-bc48-f31f3971f682",
      "location": [-1.09825825691223, 37.3343467712402]
    }, {
      "shop_id": "f517b839-4da2-4a38-80cb-33f67340c65b",
      "location": [-1.0982366, 37.334385]
    }, {
      "shop_id": "c496c780-5d9f-463d-ba90-736a2ef20fe1",
      "location": [-1.09821748733521, 37.3343963623047]
    }, {
      "shop_id": "8eb7ee0a-0601-4701-9f10-e569c21ed40a",
      "location": [-1.09811055660248, 37.3344039916992]
    }, {
      "shop_id": "489f1d74-f780-473b-a577-c64c6d735aad",
      "location": [-1.0980157, 37.334496]
    }, {
      "shop_id": "e1adbaba-1c58-4902-98dc-f557920f130c",
      "location": [-1.0978371, 37.334763]
    }, {
      "shop_id": "4968cedb-12a7-423f-b1d2-802db89647b3",
      "location": [-1.0990278, 37.334553]
    }, {
      "shop_id": "90c33c11-b4e0-48d7-b153-9d3e70175da3",
      "location": [-1.1094948, 37.347576]
    }, {
      "shop_id": "87332fdb-f1f7-49a0-aef4-352d6fdf8861",
      "location": [-1.1687554, 37.422966]
    }, {
      "shop_id": "efd64f4b-9fcf-4454-9ce4-c025fb31fae6",
      "location": [-1.1778893, 37.435474]
    }, {
      "shop_id": "ab2a904e-c88e-4a05-9fd1-5b64be6100f0",
      "location": [-1.1796576, 37.43815]
    }, {
      "shop_id": "70eab087-1219-43ac-a7ee-98ea35f317d1",
      "location": [-1.1416346, 37.464684]
    }, {
      "shop_id": "5b855f96-b111-488e-b1e1-3d201d23b882",
      "location": [-1.1417409, 37.464806]
    }, {
      "shop_id": "b2d6f487-a261-4be8-9b2e-aec0a19027fb",
      "location": [-1.1439579, 37.54653]
    }, {
      "shop_id": "e5f36d64-2cb5-4439-bd5e-c00ce87ffc4b",
      "location": [-1.1442939, 37.547302]
    }, {
      "shop_id": "115569ba-c550-44c1-820d-8c7af73d2131",
      "location": [-1.14395356178284, 37.5502738952637]
    }, {
      "shop_id": "4e2a5a10-d147-4056-b5be-f2a9afc70e1a",
      "location": [-1.14362716674805, 37.5526580810547]
    }, {
      "shop_id": "028d4344-5d9e-4b6b-8598-9b18e78299db",
      "location": [-1.14366018772125, 37.552619934082]
    }, {
      "shop_id": "02332dbd-3063-4224-bef3-90efc9b459da",
      "location": [-1.1491544, 37.550716]
    }, {
      "shop_id": "d2ce652f-1979-43d7-b6cd-ee61e9babb05",
      "location": [-1.14887857437134, 37.5461921691895]
    }, {
      "shop_id": "ab17b524-6b75-470a-99df-7491c863f3cb",
      "location": [-1.1442845, 37.49457]
    }, {
      "shop_id": "4c310443-6481-4a76-bbfd-f31c88667c37",
      "location": [-1.1448982, 37.494457]
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
      "shop_id": "e9d7aa3c-5da8-424c-8839-f6f934ed7288",
      "location": [-1.144839, 37.493973]
    }, {
      "shop_id": "311abbd8-a800-4b65-ab87-8250b10da78f",
      "location": [-1.1445432, 37.493107]
    }, {
      "shop_id": "120d3fdb-db40-4f5d-8072-89d662151736",
      "location": [-1.1443784, 37.493366]
    }, {
      "shop_id": "6386ee6d-80fc-4354-a860-046753c04788",
      "location": [-1.1803437, 37.44307]
    }, {
      "shop_id": "5d0134e8-b685-47f4-96f4-7c5f61ba5409",
      "location": [-1.1806061, 37.443203]
    }, {
      "shop_id": "1069d217-662d-4ba3-a69e-3ac9196004f6",
      "location": [-1.1804132, 37.443535]
    }, {
      "shop_id": "22f58b28-33a3-475a-b267-b23598f01424",
      "location": [-1.1802038, 37.442722]
    }, {
      "shop_id": "b99f3569-cc9c-484e-9229-e7fc9dd229e1",
      "location": [-1.0633401, 37.29404]
    }, {
      "shop_id": "80913f28-7070-42c2-b6e0-ecce7a8c2158",
      "location": [-1.0572495, 37.269333]
    }, {
      "shop_id": "2c571069-2fdb-4056-9096-47184e03a467",
      "location": [-1.0621862, 37.238594]
    }, {
      "shop_id": "0683d842-b409-43d9-b568-b726446e750d",
      "location": [-1.0623627, 37.23871]
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
      "shop_id": "85e354e5-ab18-4691-b524-12728560ecf8",
      "location": [-1.0624546, 37.23897]
    }, {
      "shop_id": "22c463c3-a12b-44bd-8d92-657aa5024486",
      "location": [-1.0613586, 37.23758]
    }, {
      "shop_id": "92bc4391-8770-4658-96f1-51a8cd8ffdeb",
      "location": [-1.0628496, 37.2385]
    }, {
      "shop_id": "7f0c6432-299d-4470-80cb-50e888d32f73",
      "location": [-1.0628155, 37.2385]
    }, {
      "shop_id": "b52c1dc9-b241-42c7-9255-715916ef1518",
      "location": [-1.0623887, 37.23834]
    }, {
      "shop_id": "ecc0e488-63a1-4cbe-a914-d471b4250600",
      "location": [-1.0624068, 37.23825]
    }, {
      "shop_id": "81fec8c0-4ad2-48a4-a08a-010946ee7d39",
      "location": [-1.06227159500122, 37.2382850646973]
    }, {
      "shop_id": "91b799bb-d8c3-49be-b694-dbb70a562a78",
      "location": [-1.0622629, 37.23827]
    }, {
      "shop_id": "2aa81ba9-0418-4fcc-85f1-12aa8623f394",
      "location": [-1.0621132, 37.23775]
    }, {
      "shop_id": "1d78e2d6-cd36-42b9-aef1-d0aa42dfb8b3",
      "location": [-1.063799, 37.23895]
    }, {
      "shop_id": "e4f74d26-77ea-4386-aa6d-a624d7ff5099",
      "location": [-1.0842476, 37.252186]
    }, {
      "shop_id": "de923486-8cda-4ec0-94c7-9cb2bf0017d4",
      "location": [-1.084241, 37.251984]
    }, {
      "shop_id": "7f387bdd-12f1-4bf8-853b-8a45cde1ada5",
      "location": [-1.0847057, 37.25164]
    }, {
      "shop_id": "8049ba3d-9657-4e37-95d7-e706f02ebe63",
      "location": [-1.0856739, 37.25388]
    }, {
      "shop_id": "95c06a4b-44f8-4316-aac5-41d61fd44002",
      "location": [-1.0838475, 37.253063]
    }, {
      "shop_id": "6caea556-3958-4bdb-b520-7f91fb405995",
      "location": [-1.0632871, 37.238697]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ruiru/Kimbo",
    "route_id": "21bf95d8-275d-4a56-904d-9864b87bed0c",
    "matrix_info": {
      "DistanceMatrixAPI requests": 194,
      "cache_hit": "69%"
    },
    "distance": "72.74km",
    "path": "l~mEa_raFndO~s[|W}fAxC{D|~BfmCEQg|@j_@pLh^gHoB}NpDsLxl@eLnsBDr@`@dEEvGAn@~Ec@}FcnApOoXqDyGm@EK?iLkCmDo@elAsrCsjAnn@_|Kgm^",
    "shops": [{
      "shop_id": "fdbf4ede-f20c-4dbb-bb6e-a5fdeb4dbd40",
      "location": [-1.1425502, 36.978413]
    }, {
      "shop_id": "11ef6d4b-e5ad-4d8a-a33d-5b67e1433a81",
      "location": [-1.146542, 36.989918]
    }, {
      "shop_id": "4f2a1a8f-ed75-488d-851a-9399f7e9b203",
      "location": [-1.1473106, 36.990856]
    }, {
      "shop_id": "b2e34f60-ff44-4f41-a1ec-737b744dda25",
      "location": [-1.16778, 36.9681]
    }, {
      "shop_id": "812340b6-282d-4038-9c81-31331d830320",
      "location": [-1.16774606704712, 36.968189239502]
    }, {
      "shop_id": "956ed182-5a86-4ffe-90c1-4c96a607120b",
      "location": [-1.1579531, 36.963005]
    }, {
      "shop_id": "81cb1587-6af6-4aa5-acf7-a780fda21f5e",
      "location": [-1.1601242, 36.958004]
    }, {
      "shop_id": "46f371cd-356a-4a86-9efa-cf1aaa5e61c3",
      "location": [-1.1586447, 36.958557]
    }, {
      "shop_id": "5b8eec4b-6f62-4654-87f6-cc2b6fabab25",
      "location": [-1.1560879, 36.957672]
    }, {
      "shop_id": "68deb714-4c01-41a0-ae79-f3e0c9308213",
      "location": [-1.1539145, 36.950344]
    }, {
      "shop_id": "232566ab-e4c4-40c8-b4b0-4d548d5db318",
      "location": [-1.1517982, 36.9317]
    }, {
      "shop_id": "dfd7f43c-f8fe-4be6-9049-9a69b7d07d45",
      "location": [-1.15183365345001, 36.9314422607422]
    }, {
      "shop_id": "fcb9747f-e9d5-494c-8a4a-28e69af28fb4",
      "location": [-1.152, 36.930454]
    }, {
      "shop_id": "5bbd47cd-dd73-4bfd-b26f-b5968a72aca9",
      "location": [-1.1519734, 36.92905]
    }, {
      "shop_id": "61960e2f-d071-4d30-ba00-04271ff2122d",
      "location": [-1.15195882320404, 36.9288101196289]
    }, {
      "shop_id": "b7bde952-bc75-4028-a273-d03f6730f5e5",
      "location": [-1.1530823, 36.92899]
    }, {
      "shop_id": "77ed6a4b-ce45-4c92-a3cf-85259bfb4c03",
      "location": [-1.1518097, 36.941654]
    }, {
      "shop_id": "2401fdf3-09ae-4d1f-9fa1-16ef392e44f5",
      "location": [-1.1544566, 36.94573]
    }, {
      "shop_id": "cbbd943b-eead-4175-91c9-ab46df224323",
      "location": [-1.1535733, 36.947144]
    }, {
      "shop_id": "9c007c07-d361-451f-a9fa-614f3b48243a",
      "location": [-1.1533391, 36.947166]
    }, {
      "shop_id": "184a2df6-4bc5-4cb2-9ee0-90466a6bface",
      "location": [-1.1532772, 36.947166]
    }, {
      "shop_id": "db356715-841f-401c-bf75-9f195b593a86",
      "location": [-1.1511544, 36.947872]
    }, {
      "shop_id": "c6df6baa-e69b-4688-99a6-4eba5f15ecf1",
      "location": [-1.1502799, 36.94811]
    }, {
      "shop_id": "805eb31f-949c-433e-9ae5-803c6710ba55",
      "location": [-1.1379349, 36.971733]
    }, {
      "shop_id": "24942564-ebd3-4c1e-b6ad-8535b9aa1d43",
      "location": [-1.1258329, 36.964134]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Staff Route",
    "route_id": "88f615ac-26fc-4090-8662-e4c7df779023",
    "matrix_info": {
      "DistanceMatrixAPI requests": 24,
      "cache_hit": "58%"
    },
    "distance": "28.01km",
    "path": "dsfG_se`F{De@C?KHm@aAIAEHAQqnDeA_rDeg@|iJrl@",
    "shops": [{
      "shop_id": "43729cf6-1ee5-45cc-9709-244ba399d808",
      "location": [-1.3488487, 36.898106]
    }, {
      "shop_id": "70c4913b-123f-4ca9-a662-38b096687f13",
      "location": [-1.34883344173431, 36.8981094360352]
    }, {
      "shop_id": "82c4f9cf-b0e4-4348-bf3b-dadbb4ad776d",
      "location": [-1.3487725, 36.898064]
    }, {
      "shop_id": "708551c4-5aaa-4c01-acd7-3ef85a5fa36d",
      "location": [-1.34854328632355, 36.8983917236328]
    }, {
      "shop_id": "a4b31d23-24d2-4067-9fbc-8be730a726b7",
      "location": [-1.34849035739899, 36.8983993530273]
    }, {
      "shop_id": "da226e49-2329-4dc5-b3d0-4165d1c8a5c5",
      "location": [-1.34845638275146, 36.8983535766602]
    }, {
      "shop_id": "79f5d817-aacf-4a41-a66f-91466e2c6a01",
      "location": [-1.34844696521759, 36.8984413146973]
    }, {
      "shop_id": "d857e950-7f62-42f1-b37a-fe8367c68b4a",
      "location": [-1.32036, 36.89879]
    }, {
      "shop_id": "3192ff2e-0e7b-4623-97ee-71bd5059bac7",
      "location": [-1.29172444343567, 36.9052238464355]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Mathare/Huruma",
    "route_id": "4e8383ca-6c31-4e8f-939f-6379eb4afb26",
    "matrix_info": {
      "DistanceMatrixAPI requests": 757,
      "cache_hit": "80%"
    },
    "distance": "52.7km",
    "path": "dsfG_se`FehPxvBaA`DDb@mDAgBQy@GQJmASyCZ}CnDnTjJb@K[n@lBrAaAr@gHa@gN`C`BhF~AdCMPb@l@QVdCnCcD|Iq@}Ay@cBoAiJE{@sBPzHpYnB{BtGyCz@bKiHdMk@tGcTsQzDsEgN~@AO}AwHOe@gEqIfD{CmD}JyBoCqVhS~MzD_KkFe@}EjBI@AXY^EL_BBwAtDwGlDfHtCzCkAfD|DbUFt@jgAxhA`zOidG",
    "shops": [{
      "shop_id": "f83a1f81-dc04-4fc8-94ac-ceb65cb698d7",
      "location": [-1.2612807, 36.87875]
    }, {
      "shop_id": "cabbb7f3-125b-4435-9c73-fe8d9b81bab3",
      "location": [-1.2609506, 36.87794]
    }, {
      "shop_id": "5ce4e773-0d1e-4362-8ff3-f68629afd423",
      "location": [-1.260982, 36.877758]
    }, {
      "shop_id": "7b573e66-9e8b-4959-b882-8949f24e96bd",
      "location": [-1.2601057, 36.87777]
    }, {
      "shop_id": "062b8195-b594-4ba4-a163-229a99ee621c",
      "location": [-1.25958645343781, 36.8778648376465]
    }, {
      "shop_id": "7e4ac011-ffce-40b8-8407-8e262488d84d",
      "location": [-1.2592978, 36.877903]
    }, {
      "shop_id": "b9d62cd5-3994-493a-97ea-2a9db3cab0a1",
      "location": [-1.25920975208282, 36.8778381347656]
    }, {
      "shop_id": "62cbb2d0-ed92-4a2e-a2de-46f9f3cb24db",
      "location": [-1.2588181, 36.877937]
    }, {
      "shop_id": "7dbb3d81-af87-4fde-95b8-5cf6010756c0",
      "location": [-1.25805163383484, 36.8778038024902]
    }, {
      "shop_id": "72468fd0-b79a-41c4-980d-b1db64296f51",
      "location": [-1.2572575, 36.87692]
    }, {
      "shop_id": "935a2408-3698-4e00-a1db-7ceffe3c0be2",
      "location": [-1.26070380210876, 36.8751029968262]
    }, {
      "shop_id": "119699ea-ca5e-4b7d-8105-802f070682d5",
      "location": [-1.2608823, 36.87516]
    }, {
      "shop_id": "e779699b-6201-4f0a-8ac2-c95866c1ac9d",
      "location": [-1.2607377, 36.874916]
    }, {
      "shop_id": "fe4425e8-b07e-4210-8c2d-778f0364c04d",
      "location": [-1.2612911, 36.874496]
    }, {
      "shop_id": "219b8afe-3bb4-4970-a4c9-6d33603658ea",
      "location": [-1.2609636, 36.87424]
    }, {
      "shop_id": "86f90d90-50e0-4605-b9f4-1b6da85dfb66",
      "location": [-1.2594784, 36.874413]
    }, {
      "shop_id": "7cb4c8fb-4470-4e61-9f42-4a3bb068db82",
      "location": [-1.25703728199005, 36.8737602233887]
    }, {
      "shop_id": "48b45e1e-0eaa-4cb8-904a-4099e6257e6f",
      "location": [-1.2575276, 36.872593]
    }, {
      "shop_id": "4f659cd4-7534-44d7-9286-ebef001dbb37",
      "location": [-1.2580094, 36.871918]
    }, {
      "shop_id": "d68487a1-f49d-4fab-988f-658f5c68d0b9",
      "location": [-1.2579384, 36.871826]
    }, {
      "shop_id": "240e5b12-16e8-494c-93be-66dc3412a094",
      "location": [-1.258116, 36.8716]
    }, {
      "shop_id": "c80d5e23-2daa-4304-9e7c-f3c04c156ba3",
      "location": [-1.2580281, 36.87148]
    }, {
      "shop_id": "c071a378-75b4-4090-a3b2-2ec30b152f29",
      "location": [-1.2586966, 36.870758]
    }, {
      "shop_id": "2dd5b072-d163-4d81-b7bb-851d5da10821",
      "location": [-1.2578754, 36.86901]
    }, {
      "shop_id": "90eb5f05-dab4-4d91-8baa-26ace38bcb7c",
      "location": [-1.2576299, 36.869484]
    }, {
      "shop_id": "72467fa9-fb17-405e-a72f-6f5a678d4d40",
      "location": [-1.257343, 36.869984]
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
      "shop_id": "e3dc7d13-0ca9-4e56-8586-d37c0b087e25",
      "location": [-1.2579112, 36.86775]
    }, {
      "shop_id": "8f113683-3cd3-41b0-aaea-c8a756198807",
      "location": [-1.2584717, 36.86837]
    }, {
      "shop_id": "90585f23-9ba6-42ca-9c24-af2b223012d9",
      "location": [-1.2598597, 36.86914]
    }, {
      "shop_id": "f01b6872-d5a0-423d-815d-d877d1d2f757",
      "location": [-1.2601556, 36.8672]
    }, {
      "shop_id": "594756a7-760a-41d2-b9cb-ee72aa49bf70",
      "location": [-1.2586668, 36.864933]
    }, {
      "shop_id": "ba6319e1-1f6f-463f-a4e0-f8113d221bc2",
      "location": [-1.2584491, 36.86354]
    }, {
      "shop_id": "ff17b7a0-3f45-4d63-81d2-fd7dbd0562b1",
      "location": [-1.2550703, 36.866524]
    }, {
      "shop_id": "f140f0ca-cae2-4e3b-bce0-a6375ab00e78",
      "location": [-1.2560133, 36.867577]
    }, {
      "shop_id": "08dd63e5-62e4-4c4c-8018-91d20e9ad1b6",
      "location": [-1.2535721, 36.867264]
    }, {
      "shop_id": "271df0ef-4993-4e09-914d-b4c757318200",
      "location": [-1.2535584, 36.86734]
    }, {
      "shop_id": "3fecbfe5-ddf6-4395-b920-129067ae4004",
      "location": [-1.2530907, 36.868904]
    }, {
      "shop_id": "0f881753-a1bb-404f-818d-ddf050156d46",
      "location": [-1.2530091, 36.869087]
    }, {
      "shop_id": "5fdcd173-f31e-49f9-b4d5-7a37cd8322c9",
      "location": [-1.2520094, 36.870777]
    }, {
      "shop_id": "1b88e51b-93eb-457f-977e-ed614a517de2",
      "location": [-1.252851, 36.871555]
    }, {
      "shop_id": "e21c04d4-ff7d-43fb-9c06-e60fcf5378d3",
      "location": [-1.2519802, 36.873466]
    }, {
      "shop_id": "cfa6e0c7-13a4-4c22-98f0-b8df0db351a6",
      "location": [-1.251365, 36.87419]
    }, {
      "shop_id": "261dbd1d-ae91-45d6-b332-86ad328b12dd",
      "location": [-1.247603, 36.870937]
    }, {
      "shop_id": "7f7efe63-2429-4be9-bc1d-4abe0e21a49e",
      "location": [-1.25, 36.87]
    }, {
      "shop_id": "b53e7d02-fd78-4fbe-af4c-196c64b677e6",
      "location": [-1.2480763, 36.871185]
    }, {
      "shop_id": "da1c348a-575b-4574-b97a-f53749d08e62",
      "location": [-1.2478851, 36.872288]
    }, {
      "shop_id": "321b2ae4-78a7-4c1f-904e-ad7dd74e2315",
      "location": [-1.24843060970306, 36.8723411560059]
    }, {
      "shop_id": "824ec1f8-1d24-4eba-b19c-0c9ccc1a31af",
      "location": [-1.2484398, 36.872345]
    }, {
      "shop_id": "baf04e0e-276f-42ea-9e89-fd27526667a7",
      "location": [-1.2485704, 36.872482]
    }, {
      "shop_id": "3c54fac3-19c3-48bf-a6f4-1c0e6301f0ab",
      "location": [-1.2487338, 36.87251]
    }, {
      "shop_id": "ebc9c1b8-2bae-49ec-a226-64d2b3a45739",
      "location": [-1.2488004, 36.872986]
    }, {
      "shop_id": "a6bb6899-0825-4e0c-b70c-42a1d509bf29",
      "location": [-1.248815, 36.87343]
    }, {
      "shop_id": "2adb6fd7-4f4a-4c5e-91cd-fbb8174325a4",
      "location": [-1.2497293, 36.87483]
    }, {
      "shop_id": "59999125-4b2f-4746-aa49-d698acea88e7",
      "location": [-1.2505963, 36.873352]
    }, {
      "shop_id": "749e25d3-a4ce-43f8-b97e-1aee9c7ade65",
      "location": [-1.251352, 36.872566]
    }, {
      "shop_id": "b2086fb0-2364-49f2-87a6-024a973f4274",
      "location": [-1.2509674, 36.87173]
    }, {
      "shop_id": "d3da3dcb-da88-4475-8d6e-27e14bb5adc4",
      "location": [-1.2519178, 36.868187]
    }, {
      "shop_id": "04ffb5b8-e7bf-4686-8fa7-3a3943444f1d",
      "location": [-1.2519617, 36.867924]
    }, {
      "shop_id": "2699c7c4-9843-44af-9baf-8b75a015513c",
      "location": [-1.2635429, 36.85611]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ngoingwa",
    "route_id": "40e76b4d-3360-4e12-9dd4-718796bcfc3b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 531,
      "cache_hit": "79%"
    },
    "distance": "43.46km",
    "path": "l~mEa_raFjp@pyJpPdSthCmz@cEgFewB|}BxGyBZKa[MsA_BeAsB?N~AsCkBkH`@@jA}DAAtKoJwMcAW`A{DjIiBvDEANP_BnCkAd@{BjCt@hB]dClDmAz@}@gBxG|G_HfIaBf@d@}wCsSyQvHuHfWQbJTRfADPDiGpp@}BnEuArNr_@fAlMeBCEob@}]dDeUL?zHo@`gB}dN",
    "shops": [{
      "shop_id": "ba823af6-5de7-4108-ba99-a87a8bb5c148",
      "location": [-1.0676502, 37.064556]
    }, {
      "shop_id": "06915108-236c-45f5-b893-646961510d6b",
      "location": [-1.0704559, 37.061333]
    }, {
      "shop_id": "23d5d7b9-7c6c-4798-8d56-569f6a685854",
      "location": [-1.09248948097229, 37.0708389282227]
    }, {
      "shop_id": "33d4945a-3c2c-41c8-b668-393c50f76eb1",
      "location": [-1.0915064, 37.071995]
    }, {
      "shop_id": "2ddf0661-e99d-4041-a9ed-35e8a919f27d",
      "location": [-1.0722753, 37.05169]
    }, {
      "shop_id": "3adcd204-6c7b-4214-a80a-355e66abcd67",
      "location": [-1.0736891, 37.052303]
    }, {
      "shop_id": "de907683-95cd-4754-8be8-4be0d25331d1",
      "location": [-1.0738258, 37.052357]
    }, {
      "shop_id": "a72c90e3-1d1b-4d5d-b5bf-e81022bb8eca",
      "location": [-1.0693432, 37.052425]
    }, {
      "shop_id": "ff116e02-9493-4e2c-a51d-5d64279a57f6",
      "location": [-1.0689175, 37.05291]
    }, {
      "shop_id": "73deebcd-b97b-4f36-a527-2817500f052f",
      "location": [-1.068569, 37.053486]
    }, {
      "shop_id": "c0658183-30b0-46dc-9c41-0aaef2e18f80",
      "location": [-1.0685652, 37.053413]
    }, {
      "shop_id": "1d4c2e30-01da-4303-87c2-2efa09bfb4ef",
      "location": [-1.0690476, 37.054146]
    }, {
      "shop_id": "1d68215b-bc45-4187-81aa-ed3c6aa6dd4b",
      "location": [-1.068506, 37.05565]
    }, {
      "shop_id": "cf296387-2e24-469f-a403-fb8e7d07f2a1",
      "location": [-1.0686753, 37.05564]
    }, {
      "shop_id": "d691443d-2cae-4ac8-aee1-73af222da62f",
      "location": [-1.0690585, 37.056587]
    }, {
      "shop_id": "2eb9d513-7d76-4b99-a78f-9c116da9de82",
      "location": [-1.0690509, 37.056595]
    }, {
      "shop_id": "638107c6-007e-4614-9f26-b74a25be6f41",
      "location": [-1.0710766, 37.05844]
    }, {
      "shop_id": "c8c8ff72-1204-4aba-bcf1-b93dc3f7b1e3",
      "location": [-1.0687166, 37.058777]
    }, {
      "shop_id": "536af08b-60a0-4524-ab2a-c641bdcb9f90",
      "location": [-1.0686015, 37.058453]
    }, {
      "shop_id": "46fb6c79-e1d8-46c6-9767-ceeaf36375a4",
      "location": [-1.067658, 37.056786]
    }, {
      "shop_id": "193be2f6-4ed5-46ea-aed3-16c71fa0f275",
      "location": [-1.0671332, 37.055874]
    }, {
      "shop_id": "777a461f-063a-45f8-bb58-d661c7b1899c",
      "location": [-1.0671026, 37.055878]
    }, {
      "shop_id": "0b197f28-b5e7-4dd8-8021-dd8684d8ba25",
      "location": [-1.0671784, 37.055794]
    }, {
      "shop_id": "7c64b106-a709-4ba7-93a1-543720798f52",
      "location": [-1.0667025, 37.055065]
    }, {
      "shop_id": "a37efa49-a706-405d-9433-604950e347df",
      "location": [-1.0663162, 37.054882]
    }, {
      "shop_id": "9c003538-cf22-46fa-8d60-d0502fd832ee",
      "location": [-1.0656965, 37.054176]
    }, {
      "shop_id": "08be2f50-eca3-4b87-b396-e4c48824cdf7",
      "location": [-1.0659676, 37.053654]
    }, {
      "shop_id": "df20489f-9818-44f1-a9b1-529bea7b27a4",
      "location": [-1.0658201, 37.05298]
    }, {
      "shop_id": "fed81aea-3b15-4f26-874e-970a22252ee4",
      "location": [-1.0666945, 37.053368]
    }, {
      "shop_id": "be88e28f-dfce-4b22-9532-81377fef8d38",
      "location": [-1.066992, 37.05368]
    }, {
      "shop_id": "3f1e0554-4f08-4aff-9158-6083e53c26fd",
      "location": [-1.0664737, 37.052273]
    }, {
      "shop_id": "43c49d27-1ead-486e-b238-520d2fcf32fc",
      "location": [-1.0679001, 37.05371]
    }, {
      "shop_id": "19928709-bc9d-4823-a339-e2678be90e99",
      "location": [-1.0695395, 37.0542]
    }, {
      "shop_id": "cb521de3-5303-469e-baf8-06ea8750fe68",
      "location": [-1.0697423, 37.05401]
    }, {
      "shop_id": "b2c5cff8-6ea3-4a51-9cb0-a0568518fa4f",
      "location": [-1.0452688, 37.05731]
    }, {
      "shop_id": "5f9b8b96-4794-4e80-b50b-4051f380f1cd",
      "location": [-1.0422574, 37.05575]
    }, {
      "shop_id": "84acdb1d-6161-462a-ba55-5038d6048ae0",
      "location": [-1.0407112, 37.051872]
    }, {
      "shop_id": "af6661a3-2d38-414a-9f2b-800267b4d939",
      "location": [-1.0406196, 37.05009]
    }, {
      "shop_id": "56f065cd-e230-4fb1-9acd-c461c368c962",
      "location": [-1.0407299, 37.049988]
    }, {
      "shop_id": "66d6b4ee-68d8-41c4-8b50-6a94ffbca6bb",
      "location": [-1.0410895, 37.049957]
    }, {
      "shop_id": "cf9caf8f-894b-4f7e-bda1-b076cb1b4c6f",
      "location": [-1.04118180274963, 37.0499305725098]
    }, {
      "shop_id": "fcb9ea81-8e77-4038-8d53-a6cdbbab9a41",
      "location": [-1.0398508, 37.042]
    }, {
      "shop_id": "eb42dce6-7bfc-4616-8194-64a65f02411d",
      "location": [-1.0392205, 37.04096]
    }, {
      "shop_id": "baf63517-7740-4c32-be56-c21b0979019a",
      "location": [-1.0387948, 37.03846]
    }, {
      "shop_id": "614fd6a1-e74d-4538-bc62-d812024e5107",
      "location": [-1.04401338100433, 37.0381011962891]
    }, {
      "shop_id": "d519701e-67cb-43aa-b037-5c2acb7c2c10",
      "location": [-1.046322, 37.03861]
    }, {
      "shop_id": "8072ff82-56bd-427d-8a25-4e1660011e27",
      "location": [-1.0462976, 37.038635]
    }, {
      "shop_id": "38a92acd-a081-4331-8cb9-746044597a85",
      "location": [-1.0406194, 37.043587]
    }, {
      "shop_id": "2b8a742b-94ab-42f1-bd55-f3a6a94a168e",
      "location": [-1.041453, 37.04714]
    }, {
      "shop_id": "820e4530-ec1d-446e-aaf3-3339071c45c5",
      "location": [-1.0415186882019, 37.0471420288086]
    }, {
      "shop_id": "a9c7a95a-8620-40c3-923b-1ad8721ea481",
      "location": [-1.0431026, 37.047382]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Otiende",
    "route_id": "22c0bf9f-00cd-47aa-a2e2-11d12bfea8af",
    "matrix_info": {
      "DistanceMatrixAPI requests": 307,
      "cache_hit": "88%"
    },
    "distance": "28.8km",
    "path": "tz|Fmdx_FpdFhqGopAze@CODd@m@`FAz@|@|@JCKNdNuEfRxCABmi@jCyAd@z@rPcIk\\CB}@Q[@h]qIqBkNM@CG?GJ?Rc@T}@ci@og@hl@pb@iAiCpCReAeCmA_C}JkHX@KRFZq@o@U_@c@sAeI~AhLcCjClBD?uAUEBeJpLD?gBsAbFfA`UVfPyECGmpDgiG",
    "shops": [{
      "shop_id": "bebd0605-04cf-4dba-8cbe-0051120d976d",
      "location": [-1.3365238904953, 36.7851371765137]
    }, {
      "shop_id": "a1d01adc-5d67-4aeb-b7d9-46ebe7ea372b",
      "location": [-1.323483, 36.77892]
    }, {
      "shop_id": "290f6813-d7e5-44cf-a9ac-16d311121816",
      "location": [-1.3234613, 36.779]
    }, {
      "shop_id": "11a66860-b3eb-4e7a-86fa-d0b28604fbf8",
      "location": [-1.3234946, 36.778812]
    }, {
      "shop_id": "17699a3c-3ed0-4513-9b53-e7ae7652281e",
      "location": [-1.3232594, 36.777683]
    }, {
      "shop_id": "a41dff13-3512-4239-a1f2-007a0685350c",
      "location": [-1.3232513666153, 36.7773780822754]
    }, {
      "shop_id": "464b6a83-a413-4b9c-a16d-1ba98ab64237",
      "location": [-1.3235576, 36.777073]
    }, {
      "shop_id": "6ce5d85a-a9f8-4a04-80d8-8b3c76772177",
      "location": [-1.32361912727356, 36.7770881652832]
    }, {
      "shop_id": "23d9cd43-3659-4b75-9404-9d52dca3e795",
      "location": [-1.3235636, 36.777008]
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
      "shop_id": "9f21a40f-416a-4a73-9cb5-1d87d43c1bb7",
      "location": [-1.32181942462921, 36.7763977050781]
    }, {
      "shop_id": "10f6819c-bc8b-4bb9-a7fc-e1f0ba4066ac",
      "location": [-1.3221214, 36.773575]
    }, {
      "shop_id": "c2d1f290-ae85-4cd3-805f-99d9fa7c3ed2",
      "location": [-1.3204983, 36.778275]
    }, {
      "shop_id": "c769b9b2-b427-49a8-a2fa-f1e94d8295f3",
      "location": [-1.3204825, 36.778255]
    }, {
      "shop_id": "35111e60-e954-439e-be8b-89ed2fde71c5",
      "location": [-1.32016885280609, 36.7783508300781]
    }, {
      "shop_id": "d2538c7a-fc16-4fd6-9d9a-fa818a45898c",
      "location": [-1.32002949714661, 36.7783432006836]
    }, {
      "shop_id": "2b3935b4-5a4e-4e76-8e51-fc862fc03a99",
      "location": [-1.3248812, 36.78003]
    }, {
      "shop_id": "f17e3ccf-330b-4542-b99e-a98fb7b628e5",
      "location": [-1.3243066, 36.782494]
    }, {
      "shop_id": "e9c649e2-22d0-43c0-b4c3-a5ef0bbffa04",
      "location": [-1.3242372, 36.782482]
    }, {
      "shop_id": "ab036dd4-c676-4653-a462-b5daffe8ad1e",
      "location": [-1.3242238, 36.782516]
    }, {
      "shop_id": "0b06f2da-2336-4d53-a0e1-782f248424aa",
      "location": [-1.3242179, 36.782562]
    }, {
      "shop_id": "cfff35a8-e55f-40e6-9e44-fce1ac75dcfb",
      "location": [-1.3242803, 36.782562]
    }, {
      "shop_id": "84300c74-fe5c-4f82-b639-2b8de1e29565",
      "location": [-1.32437741756439, 36.7827377319336]
    }, {
      "shop_id": "a016566c-8bd9-4211-91f5-53ac89a903f0",
      "location": [-1.3244938, 36.783054]
    }, {
      "shop_id": "c6b044c8-068f-4892-99d2-dc2189ec0c31",
      "location": [-1.317749, 36.78953]
    }, {
      "shop_id": "20ad2cbf-8823-41b3-8c6a-20396dcd2891",
      "location": [-1.3250029, 36.783836]
    }, {
      "shop_id": "56071ef4-1951-4d1d-b1b5-cc7f36b63623",
      "location": [-1.324629, 36.78453]
    }, {
      "shop_id": "95f9edba-52a3-47ad-b027-fa22e6d49cee",
      "location": [-1.3253603, 36.78443]
    }, {
      "shop_id": "a8cc91e9-2cc7-4e3c-b713-e5b60da9e753",
      "location": [-1.32501494884491, 36.785099029541]
    }, {
      "shop_id": "e7625bd2-1457-4371-b7e0-dd5a0ffdcec9",
      "location": [-1.32462, 36.785744]
    }, {
      "shop_id": "cc3e752e-ab07-4a8c-9941-7d5125d312c8",
      "location": [-1.3227053, 36.78724]
    }, {
      "shop_id": "60917673-0a6b-4267-95d3-5da2d799ddb6",
      "location": [-1.32284, 36.787228]
    }, {
      "shop_id": "2df3f2b5-0c02-4496-97b2-d55c3798597d",
      "location": [-1.3227799, 36.787125]
    }, {
      "shop_id": "fe260294-0938-454d-a385-2097b55f675e",
      "location": [-1.322823, 36.786995]
    }, {
      "shop_id": "2002dcc8-7561-4cb8-b0bd-ae0ab9cc868f",
      "location": [-1.3225685, 36.78723]
    }, {
      "shop_id": "3d47ee1d-5342-45be-bffe-2fea4da6a4c7",
      "location": [-1.3224642, 36.78739]
    }, {
      "shop_id": "31d280c2-7e4a-4894-913c-90cc316c267c",
      "location": [-1.322278, 36.787807]
    }, {
      "shop_id": "78ff1dfa-1ba4-4f5f-a9cc-a5560c75a89d",
      "location": [-1.3206508, 36.78733]
    }, {
      "shop_id": "06ec7818-53bd-492c-b207-d17a9188948b",
      "location": [-1.3227817, 36.78799]
    }, {
      "shop_id": "8f390086-0088-419a-844c-07a06bc574f0",
      "location": [-1.3234826, 36.787437]
    }, {
      "shop_id": "6c3461db-cb60-4dee-a24c-123895f32a9e",
      "location": [-1.3235149, 36.78744]
    }, {
      "shop_id": "4b8b4834-60a7-45dd-b009-de40b107b2f5",
      "location": [-1.3230836, 36.78755]
    }, {
      "shop_id": "f8b65c02-c3ca-4801-80bf-1cf910f1b4bc",
      "location": [-1.3230493, 36.787525]
    }, {
      "shop_id": "06b931e5-cf01-4482-a78c-1d3571b88473",
      "location": [-1.3212581, 36.785355]
    }, {
      "shop_id": "0a46b40e-fc4a-4197-92d1-aa2e6d4e38ee",
      "location": [-1.3212885, 36.78536]
    }, {
      "shop_id": "bf30ef46-f1c7-44f4-82ac-f0cf17867312",
      "location": [-1.3207703, 36.78578]
    }, {
      "shop_id": "b9e60831-2c29-4c02-afee-397f485e7a56",
      "location": [-1.32190787792206, 36.7854232788086]
    }, {
      "shop_id": "1bed0121-fe7b-460a-b60a-379f2397f70a",
      "location": [-1.3254417, 36.785297]
    }, {
      "shop_id": "affb18e1-0506-4a13-a554-b50bdfe7ef95",
      "location": [-1.3281963, 36.78639]
    }, {
      "shop_id": "f7c24c98-4737-4976-9ca6-273c4b1e167d",
      "location": [-1.3281817, 36.786427]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Sabaki",
    "route_id": "cb98bcf6-040a-4e00-964c-e0c9692588e8",
    "matrix_info": {
      "DistanceMatrixAPI requests": 149,
      "cache_hit": "81%"
    },
    "distance": "25.65km",
    "path": "dsfG_se`Fz~E{hHzCuC`A_EhIuEdAm@nBp@`BhAzK}W`LdJr@wAhApHxABfOkENyClIzN~@J@YrAbGkDjGeM~SbUcKX}Ac@i@Dg@`AQNUR_@dHlBghIheH",
    "shops": [{
      "shop_id": "6dfd56b0-1dc2-427b-b831-fbfd7283c0df",
      "location": [-1.385606, 36.945576]
    }, {
      "shop_id": "189219ca-a30b-40cd-96ae-03cc9d7292ed",
      "location": [-1.3863866, 36.946327]
    }, {
      "shop_id": "a82e3f89-8dc7-48a1-adc4-7ae11befeff6",
      "location": [-1.3867215, 36.947285]
    }, {
      "shop_id": "9d289354-7730-4ccf-a93f-45870f031d27",
      "location": [-1.388368, 36.948364]
    }, {
      "shop_id": "08ed9803-051f-43c7-b355-ff7241da15e2",
      "location": [-1.388718, 36.948586]
    }, {
      "shop_id": "db6ef18c-ab9a-4bea-bc7f-d45ad8851841",
      "location": [-1.3892832, 36.94834]
    }, {
      "shop_id": "4ce1990b-fb4e-4e93-866d-6ec2fa5a3a22",
      "location": [-1.3897693, 36.94797]
    }, {
      "shop_id": "377b0b5f-9af9-4404-80ae-0f8e2c3cfe46",
      "location": [-1.3918316, 36.95196]
    }, {
      "shop_id": "22434342-4099-461f-a669-011ffd55340f",
      "location": [-1.3939189, 36.95017]
    }, {
      "shop_id": "15a924b3-b180-4d19-88bb-b97a363c723c",
      "location": [-1.3941821, 36.950607]
    }, {
      "shop_id": "e6904b7d-e3df-498a-b29d-4ad14c785c76",
      "location": [-1.3945522, 36.949085]
    }, {
      "shop_id": "36c292fe-9cbf-4f17-8a8c-d934e228d7b3",
      "location": [-1.3950032, 36.94906]
    }, {
      "shop_id": "cf18097d-fa8d-4274-9fe9-6c8eaa1580a8",
      "location": [-1.3976, 36.950077]
    }, {
      "shop_id": "1255fe1c-f451-46d7-810b-eb56a6e51c7f",
      "location": [-1.3976831, 36.950848]
    }, {
      "shop_id": "60bd6579-d7bd-4e41-9c57-06a9853cb356",
      "location": [-1.39934659004211, 36.948314666748]
    }, {
      "shop_id": "6bef10a9-805e-4b91-897c-48be52e990e8",
      "location": [-1.3996704, 36.948246]
    }, {
      "shop_id": "f17609fd-daa5-4ea8-996e-ea9d23e40b0e",
      "location": [-1.3996772, 36.948383]
    }, {
      "shop_id": "916c08ab-da31-4379-8c7e-e77f4e629eef",
      "location": [-1.4001049, 36.947075]
    }, {
      "shop_id": "614dbd9b-f00f-48af-947a-e3a8a1124e79",
      "location": [-1.3992355, 36.945736]
    }, {
      "shop_id": "5da89bf4-c22c-432b-913d-456045f36a19",
      "location": [-1.3969663, 36.942383]
    }, {
      "shop_id": "c565c2b0-9580-4a56-8f58-7173229c96ee",
      "location": [-1.4005134, 36.944324]
    }, {
      "shop_id": "a57bf58e-af80-4aab-85f5-4746a3cdeb9c",
      "location": [-1.4006362, 36.944794]
    }, {
      "shop_id": "ebc56ddf-4fcb-4d9c-a0fb-38e16cf5ebce",
      "location": [-1.4004556, 36.945]
    }, {
      "shop_id": "87aeed4a-274d-4e4f-8aca-275e905e2efe",
      "location": [-1.4004937, 36.9452]
    }, {
      "shop_id": "8b4b3413-b5b2-4f39-9070-b79935f7c4b2",
      "location": [-1.4008201, 36.945286]
    }, {
      "shop_id": "e107da9d-ae8a-46a8-a248-41185087b7d9",
      "location": [-1.4009043, 36.945404]
    }, {
      "shop_id": "4ce93641-e986-4229-aebe-7d7702e16fe3",
      "location": [-1.4010043, 36.945564]
    }, {
      "shop_id": "9ab421e3-4bae-4d59-a11a-c7cec0e1d9f4",
      "location": [-1.40246868133545, 36.9450073242188]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Pangani/Ngara",
    "route_id": "6f4d202c-3421-483e-9b0b-53f59c5c5e2a",
    "matrix_info": {
      "DistanceMatrixAPI requests": 588,
      "cache_hit": "73%"
    },
    "distance": "45.51km",
    "path": "dsfG_se`FsuNxmL~CwV_Dwc@oFrBaAk@q@cA_FOf@gDP_@tBgFj@kC\\mEwExA}A{Am@Dc@hCiAnEgDwISzN`@tC\\t@|CgCb@_BeAhFbAvF\\ZT_AhCjGZXD@jAoHfBwHbCiEvCYlStm@a@BGnB|ASpAl@zMhGxPtLuKtXgO_SeCSlHpp@EmUfEfCdoMerM",
    "shops": [{
      "shop_id": "c644461c-5c43-43b9-92bb-0e86d13fd052",
      "location": [-1.2693723, 36.828987]
    }, {
      "shop_id": "bf450a28-b59a-4ead-bb34-a4569876928d",
      "location": [-1.2701676, 36.83279]
    }, {
      "shop_id": "8c552fa4-4542-4cda-a47c-5d86d6020d8e",
      "location": [-1.2693737, 36.83867]
    }, {
      "shop_id": "117ecaf4-2bd5-4e8c-9100-346cea1188a6",
      "location": [-1.2681657, 36.838093]
    }, {
      "shop_id": "c5b5f2c4-b6e2-49cf-aa48-25cca23922f4",
      "location": [-1.2678391, 36.838314]
    }, {
      "shop_id": "ed111e61-e4cf-4d28-862c-507a16e12354",
      "location": [-1.2675924, 36.83865]
    }, {
      "shop_id": "c5a8d59a-a97e-4510-aa7c-16a068970b3f",
      "location": [-1.266472, 36.83873]
    }, {
      "shop_id": "b2eef9fd-27fc-456b-87b4-652cc5775da1",
      "location": [-1.2666696, 36.839565]
    }, {
      "shop_id": "1990fb17-c201-4425-b36b-fcf441e46a10",
      "location": [-1.266755, 36.839733]
    }, {
      "shop_id": "68fb1412-71d6-4985-bc89-0265b3d59330",
      "location": [-1.267353, 36.840885]
    }, {
      "shop_id": "8323ff91-b147-4184-aa87-087ff8b4b086",
      "location": [-1.2675748, 36.84159]
    }, {
      "shop_id": "c8dd33bd-646e-4eed-8cf2-233c8691ef5b",
      "location": [-1.2677213, 36.84262]
    }, {
      "shop_id": "b8f49bb5-6835-41b4-81c7-71b79ce29f22",
      "location": [-1.266641, 36.842175]
    }, {
      "shop_id": "a34aa7df-2fcd-44b6-9c4b-b141e0d4b4f4",
      "location": [-1.2661679, 36.842625]
    }, {
      "shop_id": "ffbe6753-8042-4090-b34c-a4820eec4031",
      "location": [-1.2659367, 36.842598]
    }, {
      "shop_id": "1c5b88fc-f89c-4c4b-ab6d-6bcb5ba9e2d2",
      "location": [-1.2657562, 36.84191]
    }, {
      "shop_id": "99816ef7-db99-4344-86f9-e30cdcb7ae17",
      "location": [-1.2653881, 36.840874]
    }, {
      "shop_id": "5fe25ed6-f0cd-46b6-a519-9064a3f5c7e9",
      "location": [-1.2645496, 36.842587]
    }, {
      "shop_id": "17cbfd79-c200-4dac-b282-91b8e9b526ca",
      "location": [-1.2644496, 36.840046]
    }, {
      "shop_id": "104f1528-1853-44a4-b48f-2af68c305633",
      "location": [-1.2646215, 36.839302]
    }, {
      "shop_id": "c407be38-4ccf-4c11-bb3f-7ea5129dde68",
      "location": [-1.264768242836, 36.8390312194824]
    }, {
      "shop_id": "8b088cd5-a637-47b7-b31a-b9c0fb5eddab",
      "location": [-1.2655582, 36.839714]
    }, {
      "shop_id": "25768bb0-51f9-4e02-a1f0-a75c660f5721",
      "location": [-1.2657363, 36.84019]
    }, {
      "shop_id": "20ace1bc-5864-4f20-8500-c6f2f94b1031",
      "location": [-1.26538574695587, 36.8390197753906]
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
      "shop_id": "111fc94b-5f1c-4f0e-bbde-b12d711dc290",
      "location": [-1.2666848897934, 36.8366241455078]
    }, {
      "shop_id": "f27b654d-01a1-4e93-8234-1f2431963d38",
      "location": [-1.2668182, 36.836487]
    }, {
      "shop_id": "dcb58276-e02f-44b6-8296-e1e6a3757f18",
      "location": [-1.26685082912445, 36.8364791870117]
    }, {
      "shop_id": "a05a0744-1188-495a-a922-3d69f8a8fd22",
      "location": [-1.26723384857178, 36.8379974365234]
    }, {
      "shop_id": "510608d1-1b45-478d-83d3-599588effe4c",
      "location": [-1.2677538394928, 36.8395576477051]
    }, {
      "shop_id": "63a3e09f-ef59-4f2a-91ec-6eaecbfc2ecc",
      "location": [-1.268409, 36.840572]
    }, {
      "shop_id": "2b136b87-fc6a-437d-96ec-a9d04c02cc2c",
      "location": [-1.269165, 36.840702]
    }, {
      "shop_id": "683733ab-bcf9-411e-945c-58eec193a8bd",
      "location": [-1.2724396, 36.83323]
    }, {
      "shop_id": "a0d6573e-0e45-4c48-83bc-1cfe45e4b14e",
      "location": [-1.2722739, 36.83321]
    }, {
      "shop_id": "131b0007-5ade-4e2a-bea0-03a4cb217bee",
      "location": [-1.2722349, 36.832645]
    }, {
      "shop_id": "6ebab036-c826-4914-9dd2-5f927751313c",
      "location": [-1.2727035, 36.832752]
    }, {
      "shop_id": "ab9d6362-7842-449b-bf6a-7318d106821a",
      "location": [-1.2731107, 36.832523]
    }, {
      "shop_id": "b641f0dd-7f49-4674-98ff-bf615720d8d4",
      "location": [-1.2754868, 36.83119]
    }, {
      "shop_id": "af83a43c-e930-4430-b363-83753c95ff0d",
      "location": [-1.2783449, 36.829002]
    }, {
      "shop_id": "ec7a0bc9-e1fc-459d-80be-c6d0d865291f",
      "location": [-1.2763062, 36.824886]
    }, {
      "shop_id": "190bdacf-c6ba-4d5d-b746-83769eaa3d05",
      "location": [-1.2737149, 36.828087]
    }, {
      "shop_id": "04d1771c-bfa5-4883-9b3e-a467fee77b38",
      "location": [-1.2730438, 36.82819]
    }, {
      "shop_id": "bdebd735-dae4-4193-96a9-ff5d0d82ca88",
      "location": [-1.2745488, 36.820255]
    }, {
      "shop_id": "b57b9785-1a6f-456c-9d39-d486c00d9a22",
      "location": [-1.2745205, 36.823845]
    }, {
      "shop_id": "7c0dfa14-e0a8-4391-9bf7-4fac3c6f473d",
      "location": [-1.2755212, 36.823166]
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
    "route_name": "Twiga B2C Thome",
    "route_id": "726654b5-2e35-4b70-a150-e5b462f544a6",
    "matrix_info": {
      "DistanceMatrixAPI requests": 0,
      "cache_hit": "100%"
    },
    "distance": "16.48km",
    "path": "|qoF_r``FoiHcaFniHbaF",
    "shops": [{
      "shop_id": "3517466b-6c13-453c-b780-536eaf19b5e4",
      "location": [-1.1840681, 36.908337]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Rongai South",
    "route_id": "d999c856-a2e9-4563-826c-b06027be365b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 567,
      "cache_hit": "73%"
    },
    "distance": "53.09km",
    "path": "zipGwtf_FMARP@Bw@}p@kTiLaB@{AdA}DcGoRki@rWai@_kTprB`mT}yBlB}Bc@yDQsNGRrHvMz@jEBDtCrA~NcFhTg_@{g@ni@CLb@LJJmKbEODCVF@rEbMnBBh@|FGLX~A^`DgFbJ{@dIzEeBb@mEvJfLmJvDe@`L}@fDSNoDnlAxTaG",
    "shops": [{
      "shop_id": "e11dd380-666d-44d2-846a-3d749d84c4dd",
      "location": [-1.399425, 36.73949]
    }, {
      "shop_id": "57ea8f04-a66a-425c-a22a-d569c0f294af",
      "location": [-1.3995308, 36.739403]
    }, {
      "shop_id": "31de7038-49b9-4038-b308-e8b7c1c3a630",
      "location": [-1.3995391, 36.739376]
    }, {
      "shop_id": "ebaf3603-cc3d-46a6-bba7-1ea6202dd753",
      "location": [-1.3992614, 36.747368]
    }, {
      "shop_id": "ff898958-b069-4c22-8bf6-6f9867cfd4d7",
      "location": [-1.395843, 36.7495]
    }, {
      "shop_id": "c3ae0815-a73a-4c72-90dc-965a67ae5f34",
      "location": [-1.3953547, 36.74949]
    }, {
      "shop_id": "a35dbc4a-09b7-494a-a8f8-dfe1ecacc873",
      "location": [-1.3948925, 36.74914]
    }, {
      "shop_id": "2a2334f8-3443-4dad-a65f-9ff9b29aaaac",
      "location": [-1.3939445, 36.750443]
    }, {
      "shop_id": "529e5a8f-9d45-408c-8d28-228b04f621e5",
      "location": [-1.3908176, 36.757217]
    }, {
      "shop_id": "5f50c7a7-5884-4181-b60e-d261a1d1e89c",
      "location": [-1.39475882053375, 36.7639465332031]
    }, {
      "shop_id": "3f2fc815-edf1-45f5-bbaf-e38e64ad5f20",
      "location": [-1.2853162, 36.745457]
    }, {
      "shop_id": "72ebb880-a50e-4c42-b9d5-35f989672efd",
      "location": [-1.3950922, 36.765133]
    }, {
      "shop_id": "bad0b049-b650-44ae-acd2-dbe12838bfdc",
      "location": [-1.3956351, 36.765755]
    }, {
      "shop_id": "e3522207-0669-450f-8fe5-7f61df3f8730",
      "location": [-1.3954568, 36.766693]
    }, {
      "shop_id": "1d39d863-2871-452d-98f7-376c833aecac",
      "location": [-1.3953652, 36.76919]
    }, {
      "shop_id": "76784566-5552-4869-b11f-d6cc87efcb93",
      "location": [-1.3953339, 36.76909]
    }, {
      "shop_id": "67a59401-b3c2-4c21-8e32-e0e752a52ca0",
      "location": [-1.3968658, 36.766735]
    }, {
      "shop_id": "7434e0d7-fe22-44e7-b1cc-10b109ee1c08",
      "location": [-1.3971655, 36.765713]
    }, {
      "shop_id": "dd314619-09ff-48f4-99d8-8d8206e9b7ae",
      "location": [-1.3971915, 36.76568]
    }, {
      "shop_id": "83c743eb-8df9-4041-bfb2-49565226907a",
      "location": [-1.39794, 36.765255]
    }, {
      "shop_id": "c1c39f91-6380-4f22-a2d3-489e10a7fa60",
      "location": [-1.4005047, 36.766403]
    }, {
      "shop_id": "e688bfd0-b718-4fa6-bf4e-15af398cb03d",
      "location": [-1.4039128, 36.77156]
    }, {
      "shop_id": "5acfab1e-db18-4042-97f5-b6a52938261d",
      "location": [-1.3973706, 36.76476]
    }, {
      "shop_id": "43f4bafa-408e-4d54-8691-481871ae73ef",
      "location": [-1.3973453, 36.764694]
    }, {
      "shop_id": "0a8ae381-8bd0-495a-85b7-b29eec625943",
      "location": [-1.3975283, 36.76462]
    }, {
      "shop_id": "89f38a17-8459-40fb-a3ff-ee2de0382b6e",
      "location": [-1.3975861, 36.764565]
    }, {
      "shop_id": "3cfb1b38-bea5-41ae-acc1-b440c0d66e6d",
      "location": [-1.3955958, 36.76358]
    }, {
      "shop_id": "90f91b91-7c44-4ba3-ad1e-495f649ae954",
      "location": [-1.3955163, 36.763546]
    }, {
      "shop_id": "becb2179-9e2e-47fc-8635-9e4407e87d86",
      "location": [-1.3955029, 36.76343]
    }, {
      "shop_id": "1b9fab92-e8d0-4928-a382-b6da5e87f0c4",
      "location": [-1.395536, 36.76342]
    }, {
      "shop_id": "088f552b-169a-4a7b-8bbc-60cef0d47635",
      "location": [-1.3965966, 36.76116]
    }, {
      "shop_id": "a58a6039-5d0d-41ac-8e22-8926d56a35c1",
      "location": [-1.3971575, 36.761143]
    }, {
      "shop_id": "c371ef29-8721-477d-b419-9770a37517a9",
      "location": [-1.3973686, 36.759865]
    }, {
      "shop_id": "64730884-98a2-47fe-ab2e-b57e915a0787",
      "location": [-1.39733, 36.759796]
    }, {
      "shop_id": "ea382d6e-1da4-457f-bf1a-667b9523ff18",
      "location": [-1.3974605, 36.759315]
    }, {
      "shop_id": "550f4b14-ef81-4637-9fdc-f982c82e5856",
      "location": [-1.397616, 36.758514]
    }, {
      "shop_id": "a5a4b51d-346f-4aac-8c50-5cf024fe55e4",
      "location": [-1.3964627, 36.756733]
    }, {
      "shop_id": "16ea07bb-f687-44ff-b728-d33ff4a2e6c8",
      "location": [-1.396163, 36.755104]
    }, {
      "shop_id": "7f3f8607-c7db-4031-ac29-d84449e51e86",
      "location": [-1.3972591, 36.75561]
    }, {
      "shop_id": "a401c21c-d887-44bb-86d4-c4a462dddb49",
      "location": [-1.397435, 36.75664]
    }, {
      "shop_id": "dc7d16ab-5a1e-4552-869f-5d163640a20d",
      "location": [-1.3993174, 36.75452]
    }, {
      "shop_id": "4e883690-17d5-4271-8549-15800953b6a5",
      "location": [-1.3974875, 36.753597]
    }, {
      "shop_id": "93637a69-778d-4f93-b1f1-c30987b9e8d6",
      "location": [-1.3973048, 36.751514]
    }, {
      "shop_id": "f28a4c0c-e082-4702-be30-16462df7c3e2",
      "location": [-1.39699304103851, 36.7506713867188]
    }, {
      "shop_id": "1769a3a8-5b0a-4c20-b939-8a5a7d09e3ce",
      "location": [-1.39688730239868, 36.7505912780762]
    }, {
      "shop_id": "dad28fde-e2a8-49ce-a2f5-52f6b716e0bf",
      "location": [-1.396014, 36.738186]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Rongai North",
    "route_id": "781c7064-a4b3-4d12-a296-f3e71728e922",
    "matrix_info": {
      "DistanceMatrixAPI requests": 605,
      "cache_hit": "70%"
    },
    "distance": "20.89km",
    "path": "zipGwtf_FqUsIuRoM{CeHrFedAb@FlGrE~J\\r@|E@ExAh@}DaOPkC|T{AaIaZs@d@~OaEqYbXGHsAwRaEv@IaCyPxJnBiFj@SvAmBhBqCe^yHGVcFjSq@jBdAInCtEuEv@]xYn@TnOmBwDnPvDf@xA~UrE`Ag@pFp[vAGzb@eBd|@b_@~r@cGmiB",
    "shops": [{
      "shop_id": "8d2b0552-bb15-4293-85d0-0f9b2169d18b",
      "location": [-1.3958908, 36.741184]
    }, {
      "shop_id": "8ce4f0dd-c7aa-4fa9-960a-e1eb66de61e8",
      "location": [-1.3927402, 36.7435]
    }, {
      "shop_id": "5f52dc1f-e4ed-45f3-9d59-224a26d4d608",
      "location": [-1.3919609, 36.74497]
    }, {
      "shop_id": "b11d461f-64ca-47e2-b5d8-26fafabaaf47",
      "location": [-1.3931783, 36.75604]
    }, {
      "shop_id": "c33f37fb-6042-43b2-a69c-8482c6f4e537",
      "location": [-1.393357, 36.756]
    }, {
      "shop_id": "0e2c229a-8345-4598-b323-567126485659",
      "location": [-1.3947122, 36.754936]
    }, {
      "shop_id": "40741ceb-867f-484d-a44e-61b3b1d3c276",
      "location": [-1.396627, 36.754787]
    }, {
      "shop_id": "daa982b1-878c-4804-a474-25652de75efe",
      "location": [-1.3968948, 36.753685]
    }, {
      "shop_id": "b0249113-a64b-483f-8412-d8214fccf640",
      "location": [-1.396899, 36.75371]
    }, {
      "shop_id": "8f425bcc-775c-4269-98dd-bd06b0fc09fb",
      "location": [-1.3973509, 36.7535]
    }, {
      "shop_id": "57d95074-1f9a-4327-ac01-cc50630435da",
      "location": [-1.3963995, 36.756065]
    }, {
      "shop_id": "abce2961-11bc-4481-be09-562397c085bd",
      "location": [-1.3964934, 36.756775]
    }, {
      "shop_id": "3b4571c3-6811-4522-be7f-34c4df7948db",
      "location": [-1.4000019, 36.757233]
    }, {
      "shop_id": "bddcd863-9030-42db-8635-6938d8b9789b",
      "location": [-1.3983909, 36.761562]
    }, {
      "shop_id": "c1087d55-60b2-4007-b498-c5fa9abac729",
      "location": [-1.398134, 36.76137]
    }, {
      "shop_id": "4461386c-2c40-4676-8ba1-26b408a97755",
      "location": [-1.4008538, 36.762344]
    }, {
      "shop_id": "254c4770-8e97-4b5d-9fc6-4eb9070a869a",
      "location": [-1.3965985, 36.758316]
    }, {
      "shop_id": "17a44ce1-96d0-433c-b44d-faea1fb22ac2",
      "location": [-1.39656209945679, 36.7582740783691]
    }, {
      "shop_id": "f36860fd-3a23-4c51-84d0-5ca722122a45",
      "location": [-1.3961445, 36.761425]
    }, {
      "shop_id": "9a60b9ad-9c8d-432e-830a-fafc1e1561df",
      "location": [-1.3951734, 36.761147]
    }, {
      "shop_id": "16f850c6-e1c9-482c-8480-6ae4e78f9123",
      "location": [-1.3951162, 36.7618]
    }, {
      "shop_id": "58803867-0442-44b2-b626-967cf9560b15",
      "location": [-1.392266, 36.759907]
    }, {
      "shop_id": "3ab948d3-0e32-460d-a9cb-59b33c8e70b1",
      "location": [-1.3928332, 36.761078]
    }, {
      "shop_id": "4c21ee75-8465-4373-982e-fa7451025de3",
      "location": [-1.3930494, 36.761177]
    }, {
      "shop_id": "4179fe13-488c-476e-b39b-0c45b7a9ebf4",
      "location": [-1.3934878, 36.761734]
    }, {
      "shop_id": "736a92c9-2342-470a-9050-a3b455abc123",
      "location": [-1.3940228, 36.762455]
    }, {
      "shop_id": "207a1760-d38e-4b56-8761-7578daa2bb48",
      "location": [-1.38902962207794, 36.764030456543]
    }, {
      "shop_id": "5c185da5-da97-4c4c-9d00-11d9ac18154e",
      "location": [-1.388986, 36.763912]
    }, {
      "shop_id": "d3aa6ff7-593e-4854-b10f-d098953663bf",
      "location": [-1.3878547, 36.760647]
    }, {
      "shop_id": "492f04f8-1082-427e-8945-74e36e435502",
      "location": [-1.3876029, 36.760105]
    }, {
      "shop_id": "a53aaada-8cee-4180-a698-9efa8b46e083",
      "location": [-1.38795304298401, 36.7601585388184]
    }, {
      "shop_id": "c09e43f2-8b70-4f64-a6ef-81b5b0697537",
      "location": [-1.3886662, 36.75909]
    }, {
      "shop_id": "8233db94-ba46-460c-bb14-91dc99391ca4",
      "location": [-1.387602, 36.758812]
    }, {
      "shop_id": "862cd636-6665-4011-bad0-f94a6cd76c17",
      "location": [-1.3874471, 36.754524]
    }, {
      "shop_id": "79680774-4f60-4f6a-904a-91718adf0c62",
      "location": [-1.3876853, 36.754406]
    }, {
      "shop_id": "f169746d-4219-4bd7-9976-263a8be2e65d",
      "location": [-1.3903309, 36.754963]
    }, {
      "shop_id": "7b161f59-20a6-4ef3-af1a-f575715084f4",
      "location": [-1.3894117, 36.752155]
    }, {
      "shop_id": "55f9f501-50ee-4d01-ad9b-ffad7f76b739",
      "location": [-1.3903275, 36.75196]
    }, {
      "shop_id": "ea820019-1b4f-488f-90a6-6be15954e7b8",
      "location": [-1.3907778, 36.748283]
    }, {
      "shop_id": "513bc91c-4484-4563-8b48-cde93b99eea0",
      "location": [-1.3918446, 36.74795]
    }, {
      "shop_id": "b75d94a5-8dec-40ee-b3e1-c858c340e4d4",
      "location": [-1.3916403, 36.746742]
    }, {
      "shop_id": "fca86959-268a-4f48-b88f-6ac1addb0be7",
      "location": [-1.3962073, 36.746296]
    }, {
      "shop_id": "687a70bb-8676-45ff-a568-1e2f2fb9d7f4",
      "location": [-1.3961661, 36.740555]
    }, {
      "shop_id": "03bcbe26-1c41-48a7-b775-7c15bf0185d6",
      "location": [-1.3956621, 36.730766]
    }, {
      "shop_id": "4a31c9b9-c005-406d-a9f0-79f43cc1f82c",
      "location": [-1.4007963, 36.722446]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Syokimau",
    "route_id": "58346854-846d-4eb8-b550-7974a704a183",
    "matrix_info": {
      "DistanceMatrixAPI requests": 202,
      "cache_hit": "85%"
    },
    "distance": "61.96km",
    "path": "dsfG_se`FgrJz`@~dMu_C_@IeAsAQEdYwfAzEym@ooBkn@tVioAqj@eqD[]AAdEs^wWjUVrA{FsDMI?AoBw@}MoPpe@r\\diCj{FtItKpKp[vFDaGfSbk@pZDDDGQLKKn@YbOaHaCxCu[~{@a`ChsAdGvFCFih@vb@",
    "shops": [{
      "shop_id": "198fbbba-0216-4c84-9c6d-d14b39ec4a3d",
      "location": [-1.2903936, 36.8925]
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
      "shop_id": "284f6f5c-5f02-46c5-8ced-341d988c1e10",
      "location": [-1.3666177, 36.92507]
    }, {
      "shop_id": "f33f8aaa-bc98-408f-85f8-a1b08fc2e541",
      "location": [-1.36771881580353, 36.9325561523438]
    }, {
      "shop_id": "4cc7b12a-39bc-4943-921b-0277a2735070",
      "location": [-1.3497208, 36.940136]
    }, {
      "shop_id": "c7e62782-5377-4d82-a340-157eecaa04c1",
      "location": [-1.3535085, 36.952988]
    }, {
      "shop_id": "46d9a96c-095f-4782-9aed-b6a5ed8f727a",
      "location": [-1.346543, 36.981495]
    }, {
      "shop_id": "9f9c4b46-b86f-4594-bba4-51130d624986",
      "location": [-1.3463961, 36.98165]
    }, {
      "shop_id": "2d6d18e1-ba3c-4181-a641-43b956654418",
      "location": [-1.3463857, 36.98166]
    }, {
      "shop_id": "05f967e5-a53b-4a95-b487-b927c5d5c567",
      "location": [-1.3473825, 36.98672]
    }, {
      "shop_id": "53e2d87d-d563-40e4-a82b-abea3e0bac67",
      "location": [-1.34341502189636, 36.9831390380859]
    }, {
      "shop_id": "d5e300a7-00a2-4558-a8e7-4fd4af9fbd85",
      "location": [-1.343542, 36.982723]
    }, {
      "shop_id": "b8497e2b-cf00-471c-a2b0-d380e5915687",
      "location": [-1.3422759, 36.983624]
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
      "shop_id": "528ca3e7-f4d5-4fbd-bb15-0b685dfd0367",
      "location": [-1.3392631, 36.98676]
    }, {
      "shop_id": "2c16d7b7-3543-45d7-8a67-a4c8f83b6b9d",
      "location": [-1.3454301, 36.982018]
    }, {
      "shop_id": "a7a1a578-2b8d-4135-9116-a11583276fc6",
      "location": [-1.3675429, 36.941635]
    }, {
      "shop_id": "d25c707f-0b2d-4fef-9e6e-dc0ff4cc355b",
      "location": [-1.3692467, 36.93961]
    }, {
      "shop_id": "0358fdb8-c78a-4a58-826b-4a4f4b4c038f",
      "location": [-1.371257, 36.935043]
    }, {
      "shop_id": "bc0abe67-1626-49e2-a3f8-be9cbc2942e0",
      "location": [-1.372499, 36.93501]
    }, {
      "shop_id": "05424e45-04c6-4ec7-b80d-48c28938855f",
      "location": [-1.3712058, 36.931767]
    }, {
      "shop_id": "db6b8b77-5a78-4a73-a82c-48959eb05956",
      "location": [-1.378271, 36.927357]
    }, {
      "shop_id": "3b9d1d56-1ebf-4f24-ab61-295baf731c1d",
      "location": [-1.3783047, 36.92733]
    }, {
      "shop_id": "28efbe08-2666-48e4-8e2f-8fc4b79fa233",
      "location": [-1.3783287, 36.927372]
    }, {
      "shop_id": "2cf1ee8f-0025-410b-b507-a0615fcfae92",
      "location": [-1.3782377, 36.927303]
    }, {
      "shop_id": "d9815c4c-f548-47f1-b913-7ab4a9c2f204",
      "location": [-1.3781829, 36.927357]
    }, {
      "shop_id": "8f449abc-b6ce-4d3e-822c-ceecacc77e40",
      "location": [-1.3784183, 36.927494]
    }, {
      "shop_id": "633ea396-879d-4fcc-8529-e264f27baea1",
      "location": [-1.3810022, 36.92894]
    }, {
      "shop_id": "1a89e512-3154-4021-b381-c47cadcfaddd",
      "location": [-1.3803536, 36.928165]
    }, {
      "shop_id": "f1469d8e-4509-4be3-b287-a59a7a12f71c",
      "location": [-1.375762, 36.918407]
    }, {
      "shop_id": "e95c2478-5ce4-44f3-ac22-6089b5b0eea3",
      "location": [-1.3551062, 36.904915]
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
    "route_name": "Ruaka 2",
    "route_id": "2b821c38-4de6-47b6-8593-cae13ffb97c4",
    "matrix_info": {
      "DistanceMatrixAPI requests": 204,
      "cache_hit": "92%"
    },
    "distance": "31.08km",
    "path": "`ijF{`p_FKtbAe[xbBMLGXr@MtBNpO_IntAgeB^TnAnAzDBb@FlQaN~EyCiItI}@zBoHnPbBuEBTmFvQiC_FsT~`@`\\{PnCbHX~OgN~b@_@z@q@x@u@rDob@xjA{dDhkElaAicBhAgKcNiz@[e@LjCqFXZTG{@K~C]e@|BkZB@@Ap@Fz@[P?r@dAn@aUjGqInA~@jP}[rGiJvCUnYcvD",
    "shops": [{
      "shop_id": "8e5fb622-4f11-4c3a-a002-680e33c16e3a",
      "location": [-1.2047453, 36.776672]
    }, {
      "shop_id": "fa544e01-931c-4629-8707-d4a60280ee3d",
      "location": [-1.2002375, 36.760704]
    }, {
      "shop_id": "a7811437-af04-46a4-a62e-25758d2910ae",
      "location": [-1.2001654, 36.76063]
    }, {
      "shop_id": "d18ecd11-4257-45f0-8071-1a551644d2b7",
      "location": [-1.20013165473938, 36.760498046875]
    }, {
      "shop_id": "8a40e4bc-8319-4335-beaa-fa41d9b18279",
      "location": [-1.20039093494415, 36.7605743408203]
    }, {
      "shop_id": "7cb4663c-981d-410a-9710-fce9dcff7bbf",
      "location": [-1.2009766, 36.760487]
    }, {
      "shop_id": "858d4dce-bdc5-442f-adf4-18e8b89107ba",
      "location": [-1.203634, 36.76209]
    }, {
      "shop_id": "d912fa44-ea37-43e2-8ff3-5dea4312b0d0",
      "location": [-1.2173086, 36.77845]
    }, {
      "shop_id": "7cb47c68-3c84-4344-8ffa-2c17e33025fc",
      "location": [-1.2174743, 36.77834]
    }, {
      "shop_id": "ddd2e15b-0c89-4afd-a2d8-7bd4a571e43d",
      "location": [-1.2178729, 36.777935]
    }, {
      "shop_id": "7e3fa8ba-e7c4-49ff-9c3d-2215d94fc800",
      "location": [-1.2188088, 36.77792]
    }, {
      "shop_id": "2cb27c73-00e4-4531-891b-2f38989c0ce5",
      "location": [-1.2189945, 36.777878]
    }, {
      "shop_id": "605c04af-c87d-4f4e-9246-e0abd99b9b2a",
      "location": [-1.2219445, 36.78029]
    }, {
      "shop_id": "310035d9-ba87-471f-a319-a01c6beeb0d7",
      "location": [-1.2230625, 36.78106]
    }, {
      "shop_id": "916e8ce2-dc55-4306-91b6-2554559dd79f",
      "location": [-1.2214115, 36.779354]
    }, {
      "shop_id": "a45910ff-b481-4ae3-987c-1eee28b17c35",
      "location": [-1.2210962, 36.77873]
    }, {
      "shop_id": "0d35705c-9ca2-40d9-89cb-06d36bd4064a",
      "location": [-1.2195773, 36.775925]
    }, {
      "shop_id": "203a297b-22bb-47a1-bb6e-d8ee3b327d6d",
      "location": [-1.2200832, 36.776997]
    }, {
      "shop_id": "b527a235-9ae1-4a03-840b-e6d037f274be",
      "location": [-1.2200975, 36.776886]
    }, {
      "shop_id": "f8b2da1f-2fa9-4932-933b-f90f262c50d0",
      "location": [-1.218908, 36.77389]
    }, {
      "shop_id": "1a49c20d-f842-42a5-a75a-835db6f8d00f",
      "location": [-1.2182221, 36.775013]
    }, {
      "shop_id": "34dbe44d-a588-4d1d-b9dd-1afaed2653d4",
      "location": [-1.214762, 36.769566]
    }, {
      "shop_id": "55e2d885-9de7-45a0-a69d-e9c0f26a41f0",
      "location": [-1.2194145, 36.772427]
    }, {
      "shop_id": "e0bfdab1-2758-4c0e-9f37-51143d9c3a41",
      "location": [-1.2201326, 36.77097]
    }, {
      "shop_id": "ecda9d72-b5a7-4f20-aa75-8fdf618d93f3",
      "location": [-1.2202609, 36.76825]
    }, {
      "shop_id": "c0a50255-2bf2-4295-966f-57669d6fc210",
      "location": [-1.2178218, 36.762493]
    }, {
      "shop_id": "7a5314ca-b3b2-40d3-847f-19284048ca33",
      "location": [-1.2176605, 36.762188]
    }, {
      "shop_id": "4beccdda-b0d8-49cc-9f31-fec4003384fd",
      "location": [-1.2174069, 36.7619]
    }, {
      "shop_id": "575c3afc-5b72-49d5-b9ec-0da740468f25",
      "location": [-1.2171403, 36.760998]
    }, {
      "shop_id": "e369edf3-0121-40b5-bdf3-f555007c53d2",
      "location": [-1.2114563, 36.74887]
    }, {
      "shop_id": "daa0be24-d1c7-4ac3-ba14-f8ac52ecdf48",
      "location": [-1.1849177, 36.716175]
    }, {
      "shop_id": "881b2264-f5f6-405c-9a69-ec6df969a028",
      "location": [-1.19554853439331, 36.7322311401367]
    }, {
      "shop_id": "4b574667-1272-4896-a32e-f026559b3471",
      "location": [-1.1959203, 36.734188]
    }, {
      "shop_id": "e8748ea6-1252-4381-a35e-889fb8279928",
      "location": [-1.1935031, 36.74368]
    }, {
      "shop_id": "c8bcbb21-47d8-4715-9a4c-1041325fb8f8",
      "location": [-1.1933638, 36.74387]
    }, {
      "shop_id": "c5279f39-965a-4af3-be16-085695b19da7",
      "location": [-1.1934295, 36.74317]
    }, {
      "shop_id": "e9d24395-d697-44c7-bb44-051ab1e747f0",
      "location": [-1.1922224, 36.74304]
    }, {
      "shop_id": "bb9283ba-ca56-484c-a57d-eb710b4f6859",
      "location": [-1.1923594, 36.74293]
    }, {
      "shop_id": "4ee4fcd9-12cc-4ea5-bd2e-6d640dc3b612",
      "location": [-1.1923229, 36.743233]
    }, {
      "shop_id": "c3472025-8d4f-4f1e-beeb-2a4cd3e16a54",
      "location": [-1.19225895404816, 36.7424278259277]
    }, {
      "shop_id": "8c43b81e-462c-454d-bfd5-fa609f9ae81b",
      "location": [-1.1921115, 36.742622]
    }, {
      "shop_id": "3b95132f-221a-41ae-b892-6ac4bd2c48f0",
      "location": [-1.1927432, 36.746998]
    }, {
      "shop_id": "5133b2dd-d389-4ad2-8371-c7c8409f921d",
      "location": [-1.192761, 36.746986]
    }, {
      "shop_id": "291420c5-d2f9-4ad5-a208-1576fb4d97ad",
      "location": [-1.1927685, 36.746998]
    }, {
      "shop_id": "b656c503-b026-41b4-9678-dff89de54466",
      "location": [-1.1930238, 36.74696]
    }, {
      "shop_id": "9c904337-227f-4fc5-a93c-c2e81877c18e",
      "location": [-1.1933209, 36.747097]
    }, {
      "shop_id": "37fa48ad-8563-4c76-8f03-097d2e5e6871",
      "location": [-1.19341003894806, 36.7471008300781]
    }, {
      "shop_id": "3f087c91-c5e1-4109-b031-851ad24f353b",
      "location": [-1.1936696, 36.746746]
    }, {
      "shop_id": "ef3344b1-3e33-483f-8ca2-2ccc8732d6bb",
      "location": [-1.1939117, 36.75028]
    }, {
      "shop_id": "da3a6502-45b9-46c1-a0f8-413ebe1f5b5e",
      "location": [-1.1952462, 36.75197]
    }, {
      "shop_id": "aba6bf5f-f123-41bb-b04e-748464467276",
      "location": [-1.19564974308014, 36.7516479492188]
    }, {
      "shop_id": "9e65ba46-1b26-4959-81a5-824677a8cabc",
      "location": [-1.1984268, 36.756283]
    }, {
      "shop_id": "00066d09-6e2e-4104-b03b-6927490e1972",
      "location": [-1.1998146, 36.758095]
    }, {
      "shop_id": "bc267140-d84f-4cae-b8f4-0abc79e9ee48",
      "location": [-1.2005719, 36.758205]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "South C",
    "route_id": "e4eeb1fb-e753-424c-a553-5e123def20ba",
    "matrix_info": {
      "DistanceMatrixAPI requests": 177,
      "cache_hit": "92%"
    },
    "distance": "18.38km",
    "path": "tz|Fmdx_F~mC{bAjRaKaA?KdCfMzVr@bHcBqJwIt@[lTtB|OfCxJHBNAt@FBQ|AUj@N`HPaDvFlDhAsQkFK|@\\vAhFhRyIgE_HdAUgAHO[AMUBMQQs@_BkMgK`DdSJhAl@pAf@x@yGT^RBBA@RLHCkBbBjY~O~@j@NXobDqr@",
    "shops": [{
      "shop_id": "cc1af282-67dd-4de5-be99-1e4c4771e8e9",
      "location": [-1.3226731, 36.839893]
    }, {
      "shop_id": "f6cdb270-b35e-4ecd-a0a0-77ecb16f4580",
      "location": [-1.3257688, 36.84182]
    }, {
      "shop_id": "e75fa04c-1038-44f0-aca0-32a532fc07a7",
      "location": [-1.3254433, 36.84182]
    }, {
      "shop_id": "f458a2d9-73e7-432c-87a1-2c871c470c95",
      "location": [-1.3253757, 36.84115]
    }, {
      "shop_id": "818c98cb-b77b-4152-9097-55cdaff6db8f",
      "location": [-1.3276558, 36.837326]
    }, {
      "shop_id": "c1717d6e-bc38-4951-a325-4dfaf5c72696",
      "location": [-1.32792460918427, 36.835865020752]
    }, {
      "shop_id": "a66e5802-2c1d-44d9-a1bb-4d86c366a1a9",
      "location": [-1.3274204, 36.837715]
    }, {
      "shop_id": "fbb43e6d-76d4-40d6-b846-94d45ea3d4cf",
      "location": [-1.3256963, 36.83745]
    }, {
      "shop_id": "df04d9d8-5e8f-4de8-84a8-00cfafbe0bee",
      "location": [-1.3255591, 36.834023]
    }, {
      "shop_id": "f77c94b3-1761-4622-9e1e-8684085d3566",
      "location": [-1.3261493, 36.831314]
    }, {
      "shop_id": "ede1a681-e706-48c4-8050-c24aa49bccf1",
      "location": [-1.3268299, 36.82942]
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
      "shop_id": "6244f21e-86cf-42d2-9aab-f46dc1b4ff4a",
      "location": [-1.3293893, 36.8294]
    }, {
      "shop_id": "b6afa68a-69fc-4710-97bd-1c01c3bf4bb3",
      "location": [-1.3285805, 36.828163]
    }, {
      "shop_id": "0b066893-4b9b-497e-bd0c-122581bae71b",
      "location": [-1.3294513, 36.827793]
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
      "shop_id": "c3bccaf2-e059-4e6a-bd32-0c1b809aee97",
      "location": [-1.3277324, 36.82513]
    }, {
      "shop_id": "7cdb41ad-0134-4534-96d7-6de49d950b08",
      "location": [-1.3260009, 36.826126]
    }, {
      "shop_id": "d33e8080-eea0-48aa-8789-8dc530c9001d",
      "location": [-1.3245598, 36.825775]
    }, {
      "shop_id": "fd991f76-c8ef-4f64-b363-c8bc8e51834b",
      "location": [-1.3244537, 36.82614]
    }, {
      "shop_id": "f32e6e37-d3c3-4578-8c14-6b3fd477ae11",
      "location": [-1.3244983, 36.826218]
    }, {
      "shop_id": "fac3802a-9b45-4aa3-9e57-fbffbde06c1e",
      "location": [-1.3243581, 36.826225]
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
      "shop_id": "18cfa5ce-d4e5-40de-a42a-1e89fcacdc44",
      "location": [-1.3216592, 36.828945]
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
      "shop_id": "98074cc5-e79e-4a5c-b565-14aac4130c2a",
      "location": [-1.3215483, 36.824528]
    }, {
      "shop_id": "5e8de6e3-4447-49ae-812b-d7b116f3377c",
      "location": [-1.3217106, 36.824425]
    }, {
      "shop_id": "2281e36e-56a2-4d75-83be-4a444a9dcbda",
      "location": [-1.3217275, 36.824413]
    }, {
      "shop_id": "2f6d2f02-dfb5-4666-8b13-844df0916438",
      "location": [-1.3217237, 36.824398]
    }, {
      "shop_id": "4df5844b-7560-4b41-9d55-01423cf2c168",
      "location": [-1.32182013988495, 36.824333190918]
    }, {
      "shop_id": "696d8645-e150-4dd1-bb49-91fd70ccb0ed",
      "location": [-1.3218671, 36.824345]
    }, {
      "shop_id": "092df1fb-6dd3-47ed-ae93-6881023b6586",
      "location": [-1.3213314, 36.823845]
    }, {
      "shop_id": "2ac4ee91-5291-4284-8cf8-0d03297557be",
      "location": [-1.3255533, 36.821125]
    }, {
      "shop_id": "fcab53cb-8f53-4c9f-8bf8-8d54d745fc0a",
      "location": [-1.3258713, 36.820908]
    }, {
      "shop_id": "edb2ff56-1511-455d-9952-4f0ceb5a3f1a",
      "location": [-1.3259462, 36.82078]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ngong Bulbul",
    "route_id": "8f7a1712-b837-41a9-b2e0-ec699c21207b",
    "matrix_info": {
      "DistanceMatrixAPI requests": 798,
      "cache_hit": "76%"
    },
    "distance": "46.62km",
    "path": "zipGwtf_Fmb@{HstAty@eQ|c@|B~C^pAvEjKb@t@{YuBvJ~JgR}VeHtGlFnHjA^BRw@j@m@lA_A|AmA~@aA`Bk@jAyBxA}gEbsFmFxJK?wDbEADR~@_AvB?HCPe@yCmM`NS[uB{AEACK_BuF}Tg[_ZrfAoFrF}[jf@GOg@KMD@BL|BmNfDm@GS@eBBtk@rLvFs@nhByaArfLubGAJgbBqdCu@~@GHlh@kp@",
    "shops": [{
      "shop_id": "d29d5655-4cfa-4d86-b368-826cf4184720",
      "location": [-1.3938338, 36.74106]
    }, {
      "shop_id": "2b9ce71f-a737-4c4d-a621-2e999671f073",
      "location": [-1.380125, 36.731667]
    }, {
      "shop_id": "9a960962-4fba-4480-8730-be220c639d6d",
      "location": [-1.377217, 36.725758]
    }, {
      "shop_id": "6ae771de-789b-46a9-901a-50c192a85e7b",
      "location": [-1.3778522, 36.72496]
    }, {
      "shop_id": "b0c41331-dd90-4b32-85ad-b993de90dd38",
      "location": [-1.378007, 36.724545]
    }, {
      "shop_id": "f11b49d0-d5d0-4220-8605-1415f4c8f02a",
      "location": [-1.3790927, 36.722565]
    }, {
      "shop_id": "83357bc4-4c2a-4a15-9779-eed2c5a9ec08",
      "location": [-1.37927281856537, 36.7223014831543]
    }, {
      "shop_id": "783d2766-d220-4b22-b9b2-1c77d1090d37",
      "location": [-1.3749684, 36.72289]
    }, {
      "shop_id": "942554b6-9173-4fcd-8694-6da0fdf6e8db",
      "location": [-1.3768454, 36.72097]
    }, {
      "shop_id": "0a9d95a4-f08b-4530-86ec-12e6b747d547",
      "location": [-1.3737673, 36.724804]
    }, {
      "shop_id": "598fae7f-ed60-4364-a400-fc7198026956",
      "location": [-1.37230479717255, 36.7234077453613]
    }, {
      "shop_id": "fa532582-6f06-455e-89d2-a9d7836f7749",
      "location": [-1.3734857, 36.721893]
    }, {
      "shop_id": "f6e42178-c1a8-4eb9-9e13-7ee337408294",
      "location": [-1.37386906147003, 36.7217254638672]
    }, {
      "shop_id": "0123307e-50b3-412e-8625-4b1817209135",
      "location": [-1.37389290332794, 36.7216262817383]
    }, {
      "shop_id": "1014c1b1-8b59-4006-b7dc-3495d6e045e7",
      "location": [-1.3736075, 36.72141]
    }, {
      "shop_id": "16e5fe49-026f-4c58-8c01-876e27c684aa",
      "location": [-1.3733807, 36.72102]
    }, {
      "shop_id": "a8ee8846-6c43-4603-b4fe-3de8957392a8",
      "location": [-1.3730623, 36.720547]
    }, {
      "shop_id": "e82be6b5-c80c-43c4-b77f-45aa3e86379d",
      "location": [-1.3726683, 36.72023]
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
      "shop_id": "f56ed066-2472-4fe0-aaab-ffc17189f0ce",
      "location": [-1.33935832977295, 36.6798477172852]
    }, {
      "shop_id": "d8db63a9-f2d3-4bf2-b3fa-f0f8e0f91dbb",
      "location": [-1.3381684, 36.677956]
    }, {
      "shop_id": "6d4a0fc5-dafe-4bfa-91f2-332343c532c0",
      "location": [-1.3381125, 36.677956]
    }, {
      "shop_id": "d0a0dc88-5ffb-4be1-bfe3-3e984d7c5347",
      "location": [-1.3371942, 36.67698]
    }, {
      "shop_id": "d5656c9f-dea1-4ffe-8cdb-d2b12895ad42",
      "location": [-1.3371835, 36.67695]
    }, {
      "shop_id": "362b70cd-eff3-41b9-a8ef-cac319fb46a8",
      "location": [-1.3372847, 36.676632]
    }, {
      "shop_id": "58be7e7e-b53e-4c5c-be1d-b965fc722d70",
      "location": [-1.3369559, 36.676033]
    }, {
      "shop_id": "5af386e5-2643-4c16-ad34-bb342acc7874",
      "location": [-1.3369575, 36.675983]
    }, {
      "shop_id": "45d17ceb-8ee0-4435-8c44-02b1a2f317de",
      "location": [-1.3369392, 36.675888]
    }, {
      "shop_id": "0f162d0c-d8ed-43a4-a625-a78d035b2f96",
      "location": [-1.3367542, 36.676662]
    }, {
      "shop_id": "dfd9cc63-42a1-4dc3-b227-ec34106f5432",
      "location": [-1.3344431, 36.674248]
    }, {
      "shop_id": "291bb24f-bbd8-45f1-adc0-18163cf8bf49",
      "location": [-1.3343354, 36.67439]
    }, {
      "shop_id": "21c44a43-a77d-4d9d-af0a-9389c1edb220",
      "location": [-1.333754, 36.67485]
    }, {
      "shop_id": "8602357d-f20c-4881-98bc-e7369d357f7f",
      "location": [-1.3337182, 36.67486]
    }, {
      "shop_id": "202886da-3201-4e52-9d97-8e5532fa4ee6",
      "location": [-1.3337038, 36.67492]
    }, {
      "shop_id": "20406aae-9a15-4e54-a95e-e024281cb0cd",
      "location": [-1.3332217, 36.676147]
    }, {
      "shop_id": "3ff01d83-b232-4560-bc92-bf7c366e6736",
      "location": [-1.3297074, 36.68067]
    }, {
      "shop_id": "5a503b92-9419-4fda-a9eb-edd70fc88755",
      "location": [-1.3253887, 36.669205]
    }, {
      "shop_id": "9f3e4145-0bcd-4593-b6bb-d11fc5ad3a82",
      "location": [-1.3241909, 36.66799]
    }, {
      "shop_id": "fb5c4de6-9c5d-4f71-8772-242a45afcf48",
      "location": [-1.3195614, 36.661694]
    }, {
      "shop_id": "ada72ac2-d168-445d-893a-6678181538c4",
      "location": [-1.3195233, 36.661766]
    }, {
      "shop_id": "2dd536e1-6690-4386-91d4-e2027f039acf",
      "location": [-1.3193179, 36.661827]
    }, {
      "shop_id": "95bda809-7666-49dd-a2ef-b5519224cdf2",
      "location": [-1.3192527, 36.6618]
    }, {
      "shop_id": "978719de-bbd3-4d23-8814-7c132da8d2c9",
      "location": [-1.3192612, 36.66178]
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
      "shop_id": "fe8e59cd-c0c8-4e8a-aaa3-b7b59914ef94",
      "location": [-1.3165315, 36.660336]
    }, {
      "shop_id": "e51eb489-d07b-4619-98ec-3bc2d3b70594",
      "location": [-1.3160208, 36.660316]
    }, {
      "shop_id": "d045cb6e-2d6d-4173-9866-bce9f94d9bc7",
      "location": [-1.3231689, 36.65814]
    }, {
      "shop_id": "c6324be6-692f-4ac1-a8f9-d2dec19afb8d",
      "location": [-1.3244098, 36.658398]
    }, {
      "shop_id": "3baa3be9-48e1-4d73-8d76-48ceb17d0b65",
      "location": [-1.3412898, 36.66909]
    }, {
      "shop_id": "21b90a03-f7d1-4eae-8558-401f396f963c",
      "location": [-1.4090741, 36.71064]
    }, {
      "shop_id": "bb77cfcc-db67-4bc7-bb4d-1d6023bf7bf0",
      "location": [-1.4090645, 36.710575]
    }, {
      "shop_id": "fd6e3d9f-70b8-48f0-9118-6ea842bcdb02",
      "location": [-1.3931832, 36.731953]
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
    "route_name": "Thogoto",
    "route_id": "4451f4a8-1872-4490-953d-d7042ff18735",
    "matrix_info": {
      "DistanceMatrixAPI requests": 149,
      "cache_hit": "90%"
    },
    "distance": "68.62km",
    "path": "`z|Fedx_FmAB_rCpz]CAFGpRhf@?@hGrTTbA^pBdCfe@oB|KPb@Eh@fCvj@o`@cBf\\p`DkIxBb@l`@qV|KrJ}fJkKoMMFe@o@YEdByBZm@JO@?CE@CO_Bya@}j@mEfIFI}CoAt[t[j@pARdAp@rB`I~LjyCu|]",
    "shops": [{
      "shop_id": "22063b96-89c8-4544-a03b-5c5b21ddcae9",
      "location": [-1.29929935932159, 36.828971862793]
    }, {
      "shop_id": "7834f8b9-6ef8-4c19-a4fa-0ed3cd1a1a66",
      "location": [-1.27578413486481, 36.670955657959]
    }, {
      "shop_id": "19da73bb-10bf-4ee4-bec6-c635bb53eafa",
      "location": [-1.2757579, 36.67097]
    }, {
      "shop_id": "3372e3e5-1248-46d0-863c-d313abc55ab2",
      "location": [-1.2758037, 36.671005]
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
      "shop_id": "41eac36b-f5aa-4135-a897-ca3d2a8cdb03",
      "location": [-1.2803695, 36.66091]
    }, {
      "shop_id": "d47b6a7d-ae6a-473a-9d43-7a004bcbfda0",
      "location": [-1.2805345, 36.66034]
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
      "shop_id": "39ba5c9d-781f-4562-a44a-27cd602b05da",
      "location": [-1.2807032, 36.65176]
    }, {
      "shop_id": "a3e83ffe-9086-412d-b861-9c98f892b420",
      "location": [-1.28137588500977, 36.6447563171387]
    }, {
      "shop_id": "58c69d6d-0852-43f6-b957-954b132f28a0",
      "location": [-1.2760198, 36.64526]
    }, {
      "shop_id": "5f29efea-4050-4d47-b3e1-a1a991a2fc19",
      "location": [-1.2807025, 36.619408]
    }, {
      "shop_id": "9caddd46-5a33-46da-9f71-d1f517e0225a",
      "location": [-1.2790437, 36.618797]
    }, {
      "shop_id": "454d0025-99e4-41c6-8d89-75d726c52f09",
      "location": [-1.2792221, 36.613453]
    }, {
      "shop_id": "c31058ec-2317-4600-b98f-911b309039f6",
      "location": [-1.275454, 36.61138]
    }, {
      "shop_id": "eda2a8a1-7ca6-4d98-b879-0843559025d3",
      "location": [-1.2773113, 36.66897]
    }, {
      "shop_id": "1ec2bb89-c168-475d-9f96-94d2208da57f",
      "location": [-1.275325, 36.671288]
    }, {
      "shop_id": "c53c34fa-082d-4402-b88e-9e1573344db4",
      "location": [-1.2752568, 36.671246]
    }, {
      "shop_id": "a695fb12-fc17-4c5a-9577-6cccaed880f3",
      "location": [-1.2750691, 36.67149]
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
      "shop_id": "f9cd6170-65b3-4761-942c-e58c52780b0f",
      "location": [-1.27563869953156, 36.6724662780762]
    }, {
      "shop_id": "8a5fdfaf-95d6-4930-a962-a653712a88a8",
      "location": [-1.27565324306488, 36.672492980957]
    }, {
      "shop_id": "89d0a77c-1808-4bd1-a610-27ac29756b5c",
      "location": [-1.2755723, 36.672974]
    }, {
      "shop_id": "7dcec57a-fc9b-4e5c-b953-648daf48d29b",
      "location": [-1.27, 36.68]
    }, {
      "shop_id": "5cd246f4-55ca-40eb-b89c-335730ecbcc3",
      "location": [-1.2689683, 36.678356]
    }, {
      "shop_id": "70578b3c-9689-414d-9ee7-1f76a6ef86aa",
      "location": [-1.26901149749756, 36.6784057617188]
    }, {
      "shop_id": "61254b00-b3a1-4e82-99f7-cd36ef40338a",
      "location": [-1.2682241, 36.678814]
    }, {
      "shop_id": "f49f6122-3aca-4bce-a15c-80077dc4fa01",
      "location": [-1.27280855178833, 36.6742210388184]
    }, {
      "shop_id": "3fd214c1-74da-4733-a70f-de2392f59d32",
      "location": [-1.2730341, 36.673805]
    }, {
      "shop_id": "9e4a86de-725d-4dc8-b375-a0f907ebc75e",
      "location": [-1.2731254, 36.67346]
    }, {
      "shop_id": "a3024033-4a12-4399-bef3-c429d7f923ba",
      "location": [-1.2733799, 36.67288]
    }, {
      "shop_id": "e815911f-14fb-495e-85ea-2809ee9668f3",
      "location": [-1.2749888, 36.670643]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Pipeline",
    "route_id": "09455434-79c9-42f5-a7a7-c87c236436d2",
    "matrix_info": {
      "DistanceMatrixAPI requests": 751,
      "cache_hit": "70%"
    },
    "distance": "27.45km",
    "path": "dsfG_se`FccD{FmNh_@yA`@eEtBm^rPkKjKAZGVcGfDaAPeIcBlH]J}DjC{@NGd@Y`Ae@lAHbAHDi@mGbEhLmHpBiCl@s@|BDlA{@HJlAyB|GiDzDFzHaG}AaBbA}BDO[c@pFa@g@QuEoBsEbHrRaLXVKb@d@XNDeB}@cANg@m@U[dBrItH{AyAaMriDP",
    "shops": [{
      "shop_id": "4d116d57-6429-4cd8-8d59-1ff9d20969de",
      "location": [-1.3235266, 36.89918]
    }, {
      "shop_id": "3494e3f2-a4aa-4474-a166-2e8910645069",
      "location": [-1.3210574, 36.89401]
    }, {
      "shop_id": "1b185a20-c2c3-47c4-a65e-7350b5011f25",
      "location": [-1.3206059, 36.893837]
    }, {
      "shop_id": "02f025b4-4aa8-49de-9d64-56d1f61ef3bd",
      "location": [-1.3196205, 36.89325]
    }, {
      "shop_id": "2550428d-af33-478e-86db-4de63bde4e32",
      "location": [-1.3145941, 36.890434]
    }, {
      "shop_id": "0d0196dd-dd72-4917-b573-dc23745499ca",
      "location": [-1.3126072, 36.88845]
    }, {
      "shop_id": "dabfc3fd-cdd9-4502-bcd1-9a38fc43f098",
      "location": [-1.3126023, 36.888313]
    }, {
      "shop_id": "56e30df7-50d9-4cca-b5e9-840ffa608fbb",
      "location": [-1.3125612, 36.88819]
    }, {
      "shop_id": "f4fde5dc-1f05-497a-87ef-cdd1b18ddc81",
      "location": [-1.3112628, 36.887352]
    }, {
      "shop_id": "90752052-ad19-42f1-a8ee-086f34969f90",
      "location": [-1.3109316, 36.887257]
    }, {
      "shop_id": "ab2bbac9-c1eb-4223-beb3-401685b7ec10",
      "location": [-1.3092971, 36.887756]
    }, {
      "shop_id": "d655df6c-c366-46f6-86ae-f309d3b4a8a4",
      "location": [-1.3108107, 36.887905]
    }, {
      "shop_id": "ea190443-da2d-471f-92da-15b7a5416e08",
      "location": [-1.3108652, 36.88886]
    }, {
      "shop_id": "a8767bbf-a8fa-4d82-9f32-e128052cdb47",
      "location": [-1.3115686, 36.889164]
    }, {
      "shop_id": "5accea4d-340a-477b-85bf-554307806b5b",
      "location": [-1.3116527, 36.8892]
    }, {
      "shop_id": "400ffa2c-6d4e-4ac9-b585-b591aeb34c2e",
      "location": [-1.3118395, 36.88933]
    }, {
      "shop_id": "f78d6bf6-6a8b-45fa-8673-4700c4c8017e",
      "location": [-1.3121673, 36.889523]
    }, {
      "shop_id": "ff70d6b7-47ae-4e83-889d-2cd957e54b97",
      "location": [-1.3125647, 36.889465]
    }, {
      "shop_id": "a84eeedd-17cc-4d15-be14-64e7d836719f",
      "location": [-1.3129008, 36.88942]
    }, {
      "shop_id": "2c21147a-1849-43c7-819a-79240894ea44",
      "location": [-1.3129295, 36.88963]
    }, {
      "shop_id": "40ba9d2e-c88f-47b1-863e-44ddb1feb7d8",
      "location": [-1.3115788, 36.888653]
    }, {
      "shop_id": "6e9e3948-db79-4032-b16c-8226cfeb4979",
      "location": [-1.3137093, 36.890156]
    }, {
      "shop_id": "9eda676d-7c08-4175-86b2-eb4291671573",
      "location": [-1.31428, 36.89085]
    }, {
      "shop_id": "b4d1a696-f904-4b4d-ae4a-9319a42be65f",
      "location": [-1.3145131, 36.89111]
    }, {
      "shop_id": "35ca03f7-c379-483a-acfe-3d02a1d48f26",
      "location": [-1.3151387, 36.891083]
    }, {
      "shop_id": "18e71079-9dfc-4222-9817-b55dc6ba9631",
      "location": [-1.3155307, 36.891376]
    }, {
      "shop_id": "f43e9d33-3a19-4083-841b-f8ef7fff0aca",
      "location": [-1.3155764, 36.891323]
    }, {
      "shop_id": "511660e4-90f6-451f-aaf0-43f6eec229ef",
      "location": [-1.3159739, 36.891933]
    }, {
      "shop_id": "90dc96f6-970f-47d9-ba77-fa9c8e0c7bd0",
      "location": [-1.3173983, 36.89278]
    }, {
      "shop_id": "6733e294-ae99-4fcf-aa4b-af9aac0e2730",
      "location": [-1.3183403, 36.89274]
    }, {
      "shop_id": "143a8496-baca-46eb-9c76-e3a8d527bad6",
      "location": [-1.3199162, 36.894028]
    }, {
      "shop_id": "6b55b755-59d8-4080-ba77-e85740e8f6d9",
      "location": [-1.3194458, 36.894524]
    }, {
      "shop_id": "181b010e-4f20-459d-a3fb-a0c1be54691b",
      "location": [-1.3197933, 36.895153]
    }, {
      "shop_id": "6f99a6de-60e0-4c74-bf8e-09bd558e1763",
      "location": [-1.3198191, 36.89523]
    }, {
      "shop_id": "c844fc3b-7f62-4b4a-bfa3-ee181ef3a36b",
      "location": [-1.3196816, 36.895412]
    }, {
      "shop_id": "e90b70d7-5a72-48a2-b21f-a7a41c1552b8",
      "location": [-1.3208864, 36.895584]
    }, {
      "shop_id": "0257cf4b-acd8-4646-8a6e-15cb5be45a5d",
      "location": [-1.3206916, 36.895668]
    }, {
      "shop_id": "ed71fc49-95f6-4db7-9b55-24c3edbb4d2e",
      "location": [-1.3196189, 36.896225]
    }, {
      "shop_id": "a8c9050a-6552-4081-9b43-4829d187b515",
      "location": [-1.3185612, 36.894768]
    }, {
      "shop_id": "b6508261-ce7f-486f-a285-42e2a15b623d",
      "location": [-1.3216983, 36.89686]
    }, {
      "shop_id": "041eeaa5-5a73-4570-a4dd-f40cd17babd6",
      "location": [-1.3218274, 36.896744]
    }, {
      "shop_id": "41ce3b15-875b-4498-ab34-f154d3a4a12b",
      "location": [-1.3217694, 36.89656]
    }, {
      "shop_id": "39168835-cdc3-4e6b-885d-77079ab7a3a3",
      "location": [-1.321955, 36.896427]
    }, {
      "shop_id": "2b412219-40a9-4649-b3af-d823171799a4",
      "location": [-1.3220403, 36.896404]
    }, {
      "shop_id": "1bddc700-c32b-454a-a83a-5416709a8fc7",
      "location": [-1.3215255, 36.89671]
    }, {
      "shop_id": "ff296f52-4f6b-4149-99ea-5381ebb5de5c",
      "location": [-1.3211855, 36.896626]
    }, {
      "shop_id": "ee25db44-b44d-4398-a848-082fbef81862",
      "location": [-1.320992, 36.896862]
    }, {
      "shop_id": "046e0a0d-d97a-40d2-8073-0bf6e76a0974",
      "location": [-1.3208785, 36.897003]
    }, {
      "shop_id": "95597634-5b00-4fd6-945a-36eaa51c0173",
      "location": [-1.3213907, 36.895298]
    }, {
      "shop_id": "77fc4d36-df5d-479e-bd23-de9fedc9951e",
      "location": [-1.3229414, 36.895756]
    }, {
      "shop_id": "ade50787-0b30-4819-ae46-ac8156eb94e7",
      "location": [-1.3224897, 36.898006]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Utawala",
    "route_id": "6a9cfdbb-6da0-4a76-a28d-40121cce78bb",
    "matrix_info": {
      "DistanceMatrixAPI requests": 122,
      "cache_hit": "87%"
    },
    "distance": "37.3km",
    "path": "dsfG_se`FepJyqHmb@}t@ge@_hAJJFBo@wAuP`C?J^KoE|DwBsDwBfb@fK}EjYzQ{@hK{I|`@sUgDiPnPS{K?FEQy]pFzGr\\NPhOc@rH~Bd~Asd@@BxN~XlBlHv@~BpoJpgH",
    "shops": [{
      "shop_id": "faeeb6e6-5016-4409-985b-66e0a2d5c390",
      "location": [-1.2907237, 36.94701]
    }, {
      "shop_id": "f87ef8c2-0cc4-4fb1-a770-4b45d85abedb",
      "location": [-1.2850502, 36.955635]
    }, {
      "shop_id": "3b8e3f78-1cf6-46a5-a9ba-db707aa369a2",
      "location": [-1.2789289, 36.96732]
    }, {
      "shop_id": "d4e9f5d6-e6b8-4a76-9077-38bb605866d9",
      "location": [-1.2789855, 36.96726]
    }, {
      "shop_id": "9198d3d9-4965-4bb2-89ab-4d70c90cc54d",
      "location": [-1.2790254, 36.967236]
    }, {
      "shop_id": "8593f2fa-0b55-4d87-a9eb-3b3b54261051",
      "location": [-1.2787888, 36.96768]
    }, {
      "shop_id": "338878af-1ad8-4e86-afac-3ad33081a1e2",
      "location": [-1.2759571, 36.967026]
    }, {
      "shop_id": "8fc3b5fd-2584-4875-8ba5-1a2b8f7bad21",
      "location": [-1.2759567, 36.96697]
    }, {
      "shop_id": "1cde0308-289b-4ebf-8375-eab46c79fbff",
      "location": [-1.2761213, 36.96703]
    }, {
      "shop_id": "f972020c-6520-4326-a897-320d3267a9b6",
      "location": [-1.27508187294006, 36.9660758972168]
    }, {
      "shop_id": "112fc891-43b2-4dbc-8cbe-c3ce197c9993",
      "location": [-1.2744793, 36.966984]
    }, {
      "shop_id": "75d4bb94-c789-43b4-b3b0-14973fd2232c",
      "location": [-1.273876, 36.961338]
    }, {
      "shop_id": "32391f43-117a-42fc-acdf-afb3f35d8a67",
      "location": [-1.2758405, 36.96245]
    }, {
      "shop_id": "15171890-2911-4c7b-97cb-d73b62d53255",
      "location": [-1.28006, 36.959427]
    }, {
      "shop_id": "e08f6724-0380-4d0f-bb86-022c927d885f",
      "location": [-1.2797632, 36.957455]
    }, {
      "shop_id": "0f976068-3d2a-4402-9cee-ae415b0d9e3b",
      "location": [-1.2780205, 36.952026]
    }, {
      "shop_id": "37fc75f5-2f64-48c9-88b7-0bd402a6f7e9",
      "location": [-1.27440249919891, 36.9528694152832]
    }, {
      "shop_id": "4711d61f-5453-4dd9-b8dd-f9f42b832540",
      "location": [-1.271631, 36.950073]
    }, {
      "shop_id": "8d7ccbc5-e4eb-441a-b0bc-13b746059db2",
      "location": [-1.271531, 36.952133]
    }, {
      "shop_id": "bffe28c2-777a-4ce6-96f8-22c44c8e7b01",
      "location": [-1.27153027057648, 36.9520874023438]
    }, {
      "shop_id": "46ba5188-1a4d-464e-a907-234df1a0738f",
      "location": [-1.2715008, 36.95218]
    }, {
      "shop_id": "6e5d5b6d-62a4-4a45-8af3-6f59e74f2673",
      "location": [-1.2665694, 36.95097]
    }, {
      "shop_id": "02a21fbb-3a29-4af5-b12d-84473f92b2e5",
      "location": [-1.2679942, 36.94623]
    }, {
      "shop_id": "40222fdd-89c3-4b4e-aaaa-aec8b87e1474",
      "location": [-1.26807200908661, 36.9461441040039]
    }, {
      "shop_id": "8598314a-bf1e-4749-b979-14064ee72cee",
      "location": [-1.2706785, 36.94632]
    }, {
      "shop_id": "b0f42fbf-fc05-47a3-b45a-6c4dd6aac06d",
      "location": [-1.2722161, 36.945683]
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
      "shop_id": "2e9cdc43-f042-4831-ad1a-a2974eaf5f68",
      "location": [-1.2905427, 36.946014]
    }, {
      "shop_id": "926a767c-d004-4dc6-9991-65204b8ff795",
      "location": [-1.2908165, 36.945366]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Tala",
    "route_id": "41e901de-4225-4016-8710-ec0036fb4bb9",
    "matrix_info": {
      "DistanceMatrixAPI requests": 450,
      "cache_hit": "78%"
    },
    "distance": "50.83km",
    "path": "dsfG_se`FikLizKe@s@s@kAjAYnFJfDyA`GgFq^a@cBwDYoBNs@iYk[DcIo[awClkAj]pE_BvT}NcKdAoEpVoC|CAhFzHnSlApFtBzJ^?bGxTs@id@lAIzc@fOt_@}YISkQt[oAfFHy@iKtTcAQkQhf@iEdGsAAv@~CrA`LsCn@wFeTgG|Ba]pIllLnaM",
    "shops": [{
      "shop_id": "20d1a046-55a6-4053-89eb-9561fb74d7ae",
      "location": [-1.2812635, 36.96373]
    }, {
      "shop_id": "f06b71bd-9c70-443b-8775-ac675e4079d0",
      "location": [-1.2810723, 36.963993]
    }, {
      "shop_id": "c7f6db1b-58c2-45bb-99d8-561421b262ee",
      "location": [-1.280811, 36.96437]
    }, {
      "shop_id": "9e6f52ea-9e9e-4b7b-9e39-160177ac8c64",
      "location": [-1.2811862, 36.964497]
    }, {
      "shop_id": "acb75597-7a97-429a-91a1-917c3a6d4872",
      "location": [-1.2823931, 36.964436]
    }, {
      "shop_id": "9148f764-9a9f-4e35-a56d-6cb2139a8a07",
      "location": [-1.2832261, 36.96489]
    }, {
      "shop_id": "b3760290-2536-4bbf-ac82-9eaeffa1fe97",
      "location": [-1.2845215, 36.966053]
    }, {
      "shop_id": "b2f87aa7-3172-4de9-9315-5c7fcfe3460f",
      "location": [-1.2794693, 36.96622]
    }, {
      "shop_id": "9a20f26b-4dfe-4ae8-af44-996621103498",
      "location": [-1.2789708, 36.967136]
    }, {
      "shop_id": "45b5fecf-a1aa-482b-b1ff-b6f987772875",
      "location": [-1.2788419, 36.967697]
    }, {
      "shop_id": "e000cdfd-2900-408c-bb4c-7763ffe8c714",
      "location": [-1.2789212, 36.967957]
    }, {
      "shop_id": "62e58ec3-0556-418b-ba19-473a4ced6af1",
      "location": [-1.274711, 36.9725]
    }, {
      "shop_id": "4f66a0ae-947b-4147-8525-b067198c710f",
      "location": [-1.2747431, 36.974117]
    }, {
      "shop_id": "d0af1ecc-df86-4368-87c2-c3c7c4c40ef6",
      "location": [-1.2701808, 36.998447]
    }, {
      "shop_id": "b4caebc0-2489-44be-8787-2ce3e026a5d3",
      "location": [-1.2824124, 36.99359]
    }, {
      "shop_id": "4f4a1d6f-78f5-4b73-b342-92c84f658d3c",
      "location": [-1.2834575, 36.99407]
    }, {
      "shop_id": "4477aa8e-fc97-424f-a4aa-4aa372f8575a",
      "location": [-1.28694009780884, 36.9966163635254]
    }, {
      "shop_id": "4bce3e71-87c9-4ad3-b1f5-e81973b34d09",
      "location": [-1.2849958, 36.996265]
    }, {
      "shop_id": "686d4284-962a-49b4-8a24-cbe99418125b",
      "location": [-1.2839552, 36.9925]
    }, {
      "shop_id": "52b57c4f-129c-4d38-9810-e5d8ca51e62a",
      "location": [-1.28324329853058, 36.9917068481445]
    }, {
      "shop_id": "a7e6b02f-ad0c-49b6-8e90-5d0626a10195",
      "location": [-1.2832332, 36.990536]
    }, {
      "shop_id": "686909c6-916a-4617-94dc-b35c933ed099",
      "location": [-1.2848072, 36.98726]
    }, {
      "shop_id": "034c9348-24b2-4ec3-be8f-50d026b3b435",
      "location": [-1.2852031, 36.986046]
    }, {
      "shop_id": "e9afdece-427f-46f9-b815-ff7859c853ab",
      "location": [-1.2857902, 36.98415]
    }, {
      "shop_id": "159657f3-8ca9-4d8b-843a-7aed35171eed",
      "location": [-1.2859488, 36.984154]
    }, {
      "shop_id": "75073526-39b6-41c2-8731-a03c21319600",
      "location": [-1.2872483, 36.980663]
    }, {
      "shop_id": "4194320b-e4a9-4f8b-9c52-680263c63d28",
      "location": [-1.28699314594269, 36.9866256713867]
    }, {
      "shop_id": "e94a9532-38c4-41a1-bbee-2bab6c442b3c",
      "location": [-1.2873824, 36.986675]
    }, {
      "shop_id": "bb9905bb-9219-4588-b7c7-00445e2cec8d",
      "location": [-1.29328155517578, 36.9840812683105]
    }, {
      "shop_id": "8323b246-6920-4ae4-aa6a-d6272c1bd1c1",
      "location": [-1.29851138591766, 36.9883880615234]
    }, {
      "shop_id": "5b988a3c-d5f6-43d3-a71f-754d64389810",
      "location": [-1.2984604, 36.988487]
    }, {
      "shop_id": "b9734eb9-643d-4a76-a8dc-7575cefa9d53",
      "location": [-1.2955219, 36.9839]
    }, {
      "shop_id": "5055d12b-68fe-4cfe-8f7f-725d90d5d40e",
      "location": [-1.2951151, 36.982742]
    }, {
      "shop_id": "dad25d19-931f-44d8-b13e-2b82af1dbefe",
      "location": [-1.2951691, 36.983025]
    }, {
      "shop_id": "5657e696-a2ef-4a23-839b-17e7ca6e2216",
      "location": [-1.2931973, 36.97956]
    }, {
      "shop_id": "4dce6922-fe6d-4b51-902e-83768ea450db",
      "location": [-1.2928632, 36.979645]
    }, {
      "shop_id": "9e04712e-3202-4fb9-9a37-ebe679fd489d",
      "location": [-1.2899187, 36.973362]
    }, {
      "shop_id": "846a9850-a71c-4dac-af3e-bc18e3e4f3c7",
      "location": [-1.288906, 36.972054]
    }, {
      "shop_id": "9c1b64b1-caae-4316-a585-e23f329765e2",
      "location": [-1.28849, 36.972057]
    }, {
      "shop_id": "e0d175b6-9c35-460a-a735-72cf6182f564",
      "location": [-1.2887723, 36.971256]
    }, {
      "shop_id": "0b992a45-985a-4ad5-9637-6161a20a6129",
      "location": [-1.289186, 36.969173]
    }, {
      "shop_id": "30429919-fef3-4ac8-be5d-0ce38ab15fde",
      "location": [-1.288448, 36.968925]
    }, {
      "shop_id": "4691d694-6fa8-4d9e-8019-225fa3e0664f",
      "location": [-1.2872137, 36.972324]
    }, {
      "shop_id": "06f6485c-9b99-4b6f-9f1a-b207c41d0bb0",
      "location": [-1.2858913, 36.971695]
    }, {
      "shop_id": "c4ddf166-38de-4ccc-b80c-f0973a6e41b4",
      "location": [-1.2810771, 36.969997]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "UpTown",
    "route_id": "e65b0f01-e0e2-407d-8d95-ef5f54e44fef",
    "matrix_info": {
      "DistanceMatrixAPI requests": 158,
      "cache_hit": "84%"
    },
    "distance": "23.54km",
    "path": "tz|Fmdx_FwBeBofBnbAbTr`@fPh_AOo@`TuIvSbVK?}Yfi@cAdc@xa@{P\\TzFwWNGIq@nAeYBVqQef@_Gf@i@r@pLab@`i@OzApq@fUcEFTcJgZ@a@eSb@CATLvE{YiPql@i@mw@",
    "shops": [{
      "shop_id": "57a19a2f-dc7d-42e6-a01f-47001f5eacfa",
      "location": [-1.29919, 36.82954]
    }, {
      "shop_id": "b1d5565d-4140-4ba3-b57b-92972e87cfcc",
      "location": [-1.2826283, 36.818737]
    }, {
      "shop_id": "96b9597d-c2ad-45a6-b175-006b2414db28",
      "location": [-1.2860138, 36.81336]
    }, {
      "shop_id": "13b4a9f7-5763-4205-be63-ce0bd2e834ac",
      "location": [-1.288768, 36.80307]
    }, {
      "shop_id": "771ec837-6b5d-4f9f-b96b-7bc7c96ba4bc",
      "location": [-1.2886888, 36.803314]
    }, {
      "shop_id": "9f9bb3ce-cd6b-429a-8031-07f3f5751150",
      "location": [-1.2920585, 36.805016]
    }, {
      "shop_id": "873b9e47-deb5-4f02-8c2a-8efa650c5afa",
      "location": [-1.2953799, 36.801315]
    }, {
      "shop_id": "5dc8d08a-d6ee-4a6d-b5aa-b195ff84d24e",
      "location": [-1.2953249, 36.801315]
    }, {
      "shop_id": "4a011e53-8a6e-4872-93ad-48b03218b57d",
      "location": [-1.2910088300705, 36.7945556640625]
    }, {
      "shop_id": "77df4826-9153-4af4-815c-7d7db705b945",
      "location": [-1.2906702, 36.788773]
    }, {
      "shop_id": "2bd4584a-0725-4dfb-85a0-02144c40d2e4",
      "location": [-1.296243, 36.791626]
    }, {
      "shop_id": "6622430d-a686-4951-a2d0-a5a29b3d028d",
      "location": [-1.29639, 36.791523]
    }, {
      "shop_id": "b3d7756d-6c8f-4b0b-8e42-fa7391c3545a",
      "location": [-1.2976514, 36.79548]
    }, {
      "shop_id": "f4651f06-b8da-497c-9cb4-55c3ad32ce39",
      "location": [-1.2977293, 36.79552]
    }, {
      "shop_id": "bb83df11-0ce8-490f-ace7-fcd94871c1b9",
      "location": [-1.2976818, 36.79577]
    }, {
      "shop_id": "9a393d95-4138-4ed2-bb90-fe6b875ac82e",
      "location": [-1.2980849, 36.79996]
    }, {
      "shop_id": "d076e07a-f96f-40a9-b973-09a2ccb710ea",
      "location": [-1.2981024, 36.79984]
    }, {
      "shop_id": "b4351064-5d3d-49f6-967b-2570313743ba",
      "location": [-1.295129, 36.806114]
    }, {
      "shop_id": "accabe05-baa6-4a61-80cb-6bf54f2d3778",
      "location": [-1.2938479, 36.80591]
    }, {
      "shop_id": "a888a9e5-a11c-40a3-9670-3e90e356600a",
      "location": [-1.2936426, 36.80565]
    }, {
      "shop_id": "4af3cd75-2d05-4753-8277-48e2a6716536",
      "location": [-1.2958091, 36.81126]
    }, {
      "shop_id": "988ee68d-8255-4f6f-99f3-92f04a979c9d",
      "location": [-1.3025441, 36.811344]
    }, {
      "shop_id": "5baa04ad-9152-4ee0-bd05-b67e3eb5114b",
      "location": [-1.3030024, 36.80325]
    }, {
      "shop_id": "baa85c31-6374-46eb-a274-8dab41638942",
      "location": [-1.3065588, 36.804226]
    }, {
      "shop_id": "c8920691-2e2f-4bcf-9c27-eab1d43b3c1f",
      "location": [-1.30660164356232, 36.8041191101074]
    }, {
      "shop_id": "eba87838-6558-478b-8e9c-ae2463e9613d",
      "location": [-1.3048235, 36.808483]
    }, {
      "shop_id": "1edfab19-42aa-497e-9fb8-312a85142768",
      "location": [-1.3048333, 36.808647]
    }, {
      "shop_id": "a5b0d4e8-8893-4f26-b159-fd09b1c1ca6d",
      "location": [-1.3016002, 36.808468]
    }, {
      "shop_id": "8ed04599-aae7-4b17-bf41-f00ce7a967ad",
      "location": [-1.3015819, 36.808475]
    }, {
      "shop_id": "da1a40ed-219b-4284-9ec8-554a6d608e37",
      "location": [-1.3016877, 36.80841]
    }, {
      "shop_id": "10c4efbe-233e-4718-b83a-03b0d105132c",
      "location": [-1.3027742, 36.81271]
    }, {
      "shop_id": "9b9c3834-a5dd-42b8-b19d-a984c8ced336",
      "location": [-1.3, 36.82]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Riruta/satellite",
    "route_id": "77aa4768-810d-4c2b-8b1e-7d802401e336",
    "matrix_info": {
      "DistanceMatrixAPI requests": 854,
      "cache_hit": "74%"
    },
    "distance": "34.99km",
    "path": "`z|Fedx_FoEj}LN|C?rD?DoHbDZp@?BfDfId@bIB[wCnAElCaL|G}AtCDlL~BxIeJkBeASbC`J}BvIgAoAqBbKlARxCTPIHWWbCcOrd@eCrZbAxEsIr~@FoCcAmAhFke@fEuHbo@vRl@l@^LoKjPw`@me@mMU{PXwFeAc@iATi@UgRIoDBhRvk@mi@lPiX_AsFhX{`AqE_Q[_BuA\\oBsMdEyAdDuHjFwxL",
    "shops": [{
      "shop_id": "e9715afe-081d-4306-82ba-bf6c51abe865",
      "location": [-1.2986529, 36.757572]
    }, {
      "shop_id": "3528d71a-8040-4414-a3cf-24bccfe77e0d",
      "location": [-1.2987328, 36.75678]
    }, {
      "shop_id": "b712950a-66f3-46d3-ab0f-d1f5ecfb5a77",
      "location": [-1.2987305, 36.755875]
    }, {
      "shop_id": "288d4e2e-e45b-4ddd-8e63-d3dc6543f289",
      "location": [-1.2987336, 36.75585]
    }, {
      "shop_id": "efad6ca0-0a6d-428b-9699-7a620e302b37",
      "location": [-1.2972064, 36.75503]
    }, {
      "shop_id": "380abe5f-ecfd-425e-87ec-35020c2d5ec8",
      "location": [-1.297354, 36.75478]
    }, {
      "shop_id": "c9475af9-aa70-4fd9-a758-9e364e07da2f",
      "location": [-1.2973481, 36.75476]
    }, {
      "shop_id": "bcb535df-9502-4131-bd9a-23f2ee898c4b",
      "location": [-1.2981888, 36.75312]
    }, {
      "shop_id": "de8ff79c-2891-43a2-9940-72c2aa989e3b",
      "location": [-1.2983767, 36.7515]
    }, {
      "shop_id": "73c09502-1e93-43e1-a493-d902a4f05681",
      "location": [-1.2984025, 36.751637]
    }, {
      "shop_id": "eab1cf59-8405-4d40-9ec2-445ca582babb",
      "location": [-1.2976356, 36.75124]
    }, {
      "shop_id": "df80c0d0-37ce-4051-b481-df860d341894",
      "location": [-1.2976117, 36.750534]
    }, {
      "shop_id": "4d5ca570-3de3-41b2-89ab-2f87165de218",
      "location": [-1.2955247, 36.749096]
    }, {
      "shop_id": "285eb24e-5e10-44fe-843e-02e12b7fd948",
      "location": [-1.29504609107971, 36.748348236084]
    }, {
      "shop_id": "d1953adf-5958-4c52-b34d-6269a930128b",
      "location": [-1.2950811, 36.7462]
    }, {
      "shop_id": "4ed49f93-7022-46a9-adce-ed368cc6e6bc",
      "location": [-1.2957159, 36.74447]
    }, {
      "shop_id": "87b7895b-277f-49c7-a5bb-545081914f1d",
      "location": [-1.2939296, 36.745007]
    }, {
      "shop_id": "b7cb2271-7c2e-464a-b695-9900689c369d",
      "location": [-1.2935798, 36.74511]
    }, {
      "shop_id": "015c870f-de85-476e-8e36-d1e38a6cb777",
      "location": [-1.2942358, 36.743336]
    }, {
      "shop_id": "8d569daf-a7a6-491f-a818-ab77b523a48b",
      "location": [-1.2936091, 36.741623]
    }, {
      "shop_id": "7575d1ce-4d2c-4079-b47e-f9541046b316",
      "location": [-1.2932478, 36.742016]
    }, {
      "shop_id": "fda213f8-e410-4196-85ba-aa50fef7d37d",
      "location": [-1.2926815, 36.740078]
    }, {
      "shop_id": "1651e78a-db5e-44b4-8d1a-75328cc3266c",
      "location": [-1.2930748, 36.73998]
    }, {
      "shop_id": "b35c56d4-1a1a-41df-9bff-d4ca7842bce0",
      "location": [-1.2938437, 36.739872]
    }, {
      "shop_id": "4c55bb0d-0bf1-472a-b07e-50baa0d8aa92",
      "location": [-1.2939318, 36.739918]
    }, {
      "shop_id": "ae3e976b-7081-469b-bb33-285ad8024b5d",
      "location": [-1.293977, 36.74004]
    }, {
      "shop_id": "d0bb8462-e911-4fa9-bf6b-2b8795f7f2af",
      "location": [-1.2938555, 36.739376]
    }, {
      "shop_id": "d9da5d07-5ef2-4514-8e9f-5cd5e05b9631",
      "location": [-1.2912796, 36.733364]
    }, {
      "shop_id": "0e4b0628-54cb-4d11-bbbb-39de7e4c08aa",
      "location": [-1.2906117, 36.728935]
    }, {
      "shop_id": "5d9cde04-6c84-4daa-9aad-a66c88c0651f",
      "location": [-1.2909542, 36.72785]
    }, {
      "shop_id": "d5832a94-794c-4edf-b0bb-076f882c1af1",
      "location": [-1.2892513, 36.717667]
    }, {
      "shop_id": "ea85ecc9-dae9-4d13-9d39-456c6051ea5d",
      "location": [-1.2892905, 36.71839]
    }, {
      "shop_id": "bb2fdf39-63da-4b95-a111-c484e17f6afd",
      "location": [-1.2889498, 36.718784]
    }, {
      "shop_id": "5ddba03d-ebee-4b53-8fcd-bc9da3d57962",
      "location": [-1.2901226, 36.724922]
    }, {
      "shop_id": "2556293f-dd9f-4773-95d5-a0ba65c8fbfb",
      "location": [-1.291121, 36.72647]
    }, {
      "shop_id": "21e93c0a-3d52-4388-85d8-3c4e28afbb01",
      "location": [-1.2988193, 36.723305]
    }, {
      "shop_id": "edc350e9-fb82-446e-b638-c35fe41086f9",
      "location": [-1.2990462, 36.723083]
    }, {
      "shop_id": "b618e945-eb1d-43a3-a433-0c33c0280204",
      "location": [-1.2992101, 36.723007]
    }, {
      "shop_id": "ca3c27c9-c2e3-455b-a42a-362d2873e3cc",
      "location": [-1.2972113, 36.720226]
    }, {
      "shop_id": "828160c3-b143-4a29-9818-2da33089bc9a",
      "location": [-1.2918113, 36.72638]
    }, {
      "shop_id": "072d280b-670c-465c-b800-ad22f8f81742",
      "location": [-1.2894965, 36.726494]
    }, {
      "shop_id": "ea15423a-ec91-464a-a68e-c1f9edea6ad0",
      "location": [-1.2866383, 36.72636]
    }, {
      "shop_id": "24a6600e-3d1f-48dc-9cc5-5ed04a5eba56",
      "location": [-1.2854007, 36.72671]
    }, {
      "shop_id": "e3fe1169-e54b-4252-8224-8698a5d2c325",
      "location": [-1.2852236, 36.72708]
    }, {
      "shop_id": "2ae94db8-29f4-4b47-a415-82949af81ada",
      "location": [-1.2853262, 36.72729]
    }, {
      "shop_id": "588bebab-6f58-44fc-a986-cce35b754a8b",
      "location": [-1.2852162, 36.730366]
    }, {
      "shop_id": "706bfd01-95cf-46fb-bf4e-5c6a2cd93941",
      "location": [-1.2851703, 36.73125]
    }, {
      "shop_id": "86c6f861-b6b7-41ff-a70e-8ac3231468c3",
      "location": [-1.285185, 36.728157]
    }, {
      "shop_id": "b841d078-5425-43b0-9e47-b67584a7310d",
      "location": [-1.2923521, 36.734947]
    }, {
      "shop_id": "4a3e93b0-9d72-4e66-b00f-39b5c7944331",
      "location": [-1.295136, 36.739]
    }, {
      "shop_id": "8b880c1c-4773-4e90-9708-4b9c59621636",
      "location": [-1.294825, 36.740215]
    }, {
      "shop_id": "6755c626-c5a5-4e20-8e62-b89602e53e50",
      "location": [-1.2988724, 36.75076]
    }, {
      "shop_id": "b681f582-813a-4ca7-a8cb-1ad5e50e4a55",
      "location": [-1.2978195, 36.753635]
    }, {
      "shop_id": "2fda37bc-2410-4fde-a5ea-ae7a2973af20",
      "location": [-1.2976806, 36.754116]
    }, {
      "shop_id": "03fdb7dd-fd55-45af-b753-981001d1a207",
      "location": [-1.2972482, 36.753975]
    }, {
      "shop_id": "a03faea4-41ca-4868-9a88-084174140582",
      "location": [-1.2966906, 36.756306]
    }, {
      "shop_id": "3847c6ac-3264-4595-ad77-34be96f8de25",
      "location": [-1.297681, 36.756763]
    }, {
      "shop_id": "d230dec1-14b2-4776-8f10-47c52e14f7d6",
      "location": [-1.2985089, 36.758312]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Thika Town 1",
    "route_id": "da74cef1-d78e-483a-89a5-514acf867182",
    "matrix_info": {
      "DistanceMatrixAPI requests": 353,
      "cache_hit": "86%"
    },
    "distance": "32.74km",
    "path": "l~mEa_raF?A}g@plDwCw@eBzKwj@cEe@BWYe@IEOIa@i\\_]ta@pk@zKbGHbCNNHFnArBqBdCGp@}Ag@aBk@uN}K}S|WtCl_@jd@cIqs@ry@|]fgAx@xCdGyIiEyB}@OaFsB{GtEj@eBkI_F_Dq@uEz@u@|Fr@_BkJii@iFbAoYvHyAtAdBgJVEdZaNGgARCvA@tAgYjAaQnc@zwBnjBg~J",
    "shops": [{
      "shop_id": "293823a1-149d-4eeb-b53c-e8cbc766a571",
      "location": [-1.0597495, 37.12514]
    }, {
      "shop_id": "42ace492-b8f8-43c8-bae1-aad4d32064b7",
      "location": [-1.0532022, 37.09737]
    }, {
      "shop_id": "29142b56-b521-42ee-b3a9-92afcffc2b4d",
      "location": [-1.052437, 37.09765]
    }, {
      "shop_id": "b2dbf010-56b5-49b6-9bb8-097039ba7f0e",
      "location": [-1.0519274, 37.095592]
    }, {
      "shop_id": "3d247995-d769-4cba-abd9-dbb0fa988ff1",
      "location": [-1.04493, 37.09657]
    }, {
      "shop_id": "af8d3f80-2aa2-4910-a657-ce3e5769b344",
      "location": [-1.0447445, 37.096546]
    }, {
      "shop_id": "44867222-48b0-4cdb-bc96-06e782c671f0",
      "location": [-1.0446184, 37.09668]
    }, {
      "shop_id": "06fdb883-efea-46fa-bec9-682084b9e6e1",
      "location": [-1.0444263, 37.096725]
    }, {
      "shop_id": "30e7c943-642a-4ab6-a6dd-2a089d35b216",
      "location": [-1.0443974, 37.096806]
    }, {
      "shop_id": "d6fbc054-5406-46ae-ba4f-05a3c24e2f53",
      "location": [-1.0443542, 37.09698]
    }, {
      "shop_id": "ec2789a7-a8f1-4b94-a9a6-cef703125a2b",
      "location": [-1.039659, 37.10178]
    }, {
      "shop_id": "9497f523-dcb4-4ea6-af1e-98155bd794f3",
      "location": [-1.0452113, 37.09465]
    }, {
      "shop_id": "09460387-bc3a-4b14-87b1-0564e6609093",
      "location": [-1.0472697, 37.09335]
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
      "shop_id": "a74266db-8e87-44e8-af39-d61f3403e2d6",
      "location": [-1.04728066921234, 37.0913162231445]
    }, {
      "shop_id": "c26161fe-fc00-4090-a4b4-2b44515462f1",
      "location": [-1.0472367, 37.09107]
    }, {
      "shop_id": "719a5705-20b4-45fa-9f4a-f8f62363219d",
      "location": [-1.04677426815033, 37.0912742614746]
    }, {
      "shop_id": "b5ea8249-fbab-4e20-a7d2-7aec053b31fd",
      "location": [-1.04627585411072, 37.0914878845215]
    }, {
      "shop_id": "d5cbcd35-72e6-44a0-aa5b-e54d9e74df43",
      "location": [-1.04377, 37.093563]
    }, {
      "shop_id": "03917873-2d92-4eb3-8f1c-258f9fb24f9a",
      "location": [-1.04042208194733, 37.0895729064941]
    }, {
      "shop_id": "3a0abbef-c315-41da-af32-05b71bce4d8c",
      "location": [-1.0411664, 37.08438]
    }, {
      "shop_id": "4c5019bf-12f0-4c88-aa87-b2d07ce0b7ba",
      "location": [-1.0471514, 37.086002]
    }, {
      "shop_id": "5085ad18-dbd0-4142-97a7-1f25721c0b45",
      "location": [-1.03874289989471, 37.0766181945801]
    }, {
      "shop_id": "1899c715-b4c6-4d25-b3e7-e4482b280c80",
      "location": [-1.0436912, 37.065056]
    }, {
      "shop_id": "384dc5e1-dd45-42e7-9e75-34399e759db4",
      "location": [-1.0439805, 37.06429]
    }, {
      "shop_id": "d74f11cd-6f6b-40ff-8ddb-175d6a32b7a5",
      "location": [-1.045290350914, 37.0660247802734]
    }, {
      "shop_id": "7992cc43-3fc4-4e1a-9bca-eb95d584c9d4",
      "location": [-1.044285, 37.066628]
    }, {
      "shop_id": "65893d59-96df-4cd4-873c-79fc137b99a7",
      "location": [-1.0439683, 37.066708]
    }, {
      "shop_id": "5a62bf69-ecb3-4556-b018-7a6489ca91d7",
      "location": [-1.04284, 37.067287]
    }, {
      "shop_id": "2c1cbf9f-d80c-40e3-a802-93dd8362e38f",
      "location": [-1.04141962528229, 37.0662155151367]
    }, {
      "shop_id": "d8c92675-963d-43e6-9a09-6df66f423f4f",
      "location": [-1.0416424, 37.066734]
    }, {
      "shop_id": "7a1d2864-5ea6-4bef-bb21-350491326d09",
      "location": [-1.03998124599457, 37.0678482055664]
    }, {
      "shop_id": "b3f953bf-b3f7-4360-a775-ea78d64bffab",
      "location": [-1.0391822, 37.068096]
    }, {
      "shop_id": "bd3d1aae-468a-45a3-ba77-218b828e0076",
      "location": [-1.0381094, 37.067802]
    }, {
      "shop_id": "fbdc6921-5947-4895-a8c5-d2241d7d2ff1",
      "location": [-1.037845, 37.06653]
    }, {
      "shop_id": "aa2f99a8-ac0d-492c-bcfa-cffd704e0eab",
      "location": [-1.0380967, 37.067005]
    }, {
      "shop_id": "11ee7c60-ea51-4bf1-95d7-1347ecb68225",
      "location": [-1.0362763, 37.073776]
    }, {
      "shop_id": "c43972a4-d32c-4637-bee9-21becf4d424d",
      "location": [-1.03510940074921, 37.0734443664551]
    }, {
      "shop_id": "61941daa-c9c8-4353-8785-88602b29dd9e",
      "location": [-1.030866, 37.07188]
    }, {
      "shop_id": "813c9b35-6583-4bac-9e98-69016e704286",
      "location": [-1.0304194688797, 37.0714454650879]
    }, {
      "shop_id": "2fd8fc8e-67a8-4a81-97db-40bb4baa2733",
      "location": [-1.03092992305756, 37.0732536315918]
    }, {
      "shop_id": "4aa5d7a4-35b0-4042-a64e-d6649e349ace",
      "location": [-1.0310521, 37.073277]
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
      "shop_id": "c426e736-1898-47fe-afd4-c246a809fde2",
      "location": [-1.0358969, 37.07606]
    }, {
      "shop_id": "3c4d93a9-4114-4632-af29-2d2c70c0d308",
      "location": [-1.0363345, 37.080257]
    }, {
      "shop_id": "2c5e36c5-dc42-4f58-a0dd-7d9fc2567490",
      "location": [-1.0367116, 37.083145]
    }, {
      "shop_id": "c611f9c9-cadc-412a-afe8-5d5f848f5287",
      "location": [-1.04255175590515, 37.0638122558594]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Umoja 2/3",
    "route_id": "08b2bccd-e7c0-46d4-9beb-746ad7cd6de7",
    "matrix_info": {
      "DistanceMatrixAPI requests": 296,
      "cache_hit": "81%"
    },
    "distance": "12.16km",
    "path": "`h{F{`g`Fwp@nY`CvA?l@kAPyET]d@XNfJIJe@{@fBjCn@X|MdEk@ZrBoMrG]n@\\f@{ByAy@h@iAeEWDeDcC_Dp@?Au@RaABcAr@aK{G_u@wS~`AbPeCsG\\EpJuEZzHVqAlC}@s@oHpCRl@UeIuEx~@yQ",
    "shops": [{
      "shop_id": "6b04809a-53da-4918-af97-58b531398bbe",
      "location": [-1.2837334, 36.901016]
    }, {
      "shop_id": "20a2f0d9-42f9-46b0-a6ac-8533a4a1fba6",
      "location": [-1.2843796, 36.900578]
    }, {
      "shop_id": "1fa7e784-81d0-476f-b98a-b9ee9283abbc",
      "location": [-1.2843797, 36.900345]
    }, {
      "shop_id": "f24315ca-e9fd-4e22-b05f-921270a06aba",
      "location": [-1.28400301933289, 36.9002571105957]
    }, {
      "shop_id": "2a381d83-1d2b-4192-b62c-d0b628a38b07",
      "location": [-1.2829139, 36.900146]
    }, {
      "shop_id": "0c0457e1-53cc-4053-91a6-f79376a4e608",
      "location": [-1.2827642, 36.89996]
    }, {
      "shop_id": "ecef63a3-fed9-4a09-b6d7-dbd65617d744",
      "location": [-1.2828896, 36.89988]
    }, {
      "shop_id": "9bb5d930-fcd8-48fc-9a0e-ff56d2753549",
      "location": [-1.28468525409698, 36.8999328613281]
    }, {
      "shop_id": "24b6af24-a7df-4992-9223-43b3bd74fe33",
      "location": [-1.2847533, 36.900124]
    }, {
      "shop_id": "68726f51-0c08-4fb3-b2a4-89f801fb3c82",
      "location": [-1.284446, 36.8996]
    }, {
      "shop_id": "406799e8-e7ce-49de-9180-f9dfc1727ecf",
      "location": [-1.2851504, 36.899364]
    }, {
      "shop_id": "6a47031e-3d70-4453-bef5-914fcaee494b",
      "location": [-1.2852798, 36.896965]
    }, {
      "shop_id": "5ab34a78-57cd-4968-8197-ec54c877e180",
      "location": [-1.2862697, 36.897186]
    }, {
      "shop_id": "b143e778-6854-4011-bbb2-f46e816fb329",
      "location": [-1.2864062, 36.896614]
    }, {
      "shop_id": "fc724d99-2bf5-454d-9edf-518d0c600e7b",
      "location": [-1.28409147262573, 36.8952331542969]
    }, {
      "shop_id": "692b1e50-3285-4189-932e-a7c17b37e1fd",
      "location": [-1.28394103050232, 36.8949851989746]
    }, {
      "shop_id": "ab2be8fb-ec5b-43de-91d6-c8376a8a7987",
      "location": [-1.28408908843994, 36.8947906494141]
    }, {
      "shop_id": "5906738c-6990-4275-aa4b-ee067da443bc",
      "location": [-1.28346884250641, 36.8952369689941]
    }, {
      "shop_id": "a4246d9d-0f4d-4ec1-822a-a2830acc1446",
      "location": [-1.28318452835083, 36.8950309753418]
    }, {
      "shop_id": "2f45cc13-26a0-49d3-aee2-d8d0d14a7132",
      "location": [-1.2828099, 36.896015]
    }, {
      "shop_id": "d361e18a-61fc-49a5-9892-2b8b55d17908",
      "location": [-1.2826935, 36.895985]
    }, {
      "shop_id": "e6319c77-ad99-41dc-9c4e-22fc45ac7fc5",
      "location": [-1.28186, 36.896645]
    }, {
      "shop_id": "3b83acf1-3be7-40d9-9e7f-d687df6053ff",
      "location": [-1.28105580806732, 36.8964042663574]
    }, {
      "shop_id": "e0d4245c-0c32-4416-94a6-3c12fbdd5d61",
      "location": [-1.2810566, 36.896408]
    }, {
      "shop_id": "c24e6b66-0fa9-4231-8031-a5df9c4a2f6d",
      "location": [-1.2807906, 36.896305]
    }, {
      "shop_id": "8e7b5c9f-f340-4c88-8139-5fa700f9d3d6",
      "location": [-1.2804612, 36.896294]
    }, {
      "shop_id": "5ec30bcb-3225-49c6-b5b8-5a76a10bea5c",
      "location": [-1.2801212, 36.89603]
    }, {
      "shop_id": "25943a6d-fdde-4868-98dd-793f339bb3fb",
      "location": [-1.2781925, 36.897453]
    }, {
      "shop_id": "9cbc0fa0-16e0-4646-8d94-0497265ab210",
      "location": [-1.269553, 36.900772]
    }, {
      "shop_id": "44c6ee4b-a588-4d92-9a63-ecaf99e49406",
      "location": [-1.28010785579681, 36.8980293273926]
    }, {
      "shop_id": "64a85794-a152-4a21-a186-b59048e73457",
      "location": [-1.2794414, 36.899406]
    }, {
      "shop_id": "e364ae69-ade7-428a-b370-514df96ae1c2",
      "location": [-1.2795933, 36.89944]
    }, {
      "shop_id": "fbee7714-a21d-4ce9-8a31-ad19e4c57e58",
      "location": [-1.2814401, 36.90051]
    }, {
      "shop_id": "2b7fd0ea-2d9f-4e9d-8abb-12d7810b145e",
      "location": [-1.28158092498779, 36.8989295959473]
    }, {
      "shop_id": "2a3c104c-1523-4f93-a03b-9202fb021d09",
      "location": [-1.2816983, 36.89934]
    }, {
      "shop_id": "1f4b0762-8728-4a9a-bc94-7041f1e02684",
      "location": [-1.28241395950317, 36.8996467590332]
    }, {
      "shop_id": "c78c9cdb-a325-486d-8531-17f28e38b49c",
      "location": [-1.2821536, 36.901165]
    }, {
      "shop_id": "a99df877-6eb4-4fbf-8be5-0dfb13e26c67",
      "location": [-1.28287827968597, 36.9010696411133]
    }, {
      "shop_id": "38c88afa-c53d-4fd8-96e7-64896511370a",
      "location": [-1.2831097, 36.90118]
    }, {
      "shop_id": "5e040b27-6785-4709-9cd8-e54a1134e315",
      "location": [-1.281479, 36.9022531]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Upper Rongai",
    "route_id": "e26f7e87-5356-4e56-b7aa-5c37cb04635f",
    "matrix_info": {
      "DistanceMatrixAPI requests": 228,
      "cache_hit": "88%"
    },
    "distance": "70.69km",
    "path": "zipGwtf_F_Q|Gtr@h`C|CcGvb@oB?h@cLdIDJdz@nz@xV`y@~BjPvGhF@BfoYccSDDADj@GDE?WWyCh@`@`N|QgPkNq~WdzTgUiEGGmJzJaBjKgHlSiE~Roe@sjEf@cAyBSkaCimBaFaYw@{M{AtAgW~O?Lf@tCILECoBdBoKbKxs@mbDjOpvA",
    "shops": [{
      "shop_id": "edbb435a-059c-4c4b-a739-cfde57124177",
      "location": [-1.396622, 36.73805]
    }, {
      "shop_id": "b24f5699-4604-41d9-8604-1a236c4683b6",
      "location": [-1.4048876, 36.71736]
    }, {
      "shop_id": "cdbcda58-c9a6-4f36-a5b8-275cce0b8bde",
      "location": [-1.4056768, 36.718662]
    }, {
      "shop_id": "25035bcb-dcd2-4a7b-91a0-9669313eb2c8",
      "location": [-1.4113973, 36.719223]
    }, {
      "shop_id": "b7c67445-1e43-4e92-a02d-89e36cf7f06f",
      "location": [-1.4113955, 36.71901]
    }, {
      "shop_id": "89e1d97c-2634-4a56-97e5-c3e7c77b7f5d",
      "location": [-1.4092963, 36.717384]
    }, {
      "shop_id": "9c0a92e2-97bc-4ed7-9c11-0e5bd4f3d16b",
      "location": [-1.4093329, 36.717323]
    }, {
      "shop_id": "c68ffc10-346a-42d1-9242-c871ae58435b",
      "location": [-1.4187994, 36.7078]
    }, {
      "shop_id": "7553166e-ec3c-4d92-ab29-371e19bd975c",
      "location": [-1.4226114, 36.69851]
    }, {
      "shop_id": "d2f94604-bd49-413b-89cb-c7aac10144b0",
      "location": [-1.4232539, 36.695732]
    }, {
      "shop_id": "f8fd344a-b378-4c4b-bfeb-90ee6b0284cc",
      "location": [-1.42465126514435, 36.6945571899414]
    }, {
      "shop_id": "9d6167d0-c0bc-4956-9dee-91d66416e51d",
      "location": [-1.4246583, 36.69454]
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
      "shop_id": "d27a0dc8-001c-49c5-b860-ae4c7872b6a0",
      "location": [-1.5605307, 36.7985]
    }, {
      "shop_id": "92092938-6fbe-4002-ad64-d0a08d3b3f7d",
      "location": [-1.5607436, 36.798332]
    }, {
      "shop_id": "c9aaf72c-3f7d-408a-8715-7b7184705840",
      "location": [-1.5631468, 36.795303]
    }, {
      "shop_id": "66223d50-f2ae-4971-a7ea-a521025173b4",
      "location": [-1.560389, 36.797764]
    }, {
      "shop_id": "c431dbb6-1110-4a33-8371-486622ba0cee",
      "location": [-1.4324557, 36.685886]
    }, {
      "shop_id": "53bd8fe6-8080-47e0-b01d-cb34a03eec64",
      "location": [-1.4289044, 36.6869]
    }, {
      "shop_id": "c89afcf1-aa3e-4512-ad02-dcc216f43365",
      "location": [-1.4288605, 36.68694]
    }, {
      "shop_id": "a5fd9dab-e0cd-44ae-bfd2-cb9bc93004fa",
      "location": [-1.4270287, 36.68504]
    }, {
      "shop_id": "4ea99650-e829-47da-bcde-bb836157fe08",
      "location": [-1.4265352, 36.683056]
    }, {
      "shop_id": "b98d42eb-cae2-4ca2-8ac7-53c53a324189",
      "location": [-1.42505598068237, 36.6797904968262]
    }, {
      "shop_id": "51061812-f744-4fd5-aef0-877825abcb20",
      "location": [-1.4240528345108, 36.676586151123]
    }, {
      "shop_id": "ba78f826-a74d-417c-b486-8d333acbae72",
      "location": [-1.4178855, 36.709167]
    }, {
      "shop_id": "dd16eafc-ce8a-4339-b3be-77eeb78d28fe",
      "location": [-1.4180863, 36.70951]
    }, {
      "shop_id": "cd4edc40-5f4d-4f7b-b2b4-c699330e3613",
      "location": [-1.4174844, 36.70961]
    }, {
      "shop_id": "27768f36-4df4-4b4e-a7ce-c48bf3bd0066",
      "location": [-1.3966169, 36.727257]
    }, {
      "shop_id": "ab672b1d-eaac-49a8-9274-e1886fb9f5c7",
      "location": [-1.3954871, 36.73143]
    }, {
      "shop_id": "75d57783-29be-43bc-8598-045703e62338",
      "location": [-1.395206, 36.733807]
    }, {
      "shop_id": "efd4db34-a928-4199-b4f1-883e0daaf1b1",
      "location": [-1.3947451, 36.733383]
    }, {
      "shop_id": "bb99e399-bc4f-4f60-a831-834f7de63adc",
      "location": [-1.3908684, 36.730656]
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
      "shop_id": "d36a74db-dc75-4e24-af82-526b75956b5c",
      "location": [-1.3884283, 36.72734]
    }, {
      "shop_id": "53c0c073-7b63-4cc3-b107-44db3a82e054",
      "location": [-1.3968776, 36.753487]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Tena/Umoja 1 Innercore",
    "route_id": "b64fc5cb-e6d4-467a-b7d7-2a89f4ea7546",
    "matrix_info": {
      "DistanceMatrixAPI requests": 607,
      "cache_hit": "73%"
    },
    "distance": "17.08km",
    "path": "`h{F{`g`Fo`@`K_QrZhObOmChLjEfDqHpE~M{L[\\`@rABT`E~OU_Do@cBfMqArO`Ta@BkCTe@QBSxIjEjAlCyGoEq@|I^~@sBR_@}CaDr@iGtG@RkAwK^A{NL??yAt@`@xA`@qG{OyBcAWuDvYeFkb@y@BqN_E{Dn_@RJL\\^oY~Owz@xHNpx@wa@",
    "shops": [{
      "shop_id": "a53866d4-4819-44b3-b3b6-96df93bb5bfe",
      "location": [-1.2863295, 36.903328]
    }, {
      "shop_id": "6fa1d29c-19d5-40f2-92fb-eb7e7682cae0",
      "location": [-1.28344714641571, 36.8989143371582]
    }, {
      "shop_id": "4b602966-ae97-46f9-bcbc-ea857d493744",
      "location": [-1.2860603, 36.896328]
    }, {
      "shop_id": "3b036162-92c8-4e6b-b3b6-fffaf2efd081",
      "location": [-1.2853535, 36.894196]
    }, {
      "shop_id": "62713ee8-1b04-4b99-a854-86f4b96b2c97",
      "location": [-1.28636586666107, 36.8933601379395]
    }, {
      "shop_id": "249b9f63-4f1c-4bbd-be29-736ad93f6aba",
      "location": [-1.284837, 36.89231]
    }, {
      "shop_id": "616217ea-980b-4ff6-a6da-816783eac649",
      "location": [-1.2872415, 36.894535]
    }, {
      "shop_id": "0b9d7eda-3470-4b9a-9dbc-0e10a2473952",
      "location": [-1.287104, 36.89438]
    }, {
      "shop_id": "3dd18666-5467-42cf-a948-ed272605fb96",
      "location": [-1.28726577758789, 36.8939628601074]
    }, {
      "shop_id": "79ce9c22-d3ca-4026-802c-3e39ddb23f9e",
      "location": [-1.28728818893433, 36.8938522338867]
    }, {
      "shop_id": "a06a56d9-260b-4baa-a635-a612d2ece933",
      "location": [-1.288255, 36.891125]
    }, {
      "shop_id": "be8e8d79-dee3-484f-b7e2-e3e84bfcdd09",
      "location": [-1.2881532, 36.891933]
    }, {
      "shop_id": "97f1f828-d74e-447e-ac24-8c27ec9fd4fe",
      "location": [-1.2879097, 36.892426]
    }, {
      "shop_id": "cec513ea-85d5-455f-8a56-b9e7faae33eb",
      "location": [-1.2901899, 36.8928386]
    }, {
      "shop_id": "837c0045-2e11-4d9d-ad00-d88d990011b2",
      "location": [-1.29284512996674, 36.8894729614258]
    }, {
      "shop_id": "95a92552-39f3-4ba4-8441-4d8e951d5040",
      "location": [-1.2926784, 36.889446]
    }, {
      "shop_id": "abcbff09-f399-4a1f-9381-c110e22026b7",
      "location": [-1.291983, 36.889336]
    }, {
      "shop_id": "45af583c-f3cf-4b91-8fe0-715882807855",
      "location": [-1.2917885, 36.88943]
    }, {
      "shop_id": "64a4c2b1-0eba-4807-aa98-7fee49453d27",
      "location": [-1.2918059, 36.88953]
    }, {
      "shop_id": "ecc26bcf-5586-4817-ae88-eed055be8260",
      "location": [-1.2935435, 36.888508]
    }, {
      "shop_id": "8dace667-3bfb-4630-a007-37de6572e9a1",
      "location": [-1.2939202, 36.887802]
    }, {
      "shop_id": "8be8d1fe-33f8-4834-80d4-5769ee10a32e",
      "location": [-1.292514, 36.888836]
    }, {
      "shop_id": "ba7230f5-df7f-4b00-bf57-809da6bad440",
      "location": [-1.2922567, 36.887093]
    }, {
      "shop_id": "a3b910cf-0926-4eb5-9444-f8ad5240d959",
      "location": [-1.2924206, 36.88677]
    }, {
      "shop_id": "a00a5fd7-bf3c-4e43-8b5e-bf790b97bc83",
      "location": [-1.2918449640274, 36.8866691589355]
    }, {
      "shop_id": "dc101815-7d7f-4c84-8540-ae5794e92b5a",
      "location": [-1.2916831, 36.88746]
    }, {
      "shop_id": "eaf483a6-f7a2-4b12-8325-6b383b307131",
      "location": [-1.2908745, 36.887196]
    }, {
      "shop_id": "2c1dc14c-a5a7-4ab3-8ce0-3099a0ee0265",
      "location": [-1.2895367, 36.88581]
    }, {
      "shop_id": "9318bdd1-d562-4381-a73b-500010cf4e29",
      "location": [-1.2895527, 36.885715]
    }, {
      "shop_id": "a10f0954-d91a-4ad4-bcd3-d2a143850bcf",
      "location": [-1.2891695, 36.887753]
    }, {
      "shop_id": "839ff220-5bf7-456e-a748-e93cdf7fef69",
      "location": [-1.2893269, 36.88776]
    }, {
      "shop_id": "d5619044-977a-4ef4-8bcb-6da2a41b73b4",
      "location": [-1.2867937, 36.887688]
    }, {
      "shop_id": "860fe02e-eeb7-42f9-b8c4-2fd48047da3e",
      "location": [-1.2867937, 36.887688]
    }, {
      "shop_id": "3dd73148-c097-4693-b083-a21cd4a0d7e6",
      "location": [-1.28633880615234, 36.8874168395996]
    }, {
      "shop_id": "5c081d43-19ca-45b8-81f1-b68db8c8efa4",
      "location": [-1.286512, 36.886974]
    }, {
      "shop_id": "9f284d9a-5aed-4ada-9ee9-a342c2de9d9b",
      "location": [-1.28667724132538, 36.8883361816406]
    }, {
      "shop_id": "4f6ca44a-75ed-4746-b5aa-d631592f1116",
      "location": [-1.283976, 36.88895]
    }, {
      "shop_id": "b54f9912-394c-485b-bf85-1bbf6108027e",
      "location": [-1.2836424, 36.889065]
    }, {
      "shop_id": "27504ba8-57e2-4791-b991-15f0affe8b00",
      "location": [-1.28273, 36.884785]
    }, {
      "shop_id": "d2def917-0534-4a89-bd90-7e536398ed26",
      "location": [-1.2815815, 36.89045]
    }, {
      "shop_id": "ffa2a674-b56a-4689-90f9-fe67e0cd16e5",
      "location": [-1.28129386901855, 36.8904342651367]
    }, {
      "shop_id": "3b464b92-6594-456f-a4d0-fac9bd7c4218",
      "location": [-1.2787987, 36.89139]
    }, {
      "shop_id": "adce1eab-316e-4dce-b04d-06469543d828",
      "location": [-1.2778649, 36.88619]
    }, {
      "shop_id": "b0e0d449-dcbb-4465-974d-b3d6439cad9f",
      "location": [-1.2779595, 36.88613]
    }, {
      "shop_id": "f891905c-ccbe-47f5-8346-265acfd6c758",
      "location": [-1.2780282, 36.88598]
    }, {
      "shop_id": "918d362f-1bdd-4c71-beed-2e421286482d",
      "location": [-1.2781926, 36.890217]
    }, {
      "shop_id": "b6b7bf7d-ebdc-4b0a-906e-fa6e5e79f0b4",
      "location": [-1.28090929985046, 36.8997840881348]
    }, {
      "shop_id": "1aba6878-1618-428c-ae3b-c22621667a72",
      "location": [-1.28248190879822, 36.8996963500977]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Roysambu",
    "route_id": "68f5950e-3a8e-4823-8849-f982a91e9a63",
    "matrix_info": {
      "DistanceMatrixAPI requests": 849,
      "cache_hit": "79%"
    },
    "distance": "20.41km",
    "path": "|qoF_r``FPFNDdJlFl@d@cmAun@wAg@iQ{k@Fc@^]CgBaAw@zCwIUO_JsKhRdCmWhAACZoA?Qb@u@kA~H[DOpGuB~B[^f@oAAK`DhC@@|EBLkAsDmFyGeB{VdE_A|@Rf@CZUJmAfDIp@DVd@[}@}Aa@IeOkC|RliAOLS]fF`@AQwFfBGfC@Vg[v@nLfBvMzH@@fg@lWbaAmOABI@dFa@rSsNeRag@jR|i@",
    "shops": [{
      "shop_id": "f6a0635c-5bf7-4e82-ac5a-cb5d39a9aa41",
      "location": [-1.2319179, 36.872116]
    }, {
      "shop_id": "f543a88f-e980-45f2-b7e8-d576382e9791",
      "location": [-1.2319978, 36.87209]
    }, {
      "shop_id": "8db34eef-0426-4a35-a13a-7619a9db96bd",
      "location": [-1.2337934, 36.870903]
    }, {
      "shop_id": "3cb3dc53-dd31-43b5-ad71-269841adb2af",
      "location": [-1.23402333259583, 36.8707084655762]
    }, {
      "shop_id": "c8fb3b9f-97d5-4355-ba0c-46b5cfd370c8",
      "location": [-1.2215216, 36.87834]
    }, {
      "shop_id": "d58f410e-dd91-48fd-81dc-de0cff019a4a",
      "location": [-1.2210791, 36.87854]
    }, {
      "shop_id": "e7104167-d5d1-4b76-aa7b-bb33f61d4b6e",
      "location": [-1.2181486, 36.885723]
    }, {
      "shop_id": "f260a108-f73c-4576-ac11-c13356faf611",
      "location": [-1.21818912029266, 36.8859024047852]
    }, {
      "shop_id": "803a22ba-2fda-4f4c-a09a-d79223cfd13e",
      "location": [-1.2183526, 36.88605]
    }, {
      "shop_id": "b4c3b64c-a797-4348-b606-b6db0ebbc7a2",
      "location": [-1.2183261, 36.886574]
    }, {
      "shop_id": "15676cdc-9fa5-4a8c-aedc-4fdcbe71e4ed",
      "location": [-1.2179995, 36.886852]
    }, {
      "shop_id": "44c773e2-46ca-4358-a40e-76355832a44d",
      "location": [-1.2187809, 36.888573]
    }, {
      "shop_id": "1ddf0251-b612-4b33-817e-2d2a491bd697",
      "location": [-1.2186683, 36.888653]
    }, {
      "shop_id": "ef94531e-a82e-4b10-ae3f-4bd008a164a0",
      "location": [-1.216913, 36.890667]
    }, {
      "shop_id": "c57a729c-8ab7-4682-9ffb-f6ba24873380",
      "location": [-1.22, 36.89]
    }, {
      "shop_id": "97834649-b55a-4d86-8e8a-45b2e2ef9a2f",
      "location": [-1.2160861, 36.889633]
    }, {
      "shop_id": "7b55fe6d-abf7-45c8-8b4f-35810db755ec",
      "location": [-1.2160766, 36.88965]
    }, {
      "shop_id": "afe8d0b1-59c7-4904-9805-78c79276e254",
      "location": [-1.2162185, 36.89005]
    }, {
      "shop_id": "858a3f1b-f1e5-4e90-bb59-a45591d15454",
      "location": [-1.2162232, 36.89014]
    }, {
      "shop_id": "5e50cd91-425e-4e83-870b-7ca1c3e28eab",
      "location": [-1.2164037, 36.890415]
    }, {
      "shop_id": "2f8e29b1-400a-4042-9670-ed3be4f22eb2",
      "location": [-1.2160188, 36.888813]
    }, {
      "shop_id": "5b434358-650a-433a-b392-ce2bcbd855d6",
      "location": [-1.2158785, 36.888775]
    }, {
      "shop_id": "b2e07ffd-e0ca-4d14-b96e-8b979254e07b",
      "location": [-1.215801, 36.88741]
    }, {
      "shop_id": "20ae68e8-a40a-4bae-8de0-067b33231b52",
      "location": [-1.2152114, 36.88677]
    }, {
      "shop_id": "6069d09d-bf19-4fc4-a319-a491d4a8f71f",
      "location": [-1.2150663, 36.88661]
    }, {
      "shop_id": "0601d823-156d-4e47-ad4e-ebd31c573238",
      "location": [-1.2152728, 36.88701]
    }, {
      "shop_id": "83fe8777-326c-4794-84ba-fedbc721fa91",
      "location": [-1.2152607, 36.887066]
    }, {
      "shop_id": "464d23bc-7e9b-4360-a2a2-ea88067f8c3a",
      "location": [-1.216069, 36.886383]
    }, {
      "shop_id": "e4a5be18-de88-4192-9668-48b91b873084",
      "location": [-1.21607685089111, 36.8863677978516]
    }, {
      "shop_id": "33c083a0-dffa-4904-80fb-5aee877444fc",
      "location": [-1.2171876, 36.886353]
    }, {
      "shop_id": "d5e6bdda-f76d-470f-af09-e19132643eee",
      "location": [-1.2172573, 36.886734]
    }, {
      "shop_id": "4986d4ea-67da-4ab7-950d-bbf0e06243fc",
      "location": [-1.216361, 36.887924]
    }, {
      "shop_id": "453f59f8-5c7c-41dc-b093-d8789cea7282",
      "location": [-1.2149478, 36.88843]
    }, {
      "shop_id": "3ba7f69e-52ad-4439-b103-c8fa59befbf2",
      "location": [-1.2111284, 36.887436]
    }, {
      "shop_id": "d6d95395-6ba8-4250-ae5a-8f415991eb67",
      "location": [-1.21081340312958, 36.8871307373047]
    }, {
      "shop_id": "4485ec7b-cead-464d-9927-609e563bd5cc",
      "location": [-1.2109138, 36.88693]
    }, {
      "shop_id": "4cf41e3f-d084-4386-829a-cf49b6a6361e",
      "location": [-1.2108896, 36.886787]
    }, {
      "shop_id": "1c6e382a-7b8b-4290-83ce-bfae1906636c",
      "location": [-1.2107788, 36.88673]
    }, {
      "shop_id": "4a3756ff-8ed4-4b0d-a905-ad62d5e850bd",
      "location": [-1.2103904, 36.88589]
    }, {
      "shop_id": "3584794c-409d-42d6-a9ac-946f461c140b",
      "location": [-1.2103426, 36.885643]
    }, {
      "shop_id": "f3456894-5a54-4099-ab0f-285674c006d8",
      "location": [-1.2103723, 36.88552]
    }, {
      "shop_id": "7dc6306e-a32d-4501-9ab3-99a5e3a8be12",
      "location": [-1.2105628, 36.88566]
    }, {
      "shop_id": "9127dfa6-5a4d-445c-a513-e538707ecb5f",
      "location": [-1.2102461, 36.88613]
    }, {
      "shop_id": "0eef6e6b-3557-4e65-b3eb-b58e0e16d69c",
      "location": [-1.2100832, 36.88618]
    }, {
      "shop_id": "f61212c4-c85d-4e71-bfa8-1ba791e439a7",
      "location": [-1.2074927, 36.886883]
    }, {
      "shop_id": "cddd7ffb-8609-4ead-ad98-32308462988e",
      "location": [-1.21067953109741, 36.8749732971191]
    }, {
      "shop_id": "54044bf5-ad24-441a-9d7c-50f1dc63c2c6",
      "location": [-1.2106036, 36.874897]
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
      "shop_id": "f9168151-fa52-4c2d-ac2e-ece90f34a2a1",
      "location": [-1.2104101, 36.874447]
    }, {
      "shop_id": "50318587-f011-4994-b31f-4e874a169bed",
      "location": [-1.210369348526, 36.8737716674805]
    }, {
      "shop_id": "8eaadd34-01eb-4628-8794-f097fe84115e",
      "location": [-1.21037602424622, 36.8736534118652]
    }, {
      "shop_id": "6844b8b0-2bcc-47de-9b38-fe13ef2366da",
      "location": [-1.205864, 36.873367]
    }, {
      "shop_id": "d03d5d60-f710-45b6-bcdc-453d4f0afb1f",
      "location": [-1.2080204, 36.872845]
    }, {
      "shop_id": "e8767aa1-efd6-43b1-a676-56507d8313c8",
      "location": [-1.2103822, 36.87127]
    }, {
      "shop_id": "a2a6755d-c519-4a9d-9f8e-46f9dcdd135e",
      "location": [-1.2103928, 36.87126]
    }, {
      "shop_id": "d7c9ec12-bb67-4d10-9cec-84602fd92afd",
      "location": [-1.216825, 36.867348]
    }, {
      "shop_id": "2638bd20-dcce-48a3-8a18-9ad0d87872d6",
      "location": [-1.2274057, 36.869976]
    }, {
      "shop_id": "d6f22b67-a33c-41a4-aab5-9abc1f810259",
      "location": [-1.2274019, 36.86996]
    }, {
      "shop_id": "1e04ce4a-edb6-42b2-8389-c46e9089a78d",
      "location": [-1.227349, 36.869946]
    }, {
      "shop_id": "28b1d5a8-7f0d-4946-90e2-90ad11c5bcd1",
      "location": [-1.22849929332733, 36.8701210021973]
    }, {
      "shop_id": "eb5a84c7-bd1d-4024-8677-d68cac874f45",
      "location": [-1.2318046, 36.872616]
    }, {
      "shop_id": "b0f26d6b-8fe5-47f6-9eb3-468cf9e91054",
      "location": [-1.2287261, 36.879032]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Tassia",
    "route_id": "4c2cad0f-1672-4ad7-a915-c94f5e8424ca",
    "matrix_info": {
      "DistanceMatrixAPI requests": 717,
      "cache_hit": "69%"
    },
    "distance": "32.47km",
    "path": "dsfG_se`F}qHm|AxQvd@lHvYv@^]ZiAT|Dp@nEtCtPlKoCdFoM{HQuAhJtMHD~OVzClKEBqMvHhJsF}AwGgT|J]tAf@|AnBlMt@iAkE`EfJwLP_AnDvGM?}FrCPUrF_K_G}@iIaRiB}C_@a@]sANxElCbFqSmSiG_GiH_Ch@qNb@HzBuEoFyKgA_TvrHtiA",
    "shops": [{
      "shop_id": "40777d20-2a89-449d-867b-9f3bebca0132",
      "location": [-1.3006811, 36.912872]
    }, {
      "shop_id": "e6544af9-e5f0-42b2-bfd3-5f5a91a44c4f",
      "location": [-1.30368876457214, 36.9068336486816]
    }, {
      "shop_id": "d5a02377-7ec2-4039-9555-f914edbf07cd",
      "location": [-1.3052036, 36.90255]
    }, {
      "shop_id": "ecc1d4f4-d5de-4a19-b7bd-6d9a01aede3b",
      "location": [-1.305477, 36.902393]
    }, {
      "shop_id": "7bc475cf-24ce-4481-b891-ee29736b381f",
      "location": [-1.305334, 36.902245]
    }, {
      "shop_id": "e096fb38-de3d-456b-842c-5c758a6fee26",
      "location": [-1.304956, 36.902138]
    }, {
      "shop_id": "dd43c5a7-d5e0-4e2d-b681-937a16350f4e",
      "location": [-1.3059072, 36.901894]
    }, {
      "shop_id": "9f81ad57-48dc-40a5-a352-d246908f0216",
      "location": [-1.3069482, 36.901142]
    }, {
      "shop_id": "4eb326e8-b111-471e-84a3-85d928fd57ff",
      "location": [-1.3097847, 36.89915]
    }, {
      "shop_id": "97264366-1edd-4456-a8c4-c57ed73226e1",
      "location": [-1.3090583, 36.897995]
    }, {
      "shop_id": "18639804-fa19-40dd-a389-0bc45fce5246",
      "location": [-1.306742, 36.899582]
    }, {
      "shop_id": "fb49d7a4-fc7a-4b0d-8eea-59ca182f4b93",
      "location": [-1.3066528, 36.90001]
    }, {
      "shop_id": "2aa1e5f4-4352-4fbf-98e6-8f8e12fb2828",
      "location": [-1.3084598, 36.89766]
    }, {
      "shop_id": "0518e20a-1410-4583-9177-eacde84e92a1",
      "location": [-1.308505, 36.897625]
    }, {
      "shop_id": "1f424e99-67e9-4bee-a905-21ec7268552a",
      "location": [-1.3112289, 36.897507]
    }, {
      "shop_id": "8d5b16fa-48f9-477c-a296-0a4e806c7b14",
      "location": [-1.3120089, 36.895515]
    }, {
      "shop_id": "64385cba-cca9-46be-ba0e-bb375302a0f5",
      "location": [-1.3119808, 36.8955]
    }, {
      "shop_id": "ffeb995a-bb18-4006-a8a7-123b144f7ff2",
      "location": [-1.309651, 36.893936]
    }, {
      "shop_id": "3f5f4a52-0811-4ca4-b408-ba43d38f929c",
      "location": [-1.3114614, 36.89516]
    }, {
      "shop_id": "5bd816ce-6693-4fb7-aba9-df42963a551c",
      "location": [-1.3109922, 36.896557]
    }, {
      "shop_id": "cee03d07-e1a1-4733-a497-5d1c5f005984",
      "location": [-1.307586, 36.894646]
    }, {
      "shop_id": "d46540fc-515f-412f-a4bf-615e03f4ca14",
      "location": [-1.3074424, 36.894222]
    }, {
      "shop_id": "da81ea4b-758b-4c3b-9d19-db1700ada544",
      "location": [-1.3076378, 36.893745]
    }, {
      "shop_id": "f61c79a2-a027-41bb-bf4c-1563f8100a8c",
      "location": [-1.308196, 36.891445]
    }, {
      "shop_id": "3224f219-327d-445f-bfab-fa6a1122295f",
      "location": [-1.3084666, 36.89181]
    }, {
      "shop_id": "0d83df68-2688-4bba-86d2-72ac52de2668",
      "location": [-1.3074521, 36.89084]
    }, {
      "shop_id": "befe127e-7014-4770-8703-c6b75b88ba92",
      "location": [-1.3092504, 36.893036]
    }, {
      "shop_id": "b952aab1-c1fd-4a72-9c1a-9d680725a58d",
      "location": [-1.3093438, 36.893364]
    }, {
      "shop_id": "3673bbea-6f38-48c3-a18c-709181a9d3ed",
      "location": [-1.3102168, 36.89196]
    }, {
      "shop_id": "ebc93198-4840-4def-aec2-b2522d966835",
      "location": [-1.3101499, 36.891964]
    }, {
      "shop_id": "dc9c89df-2858-4e25-a46d-26bd081612c1",
      "location": [-1.3088841, 36.891216]
    }, {
      "shop_id": "96d54e7d-2068-40e6-b267-0f09efd64f1d",
      "location": [-1.3089725, 36.891327]
    }, {
      "shop_id": "e9f36ed5-ca38-48f2-8b45-3bcf443772ca",
      "location": [-1.3101853, 36.89325]
    }, {
      "shop_id": "16af5832-b1a9-4f08-89d3-579a15f0e136",
      "location": [-1.3089052, 36.89356]
    }, {
      "shop_id": "51bea6b2-4656-4be6-9953-bc8e2dc18c81",
      "location": [-1.3072611, 36.896614]
    }, {
      "shop_id": "a81ba5a6-8750-4646-920d-4554e934fcae",
      "location": [-1.3067285, 36.8974]
    }, {
      "shop_id": "7b4aa622-6b7a-4ab1-9473-d8895d4f0dba",
      "location": [-1.3065689, 36.89757]
    }, {
      "shop_id": "1d65ea1c-df36-4e6c-bc0a-49be81386bdc",
      "location": [-1.306418, 36.897987]
    }, {
      "shop_id": "b0a3a3b2-506f-4aad-957c-112832393667",
      "location": [-1.306499, 36.8969]
    }, {
      "shop_id": "b1cae4aa-40f3-42fd-9fc6-90d7ff574f20",
      "location": [-1.307205, 36.895763]
    }, {
      "shop_id": "b80c5ce6-9624-4358-9825-a98d209be978",
      "location": [-1.3039244, 36.899025]
    }, {
      "shop_id": "4ba78838-908d-4822-ae9f-68fa66b3cf24",
      "location": [-1.3025873, 36.90031]
    }, {
      "shop_id": "479ffb7e-ccb7-45bc-99e9-70dee7e6ba2e",
      "location": [-1.3010969, 36.900948]
    }, {
      "shop_id": "3b4a3f5b-7f4a-48bb-b8ac-786791f8e6a6",
      "location": [-1.3013086, 36.90344]
    }, {
      "shop_id": "a7b66810-740d-464d-b49a-13026ac46179",
      "location": [-1.301486, 36.903393]
    }, {
      "shop_id": "1e1d8137-1e55-4bea-a16e-3f1344c834ad",
      "location": [-1.3021066, 36.90446]
    }, {
      "shop_id": "cb6bb750-c3f3-4e90-a0d7-126841bb8961",
      "location": [-1.3009077, 36.906513]
    }, {
      "shop_id": "e22ddcc0-e253-4beb-9dbd-c2f15c25e516",
      "location": [-1.300545, 36.90987]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "South B",
    "route_id": "95e538a3-a232-4a80-9419-fa575d0de857",
    "matrix_info": {
      "DistanceMatrixAPI requests": 521,
      "cache_hit": "86%"
    },
    "distance": "31.46km",
    "path": "dsfG_se`Fs{DdgHcA|g@UFi@d@q@z@kExDF\\B@\\Zp@t@Vu@XAqFgDMDKOfAWn@g@{@U]`DlC}D|@xKr@bARD@MTh@DdGiNvGqDZiD~@mDcAsA_KJrD{CzEA?wAAO@AUgAh@w@{@l@lQG@tTTJIPBG|Ccd@vCiDr\\I?_Au^zUgj@d@aBpCoIfD_NLm@b@QT_A\\mAr@sCgByMcDB{Ck@hIrDPpDb`FwuH",
    "shops": [{
      "shop_id": "8480066e-8f40-4c01-a7c8-d834d84ce101",
      "location": [-1.3196135, 36.85053]
    }, {
      "shop_id": "2d26a6c9-5344-4e97-885e-11add494da82",
      "location": [-1.319273, 36.843975]
    }, {
      "shop_id": "9e7b5093-8b4c-4f40-80c5-cc4108d82d49",
      "location": [-1.3191577, 36.84394]
    }, {
      "shop_id": "e7fa9755-e643-4350-a394-148aa9001556",
      "location": [-1.31895112991333, 36.84375]
    }, {
      "shop_id": "5e25e6c2-688b-4783-9697-978a46547b54",
      "location": [-1.3187044, 36.84345]
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
      "shop_id": "fce3a644-b895-430f-9494-3227991ee111",
      "location": [-1.3178927, 36.84222]
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
      "shop_id": "3c6d4827-4379-496f-b4fd-f6b6c27d2ebb",
      "location": [-1.3171842, 36.84307]
    }, {
      "shop_id": "bd3266a4-888f-4c72-bef3-7945093cd6e8",
      "location": [-1.3171071, 36.843037]
    }, {
      "shop_id": "aeca8575-cefc-497d-b13f-14edd9e2873f",
      "location": [-1.3170512, 36.84312]
    }, {
      "shop_id": "ef827397-9df8-4726-866a-c0bcf254f7ca",
      "location": [-1.3174108, 36.84324]
    }, {
      "shop_id": "0148792a-cc7d-4ea0-8492-f033dd276b4a",
      "location": [-1.3176497, 36.843437]
    }, {
      "shop_id": "8f62f176-b333-464d-85e1-6ab43510249d",
      "location": [-1.3173457, 36.843548]
    }, {
      "shop_id": "8a10a243-eb18-43f0-b5c1-e7a15569e6b8",
      "location": [-1.3172041, 36.842743]
    }, {
      "shop_id": "3ddf4dfa-8163-4b1f-b3fe-ec695a082fe9",
      "location": [-1.3179055, 36.84369]
    }, {
      "shop_id": "5d2cb0fd-d042-4718-bdae-af1fec961b19",
      "location": [-1.3182192, 36.841637]
    }, {
      "shop_id": "aa0aedde-b1e6-46a5-be92-42ca9fb9d168",
      "location": [-1.3184808, 36.841297]
    }, {
      "shop_id": "a2c3d90a-e8fa-40a6-b7b7-bedbb9563bda",
      "location": [-1.3185776, 36.84127]
    }, {
      "shop_id": "bb2ae1da-5286-4cbc-9956-7204ce073b1d",
      "location": [-1.3185942, 36.84134]
    }, {
      "shop_id": "6550164d-0ad8-4dfd-83e2-1022cb5ccf26",
      "location": [-1.3187006, 36.841133]
    }, {
      "shop_id": "27c6e995-056d-4ef8-9218-191daca12c3b",
      "location": [-1.3187299, 36.839825]
    }, {
      "shop_id": "7de126b9-e05d-445d-84f7-b591d6069cb6",
      "location": [-1.3162825, 36.838417]
    }, {
      "shop_id": "983b92fb-fa20-4767-9676-d9efdf63b45b",
      "location": [-1.3153929, 36.83828]
    }, {
      "shop_id": "7edfa026-54a2-44e7-8f8d-a9e34a67edd0",
      "location": [-1.314541, 36.83796]
    }, {
      "shop_id": "480dc805-6b9a-4616-ae95-0773c4631d70",
      "location": [-1.3136693, 36.838295]
    }, {
      "shop_id": "c21f0da5-8040-43e1-96d9-e6ac6d9d5357",
      "location": [-1.3132501, 36.840218]
    }, {
      "shop_id": "ece07b36-c4c6-4df4-9a5d-ffa585aa3a7d",
      "location": [-1.3133085, 36.83932]
    }, {
      "shop_id": "547ef6e6-2bb2-4529-9ad3-574bc7ae7d2a",
      "location": [-1.3125259, 36.83822]
    }, {
      "shop_id": "9370b2b3-156b-450a-8924-03477ad7b211",
      "location": [-1.3125165, 36.838215]
    }, {
      "shop_id": "69fa719e-171c-43b4-8dd1-b4207a150a40",
      "location": [-1.3120767, 36.838226]
    }, {
      "shop_id": "03ef2960-ce38-47cf-9517-db6c08237956",
      "location": [-1.3119981, 36.83822]
    }, {
      "shop_id": "228f8f5e-9cbe-4bd8-940b-566bfe5d2e96",
      "location": [-1.3119898, 36.838333]
    }, {
      "shop_id": "d005441e-c18c-4abc-a702-8f221a150d04",
      "location": [-1.3116256, 36.838123]
    }, {
      "shop_id": "7bf7a78e-0612-42c7-87c1-d872bd45b060",
      "location": [-1.3113533, 36.838417]
    }, {
      "shop_id": "e96e7bc6-553c-476f-a03d-31f9dd73ef05",
      "location": [-1.3115805, 36.835472]
    }, {
      "shop_id": "0d19228e-7f94-4ea1-83c5-98c39b6dde16",
      "location": [-1.3115436, 36.835464]
    }, {
      "shop_id": "2b3f2281-b1df-48ca-b12a-2bc5ca5ad63e",
      "location": [-1.3150091, 36.835346]
    }, {
      "shop_id": "cab205e4-358c-4590-971a-0faec1f70c64",
      "location": [-1.3150702, 36.835403]
    }, {
      "shop_id": "06c499c8-a350-48c6-b1c3-e2ec6ad8f1b3",
      "location": [-1.3151588, 36.835377]
    }, {
      "shop_id": "cc21d787-273a-4752-9219-caceb2f35ec0",
      "location": [-1.31511509418488, 36.8345909118652]
    }, {
      "shop_id": "39b94977-dd8c-4665-a780-aaee5e69d15c",
      "location": [-1.3091826, 36.83383]
    }, {
      "shop_id": "23cd16dd-be7b-4565-9331-d43c60b2f3ba",
      "location": [-1.308328, 36.829094]
    }, {
      "shop_id": "20c25b55-95d9-4aef-a06c-12b6a1dc4a9d",
      "location": [-1.30828332901001, 36.8290939331055]
    }, {
      "shop_id": "7a34c5ea-cf72-4204-9dad-33f5a4295e46",
      "location": [-1.3079568, 36.834156]
    }, {
      "shop_id": "1bc1a96b-4e3d-4395-99fa-a2a205d40661",
      "location": [-1.311616, 36.841076]
    }, {
      "shop_id": "9ff9dad4-4510-409d-8c21-b7cfd5d694df",
      "location": [-1.3118112, 36.84157]
    }, {
      "shop_id": "de01ad9a-cdbb-454f-bcc1-7dae73b0e944",
      "location": [-1.3125411, 36.843246]
    }, {
      "shop_id": "19f81bce-b23c-4611-b305-cdb43caf6d55",
      "location": [-1.3133825, 36.845646]
    }, {
      "shop_id": "bd36211f-27f5-47e8-a48b-0c9fc406889f",
      "location": [-1.3134532, 36.845882]
    }, {
      "shop_id": "849317eb-5553-4ef4-b92a-6c2643d0ebf5",
      "location": [-1.3136317, 36.845966]
    }, {
      "shop_id": "b3e4abd6-7db1-4a1a-b529-ac89e678e7fd",
      "location": [-1.3137368, 36.846294]
    }, {
      "shop_id": "9ac4b440-d514-456e-985d-0c0e44027046",
      "location": [-1.3138887, 36.846684]
    }, {
      "shop_id": "ad8ce623-9aa0-4e09-9bdc-6b96963acc69",
      "location": [-1.3141499, 36.847424]
    }, {
      "shop_id": "7bd607c3-1183-4ab5-a584-535d35bb133d",
      "location": [-1.3136264, 36.84979]
    }, {
      "shop_id": "285cebd8-e75e-49a2-82c3-cb94bff74d4a",
      "location": [-1.3128124, 36.849766]
    }, {
      "shop_id": "bc4c97b1-8aef-4bc1-8189-69900f98eb9d",
      "location": [-1.3120252, 36.849987]
    }, {
      "shop_id": "62579832-07f7-41df-88ff-ab7ff526cb1d",
      "location": [-1.3136758, 36.84909]
    }, {
      "shop_id": "dcd64522-1deb-472f-bde7-1e593dd096dd",
      "location": [-1.3137664, 36.848198]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Upper South C",
    "route_id": "3ecdc817-8cad-4aac-ae9e-221964b5f945",
    "matrix_info": {
      "DistanceMatrixAPI requests": 263,
      "cache_hit": "90%"
    },
    "distance": "11.95km",
    "path": "tz|Fmdx_FrhAzAWNyAb@A@?BHEe@p@YF~OrBx@sH`GzD|Er@DF@LDLIb@C@_A]^hE|A|EqETj@pDkB|G|G`BoK@OT_BpA{@YoAYrG_ChN_EjAHBGH?Xf@mAr[vT_i@ABHFNu@bAuENaC?Cc@W?AIAuC?qCyD?AGAvBoAgZiDqFi@kAA}xAzF",
    "shops": [{
      "shop_id": "4adeabc0-8219-4358-8eb9-bfb2207a4658",
      "location": [-1.3115695, 36.828568]
    }, {
      "shop_id": "ab04e9cd-8b47-4158-9a02-a83a8b6f4037",
      "location": [-1.3114457, 36.828495]
    }, {
      "shop_id": "08a2c479-38e0-4143-8fed-d7f85ead32f3",
      "location": [-1.3109994, 36.82831]
    }, {
      "shop_id": "8a1487a7-d80b-4f3c-9492-bfbe5276b6c4",
      "location": [-1.3109932, 36.8283]
    }, {
      "shop_id": "805dbf35-031c-45e9-a3f8-235bbd5053f6",
      "location": [-1.3109907, 36.82828]
    }, {
      "shop_id": "33b744d5-86d3-4d86-9cb0-f372340a3584",
      "location": [-1.3110399, 36.828312]
    }, {
      "shop_id": "bee84517-fbd1-4227-a4cb-e477ca6c2577",
      "location": [-1.3108484, 36.828064]
    }, {
      "shop_id": "6669b2da-695e-4f5e-94a9-71f24ee8a229",
      "location": [-1.3107177, 36.828022]
    }, {
      "shop_id": "280432e8-973c-413d-8cf7-ddffeac43d7f",
      "location": [-1.3134437, 36.827435]
    }, {
      "shop_id": "aeed28ad-f4c8-4c28-ba0b-c0b0d8430bea",
      "location": [-1.3137294, 36.828976]
    }, {
      "shop_id": "20bba024-7011-4267-8375-daf7b34e607f",
      "location": [-1.315019, 36.828037]
    }, {
      "shop_id": "5f51d868-52e4-41b9-a204-e9a6d846fe46",
      "location": [-1.3161305, 36.827778]
    }, {
      "shop_id": "f1d8a5be-7e8e-4c03-8afc-03941f94721b",
      "location": [-1.3161553, 36.82774]
    }, {
      "shop_id": "97d0a739-2cfd-4833-9518-3532fa1c5595",
      "location": [-1.3161682, 36.82767]
    }, {
      "shop_id": "977fb9c0-aa2b-4fb5-a23f-8522c3c56742",
      "location": [-1.3161982, 36.8276]
    }, {
      "shop_id": "77a8860f-7179-4ed9-b5cd-0be84113de38",
      "location": [-1.316154, 36.827415]
    }, {
      "shop_id": "cb8268d6-e9ff-4763-a63e-a712f5fa1aa8",
      "location": [-1.3161329, 36.82741]
    }, {
      "shop_id": "a20c68e3-eeee-4959-a503-db550a5d72ef",
      "location": [-1.3158063, 36.827564]
    }, {
      "shop_id": "ee0cd701-b4dc-4c4a-9554-8703c3e5e562",
      "location": [-1.3159698, 36.82655]
    }, {
      "shop_id": "9140eac1-dc37-495e-b920-952c9efc1605",
      "location": [-1.3164375, 36.825443]
    }, {
      "shop_id": "85ec8c29-4f68-4a45-a213-ec81ca9ee5d1",
      "location": [-1.315388, 36.825333]
    }, {
      "shop_id": "be962540-244e-4b80-9ace-eaac9271f1b1",
      "location": [-1.3156054, 36.824444]
    }, {
      "shop_id": "e0c90a0b-0d05-43ba-a25e-f1102b3b7f6a",
      "location": [-1.315067, 36.823006]
    }, {
      "shop_id": "d88904d7-3aa6-4cae-890e-23d4e280bdb2",
      "location": [-1.316495, 36.82252]
    }, {
      "shop_id": "b3513e31-afa4-4569-b543-b84586964ec4",
      "location": [-1.3145006, 36.82251]
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
      "shop_id": "9817e746-247c-4959-97f9-98cbe9eb0d5f",
      "location": [-1.3146242, 36.82289]
    }, {
      "shop_id": "966dff29-7f08-4320-ab12-b1241ec92f72",
      "location": [-1.3170717, 36.823845]
    }, {
      "shop_id": "8a3bee6e-4949-4a77-af4d-a8a30d44536c",
      "location": [-1.3174547, 36.823803]
    }, {
      "shop_id": "22ae7b76-32d6-4c2b-8f64-9d6d29e2705c",
      "location": [-1.3174717, 36.82384]
    }, {
      "shop_id": "d4506098-9399-4769-ba99-6496dfe5727b",
      "location": [-1.3175246, 36.82384]
    }, {
      "shop_id": "078b8c6c-1550-48a6-abc1-645cec17d100",
      "location": [-1.3176545, 36.823643]
    }, {
      "shop_id": "f5076869-a1cb-4bb0-acf9-6bbd7c8dadf5",
      "location": [-1.317259, 36.81906]
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
      "shop_id": "f8d478f6-6406-4415-93cf-656aa4ad1b67",
      "location": [-1.3208596, 36.82599]
    }, {
      "shop_id": "12f27bd9-068b-4379-b3a6-df0c429aa251",
      "location": [-1.3212012, 36.827065]
    }, {
      "shop_id": "a8a470c8-6403-4f22-b3a0-ed4999978b8d",
      "location": [-1.3212829, 36.827705]
    }, {
      "shop_id": "7dac8f43-5f23-4f67-bb80-dde9cf136da5",
      "location": [-1.3212783, 36.82773]
    }, {
      "shop_id": "a11fb5ab-9c0a-4d5a-a76f-9503393ba257",
      "location": [-1.3210967, 36.827847]
    }, {
      "shop_id": "9e01f28d-7fc4-4942-bbbd-cc760cf11eca",
      "location": [-1.3211035, 36.82786]
    }, {
      "shop_id": "6047c0a4-279e-43e5-9407-e16a0e6b0c29",
      "location": [-1.3210483, 36.82787]
    }, {
      "shop_id": "a2da15b2-9d49-4cbf-862c-88b32af20f4b",
      "location": [-1.3202997, 36.82787]
    }, {
      "shop_id": "e2c7e463-e4c7-4491-8180-81052f4594e7",
      "location": [-1.319571, 36.8288]
    }, {
      "shop_id": "f8c7995d-a01f-4f99-9f4f-ac62d2dfce34",
      "location": [-1.319565, 36.828808]
    }, {
      "shop_id": "7f8b1b9c-3d22-426c-ae57-61e348daf1f4",
      "location": [-1.3195322, 36.828815]
    }, {
      "shop_id": "fb7b6203-d166-44f6-8286-90b382cc4d82",
      "location": [-1.3201276, 36.829224]
    }, {
      "shop_id": "138fe6d5-a6e3-4721-a7cd-41b8468593a9",
      "location": [-1.31577289104462, 36.8300743103027]
    }, {
      "shop_id": "e7418da9-d3d2-464a-be4e-9413e9515061",
      "location": [-1.31456398963928, 36.8302841186523]
    }, {
      "shop_id": "950ff8e4-c046-4874-b192-bacb8340b0cb",
      "location": [-1.3141828, 36.83029]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Tononoka",
    "route_id": "ce2b2b3b-39ce-482f-bbe0-4858c09028b0",
    "matrix_info": {
      "DistanceMatrixAPI requests": 557,
      "cache_hit": "80%"
    },
    "distance": "34.27km",
    "path": "`h{F{`g`FgnB~_AugBqyDRo@|AiRBOWqIkLyXxq@uwAgu@kH{I}CcCxAc\\r@dJwR~CJfErDnB}EhAKPEBArDmIwDfAqGlBzc@gs@ag@nr@{Ey@u@Ns@k@U_@[|HqR[jAvd@jXfh@vMnFiFaCpVn}@uAbBx@rCcMvCYj@oHdLlCfIpEkAzBe@jCsDfDcAt@WQpG`DpCbBoBd@hDf@WVdEqRjJhlFh`B",
    "shops": [{
      "shop_id": "322faaf8-93e5-42e1-87d2-5771d8b3644b",
      "location": [-1.2738869, 36.894863]
    }, {
      "shop_id": "c10c5754-da25-4040-8e4b-fee01da00061",
      "location": [-1.2571391, 36.924706]
    }, {
      "shop_id": "084a0d46-a7c5-4854-99f2-803c546f6fbf",
      "location": [-1.2572418, 36.924946]
    }, {
      "shop_id": "59a577d8-9358-4f86-a795-2ebd37f9c42f",
      "location": [-1.257709, 36.92804]
    }, {
      "shop_id": "7cc62cfd-df1d-41fb-bd6e-f4276ffd425b",
      "location": [-1.2577255, 36.92812]
    }, {
      "shop_id": "c4587a81-dbd6-43d0-8df6-3690d30d6452",
      "location": [-1.2576092, 36.929813]
    }, {
      "shop_id": "694fcb4c-4f18-438d-8d08-732c6e45332d",
      "location": [-1.2554677, 36.933937]
    }, {
      "shop_id": "a075a861-0934-489c-8e03-f2ce136639c2",
      "location": [-1.2635975, 36.94813]
    }, {
      "shop_id": "6c0b60d5-26cb-4de0-acad-0bed6d6aff0e",
      "location": [-1.2549208, 36.949627]
    }, {
      "shop_id": "4f8d0548-95f4-4d82-97c0-081749f1e1e5",
      "location": [-1.2531817, 36.95042]
    }, {
      "shop_id": "fd11438b-6a1c-4c92-83aa-031e40791385",
      "location": [-1.2525194, 36.94997]
    }, {
      "shop_id": "46e9a49e-e809-4202-8a4f-5f9ea940e399",
      "location": [-1.2478584, 36.949715]
    }, {
      "shop_id": "cc0f38a5-318e-4421-9864-aa027f527daa",
      "location": [-1.249646, 36.952873]
    }, {
      "shop_id": "a2f5d39b-5b8d-432e-90be-a3c17fa157df",
      "location": [-1.2504461, 36.95281]
    }, {
      "shop_id": "e2b30e8a-45a8-43a0-94da-b28d37afb514",
      "location": [-1.25144743919373, 36.9519119262695]
    }, {
      "shop_id": "2f7717bb-c54e-4547-ac28-ec35974566f2",
      "location": [-1.25201237201691, 36.9530181884766]
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
      "shop_id": "fb3cb022-81c8-4a2a-9cbd-35817766fbdb",
      "location": [-1.2533865, 36.95479]
    }, {
      "shop_id": "05bb7161-74cb-480c-97bc-7cc9ad8a5c67",
      "location": [-1.2524676, 36.954433]
    }, {
      "shop_id": "64ac6714-6b61-45cc-bb3a-8e4a51129afc",
      "location": [-1.2511009, 36.95388]
    }, {
      "shop_id": "899a7e0d-f345-43b6-a20f-c10becce8fea",
      "location": [-1.2570021, 36.96224]
    }, {
      "shop_id": "4e6497e4-ce7b-42e6-8f0d-599aa11b86b0",
      "location": [-1.2505867, 36.954002]
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
      "shop_id": "a44f9eb2-455a-4d9e-bbaa-66e61537796b",
      "location": [-1.2500187, 36.940502]
    }, {
      "shop_id": "ef36e294-f159-4947-8f10-173a074d754c",
      "location": [-1.2523788, 36.9393]
    }, {
      "shop_id": "72279d8f-6166-4219-8321-41b7ff9a1f24",
      "location": [-1.2512113, 36.93995]
    }, {
      "shop_id": "2884815c-fff9-4a4d-9fcc-c1bd356df74c",
      "location": [-1.2549847, 36.929947]
    }, {
      "shop_id": "15bbb83a-4fbd-4cb9-a0bf-03a295670a9b",
      "location": [-1.2545518, 36.929447]
    }, {
      "shop_id": "c7b725b6-f009-4605-9c35-e8b20eccf85e",
      "location": [-1.2548429, 36.928715]
    }, {
      "shop_id": "c6577b98-380e-451f-9c74-51d39feb3a29",
      "location": [-1.2525797, 36.927948]
    }, {
      "shop_id": "b7cd0f21-3f20-4ca6-9f80-f9783c865014",
      "location": [-1.2524477, 36.927734]
    }, {
      "shop_id": "57ccf138-85f7-4155-ad51-edf878f20fc3",
      "location": [-1.2509273, 36.925617]
    }, {
      "shop_id": "a9027e74-7c29-4e2e-a2a6-4129d43b3406",
      "location": [-1.2516372, 36.923977]
    }, {
      "shop_id": "6ec8403c-a8b8-4637-8bee-bed13b744bcc",
      "location": [-1.2526886, 36.924362]
    }, {
      "shop_id": "06125fe5-e165-4688-bfd4-7f4153704c81",
      "location": [-1.2533104, 36.924545]
    }, {
      "shop_id": "87f1ef46-e840-4f1d-8d2e-1d96ec20476d",
      "location": [-1.2540135, 36.925453]
    }, {
      "shop_id": "40535ba0-78e6-4a81-9db5-dee55e667328",
      "location": [-1.2548517, 36.92579]
    }, {
      "shop_id": "6c8158c5-8762-4695-98f6-cf7fd744c910",
      "location": [-1.2551236, 36.925907]
    }, {
      "shop_id": "68c81f78-efa7-45e6-92cb-4d181a7f183a",
      "location": [-1.2550261, 36.924538]
    }, {
      "shop_id": "931bab41-929c-48e8-b651-ab680d2a2205",
      "location": [-1.2558439, 36.923813]
    }, {
      "shop_id": "5a1eb048-4331-4277-93cf-9733bbeb628c",
      "location": [-1.2563373, 36.924374]
    }, {
      "shop_id": "5c1850e8-23f5-48da-bf7d-518e02702e5c",
      "location": [-1.2565349, 36.923515]
    }, {
      "shop_id": "f51f0b11-5b65-4c9b-9860-1e87721e7f23",
      "location": [-1.25673, 36.923637]
    }, {
      "shop_id": "3d0b9b7b-a4b6-4ece-abea-0bd405bb2f13",
      "location": [-1.2568506, 36.922653]
    }, {
      "shop_id": "1495a620-984a-442a-bc45-ebd6d0958a89",
      "location": [-1.253722, 36.92083]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Utawala 2",
    "route_id": "d4956fd9-29c8-49c4-a84e-d5e6dad07be6",
    "matrix_info": {
      "DistanceMatrixAPI requests": 255,
      "cache_hit": "89%"
    },
    "distance": "115.53km",
    "path": "dsfG_se`FclKezIcm@kwA?C@CY@gQ_mG??p^ehHdJ_r@?AB???BAFBIZMDg@MpHupD@?????@CEA??A?JGBF@k@Bk@sh@}bGN_HCEA?DGoaAspb@KRxNkIHoBxByCyHzDpvAtcGu@\\GPA?@@rt@tyKhBCstAnmPt`@|tJoG~KdBiElfLdp_@",
    "shops": [{
      "shop_id": "a5777c5b-8568-4d85-868e-345535fafee0",
      "location": [-1.2862521, 36.953472]
    }, {
      "shop_id": "d5ee23b5-3a68-4b74-af2a-320977d75143",
      "location": [-1.278874, 36.967613]
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
      "shop_id": "59244a90-8ecf-4262-8f49-0476c86a004f",
      "location": [-1.2808816, 37.058388]
    }, {
      "shop_id": "b138c6ec-d2fc-48d8-a56a-2963bc407206",
      "location": [-1.2826746, 37.06655]
    }, {
      "shop_id": "63155a98-475d-4789-b5b3-75f4f12aece1",
      "location": [-1.2826744, 37.06656]
    }, {
      "shop_id": "f92fff5d-e95c-4464-918f-8d47eed8a537",
      "location": [-1.2826926, 37.066563]
    }, {
      "shop_id": "aed92b0f-fe2a-4275-8546-a5f00615e5da",
      "location": [-1.2826924, 37.066555]
    }, {
      "shop_id": "856b23c2-90a1-49a5-ae73-1854e56b477a",
      "location": [-1.2827114, 37.066566]
    }, {
      "shop_id": "dd7d10cc-76f5-4d6b-8efa-a66a45c0fb61",
      "location": [-1.2827488, 37.06655]
    }, {
      "shop_id": "18278633-254d-4580-9ad4-0e61e9ce7aa9",
      "location": [-1.2827009, 37.066414]
    }, {
      "shop_id": "4912d89d-776a-49e2-8f5b-9bac68324406",
      "location": [-1.2826319, 37.06638]
    }, {
      "shop_id": "94da7a0b-6bbb-42c9-8d21-132600de080c",
      "location": [-1.2824322, 37.06645]
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
      "shop_id": "784acbf0-d36c-4652-8ea6-efa470d54eaf",
      "location": [-1.2839684, 37.094883]
    }, {
      "shop_id": "1d895053-52e3-44b0-8b98-03ba62b02961",
      "location": [-1.283976, 37.094902]
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
      "shop_id": "5e93f2a7-ca8c-44b0-9c73-4b935204ca5b",
      "location": [-1.2773904, 37.136936]
    }, {
      "shop_id": "89d76d01-d296-414a-97dd-ceaa6b192509",
      "location": [-1.2774736, 37.13838]
    }, {
      "shop_id": "95cad76d-a9f5-4c62-a28f-17d00dfe0adb",
      "location": [-1.2774506, 37.138405]
    }, {
      "shop_id": "75491f08-7f3d-44b2-8e4b-b402a75c76c7",
      "location": [-1.277444, 37.138405]
    }, {
      "shop_id": "1b0f7077-5725-4838-8d90-56984500d05c",
      "location": [-1.2774738, 37.138447]
    }, {
      "shop_id": "618816ac-49d8-48c9-aaa2-86eaf8726115",
      "location": [-1.2668335, 37.32047]
    }, {
      "shop_id": "61360381-b14f-4552-adb4-774a848da3d7",
      "location": [-1.2667731, 37.320366]
    }, {
      "shop_id": "d93be82c-10d5-4756-b748-1a5f6c79917d",
      "location": [-1.2693037, 37.322033]
    }, {
      "shop_id": "4b3fb694-221b-4cfd-901b-97bb74a146ec",
      "location": [-1.2693479, 37.32259]
    }, {
      "shop_id": "5f198f40-4418-4949-b36c-ffd79f919cce",
      "location": [-1.2699555, 37.32336]
    }, {
      "shop_id": "cd1c0472-f1a8-4b60-8dcc-3ed967b37157",
      "location": [-1.2683886, 37.32242]
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
      "shop_id": "dc058269-06c4-4323-9440-ae3beae64089",
      "location": [-1.2820917, 37.280464]
    }, {
      "shop_id": "0103f94d-861e-4b4f-b8e5-e210a8b7ce9e",
      "location": [-1.2906702, 37.214752]
    }, {
      "shop_id": "907a0022-0ee4-4a55-a4aa-1e8aed19f3f3",
      "location": [-1.29120063781738, 37.2147674560547]
    }, {
      "shop_id": "c6de9702-ecd2-4085-96ee-231cf37d5ae9",
      "location": [-1.2775033, 37.125412]
    }, {
      "shop_id": "44aeb7e7-07b1-4417-b73b-c77b71c468d5",
      "location": [-1.2828919, 37.065582]
    }, {
      "shop_id": "26780df6-a196-46a7-b796-2adbcdc15b01",
      "location": [-1.28153419494629, 37.0635032653809]
    }, {
      "shop_id": "a7173043-1d7c-4e1c-b004-191e41925e7b",
      "location": [-1.2820389, 37.064507]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Wanginge",
    "route_id": "b7797862-72ad-449a-9b6e-0e6517e3f298",
    "matrix_info": {
      "DistanceMatrixAPI requests": 209,
      "cache_hit": "91%"
    },
    "distance": "68.6km",
    "path": "`z|Fedx_FgfIj~[IbHn@f@Gb@?DAFn@fEQ[hA`EwLmNhTo]g~AlqAyDdBkiCtiAwzAhYpA}FlCsBrVI|@uIX[pk@{XhUsEf@p@B?b@dZiV|RnpAjHnSkMOBuMbIkGfCsT|PuDoQ_@g@Q{ATWaBsGeA_@GoA}FcPmAiCnBwFKQbnB_u@}@tCzNeQkwAsgGlRs{@rX}c@`_MugR",
    "shops": [{
      "shop_id": "f69102e5-2fd6-4bcb-99a1-d635a8e0f5d7",
      "location": [-1.2473283, 36.680614]
    }, {
      "shop_id": "90263d58-0d56-4209-b290-3608939a9293",
      "location": [-1.2472848, 36.67915]
    }, {
      "shop_id": "a018eb42-80ac-40b6-8a1d-ef83a13e2534",
      "location": [-1.2475162, 36.678947]
    }, {
      "shop_id": "816a9068-2ba0-48ec-8363-39298bce1f2d",
      "location": [-1.2474777, 36.678772]
    }, {
      "shop_id": "5aadc1e7-f2d1-47a5-b8f6-7e1ac85ef866",
      "location": [-1.247477, 36.67874]
    }, {
      "shop_id": "02e71dd0-7465-4593-aa9b-c2d994cdb719",
      "location": [-1.2474651, 36.6787]
    }, {
      "shop_id": "56179181-66e4-4b53-af37-61154c20fa71",
      "location": [-1.2477107, 36.6777]
    }, {
      "shop_id": "86df05ed-7d0c-472c-88f3-240d95e8cfcd",
      "location": [-1.2476176, 36.677837]
    }, {
      "shop_id": "3df63f29-c346-4605-bc7f-924c30cce7ef",
      "location": [-1.2479862, 36.676865]
    }, {
      "shop_id": "d444bd13-7b0a-4229-9973-b1cdbd4d8fc1",
      "location": [-1.2457879, 36.67934]
    }, {
      "shop_id": "f84f545e-1c30-4dcf-9440-213e8c32a7fc",
      "location": [-1.2492013, 36.684223]
    }, {
      "shop_id": "e39f3d9e-485d-4d9d-9076-625500133db4",
      "location": [-1.2339616, 36.67103]
    }, {
      "shop_id": "fd39ce47-9b15-4bbe-8500-3b63bb5ffbb5",
      "location": [-1.2330315, 36.67052]
    }, {
      "shop_id": "979321cf-7682-4fb3-898f-525be4e5413f",
      "location": [-1.2108939, 36.658566]
    }, {
      "shop_id": "f8b6ac69-cf5a-4dd1-8d28-01228dcefafd",
      "location": [-1.1962074, 36.654358]
    }, {
      "shop_id": "0c7ec7b3-e5d3-49ec-a480-5986b8e24ce5",
      "location": [-1.1966175, 36.65563]
    }, {
      "shop_id": "9c8f6088-1e18-4dad-bd59-1aa4a394574d",
      "location": [-1.1973315, 36.656208]
    }, {
      "shop_id": "3facd8ed-2009-49f2-890a-b581432aad5f",
      "location": [-1.2011065, 36.656265]
    }, {
      "shop_id": "ca83dc26-e1d5-43b6-bd68-8ec08bb3add8",
      "location": [-1.2014209, 36.657974]
    }, {
      "shop_id": "a71b3207-0f86-4ac8-b86f-3de3691ae1d6",
      "location": [-1.201548, 36.658108]
    }, {
      "shop_id": "ed2f59d5-2cda-4376-98e8-921b53347f77",
      "location": [-1.2086847, 36.662254]
    }, {
      "shop_id": "818898b5-7723-4612-a363-576ce465e482",
      "location": [-1.2122453, 36.663315]
    }, {
      "shop_id": "ef85b6aa-1e0c-4635-86a8-9ccca2b2b8df",
      "location": [-1.2124491, 36.66306]
    }, {
      "shop_id": "2a2c8b65-ab09-4416-b4b2-fcdcf460af3c",
      "location": [-1.212467, 36.66306]
    }, {
      "shop_id": "18eb3751-f3d0-40f7-bf91-799d02a3f016",
      "location": [-1.2126479, 36.65871]
    }, {
      "shop_id": "58875e43-402e-47b8-ad40-025414bc3dc6",
      "location": [-1.2089249, 36.65552]
    }, {
      "shop_id": "ac0a3161-50f7-4bd6-a072-6045acb9cf4d",
      "location": [-1.2219579, 36.65402]
    }, {
      "shop_id": "a6a45344-4ff0-4d5e-956d-4954c2a2d061",
      "location": [-1.225241, 36.656322]
    }, {
      "shop_id": "e05d669e-5083-472d-9db8-d7f8f9771b21",
      "location": [-1.2251564, 36.656303]
    }, {
      "shop_id": "1d9c7ea9-ecd2-4449-aa5e-455d726dec03",
      "location": [-1.2228117, 36.65468]
    }, {
      "shop_id": "f94f0283-2147-43a3-a78e-83102baf507c",
      "location": [-1.2214682, 36.653996]
    }, {
      "shop_id": "4bdd7ed6-34a9-4b91-8ef1-6ecb5b2c1206",
      "location": [-1.218014, 36.65113]
    }, {
      "shop_id": "cd372851-df25-4c17-b2bf-61a8e9954c35",
      "location": [-1.2171043, 36.654087]
    }, {
      "shop_id": "6b269755-fcfa-4906-8da4-29c800ff3633",
      "location": [-1.2169435, 36.65429]
    }, {
      "shop_id": "a0e82b74-cc63-4d05-b06d-30aa543dcba3",
      "location": [-1.2168463, 36.65475]
    }, {
      "shop_id": "1ca37d04-1a0b-4b7e-83c9-d0ee4501d908",
      "location": [-1.2169555, 36.654873]
    }, {
      "shop_id": "3cb263ba-ef88-47ac-9264-e2ad2b4eec64",
      "location": [-1.2164688, 36.65625]
    }, {
      "shop_id": "f5160f4d-6557-4395-8a57-c57fd591d3ee",
      "location": [-1.2161164, 36.656406]
    }, {
      "shop_id": "5f960c61-1f8b-4c5e-81ab-ba5e9724329f",
      "location": [-1.2160836, 36.656807]
    }, {
      "shop_id": "875f9b55-422f-4e2e-bf85-a381f2818730",
      "location": [-1.2148072, 36.659546]
    }, {
      "shop_id": "c259bb6e-6267-4120-ab99-bb22380bd482",
      "location": [-1.2144186, 36.660236]
    }, {
      "shop_id": "6909dbe8-7498-432e-ab24-ebaf62348655",
      "location": [-1.2149786, 36.66148]
    }, {
      "shop_id": "18751e48-f3e0-490b-a256-4cd884df6a8f",
      "location": [-1.2149203, 36.661568]
    }, {
      "shop_id": "b315d143-3367-4f7e-a9ea-1e47b7d2e93f",
      "location": [-1.2326995, 36.670208]
    }, {
      "shop_id": "0f3cab70-29b1-496e-b046-73c67a25519e",
      "location": [-1.232393, 36.669464]
    }, {
      "shop_id": "f304cd39-b3cf-4385-bdb4-5ba573168bad",
      "location": [-1.2349343, 36.67237]
    }, {
      "shop_id": "5371251d-c3c6-4f96-ab5d-58d5a5a0ca93",
      "location": [-1.2207859, 36.714706]
    }, {
      "shop_id": "c1f68d2f-78ce-4773-b701-27e8145f2d21",
      "location": [-1.2238998, 36.72441]
    }, {
      "shop_id": "e1cdfb9f-ccec-46da-bdf0-66da0fd8b030",
      "location": [-1.2279989, 36.73032]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Westlands",
    "route_id": "9e805ae4-3124-4236-a64d-acf18e71d4d1",
    "matrix_info": {
      "DistanceMatrixAPI requests": 253,
      "cache_hit": "84%"
    },
    "distance": "25.71km",
    "path": "`z|Fedx_Fa{DrxBzDQoF~E_MvEsJn[EXaA{JyFc\\\\ABCiAKsItb@ih@{q@dC~@?AHJNRfNho@E[pJhCgBgGsD`PvExU}@bJGDEzRlAxI|BpOfW|AJDA|@zEo[AnCoGgDyNq_@tNxGjQmPFiLpXka@?KbqDyiC",
    "shops": [{
      "shop_id": "8329f769-fdff-4c9d-ab9d-7287cef1eff0",
      "location": [-1.2695965, 36.809532]
    }, {
      "shop_id": "a9269e0e-fa94-4ee3-827d-24ad0d170778",
      "location": [-1.2705396, 36.80962]
    }, {
      "shop_id": "e9f63b6f-3849-46b9-89de-bd0cbb0fd9aa",
      "location": [-1.2693354, 36.808502]
    }, {
      "shop_id": "dfa9c5a4-618b-45f9-9cdd-cc6ee63a2ad3",
      "location": [-1.2671005, 36.80742]
    }, {
      "shop_id": "4f2b5bcf-9566-49f3-99d7-8dfc55cdf422",
      "location": [-1.2652369, 36.802856]
    }, {
      "shop_id": "479e4ac4-d37e-4337-bdc9-a2043e0c7f80",
      "location": [-1.2652084, 36.802734]
    }, {
      "shop_id": "1838cd66-fd18-4d36-8e8d-b77d30d259b3",
      "location": [-1.26488, 36.804626]
    }, {
      "shop_id": "f05677a9-13a7-4ba8-9baa-ee53b9c17422",
      "location": [-1.2636285, 36.809288]
    }, {
      "shop_id": "a1a035c3-8975-4ff8-95bc-f1898ed5bbf4",
      "location": [-1.2637829, 36.8093]
    }, {
      "shop_id": "95852efb-e5a0-4796-b290-fee6086af3a8",
      "location": [-1.2637963, 36.80932]
    }, {
      "shop_id": "9e2b630f-b1da-4662-8173-05f274b9016f",
      "location": [-1.2634324, 36.809376]
    }, {
      "shop_id": "cf5c84b8-7526-4f51-beb4-8aeb7c5bcf71",
      "location": [-1.261728, 36.803673]
    }, {
      "shop_id": "889ed282-a54c-4d1b-9650-acfb1ce1e79f",
      "location": [-1.25511634349823, 36.8118095397949]
    }, {
      "shop_id": "0c7d511a-1212-412e-9c6a-1feab5c80022",
      "location": [-1.2557887, 36.81149]
    }, {
      "shop_id": "8a621e9f-786f-4f78-95f3-221695cede12",
      "location": [-1.255789, 36.811497]
    }, {
      "shop_id": "4731e431-e211-4d51-82d8-e6d25ed40708",
      "location": [-1.2558433, 36.811436]
    }, {
      "shop_id": "888cf5fa-f75a-4083-96a6-0485f6671699",
      "location": [-1.2559195, 36.811337]
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
      "shop_id": "315a5c13-f1fd-4963-82ac-d85dbc8370b9",
      "location": [-1.2596644, 36.804375]
    }, {
      "shop_id": "88b3eba0-03a9-4a29-a4af-3b74be4abe98",
      "location": [-1.2587645, 36.80165]
    }, {
      "shop_id": "cb61ea89-304d-4845-9b53-4615ed050df3",
      "location": [-1.2598395, 36.798]
    }, {
      "shop_id": "34f5ae95-0a8a-42ed-a20d-ce0ca427f815",
      "location": [-1.25953, 36.79622]
    }, {
      "shop_id": "3f991cff-58a6-4b1c-a9a4-a2278a56d12d",
      "location": [-1.2594932, 36.796192]
    }, {
      "shop_id": "d38e1d14-5a12-4e2e-b48b-7aa4d02049e2",
      "location": [-1.2594619, 36.793015]
    }, {
      "shop_id": "bed41b14-3e84-4041-8b39-90290ac9096b",
      "location": [-1.2598464, 36.791283]
    }, {
      "shop_id": "eb6df004-c127-488d-8e6d-3d7766c954d5",
      "location": [-1.2604773, 36.78863]
    }, {
      "shop_id": "b9fc55eb-ee73-4def-a7b3-5189b4219b23",
      "location": [-1.2643579, 36.788155]
    }, {
      "shop_id": "1bcee2ae-8063-4dd9-b58e-37aca6baba76",
      "location": [-1.2644217, 36.788128]
    }, {
      "shop_id": "c422d494-1897-4b56-97a7-52c02b757117",
      "location": [-1.2644088, 36.787815]
    }, {
      "shop_id": "55ffcc4e-6262-4e4b-9347-dc6639f24337",
      "location": [-1.2655073, 36.792377]
    }, {
      "shop_id": "920344ce-605a-4db3-8929-6d938568fd94",
      "location": [-1.2655004, 36.791664]
    }, {
      "shop_id": "146d1fe8-b1d9-48b4-a4af-a432456bbdb4",
      "location": [-1.2641399, 36.792496]
    }, {
      "shop_id": "c494e25e-9c3e-4a67-b22b-356ca95b6bf7",
      "location": [-1.2616086, 36.797714]
    }, {
      "shop_id": "bd88a7c8-6ee3-49d5-a763-7989459b2231",
      "location": [-1.2641177, 36.796295]
    }, {
      "shop_id": "a6e4e9af-771f-42d6-9624-c0e9316ac628",
      "location": [-1.2670561, 36.79909]
    }, {
      "shop_id": "7addb4d8-efeb-4912-8d71-3f9d04515f9f",
      "location": [-1.2671001, 36.80122]
    }, {
      "shop_id": "e8de12cf-f29f-40a2-bfa6-43302907bbfa",
      "location": [-1.2711945, 36.806717]
    }, {
      "shop_id": "d069fc54-3688-421c-91a9-c704e563b485",
      "location": [-1.2711914, 36.806778]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Thika Town 2",
    "route_id": "0ff144fc-39f4-4901-88ca-279e277de009",
    "matrix_info": {
      "DistanceMatrixAPI requests": 753,
      "cache_hit": "71%"
    },
    "distance": "22.88km",
    "path": "l~mEa_raF`@nuBvDD`gA`f@uCrH|@SpCr@nDi@`HwD`U{k@tVeJzAb@lFvNiWnj@mHdZqLkFo@vH_JzBaHfA`IuSVOdCwEwG`D{BMTFuCbG{AK}Dy@{@_@kEL_@Is@`E~ExFpA`HaR|cAz@aCkvAu|ANgA}Bk@O@gCk@mBtF|Ah@yCaNt[oN@`BaDaBfBoAq@gA~GkJbJF`@gGXy}B",
    "shops": [{
      "shop_id": "0f52ed28-24c9-4f66-bce8-c6977ea6e718",
      "location": [-1.0599186, 37.10617]
    }, {
      "shop_id": "2e3232cd-9b69-4945-be43-44855b86d6c7",
      "location": [-1.06084024906158, 37.106143951416]
    }, {
      "shop_id": "c4bb13b9-dbf8-495c-bfc1-25f22fd29d88",
      "location": [-1.0723734, 37.099888]
    }, {
      "shop_id": "e6fd3e09-69c5-47e6-9782-b9f1f36fb9a2",
      "location": [-1.0716248, 37.098347]
    }, {
      "shop_id": "359bd036-1777-481f-a62f-d68af93c7ec1",
      "location": [-1.0719295, 37.098454]
    }, {
      "shop_id": "84dcc66a-43ef-414b-aefd-651b7a8d3e49",
      "location": [-1.0726568, 37.098186]
    }, {
      "shop_id": "8cfaa80b-8b53-4b84-8bfc-4500c7638c03",
      "location": [-1.0735416, 37.0984]
    }, {
      "shop_id": "aef59e1a-89e2-4022-a903-8c08180c2097",
      "location": [-1.0749899, 37.099316]
    }, {
      "shop_id": "bcfcdcd0-01e0-415b-88ae-c943650e5fb9",
      "location": [-1.0785238, 37.106495]
    }, {
      "shop_id": "0947c0a8-f10f-4cca-9de3-2097b82d26b9",
      "location": [-1.0823114, 37.10829]
    }, {
      "shop_id": "c86c3ac4-9695-47fc-aec5-b09efaf90510",
      "location": [-1.0827721, 37.108105]
    }, {
      "shop_id": "317067fc-1e36-4c71-848f-d4b7915997e4",
      "location": [-1.083961, 37.10559]
    }, {
      "shop_id": "373b23f7-725e-46a5-916b-9c90f522495e",
      "location": [-1.0800728, 37.098625]
    }, {
      "shop_id": "93b7e690-1e79-4a98-b31d-defdd951ff98",
      "location": [-1.0785614, 37.094276]
    }, {
      "shop_id": "68086b89-4862-4226-8e0f-8c648f3fb52d",
      "location": [-1.0763931, 37.095463]
    }, {
      "shop_id": "5ffa96d4-d6aa-44be-a99e-30ffffadd640",
      "location": [-1.076152, 37.093895]
    }, {
      "shop_id": "4281e384-b4f5-44c3-9db9-ca46aed91c3e",
      "location": [-1.0743942, 37.09328]
    }, {
      "shop_id": "7dbdaff4-5583-4c9f-95cc-8d0788125533",
      "location": [-1.0729373, 37.092915]
    }, {
      "shop_id": "1a344d4c-d2de-4c9d-87d3-b8fe5a0cb823",
      "location": [-1.0745513, 37.096233]
    }, {
      "shop_id": "d7124d0f-3f9d-4fa6-9eb8-2343bcd3143a",
      "location": [-1.0746742, 37.09631]
    }, {
      "shop_id": "b3bfbc2a-158f-4760-b902-8a512b39ad28",
      "location": [-1.0753423, 37.09739]
    }, {
      "shop_id": "fee404ed-8024-4dab-bf51-d0f010ea2c55",
      "location": [-1.0739388, 37.096584]
    }, {
      "shop_id": "c832ff15-c780-4138-b67d-d474a24cd8a0",
      "location": [-1.0733156, 37.09665]
    }, {
      "shop_id": "98cc65d6-4c74-47da-ba75-89eb4556d43f",
      "location": [-1.073427, 37.096607]
    }, {
      "shop_id": "d276a3db-792d-4325-bd41-b9df95a2c695",
      "location": [-1.0726786, 37.095314]
    }, {
      "shop_id": "f97c84b4-6d63-4c0c-b740-c876d5e73d60",
      "location": [-1.0722218, 37.09537]
    }, {
      "shop_id": "41209055-ae8b-4114-ad28-ec947035ca59",
      "location": [-1.0712732, 37.09566]
    }, {
      "shop_id": "4aa05dce-fa96-4b3a-9f3e-77e887513a16",
      "location": [-1.0709714, 37.09582]
    }, {
      "shop_id": "15e46427-395c-43b6-b277-04d0a3a915c6",
      "location": [-1.0699482, 37.095745]
    }, {
      "shop_id": "eae7bdc7-e5f9-479d-9aa0-2d6432eb1146",
      "location": [-1.0697879, 37.095795]
    }, {
      "shop_id": "76d2b8ce-8dec-4ec0-a633-8a39a3afde7a",
      "location": [-1.0695266, 37.094826]
    }, {
      "shop_id": "08fd7b95-d09b-4263-ad89-3ce4315629f4",
      "location": [-1.0706542, 37.093582]
    }, {
      "shop_id": "829287d4-7926-4aaf-b23e-6df33961f52f",
      "location": [-1.0710585, 37.09213]
    }, {
      "shop_id": "ea0b3103-0ba6-43e5-8613-00cf982672a3",
      "location": [-1.0680135, 37.081104]
    }, {
      "shop_id": "ed3c9ac3-9efc-43b2-9de4-0c9c98dcbcfe",
      "location": [-1.0683124, 37.08175]
    }, {
      "shop_id": "2716ea97-53d3-4e12-9044-458d8b0abc56",
      "location": [-1.0543336, 37.09674]
    }, {
      "shop_id": "1767b6ce-8e39-49d2-9bc8-ec3781a5c587",
      "location": [-1.0544077, 37.097103]
    }, {
      "shop_id": "4ee680e4-4e05-49cc-bee6-6d43897dc1f2",
      "location": [-1.0537775, 37.09732]
    }, {
      "shop_id": "72e415d6-a2bd-478f-94bc-1139b9f5462b",
      "location": [-1.0537041, 37.09731]
    }, {
      "shop_id": "813f9583-d23b-4a34-aaf6-dd8c2ad1e69b",
      "location": [-1.0530154, 37.097527]
    }, {
      "shop_id": "d4cc77a7-02f5-452d-a2e6-72c9d1b73cbf",
      "location": [-1.0524722, 37.0963]
    }, {
      "shop_id": "f2e0a903-599b-4112-8995-468757dbdf84",
      "location": [-1.0529377, 37.096085]
    }, {
      "shop_id": "8de5b9cc-8262-4ff7-a633-0251fe753a9b",
      "location": [-1.0521736, 37.098495]
    }, {
      "shop_id": "bad054af-d669-4a15-9cc3-ec20f2944f21",
      "location": [-1.0567582, 37.10098]
    }, {
      "shop_id": "80063168-655b-4fa8-ae75-f6c296ed579d",
      "location": [-1.0567745, 37.100494]
    }, {
      "shop_id": "2a703225-8de5-4f44-bc01-f0c35a6dd6b0",
      "location": [-1.0559629, 37.100983]
    }, {
      "shop_id": "ec332120-f813-4177-a4dd-63f7fc4c82fa",
      "location": [-1.0564843, 37.101376]
    }, {
      "shop_id": "c3f1ad62-c645-4e29-8756-a5e22560ce05",
      "location": [-1.0562336, 37.101738]
    }, {
      "shop_id": "ff8bed14-574a-4ef2-a654-996bfd99a26f",
      "location": [-1.0576729, 37.103558]
    }, {
      "shop_id": "c1087417-90a3-4ee8-8ea1-19b81127a024",
      "location": [-1.0594469, 37.103516]
    }, {
      "shop_id": "c6f6c5a2-b7d0-43bf-85a6-b5aa336fb6d4",
      "location": [-1.0596225, 37.104836]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Ole Kasasi",
    "route_id": "54f0d22d-fcbf-4f53-8470-81b7e2ba2152",
    "matrix_info": {
      "DistanceMatrixAPI requests": 1251,
      "cache_hit": "77%"
    },
    "distance": "29.85km",
    "path": "zipGwtf_Ff[sj@xo@pDFM~CEzc@`@zBZ`BQsMXuP|OPnEp@lRm@DG?jDrc@Zu@JxKDn@LB?tAjJ~MRRbVf]wD`aA_@LkFzF[ZyS}cCkCu_@wJsqADiBoEq`@OEcEoOLFy@Cph@eITsAjAOp@q@vCq@jb@oK{m@?qBvMF^IF{f@zDNG_A_F@G{AqAsOif@eFoGkHaICcAOUg[mQ}Br@gPJUj@gCaAr@[v@kFfF?RwAz@@b@hBf@OJAd@EuFsBMMCY{@i@iCoCpV|jF",
    "shops": [{
      "shop_id": "bfdafff4-cb14-44a7-900a-a5f3c5eae040",
      "location": [-1.4040202, 36.74646]
    }, {
      "shop_id": "5b251994-da0c-491f-b81b-bd1bc25c6c59",
      "location": [-1.411827, 36.745567]
    }, {
      "shop_id": "788bd5ae-09fa-4ee3-ae9f-3850d86f2447",
      "location": [-1.4118671, 36.745644]
    }, {
      "shop_id": "4129dd6b-982c-47fb-9d53-149aa53ecde5",
      "location": [-1.4126718, 36.74567]
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
      "shop_id": "cc85a6d9-9c33-44ad-b942-fb14ae451e53",
      "location": [-1.4145116, 36.74261]
    }, {
      "shop_id": "cc0cb0e7-65d4-4af6-876c-488a70cf9f96",
      "location": [-1.4146017, 36.74157]
    }, {
      "shop_id": "a85c15b5-839c-4628-8349-778448ab6e79",
      "location": [-1.4148488, 36.73846]
    }, {
      "shop_id": "9e7ce745-1261-4f4b-b833-e57aebf00cf2",
      "location": [-1.4146198, 36.738434]
    }, {
      "shop_id": "de35771a-73fb-42fd-bb7c-8a8e66dc67ae",
      "location": [-1.4145849, 36.738426]
    }, {
      "shop_id": "79433f05-aed6-4e7a-b26c-0e6d47300582",
      "location": [-1.4154416, 36.732567]
    }, {
      "shop_id": "29b6bc65-90ee-4bd0-92cf-b59f2539ae76",
      "location": [-1.4155766, 36.73284]
    }, {
      "shop_id": "8ff2edc9-bc66-4461-a56c-63cc817d1d49",
      "location": [-1.415644, 36.73079]
    }, {
      "shop_id": "9487a765-4485-411e-8fe2-fd5511cfb168",
      "location": [-1.4156679, 36.730545]
    }, {
      "shop_id": "045442de-c8ad-4219-bc2b-7a10d7079cdc",
      "location": [-1.4157375, 36.730534]
    }, {
      "shop_id": "9fea0d58-ff29-45f8-abf9-2fd94b36c3c8",
      "location": [-1.4157377, 36.730103]
    }, {
      "shop_id": "1295c638-be58-4208-880e-d50e37704b37",
      "location": [-1.4175633, 36.727703]
    }, {
      "shop_id": "0770286a-ad53-4937-ab6d-91abb93f2e9a",
      "location": [-1.4176565, 36.727604]
    }, {
      "shop_id": "8646bf83-bbc2-4397-b6fd-caf501bd4d4d",
      "location": [-1.4213566, 36.72276]
    }, {
      "shop_id": "b5778beb-f4bf-44db-b745-0466e41bc3bd",
      "location": [-1.420443, 36.712185]
    }, {
      "shop_id": "360cd5da-42c6-4ffe-9974-9d995a696011",
      "location": [-1.4202788, 36.712116]
    }, {
      "shop_id": "16f12f5c-960a-4f07-a822-8338c4524aec",
      "location": [-1.4191033, 36.71086]
    }, {
      "shop_id": "c7099f5e-0467-41f8-9afd-2c8625db9e80",
      "location": [-1.4189557, 36.710716]
    }, {
      "shop_id": "838183ad-ad34-4a36-8e36-dd4c9dc489f0",
      "location": [-1.4156257, 36.73199]
    }, {
      "shop_id": "e7e73028-1f6a-4234-a50a-08e490222618",
      "location": [-1.4149286, 36.737217]
    }, {
      "shop_id": "8fd4adc9-c624-4040-9cb3-bc8b9901b60d",
      "location": [-1.4130486, 36.750435]
    }, {
      "shop_id": "5ec608c7-3271-451f-8819-094050d8a3cf",
      "location": [-1.4130822, 36.750973]
    }, {
      "shop_id": "1c14ae13-cb8b-467b-a2a8-3429c1a20dc6",
      "location": [-1.4120356, 36.756336]
    }, {
      "shop_id": "b58a2a80-671f-487e-9f0e-e3d2cdbf0829",
      "location": [-1.4119607, 36.756374]
    }, {
      "shop_id": "6fae9c24-6bb5-4be7-b8d9-6fddd571c6ef",
      "location": [-1.4109846, 36.759014]
    }, {
      "shop_id": "5ebda22b-6fec-42d7-9c9c-4cb54e8c7cdc",
      "location": [-1.4110457, 36.758965]
    }, {
      "shop_id": "bca05a15-172c-4557-b592-c146400843ea",
      "location": [-1.4107574, 36.758987]
    }, {
      "shop_id": "b6a43841-67f5-48cb-90be-f820cdde364e",
      "location": [-1.4174097, 36.760624]
    }, {
      "shop_id": "8596fd9d-8e73-4a36-8b61-4cb3f4ec40ac",
      "location": [-1.4175204, 36.76104]
    }, {
      "shop_id": "d46b2493-efaa-43f5-b645-ac533c74e05b",
      "location": [-1.4178989, 36.761124]
    }, {
      "shop_id": "47350468-8be9-4199-aa09-45385b51f8f4",
      "location": [-1.4181522, 36.761368]
    }, {
      "shop_id": "529bac4a-0196-47a4-8627-552dbfb36423",
      "location": [-1.418909, 36.761623]
    }, {
      "shop_id": "ae11e5b1-21a6-49a7-8ba7-3c9326d35398",
      "location": [-1.4245743, 36.76362]
    }, {
      "shop_id": "c3856ccf-194b-44c0-a15a-3b6402a359eb",
      "location": [-1.4170665, 36.763622]
    }, {
      "shop_id": "f38a20d4-83fa-4b88-a076-4577a547adcd",
      "location": [-1.416496, 36.76126]
    }, {
      "shop_id": "6dd8090f-2c6a-4d38-a492-a2a98d77f8fc",
      "location": [-1.416535, 36.7611]
    }, {
      "shop_id": "26e2c66f-51bd-4ce3-a07d-8eb27c314ed8",
      "location": [-1.4164877, 36.761063]
    }, {
      "shop_id": "6a3001dd-0722-4731-878d-fa556bff8f73",
      "location": [-1.4101113, 36.760117]
    }, {
      "shop_id": "672a001e-e54f-422c-ab62-4e00a7cdf6d5",
      "location": [-1.4101903, 36.760162]
    }, {
      "shop_id": "4553eac7-e14e-4e0d-b21c-bf578fba89a1",
      "location": [-1.4098741, 36.76128]
    }, {
      "shop_id": "2230700d-0c68-4dcc-a4ca-ba350f0eac1d",
      "location": [-1.409884, 36.76132]
    }, {
      "shop_id": "fe89c478-e8bb-4491-81cc-e33722e90b1e",
      "location": [-1.4094193, 36.76173]
    }, {
      "shop_id": "21350256-b16c-40cf-99ac-6f9fc3ad083d",
      "location": [-1.4067613, 36.768017]
    }, {
      "shop_id": "43866b9d-4439-4adc-90f4-125a90d8ff82",
      "location": [-1.4056058, 36.769382]
    }, {
      "shop_id": "509b9caf-e318-4b24-8eb1-c64e19b45a98",
      "location": [-1.4041079, 36.770992]
    }, {
      "shop_id": "3171507e-68b0-4db2-82cc-f5e3c0d0fdf3",
      "location": [-1.4040931, 36.771328]
    }, {
      "shop_id": "8ebc0e7a-75aa-48d3-a568-8e2148be1f96",
      "location": [-1.4040071, 36.77144]
    }, {
      "shop_id": "3a383c79-4212-46ec-b108-67ddf866bfb4",
      "location": [-1.3994927, 36.774387]
    }, {
      "shop_id": "2b5609fe-f4d7-4bdb-b6ad-5c8de3d3b5ee",
      "location": [-1.3988574, 36.77413]
    }, {
      "shop_id": "49cd225b-9d7a-41a7-9936-a446c43b2f00",
      "location": [-1.3960983, 36.77407]
    }, {
      "shop_id": "9c02bc7c-8ebd-4f0d-bf9f-875b24945534",
      "location": [-1.3959903, 36.773853]
    }, {
      "shop_id": "3d4af0f3-4481-4e50-adfd-3fa7c5740c24",
      "location": [-1.3953123, 36.77418]
    }, {
      "shop_id": "fbd9ee00-c891-44f2-b392-8d811a741350",
      "location": [-1.395571, 36.774323]
    }, {
      "shop_id": "cc05630c-9284-4498-801d-c59c2aca768a",
      "location": [-1.395845, 36.775497]
    }, {
      "shop_id": "ade3e546-077b-4982-8734-cabd719a8f53",
      "location": [-1.3970065, 36.7755]
    }, {
      "shop_id": "cc8beb75-4886-4788-a5a1-f6247efb13de",
      "location": [-1.39711, 36.77594]
    }, {
      "shop_id": "3b806d99-b0c5-4f71-8f71-5ebf74ea1006",
      "location": [-1.3974068, 36.77593]
    }, {
      "shop_id": "e59bd01f-b6ce-47ed-9a81-70759d0117dd",
      "location": [-1.3975947, 36.7754]
    }, {
      "shop_id": "7aa26a26-5dee-4bfd-9945-1cabb7dc0860",
      "location": [-1.3977917, 36.775482]
    }, {
      "shop_id": "585e69d3-1515-46b1-82e1-d4a4fedbccef",
      "location": [-1.3978524, 36.77549]
    }, {
      "shop_id": "2e926be9-4823-4002-83b2-2fe0a0178883",
      "location": [-1.3980386, 36.77552]
    }, {
      "shop_id": "97df9fc6-d6da-47ca-befe-499b43ec521e",
      "location": [-1.3968105, 36.776096]
    }, {
      "shop_id": "b5c36a2a-5fc9-416b-90c2-eca06b23db03",
      "location": [-1.3967361, 36.776173]
    }, {
      "shop_id": "a6c7d40d-e72f-4bef-b28f-90a192429b95",
      "location": [-1.3967226, 36.7763]
    }, {
      "shop_id": "d5859721-7a9e-4dd3-af2f-68eb114efe5e",
      "location": [-1.39642, 36.776505]
    }, {
      "shop_id": "37abe4ab-8da3-4c9b-ac58-a6dbe16d6694",
      "location": [-1.3957283, 36.77723]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Zimmerman",
    "route_id": "00d7a3ea-7667-4f2c-a51d-e011c6f1bcc5",
    "matrix_info": {
      "DistanceMatrixAPI requests": 269,
      "cache_hit": "85%"
    },
    "distance": "24.76km",
    "path": "|qoF_r``FwpBqgC^u@|ASwGQu@eAc@Rk@EKnBmK]AeBc@eEcEvDcAiF_@uFgArBgAzC}EeEmJmNCODC~Lda@}E_AgKBRjE?y@zIhEjAZRuAu@m@U_AisBmUoB{h@~hCi@fFtWaAfObFbG`BRjA\\zEv@n@_CvAPbD^rGjC`dBjoC",
    "shops": [{
      "shop_id": "7fe5e2c6-292b-4f38-9119-5970abe4466b",
      "location": [-1.2136309, 36.894012]
    }, {
      "shop_id": "e5308801-ce5b-4864-82a9-934a970dd5ec",
      "location": [-1.2137938, 36.894276]
    }, {
      "shop_id": "d942f4f6-1891-4edb-9741-92d1d359fa58",
      "location": [-1.214261, 36.894382]
    }, {
      "shop_id": "6442f7d6-0fd2-45e3-a26a-84c15a4fe285",
      "location": [-1.2128565, 36.894474]
    }, {
      "shop_id": "f747c28c-625e-422e-8ebe-4b125ebbd968",
      "location": [-1.2125934, 36.89482]
    }, {
      "shop_id": "27f8fba0-704a-4f7c-ab4c-b33314111619",
      "location": [-1.2124088, 36.894722]
    }, {
      "shop_id": "efb97fae-787b-41a1-aa38-8be731df45c2",
      "location": [-1.2121909, 36.89475]
    }, {
      "shop_id": "6b7ca154-e029-42c2-9d69-be9f06625a90",
      "location": [-1.212133, 36.89419]
    }, {
      "shop_id": "a640e636-a09f-4470-861e-c521a7825cfd",
      "location": [-1.2101374, 36.894337]
    }, {
      "shop_id": "1a746a15-c5ec-485c-8be9-de3f3d3bbbfe",
      "location": [-1.2101319, 36.894848]
    }, {
      "shop_id": "2d5c4321-af9d-4bae-b551-6e03bf3657ae",
      "location": [-1.2099535, 36.89584]
    }, {
      "shop_id": "54833412-8f2d-4dbb-8042-3a70751e071a",
      "location": [-1.2089654, 36.894917]
    }, {
      "shop_id": "04b6d6b6-57b5-4fc9-b3eb-cef32cbd8ea3",
      "location": [-1.208627, 36.896088]
    }, {
      "shop_id": "9ee101a0-7a84-4cfe-91c2-4a1d3dcf69d5",
      "location": [-1.2084742, 36.897316]
    }, {
      "shop_id": "d504acc9-0738-4da1-bba2-d27b41cd3cb0",
      "location": [-1.2081131, 36.89674]
    }, {
      "shop_id": "4eff7fa6-aa5a-4ce4-967f-4989d9880fa9",
      "location": [-1.20775, 36.895958]
    }, {
      "shop_id": "da652662-8bb7-4962-bda5-39f7b3a5e7bc",
      "location": [-1.206637, 36.89695]
    }, {
      "shop_id": "9d460355-9248-4753-99c2-920d091efcd3",
      "location": [-1.2048099, 36.899418]
    }, {
      "shop_id": "f43ff01c-b940-4aef-b844-3c621ca2303d",
      "location": [-1.2047869, 36.899498]
    }, {
      "shop_id": "d792bd9f-c7fb-45c7-8f7b-2532feff3fef",
      "location": [-1.2048161, 36.899525]
    }, {
      "shop_id": "903e636a-443e-42d9-b09d-4a79e3c29704",
      "location": [-1.2070593, 36.89405]
    }, {
      "shop_id": "6a8827b0-457a-4cad-bbd4-8259cb16db8f",
      "location": [-1.2059508562088, 36.8943748474121]
    }, {
      "shop_id": "0c39e7cc-542c-49b5-ba21-b5e56f970470",
      "location": [-1.203993, 36.894352]
    }, {
      "shop_id": "c0dec705-c746-4dd3-a53f-6566a283af2a",
      "location": [-1.2040913, 36.893333]
    }, {
      "shop_id": "35455455-6da7-4769-84c1-b023835b857b",
      "location": [-1.2040877, 36.893616]
    }, {
      "shop_id": "5df7261b-3761-46f8-91c7-3480419d0d85",
      "location": [-1.2058347, 36.892605]
    }, {
      "shop_id": "2e9ad0ff-3114-4c21-90c1-809885ccd2a1",
      "location": [-1.2062055, 36.892467]
    }, {
      "shop_id": "80055f43-12d7-47a5-9e7e-e1e5ce620e4d",
      "location": [-1.2063136, 36.892902]
    }, {
      "shop_id": "79750d79-e4f1-4842-af74-03858948c640",
      "location": [-1.2060422, 36.893127]
    }, {
      "shop_id": "e5d00bef-4997-485d-bc5a-f44efb92fa3e",
      "location": [-1.2059346, 36.893448]
    }, {
      "shop_id": "acf7225d-15b6-4385-8429-aea2df0637f9",
      "location": [-1.1873211, 36.897038]
    }, {
      "shop_id": "c691fa24-b45d-4326-b00c-a3651f479aa8",
      "location": [-1.18676269054413, 36.903736114502]
    }, {
      "shop_id": "6801b6f7-f05a-4e8b-a4fc-d146a3b7a475",
      "location": [-1.2088386, 36.903954]
    }, {
      "shop_id": "b1c2cbb9-eaf0-4b89-85cb-47e76718ae74",
      "location": [-1.21, 36.9]
    }, {
      "shop_id": "e9e84006-afa8-4b3a-9c78-1b91d526a5ca",
      "location": [-1.2096721, 36.8974]
    }, {
      "shop_id": "098485c3-2ee3-44d3-885e-c09b809126ed",
      "location": [-1.2108107, 36.896095]
    }, {
      "shop_id": "22b59f83-4f17-42bc-8360-8375397e8102",
      "location": [-1.2113014, 36.896]
    }, {
      "shop_id": "a5e8cc20-5cde-4bd9-a247-e89ff11e6b01",
      "location": [-1.2116774, 36.895855]
    }, {
      "shop_id": "6382675e-74de-425e-be88-e363144eb842",
      "location": [-1.2127807, 36.895565]
    }, {
      "shop_id": "e9989835-6e3e-4b20-b9d8-f57ef6da4be9",
      "location": [-1.2130159, 36.896214]
    }, {
      "shop_id": "bf581b3e-a0b6-43ba-a747-7b0c2534b5d3",
      "location": [-1.2134587, 36.89612]
    }, {
      "shop_id": "f327ff87-43ba-4204-80ff-f79a870c49bf",
      "location": [-1.2142752, 36.89596]
    }, {
      "shop_id": "36be3f6f-f905-4197-b834-88ee297e934b",
      "location": [-1.2156608, 36.895264]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Santon",
    "route_id": "8a4d5834-2671-4339-a1b6-3f0466e445fd",
    "matrix_info": {
      "DistanceMatrixAPI requests": 1126,
      "cache_hit": "71%"
    },
    "distance": "25.2km",
    "path": "|qoF_r``F_n@mpGgOkJbJuR~AdA|CbBJIq@Pk@~@nC[|@n@|EjCn@fA|@p@~McGKT~BcBzBgQ_HzIYa@[CQSgA]GAcBx@wA_DaA_@sA[M_@mByBwCEgFsEwEvAd@hCiBj@jA`AiI~B_EOxA{HiEag@dh@vOzEvCx@kGhFzAdM{VgIlZkAbCtNAaEnQrBWTAf`@`SBBmBbMrCr@cK]mGmEuEf@iB}EuAm@_@I[DaAlCKnAfC|bH",
    "shops": [{
      "shop_id": "f7c60fd2-a508-4d80-89ba-2564ea0efcbc",
      "location": [-1.2243077, 36.915905]
    }, {
      "shop_id": "f13729d0-aeb0-443c-bc2c-172342cbce42",
      "location": [-1.2217113, 36.91773]
    }, {
      "shop_id": "57680869-bc84-48dc-a422-5078d2bf1602",
      "location": [-1.22349405288696, 36.9208755493164]
    }, {
      "shop_id": "00a0a95b-b1f3-4fce-adb6-18837539a01e",
      "location": [-1.2239684, 36.92053]
    }, {
      "shop_id": "b3989bcd-6cff-4da7-bd02-9dd052ccd2db",
      "location": [-1.2247592, 36.92003]
    }, {
      "shop_id": "4f8411c4-548f-4e6c-847f-ae9befdc82b6",
      "location": [-1.2248245, 36.92008]
    }, {
      "shop_id": "cf8fa7f2-4e57-44c5-b388-f4b1732fee9e",
      "location": [-1.2245677, 36.91999]
    }, {
      "shop_id": "7450925f-263b-4ebe-ba7d-1739ea659060",
      "location": [-1.224349, 36.919674]
    }, {
      "shop_id": "0af56236-7680-4fdf-95fc-1a38c1de66b4",
      "location": [-1.2250682, 36.91981]
    }, {
      "shop_id": "657e74ee-84cf-4378-b2f3-ae028b5cf5aa",
      "location": [-1.2253844, 36.919567]
    }, {
      "shop_id": "daedb220-2eac-4b58-bd51-044ff4b50734",
      "location": [-1.2264878, 36.91887]
    }, {
      "shop_id": "16db478a-6a06-4372-aa16-a7139aa719d0",
      "location": [-1.2267344, 36.91851]
    }, {
      "shop_id": "f048ba31-3776-4307-8798-b2d9bfd27fd3",
      "location": [-1.2270356, 36.91826]
    }, {
      "shop_id": "1966b381-cdb8-44e5-aabe-42d1f662ca1d",
      "location": [-1.2294363, 36.919563]
    }, {
      "shop_id": "b2e14e98-1d1f-43cc-8304-877bddc60920",
      "location": [-1.2293849, 36.919453]
    }, {
      "shop_id": "89a19aa3-01a0-48ae-a483-0916c559b6dd",
      "location": [-1.2300212, 36.91995]
    }, {
      "shop_id": "433aeece-791b-410f-bafe-388ef84a777f",
      "location": [-1.23063552379608, 36.9228744506836]
    }, {
      "shop_id": "7b3689ae-fd7f-49df-8353-4a9266f113d7",
      "location": [-1.229202, 36.92113]
    }, {
      "shop_id": "d7301fa6-81ff-46c4-a13c-6da1c0a71a32",
      "location": [-1.2290651, 36.9213]
    }, {
      "shop_id": "76270d3d-2247-49f8-820d-398f0e8e0f27",
      "location": [-1.2289256, 36.921318]
    }, {
      "shop_id": "153c7305-b71e-4625-bc23-0cc1400dae36",
      "location": [-1.2288423, 36.92142]
    }, {
      "shop_id": "5fe92431-367f-4149-876d-47f9e0f89a4a",
      "location": [-1.228479, 36.921574]
    }, {
      "shop_id": "0ae2fe1e-725b-4124-8f54-8979166e72aa",
      "location": [-1.228443, 36.92158]
    }, {
      "shop_id": "0a7e8127-5093-48f8-aeb3-cd425477bc2d",
      "location": [-1.2279364, 36.92129]
    }, {
      "shop_id": "c753f463-fb55-4303-b884-3a8c665d773f",
      "location": [-1.2275021, 36.922085]
    }, {
      "shop_id": "c84a8a3b-4ef1-494c-8337-9851e9857f86",
      "location": [-1.2271745, 36.92225]
    }, {
      "shop_id": "3a67ac05-859c-4ebe-b64e-e3acad8fecf8",
      "location": [-1.2267523, 36.922386]
    }, {
      "shop_id": "2925e585-e7d7-4510-99c6-d022e3c7c0a8",
      "location": [-1.2266809, 36.922546]
    }, {
      "shop_id": "3c6e4c10-7311-4abe-b896-fa07cfb89cd8",
      "location": [-1.2261318, 36.923164]
    }, {
      "shop_id": "61ac2215-27fc-43a3-bdda-c317afb77f40",
      "location": [-1.2253706, 36.92319]
    }, {
      "shop_id": "a252af3c-ce10-404f-bf94-a5912c086e96",
      "location": [-1.2242086, 36.92425]
    }, {
      "shop_id": "3da637bb-f7d9-41bf-8ee6-6ce33effc107",
      "location": [-1.2231346, 36.92381]
    }, {
      "shop_id": "4e638d23-6c6b-4c88-af21-4401fc0eb13b",
      "location": [-1.2233177, 36.923122]
    }, {
      "shop_id": "24afc7a2-284f-43a3-9657-8fbd008eaf7f",
      "location": [-1.22279, 36.922897]
    }, {
      "shop_id": "db4bba58-1a31-46fa-aebb-4c01802b2e7a",
      "location": [-1.2231677, 36.922573]
    }, {
      "shop_id": "8bf03e78-7a0f-46ed-a941-2fb7646b6f64",
      "location": [-1.2215222, 36.92193]
    }, {
      "shop_id": "4b32b485-1a8b-4b9a-aca3-3ddc2a110a78",
      "location": [-1.2205595, 36.922012]
    }, {
      "shop_id": "cb24d5af-dd2e-45b4-bf31-bcc9b95223c2",
      "location": [-1.2210128, 36.92359]
    }, {
      "shop_id": "23f639d8-a2be-4928-8600-508f47fb793c",
      "location": [-1.22, 36.93]
    }, {
      "shop_id": "2450ecaa-bfcd-4f5c-8ae7-3bf6a91bc926",
      "location": [-1.2265947, 36.927322]
    }, {
      "shop_id": "75098e4e-79c6-4e85-833e-379cf6d6e153",
      "location": [-1.2276907, 36.926556]
    }, {
      "shop_id": "672a6eee-cd4a-404c-9ef9-550facf4f660",
      "location": [-1.2279754, 36.9279]
    }, {
      "shop_id": "27a91412-0be5-48cc-a67f-3ea6dbd02c07",
      "location": [-1.2291474, 36.92744]
    }, {
      "shop_id": "3f8a63fc-995b-477b-8b65-1b53d9d52578",
      "location": [-1.23141634464264, 36.9312591552734]
    }, {
      "shop_id": "51863837-16ae-4415-a408-c85665f6d01f",
      "location": [-1.2297777, 36.926872]
    }, {
      "shop_id": "6808186f-71f1-41f1-bd31-101a9e3ad558",
      "location": [-1.2293983, 36.926212]
    }, {
      "shop_id": "c3ecaed8-689e-4994-b632-c0b64387cbe3",
      "location": [-1.231908, 36.926216]
    }, {
      "shop_id": "345962ad-dab7-436c-bb5c-eef738b44f6c",
      "location": [-1.230936, 36.92326]
    }, {
      "shop_id": "2e3fbc51-b785-4027-a6ac-41fbd9c5d8d6",
      "location": [-1.2315212, 36.92338]
    }, {
      "shop_id": "3ae0db16-47e1-4f2b-bf5a-ed87e49a4bac",
      "location": [-1.2316328, 36.923393]
    }, {
      "shop_id": "70c72cd7-335a-4a6e-856b-2207f0137f11",
      "location": [-1.2369512, 36.920177]
    }, {
      "shop_id": "724a51b2-8766-4b27-b32e-75cd139e8798",
      "location": [-1.2369728, 36.92016]
    }, {
      "shop_id": "a34f238d-b7da-4271-b612-f99f1eba7ce9",
      "location": [-1.2364236, 36.917904]
    }, {
      "shop_id": "188e3e67-4c37-4766-a4fa-aa31a88ebf3d",
      "location": [-1.2371557, 36.91764]
    }, {
      "shop_id": "55c18a12-799e-41d7-a453-3d1cdf1afde0",
      "location": [-1.2352211, 36.917793]
    }, {
      "shop_id": "a3ee881f-6de4-464a-8914-2f5079464eb1",
      "location": [-1.2338734, 36.91882]
    }, {
      "shop_id": "7c9d1ada-bef9-4284-b59d-f3158208bd4e",
      "location": [-1.23279893398285, 36.9186248779297]
    }, {
      "shop_id": "24e499e9-8eb7-4472-a24b-1ae2d5b142ed",
      "location": [-1.232269, 36.91973]
    }, {
      "shop_id": "7dc22395-4a95-43a8-886c-cf0c8ce9dc20",
      "location": [-1.2318434, 36.91996]
    }, {
      "shop_id": "952b474d-f848-4ea8-a45c-96081036bc23",
      "location": [-1.2316788, 36.920006]
    }, {
      "shop_id": "7d422908-7a42-4528-b884-16d41361a8b0",
      "location": [-1.2315408, 36.91998]
    }, {
      "shop_id": "c61d1c37-39fd-4d2c-9d59-92a28f6d5379",
      "location": [-1.2312139, 36.919266]
    }, {
      "shop_id": "714611a5-dff6-44dc-a5fd-6bd9b6d552b6",
      "location": [-1.231147, 36.91887]
    }],
    "flagged_shops": []
  }, {
    "status": "success",
    "route_name": "Uthiru",
    "route_id": "7ea36fdb-88fd-48fd-bb20-2ae3ca2cba18",
    "matrix_info": {
      "DistanceMatrixAPI requests": 798,
      "cache_hit": "76%"
    },
    "distance": "43.05km",
    "path": "`z|Fedx_FarFlwUm@`Id@oDmLQQh@jHjMgQ|h@KEdUG^Vh@TBRZCPDHJdBhAT]Pt@r@OdBd@@Al@SfDeAjIuD?GXa@Hg@R_@nAwGLoATuA~Nvd@ae@aF{d@l@yAUABABIGa@NSPCb@hBxCnAb@iNo`@Kq@MAl@m_@EyJAiAQ?F_D@_@JQJcFBsBH{Da@sHn@e@g@}AlyGwqT",
    "shops": [{
      "shop_id": "80ef11ba-9790-413c-8980-b590cf198d0a",
      "location": [-1.2607952, 36.712437]
    }, {
      "shop_id": "4ad66fc8-eb1e-4e21-83d5-e3e823982d32",
      "location": [-1.2605692, 36.71083]
    }, {
      "shop_id": "5ce531c6-e31b-4eed-945d-cf8df17da2e6",
      "location": [-1.260755, 36.71171]
    }, {
      "shop_id": "262a3e80-a72e-4fa4-aa2c-5244e940ce1a",
      "location": [-1.2586094, 36.7118]
    }, {
      "shop_id": "4a44c54d-5d9b-4a61-bd1a-37a3e14d6f66",
      "location": [-1.2585244, 36.711586]
    }, {
      "shop_id": "8d67f9f1-ab4f-4cfa-a402-9a881ff28284",
      "location": [-1.2600157, 36.709286]
    }, {
      "shop_id": "31d42a1f-0a29-47b8-a518-499db923871f",
      "location": [-1.2570966, 36.702576]
    }, {
      "shop_id": "5163a3e0-0de1-4fca-aeb0-364cdb4c4b29",
      "location": [-1.257042, 36.702606]
    }, {
      "shop_id": "f42b49e6-e7d0-42bf-bda2-6f35d231ad99",
      "location": [-1.260587, 36.702652]
    }, {
      "shop_id": "fcee8185-b545-43e1-b463-f841bd4f41eb",
      "location": [-1.2607532, 36.702534]
    }, {
      "shop_id": "fde3f744-4a9f-41f9-9dea-7f25f0733696",
      "location": [-1.26096284389496, 36.7024192810059]
    }, {
      "shop_id": "00df4835-6ec6-49d8-9194-acaeb4c6bd2e",
      "location": [-1.2609754, 36.702316]
    }, {
      "shop_id": "e1cb4ac3-6efc-4c56-9e57-721bff56943c",
      "location": [-1.2611187, 36.702343]
    }, {
      "shop_id": "c54c6133-f02a-464c-b17b-3bb4b47a099b",
      "location": [-1.2612145, 36.70231]
    }, {
      "shop_id": "c6df6ba5-72d4-43e2-b29a-67b80e03006f",
      "location": [-1.2612613, 36.70225]
    }, {
      "shop_id": "80117acb-b1a5-4997-94cb-556f52e7d077",
      "location": [-1.2617652, 36.701885]
    }, {
      "shop_id": "51ca3dc4-78f3-49d0-beb6-365341c4fad5",
      "location": [-1.2618796, 36.70203]
    }, {
      "shop_id": "e8b3617b-de6b-4497-b7e0-a381d206e3c1",
      "location": [-1.2619666, 36.701756]
    }, {
      "shop_id": "892c47ee-b598-45a9-bd5b-052d97dc7e72",
      "location": [-1.262234, 36.70184]
    }, {
      "shop_id": "e3183951-4756-46d9-9aa6-01fca1fc4780",
      "location": [-1.2627405, 36.701653]
    }, {
      "shop_id": "6e3d4409-c64d-4391-a8aa-fb03600d6258",
      "location": [-1.2627543, 36.701656]
    }, {
      "shop_id": "4c2499c7-65bd-4abc-a63e-778907039267",
      "location": [-1.2629791, 36.70176]
    }, {
      "shop_id": "8268ebb2-1b74-40d4-a29a-69f1820364b5",
      "location": [-1.2638175, 36.702114]
    }, {
      "shop_id": "47711ac7-f25b-4811-92a1-87572e5f05f3",
      "location": [-1.2654849, 36.70302]
    }, {
      "shop_id": "38b0da6f-ee87-4cbb-b815-e94796c2cb65",
      "location": [-1.26548492908478, 36.7030601501465]
    }, {
      "shop_id": "0d46d93d-6745-4bc9-9285-3a6caa767728",
      "location": [-1.2656115, 36.70323]
    }, {
      "shop_id": "019cda30-f25a-43ac-a774-938104f0778c",
      "location": [-1.265657, 36.703426]
    }, {
      "shop_id": "3f419351-9631-4c37-aa03-e8db9d9e8f56",
      "location": [-1.2657576, 36.703594]
    }, {
      "shop_id": "638b9af7-6d7c-46e1-9f96-c517c36bd89d",
      "location": [-1.2661597, 36.704994]
    }, {
      "shop_id": "b546f651-2f6f-4243-aa31-794131ce7305",
      "location": [-1.2662349, 36.70539]
    }, {
      "shop_id": "57ef9087-4c4b-4c5c-b9cf-9797291f09b1",
      "location": [-1.2663362, 36.705822]
    }, {
      "shop_id": "c8232a48-f919-40d3-8e8e-45a400ad1099",
      "location": [-1.2689003, 36.699776]
    }, {
      "shop_id": "571862e3-0ddc-44c8-9179-97d7860c4481",
      "location": [-1.26281130313873, 36.7009086608887]
    }, {
      "shop_id": "1a5bab99-7cd9-4d74-9379-0537a3848b88",
      "location": [-1.2567503, 36.700676]
    }, {
      "shop_id": "7dcba31f-4c94-4fd4-8272-69861419d0d2",
      "location": [-1.25630187988281, 36.7007904052734]
    }, {
      "shop_id": "c9c7072c-125f-44ce-8b02-bb5415166946",
      "location": [-1.25629329681396, 36.7007713317871]
    }, {
      "shop_id": "9aed1d7c-f59d-4ef8-9994-2241e7d84e62",
      "location": [-1.2562845, 36.700745]
    }, {
      "shop_id": "38c24e4e-0bc3-455b-97be-e5cc86b786bc",
      "location": [-1.2562335, 36.700787]
    }, {
      "shop_id": "0d7d425f-ea87-4798-96fb-0ae777fb6667",
      "location": [-1.2560596, 36.70071]
    }, {
      "shop_id": "122ad006-15de-47af-ba11-b23996df5b28",
      "location": [-1.2559566, 36.700615]
    }, {
      "shop_id": "935eb213-a096-4d0c-a28a-c612a45a713b",
      "location": [-1.2559361, 36.700436]
    }, {
      "shop_id": "ae896a7c-0b79-4e86-852f-d78c56c28b04",
      "location": [-1.2564704, 36.69967]
    }, {
      "shop_id": "afdc486c-22d0-49ea-a32a-b31f0a0f5246",
      "location": [-1.2568702, 36.699486]
    }, {
      "shop_id": "595b2988-98ee-4288-885f-503963d80d89",
      "location": [-1.2544248, 36.704853]
    }, {
      "shop_id": "118f3721-6ef7-442d-8459-eae1637d65b2",
      "location": [-1.2543567, 36.705097]
    }, {
      "shop_id": "328deadc-380b-4de9-934a-4a83b89153d0",
      "location": [-1.2542945, 36.705105]
    }, {
      "shop_id": "7ee426ff-09d6-4a8c-8fd1-2fae6ad5c7ec",
      "location": [-1.2545232, 36.710304]
    }, {
      "shop_id": "6e7a99f5-fe65-458b-b9e6-2dc789be30f7",
      "location": [-1.254494, 36.71219]
    }, {
      "shop_id": "819166de-46c8-41b6-9422-f8a7adab8c46",
      "location": [-1.2544771, 36.712555]
    }, {
      "shop_id": "1d061e9a-15dc-4267-a4bf-149aa45c146d",
      "location": [-1.2543904, 36.712563]
    }, {
      "shop_id": "2f0c49e9-5a61-4113-b36b-a49988608fa9",
      "location": [-1.2544326, 36.713356]
    }, {
      "shop_id": "60a28b8b-9622-4904-88ed-0677548a58aa",
      "location": [-1.2544391, 36.713524]
    }, {
      "shop_id": "5b8c7827-5ae5-4e47-b183-88bf87251b6f",
      "location": [-1.254496, 36.713608]
    }, {
      "shop_id": "0fa65e6b-30fe-4184-8def-7b92f6dae7f3",
      "location": [-1.2545636, 36.714745]
    }, {
      "shop_id": "cffca8c4-ef67-426d-80ba-8cc6d3fbf62f",
      "location": [-1.2545816, 36.71533]
    }, {
      "shop_id": "6f87a6e3-beae-4ad6-976b-bfb0a106a35c",
      "location": [-1.2546331, 36.716267]
    }, {
      "shop_id": "5e755884-ac60-4158-9659-613bc02489b0",
      "location": [-1.2544616, 36.717808]
    }, {
      "shop_id": "b51a0dc4-669d-49a5-b647-26155324357f",
      "location": [-1.2546986, 36.718]
    }, {
      "shop_id": "d9619ef7-dc1e-4791-8713-3c5a60716861",
      "location": [-1.2544979, 36.71847]
    }],
    "flagged_shops": []
  }]
};
exports.dataset = dataset;
},{}],"leaf.js":[function(require,module,exports) {
"use strict";

var _data = require("./data2");

var routes = _data.dataset.routes;
var accessToken = 'pk.eyJ1IjoiZXZhbnNtd2VuZHdhIiwiYSI6ImNqMTY3enNlOTAwM28yd25udTZxaWc4dWkifQ.JV8AbBu8MF6o2QC5gctywA';
var map = L.map('map').setView([-1.316903, 36.860536], 14);
L.AwesomeMarkers.Icon.prototype.options.prefix = 'ion';
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: '&copy; <a href="https://twiga.ke">Twiga Foods</a> | Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: accessToken
}).addTo(map);
var samplesEl = document.querySelector("#samples");

var resetActive = function resetActive() {
  var elems = document.querySelectorAll("li");
  elems.forEach(function (elem) {
    return elem.classList.remove("active");
  });
  var debugElem = document.querySelector("#debug");

  if (debugElem) {
    debugElem.remove();
  }
};

routes.forEach(function (_ref, index) {
  var route_name = _ref.route_name;
  var li = document.createElement("li");
  li.innerText = route_name;

  li.onclick = function () {
    resetActive();
    li.classList.add("active");
    calculateAndDisplayRoute(routes[index].shops);
  };

  samplesEl.appendChild(li);
}); // first item setup

var firstElem = document.querySelector("li");
firstElem.classList.add("active");

var chunkArray = function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    var myChunk = myArray.slice(index, index + chunk_size); // Do something if you want with the group

    tempArray.push(myChunk);
  }

  return tempArray;
};

var routeControl = L.Routing.control({
  waypoints: [],
  router: L.Routing.mapbox(accessToken),
  fitSelectedRoutes: true
});
routeControl.addTo(map);

var calculateAndDisplayRoute = function calculateAndDisplayRoute(stops) {
  var shops = stops.slice(0, 25);
  var waypoints = shops.map(function (_ref2) {
    var location = _ref2.location;
    return L.latLng(location[0], location[1]);
  });
  routeControl.setWaypoints(waypoints);
};

calculateAndDisplayRoute(routes[0].shops);
},{"./data2":"data2.js"}],"../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51047" + '/');

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
},{}]},{},["../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","leaf.js"], null)
//# sourceMappingURL=/images/leaf.dc0e3b32.js.map