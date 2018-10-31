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

	__webpack_require__(1);
	module.exports = __webpack_require__(327);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(2);

	__webpack_require__(323);

	__webpack_require__(324);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(56);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(69);
	__webpack_require__(71);
	__webpack_require__(73);
	__webpack_require__(75);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(88);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(188);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(196);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(216);
	__webpack_require__(220);
	__webpack_require__(221);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(296);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(312);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(315);
	__webpack_require__(316);
	__webpack_require__(317);
	__webpack_require__(318);
	__webpack_require__(319);
	__webpack_require__(320);
	__webpack_require__(321);
	__webpack_require__(322);
	module.exports = __webpack_require__(9);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(4);
	var has = __webpack_require__(5);
	var DESCRIPTORS = __webpack_require__(6);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var META = __webpack_require__(22).KEY;
	var $fails = __webpack_require__(7);
	var shared = __webpack_require__(23);
	var setToStringTag = __webpack_require__(25);
	var uid = __webpack_require__(19);
	var wks = __webpack_require__(26);
	var wksExt = __webpack_require__(27);
	var wksDefine = __webpack_require__(28);
	var enumKeys = __webpack_require__(29);
	var isArray = __webpack_require__(44);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var toIObject = __webpack_require__(32);
	var toPrimitive = __webpack_require__(16);
	var createDesc = __webpack_require__(17);
	var _create = __webpack_require__(45);
	var gOPNExt = __webpack_require__(48);
	var $GOPD = __webpack_require__(50);
	var $DP = __webpack_require__(11);
	var $keys = __webpack_require__(30);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(49).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(43).f = $propertyIsEnumerable;
	  __webpack_require__(42).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(24)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var hide = __webpack_require__(10);
	var redefine = __webpack_require__(18);
	var ctx = __webpack_require__(20);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var createDesc = __webpack_require__(17);
	module.exports = __webpack_require__(6) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var toPrimitive = __webpack_require__(16);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(6) && !__webpack_require__(7)(function () {
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var document = __webpack_require__(4).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(5);
	var SRC = __webpack_require__(19)('src');
	var TO_STRING = 'toString';
	var $toString = Function[TO_STRING];
	var TPL = ('' + $toString).split(TO_STRING);

	__webpack_require__(9).inspectSource = function (it) {
	  return $toString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(19)('meta');
	var isObject = __webpack_require__(13);
	var has = __webpack_require__(5);
	var setDesc = __webpack_require__(11).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(9);
	var global = __webpack_require__(4);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(24) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = false;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f;
	var has = __webpack_require__(5);
	var TAG = __webpack_require__(26)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(23)('wks');
	var uid = __webpack_require__(19);
	var Symbol = __webpack_require__(4).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(26);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var LIBRARY = __webpack_require__(24);
	var wksExt = __webpack_require__(27);
	var defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30);
	var gOPS = __webpack_require__(42);
	var pIE = __webpack_require__(43);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(31);
	var enumBugKeys = __webpack_require__(41);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(5);
	var toIObject = __webpack_require__(32);
	var arrayIndexOf = __webpack_require__(36)(false);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(33);
	var defined = __webpack_require__(35);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(34);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(32);
	var toLength = __webpack_require__(37);
	var toAbsoluteIndex = __webpack_require__(39);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(23)('keys');
	var uid = __webpack_require__(19);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12);
	var dPs = __webpack_require__(46);
	var enumBugKeys = __webpack_require__(41);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var anObject = __webpack_require__(12);
	var getKeys = __webpack_require__(30);

	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(4).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32);
	var gOPN = __webpack_require__(49).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(31);
	var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(43);
	var createDesc = __webpack_require__(17);
	var toIObject = __webpack_require__(32);
	var toPrimitive = __webpack_require__(16);
	var has = __webpack_require__(5);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(45) });


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperties: __webpack_require__(46) });


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(32);
	var $getOwnPropertyDescriptor = __webpack_require__(50).f;

	__webpack_require__(55)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8);
	var core = __webpack_require__(9);
	var fails = __webpack_require__(7);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(57);
	var $getPrototypeOf = __webpack_require__(58);

	__webpack_require__(55)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(35);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(5);
	var toObject = __webpack_require__(57);
	var IE_PROTO = __webpack_require__(40)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(57);
	var $keys = __webpack_require__(30);

	__webpack_require__(55)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(55)('getOwnPropertyNames', function () {
	  return __webpack_require__(48).f;
	});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;

	__webpack_require__(55)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;

	__webpack_require__(55)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13);
	var meta = __webpack_require__(22).onFreeze;

	__webpack_require__(55)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(55)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(55)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);

	__webpack_require__(55)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(68) });


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(30);
	var gOPS = __webpack_require__(42);
	var pIE = __webpack_require__(43);
	var toObject = __webpack_require__(57);
	var IObject = __webpack_require__(33);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { is: __webpack_require__(70) });


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(72).set });


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(50).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(74);
	var test = {};
	test[__webpack_require__(26)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(18)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(34);
	var TAG = __webpack_require__(26)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);

	$export($export.P, 'Function', { bind: __webpack_require__(76) });


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction = __webpack_require__(21);
	var isObject = __webpack_require__(13);
	var invoke = __webpack_require__(77);
	var arraySlice = [].slice;
	var factories = {};

	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /* , ...args */) {
	  var fn = aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11).f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var isObject = __webpack_require__(13);
	var getPrototypeOf = __webpack_require__(58);
	var HAS_INSTANCE = __webpack_require__(26)('hasInstance');
	var FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(11).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
	  if (typeof this != 'function' || !isObject(O)) return false;
	  if (!isObject(this.prototype)) return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
	  return false;
	} });


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseInt = __webpack_require__(81);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt;
	var $trim = __webpack_require__(82).trim;
	var ws = __webpack_require__(83);
	var hex = /^[-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var defined = __webpack_require__(35);
	var fails = __webpack_require__(7);
	var spaces = __webpack_require__(83);
	var space = '[' + spaces + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');

	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseFloat = __webpack_require__(85);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat;
	var $trim = __webpack_require__(82).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(83) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3);
	  var result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var has = __webpack_require__(5);
	var cof = __webpack_require__(34);
	var inheritIfRequired = __webpack_require__(87);
	var toPrimitive = __webpack_require__(16);
	var fails = __webpack_require__(7);
	var gOPN = __webpack_require__(49).f;
	var gOPD = __webpack_require__(50).f;
	var dP = __webpack_require__(11).f;
	var $trim = __webpack_require__(82).trim;
	var NUMBER = 'Number';
	var $Number = global[NUMBER];
	var Base = $Number;
	var proto = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = cof(__webpack_require__(45)(proto)) == NUMBER;
	var TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var setPrototypeOf = __webpack_require__(72).set;
	module.exports = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toInteger = __webpack_require__(38);
	var aNumberValue = __webpack_require__(89);
	var repeat = __webpack_require__(90);
	var $toFixed = 1.0.toFixed;
	var floor = Math.floor;
	var data = [0, 0, 0, 0, 0, 0];
	var ERROR = 'Number.toFixed: incorrect invocation!';
	var ZERO = '0';

	var multiply = function (n, c) {
	  var i = -1;
	  var c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function (n) {
	  var i = 6;
	  var c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function () {
	  var i = 6;
	  var s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR);
	    var f = toInteger(fractionDigits);
	    var s = '';
	    var m = ZERO;
	    var e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38);
	var defined = __webpack_require__(35);

	module.exports = function repeat(count) {
	  var str = String(defined(this));
	  var res = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $fails = __webpack_require__(7);
	var aNumberValue = __webpack_require__(89);
	var $toPrecision = 1.0.toPrecision;

	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(8);
	var _isFinite = __webpack_require__(4).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', { isInteger: __webpack_require__(95) });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13);
	var floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(8);
	var isInteger = __webpack_require__(95);
	var abs = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);

	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseFloat = __webpack_require__(85);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $parseInt = __webpack_require__(81);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8);
	var log1p = __webpack_require__(103);
	var sqrt = Math.sqrt;
	var $acosh = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8);
	var $asinh = Math.asinh;

	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8);
	var $atanh = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8);
	var sign = __webpack_require__(107);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8);
	var exp = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8);
	var $expm1 = __webpack_require__(111);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', { fround: __webpack_require__(113) });


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var sign = __webpack_require__(107);
	var pow = Math.pow;
	var EPSILON = pow(2, -52);
	var EPSILON32 = pow(2, -23);
	var MAX32 = pow(2, 127) * (2 - EPSILON32);
	var MIN32 = pow(2, -126);

	var roundTiesToEven = function (n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};

	module.exports = Math.fround || function fround(x) {
	  var $abs = Math.abs(x);
	  var $sign = sign(x);
	  var a, result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs);
	  // eslint-disable-next-line no-self-compare
	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
	};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8);
	var abs = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8);
	var $imul = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff;
	    var xn = +x;
	    var yn = +y;
	    var xl = UINT16 & xn;
	    var yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
	});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', { log1p: __webpack_require__(103) });


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', { sign: __webpack_require__(107) });


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8);
	var expm1 = __webpack_require__(111);
	var exp = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8);
	var expm1 = __webpack_require__(111);
	var exp = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x);
	    var b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var toAbsoluteIndex = __webpack_require__(39);
	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var toLength = __webpack_require__(37);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw);
	    var len = toLength(tpl.length);
	    var aLen = arguments.length;
	    var res = [];
	    var i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(82)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(127)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38);
	var defined = __webpack_require__(35);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(24);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(129);
	var $iterCreate = __webpack_require__(130);
	var setToStringTag = __webpack_require__(25);
	var getPrototypeOf = __webpack_require__(58);
	var ITERATOR = __webpack_require__(26)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(45);
	var descriptor = __webpack_require__(17);
	var setToStringTag = __webpack_require__(25);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(26)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $at = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export = __webpack_require__(8);
	var toLength = __webpack_require__(37);
	var context = __webpack_require__(133);
	var ENDS_WITH = 'endsWith';
	var $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = toLength(that.length);
	    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
	    var search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134);
	var defined = __webpack_require__(35);

	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13);
	var cof = __webpack_require__(34);
	var MATCH = __webpack_require__(26)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(26)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export = __webpack_require__(8);
	var context = __webpack_require__(133);
	var INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(90)
	});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export = __webpack_require__(8);
	var toLength = __webpack_require__(37);
	var context = __webpack_require__(133);
	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH);
	    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var fails = __webpack_require__(7);
	var defined = __webpack_require__(35);
	var quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function (string, tag, attribute, value) {
	  var S = String(defined(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);

	$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var toPrimitive = __webpack_require__(16);

	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = toObject(this);
	    var pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8);
	var toISOString = __webpack_require__(156);

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
	  toISOString: toISOString
	});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var fails = __webpack_require__(7);
	var getTime = Date.prototype.getTime;
	var $toISOString = Date.prototype.toISOString;

	var lz = function (num) {
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	module.exports = (fails(function () {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  $toISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  var d = this;
	  var y = d.getUTCFullYear();
	  var m = d.getUTCMilliseconds();
	  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	} : $toISOString;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var DateProto = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var $toString = DateProto[TO_STRING];
	var getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(18)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(26)('toPrimitive');
	var proto = Date.prototype;

	if (!(TO_PRIMITIVE in proto)) __webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(159));


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var anObject = __webpack_require__(12);
	var toPrimitive = __webpack_require__(16);
	var NUMBER = 'number';

	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);

	$export($export.S, 'Array', { isArray: __webpack_require__(44) });


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(20);
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var call = __webpack_require__(162);
	var isArrayIter = __webpack_require__(163);
	var toLength = __webpack_require__(37);
	var createProperty = __webpack_require__(164);
	var getIterFn = __webpack_require__(165);

	$export($export.S + $export.F * !__webpack_require__(166)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(129);
	var ITERATOR = __webpack_require__(26)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11);
	var createDesc = __webpack_require__(17);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(74);
	var ITERATOR = __webpack_require__(26)('iterator');
	var Iterators = __webpack_require__(129);
	module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(26)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var createProperty = __webpack_require__(164);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */) {
	    var index = 0;
	    var aLen = arguments.length;
	    var result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(169)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var fails = __webpack_require__(7);

	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var html = __webpack_require__(47);
	var cof = __webpack_require__(34);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	var arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length);
	    var klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toAbsoluteIndex(begin, len);
	    var upTo = toAbsoluteIndex(end, len);
	    var size = toLength(upTo - start);
	    var cloned = new Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var toObject = __webpack_require__(57);
	var fails = __webpack_require__(7);
	var $sort = [].sort;
	var test = [1, 2, 3];

	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(169)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $forEach = __webpack_require__(173)(0);
	var STRICT = __webpack_require__(169)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(20);
	var IObject = __webpack_require__(33);
	var toObject = __webpack_require__(57);
	var toLength = __webpack_require__(37);
	var asc = __webpack_require__(174);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this);
	    var self = IObject(O);
	    var f = ctx(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(175);

	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var isArray = __webpack_require__(44);
	var SPECIES = __webpack_require__(26)('species');

	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $map = __webpack_require__(173)(1);

	$export($export.P + $export.F * !__webpack_require__(169)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $filter = __webpack_require__(173)(2);

	$export($export.P + $export.F * !__webpack_require__(169)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $some = __webpack_require__(173)(3);

	$export($export.P + $export.F * !__webpack_require__(169)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $every = __webpack_require__(173)(4);

	$export($export.P + $export.F * !__webpack_require__(169)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $reduce = __webpack_require__(181);

	$export($export.P + $export.F * !__webpack_require__(169)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21);
	var toObject = __webpack_require__(57);
	var IObject = __webpack_require__(33);
	var toLength = __webpack_require__(37);

	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that);
	  var self = IObject(O);
	  var length = toLength(O.length);
	  var index = isRight ? length - 1 : 0;
	  var i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $reduce = __webpack_require__(181);

	$export($export.P + $export.F * !__webpack_require__(169)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $indexOf = __webpack_require__(36)(false);
	var $native = [].indexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toIObject = __webpack_require__(32);
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	var $native = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(169)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this);
	    var length = toLength(O.length);
	    var index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
	});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', { copyWithin: __webpack_require__(186) });

	__webpack_require__(187)('copyWithin');


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(57);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);

	module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = toObject(this);
	  var len = toLength(O.length);
	  var to = toAbsoluteIndex(target, len);
	  var from = toAbsoluteIndex(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];
	    else delete O[to];
	    to += inc;
	    from += inc;
	  } return O;
	};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(26)('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);

	$export($export.P, 'Array', { fill: __webpack_require__(189) });

	__webpack_require__(187)('fill');


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(57);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	module.exports = function fill(value /* , start = 0, end = @length */) {
	  var O = toObject(this);
	  var length = toLength(O.length);
	  var aLen = arguments.length;
	  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
	  var end = aLen > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8);
	var $find = __webpack_require__(173)(5);
	var KEY = 'find';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8);
	var $find = __webpack_require__(173)(6);
	var KEY = 'findIndex';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(187)(KEY);


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(193)('Array');


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var dP = __webpack_require__(11);
	var DESCRIPTORS = __webpack_require__(6);
	var SPECIES = __webpack_require__(26)('species');

	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(187);
	var step = __webpack_require__(195);
	var Iterators = __webpack_require__(129);
	var toIObject = __webpack_require__(32);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 195 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var inheritIfRequired = __webpack_require__(87);
	var dP = __webpack_require__(11).f;
	var gOPN = __webpack_require__(49).f;
	var isRegExp = __webpack_require__(134);
	var $flags = __webpack_require__(197);
	var $RegExp = global.RegExp;
	var Base = $RegExp;
	var proto = $RegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;
	// "new" creates a new object, old webkit buggy here
	var CORRECT_NEW = new $RegExp(re1) !== re1;

	if (__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function () {
	  re2[__webpack_require__(26)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp;
	    var piRE = isRegExp(p);
	    var fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function (key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function () { return Base[key]; },
	      set: function (it) { Base[key] = it; }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(193)('RegExp');


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(199);
	var anObject = __webpack_require__(12);
	var $flags = __webpack_require__(197);
	var DESCRIPTORS = __webpack_require__(6);
	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];

	var define = function (fn) {
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(7)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(6) && /./g.flags != 'g') __webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(197)
	});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(201)('match', 1, function (defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    'use strict';
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var hide = __webpack_require__(10);
	var redefine = __webpack_require__(18);
	var fails = __webpack_require__(7);
	var defined = __webpack_require__(35);
	var wks = __webpack_require__(26);

	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY);
	  var fns = exec(defined, SYMBOL, ''[KEY]);
	  var strfn = fns[0];
	  var rxfn = fns[1];
	  if (fails(function () {
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return rxfn.call(string, this); }
	    );
	  }
	};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(201)('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    'use strict';
	    var O = defined(this);
	    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(201)('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    'use strict';
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(201)('split', 2, function (defined, SPLIT, $split) {
	  'use strict';
	  var isRegExp = __webpack_require__(134);
	  var _split = $split;
	  var $push = [].push;
	  var $SPLIT = 'split';
	  var LENGTH = 'length';
	  var LAST_INDEX = 'lastIndex';
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          // eslint-disable-next-line no-loop-func
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this);
	    var fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(24);
	var global = __webpack_require__(4);
	var ctx = __webpack_require__(20);
	var classof = __webpack_require__(74);
	var $export = __webpack_require__(8);
	var isObject = __webpack_require__(13);
	var aFunction = __webpack_require__(21);
	var anInstance = __webpack_require__(206);
	var forOf = __webpack_require__(207);
	var speciesConstructor = __webpack_require__(208);
	var task = __webpack_require__(209).set;
	var microtask = __webpack_require__(210)();
	var newPromiseCapabilityModule = __webpack_require__(211);
	var perform = __webpack_require__(212);
	var userAgent = __webpack_require__(213);
	var promiseResolve = __webpack_require__(214);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(26)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(215)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(25)($Promise, PROMISE);
	__webpack_require__(193)(PROMISE);
	Wrapper = __webpack_require__(9)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(166)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 206 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(20);
	var call = __webpack_require__(162);
	var isArrayIter = __webpack_require__(163);
	var anObject = __webpack_require__(12);
	var toLength = __webpack_require__(37);
	var getIterFn = __webpack_require__(165);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(12);
	var aFunction = __webpack_require__(21);
	var SPECIES = __webpack_require__(26)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(20);
	var invoke = __webpack_require__(77);
	var html = __webpack_require__(47);
	var cel = __webpack_require__(15);
	var global = __webpack_require__(4);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(34)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var macrotask = __webpack_require__(209).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(34)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(21);

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}

	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 212 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var navigator = global.navigator;

	module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var newPromiseCapability = __webpack_require__(211);

	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function (target, src, safe) {
	  for (var key in src) redefine(target, key, src[key], safe);
	  return target;
	};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(217);
	var validate = __webpack_require__(218);
	var MAP = 'Map';

	// 23.1 Map Objects
	module.exports = __webpack_require__(219)(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, strong, true);


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP = __webpack_require__(11).f;
	var create = __webpack_require__(45);
	var redefineAll = __webpack_require__(215);
	var ctx = __webpack_require__(20);
	var anInstance = __webpack_require__(206);
	var forOf = __webpack_require__(207);
	var $iterDefine = __webpack_require__(128);
	var step = __webpack_require__(195);
	var setSpecies = __webpack_require__(193);
	var DESCRIPTORS = __webpack_require__(6);
	var fastKey = __webpack_require__(22).fastKey;
	var validate = __webpack_require__(218);
	var SIZE = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};

	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function () {
	        return validate(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var $export = __webpack_require__(8);
	var redefine = __webpack_require__(18);
	var redefineAll = __webpack_require__(215);
	var meta = __webpack_require__(22);
	var forOf = __webpack_require__(207);
	var anInstance = __webpack_require__(206);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var $iterDetect = __webpack_require__(166);
	var setToStringTag = __webpack_require__(25);
	var inheritIfRequired = __webpack_require__(87);

	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  var fixMethod = function (KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function (a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
	};


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(217);
	var validate = __webpack_require__(218);
	var SET = 'Set';

	// 23.2 Set Objects
	module.exports = __webpack_require__(219)(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, strong);


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var each = __webpack_require__(173)(0);
	var redefine = __webpack_require__(18);
	var meta = __webpack_require__(22);
	var assign = __webpack_require__(68);
	var weak = __webpack_require__(222);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var validate = __webpack_require__(218);
	var WEAK_MAP = 'WeakMap';
	var getWeak = meta.getWeak;
	var isExtensible = Object.isExtensible;
	var uncaughtFrozenStore = weak.ufstore;
	var tmp = {};
	var InternalMap;

	var wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(validate(this, WEAK_MAP), key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(219)(WEAK_MAP, wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
	  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype;
	    var method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll = __webpack_require__(215);
	var getWeak = __webpack_require__(22).getWeak;
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var anInstance = __webpack_require__(206);
	var forOf = __webpack_require__(207);
	var createArrayMethod = __webpack_require__(173);
	var $has = __webpack_require__(5);
	var validate = __webpack_require__(218);
	var arrayFind = createArrayMethod(5);
	var arrayFindIndex = createArrayMethod(6);
	var id = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function () {
	  this.a = [];
	};
	var findUncaughtFrozen = function (store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;      // collection type
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(222);
	var validate = __webpack_require__(218);
	var WEAK_SET = 'WeakSet';

	// 23.4 WeakSet Objects
	__webpack_require__(219)(WEAK_SET, function (get) {
	  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(validate(this, WEAK_SET), value, true);
	  }
	}, weak, false, true);


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var $typed = __webpack_require__(225);
	var buffer = __webpack_require__(226);
	var anObject = __webpack_require__(12);
	var toAbsoluteIndex = __webpack_require__(39);
	var toLength = __webpack_require__(37);
	var isObject = __webpack_require__(13);
	var ArrayBuffer = __webpack_require__(4).ArrayBuffer;
	var speciesConstructor = __webpack_require__(208);
	var $ArrayBuffer = buffer.ArrayBuffer;
	var $DataView = buffer.DataView;
	var $isView = $typed.ABV && ArrayBuffer.isView;
	var $slice = $ArrayBuffer.prototype.slice;
	var VIEW = $typed.VIEW;
	var ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength;
	    var first = toAbsoluteIndex(start, len);
	    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
	    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
	    var viewS = new $DataView(this);
	    var viewT = new $DataView(result);
	    var index = 0;
	    while (first < fin) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(193)(ARRAY_BUFFER);


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var uid = __webpack_require__(19);
	var TYPED = uid('typed_array');
	var VIEW = uid('view');
	var ABV = !!(global.ArrayBuffer && global.DataView);
	var CONSTR = ABV;
	var i = 0;
	var l = 9;
	var Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(4);
	var DESCRIPTORS = __webpack_require__(6);
	var LIBRARY = __webpack_require__(24);
	var $typed = __webpack_require__(225);
	var hide = __webpack_require__(10);
	var redefineAll = __webpack_require__(215);
	var fails = __webpack_require__(7);
	var anInstance = __webpack_require__(206);
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	var toIndex = __webpack_require__(227);
	var gOPN = __webpack_require__(49).f;
	var dP = __webpack_require__(11).f;
	var arrayFill = __webpack_require__(189);
	var setToStringTag = __webpack_require__(25);
	var ARRAY_BUFFER = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH = 'Wrong length!';
	var WRONG_INDEX = 'Wrong index!';
	var $ArrayBuffer = global[ARRAY_BUFFER];
	var $DataView = global[DATA_VIEW];
	var Math = global.Math;
	var RangeError = global.RangeError;
	// eslint-disable-next-line no-shadow-restricted-names
	var Infinity = global.Infinity;
	var BaseBuffer = $ArrayBuffer;
	var abs = Math.abs;
	var pow = Math.pow;
	var floor = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;
	var BUFFER = 'buffer';
	var BYTE_LENGTH = 'byteLength';
	var BYTE_OFFSET = 'byteOffset';
	var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
	var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
	var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	function packIEEE754(value, mLen, nBytes) {
	  var buffer = new Array(nBytes);
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  var i = 0;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  var e, m, c;
	  value = abs(value);
	  // eslint-disable-next-line no-self-compare
	  if (value != value || value === Infinity) {
	    // eslint-disable-next-line no-self-compare
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	}
	function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = eLen - 7;
	  var i = nBytes - 1;
	  var s = buffer[i--];
	  var e = s & 127;
	  var m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	}

	function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	}
	function packI8(it) {
	  return [it & 0xff];
	}
	function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	}
	function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	}
	function packF64(it) {
	  return packIEEE754(it, 52, 8);
	}
	function packF32(it) {
	  return packIEEE754(it, 23, 4);
	}

	function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
	}

	function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	}
	function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	}

	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
	    var byteLength = toIndex(length);
	    this._b = arrayFill.call(new Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH];
	    var offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    $ArrayBuffer(1);
	  }) || !fails(function () {
	    new $ArrayBuffer(-1); // eslint-disable-line no-new
	  }) || fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	    new $ArrayBuffer(1.5); // eslint-disable-line no-new
	    new $ArrayBuffer(NaN); // eslint-disable-line no-new
	    return $ArrayBuffer.name != ARRAY_BUFFER;
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance(this, $ArrayBuffer);
	      return new BaseBuffer(toIndex(length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    }
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2));
	  var $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/ecma262/#sec-toindex
	var toInteger = __webpack_require__(38);
	var toLength = __webpack_require__(37);
	module.exports = function (it) {
	  if (it === undefined) return 0;
	  var number = toInteger(it);
	  var length = toLength(number);
	  if (number !== length) throw RangeError('Wrong length!');
	  return length;
	};


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(225).ABV, {
	  DataView: __webpack_require__(226).DataView
	});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	if (__webpack_require__(6)) {
	  var LIBRARY = __webpack_require__(24);
	  var global = __webpack_require__(4);
	  var fails = __webpack_require__(7);
	  var $export = __webpack_require__(8);
	  var $typed = __webpack_require__(225);
	  var $buffer = __webpack_require__(226);
	  var ctx = __webpack_require__(20);
	  var anInstance = __webpack_require__(206);
	  var propertyDesc = __webpack_require__(17);
	  var hide = __webpack_require__(10);
	  var redefineAll = __webpack_require__(215);
	  var toInteger = __webpack_require__(38);
	  var toLength = __webpack_require__(37);
	  var toIndex = __webpack_require__(227);
	  var toAbsoluteIndex = __webpack_require__(39);
	  var toPrimitive = __webpack_require__(16);
	  var has = __webpack_require__(5);
	  var classof = __webpack_require__(74);
	  var isObject = __webpack_require__(13);
	  var toObject = __webpack_require__(57);
	  var isArrayIter = __webpack_require__(163);
	  var create = __webpack_require__(45);
	  var getPrototypeOf = __webpack_require__(58);
	  var gOPN = __webpack_require__(49).f;
	  var getIterFn = __webpack_require__(165);
	  var uid = __webpack_require__(19);
	  var wks = __webpack_require__(26);
	  var createArrayMethod = __webpack_require__(173);
	  var createArrayIncludes = __webpack_require__(36);
	  var speciesConstructor = __webpack_require__(208);
	  var ArrayIterators = __webpack_require__(194);
	  var Iterators = __webpack_require__(129);
	  var $iterDetect = __webpack_require__(166);
	  var setSpecies = __webpack_require__(193);
	  var arrayFill = __webpack_require__(189);
	  var arrayCopyWithin = __webpack_require__(186);
	  var $DP = __webpack_require__(11);
	  var $GOPD = __webpack_require__(50);
	  var dP = $DP.f;
	  var gOPD = $GOPD.f;
	  var RangeError = global.RangeError;
	  var TypeError = global.TypeError;
	  var Uint8Array = global.Uint8Array;
	  var ARRAY_BUFFER = 'ArrayBuffer';
	  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
	  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	  var PROTOTYPE = 'prototype';
	  var ArrayProto = Array[PROTOTYPE];
	  var $ArrayBuffer = $buffer.ArrayBuffer;
	  var $DataView = $buffer.DataView;
	  var arrayForEach = createArrayMethod(0);
	  var arrayFilter = createArrayMethod(2);
	  var arraySome = createArrayMethod(3);
	  var arrayEvery = createArrayMethod(4);
	  var arrayFind = createArrayMethod(5);
	  var arrayFindIndex = createArrayMethod(6);
	  var arrayIncludes = createArrayIncludes(true);
	  var arrayIndexOf = createArrayIncludes(false);
	  var arrayValues = ArrayIterators.values;
	  var arrayKeys = ArrayIterators.keys;
	  var arrayEntries = ArrayIterators.entries;
	  var arrayLastIndexOf = ArrayProto.lastIndexOf;
	  var arrayReduce = ArrayProto.reduce;
	  var arrayReduceRight = ArrayProto.reduceRight;
	  var arrayJoin = ArrayProto.join;
	  var arraySort = ArrayProto.sort;
	  var arraySlice = ArrayProto.slice;
	  var arrayToString = ArrayProto.toString;
	  var arrayToLocaleString = ArrayProto.toLocaleString;
	  var ITERATOR = wks('iterator');
	  var TAG = wks('toStringTag');
	  var TYPED_CONSTRUCTOR = uid('typed_constructor');
	  var DEF_CONSTRUCTOR = uid('def_constructor');
	  var ALL_CONSTRUCTORS = $typed.CONSTR;
	  var TYPED_ARRAY = $typed.TYPED;
	  var VIEW = $typed.VIEW;
	  var WRONG_LENGTH = 'Wrong length!';

	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function () {
	    // eslint-disable-next-line no-undef
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });

	  var toOffset = function (it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function (it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function (C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function (O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function (C, list) {
	    var index = 0;
	    var length = list.length;
	    var result = allocate(C, length);
	    while (length > index) result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function (it, key, internal) {
	    dP(it, key, { get: function () { return this._d[internal]; } });
	  };

	  var $from = function from(source /* , mapfn, thisArg */) {
	    var O = toObject(source);
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var iterFn = getIterFn(O);
	    var i, length, values, result, step, iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      } O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/* ...items */) {
	    var index = 0;
	    var length = arguments.length;
	    var result = allocate(this, length);
	    while (length > index) result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /* , end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /* , thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /* , thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /* , thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /* , thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /* , fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /* , fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) { // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /* , thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this;
	      var length = validate(that).length;
	      var middle = Math.floor(length / 2);
	      var index = 0;
	      var value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      } return that;
	    },
	    some: function some(callbackfn /* , thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this);
	      var length = O.length;
	      var $begin = toAbsoluteIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /* , offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1);
	    var length = this.length;
	    var src = toObject(arrayLike);
	    var len = toLength(src.length);
	    var index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function (target, key) {
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ) {
	      target[key] = desc.value;
	      return target;
	    } return dP(target, key, desc);
	  };

	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });

	  if (fails(function () { arrayToString.call({}); })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function () { /* noop */ },
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function () { return this[TYPED_ARRAY]; }
	  });

	  // eslint-disable-next-line max-statements
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + KEY;
	    var SETTER = 'set' + KEY;
	    var TypedArray = global[NAME];
	    var Base = TypedArray || {};
	    var TAC = TypedArray && getPrototypeOf(TypedArray);
	    var FORCED = !TypedArray || !$typed.ABV;
	    var O = {};
	    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function (that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function (that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function (that, index) {
	      dP(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0;
	        var offset = 0;
	        var buffer, byteLength, length, klass;
	        if (!isObject(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!fails(function () {
	      TypedArray(1);
	    }) || !fails(function () {
	      new TypedArray(-1); // eslint-disable-line no-new
	    }) || !$iterDetect(function (iter) {
	      new TypedArray(); // eslint-disable-line no-new
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(1.5); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(toIndex(data));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR];
	    var CORRECT_ITER_NAME = !!$nativeIterator
	      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
	    var $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function () { return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES
	    });

	    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
	      from: $from,
	      of: $of
	    });

	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });

	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () { /* empty */ };


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(230)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var rApply = (__webpack_require__(4).Reflect || {}).apply;
	var fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function () {
	  rApply(function () { /* empty */ });
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target);
	    var L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(8);
	var create = __webpack_require__(45);
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);
	var fails = __webpack_require__(7);
	var bind = __webpack_require__(76);
	var rConstruct = (__webpack_require__(4).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() { /* empty */ }
	  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () { /* empty */ });
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create(isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(11);
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var toPrimitive = __webpack_require__(16);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function () {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(8);
	var gOPD = __webpack_require__(50).f;
	var anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var Enumerate = function (iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = [];      // keys
	  var key;
	  for (key in iterated) keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function () {
	  var that = this;
	  var keys = that._k;
	  var key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(50);
	var getPrototypeOf = __webpack_require__(58);
	var has = __webpack_require__(5);
	var $export = __webpack_require__(8);
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);

	function get(target, propertyKey /* , receiver */) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var desc, proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(50);
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(8);
	var getProto = __webpack_require__(58);
	var anObject = __webpack_require__(12);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);

	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(250) });


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(49);
	var gOPS = __webpack_require__(42);
	var anObject = __webpack_require__(12);
	var Reflect = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it));
	  var getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(8);
	var anObject = __webpack_require__(12);
	var $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(11);
	var gOPD = __webpack_require__(50);
	var getPrototypeOf = __webpack_require__(58);
	var has = __webpack_require__(5);
	var $export = __webpack_require__(8);
	var createDesc = __webpack_require__(17);
	var anObject = __webpack_require__(12);
	var isObject = __webpack_require__(13);

	function set(target, propertyKey, V /* , receiver */) {
	  var receiver = arguments.length < 4 ? target : arguments[3];
	  var ownDesc = gOPD.f(anObject(target), propertyKey);
	  var existingDescriptor, proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
	      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
	      existingDescriptor.value = V;
	      dP.f(receiver, propertyKey, existingDescriptor);
	    } else dP.f(receiver, propertyKey, createDesc(0, V));
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(8);
	var setProto = __webpack_require__(72);

	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export = __webpack_require__(8);
	var $includes = __webpack_require__(36)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(187)('includes');


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
	var $export = __webpack_require__(8);
	var flattenIntoArray = __webpack_require__(256);
	var toObject = __webpack_require__(57);
	var toLength = __webpack_require__(37);
	var aFunction = __webpack_require__(21);
	var arraySpeciesCreate = __webpack_require__(174);

	$export($export.P, 'Array', {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject(this);
	    var sourceLen, A;
	    aFunction(callbackfn);
	    sourceLen = toLength(O.length);
	    A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
	    return A;
	  }
	});

	__webpack_require__(187)('flatMap');


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var isArray = __webpack_require__(44);
	var isObject = __webpack_require__(13);
	var toLength = __webpack_require__(37);
	var ctx = __webpack_require__(20);
	var IS_CONCAT_SPREADABLE = __webpack_require__(26)('isConcatSpreadable');

	function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
	  var element, spreadable;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      spreadable = false;
	      if (isObject(element)) {
	        spreadable = element[IS_CONCAT_SPREADABLE];
	        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
	      }

	      if (spreadable && depth > 0) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	}

	module.exports = flattenIntoArray;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
	var $export = __webpack_require__(8);
	var flattenIntoArray = __webpack_require__(256);
	var toObject = __webpack_require__(57);
	var toLength = __webpack_require__(37);
	var toInteger = __webpack_require__(38);
	var arraySpeciesCreate = __webpack_require__(174);

	$export($export.P, 'Array', {
	  flatten: function flatten(/* depthArg = 1 */) {
	    var depthArg = arguments[0];
	    var O = toObject(this);
	    var sourceLen = toLength(O.length);
	    var A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
	    return A;
	  }
	});

	__webpack_require__(187)('flatten');


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8);
	var $at = __webpack_require__(127)(true);

	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8);
	var $pad = __webpack_require__(260);
	var userAgent = __webpack_require__(213);

	// https://github.com/zloirock/core-js/issues/280
	$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37);
	var repeat = __webpack_require__(90);
	var defined = __webpack_require__(35);

	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that));
	  var stringLength = S.length;
	  var fillStr = fillString === undefined ? ' ' : String(fillString);
	  var intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength;
	  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8);
	var $pad = __webpack_require__(260);
	var userAgent = __webpack_require__(213);

	// https://github.com/zloirock/core-js/issues/280
	$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(82)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(82)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export = __webpack_require__(8);
	var defined = __webpack_require__(35);
	var toLength = __webpack_require__(37);
	var isRegExp = __webpack_require__(134);
	var getFlags = __webpack_require__(197);
	var RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function (regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this);
	    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
	    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(28)('asyncIterator');


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(28)('observable');


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(8);
	var ownKeys = __webpack_require__(250);
	var toIObject = __webpack_require__(32);
	var gOPD = __webpack_require__(50);
	var createProperty = __webpack_require__(164);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object);
	    var getDesc = gOPD.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var i = 0;
	    var key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) createProperty(result, key, desc);
	    }
	    return result;
	  }
	});


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8);
	var $values = __webpack_require__(269)(false);

	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(30);
	var toIObject = __webpack_require__(32);
	var isEnum = __webpack_require__(43).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8);
	var $entries = __webpack_require__(269)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var aFunction = __webpack_require__(21);
	var $defineProperty = __webpack_require__(11);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(24) || !__webpack_require__(7)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  // eslint-disable-next-line no-undef, no-useless-call
	  __defineSetter__.call(null, K, function () { /* empty */ });
	  delete __webpack_require__(4)[K];
	});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var aFunction = __webpack_require__(21);
	var $defineProperty = __webpack_require__(11);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var toPrimitive = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(58);
	var getOwnPropertyDescriptor = __webpack_require__(50).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8);
	var toObject = __webpack_require__(57);
	var toPrimitive = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(58);
	var getOwnPropertyDescriptor = __webpack_require__(50).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(272), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);

	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(277)('Map') });


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(74);
	var from = __webpack_require__(278);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(207);

	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(8);

	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(277)('Set') });


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	__webpack_require__(281)('Map');


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(8);

	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { of: function of() {
	    var length = arguments.length;
	    var A = new Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
	};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	__webpack_require__(281)('Set');


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
	__webpack_require__(281)('WeakMap');


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
	__webpack_require__(281)('WeakSet');


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	__webpack_require__(286)('Map');


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(8);
	var aFunction = __webpack_require__(21);
	var ctx = __webpack_require__(20);
	var forOf = __webpack_require__(207);

	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    var mapFn = arguments[1];
	    var mapping, A, n, cb;
	    aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = ctx(mapFn, arguments[2], 2);
	      forOf(source, false, function (nextItem) {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
	};


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	__webpack_require__(286)('Set');


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
	__webpack_require__(286)('WeakMap');


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
	__webpack_require__(286)('WeakSet');


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(8);

	$export($export.G, { global: __webpack_require__(4) });


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(8);

	$export($export.S, 'System', { global: __webpack_require__(4) });


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8);
	var cof = __webpack_require__(34);

	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  clamp: function clamp(x, lower, upper) {
	    return Math.min(upper, Math.max(lower, x));
	  }
	});


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var RAD_PER_DEG = 180 / Math.PI;

	$export($export.S, 'Math', {
	  degrees: function degrees(radians) {
	    return radians * RAD_PER_DEG;
	  }
	});


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var scale = __webpack_require__(297);
	var fround = __webpack_require__(113);

	$export($export.S, 'Math', {
	  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
	    return fround(scale(x, inLow, inHigh, outLow, outHigh));
	  }
	});


/***/ }),
/* 297 */
/***/ (function(module, exports) {

	// https://rwaldron.github.io/proposal-math-extensions/
	module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
	  if (
	    arguments.length === 0
	      // eslint-disable-next-line no-self-compare
	      || x != x
	      // eslint-disable-next-line no-self-compare
	      || inLow != inLow
	      // eslint-disable-next-line no-self-compare
	      || inHigh != inHigh
	      // eslint-disable-next-line no-self-compare
	      || outLow != outLow
	      // eslint-disable-next-line no-self-compare
	      || outHigh != outHigh
	  ) return NaN;
	  if (x === Infinity || x === -Infinity) return x;
	  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
	};


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >> 16;
	    var v1 = $v >> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);
	var DEG_PER_RAD = Math.PI / 180;

	$export($export.S, 'Math', {
	  radians: function radians(degrees) {
	    return degrees * DEG_PER_RAD;
	  }
	});


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', { scale: __webpack_require__(297) });


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >>> 16;
	    var v1 = $v >>> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	// http://jfbastien.github.io/papers/Math.signbit.html
	var $export = __webpack_require__(8);

	$export($export.S, 'Math', { signbit: function signbit(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
	} });


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(8);
	var core = __webpack_require__(9);
	var global = __webpack_require__(4);
	var speciesConstructor = __webpack_require__(208);
	var promiseResolve = __webpack_require__(214);

	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(8);
	var newPromiseCapability = __webpack_require__(211);
	var perform = __webpack_require__(212);

	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var toMetaKey = metadata.key;
	var ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	} });


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(216);
	var $export = __webpack_require__(8);
	var shared = __webpack_require__(23)('metadata');
	var store = shared.store || (shared.store = new (__webpack_require__(221))());

	var getOrCreateMetadataMap = function (target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function (target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
	  var keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
	  return keys;
	};
	var toMetaKey = function (it) {
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function (O) {
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var toMetaKey = metadata.key;
	var getOrCreateMetadataMap = metadata.map;
	var store = metadata.store;

	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
	  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
	  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	  if (metadataMap.size) return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	} });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(58);
	var ordinaryHasOwnMetadata = metadata.has;
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;

	var ordinaryGetMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(220);
	var from = __webpack_require__(278);
	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(58);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;

	var ordinaryMetadataKeys = function (O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P);
	  var parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;

	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;

	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var getPrototypeOf = __webpack_require__(58);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;

	var ordinaryHasMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;

	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	var $metadata = __webpack_require__(309);
	var anObject = __webpack_require__(12);
	var aFunction = __webpack_require__(21);
	var toMetaKey = $metadata.key;
	var ordinaryDefineOwnMetadata = $metadata.set;

	$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	  return function decorator(target, targetKey) {
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	} });


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(8);
	var microtask = __webpack_require__(210)();
	var process = __webpack_require__(4).process;
	var isNode = __webpack_require__(34)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export = __webpack_require__(8);
	var global = __webpack_require__(4);
	var core = __webpack_require__(9);
	var microtask = __webpack_require__(210)();
	var OBSERVABLE = __webpack_require__(26)('observable');
	var aFunction = __webpack_require__(21);
	var anObject = __webpack_require__(12);
	var anInstance = __webpack_require__(206);
	var redefineAll = __webpack_require__(215);
	var hide = __webpack_require__(10);
	var forOf = __webpack_require__(207);
	var RETURN = forOf.RETURN;

	var getMethod = function (fn) {
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function (subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function (subscription) {
	  return subscription._o === undefined;
	};

	var closeSubscription = function (subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function (observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer);
	    var subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  } if (subscriptionClosed(this)) cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() { closeSubscription(this); }
	});

	var SubscriptionObserver = function (subscription) {
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function (value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var j = 0; j < items.length; ++j) {
	            observer.next(items[j]);
	            if (done) return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function () { return this; });

	$export($export.G, { Observable: $Observable });

	__webpack_require__(193)('Observable');


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(4);
	var $export = __webpack_require__(8);
	var userAgent = __webpack_require__(213);
	var slice = [].slice;
	var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
	var wrap = function (set) {
	  return function (fn, time /* , ...args */) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice.call(arguments, 2) : false;
	    return set(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
	    } : fn, time);
	  };
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	var $task = __webpack_require__(209);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

	var $iterators = __webpack_require__(194);
	var getKeys = __webpack_require__(30);
	var redefine = __webpack_require__(18);
	var global = __webpack_require__(4);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(129);
	var wks = __webpack_require__(26);
	var ITERATOR = wks('iterator');
	var TO_STRING_TAG = wks('toStringTag');
	var ArrayValues = Iterators.Array;

	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
	  }
	}


/***/ }),
/* 323 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(325);
	module.exports = __webpack_require__(9).RegExp.escape;


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8);
	var $re = __webpack_require__(326)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 326 */
/***/ (function(module, exports) {

	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _jquery = __webpack_require__(328);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(1);

	var _DrawCanvas = __webpack_require__(329);

	var _DrawCanvas2 = _interopRequireDefault(_DrawCanvas);

	var _HelpCanvas = __webpack_require__(336);

	var _HelpCanvas2 = _interopRequireDefault(_HelpCanvas);

	var _Chat = __webpack_require__(337);

	var _Chat2 = _interopRequireDefault(_Chat);

	var _Toolbar = __webpack_require__(341);

	var _Toolbar2 = _interopRequireDefault(_Toolbar);

	var _SettingMenu = __webpack_require__(350);

	var _SettingMenu2 = _interopRequireDefault(_SettingMenu);

	var _RoomName = __webpack_require__(356);

	var _RoomName2 = _interopRequireDefault(_RoomName);

	var _BackButton = __webpack_require__(357);

	var _BackButton2 = _interopRequireDefault(_BackButton);

	var _UsersInRoomList = __webpack_require__(359);

	var _UsersInRoomList2 = _interopRequireDefault(_UsersInRoomList);

	var _Room = __webpack_require__(360);

	var _Room2 = _interopRequireDefault(_Room);

	var _RoomsPage = __webpack_require__(362);

	var _RoomsPage2 = _interopRequireDefault(_RoomsPage);

	var _Name = __webpack_require__(363);

	var _Name2 = _interopRequireDefault(_Name);

	var _NameButton = __webpack_require__(364);

	var _NameButton2 = _interopRequireDefault(_NameButton);

	var _NameInput = __webpack_require__(365);

	var _NameInput2 = _interopRequireDefault(_NameInput);

	var _RoomCreateButton = __webpack_require__(366);

	var _RoomCreateButton2 = _interopRequireDefault(_RoomCreateButton);

	var _RoomList = __webpack_require__(367);

	var _RoomList2 = _interopRequireDefault(_RoomList);

	var _NewRoomInput = __webpack_require__(368);

	var _NewRoomInput2 = _interopRequireDefault(_NewRoomInput);

	var _backbone = __webpack_require__(333);

	var _underscore = __webpack_require__(334);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Canvas = __webpack_require__(369);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _Room3 = __webpack_require__(370);

	var _Room4 = _interopRequireDefault(_Room3);

	var _PageHandler = __webpack_require__(358);

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
	        var roomPage = new _Room2.default({ el: '#Room-page' });
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

	        var room = new _Room4.default();
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbInNldEdsb2JhbFZhcmlhYmxlcyIsIndpbmRvdyIsIkFwcCIsImV2ZW50cyIsIl8iLCJjbG9uZSIsIkV2ZW50cyIsIiQiLCJpbml0Iiwicm9vbVBhZ2UiLCJSb29tUGFnZSIsImVsIiwicm9vbUxpc3RQYWdlIiwiUm9vbUxpc3RQYWdlIiwibmFtZVBhZ2UiLCJOYW1lUGFnZSIsIlBhZ2VIYW5kbGVyIiwiYWRkUGFnZSIsImNhbnZhc01vZGVsIiwiQ2FudmFzIiwiY2FudmFzIiwiRHJhd0NhbnZhcyIsIm1vZGVsIiwiaGVscENhbnZhcyIsIkhlbHBDYW52YXMiLCJTZXR0aW5nTWVudSIsIlRvb2xiYXIiLCJyb29tIiwiUm9vbSIsIkNoYXQiLCJSb29tTmFtZSIsIkJhY2tCdXR0b24iLCJVc2Vyc0luUm9vbUxpc3QiLCJSb29tTGlzdCIsIlJvb21DcmVhdGVCdXR0b24iLCJOZXdSb29tSW5wdXQiLCJOYW1lQnV0dG9uIiwiTmFtZUlucHV0IiwiZ290byIsIm5hbWUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsQ0FBQyxZQUFZO0FBQ1QsUUFBSUEscUJBQXFCLFNBQXJCQSxrQkFBcUIsR0FBWTtBQUNqQ0MsZUFBT0MsR0FBUCxHQUFhLEVBQWI7QUFDQUQsZUFBT0MsR0FBUCxDQUFXQyxNQUFYLEdBQW9CQyxxQkFBRUMsS0FBRixDQUFRQyxnQkFBUixDQUFwQjtBQUNBTCxlQUFPTSxDQUFQLEdBQVdBLGdCQUFYO0FBQ0gsS0FKRDtBQUtBLFFBQUlDLE9BQU8sU0FBUEEsSUFBTyxHQUFZO0FBQ25CUjs7QUFFQTtBQUNBLFlBQUlTLFdBQVcsSUFBSUMsY0FBSixDQUFhLEVBQUNDLElBQUksWUFBTCxFQUFiLENBQWY7QUFDQSxZQUFJQyxlQUFlLElBQUlDLG1CQUFKLENBQWlCLEVBQUNGLElBQUksWUFBTCxFQUFqQixDQUFuQjtBQUNBLFlBQUlHLFdBQVcsSUFBSUMsY0FBSixDQUFhLEVBQUNKLElBQUksWUFBTCxFQUFiLENBQWY7O0FBRUFLLDhCQUFZQyxPQUFaLENBQW9CUixRQUFwQjtBQUNBTyw4QkFBWUMsT0FBWixDQUFvQkwsWUFBcEI7QUFDQUksOEJBQVlDLE9BQVosQ0FBb0JILFFBQXBCOztBQUVBLFlBQUlJLGNBQWMsSUFBSUMsZ0JBQUosRUFBbEI7QUFDQSxZQUFJQyxTQUFTLElBQUlDLG9CQUFKLENBQWUsRUFBQ1YsSUFBSSxTQUFMLEVBQWdCVyxPQUFPSixXQUF2QixFQUFmLENBQWI7QUFDQSxZQUFJSyxhQUFhLElBQUlDLG9CQUFKLENBQWUsRUFBQ2IsSUFBSSxhQUFMLEVBQW9CVyxPQUFPSixXQUEzQixFQUFmLENBQWpCO0FBQ0EsWUFBSU8scUJBQUosQ0FBZ0IsRUFBQ2QsSUFBSSxjQUFMLEVBQXFCVyxPQUFPSixXQUE1QixFQUFoQjtBQUNBLFlBQUlRLGlCQUFKLENBQVksRUFBQ2YsSUFBSSxVQUFMLEVBQWlCVyxPQUFPSixXQUF4QixFQUFaOztBQUVBLFlBQUlTLE9BQU8sSUFBSUMsY0FBSixFQUFYO0FBQ0EsWUFBSUMsY0FBSjs7QUFFQSxZQUFJQyxrQkFBSixDQUFhLEVBQUNuQixJQUFJLFdBQUwsRUFBa0JXLE9BQU9LLElBQXpCLEVBQWI7QUFDQSxZQUFJSSxvQkFBSixDQUFlLEVBQUNwQixJQUFJLGVBQUwsRUFBZjtBQUNBLFlBQUlxQix5QkFBSixDQUFvQixFQUFDckIsSUFBSSxRQUFMLEVBQWVXLE9BQU9LLElBQXRCLEVBQXBCOztBQUVBLFlBQUlNLGtCQUFKLENBQWEsRUFBQ3RCLElBQUksWUFBTCxFQUFiO0FBQ0EsWUFBSXVCLDBCQUFKLENBQXFCLEVBQUN2QixJQUFJLFlBQUwsRUFBckI7QUFDQSxZQUFJd0Isc0JBQUosQ0FBaUIsRUFBQ3hCLElBQUksY0FBTCxFQUFqQjs7QUFFQSxZQUFJeUIsb0JBQUosQ0FBZSxFQUFDekIsSUFBSSxXQUFMLEVBQWY7QUFDQSxZQUFJMEIsbUJBQUosQ0FBYyxFQUFDMUIsSUFBSSxXQUFMLEVBQWQ7O0FBRUFLLDhCQUFZc0IsSUFBWixDQUFpQnhCLFNBQVN5QixJQUExQjtBQUNILEtBakNEO0FBa0NBdEMsV0FBT3VDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDaEMsSUFBaEM7QUFDSCxDQXpDRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IFwiYmFiZWwtcG9seWZpbGxcIjtcbmltcG9ydCBEcmF3Q2FudmFzIGZyb20gXCIuL3ZpZXdzL2NhbnZhcy9EcmF3Q2FudmFzXCI7XG5pbXBvcnQgSGVscENhbnZhcyBmcm9tIFwiLi92aWV3cy9jYW52YXMvSGVscENhbnZhc1wiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vdmlld3MvY2hhdC9DaGF0XCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiLi92aWV3cy9jYW52YXMvdG9vbHMvVG9vbGJhclwiO1xuaW1wb3J0IFNldHRpbmdNZW51IGZyb20gXCIuL3ZpZXdzL2NhbnZhcy9zZXR0aW5ncy9TZXR0aW5nTWVudVwiO1xuaW1wb3J0IFJvb21OYW1lIGZyb20gXCIuL3ZpZXdzL3Jvb20vUm9vbU5hbWVcIjtcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCIuL3ZpZXdzL3Jvb20vQmFja0J1dHRvblwiO1xuaW1wb3J0IFVzZXJzSW5Sb29tTGlzdCBmcm9tIFwiLi92aWV3cy9yb29tL1VzZXJzSW5Sb29tTGlzdFwiO1xuaW1wb3J0IFJvb21QYWdlIGZyb20gXCIuL3ZpZXdzL1Jvb21cIjtcbmltcG9ydCBSb29tTGlzdFBhZ2UgZnJvbSBcIi4vdmlld3MvUm9vbXNQYWdlXCI7XG5pbXBvcnQgTmFtZVBhZ2UgZnJvbSBcIi4vdmlld3MvTmFtZVwiO1xuXG5pbXBvcnQgTmFtZUJ1dHRvbiBmcm9tIFwiLi92aWV3cy9OYW1lUGFnZS9OYW1lQnV0dG9uXCI7XG5pbXBvcnQgTmFtZUlucHV0IGZyb20gXCIuL3ZpZXdzL05hbWVQYWdlL05hbWVJbnB1dFwiO1xuXG5pbXBvcnQgUm9vbUNyZWF0ZUJ1dHRvbiBmcm9tIFwiLi92aWV3cy9saXN0Vmlldy9uZXdSb29tL1Jvb21DcmVhdGVCdXR0b25cIjtcbmltcG9ydCBSb29tTGlzdCBmcm9tIFwiLi92aWV3cy9saXN0Vmlldy9yb29tcy9Sb29tTGlzdFwiO1xuaW1wb3J0IE5ld1Jvb21JbnB1dCBmcm9tIFwiLi92aWV3cy9saXN0Vmlldy9uZXdSb29tL05ld1Jvb21JbnB1dFwiO1xuaW1wb3J0IHtFdmVudHN9IGZyb20gXCJiYWNrYm9uZVwiO1xuaW1wb3J0IF8gZnJvbSBcInVuZGVyc2NvcmVcIjtcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vbW9kZWxzL0NhbnZhc1wiO1xuaW1wb3J0IFJvb20gZnJvbSBcIi4vbW9kZWxzL1Jvb21cIjtcbmltcG9ydCBQYWdlSGFuZGxlciBmcm9tIFwiLi9QYWdlSGFuZGxlclwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZXRHbG9iYWxWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5BcHAgPSB7fTtcbiAgICAgICAgd2luZG93LkFwcC5ldmVudHMgPSBfLmNsb25lKEV2ZW50cyk7XG4gICAgICAgIHdpbmRvdy4kID0gJDtcbiAgICB9O1xuICAgIGxldCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRHbG9iYWxWYXJpYWJsZXMoKTtcblxuICAgICAgICAvL3JlYXNvbiBmb3Igbm90IG5lc3RpbmcgYWxsIG9iamVjdHMgaW50byBwYWdlcyBpcyBlYXNpZXIgYWNjZXNzIHRvIG1vZGVscy5cbiAgICAgICAgbGV0IHJvb21QYWdlID0gbmV3IFJvb21QYWdlKHtlbDogJyNSb29tLXBhZ2UnfSk7XG4gICAgICAgIGxldCByb29tTGlzdFBhZ2UgPSBuZXcgUm9vbUxpc3RQYWdlKHtlbDogJyNMaXN0LXBhZ2UnfSk7XG4gICAgICAgIGxldCBuYW1lUGFnZSA9IG5ldyBOYW1lUGFnZSh7ZWw6ICcjTmFtZS1wYWdlJ30pO1xuXG4gICAgICAgIFBhZ2VIYW5kbGVyLmFkZFBhZ2Uocm9vbVBhZ2UpO1xuICAgICAgICBQYWdlSGFuZGxlci5hZGRQYWdlKHJvb21MaXN0UGFnZSk7XG4gICAgICAgIFBhZ2VIYW5kbGVyLmFkZFBhZ2UobmFtZVBhZ2UpO1xuXG4gICAgICAgIGxldCBjYW52YXNNb2RlbCA9IG5ldyBDYW52YXMoKTtcbiAgICAgICAgbGV0IGNhbnZhcyA9IG5ldyBEcmF3Q2FudmFzKHtlbDogJyNjYW52YXMnLCBtb2RlbDogY2FudmFzTW9kZWx9KTtcbiAgICAgICAgbGV0IGhlbHBDYW52YXMgPSBuZXcgSGVscENhbnZhcyh7ZWw6ICcjaGVscENhbnZhcycsIG1vZGVsOiBjYW52YXNNb2RlbH0pO1xuICAgICAgICBuZXcgU2V0dGluZ01lbnUoe2VsOiAnI3NldHRpbmdNZW51JywgbW9kZWw6IGNhbnZhc01vZGVsfSk7XG4gICAgICAgIG5ldyBUb29sYmFyKHtlbDogJyN0b29sYmFyJywgbW9kZWw6IGNhbnZhc01vZGVsfSk7XG5cbiAgICAgICAgbGV0IHJvb20gPSBuZXcgUm9vbSgpO1xuICAgICAgICBuZXcgQ2hhdCgpO1xuXG4gICAgICAgIG5ldyBSb29tTmFtZSh7ZWw6ICcjcm9vbU5hbWUnLCBtb2RlbDogcm9vbX0pO1xuICAgICAgICBuZXcgQmFja0J1dHRvbih7ZWw6IFwiI2JhY2stdG8tbGlzdFwifSk7XG4gICAgICAgIG5ldyBVc2Vyc0luUm9vbUxpc3Qoe2VsOiBcIiN1c2Vyc1wiLCBtb2RlbDogcm9vbX0pO1xuXG4gICAgICAgIG5ldyBSb29tTGlzdCh7ZWw6ICcjbGlzdC12aWV3J30pO1xuICAgICAgICBuZXcgUm9vbUNyZWF0ZUJ1dHRvbih7ZWw6IFwiI2NyZWF0ZU5ld1wifSk7XG4gICAgICAgIG5ldyBOZXdSb29tSW5wdXQoe2VsOiAnI25ld1Jvb21OYW1lJ30pO1xuXG4gICAgICAgIG5ldyBOYW1lQnV0dG9uKHtlbDogJyNzZW5kTmFtZSd9KTtcbiAgICAgICAgbmV3IE5hbWVJbnB1dCh7ZWw6ICcjdXNlcm5hbWUnfSk7XG5cbiAgICAgICAgUGFnZUhhbmRsZXIuZ290byhuYW1lUGFnZS5uYW1lKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdCk7XG59KSgpO1xuXG5cbiJdfQ==

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.3.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2018-01-20T17:24Z
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

	var isFunction = function isFunction( obj ) {

	      // Support: Chrome <=57, Firefox <=52
	      // In some browsers, typeof returns "function" for HTML <object> elements
	      // (i.e., `typeof document.createElement( "object" ) === "function"`).
	      // We don't want to classify *any* DOM node as a function.
	      return typeof obj === "function" && typeof obj.nodeType !== "number";
	  };


	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};




		var preservedScriptAttributes = {
			type: true,
			src: true,
			noModule: true
		};

		function DOMEval( code, doc, node ) {
			doc = doc || document;

			var i,
				script = doc.createElement( "script" );

			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {
					if ( node[ i ] ) {
						script[ i ] = node[ i ];
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.3.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

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
		if ( typeof target !== "object" && !isFunction( target ) ) {
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

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
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
			type = toType( obj );

		if ( isFunction( obj ) || isWindow( obj ) ) {
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



	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
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

		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
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
								if ( isFunction( this[ match ] ) ) {
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
			} else if ( isFunction( selector ) ) {
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
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {

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
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
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
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
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
										if ( isFunction( then ) ) {

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
									isFunction( onProgress ) ?
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
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
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

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,

						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
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
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

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
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !isFunction( value ) ) {
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


	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase( all, letter ) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
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
				cache[ camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
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
					key = key.map( camelCase );
				} else {
					key = camelCase( key );

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
									name = camelCase( name.slice( 5 ) );
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
		var adjusted, scale,
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

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while ( maxIterations-- ) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;

			}

			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
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

	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



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
				if ( toType( elem ) === "object" ) {

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

				get: isFunction( hook ) ?
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
		this.timeStamp = src && src.timeStamp || Date.now();

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

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
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
			valueIsFunction = isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
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

							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
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

	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			div.style.position = "absolute";
			scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}

		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableMarginLeftVal,
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

		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
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
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

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

	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0;

		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin
			if ( box === "margin" ) {
				delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {

				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}

			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5
			) );
		}

		return delta;
	}

	function getWidthOrHeight( elem, dimension, extra ) {

		// Start with computed style
		var styles = getStyles( elem ),
			val = curCSS( elem, dimension, styles ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox;

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = valueIsBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ dimension ] );

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		if ( val === "auto" ||
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

			val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

			// offsetWidth/offsetHeight provide border-box values
			valueIsBorderBox = true;
		}

		// Normalize "" and auto
		val = parseFloat( val ) || 0;

		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
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
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
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
				origName = camelCase( name ),
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

	jQuery.each( [ "height", "width" ], function( i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
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
								return getWidthOrHeight( elem, dimension, extra );
							} ) :
							getWidthOrHeight( elem, dimension, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),
					isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra && boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					);

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && support.scrollboxSize() === styles.position ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
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

		if ( prefix !== "margin" ) {
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
		return ( fxNow = Date.now() );
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

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
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
			name = camelCase( index );
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
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( isFunction( animation.opts.start ) ) {
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
			if ( isFunction( props ) ) {
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
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
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
			if ( isFunction( opt.old ) ) {
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

		fxNow = Date.now();

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
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
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

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
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
			var type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );

			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( isValidValue ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = classesToArray( value );

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
			var hooks, ret, valueIsFunction,
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

			valueIsFunction = isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( valueIsFunction ) {
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


	support.focusin = "onfocusin" in window;


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = lastElement = tmp = elem = elem || document;

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
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

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
				lastElement = cur;
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
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}

						elem[ type ]();

						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}

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

	var nonce = Date.now();

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

		} else if ( !traditional && toType( obj ) === "object" ) {

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
				var value = isFunction( valueOrFunction ) ?
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

			if ( isFunction( func ) ) {

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

				// Support: IE <=8 - 11, Edge 12 - 15
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

				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
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
			if ( isFunction( data ) ) {
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
				if ( isFunction( html ) ) {
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
			if ( isFunction( html ) ) {
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
			var htmlIsFunction = isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
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
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;

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
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

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
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
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
				if ( responseContainer && isFunction( overwritten ) ) {
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
		if ( isFunction( params ) ) {

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

			if ( isFunction( options ) ) {

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

		// offset() relates an element's border box to the document origin
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var rect, win,
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

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();

			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {

					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
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
				if ( isWindow( elem ) ) {
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

					if ( isWindow( elem ) ) {

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

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
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
	};

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
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};




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
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _DataStreamHandler = __webpack_require__(330);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	var _CanvasLayer = __webpack_require__(331);

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
	        return false;
	    }
	});

	exports.default = DrawCanvas;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvRHJhd0NhbnZhcy5qcyJdLCJuYW1lcyI6WyJEcmF3Q2FudmFzIiwiQ2FudmFzTGF5ZXIiLCJleHRlbmQiLCJldmVudHMiLCJpbml0aWFsaXplIiwicHJvdG90eXBlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJBcHAiLCJvbiIsImUiLCJ1cGRhdGVQaXhlbHMiLCJ0b29sVXBkYXRlUGl4ZWxzIiwiJGVsIiwiYmluZCIsImNhbnZhc01vdXNlU2Nyb2xsSGFuZGxlciIsInBpeGVscyIsImkiLCJsZW5ndGgiLCJuZXdQaXhlbHMiLCJtb2RlbCIsImdldCIsIngiLCJ5IiwiY29sb3IiLCJzZXQiLCJjbGVhclBpeGVsIiwiZmlsbFBpeGVsIiwiRGF0YVN0cmVhbUhhbmRsZXIiLCJzZW5kUGl4ZWxzIiwiY2FudmFzUmVkcmF3IiwiY2xlYXJDYW52YXMiLCJqIiwiYyIsImVsIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNjYWxlIiwicG9zaXRpb24iLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsb3NlUGF0aCIsImNsZWFyUmVjdCIsImNhbnZhc01vdXNlTW92ZUhhbmRsZXIiLCJyZXBvc2l0aW9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0cmlnZ2VyIiwiZHJhZ0hhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwiY2FudmFzTW91c2VEb3duSGFuZGxlciIsImJ1dHRvbiIsIm1vdXNlRG93bkhhbmRsZXIiLCJjYW52YXNNb3VzZVVwSGFuZGxlciIsIm1vdXNlVXBIYW5kbGVyIiwiZXZlbnQiLCJ3aWR0aCIsImhlaWdodCIsIm9yaWdpbmFsRXZlbnQiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwibmV3U2NhbGUiLCJjYW52YXNDb250ZXh0TWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBTUEsYUFBYUMsc0JBQVlDLE1BQVosQ0FBbUI7QUFDbENDLFlBQVE7QUFDSixxQkFBYSx3QkFEVDtBQUVKLG1CQUFXLHNCQUZQO0FBR0oscUJBQWEsd0JBSFQ7QUFJSix1QkFBZTtBQUpYLEtBRDBCO0FBT2xDQyxnQkFBWSxzQkFBWTtBQUFBOztBQUNwQkgsOEJBQVlJLFNBQVosQ0FBc0JELFVBQXRCLENBQWlDRSxLQUFqQyxDQUF1QyxJQUF2QyxFQUE2Q0MsU0FBN0M7QUFDQUMsWUFBSUwsTUFBSixDQUFXTSxFQUFYLENBQWMsY0FBZCxFQUE4QixVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0MsWUFBTCxDQUFrQkQsQ0FBbEIsQ0FBUDtBQUFBLFNBQTlCO0FBQ0FGLFlBQUlMLE1BQUosQ0FBV00sRUFBWCxDQUFjLGtCQUFkLEVBQWtDLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLRSxnQkFBTCxDQUFzQkYsQ0FBdEIsQ0FBUDtBQUFBLFNBQWxDO0FBQ0EsYUFBS0csR0FBTCxDQUFTQyxJQUFULENBQWMsMkJBQWQsRUFBMkMsVUFBQ0osQ0FBRDtBQUFBLG1CQUFPLE1BQUtLLHdCQUFMLENBQThCTCxDQUE5QixDQUFQO0FBQUEsU0FBM0M7QUFDSCxLQVppQztBQWFsQ0Msa0JBQWMsc0JBQVVLLE1BQVYsRUFBa0I7QUFDNUIsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELE9BQU9FLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUNwQyxnQkFBSUUsWUFBWSxLQUFLQyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxRQUFmLENBQWhCO0FBQ0FGLHNCQUFVSCxPQUFPQyxDQUFQLEVBQVVLLENBQXBCLEVBQXVCTixPQUFPQyxDQUFQLEVBQVVNLENBQWpDLElBQXNDUCxPQUFPQyxDQUFQLEVBQVVPLEtBQWhEO0FBQ0EsaUJBQUtKLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLFFBQWYsRUFBeUJOLFNBQXpCO0FBQ0EsZ0JBQUlILE9BQU9DLENBQVAsRUFBVU8sS0FBVixJQUFtQixDQUF2QixFQUEwQjtBQUN0QixxQkFBS0UsVUFBTCxDQUFnQlYsT0FBT0MsQ0FBUCxFQUFVSyxDQUExQixFQUE2Qk4sT0FBT0MsQ0FBUCxFQUFVTSxDQUF2QztBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLSSxTQUFMLENBQWVYLE9BQU9DLENBQVAsRUFBVUssQ0FBekIsRUFBNEJOLE9BQU9DLENBQVAsRUFBVU0sQ0FBdEMsRUFBeUNQLE9BQU9DLENBQVAsRUFBVU8sS0FBbkQ7QUFDSDtBQUNKO0FBQ0osS0F4QmlDO0FBeUJsQ1osc0JBQWtCLDBCQUFVSSxNQUFWLEVBQWtCO0FBQ2hDLGFBQUtMLFlBQUwsQ0FBa0JLLE1BQWxCO0FBQ0FZLG9DQUFrQkMsVUFBbEIsQ0FBNkJiLE1BQTdCO0FBQ0gsS0E1QmlDOztBQThCbENjLGtCQUFjLHdCQUFZO0FBQ3RCLGFBQUtDLFdBQUw7QUFDQSxZQUFJZixTQUFTLEtBQUtJLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFFBQWYsQ0FBYjtBQUNBLGFBQUssSUFBSUosSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtHLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE9BQWYsQ0FBcEIsRUFBNkNKLEdBQTdDLEVBQWtEO0FBQzlDLGlCQUFLLElBQUllLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLWixLQUFMLENBQVdDLEdBQVgsQ0FBZSxRQUFmLENBQXBCLEVBQThDVyxHQUE5QyxFQUFtRDtBQUMvQyxvQkFBSWhCLE9BQU9DLENBQVAsRUFBVWUsQ0FBVixLQUFnQixDQUFwQixFQUF1QjtBQUNuQix5QkFBS0wsU0FBTCxDQUFlVixDQUFmLEVBQWtCZSxDQUFsQixFQUFxQmhCLE9BQU9DLENBQVAsRUFBVWUsQ0FBVixDQUFyQjtBQUNIO0FBRUo7QUFDSjtBQUNKLEtBekNpQztBQTBDbENMLGVBQVcsbUJBQVVMLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsS0FBaEIsRUFBdUI7QUFDOUIsWUFBSVMsSUFBSSxLQUFLQyxFQUFiO0FBQ0EsWUFBSUMsTUFBTUYsRUFBRUcsVUFBRixDQUFhLElBQWIsQ0FBVjtBQUNBLFlBQUlDLFFBQVEsS0FBS2pCLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLFlBQUlpQixXQUFXLEtBQUtsQixLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFmLENBQWY7O0FBRUFjLFlBQUlJLFNBQUo7QUFDQUosWUFBSUssU0FBSixHQUFnQmhCLEtBQWhCO0FBQ0FXLFlBQUlNLFFBQUosQ0FBYUgsU0FBU2hCLENBQVQsR0FBYUEsSUFBSWUsS0FBOUIsRUFBcUNDLFNBQVNmLENBQVQsR0FBYUEsSUFBSWMsS0FBdEQsRUFBNkRBLEtBQTdELEVBQW9FQSxLQUFwRTtBQUNBRixZQUFJTyxTQUFKO0FBQ0gsS0FwRGlDO0FBcURsQ2hCLGdCQUFZLG9CQUFVSixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDeEIsWUFBSVUsSUFBSSxLQUFLQyxFQUFiO0FBQ0EsWUFBSUMsTUFBTUYsRUFBRUcsVUFBRixDQUFhLElBQWIsQ0FBVjtBQUNBLFlBQUlDLFFBQVEsS0FBS2pCLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLFlBQUlpQixXQUFXLEtBQUtsQixLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFmLENBQWY7QUFDQWMsWUFBSUksU0FBSjtBQUNBSixZQUFJUSxTQUFKLENBQWNMLFNBQVNoQixDQUFULEdBQWFBLElBQUksS0FBS0YsS0FBTCxDQUFXQyxHQUFYLENBQWUsT0FBZixDQUEvQixFQUF3RGlCLFNBQVNmLENBQVQsR0FBYUEsSUFBSWMsS0FBekUsRUFBZ0ZBLEtBQWhGLEVBQXVGQSxLQUF2RjtBQUNBRixZQUFJTyxTQUFKO0FBQ0gsS0E3RGlDO0FBOERsQ0UsNEJBQXdCLGdDQUFVbEMsQ0FBVixFQUFhO0FBQ2pDLFlBQUcsS0FBS1UsS0FBTCxDQUFXQyxHQUFYLENBQWUsbUJBQWYsQ0FBSCxFQUF1QztBQUNuQyxpQkFBS0QsS0FBTCxDQUFXeUIsVUFBWCxDQUFzQm5DLEVBQUVvQyxPQUFGLEdBQVksS0FBSzFCLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLGNBQWYsRUFBK0JDLENBQWpFLEVBQW9FWixFQUFFcUMsT0FBRixHQUFZLEtBQUszQixLQUFMLENBQVdDLEdBQVgsQ0FBZSxjQUFmLEVBQStCRSxDQUEvRztBQUNBZixnQkFBSUwsTUFBSixDQUFXNkMsT0FBWCxDQUFtQixjQUFuQjtBQUNILFNBSEQsTUFHTSxJQUFHLEtBQUs1QixLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFmLENBQUgsRUFBOEI7QUFDaEMsaUJBQUtELEtBQUwsQ0FBV0MsR0FBWCxDQUFlLGNBQWYsRUFBK0I0QixXQUEvQixDQUEyQ3ZDLENBQTNDO0FBQ0gsU0FGSyxNQUVEO0FBQ0QsaUJBQUtVLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLGNBQWYsRUFBK0I2QixnQkFBL0IsQ0FBZ0R4QyxDQUFoRDtBQUNIO0FBQ0QsYUFBS1UsS0FBTCxDQUFXSyxHQUFYLENBQWUsY0FBZixFQUErQixFQUFDSCxHQUFHWixFQUFFb0MsT0FBTixFQUFldkIsR0FBR2IsRUFBRXFDLE9BQXBCLEVBQS9CO0FBQ0gsS0F4RWlDO0FBeUVsQ0ksMEJBekVrQyxrQ0F5RVh6QyxDQXpFVyxFQXlFUjtBQUN0QixhQUFLVSxLQUFMLENBQVdLLEdBQVgsQ0FBZSxtQkFBZixFQUFvQyxLQUFwQztBQUNBLGFBQUtMLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLFVBQWYsRUFBMkIsS0FBM0I7QUFDQSxZQUFJZixFQUFFMEMsTUFBRixJQUFZLENBQWhCLEVBQW1CO0FBQ2YsaUJBQUtoQyxLQUFMLENBQVdLLEdBQVgsQ0FBZSxtQkFBZixFQUFvQyxJQUFwQztBQUNBO0FBQ0g7QUFDRCxhQUFLTCxLQUFMLENBQVdLLEdBQVgsQ0FBZSxVQUFmLEVBQTJCLElBQTNCO0FBQ0EsYUFBS0wsS0FBTCxDQUFXQyxHQUFYLENBQWUsY0FBZixFQUErQmdDLGdCQUEvQixDQUFnRDNDLENBQWhEO0FBQ0gsS0FsRmlDOzs7QUFvRmxDNEMsMEJBQXNCLDhCQUFVNUMsQ0FBVixFQUFhO0FBQy9CLGFBQUtVLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLFVBQWYsRUFBMkIsS0FBM0I7QUFDQSxhQUFLTCxLQUFMLENBQVdLLEdBQVgsQ0FBZSxtQkFBZixFQUFvQyxLQUFwQztBQUNBLFlBQUlmLEVBQUUwQyxNQUFGLElBQVksQ0FBaEIsRUFBbUI7QUFDZjtBQUNIO0FBQ0QsYUFBS2hDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLGNBQWYsRUFBK0JrQyxjQUEvQixDQUE4QzdDLENBQTlDO0FBQ0gsS0EzRmlDOztBQTZGbENLLDhCQUEwQixrQ0FBVXlDLEtBQVYsRUFBaUI7QUFDdkMsWUFBSW5CLFFBQVEsS0FBS2pCLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLFlBQUlvQyxRQUFRLEtBQUtyQyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxPQUFmLENBQVo7QUFDQSxZQUFJcUMsU0FBUyxLQUFLdEMsS0FBTCxDQUFXQyxHQUFYLENBQWUsUUFBZixDQUFiO0FBQ0EsWUFBSW1DLE1BQU1HLGFBQU4sQ0FBb0JDLFVBQXBCLEdBQWlDLENBQWpDLElBQXNDSixNQUFNRyxhQUFOLENBQW9CRSxNQUFwQixHQUE2QixDQUF2RSxFQUEwRTtBQUN0RSxnQkFBSXhCLFNBQVMsRUFBYixFQUFpQjtBQUNiLG9CQUFJeUIsV0FBV3pCLFFBQVEsQ0FBdkI7QUFDQSxxQkFBS2pCLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLE9BQWYsRUFBd0JxQyxRQUF4QjtBQUNBLHFCQUFLMUMsS0FBTCxDQUFXeUIsVUFBWCxDQUFzQixDQUFFWSxTQUFTcEIsUUFBTyxDQUFoQixJQUFxQm9CLFFBQVFwQixLQUEvQixJQUF3QyxDQUE5RCxFQUFnRSxDQUFFcUIsVUFBVXJCLFFBQVEsQ0FBbEIsSUFBdUJxQixTQUFTckIsS0FBbEMsSUFBMkMsQ0FBM0c7QUFDSDtBQUNKLFNBTkQsTUFNTztBQUNILGdCQUFJQSxRQUFRLENBQVosRUFBZTtBQUNYLG9CQUFJeUIsWUFBV3pCLFFBQVEsQ0FBdkI7QUFDQSxxQkFBS2pCLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLE9BQWYsRUFBd0JxQyxTQUF4QjtBQUNBLHFCQUFLMUMsS0FBTCxDQUFXeUIsVUFBWCxDQUFzQixDQUFDWSxTQUFTcEIsUUFBUSxDQUFqQixJQUFzQm9CLFFBQVFwQixLQUEvQixJQUF3QyxDQUE5RCxFQUFnRSxDQUFFcUIsVUFBVXJCLFFBQVEsQ0FBbEIsSUFBdUJxQixTQUFTckIsS0FBbEMsSUFBMEMsQ0FBMUc7QUFDSDtBQUNKO0FBQ0Q3QixZQUFJTCxNQUFKLENBQVc2QyxPQUFYLENBQW1CLGNBQW5CO0FBQ0gsS0EvR2lDO0FBZ0hsQ2UsdUJBQW1CLDZCQUFZO0FBQzNCLGVBQU8sS0FBUDtBQUNIO0FBbEhpQyxDQUFuQixDQUFuQjs7a0JBcUhlL0QsVSIsImZpbGUiOiJEcmF3Q2FudmFzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFTdHJlYW1IYW5kbGVyIGZyb20gXCIuLi8uLi9EYXRhU3RyZWFtSGFuZGxlclwiO1xuaW1wb3J0IENhbnZhc0xheWVyIGZyb20gXCIuL0NhbnZhc0xheWVyXCI7XG5jb25zdCBEcmF3Q2FudmFzID0gQ2FudmFzTGF5ZXIuZXh0ZW5kKHtcbiAgICBldmVudHM6IHtcbiAgICAgICAgXCJtb3VzZWRvd25cIjogXCJjYW52YXNNb3VzZURvd25IYW5kbGVyXCIsXG4gICAgICAgIFwibW91c2V1cFwiOiBcImNhbnZhc01vdXNlVXBIYW5kbGVyXCIsXG4gICAgICAgIFwibW91c2Vtb3ZlXCI6IFwiY2FudmFzTW91c2VNb3ZlSGFuZGxlclwiLFxuICAgICAgICBcImNvbnRleHRtZW51XCI6IFwiY2FudmFzQ29udGV4dE1lbnVcIlxuICAgIH0sXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBDYW52YXNMYXllci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBBcHAuZXZlbnRzLm9uKCd1cGRhdGVQaXhlbHMnLCAoZSkgPT4gdGhpcy51cGRhdGVQaXhlbHMoZSkpO1xuICAgICAgICBBcHAuZXZlbnRzLm9uKCd0b29sVXBkYXRlUGl4ZWxzJywgKGUpID0+IHRoaXMudG9vbFVwZGF0ZVBpeGVscyhlKSk7XG4gICAgICAgIHRoaXMuJGVsLmJpbmQoJ21vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwnLCAoZSkgPT4gdGhpcy5jYW52YXNNb3VzZVNjcm9sbEhhbmRsZXIoZSkpO1xuICAgIH0sXG4gICAgdXBkYXRlUGl4ZWxzOiBmdW5jdGlvbiAocGl4ZWxzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGl4ZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmV3UGl4ZWxzID0gdGhpcy5tb2RlbC5nZXQoXCJwaXhlbHNcIik7XG4gICAgICAgICAgICBuZXdQaXhlbHNbcGl4ZWxzW2ldLnhdW3BpeGVsc1tpXS55XSA9IHBpeGVsc1tpXS5jb2xvcjtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KFwicGl4ZWxzXCIsIG5ld1BpeGVscyk7XG4gICAgICAgICAgICBpZiAocGl4ZWxzW2ldLmNvbG9yID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyUGl4ZWwocGl4ZWxzW2ldLngsIHBpeGVsc1tpXS55KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUGl4ZWwocGl4ZWxzW2ldLngsIHBpeGVsc1tpXS55LCBwaXhlbHNbaV0uY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB0b29sVXBkYXRlUGl4ZWxzOiBmdW5jdGlvbiAocGl4ZWxzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGl4ZWxzKHBpeGVscyk7XG4gICAgICAgIERhdGFTdHJlYW1IYW5kbGVyLnNlbmRQaXhlbHMocGl4ZWxzKTtcbiAgICB9LFxuXG4gICAgY2FudmFzUmVkcmF3OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgbGV0IHBpeGVscyA9IHRoaXMubW9kZWwuZ2V0KFwicGl4ZWxzXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kZWwuZ2V0KFwid2lkdGhcIik7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1vZGVsLmdldChcImhlaWdodFwiKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBpeGVsc1tpXVtqXSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbFBpeGVsKGksIGosIHBpeGVsc1tpXVtqXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGZpbGxQaXhlbDogZnVuY3Rpb24gKHgsIHksIGNvbG9yKSB7XG4gICAgICAgIGxldCBjID0gdGhpcy5lbDtcbiAgICAgICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLm1vZGVsLmdldChcInNjYWxlXCIpO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm1vZGVsLmdldChcInBvc2l0aW9uXCIpO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QocG9zaXRpb24ueCArIHggKiBzY2FsZSwgcG9zaXRpb24ueSArIHkgKiBzY2FsZSwgc2NhbGUsIHNjYWxlKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH0sXG4gICAgY2xlYXJQaXhlbDogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgbGV0IGMgPSB0aGlzLmVsO1xuICAgICAgICBsZXQgY3R4ID0gYy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMubW9kZWwuZ2V0KFwic2NhbGVcIik7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMubW9kZWwuZ2V0KFwicG9zaXRpb25cIik7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmNsZWFyUmVjdChwb3NpdGlvbi54ICsgeCAqIHRoaXMubW9kZWwuZ2V0KFwic2NhbGVcIiksIHBvc2l0aW9uLnkgKyB5ICogc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9LFxuICAgIGNhbnZhc01vdXNlTW92ZUhhbmRsZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmKHRoaXMubW9kZWwuZ2V0KFwiZHJhZ2dpbmdTZWNvbmRhcnlcIikpe1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5yZXBvc2l0aW9uKGUub2Zmc2V0WCAtIHRoaXMubW9kZWwuZ2V0KFwibGFzdE1vdXNlUG9zXCIpLngsIGUub2Zmc2V0WSAtIHRoaXMubW9kZWwuZ2V0KFwibGFzdE1vdXNlUG9zXCIpLnkpO1xuICAgICAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwiY2FudmFzUmVkcmF3XCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLm1vZGVsLmdldChcImRyYWdnaW5nXCIpKXtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZ2V0KFwic2VsZWN0ZWRUb29sXCIpLmRyYWdIYW5kbGVyKGUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZ2V0KFwic2VsZWN0ZWRUb29sXCIpLm1vdXNlTW92ZUhhbmRsZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoXCJsYXN0TW91c2VQb3NcIiwge3g6IGUub2Zmc2V0WCwgeTogZS5vZmZzZXRZfSk7XG4gICAgfSxcbiAgICBjYW52YXNNb3VzZURvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ2RyYWdnaW5nU2Vjb25kYXJ5JywgZmFsc2UpO1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgnZHJhZ2dpbmcnLCBmYWxzZSk7XG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNldCgnZHJhZ2dpbmdTZWNvbmRhcnknLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsLnNldCgnZHJhZ2dpbmcnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5tb2RlbC5nZXQoXCJzZWxlY3RlZFRvb2xcIikubW91c2VEb3duSGFuZGxlcihlKTtcbiAgICB9LFxuXG4gICAgY2FudmFzTW91c2VVcEhhbmRsZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdkcmFnZ2luZycsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ2RyYWdnaW5nU2Vjb25kYXJ5JywgZmFsc2UpO1xuICAgICAgICBpZiAoZS5idXR0b24gPT0gMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwuZ2V0KFwic2VsZWN0ZWRUb29sXCIpLm1vdXNlVXBIYW5kbGVyKGUpO1xuICAgIH0sXG5cbiAgICBjYW52YXNNb3VzZVNjcm9sbEhhbmRsZXI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLm1vZGVsLmdldChcInNjYWxlXCIpO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLm1vZGVsLmdldChcIndpZHRoXCIpO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tb2RlbC5nZXQoXCJoZWlnaHRcIik7XG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEgPiAwIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQuZGV0YWlsIDwgMCkge1xuICAgICAgICAgICAgaWYgKHNjYWxlIDw9IDIwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1NjYWxlID0gc2NhbGUgKyAxO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KFwic2NhbGVcIiwgbmV3U2NhbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwucmVwb3NpdGlvbigoIHdpZHRoICogKHNjYWxlLSAxKSAtIHdpZHRoICogc2NhbGUpIC8gMiwoIGhlaWdodCAqIChzY2FsZSAtIDEpIC0gaGVpZ2h0ICogc2NhbGUpIC8gMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2NhbGUgPiAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1NjYWxlID0gc2NhbGUgLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KFwic2NhbGVcIiwgbmV3U2NhbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwucmVwb3NpdGlvbigod2lkdGggKiAoc2NhbGUgKyAxKSAtIHdpZHRoICogc2NhbGUpIC8gMiwoIGhlaWdodCAqIChzY2FsZSArIDEpIC0gaGVpZ2h0ICogc2NhbGUpLyAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJjYW52YXNSZWRyYXdcIik7XG4gICAgfSxcbiAgICBjYW52YXNDb250ZXh0TWVudTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdDYW52YXM7XG4iXX0=

/***/ }),
/* 330 */
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9EYXRhU3RyZWFtSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJEYXRhU3RyZWFtSGFuZGxlciIsInNvY2tldCIsImlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoYW5kbGVTZXJ2ZXJQaXhlbHMiLCJoYW5kbGVNZXNzYWdlIiwiaGFuZGxlUm9vbXNMaXN0IiwiaGFuZGxlUm9vbURldGFpbCIsInVzZXJSZXF1ZXN0ZWRUb1NlbmRBbGxEYXRhIiwiaGFuZGxlTmV3RGltZW5zaW9ucyIsImhhbmRsZUluaXREYXRhIiwicm9vbSIsImVtaXQiLCJuYW1lIiwibWVzc2FnZSIsIm5ld1BpeGVscyIsInBpeGVscyIsImNhbnZhc0RhdGEiLCJ1c2VyIiwidHlwZSIsIkFwcCIsImV2ZW50cyIsInRyaWdnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsaUI7QUFDRixpQ0FBYTtBQUFBOztBQUFBOztBQUNULGFBQUtDLE1BQUwsR0FBY0MsSUFBZDtBQUNBLGFBQUtELE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsc0JBQTdCLEVBQXFELFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLQyxrQkFBTCxDQUF3QkQsQ0FBeEIsQ0FBUDtBQUFBLFNBQXJEO0FBQ0EsYUFBS0gsTUFBTCxDQUFZRSxnQkFBWixDQUE2QixlQUE3QixFQUE4QyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0UsYUFBTCxDQUFtQkYsQ0FBbkIsRUFBc0IsUUFBdEIsQ0FBUDtBQUFBLFNBQTlDO0FBQ0EsYUFBS0gsTUFBTCxDQUFZRSxnQkFBWixDQUE2QixTQUE3QixFQUF3QyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0UsYUFBTCxDQUFtQkYsQ0FBbkIsRUFBc0IsTUFBdEIsQ0FBUDtBQUFBLFNBQXhDO0FBQ0EsYUFBS0gsTUFBTCxDQUFZRSxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0csZUFBTCxDQUFxQkgsQ0FBckIsQ0FBUDtBQUFBLFNBQTFDO0FBQ0EsYUFBS0gsTUFBTCxDQUFZRSxnQkFBWixDQUE2QixhQUE3QixFQUE0QyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0ksZ0JBQUwsQ0FBc0JKLENBQXRCLENBQVA7QUFBQSxTQUE1QztBQUNBLGFBQUtILE1BQUwsQ0FBWUUsZ0JBQVosQ0FBNkIsdUJBQTdCLEVBQXNELFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLSywwQkFBTCxDQUFnQ0wsQ0FBaEMsQ0FBUDtBQUFBLFNBQXREO0FBQ0EsYUFBS0gsTUFBTCxDQUFZRSxnQkFBWixDQUE2QixnQkFBN0IsRUFBK0MsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtNLG1CQUFMLENBQXlCTixDQUF6QixDQUFQO0FBQUEsU0FBL0M7QUFDQSxhQUFLSCxNQUFMLENBQVlFLGdCQUFaLENBQTZCLGdCQUE3QixFQUErQyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS08sY0FBTCxDQUFvQlAsQ0FBcEIsQ0FBUDtBQUFBLFNBQS9DO0FBQ0g7Ozs7aUNBQ1FRLEksRUFBSztBQUNWLGlCQUFLWCxNQUFMLENBQVlZLElBQVosQ0FBaUIsTUFBakIsRUFBeUJELElBQXpCO0FBQ0g7OztvQ0FDVTtBQUNQLGlCQUFLWCxNQUFMLENBQVlZLElBQVosQ0FBaUIsT0FBakI7QUFDSDs7O2lDQUNRQyxJLEVBQUs7QUFDVixpQkFBS2IsTUFBTCxDQUFZWSxJQUFaLENBQWlCLFNBQWpCLEVBQTRCQyxJQUE1QjtBQUNIOzs7b0NBQ1dDLE8sRUFBUTtBQUNoQixpQkFBS2QsTUFBTCxDQUFZWSxJQUFaLENBQWlCLFNBQWpCLEVBQTRCRSxPQUE1QjtBQUNIOzs7bUNBQ1VDLFMsRUFBVTtBQUNqQixpQkFBS2YsTUFBTCxDQUFZWSxJQUFaLENBQWlCLG9CQUFqQixFQUF1QyxFQUFDSSxRQUFRRCxTQUFULEVBQXZDO0FBQ0g7Ozt1Q0FDY0UsVSxFQUFZQyxJLEVBQUs7QUFDNUIsaUJBQUtsQixNQUFMLENBQVlZLElBQVosQ0FBaUIsc0JBQWpCLEVBQXlDLEVBQUNLLFlBQVlBLFVBQWIsRUFBeUJDLE1BQU1BLElBQS9CLEVBQXpDO0FBQ0g7Ozt1Q0FDY2YsQyxFQUFFO0FBQ2IsaUJBQUtILE1BQUwsQ0FBWVksSUFBWixDQUFpQixnQkFBakIsRUFBbUNULENBQW5DO0FBQ0g7OztzQ0FDYUEsQyxFQUFHZ0IsSSxFQUFLO0FBQ2xCQyxnQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLGlCQUFuQixFQUFzQyxFQUFDUixTQUFTWCxFQUFFLFNBQUYsQ0FBVixFQUF3QmUsTUFBTWYsRUFBRSxNQUFGLENBQTlCLEVBQXlDZ0IsTUFBTUEsSUFBL0MsRUFBdEM7QUFDSDs7OzJDQUNrQmhCLEMsRUFBRTtBQUNqQmlCLGdCQUFJQyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsY0FBbkIsRUFBbUNuQixDQUFuQztBQUNIOzs7bURBRTBCQSxDLEVBQUU7QUFDekJpQixnQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLG1CQUFuQixFQUF3Q25CLENBQXhDO0FBQ0g7Ozt3Q0FDZUEsQyxFQUFFO0FBQ2RpQixnQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLGFBQW5CLEVBQWtDbkIsQ0FBbEM7QUFDSDs7O3lDQUNnQkEsQyxFQUFFO0FBQ2ZpQixnQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLG1CQUFuQixFQUF3Q25CLENBQXhDO0FBQ0g7Ozs0Q0FDbUJBLEMsRUFBRTtBQUNsQmlCLGdCQUFJQyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsa0JBQW5CLEVBQXVDbkIsQ0FBdkM7QUFDSDs7O3VDQUNjQSxDLEVBQUU7QUFDYmlCLGdCQUFJQyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsc0JBQW5CLEVBQTJDbkIsQ0FBM0M7QUFDSDs7Ozs7O2tCQUVXLElBQUlKLGlCQUFKLEUiLCJmaWxlIjoiRGF0YVN0cmVhbUhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEYXRhU3RyZWFtSGFuZGxlcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnNvY2tldCA9IGlvKCk7XG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3B1bGxQaXhlbHNGcm9tU2VydmVyJywgKGUpID0+IHRoaXMuaGFuZGxlU2VydmVyUGl4ZWxzKGUpKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignc2VydmVyTWVzc2FnZScsIChlKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoZSwgJ3NlcnZlcicpKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB0aGlzLmhhbmRsZU1lc3NhZ2UoZSwgJ3VzZXInKSk7XG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvb21zTGlzdCcsIChlKSA9PiB0aGlzLmhhbmRsZVJvb21zTGlzdChlKSk7XG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvb21EZXRhaWxzJywgKGUpID0+IHRoaXMuaGFuZGxlUm9vbURldGFpbChlKSk7XG4gICAgICAgIHRoaXMuc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbmRBbGxEYXRhRm9yTmV3VXNlcicsIChlKSA9PiB0aGlzLnVzZXJSZXF1ZXN0ZWRUb1NlbmRBbGxEYXRhKGUpKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcigncHVsbERpbWVuc2lvbnMnLCAoZSkgPT4gdGhpcy5oYW5kbGVOZXdEaW1lbnNpb25zKGUpKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcigncHVsbENhbnZhc0RhdGEnLCAoZSkgPT4gdGhpcy5oYW5kbGVJbml0RGF0YShlKSk7XG4gICAgfVxuICAgIGpvaW5Sb29tKHJvb20pe1xuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdqb2luJywgcm9vbSk7XG4gICAgfVxuICAgIGxlYXZlUm9vbSgpe1xuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdsZWF2ZScpO1xuICAgIH1cbiAgICBzZW5kTmFtZShuYW1lKXtcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc2V0TmFtZScsIG5hbWUpO1xuICAgIH1cbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlKXtcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBzZW5kUGl4ZWxzKG5ld1BpeGVscyl7XG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3B1c2hQaXhlbHNUb1NlcnZlcicsIHtwaXhlbHM6IG5ld1BpeGVsc30pO1xuICAgIH1cbiAgICBzZW5kQ2FudmFzRGF0YShjYW52YXNEYXRhLCB1c2VyKXtcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgncHVzaENhbnZhc0RhdGFUb1VzZXInLCB7Y2FudmFzRGF0YTogY2FudmFzRGF0YSwgdXNlcjogdXNlcn0pO1xuICAgIH1cbiAgICBzZW5kRGltZW5zaW9ucyhlKXtcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgncHVzaERpbWVuc2lvbnMnLCBlKVxuICAgIH1cbiAgICBoYW5kbGVNZXNzYWdlKGUsIHR5cGUpe1xuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJyZWNlaXZlZE1lc3NhZ2VcIiwge21lc3NhZ2U6IGVbJ21lc3NhZ2UnXSwgdXNlcjogZVsndXNlciddLCB0eXBlOiB0eXBlfSk7XG4gICAgfVxuICAgIGhhbmRsZVNlcnZlclBpeGVscyhlKXtcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwidXBkYXRlUGl4ZWxzXCIsIGUpO1xuICAgIH1cblxuICAgIHVzZXJSZXF1ZXN0ZWRUb1NlbmRBbGxEYXRhKGUpe1xuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJzZW5kQWxsRGF0YVRvVXNlclwiLCBlKTtcbiAgICB9XG4gICAgaGFuZGxlUm9vbXNMaXN0KGUpe1xuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJ1cGRhdGVSb29tc1wiLCBlKTtcbiAgICB9XG4gICAgaGFuZGxlUm9vbURldGFpbChlKXtcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwidXBkYXRlQ3VycmVudFJvb21cIiwgZSk7XG4gICAgfVxuICAgIGhhbmRsZU5ld0RpbWVuc2lvbnMoZSl7XG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcImNoYW5nZURpbWVuc2lvbnNcIiwgZSk7XG4gICAgfVxuICAgIGhhbmRsZUluaXREYXRhKGUpe1xuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJpbml0aWFsaXplUm9vbUNhbnZhc1wiLCBlKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCAobmV3IERhdGFTdHJlYW1IYW5kbGVyKTsiXX0=

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _HelpFunctions = __webpack_require__(332);

	var _HelpFunctions2 = _interopRequireDefault(_HelpFunctions);

	var _backbone = __webpack_require__(333);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvQ2FudmFzTGF5ZXIuanMiXSwibmFtZXMiOlsiQ2FudmFzTGF5ZXIiLCJWaWV3IiwiZXh0ZW5kIiwiaW5pdGlhbGl6ZSIsIkFwcCIsImV2ZW50cyIsIm9uIiwicmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc1JlZHJhdyIsImxpc3RlblRvIiwibW9kZWwiLCJjdHgiLCJlbCIsImdldENvbnRleHQiLCJpbWFnZVNtb290aGluZ0VuYWJsZWQiLCJjbGVhckNhbnZhcyIsImJlZ2luUGF0aCIsImNsZWFyUmVjdCIsIiRlbCIsIndpZHRoIiwiaGVpZ2h0Iiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiYXR0ciIsIkhlbHBGdW5jdGlvbnMiLCJtYWtlRXZlbiIsInBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLGNBQWNDLGVBQUtDLE1BQUwsQ0FBWTtBQUM1QkMsZ0JBQVksc0JBQVk7QUFBQTs7QUFDcEJDLFlBQUlDLE1BQUosQ0FBV0MsRUFBWCxDQUFjLGdCQUFkLEVBQWdDO0FBQUEsbUJBQU0sTUFBS0MsTUFBTCxFQUFOO0FBQUEsU0FBaEM7QUFDQUMsZUFBT0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0M7QUFBQSxtQkFBTSxNQUFLRixNQUFMLEVBQU47QUFBQSxTQUFsQztBQUNBSCxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxjQUFkLEVBQThCO0FBQUEsbUJBQU0sTUFBS0ksWUFBTCxFQUFOO0FBQUEsU0FBOUI7QUFDQSxhQUFLQyxRQUFMLENBQWMsS0FBS0MsS0FBbkIsRUFBMEIsY0FBMUIsRUFBMEMsS0FBS0YsWUFBL0M7QUFDQSxhQUFLQyxRQUFMLENBQWMsS0FBS0MsS0FBbkIsRUFBMEIsZUFBMUIsRUFBMkMsS0FBS0YsWUFBaEQ7QUFDQSxZQUFJRyxNQUFNLEtBQUtDLEVBQUwsQ0FBUUMsVUFBUixDQUFtQixJQUFuQixDQUFWO0FBQ0FGLFlBQUlHLHFCQUFKLEdBQTRCLEtBQTVCO0FBQ0gsS0FUMkI7QUFVNUJDLGlCQUFhLHVCQUFZO0FBQ3JCLFlBQUlKLE1BQU0sS0FBS0MsRUFBTCxDQUFRQyxVQUFSLENBQW1CLElBQW5CLENBQVY7QUFDQUYsWUFBSUssU0FBSjtBQUNBTCxZQUFJTSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixLQUFLQyxHQUFMLENBQVNDLEtBQVQsRUFBcEIsRUFBc0MsS0FBS0QsR0FBTCxDQUFTRSxNQUFULEVBQXRDO0FBQ0FULFlBQUlVLE1BQUo7QUFDQVYsWUFBSVcsU0FBSjtBQUNILEtBaEIyQjtBQWlCNUJqQixZQUFRLGtCQUFVO0FBQ2QsYUFBS2EsR0FBTCxDQUFTSyxJQUFULENBQWMsT0FBZCxFQUF1QkMsd0JBQWNDLFFBQWQsQ0FBdUIsS0FBS1AsR0FBTCxDQUFTUSxNQUFULEdBQWtCUCxLQUFsQixFQUF2QixDQUF2QjtBQUNBLGFBQUtELEdBQUwsQ0FBU0ssSUFBVCxDQUFjLFFBQWQsRUFBd0JDLHdCQUFjQyxRQUFkLENBQXVCLEtBQUtQLEdBQUwsQ0FBU1EsTUFBVCxHQUFrQk4sTUFBbEIsRUFBdkIsQ0FBeEI7QUFDQSxhQUFLWixZQUFMO0FBQ0g7QUFyQjJCLENBQVosQ0FBcEI7O2tCQXdCZVYsVyIsImZpbGUiOiJDYW52YXNMYXllci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxwRnVuY3Rpb25zIGZyb20gXCIuLi8uLi9IZWxwRnVuY3Rpb25zXCI7XG5pbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xuXG5jb25zdCBDYW52YXNMYXllciA9IFZpZXcuZXh0ZW5kKHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEFwcC5ldmVudHMub24oJ2luaXRpYWxpemVyb29tJywgKCkgPT4gdGhpcy5yZXNpemUoKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aGlzLnJlc2l6ZSgpKTtcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcImNhbnZhc1JlZHJhd1wiLCAoKSA9PiB0aGlzLmNhbnZhc1JlZHJhdygpKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOndpZHRoJywgdGhpcy5jYW52YXNSZWRyYXcpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6aGVpZ2h0JywgdGhpcy5jYW52YXNSZWRyYXcpO1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5lbC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgfSxcbiAgICBjbGVhckNhbnZhczogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5lbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLiRlbC53aWR0aCgpLCB0aGlzLiRlbC5oZWlnaHQoKSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLiRlbC5hdHRyKCd3aWR0aCcsIEhlbHBGdW5jdGlvbnMubWFrZUV2ZW4odGhpcy4kZWwucGFyZW50KCkud2lkdGgoKSkpO1xuICAgICAgICB0aGlzLiRlbC5hdHRyKCdoZWlnaHQnLCBIZWxwRnVuY3Rpb25zLm1ha2VFdmVuKHRoaXMuJGVsLnBhcmVudCgpLmhlaWdodCgpKSk7XG4gICAgICAgIHRoaXMuY2FudmFzUmVkcmF3KCk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc0xheWVyO1xuIl19

/***/ }),
/* 332 */
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
	        //=================== The following code is an implementation of Bresenham's line algorithm

	    }, {
	        key: "plotLine",
	        value: function plotLine(startVector, endVector) {
	            var result = [];

	            var startX = startVector.x;
	            var startY = startVector.y;
	            var endX = endVector.x;
	            var endY = endVector.y;

	            var tmp = void 0;
	            var steep = Math.abs(endY - startY) > Math.abs(endX - startX);

	            if (steep) {
	                tmp = startX;
	                startX = startY;
	                startY = tmp;

	                tmp = endX;
	                endX = endY;
	                endY = tmp;
	            }
	            var sign = 1;
	            if (startX > endX) {
	                sign = -1;
	                startX *= -1;
	                endX *= -1;
	            }

	            var dx = endX - startX;
	            var dy = Math.abs(endY - startY);
	            var err = dx / 2;
	            var yStep = startY < endY ? 1 : -1;
	            var y = startY;

	            for (var x = startX; x <= endX; x++) {
	                if (steep) {
	                    result.push({ x: y, y: sign * x });
	                } else {
	                    result.push({ x: sign * x, y: y });
	                }

	                err = err - dy;
	                if (err < 0) {
	                    y += yStep;
	                    err += dx;
	                }
	            }

	            return result;
	        }
	    }]);

	    return HelpFunctions;
	}();

	exports.default = HelpFunctions;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9IZWxwRnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkhlbHBGdW5jdGlvbnMiLCJjIiwiaGV4IiwidG9TdHJpbmciLCJsZW5ndGgiLCJyIiwiZyIsImIiLCJjb21wb25lbnRUb0hleCIsImkiLCJpc0V2ZW4iLCJzdGFydFZlY3RvciIsImVuZFZlY3RvciIsInJlc3VsdCIsInN0YXJ0WCIsIngiLCJzdGFydFkiLCJ5IiwiZW5kWCIsImVuZFkiLCJ0bXAiLCJzdGVlcCIsIk1hdGgiLCJhYnMiLCJzaWduIiwiZHgiLCJkeSIsImVyciIsInlTdGVwIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxhOzs7Ozs7OztBQUNGO3VDQUNzQkMsQyxFQUFHO0FBQ3JCLGdCQUFJQyxNQUFNRCxFQUFFRSxRQUFGLENBQVcsRUFBWCxDQUFWO0FBQ0EsbUJBQU9ELElBQUlFLE1BQUosSUFBYyxDQUFkLEdBQWtCLE1BQU1GLEdBQXhCLEdBQThCQSxHQUFyQztBQUNIOzs7aUNBRWVHLEMsRUFBR0MsQyxFQUFHQyxDLEVBQUc7QUFDckIsbUJBQU8sTUFBTVAsY0FBY1EsY0FBZCxDQUE2QkgsQ0FBN0IsQ0FBTixHQUF3Q0wsY0FBY1EsY0FBZCxDQUE2QkYsQ0FBN0IsQ0FBeEMsR0FBMEVOLGNBQWNRLGNBQWQsQ0FBNkJELENBQTdCLENBQWpGO0FBQ0g7QUFDRDs7OzsrQkFFY0UsQyxFQUFFO0FBQ1osbUJBQVFBLElBQUksQ0FBSixJQUFTLENBQWpCO0FBQ0g7OztpQ0FDZUEsQyxFQUFFO0FBQ2QsbUJBQU8sS0FBS0MsTUFBTCxDQUFZRCxDQUFaLElBQWdCQSxDQUFoQixHQUFvQkEsSUFBRSxDQUE3QjtBQUNIO0FBQ0Q7Ozs7aUNBQ2dCRSxXLEVBQWFDLFMsRUFBVztBQUNwQyxnQkFBSUMsU0FBUyxFQUFiOztBQUVBLGdCQUFJQyxTQUFTSCxZQUFZSSxDQUF6QjtBQUNBLGdCQUFJQyxTQUFTTCxZQUFZTSxDQUF6QjtBQUNBLGdCQUFJQyxPQUFPTixVQUFVRyxDQUFyQjtBQUNBLGdCQUFJSSxPQUFPUCxVQUFVSyxDQUFyQjs7QUFFQSxnQkFBSUcsWUFBSjtBQUNBLGdCQUFJQyxRQUFRQyxLQUFLQyxHQUFMLENBQVNKLE9BQU9ILE1BQWhCLElBQTBCTSxLQUFLQyxHQUFMLENBQVNMLE9BQU9KLE1BQWhCLENBQXRDOztBQUVBLGdCQUFJTyxLQUFKLEVBQVc7QUFDUEQsc0JBQU1OLE1BQU47QUFDQUEseUJBQVNFLE1BQVQ7QUFDQUEseUJBQVNJLEdBQVQ7O0FBRUFBLHNCQUFNRixJQUFOO0FBQ0FBLHVCQUFPQyxJQUFQO0FBQ0FBLHVCQUFPQyxHQUFQO0FBQ0g7QUFDRCxnQkFBSUksT0FBTyxDQUFYO0FBQ0EsZ0JBQUlWLFNBQVNJLElBQWIsRUFBbUI7QUFDZk0sdUJBQU8sQ0FBQyxDQUFSO0FBQ0FWLDBCQUFVLENBQUMsQ0FBWDtBQUNBSSx3QkFBUSxDQUFDLENBQVQ7QUFDSDs7QUFFRCxnQkFBSU8sS0FBS1AsT0FBT0osTUFBaEI7QUFDQSxnQkFBSVksS0FBS0osS0FBS0MsR0FBTCxDQUFTSixPQUFPSCxNQUFoQixDQUFUO0FBQ0EsZ0JBQUlXLE1BQU9GLEtBQUcsQ0FBZDtBQUNBLGdCQUFJRyxRQUFRWixTQUFTRyxJQUFULEdBQWdCLENBQWhCLEdBQW9CLENBQUMsQ0FBakM7QUFDQSxnQkFBSUYsSUFBSUQsTUFBUjs7QUFFQSxpQkFBSyxJQUFJRCxJQUFJRCxNQUFiLEVBQXFCQyxLQUFLRyxJQUExQixFQUFnQ0gsR0FBaEMsRUFBcUM7QUFDakMsb0JBQUlNLEtBQUosRUFBVztBQUNQUiwyQkFBT2dCLElBQVAsQ0FBWSxFQUFDZCxHQUFHRSxDQUFKLEVBQU9BLEdBQUdPLE9BQUtULENBQWYsRUFBWjtBQUNILGlCQUZELE1BR0s7QUFDREYsMkJBQU9nQixJQUFQLENBQVksRUFBQ2QsR0FBR1MsT0FBS1QsQ0FBVCxFQUFZRSxHQUFHQSxDQUFmLEVBQVo7QUFDSDs7QUFFRFUsc0JBQU1BLE1BQU1ELEVBQVo7QUFDQSxvQkFBSUMsTUFBTSxDQUFWLEVBQWE7QUFDVFYseUJBQUtXLEtBQUw7QUFDQUQsMkJBQU9GLEVBQVA7QUFDSDtBQUNKOztBQUVELG1CQUFPWixNQUFQO0FBQ0g7Ozs7OztrQkFFVWIsYSIsImZpbGUiOiJIZWxwRnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSGVscEZ1bmN0aW9ucyB7XG4gICAgLy89PT09PT09PT09PT09PT09PT1mcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2MjM4MzgvcmdiLXRvLWhleC1hbmQtaGV4LXRvLXJnYj09PT09PT09PT09PT09PT09PT09PT1cbiAgICBzdGF0aWMgY29tcG9uZW50VG9IZXgoYykge1xuICAgICAgICBsZXQgaGV4ID0gYy50b1N0cmluZygxNik7XG4gICAgICAgIHJldHVybiBoZXgubGVuZ3RoID09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmdiVG9IZXgociwgZywgYikge1xuICAgICAgICByZXR1cm4gXCIjXCIgKyBIZWxwRnVuY3Rpb25zLmNvbXBvbmVudFRvSGV4KHIpICsgSGVscEZ1bmN0aW9ucy5jb21wb25lbnRUb0hleChnKSArIEhlbHBGdW5jdGlvbnMuY29tcG9uZW50VG9IZXgoYik7XG4gICAgfVxuICAgIC8vPT09PT09PT09PT09PT09PT09PWZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYyMzgzOC9yZ2ItdG8taGV4LWFuZC1oZXgtdG8tcmdiPT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzdGF0aWMgaXNFdmVuKGkpe1xuICAgICAgICByZXR1cm4gKGkgJSAyID09IDApO1xuICAgIH1cbiAgICBzdGF0aWMgbWFrZUV2ZW4oaSl7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRXZlbihpKT8gaSA6IGktMTtcbiAgICB9XG4gICAgLy89PT09PT09PT09PT09PT09PT09IFRoZSBmb2xsb3dpbmcgY29kZSBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBCcmVzZW5oYW0ncyBsaW5lIGFsZ29yaXRobVxuICAgIHN0YXRpYyBwbG90TGluZShzdGFydFZlY3RvciwgZW5kVmVjdG9yKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGxldCBzdGFydFggPSBzdGFydFZlY3Rvci54O1xuICAgICAgICBsZXQgc3RhcnRZID0gc3RhcnRWZWN0b3IueTtcbiAgICAgICAgbGV0IGVuZFggPSBlbmRWZWN0b3IueDtcbiAgICAgICAgbGV0IGVuZFkgPSBlbmRWZWN0b3IueTtcblxuICAgICAgICBsZXQgdG1wO1xuICAgICAgICBsZXQgc3RlZXAgPSBNYXRoLmFicyhlbmRZIC0gc3RhcnRZKSA+IE1hdGguYWJzKGVuZFggLSBzdGFydFgpO1xuXG4gICAgICAgIGlmIChzdGVlcCkge1xuICAgICAgICAgICAgdG1wID0gc3RhcnRYO1xuICAgICAgICAgICAgc3RhcnRYID0gc3RhcnRZO1xuICAgICAgICAgICAgc3RhcnRZID0gdG1wO1xuXG4gICAgICAgICAgICB0bXAgPSBlbmRYO1xuICAgICAgICAgICAgZW5kWCA9IGVuZFk7XG4gICAgICAgICAgICBlbmRZID0gdG1wO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzaWduID0gMTtcbiAgICAgICAgaWYgKHN0YXJ0WCA+IGVuZFgpIHtcbiAgICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgICAgICAgIHN0YXJ0WCAqPSAtMTtcbiAgICAgICAgICAgIGVuZFggKj0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZHggPSBlbmRYIC0gc3RhcnRYO1xuICAgICAgICBsZXQgZHkgPSBNYXRoLmFicyhlbmRZIC0gc3RhcnRZKTtcbiAgICAgICAgbGV0IGVyciA9IChkeC8yKTtcbiAgICAgICAgbGV0IHlTdGVwID0gc3RhcnRZIDwgZW5kWSA/IDEgOiAtMTtcbiAgICAgICAgbGV0IHkgPSBzdGFydFk7XG5cbiAgICAgICAgZm9yIChsZXQgeCA9IHN0YXJ0WDsgeCA8PSBlbmRYOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChzdGVlcCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHt4OiB5LCB5OiBzaWduKnh9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHt4OiBzaWduKngsIHk6IHl9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXJyID0gZXJyIC0gZHk7XG4gICAgICAgICAgICBpZiAoZXJyIDwgMCkge1xuICAgICAgICAgICAgICAgIHkgKz0geVN0ZXA7XG4gICAgICAgICAgICAgICAgZXJyICs9IGR4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBIZWxwRnVuY3Rpb25zIl19

/***/ }),
/* 333 */
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
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(334), __webpack_require__(328), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
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
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {//     Underscore.js 1.9.1
	//     http://underscorejs.org
	//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` (`self`) in the browser, `global`
	  // on the server, or `this` in some virtual machines. We use `self`
	  // instead of `window` for `WebWorker` support.
	  var root = typeof self == 'object' && self.self === self && self ||
	            typeof global == 'object' && global.global === global && global ||
	            this ||
	            {};

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
	  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

	  // Create quick reference variables for speed access to core prototypes.
	  var push = ArrayProto.push,
	      slice = ArrayProto.slice,
	      toString = ObjProto.toString,
	      hasOwnProperty = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var nativeIsArray = Array.isArray,
	      nativeKeys = Object.keys,
	      nativeCreate = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for their old module API. If we're in
	  // the browser, add `_` as a global object.
	  // (`nodeType` is checked to ensure that `module`
	  // and `exports` are not HTML elements.)
	  if (typeof exports != 'undefined' && !exports.nodeType) {
	    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.9.1';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      // The 2-argument case is omitted because we’re not using it.
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

	  var builtinIteratee;

	  // An internal function to generate callbacks that can be applied to each
	  // element in a collection, returning the desired result — either `identity`,
	  // an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
	    return _.property(value);
	  };

	  // External wrapper for our callback generator. Users may customize
	  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
	  // This abstraction hides the internal-only argCount argument.
	  _.iteratee = builtinIteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // Some functions take a variable number of arguments, or a few expected
	  // arguments at the beginning and then a variable number of values to operate
	  // on. This helper accumulates all remaining arguments past the function’s
	  // argument length (or an explicit `startIndex`), into an array that becomes
	  // the last argument. Similar to ES6’s "rest parameter".
	  var restArguments = function(func, startIndex) {
	    startIndex = startIndex == null ? func.length - 1 : +startIndex;
	    return function() {
	      var length = Math.max(arguments.length - startIndex, 0),
	          rest = Array(length),
	          index = 0;
	      for (; index < length; index++) {
	        rest[index] = arguments[index + startIndex];
	      }
	      switch (startIndex) {
	        case 0: return func.call(this, rest);
	        case 1: return func.call(this, arguments[0], rest);
	        case 2: return func.call(this, arguments[0], arguments[1], rest);
	      }
	      var args = Array(startIndex + 1);
	      for (index = 0; index < startIndex; index++) {
	        args[index] = arguments[index];
	      }
	      args[startIndex] = rest;
	      return func.apply(this, args);
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

	  var shallowProperty = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  var has = function(obj, path) {
	    return obj != null && hasOwnProperty.call(obj, path);
	  }

	  var deepGet = function(obj, path) {
	    var length = path.length;
	    for (var i = 0; i < length; i++) {
	      if (obj == null) return void 0;
	      obj = obj[path[i]];
	    }
	    return length ? obj : void 0;
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object.
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = shallowProperty('length');
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
	  var createReduce = function(dir) {
	    // Wrap code that reassigns argument variables in a separate function than
	    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
	    var reducer = function(obj, iteratee, memo, initial) {
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      if (!initial) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    };

	    return function(obj, iteratee, memo, context) {
	      var initial = arguments.length >= 3;
	      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
	    };
	  };

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
	    var key = keyFinder(obj, predicate, context);
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
	  _.invoke = restArguments(function(obj, path, args) {
	    var contextPath, func;
	    if (_.isFunction(path)) {
	      func = path;
	    } else if (_.isArray(path)) {
	      contextPath = path.slice(0, -1);
	      path = path[path.length - 1];
	    }
	    return _.map(obj, function(context) {
	      var method = func;
	      if (!method) {
	        if (contextPath && contextPath.length) {
	          context = deepGet(context, contextPath);
	        }
	        if (context == null) return void 0;
	        method = context[path];
	      }
	      return method == null ? method : method.apply(context, args);
	    });
	  });

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
	    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value != null && value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(v, index, list) {
	        computed = iteratee(v, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = v;
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
	    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value != null && value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(v, index, list) {
	        computed = iteratee(v, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = v;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection.
	  _.shuffle = function(obj) {
	    return _.sample(obj, Infinity);
	  };

	  // Sample **n** random values from a collection using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
	    var length = getLength(sample);
	    n = Math.max(Math.min(n, length), 0);
	    var last = length - 1;
	    for (var index = 0; index < n; index++) {
	      var rand = _.random(index, last);
	      var temp = sample[index];
	      sample[index] = sample[rand];
	      sample[rand] = temp;
	    }
	    return sample.slice(0, n);
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    var index = 0;
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, key, list) {
	      return {
	        value: value,
	        index: index++,
	        criteria: iteratee(value, key, list)
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
	  var group = function(behavior, partition) {
	    return function(obj, iteratee, context) {
	      var result = partition ? [[], []] : {};
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
	    if (has(result, key)) result[key].push(value); else result[key] = [value];
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
	    if (has(result, key)) result[key]++; else result[key] = 1;
	  });

	  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (_.isString(obj)) {
	      // Keep surrogate pair characters together
	      return obj.match(reStrSymbol);
	    }
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
	  _.partition = group(function(result, value, pass) {
	    result[pass ? 0 : 1].push(value);
	  }, true);

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null || array.length < 1) return n == null ? void 0 : [];
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
	    if (array == null || array.length < 1) return n == null ? void 0 : [];
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
	    return _.filter(array, Boolean);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, output) {
	    output = output || [];
	    var idx = output.length;
	    for (var i = 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        // Flatten current level of array or arguments object.
	        if (shallow) {
	          var j = 0, len = value.length;
	          while (j < len) output[idx++] = value[j++];
	        } else {
	          flatten(value, shallow, strict, output);
	          idx = output.length;
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
	  _.without = restArguments(function(array, otherArrays) {
	    return _.difference(array, otherArrays);
	  });

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // The faster algorithm will not work with an iteratee if the iteratee
	  // is not a one-to-one function, so providing an iteratee will disable
	  // the faster algorithm.
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
	      if (isSorted && !iteratee) {
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
	  _.union = restArguments(function(arrays) {
	    return _.uniq(flatten(arrays, true, true));
	  });

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      var j;
	      for (j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = restArguments(function(array, rest) {
	    rest = flatten(rest, true, true);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  });

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices.
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = restArguments(_.unzip);

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values. Passing by pairs is the reverse of _.pairs.
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

	  // Generator function to create the findIndex and findLastIndex functions.
	  var createPredicateIndexFinder = function(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  };

	  // Returns the first index on an array-like that passes a predicate test.
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

	  // Generator function to create the indexOf and lastIndexOf functions.
	  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
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
	  };

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
	    if (!step) {
	      step = stop < start ? -1 : 1;
	    }

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Chunk a single array into multiple arrays, each containing `count` or fewer
	  // items.
	  _.chunk = function(array, count) {
	    if (count == null || count < 1) return [];
	    var result = [];
	    var i = 0, length = array.length;
	    while (i < length) {
	      result.push(slice.call(array, i, i += count));
	    }
	    return result;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments.
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
	  _.bind = restArguments(function(func, context, args) {
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var bound = restArguments(function(callArgs) {
	      return executeBound(func, bound, context, this, args.concat(callArgs));
	    });
	    return bound;
	  });

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder by default, allowing any combination of arguments to be
	  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
	  _.partial = restArguments(function(func, boundArgs) {
	    var placeholder = _.partial.placeholder;
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  });

	  _.partial.placeholder = _;

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = restArguments(function(obj, keys) {
	    keys = flatten(keys, false, false);
	    var index = keys.length;
	    if (index < 1) throw new Error('bindAll must be passed function names');
	    while (index--) {
	      var key = keys[index];
	      obj[key] = _.bind(obj[key], obj);
	    }
	  });

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = restArguments(function(func, wait, args) {
	    return setTimeout(function() {
	      return func.apply(null, args);
	    }, wait);
	  });

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var timeout, context, args, result;
	    var previous = 0;
	    if (!options) options = {};

	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };

	    var throttled = function() {
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

	    throttled.cancel = function() {
	      clearTimeout(timeout);
	      previous = 0;
	      timeout = context = args = null;
	    };

	    return throttled;
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, result;

	    var later = function(context, args) {
	      timeout = null;
	      if (args) result = func.apply(context, args);
	    };

	    var debounced = restArguments(function(args) {
	      if (timeout) clearTimeout(timeout);
	      if (immediate) {
	        var callNow = !timeout;
	        timeout = setTimeout(later, wait);
	        if (callNow) result = func.apply(this, args);
	      } else {
	        timeout = _.delay(later, wait, this, args);
	      }

	      return result;
	    });

	    debounced.cancel = function() {
	      clearTimeout(timeout);
	      timeout = null;
	    };

	    return debounced;
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

	  _.restArguments = restArguments;

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  var collectNonEnumProps = function(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  };

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`.
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (has(obj, key)) keys.push(key);
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

	  // Returns the results of applying the iteratee to each element of the object.
	  // In contrast to _.map it returns an object.
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = _.keys(obj),
	        length = keys.length,
	        results = {};
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys[index];
	      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  // The opposite of _.object.
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
	  // Aliased as `methods`.
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, defaults) {
	    return function(obj) {
	      var length = arguments.length;
	      if (defaults) obj = Object(obj);
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!defaults || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s).
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test.
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Internal pick helper function to determine if `obj` has key `key`.
	  var keyInObj = function(value, key, obj) {
	    return key in obj;
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = restArguments(function(obj, keys) {
	    var result = {}, iteratee = keys[0];
	    if (obj == null) return result;
	    if (_.isFunction(iteratee)) {
	      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
	      keys = _.allKeys(obj);
	    } else {
	      iteratee = keyInObj;
	      keys = flatten(keys, false, false);
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  });

	  // Return a copy of the object without the blacklisted properties.
	  _.omit = restArguments(function(obj, keys) {
	    var iteratee = keys[0], context;
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	      if (keys.length > 1) context = keys[1];
	    } else {
	      keys = _.map(flatten(keys, false, false), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  });

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
	  var eq, deepEq;
	  eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // `null` or `undefined` only equal to itself (strict comparison).
	    if (a == null || b == null) return false;
	    // `NaN`s are equivalent, but non-reflexive.
	    if (a !== a) return b !== b;
	    // Exhaust primitive checks
	    var type = typeof a;
	    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
	    return deepEq(a, b, aStack, bStack);
	  };

	  // Internal recursive comparison function for `isEqual`.
	  deepEq = function(a, b, aStack, bStack) {
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
	        // Object(NaN) is equivalent to NaN.
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	      case '[object Symbol]':
	        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
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
	        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
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

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
	  var nodelist = root.document && root.document.childNodes;
	  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`?
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && isNaN(obj);
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
	  _.has = function(obj, path) {
	    if (!_.isArray(path)) {
	      return has(obj, path);
	    }
	    var length = path.length;
	    for (var i = 0; i < length; i++) {
	      var key = path[i];
	      if (obj == null || !hasOwnProperty.call(obj, key)) {
	        return false;
	      }
	      obj = obj[key];
	    }
	    return !!length;
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

	  // Creates a function that, when passed an object, will traverse that object’s
	  // properties down the given `path`, specified as an array of keys or indexes.
	  _.property = function(path) {
	    if (!_.isArray(path)) {
	      return shallowProperty(path);
	    }
	    return function(obj) {
	      return deepGet(obj, path);
	    };
	  };

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    if (obj == null) {
	      return function(){};
	    }
	    return function(path) {
	      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
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
	    // Regexes for identifying a key that needs to be escaped.
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

	  // Traverses the children of `obj` along `path`. If a child is a function, it
	  // is invoked with its parent as context. Returns the value of the final
	  // child, or `fallback` if any child is undefined.
	  _.result = function(obj, path, fallback) {
	    if (!_.isArray(path)) path = [path];
	    var length = path.length;
	    if (!length) {
	      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
	    }
	    for (var i = 0; i < length; i++) {
	      var prop = obj == null ? void 0 : obj[path[i]];
	      if (prop === void 0) {
	        prop = fallback;
	        i = length; // Ensure we don't continue iterating.
	      }
	      obj = _.isFunction(prop) ? prop.call(obj) : prop;
	    }
	    return obj;
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
	    evaluate: /<%([\s\S]+?)%>/g,
	    interpolate: /<%=([\s\S]+?)%>/g,
	    escape: /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'": "'",
	    '\\': '\\',
	    '\r': 'r',
	    '\n': 'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

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
	      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offset.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    var render;
	    try {
	      render = new Function(settings.variable || 'obj', '_', source);
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
	  var chainResult = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return chainResult(this, func.apply(_, args));
	      };
	    });
	    return _;
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
	      return chainResult(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return chainResult(this, method.apply(this._wrapped, arguments));
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
	    return String(this._wrapped);
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
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(335)(module)))

/***/ }),
/* 335 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _CanvasLayer = __webpack_require__(331);

	var _CanvasLayer2 = _interopRequireDefault(_CanvasLayer);

	var _HelpFunctions = __webpack_require__(332);

	var _HelpFunctions2 = _interopRequireDefault(_HelpFunctions);

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
	        App.events.on("drawHelpLine", function (e) {
	            return _this.drawLine(e);
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
	    },
	    drawLine: function drawLine(e) {
	        this.clearCanvas();
	        var position = this.model.get("position");
	        var scale = this.model.get("scale");
	        var ctx = this.el.getContext("2d");

	        // The following code is an implementation of Bresenham's line algorithm
	        ctx.beginPath();
	        ctx.fillStyle = e.color;
	        // call helpfunction to get array of 
	        _HelpFunctions2.default.plotLine(e.start, e.end).forEach(function (vector) {
	            ctx.fillRect(position.x + vector.x * scale, position.y + vector.y * scale, scale, scale);
	        });
	        ctx.closePath();

	        if (this.model.get("drawHelpLines")) {
	            this.drawHelpLines();
	        }
	    }
	});

	exports.default = HelpCanvas;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvSGVscENhbnZhcy5qcyJdLCJuYW1lcyI6WyJIZWxwQ2FudmFzIiwiQ2FudmFzTGF5ZXIiLCJleHRlbmQiLCJpbml0aWFsaXplIiwicHJvdG90eXBlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJsaXN0ZW5UbyIsIm1vZGVsIiwiY2FudmFzUmVkcmF3IiwiQXBwIiwiZXZlbnRzIiwib24iLCJlIiwiZHJhd1NxdWFyZSIsImRyYXdMaW5lIiwiY2xlYXJDYW52YXMiLCJkcmF3T3V0bGluaW5nIiwiZ2V0IiwiZHJhd0hlbHBMaW5lcyIsImN0eCIsImVsIiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwicmVjdCIsIngiLCJ5Iiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiYyIsImdsb2JhbEFscGhhIiwiY2xlYXJSZWN0IiwiJGVsIiwid2lkdGgiLCJoZWlnaHQiLCJzY2FsZSIsInBvc2l0aW9uIiwiaSIsIm1vdmVUbyIsImxpbmVUbyIsImoiLCJNYXRoIiwiZmxvb3IiLCJmaWxsU3R5bGUiLCJjb2xvciIsImZpbGxSZWN0IiwidyIsImgiLCJIZWxwRnVuY3Rpb25zIiwicGxvdExpbmUiLCJzdGFydCIsImVuZCIsImZvckVhY2giLCJ2ZWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWFDLHNCQUFZQyxNQUFaLENBQW1CO0FBQ2xDQyxnQkFBWSxzQkFBWTtBQUFBOztBQUNwQkYsOEJBQVlHLFNBQVosQ0FBc0JELFVBQXRCLENBQWlDRSxLQUFqQyxDQUF1QyxJQUF2QyxFQUE2Q0MsU0FBN0M7QUFDQSxhQUFLQyxRQUFMLENBQWMsS0FBS0MsS0FBbkIsRUFBMEIsc0JBQTFCLEVBQWtELEtBQUtDLFlBQXZEO0FBQ0FDLFlBQUlDLE1BQUosQ0FBV0MsRUFBWCxDQUFjLGtCQUFkLEVBQWtDO0FBQUEsbUJBQU0sTUFBS0gsWUFBTCxFQUFOO0FBQUEsU0FBbEM7QUFDQUMsWUFBSUMsTUFBSixDQUFXQyxFQUFYLENBQWMsZ0JBQWQsRUFBZ0MsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE1BQUtDLFVBQUwsQ0FBZ0JELENBQWhCLENBQVA7QUFBQSxTQUFoQztBQUNBSCxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxjQUFkLEVBQThCLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLRSxRQUFMLENBQWNGLENBQWQsQ0FBUDtBQUFBLFNBQTlCO0FBQ0gsS0FQaUM7QUFRbENKLGtCQUFjLHdCQUFZO0FBQ3RCLGFBQUtPLFdBQUw7QUFDQSxhQUFLQyxhQUFMO0FBQ0EsWUFBSSxLQUFLVCxLQUFMLENBQVdVLEdBQVgsQ0FBZSxlQUFmLENBQUosRUFBcUM7QUFDakMsaUJBQUtDLGFBQUw7QUFDSDtBQUNKLEtBZGlDO0FBZWxDRixtQkFBZSx5QkFBWTtBQUN2QixZQUFJRyxNQUFNLEtBQUtDLEVBQUwsQ0FBUUMsVUFBUixDQUFtQixJQUFuQixDQUFWO0FBQ0FGLFlBQUlHLFdBQUosR0FBa0IsS0FBS2YsS0FBTCxDQUFXVSxHQUFYLENBQWUsd0JBQWYsQ0FBbEI7QUFDQUUsWUFBSUksU0FBSjtBQUNBSixZQUFJSyxJQUFKLENBQVMsS0FBS2pCLEtBQUwsQ0FBV1UsR0FBWCxDQUFlLFVBQWYsRUFBMkJRLENBQTNCLEdBQStCLEdBQXhDLEVBQTZDLEtBQUtsQixLQUFMLENBQVdVLEdBQVgsQ0FBZSxVQUFmLEVBQTJCUyxDQUEzQixHQUErQixHQUE1RSxFQUFpRixLQUFLbkIsS0FBTCxDQUFXVSxHQUFYLENBQWUsT0FBZixJQUEwQixLQUFLVixLQUFMLENBQVdVLEdBQVgsQ0FBZSxPQUFmLENBQTNHLEVBQW9JLEtBQUtWLEtBQUwsQ0FBV1UsR0FBWCxDQUFlLFFBQWYsSUFBMkIsS0FBS1YsS0FBTCxDQUFXVSxHQUFYLENBQWUsT0FBZixDQUEvSjtBQUNBRSxZQUFJUSxNQUFKO0FBQ0FSLFlBQUlTLFNBQUo7QUFDSCxLQXRCaUM7QUF1QmxDYixpQkFBYSx1QkFBWTtBQUNyQixZQUFJYyxJQUFJLEtBQUtULEVBQWI7QUFDQSxZQUFJRCxNQUFNVSxFQUFFUixVQUFGLENBQWEsSUFBYixDQUFWO0FBQ0FGLFlBQUlXLFdBQUosR0FBa0IsR0FBbEI7QUFDQVgsWUFBSUksU0FBSjtBQUNBSixZQUFJWSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixLQUFLQyxHQUFMLENBQVNDLEtBQVQsRUFBcEIsRUFBc0MsS0FBS0QsR0FBTCxDQUFTRSxNQUFULEVBQXRDO0FBQ0FmLFlBQUlRLE1BQUo7QUFDQVIsWUFBSVMsU0FBSjtBQUNILEtBL0JpQztBQWdDbENWLGlCQWhDa0MsMkJBZ0NsQjtBQUNaLFlBQUlDLE1BQU0sS0FBS0MsRUFBTCxDQUFRQyxVQUFSLENBQW1CLElBQW5CLENBQVY7QUFDQSxZQUFJYyxRQUFRLEtBQUs1QixLQUFMLENBQVdVLEdBQVgsQ0FBZSxPQUFmLENBQVo7QUFDQSxZQUFJbUIsV0FBVyxLQUFLN0IsS0FBTCxDQUFXVSxHQUFYLENBQWUsVUFBZixDQUFmO0FBQ0EsWUFBSWdCLFFBQVEsS0FBSzFCLEtBQUwsQ0FBV1UsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLFlBQUlpQixTQUFTLEtBQUszQixLQUFMLENBQVdVLEdBQVgsQ0FBZSxRQUFmLENBQWI7QUFDQUUsWUFBSUcsV0FBSixHQUFrQixLQUFLZixLQUFMLENBQVdVLEdBQVgsQ0FBZSxzQkFBZixDQUFsQjtBQUNBRSxZQUFJSSxTQUFKO0FBQ0EsYUFBSyxJQUFJYyxJQUFJLENBQWIsRUFBZ0JBLElBQUlKLEtBQXBCLEVBQTJCSSxHQUEzQixFQUFnQztBQUM1QmxCLGdCQUFJbUIsTUFBSixDQUFXRixTQUFTWCxDQUFULEdBQWFZLElBQUlGLEtBQWpCLEdBQXlCLEdBQXBDLEVBQXlDQyxTQUFTVixDQUFULEdBQWEsR0FBdEQ7QUFDQVAsZ0JBQUlvQixNQUFKLENBQVdILFNBQVNYLENBQVQsR0FBYVksSUFBSUYsS0FBakIsR0FBeUIsR0FBcEMsRUFBeUNDLFNBQVNWLENBQVQsR0FBYVEsU0FBU0MsS0FBdEIsR0FBOEIsR0FBdkU7QUFDSDtBQUNELGFBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJTixNQUFwQixFQUE0Qk0sR0FBNUIsRUFBaUM7QUFDN0JyQixnQkFBSW1CLE1BQUosQ0FBV0YsU0FBU1gsQ0FBVCxHQUFhLEdBQXhCLEVBQTZCVyxTQUFTVixDQUFULEdBQWFjLElBQUlMLEtBQWpCLEdBQXlCLEdBQXREO0FBQ0FoQixnQkFBSW9CLE1BQUosQ0FBV0gsU0FBU1gsQ0FBVCxHQUFhUSxRQUFRRSxLQUFyQixHQUE2QixHQUF4QyxFQUE2Q0MsU0FBU1YsQ0FBVCxHQUFhYyxJQUFJTCxLQUFqQixHQUF5QixHQUF0RTtBQUNIO0FBQ0RoQixZQUFJUSxNQUFKO0FBQ0FSLFlBQUlTLFNBQUo7QUFDQVQsWUFBSUksU0FBSjtBQUNBSixZQUFJRyxXQUFKLEdBQWtCLEtBQUtmLEtBQUwsQ0FBV1UsR0FBWCxDQUFlLHdCQUFmLENBQWxCO0FBQ0FFLFlBQUltQixNQUFKLENBQVdGLFNBQVNYLENBQVQsR0FBYWdCLEtBQUtDLEtBQUwsQ0FBV1QsUUFBUSxDQUFuQixJQUF3QkUsS0FBckMsR0FBNkMsR0FBeEQsRUFBNkRDLFNBQVNWLENBQVQsR0FBYSxHQUExRTtBQUNBUCxZQUFJb0IsTUFBSixDQUFXSCxTQUFTWCxDQUFULEdBQWFnQixLQUFLQyxLQUFMLENBQVdULFFBQVEsQ0FBbkIsSUFBd0JFLEtBQXJDLEdBQTZDLEdBQXhELEVBQTZEQyxTQUFTVixDQUFULEdBQWFRLFNBQVNDLEtBQXRCLEdBQThCLEdBQTNGO0FBQ0FoQixZQUFJbUIsTUFBSixDQUFXRixTQUFTWCxDQUFULEdBQWEsR0FBeEIsRUFBNkJXLFNBQVNWLENBQVQsR0FBYWUsS0FBS0MsS0FBTCxDQUFXUixTQUFTLENBQXBCLElBQXlCQyxLQUF0QyxHQUE4QyxHQUEzRTtBQUNBaEIsWUFBSW9CLE1BQUosQ0FBV0gsU0FBU1gsQ0FBVCxHQUFhUSxRQUFRRSxLQUFyQixHQUE2QixHQUF4QyxFQUE2Q0MsU0FBU1YsQ0FBVCxHQUFhZSxLQUFLQyxLQUFMLENBQVdSLFNBQVMsQ0FBcEIsSUFBeUJDLEtBQXRDLEdBQThDLEdBQTNGO0FBQ0FoQixZQUFJUSxNQUFKO0FBQ0FSLFlBQUlTLFNBQUo7QUFDSCxLQTFEaUM7O0FBMkRsQ2YsZ0JBQVksb0JBQVNELENBQVQsRUFBVztBQUNuQixhQUFLRyxXQUFMO0FBQ0EsWUFBSXFCLFdBQVcsS0FBSzdCLEtBQUwsQ0FBV1UsR0FBWCxDQUFlLFVBQWYsQ0FBZjtBQUNBLFlBQUlrQixRQUFRLEtBQUs1QixLQUFMLENBQVdVLEdBQVgsQ0FBZSxPQUFmLENBQVo7QUFDQSxZQUFJRSxNQUFNLEtBQUtDLEVBQUwsQ0FBUUMsVUFBUixDQUFtQixJQUFuQixDQUFWO0FBQ0FGLFlBQUl3QixTQUFKLEdBQWdCL0IsRUFBRWdDLEtBQWxCO0FBQ0F6QixZQUFJSSxTQUFKO0FBQ0FKLFlBQUkwQixRQUFKLENBQWFULFNBQVNYLENBQVQsR0FBYWIsRUFBRWEsQ0FBRixHQUFLVSxLQUEvQixFQUF1Q0MsU0FBU1YsQ0FBVCxHQUFhZCxFQUFFYyxDQUFGLEdBQU1TLEtBQTFELEVBQWlFdkIsRUFBRWtDLENBQUYsR0FBTVgsS0FBdkUsRUFBOEV2QixFQUFFbUMsQ0FBRixHQUFNWixLQUFwRjtBQUNBaEIsWUFBSVEsTUFBSjtBQUNBUixZQUFJUyxTQUFKO0FBQ0EsYUFBS1osYUFBTDtBQUNBLFlBQUksS0FBS1QsS0FBTCxDQUFXVSxHQUFYLENBQWUsZUFBZixDQUFKLEVBQXFDO0FBQ2pDLGlCQUFLQyxhQUFMO0FBQ0g7QUFDSixLQXpFaUM7QUEwRWxDSixjQUFVLGtCQUFTRixDQUFULEVBQVk7QUFDbEIsYUFBS0csV0FBTDtBQUNBLFlBQUlxQixXQUFXLEtBQUs3QixLQUFMLENBQVdVLEdBQVgsQ0FBZSxVQUFmLENBQWY7QUFDQSxZQUFJa0IsUUFBUSxLQUFLNUIsS0FBTCxDQUFXVSxHQUFYLENBQWUsT0FBZixDQUFaO0FBQ0EsWUFBSUUsTUFBTSxLQUFLQyxFQUFMLENBQVFDLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBVjs7QUFFQTtBQUNBRixZQUFJSSxTQUFKO0FBQ0FKLFlBQUl3QixTQUFKLEdBQWdCL0IsRUFBRWdDLEtBQWxCO0FBQ0E7QUFDQUksZ0NBQWNDLFFBQWQsQ0FBdUJyQyxFQUFFc0MsS0FBekIsRUFBZ0N0QyxFQUFFdUMsR0FBbEMsRUFBdUNDLE9BQXZDLENBQStDLFVBQUNDLE1BQUQsRUFBWTtBQUN2RGxDLGdCQUFJMEIsUUFBSixDQUFhVCxTQUFTWCxDQUFULEdBQWE0QixPQUFPNUIsQ0FBUCxHQUFXVSxLQUFyQyxFQUE0Q0MsU0FBU1YsQ0FBVCxHQUFhMkIsT0FBTzNCLENBQVAsR0FBV1MsS0FBcEUsRUFBMkVBLEtBQTNFLEVBQWtGQSxLQUFsRjtBQUNILFNBRkQ7QUFHQWhCLFlBQUlTLFNBQUo7O0FBRUEsWUFBSSxLQUFLckIsS0FBTCxDQUFXVSxHQUFYLENBQWUsZUFBZixDQUFKLEVBQXFDO0FBQ2pDLGlCQUFLQyxhQUFMO0FBQ0g7QUFDSjtBQTVGaUMsQ0FBbkIsQ0FBbkI7O2tCQStGZW5CLFUiLCJmaWxlIjoiSGVscENhbnZhcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXNMYXllciBmcm9tIFwiLi9DYW52YXNMYXllclwiO1xuaW1wb3J0IEhlbHBGdW5jdGlvbnMgZnJvbSBcIi4uLy4uL0hlbHBGdW5jdGlvbnNcIjtcblxuY29uc3QgSGVscENhbnZhcyA9IENhbnZhc0xheWVyLmV4dGVuZCh7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBDYW52YXNMYXllci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6ZHJhd0hlbHBMaW5lcycsIHRoaXMuY2FudmFzUmVkcmF3KTtcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcInJlZHJhd0hlbHBDYW52YXNcIiwgKCkgPT4gdGhpcy5jYW52YXNSZWRyYXcoKSk7XG4gICAgICAgIEFwcC5ldmVudHMub24oXCJkcmF3SGVscFNxdWFyZVwiLCAoZSkgPT4gdGhpcy5kcmF3U3F1YXJlKGUpKTtcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcImRyYXdIZWxwTGluZVwiLCAoZSkgPT4gdGhpcy5kcmF3TGluZShlKSk7XG4gICAgfSxcbiAgICBjYW52YXNSZWRyYXc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhckNhbnZhcygpO1xuICAgICAgICB0aGlzLmRyYXdPdXRsaW5pbmcoKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KFwiZHJhd0hlbHBMaW5lc1wiKSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3SGVscExpbmVzKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRyYXdPdXRsaW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuZWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLm1vZGVsLmdldChcImhpZ2hsaWdodEhlbHBMaW5lQ29sb3JcIik7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QodGhpcy5tb2RlbC5nZXQoXCJwb3NpdGlvblwiKS54ICsgMC41LCB0aGlzLm1vZGVsLmdldChcInBvc2l0aW9uXCIpLnkgKyAwLjUsIHRoaXMubW9kZWwuZ2V0KFwid2lkdGhcIikgKiB0aGlzLm1vZGVsLmdldChcInNjYWxlXCIpLCB0aGlzLm1vZGVsLmdldChcImhlaWdodFwiKSAqIHRoaXMubW9kZWwuZ2V0KFwic2NhbGVcIikpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9LFxuICAgIGNsZWFyQ2FudmFzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjID0gdGhpcy5lbDtcbiAgICAgICAgbGV0IGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjQ7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLiRlbC53aWR0aCgpLCB0aGlzLiRlbC5oZWlnaHQoKSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH0sXG4gICAgZHJhd0hlbHBMaW5lcygpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuZWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLm1vZGVsLmdldChcInNjYWxlXCIpO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm1vZGVsLmdldChcInBvc2l0aW9uXCIpO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLm1vZGVsLmdldChcIndpZHRoXCIpO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tb2RlbC5nZXQoXCJoZWlnaHRcIik7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMubW9kZWwuZ2V0KFwiZGVmYXVsdEhlbHBMaW5lQ29sb3JcIik7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHBvc2l0aW9uLnggKyBpICogc2NhbGUgKyAwLjUsIHBvc2l0aW9uLnkgKyAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyhwb3NpdGlvbi54ICsgaSAqIHNjYWxlICsgMC41LCBwb3NpdGlvbi55ICsgaGVpZ2h0ICogc2NhbGUgKyAwLjUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9zaXRpb24ueCArIDAuNSwgcG9zaXRpb24ueSArIGogKiBzY2FsZSArIDAuNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHBvc2l0aW9uLnggKyB3aWR0aCAqIHNjYWxlICsgMC41LCBwb3NpdGlvbi55ICsgaiAqIHNjYWxlICsgMC41KTtcbiAgICAgICAgfVxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLm1vZGVsLmdldChcImhpZ2hsaWdodEhlbHBMaW5lQ29sb3JcIik7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9zaXRpb24ueCArIE1hdGguZmxvb3Iod2lkdGggLyAyKSAqIHNjYWxlICsgMC41LCBwb3NpdGlvbi55ICsgMC41KTtcbiAgICAgICAgY3R4LmxpbmVUbyhwb3NpdGlvbi54ICsgTWF0aC5mbG9vcih3aWR0aCAvIDIpICogc2NhbGUgKyAwLjUsIHBvc2l0aW9uLnkgKyBoZWlnaHQgKiBzY2FsZSArIDAuNSk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9zaXRpb24ueCArIDAuNSwgcG9zaXRpb24ueSArIE1hdGguZmxvb3IoaGVpZ2h0IC8gMikgKiBzY2FsZSArIDAuNSk7XG4gICAgICAgIGN0eC5saW5lVG8ocG9zaXRpb24ueCArIHdpZHRoICogc2NhbGUgKyAwLjUsIHBvc2l0aW9uLnkgKyBNYXRoLmZsb29yKGhlaWdodCAvIDIpICogc2NhbGUgKyAwLjUpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9LFxuICAgIGRyYXdTcXVhcmU6IGZ1bmN0aW9uKGUpe1xuICAgICAgICB0aGlzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMubW9kZWwuZ2V0KFwicG9zaXRpb25cIik7XG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMubW9kZWwuZ2V0KFwic2NhbGVcIik7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmVsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGUuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHBvc2l0aW9uLnggKyBlLngqIHNjYWxlLCAgcG9zaXRpb24ueSArIGUueSAqIHNjYWxlLCBlLncgKiBzY2FsZSwgZS5oICogc2NhbGUpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5kcmF3T3V0bGluaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldChcImRyYXdIZWxwTGluZXNcIikpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0hlbHBMaW5lcygpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkcmF3TGluZTogZnVuY3Rpb24oZSkge1xuICAgICAgICB0aGlzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMubW9kZWwuZ2V0KFwicG9zaXRpb25cIik7XG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMubW9kZWwuZ2V0KFwic2NhbGVcIik7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmVsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBCcmVzZW5oYW0ncyBsaW5lIGFsZ29yaXRobVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBlLmNvbG9yO1xuICAgICAgICAvLyBjYWxsIGhlbHBmdW5jdGlvbiB0byBnZXQgYXJyYXkgb2YgXG4gICAgICAgIEhlbHBGdW5jdGlvbnMucGxvdExpbmUoZS5zdGFydCwgZS5lbmQpLmZvckVhY2goKHZlY3RvcikgPT4ge1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHBvc2l0aW9uLnggKyB2ZWN0b3IueCAqIHNjYWxlLCBwb3NpdGlvbi55ICsgdmVjdG9yLnkgKiBzY2FsZSwgc2NhbGUsIHNjYWxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoXCJkcmF3SGVscExpbmVzXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdIZWxwTGluZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwQ2FudmFzO1xuIl19

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _DataStreamHandler = __webpack_require__(330);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	var _ChatInput = __webpack_require__(338);

	var _ChatInput2 = _interopRequireDefault(_ChatInput);

	var _SendButton = __webpack_require__(339);

	var _SendButton2 = _interopRequireDefault(_SendButton);

	var _Messages = __webpack_require__(340);

	var _Messages2 = _interopRequireDefault(_Messages);

	var _backbone = __webpack_require__(333);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jaGF0L0NoYXQuanMiXSwibmFtZXMiOlsiQ2hhdCIsIlZpZXciLCJleHRlbmQiLCJpbml0aWFsaXplIiwiQXBwIiwiZXZlbnRzIiwib24iLCJzZW5kTWVzc2FnZSIsInRleHRJbnB1dCIsIkNoYXRJbnB1dCIsImVsIiwiU2VuZEJ1dHRvbiIsIm1lc3NhZ2VzIiwiTWVzc2FnZXNEaXNwbGF5IiwidGV4dCIsInBvcERhdGEiLCJEYXRhU3RyZWFtSGFuZGxlciIsImhhbmRsZU1lc3NhZ2UiLCJ0eXBlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBLElBQU1BLE9BQU9DLGVBQUtDLE1BQUwsQ0FBWTtBQUNyQkMsZ0JBQVksc0JBQVU7QUFBQTs7QUFDbEJDLFlBQUlDLE1BQUosQ0FBV0MsRUFBWCxDQUFjLGFBQWQsRUFBNkI7QUFBQSxtQkFBTSxNQUFLQyxXQUFMLEVBQU47QUFBQSxTQUE3Qjs7QUFFQSxhQUFLQyxTQUFMLEdBQWlCLElBQUlDLG1CQUFKLENBQWMsRUFBQ0MsSUFBSSxZQUFMLEVBQWQsQ0FBakI7QUFDQSxZQUFJQyxvQkFBSixDQUFlLEVBQUNELElBQUksY0FBTCxFQUFmO0FBQ0EsYUFBS0UsUUFBTCxHQUFnQixJQUFJQyxrQkFBSixDQUFvQixFQUFDSCxJQUFJLFdBQUwsRUFBcEIsQ0FBaEI7QUFDSCxLQVBvQjtBQVFyQkgsaUJBQWEsdUJBQVc7QUFDcEIsWUFBSU8sT0FBTyxLQUFLTixTQUFMLENBQWVPLE9BQWYsRUFBWDtBQUNBLFlBQUlELFFBQVEsRUFBWixFQUFnQjtBQUNaRSx3Q0FBa0JULFdBQWxCLENBQThCTyxJQUE5QjtBQUNBLGlCQUFLRixRQUFMLENBQWNLLGFBQWQsQ0FBNEIsRUFBQ0MsTUFBTSxNQUFQLEVBQWVDLFNBQVNMLElBQXhCLEVBQTVCO0FBQ0g7QUFDSjtBQWRvQixDQUFaLENBQWI7a0JBZ0JlZCxJIiwiZmlsZSI6IkNoYXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YVN0cmVhbUhhbmRsZXIgZnJvbSBcIi4uLy4uL0RhdGFTdHJlYW1IYW5kbGVyXCI7XG5pbXBvcnQgQ2hhdElucHV0IGZyb20gXCIuL0NoYXRJbnB1dFwiO1xuaW1wb3J0IFNlbmRCdXR0b24gZnJvbSBcIi4vU2VuZEJ1dHRvblwiO1xuaW1wb3J0IE1lc3NhZ2VzRGlzcGxheSBmcm9tIFwiLi9NZXNzYWdlc1wiO1xuaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcblxuXG5jb25zdCBDaGF0ID0gVmlldy5leHRlbmQoe1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIEFwcC5ldmVudHMub24oJ3NlbmRNZXNzYWdlJywgKCkgPT4gdGhpcy5zZW5kTWVzc2FnZSgpKTtcblxuICAgICAgICB0aGlzLnRleHRJbnB1dCA9IG5ldyBDaGF0SW5wdXQoe2VsOiAnI2NoYXRJbnB1dCd9KTtcbiAgICAgICAgbmV3IFNlbmRCdXR0b24oe2VsOiAnI3NlbmRNZXNzYWdlJ30pO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IE1lc3NhZ2VzRGlzcGxheSh7ZWw6ICcjbWVzc2FnZXMnfSk7XG4gICAgfSxcbiAgICBzZW5kTWVzc2FnZSA6ZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy50ZXh0SW5wdXQucG9wRGF0YSgpO1xuICAgICAgICBpZiAodGV4dCAhPSAnJykge1xuICAgICAgICAgICAgRGF0YVN0cmVhbUhhbmRsZXIuc2VuZE1lc3NhZ2UodGV4dCk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLmhhbmRsZU1lc3NhZ2Uoe3R5cGU6ICdzZWxmJywgbWVzc2FnZTogdGV4dH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBDaGF0OyJdfQ==

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jaGF0L0NoYXRJbnB1dC5qcyJdLCJuYW1lcyI6WyJDaGF0SW5wdXQiLCJWaWV3IiwiZXh0ZW5kIiwiZXZlbnRzIiwia2V5SGFuZGxlciIsImUiLCJrZXlDb2RlIiwiQXBwIiwidHJpZ2dlciIsInBvcERhdGEiLCJ0bXAiLCIkZWwiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLFlBQVlDLGVBQUtDLE1BQUwsQ0FBWTtBQUMxQkMsWUFBUTtBQUNKLG1CQUFXO0FBRFAsS0FEa0I7QUFJMUJDLGdCQUFZLG9CQUFTQyxDQUFULEVBQVc7QUFDbkIsWUFBR0EsRUFBRUMsT0FBRixJQUFhLEVBQWhCLEVBQW1CO0FBQ2ZDLGdCQUFJSixNQUFKLENBQVdLLE9BQVgsQ0FBbUIsYUFBbkI7QUFDSDtBQUNKLEtBUnlCO0FBUzFCQyxhQUFTLG1CQUFVO0FBQ2YsWUFBSUMsTUFBTSxLQUFLQyxHQUFMLENBQVNDLEdBQVQsRUFBVjtBQUNBLGFBQUtELEdBQUwsQ0FBU0MsR0FBVCxDQUFhLEVBQWI7QUFDQSxlQUFPRixHQUFQO0FBQ0g7QUFieUIsQ0FBWixDQUFsQjtrQkFlZVYsUyIsImZpbGUiOiJDaGF0SW5wdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xuXG5jb25zdCBDaGF0SW5wdXQgPSBWaWV3LmV4dGVuZCh7XG4gICAgZXZlbnRzOiB7XG4gICAgICAgICdrZXlkb3duJzogJ2tleUhhbmRsZXInXG4gICAgfSxcbiAgICBrZXlIYW5kbGVyOiBmdW5jdGlvbihlKXtcbiAgICAgICAgaWYoZS5rZXlDb2RlID09IDEzKXtcbiAgICAgICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcignc2VuZE1lc3NhZ2UnKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcG9wRGF0YTogZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuJGVsLnZhbCgpO1xuICAgICAgICB0aGlzLiRlbC52YWwoJycpO1xuICAgICAgICByZXR1cm4gdG1wO1xuICAgIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgQ2hhdElucHV0XG5cbiJdfQ==

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var SendButton = _backbone.View.extend({
	    events: {
	        'click': 'clickHandler'
	    },
	    clickHandler: function clickHandler() {
	        App.events.trigger('sendMessage');
	    }
	});
	exports.default = SendButton;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jaGF0L1NlbmRCdXR0b24uanMiXSwibmFtZXMiOlsiU2VuZEJ1dHRvbiIsIlZpZXciLCJleHRlbmQiLCJldmVudHMiLCJjbGlja0hhbmRsZXIiLCJBcHAiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhQyxlQUFLQyxNQUFMLENBQVk7QUFDM0JDLFlBQVE7QUFDSixpQkFBUztBQURMLEtBRG1CO0FBSTNCQyxrQkFBYyx3QkFBVTtBQUNwQkMsWUFBSUYsTUFBSixDQUFXRyxPQUFYLENBQW1CLGFBQW5CO0FBQ0g7QUFOMEIsQ0FBWixDQUFuQjtrQkFRZU4sVSIsImZpbGUiOiJTZW5kQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcblxuY29uc3QgU2VuZEJ1dHRvbiA9IFZpZXcuZXh0ZW5kKHtcbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrJzogJ2NsaWNrSGFuZGxlcidcbiAgICB9LFxuICAgIGNsaWNrSGFuZGxlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKCdzZW5kTWVzc2FnZScpO1xuICAgIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgU2VuZEJ1dHRvblxuIl19

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var _underscore = __webpack_require__(334);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jaGF0L01lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwiVmlldyIsImV4dGVuZCIsImluaXRpYWxpemUiLCJBcHAiLCJldmVudHMiLCJvbiIsImUiLCJoYW5kbGVNZXNzYWdlIiwiXyIsInRlbXBsYXRlU2V0dGluZ3MiLCJ2YXJpYWJsZSIsInRlbXBsYXRlIiwiJCIsImh0bWwiLCIkZWwiLCJhcHBlbmQiLCJlbCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInR5cGUiLCJBdWRpbyIsInBsYXkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxlQUFLQyxNQUFMLENBQVk7QUFDekJDLGdCQUFZLHNCQUFVO0FBQUE7O0FBQ2xCQyxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxpQkFBZCxFQUFpQyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0MsYUFBTCxDQUFtQkQsQ0FBbkIsQ0FBUDtBQUFBLFNBQWpDO0FBQ0FFLDZCQUFFQyxnQkFBRixDQUFtQkMsUUFBbkIsR0FBOEIsTUFBOUI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCSCxxQkFBRUcsUUFBRixDQUFXQyxFQUFFLG1CQUFGLEVBQXVCQyxJQUF2QixFQUFYLENBQWhCO0FBQ0gsS0FMd0I7QUFNekJOLGlCQU55Qix5QkFNWEQsQ0FOVyxFQU1SO0FBQ2IsYUFBS1EsR0FBTCxDQUFTQyxNQUFULENBQWdCLEtBQUtKLFFBQUwsQ0FBY0wsQ0FBZCxDQUFoQjs7QUFFQSxhQUFLVSxFQUFMLENBQVFDLFNBQVIsR0FBb0IsS0FBS0QsRUFBTCxDQUFRRSxZQUE1QjtBQUNBLFlBQUdaLEVBQUVhLElBQUYsSUFBVSxNQUFiLEVBQW9CO0FBQ2hCLGdCQUFJQyxLQUFKLENBQVUsb0VBQVYsRUFBZ0ZDLElBQWhGO0FBQ0g7QUFDSjtBQWJ3QixDQUFaLENBQWpCO2tCQWVldEIsUSIsImZpbGUiOiJNZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vmlld30gZnJvbSBcImJhY2tib25lXCI7XG5pbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xuXG5jb25zdCBNZXNzYWdlcyA9IFZpZXcuZXh0ZW5kKHtcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpe1xuICAgICAgICBBcHAuZXZlbnRzLm9uKCdyZWNlaXZlZE1lc3NhZ2UnLCAoZSkgPT4gdGhpcy5oYW5kbGVNZXNzYWdlKGUpKTtcbiAgICAgICAgXy50ZW1wbGF0ZVNldHRpbmdzLnZhcmlhYmxlID0gXCJkYXRhXCI7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoJyNtZXNzYWdlLXRlbXBsYXRlJykuaHRtbCgpKTtcbiAgICB9LFxuICAgIGhhbmRsZU1lc3NhZ2UoZSkge1xuICAgICAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy50ZW1wbGF0ZShlKSk7XG5cbiAgICAgICAgdGhpcy5lbC5zY3JvbGxUb3AgPSB0aGlzLmVsLnNjcm9sbEhlaWdodDtcbiAgICAgICAgaWYoZS50eXBlICE9ICdzZWxmJyl7XG4gICAgICAgICAgICBuZXcgQXVkaW8oJ2h0dHBzOi8vd3d3LmZyZWVzb3VuZC5vcmcvL2RhdGEvcHJldmlld3MvMzQxLzM0MTg2OF82MTE0NzIxLWxxLm9nZycpLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXNcblxuIl19

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Pencil = __webpack_require__(342);

	var _Pencil2 = _interopRequireDefault(_Pencil);

	var _Rectangle = __webpack_require__(344);

	var _Rectangle2 = _interopRequireDefault(_Rectangle);

	var _Eraser = __webpack_require__(345);

	var _Eraser2 = _interopRequireDefault(_Eraser);

	var _MoveOnly = __webpack_require__(346);

	var _MoveOnly2 = _interopRequireDefault(_MoveOnly);

	var _Mirror = __webpack_require__(347);

	var _Mirror2 = _interopRequireDefault(_Mirror);

	var _Bucket = __webpack_require__(348);

	var _Bucket2 = _interopRequireDefault(_Bucket);

	var _backbone = __webpack_require__(333);

	var _underscore = __webpack_require__(334);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Line = __webpack_require__(349);

	var _Line2 = _interopRequireDefault(_Line);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Toolbar = _backbone.View.extend({
	    events: {
	        "click .tool": "handleClick"
	    },
	    initialize: function initialize() {
	        var tools = this.model.get('tools');

	        tools.push(new _Pencil2.default(this.model));
	        tools.push(new _Line2.default(this.model));
	        tools.push(new _Rectangle2.default(this.model));
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvdG9vbHMvVG9vbGJhci5qcyJdLCJuYW1lcyI6WyJUb29sYmFyIiwiVmlldyIsImV4dGVuZCIsImV2ZW50cyIsImluaXRpYWxpemUiLCJ0b29scyIsIm1vZGVsIiwiZ2V0IiwicHVzaCIsIlBlbmNpbCIsIkxpbmUiLCJSZWN0YW5nbGUiLCJFcmFzZXIiLCJNb3ZlT25seSIsIk1pcnJvciIsIkJ1Y2tldCIsInNldCIsIl8iLCJ0ZW1wbGF0ZVNldHRpbmdzIiwidmFyaWFibGUiLCJ0ZW1wbGF0ZSIsIiQiLCJodG1sIiwiJGVsIiwic2VsZWN0VG9vbCIsImhhbmRsZUNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJlbCIsInJlbW92ZUNsYXNzIiwiZXEiLCJhZGRDbGFzcyIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVVDLGVBQUtDLE1BQUwsQ0FBWTtBQUN4QkMsWUFBUTtBQUNKLHVCQUFlO0FBRFgsS0FEZ0I7QUFJeEJDLGdCQUFZLHNCQUFZO0FBQ3BCLFlBQUlDLFFBQVEsS0FBS0MsS0FBTCxDQUFXQyxHQUFYLENBQWUsT0FBZixDQUFaOztBQUVBRixjQUFNRyxJQUFOLENBQVcsSUFBSUMsZ0JBQUosQ0FBVyxLQUFLSCxLQUFoQixDQUFYO0FBQ0FELGNBQU1HLElBQU4sQ0FBVyxJQUFJRSxjQUFKLENBQVMsS0FBS0osS0FBZCxDQUFYO0FBQ0FELGNBQU1HLElBQU4sQ0FBVyxJQUFJRyxtQkFBSixDQUFjLEtBQUtMLEtBQW5CLENBQVg7QUFDQUQsY0FBTUcsSUFBTixDQUFXLElBQUlJLGdCQUFKLENBQVcsS0FBS04sS0FBaEIsQ0FBWDtBQUNBRCxjQUFNRyxJQUFOLENBQVcsSUFBSUssa0JBQUosQ0FBYSxLQUFLUCxLQUFsQixDQUFYO0FBQ0FELGNBQU1HLElBQU4sQ0FBVyxJQUFJTSxnQkFBSixDQUFXLEtBQUtSLEtBQWhCLENBQVg7QUFDQUQsY0FBTUcsSUFBTixDQUFXLElBQUlPLGdCQUFKLENBQVcsS0FBS1QsS0FBaEIsQ0FBWDs7QUFFQSxhQUFLQSxLQUFMLENBQVdVLEdBQVgsQ0FBZSxPQUFmLEVBQXdCWCxLQUF4Qjs7QUFFQVksNkJBQUVDLGdCQUFGLENBQW1CQyxRQUFuQixHQUE4QixPQUE5QjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0JILHFCQUFFRyxRQUFGLENBQVdDLEVBQUUsbUJBQUYsRUFBdUJDLElBQXZCLEVBQVgsQ0FBaEI7QUFDQSxhQUFLQyxHQUFMLENBQVNELElBQVQsQ0FBYyxLQUFLRixRQUFMLENBQWMsS0FBS2QsS0FBTCxDQUFXQyxHQUFYLENBQWUsT0FBZixDQUFkLENBQWQ7O0FBRUEsYUFBS2lCLFVBQUwsQ0FBZ0IsQ0FBaEI7QUFDSCxLQXRCdUI7QUF1QnhCQyxpQkFBYSxxQkFBVUMsQ0FBVixFQUFhO0FBQ3RCLGFBQUtGLFVBQUwsQ0FBZ0JFLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUF4QztBQUNILEtBekJ1QjtBQTBCeEJMLGdCQUFZLG9CQUFVSyxLQUFWLEVBQWlCO0FBQ3pCLGFBQUt2QixLQUFMLENBQVdVLEdBQVgsQ0FBZSxjQUFmLEVBQStCLEtBQUtWLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLE9BQWYsRUFBd0JzQixLQUF4QixDQUEvQjtBQUNBUixVQUFFLE9BQUYsRUFBVyxLQUFLUyxFQUFoQixFQUFvQkMsV0FBcEIsQ0FBZ0MsZUFBaEM7QUFDQVYsVUFBRSxPQUFGLEVBQVcsS0FBS1MsRUFBaEIsRUFBb0JFLEVBQXBCLENBQXVCSCxLQUF2QixFQUE4QkksUUFBOUIsQ0FBdUMsZUFBdkM7QUFDQSxhQUFLM0IsS0FBTCxDQUFXQyxHQUFYLENBQWUsY0FBZixFQUErQjJCLE9BQS9CO0FBQ0g7QUEvQnVCLENBQVosQ0FBaEI7a0JBaUNlbEMsTyIsImZpbGUiOiJUb29sYmFyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi9QZW5jaWxcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRXJhc2VyIGZyb20gXCIuL0VyYXNlclwiO1xuaW1wb3J0IE1vdmVPbmx5IGZyb20gXCIuL01vdmVPbmx5XCI7XG5pbXBvcnQgTWlycm9yIGZyb20gXCIuL01pcnJvclwiO1xuaW1wb3J0IEJ1Y2tldCBmcm9tIFwiLi9CdWNrZXRcIjtcbmltcG9ydCB7Vmlld30gZnJvbSBcImJhY2tib25lXCI7XG5pbXBvcnQgXyBmcm9tIFwidW5kZXJzY29yZVwiO1xuaW1wb3J0IExpbmUgZnJvbSBcIi4vTGluZVwiO1xuXG5jb25zdCBUb29sYmFyID0gVmlldy5leHRlbmQoe1xuICAgIGV2ZW50czoge1xuICAgICAgICBcImNsaWNrIC50b29sXCI6IFwiaGFuZGxlQ2xpY2tcIlxuICAgIH0sXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdG9vbHMgPSB0aGlzLm1vZGVsLmdldCgndG9vbHMnKTtcblxuICAgICAgICB0b29scy5wdXNoKG5ldyBQZW5jaWwodGhpcy5tb2RlbCkpO1xuICAgICAgICB0b29scy5wdXNoKG5ldyBMaW5lKHRoaXMubW9kZWwpKTtcbiAgICAgICAgdG9vbHMucHVzaChuZXcgUmVjdGFuZ2xlKHRoaXMubW9kZWwpKTtcbiAgICAgICAgdG9vbHMucHVzaChuZXcgRXJhc2VyKHRoaXMubW9kZWwpKTtcbiAgICAgICAgdG9vbHMucHVzaChuZXcgTW92ZU9ubHkodGhpcy5tb2RlbCkpO1xuICAgICAgICB0b29scy5wdXNoKG5ldyBNaXJyb3IodGhpcy5tb2RlbCkpO1xuICAgICAgICB0b29scy5wdXNoKG5ldyBCdWNrZXQodGhpcy5tb2RlbCkpO1xuXG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCd0b29scycsIHRvb2xzKTtcblxuICAgICAgICBfLnRlbXBsYXRlU2V0dGluZ3MudmFyaWFibGUgPSBcInRvb2xzXCI7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBfLnRlbXBsYXRlKCQoJyN0b29sYmFyLXRlbXBsYXRlJykuaHRtbCgpKTtcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMubW9kZWwuZ2V0KFwidG9vbHNcIikpKTtcblxuICAgICAgICB0aGlzLnNlbGVjdFRvb2woMCk7XG4gICAgfSxcbiAgICBoYW5kbGVDbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RUb29sKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICB9LFxuICAgIHNlbGVjdFRvb2w6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgnc2VsZWN0ZWRUb29sJywgdGhpcy5tb2RlbC5nZXQoJ3Rvb2xzJylbaW5kZXhdKTtcbiAgICAgICAgJCgnLnRvb2wnLCB0aGlzLmVsKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQtdG9vbCcpO1xuICAgICAgICAkKCcudG9vbCcsIHRoaXMuZWwpLmVxKGluZGV4KS5hZGRDbGFzcygnc2VsZWN0ZWQtdG9vbCcpO1xuICAgICAgICB0aGlzLm1vZGVsLmdldCgnc2VsZWN0ZWRUb29sJykub25DbGljaygpO1xuICAgIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgVG9vbGJhcjsiXX0=

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(343);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvdG9vbHMvUGVuY2lsLmpzIl0sIm5hbWVzIjpbIlBlbmNpbCIsIm1vZGVsIiwibmFtZSIsImUiLCJpbmRpY2VzIiwiaW5wdXRUb1BpeGVsSW5kZXgiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBpeGVscyIsImdldCIsInNlbGVjdGVkQ29sb3IiLCJ4IiwieSIsIkFwcCIsImV2ZW50cyIsInRyaWdnZXIiLCJjb2xvciIsIlRvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLG9IQUNWQSxLQURVOztBQUVoQixjQUFLQyxJQUFMLEdBQVksUUFBWjtBQUZnQjtBQUduQjs7OztvQ0FDWUMsQyxFQUFHO0FBQ1osZ0JBQUlDLFVBQVUsS0FBS0gsS0FBTCxDQUFXSSxpQkFBWCxDQUE2QkYsRUFBRUcsT0FBL0IsRUFBd0NILEVBQUVJLE9BQTFDLENBQWQ7QUFDQSxnQkFBSUMsU0FBUyxLQUFLUCxLQUFMLENBQVdRLEdBQVgsQ0FBZSxRQUFmLENBQWI7QUFDQSxnQkFBSUMsZ0JBQWdCLEtBQUtULEtBQUwsQ0FBV1EsR0FBWCxDQUFlLGVBQWYsQ0FBcEI7QUFDQSxnQkFBSUwsT0FBSixFQUFhO0FBQ1Qsb0JBQUlJLE9BQU9KLFFBQVFPLENBQWYsRUFBa0JQLFFBQVFRLENBQTFCLEtBQWdDRixhQUFwQyxFQUFtRDtBQUMvQ0csd0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixrQkFBbkIsRUFBdUMsQ0FBQztBQUNwQ0osMkJBQUdQLFFBQVFPLENBRHlCO0FBRXBDQywyQkFBR1IsUUFBUVEsQ0FGeUI7QUFHcENJLCtCQUFPTjtBQUg2QixxQkFBRCxDQUF2QztBQUtIO0FBQ0o7QUFDSjs7OztFQWxCZ0JPLGM7O2tCQW9CTmpCLE0iLCJmaWxlIjoiUGVuY2lsLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvb2wgZnJvbSBcIi4vVG9vbFwiO1xuXG5jbGFzcyBQZW5jaWwgZXh0ZW5kcyBUb29se1xuICAgIGNvbnN0cnVjdG9yIChtb2RlbCkge1xuICAgICAgICBzdXBlcihtb2RlbCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdQZW5jaWwnO1xuICAgIH1cbiAgICBkcmFnSGFuZGxlciAoZSkge1xuICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMubW9kZWwuaW5wdXRUb1BpeGVsSW5kZXgoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICBsZXQgcGl4ZWxzID0gdGhpcy5tb2RlbC5nZXQoXCJwaXhlbHNcIik7XG4gICAgICAgIGxldCBzZWxlY3RlZENvbG9yID0gdGhpcy5tb2RlbC5nZXQoXCJzZWxlY3RlZENvbG9yXCIpO1xuICAgICAgICBpZiAoaW5kaWNlcykge1xuICAgICAgICAgICAgaWYgKHBpeGVsc1tpbmRpY2VzLnhdW2luZGljZXMueV0gIT0gc2VsZWN0ZWRDb2xvcikge1xuICAgICAgICAgICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcInRvb2xVcGRhdGVQaXhlbHNcIiwgW3tcbiAgICAgICAgICAgICAgICAgICAgeDogaW5kaWNlcy54LFxuICAgICAgICAgICAgICAgICAgICB5OiBpbmRpY2VzLnksXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBzZWxlY3RlZENvbG9yXG4gICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGVuY2lsOyJdfQ==

/***/ }),
/* 343 */
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvdG9vbHMvVG9vbC5qcyJdLCJuYW1lcyI6WyJUb29sIiwibW9kZWwiLCJlIiwiZHJhZ0hhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSTtBQUNGLGtCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7Ozs7Z0NBQ09DLEMsRUFBRyxDQUNWOzs7b0NBQ1dBLEMsRUFBRSxDQUViOzs7eUNBQ2dCQSxDLEVBQUU7QUFDZixpQkFBS0MsV0FBTCxDQUFpQkQsQ0FBakI7QUFDSDs7O3VDQUNjQSxDLEVBQUUsQ0FFaEI7Ozt5Q0FDZ0JBLEMsRUFBRSxDQUVsQjs7Ozs7O2tCQUVVRixJIiwiZmlsZSI6IlRvb2wuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb29se1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsKXtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIH1cbiAgICBvbkNsaWNrKGUpIHtcbiAgICB9O1xuICAgIGRyYWdIYW5kbGVyKGUpe1xuXG4gICAgfTtcbiAgICBtb3VzZURvd25IYW5kbGVyKGUpe1xuICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKGUpO1xuICAgIH07XG4gICAgbW91c2VVcEhhbmRsZXIoZSl7XG5cbiAgICB9O1xuICAgIG1vdXNlTW92ZUhhbmRsZXIoZSl7XG5cbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgVG9vbDsiXX0=

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(343);

	var _Tool3 = _interopRequireDefault(_Tool2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rectangle = function (_Tool) {
	    _inherits(Rectangle, _Tool);

	    function Rectangle(model) {
	        _classCallCheck(this, Rectangle);

	        var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, model));

	        _this.name = 'Rectangle';
	        _this.isMouseDown = false;
	        _this.startIndices = null;
	        return _this;
	    }

	    _createClass(Rectangle, [{
	        key: "mouseDownHandler",
	        value: function mouseDownHandler(e) {
	            this.startIndices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	        }
	    }, {
	        key: "mouseUpHandler",
	        value: function mouseUpHandler(e) {
	            var indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	            var selectedColor = this.model.get("selectedColor");
	            if (indices && this.startIndices) {
	                var minX = Math.min(indices.x, this.startIndices.x);
	                var maxX = Math.max(indices.x, this.startIndices.x);
	                var minY = Math.min(indices.y, this.startIndices.y);
	                var maxY = Math.max(indices.y, this.startIndices.y);

	                var newPixels = [];
	                for (var y = minY; y < maxY; y++) {
	                    for (var x = minX; x < maxX; x++) {
	                        newPixels.push({ x: x, y: y, color: selectedColor });
	                    }
	                }
	                App.events.trigger("toolUpdatePixels", newPixels);
	            }
	            this.startIndices = null;
	            App.events.trigger("redrawHelpCanvas");
	        }
	    }, {
	        key: "dragHandler",
	        value: function dragHandler(e) {
	            var indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	            if (indices && this.startIndices) {
	                var minX = Math.min(indices.x, this.startIndices.x);
	                var maxX = Math.max(indices.x, this.startIndices.x);
	                var minY = Math.min(indices.y, this.startIndices.y);
	                var maxY = Math.max(indices.y, this.startIndices.y);

	                App.events.trigger("drawHelpSquare", {
	                    x: minX,
	                    y: minY,
	                    w: maxX - minX,
	                    h: maxY - minY,
	                    color: this.model.get("highLightColor")
	                });
	            }
	        }
	    }]);

	    return Rectangle;
	}(_Tool3.default);

	exports.default = Rectangle;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvdG9vbHMvUmVjdGFuZ2xlLmpzIl0sIm5hbWVzIjpbIlJlY3RhbmdsZSIsIm1vZGVsIiwibmFtZSIsImlzTW91c2VEb3duIiwic3RhcnRJbmRpY2VzIiwiZSIsImlucHV0VG9QaXhlbEluZGV4Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJpbmRpY2VzIiwic2VsZWN0ZWRDb2xvciIsImdldCIsIm1pblgiLCJNYXRoIiwibWluIiwieCIsIm1heFgiLCJtYXgiLCJtaW5ZIiwieSIsIm1heFkiLCJuZXdQaXhlbHMiLCJwdXNoIiwiY29sb3IiLCJBcHAiLCJldmVudHMiLCJ0cmlnZ2VyIiwidyIsImgiLCJUb29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsUzs7O0FBQ0YsdUJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSwwSEFDVkEsS0FEVTs7QUFFaEIsY0FBS0MsSUFBTCxHQUFZLFdBQVo7QUFDQSxjQUFLQyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsY0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUpnQjtBQUtuQjs7Ozt5Q0FDZ0JDLEMsRUFBRztBQUNoQixpQkFBS0QsWUFBTCxHQUFvQixLQUFLSCxLQUFMLENBQVdLLGlCQUFYLENBQTZCRCxFQUFFRSxPQUEvQixFQUF3Q0YsRUFBRUcsT0FBMUMsQ0FBcEI7QUFDSDs7O3VDQUNjSCxDLEVBQUc7QUFDZCxnQkFBSUksVUFBVSxLQUFLUixLQUFMLENBQVdLLGlCQUFYLENBQTZCRCxFQUFFRSxPQUEvQixFQUF3Q0YsRUFBRUcsT0FBMUMsQ0FBZDtBQUNBLGdCQUFJRSxnQkFBZ0IsS0FBS1QsS0FBTCxDQUFXVSxHQUFYLENBQWUsZUFBZixDQUFwQjtBQUNBLGdCQUFJRixXQUFXLEtBQUtMLFlBQXBCLEVBQWtDO0FBQzlCLG9CQUFJUSxPQUFPQyxLQUFLQyxHQUFMLENBQVNMLFFBQVFNLENBQWpCLEVBQW9CLEtBQUtYLFlBQUwsQ0FBa0JXLENBQXRDLENBQVg7QUFDQSxvQkFBSUMsT0FBT0gsS0FBS0ksR0FBTCxDQUFTUixRQUFRTSxDQUFqQixFQUFvQixLQUFLWCxZQUFMLENBQWtCVyxDQUF0QyxDQUFYO0FBQ0Esb0JBQUlHLE9BQU9MLEtBQUtDLEdBQUwsQ0FBU0wsUUFBUVUsQ0FBakIsRUFBb0IsS0FBS2YsWUFBTCxDQUFrQmUsQ0FBdEMsQ0FBWDtBQUNBLG9CQUFJQyxPQUFPUCxLQUFLSSxHQUFMLENBQVNSLFFBQVFVLENBQWpCLEVBQW9CLEtBQUtmLFlBQUwsQ0FBa0JlLENBQXRDLENBQVg7O0FBRUEsb0JBQUlFLFlBQVksRUFBaEI7QUFDQSxxQkFBSyxJQUFJRixJQUFJRCxJQUFiLEVBQW1CQyxJQUFJQyxJQUF2QixFQUE2QkQsR0FBN0IsRUFBa0M7QUFDOUIseUJBQUssSUFBSUosSUFBSUgsSUFBYixFQUFtQkcsSUFBSUMsSUFBdkIsRUFBNkJELEdBQTdCLEVBQWtDO0FBQzlCTSxrQ0FBVUMsSUFBVixDQUFlLEVBQUNQLEdBQUdBLENBQUosRUFBT0ksR0FBR0EsQ0FBVixFQUFhSSxPQUFPYixhQUFwQixFQUFmO0FBQ0g7QUFDSjtBQUNEYyxvQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLGtCQUFuQixFQUF1Q0wsU0FBdkM7QUFDSDtBQUNELGlCQUFLakIsWUFBTCxHQUFvQixJQUFwQjtBQUNBb0IsZ0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixrQkFBbkI7QUFDSDs7O29DQUNZckIsQyxFQUFHO0FBQ1osZ0JBQUlJLFVBQVUsS0FBS1IsS0FBTCxDQUFXSyxpQkFBWCxDQUE2QkQsRUFBRUUsT0FBL0IsRUFBd0NGLEVBQUVHLE9BQTFDLENBQWQ7QUFDQSxnQkFBSUMsV0FBVyxLQUFLTCxZQUFwQixFQUFrQztBQUM5QixvQkFBSVEsT0FBT0MsS0FBS0MsR0FBTCxDQUFTTCxRQUFRTSxDQUFqQixFQUFvQixLQUFLWCxZQUFMLENBQWtCVyxDQUF0QyxDQUFYO0FBQ0Esb0JBQUlDLE9BQU9ILEtBQUtJLEdBQUwsQ0FBU1IsUUFBUU0sQ0FBakIsRUFBb0IsS0FBS1gsWUFBTCxDQUFrQlcsQ0FBdEMsQ0FBWDtBQUNBLG9CQUFJRyxPQUFPTCxLQUFLQyxHQUFMLENBQVNMLFFBQVFVLENBQWpCLEVBQW9CLEtBQUtmLFlBQUwsQ0FBa0JlLENBQXRDLENBQVg7QUFDQSxvQkFBSUMsT0FBT1AsS0FBS0ksR0FBTCxDQUFTUixRQUFRVSxDQUFqQixFQUFvQixLQUFLZixZQUFMLENBQWtCZSxDQUF0QyxDQUFYOztBQUVBSyxvQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLGdCQUFuQixFQUFxQztBQUNqQ1gsdUJBQUdILElBRDhCO0FBRWpDTyx1QkFBR0QsSUFGOEI7QUFHakNTLHVCQUFHWCxPQUFPSixJQUh1QjtBQUlqQ2dCLHVCQUFHUixPQUFPRixJQUp1QjtBQUtqQ0ssMkJBQU8sS0FBS3RCLEtBQUwsQ0FBV1UsR0FBWCxDQUFlLGdCQUFmO0FBTDBCLGlCQUFyQztBQU9IO0FBQ0o7Ozs7RUE5Q21Ca0IsYzs7a0JBZ0RUN0IsUyIsImZpbGUiOiJSZWN0YW5nbGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9vbCBmcm9tIFwiLi9Ub29sXCI7XG5cbmNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFRvb2x7XG4gICAgY29uc3RydWN0b3IgKG1vZGVsKSB7XG4gICAgICAgIHN1cGVyKG1vZGVsKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1JlY3RhbmdsZSc7XG4gICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydEluZGljZXMgPSBudWxsO1xuICAgIH1cbiAgICBtb3VzZURvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgdGhpcy5zdGFydEluZGljZXMgPSB0aGlzLm1vZGVsLmlucHV0VG9QaXhlbEluZGV4KGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcbiAgICB9XG4gICAgbW91c2VVcEhhbmRsZXIoZSkge1xuICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMubW9kZWwuaW5wdXRUb1BpeGVsSW5kZXgoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRDb2xvciA9IHRoaXMubW9kZWwuZ2V0KFwic2VsZWN0ZWRDb2xvclwiKTtcbiAgICAgICAgaWYgKGluZGljZXMgJiYgdGhpcy5zdGFydEluZGljZXMpIHtcbiAgICAgICAgICAgIGxldCBtaW5YID0gTWF0aC5taW4oaW5kaWNlcy54LCB0aGlzLnN0YXJ0SW5kaWNlcy54KTtcbiAgICAgICAgICAgIGxldCBtYXhYID0gTWF0aC5tYXgoaW5kaWNlcy54LCB0aGlzLnN0YXJ0SW5kaWNlcy54KTtcbiAgICAgICAgICAgIGxldCBtaW5ZID0gTWF0aC5taW4oaW5kaWNlcy55LCB0aGlzLnN0YXJ0SW5kaWNlcy55KTtcbiAgICAgICAgICAgIGxldCBtYXhZID0gTWF0aC5tYXgoaW5kaWNlcy55LCB0aGlzLnN0YXJ0SW5kaWNlcy55KTtcblxuICAgICAgICAgICAgbGV0IG5ld1BpeGVscyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPCBtYXhZOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8IG1heFg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBuZXdQaXhlbHMucHVzaCh7eDogeCwgeTogeSwgY29sb3I6IHNlbGVjdGVkQ29sb3J9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJ0b29sVXBkYXRlUGl4ZWxzXCIsIG5ld1BpeGVscyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGFydEluZGljZXMgPSBudWxsO1xuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJyZWRyYXdIZWxwQ2FudmFzXCIpO1xuICAgIH1cbiAgICBkcmFnSGFuZGxlciAoZSkge1xuICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMubW9kZWwuaW5wdXRUb1BpeGVsSW5kZXgoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICBpZiAoaW5kaWNlcyAmJiB0aGlzLnN0YXJ0SW5kaWNlcykge1xuICAgICAgICAgICAgbGV0IG1pblggPSBNYXRoLm1pbihpbmRpY2VzLngsIHRoaXMuc3RhcnRJbmRpY2VzLngpO1xuICAgICAgICAgICAgbGV0IG1heFggPSBNYXRoLm1heChpbmRpY2VzLngsIHRoaXMuc3RhcnRJbmRpY2VzLngpO1xuICAgICAgICAgICAgbGV0IG1pblkgPSBNYXRoLm1pbihpbmRpY2VzLnksIHRoaXMuc3RhcnRJbmRpY2VzLnkpO1xuICAgICAgICAgICAgbGV0IG1heFkgPSBNYXRoLm1heChpbmRpY2VzLnksIHRoaXMuc3RhcnRJbmRpY2VzLnkpO1xuXG4gICAgICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJkcmF3SGVscFNxdWFyZVwiLCB7XG4gICAgICAgICAgICAgICAgeDogbWluWCxcbiAgICAgICAgICAgICAgICB5OiBtaW5ZLFxuICAgICAgICAgICAgICAgIHc6IG1heFggLSBtaW5YLFxuICAgICAgICAgICAgICAgIGg6IG1heFkgLSBtaW5ZLFxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLm1vZGVsLmdldChcImhpZ2hMaWdodENvbG9yXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTsiXX0=

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(343);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvdG9vbHMvRXJhc2VyLmpzIl0sIm5hbWVzIjpbIkVyYXNlciIsIm1vZGVsIiwibmFtZSIsImUiLCJpbmRpY2VzIiwiaW5wdXRUb1BpeGVsSW5kZXgiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBpeGVscyIsImdldCIsIngiLCJ5IiwiQXBwIiwiZXZlbnRzIiwidHJpZ2dlciIsImNvbG9yIiwiVG9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLG9CQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0hBQ1JBLEtBRFE7O0FBRWQsY0FBS0MsSUFBTCxHQUFZLFFBQVo7QUFGYztBQUdqQjs7OztvQ0FDV0MsQyxFQUFHO0FBQ1gsZ0JBQUlDLFVBQVUsS0FBS0gsS0FBTCxDQUFXSSxpQkFBWCxDQUE2QkYsRUFBRUcsT0FBL0IsRUFBd0NILEVBQUVJLE9BQTFDLENBQWQ7QUFDQSxnQkFBSUMsU0FBUyxLQUFLUCxLQUFMLENBQVdRLEdBQVgsQ0FBZSxRQUFmLENBQWI7QUFDQSxnQkFBSUwsT0FBSixFQUFhO0FBQ1Qsb0JBQUdJLE9BQU9KLFFBQVFNLENBQWYsRUFBa0JOLFFBQVFPLENBQTFCLEtBQWdDLENBQW5DLEVBQ0FDLElBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixrQkFBbkIsRUFBdUMsQ0FBQyxFQUFDSixHQUFHTixRQUFRTSxDQUFaLEVBQWVDLEdBQUdQLFFBQVFPLENBQTFCLEVBQTZCSSxPQUFPLENBQXBDLEVBQUQsQ0FBdkM7QUFDSDtBQUNKOzs7O0VBWmdCQyxjOztrQkFjTmhCLE0iLCJmaWxlIjoiRXJhc2VyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvb2wgZnJvbSBcIi4vVG9vbFwiO1xuXG5jbGFzcyBFcmFzZXIgZXh0ZW5kcyBUb29se1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsKXtcbiAgICAgICAgc3VwZXIobW9kZWwpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRXJhc2VyJztcbiAgICB9O1xuICAgIGRyYWdIYW5kbGVyKGUpIHtcbiAgICAgICAgbGV0IGluZGljZXMgPSB0aGlzLm1vZGVsLmlucHV0VG9QaXhlbEluZGV4KGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcbiAgICAgICAgbGV0IHBpeGVscyA9IHRoaXMubW9kZWwuZ2V0KFwicGl4ZWxzXCIpO1xuICAgICAgICBpZiAoaW5kaWNlcykge1xuICAgICAgICAgICAgaWYocGl4ZWxzW2luZGljZXMueF1baW5kaWNlcy55XSAhPSAwKVxuICAgICAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwidG9vbFVwZGF0ZVBpeGVsc1wiLCBbe3g6IGluZGljZXMueCwgeTogaW5kaWNlcy55LCBjb2xvcjogMH1dKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEVyYXNlcjsiXX0=

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(343);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvdG9vbHMvTW92ZU9ubHkuanMiXSwibmFtZXMiOlsiTW92ZU9ubHkiLCJtb2RlbCIsIm5hbWUiLCJlIiwicmVwb3NpdGlvbiIsIm9mZnNldFgiLCJnZXQiLCJ4Iiwib2Zmc2V0WSIsInkiLCJBcHAiLCJldmVudHMiLCJ0cmlnZ2VyIiwiVG9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsSUFBTCxHQUFZLE1BQVo7QUFGZTtBQUdsQjs7OztvQ0FDWUMsQyxFQUFHO0FBQ1osaUJBQUtGLEtBQUwsQ0FBV0csVUFBWCxDQUFzQkQsRUFBRUUsT0FBRixHQUFZLEtBQUtKLEtBQUwsQ0FBV0ssR0FBWCxDQUFlLGNBQWYsRUFBK0JDLENBQWpFLEVBQW9FSixFQUFFSyxPQUFGLEdBQVksS0FBS1AsS0FBTCxDQUFXSyxHQUFYLENBQWUsY0FBZixFQUErQkcsQ0FBL0c7QUFDQUMsZ0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixjQUFuQjtBQUNIOzs7O0VBUmtCQyxjOztrQkFVUmIsUSIsImZpbGUiOiJNb3ZlT25seS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb29sIGZyb20gXCIuL1Rvb2xcIjtcblxuY2xhc3MgTW92ZU9ubHkgZXh0ZW5kcyBUb29se1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgICAgIHN1cGVyKG1vZGVsKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ01vdmUnO1xuICAgIH1cbiAgICBkcmFnSGFuZGxlciAoZSkge1xuICAgICAgICB0aGlzLm1vZGVsLnJlcG9zaXRpb24oZS5vZmZzZXRYIC0gdGhpcy5tb2RlbC5nZXQoXCJsYXN0TW91c2VQb3NcIikueCwgZS5vZmZzZXRZIC0gdGhpcy5tb2RlbC5nZXQoXCJsYXN0TW91c2VQb3NcIikueSk7XG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcImNhbnZhc1JlZHJhd1wiKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBNb3ZlT25seTsiXX0=

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(343);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvdG9vbHMvTWlycm9yLmpzIl0sIm5hbWVzIjpbIk1pcnJvciIsIm1vZGVsIiwibmFtZSIsImUiLCJpbmRpY2VzIiwiaW5wdXRUb1BpeGVsSW5kZXgiLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm1pcnJvcmVkSGFsZiIsIngiLCJnZXQiLCJwaXhlbHMiLCJ3aWR0aCIsImhlaWdodCIsIm5ld1BpeGVscyIsImkiLCJqIiwicHVzaCIsInkiLCJjb2xvciIsIkFwcCIsImV2ZW50cyIsInRyaWdnZXIiLCJ3IiwiaCIsIlRvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNUQSxLQURTOztBQUVmLGNBQUtDLElBQUwsR0FBWSxRQUFaO0FBRmU7QUFHbEI7Ozs7eUNBQ2lCQyxDLEVBQUc7QUFDakIsZ0JBQUlDLFVBQVUsS0FBS0gsS0FBTCxDQUFXSSxpQkFBWCxDQUE2QkYsRUFBRUcsT0FBL0IsRUFBd0NILEVBQUVJLE9BQTFDLENBQWQ7QUFDQSxnQkFBSUgsT0FBSixFQUFhO0FBQ1Qsb0JBQUlJLGVBQWdCSixRQUFRSyxDQUFSLElBQWMsS0FBS1IsS0FBTCxDQUFXUyxHQUFYLENBQWUsT0FBZixJQUEwQixDQUF6QyxHQUErQyxDQUEvQyxHQUFtRCxDQUF0RTtBQUNBLG9CQUFJQyxTQUFTLEtBQUtWLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFFBQWYsQ0FBYjtBQUNBLG9CQUFJRSxRQUFRLEtBQUtYLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLE9BQWYsQ0FBWjtBQUNBLG9CQUFJRyxTQUFTLEtBQUtaLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFFBQWYsQ0FBYjtBQUNBLG9CQUFJSSxZQUFZLEVBQWhCOztBQUVBLHFCQUFLLElBQUlDLElBQUtILFFBQVEsQ0FBVCxHQUFjSixZQUEzQixFQUF5Q08sSUFBTUgsUUFBTSxDQUFQLEdBQWFBLFFBQU0sQ0FBUCxHQUFZSixZQUF0RSxFQUFxRk8sR0FBckYsRUFBMEY7QUFDdEYseUJBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxNQUFwQixFQUE0QkcsR0FBNUIsRUFBaUM7QUFDN0IsNEJBQUlMLE9BQU9JLENBQVAsRUFBVUMsQ0FBVixLQUFnQixDQUFwQixFQUF1QjtBQUNuQkYsc0NBQVVHLElBQVYsQ0FBZSxFQUFDUixHQUFJRyxRQUFRRyxDQUFSLEdBQVUsQ0FBZixFQUFtQkcsR0FBR0YsQ0FBdEIsRUFBeUJHLE9BQU9SLE9BQU9JLENBQVAsRUFBVUMsQ0FBVixDQUFoQyxFQUFmO0FBQ0g7QUFDSjtBQUNKO0FBQ0RJLG9CQUFJQyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsa0JBQW5CLEVBQXVDUixTQUF2QztBQUNIO0FBQ0o7Ozt5Q0FDZ0JYLEMsRUFBRTtBQUNmLGdCQUFJQyxVQUFVLEtBQUtILEtBQUwsQ0FBV0ksaUJBQVgsQ0FBNkJGLEVBQUVHLE9BQS9CLEVBQXdDSCxFQUFFSSxPQUExQyxDQUFkO0FBQ0EsZ0JBQUlILE9BQUosRUFBYTtBQUNULG9CQUFJSSxlQUFnQkosUUFBUUssQ0FBUixJQUFjLEtBQUtSLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLE9BQWYsSUFBMEIsQ0FBekMsR0FBK0MsQ0FBL0MsR0FBbUQsQ0FBdEU7QUFDQVUsb0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixnQkFBbkIsRUFBcUM7QUFDakNiLHVCQUFFRCxnQkFBYyxLQUFLUCxLQUFMLENBQVdTLEdBQVgsQ0FBZSxPQUFmLElBQTBCLENBQXhDLENBRCtCO0FBRWpDUSx1QkFBRSxDQUYrQjtBQUdqQ0ssdUJBQUcsS0FBS3RCLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLE9BQWYsSUFBMEIsQ0FISTtBQUlqQ2MsdUJBQUcsS0FBS3ZCLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFFBQWYsQ0FKOEI7QUFLakNTLDJCQUFPLEtBQUtsQixLQUFMLENBQVdTLEdBQVgsQ0FBZSxnQkFBZjtBQUwwQixpQkFBckM7QUFPSCxhQVRELE1BU0s7QUFDRFUsb0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixrQkFBbkI7QUFDSDtBQUNKOzs7O0VBdENnQkcsYzs7a0JBd0NOekIsTSIsImZpbGUiOiJNaXJyb3IuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9vbCBmcm9tIFwiLi9Ub29sXCI7XG5cbmNsYXNzIE1pcnJvciBleHRlbmRzIFRvb2x7XG4gICAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICAgICAgc3VwZXIobW9kZWwpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnTWlycm9yJztcbiAgICB9XG4gICAgbW91c2VEb3duSGFuZGxlciAoZSkge1xuICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMubW9kZWwuaW5wdXRUb1BpeGVsSW5kZXgoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICBpZiAoaW5kaWNlcykge1xuICAgICAgICAgICAgbGV0IG1pcnJvcmVkSGFsZiA9IChpbmRpY2VzLnggPj0gKHRoaXMubW9kZWwuZ2V0KFwid2lkdGhcIikgLyAyKSkgPyAxIDogMDtcbiAgICAgICAgICAgIGxldCBwaXhlbHMgPSB0aGlzLm1vZGVsLmdldChcInBpeGVsc1wiKTtcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IHRoaXMubW9kZWwuZ2V0KFwid2lkdGhcIik7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tb2RlbC5nZXQoXCJoZWlnaHRcIik7XG4gICAgICAgICAgICBsZXQgbmV3UGl4ZWxzID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAod2lkdGggLyAyKSAqIG1pcnJvcmVkSGFsZjsgaSA8ICgod2lkdGgvMikgKyAod2lkdGgvMikgKiBtaXJyb3JlZEhhbGYpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaXhlbHNbaV1bal0gIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGl4ZWxzLnB1c2goe3g6ICh3aWR0aCAtIGktMSksIHk6IGosIGNvbG9yOiBwaXhlbHNbaV1bal19KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcInRvb2xVcGRhdGVQaXhlbHNcIiwgbmV3UGl4ZWxzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3VzZU1vdmVIYW5kbGVyKGUpe1xuICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMubW9kZWwuaW5wdXRUb1BpeGVsSW5kZXgoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICBpZiAoaW5kaWNlcykge1xuICAgICAgICAgICAgbGV0IG1pcnJvcmVkSGFsZiA9IChpbmRpY2VzLnggPj0gKHRoaXMubW9kZWwuZ2V0KFwid2lkdGhcIikgLyAyKSkgPyAxIDogMDtcbiAgICAgICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcImRyYXdIZWxwU3F1YXJlXCIsIHtcbiAgICAgICAgICAgICAgICB4Om1pcnJvcmVkSGFsZioodGhpcy5tb2RlbC5nZXQoXCJ3aWR0aFwiKSAvIDIpLFxuICAgICAgICAgICAgICAgIHk6MCxcbiAgICAgICAgICAgICAgICB3OiB0aGlzLm1vZGVsLmdldChcIndpZHRoXCIpIC8gMixcbiAgICAgICAgICAgICAgICBoOiB0aGlzLm1vZGVsLmdldChcImhlaWdodFwiKSxcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5tb2RlbC5nZXQoXCJoaWdoTGlnaHRDb2xvclwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwicmVkcmF3SGVscENhbnZhc1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1pcnJvcjsiXX0=

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(343);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvdG9vbHMvQnVja2V0LmpzIl0sIm5hbWVzIjpbIkJ1Y2tldCIsIm1vZGVsIiwibmFtZSIsIm5ld1BpeGVscyIsImUiLCJpbmRpY2VzIiwiaW5wdXRUb1BpeGVsSW5kZXgiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBpeGVscyIsImdldCIsImNoZWNrZWRQaXhlbHMiLCJjbGlja2VkQ29sb3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaSIsImoiLCJjaGVja1BpeGVsIiwiQXBwIiwiZXZlbnRzIiwidHJpZ2dlciIsImNoZWNrQ29sb3IiLCJwdXNoIiwiY29sb3IiLCJUb29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxvSEFDUkEsS0FEUTs7QUFFZCxjQUFLQyxJQUFMLEdBQVksUUFBWjtBQUNBLGNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFIYztBQUlqQjs7Ozt5Q0FDZ0JDLEMsRUFBRztBQUNoQixnQkFBSUMsVUFBVSxLQUFLSixLQUFMLENBQVdLLGlCQUFYLENBQTZCRixFQUFFRyxPQUEvQixFQUF3Q0gsRUFBRUksT0FBMUMsQ0FBZDtBQUNBLGdCQUFJSCxPQUFKLEVBQWE7QUFDVCxvQkFBSUksU0FBUyxLQUFLUixLQUFMLENBQVdTLEdBQVgsQ0FBZSxRQUFmLENBQWI7QUFDQSxxQkFBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLG9CQUFJQyxlQUFlSCxPQUFPSixRQUFRUSxDQUFmLEVBQWtCUixRQUFRUyxDQUExQixDQUFuQjs7QUFFQSxvQkFBSUMsUUFBUSxLQUFLZCxLQUFMLENBQVdTLEdBQVgsQ0FBZSxPQUFmLENBQVo7QUFDQSxvQkFBSU0sU0FBUyxLQUFLZixLQUFMLENBQVdTLEdBQVgsQ0FBZSxRQUFmLENBQWI7O0FBRUEscUJBQUksSUFBSU8sSUFBSSxDQUFaLEVBQWVBLElBQUlGLEtBQW5CLEVBQTBCRSxHQUExQixFQUErQjtBQUMzQix5QkFBS04sYUFBTCxDQUFtQk0sQ0FBbkIsSUFBd0IsRUFBeEI7QUFDQSx5QkFBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSUYsTUFBbkIsRUFBMkJFLEdBQTNCLEVBQStCO0FBQzNCLDZCQUFLUCxhQUFMLENBQW1CTSxDQUFuQixFQUFzQkMsQ0FBdEIsSUFBMkIsS0FBM0I7QUFDSDtBQUNKOztBQUVGLHFCQUFLQyxVQUFMLENBQWdCUCxZQUFoQixFQUE4QkgsTUFBOUIsRUFBc0NKLFFBQVFRLENBQTlDLEVBQWlEUixRQUFRUyxDQUF6RDs7QUFFQ00sb0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixrQkFBbkIsRUFBdUMsS0FBS25CLFNBQTVDO0FBQ0EscUJBQUtBLFNBQUwsR0FBaUIsRUFBakI7QUFDSDtBQUNKOzs7bUNBQ1VvQixVLEVBQVlkLE0sRUFBUUksQyxFQUFHQyxDLEVBQUU7QUFDaEMsZ0JBQUcsS0FBS0gsYUFBTCxDQUFtQkUsQ0FBbkIsRUFBc0JDLENBQXRCLENBQUgsRUFBNkI7O0FBRTdCLGdCQUFHTCxPQUFPSSxDQUFQLEVBQVVDLENBQVYsS0FBZ0JTLFVBQW5CLEVBQThCO0FBQzFCLHFCQUFLcEIsU0FBTCxDQUFlcUIsSUFBZixDQUFvQixFQUFDWCxHQUFHQSxDQUFKLEVBQU9DLEdBQUdBLENBQVYsRUFBYVcsT0FBTyxLQUFLeEIsS0FBTCxDQUFXUyxHQUFYLENBQWUsZUFBZixDQUFwQixFQUFwQjtBQUNBLHFCQUFLQyxhQUFMLENBQW1CRSxDQUFuQixFQUFzQkMsQ0FBdEIsSUFBMkIsSUFBM0I7QUFDQSxvQkFBR0QsSUFBRSxDQUFGLEdBQU0sS0FBS1osS0FBTCxDQUFXUyxHQUFYLENBQWUsT0FBZixDQUFOLElBQWdDLENBQUMsS0FBS0MsYUFBTCxDQUFtQkUsSUFBRSxDQUFyQixFQUF3QkMsQ0FBeEIsQ0FBcEMsRUFBZ0U7QUFDNUQseUJBQUtLLFVBQUwsQ0FBZ0JJLFVBQWhCLEVBQTRCZCxNQUE1QixFQUFvQ0ksSUFBRSxDQUF0QyxFQUF5Q0MsQ0FBekM7QUFDSDtBQUNELG9CQUFHRCxJQUFFLENBQUYsSUFBTyxDQUFQLElBQVksQ0FBQyxLQUFLRixhQUFMLENBQW1CRSxJQUFFLENBQXJCLEVBQXdCQyxDQUF4QixDQUFoQixFQUEyQztBQUN2Qyx5QkFBS0ssVUFBTCxDQUFnQkksVUFBaEIsRUFBNEJkLE1BQTVCLEVBQW9DSSxJQUFFLENBQXRDLEVBQXlDQyxDQUF6QztBQUNIO0FBQ0Qsb0JBQUdBLElBQUUsQ0FBRixHQUFNLEtBQUtiLEtBQUwsQ0FBV1MsR0FBWCxDQUFlLFFBQWYsQ0FBTixJQUFrQyxDQUFDLEtBQUtDLGFBQUwsQ0FBbUJFLENBQW5CLEVBQXNCQyxJQUFFLENBQXhCLENBQXRDLEVBQWlFO0FBQzdELHlCQUFLSyxVQUFMLENBQWdCSSxVQUFoQixFQUE0QmQsTUFBNUIsRUFBb0NJLENBQXBDLEVBQXVDQyxJQUFFLENBQXpDO0FBQ0g7QUFDRCxvQkFBR0EsSUFBRSxDQUFGLElBQU8sQ0FBUCxJQUFZLENBQUMsS0FBS0gsYUFBTCxDQUFtQkUsQ0FBbkIsRUFBc0JDLElBQUUsQ0FBeEIsQ0FBaEIsRUFBMkM7QUFDdkMseUJBQUtLLFVBQUwsQ0FBZ0JJLFVBQWhCLEVBQTRCZCxNQUE1QixFQUFvQ0ksQ0FBcEMsRUFBdUNDLElBQUUsQ0FBekM7QUFDSDtBQUNKO0FBQ0o7Ozs7RUFoRGdCWSxjOztrQkFrRE4xQixNIiwiZmlsZSI6IkJ1Y2tldC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb29sIGZyb20gXCIuL1Rvb2xcIjtcblxuY2xhc3MgQnVja2V0IGV4dGVuZHMgVG9vbHtcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCl7XG4gICAgICAgIHN1cGVyKG1vZGVsKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0J1Y2tldCc7XG4gICAgICAgIHRoaXMubmV3UGl4ZWxzID0gW107XG4gICAgfVxuICAgIG1vdXNlRG93bkhhbmRsZXIoZSkge1xuICAgICAgICBsZXQgaW5kaWNlcyA9IHRoaXMubW9kZWwuaW5wdXRUb1BpeGVsSW5kZXgoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICBpZiAoaW5kaWNlcykge1xuICAgICAgICAgICAgbGV0IHBpeGVscyA9IHRoaXMubW9kZWwuZ2V0KFwicGl4ZWxzXCIpO1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkUGl4ZWxzID0gW107XG4gICAgICAgICAgICBsZXQgY2xpY2tlZENvbG9yID0gcGl4ZWxzW2luZGljZXMueF1baW5kaWNlcy55XTtcblxuICAgICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5tb2RlbC5nZXQoXCJ3aWR0aFwiKTtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLm1vZGVsLmdldChcImhlaWdodFwiKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpICsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRQaXhlbHNbaV0gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRQaXhlbHNbaV1bal0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgdGhpcy5jaGVja1BpeGVsKGNsaWNrZWRDb2xvciwgcGl4ZWxzLCBpbmRpY2VzLngsIGluZGljZXMueSk7XG5cbiAgICAgICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcInRvb2xVcGRhdGVQaXhlbHNcIiwgdGhpcy5uZXdQaXhlbHMpO1xuICAgICAgICAgICAgdGhpcy5uZXdQaXhlbHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja1BpeGVsKGNoZWNrQ29sb3IsIHBpeGVscywgeCwgeSl7XG4gICAgICAgIGlmKHRoaXMuY2hlY2tlZFBpeGVsc1t4XVt5XSkgcmV0dXJuO1xuXG4gICAgICAgIGlmKHBpeGVsc1t4XVt5XSA9PSBjaGVja0NvbG9yKXtcbiAgICAgICAgICAgIHRoaXMubmV3UGl4ZWxzLnB1c2goe3g6IHgsIHk6IHksIGNvbG9yOiB0aGlzLm1vZGVsLmdldCgnc2VsZWN0ZWRDb2xvcicpfSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRQaXhlbHNbeF1beV0gPSB0cnVlO1xuICAgICAgICAgICAgaWYoeCsxIDwgdGhpcy5tb2RlbC5nZXQoXCJ3aWR0aFwiKSAmJiF0aGlzLmNoZWNrZWRQaXhlbHNbeCsxXVt5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQaXhlbChjaGVja0NvbG9yLCBwaXhlbHMsIHgrMSwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih4LTEgPj0gMCAmJiAhdGhpcy5jaGVja2VkUGl4ZWxzW3gtMV1beV0pe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQaXhlbChjaGVja0NvbG9yLCBwaXhlbHMsIHgtMSwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih5KzEgPCB0aGlzLm1vZGVsLmdldChcImhlaWdodFwiKSAmJiAhdGhpcy5jaGVja2VkUGl4ZWxzW3hdW3krMV0pe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQaXhlbChjaGVja0NvbG9yLCBwaXhlbHMsIHgsIHkrMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih5LTEgPj0gMCAmJiAhdGhpcy5jaGVja2VkUGl4ZWxzW3hdW3ktMV0pe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tQaXhlbChjaGVja0NvbG9yLCBwaXhlbHMsIHgsIHktMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCdWNrZXQ7Il19

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Tool2 = __webpack_require__(343);

	var _Tool3 = _interopRequireDefault(_Tool2);

	var _HelpFunctions = __webpack_require__(332);

	var _HelpFunctions2 = _interopRequireDefault(_HelpFunctions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Line = function (_Tool) {
	    _inherits(Line, _Tool);

	    function Line(model) {
	        _classCallCheck(this, Line);

	        var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, model));

	        _this.name = 'Line';
	        _this.isMouseDown = false;
	        _this.startIndices = null;
	        return _this;
	    }

	    _createClass(Line, [{
	        key: "mouseDownHandler",
	        value: function mouseDownHandler(e) {
	            this.startIndices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	        }
	    }, {
	        key: "mouseUpHandler",
	        value: function mouseUpHandler(e) {
	            var indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	            var selectedColor = this.model.get("selectedColor");
	            if (indices && this.startIndices) {
	                var newPixels = [];
	                _HelpFunctions2.default.plotLine(this.startIndices, indices).forEach(function (vector) {
	                    newPixels.push({ x: vector.x, y: vector.y, color: selectedColor });
	                });
	                App.events.trigger("toolUpdatePixels", newPixels);
	            }
	            this.startIndices = null;
	            App.events.trigger("redrawHelpCanvas");
	        }
	    }, {
	        key: "dragHandler",
	        value: function dragHandler(e) {
	            var indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
	            if (indices && this.startIndices) {
	                App.events.trigger("drawHelpLine", {
	                    start: { x: this.startIndices.x, y: this.startIndices.y },
	                    end: { x: indices.x, y: indices.y },
	                    color: this.model.get("highLightColor")
	                });
	            }
	        }
	    }]);

	    return Line;
	}(_Tool3.default);

	exports.default = Line;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvdG9vbHMvTGluZS5qcyJdLCJuYW1lcyI6WyJMaW5lIiwibW9kZWwiLCJuYW1lIiwiaXNNb3VzZURvd24iLCJzdGFydEluZGljZXMiLCJlIiwiaW5wdXRUb1BpeGVsSW5kZXgiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImluZGljZXMiLCJzZWxlY3RlZENvbG9yIiwiZ2V0IiwibmV3UGl4ZWxzIiwiSGVscEZ1bmN0aW9ucyIsInBsb3RMaW5lIiwiZm9yRWFjaCIsInZlY3RvciIsInB1c2giLCJ4IiwieSIsImNvbG9yIiwiQXBwIiwiZXZlbnRzIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwiVG9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsSTs7O0FBQ0Ysa0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxnSEFDVkEsS0FEVTs7QUFFaEIsY0FBS0MsSUFBTCxHQUFZLE1BQVo7QUFDQSxjQUFLQyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsY0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUpnQjtBQUtuQjs7Ozt5Q0FDZ0JDLEMsRUFBRztBQUNoQixpQkFBS0QsWUFBTCxHQUFvQixLQUFLSCxLQUFMLENBQVdLLGlCQUFYLENBQTZCRCxFQUFFRSxPQUEvQixFQUF3Q0YsRUFBRUcsT0FBMUMsQ0FBcEI7QUFDSDs7O3VDQUNjSCxDLEVBQUc7QUFDZCxnQkFBSUksVUFBVSxLQUFLUixLQUFMLENBQVdLLGlCQUFYLENBQTZCRCxFQUFFRSxPQUEvQixFQUF3Q0YsRUFBRUcsT0FBMUMsQ0FBZDtBQUNBLGdCQUFJRSxnQkFBZ0IsS0FBS1QsS0FBTCxDQUFXVSxHQUFYLENBQWUsZUFBZixDQUFwQjtBQUNBLGdCQUFJRixXQUFXLEtBQUtMLFlBQXBCLEVBQWtDO0FBQzlCLG9CQUFJUSxZQUFZLEVBQWhCO0FBQ0FDLHdDQUFjQyxRQUFkLENBQXVCLEtBQUtWLFlBQTVCLEVBQTBDSyxPQUExQyxFQUFtRE0sT0FBbkQsQ0FBMkQsVUFBQ0MsTUFBRCxFQUFZO0FBQ25FSiw4QkFBVUssSUFBVixDQUFlLEVBQUNDLEdBQUdGLE9BQU9FLENBQVgsRUFBY0MsR0FBR0gsT0FBT0csQ0FBeEIsRUFBMkJDLE9BQU9WLGFBQWxDLEVBQWY7QUFDSCxpQkFGRDtBQUdBVyxvQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLGtCQUFuQixFQUF1Q1gsU0FBdkM7QUFDSDtBQUNELGlCQUFLUixZQUFMLEdBQW9CLElBQXBCO0FBQ0FpQixnQkFBSUMsTUFBSixDQUFXQyxPQUFYLENBQW1CLGtCQUFuQjtBQUNIOzs7b0NBQ1lsQixDLEVBQUc7QUFDWixnQkFBSUksVUFBVSxLQUFLUixLQUFMLENBQVdLLGlCQUFYLENBQTZCRCxFQUFFRSxPQUEvQixFQUF3Q0YsRUFBRUcsT0FBMUMsQ0FBZDtBQUNBLGdCQUFJQyxXQUFXLEtBQUtMLFlBQXBCLEVBQWtDO0FBQzlCaUIsb0JBQUlDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQixjQUFuQixFQUFtQztBQUMvQkMsMkJBQU8sRUFBQ04sR0FBRyxLQUFLZCxZQUFMLENBQWtCYyxDQUF0QixFQUF5QkMsR0FBRyxLQUFLZixZQUFMLENBQWtCZSxDQUE5QyxFQUR3QjtBQUUvQk0seUJBQUssRUFBQ1AsR0FBR1QsUUFBUVMsQ0FBWixFQUFlQyxHQUFHVixRQUFRVSxDQUExQixFQUYwQjtBQUcvQkMsMkJBQU8sS0FBS25CLEtBQUwsQ0FBV1UsR0FBWCxDQUFlLGdCQUFmO0FBSHdCLGlCQUFuQztBQUtIO0FBQ0o7Ozs7RUFoQ2NlLGM7O2tCQWtDSjFCLEkiLCJmaWxlIjoiTGluZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb29sIGZyb20gXCIuL1Rvb2xcIjtcbmltcG9ydCBIZWxwRnVuY3Rpb25zIGZyb20gXCIuLi8uLi8uLi9IZWxwRnVuY3Rpb25zXCI7XG5cbmNsYXNzIExpbmUgZXh0ZW5kcyBUb29se1xuICAgIGNvbnN0cnVjdG9yIChtb2RlbCkge1xuICAgICAgICBzdXBlcihtb2RlbCk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdMaW5lJztcbiAgICAgICAgdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0SW5kaWNlcyA9IG51bGw7XG4gICAgfVxuICAgIG1vdXNlRG93bkhhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLnN0YXJ0SW5kaWNlcyA9IHRoaXMubW9kZWwuaW5wdXRUb1BpeGVsSW5kZXgoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgIH1cbiAgICBtb3VzZVVwSGFuZGxlcihlKSB7XG4gICAgICAgIGxldCBpbmRpY2VzID0gdGhpcy5tb2RlbC5pbnB1dFRvUGl4ZWxJbmRleChlLm9mZnNldFgsIGUub2Zmc2V0WSk7XG4gICAgICAgIGxldCBzZWxlY3RlZENvbG9yID0gdGhpcy5tb2RlbC5nZXQoXCJzZWxlY3RlZENvbG9yXCIpO1xuICAgICAgICBpZiAoaW5kaWNlcyAmJiB0aGlzLnN0YXJ0SW5kaWNlcykge1xuICAgICAgICAgICAgbGV0IG5ld1BpeGVscyA9IFtdOyBcbiAgICAgICAgICAgIEhlbHBGdW5jdGlvbnMucGxvdExpbmUodGhpcy5zdGFydEluZGljZXMsIGluZGljZXMpLmZvckVhY2goKHZlY3RvcikgPT4ge1xuICAgICAgICAgICAgICAgIG5ld1BpeGVscy5wdXNoKHt4OiB2ZWN0b3IueCwgeTogdmVjdG9yLnksIGNvbG9yOiBzZWxlY3RlZENvbG9yfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcInRvb2xVcGRhdGVQaXhlbHNcIiwgbmV3UGl4ZWxzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXJ0SW5kaWNlcyA9IG51bGw7XG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcInJlZHJhd0hlbHBDYW52YXNcIik7XG4gICAgfVxuICAgIGRyYWdIYW5kbGVyIChlKSB7XG4gICAgICAgIGxldCBpbmRpY2VzID0gdGhpcy5tb2RlbC5pbnB1dFRvUGl4ZWxJbmRleChlLm9mZnNldFgsIGUub2Zmc2V0WSk7XG4gICAgICAgIGlmIChpbmRpY2VzICYmIHRoaXMuc3RhcnRJbmRpY2VzKSB7XG4gICAgICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJkcmF3SGVscExpbmVcIiwge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiB7eDogdGhpcy5zdGFydEluZGljZXMueCwgeTogdGhpcy5zdGFydEluZGljZXMueX0sXG4gICAgICAgICAgICAgICAgZW5kOiB7eDogaW5kaWNlcy54LCB5OiBpbmRpY2VzLnl9LFxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLm1vZGVsLmdldChcImhpZ2hMaWdodENvbG9yXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExpbmU7Il19

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ColorSetting = __webpack_require__(351);

	var _ColorSetting2 = _interopRequireDefault(_ColorSetting);

	var _HelpLines = __webpack_require__(354);

	var _HelpLines2 = _interopRequireDefault(_HelpLines);

	var _DimensionSetting = __webpack_require__(355);

	var _DimensionSetting2 = _interopRequireDefault(_DimensionSetting);

	var _backbone = __webpack_require__(333);

	var _underscore = __webpack_require__(334);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvc2V0dGluZ3MvU2V0dGluZ01lbnUuanMiXSwibmFtZXMiOlsiU2V0dGluZ01lbnUiLCJWaWV3IiwiZXh0ZW5kIiwiZXZlbnRzIiwiaW5pdGlhbGl6ZSIsInNldHRpbmdzIiwicHVzaCIsIkhlbHBMaW5lcyIsIm1vZGVsIiwiQ29sb3JTZXR0aW5nIiwiXyIsInRlbXBsYXRlU2V0dGluZ3MiLCJ2YXJpYWJsZSIsInRlbXBsYXRlIiwiJCIsImh0bWwiLCIkZWwiLCJEaW1lbnNpb25TZXR0aW5nIiwiZWwiLCJ0b2dnbGVTZXR0aW5nIiwiaGFuZGxlQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImVxIiwidG9nZ2xlQ2xhc3MiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsY0FBY0MsZUFBS0MsTUFBTCxDQUFZO0FBQzVCQyxZQUFRO0FBQ0osMEJBQWtCO0FBRGQsS0FEb0I7QUFJNUJDLGdCQUFZLHNCQUFZO0FBQ3BCLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxhQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBSUMsbUJBQUosQ0FBYyxLQUFLQyxLQUFuQixDQUFuQjtBQUNBLGFBQUtILFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFJRyxzQkFBSixDQUFpQixLQUFLRCxLQUF0QixDQUFuQjs7QUFFQUUsNkJBQUVDLGdCQUFGLENBQW1CQyxRQUFuQixHQUE4QixVQUE5QjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0JILHFCQUFFRyxRQUFGLENBQVdDLEVBQUUsb0JBQUYsRUFBd0JDLElBQXhCLEVBQVgsQ0FBaEI7QUFDQSxhQUFLQyxHQUFMLENBQVNELElBQVQsQ0FBYyxLQUFLRixRQUFMLENBQWMsS0FBS1IsUUFBbkIsQ0FBZDs7QUFFQSxZQUFJWSwwQkFBSixDQUFxQixFQUFDVCxPQUFPLEtBQUtBLEtBQWIsRUFBb0JVLElBQUksUUFBeEIsRUFBckI7QUFDQSxZQUFJRCwwQkFBSixDQUFxQixFQUFDVCxPQUFPLEtBQUtBLEtBQWIsRUFBb0JVLElBQUksU0FBeEIsRUFBckI7O0FBRUEsYUFBS0MsYUFBTCxDQUFtQixDQUFuQjtBQUNILEtBakIyQjtBQWtCNUJDLGlCQUFhLHFCQUFVQyxDQUFWLEVBQWE7QUFDdEIsYUFBS0YsYUFBTCxDQUFtQkUsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQTNDO0FBQ0gsS0FwQjJCO0FBcUI1QkwsbUJBQWUsdUJBQVVLLEtBQVYsRUFBaUI7QUFDNUJWLFVBQUUsVUFBRixFQUFjLEtBQUtJLEVBQW5CLEVBQXVCTyxFQUF2QixDQUEwQkQsS0FBMUIsRUFBaUNFLFdBQWpDLENBQTZDLGVBQTdDO0FBQ0EsYUFBS3JCLFFBQUwsQ0FBY21CLEtBQWQsRUFBcUJHLE9BQXJCO0FBQ0g7QUF4QjJCLENBQVosQ0FBcEI7a0JBMEJlM0IsVyIsImZpbGUiOiJTZXR0aW5nTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2xvclNldHRpbmcgZnJvbSBcIi4vQ29sb3JTZXR0aW5nXCI7XG5pbXBvcnQgSGVscExpbmVzIGZyb20gXCIuL0hlbHBMaW5lc1wiO1xuaW1wb3J0IERpbWVuc2lvblNldHRpbmcgZnJvbSBcIi4vRGltZW5zaW9uU2V0dGluZ1wiO1xuaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcbmltcG9ydCBfIGZyb20gXCJ1bmRlcnNjb3JlXCI7XG5cbmNvbnN0IFNldHRpbmdNZW51ID0gVmlldy5leHRlbmQoe1xuICAgIGV2ZW50czoge1xuICAgICAgICBcImNsaWNrIC5zZXR0aW5nXCI6IFwiaGFuZGxlQ2xpY2tcIlxuICAgIH0sXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gW107XG4gICAgICAgIHRoaXMuc2V0dGluZ3MucHVzaChuZXcgSGVscExpbmVzKHRoaXMubW9kZWwpKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5wdXNoKG5ldyBDb2xvclNldHRpbmcodGhpcy5tb2RlbCkpO1xuXG4gICAgICAgIF8udGVtcGxhdGVTZXR0aW5ncy52YXJpYWJsZSA9IFwic2V0dGluZ3NcIjtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJCgnI3NldHRpbmdzLXRlbXBsYXRlJykuaHRtbCgpKTtcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMuc2V0dGluZ3MpKTtcblxuICAgICAgICBuZXcgRGltZW5zaW9uU2V0dGluZyh7bW9kZWw6IHRoaXMubW9kZWwsIGVsOiBcIiN3aWR0aFwifSk7XG4gICAgICAgIG5ldyBEaW1lbnNpb25TZXR0aW5nKHttb2RlbDogdGhpcy5tb2RlbCwgZWw6IFwiI2hlaWdodFwifSk7XG5cbiAgICAgICAgdGhpcy50b2dnbGVTZXR0aW5nKDApO1xuICAgIH0sXG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlU2V0dGluZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCk7XG4gICAgfSxcbiAgICB0b2dnbGVTZXR0aW5nOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgJCgnLnNldHRpbmcnLCB0aGlzLmVsKS5lcShpbmRleCkudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkLXRvb2wnKTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1tpbmRleF0ub25DbGljaygpO1xuICAgIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ01lbnU7Il19

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CanvasSetting2 = __webpack_require__(352);

	var _CanvasSetting3 = _interopRequireDefault(_CanvasSetting2);

	var _ColorSelector = __webpack_require__(353);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvc2V0dGluZ3MvQ29sb3JTZXR0aW5nLmpzIl0sIm5hbWVzIjpbIkNvbG9yU2V0dGluZyIsIm1vZGVsIiwibmFtZSIsIkNvbG9yU2VsZWN0b3IiLCJlbCIsImUiLCJBcHAiLCJldmVudHMiLCJ0cmlnZ2VyIiwiQ2FudmFzU2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsWTs7O0FBQ0YsMEJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxnSUFDUkEsS0FEUTs7QUFFZCxjQUFLQyxJQUFMLEdBQVksT0FBWjtBQUNBLFlBQUlDLHVCQUFKLENBQWtCLEVBQUNDLElBQUksZ0JBQUwsRUFBdUJILE9BQU8sTUFBS0EsS0FBbkMsRUFBbEI7QUFIYztBQUlqQjs7OztnQ0FDT0ksQyxFQUFFO0FBQ05DLGdCQUFJQyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIscUJBQW5CO0FBQ0g7Ozs7RUFSc0JDLHVCOztrQkFVWlQsWSIsImZpbGUiOiJDb2xvclNldHRpbmcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzU2V0dGluZyBmcm9tIFwiLi9DYW52YXNTZXR0aW5nXCI7XG5pbXBvcnQgQ29sb3JTZWxlY3RvciBmcm9tXCIuL0NvbG9yU2VsZWN0b3JcIjtcblxuY2xhc3MgQ29sb3JTZXR0aW5nIGV4dGVuZHMgQ2FudmFzU2V0dGluZ3tcbiAgICBjb25zdHJ1Y3Rvcihtb2RlbCl7XG4gICAgICAgIHN1cGVyKG1vZGVsKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0NvbG9yJztcbiAgICAgICAgbmV3IENvbG9yU2VsZWN0b3Ioe2VsOiAnI2NvbG9yU2VsZWN0b3InLCBtb2RlbDogdGhpcy5tb2RlbH0pO1xuICAgIH1cbiAgICBvbkNsaWNrKGUpe1xuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJ0b2dnbGVDb2xvclNlbGVjdG9yXCIpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbG9yU2V0dGluZztcbiJdfQ==

/***/ }),
/* 352 */
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvc2V0dGluZ3MvQ2FudmFzU2V0dGluZy5qcyJdLCJuYW1lcyI6WyJDYW52YXNTZXR0aW5nIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQU1BLGEsR0FDRix1QkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUNkLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNILEM7O2tCQUVVRCxhIiwiZmlsZSI6IkNhbnZhc1NldHRpbmcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYW52YXNTZXR0aW5ne1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsKXtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhbnZhc1NldHRpbmc7Il19

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var _HelpFunctions = __webpack_require__(332);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvc2V0dGluZ3MvQ29sb3JTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJDb2xvclNlbGVjdG9yIiwiVmlldyIsImV4dGVuZCIsImV2ZW50cyIsImluaXRpYWxpemUiLCJBcHAiLCJvbiIsInRvZ2dsZSIsInNlbGVjdENvbG9yQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCIkIiwiaGVpZ2h0IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImNzcyIsIm1vZGVsIiwiZ2V0IiwiJGVsIiwiY2xpY2tIYW5kbGVyIiwiZSIsInBpeGVsRGF0YSIsImdldEltYWdlRGF0YSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZGF0YSIsImhleENvbG9yIiwiSGVscEZ1bmN0aW9ucyIsInJnYlRvSGV4Iiwic2V0IiwiaG92ZXJIYW5kbGVyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsZUFBS0MsTUFBTCxDQUFZO0FBQzlCQyxZQUFRO0FBQ0oscUJBQWEsY0FEVDtBQUVKLHlCQUFpQjtBQUZiLEtBRHNCO0FBSzlCQyxnQkFBWSxzQkFBVTtBQUFBOztBQUNsQkMsWUFBSUYsTUFBSixDQUFXRyxFQUFYLENBQWMscUJBQWQsRUFBcUM7QUFBQSxtQkFBTSxNQUFLQyxNQUFMLEVBQU47QUFBQSxTQUFyQztBQUNBLGFBQUtDLGlCQUFMLEdBQXlCQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQXpCO0FBQ0EsYUFBS0YsaUJBQUwsQ0FBdUJHLEtBQXZCLEdBQStCLEtBQUtDLENBQUwsQ0FBTyxLQUFQLEVBQWNELEtBQWQsRUFBL0I7QUFDQSxhQUFLSCxpQkFBTCxDQUF1QkssTUFBdkIsR0FBZ0MsS0FBS0QsQ0FBTCxDQUFPLEtBQVAsRUFBY0MsTUFBZCxFQUFoQztBQUNBLGFBQUtMLGlCQUFMLENBQXVCTSxVQUF2QixDQUFrQyxJQUFsQyxFQUF3Q0MsU0FBeEMsQ0FBa0QsS0FBS0gsQ0FBTCxDQUFPLEtBQVAsRUFBYyxDQUFkLENBQWxELEVBQW9FLENBQXBFLEVBQXVFLENBQXZFLEVBQTBFLEtBQUtBLENBQUwsQ0FBTyxLQUFQLEVBQWNELEtBQWQsRUFBMUUsRUFBaUcsS0FBS0MsQ0FBTCxDQUFPLEtBQVAsRUFBY0MsTUFBZCxFQUFqRztBQUNBLGFBQUtELENBQUwsQ0FBTyx1QkFBUCxFQUFnQ0ksR0FBaEMsQ0FBb0Msa0JBQXBDLEVBQXdELEtBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLGVBQWYsQ0FBeEQsRUFOa0IsQ0FNd0U7QUFDN0YsS0FaNkI7QUFhOUJYLFlBQVEsa0JBQVU7QUFDZCxhQUFLWSxHQUFMLENBQVNaLE1BQVQ7QUFDSCxLQWY2QjtBQWdCOUJhLGtCQUFjLHNCQUFTQyxDQUFULEVBQVc7QUFDckIsWUFBSUMsWUFBWSxLQUFLZCxpQkFBTCxDQUF1Qk0sVUFBdkIsQ0FBa0MsSUFBbEMsRUFBd0NTLFlBQXhDLENBQXFERixFQUFFRyxPQUF2RCxFQUFnRUgsRUFBRUksT0FBbEUsRUFBMkUsQ0FBM0UsRUFBOEUsQ0FBOUUsRUFBaUZDLElBQWpHO0FBQ0EsWUFBSUMsV0FBV0Msd0JBQWNDLFFBQWQsQ0FBdUJQLFVBQVUsQ0FBVixDQUF2QixFQUFxQ0EsVUFBVSxDQUFWLENBQXJDLEVBQW1EQSxVQUFVLENBQVYsQ0FBbkQsQ0FBZjtBQUNBLGFBQUtWLENBQUwsQ0FBTyx1QkFBUCxFQUFnQ0ksR0FBaEMsQ0FBb0Msa0JBQXBDLEVBQXdEVyxRQUF4RDtBQUNBLGFBQUtWLEtBQUwsQ0FBV2EsR0FBWCxDQUFlLGVBQWYsRUFBZ0NILFFBQWhDO0FBQ0gsS0FyQjZCO0FBc0I5Qkksa0JBQWMsc0JBQVNWLENBQVQsRUFBVztBQUNyQixZQUFJQyxZQUFZLEtBQUtkLGlCQUFMLENBQXVCTSxVQUF2QixDQUFrQyxJQUFsQyxFQUF3Q1MsWUFBeEMsQ0FBcURGLEVBQUVHLE9BQXZELEVBQWdFSCxFQUFFSSxPQUFsRSxFQUEyRSxDQUEzRSxFQUE4RSxDQUE5RSxFQUFpRkMsSUFBakc7QUFDQSxhQUFLZCxDQUFMLENBQU8sY0FBUCxFQUF1Qm9CLElBQXZCLENBQTRCVixVQUFVLENBQVYsQ0FBNUI7QUFDQSxhQUFLVixDQUFMLENBQU8sZ0JBQVAsRUFBeUJvQixJQUF6QixDQUE4QlYsVUFBVSxDQUFWLENBQTlCO0FBQ0EsYUFBS1YsQ0FBTCxDQUFPLGVBQVAsRUFBd0JvQixJQUF4QixDQUE2QlYsVUFBVSxDQUFWLENBQTdCO0FBQ0EsYUFBS1YsQ0FBTCxDQUFPLGVBQVAsRUFBd0JJLEdBQXhCLENBQTRCLGtCQUE1QixFQUFnRFksd0JBQWNDLFFBQWQsQ0FBdUJQLFVBQVUsQ0FBVixDQUF2QixFQUFxQ0EsVUFBVSxDQUFWLENBQXJDLEVBQW1EQSxVQUFVLENBQVYsQ0FBbkQsQ0FBaEQ7QUFDSDtBQTVCNkIsQ0FBWixDQUF0QjtrQkE4QmV0QixhIiwiZmlsZSI6IkNvbG9yU2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xuaW1wb3J0IEhlbHBGdW5jdGlvbnMgZnJvbSBcIi4uLy4uLy4uL0hlbHBGdW5jdGlvbnNcIjtcblxuY29uc3QgQ29sb3JTZWxlY3RvciA9IFZpZXcuZXh0ZW5kKHtcbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrIGltZyc6ICdjbGlja0hhbmRsZXInLFxuICAgICAgICAnbW91c2Vtb3ZlIGltZyc6ICdob3ZlckhhbmRsZXInXG4gICAgfSxcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpe1xuICAgICAgICBBcHAuZXZlbnRzLm9uKFwidG9nZ2xlQ29sb3JTZWxlY3RvclwiLCAoKSA9PiB0aGlzLnRvZ2dsZSgpKTtcbiAgICAgICAgdGhpcy5zZWxlY3RDb2xvckNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLnNlbGVjdENvbG9yQ2FudmFzLndpZHRoID0gdGhpcy4kKCdpbWcnKS53aWR0aCgpO1xuICAgICAgICB0aGlzLnNlbGVjdENvbG9yQ2FudmFzLmhlaWdodCA9IHRoaXMuJCgnaW1nJykuaGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0Q29sb3JDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodGhpcy4kKCdpbWcnKVswXSwgMCwgMCwgdGhpcy4kKCdpbWcnKS53aWR0aCgpLCB0aGlzLiQoJ2ltZycpLmhlaWdodCgpKTtcbiAgICAgICAgdGhpcy4kKCcuc2VsZWN0ZWRDb2xvckRpc3BsYXknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLm1vZGVsLmdldCgnc2VsZWN0ZWRDb2xvcicpKTsgLy8gY2hhbmdpbmcgQ1NTIGluIGphdmFzY3JpcHQgaXMgdWdseSBidXQgaGFyZCB0byBkbyB3aXRoIGNsYXNzZXMuXG4gICAgfSxcbiAgICB0b2dnbGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuJGVsLnRvZ2dsZSgpO1xuICAgIH0sXG4gICAgY2xpY2tIYW5kbGVyOiBmdW5jdGlvbihlKXtcbiAgICAgICAgbGV0IHBpeGVsRGF0YSA9IHRoaXMuc2VsZWN0Q29sb3JDYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5nZXRJbWFnZURhdGEoZS5vZmZzZXRYLCBlLm9mZnNldFksIDEsIDEpLmRhdGE7XG4gICAgICAgIGxldCBoZXhDb2xvciA9IEhlbHBGdW5jdGlvbnMucmdiVG9IZXgocGl4ZWxEYXRhWzBdLCBwaXhlbERhdGFbMV0sIHBpeGVsRGF0YVsyXSk7XG4gICAgICAgIHRoaXMuJCgnLnNlbGVjdGVkQ29sb3JEaXNwbGF5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgaGV4Q29sb3IpO1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgnc2VsZWN0ZWRDb2xvcicsIGhleENvbG9yKTtcbiAgICB9LFxuICAgIGhvdmVySGFuZGxlcjogZnVuY3Rpb24oZSl7XG4gICAgICAgIGxldCBwaXhlbERhdGEgPSB0aGlzLnNlbGVjdENvbG9yQ2FudmFzLmdldENvbnRleHQoJzJkJykuZ2V0SW1hZ2VEYXRhKGUub2Zmc2V0WCwgZS5vZmZzZXRZLCAxLCAxKS5kYXRhO1xuICAgICAgICB0aGlzLiQoJy5yZWQtZGlzcGxheScpLnRleHQocGl4ZWxEYXRhWzBdKTtcbiAgICAgICAgdGhpcy4kKCcuZ3JlZW4tZGlzcGxheScpLnRleHQocGl4ZWxEYXRhWzFdKTtcbiAgICAgICAgdGhpcy4kKCcuYmx1ZS1kaXNwbGF5JykudGV4dChwaXhlbERhdGFbMl0pO1xuICAgICAgICB0aGlzLiQoJy5jb2xvckRpc3BsYXknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBIZWxwRnVuY3Rpb25zLnJnYlRvSGV4KHBpeGVsRGF0YVswXSwgcGl4ZWxEYXRhWzFdLCBwaXhlbERhdGFbMl0pKTtcbiAgICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IENvbG9yU2VsZWN0b3I7XG5cbiJdfQ==

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CanvasSetting2 = __webpack_require__(352);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvc2V0dGluZ3MvSGVscExpbmVzLmpzIl0sIm5hbWVzIjpbIkhlbHBMaW5lcyIsIm1vZGVsIiwibmFtZSIsInRvZ2dsZUZ1bmN0aW9uIiwic2V0IiwiZ2V0IiwiQ2FudmFzU2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNGLHVCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsMEhBQ1JBLEtBRFE7O0FBRWQsY0FBS0MsSUFBTCxHQUFZLFdBQVo7QUFGYztBQUdqQjs7OztrQ0FDUTtBQUNMLGlCQUFLQyxjQUFMO0FBQ0g7Ozt5Q0FDZTtBQUNaLGlCQUFLRixLQUFMLENBQVdHLEdBQVgsQ0FBZSxlQUFmLEVBQWdDLENBQUMsS0FBS0gsS0FBTCxDQUFXSSxHQUFYLENBQWUsZUFBZixDQUFqQztBQUNIOzs7O0VBVm1CQyx1Qjs7a0JBWVROLFMiLCJmaWxlIjoiSGVscExpbmVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhc1NldHRpbmcgZnJvbSBcIi4vQ2FudmFzU2V0dGluZ1wiO1xuXG5jbGFzcyBIZWxwTGluZXMgZXh0ZW5kcyBDYW52YXNTZXR0aW5ne1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsKXtcbiAgICAgICAgc3VwZXIobW9kZWwpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnSGVscGxpbmVzJztcbiAgICB9XG4gICAgb25DbGljaygpe1xuICAgICAgICB0aGlzLnRvZ2dsZUZ1bmN0aW9uKCk7XG4gICAgfVxuICAgIHRvZ2dsZUZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KFwiZHJhd0hlbHBMaW5lc1wiLCAhdGhpcy5tb2RlbC5nZXQoXCJkcmF3SGVscExpbmVzXCIpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBIZWxwTGluZXM7XG5cbiJdfQ==

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var _HelpFunctions = __webpack_require__(332);

	var _HelpFunctions2 = _interopRequireDefault(_HelpFunctions);

	var _DataStreamHandler = __webpack_require__(330);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9jYW52YXMvc2V0dGluZ3MvRGltZW5zaW9uU2V0dGluZy5qcyJdLCJuYW1lcyI6WyJEaW1lbnNpb25TZXR0aW5nIiwiVmlldyIsImV4dGVuZCIsImV2ZW50cyIsImluaXRpYWxpemUiLCIkZWwiLCJ2YWwiLCJtb2RlbCIsImdldCIsImVsIiwiZGF0YXNldCIsImlkIiwibGlzdGVuVG8iLCJzZXRWYWx1ZSIsImNoYW5nZUhhbmRsZXIiLCJuZXdEaW1lbnNpb24iLCJIZWxwRnVuY3Rpb25zIiwibWFrZUV2ZW4iLCJjaGFuZ2VEaW1lbnNpb25zIiwiRGF0YVN0cmVhbUhhbmRsZXIiLCJzZW5kRGltZW5zaW9ucyIsImUiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUJDLGVBQUtDLE1BQUwsQ0FBWTtBQUNqQ0MsWUFBUTtBQUNKLGtCQUFVO0FBRE4sS0FEeUI7QUFJakNDLGNBSmlDLHdCQUlyQjtBQUNSLGFBQUtDLEdBQUwsQ0FBU0MsR0FBVCxDQUFhLEtBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLEtBQUtDLEVBQUwsQ0FBUUMsT0FBUixDQUFnQkMsRUFBL0IsQ0FBYjtBQUNBLGFBQUtDLFFBQUwsQ0FBYyxLQUFLTCxLQUFuQixFQUEwQixZQUFVLEtBQUtFLEVBQUwsQ0FBUUMsT0FBUixDQUFnQkMsRUFBcEQsRUFBd0QsS0FBS0UsUUFBN0Q7QUFDSCxLQVBnQzs7QUFRakNDLG1CQUFlLHlCQUFVO0FBQ3JCLFlBQUlDLGVBQWUsRUFBbkI7QUFDQUEscUJBQWEsS0FBS04sRUFBTCxDQUFRQyxPQUFSLENBQWdCQyxFQUE3QixJQUFtQ0ssd0JBQWNDLFFBQWQsQ0FBdUIsS0FBS1osR0FBTCxDQUFTQyxHQUFULEVBQXZCLENBQW5DO0FBQ0EsYUFBS0MsS0FBTCxDQUFXVyxnQkFBWCxDQUE0QkgsWUFBNUI7QUFDQUksb0NBQWtCQyxjQUFsQixDQUFpQ0wsWUFBakM7QUFDSCxLQWJnQztBQWNqQ0YsY0FBVSxrQkFBU1EsQ0FBVCxFQUFZQyxDQUFaLEVBQWM7QUFDcEIsYUFBS2pCLEdBQUwsQ0FBU0MsR0FBVCxDQUFhZ0IsQ0FBYjtBQUNIO0FBaEJnQyxDQUFaLENBQXpCO2tCQWtCZXRCLGdCIiwiZmlsZSI6IkRpbWVuc2lvblNldHRpbmcuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xuaW1wb3J0IEhlbHBGdW5jdGlvbnMgZnJvbSBcIi4uLy4uLy4uL0hlbHBGdW5jdGlvbnNcIjtcbmltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vRGF0YVN0cmVhbUhhbmRsZXJcIjtcblxuY29uc3QgRGltZW5zaW9uU2V0dGluZyA9IFZpZXcuZXh0ZW5kKHtcbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NoYW5nZSc6ICdjaGFuZ2VIYW5kbGVyJ1xuICAgIH0sXG4gICAgaW5pdGlhbGl6ZSgpe1xuICAgICAgICB0aGlzLiRlbC52YWwodGhpcy5tb2RlbC5nZXQodGhpcy5lbC5kYXRhc2V0LmlkKSk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgXCJjaGFuZ2U6XCIrdGhpcy5lbC5kYXRhc2V0LmlkLCB0aGlzLnNldFZhbHVlKTtcbiAgICB9LFxuICAgIGNoYW5nZUhhbmRsZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBuZXdEaW1lbnNpb24gPSB7fTtcbiAgICAgICAgbmV3RGltZW5zaW9uW3RoaXMuZWwuZGF0YXNldC5pZF0gPSBIZWxwRnVuY3Rpb25zLm1ha2VFdmVuKHRoaXMuJGVsLnZhbCgpKTtcbiAgICAgICAgdGhpcy5tb2RlbC5jaGFuZ2VEaW1lbnNpb25zKG5ld0RpbWVuc2lvbik7XG4gICAgICAgIERhdGFTdHJlYW1IYW5kbGVyLnNlbmREaW1lbnNpb25zKG5ld0RpbWVuc2lvbik7XG4gICAgfSxcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24oZSwgYSl7XG4gICAgICAgIHRoaXMuJGVsLnZhbChhKTtcbiAgICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IERpbWVuc2lvblNldHRpbmc7XG5cbiJdfQ==

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var _BackButton = __webpack_require__(357);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9yb29tL1Jvb21OYW1lLmpzIl0sIm5hbWVzIjpbIlJvb21OYW1lIiwiVmlldyIsImV4dGVuZCIsImluaXRpYWxpemUiLCJsaXN0ZW5UbyIsIm1vZGVsIiwidXBkYXRlTmFtZSIsImUiLCJhIiwiJGVsIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVdDLGVBQUtDLE1BQUwsQ0FBWTtBQUN6QkMsZ0JBQVksc0JBQVk7QUFDcEIsYUFBS0MsUUFBTCxDQUFjLEtBQUtDLEtBQW5CLEVBQTBCLGFBQTFCLEVBQXlDLEtBQUtDLFVBQTlDO0FBQ0gsS0FId0I7QUFJekJBLGdCQUFZLG9CQUFTQyxDQUFULEVBQVlDLENBQVosRUFBYztBQUN0QixhQUFLQyxHQUFMLENBQVNDLElBQVQsQ0FBY0YsQ0FBZDtBQUNIOztBQU53QixDQUFaLENBQWpCO2tCQVNlUixRIiwiZmlsZSI6IlJvb21OYW1lLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCIuL0JhY2tCdXR0b25cIjtcblxuY29uc3QgUm9vbU5hbWUgPSBWaWV3LmV4dGVuZCh7XG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsIFwiY2hhbmdlOm5hbWVcIiwgdGhpcy51cGRhdGVOYW1lKTtcbiAgICB9LFxuICAgIHVwZGF0ZU5hbWU6IGZ1bmN0aW9uKGUsIGEpe1xuICAgICAgICB0aGlzLiRlbC50ZXh0KGEpO1xuICAgIH1cblxufSk7XG5leHBvcnQgZGVmYXVsdCBSb29tTmFtZTsiXX0=

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var _PageHandler = __webpack_require__(358);

	var _PageHandler2 = _interopRequireDefault(_PageHandler);

	var _DataStreamHandler = __webpack_require__(330);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9yb29tL0JhY2tCdXR0b24uanMiXSwibmFtZXMiOlsiQmFja0J1dHRvbiIsIlZpZXciLCJleHRlbmQiLCJldmVudHMiLCJoYW5kbGVDbGljayIsIkRhdGFTdHJlYW1IYW5kbGVyIiwibGVhdmVSb29tIiwiQXBwIiwidHJpZ2dlciIsIlBhZ2VIYW5kbGVyIiwiZ290byJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsZUFBS0MsTUFBTCxDQUFZO0FBQzNCQyxZQUFRO0FBQ0osaUJBQVM7QUFETCxLQURtQjtBQUkzQkMsZUFKMkIseUJBSWQ7QUFDVEMsb0NBQWtCQyxTQUFsQjtBQUNBQyxZQUFJSixNQUFKLENBQVdLLE9BQVgsQ0FBbUIsV0FBbkI7QUFDQUMsOEJBQVlDLElBQVosQ0FBaUIsTUFBakI7QUFDSDtBQVIwQixDQUFaLENBQW5CO2tCQVdlVixVIiwiZmlsZSI6IkJhY2tCdXR0b24uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xuaW1wb3J0IFBhZ2VIYW5kbGVyIGZyb20gXCIuLi8uLi9QYWdlSGFuZGxlclwiO1xuaW1wb3J0IERhdGFTdHJlYW1IYW5kbGVyIGZyb20gXCIuLi8uLi9EYXRhU3RyZWFtSGFuZGxlclwiO1xuXG5jb25zdCBCYWNrQnV0dG9uID0gVmlldy5leHRlbmQoe1xuICAgIGV2ZW50czoge1xuICAgICAgICAnY2xpY2snOiAnaGFuZGxlQ2xpY2snXG4gICAgfSxcbiAgICBoYW5kbGVDbGljaygpe1xuICAgICAgICBEYXRhU3RyZWFtSGFuZGxlci5sZWF2ZVJvb20oKTtcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKFwibGVhdmVSb29tXCIpO1xuICAgICAgICBQYWdlSGFuZGxlci5nb3RvKCdsaXN0Jyk7XG4gICAgfVxuXG59KTtcbmV4cG9ydCBkZWZhdWx0IEJhY2tCdXR0b247Il19

/***/ }),
/* 358 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

	            var pagesArray = [];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.pages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _step$value = _slicedToArray(_step.value, 2),
	                        key = _step$value[0],
	                        value = _step$value[1];

	                    pagesArray.push(value);
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

	            var promises = pagesArray.map(function (obj) {
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9QYWdlSGFuZGxlci5qcyJdLCJuYW1lcyI6WyJQYWdlSGFuZGxlciIsInBhZ2VzIiwiTWFwIiwibmFtZSIsInBhZ2VzQXJyYXkiLCJrZXkiLCJ2YWx1ZSIsInB1c2giLCJwcm9taXNlcyIsIm1hcCIsIm9iaiIsImhpZGVQYWdlIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJnZXQiLCJzaG93UGFnZSIsInBhZ2UiLCJzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFNQSxXO0FBQ0YsMkJBQWE7QUFBQTs7QUFDVCxhQUFLQyxLQUFMLEdBQWEsSUFBSUMsR0FBSixFQUFiO0FBQ0g7Ozs7NkJBQ0lDLEksRUFBSztBQUFBOztBQUNOLGdCQUFJQyxhQUFhLEVBQWpCO0FBRE07QUFBQTtBQUFBOztBQUFBO0FBRU4scUNBQXdCLEtBQUtILEtBQTdCLDhIQUFtQztBQUFBO0FBQUEsd0JBQTFCSSxHQUEwQjtBQUFBLHdCQUFyQkMsS0FBcUI7O0FBQy9CRiwrQkFBV0csSUFBWCxDQUFnQkQsS0FBaEI7QUFDSDtBQUpLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS04sZ0JBQUlFLFdBQVdKLFdBQVdLLEdBQVgsQ0FBZSxVQUFDQyxHQUFEO0FBQUEsdUJBQVNBLElBQUlDLFFBQUosRUFBVDtBQUFBLGFBQWYsQ0FBZjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZTCxRQUFaLEVBQXNCTSxJQUF0QixDQUEyQixZQUFNO0FBQUMsc0JBQUtiLEtBQUwsQ0FBV2MsR0FBWCxDQUFlWixJQUFmLEVBQXFCYSxRQUFyQjtBQUFnQyxhQUFsRTtBQUNIOzs7Z0NBQ09DLEksRUFBSztBQUNULGlCQUFLaEIsS0FBTCxDQUFXaUIsR0FBWCxDQUFlRCxLQUFLZCxJQUFwQixFQUEwQmMsSUFBMUI7QUFDSDs7Ozs7O2tCQUVXLElBQUlqQixXQUFKLEUiLCJmaWxlIjoiUGFnZUhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQYWdlSGFuZGxlcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBhZ2VzID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBnb3RvKG5hbWUpe1xuICAgICAgICBsZXQgcGFnZXNBcnJheSA9IFtdO1xuICAgICAgICBmb3IobGV0IFtrZXksIHZhbHVlXSBvZiB0aGlzLnBhZ2VzKXtcbiAgICAgICAgICAgIHBhZ2VzQXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb21pc2VzID0gcGFnZXNBcnJheS5tYXAoKG9iaikgPT4gb2JqLmhpZGVQYWdlKCkpO1xuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7dGhpcy5wYWdlcy5nZXQobmFtZSkuc2hvd1BhZ2UoKX0pO1xuICAgIH1cbiAgICBhZGRQYWdlKHBhZ2Upe1xuICAgICAgICB0aGlzLnBhZ2VzLnNldChwYWdlLm5hbWUsIHBhZ2UpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IChuZXcgUGFnZUhhbmRsZXIpOyJdfQ==

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var _underscore = __webpack_require__(334);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9yb29tL1VzZXJzSW5Sb29tTGlzdC5qcyJdLCJuYW1lcyI6WyJSb29tT3ZlcnZpZXciLCJWaWV3IiwiZXh0ZW5kIiwiaW5pdGlhbGl6ZSIsImxpc3RlblRvIiwibW9kZWwiLCJ1cGRhdGVEb20iLCJfIiwidGVtcGxhdGVTZXR0aW5ncyIsInZhcmlhYmxlIiwidGVtcGxhdGUiLCIkIiwiaHRtbCIsImUiLCJhIiwiJGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsZUFBS0MsTUFBTCxDQUFZO0FBQzdCQyxnQkFBWSxzQkFBWTtBQUNwQixhQUFLQyxRQUFMLENBQWMsS0FBS0MsS0FBbkIsRUFBMEIsY0FBMUIsRUFBMEMsS0FBS0MsU0FBL0M7QUFDQUMsNkJBQUVDLGdCQUFGLENBQW1CQyxRQUFuQixHQUE4QixPQUE5QjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0JILHFCQUFFRyxRQUFGLENBQVdDLEVBQUUsaUJBQUYsRUFBcUJDLElBQXJCLEVBQVgsQ0FBaEI7QUFDSCxLQUw0QjtBQU03Qk4sZUFBVyxtQkFBU08sQ0FBVCxFQUFZQyxDQUFaLEVBQWM7QUFDckIsYUFBS0MsR0FBTCxDQUFTSCxJQUFULENBQWMsS0FBS0YsUUFBTCxDQUFjSSxDQUFkLENBQWQ7QUFDSDs7QUFSNEIsQ0FBWixDQUFyQjtrQkFXZWQsWSIsImZpbGUiOiJVc2Vyc0luUm9vbUxpc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xuaW1wb3J0IF8gZnJvbSBcInVuZGVyc2NvcmVcIjtcblxuY29uc3QgUm9vbU92ZXJ2aWV3ID0gVmlldy5leHRlbmQoe1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCBcImNoYW5nZTp1c2Vyc1wiLCB0aGlzLnVwZGF0ZURvbSk7XG4gICAgICAgIF8udGVtcGxhdGVTZXR0aW5ncy52YXJpYWJsZSA9IFwidXNlcnNcIjtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IF8udGVtcGxhdGUoJCgnI3VzZXJzLXRlbXBsYXRlJykuaHRtbCgpKTtcbiAgICB9LFxuICAgIHVwZGF0ZURvbTogZnVuY3Rpb24oZSwgYSl7XG4gICAgICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShhKSk7XG4gICAgfVxuXG59KTtcbmV4cG9ydCBkZWZhdWx0IFJvb21PdmVydmlldzsiXX0=

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Page = __webpack_require__(361);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Room = _Page2.default.extend({
	  initialize: function initialize() {
	    this.name = 'room';
	  }
	});
	exports.default = Room;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9Sb29tLmpzIl0sIm5hbWVzIjpbIlJvb20iLCJQYWdlIiwiZXh0ZW5kIiwiaW5pdGlhbGl6ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxlQUFLQyxNQUFMLENBQVk7QUFDckJDLFlBRHFCLHdCQUNUO0FBQ1YsU0FBS0MsSUFBTCxHQUFZLE1BQVo7QUFDRDtBQUhvQixDQUFaLENBQWI7a0JBS2VKLEkiLCJmaWxlIjoiUm9vbS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcblxuY29uc3QgUm9vbSA9IFBhZ2UuZXh0ZW5kKHtcbiAgICBpbml0aWFsaXplKCl7XG4gICAgICB0aGlzLm5hbWUgPSAncm9vbSc7XG4gICAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBSb29tOyJdfQ==

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9QYWdlLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJWaWV3IiwiZXh0ZW5kIiwiaGlkZVBhZ2UiLCIkZWwiLCJmYWRlT3V0IiwicHJvbWlzZSIsInNob3dQYWdlIiwiZmFkZUluIiwiQXBwIiwiZXZlbnRzIiwidHJpZ2dlciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLE9BQU9DLGVBQUtDLE1BQUwsQ0FBWTtBQUNyQkMsWUFEcUIsc0JBQ1g7QUFDTixlQUFPLEtBQUtDLEdBQUwsQ0FBU0MsT0FBVCxHQUFtQkMsT0FBbkIsRUFBUDtBQUNILEtBSG9CO0FBSXJCQyxZQUpxQixzQkFJWDtBQUNOLGFBQUtILEdBQUwsQ0FBU0ksTUFBVDtBQUNBQyxZQUFJQyxNQUFKLENBQVdDLE9BQVgsQ0FBb0IsZUFBYSxLQUFLQyxJQUF0QztBQUNIO0FBUG9CLENBQVosQ0FBYjtrQkFTZVosSSIsImZpbGUiOiJQYWdlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tICdiYWNrYm9uZSc7XG5cbmNvbnN0IFBhZ2UgPSBWaWV3LmV4dGVuZCh7XG4gICAgaGlkZVBhZ2UoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGVsLmZhZGVPdXQoKS5wcm9taXNlKCk7XG4gICAgfSxcbiAgICBzaG93UGFnZSgpe1xuICAgICAgICB0aGlzLiRlbC5mYWRlSW4oKTtcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKCgnaW5pdGlhbGl6ZScrdGhpcy5uYW1lKSk7XG4gICAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdfQ==

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Page = __webpack_require__(361);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Roomlist = _Page2.default.extend({
	    initialize: function initialize() {
	        this.name = 'list';
	    }
	});
	exports.default = Roomlist;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9Sb29tc1BhZ2UuanMiXSwibmFtZXMiOlsiUm9vbWxpc3QiLCJQYWdlIiwiZXh0ZW5kIiwiaW5pdGlhbGl6ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxlQUFLQyxNQUFMLENBQVk7QUFDekJDLGNBRHlCLHdCQUNiO0FBQ1IsYUFBS0MsSUFBTCxHQUFZLE1BQVo7QUFDSDtBQUh3QixDQUFaLENBQWpCO2tCQUtlSixRIiwiZmlsZSI6IlJvb21zUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcblxuY29uc3QgUm9vbWxpc3QgPSBQYWdlLmV4dGVuZCh7XG4gICAgaW5pdGlhbGl6ZSgpe1xuICAgICAgICB0aGlzLm5hbWUgPSAnbGlzdCc7XG4gICAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBSb29tbGlzdDsiXX0=

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Page = __webpack_require__(361);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NamePage = _Page2.default.extend({
	    initialize: function initialize() {
	        this.name = 'name';
	    }
	});
	exports.default = NamePage;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9OYW1lLmpzIl0sIm5hbWVzIjpbIk5hbWVQYWdlIiwiUGFnZSIsImV4dGVuZCIsImluaXRpYWxpemUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsZUFBS0MsTUFBTCxDQUFZO0FBQ3pCQyxjQUR5Qix3QkFDYjtBQUNSLGFBQUtDLElBQUwsR0FBWSxNQUFaO0FBQ0g7QUFId0IsQ0FBWixDQUFqQjtrQkFLZUosUSIsImZpbGUiOiJOYW1lLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuXG5jb25zdCBOYW1lUGFnZSA9IFBhZ2UuZXh0ZW5kKHtcbiAgICBpbml0aWFsaXplKCl7XG4gICAgICAgIHRoaXMubmFtZSA9ICduYW1lJztcbiAgICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IE5hbWVQYWdlOyJdfQ==

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var NameButton = _backbone.View.extend({
	    events: {
	        'click': 'clickHandler'
	    },
	    clickHandler: function clickHandler() {
	        App.events.trigger('selectName');
	    }
	});
	exports.default = NameButton;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9OYW1lUGFnZS9OYW1lQnV0dG9uLmpzIl0sIm5hbWVzIjpbIk5hbWVCdXR0b24iLCJWaWV3IiwiZXh0ZW5kIiwiZXZlbnRzIiwiY2xpY2tIYW5kbGVyIiwiQXBwIiwidHJpZ2dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsYUFBYUMsZUFBS0MsTUFBTCxDQUFZO0FBQzNCQyxZQUFRO0FBQ0osaUJBQVM7QUFETCxLQURtQjtBQUkzQkMsa0JBQWMsd0JBQVU7QUFDcEJDLFlBQUlGLE1BQUosQ0FBV0csT0FBWCxDQUFtQixZQUFuQjtBQUNIO0FBTjBCLENBQVosQ0FBbkI7a0JBUWVOLFUiLCJmaWxlIjoiTmFtZUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vmlld30gZnJvbSBcImJhY2tib25lXCI7XG5cbmNvbnN0IE5hbWVCdXR0b24gPSBWaWV3LmV4dGVuZCh7XG4gICAgZXZlbnRzOiB7XG4gICAgICAgICdjbGljayc6ICdjbGlja0hhbmRsZXInXG4gICAgfSxcbiAgICBjbGlja0hhbmRsZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcignc2VsZWN0TmFtZScpO1xuICAgIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgTmFtZUJ1dHRvblxuIl19

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var _DataStreamHandler = __webpack_require__(330);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	var _PageHandler = __webpack_require__(358);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9OYW1lUGFnZS9OYW1lSW5wdXQuanMiXSwibmFtZXMiOlsiTmFtZUlucHV0IiwiVmlldyIsImV4dGVuZCIsImV2ZW50cyIsImluaXRpYWxpemUiLCJBcHAiLCJvbiIsInNlbGVjdE5hbWUiLCJrZXlIYW5kbGVyIiwiZSIsImtleUNvZGUiLCJEYXRhU3RyZWFtSGFuZGxlciIsInNlbmROYW1lIiwicG9wRGF0YSIsIlBhZ2VIYW5kbGVyIiwiZ290byIsInRtcCIsIiRlbCIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsZUFBS0MsTUFBTCxDQUFZO0FBQzFCQyxZQUFRO0FBQ0osbUJBQVc7QUFEUCxLQURrQjtBQUkxQkMsY0FKMEIsd0JBSWQ7QUFBQTs7QUFDUkMsWUFBSUYsTUFBSixDQUFXRyxFQUFYLENBQWMsWUFBZCxFQUE0QjtBQUFBLG1CQUFNLE1BQUtDLFVBQUwsRUFBTjtBQUFBLFNBQTVCO0FBQ0gsS0FOeUI7O0FBTzFCQyxnQkFBWSxvQkFBU0MsQ0FBVCxFQUFXO0FBQ25CLFlBQUdBLEVBQUVDLE9BQUYsSUFBYSxFQUFoQixFQUFtQjtBQUNmLGlCQUFLSCxVQUFMO0FBQ0g7QUFDSixLQVh5QjtBQVkxQkEsY0FaMEIsd0JBWWQ7QUFDUkksb0NBQWtCQyxRQUFsQixDQUEyQixLQUFLQyxPQUFMLEVBQTNCO0FBQ0FDLDhCQUFZQyxJQUFaLENBQWlCLE1BQWpCO0FBQ0gsS0FmeUI7O0FBZ0IxQkYsYUFBUyxtQkFBVTtBQUNmLFlBQUlHLE1BQU0sS0FBS0MsR0FBTCxDQUFTQyxHQUFULEVBQVY7QUFDQSxhQUFLRCxHQUFMLENBQVNDLEdBQVQsQ0FBYSxFQUFiO0FBQ0EsZUFBT0YsR0FBUDtBQUNIO0FBcEJ5QixDQUFaLENBQWxCO2tCQXNCZWhCLFMiLCJmaWxlIjoiTmFtZUlucHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcbmltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi8uLi8uLi9EYXRhU3RyZWFtSGFuZGxlclwiO1xuaW1wb3J0IFBhZ2VIYW5kbGVyIGZyb20gXCIuLy4uLy4uL1BhZ2VIYW5kbGVyXCI7XG5cbmNvbnN0IE5hbWVJbnB1dCA9IFZpZXcuZXh0ZW5kKHtcbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2tleWRvd24nOiAna2V5SGFuZGxlcidcbiAgICB9LFxuICAgIGluaXRpYWxpemUoKXtcbiAgICAgICAgQXBwLmV2ZW50cy5vbignc2VsZWN0TmFtZScsICgpID0+IHRoaXMuc2VsZWN0TmFtZSgpKTtcbiAgICB9LFxuICAgIGtleUhhbmRsZXI6IGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZihlLmtleUNvZGUgPT0gMTMpe1xuICAgICAgICAgICAgdGhpcy5zZWxlY3ROYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlbGVjdE5hbWUoKXtcbiAgICAgICAgRGF0YVN0cmVhbUhhbmRsZXIuc2VuZE5hbWUodGhpcy5wb3BEYXRhKCkpO1xuICAgICAgICBQYWdlSGFuZGxlci5nb3RvKCdsaXN0Jyk7XG4gICAgfSxcbiAgICBwb3BEYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgdG1wID0gdGhpcy4kZWwudmFsKCk7XG4gICAgICAgIHRoaXMuJGVsLnZhbCgnJyk7XG4gICAgICAgIHJldHVybiB0bXA7XG4gICAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBOYW1lSW5wdXRcblxuIl19

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var RoomCreateButton = _backbone.View.extend({
	    events: {
	        'click': 'clickHandler'
	    },
	    clickHandler: function clickHandler() {
	        App.events.trigger('createNewRoom');
	    }
	});
	exports.default = RoomCreateButton;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9saXN0Vmlldy9uZXdSb29tL1Jvb21DcmVhdGVCdXR0b24uanMiXSwibmFtZXMiOlsiUm9vbUNyZWF0ZUJ1dHRvbiIsIlZpZXciLCJleHRlbmQiLCJldmVudHMiLCJjbGlja0hhbmRsZXIiLCJBcHAiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxtQkFBbUJDLGVBQUtDLE1BQUwsQ0FBWTtBQUNqQ0MsWUFBUTtBQUNKLGlCQUFTO0FBREwsS0FEeUI7QUFJakNDLGtCQUFjLHdCQUFVO0FBQ3BCQyxZQUFJRixNQUFKLENBQVdHLE9BQVgsQ0FBbUIsZUFBbkI7QUFDSDtBQU5nQyxDQUFaLENBQXpCO2tCQVFlTixnQiIsImZpbGUiOiJSb29tQ3JlYXRlQnV0dG9uLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JpZW4vQ29kZS9wcm9qZWN0cy9uaWVrL2RyYXdyb29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaWV3fSBmcm9tIFwiYmFja2JvbmVcIjtcblxuY29uc3QgUm9vbUNyZWF0ZUJ1dHRvbiA9IFZpZXcuZXh0ZW5kKHtcbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2NsaWNrJzogJ2NsaWNrSGFuZGxlcidcbiAgICB9LFxuICAgIGNsaWNrSGFuZGxlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgQXBwLmV2ZW50cy50cmlnZ2VyKCdjcmVhdGVOZXdSb29tJyk7XG4gICAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBSb29tQ3JlYXRlQnV0dG9uXG4iXX0=

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _DataStreamHandler = __webpack_require__(330);

	var _DataStreamHandler2 = _interopRequireDefault(_DataStreamHandler);

	var _PageHandler = __webpack_require__(358);

	var _PageHandler2 = _interopRequireDefault(_PageHandler);

	var _underscore = __webpack_require__(334);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _backbone = __webpack_require__(333);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9saXN0Vmlldy9yb29tcy9Sb29tTGlzdC5qcyJdLCJuYW1lcyI6WyJSb29tTGlzdCIsIlZpZXciLCJleHRlbmQiLCJldmVudHMiLCJpbml0aWFsaXplIiwiQXBwIiwib24iLCJlIiwidXBkYXRlUm9vbUxpc3QiLCJfIiwidGVtcGxhdGVTZXR0aW5ncyIsInZhcmlhYmxlIiwidGVtcGxhdGUiLCIkIiwiaHRtbCIsImNsaWNrSGFuZGxlciIsIlBhZ2VIYW5kbGVyIiwiZ290byIsIkRhdGFTdHJlYW1IYW5kbGVyIiwiam9pblJvb20iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hbWUiLCJyb29tcyIsIiRlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxXQUFXQyxlQUFLQyxNQUFMLENBQVk7QUFDekJDLFlBQVE7QUFDSiw2QkFBcUI7QUFEakIsS0FEaUI7QUFJekJDLGdCQUFZLHNCQUFZO0FBQUE7O0FBQ3BCQyxZQUFJRixNQUFKLENBQVdHLEVBQVgsQ0FBYyxhQUFkLEVBQTZCLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLQyxjQUFMLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBN0I7O0FBRUFFLDZCQUFFQyxnQkFBRixDQUFtQkMsUUFBbkIsR0FBOEIsT0FBOUI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCSCxxQkFBRUcsUUFBRixDQUFXQyxFQUFFLG9CQUFGLEVBQXdCQyxJQUF4QixFQUFYLENBQWhCO0FBQ0gsS0FUd0I7QUFVekJDLGtCQUFjLHNCQUFVUixDQUFWLEVBQWE7QUFDdkJTLDhCQUFZQyxJQUFaLENBQWlCLE1BQWpCO0FBQ0FDLG9DQUFrQkMsUUFBbEIsQ0FBMkJaLEVBQUVhLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUFuRDtBQUNILEtBYndCO0FBY3pCZCxvQkFBZ0Isd0JBQVVlLEtBQVYsRUFBaUI7QUFDN0IsYUFBS0MsR0FBTCxDQUFTVixJQUFULENBQWMsS0FBS0YsUUFBTCxDQUFjVyxLQUFkLENBQWQ7QUFDSDtBQWhCd0IsQ0FBWixDQUFqQjtrQkFrQmdCdkIsUSIsImZpbGUiOiJSb29tTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yaWVuL0NvZGUvcHJvamVjdHMvbmllay9kcmF3cm9vbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vRGF0YVN0cmVhbUhhbmRsZXJcIjtcbmltcG9ydCBQYWdlSGFuZGxlciBmcm9tIFwiLi4vLi4vLi4vUGFnZUhhbmRsZXJcIlxuaW1wb3J0IF8gZnJvbSBcInVuZGVyc2NvcmVcIjtcbmltcG9ydCB7Vmlld30gZnJvbSBcImJhY2tib25lXCI7XG5cbmNvbnN0IFJvb21MaXN0ID0gVmlldy5leHRlbmQoe1xuICAgIGV2ZW50czoge1xuICAgICAgICBcImNsaWNrIC5yb29tLS1saXN0XCI6IFwiY2xpY2tIYW5kbGVyXCJcbiAgICB9LFxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQXBwLmV2ZW50cy5vbigndXBkYXRlUm9vbXMnLCAoZSkgPT4gdGhpcy51cGRhdGVSb29tTGlzdChlKSk7XG5cbiAgICAgICAgXy50ZW1wbGF0ZVNldHRpbmdzLnZhcmlhYmxlID0gXCJyb29tc1wiO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gXy50ZW1wbGF0ZSgkKCcjcm9vbUxpc3QtdGVtcGxhdGUnKS5odG1sKCkpO1xuICAgIH0sXG4gICAgY2xpY2tIYW5kbGVyOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBQYWdlSGFuZGxlci5nb3RvKCdyb29tJyk7XG4gICAgICAgIERhdGFTdHJlYW1IYW5kbGVyLmpvaW5Sb29tKGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWUpO1xuICAgIH0sXG4gICAgdXBkYXRlUm9vbUxpc3Q6IGZ1bmN0aW9uIChyb29tcykge1xuICAgICAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUocm9vbXMpKTtcbiAgICB9XG59KTtcbmV4cG9ydCAgZGVmYXVsdCBSb29tTGlzdDtcbiJdfQ==

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var _PageHandler = __webpack_require__(358);

	var _PageHandler2 = _interopRequireDefault(_PageHandler);

	var _DataStreamHandler = __webpack_require__(330);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9saXN0Vmlldy9uZXdSb29tL05ld1Jvb21JbnB1dC5qcyJdLCJuYW1lcyI6WyJOZXdSb29tSW5wdXQiLCJWaWV3IiwiZXh0ZW5kIiwiaW5pdGlhbGl6ZSIsIkFwcCIsImV2ZW50cyIsIm9uIiwiY3JlYXRlUm9vbSIsImtleUhhbmRsZXIiLCJlIiwia2V5Q29kZSIsInBvcERhdGEiLCJ0bXAiLCIkZWwiLCJ2YWwiLCJQYWdlSGFuZGxlciIsImdvdG8iLCJEYXRhU3RyZWFtSGFuZGxlciIsImpvaW5Sb29tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxlQUFLQyxNQUFMLENBQVk7QUFDN0JDLGdCQUFhLHNCQUFVO0FBQUE7O0FBQ25CQyxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxlQUFkLEVBQStCO0FBQUEsbUJBQU0sTUFBS0MsVUFBTCxFQUFOO0FBQUEsU0FBL0I7QUFDSCxLQUg0QjtBQUk3QkYsWUFBUTtBQUNKLG1CQUFXO0FBRFAsS0FKcUI7QUFPN0JHLGdCQUFZLG9CQUFTQyxDQUFULEVBQVc7QUFDbkIsWUFBR0EsRUFBRUMsT0FBRixJQUFhLEVBQWhCLEVBQW1CO0FBQ2YsaUJBQUtILFVBQUw7QUFDSDtBQUNKLEtBWDRCO0FBWTdCSSxhQUFTLG1CQUFVO0FBQ2YsWUFBSUMsTUFBTSxLQUFLQyxHQUFMLENBQVNDLEdBQVQsRUFBVjtBQUNBLGFBQUtELEdBQUwsQ0FBU0MsR0FBVCxDQUFhLEVBQWI7QUFDQSxlQUFPRixHQUFQO0FBQ0gsS0FoQjRCO0FBaUI3QkwsZ0JBQVksc0JBQVU7QUFDbEJRLDhCQUFZQyxJQUFaLENBQWlCLE1BQWpCO0FBQ0FDLG9DQUFrQkMsUUFBbEIsQ0FBMkIsS0FBS1AsT0FBTCxFQUEzQjtBQUNIO0FBcEI0QixDQUFaLENBQXJCO2tCQXNCZVgsWSIsImZpbGUiOiJOZXdSb29tSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZpZXd9IGZyb20gXCJiYWNrYm9uZVwiO1xuaW1wb3J0IFBhZ2VIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9QYWdlSGFuZGxlclwiO1xuaW1wb3J0IERhdGFTdHJlYW1IYW5kbGVyIGZyb20gXCIuLi8uLi8uLi9EYXRhU3RyZWFtSGFuZGxlclwiO1xuXG5jb25zdCBOZXdSb29tSW5wdXQgPSBWaWV3LmV4dGVuZCh7XG4gICAgaW5pdGlhbGl6ZSA6IGZ1bmN0aW9uKCl7XG4gICAgICAgIEFwcC5ldmVudHMub24oJ2NyZWF0ZU5ld1Jvb20nLCAoKSA9PiB0aGlzLmNyZWF0ZVJvb20oKSk7XG4gICAgfSxcbiAgICBldmVudHM6IHtcbiAgICAgICAgJ2tleWRvd24nOiAna2V5SGFuZGxlcidcbiAgICB9LFxuICAgIGtleUhhbmRsZXI6IGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZihlLmtleUNvZGUgPT0gMTMpe1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVSb29tKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBvcERhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLiRlbC52YWwoKTtcbiAgICAgICAgdGhpcy4kZWwudmFsKCcnKTtcbiAgICAgICAgcmV0dXJuIHRtcDtcbiAgICB9LFxuICAgIGNyZWF0ZVJvb206IGZ1bmN0aW9uKCl7XG4gICAgICAgIFBhZ2VIYW5kbGVyLmdvdG8oJ3Jvb20nKTtcbiAgICAgICAgRGF0YVN0cmVhbUhhbmRsZXIuam9pblJvb20odGhpcy5wb3BEYXRhKCkpO1xuICAgIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgTmV3Um9vbUlucHV0XG4iXX0=

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

	var _DataStreamHandler = __webpack_require__(330);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2RlbHMvQ2FudmFzLmpzIl0sIm5hbWVzIjpbIkNhbnZhcyIsIk1vZGVsIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJzY2FsZSIsImhlaWdodCIsIndpZHRoIiwicGl4ZWxzIiwic2VsZWN0ZWRDb2xvciIsImhpZ2hsaWdodEhlbHBMaW5lQ29sb3IiLCJkZWZhdWx0SGVscExpbmVDb2xvciIsImhpZ2hMaWdodENvbG9yIiwiZHJhd0hlbHBMaW5lcyIsImRyYWdnaW5nIiwiZHJhZ2dpbmdTZWNvbmRhcnkiLCJsYXN0TW91c2VQb3MiLCJ4IiwieSIsInBvc2l0aW9uIiwidG9vbHMiLCJzZWxlY3RlZFRvb2wiLCJpbml0aWFsaXplIiwicmVzZXQiLCJBcHAiLCJldmVudHMiLCJvbiIsImUiLCJjaGFuZ2VEaW1lbnNpb25zIiwic2VuZEFsbERhdGFUb1VzZXIiLCJpbml0aWFsaXplQ2FudmFzIiwiaSIsImdldCIsImoiLCJzZXQiLCJpbnB1dFRvUGl4ZWxJbmRleCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiTWF0aCIsImZsb29yIiwicmVwb3NpdGlvbiIsIm5ld1Bvc2l0aW9uIiwiZGF0YSIsIm9sZFdpZHRoIiwib2xkSGVpZ2h0IiwibmV3UGl4ZWxzIiwib2xkUGl4ZWxzIiwiaGFzT3duUHJvcGVydHkiLCJwaXhlbEFycmF5IiwicHVzaCIsImNvbG9yIiwiY2FudmFzRGF0YSIsIkRhdGFTdHJlYW1IYW5kbGVyIiwic2VuZENhbnZhc0RhdGEiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsZ0JBQU1DLE1BQU4sQ0FBYTtBQUN4QkMsY0FBVTtBQUNOQyxlQUFPLENBREQ7QUFFTkMsZ0JBQVEsRUFGRixFQUVNO0FBQ1pDLGVBQU8sRUFIRCxFQUdLO0FBQ1hDLGdCQUFRLEVBSkY7QUFLTkMsdUJBQWUsU0FMVDtBQU1OQyxnQ0FBd0IsU0FObEI7QUFPTkMsOEJBQXNCLFNBUGhCO0FBUU5DLHdCQUFnQixTQVJWO0FBU05DLHVCQUFlLEtBVFQ7QUFVTkMsa0JBQVUsS0FWSjtBQVdOQywyQkFBbUIsS0FYYjtBQVlOQyxzQkFBYztBQUNWQyxlQUFHLENBRE87QUFFVkMsZUFBRztBQUZPLFNBWlI7QUFnQk5DLGtCQUFVO0FBQ05GLGVBQUcsQ0FERztBQUVOQyxlQUFHO0FBRkcsU0FoQko7QUFvQk5FLGVBQU8sRUFwQkQ7QUFxQk5DLHNCQUFjO0FBckJSLEtBRGM7QUF3QnhCQyxnQkFBWSxzQkFBWTtBQUFBOztBQUNwQixhQUFLQyxLQUFMO0FBQ0FDLFlBQUlDLE1BQUosQ0FBV0MsRUFBWCxDQUFjLFdBQWQsRUFBMkI7QUFBQSxtQkFBTSxNQUFLSCxLQUFMLEVBQU47QUFBQSxTQUEzQjtBQUNBQyxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxrQkFBZCxFQUFrQyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0MsZ0JBQUwsQ0FBc0JELENBQXRCLENBQVA7QUFBQSxTQUFsQztBQUNBSCxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxtQkFBZCxFQUFtQyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0UsaUJBQUwsQ0FBdUJGLENBQXZCLENBQVA7QUFBQSxTQUFuQztBQUNBSCxZQUFJQyxNQUFKLENBQVdDLEVBQVgsQ0FBYyxzQkFBZCxFQUFzQyxVQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBS0csZ0JBQUwsQ0FBc0JILENBQXRCLENBQVA7QUFBQSxTQUF0QztBQUNILEtBOUJ1QjtBQStCeEJKLFdBQU8saUJBQVU7QUFDYixZQUFJZixTQUFTLEVBQWI7QUFDQSxhQUFLLElBQUl1QixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS0MsR0FBTCxDQUFTLE9BQVQsQ0FBcEIsRUFBdUNELEdBQXZDLEVBQTRDO0FBQ3hDdkIsbUJBQU91QixDQUFQLElBQVksRUFBWjtBQUNBLGlCQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLRCxHQUFMLENBQVMsUUFBVCxDQUFwQixFQUF3Q0MsR0FBeEMsRUFBNkM7QUFDekN6Qix1QkFBT3VCLENBQVAsRUFBVUUsQ0FBVixJQUFlLENBQWY7QUFDSDtBQUNKO0FBQ0QsYUFBS0MsR0FBTCxDQUFTLFFBQVQsRUFBbUIxQixNQUFuQjtBQUNILEtBeEN1QjtBQXlDeEIyQix1QkFBbUIsMkJBQVVDLE9BQVYsRUFBbUJDLE9BQW5CLEVBQTRCO0FBQzNDLFlBQUlsQixXQUFXLEtBQUthLEdBQUwsQ0FBUyxVQUFULENBQWY7QUFDQSxZQUFJM0IsUUFBUSxLQUFLMkIsR0FBTCxDQUFTLE9BQVQsQ0FBWjtBQUNBLFlBQUlJLFVBQVVqQixTQUFTRixDQUFuQixJQUF3Qm9CLFVBQVVsQixTQUFTRCxDQUEzQyxJQUNBa0IsVUFBVWpCLFNBQVNGLENBQVQsR0FBYSxLQUFLZSxHQUFMLENBQVMsT0FBVCxJQUFvQjNCLEtBRDNDLElBRUFnQyxVQUFVbEIsU0FBU0QsQ0FBVCxHQUFhLEtBQUtjLEdBQUwsQ0FBUyxRQUFULElBQXFCM0IsS0FGaEQsRUFFdUQ7QUFDbkQsbUJBQU87QUFDSFksbUJBQUdxQixLQUFLQyxLQUFMLENBQVcsQ0FBQ0gsVUFBVWpCLFNBQVNGLENBQXBCLElBQXlCWixLQUFwQyxDQURBO0FBRUhhLG1CQUFHb0IsS0FBS0MsS0FBTCxDQUFXLENBQUNGLFVBQVVsQixTQUFTRCxDQUFwQixJQUF5QmIsS0FBcEM7QUFGQSxhQUFQO0FBSUg7QUFDRCxlQUFPLEtBQVA7QUFDSCxLQXJEdUI7QUFzRHhCbUMsY0F0RHdCLHNCQXNEYnZCLENBdERhLEVBc0RWQyxDQXREVSxFQXVEeEI7QUFDSSxZQUFJdUIsY0FBYztBQUNkeEIsZUFBRyxLQUFLZSxHQUFMLENBQVMsVUFBVCxFQUFxQmYsQ0FBckIsR0FBeUJBLENBRGQ7QUFFZEMsZUFBRyxLQUFLYyxHQUFMLENBQVMsVUFBVCxFQUFxQmQsQ0FBckIsR0FBeUJBO0FBRmQsU0FBbEI7QUFJQSxhQUFLZ0IsR0FBTCxDQUFTLFVBQVQsRUFBcUJPLFdBQXJCO0FBQ0gsS0E3RHVCO0FBOER4QmIsb0JBOUR3Qiw0QkE4RFBjLElBOURPLEVBOERGO0FBQ2xCLFlBQUlDLFdBQVcsS0FBS1gsR0FBTCxDQUFTLE9BQVQsQ0FBZjtBQUNBLFlBQUlZLFlBQVksS0FBS1osR0FBTCxDQUFTLFFBQVQsQ0FBaEI7QUFDQSxZQUFJYSxZQUFZLEVBQWhCO0FBQ0EsWUFBSUMsWUFBWSxLQUFLZCxHQUFMLENBQVMsUUFBVCxDQUFoQjtBQUNBLGFBQUssSUFBSUQsSUFBSSxDQUFiLEVBQWdCQSxLQUFLVyxLQUFLSyxjQUFMLENBQW9CLE9BQXBCLElBQThCTCxLQUFLbkMsS0FBbkMsR0FBMEMsS0FBS3lCLEdBQUwsQ0FBUyxPQUFULENBQS9DLENBQWhCLEVBQW1GRCxHQUFuRixFQUF3RjtBQUNwRmMsc0JBQVVkLENBQVYsSUFBZSxFQUFmO0FBQ0EsaUJBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxLQUFLUyxLQUFLSyxjQUFMLENBQW9CLFFBQXBCLElBQStCTCxLQUFLcEMsTUFBcEMsR0FBNEMsS0FBSzBCLEdBQUwsQ0FBUyxRQUFULENBQWpELENBQWhCLEVBQXNGQyxHQUF0RixFQUEyRjtBQUN2RixvQkFBR0YsSUFBSVksUUFBSixJQUFnQlYsSUFBSVcsU0FBdkIsRUFBaUM7QUFDN0JDLDhCQUFVZCxDQUFWLEVBQWFFLENBQWIsSUFBa0JhLFVBQVVmLENBQVYsRUFBYUUsQ0FBYixDQUFsQjtBQUNILGlCQUZELE1BRUs7QUFDRFksOEJBQVVkLENBQVYsRUFBYUUsQ0FBYixJQUFrQixDQUFsQjtBQUNIO0FBQ0o7QUFDSjtBQUNELGFBQUtDLEdBQUwsQ0FBUyxRQUFULEVBQW1CVyxTQUFuQjtBQUNBLFlBQUdILEtBQUtLLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBSCxFQUFnQztBQUM1QixpQkFBS2IsR0FBTCxDQUFTLE9BQVQsRUFBa0JRLEtBQUtuQyxLQUF2QjtBQUNIO0FBQ0QsWUFBR21DLEtBQUtLLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBSCxFQUFpQztBQUM3QixpQkFBS2IsR0FBTCxDQUFTLFFBQVQsRUFBbUJRLEtBQUtwQyxNQUF4QjtBQUNIO0FBQ0osS0FwRnVCOztBQXFGeEJ1Qix1QkFBbUIsMkJBQVNhLElBQVQsRUFBYztBQUM3QixZQUFJTSxhQUFhLEVBQWpCO0FBQ0EsWUFBSXhDLFNBQVMsS0FBS3dCLEdBQUwsQ0FBUyxRQUFULENBQWI7QUFDQSxhQUFLLElBQUlELElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLQyxHQUFMLENBQVMsT0FBVCxDQUFwQixFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDeEMsaUJBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtELEdBQUwsQ0FBUyxRQUFULENBQXBCLEVBQXdDQyxHQUF4QyxFQUE2QztBQUN6Q2UsMkJBQVdDLElBQVgsQ0FBZ0I7QUFDWmhDLHVCQUFHYyxDQURTO0FBRVpiLHVCQUFHZSxDQUZTO0FBR1ppQiwyQkFBTzFDLE9BQU91QixDQUFQLEVBQVVFLENBQVY7QUFISyxpQkFBaEI7QUFLSDtBQUNKO0FBQ0QsWUFBSWtCLGFBQWE7QUFDYjNDLG9CQUFRd0MsVUFESztBQUViekMsbUJBQU8sS0FBS3lCLEdBQUwsQ0FBUyxPQUFULENBRk07QUFHYjFCLG9CQUFRLEtBQUswQixHQUFMLENBQVMsUUFBVDtBQUhLLFNBQWpCO0FBS0FvQixvQ0FBa0JDLGNBQWxCLENBQWlDRixVQUFqQyxFQUE2Q1QsSUFBN0M7QUFDSCxLQXZHdUI7QUF3R3hCWixzQkFBa0IsMEJBQVNZLElBQVQsRUFBYztBQUM1QmxCLFlBQUlDLE1BQUosQ0FBVzZCLE9BQVgsQ0FBbUIsa0JBQW5CLEVBQXVDLEVBQUMvQyxPQUFPbUMsS0FBS1MsVUFBTCxDQUFnQjVDLEtBQXhCLEVBQStCRCxRQUFRb0MsS0FBS1MsVUFBTCxDQUFnQjdDLE1BQXZELEVBQXZDO0FBQ0FrQixZQUFJQyxNQUFKLENBQVc2QixPQUFYLENBQW1CLGNBQW5CLEVBQW1DWixLQUFLUyxVQUFMLENBQWdCM0MsTUFBbkQ7QUFDSDtBQTNHdUIsQ0FBYixDQUFmO2tCQTZHZVAsTSIsImZpbGUiOiJDYW52YXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGVsfSBmcm9tIFwiYmFja2JvbmVcIjtcbmltcG9ydCBEYXRhU3RyZWFtSGFuZGxlciBmcm9tIFwiLi4vRGF0YVN0cmVhbUhhbmRsZXJcIjtcblxuY29uc3QgQ2FudmFzID0gTW9kZWwuZXh0ZW5kKHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBzY2FsZTogNSxcbiAgICAgICAgaGVpZ2h0OiAzMiwgLy8gaG93IG1hbnkgcGl4ZWxzIG9uIHRoZSBZIGF4aXNcbiAgICAgICAgd2lkdGg6IDMyLCAvLyAgaG93IG1hbnkgcGl4ZWxzIG9uIHRoZSB4IGF4aXNcbiAgICAgICAgcGl4ZWxzOiBbXSxcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICBoaWdobGlnaHRIZWxwTGluZUNvbG9yOiBcIiNGRjAwMDBcIixcbiAgICAgICAgZGVmYXVsdEhlbHBMaW5lQ29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICBoaWdoTGlnaHRDb2xvcjogXCIjNTVERDU1XCIsXG4gICAgICAgIGRyYXdIZWxwTGluZXM6IGZhbHNlLFxuICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIGRyYWdnaW5nU2Vjb25kYXJ5OiBmYWxzZSxcbiAgICAgICAgbGFzdE1vdXNlUG9zOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9LFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHM6IFtdLFxuICAgICAgICBzZWxlY3RlZFRvb2w6IHt9XG4gICAgfSxcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcImxlYXZlUm9vbVwiLCAoKSA9PiB0aGlzLnJlc2V0KCkpO1xuICAgICAgICBBcHAuZXZlbnRzLm9uKFwiY2hhbmdlRGltZW5zaW9uc1wiLCAoZSkgPT4gdGhpcy5jaGFuZ2VEaW1lbnNpb25zKGUpKTtcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcInNlbmRBbGxEYXRhVG9Vc2VyXCIsIChlKSA9PiB0aGlzLnNlbmRBbGxEYXRhVG9Vc2VyKGUpKTtcbiAgICAgICAgQXBwLmV2ZW50cy5vbihcImluaXRpYWxpemVSb29tQ2FudmFzXCIsIChlKSA9PiB0aGlzLmluaXRpYWxpemVDYW52YXMoZSkpO1xuICAgIH0sXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBwaXhlbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldChcIndpZHRoXCIpOyBpKyspIHtcbiAgICAgICAgICAgIHBpeGVsc1tpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdldChcImhlaWdodFwiKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW2ldW2pdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldChcInBpeGVsc1wiLCBwaXhlbHMpO1xuICAgIH0sXG4gICAgaW5wdXRUb1BpeGVsSW5kZXg6IGZ1bmN0aW9uIChvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuZ2V0KFwicG9zaXRpb25cIik7XG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMuZ2V0KFwic2NhbGVcIik7XG4gICAgICAgIGlmIChvZmZzZXRYID4gcG9zaXRpb24ueCAmJiBvZmZzZXRZID4gcG9zaXRpb24ueSAmJlxuICAgICAgICAgICAgb2Zmc2V0WCA8IHBvc2l0aW9uLnggKyB0aGlzLmdldChcIndpZHRoXCIpICogc2NhbGUgJiZcbiAgICAgICAgICAgIG9mZnNldFkgPCBwb3NpdGlvbi55ICsgdGhpcy5nZXQoXCJoZWlnaHRcIikgKiBzY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBNYXRoLmZsb29yKChvZmZzZXRYIC0gcG9zaXRpb24ueCkgLyBzY2FsZSksXG4gICAgICAgICAgICAgICAgeTogTWF0aC5mbG9vcigob2Zmc2V0WSAtIHBvc2l0aW9uLnkpIC8gc2NhbGUpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIHJlcG9zaXRpb24oeCwgeSlcbiAgICB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuZ2V0KFwicG9zaXRpb25cIikueCArIHgsXG4gICAgICAgICAgICB5OiB0aGlzLmdldChcInBvc2l0aW9uXCIpLnkgKyB5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0KFwicG9zaXRpb25cIiwgbmV3UG9zaXRpb24pO1xuICAgIH0sXG4gICAgY2hhbmdlRGltZW5zaW9ucyhkYXRhKXtcbiAgICAgICAgbGV0IG9sZFdpZHRoID0gdGhpcy5nZXQoXCJ3aWR0aFwiKTtcbiAgICAgICAgbGV0IG9sZEhlaWdodCA9IHRoaXMuZ2V0KFwiaGVpZ2h0XCIpO1xuICAgICAgICBsZXQgbmV3UGl4ZWxzID0gW107XG4gICAgICAgIGxldCBvbGRQaXhlbHMgPSB0aGlzLmdldChcInBpeGVsc1wiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnd2lkdGgnKT8gZGF0YS53aWR0aDogdGhpcy5nZXQoXCJ3aWR0aFwiKSk7IGkrKykge1xuICAgICAgICAgICAgbmV3UGl4ZWxzW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IChkYXRhLmhhc093blByb3BlcnR5KCdoZWlnaHQnKT8gZGF0YS5oZWlnaHQ6IHRoaXMuZ2V0KFwiaGVpZ2h0XCIpKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYoaSA8IG9sZFdpZHRoICYmIGogPCBvbGRIZWlnaHQpe1xuICAgICAgICAgICAgICAgICAgICBuZXdQaXhlbHNbaV1bal0gPSBvbGRQaXhlbHNbaV1bal07XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BpeGVsc1tpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0KFwicGl4ZWxzXCIsIG5ld1BpeGVscyk7XG4gICAgICAgIGlmKGRhdGEuaGFzT3duUHJvcGVydHkoJ3dpZHRoJykpe1xuICAgICAgICAgICAgdGhpcy5zZXQoXCJ3aWR0aFwiLCBkYXRhLndpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KCdoZWlnaHQnKSl7XG4gICAgICAgICAgICB0aGlzLnNldChcImhlaWdodFwiLCBkYXRhLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlbmRBbGxEYXRhVG9Vc2VyOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgbGV0IHBpeGVsQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHBpeGVscyA9IHRoaXMuZ2V0KFwicGl4ZWxzXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0KFwid2lkdGhcIik7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdldChcImhlaWdodFwiKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgcGl4ZWxBcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgeDogaSxcbiAgICAgICAgICAgICAgICAgICAgeTogaixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHBpeGVsc1tpXVtqXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBjYW52YXNEYXRhID0ge1xuICAgICAgICAgICAgcGl4ZWxzOiBwaXhlbEFycmF5LFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2V0KFwid2lkdGhcIiksXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2V0KFwiaGVpZ2h0XCIpXG4gICAgICAgIH07XG4gICAgICAgIERhdGFTdHJlYW1IYW5kbGVyLnNlbmRDYW52YXNEYXRhKGNhbnZhc0RhdGEsIGRhdGEpO1xuICAgIH0sXG4gICAgaW5pdGlhbGl6ZUNhbnZhczogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIEFwcC5ldmVudHMudHJpZ2dlcihcImNoYW5nZURpbWVuc2lvbnNcIiwge3dpZHRoOiBkYXRhLmNhbnZhc0RhdGEud2lkdGgsIGhlaWdodDogZGF0YS5jYW52YXNEYXRhLmhlaWdodH0pO1xuICAgICAgICBBcHAuZXZlbnRzLnRyaWdnZXIoXCJ1cGRhdGVQaXhlbHNcIiwgZGF0YS5jYW52YXNEYXRhLnBpeGVscyk7XG4gICAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBDYW52YXM7Il19

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _backbone = __webpack_require__(333);

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2RlbHMvUm9vbS5qcyJdLCJuYW1lcyI6WyJSb29tIiwiTW9kZWwiLCJleHRlbmQiLCJkZWZhdWx0cyIsInVzZXJzIiwibmFtZSIsImluaXRpYWxpemUiLCJBcHAiLCJldmVudHMiLCJvbiIsImUiLCJoYW5kbGVOZXdSb29tRGF0YSIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBT0MsZ0JBQU1DLE1BQU4sQ0FBYTtBQUN0QkMsY0FBVTtBQUNOQyxlQUFPO0FBREQsS0FEWTtBQUl0QkMsVUFBTSxFQUpnQjtBQUt0QkMsZ0JBQVksc0JBQVk7QUFBQTs7QUFDcEJDLFlBQUlDLE1BQUosQ0FBV0MsRUFBWCxDQUFjLG1CQUFkLEVBQW1DLFVBQUNDLENBQUQ7QUFBQSxtQkFBTyxNQUFLQyxpQkFBTCxDQUF1QkQsQ0FBdkIsQ0FBUDtBQUFBLFNBQW5DO0FBQ0gsS0FQcUI7QUFRdEJDLHVCQUFtQiwyQkFBU0QsQ0FBVCxFQUFXO0FBQzFCLGFBQUtFLEdBQUwsQ0FBUyxPQUFULEVBQWtCRixFQUFFLE9BQUYsQ0FBbEI7QUFDQSxhQUFLRSxHQUFMLENBQVMsTUFBVCxFQUFpQkYsRUFBRSxNQUFGLENBQWpCO0FBQ0g7QUFYcUIsQ0FBYixDQUFiO2tCQWFlVixJIiwiZmlsZSI6IlJvb20uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcmllbi9Db2RlL3Byb2plY3RzL25pZWsvZHJhd3Jvb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGVsfSBmcm9tIFwiYmFja2JvbmVcIjtcblxuY29uc3QgUm9vbSA9IE1vZGVsLmV4dGVuZCh7XG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgdXNlcnM6IHt9LFxuICAgIH0sXG4gICAgbmFtZTogJycsXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBBcHAuZXZlbnRzLm9uKFwidXBkYXRlQ3VycmVudFJvb21cIiwgKGUpID0+IHRoaXMuaGFuZGxlTmV3Um9vbURhdGEoZSkpO1xuICAgIH0sXG4gICAgaGFuZGxlTmV3Um9vbURhdGE6IGZ1bmN0aW9uKGUpe1xuICAgICAgICB0aGlzLnNldChcInVzZXJzXCIsIGVbJ3VzZXJzJ10pO1xuICAgICAgICB0aGlzLnNldChcIm5hbWVcIiwgZVsnbmFtZSddKTtcbiAgICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IFJvb207Il19

/***/ })
/******/ ]);