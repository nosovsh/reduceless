(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Reduceless"] = factory();
	else
		root["Reduceless"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initialStateReducer = exports.connectSlicedState = exports.replaceStateByPath = exports.setStateByPath = exports.wrapReducerWithSetGlobalState = exports.update = undefined;

	var _update = __webpack_require__(41);

	var _update2 = _interopRequireDefault(_update);

	var _setStateByPath = __webpack_require__(40);

	var _setStateByPath2 = _interopRequireDefault(_setStateByPath);

	var _wrapReducerWithSetGlobalState = __webpack_require__(77);

	var _wrapReducerWithSetGlobalState2 = _interopRequireDefault(_wrapReducerWithSetGlobalState);

	var _connectSlicedState = __webpack_require__(74);

	var _connectSlicedState2 = _interopRequireDefault(_connectSlicedState);

	var _initialStateReducer = __webpack_require__(75);

	var _initialStateReducer2 = _interopRequireDefault(_initialStateReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.update = _update2.default;
	exports.wrapReducerWithSetGlobalState = _wrapReducerWithSetGlobalState2.default;
	exports.setStateByPath = _setStateByPath2.default;
	exports.replaceStateByPath = _setStateByPath2.default;
	exports.connectSlicedState = _connectSlicedState2.default;
	exports.initialStateReducer = _initialStateReducer2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(23);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  warning = function (condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var checkGlobal = __webpack_require__(117);

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(typeof self == 'object' && self);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(typeof this == 'object' && this);

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var _assign = __webpack_require__(35);

	var ReactCurrentOwner = __webpack_require__(36);

	var warning = __webpack_require__(3);
	var canDefineProperty = __webpack_require__(38);

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(
	      /* eslint-disable no-proto */
	      config.__proto__ == null || config.__proto__ === Object.prototype,
	      /* eslint-enable no-proto */
	      'React.createElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
	      ref = !config.hasOwnProperty('ref') || Object.getOwnPropertyDescriptor(config, 'ref').get ? null : config.ref;
	      key = !config.hasOwnProperty('key') || Object.getOwnPropertyDescriptor(config, 'key').get ? null : '' + config.key;
	    } else {
	      ref = config.ref === undefined ? null : config.ref;
	      key = config.key === undefined ? null : '' + config.key;
	    }
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    // Create dummy `key` and `ref` property to `props` to warn users
	    // against its use
	    if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	      if (!props.hasOwnProperty('key')) {
	        Object.defineProperty(props, 'key', {
	          get: function () {
	            if (!specialPropKeyWarningShown) {
	              specialPropKeyWarningShown = true;
	              process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
	            }
	            return undefined;
	          },
	          configurable: true
	        });
	      }
	      if (!props.hasOwnProperty('ref')) {
	        Object.defineProperty(props, 'ref', {
	          get: function () {
	            if (!specialPropRefWarningShown) {
	              specialPropRefWarningShown = true;
	              process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', typeof type === 'function' && 'displayName' in type ? type.displayName : 'Element') : void 0;
	            }
	            return undefined;
	          },
	          configurable: true
	        });
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(
	      /* eslint-disable no-proto */
	      config.__proto__ == null || config.__proto__ === Object.prototype,
	      /* eslint-enable no-proto */
	      'React.cloneElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
	    }
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(106),
	    getValue = __webpack_require__(135);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(49),
	    baseKeys = __webpack_require__(108),
	    indexKeys = __webpack_require__(142),
	    isArrayLike = __webpack_require__(18),
	    isIndex = __webpack_require__(31),
	    isPrototype = __webpack_require__(56);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(2),
	    isSymbol = __webpack_require__(20);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(20);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(148),
	    listCacheDelete = __webpack_require__(149),
	    listCacheGet = __webpack_require__(150),
	    listCacheHas = __webpack_require__(151),
	    listCacheSet = __webpack_require__(152);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(62);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(146);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(133),
	    isFunction = __webpack_require__(33),
	    isLength = __webpack_require__(19);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(9);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(192);


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SET_STATE_BY_PATH = exports.SET_STATE_BY_PATH = 'reduceless/SET_GLOBAL_STATE';
	var REPLACE_STATE_BY_PATH = exports.REPLACE_STATE_BY_PATH = 'reduceless/REPLACE_STATE_BY_PATH';

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(153),
	    mapCacheDelete = __webpack_require__(154),
	    mapCacheGet = __webpack_require__(155),
	    mapCacheHas = __webpack_require__(156),
	    mapCacheSet = __webpack_require__(157);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(13),
	    stackClear = __webpack_require__(160),
	    stackDelete = __webpack_require__(161),
	    stackGet = __webpack_require__(162),
	    stackHas = __webpack_require__(163),
	    stackSet = __webpack_require__(164);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(62);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(2),
	    stringToPath = __webpack_require__(165);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(46);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(48);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(30),
	    isHostObject = __webpack_require__(16),
	    isObjectLike = __webpack_require__(9);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(22);

	var setStateByPath = function setStateByPath(path, value) {
	  return {
	    type: _constants.SET_STATE_BY_PATH,
	    path: path,
	    value: value
	  };
	};

	exports.default = setStateByPath;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _clone = __webpack_require__(166);

	var _clone2 = _interopRequireDefault(_clone);

	var _set = __webpack_require__(177);

	var _set2 = _interopRequireDefault(_set);

	var _isArray = __webpack_require__(2);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _head = __webpack_require__(169);

	var _head2 = _interopRequireDefault(_head);

	var _tail = __webpack_require__(180);

	var _tail2 = _interopRequireDefault(_tail);

	var _map = __webpack_require__(174);

	var _map2 = _interopRequireDefault(_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var update = function update(obj, path, nextValue) {
	  var pathArr = (0, _isArray2.default)(path) ? path : path.split('.');
	  var newObj = void 0;
	  if (!pathArr.length) {
	    return nextValue;
	  } else {
	    if (!obj[pathArr[0]]) {
	      newObj = (0, _clone2.default)(obj);
	      (0, _set2.default)(newObj, pathArr, nextValue);
	      return newObj;
	    } else if ((0, _isArray2.default)(obj)) {
	      newObj = (0, _clone2.default)(obj);
	      newObj[(0, _head2.default)(pathArr)] = update(newObj[(0, _head2.default)(pathArr)], (0, _tail2.default)(pathArr), nextValue);
	      return newObj;
	    } else {
	      newObj = {};
	      (0, _map2.default)(obj, function (value, key, currentObj) {
	        if (key === pathArr[0]) {
	          newObj[key] = update(value, (0, _tail2.default)(pathArr), nextValue);
	        } else {
	          newObj[key] = obj[key];
	        }
	      });
	      return newObj;
	    }
	  }
	};

	exports.default = update;

/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(5);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function (obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(28),
	    isKey = __webpack_require__(11),
	    toKey = __webpack_require__(12);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(30);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return object != null &&
	    (hasOwnProperty.call(object, key) ||
	      (typeof object == 'object' && key in object && getPrototype(object) === null));
	}

	module.exports = baseHas;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(104),
	    isObject = __webpack_require__(6),
	    isObjectLike = __webpack_require__(9);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(27);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : source[key];

	    assignValue(object, key, newValue);
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(88),
	    arraySome = __webpack_require__(95);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var stubArray = __webpack_require__(178);

	/** Built-in value references. */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	function getSymbols(object) {
	  // Coerce `object` to an object to avoid non-object errors in V8.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=3443 for more details.
	  return getOwnPropertySymbols(Object(object));
	}

	// Fallback for IE < 11.
	if (!getOwnPropertySymbols) {
	  getSymbols = stubArray;
	}

	module.exports = getSymbols;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(84),
	    Map = __webpack_require__(45),
	    Promise = __webpack_require__(86),
	    Set = __webpack_require__(87),
	    WeakMap = __webpack_require__(89),
	    toSource = __webpack_require__(61);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(171);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(2),
	    isObjectLike = __webpack_require__(9);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(21);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var ReactNoopUpdateQueue = __webpack_require__(69);
	var ReactInstrumentation = __webpack_require__(198);

	var canDefineProperty = __webpack_require__(38);
	var emptyObject = __webpack_require__(43);
	var invariant = __webpack_require__(5);
	var warning = __webpack_require__(3);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : void 0;
	  if (process.env.NODE_ENV !== 'production') {
	    ReactInstrumentation.debugTool.onSetState();
	    process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : void 0;
	  }
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactElement = __webpack_require__(7);
	var ReactPropTypeLocations = __webpack_require__(70);
	var ReactPropTypeLocationNames = __webpack_require__(37);
	var ReactCurrentOwner = __webpack_require__(36);

	var canDefineProperty = __webpack_require__(38);
	var getIteratorFn = __webpack_require__(39);
	var invariant = __webpack_require__(5);
	var warning = __webpack_require__(3);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	var loggedTypeFailures = {};

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
	  if (addenda === null) {
	    // we already showed the warning
	    return;
	  }
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : void 0;
	}

	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} messageType A key used for de-duping warnings.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 * @returns {?object} A set of addenda to use in the warning message, or null
	 * if the warning has already been shown before (and shouldn't be shown again).
	 */
	function getAddendaForKeyUse(messageType, element, parentType) {
	  var addendum = getDeclarationErrorAddendum();
	  if (!addendum) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      addendum = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }

	  var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
	  if (memoizer[addendum]) {
	    return null;
	  }
	  memoizer[addendum] = true;

	  var addenda = {
	    parentOrOwner: addendum,
	    url: ' See https://fb.me/react-warning-keys for more information.',
	    childOwner: null
	  };

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  return addenda;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : void 0;
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var addendum = getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : void 0;
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */

	'use strict';

	var warning = __webpack_require__(3);

	function warnTDZ(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnTDZ(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnTDZ(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnTDZ(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = __webpack_require__(44);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(34);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(209);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = connectSlicedState;

	var _react = __webpack_require__(21);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(187);

	var _get = __webpack_require__(32);

	var _get2 = _interopRequireDefault(_get);

	var _setStateByPath = __webpack_require__(40);

	var _setStateByPath2 = _interopRequireDefault(_setStateByPath);

	var _replaceStateByPath = __webpack_require__(76);

	var _replaceStateByPath2 = _interopRequireDefault(_replaceStateByPath);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Connect provided component to `path` part of the redux state
	 * @param path
	 * @returns {getStateType(path)}
	 */
	function connectSlicedState(path) {
	  var setStateName = arguments.length <= 1 || arguments[1] === undefined ? 'setState' : arguments[1];
	  var replaceStateName = arguments.length <= 2 || arguments[2] === undefined ? 'replaceState' : arguments[2];

	  return function (WrappedComponent) {
	    var Connect = function (_React$Component) {
	      _inherits(Connect, _React$Component);

	      function Connect() {
	        _classCallCheck(this, Connect);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Connect).apply(this, arguments));
	      }

	      _createClass(Connect, [{
	        key: 'render',
	        value: function render() {
	          return _react2.default.createElement(WrappedComponent, this.props);
	        }
	      }]);

	      return Connect;
	    }(_react2.default.Component);

	    return (0, _reactRedux.connect)(function (state) {
	      return state;
	    }, function (dispatch) {
	      return { dispatch: dispatch };
	    }, function (state, _ref, props) {
	      var _extends2;

	      var dispatch = _ref.dispatch;

	      var slicedState = (0, _get2.default)(state, path);
	      return _extends({}, props, (_extends2 = {
	        state: slicedState
	      }, _defineProperty(_extends2, setStateName, function (newState) {
	        return dispatch((0, _setStateByPath2.default)(path, newState));
	      }), _defineProperty(_extends2, replaceStateName, function (newState) {
	        return dispatch((0, _replaceStateByPath2.default)(path, newState));
	      }), _extends2));
	    })(Connect);
	  };
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initialStateReducer;
	function initialStateReducer() {
	  var initialState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	    return state;
	  };
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(22);

	var replaceStateByPath = function replaceStateByPath(path, value) {
	  return {
	    type: _constants.REPLACE_STATE_BY_PATH,
	    path: path,
	    value: value
	  };
	};

	exports.default = replaceStateByPath;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _constants = __webpack_require__(22);

	var _update = __webpack_require__(41);

	var _update2 = _interopRequireDefault(_update);

	var _get = __webpack_require__(32);

	var _get2 = _interopRequireDefault(_get);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var setGlobalStateReducer = function setGlobalStateReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _constants.SET_STATE_BY_PATH:
	      var oldState = (0, _get2.default)(state, action.path, {});
	      var newValue = _extends({}, oldState, action.value);
	      return (0, _update2.default)(state, action.path, newValue);
	    case _constants.REPLACE_STATE_BY_PATH:
	      return (0, _update2.default)(state, action.path, action.value);
	    default:
	      return state;
	  }
	};

	var wrapReducerWithSetGlobalState = function wrapReducerWithSetGlobalState() {
	  var reducer = arguments.length <= 0 || arguments[0] === undefined ? function (s) {
	    return s;
	  } : arguments[0];

	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    var updatedState = setGlobalStateReducer(state, action);
	    return reducer(updatedState, action);
	  };
	};

	exports.default = wrapReducerWithSetGlobalState;

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(42);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}

	module.exports = performance || {};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var performance = __webpack_require__(80);

	var performanceNow;

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function () {
	    return performance.now();
	  };
	} else {
	  performanceNow = function () {
	    return Date.now();
	  };
	}

	module.exports = performanceNow;

/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	        for (var i=0; i<keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(137),
	    hashDelete = __webpack_require__(138),
	    hashGet = __webpack_require__(139),
	    hashHas = __webpack_require__(140),
	    hashSet = __webpack_require__(141);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(24),
	    setCacheAdd = __webpack_require__(158),
	    setCacheHas = __webpack_require__(159);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    root = __webpack_require__(4);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 90 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `Map#set` because it doesn't return the map instance in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 93 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(52),
	    keys = __webpack_require__(10);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(25),
	    arrayEach = __webpack_require__(92),
	    assignValue = __webpack_require__(27),
	    baseAssign = __webpack_require__(96),
	    cloneBuffer = __webpack_require__(118),
	    copyArray = __webpack_require__(125),
	    copySymbols = __webpack_require__(126),
	    getAllKeys = __webpack_require__(132),
	    getTag = __webpack_require__(55),
	    initCloneArray = __webpack_require__(143),
	    initCloneByTag = __webpack_require__(144),
	    initCloneObject = __webpack_require__(145),
	    isArray = __webpack_require__(2),
	    isBuffer = __webpack_require__(172),
	    isHostObject = __webpack_require__(16),
	    isObject = __webpack_require__(6),
	    keys = __webpack_require__(10);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  // Recursively populate clone (susceptible to call stack limits).
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	module.exports = baseCreate;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(101),
	    createBaseEach = __webpack_require__(128);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(129);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(100),
	    keys = __webpack_require__(10);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(94),
	    isArray = __webpack_require__(2);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(25),
	    equalArrays = __webpack_require__(53),
	    equalByTag = __webpack_require__(130),
	    equalObjects = __webpack_require__(131),
	    getTag = __webpack_require__(55),
	    isArray = __webpack_require__(2),
	    isHostObject = __webpack_require__(16),
	    isTypedArray = __webpack_require__(173);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(25),
	    baseIsEqual = __webpack_require__(50);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(33),
	    isHostObject = __webpack_require__(16),
	    isMasked = __webpack_require__(147),
	    isObject = __webpack_require__(6),
	    toSource = __webpack_require__(61);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(110),
	    baseMatchesProperty = __webpack_require__(111),
	    identity = __webpack_require__(170),
	    isArray = __webpack_require__(2),
	    property = __webpack_require__(176);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 108 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(99),
	    isArrayLike = __webpack_require__(18);

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	module.exports = baseMap;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(105),
	    getMatchData = __webpack_require__(134),
	    matchesStrictComparable = __webpack_require__(59);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(50),
	    get = __webpack_require__(32),
	    hasIn = __webpack_require__(168),
	    isKey = __webpack_require__(11),
	    isStrictComparable = __webpack_require__(57),
	    matchesStrictComparable = __webpack_require__(59),
	    toKey = __webpack_require__(12);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(48);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(27),
	    castPath = __webpack_require__(28),
	    isIndex = __webpack_require__(31),
	    isKey = __webpack_require__(11),
	    isObject = __webpack_require__(6),
	    toKey = __webpack_require__(12);

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]);
	    if (isObject(nested)) {
	      var newValue = value;
	      if (index != lastIndex) {
	        var objValue = nested[key];
	        newValue = customizer ? customizer(objValue, key, nested) : undefined;
	        if (newValue === undefined) {
	          newValue = objValue == null
	            ? (isIndex(path[index + 1]) ? [] : {})
	            : objValue;
	        }
	      }
	      assignValue(nested, key, newValue);
	    }
	    nested = nested[key];
	  }
	  return object;
	}

	module.exports = baseSet;


/***/ },
/* 114 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },
/* 115 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26),
	    isSymbol = __webpack_require__(20);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(29);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(90),
	    arrayReduce = __webpack_require__(47),
	    mapToArray = __webpack_require__(58);

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(91),
	    arrayReduce = __webpack_require__(47),
	    setToArray = __webpack_require__(60);

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(29);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 125 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(52),
	    getSymbols = __webpack_require__(54);

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(4);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(18);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(26),
	    Uint8Array = __webpack_require__(46),
	    equalArrays = __webpack_require__(53),
	    mapToArray = __webpack_require__(58),
	    setToArray = __webpack_require__(60);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and
	      // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	      // not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	      stack.set(object, other);

	      // Recursively compare objects (susceptible to call stack limits).
	      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(49),
	    keys = __webpack_require__(10);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(102),
	    getSymbols = __webpack_require__(54),
	    keys = __webpack_require__(10);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(51);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(57),
	    keys = __webpack_require__(10);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 135 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(28),
	    isArguments = __webpack_require__(63),
	    isArray = __webpack_require__(2),
	    isIndex = __webpack_require__(31),
	    isKey = __webpack_require__(11),
	    isLength = __webpack_require__(19),
	    isString = __webpack_require__(64),
	    toKey = __webpack_require__(12);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(17);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	module.exports = hashClear;


/***/ },
/* 138 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	module.exports = hashDelete;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(17);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(17);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(17);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(115),
	    isArguments = __webpack_require__(63),
	    isArray = __webpack_require__(2),
	    isLength = __webpack_require__(19),
	    isString = __webpack_require__(64);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 143 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(29),
	    cloneDataView = __webpack_require__(119),
	    cloneMap = __webpack_require__(120),
	    cloneRegExp = __webpack_require__(121),
	    cloneSet = __webpack_require__(122),
	    cloneSymbol = __webpack_require__(123),
	    cloneTypedArray = __webpack_require__(124);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(98),
	    getPrototype = __webpack_require__(30),
	    isPrototype = __webpack_require__(56);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 146 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(127);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 148 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(85),
	    ListCache = __webpack_require__(13),
	    Map = __webpack_require__(45);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	module.exports = mapCacheDelete;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 158 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(13);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	module.exports = stackClear;


/***/ },
/* 161 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 162 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 163 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(13),
	    MapCache = __webpack_require__(24);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache && cache.__data__.length == LARGE_ARRAY_SIZE) {
	    cache = this.__data__ = new MapCache(cache.__data__);
	  }
	  cache.set(key, value);
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(175),
	    toString = __webpack_require__(184);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(97);

	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @returns {*} Returns the cloned value.
	 * @see _.cloneDeep
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var shallow = _.clone(objects);
	 * console.log(shallow[0] === objects[0]);
	 * // => true
	 */
	function clone(value) {
	  return baseClone(value, false, true);
	}

	module.exports = clone;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(114),
	    toInteger = __webpack_require__(182);

	/**
	 * Creates a slice of `array` with `n` elements dropped from the beginning.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @param {number} [n=1] The number of elements to drop.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the slice of `array`.
	 * @example
	 *
	 * _.drop([1, 2, 3]);
	 * // => [2, 3]
	 *
	 * _.drop([1, 2, 3], 2);
	 * // => [3]
	 *
	 * _.drop([1, 2, 3], 5);
	 * // => []
	 *
	 * _.drop([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 */
	function drop(array, n, guard) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return [];
	  }
	  n = (guard || n === undefined) ? 1 : toInteger(n);
	  return baseSlice(array, n < 0 ? 0 : n, length);
	}

	module.exports = drop;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(103),
	    hasPath = __webpack_require__(136);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 169 */
/***/ function(module, exports) {

	/**
	 * Gets the first element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias first
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the first element of `array`.
	 * @example
	 *
	 * _.head([1, 2, 3]);
	 * // => 1
	 *
	 * _.head([]);
	 * // => undefined
	 */
	function head(array) {
	  return (array && array.length) ? array[0] : undefined;
	}

	module.exports = head;


/***/ },
/* 170 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(18),
	    isObjectLike = __webpack_require__(9);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(4),
	    stubFalse = __webpack_require__(179);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = !Buffer ? stubFalse : function(value) {
	  return value instanceof Buffer;
	};

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(211)(module)))

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(19),
	    isObjectLike = __webpack_require__(9);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(93),
	    baseIteratee = __webpack_require__(107),
	    baseMap = __webpack_require__(109),
	    isArray = __webpack_require__(2);

	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Array|Function|Object|string} [iteratee=_.identity]
	 *  The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = map;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(24);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(51),
	    basePropertyDeep = __webpack_require__(112),
	    isKey = __webpack_require__(11),
	    toKey = __webpack_require__(12);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(113);

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}

	module.exports = set;


/***/ },
/* 178 */
/***/ function(module, exports) {

	/**
	 * A method that returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 179 */
/***/ function(module, exports) {

	/**
	 * A method that returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var drop = __webpack_require__(167);

	/**
	 * Gets all but the first element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {Array} Returns the slice of `array`.
	 * @example
	 *
	 * _.tail([1, 2, 3]);
	 * // => [2, 3]
	 */
	function tail(array) {
	  return drop(array, 1);
	}

	module.exports = tail;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(183);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(181);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(33),
	    isObject = __webpack_require__(6),
	    isSymbol = __webpack_require__(20);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(116);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(21);

	var _storeShape = __webpack_require__(65);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(66);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(21);

	var _storeShape = __webpack_require__(65);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(188);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(189);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(66);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(34);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(82);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(83);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(185);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(186);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 188 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(208);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 190 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {*} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var invariant = __webpack_require__(5);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	var _assign = __webpack_require__(35);

	var ReactChildren = __webpack_require__(193);
	var ReactComponent = __webpack_require__(67);
	var ReactClass = __webpack_require__(194);
	var ReactDOMFactories = __webpack_require__(196);
	var ReactElement = __webpack_require__(7);
	var ReactElementValidator = __webpack_require__(68);
	var ReactPropTypes = __webpack_require__(201);
	var ReactVersion = __webpack_require__(202);

	var onlyChild = __webpack_require__(203);
	var warning = __webpack_require__(3);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = __webpack_require__(191);
	var ReactElement = __webpack_require__(7);

	var emptyFunction = __webpack_require__(23);
	var traverseAllChildren = __webpack_require__(204);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var _assign = __webpack_require__(35);

	var ReactComponent = __webpack_require__(67);
	var ReactElement = __webpack_require__(7);
	var ReactPropTypeLocations = __webpack_require__(70);
	var ReactPropTypeLocationNames = __webpack_require__(37);
	var ReactNoopUpdateQueue = __webpack_require__(69);

	var emptyObject = __webpack_require__(43);
	var invariant = __webpack_require__(5);
	var keyMirror = __webpack_require__(44);
	var keyOf = __webpack_require__(78);
	var warning = __webpack_require__(3);

	var MIXINS_KEY = keyOf({ mixins: null });

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});

	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.') : invariant(false) : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : void 0;

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeDevtool
	 */

	'use strict';

	var invariant = __webpack_require__(5);

	var tree = {};
	var rootIDs = [];

	function updateTree(id, update) {
	  if (!tree[id]) {
	    tree[id] = {
	      parentID: null,
	      ownerID: null,
	      text: null,
	      childIDs: [],
	      displayName: 'Unknown',
	      isMounted: false,
	      updateCount: 0
	    };
	  }
	  update(tree[id]);
	}

	function purgeDeep(id) {
	  var item = tree[id];
	  if (item) {
	    var childIDs = item.childIDs;

	    delete tree[id];
	    childIDs.forEach(purgeDeep);
	  }
	}

	var ReactComponentTreeDevtool = {
	  onSetDisplayName: function (id, displayName) {
	    updateTree(id, function (item) {
	      return item.displayName = displayName;
	    });
	  },
	  onSetChildren: function (id, nextChildIDs) {
	    updateTree(id, function (item) {
	      var prevChildIDs = item.childIDs;
	      item.childIDs = nextChildIDs;

	      nextChildIDs.forEach(function (nextChildID) {
	        var nextChild = tree[nextChildID];
	        !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected devtool events to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !(nextChild.displayName != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetDisplayName() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !(nextChild.childIDs != null || nextChild.text != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() or onSetText() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;
	        !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child ' + 'before its parent includes it in onSetChildren().') : invariant(false) : void 0;

	        if (prevChildIDs.indexOf(nextChildID) === -1) {
	          nextChild.parentID = id;
	        }
	      });
	    });
	  },
	  onSetOwner: function (id, ownerID) {
	    updateTree(id, function (item) {
	      return item.ownerID = ownerID;
	    });
	  },
	  onSetText: function (id, text) {
	    updateTree(id, function (item) {
	      return item.text = text;
	    });
	  },
	  onMountComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.isMounted = true;
	    });
	  },
	  onMountRootComponent: function (id) {
	    rootIDs.push(id);
	  },
	  onUpdateComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.updateCount++;
	    });
	  },
	  onUnmountComponent: function (id) {
	    updateTree(id, function (item) {
	      return item.isMounted = false;
	    });
	    rootIDs = rootIDs.filter(function (rootID) {
	      return rootID !== id;
	    });
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeDevtool._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    Object.keys(tree).filter(function (id) {
	      return !tree[id].isMounted;
	    }).forEach(purgeDeep);
	  },
	  isMounted: function (id) {
	    var item = tree[id];
	    return item ? item.isMounted : false;
	  },
	  getChildIDs: function (id) {
	    var item = tree[id];
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var item = tree[id];
	    return item ? item.displayName : 'Unknown';
	  },
	  getOwnerID: function (id) {
	    var item = tree[id];
	    return item ? item.ownerID : null;
	  },
	  getParentID: function (id) {
	    var item = tree[id];
	    return item ? item.parentID : null;
	  },
	  getText: function (id) {
	    var item = tree[id];
	    return item ? item.text : null;
	  },
	  getUpdateCount: function (id) {
	    var item = tree[id];
	    return item ? item.updateCount : 0;
	  },
	  getRootIDs: function () {
	    return rootIDs;
	  },
	  getRegisteredIDs: function () {
	    return Object.keys(tree);
	  }
	};

	module.exports = ReactComponentTreeDevtool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 */

	'use strict';

	var ReactElement = __webpack_require__(7);
	var ReactElementValidator = __webpack_require__(68);

	var mapObject = __webpack_require__(79);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if (process.env.NODE_ENV !== 'production') {
	    return ReactElementValidator.createFactory(tag);
	  }
	  return ReactElement.createFactory(tag);
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hgroup: 'hgroup',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',

	  // SVG
	  circle: 'circle',
	  clipPath: 'clipPath',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  image: 'image',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'

	}, createDOMFactory);

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDebugTool
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(42);

	var performanceNow = __webpack_require__(81);
	var warning = __webpack_require__(3);

	var eventHandlers = [];
	var handlerDoesThrowForEvent = {};

	function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
	  if (process.env.NODE_ENV !== 'production') {
	    eventHandlers.forEach(function (handler) {
	      try {
	        if (handler[handlerFunctionName]) {
	          handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
	        }
	      } catch (e) {
	        process.env.NODE_ENV !== 'production' ? warning(!handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by devtool while handling %s: %s', handlerFunctionName, e.message) : void 0;
	        handlerDoesThrowForEvent[handlerFunctionName] = true;
	      }
	    });
	  }
	}

	var isProfiling = false;
	var flushHistory = [];
	var currentFlushNesting = 0;
	var currentFlushMeasurements = null;
	var currentFlushStartTime = null;
	var currentTimerDebugID = null;
	var currentTimerStartTime = null;
	var currentTimerType = null;

	function clearHistory() {
	  ReactComponentTreeDevtool.purgeUnmountedComponents();
	  ReactNativeOperationHistoryDevtool.clearHistory();
	}

	function getTreeSnapshot(registeredIDs) {
	  return registeredIDs.reduce(function (tree, id) {
	    var ownerID = ReactComponentTreeDevtool.getOwnerID(id);
	    var parentID = ReactComponentTreeDevtool.getParentID(id);
	    tree[id] = {
	      displayName: ReactComponentTreeDevtool.getDisplayName(id),
	      text: ReactComponentTreeDevtool.getText(id),
	      updateCount: ReactComponentTreeDevtool.getUpdateCount(id),
	      childIDs: ReactComponentTreeDevtool.getChildIDs(id),
	      // Text nodes don't have owners but this is close enough.
	      ownerID: ownerID || ReactComponentTreeDevtool.getOwnerID(parentID),
	      parentID: parentID
	    };
	    return tree;
	  }, {});
	}

	function resetMeasurements() {
	  if (process.env.NODE_ENV !== 'production') {
	    var previousStartTime = currentFlushStartTime;
	    var previousMeasurements = currentFlushMeasurements || [];
	    var previousOperations = ReactNativeOperationHistoryDevtool.getHistory();

	    if (!isProfiling || currentFlushNesting === 0) {
	      currentFlushStartTime = null;
	      currentFlushMeasurements = null;
	      clearHistory();
	      return;
	    }

	    if (previousMeasurements.length || previousOperations.length) {
	      var registeredIDs = ReactComponentTreeDevtool.getRegisteredIDs();
	      flushHistory.push({
	        duration: performanceNow() - previousStartTime,
	        measurements: previousMeasurements || [],
	        operations: previousOperations || [],
	        treeSnapshot: getTreeSnapshot(registeredIDs)
	      });
	    }

	    clearHistory();
	    currentFlushStartTime = performanceNow();
	    currentFlushMeasurements = [];
	  }
	}

	function checkDebugID(debugID) {
	  process.env.NODE_ENV !== 'production' ? warning(debugID, 'ReactDebugTool: debugID may not be empty.') : void 0;
	}

	var ReactDebugTool = {
	  addDevtool: function (devtool) {
	    eventHandlers.push(devtool);
	  },
	  removeDevtool: function (devtool) {
	    for (var i = 0; i < eventHandlers.length; i++) {
	      if (eventHandlers[i] === devtool) {
	        eventHandlers.splice(i, 1);
	        i--;
	      }
	    }
	  },
	  beginProfiling: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling) {
	        return;
	      }

	      isProfiling = true;
	      flushHistory.length = 0;
	      resetMeasurements();
	    }
	  },
	  endProfiling: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!isProfiling) {
	        return;
	      }

	      isProfiling = false;
	      resetMeasurements();
	    }
	  },
	  getFlushHistory: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      return flushHistory;
	    }
	  },
	  onBeginFlush: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      currentFlushNesting++;
	      resetMeasurements();
	    }
	    emitEvent('onBeginFlush');
	  },
	  onEndFlush: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      resetMeasurements();
	      currentFlushNesting--;
	    }
	    emitEvent('onEndFlush');
	  },
	  onBeginLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling && currentFlushNesting > 0) {
	        process.env.NODE_ENV !== 'production' ? warning(!currentTimerType, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	        currentTimerStartTime = performanceNow();
	        currentTimerDebugID = debugID;
	        currentTimerType = timerType;
	      }
	    }
	  },
	  onEndLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    if (process.env.NODE_ENV !== 'production') {
	      if (isProfiling && currentFlushNesting > 0) {
	        process.env.NODE_ENV !== 'production' ? warning(currentTimerType === timerType, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	        currentFlushMeasurements.push({
	          timerType: timerType,
	          instanceID: debugID,
	          duration: performanceNow() - currentTimerStartTime
	        });
	        currentTimerStartTime = null;
	        currentTimerDebugID = null;
	        currentTimerType = null;
	      }
	    }
	    emitEvent('onEndLifeCycleTimer', debugID, timerType);
	  },
	  onBeginReconcilerTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginReconcilerTimer', debugID, timerType);
	  },
	  onEndReconcilerTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onEndReconcilerTimer', debugID, timerType);
	  },
	  onBeginProcessingChildContext: function () {
	    emitEvent('onBeginProcessingChildContext');
	  },
	  onEndProcessingChildContext: function () {
	    emitEvent('onEndProcessingChildContext');
	  },
	  onNativeOperation: function (debugID, type, payload) {
	    checkDebugID(debugID);
	    emitEvent('onNativeOperation', debugID, type, payload);
	  },
	  onSetState: function () {
	    emitEvent('onSetState');
	  },
	  onSetDisplayName: function (debugID, displayName) {
	    checkDebugID(debugID);
	    emitEvent('onSetDisplayName', debugID, displayName);
	  },
	  onSetChildren: function (debugID, childDebugIDs) {
	    checkDebugID(debugID);
	    emitEvent('onSetChildren', debugID, childDebugIDs);
	  },
	  onSetOwner: function (debugID, ownerDebugID) {
	    checkDebugID(debugID);
	    emitEvent('onSetOwner', debugID, ownerDebugID);
	  },
	  onSetText: function (debugID, text) {
	    checkDebugID(debugID);
	    emitEvent('onSetText', debugID, text);
	  },
	  onMountRootComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onMountRootComponent', debugID);
	  },
	  onMountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onMountComponent', debugID);
	  },
	  onUpdateComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUpdateComponent', debugID);
	  },
	  onUnmountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUnmountComponent', debugID);
	  }
	};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactInvalidSetStateWarningDevTool = __webpack_require__(199);
	  var ReactNativeOperationHistoryDevtool = __webpack_require__(200);
	  var ReactComponentTreeDevtool = __webpack_require__(195);
	  ReactDebugTool.addDevtool(ReactInvalidSetStateWarningDevTool);
	  ReactDebugTool.addDevtool(ReactComponentTreeDevtool);
	  ReactDebugTool.addDevtool(ReactNativeOperationHistoryDevtool);
	  var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	  if (/[?&]react_perf\b/.test(url)) {
	    ReactDebugTool.beginProfiling();
	  }
	}

	module.exports = ReactDebugTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstrumentation
	 */

	'use strict';

	var ReactDebugTool = __webpack_require__(197);

	module.exports = { debugTool: ReactDebugTool };

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInvalidSetStateWarningDevTool
	 */

	'use strict';

	var warning = __webpack_require__(3);

	if (process.env.NODE_ENV !== 'production') {
	  var processingChildContext = false;

	  var warnInvalidSetState = function () {
	    process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
	  };
	}

	var ReactInvalidSetStateWarningDevTool = {
	  onBeginProcessingChildContext: function () {
	    processingChildContext = true;
	  },
	  onEndProcessingChildContext: function () {
	    processingChildContext = false;
	  },
	  onSetState: function () {
	    warnInvalidSetState();
	  }
	};

	module.exports = ReactInvalidSetStateWarningDevTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 200 */
/***/ function(module, exports) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeOperationHistoryDevtool
	 */

	'use strict';

	var history = [];

	var ReactNativeOperationHistoryDevtool = {
	  onNativeOperation: function (debugID, type, payload) {
	    history.push({
	      instanceID: debugID,
	      type: type,
	      payload: payload
	    });
	  },
	  clearHistory: function () {
	    if (ReactNativeOperationHistoryDevtool._preventClearing) {
	      // Should only be used for tests.
	      return;
	    }

	    history = [];
	  },
	  getHistory: function () {
	    return history;
	  }
	};

	module.exports = ReactNativeOperationHistoryDevtool;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var ReactElement = __webpack_require__(7);
	var ReactPropTypeLocationNames = __webpack_require__(37);

	var emptyFunction = __webpack_require__(23);
	var getIteratorFn = __webpack_require__(39);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	    });
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new Error('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	    });
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;

/***/ },
/* 202 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */

	'use strict';

	module.exports = '15.1.0';

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var ReactElement = __webpack_require__(7);

	var invariant = __webpack_require__(5);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(36);
	var ReactElement = __webpack_require__(7);

	var getIteratorFn = __webpack_require__(39);
	var invariant = __webpack_require__(5);
	var KeyEscapeUtils = __webpack_require__(190);
	var warning = __webpack_require__(3);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(71);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 206 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(72);

	var _isPlainObject = __webpack_require__(34);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(73);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(72);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(207);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(206);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(205);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(71);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(73);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(210)(global || window || this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ },
/* 211 */
/***/ function(module, exports) {

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


/***/ }
/******/ ])
});
;