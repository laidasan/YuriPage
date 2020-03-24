/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(";\n\n(function () {\n  // require('@babel/polyfill')\n  var $welcomeStrs = ['Hi,I Am Yuri', 'Welcome To My Home', \"Today is \".concat(getToday(new Date().getDay()))];\n  var $bannerTitle = document.querySelector('.banner__title');\n  var $bannerTitleStr = $bannerTitle.querySelector('span');\n  var $bannerTitleCursor = $bannerTitle.querySelector('.banner__titleCursor');\n  var $bannerTimeline = document.querySelector('.banner__timeline');\n  var $imgSrcs = ['./img/indexpage/me.jpg'];\n  var $imgElements = document.querySelectorAll('img');\n  var $timers = [];\n  var now = 0;\n  var running = true;\n\n  function createInterval(callback, looptime) {\n    if (typeof callback === 'function') {\n      // console.log('create');\n      $timers.push(setInterval(function () {\n        callback();\n      }, looptime));\n    } else {\n      return false;\n    }\n  }\n\n  function getToday(num) {\n    var today = '';\n\n    switch (num) {\n      case 0:\n        today = 'Sunday';\n        break;\n\n      case 1:\n        today = 'Monday';\n        break;\n\n      case 2:\n        today = 'TuesDay';\n        break;\n\n      case 3:\n        today = 'Wednesday';\n        break;\n\n      case 4:\n        today = 'ThursDay';\n        break;\n\n      case 5:\n        today = 'Friday';\n        break;\n\n      case 6:\n        today = 'SaturDay';\n        break;\n    }\n\n    return today;\n  }\n\n  function bannerTitleCursorAni() {\n    $bannerTitleCursor.style.opacity === '0' ? $bannerTitleCursor.style.opacity = 1 : $bannerTitleCursor.style.opacity = 0;\n  }\n\n  function bannerTimeline() {\n    var now = new Date(); // $bannerTimeline.textContent = now.toUTCString().substring(0,now.toUTCString().length - 3);\n\n    $bannerTimeline.textContent = now.toString().substring(0, now.toString().length - 17);\n  }\n\n  bannerTimeline(); //titel write animation\n\n  function bannerTitleAni() {\n    if ($bannerTitleStr.textContent !== $welcomeStrs[now] && running) {\n      var str = $bannerTitleStr.textContent;\n      var willAdd = $welcomeStrs[now].substring(0, str.length + 1);\n      $bannerTitleStr.textContent = willAdd;\n\n      if ($bannerTitleStr.textContent === $welcomeStrs[now]) {\n        running = false;\n        clearInterval($timers[2]);\n        $timers.pop();\n        setTimeout(function () {\n          // console.log('start');\n          // console.log($bannerTitleStr.textContent)\n          $bannerTitleStr.textContent = $welcomeStrs[now].substring(0, $bannerTitleStr.textContent.length - 1);\n          createInterval(bannerTitleAni, 150);\n        }, 3000);\n      }\n    } else {\n      if ($bannerTitleStr.textContent !== '') {\n        var _str = $bannerTitleStr.textContent;\n\n        var _willAdd = $welcomeStrs[now].substring(0, _str.length - 1);\n\n        $bannerTitleStr.textContent = _willAdd;\n      } else {\n        // console.log('change str');\n        running = true;\n        now = now + 1 > $welcomeStrs.length - 1 ? 0 : now + 1;\n      }\n    }\n  }\n\n  function loadingImage() {\n    var img = new Image();\n\n    img.onload = function () {\n      img.alt = $imgElements[0].alt;\n      $imgElements[0].parentElement.replaceChild(img, $imgElements[0]);\n    };\n\n    img.src = $imgSrcs[0];\n  }\n\n  loadingImage(); //all of banner string animations\n\n  function bannerStrAni() {\n    createInterval(bannerTitleCursorAni, 750);\n    createInterval(bannerTimeline, 1000);\n    createInterval(bannerTitleAni, 150); // always finall\n  }\n\n  function loading() {\n    return new Promise(function (resolve, reject) {\n      setTimeout(function () {\n        document.querySelector('.loading').style.setProperty('display', 'none');\n        resolve('loading sucess');\n      }, 1500);\n    });\n  }\n\n  universal['indexLoading'] = loading;\n  window.onload = loading().then(function (result) {\n    return new Promise(function (resolve, reject) {\n      console.log(result);\n      document.querySelector('.loading').style.setProperty('display', 'none');\n      universal.onload = true;\n      document.querySelector('main').classList.remove('u-display-none');\n      bannerTimeline();\n      bannerStrAni();\n      resolve(result);\n    });\n  }, function (err) {\n    console.log(err);\n  });\n})();\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ })

/******/ });