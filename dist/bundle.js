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

	var _Chat = __webpack_require__(5);

	var _Chat2 = _interopRequireDefault(_Chat);

	var _Toolbar = __webpack_require__(6);

	var _Toolbar2 = _interopRequireDefault(_Toolbar);

	var _SettingMenu = __webpack_require__(10);

	var _SettingMenu2 = _interopRequireDefault(_SettingMenu);

	var _createNewRoom = __webpack_require__(14);

	var _createNewRoom2 = _interopRequireDefault(_createNewRoom);

	var _roomList = __webpack_require__(15);

	var _roomList2 = _interopRequireDefault(_roomList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    var init = function init() {
	        try {
	            var canvas = new _DrawCanvas2.default();
	            new _Chat2.default();
	            new _Toolbar2.default(canvas);
	            new _SettingMenu2.default(canvas);
	        } catch (e) {
	            new _roomList2.default();
	            new _createNewRoom2.default();
	        }
	    };
	    init();
	})();
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJpbml0IiwiY2FudmFzIiwiZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLENBQUMsWUFBVTtBQUNQLFFBQUlBLE9BQU8sU0FBUEEsSUFBTyxHQUFVO0FBQ2pCLFlBQUc7QUFDQyxnQkFBSUMsU0FBUywwQkFBYjtBQUNBO0FBQ0Esa0NBQVlBLE1BQVo7QUFDQSxzQ0FBZ0JBLE1BQWhCO0FBQ0gsU0FMRCxDQU9BLE9BQU1DLENBQU4sRUFBUTtBQUNKO0FBQ0E7QUFDSDtBQUVKLEtBYkQ7QUFjQUY7QUFDSCxDQWhCRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJhd0NhbnZhcyBmcm9tIFwiLi92aWV3cy9yb29tL0RyYXdDYW52YXNcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4vdmlld3Mvcm9vbS9DaGF0XCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL3ZpZXdzL3Jvb20vVG9vbGJhclwiO1xyXG5pbXBvcnQgU2V0dGluZ01lbnUgZnJvbSBcIi4vdmlld3Mvcm9vbS9TZXR0aW5nTWVudVwiO1xyXG5cclxuaW1wb3J0IENyZWF0ZU5ld1Jvb20gZnJvbSBcIi4vdmlld3MvbGlzdFZpZXcvY3JlYXRlTmV3Um9vbVwiO1xyXG5pbXBvcnQgUm9vbUxpc3QgZnJvbSBcIi4vdmlld3MvbGlzdFZpZXcvcm9vbUxpc3RcIjtcclxuXHJcbihmdW5jdGlvbigpe1xyXG4gICAgbGV0IGluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IG5ldyBEcmF3Q2FudmFzKCk7XHJcbiAgICAgICAgICAgIG5ldyBDaGF0KCk7XHJcbiAgICAgICAgICAgIG5ldyBUb29sYmFyKGNhbnZhcyk7XHJcbiAgICAgICAgICAgIG5ldyBTZXR0aW5nTWVudShjYW52YXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIG5ldyBSb29tTGlzdCgpO1xyXG4gICAgICAgICAgICBuZXcgQ3JlYXRlTmV3Um9vbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG4gICAgaW5pdCgpO1xyXG59KSgpO1xyXG5cclxuIl19

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DataStreamHandler = __webpack_require__(2);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	var _HelpFunctions = __webpack_require__(3);

	var _HelpFunctions2 = _interopRequireDefault(_HelpFunctions);

	var _CanvasInputHandler = __webpack_require__(4);

	var _CanvasInputHandler2 = _interopRequireDefault(_CanvasInputHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DrawCanvas = function () {
	    function DrawCanvas() {
	        var _this = this;

	        _classCallCheck(this, DrawCanvas);

	        var room = window.location.href.slice(window.location.href.search(/[^\/]+$/));
	        _DataStreamHandler2.default.joinRoom(room);

	        this.scale = 5;
	        this.height = 100; // how many pixels on the Y axis
	        this.width = 200; //  how many pixels on the x axis
	        this.pixels = [];
	        this.selectedColor = '#000000';
	        this.dragging = false;
	        for (var i = 0; i < this.width; i++) {
	            this.pixels[i] = [];
	            for (var j = 0; j < this.height; j++) {
	                this.pixels[i][j] = 0;
	            }
	        }
	        document.addEventListener('updatePixels', function (e) {
	            return _this.updateNewPixels(e);
	        });
	        document.addEventListener('canvasRedraw', function () {
	            return _this.canvasRedraw();
	        });
	        document.addEventListener('canvasZoomIn', function () {
	            return _this.zoomIn();
	        });
	        document.addEventListener('canvasZoomOut', function () {
	            return _this.zoomOut();
	        });
	        document.addEventListener('canvasReposition', function (e) {
	            return _this.reposition(e);
	        });

	        this.el = $('#drawWrapper');
	        this.canvas = $('#canvas');
	        this.helpCanvas = $('#helpCanvas');
	        this.canvas.attr('width', _HelpFunctions2.default.makeEven(this.canvas.parent().width()));
	        this.canvas.attr('height', _HelpFunctions2.default.makeEven(this.canvas.parent().height()));
	        this.helpCanvas.attr('width', _HelpFunctions2.default.makeEven(this.canvas.parent().width()));
	        this.helpCanvas.attr('height', _HelpFunctions2.default.makeEven(this.canvas.parent().height()));

	        new _CanvasInputHandler2.default(this.canvas);

	        this.position = {
	            x: this.canvas.width() / 2 - this.width * this.scale / 2,
	            y: this.canvas.height() / 2 - this.height * this.scale / 2
	        };
	        var ctx = this.canvas[0].getContext('2d');
	        ctx.imageSmoothingEnabled = false;

	        this.drawOutlining();
	    }

	    _createClass(DrawCanvas, [{
	        key: "updateNewPixels",
	        value: function updateNewPixels(e) {
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
	        key: "canvasRedraw",
	        value: function canvasRedraw() {
	            this.clearCanvas(this.canvas);
	            this.clearCanvas(this.helpCanvas);

	            for (var i = 0; i < this.width; i++) {
	                for (var j = 0; j < this.height; j++) {
	                    if (this.pixels[i][j] != 0) {
	                        this.fillPixel(i, j, this.pixels[i][j], this.canvas);
	                    }
	                }
	            }
	            this.drawOutlining();
	        }
	    }, {
	        key: "updatePixel",
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
	        key: "drawOutlining",
	        value: function drawOutlining() {
	            var c = this.helpCanvas[0];
	            var ctx = c.getContext("2d");
	            ctx.beginPath();
	            ctx.rect(this.position.x + 0.5, this.position.y + 0.5, this.width * this.scale, this.height * this.scale);
	            ctx.stroke();
	            ctx.closePath();
	        }
	    }, {
	        key: "fillPixel",
	        value: function fillPixel(x, y, color, canvas) {
	            var c = canvas[0];
	            var ctx = c.getContext("2d");
	            ctx.beginPath();
	            ctx.fillStyle = color;
	            ctx.fillRect(this.position.x + x * this.scale, this.position.y + y * this.scale, this.scale, this.scale);
	            ctx.closePath();
	        }
	    }, {
	        key: "clearPixel",
	        value: function clearPixel(x, y) {
	            var c = this.canvas[0];
	            var ctx = c.getContext("2d");
	            ctx.beginPath();
	            ctx.clearRect(this.position.x + x * this.scale, this.position.y + y * this.scale, this.scale, this.scale);
	            ctx.closePath();
	        }
	    }, {
	        key: "clearCanvas",
	        value: function clearCanvas(canvas) {
	            var c = canvas[0];
	            var ctx = c.getContext("2d");
	            ctx.beginPath();
	            ctx.clearRect(0, 0, canvas.width(), canvas.height());
	            ctx.stroke();
	            ctx.closePath();
	        }
	    }, {
	        key: "inputToPixelIndex",
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
	        key: "setSelectedColor",
	        value: function setSelectedColor(color) {
	            this.selectedColor = color;
	        }
	    }, {
	        key: "zoomIn",
	        value: function zoomIn() {
	            if (this.scale <= 20) {
	                this.scale += 1;
	                this.reposition({
	                    detail: {
	                        relativeX: (this.width * (this.scale - 1) - this.width * this.scale) / 2,
	                        relativeY: (this.height * (this.scale - 1) - this.height * this.scale) / 2
	                    }
	                });
	            }
	        }
	    }, {
	        key: "zoomOut",
	        value: function zoomOut() {
	            if (this.scale > 2) {
	                this.scale -= 1;
	                this.reposition({
	                    detail: {
	                        relativeX: (this.width * (this.scale + 1) - this.width * this.scale) / 2,
	                        relativeY: (this.height * (this.scale + 1) - this.height * this.scale) / 2
	                    }
	                });
	            }
	        }
	    }, {
	        key: "reposition",
	        value: function reposition(e) {
	            this.position.x += e.detail.relativeX;
	            this.position.y += e.detail.relativeY;
	        }
	    }]);

	    return DrawCanvas;
	}();

	exports.default = DrawCanvas;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXERyYXdDYW52YXMuanMiXSwibmFtZXMiOlsiRHJhd0NhbnZhcyIsInJvb20iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzbGljZSIsInNlYXJjaCIsImpvaW5Sb29tIiwic2NhbGUiLCJoZWlnaHQiLCJ3aWR0aCIsInBpeGVscyIsInNlbGVjdGVkQ29sb3IiLCJkcmFnZ2luZyIsImkiLCJqIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInVwZGF0ZU5ld1BpeGVscyIsImNhbnZhc1JlZHJhdyIsInpvb21JbiIsInpvb21PdXQiLCJyZXBvc2l0aW9uIiwiZWwiLCIkIiwiY2FudmFzIiwiaGVscENhbnZhcyIsImF0dHIiLCJtYWtlRXZlbiIsInBhcmVudCIsInBvc2l0aW9uIiwieCIsInkiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiZHJhd091dGxpbmluZyIsImRldGFpbCIsImxlbmd0aCIsImNvbG9yIiwiY2xlYXJQaXhlbCIsImZpbGxQaXhlbCIsImNsZWFyQ2FudmFzIiwiYWRkVXBkYXRlZFBpeGVsIiwiYyIsImJlZ2luUGF0aCIsInJlY3QiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsZWFyUmVjdCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiTWF0aCIsImZsb29yIiwicmVsYXRpdmVYIiwicmVsYXRpdmVZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEsVTtBQUNGLDBCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsWUFBSUMsT0FBT0MsT0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCSCxPQUFPQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkUsTUFBckIsQ0FBNEIsU0FBNUIsQ0FBM0IsQ0FBWDtBQUNBLG9DQUFrQkMsUUFBbEIsQ0FBMkJOLElBQTNC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LEtBQUtGLEtBQUwsR0FBVyxDQUF6QixJQUE4QixLQUFLRSxLQUFMLEdBQWEsS0FBS0YsS0FBbEQsSUFBMkQsQ0FEbEU7QUFFSmtELG1DQUFVLENBQUUsS0FBS2pELE1BQUwsSUFBZSxLQUFLRCxLQUFMLEdBQVcsQ0FBMUIsSUFBK0IsS0FBS0MsTUFBTCxHQUFjLEtBQUtELEtBQXBELElBQTZEO0FBRm5FO0FBRFosaUJBREo7QUFPSDtBQUNKOzs7a0NBQ1E7QUFDTCxnQkFBRyxLQUFLQSxLQUFMLEdBQWEsQ0FBaEIsRUFBa0I7QUFDZCxxQkFBS0EsS0FBTCxJQUFjLENBQWQ7QUFDQSxxQkFBS2UsVUFBTCxDQUNJO0FBQ0llLDRCQUFRO0FBQ0ptQixtQ0FBVyxDQUFFLEtBQUsvQyxLQUFMLElBQWMsS0FBS0YsS0FBTCxHQUFXLENBQXpCLElBQThCLEtBQUtFLEtBQUwsR0FBYSxLQUFLRixLQUFsRCxJQUEyRCxDQURsRTtBQUVKa0QsbUNBQVUsQ0FBRSxLQUFLakQsTUFBTCxJQUFlLEtBQUtELEtBQUwsR0FBVyxDQUExQixJQUErQixLQUFLQyxNQUFMLEdBQWMsS0FBS0QsS0FBcEQsSUFBNkQ7QUFGbkU7QUFEWixpQkFESjtBQU9IO0FBQ0o7OzttQ0FDVVUsQyxFQUFFO0FBQ1QsaUJBQUthLFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQmQsRUFBRW9CLE1BQUYsQ0FBU21CLFNBQTVCO0FBQ0EsaUJBQUsxQixRQUFMLENBQWNFLENBQWQsSUFBbUJmLEVBQUVvQixNQUFGLENBQVNvQixTQUE1QjtBQUNIOzs7Ozs7a0JBR1UxRCxVIiwiZmlsZSI6IkRyYXdDYW52YXMuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi4vLi4vRGF0YVN0cmVhbUhhbmRsZXJcIjtcclxuaW1wb3J0IEhlbHBGdW5jdGlvbnMgZnJvbSBcIi4uLy4uL0hlbHBGdW5jdGlvbnNcIjtcclxuaW1wb3J0IENhbnZhc0lucHV0SGFuZGxlciBmcm9tIFwiLi4vLi4vQ2FudmFzSW5wdXRIYW5kbGVyXCI7XHJcblxyXG5jbGFzcyBEcmF3Q2FudmFzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGxldCByb29tID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2Uod2luZG93LmxvY2F0aW9uLmhyZWYuc2VhcmNoKC9bXlxcL10rJC8pKTtcclxuICAgICAgICBEYXRhU3RyZWFtSGFuZGxlci5qb2luUm9vbShyb29tKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDU7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDA7IC8vIGhvdyBtYW55IHBpeGVscyBvbiB0aGUgWSBheGlzXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwMDsgLy8gIGhvdyBtYW55IHBpeGVscyBvbiB0aGUgeCBheGlzXHJcbiAgICAgICAgdGhpcy5waXhlbHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGl4ZWxzW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oZWlnaHQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbHNbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZVBpeGVscycsIChlKSA9PiB0aGlzLnVwZGF0ZU5ld1BpeGVscyhlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FudmFzUmVkcmF3JywgKCkgPT4gdGhpcy5jYW52YXNSZWRyYXcoKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FudmFzWm9vbUluJywgKCkgPT4gdGhpcy56b29tSW4oKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FudmFzWm9vbU91dCcsICgpID0+IHRoaXMuem9vbU91dCgpKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjYW52YXNSZXBvc2l0aW9uJywgKGUpID0+IHRoaXMucmVwb3NpdGlvbihlKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZWwgPSAkKCcjZHJhd1dyYXBwZXInKTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9ICQoJyNjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmhlbHBDYW52YXMgPSAkKCcjaGVscENhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmF0dHIoJ3dpZHRoJywgSGVscEZ1bmN0aW9ucy5tYWtlRXZlbih0aGlzLmNhbnZhcy5wYXJlbnQoKS53aWR0aCgpKSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYXR0cignaGVpZ2h0JywgSGVscEZ1bmN0aW9ucy5tYWtlRXZlbih0aGlzLmNhbnZhcy5wYXJlbnQoKS5oZWlnaHQoKSkpO1xyXG4gICAgICAgIHRoaXMuaGVscENhbnZhcy5hdHRyKCd3aWR0aCcsIEhlbHBGdW5jdGlvbnMubWFrZUV2ZW4odGhpcy5jYW52YXMucGFyZW50KCkud2lkdGgoKSkpO1xyXG4gICAgICAgIHRoaXMuaGVscENhbnZhcy5hdHRyKCdoZWlnaHQnLCBIZWxwRnVuY3Rpb25zLm1ha2VFdmVuKHRoaXMuY2FudmFzLnBhcmVudCgpLmhlaWdodCgpKSk7XHJcblxyXG4gICAgICAgIG5ldyBDYW52YXNJbnB1dEhhbmRsZXIodGhpcy5jYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCgpIC8gMiAtIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlIC8gMixcclxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0KCkgLyAyIC0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlIC8gMlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzWzBdLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdPdXRsaW5pbmcoKTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlTmV3UGl4ZWxzKGUpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZS5kZXRhaWwucGl4ZWxzLmxlbmd0aDsgaSArKyl7XHJcbiAgICAgICAgICAgIGlmKGUuZGV0YWlsLnBpeGVsc1tpXS5jb2xvciA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJQaXhlbChlLmRldGFpbC5waXhlbHNbaV0ueCwgZS5kZXRhaWwucGl4ZWxzW2ldLnkpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFBpeGVsKGUuZGV0YWlsLnBpeGVsc1tpXS54LCBlLmRldGFpbC5waXhlbHNbaV0ueSwgZS5kZXRhaWwucGl4ZWxzW2ldLmNvbG9yLCB0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5waXhlbHNbZS5kZXRhaWwucGl4ZWxzW2ldLnhdW2UuZGV0YWlsLnBpeGVsc1tpXS55XSA9IGUuZGV0YWlsLnBpeGVsc1tpXS5jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYW52YXNSZWRyYXcoKXtcclxuICAgICAgICB0aGlzLmNsZWFyQ2FudmFzKHRoaXMuY2FudmFzKTtcclxuICAgICAgICB0aGlzLmNsZWFyQ2FudmFzKHRoaXMuaGVscENhbnZhcyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oZWlnaHQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5waXhlbHNbaV1bal0gIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsUGl4ZWwoaSwgaiwgdGhpcy5waXhlbHNbaV1bal0sIHRoaXMuY2FudmFzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3T3V0bGluaW5nKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVQaXhlbCh4LCB5LCBjb2xvcikge1xyXG4gICAgICAgIGlmKHRoaXMucGl4ZWxzW3hdW3ldICE9IGNvbG9yKXtcclxuICAgICAgICAgICAgaWYoY29sb3IgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxQaXhlbCh4LCB5LCBjb2xvciwgdGhpcy5jYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgRGF0YVN0cmVhbUhhbmRsZXIuYWRkVXBkYXRlZFBpeGVsKHgsIHksIHRoaXMuc2VsZWN0ZWRDb2xvcik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclBpeGVsKHgseSk7XHJcbiAgICAgICAgICAgICAgICBEYXRhU3RyZWFtSGFuZGxlci5hZGRVcGRhdGVkUGl4ZWwoeCwgeSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5waXhlbHNbeF1beV0gPSBjb2xvcjtcclxuICAgIH07XHJcbiAgICBkcmF3T3V0bGluaW5nKCl7XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmhlbHBDYW52YXNbMF07XHJcbiAgICAgICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgucmVjdCh0aGlzLnBvc2l0aW9uLnggKyAwLjUsIHRoaXMucG9zaXRpb24ueSsgMC41LCB0aGlzLndpZHRoICogdGhpcy5zY2FsZSwgdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG4gICAgZmlsbFBpeGVsKHgsIHksIGNvbG9yLCBjYW52YXMpIHtcclxuICAgICAgICBsZXQgYyA9IGNhbnZhc1swXTtcclxuICAgICAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54ICsgeCAqIHRoaXMuc2NhbGUsIHRoaXMucG9zaXRpb24ueSArIHkgKiB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcbiAgICBjbGVhclBpeGVsKHgseSl7XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmNhbnZhc1swXTtcclxuICAgICAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QodGhpcy5wb3NpdGlvbi54ICsgeCAqIHRoaXMuc2NhbGUsIHRoaXMucG9zaXRpb24ueSArIHkgKiB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcbiAgICBjbGVhckNhbnZhcyhjYW52YXMpe1xyXG4gICAgICAgIGxldCBjID0gY2FudmFzWzBdO1xyXG4gICAgICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgoKSwgY2FudmFzLmhlaWdodCgpKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG4gICAgaW5wdXRUb1BpeGVsSW5kZXgoZSkge1xyXG4gICAgICAgIGlmIChlLm9mZnNldFggPiB0aGlzLnBvc2l0aW9uLnggJiYgZS5vZmZzZXRZID4gdGhpcy5wb3NpdGlvbi55ICYmXHJcbiAgICAgICAgICAgIGUub2Zmc2V0WCA8IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlICYmXHJcbiAgICAgICAgICAgIGUub2Zmc2V0WSA8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgeDogTWF0aC5mbG9vcigoZS5vZmZzZXRYIC0gdGhpcy5wb3NpdGlvbi54KSAvIHRoaXMuc2NhbGUpLFxyXG4gICAgICAgICAgICAgICAgeTogTWF0aC5mbG9vcigoZS5vZmZzZXRZIC0gdGhpcy5wb3NpdGlvbi55KSAvIHRoaXMuc2NhbGUpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBzZXRTZWxlY3RlZENvbG9yKGNvbG9yKXtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIHpvb21Jbigpe1xyXG4gICAgICAgIGlmICh0aGlzLnNjYWxlIDw9IDIwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVg6ICggdGhpcy53aWR0aCAqICh0aGlzLnNjYWxlLTEpIC0gdGhpcy53aWR0aCAqIHRoaXMuc2NhbGUpIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVZOiggdGhpcy5oZWlnaHQgKiAodGhpcy5zY2FsZS0xKSAtIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZSkgLyAyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgem9vbU91dCgpe1xyXG4gICAgICAgIGlmKHRoaXMuc2NhbGUgPiAyKXtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZSAtPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlWDogKCB0aGlzLndpZHRoICogKHRoaXMuc2NhbGUrMSkgLSB0aGlzLndpZHRoICogdGhpcy5zY2FsZSkgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVk6KCB0aGlzLmhlaWdodCAqICh0aGlzLnNjYWxlKzEpIC0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlKSAvIDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXBvc2l0aW9uKGUpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBlLmRldGFpbC5yZWxhdGl2ZVg7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IGUuZGV0YWlsLnJlbGF0aXZlWTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd0NhbnZhcztcclxuIl19

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
	        this.socket.addEventListener('pullPixelsFromServer', function (e) {
	            return _this.handleServerPixels(e);
	        });
	        this.socket.addEventListener('serverMessage', function (e) {
	            return _this.handleMessage(e, 'server');
	        });
	        this.socket.addEventListener('message', function (e) {
	            return _this.handleMessage(e, 'user');
	        });
	        this.socket.addEventListener('roomsList', function (e) {
	            return _this.handleRoomsList(e);
	        });
	        document.addEventListener('unload', function () {
	            return _this.handleClosePage();
	        });
	    }

	    _createClass(DataStreamHandler, [{
	        key: 'joinRoom',
	        value: function joinRoom(room) {
	            this.socket.emit('join', room);
	        }
	    }, {
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
	        key: 'requestRoomsList',
	        value: function requestRoomsList() {
	            this.socket.emit('requestRooms');
	        }
	    }, {
	        key: 'handleRoomsList',
	        value: function handleRoomsList(e) {
	            var map = new Map();
	            Object.keys(e).forEach(function (key) {
	                map.set(key, e[key]);
	            });
	            var event = new CustomEvent("updateRooms", {
	                detail: {
	                    rooms: map
	                }
	            });
	            document.dispatchEvent(event);
	        }
	    }, {
	        key: 'handleClosePage',
	        value: function handleClosePage() {
	            this.socket.emit('disconnect');
	        }
	    }]);

	    return DataStreamHandler;
	}();

	exports.default = new DataStreamHandler();
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRGF0YVN0cmVhbUhhbmRsZXIuanMiXSwibmFtZXMiOlsiRGF0YVN0cmVhbUhhbmRsZXIiLCJzb2NrZXQiLCJ1cGRhdGVkUGl4ZWxzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoYW5kbGVTZXJ2ZXJQaXhlbHMiLCJoYW5kbGVNZXNzYWdlIiwiaGFuZGxlUm9vbXNMaXN0IiwiZG9jdW1lbnQiLCJoYW5kbGVDbG9zZVBhZ2UiLCJyb29tIiwiZW1pdCIsInR5cGUiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwibWVzc2FnZSIsImRpc3BhdGNoRXZlbnQiLCJwaXhlbHMiLCJ4IiwieSIsImNvbG9yIiwicHVzaCIsIm1hcCIsIk1hcCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic2V0Iiwia2V5Iiwicm9vbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsaUI7QUFDRixpQ0FBYTtBQUFBOztBQUFBOztBQUNULGFBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxhQUFLRCxNQUFMLENBQVlFLGdCQUFaLENBQTZCLHNCQUE3QixFQUFxRCxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0Msa0JBQUwsQ0FBd0JELENBQXhCLENBQVA7QUFBQSxTQUFyRDtBQUNBLGFBQUtILE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsZUFBN0IsRUFBOEMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtFLGFBQUwsQ0FBbUJGLENBQW5CLEVBQXNCLFFBQXRCLENBQVA7QUFBQSxTQUE5QztBQUNBLGFBQUtILE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsU0FBN0IsRUFBd0MsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtFLGFBQUwsQ0FBbUJGLENBQW5CLEVBQXNCLE1BQXRCLENBQVA7QUFBQSxTQUF4QztBQUNBLGFBQUtILE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsV0FBN0IsRUFBMEMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtHLGVBQUwsQ0FBcUJILENBQXJCLENBQVA7QUFBQSxTQUExQztBQUNBSSxpQkFBU0wsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0M7QUFBQSxtQkFBTSxNQUFLTSxlQUFMLEVBQU47QUFBQSxTQUFwQztBQUNIOzs7O2lDQUNRQyxJLEVBQUs7QUFDVixpQkFBS1QsTUFBTCxDQUFZVSxJQUFaLENBQWlCLE1BQWpCLEVBQXlCRCxJQUF6QjtBQUNIOzs7c0NBQ2FOLEMsRUFBR1EsSSxFQUFLO0FBQ2xCLGdCQUFJQyxRQUFRLElBQUlDLFdBQUosQ0FBZ0IsaUJBQWhCLEVBQW1DO0FBQzNDQyx3QkFBUTtBQUNKSCwwQkFBTUEsSUFERjtBQUVKSSw2QkFBU1o7QUFGTDtBQURtQyxhQUFuQyxDQUFaO0FBTUFJLHFCQUFTUyxhQUFULENBQXVCSixLQUF2QjtBQUNIOzs7MkNBQ2tCVCxDLEVBQUU7QUFDakIsZ0JBQUlTLFFBQVEsSUFBSUMsV0FBSixDQUFnQixjQUFoQixFQUFnQztBQUN4Q0Msd0JBQVE7QUFDSkcsNEJBQVFkO0FBREo7QUFEZ0MsYUFBaEMsQ0FBWjtBQUtBSSxxQkFBU1MsYUFBVCxDQUF1QkosS0FBdkI7QUFDSDs7O29DQUNXRyxPLEVBQVE7QUFDaEIsaUJBQUtmLE1BQUwsQ0FBWVUsSUFBWixDQUFpQixTQUFqQixFQUE0QkssT0FBNUI7QUFDSDs7O3dDQUNlRyxDLEVBQUdDLEMsRUFBR0MsSyxFQUFNO0FBQ3hCLGlCQUFLbkIsYUFBTCxDQUFtQm9CLElBQW5CLENBQXdCO0FBQ3BCSCxtQkFBR0EsQ0FEaUI7QUFFcEJDLG1CQUFHQSxDQUZpQjtBQUdwQkMsdUJBQU9BO0FBSGEsYUFBeEI7QUFLQSxpQkFBS3BCLE1BQUwsQ0FBWVUsSUFBWixDQUFpQixvQkFBakIsRUFBdUMsS0FBS1QsYUFBNUM7QUFDQSxpQkFBS0EsYUFBTCxHQUFxQixFQUFyQjtBQUNIOzs7MkNBQ2lCO0FBQ2QsaUJBQUtELE1BQUwsQ0FBWVUsSUFBWixDQUFpQixjQUFqQjtBQUNIOzs7d0NBRWVQLEMsRUFBRTtBQUNkLGdCQUFJbUIsTUFBTSxJQUFJQyxHQUFKLEVBQVY7QUFDQUMsbUJBQU9DLElBQVAsQ0FBWXRCLENBQVosRUFBZXVCLE9BQWYsQ0FBdUIsZUFBTztBQUMxQkosb0JBQUlLLEdBQUosQ0FBUUMsR0FBUixFQUFhekIsRUFBRXlCLEdBQUYsQ0FBYjtBQUNILGFBRkQ7QUFHQSxnQkFBSWhCLFFBQVEsSUFBSUMsV0FBSixDQUFnQixhQUFoQixFQUErQjtBQUN2Q0Msd0JBQVE7QUFDSmUsMkJBQU9QO0FBREg7QUFEK0IsYUFBL0IsQ0FBWjtBQUtBZixxQkFBU1MsYUFBVCxDQUF1QkosS0FBdkI7QUFDSDs7OzBDQUNnQjtBQUNiLGlCQUFLWixNQUFMLENBQVlVLElBQVosQ0FBaUIsWUFBakI7QUFDSDs7Ozs7O2tCQUVXLElBQUlYLGlCQUFKLEUiLCJmaWxlIjoiRGF0YVN0cmVhbUhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERhdGFTdHJlYW1IYW5kbGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IHNvY2tldDtcclxuICAgICAgICB0aGlzLnVwZGF0ZWRQaXhlbHMgPSBbXTtcclxuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdwdWxsUGl4ZWxzRnJvbVNlcnZlcicsIChlKSA9PiB0aGlzLmhhbmRsZVNlcnZlclBpeGVscyhlKSk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignc2VydmVyTWVzc2FnZScsIChlKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoZSwgJ3NlcnZlcicpKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShlLCAndXNlcicpKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdyb29tc0xpc3QnLCAoZSkgPT4gdGhpcy5oYW5kbGVSb29tc0xpc3QoZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsICgpID0+IHRoaXMuaGFuZGxlQ2xvc2VQYWdlKCkpO1xyXG4gICAgfVxyXG4gICAgam9pblJvb20ocm9vbSl7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnam9pbicsIHJvb20pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlTWVzc2FnZShlLCB0eXBlKXtcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJyZWNlaXZlZE1lc3NhZ2VcIiwge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVNlcnZlclBpeGVscyhlKXtcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJ1cGRhdGVQaXhlbHNcIiwge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHBpeGVsczogZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9XHJcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlKXtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBhZGRVcGRhdGVkUGl4ZWwoeCwgeSwgY29sb3Ipe1xyXG4gICAgICAgIHRoaXMudXBkYXRlZFBpeGVscy5wdXNoKHtcclxuICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgeTogeSxcclxuICAgICAgICAgICAgY29sb3I6IGNvbG9yXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgncHVzaFBpeGVsc1RvU2VydmVyJywgdGhpcy51cGRhdGVkUGl4ZWxzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZWRQaXhlbHMgPSBbXTtcclxuICAgIH07XHJcbiAgICByZXF1ZXN0Um9vbXNMaXN0KCl7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgncmVxdWVzdFJvb21zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUm9vbXNMaXN0KGUpe1xyXG4gICAgICAgIGxldCBtYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBtYXAuc2V0KGtleSwgZVtrZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJ1cGRhdGVSb29tc1wiLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgcm9vbXM6IG1hcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbG9zZVBhZ2UoKXtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdkaXNjb25uZWN0Jyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgKG5ldyBEYXRhU3RyZWFtSGFuZGxlcik7Il19

/***/ }),
/* 3 */
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

	    }, {
	        key: "isEven",
	        value: function isEven(i) {
	            return i % 2 == 0;
	        }
	    }, {
	        key: "makeEven",
	        value: function makeEven(i) {
	            return this.isEven(i) ? i : i - 1;
	        }
	    }]);

	    return HelpFunctions;
	}();

	exports.default = HelpFunctions;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcSGVscEZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJIZWxwRnVuY3Rpb25zIiwiYyIsImhleCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiciIsImciLCJiIiwiY29tcG9uZW50VG9IZXgiLCJpIiwiaXNFdmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGE7Ozs7Ozs7O0FBQ0Y7dUNBQ3NCQyxDLEVBQUc7QUFDckIsZ0JBQUlDLE1BQU1ELEVBQUVFLFFBQUYsQ0FBVyxFQUFYLENBQVY7QUFDQSxtQkFBT0QsSUFBSUUsTUFBSixJQUFjLENBQWQsR0FBa0IsTUFBTUYsR0FBeEIsR0FBOEJBLEdBQXJDO0FBQ0g7OztpQ0FFZUcsQyxFQUFHQyxDLEVBQUdDLEMsRUFBRztBQUNyQixtQkFBTyxNQUFNUCxjQUFjUSxjQUFkLENBQTZCSCxDQUE3QixDQUFOLEdBQXdDTCxjQUFjUSxjQUFkLENBQTZCRixDQUE3QixDQUF4QyxHQUEwRU4sY0FBY1EsY0FBZCxDQUE2QkQsQ0FBN0IsQ0FBakY7QUFDSDtBQUNEOzs7OytCQUVjRSxDLEVBQUU7QUFDWixtQkFBUUEsSUFBSSxDQUFKLElBQVMsQ0FBakI7QUFDSDs7O2lDQUNlQSxDLEVBQUU7QUFDZCxtQkFBTyxLQUFLQyxNQUFMLENBQVlELENBQVosSUFBZ0JBLENBQWhCLEdBQW9CQSxJQUFFLENBQTdCO0FBQ0g7Ozs7OztrQkFFVVQsYSIsImZpbGUiOiJIZWxwRnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIZWxwRnVuY3Rpb25zIHtcclxuICAgIC8vPT09PT09PT09PT09PT09PT09ZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjIzODM4L3JnYi10by1oZXgtYW5kLWhleC10by1yZ2I9PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBzdGF0aWMgY29tcG9uZW50VG9IZXgoYykge1xyXG4gICAgICAgIGxldCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJnYlRvSGV4KHIsIGcsIGIpIHtcclxuICAgICAgICByZXR1cm4gXCIjXCIgKyBIZWxwRnVuY3Rpb25zLmNvbXBvbmVudFRvSGV4KHIpICsgSGVscEZ1bmN0aW9ucy5jb21wb25lbnRUb0hleChnKSArIEhlbHBGdW5jdGlvbnMuY29tcG9uZW50VG9IZXgoYik7XHJcbiAgICB9XHJcbiAgICAvLz09PT09PT09PT09PT09PT09PT1mcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2MjM4MzgvcmdiLXRvLWhleC1hbmQtaGV4LXRvLXJnYj09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHN0YXRpYyBpc0V2ZW4oaSl7XHJcbiAgICAgICAgcmV0dXJuIChpICUgMiA9PSAwKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBtYWtlRXZlbihpKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0V2ZW4oaSk/IGkgOiBpLTE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVscEZ1bmN0aW9ucyJdfQ==

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CanvasInputHandler = function () {
	    function CanvasInputHandler(canvas) {
	        var _this = this;

	        _classCallCheck(this, CanvasInputHandler);

	        canvas.on('mousedown', function (e) {
	            return _this.canvasMouseDownHandler(e);
	        });
	        canvas.on('mouseup', function (e) {
	            return _this.canvasMouseUpHandler(e);
	        });
	        canvas.on('mousemove', function (e) {
	            return _this.canvasMouseMoveHandler(e);
	        });
	        canvas.on('contextmenu', function () {
	            return false;
	        });
	        canvas.bind('mousewheel DOMMouseScroll', function (e) {
	            return _this.canvasMouseScrollHandler(e);
	        });

	        this.zoomInEvent = new CustomEvent("canvasZoomIn");
	        this.zoomOutEvent = new CustomEvent("canvasZoomOut");
	        this.redrawEvent = new CustomEvent("canvasRedraw");
	        this.lastMousePos = { x: 0, y: 0 };
	        this.dragging = false;
	    }

	    _createClass(CanvasInputHandler, [{
	        key: 'canvasMouseMoveHandler',
	        value: function canvasMouseMoveHandler(e) {
	            if (!this.dragging) {
	                var event = new CustomEvent("canvasMouseMove", {
	                    detail: {
	                        event: e
	                    }
	                });
	                document.dispatchEvent(event);
	            } else {
	                var _event = new CustomEvent("canvasReposition", {
	                    detail: {
	                        relativeX: e.offsetX - this.lastMousePos.x,
	                        relativeY: e.offsetY - this.lastMousePos.y
	                    }
	                });
	                document.dispatchEvent(_event);
	                document.dispatchEvent(this.redrawEvent);
	            }
	            this.lastMousePos = { x: e.offsetX, y: e.offsetY };
	        }
	    }, {
	        key: 'canvasMouseDownHandler',
	        value: function canvasMouseDownHandler(e) {
	            this.dragging = false;
	            if (e.button == 2) {
	                this.dragging = true;
	                return;
	            }
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
	            this.dragging = false;
	            if (e.button == 2) {
	                return;
	            }
	            var event = new CustomEvent("canvasMouseUp", {
	                detail: {
	                    event: e
	                }
	            });
	            document.dispatchEvent(event);
	        }
	    }, {
	        key: 'canvasMouseScrollHandler',
	        value: function canvasMouseScrollHandler(event) {
	            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
	                document.dispatchEvent(this.zoomInEvent);
	            } else {
	                document.dispatchEvent(this.zoomOutEvent);
	            }
	            document.dispatchEvent(this.redrawEvent);
	        }
	    }]);

	    return CanvasInputHandler;
	}();

	exports.default = CanvasInputHandler;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQ2FudmFzSW5wdXRIYW5kbGVyLmpzIl0sIm5hbWVzIjpbIkNhbnZhc0lucHV0SGFuZGxlciIsImNhbnZhcyIsIm9uIiwiZSIsImNhbnZhc01vdXNlRG93bkhhbmRsZXIiLCJjYW52YXNNb3VzZVVwSGFuZGxlciIsImNhbnZhc01vdXNlTW92ZUhhbmRsZXIiLCJiaW5kIiwiY2FudmFzTW91c2VTY3JvbGxIYW5kbGVyIiwiem9vbUluRXZlbnQiLCJDdXN0b21FdmVudCIsInpvb21PdXRFdmVudCIsInJlZHJhd0V2ZW50IiwibGFzdE1vdXNlUG9zIiwieCIsInkiLCJkcmFnZ2luZyIsImV2ZW50IiwiZGV0YWlsIiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwicmVsYXRpdmVYIiwib2Zmc2V0WCIsInJlbGF0aXZlWSIsIm9mZnNldFkiLCJidXR0b24iLCJvcmlnaW5hbEV2ZW50Iiwid2hlZWxEZWx0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxrQjtBQUNGLGdDQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCQSxlQUFPQyxFQUFQLENBQVUsV0FBVixFQUF1QixVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0Msc0JBQUwsQ0FBNEJELENBQTVCLENBQVA7QUFBQSxTQUF2QjtBQUNBRixlQUFPQyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0Usb0JBQUwsQ0FBMEJGLENBQTFCLENBQVA7QUFBQSxTQUFyQjtBQUNBRixlQUFPQyxFQUFQLENBQVUsV0FBVixFQUF1QixVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0csc0JBQUwsQ0FBNEJILENBQTVCLENBQVA7QUFBQSxTQUF2QjtBQUNBRixlQUFPQyxFQUFQLENBQVUsYUFBVixFQUF5QixZQUFZO0FBQ2pDLG1CQUFPLEtBQVA7QUFDSCxTQUZEO0FBR0FELGVBQU9NLElBQVAsQ0FBWSwyQkFBWixFQUF5QyxVQUFDSixDQUFEO0FBQUEsbUJBQU8sTUFBS0ssd0JBQUwsQ0FBOEJMLENBQTlCLENBQVA7QUFBQSxTQUF6Qzs7QUFFQSxhQUFLTSxXQUFMLEdBQW1CLElBQUlDLFdBQUosQ0FBZ0IsY0FBaEIsQ0FBbkI7QUFDQSxhQUFLQyxZQUFMLEdBQW9CLElBQUlELFdBQUosQ0FBZ0IsZUFBaEIsQ0FBcEI7QUFDQSxhQUFLRSxXQUFMLEdBQW1CLElBQUlGLFdBQUosQ0FBZ0IsY0FBaEIsQ0FBbkI7QUFDQSxhQUFLRyxZQUFMLEdBQW9CLEVBQUNDLEdBQUUsQ0FBSCxFQUFNQyxHQUFFLENBQVIsRUFBcEI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7Ozs7K0NBRXNCYixDLEVBQUc7QUFDdEIsZ0JBQUcsQ0FBQyxLQUFLYSxRQUFULEVBQWtCO0FBQ2Qsb0JBQUlDLFFBQVEsSUFBSVAsV0FBSixDQUFnQixpQkFBaEIsRUFBbUM7QUFDM0NRLDRCQUFRO0FBQ0pELCtCQUFPZDtBQURIO0FBRG1DLGlCQUFuQyxDQUFaO0FBS0FnQix5QkFBU0MsYUFBVCxDQUF1QkgsS0FBdkI7QUFDSCxhQVBELE1BT0s7QUFDRCxvQkFBSUEsU0FBUSxJQUFJUCxXQUFKLENBQWdCLGtCQUFoQixFQUFvQztBQUM1Q1EsNEJBQVE7QUFDSkcsbUNBQVdsQixFQUFFbUIsT0FBRixHQUFZLEtBQUtULFlBQUwsQ0FBa0JDLENBRHJDO0FBRUpTLG1DQUFXcEIsRUFBRXFCLE9BQUYsR0FBWSxLQUFLWCxZQUFMLENBQWtCRTtBQUZyQztBQURvQyxpQkFBcEMsQ0FBWjtBQU1BSSx5QkFBU0MsYUFBVCxDQUF1QkgsTUFBdkI7QUFDQUUseUJBQVNDLGFBQVQsQ0FBdUIsS0FBS1IsV0FBNUI7QUFDSDtBQUNELGlCQUFLQyxZQUFMLEdBQW9CLEVBQUNDLEdBQUdYLEVBQUVtQixPQUFOLEVBQWVQLEdBQUdaLEVBQUVxQixPQUFwQixFQUFwQjtBQUNIOzs7K0NBRXNCckIsQyxFQUFHO0FBQ3RCLGlCQUFLYSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsZ0JBQUdiLEVBQUVzQixNQUFGLElBQVksQ0FBZixFQUFpQjtBQUNiLHFCQUFLVCxRQUFMLEdBQWdCLElBQWhCO0FBQ0E7QUFDSDtBQUNELGdCQUFJQyxRQUFRLElBQUlQLFdBQUosQ0FBZ0IsaUJBQWhCLEVBQW1DO0FBQzNDUSx3QkFBUTtBQUNKRCwyQkFBT2Q7QUFESDtBQURtQyxhQUFuQyxDQUFaO0FBS0FnQixxQkFBU0MsYUFBVCxDQUF1QkgsS0FBdkI7QUFDSDs7OzZDQUVvQmQsQyxFQUFHO0FBQ3BCLGlCQUFLYSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsZ0JBQUdiLEVBQUVzQixNQUFGLElBQVksQ0FBZixFQUFpQjtBQUNiO0FBRUg7QUFDRCxnQkFBSVIsUUFBUSxJQUFJUCxXQUFKLENBQWdCLGVBQWhCLEVBQWlDO0FBQ3pDUSx3QkFBUTtBQUNKRCwyQkFBT2Q7QUFESDtBQURpQyxhQUFqQyxDQUFaO0FBS0FnQixxQkFBU0MsYUFBVCxDQUF1QkgsS0FBdkI7QUFDSDs7O2lEQUV3QkEsSyxFQUFPO0FBQzVCLGdCQUFJQSxNQUFNUyxhQUFOLENBQW9CQyxVQUFwQixHQUFpQyxDQUFqQyxJQUFzQ1YsTUFBTVMsYUFBTixDQUFvQlIsTUFBcEIsR0FBNkIsQ0FBdkUsRUFBMEU7QUFDdEVDLHlCQUFTQyxhQUFULENBQXVCLEtBQUtYLFdBQTVCO0FBQ0gsYUFGRCxNQUVPO0FBQ0hVLHlCQUFTQyxhQUFULENBQXVCLEtBQUtULFlBQTVCO0FBQ0g7QUFDRFEscUJBQVNDLGFBQVQsQ0FBdUIsS0FBS1IsV0FBNUI7QUFDSDs7Ozs7O2tCQUVVWixrQiIsImZpbGUiOiJDYW52YXNJbnB1dEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbnZhc0lucHV0SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICBjYW52YXMub24oJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLmNhbnZhc01vdXNlRG93bkhhbmRsZXIoZSkpO1xyXG4gICAgICAgIGNhbnZhcy5vbignbW91c2V1cCcsIChlKSA9PiB0aGlzLmNhbnZhc01vdXNlVXBIYW5kbGVyKGUpKTtcclxuICAgICAgICBjYW52YXMub24oJ21vdXNlbW92ZScsIChlKSA9PiB0aGlzLmNhbnZhc01vdXNlTW92ZUhhbmRsZXIoZSkpO1xyXG4gICAgICAgIGNhbnZhcy5vbignY29udGV4dG1lbnUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYW52YXMuYmluZCgnbW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCcsIChlKSA9PiB0aGlzLmNhbnZhc01vdXNlU2Nyb2xsSGFuZGxlcihlKSk7XHJcblxyXG4gICAgICAgIHRoaXMuem9vbUluRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjYW52YXNab29tSW5cIik7XHJcbiAgICAgICAgdGhpcy56b29tT3V0RXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjYW52YXNab29tT3V0XCIpO1xyXG4gICAgICAgIHRoaXMucmVkcmF3RXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjYW52YXNSZWRyYXdcIik7XHJcbiAgICAgICAgdGhpcy5sYXN0TW91c2VQb3MgPSB7eDowLCB5OjB9O1xyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXNNb3VzZU1vdmVIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZighdGhpcy5kcmFnZ2luZyl7XHJcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudChcImNhbnZhc01vdXNlTW92ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBDdXN0b21FdmVudChcImNhbnZhc1JlcG9zaXRpb25cIiwge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVYOiBlLm9mZnNldFggLSB0aGlzLmxhc3RNb3VzZVBvcy54LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlWTogZS5vZmZzZXRZIC0gdGhpcy5sYXN0TW91c2VQb3MueVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5yZWRyYXdFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdE1vdXNlUG9zID0ge3g6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZfTtcclxuICAgIH07XHJcblxyXG4gICAgY2FudmFzTW91c2VEb3duSGFuZGxlcihlKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmKGUuYnV0dG9uID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjYW52YXNNb3VzZURvd25cIiwge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgY2FudmFzTW91c2VVcEhhbmRsZXIoZSkge1xyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZihlLmJ1dHRvbiA9PSAyKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiY2FudmFzTW91c2VVcFwiLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjYW52YXNNb3VzZVNjcm9sbEhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC53aGVlbERlbHRhID4gMCB8fCBldmVudC5vcmlnaW5hbEV2ZW50LmRldGFpbCA8IDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0aGlzLnpvb21JbkV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRoaXMuem9vbU91dEV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCh0aGlzLnJlZHJhd0V2ZW50KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYW52YXNJbnB1dEhhbmRsZXI7Il19

/***/ }),
/* 5 */
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
	            var input = $('input[type=text]', this.el);
	            if (input.val() != '') {
	                _DataStreamHandler2.default.sendMessage(input.val());
	                $('.messages', this.el).append($('<div>').append($('<span>').text("you: " + input.val())));
	                input.val('');
	            }
	            $('.messages', this.el).scrollTop($('.messages', this.el)[0].scrollHeight);
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
	            $('.messages', this.el).scrollTop($('.messages', this.el)[0].scrollHeight);
	        }
	    }]);

	    return Chat;
	}();

	exports.default = Chat;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXENoYXQuanMiXSwibmFtZXMiOlsiQ2hhdCIsImVsIiwiJCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoYW5kbGVNZXNzYWdlIiwib24iLCJzZW5kTWVzc2FnZSIsImhhbmRsZUtleVByZXNzIiwiaW5wdXQiLCJ2YWwiLCJhcHBlbmQiLCJ0ZXh0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Iiwia2V5Q29kZSIsIm1lc3NhZ2UiLCJkZXRhaWwiLCJ0eXBlIiwiY2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRU1BLEk7QUFDRixvQkFBYTtBQUFBOztBQUFBOztBQUNULGFBQUtDLEVBQUwsR0FBVUMsRUFBRSxPQUFGLENBQVY7QUFDQUMsaUJBQVNDLGdCQUFULENBQTBCLGlCQUExQixFQUE2QyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0MsYUFBTCxDQUFtQkQsQ0FBbkIsQ0FBUDtBQUFBLFNBQTdDO0FBQ0FILFVBQUUsY0FBRixFQUFrQixLQUFLRCxFQUF2QixFQUEyQk0sRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsS0FBS0MsV0FBNUM7QUFDQU4sVUFBRSxPQUFGLEVBQVcsS0FBS0QsRUFBaEIsRUFBb0JNLEVBQXBCLENBQXVCLFNBQXZCLEVBQWtDLFVBQUNGLENBQUQ7QUFBQSxtQkFBTyxNQUFLSSxjQUFMLENBQW9CSixDQUFwQixDQUFQO0FBQUEsU0FBbEM7QUFDSDs7OztzQ0FDWTtBQUNULGdCQUFJSyxRQUFRUixFQUFFLGtCQUFGLEVBQXNCLEtBQUtELEVBQTNCLENBQVo7QUFDQSxnQkFBR1MsTUFBTUMsR0FBTixNQUFlLEVBQWxCLEVBQXFCO0FBQ2pCLDRDQUFrQkgsV0FBbEIsQ0FBOEJFLE1BQU1DLEdBQU4sRUFBOUI7QUFDQVQsa0JBQUUsV0FBRixFQUFlLEtBQUtELEVBQXBCLEVBQXdCVyxNQUF4QixDQUErQlYsRUFBRSxPQUFGLEVBQVdVLE1BQVgsQ0FBa0JWLEVBQUUsUUFBRixFQUFZVyxJQUFaLENBQWlCLFVBQVVILE1BQU1DLEdBQU4sRUFBM0IsQ0FBbEIsQ0FBL0I7QUFDQUQsc0JBQU1DLEdBQU4sQ0FBVSxFQUFWO0FBQ0g7QUFDRFQsY0FBRSxXQUFGLEVBQWUsS0FBS0QsRUFBcEIsRUFBd0JhLFNBQXhCLENBQWtDWixFQUFFLFdBQUYsRUFBZSxLQUFLRCxFQUFwQixFQUF3QixDQUF4QixFQUEyQmMsWUFBN0Q7QUFDSDs7O3VDQUNjVixDLEVBQUU7QUFDYixnQkFBR0EsRUFBRVcsT0FBRixJQUFhLEVBQWhCLEVBQW1CO0FBQ2YscUJBQUtSLFdBQUw7QUFDSDtBQUNKOzs7c0NBQ2FILEMsRUFBRTtBQUNaLGdCQUFJWSxVQUFVWixFQUFFYSxNQUFGLENBQVNELE9BQXZCO0FBQ0EsZ0JBQUlFLE9BQU9kLEVBQUVhLE1BQUYsQ0FBU0MsSUFBcEI7O0FBR0FqQixjQUFFLFdBQUYsRUFBZSxLQUFLRCxFQUFwQixFQUF3QlcsTUFBeEIsQ0FBK0JWLEVBQUUsT0FBRixFQUFXVSxNQUFYLENBQWtCVixFQUFFLFFBQUYsRUFBWSxFQUFDa0IsT0FBT0QsUUFBTSxRQUFOLEdBQWdCLGdCQUFoQixHQUFtQyxFQUEzQyxFQUFaLEVBQTRETixJQUE1RCxDQUFpRUksT0FBakUsQ0FBbEIsQ0FBL0I7QUFDQWYsY0FBRSxXQUFGLEVBQWUsS0FBS0QsRUFBcEIsRUFBd0JhLFNBQXhCLENBQWtDWixFQUFFLFdBQUYsRUFBZSxLQUFLRCxFQUFwQixFQUF3QixDQUF4QixFQUEyQmMsWUFBN0Q7QUFDSDs7Ozs7O2tCQUVVZixJIiwiZmlsZSI6IkNoYXQuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi4vLi4vRGF0YVN0cmVhbUhhbmRsZXJcIjtcclxuXHJcbmNsYXNzIENoYXR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuZWwgPSAkKCcjY2hhdCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlY2VpdmVkTWVzc2FnZScsIChlKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoZSkpO1xyXG4gICAgICAgICQoJyNzZW5kTWVzc2FnZScsIHRoaXMuZWwpLm9uKCdjbGljaycsIHRoaXMuc2VuZE1lc3NhZ2UpO1xyXG4gICAgICAgICQoJ2lucHV0JywgdGhpcy5lbCkub24oJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5oYW5kbGVLZXlQcmVzcyhlKSk7XHJcbiAgICB9XHJcbiAgICBzZW5kTWVzc2FnZSgpe1xyXG4gICAgICAgIGxldCBpbnB1dCA9ICQoJ2lucHV0W3R5cGU9dGV4dF0nLCB0aGlzLmVsKTtcclxuICAgICAgICBpZihpbnB1dC52YWwoKSAhPSAnJyl7XHJcbiAgICAgICAgICAgIERhdGFTdHJlYW1IYW5kbGVyLnNlbmRNZXNzYWdlKGlucHV0LnZhbCgpKTtcclxuICAgICAgICAgICAgJCgnLm1lc3NhZ2VzJywgdGhpcy5lbCkuYXBwZW5kKCQoJzxkaXY+JykuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoXCJ5b3U6IFwiICsgaW5wdXQudmFsKCkpKSk7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJy5tZXNzYWdlcycsIHRoaXMuZWwpLnNjcm9sbFRvcCgkKCcubWVzc2FnZXMnLCB0aGlzLmVsKVswXS5zY3JvbGxIZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlS2V5UHJlc3MoZSl7XHJcbiAgICAgICAgaWYoZS5rZXlDb2RlID09IDEzKXtcclxuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZU1lc3NhZ2UoZSl7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBlLmRldGFpbC5tZXNzYWdlO1xyXG4gICAgICAgIGxldCB0eXBlID0gZS5kZXRhaWwudHlwZTtcclxuXHJcblxyXG4gICAgICAgICQoJy5tZXNzYWdlcycsIHRoaXMuZWwpLmFwcGVuZCgkKCc8ZGl2PicpLmFwcGVuZCgkKCc8c3Bhbj4nLCB7Y2xhc3M6IHR5cGU9PSdzZXJ2ZXInPyAnc2VydmVyLW1lc3NhZ2UnIDogJyd9KS50ZXh0KG1lc3NhZ2UpKSk7XHJcbiAgICAgICAgJCgnLm1lc3NhZ2VzJywgdGhpcy5lbCkuc2Nyb2xsVG9wKCQoJy5tZXNzYWdlcycsIHRoaXMuZWwpWzBdLnNjcm9sbEhlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDsiXX0=

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Pencil = __webpack_require__(7);

	var _Pencil2 = _interopRequireDefault(_Pencil);

	var _Eraser = __webpack_require__(9);

	var _Eraser2 = _interopRequireDefault(_Eraser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Toolbar = function () {
	    function Toolbar(canvas) {
	        var _this = this;

	        _classCallCheck(this, Toolbar);

	        this.el = $('#toolbar');
	        this.tools = new Map();

	        var pencil = new _Pencil2.default(canvas);
	        var eraser = new _Eraser2.default(canvas);

	        this.tools.set(pencil.name, pencil);
	        this.tools.set(eraser.name, eraser);

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = this.tools.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var tool = _step.value;

	                this.el.append(tool.el);
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        this.selectTool(pencil);

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
	                var tool = this.tools.get(target.attr('data-name').replace('data-', ''));
	                this.selectTool(tool);
	            }
	        }
	    }, {
	        key: "selectTool",
	        value: function selectTool(tool) {
	            this.selectedTool = tool;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = this.tools.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _tool = _step2.value;

	                    _tool.el.removeClass('selected-tool');
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            this.selectedTool.onClick();
	        }
	    }]);

	    return Toolbar;
	}();

	exports.default = Toolbar;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXFRvb2xiYXIuanMiXSwibmFtZXMiOlsiVG9vbGJhciIsImNhbnZhcyIsImVsIiwiJCIsInRvb2xzIiwiTWFwIiwicGVuY2lsIiwiZXJhc2VyIiwic2V0IiwibmFtZSIsInZhbHVlcyIsInRvb2wiLCJhcHBlbmQiLCJzZWxlY3RUb29sIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoYW5kbGVDbGljayIsImRvY3VtZW50Iiwic2VsZWN0ZWRUb29sIiwiY2FudmFzTW91c2VNb3ZlSGFuZGxlciIsImNhbnZhc01vdXNlRG93bkhhbmRsZXIiLCJjYW52YXNNb3VzZVVwSGFuZGxlciIsInRhcmdldCIsImhhc0NsYXNzIiwicGFyZW50cyIsImxlbmd0aCIsImdldCIsImF0dHIiLCJyZXBsYWNlIiwicmVtb3ZlQ2xhc3MiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0lBRU1BLE87QUFDRixxQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUNoQixhQUFLQyxFQUFMLEdBQVVDLEVBQUUsVUFBRixDQUFWO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLElBQUlDLEdBQUosRUFBYjs7QUFFQSxZQUFJQyxTQUFTLHFCQUFXTCxNQUFYLENBQWI7QUFDQSxZQUFJTSxTQUFTLHFCQUFXTixNQUFYLENBQWI7O0FBRUEsYUFBS0csS0FBTCxDQUFXSSxHQUFYLENBQWVGLE9BQU9HLElBQXRCLEVBQTRCSCxNQUE1QjtBQUNBLGFBQUtGLEtBQUwsQ0FBV0ksR0FBWCxDQUFlRCxPQUFPRSxJQUF0QixFQUE0QkYsTUFBNUI7O0FBUmdCO0FBQUE7QUFBQTs7QUFBQTtBQVVoQixpQ0FBaUIsS0FBS0gsS0FBTCxDQUFXTSxNQUFYLEVBQWpCLDhIQUFzQztBQUFBLG9CQUE3QkMsSUFBNkI7O0FBQ2xDLHFCQUFLVCxFQUFMLENBQVFVLE1BQVIsQ0FBZUQsS0FBS1QsRUFBcEI7QUFDSDtBQVplO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYWhCLGFBQUtXLFVBQUwsQ0FBZ0JQLE1BQWhCOztBQUVBLGFBQUtKLEVBQUwsQ0FBUSxDQUFSLEVBQVdZLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLQyxXQUFMLENBQWlCRCxDQUFqQixDQUFQO0FBQUEsU0FBckM7QUFDQUUsaUJBQVNILGdCQUFULENBQTBCLGlCQUExQixFQUE2QyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0csWUFBTCxDQUFrQkMsc0JBQWxCLENBQXlDSixDQUF6QyxDQUFQO0FBQUEsU0FBN0M7QUFDQUUsaUJBQVNILGdCQUFULENBQTBCLGlCQUExQixFQUE2QyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0csWUFBTCxDQUFrQkUsc0JBQWxCLENBQXlDTCxDQUF6QyxDQUFQO0FBQUEsU0FBN0M7QUFDQUUsaUJBQVNILGdCQUFULENBQTBCLGVBQTFCLEVBQTJDLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLRyxZQUFMLENBQWtCRyxvQkFBbEIsQ0FBdUNOLENBQXZDLENBQVA7QUFBQSxTQUEzQztBQUNIOzs7O29DQUVXQSxDLEVBQUc7QUFDWCxnQkFBSU8sU0FBU25CLEVBQUVZLEVBQUVPLE1BQUosRUFBWUMsUUFBWixDQUFxQixNQUFyQixJQUErQnBCLEVBQUVZLEVBQUVPLE1BQUosQ0FBL0IsR0FBOENuQixFQUFFWSxFQUFFTyxNQUFKLEVBQVlFLE9BQVosQ0FBb0IsT0FBcEIsRUFBNkJDLE1BQTlCLEdBQXdDdEIsRUFBRVksRUFBRU8sTUFBSixFQUFZRSxPQUFaLENBQW9CLE9BQXBCLENBQXhDLEdBQXVFLEtBQWpJO0FBQ0EsZ0JBQUlGLE1BQUosRUFBWTtBQUNSLG9CQUFJWCxPQUFPLEtBQUtQLEtBQUwsQ0FBV3NCLEdBQVgsQ0FBZUosT0FBT0ssSUFBUCxDQUFZLFdBQVosRUFBeUJDLE9BQXpCLENBQWlDLE9BQWpDLEVBQTBDLEVBQTFDLENBQWYsQ0FBWDtBQUNBLHFCQUFLZixVQUFMLENBQWdCRixJQUFoQjtBQUNIO0FBQ0o7OzttQ0FFVUEsSSxFQUFNO0FBQ2IsaUJBQUtPLFlBQUwsR0FBb0JQLElBQXBCO0FBRGE7QUFBQTtBQUFBOztBQUFBO0FBRWIsc0NBQWlCLEtBQUtQLEtBQUwsQ0FBV00sTUFBWCxFQUFqQixtSUFBc0M7QUFBQSx3QkFBN0JDLEtBQTZCOztBQUNsQ0EsMEJBQUtULEVBQUwsQ0FBUTJCLFdBQVIsQ0FBb0IsZUFBcEI7QUFDSDtBQUpZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2IsaUJBQUtYLFlBQUwsQ0FBa0JZLE9BQWxCO0FBQ0g7Ozs7OztrQkFFVTlCLE8iLCJmaWxlIjoiVG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi9QZW5jaWxcIjtcclxuaW1wb3J0IEVyYXNlciBmcm9tIFwiLi9FcmFzZXJcIjtcclxuXHJcbmNsYXNzIFRvb2xiYXIge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5lbCA9ICQoJyN0b29sYmFyJyk7XHJcbiAgICAgICAgdGhpcy50b29scyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAgICAgbGV0IHBlbmNpbCA9IG5ldyBQZW5jaWwoY2FudmFzKTtcclxuICAgICAgICBsZXQgZXJhc2VyID0gbmV3IEVyYXNlcihjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvb2xzLnNldChwZW5jaWwubmFtZSwgcGVuY2lsKTtcclxuICAgICAgICB0aGlzLnRvb2xzLnNldChlcmFzZXIubmFtZSwgZXJhc2VyKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdG9vbCBvZiB0aGlzLnRvb2xzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kKHRvb2wuZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdFRvb2wocGVuY2lsKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbFswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGUpKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjYW52YXNNb3VzZU1vdmUnLCAoZSkgPT4gdGhpcy5zZWxlY3RlZFRvb2wuY2FudmFzTW91c2VNb3ZlSGFuZGxlcihlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FudmFzTW91c2VEb3duJywgKGUpID0+IHRoaXMuc2VsZWN0ZWRUb29sLmNhbnZhc01vdXNlRG93bkhhbmRsZXIoZSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnZhc01vdXNlVXAnLCAoZSkgPT4gdGhpcy5zZWxlY3RlZFRvb2wuY2FudmFzTW91c2VVcEhhbmRsZXIoZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3Rvb2wnKSA/ICQoZS50YXJnZXQpIDogKCQoZS50YXJnZXQpLnBhcmVudHMoJy50b29sJykubGVuZ3RoKSA/ICQoZS50YXJnZXQpLnBhcmVudHMoJy50b29sJykgOiBmYWxzZTtcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGxldCB0b29sID0gdGhpcy50b29scy5nZXQodGFyZ2V0LmF0dHIoJ2RhdGEtbmFtZScpLnJlcGxhY2UoJ2RhdGEtJywgJycpKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RUb29sKHRvb2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RUb29sKHRvb2wpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVG9vbCA9IHRvb2w7XHJcbiAgICAgICAgZm9yIChsZXQgdG9vbCBvZiB0aGlzLnRvb2xzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgIHRvb2wuZWwucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkLXRvb2wnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRvb2wub25DbGljaygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7Il19

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(8);

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
	            if (this.dragging) {
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXFBlbmNpbC5qcyJdLCJuYW1lcyI6WyJQZW5jaWwiLCJjYW52YXMiLCJlIiwiZHJhZ2dpbmciLCJpbmRpY2VzIiwiaW5wdXRUb1BpeGVsSW5kZXgiLCJkZXRhaWwiLCJldmVudCIsInVwZGF0ZVBpeGVsIiwieCIsInkiLCJzZWxlY3RlZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0Ysb0JBQVlDLE1BQVosRUFBbUI7QUFBQTs7QUFBQSwrR0FDVEEsTUFEUyxFQUNELFFBREM7QUFFbEI7Ozs7K0NBQ3NCQyxDLEVBQUc7QUFDdEIsZ0JBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNmLG9CQUFJQyxVQUFVLEtBQUtILE1BQUwsQ0FBWUksaUJBQVosQ0FBOEJILEVBQUVJLE1BQUYsQ0FBU0MsS0FBdkMsQ0FBZDtBQUNBLG9CQUFHSCxPQUFILEVBQVc7QUFDUCx5QkFBS0gsTUFBTCxDQUFZTyxXQUFaLENBQXdCSixRQUFRSyxDQUFoQyxFQUFtQ0wsUUFBUU0sQ0FBM0MsRUFBOEMsS0FBS1QsTUFBTCxDQUFZVSxhQUExRDtBQUNIO0FBQ0o7QUFDSjs7Ozs7O2tCQUVVWCxNIiwiZmlsZSI6IlBlbmNpbC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBUb29sIGZyb20gXCIuL1Rvb2xcIjtcclxuXHJcbmNsYXNzIFBlbmNpbCBleHRlbmRzIFRvb2x7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xyXG4gICAgICAgIHN1cGVyKGNhbnZhcywgJ3BlbmNpbCcpO1xyXG4gICAgfVxyXG4gICAgY2FudmFzTW91c2VNb3ZlSGFuZGxlcihlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGluZGljZXMgPSB0aGlzLmNhbnZhcy5pbnB1dFRvUGl4ZWxJbmRleChlLmRldGFpbC5ldmVudCk7XHJcbiAgICAgICAgICAgIGlmKGluZGljZXMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMudXBkYXRlUGl4ZWwoaW5kaWNlcy54LCBpbmRpY2VzLnksIHRoaXMuY2FudmFzLnNlbGVjdGVkQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQZW5jaWw7XHJcbiJdfQ==

/***/ }),
/* 8 */
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
	            this.dragging = true;
	            this.canvasMouseMoveHandler(e);
	        }
	    }, {
	        key: 'canvasMouseUpHandler',
	        value: function canvasMouseUpHandler(e) {
	            this.dragging = false;
	        }
	    }]);

	    return Tool;
	}();

	exports.default = Tool;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXFRvb2wuanMiXSwibmFtZXMiOlsiVG9vbCIsImNhbnZhcyIsIm5hbWUiLCJlbCIsIiQiLCJjbGFzcyIsImFwcGVuZCIsInRleHQiLCJhdHRyIiwiZSIsImFkZENsYXNzIiwiZHJhZ2dpbmciLCJjYW52YXNNb3VzZU1vdmVIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7QUFDRixrQkFBWUMsTUFBWixFQUFvQkMsSUFBcEIsRUFBeUI7QUFBQTs7QUFDckIsYUFBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsYUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsRUFBTCxHQUFVQyxFQUFFLE9BQUYsRUFBVyxFQUFDQyxPQUFPLE1BQVIsRUFBWCxFQUE0QkMsTUFBNUIsQ0FBbUNGLEVBQUUsUUFBRixFQUFZRyxJQUFaLENBQWlCTCxJQUFqQixDQUFuQyxDQUFWO0FBQ0EsYUFBS0MsRUFBTCxDQUFRSyxJQUFSLENBQWEsV0FBYixFQUEwQixLQUFLTixJQUEvQjtBQUNIOzs7O2dDQUNPTyxDLEVBQUU7QUFDTixpQkFBS04sRUFBTCxDQUFRTyxRQUFSLENBQWlCLGVBQWpCO0FBQ0g7OzsrQ0FDc0JELEMsRUFBRztBQUN0QjtBQUNIOzs7K0NBRXNCQSxDLEVBQUc7QUFDdEIsaUJBQUtFLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxpQkFBS0Msc0JBQUwsQ0FBNEJILENBQTVCO0FBQ0g7Ozs2Q0FFb0JBLEMsRUFBRztBQUNwQixpQkFBS0UsUUFBTCxHQUFnQixLQUFoQjtBQUNIOzs7Ozs7a0JBRVVYLEkiLCJmaWxlIjoiVG9vbC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9vbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5lbCA9ICQoJzxkaXY+Jywge2NsYXNzOiAndG9vbCd9KS5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChuYW1lKSk7XHJcbiAgICAgICAgdGhpcy5lbC5hdHRyKCdkYXRhLW5hbWUnLCB0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgb25DbGljayhlKXtcclxuICAgICAgICB0aGlzLmVsLmFkZENsYXNzKCdzZWxlY3RlZC10b29sJyk7XHJcbiAgICB9XHJcbiAgICBjYW52YXNNb3VzZU1vdmVIYW5kbGVyKGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbnZhc01vdXNlRG93bkhhbmRsZXIoZSkge1xyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FudmFzTW91c2VNb3ZlSGFuZGxlcihlKTtcclxuICAgIH07XHJcblxyXG4gICAgY2FudmFzTW91c2VVcEhhbmRsZXIoZSkge1xyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG9vbDsiXX0=

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(8);

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
	            if (this.dragging) {
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXEVyYXNlci5qcyJdLCJuYW1lcyI6WyJFcmFzZXIiLCJjYW52YXMiLCJlIiwiZHJhZ2dpbmciLCJpbmRpY2VzIiwiaW5wdXRUb1BpeGVsSW5kZXgiLCJkZXRhaWwiLCJldmVudCIsInVwZGF0ZVBpeGVsIiwieCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWUMsTUFBWixFQUFtQjtBQUFBOztBQUFBLCtHQUNUQSxNQURTLEVBQ0QsUUFEQztBQUVsQjs7OzsrQ0FDc0JDLEMsRUFBRztBQUN0QixnQkFBSSxLQUFLQyxRQUFULEVBQW1CO0FBQ2Ysb0JBQUlDLFVBQVUsS0FBS0gsTUFBTCxDQUFZSSxpQkFBWixDQUE4QkgsRUFBRUksTUFBRixDQUFTQyxLQUF2QyxDQUFkO0FBQ0Esb0JBQUdILE9BQUgsRUFBVztBQUNQLHlCQUFLSCxNQUFMLENBQVlPLFdBQVosQ0FBd0JKLFFBQVFLLENBQWhDLEVBQW1DTCxRQUFRTSxDQUEzQyxFQUE4QyxDQUE5QztBQUNIO0FBQ0o7QUFDSjs7Ozs7O2tCQUVVVixNIiwiZmlsZSI6IkVyYXNlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvb2wgZnJvbSBcIi4vVG9vbFwiO1xyXG5cclxuY2xhc3MgRXJhc2VyIGV4dGVuZHMgVG9vbHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcyl7XHJcbiAgICAgICAgc3VwZXIoY2FudmFzLCAnZXJhc2VyJyk7XHJcbiAgICB9XHJcbiAgICBjYW52YXNNb3VzZU1vdmVIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMuY2FudmFzLmlucHV0VG9QaXhlbEluZGV4KGUuZGV0YWlsLmV2ZW50KTtcclxuICAgICAgICAgICAgaWYoaW5kaWNlcyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy51cGRhdGVQaXhlbChpbmRpY2VzLngsIGluZGljZXMueSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVyYXNlcjsiXX0=

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ColorSelector = __webpack_require__(11);

	var _ColorSelector2 = _interopRequireDefault(_ColorSelector);

	var _HelpLines = __webpack_require__(13);

	var _HelpLines2 = _interopRequireDefault(_HelpLines);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SettingMenu = function () {
	    function SettingMenu(canvas) {
	        var _this = this;

	        _classCallCheck(this, SettingMenu);

	        this.el = $('#settingmenu');
	        this.settings = new Map();

	        var color = new _ColorSelector2.default(canvas);
	        var helpLines = new _HelpLines2.default(canvas);

	        this.settings.set(color.name, color);
	        this.settings.set(helpLines.name, helpLines);

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = this.settings.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var setting = _step.value;

	                this.el.append(setting.el);
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        this.toggleSetting(helpLines);

	        this.el[0].addEventListener('click', function (e) {
	            return _this.handleClick(e);
	        });
	    }

	    _createClass(SettingMenu, [{
	        key: "handleClick",
	        value: function handleClick(e) {
	            var target = $(e.target).hasClass('setting') ? $(e.target) : $(e.target).parents('.setting').length ? $(e.target).parents('.setting') : false;
	            if (target) {
	                var setting = this.settings.get(target.attr('data-name').replace('data-', ''));
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXFNldHRpbmdNZW51LmpzIl0sIm5hbWVzIjpbIlNldHRpbmdNZW51IiwiY2FudmFzIiwiZWwiLCIkIiwic2V0dGluZ3MiLCJNYXAiLCJjb2xvciIsImhlbHBMaW5lcyIsInNldCIsIm5hbWUiLCJ2YWx1ZXMiLCJzZXR0aW5nIiwiYXBwZW5kIiwidG9nZ2xlU2V0dGluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaGFuZGxlQ2xpY2siLCJ0YXJnZXQiLCJoYXNDbGFzcyIsInBhcmVudHMiLCJsZW5ndGgiLCJnZXQiLCJhdHRyIiwicmVwbGFjZSIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEsVztBQUNGLHlCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCLGFBQUtDLEVBQUwsR0FBVUMsRUFBRSxjQUFGLENBQVY7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLElBQUlDLEdBQUosRUFBaEI7O0FBRUEsWUFBSUMsUUFBUSw0QkFBa0JMLE1BQWxCLENBQVo7QUFDQSxZQUFJTSxZQUFZLHdCQUFjTixNQUFkLENBQWhCOztBQUVBLGFBQUtHLFFBQUwsQ0FBY0ksR0FBZCxDQUFrQkYsTUFBTUcsSUFBeEIsRUFBOEJILEtBQTlCO0FBQ0EsYUFBS0YsUUFBTCxDQUFjSSxHQUFkLENBQWtCRCxVQUFVRSxJQUE1QixFQUFrQ0YsU0FBbEM7O0FBUmdCO0FBQUE7QUFBQTs7QUFBQTtBQVdoQixpQ0FBb0IsS0FBS0gsUUFBTCxDQUFjTSxNQUFkLEVBQXBCLDhIQUE0QztBQUFBLG9CQUFuQ0MsT0FBbUM7O0FBQ3hDLHFCQUFLVCxFQUFMLENBQVFVLE1BQVIsQ0FBZUQsUUFBUVQsRUFBdkI7QUFDSDtBQWJlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY2hCLGFBQUtXLGFBQUwsQ0FBbUJOLFNBQW5COztBQUVBLGFBQUtMLEVBQUwsQ0FBUSxDQUFSLEVBQVdZLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLQyxXQUFMLENBQWlCRCxDQUFqQixDQUFQO0FBQUEsU0FBckM7QUFDSDs7OztvQ0FFV0EsQyxFQUFHO0FBQ1gsZ0JBQUlFLFNBQVNkLEVBQUVZLEVBQUVFLE1BQUosRUFBWUMsUUFBWixDQUFxQixTQUFyQixJQUFrQ2YsRUFBRVksRUFBRUUsTUFBSixDQUFsQyxHQUFpRGQsRUFBRVksRUFBRUUsTUFBSixFQUFZRSxPQUFaLENBQW9CLFVBQXBCLEVBQWdDQyxNQUFqQyxHQUEyQ2pCLEVBQUVZLEVBQUVFLE1BQUosRUFBWUUsT0FBWixDQUFvQixVQUFwQixDQUEzQyxHQUE2RSxLQUExSTtBQUNBLGdCQUFJRixNQUFKLEVBQVk7QUFDUixvQkFBSU4sVUFBVSxLQUFLUCxRQUFMLENBQWNpQixHQUFkLENBQWtCSixPQUFPSyxJQUFQLENBQVksV0FBWixFQUF5QkMsT0FBekIsQ0FBaUMsT0FBakMsRUFBMEMsRUFBMUMsQ0FBbEIsQ0FBZDtBQUNBLHFCQUFLVixhQUFMLENBQW1CRixPQUFuQjtBQUNIO0FBQ0o7OztzQ0FDYUEsTyxFQUFRO0FBQ2xCQSxvQkFBUWEsT0FBUjtBQUNIOzs7Ozs7a0JBRVV4QixXIiwiZmlsZSI6IlNldHRpbmdNZW51LmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29sb3JTZWxlY3RvciBmcm9tIFwiLi9Db2xvclNlbGVjdG9yXCI7XHJcbmltcG9ydCBIZWxwTGluZXMgZnJvbSBcIi4vSGVscExpbmVzXCI7XHJcblxyXG5jbGFzcyBTZXR0aW5nTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmVsID0gJCgnI3NldHRpbmdtZW51Jyk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbG9yID0gbmV3IENvbG9yU2VsZWN0b3IoY2FudmFzKTtcclxuICAgICAgICBsZXQgaGVscExpbmVzID0gbmV3IEhlbHBMaW5lcyhjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdzLnNldChjb2xvci5uYW1lLCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZXQoaGVscExpbmVzLm5hbWUsIGhlbHBMaW5lcyk7XHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBzZXR0aW5nIG9mIHRoaXMuc2V0dGluZ3MudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmQoc2V0dGluZy5lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG9nZ2xlU2V0dGluZyhoZWxwTGluZXMpO1xyXG5cclxuICAgICAgICB0aGlzLmVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGUpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NldHRpbmcnKSA/ICQoZS50YXJnZXQpIDogKCQoZS50YXJnZXQpLnBhcmVudHMoJy5zZXR0aW5nJykubGVuZ3RoKSA/ICQoZS50YXJnZXQpLnBhcmVudHMoJy5zZXR0aW5nJykgOiBmYWxzZTtcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGxldCBzZXR0aW5nID0gdGhpcy5zZXR0aW5ncy5nZXQodGFyZ2V0LmF0dHIoJ2RhdGEtbmFtZScpLnJlcGxhY2UoJ2RhdGEtJywgJycpKTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTZXR0aW5nKHNldHRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvZ2dsZVNldHRpbmcoc2V0dGluZyl7XHJcbiAgICAgICAgc2V0dGluZy5vbkNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ01lbnU7Il19

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CanvasSetting2 = __webpack_require__(12);

	var _CanvasSetting3 = _interopRequireDefault(_CanvasSetting2);

	var _HelpFunctions = __webpack_require__(3);

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
	        _this.image = $('img', _this.selectEl);

	        setTimeout(function () {
	            return _this.initialiseColorSelector();
	        }, 100);

	        return _this;
	    }

	    _createClass(ColorSelector, [{
	        key: "initialiseColorSelector",
	        value: function initialiseColorSelector() {
	            var _this2 = this;

	            this.selectColorCanvas = document.createElement('canvas');
	            this.selectColorCanvas.width = this.image.width();
	            this.selectColorCanvas.height = this.image.height();
	            this.selectColorCanvas.getContext('2d').drawImage(this.image[0], 0, 0, this.image.width(), this.image.height());

	            this.image.on('mousemove', function (e) {
	                return _this2.hoverHandler(e);
	            });
	            this.image.on('click', function (e) {
	                return _this2.clickHandler(e);
	            });
	        }
	    }, {
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
	    }]);

	    return ColorSelector;
	}(_CanvasSetting3.default);

	exports.default = ColorSelector;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXENvbG9yU2VsZWN0b3IuanMiXSwibmFtZXMiOlsiQ29sb3JTZWxlY3RvciIsImNhbnZhcyIsInNlbGVjdEVsIiwiJCIsImltYWdlIiwic2V0VGltZW91dCIsImluaXRpYWxpc2VDb2xvclNlbGVjdG9yIiwic2VsZWN0Q29sb3JDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJvbiIsImUiLCJob3ZlckhhbmRsZXIiLCJjbGlja0hhbmRsZXIiLCJwaXhlbERhdGEiLCJnZXRJbWFnZURhdGEiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImRhdGEiLCJoZXhDb2xvciIsInJnYlRvSGV4IiwiY3NzIiwic2V0U2VsZWN0ZWRDb2xvciIsInRleHQiLCJ0b2dnbGUiLCJlbCIsInRvZ2dsZUNsYXNzIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7QUFDRiwyQkFBWUMsTUFBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNUQSxNQURTLEVBQ0QsT0FEQzs7QUFFZixjQUFLQyxRQUFMLEdBQWdCQyxFQUFFLGdCQUFGLENBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhRCxFQUFFLEtBQUYsRUFBUyxNQUFLRCxRQUFkLENBQWI7O0FBRUFHLG1CQUFXO0FBQUEsbUJBQU0sTUFBS0MsdUJBQUwsRUFBTjtBQUFBLFNBQVgsRUFBaUQsR0FBakQ7O0FBTGU7QUFPbEI7Ozs7a0RBQ3dCO0FBQUE7O0FBQ3JCLGlCQUFLQyxpQkFBTCxHQUF5QkMsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUF6QjtBQUNBLGlCQUFLRixpQkFBTCxDQUF1QkcsS0FBdkIsR0FBK0IsS0FBS04sS0FBTCxDQUFXTSxLQUFYLEVBQS9CO0FBQ0EsaUJBQUtILGlCQUFMLENBQXVCSSxNQUF2QixHQUFnQyxLQUFLUCxLQUFMLENBQVdPLE1BQVgsRUFBaEM7QUFDQSxpQkFBS0osaUJBQUwsQ0FBdUJLLFVBQXZCLENBQWtDLElBQWxDLEVBQXdDQyxTQUF4QyxDQUFrRCxLQUFLVCxLQUFMLENBQVcsQ0FBWCxDQUFsRCxFQUFpRSxDQUFqRSxFQUFvRSxDQUFwRSxFQUF1RSxLQUFLQSxLQUFMLENBQVdNLEtBQVgsRUFBdkUsRUFBMkYsS0FBS04sS0FBTCxDQUFXTyxNQUFYLEVBQTNGOztBQUVBLGlCQUFLUCxLQUFMLENBQVdVLEVBQVgsQ0FBYyxXQUFkLEVBQTJCLFVBQUNDLENBQUQ7QUFBQSx1QkFBTyxPQUFLQyxZQUFMLENBQWtCRCxDQUFsQixDQUFQO0FBQUEsYUFBM0I7QUFDQSxpQkFBS1gsS0FBTCxDQUFXVSxFQUFYLENBQWMsT0FBZCxFQUF1QixVQUFDQyxDQUFEO0FBQUEsdUJBQU8sT0FBS0UsWUFBTCxDQUFrQkYsQ0FBbEIsQ0FBUDtBQUFBLGFBQXZCO0FBQ0g7OztxQ0FDWUEsQyxFQUFFO0FBQ1gsZ0JBQUlHLFlBQVksS0FBS1gsaUJBQUwsQ0FBdUJLLFVBQXZCLENBQWtDLElBQWxDLEVBQXdDTyxZQUF4QyxDQUFxREosRUFBRUssT0FBdkQsRUFBZ0VMLEVBQUVNLE9BQWxFLEVBQTJFLENBQTNFLEVBQThFLENBQTlFLEVBQWlGQyxJQUFqRztBQUNBLGdCQUFJQyxXQUFXLHdCQUFjQyxRQUFkLENBQXVCTixVQUFVLENBQVYsQ0FBdkIsRUFBcUNBLFVBQVUsQ0FBVixDQUFyQyxFQUFtREEsVUFBVSxDQUFWLENBQW5ELENBQWY7QUFDQWYsY0FBRSx1QkFBRixFQUEyQixLQUFLRCxRQUFoQyxFQUEwQ3VCLEdBQTFDLENBQThDLGtCQUE5QyxFQUFrRUYsUUFBbEU7QUFDQSxpQkFBS3RCLE1BQUwsQ0FBWXlCLGdCQUFaLENBQTZCSCxRQUE3QjtBQUNIOzs7cUNBQ1lSLEMsRUFBRTtBQUNYLGdCQUFJRyxZQUFZLEtBQUtYLGlCQUFMLENBQXVCSyxVQUF2QixDQUFrQyxJQUFsQyxFQUF3Q08sWUFBeEMsQ0FBcURKLEVBQUVLLE9BQXZELEVBQWdFTCxFQUFFTSxPQUFsRSxFQUEyRSxDQUEzRSxFQUE4RSxDQUE5RSxFQUFpRkMsSUFBakc7QUFDQW5CLGNBQUUsY0FBRixFQUFrQixLQUFLRCxRQUF2QixFQUFpQ3lCLElBQWpDLENBQXNDVCxVQUFVLENBQVYsQ0FBdEM7QUFDQWYsY0FBRSxnQkFBRixFQUFvQixLQUFLRCxRQUF6QixFQUFtQ3lCLElBQW5DLENBQXdDVCxVQUFVLENBQVYsQ0FBeEM7QUFDQWYsY0FBRSxlQUFGLEVBQW1CLEtBQUtELFFBQXhCLEVBQWtDeUIsSUFBbEMsQ0FBdUNULFVBQVUsQ0FBVixDQUF2QztBQUNBZixjQUFFLGVBQUYsRUFBbUIsS0FBS0QsUUFBeEIsRUFBa0N1QixHQUFsQyxDQUFzQyxrQkFBdEMsRUFBMEQsd0JBQWNELFFBQWQsQ0FBdUJOLFVBQVUsQ0FBVixDQUF2QixFQUFxQ0EsVUFBVSxDQUFWLENBQXJDLEVBQW1EQSxVQUFVLENBQVYsQ0FBbkQsQ0FBMUQ7QUFDSDs7O2dDQUNPSCxDLEVBQUU7QUFDTixpQkFBS2IsUUFBTCxDQUFjMEIsTUFBZDtBQUNBLGlCQUFLQyxFQUFMLENBQVFDLFdBQVIsQ0FBb0IsZUFBcEI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDSDs7Ozs7O2tCQUVVL0IsYSIsImZpbGUiOiJDb2xvclNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzU2V0dGluZyBmcm9tIFwiLi9DYW52YXNTZXR0aW5nXCI7XHJcbmltcG9ydCBIZWxwRnVuY3Rpb25zIGZyb20gXCIuLi8uLi9IZWxwRnVuY3Rpb25zXCI7XHJcblxyXG5jbGFzcyBDb2xvclNlbGVjdG9yIGV4dGVuZHMgQ2FudmFzU2V0dGluZ3tcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcyl7XHJcbiAgICAgICAgc3VwZXIoY2FudmFzLCAnY29sb3InKTtcclxuICAgICAgICB0aGlzLnNlbGVjdEVsID0gJCgnLmNvbG9yU2VsZWN0b3InKTtcclxuICAgICAgICB0aGlzLmltYWdlID0gJCgnaW1nJywgdGhpcy5zZWxlY3RFbCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0aWFsaXNlQ29sb3JTZWxlY3RvcigpLCAxMDApO1xyXG5cclxuICAgIH1cclxuICAgIGluaXRpYWxpc2VDb2xvclNlbGVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDb2xvckNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q29sb3JDYW52YXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDb2xvckNhbnZhcy5oZWlnaHQgPSB0aGlzLmltYWdlLmhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q29sb3JDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy5pbWFnZVswXSwgMCwgMCwgdGhpcy5pbWFnZS53aWR0aCgpLCB0aGlzLmltYWdlLmhlaWdodCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHRoaXMuaG92ZXJIYW5kbGVyKGUpKTtcclxuICAgICAgICB0aGlzLmltYWdlLm9uKCdjbGljaycsIChlKSA9PiB0aGlzLmNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICB9XHJcbiAgICBjbGlja0hhbmRsZXIoZSl7XHJcbiAgICAgICAgbGV0IHBpeGVsRGF0YSA9IHRoaXMuc2VsZWN0Q29sb3JDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5nZXRJbWFnZURhdGEoZS5vZmZzZXRYLCBlLm9mZnNldFksIDEsIDEpLmRhdGE7XHJcbiAgICAgICAgbGV0IGhleENvbG9yID0gSGVscEZ1bmN0aW9ucy5yZ2JUb0hleChwaXhlbERhdGFbMF0sIHBpeGVsRGF0YVsxXSwgcGl4ZWxEYXRhWzJdKTtcclxuICAgICAgICAkKCcuc2VsZWN0ZWRDb2xvckRpc3BsYXknLCB0aGlzLnNlbGVjdEVsKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBoZXhDb2xvcik7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0U2VsZWN0ZWRDb2xvcihoZXhDb2xvcik7XHJcbiAgICB9XHJcbiAgICBob3ZlckhhbmRsZXIoZSl7XHJcbiAgICAgICAgbGV0IHBpeGVsRGF0YSA9IHRoaXMuc2VsZWN0Q29sb3JDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5nZXRJbWFnZURhdGEoZS5vZmZzZXRYLCBlLm9mZnNldFksIDEsIDEpLmRhdGE7XHJcbiAgICAgICAgJCgnLnJlZC1kaXNwbGF5JywgdGhpcy5zZWxlY3RFbCkudGV4dChwaXhlbERhdGFbMF0pO1xyXG4gICAgICAgICQoJy5ncmVlbi1kaXNwbGF5JywgdGhpcy5zZWxlY3RFbCkudGV4dChwaXhlbERhdGFbMV0pO1xyXG4gICAgICAgICQoJy5ibHVlLWRpc3BsYXknLCB0aGlzLnNlbGVjdEVsKS50ZXh0KHBpeGVsRGF0YVsyXSk7XHJcbiAgICAgICAgJCgnLmNvbG9yRGlzcGxheScsIHRoaXMuc2VsZWN0RWwpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIEhlbHBGdW5jdGlvbnMucmdiVG9IZXgocGl4ZWxEYXRhWzBdLCBwaXhlbERhdGFbMV0sIHBpeGVsRGF0YVsyXSkpO1xyXG4gICAgfVxyXG4gICAgb25DbGljayhlKXtcclxuICAgICAgICB0aGlzLnNlbGVjdEVsLnRvZ2dsZSgpO1xyXG4gICAgICAgIHRoaXMuZWwudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkLXRvb2wnKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb2xvclNlbGVjdG9yO1xyXG4iXX0=

/***/ }),
/* 12 */
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXENhbnZhc1NldHRpbmcuanMiXSwibmFtZXMiOlsiQ2FudmFzU2V0dGluZyIsImNhbnZhcyIsIm5hbWUiLCJhY3RpdmUiLCJlbCIsIiQiLCJjbGFzcyIsImFwcGVuZCIsInRleHQiLCJhdHRyIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxhO0FBQ0YsMkJBQVlDLE1BQVosRUFBb0JDLElBQXBCLEVBQXlCO0FBQUE7O0FBQ3JCLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUtFLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBS0MsRUFBTCxHQUFVQyxFQUFFLE9BQUYsRUFBVyxFQUFDQyxPQUFPLFNBQVIsRUFBWCxFQUErQkMsTUFBL0IsQ0FBc0NGLEVBQUUsUUFBRixFQUFZRyxJQUFaLENBQWlCTixJQUFqQixDQUF0QyxDQUFWO0FBQ0EsYUFBS0UsRUFBTCxDQUFRSyxJQUFSLENBQWEsV0FBYixFQUEwQixLQUFLUCxJQUEvQjtBQUNIOzs7O2dDQUNPUSxDLEVBQUU7QUFDTixpQkFBS1AsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDSDs7Ozs7O2tCQUVVSCxhIiwiZmlsZSI6IkNhbnZhc1NldHRpbmcuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbnZhc1NldHRpbmd7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVsID0gJCgnPGRpdj4nLCB7Y2xhc3M6ICdzZXR0aW5nJ30pLmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KG5hbWUpKTtcclxuICAgICAgICB0aGlzLmVsLmF0dHIoJ2RhdGEtbmFtZScsIHRoaXMubmFtZSlcclxuICAgIH1cclxuICAgIG9uQ2xpY2soZSl7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzU2V0dGluZzsiXX0=

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CanvasSetting = __webpack_require__(12);

	var _CanvasSetting2 = _interopRequireDefault(_CanvasSetting);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelpLines = function (_ToggleTool) {
	    _inherits(HelpLines, _ToggleTool);

	    function HelpLines(canvas) {
	        _classCallCheck(this, HelpLines);

	        var _this = _possibleConstructorReturn(this, (HelpLines.__proto__ || Object.getPrototypeOf(HelpLines)).call(this, canvas, 'Helplines'));

	        document.addEventListener('canvasRedraw', function () {
	            return _this.drawHelpLines();
	        });
	        return _this;
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
	            if (!this.active) {
	                return;
	            }
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
	            // dit is echt lelijk moet ik misschien anders oplossen
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXEhlbHBMaW5lcy5qcyJdLCJuYW1lcyI6WyJIZWxwTGluZXMiLCJjYW52YXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmF3SGVscExpbmVzIiwiZSIsImVsIiwidG9nZ2xlQ2xhc3MiLCJhY3RpdmUiLCJyZW1vdmVIZWxwTGluZXMiLCJjIiwiaGVscENhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJiZWdpblBhdGgiLCJpIiwid2lkdGgiLCJtb3ZlVG8iLCJwb3NpdGlvbiIsIngiLCJzY2FsZSIsInkiLCJsaW5lVG8iLCJoZWlnaHQiLCJqIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiY2xlYXJDYW52YXMiLCJkcmF3T3V0bGluaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsUzs7O0FBQ0YsdUJBQVlDLE1BQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVEEsTUFEUyxFQUNELFdBREM7O0FBRWZDLGlCQUFTQyxnQkFBVCxDQUEwQixjQUExQixFQUEwQztBQUFBLG1CQUFNLE1BQUtDLGFBQUwsRUFBTjtBQUFBLFNBQTFDO0FBRmU7QUFHbEI7Ozs7Z0NBQ09DLEMsRUFBRTtBQUNOLGlCQUFLQyxFQUFMLENBQVFDLFdBQVIsQ0FBb0IsZUFBcEI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7QUFDQSxnQkFBRyxLQUFLQSxNQUFSLEVBQWU7QUFDWCxxQkFBS0osYUFBTDtBQUNILGFBRkQsTUFFSztBQUNELHFCQUFLSyxlQUFMO0FBQ0g7QUFDSjs7O3dDQUNlO0FBQ1osZ0JBQUcsQ0FBQyxLQUFLRCxNQUFULEVBQWdCO0FBQ1o7QUFDSDtBQUNELGdCQUFJRSxJQUFJLEtBQUtULE1BQUwsQ0FBWVUsVUFBWixDQUF1QixDQUF2QixDQUFSO0FBQ0EsZ0JBQUlDLE1BQU1GLEVBQUVHLFVBQUYsQ0FBYSxJQUFiLENBQVY7QUFDQUQsZ0JBQUlFLFNBQUo7QUFDQSxpQkFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2QsTUFBTCxDQUFZZSxLQUFoQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDeENILG9CQUFJSyxNQUFKLENBQVcsS0FBS2hCLE1BQUwsQ0FBWWlCLFFBQVosQ0FBcUJDLENBQXJCLEdBQXlCSixJQUFJLEtBQUtkLE1BQUwsQ0FBWW1CLEtBQXpDLEdBQWlELEdBQTVELEVBQWlFLEtBQUtuQixNQUFMLENBQVlpQixRQUFaLENBQXFCRyxDQUFyQixHQUF5QixHQUExRjtBQUNBVCxvQkFBSVUsTUFBSixDQUFXLEtBQUtyQixNQUFMLENBQVlpQixRQUFaLENBQXFCQyxDQUFyQixHQUF5QkosSUFBSSxLQUFLZCxNQUFMLENBQVltQixLQUF6QyxHQUFpRCxHQUE1RCxFQUFpRSxLQUFLbkIsTUFBTCxDQUFZaUIsUUFBWixDQUFxQkcsQ0FBckIsR0FBeUIsS0FBS3BCLE1BQUwsQ0FBWXNCLE1BQVosR0FBcUIsS0FBS3RCLE1BQUwsQ0FBWW1CLEtBQTFELEdBQWtFLEdBQW5JO0FBQ0g7QUFDRCxpQkFBSyxJQUFJSSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3ZCLE1BQUwsQ0FBWXNCLE1BQWhDLEVBQXdDQyxHQUF4QyxFQUE2QztBQUN6Q1osb0JBQUlLLE1BQUosQ0FBVyxLQUFLaEIsTUFBTCxDQUFZaUIsUUFBWixDQUFxQkMsQ0FBckIsR0FBeUIsR0FBcEMsRUFBeUMsS0FBS2xCLE1BQUwsQ0FBWWlCLFFBQVosQ0FBcUJHLENBQXJCLEdBQXlCRyxJQUFJLEtBQUt2QixNQUFMLENBQVltQixLQUF6QyxHQUFpRCxHQUExRjtBQUNBUixvQkFBSVUsTUFBSixDQUFXLEtBQUtyQixNQUFMLENBQVlpQixRQUFaLENBQXFCQyxDQUFyQixHQUF5QixLQUFLbEIsTUFBTCxDQUFZZSxLQUFaLEdBQW9CLEtBQUtmLE1BQUwsQ0FBWW1CLEtBQXpELEdBQWlFLEdBQTVFLEVBQWlGLEtBQUtuQixNQUFMLENBQVlpQixRQUFaLENBQXFCRyxDQUFyQixHQUF5QkcsSUFBSSxLQUFLdkIsTUFBTCxDQUFZbUIsS0FBekMsR0FBaUQsR0FBbEk7QUFDSDtBQUNEUixnQkFBSWEsTUFBSjtBQUNBYixnQkFBSWMsU0FBSjtBQUNBO0FBQ0g7OzswQ0FDZ0I7QUFDYixpQkFBS3pCLE1BQUwsQ0FBWTBCLFdBQVosQ0FBd0IsS0FBSzFCLE1BQUwsQ0FBWVUsVUFBcEM7QUFDQSxpQkFBS1YsTUFBTCxDQUFZMkIsYUFBWjtBQUNIOzs7K0NBQ3NCdkIsQyxFQUFHO0FBQ3RCO0FBQ0g7OzsrQ0FFc0JBLEMsRUFBRztBQUN0QjtBQUNIOzs7NkNBRW9CQSxDLEVBQUc7QUFDcEI7QUFDSDs7Ozs7O2tCQUVVTCxTIiwiZmlsZSI6IkhlbHBMaW5lcy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZ2dsZVRvb2wgZnJvbSBcIi4vQ2FudmFzU2V0dGluZ1wiO1xyXG5cclxuY2xhc3MgSGVscExpbmVzIGV4dGVuZHMgVG9nZ2xlVG9vbHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcyl7XHJcbiAgICAgICAgc3VwZXIoY2FudmFzLCAnSGVscGxpbmVzJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FudmFzUmVkcmF3JywgKCkgPT4gdGhpcy5kcmF3SGVscExpbmVzKCkpO1xyXG4gICAgfVxyXG4gICAgb25DbGljayhlKXtcclxuICAgICAgICB0aGlzLmVsLnRvZ2dsZUNsYXNzKCdzZWxlY3RlZC10b29sJyk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICAgICAgaWYodGhpcy5hY3RpdmUpe1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdIZWxwTGluZXMoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVIZWxwTGluZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3SGVscExpbmVzKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmNhbnZhcy5oZWxwQ2FudmFzWzBdO1xyXG4gICAgICAgIGxldCBjdHggPSBjLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmNhbnZhcy53aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy5jYW52YXMucG9zaXRpb24ueCArIGkgKiB0aGlzLmNhbnZhcy5zY2FsZSArIDAuNSwgdGhpcy5jYW52YXMucG9zaXRpb24ueSArIDAuNSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy5jYW52YXMucG9zaXRpb24ueCArIGkgKiB0aGlzLmNhbnZhcy5zY2FsZSArIDAuNSwgdGhpcy5jYW52YXMucG9zaXRpb24ueSArIHRoaXMuY2FudmFzLmhlaWdodCAqIHRoaXMuY2FudmFzLnNjYWxlICsgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCB0aGlzLmNhbnZhcy5oZWlnaHQ7IGorKykge1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMuY2FudmFzLnBvc2l0aW9uLnggKyAwLjUsIHRoaXMuY2FudmFzLnBvc2l0aW9uLnkgKyBqICogdGhpcy5jYW52YXMuc2NhbGUgKyAwLjUpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMuY2FudmFzLnBvc2l0aW9uLnggKyB0aGlzLmNhbnZhcy53aWR0aCAqIHRoaXMuY2FudmFzLnNjYWxlICsgMC41LCB0aGlzLmNhbnZhcy5wb3NpdGlvbi55ICsgaiAqIHRoaXMuY2FudmFzLnNjYWxlICsgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAvLyBkaXQgaXMgZWNodCBsZWxpamsgbW9ldCBpayBtaXNzY2hpZW4gYW5kZXJzIG9wbG9zc2VuXHJcbiAgICB9O1xyXG4gICAgcmVtb3ZlSGVscExpbmVzKCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuY2xlYXJDYW52YXModGhpcy5jYW52YXMuaGVscENhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd091dGxpbmluZygpO1xyXG4gICAgfVxyXG4gICAgY2FudmFzTW91c2VNb3ZlSGFuZGxlcihlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICBjYW52YXNNb3VzZURvd25IYW5kbGVyKGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbnZhc01vdXNlVXBIYW5kbGVyKGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlbHBMaW5lcztcclxuXHJcbiJdfQ==

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CreateNewRoom = function () {
	    function CreateNewRoom() {
	        _classCallCheck(this, CreateNewRoom);

	        this.el = $('.create-new');
	        $('input[type=button]', this.el).on('click', this.createRoom);
	    }

	    _createClass(CreateNewRoom, [{
	        key: 'createRoom',
	        value: function createRoom() {
	            window.location = window.location.href + '/' + $('#roomName').val();
	        }
	    }]);

	    return CreateNewRoom;
	}();

	exports.default = CreateNewRoom;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGxpc3RWaWV3XFxjcmVhdGVOZXdSb29tLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZU5ld1Jvb20iLCJlbCIsIiQiLCJvbiIsImNyZWF0ZVJvb20iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYTtBQUNGLDZCQUFhO0FBQUE7O0FBQ1QsYUFBS0MsRUFBTCxHQUFVQyxFQUFFLGFBQUYsQ0FBVjtBQUNBQSxVQUFFLG9CQUFGLEVBQXdCLEtBQUtELEVBQTdCLEVBQWlDRSxFQUFqQyxDQUFvQyxPQUFwQyxFQUE2QyxLQUFLQyxVQUFsRDtBQUNIOzs7O3FDQUNXO0FBQ1JDLG1CQUFPQyxRQUFQLEdBQWtCRCxPQUFPQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixHQUF2QixHQUEyQkwsRUFBRSxXQUFGLEVBQWVNLEdBQWYsRUFBN0M7QUFDSDs7Ozs7O2tCQUVVUixhIiwiZmlsZSI6ImNyZWF0ZU5ld1Jvb20uanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENyZWF0ZU5ld1Jvb20ge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmVsID0gJCgnLmNyZWF0ZS1uZXcnKTtcclxuICAgICAgICAkKCdpbnB1dFt0eXBlPWJ1dHRvbl0nLCB0aGlzLmVsKS5vbignY2xpY2snLCB0aGlzLmNyZWF0ZVJvb20pXHJcbiAgICB9XHJcbiAgICBjcmVhdGVSb29tKCl7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnLycrJCgnI3Jvb21OYW1lJykudmFsKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlTmV3Um9vbVxyXG4iXX0=

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DataStreamHandler = __webpack_require__(2);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RoomList = function () {
	    function RoomList() {
	        var _this = this;

	        _classCallCheck(this, RoomList);

	        this.el = $('.list-view');
	        _DataStreamHandler2.default.requestRoomsList();
	        this.el.on('click', this.joinRoom);
	        document.addEventListener('updateRooms', function (e) {
	            return _this.updateRoomList(e);
	        });
	    }

	    _createClass(RoomList, [{
	        key: 'updateRoomList',
	        value: function updateRoomList(e) {
	            var hide = true;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = e.detail.rooms.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _step$value = _slicedToArray(_step.value, 2),
	                        name = _step$value[0],
	                        room = _step$value[1];

	                    var listItem = $('<div>', { class: 'room--list' }).append('<span>').text(name + ' ' + room.length);
	                    listItem.attr('data-name', name);
	                    this.el.append(listItem);
	                    hide = false;
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            if (hide) {
	                this.el.hide();
	            }
	        }
	    }, {
	        key: 'joinRoom',
	        value: function joinRoom(e) {
	            var target = $(e.target).hasClass('room--list') ? $(e.target) : $(e.target).parents('.room--list').length ? $(e.target).parents('.room--list') : false;
	            if (target) {
	                window.location = window.location.href + '/' + target.attr('data-name').replace('data-', '');
	            }
	        }
	    }]);

	    return RoomList;
	}();

	exports.default = RoomList;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGxpc3RWaWV3XFxyb29tTGlzdC5qcyJdLCJuYW1lcyI6WyJSb29tTGlzdCIsImVsIiwiJCIsInJlcXVlc3RSb29tc0xpc3QiLCJvbiIsImpvaW5Sb29tIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInVwZGF0ZVJvb21MaXN0IiwiaGlkZSIsImRldGFpbCIsInJvb21zIiwiZW50cmllcyIsIm5hbWUiLCJyb29tIiwibGlzdEl0ZW0iLCJjbGFzcyIsImFwcGVuZCIsInRleHQiLCJsZW5ndGgiLCJhdHRyIiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJwYXJlbnRzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztJQUNNQSxRO0FBQ0Ysd0JBQWE7QUFBQTs7QUFBQTs7QUFDVCxhQUFLQyxFQUFMLEdBQVVDLEVBQUUsWUFBRixDQUFWO0FBQ0Esb0NBQWtCQyxnQkFBbEI7QUFDQSxhQUFLRixFQUFMLENBQVFHLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLEtBQUtDLFFBQXpCO0FBQ0FDLGlCQUFTQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QyxVQUFDQyxDQUFEO0FBQUEsbUJBQU0sTUFBS0MsY0FBTCxDQUFvQkQsQ0FBcEIsQ0FBTjtBQUFBLFNBQXpDO0FBQ0g7Ozs7dUNBQ2NBLEMsRUFBRTtBQUNiLGdCQUFJRSxPQUFPLElBQVg7QUFEYTtBQUFBO0FBQUE7O0FBQUE7QUFFYixxQ0FBeUJGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxPQUFmLEVBQXpCLDhIQUFtRDtBQUFBO0FBQUEsd0JBQXpDQyxJQUF5QztBQUFBLHdCQUFuQ0MsSUFBbUM7O0FBQy9DLHdCQUFJQyxXQUFXZCxFQUFFLE9BQUYsRUFBVyxFQUFDZSxPQUFPLFlBQVIsRUFBWCxFQUFrQ0MsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbURDLElBQW5ELENBQXdETCxPQUFPLEdBQVAsR0FBYUMsS0FBS0ssTUFBMUUsQ0FBZjtBQUNBSiw2QkFBU0ssSUFBVCxDQUFjLFdBQWQsRUFBMkJQLElBQTNCO0FBQ0EseUJBQUtiLEVBQUwsQ0FBUWlCLE1BQVIsQ0FBZUYsUUFBZjtBQUNBTiwyQkFBTyxLQUFQO0FBQ0g7QUFQWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFiLGdCQUFHQSxJQUFILEVBQVE7QUFDSixxQkFBS1QsRUFBTCxDQUFRUyxJQUFSO0FBQ0g7QUFDSjs7O2lDQUNRRixDLEVBQUU7QUFDUCxnQkFBSWMsU0FBU3BCLEVBQUVNLEVBQUVjLE1BQUosRUFBWUMsUUFBWixDQUFxQixZQUFyQixJQUFxQ3JCLEVBQUVNLEVBQUVjLE1BQUosQ0FBckMsR0FBb0RwQixFQUFFTSxFQUFFYyxNQUFKLEVBQVlFLE9BQVosQ0FBb0IsYUFBcEIsRUFBbUNKLE1BQXBDLEdBQThDbEIsRUFBRU0sRUFBRWMsTUFBSixFQUFZRSxPQUFaLENBQW9CLGFBQXBCLENBQTlDLEdBQW1GLEtBQW5KO0FBQ0EsZ0JBQUlGLE1BQUosRUFBWTtBQUNSRyx1QkFBT0MsUUFBUCxHQUFrQkQsT0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsR0FBdkIsR0FBNkJMLE9BQU9ELElBQVAsQ0FBWSxXQUFaLEVBQXlCTyxPQUF6QixDQUFpQyxPQUFqQyxFQUEwQyxFQUExQyxDQUEvQztBQUNIO0FBQ0o7Ozs7OztrQkFFVzVCLFEiLCJmaWxlIjoicm9vbUxpc3QuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi4vLi4vRGF0YVN0cmVhbUhhbmRsZXJcIjtcclxuY2xhc3MgUm9vbUxpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmVsID0gJCgnLmxpc3QtdmlldycpO1xyXG4gICAgICAgIERhdGFTdHJlYW1IYW5kbGVyLnJlcXVlc3RSb29tc0xpc3QoKTtcclxuICAgICAgICB0aGlzLmVsLm9uKCdjbGljaycsIHRoaXMuam9pblJvb20pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZVJvb21zJywgKGUpPT4gdGhpcy51cGRhdGVSb29tTGlzdChlKSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVSb29tTGlzdChlKXtcclxuICAgICAgICBsZXQgaGlkZSA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgW25hbWUsIHJvb21dIG9mIGUuZGV0YWlsLnJvb21zLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSAkKCc8ZGl2PicsIHtjbGFzczogJ3Jvb20tLWxpc3QnfSkuYXBwZW5kKCc8c3Bhbj4nKS50ZXh0KG5hbWUgKyAnICcgKyByb29tLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxpc3RJdGVtLmF0dHIoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmVsLmFwcGVuZChsaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIGhpZGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaGlkZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGpvaW5Sb29tKGUpe1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KS5oYXNDbGFzcygncm9vbS0tbGlzdCcpID8gJChlLnRhcmdldCkgOiAoJChlLnRhcmdldCkucGFyZW50cygnLnJvb20tLWxpc3QnKS5sZW5ndGgpID8gJChlLnRhcmdldCkucGFyZW50cygnLnJvb20tLWxpc3QnKSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYgKyAnLycgKyB0YXJnZXQuYXR0cignZGF0YS1uYW1lJykucmVwbGFjZSgnZGF0YS0nLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCAgZGVmYXVsdCBSb29tTGlzdDtcclxuIl19

/***/ })
/******/ ]);