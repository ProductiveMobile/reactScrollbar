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
	
	var React = _interopRequire(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	
	var App = _interopRequire(__webpack_require__(1));
	
	React.render(React.createElement(App, null), document.getElementById("main"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var React = _interopRequire(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	
	var ScrollArea = _interopRequire(__webpack_require__(2));
	
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
	          { className: "area" },
	          React.createElement(
	            ScrollArea,
	            null,
	            React.createElement(
	              "div",
	              { className: "content" },
	              itemElements
	            )
	          )
	        );
	      }
	    }
	  });
	
	  return App;
	})(React.Component);
	
	module.exports = App;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var React = _interopRequire(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	
	var Scrollbar = _interopRequire(__webpack_require__(3));
	
	var styles = _interopRequire(__webpack_require__(5));
	
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
	
	    this.width = 0;
	    this.height = 0;
	
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
	    setHovered: {
	      value: function setHovered() {
	        this.setState({
	          isHovered: true
	        });
	      }
	    },
	    unsetHovered: {
	      value: function unsetHovered() {
	        this.setState({
	          isHovered: false
	        });
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
	        var realHeight = this.contentNode.offsetHeight;
	        var containerHeight = React.findDOMNode(this).offsetHeight;
	        var realWidth = this.contentNode.offsetWidth;
	        var containerWidth = React.findDOMNode(this).offsetWidth;
	        var scrollableY = realHeight > containerHeight || this.state.topPosition !== 0;
	        var scrollableX = realWidth > containerWidth || this.state.leftPosition !== 0;
	
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
	    },
	    onContentMount: {
	      value: function onContentMount(content) {
	        var node = React.findDOMNode(content);
	        this.contentNode = node;
	      }
	    },
	    render: {
	      value: function render() {
	        var _props = this.props;
	        var style = _props.style;
	        var contentStyle = _props.contentStyle;
	        var scrollBarContainerStyle = _props.scrollBarContainerStyle;
	        var scrollBarStyle = _props.scrollBarStyle;
	
	        contentStyle = Object.assign({}, styles.__content, {
	          marginTop: this.state.topPosition,
	          marginLeft: this.state.leftPosition
	        }, contentStyle);
	
	        var containerStyle = Object.assign({}, styles.block, style);
	
	        var scrollbarY = this.canScrollY() ? React.createElement(Scrollbar, {
	          realSize: this.state.realHeight,
	          containerSize: this.state.containerHeight,
	          position: -this.state.topPosition,
	          onMove: this.handleMove.bind(this),
	          isContainerHovered: this.state.isHovered,
	          style: scrollBarContainerStyle,
	          scrollBarStyle: scrollBarStyle,
	          type: "vertical" }) : null;
	
	        var scrollbarX = this.canScrollX() ? React.createElement(Scrollbar, {
	          realSize: this.state.realWidth,
	          containerSize: this.state.containerWidth,
	          position: -this.state.leftPosition,
	          onMove: this.handleMove.bind(this),
	          isContainerHovered: this.state.isHovered,
	          style: scrollBarContainerStyle,
	          scrollBarStyle: scrollBarStyle,
	          type: "horizontal" }) : null;
	
	        return React.createElement(
	          "div",
	          {
	            onMouseEnter: this.setHovered.bind(this),
	            onMouseLeave: this.unsetHovered.bind(this),
	            onWheel: this.handleWheel.bind(this),
	            style: containerStyle },
	          React.createElement(
	            "div",
	            { ref: this.onContentMount.bind(this), style: contentStyle },
	            this.props.children
	          ),
	          scrollbarY,
	          scrollbarX
	        );
	      }
	    }
	  });
	
	  return ScrollArea;
	})(React.Component);
	
	ScrollArea.propTypes = {
	  style: React.PropTypes.object,
	  contentStyle: React.PropTypes.object,
	  scrollBarContainerStyle: React.PropTypes.object,
	  scrollBarStyle: React.PropTypes.object,
	  speed: React.PropTypes.number,
	  contentClassName: React.PropTypes.string,
	  vertical: React.PropTypes.bool,
	  horizontal: React.PropTypes.bool,
	  children: React.PropTypes.element
	};
	
	ScrollArea.defaultProps = {
	  speed: 1,
	  vertical: true,
	  horizontal: true
	};
	
	module.exports = ScrollArea;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var React = _interopRequire(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	
	var styles = _interopRequire(__webpack_require__(4));
	
	var ScrollBar = (function (_React$Component) {
	  function ScrollBar(props) {
	    _classCallCheck(this, ScrollBar);
	
	    _get(Object.getPrototypeOf(ScrollBar.prototype), "constructor", this).call(this, props);
	    var newState = this.calculateState(props);
	
	    this.state = Object.assign({}, newState, {
	      isDragging: false,
	      lastClientPosition: 0,
	      isHovered: false
	    });
	
	    if (props.type === "vertical") {
	      this.bindedHandleMouseMove = this.handleMouseMoveForVertical.bind(this);
	    } else {
	      this.bindedHandleMouseMove = this.handleMouseMoveForHorizontal.bind(this);
	    }
	
	    this.bindedHandleMouseUp = this.handleMouseUp.bind(this);
	  }
	
	  _inherits(ScrollBar, _React$Component);
	
	  _createClass(ScrollBar, {
	    componentDidMount: {
	      value: function componentDidMount() {
	        document.addEventListener("mousemove", this.bindedHandleMouseMove);
	        document.addEventListener("mouseup", this.bindedHandleMouseUp);
	      }
	    },
	    componentWillReceiveProps: {
	      value: function componentWillReceiveProps(nextProps) {
	        this.setState(this.calculateState(nextProps));
	      }
	    },
	    componentWillUnmount: {
	      value: function componentWillUnmount() {
	        document.removeEventListener("mousemove", this.bindedHandleMouseMove);
	        document.removeEventListener("mouseup", this.bindedHandleMouseUp);
	      }
	    },
	    calculateState: {
	      value: function calculateState(props) {
	        var scrollSize = props.containerSize * props.containerSize / props.realSize;
	        var multiplier = props.containerSize / props.realSize;
	        var position = props.position * multiplier;
	
	        return {
	          scrollSize: scrollSize,
	          position: position
	        };
	      }
	    },
	    setHovered: {
	      value: function setHovered() {
	        this.setState({
	          isHovered: true
	        });
	      }
	    },
	    unsetHovered: {
	      value: function unsetHovered() {
	        this.setState({
	          isHovered: false
	        });
	      }
	    },
	    handleMouseMoveForHorizontal: {
	      value: function handleMouseMoveForHorizontal(e) {
	        var multiplier = this.props.containerSize / this.props.realSize;
	        if (this.state.isDragging) {
	          e.preventDefault();
	          var deltaX = this.state.lastClientPosition - e.clientX;
	          this.setState({ lastClientPosition: e.clientX });
	          this.props.onMove(0, deltaX / multiplier);
	        }
	      }
	    },
	    handleMouseMoveForVertical: {
	      value: function handleMouseMoveForVertical(e) {
	        var multiplier = this.props.containerSize / this.props.realSize;
	        if (this.state.isDragging) {
	          e.preventDefault();
	          var deltaY = this.state.lastClientPosition - e.clientY;
	          this.setState({ lastClientPosition: e.clientY });
	          this.props.onMove(deltaY / multiplier, 0);
	        }
	      }
	    },
	    handleMouseDown: {
	      value: function handleMouseDown(e) {
	        var lastClientPosition = this.props.type === "vertical" ? e.clientY : e.clientX;
	        this.setState({ isDragging: true, lastClientPosition: lastClientPosition });
	      }
	    },
	    handleMouseUp: {
	      value: function handleMouseUp() {
	        this.setState({ isDragging: false });
	      }
	    },
	    createScrollStyles: {
	      value: function createScrollStyles() {
	        if (this.props.type === "vertical") {
	          return Object.assign({}, styles.__scrollbar_vertical, {
	            height: this.state.scrollSize,
	            marginTop: this.state.position
	          });
	        } else {
	          return Object.assign({}, styles.__scrollbar_horizontal, {
	            width: this.state.scrollSize,
	            marginLeft: this.state.position
	          });
	        }
	      }
	    },
	    render: {
	      value: function render() {
	        var _props = this.props;
	        var style = _props.style;
	        var scrollBarStyle = _props.scrollBarStyle;
	
	        var scrollStyle = this.createScrollStyles();
	
	        var containerStyle = styles.block;
	
	        if (this.props.type === "horizontal") {
	          containerStyle = Object.assign({}, containerStyle, styles._horizontal);
	        }
	
	        if (this.props.type === "vertical") {
	          containerStyle = Object.assign({}, containerStyle, styles._vertical);
	        }
	
	        if (this.state.isHovered) {
	          containerStyle = Object.assign({}, containerStyle, styles.__scrollbar_hovered);
	        }
	
	        if (this.props.isContainerHovered) {
	          containerStyle = Object.assign({}, containerStyle, styles._hovered);
	        }
	
	        containerStyle = Object.assign({}, containerStyle, style);
	
	        scrollStyle = Object.assign({}, scrollStyle, scrollBarStyle);
	
	        return React.createElement(
	          "div",
	          {
	            onMouseEnter: this.setHovered.bind(this),
	            onMouseLeave: this.unsetHovered.bind(this),
	            style: containerStyle },
	          React.createElement("div", {
	            style: scrollStyle,
	            onMouseDown: this.handleMouseDown.bind(this) })
	        );
	      }
	    }
	  });
	
	  return ScrollBar;
	})(React.Component);
	
	ScrollBar.propTypes = {
	  style: React.PropTypes.object,
	  scrollBarStyle: React.PropTypes.object,
	  onMove: React.PropTypes.func,
	  realSize: React.PropTypes.number,
	  containerSize: React.PropTypes.number,
	  position: React.PropTypes.number,
	  type: React.PropTypes.oneOf(["vertical", "horizontal"]),
	  isContainerHovered: React.PropTypes.bool
	};
	
	ScrollBar.defaultProps = {
	  type: "vertical"
	};
	
	module.exports = ScrollBar;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* eslint-disable camelcase */
	
	"use strict";
	
	module.exports = {
	  block: {
	    position: "absolute",
	    background: "none",
	    opacity: "0.1",
	    zIndex: 9999,
	    transition: "all 0.4s"
	  },
	
	  _hovered: {
	    opacity: "0.3"
	  },
	
	  __scrollbar_hovered: {
	    background: "gray",
	    opacity: "0.6"
	  },
	
	  _horizontal: {
	    width: "100%",
	    height: "10px",
	    left: 0,
	    bottom: 0
	  },
	
	  _vertical: {
	    width: "10px",
	    height: "100%",
	    right: 0,
	    top: 0
	  },
	
	  __scrollbar_horizontal: {
	    width: "20px",
	    height: "8px",
	    background: "black",
	    marginTop: "1px"
	  },
	
	  __scrollbar_vertical: {
	    width: "8px",
	    height: "20px",
	    background: "black",
	    marginTop: "1px"
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* eslint-disable camelcase */
	
	"use strict";
	
	module.exports = {
	  block: {
	    position: "relative",
	    overflow: "hidden",
	    height: "100%"
	  },
	
	  __content: {
	    margin: 0,
	    padding: 0,
	    overflow: "hidden",
	    position: "absolute"
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmFjZWFiMTgyMjdkNzRmMTkxOGYiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvYmFzaWMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9iYXNpYy9qcy9hcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3Njcm9sbC1hcmVhL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zY3JvbGwtYmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zY3JvbGwtYmFyL3N0eWxlcy5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsLWFyZWEvc3R5bGVzLmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7S0N0Q08sS0FBSyx1Q0FBTSxpSUFBTzs7S0FDbEIsR0FBRyx1Q0FBTSxDQUFPOztBQUV2QixNQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDSHRFLEtBQUssdUNBQU0saUlBQU87O0tBRWxCLFVBQVUsdUNBQU0sQ0FBd0M7O0tBRXpELEdBQUc7QUFDSSxZQURQLEdBQUcsQ0FDSyxLQUFLLEVBQUM7MkJBRGQsR0FBRzs7QUFFTCxnQ0FGRSxHQUFHLDZDQUVDLEtBQUssRUFBRTs7QUFFYixTQUFJLENBQUMsS0FB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QUFLLEVBQUUsTUFBTTtBQUNiLFdBQU0sRUFBRSxLQUFLO0FBQ2IsZUFBVSxFQUFFLE9BQU87QUFDbkIsY0FBUyxFQUFFLEtBQUs7SUFDakI7O0FBRUQsdUJBQW9CLEVBQUU7QUFDcEIsVUFBSyxFQUFFLEtBQUs7QUFDWixXQUFNLEVBQUUsTUFBTTtBQUNkLGVBQVUsRUFBRSxPQUFPO0FBQ25CLGNBQVMsRUFBRSxLQUFLO0lBQ2pCO0VBQ0YsQzs7Ozs7Ozs7OztrQkM3Q2M7QUFDYixRQUFLLEVBQUU7QUFDTCxhQUFRLEVBQUUsVUFBVTtBQUNwQixhQUFRLEVBQUUsUUFBUTtBQUNsQixXQUFNLEVBQUUsTUFBTTtJQUNmOztBQUdELFlBQVMsRUFBRTtBQUNULFdBQU0sRUFBRSxDQUFDO0FBQ1QsWUFBTyxFQUFFLENBQUM7QUFDVixhQUFRLEVBQUUsUUFBUTtBQUNsQixhQUFRLEVBQUUsVUFBVTtJQUNyQjtFQUNGLEMiLCJmaWxlIjoiMmFjZWFiMTgyMjdkNzRmMTkxOGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDJhY2VhYjE4MjI3ZDc0ZjE5MThmXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5SZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9iYXNpYy9qcy9tYWluLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU2Nyb2xsQXJlYSBmcm9tICcuLi8uLi8uLi9zcmMvanMvY29tcG9uZW50cy9zY3JvbGwtYXJlYSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtc0NvdW50IDogMTBcbiAgICB9O1xuICB9XG5cblxuICBoYW5kbGVBZGRDbGljaygpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1zQ291bnQ6IHRoaXMuc3RhdGUuaXRlbXNDb3VudCArIDEwfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGl0ZW1FbGVtZW50cyA9IFtdO1xuXG4gICAgZm9yKCB2YXIgaSA9IDA7IGk8IHRoaXMuc3RhdGUuaXRlbXNDb3VudDsgaSsrKXtcbiAgICAgIGl0ZW1FbGVtZW50cy5wdXNoKDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5pdGVtIHtpfTwvZGl2Pik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhJz5cbiAgICAgICAgPFNjcm9sbEFyZWE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICAgICAge2l0ZW1FbGVtZW50c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TY3JvbGxBcmVhPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9iYXNpYy9qcy9hcHAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY3JvbGxiYXIgZnJvbSAnLi4vc2Nyb2xsLWJhcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcblxuY2xhc3MgU2Nyb2xsQXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b3BQb3NpdGlvbjogMCxcbiAgICAgIGxlZnRQb3NpdGlvbjogMCxcbiAgICAgIHJlYWxIZWlnaHQ6IDAsXG4gICAgICBjb250YWluZXJIZWlnaHQ6IDAsXG4gICAgICByZWFsV2lkdGg6IDAsXG4gICAgICBjb250YWluZXJXaWR0aDogMCxcbiAgICAgIHNjcm9sbGFibGVYOiBmYWxzZSxcbiAgICAgIHNjcm9sbGFibGVZOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLndpZHRoID0wO1xuICAgIHRoaXMuaGVpZ2h0ID0gMDtcblxuICAgIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplID0gdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplKTtcbiAgICB0aGlzLnNldFNpemVzVG9TdGF0ZSgpO1xuICB9XG5cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5iaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUpO1xuICB9XG5cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5zZXRTaXplc1RvU3RhdGUoKTtcbiAgfVxuXG5cbiAgc2V0SG92ZXJlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzSG92ZXJlZDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cblxuICB1bnNldEhvdmVyZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0hvdmVyZWQ6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuXG4gIGhhbmRsZU1vdmUoZGVsdGFZLCBkZWx0YVgpIHtcbiAgICB2YXIgbmV3U3RhdGUgPSB0aGlzLmNvbXB1dGVTaXplcygpO1xuICAgIGlmICh0aGlzLmNhblNjcm9sbFkobmV3U3RhdGUpKSB7XG4gICAgICBuZXdTdGF0ZS50b3BQb3NpdGlvbiA9IHRoaXMuY29tcHV0ZVRvcFBvc2l0aW9uKGRlbHRhWSwgbmV3U3RhdGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYW5TY3JvbGxYKG5ld1N0YXRlKSkge1xuICAgICAgbmV3U3RhdGUubGVmdFBvc2l0aW9uID0gdGhpcy5jb21wdXRlTGVmdFBvc2l0aW9uKGRlbHRhWCwgbmV3U3RhdGUpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG5cbiAgaGFuZGxlV2hlZWwoZSkge1xuICAgIHZhciBuZXdTdGF0ZSA9IHRoaXMuY29tcHV0ZVNpemVzKCk7XG4gICAgdmFyIGRlbHRhWSA9IGUuZGVsdGFZICogdGhpcy5wcm9wcy5zcGVlZDtcbiAgICB2YXIgZGVsdGFYID0gZS5kZWx0YVggKiB0aGlzLnByb3BzLnNwZWVkO1xuXG4gICAgaWYgKHRoaXMuY2FuU2Nyb2xsWShuZXdTdGF0ZSkpIHtcbiAgICAgIG5ld1N0YXRlLnRvcFBvc2l0aW9uID0gdGhpcy5jb21wdXRlVG9wUG9zaXRpb24oLWRlbHRhWSwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhblNjcm9sbFgobmV3U3RhdGUpKSB7XG4gICAgICBuZXdTdGF0ZS5sZWZ0UG9zaXRpb24gPSB0aGlzLmNvbXB1dGVMZWZ0UG9zaXRpb24oLWRlbHRhWCwgbmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnRvcFBvc2l0aW9uICE9PSBuZXdTdGF0ZS50b3BQb3NpdGlvbiB8fCB0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiAhPT0gbmV3U3RhdGUubGVmdFBvc2l0aW9uKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuXG4gIGNvbXB1dGVUb3BQb3NpdGlvbihkZWx0YVksIHNpemVzKSB7XG4gICAgdmFyIG5ld1RvcFBvc2l0aW9uID0gdGhpcy5zdGF0ZS50b3BQb3NpdGlvbiArIGRlbHRhWTtcblxuICAgIGlmICgtbmV3VG9wUG9zaXRpb24gPiBzaXplcy5yZWFsSGVpZ2h0IC0gc2l6ZXMuY29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBuZXdUb3BQb3NpdGlvbiA9IC0oc2l6ZXMucmVhbEhlaWdodCAtIHNpemVzLmNvbnRhaW5lckhlaWdodCk7XG4gICAgfVxuICAgIGlmIChuZXdUb3BQb3NpdGlvbiA+IDApIHtcbiAgICAgIG5ld1RvcFBvc2l0aW9uID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1RvcFBvc2l0aW9uO1xuICB9XG5cblxuICBjb21wdXRlTGVmdFBvc2l0aW9uKGRlbHRhWCwgc2l6ZXMpIHtcbiAgICB2YXIgbmV3TGVmdFBvc2l0aW9uID0gdGhpcy5zdGF0ZS5sZWZ0UG9zaXRpb24gKyBkZWx0YVg7XG4gICAgaWYgKC1uZXdMZWZ0UG9zaXRpb24gPiBzaXplcy5yZWFsV2lkdGggLSBzaXplcy5jb250YWluZXJXaWR0aCkge1xuICAgICAgbmV3TGVmdFBvc2l0aW9uID0gLShzaXplcy5yZWFsV2lkdGggLSBzaXplcy5jb250YWluZXJXaWR0aCk7XG4gICAgfSBlbHNlIGlmIChuZXdMZWZ0UG9zaXRpb24gPiAwKSB7XG4gICAgICBuZXdMZWZ0UG9zaXRpb24gPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdMZWZ0UG9zaXRpb247XG4gIH1cblxuXG4gIGhhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgICB2YXIgbmV3U3RhdGUgPSB0aGlzLmNvbXB1dGVTaXplcygpO1xuICAgIHZhciBib3R0b21Qb3NpdGlvbiA9IG5ld1N0YXRlLnJlYWxIZWlnaHQgLSBuZXdTdGF0ZS5jb250YWluZXJIZWlnaHQ7XG4gICAgaWYgKC10aGlzLnN0YXRlLnRvcFBvc2l0aW9uID49IGJvdHRvbVBvc2l0aW9uKSB7XG4gICAgICBuZXdTdGF0ZS50b3BQb3NpdGlvbiA9IHRoaXMuY2FuU2Nyb2xsWShuZXdTdGF0ZSk/IC1ib3R0b21Qb3NpdGlvbjogMDtcbiAgICB9XG5cbiAgICB2YXIgcmlnaHRQb3NpdGlvbiA9IG5ld1N0YXRlLnJlYWxXaWR0aCAtIG5ld1N0YXRlLmNvbnRhaW5lcldpZHRoO1xuICAgIGlmICgtdGhpcy5zdGF0ZS5sZWZ0UG9zaXRpb24gPj0gcmlnaHRQb3NpdGlvbikge1xuICAgICAgbmV3U3RhdGUubGVmdFBvc2l0aW9uID0gdGhpcy5jYW5TY3JvbGxYKG5ld1N0YXRlKT8gLXJpZ2h0UG9zaXRpb246IDA7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuXG4gIGNvbXB1dGVTaXplcygpIHtcbiAgICB2YXIgcmVhbEhlaWdodCA9IHRoaXMuY29udGVudE5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciBjb250YWluZXJIZWlnaHQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzKS5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIHJlYWxXaWR0aCA9IHRoaXMuY29udGVudE5vZGUub2Zmc2V0V2lkdGg7XG4gICAgdmFyIGNvbnRhaW5lcldpZHRoID0gUmVhY3QuZmluZERPTU5vZGUodGhpcykub2Zmc2V0V2lkdGg7XG4gICAgdmFyIHNjcm9sbGFibGVZID0gcmVhbEhlaWdodCA+IGNvbnRhaW5lckhlaWdodCB8fFxuICAgICAgdGhpcy5zdGF0ZS50b3BQb3NpdGlvbiAhPT0gMDtcbiAgICB2YXIgc2Nyb2xsYWJsZVggPSByZWFsV2lkdGggPiBjb250YWluZXJXaWR0aCB8fFxuICAgICAgdGhpcy5zdGF0ZS5sZWZ0UG9zaXRpb24gIT09IDA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVhbEhlaWdodDogcmVhbEhlaWdodCxcbiAgICAgIGNvbnRhaW5lckhlaWdodDogY29udGFpbmVySGVpZ2h0LFxuICAgICAgcmVhbFdpZHRoOiByZWFsV2lkdGgsXG4gICAgICBjb250YWluZXJXaWR0aDogY29udGFpbmVyV2lkdGgsXG4gICAgICBzY3JvbGxhYmxlWDogc2Nyb2xsYWJsZVgsXG4gICAgICBzY3JvbGxhYmxlWTogc2Nyb2xsYWJsZVlcbiAgICB9O1xuICB9XG5cblxuICBzZXRTaXplc1RvU3RhdGUoKSB7XG4gICAgdmFyIHNpemVzID0gdGhpcy5jb21wdXRlU2l6ZXMoKTtcbiAgICBpZiAoc2l6ZXMucmVhbEhlaWdodCAhPT0gdGhpcy5zdGF0ZS5yZWFsSGVpZ2h0IHx8IHNpemVzLnJlYWxXaWR0aCAhPT0gdGhpcy5zdGF0ZS5yZWFsV2lkdGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc2l6ZXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgc2Nyb2xsVG9wKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RvcFBvc2l0aW9uOiAwfSk7XG4gIH1cblxuXG4gIHNjcm9sbEJvdHRvbSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0b3BQb3NpdGlvbjogLSh0aGlzLnN0YXRlLnJlYWxIZWlnaHQgLSB0aGlzLnN0YXRlLmNvbnRhaW5lckhlaWdodCl9KTtcbiAgfVxuXG5cbiAgY2FuU2Nyb2xsWShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuc2Nyb2xsYWJsZVkgJiYgdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgfVxuXG5cbiAgY2FuU2Nyb2xsWChzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuc2Nyb2xsYWJsZVggJiYgdGhpcy5wcm9wcy5ob3Jpem9udGFsO1xuICB9XG5cbiAgb25Db250ZW50TW91bnQoY29udGVudCkge1xuICAgIGxldCBub2RlID0gUmVhY3QuZmluZERPTU5vZGUoY29udGVudCk7XG4gICAgdGhpcy5jb250ZW50Tm9kZSA9IG5vZGU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtcbiAgICAgIHN0eWxlLFxuICAgICAgY29udGVudFN0eWxlLFxuICAgICAgc2Nyb2xsQmFyQ29udGFpbmVyU3R5bGUsXG4gICAgICBzY3JvbGxCYXJTdHlsZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29udGVudFN0eWxlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgc3R5bGVzLl9fY29udGVudCxcbiAgICAgIHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGlzLnN0YXRlLnRvcFBvc2l0aW9uLFxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGlzLnN0YXRlLmxlZnRQb3NpdGlvblxuICAgICAgfSxcbiAgICAgIGNvbnRlbnRTdHlsZVxuICAgICk7XG5cbiAgICBsZXQgY29udGFpbmVyU3R5bGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBzdHlsZXMuYmxvY2ssXG4gICAgICBzdHlsZVxuICAgICk7XG5cblxuXG4gICAgbGV0IHNjcm9sbGJhclkgPSB0aGlzLmNhblNjcm9sbFkoKT8gKFxuICAgICAgPFNjcm9sbGJhclxuICAgICAgICByZWFsU2l6ZT17dGhpcy5zdGF0ZS5yZWFsSGVpZ2h0fVxuICAgICAgICBjb250YWluZXJTaXplPXt0aGlzLnN0YXRlLmNvbnRhaW5lckhlaWdodH1cbiAgICAgICAgcG9zaXRpb249ey10aGlzLnN0YXRlLnRvcFBvc2l0aW9ufVxuICAgICAgICBvbk1vdmU9e3RoaXMuaGFuZGxlTW92ZS5iaW5kKHRoaXMpfVxuICAgICAgICBpc0NvbnRhaW5lckhvdmVyZWQ9e3RoaXMuc3RhdGUuaXNIb3ZlcmVkfVxuICAgICAgICBzdHlsZT17c2Nyb2xsQmFyQ29udGFpbmVyU3R5bGV9XG4gICAgICAgIHNjcm9sbEJhclN0eWxlPXtzY3JvbGxCYXJTdHlsZX1cbiAgICAgICAgdHlwZT0ndmVydGljYWwnLz5cbiAgICApIDogbnVsbDtcblxuICAgIGxldCBzY3JvbGxiYXJYID0gdGhpcy5jYW5TY3JvbGxYKCk/IChcbiAgICAgIDxTY3JvbGxiYXJcbiAgICAgICAgcmVhbFNpemU9e3RoaXMuc3RhdGUucmVhbFdpZHRofVxuICAgICAgICBjb250YWluZXJTaXplPXt0aGlzLnN0YXRlLmNvbnRhaW5lcldpZHRofVxuICAgICAgICBwb3NpdGlvbj17LXRoaXMuc3RhdGUubGVmdFBvc2l0aW9ufVxuICAgICAgICBvbk1vdmU9e3RoaXMuaGFuZGxlTW92ZS5iaW5kKHRoaXMpfVxuICAgICAgICBpc0NvbnRhaW5lckhvdmVyZWQ9e3RoaXMuc3RhdGUuaXNIb3ZlcmVkfVxuICAgICAgICBzdHlsZT17c2Nyb2xsQmFyQ29udGFpbmVyU3R5bGV9XG4gICAgICAgIHNjcm9sbEJhclN0eWxlPXtzY3JvbGxCYXJTdHlsZX1cbiAgICAgICAgdHlwZT0naG9yaXpvbnRhbCcvPlxuICAgICkgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLnNldEhvdmVyZWQuYmluZCh0aGlzKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLnVuc2V0SG92ZXJlZC5iaW5kKHRoaXMpfVxuICAgICAgICBvbldoZWVsPXt0aGlzLmhhbmRsZVdoZWVsLmJpbmQodGhpcyl9XG4gICAgICAgIHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLm9uQ29udGVudE1vdW50LmJpbmQodGhpcyl9IHN0eWxlPXtjb250ZW50U3R5bGV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Njcm9sbGJhcll9XG4gICAgICAgIHtzY3JvbGxiYXJYfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TY3JvbGxBcmVhLnByb3BUeXBlcyA9IHtcbiAgc3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIGNvbnRlbnRTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc2Nyb2xsQmFyQ29udGFpbmVyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIHNjcm9sbEJhclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBzcGVlZDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgY29udGVudENsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgdmVydGljYWw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICBob3Jpem9udGFsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50XG59O1xuXG5TY3JvbGxBcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3BlZWQ6IDEsXG4gIHZlcnRpY2FsOiB0cnVlLFxuICBob3Jpem9udGFsOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxBcmVhO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvY29tcG9uZW50cy9zY3JvbGwtYXJlYS9pbmRleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbmNsYXNzIFNjcm9sbEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdmFyIG5ld1N0YXRlID0gdGhpcy5jYWxjdWxhdGVTdGF0ZShwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgbmV3U3RhdGUsXG4gICAgICB7XG4gICAgICAgIGlzRHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICBsYXN0Q2xpZW50UG9zaXRpb246IDAsXG4gICAgICAgIGlzSG92ZXJlZDogZmFsc2VcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHByb3BzLnR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuYmluZGVkSGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmVGb3JWZXJ0aWNhbC5iaW5kKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSA9IHRoaXMuaGFuZGxlTW91c2VNb3ZlRm9ySG9yaXpvbnRhbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuYmluZGVkSGFuZGxlTW91c2VVcCA9IHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuYmluZGVkSGFuZGxlTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZVVwKTtcbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5jYWxjdWxhdGVTdGF0ZShuZXh0UHJvcHMpKTtcbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYmluZGVkSGFuZGxlTW91c2VVcCk7XG4gIH1cblxuXG4gIGNhbGN1bGF0ZVN0YXRlKHByb3BzKXtcbiAgICB2YXIgc2Nyb2xsU2l6ZSA9IHByb3BzLmNvbnRhaW5lclNpemUgKiBwcm9wcy5jb250YWluZXJTaXplIC8gcHJvcHMucmVhbFNpemU7XG4gICAgdmFyIG11bHRpcGxpZXIgPSBwcm9wcy5jb250YWluZXJTaXplIC8gcHJvcHMucmVhbFNpemU7XG4gICAgdmFyIHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb24gKiBtdWx0aXBsaWVyO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbFNpemU6IHNjcm9sbFNpemUsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICB9O1xuICB9XG5cblxuICBzZXRIb3ZlcmVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNIb3ZlcmVkOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuXG4gIHVuc2V0SG92ZXJlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzSG92ZXJlZDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG5cbiAgaGFuZGxlTW91c2VNb3ZlRm9ySG9yaXpvbnRhbChlKXtcbiAgICB2YXIgbXVsdGlwbGllciA9IHRoaXMucHJvcHMuY29udGFpbmVyU2l6ZSAvIHRoaXMucHJvcHMucmVhbFNpemU7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNEcmFnZ2luZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGRlbHRhWCA9IHRoaXMuc3RhdGUubGFzdENsaWVudFBvc2l0aW9uIC0gZS5jbGllbnRYO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RDbGllbnRQb3NpdGlvbjogZS5jbGllbnRYIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbk1vdmUoMCwgZGVsdGFYIC8gbXVsdGlwbGllcik7XG4gICAgfVxuICB9XG5cblxuICBoYW5kbGVNb3VzZU1vdmVGb3JWZXJ0aWNhbChlKXtcbiAgICB2YXIgbXVsdGlwbGllciA9IHRoaXMucHJvcHMuY29udGFpbmVyU2l6ZSAvIHRoaXMucHJvcHMucmVhbFNpemU7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNEcmFnZ2luZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGRlbHRhWSA9IHRoaXMuc3RhdGUubGFzdENsaWVudFBvc2l0aW9uIC0gZS5jbGllbnRZO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RDbGllbnRQb3NpdGlvbjogZS5jbGllbnRZIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbk1vdmUoZGVsdGFZIC8gbXVsdGlwbGllciwgMCk7XG4gICAgfVxuICB9XG5cblxuICBoYW5kbGVNb3VzZURvd24oZSl7XG4gICAgdmFyIGxhc3RDbGllbnRQb3NpdGlvbiA9IHRoaXMucHJvcHMudHlwZSA9PT0gJ3ZlcnRpY2FsJz9cbiAgICAgIGUuY2xpZW50WSA6XG4gICAgICBlLmNsaWVudFg7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNEcmFnZ2luZzogdHJ1ZSwgbGFzdENsaWVudFBvc2l0aW9uOiBsYXN0Q2xpZW50UG9zaXRpb24gfSk7XG4gIH1cblxuXG4gIGhhbmRsZU1vdXNlVXAoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtpc0RyYWdnaW5nOiBmYWxzZSB9KTtcbiAgfVxuXG5cbiAgY3JlYXRlU2Nyb2xsU3R5bGVzKCl7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBzdHlsZXMuX19zY3JvbGxiYXJfdmVydGljYWwsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuc2Nyb2xsU2l6ZSxcbiAgICAgICAgICBtYXJnaW5Ub3A6IHRoaXMuc3RhdGUucG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgc3R5bGVzLl9fc2Nyb2xsYmFyX2hvcml6b250YWwsXG4gICAgICAgIHtcbiAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5zY3JvbGxTaXplLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMuc3RhdGUucG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlcigpe1xuICAgIGxldCB7XG4gICAgICBzdHlsZSxcbiAgICAgIHNjcm9sbEJhclN0eWxlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc2Nyb2xsU3R5bGUgPSB0aGlzLmNyZWF0ZVNjcm9sbFN0eWxlcygpO1xuXG4gICAgbGV0IGNvbnRhaW5lclN0eWxlID0gc3R5bGVzLmJsb2NrO1xuXG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb250YWluZXJTdHlsZSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBjb250YWluZXJTdHlsZSxcbiAgICAgICAgc3R5bGVzLl9ob3Jpem9udGFsXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnRhaW5lclN0eWxlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIGNvbnRhaW5lclN0eWxlLFxuICAgICAgICBzdHlsZXMuX3ZlcnRpY2FsXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmlzSG92ZXJlZCkge1xuICAgICAgY29udGFpbmVyU3R5bGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgY29udGFpbmVyU3R5bGUsXG4gICAgICAgIHN0eWxlcy5fX3Njcm9sbGJhcl9ob3ZlcmVkXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmlzQ29udGFpbmVySG92ZXJlZCkge1xuICAgICAgY29udGFpbmVyU3R5bGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgY29udGFpbmVyU3R5bGUsXG4gICAgICAgIHN0eWxlcy5faG92ZXJlZFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb250YWluZXJTdHlsZSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIGNvbnRhaW5lclN0eWxlLFxuICAgICAgc3R5bGVcbiAgICApO1xuXG4gICAgc2Nyb2xsU3R5bGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBzY3JvbGxTdHlsZSxcbiAgICAgIHNjcm9sbEJhclN0eWxlXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zZXRIb3ZlcmVkLmJpbmQodGhpcyl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy51bnNldEhvdmVyZWQuYmluZCh0aGlzKX1cbiAgICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXtzY3JvbGxTdHlsZX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKX0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TY3JvbGxCYXIucHJvcFR5cGVzID0ge1xuICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgc2Nyb2xsQmFyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIG9uTW92ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHJlYWxTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBjb250YWluZXJTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBwb3NpdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddKSxcbiAgaXNDb250YWluZXJIb3ZlcmVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuU2Nyb2xsQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZSA6ICd2ZXJ0aWNhbCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsLWJhci9pbmRleC5qc3hcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBibG9jazoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICBvcGFjaXR5OiAnMC4xJyxcbiAgICB6SW5kZXg6IDk5OTksXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzJ1xuICB9LFxuXG4gIF9ob3ZlcmVkOiB7XG4gICAgb3BhY2l0eTogJzAuMydcbiAgfSxcblxuICBfX3Njcm9sbGJhcl9ob3ZlcmVkOiB7XG4gICAgYmFja2dyb3VuZDogJ2dyYXknLFxuICAgIG9wYWNpdHk6ICcwLjYnXG4gIH0sXG5cbiAgX2hvcml6b250YWw6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwcHgnLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOjBcbiAgfSxcblxuICBfdmVydGljYWw6IHtcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHJpZ2h0OiAwLFxuICAgIHRvcDogMFxuICB9LFxuXG4gIF9fc2Nyb2xsYmFyX2hvcml6b250YWw6IHtcbiAgICB3aWR0aDogJzIwcHgnLFxuICAgIGhlaWdodDogJzhweCcsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBtYXJnaW5Ub3A6ICcxcHgnXG4gIH0sXG5cbiAgX19zY3JvbGxiYXJfdmVydGljYWw6IHtcbiAgICB3aWR0aDogJzhweCcsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBtYXJnaW5Ub3A6ICcxcHgnXG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9jb21wb25lbnRzL3Njcm9sbC1iYXIvc3R5bGVzLmVzNi5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJsb2NrOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGhlaWdodDogJzEwMCUnXG4gIH0sXG5cblxuICBfX2NvbnRlbnQ6IHtcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsLWFyZWEvc3R5bGVzLmVzNi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=