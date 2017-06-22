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

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _DrawCanvas = __webpack_require__(2);

	var _DrawCanvas2 = _interopRequireDefault(_DrawCanvas);

	var _HelpCanvas = __webpack_require__(8);

	var _HelpCanvas2 = _interopRequireDefault(_HelpCanvas);

	var _Chat = __webpack_require__(9);

	var _Chat2 = _interopRequireDefault(_Chat);

	var _Toolbar = __webpack_require__(13);

	var _Toolbar2 = _interopRequireDefault(_Toolbar);

	var _SettingMenu = __webpack_require__(20);

	var _SettingMenu2 = _interopRequireDefault(_SettingMenu);

	var _RoomName = __webpack_require__(26);

	var _RoomName2 = _interopRequireDefault(_RoomName);

	var _BackButton = __webpack_require__(27);

	var _BackButton2 = _interopRequireDefault(_BackButton);

	var _UsersInRoomList = __webpack_require__(29);

	var _UsersInRoomList2 = _interopRequireDefault(_UsersInRoomList);

	var _room = __webpack_require__(30);

	var _room2 = _interopRequireDefault(_room);

	var _RoomsPage = __webpack_require__(32);

	var _RoomsPage2 = _interopRequireDefault(_RoomsPage);

	var _Name = __webpack_require__(33);

	var _Name2 = _interopRequireDefault(_Name);

	var _NameButton = __webpack_require__(34);

	var _NameButton2 = _interopRequireDefault(_NameButton);

	var _NameInput = __webpack_require__(35);

	var _NameInput2 = _interopRequireDefault(_NameInput);

	var _RoomCreateButton = __webpack_require__(36);

	var _RoomCreateButton2 = _interopRequireDefault(_RoomCreateButton);

	var _RoomList = __webpack_require__(37);

	var _RoomList2 = _interopRequireDefault(_RoomList);

	var _NewRoomInput = __webpack_require__(38);

	var _NewRoomInput2 = _interopRequireDefault(_NewRoomInput);

	var _backbone = __webpack_require__(6);

	var _underscore = __webpack_require__(7);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Canvas = __webpack_require__(39);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _Room = __webpack_require__(40);

	var _Room2 = _interopRequireDefault(_Room);

	var _PageHandler = __webpack_require__(28);

	var _PageHandler2 = _interopRequireDefault(_PageHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	        var setGlobalVariables = function setGlobalVariables() {
	                window.App = {};
	                window.App.events = _underscore2.default.clone(_backbone.Events);
	                window.$ = _jquery2.default;
	        };
	        var init = function init() {
	                setGlobalVariables();

	                //reason for not nesting all objects into pages is easier access to models.
	                var roomPage = new _room2.default({ el: '#Room-page' });
	                var roomListPage = new _RoomsPage2.default({ el: '#List-page' });
	                var namePage = new _Name2.default({ el: '#Name-page' });

	                _PageHandler2.default.addPage(roomPage);
	                _PageHandler2.default.addPage(roomListPage);
	                _PageHandler2.default.addPage(namePage);

	                var canvasModel = new _Canvas2.default();
	                var canvas = new _DrawCanvas2.default({ el: '#canvas', model: canvasModel });
	                var helpCanvas = new _HelpCanvas2.default({ el: '#helpCanvas', model: canvasModel });
	                new _SettingMenu2.default({ el: '#settingMenu', model: canvasModel });
	                new _Toolbar2.default({ el: '#toolbar', model: canvasModel });

	                var room = new _Room2.default();
	                new _Chat2.default();

	                new _RoomName2.default({ el: '#roomName', model: room });
	                new _BackButton2.default({ el: "#back-to-list" });
	                new _UsersInRoomList2.default({ el: "#users", model: room });

	                new _RoomList2.default({ el: '#list-view' });
	                new _RoomCreateButton2.default({ el: "#createNew" });
	                new _NewRoomInput2.default({ el: '#newRoomName' });

	                new _NameButton2.default({ el: '#sendName' });
	                new _NameInput2.default({ el: '#username' });

	                _PageHandler2.default.goto(namePage.name);
	        };
	        window.addEventListener('load', init);
	})();
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJzZXRHbG9iYWxWYXJpYWJsZXMiLCJ3aW5kb3ciLCJBcHAiLCJldmVudHMiLCJjbG9uZSIsIiQiLCJpbml0Iiwicm9vbVBhZ2UiLCJlbCIsInJvb21MaXN0UGFnZSIsIm5hbWVQYWdlIiwiYWRkUGFnZSIsImNhbnZhc01vZGVsIiwiY2FudmFzIiwibW9kZWwiLCJoZWxwQ2FudmFzIiwicm9vbSIsImdvdG8iLCJuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLENBQUMsWUFBWTtBQUNULFlBQUlBLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBQVk7QUFDakNDLHVCQUFPQyxHQUFQLEdBQWEsRUFBYjtBQUNBRCx1QkFBT0MsR0FBUCxDQUFXQyxNQUFYLEdBQW9CLHFCQUFFQyxLQUFGLGtCQUFwQjtBQUNBSCx1QkFBT0ksQ0FBUDtBQUNILFNBSkQ7QUFLQSxZQUFJQyxPQUFPLFNBQVBBLElBQU8sR0FBWTtBQUNuQk47O0FBRUE7QUFDQSxvQkFBSU8sV0FBVyxtQkFBYSxFQUFDQyxJQUFJLFlBQUwsRUFBYixDQUFmO0FBQ0Esb0JBQUlDLGVBQWUsd0JBQWlCLEVBQUNELElBQUksWUFBTCxFQUFqQixDQUFuQjtBQUNBLG9CQUFJRSxXQUFXLG1CQUFhLEVBQUNGLElBQUksWUFBTCxFQUFiLENBQWY7O0FBRUEsc0NBQVlHLE9BQVosQ0FBb0JKLFFBQXBCO0FBQ0Esc0NBQVlJLE9BQVosQ0FBb0JGLFlBQXBCO0FBQ0Esc0NBQVlFLE9BQVosQ0FBb0JELFFBQXBCOztBQUVBLG9CQUFJRSxjQUFjLHNCQUFsQjtBQUNBLG9CQUFJQyxTQUFTLHlCQUFlLEVBQUNMLElBQUksU0FBTCxFQUFnQk0sT0FBT0YsV0FBdkIsRUFBZixDQUFiO0FBQ0Esb0JBQUlHLGFBQWEseUJBQWUsRUFBQ1AsSUFBSSxhQUFMLEVBQW9CTSxPQUFPRixXQUEzQixFQUFmLENBQWpCO0FBQ0EsMENBQWdCLEVBQUNKLElBQUksY0FBTCxFQUFxQk0sT0FBT0YsV0FBNUIsRUFBaEI7QUFDQSxzQ0FBWSxFQUFDSixJQUFJLFVBQUwsRUFBaUJNLE9BQU9GLFdBQXhCLEVBQVo7O0FBRUEsb0JBQUlJLE9BQU8sb0JBQVg7QUFDQTs7QUFFQSx1Q0FBYSxFQUFDUixJQUFJLFdBQUwsRUFBa0JNLE9BQU9FLElBQXpCLEVBQWI7QUFDQSx5Q0FBZSxFQUFDUixJQUFJLGVBQUwsRUFBZjtBQUNBLDhDQUFvQixFQUFDQSxJQUFJLFFBQUwsRUFBZU0sT0FBT0UsSUFBdEIsRUFBcEI7O0FBRUEsdUNBQWEsRUFBQ1IsSUFBSSxZQUFMLEVBQWI7QUFDQSwrQ0FBcUIsRUFBQ0EsSUFBSSxZQUFMLEVBQXJCO0FBQ0EsMkNBQWlCLEVBQUNBLElBQUksY0FBTCxFQUFqQjs7QUFFQSx5Q0FBZSxFQUFDQSxJQUFJLFdBQUwsRUFBZjtBQUNBLHdDQUFjLEVBQUNBLElBQUksV0FBTCxFQUFkOztBQUVBLHNDQUFZUyxJQUFaLENBQWlCUCxTQUFTUSxJQUExQjtBQUNILFNBakNEO0FBa0NBakIsZUFBT2tCLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDYixJQUFoQztBQUNILENBekNEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IERyYXdDYW52YXMgZnJvbSBcIi4vdmlld3MvY2FudmFzL0RyYXdDYW52YXNcIjtcclxuaW1wb3J0IEhlbHBDYW52YXMgZnJvbSBcIi4vdmlld3MvY2FudmFzL0hlbHBDYW52YXNcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4vdmlld3MvY2hhdC9DaGF0XCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL3ZpZXdzL2NhbnZhcy90b29scy9Ub29sYmFyXCI7XHJcbmltcG9ydCBTZXR0aW5nTWVudSBmcm9tIFwiLi92aWV3cy9jYW52YXMvc2V0dGluZ3MvU2V0dGluZ01lbnVcIjtcclxuaW1wb3J0IFJvb21OYW1lIGZyb20gXCIuL3ZpZXdzL3Jvb20vUm9vbU5hbWVcIjtcclxuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIi4vdmlld3Mvcm9vbS9CYWNrQnV0dG9uXCI7XHJcbmltcG9ydCBVc2Vyc0luUm9vbUxpc3QgZnJvbSBcIi4vdmlld3Mvcm9vbS9Vc2Vyc0luUm9vbUxpc3RcIjtcclxuaW1wb3J0IFJvb21QYWdlIGZyb20gXCIuL3ZpZXdzL3Jvb21cIjtcclxuaW1wb3J0IFJvb21MaXN0UGFnZSBmcm9tIFwiLi92aWV3cy9Sb29tc1BhZ2VcIjtcclxuaW1wb3J0IE5hbWVQYWdlIGZyb20gXCIuL3ZpZXdzL05hbWVcIjtcclxuXHJcbmltcG9ydCBOYW1lQnV0dG9uIGZyb20gXCIuL3ZpZXdzL05hbWVQYWdlL05hbWVCdXR0b25cIjtcclxuaW1wb3J0IE5hbWVJbnB1dCBmcm9tIFwiLi92aWV3cy9OYW1lUGFnZS9OYW1lSW5wdXRcIjtcclxuXHJcbmltcG9ydCBSb29tQ3JlYXRlQnV0dG9uIGZyb20gXCIuL3ZpZXdzL2xpc3RWaWV3L25ld1Jvb20vUm9vbUNyZWF0ZUJ1dHRvblwiO1xyXG5pbXBvcnQgUm9vbUxpc3QgZnJvbSBcIi4vdmlld3MvbGlzdFZpZXcvcm9vbXMvUm9vbUxpc3RcIjtcclxuaW1wb3J0IE5ld1Jvb21JbnB1dCBmcm9tIFwiLi92aWV3cy9saXN0Vmlldy9uZXdSb29tL05ld1Jvb21JbnB1dFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcImJhY2tib25lXCI7XHJcbmltcG9ydCBfIGZyb20gXCJ1bmRlcnNjb3JlXCI7XHJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vbW9kZWxzL0NhbnZhc1wiO1xyXG5pbXBvcnQgUm9vbSBmcm9tIFwiLi9tb2RlbHMvUm9vbVwiO1xyXG5pbXBvcnQgUGFnZUhhbmRsZXIgZnJvbSBcIi4vUGFnZUhhbmRsZXJcIjtcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2V0R2xvYmFsVmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvdy5BcHAgPSB7fTtcclxuICAgICAgICB3aW5kb3cuQXBwLmV2ZW50cyA9IF8uY2xvbmUoRXZlbnRzKTtcclxuICAgICAgICB3aW5kb3cuJCA9ICQ7XHJcbiAgICB9O1xyXG4gICAgbGV0IGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0R2xvYmFsVmFyaWFibGVzKCk7XHJcblxyXG4gICAgICAgIC8vcmVhc29uIGZvciBub3QgbmVzdGluZyBhbGwgb2JqZWN0cyBpbnRvIHBhZ2VzIGlzIGVhc2llciBhY2Nlc3MgdG8gbW9kZWxzLlxyXG4gICAgICAgIGxldCByb29tUGFnZSA9IG5ldyBSb29tUGFnZSh7ZWw6ICcjUm9vbS1wYWdlJ30pO1xyXG4gICAgICAgIGxldCByb29tTGlzdFBhZ2UgPSBuZXcgUm9vbUxpc3RQYWdlKHtlbDogJyNMaXN0LXBhZ2UnfSk7XHJcbiAgICAgICAgbGV0IG5hbWVQYWdlID0gbmV3IE5hbWVQYWdlKHtlbDogJyNOYW1lLXBhZ2UnfSk7XHJcblxyXG4gICAgICAgIFBhZ2VIYW5kbGVyLmFkZFBhZ2Uocm9vbVBhZ2UpO1xyXG4gICAgICAgIFBhZ2VIYW5kbGVyLmFkZFBhZ2Uocm9vbUxpc3RQYWdlKTtcclxuICAgICAgICBQYWdlSGFuZGxlci5hZGRQYWdlKG5hbWVQYWdlKTtcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhc01vZGVsID0gbmV3IENhbnZhcygpO1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBuZXcgRHJhd0NhbnZhcyh7ZWw6ICcjY2FudmFzJywgbW9kZWw6IGNhbnZhc01vZGVsfSk7XHJcbiAgICAgICAgbGV0IGhlbHBDYW52YXMgPSBuZXcgSGVscENhbnZhcyh7ZWw6ICcjaGVscENhbnZhcycsIG1vZGVsOiBjYW52YXNNb2RlbH0pO1xyXG4gICAgICAgIG5ldyBTZXR0aW5nTWVudSh7ZWw6ICcjc2V0dGluZ01lbnUnLCBtb2RlbDogY2FudmFzTW9kZWx9KTtcclxuICAgICAgICBuZXcgVG9vbGJhcih7ZWw6ICcjdG9vbGJhcicsIG1vZGVsOiBjYW52YXNNb2RlbH0pO1xyXG5cclxuICAgICAgICBsZXQgcm9vbSA9IG5ldyBSb29tKCk7XHJcbiAgICAgICAgbmV3IENoYXQoKTtcclxuXHJcbiAgICAgICAgbmV3IFJvb21OYW1lKHtlbDogJyNyb29tTmFtZScsIG1vZGVsOiByb29tfSk7XHJcbiAgICAgICAgbmV3IEJhY2tCdXR0b24oe2VsOiBcIiNiYWNrLXRvLWxpc3RcIn0pO1xyXG4gICAgICAgIG5ldyBVc2Vyc0luUm9vbUxpc3Qoe2VsOiBcIiN1c2Vyc1wiLCBtb2RlbDogcm9vbX0pO1xyXG5cclxuICAgICAgICBuZXcgUm9vbUxpc3Qoe2VsOiAnI2xpc3Qtdmlldyd9KTtcclxuICAgICAgICBuZXcgUm9vbUNyZWF0ZUJ1dHRvbih7ZWw6IFwiI2NyZWF0ZU5ld1wifSk7XHJcbiAgICAgICAgbmV3IE5ld1Jvb21JbnB1dCh7ZWw6ICcjbmV3Um9vbU5hbWUnfSk7XHJcblxyXG4gICAgICAgIG5ldyBOYW1lQnV0dG9uKHtlbDogJyNzZW5kTmFtZSd9KTtcclxuICAgICAgICBuZXcgTmFtZUlucHV0KHtlbDogJyN1c2VybmFtZSd9KTtcclxuXHJcbiAgICAgICAgUGFnZUhhbmRsZXIuZ290byhuYW1lUGFnZS5uYW1lKTtcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQpO1xyXG59KSgpO1xyXG5cclxuXHJcbiJdfQ==

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.2.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2017-03-20T18:59Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.2.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && Array.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	};
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
	        if ( nodeName( elem, "iframe" ) ) {
	            return elem.contentDocument;
	        }

	        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
	        // Treat the template element as a regular one in browsers that
	        // don't support it.
	        if ( nodeName( elem, "template" ) ) {
	            elem = elem.content || elem;
	        }

	        return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( ">tbody", elem )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName( name ) {
		var ret = jQuery.cssProps[ name ];
		if ( !ret ) {
			ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
		}
		return ret;
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with computed style
		var valueIsBorderBox,
			styles = getStyles( elem ),
			val = curCSS( elem, name, styles ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Fall back to offsetWidth/Height when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		if ( val === "auto" ) {
			val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
		}

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var doc, docElem, rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			doc = elem.ownerDocument;
			docElem = doc.documentElement;
			win = doc.defaultView;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( jQuery.isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _DataStreamHandler = __webpack_require__(3);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	var _CanvasLayer = __webpack_require__(4);

	var _CanvasLayer2 = _interopRequireDefault(_CanvasLayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DrawCanvas = _CanvasLayer2.default.extend({
	    events: {
	        "mousedown": "canvasMouseDownHandler",
	        "mouseup": "canvasMouseUpHandler",
	        "mousemove": "canvasMouseMoveHandler",
	        "contextmenu": "canvasContextMenu"
	    },
	    initialize: function initialize() {
	        var _this = this;

	        _CanvasLayer2.default.prototype.initialize.apply(this, arguments);
	        App.events.on('updatePixels', function (e) {
	            return _this.updatePixels(e);
	        });
	        App.events.on('toolUpdatePixels', function (e) {
	            return _this.toolUpdatePixels(e);
	        });
	        this.$el.bind('mousewheel DOMMouseScroll', function (e) {
	            return _this.canvasMouseScrollHandler(e);
	        });
	    },
	    updatePixels: function updatePixels(pixels) {
	        for (var i = 0; i < pixels.length; i++) {
	            var newPixels = this.model.get("pixels");
	            newPixels[pixels[i].x][pixels[i].y] = pixels[i].color;
	            this.model.set("pixels", newPixels);
	            if (pixels[i].color == 0) {
	                this.clearPixel(pixels[i].x, pixels[i].y);
	            } else {
	                this.fillPixel(pixels[i].x, pixels[i].y, pixels[i].color);
	            }
	        }
	    },
	    toolUpdatePixels: function toolUpdatePixels(pixels) {
	        this.updatePixels(pixels);
	        _DataStreamHandler2.default.sendPixels(pixels);
	    },

	    canvasRedraw: function canvasRedraw() {
	        this.clearCanvas();
	        var pixels = this.model.get("pixels");
	        for (var i = 0; i < this.model.get("width"); i++) {
	            for (var j = 0; j < this.model.get("height"); j++) {
	                if (pixels[i][j] != 0) {
	                    this.fillPixel(i, j, pixels[i][j]);
	                }
	            }
	        }
	    },
	    fillPixel: function fillPixel(x, y, color) {
	        var c = this.el;
	        var ctx = c.getContext("2d");
	        var scale = this.model.get("scale");
	        var position = this.model.get("position");

	        ctx.beginPath();
	        ctx.fillStyle = color;
	        ctx.fillRect(position.x + x * scale, position.y + y * scale, scale, scale);
	        ctx.closePath();
	    },
	    clearPixel: function clearPixel(x, y) {
	        var c = this.el;
	        var ctx = c.getContext("2d");
	        var scale = this.model.get("scale");
	        var position = this.model.get("position");
	        ctx.beginPath();
	        ctx.clearRect(position.x + x * this.model.get("scale"), position.y + y * scale, scale, scale);
	        ctx.closePath();
	    },
	    canvasMouseMoveHandler: function canvasMouseMoveHandler(e) {
	        if (this.model.get("draggingSecondary")) {
	            this.model.reposition(e.offsetX - this.model.get("lastMousePos").x, e.offsetY - this.model.get("lastMousePos").y);
	            App.events.trigger("canvasRedraw");
	        } else if (this.model.get("dragging")) {
	            this.model.get("selectedTool").dragHandler(e);
	        } else {
	            this.model.get("selectedTool").mouseMoveHandler(e);
	        }
	        this.model.set("lastMousePos", { x: e.offsetX, y: e.offsetY });
	    },
	    canvasMouseDownHandler: function canvasMouseDownHandler(e) {
	        this.model.set('draggingSecondary', false);
	        this.model.set('dragging', false);
	        if (e.button == 2) {
	            this.model.set('draggingSecondary', true);
	            return;
	        }
	        this.model.set('dragging', true);
	        this.model.get("selectedTool").mouseDownHandler(e);
	    },


	    canvasMouseUpHandler: function canvasMouseUpHandler(e) {
	        this.model.set('dragging', false);
	        this.model.set('draggingSecondary', false);
	        if (e.button == 2) {
	            return;
	        }
	        this.model.get("selectedTool").mouseUpHandler(e);
	    },

	    canvasMouseScrollHandler: function canvasMouseScrollHandler(event) {
	        var scale = this.model.get("scale");
	        var width = this.model.get("width");
	        var height = this.model.get("height");
	        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
	            if (scale <= 20) {
	                var newScale = scale + 1;
	                this.model.set("scale", newScale);
	                this.model.reposition((width * (scale - 1) - width * scale) / 2, (height * (scale - 1) - height * scale) / 2);
	            }
	        } else {
	            if (scale > 2) {
	                var _newScale = scale - 1;
	                this.model.set("scale", _newScale);
	                this.model.reposition((width * (scale + 1) - width * scale) / 2, (height * (scale + 1) - height * scale) / 2);
	            }
	        }
	        App.events.trigger("canvasRedraw");
	    },
	    canvasContextMenu: function canvasContextMenu() {
	        // delete before handin!!
	        var pixels = this.model.get("pixels");
	        var newFormat = [];
	        for (var i = 0; i < this.model.get("width"); i++) {
	            for (var j = 0; j < this.model.get("height"); j++) {
	                newFormat[i + j * this.model.get("width")] = pixels[i][j] ? 1 : 0;
	            }
	        }
	        console.log("PROGMEM const byte name[] = " + JSON.stringify(newFormat).replace(/],\[/g, ',').replace('[', '{').replace(']', '}') + ";");
	        return false;
	    }
	});

	exports.default = DrawCanvas;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcRHJhd0NhbnZhcy5qcyJdLCJuYW1lcyI6WyJEcmF3Q2FudmFzIiwiZXh0ZW5kIiwiZXZlbnRzIiwiaW5pdGlhbGl6ZSIsInByb3RvdHlwZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiQXBwIiwib24iLCJlIiwidXBkYXRlUGl4ZWxzIiwidG9vbFVwZGF0ZVBpeGVscyIsIiRlbCIsImJpbmQiLCJjYW52YXNNb3VzZVNjcm9sbEhhbmRsZXIiLCJwaXhlbHMiLCJpIiwibGVuZ3RoIiwibmV3UGl4ZWxzIiwibW9kZWwiLCJnZXQiLCJ4IiwieSIsImNvbG9yIiwic2V0IiwiY2xlYXJQaXhlbCIsImZpbGxQaXhlbCIsInNlbmRQaXhlbHMiLCJjYW52YXNSZWRyYXciLCJjbGVhckNhbnZhcyIsImoiLCJjIiwiZWwiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2NhbGUiLCJwb3NpdGlvbiIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2xvc2VQYXRoIiwiY2xlYXJSZWN0IiwiY2FudmFzTW91c2VNb3ZlSGFuZGxlciIsInJlcG9zaXRpb24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRyaWdnZXIiLCJkcmFnSGFuZGxlciIsIm1vdXNlTW92ZUhhbmRsZXIiLCJjYW52YXNNb3VzZURvd25IYW5kbGVyIiwiYnV0dG9uIiwibW91c2VEb3duSGFuZGxlciIsImNhbnZhc01vdXNlVXBIYW5kbGVyIiwibW91c2VVcEhhbmRsZXIiLCJldmVudCIsIndpZHRoIiwiaGVpZ2h0Iiwib3JpZ2luYWxFdmVudCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJuZXdTY2FsZSIsImNhbnZhc0NvbnRleHRNZW51IiwibmV3Rm9ybWF0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFDQSxJQUFNQSxhQUFhLHNCQUFZQyxNQUFaLENBQW1CO0FBQ2xDQyxZQUFRO0FBQ0oscUJBQWEsd0JBRFQ7QUFFSixtQkFBVyxzQkFGUDtBQUdKLHFCQUFhLHdCQUhUO0FBSUosdUJBQWU7QUFKWCxLQUQwQjtBQU9sQ0MsZ0JBQVksc0JBQVk7QUFBQTs7QUFDcEIsOEJBQVlDLFNBQVosQ0FBc0JELFVBQXRCLENBQWlDRSxLQUFqQyxDQUF1QyxJQUF2QyxFQUE2Q0MsU0FBN0M7QUFDQUMsWUFBSUwsTUFBSixDQUFXTSxFQUFYLENBQWMsY0FBZCxFQUE4QixVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0MsWUFBTCxDQUFrQkQsQ0FBbEIsQ0FBUDtBQUFBLFNBQTlCO0FBQ0FGLFlBQUlMLE1BQUosQ0FBV00sRUFBWCxDQUFjLGtCQUFkLEVBQWtDLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLRSxnQkFBTCxDQUFzQkYsQ0FBdEIsQ0FBUDtBQUFBLFNBQWxDO0FBQ0EsYUFBS0csR0FBTCxDQUFTQyxJQUFULENBQWMsMkJBQWQsRUFBMkMsVUFBQ0osQ0FBRDtBQUFBLG1CQUFPLE1BQUtLLHdCQUFMLENBQThCTCxDQUE5QixDQUFQO0FBQUEsU0FBM0M7QUFDSCxLQVppQztBQWFsQ0Msa0JBQWMsc0JBQVVLLE1BQVYsRUFBa0I7QUFDNUIsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELE9BQU9FLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUNwQyxnQkFBSUUsWUFBWSxLQUFLQyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxRQUFmLENBQWhCO0FBQ0FGLHNCQUFVSCxPQUFPQyxDQUFQLEVBQVVLLENBQXBCLEVBQXVCTixPQUFPQyxDQUFQLEVBQVVNLENBQWpDLElBQXNDUCxPQUFPQyxDQUFQLEVBQVVPLEtBQWhEO0FBQ0EsaUJBQUtKLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLFFBQWYsRUFBeUJOLFNBQXpCO0FBQ0EsZ0JBQUlILE9BQU9DLENBQVAsRUFBVU8sS0FBVixJQUFtQixDQUF2QixFQUEwQjtBQUN0QixxQkFBS0UsVUFBTCxDQUFnQlYsT0FBT0MsQ0FBUCxFQUFVSyxDQUExQixFQUE2Qk4sT0FBT0MsQ0FBUCxFQUFVTSxDQUF2QztBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLSSxTQUFMLENBQWVYLE9BQU9DLENBQVAsRUFBVUssQ0FBekIsRUFBNEJOLE9BQU9DLENBQVAsRUFBVU0sQ0FBdEMsRUFBeUNQLE9BQU9DLENBQVAsRUFBVU8sS0FBbkQ7QUFDSDtBQUNKO0FBQ0osS0F4QmlDO0FBeUJsQ1osc0JBQWtCLDBCQUFVSSxNQUFWLEVBQWtCO0FBQ2hDLGFBQUtMLFlBQUwsQ0FBa0JLLE1BQWxCO0FBQ0Esb0NBQWtCWSxVQUFsQixDQUE2QlosTUFBN0I7QUFDSCxLQTVCaUM7O0FBOEJsQ2Esa0JBQWMsd0JBQVk7QUFDdEIsYUFBS0MsV0FBTDtBQUNBLFlBQUlkLFNBQVMsS0FBS0ksS0FBTCxDQUFXQyxHQUFYLENBQWUsUUFBZixDQUFiO0FBQ0EsYUFBSyxJQUFJSixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS0csS0FBTCxDQUFXQyxHQUFYLENBQWUsT0FBZixDQUFwQixFQUE2Q0osR0FBN0MsRUFBa0Q7QUFDOUMsaUJBQUssSUFBSWMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtYLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFFBQWYsQ0FBcEIsRUFBOENVLEdBQTlDLEVBQW1EO0FBQy9DLG9CQUFJZixPQUFPQyxDQUFQLEVBQVVjLENBQVYsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkIseUJBQUtKLFNBQUwsQ0FBZVYsQ0FBZixFQUFrQmMsQ0FBbEIsRUFBcUJmLE9BQU9DLENBQVAsRUFBVWMsQ0FBVixDQUFyQjtBQUNIO0FBRUo7QUFDSjtBQUNKLEtBekNpQztBQTBDbENKLGVBQVcsbUJBQVVMLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsS0FBaEIsRUFBdUI7QUFDOUIsWUFBSVEsSUFBSSxLQUFLQyxFQUFiO0FBQ0EsWUFBSUMsTUFBTUYsRUFBRUcsVUFBRixDQUFhLElBQWIsQ0FBVjtBQUNBLFlBQUlDLFFBQVEsS0FBS2hCLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLFlBQUlnQixXQUFXLEtBQUtqQixLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFmLENBQWY7O0FBRUFhLFlBQUlJLFNBQUo7QUFDQUosWUFBSUssU0FBSixHQUFnQmYsS0FBaEI7QUFDQVUsWUFBSU0sUUFBSixDQUFhSCxTQUFTZixDQUFULEdBQWFBLElBQUljLEtBQTlCLEVBQXFDQyxTQUFTZCxDQUFULEdBQWFBLElBQUlhLEtBQXRELEVBQTZEQSxLQUE3RCxFQUFvRUEsS0FBcEU7QUFDQUYsWUFBSU8sU0FBSjtBQUNILEtBcERpQztBQXFEbENmLGdCQUFZLG9CQUFVSixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDeEIsWUFBSVMsSUFBSSxLQUFLQyxFQUFiO0FBQ0EsWUFBSUMsTUFBTUYsRUFBRUcsVUFBRixDQUFhLElBQWIsQ0FBVjtBQUNBLFlBQUlDLFFBQVEsS0FBS2hCLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLFlBQUlnQixXQUFXLEtBQUtqQixLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFmLENBQWY7QUFDQWEsWUFBSUksU0FBSjtBQUNBSixZQUFJUSxTQUFKLENBQWNMLFNBQVNmLENBQVQsR0FBYUEsSUFBSSxLQUFLRixLQUFMLENBQVdDLEdBQVgsQ0FBZSxPQUFmLENBQS9CLEVBQXdEZ0IsU0FBU2QsQ0FBVCxHQUFhQSxJQUFJYSxLQUF6RSxFQUFnRkEsS0FBaEYsRUFBdUZBLEtBQXZGO0FBQ0FGLFlBQUlPLFNBQUo7QUFDSCxLQTdEaUM7QUE4RGxDRSw0QkFBd0IsZ0NBQVVqQyxDQUFWLEVBQWE7QUFDakMsWUFBRyxLQUFLVSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxtQkFBZixDQUFILEVBQXVDO0FBQ25DLGlCQUFLRCxLQUFMLENBQVd3QixVQUFYLENBQXNCbEMsRUFBRW1DLE9BQUYsR0FBWSxLQUFLekIsS0FBTCxDQUFXQyxHQUFYLENBQWUsY0FBZixFQUErQkMsQ0FBakUsRUFBb0VaLEVBQUVvQyxPQUFGLEdBQVksS0FBSzFCLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLGNBQWYsRUFBK0JFLENBQS9HO0FBQ0FmLGdCQUFJTCxNQUFKLENBQVc0QyxPQUFYLENBQW1CLGNBQW5CO0FBQ0gsU0FIRCxNQUdNLElBQUcsS0FBSzNCLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFVBQWYsQ0FBSCxFQUE4QjtBQUNoQyxpQkFBS0QsS0FBTCxDQUFXQyxHQUFYLENBQWUsY0FBZixFQUErQjJCLFdBQS9CLENBQTJDdEMsQ0FBM0M7QUFDSCxTQUZLLE1BRUQ7QUFDRCxpQkFBS1UsS0FBTCxDQUFXQyxHQUFYLENBQWUsY0FBZixFQUErQjRCLGdCQUEvQixDQUFnRHZDLENBQWhEO0FBQ0g7QUFDRCxhQUFLVSxLQUFMLENBQVdLLEdBQVgsQ0FBZSxjQUFmLEVBQStCLEVBQUNILEdBQUdaLEVBQUVtQyxPQUFOLEVBQWV0QixHQUFHYixFQUFFb0MsT0FBcEIsRUFBL0I7QUFDSCxLQXhFaUM7QUF5RWxDSSwwQkF6RWtDLGtDQXlFWHhDLENBekVXLEVBeUVSO0FBQ3RCLGFBQUtVLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLG1CQUFmLEVBQW9DLEtBQXBDO0FBQ0EsYUFBS0wsS0FBTCxDQUFXSyxHQUFYLENBQWUsVUFBZixFQUEyQixLQUEzQjtBQUNBLFlBQUlmLEVBQUV5QyxNQUFGLElBQVksQ0FBaEIsRUFBbUI7QUFDZixpQkFBSy9CLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLG1CQUFmLEVBQW9DLElBQXBDO0FBQ0E7QUFDSDtBQUNELGFBQUtMLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLFVBQWYsRUFBMkIsSUFBM0I7QUFDQSxhQUFLTCxLQUFMLENBQVdDLEdBQVgsQ0FBZSxjQUFmLEVBQStCK0IsZ0JBQS9CLENBQWdEMUMsQ0FBaEQ7QUFDSCxLQWxGaUM7OztBQW9GbEMyQywwQkFBc0IsOEJBQVUzQyxDQUFWLEVBQWE7QUFDL0IsYUFBS1UsS0FBTCxDQUFXSyxHQUFYLENBQWUsVUFBZixFQUEyQixLQUEzQjtBQUNBLGFBQUtMLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLG1CQUFmLEVBQW9DLEtBQXBDO0FBQ0EsWUFBSWYsRUFBRXlDLE1BQUYsSUFBWSxDQUFoQixFQUFtQjtBQUNmO0FBQ0g7QUFDRCxhQUFLL0IsS0FBTCxDQUFXQyxHQUFYLENBQWUsY0FBZixFQUErQmlDLGNBQS9CLENBQThDNUMsQ0FBOUM7QUFDSCxLQTNGaUM7O0FBNkZsQ0ssOEJBQTBCLGtDQUFVd0MsS0FBVixFQUFpQjtBQUN2QyxZQUFJbkIsUUFBUSxLQUFLaEIsS0FBTCxDQUFXQyxHQUFYLENBQWUsT0FBZixDQUFaO0FBQ0EsWUFBSW1DLFFBQVEsS0FBS3BDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLFlBQUlvQyxTQUFTLEtBQUtyQyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxRQUFmLENBQWI7QUFDQSxZQUFJa0MsTUFBTUcsYUFBTixDQUFvQkMsVUFBcEIsR0FBaUMsQ0FBakMsSUFBc0NKLE1BQU1HLGFBQU4sQ0FBb0JFLE1BQXBCLEdBQTZCLENBQXZFLEVBQTBFO0FBQ3RFLGdCQUFJeEIsU0FBUyxFQUFiLEVBQWlCO0FBQ2Isb0JBQUl5QixXQUFXekIsUUFBUSxDQUF2QjtBQUNBLHFCQUFLaEIsS0FBTCxDQUFXSyxHQUFYLENBQWUsT0FBZixFQUF3Qm9DLFFBQXhCO0FBQ0EscUJBQUt6QyxLQUFMLENBQVd3QixVQUFYLENBQXNCLENBQUVZLFNBQVNwQixRQUFPLENBQWhCLElBQXFCb0IsUUFBUXBCLEtBQS9CLElBQXdDLENBQTlELEVBQWdFLENBQUVxQixVQUFVckIsUUFBUSxDQUFsQixJQUF1QnFCLFNBQVNyQixLQUFsQyxJQUEyQyxDQUEzRztBQUNIO0FBQ0osU0FORCxNQU1PO0FBQ0gsZ0JBQUlBLFFBQVEsQ0FBWixFQUFlO0FBQ1gsb0JBQUl5QixZQUFXekIsUUFBUSxDQUF2QjtBQUNBLHFCQUFLaEIsS0FBTCxDQUFXSyxHQUFYLENBQWUsT0FBZixFQUF3Qm9DLFNBQXhCO0FBQ0EscUJBQUt6QyxLQUFMLENBQVd3QixVQUFYLENBQXNCLENBQUNZLFNBQVNwQixRQUFRLENBQWpCLElBQXNCb0IsUUFBUXBCLEtBQS9CLElBQXdDLENBQTlELEVBQWdFLENBQUVxQixVQUFVckIsUUFBUSxDQUFsQixJQUF1QnFCLFNBQVNyQixLQUFsQyxJQUEwQyxDQUExRztBQUNIO0FBQ0o7QUFDRDVCLFlBQUlMLE1BQUosQ0FBVzRDLE9BQVgsQ0FBbUIsY0FBbkI7QUFDSCxLQS9HaUM7QUFnSGxDZSx1QkFBbUIsNkJBQVk7QUFDM0I7QUFDQSxZQUFJOUMsU0FBUyxLQUFLSSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxRQUFmLENBQWI7QUFDQSxZQUFJMEMsWUFBWSxFQUFoQjtBQUNBLGFBQUssSUFBSTlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLRyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxPQUFmLENBQXBCLEVBQTZDSixHQUE3QyxFQUFrRDtBQUM5QyxpQkFBSyxJQUFJYyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS1gsS0FBTCxDQUFXQyxHQUFYLENBQWUsUUFBZixDQUFwQixFQUE4Q1UsR0FBOUMsRUFBbUQ7QUFDL0NnQywwQkFBVTlDLElBQUljLElBQUksS0FBS1gsS0FBTCxDQUFXQyxHQUFYLENBQWUsT0FBZixDQUFsQixJQUE2Q0wsT0FBT0MsQ0FBUCxFQUFVYyxDQUFWLElBQWUsQ0FBZixHQUFtQixDQUFoRTtBQUNIO0FBQ0o7QUFDRGlDLGdCQUFRQyxHQUFSLENBQVksaUNBQWlDQyxLQUFLQyxTQUFMLENBQWVKLFNBQWYsRUFBMEJLLE9BQTFCLENBQWtDLE9BQWxDLEVBQTJDLEdBQTNDLEVBQWdEQSxPQUFoRCxDQUF3RCxHQUF4RCxFQUE2RCxHQUE3RCxFQUFrRUEsT0FBbEUsQ0FBMEUsR0FBMUUsRUFBK0UsR0FBL0UsQ0FBakMsR0FBdUgsR0FBbkk7QUFDQSxlQUFPLEtBQVA7QUFDSDtBQTNIaUMsQ0FBbkIsQ0FBbkI7O2tCQThIZW5FLFUiLCJmaWxlIjoiRHJhd0NhbnZhcy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFTdHJlYW1IYW5kbGVyIGZyb20gXCIuLi8uLi9EYXRhU3RyZWFtSGFuZGxlclwiO1xyXG5pbXBvcnQgQ2FudmFzTGF5ZXIgZnJvbSBcIi4vQ2FudmFzTGF5ZXJcIjtcclxuY29uc3QgRHJhd0NhbnZhcyA9IENhbnZhc0xheWVyLmV4dGVuZCh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICBcIm1vdXNlZG93blwiOiBcImNhbnZhc01vdXNlRG93bkhhbmRsZXJcIixcclxuICAgICAgICBcIm1vdXNldXBcIjogXCJjYW52YXNNb3VzZVVwSGFuZGxlclwiLFxyXG4gICAgICAgIFwibW91c2Vtb3ZlXCI6IFwiY2FudmFzTW91c2VNb3ZlSGFuZGxlclwiLFxyXG4gICAgICAgIFwiY29udGV4dG1lbnVcIjogXCJjYW52YXNDb250ZXh0TWVudVwiXHJcbiAgICB9LFxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIENhbnZhc0xheWVyLnByb3RvdHlwZS5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbigndXBkYXRlUGl4ZWxzJywgKGUpID0+IHRoaXMudXBkYXRlUGl4ZWxzKGUpKTtcclxuICAgICAgICBBcHAuZXZlbnRzLm9uKCd0b29sVXBkYXRlUGl4ZWxzJywgKGUpID0+IHRoaXMudG9vbFVwZGF0ZVBpeGVscyhlKSk7XHJcbiAgICAgICAgdGhpcy4kZWwuYmluZCgnbW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCcsIChlKSA9PiB0aGlzLmNhbnZhc01vdXNlU2Nyb2xsSGFuZGxlcihlKSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlUGl4ZWxzOiBmdW5jdGlvbiAocGl4ZWxzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaXhlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5ld1BpeGVscyA9IHRoaXMubW9kZWwuZ2V0KFwicGl4ZWxzXCIpO1xyXG4gICAgICAgICAgICBuZXdQaXhlbHNbcGl4ZWxzW2ldLnhdW3BpeGVsc1tpXS55XSA9IHBpeGVsc1tpXS5jb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoXCJwaXhlbHNcIiwgbmV3UGl4ZWxzKTtcclxuICAgICAgICAgICAgaWYgKHBpeGVsc1tpXS5jb2xvciA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyUGl4ZWwocGl4ZWxzW2ldLngsIHBpeGVsc1tpXS55KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFBpeGVsKHBpeGVsc1tpXS54LCBwaXhlbHNbaV0ueSwgcGl4ZWxzW2ldLmNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b29sVXBkYXRlUGl4ZWxzOiBmdW5jdGlvbiAocGl4ZWxzKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQaXhlbHMocGl4ZWxzKTtcclxuICAgICAgICBEYXRhU3RyZWFtSGFuZGxlci5zZW5kUGl4ZWxzKHBpeGVscyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNhbnZhc1JlZHJhdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcclxuICAgICAgICBsZXQgcGl4ZWxzID0gdGhpcy5tb2RlbC5nZXQoXCJwaXhlbHNcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVsLmdldChcIndpZHRoXCIpOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1vZGVsLmdldChcImhlaWdodFwiKTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGl4ZWxzW2ldW2pdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxQaXhlbChpLCBqLCBwaXhlbHNbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmaWxsUGl4ZWw6IGZ1bmN0aW9uICh4LCB5LCBjb2xvcikge1xyXG4gICAgICAgIGxldCBjID0gdGhpcy5lbDtcclxuICAgICAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5tb2RlbC5nZXQoXCJzY2FsZVwiKTtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm1vZGVsLmdldChcInBvc2l0aW9uXCIpO1xyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdChwb3NpdGlvbi54ICsgeCAqIHNjYWxlLCBwb3NpdGlvbi55ICsgeSAqIHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH0sXHJcbiAgICBjbGVhclBpeGVsOiBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIGxldCBjID0gdGhpcy5lbDtcclxuICAgICAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5tb2RlbC5nZXQoXCJzY2FsZVwiKTtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm1vZGVsLmdldChcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KHBvc2l0aW9uLnggKyB4ICogdGhpcy5tb2RlbC5nZXQoXCJzY2FsZVwiKSwgcG9zaXRpb24ueSArIHkgKiBzY2FsZSwgc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9LFxyXG4gICAgY2FudmFzTW91c2VNb3ZlSGFuZGxlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZih0aGlzLm1vZGVsLmdldChcImRyYWdnaW5nU2Vjb25kYXJ5XCIpKXtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5yZXBvc2l0aW9uKGUub2Zmc2V0WCAtIHRoaXMubW9kZWwuZ2V0KFwibGFzdE1vdXNlUG9zXCIpLngsIGUub2Zmc2V0WSAtIHRoaXMubW9kZWwuZ2V0KFwibGFzdE1vdXNlUG9zXCIpLnkpO1xyXG4gICAgICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJjYW52YXNSZWRyYXdcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5tb2RlbC5nZXQoXCJkcmFnZ2luZ1wiKSl7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZ2V0KFwic2VsZWN0ZWRUb29sXCIpLmRyYWdIYW5kbGVyKGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmdldChcInNlbGVjdGVkVG9vbFwiKS5tb3VzZU1vdmVIYW5kbGVyKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLnNldChcImxhc3RNb3VzZVBvc1wiLCB7eDogZS5vZmZzZXRYLCB5OiBlLm9mZnNldFl9KTtcclxuICAgIH0sXHJcbiAgICBjYW52YXNNb3VzZURvd25IYW5kbGVyKGUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLnNldCgnZHJhZ2dpbmdTZWNvbmRhcnknLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ2RyYWdnaW5nJywgZmFsc2UpO1xyXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KCdkcmFnZ2luZ1NlY29uZGFyeScsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdkcmFnZ2luZycsIHRydWUpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuZ2V0KFwic2VsZWN0ZWRUb29sXCIpLm1vdXNlRG93bkhhbmRsZXIoZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNhbnZhc01vdXNlVXBIYW5kbGVyOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdkcmFnZ2luZycsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnNldCgnZHJhZ2dpbmdTZWNvbmRhcnknLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vZGVsLmdldChcInNlbGVjdGVkVG9vbFwiKS5tb3VzZVVwSGFuZGxlcihlKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FudmFzTW91c2VTY3JvbGxIYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLm1vZGVsLmdldChcInNjYWxlXCIpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMubW9kZWwuZ2V0KFwid2lkdGhcIik7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMubW9kZWwuZ2V0KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEgPiAwIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQuZGV0YWlsIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAoc2NhbGUgPD0gMjApIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdTY2FsZSA9IHNjYWxlICsgMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KFwic2NhbGVcIiwgbmV3U2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5yZXBvc2l0aW9uKCggd2lkdGggKiAoc2NhbGUtIDEpIC0gd2lkdGggKiBzY2FsZSkgLyAyLCggaGVpZ2h0ICogKHNjYWxlIC0gMSkgLSBoZWlnaHQgKiBzY2FsZSkgLyAyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzY2FsZSA+IDIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdTY2FsZSA9IHNjYWxlIC0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KFwic2NhbGVcIiwgbmV3U2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5yZXBvc2l0aW9uKCh3aWR0aCAqIChzY2FsZSArIDEpIC0gd2lkdGggKiBzY2FsZSkgLyAyLCggaGVpZ2h0ICogKHNjYWxlICsgMSkgLSBoZWlnaHQgKiBzY2FsZSkvIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcImNhbnZhc1JlZHJhd1wiKTtcclxuICAgIH0sXHJcbiAgICBjYW52YXNDb250ZXh0TWVudTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGRlbGV0ZSBiZWZvcmUgaGFuZGluISFcclxuICAgICAgICBsZXQgcGl4ZWxzID0gdGhpcy5tb2RlbC5nZXQoXCJwaXhlbHNcIik7XHJcbiAgICAgICAgbGV0IG5ld0Zvcm1hdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RlbC5nZXQoXCJ3aWR0aFwiKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tb2RlbC5nZXQoXCJoZWlnaHRcIik7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbmV3Rm9ybWF0W2kgKyBqICogdGhpcy5tb2RlbC5nZXQoXCJ3aWR0aFwiKV0gPSBwaXhlbHNbaV1bal0gPyAxIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBST0dNRU0gY29uc3QgYnl0ZSBuYW1lW10gPSBcIiArIEpTT04uc3RyaW5naWZ5KG5ld0Zvcm1hdCkucmVwbGFjZSgvXSxcXFsvZywgJywnKS5yZXBsYWNlKCdbJywgJ3snKS5yZXBsYWNlKCddJywgJ30nKSArIFwiO1wiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd0NhbnZhcztcclxuIl19

/***/ }),
/* 3 */
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

	        this.socket = io();
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
	        this.socket.addEventListener('roomDetails', function (e) {
	            return _this.handleRoomDetail(e);
	        });
	        this.socket.addEventListener('sendAllDataForNewUser', function (e) {
	            return _this.userRequestedToSendAllData(e);
	        });
	        this.socket.addEventListener('pullDimensions', function (e) {
	            return _this.handleNewDimensions(e);
	        });
	        this.socket.addEventListener('pullCanvasData', function (e) {
	            return _this.handleInitData(e);
	        });
	    }

	    _createClass(DataStreamHandler, [{
	        key: 'joinRoom',
	        value: function joinRoom(room) {
	            this.socket.emit('join', room);
	        }
	    }, {
	        key: 'leaveRoom',
	        value: function leaveRoom() {
	            this.socket.emit('leave');
	        }
	    }, {
	        key: 'sendName',
	        value: function sendName(name) {
	            this.socket.emit('setName', name);
	        }
	    }, {
	        key: 'sendMessage',
	        value: function sendMessage(message) {
	            this.socket.emit('message', message);
	        }
	    }, {
	        key: 'sendPixels',
	        value: function sendPixels(newPixels) {
	            this.socket.emit('pushPixelsToServer', { pixels: newPixels });
	        }
	    }, {
	        key: 'sendCanvasData',
	        value: function sendCanvasData(canvasData, user) {
	            this.socket.emit('pushCanvasDataToUser', { canvasData: canvasData, user: user });
	        }
	    }, {
	        key: 'sendDimensions',
	        value: function sendDimensions(e) {
	            this.socket.emit('pushDimensions', e);
	        }
	    }, {
	        key: 'handleMessage',
	        value: function handleMessage(e, type) {
	            App.events.trigger("receivedMessage", { message: e['message'], user: e['user'], type: type });
	        }
	    }, {
	        key: 'handleServerPixels',
	        value: function handleServerPixels(e) {
	            App.events.trigger("updatePixels", e);
	        }
	    }, {
	        key: 'userRequestedToSendAllData',
	        value: function userRequestedToSendAllData(e) {
	            App.events.trigger("sendAllDataToUser", e);
	        }
	    }, {
	        key: 'handleRoomsList',
	        value: function handleRoomsList(e) {
	            App.events.trigger("updateRooms", e);
	        }
	    }, {
	        key: 'handleRoomDetail',
	        value: function handleRoomDetail(e) {
	            App.events.trigger("updateCurrentRoom", e);
	        }
	    }, {
	        key: 'handleNewDimensions',
	        value: function handleNewDimensions(e) {
	            App.events.trigger("changeDimensions", e);
	        }
	    }, {
	        key: 'handleInitData',
	        value: function handleInitData(e) {
	            App.events.trigger("initializeRoomCanvas", e);
	        }
	    }]);

	    return DataStreamHandler;
	}();

	exports.default = new DataStreamHandler();
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcRGF0YVN0cmVhbUhhbmRsZXIuanMiXSwibmFtZXMiOlsiRGF0YVN0cmVhbUhhbmRsZXIiLCJzb2NrZXQiLCJpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaGFuZGxlU2VydmVyUGl4ZWxzIiwiaGFuZGxlTWVzc2FnZSIsImhhbmRsZVJvb21zTGlzdCIsImhhbmRsZVJvb21EZXRhaWwiLCJ1c2VyUmVxdWVzdGVkVG9TZW5kQWxsRGF0YSIsImhhbmRsZU5ld0RpbWVuc2lvbnMiLCJoYW5kbGVJbml0RGF0YSIsInJvb20iLCJlbWl0IiwibmFtZSIsIm1lc3NhZ2UiLCJuZXdQaXhlbHMiLCJwaXhlbHMiLCJjYW52YXNEYXRhIiwidXNlciIsInR5cGUiLCJBcHAiLCJldmVudHMiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGlCO0FBQ0YsaUNBQWE7QUFBQTs7QUFBQTs7QUFDVCxhQUFLQyxNQUFMLEdBQWNDLElBQWQ7QUFDQSxhQUFLRCxNQUFMLENBQVlFLGdCQUFaLENBQTZCLHNCQUE3QixFQUFxRCxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0Msa0JBQUwsQ0FBd0JELENBQXhCLENBQVA7QUFBQSxTQUFyRDtBQUNBLGFBQUtILE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsZUFBN0IsRUFBOEMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtFLGFBQUwsQ0FBbUJGLENBQW5CLEVBQXNCLFFBQXRCLENBQVA7QUFBQSxTQUE5QztBQUNBLGFBQUtILE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsU0FBN0IsRUFBd0MsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtFLGFBQUwsQ0FBbUJGLENBQW5CLEVBQXNCLE1BQXRCLENBQVA7QUFBQSxTQUF4QztBQUNBLGFBQUtILE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsV0FBN0IsRUFBMEMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtHLGVBQUwsQ0FBcUJILENBQXJCLENBQVA7QUFBQSxTQUExQztBQUNBLGFBQUtILE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsYUFBN0IsRUFBNEMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtJLGdCQUFMLENBQXNCSixDQUF0QixDQUFQO0FBQUEsU0FBNUM7QUFDQSxhQUFLSCxNQUFMLENBQVlFLGdCQUFaLENBQTZCLHVCQUE3QixFQUFzRCxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0ssMEJBQUwsQ0FBZ0NMLENBQWhDLENBQVA7QUFBQSxTQUF0RDtBQUNBLGFBQUtILE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsZ0JBQTdCLEVBQStDLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLTSxtQkFBTCxDQUF5Qk4sQ0FBekIsQ0FBUDtBQUFBLFNBQS9DO0FBQ0EsYUFBS0gsTUFBTCxDQUFZRSxnQkFBWixDQUE2QixnQkFBN0IsRUFBK0MsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtPLGNBQUwsQ0FBb0JQLENBQXBCLENBQVA7QUFBQSxTQUEvQztBQUNIOzs7O2lDQUNRUSxJLEVBQUs7QUFDVixpQkFBS1gsTUFBTCxDQUFZWSxJQUFaLENBQWlCLE1BQWpCLEVBQXlCRCxJQUF6QjtBQUNIOzs7b0NBQ1U7QUFDUCxpQkFBS1gsTUFBTCxDQUFZWSxJQUFaLENBQWlCLE9BQWpCO0FBQ0g7OztpQ0FDUUMsSSxFQUFLO0FBQ1YsaUJBQUtiLE1BQUwsQ0FBWVksSUFBWixDQUFpQixTQUFqQixFQUE0QkMsSUFBNUI7QUFDSDs7O29DQUNXQyxPLEVBQVE7QUFDaEIsaUJBQUtkLE1BQUwsQ0FBWVksSUFBWixDQUFpQixTQUFqQixFQUE0QkUsT0FBNUI7QUFDSDs7O21DQUNVQyxTLEVBQVU7QUFDakIsaUJBQUtmLE1BQUwsQ0FBWVksSUFBWixDQUFpQixvQkFBakIsRUFBdUMsRUFBQ0ksUUFBUUQsU0FBVCxFQUF2QztBQUNIOzs7dUNBQ2NFLFUsRUFBWUMsSSxFQUFLO0FBQzVCLGlCQUFLbEIsTUFBTCxDQUFZWSxJQUFaLENBQWlCLHNCQUFqQixFQUF5QyxFQUFDSyxZQUFZQSxVQUFiLEVBQXlCQyxNQUFNQSxJQUEvQixFQUF6QztBQUNIOzs7dUNBQ2NmLEMsRUFBRTtBQUNiLGlCQUFLSCxNQUFMLENBQVlZLElBQVosQ0FBaUIsZ0JBQWpCLEVBQW1DVCxDQUFuQztBQUNIOzs7c0NBQ2FBLEMsRUFBR2dCLEksRUFBSztBQUNsQkMsZ0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixpQkFBbkIsRUFBc0MsRUFBQ1IsU0FBU1gsRUFBRSxTQUFGLENBQVYsRUFBd0JlLE1BQU1mLEVBQUUsTUFBRixDQUE5QixFQUF5Q2dCLE1BQU1BLElBQS9DLEVBQXRDO0FBQ0g7OzsyQ0FDa0JoQixDLEVBQUU7QUFDakJpQixnQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLGNBQW5CLEVBQW1DbkIsQ0FBbkM7QUFDSDs7O21EQUUwQkEsQyxFQUFFO0FBQ3pCaUIsZ0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixtQkFBbkIsRUFBd0NuQixDQUF4QztBQUNIOzs7d0NBQ2VBLEMsRUFBRTtBQUNkaUIsZ0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixhQUFuQixFQUFrQ25CLENBQWxDO0FBQ0g7Ozt5Q0FDZ0JBLEMsRUFBRTtBQUNmaUIsZ0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixtQkFBbkIsRUFBd0NuQixDQUF4QztBQUNIOzs7NENBQ21CQSxDLEVBQUU7QUFDbEJpQixnQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLGtCQUFuQixFQUF1Q25CLENBQXZDO0FBQ0g7Ozt1Q0FDY0EsQyxFQUFFO0FBQ2JpQixnQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLHNCQUFuQixFQUEyQ25CLENBQTNDO0FBQ0g7Ozs7OztrQkFFVyxJQUFJSixpQkFBSixFIiwiZmlsZSI6IkRhdGFTdHJlYW1IYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEYXRhU3RyZWFtSGFuZGxlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBpbygpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3B1bGxQaXhlbHNGcm9tU2VydmVyJywgKGUpID0+IHRoaXMuaGFuZGxlU2VydmVyUGl4ZWxzKGUpKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdzZXJ2ZXJNZXNzYWdlJywgKGUpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShlLCAnc2VydmVyJykpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGUsICd1c2VyJykpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvb21zTGlzdCcsIChlKSA9PiB0aGlzLmhhbmRsZVJvb21zTGlzdChlKSk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcigncm9vbURldGFpbHMnLCAoZSkgPT4gdGhpcy5oYW5kbGVSb29tRGV0YWlsKGUpKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdzZW5kQWxsRGF0YUZvck5ld1VzZXInLCAoZSkgPT4gdGhpcy51c2VyUmVxdWVzdGVkVG9TZW5kQWxsRGF0YShlKSk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcigncHVsbERpbWVuc2lvbnMnLCAoZSkgPT4gdGhpcy5oYW5kbGVOZXdEaW1lbnNpb25zKGUpKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdwdWxsQ2FudmFzRGF0YScsIChlKSA9PiB0aGlzLmhhbmRsZUluaXREYXRhKGUpKTtcclxuICAgIH1cclxuICAgIGpvaW5Sb29tKHJvb20pe1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2pvaW4nLCByb29tKTtcclxuICAgIH1cclxuICAgIGxlYXZlUm9vbSgpe1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2xlYXZlJyk7XHJcbiAgICB9XHJcbiAgICBzZW5kTmFtZShuYW1lKXtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdzZXROYW1lJywgbmFtZSk7XHJcbiAgICB9XHJcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlKXtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBzZW5kUGl4ZWxzKG5ld1BpeGVscyl7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgncHVzaFBpeGVsc1RvU2VydmVyJywge3BpeGVsczogbmV3UGl4ZWxzfSk7XHJcbiAgICB9XHJcbiAgICBzZW5kQ2FudmFzRGF0YShjYW52YXNEYXRhLCB1c2VyKXtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdwdXNoQ2FudmFzRGF0YVRvVXNlcicsIHtjYW52YXNEYXRhOiBjYW52YXNEYXRhLCB1c2VyOiB1c2VyfSk7XHJcbiAgICB9XHJcbiAgICBzZW5kRGltZW5zaW9ucyhlKXtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdwdXNoRGltZW5zaW9ucycsIGUpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVNZXNzYWdlKGUsIHR5cGUpe1xyXG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcInJlY2VpdmVkTWVzc2FnZVwiLCB7bWVzc2FnZTogZVsnbWVzc2FnZSddLCB1c2VyOiBlWyd1c2VyJ10sIHR5cGU6IHR5cGV9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVNlcnZlclBpeGVscyhlKXtcclxuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJ1cGRhdGVQaXhlbHNcIiwgZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlclJlcXVlc3RlZFRvU2VuZEFsbERhdGEoZSl7XHJcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwic2VuZEFsbERhdGFUb1VzZXJcIiwgZSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVSb29tc0xpc3QoZSl7XHJcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwidXBkYXRlUm9vbXNcIiwgZSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVSb29tRGV0YWlsKGUpe1xyXG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcInVwZGF0ZUN1cnJlbnRSb29tXCIsIGUpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlTmV3RGltZW5zaW9ucyhlKXtcclxuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJjaGFuZ2VEaW1lbnNpb25zXCIsIGUpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlSW5pdERhdGEoZSl7XHJcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwiaW5pdGlhbGl6ZVJvb21DYW52YXNcIiwgZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgKG5ldyBEYXRhU3RyZWFtSGFuZGxlcik7Il19

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _HelpFunctions = __webpack_require__(5);

	var _HelpFunctions2 = _interopRequireDefault(_HelpFunctions);

	var _backbone = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CanvasLayer = _backbone.View.extend({
	    initialize: function initialize() {
	        var _this = this;

	        App.events.on('initializeroom', function () {
	            return _this.resize();
	        });
	        window.addEventListener('resize', function () {
	            return _this.resize();
	        });
	        App.events.on("canvasRedraw", function () {
	            return _this.canvasRedraw();
	        });
	        this.listenTo(this.model, 'change:width', this.canvasRedraw);
	        this.listenTo(this.model, 'change:height', this.canvasRedraw);
	        var ctx = this.el.getContext('2d');
	        ctx.imageSmoothingEnabled = false;
	    },
	    clearCanvas: function clearCanvas() {
	        var ctx = this.el.getContext("2d");
	        ctx.beginPath();
	        ctx.clearRect(0, 0, this.$el.width(), this.$el.height());
	        ctx.stroke();
	        ctx.closePath();
	    },
	    resize: function resize() {
	        this.$el.attr('width', _HelpFunctions2.default.makeEven(this.$el.parent().width()));
	        this.$el.attr('height', _HelpFunctions2.default.makeEven(this.$el.parent().height()));
	        this.canvasRedraw();
	    }
	});

	exports.default = CanvasLayer;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcQ2FudmFzTGF5ZXIuanMiXSwibmFtZXMiOlsiQ2FudmFzTGF5ZXIiLCJleHRlbmQiLCJpbml0aWFsaXplIiwiQXBwIiwiZXZlbnRzIiwib24iLCJyZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzUmVkcmF3IiwibGlzdGVuVG8iLCJtb2RlbCIsImN0eCIsImVsIiwiZ2V0Q29udGV4dCIsImltYWdlU21vb3RoaW5nRW5hYmxlZCIsImNsZWFyQ2FudmFzIiwiYmVnaW5QYXRoIiwiY2xlYXJSZWN0IiwiJGVsIiwid2lkdGgiLCJoZWlnaHQiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJhdHRyIiwibWFrZUV2ZW4iLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxjQUFjLGVBQUtDLE1BQUwsQ0FBWTtBQUM1QkMsZ0JBQVksc0JBQVk7QUFBQTs7QUFDcEJDLFlBQUlDLE1BQUosQ0FBV0MsRUFBWCxDQUFjLGdCQUFkLEVBQWdDO0FBQUEsbUJBQU0sTUFBS0MsTUFBTCxFQUFOO0FBQUEsU0FBaEM7QUFDQUMsZUFBT0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0M7QUFBQSxtQkFBTSxNQUFLRixNQUFMLEVBQU47QUFBQSxTQUFsQztBQUNBSCxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxjQUFkLEVBQThCO0FBQUEsbUJBQU0sTUFBS0ksWUFBTCxFQUFOO0FBQUEsU0FBOUI7QUFDQSxhQUFLQyxRQUFMLENBQWMsS0FBS0MsS0FBbkIsRUFBMEIsY0FBMUIsRUFBMEMsS0FBS0YsWUFBL0M7QUFDQSxhQUFLQyxRQUFMLENBQWMsS0FBS0MsS0FBbkIsRUFBMEIsZUFBMUIsRUFBMkMsS0FBS0YsWUFBaEQ7QUFDQSxZQUFJRyxNQUFNLEtBQUtDLEVBQUwsQ0FBUUMsVUFBUixDQUFtQixJQUFuQixDQUFWO0FBQ0FGLFlBQUlHLHFCQUFKLEdBQTRCLEtBQTVCO0FBQ0gsS0FUMkI7QUFVNUJDLGlCQUFhLHVCQUFZO0FBQ3JCLFlBQUlKLE1BQU0sS0FBS0MsRUFBTCxDQUFRQyxVQUFSLENBQW1CLElBQW5CLENBQVY7QUFDQUYsWUFBSUssU0FBSjtBQUNBTCxZQUFJTSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixLQUFLQyxHQUFMLENBQVNDLEtBQVQsRUFBcEIsRUFBc0MsS0FBS0QsR0FBTCxDQUFTRSxNQUFULEVBQXRDO0FBQ0FULFlBQUlVLE1BQUo7QUFDQVYsWUFBSVcsU0FBSjtBQUNILEtBaEIyQjtBQWlCNUJqQixZQUFRLGtCQUFVO0FBQ2QsYUFBS2EsR0FBTCxDQUFTSyxJQUFULENBQWMsT0FBZCxFQUF1Qix3QkFBY0MsUUFBZCxDQUF1QixLQUFLTixHQUFMLENBQVNPLE1BQVQsR0FBa0JOLEtBQWxCLEVBQXZCLENBQXZCO0FBQ0EsYUFBS0QsR0FBTCxDQUFTSyxJQUFULENBQWMsUUFBZCxFQUF3Qix3QkFBY0MsUUFBZCxDQUF1QixLQUFLTixHQUFMLENBQVNPLE1BQVQsR0FBa0JMLE1BQWxCLEVBQXZCLENBQXhCO0FBQ0EsYUFBS1osWUFBTDtBQUNIO0FBckIyQixDQUFaLENBQXBCOztrQkF3QmVULFciLCJmaWxlIjoiQ2FudmFzTGF5ZXIuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxwRnVuY3Rpb25zIGZyb20gXCIuLi8uLi9IZWxwRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Vmlld30gZnJvbSBcImJhY2tib25lXCI7XHJcblxyXG5jb25zdCBDYW52YXNMYXllciA9IFZpZXcuZXh0ZW5kKHtcclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBBcHAuZXZlbnRzLm9uKCdpbml0aWFsaXplcm9vbScsICgpID0+IHRoaXMucmVzaXplKCkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcclxuICAgICAgICBBcHAuZXZlbnRzLm9uKFwiY2FudmFzUmVkcmF3XCIsICgpID0+IHRoaXMuY2FudmFzUmVkcmF3KCkpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTp3aWR0aCcsIHRoaXMuY2FudmFzUmVkcmF3KTtcclxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6aGVpZ2h0JywgdGhpcy5jYW52YXNSZWRyYXcpO1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLmVsLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGNsZWFyQ2FudmFzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuZWwuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuJGVsLndpZHRoKCksIHRoaXMuJGVsLmhlaWdodCgpKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfSxcclxuICAgIHJlc2l6ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLiRlbC5hdHRyKCd3aWR0aCcsIEhlbHBGdW5jdGlvbnMubWFrZUV2ZW4odGhpcy4kZWwucGFyZW50KCkud2lkdGgoKSkpO1xyXG4gICAgICAgIHRoaXMuJGVsLmF0dHIoJ2hlaWdodCcsIEhlbHBGdW5jdGlvbnMubWFrZUV2ZW4odGhpcy4kZWwucGFyZW50KCkuaGVpZ2h0KCkpKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1JlZHJhdygpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbnZhc0xheWVyO1xyXG4iXX0=

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {//     Backbone.js 1.3.3

	//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(factory) {

	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self == 'object' && self.self === self && self) ||
	            (typeof global == 'object' && global.global === global && global);

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7), __webpack_require__(1), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore'), $;
	    try { $ = require('jquery'); } catch (e) {}
	    factory(root, exports, _, $);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	})(function(root, Backbone, _, $) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create a local reference to a common array method we'll want to use later.
	  var slice = Array.prototype.slice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.3.3';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function(length, method, attribute) {
	    switch (length) {
	      case 1: return function() {
	        return _[method](this[attribute]);
	      };
	      case 2: return function(value) {
	        return _[method](this[attribute], value);
	      };
	      case 3: return function(iteratee, context) {
	        return _[method](this[attribute], cb(iteratee, this), context);
	      };
	      case 4: return function(iteratee, defaultVal, context) {
	        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	      };
	      default: return function() {
	        var args = slice.call(arguments);
	        args.unshift(this[attribute]);
	        return _[method].apply(_, args);
	      };
	    }
	  };
	  var addUnderscoreMethods = function(Class, methods, attribute) {
	    _.each(methods, function(length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };

	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
	    return iteratee;
	  };
	  var modelMatcher = function(attrs) {
	    var matcher = _.matches(attrs);
	    return function(model) {
	      return matcher(model.attributes);
	    };
	  };

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function(iteratee, events, name, callback, opts) {
	    var i = 0, names;
	    if (name && typeof name === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length ; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space-separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };

	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function(name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };

	  // Guard the `listening` argument from the public API.
	  var internalOn = function(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	      context: context,
	      ctx: obj,
	      listening: listening
	    });

	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }

	    return obj;
	  };

	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo = function(obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];

	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
	    }

	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };

	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context, ctx = options.ctx, listening = options.listening;
	      if (listening) listening.count++;

	      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
	    }
	    return events;
	  };

	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off = function(name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	      context: context,
	      listeners: this._listeners
	    });
	    return this;
	  };

	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening = function(obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;

	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];

	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;

	      listening.obj.off(name, callback, this);
	    }

	    return this;
	  };

	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function(events, name, callback, options) {
	    if (!events) return;

	    var i = 0, listening;
	    var context = options.context, listeners = options.listeners;

	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }

	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];

	      // Bail out if there are no events stored.
	      if (!handlers) break;

	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (
	          callback && callback !== handler.callback &&
	            callback !== handler.callback._callback ||
	              context && context !== handler.context
	        ) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }

	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    return events;
	  };

	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once = function(name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    if (typeof name === 'string' && context == null) callback = void 0;
	    return this.on(events, callback, context);
	  };

	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce = function(obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };

	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function() {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };

	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger = function(name) {
	    if (!this._events) return this;

	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

	    eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };

	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function(objEvents, name, callback, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    var defaults = _.result(this, 'defaults');
	    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      var unset      = options.unset;
	      var silent     = options.silent;
	      var changes    = [];
	      var changing   = this._changing;
	      this._changing = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }

	      var current = this.attributes;
	      var changed = this.changed;
	      var prev    = this._previousAttributes;

	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Update the `id`.
	      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	      }
	      return _.size(changed) ? changed : false;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true, parse: true}, options);
	      var wait = options.wait;

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else if (!this._validate(attrs, options)) {
	        return false;
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

	      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);

	      // Restore attributes.
	      this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;

	      var destroy = function() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend({}, options, {validate: true}));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	      omit: 0, chain: 1, isEmpty: 1};

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Splices `insert` into `array` at index `at`.
	  var splice = function(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    var i;
	    for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
	    for (i = 0; i < length; i++) array[i + at] = insert[i];
	    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	  };

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model) { return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed.length) {
	        options.changes = {added: [], merged: [], removed: removed};
	        this.trigger('update', this, options);
	      }
	      return singular ? removed[0] : removed;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      if (models == null) return;

	      options = _.extend({}, setOptions, options);
	      if (options.parse && !this._isModel(models)) {
	        models = this.parse(models, options) || [];
	      }

	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();

	      var at = options.at;
	      if (at != null) at = +at;
	      if (at > this.length) at = this.length;
	      if (at < 0) at += this.length + 1;

	      var set = [];
	      var toAdd = [];
	      var toMerge = [];
	      var toRemove = [];
	      var modelMap = {};

	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;

	      var sort = false;
	      var sortable = this.comparator && at == null && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model, i;
	      for (i = 0; i < models.length; i++) {
	        model = models[i];

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            toMerge.push(existing);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(model, options);
	          if (model) {
	            toAdd.push(model);
	            this._addReference(model, options);
	            modelMap[model.cid] = true;
	            set.push(model);
	          }
	        }
	      }

	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
	          return m !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort/update events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length || toMerge.length) {
	          options.changes = {
	            added: toAdd,
	            removed: toRemove,
	            merged: toMerge
	          };
	          this.trigger('update', this, options);
	        }
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id, cid, model object with id or cid
	    // properties, or an attributes object that is transformed through modelId.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] ||
	        this._byId[this.modelId(obj.attributes || obj)] ||
	        obj.cid && this._byId[obj.cid];
	    },

	    // Returns `true` if the model is in the collection.
	    has: function(obj) {
	      return this.get(obj) != null;
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return this.map(attr + '');
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(m, resp, callbackOpts) {
	        if (wait) collection.add(m, callbackOpts);
	        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },

	    // Define how to uniquely identify models in the collection.
	    modelId: function(attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method called by both remove and set.
	    _removeModels: function(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;

	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;

	        // Remove references before triggering 'remove' event to prevent an
	        // infinite loop. #3693
	        delete this._byId[model.cid];
	        var id = this.modelId(model.attributes);
	        if (id != null) delete this._byId[id];

	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }

	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed;
	    },

	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function(model) {
	      return model instanceof Model;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if (model) {
	        if ((event === 'add' || event === 'remove') && collection !== this) return;
	        if (event === 'destroy') this.remove(model, options);
	        if (event === 'change') {
	          var prevId = this.modelId(model.previousAttributes());
	          var id = this.modelId(model.attributes);
	          if (prevId !== id) {
	            if (prevId != null) delete this._byId[prevId];
	            if (id != null) this._byId[id] = model;
	          }
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
	      foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
	      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	      sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },

	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function() {
	      this.$el.remove();
	    },

	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },

	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },

	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function(tagName) {
	      return document.createElement(tagName);
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },

	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function(attributes) {
	      this.$el.attr(attributes);
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function(xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch': 'PATCH',
	    'delete': 'DELETE',
	    'read': 'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },

	    // Does the pathname match the root?
	    matchRoot: function() {
	      var path = this.decodeFragment(this.location.pathname);
	      var rootPath = path.slice(0, this.root.length - 1) + '/';
	      return rootPath === this.root;
	    },

	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },

	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the pathname and search params, without the root.
	    getPath: function() {
	      var path = this.decodeFragment(
	        this.location.pathname + this.getSearch()
	      ).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },

	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.history && this.history.pushState);
	      this._usePushState    = this._wantsPushState && this._hasPushState;
	      this.fragment         = this.getFragment();

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var rootPath = this.root.slice(0, -1) || '/';
	          this.location.replace(rootPath + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	          this.navigate(this.getHash(), {replace: true});
	        }

	      }

	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }

	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function(eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function(eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };

	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }

	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }

	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();

	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }

	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');

	      // Don't include a trailing slash on the root.
	      var rootPath = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        rootPath = rootPath.slice(0, -1) || '/';
	      }
	      var url = rootPath + fragment;

	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
	          var iWindow = this.iframe.contentWindow;

	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if (!options.replace) {
	            iWindow.document.open();
	            iWindow.document.close();
	          }

	          this._updateHash(iWindow.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function and add the prototype properties.
	    child.prototype = _.create(parent.prototype, protoProps);
	    child.prototype.constructor = child;

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _CanvasLayer = __webpack_require__(4);

	var _CanvasLayer2 = _interopRequireDefault(_CanvasLayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HelpCanvas = _CanvasLayer2.default.extend({
	    initialize: function initialize() {
	        var _this = this;

	        _CanvasLayer2.default.prototype.initialize.apply(this, arguments);
	        this.listenTo(this.model, 'change:drawHelpLines', this.canvasRedraw);
	        App.events.on("redrawHelpCanvas", function () {
	            return _this.canvasRedraw();
	        });
	        App.events.on("drawHelpSquare", function (e) {
	            return _this.drawSquare(e);
	        });
	    },
	    canvasRedraw: function canvasRedraw() {
	        this.clearCanvas();
	        this.drawOutlining();
	        if (this.model.get("drawHelpLines")) {
	            this.drawHelpLines();
	        }
	    },
	    drawOutlining: function drawOutlining() {
	        var ctx = this.el.getContext("2d");
	        ctx.strokeStyle = this.model.get("highlightHelpLineColor");
	        ctx.beginPath();
	        ctx.rect(this.model.get("position").x + 0.5, this.model.get("position").y + 0.5, this.model.get("width") * this.model.get("scale"), this.model.get("height") * this.model.get("scale"));
	        ctx.stroke();
	        ctx.closePath();
	    },
	    clearCanvas: function clearCanvas() {
	        var c = this.el;
	        var ctx = c.getContext("2d");
	        ctx.globalAlpha = 0.4;
	        ctx.beginPath();
	        ctx.clearRect(0, 0, this.$el.width(), this.$el.height());
	        ctx.stroke();
	        ctx.closePath();
	    },
	    drawHelpLines: function drawHelpLines() {
	        var ctx = this.el.getContext("2d");
	        var scale = this.model.get("scale");
	        var position = this.model.get("position");
	        var width = this.model.get("width");
	        var height = this.model.get("height");
	        ctx.strokeStyle = this.model.get("defaultHelpLineColor");
	        ctx.beginPath();
	        for (var i = 1; i < width; i++) {
	            ctx.moveTo(position.x + i * scale + 0.5, position.y + 0.5);
	            ctx.lineTo(position.x + i * scale + 0.5, position.y + height * scale + 0.5);
	        }
	        for (var j = 1; j < height; j++) {
	            ctx.moveTo(position.x + 0.5, position.y + j * scale + 0.5);
	            ctx.lineTo(position.x + width * scale + 0.5, position.y + j * scale + 0.5);
	        }
	        ctx.stroke();
	        ctx.closePath();
	        ctx.beginPath();
	        ctx.strokeStyle = this.model.get("highlightHelpLineColor");
	        ctx.moveTo(position.x + Math.floor(width / 2) * scale + 0.5, position.y + 0.5);
	        ctx.lineTo(position.x + Math.floor(width / 2) * scale + 0.5, position.y + height * scale + 0.5);
	        ctx.moveTo(position.x + 0.5, position.y + Math.floor(height / 2) * scale + 0.5);
	        ctx.lineTo(position.x + width * scale + 0.5, position.y + Math.floor(height / 2) * scale + 0.5);
	        ctx.stroke();
	        ctx.closePath();
	    },

	    drawSquare: function drawSquare(e) {
	        this.clearCanvas();
	        var position = this.model.get("position");
	        var scale = this.model.get("scale");
	        var ctx = this.el.getContext("2d");
	        ctx.fillStyle = e.color;
	        ctx.beginPath();
	        ctx.fillRect(position.x + e.x * scale, position.y + e.y * scale, e.w * scale, e.h * scale);
	        ctx.stroke();
	        ctx.closePath();
	        this.drawOutlining();
	        if (this.model.get("drawHelpLines")) {
	            this.drawHelpLines();
	        }
	    }
	});

	exports.default = HelpCanvas;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcSGVscENhbnZhcy5qcyJdLCJuYW1lcyI6WyJIZWxwQ2FudmFzIiwiZXh0ZW5kIiwiaW5pdGlhbGl6ZSIsInByb3RvdHlwZSIsImFwcGx5IiwiYXJndW1lbnRzIiwibGlzdGVuVG8iLCJtb2RlbCIsImNhbnZhc1JlZHJhdyIsIkFwcCIsImV2ZW50cyIsIm9uIiwiZSIsImRyYXdTcXVhcmUiLCJjbGVhckNhbnZhcyIsImRyYXdPdXRsaW5pbmciLCJnZXQiLCJkcmF3SGVscExpbmVzIiwiY3R4IiwiZWwiLCJnZXRDb250ZXh0Iiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJyZWN0IiwieCIsInkiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJjIiwiZ2xvYmFsQWxwaGEiLCJjbGVhclJlY3QiLCIkZWwiLCJ3aWR0aCIsImhlaWdodCIsInNjYWxlIiwicG9zaXRpb24iLCJpIiwibW92ZVRvIiwibGluZVRvIiwiaiIsIk1hdGgiLCJmbG9vciIsImZpbGxTdHlsZSIsImNvbG9yIiwiZmlsbFJlY3QiLCJ3IiwiaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLGFBQWEsc0JBQVlDLE1BQVosQ0FBbUI7QUFDbENDLGdCQUFZLHNCQUFZO0FBQUE7O0FBQ3BCLDhCQUFZQyxTQUFaLENBQXNCRCxVQUF0QixDQUFpQ0UsS0FBakMsQ0FBdUMsSUFBdkMsRUFBNkNDLFNBQTdDO0FBQ0EsYUFBS0MsUUFBTCxDQUFjLEtBQUtDLEtBQW5CLEVBQTBCLHNCQUExQixFQUFrRCxLQUFLQyxZQUF2RDtBQUNBQyxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxrQkFBZCxFQUFrQztBQUFBLG1CQUFNLE1BQUtILFlBQUwsRUFBTjtBQUFBLFNBQWxDO0FBQ0FDLFlBQUlDLE1BQUosQ0FBV0MsRUFBWCxDQUFjLGdCQUFkLEVBQWdDLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLQyxVQUFMLENBQWdCRCxDQUFoQixDQUFQO0FBQUEsU0FBaEM7QUFDSCxLQU5pQztBQU9sQ0osa0JBQWMsd0JBQVk7QUFDdEIsYUFBS00sV0FBTDtBQUNBLGFBQUtDLGFBQUw7QUFDQSxZQUFJLEtBQUtSLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLGVBQWYsQ0FBSixFQUFxQztBQUNqQyxpQkFBS0MsYUFBTDtBQUNIO0FBQ0osS0FiaUM7QUFjbENGLG1CQUFlLHlCQUFZO0FBQ3ZCLFlBQUlHLE1BQU0sS0FBS0MsRUFBTCxDQUFRQyxVQUFSLENBQW1CLElBQW5CLENBQVY7QUFDQUYsWUFBSUcsV0FBSixHQUFrQixLQUFLZCxLQUFMLENBQVdTLEdBQVgsQ0FBZSx3QkFBZixDQUFsQjtBQUNBRSxZQUFJSSxTQUFKO0FBQ0FKLFlBQUlLLElBQUosQ0FBUyxLQUFLaEIsS0FBTCxDQUFXUyxHQUFYLENBQWUsVUFBZixFQUEyQlEsQ0FBM0IsR0FBK0IsR0FBeEMsRUFBNkMsS0FBS2pCLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFVBQWYsRUFBMkJTLENBQTNCLEdBQStCLEdBQTVFLEVBQWlGLEtBQUtsQixLQUFMLENBQVdTLEdBQVgsQ0FBZSxPQUFmLElBQTBCLEtBQUtULEtBQUwsQ0FBV1MsR0FBWCxDQUFlLE9BQWYsQ0FBM0csRUFBb0ksS0FBS1QsS0FBTCxDQUFXUyxHQUFYLENBQWUsUUFBZixJQUEyQixLQUFLVCxLQUFMLENBQVdTLEdBQVgsQ0FBZSxPQUFmLENBQS9KO0FBQ0FFLFlBQUlRLE1BQUo7QUFDQVIsWUFBSVMsU0FBSjtBQUNILEtBckJpQztBQXNCbENiLGlCQUFhLHVCQUFZO0FBQ3JCLFlBQUljLElBQUksS0FBS1QsRUFBYjtBQUNBLFlBQUlELE1BQU1VLEVBQUVSLFVBQUYsQ0FBYSxJQUFiLENBQVY7QUFDQUYsWUFBSVcsV0FBSixHQUFrQixHQUFsQjtBQUNBWCxZQUFJSSxTQUFKO0FBQ0FKLFlBQUlZLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUtDLEdBQUwsQ0FBU0MsS0FBVCxFQUFwQixFQUFzQyxLQUFLRCxHQUFMLENBQVNFLE1BQVQsRUFBdEM7QUFDQWYsWUFBSVEsTUFBSjtBQUNBUixZQUFJUyxTQUFKO0FBQ0gsS0E5QmlDO0FBK0JsQ1YsaUJBL0JrQywyQkErQmxCO0FBQ1osWUFBSUMsTUFBTSxLQUFLQyxFQUFMLENBQVFDLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBVjtBQUNBLFlBQUljLFFBQVEsS0FBSzNCLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLFlBQUltQixXQUFXLEtBQUs1QixLQUFMLENBQVdTLEdBQVgsQ0FBZSxVQUFmLENBQWY7QUFDQSxZQUFJZ0IsUUFBUSxLQUFLekIsS0FBTCxDQUFXUyxHQUFYLENBQWUsT0FBZixDQUFaO0FBQ0EsWUFBSWlCLFNBQVMsS0FBSzFCLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFFBQWYsQ0FBYjtBQUNBRSxZQUFJRyxXQUFKLEdBQWtCLEtBQUtkLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLHNCQUFmLENBQWxCO0FBQ0FFLFlBQUlJLFNBQUo7QUFDQSxhQUFLLElBQUljLElBQUksQ0FBYixFQUFnQkEsSUFBSUosS0FBcEIsRUFBMkJJLEdBQTNCLEVBQWdDO0FBQzVCbEIsZ0JBQUltQixNQUFKLENBQVdGLFNBQVNYLENBQVQsR0FBYVksSUFBSUYsS0FBakIsR0FBeUIsR0FBcEMsRUFBeUNDLFNBQVNWLENBQVQsR0FBYSxHQUF0RDtBQUNBUCxnQkFBSW9CLE1BQUosQ0FBV0gsU0FBU1gsQ0FBVCxHQUFhWSxJQUFJRixLQUFqQixHQUF5QixHQUFwQyxFQUF5Q0MsU0FBU1YsQ0FBVCxHQUFhUSxTQUFTQyxLQUF0QixHQUE4QixHQUF2RTtBQUNIO0FBQ0QsYUFBSyxJQUFJSyxJQUFJLENBQWIsRUFBZ0JBLElBQUlOLE1BQXBCLEVBQTRCTSxHQUE1QixFQUFpQztBQUM3QnJCLGdCQUFJbUIsTUFBSixDQUFXRixTQUFTWCxDQUFULEdBQWEsR0FBeEIsRUFBNkJXLFNBQVNWLENBQVQsR0FBYWMsSUFBSUwsS0FBakIsR0FBeUIsR0FBdEQ7QUFDQWhCLGdCQUFJb0IsTUFBSixDQUFXSCxTQUFTWCxDQUFULEdBQWFRLFFBQVFFLEtBQXJCLEdBQTZCLEdBQXhDLEVBQTZDQyxTQUFTVixDQUFULEdBQWFjLElBQUlMLEtBQWpCLEdBQXlCLEdBQXRFO0FBQ0g7QUFDRGhCLFlBQUlRLE1BQUo7QUFDQVIsWUFBSVMsU0FBSjtBQUNBVCxZQUFJSSxTQUFKO0FBQ0FKLFlBQUlHLFdBQUosR0FBa0IsS0FBS2QsS0FBTCxDQUFXUyxHQUFYLENBQWUsd0JBQWYsQ0FBbEI7QUFDQUUsWUFBSW1CLE1BQUosQ0FBV0YsU0FBU1gsQ0FBVCxHQUFhZ0IsS0FBS0MsS0FBTCxDQUFXVCxRQUFRLENBQW5CLElBQXdCRSxLQUFyQyxHQUE2QyxHQUF4RCxFQUE2REMsU0FBU1YsQ0FBVCxHQUFhLEdBQTFFO0FBQ0FQLFlBQUlvQixNQUFKLENBQVdILFNBQVNYLENBQVQsR0FBYWdCLEtBQUtDLEtBQUwsQ0FBV1QsUUFBUSxDQUFuQixJQUF3QkUsS0FBckMsR0FBNkMsR0FBeEQsRUFBNkRDLFNBQVNWLENBQVQsR0FBYVEsU0FBU0MsS0FBdEIsR0FBOEIsR0FBM0Y7QUFDQWhCLFlBQUltQixNQUFKLENBQVdGLFNBQVNYLENBQVQsR0FBYSxHQUF4QixFQUE2QlcsU0FBU1YsQ0FBVCxHQUFhZSxLQUFLQyxLQUFMLENBQVdSLFNBQVMsQ0FBcEIsSUFBeUJDLEtBQXRDLEdBQThDLEdBQTNFO0FBQ0FoQixZQUFJb0IsTUFBSixDQUFXSCxTQUFTWCxDQUFULEdBQWFRLFFBQVFFLEtBQXJCLEdBQTZCLEdBQXhDLEVBQTZDQyxTQUFTVixDQUFULEdBQWFlLEtBQUtDLEtBQUwsQ0FBV1IsU0FBUyxDQUFwQixJQUF5QkMsS0FBdEMsR0FBOEMsR0FBM0Y7QUFDQWhCLFlBQUlRLE1BQUo7QUFDQVIsWUFBSVMsU0FBSjtBQUNILEtBekRpQzs7QUEwRGxDZCxnQkFBWSxvQkFBU0QsQ0FBVCxFQUFXO0FBQ25CLGFBQUtFLFdBQUw7QUFDQSxZQUFJcUIsV0FBVyxLQUFLNUIsS0FBTCxDQUFXUyxHQUFYLENBQWUsVUFBZixDQUFmO0FBQ0EsWUFBSWtCLFFBQVEsS0FBSzNCLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLFlBQUlFLE1BQU0sS0FBS0MsRUFBTCxDQUFRQyxVQUFSLENBQW1CLElBQW5CLENBQVY7QUFDQUYsWUFBSXdCLFNBQUosR0FBZ0I5QixFQUFFK0IsS0FBbEI7QUFDQXpCLFlBQUlJLFNBQUo7QUFDQUosWUFBSTBCLFFBQUosQ0FBYVQsU0FBU1gsQ0FBVCxHQUFhWixFQUFFWSxDQUFGLEdBQUtVLEtBQS9CLEVBQXVDQyxTQUFTVixDQUFULEdBQWFiLEVBQUVhLENBQUYsR0FBTVMsS0FBMUQsRUFBaUV0QixFQUFFaUMsQ0FBRixHQUFNWCxLQUF2RSxFQUE4RXRCLEVBQUVrQyxDQUFGLEdBQU1aLEtBQXBGO0FBQ0FoQixZQUFJUSxNQUFKO0FBQ0FSLFlBQUlTLFNBQUo7QUFDQSxhQUFLWixhQUFMO0FBQ0EsWUFBSSxLQUFLUixLQUFMLENBQVdTLEdBQVgsQ0FBZSxlQUFmLENBQUosRUFBcUM7QUFDakMsaUJBQUtDLGFBQUw7QUFDSDtBQUNKO0FBeEVpQyxDQUFuQixDQUFuQjs7a0JBMkVlakIsVSIsImZpbGUiOiJIZWxwQ2FudmFzLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzTGF5ZXIgZnJvbSBcIi4vQ2FudmFzTGF5ZXJcIjtcclxuXHJcbmNvbnN0IEhlbHBDYW52YXMgPSBDYW52YXNMYXllci5leHRlbmQoe1xyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIENhbnZhc0xheWVyLnByb3RvdHlwZS5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmRyYXdIZWxwTGluZXMnLCB0aGlzLmNhbnZhc1JlZHJhdyk7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcInJlZHJhd0hlbHBDYW52YXNcIiwgKCkgPT4gdGhpcy5jYW52YXNSZWRyYXcoKSk7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcImRyYXdIZWxwU3F1YXJlXCIsIChlKSA9PiB0aGlzLmRyYXdTcXVhcmUoZSkpO1xyXG4gICAgfSxcclxuICAgIGNhbnZhc1JlZHJhdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmRyYXdPdXRsaW5pbmcoKTtcclxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoXCJkcmF3SGVscExpbmVzXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0hlbHBMaW5lcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3T3V0bGluaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuZWwuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMubW9kZWwuZ2V0KFwiaGlnaGxpZ2h0SGVscExpbmVDb2xvclwiKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnJlY3QodGhpcy5tb2RlbC5nZXQoXCJwb3NpdGlvblwiKS54ICsgMC41LCB0aGlzLm1vZGVsLmdldChcInBvc2l0aW9uXCIpLnkgKyAwLjUsIHRoaXMubW9kZWwuZ2V0KFwid2lkdGhcIikgKiB0aGlzLm1vZGVsLmdldChcInNjYWxlXCIpLCB0aGlzLm1vZGVsLmdldChcImhlaWdodFwiKSAqIHRoaXMubW9kZWwuZ2V0KFwic2NhbGVcIikpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJDYW52YXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgYyA9IHRoaXMuZWw7XHJcbiAgICAgICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuNDtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLiRlbC53aWR0aCgpLCB0aGlzLiRlbC5oZWlnaHQoKSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH0sXHJcbiAgICBkcmF3SGVscExpbmVzKCkge1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLmVsLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLm1vZGVsLmdldChcInNjYWxlXCIpO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMubW9kZWwuZ2V0KFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5tb2RlbC5nZXQoXCJ3aWR0aFwiKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tb2RlbC5nZXQoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5tb2RlbC5nZXQoXCJkZWZhdWx0SGVscExpbmVDb2xvclwiKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB3aWR0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9zaXRpb24ueCArIGkgKiBzY2FsZSArIDAuNSwgcG9zaXRpb24ueSArIDAuNSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8ocG9zaXRpb24ueCArIGkgKiBzY2FsZSArIDAuNSwgcG9zaXRpb24ueSArIGhlaWdodCAqIHNjYWxlICsgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBoZWlnaHQ7IGorKykge1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHBvc2l0aW9uLnggKyAwLjUsIHBvc2l0aW9uLnkgKyBqICogc2NhbGUgKyAwLjUpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHBvc2l0aW9uLnggKyB3aWR0aCAqIHNjYWxlICsgMC41LCBwb3NpdGlvbi55ICsgaiAqIHNjYWxlICsgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5tb2RlbC5nZXQoXCJoaWdobGlnaHRIZWxwTGluZUNvbG9yXCIpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8ocG9zaXRpb24ueCArIE1hdGguZmxvb3Iod2lkdGggLyAyKSAqIHNjYWxlICsgMC41LCBwb3NpdGlvbi55ICsgMC41KTtcclxuICAgICAgICBjdHgubGluZVRvKHBvc2l0aW9uLnggKyBNYXRoLmZsb29yKHdpZHRoIC8gMikgKiBzY2FsZSArIDAuNSwgcG9zaXRpb24ueSArIGhlaWdodCAqIHNjYWxlICsgMC41KTtcclxuICAgICAgICBjdHgubW92ZVRvKHBvc2l0aW9uLnggKyAwLjUsIHBvc2l0aW9uLnkgKyBNYXRoLmZsb29yKGhlaWdodCAvIDIpICogc2NhbGUgKyAwLjUpO1xyXG4gICAgICAgIGN0eC5saW5lVG8ocG9zaXRpb24ueCArIHdpZHRoICogc2NhbGUgKyAwLjUsIHBvc2l0aW9uLnkgKyBNYXRoLmZsb29yKGhlaWdodCAvIDIpICogc2NhbGUgKyAwLjUpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9LFxyXG4gICAgZHJhd1NxdWFyZTogZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMubW9kZWwuZ2V0KFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5tb2RlbC5nZXQoXCJzY2FsZVwiKTtcclxuICAgICAgICBsZXQgY3R4ID0gdGhpcy5lbC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGUuY29sb3I7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdChwb3NpdGlvbi54ICsgZS54KiBzY2FsZSwgIHBvc2l0aW9uLnkgKyBlLnkgKiBzY2FsZSwgZS53ICogc2NhbGUsIGUuaCAqIHNjYWxlKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd091dGxpbmluZygpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldChcImRyYXdIZWxwTGluZXNcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3SGVscExpbmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbHBDYW52YXM7XHJcbiJdfQ==

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _DataStreamHandler = __webpack_require__(3);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	var _ChatInput = __webpack_require__(10);

	var _ChatInput2 = _interopRequireDefault(_ChatInput);

	var _SendButton = __webpack_require__(11);

	var _SendButton2 = _interopRequireDefault(_SendButton);

	var _Messages = __webpack_require__(12);

	var _Messages2 = _interopRequireDefault(_Messages);

	var _backbone = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Chat = _backbone.View.extend({
	    initialize: function initialize() {
	        var _this = this;

	        App.events.on('sendMessage', function () {
	            return _this.sendMessage();
	        });

	        this.textInput = new _ChatInput2.default({ el: '#chatInput' });
	        new _SendButton2.default({ el: '#sendMessage' });
	        this.messages = new _Messages2.default({ el: '#messages' });
	    },
	    sendMessage: function sendMessage() {
	        var text = this.textInput.popData();
	        if (text != '') {
	            _DataStreamHandler2.default.sendMessage(text);
	            this.messages.handleMessage({ type: 'self', message: text });
	        }
	    }
	});
	exports.default = Chat;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNoYXRcXENoYXQuanMiXSwibmFtZXMiOlsiQ2hhdCIsImV4dGVuZCIsImluaXRpYWxpemUiLCJBcHAiLCJldmVudHMiLCJvbiIsInNlbmRNZXNzYWdlIiwidGV4dElucHV0IiwiZWwiLCJtZXNzYWdlcyIsInRleHQiLCJwb3BEYXRhIiwiaGFuZGxlTWVzc2FnZSIsInR5cGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0EsSUFBTUEsT0FBTyxlQUFLQyxNQUFMLENBQVk7QUFDckJDLGdCQUFZLHNCQUFVO0FBQUE7O0FBQ2xCQyxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxhQUFkLEVBQTZCO0FBQUEsbUJBQU0sTUFBS0MsV0FBTCxFQUFOO0FBQUEsU0FBN0I7O0FBRUEsYUFBS0MsU0FBTCxHQUFpQix3QkFBYyxFQUFDQyxJQUFJLFlBQUwsRUFBZCxDQUFqQjtBQUNBLGlDQUFlLEVBQUNBLElBQUksY0FBTCxFQUFmO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQix1QkFBb0IsRUFBQ0QsSUFBSSxXQUFMLEVBQXBCLENBQWhCO0FBQ0gsS0FQb0I7QUFRckJGLGlCQUFhLHVCQUFXO0FBQ3BCLFlBQUlJLE9BQU8sS0FBS0gsU0FBTCxDQUFlSSxPQUFmLEVBQVg7QUFDQSxZQUFJRCxRQUFRLEVBQVosRUFBZ0I7QUFDWix3Q0FBa0JKLFdBQWxCLENBQThCSSxJQUE5QjtBQUNBLGlCQUFLRCxRQUFMLENBQWNHLGFBQWQsQ0FBNEIsRUFBQ0MsTUFBTSxNQUFQLEVBQWVDLFNBQVNKLElBQXhCLEVBQTVCO0FBQ0g7QUFDSjtBQWRvQixDQUFaLENBQWI7a0JBZ0JlVixJIiwiZmlsZSI6IkNoYXQuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi4vLi4vRGF0YVN0cmVhbUhhbmRsZXJcIjtcclxuaW1wb3J0IENoYXRJbnB1dCBmcm9tIFwiLi9DaGF0SW5wdXRcIjtcclxuaW1wb3J0IFNlbmRCdXR0b24gZnJvbSBcIi4vU2VuZEJ1dHRvblwiO1xyXG5pbXBvcnQgTWVzc2FnZXNEaXNwbGF5IGZyb20gXCIuL01lc3NhZ2VzXCI7XHJcbmltcG9ydCB7Vmlld30gZnJvbSBcImJhY2tib25lXCI7XHJcblxyXG5cclxuY29uc3QgQ2hhdCA9IFZpZXcuZXh0ZW5kKHtcclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbignc2VuZE1lc3NhZ2UnLCAoKSA9PiB0aGlzLnNlbmRNZXNzYWdlKCkpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHRJbnB1dCA9IG5ldyBDaGF0SW5wdXQoe2VsOiAnI2NoYXRJbnB1dCd9KTtcclxuICAgICAgICBuZXcgU2VuZEJ1dHRvbih7ZWw6ICcjc2VuZE1lc3NhZ2UnfSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNZXNzYWdlc0Rpc3BsYXkoe2VsOiAnI21lc3NhZ2VzJ30pO1xyXG4gICAgfSxcclxuICAgIHNlbmRNZXNzYWdlIDpmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMudGV4dElucHV0LnBvcERhdGEoKTtcclxuICAgICAgICBpZiAodGV4dCAhPSAnJykge1xyXG4gICAgICAgICAgICBEYXRhU3RyZWFtSGFuZGxlci5zZW5kTWVzc2FnZSh0ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5oYW5kbGVNZXNzYWdlKHt0eXBlOiAnc2VsZicsIG1lc3NhZ2U6IHRleHR9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBDaGF0OyJdfQ==

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var ChatInput = _backbone.View.extend({
	    events: {
	        'keydown': 'keyHandler'
	    },
	    keyHandler: function keyHandler(e) {
	        if (e.keyCode == 13) {
	            App.events.trigger('sendMessage');
	        }
	    },
	    popData: function popData() {
	        var tmp = this.$el.val();
	        this.$el.val('');
	        return tmp;
	    }
	});
	exports.default = ChatInput;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNoYXRcXENoYXRJbnB1dC5qcyJdLCJuYW1lcyI6WyJDaGF0SW5wdXQiLCJleHRlbmQiLCJldmVudHMiLCJrZXlIYW5kbGVyIiwiZSIsImtleUNvZGUiLCJBcHAiLCJ0cmlnZ2VyIiwicG9wRGF0YSIsInRtcCIsIiRlbCIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxlQUFLQyxNQUFMLENBQVk7QUFDMUJDLFlBQVE7QUFDSixtQkFBVztBQURQLEtBRGtCO0FBSTFCQyxnQkFBWSxvQkFBU0MsQ0FBVCxFQUFXO0FBQ25CLFlBQUdBLEVBQUVDLE9BQUYsSUFBYSxFQUFoQixFQUFtQjtBQUNmQyxnQkFBSUosTUFBSixDQUFXSyxPQUFYLENBQW1CLGFBQW5CO0FBQ0g7QUFDSixLQVJ5QjtBQVMxQkMsYUFBUyxtQkFBVTtBQUNmLFlBQUlDLE1BQU0sS0FBS0MsR0FBTCxDQUFTQyxHQUFULEVBQVY7QUFDQSxhQUFLRCxHQUFMLENBQVNDLEdBQVQsQ0FBYSxFQUFiO0FBQ0EsZUFBT0YsR0FBUDtBQUNIO0FBYnlCLENBQVosQ0FBbEI7a0JBZWVULFMiLCJmaWxlIjoiQ2hhdElucHV0LmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xyXG5cclxuY29uc3QgQ2hhdElucHV0ID0gVmlldy5leHRlbmQoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgJ2tleWRvd24nOiAna2V5SGFuZGxlcidcclxuICAgIH0sXHJcbiAgICBrZXlIYW5kbGVyOiBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZihlLmtleUNvZGUgPT0gMTMpe1xyXG4gICAgICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoJ3NlbmRNZXNzYWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBvcERhdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuJGVsLnZhbCgpO1xyXG4gICAgICAgIHRoaXMuJGVsLnZhbCgnJyk7XHJcbiAgICAgICAgcmV0dXJuIHRtcDtcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IENoYXRJbnB1dFxyXG5cclxuIl19

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var SendButton = _backbone.View.extend({
	    events: {
	        'click': 'clickHandler'
	    },
	    clickHandler: function clickHandler() {
	        App.events.trigger('sendMessage');
	    }
	});
	exports.default = SendButton;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNoYXRcXFNlbmRCdXR0b24uanMiXSwibmFtZXMiOlsiU2VuZEJ1dHRvbiIsImV4dGVuZCIsImV2ZW50cyIsImNsaWNrSGFuZGxlciIsIkFwcCIsInRyaWdnZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsZUFBS0MsTUFBTCxDQUFZO0FBQzNCQyxZQUFRO0FBQ0osaUJBQVM7QUFETCxLQURtQjtBQUkzQkMsa0JBQWMsd0JBQVU7QUFDcEJDLFlBQUlGLE1BQUosQ0FBV0csT0FBWCxDQUFtQixhQUFuQjtBQUNIO0FBTjBCLENBQVosQ0FBbkI7a0JBUWVMLFUiLCJmaWxlIjoiU2VuZEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcclxuXHJcbmNvbnN0IFNlbmRCdXR0b24gPSBWaWV3LmV4dGVuZCh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICAnY2xpY2snOiAnY2xpY2tIYW5kbGVyJ1xyXG4gICAgfSxcclxuICAgIGNsaWNrSGFuZGxlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoJ3NlbmRNZXNzYWdlJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBTZW5kQnV0dG9uXHJcbiJdfQ==

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var _underscore = __webpack_require__(7);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Messages = _backbone.View.extend({
	    initialize: function initialize() {
	        var _this = this;

	        App.events.on('receivedMessage', function (e) {
	            return _this.handleMessage(e);
	        });
	        _underscore2.default.templateSettings.variable = "data";
	        this.template = _underscore2.default.template($('#message-template').html());
	    },
	    handleMessage: function handleMessage(e) {
	        this.$el.append(this.template(e));

	        this.el.scrollTop = this.el.scrollHeight;
	        if (e.type != 'self') {
	            new Audio('https://www.freesound.org//data/previews/341/341868_6114721-lq.ogg').play();
	        }
	    }
	});
	exports.default = Messages;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNoYXRcXE1lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiZXh0ZW5kIiwiaW5pdGlhbGl6ZSIsIkFwcCIsImV2ZW50cyIsIm9uIiwiZSIsImhhbmRsZU1lc3NhZ2UiLCJ0ZW1wbGF0ZVNldHRpbmdzIiwidmFyaWFibGUiLCJ0ZW1wbGF0ZSIsIiQiLCJodG1sIiwiJGVsIiwiYXBwZW5kIiwiZWwiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJ0eXBlIiwiQXVkaW8iLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxlQUFLQyxNQUFMLENBQVk7QUFDekJDLGdCQUFZLHNCQUFVO0FBQUE7O0FBQ2xCQyxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxpQkFBZCxFQUFpQyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0MsYUFBTCxDQUFtQkQsQ0FBbkIsQ0FBUDtBQUFBLFNBQWpDO0FBQ0EsNkJBQUVFLGdCQUFGLENBQW1CQyxRQUFuQixHQUE4QixNQUE5QjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0IscUJBQUVBLFFBQUYsQ0FBV0MsRUFBRSxtQkFBRixFQUF1QkMsSUFBdkIsRUFBWCxDQUFoQjtBQUNILEtBTHdCO0FBTXpCTCxpQkFOeUIseUJBTVhELENBTlcsRUFNUjtBQUNiLGFBQUtPLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixLQUFLSixRQUFMLENBQWNKLENBQWQsQ0FBaEI7O0FBRUEsYUFBS1MsRUFBTCxDQUFRQyxTQUFSLEdBQW9CLEtBQUtELEVBQUwsQ0FBUUUsWUFBNUI7QUFDQSxZQUFHWCxFQUFFWSxJQUFGLElBQVUsTUFBYixFQUFvQjtBQUNoQixnQkFBSUMsS0FBSixDQUFVLG9FQUFWLEVBQWdGQyxJQUFoRjtBQUNIO0FBQ0o7QUFid0IsQ0FBWixDQUFqQjtrQkFlZXBCLFEiLCJmaWxlIjoiTWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vmlld30gZnJvbSBcImJhY2tib25lXCI7XHJcbmltcG9ydCBfIGZyb20gXCJ1bmRlcnNjb3JlXCI7XHJcblxyXG5jb25zdCBNZXNzYWdlcyA9IFZpZXcuZXh0ZW5kKHtcclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbigncmVjZWl2ZWRNZXNzYWdlJywgKGUpID0+IHRoaXMuaGFuZGxlTWVzc2FnZShlKSk7XHJcbiAgICAgICAgXy50ZW1wbGF0ZVNldHRpbmdzLnZhcmlhYmxlID0gXCJkYXRhXCI7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJCgnI21lc3NhZ2UtdGVtcGxhdGUnKS5odG1sKCkpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZU1lc3NhZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLnRlbXBsYXRlKGUpKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbC5zY3JvbGxUb3AgPSB0aGlzLmVsLnNjcm9sbEhlaWdodDtcclxuICAgICAgICBpZihlLnR5cGUgIT0gJ3NlbGYnKXtcclxuICAgICAgICAgICAgbmV3IEF1ZGlvKCdodHRwczovL3d3dy5mcmVlc291bmQub3JnLy9kYXRhL3ByZXZpZXdzLzM0MS8zNDE4NjhfNjExNDcyMS1scS5vZ2cnKS5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXNcclxuXHJcbiJdfQ==

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Pencil = __webpack_require__(14);

	var _Pencil2 = _interopRequireDefault(_Pencil);

	var _Eraser = __webpack_require__(16);

	var _Eraser2 = _interopRequireDefault(_Eraser);

	var _MoveOnly = __webpack_require__(17);

	var _MoveOnly2 = _interopRequireDefault(_MoveOnly);

	var _Mirror = __webpack_require__(18);

	var _Mirror2 = _interopRequireDefault(_Mirror);

	var _Bucket = __webpack_require__(19);

	var _Bucket2 = _interopRequireDefault(_Bucket);

	var _backbone = __webpack_require__(6);

	var _underscore = __webpack_require__(7);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Toolbar = _backbone.View.extend({
	    events: {
	        "click .tool": "handleClick"
	    },
	    initialize: function initialize() {
	        var tools = this.model.get('tools');

	        tools.push(new _Pencil2.default(this.model));
	        tools.push(new _Eraser2.default(this.model));
	        tools.push(new _MoveOnly2.default(this.model));
	        tools.push(new _Mirror2.default(this.model));
	        tools.push(new _Bucket2.default(this.model));

	        this.model.set('tools', tools);

	        _underscore2.default.templateSettings.variable = "tools";
	        this.template = _underscore2.default.template($('#toolbar-template').html());
	        this.$el.html(this.template(this.model.get("tools")));

	        this.selectTool(0);
	    },
	    handleClick: function handleClick(e) {
	        this.selectTool(e.currentTarget.dataset.index);
	    },
	    selectTool: function selectTool(index) {
	        this.model.set('selectedTool', this.model.get('tools')[index]);
	        $('.tool', this.el).removeClass('selected-tool');
	        $('.tool', this.el).eq(index).addClass('selected-tool');
	        this.model.get('selectedTool').onClick();
	    }
	});
	exports.default = Toolbar;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcdG9vbHNcXFRvb2xiYXIuanMiXSwibmFtZXMiOlsiVG9vbGJhciIsImV4dGVuZCIsImV2ZW50cyIsImluaXRpYWxpemUiLCJ0b29scyIsIm1vZGVsIiwiZ2V0IiwicHVzaCIsInNldCIsInRlbXBsYXRlU2V0dGluZ3MiLCJ2YXJpYWJsZSIsInRlbXBsYXRlIiwiJCIsImh0bWwiLCIkZWwiLCJzZWxlY3RUb29sIiwiaGFuZGxlQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImVsIiwicmVtb3ZlQ2xhc3MiLCJlcSIsImFkZENsYXNzIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLGVBQUtDLE1BQUwsQ0FBWTtBQUN4QkMsWUFBUTtBQUNKLHVCQUFlO0FBRFgsS0FEZ0I7QUFJeEJDLGdCQUFZLHNCQUFZO0FBQ3BCLFlBQUlDLFFBQVEsS0FBS0MsS0FBTCxDQUFXQyxHQUFYLENBQWUsT0FBZixDQUFaOztBQUVBRixjQUFNRyxJQUFOLENBQVcscUJBQVcsS0FBS0YsS0FBaEIsQ0FBWDtBQUNBRCxjQUFNRyxJQUFOLENBQVcscUJBQVcsS0FBS0YsS0FBaEIsQ0FBWDtBQUNBRCxjQUFNRyxJQUFOLENBQVcsdUJBQWEsS0FBS0YsS0FBbEIsQ0FBWDtBQUNBRCxjQUFNRyxJQUFOLENBQVcscUJBQVcsS0FBS0YsS0FBaEIsQ0FBWDtBQUNBRCxjQUFNRyxJQUFOLENBQVcscUJBQVcsS0FBS0YsS0FBaEIsQ0FBWDs7QUFFQSxhQUFLQSxLQUFMLENBQVdHLEdBQVgsQ0FBZSxPQUFmLEVBQXdCSixLQUF4Qjs7QUFFQSw2QkFBRUssZ0JBQUYsQ0FBbUJDLFFBQW5CLEdBQThCLE9BQTlCO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixxQkFBRUEsUUFBRixDQUFXQyxFQUFFLG1CQUFGLEVBQXVCQyxJQUF2QixFQUFYLENBQWhCO0FBQ0EsYUFBS0MsR0FBTCxDQUFTRCxJQUFULENBQWMsS0FBS0YsUUFBTCxDQUFjLEtBQUtOLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE9BQWYsQ0FBZCxDQUFkOztBQUVBLGFBQUtTLFVBQUwsQ0FBZ0IsQ0FBaEI7QUFDSCxLQXBCdUI7QUFxQnhCQyxpQkFBYSxxQkFBVUMsQ0FBVixFQUFhO0FBQ3RCLGFBQUtGLFVBQUwsQ0FBZ0JFLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUF4QztBQUNILEtBdkJ1QjtBQXdCeEJMLGdCQUFZLG9CQUFVSyxLQUFWLEVBQWlCO0FBQ3pCLGFBQUtmLEtBQUwsQ0FBV0csR0FBWCxDQUFlLGNBQWYsRUFBK0IsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWUsT0FBZixFQUF3QmMsS0FBeEIsQ0FBL0I7QUFDQVIsVUFBRSxPQUFGLEVBQVcsS0FBS1MsRUFBaEIsRUFBb0JDLFdBQXBCLENBQWdDLGVBQWhDO0FBQ0FWLFVBQUUsT0FBRixFQUFXLEtBQUtTLEVBQWhCLEVBQW9CRSxFQUFwQixDQUF1QkgsS0FBdkIsRUFBOEJJLFFBQTlCLENBQXVDLGVBQXZDO0FBQ0EsYUFBS25CLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLGNBQWYsRUFBK0JtQixPQUEvQjtBQUNIO0FBN0J1QixDQUFaLENBQWhCO2tCQStCZXpCLE8iLCJmaWxlIjoiVG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi9QZW5jaWxcIjtcclxuaW1wb3J0IEVyYXNlciBmcm9tIFwiLi9FcmFzZXJcIjtcclxuaW1wb3J0IE1vdmVPbmx5IGZyb20gXCIuL01vdmVPbmx5XCI7XHJcbmltcG9ydCBNaXJyb3IgZnJvbSBcIi4vTWlycm9yXCI7XHJcbmltcG9ydCBCdWNrZXQgZnJvbSBcIi4vQnVja2V0XCI7XHJcbmltcG9ydCB7Vmlld30gZnJvbSBcImJhY2tib25lXCI7XHJcbmltcG9ydCBfIGZyb20gXCJ1bmRlcnNjb3JlXCI7XHJcblxyXG5jb25zdCBUb29sYmFyID0gVmlldy5leHRlbmQoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgXCJjbGljayAudG9vbFwiOiBcImhhbmRsZUNsaWNrXCJcclxuICAgIH0sXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHRvb2xzID0gdGhpcy5tb2RlbC5nZXQoJ3Rvb2xzJyk7XHJcblxyXG4gICAgICAgIHRvb2xzLnB1c2gobmV3IFBlbmNpbCh0aGlzLm1vZGVsKSk7XHJcbiAgICAgICAgdG9vbHMucHVzaChuZXcgRXJhc2VyKHRoaXMubW9kZWwpKTtcclxuICAgICAgICB0b29scy5wdXNoKG5ldyBNb3ZlT25seSh0aGlzLm1vZGVsKSk7XHJcbiAgICAgICAgdG9vbHMucHVzaChuZXcgTWlycm9yKHRoaXMubW9kZWwpKTtcclxuICAgICAgICB0b29scy5wdXNoKG5ldyBCdWNrZXQodGhpcy5tb2RlbCkpO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsLnNldCgndG9vbHMnLCB0b29scyk7XHJcblxyXG4gICAgICAgIF8udGVtcGxhdGVTZXR0aW5ncy52YXJpYWJsZSA9IFwidG9vbHNcIjtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKCcjdG9vbGJhci10ZW1wbGF0ZScpLmh0bWwoKSk7XHJcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMubW9kZWwuZ2V0KFwidG9vbHNcIikpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RUb29sKDApO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0VG9vbChlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0VG9vbDogZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3NlbGVjdGVkVG9vbCcsIHRoaXMubW9kZWwuZ2V0KCd0b29scycpW2luZGV4XSk7XHJcbiAgICAgICAgJCgnLnRvb2wnLCB0aGlzLmVsKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQtdG9vbCcpO1xyXG4gICAgICAgICQoJy50b29sJywgdGhpcy5lbCkuZXEoaW5kZXgpLmFkZENsYXNzKCdzZWxlY3RlZC10b29sJyk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5nZXQoJ3NlbGVjdGVkVG9vbCcpLm9uQ2xpY2soKTtcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7Il19

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(15);

	var _Tool3 = _interopRequireDefault(_Tool2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pencil = function (_Tool) {
	    _inherits(Pencil, _Tool);

	    function Pencil(model) {
	        _classCallCheck(this, Pencil);

	        var _this = _possibleConstructorReturn(this, (Pencil.__proto__ || Object.getPrototypeOf(Pencil)).call(this, model));

	        _this.name = 'Pencil';
	        return _this;
	    }

	    _createClass(Pencil, [{
	        key: "dragHandler",
	        value: function dragHandler(e) {
	            var indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	            var pixels = this.model.get("pixels");
	            var selectedColor = this.model.get("selectedColor");
	            if (indices) {
	                if (pixels[indices.x][indices.y] != selectedColor) {
	                    App.events.trigger("toolUpdatePixels", [{
	                        x: indices.x,
	                        y: indices.y,
	                        color: selectedColor
	                    }]);
	                }
	            }
	        }
	    }]);

	    return Pencil;
	}(_Tool3.default);

	exports.default = Pencil;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcdG9vbHNcXFBlbmNpbC5qcyJdLCJuYW1lcyI6WyJQZW5jaWwiLCJtb2RlbCIsIm5hbWUiLCJlIiwiaW5kaWNlcyIsImlucHV0VG9QaXhlbEluZGV4Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwaXhlbHMiLCJnZXQiLCJzZWxlY3RlZENvbG9yIiwieCIsInkiLCJBcHAiLCJldmVudHMiLCJ0cmlnZ2VyIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLG9IQUNWQSxLQURVOztBQUVoQixjQUFLQyxJQUFMLEdBQVksUUFBWjtBQUZnQjtBQUduQjs7OztvQ0FDWUMsQyxFQUFHO0FBQ1osZ0JBQUlDLFVBQVUsS0FBS0gsS0FBTCxDQUFXSSxpQkFBWCxDQUE2QkYsRUFBRUcsT0FBL0IsRUFBd0NILEVBQUVJLE9BQTFDLENBQWQ7QUFDQSxnQkFBSUMsU0FBUyxLQUFLUCxLQUFMLENBQVdRLEdBQVgsQ0FBZSxRQUFmLENBQWI7QUFDQSxnQkFBSUMsZ0JBQWdCLEtBQUtULEtBQUwsQ0FBV1EsR0FBWCxDQUFlLGVBQWYsQ0FBcEI7QUFDQSxnQkFBSUwsT0FBSixFQUFhO0FBQ1Qsb0JBQUlJLE9BQU9KLFFBQVFPLENBQWYsRUFBa0JQLFFBQVFRLENBQTFCLEtBQWdDRixhQUFwQyxFQUFtRDtBQUMvQ0csd0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixrQkFBbkIsRUFBdUMsQ0FBQztBQUNwQ0osMkJBQUdQLFFBQVFPLENBRHlCO0FBRXBDQywyQkFBR1IsUUFBUVEsQ0FGeUI7QUFHcENJLCtCQUFPTjtBQUg2QixxQkFBRCxDQUF2QztBQUtIO0FBQ0o7QUFDSjs7Ozs7O2tCQUVVVixNIiwiZmlsZSI6IlBlbmNpbC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvb2wgZnJvbSBcIi4vVG9vbFwiO1xyXG5cclxuY2xhc3MgUGVuY2lsIGV4dGVuZHMgVG9vbHtcclxuICAgIGNvbnN0cnVjdG9yIChtb2RlbCkge1xyXG4gICAgICAgIHN1cGVyKG1vZGVsKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnUGVuY2lsJztcclxuICAgIH1cclxuICAgIGRyYWdIYW5kbGVyIChlKSB7XHJcbiAgICAgICAgbGV0IGluZGljZXMgPSB0aGlzLm1vZGVsLmlucHV0VG9QaXhlbEluZGV4KGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICBsZXQgcGl4ZWxzID0gdGhpcy5tb2RlbC5nZXQoXCJwaXhlbHNcIik7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkQ29sb3IgPSB0aGlzLm1vZGVsLmdldChcInNlbGVjdGVkQ29sb3JcIik7XHJcbiAgICAgICAgaWYgKGluZGljZXMpIHtcclxuICAgICAgICAgICAgaWYgKHBpeGVsc1tpbmRpY2VzLnhdW2luZGljZXMueV0gIT0gc2VsZWN0ZWRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwidG9vbFVwZGF0ZVBpeGVsc1wiLCBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGluZGljZXMueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBpbmRpY2VzLnksXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHNlbGVjdGVkQ29sb3JcclxuICAgICAgICAgICAgICAgIH1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQZW5jaWw7Il19

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tool = function () {
	    function Tool(model) {
	        _classCallCheck(this, Tool);

	        this.model = model;
	    }

	    _createClass(Tool, [{
	        key: "onClick",
	        value: function onClick(e) {}
	    }, {
	        key: "dragHandler",
	        value: function dragHandler(e) {}
	    }, {
	        key: "mouseDownHandler",
	        value: function mouseDownHandler(e) {
	            this.dragHandler(e);
	        }
	    }, {
	        key: "mouseUpHandler",
	        value: function mouseUpHandler(e) {}
	    }, {
	        key: "mouseMoveHandler",
	        value: function mouseMoveHandler(e) {}
	    }]);

	    return Tool;
	}();

	exports.default = Tool;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcdG9vbHNcXFRvb2wuanMiXSwibmFtZXMiOlsiVG9vbCIsIm1vZGVsIiwiZSIsImRyYWdIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7QUFDRixrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUNkLGFBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNIOzs7O2dDQUNPQyxDLEVBQUcsQ0FDVjs7O29DQUNXQSxDLEVBQUUsQ0FFYjs7O3lDQUNnQkEsQyxFQUFFO0FBQ2YsaUJBQUtDLFdBQUwsQ0FBaUJELENBQWpCO0FBQ0g7Ozt1Q0FDY0EsQyxFQUFFLENBRWhCOzs7eUNBQ2dCQSxDLEVBQUUsQ0FFbEI7Ozs7OztrQkFFVUYsSSIsImZpbGUiOiJUb29sLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb29se1xyXG4gICAgY29uc3RydWN0b3IobW9kZWwpe1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgIH1cclxuICAgIG9uQ2xpY2soZSkge1xyXG4gICAgfTtcclxuICAgIGRyYWdIYW5kbGVyKGUpe1xyXG5cclxuICAgIH07XHJcbiAgICBtb3VzZURvd25IYW5kbGVyKGUpe1xyXG4gICAgICAgIHRoaXMuZHJhZ0hhbmRsZXIoZSk7XHJcbiAgICB9O1xyXG4gICAgbW91c2VVcEhhbmRsZXIoZSl7XHJcblxyXG4gICAgfTtcclxuICAgIG1vdXNlTW92ZUhhbmRsZXIoZSl7XHJcblxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb29sOyJdfQ==

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(15);

	var _Tool3 = _interopRequireDefault(_Tool2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Eraser = function (_Tool) {
	    _inherits(Eraser, _Tool);

	    function Eraser(model) {
	        _classCallCheck(this, Eraser);

	        var _this = _possibleConstructorReturn(this, (Eraser.__proto__ || Object.getPrototypeOf(Eraser)).call(this, model));

	        _this.name = 'Eraser';
	        return _this;
	    }

	    _createClass(Eraser, [{
	        key: "dragHandler",
	        value: function dragHandler(e) {
	            var indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	            var pixels = this.model.get("pixels");
	            if (indices) {
	                if (pixels[indices.x][indices.y] != 0) App.events.trigger("toolUpdatePixels", [{ x: indices.x, y: indices.y, color: 0 }]);
	            }
	        }
	    }]);

	    return Eraser;
	}(_Tool3.default);

	exports.default = Eraser;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcdG9vbHNcXEVyYXNlci5qcyJdLCJuYW1lcyI6WyJFcmFzZXIiLCJtb2RlbCIsIm5hbWUiLCJlIiwiaW5kaWNlcyIsImlucHV0VG9QaXhlbEluZGV4Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwaXhlbHMiLCJnZXQiLCJ4IiwieSIsIkFwcCIsImV2ZW50cyIsInRyaWdnZXIiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1JBLEtBRFE7O0FBRWQsY0FBS0MsSUFBTCxHQUFZLFFBQVo7QUFGYztBQUdqQjs7OztvQ0FDV0MsQyxFQUFHO0FBQ1gsZ0JBQUlDLFVBQVUsS0FBS0gsS0FBTCxDQUFXSSxpQkFBWCxDQUE2QkYsRUFBRUcsT0FBL0IsRUFBd0NILEVBQUVJLE9BQTFDLENBQWQ7QUFDQSxnQkFBSUMsU0FBUyxLQUFLUCxLQUFMLENBQVdRLEdBQVgsQ0FBZSxRQUFmLENBQWI7QUFDQSxnQkFBSUwsT0FBSixFQUFhO0FBQ1Qsb0JBQUdJLE9BQU9KLFFBQVFNLENBQWYsRUFBa0JOLFFBQVFPLENBQTFCLEtBQWdDLENBQW5DLEVBQ0FDLElBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixrQkFBbkIsRUFBdUMsQ0FBQyxFQUFDSixHQUFHTixRQUFRTSxDQUFaLEVBQWVDLEdBQUdQLFFBQVFPLENBQTFCLEVBQTZCSSxPQUFPLENBQXBDLEVBQUQsQ0FBdkM7QUFDSDtBQUNKOzs7Ozs7a0JBRVVmLE0iLCJmaWxlIjoiRXJhc2VyLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9vbCBmcm9tIFwiLi9Ub29sXCI7XHJcblxyXG5jbGFzcyBFcmFzZXIgZXh0ZW5kcyBUb29se1xyXG4gICAgY29uc3RydWN0b3IobW9kZWwpe1xyXG4gICAgICAgIHN1cGVyKG1vZGVsKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnRXJhc2VyJztcclxuICAgIH07XHJcbiAgICBkcmFnSGFuZGxlcihlKSB7XHJcbiAgICAgICAgbGV0IGluZGljZXMgPSB0aGlzLm1vZGVsLmlucHV0VG9QaXhlbEluZGV4KGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICBsZXQgcGl4ZWxzID0gdGhpcy5tb2RlbC5nZXQoXCJwaXhlbHNcIik7XHJcbiAgICAgICAgaWYgKGluZGljZXMpIHtcclxuICAgICAgICAgICAgaWYocGl4ZWxzW2luZGljZXMueF1baW5kaWNlcy55XSAhPSAwKVxyXG4gICAgICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJ0b29sVXBkYXRlUGl4ZWxzXCIsIFt7eDogaW5kaWNlcy54LCB5OiBpbmRpY2VzLnksIGNvbG9yOiAwfV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBFcmFzZXI7Il19

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(15);

	var _Tool3 = _interopRequireDefault(_Tool2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MoveOnly = function (_Tool) {
	    _inherits(MoveOnly, _Tool);

	    function MoveOnly(model) {
	        _classCallCheck(this, MoveOnly);

	        var _this = _possibleConstructorReturn(this, (MoveOnly.__proto__ || Object.getPrototypeOf(MoveOnly)).call(this, model));

	        _this.name = 'Move';
	        return _this;
	    }

	    _createClass(MoveOnly, [{
	        key: "dragHandler",
	        value: function dragHandler(e) {
	            this.model.reposition(e.offsetX - this.model.get("lastMousePos").x, e.offsetY - this.model.get("lastMousePos").y);
	            App.events.trigger("canvasRedraw");
	        }
	    }]);

	    return MoveOnly;
	}(_Tool3.default);

	exports.default = MoveOnly;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcdG9vbHNcXE1vdmVPbmx5LmpzIl0sIm5hbWVzIjpbIk1vdmVPbmx5IiwibW9kZWwiLCJuYW1lIiwiZSIsInJlcG9zaXRpb24iLCJvZmZzZXRYIiwiZ2V0IiwieCIsIm9mZnNldFkiLCJ5IiwiQXBwIiwiZXZlbnRzIiwidHJpZ2dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsSUFBTCxHQUFZLE1BQVo7QUFGZTtBQUdsQjs7OztvQ0FDWUMsQyxFQUFHO0FBQ1osaUJBQUtGLEtBQUwsQ0FBV0csVUFBWCxDQUFzQkQsRUFBRUUsT0FBRixHQUFZLEtBQUtKLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLGNBQWYsRUFBK0JDLENBQWpFLEVBQW9FSixFQUFFSyxPQUFGLEdBQVksS0FBS1AsS0FBTCxDQUFXSyxHQUFYLENBQWUsY0FBZixFQUErQkcsQ0FBL0c7QUFDQUMsZ0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixjQUFuQjtBQUNIOzs7Ozs7a0JBRVVaLFEiLCJmaWxlIjoiTW92ZU9ubHkuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb29sIGZyb20gXCIuL1Rvb2xcIjtcclxuXHJcbmNsYXNzIE1vdmVPbmx5IGV4dGVuZHMgVG9vbHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIobW9kZWwpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdNb3ZlJztcclxuICAgIH1cclxuICAgIGRyYWdIYW5kbGVyIChlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5yZXBvc2l0aW9uKGUub2Zmc2V0WCAtIHRoaXMubW9kZWwuZ2V0KFwibGFzdE1vdXNlUG9zXCIpLngsIGUub2Zmc2V0WSAtIHRoaXMubW9kZWwuZ2V0KFwibGFzdE1vdXNlUG9zXCIpLnkpO1xyXG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcImNhbnZhc1JlZHJhd1wiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb3ZlT25seTsiXX0=

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(15);

	var _Tool3 = _interopRequireDefault(_Tool2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Mirror = function (_Tool) {
	    _inherits(Mirror, _Tool);

	    function Mirror(model) {
	        _classCallCheck(this, Mirror);

	        var _this = _possibleConstructorReturn(this, (Mirror.__proto__ || Object.getPrototypeOf(Mirror)).call(this, model));

	        _this.name = 'Mirror';
	        return _this;
	    }

	    _createClass(Mirror, [{
	        key: "mouseDownHandler",
	        value: function mouseDownHandler(e) {
	            var indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	            if (indices) {
	                var mirroredHalf = indices.x >= this.model.get("width") / 2 ? 1 : 0;
	                var pixels = this.model.get("pixels");
	                var width = this.model.get("width");
	                var height = this.model.get("height");
	                var newPixels = [];

	                for (var i = width / 2 * mirroredHalf; i < width / 2 + width / 2 * mirroredHalf; i++) {
	                    for (var j = 0; j < height; j++) {
	                        if (pixels[i][j] != 0) {
	                            newPixels.push({ x: width - i - 1, y: j, color: pixels[i][j] });
	                        }
	                    }
	                }
	                App.events.trigger("toolUpdatePixels", newPixels);
	            }
	        }
	    }, {
	        key: "mouseMoveHandler",
	        value: function mouseMoveHandler(e) {
	            var indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	            if (indices) {
	                var mirroredHalf = indices.x >= this.model.get("width") / 2 ? 1 : 0;
	                App.events.trigger("drawHelpSquare", {
	                    x: mirroredHalf * (this.model.get("width") / 2),
	                    y: 0,
	                    w: this.model.get("width") / 2,
	                    h: this.model.get("height"),
	                    color: this.model.get("highLightColor")
	                });
	            } else {
	                App.events.trigger("redrawHelpCanvas");
	            }
	        }
	    }]);

	    return Mirror;
	}(_Tool3.default);

	exports.default = Mirror;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcdG9vbHNcXE1pcnJvci5qcyJdLCJuYW1lcyI6WyJNaXJyb3IiLCJtb2RlbCIsIm5hbWUiLCJlIiwiaW5kaWNlcyIsImlucHV0VG9QaXhlbEluZGV4Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJtaXJyb3JlZEhhbGYiLCJ4IiwiZ2V0IiwicGl4ZWxzIiwid2lkdGgiLCJoZWlnaHQiLCJuZXdQaXhlbHMiLCJpIiwiaiIsInB1c2giLCJ5IiwiY29sb3IiLCJBcHAiLCJldmVudHMiLCJ0cmlnZ2VyIiwidyIsImgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNUQSxLQURTOztBQUVmLGNBQUtDLElBQUwsR0FBWSxRQUFaO0FBRmU7QUFHbEI7Ozs7eUNBQ2lCQyxDLEVBQUc7QUFDakIsZ0JBQUlDLFVBQVUsS0FBS0gsS0FBTCxDQUFXSSxpQkFBWCxDQUE2QkYsRUFBRUcsT0FBL0IsRUFBd0NILEVBQUVJLE9BQTFDLENBQWQ7QUFDQSxnQkFBSUgsT0FBSixFQUFhO0FBQ1Qsb0JBQUlJLGVBQWdCSixRQUFRSyxDQUFSLElBQWMsS0FBS1IsS0FBTCxDQUFXUyxHQUFYLENBQWUsT0FBZixJQUEwQixDQUF6QyxHQUErQyxDQUEvQyxHQUFtRCxDQUF0RTtBQUNBLG9CQUFJQyxTQUFTLEtBQUtWLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFFBQWYsQ0FBYjtBQUNBLG9CQUFJRSxRQUFRLEtBQUtYLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLG9CQUFJRyxTQUFTLEtBQUtaLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFFBQWYsQ0FBYjtBQUNBLG9CQUFJSSxZQUFZLEVBQWhCOztBQUVBLHFCQUFLLElBQUlDLElBQUtILFFBQVEsQ0FBVCxHQUFjSixZQUEzQixFQUF5Q08sSUFBTUgsUUFBTSxDQUFQLEdBQWFBLFFBQU0sQ0FBUCxHQUFZSixZQUF0RSxFQUFxRk8sR0FBckYsRUFBMEY7QUFDdEYseUJBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxNQUFwQixFQUE0QkcsR0FBNUIsRUFBaUM7QUFDN0IsNEJBQUlMLE9BQU9JLENBQVAsRUFBVUMsQ0FBVixLQUFnQixDQUFwQixFQUF1QjtBQUNuQkYsc0NBQVVHLElBQVYsQ0FBZSxFQUFDUixHQUFJRyxRQUFRRyxDQUFSLEdBQVUsQ0FBZixFQUFtQkcsR0FBR0YsQ0FBdEIsRUFBeUJHLE9BQU9SLE9BQU9JLENBQVAsRUFBVUMsQ0FBVixDQUFoQyxFQUFmO0FBQ0g7QUFDSjtBQUNKO0FBQ0RJLG9CQUFJQyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsa0JBQW5CLEVBQXVDUixTQUF2QztBQUNIO0FBQ0o7Ozt5Q0FDZ0JYLEMsRUFBRTtBQUNmLGdCQUFJQyxVQUFVLEtBQUtILEtBQUwsQ0FBV0ksaUJBQVgsQ0FBNkJGLEVBQUVHLE9BQS9CLEVBQXdDSCxFQUFFSSxPQUExQyxDQUFkO0FBQ0EsZ0JBQUlILE9BQUosRUFBYTtBQUNULG9CQUFJSSxlQUFnQkosUUFBUUssQ0FBUixJQUFjLEtBQUtSLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLE9BQWYsSUFBMEIsQ0FBekMsR0FBK0MsQ0FBL0MsR0FBbUQsQ0FBdEU7QUFDQVUsb0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixnQkFBbkIsRUFBcUM7QUFDakNiLHVCQUFFRCxnQkFBYyxLQUFLUCxLQUFMLENBQVdTLEdBQVgsQ0FBZSxPQUFmLElBQTBCLENBQXhDLENBRCtCO0FBRWpDUSx1QkFBRSxDQUYrQjtBQUdqQ0ssdUJBQUcsS0FBS3RCLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLE9BQWYsSUFBMEIsQ0FISTtBQUlqQ2MsdUJBQUcsS0FBS3ZCLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFFBQWYsQ0FKOEI7QUFLakNTLDJCQUFPLEtBQUtsQixLQUFMLENBQVdTLEdBQVgsQ0FBZSxnQkFBZjtBQUwwQixpQkFBckM7QUFPSCxhQVRELE1BU0s7QUFDRFUsb0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixrQkFBbkI7QUFDSDtBQUNKOzs7Ozs7a0JBRVV0QixNIiwiZmlsZSI6Ik1pcnJvci5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvb2wgZnJvbSBcIi4vVG9vbFwiO1xyXG5cclxuY2xhc3MgTWlycm9yIGV4dGVuZHMgVG9vbHtcclxuICAgIGNvbnN0cnVjdG9yKG1vZGVsKSB7XHJcbiAgICAgICAgc3VwZXIobW9kZWwpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdNaXJyb3InO1xyXG4gICAgfVxyXG4gICAgbW91c2VEb3duSGFuZGxlciAoZSkge1xyXG4gICAgICAgIGxldCBpbmRpY2VzID0gdGhpcy5tb2RlbC5pbnB1dFRvUGl4ZWxJbmRleChlLm9mZnNldFgsIGUub2Zmc2V0WSk7XHJcbiAgICAgICAgaWYgKGluZGljZXMpIHtcclxuICAgICAgICAgICAgbGV0IG1pcnJvcmVkSGFsZiA9IChpbmRpY2VzLnggPj0gKHRoaXMubW9kZWwuZ2V0KFwid2lkdGhcIikgLyAyKSkgPyAxIDogMDtcclxuICAgICAgICAgICAgbGV0IHBpeGVscyA9IHRoaXMubW9kZWwuZ2V0KFwicGl4ZWxzXCIpO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSB0aGlzLm1vZGVsLmdldChcIndpZHRoXCIpO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tb2RlbC5nZXQoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgICAgIGxldCBuZXdQaXhlbHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAod2lkdGggLyAyKSAqIG1pcnJvcmVkSGFsZjsgaSA8ICgod2lkdGgvMikgKyAod2lkdGgvMikgKiBtaXJyb3JlZEhhbGYpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGl4ZWxzW2ldW2pdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGl4ZWxzLnB1c2goe3g6ICh3aWR0aCAtIGktMSksIHk6IGosIGNvbG9yOiBwaXhlbHNbaV1bal19KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwidG9vbFVwZGF0ZVBpeGVsc1wiLCBuZXdQaXhlbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlTW92ZUhhbmRsZXIoZSl7XHJcbiAgICAgICAgbGV0IGluZGljZXMgPSB0aGlzLm1vZGVsLmlucHV0VG9QaXhlbEluZGV4KGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICBpZiAoaW5kaWNlcykge1xyXG4gICAgICAgICAgICBsZXQgbWlycm9yZWRIYWxmID0gKGluZGljZXMueCA+PSAodGhpcy5tb2RlbC5nZXQoXCJ3aWR0aFwiKSAvIDIpKSA/IDEgOiAwO1xyXG4gICAgICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJkcmF3SGVscFNxdWFyZVwiLCB7XHJcbiAgICAgICAgICAgICAgICB4Om1pcnJvcmVkSGFsZioodGhpcy5tb2RlbC5nZXQoXCJ3aWR0aFwiKSAvIDIpLFxyXG4gICAgICAgICAgICAgICAgeTowLFxyXG4gICAgICAgICAgICAgICAgdzogdGhpcy5tb2RlbC5nZXQoXCJ3aWR0aFwiKSAvIDIsXHJcbiAgICAgICAgICAgICAgICBoOiB0aGlzLm1vZGVsLmdldChcImhlaWdodFwiKSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLm1vZGVsLmdldChcImhpZ2hMaWdodENvbG9yXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJyZWRyYXdIZWxwQ2FudmFzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNaXJyb3I7Il19

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(15);

	var _Tool3 = _interopRequireDefault(_Tool2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bucket = function (_Tool) {
	    _inherits(Bucket, _Tool);

	    function Bucket(model) {
	        _classCallCheck(this, Bucket);

	        var _this = _possibleConstructorReturn(this, (Bucket.__proto__ || Object.getPrototypeOf(Bucket)).call(this, model));

	        _this.name = 'Bucket';
	        _this.newPixels = [];
	        return _this;
	    }

	    _createClass(Bucket, [{
	        key: "mouseDownHandler",
	        value: function mouseDownHandler(e) {
	            var indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	            if (indices) {
	                var pixels = this.model.get("pixels");
	                this.checkedPixels = [];
	                var clickedColor = pixels[indices.x][indices.y];

	                var width = this.model.get("width");
	                var height = this.model.get("height");

	                for (var i = 0; i < width; i++) {
	                    this.checkedPixels[i] = [];
	                    for (var j = 0; j < height; j++) {
	                        this.checkedPixels[i][j] = false;
	                    }
	                }

	                this.checkPixel(clickedColor, pixels, indices.x, indices.y);

	                App.events.trigger("toolUpdatePixels", this.newPixels);
	                this.newPixels = [];
	            }
	        }
	    }, {
	        key: "checkPixel",
	        value: function checkPixel(checkColor, pixels, x, y) {
	            if (this.checkedPixels[x][y]) return;

	            if (pixels[x][y] == checkColor) {
	                this.newPixels.push({ x: x, y: y, color: this.model.get('selectedColor') });
	                this.checkedPixels[x][y] = true;
	                if (x + 1 < this.model.get("width") && !this.checkedPixels[x + 1][y]) {
	                    this.checkPixel(checkColor, pixels, x + 1, y);
	                }
	                if (x - 1 >= 0 && !this.checkedPixels[x - 1][y]) {
	                    this.checkPixel(checkColor, pixels, x - 1, y);
	                }
	                if (y + 1 < this.model.get("height") && !this.checkedPixels[x][y + 1]) {
	                    this.checkPixel(checkColor, pixels, x, y + 1);
	                }
	                if (y - 1 >= 0 && !this.checkedPixels[x][y - 1]) {
	                    this.checkPixel(checkColor, pixels, x, y - 1);
	                }
	            }
	        }
	    }]);

	    return Bucket;
	}(_Tool3.default);

	exports.default = Bucket;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcdG9vbHNcXEJ1Y2tldC5qcyJdLCJuYW1lcyI6WyJCdWNrZXQiLCJtb2RlbCIsIm5hbWUiLCJuZXdQaXhlbHMiLCJlIiwiaW5kaWNlcyIsImlucHV0VG9QaXhlbEluZGV4Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwaXhlbHMiLCJnZXQiLCJjaGVja2VkUGl4ZWxzIiwiY2xpY2tlZENvbG9yIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImkiLCJqIiwiY2hlY2tQaXhlbCIsIkFwcCIsImV2ZW50cyIsInRyaWdnZXIiLCJjaGVja0NvbG9yIiwicHVzaCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxvSEFDUkEsS0FEUTs7QUFFZCxjQUFLQyxJQUFMLEdBQVksUUFBWjtBQUNBLGNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFIYztBQUlqQjs7Ozt5Q0FDZ0JDLEMsRUFBRztBQUNoQixnQkFBSUMsVUFBVSxLQUFLSixLQUFMLENBQVdLLGlCQUFYLENBQTZCRixFQUFFRyxPQUEvQixFQUF3Q0gsRUFBRUksT0FBMUMsQ0FBZDtBQUNBLGdCQUFJSCxPQUFKLEVBQWE7QUFDVCxvQkFBSUksU0FBUyxLQUFLUixLQUFMLENBQVdTLEdBQVgsQ0FBZSxRQUFmLENBQWI7QUFDQSxxQkFBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLG9CQUFJQyxlQUFlSCxPQUFPSixRQUFRUSxDQUFmLEVBQWtCUixRQUFRUyxDQUExQixDQUFuQjs7QUFFQSxvQkFBSUMsUUFBUSxLQUFLZCxLQUFMLENBQVdTLEdBQVgsQ0FBZSxPQUFmLENBQVo7QUFDQSxvQkFBSU0sU0FBUyxLQUFLZixLQUFMLENBQVdTLEdBQVgsQ0FBZSxRQUFmLENBQWI7O0FBRUEscUJBQUksSUFBSU8sSUFBSSxDQUFaLEVBQWVBLElBQUlGLEtBQW5CLEVBQTBCRSxHQUExQixFQUErQjtBQUMzQix5QkFBS04sYUFBTCxDQUFtQk0sQ0FBbkIsSUFBd0IsRUFBeEI7QUFDQSx5QkFBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSUYsTUFBbkIsRUFBMkJFLEdBQTNCLEVBQStCO0FBQzNCLDZCQUFLUCxhQUFMLENBQW1CTSxDQUFuQixFQUFzQkMsQ0FBdEIsSUFBMkIsS0FBM0I7QUFDSDtBQUNKOztBQUVGLHFCQUFLQyxVQUFMLENBQWdCUCxZQUFoQixFQUE4QkgsTUFBOUIsRUFBc0NKLFFBQVFRLENBQTlDLEVBQWlEUixRQUFRUyxDQUF6RDs7QUFFQ00sb0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixrQkFBbkIsRUFBdUMsS0FBS25CLFNBQTVDO0FBQ0EscUJBQUtBLFNBQUwsR0FBaUIsRUFBakI7QUFDSDtBQUNKOzs7bUNBQ1VvQixVLEVBQVlkLE0sRUFBUUksQyxFQUFHQyxDLEVBQUU7QUFDaEMsZ0JBQUcsS0FBS0gsYUFBTCxDQUFtQkUsQ0FBbkIsRUFBc0JDLENBQXRCLENBQUgsRUFBNkI7O0FBRTdCLGdCQUFHTCxPQUFPSSxDQUFQLEVBQVVDLENBQVYsS0FBZ0JTLFVBQW5CLEVBQThCO0FBQzFCLHFCQUFLcEIsU0FBTCxDQUFlcUIsSUFBZixDQUFvQixFQUFDWCxHQUFHQSxDQUFKLEVBQU9DLEdBQUdBLENBQVYsRUFBYVcsT0FBTyxLQUFLeEIsS0FBTCxDQUFXUyxHQUFYLENBQWUsZUFBZixDQUFwQixFQUFwQjtBQUNBLHFCQUFLQyxhQUFMLENBQW1CRSxDQUFuQixFQUFzQkMsQ0FBdEIsSUFBMkIsSUFBM0I7QUFDQSxvQkFBR0QsSUFBRSxDQUFGLEdBQU0sS0FBS1osS0FBTCxDQUFXUyxHQUFYLENBQWUsT0FBZixDQUFOLElBQWdDLENBQUMsS0FBS0MsYUFBTCxDQUFtQkUsSUFBRSxDQUFyQixFQUF3QkMsQ0FBeEIsQ0FBcEMsRUFBZ0U7QUFDNUQseUJBQUtLLFVBQUwsQ0FBZ0JJLFVBQWhCLEVBQTRCZCxNQUE1QixFQUFvQ0ksSUFBRSxDQUF0QyxFQUF5Q0MsQ0FBekM7QUFDSDtBQUNELG9CQUFHRCxJQUFFLENBQUYsSUFBTyxDQUFQLElBQVksQ0FBQyxLQUFLRixhQUFMLENBQW1CRSxJQUFFLENBQXJCLEVBQXdCQyxDQUF4QixDQUFoQixFQUEyQztBQUN2Qyx5QkFBS0ssVUFBTCxDQUFnQkksVUFBaEIsRUFBNEJkLE1BQTVCLEVBQW9DSSxJQUFFLENBQXRDLEVBQXlDQyxDQUF6QztBQUNIO0FBQ0Qsb0JBQUdBLElBQUUsQ0FBRixHQUFNLEtBQUtiLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFFBQWYsQ0FBTixJQUFrQyxDQUFDLEtBQUtDLGFBQUwsQ0FBbUJFLENBQW5CLEVBQXNCQyxJQUFFLENBQXhCLENBQXRDLEVBQWlFO0FBQzdELHlCQUFLSyxVQUFMLENBQWdCSSxVQUFoQixFQUE0QmQsTUFBNUIsRUFBb0NJLENBQXBDLEVBQXVDQyxJQUFFLENBQXpDO0FBQ0g7QUFDRCxvQkFBR0EsSUFBRSxDQUFGLElBQU8sQ0FBUCxJQUFZLENBQUMsS0FBS0gsYUFBTCxDQUFtQkUsQ0FBbkIsRUFBc0JDLElBQUUsQ0FBeEIsQ0FBaEIsRUFBMkM7QUFDdkMseUJBQUtLLFVBQUwsQ0FBZ0JJLFVBQWhCLEVBQTRCZCxNQUE1QixFQUFvQ0ksQ0FBcEMsRUFBdUNDLElBQUUsQ0FBekM7QUFDSDtBQUNKO0FBQ0o7Ozs7OztrQkFFVWQsTSIsImZpbGUiOiJCdWNrZXQuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb29sIGZyb20gXCIuL1Rvb2xcIjtcclxuXHJcbmNsYXNzIEJ1Y2tldCBleHRlbmRzIFRvb2x7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCl7XHJcbiAgICAgICAgc3VwZXIobW9kZWwpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdCdWNrZXQnO1xyXG4gICAgICAgIHRoaXMubmV3UGl4ZWxzID0gW107XHJcbiAgICB9XHJcbiAgICBtb3VzZURvd25IYW5kbGVyKGUpIHtcclxuICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMubW9kZWwuaW5wdXRUb1BpeGVsSW5kZXgoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgIGlmIChpbmRpY2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBwaXhlbHMgPSB0aGlzLm1vZGVsLmdldChcInBpeGVsc1wiKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2VkUGl4ZWxzID0gW107XHJcbiAgICAgICAgICAgIGxldCBjbGlja2VkQ29sb3IgPSBwaXhlbHNbaW5kaWNlcy54XVtpbmRpY2VzLnldO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5tb2RlbC5nZXQoXCJ3aWR0aFwiKTtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMubW9kZWwuZ2V0KFwiaGVpZ2h0XCIpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpICsrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZFBpeGVsc1tpXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRQaXhlbHNbaV1bal0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICB0aGlzLmNoZWNrUGl4ZWwoY2xpY2tlZENvbG9yLCBwaXhlbHMsIGluZGljZXMueCwgaW5kaWNlcy55KTtcclxuXHJcbiAgICAgICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcInRvb2xVcGRhdGVQaXhlbHNcIiwgdGhpcy5uZXdQaXhlbHMpO1xyXG4gICAgICAgICAgICB0aGlzLm5ld1BpeGVscyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoZWNrUGl4ZWwoY2hlY2tDb2xvciwgcGl4ZWxzLCB4LCB5KXtcclxuICAgICAgICBpZih0aGlzLmNoZWNrZWRQaXhlbHNbeF1beV0pIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYocGl4ZWxzW3hdW3ldID09IGNoZWNrQ29sb3Ipe1xyXG4gICAgICAgICAgICB0aGlzLm5ld1BpeGVscy5wdXNoKHt4OiB4LCB5OiB5LCBjb2xvcjogdGhpcy5tb2RlbC5nZXQoJ3NlbGVjdGVkQ29sb3InKX0pO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRQaXhlbHNbeF1beV0gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZih4KzEgPCB0aGlzLm1vZGVsLmdldChcIndpZHRoXCIpICYmIXRoaXMuY2hlY2tlZFBpeGVsc1t4KzFdW3ldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUGl4ZWwoY2hlY2tDb2xvciwgcGl4ZWxzLCB4KzEsIHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHgtMSA+PSAwICYmICF0aGlzLmNoZWNrZWRQaXhlbHNbeC0xXVt5XSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUGl4ZWwoY2hlY2tDb2xvciwgcGl4ZWxzLCB4LTEsIHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHkrMSA8IHRoaXMubW9kZWwuZ2V0KFwiaGVpZ2h0XCIpICYmICF0aGlzLmNoZWNrZWRQaXhlbHNbeF1beSsxXSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUGl4ZWwoY2hlY2tDb2xvciwgcGl4ZWxzLCB4LCB5KzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHktMSA+PSAwICYmICF0aGlzLmNoZWNrZWRQaXhlbHNbeF1beS0xXSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUGl4ZWwoY2hlY2tDb2xvciwgcGl4ZWxzLCB4LCB5LTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1Y2tldDsiXX0=

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ColorSetting = __webpack_require__(21);

	var _ColorSetting2 = _interopRequireDefault(_ColorSetting);

	var _HelpLines = __webpack_require__(24);

	var _HelpLines2 = _interopRequireDefault(_HelpLines);

	var _DimensionSetting = __webpack_require__(25);

	var _DimensionSetting2 = _interopRequireDefault(_DimensionSetting);

	var _backbone = __webpack_require__(6);

	var _underscore = __webpack_require__(7);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SettingMenu = _backbone.View.extend({
	    events: {
	        "click .setting": "handleClick"
	    },
	    initialize: function initialize() {
	        this.settings = [];
	        this.settings.push(new _HelpLines2.default(this.model));
	        this.settings.push(new _ColorSetting2.default(this.model));

	        _underscore2.default.templateSettings.variable = "settings";
	        this.template = _underscore2.default.template($('#settings-template').html());
	        this.$el.html(this.template(this.settings));

	        new _DimensionSetting2.default({ model: this.model, el: "#width" });
	        new _DimensionSetting2.default({ model: this.model, el: "#height" });

	        this.toggleSetting(0);
	    },
	    handleClick: function handleClick(e) {
	        this.toggleSetting(e.currentTarget.dataset.index);
	    },
	    toggleSetting: function toggleSetting(index) {
	        $('.setting', this.el).eq(index).toggleClass('selected-tool');
	        this.settings[index].onClick();
	    }
	});
	exports.default = SettingMenu;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcc2V0dGluZ3NcXFNldHRpbmdNZW51LmpzIl0sIm5hbWVzIjpbIlNldHRpbmdNZW51IiwiZXh0ZW5kIiwiZXZlbnRzIiwiaW5pdGlhbGl6ZSIsInNldHRpbmdzIiwicHVzaCIsIm1vZGVsIiwidGVtcGxhdGVTZXR0aW5ncyIsInZhcmlhYmxlIiwidGVtcGxhdGUiLCIkIiwiaHRtbCIsIiRlbCIsImVsIiwidG9nZ2xlU2V0dGluZyIsImhhbmRsZUNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJlcSIsInRvZ2dsZUNsYXNzIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGNBQWMsZUFBS0MsTUFBTCxDQUFZO0FBQzVCQyxZQUFRO0FBQ0osMEJBQWtCO0FBRGQsS0FEb0I7QUFJNUJDLGdCQUFZLHNCQUFZO0FBQ3BCLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxhQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsd0JBQWMsS0FBS0MsS0FBbkIsQ0FBbkI7QUFDQSxhQUFLRixRQUFMLENBQWNDLElBQWQsQ0FBbUIsMkJBQWlCLEtBQUtDLEtBQXRCLENBQW5COztBQUVBLDZCQUFFQyxnQkFBRixDQUFtQkMsUUFBbkIsR0FBOEIsVUFBOUI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLHFCQUFFQSxRQUFGLENBQVdDLEVBQUUsb0JBQUYsRUFBd0JDLElBQXhCLEVBQVgsQ0FBaEI7QUFDQSxhQUFLQyxHQUFMLENBQVNELElBQVQsQ0FBYyxLQUFLRixRQUFMLENBQWMsS0FBS0wsUUFBbkIsQ0FBZDs7QUFFQSx1Q0FBcUIsRUFBQ0UsT0FBTyxLQUFLQSxLQUFiLEVBQW9CTyxJQUFJLFFBQXhCLEVBQXJCO0FBQ0EsdUNBQXFCLEVBQUNQLE9BQU8sS0FBS0EsS0FBYixFQUFvQk8sSUFBSSxTQUF4QixFQUFyQjs7QUFFQSxhQUFLQyxhQUFMLENBQW1CLENBQW5CO0FBQ0gsS0FqQjJCO0FBa0I1QkMsaUJBQWEscUJBQVVDLENBQVYsRUFBYTtBQUN0QixhQUFLRixhQUFMLENBQW1CRSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBM0M7QUFDSCxLQXBCMkI7QUFxQjVCTCxtQkFBZSx1QkFBVUssS0FBVixFQUFpQjtBQUM1QlQsVUFBRSxVQUFGLEVBQWMsS0FBS0csRUFBbkIsRUFBdUJPLEVBQXZCLENBQTBCRCxLQUExQixFQUFpQ0UsV0FBakMsQ0FBNkMsZUFBN0M7QUFDQSxhQUFLakIsUUFBTCxDQUFjZSxLQUFkLEVBQXFCRyxPQUFyQjtBQUNIO0FBeEIyQixDQUFaLENBQXBCO2tCQTBCZXRCLFciLCJmaWxlIjoiU2V0dGluZ01lbnUuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2xvclNldHRpbmcgZnJvbSBcIi4vQ29sb3JTZXR0aW5nXCI7XHJcbmltcG9ydCBIZWxwTGluZXMgZnJvbSBcIi4vSGVscExpbmVzXCI7XHJcbmltcG9ydCBEaW1lbnNpb25TZXR0aW5nIGZyb20gXCIuL0RpbWVuc2lvblNldHRpbmdcIjtcclxuaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcclxuaW1wb3J0IF8gZnJvbSBcInVuZGVyc2NvcmVcIjtcclxuXHJcbmNvbnN0IFNldHRpbmdNZW51ID0gVmlldy5leHRlbmQoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgXCJjbGljayAuc2V0dGluZ1wiOiBcImhhbmRsZUNsaWNrXCJcclxuICAgIH0sXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHVzaChuZXcgSGVscExpbmVzKHRoaXMubW9kZWwpKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLnB1c2gobmV3IENvbG9yU2V0dGluZyh0aGlzLm1vZGVsKSk7XHJcblxyXG4gICAgICAgIF8udGVtcGxhdGVTZXR0aW5ncy52YXJpYWJsZSA9IFwic2V0dGluZ3NcIjtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKCcjc2V0dGluZ3MtdGVtcGxhdGUnKS5odG1sKCkpO1xyXG4gICAgICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSh0aGlzLnNldHRpbmdzKSk7XHJcblxyXG4gICAgICAgIG5ldyBEaW1lbnNpb25TZXR0aW5nKHttb2RlbDogdGhpcy5tb2RlbCwgZWw6IFwiI3dpZHRoXCJ9KTtcclxuICAgICAgICBuZXcgRGltZW5zaW9uU2V0dGluZyh7bW9kZWw6IHRoaXMubW9kZWwsIGVsOiBcIiNoZWlnaHRcIn0pO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZVNldHRpbmcoMCk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVTZXR0aW5nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVTZXR0aW5nOiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAkKCcuc2V0dGluZycsIHRoaXMuZWwpLmVxKGluZGV4KS50b2dnbGVDbGFzcygnc2VsZWN0ZWQtdG9vbCcpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NbaW5kZXhdLm9uQ2xpY2soKTtcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdNZW51OyJdfQ==

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CanvasSetting2 = __webpack_require__(22);

	var _CanvasSetting3 = _interopRequireDefault(_CanvasSetting2);

	var _ColorSelector = __webpack_require__(23);

	var _ColorSelector2 = _interopRequireDefault(_ColorSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColorSetting = function (_CanvasSetting) {
	    _inherits(ColorSetting, _CanvasSetting);

	    function ColorSetting(model) {
	        _classCallCheck(this, ColorSetting);

	        var _this = _possibleConstructorReturn(this, (ColorSetting.__proto__ || Object.getPrototypeOf(ColorSetting)).call(this, model));

	        _this.name = 'Color';
	        new _ColorSelector2.default({ el: '#colorSelector', model: _this.model });
	        return _this;
	    }

	    _createClass(ColorSetting, [{
	        key: "onClick",
	        value: function onClick(e) {
	            App.events.trigger("toggleColorSelector");
	        }
	    }]);

	    return ColorSetting;
	}(_CanvasSetting3.default);

	exports.default = ColorSetting;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcc2V0dGluZ3NcXENvbG9yU2V0dGluZy5qcyJdLCJuYW1lcyI6WyJDb2xvclNldHRpbmciLCJtb2RlbCIsIm5hbWUiLCJlbCIsImUiLCJBcHAiLCJldmVudHMiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7QUFDRiwwQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLGdJQUNSQSxLQURROztBQUVkLGNBQUtDLElBQUwsR0FBWSxPQUFaO0FBQ0Esb0NBQWtCLEVBQUNDLElBQUksZ0JBQUwsRUFBdUJGLE9BQU8sTUFBS0EsS0FBbkMsRUFBbEI7QUFIYztBQUlqQjs7OztnQ0FDT0csQyxFQUFFO0FBQ05DLGdCQUFJQyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIscUJBQW5CO0FBQ0g7Ozs7OztrQkFFVVAsWSIsImZpbGUiOiJDb2xvclNldHRpbmcuanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXNTZXR0aW5nIGZyb20gXCIuL0NhbnZhc1NldHRpbmdcIjtcclxuaW1wb3J0IENvbG9yU2VsZWN0b3IgZnJvbVwiLi9Db2xvclNlbGVjdG9yXCI7XHJcblxyXG5jbGFzcyBDb2xvclNldHRpbmcgZXh0ZW5kcyBDYW52YXNTZXR0aW5ne1xyXG4gICAgY29uc3RydWN0b3IobW9kZWwpe1xyXG4gICAgICAgIHN1cGVyKG1vZGVsKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnQ29sb3InO1xyXG4gICAgICAgIG5ldyBDb2xvclNlbGVjdG9yKHtlbDogJyNjb2xvclNlbGVjdG9yJywgbW9kZWw6IHRoaXMubW9kZWx9KTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2soZSl7XHJcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwidG9nZ2xlQ29sb3JTZWxlY3RvclwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb2xvclNldHRpbmc7XHJcbiJdfQ==

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CanvasSetting = function CanvasSetting(model) {
	    _classCallCheck(this, CanvasSetting);

	    this.model = model;
	};

	exports.default = CanvasSetting;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcc2V0dGluZ3NcXENhbnZhc1NldHRpbmcuanMiXSwibmFtZXMiOlsiQ2FudmFzU2V0dGluZyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNQSxhLEdBQ0YsdUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSCxDOztrQkFFVUQsYSIsImZpbGUiOiJDYW52YXNTZXR0aW5nLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYW52YXNTZXR0aW5ne1xyXG4gICAgY29uc3RydWN0b3IobW9kZWwpe1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYW52YXNTZXR0aW5nOyJdfQ==

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var _HelpFunctions = __webpack_require__(5);

	var _HelpFunctions2 = _interopRequireDefault(_HelpFunctions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ColorSelector = _backbone.View.extend({
	    events: {
	        'click img': 'clickHandler',
	        'mousemove img': 'hoverHandler'
	    },
	    initialize: function initialize() {
	        var _this = this;

	        App.events.on("toggleColorSelector", function () {
	            return _this.toggle();
	        });
	        this.selectColorCanvas = document.createElement('canvas');
	        this.selectColorCanvas.width = this.$('img').width();
	        this.selectColorCanvas.height = this.$('img').height();
	        this.selectColorCanvas.getContext('2d').drawImage(this.$('img')[0], 0, 0, this.$('img').width(), this.$('img').height());
	        this.$('.selectedColorDisplay').css('background-color', this.model.get('selectedColor')); // changing CSS in javascript is ugly but hard to do with classes.
	    },
	    toggle: function toggle() {
	        this.$el.toggle();
	    },
	    clickHandler: function clickHandler(e) {
	        var pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
	        var hexColor = _HelpFunctions2.default.rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
	        this.$('.selectedColorDisplay').css('background-color', hexColor);
	        this.model.set('selectedColor', hexColor);
	    },
	    hoverHandler: function hoverHandler(e) {
	        var pixelData = this.selectColorCanvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
	        this.$('.red-display').text(pixelData[0]);
	        this.$('.green-display').text(pixelData[1]);
	        this.$('.blue-display').text(pixelData[2]);
	        this.$('.colorDisplay').css('background-color', _HelpFunctions2.default.rgbToHex(pixelData[0], pixelData[1], pixelData[2]));
	    }
	});
	exports.default = ColorSelector;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcc2V0dGluZ3NcXENvbG9yU2VsZWN0b3IuanMiXSwibmFtZXMiOlsiQ29sb3JTZWxlY3RvciIsImV4dGVuZCIsImV2ZW50cyIsImluaXRpYWxpemUiLCJBcHAiLCJvbiIsInRvZ2dsZSIsInNlbGVjdENvbG9yQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCIkIiwiaGVpZ2h0IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImNzcyIsIm1vZGVsIiwiZ2V0IiwiJGVsIiwiY2xpY2tIYW5kbGVyIiwiZSIsInBpeGVsRGF0YSIsImdldEltYWdlRGF0YSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZGF0YSIsImhleENvbG9yIiwicmdiVG9IZXgiLCJzZXQiLCJob3ZlckhhbmRsZXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLGVBQUtDLE1BQUwsQ0FBWTtBQUM5QkMsWUFBUTtBQUNKLHFCQUFhLGNBRFQ7QUFFSix5QkFBaUI7QUFGYixLQURzQjtBQUs5QkMsZ0JBQVksc0JBQVU7QUFBQTs7QUFDbEJDLFlBQUlGLE1BQUosQ0FBV0csRUFBWCxDQUFjLHFCQUFkLEVBQXFDO0FBQUEsbUJBQU0sTUFBS0MsTUFBTCxFQUFOO0FBQUEsU0FBckM7QUFDQSxhQUFLQyxpQkFBTCxHQUF5QkMsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUF6QjtBQUNBLGFBQUtGLGlCQUFMLENBQXVCRyxLQUF2QixHQUErQixLQUFLQyxDQUFMLENBQU8sS0FBUCxFQUFjRCxLQUFkLEVBQS9CO0FBQ0EsYUFBS0gsaUJBQUwsQ0FBdUJLLE1BQXZCLEdBQWdDLEtBQUtELENBQUwsQ0FBTyxLQUFQLEVBQWNDLE1BQWQsRUFBaEM7QUFDQSxhQUFLTCxpQkFBTCxDQUF1Qk0sVUFBdkIsQ0FBa0MsSUFBbEMsRUFBd0NDLFNBQXhDLENBQWtELEtBQUtILENBQUwsQ0FBTyxLQUFQLEVBQWMsQ0FBZCxDQUFsRCxFQUFvRSxDQUFwRSxFQUF1RSxDQUF2RSxFQUEwRSxLQUFLQSxDQUFMLENBQU8sS0FBUCxFQUFjRCxLQUFkLEVBQTFFLEVBQWlHLEtBQUtDLENBQUwsQ0FBTyxLQUFQLEVBQWNDLE1BQWQsRUFBakc7QUFDQSxhQUFLRCxDQUFMLENBQU8sdUJBQVAsRUFBZ0NJLEdBQWhDLENBQW9DLGtCQUFwQyxFQUF3RCxLQUFLQyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxlQUFmLENBQXhELEVBTmtCLENBTXdFO0FBQzdGLEtBWjZCO0FBYTlCWCxZQUFRLGtCQUFVO0FBQ2QsYUFBS1ksR0FBTCxDQUFTWixNQUFUO0FBQ0gsS0FmNkI7QUFnQjlCYSxrQkFBYyxzQkFBU0MsQ0FBVCxFQUFXO0FBQ3JCLFlBQUlDLFlBQVksS0FBS2QsaUJBQUwsQ0FBdUJNLFVBQXZCLENBQWtDLElBQWxDLEVBQXdDUyxZQUF4QyxDQUFxREYsRUFBRUcsT0FBdkQsRUFBZ0VILEVBQUVJLE9BQWxFLEVBQTJFLENBQTNFLEVBQThFLENBQTlFLEVBQWlGQyxJQUFqRztBQUNBLFlBQUlDLFdBQVcsd0JBQWNDLFFBQWQsQ0FBdUJOLFVBQVUsQ0FBVixDQUF2QixFQUFxQ0EsVUFBVSxDQUFWLENBQXJDLEVBQW1EQSxVQUFVLENBQVYsQ0FBbkQsQ0FBZjtBQUNBLGFBQUtWLENBQUwsQ0FBTyx1QkFBUCxFQUFnQ0ksR0FBaEMsQ0FBb0Msa0JBQXBDLEVBQXdEVyxRQUF4RDtBQUNBLGFBQUtWLEtBQUwsQ0FBV1ksR0FBWCxDQUFlLGVBQWYsRUFBZ0NGLFFBQWhDO0FBQ0gsS0FyQjZCO0FBc0I5Qkcsa0JBQWMsc0JBQVNULENBQVQsRUFBVztBQUNyQixZQUFJQyxZQUFZLEtBQUtkLGlCQUFMLENBQXVCTSxVQUF2QixDQUFrQyxJQUFsQyxFQUF3Q1MsWUFBeEMsQ0FBcURGLEVBQUVHLE9BQXZELEVBQWdFSCxFQUFFSSxPQUFsRSxFQUEyRSxDQUEzRSxFQUE4RSxDQUE5RSxFQUFpRkMsSUFBakc7QUFDQSxhQUFLZCxDQUFMLENBQU8sY0FBUCxFQUF1Qm1CLElBQXZCLENBQTRCVCxVQUFVLENBQVYsQ0FBNUI7QUFDQSxhQUFLVixDQUFMLENBQU8sZ0JBQVAsRUFBeUJtQixJQUF6QixDQUE4QlQsVUFBVSxDQUFWLENBQTlCO0FBQ0EsYUFBS1YsQ0FBTCxDQUFPLGVBQVAsRUFBd0JtQixJQUF4QixDQUE2QlQsVUFBVSxDQUFWLENBQTdCO0FBQ0EsYUFBS1YsQ0FBTCxDQUFPLGVBQVAsRUFBd0JJLEdBQXhCLENBQTRCLGtCQUE1QixFQUFnRCx3QkFBY1ksUUFBZCxDQUF1Qk4sVUFBVSxDQUFWLENBQXZCLEVBQXFDQSxVQUFVLENBQVYsQ0FBckMsRUFBbURBLFVBQVUsQ0FBVixDQUFuRCxDQUFoRDtBQUNIO0FBNUI2QixDQUFaLENBQXRCO2tCQThCZXJCLGEiLCJmaWxlIjoiQ29sb3JTZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcclxuaW1wb3J0IEhlbHBGdW5jdGlvbnMgZnJvbSBcIi4uLy4uLy4uL0hlbHBGdW5jdGlvbnNcIjtcclxuXHJcbmNvbnN0IENvbG9yU2VsZWN0b3IgPSBWaWV3LmV4dGVuZCh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICAnY2xpY2sgaW1nJzogJ2NsaWNrSGFuZGxlcicsXHJcbiAgICAgICAgJ21vdXNlbW92ZSBpbWcnOiAnaG92ZXJIYW5kbGVyJ1xyXG4gICAgfSxcclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcInRvZ2dsZUNvbG9yU2VsZWN0b3JcIiwgKCkgPT4gdGhpcy50b2dnbGUoKSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDb2xvckNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q29sb3JDYW52YXMud2lkdGggPSB0aGlzLiQoJ2ltZycpLndpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDb2xvckNhbnZhcy5oZWlnaHQgPSB0aGlzLiQoJ2ltZycpLmhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q29sb3JDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy4kKCdpbWcnKVswXSwgMCwgMCwgdGhpcy4kKCdpbWcnKS53aWR0aCgpLCB0aGlzLiQoJ2ltZycpLmhlaWdodCgpKTtcclxuICAgICAgICB0aGlzLiQoJy5zZWxlY3RlZENvbG9yRGlzcGxheScpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMubW9kZWwuZ2V0KCdzZWxlY3RlZENvbG9yJykpOyAvLyBjaGFuZ2luZyBDU1MgaW4gamF2YXNjcmlwdCBpcyB1Z2x5IGJ1dCBoYXJkIHRvIGRvIHdpdGggY2xhc3Nlcy5cclxuICAgIH0sXHJcbiAgICB0b2dnbGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy4kZWwudG9nZ2xlKCk7XHJcbiAgICB9LFxyXG4gICAgY2xpY2tIYW5kbGVyOiBmdW5jdGlvbihlKXtcclxuICAgICAgICBsZXQgcGl4ZWxEYXRhID0gdGhpcy5zZWxlY3RDb2xvckNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YShlLm9mZnNldFgsIGUub2Zmc2V0WSwgMSwgMSkuZGF0YTtcclxuICAgICAgICBsZXQgaGV4Q29sb3IgPSBIZWxwRnVuY3Rpb25zLnJnYlRvSGV4KHBpeGVsRGF0YVswXSwgcGl4ZWxEYXRhWzFdLCBwaXhlbERhdGFbMl0pO1xyXG4gICAgICAgIHRoaXMuJCgnLnNlbGVjdGVkQ29sb3JEaXNwbGF5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgaGV4Q29sb3IpO1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdzZWxlY3RlZENvbG9yJywgaGV4Q29sb3IpO1xyXG4gICAgfSxcclxuICAgIGhvdmVySGFuZGxlcjogZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgbGV0IHBpeGVsRGF0YSA9IHRoaXMuc2VsZWN0Q29sb3JDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5nZXRJbWFnZURhdGEoZS5vZmZzZXRYLCBlLm9mZnNldFksIDEsIDEpLmRhdGE7XHJcbiAgICAgICAgdGhpcy4kKCcucmVkLWRpc3BsYXknKS50ZXh0KHBpeGVsRGF0YVswXSk7XHJcbiAgICAgICAgdGhpcy4kKCcuZ3JlZW4tZGlzcGxheScpLnRleHQocGl4ZWxEYXRhWzFdKTtcclxuICAgICAgICB0aGlzLiQoJy5ibHVlLWRpc3BsYXknKS50ZXh0KHBpeGVsRGF0YVsyXSk7XHJcbiAgICAgICAgdGhpcy4kKCcuY29sb3JEaXNwbGF5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgSGVscEZ1bmN0aW9ucy5yZ2JUb0hleChwaXhlbERhdGFbMF0sIHBpeGVsRGF0YVsxXSwgcGl4ZWxEYXRhWzJdKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBDb2xvclNlbGVjdG9yO1xyXG5cclxuIl19

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CanvasSetting2 = __webpack_require__(22);

	var _CanvasSetting3 = _interopRequireDefault(_CanvasSetting2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HelpLines = function (_CanvasSetting) {
	    _inherits(HelpLines, _CanvasSetting);

	    function HelpLines(model) {
	        _classCallCheck(this, HelpLines);

	        var _this = _possibleConstructorReturn(this, (HelpLines.__proto__ || Object.getPrototypeOf(HelpLines)).call(this, model));

	        _this.name = 'Helplines';
	        return _this;
	    }

	    _createClass(HelpLines, [{
	        key: "onClick",
	        value: function onClick() {
	            this.toggleFunction();
	        }
	    }, {
	        key: "toggleFunction",
	        value: function toggleFunction() {
	            this.model.set("drawHelpLines", !this.model.get("drawHelpLines"));
	        }
	    }]);

	    return HelpLines;
	}(_CanvasSetting3.default);

	exports.default = HelpLines;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcc2V0dGluZ3NcXEhlbHBMaW5lcy5qcyJdLCJuYW1lcyI6WyJIZWxwTGluZXMiLCJtb2RlbCIsIm5hbWUiLCJ0b2dnbGVGdW5jdGlvbiIsInNldCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNGLHVCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsMEhBQ1JBLEtBRFE7O0FBRWQsY0FBS0MsSUFBTCxHQUFZLFdBQVo7QUFGYztBQUdqQjs7OztrQ0FDUTtBQUNMLGlCQUFLQyxjQUFMO0FBQ0g7Ozt5Q0FDZTtBQUNaLGlCQUFLRixLQUFMLENBQVdHLEdBQVgsQ0FBZSxlQUFmLEVBQWdDLENBQUMsS0FBS0gsS0FBTCxDQUFXSSxHQUFYLENBQWUsZUFBZixDQUFqQztBQUNIOzs7Ozs7a0JBRVVMLFMiLCJmaWxlIjoiSGVscExpbmVzLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzU2V0dGluZyBmcm9tIFwiLi9DYW52YXNTZXR0aW5nXCI7XHJcblxyXG5jbGFzcyBIZWxwTGluZXMgZXh0ZW5kcyBDYW52YXNTZXR0aW5ne1xyXG4gICAgY29uc3RydWN0b3IobW9kZWwpe1xyXG4gICAgICAgIHN1cGVyKG1vZGVsKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnSGVscGxpbmVzJztcclxuICAgIH1cclxuICAgIG9uQ2xpY2soKXtcclxuICAgICAgICB0aGlzLnRvZ2dsZUZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVGdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KFwiZHJhd0hlbHBMaW5lc1wiLCAhdGhpcy5tb2RlbC5nZXQoXCJkcmF3SGVscExpbmVzXCIpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWxwTGluZXM7XHJcblxyXG4iXX0=

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var _HelpFunctions = __webpack_require__(5);

	var _HelpFunctions2 = _interopRequireDefault(_HelpFunctions);

	var _DataStreamHandler = __webpack_require__(3);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DimensionSetting = _backbone.View.extend({
	    events: {
	        'change': 'changeHandler'
	    },
	    initialize: function initialize() {
	        this.$el.val(this.model.get(this.el.dataset.id));
	        this.listenTo(this.model, "change:" + this.el.dataset.id, this.setValue);
	    },

	    changeHandler: function changeHandler() {
	        var newDimension = {};
	        newDimension[this.el.dataset.id] = _HelpFunctions2.default.makeEven(this.$el.val());
	        this.model.changeDimensions(newDimension);
	        _DataStreamHandler2.default.sendDimensions(newDimension);
	    },
	    setValue: function setValue(e, a) {
	        this.$el.val(a);
	    }
	});
	exports.default = DimensionSetting;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGNhbnZhc1xcc2V0dGluZ3NcXERpbWVuc2lvblNldHRpbmcuanMiXSwibmFtZXMiOlsiRGltZW5zaW9uU2V0dGluZyIsImV4dGVuZCIsImV2ZW50cyIsImluaXRpYWxpemUiLCIkZWwiLCJ2YWwiLCJtb2RlbCIsImdldCIsImVsIiwiZGF0YXNldCIsImlkIiwibGlzdGVuVG8iLCJzZXRWYWx1ZSIsImNoYW5nZUhhbmRsZXIiLCJuZXdEaW1lbnNpb24iLCJtYWtlRXZlbiIsImNoYW5nZURpbWVuc2lvbnMiLCJzZW5kRGltZW5zaW9ucyIsImUiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsZUFBS0MsTUFBTCxDQUFZO0FBQ2pDQyxZQUFRO0FBQ0osa0JBQVU7QUFETixLQUR5QjtBQUlqQ0MsY0FKaUMsd0JBSXJCO0FBQ1IsYUFBS0MsR0FBTCxDQUFTQyxHQUFULENBQWEsS0FBS0MsS0FBTCxDQUFXQyxHQUFYLENBQWUsS0FBS0MsRUFBTCxDQUFRQyxPQUFSLENBQWdCQyxFQUEvQixDQUFiO0FBQ0EsYUFBS0MsUUFBTCxDQUFjLEtBQUtMLEtBQW5CLEVBQTBCLFlBQVUsS0FBS0UsRUFBTCxDQUFRQyxPQUFSLENBQWdCQyxFQUFwRCxFQUF3RCxLQUFLRSxRQUE3RDtBQUNILEtBUGdDOztBQVFqQ0MsbUJBQWUseUJBQVU7QUFDckIsWUFBSUMsZUFBZSxFQUFuQjtBQUNBQSxxQkFBYSxLQUFLTixFQUFMLENBQVFDLE9BQVIsQ0FBZ0JDLEVBQTdCLElBQW1DLHdCQUFjSyxRQUFkLENBQXVCLEtBQUtYLEdBQUwsQ0FBU0MsR0FBVCxFQUF2QixDQUFuQztBQUNBLGFBQUtDLEtBQUwsQ0FBV1UsZ0JBQVgsQ0FBNEJGLFlBQTVCO0FBQ0Esb0NBQWtCRyxjQUFsQixDQUFpQ0gsWUFBakM7QUFDSCxLQWJnQztBQWNqQ0YsY0FBVSxrQkFBU00sQ0FBVCxFQUFZQyxDQUFaLEVBQWM7QUFDcEIsYUFBS2YsR0FBTCxDQUFTQyxHQUFULENBQWFjLENBQWI7QUFDSDtBQWhCZ0MsQ0FBWixDQUF6QjtrQkFrQmVuQixnQiIsImZpbGUiOiJEaW1lbnNpb25TZXR0aW5nLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xyXG5pbXBvcnQgSGVscEZ1bmN0aW9ucyBmcm9tIFwiLi4vLi4vLi4vSGVscEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgRGF0YVN0cmVhbUhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL0RhdGFTdHJlYW1IYW5kbGVyXCI7XHJcblxyXG5jb25zdCBEaW1lbnNpb25TZXR0aW5nID0gVmlldy5leHRlbmQoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgJ2NoYW5nZSc6ICdjaGFuZ2VIYW5kbGVyJ1xyXG4gICAgfSxcclxuICAgIGluaXRpYWxpemUoKXtcclxuICAgICAgICB0aGlzLiRlbC52YWwodGhpcy5tb2RlbC5nZXQodGhpcy5lbC5kYXRhc2V0LmlkKSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCBcImNoYW5nZTpcIit0aGlzLmVsLmRhdGFzZXQuaWQsIHRoaXMuc2V0VmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IG5ld0RpbWVuc2lvbiA9IHt9O1xyXG4gICAgICAgIG5ld0RpbWVuc2lvblt0aGlzLmVsLmRhdGFzZXQuaWRdID0gSGVscEZ1bmN0aW9ucy5tYWtlRXZlbih0aGlzLiRlbC52YWwoKSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5jaGFuZ2VEaW1lbnNpb25zKG5ld0RpbWVuc2lvbik7XHJcbiAgICAgICAgRGF0YVN0cmVhbUhhbmRsZXIuc2VuZERpbWVuc2lvbnMobmV3RGltZW5zaW9uKTtcclxuICAgIH0sXHJcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24oZSwgYSl7XHJcbiAgICAgICAgdGhpcy4kZWwudmFsKGEpO1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgRGltZW5zaW9uU2V0dGluZztcclxuXHJcbiJdfQ==

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var _BackButton = __webpack_require__(27);

	var _BackButton2 = _interopRequireDefault(_BackButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RoomName = _backbone.View.extend({
	    initialize: function initialize() {
	        this.listenTo(this.model, "change:name", this.updateName);
	    },
	    updateName: function updateName(e, a) {
	        this.$el.text(a);
	    }

	});
	exports.default = RoomName;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXFJvb21OYW1lLmpzIl0sIm5hbWVzIjpbIlJvb21OYW1lIiwiZXh0ZW5kIiwiaW5pdGlhbGl6ZSIsImxpc3RlblRvIiwibW9kZWwiLCJ1cGRhdGVOYW1lIiwiZSIsImEiLCIkZWwiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxlQUFLQyxNQUFMLENBQVk7QUFDekJDLGdCQUFZLHNCQUFZO0FBQ3BCLGFBQUtDLFFBQUwsQ0FBYyxLQUFLQyxLQUFuQixFQUEwQixhQUExQixFQUF5QyxLQUFLQyxVQUE5QztBQUNILEtBSHdCO0FBSXpCQSxnQkFBWSxvQkFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWM7QUFDdEIsYUFBS0MsR0FBTCxDQUFTQyxJQUFULENBQWNGLENBQWQ7QUFDSDs7QUFOd0IsQ0FBWixDQUFqQjtrQkFTZVAsUSIsImZpbGUiOiJSb29tTmFtZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcclxuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIi4vQmFja0J1dHRvblwiO1xyXG5cclxuY29uc3QgUm9vbU5hbWUgPSBWaWV3LmV4dGVuZCh7XHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCBcImNoYW5nZTpuYW1lXCIsIHRoaXMudXBkYXRlTmFtZSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlTmFtZTogZnVuY3Rpb24oZSwgYSl7XHJcbiAgICAgICAgdGhpcy4kZWwudGV4dChhKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBSb29tTmFtZTsiXX0=

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var _PageHandler = __webpack_require__(28);

	var _PageHandler2 = _interopRequireDefault(_PageHandler);

	var _DataStreamHandler = __webpack_require__(3);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BackButton = _backbone.View.extend({
	    events: {
	        'click': 'handleClick'
	    },
	    handleClick: function handleClick() {
	        _DataStreamHandler2.default.leaveRoom();
	        App.events.trigger("leaveRoom");
	        _PageHandler2.default.goto('list');
	    }
	});
	exports.default = BackButton;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXEJhY2tCdXR0b24uanMiXSwibmFtZXMiOlsiQmFja0J1dHRvbiIsImV4dGVuZCIsImV2ZW50cyIsImhhbmRsZUNsaWNrIiwibGVhdmVSb29tIiwiQXBwIiwidHJpZ2dlciIsImdvdG8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsZUFBS0MsTUFBTCxDQUFZO0FBQzNCQyxZQUFRO0FBQ0osaUJBQVM7QUFETCxLQURtQjtBQUkzQkMsZUFKMkIseUJBSWQ7QUFDVCxvQ0FBa0JDLFNBQWxCO0FBQ0FDLFlBQUlILE1BQUosQ0FBV0ksT0FBWCxDQUFtQixXQUFuQjtBQUNBLDhCQUFZQyxJQUFaLENBQWlCLE1BQWpCO0FBQ0g7QUFSMEIsQ0FBWixDQUFuQjtrQkFXZVAsVSIsImZpbGUiOiJCYWNrQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xyXG5pbXBvcnQgUGFnZUhhbmRsZXIgZnJvbSBcIi4uLy4uL1BhZ2VIYW5kbGVyXCI7XHJcbmltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi4vLi4vRGF0YVN0cmVhbUhhbmRsZXJcIjtcclxuXHJcbmNvbnN0IEJhY2tCdXR0b24gPSBWaWV3LmV4dGVuZCh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICAnY2xpY2snOiAnaGFuZGxlQ2xpY2snXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlQ2xpY2soKXtcclxuICAgICAgICBEYXRhU3RyZWFtSGFuZGxlci5sZWF2ZVJvb20oKTtcclxuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJsZWF2ZVJvb21cIik7XHJcbiAgICAgICAgUGFnZUhhbmRsZXIuZ290bygnbGlzdCcpO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tCdXR0b247Il19

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PageHandler = function () {
	    function PageHandler() {
	        _classCallCheck(this, PageHandler);

	        this.pages = new Map();
	    }

	    _createClass(PageHandler, [{
	        key: "goto",
	        value: function goto(name) {
	            var _this = this;

	            var promises = Array.from(this.pages.values()).map(function (obj) {
	                return obj.hidePage();
	            });
	            Promise.all(promises).then(function () {
	                _this.pages.get(name).showPage();
	            });
	        }
	    }, {
	        key: "addPage",
	        value: function addPage(page) {
	            this.pages.set(page.name, page);
	        }
	    }]);

	    return PageHandler;
	}();

	exports.default = new PageHandler();
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcUGFnZUhhbmRsZXIuanMiXSwibmFtZXMiOlsiUGFnZUhhbmRsZXIiLCJwYWdlcyIsIk1hcCIsIm5hbWUiLCJwcm9taXNlcyIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsIm1hcCIsIm9iaiIsImhpZGVQYWdlIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJnZXQiLCJzaG93UGFnZSIsInBhZ2UiLCJzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVztBQUNGLDJCQUFhO0FBQUE7O0FBQ1QsYUFBS0MsS0FBTCxHQUFhLElBQUlDLEdBQUosRUFBYjtBQUNIOzs7OzZCQUNJQyxJLEVBQUs7QUFBQTs7QUFDTixnQkFBSUMsV0FBV0MsTUFBTUMsSUFBTixDQUFXLEtBQUtMLEtBQUwsQ0FBV00sTUFBWCxFQUFYLEVBQWdDQyxHQUFoQyxDQUFvQyxVQUFDQyxHQUFELEVBQVM7QUFDeEQsdUJBQU9BLElBQUlDLFFBQUosRUFBUDtBQUNILGFBRmMsQ0FBZjtBQUdBQyxvQkFBUUMsR0FBUixDQUFZUixRQUFaLEVBQXNCUyxJQUF0QixDQUEyQixZQUFNO0FBQUMsc0JBQUtaLEtBQUwsQ0FBV2EsR0FBWCxDQUFlWCxJQUFmLEVBQXFCWSxRQUFyQjtBQUFnQyxhQUFsRTtBQUNIOzs7Z0NBQ09DLEksRUFBSztBQUNULGlCQUFLZixLQUFMLENBQVdnQixHQUFYLENBQWVELEtBQUtiLElBQXBCLEVBQTBCYSxJQUExQjtBQUNIOzs7Ozs7a0JBRVcsSUFBSWhCLFdBQUosRSIsImZpbGUiOiJQYWdlSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGFnZUhhbmRsZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcbiAgICBnb3RvKG5hbWUpe1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IEFycmF5LmZyb20odGhpcy5wYWdlcy52YWx1ZXMoKSkubWFwKChvYmopID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5oaWRlUGFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt0aGlzLnBhZ2VzLmdldChuYW1lKS5zaG93UGFnZSgpfSk7XHJcbiAgICB9XHJcbiAgICBhZGRQYWdlKHBhZ2Upe1xyXG4gICAgICAgIHRoaXMucGFnZXMuc2V0KHBhZ2UubmFtZSwgcGFnZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgKG5ldyBQYWdlSGFuZGxlcik7Il19

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var _underscore = __webpack_require__(7);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RoomOverview = _backbone.View.extend({
	    initialize: function initialize() {
	        this.listenTo(this.model, "change:users", this.updateDom);
	        _underscore2.default.templateSettings.variable = "users";
	        this.template = _underscore2.default.template($('#users-template').html());
	    },
	    updateDom: function updateDom(e, a) {
	        this.$el.html(this.template(a));
	    }

	});
	exports.default = RoomOverview;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb21cXFVzZXJzSW5Sb29tTGlzdC5qcyJdLCJuYW1lcyI6WyJSb29tT3ZlcnZpZXciLCJleHRlbmQiLCJpbml0aWFsaXplIiwibGlzdGVuVG8iLCJtb2RlbCIsInVwZGF0ZURvbSIsInRlbXBsYXRlU2V0dGluZ3MiLCJ2YXJpYWJsZSIsInRlbXBsYXRlIiwiJCIsImh0bWwiLCJlIiwiYSIsIiRlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsZUFBS0MsTUFBTCxDQUFZO0FBQzdCQyxnQkFBWSxzQkFBWTtBQUNwQixhQUFLQyxRQUFMLENBQWMsS0FBS0MsS0FBbkIsRUFBMEIsY0FBMUIsRUFBMEMsS0FBS0MsU0FBL0M7QUFDQSw2QkFBRUMsZ0JBQUYsQ0FBbUJDLFFBQW5CLEdBQThCLE9BQTlCO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixxQkFBRUEsUUFBRixDQUFXQyxFQUFFLGlCQUFGLEVBQXFCQyxJQUFyQixFQUFYLENBQWhCO0FBQ0gsS0FMNEI7QUFNN0JMLGVBQVcsbUJBQVNNLENBQVQsRUFBWUMsQ0FBWixFQUFjO0FBQ3JCLGFBQUtDLEdBQUwsQ0FBU0gsSUFBVCxDQUFjLEtBQUtGLFFBQUwsQ0FBY0ksQ0FBZCxDQUFkO0FBQ0g7O0FBUjRCLENBQVosQ0FBckI7a0JBV2VaLFkiLCJmaWxlIjoiVXNlcnNJblJvb21MaXN0LmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xyXG5pbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xyXG5cclxuY29uc3QgUm9vbU92ZXJ2aWV3ID0gVmlldy5leHRlbmQoe1xyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgXCJjaGFuZ2U6dXNlcnNcIiwgdGhpcy51cGRhdGVEb20pO1xyXG4gICAgICAgIF8udGVtcGxhdGVTZXR0aW5ncy52YXJpYWJsZSA9IFwidXNlcnNcIjtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKCcjdXNlcnMtdGVtcGxhdGUnKS5odG1sKCkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZURvbTogZnVuY3Rpb24oZSwgYSl7XHJcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKGEpKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBSb29tT3ZlcnZpZXc7Il19

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Page = __webpack_require__(31);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Room = _Page2.default.extend({
	  initialize: function initialize() {
	    this.name = 'room';
	  }
	});
	exports.default = Room;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXHJvb20uanMiXSwibmFtZXMiOlsiUm9vbSIsImV4dGVuZCIsImluaXRpYWxpemUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxlQUFLQyxNQUFMLENBQVk7QUFDckJDLFlBRHFCLHdCQUNUO0FBQ1YsU0FBS0MsSUFBTCxHQUFZLE1BQVo7QUFDRDtBQUhvQixDQUFaLENBQWI7a0JBS2VILEkiLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xyXG5cclxuY29uc3QgUm9vbSA9IFBhZ2UuZXh0ZW5kKHtcclxuICAgIGluaXRpYWxpemUoKXtcclxuICAgICAgdGhpcy5uYW1lID0gJ3Jvb20nO1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgUm9vbTsiXX0=

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var Page = _backbone.View.extend({
	    hidePage: function hidePage() {
	        return this.$el.fadeOut().promise();
	    },
	    showPage: function showPage() {
	        this.$el.fadeIn();
	        App.events.trigger('initialize' + this.name);
	    }
	});
	exports.default = Page;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXFBhZ2UuanMiXSwibmFtZXMiOlsiUGFnZSIsImV4dGVuZCIsImhpZGVQYWdlIiwiJGVsIiwiZmFkZU91dCIsInByb21pc2UiLCJzaG93UGFnZSIsImZhZGVJbiIsIkFwcCIsImV2ZW50cyIsInRyaWdnZXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxPQUFPLGVBQUtDLE1BQUwsQ0FBWTtBQUNyQkMsWUFEcUIsc0JBQ1g7QUFDTixlQUFPLEtBQUtDLEdBQUwsQ0FBU0MsT0FBVCxHQUFtQkMsT0FBbkIsRUFBUDtBQUNILEtBSG9CO0FBSXJCQyxZQUpxQixzQkFJWDtBQUNOLGFBQUtILEdBQUwsQ0FBU0ksTUFBVDtBQUNBQyxZQUFJQyxNQUFKLENBQVdDLE9BQVgsQ0FBb0IsZUFBYSxLQUFLQyxJQUF0QztBQUNIO0FBUG9CLENBQVosQ0FBYjtrQkFTZVgsSSIsImZpbGUiOiJQYWdlLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gJ2JhY2tib25lJztcclxuXHJcbmNvbnN0IFBhZ2UgPSBWaWV3LmV4dGVuZCh7XHJcbiAgICBoaWRlUGFnZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRlbC5mYWRlT3V0KCkucHJvbWlzZSgpO1xyXG4gICAgfSxcclxuICAgIHNob3dQYWdlKCl7XHJcbiAgICAgICAgdGhpcy4kZWwuZmFkZUluKCk7XHJcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKCgnaW5pdGlhbGl6ZScrdGhpcy5uYW1lKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdfQ==

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Page = __webpack_require__(31);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Roomlist = _Page2.default.extend({
	    initialize: function initialize() {
	        this.name = 'list';
	    }
	});
	exports.default = Roomlist;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXFJvb21zUGFnZS5qcyJdLCJuYW1lcyI6WyJSb29tbGlzdCIsImV4dGVuZCIsImluaXRpYWxpemUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxlQUFLQyxNQUFMLENBQVk7QUFDekJDLGNBRHlCLHdCQUNiO0FBQ1IsYUFBS0MsSUFBTCxHQUFZLE1BQVo7QUFDSDtBQUh3QixDQUFaLENBQWpCO2tCQUtlSCxRIiwiZmlsZSI6IlJvb21zUGFnZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xyXG5cclxuY29uc3QgUm9vbWxpc3QgPSBQYWdlLmV4dGVuZCh7XHJcbiAgICBpbml0aWFsaXplKCl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ2xpc3QnO1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgUm9vbWxpc3Q7Il19

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Page = __webpack_require__(31);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NamePage = _Page2.default.extend({
	    initialize: function initialize() {
	        this.name = 'name';
	    }
	});
	exports.default = NamePage;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXE5hbWUuanMiXSwibmFtZXMiOlsiTmFtZVBhZ2UiLCJleHRlbmQiLCJpbml0aWFsaXplIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFdBQVcsZUFBS0MsTUFBTCxDQUFZO0FBQ3pCQyxjQUR5Qix3QkFDYjtBQUNSLGFBQUtDLElBQUwsR0FBWSxNQUFaO0FBQ0g7QUFId0IsQ0FBWixDQUFqQjtrQkFLZUgsUSIsImZpbGUiOiJOYW1lLmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlXCI7XHJcblxyXG5jb25zdCBOYW1lUGFnZSA9IFBhZ2UuZXh0ZW5kKHtcclxuICAgIGluaXRpYWxpemUoKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSAnbmFtZSc7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBOYW1lUGFnZTsiXX0=

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var NameButton = _backbone.View.extend({
	    events: {
	        'click': 'clickHandler'
	    },
	    clickHandler: function clickHandler() {
	        App.events.trigger('selectName');
	    }
	});
	exports.default = NameButton;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXE5hbWVQYWdlXFxOYW1lQnV0dG9uLmpzIl0sIm5hbWVzIjpbIk5hbWVCdXR0b24iLCJleHRlbmQiLCJldmVudHMiLCJjbGlja0hhbmRsZXIiLCJBcHAiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLGVBQUtDLE1BQUwsQ0FBWTtBQUMzQkMsWUFBUTtBQUNKLGlCQUFTO0FBREwsS0FEbUI7QUFJM0JDLGtCQUFjLHdCQUFVO0FBQ3BCQyxZQUFJRixNQUFKLENBQVdHLE9BQVgsQ0FBbUIsWUFBbkI7QUFDSDtBQU4wQixDQUFaLENBQW5CO2tCQVFlTCxVIiwiZmlsZSI6Ik5hbWVCdXR0b24uanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vmlld30gZnJvbSBcImJhY2tib25lXCI7XHJcblxyXG5jb25zdCBOYW1lQnV0dG9uID0gVmlldy5leHRlbmQoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgJ2NsaWNrJzogJ2NsaWNrSGFuZGxlcidcclxuICAgIH0sXHJcbiAgICBjbGlja0hhbmRsZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKCdzZWxlY3ROYW1lJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBOYW1lQnV0dG9uXHJcbiJdfQ==

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var _DataStreamHandler = __webpack_require__(3);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	var _PageHandler = __webpack_require__(28);

	var _PageHandler2 = _interopRequireDefault(_PageHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NameInput = _backbone.View.extend({
	    events: {
	        'keydown': 'keyHandler'
	    },
	    initialize: function initialize() {
	        var _this = this;

	        App.events.on('selectName', function () {
	            return _this.selectName();
	        });
	    },

	    keyHandler: function keyHandler(e) {
	        if (e.keyCode == 13) {
	            this.selectName();
	        }
	    },
	    selectName: function selectName() {
	        _DataStreamHandler2.default.sendName(this.popData());
	        _PageHandler2.default.goto('list');
	    },

	    popData: function popData() {
	        var tmp = this.$el.val();
	        this.$el.val('');
	        return tmp;
	    }
	});
	exports.default = NameInput;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXE5hbWVQYWdlXFxOYW1lSW5wdXQuanMiXSwibmFtZXMiOlsiTmFtZUlucHV0IiwiZXh0ZW5kIiwiZXZlbnRzIiwiaW5pdGlhbGl6ZSIsIkFwcCIsIm9uIiwic2VsZWN0TmFtZSIsImtleUhhbmRsZXIiLCJlIiwia2V5Q29kZSIsInNlbmROYW1lIiwicG9wRGF0YSIsImdvdG8iLCJ0bXAiLCIkZWwiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksZUFBS0MsTUFBTCxDQUFZO0FBQzFCQyxZQUFRO0FBQ0osbUJBQVc7QUFEUCxLQURrQjtBQUkxQkMsY0FKMEIsd0JBSWQ7QUFBQTs7QUFDUkMsWUFBSUYsTUFBSixDQUFXRyxFQUFYLENBQWMsWUFBZCxFQUE0QjtBQUFBLG1CQUFNLE1BQUtDLFVBQUwsRUFBTjtBQUFBLFNBQTVCO0FBQ0gsS0FOeUI7O0FBTzFCQyxnQkFBWSxvQkFBU0MsQ0FBVCxFQUFXO0FBQ25CLFlBQUdBLEVBQUVDLE9BQUYsSUFBYSxFQUFoQixFQUFtQjtBQUNmLGlCQUFLSCxVQUFMO0FBQ0g7QUFDSixLQVh5QjtBQVkxQkEsY0FaMEIsd0JBWWQ7QUFDUixvQ0FBa0JJLFFBQWxCLENBQTJCLEtBQUtDLE9BQUwsRUFBM0I7QUFDQSw4QkFBWUMsSUFBWixDQUFpQixNQUFqQjtBQUNILEtBZnlCOztBQWdCMUJELGFBQVMsbUJBQVU7QUFDZixZQUFJRSxNQUFNLEtBQUtDLEdBQUwsQ0FBU0MsR0FBVCxFQUFWO0FBQ0EsYUFBS0QsR0FBTCxDQUFTQyxHQUFULENBQWEsRUFBYjtBQUNBLGVBQU9GLEdBQVA7QUFDSDtBQXBCeUIsQ0FBWixDQUFsQjtrQkFzQmViLFMiLCJmaWxlIjoiTmFtZUlucHV0LmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xyXG5pbXBvcnQgRGF0YVN0cmVhbUhhbmRsZXIgZnJvbSBcIi4vLi4vLi4vRGF0YVN0cmVhbUhhbmRsZXJcIjtcclxuaW1wb3J0IFBhZ2VIYW5kbGVyIGZyb20gXCIuLy4uLy4uL1BhZ2VIYW5kbGVyXCI7XHJcblxyXG5jb25zdCBOYW1lSW5wdXQgPSBWaWV3LmV4dGVuZCh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICAna2V5ZG93bic6ICdrZXlIYW5kbGVyJ1xyXG4gICAgfSxcclxuICAgIGluaXRpYWxpemUoKXtcclxuICAgICAgICBBcHAuZXZlbnRzLm9uKCdzZWxlY3ROYW1lJywgKCkgPT4gdGhpcy5zZWxlY3ROYW1lKCkpO1xyXG4gICAgfSxcclxuICAgIGtleUhhbmRsZXI6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGlmKGUua2V5Q29kZSA9PSAxMyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TmFtZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZWxlY3ROYW1lKCl7XHJcbiAgICAgICAgRGF0YVN0cmVhbUhhbmRsZXIuc2VuZE5hbWUodGhpcy5wb3BEYXRhKCkpO1xyXG4gICAgICAgIFBhZ2VIYW5kbGVyLmdvdG8oJ2xpc3QnKTtcclxuICAgIH0sXHJcbiAgICBwb3BEYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCB0bXAgPSB0aGlzLiRlbC52YWwoKTtcclxuICAgICAgICB0aGlzLiRlbC52YWwoJycpO1xyXG4gICAgICAgIHJldHVybiB0bXA7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBOYW1lSW5wdXRcclxuXHJcbiJdfQ==

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var RoomCreateButton = _backbone.View.extend({
	    events: {
	        'click': 'clickHandler'
	    },
	    clickHandler: function clickHandler() {
	        App.events.trigger('createNewRoom');
	    }
	});
	exports.default = RoomCreateButton;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGxpc3RWaWV3XFxuZXdSb29tXFxSb29tQ3JlYXRlQnV0dG9uLmpzIl0sIm5hbWVzIjpbIlJvb21DcmVhdGVCdXR0b24iLCJleHRlbmQiLCJldmVudHMiLCJjbGlja0hhbmRsZXIiLCJBcHAiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxtQkFBbUIsZUFBS0MsTUFBTCxDQUFZO0FBQ2pDQyxZQUFRO0FBQ0osaUJBQVM7QUFETCxLQUR5QjtBQUlqQ0Msa0JBQWMsd0JBQVU7QUFDcEJDLFlBQUlGLE1BQUosQ0FBV0csT0FBWCxDQUFtQixlQUFuQjtBQUNIO0FBTmdDLENBQVosQ0FBekI7a0JBUWVMLGdCIiwiZmlsZSI6IlJvb21DcmVhdGVCdXR0b24uanMiLCJzb3VyY2VSb290IjoiRDovUHJvZ3JhbW1hcy94YW1wL2h0ZG9jcy9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vmlld30gZnJvbSBcImJhY2tib25lXCI7XHJcblxyXG5jb25zdCBSb29tQ3JlYXRlQnV0dG9uID0gVmlldy5leHRlbmQoe1xyXG4gICAgZXZlbnRzOiB7XHJcbiAgICAgICAgJ2NsaWNrJzogJ2NsaWNrSGFuZGxlcidcclxuICAgIH0sXHJcbiAgICBjbGlja0hhbmRsZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKCdjcmVhdGVOZXdSb29tJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBSb29tQ3JlYXRlQnV0dG9uXHJcbiJdfQ==

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _DataStreamHandler = __webpack_require__(3);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	var _PageHandler = __webpack_require__(28);

	var _PageHandler2 = _interopRequireDefault(_PageHandler);

	var _underscore = __webpack_require__(7);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbone = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RoomList = _backbone.View.extend({
	    events: {
	        "click .room--list": "clickHandler"
	    },
	    initialize: function initialize() {
	        var _this = this;

	        App.events.on('updateRooms', function (e) {
	            return _this.updateRoomList(e);
	        });

	        _underscore2.default.templateSettings.variable = "rooms";
	        this.template = _underscore2.default.template($('#roomList-template').html());
	    },
	    clickHandler: function clickHandler(e) {
	        _PageHandler2.default.goto('room');
	        _DataStreamHandler2.default.joinRoom(e.currentTarget.dataset.name);
	    },
	    updateRoomList: function updateRoomList(rooms) {
	        this.$el.html(this.template(rooms));
	    }
	});
	exports.default = RoomList;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGxpc3RWaWV3XFxyb29tc1xcUm9vbUxpc3QuanMiXSwibmFtZXMiOlsiUm9vbUxpc3QiLCJleHRlbmQiLCJldmVudHMiLCJpbml0aWFsaXplIiwiQXBwIiwib24iLCJlIiwidXBkYXRlUm9vbUxpc3QiLCJ0ZW1wbGF0ZVNldHRpbmdzIiwidmFyaWFibGUiLCJ0ZW1wbGF0ZSIsIiQiLCJodG1sIiwiY2xpY2tIYW5kbGVyIiwiZ290byIsImpvaW5Sb29tIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYW1lIiwicm9vbXMiLCIkZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsV0FBVyxlQUFLQyxNQUFMLENBQVk7QUFDekJDLFlBQVE7QUFDSiw2QkFBcUI7QUFEakIsS0FEaUI7QUFJekJDLGdCQUFZLHNCQUFZO0FBQUE7O0FBQ3BCQyxZQUFJRixNQUFKLENBQVdHLEVBQVgsQ0FBYyxhQUFkLEVBQTZCLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLQyxjQUFMLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBN0I7O0FBRUEsNkJBQUVFLGdCQUFGLENBQW1CQyxRQUFuQixHQUE4QixPQUE5QjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0IscUJBQUVBLFFBQUYsQ0FBV0MsRUFBRSxvQkFBRixFQUF3QkMsSUFBeEIsRUFBWCxDQUFoQjtBQUNILEtBVHdCO0FBVXpCQyxrQkFBYyxzQkFBVVAsQ0FBVixFQUFhO0FBQ3ZCLDhCQUFZUSxJQUFaLENBQWlCLE1BQWpCO0FBQ0Esb0NBQWtCQyxRQUFsQixDQUEyQlQsRUFBRVUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQW5EO0FBQ0gsS0Fid0I7QUFjekJYLG9CQUFnQix3QkFBVVksS0FBVixFQUFpQjtBQUM3QixhQUFLQyxHQUFMLENBQVNSLElBQVQsQ0FBYyxLQUFLRixRQUFMLENBQWNTLEtBQWQsQ0FBZDtBQUNIO0FBaEJ3QixDQUFaLENBQWpCO2tCQWtCZ0JuQixRIiwiZmlsZSI6IlJvb21MaXN0LmpzIiwic291cmNlUm9vdCI6IkQ6L1Byb2dyYW1tYXMveGFtcC9odGRvY3MvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YVN0cmVhbUhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL0RhdGFTdHJlYW1IYW5kbGVyXCI7XHJcbmltcG9ydCBQYWdlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vUGFnZUhhbmRsZXJcIlxyXG5pbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xyXG5pbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xyXG5cclxuY29uc3QgUm9vbUxpc3QgPSBWaWV3LmV4dGVuZCh7XHJcbiAgICBldmVudHM6IHtcclxuICAgICAgICBcImNsaWNrIC5yb29tLS1saXN0XCI6IFwiY2xpY2tIYW5kbGVyXCJcclxuICAgIH0sXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbigndXBkYXRlUm9vbXMnLCAoZSkgPT4gdGhpcy51cGRhdGVSb29tTGlzdChlKSk7XHJcblxyXG4gICAgICAgIF8udGVtcGxhdGVTZXR0aW5ncy52YXJpYWJsZSA9IFwicm9vbXNcIjtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKCcjcm9vbUxpc3QtdGVtcGxhdGUnKS5odG1sKCkpO1xyXG4gICAgfSxcclxuICAgIGNsaWNrSGFuZGxlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBQYWdlSGFuZGxlci5nb3RvKCdyb29tJyk7XHJcbiAgICAgICAgRGF0YVN0cmVhbUhhbmRsZXIuam9pblJvb20oZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlUm9vbUxpc3Q6IGZ1bmN0aW9uIChyb29tcykge1xyXG4gICAgICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShyb29tcykpO1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0ICBkZWZhdWx0IFJvb21MaXN0O1xyXG4iXX0=

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var _PageHandler = __webpack_require__(28);

	var _PageHandler2 = _interopRequireDefault(_PageHandler);

	var _DataStreamHandler = __webpack_require__(3);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NewRoomInput = _backbone.View.extend({
	    initialize: function initialize() {
	        var _this = this;

	        App.events.on('createNewRoom', function () {
	            return _this.createRoom();
	        });
	    },
	    events: {
	        'keydown': 'keyHandler'
	    },
	    keyHandler: function keyHandler(e) {
	        if (e.keyCode == 13) {
	            this.createRoom();
	        }
	    },
	    popData: function popData() {
	        var tmp = this.$el.val();
	        this.$el.val('');
	        return tmp;
	    },
	    createRoom: function createRoom() {
	        _PageHandler2.default.goto('room');
	        _DataStreamHandler2.default.joinRoom(this.popData());
	    }
	});
	exports.default = NewRoomInput;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdmlld3NcXGxpc3RWaWV3XFxuZXdSb29tXFxOZXdSb29tSW5wdXQuanMiXSwibmFtZXMiOlsiTmV3Um9vbUlucHV0IiwiZXh0ZW5kIiwiaW5pdGlhbGl6ZSIsIkFwcCIsImV2ZW50cyIsIm9uIiwiY3JlYXRlUm9vbSIsImtleUhhbmRsZXIiLCJlIiwia2V5Q29kZSIsInBvcERhdGEiLCJ0bXAiLCIkZWwiLCJ2YWwiLCJnb3RvIiwiam9pblJvb20iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsZUFBS0MsTUFBTCxDQUFZO0FBQzdCQyxnQkFBYSxzQkFBVTtBQUFBOztBQUNuQkMsWUFBSUMsTUFBSixDQUFXQyxFQUFYLENBQWMsZUFBZCxFQUErQjtBQUFBLG1CQUFNLE1BQUtDLFVBQUwsRUFBTjtBQUFBLFNBQS9CO0FBQ0gsS0FINEI7QUFJN0JGLFlBQVE7QUFDSixtQkFBVztBQURQLEtBSnFCO0FBTzdCRyxnQkFBWSxvQkFBU0MsQ0FBVCxFQUFXO0FBQ25CLFlBQUdBLEVBQUVDLE9BQUYsSUFBYSxFQUFoQixFQUFtQjtBQUNmLGlCQUFLSCxVQUFMO0FBQ0g7QUFDSixLQVg0QjtBQVk3QkksYUFBUyxtQkFBVTtBQUNmLFlBQUlDLE1BQU0sS0FBS0MsR0FBTCxDQUFTQyxHQUFULEVBQVY7QUFDQSxhQUFLRCxHQUFMLENBQVNDLEdBQVQsQ0FBYSxFQUFiO0FBQ0EsZUFBT0YsR0FBUDtBQUNILEtBaEI0QjtBQWlCN0JMLGdCQUFZLHNCQUFVO0FBQ2xCLDhCQUFZUSxJQUFaLENBQWlCLE1BQWpCO0FBQ0Esb0NBQWtCQyxRQUFsQixDQUEyQixLQUFLTCxPQUFMLEVBQTNCO0FBQ0g7QUFwQjRCLENBQVosQ0FBckI7a0JBc0JlVixZIiwiZmlsZSI6Ik5ld1Jvb21JbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcclxuaW1wb3J0IFBhZ2VIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9QYWdlSGFuZGxlclwiO1xyXG5pbXBvcnQgRGF0YVN0cmVhbUhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL0RhdGFTdHJlYW1IYW5kbGVyXCI7XHJcblxyXG5jb25zdCBOZXdSb29tSW5wdXQgPSBWaWV3LmV4dGVuZCh7XHJcbiAgICBpbml0aWFsaXplIDogZnVuY3Rpb24oKXtcclxuICAgICAgICBBcHAuZXZlbnRzLm9uKCdjcmVhdGVOZXdSb29tJywgKCkgPT4gdGhpcy5jcmVhdGVSb29tKCkpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50czoge1xyXG4gICAgICAgICdrZXlkb3duJzogJ2tleUhhbmRsZXInXHJcbiAgICB9LFxyXG4gICAga2V5SGFuZGxlcjogZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYoZS5rZXlDb2RlID09IDEzKXtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVSb29tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBvcERhdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuJGVsLnZhbCgpO1xyXG4gICAgICAgIHRoaXMuJGVsLnZhbCgnJyk7XHJcbiAgICAgICAgcmV0dXJuIHRtcDtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVSb29tOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIFBhZ2VIYW5kbGVyLmdvdG8oJ3Jvb20nKTtcclxuICAgICAgICBEYXRhU3RyZWFtSGFuZGxlci5qb2luUm9vbSh0aGlzLnBvcERhdGEoKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBOZXdSb29tSW5wdXRcclxuIl19

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var _DataStreamHandler = __webpack_require__(3);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Canvas = _backbone.Model.extend({
	    defaults: {
	        scale: 5,
	        height: 32, // how many pixels on the Y axis
	        width: 32, //  how many pixels on the x axis
	        pixels: [],
	        selectedColor: '#000000',
	        highlightHelpLineColor: "#FF0000",
	        defaultHelpLineColor: "#000000",
	        highLightColor: "#55DD55",
	        drawHelpLines: false,
	        dragging: false,
	        draggingSecondary: false,
	        lastMousePos: {
	            x: 0,
	            y: 0
	        },
	        position: {
	            x: 0,
	            y: 0
	        },
	        tools: [],
	        selectedTool: {}
	    },
	    initialize: function initialize() {
	        var _this = this;

	        this.reset();
	        App.events.on("leaveRoom", function () {
	            return _this.reset();
	        });
	        App.events.on("changeDimensions", function (e) {
	            return _this.changeDimensions(e);
	        });
	        App.events.on("sendAllDataToUser", function (e) {
	            return _this.sendAllDataToUser(e);
	        });
	        App.events.on("initializeRoomCanvas", function (e) {
	            return _this.initializeCanvas(e);
	        });
	    },
	    reset: function reset() {
	        var pixels = [];
	        for (var i = 0; i < this.get("width"); i++) {
	            pixels[i] = [];
	            for (var j = 0; j < this.get("height"); j++) {
	                pixels[i][j] = 0;
	            }
	        }
	        this.set("pixels", pixels);
	    },
	    inputToPixelIndex: function inputToPixelIndex(offsetX, offsetY) {
	        var position = this.get("position");
	        var scale = this.get("scale");
	        if (offsetX > position.x && offsetY > position.y && offsetX < position.x + this.get("width") * scale && offsetY < position.y + this.get("height") * scale) {
	            return {
	                x: Math.floor((offsetX - position.x) / scale),
	                y: Math.floor((offsetY - position.y) / scale)
	            };
	        }
	        return false;
	    },
	    reposition: function reposition(x, y) {
	        var newPosition = {
	            x: this.get("position").x + x,
	            y: this.get("position").y + y
	        };
	        this.set("position", newPosition);
	    },
	    changeDimensions: function changeDimensions(data) {
	        var oldWidth = this.get("width");
	        var oldHeight = this.get("height");
	        var newPixels = [];
	        var oldPixels = this.get("pixels");
	        for (var i = 0; i < (data.hasOwnProperty('width') ? data.width : this.get("width")); i++) {
	            newPixels[i] = [];
	            for (var j = 0; j < (data.hasOwnProperty('height') ? data.height : this.get("height")); j++) {
	                if (i < oldWidth && j < oldHeight) {
	                    newPixels[i][j] = oldPixels[i][j];
	                } else {
	                    newPixels[i][j] = 0;
	                }
	            }
	        }
	        this.set("pixels", newPixels);
	        if (data.hasOwnProperty('width')) {
	            this.set("width", data.width);
	        }
	        if (data.hasOwnProperty('height')) {
	            this.set("height", data.height);
	        }
	    },

	    sendAllDataToUser: function sendAllDataToUser(data) {
	        var pixelArray = [];
	        var pixels = this.get("pixels");
	        for (var i = 0; i < this.get("width"); i++) {
	            for (var j = 0; j < this.get("height"); j++) {
	                pixelArray.push({
	                    x: i,
	                    y: j,
	                    color: pixels[i][j]
	                });
	            }
	        }
	        var canvasData = {
	            pixels: pixelArray,
	            width: this.get("width"),
	            height: this.get("height")
	        };
	        _DataStreamHandler2.default.sendCanvasData(canvasData, data);
	    },
	    initializeCanvas: function initializeCanvas(data) {
	        App.events.trigger("changeDimensions", { width: data.canvasData.width, height: data.canvasData.height });
	        App.events.trigger("updatePixels", data.canvasData.pixels);
	    }
	});
	exports.default = Canvas;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbW9kZWxzXFxDYW52YXMuanMiXSwibmFtZXMiOlsiQ2FudmFzIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJzY2FsZSIsImhlaWdodCIsIndpZHRoIiwicGl4ZWxzIiwic2VsZWN0ZWRDb2xvciIsImhpZ2hsaWdodEhlbHBMaW5lQ29sb3IiLCJkZWZhdWx0SGVscExpbmVDb2xvciIsImhpZ2hMaWdodENvbG9yIiwiZHJhd0hlbHBMaW5lcyIsImRyYWdnaW5nIiwiZHJhZ2dpbmdTZWNvbmRhcnkiLCJsYXN0TW91c2VQb3MiLCJ4IiwieSIsInBvc2l0aW9uIiwidG9vbHMiLCJzZWxlY3RlZFRvb2wiLCJpbml0aWFsaXplIiwicmVzZXQiLCJBcHAiLCJldmVudHMiLCJvbiIsImUiLCJjaGFuZ2VEaW1lbnNpb25zIiwic2VuZEFsbERhdGFUb1VzZXIiLCJpbml0aWFsaXplQ2FudmFzIiwiaSIsImdldCIsImoiLCJzZXQiLCJpbnB1dFRvUGl4ZWxJbmRleCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiTWF0aCIsImZsb29yIiwicmVwb3NpdGlvbiIsIm5ld1Bvc2l0aW9uIiwiZGF0YSIsIm9sZFdpZHRoIiwib2xkSGVpZ2h0IiwibmV3UGl4ZWxzIiwib2xkUGl4ZWxzIiwiaGFzT3duUHJvcGVydHkiLCJwaXhlbEFycmF5IiwicHVzaCIsImNvbG9yIiwiY2FudmFzRGF0YSIsInNlbmRDYW52YXNEYXRhIiwidHJpZ2dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsZ0JBQU1DLE1BQU4sQ0FBYTtBQUN4QkMsY0FBVTtBQUNOQyxlQUFPLENBREQ7QUFFTkMsZ0JBQVEsRUFGRixFQUVNO0FBQ1pDLGVBQU8sRUFIRCxFQUdLO0FBQ1hDLGdCQUFRLEVBSkY7QUFLTkMsdUJBQWUsU0FMVDtBQU1OQyxnQ0FBd0IsU0FObEI7QUFPTkMsOEJBQXNCLFNBUGhCO0FBUU5DLHdCQUFnQixTQVJWO0FBU05DLHVCQUFlLEtBVFQ7QUFVTkMsa0JBQVUsS0FWSjtBQVdOQywyQkFBbUIsS0FYYjtBQVlOQyxzQkFBYztBQUNWQyxlQUFHLENBRE87QUFFVkMsZUFBRztBQUZPLFNBWlI7QUFnQk5DLGtCQUFVO0FBQ05GLGVBQUcsQ0FERztBQUVOQyxlQUFHO0FBRkcsU0FoQko7QUFvQk5FLGVBQU8sRUFwQkQ7QUFxQk5DLHNCQUFjO0FBckJSLEtBRGM7QUF3QnhCQyxnQkFBWSxzQkFBWTtBQUFBOztBQUNwQixhQUFLQyxLQUFMO0FBQ0FDLFlBQUlDLE1BQUosQ0FBV0MsRUFBWCxDQUFjLFdBQWQsRUFBMkI7QUFBQSxtQkFBTSxNQUFLSCxLQUFMLEVBQU47QUFBQSxTQUEzQjtBQUNBQyxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxrQkFBZCxFQUFrQyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0MsZ0JBQUwsQ0FBc0JELENBQXRCLENBQVA7QUFBQSxTQUFsQztBQUNBSCxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxtQkFBZCxFQUFtQyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0UsaUJBQUwsQ0FBdUJGLENBQXZCLENBQVA7QUFBQSxTQUFuQztBQUNBSCxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxzQkFBZCxFQUFzQyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0csZ0JBQUwsQ0FBc0JILENBQXRCLENBQVA7QUFBQSxTQUF0QztBQUNILEtBOUJ1QjtBQStCeEJKLFdBQU8saUJBQVU7QUFDYixZQUFJZixTQUFTLEVBQWI7QUFDQSxhQUFLLElBQUl1QixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS0MsR0FBTCxDQUFTLE9BQVQsQ0FBcEIsRUFBdUNELEdBQXZDLEVBQTRDO0FBQ3hDdkIsbUJBQU91QixDQUFQLElBQVksRUFBWjtBQUNBLGlCQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLRCxHQUFMLENBQVMsUUFBVCxDQUFwQixFQUF3Q0MsR0FBeEMsRUFBNkM7QUFDekN6Qix1QkFBT3VCLENBQVAsRUFBVUUsQ0FBVixJQUFlLENBQWY7QUFDSDtBQUNKO0FBQ0QsYUFBS0MsR0FBTCxDQUFTLFFBQVQsRUFBbUIxQixNQUFuQjtBQUNILEtBeEN1QjtBQXlDeEIyQix1QkFBbUIsMkJBQVVDLE9BQVYsRUFBbUJDLE9BQW5CLEVBQTRCO0FBQzNDLFlBQUlsQixXQUFXLEtBQUthLEdBQUwsQ0FBUyxVQUFULENBQWY7QUFDQSxZQUFJM0IsUUFBUSxLQUFLMkIsR0FBTCxDQUFTLE9BQVQsQ0FBWjtBQUNBLFlBQUlJLFVBQVVqQixTQUFTRixDQUFuQixJQUF3Qm9CLFVBQVVsQixTQUFTRCxDQUEzQyxJQUNBa0IsVUFBVWpCLFNBQVNGLENBQVQsR0FBYSxLQUFLZSxHQUFMLENBQVMsT0FBVCxJQUFvQjNCLEtBRDNDLElBRUFnQyxVQUFVbEIsU0FBU0QsQ0FBVCxHQUFhLEtBQUtjLEdBQUwsQ0FBUyxRQUFULElBQXFCM0IsS0FGaEQsRUFFdUQ7QUFDbkQsbUJBQU87QUFDSFksbUJBQUdxQixLQUFLQyxLQUFMLENBQVcsQ0FBQ0gsVUFBVWpCLFNBQVNGLENBQXBCLElBQXlCWixLQUFwQyxDQURBO0FBRUhhLG1CQUFHb0IsS0FBS0MsS0FBTCxDQUFXLENBQUNGLFVBQVVsQixTQUFTRCxDQUFwQixJQUF5QmIsS0FBcEM7QUFGQSxhQUFQO0FBSUg7QUFDRCxlQUFPLEtBQVA7QUFDSCxLQXJEdUI7QUFzRHhCbUMsY0F0RHdCLHNCQXNEYnZCLENBdERhLEVBc0RWQyxDQXREVSxFQXVEeEI7QUFDSSxZQUFJdUIsY0FBYztBQUNkeEIsZUFBRyxLQUFLZSxHQUFMLENBQVMsVUFBVCxFQUFxQmYsQ0FBckIsR0FBeUJBLENBRGQ7QUFFZEMsZUFBRyxLQUFLYyxHQUFMLENBQVMsVUFBVCxFQUFxQmQsQ0FBckIsR0FBeUJBO0FBRmQsU0FBbEI7QUFJQSxhQUFLZ0IsR0FBTCxDQUFTLFVBQVQsRUFBcUJPLFdBQXJCO0FBQ0gsS0E3RHVCO0FBOER4QmIsb0JBOUR3Qiw0QkE4RFBjLElBOURPLEVBOERGO0FBQ2xCLFlBQUlDLFdBQVcsS0FBS1gsR0FBTCxDQUFTLE9BQVQsQ0FBZjtBQUNBLFlBQUlZLFlBQVksS0FBS1osR0FBTCxDQUFTLFFBQVQsQ0FBaEI7QUFDQSxZQUFJYSxZQUFZLEVBQWhCO0FBQ0EsWUFBSUMsWUFBWSxLQUFLZCxHQUFMLENBQVMsUUFBVCxDQUFoQjtBQUNBLGFBQUssSUFBSUQsSUFBSSxDQUFiLEVBQWdCQSxLQUFLVyxLQUFLSyxjQUFMLENBQW9CLE9BQXBCLElBQThCTCxLQUFLbkMsS0FBbkMsR0FBMEMsS0FBS3lCLEdBQUwsQ0FBUyxPQUFULENBQS9DLENBQWhCLEVBQW1GRCxHQUFuRixFQUF3RjtBQUNwRmMsc0JBQVVkLENBQVYsSUFBZSxFQUFmO0FBQ0EsaUJBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxLQUFLUyxLQUFLSyxjQUFMLENBQW9CLFFBQXBCLElBQStCTCxLQUFLcEMsTUFBcEMsR0FBNEMsS0FBSzBCLEdBQUwsQ0FBUyxRQUFULENBQWpELENBQWhCLEVBQXNGQyxHQUF0RixFQUEyRjtBQUN2RixvQkFBR0YsSUFBSVksUUFBSixJQUFnQlYsSUFBSVcsU0FBdkIsRUFBaUM7QUFDN0JDLDhCQUFVZCxDQUFWLEVBQWFFLENBQWIsSUFBa0JhLFVBQVVmLENBQVYsRUFBYUUsQ0FBYixDQUFsQjtBQUNILGlCQUZELE1BRUs7QUFDRFksOEJBQVVkLENBQVYsRUFBYUUsQ0FBYixJQUFrQixDQUFsQjtBQUNIO0FBQ0o7QUFDSjtBQUNELGFBQUtDLEdBQUwsQ0FBUyxRQUFULEVBQW1CVyxTQUFuQjtBQUNBLFlBQUdILEtBQUtLLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBSCxFQUFnQztBQUM1QixpQkFBS2IsR0FBTCxDQUFTLE9BQVQsRUFBa0JRLEtBQUtuQyxLQUF2QjtBQUNIO0FBQ0QsWUFBR21DLEtBQUtLLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBSCxFQUFpQztBQUM3QixpQkFBS2IsR0FBTCxDQUFTLFFBQVQsRUFBbUJRLEtBQUtwQyxNQUF4QjtBQUNIO0FBQ0osS0FwRnVCOztBQXFGeEJ1Qix1QkFBbUIsMkJBQVNhLElBQVQsRUFBYztBQUM3QixZQUFJTSxhQUFhLEVBQWpCO0FBQ0EsWUFBSXhDLFNBQVMsS0FBS3dCLEdBQUwsQ0FBUyxRQUFULENBQWI7QUFDQSxhQUFLLElBQUlELElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLQyxHQUFMLENBQVMsT0FBVCxDQUFwQixFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDeEMsaUJBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtELEdBQUwsQ0FBUyxRQUFULENBQXBCLEVBQXdDQyxHQUF4QyxFQUE2QztBQUN6Q2UsMkJBQVdDLElBQVgsQ0FBZ0I7QUFDWmhDLHVCQUFHYyxDQURTO0FBRVpiLHVCQUFHZSxDQUZTO0FBR1ppQiwyQkFBTzFDLE9BQU91QixDQUFQLEVBQVVFLENBQVY7QUFISyxpQkFBaEI7QUFLSDtBQUNKO0FBQ0QsWUFBSWtCLGFBQWE7QUFDYjNDLG9CQUFRd0MsVUFESztBQUViekMsbUJBQU8sS0FBS3lCLEdBQUwsQ0FBUyxPQUFULENBRk07QUFHYjFCLG9CQUFRLEtBQUswQixHQUFMLENBQVMsUUFBVDtBQUhLLFNBQWpCO0FBS0Esb0NBQWtCb0IsY0FBbEIsQ0FBaUNELFVBQWpDLEVBQTZDVCxJQUE3QztBQUNILEtBdkd1QjtBQXdHeEJaLHNCQUFrQiwwQkFBU1ksSUFBVCxFQUFjO0FBQzVCbEIsWUFBSUMsTUFBSixDQUFXNEIsT0FBWCxDQUFtQixrQkFBbkIsRUFBdUMsRUFBQzlDLE9BQU9tQyxLQUFLUyxVQUFMLENBQWdCNUMsS0FBeEIsRUFBK0JELFFBQVFvQyxLQUFLUyxVQUFMLENBQWdCN0MsTUFBdkQsRUFBdkM7QUFDQWtCLFlBQUlDLE1BQUosQ0FBVzRCLE9BQVgsQ0FBbUIsY0FBbkIsRUFBbUNYLEtBQUtTLFVBQUwsQ0FBZ0IzQyxNQUFuRDtBQUNIO0FBM0d1QixDQUFiLENBQWY7a0JBNkdlTixNIiwiZmlsZSI6IkNhbnZhcy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RlbH0gZnJvbSBcImJhY2tib25lXCI7XHJcbmltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi4vRGF0YVN0cmVhbUhhbmRsZXJcIjtcclxuXHJcbmNvbnN0IENhbnZhcyA9IE1vZGVsLmV4dGVuZCh7XHJcbiAgICBkZWZhdWx0czoge1xyXG4gICAgICAgIHNjYWxlOiA1LFxyXG4gICAgICAgIGhlaWdodDogMzIsIC8vIGhvdyBtYW55IHBpeGVscyBvbiB0aGUgWSBheGlzXHJcbiAgICAgICAgd2lkdGg6IDMyLCAvLyAgaG93IG1hbnkgcGl4ZWxzIG9uIHRoZSB4IGF4aXNcclxuICAgICAgICBwaXhlbHM6IFtdLFxyXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICBoaWdobGlnaHRIZWxwTGluZUNvbG9yOiBcIiNGRjAwMDBcIixcclxuICAgICAgICBkZWZhdWx0SGVscExpbmVDb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgaGlnaExpZ2h0Q29sb3I6IFwiIzU1REQ1NVwiLFxyXG4gICAgICAgIGRyYXdIZWxwTGluZXM6IGZhbHNlLFxyXG4gICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2luZ1NlY29uZGFyeTogZmFsc2UsXHJcbiAgICAgICAgbGFzdE1vdXNlUG9zOiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2xzOiBbXSxcclxuICAgICAgICBzZWxlY3RlZFRvb2w6IHt9XHJcbiAgICB9LFxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICBBcHAuZXZlbnRzLm9uKFwibGVhdmVSb29tXCIsICgpID0+IHRoaXMucmVzZXQoKSk7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcImNoYW5nZURpbWVuc2lvbnNcIiwgKGUpID0+IHRoaXMuY2hhbmdlRGltZW5zaW9ucyhlKSk7XHJcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcInNlbmRBbGxEYXRhVG9Vc2VyXCIsIChlKSA9PiB0aGlzLnNlbmRBbGxEYXRhVG9Vc2VyKGUpKTtcclxuICAgICAgICBBcHAuZXZlbnRzLm9uKFwiaW5pdGlhbGl6ZVJvb21DYW52YXNcIiwgKGUpID0+IHRoaXMuaW5pdGlhbGl6ZUNhbnZhcyhlKSk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHBpeGVscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXQoXCJ3aWR0aFwiKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBpeGVsc1tpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0KFwiaGVpZ2h0XCIpOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHBpeGVsc1tpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXQoXCJwaXhlbHNcIiwgcGl4ZWxzKTtcclxuICAgIH0sXHJcbiAgICBpbnB1dFRvUGl4ZWxJbmRleDogZnVuY3Rpb24gKG9mZnNldFgsIG9mZnNldFkpIHtcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLmdldChcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMuZ2V0KFwic2NhbGVcIik7XHJcbiAgICAgICAgaWYgKG9mZnNldFggPiBwb3NpdGlvbi54ICYmIG9mZnNldFkgPiBwb3NpdGlvbi55ICYmXHJcbiAgICAgICAgICAgIG9mZnNldFggPCBwb3NpdGlvbi54ICsgdGhpcy5nZXQoXCJ3aWR0aFwiKSAqIHNjYWxlICYmXHJcbiAgICAgICAgICAgIG9mZnNldFkgPCBwb3NpdGlvbi55ICsgdGhpcy5nZXQoXCJoZWlnaHRcIikgKiBzY2FsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgeDogTWF0aC5mbG9vcigob2Zmc2V0WCAtIHBvc2l0aW9uLngpIC8gc2NhbGUpLFxyXG4gICAgICAgICAgICAgICAgeTogTWF0aC5mbG9vcigob2Zmc2V0WSAtIHBvc2l0aW9uLnkpIC8gc2NhbGUpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICByZXBvc2l0aW9uKHgsIHkpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmdldChcInBvc2l0aW9uXCIpLnggKyB4LFxyXG4gICAgICAgICAgICB5OiB0aGlzLmdldChcInBvc2l0aW9uXCIpLnkgKyB5XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldChcInBvc2l0aW9uXCIsIG5ld1Bvc2l0aW9uKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VEaW1lbnNpb25zKGRhdGEpe1xyXG4gICAgICAgIGxldCBvbGRXaWR0aCA9IHRoaXMuZ2V0KFwid2lkdGhcIik7XHJcbiAgICAgICAgbGV0IG9sZEhlaWdodCA9IHRoaXMuZ2V0KFwiaGVpZ2h0XCIpO1xyXG4gICAgICAgIGxldCBuZXdQaXhlbHMgPSBbXTtcclxuICAgICAgICBsZXQgb2xkUGl4ZWxzID0gdGhpcy5nZXQoXCJwaXhlbHNcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKT8gZGF0YS53aWR0aDogdGhpcy5nZXQoXCJ3aWR0aFwiKSk7IGkrKykge1xyXG4gICAgICAgICAgICBuZXdQaXhlbHNbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnaGVpZ2h0Jyk/IGRhdGEuaGVpZ2h0OiB0aGlzLmdldChcImhlaWdodFwiKSk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYoaSA8IG9sZFdpZHRoICYmIGogPCBvbGRIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1BpeGVsc1tpXVtqXSA9IG9sZFBpeGVsc1tpXVtqXTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1BpeGVsc1tpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXQoXCJwaXhlbHNcIiwgbmV3UGl4ZWxzKTtcclxuICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KCd3aWR0aCcpKXtcclxuICAgICAgICAgICAgdGhpcy5zZXQoXCJ3aWR0aFwiLCBkYXRhLndpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnaGVpZ2h0Jykpe1xyXG4gICAgICAgICAgICB0aGlzLnNldChcImhlaWdodFwiLCBkYXRhLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlbmRBbGxEYXRhVG9Vc2VyOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBsZXQgcGl4ZWxBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCBwaXhlbHMgPSB0aGlzLmdldChcInBpeGVsc1wiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0KFwid2lkdGhcIik7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2V0KFwiaGVpZ2h0XCIpOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHBpeGVsQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogaSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBqLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwaXhlbHNbaV1bal1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjYW52YXNEYXRhID0ge1xyXG4gICAgICAgICAgICBwaXhlbHM6IHBpeGVsQXJyYXksXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmdldChcIndpZHRoXCIpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2V0KFwiaGVpZ2h0XCIpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBEYXRhU3RyZWFtSGFuZGxlci5zZW5kQ2FudmFzRGF0YShjYW52YXNEYXRhLCBkYXRhKTtcclxuICAgIH0sXHJcbiAgICBpbml0aWFsaXplQ2FudmFzOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJjaGFuZ2VEaW1lbnNpb25zXCIsIHt3aWR0aDogZGF0YS5jYW52YXNEYXRhLndpZHRoLCBoZWlnaHQ6IGRhdGEuY2FudmFzRGF0YS5oZWlnaHR9KTtcclxuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJ1cGRhdGVQaXhlbHNcIiwgZGF0YS5jYW52YXNEYXRhLnBpeGVscyk7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7Il19

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(6);

	var Room = _backbone.Model.extend({
	    defaults: {
	        users: {}
	    },
	    name: '',
	    initialize: function initialize() {
	        var _this = this;

	        App.events.on("updateCurrentRoom", function (e) {
	            return _this.handleNewRoomData(e);
	        });
	    },
	    handleNewRoomData: function handleNewRoomData(e) {
	        this.set("users", e['users']);
	        this.set("name", e['name']);
	    }
	});
	exports.default = Room;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbW9kZWxzXFxSb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJleHRlbmQiLCJkZWZhdWx0cyIsInVzZXJzIiwibmFtZSIsImluaXRpYWxpemUiLCJBcHAiLCJldmVudHMiLCJvbiIsImUiLCJoYW5kbGVOZXdSb29tRGF0YSIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxnQkFBTUMsTUFBTixDQUFhO0FBQ3RCQyxjQUFVO0FBQ05DLGVBQU87QUFERCxLQURZO0FBSXRCQyxVQUFNLEVBSmdCO0FBS3RCQyxnQkFBWSxzQkFBWTtBQUFBOztBQUNwQkMsWUFBSUMsTUFBSixDQUFXQyxFQUFYLENBQWMsbUJBQWQsRUFBbUMsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtDLGlCQUFMLENBQXVCRCxDQUF2QixDQUFQO0FBQUEsU0FBbkM7QUFDSCxLQVBxQjtBQVF0QkMsdUJBQW1CLDJCQUFTRCxDQUFULEVBQVc7QUFDMUIsYUFBS0UsR0FBTCxDQUFTLE9BQVQsRUFBa0JGLEVBQUUsT0FBRixDQUFsQjtBQUNBLGFBQUtFLEdBQUwsQ0FBUyxNQUFULEVBQWlCRixFQUFFLE1BQUYsQ0FBakI7QUFDSDtBQVhxQixDQUFiLENBQWI7a0JBYWVULEkiLCJmaWxlIjoiUm9vbS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Qcm9ncmFtbWFzL3hhbXAvaHRkb2NzL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RlbH0gZnJvbSBcImJhY2tib25lXCI7XHJcblxyXG5jb25zdCBSb29tID0gTW9kZWwuZXh0ZW5kKHtcclxuICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgICAgdXNlcnM6IHt9LFxyXG4gICAgfSxcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEFwcC5ldmVudHMub24oXCJ1cGRhdGVDdXJyZW50Um9vbVwiLCAoZSkgPT4gdGhpcy5oYW5kbGVOZXdSb29tRGF0YShlKSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlTmV3Um9vbURhdGE6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIHRoaXMuc2V0KFwidXNlcnNcIiwgZVsndXNlcnMnXSk7XHJcbiAgICAgICAgdGhpcy5zZXQoXCJuYW1lXCIsIGVbJ25hbWUnXSk7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBSb29tOyJdfQ==

/***/ })
/******/ ]);