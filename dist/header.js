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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/header.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/header.js":
/*!***********************!*\
  !*** ./app/header.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var $header = document.querySelector('.header');\n  var $headerNav = document.querySelector('.header__nav');\n  var $menuItems = document.querySelectorAll('.header__nav__link').forEach ? Array.from(document.querySelectorAll('.header__nav__link')) : document.querySelectorAll('.header__nav__link');\n  var $mainIntro = document.querySelector('.main-intro');\n  var $spanMenu = document.createElement('span');\n  $spanMenu.textContent = 'Menu';\n  $spanMenu.setAttribute('name', 'Menu');\n  var text = document.createTextNode('menu');\n  text.type = 'text';\n  var phoneWidth = 375;\n\n  function menuHandler(e) {\n    console.log('menu click');\n    var target = e.target; // let isHeader = target.matches ? target.matches('.header') : target.className.match('.header')\n\n    var isMenu = target.matches ? target.matches('span') : target.getAttribute('name') === 'Menu'; //Trident IE browser的引擎\n\n    var isTridentEdge = navigator.userAgent.includes('Trident') || navigator.userAgent.includes('Edge');\n    console.log(navigator.userAgent);\n\n    if (isMenu) {\n      console.log('menu open');\n      e.preventDefault(); //IE edge支援toggle，低版IE沒有，edge外的IE都添加--openIE，而不是--open\n\n      if ($headerNav.classList.toggle) {\n        if (isTridentEdge) {\n          $headerNav.classList.toggle('header__nav--openIE');\n          $header.classList.toggle('u-color-white');\n          $header.classList.toggle('u-color-black');\n        } else {\n          $headerNav.classList.toggle('header__nav--open');\n          $header.classList.toggle('u-color-white');\n          $header.classList.toggle('u-color-black');\n        }\n      } else {\n        var isOpen = $headerNav.className.includes('header__nav--openIE');\n        $menuItems.forEach(function (item) {\n          item.style.setProperty('transition', 'all .3s cubic-bezier(.07,.17,.87,.31);');\n        });\n\n        if (isOpen) {\n          $headerNav.classList.remove('header__nav--openIE');\n          $header.classList.remove('u-color-white');\n          $header.classList.remove('u-color-black');\n        } else {\n          $headerNav.classList.add('header__nav--openIE');\n          $header.classList.add('u-color-white');\n          $header.classList.add('u-color-black');\n        }\n      }\n    } else {\n      console.log('click fail');\n      console.log('target', target);\n      console.log('isMenu', isMenu);\n    }\n  }\n\n  function headerInit() {\n    if (window.innerWidth < phoneWidth) {\n      console.log('add eventlistener');\n      $header.addEventListener('click', menuHandler);\n      $header.appendChild($spanMenu);\n      $header.classList.add('u-color-white');\n    } else {\n      console.log('none');\n      console.log($header.lastChild);\n      $header.lastChild.textContent === 'Menu' ? $header.removeChild($spanMenu) : console.log(\"doesn't remove span\");\n      $headerNav.classList.remove('header__nav--open');\n    }\n  }\n\n  function headerScroll() {\n    var windowTop = window.scrollY;\n    var IntroTop = $mainIntro.offsetTop;\n\n    if (windowTop > IntroTop - 40) {\n      $header.style.setProperty('background', '#222222');\n      $header.style.setProperty('color', '#fff');\n    } else {\n      $header.style.removeProperty('background');\n      $header.style.removeProperty('color', '#fff');\n    }\n  }\n\n  function headerHandler(type) {\n    switch (type) {\n      case 'resize':\n        console.log('resize');\n        headerInit();\n        break;\n\n      case 'scroll':\n        headerScroll();\n        break;\n    }\n  }\n\n  function headerControl(e) {\n    console.log('header control');\n    e ? e = e['0'] : '';\n    headerHandler(e.type);\n  }\n\n  headerInit();\n  window.addEventListener('resize', universal.throttle(headerControl));\n  window.addEventListener('scroll', universal.throttle(headerControl));\n})();\n\n//# sourceURL=webpack:///./app/header.js?");

/***/ })

/******/ });