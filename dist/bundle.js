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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/big-o.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AvatarData.js":
/*!***************************!*\
  !*** ./src/AvatarData.js ***!
  \***************************/
/*! exports provided: avatarListPath, avatarList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"avatarListPath\", function() { return avatarListPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"avatarList\", function() { return avatarList; });\nvar avatarListPath = './images/f-compensation-2018/';\nvar avatarList = ['AJ.gif', 'AK.gif', 'IC.gif', 'NZ.gif', 'OV.jpg', 'PA.gif', 'RM.gif', 'SE.jpeg'];\n\n//# sourceURL=webpack:///./src/AvatarData.js?");

/***/ }),

/***/ "./src/balls.js":
/*!**********************!*\
  !*** ./src/balls.js ***!
  \**********************/
/*! exports provided: Ball, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Balls; });\n/* harmony import */ var _AvatarData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarData */ \"./src/AvatarData.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Ball =\n/*#__PURE__*/\nfunction () {\n  function Ball(url, container, index) {\n    _classCallCheck(this, Ball);\n\n    this.url = url;\n    this.container = container;\n    this.index = index;\n  }\n\n  _createClass(Ball, [{\n    key: \"create\",\n    value: function create() {\n      var ballContainer = createElement('div', 'ball__container');\n      var hoverAnimationContainer = createElement('div', 'hover-animation__container');\n      var ballString = createElement('div', 'ball__string');\n      ballString.style.height = \"\".concat(Math.random() * 200 + 20, \"px\");\n      ballContainer.style.animationDuration = \"\".concat(Math.random() * 1.8 + 0.5, \"s\");\n      var ball = createElement('div', '__ball');\n      ball.style.background = \"center center/cover url(\".concat(this.url, \") no-repeat\");\n      var ballSet = [ballString, createElement('div', 'ball__ring'), createElement('div', 'ball__button'), ball];\n      ballSet.forEach(function (item) {\n        return hoverAnimationContainer.appendChild(item);\n      });\n      ballContainer.appendChild(hoverAnimationContainer);\n      this.container.appendChild(ballContainer);\n\n      function createElement(element, className) {\n        var item = document.createElement(element);\n        item.classList.add(className);\n        return item;\n      }\n    }\n  }]);\n\n  return Ball;\n}();\n\nvar Balls =\n/*#__PURE__*/\nfunction () {\n  function Balls() {\n    _classCallCheck(this, Balls);\n\n    this.isRunning = false;\n    this.create = this.create.bind(this);\n    this.destroy = this.destroy.bind(this);\n    this.toggle = this.toggle.bind(this);\n  }\n\n  _createClass(Balls, [{\n    key: \"create\",\n    value: function create() {\n      this.isRunning = true;\n      var container = document.querySelector('.balls__container');\n      _AvatarData__WEBPACK_IMPORTED_MODULE_0__[\"avatarList\"].map(function (avatar, index) {\n        new Ball(\"\".concat(_AvatarData__WEBPACK_IMPORTED_MODULE_0__[\"avatarListPath\"]).concat(avatar), container, index).create();\n      });\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.isRunning = false;\n      var container = document.querySelector('.balls__container');\n      container.innerHTML = '';\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      var playbackControl = this.isRunning ? this.destroy : this.create;\n      playbackControl();\n    }\n  }]);\n\n  return Balls;\n}();\n\n\n\n//# sourceURL=webpack:///./src/balls.js?");

/***/ }),

/***/ "./src/big-o.js":
/*!**********************!*\
  !*** ./src/big-o.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sortingAlgorithmList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortingAlgorithmList */ \"./src/sortingAlgorithmList.js\");\n/* harmony import */ var _sortingAlgorithm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortingAlgorithm */ \"./src/sortingAlgorithm.js\");\n/* harmony import */ var _listHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listHeader */ \"./src/listHeader.js\");\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ \"./src/title.js\");\n/* harmony import */ var _snow_letSnow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snow/letSnow */ \"./src/snow/letSnow.js\");\n/* harmony import */ var _balls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./balls */ \"./src/balls.js\");\n\n\n\n\n\n\nnew _title__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().create();\nnew _listHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('sorting-algorithm-list', _sortingAlgorithmList__WEBPACK_IMPORTED_MODULE_0__[\"sortingAlgorithmListHeader\"]).create();\n_sortingAlgorithmList__WEBPACK_IMPORTED_MODULE_0__[\"sortingAlgorithmList\"].forEach(function (item) {\n  return new _sortingAlgorithm__WEBPACK_IMPORTED_MODULE_1__[\"default\"](item).create();\n});\nvar snow = new _snow_letSnow__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nsnow.init();\nvar balls = new _balls__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nvar snowTime = document.querySelector('#snowTime');\nsnowTime.addEventListener('click', function () {\n  balls.toggle();\n  snow.toggleSnow();\n  window.scrollTo(0, 0);\n});\n\n//# sourceURL=webpack:///./src/big-o.js?");

/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/*! exports provided: counter, bomb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"counter\", function() { return counter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bomb\", function() { return bomb; });\nfunction counter() {\n  var a = 0;\n  return function () {\n    return a += 1;\n  };\n}\nfunction bomb(countDown) {\n  var tick = countDown;\n  return function () {\n    tick = tick || countDown;\n    console.log(tick);\n    return --tick;\n  };\n}\n\n//# sourceURL=webpack:///./src/counter.js?");

/***/ }),

/***/ "./src/createNode.js":
/*!***************************!*\
  !*** ./src/createNode.js ***!
  \***************************/
/*! exports provided: createNode, createLinkNode, createRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNode\", function() { return createNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLinkNode\", function() { return createLinkNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRow\", function() { return createRow; });\nfunction createNode(className, text) {\n  var element = document.createElement('div');\n\n  if (className) {\n    element.classList.add(className);\n  }\n\n  element.classList.add('__item');\n  element.innerHTML = text;\n  return element;\n}\nfunction createLinkNode(className, url, urlWiki, text) {\n  var element = document.createElement('div');\n  var linkWiki = document.createElement('a');\n  var info = document.createElement('i');\n  var textNode = document.createTextNode(text);\n\n  if (className) {\n    element.classList.add(className);\n  }\n\n  element.classList.add('__item');\n  linkWiki.href = urlWiki;\n  linkWiki.target = '_blank';\n  linkWiki.appendChild(textNode);\n  element.appendChild(linkWiki);\n  info.classList.add('far');\n\n  if (url) {\n    var link = document.createElement('a');\n    link.href = url;\n    link.target = '_blank';\n    info.classList.add('fa-eye');\n    link.appendChild(info);\n    element.appendChild(link);\n  } else {\n    info.classList.add('fa-snowflake');\n    element.id = 'snowTime';\n    element.appendChild(info);\n  }\n\n  return element;\n}\nfunction createRow(array) {\n  var row = document.createElement('div');\n  row.classList.add('__row');\n  array.map(function (item) {\n    return row.appendChild(item);\n  });\n  return row;\n}\n\n//# sourceURL=webpack:///./src/createNode.js?");

/***/ }),

/***/ "./src/listHeader.js":
/*!***************************!*\
  !*** ./src/listHeader.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListHeader; });\n/* harmony import */ var _createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNode */ \"./src/createNode.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ListHeader =\n/*#__PURE__*/\nfunction () {\n  function ListHeader(elementId, header) {\n    _classCallCheck(this, ListHeader);\n\n    this.header = header;\n    this.elementId = elementId;\n  }\n\n  _createClass(ListHeader, [{\n    key: \"create\",\n    value: function create() {\n      var rowHeader = this.header.map(function (item) {\n        return Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])('', item);\n      });\n      var row = Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"createRow\"])(rowHeader);\n      row.classList.add('__header');\n      document.getElementById(this.elementId).appendChild(row);\n    }\n  }]);\n\n  return ListHeader;\n}();\n\n\n\n//# sourceURL=webpack:///./src/listHeader.js?");

/***/ }),

/***/ "./src/snow/letSnow.js":
/*!*****************************!*\
  !*** ./src/snow/letSnow.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LetSnow; });\n/* harmony import */ var _snowAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snowAnimation */ \"./src/snow/snowAnimation.js\");\n/* harmony import */ var _snowFlakes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snowFlakes */ \"./src/snow/snowFlakes.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar LetSnow =\n/*#__PURE__*/\nfunction () {\n  function LetSnow() {\n    _classCallCheck(this, LetSnow);\n\n    this.toggleSnow = this.toggleSnow.bind(this);\n    this.init = this.init.bind(this);\n    this.resizeCanvasElements = this.resizeCanvasElements.bind(this);\n    this.snowAnimation = null;\n    this.snowFlakes = null;\n    this.snowflakesContext = null;\n    this.snowflakesCanvas = null;\n    this.aaSnowConfig = {\n      snowflakes: '200'\n    };\n  }\n\n  _createClass(LetSnow, [{\n    key: \"init\",\n    value: function init() {\n      this.snowAnimation = new _snowAnimation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      this.snowFlakes = new _snowFlakes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n      var element = document.createElement('canvas');\n      element.id = 'snowflakesCanvas';\n      document.querySelector('.snow__container').appendChild(element);\n      this.snowflakesCanvas = document.getElementById('snowflakesCanvas');\n      this.snowflakesContext = snowflakesCanvas.getContext('2d');\n      this.snowFlakes.generate(this.aaSnowConfig.snowflakes);\n      this.snowAnimation.addFrameRenderer(this.snowFlakes.renderFrame, this.snowflakesContext);\n    }\n  }, {\n    key: \"resizeCanvasElements\",\n    value: function resizeCanvasElements() {\n      this.snowflakesCanvas.width = window.innerWidth;\n      this.snowflakesCanvas.height = window.innerHeight;\n      this.snowFlakes.updateBounds();\n    }\n  }, {\n    key: \"toggleSnow\",\n    value: function toggleSnow() {\n      this.resizeCanvasElements();\n      this.snowFlakes.clearFrame(this.snowflakesContext);\n      this.snowAnimation.toggle(this.resizeCanvasElements);\n    }\n  }]);\n\n  return LetSnow;\n}();\n\n\n\n//# sourceURL=webpack:///./src/snow/letSnow.js?");

/***/ }),

/***/ "./src/snow/snowAnimation.js":
/*!***********************************!*\
  !*** ./src/snow/snowAnimation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SnowAnimation; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SnowAnimation =\n/*#__PURE__*/\nfunction () {\n  function SnowAnimation() {\n    _classCallCheck(this, SnowAnimation);\n\n    this.frameRenderersCollection = [];\n    this.renderContextesCollection = [];\n    this.isRunning = false;\n    this.animationCallback;\n    this.minInterval = 16.7; // fps tracking\n\n    this.avgTime = 0;\n    this.trackFrames = 60;\n    this.frameCounter = 0;\n    this.addFrameRenderer = this.addFrameRenderer.bind(this);\n    this.getRequestAnimationFrame = this.getRequestAnimationFrame.bind(this);\n    this.frameRenderCore = this.frameRenderCore.bind(this);\n    this.start = this.start.bind(this);\n    this.stop = this.stop.bind(this);\n    this.toggle = this.toggle.bind(this);\n  } // register new renderer and corresponding context\n\n\n  _createClass(SnowAnimation, [{\n    key: \"addFrameRenderer\",\n    value: function addFrameRenderer(frameRender, renderContext) {\n      if (frameRender && typeof frameRender === \"function\") {\n        this.frameRenderersCollection.push(frameRender);\n        this.renderContextesCollection.push(renderContext);\n      }\n    } // detecting requestAnimationFrame feature\n\n  }, {\n    key: \"getRequestAnimationFrame\",\n    value: function getRequestAnimationFrame(code) {\n      switch (code) {\n        case window.requestAnimationFrame:\n          return window.requestAnimationFrame(code);\n\n        case window.msRequestAnimationFrame:\n          return window.msRequestAnimationFrame(code);\n\n        case window.webkitRequestAnimationFrame:\n          return window.webkitRequestAnimationFrame(code);\n\n        case window.mozRequestAnimationFrame:\n          return window.mozRequestAnimationFrame(code);\n\n        default:\n          return setTimeout(code, this.minInterval);\n      }\n    } // iterate and render all registered renderers\n\n  }, {\n    key: \"frameRenderCore\",\n    value: function frameRenderCore() {\n      var _this = this;\n\n      var startDate = new Date();\n      this.frameRenderersCollection.map(function (item, i) {\n        return item(_this.renderContextesCollection[i]);\n      });\n\n      if (this.isRunning) {\n        this.animationCallback = this.getRequestAnimationFrame(this.frameRenderCore);\n      }\n\n      var endDate = new Date();\n      var duration = endDate - startDate;\n      this.avgTime += duration; // we count fps every trackFrames frame\n\n      this.frameCounter++;\n\n      if (this.frameCounter >= this.trackFrames) {\n        this.avgTime = this.avgTime / this.trackFrames;\n        var avgFps = Math.floor(1000 / this.avgTime);\n        if (avgFps > 60) avgFps = 60;\n        this.avgTime = 0;\n        this.frameCounter = 0;\n      }\n    } // playback control: play, pause, toggle\n\n  }, {\n    key: \"start\",\n    value: function start(handler) {\n      if (this.isRunning) return;\n      this.animationCallback = this.getRequestAnimationFrame(this.frameRenderCore);\n      window.addEventListener('resize', handler);\n      this.isRunning = true;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop(handler) {\n      if (!this.isRunning) return;\n      clearInterval(this.animationCallback);\n      window.removeEventListener('resize', handler);\n      this.isRunning = false;\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle(handler) {\n      var playbackControl = this.isRunning ? this.stop : this.start;\n      playbackControl(handler);\n    }\n  }]);\n\n  return SnowAnimation;\n}();\n\n\n\n//# sourceURL=webpack:///./src/snow/snowAnimation.js?");

/***/ }),

/***/ "./src/snow/snowFlakes.js":
/*!********************************!*\
  !*** ./src/snow/snowFlakes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SnowFlakes; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SnowFlakes =\n/*#__PURE__*/\nfunction () {\n  function SnowFlakes() {\n    _classCallCheck(this, SnowFlakes);\n\n    this.snowflakes = [];\n    this.snowflakesDefaultCount = 1000;\n    this.snowflakeCountIncrement = 0.1;\n    this.snowflakeRemoveFactor = 2;\n    this.snowflakeSprites = [];\n    this.spritesCount = 5;\n    this.spriteWidth = 20;\n    this.spriteHeight = 20;\n    this.snowflakeSpritesLocation = './images/snowFlakes.png';\n    this.bounds = {\n      width: window.innerWidth,\n      height: window.innerHeight\n    };\n    this.minVerticalVelocity = 1;\n    this.maxVerticalVelocity = 4;\n    this.minHorizontalVelocity = -1;\n    this.maxHorizontalVelocity = 3;\n    this.minScale = 0.2;\n    this.maxScale = 1.25;\n    this.minHorizontalDelta = 2;\n    this.maxHorizontalDelta = 3;\n    this.minOpacity = 0.2;\n    this.maxOpacity = 0.9;\n    this.maxOpacityIncrement = 50;\n    this.speedCorrectionFrames = 60;\n    this.currentSpeedCorrectionFrame = 0;\n    this.speedFactor = 0.6;\n    this.generate = this.generate.bind(this);\n    this.generateSnowflake = this.generateSnowflake.bind(this);\n    this.advanceSnowFlakes = this.advanceSnowFlakes.bind(this);\n    this.renderFrame = this.renderFrame.bind(this);\n    this.updateBounds = this.updateBounds.bind(this);\n    this.count = this.count.bind(this);\n    this.add = this.add.bind(this);\n    this.remove = this.remove.bind(this);\n    this.clearFrame = this.clearFrame.bind(this);\n  }\n\n  _createClass(SnowFlakes, [{\n    key: \"generateSnowflake\",\n    value: function generateSnowflake() {\n      var scale = Math.random() * (this.maxScale - this.minScale) + this.minScale;\n      return {\n        x: Math.random() * this.bounds.width,\n        y: Math.random() * this.bounds.height,\n        vv: Math.random() * (this.maxVerticalVelocity - this.minVerticalVelocity) + this.minVerticalVelocity,\n        hv: Math.random() * (this.maxHorizontalVelocity - this.minHorizontalVelocity) + this.minHorizontalVelocity,\n        sw: scale * this.spriteWidth,\n        sh: scale * this.spriteHeight,\n        mhd: Math.random() * (this.maxHorizontalDelta - this.minHorizontalDelta) + this.minHorizontalDelta,\n        hd: 0,\n        hdi: Math.random() / (this.maxHorizontalVelocity * this.minHorizontalDelta),\n        o: Math.random() * (this.maxOpacity - this.minOpacity) + this.minOpacity,\n        oi: Math.random() / this.maxOpacityIncrement,\n        si: Math.ceil(Math.random() * (this.spritesCount - 1)),\n        nl: false\n      };\n    }\n  }, {\n    key: \"advanceSnowFlakes\",\n    value: function advanceSnowFlakes() {\n      var _this = this;\n\n      this.snowflakes.forEach(function (sf) {\n        sf.y += sf.vv * _this.speedFactor;\n        sf.x += (sf.hd + sf.hv) * _this.speedFactor;\n        sf.hd += sf.hdi;\n        sf.hdi = sf.hd < -sf.mhd || sf.hd > sf.mhd ? -sf.hdi : sf.hdi;\n        sf.o += sf.oi;\n        sf.oi = sf.o > _this.maxOpacity || sf.o < _this.minOpacity ? -sf.oi : sf.oi;\n        sf.o = sf.o > _this.maxOpacity ? _this.maxOpacity : sf.o < _this.minOpacity ? _this.minOpacity : sf.o;\n        var resetNotLanding = sf.y > _this.bounds.height + _this.spriteHeight / 2 || sf.y < 0 || sf.x > _this.bounds.width + _this.spriteWidth / 2 || sf.x < 0;\n        sf.y = sf.y > _this.bounds.height + _this.spriteHeight / 2 ? 0 : sf.y < 0 ? _this.bounds.height : sf.y;\n        sf.x = sf.x > _this.bounds.width + _this.spriteWidth / 2 ? 0 : sf.x < 0 ? _this.bounds.width : sf.x;\n\n        if (resetNotLanding) {\n          sf.nl = false;\n        }\n      });\n    }\n  }, {\n    key: \"renderFrame\",\n    value: function renderFrame(context) {\n      var _this2 = this;\n\n      this.advanceSnowFlakes();\n      this.clearFrame(context);\n      this.snowflakes.map(function (sf) {\n        context.globalAlpha = sf.o;\n        context.drawImage(_this2.snowflakeSprites[sf.si], 0, 0, _this2.spriteWidth, _this2.spriteHeight, sf.x, sf.y, sf.sw, sf.sh);\n      });\n    }\n  }, {\n    key: \"generate\",\n    value: function generate(number, add) {\n      var image = new Image();\n\n      image.onload = function () {\n        for (var i = 0; i < this.spritesCount; i++) {\n          var sprite = document.createElement(\"canvas\");\n          sprite.width = this.spriteWidth;\n          sprite.height = this.spriteHeight;\n          var context = sprite.getContext(\"2d\");\n          context.drawImage(image, i * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, 0, 0, this.spriteWidth, this.spriteHeight);\n          this.snowflakeSprites.push(sprite);\n        }\n\n        this.snowflakesDefaultCount = number || this.snowflakesDefaultCount;\n        this.snowflakes = add ? this.snowflakes : [];\n\n        for (var _i = 0; _i < this.snowflakesDefaultCount; _i++) {\n          this.snowflakes.push(this.generateSnowflake());\n        }\n      }.bind(this);\n\n      image.src = this.snowflakeSpritesLocation;\n    }\n  }, {\n    key: \"updateBounds\",\n    value: function updateBounds() {\n      this.bounds.width = window.innerWidth;\n      this.bounds.height = window.innerHeight;\n    }\n  }, {\n    key: \"count\",\n    value: function count() {\n      return this.snowflakes.length;\n    }\n  }, {\n    key: \"add\",\n    value: function add(number) {\n      number = number || this.snowflakes.length * this.snowflakeCountIncrement;\n      this.generate(number, true);\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(number) {\n      number = number || this.snowflakes.length * this.snowflakeCountIncrement * this.snowflakeRemoveFactor;\n      var flakesCount = this.snowflakes.length - number;\n      this.snowflakes = flakesCount > 0 ? this.snowflakes.slice(0, flakesCount) : this.snowflakes;\n    }\n  }, {\n    key: \"clearFrame\",\n    value: function clearFrame(context) {\n      context.clearRect(0, 0, context.canvas.width, context.canvas.height);\n    }\n  }]);\n\n  return SnowFlakes;\n}();\n\n\n\n//# sourceURL=webpack:///./src/snow/snowFlakes.js?");

/***/ }),

/***/ "./src/sortingAlgorithm.js":
/*!*********************************!*\
  !*** ./src/sortingAlgorithm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SortingAlgorithm; });\n/* harmony import */ var _createNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNode */ \"./src/createNode.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar SortingAlgorithm =\n/*#__PURE__*/\nfunction () {\n  function SortingAlgorithm(item) {\n    _classCallCheck(this, SortingAlgorithm);\n\n    this.name = item.name;\n    this.url = item.url;\n    this.urlWiki = item.urlWiki;\n    this.timeComplexity = item.complexity.time;\n    this.spaceComplexity = item.complexity.space;\n  }\n\n  _createClass(SortingAlgorithm, [{\n    key: \"create\",\n    value: function create() {\n      var linkNodeClass = 'algorithm__name';\n      var rowElements = [Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"createLinkNode\"])(linkNodeClass, this.url, this.urlWiki, this.name), Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(this.timeComplexity.best.category, this.timeComplexity.best.value), Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(this.timeComplexity.average.category, this.timeComplexity.average.value), Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(this.timeComplexity.worst.category, this.timeComplexity.worst.value), Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"createNode\"])(this.spaceComplexity.category, this.spaceComplexity.value)];\n      var row = Object(_createNode__WEBPACK_IMPORTED_MODULE_0__[\"createRow\"])(rowElements);\n      document.getElementById('sorting-algorithm-list').appendChild(row);\n    }\n  }]);\n\n  return SortingAlgorithm;\n}();\n\n\n\n//# sourceURL=webpack:///./src/sortingAlgorithm.js?");

/***/ }),

/***/ "./src/sortingAlgorithmList.js":
/*!*************************************!*\
  !*** ./src/sortingAlgorithmList.js ***!
  \*************************************/
/*! exports provided: sortingAlgorithmList, sortingAlgorithmListHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortingAlgorithmList\", function() { return sortingAlgorithmList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortingAlgorithmListHeader\", function() { return sortingAlgorithmListHeader; });\nvar sortingAlgorithmList = [{\n  name: \"Quicksort\",\n  url: \"https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Quicksort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      average: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      worst: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(log(n))\",\n      category: \"fast\"\n    }\n  }\n}, {\n  name: \"Merge sort\",\n  url: \"https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Merge_sort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      average: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      worst: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(n)\",\n      category: \"fair\"\n    }\n  }\n}, {\n  name: \"Timsort\",\n  url: \"https://www.youtube.com/watch?v=NVIjHj-lrT4\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Timsort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n)\",\n        category: \"fair\"\n      },\n      average: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      worst: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(n)\",\n      category: \"fair\"\n    }\n  }\n}, {\n  name: \"Heapsort\",\n  url: \"https://www.hackerearth.com/practice/algorithms/sorting/heap-sort/tutorial/\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Heapsort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      average: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      worst: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(1)\",\n      category: \"fast\"\n    }\n  }\n}, {\n  name: \"Bubble sort\",\n  url: \"https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Bubble_sort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n)\",\n        category: \"fair\"\n      },\n      average: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      },\n      worst: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(1)\",\n      category: \"fast\"\n    }\n  }\n}, {\n  name: \"Insertion sort\",\n  url: \"https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Insertion_sort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n)\",\n        category: \"fair\"\n      },\n      average: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      },\n      worst: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(1)\",\n      category: \"fast\"\n    }\n  }\n}, {\n  name: \"Selection sort\",\n  url: \"https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Selection_sort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      },\n      average: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      },\n      worst: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(1)\",\n      category: \"fast\"\n    }\n  }\n}, {\n  name: \"Tree sort\",\n  url: \"https://www.youtube.com/watch?v=n2MLjGeK7qA\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Tree_sort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      average: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      worst: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(n)\",\n      category: \"fair\"\n    }\n  }\n}, {\n  name: \"Shellsort\",\n  url: \"http://www.algostructure.com/sorting/shellsort.php\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Shellsort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      average: {\n        value: \"&#927;(n log<sup>2</sup>(n))\",\n        category: \"slow\"\n      },\n      worst: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(n)\",\n      category: \"fair\"\n    }\n  }\n}, {\n  name: \"Bucket sort\",\n  url: \"https://www.hackerearth.com/practice/algorithms/sorting/bucket-sort/tutorial/\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Bucket_sort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n+k)\",\n        category: \"fair\"\n      },\n      average: {\n        value: \"&#927;(n+k)\",\n        category: \"fair\"\n      },\n      worst: {\n        value: \"&#927;(n<sup>2</sup>)\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(n*k)\",\n      category: \"fair\"\n    }\n  }\n}, {\n  name: \"Radix sort\",\n  url: \"https://www.hackerearth.com/practice/algorithms/sorting/radix-sort/visualize/\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Radix_sort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n*k)\",\n        category: \"fair\"\n      },\n      average: {\n        value: \"&#927;(n*k)\",\n        category: \"fair\"\n      },\n      worst: {\n        value: \"&#927;(n*k)\",\n        category: \"fair\"\n      }\n    },\n    space: {\n      value: \"&#927;(n+k)\",\n      category: \"fair\"\n    }\n  }\n}, {\n  name: \"Counting sort\",\n  url: \"https://www.hackerearth.com/practice/algorithms/sorting/counting-sort/tutorial/\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Counting_sort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n+k)\",\n        category: \"fair\"\n      },\n      average: {\n        value: \"&#927;(n+k)\",\n        category: \"fair\"\n      },\n      worst: {\n        value: \"&#927;(n+k)\",\n        category: \"fair\"\n      }\n    },\n    space: {\n      value: \"&#927;(k)\",\n      category: \"fair\"\n    }\n  }\n}, {\n  name: \"Cubesort\",\n  url: \"\",\n  urlWiki: \"https://en.wikipedia.org/wiki/Cubesort\",\n  complexity: {\n    time: {\n      best: {\n        value: \"&#927;(n)\",\n        category: \"fair\"\n      },\n      average: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      },\n      worst: {\n        value: \"&#927;(n log(n))\",\n        category: \"slow\"\n      }\n    },\n    space: {\n      value: \"&#927;(n)\",\n      category: \"fair\"\n    }\n  }\n}];\nvar sortingAlgorithmListHeader = ['Algorithm', 'Best time', 'Average time', 'Worst time', 'Space (worst)'];\n\n//# sourceURL=webpack:///./src/sortingAlgorithmList.js?");

/***/ }),

/***/ "./src/title.js":
/*!**********************!*\
  !*** ./src/title.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Title; });\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ \"./src/counter.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Title =\n/*#__PURE__*/\nfunction () {\n  function Title() {\n    _classCallCheck(this, Title);\n  }\n\n  _createClass(Title, [{\n    key: \"create\",\n    value: function create() {\n      var ticktack = Object(_counter__WEBPACK_IMPORTED_MODULE_0__[\"bomb\"])(5);\n      var element = document.createElement('h1');\n      var text_initial = \"Sorting Algorithm Big O\";\n      var text_bang = \"Sorting Algorithm Big &#1069;\";\n      element.innerHTML = text_initial;\n\n      function onClick() {\n        var tick = ticktack();\n        tick ? this.innerHTML = text_initial : this.innerHTML = text_bang;\n      }\n\n      document.querySelector('.title__container').appendChild(element);\n      document.querySelector('h1').addEventListener('click', onClick);\n    }\n  }]);\n\n  return Title;\n}();\n\n\n\n//# sourceURL=webpack:///./src/title.js?");

/***/ })

/******/ });