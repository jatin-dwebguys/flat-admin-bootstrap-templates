(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/core-js/object/assign.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/fn/object/assign.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/extends.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/core-js/object/assign.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/fn/object/assign.js":[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.assign":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/es6.object.assign.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_a-function.js":[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_an-object.js":[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_is-object.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_array-includes.js":[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-index.js","./_to-iobject":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-iobject.js","./_to-length":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-length.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_cof.js":[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_core.js":[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_ctx.js":[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_a-function.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_defined.js":[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_descriptors.js":[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_fails.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_dom-create.js":[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_global.js","./_is-object":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_is-object.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_enum-bug-keys.js":[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_export.js":[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
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
},{"./_core":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_core.js","./_ctx":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_ctx.js","./_global":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_global.js","./_hide":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_hide.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_fails.js":[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_global.js":[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_has.js":[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_hide.js":[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_property-desc.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_ie8-dom-define.js":[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_descriptors.js","./_dom-create":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_dom-create.js","./_fails":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_fails.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_iobject.js":[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_cof.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_is-object.js":[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-assign.js":[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_fails.js","./_iobject":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_iobject.js","./_object-gops":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-gops.js","./_object-keys":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-keys.js","./_object-pie":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-pie.js","./_to-object":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-object.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-dp.js":[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_descriptors.js","./_ie8-dom-define":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_ie8-dom-define.js","./_to-primitive":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-primitive.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-gops.js":[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-keys-internal.js":[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_array-includes.js","./_has":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_has.js","./_shared-key":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_shared-key.js","./_to-iobject":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-keys.js":[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_enum-bug-keys.js","./_object-keys-internal":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-keys-internal.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-pie.js":[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_property-desc.js":[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_shared-key.js":[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_shared.js","./_uid":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_uid.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_shared.js":[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_global.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-index.js":[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-integer.js":[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-iobject.js":[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_defined.js","./_iobject":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_iobject.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-length.js":[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-object.js":[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_defined.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_to-primitive.js":[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_is-object.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_uid.js":[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/es6.object.assign.js":[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_export.js","./_object-assign":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/core-js/library/modules/_object-assign.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.directives.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterDirective = RegisterDirective;

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RegisterDirective() {
  angular.module(_config2.default["APP"]);
}

},{"./config":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/config.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.js":[function(require,module,exports){
'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _app = require('./app.route');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.directives');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module(_config2.default["APP"], ['ui.router', 'ui.bootstrap', 'ui.select', 'angular-chartist', 'hljs', 'datatables', 'datatables.bootstrap', 'app.templates']).config(_app2.default);

/* register all directives */
(0, _app3.RegisterDirective)();

},{"./app.directives":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.directives.js","./app.route":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.route.js","./config":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/config.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.route.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider.state("main", {
    url: "/",
    controller: _controllers.AppController,
    controllerAs: "main",
    templateUrl: 'main.html',
    abstract: true
  }).state("main.dashboard", {
    url: "",
    controller: _controllers.DashboardController,
    controllerAs: "vm",
    templateUrl: 'pages/dashboard.html'
  }).state("main.messaging", {
    url: "messaging",
    controller: _controllers.MessageController,
    controllerAs: "vm",
    templateUrl: 'pages/message.html'
  }).state("main.uikits", {
    url: "uikits",
    abstract: true,
    templateUrl: 'pages/uikits/main.html'
  }).state("main.uikits.customize", {
    url: "/customize",
    templateUrl: 'pages/uikits/customize.html'
  }).state("main.uikits.components", {
    url: "/components",
    controller: _controllers.ComponentController,
    controllerAs: "vm",
    templateUrl: 'pages/uikits/components.html'
  }).state("main.uikits.form", {
    url: "/form",
    controller: _controllers.FormController,
    controllerAs: "vm",
    templateUrl: 'pages/uikits/form.html'
  }).state("main.uikits.card", {
    url: "/card",
    templateUrl: 'pages/uikits/card.html'
  }).state("main.uikits.table", {
    url: "/table",
    controller: _controllers.TableController,
    controllerAs: "vm",
    templateUrl: 'pages/uikits/table.html'
  }).state("main.uikits.pricing", {
    url: "/pricing",
    templateUrl: 'pages/uikits/pricing.html'
  }).state("main.uikits.timeline", {
    url: "/timeline",
    templateUrl: 'pages/uikits/timeline.html'
  }).state("main.uikits.chart", {
    url: "/chart",
    controller: _controllers.ChartController,
    controllerAs: 'vm',
    templateUrl: 'pages/uikits/chart.html'
  }).state("main.uikits.icons", {
    url: "/icons",
    templateUrl: 'pages/uikits/icons.html'
  }).state("main.pages", {
    url: "pages",
    abstract: true,
    templateUrl: 'pages/pages/main.html'
  }).state("main.pages.form", {
    url: "/form",
    templateUrl: 'pages/pages/form.html'
  }).state("main.pages.profile", {
    url: "/profile",
    templateUrl: 'pages/pages/profile.html'
  }).state("main.pages.search", {
    url: "/search",
    templateUrl: 'pages/pages/search.html'
  }).state("login", {
    url: "/login",
    templateUrl: 'pages/pages/login.html'
  }).state("register", {
    url: "/register",
    templateUrl: 'pages/pages/register.html'
  });
  return $urlRouterProvider.otherwise('/');
};

var _controllers = require("./controllers");

module.exports = exports["default"];

},{"./controllers":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/index.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/config.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  APP: "app",
  TITLE: "<span class=\"highlight\">Flat v3</span> Admin",
  PAGE: {
    "main.dashboard": {
      menu: "dashboard",
      title: "Dashboard",
      class: ""
    },
    "main.messaging": {
      menu: "messaging",
      title: "Messaging",
      class: "app-full"
    },
    "main.uikits.customize": {
      menu: "uikits",
      title: "<span class='highlight'>Customize</span>",
      class: ""
    },
    "main.uikits.components": {
      menu: "uikits",
      title: "<span class='highlight'>Component</span>&nbsp;<span>Kits</span>",
      class: ""
    },
    "main.uikits.form": {
      menu: "uikits",
      title: "<span class='highlight'>Form</span>&nbsp;<span>Kits</span>",
      class: ""
    },
    "main.uikits.table": {
      menu: "uikits",
      title: "<span class='highlight'>Table</span>&nbsp;<span>Kits</span>",
      class: ""
    },
    "main.uikits.card": {
      menu: "uikits",
      title: "<span class='highlight'>Card</span>&nbsp;<span>Kits</span>",
      class: ""
    },
    "main.uikits.chart": {
      menu: "uikits",
      title: "<span class='highlight'>Chart</span>&nbsp;<span>Kits</span>",
      class: ""
    },
    "main.uikits.pricing": {
      menu: "uikits",
      title: "<span class='highlight'>Pricing</span>&nbsp;<span>Table</span>",
      class: ""
    },
    "main.pages.profile": {
      menu: "pages",
      title: "<span class='highlight'>Profile</span>",
      class: ""
    },
    "main.pages.form": {
      menu: "pages",
      title: "<span class='highlight'>Information</span>",
      class: ""
    },
    "main.pages.search": {
      menu: "pages",
      title: "<span class='highlight'>Search</span> Result",
      class: ""
    },
    "login": {
      class: "app-login"
    }
  }
};
module.exports = exports["default"];

},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/AppController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppController = function AppController($rootScope, $sce, $state) {
  var _this = this;

  (0, _classCallCheck3.default)(this, AppController);


  this.app = addAppConfig($sce, _config2.default);
  this.appendToApp = angular.element(document.querySelector('.app'));
  this.page = getPageConfig($sce, $state);
  this.toggle = {
    sidebar: false,
    navbar: false
  };
  this.theme = {
    current: "app-default"
  };

  /* url change event */
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    _this.page = getPageConfig($sce, $state);
  });
};

exports.default = AppController;


function getPageConfig($sce, $state) {
  var config = _config2.default["PAGE"][$state.current.name];
  return (0, _extends3.default)({}, config, {
    title: $sce.trustAsHtml(config.title)
  });
}

function addAppConfig($sce, CONFIG) {
  return {
    title: $sce.trustAsHtml(CONFIG["TITLE"])
  };
}
module.exports = exports['default'];

},{"../config":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/config.js","babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/extends":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/extends.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/chart/ChartController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chart = require('../../utils/chart');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartController = function ChartController() {
  var _this = this;

  (0, _classCallCheck3.default)(this, ChartController);

  this.lineChart = {
    data: {
      labels: [2015, 2016, 2017, 2018, 2019],
      series: [[7684, 8356, 9108, 7508, 6988], [2961, 4500, 6302, 2433, 3594]]
    },
    config: {
      showArea: true,
      fullWidth: true,
      lineSmooth: false
    }
  };

  this.biPolarChart = {
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [[1, 2, 3, 1, -2, 0, 1, 0], [-2, -1, -2, -1, -2.5, -1, -2, -1], [0, 0, 0, 1, 2, 2.5, 2, 1]]
    },
    config: {
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showLabel: false,
        showGrid: false
      }
    }
  };

  this.barChart = {
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
    },
    config: {
      fullWidth: true,
      chartPadding: {
        right: 40
      }
    }
  };

  this.stackBarChart = {
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      series: [[800000, 1200000, 1400000, 1300000], [200000, 400000, 500000, 300000], [100000, 200000, 400000, 600000]]
    },
    config: {
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value / 1000 + 'k';
        }
      }
    }
  };

  this.pieChart = {
    data: {
      series: [5, 3, 4]
    },
    config: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return Math.round(value / _this.pieChart.data.series.reduce(_chart.sum) * 100) + '%';
      }
    }
  };

  this.donutChart = {
    data: {
      series: [5, 3, 4]
    },
    config: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return Math.round(value / _this.donutChart.data.series.reduce(_chart.sum) * 100) + '%';
      },
      donut: true,
      donutWidth: 60,
      labelPosition: 'outside'
    }
  };

  this.saleChart = {
    data: {
      labels: ["", "MicroSD 64Gb", "Flashdrive", "MiniPC i5", "Raspberry Pi2", ""],
      series: [[103560, 103560, 81008, 69808, 29601, 29601]]
    },
    config: {
      axisX: {
        position: 'center'
      },
      axisY: {
        offset: 0,
        showLabel: false,
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value / 1000 + 'k';
        }
      },
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      height: 250,
      high: 120000,
      showArea: true,
      stackBars: true,
      fullWidth: true,
      lineSmooth: false,
      plugins: [Chartist.plugins.ctPointLabels({
        textAnchor: 'left',
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return '$' + value.toFixed(2);
        }
      })]
    },
    responsive: [['screen and (max-width: 768px)', {
      axisX: {
        offset: 0,
        showLabel: false
      },
      height: 180
    }]]
  };
};

exports.default = ChartController;
module.exports = exports['default'];

},{"../../utils/chart":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/utils/chart.js","babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/components/ComponentController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _ModalController = require('./ModalController');

var _ModalController2 = _interopRequireDefault(_ModalController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentController = function ComponentController($uibModal) {
  (0, _classCallCheck3.default)(this, ComponentController);


  this.pagination = {
    total: 64,
    page: 2
  };

  this.modal = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'demoModal.html',
      controller: _ModalController2.default,
      controllerAs: 'md'
    });
  };
};

exports.default = ComponentController;
module.exports = exports['default'];

},{"./ModalController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/components/ModalController.js","babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/components/ModalController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalController = function ModalController($uibModalInstance) {
  (0, _classCallCheck3.default)(this, ModalController);

  console.log("test");
  this.ok = function () {
    console.log("ok");
    $uibModalInstance.close();
  };

  this.cancel = function () {
    console.log("cancel");
    $uibModalInstance.dismiss('cancel');
  };
};

exports.default = ModalController;
module.exports = exports["default"];

},{"babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/dashboard/DashboardController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _chart = require("../../utils/chart");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashboardController = function DashboardController($timeout) {
  var _this = this;

  (0, _classCallCheck3.default)(this, DashboardController);

  this.sales = {
    today: {
      title: "Sale Today",
      value: 420
    },
    like: {
      title: "Page Likes",
      value: 2340
    },
    registration: {
      title: "New Registration",
      value: 53
    }
  };

  this.saleChart = {
    data: {
      labels: ["10:20", "10:30", "10:40", "10:50", "11:00", "11:10", "11:20", "11:30", "11:40", "11:50", "12:00", "12:10", "12:20", "12:30", "12:40", "12:50", "13:00", "13:10", "13:20", "13:30"],
      series: [[2710, 2810, 4210, 8010, 19158, 35326, 80837, 79477, 88561, 67807, 70837, 55261, 66216, 10516, 13493, 12000, 14253, 33506, 56326, 78986, 20747, 44165, 13817]]
    },
    config: {
      axisX: {
        position: 'center'
      },
      axisY: {
        offset: 0,
        showLabel: false,
        labelInterpolationFnc: function labelInterpolationFnc(value, index, labels) {
          return value / 1000 + 'k';
        }
      },
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      height: 250,
      high: 120000,
      showArea: true,
      stackBars: true,
      fullWidth: true,
      lineSmooth: false,
      plugins: [Chartist.plugins.ctPointLabels({
        textAnchor: 'left',
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return '$' + value.toFixed(2);
        }
      })]
    },
    responsive: [['screen and (max-width: 768px)', {
      axisX: {
        offset: 0,
        showLabel: false
      },
      height: 180
    }]]
  };

  this.browserChart = {
    data: {
      series: [1000, 480, 705, 105, 50]
    },
    config: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return Math.round(value / _this.browserChart.data.series.reduce(_chart.sum) * 100) + '%';
      },
      startAngle: 270,
      labelPosition: 'outside',
      labelOffset: -30
    }
  };

  this.osChart = {
    data: {
      series: [1300, 200, 605, 205, 100]
    },
    config: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return Math.round(value / _this.osChart.data.series.reduce(_chart.sum) * 100) + '%';
      },
      startAngle: 0,
      donut: true,
      donutWidth: 20,
      labelPosition: 'outside',
      labelOffset: -30
    }
  };

  this.chartReload = function () {
    $timeout(function () {
      angular.element('chartist').each(function (i, elm) {
        elm.__chartist__.update();
      });
    }, 0);
  };
};

exports.default = DashboardController;
module.exports = exports["default"];

},{"../../utils/chart":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/utils/chart.js","babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/form/FormController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormController = function FormController() {
  (0, _classCallCheck3.default)(this, FormController);

  this.select2 = {
    list: [{ name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' }, { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' }, { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' }, { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' }, { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' }, { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' }, { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' }, { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' }, { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' }, { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia' }],
    years: [1, 2, 3, 4, 5]
  };
};

exports.default = FormController;
module.exports = exports['default'];

},{"babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableController = exports.FormController = exports.ComponentController = exports.ChartController = exports.MessageController = exports.DashboardController = exports.AppController = undefined;

var _AppController2 = require('./AppController');

var _AppController3 = _interopRequireDefault(_AppController2);

var _DashboardController2 = require('./dashboard/DashboardController');

var _DashboardController3 = _interopRequireDefault(_DashboardController2);

var _MessageController2 = require('./message/MessageController');

var _MessageController3 = _interopRequireDefault(_MessageController2);

var _ChartController2 = require('./chart/ChartController');

var _ChartController3 = _interopRequireDefault(_ChartController2);

var _ComponentController2 = require('./components/ComponentController');

var _ComponentController3 = _interopRequireDefault(_ComponentController2);

var _FormController2 = require('./form/FormController');

var _FormController3 = _interopRequireDefault(_FormController2);

var _TableController2 = require('./table/TableController');

var _TableController3 = _interopRequireDefault(_TableController2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AppController = _AppController3.default;
exports.DashboardController = _DashboardController3.default;
exports.MessageController = _MessageController3.default;
exports.ChartController = _ChartController3.default;
exports.ComponentController = _ComponentController3.default;
exports.FormController = _FormController3.default;
exports.TableController = _TableController3.default;

},{"./AppController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/AppController.js","./chart/ChartController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/chart/ChartController.js","./components/ComponentController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/components/ComponentController.js","./dashboard/DashboardController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/dashboard/DashboardController.js","./form/FormController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/form/FormController.js","./message/MessageController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/message/MessageController.js","./table/TableController":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/table/TableController.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/message/MessageController.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageController = function MessageController() {
  (0, _classCallCheck3.default)(this, MessageController);
};

exports.default = MessageController;
module.exports = exports["default"];

},{"babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/table/TableController.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableController = function TableController(DTOptionsBuilder, DTColumnBuilder, $q) {
  (0, _classCallCheck3.default)(this, TableController);


  this.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
    var defer = $q.defer();
    defer.resolve(_data.list);
    return defer.promise;
  }).withBootstrap().withOption('dom', '<"top"fl<"clear">>rt<"bottom"ip<"clear">>').withOption('oLanguage', {
    "sSearch": "",
    "sLengthMenu": "_MENU_"
  }).withOption('initComplete', function () {
    angular.element('.dataTables_filter input').attr('placeholder', 'Search ...');
  });

  this.dtColumns = [DTColumnBuilder.newColumn('id').withTitle('ID'), DTColumnBuilder.newColumn('firstName').withTitle('First name'), DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()];
};

exports.default = TableController;
module.exports = exports['default'];

},{"./data":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/table/data.js","babel-runtime/helpers/classCallCheck":"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/node_modules/babel-runtime/helpers/classCallCheck.js"}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/controllers/table/data.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    list: [{
        "id": 860,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 870,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 590,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 803,
        "firstName": "Luke",
        "lastName": "Kyle"
    }, {
        "id": 474,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 476,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 464,
        "firstName": "Cartman",
        "lastName": "Kyle"
    }, {
        "id": 505,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 308,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 184,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 411,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 154,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 623,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 499,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 482,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 255,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 772,
        "firstName": "Zed",
        "lastName": "Whateveryournameis"
    }, {
        "id": 398,
        "firstName": "Zed",
        "lastName": "Moliku"
    }, {
        "id": 840,
        "firstName": "Superman",
        "lastName": "Lara"
    }, {
        "id": 894,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 591,
        "firstName": "Luke",
        "lastName": "Titi"
    }, {
        "id": 767,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 133,
        "firstName": "Cartman",
        "lastName": "Moliku"
    }, {
        "id": 274,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 996,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 780,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 931,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 326,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 318,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 434,
        "firstName": "Zed",
        "lastName": "Bar"
    }, {
        "id": 480,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 187,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 829,
        "firstName": "Cartman",
        "lastName": "Bar"
    }, {
        "id": 937,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 355,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 258,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 826,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 586,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 32,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 676,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 403,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 222,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 507,
        "firstName": "Zed",
        "lastName": "Someone Last Name"
    }, {
        "id": 135,
        "firstName": "Superman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 818,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 321,
        "firstName": "Luke",
        "lastName": "Kyle"
    }, {
        "id": 187,
        "firstName": "Cartman",
        "lastName": "Someone Last Name"
    }, {
        "id": 327,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 187,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 417,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 97,
        "firstName": "Zed",
        "lastName": "Bar"
    }, {
        "id": 710,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 975,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 926,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 976,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 680,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 275,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 742,
        "firstName": "Foo",
        "lastName": "Someone Last Name"
    }, {
        "id": 598,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 113,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 228,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 820,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 700,
        "firstName": "Cartman",
        "lastName": "Someone Last Name"
    }, {
        "id": 556,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 687,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 794,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 349,
        "firstName": "Someone First Name",
        "lastName": "Whateveryournameis"
    }, {
        "id": 283,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 862,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 674,
        "firstName": "Cartman",
        "lastName": "Bar"
    }, {
        "id": 954,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 243,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 578,
        "firstName": "Superman",
        "lastName": "Lara"
    }, {
        "id": 660,
        "firstName": "Batman",
        "lastName": "Bar"
    }, {
        "id": 653,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 583,
        "firstName": "Toto",
        "lastName": "Moliku"
    }, {
        "id": 321,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 171,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 41,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 704,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 344,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 840,
        "firstName": "Toto",
        "lastName": "Whateveryournameis"
    }, {
        "id": 476,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 644,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 359,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 856,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 760,
        "firstName": "Foo",
        "lastName": "Someone Last Name"
    }, {
        "id": 432,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 299,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 693,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 11,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 305,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 961,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 54,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 734,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 466,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 439,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 995,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 878,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 479,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 252,
        "firstName": "Cartman",
        "lastName": "Moliku"
    }, {
        "id": 355,
        "firstName": "Zed",
        "lastName": "Moliku"
    }, {
        "id": 355,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 694,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 882,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 620,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 390,
        "firstName": "Superman",
        "lastName": "Lara"
    }, {
        "id": 247,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 510,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 510,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 472,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 533,
        "firstName": "Someone First Name",
        "lastName": "Kyle"
    }, {
        "id": 725,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 221,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 302,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 755,
        "firstName": "Louis",
        "lastName": "Someone Last Name"
    }, {
        "id": 671,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 649,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 22,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 544,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 114,
        "firstName": "Someone First Name",
        "lastName": "Titi"
    }, {
        "id": 674,
        "firstName": "Someone First Name",
        "lastName": "Lara"
    }, {
        "id": 571,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 554,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 203,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 89,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 299,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 48,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 726,
        "firstName": "Batman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 121,
        "firstName": "Toto",
        "lastName": "Bar"
    }, {
        "id": 992,
        "firstName": "Superman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 551,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 831,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 940,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 974,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 579,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 752,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 873,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 939,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 240,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 969,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 247,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 3,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 154,
        "firstName": "Batman",
        "lastName": "Bar"
    }, {
        "id": 274,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 31,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 789,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 634,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 972,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 199,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 562,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 460,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 817,
        "firstName": "Cartman",
        "lastName": "Someone Last Name"
    }, {
        "id": 307,
        "firstName": "Cartman",
        "lastName": "Bar"
    }, {
        "id": 10,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 167,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 107,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 432,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 381,
        "firstName": "Luke",
        "lastName": "Yoda"
    }, {
        "id": 517,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 575,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 716,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 646,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 144,
        "firstName": "Someone First Name",
        "lastName": "Yoda"
    }, {
        "id": 306,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 395,
        "firstName": "Luke",
        "lastName": "Bar"
    }, {
        "id": 777,
        "firstName": "Toto",
        "lastName": "Moliku"
    }, {
        "id": 624,
        "firstName": "Louis",
        "lastName": "Someone Last Name"
    }, {
        "id": 994,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 653,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 198,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 157,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 955,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 339,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 552,
        "firstName": "Batman",
        "lastName": "Titi"
    }, {
        "id": 735,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 294,
        "firstName": "Batman",
        "lastName": "Bar"
    }, {
        "id": 287,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 399,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 741,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 670,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 260,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 294,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 294,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 840,
        "firstName": "Zed",
        "lastName": "Titi"
    }, {
        "id": 448,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 260,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 119,
        "firstName": "Zed",
        "lastName": "Someone Last Name"
    }, {
        "id": 702,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 87,
        "firstName": "Zed",
        "lastName": "Someone Last Name"
    }, {
        "id": 161,
        "firstName": "Foo",
        "lastName": "Lara"
    }, {
        "id": 404,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 871,
        "firstName": "Toto",
        "lastName": "Lara"
    }, {
        "id": 908,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 484,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 966,
        "firstName": "Cartman",
        "lastName": "Titi"
    }, {
        "id": 392,
        "firstName": "Someone First Name",
        "lastName": "Lara"
    }, {
        "id": 738,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 560,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 507,
        "firstName": "Zed",
        "lastName": "Whateveryournameis"
    }, {
        "id": 660,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 929,
        "firstName": "Superman",
        "lastName": "Moliku"
    }, {
        "id": 42,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 853,
        "firstName": "Luke",
        "lastName": "Titi"
    }, {
        "id": 977,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 104,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 820,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 187,
        "firstName": "Batman",
        "lastName": "Titi"
    }, {
        "id": 524,
        "firstName": "Louis",
        "lastName": "Yoda"
    }, {
        "id": 830,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 156,
        "firstName": "Someone First Name",
        "lastName": "Lara"
    }, {
        "id": 918,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 286,
        "firstName": "Batman",
        "lastName": "Moliku"
    }, {
        "id": 715,
        "firstName": "Louis",
        "lastName": "Kyle"
    }, {
        "id": 501,
        "firstName": "Superman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 463,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 419,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 752,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 754,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 497,
        "firstName": "Someone First Name",
        "lastName": "Kyle"
    }, {
        "id": 722,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 986,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 908,
        "firstName": "Someone First Name",
        "lastName": "Titi"
    }, {
        "id": 559,
        "firstName": "Superman",
        "lastName": "Bar"
    }, {
        "id": 816,
        "firstName": "Foo",
        "lastName": "Bar"
    }, {
        "id": 517,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 188,
        "firstName": "Superman",
        "lastName": "Bar"
    }, {
        "id": 762,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 872,
        "firstName": "Batman",
        "lastName": "Titi"
    }, {
        "id": 107,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 968,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 643,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 88,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 844,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 334,
        "firstName": "Batman",
        "lastName": "Someone Last Name"
    }, {
        "id": 43,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 600,
        "firstName": "Someone First Name",
        "lastName": "Kyle"
    }, {
        "id": 719,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 698,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 994,
        "firstName": "Zed",
        "lastName": "Whateveryournameis"
    }, {
        "id": 595,
        "firstName": "Someone First Name",
        "lastName": "Someone Last Name"
    }, {
        "id": 223,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 392,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 972,
        "firstName": "Toto",
        "lastName": "Whateveryournameis"
    }, {
        "id": 155,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 956,
        "firstName": "Louis",
        "lastName": "Yoda"
    }, {
        "id": 62,
        "firstName": "Foo",
        "lastName": "Kyle"
    }, {
        "id": 689,
        "firstName": "Superman",
        "lastName": "Titi"
    }, {
        "id": 46,
        "firstName": "Foo",
        "lastName": "Someone Last Name"
    }, {
        "id": 401,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 658,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 375,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 877,
        "firstName": "Toto",
        "lastName": "Someone Last Name"
    }, {
        "id": 923,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 37,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 416,
        "firstName": "Cartman",
        "lastName": "Yoda"
    }, {
        "id": 546,
        "firstName": "Zed",
        "lastName": "Yoda"
    }, {
        "id": 282,
        "firstName": "Luke",
        "lastName": "Lara"
    }, {
        "id": 943,
        "firstName": "Superman",
        "lastName": "Yoda"
    }, {
        "id": 319,
        "firstName": "Foo",
        "lastName": "Whateveryournameis"
    }, {
        "id": 390,
        "firstName": "Louis",
        "lastName": "Lara"
    }, {
        "id": 556,
        "firstName": "Luke",
        "lastName": "Kyle"
    }, {
        "id": 255,
        "firstName": "Cartman",
        "lastName": "Whateveryournameis"
    }, {
        "id": 80,
        "firstName": "Zed",
        "lastName": "Kyle"
    }, {
        "id": 760,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 291,
        "firstName": "Louis",
        "lastName": "Titi"
    }, {
        "id": 916,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 212,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 445,
        "firstName": "Luke",
        "lastName": "Whateveryournameis"
    }, {
        "id": 101,
        "firstName": "Someone First Name",
        "lastName": "Someone Last Name"
    }, {
        "id": 565,
        "firstName": "Superman",
        "lastName": "Kyle"
    }, {
        "id": 304,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 557,
        "firstName": "Foo",
        "lastName": "Titi"
    }, {
        "id": 544,
        "firstName": "Toto",
        "lastName": "Kyle"
    }, {
        "id": 244,
        "firstName": "Zed",
        "lastName": "Titi"
    }, {
        "id": 464,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }, {
        "id": 225,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 727,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 735,
        "firstName": "Louis",
        "lastName": "Bar"
    }, {
        "id": 334,
        "firstName": "Foo",
        "lastName": "Lara"
    }, {
        "id": 982,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 48,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 175,
        "firstName": "Luke",
        "lastName": "Moliku"
    }, {
        "id": 885,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 675,
        "firstName": "Toto",
        "lastName": "Moliku"
    }, {
        "id": 47,
        "firstName": "Superman",
        "lastName": "Someone Last Name"
    }, {
        "id": 105,
        "firstName": "Toto",
        "lastName": "Titi"
    }, {
        "id": 616,
        "firstName": "Cartman",
        "lastName": "Lara"
    }, {
        "id": 134,
        "firstName": "Someone First Name",
        "lastName": "Someone Last Name"
    }, {
        "id": 26,
        "firstName": "Foo",
        "lastName": "Moliku"
    }, {
        "id": 134,
        "firstName": "Toto",
        "lastName": "Whateveryournameis"
    }, {
        "id": 680,
        "firstName": "Zed",
        "lastName": "Lara"
    }, {
        "id": 208,
        "firstName": "Luke",
        "lastName": "Someone Last Name"
    }, {
        "id": 233,
        "firstName": "Someone First Name",
        "lastName": "Moliku"
    }, {
        "id": 131,
        "firstName": "Louis",
        "lastName": "Moliku"
    }, {
        "id": 87,
        "firstName": "Toto",
        "lastName": "Yoda"
    }, {
        "id": 356,
        "firstName": "Batman",
        "lastName": "Kyle"
    }, {
        "id": 39,
        "firstName": "Louis",
        "lastName": "Whateveryournameis"
    }, {
        "id": 867,
        "firstName": "Batman",
        "lastName": "Lara"
    }, {
        "id": 382,
        "firstName": "Someone First Name",
        "lastName": "Bar"
    }]
};
module.exports = exports["default"];

},{}],"/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/utils/chart.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = exports.sum = function sum(a, b) {
  return a + b;
};

},{}]},{},["/Users/tui2tone/Documents/workspace/tui2tone/templates/flat-admin-bootstrap-templates/src/angularjs/js/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsInNyYy9hbmd1bGFyanMvanMvYXBwLmRpcmVjdGl2ZXMuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2FwcC5qcyIsInNyYy9hbmd1bGFyanMvanMvYXBwLnJvdXRlLmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9jb25maWcuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2NvbnRyb2xsZXJzL2NoYXJ0L0NoYXJ0Q29udHJvbGxlci5qcyIsInNyYy9hbmd1bGFyanMvanMvY29udHJvbGxlcnMvY29tcG9uZW50cy9Db21wb25lbnRDb250cm9sbGVyLmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9jb250cm9sbGVycy9jb21wb25lbnRzL01vZGFsQ29udHJvbGxlci5qcyIsInNyYy9hbmd1bGFyanMvanMvY29udHJvbGxlcnMvZGFzaGJvYXJkL0Rhc2hib2FyZENvbnRyb2xsZXIuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2NvbnRyb2xsZXJzL2Zvcm0vRm9ybUNvbnRyb2xsZXIuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2NvbnRyb2xsZXJzL2luZGV4LmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9jb250cm9sbGVycy9tZXNzYWdlL01lc3NhZ2VDb250cm9sbGVyLmpzIiwic3JjL2FuZ3VsYXJqcy9qcy9jb250cm9sbGVycy90YWJsZS9UYWJsZUNvbnRyb2xsZXIuanMiLCJzcmMvYW5ndWxhcmpzL2pzL2NvbnRyb2xsZXJzL3RhYmxlL2RhdGEuanMiLCJzcmMvYW5ndWxhcmpzL2pzL3V0aWxzL2NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0MsY0FBTSxHQURQO0FBRUMscUJBQWEsUUFGZDtBQUdDLG9CQUFZO0FBSGIsS0F4cUNLLEVBNHFDTDtBQUNDLGNBQU0sR0FEUDtBQUVDLHFCQUFhLG9CQUZkO0FBR0Msb0JBQVk7QUFIYixLQTVxQ0s7QUFETyxDOzs7Ozs7Ozs7QUNBUixJQUFNLG9CQUFNLFNBQU4sR0FBTSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7QUFBRSxTQUFPLElBQUksQ0FBWDtBQUFjLENBQXRDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXHJcbm1vZHVsZS5leHBvcnRzID0gKFxyXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXHJcbikuc3BsaXQoJywnKTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xyXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcclxufSk7IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXHJcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxyXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcclxuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcclxuICAgICwgaSAgICAgID0gMFxyXG4gICAgLCByZXN1bHQgPSBbXVxyXG4gICAgLCBrZXk7XHJcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xyXG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcclxuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XHJcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxyXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXHJcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcclxuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xyXG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxyXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcclxuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xyXG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7IiwiaW1wb3J0IENPTkZJRyBmcm9tICcuL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyRGlyZWN0aXZlKCkgeyAgXG4gIGFuZ3VsYXIubW9kdWxlKENPTkZJR1tcIkFQUFwiXSlcbn0iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4vY29uZmlnJyBcbmltcG9ydCByb3V0ZSBmcm9tICcuL2FwcC5yb3V0ZSdcbmltcG9ydCB7IFJlZ2lzdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9hcHAuZGlyZWN0aXZlcydcblxuYW5ndWxhci5tb2R1bGUoQ09ORklHW1wiQVBQXCJdLCBbXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3VpLmJvb3RzdHJhcCcsXG4gICAgJ3VpLnNlbGVjdCcsXG4gICAgJ2FuZ3VsYXItY2hhcnRpc3QnLFxuICAgICdobGpzJyxcbiAgICAnZGF0YXRhYmxlcycsXG4gICAgJ2RhdGF0YWJsZXMuYm9vdHN0cmFwJyxcbiAgICAnYXBwLnRlbXBsYXRlcydcbiAgXSlcbiAgLmNvbmZpZyhyb3V0ZSlcblxuLyogcmVnaXN0ZXIgYWxsIGRpcmVjdGl2ZXMgKi9cblJlZ2lzdGVyRGlyZWN0aXZlKCkiLCJpbXBvcnQge1xuICBBcHBDb250cm9sbGVyLFxuICBEYXNoYm9hcmRDb250cm9sbGVyLFxuICBNZXNzYWdlQ29udHJvbGxlcixcbiAgQ2hhcnRDb250cm9sbGVyLFxuICBDb21wb25lbnRDb250cm9sbGVyLFxuICBGb3JtQ29udHJvbGxlcixcbiAgVGFibGVDb250cm9sbGVyXG59IGZyb20gJy4vY29udHJvbGxlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG4gIFxuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZShcIm1haW5cIiwge1xuICAgICAgdXJsOiBcIi9cIixcbiAgICAgIGNvbnRyb2xsZXI6IEFwcENvbnRyb2xsZXIsXG4gICAgICBjb250cm9sbGVyQXM6IFwibWFpblwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdtYWluLmh0bWwnLFxuICAgICAgYWJzdHJhY3Q6IHRydWVcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4uZGFzaGJvYXJkXCIsIHtcbiAgICAgIHVybDogXCJcIixcbiAgICAgIGNvbnRyb2xsZXI6IERhc2hib2FyZENvbnRyb2xsZXIsXG4gICAgICBjb250cm9sbGVyQXM6IFwidm1cIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvZGFzaGJvYXJkLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoXCJtYWluLm1lc3NhZ2luZ1wiLCB7XG4gICAgICB1cmw6IFwibWVzc2FnaW5nXCIsXG4gICAgICBjb250cm9sbGVyOiBNZXNzYWdlQ29udHJvbGxlcixcbiAgICAgIGNvbnRyb2xsZXJBczogXCJ2bVwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9tZXNzYWdlLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0c1wiLCB7XG4gICAgICB1cmw6IFwidWlraXRzXCIsXG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL21haW4uaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4udWlraXRzLmN1c3RvbWl6ZVwiLCB7XG4gICAgICB1cmw6IFwiL2N1c3RvbWl6ZVwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy91aWtpdHMvY3VzdG9taXplLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy5jb21wb25lbnRzXCIsIHtcbiAgICAgIHVybDogXCIvY29tcG9uZW50c1wiLFxuICAgICAgY29udHJvbGxlcjogQ29tcG9uZW50Q29udHJvbGxlcixcbiAgICAgIGNvbnRyb2xsZXJBczogXCJ2bVwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy91aWtpdHMvY29tcG9uZW50cy5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi51aWtpdHMuZm9ybVwiLCB7XG4gICAgICB1cmw6IFwiL2Zvcm1cIixcbiAgICAgIGNvbnRyb2xsZXI6IEZvcm1Db250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiBcInZtXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3Vpa2l0cy9mb3JtLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy5jYXJkXCIsIHtcbiAgICAgIHVybDogXCIvY2FyZFwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy91aWtpdHMvY2FyZC5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi51aWtpdHMudGFibGVcIiwge1xuICAgICAgdXJsOiBcIi90YWJsZVwiLFxuICAgICAgY29udHJvbGxlcjogVGFibGVDb250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiBcInZtXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3Vpa2l0cy90YWJsZS5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi51aWtpdHMucHJpY2luZ1wiLCB7XG4gICAgICB1cmw6IFwiL3ByaWNpbmdcIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL3ByaWNpbmcuaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4udWlraXRzLnRpbWVsaW5lXCIsIHtcbiAgICAgIHVybDogXCIvdGltZWxpbmVcIixcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdWlraXRzL3RpbWVsaW5lLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoXCJtYWluLnVpa2l0cy5jaGFydFwiLCB7XG4gICAgICB1cmw6IFwiL2NoYXJ0XCIsXG4gICAgICBjb250cm9sbGVyOiBDaGFydENvbnRyb2xsZXIsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3Vpa2l0cy9jaGFydC5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi51aWtpdHMuaWNvbnNcIiwge1xuICAgICAgdXJsOiBcIi9pY29uc1wiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy91aWtpdHMvaWNvbnMuaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4ucGFnZXNcIiwge1xuICAgICAgdXJsOiBcInBhZ2VzXCIsXG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvcGFnZXMvbWFpbi5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibWFpbi5wYWdlcy5mb3JtXCIsIHtcbiAgICAgIHVybDogXCIvZm9ybVwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9wYWdlcy9mb3JtLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoXCJtYWluLnBhZ2VzLnByb2ZpbGVcIiwge1xuICAgICAgdXJsOiBcIi9wcm9maWxlXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3BhZ2VzL3Byb2ZpbGUuaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZShcIm1haW4ucGFnZXMuc2VhcmNoXCIsIHtcbiAgICAgIHVybDogXCIvc2VhcmNoXCIsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL3BhZ2VzL3NlYXJjaC5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwibG9naW5cIiwge1xuICAgICAgdXJsOiBcIi9sb2dpblwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9wYWdlcy9sb2dpbi5odG1sJ1xuICAgIH0pXG4gICAgLnN0YXRlKFwicmVnaXN0ZXJcIiwge1xuICAgICAgdXJsOiBcIi9yZWdpc3RlclwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9wYWdlcy9yZWdpc3Rlci5odG1sJ1xuICAgIH0pXG4gIHJldHVybiAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIEFQUDogXCJhcHBcIixcbiAgVElUTEU6IFwiPHNwYW4gY2xhc3M9XFxcImhpZ2hsaWdodFxcXCI+RmxhdCB2Mzwvc3Bhbj4gQWRtaW5cIixcbiAgUEFHRToge1xuICAgIFwibWFpbi5kYXNoYm9hcmRcIjoge1xuICAgICAgbWVudTogXCJkYXNoYm9hcmRcIixcbiAgICAgIHRpdGxlOiBcIkRhc2hib2FyZFwiLFxuICAgICAgY2xhc3M6IFwiXCJcbiAgICB9LFxuICAgIFwibWFpbi5tZXNzYWdpbmdcIjoge1xuICAgICAgbWVudTogXCJtZXNzYWdpbmdcIixcbiAgICAgIHRpdGxlOiBcIk1lc3NhZ2luZ1wiLFxuICAgICAgY2xhc3M6IFwiYXBwLWZ1bGxcIlxuICAgIH0sXG4gICAgXCJtYWluLnVpa2l0cy5jdXN0b21pemVcIjoge1xuICAgICAgbWVudTogXCJ1aWtpdHNcIixcbiAgICAgIHRpdGxlOiBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPkN1c3RvbWl6ZTwvc3Bhbj5cIixcbiAgICAgIGNsYXNzOiBcIlwiXG4gICAgfSxcbiAgICBcIm1haW4udWlraXRzLmNvbXBvbmVudHNcIjoge1xuICAgICAgbWVudTogXCJ1aWtpdHNcIixcbiAgICAgIHRpdGxlOiBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPkNvbXBvbmVudDwvc3Bhbj4mbmJzcDs8c3Bhbj5LaXRzPC9zcGFuPlwiLFxuICAgICAgY2xhc3M6IFwiXCJcbiAgICB9LFxuICAgIFwibWFpbi51aWtpdHMuZm9ybVwiOiB7XG4gICAgICBtZW51OiBcInVpa2l0c1wiLFxuICAgICAgdGl0bGU6IFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+Rm9ybTwvc3Bhbj4mbmJzcDs8c3Bhbj5LaXRzPC9zcGFuPlwiLFxuICAgICAgY2xhc3M6IFwiXCJcbiAgICB9LFxuICAgIFwibWFpbi51aWtpdHMudGFibGVcIjoge1xuICAgICAgbWVudTogXCJ1aWtpdHNcIixcbiAgICAgIHRpdGxlOiBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPlRhYmxlPC9zcGFuPiZuYnNwOzxzcGFuPktpdHM8L3NwYW4+XCIsXG4gICAgICBjbGFzczogXCJcIlxuICAgIH0sXG4gICAgXCJtYWluLnVpa2l0cy5jYXJkXCI6IHtcbiAgICAgIG1lbnU6IFwidWlraXRzXCIsXG4gICAgICB0aXRsZTogXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5DYXJkPC9zcGFuPiZuYnNwOzxzcGFuPktpdHM8L3NwYW4+XCIsXG4gICAgICBjbGFzczogXCJcIlxuICAgIH0sXG4gICAgXCJtYWluLnVpa2l0cy5jaGFydFwiOiB7XG4gICAgICBtZW51OiBcInVpa2l0c1wiLFxuICAgICAgdGl0bGU6IFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+Q2hhcnQ8L3NwYW4+Jm5ic3A7PHNwYW4+S2l0czwvc3Bhbj5cIixcbiAgICAgIGNsYXNzOiBcIlwiXG4gICAgfSxcbiAgICBcIm1haW4udWlraXRzLnByaWNpbmdcIjoge1xuICAgICAgbWVudTogXCJ1aWtpdHNcIixcbiAgICAgIHRpdGxlOiBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPlByaWNpbmc8L3NwYW4+Jm5ic3A7PHNwYW4+VGFibGU8L3NwYW4+XCIsXG4gICAgICBjbGFzczogXCJcIlxuICAgIH0sXG4gICAgXCJtYWluLnBhZ2VzLnByb2ZpbGVcIjoge1xuICAgICAgbWVudTogXCJwYWdlc1wiLFxuICAgICAgdGl0bGU6IFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+UHJvZmlsZTwvc3Bhbj5cIixcbiAgICAgIGNsYXNzOiBcIlwiXG4gICAgfSxcbiAgICBcIm1haW4ucGFnZXMuZm9ybVwiOiB7XG4gICAgICBtZW51OiBcInBhZ2VzXCIsXG4gICAgICB0aXRsZTogXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5JbmZvcm1hdGlvbjwvc3Bhbj5cIixcbiAgICAgIGNsYXNzOiBcIlwiXG4gICAgfSxcbiAgICBcIm1haW4ucGFnZXMuc2VhcmNoXCI6IHtcbiAgICAgIG1lbnU6IFwicGFnZXNcIixcbiAgICAgIHRpdGxlOiBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPlNlYXJjaDwvc3Bhbj4gUmVzdWx0XCIsXG4gICAgICBjbGFzczogXCJcIlxuICAgIH0sXG4gICAgXCJsb2dpblwiOiB7XG4gICAgICBjbGFzczogXCJhcHAtbG9naW5cIlxuICAgIH1cbiAgfVxufSIsImltcG9ydCBDT05GSUcgZnJvbSAnLi4vY29uZmlnJyBcblxuY2xhc3MgQXBwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICRzY2UsICRzdGF0ZSkge1xuXG4gICAgdGhpcy5hcHAgPSBhZGRBcHBDb25maWcoJHNjZSwgQ09ORklHKVxuICAgIHRoaXMuYXBwZW5kVG9BcHAgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcCcpKTtcbiAgICB0aGlzLnBhZ2UgPSBnZXRQYWdlQ29uZmlnKCRzY2UsICRzdGF0ZSlcbiAgICB0aGlzLnRvZ2dsZSA9IHtcbiAgICAgIHNpZGViYXI6IGZhbHNlLFxuICAgICAgbmF2YmFyOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnRoZW1lID0ge1xuICAgICAgY3VycmVudDogXCJhcHAtZGVmYXVsdFwiXG4gICAgfVxuXG4gICAgLyogdXJsIGNoYW5nZSBldmVudCAqL1xuICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnBhZ2UgPSBnZXRQYWdlQ29uZmlnKCRzY2UsICRzdGF0ZSlcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRyb2xsZXJcblxuZnVuY3Rpb24gZ2V0UGFnZUNvbmZpZygkc2NlLCAkc3RhdGUpIHtcbiAgY29uc3QgY29uZmlnID0gQ09ORklHW1wiUEFHRVwiXVskc3RhdGUuY3VycmVudC5uYW1lXVxuICByZXR1cm4ge1xuICAgIC4uLmNvbmZpZyxcbiAgICB0aXRsZTogJHNjZS50cnVzdEFzSHRtbChjb25maWcudGl0bGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQXBwQ29uZmlnKCRzY2UsIENPTkZJRykge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAkc2NlLnRydXN0QXNIdG1sKENPTkZJR1tcIlRJVExFXCJdKVxuICB9XG59IiwiaW1wb3J0IHsgc3VtIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhcnQnXG5cbmNsYXNzIENoYXJ0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGluZUNoYXJ0ID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IFsyMDE1LCAyMDE2LCAyMDE3LCAyMDE4LCAyMDE5XSxcbiAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgWzc2ODQsODM1Niw5MTA4LDc1MDgsNjk4OF0sXG4gICAgICAgICAgWzI5NjEsNDUwMCw2MzAyLDI0MzMsMzU5NF0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHNob3dBcmVhOiB0cnVlLFxuICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgIGxpbmVTbW9vdGg6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iaVBvbGFyQ2hhcnQgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLFxuICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICBbMSwgMiwgMywgMSwgLTIsIDAsIDEsIDBdLFxuICAgICAgICAgIFstMiwgLTEsIC0yLCAtMSwgLTIuNSwgLTEsIC0yLCAtMV0sXG4gICAgICAgICAgWzAsIDAsIDAsIDEsIDIsIDIuNSwgMiwgMV1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBoaWdoOiAzLFxuICAgICAgICBsb3c6IC0zLFxuICAgICAgICBzaG93QXJlYTogdHJ1ZSxcbiAgICAgICAgc2hvd0xpbmU6IGZhbHNlLFxuICAgICAgICBzaG93UG9pbnQ6IGZhbHNlLFxuICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgIGF4aXNYOiB7XG4gICAgICAgICAgc2hvd0xhYmVsOiBmYWxzZSxcbiAgICAgICAgICBzaG93R3JpZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgdGhpcy5iYXJDaGFydCA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknXSxcbiAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgWzEyLCA5LCA3LCA4LCA1XSxcbiAgICAgICAgICBbMiwgMSwgMy41LCA3LCAzXSxcbiAgICAgICAgICBbMSwgMywgNCwgNSwgNl1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgICAgIGNoYXJ0UGFkZGluZzoge1xuICAgICAgICAgIHJpZ2h0OiA0MFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICB0aGlzLnN0YWNrQmFyQ2hhcnQgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICBbODAwMDAwLCAxMjAwMDAwLCAxNDAwMDAwLCAxMzAwMDAwXSxcbiAgICAgICAgICBbMjAwMDAwLCA0MDAwMDAsIDUwMDAwMCwgMzAwMDAwXSxcbiAgICAgICAgICBbMTAwMDAwLCAyMDAwMDAsIDQwMDAwMCwgNjAwMDAwXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHN0YWNrQmFyczogdHJ1ZSxcbiAgICAgICAgYXhpc1k6IHtcbiAgICAgICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlIC8gMTAwMCkgKyAnayc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5waWVDaGFydCA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VyaWVzOiBbNSwgMywgNF1cbiAgICAgIH0sXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiAodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAvIHRoaXMucGllQ2hhcnQuZGF0YS5zZXJpZXMucmVkdWNlKHN1bSkgKiAxMDApICsgJyUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kb251dENoYXJ0ID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBzZXJpZXM6IFs1LCAzLCA0XVxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdGhpcy5kb251dENoYXJ0LmRhdGEuc2VyaWVzLnJlZHVjZShzdW0pICogMTAwKSArICclJztcbiAgICAgICAgfSxcbiAgICAgICAgZG9udXQ6IHRydWUsXG4gICAgICAgIGRvbnV0V2lkdGg6IDYwLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiAnb3V0c2lkZSdcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIHRoaXMuc2FsZUNoYXJ0ID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IFtcIlwiLFwiTWljcm9TRCA2NEdiXCIsXCJGbGFzaGRyaXZlXCIsIFwiTWluaVBDIGk1XCIsIFwiUmFzcGJlcnJ5IFBpMlwiLFwiXCJdLFxuICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICBbMTAzNTYwLDEwMzU2MCw4MTAwOCw2OTgwOCwgMjk2MDEsMjk2MDFdLFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGF4aXNYOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdjZW50ZXInXG4gICAgICAgIH0sXG4gICAgICAgIGF4aXNZOiB7XG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIHNob3dMYWJlbDogZmFsc2UsXG4gICAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAvIDEwMDApICsgJ2snO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hhcnRQYWRkaW5nOiB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodDogMjUwLFxuICAgICAgICBoaWdoOiAxMjAwMDAsXG4gICAgICAgIHNob3dBcmVhOiB0cnVlLFxuICAgICAgICBzdGFja0JhcnM6IHRydWUsXG4gICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICAgICAgbGluZVNtb290aDogZmFsc2UsXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICBDaGFydGlzdC5wbHVnaW5zLmN0UG9pbnRMYWJlbHMoe1xuICAgICAgICAgICAgdGV4dEFuY2hvcjogJ2xlZnQnLFxuICAgICAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gJyQnICsgdmFsdWUudG9GaXhlZCgyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIFsnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknLCB7XG4gICAgICAgICAgYXhpc1g6IHtcbiAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIHNob3dMYWJlbDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlaWdodDogMTgwXG4gICAgICAgIH1dXG4gICAgICBdXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29udHJvbGxlcjsiLCJpbXBvcnQgTW9kYWxDb250cm9sbGVyIGZyb20gJy4vTW9kYWxDb250cm9sbGVyJ1xuXG5jbGFzcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHVpYk1vZGFsKSB7XG5cbiAgICB0aGlzLnBhZ2luYXRpb24gPSB7XG4gICAgICB0b3RhbDogNjQsXG4gICAgICBwYWdlOiAyXG4gICAgfVxuXG4gICAgdGhpcy5tb2RhbCA9ICgpID0+IHtcbiAgICAgIHZhciBtb2RhbEluc3RhbmNlID0gJHVpYk1vZGFsLm9wZW4oe1xuICAgICAgICBhbmltYXRpb246IHRydWUsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnZGVtb01vZGFsLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21kJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50Q29udHJvbGxlciIsIlxuY2xhc3MgTW9kYWxDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHVpYk1vZGFsSW5zdGFuY2UpIHtcbiAgICBjb25zb2xlLmxvZyhcInRlc3RcIilcbiAgICB0aGlzLm9rID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJva1wiKVxuICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5jYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbmNlbFwiKVxuICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbnRyb2xsZXI7IiwiaW1wb3J0IHsgc3VtIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhcnQnXG5cbmNsYXNzIERhc2hib2FyZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigkdGltZW91dCkge1xuICAgIHRoaXMuc2FsZXMgPSB7XG4gICAgICB0b2RheToge1xuICAgICAgICB0aXRsZTogXCJTYWxlIFRvZGF5XCIsXG4gICAgICAgIHZhbHVlOiA0MjBcbiAgICAgIH0sXG4gICAgICBsaWtlOiB7XG4gICAgICAgIHRpdGxlOiBcIlBhZ2UgTGlrZXNcIixcbiAgICAgICAgdmFsdWU6IDIzNDBcbiAgICAgIH0sXG4gICAgICByZWdpc3RyYXRpb246IHtcbiAgICAgICAgdGl0bGU6IFwiTmV3IFJlZ2lzdHJhdGlvblwiLFxuICAgICAgICB2YWx1ZTogNTNcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNhbGVDaGFydCA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbXCIxMDoyMFwiLCBcIjEwOjMwXCIsIFwiMTA6NDBcIiwgXCIxMDo1MFwiLCBcIjExOjAwXCIsIFwiMTE6MTBcIiwgXCIxMToyMFwiLCBcIjExOjMwXCIsIFwiMTE6NDBcIiwgXCIxMTo1MFwiLCBcIjEyOjAwXCIsIFwiMTI6MTBcIiwgXCIxMjoyMFwiLCBcIjEyOjMwXCIsIFwiMTI6NDBcIiwgXCIxMjo1MFwiLCBcIjEzOjAwXCIsIFwiMTM6MTBcIiwgXCIxMzoyMFwiLCBcIjEzOjMwXCJdLFxuICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICBbMjcxMCAsMjgxMCAsNDIxMCAsODAxMCAsMTkxNTggLDM1MzI2ICw4MDgzNyAsNzk0NzcgLDg4NTYxICw2NzgwNyAsNzA4MzcgLDU1MjYxICw2NjIxNiAsMTA1MTYgLDEzNDkzICwxMjAwMCAsMTQyNTMgLDMzNTA2ICw1NjMyNiAsNzg5ODYgLDIwNzQ3ICw0NDE2NSAsMTM4MTddLFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGF4aXNYOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdjZW50ZXInXG4gICAgICAgIH0sXG4gICAgICAgIGF4aXNZOiB7XG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIHNob3dMYWJlbDogZmFsc2UsXG4gICAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGxhYmVscykge1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAvIDEwMDApICsgJ2snO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hhcnRQYWRkaW5nOiB7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodDogMjUwLFxuICAgICAgICBoaWdoOiAxMjAwMDAsXG4gICAgICAgIHNob3dBcmVhOiB0cnVlLFxuICAgICAgICBzdGFja0JhcnM6IHRydWUsXG4gICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICAgICAgbGluZVNtb290aDogZmFsc2UsXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICBDaGFydGlzdC5wbHVnaW5zLmN0UG9pbnRMYWJlbHMoe1xuICAgICAgICAgICAgdGV4dEFuY2hvcjogJ2xlZnQnLFxuICAgICAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gJyQnICsgdmFsdWUudG9GaXhlZCgyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIFsnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCknLCB7XG4gICAgICAgICAgYXhpc1g6IHtcbiAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIHNob3dMYWJlbDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhlaWdodDogMTgwXG4gICAgICAgIH1dXG4gICAgICBdXG4gICAgfVxuXG4gICAgdGhpcy5icm93c2VyQ2hhcnQgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlcmllczogWzEwMDAsIDQ4MCwgNzA1LCAxMDUsIDUwXVxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdGhpcy5icm93c2VyQ2hhcnQuZGF0YS5zZXJpZXMucmVkdWNlKHN1bSkgKiAxMDApICsgJyUnO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydEFuZ2xlOiAyNzAsXG4gICAgICAgIGxhYmVsUG9zaXRpb246ICdvdXRzaWRlJyxcbiAgICAgICAgbGFiZWxPZmZzZXQ6IC0zMFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub3NDaGFydCA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VyaWVzOiBbMTMwMCwgMjAwLCA2MDUsIDIwNSwgMTAwXVxuICAgICAgfSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdGhpcy5vc0NoYXJ0LmRhdGEuc2VyaWVzLnJlZHVjZShzdW0pICogMTAwKSArICclJztcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRBbmdsZTogMCxcbiAgICAgICAgZG9udXQ6IHRydWUsXG4gICAgICAgIGRvbnV0V2lkdGg6IDIwLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiAnb3V0c2lkZScsXG4gICAgICAgIGxhYmVsT2Zmc2V0OiAtMzBcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0UmVsb2FkID0gKCkgPT4ge1xuICAgICAgJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBhbmd1bGFyLmVsZW1lbnQoJ2NoYXJ0aXN0JykuZWFjaChmdW5jdGlvbihpLCBlbG0pIHtcbiAgICAgICAgICBlbG0uX19jaGFydGlzdF9fLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRDb250cm9sbGVyIiwiY2xhc3MgRm9ybUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlbGVjdDIgPSB7XG4gICAgICBsaXN0OiBbXG4gICAgICAgIHsgbmFtZTogJ0FkYW0nLCAgICAgIGVtYWlsOiAnYWRhbUBlbWFpbC5jb20nLCAgICAgIGFnZTogMTIsIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzJyB9LFxuICAgICAgICB7IG5hbWU6ICdBbWFsaWUnLCAgICBlbWFpbDogJ2FtYWxpZUBlbWFpbC5jb20nLCAgICBhZ2U6IDEyLCBjb3VudHJ5OiAnQXJnZW50aW5hJyB9LFxuICAgICAgICB7IG5hbWU6ICdFc3RlZmFuw61hJywgZW1haWw6ICdlc3RlZmFuaWFAZW1haWwuY29tJywgYWdlOiAyMSwgY291bnRyeTogJ0FyZ2VudGluYScgfSxcbiAgICAgICAgeyBuYW1lOiAnQWRyaWFuJywgICAgZW1haWw6ICdhZHJpYW5AZW1haWwuY29tJywgICAgYWdlOiAyMSwgY291bnRyeTogJ0VjdWFkb3InIH0sXG4gICAgICAgIHsgbmFtZTogJ1dsYWRpbWlyJywgIGVtYWlsOiAnd2xhZGltaXJAZW1haWwuY29tJywgIGFnZTogMzAsIGNvdW50cnk6ICdFY3VhZG9yJyB9LFxuICAgICAgICB7IG5hbWU6ICdTYW1hbnRoYScsICBlbWFpbDogJ3NhbWFudGhhQGVtYWlsLmNvbScsICBhZ2U6IDMwLCBjb3VudHJ5OiAnVW5pdGVkIFN0YXRlcycgfSxcbiAgICAgICAgeyBuYW1lOiAnTmljb2xlJywgICAgZW1haWw6ICduaWNvbGVAZW1haWwuY29tJywgICAgYWdlOiA0MywgY291bnRyeTogJ0NvbG9tYmlhJyB9LFxuICAgICAgICB7IG5hbWU6ICdOYXRhc2hhJywgICBlbWFpbDogJ25hdGFzaGFAZW1haWwuY29tJywgICBhZ2U6IDU0LCBjb3VudHJ5OiAnRWN1YWRvcicgfSxcbiAgICAgICAgeyBuYW1lOiAnTWljaGFlbCcsICAgZW1haWw6ICdtaWNoYWVsQGVtYWlsLmNvbScsICAgYWdlOiAxNSwgY291bnRyeTogJ0NvbG9tYmlhJyB9LFxuICAgICAgICB7IG5hbWU6ICdOaWNvbMOhcycsICAgZW1haWw6ICduaWNvbGVAZW1haWwuY29tJywgICAgYWdlOiA0MywgY291bnRyeTogJ0NvbG9tYmlhJyB9XG4gICAgICBdLFxuICAgICAgeWVhcnM6IFsxLDIsMyw0LDVdXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sbGVyIiwiZXhwb3J0IEFwcENvbnRyb2xsZXIgZnJvbSAnLi9BcHBDb250cm9sbGVyJ1xuZXhwb3J0IERhc2hib2FyZENvbnRyb2xsZXIgZnJvbSAnLi9kYXNoYm9hcmQvRGFzaGJvYXJkQ29udHJvbGxlcic7XG5leHBvcnQgTWVzc2FnZUNvbnRyb2xsZXIgZnJvbSAnLi9tZXNzYWdlL01lc3NhZ2VDb250cm9sbGVyJztcbmV4cG9ydCBDaGFydENvbnRyb2xsZXIgZnJvbSAnLi9jaGFydC9DaGFydENvbnRyb2xsZXInO1xuZXhwb3J0IENvbXBvbmVudENvbnRyb2xsZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudENvbnRyb2xsZXInO1xuZXhwb3J0IEZvcm1Db250cm9sbGVyIGZyb20gJy4vZm9ybS9Gb3JtQ29udHJvbGxlcic7XG5leHBvcnQgVGFibGVDb250cm9sbGVyIGZyb20gJy4vdGFibGUvVGFibGVDb250cm9sbGVyJyIsImNsYXNzIE1lc3NhZ2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUNvbnRyb2xsZXIiLCJpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi9kYXRhJ1xuXG5jbGFzcyBUYWJsZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihEVE9wdGlvbnNCdWlsZGVyLCBEVENvbHVtbkJ1aWxkZXIsICRxKSB7XG5cbiAgICB0aGlzLmR0T3B0aW9ucyA9IERUT3B0aW9uc0J1aWxkZXIuZnJvbUZuUHJvbWlzZSgoKSA9PiB7XG4gICAgICAgIHZhciBkZWZlciA9ICRxLmRlZmVyKCk7XG4gICAgICAgIGRlZmVyLnJlc29sdmUobGlzdCk7XG4gICAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xuICAgICAgfSlcbiAgICAgIC53aXRoQm9vdHN0cmFwKClcbiAgICAgIC53aXRoT3B0aW9uKCdkb20nLCc8XCJ0b3BcImZsPFwiY2xlYXJcIj4+cnQ8XCJib3R0b21cImlwPFwiY2xlYXJcIj4+JylcbiAgICAgIC53aXRoT3B0aW9uKCdvTGFuZ3VhZ2UnLCB7XG4gICAgICAgIFwic1NlYXJjaFwiOiBcIlwiLFxuICAgICAgICBcInNMZW5ndGhNZW51XCI6IFwiX01FTlVfXCJcbiAgICAgIH0pXG4gICAgICAud2l0aE9wdGlvbignaW5pdENvbXBsZXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudCgnLmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0JykuYXR0cigncGxhY2Vob2xkZXInLCAnU2VhcmNoIC4uLicpO1xuICAgICAgfSlcblxuICAgIHRoaXMuZHRDb2x1bW5zID0gW1xuICAgICAgICBEVENvbHVtbkJ1aWxkZXIubmV3Q29sdW1uKCdpZCcpLndpdGhUaXRsZSgnSUQnKSxcbiAgICAgICAgRFRDb2x1bW5CdWlsZGVyLm5ld0NvbHVtbignZmlyc3ROYW1lJykud2l0aFRpdGxlKCdGaXJzdCBuYW1lJyksXG4gICAgICAgIERUQ29sdW1uQnVpbGRlci5uZXdDb2x1bW4oJ2xhc3ROYW1lJykud2l0aFRpdGxlKCdMYXN0IG5hbWUnKS5ub3RWaXNpYmxlKClcbiAgICBdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29udHJvbGxlciIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdDogW3tcbiAgICBcImlkXCI6IDg2MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogODcwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiA1OTAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogODAzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDQ3NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDQ3NixcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDQ2NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA1MDUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDMwOCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMTg0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNDExLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDE1NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDYyMyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNDk5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNDgyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMjU1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA3NzIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDM5OCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogODQwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA4OTQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA1OTEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNzY3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMTMzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMjc0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDk5NixcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDc4MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDkzMSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMzI2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDMxOCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogNDM0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA0ODAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMTg3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA4MjksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA5MzcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMzU1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiAyNTgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDgyNixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA1ODYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMzIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA2NzYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA0MDMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogMjIyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA1MDcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogMTM1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDgxOCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDMyMSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiAxODcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDMyNyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDE4NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNDE3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA5NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNzEwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogOTc1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDkyNixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogOTc2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDY4MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDI3NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNzQyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDU5OCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDExMyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMjI4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogODIwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogNzAwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NTYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNjg3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNzk0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDM0OSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMjgzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDg2MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA2NzQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA5NTQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDI0MyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDU3OCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNjYwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA2NTMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiA1ODMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiAzMjEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAxNzEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDQxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA3MDQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDM0NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogODQwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogNDc2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNjQ0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDM1OSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA4NTYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNzYwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDQzMixcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDI5OSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNjkzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAxMSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzMDUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogOTYxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDU0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNzM0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA0NjYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNDM5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA5OTUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDg3OCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDQ3OSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAyNTIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiAzNTUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDM1NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDY5NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA4ODIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIllvZGFcIlxufSwge1xuICAgIFwiaWRcIjogNjIwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDM5MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMjQ3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNTEwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA1MTAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA0NzIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDUzMyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDcyNSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMjIxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMzAyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDc1NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDY3MSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDY0OSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAyMixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NDQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDExNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDY3NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDU3MSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDU1NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogMjAzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogODksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAyOTksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA0OCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDcyNixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMTIxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogOTkyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDU1MSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA4MzEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDk0MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDk3NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDU3OSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDc1MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA4NzMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogOTM5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDI0MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA5NjksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMjQ3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiAzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMTU0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAyNzQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDMxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA3ODksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDYzNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDk3MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiAxOTksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDU2MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNDYwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA4MTcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDMwNyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDEwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDE2NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogMTA3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogNDMyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMzgxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDUxNyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNTc1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA3MTYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNjQ2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAxNDQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzMDYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAzOTUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA3NzcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA2MjQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA5OTQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNjUzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiAxOTgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDE1NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDk1NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogMzM5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA1NTIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA3MzUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogMjk0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAyODcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDM5OSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkNhcnRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA3NDEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA2NzAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDI2MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAyOTQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogMjk0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogODQwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNDQ4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMjYwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMTE5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDcwMixcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDg3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDE2MSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDQwNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDg3MSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA5MDgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDQ4NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA5NjYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogMzkyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNzM4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNTYwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA1MDcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDY2MCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiA5MjksXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNDIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDg1MyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA5NzcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMTA0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJLeWxlXCJcbn0sIHtcbiAgICBcImlkXCI6IDgyMCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogMTg3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNTI0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiA4MzAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJDYXJ0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAxNTYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA5MTgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDI4NixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNzE1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA1MDEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogNDYzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNDE5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDc1MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNzU0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA0OTcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA3MjIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogOTg2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDkwOCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDU1OSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlN1cGVybWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiA4MTYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDUxNyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAxODgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogNzYyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDg3MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkJhdG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDEwNyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogOTY4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDY0MyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogODgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogODQ0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMzM0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDQzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogNjAwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNzE5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDY5OCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDk5NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogNTk1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU29tZW9uZSBGaXJzdCBOYW1lXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDIyMyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzOTIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJGb29cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDk3MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiV2hhdGV2ZXJ5b3VybmFtZWlzXCJcbn0sIHtcbiAgICBcImlkXCI6IDE1NSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiA5NTYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDYyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNjg5LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA0NixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA0MDEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDY1OCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkJhclwiXG59LCB7XG4gICAgXCJpZFwiOiAzNzUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDg3NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogOTIzLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDM3LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNDE2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDU0NixcbiAgICBcImZpcnN0TmFtZVwiOiBcIlplZFwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDI4MixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkx1a2VcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA5NDMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJZb2RhXCJcbn0sIHtcbiAgICBcImlkXCI6IDMxOSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogMzkwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiA1NTYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogMjU1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogODAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiA3NjAsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMjkxLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTG91aXNcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA5MTYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogMjEyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA0NDUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiAxMDEsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiU29tZW9uZSBMYXN0IE5hbWVcIlxufSwge1xuICAgIFwiaWRcIjogNTY1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiU3VwZXJtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiAzMDQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlNvbWVvbmUgTGFzdCBOYW1lXCJcbn0sIHtcbiAgICBcImlkXCI6IDU1NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJUaXRpXCJcbn0sIHtcbiAgICBcImlkXCI6IDU0NCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiAyNDQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJaZWRcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA0NjQsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn0sIHtcbiAgICBcImlkXCI6IDIyNSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiVGl0aVwiXG59LCB7XG4gICAgXCJpZFwiOiA3MjcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiA3MzUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJCYXJcIlxufSwge1xuICAgIFwiaWRcIjogMzM0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiRm9vXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogOTgyLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQmF0bWFuXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkt5bGVcIlxufSwge1xuICAgIFwiaWRcIjogNDgsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAxNzUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMdWtlXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA4ODUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJMb3Vpc1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNjc1LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogNDcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTdXBlcm1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiAxMDUsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJUb3RvXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIlRpdGlcIlxufSwge1xuICAgIFwiaWRcIjogNjE2LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiQ2FydG1hblwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJMYXJhXCJcbn0sIHtcbiAgICBcImlkXCI6IDEzNCxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlNvbWVvbmUgRmlyc3QgTmFtZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiAyNixcbiAgICBcImZpcnN0TmFtZVwiOiBcIkZvb1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJNb2xpa3VcIlxufSwge1xuICAgIFwiaWRcIjogMTM0LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiVG90b1wiLFxuICAgIFwibGFzdE5hbWVcIjogXCJXaGF0ZXZlcnlvdXJuYW1laXNcIlxufSwge1xuICAgIFwiaWRcIjogNjgwLFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiWmVkXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIkxhcmFcIlxufSwge1xuICAgIFwiaWRcIjogMjA4LFxuICAgIFwiZmlyc3ROYW1lXCI6IFwiTHVrZVwiLFxuICAgIFwibGFzdE5hbWVcIjogXCJTb21lb25lIExhc3QgTmFtZVwiXG59LCB7XG4gICAgXCJpZFwiOiAyMzMsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTW9saWt1XCJcbn0sIHtcbiAgICBcImlkXCI6IDEzMSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIk1vbGlrdVwiXG59LCB7XG4gICAgXCJpZFwiOiA4NyxcbiAgICBcImZpcnN0TmFtZVwiOiBcIlRvdG9cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiWW9kYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzNTYsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiS3lsZVwiXG59LCB7XG4gICAgXCJpZFwiOiAzOSxcbiAgICBcImZpcnN0TmFtZVwiOiBcIkxvdWlzXCIsXG4gICAgXCJsYXN0TmFtZVwiOiBcIldoYXRldmVyeW91cm5hbWVpc1wiXG59LCB7XG4gICAgXCJpZFwiOiA4NjcsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJCYXRtYW5cIixcbiAgICBcImxhc3ROYW1lXCI6IFwiTGFyYVwiXG59LCB7XG4gICAgXCJpZFwiOiAzODIsXG4gICAgXCJmaXJzdE5hbWVcIjogXCJTb21lb25lIEZpcnN0IE5hbWVcIixcbiAgICBcImxhc3ROYW1lXCI6IFwiQmFyXCJcbn1dXG59IiwiZXhwb3J0IGNvbnN0IHN1bSA9IChhLCBiKSA9PiB7IHJldHVybiBhICsgYiB9Il19
