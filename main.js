/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var React = _interopRequire(__webpack_require__(1));
	
	var App = _interopRequire(__webpack_require__(2));
	
	var css = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"style!css!../../../dist/css/scrollbar.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	React.render(React.createElement(App, null), document.getElementById("main"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./lib/React\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var React = _interopRequire(__webpack_require__(1));
	
	var ScrollArea = _interopRequire(__webpack_require__(3));
	
	var App = (function (_React$Component) {
	    function App(props) {
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), "constructor", this).call(this, props);
	
	        this.state = {
	            itemsCount: 10
	        };
	    }
	
	    _inherits(App, _React$Component);
	
	    _createClass(App, {
	        handleAddClick: {
	            value: function handleAddClick() {
	                this.setState({ itemsCount: this.state.itemsCount + 10 });
	            }
	        },
	        render: {
	            value: function render() {
	                var itemElements = [];
	
	                for (var i = 0; i < this.state.itemsCount; i++) {
	                    itemElements.push(React.createElement(
	                        "div",
	                        { className: "item" },
	                        "item ",
	                        i
	                    ));
	                }
	
	                return React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        ScrollArea,
	                        { className: "area", contentClassName: "content" },
	                        itemElements
	                    )
	                );
	            }
	        }
	    });
	
	    return App;
	})(React.Component);
	
	module.exports = App;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var React = _interopRequire(__webpack_require__(1));
	
	var Scrollbar = _interopRequire(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./scrollBar\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	
	var ScrollArea = (function (_React$Component) {
	    function ScrollArea(props) {
	        _classCallCheck(this, ScrollArea);
	
	        _get(Object.getPrototypeOf(ScrollArea.prototype), "constructor", this).call(this, props);
	        this.state = {
	            topPosition: 0,
	            leftPosition: 0,
	            realHeight: 0,
	            containerHeight: 0,
	            realWidth: 0,
	            containerWidth: 0,
	            scrollableX: false,
	            scrollableY: false
	        };
	
	        this.bindedHandleWindowResize = this.handleWindowResize.bind(this);
	    }
	
	    _inherits(ScrollArea, _React$Component);
	
	    _createClass(ScrollArea, {
	        componentDidMount: {
	            value: function componentDidMount() {
	                window.addEventListener("resize", this.bindedHandleWindowResize);
	                this.setSizesToState();
	            }
	        },
	        componentWillUnmount: {
	            value: function componentWillUnmount() {
	                window.removeEventListener("resize", this.bindedHandleWindowResize);
	            }
	        },
	        componentDidUpdate: {
	            value: function componentDidUpdate() {
	                this.setSizesToState();
	            }
	        },
	        render: {
	            value: function render() {
	                var style = {
	                    marginTop: this.state.topPosition,
	                    marginLeft: this.state.leftPosition
	                };
	
	                var scrollbarY = this.canScrollY() ? React.createElement(Scrollbar, {
	                    realSize: this.state.realHeight,
	                    containerSize: this.state.containerHeight,
	                    position: -this.state.topPosition,
	                    onMove: this.handleMove.bind(this),
	                    type: "vertical" }) : null;
	
	                var scrollbarX = this.canScrollX() ? React.createElement(Scrollbar, {
	                    realSize: this.state.realWidth,
	                    containerSize: this.state.containerWidth,
	                    position: -this.state.leftPosition,
	                    onMove: this.handleMove.bind(this),
	                    type: "horizontal" }) : null;
	
	                var classes = "scrollarea " + this.props.className;
	                var contentClasses = "scrollarea-content " + this.props.contentClassName;
	                return React.createElement(
	                    "div",
	                    { className: classes, onWheel: this.handleWheel.bind(this) },
	                    React.createElement(
	                        "div",
	                        { ref: "content", style: style, className: contentClasses },
	                        this.props.children
	                    ),
	                    scrollbarY,
	                    scrollbarX
	                );
	            }
	        },
	        handleMove: {
	            value: function handleMove(deltaY, deltaX) {
	                var newState = this.computeSizes();
	                if (this.canScrollY(newState)) {
	                    newState.topPosition = this.computeTopPosition(deltaY, newState);
	                }
	                if (this.canScrollX(newState)) {
	                    newState.leftPosition = this.computeLeftPosition(deltaX, newState);
	                }
	                this.setState(newState);
	            }
	        },
	        handleWheel: {
	            value: function handleWheel(e) {
	                var newState = this.computeSizes();
	                var deltaY = e.deltaY * this.props.speed;
	                var deltaX = e.deltaX * this.props.speed;
	
	                if (this.canScrollY(newState)) {
	                    newState.topPosition = this.computeTopPosition(-deltaY, newState);
	                }
	
	                if (this.canScrollX(newState)) {
	                    newState.leftPosition = this.computeLeftPosition(-deltaX, newState);
	                }
	
	                if (this.state.topPosition !== newState.topPosition || this.state.leftPosition !== newState.leftPosition) {
	                    e.preventDefault();
	                }
	
	                this.setState(newState);
	            }
	        },
	        computeTopPosition: {
	            value: function computeTopPosition(deltaY, sizes) {
	                var newTopPosition = this.state.topPosition + deltaY;
	
	                if (-newTopPosition > sizes.realHeight - sizes.containerHeight) {
	                    newTopPosition = -(sizes.realHeight - sizes.containerHeight);
	                }
	                if (newTopPosition > 0) {
	                    newTopPosition = 0;
	                }
	                return newTopPosition;
	            }
	        },
	        computeLeftPosition: {
	            value: function computeLeftPosition(deltaX, sizes) {
	                var newLeftPosition = this.state.leftPosition + deltaX;
	                if (-newLeftPosition > sizes.realWidth - sizes.containerWidth) {
	                    newLeftPosition = -(sizes.realWidth - sizes.containerWidth);
	                } else if (newLeftPosition > 0) {
	                    newLeftPosition = 0;
	                }
	
	                return newLeftPosition;
	            }
	        },
	        handleWindowResize: {
	            value: function handleWindowResize() {
	                var newState = this.computeSizes();
	                var bottomPosition = newState.realHeight - newState.containerHeight;
	                if (-this.state.topPosition >= bottomPosition) {
	                    newState.topPosition = this.canScrollY(newState) ? -bottomPosition : 0;
	                }
	
	                var rightPosition = newState.realWidth - newState.containerWidth;
	                if (-this.state.leftPosition >= rightPosition) {
	                    newState.leftPosition = this.canScrollX(newState) ? -rightPosition : 0;
	                }
	
	                this.setState(newState);
	            }
	        },
	        computeSizes: {
	            value: function computeSizes() {
	                var realHeight = React.findDOMNode(this.refs.content).offsetHeight;
	                var containerHeight = React.findDOMNode(this).offsetHeight;
	                var realWidth = React.findDOMNode(this.refs.content).offsetWidth;
	                var containerWidth = React.findDOMNode(this).offsetWidth;
	                var scrollableY = realHeight > containerHeight || this.state.topPosition != 0;
	                var scrollableX = realWidth > containerWidth || this.state.leftPosition != 0;
	
	                return {
	                    realHeight: realHeight,
	                    containerHeight: containerHeight,
	                    realWidth: realWidth,
	                    containerWidth: containerWidth,
	                    scrollableX: scrollableX,
	                    scrollableY: scrollableY
	                };
	            }
	        },
	        setSizesToState: {
	            value: function setSizesToState() {
	                var sizes = this.computeSizes();
	                if (sizes.realHeight !== this.state.realHeight || sizes.realWidth !== this.state.realWidth) {
	                    this.setState(sizes);
	                }
	            }
	        },
	        scrollTop: {
	            value: function scrollTop() {
	                this.setState({ topPosition: 0 });
	            }
	        },
	        scrollBottom: {
	            value: function scrollBottom() {
	                this.setState({ topPosition: -(this.state.realHeight - this.state.containerHeight) });
	            }
	        },
	        canScrollY: {
	            value: function canScrollY() {
	                var state = arguments[0] === undefined ? this.state : arguments[0];
	
	                return state.scrollableY && this.props.vertical;
	            }
	        },
	        canScrollX: {
	            value: function canScrollX() {
	                var state = arguments[0] === undefined ? this.state : arguments[0];
	
	                return state.scrollableX && this.props.horizontal;
	            }
	        }
	    });
	
	    return ScrollArea;
	})(React.Component);
	
	ScrollArea.propTypes = {
	    className: React.PropTypes.string,
	    speed: React.PropTypes.number,
	    contentClassName: React.PropTypes.string,
	    vertical: React.PropTypes.bool,
	    horizontal: React.PropTypes.bool
	};
	
	ScrollArea.defaultProps = {
	    speed: 1,
	    vertical: true,
	    horizontal: true
	};
	
	module.exports = ScrollArea;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDhhZmI5YmJlZjc3MjgwNzkyY2YiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvYmFzaWMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L3JlYWN0LmpzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL2Jhc2ljL2pzL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsLWFyZWEvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztLQ3RDTyxLQUFLLHVDQUFNLENBQU87O0tBQ2xCLEdBQUcsdUNBQU0sQ0FBVzs7QUFFM0IsS0FBSSxHQUFHLEdBQUcsbUJBQU8sQ0FBQyxxS0FBMkMsQ0FBQyxDQUFDOztBQUUvRCxNQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQzs7Ozs7O0FDTDdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDQU8sS0FBSyx1Q0FBTSxDQUFPOztLQUVsQixVQUFVLHVDQUFNLENBQWtEOztLQUVuRSxHQUFHO0FBQ00sY0FEVCxHQUFHLENBQ08sS0FBSyxFQUFDOytCQURoQixHQUFHOztBQUVELG9DQUZGLEdBQUcsNkNBRUssS0FBSyxFQUFFOztBQUViLGFBQUksQ0FBQyxLQUFLLEdBQUc7QUFDVCx1QkFBVSxFQUFHLEVBQUU7VUFDbEIsQ0FBQztNQUNMOztlQVBDLEdBQUc7O2tCQUFILEdBQUc7QUFVTCx1QkFBYztv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O0FBRUYsV0FBVSxDQUFDLFlBQVksR0FBRztBQUN0QixVQUFLLEVBQUUsQ0FBQztBQUNSLGFBQVEsRUFBRSxJQUFJO0FBQ2QsZUFBVSxFQUFFLElBQUk7RUFDbkIsQ0FBQzs7a0JBRWEsVUFBVSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDQ4YWZiOWJiZWY3NzI4MDc5MmNmXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanN4JztcblxudmFyIGNzcyA9IHJlcXVpcmUoXCJzdHlsZSFjc3MhLi4vLi4vLi4vZGlzdC9jc3Mvc2Nyb2xsYmFyLmNzc1wiKTtcblxuUmVhY3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBudWxsKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvYmFzaWMvanMvbWFpbi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvUmVhY3QnKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0L3JlYWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU2Nyb2xsQXJlYSBmcm9tICcuLi8uLi8uLi9zcmMvanMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9pbmRleC5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGl0ZW1zQ291bnQgOiAxMFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgaGFuZGxlQWRkQ2xpY2soKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXRlbXNDb3VudDogdGhpcy5zdGF0ZS5pdGVtc0NvdW50ICsgMTB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBpdGVtRWxlbWVudHMgPSBbXTtcblxuICAgICAgICBmb3IoIHZhciBpID0gMDsgaTwgdGhpcy5zdGF0ZS5pdGVtc0NvdW50OyBpKyspe1xuICAgICAgICAgICAgaXRlbUVsZW1lbnRzLnB1c2goPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+aXRlbSB7aX08L2Rpdj4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNjcm9sbEFyZWEgY2xhc3NOYW1lPVwiYXJlYVwiIGNvbnRlbnRDbGFzc05hbWU9XCJjb250ZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1FbGVtZW50c31cblxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsQXJlYT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvYmFzaWMvanMvYXBwLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2Nyb2xsYmFyIGZyb20gJy4vc2Nyb2xsQmFyJztcblxuY2xhc3MgU2Nyb2xsQXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvcFBvc2l0aW9uOiAwLFxuICAgICAgICAgICAgbGVmdFBvc2l0aW9uOiAwLFxuICAgICAgICAgICAgcmVhbEhlaWdodDogMCxcbiAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodDogMCxcbiAgICAgICAgICAgIHJlYWxXaWR0aDogMCxcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiAwLFxuICAgICAgICAgICAgc2Nyb2xsYWJsZVg6IGZhbHNlLFxuICAgICAgICAgICAgc2Nyb2xsYWJsZVk6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5iaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUgPSB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgdGhpcy5zZXRTaXplc1RvU3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmJpbmRlZEhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgICAgIHRoaXMuc2V0U2l6ZXNUb1N0YXRlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhpcy5zdGF0ZS50b3BQb3NpdGlvbixcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNjcm9sbGJhclkgPSB0aGlzLmNhblNjcm9sbFkoKT8gKFxuICAgICAgICAgICAgPFNjcm9sbGJhclxuICAgICAgICAgICAgICAgIHJlYWxTaXplPXt0aGlzLnN0YXRlLnJlYWxIZWlnaHR9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2l6ZT17dGhpcy5zdGF0ZS5jb250YWluZXJIZWlnaHR9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249ey10aGlzLnN0YXRlLnRvcFBvc2l0aW9ufVxuICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgdHlwZT1cInZlcnRpY2FsXCIvPlxuICAgICAgICApOiBudWxsO1xuXG4gICAgICAgIHZhciBzY3JvbGxiYXJYID0gdGhpcy5jYW5TY3JvbGxYKCk/IChcbiAgICAgICAgICAgIDxTY3JvbGxiYXJcbiAgICAgICAgICAgICAgICByZWFsU2l6ZT17dGhpcy5zdGF0ZS5yZWFsV2lkdGh9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2l6ZT17dGhpcy5zdGF0ZS5jb250YWluZXJXaWR0aH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17LXRoaXMuc3RhdGUubGVmdFBvc2l0aW9ufVxuICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgdHlwZT1cImhvcml6b250YWxcIi8+XG4gICAgICAgICk6IG51bGw7XG5cbiAgICAgICAgdmFyIGNsYXNzZXMgPSAnc2Nyb2xsYXJlYSAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHZhciBjb250ZW50Q2xhc3NlcyA9ICdzY3JvbGxhcmVhLWNvbnRlbnQgJyArIHRoaXMucHJvcHMuY29udGVudENsYXNzTmFtZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPGRpdiByZWY9XCJjb250ZW50XCIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc2VzfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3Njcm9sbGJhcll9XG4gICAgICAgICAgICAgICAge3Njcm9sbGJhclh9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3ZlKGRlbHRhWSwgZGVsdGFYKXtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gdGhpcy5jb21wdXRlU2l6ZXMoKTtcbiAgICAgICAgaWYodGhpcy5jYW5TY3JvbGxZKG5ld1N0YXRlKSl7XG4gICAgICAgICAgICBuZXdTdGF0ZS50b3BQb3NpdGlvbiA9IHRoaXMuY29tcHV0ZVRvcFBvc2l0aW9uKGRlbHRhWSwgbmV3U3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuY2FuU2Nyb2xsWChuZXdTdGF0ZSkpe1xuICAgICAgICAgICAgbmV3U3RhdGUubGVmdFBvc2l0aW9uID0gdGhpcy5jb21wdXRlTGVmdFBvc2l0aW9uKGRlbHRhWCwgbmV3U3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGhhbmRsZVdoZWVsKGUpe1xuICAgICAgICB2YXIgbmV3U3RhdGUgPSB0aGlzLmNvbXB1dGVTaXplcygpO1xuICAgICAgICB2YXIgZGVsdGFZID0gZS5kZWx0YVkgKiB0aGlzLnByb3BzLnNwZWVkO1xuICAgICAgICB2YXIgZGVsdGFYID0gZS5kZWx0YVggKiB0aGlzLnByb3BzLnNwZWVkO1xuXG4gICAgICAgIGlmKHRoaXMuY2FuU2Nyb2xsWShuZXdTdGF0ZSkpe1xuICAgICAgICAgICAgbmV3U3RhdGUudG9wUG9zaXRpb24gPSB0aGlzLmNvbXB1dGVUb3BQb3NpdGlvbigtZGVsdGFZLCBuZXdTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmNhblNjcm9sbFgobmV3U3RhdGUpKXtcbiAgICAgICAgICAgIG5ld1N0YXRlLmxlZnRQb3NpdGlvbiA9IHRoaXMuY29tcHV0ZUxlZnRQb3NpdGlvbigtZGVsdGFYLCBuZXdTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnN0YXRlLnRvcFBvc2l0aW9uICE9PSBuZXdTdGF0ZS50b3BQb3NpdGlvbiB8fCB0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiAhPT0gbmV3U3RhdGUubGVmdFBvc2l0aW9uKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNvbXB1dGVUb3BQb3NpdGlvbihkZWx0YVksIHNpemVzKXtcbiAgICAgICAgdmFyIG5ld1RvcFBvc2l0aW9uID0gdGhpcy5zdGF0ZS50b3BQb3NpdGlvbiArIGRlbHRhWTtcblxuICAgICAgICBpZigtbmV3VG9wUG9zaXRpb24gPiBzaXplcy5yZWFsSGVpZ2h0IC0gc2l6ZXMuY29udGFpbmVySGVpZ2h0KXtcbiAgICAgICAgICAgIG5ld1RvcFBvc2l0aW9uID0gLShzaXplcy5yZWFsSGVpZ2h0IC0gc2l6ZXMuY29udGFpbmVySGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBpZihuZXdUb3BQb3NpdGlvbiA+IDApe1xuICAgICAgICAgICAgbmV3VG9wUG9zaXRpb24gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdUb3BQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBjb21wdXRlTGVmdFBvc2l0aW9uKGRlbHRhWCwgc2l6ZXMpe1xuICAgICAgICB2YXIgbmV3TGVmdFBvc2l0aW9uID0gdGhpcy5zdGF0ZS5sZWZ0UG9zaXRpb24gKyBkZWx0YVg7XG4gICAgICAgIGlmKC1uZXdMZWZ0UG9zaXRpb24gPiBzaXplcy5yZWFsV2lkdGggLSBzaXplcy5jb250YWluZXJXaWR0aCl7XG4gICAgICAgICAgICBuZXdMZWZ0UG9zaXRpb24gPSAtKHNpemVzLnJlYWxXaWR0aCAtIHNpemVzLmNvbnRhaW5lcldpZHRoKTtcbiAgICAgICAgfSBlbHNlIGlmKG5ld0xlZnRQb3NpdGlvbiA+IDApe1xuICAgICAgICAgICAgbmV3TGVmdFBvc2l0aW9uID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdMZWZ0UG9zaXRpb247XG4gICAgfVxuXG4gICAgaGFuZGxlV2luZG93UmVzaXplKCl7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHRoaXMuY29tcHV0ZVNpemVzKCk7XG4gICAgICAgIHZhciBib3R0b21Qb3NpdGlvbiA9IG5ld1N0YXRlLnJlYWxIZWlnaHQgLSBuZXdTdGF0ZS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIGlmKC10aGlzLnN0YXRlLnRvcFBvc2l0aW9uID49IGJvdHRvbVBvc2l0aW9uKXtcbiAgICAgICAgICAgIG5ld1N0YXRlLnRvcFBvc2l0aW9uID0gdGhpcy5jYW5TY3JvbGxZKG5ld1N0YXRlKT8gLWJvdHRvbVBvc2l0aW9uOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJpZ2h0UG9zaXRpb24gPSBuZXdTdGF0ZS5yZWFsV2lkdGggLSBuZXdTdGF0ZS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgaWYoLXRoaXMuc3RhdGUubGVmdFBvc2l0aW9uID49IHJpZ2h0UG9zaXRpb24pe1xuICAgICAgICAgICAgbmV3U3RhdGUubGVmdFBvc2l0aW9uID0gdGhpcy5jYW5TY3JvbGxYKG5ld1N0YXRlKT8gLXJpZ2h0UG9zaXRpb246IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBjb21wdXRlU2l6ZXMoKXtcbiAgICAgICAgdmFyIHJlYWxIZWlnaHQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuY29udGVudCkub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgY29udGFpbmVySGVpZ2h0ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcykub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgcmVhbFdpZHRoID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmNvbnRlbnQpLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgY29udGFpbmVyV2lkdGggPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIHNjcm9sbGFibGVZID0gcmVhbEhlaWdodCA+IGNvbnRhaW5lckhlaWdodCB8fCB0aGlzLnN0YXRlLnRvcFBvc2l0aW9uICE9IDA7XG4gICAgICAgIHZhciBzY3JvbGxhYmxlWCA9IHJlYWxXaWR0aCA+IGNvbnRhaW5lcldpZHRoIHx8IHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uICE9IDA7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWxIZWlnaHQ6IHJlYWxIZWlnaHQsXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IGNvbnRhaW5lckhlaWdodCxcbiAgICAgICAgICAgIHJlYWxXaWR0aDogcmVhbFdpZHRoLFxuICAgICAgICAgICAgY29udGFpbmVyV2lkdGg6IGNvbnRhaW5lcldpZHRoLFxuICAgICAgICAgICAgc2Nyb2xsYWJsZVg6IHNjcm9sbGFibGVYLFxuICAgICAgICAgICAgc2Nyb2xsYWJsZVk6IHNjcm9sbGFibGVZXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0U2l6ZXNUb1N0YXRlKCl7XG4gICAgICAgIHZhciBzaXplcyA9IHRoaXMuY29tcHV0ZVNpemVzKCk7XG4gICAgICAgIGlmKHNpemVzLnJlYWxIZWlnaHQgIT09IHRoaXMuc3RhdGUucmVhbEhlaWdodCB8fCBzaXplcy5yZWFsV2lkdGggIT09IHRoaXMuc3RhdGUucmVhbFdpZHRoKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc2l6ZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9wKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvcFBvc2l0aW9uOiAwfSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsQm90dG9tKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvcFBvc2l0aW9uOiAtKHRoaXMuc3RhdGUucmVhbEhlaWdodCAtIHRoaXMuc3RhdGUuY29udGFpbmVySGVpZ2h0KX0pO1xuICAgIH1cblxuICAgIGNhblNjcm9sbFkoc3RhdGUgPSB0aGlzLnN0YXRlKXtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnNjcm9sbGFibGVZICYmIHRoaXMucHJvcHMudmVydGljYWw7XG4gICAgfVxuXG4gICAgY2FuU2Nyb2xsWChzdGF0ZSA9IHRoaXMuc3RhdGUpe1xuICAgICAgICByZXR1cm4gc3RhdGUuc2Nyb2xsYWJsZVggJiYgdGhpcy5wcm9wcy5ob3Jpem9udGFsO1xuICAgIH1cbn1cblxuU2Nyb2xsQXJlYS5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwZWVkOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbnRlbnRDbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmVydGljYWw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGhvcml6b250YWw6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5TY3JvbGxBcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzcGVlZDogMSxcbiAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICBob3Jpem9udGFsOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxBcmVhO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9pbmRleC5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9