/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _DrawCanvas = __webpack_require__(1);

	var _DrawCanvas2 = _interopRequireDefault(_DrawCanvas);

	var _Chat = __webpack_require__(3);

	var _Chat2 = _interopRequireDefault(_Chat);

	var _Toolbar = __webpack_require__(4);

	var _Toolbar2 = _interopRequireDefault(_Toolbar);

	var _SettingMenu = __webpack_require__(8);

	var _SettingMenu2 = _interopRequireDefault(_SettingMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    var init = function init() {
	        var canvas = new _DrawCanvas2.default();
	        new _Chat2.default();
	        new _Toolbar2.default(canvas);
	        new _SettingMenu2.default(canvas);
	    };
	    init();
	})();
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJpbml0IiwiY2FudmFzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxDQUFDLFlBQVU7QUFDUCxRQUFJQSxPQUFPLFNBQVBBLElBQU8sR0FBVTtBQUNqQixZQUFJQyxTQUFTLDBCQUFiO0FBQ0E7QUFDQSw4QkFBWUEsTUFBWjtBQUNBLGtDQUFnQkEsTUFBaEI7QUFDSCxLQUxEO0FBTUFEO0FBQ0gsQ0FSRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJhd0NhbnZhcyBmcm9tIFwiLi9EcmF3Q2FudmFzXCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCIuL0NoYXRcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4vVG9vbGJhclwiO1xyXG5pbXBvcnQgU2V0dGluZ01lbnUgZnJvbSBcIi4vU2V0dGluZ01lbnVcIjtcclxuKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgaW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IG5ldyBEcmF3Q2FudmFzKCk7XHJcbiAgICAgICAgbmV3IENoYXQoKTtcclxuICAgICAgICBuZXcgVG9vbGJhcihjYW52YXMpO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nTWVudShjYW52YXMpO1xyXG4gICAgfTtcclxuICAgIGluaXQoKTtcclxufSkoKTtcclxuXHJcbiJdfQ==

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DataStreamHandler = __webpack_require__(2);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DrawCanvas = function () {
	    function DrawCanvas() {
	        var _this = this;

	        _classCallCheck(this, DrawCanvas);

	        this.scale = 4;
	        this.height = 100; // how many pixels on the Y axis
	        this.width = 200; //  how many pixels on the x axis
	        this.pixels = [];
	        this.selectedColor = '#000000';
	        this.holdingMouse = false;
	        for (var i = 0; i < this.width; i++) {
	            this.pixels[i] = [];
	            for (var j = 0; j < this.height; j++) {
	                this.pixels[i][j] = 0;
	            }
	        }
	        document.addEventListener('updatePixels', function (e) {
	            return _this.handleNewPixelData(e);
	        });

	        this.el = $('#drawWrapper');
	        this.canvas = $('#canvas');
	        this.helpCanvas = $('#helpCanvas');
	        this.canvas.attr('width', this.canvas.parent().width());
	        this.canvas.attr('height', this.canvas.parent().height());
	        this.helpCanvas.attr('width', this.canvas.parent().width());
	        this.helpCanvas.attr('height', this.canvas.parent().height());

	        this.canvas.on('mousedown', function (e) {
	            return _this.canvasMouseDownHandler(e);
	        });
	        this.canvas.on('mouseup', function (e) {
	            return _this.canvasMouseUpHandler(e);
	        });
	        this.canvas.on('mousemove', function (e) {
	            return _this.canvasMouseMoveHandler(e);
	        });
	        this.canvas.on('contextmenu', function () {
	            return false;
	        });
	        this.position = {
	            x: this.canvas.width() / 2 - this.width * this.scale / 2,
	            y: this.canvas.height() / 2 - this.height * this.scale / 2
	        };
	        var ctx = this.canvas[0].getContext('2d');
	        ctx.imageSmoothingEnabled = false;
	        this.drawOutlining();
	    }

	    _createClass(DrawCanvas, [{
	        key: 'handleNewPixelData',
	        value: function handleNewPixelData(e) {
	            for (var i = 0; i < e.detail.pixels.length; i++) {
	                if (e.detail.pixels[i].color == 0) {
	                    this.clearPixel(e.detail.pixels[i].x, e.detail.pixels[i].y);
	                } else {
	                    this.fillPixel(e.detail.pixels[i].x, e.detail.pixels[i].y, e.detail.pixels[i].color, this.canvas);
	                }
	                this.pixels[e.detail.pixels[i].x][e.detail.pixels[i].y] = e.detail.pixels[i].color;
	            }
	        }
	    }, {
	        key: 'updatePixel',
	        value: function updatePixel(x, y, color) {
	            if (this.pixels[x][y] != color) {
	                if (color != 0) {
	                    this.fillPixel(x, y, color, this.canvas);
	                    _DataStreamHandler2.default.addUpdatedPixel(x, y, this.selectedColor);
	                } else {
	                    this.clearPixel(x, y);
	                    _DataStreamHandler2.default.addUpdatedPixel(x, y, 0);
	                }
	            }
	            this.pixels[x][y] = color;
	        }
	    }, {
	        key: 'drawOutlining',
	        value: function drawOutlining() {
	            var c = this.helpCanvas[0];
	            var ctx = c.getContext("2d");
	            ctx.beginPath();
	            ctx.rect(this.position.x + 0.5, this.position.y + 0.5, this.width * this.scale, this.height * this.scale);
	            ctx.stroke();
	            ctx.closePath();
	        }
	    }, {
	        key: 'fillPixel',
	        value: function fillPixel(x, y, color, canvas) {
	            var c = canvas[0];
	            var ctx = c.getContext("2d");
	            ctx.beginPath();
	            ctx.fillStyle = color;
	            ctx.fillRect(this.position.x + x * this.scale, this.position.y + y * this.scale, this.scale, this.scale);
	            ctx.closePath();
	        }
	    }, {
	        key: 'clearPixel',
	        value: function clearPixel(x, y) {
	            var c = this.canvas[0];
	            var ctx = c.getContext("2d");
	            ctx.beginPath();
	            ctx.clearRect(this.position.x + x * this.scale, this.position.y + y * this.scale, this.scale, this.scale);
	            ctx.closePath();
	        }
	    }, {
	        key: 'clearCanvas',
	        value: function clearCanvas(canvas) {
	            var c = canvas[0];
	            var ctx = c.getContext("2d");
	            ctx.beginPath();
	            ctx.clearRect(0, 0, canvas.width(), canvas.height());
	            ctx.stroke();
	            ctx.closePath();
	        }
	    }, {
	        key: 'inputToPixelIndex',
	        value: function inputToPixelIndex(e) {
	            if (e.offsetX > this.position.x && e.offsetY > this.position.y && e.offsetX < this.position.x + this.width * this.scale && e.offsetY < this.position.y + this.height * this.scale) {
	                return {
	                    x: Math.floor((e.offsetX - this.position.x) / this.scale),
	                    y: Math.floor((e.offsetY - this.position.y) / this.scale)
	                };
	            }
	            return false;
	        }
	    }, {
	        key: 'setSelectedColor',
	        value: function setSelectedColor(color) {
	            this.selectedColor = color;
	        }
	    }, {
	        key: 'canvasMouseMoveHandler',
	        value: function canvasMouseMoveHandler(e) {
	            var event = new CustomEvent("canvasMouseMove", {
	                detail: {
	                    event: e
	                }
	            });
	            document.dispatchEvent(event);
	        }
	    }, {
	        key: 'canvasMouseDownHandler',
	        value: function canvasMouseDownHandler(e) {
	            var event = new CustomEvent("canvasMouseDown", {
	                detail: {
	                    event: e
	                }
	            });
	            document.dispatchEvent(event);
	        }
	    }, {
	        key: 'canvasMouseUpHandler',
	        value: function canvasMouseUpHandler(e) {
	            var event = new CustomEvent("canvasMouseUp", {
	                detail: {
	                    event: e
	                }
	            });
	            document.dispatchEvent(event);
	        }
	    }]);

	    return DrawCanvas;
	}();

	exports.default = DrawCanvas;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRHJhd0NhbnZhcy5qcyJdLCJuYW1lcyI6WyJEcmF3Q2FudmFzIiwic2NhbGUiLCJoZWlnaHQiLCJ3aWR0aCIsInBpeGVscyIsInNlbGVjdGVkQ29sb3IiLCJob2xkaW5nTW91c2UiLCJpIiwiaiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoYW5kbGVOZXdQaXhlbERhdGEiLCJlbCIsIiQiLCJjYW52YXMiLCJoZWxwQ2FudmFzIiwiYXR0ciIsInBhcmVudCIsIm9uIiwiY2FudmFzTW91c2VEb3duSGFuZGxlciIsImNhbnZhc01vdXNlVXBIYW5kbGVyIiwiY2FudmFzTW91c2VNb3ZlSGFuZGxlciIsInBvc2l0aW9uIiwieCIsInkiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiZHJhd091dGxpbmluZyIsImRldGFpbCIsImxlbmd0aCIsImNvbG9yIiwiY2xlYXJQaXhlbCIsImZpbGxQaXhlbCIsImFkZFVwZGF0ZWRQaXhlbCIsImMiLCJiZWdpblBhdGgiLCJyZWN0Iiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbGVhclJlY3QiLCJvZmZzZXRYIiwib2Zmc2V0WSIsIk1hdGgiLCJmbG9vciIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztJQUVNQSxVO0FBQ0YsMEJBQWM7QUFBQTs7QUFBQTs7QUFDVixhQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLGFBQUtDLE1BQUwsR0FBYyxHQUFkLENBRlUsQ0FFUztBQUNuQixhQUFLQyxLQUFMLEdBQWEsR0FBYixDQUhVLENBR1E7QUFDbEIsYUFBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxhQUFLQyxhQUFMLEdBQXFCLFNBQXJCO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNBLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJ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QixLLEVBQU07QUFDbkIsaUJBQUszQixhQUFMLEdBQXFCMkIsS0FBckI7QUFDSDs7OytDQUVzQnJCLEMsRUFBRztBQUN0QixnQkFBSXFDLFFBQVEsSUFBSUMsV0FBSixDQUFnQixpQkFBaEIsRUFBbUM7QUFDM0NuQix3QkFBUTtBQUNKa0IsMkJBQU9yQztBQURIO0FBRG1DLGFBQW5DLENBQVo7QUFLQUYscUJBQVN5QyxhQUFULENBQXVCRixLQUF2QjtBQUNIOzs7K0NBRXNCckMsQyxFQUFHO0FBQ3RCLGdCQUFJcUMsUUFBUSxJQUFJQyxXQUFKLENBQWdCLGlCQUFoQixFQUFtQztBQUMzQ25CLHdCQUFRO0FBQ0prQiwyQkFBT3JDO0FBREg7QUFEbUMsYUFBbkMsQ0FBWjtBQUtBRixxQkFBU3lDLGFBQVQsQ0FBdUJGLEtBQXZCO0FBQ0g7Ozs2Q0FFb0JyQyxDLEVBQUc7QUFDcEIsZ0JBQUlxQyxRQUFRLElBQUlDLFdBQUosQ0FBZ0IsZUFBaEIsRUFBaUM7QUFDekNuQix3QkFBUTtBQUNKa0IsMkJBQU9yQztBQURIO0FBRGlDLGFBQWpDLENBQVo7QUFLQUYscUJBQVN5QyxhQUFULENBQXVCRixLQUF2QjtBQUNIOzs7Ozs7a0JBR1VoRCxVIiwiZmlsZSI6IkRyYXdDYW52YXMuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi9EYXRhU3RyZWFtSGFuZGxlclwiO1xyXG5cclxuY2xhc3MgRHJhd0NhbnZhcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNjYWxlID0gNDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwMDsgLy8gaG93IG1hbnkgcGl4ZWxzIG9uIHRoZSBZIGF4aXNcclxuICAgICAgICB0aGlzLndpZHRoID0gMjAwOyAvLyAgaG93IG1hbnkgcGl4ZWxzIG9uIHRoZSB4IGF4aXNcclxuICAgICAgICB0aGlzLnBpeGVscyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb2xvciA9ICcjMDAwMDAwJztcclxuICAgICAgICB0aGlzLmhvbGRpbmdNb3VzZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGl4ZWxzW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oZWlnaHQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbHNbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZVBpeGVscycsIChlKSA9PiB0aGlzLmhhbmRsZU5ld1BpeGVsRGF0YShlKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZWwgPSAkKCcjZHJhd1dyYXBwZXInKTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9ICQoJyNjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmhlbHBDYW52YXMgPSAkKCcjaGVscENhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmF0dHIoJ3dpZHRoJywgdGhpcy5jYW52YXMucGFyZW50KCkud2lkdGgoKSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYXR0cignaGVpZ2h0JywgdGhpcy5jYW52YXMucGFyZW50KCkuaGVpZ2h0KCkpO1xyXG4gICAgICAgIHRoaXMuaGVscENhbnZhcy5hdHRyKCd3aWR0aCcsIHRoaXMuY2FudmFzLnBhcmVudCgpLndpZHRoKCkpO1xyXG4gICAgICAgIHRoaXMuaGVscENhbnZhcy5hdHRyKCdoZWlnaHQnLCB0aGlzLmNhbnZhcy5wYXJlbnQoKS5oZWlnaHQoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4gdGhpcy5jYW52YXNNb3VzZURvd25IYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5vbignbW91c2V1cCcsIChlKSA9PiB0aGlzLmNhbnZhc01vdXNlVXBIYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5vbignbW91c2Vtb3ZlJywgKGUpID0+IHRoaXMuY2FudmFzTW91c2VNb3ZlSGFuZGxlcihlKSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oKXsgcmV0dXJuIGZhbHNlOyB9KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCgpIC8gMiAtIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlIC8gMixcclxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0KCkgLyAyIC0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlIC8gMlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzWzBdLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZHJhd091dGxpbmluZygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVOZXdQaXhlbERhdGEoZSkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlLmRldGFpbC5waXhlbHMubGVuZ3RoOyBpICsrKXtcclxuICAgICAgICAgICAgaWYoZS5kZXRhaWwucGl4ZWxzW2ldLmNvbG9yID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclBpeGVsKGUuZGV0YWlsLnBpeGVsc1tpXS54LCBlLmRldGFpbC5waXhlbHNbaV0ueSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUGl4ZWwoZS5kZXRhaWwucGl4ZWxzW2ldLngsIGUuZGV0YWlsLnBpeGVsc1tpXS55LCBlLmRldGFpbC5waXhlbHNbaV0uY29sb3IsIHRoaXMuY2FudmFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBpeGVsc1tlLmRldGFpbC5waXhlbHNbaV0ueF1bZS5kZXRhaWwucGl4ZWxzW2ldLnldID0gZS5kZXRhaWwucGl4ZWxzW2ldLmNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQaXhlbCh4LCB5LCBjb2xvcikge1xyXG4gICAgICAgIGlmKHRoaXMucGl4ZWxzW3hdW3ldICE9IGNvbG9yKXtcclxuICAgICAgICAgICAgaWYoY29sb3IgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxQaXhlbCh4LCB5LCBjb2xvciwgdGhpcy5jYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgRGF0YVN0cmVhbUhhbmRsZXIuYWRkVXBkYXRlZFBpeGVsKHgsIHksIHRoaXMuc2VsZWN0ZWRDb2xvcik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclBpeGVsKHgseSk7XHJcbiAgICAgICAgICAgICAgICBEYXRhU3RyZWFtSGFuZGxlci5hZGRVcGRhdGVkUGl4ZWwoeCwgeSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5waXhlbHNbeF1beV0gPSBjb2xvcjtcclxuICAgIH07XHJcbiAgICBkcmF3T3V0bGluaW5nKCl7XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmhlbHBDYW52YXNbMF07XHJcbiAgICAgICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgucmVjdCh0aGlzLnBvc2l0aW9uLnggKyAwLjUsIHRoaXMucG9zaXRpb24ueSsgMC41LCB0aGlzLndpZHRoICogdGhpcy5zY2FsZSwgdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG4gICAgZmlsbFBpeGVsKHgsIHksIGNvbG9yLCBjYW52YXMpIHtcclxuICAgICAgICBsZXQgYyA9IGNhbnZhc1swXTtcclxuICAgICAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54ICsgeCAqIHRoaXMuc2NhbGUsIHRoaXMucG9zaXRpb24ueSArIHkgKiB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcbiAgICBjbGVhclBpeGVsKHgseSl7XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmNhbnZhc1swXTtcclxuICAgICAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QodGhpcy5wb3NpdGlvbi54ICsgeCAqIHRoaXMuc2NhbGUsIHRoaXMucG9zaXRpb24ueSArIHkgKiB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcbiAgICBjbGVhckNhbnZhcyhjYW52YXMpe1xyXG4gICAgICAgIGxldCBjID0gY2FudmFzWzBdO1xyXG4gICAgICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgoKSwgY2FudmFzLmhlaWdodCgpKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG4gICAgaW5wdXRUb1BpeGVsSW5kZXgoZSkge1xyXG4gICAgICAgIGlmIChlLm9mZnNldFggPiB0aGlzLnBvc2l0aW9uLnggJiYgZS5vZmZzZXRZID4gdGhpcy5wb3NpdGlvbi55ICYmXHJcbiAgICAgICAgICAgIGUub2Zmc2V0WCA8IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlICYmXHJcbiAgICAgICAgICAgIGUub2Zmc2V0WSA8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgeDogTWF0aC5mbG9vcigoZS5vZmZzZXRYIC0gdGhpcy5wb3NpdGlvbi54KSAvIHRoaXMuc2NhbGUpLFxyXG4gICAgICAgICAgICAgICAgeTogTWF0aC5mbG9vcigoZS5vZmZzZXRZIC0gdGhpcy5wb3NpdGlvbi55KSAvIHRoaXMuc2NhbGUpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBzZXRTZWxlY3RlZENvbG9yKGNvbG9yKXtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXNNb3VzZU1vdmVIYW5kbGVyKGUpIHtcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjYW52YXNNb3VzZU1vdmVcIiwge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgY2FudmFzTW91c2VEb3duSGFuZGxlcihlKSB7XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiY2FudmFzTW91c2VEb3duXCIsIHtcclxuICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICBldmVudDogZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbnZhc01vdXNlVXBIYW5kbGVyKGUpIHtcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjYW52YXNNb3VzZVVwXCIsIHtcclxuICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICBldmVudDogZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3Q2FudmFzO1xyXG4iXX0=

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataStreamHandler = function () {
	    function DataStreamHandler() {
	        var _this = this;

	        _classCallCheck(this, DataStreamHandler);

	        this.socket = socket;
	        this.updatedPixels = [];
	        var room = window.location.href.slice(window.location.href.search(/[^\/]+$/));
	        this.socket.emit('join', room);
	        this.socket.addEventListener('pullPixelsFromServer', function (e) {
	            return _this.handleServerPixels(e);
	        });
	        this.socket.addEventListener('serverMessage', function (e) {
	            return _this.handleMessage(e, 'server');
	        });
	        this.socket.addEventListener('message', function (e) {
	            return _this.handleMessage(e, 'user');
	        });
	    }

	    _createClass(DataStreamHandler, [{
	        key: 'handleMessage',
	        value: function handleMessage(e, type) {
	            var event = new CustomEvent("receivedMessage", {
	                detail: {
	                    type: type,
	                    message: e
	                }
	            });
	            document.dispatchEvent(event);
	        }
	    }, {
	        key: 'handleServerPixels',
	        value: function handleServerPixels(e) {
	            var event = new CustomEvent("updatePixels", {
	                detail: {
	                    pixels: e
	                }
	            });
	            document.dispatchEvent(event);
	        }
	    }, {
	        key: 'sendMessage',
	        value: function sendMessage(message) {
	            this.socket.emit('message', message);
	        }
	    }, {
	        key: 'addUpdatedPixel',
	        value: function addUpdatedPixel(x, y, color) {
	            this.updatedPixels.push({
	                x: x,
	                y: y,
	                color: color
	            });
	            this.socket.emit('pushPixelsToServer', this.updatedPixels);
	            this.updatedPixels = [];
	        }
	    }, {
	        key: 'createJSON',
	        value: function createJSON() {}
	    }, {
	        key: 'parseJSON',
	        value: function parseJSON() {}
	    }]);

	    return DataStreamHandler;
	}();

	exports.default = new DataStreamHandler();
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRGF0YVN0cmVhbUhhbmRsZXIuanMiXSwibmFtZXMiOlsiRGF0YVN0cmVhbUhhbmRsZXIiLCJzb2NrZXQiLCJ1cGRhdGVkUGl4ZWxzIiwicm9vbSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNsaWNlIiwic2VhcmNoIiwiZW1pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaGFuZGxlU2VydmVyUGl4ZWxzIiwiaGFuZGxlTWVzc2FnZSIsInR5cGUiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwibWVzc2FnZSIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsInBpeGVscyIsIngiLCJ5IiwiY29sb3IiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGlCO0FBQ0YsaUNBQWE7QUFBQTs7QUFBQTs7QUFDVCxhQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxhQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsWUFBSUMsT0FBT0MsT0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCSCxPQUFPQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkUsTUFBckIsQ0FBNEIsU0FBNUIsQ0FBM0IsQ0FBWDtBQUNBLGFBQUtQLE1BQUwsQ0FBWVEsSUFBWixDQUFpQixNQUFqQixFQUF5Qk4sSUFBekI7QUFDQSxhQUFLRixNQUFMLENBQVlTLGdCQUFaLENBQTZCLHNCQUE3QixFQUFxRCxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0Msa0JBQUwsQ0FBd0JELENBQXhCLENBQVA7QUFBQSxTQUFyRDtBQUNBLGFBQUtWLE1BQUwsQ0FBWVMsZ0JBQVosQ0FBNkIsZUFBN0IsRUFBOEMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtFLGFBQUwsQ0FBbUJGLENBQW5CLEVBQXNCLFFBQXRCLENBQVA7QUFBQSxTQUE5QztBQUNBLGFBQUtWLE1BQUwsQ0FBWVMsZ0JBQVosQ0FBNkIsU0FBN0IsRUFBd0MsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtFLGFBQUwsQ0FBbUJGLENBQW5CLEVBQXNCLE1BQXRCLENBQVA7QUFBQSxTQUF4QztBQUNIOzs7O3NDQUNhQSxDLEVBQUdHLEksRUFBSztBQUNsQixnQkFBSUMsUUFBUSxJQUFJQyxXQUFKLENBQWdCLGlCQUFoQixFQUFtQztBQUMzQ0Msd0JBQVE7QUFDSkgsMEJBQU1BLElBREY7QUFFSkksNkJBQVNQO0FBRkw7QUFEbUMsYUFBbkMsQ0FBWjtBQU1BUSxxQkFBU0MsYUFBVCxDQUF1QkwsS0FBdkI7QUFDSDs7OzJDQUNrQkosQyxFQUFFO0FBQ2pCLGdCQUFJSSxRQUFRLElBQUlDLFdBQUosQ0FBZ0IsY0FBaEIsRUFBZ0M7QUFDeENDLHdCQUFRO0FBQ0pJLDRCQUFRVjtBQURKO0FBRGdDLGFBQWhDLENBQVo7QUFLQVEscUJBQVNDLGFBQVQsQ0FBdUJMLEtBQXZCO0FBQ0g7OztvQ0FDV0csTyxFQUFRO0FBQ2hCLGlCQUFLakIsTUFBTCxDQUFZUSxJQUFaLENBQWlCLFNBQWpCLEVBQTRCUyxPQUE1QjtBQUNIOzs7d0NBQ2VJLEMsRUFBR0MsQyxFQUFHQyxLLEVBQU07QUFDeEIsaUJBQUt0QixhQUFMLENBQW1CdUIsSUFBbkIsQ0FBd0I7QUFDcEJILG1CQUFHQSxDQURpQjtBQUVwQkMsbUJBQUdBLENBRmlCO0FBR3BCQyx1QkFBT0E7QUFIYSxhQUF4QjtBQUtBLGlCQUFLdkIsTUFBTCxDQUFZUSxJQUFaLENBQWlCLG9CQUFqQixFQUF1QyxLQUFLUCxhQUE1QztBQUNBLGlCQUFLQSxhQUFMLEdBQXFCLEVBQXJCO0FBQ0g7OztxQ0FDVyxDQUVYOzs7b0NBQ1UsQ0FFVjs7Ozs7O2tCQUVXLElBQUlGLGlCQUFKLEUiLCJmaWxlIjoiRGF0YVN0cmVhbUhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERhdGFTdHJlYW1IYW5kbGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IHNvY2tldDtcclxuICAgICAgICB0aGlzLnVwZGF0ZWRQaXhlbHMgPSBbXTtcclxuICAgICAgICBsZXQgcm9vbSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNlYXJjaCgvW15cXC9dKyQvKSk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnam9pbicsIHJvb20pO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3B1bGxQaXhlbHNGcm9tU2VydmVyJywgKGUpID0+IHRoaXMuaGFuZGxlU2VydmVyUGl4ZWxzKGUpKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdzZXJ2ZXJNZXNzYWdlJywgKGUpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShlLCAnc2VydmVyJykpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGUsICd1c2VyJykpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVNZXNzYWdlKGUsIHR5cGUpe1xyXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudChcInJlY2VpdmVkTWVzc2FnZVwiLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VydmVyUGl4ZWxzKGUpe1xyXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudChcInVwZGF0ZVBpeGVsc1wiLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgcGl4ZWxzOiBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2Upe1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCBtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGFkZFVwZGF0ZWRQaXhlbCh4LCB5LCBjb2xvcil7XHJcbiAgICAgICAgdGhpcy51cGRhdGVkUGl4ZWxzLnB1c2goe1xyXG4gICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICB5OiB5LFxyXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdwdXNoUGl4ZWxzVG9TZXJ2ZXInLCB0aGlzLnVwZGF0ZWRQaXhlbHMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlZFBpeGVscyA9IFtdO1xyXG4gICAgfTtcclxuICAgIGNyZWF0ZUpTT04oKXtcclxuXHJcbiAgICB9XHJcbiAgICBwYXJzZUpTT04oKXtcclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgKG5ldyBEYXRhU3RyZWFtSGFuZGxlcik7Il19

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DataStreamHandler = __webpack_require__(2);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Chat = function () {
	    function Chat() {
	        var _this = this;

	        _classCallCheck(this, Chat);

	        this.el = $('#chat');
	        document.addEventListener('receivedMessage', function (e) {
	            return _this.handleMessage(e);
	        });
	        $('#sendMessage', this.el).on('click', this.sendMessage);
	        $('input', this.el).on('keydown', function (e) {
	            return _this.handleKeyPress(e);
	        });
	    }

	    _createClass(Chat, [{
	        key: 'sendMessage',
	        value: function sendMessage() {
	            var input = $('input', this.el);
	            _DataStreamHandler2.default.sendMessage(input.val());
	            $('.messages', this.el).append($('<div>').append($('<span>').text("you: " + input.val())));
	            input.val('');
	        }
	    }, {
	        key: 'handleKeyPress',
	        value: function handleKeyPress(e) {
	            if (e.keyCode == 13) {
	                this.sendMessage();
	            }
	        }
	    }, {
	        key: 'handleMessage',
	        value: function handleMessage(e) {
	            var message = e.detail.message;
	            var type = e.detail.type;

	            $('.messages', this.el).append($('<div>').append($('<span>', { class: type == 'server' ? 'server-message' : '' }).text(message)));
	        }
	    }]);

	    return Chat;
	}();

	exports.default = Chat;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQ2hhdC5qcyJdLCJuYW1lcyI6WyJDaGF0IiwiZWwiLCIkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImhhbmRsZU1lc3NhZ2UiLCJvbiIsInNlbmRNZXNzYWdlIiwiaGFuZGxlS2V5UHJlc3MiLCJpbnB1dCIsInZhbCIsImFwcGVuZCIsInRleHQiLCJrZXlDb2RlIiwibWVzc2FnZSIsImRldGFpbCIsInR5cGUiLCJjbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsSTtBQUNGLG9CQUFhO0FBQUE7O0FBQUE7O0FBQ1QsYUFBS0MsRUFBTCxHQUFVQyxFQUFFLE9BQUYsQ0FBVjtBQUNBQyxpQkFBU0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLQyxhQUFMLENBQW1CRCxDQUFuQixDQUFQO0FBQUEsU0FBN0M7QUFDQUgsVUFBRSxjQUFGLEVBQWtCLEtBQUtELEVBQXZCLEVBQTJCTSxFQUEzQixDQUE4QixPQUE5QixFQUF1QyxLQUFLQyxXQUE1QztBQUNBTixVQUFFLE9BQUYsRUFBVyxLQUFLRCxFQUFoQixFQUFvQk0sRUFBcEIsQ0FBdUIsU0FBdkIsRUFBa0MsVUFBQ0YsQ0FBRDtBQUFBLG1CQUFPLE1BQUtJLGNBQUwsQ0FBb0JKLENBQXBCLENBQVA7QUFBQSxTQUFsQztBQUNIOzs7O3NDQUNZO0FBQ1QsZ0JBQUlLLFFBQVFSLEVBQUUsT0FBRixFQUFXLEtBQUtELEVBQWhCLENBQVo7QUFDQSx3Q0FBa0JPLFdBQWxCLENBQThCRSxNQUFNQyxHQUFOLEVBQTlCO0FBQ0FULGNBQUUsV0FBRixFQUFlLEtBQUtELEVBQXBCLEVBQXdCVyxNQUF4QixDQUErQlYsRUFBRSxPQUFGLEVBQVdVLE1BQVgsQ0FBa0JWLEVBQUUsUUFBRixFQUFZVyxJQUFaLENBQWlCLFVBQVVILE1BQU1DLEdBQU4sRUFBM0IsQ0FBbEIsQ0FBL0I7QUFDQUQsa0JBQU1DLEdBQU4sQ0FBVSxFQUFWO0FBQ0g7Ozt1Q0FDY04sQyxFQUFFO0FBQ2IsZ0JBQUdBLEVBQUVTLE9BQUYsSUFBYSxFQUFoQixFQUFtQjtBQUNmLHFCQUFLTixXQUFMO0FBQ0g7QUFDSjs7O3NDQUNhSCxDLEVBQUU7QUFDWixnQkFBSVUsVUFBVVYsRUFBRVcsTUFBRixDQUFTRCxPQUF2QjtBQUNBLGdCQUFJRSxPQUFPWixFQUFFVyxNQUFGLENBQVNDLElBQXBCOztBQUdBZixjQUFFLFdBQUYsRUFBZSxLQUFLRCxFQUFwQixFQUF3QlcsTUFBeEIsQ0FBK0JWLEVBQUUsT0FBRixFQUFXVSxNQUFYLENBQWtCVixFQUFFLFFBQUYsRUFBWSxFQUFDZ0IsT0FBT0QsUUFBTSxRQUFOLEdBQWdCLGdCQUFoQixHQUFtQyxFQUEzQyxFQUFaLEVBQTRESixJQUE1RCxDQUFpRUUsT0FBakUsQ0FBbEIsQ0FBL0I7QUFDSDs7Ozs7O2tCQUVVZixJIiwiZmlsZSI6IkNoYXQuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi9EYXRhU3RyZWFtSGFuZGxlclwiO1xyXG5cclxuY2xhc3MgQ2hhdHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5lbCA9ICQoJyNjaGF0Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVjZWl2ZWRNZXNzYWdlJywgKGUpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShlKSk7XHJcbiAgICAgICAgJCgnI3NlbmRNZXNzYWdlJywgdGhpcy5lbCkub24oJ2NsaWNrJywgdGhpcy5zZW5kTWVzc2FnZSk7XHJcbiAgICAgICAgJCgnaW5wdXQnLCB0aGlzLmVsKS5vbigna2V5ZG93bicsIChlKSA9PiB0aGlzLmhhbmRsZUtleVByZXNzKGUpKTtcclxuICAgIH1cclxuICAgIHNlbmRNZXNzYWdlKCl7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gJCgnaW5wdXQnLCB0aGlzLmVsKTtcclxuICAgICAgICBEYXRhU3RyZWFtSGFuZGxlci5zZW5kTWVzc2FnZShpbnB1dC52YWwoKSk7XHJcbiAgICAgICAgJCgnLm1lc3NhZ2VzJywgdGhpcy5lbCkuYXBwZW5kKCQoJzxkaXY+JykuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoXCJ5b3U6IFwiICsgaW5wdXQudmFsKCkpKSk7XHJcbiAgICAgICAgaW5wdXQudmFsKCcnKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUtleVByZXNzKGUpe1xyXG4gICAgICAgIGlmKGUua2V5Q29kZSA9PSAxMyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVNZXNzYWdlKGUpe1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gZS5kZXRhaWwubWVzc2FnZTtcclxuICAgICAgICBsZXQgdHlwZSA9IGUuZGV0YWlsLnR5cGU7XHJcblxyXG5cclxuICAgICAgICAkKCcubWVzc2FnZXMnLCB0aGlzLmVsKS5hcHBlbmQoJCgnPGRpdj4nKS5hcHBlbmQoJCgnPHNwYW4+Jywge2NsYXNzOiB0eXBlPT0nc2VydmVyJz8gJ3NlcnZlci1tZXNzYWdlJyA6ICcnfSkudGV4dChtZXNzYWdlKSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7Il19

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Pencil = __webpack_require__(5);

	var _Pencil2 = _interopRequireDefault(_Pencil);

	var _Eraser = __webpack_require__(7);

	var _Eraser2 = _interopRequireDefault(_Eraser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Toolbar = function () {
	    function Toolbar(canvas) {
	        var _this = this;

	        _classCallCheck(this, Toolbar);

	        this.el = $('#toolbar');
	        this.tools = {};

	        var pencil = new _Pencil2.default(canvas);
	        var eraser = new _Eraser2.default(canvas);

	        this.tools[pencil.name] = pencil;
	        this.tools[eraser.name] = eraser;

	        for (var tool in this.tools) {
	            this.el.append(this.tools[tool].el);
	        }
	        this.selectTool(this.tools['pencil']);

	        this.el[0].addEventListener('click', function (e) {
	            return _this.handleClick(e);
	        });
	        document.addEventListener('canvasMouseMove', function (e) {
	            return _this.selectedTool.canvasMouseMoveHandler(e);
	        });
	        document.addEventListener('canvasMouseDown', function (e) {
	            return _this.selectedTool.canvasMouseDownHandler(e);
	        });
	        document.addEventListener('canvasMouseUp', function (e) {
	            return _this.selectedTool.canvasMouseUpHandler(e);
	        });
	    }

	    _createClass(Toolbar, [{
	        key: "handleClick",
	        value: function handleClick(e) {
	            var target = $(e.target).hasClass('tool') ? $(e.target) : $(e.target).parents('.tool').length ? $(e.target).parents('.tool') : false;
	            if (target) {
	                var tool = this.tools[target.attr('data-name').replace('data-', '')];
	                this.selectTool(tool);
	            }
	        }
	    }, {
	        key: "selectTool",
	        value: function selectTool(tool) {
	            this.selectedTool = tool;
	            for (var _tool in this.tools) {
	                this.tools[_tool].el.removeClass('selected-tool');
	            }
	            this.selectedTool.onClick();
	        }
	    }]);

	    return Toolbar;
	}();

	exports.default = Toolbar;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVG9vbGJhci5qcyJdLCJuYW1lcyI6WyJUb29sYmFyIiwiY2FudmFzIiwiZWwiLCIkIiwidG9vbHMiLCJwZW5jaWwiLCJlcmFzZXIiLCJuYW1lIiwidG9vbCIsImFwcGVuZCIsInNlbGVjdFRvb2wiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImhhbmRsZUNsaWNrIiwiZG9jdW1lbnQiLCJzZWxlY3RlZFRvb2wiLCJjYW52YXNNb3VzZU1vdmVIYW5kbGVyIiwiY2FudmFzTW91c2VEb3duSGFuZGxlciIsImNhbnZhc01vdXNlVXBIYW5kbGVyIiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJwYXJlbnRzIiwibGVuZ3RoIiwiYXR0ciIsInJlcGxhY2UiLCJyZW1vdmVDbGFzcyIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEsTztBQUNGLHFCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCLGFBQUtDLEVBQUwsR0FBVUMsRUFBRSxVQUFGLENBQVY7QUFDQSxhQUFLQyxLQUFMLEdBQWEsRUFBYjs7QUFFQSxZQUFJQyxTQUFTLHFCQUFXSixNQUFYLENBQWI7QUFDQSxZQUFJSyxTQUFTLHFCQUFXTCxNQUFYLENBQWI7O0FBRUEsYUFBS0csS0FBTCxDQUFXQyxPQUFPRSxJQUFsQixJQUEwQkYsTUFBMUI7QUFDQSxhQUFLRCxLQUFMLENBQVdFLE9BQU9DLElBQWxCLElBQTBCRCxNQUExQjs7QUFFQSxhQUFLLElBQUlFLElBQVQsSUFBaUIsS0FBS0osS0FBdEIsRUFBNkI7QUFDekIsaUJBQUtGLEVBQUwsQ0FBUU8sTUFBUixDQUFlLEtBQUtMLEtBQUwsQ0FBV0ksSUFBWCxFQUFpQk4sRUFBaEM7QUFDSDtBQUNELGFBQUtRLFVBQUwsQ0FBZ0IsS0FBS04sS0FBTCxDQUFXLFFBQVgsQ0FBaEI7O0FBRUEsYUFBS0YsRUFBTCxDQUFRLENBQVIsRUFBV1MsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtDLFdBQUwsQ0FBaUJELENBQWpCLENBQVA7QUFBQSxTQUFyQztBQUNBRSxpQkFBU0gsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLRyxZQUFMLENBQWtCQyxzQkFBbEIsQ0FBeUNKLENBQXpDLENBQVA7QUFBQSxTQUE3QztBQUNBRSxpQkFBU0gsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLRyxZQUFMLENBQWtCRSxzQkFBbEIsQ0FBeUNMLENBQXpDLENBQVA7QUFBQSxTQUE3QztBQUNBRSxpQkFBU0gsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtHLFlBQUwsQ0FBa0JHLG9CQUFsQixDQUF1Q04sQ0FBdkMsQ0FBUDtBQUFBLFNBQTNDO0FBQ0g7Ozs7b0NBRVdBLEMsRUFBRztBQUNYLGdCQUFJTyxTQUFTaEIsRUFBRVMsRUFBRU8sTUFBSixFQUFZQyxRQUFaLENBQXFCLE1BQXJCLElBQStCakIsRUFBRVMsRUFBRU8sTUFBSixDQUEvQixHQUE4Q2hCLEVBQUVTLEVBQUVPLE1BQUosRUFBWUUsT0FBWixDQUFvQixPQUFwQixFQUE2QkMsTUFBOUIsR0FBd0NuQixFQUFFUyxFQUFFTyxNQUFKLEVBQVlFLE9BQVosQ0FBb0IsT0FBcEIsQ0FBeEMsR0FBdUUsS0FBakk7QUFDQSxnQkFBSUYsTUFBSixFQUFZO0FBQ1Isb0JBQUlYLE9BQU8sS0FBS0osS0FBTCxDQUFXZSxPQUFPSSxJQUFQLENBQVksV0FBWixFQUF5QkMsT0FBekIsQ0FBaUMsT0FBakMsRUFBMEMsRUFBMUMsQ0FBWCxDQUFYO0FBQ0EscUJBQUtkLFVBQUwsQ0FBZ0JGLElBQWhCO0FBQ0g7QUFDSjs7O21DQUVVQSxJLEVBQU07QUFDYixpQkFBS08sWUFBTCxHQUFvQlAsSUFBcEI7QUFDQSxpQkFBSyxJQUFJQSxLQUFULElBQWlCLEtBQUtKLEtBQXRCLEVBQTZCO0FBQ3pCLHFCQUFLQSxLQUFMLENBQVdJLEtBQVgsRUFBaUJOLEVBQWpCLENBQW9CdUIsV0FBcEIsQ0FBZ0MsZUFBaEM7QUFDSDtBQUNELGlCQUFLVixZQUFMLENBQWtCVyxPQUFsQjtBQUNIOzs7Ozs7a0JBRVUxQixPIiwiZmlsZSI6IlRvb2xiYXIuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQZW5jaWwgZnJvbSBcIi4vUGVuY2lsXCI7XHJcbmltcG9ydCBFcmFzZXIgZnJvbSBcIi4vRXJhc2VyXCI7XHJcblxyXG5jbGFzcyBUb29sYmFyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuZWwgPSAkKCcjdG9vbGJhcicpO1xyXG4gICAgICAgIHRoaXMudG9vbHMgPSB7fTtcclxuXHJcbiAgICAgICAgbGV0IHBlbmNpbCA9IG5ldyBQZW5jaWwoY2FudmFzKTtcclxuICAgICAgICBsZXQgZXJhc2VyID0gbmV3IEVyYXNlcihjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvb2xzW3BlbmNpbC5uYW1lXSA9IHBlbmNpbDtcclxuICAgICAgICB0aGlzLnRvb2xzW2VyYXNlci5uYW1lXSA9IGVyYXNlcjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdG9vbCBpbiB0aGlzLnRvb2xzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kKHRoaXMudG9vbHNbdG9vbF0uZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdFRvb2wodGhpcy50b29sc1sncGVuY2lsJ10pO1xyXG5cclxuICAgICAgICB0aGlzLmVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnZhc01vdXNlTW92ZScsIChlKSA9PiB0aGlzLnNlbGVjdGVkVG9vbC5jYW52YXNNb3VzZU1vdmVIYW5kbGVyKGUpKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjYW52YXNNb3VzZURvd24nLCAoZSkgPT4gdGhpcy5zZWxlY3RlZFRvb2wuY2FudmFzTW91c2VEb3duSGFuZGxlcihlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FudmFzTW91c2VVcCcsIChlKSA9PiB0aGlzLnNlbGVjdGVkVG9vbC5jYW52YXNNb3VzZVVwSGFuZGxlcihlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZSkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5oYXNDbGFzcygndG9vbCcpID8gJChlLnRhcmdldCkgOiAoJChlLnRhcmdldCkucGFyZW50cygnLnRvb2wnKS5sZW5ndGgpID8gJChlLnRhcmdldCkucGFyZW50cygnLnRvb2wnKSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgbGV0IHRvb2wgPSB0aGlzLnRvb2xzW3RhcmdldC5hdHRyKCdkYXRhLW5hbWUnKS5yZXBsYWNlKCdkYXRhLScsICcnKV07XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VG9vbCh0b29sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0VG9vbCh0b29sKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRvb2wgPSB0b29sO1xyXG4gICAgICAgIGZvciAobGV0IHRvb2wgaW4gdGhpcy50b29scykge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xzW3Rvb2xdLmVsLnJlbW92ZUNsYXNzKCdzZWxlY3RlZC10b29sJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUb29sLm9uQ2xpY2soKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyOyJdfQ==

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(6);

	var _Tool3 = _interopRequireDefault(_Tool2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pencil = function (_Tool) {
	    _inherits(Pencil, _Tool);

	    function Pencil(canvas) {
	        _classCallCheck(this, Pencil);

	        return _possibleConstructorReturn(this, (Pencil.__proto__ || Object.getPrototypeOf(Pencil)).call(this, canvas, 'pencil'));
	    }

	    _createClass(Pencil, [{
	        key: "canvasMouseMoveHandler",
	        value: function canvasMouseMoveHandler(e) {
	            if (this.holdingMouse) {
	                var indices = this.canvas.inputToPixelIndex(e.detail.event);
	                if (indices) {
	                    this.canvas.updatePixel(indices.x, indices.y, this.canvas.selectedColor);
	                }
	            }
	        }
	    }]);

	    return Pencil;
	}(_Tool3.default);

	exports.default = Pencil;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcUGVuY2lsLmpzIl0sIm5hbWVzIjpbIlBlbmNpbCIsImNhbnZhcyIsImUiLCJob2xkaW5nTW91c2UiLCJpbmRpY2VzIiwiaW5wdXRUb1BpeGVsSW5kZXgiLCJkZXRhaWwiLCJldmVudCIsInVwZGF0ZVBpeGVsIiwieCIsInkiLCJzZWxlY3RlZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0Ysb0JBQVlDLE1BQVosRUFBbUI7QUFBQTs7QUFBQSwrR0FDVEEsTUFEUyxFQUNELFFBREM7QUFFbEI7Ozs7K0NBQ3NCQyxDLEVBQUc7QUFDdEIsZ0JBQUksS0FBS0MsWUFBVCxFQUF1QjtBQUNuQixvQkFBSUMsVUFBVSxLQUFLSCxNQUFMLENBQVlJLGlCQUFaLENBQThCSCxFQUFFSSxNQUFGLENBQVNDLEtBQXZDLENBQWQ7QUFDQSxvQkFBR0gsT0FBSCxFQUFXO0FBQ1AseUJBQUtILE1BQUwsQ0FBWU8sV0FBWixDQUF3QkosUUFBUUssQ0FBaEMsRUFBbUNMLFFBQVFNLENBQTNDLEVBQThDLEtBQUtULE1BQUwsQ0FBWVUsYUFBMUQ7QUFDSDtBQUNKO0FBQ0o7Ozs7OztrQkFFVVgsTSIsImZpbGUiOiJQZW5jaWwuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgVG9vbCBmcm9tIFwiLi9Ub29sXCI7XHJcblxyXG5jbGFzcyBQZW5jaWwgZXh0ZW5kcyBUb29se1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKXtcclxuICAgICAgICBzdXBlcihjYW52YXMsICdwZW5jaWwnKTtcclxuICAgIH1cclxuICAgIGNhbnZhc01vdXNlTW92ZUhhbmRsZXIoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmhvbGRpbmdNb3VzZSkge1xyXG4gICAgICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMuY2FudmFzLmlucHV0VG9QaXhlbEluZGV4KGUuZGV0YWlsLmV2ZW50KTtcclxuICAgICAgICAgICAgaWYoaW5kaWNlcyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy51cGRhdGVQaXhlbChpbmRpY2VzLngsIGluZGljZXMueSwgdGhpcy5jYW52YXMuc2VsZWN0ZWRDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBlbmNpbDtcclxuIl19

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tool = function () {
	    function Tool(canvas, name) {
	        _classCallCheck(this, Tool);

	        this.canvas = canvas;
	        this.name = name;
	        this.el = $('<div>', { class: 'tool' }).append($('<span>').text(name));
	        this.el.attr('data-name', this.name);
	    }

	    _createClass(Tool, [{
	        key: 'onClick',
	        value: function onClick(e) {
	            this.el.addClass('selected-tool');
	        }
	    }, {
	        key: 'canvasMouseMoveHandler',
	        value: function canvasMouseMoveHandler(e) {
	            return;
	        }
	    }, {
	        key: 'canvasMouseDownHandler',
	        value: function canvasMouseDownHandler(e) {
	            this.holdingMouse = true;
	            this.canvasMouseMoveHandler(e);
	        }
	    }, {
	        key: 'canvasMouseUpHandler',
	        value: function canvasMouseUpHandler(e) {
	            this.holdingMouse = false;
	        }
	    }]);

	    return Tool;
	}();

	exports.default = Tool;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVG9vbC5qcyJdLCJuYW1lcyI6WyJUb29sIiwiY2FudmFzIiwibmFtZSIsImVsIiwiJCIsImNsYXNzIiwiYXBwZW5kIiwidGV4dCIsImF0dHIiLCJlIiwiYWRkQ2xhc3MiLCJob2xkaW5nTW91c2UiLCJjYW52YXNNb3VzZU1vdmVIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7QUFDRixrQkFBWUMsTUFBWixFQUFvQkMsSUFBcEIsRUFBeUI7QUFBQTs7QUFDckIsYUFBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsYUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsRUFBTCxHQUFVQyxFQUFFLE9BQUYsRUFBVyxFQUFDQyxPQUFPLE1BQVIsRUFBWCxFQUE0QkMsTUFBNUIsQ0FBbUNGLEVBQUUsUUFBRixFQUFZRyxJQUFaLENBQWlCTCxJQUFqQixDQUFuQyxDQUFWO0FBQ0EsYUFBS0MsRUFBTCxDQUFRSyxJQUFSLENBQWEsV0FBYixFQUEwQixLQUFLTixJQUEvQjtBQUNIOzs7O2dDQUNPTyxDLEVBQUU7QUFDTixpQkFBS04sRUFBTCxDQUFRTyxRQUFSLENBQWlCLGVBQWpCO0FBQ0g7OzsrQ0FDc0JELEMsRUFBRztBQUN0QjtBQUNIOzs7K0NBRXNCQSxDLEVBQUc7QUFDdEIsaUJBQUtFLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxpQkFBS0Msc0JBQUwsQ0FBNEJILENBQTVCO0FBQ0g7Ozs2Q0FFb0JBLEMsRUFBRztBQUNwQixpQkFBS0UsWUFBTCxHQUFvQixLQUFwQjtBQUNIOzs7Ozs7a0JBRVVYLEkiLCJmaWxlIjoiVG9vbC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9vbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5lbCA9ICQoJzxkaXY+Jywge2NsYXNzOiAndG9vbCd9KS5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChuYW1lKSk7XHJcbiAgICAgICAgdGhpcy5lbC5hdHRyKCdkYXRhLW5hbWUnLCB0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgb25DbGljayhlKXtcclxuICAgICAgICB0aGlzLmVsLmFkZENsYXNzKCdzZWxlY3RlZC10b29sJyk7XHJcbiAgICB9XHJcbiAgICBjYW52YXNNb3VzZU1vdmVIYW5kbGVyKGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbnZhc01vdXNlRG93bkhhbmRsZXIoZSkge1xyXG4gICAgICAgIHRoaXMuaG9sZGluZ01vdXNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbnZhc01vdXNlTW92ZUhhbmRsZXIoZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbnZhc01vdXNlVXBIYW5kbGVyKGUpIHtcclxuICAgICAgICB0aGlzLmhvbGRpbmdNb3VzZSA9IGZhbHNlO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb29sOyJdfQ==

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(6);

	var _Tool3 = _interopRequireDefault(_Tool2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Eraser = function (_Tool) {
	    _inherits(Eraser, _Tool);

	    function Eraser(canvas) {
	        _classCallCheck(this, Eraser);

	        return _possibleConstructorReturn(this, (Eraser.__proto__ || Object.getPrototypeOf(Eraser)).call(this, canvas, 'eraser'));
	    }

	    _createClass(Eraser, [{
	        key: "canvasMouseMoveHandler",
	        value: function canvasMouseMoveHandler(e) {
	            if (this.holdingMouse) {
	                var indices = this.canvas.inputToPixelIndex(e.detail.event);
	                if (indices) {
	                    this.canvas.updatePixel(indices.x, indices.y, 0);
	                }
	            }
	        }
	    }]);

	    return Eraser;
	}(_Tool3.default);

	exports.default = Eraser;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRXJhc2VyLmpzIl0sIm5hbWVzIjpbIkVyYXNlciIsImNhbnZhcyIsImUiLCJob2xkaW5nTW91c2UiLCJpbmRpY2VzIiwiaW5wdXRUb1BpeGVsSW5kZXgiLCJkZXRhaWwiLCJldmVudCIsInVwZGF0ZVBpeGVsIiwieCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWUMsTUFBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNUQSxNQURTLEVBQ0QsUUFEQztBQUVsQjs7OzsrQ0FDc0JDLEMsRUFBRztBQUN0QixnQkFBSSxLQUFLQyxZQUFULEVBQXVCO0FBQ25CLG9CQUFJQyxVQUFVLEtBQUtILE1BQUwsQ0FBWUksaUJBQVosQ0FBOEJILEVBQUVJLE1BQUYsQ0FBU0MsS0FBdkMsQ0FBZDtBQUNBLG9CQUFHSCxPQUFILEVBQVc7QUFDUCx5QkFBS0gsTUFBTCxDQUFZTyxXQUFaLENBQXdCSixRQUFRSyxDQUFoQyxFQUFtQ0wsUUFBUU0sQ0FBM0MsRUFBOEMsQ0FBOUM7QUFDSDtBQUNKO0FBQ0o7Ozs7OztrQkFFVVYsTSIsImZpbGUiOiJFcmFzZXIuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb29sIGZyb20gXCIuL1Rvb2xcIjtcclxuXHJcbmNsYXNzIEVyYXNlciBleHRlbmRzIFRvb2x7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xyXG4gICAgICAgIHN1cGVyKGNhbnZhcywgJ2VyYXNlcicpO1xyXG4gICAgfVxyXG4gICAgY2FudmFzTW91c2VNb3ZlSGFuZGxlcihlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9sZGluZ01vdXNlKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRpY2VzID0gdGhpcy5jYW52YXMuaW5wdXRUb1BpeGVsSW5kZXgoZS5kZXRhaWwuZXZlbnQpO1xyXG4gICAgICAgICAgICBpZihpbmRpY2VzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLnVwZGF0ZVBpeGVsKGluZGljZXMueCwgaW5kaWNlcy55LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXJhc2VyOyJdfQ==

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ColorSelector = __webpack_require__(9);

	var _ColorSelector2 = _interopRequireDefault(_ColorSelector);

	var _HelpLines = __webpack_require__(12);

	var _HelpLines2 = _interopRequireDefault(_HelpLines);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SettingMenu = function () {
	    function SettingMenu(canvas) {
	        var _this = this;

	        _classCallCheck(this, SettingMenu);

	        this.el = $('#settingmenu');
	        this.settings = {};

	        var color = new _ColorSelector2.default(canvas);
	        var helpLines = new _HelpLines2.default(canvas);

	        this.settings[color.name] = color;
	        this.settings[helpLines.name] = helpLines;

	        for (var setting in this.settings) {
	            this.el.append(this.settings[setting].el);
	        }
	        this.toggleSetting(this.settings[helpLines.name]);

	        this.el[0].addEventListener('click', function (e) {
	            return _this.handleClick(e);
	        });
	    }

	    _createClass(SettingMenu, [{
	        key: "handleClick",
	        value: function handleClick(e) {
	            var target = $(e.target).hasClass('setting') ? $(e.target) : $(e.target).parents('.setting').length ? $(e.target).parents('.setting') : false;
	            if (target) {
	                var setting = this.settings[target.attr('data-name').replace('data-', '')];
	                this.toggleSetting(setting);
	            }
	        }
	    }, {
	        key: "toggleSetting",
	        value: function toggleSetting(setting) {
	            setting.onClick();
	        }
	    }]);

	    return SettingMenu;
	}();

	exports.default = SettingMenu;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcU2V0dGluZ01lbnUuanMiXSwibmFtZXMiOlsiU2V0dGluZ01lbnUiLCJjYW52YXMiLCJlbCIsIiQiLCJzZXR0aW5ncyIsImNvbG9yIiwiaGVscExpbmVzIiwibmFtZSIsInNldHRpbmciLCJhcHBlbmQiLCJ0b2dnbGVTZXR0aW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoYW5kbGVDbGljayIsInRhcmdldCIsImhhc0NsYXNzIiwicGFyZW50cyIsImxlbmd0aCIsImF0dHIiLCJyZXBsYWNlIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztJQUVNQSxXO0FBQ0YseUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFDaEIsYUFBS0MsRUFBTCxHQUFVQyxFQUFFLGNBQUYsQ0FBVjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUEsWUFBSUMsUUFBUSw0QkFBa0JKLE1BQWxCLENBQVo7QUFDQSxZQUFJSyxZQUFZLHdCQUFjTCxNQUFkLENBQWhCOztBQUVBLGFBQUtHLFFBQUwsQ0FBY0MsTUFBTUUsSUFBcEIsSUFBNEJGLEtBQTVCO0FBQ0EsYUFBS0QsUUFBTCxDQUFjRSxVQUFVQyxJQUF4QixJQUFnQ0QsU0FBaEM7O0FBRUEsYUFBSyxJQUFJRSxPQUFULElBQW9CLEtBQUtKLFFBQXpCLEVBQWtDO0FBQzlCLGlCQUFLRixFQUFMLENBQVFPLE1BQVIsQ0FBZSxLQUFLTCxRQUFMLENBQWNJLE9BQWQsRUFBdUJOLEVBQXRDO0FBQ0g7QUFDRCxhQUFLUSxhQUFMLENBQW1CLEtBQUtOLFFBQUwsQ0FBY0UsVUFBVUMsSUFBeEIsQ0FBbkI7O0FBRUEsYUFBS0wsRUFBTCxDQUFRLENBQVIsRUFBV1MsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtDLFdBQUwsQ0FBaUJELENBQWpCLENBQVA7QUFBQSxTQUFyQztBQUNIOzs7O29DQUVXQSxDLEVBQUc7QUFDWCxnQkFBSUUsU0FBU1gsRUFBRVMsRUFBRUUsTUFBSixFQUFZQyxRQUFaLENBQXFCLFNBQXJCLElBQWtDWixFQUFFUyxFQUFFRSxNQUFKLENBQWxDLEdBQWlEWCxFQUFFUyxFQUFFRSxNQUFKLEVBQVlFLE9BQVosQ0FBb0IsVUFBcEIsRUFBZ0NDLE1BQWpDLEdBQTJDZCxFQUFFUyxFQUFFRSxNQUFKLEVBQVlFLE9BQVosQ0FBb0IsVUFBcEIsQ0FBM0MsR0FBNkUsS0FBMUk7QUFDQSxnQkFBSUYsTUFBSixFQUFZO0FBQ1Isb0JBQUlOLFVBQVUsS0FBS0osUUFBTCxDQUFjVSxPQUFPSSxJQUFQLENBQVksV0FBWixFQUF5QkMsT0FBekIsQ0FBaUMsT0FBakMsRUFBMEMsRUFBMUMsQ0FBZCxDQUFkO0FBQ0EscUJBQUtULGFBQUwsQ0FBbUJGLE9BQW5CO0FBQ0g7QUFDSjs7O3NDQUNhQSxPLEVBQVE7QUFDbEJBLG9CQUFRWSxPQUFSO0FBQ0g7Ozs7OztrQkFFVXBCLFciLCJmaWxlIjoiU2V0dGluZ01lbnUuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2xvclNlbGVjdG9yIGZyb20gXCIuL0NvbG9yU2VsZWN0b3JcIjtcclxuaW1wb3J0IEhlbHBMaW5lcyBmcm9tIFwiLi9IZWxwTGluZXNcIjtcclxuXHJcbmNsYXNzIFNldHRpbmdNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuZWwgPSAkKCcjc2V0dGluZ21lbnUnKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge307XHJcblxyXG4gICAgICAgIGxldCBjb2xvciA9IG5ldyBDb2xvclNlbGVjdG9yKGNhbnZhcyk7XHJcbiAgICAgICAgbGV0IGhlbHBMaW5lcyA9IG5ldyBIZWxwTGluZXMoY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1tjb2xvci5uYW1lXSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NbaGVscExpbmVzLm5hbWVdID0gaGVscExpbmVzO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzZXR0aW5nIGluIHRoaXMuc2V0dGluZ3Mpe1xyXG4gICAgICAgICAgICB0aGlzLmVsLmFwcGVuZCh0aGlzLnNldHRpbmdzW3NldHRpbmddLmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2dnbGVTZXR0aW5nKHRoaXMuc2V0dGluZ3NbaGVscExpbmVzLm5hbWVdKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbFswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhlKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdzZXR0aW5nJykgPyAkKGUudGFyZ2V0KSA6ICgkKGUudGFyZ2V0KS5wYXJlbnRzKCcuc2V0dGluZycpLmxlbmd0aCkgPyAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuc2V0dGluZycpIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IHRoaXMuc2V0dGluZ3NbdGFyZ2V0LmF0dHIoJ2RhdGEtbmFtZScpLnJlcGxhY2UoJ2RhdGEtJywgJycpXTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTZXR0aW5nKHNldHRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvZ2dsZVNldHRpbmcoc2V0dGluZyl7XHJcbiAgICAgICAgc2V0dGluZy5vbkNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ01lbnU7Il19

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CanvasSetting2 = __webpack_require__(10);

	var _CanvasSetting3 = _interopRequireDefault(_CanvasSetting2);

	var _HelpFunctions = __webpack_require__(11);

	var _HelpFunctions2 = _interopRequireDefault(_HelpFunctions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColorSelector = function (_CanvasSetting) {
	    _inherits(ColorSelector, _CanvasSetting);

	    function ColorSelector(canvas) {
	        _classCallCheck(this, ColorSelector);

	        var _this = _possibleConstructorReturn(this, (ColorSelector.__proto__ || Object.getPrototypeOf(ColorSelector)).call(this, canvas, 'color'));

	        _this.selectEl = $('.colorSelector');
	        var image = $('img', _this.selectEl);

	        _this.selectColorCanvas = document.createElement('canvas');
	        _this.selectColorCanvas.width = image.width();
	        _this.selectColorCanvas.height = image.height();
	        _this.selectColorCanvas.getContext('2d').drawImage(image[0], 0, 0, image.width(), image.height());

	        image.on('mousemove', function (e) {
	            return _this.hoverHandler(e);
	        });
	        image.on('click', function (e) {
	            return _this.clickHandler(e);
	        });
	        return _this;
	    }

	    _createClass(ColorSelector, [{
	        key: "clickHandler",
	        value: function clickHandler(e) {
	            var pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
	            var hexColor = _HelpFunctions2.default.rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
	            $('.selectedColorDisplay', this.selectEl).css('background-color', hexColor);
	            this.canvas.setSelectedColor(hexColor);
	        }
	    }, {
	        key: "hoverHandler",
	        value: function hoverHandler(e) {
	            var pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
	            $('.red-display', this.selectEl).text(pixelData[0]);
	            $('.green-display', this.selectEl).text(pixelData[1]);
	            $('.blue-display', this.selectEl).text(pixelData[2]);
	            $('.colorDisplay', this.selectEl).css('background-color', _HelpFunctions2.default.rgbToHex(pixelData[0], pixelData[1], pixelData[2]));
	        }
	    }, {
	        key: "onClick",
	        value: function onClick(e) {
	            this.selectEl.toggle();
	            this.el.toggleClass('selected-tool');
	            this.active = !this.active;
	        }
	    }, {
	        key: "canvasMouseMoveHandler",
	        value: function canvasMouseMoveHandler(e) {
	            return;
	        }
	    }, {
	        key: "canvasMouseDownHandler",
	        value: function canvasMouseDownHandler(e) {
	            return;
	        }
	    }, {
	        key: "canvasMouseUpHandler",
	        value: function canvasMouseUpHandler(e) {
	            return;
	        }
	    }]);

	    return ColorSelector;
	}(_CanvasSetting3.default);

	exports.default = ColorSelector;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQ29sb3JTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJDb2xvclNlbGVjdG9yIiwiY2FudmFzIiwic2VsZWN0RWwiLCIkIiwiaW1hZ2UiLCJzZWxlY3RDb2xvckNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIm9uIiwiZSIsImhvdmVySGFuZGxlciIsImNsaWNrSGFuZGxlciIsInBpeGVsRGF0YSIsImdldEltYWdlRGF0YSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZGF0YSIsImhleENvbG9yIiwicmdiVG9IZXgiLCJjc3MiLCJzZXRTZWxlY3RlZENvbG9yIiwidGV4dCIsInRvZ2dsZSIsImVsIiwidG9nZ2xlQ2xhc3MiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGE7OztBQUNGLDJCQUFZQyxNQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1RBLE1BRFMsRUFDRCxPQURDOztBQUVmLGNBQUtDLFFBQUwsR0FBZ0JDLEVBQUUsZ0JBQUYsQ0FBaEI7QUFDQSxZQUFJQyxRQUFRRCxFQUFFLEtBQUYsRUFBUyxNQUFLRCxRQUFkLENBQVo7O0FBRUEsY0FBS0csaUJBQUwsR0FBeUJDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBekI7QUFDQSxjQUFLRixpQkFBTCxDQUF1QkcsS0FBdkIsR0FBK0JKLE1BQU1JLEtBQU4sRUFBL0I7QUFDQSxjQUFLSCxpQkFBTCxDQUF1QkksTUFBdkIsR0FBZ0NMLE1BQU1LLE1BQU4sRUFBaEM7QUFDQSxjQUFLSixpQkFBTCxDQUF1QkssVUFBdkIsQ0FBa0MsSUFBbEMsRUFBd0NDLFNBQXhDLENBQWtEUCxNQUFNLENBQU4sQ0FBbEQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0QsRUFBa0VBLE1BQU1JLEtBQU4sRUFBbEUsRUFBaUZKLE1BQU1LLE1BQU4sRUFBakY7O0FBRUFMLGNBQU1RLEVBQU4sQ0FBUyxXQUFULEVBQXNCLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLQyxZQUFMLENBQWtCRCxDQUFsQixDQUFQO0FBQUEsU0FBdEI7QUFDQVQsY0FBTVEsRUFBTixDQUFTLE9BQVQsRUFBa0IsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtFLFlBQUwsQ0FBa0JGLENBQWxCLENBQVA7QUFBQSxTQUFsQjtBQVhlO0FBWWxCOzs7O3FDQUNZQSxDLEVBQUU7QUFDWCxnQkFBSUcsWUFBWSxLQUFLWCxpQkFBTCxDQUF1QkssVUFBdkIsQ0FBa0MsSUFBbEMsRUFBd0NPLFlBQXhDLENBQXFESixFQUFFSyxPQUF2RCxFQUFnRUwsRUFBRU0sT0FBbEUsRUFBMkUsQ0FBM0UsRUFBOEUsQ0FBOUUsRUFBaUZDLElBQWpHO0FBQ0EsZ0JBQUlDLFdBQVcsd0JBQWNDLFFBQWQsQ0FBdUJOLFVBQVUsQ0FBVixDQUF2QixFQUFxQ0EsVUFBVSxDQUFWLENBQXJDLEVBQW1EQSxVQUFVLENBQVYsQ0FBbkQsQ0FBZjtBQUNBYixjQUFFLHVCQUFGLEVBQTJCLEtBQUtELFFBQWhDLEVBQTBDcUIsR0FBMUMsQ0FBOEMsa0JBQTlDLEVBQWtFRixRQUFsRTtBQUNBLGlCQUFLcEIsTUFBTCxDQUFZdUIsZ0JBQVosQ0FBNkJILFFBQTdCO0FBQ0g7OztxQ0FDWVIsQyxFQUFFO0FBQ1gsZ0JBQUlHLFlBQVksS0FBS1gsaUJBQUwsQ0FBdUJLLFVBQXZCLENBQWtDLElBQWxDLEVBQXdDTyxZQUF4QyxDQUFxREosRUFBRUssT0FBdkQsRUFBZ0VMLEVBQUVNLE9BQWxFLEVBQTJFLENBQTNFLEVBQThFLENBQTlFLEVBQWlGQyxJQUFqRztBQUNBakIsY0FBRSxjQUFGLEVBQWtCLEtBQUtELFFBQXZCLEVBQWlDdUIsSUFBakMsQ0FBc0NULFVBQVUsQ0FBVixDQUF0QztBQUNBYixjQUFFLGdCQUFGLEVBQW9CLEtBQUtELFFBQXpCLEVBQW1DdUIsSUFBbkMsQ0FBd0NULFVBQVUsQ0FBVixDQUF4QztBQUNBYixjQUFFLGVBQUYsRUFBbUIsS0FBS0QsUUFBeEIsRUFBa0N1QixJQUFsQyxDQUF1Q1QsVUFBVSxDQUFWLENBQXZDO0FBQ0FiLGNBQUUsZUFBRixFQUFtQixLQUFLRCxRQUF4QixFQUFrQ3FCLEdBQWxDLENBQXNDLGtCQUF0QyxFQUEwRCx3QkFBY0QsUUFBZCxDQUF1Qk4sVUFBVSxDQUFWLENBQXZCLEVBQXFDQSxVQUFVLENBQVYsQ0FBckMsRUFBbURBLFVBQVUsQ0FBVixDQUFuRCxDQUExRDtBQUNIOzs7Z0NBQ09ILEMsRUFBRTtBQUNOLGlCQUFLWCxRQUFMLENBQWN3QixNQUFkO0FBQ0EsaUJBQUtDLEVBQUwsQ0FBUUMsV0FBUixDQUFvQixlQUFwQjtBQUNBLGlCQUFLQyxNQUFMLEdBQWMsQ0FBQyxLQUFLQSxNQUFwQjtBQUNIOzs7K0NBQ3NCaEIsQyxFQUFHO0FBQ3RCO0FBQ0g7OzsrQ0FFc0JBLEMsRUFBRztBQUN0QjtBQUNIOzs7NkNBRW9CQSxDLEVBQUc7QUFDcEI7QUFDSDs7Ozs7O2tCQUVVYixhIiwiZmlsZSI6IkNvbG9yU2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXNTZXR0aW5nIGZyb20gXCIuL0NhbnZhc1NldHRpbmdcIjtcclxuaW1wb3J0IEhlbHBGdW5jdGlvbnMgZnJvbSBcIi4vSGVscEZ1bmN0aW9uc1wiO1xyXG5cclxuY2xhc3MgQ29sb3JTZWxlY3RvciBleHRlbmRzIENhbnZhc1NldHRpbmd7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xyXG4gICAgICAgIHN1cGVyKGNhbnZhcywgJ2NvbG9yJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RFbCA9ICQoJy5jb2xvclNlbGVjdG9yJyk7XHJcbiAgICAgICAgbGV0IGltYWdlID0gJCgnaW1nJywgdGhpcy5zZWxlY3RFbCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0Q29sb3JDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLnNlbGVjdENvbG9yQ2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGgoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdENvbG9yQ2FudmFzLmhlaWdodCA9IGltYWdlLmhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q29sb3JDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1hZ2VbMF0sIDAsIDAsIGltYWdlLndpZHRoKCksIGltYWdlLmhlaWdodCgpKTtcclxuXHJcbiAgICAgICAgaW1hZ2Uub24oJ21vdXNlbW92ZScsIChlKSA9PiB0aGlzLmhvdmVySGFuZGxlcihlKSk7XHJcbiAgICAgICAgaW1hZ2Uub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpKTtcclxuICAgIH1cclxuICAgIGNsaWNrSGFuZGxlcihlKXtcclxuICAgICAgICBsZXQgcGl4ZWxEYXRhID0gdGhpcy5zZWxlY3RDb2xvckNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YShlLm9mZnNldFgsIGUub2Zmc2V0WSwgMSwgMSkuZGF0YTtcclxuICAgICAgICBsZXQgaGV4Q29sb3IgPSBIZWxwRnVuY3Rpb25zLnJnYlRvSGV4KHBpeGVsRGF0YVswXSwgcGl4ZWxEYXRhWzFdLCBwaXhlbERhdGFbMl0pO1xyXG4gICAgICAgICQoJy5zZWxlY3RlZENvbG9yRGlzcGxheScsIHRoaXMuc2VsZWN0RWwpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGhleENvbG9yKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRTZWxlY3RlZENvbG9yKGhleENvbG9yKTtcclxuICAgIH1cclxuICAgIGhvdmVySGFuZGxlcihlKXtcclxuICAgICAgICBsZXQgcGl4ZWxEYXRhID0gdGhpcy5zZWxlY3RDb2xvckNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YShlLm9mZnNldFgsIGUub2Zmc2V0WSwgMSwgMSkuZGF0YTtcclxuICAgICAgICAkKCcucmVkLWRpc3BsYXknLCB0aGlzLnNlbGVjdEVsKS50ZXh0KHBpeGVsRGF0YVswXSk7XHJcbiAgICAgICAgJCgnLmdyZWVuLWRpc3BsYXknLCB0aGlzLnNlbGVjdEVsKS50ZXh0KHBpeGVsRGF0YVsxXSk7XHJcbiAgICAgICAgJCgnLmJsdWUtZGlzcGxheScsIHRoaXMuc2VsZWN0RWwpLnRleHQocGl4ZWxEYXRhWzJdKTtcclxuICAgICAgICAkKCcuY29sb3JEaXNwbGF5JywgdGhpcy5zZWxlY3RFbCkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgSGVscEZ1bmN0aW9ucy5yZ2JUb0hleChwaXhlbERhdGFbMF0sIHBpeGVsRGF0YVsxXSwgcGl4ZWxEYXRhWzJdKSk7XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKGUpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RWwudG9nZ2xlKCk7XHJcbiAgICAgICAgdGhpcy5lbC50b2dnbGVDbGFzcygnc2VsZWN0ZWQtdG9vbCcpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlO1xyXG4gICAgfVxyXG4gICAgY2FudmFzTW91c2VNb3ZlSGFuZGxlcihlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICBjYW52YXNNb3VzZURvd25IYW5kbGVyKGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbnZhc01vdXNlVXBIYW5kbGVyKGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yU2VsZWN0b3I7XHJcbiJdfQ==

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CanvasSetting = function () {
	    function CanvasSetting(canvas, name) {
	        _classCallCheck(this, CanvasSetting);

	        this.name = name;
	        this.canvas = canvas;
	        this.active = false;
	        this.el = $('<div>', { class: 'setting' }).append($('<span>').text(name));
	        this.el.attr('data-name', this.name);
	    }

	    _createClass(CanvasSetting, [{
	        key: 'onClick',
	        value: function onClick(e) {
	            this.active = !this.active;
	        }
	    }]);

	    return CanvasSetting;
	}();

	exports.default = CanvasSetting;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQ2FudmFzU2V0dGluZy5qcyJdLCJuYW1lcyI6WyJDYW52YXNTZXR0aW5nIiwiY2FudmFzIiwibmFtZSIsImFjdGl2ZSIsImVsIiwiJCIsImNsYXNzIiwiYXBwZW5kIiwidGV4dCIsImF0dHIiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGE7QUFDRiwyQkFBWUMsTUFBWixFQUFvQkMsSUFBcEIsRUFBeUI7QUFBQTs7QUFDckIsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsYUFBS0UsTUFBTCxHQUFjLEtBQWQ7QUFDQSxhQUFLQyxFQUFMLEdBQVVDLEVBQUUsT0FBRixFQUFXLEVBQUNDLE9BQU8sU0FBUixFQUFYLEVBQStCQyxNQUEvQixDQUFzQ0YsRUFBRSxRQUFGLEVBQVlHLElBQVosQ0FBaUJOLElBQWpCLENBQXRDLENBQVY7QUFDQSxhQUFLRSxFQUFMLENBQVFLLElBQVIsQ0FBYSxXQUFiLEVBQTBCLEtBQUtQLElBQS9CO0FBQ0g7Ozs7Z0NBQ09RLEMsRUFBRTtBQUNOLGlCQUFLUCxNQUFMLEdBQWMsQ0FBQyxLQUFLQSxNQUFwQjtBQUNIOzs7Ozs7a0JBRVVILGEiLCJmaWxlIjoiQ2FudmFzU2V0dGluZy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FudmFzU2V0dGluZ3tcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWwgPSAkKCc8ZGl2PicsIHtjbGFzczogJ3NldHRpbmcnfSkuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQobmFtZSkpO1xyXG4gICAgICAgIHRoaXMuZWwuYXR0cignZGF0YS1uYW1lJywgdGhpcy5uYW1lKVxyXG4gICAgfVxyXG4gICAgb25DbGljayhlKXtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYW52YXNTZXR0aW5nOyJdfQ==

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HelpFunctions = function () {
	    function HelpFunctions() {
	        _classCallCheck(this, HelpFunctions);
	    }

	    _createClass(HelpFunctions, null, [{
	        key: "componentToHex",

	        //==================from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb======================
	        value: function componentToHex(c) {
	            var hex = c.toString(16);
	            return hex.length == 1 ? "0" + hex : hex;
	        }
	    }, {
	        key: "rgbToHex",
	        value: function rgbToHex(r, g, b) {
	            return "#" + HelpFunctions.componentToHex(r) + HelpFunctions.componentToHex(g) + HelpFunctions.componentToHex(b);
	        }
	        //===================from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb=====================

	    }]);

	    return HelpFunctions;
	}();

	exports.default = HelpFunctions;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcSGVscEZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJIZWxwRnVuY3Rpb25zIiwiYyIsImhleCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiciIsImciLCJiIiwiY29tcG9uZW50VG9IZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYTs7Ozs7Ozs7QUFDRjt1Q0FDc0JDLEMsRUFBRztBQUNyQixnQkFBSUMsTUFBTUQsRUFBRUUsUUFBRixDQUFXLEVBQVgsQ0FBVjtBQUNBLG1CQUFPRCxJQUFJRSxNQUFKLElBQWMsQ0FBZCxHQUFrQixNQUFNRixHQUF4QixHQUE4QkEsR0FBckM7QUFDSDs7O2lDQUVlRyxDLEVBQUdDLEMsRUFBR0MsQyxFQUFHO0FBQ3JCLG1CQUFPLE1BQU1QLGNBQWNRLGNBQWQsQ0FBNkJILENBQTdCLENBQU4sR0FBd0NMLGNBQWNRLGNBQWQsQ0FBNkJGLENBQTdCLENBQXhDLEdBQTBFTixjQUFjUSxjQUFkLENBQTZCRCxDQUE3QixDQUFqRjtBQUNIO0FBQ0Q7Ozs7Ozs7a0JBRVdQLGEiLCJmaWxlIjoiSGVscEZ1bmN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSGVscEZ1bmN0aW9ucyB7XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PWZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYyMzgzOC9yZ2ItdG8taGV4LWFuZC1oZXgtdG8tcmdiPT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgc3RhdGljIGNvbXBvbmVudFRvSGV4KGMpIHtcclxuICAgICAgICBsZXQgaGV4ID0gYy50b1N0cmluZygxNik7XHJcbiAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZ2JUb0hleChyLCBnLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgSGVscEZ1bmN0aW9ucy5jb21wb25lbnRUb0hleChyKSArIEhlbHBGdW5jdGlvbnMuY29tcG9uZW50VG9IZXgoZykgKyBIZWxwRnVuY3Rpb25zLmNvbXBvbmVudFRvSGV4KGIpO1xyXG4gICAgfVxyXG4gICAgLy89PT09PT09PT09PT09PT09PT09ZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjIzODM4L3JnYi10by1oZXgtYW5kLWhleC10by1yZ2I9PT09PT09PT09PT09PT09PT09PT1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWxwRnVuY3Rpb25zIl19

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CanvasSetting = __webpack_require__(10);

	var _CanvasSetting2 = _interopRequireDefault(_CanvasSetting);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelpLines = function (_ToggleTool) {
	    _inherits(HelpLines, _ToggleTool);

	    function HelpLines(canvas) {
	        _classCallCheck(this, HelpLines);

	        return _possibleConstructorReturn(this, (HelpLines.__proto__ || Object.getPrototypeOf(HelpLines)).call(this, canvas, 'Helplines'));
	    }

	    _createClass(HelpLines, [{
	        key: 'onClick',
	        value: function onClick(e) {
	            this.el.toggleClass('selected-tool');
	            this.active = !this.active;
	            if (this.active) {
	                this.drawHelpLines();
	            } else {
	                this.removeHelpLines();
	            }
	        }
	    }, {
	        key: 'drawHelpLines',
	        value: function drawHelpLines() {
	            var c = this.canvas.helpCanvas[0];
	            var ctx = c.getContext("2d");
	            ctx.beginPath();
	            for (var i = 1; i < this.canvas.width; i++) {
	                ctx.moveTo(this.canvas.position.x + i * this.canvas.scale + 0.5, this.canvas.position.y + 0.5);
	                ctx.lineTo(this.canvas.position.x + i * this.canvas.scale + 0.5, this.canvas.position.y + this.canvas.height * this.canvas.scale + 0.5);
	            }
	            for (var j = 1; j < this.canvas.height; j++) {
	                ctx.moveTo(this.canvas.position.x + 0.5, this.canvas.position.y + j * this.canvas.scale + 0.5);
	                ctx.lineTo(this.canvas.position.x + this.canvas.width * this.canvas.scale + 0.5, this.canvas.position.y + j * this.canvas.scale + 0.5);
	            }
	            ctx.stroke();
	            ctx.closePath();
	            // dit is echt lelijk
	        }
	    }, {
	        key: 'removeHelpLines',
	        value: function removeHelpLines() {
	            this.canvas.clearCanvas(this.canvas.helpCanvas);
	            this.canvas.drawOutlining();
	        }
	    }, {
	        key: 'canvasMouseMoveHandler',
	        value: function canvasMouseMoveHandler(e) {
	            return;
	        }
	    }, {
	        key: 'canvasMouseDownHandler',
	        value: function canvasMouseDownHandler(e) {
	            return;
	        }
	    }, {
	        key: 'canvasMouseUpHandler',
	        value: function canvasMouseUpHandler(e) {
	            return;
	        }
	    }]);

	    return HelpLines;
	}(_CanvasSetting2.default);

	exports.default = HelpLines;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcSGVscExpbmVzLmpzIl0sIm5hbWVzIjpbIkhlbHBMaW5lcyIsImNhbnZhcyIsImUiLCJlbCIsInRvZ2dsZUNsYXNzIiwiYWN0aXZlIiwiZHJhd0hlbHBMaW5lcyIsInJlbW92ZUhlbHBMaW5lcyIsImMiLCJoZWxwQ2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJlZ2luUGF0aCIsImkiLCJ3aWR0aCIsIm1vdmVUbyIsInBvc2l0aW9uIiwieCIsInNjYWxlIiwieSIsImxpbmVUbyIsImhlaWdodCIsImoiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJjbGVhckNhbnZhcyIsImRyYXdPdXRsaW5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7QUFDRix1QkFBWUMsTUFBWixFQUFtQjtBQUFBOztBQUFBLHFIQUNUQSxNQURTLEVBQ0QsV0FEQztBQUVsQjs7OztnQ0FDT0MsQyxFQUFFO0FBQ04saUJBQUtDLEVBQUwsQ0FBUUMsV0FBUixDQUFvQixlQUFwQjtBQUNBLGlCQUFLQyxNQUFMLEdBQWMsQ0FBQyxLQUFLQSxNQUFwQjtBQUNBLGdCQUFHLEtBQUtBLE1BQVIsRUFBZTtBQUNYLHFCQUFLQyxhQUFMO0FBQ0gsYUFGRCxNQUVLO0FBQ0QscUJBQUtDLGVBQUw7QUFDSDtBQUNKOzs7d0NBQ2U7QUFDWixnQkFBSUMsSUFBSSxLQUFLUCxNQUFMLENBQVlRLFVBQVosQ0FBdUIsQ0FBdkIsQ0FBUjtBQUNBLGdCQUFJQyxNQUFNRixFQUFFRyxVQUFGLENBQWEsSUFBYixDQUFWO0FBQ0FELGdCQUFJRSxTQUFKO0FBQ0EsaUJBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtaLE1BQUwsQ0FBWWEsS0FBaEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQ3hDSCxvQkFBSUssTUFBSixDQUFXLEtBQUtkLE1BQUwsQ0FBWWUsUUFBWixDQUFxQkMsQ0FBckIsR0FBeUJKLElBQUksS0FBS1osTUFBTCxDQUFZaUIsS0FBekMsR0FBaUQsR0FBNUQsRUFBaUUsS0FBS2pCLE1BQUwsQ0FBWWUsUUFBWixDQUFxQkcsQ0FBckIsR0FBeUIsR0FBMUY7QUFDQVQsb0JBQUlVLE1BQUosQ0FBVyxLQUFLbkIsTUFBTCxDQUFZZSxRQUFaLENBQXFCQyxDQUFyQixHQUF5QkosSUFBSSxLQUFLWixNQUFMLENBQVlpQixLQUF6QyxHQUFpRCxHQUE1RCxFQUFpRSxLQUFLakIsTUFBTCxDQUFZZSxRQUFaLENBQXFCRyxDQUFyQixHQUF5QixLQUFLbEIsTUFBTCxDQUFZb0IsTUFBWixHQUFxQixLQUFLcEIsTUFBTCxDQUFZaUIsS0FBMUQsR0FBa0UsR0FBbkk7QUFDSDtBQUNELGlCQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLckIsTUFBTCxDQUFZb0IsTUFBaEMsRUFBd0NDLEdBQXhDLEVBQTZDO0FBQ3pDWixvQkFBSUssTUFBSixDQUFXLEtBQUtkLE1BQUwsQ0FBWWUsUUFBWixDQUFxQkMsQ0FBckIsR0FBeUIsR0FBcEMsRUFBeUMsS0FBS2hCLE1BQUwsQ0FBWWUsUUFBWixDQUFxQkcsQ0FBckIsR0FBeUJHLElBQUksS0FBS3JCLE1BQUwsQ0FBWWlCLEtBQXpDLEdBQWlELEdBQTFGO0FBQ0FSLG9CQUFJVSxNQUFKLENBQVcsS0FBS25CLE1BQUwsQ0FBWWUsUUFBWixDQUFxQkMsQ0FBckIsR0FBeUIsS0FBS2hCLE1BQUwsQ0FBWWEsS0FBWixHQUFvQixLQUFLYixNQUFMLENBQVlpQixLQUF6RCxHQUFpRSxHQUE1RSxFQUFpRixLQUFLakIsTUFBTCxDQUFZZSxRQUFaLENBQXFCRyxDQUFyQixHQUF5QkcsSUFBSSxLQUFLckIsTUFBTCxDQUFZaUIsS0FBekMsR0FBaUQsR0FBbEk7QUFDSDtBQUNEUixnQkFBSWEsTUFBSjtBQUNBYixnQkFBSWMsU0FBSjtBQUNBO0FBQ0g7OzswQ0FDZ0I7QUFDYixpQkFBS3ZCLE1BQUwsQ0FBWXdCLFdBQVosQ0FBd0IsS0FBS3hCLE1BQUwsQ0FBWVEsVUFBcEM7QUFDQSxpQkFBS1IsTUFBTCxDQUFZeUIsYUFBWjtBQUNIOzs7K0NBQ3NCeEIsQyxFQUFHO0FBQ3RCO0FBQ0g7OzsrQ0FFc0JBLEMsRUFBRztBQUN0QjtBQUNIOzs7NkNBRW9CQSxDLEVBQUc7QUFDcEI7QUFDSDs7Ozs7O2tCQUVVRixTIiwiZmlsZSI6IkhlbHBMaW5lcy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZ2dsZVRvb2wgZnJvbSBcIi4vQ2FudmFzU2V0dGluZ1wiO1xyXG5cclxuY2xhc3MgSGVscExpbmVzIGV4dGVuZHMgVG9nZ2xlVG9vbHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcyl7XHJcbiAgICAgICAgc3VwZXIoY2FudmFzLCAnSGVscGxpbmVzJyk7XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKGUpe1xyXG4gICAgICAgIHRoaXMuZWwudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkLXRvb2wnKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcclxuICAgICAgICBpZih0aGlzLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0hlbHBMaW5lcygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUhlbHBMaW5lcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYXdIZWxwTGluZXMoKSB7XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmNhbnZhcy5oZWxwQ2FudmFzWzBdO1xyXG4gICAgICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmNhbnZhcy53aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy5jYW52YXMucG9zaXRpb24ueCArIGkgKiB0aGlzLmNhbnZhcy5zY2FsZSArIDAuNSwgdGhpcy5jYW52YXMucG9zaXRpb24ueSArIDAuNSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMucG9zaXRpb24ueCArIGkgKiB0aGlzLmNhbnZhcy5zY2FsZSArIDAuNSwgdGhpcy5jYW52YXMucG9zaXRpb24ueSArIHRoaXMuY2FudmFzLmhlaWdodCAqIHRoaXMuY2FudmFzLnNjYWxlICsgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCB0aGlzLmNhbnZhcy5oZWlnaHQ7IGorKykge1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMuY2FudmFzLnBvc2l0aW9uLnggKyAwLjUsIHRoaXMuY2FudmFzLnBvc2l0aW9uLnkgKyBqICogdGhpcy5jYW52YXMuc2NhbGUgKyAwLjUpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLnBvc2l0aW9uLnggKyB0aGlzLmNhbnZhcy53aWR0aCAqIHRoaXMuY2FudmFzLnNjYWxlICsgMC41LCB0aGlzLmNhbnZhcy5wb3NpdGlvbi55ICsgaiAqIHRoaXMuY2FudmFzLnNjYWxlICsgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAvLyBkaXQgaXMgZWNodCBsZWxpamtcclxuICAgIH07XHJcbiAgICByZW1vdmVIZWxwTGluZXMoKXtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhckNhbnZhcyh0aGlzLmNhbnZhcy5oZWxwQ2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3T3V0bGluaW5nKCk7XHJcbiAgICB9XHJcbiAgICBjYW52YXNNb3VzZU1vdmVIYW5kbGVyKGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbnZhc01vdXNlRG93bkhhbmRsZXIoZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgY2FudmFzTW91c2VVcEhhbmRsZXIoZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVscExpbmVzO1xyXG5cclxuIl19

/***/ })
/******/ ]);