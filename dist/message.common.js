module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "f2a0");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0074":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__("3e94");
var definePropertyModule = __webpack_require__("6c01");
var createPropertyDescriptor = __webpack_require__("7e3c");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "03c2":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d45e");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "064b":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var call = __webpack_require__("cbac");
var propertyIsEnumerableModule = __webpack_require__("c829");
var createPropertyDescriptor = __webpack_require__("7e3c");
var toIndexedObject = __webpack_require__("097d");
var toPropertyKey = __webpack_require__("3e94");
var hasOwn = __webpack_require__("c7e7");
var IE8_DOM_DEFINE = __webpack_require__("62ea");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "081e":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "097d":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("96a5");
var requireObjectCoercible = __webpack_require__("c39c");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "09b0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_babel_loader_8_2_3_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("438f");
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_babel_loader_8_2_3_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_babel_loader_8_2_3_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_babel_loader_8_2_3_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0b57":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "0b61":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "1262":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var TO_STRING_TAG_SUPPORT = __webpack_require__("3fa4");
var isCallable = __webpack_require__("081e");
var classofRaw = __webpack_require__("cc43");
var wellKnownSymbol = __webpack_require__("519f");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "13eb":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "1576":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("3fa4");
var redefine = __webpack_require__("7219");
var toString = __webpack_require__("cdf3");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "18aa":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var call = __webpack_require__("cbac");
var isCallable = __webpack_require__("081e");
var isObject = __webpack_require__("9a02");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "18fd":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("445a");
var hasOwn = __webpack_require__("c7e7");
var wrappedWellKnownSymbolModule = __webpack_require__("d42b");
var defineProperty = __webpack_require__("6c01").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "1ffe":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("b0c4");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "2409":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "265d":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var hasOwn = __webpack_require__("c7e7");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "28dc":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("f4b1");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "2946":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "2aa5":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var toIntegerOrInfinity = __webpack_require__("4799");
var toString = __webpack_require__("54ab");
var requireObjectCoercible = __webpack_require__("c39c");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "2ccb":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("c4ae");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "34bc":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("9153");
var store = __webpack_require__("efd9");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "3cf4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"674fe0ca-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./src/message.vue?vue&type=template&id=5a2a617e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"dialog",staticClass:"message fade",class:{ mask: _vm.isShowMask, 'message-show': _vm.show },on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.messageFadeClick.apply(null, arguments)}}},[_c('div',{staticClass:"message-dialog",class:_vm.className},[_c('div',{staticClass:"message-content",style:({ height: _vm.height || 'inherit' }),on:{"click":function($event){$event.stopPropagation();$event.preventDefault();}}},[(_vm.title)?_c('div',{staticClass:"message-header"},[_c('div',{staticClass:"message-title",domProps:{"innerHTML":_vm._s(_vm.title)}})]):_vm._e(),(_vm.contents)?_c('div',{ref:"body",staticClass:"message-body"},[_c('div',{staticClass:"message-body-content",domProps:{"innerHTML":_vm._s(_vm.dynamicContents)}})]):_vm._e(),(_vm.buttons.length > 0)?_c('div',{staticClass:"message-footer"},_vm._l((_vm.buttons),function(buttonItem,index){return _c('div',{key:index,staticClass:"message-button",class:buttonItem.className,domProps:{"innerHTML":_vm._s(buttonItem.label)},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.buttonClick(index, buttonItem)}}},[_vm._v(_vm._s(buttonItem.label))])}),0):_vm._e()])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/message.vue?vue&type=template&id=5a2a617e&


/***/ }),

/***/ "3e94":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("a434");
var isSymbol = __webpack_require__("62b4");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "3fa4":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("519f");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "41a4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var requireObjectCoercible = __webpack_require__("c39c");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "433e":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("dbce");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "438f":
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
module.exports = {
  data: function data() {
    return {
      initCallback: null,
      // 初始化后的弹窗的回调函数（会传入当前弹窗的$body参数）
      show: false,
      // 是否显示弹层
      isShowMask: false,
      // 是否显示弹层的遮罩层
      icon: "",
      // 内容消息的icon，默认提供：message-icon-info,message-icon-success,message-icon-warning,message-icon-error
      autoHide: true,
      //点击遮罩层是否自动隐藏
      // animated: true, //是否添加动画
      className: null,
      // 弹层的样式名称
      contents: null,
      // 弹窗的内容（支持HTML），如果为null或者''就不会展示
      title: null,
      // 弹窗的头部标题，如果为null或者''就不会展示
      height: "inherit",
      // 弹层高度（默认'inherit'）
      buttons: [],
      //弹层的底部按钮列表[{className|label|callback}],如果为null或者数组长度为0就不会展示
      onClose: null,
      // 用户关闭后的回调函数（系统自定义）
      scrollerData: {
        startPageY: 0,
        // touchstart 垂直位置
        startMaxScroll: 0,
        // touchstart 最大滚动垂直
        elScroll: null,
        // 当前滚动事件的dom元素
        selectorScrollable: null // 指定标记的滚动元素，如果为null就指定默认元素，指定子元素或父元素皆可

      } // scroller事件对象数据，如果是false或null表示不绑定事件

    };
  },
  computed: {
    dynamicContents: function dynamicContents() {
      if (this.icon) {
        return '<i class="' + this.icon + '"></i>' + this.contents;
      }

      return this.contents;
    }
  },
  watch: {
    show: function show(newVal) {
      if (newVal === true) {
        document.querySelector("html").classList.add("noscroll");
      } else {
        document.querySelector("html").classList.remove("noscroll");
      }
    }
  },
  mounted: function mounted() {//this.init();
  },
  methods: {
    // 弹层数据初始化
    init: function init() {
      var _this = this;

      this.show = true;
      this.$nextTick(function () {
        if (_this.initCallback && typeof _this.initCallback === "function") {
          _this.initCallback(_this.$refs.body);
        }

        if (!_this.scrollerData) {
          return;
        }

        _this.$refs.dialog.addEventListener("touchstart", _this.noScroll);

        _this.$refs.dialog.addEventListener("touchmove", _this.noScroll);

        _this.$refs.dialog.addEventListener("touchend", _this.noScroll);

        if (_this.scrollerData == true) {
          return;
        }

        if (_this.scrollerData.selectorScrollable) {
          _this.scrollerData.selectorScrollable = _this.$refs.dialog.querySelector(_this.scrollerData.selectorScrollable);
        }

        if (!_this.scrollerData.selectorScrollable || _this.scrollerData.selectorScrollable.length == 0) {
          _this.scrollerData.selectorScrollable = _this.$refs.body;
        }
      });
    },
    // 重置弹窗，主要用于当前弹窗正在显示的时候又再显示了一个弹窗，目前的做法是在修改当前弹窗的属性，并显示
    reset: function reset() {
      if (this.show) {
        this.destroyEvent();
      }
    },

    /**
     * 让浮层背后整个页面禁止滚动，2种方法来一起使用
     * 1.通过CSS处理让页面的HTML不滚动，但在Safari等浏览器中还是可以滚动，所以再加上方法2
     * 2.在浮层touchmove的时候，阻止默认事件达到避免滚动的问题。但这样如果浮层自己也有滚动，那么这种处理会让浮层里面自己的滚动行为也无法触发这样就得计算浮层滚动是否到了底部位置如果不能再滚动的话就阻止滚动事件
     * 目前测试下来触发边缘位置时会有滚动情况
     * @param {Event} e 事件的类型：'touchstart','touchmove','touchend'
     */
    noScroll: function noScroll(e) {
      if (this.scrollerData == true) {
        if (e.type === "touchmove") {
          e.preventDefault();
          e.stopPropagation();
        }

        return;
      }

      var events = e.touches[0] || e;

      if (e.type === "touchstart") {
        // 先求得是不是滚动元素或者滚动元素的子元素
        var elTarget = e.target,
            elScroll = null;

        var isParent = function isParent(el, parentEl, stopEl) {
          if (el.nodeName === "BODY" || el === stopEl) {
            return false;
          } else if (el === parentEl) {
            return true;
          } else {
            return isParent(el.parentNode, parentEl, stopEl);
          }
        };

        if (elTarget === this.scrollerData.selectorScrollable || isParent(e.target, this.scrollerData.selectorScrollable, this.$refs.dialog)) {
          elScroll = this.scrollerData.selectorScrollable;
        } else {
          return;
        }

        this.scrollerData.elScroll = elScroll;
        this.scrollerData.startPageY = events.pageY;
        this.scrollerData.startMaxScroll = elScroll.scrollHeight - elScroll.clientHeight;
      } else if (e.type === "touchmove") {
        if (this.scrollerData.startMaxScroll <= 0) {
          e.preventDefault();
        }

        var _elScroll = this.scrollerData.elScroll;

        if (!_elScroll) {
          return;
        } // 移动距离


        var distanceY = events.pageY - this.scrollerData.startPageY; // 当前的滚动高度

        var scrollTop = _elScroll.scrollTop; // 上下边缘检测

        if (distanceY > 0 && scrollTop == 0) {
          // 往上滑，并且到头
          // 禁止滚动的默认行为
          e.preventDefault();
          return;
        } // 下边缘检测


        if (distanceY < 0 && scrollTop + 1 >= this.scrollerData.startMaxScroll) {
          // 往下滑，并且到头
          // 禁止滚动的默认行为
          e.preventDefault();
          return;
        }
      } else if (e.type == "touchend") {
        this.scrollerData.startMaxScroll = 0;
      }
    },
    //按钮点击事件
    buttonClick: function buttonClick(index, buttonItem) {
      if (buttonItem.callback && typeof buttonItem.callback === "function") {
        this.onClose(buttonItem.callback, this.$refs.body);
      }
    },
    //点击遮罩层是否隐藏
    messageFadeClick: function messageFadeClick() {
      if (this.autoHide !== true) {
        return;
      }

      this.autoHide = false;

      if (this.onClose && typeof this.onClose === "function") {
        this.onClose();
      }
    },
    // 事件绑定销毁
    destroyEvent: function destroyEvent() {
      if (this.scrollerData && this.scrollerData.selectorScrollable) {
        this.scrollerData.selectorScrollable.removeEventListener("touchstart", this.noScroll);
        this.scrollerData.selectorScrollable.removeEventListener("touchmove", this.noScroll);
        this.scrollerData.selectorScrollable.removeEventListener("touchend", this.noScroll);
      }

      this.scrollerData = {
        startPageY: 0,
        // touchstart 垂直位置
        startMaxScroll: 0,
        // touchstart 最大滚动垂直
        elScroll: null,
        selectorScrollable: null // 指定标记的滚动元素，如果为null就指定默认元素，指定子元素或父元素皆可

      };
    },
    // destroy
    destroy: function destroy() {
      this.initCallback = null;
      this.show = false;
      this.isShowMask = false;
      this.icon = "";
      this.autoHide = true; //				this.animated = true;

      this.className = null;
      this.contents = null;
      this.title = null;
      this.height = null;
      this.buttons = [];
      this.destroyEvent();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.destroy();
  }
};

/***/ }),

/***/ "445a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");

module.exports = global;


/***/ }),

/***/ "4704":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var hasOwn = __webpack_require__("c7e7");
var toIndexedObject = __webpack_require__("097d");
var indexOf = __webpack_require__("ee4f").indexOf;
var hiddenKeys = __webpack_require__("f448");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "4748":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d45e");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "4799":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "4b1a":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d45e");
var uncurryThis = __webpack_require__("c252");
var getOwnPropertyNamesModule = __webpack_require__("9cd9");
var getOwnPropertySymbolsModule = __webpack_require__("b2e9");
var anObject = __webpack_require__("97d8");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "4f29":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var isCallable = __webpack_require__("081e");
var store = __webpack_require__("efd9");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "519f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var shared = __webpack_require__("34bc");
var hasOwn = __webpack_require__("c7e7");
var uid = __webpack_require__("0b61");
var NATIVE_SYMBOL = __webpack_require__("5ce1");
var USE_SYMBOL_AS_UID = __webpack_require__("7b76");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "53b8":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("34bc");
var uid = __webpack_require__("0b61");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "54ab":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var classof = __webpack_require__("1262");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "5c75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("4704");
var enumBugKeys = __webpack_require__("988d");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "5ce1":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("a0a0");
var fails = __webpack_require__("c814");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "61a6":
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (bind ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "62b4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var getBuiltIn = __webpack_require__("d45e");
var isCallable = __webpack_require__("081e");
var isPrototypeOf = __webpack_require__("afdf");
var USE_SYMBOL_AS_UID = __webpack_require__("7b76");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "62ea":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var fails = __webpack_require__("c814");
var createElement = __webpack_require__("c4ae");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "6446":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("c814");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "6c01":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var DESCRIPTORS = __webpack_require__("6446");
var IE8_DOM_DEFINE = __webpack_require__("62ea");
var anObject = __webpack_require__("97d8");
var toPropertyKey = __webpack_require__("3e94");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "6d9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var fails = __webpack_require__("c814");
var isCallable = __webpack_require__("081e");
var classof = __webpack_require__("1262");
var getBuiltIn = __webpack_require__("d45e");
var inspectSource = __webpack_require__("4f29");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "6e68":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("097d");
var addToUnscopables = __webpack_require__("9acd");
var Iterators = __webpack_require__("db7f");
var InternalStateModule = __webpack_require__("e13b");
var defineIterator = __webpack_require__("b45e");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "7219":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");
var hasOwn = __webpack_require__("c7e7");
var createNonEnumerableProperty = __webpack_require__("d3a9");
var setGlobal = __webpack_require__("a2c2");
var inspectSource = __webpack_require__("4f29");
var InternalStateModule = __webpack_require__("e13b");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("265d").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "72ae":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("18fd");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "7422":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _message_vue_vue_type_template_id_5a2a617e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3cf4");
/* harmony import */ var _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("09b0");
/* harmony import */ var _message_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cd53");
/* harmony import */ var _node_modules_vue_loader_15_9_8_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cba8");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_8_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_vue_vue_type_template_id_5a2a617e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _message_vue_vue_type_template_id_5a2a617e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7464":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__("c252");
var anObject = __webpack_require__("97d8");
var aPossiblePrototype = __webpack_require__("2946");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "75a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("6446");
var uncurryThis = __webpack_require__("c252");
var call = __webpack_require__("cbac");
var fails = __webpack_require__("c814");
var objectKeys = __webpack_require__("5c75");
var getOwnPropertySymbolsModule = __webpack_require__("b2e9");
var propertyIsEnumerableModule = __webpack_require__("c829");
var toObject = __webpack_require__("41a4");
var IndexedObject = __webpack_require__("96a5");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "79b5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");
var inspectSource = __webpack_require__("4f29");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "79e4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "7b76":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("5ce1");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "7e3c":
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

/***/ "82b8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8e04":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("cc43");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "9153":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "9207":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("6c01").f;
var hasOwn = __webpack_require__("c7e7");
var wellKnownSymbol = __webpack_require__("519f");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "9460":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("961e");
var DESCRIPTORS = __webpack_require__("6446");
var global = __webpack_require__("ca14");
var uncurryThis = __webpack_require__("c252");
var hasOwn = __webpack_require__("c7e7");
var isCallable = __webpack_require__("081e");
var isPrototypeOf = __webpack_require__("afdf");
var toString = __webpack_require__("54ab");
var defineProperty = __webpack_require__("6c01").f;
var copyConstructorProperties = __webpack_require__("b61d");

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = uncurryThis(SymbolPrototype.toString);
  var symbolValueOf = uncurryThis(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "961e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var getOwnPropertyDescriptor = __webpack_require__("064b").f;
var createNonEnumerableProperty = __webpack_require__("d3a9");
var redefine = __webpack_require__("7219");
var setGlobal = __webpack_require__("a2c2");
var copyConstructorProperties = __webpack_require__("b61d");
var isForced = __webpack_require__("a3e2");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "96a5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var uncurryThis = __webpack_require__("c252");
var fails = __webpack_require__("c814");
var classof = __webpack_require__("cc43");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "975b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("961e");
var assign = __webpack_require__("75a1");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "97d8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isObject = __webpack_require__("9a02");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "988d":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "9a02":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("081e");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "9a1e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var toAbsoluteIndex = __webpack_require__("a10c");
var lengthOfArrayLike = __webpack_require__("28dc");
var createProperty = __webpack_require__("0074");

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "9acd":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("519f");
var create = __webpack_require__("a30f");
var definePropertyModule = __webpack_require__("6c01");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9cd9":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("4704");
var enumBugKeys = __webpack_require__("988d");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "9d8d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a0a0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var userAgent = __webpack_require__("4748");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "a10c":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("4799");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "a2c2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "a30f":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("97d8");
var defineProperties = __webpack_require__("e921");
var enumBugKeys = __webpack_require__("988d");
var hiddenKeys = __webpack_require__("f448");
var html = __webpack_require__("03c2");
var documentCreateElement = __webpack_require__("c4ae");
var sharedKey = __webpack_require__("53b8");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "a3e2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("c814");
var isCallable = __webpack_require__("081e");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var call = __webpack_require__("cbac");
var isObject = __webpack_require__("9a02");
var isSymbol = __webpack_require__("62b4");
var getMethod = __webpack_require__("1ffe");
var ordinaryToPrimitive = __webpack_require__("18aa");
var wellKnownSymbol = __webpack_require__("519f");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "a64e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var DOMIterables = __webpack_require__("0b57");
var DOMTokenListPrototype = __webpack_require__("2ccb");
var ArrayIteratorMethods = __webpack_require__("6e68");
var createNonEnumerableProperty = __webpack_require__("d3a9");
var wellKnownSymbol = __webpack_require__("519f");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "ad0f":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var aCallable = __webpack_require__("b0c4");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "afdf":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "affe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("961e");
var global = __webpack_require__("ca14");
var getBuiltIn = __webpack_require__("d45e");
var apply = __webpack_require__("61a6");
var call = __webpack_require__("cbac");
var uncurryThis = __webpack_require__("c252");
var IS_PURE = __webpack_require__("9153");
var DESCRIPTORS = __webpack_require__("6446");
var NATIVE_SYMBOL = __webpack_require__("5ce1");
var fails = __webpack_require__("c814");
var hasOwn = __webpack_require__("c7e7");
var isArray = __webpack_require__("8e04");
var isCallable = __webpack_require__("081e");
var isObject = __webpack_require__("9a02");
var isPrototypeOf = __webpack_require__("afdf");
var isSymbol = __webpack_require__("62b4");
var anObject = __webpack_require__("97d8");
var toObject = __webpack_require__("41a4");
var toIndexedObject = __webpack_require__("097d");
var toPropertyKey = __webpack_require__("3e94");
var $toString = __webpack_require__("54ab");
var createPropertyDescriptor = __webpack_require__("7e3c");
var nativeObjectCreate = __webpack_require__("a30f");
var objectKeys = __webpack_require__("5c75");
var getOwnPropertyNamesModule = __webpack_require__("9cd9");
var getOwnPropertyNamesExternal = __webpack_require__("fec6");
var getOwnPropertySymbolsModule = __webpack_require__("b2e9");
var getOwnPropertyDescriptorModule = __webpack_require__("064b");
var definePropertyModule = __webpack_require__("6c01");
var propertyIsEnumerableModule = __webpack_require__("c829");
var arraySlice = __webpack_require__("13eb");
var redefine = __webpack_require__("7219");
var shared = __webpack_require__("34bc");
var sharedKey = __webpack_require__("53b8");
var hiddenKeys = __webpack_require__("f448");
var uid = __webpack_require__("0b61");
var wellKnownSymbol = __webpack_require__("519f");
var wrappedWellKnownSymbolModule = __webpack_require__("d42b");
var defineWellKnownSymbol = __webpack_require__("18fd");
var setToStringTag = __webpack_require__("9207");
var InternalStateModule = __webpack_require__("e13b");
var $forEach = __webpack_require__("d796").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "b0c4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");
var tryToString = __webpack_require__("82b8");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "b2e9":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "b45e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("961e");
var call = __webpack_require__("cbac");
var IS_PURE = __webpack_require__("9153");
var FunctionName = __webpack_require__("265d");
var isCallable = __webpack_require__("081e");
var createIteratorConstructor = __webpack_require__("fe2f");
var getPrototypeOf = __webpack_require__("f97a");
var setPrototypeOf = __webpack_require__("7464");
var setToStringTag = __webpack_require__("9207");
var createNonEnumerableProperty = __webpack_require__("d3a9");
var redefine = __webpack_require__("7219");
var wellKnownSymbol = __webpack_require__("519f");
var Iterators = __webpack_require__("db7f");
var IteratorsCore = __webpack_require__("d582");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "b61d":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("c7e7");
var ownKeys = __webpack_require__("4b1a");
var getOwnPropertyDescriptorModule = __webpack_require__("064b");
var definePropertyModule = __webpack_require__("6c01");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "c252":
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "c39c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "c4ae":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isObject = __webpack_require__("9a02");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "c7e7":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");
var toObject = __webpack_require__("41a4");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "c813":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("c814");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "c814":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "c829":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "ca14":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("2409")))

/***/ }),

/***/ "cba8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "cbac":
/***/ (function(module, exports) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "cc43":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("c252");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "cd53":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9d8d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cdf3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("3fa4");
var classof = __webpack_require__("1262");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "d3a9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var definePropertyModule = __webpack_require__("6c01");
var createPropertyDescriptor = __webpack_require__("7e3c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "d42b":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("519f");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "d45e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isCallable = __webpack_require__("081e");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d582":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("c814");
var isCallable = __webpack_require__("081e");
var create = __webpack_require__("a30f");
var getPrototypeOf = __webpack_require__("f97a");
var redefine = __webpack_require__("7219");
var wellKnownSymbol = __webpack_require__("519f");
var IS_PURE = __webpack_require__("9153");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "d796":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("ad0f");
var uncurryThis = __webpack_require__("c252");
var IndexedObject = __webpack_require__("96a5");
var toObject = __webpack_require__("41a4");
var lengthOfArrayLike = __webpack_require__("28dc");
var arraySpeciesCreate = __webpack_require__("433e");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "db7f":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "dbce":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var isArray = __webpack_require__("8e04");
var isConstructor = __webpack_require__("6d9b");
var isObject = __webpack_require__("9a02");
var wellKnownSymbol = __webpack_require__("519f");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "e13b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("79b5");
var global = __webpack_require__("ca14");
var uncurryThis = __webpack_require__("c252");
var isObject = __webpack_require__("9a02");
var createNonEnumerableProperty = __webpack_require__("d3a9");
var hasOwn = __webpack_require__("c7e7");
var shared = __webpack_require__("efd9");
var sharedKey = __webpack_require__("53b8");
var hiddenKeys = __webpack_require__("f448");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "e921":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("6446");
var definePropertyModule = __webpack_require__("6c01");
var anObject = __webpack_require__("97d8");
var toIndexedObject = __webpack_require__("097d");
var objectKeys = __webpack_require__("5c75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "ee4f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("097d");
var toAbsoluteIndex = __webpack_require__("a10c");
var lengthOfArrayLike = __webpack_require__("28dc");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "efd9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var setGlobal = __webpack_require__("a2c2");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "f2a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.15@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("affe");

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("9460");

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("1576");

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("72ae");

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("6e68");

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("f56c");

// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("a64e");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.16.3@@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/_core-js@3.19.2@core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("975b");

// EXTERNAL MODULE: ./src/message.vue
var src_message = __webpack_require__("7422");

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/index.js



/**
 * 作者：yujinjin9@126.com
 * 时间：2018-03-26
 * 描述：弹窗插件
 */


/* harmony default export */ var src_0 = ((function () {
  var ModalsConstructor = external_vue_default.a.extend(src_message["default"]); // 弹窗实例

  var messageInstance = null,
      delayCloseTimerId = null; // 默认配置选项

  var defaults = {
    initCallback: null,
    //初始化后的回调方法
    autoHide: true,
    //点击遮罩层是否隐藏
    isShowMask: false,
    // 是否显示遮罩层
    icon: "",
    // 内容消息的icon，默认提供：info,success,warning,error
    delay: 0,
    // 窗口多少毫秒后自动关闭，为0时，不自动关闭
    //		animated: true, // 是否添加动画
    className: null,
    // 弹窗样式
    contents: null,
    // 弹窗内容
    title: null,
    // 标题
    height: null,
    // 弹层高度
    buttons: [] // {className|label|callback}

  }; // 关闭

  var onClose = function onClose(callback) {
    if (callback && typeof callback === "function") {
      var args = [];

      for (var i = 1, j = arguments.length; i < j; i++) {
        args.push(arguments[i]);
      }

      args.push(messageInstance.$refs.body);

      if (callback.apply(null, args) === false) {
        //如果返回值是false就不自动关闭弹窗
        return;
      }
    }

    if (messageInstance) {
      messageInstance.destroy();
      messageInstance.$el.parentNode.removeChild(messageInstance.$el);
      messageInstance = null;
    }

    if (delayCloseTimerId) {
      clearTimeout(delayCloseTimerId);
      delayCloseTimerId = null;
    }
  }; //创建实例


  var createInstance = function createInstance(options) {
    messageInstance = new ModalsConstructor({
      el: document.createElement("div"),
      data: options
    });
    messageInstance.onClose = onClose;
    return messageInstance;
  }; // 显示弹窗


  var showMessage = function showMessage(options) {
    var _options = Object.assign({}, defaults, options, {
      show: false
    });

    if (!messageInstance) {
      messageInstance = createInstance(_options);
      document.body.appendChild(messageInstance.$el);
    } else {
      messageInstance.reset();

      for (var prop in _options) {
        if (messageInstance.hasOwnProperty(prop)) {
          messageInstance[prop] = _options[prop];
        }
      }
    }

    messageInstance.init();

    if (delayCloseTimerId) {
      clearTimeout(delayCloseTimerId);
      delayCloseTimerId = null;
    }

    if (typeof _options.delay == "number" && _options.delay > 100) {
      delayCloseTimerId = setTimeout(function () {
        return onClose(_options.onEscape);
      }, _options.delay);
    }

    return messageInstance;
  }; // 初始化弹窗信息配置选项


  var initMessageOptions = function initMessageOptions(contents, callBackFun, options, type) {
    var _options = {};

    if (_typeof(contents) === "object") {
      _options = Object.assign({}, contents);
    } else if (typeof contents === "string") {
      _options.contents = contents;
    }

    if (typeof options === "number") {
      _options.delay = options;
    } else if (_typeof(options) === "object") {
      _options = Object.assign(_options, options);
    }

    if (!_options.className) {
      _options.className = type;
    }

    _options.scrollerData = true;
    if (!_options.icon) _options.icon = "message-icon-" + type;
    if (callBackFun) _options.onEscape = callBackFun;
    return _options;
  }; // 弹窗对象


  var message = function message(options) {
    if (typeof options === "string") {
      return message.info(options);
    } else if (options.type && message[options.type]) {
      return message[options.type](options);
    } else if (_typeof(options) === "object") {
      return showMessage(options);
    }
  };

  Object.assign(message, {
    // 成功提示
    success: function success(contents, callBackFun, options) {
      var _options = initMessageOptions(contents || "成功了!", callBackFun, options, "success");

      if (!_options.delay) {
        //默认2秒隐藏
        _options.delay = 2000;
      }

      return showMessage(_options);
    },
    // 信息提示
    info: function info(contents, callBackFun, options) {
      var _options = initMessageOptions(contents, callBackFun, options, "info");

      if (!_options.delay) {
        //默认2秒隐藏
        _options.delay = 2000;
      }

      return showMessage(_options);
    },
    // 警告提示
    warning: function warning(contents, callBackFun, options) {
      var _options = initMessageOptions(contents, callBackFun, options, "warning");

      if (!_options.delay) {
        //默认2秒隐藏
        _options.delay = 2000;
      }

      return showMessage(_options);
    },
    // 错语提示
    error: function error(contents, callBackFun, options) {
      var _options = initMessageOptions(contents || "出错了!", callBackFun, Object.assign(options || {}, {
        isShowMask: true
      }), "error");

      if (!_options.delay) {
        //默认3秒隐藏
        _options.delay = 30000;
      }

      return showMessage(_options);
    },
    // 确认提示
    alert: function alert(contents, callBackFun, title, label) {
      var _options = {
        title: title || "提示",
        className: "alert",
        autoHide: false,
        isShowMask: true,
        scrollerData: true,
        buttons: [{
          className: "alert",
          label: label || "确认",
          callback: callBackFun
        }]
      };

      if (_typeof(contents) === "object") {
        _options = Object.assign(_options, contents);
      } else if (typeof contents === "string") {
        _options.contents = contents;
      }

      return showMessage(_options);
    },
    // 确认or取消提示
    confirm: function confirm(contents, callBackFun, buttons, title) {
      var _options = {
        title: title || "提示",
        className: "confirm",
        contents: contents,
        isShowMask: true,
        autoHide: false,
        scrollerData: true,
        buttons: [{
          className: "cancel",
          label: "取消",
          callback: function callback($body) {
            return callBackFun(false, $body);
          }
        }, {
          className: "ok",
          label: "确认",
          callback: function callback($body) {
            return callBackFun(true, $body);
          }
        }]
      };

      if (_typeof(contents) === "object") {
        _options = Object.assign(_options, contents);
      } else if (typeof contents === "string") {
        _options.contents = contents;
      }

      if (buttons && buttons.length == 2) {
        if (typeof buttons[0] == "string") {
          _options.buttons[0].label = buttons[0];
        } else {
          Object.assign(_options.buttons[0], buttons[0]);
        }

        if (typeof buttons[1] == "string") {
          _options.buttons[1].label = buttons[1];
        } else {
          Object.assign(_options.buttons[1], buttons[1]);
        }
      } else if (buttons) {
        _options.buttons = buttons;
      }

      return showMessage(_options);
    },
    // 提示输入框
    prompt: function prompt(title, callBackFun, labels, options) {
      var _options = {
        title: title || "提示",
        className: "prompt",
        contents: "<input class='input-text' autocomplete='off' type='text' placeholder='请输入内容' />",
        isShowMask: true,
        autoHide: false,
        //				scrollerData: true,
        buttons: [{
          className: "cancel",
          label: "取消",
          callback: function callback($body) {
            if (callBackFun && typeof callBackFun === "function") {
              return callBackFun(false, $body.querySelector("input[type='text']").value, $body);
            }
          }
        }, {
          className: "ok",
          label: "确认",
          callback: function callback($body) {
            if (callBackFun && typeof callBackFun === "function") {
              return callBackFun(true, $body.querySelector("input[type='text']").value, $body);
            }
          }
        }]
      };

      if (labels && labels instanceof Array) {
        _options.buttons[0].label = labels[0] ? labels[0] : _options.buttons[0].label;
        _options.buttons[1].label = labels[1] ? labels[1] : _options.buttons[1].label;
      }

      if (options && _typeof(options) === "object") {
        _options = Object.assign(_options, options);
      }

      return showMessage(_options);
    },
    // 多个按钮并排
    multiple: function multiple(contents, buttons, title, options) {
      var _options = {
        title: title || "提示信息",
        className: "multiple",
        isShowMask: true,
        autoHide: false,
        contents: contents,
        buttons: buttons
      };

      if (options && _typeof(options) === "object") {
        _options = Object.assign(_options, options);
      }

      return showMessage(_options);
    },
    // 多个按钮竖排
    vertical: function vertical(contents, buttons, title, options) {
      var _options = {
        title: title || "提示信息",
        className: "vertical",
        isShowMask: true,
        autoHide: false,
        contents: contents,
        buttons: buttons
      };

      if (options && _typeof(options) === "object") {
        _options = Object.assign(_options, options);
      }

      return showMessage(_options);
    },
    // 多个按钮底部
    bottomSheet: function bottomSheet(contents, buttons, options) {
      var _options = {
        className: "bottom-sheet",
        isShowMask: true,
        contents: contents,
        buttons: buttons
      };

      if (options && _typeof(options) === "object") {
        _options = Object.assign(_options, options);
      }

      return showMessage(_options);
    },
    close: function close(callback) {
      // 关闭弹窗
      onClose(callback);
    }
  });
  return {
    install: function install(Vue, options) {
      if (options) {
        defaults = Object.assign(defaults, options);
      }

      Vue.prototype.$message = message;
    },
    get: function get(options) {
      if (options) {
        defaults = Object.assign(defaults, options);
      }

      return message;
    }
  };
})());
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.15@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "f448":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "f4b1":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("4799");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "f56c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("2aa5").charAt;
var toString = __webpack_require__("54ab");
var InternalStateModule = __webpack_require__("e13b");
var defineIterator = __webpack_require__("b45e");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "f97a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("ca14");
var hasOwn = __webpack_require__("c7e7");
var isCallable = __webpack_require__("081e");
var toObject = __webpack_require__("41a4");
var sharedKey = __webpack_require__("53b8");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("c813");

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "fe2f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("d582").IteratorPrototype;
var create = __webpack_require__("a30f");
var createPropertyDescriptor = __webpack_require__("7e3c");
var setToStringTag = __webpack_require__("9207");
var Iterators = __webpack_require__("db7f");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "fec6":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__("cc43");
var toIndexedObject = __webpack_require__("097d");
var $getOwnPropertyNames = __webpack_require__("9cd9").f;
var arraySlice = __webpack_require__("9a1e");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ })

/******/ })["default"];
//# sourceMappingURL=message.common.js.map