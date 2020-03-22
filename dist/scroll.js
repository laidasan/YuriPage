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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/scroll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/scroll.js":
/*!***********************!*\
  !*** ./app/scroll.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(";\n\n(function () {\n  // require('@babel/polyfill')\n  var $scrollContainer = document.querySelector('.scrollContainer');\n  var $mainPages = document.querySelectorAll('.main-page');\n  $mainPages = $mainPages.forEach ? $mainPages : Array.from($mainPages);\n  var $pageDirect = document.querySelector('.page-direct');\n  var $pageDirectOptions = $pageDirect.querySelectorAll('a');\n  $pageDirectOptions = $pageDirectOptions.forEach ? $pageDirectOptions : Array.from($pageDirectOptions);\n  var $bigMobileWidth = 990;\n  console.log($pageDirectOptions);\n  var lastpage = 0;\n  var thispage = 0;\n  var isScrolling = false;\n  var isMouseWheelListener = false;\n  var isMobile = false;\n\n  function scrollPage(e) {\n    console.log(e.wheelDelta);\n    var viewup = e.wheelDelta > 0 ? true : false;\n    var notebooStop = e.wheelDelta === 0 ? true : false;\n\n    function directOptionStyle(pagenow, isup) {\n      isup ? $pageDirectOptions[pagenow + 1].classList.remove('choose') : $pageDirectOptions[pagenow - 1].classList.remove('choose');\n      $pageDirectOptions[pagenow].classList.add('choose');\n    }\n\n    if (viewup && !isScrolling && thispage !== 0 && !notebooStop) {\n      console.log('viewup');\n      isScrolling = true;\n      thispage--;\n      $mainPages.forEach(function (page) {\n        page.style.setProperty('transform', \"translateY(-\".concat(100 * thispage, \"%)\"));\n      });\n      directOptionStyle(thispage, viewup);\n    } else if (!viewup && !isScrolling && thispage !== $mainPages.length - 1 && !notebooStop) {\n      console.log('viewdown');\n      isScrolling = true;\n      thispage++;\n      $mainPages.forEach(function (page) {\n        page.style.setProperty('transform', \"translateY(-\".concat(100 * thispage, \"%)\"));\n      }); // $mainPages.forEach ? $mainPages.forEach((page) => {\n      //     page.style.setProperty('transform',`translateY(-${100 * thispage}%)`)\n      // }) : Array.from($mainPages).forEach(page => {\n      //     page.style.setProperty('transform',`translateY(-${100 * thispage}%)`)\n      // })\n\n      directOptionStyle(thispage, viewup);\n    }\n  }\n\n  function pageDirectDesk(e) {\n    var target = e.target; //ie 有matches，但方法名稱是msMatchesSelector\n\n    var ismatch = target.matches ? target.matches('a') : target.msMatchesSelector('a');\n\n    if (ismatch) {\n      e.preventDefault();\n      var nextpage = target.dataset['page'];\n      console.log(nextpage);\n\n      if (thispage === nextpage) {\n        return;\n      }\n\n      if (!isScrolling) {\n        isScrolling = true;\n        $pageDirectOptions[thispage].classList.remove('choose');\n        $pageDirectOptions[nextpage].classList.add('choose');\n        $mainPages.forEach(function (page) {\n          console.log('scroll');\n          page.style.setProperty('transform', \"translateY(-\".concat(100 * parseInt(nextpage), \"%)\")); //     page.style.setProperty('transform',`translateY(-${100 * nextpage})%`);\n        });\n        thispage = nextpage;\n      }\n    }\n  }\n\n  function throttle(fn, cycle) {\n    var timeout = null;\n    var looptime = cycle || 60;\n    return function () {\n      var context = this;\n      var args = arguments;\n\n      if (!timeout) {\n        timeout = setTimeout(function () {\n          fn.call(context, args);\n          timeout = null;\n        }, looptime);\n      }\n    };\n  }\n\n  function pageDiretInit() {\n    if (window.innerWidth >= $bigMobileWidth && !isMobile) {\n      window.addEventListener('mousewheel', scrollPage);\n      isMouseWheelListener = true;\n    }\n  }\n\n  function pageDirectControl(e) {\n    console.log('resize');\n    console.log(window.innerWidth);\n    window.innerWidth < $bigMobileWidth && isMouseWheelListener ? function () {\n      console.log('remove mousewheel listener');\n      window.removeEventListener('mousewheel', scrollPage);\n      isMouseWheelListener = false;\n      $mainPages.forEach(function (page) {\n        page.style.setProperty('transform', 'translateY(0)');\n      });\n    }() : '';\n    window.innerWidth >= $bigMobileWidth && !isMouseWheelListener && !isMobile ? function () {\n      console.log('add mousewheel listener');\n      window.addEventListener('mousewheel', scrollPage);\n      isMouseWheelListener = true;\n      $mainPages.forEach(function (page) {\n        page.style.setProperty('transform', 'translateY(0)');\n      });\n      $pageDirectOptions.forEach(function (option) {\n        return option.classList.remove('choose');\n      });\n      $pageDirectOptions[0].classList.add('choose');\n      thispage = 0;\n      lastpage = 0;\n    }() : '';\n  }\n\n  if (window.onload) {\n    console.log('window onload');\n    var old = window.onload;\n\n    window.onload = function () {\n      console.log(old.then(function (result) {\n        return new Promise(function (resolve, rejcet) {\n          if (universal.isMobile(navigator.userAgent)) {\n            console.log('isMobile'); // let pagesOffsetTop = [];\n            // $mainPages.forEach((page,index) => {\n            //     pagesOffsetTop.push(page.offsetTop);\n            // })\n            // window.addEventListener('touchmove',(e) => {\n            //     console.log($mainPages[1].offsetTop);\n            // })\n\n            $pageDirect.style.setProperty('display', 'none');\n            document.querySelector('.main').style.setProperty('overflow', 'auto');\n            isMouseWheelListener = false;\n            isMobile = true;\n          } else {\n            console.log(result);\n            $pageDirect.addEventListener('click', pageDirectDesk);\n            pageDiretInit(); // window.addEventListener('mousewheel',scrollPage);\n            //new feature\n\n            window.addEventListener('resize', throttle(pageDirectControl));\n            $mainPages[0].addEventListener('transitionend', function (e) {\n              console.log('change isScrolling');\n              isScrolling = false;\n            });\n          }\n\n          resolve(result);\n        });\n      }));\n    };\n  } else {\n    console.log('init onload');\n    window.onload = universal['indexLading']().then(function (result) {\n      return new Promise(function (resolve, reject) {\n        pageDiretInit(); // window.addEventListener('mousewheel',scrollPage);\n        //new feature\n\n        window.addEventListener('resize', throttle(pageDirectControl));\n        $mainPages[0].addEventListener('transitionend', function (e) {\n          console.log('change isScrolling');\n          isScrolling = false;\n        });\n        resolve('loading sucess');\n      });\n    });\n  }\n})();\n\n//# sourceURL=webpack:///./app/scroll.js?");

/***/ })

/******/ });