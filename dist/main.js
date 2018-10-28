/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.jsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Slider = __webpack_require__(/*! ./components/Slider */ "./src/components/Slider/index.jsx");

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Slider2.default, null)
  );
};

exports.default = App;

/***/ }),

/***/ "./src/components/ProgressBar/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ProgressBar/index.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./index.scss */ "./src/components/ProgressBar/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.forwardRef(function (props, refs) {
  return _react2.default.createElement(
    'div',
    { className: 'progress-bar', ref: refs },
    _react2.default.createElement(
      'div',
      {
        style: { width: props.fillValue + '%' },
        className: 'progress-bar-amount'
      },
      props.children
    )
  );
});

/***/ }),

/***/ "./src/components/ProgressBar/index.scss":
/*!***********************************************!*\
  !*** ./src/components/ProgressBar/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/SeekBar/index.jsx":
/*!******************************************!*\
  !*** ./src/components/SeekBar/index.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SeekBar;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./index.scss */ "./src/components/SeekBar/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SeekBar(_ref) {
  var clientX = _ref.clientX,
      startDragging = _ref.startDragging,
      handleOnDragging = _ref.handleOnDragging,
      handleStartDragging = _ref.handleStartDragging,
      handleOnDragEnd = _ref.handleOnDragEnd;

  var seekBarStyle = {
    left: clientX,
    boxShadow: '' + (startDragging ? '0px 0px 3px 9px #5a7cff52' : '')
  };

  return _react2.default.createElement('div', {
    style: seekBarStyle,
    className: 'seek-bar',
    draggable: 'true',
    onDrag: function onDrag(event) {
      return handleOnDragging(event);
    },
    onDragStart: function onDragStart(event) {
      return handleStartDragging(event);
    },
    onDragEnd: function onDragEnd(event) {
      return handleOnDragEnd(event);
    }
  });
}

/***/ }),

/***/ "./src/components/SeekBar/index.scss":
/*!*******************************************!*\
  !*** ./src/components/SeekBar/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Slider/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Slider/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = __webpack_require__(/*! ../ProgressBar */ "./src/components/ProgressBar/index.jsx");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _SeekBar = __webpack_require__(/*! ../SeekBar */ "./src/components/SeekBar/index.jsx");

var _SeekBar2 = _interopRequireDefault(_SeekBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SEEKBAR_MARGIN = 10;

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.state = {
      startDragging: false,
      clientX: 0
    };

    _this.progressBar = _react2.default.createRef();
    _this.width = 0;

    _this.handleOnDragging = _this.handleOnDragging.bind(_this);
    _this.handleStartDragging = _this.handleStartDragging.bind(_this);
    _this.handleOnDragEnd = _this.handleOnDragEnd.bind(_this);
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadTransparentImage();
      this.width = this.progressBar.current.offsetWidth;
    }
  }, {
    key: 'loadTransparentImage',
    value: function loadTransparentImage() {
      this.dragImg = new Image(0, 0);
      this.dragImg.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }
  }, {
    key: 'handleOnDragEnd',
    value: function handleOnDragEnd() {
      this.setState({ startDragging: false });
    }
  }, {
    key: 'handleStartDragging',
    value: function handleStartDragging(event) {
      event.dataTransfer.setDragImage(this.dragImg, 0, 0);

      this.setState({ startDragging: true });
    }
  }, {
    key: 'handleOnDragging',
    value: function handleOnDragging(event) {
      // Get the Relative position of the SeekBar...
      var _progressBar$current$ = this.progressBar.current.getBoundingClientRect(),
          left = _progressBar$current$.left;

      var progressBarWidth = this.progressBar.current.offsetWidth;
      var clientX = Math.ceil(event.nativeEvent.clientX - (left + SEEKBAR_MARGIN));

      if (clientX < 0) return;

      if (clientX < progressBarWidth) {
        this.setState({
          clientX: clientX
        });
      }
    }
  }, {
    key: 'getSliderValue',
    value: function getSliderValue() {
      var clientX = this.state.clientX;

      var sliderValue = Math.ceil(clientX / this.width * 100);

      return sliderValue;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          clientX = _state.clientX,
          startDragging = _state.startDragging;


      return _react2.default.createElement(
        'div',
        { className: 'react-slider' },
        _react2.default.createElement(
          'h1',
          null,
          'React Slider'
        ),
        _react2.default.createElement(
          'small',
          null,
          'A simple slider build using ReactJS'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Value: ',
          this.getSliderValue() || 0
        ),
        _react2.default.createElement(
          _ProgressBar2.default,
          { ref: this.progressBar, fillValue: this.getSliderValue() },
          _react2.default.createElement(_SeekBar2.default, {
            clientX: clientX,
            startDragging: startDragging,
            handleOnDragEnd: this.handleOnDragEnd,
            handleOnDragging: this.handleOnDragging,
            handleStartDragging: this.handleStartDragging
          })
        )
      );
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(/*! ./App */ "./src/App.jsx");

var _App2 = _interopRequireDefault(_App);

__webpack_require__(/*! ./index.scss */ "./src/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Render in root container...
_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQmFyL2luZGV4LnNjc3M/ZDA0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWVrQmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWVrQmFyL2luZGV4LnNjc3M/NjUzNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/M2VkMSJdLCJuYW1lcyI6WyJBcHAiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZnMiLCJ3aWR0aCIsImZpbGxWYWx1ZSIsImNoaWxkcmVuIiwiU2Vla0JhciIsImNsaWVudFgiLCJzdGFydERyYWdnaW5nIiwiaGFuZGxlT25EcmFnZ2luZyIsImhhbmRsZVN0YXJ0RHJhZ2dpbmciLCJoYW5kbGVPbkRyYWdFbmQiLCJzZWVrQmFyU3R5bGUiLCJsZWZ0IiwiYm94U2hhZG93IiwiZXZlbnQiLCJTRUVLQkFSX01BUkdJTiIsIlNsaWRlciIsInN0YXRlIiwicHJvZ3Jlc3NCYXIiLCJjcmVhdGVSZWYiLCJiaW5kIiwibG9hZFRyYW5zcGFyZW50SW1hZ2UiLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJkcmFnSW1nIiwiSW1hZ2UiLCJzcmMiLCJzZXRTdGF0ZSIsImRhdGFUcmFuc2ZlciIsInNldERyYWdJbWFnZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInByb2dyZXNzQmFyV2lkdGgiLCJNYXRoIiwiY2VpbCIsIm5hdGl2ZUV2ZW50Iiwic2xpZGVyVmFsdWUiLCJnZXRTbGlkZXJWYWx1ZSIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2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LEtBQUtHLGVBSHhCO0FBSUUsOEJBQWtCLEtBQUtGLGdCQUp6QjtBQUtFLGlDQUFxQixLQUFLQztBQUw1QjtBQURGO0FBTkYsT0FERjtBQWtCRDs7OztFQW5Ga0I0QixnQjs7a0JBc0ZOckIsTTs7Ozs7Ozs7Ozs7Ozs7QUM1RmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTtBQUNBc0IsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsYUFBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUF6QixFOzs7Ozs7Ozs7OztBQ1BBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc3hcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vY29tcG9uZW50cy9TbGlkZXInO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTbGlkZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZnMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiIHJlZj17cmVmc30+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9wcy5maWxsVmFsdWV9JWAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyLWFtb3VudFwiXG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlZWtCYXIoe1xuICBjbGllbnRYLFxuICBzdGFydERyYWdnaW5nLFxuICBoYW5kbGVPbkRyYWdnaW5nLFxuICBoYW5kbGVTdGFydERyYWdnaW5nLFxuICBoYW5kbGVPbkRyYWdFbmQsXG59KSB7XG4gIGNvbnN0IHNlZWtCYXJTdHlsZSA9IHtcbiAgICBsZWZ0OiBjbGllbnRYLFxuICAgIGJveFNoYWRvdzogYCR7c3RhcnREcmFnZ2luZyA/ICcwcHggMHB4IDNweCA5cHggIzVhN2NmZjUyJyA6ICcnfWAsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17c2Vla0JhclN0eWxlfVxuICAgICAgY2xhc3NOYW1lPVwic2Vlay1iYXJcIlxuICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXG4gICAgICBvbkRyYWc9e2V2ZW50ID0+IGhhbmRsZU9uRHJhZ2dpbmcoZXZlbnQpfVxuICAgICAgb25EcmFnU3RhcnQ9e2V2ZW50ID0+IGhhbmRsZVN0YXJ0RHJhZ2dpbmcoZXZlbnQpfVxuICAgICAgb25EcmFnRW5kPXtldmVudCA9PiBoYW5kbGVPbkRyYWdFbmQoZXZlbnQpfVxuICAgIC8+XG4gICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uL1Byb2dyZXNzQmFyJztcbmltcG9ydCBTZWVrQmFyIGZyb20gJy4uL1NlZWtCYXInO1xuXG5jb25zdCBTRUVLQkFSX01BUkdJTiA9IDEwO1xuXG5jbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydERyYWdnaW5nOiBmYWxzZSxcbiAgICAgIGNsaWVudFg6IDAsXG4gICAgfTtcblxuICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLndpZHRoID0gMDtcblxuICAgIHRoaXMuaGFuZGxlT25EcmFnZ2luZyA9IHRoaXMuaGFuZGxlT25EcmFnZ2luZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3RhcnREcmFnZ2luZyA9IHRoaXMuaGFuZGxlU3RhcnREcmFnZ2luZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlT25EcmFnRW5kID0gdGhpcy5oYW5kbGVPbkRyYWdFbmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZFRyYW5zcGFyZW50SW1hZ2UoKTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5wcm9ncmVzc0Jhci5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICB9XG5cbiAgbG9hZFRyYW5zcGFyZW50SW1hZ2UoKSB7XG4gICAgdGhpcy5kcmFnSW1nID0gbmV3IEltYWdlKDAsIDApO1xuICAgIHRoaXMuZHJhZ0ltZy5zcmMgPVxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNyc7XG4gIH1cblxuICBoYW5kbGVPbkRyYWdFbmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RHJhZ2dpbmc6IGZhbHNlIH0pO1xuICB9XG5cbiAgaGFuZGxlU3RhcnREcmFnZ2luZyhldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UodGhpcy5kcmFnSW1nLCAwLCAwKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERyYWdnaW5nOiB0cnVlIH0pO1xuICB9XG5cbiAgaGFuZGxlT25EcmFnZ2luZyhldmVudCkge1xuICAgIC8vIEdldCB0aGUgUmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIFNlZWtCYXIuLi5cbiAgICBjb25zdCB7IGxlZnQgfSA9IHRoaXMucHJvZ3Jlc3NCYXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gdGhpcy5wcm9ncmVzc0Jhci5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGNsaWVudFggPSBNYXRoLmNlaWwoXG4gICAgICBldmVudC5uYXRpdmVFdmVudC5jbGllbnRYIC0gKGxlZnQgKyBTRUVLQkFSX01BUkdJTilcbiAgICApO1xuXG4gICAgaWYgKGNsaWVudFggPCAwKSByZXR1cm47XG5cbiAgICBpZiAoY2xpZW50WCA8IHByb2dyZXNzQmFyV2lkdGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGllbnRYOiBjbGllbnRYLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2xpZGVyVmFsdWUoKSB7XG4gICAgY29uc3QgeyBjbGllbnRYIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNsaWRlclZhbHVlID0gTWF0aC5jZWlsKChjbGllbnRYIC8gdGhpcy53aWR0aCkgKiAxMDApO1xuXG4gICAgcmV0dXJuIHNsaWRlclZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgc3RhcnREcmFnZ2luZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LXNsaWRlclwiPlxuICAgICAgICA8aDE+UmVhY3QgU2xpZGVyPC9oMT5cblxuICAgICAgICA8c21hbGw+QSBzaW1wbGUgc2xpZGVyIGJ1aWxkIHVzaW5nIFJlYWN0SlM8L3NtYWxsPlxuXG4gICAgICAgIDxwPlZhbHVlOiB7dGhpcy5nZXRTbGlkZXJWYWx1ZSgpIHx8IDB9PC9wPlxuICAgICAgICA8UHJvZ3Jlc3NCYXIgcmVmPXt0aGlzLnByb2dyZXNzQmFyfSBmaWxsVmFsdWU9e3RoaXMuZ2V0U2xpZGVyVmFsdWUoKX0+XG4gICAgICAgICAgPFNlZWtCYXJcbiAgICAgICAgICAgIGNsaWVudFg9e2NsaWVudFh9XG4gICAgICAgICAgICBzdGFydERyYWdnaW5nPXtzdGFydERyYWdnaW5nfVxuICAgICAgICAgICAgaGFuZGxlT25EcmFnRW5kPXt0aGlzLmhhbmRsZU9uRHJhZ0VuZH1cbiAgICAgICAgICAgIGhhbmRsZU9uRHJhZ2dpbmc9e3RoaXMuaGFuZGxlT25EcmFnZ2luZ31cbiAgICAgICAgICAgIGhhbmRsZVN0YXJ0RHJhZ2dpbmc9e3RoaXMuaGFuZGxlU3RhcnREcmFnZ2luZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1Byb2dyZXNzQmFyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG4vLyBSZW5kZXIgaW4gcm9vdCBjb250YWluZXIuLi5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9