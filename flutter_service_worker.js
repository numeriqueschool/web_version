'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/images/admin.png": "f1a62d4b62dde2221137873a2bcb88b3",
"assets/assets/images/bgblue.jpg": "d9c9fc5e6fba937e87182417fbaac09e",
"assets/assets/images/education.gif": "5c2447d1c23318f15352c24791615204",
"assets/assets/images/ecole_ivoirienne-1.jpg": "37fa6ca88fb56067228916c1b3a4e31c",
"assets/assets/images/Fichier%25202@4x.png": "b967027b0eda4189d2ed3996883690b4",
"assets/assets/images/school.png": "d7db7ff85c4df23d67917d7a988fdab1",
"assets/assets/lotties/parent_phone.json": "3adc0cd2e090955715879f1736b2273a",
"assets/assets/lotties/communication.json": "d921dc958397e88f56679ebbcf74d621",
"assets/assets/lotties/108346-admin.json": "8c5f4a558796fb507f367dfbd4e0ac1a",
"assets/assets/lotties/teacher.json": "e14c3e8a9aecb566a169916287f48eda",
"assets/assets/lotties/6534-education.json": "82d162ecf0c06d14ff6ec7e30ada6f5f",
"assets/assets/lotties/professeurLogin.json": "7208aca042a04d05b2f2f828cda9dc41",
"assets/assets/lotties/choice.json": "f07aa223d743017ebda812fd4b7db53c",
"assets/assets/lotties/kids.json": "f80474590d512371b586a244a200ac7a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/iconly/fonts/IconlyBold.ttf": "128714c5bf5b14842f735ecf709ca0d1",
"assets/packages/iconly/fonts/IconlyLight.ttf": "5f376412227e6f8450fe79aec1c2a800",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "6fbd555150d4f77e91c345e125c4ecb6",
"assets/shaders/ink_sparkle.frag": "328a4ccaeb2e32491f4bcc19c16de09c",
"assets/NOTICES": "7ecaff65daaea70bba756f101b36e9b1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "c3302898bcdd35bf1b1c1485fba547ab",
"assets/FontManifest.json": "f11e57180d1b2adec3eda06d77d3f336",
"manifest.json": "33a1a5ec092b191f64240573e9faac90",
"main.dart.js": "747db35e7c188e92bfb6059e71e9089f",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/index": "19931d42ef6579f2474c1eca4d0d6cd0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e5e775c212b68ee92c193c54efb9ede",
".git/logs/refs/heads/master": "7e5e775c212b68ee92c193c54efb9ede",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/23/8487e434e32b6b7411788363479a402fe94daa": "8825779223b339df83facc7a887545b7",
".git/objects/23/9972f858512649ae2f121f8d60e0aff4796109": "de887cc99fe0044153bd71ed392fe42f",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/5e/2b4315f0cc08529c0952fa2894f5cd0dbf8536": "480246c56d75da7b52b3761af9c0b774",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/f2/eceb74e196716eca5081df86ddd9d4d0285698": "4f8e81fdd5e3ce79c2fcece8489d6900",
".git/objects/bb/e3a9f4eec61aa758f8b1021dad117064291539": "3a6a81af8257ea4fd0065c85da7c03ab",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/79/e5c661c4375cce9ee802bdd77b3afcaf154612": "ccf663e49ba7161bc0cd4e19471d3a2a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/5c/e583c35307e89c2c53d992883cc8ffd3ec8447": "b2663581c597e93c7b8c48ff22c87fd8",
".git/objects/51/5bf9f9f4ad131e1bb5cd2052ec4bf4f755eab5": "7f658ec9a6c1b3f2217e253e5c4ac45a",
".git/objects/02/adb9e91518c331b5bbb46f38a0ae460d388a8c": "a02a7d42654f2b03e10487a98c9c4986",
".git/objects/46/88a1ddab109f8d9772655b5e06b8e4a0f81a18": "aa5c645f3ef1f0448b41655f3bbadec2",
".git/objects/3b/3067760c1b8639933366c2fde091baa07f40bc": "36e8e8061e95baedcf9220054d24b8b5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/ec/3383725c26541188fbcf4a3eb8031e0b170d22": "598312aa6057f61bb5c8499ec00b8e18",
".git/objects/bd/08826110ef73f393b4b23e2bbe236ceb28b1c9": "6e13096611579a7f853925c1de0f8729",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/f7/21fb5bba908699e2c52230df00e81c7f2ff6e9": "a984ebf273fb43b499fe933f839f85f4",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/e1/f8e80ab219755a49c2dd848bea1a5921124920": "28229714c2d33645259f3b14b22b53a4",
".git/objects/b6/f8a88f99df7631229d494eafaf10005ca9260a": "5ff158e6867e90da0c95d2b262a27c0d",
".git/objects/26/88617cfe9df27bcf11861a681157761c84e90a": "e8baf3b8850646c1ce9fad4442de4bd2",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/48/aedfee53a7f398648320a51199cec0a96468b9": "f0448d368b90e77a6ea7c1c6295726c9",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/e6/7891a4d27f8093ec0bf43a58c674e978b96d75": "bfa3804a5036a24962103023f887744f",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/27/8a305ac86c3372fd4f97322ca67edc5d3b345c": "834062f39b7d95ae22a7c46ffbdeb9e2",
".git/objects/d5/6c855778cc25652835316bfe20c3b6a7f65b00": "e50ed8f02881215e0a5abc2160ae385f",
".git/objects/95/4dce71dfed8bec47dd4d8d65be03163e0ffe8f": "f031c7adfffa5162c87db3acb1e1604e",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/be/6d6a58d5c2e4f94e48a0db060e043339f3faaa": "53fed900cf8e4033733a706d31ff404d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/ef/8f5f7cc33792374bf3e74b3286bf0631a806e0": "a168d584105dcd6ef258e20bbc50795c",
".git/objects/78/9abf108f45cd14ec54a2c563a8e9a3d3575a64": "111b784954cb7a0fa64b3e165a6efe93",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c7/1ae2f5f18d98349c90be6f27b50aa8f3310614": "eba5f8d8fbbb891c5941f96941f28a15",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/b8/1e4e04f2b7efdd99a38fe33eea365f5223b89f": "b304324e906e4dceafc8b481d24579c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/32/67c8f8cfe286dd380f06fda99a25f918f46de0": "0b99c01d54a9afe90d9b15880bfb092a",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/69/d5b3d375580b15e90a4d16f090299ffb55c99d": "8aabbae7d295bd007301f526e0fcf18f",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/71/bd16c3218b7fa79a1c0c8dd1a3ab16b97ad872": "402944c1e70e5ee36de619f4ab344368",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/37/f1c63c83256c2873f7e0ab65501a98e588d89b": "42cef97702a51da81acc6566c4f21fc3",
".git/objects/ee/8ff151dc92da3cba4c2e7b33d5d8b2b99453fa": "aad2828ebbd93880c4065d18dc836db6",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/cb/c2c2212688cc6d750ce3eace6443ea303efc76": "8c2738f4511a8bd97ef4adcb34398934",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/18/cbe353b3edb9ed03c267c297a566cd060b244d": "efe4fbb89eae093a29ecf74995f7dc85",
".git/objects/56/091581ac7658e02c9fa24a2d65eabdce0e1d18": "8fe3a536736e95145d5cc7581c200f1d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/f3/277a93c265ecd2805f344d62b062e883926d5f": "d9f395e1355c5e73996dd6f8eccc4859",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/d0/d54870c46d4fdb4f89bb0ce0529477f3c41c98": "b14d6f7a3a65fe14764b45e73c754d97",
".git/objects/d1/90db138c91cd63126a661d2bd6edd4b04fdfea": "6a9190e1577b473679e8ff1f39ae66a8",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/0c/64e4553a1285e42fd9e5e54a7f420c0b1d1f83": "ca265fbbb691770a443b811a1cfcd10b",
".git/objects/0c/3f2ee1a7a5a3c8819594bb396c6004ac59173d": "5e7edecabe688e57f76006c80a1628ad",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/63842481e36fbd05c88eae7002b64632217b54": "7a2fe912b09319f04499d64c6978ba29",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/refs/heads/master": "c74e94aaef536721d705870daaba5b93",
".git/COMMIT_EDITMSG": "a29b69f57effac678b5e64f76bf178bc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "b35434a3b98b315379dd034e2fcf446d",
"version.json": "6f5a690133ed8a22cd52156b49410a63",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "4a1232fd36585975cb8141e287650ec0",
"/": "4a1232fd36585975cb8141e287650ec0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
