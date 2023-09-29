"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb2, mod) => function __require() {
    return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/ramda/es/F.js
  var F, F_default;
  var init_F = __esm({
    "node_modules/ramda/es/F.js"() {
      F = function() {
        return false;
      };
      F_default = F;
    }
  });

  // node_modules/ramda/es/T.js
  var T, T_default;
  var init_T = __esm({
    "node_modules/ramda/es/T.js"() {
      T = function() {
        return true;
      };
      T_default = T;
    }
  });

  // node_modules/ramda/es/__.js
  var __default;
  var init__ = __esm({
    "node_modules/ramda/es/__.js"() {
      __default = {
        "@@functional/placeholder": true
      };
    }
  });

  // node_modules/ramda/es/internal/_isPlaceholder.js
  function _isPlaceholder(a) {
    return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
  }
  var init_isPlaceholder = __esm({
    "node_modules/ramda/es/internal/_isPlaceholder.js"() {
    }
  });

  // node_modules/ramda/es/internal/_curry1.js
  function _curry1(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  }
  var init_curry1 = __esm({
    "node_modules/ramda/es/internal/_curry1.js"() {
      init_isPlaceholder();
    }
  });

  // node_modules/ramda/es/internal/_curry2.js
  function _curry2(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;
        case 1:
          return _isPlaceholder(a) ? f2 : _curry1(function(_b) {
            return fn(a, _b);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
            return fn(_a, b);
          }) : _isPlaceholder(b) ? _curry1(function(_b) {
            return fn(a, _b);
          }) : fn(a, b);
      }
    };
  }
  var init_curry2 = __esm({
    "node_modules/ramda/es/internal/_curry2.js"() {
      init_curry1();
      init_isPlaceholder();
    }
  });

  // node_modules/ramda/es/add.js
  var add, add_default;
  var init_add = __esm({
    "node_modules/ramda/es/add.js"() {
      init_curry2();
      add = /* @__PURE__ */ _curry2(function add2(a, b) {
        return Number(a) + Number(b);
      });
      add_default = add;
    }
  });

  // node_modules/ramda/es/internal/_concat.js
  function _concat(set1, set22) {
    set1 = set1 || [];
    set22 = set22 || [];
    var idx;
    var len1 = set1.length;
    var len2 = set22.length;
    var result = [];
    idx = 0;
    while (idx < len1) {
      result[result.length] = set1[idx];
      idx += 1;
    }
    idx = 0;
    while (idx < len2) {
      result[result.length] = set22[idx];
      idx += 1;
    }
    return result;
  }
  var init_concat = __esm({
    "node_modules/ramda/es/internal/_concat.js"() {
    }
  });

  // node_modules/ramda/es/internal/_arity.js
  function _arity(n2, fn) {
    switch (n2) {
      case 0:
        return function() {
          return fn.apply(this, arguments);
        };
      case 1:
        return function(a0) {
          return fn.apply(this, arguments);
        };
      case 2:
        return function(a0, a1) {
          return fn.apply(this, arguments);
        };
      case 3:
        return function(a0, a1, a2) {
          return fn.apply(this, arguments);
        };
      case 4:
        return function(a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };
      case 5:
        return function(a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };
      case 6:
        return function(a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };
      case 7:
        return function(a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };
      case 8:
        return function(a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };
      case 9:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };
      case 10:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };
      default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
  }
  var init_arity = __esm({
    "node_modules/ramda/es/internal/_arity.js"() {
    }
  });

  // node_modules/ramda/es/internal/_curryN.js
  function _curryN(length3, received, fn) {
    return function() {
      var combined = [];
      var argsIdx = 0;
      var left = length3;
      var combinedIdx = 0;
      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;
        if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }
        combined[combinedIdx] = result;
        if (!_isPlaceholder(result)) {
          left -= 1;
        }
        combinedIdx += 1;
      }
      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length3, combined, fn));
    };
  }
  var init_curryN = __esm({
    "node_modules/ramda/es/internal/_curryN.js"() {
      init_arity();
      init_isPlaceholder();
    }
  });

  // node_modules/ramda/es/curryN.js
  var curryN, curryN_default;
  var init_curryN2 = __esm({
    "node_modules/ramda/es/curryN.js"() {
      init_arity();
      init_curry1();
      init_curry2();
      init_curryN();
      curryN = /* @__PURE__ */ _curry2(function curryN2(length3, fn) {
        if (length3 === 1) {
          return _curry1(fn);
        }
        return _arity(length3, _curryN(length3, [], fn));
      });
      curryN_default = curryN;
    }
  });

  // node_modules/ramda/es/addIndex.js
  var addIndex, addIndex_default;
  var init_addIndex = __esm({
    "node_modules/ramda/es/addIndex.js"() {
      init_concat();
      init_curry1();
      init_curryN2();
      addIndex = /* @__PURE__ */ _curry1(function addIndex2(fn) {
        return curryN_default(fn.length, function() {
          var idx = 0;
          var origFn = arguments[0];
          var list = arguments[arguments.length - 1];
          var args2 = Array.prototype.slice.call(arguments, 0);
          args2[0] = function() {
            var result = origFn.apply(this, _concat(arguments, [idx, list]));
            idx += 1;
            return result;
          };
          return fn.apply(this, args2);
        });
      });
      addIndex_default = addIndex;
    }
  });

  // node_modules/ramda/es/internal/_curry3.js
  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;
        case 1:
          return _isPlaceholder(a) ? f3 : _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          });
        case 2:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function(_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          }) : _curry1(function(_c) {
            return fn(a, b, _c);
          });
        default:
          return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
            return fn(a, _b, _c);
          }) : _isPlaceholder(a) ? _curry1(function(_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder(b) ? _curry1(function(_b) {
            return fn(a, _b, c);
          }) : _isPlaceholder(c) ? _curry1(function(_c) {
            return fn(a, b, _c);
          }) : fn(a, b, c);
      }
    };
  }
  var init_curry3 = __esm({
    "node_modules/ramda/es/internal/_curry3.js"() {
      init_curry1();
      init_curry2();
      init_isPlaceholder();
    }
  });

  // node_modules/ramda/es/adjust.js
  var adjust, adjust_default;
  var init_adjust = __esm({
    "node_modules/ramda/es/adjust.js"() {
      init_concat();
      init_curry3();
      adjust = /* @__PURE__ */ _curry3(function adjust2(idx, fn, list) {
        var len = list.length;
        if (idx >= len || idx < -len) {
          return list;
        }
        var _idx = (len + idx) % len;
        var _list = _concat(list);
        _list[_idx] = fn(list[_idx]);
        return _list;
      });
      adjust_default = adjust;
    }
  });

  // node_modules/ramda/es/internal/_isArray.js
  var isArray_default;
  var init_isArray = __esm({
    "node_modules/ramda/es/internal/_isArray.js"() {
      isArray_default = Array.isArray || function _isArray(val) {
        return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
      };
    }
  });

  // node_modules/ramda/es/internal/_isTransformer.js
  function _isTransformer(obj) {
    return obj != null && typeof obj["@@transducer/step"] === "function";
  }
  var init_isTransformer = __esm({
    "node_modules/ramda/es/internal/_isTransformer.js"() {
    }
  });

  // node_modules/ramda/es/internal/_dispatchable.js
  function _dispatchable(methodNames, transducerCreator, fn) {
    return function() {
      if (arguments.length === 0) {
        return fn();
      }
      var obj = arguments[arguments.length - 1];
      if (!isArray_default(obj)) {
        var idx = 0;
        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === "function") {
            return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
          }
          idx += 1;
        }
        if (_isTransformer(obj)) {
          var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
          return transducer(obj);
        }
      }
      return fn.apply(this, arguments);
    };
  }
  var init_dispatchable = __esm({
    "node_modules/ramda/es/internal/_dispatchable.js"() {
      init_isArray();
      init_isTransformer();
    }
  });

  // node_modules/ramda/es/internal/_reduced.js
  function _reduced(x) {
    return x && x["@@transducer/reduced"] ? x : {
      "@@transducer/value": x,
      "@@transducer/reduced": true
    };
  }
  var init_reduced = __esm({
    "node_modules/ramda/es/internal/_reduced.js"() {
    }
  });

  // node_modules/ramda/es/internal/_xfBase.js
  var xfBase_default;
  var init_xfBase = __esm({
    "node_modules/ramda/es/internal/_xfBase.js"() {
      xfBase_default = {
        init: function() {
          return this.xf["@@transducer/init"]();
        },
        result: function(result) {
          return this.xf["@@transducer/result"](result);
        }
      };
    }
  });

  // node_modules/ramda/es/internal/_xall.js
  var XAll, _xall, xall_default;
  var init_xall = __esm({
    "node_modules/ramda/es/internal/_xall.js"() {
      init_curry2();
      init_reduced();
      init_xfBase();
      XAll = /* @__PURE__ */ function() {
        function XAll2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.all = true;
        }
        XAll2.prototype["@@transducer/init"] = xfBase_default.init;
        XAll2.prototype["@@transducer/result"] = function(result) {
          if (this.all) {
            result = this.xf["@@transducer/step"](result, true);
          }
          return this.xf["@@transducer/result"](result);
        };
        XAll2.prototype["@@transducer/step"] = function(result, input) {
          if (!this.f(input)) {
            this.all = false;
            result = _reduced(this.xf["@@transducer/step"](result, false));
          }
          return result;
        };
        return XAll2;
      }();
      _xall = /* @__PURE__ */ _curry2(function _xall2(f, xf) {
        return new XAll(f, xf);
      });
      xall_default = _xall;
    }
  });

  // node_modules/ramda/es/all.js
  var all, all_default;
  var init_all = __esm({
    "node_modules/ramda/es/all.js"() {
      init_curry2();
      init_dispatchable();
      init_xall();
      all = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["all"], xall_default, function all2(fn, list) {
          var idx = 0;
          while (idx < list.length) {
            if (!fn(list[idx])) {
              return false;
            }
            idx += 1;
          }
          return true;
        })
      );
      all_default = all;
    }
  });

  // node_modules/ramda/es/max.js
  var max, max_default;
  var init_max = __esm({
    "node_modules/ramda/es/max.js"() {
      init_curry2();
      max = /* @__PURE__ */ _curry2(function max2(a, b) {
        return b > a ? b : a;
      });
      max_default = max;
    }
  });

  // node_modules/ramda/es/internal/_map.js
  function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while (idx < len) {
      result[idx] = fn(functor[idx]);
      idx += 1;
    }
    return result;
  }
  var init_map = __esm({
    "node_modules/ramda/es/internal/_map.js"() {
    }
  });

  // node_modules/ramda/es/internal/_isString.js
  function _isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
  }
  var init_isString = __esm({
    "node_modules/ramda/es/internal/_isString.js"() {
    }
  });

  // node_modules/ramda/es/internal/_isArrayLike.js
  var _isArrayLike, isArrayLike_default;
  var init_isArrayLike = __esm({
    "node_modules/ramda/es/internal/_isArrayLike.js"() {
      init_curry1();
      init_isArray();
      init_isString();
      _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
        if (isArray_default(x)) {
          return true;
        }
        if (!x) {
          return false;
        }
        if (typeof x !== "object") {
          return false;
        }
        if (_isString(x)) {
          return false;
        }
        if (x.length === 0) {
          return true;
        }
        if (x.length > 0) {
          return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
        }
        return false;
      });
      isArrayLike_default = _isArrayLike;
    }
  });

  // node_modules/ramda/es/internal/_xwrap.js
  function _xwrap(fn) {
    return new XWrap(fn);
  }
  var XWrap;
  var init_xwrap = __esm({
    "node_modules/ramda/es/internal/_xwrap.js"() {
      XWrap = /* @__PURE__ */ function() {
        function XWrap2(fn) {
          this.f = fn;
        }
        XWrap2.prototype["@@transducer/init"] = function() {
          throw new Error("init not implemented on XWrap");
        };
        XWrap2.prototype["@@transducer/result"] = function(acc) {
          return acc;
        };
        XWrap2.prototype["@@transducer/step"] = function(acc, x) {
          return this.f(acc, x);
        };
        return XWrap2;
      }();
    }
  });

  // node_modules/ramda/es/bind.js
  var bind, bind_default;
  var init_bind = __esm({
    "node_modules/ramda/es/bind.js"() {
      init_arity();
      init_curry2();
      bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
        return _arity(fn.length, function() {
          return fn.apply(thisObj, arguments);
        });
      });
      bind_default = bind;
    }
  });

  // node_modules/ramda/es/internal/_reduce.js
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf["@@transducer/step"](acc, list[idx]);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      idx += 1;
    }
    return xf["@@transducer/result"](acc);
  }
  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf["@@transducer/step"](acc, step.value);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      step = iter.next();
    }
    return xf["@@transducer/result"](acc);
  }
  function _methodReduce(xf, acc, obj, methodName) {
    return xf["@@transducer/result"](obj[methodName](bind_default(xf["@@transducer/step"], xf), acc));
  }
  function _reduce(fn, acc, list) {
    if (typeof fn === "function") {
      fn = _xwrap(fn);
    }
    if (isArrayLike_default(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list["fantasy-land/reduce"] === "function") {
      return _methodReduce(fn, acc, list, "fantasy-land/reduce");
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === "function") {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === "function") {
      return _methodReduce(fn, acc, list, "reduce");
    }
    throw new TypeError("reduce: list must be array or iterable");
  }
  var symIterator;
  var init_reduce = __esm({
    "node_modules/ramda/es/internal/_reduce.js"() {
      init_isArrayLike();
      init_xwrap();
      init_bind();
      symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
    }
  });

  // node_modules/ramda/es/internal/_xmap.js
  var XMap, _xmap, xmap_default;
  var init_xmap = __esm({
    "node_modules/ramda/es/internal/_xmap.js"() {
      init_curry2();
      init_xfBase();
      XMap = /* @__PURE__ */ function() {
        function XMap2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XMap2.prototype["@@transducer/init"] = xfBase_default.init;
        XMap2.prototype["@@transducer/result"] = xfBase_default.result;
        XMap2.prototype["@@transducer/step"] = function(result, input) {
          return this.xf["@@transducer/step"](result, this.f(input));
        };
        return XMap2;
      }();
      _xmap = /* @__PURE__ */ _curry2(function _xmap2(f, xf) {
        return new XMap(f, xf);
      });
      xmap_default = _xmap;
    }
  });

  // node_modules/ramda/es/internal/_has.js
  function _has(prop3, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop3);
  }
  var init_has = __esm({
    "node_modules/ramda/es/internal/_has.js"() {
    }
  });

  // node_modules/ramda/es/internal/_isArguments.js
  var toString, _isArguments, isArguments_default;
  var init_isArguments = __esm({
    "node_modules/ramda/es/internal/_isArguments.js"() {
      init_has();
      toString = Object.prototype.toString;
      _isArguments = /* @__PURE__ */ function() {
        return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
          return toString.call(x) === "[object Arguments]";
        } : function _isArguments2(x) {
          return _has("callee", x);
        };
      }();
      isArguments_default = _isArguments;
    }
  });

  // node_modules/ramda/es/keys.js
  var hasEnumBug, nonEnumerableProps, hasArgsEnumBug, contains, keys, keys_default;
  var init_keys = __esm({
    "node_modules/ramda/es/keys.js"() {
      init_curry1();
      init_has();
      init_isArguments();
      hasEnumBug = !/* @__PURE__ */ {
        toString: null
      }.propertyIsEnumerable("toString");
      nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
      hasArgsEnumBug = /* @__PURE__ */ function() {
        "use strict";
        return arguments.propertyIsEnumerable("length");
      }();
      contains = function contains2(list, item) {
        var idx = 0;
        while (idx < list.length) {
          if (list[idx] === item) {
            return true;
          }
          idx += 1;
        }
        return false;
      };
      keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
        return Object(obj) !== obj ? [] : Object.keys(obj);
      }) : /* @__PURE__ */ _curry1(function keys3(obj) {
        if (Object(obj) !== obj) {
          return [];
        }
        var prop3, nIdx;
        var ks = [];
        var checkArgsLength = hasArgsEnumBug && isArguments_default(obj);
        for (prop3 in obj) {
          if (_has(prop3, obj) && (!checkArgsLength || prop3 !== "length")) {
            ks[ks.length] = prop3;
          }
        }
        if (hasEnumBug) {
          nIdx = nonEnumerableProps.length - 1;
          while (nIdx >= 0) {
            prop3 = nonEnumerableProps[nIdx];
            if (_has(prop3, obj) && !contains(ks, prop3)) {
              ks[ks.length] = prop3;
            }
            nIdx -= 1;
          }
        }
        return ks;
      });
      keys_default = keys;
    }
  });

  // node_modules/ramda/es/map.js
  var map, map_default;
  var init_map2 = __esm({
    "node_modules/ramda/es/map.js"() {
      init_curry2();
      init_dispatchable();
      init_map();
      init_reduce();
      init_xmap();
      init_curryN2();
      init_keys();
      map = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["fantasy-land/map", "map"], xmap_default, function map2(fn, functor) {
          switch (Object.prototype.toString.call(functor)) {
            case "[object Function]":
              return curryN_default(functor.length, function() {
                return fn.call(this, functor.apply(this, arguments));
              });
            case "[object Object]":
              return _reduce(function(acc, key) {
                acc[key] = fn(functor[key]);
                return acc;
              }, {}, keys_default(functor));
            default:
              return _map(fn, functor);
          }
        })
      );
      map_default = map;
    }
  });

  // node_modules/ramda/es/internal/_isInteger.js
  var isInteger_default;
  var init_isInteger = __esm({
    "node_modules/ramda/es/internal/_isInteger.js"() {
      isInteger_default = Number.isInteger || function _isInteger(n2) {
        return n2 << 0 === n2;
      };
    }
  });

  // node_modules/ramda/es/nth.js
  var nth, nth_default;
  var init_nth = __esm({
    "node_modules/ramda/es/nth.js"() {
      init_curry2();
      init_isString();
      nth = /* @__PURE__ */ _curry2(function nth2(offset, list) {
        var idx = offset < 0 ? list.length + offset : offset;
        return _isString(list) ? list.charAt(idx) : list[idx];
      });
      nth_default = nth;
    }
  });

  // node_modules/ramda/es/prop.js
  var prop, prop_default;
  var init_prop = __esm({
    "node_modules/ramda/es/prop.js"() {
      init_curry2();
      init_isInteger();
      init_nth();
      prop = /* @__PURE__ */ _curry2(function prop2(p, obj) {
        if (obj == null) {
          return;
        }
        return isInteger_default(p) ? nth_default(p, obj) : obj[p];
      });
      prop_default = prop;
    }
  });

  // node_modules/ramda/es/pluck.js
  var pluck, pluck_default;
  var init_pluck = __esm({
    "node_modules/ramda/es/pluck.js"() {
      init_curry2();
      init_map2();
      init_prop();
      pluck = /* @__PURE__ */ _curry2(function pluck2(p, list) {
        return map_default(prop_default(p), list);
      });
      pluck_default = pluck;
    }
  });

  // node_modules/ramda/es/reduce.js
  var reduce, reduce_default;
  var init_reduce2 = __esm({
    "node_modules/ramda/es/reduce.js"() {
      init_curry3();
      init_reduce();
      reduce = /* @__PURE__ */ _curry3(_reduce);
      reduce_default = reduce;
    }
  });

  // node_modules/ramda/es/allPass.js
  var allPass, allPass_default;
  var init_allPass = __esm({
    "node_modules/ramda/es/allPass.js"() {
      init_curry1();
      init_curryN2();
      init_max();
      init_pluck();
      init_reduce2();
      allPass = /* @__PURE__ */ _curry1(function allPass2(preds) {
        return curryN_default(reduce_default(max_default, 0, pluck_default("length", preds)), function() {
          var idx = 0;
          var len = preds.length;
          while (idx < len) {
            if (!preds[idx].apply(this, arguments)) {
              return false;
            }
            idx += 1;
          }
          return true;
        });
      });
      allPass_default = allPass;
    }
  });

  // node_modules/ramda/es/always.js
  var always, always_default;
  var init_always = __esm({
    "node_modules/ramda/es/always.js"() {
      init_curry1();
      always = /* @__PURE__ */ _curry1(function always2(val) {
        return function() {
          return val;
        };
      });
      always_default = always;
    }
  });

  // node_modules/ramda/es/and.js
  var and, and_default;
  var init_and = __esm({
    "node_modules/ramda/es/and.js"() {
      init_curry2();
      and = /* @__PURE__ */ _curry2(function and2(a, b) {
        return a && b;
      });
      and_default = and;
    }
  });

  // node_modules/ramda/es/internal/_xany.js
  var XAny, _xany, xany_default;
  var init_xany = __esm({
    "node_modules/ramda/es/internal/_xany.js"() {
      init_curry2();
      init_reduced();
      init_xfBase();
      XAny = /* @__PURE__ */ function() {
        function XAny2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.any = false;
        }
        XAny2.prototype["@@transducer/init"] = xfBase_default.init;
        XAny2.prototype["@@transducer/result"] = function(result) {
          if (!this.any) {
            result = this.xf["@@transducer/step"](result, false);
          }
          return this.xf["@@transducer/result"](result);
        };
        XAny2.prototype["@@transducer/step"] = function(result, input) {
          if (this.f(input)) {
            this.any = true;
            result = _reduced(this.xf["@@transducer/step"](result, true));
          }
          return result;
        };
        return XAny2;
      }();
      _xany = /* @__PURE__ */ _curry2(function _xany2(f, xf) {
        return new XAny(f, xf);
      });
      xany_default = _xany;
    }
  });

  // node_modules/ramda/es/any.js
  var any, any_default;
  var init_any = __esm({
    "node_modules/ramda/es/any.js"() {
      init_curry2();
      init_dispatchable();
      init_xany();
      any = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["any"], xany_default, function any2(fn, list) {
          var idx = 0;
          while (idx < list.length) {
            if (fn(list[idx])) {
              return true;
            }
            idx += 1;
          }
          return false;
        })
      );
      any_default = any;
    }
  });

  // node_modules/ramda/es/anyPass.js
  var anyPass, anyPass_default;
  var init_anyPass = __esm({
    "node_modules/ramda/es/anyPass.js"() {
      init_curry1();
      init_curryN2();
      init_max();
      init_pluck();
      init_reduce2();
      anyPass = /* @__PURE__ */ _curry1(function anyPass2(preds) {
        return curryN_default(reduce_default(max_default, 0, pluck_default("length", preds)), function() {
          var idx = 0;
          var len = preds.length;
          while (idx < len) {
            if (preds[idx].apply(this, arguments)) {
              return true;
            }
            idx += 1;
          }
          return false;
        });
      });
      anyPass_default = anyPass;
    }
  });

  // node_modules/ramda/es/ap.js
  var ap, ap_default;
  var init_ap = __esm({
    "node_modules/ramda/es/ap.js"() {
      init_concat();
      init_curry2();
      init_reduce();
      init_map2();
      ap = /* @__PURE__ */ _curry2(function ap2(applyF, applyX) {
        return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
          return applyF(x)(applyX(x));
        } : _reduce(function(acc, f) {
          return _concat(acc, map_default(f, applyX));
        }, [], applyF);
      });
      ap_default = ap;
    }
  });

  // node_modules/ramda/es/internal/_aperture.js
  function _aperture(n2, list) {
    var idx = 0;
    var limit = list.length - (n2 - 1);
    var acc = new Array(limit >= 0 ? limit : 0);
    while (idx < limit) {
      acc[idx] = Array.prototype.slice.call(list, idx, idx + n2);
      idx += 1;
    }
    return acc;
  }
  var init_aperture = __esm({
    "node_modules/ramda/es/internal/_aperture.js"() {
    }
  });

  // node_modules/ramda/es/internal/_xaperture.js
  var XAperture, _xaperture, xaperture_default;
  var init_xaperture = __esm({
    "node_modules/ramda/es/internal/_xaperture.js"() {
      init_concat();
      init_curry2();
      init_xfBase();
      XAperture = /* @__PURE__ */ function() {
        function XAperture2(n2, xf) {
          this.xf = xf;
          this.pos = 0;
          this.full = false;
          this.acc = new Array(n2);
        }
        XAperture2.prototype["@@transducer/init"] = xfBase_default.init;
        XAperture2.prototype["@@transducer/result"] = function(result) {
          this.acc = null;
          return this.xf["@@transducer/result"](result);
        };
        XAperture2.prototype["@@transducer/step"] = function(result, input) {
          this.store(input);
          return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
        };
        XAperture2.prototype.store = function(input) {
          this.acc[this.pos] = input;
          this.pos += 1;
          if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
          }
        };
        XAperture2.prototype.getCopy = function() {
          return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
        };
        return XAperture2;
      }();
      _xaperture = /* @__PURE__ */ _curry2(function _xaperture2(n2, xf) {
        return new XAperture(n2, xf);
      });
      xaperture_default = _xaperture;
    }
  });

  // node_modules/ramda/es/aperture.js
  var aperture, aperture_default;
  var init_aperture2 = __esm({
    "node_modules/ramda/es/aperture.js"() {
      init_aperture();
      init_curry2();
      init_dispatchable();
      init_xaperture();
      aperture = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], xaperture_default, _aperture)
      );
      aperture_default = aperture;
    }
  });

  // node_modules/ramda/es/append.js
  var append, append_default;
  var init_append = __esm({
    "node_modules/ramda/es/append.js"() {
      init_concat();
      init_curry2();
      append = /* @__PURE__ */ _curry2(function append2(el, list) {
        return _concat(list, [el]);
      });
      append_default = append;
    }
  });

  // node_modules/ramda/es/apply.js
  var apply, apply_default;
  var init_apply = __esm({
    "node_modules/ramda/es/apply.js"() {
      init_curry2();
      apply = /* @__PURE__ */ _curry2(function apply2(fn, args2) {
        return fn.apply(this, args2);
      });
      apply_default = apply;
    }
  });

  // node_modules/ramda/es/values.js
  var values, values_default;
  var init_values = __esm({
    "node_modules/ramda/es/values.js"() {
      init_curry1();
      init_keys();
      values = /* @__PURE__ */ _curry1(function values2(obj) {
        var props3 = keys_default(obj);
        var len = props3.length;
        var vals = [];
        var idx = 0;
        while (idx < len) {
          vals[idx] = obj[props3[idx]];
          idx += 1;
        }
        return vals;
      });
      values_default = values;
    }
  });

  // node_modules/ramda/es/applySpec.js
  function mapValues(fn, obj) {
    return isArray_default(obj) ? obj.map(fn) : keys_default(obj).reduce(function(acc, key) {
      acc[key] = fn(obj[key]);
      return acc;
    }, {});
  }
  var applySpec, applySpec_default;
  var init_applySpec = __esm({
    "node_modules/ramda/es/applySpec.js"() {
      init_curry1();
      init_isArray();
      init_apply();
      init_curryN2();
      init_max();
      init_pluck();
      init_reduce2();
      init_keys();
      init_values();
      applySpec = /* @__PURE__ */ _curry1(function applySpec2(spec) {
        spec = mapValues(function(v) {
          return typeof v == "function" ? v : applySpec2(v);
        }, spec);
        return curryN_default(reduce_default(max_default, 0, pluck_default("length", values_default(spec))), function() {
          var args2 = arguments;
          return mapValues(function(f) {
            return apply_default(f, args2);
          }, spec);
        });
      });
      applySpec_default = applySpec;
    }
  });

  // node_modules/ramda/es/applyTo.js
  var applyTo, applyTo_default;
  var init_applyTo = __esm({
    "node_modules/ramda/es/applyTo.js"() {
      init_curry2();
      applyTo = /* @__PURE__ */ _curry2(function applyTo2(x, f) {
        return f(x);
      });
      applyTo_default = applyTo;
    }
  });

  // node_modules/ramda/es/ascend.js
  var ascend, ascend_default;
  var init_ascend = __esm({
    "node_modules/ramda/es/ascend.js"() {
      init_curry3();
      ascend = /* @__PURE__ */ _curry3(function ascend2(fn, a, b) {
        var aa = fn(a);
        var bb = fn(b);
        return aa < bb ? -1 : aa > bb ? 1 : 0;
      });
      ascend_default = ascend;
    }
  });

  // node_modules/ramda/es/internal/_assoc.js
  function _assoc(prop3, val, obj) {
    if (isInteger_default(prop3) && isArray_default(obj)) {
      var arr = [].concat(obj);
      arr[prop3] = val;
      return arr;
    }
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    result[prop3] = val;
    return result;
  }
  var init_assoc = __esm({
    "node_modules/ramda/es/internal/_assoc.js"() {
      init_isArray();
      init_isInteger();
    }
  });

  // node_modules/ramda/es/isNil.js
  var isNil, isNil_default;
  var init_isNil = __esm({
    "node_modules/ramda/es/isNil.js"() {
      init_curry1();
      isNil = /* @__PURE__ */ _curry1(function isNil2(x) {
        return x == null;
      });
      isNil_default = isNil;
    }
  });

  // node_modules/ramda/es/assocPath.js
  var assocPath, assocPath_default;
  var init_assocPath = __esm({
    "node_modules/ramda/es/assocPath.js"() {
      init_curry3();
      init_has();
      init_isInteger();
      init_assoc();
      init_isNil();
      assocPath = /* @__PURE__ */ _curry3(function assocPath2(path3, val, obj) {
        if (path3.length === 0) {
          return val;
        }
        var idx = path3[0];
        if (path3.length > 1) {
          var nextObj = !isNil_default(obj) && _has(idx, obj) ? obj[idx] : isInteger_default(path3[1]) ? [] : {};
          val = assocPath2(Array.prototype.slice.call(path3, 1), val, nextObj);
        }
        return _assoc(idx, val, obj);
      });
      assocPath_default = assocPath;
    }
  });

  // node_modules/ramda/es/assoc.js
  var assoc, assoc_default;
  var init_assoc2 = __esm({
    "node_modules/ramda/es/assoc.js"() {
      init_curry3();
      init_assocPath();
      assoc = /* @__PURE__ */ _curry3(function assoc2(prop3, val, obj) {
        return assocPath_default([prop3], val, obj);
      });
      assoc_default = assoc;
    }
  });

  // node_modules/ramda/es/nAry.js
  var nAry, nAry_default;
  var init_nAry = __esm({
    "node_modules/ramda/es/nAry.js"() {
      init_curry2();
      nAry = /* @__PURE__ */ _curry2(function nAry2(n2, fn) {
        switch (n2) {
          case 0:
            return function() {
              return fn.call(this);
            };
          case 1:
            return function(a0) {
              return fn.call(this, a0);
            };
          case 2:
            return function(a0, a1) {
              return fn.call(this, a0, a1);
            };
          case 3:
            return function(a0, a1, a2) {
              return fn.call(this, a0, a1, a2);
            };
          case 4:
            return function(a0, a1, a2, a3) {
              return fn.call(this, a0, a1, a2, a3);
            };
          case 5:
            return function(a0, a1, a2, a3, a4) {
              return fn.call(this, a0, a1, a2, a3, a4);
            };
          case 6:
            return function(a0, a1, a2, a3, a4, a5) {
              return fn.call(this, a0, a1, a2, a3, a4, a5);
            };
          case 7:
            return function(a0, a1, a2, a3, a4, a5, a6) {
              return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
            };
          case 8:
            return function(a0, a1, a2, a3, a4, a5, a6, a7) {
              return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
            };
          case 9:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
              return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
            };
          case 10:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
              return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
            };
          default:
            throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
        }
      });
      nAry_default = nAry;
    }
  });

  // node_modules/ramda/es/binary.js
  var binary, binary_default;
  var init_binary = __esm({
    "node_modules/ramda/es/binary.js"() {
      init_curry1();
      init_nAry();
      binary = /* @__PURE__ */ _curry1(function binary2(fn) {
        return nAry_default(2, fn);
      });
      binary_default = binary;
    }
  });

  // node_modules/ramda/es/internal/_isFunction.js
  function _isFunction(x) {
    var type3 = Object.prototype.toString.call(x);
    return type3 === "[object Function]" || type3 === "[object AsyncFunction]" || type3 === "[object GeneratorFunction]" || type3 === "[object AsyncGeneratorFunction]";
  }
  var init_isFunction = __esm({
    "node_modules/ramda/es/internal/_isFunction.js"() {
    }
  });

  // node_modules/ramda/es/liftN.js
  var liftN, liftN_default;
  var init_liftN = __esm({
    "node_modules/ramda/es/liftN.js"() {
      init_curry2();
      init_reduce();
      init_ap();
      init_curryN2();
      init_map2();
      liftN = /* @__PURE__ */ _curry2(function liftN2(arity, fn) {
        var lifted = curryN_default(arity, fn);
        return curryN_default(arity, function() {
          return _reduce(ap_default, map_default(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
        });
      });
      liftN_default = liftN;
    }
  });

  // node_modules/ramda/es/lift.js
  var lift, lift_default;
  var init_lift = __esm({
    "node_modules/ramda/es/lift.js"() {
      init_curry1();
      init_liftN();
      lift = /* @__PURE__ */ _curry1(function lift2(fn) {
        return liftN_default(fn.length, fn);
      });
      lift_default = lift;
    }
  });

  // node_modules/ramda/es/both.js
  var both, both_default;
  var init_both = __esm({
    "node_modules/ramda/es/both.js"() {
      init_curry2();
      init_isFunction();
      init_and();
      init_lift();
      both = /* @__PURE__ */ _curry2(function both2(f, g) {
        return _isFunction(f) ? function _both() {
          return f.apply(this, arguments) && g.apply(this, arguments);
        } : lift_default(and_default)(f, g);
      });
      both_default = both;
    }
  });

  // node_modules/ramda/es/call.js
  var call, call_default;
  var init_call = __esm({
    "node_modules/ramda/es/call.js"() {
      init_curry1();
      call = /* @__PURE__ */ _curry1(function call2(fn) {
        return fn.apply(this, Array.prototype.slice.call(arguments, 1));
      });
      call_default = call;
    }
  });

  // node_modules/ramda/es/internal/_makeFlat.js
  function _makeFlat(recursive) {
    return function flatt(list) {
      var value, jlen, j;
      var result = [];
      var idx = 0;
      var ilen = list.length;
      while (idx < ilen) {
        if (isArrayLike_default(list[idx])) {
          value = recursive ? flatt(list[idx]) : list[idx];
          j = 0;
          jlen = value.length;
          while (j < jlen) {
            result[result.length] = value[j];
            j += 1;
          }
        } else {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
      return result;
    };
  }
  var init_makeFlat = __esm({
    "node_modules/ramda/es/internal/_makeFlat.js"() {
      init_isArrayLike();
    }
  });

  // node_modules/ramda/es/internal/_forceReduced.js
  function _forceReduced(x) {
    return {
      "@@transducer/value": x,
      "@@transducer/reduced": true
    };
  }
  var init_forceReduced = __esm({
    "node_modules/ramda/es/internal/_forceReduced.js"() {
    }
  });

  // node_modules/ramda/es/internal/_flatCat.js
  var preservingReduced, _flatCat, flatCat_default;
  var init_flatCat = __esm({
    "node_modules/ramda/es/internal/_flatCat.js"() {
      init_forceReduced();
      init_isArrayLike();
      init_reduce();
      init_xfBase();
      preservingReduced = function(xf) {
        return {
          "@@transducer/init": xfBase_default.init,
          "@@transducer/result": function(result) {
            return xf["@@transducer/result"](result);
          },
          "@@transducer/step": function(result, input) {
            var ret = xf["@@transducer/step"](result, input);
            return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
          }
        };
      };
      _flatCat = function _xcat(xf) {
        var rxf = preservingReduced(xf);
        return {
          "@@transducer/init": xfBase_default.init,
          "@@transducer/result": function(result) {
            return rxf["@@transducer/result"](result);
          },
          "@@transducer/step": function(result, input) {
            return !isArrayLike_default(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
          }
        };
      };
      flatCat_default = _flatCat;
    }
  });

  // node_modules/ramda/es/internal/_xchain.js
  var _xchain, xchain_default;
  var init_xchain = __esm({
    "node_modules/ramda/es/internal/_xchain.js"() {
      init_curry2();
      init_flatCat();
      init_map2();
      _xchain = /* @__PURE__ */ _curry2(function _xchain2(f, xf) {
        return map_default(f, flatCat_default(xf));
      });
      xchain_default = _xchain;
    }
  });

  // node_modules/ramda/es/chain.js
  var chain, chain_default;
  var init_chain = __esm({
    "node_modules/ramda/es/chain.js"() {
      init_curry2();
      init_dispatchable();
      init_makeFlat();
      init_xchain();
      init_map2();
      chain = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["fantasy-land/chain", "chain"], xchain_default, function chain2(fn, monad) {
          if (typeof monad === "function") {
            return function(x) {
              return fn(monad(x))(x);
            };
          }
          return _makeFlat(false)(map_default(fn, monad));
        })
      );
      chain_default = chain;
    }
  });

  // node_modules/ramda/es/clamp.js
  var clamp, clamp_default;
  var init_clamp = __esm({
    "node_modules/ramda/es/clamp.js"() {
      init_curry3();
      clamp = /* @__PURE__ */ _curry3(function clamp2(min3, max3, value) {
        if (min3 > max3) {
          throw new Error("min must not be greater than max in clamp(min, max, value)");
        }
        return value < min3 ? min3 : value > max3 ? max3 : value;
      });
      clamp_default = clamp;
    }
  });

  // node_modules/ramda/es/internal/_cloneRegExp.js
  function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
  }
  var init_cloneRegExp = __esm({
    "node_modules/ramda/es/internal/_cloneRegExp.js"() {
    }
  });

  // node_modules/ramda/es/type.js
  var type, type_default;
  var init_type = __esm({
    "node_modules/ramda/es/type.js"() {
      init_curry1();
      type = /* @__PURE__ */ _curry1(function type2(val) {
        return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
      });
      type_default = type;
    }
  });

  // node_modules/ramda/es/internal/_clone.js
  function _clone(value, refFrom, refTo, deep) {
    var copy = function copy2(copiedValue) {
      var len = refFrom.length;
      var idx = 0;
      while (idx < len) {
        if (value === refFrom[idx]) {
          return refTo[idx];
        }
        idx += 1;
      }
      refFrom[idx] = value;
      refTo[idx] = copiedValue;
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
        }
      }
      return copiedValue;
    };
    switch (type_default(value)) {
      case "Object":
        return copy(Object.create(Object.getPrototypeOf(value)));
      case "Array":
        return copy([]);
      case "Date":
        return new Date(value.valueOf());
      case "RegExp":
        return _cloneRegExp(value);
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array":
        return value.slice();
      default:
        return value;
    }
  }
  var init_clone = __esm({
    "node_modules/ramda/es/internal/_clone.js"() {
      init_cloneRegExp();
      init_type();
    }
  });

  // node_modules/ramda/es/clone.js
  var clone, clone_default;
  var init_clone2 = __esm({
    "node_modules/ramda/es/clone.js"() {
      init_clone();
      init_curry1();
      clone = /* @__PURE__ */ _curry1(function clone2(value) {
        return value != null && typeof value.clone === "function" ? value.clone() : _clone(value, [], [], true);
      });
      clone_default = clone;
    }
  });

  // node_modules/ramda/es/collectBy.js
  var collectBy, collectBy_default;
  var init_collectBy = __esm({
    "node_modules/ramda/es/collectBy.js"() {
      init_curry2();
      init_reduce();
      collectBy = /* @__PURE__ */ _curry2(function collectBy2(fn, list) {
        var group = _reduce(function(o5, x) {
          var tag2 = fn(x);
          if (o5[tag2] === void 0) {
            o5[tag2] = [];
          }
          o5[tag2].push(x);
          return o5;
        }, {}, list);
        var newList = [];
        for (var tag in group) {
          newList.push(group[tag]);
        }
        return newList;
      });
      collectBy_default = collectBy;
    }
  });

  // node_modules/ramda/es/comparator.js
  var comparator, comparator_default;
  var init_comparator = __esm({
    "node_modules/ramda/es/comparator.js"() {
      init_curry1();
      comparator = /* @__PURE__ */ _curry1(function comparator2(pred) {
        return function(a, b) {
          return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
        };
      });
      comparator_default = comparator;
    }
  });

  // node_modules/ramda/es/not.js
  var not, not_default;
  var init_not = __esm({
    "node_modules/ramda/es/not.js"() {
      init_curry1();
      not = /* @__PURE__ */ _curry1(function not2(a) {
        return !a;
      });
      not_default = not;
    }
  });

  // node_modules/ramda/es/complement.js
  var complement, complement_default;
  var init_complement = __esm({
    "node_modules/ramda/es/complement.js"() {
      init_lift();
      init_not();
      complement = /* @__PURE__ */ lift_default(not_default);
      complement_default = complement;
    }
  });

  // node_modules/ramda/es/internal/_pipe.js
  function _pipe(f, g) {
    return function() {
      return g.call(this, f.apply(this, arguments));
    };
  }
  var init_pipe = __esm({
    "node_modules/ramda/es/internal/_pipe.js"() {
    }
  });

  // node_modules/ramda/es/internal/_checkForMethod.js
  function _checkForMethod(methodname, fn) {
    return function() {
      var length3 = arguments.length;
      if (length3 === 0) {
        return fn();
      }
      var obj = arguments[length3 - 1];
      return isArray_default(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length3 - 1));
    };
  }
  var init_checkForMethod = __esm({
    "node_modules/ramda/es/internal/_checkForMethod.js"() {
      init_isArray();
    }
  });

  // node_modules/ramda/es/slice.js
  var slice, slice_default;
  var init_slice = __esm({
    "node_modules/ramda/es/slice.js"() {
      init_checkForMethod();
      init_curry3();
      slice = /* @__PURE__ */ _curry3(
        /* @__PURE__ */ _checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
          return Array.prototype.slice.call(list, fromIndex, toIndex);
        })
      );
      slice_default = slice;
    }
  });

  // node_modules/ramda/es/tail.js
  var tail, tail_default;
  var init_tail = __esm({
    "node_modules/ramda/es/tail.js"() {
      init_checkForMethod();
      init_curry1();
      init_slice();
      tail = /* @__PURE__ */ _curry1(
        /* @__PURE__ */ _checkForMethod(
          "tail",
          /* @__PURE__ */ slice_default(1, Infinity)
        )
      );
      tail_default = tail;
    }
  });

  // node_modules/ramda/es/pipe.js
  function pipe() {
    if (arguments.length === 0) {
      throw new Error("pipe requires at least one argument");
    }
    return _arity(arguments[0].length, reduce_default(_pipe, arguments[0], tail_default(arguments)));
  }
  var init_pipe2 = __esm({
    "node_modules/ramda/es/pipe.js"() {
      init_arity();
      init_pipe();
      init_reduce2();
      init_tail();
    }
  });

  // node_modules/ramda/es/reverse.js
  var reverse, reverse_default;
  var init_reverse = __esm({
    "node_modules/ramda/es/reverse.js"() {
      init_curry1();
      init_isString();
      reverse = /* @__PURE__ */ _curry1(function reverse2(list) {
        return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
      });
      reverse_default = reverse;
    }
  });

  // node_modules/ramda/es/compose.js
  function compose() {
    if (arguments.length === 0) {
      throw new Error("compose requires at least one argument");
    }
    return pipe.apply(this, reverse_default(arguments));
  }
  var init_compose = __esm({
    "node_modules/ramda/es/compose.js"() {
      init_pipe2();
      init_reverse();
    }
  });

  // node_modules/ramda/es/head.js
  var head, head_default;
  var init_head = __esm({
    "node_modules/ramda/es/head.js"() {
      init_nth();
      head = /* @__PURE__ */ nth_default(0);
      head_default = head;
    }
  });

  // node_modules/ramda/es/internal/_identity.js
  function _identity(x) {
    return x;
  }
  var init_identity = __esm({
    "node_modules/ramda/es/internal/_identity.js"() {
    }
  });

  // node_modules/ramda/es/identity.js
  var identity, identity_default;
  var init_identity2 = __esm({
    "node_modules/ramda/es/identity.js"() {
      init_curry1();
      init_identity();
      identity = /* @__PURE__ */ _curry1(_identity);
      identity_default = identity;
    }
  });

  // node_modules/ramda/es/pipeWith.js
  var pipeWith, pipeWith_default;
  var init_pipeWith = __esm({
    "node_modules/ramda/es/pipeWith.js"() {
      init_arity();
      init_curry2();
      init_head();
      init_reduce();
      init_tail();
      init_identity2();
      pipeWith = /* @__PURE__ */ _curry2(function pipeWith2(xf, list) {
        if (list.length <= 0) {
          return identity_default;
        }
        var headList = head_default(list);
        var tailList = tail_default(list);
        return _arity(headList.length, function() {
          return _reduce(function(result, f) {
            return xf.call(this, f, result);
          }, headList.apply(this, arguments), tailList);
        });
      });
      pipeWith_default = pipeWith;
    }
  });

  // node_modules/ramda/es/composeWith.js
  var composeWith, composeWith_default;
  var init_composeWith = __esm({
    "node_modules/ramda/es/composeWith.js"() {
      init_curry2();
      init_pipeWith();
      init_reverse();
      composeWith = /* @__PURE__ */ _curry2(function composeWith2(xf, list) {
        return pipeWith_default.apply(this, [xf, reverse_default(list)]);
      });
      composeWith_default = composeWith;
    }
  });

  // node_modules/ramda/es/internal/_arrayFromIterator.js
  function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while (!(next = iter.next()).done) {
      list.push(next.value);
    }
    return list;
  }
  var init_arrayFromIterator = __esm({
    "node_modules/ramda/es/internal/_arrayFromIterator.js"() {
    }
  });

  // node_modules/ramda/es/internal/_includesWith.js
  function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (pred(x, list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }
  var init_includesWith = __esm({
    "node_modules/ramda/es/internal/_includesWith.js"() {
    }
  });

  // node_modules/ramda/es/internal/_functionName.js
  function _functionName(f) {
    var match3 = String(f).match(/^function (\w*)/);
    return match3 == null ? "" : match3[1];
  }
  var init_functionName = __esm({
    "node_modules/ramda/es/internal/_functionName.js"() {
    }
  });

  // node_modules/ramda/es/internal/_objectIs.js
  function _objectIs(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    } else {
      return a !== a && b !== b;
    }
  }
  var objectIs_default;
  var init_objectIs = __esm({
    "node_modules/ramda/es/internal/_objectIs.js"() {
      objectIs_default = typeof Object.is === "function" ? Object.is : _objectIs;
    }
  });

  // node_modules/ramda/es/internal/_equals.js
  function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator(aIterator);
    var b = _arrayFromIterator(bIterator);
    function eq(_a, _b) {
      return _equals(_a, _b, stackA.slice(), stackB.slice());
    }
    return !_includesWith(function(b2, aItem) {
      return !_includesWith(eq, aItem, b2);
    }, b, a);
  }
  function _equals(a, b, stackA, stackB) {
    if (objectIs_default(a, b)) {
      return true;
    }
    var typeA = type_default(a);
    if (typeA !== type_default(b)) {
      return false;
    }
    if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
      return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
    }
    if (typeof a.equals === "function" || typeof b.equals === "function") {
      return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
    }
    switch (typeA) {
      case "Arguments":
      case "Array":
      case "Object":
        if (typeof a.constructor === "function" && _functionName(a.constructor) === "Promise") {
          return a === b;
        }
        break;
      case "Boolean":
      case "Number":
      case "String":
        if (!(typeof a === typeof b && objectIs_default(a.valueOf(), b.valueOf()))) {
          return false;
        }
        break;
      case "Date":
        if (!objectIs_default(a.valueOf(), b.valueOf())) {
          return false;
        }
        break;
      case "Error":
        return a.name === b.name && a.message === b.message;
      case "RegExp":
        if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
          return false;
        }
        break;
    }
    var idx = stackA.length - 1;
    while (idx >= 0) {
      if (stackA[idx] === a) {
        return stackB[idx] === b;
      }
      idx -= 1;
    }
    switch (typeA) {
      case "Map":
        if (a.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
      case "Set":
        if (a.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
      case "Arguments":
      case "Array":
      case "Object":
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "Error":
      case "RegExp":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "ArrayBuffer":
        break;
      default:
        return false;
    }
    var keysA = keys_default(a);
    if (keysA.length !== keys_default(b).length) {
      return false;
    }
    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);
    idx = keysA.length - 1;
    while (idx >= 0) {
      var key = keysA[idx];
      if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
        return false;
      }
      idx -= 1;
    }
    return true;
  }
  var init_equals = __esm({
    "node_modules/ramda/es/internal/_equals.js"() {
      init_arrayFromIterator();
      init_includesWith();
      init_functionName();
      init_has();
      init_objectIs();
      init_keys();
      init_type();
    }
  });

  // node_modules/ramda/es/equals.js
  var equals, equals_default;
  var init_equals2 = __esm({
    "node_modules/ramda/es/equals.js"() {
      init_curry2();
      init_equals();
      equals = /* @__PURE__ */ _curry2(function equals2(a, b) {
        return _equals(a, b, [], []);
      });
      equals_default = equals;
    }
  });

  // node_modules/ramda/es/internal/_indexOf.js
  function _indexOf(list, a, idx) {
    var inf, item;
    if (typeof list.indexOf === "function") {
      switch (typeof a) {
        case "number":
          if (a === 0) {
            inf = 1 / a;
            while (idx < list.length) {
              item = list[idx];
              if (item === 0 && 1 / item === inf) {
                return idx;
              }
              idx += 1;
            }
            return -1;
          } else if (a !== a) {
            while (idx < list.length) {
              item = list[idx];
              if (typeof item === "number" && item !== item) {
                return idx;
              }
              idx += 1;
            }
            return -1;
          }
          return list.indexOf(a, idx);
        case "string":
        case "boolean":
        case "function":
        case "undefined":
          return list.indexOf(a, idx);
        case "object":
          if (a === null) {
            return list.indexOf(a, idx);
          }
      }
    }
    while (idx < list.length) {
      if (equals_default(list[idx], a)) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  }
  var init_indexOf = __esm({
    "node_modules/ramda/es/internal/_indexOf.js"() {
      init_equals2();
    }
  });

  // node_modules/ramda/es/internal/_includes.js
  function _includes(a, list) {
    return _indexOf(list, a, 0) >= 0;
  }
  var init_includes = __esm({
    "node_modules/ramda/es/internal/_includes.js"() {
      init_indexOf();
    }
  });

  // node_modules/ramda/es/internal/_quote.js
  function _quote(s) {
    var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + escaped.replace(/"/g, '\\"') + '"';
  }
  var init_quote = __esm({
    "node_modules/ramda/es/internal/_quote.js"() {
    }
  });

  // node_modules/ramda/es/internal/_toISOString.js
  var pad, _toISOString, toISOString_default;
  var init_toISOString = __esm({
    "node_modules/ramda/es/internal/_toISOString.js"() {
      pad = function pad2(n2) {
        return (n2 < 10 ? "0" : "") + n2;
      };
      _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
        return d.toISOString();
      } : function _toISOString3(d) {
        return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
      };
      toISOString_default = _toISOString;
    }
  });

  // node_modules/ramda/es/internal/_complement.js
  function _complement(f) {
    return function() {
      return !f.apply(this, arguments);
    };
  }
  var init_complement2 = __esm({
    "node_modules/ramda/es/internal/_complement.js"() {
    }
  });

  // node_modules/ramda/es/internal/_filter.js
  function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    while (idx < len) {
      if (fn(list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  }
  var init_filter = __esm({
    "node_modules/ramda/es/internal/_filter.js"() {
    }
  });

  // node_modules/ramda/es/internal/_isObject.js
  function _isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]";
  }
  var init_isObject = __esm({
    "node_modules/ramda/es/internal/_isObject.js"() {
    }
  });

  // node_modules/ramda/es/internal/_xfilter.js
  var XFilter, _xfilter, xfilter_default;
  var init_xfilter = __esm({
    "node_modules/ramda/es/internal/_xfilter.js"() {
      init_curry2();
      init_xfBase();
      XFilter = /* @__PURE__ */ function() {
        function XFilter2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XFilter2.prototype["@@transducer/init"] = xfBase_default.init;
        XFilter2.prototype["@@transducer/result"] = xfBase_default.result;
        XFilter2.prototype["@@transducer/step"] = function(result, input) {
          return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
        };
        return XFilter2;
      }();
      _xfilter = /* @__PURE__ */ _curry2(function _xfilter2(f, xf) {
        return new XFilter(f, xf);
      });
      xfilter_default = _xfilter;
    }
  });

  // node_modules/ramda/es/filter.js
  var filter, filter_default;
  var init_filter2 = __esm({
    "node_modules/ramda/es/filter.js"() {
      init_curry2();
      init_dispatchable();
      init_filter();
      init_isObject();
      init_reduce();
      init_xfilter();
      init_keys();
      filter = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["fantasy-land/filter", "filter"], xfilter_default, function(pred, filterable) {
          return _isObject(filterable) ? _reduce(function(acc, key) {
            if (pred(filterable[key])) {
              acc[key] = filterable[key];
            }
            return acc;
          }, {}, keys_default(filterable)) : (
            // else
            _filter(pred, filterable)
          );
        })
      );
      filter_default = filter;
    }
  });

  // node_modules/ramda/es/reject.js
  var reject2, reject_default;
  var init_reject = __esm({
    "node_modules/ramda/es/reject.js"() {
      init_complement2();
      init_curry2();
      init_filter2();
      reject2 = /* @__PURE__ */ _curry2(function reject3(pred, filterable) {
        return filter_default(_complement(pred), filterable);
      });
      reject_default = reject2;
    }
  });

  // node_modules/ramda/es/internal/_toString.js
  function _toString(x, seen) {
    var recur = function recur2(y) {
      var xs = seen.concat([x]);
      return _includes(y, xs) ? "<Circular>" : _toString(y, xs);
    };
    var mapPairs = function(obj, keys4) {
      return _map(function(k) {
        return _quote(k) + ": " + recur(obj[k]);
      }, keys4.slice().sort());
    };
    switch (Object.prototype.toString.call(x)) {
      case "[object Arguments]":
        return "(function() { return arguments; }(" + _map(recur, x).join(", ") + "))";
      case "[object Array]":
        return "[" + _map(recur, x).concat(mapPairs(x, reject_default(function(k) {
          return /^\d+$/.test(k);
        }, keys_default(x)))).join(", ") + "]";
      case "[object Boolean]":
        return typeof x === "object" ? "new Boolean(" + recur(x.valueOf()) + ")" : x.toString();
      case "[object Date]":
        return "new Date(" + (isNaN(x.valueOf()) ? recur(NaN) : _quote(toISOString_default(x))) + ")";
      case "[object Null]":
        return "null";
      case "[object Number]":
        return typeof x === "object" ? "new Number(" + recur(x.valueOf()) + ")" : 1 / x === -Infinity ? "-0" : x.toString(10);
      case "[object String]":
        return typeof x === "object" ? "new String(" + recur(x.valueOf()) + ")" : _quote(x);
      case "[object Undefined]":
        return "undefined";
      default:
        if (typeof x.toString === "function") {
          var repr = x.toString();
          if (repr !== "[object Object]") {
            return repr;
          }
        }
        return "{" + mapPairs(x, keys_default(x)).join(", ") + "}";
    }
  }
  var init_toString = __esm({
    "node_modules/ramda/es/internal/_toString.js"() {
      init_includes();
      init_map();
      init_quote();
      init_toISOString();
      init_keys();
      init_reject();
    }
  });

  // node_modules/ramda/es/toString.js
  var toString2, toString_default;
  var init_toString2 = __esm({
    "node_modules/ramda/es/toString.js"() {
      init_curry1();
      init_toString();
      toString2 = /* @__PURE__ */ _curry1(function toString3(val) {
        return _toString(val, []);
      });
      toString_default = toString2;
    }
  });

  // node_modules/ramda/es/concat.js
  var concat, concat_default;
  var init_concat2 = __esm({
    "node_modules/ramda/es/concat.js"() {
      init_curry2();
      init_isArray();
      init_isFunction();
      init_isString();
      init_toString2();
      concat = /* @__PURE__ */ _curry2(function concat2(a, b) {
        if (isArray_default(a)) {
          if (isArray_default(b)) {
            return a.concat(b);
          }
          throw new TypeError(toString_default(b) + " is not an array");
        }
        if (_isString(a)) {
          if (_isString(b)) {
            return a + b;
          }
          throw new TypeError(toString_default(b) + " is not a string");
        }
        if (a != null && _isFunction(a["fantasy-land/concat"])) {
          return a["fantasy-land/concat"](b);
        }
        if (a != null && _isFunction(a.concat)) {
          return a.concat(b);
        }
        throw new TypeError(toString_default(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
      });
      concat_default = concat;
    }
  });

  // node_modules/ramda/es/cond.js
  var cond, cond_default;
  var init_cond = __esm({
    "node_modules/ramda/es/cond.js"() {
      init_arity();
      init_curry1();
      init_map2();
      init_max();
      init_reduce2();
      cond = /* @__PURE__ */ _curry1(function cond2(pairs) {
        var arity = reduce_default(max_default, 0, map_default(function(pair3) {
          return pair3[0].length;
        }, pairs));
        return _arity(arity, function() {
          var idx = 0;
          while (idx < pairs.length) {
            if (pairs[idx][0].apply(this, arguments)) {
              return pairs[idx][1].apply(this, arguments);
            }
            idx += 1;
          }
        });
      });
      cond_default = cond;
    }
  });

  // node_modules/ramda/es/curry.js
  var curry, curry_default;
  var init_curry = __esm({
    "node_modules/ramda/es/curry.js"() {
      init_curry1();
      init_curryN2();
      curry = /* @__PURE__ */ _curry1(function curry2(fn) {
        return curryN_default(fn.length, fn);
      });
      curry_default = curry;
    }
  });

  // node_modules/ramda/es/constructN.js
  var constructN, constructN_default;
  var init_constructN = __esm({
    "node_modules/ramda/es/constructN.js"() {
      init_curry2();
      init_curry();
      init_nAry();
      constructN = /* @__PURE__ */ _curry2(function constructN2(n2, Fn) {
        if (n2 > 10) {
          throw new Error("Constructor with greater than ten arguments");
        }
        if (n2 === 0) {
          return function() {
            return new Fn();
          };
        }
        return curry_default(nAry_default(n2, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
          switch (arguments.length) {
            case 1:
              return new Fn($0);
            case 2:
              return new Fn($0, $1);
            case 3:
              return new Fn($0, $1, $2);
            case 4:
              return new Fn($0, $1, $2, $3);
            case 5:
              return new Fn($0, $1, $2, $3, $4);
            case 6:
              return new Fn($0, $1, $2, $3, $4, $5);
            case 7:
              return new Fn($0, $1, $2, $3, $4, $5, $6);
            case 8:
              return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
            case 9:
              return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
            case 10:
              return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
          }
        }));
      });
      constructN_default = constructN;
    }
  });

  // node_modules/ramda/es/construct.js
  var construct, construct_default;
  var init_construct = __esm({
    "node_modules/ramda/es/construct.js"() {
      init_curry1();
      init_constructN();
      construct = /* @__PURE__ */ _curry1(function construct2(Fn) {
        return constructN_default(Fn.length, Fn);
      });
      construct_default = construct;
    }
  });

  // node_modules/ramda/es/converge.js
  var converge, converge_default;
  var init_converge = __esm({
    "node_modules/ramda/es/converge.js"() {
      init_curry2();
      init_map();
      init_curryN2();
      init_max();
      init_pluck();
      init_reduce2();
      converge = /* @__PURE__ */ _curry2(function converge2(after, fns) {
        return curryN_default(reduce_default(max_default, 0, pluck_default("length", fns)), function() {
          var args2 = arguments;
          var context = this;
          return after.apply(context, _map(function(fn) {
            return fn.apply(context, args2);
          }, fns));
        });
      });
      converge_default = converge;
    }
  });

  // node_modules/ramda/es/count.js
  var count, count_default;
  var init_count = __esm({
    "node_modules/ramda/es/count.js"() {
      init_reduce();
      init_curry();
      count = /* @__PURE__ */ curry_default(function(pred, list) {
        return _reduce(function(a, e2) {
          return pred(e2) ? a + 1 : a;
        }, 0, list);
      });
      count_default = count;
    }
  });

  // node_modules/ramda/es/internal/_xreduceBy.js
  var XReduceBy, _xreduceBy, xreduceBy_default;
  var init_xreduceBy = __esm({
    "node_modules/ramda/es/internal/_xreduceBy.js"() {
      init_curryN();
      init_has();
      init_xfBase();
      XReduceBy = /* @__PURE__ */ function() {
        function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
          this.valueFn = valueFn;
          this.valueAcc = valueAcc;
          this.keyFn = keyFn;
          this.xf = xf;
          this.inputs = {};
        }
        XReduceBy2.prototype["@@transducer/init"] = xfBase_default.init;
        XReduceBy2.prototype["@@transducer/result"] = function(result) {
          var key;
          for (key in this.inputs) {
            if (_has(key, this.inputs)) {
              result = this.xf["@@transducer/step"](result, this.inputs[key]);
              if (result["@@transducer/reduced"]) {
                result = result["@@transducer/value"];
                break;
              }
            }
          }
          this.inputs = null;
          return this.xf["@@transducer/result"](result);
        };
        XReduceBy2.prototype["@@transducer/step"] = function(result, input) {
          var key = this.keyFn(input);
          this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
          this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
          return result;
        };
        return XReduceBy2;
      }();
      _xreduceBy = /* @__PURE__ */ _curryN(4, [], function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
        return new XReduceBy(valueFn, valueAcc, keyFn, xf);
      });
      xreduceBy_default = _xreduceBy;
    }
  });

  // node_modules/ramda/es/reduceBy.js
  var reduceBy, reduceBy_default;
  var init_reduceBy = __esm({
    "node_modules/ramda/es/reduceBy.js"() {
      init_clone();
      init_curryN();
      init_dispatchable();
      init_has();
      init_reduce();
      init_reduced();
      init_xreduceBy();
      reduceBy = /* @__PURE__ */ _curryN(
        4,
        [],
        /* @__PURE__ */ _dispatchable([], xreduceBy_default, function reduceBy2(valueFn, valueAcc, keyFn, list) {
          return _reduce(function(acc, elt) {
            var key = keyFn(elt);
            var value = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, [], [], false), elt);
            if (value && value["@@transducer/reduced"]) {
              return _reduced(acc);
            }
            acc[key] = value;
            return acc;
          }, {}, list);
        })
      );
      reduceBy_default = reduceBy;
    }
  });

  // node_modules/ramda/es/countBy.js
  var countBy, countBy_default;
  var init_countBy = __esm({
    "node_modules/ramda/es/countBy.js"() {
      init_reduceBy();
      countBy = /* @__PURE__ */ reduceBy_default(function(acc, elem) {
        return acc + 1;
      }, 0);
      countBy_default = countBy;
    }
  });

  // node_modules/ramda/es/dec.js
  var dec, dec_default;
  var init_dec = __esm({
    "node_modules/ramda/es/dec.js"() {
      init_add();
      dec = /* @__PURE__ */ add_default(-1);
      dec_default = dec;
    }
  });

  // node_modules/ramda/es/defaultTo.js
  var defaultTo, defaultTo_default;
  var init_defaultTo = __esm({
    "node_modules/ramda/es/defaultTo.js"() {
      init_curry2();
      defaultTo = /* @__PURE__ */ _curry2(function defaultTo2(d, v) {
        return v == null || v !== v ? d : v;
      });
      defaultTo_default = defaultTo;
    }
  });

  // node_modules/ramda/es/descend.js
  var descend, descend_default;
  var init_descend = __esm({
    "node_modules/ramda/es/descend.js"() {
      init_curry3();
      descend = /* @__PURE__ */ _curry3(function descend2(fn, a, b) {
        var aa = fn(a);
        var bb = fn(b);
        return aa > bb ? -1 : aa < bb ? 1 : 0;
      });
      descend_default = descend;
    }
  });

  // node_modules/ramda/es/internal/_Set.js
  function hasOrAdd(item, shouldAdd, set5) {
    var type3 = typeof item;
    var prevSize, newSize;
    switch (type3) {
      case "string":
      case "number":
        if (item === 0 && 1 / item === -Infinity) {
          if (set5._items["-0"]) {
            return true;
          } else {
            if (shouldAdd) {
              set5._items["-0"] = true;
            }
            return false;
          }
        }
        if (set5._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set5._nativeSet.size;
            set5._nativeSet.add(item);
            newSize = set5._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set5._nativeSet.has(item);
          }
        } else {
          if (!(type3 in set5._items)) {
            if (shouldAdd) {
              set5._items[type3] = {};
              set5._items[type3][item] = true;
            }
            return false;
          } else if (item in set5._items[type3]) {
            return true;
          } else {
            if (shouldAdd) {
              set5._items[type3][item] = true;
            }
            return false;
          }
        }
      case "boolean":
        if (type3 in set5._items) {
          var bIdx = item ? 1 : 0;
          if (set5._items[type3][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set5._items[type3][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set5._items[type3] = item ? [false, true] : [true, false];
          }
          return false;
        }
      case "function":
        if (set5._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set5._nativeSet.size;
            set5._nativeSet.add(item);
            newSize = set5._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set5._nativeSet.has(item);
          }
        } else {
          if (!(type3 in set5._items)) {
            if (shouldAdd) {
              set5._items[type3] = [item];
            }
            return false;
          }
          if (!_includes(item, set5._items[type3])) {
            if (shouldAdd) {
              set5._items[type3].push(item);
            }
            return false;
          }
          return true;
        }
      case "undefined":
        if (set5._items[type3]) {
          return true;
        } else {
          if (shouldAdd) {
            set5._items[type3] = true;
          }
          return false;
        }
      case "object":
        if (item === null) {
          if (!set5._items["null"]) {
            if (shouldAdd) {
              set5._items["null"] = true;
            }
            return false;
          }
          return true;
        }
      default:
        type3 = Object.prototype.toString.call(item);
        if (!(type3 in set5._items)) {
          if (shouldAdd) {
            set5._items[type3] = [item];
          }
          return false;
        }
        if (!_includes(item, set5._items[type3])) {
          if (shouldAdd) {
            set5._items[type3].push(item);
          }
          return false;
        }
        return true;
    }
  }
  var _Set, Set_default;
  var init_Set = __esm({
    "node_modules/ramda/es/internal/_Set.js"() {
      init_includes();
      _Set = /* @__PURE__ */ function() {
        function _Set2() {
          this._nativeSet = typeof Set === "function" ? /* @__PURE__ */ new Set() : null;
          this._items = {};
        }
        _Set2.prototype.add = function(item) {
          return !hasOrAdd(item, true, this);
        };
        _Set2.prototype.has = function(item) {
          return hasOrAdd(item, false, this);
        };
        return _Set2;
      }();
      Set_default = _Set;
    }
  });

  // node_modules/ramda/es/difference.js
  var difference, difference_default;
  var init_difference = __esm({
    "node_modules/ramda/es/difference.js"() {
      init_curry2();
      init_Set();
      difference = /* @__PURE__ */ _curry2(function difference2(first, second) {
        var out = [];
        var idx = 0;
        var firstLen = first.length;
        var secondLen = second.length;
        var toFilterOut = new Set_default();
        for (var i2 = 0; i2 < secondLen; i2 += 1) {
          toFilterOut.add(second[i2]);
        }
        while (idx < firstLen) {
          if (toFilterOut.add(first[idx])) {
            out[out.length] = first[idx];
          }
          idx += 1;
        }
        return out;
      });
      difference_default = difference;
    }
  });

  // node_modules/ramda/es/differenceWith.js
  var differenceWith, differenceWith_default;
  var init_differenceWith = __esm({
    "node_modules/ramda/es/differenceWith.js"() {
      init_includesWith();
      init_curry3();
      differenceWith = /* @__PURE__ */ _curry3(function differenceWith2(pred, first, second) {
        var out = [];
        var idx = 0;
        var firstLen = first.length;
        while (idx < firstLen) {
          if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
            out.push(first[idx]);
          }
          idx += 1;
        }
        return out;
      });
      differenceWith_default = differenceWith;
    }
  });

  // node_modules/ramda/es/remove.js
  var remove, remove_default;
  var init_remove = __esm({
    "node_modules/ramda/es/remove.js"() {
      init_curry3();
      remove = /* @__PURE__ */ _curry3(function remove2(start, count2, list) {
        var result = Array.prototype.slice.call(list, 0);
        result.splice(start, count2);
        return result;
      });
      remove_default = remove;
    }
  });

  // node_modules/ramda/es/internal/_dissoc.js
  function _dissoc(prop3, obj) {
    if (obj == null) {
      return obj;
    }
    if (isInteger_default(prop3) && isArray_default(obj)) {
      return remove_default(prop3, 1, obj);
    }
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    delete result[prop3];
    return result;
  }
  var init_dissoc = __esm({
    "node_modules/ramda/es/internal/_dissoc.js"() {
      init_isInteger();
      init_isArray();
      init_remove();
    }
  });

  // node_modules/ramda/es/dissocPath.js
  function _shallowCloneObject(prop3, obj) {
    if (isInteger_default(prop3) && isArray_default(obj)) {
      return [].concat(obj);
    }
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    return result;
  }
  var dissocPath, dissocPath_default;
  var init_dissocPath = __esm({
    "node_modules/ramda/es/dissocPath.js"() {
      init_curry2();
      init_dissoc();
      init_isInteger();
      init_isArray();
      init_assoc2();
      dissocPath = /* @__PURE__ */ _curry2(function dissocPath2(path3, obj) {
        if (obj == null) {
          return obj;
        }
        switch (path3.length) {
          case 0:
            return obj;
          case 1:
            return _dissoc(path3[0], obj);
          default:
            var head3 = path3[0];
            var tail3 = Array.prototype.slice.call(path3, 1);
            if (obj[head3] == null) {
              return _shallowCloneObject(head3, obj);
            } else {
              return assoc_default(head3, dissocPath2(tail3, obj[head3]), obj);
            }
        }
      });
      dissocPath_default = dissocPath;
    }
  });

  // node_modules/ramda/es/dissoc.js
  var dissoc, dissoc_default;
  var init_dissoc2 = __esm({
    "node_modules/ramda/es/dissoc.js"() {
      init_curry2();
      init_dissocPath();
      dissoc = /* @__PURE__ */ _curry2(function dissoc2(prop3, obj) {
        return dissocPath_default([prop3], obj);
      });
      dissoc_default = dissoc;
    }
  });

  // node_modules/ramda/es/divide.js
  var divide, divide_default;
  var init_divide = __esm({
    "node_modules/ramda/es/divide.js"() {
      init_curry2();
      divide = /* @__PURE__ */ _curry2(function divide2(a, b) {
        return a / b;
      });
      divide_default = divide;
    }
  });

  // node_modules/ramda/es/internal/_xdrop.js
  var XDrop, _xdrop, xdrop_default;
  var init_xdrop = __esm({
    "node_modules/ramda/es/internal/_xdrop.js"() {
      init_curry2();
      init_xfBase();
      XDrop = /* @__PURE__ */ function() {
        function XDrop2(n2, xf) {
          this.xf = xf;
          this.n = n2;
        }
        XDrop2.prototype["@@transducer/init"] = xfBase_default.init;
        XDrop2.prototype["@@transducer/result"] = xfBase_default.result;
        XDrop2.prototype["@@transducer/step"] = function(result, input) {
          if (this.n > 0) {
            this.n -= 1;
            return result;
          }
          return this.xf["@@transducer/step"](result, input);
        };
        return XDrop2;
      }();
      _xdrop = /* @__PURE__ */ _curry2(function _xdrop2(n2, xf) {
        return new XDrop(n2, xf);
      });
      xdrop_default = _xdrop;
    }
  });

  // node_modules/ramda/es/drop.js
  var drop, drop_default;
  var init_drop = __esm({
    "node_modules/ramda/es/drop.js"() {
      init_curry2();
      init_dispatchable();
      init_xdrop();
      init_slice();
      drop = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["drop"], xdrop_default, function drop2(n2, xs) {
          return slice_default(Math.max(0, n2), Infinity, xs);
        })
      );
      drop_default = drop;
    }
  });

  // node_modules/ramda/es/internal/_xtake.js
  var XTake, _xtake, xtake_default;
  var init_xtake = __esm({
    "node_modules/ramda/es/internal/_xtake.js"() {
      init_curry2();
      init_reduced();
      init_xfBase();
      XTake = /* @__PURE__ */ function() {
        function XTake2(n2, xf) {
          this.xf = xf;
          this.n = n2;
          this.i = 0;
        }
        XTake2.prototype["@@transducer/init"] = xfBase_default.init;
        XTake2.prototype["@@transducer/result"] = xfBase_default.result;
        XTake2.prototype["@@transducer/step"] = function(result, input) {
          this.i += 1;
          var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
          return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
        };
        return XTake2;
      }();
      _xtake = /* @__PURE__ */ _curry2(function _xtake2(n2, xf) {
        return new XTake(n2, xf);
      });
      xtake_default = _xtake;
    }
  });

  // node_modules/ramda/es/take.js
  var take, take_default;
  var init_take = __esm({
    "node_modules/ramda/es/take.js"() {
      init_curry2();
      init_dispatchable();
      init_xtake();
      init_slice();
      take = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["take"], xtake_default, function take2(n2, xs) {
          return slice_default(0, n2 < 0 ? Infinity : n2, xs);
        })
      );
      take_default = take;
    }
  });

  // node_modules/ramda/es/internal/_dropLast.js
  function dropLast(n2, xs) {
    return take_default(n2 < xs.length ? xs.length - n2 : 0, xs);
  }
  var init_dropLast = __esm({
    "node_modules/ramda/es/internal/_dropLast.js"() {
      init_take();
    }
  });

  // node_modules/ramda/es/internal/_xdropLast.js
  var XDropLast, _xdropLast, xdropLast_default;
  var init_xdropLast = __esm({
    "node_modules/ramda/es/internal/_xdropLast.js"() {
      init_curry2();
      init_xfBase();
      XDropLast = /* @__PURE__ */ function() {
        function XDropLast2(n2, xf) {
          this.xf = xf;
          this.pos = 0;
          this.full = false;
          this.acc = new Array(n2);
        }
        XDropLast2.prototype["@@transducer/init"] = xfBase_default.init;
        XDropLast2.prototype["@@transducer/result"] = function(result) {
          this.acc = null;
          return this.xf["@@transducer/result"](result);
        };
        XDropLast2.prototype["@@transducer/step"] = function(result, input) {
          if (this.full) {
            result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
          }
          this.store(input);
          return result;
        };
        XDropLast2.prototype.store = function(input) {
          this.acc[this.pos] = input;
          this.pos += 1;
          if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
          }
        };
        return XDropLast2;
      }();
      _xdropLast = /* @__PURE__ */ _curry2(function _xdropLast2(n2, xf) {
        return new XDropLast(n2, xf);
      });
      xdropLast_default = _xdropLast;
    }
  });

  // node_modules/ramda/es/dropLast.js
  var dropLast2, dropLast_default;
  var init_dropLast2 = __esm({
    "node_modules/ramda/es/dropLast.js"() {
      init_curry2();
      init_dispatchable();
      init_dropLast();
      init_xdropLast();
      dropLast2 = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], xdropLast_default, dropLast)
      );
      dropLast_default = dropLast2;
    }
  });

  // node_modules/ramda/es/internal/_dropLastWhile.js
  function dropLastWhile(pred, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && pred(xs[idx])) {
      idx -= 1;
    }
    return slice_default(0, idx + 1, xs);
  }
  var init_dropLastWhile = __esm({
    "node_modules/ramda/es/internal/_dropLastWhile.js"() {
      init_slice();
    }
  });

  // node_modules/ramda/es/internal/_xdropLastWhile.js
  var XDropLastWhile, _xdropLastWhile, xdropLastWhile_default;
  var init_xdropLastWhile = __esm({
    "node_modules/ramda/es/internal/_xdropLastWhile.js"() {
      init_curry2();
      init_reduce();
      init_xfBase();
      XDropLastWhile = /* @__PURE__ */ function() {
        function XDropLastWhile2(fn, xf) {
          this.f = fn;
          this.retained = [];
          this.xf = xf;
        }
        XDropLastWhile2.prototype["@@transducer/init"] = xfBase_default.init;
        XDropLastWhile2.prototype["@@transducer/result"] = function(result) {
          this.retained = null;
          return this.xf["@@transducer/result"](result);
        };
        XDropLastWhile2.prototype["@@transducer/step"] = function(result, input) {
          return this.f(input) ? this.retain(result, input) : this.flush(result, input);
        };
        XDropLastWhile2.prototype.flush = function(result, input) {
          result = _reduce(this.xf["@@transducer/step"], result, this.retained);
          this.retained = [];
          return this.xf["@@transducer/step"](result, input);
        };
        XDropLastWhile2.prototype.retain = function(result, input) {
          this.retained.push(input);
          return result;
        };
        return XDropLastWhile2;
      }();
      _xdropLastWhile = /* @__PURE__ */ _curry2(function _xdropLastWhile2(fn, xf) {
        return new XDropLastWhile(fn, xf);
      });
      xdropLastWhile_default = _xdropLastWhile;
    }
  });

  // node_modules/ramda/es/dropLastWhile.js
  var dropLastWhile2, dropLastWhile_default;
  var init_dropLastWhile2 = __esm({
    "node_modules/ramda/es/dropLastWhile.js"() {
      init_curry2();
      init_dispatchable();
      init_dropLastWhile();
      init_xdropLastWhile();
      dropLastWhile2 = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], xdropLastWhile_default, dropLastWhile)
      );
      dropLastWhile_default = dropLastWhile2;
    }
  });

  // node_modules/ramda/es/internal/_xdropRepeatsWith.js
  var XDropRepeatsWith, _xdropRepeatsWith, xdropRepeatsWith_default;
  var init_xdropRepeatsWith = __esm({
    "node_modules/ramda/es/internal/_xdropRepeatsWith.js"() {
      init_curry2();
      init_xfBase();
      XDropRepeatsWith = /* @__PURE__ */ function() {
        function XDropRepeatsWith2(pred, xf) {
          this.xf = xf;
          this.pred = pred;
          this.lastValue = void 0;
          this.seenFirstValue = false;
        }
        XDropRepeatsWith2.prototype["@@transducer/init"] = xfBase_default.init;
        XDropRepeatsWith2.prototype["@@transducer/result"] = xfBase_default.result;
        XDropRepeatsWith2.prototype["@@transducer/step"] = function(result, input) {
          var sameAsLast = false;
          if (!this.seenFirstValue) {
            this.seenFirstValue = true;
          } else if (this.pred(this.lastValue, input)) {
            sameAsLast = true;
          }
          this.lastValue = input;
          return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
        };
        return XDropRepeatsWith2;
      }();
      _xdropRepeatsWith = /* @__PURE__ */ _curry2(function _xdropRepeatsWith2(pred, xf) {
        return new XDropRepeatsWith(pred, xf);
      });
      xdropRepeatsWith_default = _xdropRepeatsWith;
    }
  });

  // node_modules/ramda/es/last.js
  var last, last_default;
  var init_last = __esm({
    "node_modules/ramda/es/last.js"() {
      init_nth();
      last = /* @__PURE__ */ nth_default(-1);
      last_default = last;
    }
  });

  // node_modules/ramda/es/dropRepeatsWith.js
  var dropRepeatsWith, dropRepeatsWith_default;
  var init_dropRepeatsWith = __esm({
    "node_modules/ramda/es/dropRepeatsWith.js"() {
      init_curry2();
      init_dispatchable();
      init_xdropRepeatsWith();
      init_last();
      dropRepeatsWith = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], xdropRepeatsWith_default, function dropRepeatsWith2(pred, list) {
          var result = [];
          var idx = 1;
          var len = list.length;
          if (len !== 0) {
            result[0] = list[0];
            while (idx < len) {
              if (!pred(last_default(result), list[idx])) {
                result[result.length] = list[idx];
              }
              idx += 1;
            }
          }
          return result;
        })
      );
      dropRepeatsWith_default = dropRepeatsWith;
    }
  });

  // node_modules/ramda/es/dropRepeats.js
  var dropRepeats, dropRepeats_default;
  var init_dropRepeats = __esm({
    "node_modules/ramda/es/dropRepeats.js"() {
      init_curry1();
      init_dispatchable();
      init_xdropRepeatsWith();
      init_dropRepeatsWith();
      init_equals2();
      dropRepeats = /* @__PURE__ */ _curry1(
        /* @__PURE__ */ _dispatchable(
          [],
          /* @__PURE__ */ xdropRepeatsWith_default(equals_default),
          /* @__PURE__ */ dropRepeatsWith_default(equals_default)
        )
      );
      dropRepeats_default = dropRepeats;
    }
  });

  // node_modules/ramda/es/internal/_xdropWhile.js
  var XDropWhile, _xdropWhile, xdropWhile_default;
  var init_xdropWhile = __esm({
    "node_modules/ramda/es/internal/_xdropWhile.js"() {
      init_curry2();
      init_xfBase();
      XDropWhile = /* @__PURE__ */ function() {
        function XDropWhile2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XDropWhile2.prototype["@@transducer/init"] = xfBase_default.init;
        XDropWhile2.prototype["@@transducer/result"] = xfBase_default.result;
        XDropWhile2.prototype["@@transducer/step"] = function(result, input) {
          if (this.f) {
            if (this.f(input)) {
              return result;
            }
            this.f = null;
          }
          return this.xf["@@transducer/step"](result, input);
        };
        return XDropWhile2;
      }();
      _xdropWhile = /* @__PURE__ */ _curry2(function _xdropWhile2(f, xf) {
        return new XDropWhile(f, xf);
      });
      xdropWhile_default = _xdropWhile;
    }
  });

  // node_modules/ramda/es/dropWhile.js
  var dropWhile, dropWhile_default;
  var init_dropWhile = __esm({
    "node_modules/ramda/es/dropWhile.js"() {
      init_curry2();
      init_dispatchable();
      init_xdropWhile();
      init_slice();
      dropWhile = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["dropWhile"], xdropWhile_default, function dropWhile2(pred, xs) {
          var idx = 0;
          var len = xs.length;
          while (idx < len && pred(xs[idx])) {
            idx += 1;
          }
          return slice_default(idx, Infinity, xs);
        })
      );
      dropWhile_default = dropWhile;
    }
  });

  // node_modules/ramda/es/or.js
  var or, or_default;
  var init_or = __esm({
    "node_modules/ramda/es/or.js"() {
      init_curry2();
      or = /* @__PURE__ */ _curry2(function or2(a, b) {
        return a || b;
      });
      or_default = or;
    }
  });

  // node_modules/ramda/es/either.js
  var either, either_default;
  var init_either = __esm({
    "node_modules/ramda/es/either.js"() {
      init_curry2();
      init_isFunction();
      init_lift();
      init_or();
      either = /* @__PURE__ */ _curry2(function either2(f, g) {
        return _isFunction(f) ? function _either() {
          return f.apply(this, arguments) || g.apply(this, arguments);
        } : lift_default(or_default)(f, g);
      });
      either_default = either;
    }
  });

  // node_modules/ramda/es/internal/_isTypedArray.js
  function _isTypedArray(val) {
    var type3 = Object.prototype.toString.call(val);
    return type3 === "[object Uint8ClampedArray]" || type3 === "[object Int8Array]" || type3 === "[object Uint8Array]" || type3 === "[object Int16Array]" || type3 === "[object Uint16Array]" || type3 === "[object Int32Array]" || type3 === "[object Uint32Array]" || type3 === "[object Float32Array]" || type3 === "[object Float64Array]" || type3 === "[object BigInt64Array]" || type3 === "[object BigUint64Array]";
  }
  var init_isTypedArray = __esm({
    "node_modules/ramda/es/internal/_isTypedArray.js"() {
    }
  });

  // node_modules/ramda/es/empty.js
  var empty, empty_default;
  var init_empty = __esm({
    "node_modules/ramda/es/empty.js"() {
      init_curry1();
      init_isArguments();
      init_isArray();
      init_isObject();
      init_isString();
      init_isTypedArray();
      empty = /* @__PURE__ */ _curry1(function empty2(x) {
        return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : isArray_default(x) ? [] : _isString(x) ? "" : _isObject(x) ? {} : isArguments_default(x) ? function() {
          return arguments;
        }() : _isTypedArray(x) ? x.constructor.from("") : void 0;
      });
      empty_default = empty;
    }
  });

  // node_modules/ramda/es/takeLast.js
  var takeLast, takeLast_default;
  var init_takeLast = __esm({
    "node_modules/ramda/es/takeLast.js"() {
      init_curry2();
      init_drop();
      takeLast = /* @__PURE__ */ _curry2(function takeLast2(n2, xs) {
        return drop_default(n2 >= 0 ? xs.length - n2 : 0, xs);
      });
      takeLast_default = takeLast;
    }
  });

  // node_modules/ramda/es/endsWith.js
  var endsWith, endsWith_default;
  var init_endsWith = __esm({
    "node_modules/ramda/es/endsWith.js"() {
      init_curry2();
      init_equals2();
      init_takeLast();
      endsWith = /* @__PURE__ */ _curry2(function(suffix, list) {
        return equals_default(takeLast_default(suffix.length, list), suffix);
      });
      endsWith_default = endsWith;
    }
  });

  // node_modules/ramda/es/eqBy.js
  var eqBy, eqBy_default;
  var init_eqBy = __esm({
    "node_modules/ramda/es/eqBy.js"() {
      init_curry3();
      init_equals2();
      eqBy = /* @__PURE__ */ _curry3(function eqBy2(f, x, y) {
        return equals_default(f(x), f(y));
      });
      eqBy_default = eqBy;
    }
  });

  // node_modules/ramda/es/eqProps.js
  var eqProps, eqProps_default;
  var init_eqProps = __esm({
    "node_modules/ramda/es/eqProps.js"() {
      init_curry3();
      init_equals2();
      eqProps = /* @__PURE__ */ _curry3(function eqProps2(prop3, obj1, obj2) {
        return equals_default(obj1[prop3], obj2[prop3]);
      });
      eqProps_default = eqProps;
    }
  });

  // node_modules/ramda/es/evolve.js
  var evolve, evolve_default;
  var init_evolve = __esm({
    "node_modules/ramda/es/evolve.js"() {
      init_curry2();
      init_isArray();
      init_isObject();
      evolve = /* @__PURE__ */ _curry2(function evolve2(transformations, object) {
        if (!_isObject(object) && !isArray_default(object)) {
          return object;
        }
        var result = object instanceof Array ? [] : {};
        var transformation, key, type3;
        for (key in object) {
          transformation = transformations[key];
          type3 = typeof transformation;
          result[key] = type3 === "function" ? transformation(object[key]) : transformation && type3 === "object" ? evolve2(transformation, object[key]) : object[key];
        }
        return result;
      });
      evolve_default = evolve;
    }
  });

  // node_modules/ramda/es/internal/_xfind.js
  var XFind, _xfind, xfind_default;
  var init_xfind = __esm({
    "node_modules/ramda/es/internal/_xfind.js"() {
      init_curry2();
      init_reduced();
      init_xfBase();
      XFind = /* @__PURE__ */ function() {
        function XFind2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.found = false;
        }
        XFind2.prototype["@@transducer/init"] = xfBase_default.init;
        XFind2.prototype["@@transducer/result"] = function(result) {
          if (!this.found) {
            result = this.xf["@@transducer/step"](result, void 0);
          }
          return this.xf["@@transducer/result"](result);
        };
        XFind2.prototype["@@transducer/step"] = function(result, input) {
          if (this.f(input)) {
            this.found = true;
            result = _reduced(this.xf["@@transducer/step"](result, input));
          }
          return result;
        };
        return XFind2;
      }();
      _xfind = /* @__PURE__ */ _curry2(function _xfind2(f, xf) {
        return new XFind(f, xf);
      });
      xfind_default = _xfind;
    }
  });

  // node_modules/ramda/es/find.js
  var find, find_default;
  var init_find = __esm({
    "node_modules/ramda/es/find.js"() {
      init_curry2();
      init_dispatchable();
      init_xfind();
      find = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["find"], xfind_default, function find2(fn, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len) {
            if (fn(list[idx])) {
              return list[idx];
            }
            idx += 1;
          }
        })
      );
      find_default = find;
    }
  });

  // node_modules/ramda/es/internal/_xfindIndex.js
  var XFindIndex, _xfindIndex, xfindIndex_default;
  var init_xfindIndex = __esm({
    "node_modules/ramda/es/internal/_xfindIndex.js"() {
      init_curry2();
      init_reduced();
      init_xfBase();
      XFindIndex = /* @__PURE__ */ function() {
        function XFindIndex2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.idx = -1;
          this.found = false;
        }
        XFindIndex2.prototype["@@transducer/init"] = xfBase_default.init;
        XFindIndex2.prototype["@@transducer/result"] = function(result) {
          if (!this.found) {
            result = this.xf["@@transducer/step"](result, -1);
          }
          return this.xf["@@transducer/result"](result);
        };
        XFindIndex2.prototype["@@transducer/step"] = function(result, input) {
          this.idx += 1;
          if (this.f(input)) {
            this.found = true;
            result = _reduced(this.xf["@@transducer/step"](result, this.idx));
          }
          return result;
        };
        return XFindIndex2;
      }();
      _xfindIndex = /* @__PURE__ */ _curry2(function _xfindIndex2(f, xf) {
        return new XFindIndex(f, xf);
      });
      xfindIndex_default = _xfindIndex;
    }
  });

  // node_modules/ramda/es/findIndex.js
  var findIndex, findIndex_default;
  var init_findIndex = __esm({
    "node_modules/ramda/es/findIndex.js"() {
      init_curry2();
      init_dispatchable();
      init_xfindIndex();
      findIndex = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], xfindIndex_default, function findIndex2(fn, list) {
          var idx = 0;
          var len = list.length;
          while (idx < len) {
            if (fn(list[idx])) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        })
      );
      findIndex_default = findIndex;
    }
  });

  // node_modules/ramda/es/internal/_xfindLast.js
  var XFindLast, _xfindLast, xfindLast_default;
  var init_xfindLast = __esm({
    "node_modules/ramda/es/internal/_xfindLast.js"() {
      init_curry2();
      init_xfBase();
      XFindLast = /* @__PURE__ */ function() {
        function XFindLast2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XFindLast2.prototype["@@transducer/init"] = xfBase_default.init;
        XFindLast2.prototype["@@transducer/result"] = function(result) {
          return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
        };
        XFindLast2.prototype["@@transducer/step"] = function(result, input) {
          if (this.f(input)) {
            this.last = input;
          }
          return result;
        };
        return XFindLast2;
      }();
      _xfindLast = /* @__PURE__ */ _curry2(function _xfindLast2(f, xf) {
        return new XFindLast(f, xf);
      });
      xfindLast_default = _xfindLast;
    }
  });

  // node_modules/ramda/es/findLast.js
  var findLast, findLast_default;
  var init_findLast = __esm({
    "node_modules/ramda/es/findLast.js"() {
      init_curry2();
      init_dispatchable();
      init_xfindLast();
      findLast = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], xfindLast_default, function findLast2(fn, list) {
          var idx = list.length - 1;
          while (idx >= 0) {
            if (fn(list[idx])) {
              return list[idx];
            }
            idx -= 1;
          }
        })
      );
      findLast_default = findLast;
    }
  });

  // node_modules/ramda/es/internal/_xfindLastIndex.js
  var XFindLastIndex, _xfindLastIndex, xfindLastIndex_default;
  var init_xfindLastIndex = __esm({
    "node_modules/ramda/es/internal/_xfindLastIndex.js"() {
      init_curry2();
      init_xfBase();
      XFindLastIndex = /* @__PURE__ */ function() {
        function XFindLastIndex2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.idx = -1;
          this.lastIdx = -1;
        }
        XFindLastIndex2.prototype["@@transducer/init"] = xfBase_default.init;
        XFindLastIndex2.prototype["@@transducer/result"] = function(result) {
          return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
        };
        XFindLastIndex2.prototype["@@transducer/step"] = function(result, input) {
          this.idx += 1;
          if (this.f(input)) {
            this.lastIdx = this.idx;
          }
          return result;
        };
        return XFindLastIndex2;
      }();
      _xfindLastIndex = /* @__PURE__ */ _curry2(function _xfindLastIndex2(f, xf) {
        return new XFindLastIndex(f, xf);
      });
      xfindLastIndex_default = _xfindLastIndex;
    }
  });

  // node_modules/ramda/es/findLastIndex.js
  var findLastIndex, findLastIndex_default;
  var init_findLastIndex = __esm({
    "node_modules/ramda/es/findLastIndex.js"() {
      init_curry2();
      init_dispatchable();
      init_xfindLastIndex();
      findLastIndex = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], xfindLastIndex_default, function findLastIndex2(fn, list) {
          var idx = list.length - 1;
          while (idx >= 0) {
            if (fn(list[idx])) {
              return idx;
            }
            idx -= 1;
          }
          return -1;
        })
      );
      findLastIndex_default = findLastIndex;
    }
  });

  // node_modules/ramda/es/flatten.js
  var flatten, flatten_default;
  var init_flatten = __esm({
    "node_modules/ramda/es/flatten.js"() {
      init_curry1();
      init_makeFlat();
      flatten = /* @__PURE__ */ _curry1(
        /* @__PURE__ */ _makeFlat(true)
      );
      flatten_default = flatten;
    }
  });

  // node_modules/ramda/es/flip.js
  var flip, flip_default;
  var init_flip = __esm({
    "node_modules/ramda/es/flip.js"() {
      init_curry1();
      init_curryN2();
      flip = /* @__PURE__ */ _curry1(function flip2(fn) {
        return curryN_default(fn.length, function(a, b) {
          var args2 = Array.prototype.slice.call(arguments, 0);
          args2[0] = b;
          args2[1] = a;
          return fn.apply(this, args2);
        });
      });
      flip_default = flip;
    }
  });

  // node_modules/ramda/es/forEach.js
  var forEach, forEach_default;
  var init_forEach = __esm({
    "node_modules/ramda/es/forEach.js"() {
      init_checkForMethod();
      init_curry2();
      forEach = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _checkForMethod("forEach", function forEach2(fn, list) {
          var len = list.length;
          var idx = 0;
          while (idx < len) {
            fn(list[idx]);
            idx += 1;
          }
          return list;
        })
      );
      forEach_default = forEach;
    }
  });

  // node_modules/ramda/es/forEachObjIndexed.js
  var forEachObjIndexed, forEachObjIndexed_default;
  var init_forEachObjIndexed = __esm({
    "node_modules/ramda/es/forEachObjIndexed.js"() {
      init_curry2();
      init_keys();
      forEachObjIndexed = /* @__PURE__ */ _curry2(function forEachObjIndexed2(fn, obj) {
        var keyList = keys_default(obj);
        var idx = 0;
        while (idx < keyList.length) {
          var key = keyList[idx];
          fn(obj[key], key, obj);
          idx += 1;
        }
        return obj;
      });
      forEachObjIndexed_default = forEachObjIndexed;
    }
  });

  // node_modules/ramda/es/fromPairs.js
  var fromPairs, fromPairs_default;
  var init_fromPairs = __esm({
    "node_modules/ramda/es/fromPairs.js"() {
      init_curry1();
      fromPairs = /* @__PURE__ */ _curry1(function fromPairs2(pairs) {
        var result = {};
        var idx = 0;
        while (idx < pairs.length) {
          result[pairs[idx][0]] = pairs[idx][1];
          idx += 1;
        }
        return result;
      });
      fromPairs_default = fromPairs;
    }
  });

  // node_modules/ramda/es/groupBy.js
  var groupBy, groupBy_default;
  var init_groupBy = __esm({
    "node_modules/ramda/es/groupBy.js"() {
      init_checkForMethod();
      init_curry2();
      init_reduceBy();
      groupBy = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _checkForMethod(
          "groupBy",
          /* @__PURE__ */ reduceBy_default(function(acc, item) {
            acc.push(item);
            return acc;
          }, [])
        )
      );
      groupBy_default = groupBy;
    }
  });

  // node_modules/ramda/es/groupWith.js
  var groupWith, groupWith_default;
  var init_groupWith = __esm({
    "node_modules/ramda/es/groupWith.js"() {
      init_curry2();
      groupWith = /* @__PURE__ */ _curry2(function(fn, list) {
        var res = [];
        var idx = 0;
        var len = list.length;
        while (idx < len) {
          var nextidx = idx + 1;
          while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
            nextidx += 1;
          }
          res.push(list.slice(idx, nextidx));
          idx = nextidx;
        }
        return res;
      });
      groupWith_default = groupWith;
    }
  });

  // node_modules/ramda/es/gt.js
  var gt, gt_default;
  var init_gt = __esm({
    "node_modules/ramda/es/gt.js"() {
      init_curry2();
      gt = /* @__PURE__ */ _curry2(function gt2(a, b) {
        return a > b;
      });
      gt_default = gt;
    }
  });

  // node_modules/ramda/es/gte.js
  var gte, gte_default;
  var init_gte = __esm({
    "node_modules/ramda/es/gte.js"() {
      init_curry2();
      gte = /* @__PURE__ */ _curry2(function gte2(a, b) {
        return a >= b;
      });
      gte_default = gte;
    }
  });

  // node_modules/ramda/es/hasPath.js
  var hasPath, hasPath_default;
  var init_hasPath = __esm({
    "node_modules/ramda/es/hasPath.js"() {
      init_curry2();
      init_has();
      init_isNil();
      hasPath = /* @__PURE__ */ _curry2(function hasPath2(_path, obj) {
        if (_path.length === 0 || isNil_default(obj)) {
          return false;
        }
        var val = obj;
        var idx = 0;
        while (idx < _path.length) {
          if (!isNil_default(val) && _has(_path[idx], val)) {
            val = val[_path[idx]];
            idx += 1;
          } else {
            return false;
          }
        }
        return true;
      });
      hasPath_default = hasPath;
    }
  });

  // node_modules/ramda/es/has.js
  var has, has_default;
  var init_has2 = __esm({
    "node_modules/ramda/es/has.js"() {
      init_curry2();
      init_hasPath();
      has = /* @__PURE__ */ _curry2(function has2(prop3, obj) {
        return hasPath_default([prop3], obj);
      });
      has_default = has;
    }
  });

  // node_modules/ramda/es/hasIn.js
  var hasIn, hasIn_default;
  var init_hasIn = __esm({
    "node_modules/ramda/es/hasIn.js"() {
      init_curry2();
      init_isNil();
      hasIn = /* @__PURE__ */ _curry2(function hasIn2(prop3, obj) {
        if (isNil_default(obj)) {
          return false;
        }
        return prop3 in obj;
      });
      hasIn_default = hasIn;
    }
  });

  // node_modules/ramda/es/identical.js
  var identical, identical_default;
  var init_identical = __esm({
    "node_modules/ramda/es/identical.js"() {
      init_objectIs();
      init_curry2();
      identical = /* @__PURE__ */ _curry2(objectIs_default);
      identical_default = identical;
    }
  });

  // node_modules/ramda/es/ifElse.js
  var ifElse, ifElse_default;
  var init_ifElse = __esm({
    "node_modules/ramda/es/ifElse.js"() {
      init_curry3();
      init_curryN2();
      ifElse = /* @__PURE__ */ _curry3(function ifElse2(condition, onTrue, onFalse) {
        return curryN_default(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
          return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
        });
      });
      ifElse_default = ifElse;
    }
  });

  // node_modules/ramda/es/inc.js
  var inc, inc_default;
  var init_inc = __esm({
    "node_modules/ramda/es/inc.js"() {
      init_add();
      inc = /* @__PURE__ */ add_default(1);
      inc_default = inc;
    }
  });

  // node_modules/ramda/es/includes.js
  var includes, includes_default;
  var init_includes2 = __esm({
    "node_modules/ramda/es/includes.js"() {
      init_includes();
      init_curry2();
      includes = /* @__PURE__ */ _curry2(_includes);
      includes_default = includes;
    }
  });

  // node_modules/ramda/es/indexBy.js
  var indexBy, indexBy_default;
  var init_indexBy = __esm({
    "node_modules/ramda/es/indexBy.js"() {
      init_reduceBy();
      indexBy = /* @__PURE__ */ reduceBy_default(function(acc, elem) {
        return elem;
      }, null);
      indexBy_default = indexBy;
    }
  });

  // node_modules/ramda/es/indexOf.js
  var indexOf, indexOf_default;
  var init_indexOf2 = __esm({
    "node_modules/ramda/es/indexOf.js"() {
      init_curry2();
      init_indexOf();
      init_isArray();
      indexOf = /* @__PURE__ */ _curry2(function indexOf2(target, xs) {
        return typeof xs.indexOf === "function" && !isArray_default(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
      });
      indexOf_default = indexOf;
    }
  });

  // node_modules/ramda/es/init.js
  var init, init_default;
  var init_init = __esm({
    "node_modules/ramda/es/init.js"() {
      init_slice();
      init = /* @__PURE__ */ slice_default(0, -1);
      init_default = init;
    }
  });

  // node_modules/ramda/es/innerJoin.js
  var innerJoin, innerJoin_default;
  var init_innerJoin = __esm({
    "node_modules/ramda/es/innerJoin.js"() {
      init_includesWith();
      init_curry3();
      init_filter();
      innerJoin = /* @__PURE__ */ _curry3(function innerJoin2(pred, xs, ys) {
        return _filter(function(x) {
          return _includesWith(pred, x, ys);
        }, xs);
      });
      innerJoin_default = innerJoin;
    }
  });

  // node_modules/ramda/es/insert.js
  var insert, insert_default;
  var init_insert = __esm({
    "node_modules/ramda/es/insert.js"() {
      init_curry3();
      insert = /* @__PURE__ */ _curry3(function insert2(idx, elt, list) {
        idx = idx < list.length && idx >= 0 ? idx : list.length;
        var result = Array.prototype.slice.call(list, 0);
        result.splice(idx, 0, elt);
        return result;
      });
      insert_default = insert;
    }
  });

  // node_modules/ramda/es/insertAll.js
  var insertAll, insertAll_default;
  var init_insertAll = __esm({
    "node_modules/ramda/es/insertAll.js"() {
      init_curry3();
      insertAll = /* @__PURE__ */ _curry3(function insertAll2(idx, elts, list) {
        idx = idx < list.length && idx >= 0 ? idx : list.length;
        return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
      });
      insertAll_default = insertAll;
    }
  });

  // node_modules/ramda/es/internal/_xuniqBy.js
  var XUniqBy, _xuniqBy, xuniqBy_default;
  var init_xuniqBy = __esm({
    "node_modules/ramda/es/internal/_xuniqBy.js"() {
      init_curry2();
      init_Set();
      init_xfBase();
      XUniqBy = /* @__PURE__ */ function() {
        function XUniqBy2(f, xf) {
          this.xf = xf;
          this.f = f;
          this.set = new Set_default();
        }
        XUniqBy2.prototype["@@transducer/init"] = xfBase_default.init;
        XUniqBy2.prototype["@@transducer/result"] = xfBase_default.result;
        XUniqBy2.prototype["@@transducer/step"] = function(result, input) {
          return this.set.add(this.f(input)) ? this.xf["@@transducer/step"](result, input) : result;
        };
        return XUniqBy2;
      }();
      _xuniqBy = /* @__PURE__ */ _curry2(function _xuniqBy2(f, xf) {
        return new XUniqBy(f, xf);
      });
      xuniqBy_default = _xuniqBy;
    }
  });

  // node_modules/ramda/es/uniqBy.js
  var uniqBy, uniqBy_default;
  var init_uniqBy = __esm({
    "node_modules/ramda/es/uniqBy.js"() {
      init_Set();
      init_curry2();
      init_dispatchable();
      init_xuniqBy();
      uniqBy = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], xuniqBy_default, function(fn, list) {
          var set5 = new Set_default();
          var result = [];
          var idx = 0;
          var appliedItem, item;
          while (idx < list.length) {
            item = list[idx];
            appliedItem = fn(item);
            if (set5.add(appliedItem)) {
              result.push(item);
            }
            idx += 1;
          }
          return result;
        })
      );
      uniqBy_default = uniqBy;
    }
  });

  // node_modules/ramda/es/uniq.js
  var uniq, uniq_default;
  var init_uniq = __esm({
    "node_modules/ramda/es/uniq.js"() {
      init_identity2();
      init_uniqBy();
      uniq = /* @__PURE__ */ uniqBy_default(identity_default);
      uniq_default = uniq;
    }
  });

  // node_modules/ramda/es/intersection.js
  var intersection, intersection_default;
  var init_intersection = __esm({
    "node_modules/ramda/es/intersection.js"() {
      init_includes();
      init_curry2();
      init_filter();
      init_flip();
      init_uniq();
      intersection = /* @__PURE__ */ _curry2(function intersection2(list1, list2) {
        var lookupList, filteredList;
        if (list1.length > list2.length) {
          lookupList = list1;
          filteredList = list2;
        } else {
          lookupList = list2;
          filteredList = list1;
        }
        return uniq_default(_filter(flip_default(_includes)(lookupList), filteredList));
      });
      intersection_default = intersection;
    }
  });

  // node_modules/ramda/es/intersperse.js
  var intersperse, intersperse_default;
  var init_intersperse = __esm({
    "node_modules/ramda/es/intersperse.js"() {
      init_checkForMethod();
      init_curry2();
      intersperse = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _checkForMethod("intersperse", function intersperse2(separator2, list) {
          var out = [];
          var idx = 0;
          var length3 = list.length;
          while (idx < length3) {
            if (idx === length3 - 1) {
              out.push(list[idx]);
            } else {
              out.push(list[idx], separator2);
            }
            idx += 1;
          }
          return out;
        })
      );
      intersperse_default = intersperse;
    }
  });

  // node_modules/ramda/es/internal/_objectAssign.js
  function _objectAssign(target) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    var idx = 1;
    var length3 = arguments.length;
    while (idx < length3) {
      var source2 = arguments[idx];
      if (source2 != null) {
        for (var nextKey in source2) {
          if (_has(nextKey, source2)) {
            output[nextKey] = source2[nextKey];
          }
        }
      }
      idx += 1;
    }
    return output;
  }
  var objectAssign_default;
  var init_objectAssign = __esm({
    "node_modules/ramda/es/internal/_objectAssign.js"() {
      init_has();
      objectAssign_default = typeof Object.assign === "function" ? Object.assign : _objectAssign;
    }
  });

  // node_modules/ramda/es/objOf.js
  var objOf, objOf_default;
  var init_objOf = __esm({
    "node_modules/ramda/es/objOf.js"() {
      init_curry2();
      objOf = /* @__PURE__ */ _curry2(function objOf2(key, val) {
        var obj = {};
        obj[key] = val;
        return obj;
      });
      objOf_default = objOf;
    }
  });

  // node_modules/ramda/es/internal/_stepCat.js
  function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (isArrayLike_default(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === "string") {
      return _stepCatString;
    }
    if (typeof obj === "object") {
      return _stepCatObject;
    }
    throw new Error("Cannot create transformer for " + obj);
  }
  var _stepCatArray, _stepCatString, _stepCatObject;
  var init_stepCat = __esm({
    "node_modules/ramda/es/internal/_stepCat.js"() {
      init_objectAssign();
      init_identity();
      init_isArrayLike();
      init_isTransformer();
      init_objOf();
      _stepCatArray = {
        "@@transducer/init": Array,
        "@@transducer/step": function(xs, x) {
          xs.push(x);
          return xs;
        },
        "@@transducer/result": _identity
      };
      _stepCatString = {
        "@@transducer/init": String,
        "@@transducer/step": function(a, b) {
          return a + b;
        },
        "@@transducer/result": _identity
      };
      _stepCatObject = {
        "@@transducer/init": Object,
        "@@transducer/step": function(result, input) {
          return objectAssign_default(result, isArrayLike_default(input) ? objOf_default(input[0], input[1]) : input);
        },
        "@@transducer/result": _identity
      };
    }
  });

  // node_modules/ramda/es/into.js
  var into, into_default;
  var init_into = __esm({
    "node_modules/ramda/es/into.js"() {
      init_clone();
      init_curry3();
      init_isTransformer();
      init_reduce();
      init_stepCat();
      into = /* @__PURE__ */ _curry3(function into2(acc, xf, list) {
        return _isTransformer(acc) ? _reduce(xf(acc), acc["@@transducer/init"](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
      });
      into_default = into;
    }
  });

  // node_modules/ramda/es/invert.js
  var invert, invert_default;
  var init_invert = __esm({
    "node_modules/ramda/es/invert.js"() {
      init_curry1();
      init_has();
      init_keys();
      invert = /* @__PURE__ */ _curry1(function invert2(obj) {
        var props3 = keys_default(obj);
        var len = props3.length;
        var idx = 0;
        var out = {};
        while (idx < len) {
          var key = props3[idx];
          var val = obj[key];
          var list = _has(val, out) ? out[val] : out[val] = [];
          list[list.length] = key;
          idx += 1;
        }
        return out;
      });
      invert_default = invert;
    }
  });

  // node_modules/ramda/es/invertObj.js
  var invertObj, invertObj_default;
  var init_invertObj = __esm({
    "node_modules/ramda/es/invertObj.js"() {
      init_curry1();
      init_keys();
      invertObj = /* @__PURE__ */ _curry1(function invertObj2(obj) {
        var props3 = keys_default(obj);
        var len = props3.length;
        var idx = 0;
        var out = {};
        while (idx < len) {
          var key = props3[idx];
          out[obj[key]] = key;
          idx += 1;
        }
        return out;
      });
      invertObj_default = invertObj;
    }
  });

  // node_modules/ramda/es/invoker.js
  var invoker, invoker_default;
  var init_invoker = __esm({
    "node_modules/ramda/es/invoker.js"() {
      init_curry2();
      init_isFunction();
      init_curryN2();
      init_toString2();
      invoker = /* @__PURE__ */ _curry2(function invoker2(arity, method) {
        return curryN_default(arity + 1, function() {
          var target = arguments[arity];
          if (target != null && _isFunction(target[method])) {
            return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
          }
          throw new TypeError(toString_default(target) + ' does not have a method named "' + method + '"');
        });
      });
      invoker_default = invoker;
    }
  });

  // node_modules/ramda/es/is.js
  var is, is_default;
  var init_is = __esm({
    "node_modules/ramda/es/is.js"() {
      init_curry2();
      is = /* @__PURE__ */ _curry2(function is2(Ctor, val) {
        return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === "Object" && typeof val === "object");
      });
      is_default = is;
    }
  });

  // node_modules/ramda/es/isEmpty.js
  var isEmpty, isEmpty_default;
  var init_isEmpty = __esm({
    "node_modules/ramda/es/isEmpty.js"() {
      init_curry1();
      init_empty();
      init_equals2();
      isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x) {
        return x != null && equals_default(x, empty_default(x));
      });
      isEmpty_default = isEmpty;
    }
  });

  // node_modules/ramda/es/join.js
  var join, join_default;
  var init_join = __esm({
    "node_modules/ramda/es/join.js"() {
      init_invoker();
      join = /* @__PURE__ */ invoker_default(1, "join");
      join_default = join;
    }
  });

  // node_modules/ramda/es/juxt.js
  var juxt, juxt_default;
  var init_juxt = __esm({
    "node_modules/ramda/es/juxt.js"() {
      init_curry1();
      init_converge();
      juxt = /* @__PURE__ */ _curry1(function juxt2(fns) {
        return converge_default(function() {
          return Array.prototype.slice.call(arguments, 0);
        }, fns);
      });
      juxt_default = juxt;
    }
  });

  // node_modules/ramda/es/keysIn.js
  var keysIn, keysIn_default;
  var init_keysIn = __esm({
    "node_modules/ramda/es/keysIn.js"() {
      init_curry1();
      keysIn = /* @__PURE__ */ _curry1(function keysIn2(obj) {
        var prop3;
        var ks = [];
        for (prop3 in obj) {
          ks[ks.length] = prop3;
        }
        return ks;
      });
      keysIn_default = keysIn;
    }
  });

  // node_modules/ramda/es/lastIndexOf.js
  var lastIndexOf, lastIndexOf_default;
  var init_lastIndexOf = __esm({
    "node_modules/ramda/es/lastIndexOf.js"() {
      init_curry2();
      init_isArray();
      init_equals2();
      lastIndexOf = /* @__PURE__ */ _curry2(function lastIndexOf2(target, xs) {
        if (typeof xs.lastIndexOf === "function" && !isArray_default(xs)) {
          return xs.lastIndexOf(target);
        } else {
          var idx = xs.length - 1;
          while (idx >= 0) {
            if (equals_default(xs[idx], target)) {
              return idx;
            }
            idx -= 1;
          }
          return -1;
        }
      });
      lastIndexOf_default = lastIndexOf;
    }
  });

  // node_modules/ramda/es/internal/_isNumber.js
  function _isNumber(x) {
    return Object.prototype.toString.call(x) === "[object Number]";
  }
  var init_isNumber = __esm({
    "node_modules/ramda/es/internal/_isNumber.js"() {
    }
  });

  // node_modules/ramda/es/length.js
  var length, length_default;
  var init_length = __esm({
    "node_modules/ramda/es/length.js"() {
      init_curry1();
      init_isNumber();
      length = /* @__PURE__ */ _curry1(function length2(list) {
        return list != null && _isNumber(list.length) ? list.length : NaN;
      });
      length_default = length;
    }
  });

  // node_modules/ramda/es/lens.js
  var lens, lens_default;
  var init_lens = __esm({
    "node_modules/ramda/es/lens.js"() {
      init_curry2();
      init_map2();
      lens = /* @__PURE__ */ _curry2(function lens2(getter, setter) {
        return function(toFunctorFn) {
          return function(target) {
            return map_default(function(focus3) {
              return setter(focus3, target);
            }, toFunctorFn(getter(target)));
          };
        };
      });
      lens_default = lens;
    }
  });

  // node_modules/ramda/es/update.js
  var update, update_default;
  var init_update = __esm({
    "node_modules/ramda/es/update.js"() {
      init_curry3();
      init_adjust();
      init_always();
      update = /* @__PURE__ */ _curry3(function update2(idx, x, list) {
        return adjust_default(idx, always_default(x), list);
      });
      update_default = update;
    }
  });

  // node_modules/ramda/es/lensIndex.js
  var lensIndex, lensIndex_default;
  var init_lensIndex = __esm({
    "node_modules/ramda/es/lensIndex.js"() {
      init_curry1();
      init_lens();
      init_nth();
      init_update();
      lensIndex = /* @__PURE__ */ _curry1(function lensIndex2(n2) {
        return lens_default(nth_default(n2), update_default(n2));
      });
      lensIndex_default = lensIndex;
    }
  });

  // node_modules/ramda/es/paths.js
  var paths, paths_default;
  var init_paths = __esm({
    "node_modules/ramda/es/paths.js"() {
      init_curry2();
      init_isInteger();
      init_nth();
      paths = /* @__PURE__ */ _curry2(function paths2(pathsArray, obj) {
        return pathsArray.map(function(paths3) {
          var val = obj;
          var idx = 0;
          var p;
          while (idx < paths3.length) {
            if (val == null) {
              return;
            }
            p = paths3[idx];
            val = isInteger_default(p) ? nth_default(p, val) : val[p];
            idx += 1;
          }
          return val;
        });
      });
      paths_default = paths;
    }
  });

  // node_modules/ramda/es/path.js
  var path, path_default;
  var init_path = __esm({
    "node_modules/ramda/es/path.js"() {
      init_curry2();
      init_paths();
      path = /* @__PURE__ */ _curry2(function path2(pathAr, obj) {
        return paths_default([pathAr], obj)[0];
      });
      path_default = path;
    }
  });

  // node_modules/ramda/es/lensPath.js
  var lensPath, lensPath_default;
  var init_lensPath = __esm({
    "node_modules/ramda/es/lensPath.js"() {
      init_curry1();
      init_assocPath();
      init_lens();
      init_path();
      lensPath = /* @__PURE__ */ _curry1(function lensPath2(p) {
        return lens_default(path_default(p), assocPath_default(p));
      });
      lensPath_default = lensPath;
    }
  });

  // node_modules/ramda/es/lensProp.js
  var lensProp, lensProp_default;
  var init_lensProp = __esm({
    "node_modules/ramda/es/lensProp.js"() {
      init_curry1();
      init_assoc2();
      init_lens();
      init_prop();
      lensProp = /* @__PURE__ */ _curry1(function lensProp2(k) {
        return lens_default(prop_default(k), assoc_default(k));
      });
      lensProp_default = lensProp;
    }
  });

  // node_modules/ramda/es/lt.js
  var lt, lt_default;
  var init_lt = __esm({
    "node_modules/ramda/es/lt.js"() {
      init_curry2();
      lt = /* @__PURE__ */ _curry2(function lt2(a, b) {
        return a < b;
      });
      lt_default = lt;
    }
  });

  // node_modules/ramda/es/lte.js
  var lte, lte_default;
  var init_lte = __esm({
    "node_modules/ramda/es/lte.js"() {
      init_curry2();
      lte = /* @__PURE__ */ _curry2(function lte2(a, b) {
        return a <= b;
      });
      lte_default = lte;
    }
  });

  // node_modules/ramda/es/mapAccum.js
  var mapAccum, mapAccum_default;
  var init_mapAccum = __esm({
    "node_modules/ramda/es/mapAccum.js"() {
      init_curry3();
      mapAccum = /* @__PURE__ */ _curry3(function mapAccum2(fn, acc, list) {
        var idx = 0;
        var len = list.length;
        var result = [];
        var tuple = [acc];
        while (idx < len) {
          tuple = fn(tuple[0], list[idx]);
          result[idx] = tuple[1];
          idx += 1;
        }
        return [tuple[0], result];
      });
      mapAccum_default = mapAccum;
    }
  });

  // node_modules/ramda/es/mapAccumRight.js
  var mapAccumRight, mapAccumRight_default;
  var init_mapAccumRight = __esm({
    "node_modules/ramda/es/mapAccumRight.js"() {
      init_curry3();
      mapAccumRight = /* @__PURE__ */ _curry3(function mapAccumRight2(fn, acc, list) {
        var idx = list.length - 1;
        var result = [];
        var tuple = [acc];
        while (idx >= 0) {
          tuple = fn(tuple[0], list[idx]);
          result[idx] = tuple[1];
          idx -= 1;
        }
        return [tuple[0], result];
      });
      mapAccumRight_default = mapAccumRight;
    }
  });

  // node_modules/ramda/es/mapObjIndexed.js
  var mapObjIndexed, mapObjIndexed_default;
  var init_mapObjIndexed = __esm({
    "node_modules/ramda/es/mapObjIndexed.js"() {
      init_curry2();
      init_reduce();
      init_keys();
      mapObjIndexed = /* @__PURE__ */ _curry2(function mapObjIndexed2(fn, obj) {
        return _reduce(function(acc, key) {
          acc[key] = fn(obj[key], key, obj);
          return acc;
        }, {}, keys_default(obj));
      });
      mapObjIndexed_default = mapObjIndexed;
    }
  });

  // node_modules/ramda/es/match.js
  var match, match_default;
  var init_match = __esm({
    "node_modules/ramda/es/match.js"() {
      init_curry2();
      match = /* @__PURE__ */ _curry2(function match2(rx, str2) {
        return str2.match(rx) || [];
      });
      match_default = match;
    }
  });

  // node_modules/ramda/es/mathMod.js
  var mathMod, mathMod_default;
  var init_mathMod = __esm({
    "node_modules/ramda/es/mathMod.js"() {
      init_curry2();
      init_isInteger();
      mathMod = /* @__PURE__ */ _curry2(function mathMod2(m, p) {
        if (!isInteger_default(m)) {
          return NaN;
        }
        if (!isInteger_default(p) || p < 1) {
          return NaN;
        }
        return (m % p + p) % p;
      });
      mathMod_default = mathMod;
    }
  });

  // node_modules/ramda/es/maxBy.js
  var maxBy, maxBy_default;
  var init_maxBy = __esm({
    "node_modules/ramda/es/maxBy.js"() {
      init_curry3();
      maxBy = /* @__PURE__ */ _curry3(function maxBy2(f, a, b) {
        return f(b) > f(a) ? b : a;
      });
      maxBy_default = maxBy;
    }
  });

  // node_modules/ramda/es/sum.js
  var sum, sum_default;
  var init_sum = __esm({
    "node_modules/ramda/es/sum.js"() {
      init_add();
      init_reduce2();
      sum = /* @__PURE__ */ reduce_default(add_default, 0);
      sum_default = sum;
    }
  });

  // node_modules/ramda/es/mean.js
  var mean, mean_default;
  var init_mean = __esm({
    "node_modules/ramda/es/mean.js"() {
      init_curry1();
      init_sum();
      mean = /* @__PURE__ */ _curry1(function mean2(list) {
        return sum_default(list) / list.length;
      });
      mean_default = mean;
    }
  });

  // node_modules/ramda/es/median.js
  var median, median_default;
  var init_median = __esm({
    "node_modules/ramda/es/median.js"() {
      init_curry1();
      init_mean();
      median = /* @__PURE__ */ _curry1(function median2(list) {
        var len = list.length;
        if (len === 0) {
          return NaN;
        }
        var width = 2 - len % 2;
        var idx = (len - width) / 2;
        return mean_default(Array.prototype.slice.call(list, 0).sort(function(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }).slice(idx, idx + width));
      });
      median_default = median;
    }
  });

  // node_modules/ramda/es/memoizeWith.js
  var memoizeWith, memoizeWith_default;
  var init_memoizeWith = __esm({
    "node_modules/ramda/es/memoizeWith.js"() {
      init_arity();
      init_curry2();
      init_has();
      memoizeWith = /* @__PURE__ */ _curry2(function memoizeWith2(mFn, fn) {
        var cache = {};
        return _arity(fn.length, function() {
          var key = mFn.apply(this, arguments);
          if (!_has(key, cache)) {
            cache[key] = fn.apply(this, arguments);
          }
          return cache[key];
        });
      });
      memoizeWith_default = memoizeWith;
    }
  });

  // node_modules/ramda/es/mergeAll.js
  var mergeAll, mergeAll_default;
  var init_mergeAll = __esm({
    "node_modules/ramda/es/mergeAll.js"() {
      init_objectAssign();
      init_curry1();
      mergeAll = /* @__PURE__ */ _curry1(function mergeAll2(list) {
        return objectAssign_default.apply(null, [{}].concat(list));
      });
      mergeAll_default = mergeAll;
    }
  });

  // node_modules/ramda/es/mergeWithKey.js
  var mergeWithKey, mergeWithKey_default;
  var init_mergeWithKey = __esm({
    "node_modules/ramda/es/mergeWithKey.js"() {
      init_curry3();
      init_has();
      mergeWithKey = /* @__PURE__ */ _curry3(function mergeWithKey2(fn, l2, r) {
        var result = {};
        var k;
        for (k in l2) {
          if (_has(k, l2)) {
            result[k] = _has(k, r) ? fn(k, l2[k], r[k]) : l2[k];
          }
        }
        for (k in r) {
          if (_has(k, r) && !_has(k, result)) {
            result[k] = r[k];
          }
        }
        return result;
      });
      mergeWithKey_default = mergeWithKey;
    }
  });

  // node_modules/ramda/es/mergeDeepWithKey.js
  var mergeDeepWithKey, mergeDeepWithKey_default;
  var init_mergeDeepWithKey = __esm({
    "node_modules/ramda/es/mergeDeepWithKey.js"() {
      init_curry3();
      init_isObject();
      init_mergeWithKey();
      mergeDeepWithKey = /* @__PURE__ */ _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
        return mergeWithKey_default(function(k, lVal, rVal) {
          if (_isObject(lVal) && _isObject(rVal)) {
            return mergeDeepWithKey2(fn, lVal, rVal);
          } else {
            return fn(k, lVal, rVal);
          }
        }, lObj, rObj);
      });
      mergeDeepWithKey_default = mergeDeepWithKey;
    }
  });

  // node_modules/ramda/es/mergeDeepLeft.js
  var mergeDeepLeft, mergeDeepLeft_default;
  var init_mergeDeepLeft = __esm({
    "node_modules/ramda/es/mergeDeepLeft.js"() {
      init_curry2();
      init_mergeDeepWithKey();
      mergeDeepLeft = /* @__PURE__ */ _curry2(function mergeDeepLeft2(lObj, rObj) {
        return mergeDeepWithKey_default(function(k, lVal, rVal) {
          return lVal;
        }, lObj, rObj);
      });
      mergeDeepLeft_default = mergeDeepLeft;
    }
  });

  // node_modules/ramda/es/mergeDeepRight.js
  var mergeDeepRight, mergeDeepRight_default;
  var init_mergeDeepRight = __esm({
    "node_modules/ramda/es/mergeDeepRight.js"() {
      init_curry2();
      init_mergeDeepWithKey();
      mergeDeepRight = /* @__PURE__ */ _curry2(function mergeDeepRight2(lObj, rObj) {
        return mergeDeepWithKey_default(function(k, lVal, rVal) {
          return rVal;
        }, lObj, rObj);
      });
      mergeDeepRight_default = mergeDeepRight;
    }
  });

  // node_modules/ramda/es/mergeDeepWith.js
  var mergeDeepWith, mergeDeepWith_default;
  var init_mergeDeepWith = __esm({
    "node_modules/ramda/es/mergeDeepWith.js"() {
      init_curry3();
      init_mergeDeepWithKey();
      mergeDeepWith = /* @__PURE__ */ _curry3(function mergeDeepWith2(fn, lObj, rObj) {
        return mergeDeepWithKey_default(function(k, lVal, rVal) {
          return fn(lVal, rVal);
        }, lObj, rObj);
      });
      mergeDeepWith_default = mergeDeepWith;
    }
  });

  // node_modules/ramda/es/mergeLeft.js
  var mergeLeft, mergeLeft_default;
  var init_mergeLeft = __esm({
    "node_modules/ramda/es/mergeLeft.js"() {
      init_objectAssign();
      init_curry2();
      mergeLeft = /* @__PURE__ */ _curry2(function mergeLeft2(l2, r) {
        return objectAssign_default({}, r, l2);
      });
      mergeLeft_default = mergeLeft;
    }
  });

  // node_modules/ramda/es/mergeRight.js
  var mergeRight, mergeRight_default;
  var init_mergeRight = __esm({
    "node_modules/ramda/es/mergeRight.js"() {
      init_objectAssign();
      init_curry2();
      mergeRight = /* @__PURE__ */ _curry2(function mergeRight2(l2, r) {
        return objectAssign_default({}, l2, r);
      });
      mergeRight_default = mergeRight;
    }
  });

  // node_modules/ramda/es/mergeWith.js
  var mergeWith, mergeWith_default;
  var init_mergeWith = __esm({
    "node_modules/ramda/es/mergeWith.js"() {
      init_curry3();
      init_mergeWithKey();
      mergeWith = /* @__PURE__ */ _curry3(function mergeWith2(fn, l2, r) {
        return mergeWithKey_default(function(_, _l, _r) {
          return fn(_l, _r);
        }, l2, r);
      });
      mergeWith_default = mergeWith;
    }
  });

  // node_modules/ramda/es/min.js
  var min, min_default;
  var init_min = __esm({
    "node_modules/ramda/es/min.js"() {
      init_curry2();
      min = /* @__PURE__ */ _curry2(function min2(a, b) {
        return b < a ? b : a;
      });
      min_default = min;
    }
  });

  // node_modules/ramda/es/minBy.js
  var minBy, minBy_default;
  var init_minBy = __esm({
    "node_modules/ramda/es/minBy.js"() {
      init_curry3();
      minBy = /* @__PURE__ */ _curry3(function minBy2(f, a, b) {
        return f(b) < f(a) ? b : a;
      });
      minBy_default = minBy;
    }
  });

  // node_modules/ramda/es/internal/_modify.js
  function _modify(prop3, fn, obj) {
    if (isInteger_default(prop3) && isArray_default(obj)) {
      var arr = [].concat(obj);
      arr[prop3] = fn(arr[prop3]);
      return arr;
    }
    var result = {};
    for (var p in obj) {
      result[p] = obj[p];
    }
    result[prop3] = fn(result[prop3]);
    return result;
  }
  var init_modify = __esm({
    "node_modules/ramda/es/internal/_modify.js"() {
      init_isArray();
      init_isInteger();
    }
  });

  // node_modules/ramda/es/modifyPath.js
  var modifyPath, modifyPath_default;
  var init_modifyPath = __esm({
    "node_modules/ramda/es/modifyPath.js"() {
      init_curry3();
      init_isArray();
      init_isObject();
      init_has();
      init_assoc();
      init_modify();
      modifyPath = /* @__PURE__ */ _curry3(function modifyPath2(path3, fn, object) {
        if (!_isObject(object) && !isArray_default(object) || path3.length === 0) {
          return object;
        }
        var idx = path3[0];
        if (!_has(idx, object)) {
          return object;
        }
        if (path3.length === 1) {
          return _modify(idx, fn, object);
        }
        var val = modifyPath2(Array.prototype.slice.call(path3, 1), fn, object[idx]);
        if (val === object[idx]) {
          return object;
        }
        return _assoc(idx, val, object);
      });
      modifyPath_default = modifyPath;
    }
  });

  // node_modules/ramda/es/modify.js
  var modify, modify_default;
  var init_modify2 = __esm({
    "node_modules/ramda/es/modify.js"() {
      init_curry3();
      init_modifyPath();
      modify = /* @__PURE__ */ _curry3(function modify2(prop3, fn, object) {
        return modifyPath_default([prop3], fn, object);
      });
      modify_default = modify;
    }
  });

  // node_modules/ramda/es/modulo.js
  var modulo, modulo_default;
  var init_modulo = __esm({
    "node_modules/ramda/es/modulo.js"() {
      init_curry2();
      modulo = /* @__PURE__ */ _curry2(function modulo2(a, b) {
        return a % b;
      });
      modulo_default = modulo;
    }
  });

  // node_modules/ramda/es/move.js
  var move, move_default;
  var init_move = __esm({
    "node_modules/ramda/es/move.js"() {
      init_curry3();
      move = /* @__PURE__ */ _curry3(function(from, to, list) {
        var length3 = list.length;
        var result = list.slice();
        var positiveFrom = from < 0 ? length3 + from : from;
        var positiveTo = to < 0 ? length3 + to : to;
        var item = result.splice(positiveFrom, 1);
        return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
      });
      move_default = move;
    }
  });

  // node_modules/ramda/es/multiply.js
  var multiply, multiply_default;
  var init_multiply = __esm({
    "node_modules/ramda/es/multiply.js"() {
      init_curry2();
      multiply = /* @__PURE__ */ _curry2(function multiply2(a, b) {
        return a * b;
      });
      multiply_default = multiply;
    }
  });

  // node_modules/ramda/es/partialObject.js
  var partialObject_default;
  var init_partialObject = __esm({
    "node_modules/ramda/es/partialObject.js"() {
      init_mergeDeepRight();
      init_curry2();
      partialObject_default = /* @__PURE__ */ _curry2((f, o5) => (props3) => f.call(void 0, mergeDeepRight_default(o5, props3)));
    }
  });

  // node_modules/ramda/es/negate.js
  var negate, negate_default;
  var init_negate = __esm({
    "node_modules/ramda/es/negate.js"() {
      init_curry1();
      negate = /* @__PURE__ */ _curry1(function negate2(n2) {
        return -n2;
      });
      negate_default = negate;
    }
  });

  // node_modules/ramda/es/none.js
  var none, none_default;
  var init_none = __esm({
    "node_modules/ramda/es/none.js"() {
      init_complement2();
      init_curry2();
      init_all();
      none = /* @__PURE__ */ _curry2(function none2(fn, input) {
        return all_default(_complement(fn), input);
      });
      none_default = none;
    }
  });

  // node_modules/ramda/es/nthArg.js
  var nthArg, nthArg_default;
  var init_nthArg = __esm({
    "node_modules/ramda/es/nthArg.js"() {
      init_curry1();
      init_curryN2();
      init_nth();
      nthArg = /* @__PURE__ */ _curry1(function nthArg2(n2) {
        var arity = n2 < 0 ? 1 : n2 + 1;
        return curryN_default(arity, function() {
          return nth_default(n2, arguments);
        });
      });
      nthArg_default = nthArg;
    }
  });

  // node_modules/ramda/es/o.js
  var o, o_default;
  var init_o = __esm({
    "node_modules/ramda/es/o.js"() {
      init_curry3();
      o = /* @__PURE__ */ _curry3(function o2(f, g, x) {
        return f(g(x));
      });
      o_default = o;
    }
  });

  // node_modules/ramda/es/internal/_of.js
  function _of(x) {
    return [x];
  }
  var init_of = __esm({
    "node_modules/ramda/es/internal/_of.js"() {
    }
  });

  // node_modules/ramda/es/of.js
  var of, of_default;
  var init_of2 = __esm({
    "node_modules/ramda/es/of.js"() {
      init_curry1();
      init_of();
      of = /* @__PURE__ */ _curry1(_of);
      of_default = of;
    }
  });

  // node_modules/ramda/es/omit.js
  var omit, omit_default;
  var init_omit = __esm({
    "node_modules/ramda/es/omit.js"() {
      init_curry2();
      omit = /* @__PURE__ */ _curry2(function omit2(names, obj) {
        var result = {};
        var index2 = {};
        var idx = 0;
        var len = names.length;
        while (idx < len) {
          index2[names[idx]] = 1;
          idx += 1;
        }
        for (var prop3 in obj) {
          if (!index2.hasOwnProperty(prop3)) {
            result[prop3] = obj[prop3];
          }
        }
        return result;
      });
      omit_default = omit;
    }
  });

  // node_modules/ramda/es/on.js
  var on, on_default;
  var init_on = __esm({
    "node_modules/ramda/es/on.js"() {
      init_curryN();
      on = /* @__PURE__ */ _curryN(4, [], function on2(f, g, a, b) {
        return f(g(a), g(b));
      });
      on_default = on;
    }
  });

  // node_modules/ramda/es/once.js
  var once, once_default;
  var init_once = __esm({
    "node_modules/ramda/es/once.js"() {
      init_arity();
      init_curry1();
      once = /* @__PURE__ */ _curry1(function once2(fn) {
        var called = false;
        var result;
        return _arity(fn.length, function() {
          if (called) {
            return result;
          }
          called = true;
          result = fn.apply(this, arguments);
          return result;
        });
      });
      once_default = once;
    }
  });

  // node_modules/ramda/es/internal/_assertPromise.js
  function _assertPromise(name, p) {
    if (p == null || !_isFunction(p.then)) {
      throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p, []));
    }
  }
  var init_assertPromise = __esm({
    "node_modules/ramda/es/internal/_assertPromise.js"() {
      init_isFunction();
      init_toString();
    }
  });

  // node_modules/ramda/es/otherwise.js
  var otherwise, otherwise_default;
  var init_otherwise = __esm({
    "node_modules/ramda/es/otherwise.js"() {
      init_curry2();
      init_assertPromise();
      otherwise = /* @__PURE__ */ _curry2(function otherwise2(f, p) {
        _assertPromise("otherwise", p);
        return p.then(null, f);
      });
      otherwise_default = otherwise;
    }
  });

  // node_modules/ramda/es/over.js
  var Identity, over, over_default;
  var init_over = __esm({
    "node_modules/ramda/es/over.js"() {
      init_curry3();
      Identity = function(x) {
        return {
          value: x,
          map: function(f) {
            return Identity(f(x));
          }
        };
      };
      over = /* @__PURE__ */ _curry3(function over2(lens3, f, x) {
        return lens3(function(y) {
          return Identity(f(y));
        })(x).value;
      });
      over_default = over;
    }
  });

  // node_modules/ramda/es/pair.js
  var pair, pair_default;
  var init_pair = __esm({
    "node_modules/ramda/es/pair.js"() {
      init_curry2();
      pair = /* @__PURE__ */ _curry2(function pair2(fst, snd) {
        return [fst, snd];
      });
      pair_default = pair;
    }
  });

  // node_modules/ramda/es/internal/_createPartialApplicator.js
  function _createPartialApplicator(concat3) {
    return _curry2(function(fn, args2) {
      return _arity(Math.max(0, fn.length - args2.length), function() {
        return fn.apply(this, concat3(args2, arguments));
      });
    });
  }
  var init_createPartialApplicator = __esm({
    "node_modules/ramda/es/internal/_createPartialApplicator.js"() {
      init_arity();
      init_curry2();
    }
  });

  // node_modules/ramda/es/partial.js
  var partial, partial_default;
  var init_partial = __esm({
    "node_modules/ramda/es/partial.js"() {
      init_concat();
      init_createPartialApplicator();
      partial = /* @__PURE__ */ _createPartialApplicator(_concat);
      partial_default = partial;
    }
  });

  // node_modules/ramda/es/partialRight.js
  var partialRight, partialRight_default;
  var init_partialRight = __esm({
    "node_modules/ramda/es/partialRight.js"() {
      init_concat();
      init_createPartialApplicator();
      init_flip();
      partialRight = /* @__PURE__ */ _createPartialApplicator(
        /* @__PURE__ */ flip_default(_concat)
      );
      partialRight_default = partialRight;
    }
  });

  // node_modules/ramda/es/partition.js
  var partition, partition_default;
  var init_partition = __esm({
    "node_modules/ramda/es/partition.js"() {
      init_filter2();
      init_juxt();
      init_reject();
      partition = /* @__PURE__ */ juxt_default([filter_default, reject_default]);
      partition_default = partition;
    }
  });

  // node_modules/ramda/es/pathEq.js
  var pathEq, pathEq_default;
  var init_pathEq = __esm({
    "node_modules/ramda/es/pathEq.js"() {
      init_curry3();
      init_equals2();
      init_path();
      pathEq = /* @__PURE__ */ _curry3(function pathEq2(_path, val, obj) {
        return equals_default(path_default(_path, obj), val);
      });
      pathEq_default = pathEq;
    }
  });

  // node_modules/ramda/es/pathOr.js
  var pathOr, pathOr_default;
  var init_pathOr = __esm({
    "node_modules/ramda/es/pathOr.js"() {
      init_curry3();
      init_defaultTo();
      init_path();
      pathOr = /* @__PURE__ */ _curry3(function pathOr2(d, p, obj) {
        return defaultTo_default(d, path_default(p, obj));
      });
      pathOr_default = pathOr;
    }
  });

  // node_modules/ramda/es/pathSatisfies.js
  var pathSatisfies, pathSatisfies_default;
  var init_pathSatisfies = __esm({
    "node_modules/ramda/es/pathSatisfies.js"() {
      init_curry3();
      init_path();
      pathSatisfies = /* @__PURE__ */ _curry3(function pathSatisfies2(pred, propPath, obj) {
        return pred(path_default(propPath, obj));
      });
      pathSatisfies_default = pathSatisfies;
    }
  });

  // node_modules/ramda/es/pick.js
  var pick, pick_default;
  var init_pick = __esm({
    "node_modules/ramda/es/pick.js"() {
      init_curry2();
      pick = /* @__PURE__ */ _curry2(function pick2(names, obj) {
        var result = {};
        var idx = 0;
        while (idx < names.length) {
          if (names[idx] in obj) {
            result[names[idx]] = obj[names[idx]];
          }
          idx += 1;
        }
        return result;
      });
      pick_default = pick;
    }
  });

  // node_modules/ramda/es/pickAll.js
  var pickAll, pickAll_default;
  var init_pickAll = __esm({
    "node_modules/ramda/es/pickAll.js"() {
      init_curry2();
      pickAll = /* @__PURE__ */ _curry2(function pickAll2(names, obj) {
        var result = {};
        var idx = 0;
        var len = names.length;
        while (idx < len) {
          var name = names[idx];
          result[name] = obj[name];
          idx += 1;
        }
        return result;
      });
      pickAll_default = pickAll;
    }
  });

  // node_modules/ramda/es/pickBy.js
  var pickBy, pickBy_default;
  var init_pickBy = __esm({
    "node_modules/ramda/es/pickBy.js"() {
      init_curry2();
      pickBy = /* @__PURE__ */ _curry2(function pickBy2(test3, obj) {
        var result = {};
        for (var prop3 in obj) {
          if (test3(obj[prop3], prop3, obj)) {
            result[prop3] = obj[prop3];
          }
        }
        return result;
      });
      pickBy_default = pickBy;
    }
  });

  // node_modules/ramda/es/prepend.js
  var prepend, prepend_default;
  var init_prepend = __esm({
    "node_modules/ramda/es/prepend.js"() {
      init_concat();
      init_curry2();
      prepend = /* @__PURE__ */ _curry2(function prepend2(el, list) {
        return _concat([el], list);
      });
      prepend_default = prepend;
    }
  });

  // node_modules/ramda/es/product.js
  var product, product_default;
  var init_product = __esm({
    "node_modules/ramda/es/product.js"() {
      init_multiply();
      init_reduce2();
      product = /* @__PURE__ */ reduce_default(multiply_default, 1);
      product_default = product;
    }
  });

  // node_modules/ramda/es/useWith.js
  var useWith, useWith_default;
  var init_useWith = __esm({
    "node_modules/ramda/es/useWith.js"() {
      init_curry2();
      init_curryN2();
      useWith = /* @__PURE__ */ _curry2(function useWith2(fn, transformers) {
        return curryN_default(transformers.length, function() {
          var args2 = [];
          var idx = 0;
          while (idx < transformers.length) {
            args2.push(transformers[idx].call(this, arguments[idx]));
            idx += 1;
          }
          return fn.apply(this, args2.concat(Array.prototype.slice.call(arguments, transformers.length)));
        });
      });
      useWith_default = useWith;
    }
  });

  // node_modules/ramda/es/project.js
  var project, project_default;
  var init_project = __esm({
    "node_modules/ramda/es/project.js"() {
      init_map();
      init_identity2();
      init_pickAll();
      init_useWith();
      project = /* @__PURE__ */ useWith_default(_map, [pickAll_default, identity_default]);
      project_default = project;
    }
  });

  // node_modules/ramda/es/internal/_promap.js
  function _promap(f, g, profunctor) {
    return function(x) {
      return g(profunctor(f(x)));
    };
  }
  var init_promap = __esm({
    "node_modules/ramda/es/internal/_promap.js"() {
    }
  });

  // node_modules/ramda/es/internal/_xpromap.js
  var XPromap, _xpromap, xpromap_default;
  var init_xpromap = __esm({
    "node_modules/ramda/es/internal/_xpromap.js"() {
      init_curry3();
      init_xfBase();
      init_promap();
      XPromap = /* @__PURE__ */ function() {
        function XPromap2(f, g, xf) {
          this.xf = xf;
          this.f = f;
          this.g = g;
        }
        XPromap2.prototype["@@transducer/init"] = xfBase_default.init;
        XPromap2.prototype["@@transducer/result"] = xfBase_default.result;
        XPromap2.prototype["@@transducer/step"] = function(result, input) {
          return this.xf["@@transducer/step"](result, _promap(this.f, this.g, input));
        };
        return XPromap2;
      }();
      _xpromap = /* @__PURE__ */ _curry3(function _xpromap2(f, g, xf) {
        return new XPromap(f, g, xf);
      });
      xpromap_default = _xpromap;
    }
  });

  // node_modules/ramda/es/promap.js
  var promap, promap_default;
  var init_promap2 = __esm({
    "node_modules/ramda/es/promap.js"() {
      init_curry3();
      init_dispatchable();
      init_promap();
      init_xpromap();
      promap = /* @__PURE__ */ _curry3(
        /* @__PURE__ */ _dispatchable(["fantasy-land/promap", "promap"], xpromap_default, _promap)
      );
      promap_default = promap;
    }
  });

  // node_modules/ramda/es/propEq.js
  var propEq, propEq_default;
  var init_propEq = __esm({
    "node_modules/ramda/es/propEq.js"() {
      init_curry3();
      init_prop();
      init_equals2();
      propEq = /* @__PURE__ */ _curry3(function propEq2(name, val, obj) {
        return equals_default(val, prop_default(name, obj));
      });
      propEq_default = propEq;
    }
  });

  // node_modules/ramda/es/propIs.js
  var propIs, propIs_default;
  var init_propIs = __esm({
    "node_modules/ramda/es/propIs.js"() {
      init_curry3();
      init_prop();
      init_is();
      propIs = /* @__PURE__ */ _curry3(function propIs2(type3, name, obj) {
        return is_default(type3, prop_default(name, obj));
      });
      propIs_default = propIs;
    }
  });

  // node_modules/ramda/es/propOr.js
  var propOr, propOr_default;
  var init_propOr = __esm({
    "node_modules/ramda/es/propOr.js"() {
      init_curry3();
      init_defaultTo();
      init_prop();
      propOr = /* @__PURE__ */ _curry3(function propOr2(val, p, obj) {
        return defaultTo_default(val, prop_default(p, obj));
      });
      propOr_default = propOr;
    }
  });

  // node_modules/ramda/es/propSatisfies.js
  var propSatisfies, propSatisfies_default;
  var init_propSatisfies = __esm({
    "node_modules/ramda/es/propSatisfies.js"() {
      init_curry3();
      init_prop();
      propSatisfies = /* @__PURE__ */ _curry3(function propSatisfies2(pred, name, obj) {
        return pred(prop_default(name, obj));
      });
      propSatisfies_default = propSatisfies;
    }
  });

  // node_modules/ramda/es/props.js
  var props, props_default;
  var init_props = __esm({
    "node_modules/ramda/es/props.js"() {
      init_curry2();
      init_path();
      props = /* @__PURE__ */ _curry2(function props2(ps, obj) {
        return ps.map(function(p) {
          return path_default([p], obj);
        });
      });
      props_default = props;
    }
  });

  // node_modules/ramda/es/range.js
  var range, range_default;
  var init_range = __esm({
    "node_modules/ramda/es/range.js"() {
      init_curry2();
      init_isNumber();
      range = /* @__PURE__ */ _curry2(function range2(from, to) {
        if (!(_isNumber(from) && _isNumber(to))) {
          throw new TypeError("Both arguments to range must be numbers");
        }
        var result = [];
        var n2 = from;
        while (n2 < to) {
          result.push(n2);
          n2 += 1;
        }
        return result;
      });
      range_default = range;
    }
  });

  // node_modules/ramda/es/reduceRight.js
  var reduceRight, reduceRight_default;
  var init_reduceRight = __esm({
    "node_modules/ramda/es/reduceRight.js"() {
      init_curry3();
      reduceRight = /* @__PURE__ */ _curry3(function reduceRight2(fn, acc, list) {
        var idx = list.length - 1;
        while (idx >= 0) {
          acc = fn(list[idx], acc);
          if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
          }
          idx -= 1;
        }
        return acc;
      });
      reduceRight_default = reduceRight;
    }
  });

  // node_modules/ramda/es/reduceWhile.js
  var reduceWhile, reduceWhile_default;
  var init_reduceWhile = __esm({
    "node_modules/ramda/es/reduceWhile.js"() {
      init_curryN();
      init_reduce();
      init_reduced();
      reduceWhile = /* @__PURE__ */ _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
        return _reduce(function(acc, x) {
          return pred(acc, x) ? fn(acc, x) : _reduced(acc);
        }, a, list);
      });
      reduceWhile_default = reduceWhile;
    }
  });

  // node_modules/ramda/es/reduced.js
  var reduced, reduced_default;
  var init_reduced2 = __esm({
    "node_modules/ramda/es/reduced.js"() {
      init_curry1();
      init_reduced();
      reduced = /* @__PURE__ */ _curry1(_reduced);
      reduced_default = reduced;
    }
  });

  // node_modules/ramda/es/times.js
  var times, times_default;
  var init_times = __esm({
    "node_modules/ramda/es/times.js"() {
      init_curry2();
      times = /* @__PURE__ */ _curry2(function times2(fn, n2) {
        var len = Number(n2);
        var idx = 0;
        var list;
        if (len < 0 || isNaN(len)) {
          throw new RangeError("n must be a non-negative number");
        }
        list = new Array(len);
        while (idx < len) {
          list[idx] = fn(idx);
          idx += 1;
        }
        return list;
      });
      times_default = times;
    }
  });

  // node_modules/ramda/es/repeat.js
  var repeat, repeat_default;
  var init_repeat = __esm({
    "node_modules/ramda/es/repeat.js"() {
      init_curry2();
      init_always();
      init_times();
      repeat = /* @__PURE__ */ _curry2(function repeat2(value, n2) {
        return times_default(always_default(value), n2);
      });
      repeat_default = repeat;
    }
  });

  // node_modules/ramda/es/replace.js
  var replace, replace_default;
  var init_replace = __esm({
    "node_modules/ramda/es/replace.js"() {
      init_curry3();
      replace = /* @__PURE__ */ _curry3(function replace2(regex, replacement, str2) {
        return str2.replace(regex, replacement);
      });
      replace_default = replace;
    }
  });

  // node_modules/ramda/es/scan.js
  var scan, scan_default;
  var init_scan = __esm({
    "node_modules/ramda/es/scan.js"() {
      init_curry3();
      scan = /* @__PURE__ */ _curry3(function scan2(fn, acc, list) {
        var idx = 0;
        var len = list.length;
        var result = [acc];
        while (idx < len) {
          acc = fn(acc, list[idx]);
          result[idx + 1] = acc;
          idx += 1;
        }
        return result;
      });
      scan_default = scan;
    }
  });

  // node_modules/ramda/es/sequence.js
  var sequence, sequence_default;
  var init_sequence = __esm({
    "node_modules/ramda/es/sequence.js"() {
      init_curry2();
      init_ap();
      init_map2();
      init_prepend();
      init_reduceRight();
      sequence = /* @__PURE__ */ _curry2(function sequence2(of2, traversable) {
        return typeof traversable.sequence === "function" ? traversable.sequence(of2) : reduceRight_default(function(x, acc) {
          return ap_default(map_default(prepend_default, x), acc);
        }, of2([]), traversable);
      });
      sequence_default = sequence;
    }
  });

  // node_modules/ramda/es/set.js
  var set, set_default;
  var init_set = __esm({
    "node_modules/ramda/es/set.js"() {
      init_curry3();
      init_always();
      init_over();
      set = /* @__PURE__ */ _curry3(function set2(lens3, v, x) {
        return over_default(lens3, always_default(v), x);
      });
      set_default = set;
    }
  });

  // node_modules/ramda/es/sort.js
  var sort, sort_default;
  var init_sort = __esm({
    "node_modules/ramda/es/sort.js"() {
      init_curry2();
      sort = /* @__PURE__ */ _curry2(function sort2(comparator3, list) {
        return Array.prototype.slice.call(list, 0).sort(comparator3);
      });
      sort_default = sort;
    }
  });

  // node_modules/ramda/es/sortBy.js
  var sortBy, sortBy_default;
  var init_sortBy = __esm({
    "node_modules/ramda/es/sortBy.js"() {
      init_curry2();
      sortBy = /* @__PURE__ */ _curry2(function sortBy2(fn, list) {
        return Array.prototype.slice.call(list, 0).sort(function(a, b) {
          var aa = fn(a);
          var bb = fn(b);
          return aa < bb ? -1 : aa > bb ? 1 : 0;
        });
      });
      sortBy_default = sortBy;
    }
  });

  // node_modules/ramda/es/sortWith.js
  var sortWith, sortWith_default;
  var init_sortWith = __esm({
    "node_modules/ramda/es/sortWith.js"() {
      init_curry2();
      sortWith = /* @__PURE__ */ _curry2(function sortWith2(fns, list) {
        return Array.prototype.slice.call(list, 0).sort(function(a, b) {
          var result = 0;
          var i2 = 0;
          while (result === 0 && i2 < fns.length) {
            result = fns[i2](a, b);
            i2 += 1;
          }
          return result;
        });
      });
      sortWith_default = sortWith;
    }
  });

  // node_modules/ramda/es/split.js
  var split, split_default;
  var init_split = __esm({
    "node_modules/ramda/es/split.js"() {
      init_invoker();
      split = /* @__PURE__ */ invoker_default(1, "split");
      split_default = split;
    }
  });

  // node_modules/ramda/es/splitAt.js
  var splitAt, splitAt_default;
  var init_splitAt = __esm({
    "node_modules/ramda/es/splitAt.js"() {
      init_curry2();
      init_length();
      init_slice();
      splitAt = /* @__PURE__ */ _curry2(function splitAt2(index2, array) {
        return [slice_default(0, index2, array), slice_default(index2, length_default(array), array)];
      });
      splitAt_default = splitAt;
    }
  });

  // node_modules/ramda/es/splitEvery.js
  var splitEvery, splitEvery_default;
  var init_splitEvery = __esm({
    "node_modules/ramda/es/splitEvery.js"() {
      init_curry2();
      init_slice();
      splitEvery = /* @__PURE__ */ _curry2(function splitEvery2(n2, list) {
        if (n2 <= 0) {
          throw new Error("First argument to splitEvery must be a positive integer");
        }
        var result = [];
        var idx = 0;
        while (idx < list.length) {
          result.push(slice_default(idx, idx += n2, list));
        }
        return result;
      });
      splitEvery_default = splitEvery;
    }
  });

  // node_modules/ramda/es/splitWhen.js
  var splitWhen, splitWhen_default;
  var init_splitWhen = __esm({
    "node_modules/ramda/es/splitWhen.js"() {
      init_curry2();
      splitWhen = /* @__PURE__ */ _curry2(function splitWhen2(pred, list) {
        var idx = 0;
        var len = list.length;
        var prefix = [];
        while (idx < len && !pred(list[idx])) {
          prefix.push(list[idx]);
          idx += 1;
        }
        return [prefix, Array.prototype.slice.call(list, idx)];
      });
      splitWhen_default = splitWhen;
    }
  });

  // node_modules/ramda/es/splitWhenever.js
  var splitWhenever, splitWhenever_default;
  var init_splitWhenever = __esm({
    "node_modules/ramda/es/splitWhenever.js"() {
      init_curryN();
      splitWhenever = /* @__PURE__ */ _curryN(2, [], function splitWhenever2(pred, list) {
        var acc = [];
        var curr = [];
        for (var i2 = 0; i2 < list.length; i2 = i2 + 1) {
          if (!pred(list[i2])) {
            curr.push(list[i2]);
          }
          if ((i2 < list.length - 1 && pred(list[i2 + 1]) || i2 === list.length - 1) && curr.length > 0) {
            acc.push(curr);
            curr = [];
          }
        }
        return acc;
      });
      splitWhenever_default = splitWhenever;
    }
  });

  // node_modules/ramda/es/startsWith.js
  var startsWith, startsWith_default;
  var init_startsWith = __esm({
    "node_modules/ramda/es/startsWith.js"() {
      init_curry2();
      init_equals2();
      init_take();
      startsWith = /* @__PURE__ */ _curry2(function(prefix, list) {
        return equals_default(take_default(prefix.length, list), prefix);
      });
      startsWith_default = startsWith;
    }
  });

  // node_modules/ramda/es/subtract.js
  var subtract, subtract_default;
  var init_subtract = __esm({
    "node_modules/ramda/es/subtract.js"() {
      init_curry2();
      subtract = /* @__PURE__ */ _curry2(function subtract2(a, b) {
        return Number(a) - Number(b);
      });
      subtract_default = subtract;
    }
  });

  // node_modules/ramda/es/symmetricDifference.js
  var symmetricDifference, symmetricDifference_default;
  var init_symmetricDifference = __esm({
    "node_modules/ramda/es/symmetricDifference.js"() {
      init_curry2();
      init_concat2();
      init_difference();
      symmetricDifference = /* @__PURE__ */ _curry2(function symmetricDifference2(list1, list2) {
        return concat_default(difference_default(list1, list2), difference_default(list2, list1));
      });
      symmetricDifference_default = symmetricDifference;
    }
  });

  // node_modules/ramda/es/symmetricDifferenceWith.js
  var symmetricDifferenceWith, symmetricDifferenceWith_default;
  var init_symmetricDifferenceWith = __esm({
    "node_modules/ramda/es/symmetricDifferenceWith.js"() {
      init_curry3();
      init_concat2();
      init_differenceWith();
      symmetricDifferenceWith = /* @__PURE__ */ _curry3(function symmetricDifferenceWith2(pred, list1, list2) {
        return concat_default(differenceWith_default(pred, list1, list2), differenceWith_default(pred, list2, list1));
      });
      symmetricDifferenceWith_default = symmetricDifferenceWith;
    }
  });

  // node_modules/ramda/es/takeLastWhile.js
  var takeLastWhile, takeLastWhile_default;
  var init_takeLastWhile = __esm({
    "node_modules/ramda/es/takeLastWhile.js"() {
      init_curry2();
      init_slice();
      takeLastWhile = /* @__PURE__ */ _curry2(function takeLastWhile2(fn, xs) {
        var idx = xs.length - 1;
        while (idx >= 0 && fn(xs[idx])) {
          idx -= 1;
        }
        return slice_default(idx + 1, Infinity, xs);
      });
      takeLastWhile_default = takeLastWhile;
    }
  });

  // node_modules/ramda/es/internal/_xtakeWhile.js
  var XTakeWhile, _xtakeWhile, xtakeWhile_default;
  var init_xtakeWhile = __esm({
    "node_modules/ramda/es/internal/_xtakeWhile.js"() {
      init_curry2();
      init_reduced();
      init_xfBase();
      XTakeWhile = /* @__PURE__ */ function() {
        function XTakeWhile2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XTakeWhile2.prototype["@@transducer/init"] = xfBase_default.init;
        XTakeWhile2.prototype["@@transducer/result"] = xfBase_default.result;
        XTakeWhile2.prototype["@@transducer/step"] = function(result, input) {
          return this.f(input) ? this.xf["@@transducer/step"](result, input) : _reduced(result);
        };
        return XTakeWhile2;
      }();
      _xtakeWhile = /* @__PURE__ */ _curry2(function _xtakeWhile2(f, xf) {
        return new XTakeWhile(f, xf);
      });
      xtakeWhile_default = _xtakeWhile;
    }
  });

  // node_modules/ramda/es/takeWhile.js
  var takeWhile, takeWhile_default;
  var init_takeWhile = __esm({
    "node_modules/ramda/es/takeWhile.js"() {
      init_curry2();
      init_dispatchable();
      init_xtakeWhile();
      init_slice();
      takeWhile = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable(["takeWhile"], xtakeWhile_default, function takeWhile2(fn, xs) {
          var idx = 0;
          var len = xs.length;
          while (idx < len && fn(xs[idx])) {
            idx += 1;
          }
          return slice_default(0, idx, xs);
        })
      );
      takeWhile_default = takeWhile;
    }
  });

  // node_modules/ramda/es/internal/_xtap.js
  var XTap, _xtap, xtap_default;
  var init_xtap = __esm({
    "node_modules/ramda/es/internal/_xtap.js"() {
      init_curry2();
      init_xfBase();
      XTap = /* @__PURE__ */ function() {
        function XTap2(f, xf) {
          this.xf = xf;
          this.f = f;
        }
        XTap2.prototype["@@transducer/init"] = xfBase_default.init;
        XTap2.prototype["@@transducer/result"] = xfBase_default.result;
        XTap2.prototype["@@transducer/step"] = function(result, input) {
          this.f(input);
          return this.xf["@@transducer/step"](result, input);
        };
        return XTap2;
      }();
      _xtap = /* @__PURE__ */ _curry2(function _xtap2(f, xf) {
        return new XTap(f, xf);
      });
      xtap_default = _xtap;
    }
  });

  // node_modules/ramda/es/tap.js
  var tap, tap_default;
  var init_tap = __esm({
    "node_modules/ramda/es/tap.js"() {
      init_curry2();
      init_dispatchable();
      init_xtap();
      tap = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], xtap_default, function tap2(fn, x) {
          fn(x);
          return x;
        })
      );
      tap_default = tap;
    }
  });

  // node_modules/ramda/es/internal/_isRegExp.js
  function _isRegExp(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
  }
  var init_isRegExp = __esm({
    "node_modules/ramda/es/internal/_isRegExp.js"() {
    }
  });

  // node_modules/ramda/es/test.js
  var test, test_default;
  var init_test = __esm({
    "node_modules/ramda/es/test.js"() {
      init_cloneRegExp();
      init_curry2();
      init_isRegExp();
      init_toString2();
      test = /* @__PURE__ */ _curry2(function test2(pattern, str2) {
        if (!_isRegExp(pattern)) {
          throw new TypeError("\u2018test\u2019 requires a value of type RegExp as its first argument; received " + toString_default(pattern));
        }
        return _cloneRegExp(pattern).test(str2);
      });
      test_default = test;
    }
  });

  // node_modules/ramda/es/andThen.js
  var andThen, andThen_default;
  var init_andThen = __esm({
    "node_modules/ramda/es/andThen.js"() {
      init_curry2();
      init_assertPromise();
      andThen = /* @__PURE__ */ _curry2(function andThen2(f, p) {
        _assertPromise("andThen", p);
        return p.then(f);
      });
      andThen_default = andThen;
    }
  });

  // node_modules/ramda/es/toLower.js
  var toLower, toLower_default;
  var init_toLower = __esm({
    "node_modules/ramda/es/toLower.js"() {
      init_invoker();
      toLower = /* @__PURE__ */ invoker_default(0, "toLowerCase");
      toLower_default = toLower;
    }
  });

  // node_modules/ramda/es/toPairs.js
  var toPairs, toPairs_default;
  var init_toPairs = __esm({
    "node_modules/ramda/es/toPairs.js"() {
      init_curry1();
      init_has();
      toPairs = /* @__PURE__ */ _curry1(function toPairs2(obj) {
        var pairs = [];
        for (var prop3 in obj) {
          if (_has(prop3, obj)) {
            pairs[pairs.length] = [prop3, obj[prop3]];
          }
        }
        return pairs;
      });
      toPairs_default = toPairs;
    }
  });

  // node_modules/ramda/es/toPairsIn.js
  var toPairsIn, toPairsIn_default;
  var init_toPairsIn = __esm({
    "node_modules/ramda/es/toPairsIn.js"() {
      init_curry1();
      toPairsIn = /* @__PURE__ */ _curry1(function toPairsIn2(obj) {
        var pairs = [];
        for (var prop3 in obj) {
          pairs[pairs.length] = [prop3, obj[prop3]];
        }
        return pairs;
      });
      toPairsIn_default = toPairsIn;
    }
  });

  // node_modules/ramda/es/toUpper.js
  var toUpper, toUpper_default;
  var init_toUpper = __esm({
    "node_modules/ramda/es/toUpper.js"() {
      init_invoker();
      toUpper = /* @__PURE__ */ invoker_default(0, "toUpperCase");
      toUpper_default = toUpper;
    }
  });

  // node_modules/ramda/es/transduce.js
  var transduce, transduce_default;
  var init_transduce = __esm({
    "node_modules/ramda/es/transduce.js"() {
      init_reduce();
      init_xwrap();
      init_curryN2();
      transduce = /* @__PURE__ */ curryN_default(4, function transduce2(xf, fn, acc, list) {
        return _reduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list);
      });
      transduce_default = transduce;
    }
  });

  // node_modules/ramda/es/transpose.js
  var transpose, transpose_default;
  var init_transpose = __esm({
    "node_modules/ramda/es/transpose.js"() {
      init_curry1();
      transpose = /* @__PURE__ */ _curry1(function transpose2(outerlist) {
        var i2 = 0;
        var result = [];
        while (i2 < outerlist.length) {
          var innerlist = outerlist[i2];
          var j = 0;
          while (j < innerlist.length) {
            if (typeof result[j] === "undefined") {
              result[j] = [];
            }
            result[j].push(innerlist[j]);
            j += 1;
          }
          i2 += 1;
        }
        return result;
      });
      transpose_default = transpose;
    }
  });

  // node_modules/ramda/es/traverse.js
  var traverse, traverse_default;
  var init_traverse = __esm({
    "node_modules/ramda/es/traverse.js"() {
      init_curry3();
      init_map2();
      init_sequence();
      traverse = /* @__PURE__ */ _curry3(function traverse2(of2, f, traversable) {
        return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](f, of2) : typeof traversable.traverse === "function" ? traversable.traverse(f, of2) : sequence_default(of2, map_default(f, traversable));
      });
      traverse_default = traverse;
    }
  });

  // node_modules/ramda/es/trim.js
  var ws, zeroWidth, hasProtoTrim, trim, trim_default;
  var init_trim = __esm({
    "node_modules/ramda/es/trim.js"() {
      init_curry1();
      ws = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      zeroWidth = "\u200B";
      hasProtoTrim = typeof String.prototype.trim === "function";
      trim = !hasProtoTrim || /* @__PURE__ */ ws.trim() || !/* @__PURE__ */ zeroWidth.trim() ? /* @__PURE__ */ _curry1(function trim2(str2) {
        var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
        var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
        return str2.replace(beginRx, "").replace(endRx, "");
      }) : /* @__PURE__ */ _curry1(function trim3(str2) {
        return str2.trim();
      });
      trim_default = trim;
    }
  });

  // node_modules/ramda/es/tryCatch.js
  var tryCatch, tryCatch_default;
  var init_tryCatch = __esm({
    "node_modules/ramda/es/tryCatch.js"() {
      init_arity();
      init_concat();
      init_curry2();
      tryCatch = /* @__PURE__ */ _curry2(function _tryCatch(tryer, catcher) {
        return _arity(tryer.length, function() {
          try {
            return tryer.apply(this, arguments);
          } catch (e2) {
            return catcher.apply(this, _concat([e2], arguments));
          }
        });
      });
      tryCatch_default = tryCatch;
    }
  });

  // node_modules/ramda/es/unapply.js
  var unapply, unapply_default;
  var init_unapply = __esm({
    "node_modules/ramda/es/unapply.js"() {
      init_curry1();
      unapply = /* @__PURE__ */ _curry1(function unapply2(fn) {
        return function() {
          return fn(Array.prototype.slice.call(arguments, 0));
        };
      });
      unapply_default = unapply;
    }
  });

  // node_modules/ramda/es/unary.js
  var unary, unary_default;
  var init_unary = __esm({
    "node_modules/ramda/es/unary.js"() {
      init_curry1();
      init_nAry();
      unary = /* @__PURE__ */ _curry1(function unary2(fn) {
        return nAry_default(1, fn);
      });
      unary_default = unary;
    }
  });

  // node_modules/ramda/es/uncurryN.js
  var uncurryN, uncurryN_default;
  var init_uncurryN = __esm({
    "node_modules/ramda/es/uncurryN.js"() {
      init_curry2();
      init_curryN2();
      uncurryN = /* @__PURE__ */ _curry2(function uncurryN2(depth, fn) {
        return curryN_default(depth, function() {
          var currentDepth = 1;
          var value = fn;
          var idx = 0;
          var endIdx;
          while (currentDepth <= depth && typeof value === "function") {
            endIdx = currentDepth === depth ? arguments.length : idx + value.length;
            value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
            currentDepth += 1;
            idx = endIdx;
          }
          return value;
        });
      });
      uncurryN_default = uncurryN;
    }
  });

  // node_modules/ramda/es/unfold.js
  var unfold, unfold_default;
  var init_unfold = __esm({
    "node_modules/ramda/es/unfold.js"() {
      init_curry2();
      unfold = /* @__PURE__ */ _curry2(function unfold2(fn, seed) {
        var pair3 = fn(seed);
        var result = [];
        while (pair3 && pair3.length) {
          result[result.length] = pair3[0];
          pair3 = fn(pair3[1]);
        }
        return result;
      });
      unfold_default = unfold;
    }
  });

  // node_modules/ramda/es/union.js
  var union, union_default;
  var init_union = __esm({
    "node_modules/ramda/es/union.js"() {
      init_concat();
      init_curry2();
      init_compose();
      init_uniq();
      union = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ compose(uniq_default, _concat)
      );
      union_default = union;
    }
  });

  // node_modules/ramda/es/internal/_xuniqWith.js
  var XUniqWith, _xuniqWith, xuniqWith_default;
  var init_xuniqWith = __esm({
    "node_modules/ramda/es/internal/_xuniqWith.js"() {
      init_curry2();
      init_includesWith();
      init_xfBase();
      XUniqWith = /* @__PURE__ */ function() {
        function XUniqWith2(pred, xf) {
          this.xf = xf;
          this.pred = pred;
          this.items = [];
        }
        XUniqWith2.prototype["@@transducer/init"] = xfBase_default.init;
        XUniqWith2.prototype["@@transducer/result"] = xfBase_default.result;
        XUniqWith2.prototype["@@transducer/step"] = function(result, input) {
          if (_includesWith(this.pred, input, this.items)) {
            return result;
          } else {
            this.items.push(input);
            return this.xf["@@transducer/step"](result, input);
          }
        };
        return XUniqWith2;
      }();
      _xuniqWith = /* @__PURE__ */ _curry2(function _xuniqWith2(pred, xf) {
        return new XUniqWith(pred, xf);
      });
      xuniqWith_default = _xuniqWith;
    }
  });

  // node_modules/ramda/es/uniqWith.js
  var uniqWith, uniqWith_default;
  var init_uniqWith = __esm({
    "node_modules/ramda/es/uniqWith.js"() {
      init_curry2();
      init_dispatchable();
      init_includesWith();
      init_xuniqWith();
      uniqWith = /* @__PURE__ */ _curry2(
        /* @__PURE__ */ _dispatchable([], xuniqWith_default, function(pred, list) {
          var idx = 0;
          var len = list.length;
          var result = [];
          var item;
          while (idx < len) {
            item = list[idx];
            if (!_includesWith(pred, item, result)) {
              result[result.length] = item;
            }
            idx += 1;
          }
          return result;
        })
      );
      uniqWith_default = uniqWith;
    }
  });

  // node_modules/ramda/es/unionWith.js
  var unionWith, unionWith_default;
  var init_unionWith = __esm({
    "node_modules/ramda/es/unionWith.js"() {
      init_concat();
      init_curry3();
      init_uniqWith();
      unionWith = /* @__PURE__ */ _curry3(function unionWith2(pred, list1, list2) {
        return uniqWith_default(pred, _concat(list1, list2));
      });
      unionWith_default = unionWith;
    }
  });

  // node_modules/ramda/es/unless.js
  var unless, unless_default;
  var init_unless = __esm({
    "node_modules/ramda/es/unless.js"() {
      init_curry3();
      unless = /* @__PURE__ */ _curry3(function unless2(pred, whenFalseFn, x) {
        return pred(x) ? x : whenFalseFn(x);
      });
      unless_default = unless;
    }
  });

  // node_modules/ramda/es/unnest.js
  var unnest, unnest_default;
  var init_unnest = __esm({
    "node_modules/ramda/es/unnest.js"() {
      init_identity();
      init_chain();
      unnest = /* @__PURE__ */ chain_default(_identity);
      unnest_default = unnest;
    }
  });

  // node_modules/ramda/es/until.js
  var until, until_default;
  var init_until = __esm({
    "node_modules/ramda/es/until.js"() {
      init_curry3();
      until = /* @__PURE__ */ _curry3(function until2(pred, fn, init6) {
        var val = init6;
        while (!pred(val)) {
          val = fn(val);
        }
        return val;
      });
      until_default = until;
    }
  });

  // node_modules/ramda/es/unwind.js
  var unwind, unwind_default;
  var init_unwind = __esm({
    "node_modules/ramda/es/unwind.js"() {
      init_curry2();
      init_isArray();
      init_map();
      init_assoc();
      unwind = /* @__PURE__ */ _curry2(function(key, object) {
        if (!(key in object && isArray_default(object[key]))) {
          return [object];
        }
        return _map(function(item) {
          return _assoc(key, item, object);
        }, object[key]);
      });
      unwind_default = unwind;
    }
  });

  // node_modules/ramda/es/valuesIn.js
  var valuesIn, valuesIn_default;
  var init_valuesIn = __esm({
    "node_modules/ramda/es/valuesIn.js"() {
      init_curry1();
      valuesIn = /* @__PURE__ */ _curry1(function valuesIn2(obj) {
        var prop3;
        var vs = [];
        for (prop3 in obj) {
          vs[vs.length] = obj[prop3];
        }
        return vs;
      });
      valuesIn_default = valuesIn;
    }
  });

  // node_modules/ramda/es/view.js
  var Const, view, view_default;
  var init_view = __esm({
    "node_modules/ramda/es/view.js"() {
      init_curry2();
      Const = function(x) {
        return {
          value: x,
          "fantasy-land/map": function() {
            return this;
          }
        };
      };
      view = /* @__PURE__ */ _curry2(function view2(lens3, x) {
        return lens3(Const)(x).value;
      });
      view_default = view;
    }
  });

  // node_modules/ramda/es/when.js
  var when, when_default;
  var init_when = __esm({
    "node_modules/ramda/es/when.js"() {
      init_curry3();
      when = /* @__PURE__ */ _curry3(function when2(pred, whenTrueFn, x) {
        return pred(x) ? whenTrueFn(x) : x;
      });
      when_default = when;
    }
  });

  // node_modules/ramda/es/where.js
  var where, where_default;
  var init_where = __esm({
    "node_modules/ramda/es/where.js"() {
      init_curry2();
      init_has();
      where = /* @__PURE__ */ _curry2(function where2(spec, testObj) {
        for (var prop3 in spec) {
          if (_has(prop3, spec) && !spec[prop3](testObj[prop3])) {
            return false;
          }
        }
        return true;
      });
      where_default = where;
    }
  });

  // node_modules/ramda/es/whereAny.js
  var whereAny, whereAny_default;
  var init_whereAny = __esm({
    "node_modules/ramda/es/whereAny.js"() {
      init_curry2();
      init_has();
      whereAny = /* @__PURE__ */ _curry2(function whereAny2(spec, testObj) {
        for (var prop3 in spec) {
          if (_has(prop3, spec) && spec[prop3](testObj[prop3])) {
            return true;
          }
        }
        return false;
      });
      whereAny_default = whereAny;
    }
  });

  // node_modules/ramda/es/whereEq.js
  var whereEq, whereEq_default;
  var init_whereEq = __esm({
    "node_modules/ramda/es/whereEq.js"() {
      init_curry2();
      init_equals2();
      init_map2();
      init_where();
      whereEq = /* @__PURE__ */ _curry2(function whereEq2(spec, testObj) {
        return where_default(map_default(equals_default, spec), testObj);
      });
      whereEq_default = whereEq;
    }
  });

  // node_modules/ramda/es/without.js
  var without, without_default;
  var init_without = __esm({
    "node_modules/ramda/es/without.js"() {
      init_includes();
      init_curry2();
      init_flip();
      init_reject();
      without = /* @__PURE__ */ _curry2(function(xs, list) {
        return reject_default(flip_default(_includes)(xs), list);
      });
      without_default = without;
    }
  });

  // node_modules/ramda/es/xor.js
  var xor, xor_default;
  var init_xor = __esm({
    "node_modules/ramda/es/xor.js"() {
      init_curry2();
      xor = /* @__PURE__ */ _curry2(function xor2(a, b) {
        return Boolean(!a ^ !b);
      });
      xor_default = xor;
    }
  });

  // node_modules/ramda/es/xprod.js
  var xprod, xprod_default;
  var init_xprod = __esm({
    "node_modules/ramda/es/xprod.js"() {
      init_curry2();
      xprod = /* @__PURE__ */ _curry2(function xprod2(a, b) {
        var idx = 0;
        var ilen = a.length;
        var j;
        var jlen = b.length;
        var result = [];
        while (idx < ilen) {
          j = 0;
          while (j < jlen) {
            result[result.length] = [a[idx], b[j]];
            j += 1;
          }
          idx += 1;
        }
        return result;
      });
      xprod_default = xprod;
    }
  });

  // node_modules/ramda/es/zip.js
  var zip, zip_default;
  var init_zip = __esm({
    "node_modules/ramda/es/zip.js"() {
      init_curry2();
      zip = /* @__PURE__ */ _curry2(function zip2(a, b) {
        var rv = [];
        var idx = 0;
        var len = Math.min(a.length, b.length);
        while (idx < len) {
          rv[idx] = [a[idx], b[idx]];
          idx += 1;
        }
        return rv;
      });
      zip_default = zip;
    }
  });

  // node_modules/ramda/es/zipObj.js
  var zipObj, zipObj_default;
  var init_zipObj = __esm({
    "node_modules/ramda/es/zipObj.js"() {
      init_curry2();
      zipObj = /* @__PURE__ */ _curry2(function zipObj2(keys4, values3) {
        var idx = 0;
        var len = Math.min(keys4.length, values3.length);
        var out = {};
        while (idx < len) {
          out[keys4[idx]] = values3[idx];
          idx += 1;
        }
        return out;
      });
      zipObj_default = zipObj;
    }
  });

  // node_modules/ramda/es/zipWith.js
  var zipWith, zipWith_default;
  var init_zipWith = __esm({
    "node_modules/ramda/es/zipWith.js"() {
      init_curry3();
      zipWith = /* @__PURE__ */ _curry3(function zipWith2(fn, a, b) {
        var rv = [];
        var idx = 0;
        var len = Math.min(a.length, b.length);
        while (idx < len) {
          rv[idx] = fn(a[idx], b[idx]);
          idx += 1;
        }
        return rv;
      });
      zipWith_default = zipWith;
    }
  });

  // node_modules/ramda/es/thunkify.js
  var thunkify, thunkify_default;
  var init_thunkify = __esm({
    "node_modules/ramda/es/thunkify.js"() {
      init_curryN2();
      init_curry1();
      thunkify = /* @__PURE__ */ _curry1(function thunkify2(fn) {
        return curryN_default(fn.length, function createThunk() {
          var fnArgs = arguments;
          return function invokeThunk() {
            return fn.apply(this, fnArgs);
          };
        });
      });
      thunkify_default = thunkify;
    }
  });

  // node_modules/ramda/es/index.js
  var es_exports = {};
  __export(es_exports, {
    F: () => F_default,
    T: () => T_default,
    __: () => __default,
    add: () => add_default,
    addIndex: () => addIndex_default,
    adjust: () => adjust_default,
    all: () => all_default,
    allPass: () => allPass_default,
    always: () => always_default,
    and: () => and_default,
    andThen: () => andThen_default,
    any: () => any_default,
    anyPass: () => anyPass_default,
    ap: () => ap_default,
    aperture: () => aperture_default,
    append: () => append_default,
    apply: () => apply_default,
    applySpec: () => applySpec_default,
    applyTo: () => applyTo_default,
    ascend: () => ascend_default,
    assoc: () => assoc_default,
    assocPath: () => assocPath_default,
    binary: () => binary_default,
    bind: () => bind_default,
    both: () => both_default,
    call: () => call_default,
    chain: () => chain_default,
    clamp: () => clamp_default,
    clone: () => clone_default,
    collectBy: () => collectBy_default,
    comparator: () => comparator_default,
    complement: () => complement_default,
    compose: () => compose,
    composeWith: () => composeWith_default,
    concat: () => concat_default,
    cond: () => cond_default,
    construct: () => construct_default,
    constructN: () => constructN_default,
    converge: () => converge_default,
    count: () => count_default,
    countBy: () => countBy_default,
    curry: () => curry_default,
    curryN: () => curryN_default,
    dec: () => dec_default,
    defaultTo: () => defaultTo_default,
    descend: () => descend_default,
    difference: () => difference_default,
    differenceWith: () => differenceWith_default,
    dissoc: () => dissoc_default,
    dissocPath: () => dissocPath_default,
    divide: () => divide_default,
    drop: () => drop_default,
    dropLast: () => dropLast_default,
    dropLastWhile: () => dropLastWhile_default,
    dropRepeats: () => dropRepeats_default,
    dropRepeatsWith: () => dropRepeatsWith_default,
    dropWhile: () => dropWhile_default,
    either: () => either_default,
    empty: () => empty_default,
    endsWith: () => endsWith_default,
    eqBy: () => eqBy_default,
    eqProps: () => eqProps_default,
    equals: () => equals_default,
    evolve: () => evolve_default,
    filter: () => filter_default,
    find: () => find_default,
    findIndex: () => findIndex_default,
    findLast: () => findLast_default,
    findLastIndex: () => findLastIndex_default,
    flatten: () => flatten_default,
    flip: () => flip_default,
    forEach: () => forEach_default,
    forEachObjIndexed: () => forEachObjIndexed_default,
    fromPairs: () => fromPairs_default,
    groupBy: () => groupBy_default,
    groupWith: () => groupWith_default,
    gt: () => gt_default,
    gte: () => gte_default,
    has: () => has_default,
    hasIn: () => hasIn_default,
    hasPath: () => hasPath_default,
    head: () => head_default,
    identical: () => identical_default,
    identity: () => identity_default,
    ifElse: () => ifElse_default,
    inc: () => inc_default,
    includes: () => includes_default,
    indexBy: () => indexBy_default,
    indexOf: () => indexOf_default,
    init: () => init_default,
    innerJoin: () => innerJoin_default,
    insert: () => insert_default,
    insertAll: () => insertAll_default,
    intersection: () => intersection_default,
    intersperse: () => intersperse_default,
    into: () => into_default,
    invert: () => invert_default,
    invertObj: () => invertObj_default,
    invoker: () => invoker_default,
    is: () => is_default,
    isEmpty: () => isEmpty_default,
    isNil: () => isNil_default,
    join: () => join_default,
    juxt: () => juxt_default,
    keys: () => keys_default,
    keysIn: () => keysIn_default,
    last: () => last_default,
    lastIndexOf: () => lastIndexOf_default,
    length: () => length_default,
    lens: () => lens_default,
    lensIndex: () => lensIndex_default,
    lensPath: () => lensPath_default,
    lensProp: () => lensProp_default,
    lift: () => lift_default,
    liftN: () => liftN_default,
    lt: () => lt_default,
    lte: () => lte_default,
    map: () => map_default,
    mapAccum: () => mapAccum_default,
    mapAccumRight: () => mapAccumRight_default,
    mapObjIndexed: () => mapObjIndexed_default,
    match: () => match_default,
    mathMod: () => mathMod_default,
    max: () => max_default,
    maxBy: () => maxBy_default,
    mean: () => mean_default,
    median: () => median_default,
    memoizeWith: () => memoizeWith_default,
    mergeAll: () => mergeAll_default,
    mergeDeepLeft: () => mergeDeepLeft_default,
    mergeDeepRight: () => mergeDeepRight_default,
    mergeDeepWith: () => mergeDeepWith_default,
    mergeDeepWithKey: () => mergeDeepWithKey_default,
    mergeLeft: () => mergeLeft_default,
    mergeRight: () => mergeRight_default,
    mergeWith: () => mergeWith_default,
    mergeWithKey: () => mergeWithKey_default,
    min: () => min_default,
    minBy: () => minBy_default,
    modify: () => modify_default,
    modifyPath: () => modifyPath_default,
    modulo: () => modulo_default,
    move: () => move_default,
    multiply: () => multiply_default,
    nAry: () => nAry_default,
    negate: () => negate_default,
    none: () => none_default,
    not: () => not_default,
    nth: () => nth_default,
    nthArg: () => nthArg_default,
    o: () => o_default,
    objOf: () => objOf_default,
    of: () => of_default,
    omit: () => omit_default,
    on: () => on_default,
    once: () => once_default,
    or: () => or_default,
    otherwise: () => otherwise_default,
    over: () => over_default,
    pair: () => pair_default,
    partial: () => partial_default,
    partialObject: () => partialObject_default,
    partialRight: () => partialRight_default,
    partition: () => partition_default,
    path: () => path_default,
    pathEq: () => pathEq_default,
    pathOr: () => pathOr_default,
    pathSatisfies: () => pathSatisfies_default,
    paths: () => paths_default,
    pick: () => pick_default,
    pickAll: () => pickAll_default,
    pickBy: () => pickBy_default,
    pipe: () => pipe,
    pipeWith: () => pipeWith_default,
    pluck: () => pluck_default,
    prepend: () => prepend_default,
    product: () => product_default,
    project: () => project_default,
    promap: () => promap_default,
    prop: () => prop_default,
    propEq: () => propEq_default,
    propIs: () => propIs_default,
    propOr: () => propOr_default,
    propSatisfies: () => propSatisfies_default,
    props: () => props_default,
    range: () => range_default,
    reduce: () => reduce_default,
    reduceBy: () => reduceBy_default,
    reduceRight: () => reduceRight_default,
    reduceWhile: () => reduceWhile_default,
    reduced: () => reduced_default,
    reject: () => reject_default,
    remove: () => remove_default,
    repeat: () => repeat_default,
    replace: () => replace_default,
    reverse: () => reverse_default,
    scan: () => scan_default,
    sequence: () => sequence_default,
    set: () => set_default,
    slice: () => slice_default,
    sort: () => sort_default,
    sortBy: () => sortBy_default,
    sortWith: () => sortWith_default,
    split: () => split_default,
    splitAt: () => splitAt_default,
    splitEvery: () => splitEvery_default,
    splitWhen: () => splitWhen_default,
    splitWhenever: () => splitWhenever_default,
    startsWith: () => startsWith_default,
    subtract: () => subtract_default,
    sum: () => sum_default,
    symmetricDifference: () => symmetricDifference_default,
    symmetricDifferenceWith: () => symmetricDifferenceWith_default,
    tail: () => tail_default,
    take: () => take_default,
    takeLast: () => takeLast_default,
    takeLastWhile: () => takeLastWhile_default,
    takeWhile: () => takeWhile_default,
    tap: () => tap_default,
    test: () => test_default,
    thunkify: () => thunkify_default,
    times: () => times_default,
    toLower: () => toLower_default,
    toPairs: () => toPairs_default,
    toPairsIn: () => toPairsIn_default,
    toString: () => toString_default,
    toUpper: () => toUpper_default,
    transduce: () => transduce_default,
    transpose: () => transpose_default,
    traverse: () => traverse_default,
    trim: () => trim_default,
    tryCatch: () => tryCatch_default,
    type: () => type_default,
    unapply: () => unapply_default,
    unary: () => unary_default,
    uncurryN: () => uncurryN_default,
    unfold: () => unfold_default,
    union: () => union_default,
    unionWith: () => unionWith_default,
    uniq: () => uniq_default,
    uniqBy: () => uniqBy_default,
    uniqWith: () => uniqWith_default,
    unless: () => unless_default,
    unnest: () => unnest_default,
    until: () => until_default,
    unwind: () => unwind_default,
    update: () => update_default,
    useWith: () => useWith_default,
    values: () => values_default,
    valuesIn: () => valuesIn_default,
    view: () => view_default,
    when: () => when_default,
    where: () => where_default,
    whereAny: () => whereAny_default,
    whereEq: () => whereEq_default,
    without: () => without_default,
    xor: () => xor_default,
    xprod: () => xprod_default,
    zip: () => zip_default,
    zipObj: () => zipObj_default,
    zipWith: () => zipWith_default
  });
  var init_es = __esm({
    "node_modules/ramda/es/index.js"() {
      init_F();
      init_T();
      init__();
      init_add();
      init_addIndex();
      init_adjust();
      init_all();
      init_allPass();
      init_always();
      init_and();
      init_any();
      init_anyPass();
      init_ap();
      init_aperture2();
      init_append();
      init_apply();
      init_applySpec();
      init_applyTo();
      init_ascend();
      init_assoc2();
      init_assocPath();
      init_binary();
      init_bind();
      init_both();
      init_call();
      init_chain();
      init_clamp();
      init_clone2();
      init_collectBy();
      init_comparator();
      init_complement();
      init_compose();
      init_composeWith();
      init_concat2();
      init_cond();
      init_construct();
      init_constructN();
      init_converge();
      init_count();
      init_countBy();
      init_curry();
      init_curryN2();
      init_dec();
      init_defaultTo();
      init_descend();
      init_difference();
      init_differenceWith();
      init_dissoc2();
      init_dissocPath();
      init_divide();
      init_drop();
      init_dropLast2();
      init_dropLastWhile2();
      init_dropRepeats();
      init_dropRepeatsWith();
      init_dropWhile();
      init_either();
      init_empty();
      init_endsWith();
      init_eqBy();
      init_eqProps();
      init_equals2();
      init_evolve();
      init_filter2();
      init_find();
      init_findIndex();
      init_findLast();
      init_findLastIndex();
      init_flatten();
      init_flip();
      init_forEach();
      init_forEachObjIndexed();
      init_fromPairs();
      init_groupBy();
      init_groupWith();
      init_gt();
      init_gte();
      init_has2();
      init_hasIn();
      init_hasPath();
      init_head();
      init_identical();
      init_identity2();
      init_ifElse();
      init_inc();
      init_includes2();
      init_indexBy();
      init_indexOf2();
      init_init();
      init_innerJoin();
      init_insert();
      init_insertAll();
      init_intersection();
      init_intersperse();
      init_into();
      init_invert();
      init_invertObj();
      init_invoker();
      init_is();
      init_isEmpty();
      init_isNil();
      init_join();
      init_juxt();
      init_keys();
      init_keysIn();
      init_last();
      init_lastIndexOf();
      init_length();
      init_lens();
      init_lensIndex();
      init_lensPath();
      init_lensProp();
      init_lift();
      init_liftN();
      init_lt();
      init_lte();
      init_map2();
      init_mapAccum();
      init_mapAccumRight();
      init_mapObjIndexed();
      init_match();
      init_mathMod();
      init_max();
      init_maxBy();
      init_mean();
      init_median();
      init_memoizeWith();
      init_mergeAll();
      init_mergeDeepLeft();
      init_mergeDeepRight();
      init_mergeDeepWith();
      init_mergeDeepWithKey();
      init_mergeLeft();
      init_mergeRight();
      init_mergeWith();
      init_mergeWithKey();
      init_min();
      init_minBy();
      init_modify2();
      init_modifyPath();
      init_modulo();
      init_move();
      init_multiply();
      init_nAry();
      init_partialObject();
      init_negate();
      init_none();
      init_not();
      init_nth();
      init_nthArg();
      init_o();
      init_objOf();
      init_of2();
      init_omit();
      init_on();
      init_once();
      init_or();
      init_otherwise();
      init_over();
      init_pair();
      init_partial();
      init_partialRight();
      init_partition();
      init_path();
      init_paths();
      init_pathEq();
      init_pathOr();
      init_pathSatisfies();
      init_pick();
      init_pickAll();
      init_pickBy();
      init_pipe2();
      init_pipeWith();
      init_pluck();
      init_prepend();
      init_product();
      init_project();
      init_promap2();
      init_prop();
      init_propEq();
      init_propIs();
      init_propOr();
      init_propSatisfies();
      init_props();
      init_range();
      init_reduce2();
      init_reduceBy();
      init_reduceRight();
      init_reduceWhile();
      init_reduced2();
      init_reject();
      init_remove();
      init_repeat();
      init_replace();
      init_reverse();
      init_scan();
      init_sequence();
      init_set();
      init_slice();
      init_sort();
      init_sortBy();
      init_sortWith();
      init_split();
      init_splitAt();
      init_splitEvery();
      init_splitWhen();
      init_splitWhenever();
      init_startsWith();
      init_subtract();
      init_sum();
      init_symmetricDifference();
      init_symmetricDifferenceWith();
      init_tail();
      init_take();
      init_takeLast();
      init_takeLastWhile();
      init_takeWhile();
      init_tap();
      init_test();
      init_andThen();
      init_times();
      init_toLower();
      init_toPairs();
      init_toPairsIn();
      init_toString2();
      init_toUpper();
      init_transduce();
      init_transpose();
      init_traverse();
      init_trim();
      init_tryCatch();
      init_type();
      init_unapply();
      init_unary();
      init_uncurryN();
      init_unfold();
      init_union();
      init_unionWith();
      init_uniq();
      init_uniqBy();
      init_uniqWith();
      init_unless();
      init_unnest();
      init_until();
      init_unwind();
      init_update();
      init_useWith();
      init_values();
      init_valuesIn();
      init_view();
      init_when();
      init_where();
      init_whereAny();
      init_whereEq();
      init_without();
      init_xor();
      init_xprod();
      init_zip();
      init_zipObj();
      init_zipWith();
      init_thunkify();
    }
  });

  // src/lib/number.mod.ts
  function knuth_mod(dividend, divisor) {
    return dividend - divisor * Math.floor(dividend / divisor);
  }
  var init_number_mod = __esm({
    "src/lib/number.mod.ts"() {
      "use strict";
      Number.prototype.mod = function(n2) {
        return knuth_mod(this, n2);
      };
    }
  });

  // src/lib/itertools.ts
  var itertools_exports = {};
  __export(itertools_exports, {
    chain: () => chain3,
    dropwhile: () => dropwhile,
    enumerate: () => enumerate,
    filter: () => filter2,
    find: () => find3,
    head: () => head2,
    islice: () => islice,
    iterEq: () => iterEq,
    izip: () => izip,
    map: () => map3,
    permutationsWithReplacement: () => permutationsWithReplacement,
    range: () => range3,
    tail: () => tail2,
    takewhile: () => takewhile,
    unique: () => unique,
    uniqueBy: () => uniqueBy,
    zeros: () => zeros,
    zip: () => zip3
  });
  function head2(iterable) {
    const iterator = iterable[Symbol.iterator]();
    const result = iterator.next();
    if (result.done)
      throw RangeError("Empty iterator has no head/tail");
    else
      return result.value;
  }
  function tail2(iter) {
    if (Array.isArray(iter)) {
      if (iter.length < 1)
        throw RangeError("Empty iterator has no head/tail");
      return iter[iter.length - 1];
    } else {
      let last2 = head2(iter);
      for (last2 of iter)
        ;
      return last2;
    }
  }
  function* filter2(iter, predicate) {
    for (const v of iter) {
      if (predicate(v))
        yield v;
    }
  }
  function find3(iter, predicate) {
    return head2(filter2(iter, predicate));
  }
  function zip3(...arrays) {
    return [...Array(arrays[0].length)].map((_, i2) => arrays.map((a) => a[i2]));
  }
  function* range3(length3) {
    if (length3 < 0)
      return;
    for (let index2 = 0; index2 < length3; index2++) {
      yield index2;
    }
  }
  function* enumerate(iterable) {
    let index2 = 0;
    for (const element of iterable) {
      yield [index2, element];
      index2++;
    }
  }
  function* izip(...arrays) {
    const iterators = arrays.map((e2) => e2[Symbol.iterator]());
    const box = Array(arrays.length);
    for (let v of iterators[0]) {
      box[0] = v;
      let i2;
      try {
        for ([i2, v] of enumerate(iterators.slice(1))) {
          box[i2 + 1] = head2(v);
        }
        yield [...box];
      } catch (e2) {
        return;
      }
    }
  }
  function iterEq(...arrays) {
    for (const a of zip3(...arrays)) {
      if (!a.reduce((x, y) => x === y))
        return false;
    }
    return true;
  }
  function zeros(n2) {
    return new Array(n2).fill(0);
  }
  function* islice(iterable, start, stop) {
    const iter = iterable[Symbol.iterator]();
    if (stop === void 0) {
      stop = start;
      start = 0;
    }
    for (const _ of range3(start)) {
      const res = iter.next();
      if (res.done)
        return;
    }
    if (stop === null) {
      yield* iter;
    } else {
      for (let i2 = start; i2 < stop; i2++) {
        const res = iter.next();
        if (res.done)
          return;
        else
          yield res.value;
      }
    }
  }
  function* chain3(...iterables) {
    for (const iter of iterables) {
      yield* iter[Symbol.iterator]();
    }
  }
  function* permutationsWithReplacement(arr, n2) {
    const len = arr.length;
    const counters = zeros(n2);
    let index2 = 1;
    for (const _ of range3(Math.pow(len, n2))) {
      yield counters.map((i2) => arr[i2]);
      for (const i2 of range3(counters.length)) {
        if (index2.mod(Math.pow(len, counters.length - 1 - i2)) === 0)
          counters[i2] = (counters[i2] + 1).mod(len);
      }
      index2++;
    }
  }
  function* map3(arr, func) {
    for (const v of arr)
      yield func(v);
  }
  function unique(arr) {
    return arr.reduce((acc, cur) => {
      if (!acc.includes(cur))
        acc.push(cur);
      return acc;
    }, []);
  }
  function* uniqueBy(arr, hasher) {
    const hashes = /* @__PURE__ */ new Set();
    for (const e2 of arr) {
      const hash = hasher(e2);
      if (!hashes.has(hash)) {
        yield e2;
        hashes.add(hash);
      }
    }
  }
  function* dropwhile(iterable, predicate) {
    let allmatched = true;
    for (const elem of iterable) {
      if (!(allmatched && predicate(elem))) {
        allmatched = false;
        yield elem;
      }
    }
  }
  function* takewhile(iterable, predicate) {
    for (const elem of iterable) {
      if (predicate(elem)) {
        yield elem;
      } else {
        return;
      }
    }
  }
  var init_itertools = __esm({
    "src/lib/itertools.ts"() {
      "use strict";
      init_number_mod();
    }
  });

  // node_modules/nearley/lib/nearley.js
  var require_nearley = __commonJS({
    "node_modules/nearley/lib/nearley.js"(exports, module) {
      (function(root, factory) {
        if (typeof module === "object" && module.exports) {
          module.exports = factory();
        } else {
          root.nearley = factory();
        }
      })(exports, function() {
        function Rule(name, symbols, postprocess) {
          this.id = ++Rule.highestId;
          this.name = name;
          this.symbols = symbols;
          this.postprocess = postprocess;
          return this;
        }
        Rule.highestId = 0;
        Rule.prototype.toString = function(withCursorAt) {
          var symbolSequence = typeof withCursorAt === "undefined" ? this.symbols.map(getSymbolShortDisplay).join(" ") : this.symbols.slice(0, withCursorAt).map(getSymbolShortDisplay).join(" ") + " \u25CF " + this.symbols.slice(withCursorAt).map(getSymbolShortDisplay).join(" ");
          return this.name + " \u2192 " + symbolSequence;
        };
        function State2(rule, dot, reference, wantedBy) {
          this.rule = rule;
          this.dot = dot;
          this.reference = reference;
          this.data = [];
          this.wantedBy = wantedBy;
          this.isComplete = this.dot === rule.symbols.length;
        }
        State2.prototype.toString = function() {
          return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
        };
        State2.prototype.nextState = function(child) {
          var state2 = new State2(this.rule, this.dot + 1, this.reference, this.wantedBy);
          state2.left = this;
          state2.right = child;
          if (state2.isComplete) {
            state2.data = state2.build();
            state2.right = void 0;
          }
          return state2;
        };
        State2.prototype.build = function() {
          var children = [];
          var node = this;
          do {
            children.push(node.right.data);
            node = node.left;
          } while (node.left);
          children.reverse();
          return children;
        };
        State2.prototype.finish = function() {
          if (this.rule.postprocess) {
            this.data = this.rule.postprocess(this.data, this.reference, Parser3.fail);
          }
        };
        function Column(grammar2, index2) {
          this.grammar = grammar2;
          this.index = index2;
          this.states = [];
          this.wants = {};
          this.scannable = [];
          this.completed = {};
        }
        Column.prototype.process = function(nextColumn) {
          var states = this.states;
          var wants = this.wants;
          var completed = this.completed;
          for (var w = 0; w < states.length; w++) {
            var state2 = states[w];
            if (state2.isComplete) {
              state2.finish();
              if (state2.data !== Parser3.fail) {
                var wantedBy = state2.wantedBy;
                for (var i2 = wantedBy.length; i2--; ) {
                  var left = wantedBy[i2];
                  this.complete(left, state2);
                }
                if (state2.reference === this.index) {
                  var exp = state2.rule.name;
                  (this.completed[exp] = this.completed[exp] || []).push(state2);
                }
              }
            } else {
              var exp = state2.rule.symbols[state2.dot];
              if (typeof exp !== "string") {
                this.scannable.push(state2);
                continue;
              }
              if (wants[exp]) {
                wants[exp].push(state2);
                if (completed.hasOwnProperty(exp)) {
                  var nulls = completed[exp];
                  for (var i2 = 0; i2 < nulls.length; i2++) {
                    var right = nulls[i2];
                    this.complete(state2, right);
                  }
                }
              } else {
                wants[exp] = [state2];
                this.predict(exp);
              }
            }
          }
        };
        Column.prototype.predict = function(exp) {
          var rules = this.grammar.byName[exp] || [];
          for (var i2 = 0; i2 < rules.length; i2++) {
            var r = rules[i2];
            var wantedBy = this.wants[exp];
            var s = new State2(r, 0, this.index, wantedBy);
            this.states.push(s);
          }
        };
        Column.prototype.complete = function(left, right) {
          var copy = left.nextState(right);
          this.states.push(copy);
        };
        function Grammar2(rules, start) {
          this.rules = rules;
          this.start = start || this.rules[0].name;
          var byName = this.byName = {};
          this.rules.forEach(function(rule) {
            if (!byName.hasOwnProperty(rule.name)) {
              byName[rule.name] = [];
            }
            byName[rule.name].push(rule);
          });
        }
        Grammar2.fromCompiled = function(rules, start) {
          var lexer = rules.Lexer;
          if (rules.ParserStart) {
            start = rules.ParserStart;
            rules = rules.ParserRules;
          }
          var rules = rules.map(function(r) {
            return new Rule(r.name, r.symbols, r.postprocess);
          });
          var g = new Grammar2(rules, start);
          g.lexer = lexer;
          return g;
        };
        function StreamLexer() {
          this.reset("");
        }
        StreamLexer.prototype.reset = function(data, state2) {
          this.buffer = data;
          this.index = 0;
          this.line = state2 ? state2.line : 1;
          this.lastLineBreak = state2 ? -state2.col : 0;
        };
        StreamLexer.prototype.next = function() {
          if (this.index < this.buffer.length) {
            var ch = this.buffer[this.index++];
            if (ch === "\n") {
              this.line += 1;
              this.lastLineBreak = this.index;
            }
            return { value: ch };
          }
        };
        StreamLexer.prototype.save = function() {
          return {
            line: this.line,
            col: this.index - this.lastLineBreak
          };
        };
        StreamLexer.prototype.formatError = function(token, message2) {
          var buffer = this.buffer;
          if (typeof buffer === "string") {
            var lines = buffer.split("\n").slice(
              Math.max(0, this.line - 5),
              this.line
            );
            var nextLineBreak = buffer.indexOf("\n", this.index);
            if (nextLineBreak === -1)
              nextLineBreak = buffer.length;
            var col = this.index - this.lastLineBreak;
            var lastLineDigits = String(this.line).length;
            message2 += " at line " + this.line + " col " + col + ":\n\n";
            message2 += lines.map(function(line, i2) {
              return pad3(this.line - lines.length + i2 + 1, lastLineDigits) + " " + line;
            }, this).join("\n");
            message2 += "\n" + pad3("", lastLineDigits + col) + "^\n";
            return message2;
          } else {
            return message2 + " at index " + (this.index - 1);
          }
          function pad3(n2, length3) {
            var s = String(n2);
            return Array(length3 - s.length + 1).join(" ") + s;
          }
        };
        function Parser3(rules, start, options) {
          if (rules instanceof Grammar2) {
            var grammar2 = rules;
            var options = start;
          } else {
            var grammar2 = Grammar2.fromCompiled(rules, start);
          }
          this.grammar = grammar2;
          this.options = {
            keepHistory: false,
            lexer: grammar2.lexer || new StreamLexer()
          };
          for (var key in options || {}) {
            this.options[key] = options[key];
          }
          this.lexer = this.options.lexer;
          this.lexerState = void 0;
          var column = new Column(grammar2, 0);
          var table = this.table = [column];
          column.wants[grammar2.start] = [];
          column.predict(grammar2.start);
          column.process();
          this.current = 0;
        }
        Parser3.fail = {};
        Parser3.prototype.feed = function(chunk) {
          var lexer = this.lexer;
          lexer.reset(chunk, this.lexerState);
          var token;
          while (true) {
            try {
              token = lexer.next();
              if (!token) {
                break;
              }
            } catch (e2) {
              var nextColumn = new Column(this.grammar, this.current + 1);
              this.table.push(nextColumn);
              var err = new Error(this.reportLexerError(e2));
              err.offset = this.current;
              err.token = e2.token;
              throw err;
            }
            var column = this.table[this.current];
            if (!this.options.keepHistory) {
              delete this.table[this.current - 1];
            }
            var n2 = this.current + 1;
            var nextColumn = new Column(this.grammar, n2);
            this.table.push(nextColumn);
            var literal = token.text !== void 0 ? token.text : token.value;
            var value = lexer.constructor === StreamLexer ? token.value : token;
            var scannable = column.scannable;
            for (var w = scannable.length; w--; ) {
              var state2 = scannable[w];
              var expect = state2.rule.symbols[state2.dot];
              if (expect.test ? expect.test(value) : expect.type ? expect.type === token.type : expect.literal === literal) {
                var next = state2.nextState({ data: value, token, isToken: true, reference: n2 - 1 });
                nextColumn.states.push(next);
              }
            }
            nextColumn.process();
            if (nextColumn.states.length === 0) {
              var err = new Error(this.reportError(token));
              err.offset = this.current;
              err.token = token;
              throw err;
            }
            if (this.options.keepHistory) {
              column.lexerState = lexer.save();
            }
            this.current++;
          }
          if (column) {
            this.lexerState = lexer.save();
          }
          this.results = this.finish();
          return this;
        };
        Parser3.prototype.reportLexerError = function(lexerError) {
          var tokenDisplay, lexerMessage;
          var token = lexerError.token;
          if (token) {
            tokenDisplay = "input " + JSON.stringify(token.text[0]) + " (lexer error)";
            lexerMessage = this.lexer.formatError(token, "Syntax error");
          } else {
            tokenDisplay = "input (lexer error)";
            lexerMessage = lexerError.message;
          }
          return this.reportErrorCommon(lexerMessage, tokenDisplay);
        };
        Parser3.prototype.reportError = function(token) {
          var tokenDisplay = (token.type ? token.type + " token: " : "") + JSON.stringify(token.value !== void 0 ? token.value : token);
          var lexerMessage = this.lexer.formatError(token, "Syntax error");
          return this.reportErrorCommon(lexerMessage, tokenDisplay);
        };
        Parser3.prototype.reportErrorCommon = function(lexerMessage, tokenDisplay) {
          var lines = [];
          lines.push(lexerMessage);
          var lastColumnIndex = this.table.length - 2;
          var lastColumn = this.table[lastColumnIndex];
          var expectantStates = lastColumn.states.filter(function(state2) {
            var nextSymbol = state2.rule.symbols[state2.dot];
            return nextSymbol && typeof nextSymbol !== "string";
          });
          if (expectantStates.length === 0) {
            lines.push("Unexpected " + tokenDisplay + ". I did not expect any more input. Here is the state of my parse table:\n");
            this.displayStateStack(lastColumn.states, lines);
          } else {
            lines.push("Unexpected " + tokenDisplay + ". Instead, I was expecting to see one of the following:\n");
            var stateStacks = expectantStates.map(function(state2) {
              return this.buildFirstStateStack(state2, []) || [state2];
            }, this);
            stateStacks.forEach(function(stateStack) {
              var state2 = stateStack[0];
              var nextSymbol = state2.rule.symbols[state2.dot];
              var symbolDisplay = this.getSymbolDisplay(nextSymbol);
              lines.push("A " + symbolDisplay + " based on:");
              this.displayStateStack(stateStack, lines);
            }, this);
          }
          lines.push("");
          return lines.join("\n");
        };
        Parser3.prototype.displayStateStack = function(stateStack, lines) {
          var lastDisplay;
          var sameDisplayCount = 0;
          for (var j = 0; j < stateStack.length; j++) {
            var state2 = stateStack[j];
            var display = state2.rule.toString(state2.dot);
            if (display === lastDisplay) {
              sameDisplayCount++;
            } else {
              if (sameDisplayCount > 0) {
                lines.push("    ^ " + sameDisplayCount + " more lines identical to this");
              }
              sameDisplayCount = 0;
              lines.push("    " + display);
            }
            lastDisplay = display;
          }
        };
        Parser3.prototype.getSymbolDisplay = function(symbol) {
          return getSymbolLongDisplay(symbol);
        };
        Parser3.prototype.buildFirstStateStack = function(state2, visited) {
          if (visited.indexOf(state2) !== -1) {
            return null;
          }
          if (state2.wantedBy.length === 0) {
            return [state2];
          }
          var prevState = state2.wantedBy[0];
          var childVisited = [state2].concat(visited);
          var childResult = this.buildFirstStateStack(prevState, childVisited);
          if (childResult === null) {
            return null;
          }
          return [state2].concat(childResult);
        };
        Parser3.prototype.save = function() {
          var column = this.table[this.current];
          column.lexerState = this.lexerState;
          return column;
        };
        Parser3.prototype.restore = function(column) {
          var index2 = column.index;
          this.current = index2;
          this.table[index2] = column;
          this.table.splice(index2 + 1);
          this.lexerState = column.lexerState;
          this.results = this.finish();
        };
        Parser3.prototype.rewind = function(index2) {
          if (!this.options.keepHistory) {
            throw new Error("set option `keepHistory` to enable rewinding");
          }
          this.restore(this.table[index2]);
        };
        Parser3.prototype.finish = function() {
          var considerations = [];
          var start = this.grammar.start;
          var column = this.table[this.table.length - 1];
          column.states.forEach(function(t2) {
            if (t2.rule.name === start && t2.dot === t2.rule.symbols.length && t2.reference === 0 && t2.data !== Parser3.fail) {
              considerations.push(t2);
            }
          });
          return considerations.map(function(c) {
            return c.data;
          });
        };
        function getSymbolLongDisplay(symbol) {
          var type3 = typeof symbol;
          if (type3 === "string") {
            return symbol;
          } else if (type3 === "object") {
            if (symbol.literal) {
              return JSON.stringify(symbol.literal);
            } else if (symbol instanceof RegExp) {
              return "character matching " + symbol;
            } else if (symbol.type) {
              return symbol.type + " token";
            } else if (symbol.test) {
              return "token matching " + String(symbol.test);
            } else {
              throw new Error("Unknown symbol type: " + symbol);
            }
          }
        }
        function getSymbolShortDisplay(symbol) {
          var type3 = typeof symbol;
          if (type3 === "string") {
            return symbol;
          } else if (type3 === "object") {
            if (symbol.literal) {
              return JSON.stringify(symbol.literal);
            } else if (symbol instanceof RegExp) {
              return symbol.toString();
            } else if (symbol.type) {
              return "%" + symbol.type;
            } else if (symbol.test) {
              return "<" + String(symbol.test) + ">";
            } else {
              throw new Error("Unknown symbol type: " + symbol);
            }
          }
        }
        return {
          Parser: Parser3,
          Grammar: Grammar2,
          Rule
        };
      });
    }
  });

  // src/lib/nearley_utils.ts
  var nearley, Parser2;
  var init_nearley_utils = __esm({
    "src/lib/nearley_utils.ts"() {
      "use strict";
      nearley = __toESM(require_nearley());
      Parser2 = class {
        /* public results */
        constructor(grammar2) {
          this.parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar2));
          this.initial_state = this.parser.save();
        }
        feedUntilError(input) {
          let lastResult;
          let consumedIndex = 0;
          try {
            for (const val of input) {
              this.parser.feed(val);
              lastResult = this.parser.results[0];
              consumedIndex++;
            }
          } finally {
            this.reset();
            if (lastResult === void 0) {
              throw new Error("Error: no result!");
            } else {
              return [lastResult, input.slice(consumedIndex)];
            }
          }
        }
        reset() {
          this.parser.restore(this.initial_state);
        }
        /* feed(input) { */
        /*     return this.parser.feed(input) */
        /* } */
      };
    }
  });

  // src/grammars/.bracketexpr.generated.ts
  function id(d) {
    return d[0];
  }
  var grammar, bracketexpr_generated_default;
  var init_bracketexpr_generated = __esm({
    "src/grammars/.bracketexpr.generated.ts"() {
      "use strict";
      grammar = {
        Lexer: void 0,
        ParserRules: [
          { "name": "BracketExpr", "symbols": [{ "literal": "<" }, "Modifier", "ModKey", { "literal": ">" }], "postprocess": (bexpr) => bexpr.slice(1, -1) },
          { "name": "BracketExpr", "symbols": [{ "literal": "<" }, "Key", { "literal": ">" }], "postprocess": (bexpr) => [{}].concat(bexpr.slice(1, -1)) },
          { "name": "Modifier$ebnf$1", "symbols": [/[acmsACMS]/], "postprocess": id },
          { "name": "Modifier$ebnf$1", "symbols": [], "postprocess": () => null },
          { "name": "Modifier$ebnf$2", "symbols": [/[acmsACMS]/], "postprocess": id },
          { "name": "Modifier$ebnf$2", "symbols": [], "postprocess": () => null },
          { "name": "Modifier$ebnf$3", "symbols": [/[acmsACMS]/], "postprocess": id },
          { "name": "Modifier$ebnf$3", "symbols": [], "postprocess": () => null },
          { "name": "Modifier$ebnf$4", "symbols": [/[acmsACMS]/], "postprocess": id },
          { "name": "Modifier$ebnf$4", "symbols": [], "postprocess": () => null },
          {
            "name": "Modifier",
            "symbols": ["Modifier$ebnf$1", "Modifier$ebnf$2", "Modifier$ebnf$3", "Modifier$ebnf$4", { "literal": "-" }],
            "postprocess": (
              /** For each modifier present,
                  add its long name as an attribute set to true to an object */
              (mods, _, reject4) => {
                const longNames = /* @__PURE__ */ new Map([
                  ["A", "altKey"],
                  ["C", "ctrlKey"],
                  ["M", "metaKey"],
                  ["S", "shiftKey"]
                ]);
                let modifiersObj = {};
                for (let mod of mods) {
                  if (mod === null || mod === "-")
                    continue;
                  let longName = longNames.get(mod.toUpperCase());
                  if (longName) {
                    if (longName in modifiersObj)
                      return reject4;
                    else
                      modifiersObj[longName] = true;
                  }
                }
                return modifiersObj;
              }
            )
          },
          { "name": "ModKey", "symbols": [{ "literal": "<" }], "postprocess": id },
          { "name": "ModKey", "symbols": [{ "literal": ">" }], "postprocess": id },
          { "name": "ModKey", "symbols": [{ "literal": "-" }], "postprocess": id },
          { "name": "ModKey", "symbols": ["Key"], "postprocess": id },
          { "name": "Key$ebnf$1", "symbols": [/[^\s<>-]/] },
          { "name": "Key$ebnf$1", "symbols": ["Key$ebnf$1", /[^\s<>-]/], "postprocess": (d) => d[0].concat([d[1]]) },
          { "name": "Key", "symbols": ["Key$ebnf$1"], "postprocess": (key) => key[0].join("") }
        ],
        ParserStart: "BracketExpr"
      };
      bracketexpr_generated_default = grammar;
    }
  });

  // src/lib/keyseq.ts
  var keyseq_exports = {};
  __export(keyseq_exports, {
    MinimalKey: () => MinimalKey,
    bracketexprToKey: () => bracketexprToKey,
    canonicaliseMapstr: () => canonicaliseMapstr,
    commandKey2jsKey: () => commandKey2jsKey,
    completions: () => completions,
    hasModifiers: () => hasModifiers,
    hasNonShiftModifiers: () => hasNonShiftModifiers,
    keyMap: () => keyMap,
    mapstrMapToKeyMap: () => mapstrMapToKeyMap,
    mapstrToKeyseq: () => mapstrToKeyseq,
    minimalKeyFromKeyboardEvent: () => minimalKeyFromKeyboardEvent,
    minimalKeyToMozMap: () => minimalKeyToMozMap,
    mozMapToMinimalKey: () => mozMapToMinimalKey,
    parse: () => parse,
    stripOnlyModifiers: () => stripOnlyModifiers
  });
  function splitNumericPrefix(keyseq) {
    if (!hasModifiers(keyseq[0]) && [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(keyseq[0].key))) {
      const prefix = [keyseq[0]];
      for (const ke of keyseq.slice(1)) {
        if (!hasModifiers(ke) && [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(ke.key)))
          prefix.push(ke);
        else
          break;
      }
      const rest2 = keyseq.slice(prefix.length);
      return [prefix, rest2];
    } else {
      return [[], keyseq];
    }
  }
  function stripOnlyModifiers(keyseq) {
    return keyseq.filter(
      (key) => !["Control", "Shift", "Alt", "AltGraph", "Meta"].includes(key.key)
    );
  }
  function parse(keyseq, map4) {
    keyseq = stripOnlyModifiers(keyseq);
    if (keyseq.length === 0)
      return { keys: [], isMatch: false };
    let numericPrefix;
    [numericPrefix, keyseq] = splitNumericPrefix(keyseq);
    let possibleMappings = completions(keyseq, map4);
    while (possibleMappings.size === 0 && keyseq.length > 0) {
      keyseq.shift();
      numericPrefix = [];
      possibleMappings = completions(keyseq, map4);
    }
    if (possibleMappings.size > 0) {
      try {
        const perfect = find3(
          possibleMappings,
          ([k, _v]) => k.length === keyseq.length
        );
        return {
          value: perfect[1],
          exstr: perfect[1] + numericPrefixToExstrSuffix(numericPrefix),
          isMatch: true,
          numericPrefix: numericPrefix.length ? Number(numericPrefix.map((ke) => ke.key).join("")) : void 0,
          keys: []
        };
      } catch (e2) {
        if (!(e2 instanceof RangeError))
          throw e2;
      }
    }
    return { keys: numericPrefix.concat(keyseq), isMatch: keyseq.length > 0 };
  }
  function prefixes(seq1, seq2) {
    if (seq1.length > seq2.length) {
      return false;
    } else {
      for (const [key1, key2] of izip(seq1, seq2)) {
        if (!key2.match(key1))
          return false;
      }
      return true;
    }
  }
  function completions(keyseq, map4) {
    return new Map(
      filter2(map4.entries(), ([ks, _maptarget]) => prefixes(keyseq, ks))
    );
  }
  function expandAliases(key) {
    const aliases = {
      cr: "Enter",
      esc: "Escape",
      return: "Enter",
      enter: "Enter",
      space: " ",
      bar: "|",
      del: "Delete",
      bs: "Backspace",
      lt: "<"
    };
    if (key.toLowerCase() in aliases)
      return aliases[key.toLowerCase()];
    else
      return key;
  }
  function bracketexprToKey(inputStr) {
    if (inputStr.indexOf(">") > 0) {
      try {
        const [[modifiers2, key], remainder] = bracketexpr_parser.feedUntilError(inputStr);
        return [new MinimalKey(expandAliases(key), modifiers2), remainder];
      } catch (e2) {
        return [new MinimalKey("<"), inputStr.slice(1)];
      }
    } else {
      return [new MinimalKey("<"), inputStr.slice(1)];
    }
  }
  function mapstrToKeyseq(mapstr) {
    const keyseq = [];
    let key;
    while (mapstr.length) {
      if (mapstr[0] === "<") {
        ;
        [key, mapstr] = bracketexprToKey(mapstr);
        keyseq.push(key);
      } else {
        keyseq.push(new MinimalKey(mapstr[0]));
        mapstr = mapstr.slice(1);
      }
    }
    return keyseq;
  }
  function canonicaliseMapstr(mapstr) {
    return mapstrToKeyseq(mapstr).map((k) => k.toMapstr()).join("");
  }
  function mozMapToMinimalKey(mozmap) {
    const arr = mozmap.split("+");
    const modifiers2 = {
      altKey: arr.includes("Alt"),
      ctrlKey: arr.includes("MacCtrl"),
      // MacCtrl gives us _actual_ ctrl on all platforms rather than splat on Mac and Ctrl everywhere else
      shiftKey: arr.includes("Shift"),
      metaKey: arr.includes("Command")
    };
    let key = arr[arr.length - 1];
    key = propOr_default(key.toLowerCase(), key, commandKey2jsKey);
    return new MinimalKey(key, modifiers2);
  }
  function minimalKeyToMozMap(key) {
    const mozMap = [];
    key.altKey && mozMap.push("Alt");
    key.ctrlKey && mozMap.push("MacCtrl");
    key.shiftKey && mozMap.push("Shift");
    key.metaKey && mozMap.push("Command");
    const jsKey2commandKey = Object.fromEntries(
      Object.entries(commandKey2jsKey).map(([key2, value]) => [value, key2])
    );
    mozMap.push(propOr_default(key.key.toUpperCase(), key.key, jsKey2commandKey));
    return mozMap.join("+");
  }
  function mapstrMapToKeyMap(mapstrMap) {
    const newKeyMap = /* @__PURE__ */ new Map();
    for (const [mapstr, target] of mapstrMap.entries()) {
      newKeyMap.set(mapstrToKeyseq(mapstr), target);
    }
    return newKeyMap;
  }
  function keyMap(conf) {
    if (KEYMAP_CACHE[conf])
      return KEYMAP_CACHE[conf];
    if (!INITIALISED)
      return /* @__PURE__ */ new Map();
    const mapobj = get(conf);
    if (mapobj === void 0)
      throw new Error(
        "No binds defined for this mode. Reload page with <C-r> and add binds, e.g. :bind --mode=[mode] <Esc> mode normal"
      );
    const maps = new Map(Object.entries(mapobj));
    KEYMAP_CACHE[conf] = mapstrMapToKeyMap(maps);
    return KEYMAP_CACHE[conf];
  }
  function hasModifiers(keyEvent) {
    return keyEvent.ctrlKey || keyEvent.altKey || keyEvent.metaKey || keyEvent.shiftKey;
  }
  function hasNonShiftModifiers(keyEvent) {
    return keyEvent.ctrlKey || keyEvent.altKey || keyEvent.metaKey;
  }
  function numericPrefixToExstrSuffix(numericPrefix) {
    if (numericPrefix.length > 0) {
      return " " + numericPrefix.map((k) => k.key).join("");
    } else {
      return "";
    }
  }
  function minimalKeyFromKeyboardEvent(keyEvent) {
    const modifiers2 = {
      altKey: keyEvent.altKey,
      ctrlKey: keyEvent.ctrlKey,
      metaKey: keyEvent.metaKey,
      shiftKey: keyEvent.shiftKey
    };
    if (get("keyboardlayoutforce") === "true") {
      Object.keys(KEYCODETRANSLATEMAP).length === 0 && updateBaseLayout();
      let newkey = keyEvent.key;
      const translation = KEYCODETRANSLATEMAP[keyEvent.code];
      if (translation)
        newkey = translation[+keyEvent.shiftKey];
      return new MinimalKey(newkey, modifiers2);
    }
    const result = new MinimalKey(keyEvent.key, modifiers2);
    if (get("usekeytranslatemap") === "true") {
      const translationmap = get("keytranslatemap");
      return result.translate(translationmap);
    }
    return result;
  }
  function updateBaseLayout() {
    KEYCODETRANSLATEMAP = mergeRight_default(
      keyboardlayouts[get("keyboardlayoutbase")],
      get("keyboardlayoutoverrides")
    );
  }
  var bracketexpr_grammar, bracketexpr_parser, KEYCODETRANSLATEMAP, modifiers, MinimalKey, commandKey2jsKey, KEYMAP_CACHE;
  var init_keyseq = __esm({
    "src/lib/keyseq.ts"() {
      "use strict";
      init_itertools();
      init_nearley_utils();
      init_config();
      init_es();
      init_bracketexpr_generated();
      bracketexpr_grammar = bracketexpr_generated_default;
      bracketexpr_parser = new Parser2(bracketexpr_grammar);
      KEYCODETRANSLATEMAP = {};
      modifiers = /* @__PURE__ */ new Map([
        ["A", "altKey"],
        ["C", "ctrlKey"],
        ["M", "metaKey"],
        ["S", "shiftKey"]
      ]);
      MinimalKey = class {
        constructor(key, modifiers2) {
          this.key = key;
          this.altKey = false;
          this.ctrlKey = false;
          this.metaKey = false;
          this.shiftKey = false;
          this.translated = false;
          if (modifiers2 !== void 0) {
            for (const mod of Object.keys(modifiers2)) {
              if (this.key.length === 1 && this.key !== " " && mod === "shiftKey")
                continue;
              this[mod] = modifiers2[mod];
            }
          }
        }
        /** Does this key match another MinimalKey */
        match(keyevent) {
          if (this.key !== keyevent.key)
            return false;
          for (const [_, attr] of modifiers.entries()) {
            if (this[attr] !== keyevent[attr])
              return false;
          }
          return true;
        }
        translate(keytranslatemap) {
          let newkey = keytranslatemap[this.key];
          if (newkey === void 0 || this.translated)
            newkey = this.key;
          const result = new MinimalKey(newkey, {
            altKey: this.altKey,
            ctrlKey: this.ctrlKey,
            metaKey: this.metaKey,
            shiftKey: this.shiftKey
          });
          result.translated = true;
          return result;
        }
        toMapstr() {
          let str2 = "";
          let needsBrackets = this.key.length > 1;
          for (const [letter, attr] of modifiers.entries()) {
            if (this[attr]) {
              str2 += letter;
              needsBrackets = true;
            }
          }
          if (str2) {
            str2 += "-";
          }
          let key = this.key;
          if (key === " ") {
            key = "Space";
            needsBrackets = true;
          }
          str2 += key;
          if (needsBrackets) {
            str2 = "<" + str2 + ">";
          }
          return str2;
        }
        isPrintable() {
          return this.key.length === 1;
        }
      };
      commandKey2jsKey = {
        Comma: ",",
        Period: ".",
        Up: "ArrowUp",
        Down: "ArrowDown",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Space: " "
      };
      KEYMAP_CACHE = {};
      browser.storage.onChanged.addListener((changes) => {
        if ("userconfig" in changes) {
          KEYMAP_CACHE = {};
        }
      });
    }
  });

  // src/lib/binding.ts
  var mode2maps, maps2mode, modes, modeMaps;
  var init_binding = __esm({
    "src/lib/binding.ts"() {
      "use strict";
      init_keyseq();
      mode2maps = /* @__PURE__ */ new Map([
        ["normal", "nmaps"],
        ["ignore", "ignoremaps"],
        ["insert", "imaps"],
        ["input", "inputmaps"],
        ["ex", "exmaps"],
        ["hint", "hintmaps"],
        ["visual", "vmaps"],
        ["browser", "browsermaps"]
      ]);
      maps2mode = new Map(
        Array.from(mode2maps.keys()).map((k) => [mode2maps.get(k), k])
      );
      modes = Array.from(mode2maps.keys());
      modeMaps = Array.from(maps2mode.keys());
    }
  });

  // src/lib/platform.ts
  function getPlatformOs() {
    const platform = navigator.platform;
    const mapping = {
      win: "Win",
      openbsd: "BSD",
      mac: "Mac",
      linux: "Linux"
    };
    return keys_default(
      filter_default((x) => platform.includes(x), mapping)
    )[0];
  }
  var init_platform = __esm({
    "src/lib/platform.ts"() {
      "use strict";
      init_es();
    }
  });

  // src/lib/config.ts
  var config_exports = {};
  __export(config_exports, {
    DEFAULTS: () => DEFAULTS,
    INITIALISED: () => INITIALISED,
    USERCONFIG: () => USERCONFIG,
    addChangeListener: () => addChangeListener,
    default_config: () => default_config,
    get: () => get,
    getAsync: () => getAsync,
    getAsyncDynamic: () => getAsyncDynamic,
    getDeepProperty: () => getDeepProperty,
    getDynamic: () => getDynamic,
    getURL: () => getURL,
    keyboardlayouts: () => keyboardlayouts,
    mergeDeep: () => mergeDeep,
    mergeDeepCull: () => mergeDeepCull,
    o: () => o3,
    parseConfig: () => parseConfig,
    pull: () => pull,
    push: () => push,
    removeChangeListener: () => removeChangeListener,
    save: () => save,
    set: () => set3,
    setURL: () => setURL,
    unset: () => unset,
    unsetURL: () => unsetURL,
    update: () => update3
  });
  function o3(object) {
    return Object.assign(/* @__PURE__ */ Object.create(null), object);
  }
  function schlepp(settings) {
    Object.assign(USERCONFIG, settings);
  }
  function getDeepProperty(obj, target) {
    if (obj !== void 0 && obj !== null && target.length) {
      if (obj["\u{1F577}\u{1F577}INHERITS\u{1F577}\u{1F577}"] === void 0) {
        return getDeepProperty(obj[target[0]], target.slice(1));
      } else {
        return getDeepProperty(
          mergeDeepCull(get(obj["\u{1F577}\u{1F577}INHERITS\u{1F577}\u{1F577}"]), obj)[target[0]],
          target.slice(1)
        );
      }
    } else {
      if (obj === void 0 || obj === null)
        return obj;
      if (obj["\u{1F577}\u{1F577}INHERITS\u{1F577}\u{1F577}"] !== void 0) {
        return mergeDeepCull(get(obj["\u{1F577}\u{1F577}INHERITS\u{1F577}\u{1F577}"]), obj);
      } else {
        return obj;
      }
    }
  }
  function setDeepProperty(obj, value, target) {
    if (target.length > 1) {
      if (obj[target[0]] === void 0) {
        obj[target[0]] = o3({});
      }
      return setDeepProperty(obj[target[0]], value, target.slice(1));
    } else {
      obj[target[0]] = value;
    }
  }
  function mergeDeep(o1, o22) {
    if (o1 === null)
      return Object.assign({}, o22);
    const r = Array.isArray(o1) ? o1.slice() : Object.create(o1);
    Object.assign(r, o1, o22);
    if (o22 === void 0)
      return r;
    Object.keys(o1).filter(
      (key) => typeof o1[key] === "object" && typeof o22[key] === "object"
    ).forEach(
      (key) => r[key] == null ? null : Object.assign(r[key], mergeDeep(o1[key], o22[key]))
    );
    return r;
  }
  function getURL(url, target) {
    function _getURL(conf, url2, target2) {
      if (!conf.subconfigs)
        return void 0;
      return Object.keys(conf.subconfigs).filter(
        (k) => url2.match(k) && getDeepProperty(conf.subconfigs[k], target2) !== void 0
      ).sort(
        (k1, k2) => (conf.subconfigs[k1].priority || 10) - (conf.subconfigs[k2].priority || 10)
      ).reduce((acc, curKey) => {
        const curVal = getDeepProperty(
          conf.subconfigs[curKey],
          target2
        );
        if (acc instanceof Object && curVal instanceof Object)
          return mergeDeep(acc, curVal);
        return curVal;
      }, void 0);
    }
    const user = _getURL(USERCONFIG, url, target);
    const deflt = _getURL(DEFAULTS, url, target);
    if (user === void 0 || user === null)
      return deflt;
    if (typeof user !== "object" || typeof deflt !== "object")
      return user;
    return mergeDeepCull(deflt, user);
  }
  function get(target_typed, ...target) {
    if (target_typed === void 0) {
      target = [];
    } else {
      target = [target_typed].concat(target);
    }
    let loc = window.location;
    if (window.tri && window.tri.contentLocation)
      loc = window.tri.contentLocation;
    const site = getURL(loc.href, target);
    const user = getDeepProperty(USERCONFIG, target);
    const defult = getDeepProperty(DEFAULTS, target);
    if (typeof defult === "object") {
      return mergeDeepCull(mergeDeepCull(defult, user), site);
    } else {
      if (site !== void 0) {
        return site;
      } else if (user !== void 0) {
        return user;
      } else {
        return defult;
      }
    }
  }
  function getDynamic(...target) {
    return get(target[0], ...target.slice(1));
  }
  async function getAsyncDynamic(...target) {
    return getAsync(target[0], ...target.slice(1));
  }
  async function getAsync(target_typed, ...target) {
    if (INITIALISED) {
      const browserconfig = await browser.storage.local.get(CONFIGNAME);
      USERCONFIG = browserconfig[CONFIGNAME] || o3({});
      return get(target_typed, ...target);
    } else {
      return new Promise(
        (resolve2) => WAITERS.push(() => resolve2(get(target_typed, ...target)))
      );
    }
  }
  async function push() {
    const local_conf = await browser.storage.local.get(CONFIGNAME);
    delete local_conf[CONFIGNAME]["customthemes"];
    return browser.storage.sync.set(local_conf);
  }
  async function pull() {
    return browser.storage.local.set(await browser.storage.sync.get(CONFIGNAME));
  }
  function setURL(pattern, ...args2) {
    try {
      new RegExp(pattern);
      return set3("subconfigs", pattern, ...args2);
    } catch (err) {
      if (err instanceof SyntaxError)
        throw new SyntaxError(`invalid pattern: ${err.message}`);
      throw err;
    }
  }
  async function set3(...args2) {
    if (args2.length < 2) {
      throw new Error("You must provide at least two arguments!");
    }
    const target = args2.slice(0, args2.length - 1);
    const value = args2[args2.length - 1];
    if (INITIALISED) {
      setDeepProperty(USERCONFIG, value, target);
      return save();
    } else {
      setDeepProperty(USERCONFIG, value, target);
    }
  }
  function unsetURL(pattern, ...target) {
    return unset("subconfigs", pattern, ...target);
  }
  function unset(...target) {
    const parent = getDeepProperty(USERCONFIG, target.slice(0, -1));
    if (parent !== void 0)
      delete parent[target[target.length - 1]];
    return save();
  }
  async function save() {
    const settingsobj = o3({});
    settingsobj[CONFIGNAME] = USERCONFIG;
    return browser.storage.local.set(settingsobj);
  }
  async function update3() {
    const updateAll = (setting, fn) => {
      const val = getDeepProperty(USERCONFIG, setting);
      if (val) {
        set3(...setting, fn(val));
      }
      const subconfigs = getDeepProperty(USERCONFIG, ["subconfigs"]);
      if (subconfigs) {
        Object.keys(subconfigs).map((pattern) => [pattern, getURL(pattern, setting)]).filter(([_pattern, value]) => value).forEach(
          ([pattern, value]) => setURL(pattern, ...setting, fn(value))
        );
      }
    };
    if (!get("configversion"))
      set3("configversion", "0.0");
    let updated = false;
    switch (get("configversion")) {
      case "0.0": {
        try {
          const legacy_nmaps = await browser.storage.sync.get("nmaps");
          if (Object.keys(legacy_nmaps).length > 0) {
            USERCONFIG.nmaps = Object.assign(
              legacy_nmaps.nmaps,
              USERCONFIG.nmaps
            );
          }
        } finally {
          set3("configversion", "1.0");
        }
      }
      case "1.0": {
        const vimiumgi = getDeepProperty(USERCONFIG, ["vimium-gi"]);
        if (vimiumgi === true || vimiumgi === "true")
          set3("gimode", "nextinput");
        else if (vimiumgi === false || vimiumgi === "false")
          set3("gimode", "firefox");
        unset("vimium-gi");
        set3("configversion", "1.1");
      }
      case "1.1": {
        const leveltostr = {
          0: "never",
          1: "error",
          2: "warning",
          3: "info",
          4: "debug"
        };
        const logging = getDeepProperty(USERCONFIG, ["logging"]);
        if (logging)
          Object.keys(logging).forEach(
            (l2) => set3("logging", l2, leveltostr[logging[l2]])
          );
        set3("configversion", "1.2");
      }
      case "1.2": {
        ;
        ["ignoremaps", "inputmaps", "imaps", "nmaps"].map((mapname) => [
          mapname,
          getDeepProperty(USERCONFIG, [mapname])
        ]).filter(([_mapname, mapobj]) => mapobj).forEach(([mapname, mapobj]) => {
          Object.keys(mapobj).filter(
            (key) => {
              var _a;
              return ((_a = mapobj[key]) == null ? void 0 : _a.search(
                "^im_|([^a-zA-Z0-9_-])im_"
              )) >= 0;
            }
          ).forEach(
            (key) => setDeepProperty(
              USERCONFIG,
              mapobj[key].replace(
                new RegExp("^im_|([^a-zA-Z0-9_-])im_"),
                "$1text."
              ),
              [mapname, key]
            )
          );
        });
        set3("configversion", "1.3");
      }
      case "1.3": {
        ;
        [
          "priority",
          "hintdelay",
          "scrollduration",
          "ttsvolume",
          "ttsrate",
          "ttspitch",
          "jumpdelay",
          "historyresults"
        ].forEach((setting) => updateAll([setting], parseInt));
        set3("configversion", "1.4");
      }
      case "1.4": {
        ;
        (getDeepProperty(USERCONFIG, ["noiframeon"]) || []).forEach(
          (site) => {
            setURL(site, "noiframe", "true");
          }
        );
        set3("configversion", "1.5");
      }
      case "1.5": {
        unset("exaliases", "tab");
        set3("configversion", "1.6");
      }
      case "1.6": {
        const updateSetting = (mapObj) => {
          if (!mapObj)
            return mapObj;
          if (mapObj[" "] !== void 0) {
            mapObj["<Space>"] = mapObj[" "];
            delete mapObj[" "];
          }
          ;
          [
            "<A- >",
            "<C- >",
            "<M- >",
            "<S- >",
            "<AC- >",
            "<AM- >",
            "<AS- >",
            "<CM- >",
            "<CS- >",
            "<MS- >"
          ].forEach((binding) => {
            if (mapObj[binding] !== void 0) {
              const key = binding.replace(" ", "Space");
              mapObj[key] = mapObj[binding];
              delete mapObj[binding];
            }
          });
          return mapObj;
        };
        ["nmaps", "exmaps", "imaps", "inputmaps", "ignoremaps"].forEach(
          (settingName) => updateAll([settingName], updateSetting)
        );
        set3("configversion", "1.7");
      }
      case "1.7": {
        const autocontain2 = getDeepProperty(USERCONFIG, ["autocontain"]);
        unset("autocontain");
        if (autocontain2 !== void 0) {
          Object.entries(autocontain2).forEach(([domain, container]) => {
            set3(
              "autocontain",
              `^https?://([^/]*\\.|)*${domain}/`,
              container
            );
          });
        }
        set3("configversion", "1.8");
      }
      case "1.8": {
        const updateSetting = (mapObj) => {
          if (!mapObj)
            return mapObj;
          return map_default((val) => {
            if (val === "")
              return null;
            return val;
          }, mapObj);
        };
        [
          "nmaps",
          "exmaps",
          "imaps",
          "inputmaps",
          "ignoremaps",
          "hintmaps",
          "vmaps"
        ].forEach((settingName) => updateAll([settingName], updateSetting));
        set3("configversion", "1.9");
      }
      case "1.9": {
        const local = (await browser.storage.local.get(CONFIGNAME))[CONFIGNAME];
        const sync = (await browser.storage.sync.get(CONFIGNAME))[CONFIGNAME];
        const current_storageloc = (local == null ? void 0 : local.storageloc) !== void 0 ? local.storageloc : (sync == null ? void 0 : sync.storageloc) !== void 0 ? sync.storageloc : "sync";
        if (current_storageloc == "sync") {
          await pull();
        } else if (current_storageloc != "local") {
          throw new Error(
            "storageloc was set to something weird: " + current_storageloc + ", automatic migration of settings was not possible."
          );
        }
        set3("configversion", "2.0");
        updated = true;
      }
    }
    return updated;
  }
  async function init2() {
    const localConfig = await browser.storage.local.get(CONFIGNAME);
    schlepp(localConfig[CONFIGNAME]);
    INITIALISED = true;
    for (const waiter of WAITERS) {
      waiter();
    }
  }
  function addChangeListener(name, listener) {
    let arr = changeListeners.get(name);
    if (!arr) {
      arr = [];
      changeListeners.set(name, arr);
    }
    arr.push(listener);
  }
  function removeChangeListener(name, listener) {
    const arr = changeListeners.get(name);
    if (!arr)
      return;
    const i2 = arr.indexOf(listener);
    if (i2 >= 0)
      arr.splice(i2, 1);
  }
  function parseConfig() {
    let p = {
      conf: [],
      binds: [],
      aliases: [],
      subconfigs: [],
      aucmds: [],
      aucons: [],
      logging: [],
      nulls: []
    };
    p = parseConfigHelper(USERCONFIG, p);
    const s = {
      general: ``,
      binds: ``,
      aliases: ``,
      aucmds: ``,
      aucons: ``,
      subconfigs: ``,
      logging: ``,
      nulls: ``
    };
    if (p.conf.length > 0)
      s.general = `" General Settings
${p.conf.join("\n")}

`;
    if (p.binds.length > 0)
      s.binds = `" Binds
${p.binds.join("\n")}

`;
    if (p.aliases.length > 0)
      s.aliases = `" Aliases
${p.aliases.join("\n")}

`;
    if (p.aucmds.length > 0)
      s.aucmds = `" Autocmds
${p.aucmds.join("\n")}

`;
    if (p.aucons.length > 0)
      s.aucons = `" Autocontainers
${p.aucons.join("\n")}

`;
    if (p.subconfigs.length > 0)
      s.subconfigs = `" Subconfig Settings
${p.subconfigs.join("\n")}

`;
    if (p.logging.length > 0)
      s.logging = `" Logging
${p.logging.join("\n")}

`;
    if (p.nulls.length > 0)
      s.nulls = `" Removed settings
${p.nulls.join("\n")}

`;
    const ftdetect = `" For syntax highlighting see https://github.com/tridactyl/vim-tridactyl
" vim: set filetype=tridactyl`;
    return `${s.general}${s.binds}${s.subconfigs}${s.aliases}${s.aucmds}${s.aucons}${s.logging}${s.nulls}${ftdetect}`;
  }
  var removeNull, CONFIGNAME, WAITERS, INITIALISED, USERCONFIG, default_config, platform_defaults, keyboardlayouts, mergeDeepCull, DEFAULTS, changeListeners, parseConfigHelper;
  var init_config = __esm({
    "src/lib/config.ts"() {
      "use strict";
      init_es();
      init_binding();
      init_platform();
      removeNull = when_default(
        is_default(Object),
        pipe(
          // Ramda gives an error here without the any
          reject_default((val) => val === null),
          map_default((a) => removeNull(a))
        )
      );
      CONFIGNAME = "userconfig";
      WAITERS = [];
      INITIALISED = false;
      USERCONFIG = o3({});
      default_config = class {
        constructor() {
          /**
           * Internal version number Tridactyl uses to know whether it needs to update from old versions of the configuration.
           *
           * Changing this might do weird stuff.
           */
          this.configversion = "0.0";
          /**
           * Internal field to handle site-specific configs. Use :seturl/:unseturl to change these values.
           */
          this.subconfigs = {
            "www.google.com": {
              followpagepatterns: {
                next: "Next",
                prev: "Previous"
              }
            },
            "^https://web.whatsapp.com": {
              nmaps: {
                f: "hint -c [tabindex]:not(.two)>div,a",
                F: "hint -bc [tabindex]:not(.two)>div,a"
              }
            }
          };
          /**
           * Internal field to handle mode-specific configs. Use :setmode/:unsetmode to change these values.
           *
           * Changing this might do weird stuff.
           */
          this.modesubconfigs = {
            normal: {},
            insert: {},
            input: {},
            ignore: {},
            ex: {},
            hint: {},
            visual: {}
          };
          /**
           * Internal field to handle site-specific config priorities. Use :seturl/:unseturl to change this value.
           */
          this.priority = 0;
          // Note to developers: When creating new <modifier-letter> maps, make sure to make the modifier uppercase (e.g. <C-a> instead of <c-a>) otherwise some commands might not be able to find them (e.g. `bind <c-a>`)
          /**
           * exmaps contains all of the bindings for the command line.
           * You can of course bind regular ex commands but also [editor functions](/static/docs/modules/_src_lib_editor_.html) and [commandline-specific functions](/static/docs/modules/_src_commandline_frame_.html).
           */
          this.exmaps = {
            "<Enter>": "ex.accept_line",
            "<C-Enter>": "ex.execute_ex_on_completion",
            "<C-j>": "ex.accept_line",
            "<C-m>": "ex.accept_line",
            "<Escape>": "ex.hide_and_clear",
            "<C-[>": "ex.hide_and_clear",
            "<ArrowUp>": "ex.prev_history",
            "<ArrowDown>": "ex.next_history",
            "<S-Delete>": "ex.execute_ex_on_completion_args tabclose",
            "<A-b>": "text.backward_word",
            "<A-f>": "text.forward_word",
            "<C-e>": "text.end_of_line",
            "<A-d>": "text.kill_word",
            "<S-Backspace>": "text.backward_kill_word",
            "<C-u>": "text.backward_kill_line",
            "<C-k>": "text.kill_line",
            "<C-f>": "ex.complete",
            "<Tab>": "ex.next_completion",
            "<S-Tab>": "ex.prev_completion",
            "<Space>": "ex.insert_space_or_completion",
            "<C-Space>": "ex.insert_space",
            "<C-o>yy": "ex.execute_ex_on_completion_args clipboard yank",
            "<C-o>t": "ex.execute_ex_on_completion_args tabopen -b",
            "<C-o>w": "ex.execute_ex_on_completion_args winopen"
          };
          /**
           * ignoremaps contain all of the bindings for "ignore mode".
           *
           * They consist of key sequences mapped to ex commands.
           */
          this.ignoremaps = {
            "<S-Insert>": "mode normal",
            "<AC-Escape>": "mode normal",
            "<AC-`>": "mode normal",
            "<S-Escape>": "mode normal",
            "<C-o>": "nmode normal 1 mode ignore"
          };
          /**
           * imaps contain all of the bindings for "insert mode".
           *
           * On top of regular ex commands, you can also bind [editor functions](/static/docs/modules/_src_lib_editor_.html) in insert mode.
           *
           * They consist of key sequences mapped to ex commands.
           */
          this.imaps = {
            "<Escape>": "composite unfocus | mode normal",
            "<C-[>": "composite unfocus | mode normal",
            "<C-i>": "editor",
            "<AC-Escape>": "mode normal",
            "<AC-`>": "mode normal",
            "<S-Escape>": "mode ignore"
          };
          /**
           * inputmaps contain all of the bindings for "input mode".
           *
           * On top of regular ex commands, you can also bind [editor functions](/static/docs/modules/_src_lib_editor_.html) in input mode.
           *
           * They consist of key sequences mapped to ex commands.
           */
          this.inputmaps = {
            "<Tab>": "focusinput -n",
            "<S-Tab>": "focusinput -N",
            /**
             * Config objects with this key inherit their keys from the object specified.
             *
             * Only supports "root" objects. Subconfigs (`seturl`) work as expected.
             *
             * Here, this means that input mode is the same as insert mode except it has added binds for tab and shift-tab.
             */
            "\u{1F577}\u{1F577}INHERITS\u{1F577}\u{1F577}": "imaps"
          };
          /**
           * Disable Tridactyl almost completely within a page, e.g. `seturl ^https?://mail.google.com disable true`. Only takes affect on page reload.
           *
           * You are usually better off using `blacklistadd` and `seturl [url] noiframe true` as you can then still use some Tridactyl binds, e.g. `shift-insert` for exiting ignore mode.
           *
           * NB: you should only use this with `seturl`. If you get trapped with Tridactyl disabled everywhere just run `tri unset superignore` in the Firefox address bar. If that still doesn't fix things, you can totally reset Tridactyl by running `tri help superignore` in the Firefox address bar, scrolling to the bottom of that page and then clicking "Reset Tridactyl config".
           */
          this.superignore = "false";
          /**
           * nmaps contain all of the bindings for "normal mode".
           *
           * They consist of key sequences mapped to ex commands.
           */
          this.nmaps = {
            "<A-p>": "pin",
            "<A-m>": "mute toggle",
            "<F1>": "help",
            o: "fillcmdline open",
            O: "current_url open",
            w: "fillcmdline winopen",
            W: "current_url winopen",
            t: "fillcmdline tabopen",
            "]]": "followpage next",
            "[[": "followpage prev",
            "[c": "urlincrement -1",
            "]c": "urlincrement 1",
            "<C-x>": "urlincrement -1",
            "<C-a>": "urlincrement 1",
            T: "current_url tabopen",
            yy: "clipboard yank",
            ys: "clipboard yankshort",
            yq: "text2qr --timeout 5",
            yc: "clipboard yankcanon",
            ym: "clipboard yankmd",
            yo: "clipboard yankorg",
            yt: "clipboard yanktitle",
            gh: "home",
            gH: "home true",
            p: "clipboard open",
            P: "clipboard tabopen",
            j: "scrollline 10",
            "<C-e>": "scrollline 10",
            k: "scrollline -10",
            "<C-y>": "scrollline -10",
            h: "scrollpx -50",
            l: "scrollpx 50",
            G: "scrollto 100",
            gg: "scrollto 0",
            "<C-u>": "scrollpage -0.5",
            "<C-d>": "scrollpage 0.5",
            "<C-f>": "scrollpage 1",
            "<C-b>": "scrollpage -1",
            "<C-v>": "nmode ignore 1 mode normal",
            // Is this a terrible idea? Pentadactyl did it http://bug.5digits.org/help/pentadactyl/browsing.xhtml#send-key
            $: "scrollto 100 x",
            // "0": "scrollto 0 x", // will get interpreted as a count
            "^": "scrollto 0 x",
            H: "back",
            L: "forward",
            "<C-o>": "jumpprev",
            "<C-i>": "jumpnext",
            d: "tabclose",
            D: "composite tabprev; tabclose #",
            gx0: "tabclosealltoleft",
            gx$: "tabclosealltoright",
            "<<": "tabmove -1",
            ">>": "tabmove +1",
            u: "undo",
            U: "undo window",
            r: "reload",
            R: "reloadhard",
            x: "stop",
            gi: "focusinput -l",
            "g?": "rot13",
            "g!": "jumble",
            "g;": "changelistjump -1",
            J: "tabprev",
            K: "tabnext",
            gt: "tabnext_gt",
            gT: "tabprev",
            // "<c-n>": "tabnext_gt", // c-n is reserved for new window
            // "<c-p>": "tabprev",
            "g^": "tabfirst",
            g0: "tabfirst",
            g$: "tablast",
            ga: "tabaudio",
            gr: "reader --old",
            gu: "urlparent",
            gU: "urlroot",
            gf: "viewsource",
            ":": "fillcmdline_notrail",
            s: "fillcmdline open search",
            S: "fillcmdline tabopen search",
            // find mode not suitable for general consumption yet.
            // "/": "fillcmdline find",
            // "?": "fillcmdline find -?",
            // n: "findnext 1",
            // N: "findnext -1",
            // ",<Space>": "nohlsearch",
            M: "gobble 1 quickmark",
            B: "fillcmdline taball",
            b: "fillcmdline tab",
            ZZ: "qall",
            f: "hint",
            F: "hint -b",
            gF: "hint -qb",
            ";i": "hint -i",
            ";b": "hint -b",
            ";o": "hint",
            ";I": "hint -I",
            ";k": "hint -k",
            ";K": "hint -K",
            ";y": "hint -y",
            ";Y": "hint -cF img i => tri.excmds.yankimage(tri.urlutils.getAbsoluteURL(i.src))",
            ";p": "hint -p",
            ";h": "hint -h",
            v: "hint -h",
            // Easiest way of entering visual mode for now. Expect this bind to change
            ";P": "hint -P",
            ";r": "hint -r",
            ";s": "hint -s",
            ";S": "hint -S",
            ";a": "hint -a",
            ";A": "hint -A",
            ";;": "hint -; *",
            ";#": "hint -#",
            ";v": "hint -W mpvsafe",
            ";V": "hint -V",
            ";w": "hint -w",
            ";t": "hint -W tabopen",
            ";O": "hint -W fillcmdline_notrail open ",
            ";W": "hint -W fillcmdline_notrail winopen ",
            ";T": "hint -W fillcmdline_notrail tabopen ",
            ";d": "hint -W tabopen --discard",
            ";gd": "hint -qW tabopen --discard",
            ";z": "hint -z",
            ";m": "hint -JFc img i => tri.excmds.open('https://lens.google.com/uploadbyurl?url='+i.src)",
            ";M": "hint -JFc img i => tri.excmds.tabopen('https://lens.google.com/uploadbyurl?url='+i.src)",
            ";gi": "hint -qi",
            ";gI": "hint -qI",
            ";gk": "hint -qk",
            ";gy": "hint -qy",
            ";gp": "hint -qp",
            ";gP": "hint -qP",
            ";gr": "hint -qr",
            ";gs": "hint -qs",
            ";gS": "hint -qS",
            ";ga": "hint -qa",
            ";gA": "hint -qA",
            ";g;": "hint -q;",
            ";g#": "hint -q#",
            ";gv": "hint -qW mpvsafe",
            ";gw": "hint -qw",
            ";gb": "hint -qb",
            // These two don't strictly follow the "bind is ;g[flag]" rule but they make sense
            ";gF": "hint -qb",
            ";gf": "hint -q",
            "<S-Insert>": "mode ignore",
            "<AC-Escape>": "mode ignore",
            "<AC-`>": "mode ignore",
            "<S-Escape>": "mode ignore",
            "<Escape>": "composite mode normal ; hidecmdline",
            "<C-[>": "composite mode normal ; hidecmdline",
            a: "current_url bmark",
            A: "bmark",
            zi: "zoom 0.1 true",
            zo: "zoom -0.1 true",
            zm: "zoom 0.5 true",
            zr: "zoom -0.5 true",
            zM: "zoom 0.5 true",
            zR: "zoom -0.5 true",
            zz: "zoom 1",
            zI: "zoom 3",
            zO: "zoom 0.3",
            ".": "repeat",
            "<AS-ArrowUp><AS-ArrowUp><AS-ArrowDown><AS-ArrowDown><AS-ArrowLeft><AS-ArrowRight><AS-ArrowLeft><AS-ArrowRight>ba": "open https://www.youtube.com/watch?v=M3iOROuTuMA",
            m: "gobble 1 markadd",
            "`": "gobble 1 markjump"
          };
          this.vmaps = {
            "<Escape>": "composite js document.getSelection().empty(); mode normal; hidecmdline",
            "<C-[>": "composite js document.getSelection().empty(); mode normal ; hidecmdline",
            y: "composite js document.getSelection().toString() | clipboard yank",
            s: "composite js document.getSelection().toString() | fillcmdline open search",
            S: "composite js document.getSelection().toString() | fillcmdline tabopen search",
            l: 'js document.getSelection().modify("extend","forward","character")',
            h: 'js document.getSelection().modify("extend","backward","character")',
            e: 'js document.getSelection().modify("extend","forward","word")',
            w: 'js document.getSelection().modify("extend","forward","word"); document.getSelection().modify("extend","forward","word"); document.getSelection().modify("extend","backward","word"); document.getSelection().modify("extend","forward","character")',
            b: 'js document.getSelection().modify("extend","backward","character"); document.getSelection().modify("extend","backward","word"); document.getSelection().modify("extend","forward","character")',
            j: 'js document.getSelection().modify("extend","forward","line")',
            q: "composite js document.getSelection().toString() | text2qr --timeout 5",
            // "j": 'js document.getSelection().modify("extend","forward","paragraph")', // not implemented in Firefox
            k: 'js document.getSelection().modify("extend","backward","line")',
            $: 'js document.getSelection().modify("extend","forward","lineboundary")',
            "0": 'js document.getSelection().modify("extend","backward","lineboundary")',
            "=": "js let n = document.getSelection().anchorNode.parentNode; let s = window.getSelection(); let r = document.createRange(); s.removeAllRanges(); r.selectNodeContents(n); s.addRange(r)",
            o: "js tri.visual.reverseSelection(document.getSelection())",
            "\u{1F577}\u{1F577}INHERITS\u{1F577}\u{1F577}": "nmaps"
          };
          this.hintmaps = {
            "<Backspace>": "hint.popKey",
            "<Escape>": "hint.reset",
            "<C-[>": "hint.reset",
            "<Tab>": "hint.focusNextHint",
            "<S-Tab>": "hint.focusPreviousHint",
            "<ArrowUp>": "hint.focusTopHint",
            "<ArrowDown>": "hint.focusBottomHint",
            "<ArrowLeft>": "hint.focusLeftHint",
            "<ArrowRight>": "hint.focusRightHint",
            "<Enter>": "hint.selectFocusedHint",
            "<Space>": "hint.selectFocusedHint"
          };
          /**
           * Browser-wide binds accessible in all modes and on pages where Tridactyl "cannot run".
           * <!-- Note to developers: binds here need to also be listed in manifest.json -->
           */
          this.browsermaps = {
            "<C-,>": "escapehatch",
            "<C-6>": "tab #"
            // "<CS-6>": "tab #", // banned by e2e tests
          };
          /**
           * Whether to allow pages (not necessarily github) to override `/`, which is a default Firefox binding.
           */
          this.leavegithubalone = "false";
          /**
           * Which keys to protect from pages that try to override them. Requires [[leavegithubalone]] to be set to false.
           */
          this.blacklistkeys = ["/"];
          /**
           * Autocommands that run when certain events happen, and other conditions are met.
           *
           * Related ex command: `autocmd`.
           */
          this.autocmds = {
            /**
             * Commands that will be run as soon as Tridactyl loads into a page.
             *
             * Each key corresponds to a URL fragment which, if contained within the page URL, will run the corresponding command.
             */
            DocStart: {
              // "addons.mozilla.org": "mode ignore",
            },
            /**
             * Commands that will be run when pages are loaded.
             *
             * Each key corresponds to a URL fragment which, if contained within the page URL, will run the corresponding command.
             */
            DocLoad: {
              "^https://github.com/tridactyl/tridactyl/issues/new$": "issue"
            },
            /**
             * Commands that will be run when pages are unloaded.
             *
             * Each key corresponds to a URL fragment which, if contained within the page URL, will run the corresponding command.
             */
            DocEnd: {
              // "emacs.org": "sanitise history",
            },
            /**
             * Commands that will be run when Tridactyl first runs each time you start your browser.
             *
             * Each key corresponds to a javascript regex that matches the hostname of the computer Firefox is running on. Note that fetching the hostname could be a little slow, if you want to execute something unconditionally, use ".*" as Tridactyl special-cases this pattern to avoid hostname lookups.
             */
            TriStart: {
              ".*": "source_quiet"
            },
            /**
             * Commands that will be run when you enter a tab.
             *
             * Each key corresponds to a URL fragment which, if contained within the page URL, will run the corresponding command.
             */
            TabEnter: {
              // "gmail.com": "mode ignore",
            },
            /**
             * Commands that will be run when you leave a tab.
             *
             * Each key corresponds to a URL fragment which, if contained within the page URL, will run the corresponding command.
             */
            TabLeft: {
              // Actually, this doesn't work because tabclose closes the current tab
              // Too bad :/
              // "emacs.org": "tabclose",
            },
            /**
             * Commands that will be run when fullscreen state changes.
             */
            FullscreenChange: {},
            /**
             * Commands that will be run when fullscreen state is entered.
             */
            FullscreenEnter: {},
            /**
             * Commands that will be run when fullscreen state is left.
             */
            FullscreenLeft: {}
          };
          /**
           * @deprecated Map for translating keys directly into other keys in normal-ish modes.
           * For example, if you have an entry in this config option mapping `п` to `g`,
           * then you could type `пп` instead of `gg` or `пi` instead of `gi` or `;п` instead
           * of `;g`.
           *
           * This was primarily useful for international users, but now you can `set
           * keyboardlayoutforce true`, which will make everything layout-independent(and work like qwerty by default),
           * and use [[keyboardlayoutoverrides]] setting to change the desired layout.
           *
           *
           * For example, you may want to map 'a' to 'q` on azerty
           * or 'r' to 'p' if you use dvorak.
           *
           * Note that the current implementation does not allow you to "chain" keys, for example, "a"=>"b" and "b"=>"c" for "a"=>"c". You can, however, swap or rotate keys, so "a"=>"b" and "b"=>"a" will work the way you'd expect, as will "a"=>"b" and "b"=>"c" and "c"=>"a".
           */
          this.keytranslatemap = {
            // Examples (I think >_>):
            // "д": "l", // Russian language
            // "é" : "w", // BÉPO
            // "h": "j", // Dvorak
            // "n": "j", // Colemak
            // etc
          };
          /**
           * @deprecated Whether to use the keytranslatemap.
           * Legacy option to map one keyboard character to another, was used to emulate
           * layout-independence. Now deprecated since you can set your layout once with [[keyboardlayoutforce]]
           * and [[keyboardlayoutoverrides]].
           */
          this.usekeytranslatemap = "true";
          /**
           * Instead of fetching actual character which depends on selected layout,
           * use machine code of a key and convert to character according to keyboardlayoutoverrides. The default layout mapping
           * is US `qwerty`, but can be changed with [[keyboardlayoutbase]].
           *
           * There is a much more detailed help page towards the end of `:tutor` under the title "Non-QWERTY layouts".
           *
           * Recommended for everyone with multiple or/and non-latin keyboard layouts. Make sure [[usekeytranslatemap]] is false
           * if you have previously used `keymap`.
           */
          this.keyboardlayoutforce = "false";
          /**
           * Base keyboard layout to use when [[keyboardlayoutforce]] is enabled. At the time of writing, the following layouts are supported: `qwerty, azerty, german, dvorak, uk, ca, bepo`. Requires page reload to take effect.
           *
           * If your layout is missing, you can contribute it with the help of https://gistpreview.github.io/?324119c773fac31651f6422087b36804 - please just open an `:issue` with your layout and we'll add it.
           *
           * You can manually override individual keys for a layout with [[keyboardlayoutoverrides]].
           */
          this.keyboardlayoutbase = "qwerty";
          /**
           * Override individual keys for a layout when [[keyboardlayoutforce]] is enabled. Changes take effect only after a page reload.
           *
           * Key codes for printable keys for [[keyboardlayoutforce]], lower and upper register. See https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values for the names of each key.
           *
           * NB: due to a Tridactyl bug, you cannot set this using array notation as you can for, e.g. [[homepage]].
           * You must instead set the lower and upper registers using a string with no spaces in it, for example
           * `:set keyboardlayoutoverrides Digit2: 2"` for the British English layout.
           */
          this.keyboardlayoutoverrides = {};
          /**
           * Automatically place these sites in the named container.
           *
           * Each key corresponds to a URL fragment which, if contained within the page URL, the site will be opened in a container tab instead.
           */
          this.autocontain = o3({
            // "github.com": "microsoft",
            // "youtube.com": "google",
          });
          /**
           * Default proxy to use for all URLs. Has to be the name of a proxy. To add a proxy, see `:help proxyadd`. NB: usage with `:seturl` is buggy, use `:autocontain -s [regex to match URL] none [proxy]` instead
           */
          this.proxy = "";
          /**
           * Definitions of proxies.
           *
           * You can add a new proxy with `proxyadd proxyname proxyurl`
           */
          this.proxies = o3({
            // "socksName": "socks://hostname:port",
            // "socks4": "socks4://hostname:port",
            // "https": "https://username:password@hostname:port"
          });
          /**
           * Whether to use proxy settings.
           *
           * If set to `true`, all proxy settings will be ignored.
           */
          this.noproxy = "false";
          /**
           * Strict mode will always ensure a domain is open in the correct container, replacing the current tab if necessary.
           *
           * Relaxed mode is less aggressive and instead treats container domains as a default when opening a new tab.
           */
          this.autocontainmode = "strict";
          /**
           * Aliases for the commandline.
           *
           * You can make a new one with `command alias ex-command`.
           */
          this.exaliases = {
            alias: "command",
            au: "autocmd",
            aucon: "autocontain",
            audel: "autocmddelete",
            audelete: "autocmddelete",
            blacklistremove: "autocmddelete DocStart",
            b: "tab",
            clsh: "clearsearchhighlight",
            nohlsearch: "clearsearchhighlight",
            noh: "clearsearchhighlight",
            o: "open",
            w: "winopen",
            t: "tabopen",
            tabgroupabort: "tgroupabort",
            tabgroupclose: "tgroupclose",
            tabgroupcreate: "tgroupcreate",
            tabgrouplast: "tgrouplast",
            tabgroupmove: "tgroupmove",
            tabgrouprename: "tgrouprename",
            tabgroupswitch: "tgroupswitch",
            tabnew: "tabopen",
            tabm: "tabmove",
            tabo: "tabonly",
            tn: "tabnext_gt",
            bn: "tabnext_gt",
            tnext: "tabnext_gt",
            bnext: "tabnext_gt",
            tp: "tabprev",
            tN: "tabprev",
            bp: "tabprev",
            bN: "tabprev",
            tprev: "tabprev",
            bprev: "tabprev",
            tabfirst: "tab 1",
            tablast: "tab 0",
            bfirst: "tabfirst",
            blast: "tablast",
            tfirst: "tabfirst",
            tlast: "tablast",
            buffer: "tab",
            bufferall: "taball",
            bd: "tabclose",
            bdelete: "tabclose",
            quit: "tabclose",
            q: "tabclose",
            qa: "qall",
            sanitize: "sanitise",
            "saveas!": "saveas --cleanup --overwrite",
            tutorial: "tutor",
            h: "help",
            unmute: "mute unmute",
            authors: "credits",
            openwith: "hint -W",
            "!": "exclaim",
            "!s": "exclaim_quiet",
            containerremove: "containerdelete",
            colours: "colourscheme",
            colorscheme: "colourscheme",
            colors: "colourscheme",
            man: "help",
            "!js": "fillcmdline_tmp 3000 !js is deprecated. Please use js instead",
            "!jsb": "fillcmdline_tmp 3000 !jsb is deprecated. Please use jsb instead",
            get_current_url: "js document.location.href",
            current_url: "composite get_current_url | fillcmdline_notrail ",
            stop: "js window.stop()",
            zo: "zoom",
            installnative: "nativeinstall",
            nativeupdate: "updatenative",
            mkt: "mktridactylrc",
            "mkt!": "mktridactylrc -f",
            "mktridactylrc!": "mktridactylrc -f",
            mpvsafe: "js -p tri.excmds.shellescape(JS_ARG).then(url => tri.excmds.exclaim_quiet('mpv --no-terminal ' + url))",
            drawingstop: "mouse_mode",
            exto: "extoptions",
            extpreferences: "extoptions",
            extp: "extpreferences",
            prefset: "setpref",
            prefremove: "removepref",
            tabclosealltoright: "tabcloseallto right",
            tabclosealltoleft: "tabcloseallto left",
            reibadailty: "jumble"
          };
          /**
           * Used by `]]` and `[[` to look for links containing these words.
           *
           * Edit these if you want to add, e.g. other language support.
           */
          this.followpagepatterns = {
            next: "^(next|newer)\\b|\xBB|>>|more",
            prev: "^(prev(ious)?|older)\\b|\xAB|<<"
          };
          /**
           * The default search engine used by `open search`. If empty string, your browser's default search engine will be used. If set to something, Tridactyl will first look at your [[searchurls]] and then at the search engines for which you have defined a keyword on `about:preferences#search`.
           */
          this.searchengine = "";
          /**
           * Definitions of search engines for use via `open [keyword]`.
           *
           * `%s` will be replaced with your whole query and `%s1`, `%s2`, ..., `%sn` will be replaced with the first, second and nth word of your query. Also supports array slicing, e.g. `%s[2:4]`, `%s[5:]`. If there are none of these patterns in your search urls, your query will simply be appended to the searchurl.
           *
           * Aliases are supported - for example, if you have a `google` searchurl, you can run `:set searchurls.g google` in which case `g` will act as if it was the `google` searchurl.
           *
           * Examples:
           * - When running `open gi cute puppies`, with a `gi` searchurl defined with `set searchurls.gi https://www.google.com/search?q=%s&tbm=isch`, tridactyl will navigate to `https://www.google.com/search?q=cute puppies&tbm=isch`.
           * - When running `tabopen translate en ja Tridactyl`, with a `translate` searchurl defined with `set searchurls.translate https://translate.google.com/#view=home&op=translate&sl=%s1&tl=%s2&text=%s3`, tridactyl will navigate to `https://translate.google.com/#view=home&op=translate&sl=en&tl=ja&text=Tridactyl`.
           *
           * [[setnull]] can be used to "delete" the default search engines. E.g. `setnull searchurls.google`.
           */
          this.searchurls = {
            google: "https://www.google.com/search?q=",
            googlelucky: "https://www.google.com/search?btnI=I'm+Feeling+Lucky&q=",
            scholar: "https://scholar.google.com/scholar?q=",
            googleuk: "https://www.google.co.uk/search?q=",
            bing: "https://www.bing.com/search?q=",
            duckduckgo: "https://duckduckgo.com/?q=",
            yahoo: "https://search.yahoo.com/search?p=",
            twitter: "https://twitter.com/search?q=",
            wikipedia: "https://en.wikipedia.org/wiki/Special:Search/",
            youtube: "https://www.youtube.com/results?search_query=",
            amazon: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=",
            amazonuk: "https://www.amazon.co.uk/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=",
            startpage: "https://startpage.com/do/search?language=english&cat=web&query=",
            github: "https://github.com/search?utf8=\u2713&q=",
            searx: "https://searx.me/?category_general=on&q=",
            cnrtl: "http://www.cnrtl.fr/lexicographie/",
            osm: "https://www.openstreetmap.org/search?query=",
            mdn: "https://developer.mozilla.org/en-US/search?q=",
            gentoo_wiki: "https://wiki.gentoo.org/index.php?title=Special%3ASearch&profile=default&fulltext=Search&search=",
            qwant: "https://www.qwant.com/?q="
          };
          /**
           * Like [[searchurls]] but must be a Javascript function that takes one argument (a single string with the remainder of the command line including spaces) and maps it to a valid href (or a promise that resolves to a valid href) that will be followed, e.g. `set jsurls.googleloud query => "https://google.com/search?q=" + query.toUpperCase()`
           *
           * NB: the href must be valid, i.e. it must include the protocol (e.g. "http://") and not just be e.g. "www.".
           */
          this.jsurls = {};
          /**
           * URL the newtab will redirect to.
           *
           * All usual rules about things you can open with `open` apply, with the caveat that you'll get interesting results if you try to use something that needs `nativeopen`: so don't try `about:newtab` or a `file:///` URI. You should instead use a data URI - https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs - or host a local webserver (e.g. Caddy).
           */
          this.newtab = "";
          /**
           * Whether `:viewsource` will use our own page that you can use Tridactyl binds on, or Firefox's default viewer, which you cannot use Tridactyl on.
           */
          this.viewsource = "tridactyl";
          /**
           * Pages opened with `gH`. In order to set this value, use `:set homepages ["example.org", "example.net", "example.com"]` and so on.
           */
          this.homepages = [];
          /**
           * Characters to use in hint mode.
           *
           * They are used preferentially from left to right.
           */
          this.hintchars = "hjklasdfgyuiopqwertnmzxcvb";
          /**
           * The type of hinting to use. `vimperator` will allow you to filter links based on their names by typing non-hint chars. It is recommended that you use this in conjuction with the [[hintchars]] setting, which you should probably set to e.g, `5432167890`. ´vimperator-reflow´ additionally updates the hint labels after filtering.
           */
          this.hintfiltermode = "simple";
          /**
           * Whether to optimise for the shortest possible names for each hint, or to use a simple numerical ordering. If set to `numeric`, overrides `hintchars` setting.
           */
          this.hintnames = "short";
          /**
           * Whether to display the names for hints in uppercase.
           */
          this.hintuppercase = "true";
          /**
           * The delay in milliseconds in `vimperator` style hint modes after selecting a hint before you are returned to normal mode.
           *
           * The point of this is to prevent accidental execution of normal mode binds due to people typing more than is necessary to choose a hint.
           */
          this.hintdelay = 300;
          /**
           * Controls whether hints should be shifted in quick-hints mode.
           *
           * Here's what it means: let's say you have hints from a to z but are only
           * interested in every second hint. You first press `a`, then `c`.
           * Tridactyl will realize that you skipped over `b`, and so that the next
           * hint you're going to trigger is probably `e`. Tridactyl will shift all
           * hint names so that `e` becomes `c`, `d` becomes `b`, `c` becomes `a` and
           * so on.
           * This means that once you pressed `c`, you can keep on pressing `c` to
           * trigger every second hint. Only makes sense with hintnames = short.
           */
          this.hintshift = "false";
          /**
           * Controls whether hints should be followed automatically.
           *
           * If set to `false`, hints will only be followed upon confirmation. This applies to cases when there is only a single match or only one link on the page.
           */
          this.hintautoselect = "true";
          /**
           * Controls whether the page can focus elements for you via js
           *
           * NB: will break fancy editors such as CodeMirror on Jupyter. Simply use `seturl` to whitelist pages you need it on.
           *
           * Best used in conjunction with browser.autofocus in `about:config`
           */
          this.allowautofocus = "true";
          /**
           * Uses a loop to prevent focus until you interact with a page. Only recommended for use via `seturl` for problematic sites as it can be a little heavy on CPU if running on all tabs. Should be used in conjuction with [[allowautofocus]]
           */
          this.preventautofocusjackhammer = "false";
          /**
           * Whether to use Tridactyl's (bad) smooth scrolling.
           */
          this.smoothscroll = "false";
          /**
           * How viscous you want smooth scrolling to feel.
           */
          this.scrollduration = 100;
          /**
           * Where to open tabs opened with `tabopen` - to the right of the current tab, or at the end of the tabs.
           */
          this.tabopenpos = "next";
          /**
           * When enabled (the default), running tabclose will close the tabs whether they are pinned or not. When disabled, tabclose will fail with an error if a tab is pinned.
           */
          this.tabclosepinned = "true";
          /**
           * Controls which tab order to use when numbering tabs. Either mru = sort by most recent tab or default = by tab index
           *
           * Applies to all places where Tridactyl numbers tabs including `:tab`, `:tabnext_gt` etc. (so, for example, with `:set tabsort mru` `2gt` would take you to the second most recently used tab, not the second tab in the tab bar).
           */
          this.tabsort = "default";
          /**
           * Where to open tabs opened with hinting - as if it had been middle clicked, to the right of the current tab, or at the end of the tabs.
           */
          this.relatedopenpos = "related";
          /**
           * The name of the voice to use for text-to-speech. You can get the list of installed voices by running the following snippet: `js alert(window.speechSynthesis.getVoices().reduce((a, b) => a + " " + b.name))`
           */
          this.ttsvoice = "default";
          // chosen from the listvoices list or "default"
          /**
           * Controls text-to-speech volume. Has to be a number between 0 and 1.
           */
          this.ttsvolume = 1;
          /**
           * Controls text-to-speech speed. Has to be a number between 0.1 and 10.
           */
          this.ttsrate = 1;
          /**
           * Controls text-to-speech pitch. Has to be between 0 and 2.
           */
          this.ttspitch = 1;
          /**
           * When set to "nextinput", pressing `<Tab>` after gi selects the next input.
           *
           * When set to "firefox", `<Tab>` behaves like normal, focusing the next tab-indexed element regardless of type.
           */
          this.gimode = "nextinput";
          /**
           * Decides where to place the cursor when selecting non-empty input fields
           */
          this.cursorpos = "end";
          /**
           * The theme to use.
           *
           * Permitted values: run `:composite js tri.styling.THEMES | fillcmdline` to find out.
           */
          this.theme = "default";
          /**
           * Storage for custom themes
           *
           * Maps theme names to CSS. Predominantly used automatically by [[colourscheme]] to store themes read from disk, as documented by [[colourscheme]]. Setting this manually is untested but might work provided that [[colourscheme]] is then used to change the theme to the right theme name.
           */
          this.customthemes = {};
          /**
           * Whether to display the mode indicator or not.
           */
          this.modeindicator = "true";
          /**
           * Whether to display the mode indicator in various modes. Ignored if modeindicator set to false.
           */
          this.modeindicatormodes = {
            normal: "true",
            insert: "true",
            input: "true",
            ignore: "true",
            ex: "true",
            hint: "true",
            visual: "true"
          };
          /**
           * Milliseconds before registering a scroll in the jumplist
           */
          this.jumpdelay = 3e3;
          /**
           * Logging levels. Unless you're debugging Tridactyl, it's unlikely you'll ever need to change these.
           */
          this.logging = {
            cmdline: "warning",
            containers: "warning",
            controller: "warning",
            excmd: "error",
            hinting: "warning",
            messaging: "warning",
            native: "warning",
            performance: "warning",
            state: "warning",
            styling: "warning",
            autocmds: "warning"
          };
          /**
           * Disables the commandline iframe. Dangerous setting, use [[seturl]] to set it. If you ever set this setting to "true" globally and then want to set it to false again, you can do this by opening Tridactyl's preferences page from about:addons.
           */
          this.noiframe = "false";
          /**
           * @deprecated A list of URLs on which to not load the iframe. Use `seturl [URL] noiframe true` instead, as shown in [[noiframe]].
           */
          this.noiframeon = [];
          /**
           * Insert / input mode edit-in-$EDITOR command to run
           * This has to be a command that stays in the foreground for the whole editing session
           * "auto" will attempt to find a sane editor in your path.
           * Please send your requests to have your favourite terminal moved further up the list to /dev/null.
           *          (but we are probably happy to add your terminal to the list if it isn't already there.)
           *
           * Example values:
           * - linux: `xterm -e vim`
           * - windows: `start cmd.exe /c \"vim\"`.
           *
           * Also see [:editor](/static/docs/modules/_src_excmds_.html#editor).
           */
          this.editorcmd = "auto";
          /**
           * Command that should be run by the [[rssexec]] ex command. Has the
           * following format:
           * - %u: url
           * - %t: title
           * - %y: type (rss, atom, xml...)
           * Warning: This is a very large footgun. %u will be inserted without any
           * kind of escaping, hence you must obey the following rules if you care
           * about security:
           * - Do not use a composite command. If you need a composite command,
           * create an alias.
           * - Do not use `js` or `jsb`. If you need to use them, create an alias.
           * - Do not insert any %u, %t or %y in shell commands run by the native
           * messenger. Use pipes instead.
           *
           * Here's an example of how to save an rss url in a file on your disk
           * safely:
           * `alias save_rss jsb -p tri.native.run("cat >> ~/.config.newsboat/urls", JS_ARG)`
           * `set rsscmd save_rss %u`
           * This is safe because the url is passed to jsb as an argument rather than
           * being expanded inside of the string it will execute and because it is
           * piped to the shell command rather than being expanded inside of it.
           */
          this.rsscmd = "yank %u";
          /**
           * The browser executable to look for in commands such as `restart`. Not as mad as it seems if you have multiple versions of Firefox...
           */
          this.browser = "firefox";
          /**
           * Which clipboard to store items in. Requires the native messenger to be installed.
           */
          this.yankto = "clipboard";
          /**
           * Which clipboard to retrieve items from. Requires the native messenger to be installed.
           *
           * Permitted values: `clipboard`, or `selection`.
           */
          this.putfrom = "clipboard";
          /**
           * Clipboard command to try to get the selection from (e.g. `xsel` or `xclip`)
           */
          this.externalclipboardcmd = "auto";
          /**
           * Whether downloads (e.g. via ;s hint modes) appear in your download history.
           *
           * NB: will cause downloads to fail silently if Tridactyl is not allowed to run in private windows (regardless of whether you are trying to call it in a private window).
           */
          this.downloadsskiphistory = "false";
          /**
           * Set of characters that are to be considered illegal as download filenames.
           */
          this.downloadforbiddenchars = "/\0";
          /**
           * Value that will be used to replace the illegal character(s), if found, in the download filename.
           */
          this.downloadforbiddenreplacement = "_";
          /**
           * Comma-separated list of whole filenames which, if match
           * with the download filename, will be suffixed with the
           * "downloadforbiddenreplacement" value.
           */
          this.downloadforbiddennames = "";
          /**
           * Set this to something weird if you want to have fun every time Tridactyl tries to update its native messenger.
           *
           * %TAG will be replaced with your version of Tridactyl for stable builds, or "master" for beta builds
           *
           * NB: Windows has its own platform-specific default.
           */
          this.nativeinstallcmd = "curl -fsSl https://raw.githubusercontent.com/tridactyl/native_messenger/master/installers/install.sh -o /tmp/trinativeinstall.sh && sh /tmp/trinativeinstall.sh %TAG";
          /**
           * Used by :updatecheck and related built-in functionality to automatically check for updates and prompt users to upgrade.
           */
          this.update = {
            /**
             * Whether Tridactyl should check for available updates at startup.
             */
            nag: true,
            /**
             * How many days to wait after an update is first available until telling people.
             */
            nagwait: 7,
            /**
             * The version we last nagged you about. We only nag you once per version.
             */
            lastnaggedversion: "1.14.0",
            /**
             * Time we last checked for an update, milliseconds since unix epoch.
             */
            lastchecktime: 0,
            /**
             * Minimum interval between automatic update checks, in seconds.
             */
            checkintervalsecs: 60 * 60 * 24
          };
          /**
           * Profile directory to use with native messenger with e.g, `guiset`.
           */
          this.profiledir = "auto";
          // Container settings
          /**
           * If enabled, tabopen opens a new tab in the currently active tab's container.
           */
          this.tabopencontaineraware = "false";
          /**
           * If moodeindicator is enabled, containerindicator will color the border of the mode indicator with the container color.
           */
          this.containerindicator = "true";
          /**
           * Autocontain directives create a container if it doesn't exist already.
           */
          this.auconcreatecontainer = "true";
          /**
           * Initial urls to navigate to when creating a new tab for a new tab group.
           */
          this.tabgroupnewtaburls = {};
          /**
           * Whether :tab shows completions for hidden tabs (e.g. tabs in other tab groups).
           */
          this.tabshowhidden = "false";
          /**
           * Number of most recent results to ask Firefox for. We display the top 20 or so most frequently visited ones.
           */
          this.historyresults = 50;
          /**
           * When displaying bookmarks in history completions, how many page views to pretend they have.
           */
          this.bmarkweight = 100;
          /**
           * When displaying searchurls in history completions, how many page views to pretend they have.
           */
          this.searchurlweight = 150;
          /**
           * Default selector for :goto command.
           */
          this.gotoselector = "h1, h2, h3, h4, h5, h6";
          /**
           * General completions options - NB: options are set according to our internal completion source name - see - `src/completions/[name].ts` in the Tridactyl source.
           */
          this.completions = {
            Goto: {
              autoselect: "true"
            },
            Tab: {
              /**
               * Whether to automatically select the closest matching completion
               */
              autoselect: "true",
              /**
               * Whether to use unicode symbols to display tab statuses
               */
              statusstylepretty: "false"
            },
            TabAll: {
              autoselect: "true"
            },
            Rss: {
              autoselect: "true"
            },
            Bmark: {
              autoselect: "true"
            },
            Sessions: {
              autoselect: "true"
            }
          };
          /**
           * Number of results that should be shown in completions. -1 for unlimited
           */
          this.findresults = -1;
          /**
           * Number of characters to use as context for the matches shown in completions
           */
          this.findcontextlen = 100;
          /**
           * Whether find should be case-sensitive
           */
          this.findcase = "smart";
          /**
           * How long find highlights should persist in milliseconds. `<= 0` means they persist until cleared
           */
          this.findhighlighttimeout = 0;
          /**
           * Whether Tridactyl should jump to the first match when using `:find`
           */
          this.incsearch = "false";
          /**
           * How many characters should be typed before triggering incsearch/completions
           */
          this.minincsearchlen = 3;
          /**
           * Deprecated.
           * Change this to "clobber" to ruin the "Content Security Policy" of all sites a bit and make Tridactyl run a bit better on some of them, e.g. raw.github*
           */
          this.csp = "untouched";
          /**
           * JavaScript RegExp used to recognize words in text.* functions (e.g. text.transpose_words). Should match any character belonging to a word.
           */
          this.wordpattern = "[^\\s]+";
          /**
           * Activate tridactyl's performance counters. These have a
           * measurable performance impact, since every sample is a few
           * hundred bytes and we sample tridactyl densely, but they're good
           * when you're trying to optimize things.
           */
          this.perfcounters = "false";
          /**
           * How many samples to store from the perf counters.
           *
           * Each performance entry is two numbers (16 bytes), an entryType
           * of either "mark" or "measure" (js strings are utf-16 ad we have
           * two marks for each measure, so amortize to about 10 bytes per
           * entry), and a string name that for Tridactyl object will be
           * about 40 (utf-16) characters (80 bytes), plus object overhead
           * roughly proportional to the string-length of the name of the
           * constructor (in this case something like 30 bytes), for a total
           * of what we'll call 128 bytes for ease of math.
           *
           * We want to store, by default, about 1MB of performance
           * statistics, so somewhere around 10k samples.
           *
           */
          this.perfsamples = "10000";
          /**
           * Show (partial) command in the mode indicator.
           * Corresponds to 'showcmd' option of vi.
           */
          this.modeindicatorshowkeys = "false";
          /**
           * Whether a trailing slash is appended when we get the parent of a url with
           * gu (or other means).
           */
          this.urlparenttrailingslash = "true";
          /**
           * Whether to enter visual mode when text is selected. Visual mode can always be entered with `:mode visual`.
           */
          this.visualenterauto = "true";
          /**
           * Whether to return to normal mode when text is deselected.
           */
          this.visualexitauto = "true";
          /**
           * Whether to open and close the sidebar quickly to get focus back to the page when <C-,> is pressed.
           *
           * Disable if the fact that it closes TreeStyleTabs gets on your nerves too much : )
           *
           * NB: when disabled, <C-,> can't get focus back from the address bar, but it can still get it back from lots of other places (e.g. Flash-style video players)
           */
          this.escapehatchsidebarhack = "true";
          /**
           * Threshold for fuzzy matching on completions. Lower => stricter matching. Range between 0 and 1: 0 corresponds to perfect matches only. 1 will match anything.
           *
           * https://fusejs.io/api/options.html#threshold
           */
          this.completionfuzziness = 0.3;
          /**
           * Whether to show article url in the document.title of Reader View.
           */
          this.readerurlintitle = "false";
        }
      };
      platform_defaults = {
        win: {
          browsermaps: {
            "<C-6>": null,
            "<A-6>": "buffer #"
          },
          // typescript doesn't like me adding new binds like this
          nmaps: {
            "<C-6>": "buffer #"
          },
          imaps: {
            "<C-6>": "buffer #"
          },
          inputmaps: {
            "<C-6>": "buffer #"
          },
          ignoremaps: {
            "<C-6>": "buffer #"
          },
          nativeinstallcmd: `powershell -ExecutionPolicy Bypass -NoProfile -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12;(New-Object System.Net.WebClient).DownloadFile('https://raw.githubusercontent.com/tridactyl/native_messenger/master/installers/windows.ps1', '%TEMP%/tridactyl_installnative.ps1');& '%TEMP%/tridactyl_installnative.ps1' -Tag %TAG;Remove-Item '%TEMP%/tridactyl_installnative.ps1'"`,
          downloadforbiddenchars: "#%&{}\\<>*?/$!'\":@+`|=",
          downloadforbiddennames: "CON, PRN, AUX, NUL, COM1, COM2,COM3, COM4, COM5, COM6, COM7, COM8, COM9, LPT1,LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9,"
        },
        linux: {
          nmaps: {
            ";x": 'hint -F e => { const pos = tri.dom.getAbsoluteCentre(e); tri.excmds.exclaim_quiet("xdotool mousemove --sync " + window.devicePixelRatio * pos.x + " " + window.devicePixelRatio * pos.y + "; xdotool click 1")}',
            ";X": 'hint -F e => { const pos = tri.dom.getAbsoluteCentre(e); tri.excmds.exclaim_quiet("xdotool mousemove --sync " + window.devicePixelRatio * pos.x + " " + window.devicePixelRatio * pos.y + "; xdotool keydown ctrl+shift; xdotool click 1; xdotool keyup ctrl+shift")}'
          }
        }
      };
      keyboardlayouts = {
        qwerty: {
          KeyA: ["a", "A"],
          KeyB: ["b", "B"],
          KeyC: ["c", "C"],
          KeyD: ["d", "D"],
          KeyE: ["e", "E"],
          KeyF: ["f", "F"],
          KeyG: ["g", "G"],
          KeyH: ["h", "H"],
          KeyI: ["i", "I"],
          KeyJ: ["j", "J"],
          KeyK: ["k", "K"],
          KeyL: ["l", "L"],
          KeyM: ["m", "M"],
          KeyN: ["n", "N"],
          KeyO: ["o", "O"],
          KeyP: ["p", "P"],
          KeyQ: ["q", "Q"],
          KeyR: ["r", "R"],
          KeyS: ["s", "S"],
          KeyT: ["t", "T"],
          KeyU: ["u", "U"],
          KeyV: ["v", "V"],
          KeyW: ["w", "W"],
          KeyX: ["x", "X"],
          KeyY: ["y", "Y"],
          KeyZ: ["z", "Z"],
          Digit0: ["0", ")"],
          Digit1: ["1", "!"],
          Digit2: ["2", "@"],
          Digit3: ["3", "#"],
          Digit4: ["4", "$"],
          Digit5: ["5", "%"],
          Digit6: ["6", "^"],
          Digit7: ["7", "&"],
          Digit8: ["8", "*"],
          Digit9: ["9", "("],
          Equal: ["=", "+"],
          Backquote: ["`", "~"],
          Backslash: ["\\", "|"],
          Period: [".", ">"],
          Comma: [",", "<"],
          Semicolon: [";", ":"],
          Slash: ["/", "?"],
          BracketLeft: ["[", "{"],
          BracketRight: ["]", "}"],
          Quote: ["'", '"'],
          Minus: ["-", "_"]
        },
        azerty: {
          Backquote: ["\xB2", "\xB2"],
          Digit1: ["&", "1"],
          Digit2: ["\xE9", "2"],
          Digit3: ['"', "3"],
          Digit4: ["'", "4"],
          Digit5: ["(", "5"],
          Digit6: ["-", "6"],
          Digit7: ["\xE8", "7"],
          Digit8: ["_", "8"],
          Digit9: ["\xE7", "9"],
          Digit0: ["\xE0", "0"],
          Minus: [")", "\xB0"],
          Equal: ["=", "+"],
          KeyQ: ["a", "A"],
          KeyW: ["z", "Z"],
          KeyE: ["e", "E"],
          KeyR: ["r", "R"],
          KeyT: ["t", "T"],
          KeyY: ["y", "Y"],
          KeyU: ["u", "U"],
          KeyI: ["i", "I"],
          KeyO: ["o", "O"],
          KeyP: ["p", "P"],
          BracketRight: ["$", "\xA3"],
          Backslash: ["*", "\xB5"],
          KeyA: ["q", "Q"],
          KeyS: ["s", "S"],
          KeyD: ["d", "D"],
          KeyF: ["f", "F"],
          KeyG: ["g", "G"],
          KeyH: ["h", "H"],
          KeyJ: ["j", "J"],
          KeyK: ["k", "K"],
          KeyL: ["l", "L"],
          Semicolon: ["m", "M"],
          Quote: ["\xF9", "%"],
          KeyZ: ["w", "W"],
          KeyX: ["x", "X"],
          KeyC: ["c", "C"],
          KeyV: ["v", "V"],
          KeyB: ["b", "B"],
          KeyN: ["n", "N"],
          KeyM: [",", "?"],
          Comma: [";", "."],
          Period: [":", "/"],
          Slash: ["!", "\xA7"]
        },
        german: {
          Digit1: ["1", "!"],
          Digit2: ["2", '"'],
          Digit3: ["3", "\xA7"],
          Digit4: ["4", "$"],
          Digit5: ["5", "%"],
          Digit6: ["6", "&"],
          Digit7: ["7", "/"],
          Digit8: ["8", "("],
          Digit9: ["9", ")"],
          Digit0: ["0", "="],
          Minus: ["\xDF", "?"],
          KeyQ: ["q", "Q"],
          KeyW: ["w", "W"],
          KeyE: ["e", "E"],
          KeyR: ["r", "R"],
          KeyT: ["t", "T"],
          KeyY: ["z", "Z"],
          KeyU: ["u", "U"],
          KeyI: ["i", "I"],
          KeyO: ["o", "O"],
          KeyP: ["p", "P"],
          BracketLeft: ["\xFC", "\xDC"],
          BracketRight: ["+", "*"],
          Backslash: ["#", "'"],
          KeyA: ["a", "A"],
          KeyS: ["s", "S"],
          KeyD: ["d", "D"],
          KeyF: ["f", "F"],
          KeyG: ["g", "G"],
          KeyH: ["h", "H"],
          KeyJ: ["j", "J"],
          KeyK: ["k", "K"],
          KeyL: ["l", "L"],
          Semicolon: ["\xF6", "\xD6"],
          Quote: ["\xE4", "\xC4"],
          KeyZ: ["y", "Y"],
          KeyX: ["x", "X"],
          KeyC: ["c", "C"],
          KeyV: ["v", "V"],
          KeyB: ["b", "B"],
          KeyN: ["n", "N"],
          KeyM: ["m", "M"],
          Comma: [",", ";"],
          Period: [".", ":"],
          Slash: ["-", "_"],
          Backquote: ["", "\xB0"]
        },
        dvorak: {
          Backquote: ["`", "~"],
          Digit1: ["1", "!"],
          Digit2: ["2", "@"],
          Digit3: ["3", "#"],
          Digit4: ["4", "$"],
          Digit5: ["5", "%"],
          Digit6: ["6", "^"],
          Digit7: ["7", "&"],
          Digit8: ["8", "*"],
          Digit9: ["9", "("],
          Digit0: ["0", ")"],
          Minus: ["[", "{"],
          Equal: ["]", "}"],
          KeyQ: ["'", '"'],
          KeyW: [",", "<"],
          KeyE: [".", ">"],
          KeyR: ["p", "P"],
          KeyT: ["y", "Y"],
          KeyY: ["f", "F"],
          KeyU: ["g", "G"],
          KeyI: ["c", "C"],
          KeyO: ["r", "R"],
          KeyP: ["l", "L"],
          BracketLeft: ["/", "?"],
          BracketRight: ["=", "+"],
          Backslash: ["\\", "|"],
          KeyA: ["a", "A"],
          KeyS: ["o", "O"],
          KeyD: ["e", "E"],
          KeyF: ["u", "U"],
          KeyG: ["i", "I"],
          KeyH: ["d", "D"],
          KeyJ: ["h", "H"],
          KeyK: ["t", "T"],
          KeyL: ["n", "N"],
          Semicolon: ["s", "S"],
          Quote: ["-", "_"],
          KeyZ: [";", ":"],
          KeyX: ["q", "Q"],
          KeyC: ["j", "J"],
          KeyV: ["k", "K"],
          KeyB: ["x", "X"],
          KeyN: ["b", "B"],
          KeyM: ["m", "M"],
          Comma: ["w", "W"],
          Period: ["v", "V"],
          Slash: ["z", "Z"]
        },
        uk: {
          Digit1: ["1", "!"],
          Digit2: ["2", '"'],
          Digit3: ["3", "\xA3"],
          Digit4: ["4", "$"],
          Digit5: ["5", "%"],
          Digit6: ["6", "^"],
          Digit7: ["7", "&"],
          Digit8: ["8", "*"],
          Digit9: ["9", "("],
          Digit0: ["0", ")"],
          Minus: ["-", "_"],
          Equal: ["=", "+"],
          KeyQ: ["q", "Q"],
          KeyW: ["w", "W"],
          KeyE: ["e", "E"],
          KeyR: ["r", "R"],
          KeyT: ["t", "T"],
          KeyY: ["y", "Y"],
          KeyU: ["u", "U"],
          KeyI: ["i", "I"],
          KeyO: ["o", "O"],
          KeyP: ["p", "P"],
          BracketLeft: ["[", "{"],
          KeyK: ["k", "K"],
          BracketRight: ["]", "}"],
          KeyA: ["a", "A"],
          KeyS: ["s", "S"],
          KeyD: ["d", "D"],
          KeyF: ["f", "F"],
          KeyG: ["g", "G"],
          KeyH: ["h", "H"],
          KeyJ: ["j", "J"],
          Semicolon: [";", ":"],
          Quote: ["'", "@"],
          Backslash: ["#", "~"],
          IntlBackslash: ["\\", "|"],
          KeyZ: ["z", "Z"],
          KeyX: ["x", "X"],
          KeyC: ["c", "C"],
          KeyV: ["v", "V"],
          KeyB: ["b", "B"],
          KeyN: ["n", "N"],
          KeyM: ["m", "M"],
          Period: [".", ">"],
          Slash: ["/", "?"],
          Backquote: ["`", "\xAC"],
          KeyL: ["l", "L"],
          Comma: [",", "<"]
        },
        ca: {
          Backquote: ["#", "|"],
          Digit1: ["1", "!"],
          Digit2: ["2", '"'],
          Digit3: ["3", "/"],
          Digit4: ["4", "$"],
          Digit5: ["5", "%"],
          Digit6: ["6", "?"],
          Digit7: ["7", "&"],
          Digit8: ["8", "*"],
          Digit9: ["9", "("],
          Digit0: ["0", ")"],
          Minus: ["-", "_"],
          Equal: ["=", "+"],
          KeyQ: ["q", "Q"],
          KeyW: ["w", "W"],
          KeyE: ["e", "E"],
          KeyR: ["r", "R"],
          KeyT: ["t", "T"],
          KeyY: ["y", "Y"],
          KeyU: ["u", "U"],
          KeyI: ["i", "I"],
          KeyO: ["o", "O"],
          KeyP: ["p", "P"],
          KeyA: ["a", "A"],
          KeyS: ["s", "S"],
          KeyD: ["d", "D"],
          KeyF: ["f", "F"],
          KeyG: ["g", "G"],
          KeyH: ["h", "H"],
          KeyJ: ["j", "J"],
          KeyK: ["k", "K"],
          KeyL: ["l", "L"],
          Semicolon: [";", ":"],
          Backslash: ["<", ">"],
          IntlBackslash: ["\xAB", "\xBB"],
          KeyZ: ["z", "Z"],
          KeyX: ["x", "X"],
          KeyC: ["c", "C"],
          KeyV: ["v", "V"],
          KeyB: ["b", "B"],
          KeyN: ["n", "N"],
          KeyM: ["m", "M"],
          Comma: [",", "'"],
          Period: [".", "."],
          Slash: ["\xE9", "\xC9"]
        },
        bepo: {
          Backquote: ["$", "#"],
          Digit1: ['"', "1"],
          Digit2: ["\xAB", "2"],
          Digit3: ["\xBB", "3"],
          Digit4: ["(", "4"],
          Digit5: [")", "5"],
          Digit6: ["@", "6"],
          Digit7: ["+", "7"],
          Digit8: ["-", "8"],
          Digit9: ["/", "9"],
          Digit0: ["*", "0"],
          Minus: ["=", "\xB0"],
          Equal: ["%", "`"],
          KeyQ: ["b", "B"],
          KeyW: ["\xE9", "\xC9"],
          KeyE: ["p", "P"],
          KeyR: ["o", "O"],
          KeyT: ["\xE8", "\xC8"],
          KeyU: ["v", "V"],
          KeyI: ["d", "D"],
          KeyO: ["l", "L"],
          KeyP: ["j", "J"],
          BracketLeft: ["z", "Z"],
          BracketRight: ["w", "W"],
          KeyA: ["a", "A"],
          KeyS: ["u", "U"],
          KeyD: ["i", "I"],
          KeyF: ["e", "E"],
          KeyG: [",", ";"],
          KeyH: ["c", "C"],
          KeyJ: ["t", "T"],
          KeyK: ["s", "S"],
          KeyL: ["r", "R"],
          Semicolon: ["n", "N"],
          Quote: ["m", "M"],
          Backslash: ["\xE7", "\xC7"],
          IntlBackslash: ["\xEA", "\xCA"],
          KeyZ: ["\xE0", "\xC0"],
          KeyX: ["y", "Y"],
          KeyC: ["x", "X"],
          KeyV: [".", ":"],
          KeyB: ["k", "K"],
          KeyN: ["'", "?"],
          KeyM: ["q", "Q"],
          Comma: ["g", "G"],
          Period: ["h", "H"],
          Slash: ["f", "F"],
          KeyY: ["", "!"]
        }
      };
      mergeDeepCull = pipe(mergeDeep, removeNull);
      DEFAULTS = mergeDeepCull(
        o3(new default_config()),
        platform_defaults[getPlatformOs()]
      );
      changeListeners = /* @__PURE__ */ new Map();
      parseConfigHelper = (pconf, parseobj, prefix = []) => {
        for (const i2 of Object.keys(pconf)) {
          if (typeof pconf[i2] !== "object") {
            if (prefix[0] === "subconfigs") {
              const pattern = prefix[1];
              const subconf = [...prefix.slice(2), i2].join(".");
              parseobj.subconfigs.push(
                `seturl ${pattern} ${subconf} ${pconf[i2]}`
              );
            } else {
              parseobj.conf.push(
                `set ${[...prefix, i2].join(".")} ${pconf[i2]}`
              );
            }
          } else if (pconf[i2] === null) {
            parseobj.nulls.push(`setnull ${[...prefix, i2].join(".")}`);
          } else {
            for (const e2 of Object.keys(pconf[i2])) {
              if (modeMaps.includes(i2)) {
                let cmd = "bind";
                if (prefix[0] === "subconfigs")
                  cmd = cmd + "url " + prefix[1];
                if (i2 !== "nmaps") {
                  const mode2 = maps2mode.get(i2);
                  cmd += ` --mode=${mode2}`;
                }
                if (pconf[i2][e2] === null) {
                  parseobj.binds.push(`un${cmd} ${e2}`);
                  continue;
                }
                if (pconf[i2][e2].length > 0) {
                  parseobj.binds.push(`${cmd} ${e2} ${pconf[i2][e2]}`);
                } else {
                  parseobj.binds.push(`un${cmd} ${e2}`);
                }
              } else if (pconf[i2][e2] === null) {
                parseobj.nulls.push(`setnull ${i2}.${e2}`);
              } else if (i2 === "exaliases") {
                if (e2 === "alias") {
                  parseobj.aliases.push(`command ${e2} ${pconf[i2][e2]}`);
                } else {
                  parseobj.aliases.push(`alias ${e2} ${pconf[i2][e2]}`);
                }
              } else if (i2 === "autocmds") {
                for (const a of Object.keys(pconf[i2][e2])) {
                  parseobj.aucmds.push(
                    `autocmd ${e2} ${a} ${pconf[i2][e2][a]}`
                  );
                }
              } else if (i2 === "autocontain") {
                parseobj.aucons.push(`autocontain ${e2} ${pconf[i2][e2]}`);
              } else if (i2 === "logging") {
                let level;
                if (pconf[i2][e2] === 0)
                  level = "never";
                if (pconf[i2][e2] === 1)
                  level = "error";
                if (pconf[i2][e2] === 2)
                  level = "warning";
                if (pconf[i2][e2] === 3)
                  level = "info";
                if (pconf[i2][e2] === 4)
                  level = "debug";
                parseobj.logging.push(`set logging.${e2} ${level}`);
              } else if (i2 === "customthemes") {
              } else {
                parseConfigHelper(pconf[i2], parseobj, [...prefix, i2]);
                break;
              }
            }
          }
        }
        return parseobj;
      };
      browser.storage.onChanged.addListener((changes, areaname) => {
        if (CONFIGNAME in changes) {
          let triggerChangeListeners2 = function(key, value = newValue[key]) {
            const arr = changeListeners.get(key);
            if (arr) {
              const v = old[key] === void 0 ? DEFAULTS[key] : old[key];
              arr.forEach((f) => f(v, value));
            }
          };
          var triggerChangeListeners = triggerChangeListeners2;
          const { newValue, oldValue } = changes[CONFIGNAME];
          const old = oldValue || {};
          if (areaname === "sync") {
          } else if (newValue !== void 0) {
            const unsetKeys = Object.keys(old).filter(
              (k) => newValue[k] === void 0 && JSON.stringify(old[k]) !== JSON.stringify(DEFAULTS[k])
            );
            const changedKeys = Object.keys(newValue).filter(
              (k) => JSON.stringify(
                old[k] !== void 0 ? old[k] : DEFAULTS[k]
              ) !== JSON.stringify(newValue[k])
            );
            changedKeys.forEach((key) => USERCONFIG[key] = newValue[key]);
            unsetKeys.forEach((key) => delete USERCONFIG[key]);
            unsetKeys.forEach((key) => triggerChangeListeners2(key, DEFAULTS[key]));
            changedKeys.forEach((key) => triggerChangeListeners2(key));
          } else {
            USERCONFIG = o3({});
            Object.keys(old).filter((key) => old[key] !== DEFAULTS[key]).forEach((key) => triggerChangeListeners2(key));
          }
        }
      });
      init2();
    }
  });

  // src/lib/logging.ts
  var LevelToNum, Logger, logging_default;
  var init_logging = __esm({
    "src/lib/logging.ts"() {
      "use strict";
      init_config();
      LevelToNum = /* @__PURE__ */ new Map();
      LevelToNum.set("never", 0);
      LevelToNum.set("error", 1);
      LevelToNum.set("warning", 2);
      LevelToNum.set("info", 3);
      LevelToNum.set("debug", 4);
      Logger = class {
        /**
         * Config-aware Logger class.
         *
         * @param logModule     the logging module name: this is ued to look up the
         *                      configured/default level in the user config
         */
        constructor(logModule) {
          this.logModule = logModule;
        }
        /**
         * Config-aware logging function.
         *
         * @param level         the level of the logging - if <= configured, the message
         *                      will be shown
         *
         * @return              logging function: this is returned as a function to
         *                      retain the call site
         */
        log(level) {
          const configedLevel = get("logging", this.logModule);
          if (LevelToNum.get(level) <= LevelToNum.get(configedLevel)) {
            switch (level) {
              case "error":
                return async (...message2) => {
                  console.error(...message2);
                  return browser.runtime.sendMessage({
                    type: "controller_background",
                    command: "acceptExCmd",
                    args: [
                      "fillcmdline_nofocus # " + message2.join(" ")
                    ]
                  });
                };
              case "warning":
                return console.warn;
              case "info":
                return console.log;
              case "debug":
                return console.debug;
            }
          }
          return function() {
          };
        }
        // These are all getters so that logger.debug = console.debug and
        // logger.debug('blah') translates into console.debug('blah') with the
        // filename and line correct.
        get debug() {
          return this.log("debug");
        }
        get info() {
          return this.log("info");
        }
        get warning() {
          return this.log("warning");
        }
        get error() {
          return this.log("error");
        }
      };
      logging_default = Logger;
    }
  });

  // src/content/state_content.ts
  function addContentStateChangedListener(callback) {
    onChangedListeners.push(callback);
  }
  var logger, onChangedListeners, contentState;
  var init_state_content = __esm({
    "src/content/state_content.ts"() {
      "use strict";
      init_logging();
      logger = new logging_default("state");
      onChangedListeners = [];
      contentState = new Proxy(
        { mode: "normal" },
        {
          get(target, property) {
            return target[property];
          },
          set(target, property, newValue) {
            logger.debug("Content state changed!", property, newValue);
            const oldValue = target[property];
            const mode2 = target.mode;
            target[property] = newValue;
            for (const listener of onChangedListeners) {
              listener(property, mode2, oldValue, newValue);
            }
            return true;
          }
        }
      );
    }
  });

  // src/lib/convert.ts
  var convert_exports = {};
  __export(convert_exports, {
    toBoolean: () => toBoolean,
    toNumber: () => toNumber
  });
  function toBoolean(s) {
    if (s === "true")
      return true;
    else if (s === "false")
      return false;
    else
      throw new Error("Not a boolean");
  }
  function toNumber(s) {
    const n2 = Number(s);
    if (isNaN(n2))
      throw new Error("Not a number! " + s);
    else
      return n2;
  }
  var init_convert = __esm({
    "src/lib/convert.ts"() {
      "use strict";
    }
  });

  // src/lib/browser_proxy.ts
  var browserProxy, browser_proxy_default;
  var init_browser_proxy = __esm({
    "src/lib/browser_proxy.ts"() {
      "use strict";
      init_messaging();
      browserProxy = new Proxy(/* @__PURE__ */ Object.create(null), {
        get(target, api) {
          return new Proxy(
            {},
            {
              get(_, func) {
                return (...args2) => message(
                  "browser_proxy_background",
                  "shim",
                  api,
                  func,
                  args2
                );
              }
            }
          );
        }
      });
      browser_proxy_default = browserProxy;
    }
  });

  // src/lib/url_util.ts
  var url_util_exports = {};
  __export(url_util_exports, {
    deleteQuery: () => deleteQuery,
    getAbsoluteURL: () => getAbsoluteURL,
    getDownloadFilenameForUrl: () => getDownloadFilenameForUrl,
    getUrlParent: () => getUrlParent,
    getUrlRoot: () => getUrlRoot,
    graftUrlPath: () => graftUrlPath,
    incrementUrl: () => incrementUrl,
    interpolateSearchItem: () => interpolateSearchItem,
    replaceQueryValue: () => replaceQueryValue,
    setQueryValue: () => setQueryValue
  });
  function incrementUrl(url, count2) {
    const url_en = decodeURI(url);
    const regex = /(.*?)(\d+)(\D*)$/;
    const matches = regex.exec(url_en);
    if (matches === null) {
      return null;
    }
    const [, pre, number, post] = matches;
    const newNumber = parseInt(number, 10) + count2;
    let newNumberStr = String(newNumber > 0 ? newNumber : 0);
    if (/^0/.exec(number)) {
      while (newNumberStr.length < number.length) {
        newNumberStr = "0" + newNumberStr;
      }
    }
    return encodeURI(pre + newNumberStr + post);
  }
  function getUrlRoot(url) {
    if (/(about|mailto):/.test(url.protocol)) {
      return null;
    }
    return new URL(url.protocol + "//" + (url.host || ""));
  }
  function getUrlParent(url, trailingSlash, count2 = 1) {
    function gup(parent2, trailingSlash2, count3) {
      if (count3 < 1) {
        if (!trailingSlash2) {
          parent2.pathname = parent2.pathname.replace(/\/+$/, "");
        }
        return parent2;
      }
      if (parent2.hash) {
        parent2.hash = "";
        return gup(parent2, trailingSlash2, count3 - 1);
      }
      if (parent2.search) {
        parent2.search = "";
        return gup(parent2, trailingSlash2, count3 - 1);
      }
      if (parent2.pathname !== "/") {
        parent2.pathname = parent2.pathname.replace(/\/[^\/]*?\/*$/, "/");
        return gup(parent2, trailingSlash2, count3 - 1);
      }
      {
        const domains = parent2.host.split(".");
        if (domains.length > 2) {
          parent2.host = domains.slice(1).join(".");
          return gup(parent2, trailingSlash2, count3 - 1);
        }
      }
      return null;
    }
    if (/(about|mailto):/.test(url.protocol)) {
      return null;
    }
    const parent = new URL(url);
    return gup(parent, trailingSlash, count2);
  }
  function getExtensionForMimetype(mime) {
    const types = {
      "image/png": ".png",
      "image/jpeg": ".jpg",
      "image/gif": ".gif",
      "image/x-icon": ".ico",
      "image/svg+xml": ".svg",
      "image/tiff": ".tiff",
      "image/webp": ".webp",
      "text/plain": ".txt",
      "text/html": ".html",
      "text/css": ".css",
      "text/csv": ".csv",
      "text/calendar": ".ics",
      "application/octet-stream": ".bin",
      "application/javascript": ".js",
      "application/xhtml+xml": ".xhtml",
      "font/otf": ".otf",
      "font/woff": ".woff",
      "font/woff2": ".woff2",
      "font/ttf": ".ttf"
    };
    return types[mime] || "";
  }
  function getDownloadFilenameForUrl(url) {
    if (url.protocol === "data:") {
      const [prefix, data] = url.pathname.split(",", 2);
      const [mediatype, b64] = prefix.split(";", 2);
      let filename = data.slice(0, 15).replace(/[^a-zA-Z0-9_\-]/g, "_").replace(/_{2,}/g, "_");
      filename = (b64 ? b64 + "-" : "") + filename + getExtensionForMimetype(mediatype);
      return filename;
    }
    if (url.pathname !== "/") {
      const paths3 = url.pathname.split("/").slice(1);
      while (paths3.length && !paths3[paths3.length - 1]) {
        paths3.pop();
      }
      if (paths3.length) {
        return paths3.slice(-1)[0];
      }
    }
    return url.hostname || "download";
  }
  function getUrlQueries(url) {
    let qys = [];
    if (url.search) {
      qys = url.search.slice(1).split("&");
    }
    return qys;
  }
  function setUrlQueries(url, qys) {
    url.search = "";
    if (qys.length) {
      url.search = "?" + qys.join("&");
    }
  }
  function deleteQuery(url, matchQuery) {
    const newUrl = new URL(url.href);
    const qys = getUrlQueries(url);
    const new_qys = qys.filter((q) => q.split("=")[0] !== matchQuery);
    setUrlQueries(newUrl, new_qys);
    return newUrl;
  }
  function setQueryValue(url, matchQuery, value) {
    const newUrl = new URL(url.href);
    const qys = getUrlQueries(url);
    if (qys.map((q) => q.split("=")[0]).includes(matchQuery)) {
      return replaceQueryValue(url, matchQuery, value);
    }
    qys.push(matchQuery + "=" + value);
    setUrlQueries(newUrl, qys);
    return newUrl;
  }
  function replaceQueryValue(url, matchQuery, newVal) {
    const newUrl = new URL(url.href);
    const qys = getUrlQueries(url);
    const new_qys = qys.map((q) => {
      const [key] = q.split("=");
      if (q.split("=")[0] === matchQuery) {
        if (newVal) {
          return key + "=" + newVal;
        } else {
          return key;
        }
      }
      return q;
    });
    setUrlQueries(newUrl, new_qys);
    return newUrl;
  }
  function graftUrlPath(url, newTail, level) {
    const newUrl = new URL(url.href);
    const pathParts = url.pathname.split("/").splice(1);
    if (level >= 0 && level > pathParts.length || level < 0 && -level - 1 > pathParts.length) {
      return null;
    }
    const graftPoint = level >= 0 ? level : pathParts.length + level + 1;
    pathParts.splice(graftPoint, pathParts.length - graftPoint);
    pathParts.push(...newTail.split("/"));
    newUrl.pathname = pathParts.join("/");
    return newUrl;
  }
  function interpolateSearchItem(urlPattern, query2) {
    const hasInterpolationPoint = urlPattern.href.includes("%s");
    let queryWords = query2.split(" ");
    if (hasInterpolationPoint && urlPattern.search.includes("%s") || urlPattern.search !== "") {
      query2 = encodeURIComponent(query2);
      queryWords = queryWords.map((w) => encodeURIComponent(w));
    }
    if (hasInterpolationPoint) {
      const resultingURL = new URL(
        urlPattern.href.replace(/%s\d+/g, function(x) {
          const index2 = parseInt(x.slice(2), 10) - 1;
          if (index2 >= queryWords.length) {
            return "";
          }
          return queryWords[index2];
        }).replace(/%s\[(-?\d+)?:(-?\d+)?\]/g, function(match3, p1, p2) {
          const l2 = (x) => x >= 1 ? x - 1 : x;
          const start = p1 ? l2(parseInt(p1, 10)) : 0;
          const slice3 = p2 ? queryWords.slice(start, l2(parseInt(p2, 10))) : queryWords.slice(start);
          return slice3.join(" ");
        })
      );
      return new URL(resultingURL.href.replace("%s", query2));
    } else {
      return new URL(urlPattern.href + query2);
    }
  }
  function getAbsoluteURL(url, baseURI = document.baseURI) {
    return new URL(url, baseURI).href;
  }
  var init_url_util = __esm({
    "src/lib/url_util.ts"() {
      "use strict";
    }
  });

  // src/lib/patience.ts
  var sleep;
  var init_patience = __esm({
    "src/lib/patience.ts"() {
      "use strict";
      sleep = (duration) => new Promise((res) => setTimeout(res, duration));
    }
  });

  // src/lib/webext.ts
  var webext_exports = {};
  __export(webext_exports, {
    activeTab: () => activeTab,
    activeTabContainer: () => activeTabContainer,
    activeTabContainerId: () => activeTabContainerId,
    activeTabId: () => activeTabId,
    activeWindowId: () => activeWindowId,
    browserBg: () => browserBg,
    firefoxVersionAtLeast: () => firefoxVersionAtLeast,
    getContext: () => getContext,
    getPrettyTriVersion: () => getPrettyTriVersion,
    getSortedTabs: () => getSortedTabs,
    getTriVersion: () => getTriVersion,
    getWinIdFromIndex: () => getWinIdFromIndex,
    goToTab: () => goToTab,
    inContentScript: () => inContentScript,
    notBackground: () => notBackground,
    openInNewTab: () => openInNewTab,
    openInNewWindow: () => openInNewWindow,
    openInTab: () => openInTab,
    ownTab: () => ownTab,
    ownTabContainer: () => ownTabContainer,
    ownTabId: () => ownTabId,
    ownWinTriIndex: () => ownWinTriIndex,
    prevActiveTab: () => prevActiveTab,
    queryAndURLwrangler: () => queryAndURLwrangler,
    removeActiveWindowValue: () => removeActiveWindowValue
  });
  async function getSortedTabs(forceSort) {
    const sortAlg = forceSort != null ? forceSort : get("tabsort");
    const comp = sortAlg === "mru" ? (a, b) => +a.active || -b.active || b.lastAccessed - a.lastAccessed : (a, b) => a.index - b.index;
    const hiddenVal = get("tabshowhidden") === "true" ? void 0 : false;
    return browserBg.tabs.query({
      currentWindow: true,
      hidden: hiddenVal
    }).then((tabs) => tabs.sort(comp));
  }
  function inContentScript() {
    return getContext() === "content";
  }
  function getTriVersion() {
    const manifest = browser.runtime.getManifest();
    return manifest.version_name;
  }
  function getPrettyTriVersion() {
    const manifest = browser.runtime.getManifest();
    return manifest.name + " " + getTriVersion();
  }
  function notBackground() {
    return getContext() !== "background";
  }
  function getContext() {
    if (!browser.tabs) {
      return "content";
    } else if (browser.runtime.getURL("_generated_background_page.html") === window.location.href) {
      return "background";
    } else {
      return "extension";
    }
  }
  async function activeTab() {
    return (await browserBg.tabs.query({
      active: true,
      currentWindow: true
    }))[0];
  }
  async function activeTabId() {
    return (await activeTab()).id;
  }
  async function prevActiveTab() {
    const tabs = (await browserBg.tabs.query({
      currentWindow: true
    })).sort((a, b) => b.lastAccessed - a.lastAccessed);
    if (tabs.length > 1)
      return tabs[1];
    return tabs[0];
  }
  async function activeWindowId() {
    return (await browserBg.windows.getCurrent()).id;
  }
  async function removeActiveWindowValue(value) {
    browserBg.sessions.removeWindowValue(await activeWindowId(), value);
  }
  async function activeTabContainerId() {
    return (await activeTab()).cookieStoreId;
  }
  async function ownTab() {
    return browser.runtime.sendMessage({ type: "owntab_background" });
  }
  async function ownTabId() {
    return (await ownTab()).id;
  }
  async function windows() {
    return (await browserBg.windows.getAll()).map((w) => w.id).sort((a, b) => a - b);
  }
  async function ownWinTriIndex() {
    return (await windows()).indexOf((await ownTab()).windowId);
  }
  async function getWinIdFromIndex(index2) {
    return (await windows())[index2];
  }
  async function ownTabContainer() {
    return browserBg.contextualIdentities.get((await ownTab()).cookieStoreId);
  }
  async function activeTabContainer() {
    const containerId = await activeTabContainerId();
    if (containerId !== "firefox-default")
      return browserBg.contextualIdentities.get(containerId);
    else
      throw new Error(
        "firefox-default is not a valid contextualIdentity (activeTabContainer)"
      );
  }
  async function firefoxVersionAtLeast(desiredmajor) {
    const versionstr = (await browserBg.runtime.getBrowserInfo()).version;
    const actualmajor = toNumber(versionstr.split(".")[0]);
    return actualmajor >= desiredmajor;
  }
  async function openInNewTab(url, kwargs = {
    active: true,
    related: false,
    cookieStoreId: void 0,
    bypassFocusHack: false,
    discarded: false
  }, waitForDOM = false) {
    kwargs = mergeLeft_default(kwargs, {
      active: true,
      related: false,
      cookieStoreId: void 0,
      bypassFocusHack: false,
      discarded: false
    });
    const thisTab = await activeTab();
    const options = {
      active: kwargs.bypassFocusHack,
      url,
      cookieStoreId: kwargs.cookieStoreId,
      discarded: kwargs.discarded
    };
    let pos;
    if (kwargs.related)
      pos = get("relatedopenpos");
    else
      pos = get("tabopenpos");
    switch (pos) {
      case "next":
        options.index = thisTab.index + 1;
        if (kwargs.related && await firefoxVersionAtLeast(57))
          options.openerTabId = thisTab.id;
        break;
      case "last":
        options.index = (await browserBg.tabs.query({
          currentWindow: true
        })).length;
        break;
      case "related":
        if (await firefoxVersionAtLeast(57)) {
          options.openerTabId = thisTab.id;
        } else {
          options.index = thisTab.index + 1;
        }
        break;
    }
    const tabCreateWrapper = async (options2) => {
      const tab2 = await browserBg.tabs.create(options2);
      const answer = new Promise((resolve2) => {
        if (waitForDOM) {
          const listener = (message2, sender) => {
            var _a;
            if (message2 === "dom_loaded_background" && ((_a = sender == null ? void 0 : sender.tab) == null ? void 0 : _a.id) === tab2.id) {
              browserBg.runtime.onMessage.removeListener(listener);
              resolve2(tab2);
            }
          };
          browserBg.runtime.onMessage.addListener(listener);
        } else {
          resolve2(tab2);
        }
      });
      return Promise.race([
        answer,
        (async () => {
          await sleep(750);
          return tab2;
        })()
      ]);
    };
    if (kwargs.active === false) {
      return tabCreateWrapper(options);
    } else {
      return tabCreateWrapper(options).then(
        (newtab) => browserBg.tabs.update(newtab.id, { active: true })
      );
    }
  }
  function openInNewWindow(createData = {}) {
    browserBg.windows.create(createData);
  }
  async function queryAndURLwrangler(query) {
    let address = query.join(" ");
    if (address === "") {
      address = get("newtab");
    }
    if (address === "about:newtab") {
      return void 0;
    }
    const index = address.indexOf(" ");
    let firstWord = address;
    if (index > -1)
      firstWord = address.substr(0, index);
    if (firstWord === "") {
      return void 0;
    }
    if (/^[a-zA-Z0-9+.-]+:[^\s:]/.test(address)) {
      try {
        return new URL(address).href;
      } catch (e2) {
      }
    }
    const rest = address.substr(firstWord.length + 1);
    const expandRecursively = (name, dict, prevExpansions = []) => {
      if (name in dict) {
        if (prevExpansions.includes(name)) {
          throw new Error(
            `Infinite loop detected while expanding ${name}. Stack: ${prevExpansions}.`
          );
        }
        prevExpansions.push(name);
        return expandRecursively(dict[name], dict, prevExpansions);
      }
      return name;
    };
    const searchurls = get("searchurls");
    const template = expandRecursively(firstWord, searchurls);
    if (template != firstWord) {
      const url = interpolateSearchItem(new URL(template), rest);
      return url.href;
    }
    const jsurls = get("jsurls");
    const js = expandRecursively(firstWord, jsurls);
    if (js != firstWord) {
      return eval(js)(rest);
    }
    const searchEngines = await browserBg.search.get();
    let engine = searchEngines.find((engine2) => engine2.alias === firstWord);
    if (engine !== void 0) {
      return { engine: engine.name, query: rest };
    }
    try {
      const url = new URL("http://" + address);
      if (url.hostname.indexOf(".") > 0 || url.port || url.password) {
        return url.href;
      }
    } catch (e2) {
    }
    let queryString = address;
    if (firstWord === "search") {
      queryString = rest;
    }
    const enginename = get("searchengine");
    if (enginename) {
      if (searchurls[enginename]) {
        const url = interpolateSearchItem(
          new URL(searchurls[enginename]),
          queryString
        );
        return url.href;
      }
      engine = searchEngines.find((engine2) => engine2.alias === enginename);
      if (engine !== void 0) {
        return { engine: engine.name, query: queryString };
      }
    }
    return { query: queryString };
  }
  async function openInTab(tab2, opts2 = {}, strarr) {
    const maybeURL = await queryAndURLwrangler(strarr);
    if (typeof maybeURL === "string") {
      return browserBg.tabs.update(
        tab2.id,
        Object.assign({ url: maybeURL }, opts2)
      );
    }
    if (typeof maybeURL === "object") {
      return browserBg.search.search({ tabId: tab2.id, ...maybeURL });
    }
    return browserBg.tabs.update(
      tab2.id,
      Object.assign({ url: "/static/newtab.html" }, opts2)
    );
  }
  async function goToTab(tabId) {
    const tab2 = await browserBg.tabs.update(tabId, { active: true });
    await browserBg.windows.update(tab2.windowId, { focused: true });
    return tab2;
  }
  var browserBg;
  var init_webext = __esm({
    "src/lib/webext.ts"() {
      "use strict";
      init_convert();
      init_browser_proxy();
      init_config();
      init_url_util();
      init_patience();
      init_es();
      browserBg = inContentScript() ? browser_proxy_default : browser;
    }
  });

  // src/lib/messaging.ts
  var messaging_exports = {};
  __export(messaging_exports, {
    addListener: () => addListener,
    attributeCaller: () => attributeCaller,
    message: () => message,
    messageActiveTab: () => messageActiveTab,
    messageAllTabs: () => messageAllTabs,
    messageOwnTab: () => messageOwnTab,
    messageTab: () => messageTab,
    setupListener: () => setupListener
  });
  function attributeCaller(obj) {
    function handler(message2, sender, sendResponse) {
      logger2.debug(message2);
      if (message2.args === void 0)
        message2.args = [];
      try {
        const response = obj[message2.command](...message2.args);
        if (response instanceof Promise) {
          logger2.debug("Returning promise...", response);
          sendResponse(response);
        } else if (response !== void 0) {
          logger2.debug("Returning synchronously...", response);
          sendResponse(response);
        }
      } catch (e2) {
        logger2.error(
          `Error processing ${message2.command}(${message2.args})`,
          e2
        );
        return Promise.reject(e2);
      }
    }
    return handler;
  }
  function backgroundHandler(root, message2) {
    return root[message2.type][message2.command](...message2.args);
  }
  function setupListener(root) {
    browser.runtime.onMessage.addListener(
      (message2) => {
        if (message2.type in root) {
          if (!(message2.command in root[message2.type]))
            throw new Error(
              `missing handler in protocol ${message2.type} ${message2.command}`
            );
          if (!Array.isArray(message2.args))
            throw new Error(
              `wrong arguments in protocol ${message2.type} ${message2.command}`
            );
          return Promise.resolve(backgroundHandler(root, message2));
        }
      }
    );
  }
  async function message(type3, command2, ...args2) {
    const message2 = {
      type: type3,
      command: command2,
      args: args2
    };
    return browser.runtime.sendMessage(message2);
  }
  async function messageActiveTab(type3, command2, args2) {
    return messageTab(await activeTabId(), type3, command2, args2);
  }
  async function messageTab(tabId, type3, command2, args2) {
    const message2 = {
      type: type3,
      command: command2,
      args: args2
    };
    return browserBg.tabs.sendMessage(tabId, message2);
  }
  async function messageOwnTab(type3, command2, args2) {
    if (_ownTabId === void 0) {
      _ownTabId = await ownTabId();
    }
    if (_ownTabId === void 0)
      throw new Error("Can't message own tab: _ownTabId is undefined");
    return messageTab(_ownTabId, type3, command2, args2);
  }
  async function messageAllTabs(type3, command2, args2) {
    const responses = [];
    for (const tab2 of await browserBg.tabs.query({})) {
      try {
        responses.push(await messageTab(tab2.id, type3, command2, args2));
      } catch (e2) {
        if (e2.message != "Could not establish connection. Receiving end does not exist.") {
          logger2.error(e2);
        }
      }
    }
    return responses;
  }
  function addListener(type3, callback) {
    if (!listeners.get(type3)) {
      listeners.set(type3, /* @__PURE__ */ new Set());
    }
    listeners.get(type3).add(callback);
    return () => {
      listeners.get(type3).delete(callback);
    };
  }
  function onMessage(message2, sender, sendResponse) {
    if (listeners.get(message2.type)) {
      for (const listener of listeners.get(message2.type)) {
        listener(message2, sender, sendResponse);
      }
    }
  }
  var logger2, _ownTabId, listeners;
  var init_messaging = __esm({
    "src/lib/messaging.ts"() {
      "use strict";
      init_webext();
      init_logging();
      logger2 = new logging_default("messaging");
      listeners = /* @__PURE__ */ new Map();
      if (getContext() === "background") {
        addListener("owntab_background", (message2, sender, sendResponse) => {
          const x = Object.assign(/* @__PURE__ */ Object.create(null), sender.tab);
          x.mutedInfo = Object.assign(/* @__PURE__ */ Object.create(null), sender.tab.mutedInfo);
          x.sharingState = Object.assign(
            /* @__PURE__ */ Object.create(null),
            sender.tab.sharingState
          );
          sendResponse(Promise.resolve(x));
        });
      }
      browser.runtime.onMessage.addListener(onMessage);
    }
  });

  // src/state.ts
  var state_exports = {};
  __export(state_exports, {
    default: () => state,
    getAsync: () => getAsync2
  });
  async function getAsync2(property) {
    if (notBackground())
      return browser.runtime.sendMessage({
        type: "state",
        command: "stateGet",
        args: [{ prop: property }]
      });
    else
      return state[property];
  }
  var logger3, State, PERSISTENT_KEYS, defaults, overlay, state;
  var init_state = __esm({
    "src/state.ts"() {
      "use strict";
      init_logging();
      init_messaging();
      init_webext();
      init_es();
      logger3 = new logging_default("state");
      State = class {
        constructor() {
          this.lastSearchQuery = void 0;
          this.cmdHistory = [];
          this.prevInputs = [
            {
              inputId: void 0,
              tab: void 0,
              jumppos: void 0
            }
          ];
          this.last_ex_str = "echo";
          this.globalMarks = /* @__PURE__ */ new Map();
          this.localMarks = /* @__PURE__ */ new Map();
          this.beforeJumpMark = void 0;
        }
      };
      PERSISTENT_KEYS = ["cmdHistory", "globalMarks"];
      defaults = Object.freeze(new State());
      overlay = {};
      browser.storage.local.get("state").then((res) => {
        if ("state" in res) {
          logger3.debug("Loaded initial state:", res.state);
          Object.assign(overlay, res.state);
        }
      }).catch((...args2) => logger3.error(...args2));
      state = new Proxy(overlay, {
        /** Give defaults if overlay doesn't have the key */
        get(target, property) {
          if (notBackground())
            throw new Error(
              "State object must be accessed with getAsync in content"
            );
          if (property in target) {
            return target[property];
          } else {
            return defaults[property];
          }
        },
        set(target, property, value) {
          logger3.debug("State changed!", property, value);
          if (notBackground()) {
            const inIncognitoContext = browser.extension.inIncognitoContext;
            browser.runtime.sendMessage({
              type: "state",
              command: "stateUpdate",
              args: { property, value, inIncognitoContext }
            });
            return true;
          }
          target[property] = value;
          if (PERSISTENT_KEYS.includes(property)) {
            if (browser.extension.inIncognitoContext) {
              console.error(
                "Attempted to write to storage in private window."
              );
              return false;
            }
            browser.storage.local.set({
              state: pick_default(PERSISTENT_KEYS, target)
            });
          }
          return true;
        }
      });
      notBackground && !notBackground() && addListener("state", (message2, sender, sendResponse) => {
        if (message2.command == "stateUpdate") {
          const property = message2.args.property;
          const value = message2.args.value;
          const inIncognitoContext = message2.args.inIncognitoContext;
          if (inIncognitoContext) {
            console.error(
              "Attempted to write to storage in private window."
            );
            return;
          }
          logger3.debug("State changed!", property, value);
          state[property] = value;
        } else if (message2.command == "stateGet") {
          sendResponse(state[message2.args[0].prop]);
        } else
          throw new Error(
            "Unsupported message to state, type " + message2.command
          );
      });
    }
  });

  // src/lib/commandline_cmds.ts
  async function awaitProxyEq(proxy, a, b) {
    let counter = 0;
    while (proxy[a] != proxy[b] && counter < 50) {
      await sleep2(10);
      counter += 1;
    }
    return proxy[a] == proxy[b];
  }
  function getCommandlineFns(cmdline_state) {
    return {
      /**
       * Insert the first command line history line that starts with the content of the command line in the command line.
       */
      complete: async () => {
        const fragment = cmdline_state.clInput.value;
        const matches = (await getAsync2("cmdHistory")).filter(
          (key) => key.startsWith(fragment)
        );
        const mostrecent = matches[matches.length - 1];
        if (mostrecent !== void 0)
          cmdline_state.clInput.value = mostrecent;
        return cmdline_state.refresh_completions(
          cmdline_state.clInput.value
        );
      },
      /**
       * Selects the next completion.
       */
      next_completion: async () => {
        await awaitProxyEq(
          contentState,
          "current_cmdline",
          "cmdline_filter"
        );
        if (cmdline_state.activeCompletions)
          cmdline_state.activeCompletions.forEach((comp) => comp.next());
      },
      /**
       * Selects the previous completion.
       */
      prev_completion: async () => {
        await awaitProxyEq(
          contentState,
          "current_cmdline",
          "cmdline_filter"
        );
        if (cmdline_state.activeCompletions)
          cmdline_state.activeCompletions.forEach((comp) => comp.prev());
      },
      /**
       * Deselects the currently selected completion.
       */
      deselect_completion: () => {
        if (cmdline_state.activeCompletions)
          cmdline_state.activeCompletions.forEach((comp) => comp.deselect());
      },
      /**
       * Inserts the currently selected completion and a space in the command line.
       */
      insert_completion: async () => {
        await awaitProxyEq(
          contentState,
          "current_cmdline",
          "cmdline_filter"
        );
        const command2 = cmdline_state.getCompletion();
        if (cmdline_state.activeCompletions) {
          cmdline_state.activeCompletions.forEach(
            (comp) => comp.completion = void 0
          );
        }
        let result = Promise.resolve([]);
        if (command2) {
          cmdline_state.clInput.value = command2 + " ";
          result = cmdline_state.refresh_completions(
            cmdline_state.clInput.value
          );
        }
        return result;
      },
      /**
       * If a completion is selected, inserts it in the command line with a space.
       * If no completion is selected, inserts a space where the caret is.
       */
      insert_space_or_completion: () => {
        const command2 = cmdline_state.getCompletion();
        if (cmdline_state.activeCompletions) {
          cmdline_state.activeCompletions.forEach(
            (comp) => comp.completion = void 0
          );
        }
        if (command2) {
          cmdline_state.clInput.value = command2 + " ";
        } else {
          space(cmdline_state);
        }
        return cmdline_state.refresh_completions(
          cmdline_state.clInput.value
        );
      },
      /**
       * Insert a space
       */
      insert_space: () => {
        space(cmdline_state);
      },
      /** Hide the command line and cmdline_state.clear its content without executing it. **/
      hide_and_clear: () => {
        cmdline_state.clear(true);
        cmdline_state.keyEvents = [];
        messageOwnTab("commandline_content", "hide");
        messageOwnTab("commandline_content", "blur");
        if (cmdline_state.activeCompletions)
          cmdline_state.activeCompletions.forEach(
            (comp) => cmdline_state.completionsDiv.removeChild(comp.node)
          );
        cmdline_state.activeCompletions = void 0;
        cmdline_state.isVisible = false;
      },
      /**
       * Check if the command is valid
       */
      is_valid_commandline: (command2) => {
        if (command2 === void 0)
          return false;
        const func = command2.trim().split(/\s+/)[0];
        return !(func.length === 0 || func.startsWith("#"));
      },
      /**
       * Save non-secret commands to the cmdHistory and update the cmdline_history_position
       */
      store_ex_string: (command2) => {
        const [func, ...args2] = command2.trim().split(/\s+/);
        if (!browser.extension.inIncognitoContext && !(func === "winopen" && args2[0] === "-private")) {
          getAsync2("cmdHistory").then((c) => {
            cmdline_state.state.cmdHistory = c.concat([command2]);
          });
          cmdline_state.cmdline_history_position = 0;
        }
      },
      /**
       * Selects the next history line.
       */
      next_history: () => cmdline_state.history(1),
      /**
       * Selects the prev history line.
       */
      prev_history: () => cmdline_state.history(-1),
      /**
       * Execute the content of the command line and hide it.
       **/
      accept_line: async () => {
        await awaitProxyEq(
          contentState,
          "current_cmdline",
          "cmdline_filter"
        );
        const command2 = cmdline_state.getCompletion() || cmdline_state.clInput.value;
        cmdline_state.fns.hide_and_clear();
        if (cmdline_state.fns.is_valid_commandline(command2) === false)
          return;
        cmdline_state.fns.store_ex_string(command2);
        return messageOwnTab("controller_content", "acceptExCmd", [command2]);
      },
      execute_ex_on_completion_args: (excmd) => execute_ex_on_x(true, cmdline_state, excmd),
      execute_ex_on_completion: (excmd) => execute_ex_on_x(false, cmdline_state, excmd),
      copy_completion: () => {
        const command2 = cmdline_state.getCompletion();
        cmdline_state.fns.hide_and_clear();
        return messageOwnTab("controller_content", "acceptExCmd", [
          "clipboard yank " + command2
        ]);
      }
    };
  }
  function execute_ex_on_x(args_only, cmdline_state, excmd) {
    const args2 = cmdline_state.getCompletion(args_only) || cmdline_state.clInput.value;
    const cmdToExec = (excmd ? excmd + " " : "") + args2;
    cmdline_state.fns.store_ex_string(cmdToExec);
    return messageOwnTab("controller_content", "acceptExCmd", [cmdToExec]);
  }
  function space(cmdline_state) {
    const selectionStart = cmdline_state.clInput.selectionStart;
    const selectionEnd = cmdline_state.clInput.selectionEnd;
    cmdline_state.clInput.value = cmdline_state.clInput.value.substring(0, selectionStart) + " " + cmdline_state.clInput.value.substring(selectionEnd);
    cmdline_state.clInput.selectionStart = cmdline_state.clInput.selectionEnd = selectionStart + 1;
  }
  var sleep2;
  var init_commandline_cmds = __esm({
    "src/lib/commandline_cmds.ts"() {
      "use strict";
      init_messaging();
      init_state();
      init_state_content();
      sleep2 = (ms) => new Promise((resolve2) => setTimeout(resolve2, ms));
    }
  });

  // src/lib/dom.ts
  var dom_exports = {};
  __export(dom_exports, {
    HINTTAGS_anchor_selectors: () => HINTTAGS_anchor_selectors,
    HINTTAGS_filter_by_text_selectors: () => HINTTAGS_filter_by_text_selectors,
    HINTTAGS_img_selectors: () => HINTTAGS_img_selectors,
    HINTTAGS_killable_selectors: () => HINTTAGS_killable_selectors,
    HINTTAGS_saveable: () => HINTTAGS_saveable,
    HINTTAGS_selectors: () => HINTTAGS_selectors,
    TabTarget: () => TabTarget,
    anchors: () => anchors,
    compareElementArea: () => compareElementArea,
    deepestShadowRoot: () => deepestShadowRoot,
    elementsByXPath: () => elementsByXPath,
    elementsWithText: () => elementsWithText,
    focus: () => focus,
    getAbsoluteCentre: () => getAbsoluteCentre,
    getAllDocumentFrames: () => getAllDocumentFrames,
    getElementCentre: () => getElementCentre,
    getElemsBySelector: () => getElemsBySelector,
    getLastUsedInput: () => getLastUsedInput,
    getNthElement: () => getNthElement,
    getSelector: () => getSelector,
    heightMatters: () => heightMatters,
    hijackPageListenerFunctions: () => hijackPageListenerFunctions,
    hintworthy_js_elems: () => hintworthy_js_elems,
    isSubstantial: () => isSubstantial,
    isTextEditable: () => isTextEditable,
    isVisible: () => isVisible,
    isVisibleFilter: () => isVisibleFilter,
    mouseEvent: () => mouseEvent,
    registerEvListenerAction: () => registerEvListenerAction,
    setupFocusHandler: () => setupFocusHandler,
    simulateClick: () => simulateClick,
    widthMatters: () => widthMatters
  });
  function isTextEditable(element) {
    if (element) {
      if (element.readOnly === true)
        return false;
      if (element.nodeName.toUpperCase() === "INPUT") {
        return isEditableHTMLInput(element);
      }
      if (["SELECT", "TEXTAREA", "OBJECT"].includes(
        element.nodeName.toUpperCase()
      )) {
        return true;
      }
      if (element instanceof HTMLElement) {
        if (element.contentEditable === void 0) {
          return false;
        }
        if (element.contentEditable.toUpperCase() === "TRUE") {
          return true;
        }
      }
      if (element.hasOwnProperty("attributes")) {
        for (const attr of element.attributes) {
          if (attr.name === "role" && attr.value === "application") {
            return true;
          }
        }
      }
    }
    return false;
  }
  function isEditableHTMLInput(element) {
    if (element.disabled || element.readOnly)
      return false;
    switch (element.type) {
      case void 0:
      case "text":
      case "search":
      case "email":
      case "url":
      case "number":
      case "password":
      case "date":
      case "tel":
        return true;
    }
    return false;
  }
  function mouseEvent(element, type3, modifierKeys = {}) {
    let events = [];
    switch (type3) {
      case "unhover":
        events = ["mousemove", "mouseout", "mouseleave"];
        break;
      case "click":
        events = ["mousedown", "mouseup", "click"];
      case "hover":
        events = ["mouseover", "mouseenter", "mousemove"].concat(events);
        break;
    }
    events.forEach((type4) => {
      const event = new MouseEvent(type4, {
        bubbles: true,
        cancelable: true,
        view: window,
        detail: 1,
        // usually the click count
        ...modifierKeys
      });
      element.dispatchEvent(event);
    });
  }
  function elementsWithText(includeInvisible = false) {
    return getElemsBySelector("*", [
      isVisibleFilter(includeInvisible),
      (hint2) => hint2.textContent !== ""
    ]);
  }
  function* elementsByXPath(xpath, parent) {
    const query2 = document.evaluate(
      xpath,
      parent || document,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );
    for (let i2 = 0, length3 = query2.snapshotLength; i2 < length3; ++i2) {
      yield query2.snapshotItem(i2);
    }
  }
  function isSubstantial(element) {
    const clientRect = element.getClientRects()[0];
    const computedStyle = getComputedStyle(element);
    switch (true) {
      case !clientRect:
      case clientRect.width < 3:
      case clientRect.height < 3:
      case computedStyle.visibility !== "visible":
      case computedStyle.display === "none":
        return false;
    }
    return true;
  }
  function heightMatters(style) {
    switch (style.display) {
      case "inline":
      case "table-column":
      case "table-column-group":
        return false;
    }
    return true;
  }
  function widthMatters(style) {
    switch (style.display) {
      case "inline":
      case "table-column":
      case "table-column-group":
      case "table-header-group":
      case "table-footer-group":
      case "table-row-group":
      case "table-cell":
      case "table-row":
        return false;
    }
    return true;
  }
  function isVisibleFilter(includeInvisible) {
    return (elem) => includeInvisible || isVisible(elem);
  }
  function isVisible(thing) {
    if (thing instanceof Element) {
      while (typeof thing.getBoundingClientRect !== "function") {
        thing = thing.parentElement;
      }
    }
    const clientRect = thing.getBoundingClientRect();
    switch (true) {
      case !clientRect:
      case clientRect.bottom < 4:
      case clientRect.top >= innerHeight - 4:
      case clientRect.right < 4:
      case clientRect.left >= innerWidth - 4:
        return false;
    }
    if (thing instanceof Range)
      return true;
    const element = thing;
    const computedStyle = getComputedStyle(element);
    switch (true) {
      case (widthMatters(computedStyle) && clientRect.width < 3):
      case (heightMatters(computedStyle) && clientRect.height < 3):
      case computedStyle.visibility !== "visible":
      case computedStyle.display === "none":
        return false;
    }
    return true;
  }
  function getAllDocumentFrames(doc = document) {
    if (!(doc instanceof HTMLDocument))
      return [];
    const frames = Array.from(doc.getElementsByTagName("iframe")).concat(Array.from(doc.getElementsByTagName("frame"))).filter((frame) => !frame.src.startsWith("moz-extension://"));
    return frames.concat(
      frames.reduce((acc, f) => {
        let newFrames = [];
        try {
          const doc2 = f.contentDocument || f.contentWindow.document;
          newFrames = getAllDocumentFrames(doc2);
        } catch (e2) {
        }
        return acc.concat(newFrames);
      }, [])
    );
  }
  function getSelector(e2) {
    function uniqueSelector(e3) {
      if (e3.id && /^[a-zA-Z0-9]+$/.exec(e3.id))
        return "#" + e3.id;
      if (!e3.parentElement)
        return "HTML";
      const index2 = Array.from(e3.parentElement.children).filter((child) => child.tagName === e3.tagName).indexOf(e3) + 1;
      return uniqueSelector(e3.parentElement) + ` > ${e3.tagName}:nth-of-type(${index2})`;
    }
    return uniqueSelector(e2);
  }
  function getShadowElementsBySelector(selector) {
    let elems = [];
    document.querySelectorAll("*").forEach((elem) => {
      if (elem.shadowRoot) {
        elems = elems.concat(...elem.shadowRoot.querySelectorAll(selector));
      }
    });
    return elems;
  }
  function getElemsBySelector(selector, filters) {
    let elems = Array.from(document.querySelectorAll(selector));
    elems = elems.concat(...getShadowElementsBySelector(selector));
    const frameElems = getAllDocumentFrames().reduce((acc, frame) => {
      let newElems = [];
      try {
        const doc = frame.contentDocument || frame.contentWindow.document;
        newElems = Array.from(doc.querySelectorAll(selector));
      } catch (e2) {
      }
      return acc.concat(newElems);
    }, []);
    elems = elems.concat(frameElems);
    for (const filter3 of filters) {
      elems = elems.filter(filter3);
    }
    return elems;
  }
  function getNthElement(selectors, nth3, filters) {
    const inputs = getElemsBySelector(selectors, filters);
    if (inputs.length) {
      const index2 = Number(nth3).clamp(-inputs.length, inputs.length - 1).mod(inputs.length);
      return inputs[index2];
    }
    return null;
  }
  function compareElementArea(a, b) {
    const aArea = a.offsetWidth * a.offsetHeight;
    const bArea = b.offsetWidth * b.offsetHeight;
    return aArea - bArea;
  }
  function registerEvListenerAction(elem, add3, event) {
    if (!(elem instanceof Element)) {
      return;
    }
    try {
      Node.prototype.hasChildNodes.apply(elem);
    } catch (e2) {
      logger4.error("Elem is not a real Node", elem);
      return;
    }
    switch (event) {
      case "click":
      case "mousedown":
      case "mouseup":
      case "mouseover":
        if (add3) {
          hintworthy_js_elems.add(elem);
        } else {
          hintworthy_js_elems.delete(elem);
        }
    }
  }
  function hijackPageListenerFunctions() {
    if (!inContentScript()) {
      return;
    }
    const exportedName = "registerEvListenerAction";
    exportFunction(registerEvListenerAction, window, { defineAs: exportedName });
    const eval_str = ["addEventListener", "removeEventListener"].reduce(
      (acc, cur) => `${acc};
      EventTarget.prototype.${cur} = ((realFunction, register) => {
         return function (...args) {
               let result = realFunction.apply(this, args)
               try {
                  register(this, ${cur === "addEventListener"}, args[0])
               } catch (e) {
                  // Don't let the page know something wrong happened here
               }
               return result
         }
      })(EventTarget.prototype.${cur}, ${exportedName})`,
      ""
    );
    window.eval(eval_str + `;delete ${exportedName}`);
  }
  function focus(e2) {
    e2.focus();
    if (e2 instanceof HTMLInputElement && ["text", "search", "url", "tel", "password"].includes(
      e2.type.toLowerCase()
    )) {
      let pos = 0;
      if (get("cursorpos") === "end")
        pos = e2.value.length;
      e2.setSelectionRange(pos, pos);
    }
  }
  function getLastUsedInput() {
    return LAST_USED_INPUT;
  }
  function onPageFocus(elem) {
    elem = elem.shadowRoot ? elem.shadowRoot.activeElement : elem;
    if (isTextEditable(elem)) {
      LAST_USED_INPUT = elem;
    }
    const setting = get("modesubconfigs", contentState.mode, "allowautofocus") || get("allowautofocus");
    return setting === "true";
  }
  async function setInput(el) {
    const tab2 = await activeTabId();
    const arr = (await getAsync2("prevInputs")).concat({
      tab: tab2,
      inputId: el.id
    });
    state.prevInputs = arr.slice(Math.max(arr.length - 10, 0));
  }
  function hijackPageFocusFunction() {
    const exportedName = "onPageFocus";
    exportFunction(onPageFocus, window, { defineAs: exportedName });
    const eval_str = `HTMLElement.prototype.focus = ((realFocus, ${exportedName}) => {
        return function (...args) {
            if (${exportedName}(this, args))
                return realFocus.apply(this, args)
        }
     })(HTMLElement.prototype.focus, ${exportedName})`;
    window.eval(eval_str + `;delete ${exportedName}`);
  }
  function setupFocusHandler() {
    document.addEventListener("focusin", (e2) => {
      let elem = e2.target;
      elem = elem.shadowRoot ? elem.shadowRoot.activeElement : elem;
      if (isTextEditable(elem)) {
        LAST_USED_INPUT = elem;
        setInput(elem);
      }
    });
    if (inContentScript()) {
      hijackPageFocusFunction();
    }
  }
  function anchors(includeInvisible = false) {
    return getElemsBySelector(HINTTAGS_anchor_selectors, [
      isVisibleFilter(includeInvisible)
    ]);
  }
  function simulateClick(target, tabTarget = 0 /* CurrentTab */) {
    let usePopupBlockerWorkaround = target.target === "_blank" || target.target === "_new";
    const href = target.href;
    if (href == null ? void 0 : href.startsWith("file:")) {
      if (tabTarget === 0 /* CurrentTab */ && usePopupBlockerWorkaround) {
        tabTarget = 1 /* NewTab */;
      }
      usePopupBlockerWorkaround = false;
    }
    if (usePopupBlockerWorkaround) {
      activeTabContainerId().then((containerId) => {
        if (containerId)
          openInNewTab(href, {
            related: true,
            cookieStoreId: containerId
          });
        else
          openInNewTab(href, {
            related: true
          });
      });
    } else {
      if (target instanceof HTMLDetailsElement) {
        target.open = !target.open;
      }
      mouseEvent(target, "click", tabTargetToModifierKey[tabTarget]);
      focus(target);
    }
  }
  function deepestShadowRoot(sr) {
    if (sr === null)
      return sr;
    let shadowRoot = sr;
    while (shadowRoot.activeElement.shadowRoot != null) {
      shadowRoot = shadowRoot.activeElement.shadowRoot;
    }
    return shadowRoot;
  }
  function getElementCentre(el) {
    const pos = el.getBoundingClientRect();
    return { x: 0.5 * (pos.left + pos.right), y: 0.5 * (pos.top + pos.bottom) };
  }
  function getAbsoluteCentre(el) {
    const pos = getElementCentre(el);
    return {
      x: pos.x + window.mozInnerScreenX,
      y: pos.y + window.mozInnerScreenY
    };
  }
  var logger4, hintworthy_js_elems, LAST_USED_INPUT, HINTTAGS_selectors, HINTTAGS_filter_by_text_selectors, HINTTAGS_img_selectors, HINTTAGS_anchor_selectors, HINTTAGS_killable_selectors, HINTTAGS_saveable, TabTarget, tabTargetToModifierKey;
  var init_dom = __esm({
    "src/lib/dom.ts"() {
      "use strict";
      init_config();
      init_state();
      init_state();
      init_logging();
      init_state_content();
      init_webext();
      logger4 = new Logger("dom");
      hintworthy_js_elems = /* @__PURE__ */ new Set();
      LAST_USED_INPUT = null;
      HINTTAGS_selectors = `
input:not([type=hidden]):not([disabled]),
a,
area,
button,
details,
iframe,
label,
select,
summary,
textarea,
[onclick],
[onmouseover],
[onmousedown],
[onmouseup],
[oncommand],
[role='link'],
[role='button'],
[role='checkbox'],
[role='combobox'],
[role='listbox'],
[role='listitem'],
[role='menuitem'],
[role='menuitemcheckbox'],
[role='menuitemradio'],
[role='option'],
[role='radio'],
[role='scrollbar'],
[role='slider'],
[role='spinbutton'],
[role='tab'],
[role='textbox'],
[role='treeitem'],
[class*='button'],
[tabindex]
`;
      HINTTAGS_filter_by_text_selectors = `
input:not([type=hidden]):not([disabled]),
a,
textarea,
button,
select,
[class*='button']
`;
      HINTTAGS_img_selectors = `
img,
[src]
`;
      HINTTAGS_anchor_selectors = `
[id],
[name]
`;
      HINTTAGS_killable_selectors = `
header,
footer,
nav,
span,
div,
iframe,
img,
button,
article,
summary
`;
      HINTTAGS_saveable = `
[href]:not([href='#'])
`;
      TabTarget = /* @__PURE__ */ ((TabTarget2) => {
        TabTarget2[TabTarget2["CurrentTab"] = 0] = "CurrentTab";
        TabTarget2[TabTarget2["NewTab"] = 1] = "NewTab";
        TabTarget2[TabTarget2["NewBackgroundTab"] = 2] = "NewBackgroundTab";
        TabTarget2[TabTarget2["NewWindow"] = 3] = "NewWindow";
        return TabTarget2;
      })(TabTarget || {});
      tabTargetToModifierKey = {
        [0 /* CurrentTab */]: {},
        [1 /* NewTab */]: { ctrlKey: true, shiftKey: true },
        [2 /* NewBackgroundTab */]: { ctrlKey: true },
        [3 /* NewWindow */]: { shiftKey: true }
      };
    }
  });

  // src/lib/editor_utils.ts
  function applyToElem(e2, fn) {
    let result;
    if (e2 instanceof HTMLInputElement && e2.type !== "text") {
      const t2 = e2.type;
      e2.type = "text";
      result = fn(e2);
      e2.type = t2;
    } else {
      result = fn(e2);
    }
    return result;
  }
  function getSimpleValues(e2) {
    return applyToElem(e2, (e3) => [e3.value, e3.selectionStart, e3.selectionEnd]);
  }
  function getContentEditableValues(e2) {
    const selection = e2.ownerDocument.getSelection();
    let n2 = selection.anchorNode;
    while (n2 && n2 !== e2)
      n2 = n2.parentNode;
    if (!n2)
      return [null, null, null];
    const r = selection.getRangeAt(0).cloneRange();
    const selectionLength = r.toString().length;
    r.setEnd(e2, e2.childNodes.length);
    const lengthFromCaretToEndOfText = r.toString().length;
    r.setStart(e2, 0);
    const s = r.toString();
    const caretPos = s.length - lengthFromCaretToEndOfText;
    return [s, caretPos, caretPos + selectionLength];
  }
  function setSimpleValues(e2, text, start, end) {
    return applyToElem(e2, (e3) => {
      if (text !== null)
        e3.value = text;
      if (start !== null) {
        if (end === null)
          end = start;
        e3.selectionStart = start;
        e3.selectionEnd = end;
      }
    });
  }
  function setContentEditableValues(e2, text, start, end) {
    const selection = e2.ownerDocument.getSelection();
    if (selection.rangeCount < 1) {
      const r = new Range();
      r.setStart(e2, 0);
      r.setEnd(e2, e2.childNodes.length);
      selection.addRange(r);
    }
    if (text !== null) {
      const range4 = selection.getRangeAt(0);
      const anchorNode = selection.anchorNode;
      const focusNode = selection.focusNode;
      range4.setStart(anchorNode, 0);
      range4.setEndAfter(focusNode, focusNode.length);
      e2.ownerDocument.execCommand("insertText", false, text);
    }
    if (start !== null) {
      if (end === null)
        end = start;
      let range4 = selection.getRangeAt(0);
      range4.setStart(range4.startContainer, start);
      range4 = selection.getRangeAt(0);
      range4.setEnd(range4.startContainer, end);
    }
  }
  function wrap_input(fn) {
    return (e2, arg2) => {
      let getValues = getSimpleValues;
      let setValues = setSimpleValues;
      if (e2.isContentEditable) {
        getValues = getContentEditableValues;
        setValues = setContentEditableValues;
      }
      const [origText, origStart, origEnd] = getValues(e2);
      if (origText === null || origStart === null)
        return false;
      setValues(e2, ...fn(origText, origStart, origEnd, arg2));
      return true;
    };
  }
  function needs_text(fn, arg2) {
    return (text, selectionStart, selectionEnd, arg3) => {
      if (text.length === 0 || selectionStart === null || selectionStart === void 0)
        return [null, null, null];
      return fn(
        text,
        selectionStart,
        typeof selectionEnd === "number" ? selectionEnd : selectionStart,
        arg3
      );
    };
  }
  function getWordBoundaries(text, position, before) {
    if (position < 0 || position > text.length)
      throw new Error(
        `getWordBoundaries: position (${position}) should be within text ("${text}") boundaries (0, ${text.length})`
      );
    const pattern = new RegExp(get("wordpattern"), "g");
    let boundary1 = position < text.length ? position : text.length;
    const direction = before ? -1 : 1;
    if (before && boundary1 > 0)
      boundary1 -= 1;
    while (boundary1 >= 0 && boundary1 < text.length && !text[boundary1].match(pattern)) {
      boundary1 += direction;
    }
    if (boundary1 < 0)
      boundary1 = 0;
    else if (boundary1 >= text.length)
      boundary1 = text.length - 1;
    while (boundary1 >= 0 && boundary1 < text.length && !text[boundary1].match(pattern)) {
      boundary1 -= direction;
    }
    if (boundary1 < 0)
      boundary1 = 0;
    else if (boundary1 >= text.length)
      boundary1 = text.length - 1;
    if (!text[boundary1].match(pattern)) {
      throw new Error(
        `getWordBoundaries: no characters matching wordpattern (${pattern.source}) in text (${text})`
      );
    }
    while (boundary1 >= 0 && boundary1 < text.length && !!text[boundary1].match(pattern)) {
      boundary1 += direction;
    }
    boundary1 -= direction;
    let boundary2 = boundary1;
    while (boundary2 >= 0 && boundary2 < text.length && !!text[boundary2].match(pattern)) {
      boundary2 -= direction;
    }
    boundary2 += direction;
    if (boundary1 > boundary2)
      return [boundary2, boundary1 + 1];
    return [boundary1, boundary2 + 1];
  }
  function wordAfterPos(text, position) {
    if (position < 0)
      throw new Error(`wordAfterPos: position (${position}) is less that 0`);
    const pattern = new RegExp(get("wordpattern"), "g");
    while (position < text.length && !!text[position].match(pattern))
      position += 1;
    while (position < text.length && !text[position].match(pattern))
      position += 1;
    if (position >= text.length)
      return -1;
    return position;
  }
  function jumbleWord(word) {
    if (word.length < 4 || isAcronym()) {
      return word;
    }
    const innerText = word.slice(1, -1);
    return word.charAt(0) + shuffle(innerText) + word.charAt(word.length - 1);
    function isAcronym() {
      return word.length < 5 && word.toUpperCase() === word;
    }
  }
  var rot13_helper, charesar, jumble_helper, shuffle;
  var init_editor_utils = __esm({
    "src/lib/editor_utils.ts"() {
      "use strict";
      init_config();
      rot13_helper = (s, n2 = 13) => {
        let sa = s.split("");
        sa = sa.map((x) => charesar(x, n2));
        return sa.join("");
      };
      charesar = (c, n2 = 13) => {
        const cn = c.charCodeAt(0);
        if (cn >= 65 && cn <= 90)
          return String.fromCharCode((cn - 65 + n2) % 26 + 65);
        if (cn >= 97 && cn <= 122)
          return String.fromCharCode((cn - 97 + n2) % 26 + 97);
        return c;
      };
      jumble_helper = (text) => {
        const wordSplitRegex = new RegExp("([^a-zA-Z]|[A-Z][a-z]+)");
        return text.split(wordSplitRegex).map(jumbleWord).join("");
      };
      shuffle = (text) => {
        const arr = text.split("");
        for (let i2 = arr.length - 1; i2 >= 0; i2--) {
          const j = Math.floor(Math.random() * i2 + 1);
          const t2 = arr[i2];
          arr[i2] = arr[j];
          arr[j] = t2;
        }
        return arr.join("");
      };
    }
  });

  // src/lib/editor.ts
  var editor_exports = {};
  __export(editor_exports, {
    backward_char: () => backward_char,
    backward_kill_line: () => backward_kill_line,
    backward_kill_word: () => backward_kill_word,
    backward_word: () => backward_word,
    beginning_of_line: () => beginning_of_line,
    capitalize_word: () => capitalize_word,
    delete_backward_char: () => delete_backward_char,
    delete_char: () => delete_char,
    downcase_word: () => downcase_word,
    end_of_line: () => end_of_line,
    forward_char: () => forward_char,
    forward_word: () => forward_word,
    insert_text: () => insert_text,
    jumble: () => jumble,
    kill_line: () => kill_line,
    kill_whole_line: () => kill_whole_line,
    kill_word: () => kill_word,
    rot13: () => rot13,
    tab_insert: () => tab_insert,
    transpose_chars: () => transpose_chars,
    transpose_words: () => transpose_words,
    upcase_word: () => upcase_word
  });
  function applyWord(text, selectionStart, selectionEnd, fn) {
    if (text.length === 0)
      return [null, null, null];
    if (selectionStart >= text.length) {
      selectionStart = text.length - 1;
    }
    const boundaries = getWordBoundaries(text, selectionStart, false);
    const beginning = text.substring(0, boundaries[0]) + fn(text.substring(boundaries[0], boundaries[1]));
    text = beginning + text.substring(boundaries[1]);
    selectionStart = beginning.length + 1;
    return [text, selectionStart, null];
  }
  var delete_char, delete_backward_char, tab_insert, transpose_chars, transpose_words, upcase_word, downcase_word, capitalize_word, kill_line, backward_kill_line, kill_whole_line, kill_word, backward_kill_word, beginning_of_line, end_of_line, forward_char, backward_char, forward_word, backward_word, insert_text, rot13, jumble;
  var init_editor = __esm({
    "src/lib/editor.ts"() {
      "use strict";
      init_editor_utils();
      delete_char = wrap_input(
        needs_text((text, selectionStart, selectionEnd) => {
          if (selectionStart !== selectionEnd) {
            text = text.substring(0, selectionStart) + text.substring(selectionEnd);
          } else {
            text = text.substring(0, selectionStart) + text.substring(selectionStart + 1);
          }
          return [text, selectionStart, null];
        })
      );
      delete_backward_char = wrap_input(
        needs_text((text, selectionStart, selectionEnd) => {
          if (selectionStart !== selectionEnd) {
            text = text.substring(0, selectionStart) + text.substring(selectionEnd);
          } else {
            text = text.substring(0, selectionStart - 1) + text.substring(selectionStart);
          }
          selectionStart -= 1;
          return [text, selectionStart, null];
        })
      );
      tab_insert = wrap_input((text, selectionStart, selectionEnd) => {
        if (selectionStart !== selectionEnd) {
          text = text.substring(0, selectionStart) + "	" + text.substring(selectionEnd);
        } else {
          text = text.substring(0, selectionStart) + "	" + text.substring(selectionStart);
        }
        selectionStart += 1;
        return [text, selectionStart, null];
      });
      transpose_chars = wrap_input(
        (text, selectionStart) => {
          if (text.length < 2)
            return [null, null, null];
          if (selectionStart === 0)
            selectionStart = 1;
          if (selectionStart >= text.length)
            selectionStart = text.length - 1;
          text = text.substring(0, selectionStart - 1) + text.substring(selectionStart, selectionStart + 1) + text.substring(selectionStart - 1, selectionStart) + text.substring(selectionStart + 1);
          selectionStart += 1;
          return [text, selectionStart, null];
        }
      );
      transpose_words = wrap_input(
        needs_text((text, selectionStart) => {
          if (selectionStart >= text.length) {
            selectionStart = text.length - 1;
          }
          let firstBoundaries = getWordBoundaries(text, selectionStart, false);
          let secondBoundaries = firstBoundaries;
          const nextWord = wordAfterPos(text, firstBoundaries[1]);
          if (nextWord > -1) {
            secondBoundaries = getWordBoundaries(text, nextWord, false);
          } else {
            firstBoundaries = getWordBoundaries(
              text,
              firstBoundaries[0] - 1,
              true
            );
          }
          const firstWord2 = text.substring(firstBoundaries[0], firstBoundaries[1]);
          const secondWord = text.substring(
            secondBoundaries[0],
            secondBoundaries[1]
          );
          const beginning = text.substring(0, firstBoundaries[0]) + secondWord + text.substring(firstBoundaries[1], secondBoundaries[0]);
          selectionStart = beginning.length;
          return [
            beginning + firstWord2 + text.substring(secondBoundaries[1]),
            selectionStart,
            null
          ];
        })
      );
      upcase_word = wrap_input(
        needs_text(
          (text, selectionStart, selectionEnd) => applyWord(
            text,
            selectionStart,
            selectionEnd,
            (word) => word.toUpperCase()
          )
        )
      );
      downcase_word = wrap_input(
        needs_text(
          (text, selectionStart, selectionEnd) => applyWord(
            text,
            selectionStart,
            selectionEnd,
            (word) => word.toLowerCase()
          )
        )
      );
      capitalize_word = wrap_input(
        needs_text(
          (text, selectionStart, selectionEnd) => applyWord(
            text,
            selectionStart,
            selectionEnd,
            (word) => word[0].toUpperCase() + word.substring(1)
          )
        )
      );
      kill_line = wrap_input(
        needs_text((text, selectionStart) => {
          let newLine = text.substring(selectionStart).search("\n");
          if (newLine !== -1) {
            if (newLine === 0)
              newLine = 1;
            text = text.substring(0, selectionStart) + text.substring(selectionStart + newLine);
          } else {
            text = text.substring(0, selectionStart);
          }
          return [text, selectionStart, null];
        })
      );
      backward_kill_line = wrap_input(
        needs_text((text, selectionStart) => {
          if (selectionStart > 0 && text[selectionStart - 1] === "\n") {
            return [
              text.substring(0, selectionStart - 1) + text.substring(selectionStart),
              selectionStart,
              null
            ];
          }
          let newLine;
          for (newLine = selectionStart; newLine > 0 && text[newLine - 1] !== "\n"; --newLine)
            ;
          return [
            text.substring(0, newLine) + text.substring(selectionStart),
            newLine,
            null
          ];
        })
      );
      kill_whole_line = wrap_input(
        needs_text((text, selectionStart) => {
          let firstNewLine;
          let secondNewLine;
          for (firstNewLine = selectionStart; firstNewLine > 0 && text[firstNewLine - 1] !== "\n"; --firstNewLine)
            ;
          for (secondNewLine = selectionStart; secondNewLine < text.length && text[secondNewLine - 1] !== "\n"; ++secondNewLine)
            ;
          return [
            text.substring(0, firstNewLine) + text.substring(secondNewLine),
            firstNewLine,
            null
          ];
        })
      );
      kill_word = wrap_input(
        needs_text((text, selectionStart) => {
          const boundaries = getWordBoundaries(text, selectionStart, false);
          if (selectionStart < boundaries[1]) {
            boundaries[0] = selectionStart;
            return [
              text.substring(0, boundaries[0]) + text.substring(boundaries[1]),
              boundaries[0],
              null
            ];
          } else {
            return [null, selectionStart, null];
          }
        })
      );
      backward_kill_word = wrap_input(
        needs_text((text, selectionStart) => {
          const boundaries = getWordBoundaries(text, selectionStart, true);
          if (selectionStart > boundaries[0]) {
            boundaries[1] = selectionStart;
            return [
              text.substring(0, boundaries[0]) + text.substring(boundaries[1]),
              boundaries[0],
              null
            ];
          } else {
            return [null, selectionStart, null];
          }
        })
      );
      beginning_of_line = wrap_input(
        needs_text((text, selectionStart) => {
          while (text[selectionStart - 1] !== void 0 && text[selectionStart - 1] !== "\n")
            selectionStart -= 1;
          return [null, selectionStart, null];
        })
      );
      end_of_line = wrap_input(
        needs_text((text, selectionStart) => {
          while (text[selectionStart] !== void 0 && text[selectionStart] !== "\n")
            selectionStart += 1;
          return [null, selectionStart, null];
        })
      );
      forward_char = wrap_input((text, selectionStart) => [
        null,
        selectionStart + 1,
        null
      ]);
      backward_char = wrap_input(
        (text, selectionStart) => [null, selectionStart - 1, null]
      );
      forward_word = wrap_input(
        needs_text((text, selectionStart) => {
          if (selectionStart === text.length)
            return [null, null, null];
          const boundaries = getWordBoundaries(text, selectionStart, false);
          return [null, boundaries[1], null];
        })
      );
      backward_word = wrap_input(
        (text, selectionStart) => {
          if (selectionStart === 0)
            return [null, null, null];
          const boundaries = getWordBoundaries(text, selectionStart, true);
          return [null, boundaries[0], null];
        }
      );
      insert_text = wrap_input(
        (text, selectionStart, selectionEnd, arg2) => [
          text.slice(0, selectionStart) + arg2 + text.slice(selectionEnd),
          selectionStart + arg2.length,
          null
        ]
      );
      rot13 = wrap_input((text, selectionStart, selectionEnd) => [
        rot13_helper(text.slice(0, selectionStart) + text.slice(selectionEnd)),
        selectionStart,
        null
      ]);
      jumble = wrap_input((text, selectionStart, selectionEnd) => [
        jumble_helper(text.slice(0, selectionStart) + text.slice(selectionEnd)),
        selectionStart,
        null
      ]);
    }
  });

  // compiler/types/AnyType.ts
  var AnyType;
  var init_AnyType = __esm({
    "compiler/types/AnyType.ts"() {
      "use strict";
      AnyType = class {
        constructor(isDotDotDot = false, isQuestion = false) {
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "any";
        }
        toConstructor() {
          return `new AnyType(${!this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return this.kind;
        }
        convert(argument) {
          return argument;
        }
      };
    }
  });

  // compiler/types/BooleanType.ts
  var BooleanType;
  var init_BooleanType = __esm({
    "compiler/types/BooleanType.ts"() {
      "use strict";
      BooleanType = class {
        constructor(isDotDotDot = false, isQuestion = false) {
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "boolean";
        }
        toConstructor() {
          return `new BooleanType(${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return this.kind;
        }
        convert(argument) {
          if (argument === "true") {
            return true;
          } else if (argument === "false") {
            return false;
          }
          throw new Error("Can't convert ${argument} to boolean");
        }
      };
    }
  });

  // compiler/types/FunctionType.ts
  var FunctionType;
  var init_FunctionType = __esm({
    "compiler/types/FunctionType.ts"() {
      "use strict";
      FunctionType = class {
        constructor(args2, ret, isDotDotDot = false, isQuestion = false) {
          this.args = args2;
          this.ret = ret;
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "function";
        }
        toConstructor() {
          return `new FunctionType([` + // Convert every argument type to its string constructor representation
          this.args.map((cur) => cur.toConstructor()) + `], ${this.ret.toConstructor()}, ${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return `(${this.args.map((a) => a.toString()).join(", ")}) => ${this.ret.toString()}`;
        }
        convert(argument) {
          throw new Error(`Conversion to function not implemented: ${argument}`);
        }
      };
    }
  });

  // compiler/types/NumberType.ts
  var NumberType;
  var init_NumberType = __esm({
    "compiler/types/NumberType.ts"() {
      "use strict";
      NumberType = class {
        constructor(isDotDotDot = false, isQuestion = false) {
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "number";
        }
        toConstructor() {
          return `new NumberType(${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return this.kind;
        }
        convert(argument) {
          const n2 = parseFloat(argument);
          if (!Number.isNaN(n2)) {
            return n2;
          }
          throw new Error(`Can't convert to number: ${argument}`);
        }
      };
    }
  });

  // compiler/types/ObjectType.ts
  var ObjectType;
  var init_ObjectType = __esm({
    "compiler/types/ObjectType.ts"() {
      "use strict";
      ObjectType = class {
        // Note: a map that has an empty key ("") uses the corresponding type as default type
        constructor(members = /* @__PURE__ */ new Map(), isDotDotDot = false, isQuestion = false) {
          this.members = members;
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "object";
        }
        toConstructor() {
          return `new ObjectType(new Map<string, Type>([` + Array.from(this.members.entries()).map(([n2, m]) => `[${JSON.stringify(n2)}, ${m.toConstructor()}]`).join(", ") + `]), ${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return this.kind;
        }
        convertMember(memberName, memberValue) {
          let type3 = this.members.get(memberName[0]);
          if (!type3) {
            type3 = this.members.get("");
            if (!type3) {
              return memberValue;
            }
          }
          if (type3.kind === "object") {
            return type3.convertMember(memberName.slice(1), memberValue);
          }
          return type3.convert(memberValue);
        }
        convert(argument) {
          try {
            return JSON.parse(argument);
          } catch (e2) {
            throw new Error(`Can't convert to object: ${argument}`);
          }
        }
      };
    }
  });

  // compiler/types/StringType.ts
  var StringType;
  var init_StringType = __esm({
    "compiler/types/StringType.ts"() {
      "use strict";
      StringType = class {
        constructor(isDotDotDot = false, isQuestion = false) {
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "string";
        }
        toConstructor() {
          return `new StringType(${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return this.kind;
        }
        convert(argument) {
          if (typeof argument === "string") {
            return argument;
          }
          throw new Error(`Can't convert to string: ${argument}`);
        }
      };
    }
  });

  // compiler/types/TypeReferenceType.ts
  var TypeReferenceType;
  var init_TypeReferenceType = __esm({
    "compiler/types/TypeReferenceType.ts"() {
      "use strict";
      TypeReferenceType = class {
        constructor(kind, args2, isDotDotDot = false, isQuestion = false) {
          this.kind = kind;
          this.args = args2;
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
        }
        toConstructor() {
          return `new TypeReferenceType(${JSON.stringify(this.kind)}, [` + // Turn every type argument into its constructor representation
          this.args.map((cur) => cur.toConstructor()).join(",\n") + `], ${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return `${this.kind}<${this.args.map((a) => a.toString()).join(", ")}>`;
        }
        convert(argument) {
          throw new Error("Conversion of simple type references not implemented.");
        }
      };
    }
  });

  // compiler/types/VoidType.ts
  var VoidType;
  var init_VoidType = __esm({
    "compiler/types/VoidType.ts"() {
      "use strict";
      VoidType = class {
        constructor(isDotDotDot = false, isQuestion = false) {
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "void";
        }
        toConstructor() {
          return `new VoidType(${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return this.kind;
        }
        convert(argument) {
          return null;
        }
      };
    }
  });

  // compiler/types/ArrayType.ts
  var ArrayType;
  var init_ArrayType = __esm({
    "compiler/types/ArrayType.ts"() {
      "use strict";
      ArrayType = class {
        constructor(elemType, isDotDotDot = false, isQuestion = false) {
          this.elemType = elemType;
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "array";
        }
        toConstructor() {
          return `new ArrayType(${this.elemType.toConstructor()}, ${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return `${this.elemType.toString()}[]`;
        }
        convert(argument) {
          if (!Array.isArray(argument)) {
            try {
              argument = JSON.parse(argument);
            } catch (e2) {
              throw new Error(`Can't convert ${argument} to array:`);
            }
            if (!Array.isArray(argument)) {
              throw new Error(`Can't convert ${argument} to array:`);
            }
          }
          return argument.map((v) => this.elemType.convert(v));
        }
      };
    }
  });

  // compiler/types/LiteralTypeType.ts
  var LiteralTypeType;
  var init_LiteralTypeType = __esm({
    "compiler/types/LiteralTypeType.ts"() {
      "use strict";
      LiteralTypeType = class {
        constructor(value, isDotDotDot = false, isQuestion = false) {
          this.value = value;
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "LiteralType";
        }
        toConstructor() {
          return `new LiteralTypeType(${JSON.stringify(this.value)}, ${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return JSON.stringify(this.value);
        }
        convert(argument) {
          if (argument === this.value) {
            return argument;
          }
          throw new Error(
            `Argument does not match expected value (${this.value}): ${argument}`
          );
        }
      };
    }
  });

  // compiler/types/TupleType.ts
  var TupleType;
  var init_TupleType = __esm({
    "compiler/types/TupleType.ts"() {
      "use strict";
      TupleType = class {
        constructor(elemTypes, isDotDotDot = false, isQuestion = false) {
          this.elemTypes = elemTypes;
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "tuple";
        }
        toConstructor() {
          return `new TupleType([` + // Convert every element type to its constructor representation
          this.elemTypes.map((cur) => cur.toConstructor()).join(",\n") + `], ${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return `[${this.elemTypes.map((e2) => e2.toString()).join(", ")}]`;
        }
        convert(argument) {
          if (!Array.isArray(argument)) {
            try {
              argument = JSON.parse(argument);
            } catch (e2) {
              throw new Error(`Can't convert to tuple: ${argument}`);
            }
            if (!Array.isArray(argument)) {
              throw new Error(`Can't convert to tuple: ${argument}`);
            }
          }
          if (argument.length !== this.elemTypes.length) {
            throw new Error(
              `Error converting tuple: number of elements and type mismatch ${argument}`
            );
          }
          return argument.map((v, i2) => this.elemTypes[i2].convert(v));
        }
      };
    }
  });

  // compiler/types/UnionType.ts
  var UnionType;
  var init_UnionType = __esm({
    "compiler/types/UnionType.ts"() {
      "use strict";
      UnionType = class {
        constructor(types, isDotDotDot = false, isQuestion = false) {
          this.types = types;
          this.isDotDotDot = isDotDotDot;
          this.isQuestion = isQuestion;
          this.kind = "union";
        }
        toConstructor() {
          return `new UnionType([` + // Convert every type to its string constructor representation
          this.types.map((cur) => cur.toConstructor()).join(",\n") + `], ${this.isDotDotDot}, ${this.isQuestion})`;
        }
        toString() {
          return this.types.map((t2) => t2.toString()).join(" | ");
        }
        convert(argument) {
          for (const t2 of this.types) {
            try {
              return t2.convert(argument);
            } catch (e2) {
            }
          }
          throw new Error(`Can't convert "${argument}" to any of: ${this.types}`);
        }
      };
    }
  });

  // compiler/types/AllTypes.ts
  var init_AllTypes = __esm({
    "compiler/types/AllTypes.ts"() {
      "use strict";
      init_AnyType();
      init_BooleanType();
      init_FunctionType();
      init_NumberType();
      init_ObjectType();
      init_StringType();
      init_TypeReferenceType();
      init_VoidType();
      init_ArrayType();
      init_LiteralTypeType();
      init_TupleType();
      init_UnionType();
    }
  });

  // compiler/metadata/SymbolMetadata.ts
  var SymbolMetadata;
  var init_SymbolMetadata = __esm({
    "compiler/metadata/SymbolMetadata.ts"() {
      "use strict";
      SymbolMetadata = class {
        constructor(doc, type3, hidden = false) {
          this.doc = doc;
          this.type = type3;
          this.hidden = hidden;
        }
        toConstructor() {
          return `new SymbolMetadata(${JSON.stringify(
            this.doc
          )}, ${this.type.toConstructor()}, ${this.hidden})`;
        }
      };
    }
  });

  // compiler/metadata/ClassMetadata.ts
  var ClassMetadata;
  var init_ClassMetadata = __esm({
    "compiler/metadata/ClassMetadata.ts"() {
      "use strict";
      ClassMetadata = class {
        constructor(members = /* @__PURE__ */ new Map()) {
          this.members = members;
        }
        setMember(name, s) {
          this.members.set(name, s);
        }
        getMember(name) {
          return this.members.get(name);
        }
        getMembers() {
          return this.members.keys();
        }
        toConstructor() {
          return `new ClassMetadata(new Map<string, SymbolMetadata>([` + Array.from(this.members.entries()).map(([n2, m]) => `[${JSON.stringify(n2)}, ${m.toConstructor()}]`).join(",\n") + `]))`;
        }
      };
    }
  });

  // compiler/metadata/FileMetadata.ts
  var FileMetadata;
  var init_FileMetadata = __esm({
    "compiler/metadata/FileMetadata.ts"() {
      "use strict";
      FileMetadata = class {
        constructor(classes = /* @__PURE__ */ new Map(), functions3 = /* @__PURE__ */ new Map()) {
          this.classes = classes;
          this.functions = functions3;
        }
        setClass(name, c) {
          this.classes.set(name, c);
        }
        getClass(name) {
          return this.classes.get(name);
        }
        getClasses() {
          return Array.from(this.classes.keys());
        }
        setFunction(name, f) {
          this.functions.set(name, f);
        }
        getFunction(name) {
          return this.functions.get(name);
        }
        getFunctions() {
          return Array.from(this.functions.entries());
        }
        getFunctionNames() {
          return Array.from(this.functions.keys());
        }
        toConstructor() {
          return `new FileMetadata(new Map<string, ClassMetadata>([` + Array.from(this.classes.entries()).map(([n2, c]) => `[${JSON.stringify(n2)}, ${c.toConstructor()}]`).join(",\n") + `]), new Map<string, SymbolMetadata>([` + Array.from(this.functions.entries()).map(([n2, f]) => `[${JSON.stringify(n2)}, ${f.toConstructor()}]`).join(",\n") + `]))`;
        }
      };
    }
  });

  // compiler/metadata/ProgramMetadata.ts
  var ProgramMetadata;
  var init_ProgramMetadata = __esm({
    "compiler/metadata/ProgramMetadata.ts"() {
      "use strict";
      ProgramMetadata = class {
        constructor(files = /* @__PURE__ */ new Map()) {
          this.files = files;
        }
        setFile(name, file) {
          this.files.set(name, file);
        }
        getFile(name) {
          return this.files.get(name);
        }
        toConstructor() {
          return `new ProgramMetadata(new Map<string, FileMetadata>([` + Array.from(this.files.entries()).map(([n2, f]) => `[${JSON.stringify(n2)}, ${f.toConstructor()}]`).join(",\n") + `]))`;
        }
      };
    }
  });

  // compiler/metadata/AllMetadata.ts
  var init_AllMetadata = __esm({
    "compiler/metadata/AllMetadata.ts"() {
      "use strict";
      init_SymbolMetadata();
      init_ClassMetadata();
      init_FileMetadata();
      init_ProgramMetadata();
    }
  });

  // src/.metadata.generated.ts
  var metadata_generated_exports = {};
  __export(metadata_generated_exports, {
    everything: () => everything,
    staticThemes: () => staticThemes
  });
  var everything, staticThemes;
  var init_metadata_generated = __esm({
    "src/.metadata.generated.ts"() {
      "use strict";
      init_AllTypes();
      init_AllMetadata();
      everything = new ProgramMetadata(/* @__PURE__ */ new Map([
        ["src/excmds.ts", new FileMetadata(/* @__PURE__ */ new Map([]), /* @__PURE__ */ new Map([
          ["getNativeVersion", new SymbolMetadata("", new FunctionType([], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), true)],
          ["getRssLinks", new SymbolMetadata("", new FunctionType([], new TypeReferenceType("Promise", [new ArrayType(new ObjectType(/* @__PURE__ */ new Map([]), false, false), false, false)], false, false), false, false), true)],
          ["rssexec", new SymbolMetadata("Execute [[rsscmd]] for an rss link.\n\nIf `url` is undefined, Tridactyl will look for rss links in the current\npage. If it doesn't find any, it will display an error message. If it finds\nmultiple urls, it will offer completions in order for you to select the link\nyou're interested in. If a single rss feed is found, it will automatically\nbe selected.", new FunctionType([new StringType(false, false), new StringType(false, true), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["fillinput", new SymbolMetadata("Fills the element matched by `selector` with content and falls back to the last used input if the element can't be found. You probably don't want this; it used to be used internally for [[editor]].\n\nThat said, `bind gs fillinput null [Tridactyl](https://addons.mozilla.org/en-US/firefox/addon/tridactyl-vim/) is my favourite add-on` could probably come in handy.", new FunctionType([new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new VoidType(false, false), false, false), false)],
          ["getInput", new SymbolMetadata("", new FunctionType([new TypeReferenceType("HTMLElement", [], false, false)], new StringType(false, false), false, false), true)],
          ["getinput", new SymbolMetadata("", new FunctionType([], new StringType(false, false), false, false), true)],
          ["getInputSelector", new SymbolMetadata("", new FunctionType([], new AnyType(true, false), false, false), true)],
          ["addTridactylEditorClass", new SymbolMetadata("", new FunctionType([new StringType(false, false)], new VoidType(false, false), false, false), true)],
          ["removeTridactylEditorClass", new SymbolMetadata("", new FunctionType([new StringType(false, false)], new VoidType(false, false), false, false), true)],
          ["editor", new SymbolMetadata("Opens your favourite editor (which is currently gVim) and fills the last used input with whatever you write into that file.\n**Requires that the native messenger is installed, see [[native]] and [[nativeinstall]]**.\n\nUses the `editorcmd` config option, default = `auto` looks through a list defined in lib/native.ts try find a sensible combination. If it's a bit slow, or chooses the wrong editor, or gives up completely, set editorcmd to something you want. The command must stay in the foreground until the editor exits.\n\nThe editorcmd needs to accept a filename, stay in the foreground while it's edited, save the file and exit. By default the filename is added to the end of editorcmd, if you require control over the position of that argument, the first occurrence of %f in editorcmd is replaced with the filename. %l, if it exists, is replaced with the line number of the cursor and %c with the column number. For example:\n```\nset editorcmd terminator -u -e \"vim %f '+normal!%lGzv%c|'\"\n```\n\nYou're probably better off using the default insert mode bind of `<C-i>` (Ctrl-i) to access this.\n\nThis function returns a tuple containing the path to the file that was opened by the editor and its content. This enables creating commands such as the following one, which deletes the temporary file created by the editor:\n```\nalias editor_rm composite editor | jsb -p tri.native.run(`rm -f '${JS_ARG[0]}'`)\nbind --mode=insert <C-i> editor_rm\nbind --mode=input <C-i> editor_rm\n```", new FunctionType([], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["guiset_quiet", new SymbolMetadata("Like [[guiset]] but quieter.", new FunctionType([new StringType(false, false), new StringType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["guiset", new SymbolMetadata("Change which parts of the Firefox user interface are shown. **NB: This feature is experimental and might break stuff.**\n\nMight mangle your userChrome. Requires native messenger, and you must restart Firefox each time to see any changes (this can be done using [[restart]]). <!-- (unless you enable addon debugging and refresh using the browser toolbox) -->\n\nAlso flips the preference `toolkit.legacyUserProfileCustomizations.stylesheets` to true so that FF will read your userChrome.\n\nView available rules and options [here](/static/docs/modules/_src_lib_css_util_.html#potentialrules) and [here](/static/docs/modules/_src_lib_css_util_.html#metarules).\n\nExample usage: `guiset gui none`, `guiset gui full`, `guiset tabs autohide`.\n\nSome of the available options:\n\n- gui\n      - full\n      - none\n\n- tabs\n      - always\n      - autohide\n\n- navbar\n      - always\n      - autohide\n      - none\n\n- hoverlink (the little link that appears when you hover over a link)\n      - none\n      - left\n      - right\n      - top-left\n      - top-right\n\n- statuspanel (hoverlink + the indicator that appears when a website is loading)\n      - none\n      - left\n      - right\n      - top-left\n      - top-right\n\nIf you want to use guiset in your tridactylrc, you might want to use [[guiset_quiet]] instead.", new FunctionType([new StringType(false, false), new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["cssparse", new SymbolMetadata("", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new VoidType(false, false), false, false), true)],
          ["loadtheme", new SymbolMetadata("", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), true)],
          ["unloadtheme", new SymbolMetadata("", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), true)],
          ["colourscheme", new SymbolMetadata("Changes the current theme.\n\nIf THEMENAME is any of the themes that can be found in the [Tridactyl repo](https://github.com/tridactyl/tridactyl/tree/master/src/static/themes) (e.g. 'dark'), the theme will be loaded from Tridactyl's internal storage.\n\nIf THEMENAME is set to any other value except `--url`, Tridactyl will attempt to use its native binary (see [[native]]) in order to load a CSS file named THEMENAME from disk. The CSS file has to be in a directory named \"themes\" and this directory has to be in the same directory as your tridactylrc. If this fails, Tridactyl will attempt to load the theme from its internal storage.\n\nLastly, themes can be loaded from URLs with `:colourscheme --url [url] [themename]`. They are stored internally - if you want to update the theme run the whole command again.\n\nNote that the theme name should NOT contain any dot.\n\nExample: `:colourscheme mysupertheme`\nOn linux, this will load ~/.config/tridactyl/themes/mysupertheme.css\n\n__NB__: due to Tridactyl's architecture, the theme will take a small amount of time to apply as each page is loaded. If this annoys you, you may use [userContent.css](http://kb.mozillazine.org/index.php?title=UserContent.css&printable=yes) to make changes to Tridactyl earlier. For example, users using the dark theme may like to put\n\n```\n:root {\n     --tridactyl-bg: black !important;\n     --tridactyl-fg: white !important;\n}\n```\n\nin their `userContent.css`. Follow [issue #2510](https://github.com/tridactyl/tridactyl/issues/2510) if you would like to find out when we have made a more user-friendly solution.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["setpref", new SymbolMetadata("Write a setting to your user.js file. Requires a [[restart]] after running to take effect.", new FunctionType([new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["removepref", new SymbolMetadata("Remove a setting from your user.js file.", new FunctionType([new StringType(false, false)], new AnyType(true, false), false, false), false)],
          ["fixamo_quiet", new SymbolMetadata("Like [[fixamo]] but quieter.\n\nNow purely a placebo as [[fixamo]] has been removed.", new FunctionType([], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["fixamo", new SymbolMetadata('Used to simply set\n```js\n  "privacy.resistFingerprinting.block_mozAddonManager":true\n  "extensions.webextensions.restrictedDomains":""\n```\nin about:config via user.js so that Tridactyl (and other extensions!) can be used on addons.mozilla.org and other sites.\n\nRemoved at the request of the Firefox Security team. Replacements exist in our exemplar RC file.\n\nRequires `native` and a `restart`.', new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["nativeopen", new SymbolMetadata("Uses the native messenger to open URLs.\n\n**Be *seriously* careful with this:**\n\n1. the implementation basically execs `firefox --new-tab <your shell escaped string here>`\n2. you can use it to open any URL you can open in the Firefox address bar,\n    including ones that might cause side effects (firefox does not guarantee\n    that about: pages ignore query strings).\n\nYou've been warned.\n\nThis uses the [[browser]] setting to know which binary to call. If you need to pass additional arguments to firefox (e.g. '--new-window'), make sure they appear before the url.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["exclaim", new SymbolMetadata("Run command in /bin/sh (unless you're on Windows), and print the output in the command line. Non-zero exit codes and stderr are ignored, currently.\n\nRequires the native messenger, obviously.\n\nIf you're using `exclaim` with arguments coming from a pipe, consider using [[shellescape]] to properly escape arguments and to prevent unsafe commands.\n\nIf you want to use a different shell, just prepend your command with whatever the invocation is and keep in mind that most shells require quotes around the command to be executed, e.g. `:exclaim xonsh -c \"1+2\"`.\n\nAliased to `!` but the exclamation mark **must be followed with a space**.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["exclaim_quiet", new SymbolMetadata("Like exclaim, but without any output to the command line.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), false)],
          ["native", new SymbolMetadata("Tells you if the native messenger is installed and its version.\n\nFor snap, flatpak, and other sandboxed installations, additional setup is required \u2013 see https://github.com/tridactyl/tridactyl#extra-features-through-native-messaging.", new FunctionType([], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["nativeinstall", new SymbolMetadata("Copies the installation command for the native messenger to the clipboard and asks the user to run it in their shell.\n\nThe native messenger's source code may be found here: https://github.com/tridactyl/native_messenger/blob/master/src/native_main.nim\n\nIf your corporate IT policy disallows execution of binaries which have not been whitelisted but allows Python scripts, you may instead use the old native messenger by running `install.sh` or `win_install.ps1` from https://github.com/tridactyl/tridactyl/tree/master/native - the main downside is that it is significantly slower.\n\nFor snap, flatpak, and other sandboxed installations, additional setup is required \u2013 see https://github.com/tridactyl/tridactyl#extra-features-through-native-messaging.", new FunctionType([], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["mktridactylrc", new SymbolMetadata("Writes current config to a file.\n\nNB: an RC file is not required for your settings to persist: all settings are stored in a local Firefox storage database by default as soon as you set them.\n\nWith no arguments supplied the excmd will try to find an appropriate\nconfig path and write the rc file to there. Any argument given to the\nexcmd excluding the `-f` flag will be treated as a path to write the rc\nfile to relative to the native messenger's location (`~/.local/share/tridactyl/`). By default, it silently refuses to overwrite existing files.\n\nThe RC file will be split into sections that will be created if a config\nproperty is discovered within one of them:\n- General settings\n- Binds\n- Aliases\n- Autocmds\n- Autocontainers\n- Logging\n\nNote:\n- Subconfig paths fall back to using `js tri.config.set(key: obj)` notation.\n- This method is also used as a fallback mechanism for objects that didn't hit\n  any of the heuristics.\n\nAvailable flags:\n- `-f` will overwrite the config file if it exists.\n- `--clipboard` write config to clipboard - no [[native]] required", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["source", new SymbolMetadata("Runs an RC file from disk or a URL\n\nThis function accepts a flag: `--url` to load a RC from a URL.\n\nIf no argument given, it will try to open ~/.tridactylrc, ~/.config/tridactyl/tridactylrc or $XDG_CONFIG_HOME/tridactyl/tridactylrc in reverse order. You may use a `_` in place of a leading `.` if you wish, e.g, if you use Windows.\n\nIf no url is specified with the `--url` flag, the current page's URL is used to locate the RC file. Ensure the URL you pass (or page you are on) is a \"raw\" RC file, e.g. https://raw.githubusercontent.com/tridactyl/tridactyl/master/.tridactylrc and not https://github.com/tridactyl/tridactyl/blob/master/.tridactylrc.\n\nTridactyl won't run on many raw pages due to a Firefox bug with Content Security Policy, so you may need to use the `source --url [URL]` form.\n\nOn Windows, the `~` expands to `%USERPROFILE%`.\n\nThe RC file is just a bunch of Tridactyl excmds (i.e, the stuff on this help page). Settings persist in local storage. There's an [example file](https://raw.githubusercontent.com/tridactyl/tridactyl/master/.tridactylrc) if you want it.\n\nThere is a [bug](https://github.com/tridactyl/tridactyl/issues/1409) where not all lines of the RC file are executed if you use `sanitise` at the top of it. We instead recommend you put `:bind ZZ composite sanitise tridactyllocal; qall` in your RC file and use `ZZ` to exit Firefox.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["source_quiet", new SymbolMetadata("Same as [[source]] but suppresses all errors", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["updatenative", new SymbolMetadata("Updates the native messenger if it is installed, using our GitHub repo. This is run every time Tridactyl is updated.\n\nIf you want to disable this, or point it to your own native messenger, edit the `nativeinstallcmd` setting.", new FunctionType([new BooleanType(false, true)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["restart", new SymbolMetadata("Restarts firefox with the same commandline arguments.\n\nWarning: This can kill your tabs, especially if you :restart several times\nin a row", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["saveas", new SymbolMetadata("Download the current document.\n\nIf you have the native messenger v>=0.1.9 installed, the function accepts an optional argument, filename, which can be:\n- An absolute path\n- A path starting with ~, which will be expanded to your home directory\n- A relative path, relative to the native messenger executable (e.g. ~/.local/share/tridactyl on linux).\nIf filename is not given, a download dialogue will be opened. If filename is a directory, the file will be saved inside of it, its name being inferred from the URL. If the directories mentioned in the path do not exist or if a file already exists at this path, the file will be kept in your downloads folder and an error message will be given.\n\n**NB**: if a non-default save location is chosen, Firefox's download manager will say the file is missing. It is not - it is where you asked it to be saved.\n\nFlags:\n- `--overwrite`: overwrite the destination file.\n- `--cleanup`: removes the downloaded source file e.g. `$HOME/Downlods/downloaded.doc` if moving it to the desired directory fails.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["tabSetActive", new SymbolMetadata("", new FunctionType([new NumberType(false, false)], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), true)],
          ["getJumpPageId", new SymbolMetadata("This is used as an ID for the current page in the jumplist.\nIt has a potentially confusing behavior: if you visit site A, then site B, then visit site A again, the jumplist that was created for your first visit on A will be re-used for your second visit.\nAn ideal solution would be to have a counter that is incremented every time a new page is visited within the tab and use that as the return value for getJumpPageId but this doesn't seem to be trivial to implement.", new FunctionType([], new StringType(false, false), false, false), true)],
          ["saveJumps", new SymbolMetadata("", new FunctionType([new AnyType(true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), true)],
          ["saveTabHistory", new SymbolMetadata("", new FunctionType([new AnyType(true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), true)],
          ["curTabHistory", new SymbolMetadata("", new FunctionType([], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), true)],
          ["curJumps", new SymbolMetadata("Returns a promise for an object containing the jumplist of all pages accessed in the current tab.\nThe keys of the object currently are the page's URL, however this might change some day. Use [[getJumpPageId]] to access the jumplist of a specific page.", new FunctionType([], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), true)],
          ["jumpnext", new SymbolMetadata("Calls [[jumpprev]](-n)", new FunctionType([new NumberType(false, true)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["jumpprev", new SymbolMetadata("Similar to Pentadactyl or vim's jump list.\n\nWhen you scroll on a page, either by using the mouse or Tridactyl's key bindings, your position in the page will be saved after jumpdelay milliseconds (`:get jumpdelay` to know how many milliseconds that is). If you scroll again, you'll be able to go back to your previous position by using `:jumpprev 1`. If you need to go forward in the jumplist, use `:jumpprev -1`.\n\nKnown bug: Tridactyl will use the same jumplist for multiple visits to a same website in the same tab, see [github issue 834](https://github.com/tridactyl/tridactyl/issues/834).", new FunctionType([new NumberType(false, true)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["markjump", new SymbolMetadata("Jumps to a local mark, a global mark, or the location before the last mark jump.\n[a-z] are local marks, [A-Z] are global marks and '`' is the location before the last mark jump.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["markjumplocal", new SymbolMetadata("Jumps to a local mark.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["markjumpglobal", new SymbolMetadata("Jumps to a global mark. If the tab with the mark no longer exists or its url differs from the mark's url,\njumps to another tab with the mark's url or creates it first if such tab does not exist.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["markjumpbefore", new SymbolMetadata("Jumps to a location saved before the last mark jump as long as the tab it's located in exists and its url didn't change.\nOverwrites the location before the last mark jump - repeating this method will jump back and forth between two locations.", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["scrolltab", new SymbolMetadata("Scrolls to a given position in a tab identified by tabId and prints a message in it.", new FunctionType([new NumberType(false, false), new NumberType(false, false), new NumberType(false, false), new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["markadd", new SymbolMetadata("Adds a global or a local mark. In case of a local mark, it will be assigned to the current page url.\nIf a mark is already assigned, it is overwritten.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["markaddlocal", new SymbolMetadata("Assigns a local mark to the current url and the given key. If a mark is already assigned, it is overwritten.\nTwo urls are considered the same if they're identical ignoring anchors.\nLocal marks are not persisted between browser restarts.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["markaddglobal", new SymbolMetadata("Assigns a global mark to the given key. If a mark is already assigned, it is overwritten.\nGlobal marks are persisted between browser restarts.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["addJump", new SymbolMetadata("Called on 'scroll' events.\nIf you want to have a function that moves within the page but doesn't add a\nlocation to the jumplist, make sure to set JUMPED to true before moving\naround.\nThe setTimeout call is required because sometimes a user wants to move\nsomewhere by pressing 'j' multiple times and we don't want to add the\nin-between locations to the jump list", new FunctionType([], new VoidType(false, false), false, false), true)],
          ["addTabHistory", new SymbolMetadata("", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["unfocus", new SymbolMetadata("Blur (unfocus) the active element and enter normal mode", new FunctionType([], new VoidType(false, false), false, false), false)],
          ["scrollpx", new SymbolMetadata("Scrolls the window or any scrollable child element by a pixels on the horizontal axis and b pixels on the vertical axis.", new FunctionType([new NumberType(false, false), new NumberType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["scrollto", new SymbolMetadata("If two numbers are given, treat as x and y values to give to window.scrollTo\nIf one number is given, scroll to that percentage along a chosen axis, defaulting to the y-axis. If the number has 'c' appended to it, it will be interpreted in radians.\n\nNote that if `a` is 0 or 100 and if the document is not scrollable in the given direction, Tridactyl will attempt to scroll the first scrollable element until it reaches the very bottom of that element.\n\nExamples:\n\n- `scrollto 50` -> scroll halfway down the page.\n- `scrollto 3.14c` -> scroll approximately 49.97465213% of the way down the page.", new FunctionType([new UnionType([
            new StringType(false, false),
            new NumberType(false, false)
          ], false, false), new UnionType([
            new NumberType(false, false),
            new LiteralTypeType("x", false, false),
            new LiteralTypeType("y", false, false)
          ], false, true)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["scrollline", new SymbolMetadata("Scrolls the document of its first scrollable child element by n lines.\n\nThe height of a line is defined by the site's CSS. If Tridactyl can't get it, it'll default to 22 pixels.", new FunctionType([new NumberType(false, true), new NumberType(false, true)], new AnyType(true, false), false, false), false)],
          ["scrollpage", new SymbolMetadata("Scrolls the document by n pages.\nThe height of a page is the current height of the window.", new FunctionType([new NumberType(false, true), new NumberType(false, true)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["find", new SymbolMetadata('Rudimentary find mode, left unbound by default as we don\'t currently support `incsearch`. Suggested binds:\n\n     bind / fillcmdline find\n     bind ? fillcmdline find --reverse\n     bind n findnext --search-from-view\n     bind N findnext --search-from-view --reverse\n     bind gn findselect\n     bind gN composite findnext --search-from-view --reverse; findselect\n     bind ,<Space> nohlsearch\n\nArgument: A string you want to search for.\n\nThis function accepts two flags: `-?` or `--reverse` to search from the bottom rather than the top and `-: n` or `--jump-to n` to jump directly to the nth match.\n\nThe behavior of this function is affected by the following setting:\n\n`findcase`: either "smart", "sensitive" or "insensitive". If "smart", find will be case-sensitive if the pattern contains uppercase letters.\n\nKnown bugs: find will currently happily jump to a non-visible element, and pressing n or N without having searched for anything will cause an error.', new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["findnext", new SymbolMetadata("Jump to the next nth searched pattern.\n\nAvailable flags:\n- `-f` or `--search-from-view` to search from the current view instead of the previous match\n- `-?` or `--reverse` to reverse the sign of the number", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["clearsearchhighlight", new SymbolMetadata("", new FunctionType([], new AnyType(true, false), false, false), false)],
          ["findselect", new SymbolMetadata("Highlight the current find-mode match result and enter the visual mode.", new FunctionType([], new VoidType(false, false), false, false), false)],
          ["history", new SymbolMetadata("", new FunctionType([new StringType(false, false), new NumberType(false, false)], new VoidType(false, false), false, false), true)],
          ["forward", new SymbolMetadata("Navigate forward one page in history.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new VoidType(false, false), false, false), false)],
          ["back", new SymbolMetadata("Navigate back one page in history.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new VoidType(false, false), false, false), false)],
          ["reload", new SymbolMetadata("Reload the next n tabs, starting with activeTab, possibly bypassingCache", new FunctionType([new NumberType(false, true), new BooleanType(false, true)], new TypeReferenceType("Promise", [new ArrayType(new VoidType(false, false), false, false)], false, false), false, false), false)],
          ["reloadall", new SymbolMetadata("Reloads all tabs, bypassing the cache if hard is set to true", new FunctionType([new BooleanType(false, true)], new TypeReferenceType("Promise", [new ArrayType(new VoidType(false, false), false, false)], false, false), false, false), false)],
          ["reloadallbut", new SymbolMetadata("Reloads all tabs except the current one, bypassing the cache if hard is set to true\nYou probably want to use [[reloaddead]] instead if you just want to be able to ensure Tridactyl is loaded in all tabs where it can be", new FunctionType([new BooleanType(false, true)], new TypeReferenceType("Promise", [new ArrayType(new VoidType(false, false), false, false)], false, false), false, false), false)],
          ["reloaddead", new SymbolMetadata("Reloads all tabs which Tridactyl isn't loaded in", new FunctionType([new BooleanType(false, true)], new TypeReferenceType("Promise", [new TupleType([
            new AnyType(true, false),
            new AnyType(true, false),
            new AnyType(true, false),
            new AnyType(true, false),
            new AnyType(true, false),
            new AnyType(true, false),
            new AnyType(true, false),
            new AnyType(true, false),
            new AnyType(true, false),
            new AnyType(true, false)
          ], false, false)], false, false), false, false), false)],
          ["reloadhard", new SymbolMetadata("Reload the next n tabs, starting with activeTab. bypass cache for all", new FunctionType([new NumberType(false, true)], new TypeReferenceType("Promise", [new ArrayType(new VoidType(false, false), false, false)], false, false), false, false), false)],
          ["open", new SymbolMetadata("Open a new page in the current tab.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["bmarks", new SymbolMetadata("Works exactly like [[open]], but only suggests bookmarks.\n\nIf you want to use optional flags, you should run `:set completions.Bmark.autoselect false` to prevent the spacebar from inserting the URL of the top bookmark.", new FunctionType([new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["open_quiet", new SymbolMetadata("Like [[open]] but doesn't make a new entry in history.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["url2args", new SymbolMetadata('If the url of the current document matches one of your search engines, will convert it to a list of arguments that open/tabopen will understand. If the url doesn\'t match any search engine, returns the url without modifications.\n\nFor example, if you have searchurls.gi set to "https://www.google.com/search?q=%s&tbm=isch", using this function on a page you opened using "gi butterflies" will return "gi butterflies".\n\nThis is useful when combined with fillcmdline, for example like this: `bind O composite url2args | fillcmdline open`.\n\nNote that this might break with search engines that redirect you to other pages/add GET parameters that do not exist in your searchurl.', new FunctionType([], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), false)],
          ["removeSource", new SymbolMetadata("", new FunctionType([], new VoidType(false, false), false, false), true)],
          ["viewsource", new SymbolMetadata("Display the (HTML) source of the current page.\n\nBehaviour can be changed by the 'viewsource' setting.\n\nIf the 'viewsource' setting is set to 'default' rather than 'tridactyl',\nthe url the source of which should be displayed can be given as argument.\nOtherwise, the source of the current document will be displayed.", new FunctionType([new StringType(false, true)], new VoidType(false, false), false, false), false)],
          ["home", new SymbolMetadata('Go to the homepages you have set with `set homepages ["url1", "url2"]`.', new FunctionType([new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, true)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["help", new SymbolMetadata('Show this page.\n\n`:help something` jumps to the entry for something. Something can be an excmd, an alias for an excmd, a binding or a setting.\n\nOn the ex command page, the "nmaps" list is a list of all the bindings for the command you\'re seeing and the "exaliases" list lists all its aliases.\n\nIf there\'s a conflict (e.g. you have a "go" binding that does something, a "go" excmd that does something else and a "go" setting that does a third thing), the binding is chosen first, then the setting, then the excmd. In such situations, if you want to let Tridactyl know you\'re looking for something specfic, you can specify the following flags as first arguments:\n\n`-a`: look for an alias\n`-b`: look for a binding\n`-e`: look for an ex command\n`-s`: look for a setting\n\nIf the keyword you gave to `:help` is actually an alias for a composite command (see [[composite]]) , you will be taken to the help section for the first command of the pipeline. You will be able to see the whole pipeline by hovering your mouse over the alias in the "exaliases" list. Unfortunately there currently is no way to display these HTML tooltips from the keyboard.\n\ne.g. `:help bind`', new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["apropos", new SymbolMetadata("Search through the help pages. Accepts the same flags as [[help]]. Only useful in interactive usage with completions; the command itself is just a wrapper for [[help]].", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["tutor", new SymbolMetadata("Start the tutorial", new FunctionType([new StringType(false, true)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["credits", new SymbolMetadata("Display Tridactyl's contributors in order of commits in a user-friendly fashion", new FunctionType([], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), false)],
          ["no_mouse_mode", new SymbolMetadata('Hides the cursor and covers the current page in an overlay to prevent clicking on links with the mouse to force yourself to use hint mode.\n\nTo bring back mouse control, use [[mouse_mode]] or refresh the page.\n\nSuggested usage: `autocmd DocLoad .* no_mouse_mode`\n\n"There is no mouse".', new FunctionType([], new VoidType(false, false), false, false), false)],
          ["neo_mouse_mode", new SymbolMetadata('Matrix variant of [[no_mouse_mode]]\n\n"There is no mouse".\n\nCoincidentally added to Tridactyl at the same time as we reached 1337 stars on GitHub.', new FunctionType([], new VoidType(false, false), false, false), false)],
          ["snow_mouse_mode", new SymbolMetadata("Christmas variant of [[no_mouse_mode]] (if you live in $DEFAULT hemisphere).", new FunctionType([], new VoidType(false, false), false, false), false)],
          ["pied_piper_mouse_mode", new SymbolMetadata("Music variant of [[no_mouse_mode]].", new FunctionType([], new VoidType(false, false), false, false), false)],
          ["drawingstart", new SymbolMetadata("Drawable variant of [[no_mouse_mode]]\nIn this mode, you can use the mouse or a digital stylus to draw. To switch to an eraser, use [[drawingerasertoggle]]\nUse [[mouse_mode]] to return, or refresh page.\nSuggested usage: `autocmd DocLoad .* drawingstart\n\n**Warning**: Windows Ink enabled input devices don't work, disable it for your browser, or use a mouse.", new FunctionType([], new VoidType(false, false), false, false), false)],
          ["drawingerasertoggle", new SymbolMetadata("Switch between pen and eraser for [[drawingstart]]\nSuggested usage: `bind e drawingerasertoggle`. If you have a digital pen, map the button to `e` to switch easily.", new FunctionType([], new VoidType(false, false), false, false), false)],
          ["mouse_mode", new SymbolMetadata("Revert any variant of the [[no_mouse_mode]]\n\nSuggested usage: `bind <C-\\> mouse_mode` with the autocmd mentioned in [[no_mouse_mode]] or [[drawingstart]].", new FunctionType([], new VoidType(false, false), false, false), false)],
          ["findRelLink", new SymbolMetadata("", new FunctionType([new TypeReferenceType("RegExp", [], false, false)], new TypeReferenceType("HTMLAnchorElement", [], false, false), false, false), true)],
          ["selectLast", new SymbolMetadata("", new FunctionType([new StringType(false, false)], new TypeReferenceType("HTMLElement", [], false, false), false, false), true)],
          ["followpage", new SymbolMetadata("Find a likely next/previous link and follow it\n\nIf a link or anchor element with rel=rel exists, use that, otherwise fall back to:\n\n    1) find the last anchor on the page with innerText matching the appropriate `followpagepattern`.\n    2) call [[urlincrement]] with 1 or -1\n\nIf you want to support e.g. French:\n\n```\nset followpagepatterns.next ^(next|newer|prochain)\\b|\xBB|>>\nset followpagepatterns.prev ^(prev(ious)?|older|pr\xE9c\xE9dent)\\b|\xAB|<<\n```", new FunctionType([new UnionType([
            new LiteralTypeType("next", false, false),
            new LiteralTypeType("prev", false, false)
          ], false, true)], new VoidType(false, false), false, false), false)],
          ["urlincrement", new SymbolMetadata("Increment the current tab URL", new FunctionType([new NumberType(false, true), new NumberType(false, true)], new VoidType(false, false), false, false), false)],
          ["urlroot", new SymbolMetadata("Go to the root domain of the current URL", new FunctionType([], new VoidType(false, false), false, false), false)],
          ["urlparent", new SymbolMetadata("Go to the parent URL of the current tab's URL", new FunctionType([new NumberType(false, true)], new VoidType(false, false), false, false), false)],
          ["urlmodify", new SymbolMetadata('Open a URL made by modifying the current URL\n\nThere are several modes:\n\n* Text replace mode:   `urlmodify -t <old> <new>`\n\n   Replaces the first instance of the text `old` with `new`.\n      * `http://example.com` -> (`-t exa peta`) -> `http://petample.com`\n\n* Regex replacment mode: `urlmodify -r <regexp> <new> [flags]`\n\n   Replaces the first match of the `regexp` with `new`. You can use\n   flags `i` and `g` to match case-insensitively and to match\n   all instances respectively\n      * `http://example.com` -> (`-r [ea] X g`) -> `http://XxXmplX.com`\n\n* Query set mode: `urlmodify -s <query> <value>`\n\n   Sets the value of a query to be a specific one. If the query already\n   exists, it will be replaced.\n      * `http://e.com?id=abc` -> (`-s foo bar`) -> `http://e.com?id=abc&foo=bar\n\n* Query replace mode: `urlmodify -q <query> <new_val>`\n\n   Replace the value of a query with a new one:\n      * `http://e.com?id=foo` -> (`-q id bar`) -> `http://e.com?id=bar\n\n* Query delete mode: `urlmodify -Q <query>`\n\n   Deletes the given query (and the value if any):\n      * `http://e.com?id=foo&page=1` -> (`-Q id`) -> `http://e.com?page=1`\n\n* Graft mode: `urlmodify -g <graft_point> <new_path_tail>`\n\n   "Grafts" a new tail on the URL path, possibly removing some of the old\n   tail. Graft point indicates where the old URL is truncated before adding\n   the new path.\n\n   * `graft_point` >= 0 counts path levels, starting from the left\n   (beginning). 0 will append from the "root", and no existing path will\n   remain, 1 will keep one path level, and so on.\n   * `graft_point` < 0 counts from the right (i.e. the end of the current\n   path). -1 will append to the existing path, -2 will remove the last path\n   level, and so on.\n\n   ```plaintext\n   http://website.com/this/is/the/path/component\n   Graft point:       ^    ^  ^   ^    ^        ^\n   From left:         0    1  2   3    4        5\n   From right:       -6   -5 -4  -3   -2       -1\n   ```\n\n   Examples:\n\n   * `http://e.com/issues/42` -> (`-g 0 foo`) -> `http://e.com/foo`\n   * `http://e.com/issues/42` -> (`-g 1 foo`) -> `http://e.com/issues/foo`\n   * `http://e.com/issues/42` -> (`-g -1 foo`) -> `http://e.com/issues/42/foo`\n   * `http://e.com/issues/42` -> (`-g -2 foo`) -> `http://e.com/issues/foo`\n\n\n* URL Input: `urlmodify -*u <arguments> <URL>`\n\n   Each mode can be augmented to accept a URL as the last argument instead of\n   the current url.\n\n   Examples:\n\n   * `urlmodify -tu <old> <new> <URL>`\n   * `urlmodify -su <query> <value> <URL>`\n   * `urlmodify -gu <graft_point> <new_path_tail> <URL>`', new FunctionType([new UnionType([
            new LiteralTypeType("-t", false, false),
            new LiteralTypeType("-r", false, false),
            new LiteralTypeType("-s", false, false),
            new LiteralTypeType("-q", false, false),
            new LiteralTypeType("-Q", false, false),
            new LiteralTypeType("-g", false, false),
            new LiteralTypeType("-tu", false, false),
            new LiteralTypeType("-ru", false, false),
            new LiteralTypeType("-su", false, false),
            new LiteralTypeType("-qu", false, false),
            new LiteralTypeType("-Qu", false, false),
            new LiteralTypeType("-gu", false, false)
          ], false, false), new ArrayType(new StringType(false, false), true, false)], new VoidType(false, false), false, false), false)],
          ["urlmodify_js", new SymbolMetadata("Like [[urlmodify]] but returns the modified URL for use with [[js]] and [[composite]]\n\nE.g.\n\n`:composite urlmodify_js -t www. old. | tabopen `", new FunctionType([new UnionType([
            new LiteralTypeType("-t", false, false),
            new LiteralTypeType("-r", false, false),
            new LiteralTypeType("-s", false, false),
            new LiteralTypeType("-q", false, false),
            new LiteralTypeType("-Q", false, false),
            new LiteralTypeType("-g", false, false),
            new LiteralTypeType("-tu", false, false),
            new LiteralTypeType("-ru", false, false),
            new LiteralTypeType("-su", false, false),
            new LiteralTypeType("-qu", false, false),
            new LiteralTypeType("-Qu", false, false),
            new LiteralTypeType("-gu", false, false)
          ], false, false), new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["geturlsforlinks", new SymbolMetadata("Returns the url of links that have a matching rel.\n\nDon't bind to this: it's an internal function.", new FunctionType([new StringType(false, false), new StringType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), true)],
          ["zoom", new SymbolMetadata("Sets the current page's zoom level anywhere between 30% and 300%.\n\nIf you overshoot the level while using relative adjustments i.e. level > 300% or level < 30% the zoom level will be set to it's maximum or minimum position. Relative adjustments are made * in percentage points, i.e. `:zoom +10 true` increases the zoom level from 50% to 60% or from * 200% to 210%.", new FunctionType([new NumberType(false, true), new StringType(false, true), new StringType(false, true)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["readerold", new SymbolMetadata("", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["loadaucmds", new SymbolMetadata("", new FunctionType([new UnionType([
            new LiteralTypeType("UriChange", false, false),
            new LiteralTypeType("DocStart", false, false),
            new LiteralTypeType("DocLoad", false, false),
            new LiteralTypeType("DocEnd", false, false),
            new LiteralTypeType("TabEnter", false, false),
            new LiteralTypeType("TabLeft", false, false),
            new LiteralTypeType("FullscreenEnter", false, false),
            new LiteralTypeType("FullscreenLeft", false, false),
            new LiteralTypeType("FullscreenChange", false, false),
            new LiteralTypeType("HistoryState", false, false)
          ], false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["focusinput", new SymbolMetadata("Focus the last used input on the page", new FunctionType([new UnionType([
            new StringType(false, false),
            new NumberType(false, false)
          ], false, false)], new VoidType(false, false), false, false), false)],
          ["changelistjump", new SymbolMetadata("Focus the tab which contains the last focussed input element. If you're lucky, it will focus the right input, too.\n\nCurrently just goes to the last focussed input; being able to jump forwards and backwards is planned.", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["focusbyid", new SymbolMetadata("", new FunctionType([new StringType(false, false)], new VoidType(false, false), false, false), true)],
          ["tabIndexSetActive", new SymbolMetadata("", new FunctionType([new UnionType([
            new StringType(false, false),
            new NumberType(false, false)
          ], false, false)], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), true)],
          ["tabnext", new SymbolMetadata("Switch to the next tab, wrapping round.\n\nIf increment is specified, move that many tabs forwards.", new FunctionType([new NumberType(false, true)], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), false)],
          ["tabnext_gt", new SymbolMetadata("Switch to the next tab, wrapping round.\n\nIf an index is specified, go to the tab with that number (this mimics the\nbehaviour of `{count}gt` in vim, except that this command will accept a\ncount that is out of bounds (and will mod it so that it is within bounds as\nper [[tabmove]], etc)).", new FunctionType([new NumberType(false, true)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["tabprev", new SymbolMetadata("Switch to the previous tab, wrapping round.\n\nIf increment is specified, move that many tabs backwards.", new FunctionType([new NumberType(false, true)], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), false)],
          ["tabpush", new SymbolMetadata("Pushes the current tab to another window. Only works for windows of the same type\n(can't push a non-private tab to a private window or a private tab to\na non-private window).\nIf *windowId* is not specified, pushes to the next newest window,\nwrapping around.", new FunctionType([new NumberType(false, true)], new TypeReferenceType("Promise", [new UnionType([
            new TypeReferenceType("Tab", [], false, false),
            new ArrayType(new TypeReferenceType("Tab", [], false, false), false, false)
          ], false, false)], false, false), false, false), false)],
          ["tabaudio", new SymbolMetadata("Switch to the tab currently playing audio, if any.", new FunctionType([], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), false)],
          ["winmerge", new SymbolMetadata("Moves all of the targetted window's tabs to the current window. Only works for windows of the same type\n(can't merge a non-private tab with a private window).", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["parseWinTabIndex", new SymbolMetadata("Given a string of the format windowIndex.tabIndex, returns a tuple of\nnumbers corresponding to the window index and tab index or the current\nwindow and tab if the string doesn't have the right format.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new ArrayType(new NumberType(false, false), false, false)], false, false), false, false), false)],
          ["tabgrab", new SymbolMetadata("Moves a tab identified by a windowIndex.tabIndex id to the current window.\nOnly works for windows of the same type (can't grab a non-private tab from a\nprivate window and can't grab a private tab from a non-private window).", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new UnionType([
            new TypeReferenceType("Tab", [], false, false),
            new ArrayType(new TypeReferenceType("Tab", [], false, false), false, false)
          ], false, false)], false, false), false, false), false)],
          ["tabopen", new SymbolMetadata('Like [[open]], but in a new tab. If no address is given, it will open the newtab page, which can be set with `set newtab [url]`\n\nUse the `-c` flag followed by a container name to open a tab in said container. Tridactyl will try to fuzzy match a name if an exact match is not found (opening the tab in no container can be enforced with "firefox-default" or "none"). If any autocontainer directives are configured and -c is not set, Tridactyl will try to use the right container automatically using your configurations.\n\nUse the `-b` flag to open the tab in the background.\n\nUse the `-w` flag to wait for the web page to load before "returning". This only makes sense for use with [[composite]], which waits for each command to return before moving on to the next one, e.g. `composite tabopen -b -w news.bbc.co.uk ; tabnext`.\n\nThe special flag "--focus-address-bar" should focus the Firefox address bar after opening if no URL is provided.\n\nThese three can be combined in any order, but need to be placed as the first arguments.\n\nUnlike Firefox\'s Ctrl-t shortcut, this opens tabs immediately after the\ncurrently active tab rather than at the end of the tab list because that is\nthe authors\' preference.\n\nIf you would rather the Firefox behaviour `set tabopenpos last`. This\npreference also affects the clipboard, quickmarks, home, help, etc.\n\nIf you would rather the URL be opened as if you\'d middle clicked it, `set\ntabopenpos related`.\n\nHinting is controlled by `relatedopenpos`\n\nAlso see the [[searchengine]] and [[searchurls]] settings.', new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), false)],
          ["tabopenwait", new SymbolMetadata("Like [[tabopen]] but waits for the DOM to load before resolving its promise. Useful if you're hoping to execute ex-commands in that tab.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), false)],
          ["tabopen_helper", new SymbolMetadata("", new FunctionType([new ObjectType(/* @__PURE__ */ new Map([]), false, false)], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), true)],
          ["tabqueue", new SymbolMetadata("Passes its first argument to `tabopen -b`. Once the tab opened by `tabopen\n-b` is activated/selected/focused, opens its second argument with `tabopen\n-b`. Once the second tab is activated/selected/focused, opens its third\nargument with `tabopen -b` and so on and so forth until all arguments have\nbeen opened in a new tab or until a tab is closed without being\nactivated/selected/focused.\n\nExample usage:\n   `tabqueue http://example.org http://example.com http://example.net`\n   `composite hint -qpipe a href | tabqueue`", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["idFromIndex", new SymbolMetadata("Resolve a tab index to the tab id of the corresponding tab in this window.", new FunctionType([new UnionType([
            new StringType(false, false),
            new NumberType(false, false)
          ], false, true)], new TypeReferenceType("Promise", [new NumberType(false, false)], false, false), false, false), true)],
          ["tabFromIndex", new SymbolMetadata("Like [[idFromIndex]] but returns the whole tab object", new FunctionType([new UnionType([
            new StringType(false, false),
            new NumberType(false, false)
          ], false, true)], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), true)],
          ["tabonly", new SymbolMetadata("Close all other tabs in this window", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["tabduplicate", new SymbolMetadata("Duplicate a tab.", new FunctionType([new NumberType(false, true)], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), false)],
          ["tabdetach", new SymbolMetadata("Detach a tab, opening it in a new window.", new FunctionType([new NumberType(false, true)], new TypeReferenceType("Promise", [new TypeReferenceType("Window", [], false, false)], false, false), false, false), false)],
          ["fullscreen", new SymbolMetadata("Toggle fullscreen state", new FunctionType([], new TypeReferenceType("Promise", [new TypeReferenceType("Window", [], false, false)], false, false), false, false), false)],
          ["tabclose", new SymbolMetadata("Close a tab.\n\nKnown bug: autocompletion will make it impossible to close more than one tab at once if the list of numbers looks enough like an open tab's title or URL.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["tabcloseallto", new SymbolMetadata("Close all tabs to the side specified", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["undo", new SymbolMetadata('Restore the most recently closed item.\nThe default behaviour is to restore the most recently closed tab in the\ncurrent window unless the most recently closed item is a window.\n\nSupplying either "tab" or "window" as an argument will specifically only\nrestore an item of the specified type. Supplying "tab_strict" only restores\ntabs that were open in the current window.', new FunctionType([new StringType(false, true)], new TypeReferenceType("Promise", [new NumberType(false, false)], false, false), false, false), false)],
          ["tabmove", new SymbolMetadata("Move the current tab to be just in front of the index specified.\n\nKnown bug: This supports relative movement with `tabmove +pos` and `tabmove -pos`, but autocomplete doesn't know that yet and will override positive and negative indexes.\n\nPut a space in front of tabmove if you want to disable completion and have the relative indexes at the command line.\n\nBinds are unaffected.", new FunctionType([new StringType(false, true)], new TypeReferenceType("Promise", [new UnionType([
            new TypeReferenceType("Tab", [], false, false),
            new ArrayType(new TypeReferenceType("Tab", [], false, false), false, false)
          ], false, false)], false, false), false, false), false)],
          ["tabsort", new SymbolMetadata("Move tabs in current window according to various criteria:\n\n- `--containers` groups tabs by containers\n- `--title` sorts tabs by title\n- `--url` sorts tabs by url (the default)\n- `(tab1, tab2) => true|false`\n      - sort by arbitrary comparison function. `tab{1,2}` are objects with properties described here: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["pin", new SymbolMetadata("Pin the current tab", new FunctionType([], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), false)],
          ["mute", new SymbolMetadata('Mute current tab or all tabs.\n\nPassing "all" to the excmd will operate on  the mute state of all tabs.\nPassing "unmute" to the excmd will unmute.\nPassing "toggle" to the excmd will toggle the state of `browser.tabs.tab.MutedInfo`', new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["winopen", new SymbolMetadata("Like [[tabopen]], but in a new window.\n\n`winopen -private [...]` will open the result in a private window (and won't store the command in your ex-history ;) ).\n\n`winopen -popup [...]` will open it in a popup window. You can combine the two for a private popup.\n\n`winopen -c containername [...]` will open the result in a container while ignoring other options given. See [[tabopen]] for more details on containers.\n\nExample: `winopen -popup -private ddg.gg`", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["winclose", new SymbolMetadata("Close a window.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new ArrayType(new VoidType(false, false), false, false)], false, false), false, false), false)],
          ["wintitle", new SymbolMetadata("Add/change a prefix to the current window title\n\nExample: `wintitle [Hovercraft research]`\n\nProtip: unicode emojis work :)", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new TypeReferenceType("Window", [], false, false)], false, false), false, false), false)],
          ["qall", new SymbolMetadata("Close all windows", new FunctionType([], new TypeReferenceType("Promise", [new ArrayType(new VoidType(false, false), false, false)], false, false), false, false), false)],
          ["sidebaropen", new SymbolMetadata("EXPERIMENTAL: like [[open]] but loads queries in the sidebar. Doesn't actually open the sidebar - see [[sidebartoggle]].\n\nNot all schemas are supported, such as `about:*` and Firefox's built-in search engines. Tridactyl's searchurls and jsurls work fine - `:set searchengine google` will be sufficient for most users.\n\nIf you try to open the command line in the sidebar things will break.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["jsua", new SymbolMetadata('Like [[jsb]] but preserves "user action" intent for use with certain web extension APIs. Can only be called with browser mode binds, e.g.\n\n`:bind --mode=browser <C-.> jsua browser.sidebarAction.open(); tri.excmds.sidebaropen("https://mail.google.com/mail/mu")`', new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["sidebartoggle", new SymbolMetadata("Toggle the side bar. Can only be called through browser mode binds, e.g.\n\n`:bind --mode=browser <C-.> sidebartoggle`", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["containerclose", new SymbolMetadata("Closes all tabs open in the same container across all windows.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["containercreate", new SymbolMetadata("Creates a new container. Note that container names must be unique and that the checks are case-insensitive.\n\nFurther reading https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity\n\nExample usage:\n    - `:containercreate tridactyl green dollar`", new FunctionType([new StringType(false, false), new StringType(false, true), new StringType(false, true)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["containerdelete", new SymbolMetadata("Delete a container. Closes all tabs associated with that container beforehand. Note: container names are case-insensitive.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["containerupdate", new SymbolMetadata("Update a container's information. Note that none of the parameters are optional and that container names are case-insensitive.\n\nExample usage:\n\n- Changing the container name: `:containerupdate banking blockchain green dollar`\n\n- Changing the container icon: `:containerupdate banking banking green briefcase`\n\n- Changing the container color: `:containerupdate banking banking purple dollar`", new FunctionType([new StringType(false, false), new StringType(false, false), new StringType(false, false), new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["viewcontainers", new SymbolMetadata("Shows a list of the current containers in Firefox's native JSON viewer in the current tab.\n\nNB: Tridactyl cannot run on this page!", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["recontain", new SymbolMetadata("Opens the current tab in another container.\n\nThis is probably not a good idea if you care about tracking protection!\nTransfering URLs from one container to another allows websites to track\nyou across those containers.\n\nRead more here:\nhttps://github.com/mozilla/multi-account-containers/wiki/Moving-between-containers", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["setContentStateGroup", new SymbolMetadata("", new FunctionType([new StringType(false, false)], new VoidType(false, false), false, false), true)],
          ["tgroupcreate", new SymbolMetadata("Create a new tab group in the current window. NB: use [[tgroupswitch]] instead\nin most cases, since it will create non-existent tab groups before switching\nto them.\n\nTab groups are a way of organizing different groups of related tabs within a\nsingle window. Groups allow you to have different named contexts and show\nonly the tabs for a single group at a time.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), false)],
          ["tgroupswitch", new SymbolMetadata('Switch to a different tab group, hiding all other tabs.\n\n"%" denotes the current tab group and "#" denotes the tab group that was\nlast active. "A" indates a tab group that contains an audible tab. Use\n`:set completions.Tab.statusstylepretty true` to display a unicode character\ninstead.', new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), false)],
          ["tgrouplast", new SymbolMetadata("Switch to the previously active tab group.", new FunctionType([], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), false)],
          ["tgrouprename", new SymbolMetadata("Rename the current tab group.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), false)],
          ["tgroupclose", new SymbolMetadata("Close all tabs in a tab group and delete the group.", new FunctionType([new StringType(false, true)], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), false)],
          ["tgroupmove", new SymbolMetadata("Move the current tab to another tab group, creating it if it does not exist.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), false)],
          ["tgroupabort", new SymbolMetadata("Delete all tab group information for the current window and show all tabs.", new FunctionType([], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["version", new SymbolMetadata("", new FunctionType([], new AnyType(true, false), false, false), false)],
          ["mode", new SymbolMetadata("Switch mode.\n\nFor now you probably shouldn't manually switch to other modes than `normal` and `ignore`. Make sure you're aware of the key bindings (ignoremaps) that will allow you to go come back to normal mode from ignore mode before you run `:mode ignore` otherwise you're going to have a hard time re-enabling Tridactyl.\n\nExample:\n     - `mode ignore` to ignore almost all keys.\n\nIf you're looking for a way to temporarily disable Tridactyl, `mode ignore` might be what you're looking for.\n\nNote that when in ignore mode, Tridactyl will not switch to insert mode when focusing text areas/inputs. This is by design.\n\n**New feature:** you can add modes as simply as adding binds with `bind --mode=[newmodename]` and then enter the mode with `mode [newmodename]`.", new FunctionType([new AnyType(true, false)], new VoidType(false, false), false, false), false)],
          ["getnexttabs", new SymbolMetadata("", new FunctionType([new NumberType(false, false), new NumberType(false, true)], new TypeReferenceType("Promise", [new ArrayType(new NumberType(false, false), false, false)], false, false), false, false), true)],
          ["repeat", new SymbolMetadata("Repeats a `cmd` `n` times.\nIf `cmd` doesn't exist, re-executes the last exstr that was executed in the tab.\nExecutes the command once if `n` isn't defined either.\n\nThis re-executes the last *exstr*, not the last *excmd*. Some excmds operate internally by constructing and evaluating exstrs, others by directly invoking excmds without going through the exstr parser. For example, aucmds and keybindings evaluate exstrs and are repeatable, while commands like `:bmarks` directly invoke `:tabopen` and you'll repeat the `:bmarks` rather than the internal `:tabopen`.\n\nIt's difficult to execute this in the background script (`:jsb`, `:run_excmd`, `:autocmd TriStart`, `:source`), but if you you do, it will re-execute the last exstr that was executed in the background script. What this may have been is unpredictable and not precisely encouraged.", new FunctionType([new NumberType(false, true), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["composite", new SymbolMetadata("Split `cmds` on pipes (|) and treat each as its own command. Return values are passed as the last argument of the next ex command, e.g,\n\n`composite echo yes | fillcmdline` becomes `fillcmdline yes`. A more complicated example is the ex alias, `command current_url composite get_current_url | fillcmdline_notrail `, which is used in, e.g. `bind T current_url tabopen`.\n\nWorkaround: this should clearly be in the parser, but we haven't come up with a good way to deal with |s in URLs, search terms, etc. yet.\n\n`cmds` are also split with semicolons (;) and don't pass things along to each other.\n\nIf you wish to have a command that has semi-colons in it (e.g. some JavaScript or `hint -;`), first bind a [[command]] to it. For example, `command hint_focus -;`, and then `composite hint_focus; !s xdotool key Menu`.\n\nThe behaviour of combining ; and | in the same composite command is left as an exercise for the reader.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["shellescape", new SymbolMetadata("Escape command for safe use in shell with composite. E.g: `composite js MALICIOUS_WEBSITE_FUNCTION() | shellescape | exclaim ls`", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["escapehatch", new SymbolMetadata("Magic escape hatch: if Tridactyl can't run in the current tab, return to a tab in the current window where Tridactyl can run, making such a tab if it doesn't currently exist. If Tridactyl can run in the current tab, return focus to the document body from e.g. the URL bar or a video player.\n\nOnly useful if called from a background context, e.g. at the end of an RC file to ensure that when you start the browser you don't get trapped on an about: page, or via `bind --mode=browser escapehatch` (bound to `<C-,>` by default).\n\nNB: when called via `bind --mode=browser`, we return focus from the address bar by opening and closing the \"sidebar\" (which is used exclusively for this purpose). If escapehatch is called in any other way, we cannot do this as Mozilla thinks it might [spook](https://extensionworkshop.com/documentation/publish/add-on-policies/#no-surprises) [you](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions) : ).\n\nThis sidebar hack will close other sidebars such a TreestyleTabs. You can disable it with `:set escapehatchsidebarhack false`, but Tridactyl will no longer be able to get focus back from certain places such as the address bar.", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["sleep", new SymbolMetadata("Sleep time_ms milliseconds.\nThis is probably only useful for composite commands that need to wait until the previous asynchronous command has finished running.", new FunctionType([new NumberType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["showcmdline", new SymbolMetadata("", new FunctionType([new BooleanType(false, true)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["hidecmdline", new SymbolMetadata("", new FunctionType([], new VoidType(false, false), false, false), true)],
          ["fillcmdline", new SymbolMetadata("Set the current value of the commandline to string *with* a trailing space", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["fillcmdline_notrail", new SymbolMetadata("Set the current value of the commandline to string *without* a trailing space", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["fillcmdline_nofocus", new SymbolMetadata("Show and fill the command line without focusing it", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["fillcmdline_tmp", new SymbolMetadata("Shows str in the command line for ms milliseconds. Recommended duration: 3000ms.", new FunctionType([new NumberType(false, false), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["yank", new SymbolMetadata('Copy `content` to clipboard without feedback. Use `clipboard yank` for interactive use.\n\ne.g. `yank bob` puts "bob" in the clipboard; `composite js document.title | yank` puts the document title in the clipboard.', new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new ArrayType(new AnyType(true, false), false, false)], false, false), false, false), false)],
          ["setclip", new SymbolMetadata("Copies a string to the clipboard/selection buffer depending on the user's preferences.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new ArrayType(new AnyType(true, false), false, false)], false, false), false, false), true)],
          ["setclip_webapi", new SymbolMetadata("Copies a string to the clipboard using the Clipboard API.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["getclip", new SymbolMetadata("Fetches the content of the clipboard/selection buffer depending on user's preferences\n\nExposed for use with [[composite]], e.g. `composite getclip | fillcmdline`", new FunctionType([new UnionType([
            new LiteralTypeType("clipboard", false, false),
            new LiteralTypeType("selection", false, false)
          ], false, true)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["getclip_webapi", new SymbolMetadata("Gets the clipboard content using the Clipboard API.", new FunctionType([], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), true)],
          ["clipboard", new SymbolMetadata('Use the system clipboard.\n\nIf `excmd === "open"`, call [[open]] with the contents of the clipboard. Similarly for [[tabopen]].\n\nIf `excmd === "yank"`, copy the current URL, or if given, the value of toYank, into the system clipboard.\n\nIf `excmd === "yankcanon"`, copy the canonical URL of the current page if it exists, otherwise copy the current URL.\n\nIf `excmd === "yankshort"`, copy the shortlink version of the current URL, and fall back to the canonical then actual URL. Known to work on https://yankshort.neocities.org/.\n\nIf `excmd === "yanktitle"`, copy the title of the open page.\n\nIf `excmd === "yankmd"`, copy the title and url of the open page formatted in Markdown for easy use on sites such as reddit. `yankorg` is similar but for Emacs orgmode.\n\nIf you\'re on Linux and the native messenger is installed, Tridactyl will call an external binary (either xclip or xsel) to read or write to your X selection buffer. If you want another program to be used, set "externalclipboardcmd" to its name and make sure it has the same interface as xsel/xclip ("-i"/"-o" and reading from stdin).\n\nWhen doing a read operation (i.e. open or tabopen), if "putfrom" is set to "selection", the X selection buffer will be read instead of the clipboard. Set "putfrom" to "clipboard" to use the clipboard.\n\nWhen doing a write operation, if "yankto" is set to "selection", only the X selection buffer will be written to. If "yankto" is set to "both", both the X selection and the clipboard will be written to. If "yankto" is set to "clipboard", only the clipboard will be written to.', new FunctionType([new UnionType([
            new LiteralTypeType("open", false, false),
            new LiteralTypeType("yank", false, false),
            new LiteralTypeType("yankshort", false, false),
            new LiteralTypeType("yankcanon", false, false),
            new LiteralTypeType("yanktitle", false, false),
            new LiteralTypeType("yankmd", false, false),
            new LiteralTypeType("yankorg", false, false),
            new LiteralTypeType("xselpaste", false, false),
            new LiteralTypeType("tabopen", false, false)
          ], false, true), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["yankimage", new SymbolMetadata("Copy an image to the clipboard.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["tab", new SymbolMetadata("Change active tab.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["taball", new SymbolMetadata("Wrapper for [[tab]] with multi-window completions", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["tabcurrentrename", new SymbolMetadata("Rename current tab.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new VoidType(false, false), false, false), true)],
          ["tabrename", new SymbolMetadata("Rename a tab.", new FunctionType([new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["tab_helper", new SymbolMetadata("Helper to change active tab. Used by [[tab]] and [[taball]].", new FunctionType([new BooleanType(false, false), new BooleanType(false, false), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["command", new SymbolMetadata("Similar to vim's `:command`. Maps one ex-mode command to another.\nIf command already exists, this will override it, and any new commands\nadded in a future release will be SILENTLY overridden. Aliases are\nexpanded recursively.\n\nExamples:\n  - `command t tabopen`\n  - `command tn tabnext_gt`\n  - `command hello t` This will expand recursively into 'hello'->'tabopen'\n\nCommands/aliases are expanded as in a shell, so, given the commands above,\nentering `:tn 43` will expand to `:tabnext_gt 43`. You can use this to create\nyour own ex-commands in conjunction with [[js]], specifically `js -p` and `js -d`.\n\nNote that this is only for excmd -> excmd mappings. To map a normal-mode\ncommand to an excommand, see [[bind]].\n\nSee also:\n  - [[comclear]]", new FunctionType([new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["comclear", new SymbolMetadata("Similar to vim's `comclear` command. Clears an excmd alias defined by\n`command`.\n\nFor example: `comclear helloworld` will reverse any changes caused\nby `command helloworld xxx`\n\nSee also:\n  - [[command]]", new FunctionType([new StringType(false, false)], new VoidType(false, false), false, false), false)],
          ["bind", new SymbolMetadata("Bind a sequence of keys to an excmd or view bound sequence.\n\nThis is an easier-to-implement bodge while we work on vim-style maps.\n\nExamples:\n\n    - `bind G fillcmdline tabopen google`\n    - `bind D composite tabclose | tab #` -> close current tab and switch to most recent previous tab\n    - `bind j scrollline 20`\n    - `bind F hint -b`\n\nYou can view binds by omitting the command line:\n\n    - `bind j`\n    - `bind k`\n\nYou can bind to modifiers and special keys by enclosing them with angle brackets, for example `bind <C-\\>z fullscreen`, `unbind <F1>` (a favourite of people who use TreeStyleTabs :) ), or `bind <Backspace> forward`.\n\nModifiers are truncated to a single character, so Ctrl -> C, Alt -> A, and Shift -> S. Shift is a bit special as it is only required if Shift does not change the key inputted, e.g. `<S-ArrowDown>` is OK, but `<S-a>` should just be `A`.\n\nYou can view all special key names here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values\n\nUse [[composite]] if you want to execute multiple excmds. Use\n[[fillcmdline]] to put a string in the cmdline and focus the cmdline\n(otherwise the string is executed immediately).\n\nYou can bind to other modes with `bind --mode={insert|ignore|normal|input|ex|hint} ...`, e.g, `bind --mode=insert emacs qall` (NB: unlike vim, all preceeding characters will not be input), or `bind --mode=hint <C-[> hint.reset`.\n\n`bind --mode=browser [key sequence] [ex command]` binds to a special mode which can be accessed all the time in all browser tabs - even tabs in which Tridactyl cannot run. It comes with a few caveats:\n\n- you may only have a few browser-mode binds at once. At the time of writing, this is 20, with 3 initially taken by Tridactyl. If you desperately need more, file an [[issue]].\n- the key sequence must consist of a single, simple key with at least one and no more than two modifiers. An error will be thrown if you try to bind to an invalid key sequence.\n- the `ex command` you bind to may not work fully unless you are on a tab which Tridactyl has access to. Generally, browser-wide actions like making or closing tabs will work but tab-specific actions like scrolling down or entering hint mode will not.\n\nA list of editor functions can be found\n[here](/static/docs/modules/_src_lib_editor_.html).\n\nSee also:\n\n    - [[unbind]]\n    - [[reset]]", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["bindshow", new SymbolMetadata("", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["bindwizard", new SymbolMetadata("Generate a key sequence from keypresses. Once Enter is pressed, the command line is filled with a [[bind]]\ncommand with the key sequence and provided arguments, which you can choose to modify and execute.\n\nIf you have `:set keyboardlayoutforce true`, it will bind commands to physical keys regardless of layout.\n\nAccepts the same arguments as [[bind]] (except for the key sequence which will be generated):\n\n     - `bindwizard [command]`, then press the keys you want to bind, then hit Enter.\n     - `bindwizard --mode=[mode] [command]` also works.\n\nYou can execute it without arguments to see what is bound to the keys you type.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["bindurl", new SymbolMetadata("Like [[bind]] but for a specific url pattern (also see [[seturl]]).", new FunctionType([new StringType(false, false), new StringType(false, false), new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["keymap", new SymbolMetadata("Deprecated: use `:set keyboardlayoutforce true` instead.\n\nMakes one key equivalent to another for the purposes of most of our parsers. Useful for international keyboard layouts. See user-provided examples for various layouts on our wiki: https://github.com/tridactyl/tridactyl/wiki/Internationalisation\n\ne.g,\n     keymap \u0119 e", new FunctionType([new StringType(false, false), new StringType(false, false)], new AnyType(true, false), false, false), false)],
          ["searchsetkeyword", new SymbolMetadata("", new FunctionType([], new VoidType(false, false), false, false), true)],
          ["validateSetArgs", new SymbolMetadata("Validates arguments for set/seturl", new FunctionType([new StringType(false, false), new ArrayType(new StringType(false, false), false, false)], new ArrayType(new AnyType(true, false), false, false), false, false), true)],
          ["seturl", new SymbolMetadata("Usage: `seturl [pattern] key values`", new FunctionType([new StringType(false, false), new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["setmode", new SymbolMetadata("Usage: `setmode mode key values`", new FunctionType([new StringType(false, false), new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["set", new SymbolMetadata('Set a key value pair in config.\n\nUse to set any values found [here](/static/docs/classes/_src_lib_config_.default_config.html).\n\nArrays should be set using JS syntax, e.g. `:set blacklistkeys ["/",","]`.\n\ne.g.\n    set searchurls.google https://www.google.com/search?q=\n    set logging.messaging info\n\nIf no value is given, the value of the of the key will be displayed.\n\nSee also: [[unset]]', new FunctionType([new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["firefoxsyncpull", new SymbolMetadata("Replaces your local configuration with that stored in the Firefox Sync area.\n\nIt does not merge your configurations: it overwrites.\n\nAlso see [[firefoxsyncpush]].", new FunctionType([], new AnyType(true, false), false, false), false)],
          ["firefoxsyncpush", new SymbolMetadata("Pushes your local configuration to the Firefox Sync area.\n\nIt does not merge your configurations: it overwrites.\n\nAlso see [[firefoxsyncpull]].", new FunctionType([], new AnyType(true, false), false, false), false)],
          ["getAutocmdEvents", new SymbolMetadata("", new FunctionType([], new ArrayType(new StringType(false, false), false, false), false, false), true)],
          ["autocmd", new SymbolMetadata("Set autocmds to run when certain events happen.", new FunctionType([new StringType(false, false), new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["autocontain", new SymbolMetadata('Automatically open a domain and all its subdomains in a specified container.\n\n__NB:__ You should use this command with an -s (sane mode) or -u (URL mode) flag. Usage without a flag uses an incorrect regular expression which may cause weird behaviour and has been left in for compatibility reasons.\n\nThis function accepts a `-u` flag to treat the pattern as a URL rather than a domain.\nFor example: `autocontain -u ^https?://([^/]*\\.|)youtube\\.com/ google` is equivalent to `autocontain -s youtube\\.com google`\n\nFor declaring containers that do not yet exist, consider using `auconcreatecontainer true` in your tridactylrc.\nThis allows Tridactyl to automatically create containers from your autocontain directives. Note that they will be random icons and colors.\n\nThe domain is passed through as a regular expression so there are a few gotchas to be aware of:\n* Unescaped periods will match *anything*. `autocontain -s google.co.uk work` will match `google!co$uk`. Escape your periods  (i.e. `\\.`) or accept that you might get some false positives.\n* You can use regex in your pattern. `autocontain -s google\\.(co\\.uk|com) work` will match either `google.co.uk` or `google.com`. If multiple rules match a certain URL, the one with the longest regex will be picked.\n\nThis *should* now peacefully coexist with the Temporary Containers and Multi-Account Containers addons. Do not trust this claim. If a fight starts the participants will try to open infinite tabs. It is *strongly* recommended that you use a tridactylrc so that you can abort a sorceror\'s-apprentice scenario by killing firefox, commenting out all of autocontainer directives in your rc file, and restarting firefox to clean up the mess. There are a number of strange behaviors resulting from limited coordination between extensions. Redirects can be particularly surprising; for example, with `:autocontain -s will-redirect.example.org example` set and `will-redirect.example.org` redirecting to `redirected.example.org`, navigating to `will-redirect.example.org` will result in the new tab being in the `example` container under some conditions and in the `firefox-default` container under others.\n\nPass an optional space-separated list of proxy names to assign a proxy (followed by failover proxies) to a URL and open in a specified container.\nFor example: `autocontain [-{u,s}] pattern container proxy1 proxy2`\n\nTo assign a proxy and open in no container, use "firefox-default" or "none" as a container name.\nSee also:\n  - [[proxyadd]]\n  - [[proxyremove]]', new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["proxyadd", new SymbolMetadata("Add a proxy for use with [[autocontain]] or `:set proxy`", new FunctionType([new StringType(false, false), new StringType(false, false)], new AnyType(true, false), false, false), false)],
          ["proxyremove", new SymbolMetadata("Remove proxies.", new FunctionType([new StringType(false, false)], new VoidType(false, false), false, false), false)],
          ["autocmddelete", new SymbolMetadata("Remove autocmds", new FunctionType([new StringType(false, false), new StringType(false, false)], new AnyType(true, false), false, false), false)],
          ["blacklistadd", new SymbolMetadata("Helper function to put Tridactyl into ignore mode on the provided URL.\n\nSimply creates a DocStart [[autocmd]] that runs `mode ignore`. NB: ignore mode does have a few keybinds by default - see `:viewconfig ignoremaps`. These can be unbound with, e.g. `:unbind --mode=ignore <C-o>`, or `:unbindurl [url] --mode=ignore <C-o>`.\n\nRemove sites from the blacklist with `blacklistremove [url]` or `autocmddelete DocStart [url]`.\n\nIf you're looking for a way to temporarily disable Tridactyl, this might be what you're looking for. If you need to disable Tridactyl more thoroughly on a page look at `:help superignore` instead.\n\n<!-- this should probably be moved to an ex alias once configuration has better help --!>", new FunctionType([new StringType(false, false)], new AnyType(true, false), false, false), false)],
          ["unbind", new SymbolMetadata("Unbind a sequence of keys so that they do nothing at all.\n\nSee also:\n\n    - [[bind]]\n    - [[reset]]", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["unbindurl", new SymbolMetadata("Unbind a sequence of keys you have set with [[bindurl]]. Note that this **kills** a bind, which means Tridactyl will pass it to the page on `pattern`. If instead you want to use the default setting again, use [[reseturl]].", new FunctionType([new StringType(false, false), new StringType(false, false), new StringType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["reset", new SymbolMetadata("Restores a sequence of keys to their default value.", new FunctionType([new StringType(false, false), new StringType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["reseturl", new SymbolMetadata("Restores a sequence of keys to their value in the global config for a specific URL pattern.\n\nSee also:\n  - [[bind]]\n  - [[unbind]]\n  - [[reset]]\n  - [[bindurl]]\n  - [[unbindurl]]\n  - [[seturl]]\n  - [[unseturl]]\n  - [[setmode]]\n  - [[unsetmode]]", new FunctionType([new StringType(false, false), new StringType(false, false), new StringType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["sanitise", new SymbolMetadata("Deletes various bits of Firefox or Tridactyl data\n\nThe list of possible arguments can be found here:\nhttps://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browsingData/DataTypeSet\n\nAdditional Tridactyl-specific arguments are:\n- `commandline`: Removes the in-memory commandline history.\n- `tridactyllocal`: Removes all tridactyl storage local to this machine. Use it with\n    commandline if you want to delete your commandline history.\n- `tridactylsync`: Removes all tridactyl storage associated with your Firefox Account (i.e, all user configuration, by default).\nThese arguments aren't affected by the timespan parameter.\n\nTimespan parameter:\n-t [0-9]+(m|h|d|w)\n\nExamples:\n\n- `sanitise all` -> Deletes __everything__, including any saved usernames / passwords(!)\n- `sanitise history` -> Deletes all history\n- `sanitise commandline tridactyllocal tridactylsync` -> Deletes every bit of data Tridactyl holds\n- `sanitise cookies -t 3d` -> Deletes cookies that were set during the last three days.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["quickmark", new SymbolMetadata("Bind a quickmark for the current URL or space-separated list of URLs to a key on the keyboard.\n\nAfterwards use go[key], gn[key], or gw[key] to [[open]], [[tabopen]], or\n[[winopen]] the URL respectively.\n\nExample:\n- `quickmark m https://mail.google.com/mail/u/0/#inbox`", new FunctionType([new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["get", new SymbolMetadata("Puts the contents of config value with keys `keys` into the commandline and the background page console\n\nIt's a bit rubbish, but we don't have a good way to provide feedback to the commandline yet.\n\nYou can view the log entry in the browser console (Ctrl-Shift-j).\n\nFor example, you might try `get nmaps` to see all of your current binds.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["viewconfig", new SymbolMetadata("Opens the current configuration in Firefox's native JSON viewer in a new tab.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new VoidType(false, false), false, false), false)],
          ["jsonview", new SymbolMetadata("View a JSON object in Firefox's JSON viewer.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new ArrayType(new AnyType(true, false), false, false)], false, false), false, false), false)],
          ["unseturl", new SymbolMetadata("Reset a site-specific setting.\n\nusage: `unseturl [pattern] key`", new FunctionType([new StringType(false, false), new StringType(false, false)], new AnyType(true, false), false, false), false)],
          ["unsetmode", new SymbolMetadata("Reset a mode-specific setting.\n\nusage: `unsetmode mode key`", new FunctionType([new StringType(false, false), new StringType(false, false)], new AnyType(true, false), false, false), false)],
          ["unset", new SymbolMetadata("Reset a config setting to default", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["setnull", new SymbolMetadata('"Delete" a default setting. E.g. `setnull searchurls.github` means `open github test` would search your default search engine for "github test".', new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["hint", new SymbolMetadata("Hint a page.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["rot13", new SymbolMetadata("Perform rot13.\n\nTransforms all text nodes in the current tab via rot13. Only characters in\nthe ASCII range are considered.", new FunctionType([new NumberType(false, false)], new VoidType(false, false), false, false), false)],
          ["jumble", new SymbolMetadata("Perform text jumbling (reibadailty).\n\nShuffles letters except for first and last in all words in text nodes in the current tab. Only characters in\nthe ASCII range are considered.\n\nInspired by: https://www.newscientist.com/letter/mg16221887-600-reibadailty/", new FunctionType([], new VoidType(false, false), false, false), false)],
          ["run_exstr", new SymbolMetadata("Hacky ex string parser.\n\nUse it for fire-and-forget running of background commands in content.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["gobble", new SymbolMetadata("Initialize gobble mode.\n\nIf numKeysOrTerminator is a number, it will read the provided amount of keys;\nIf numKeysOrTerminator is a key or key combination like 'k', '<CR>' or '<C-j>';\nit will read keys until the provided key is pressed.\nThen it will append the keypresses to `endCmd` and execute that string,\nalso appending arguments if provided.", new FunctionType([new StringType(false, false), new StringType(false, false), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["getGotoSelectors", new SymbolMetadata("", new FunctionType([], new TypeReferenceType("Promise", [new ArrayType(new ObjectType(/* @__PURE__ */ new Map([]), false, false), false, false)], false, false), false, false), true)],
          ["goto", new SymbolMetadata("Jump to selector.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["nmode", new SymbolMetadata("Initialize n [mode] mode.\n\nIn this special mode, a series of key sequences are executed as bindings from a different mode, as specified by the\n`mode` argument. After the count of accepted sequences is `n`, the finalizing ex command given as the `endexArr`\nargument is executed, which defaults to `mode ignore`.\n\nExample: `:nmode normal 1 mode ignore`\nThis looks up the next key sequence in the normal mode bindings, executes it, and switches the mode to `ignore`.\nIf the key sequence does not match a binding, it will be silently passed through to Firefox, but it will be counted\nfor the termination condition.", new FunctionType([new StringType(false, false), new NumberType(false, false), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["tssReadFromCss", new SymbolMetadata("Read text content of elements matching the given selector", new FunctionType([new StringType(false, false)], new VoidType(false, false), false, false), false)],
          ["ttsread", new SymbolMetadata("Read the given text using the browser's text to speech functionality and\nthe settings currently set", new FunctionType([new UnionType([
            new LiteralTypeType("-t", false, false),
            new LiteralTypeType("-c", false, false)
          ], false, false), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["ttsvoices", new SymbolMetadata("Show a list of the voices available to the TTS system. These can be\nset in the config using `ttsvoice`", new FunctionType([], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["ttscontrol", new SymbolMetadata("Cancel current reading and clear pending queue\n\nArguments:\n   - stop:    cancel current and pending utterances", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["buildFilterConfigs", new SymbolMetadata("Build a set of FilterConfigs from a list of human-input filter\nspecs.", new FunctionType([new ArrayType(new StringType(false, false), false, false)], new ArrayType(new AnyType(true, false), false, false), false, false), true)],
          ["perfdump", new SymbolMetadata('Dump the raw json for our performance counters. Filters with\ntrailing slashes are class names, :start | :end | :measure specify\nwhat type of sample to pass through, and all others are function\nnames. All filters must match for a sample to be dumped.\n\nTridactyl does not collect performance information by default. To\nget this data you\'ll have to set the configuration option\n`perfcounters` to `"true"`. You may also want to examine the value\nof `perfsamples`.', new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["perfhistogram", new SymbolMetadata("Pretty-print a histogram of execution durations for you. Arguments\nare as above, with the addition that this automatically filters to\ncounter samples of type :measure.\n\nNote that this will display its output by opening a data: url with\ntext in the place of your current tab.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["bmark", new SymbolMetadata("Add or remove a bookmark.\n\nOptionally, you may give the bookmark a title. If no URL is given, a bookmark is added for the current page.\n\nIf a bookmark already exists for the URL, it is removed, even if a title is given.\n\nDoes not support creation of folders: you'll need to use the Firefox menus for that.", new FunctionType([new StringType(false, true), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new TypeReferenceType("BookmarkTreeNode", [], false, false)], false, false), false, false), false)],
          ["echo", new SymbolMetadata("", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new StringType(false, false), false, false), false)],
          ["js_helper", new SymbolMetadata("helper function for js and jsb\n\n-p to take a single extra argument located at the end of str[]\n-d[delimiter character] to take a space-separated array of arguments after the delimiter\n-s to load js script of a source file from the config path", new FunctionType([new ArrayType(new StringType(false, false), false, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), true)],
          ["js", new SymbolMetadata("Lets you execute JavaScript in the page context. If you want to get the result back, use\n\n     `composite js ... | fillcmdline`", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["jsb", new SymbolMetadata("Lets you execute JavaScript in the background context. All the help from [[js]] applies. Gives you a different `tri` object which has access to more excmds and web-extension APIs.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["issue", new SymbolMetadata('Opens a new tab the url of which is "https://github.com/tridactyl/tridactyl/issues/new" and automatically fill add tridactyl, firefox and os version to the issue.', new FunctionType([], new TypeReferenceType("Promise", [new TypeReferenceType("Tab", [], false, false)], false, false), false, false), false)],
          ["text2qr", new SymbolMetadata("Generates a QR code for the given text. By default opens in new tab. Default binds close the new tab after 5 seconds.\nIf no text is passed as an argument then it checks if any text is selected and creates a QR code for that.\nIf no selection is found then it creates QR code for the current tab's URL\n\n`text2qr --popup [...]` will open the QR code in a new popup window\n\n`text2qr --window [...]`  will open the QR code in a new window\n\n`text2qr --current [...]` will open in the current tab\n\n`text2qr --timeout <timeout in seconds> [...]` closes the tab/window/popup after specified number of seconds\n\nExample: text2qr --timeout 5 --popup hello world", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["updatecheck", new SymbolMetadata("Checks if there are any stable updates available for Tridactyl.\n\nRelated settings:\n\n- `update.nag = true | false` - checks for updates on Tridactyl start.\n- `update.nagwait = 7` - waits 7 days before nagging you to update.\n- `update.checkintervalsecs = 86400` - waits 24 hours between checking for an update.", new FunctionType([new UnionType([
            new LiteralTypeType("manual", false, false),
            new LiteralTypeType("auto_polite", false, false),
            new LiteralTypeType("auto_impolite", false, false)
          ], false, true)], new TypeReferenceType("Promise", [new BooleanType(false, false)], false, false), false, false), false)],
          ["keyfeed", new SymbolMetadata("Feed some keys to Tridactyl's parser. E.g. `keyfeed jkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjjkj`.\n\nNB:\n\n- Does _not_ function like Vim's noremap - `bind j keyfeed j` will cause an infinite loop.\n- Doesn't work in exmode - i.e. `keyfeed t<CR>` won't work.", new FunctionType([new StringType(false, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["extoptions", new SymbolMetadata("Opens optionsUrl for the selected extension in a popup window.\n\nNB: Tridactyl cannot run on this page!", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["readerurl", new SymbolMetadata("", new FunctionType([], new TypeReferenceType("Promise", [new StringType(false, false)], false, false), false, false), true)],
          ["reader", new SymbolMetadata("Open the current page as an article in reader view for easier reading. Flags `--tab` and `--window` open the article in new tabs and windows respectively.\n\nUse `:reader --old` to use Firefox's built-in reader mode, which Tridactyl can't run on.\n\n__NB:__ the reader page is a privileged environment which has access to all Tridactyl functions, notably the native messenger if you have it installed. We are parsing untrusted web-content to run in this environment. Mozilla's readability library will strip out most of these, then we use a sanitation library, `js-xss`, to strip out any remaining unsafe tags, but if there was a serious bug in this library, and a targeted attack against Tridactyl, an attacker could get remote code execution. If you're worried about this, use `:reader --old` instead or only use `:reader` on pages you trust.\n\nYou may use [userContent.css](http://kb.mozillazine.org/index.php?title=UserContent.css&printable=yes) to enhance or override default styling of the new reader view. The `body` of the page has id `tridactyl-reader` and the article content follows in a `main` tag. Therefore to alter default styling, you can do something like this in your `userContent.css`:\n\n```css\n#tridactyl-reader > main {\n   width: 80vw !important;\n   text-align: left;\n}\n```\n\nFollow [issue #4657](https://github.com/tridactyl/tridactyl/issues/4657) if you would like to find out when we have made a more user-friendly solution.", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["elementunhide", new SymbolMetadata("Restore the most recently hidden element. Repeated invocations restore the next-most-recently-hidden element.\n\n(Elements can be hidden with `;K` and `:hint -K`.)", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)]
        ]))],
        ["src/lib/config.ts", new FileMetadata(/* @__PURE__ */ new Map([["default_config", new ClassMetadata(/* @__PURE__ */ new Map([
          ["configversion", new SymbolMetadata("Internal version number Tridactyl uses to know whether it needs to update from old versions of the configuration.\n\nChanging this might do weird stuff.", new StringType(false, false), false)],
          ["subconfigs", new SymbolMetadata("Internal field to handle site-specific configs. Use :seturl/:unseturl to change these values.", new ObjectType(/* @__PURE__ */ new Map([["", new TypeReferenceType("DeepPartial", [new TypeReferenceType("default_config", [], false, false)], false, false)]]), false, false), false)],
          ["modesubconfigs", new SymbolMetadata("Internal field to handle mode-specific configs. Use :setmode/:unsetmode to change these values.\n\nChanging this might do weird stuff.", new ObjectType(/* @__PURE__ */ new Map([["", new TypeReferenceType("DeepPartial", [new TypeReferenceType("default_config", [], false, false)], false, false)]]), false, false), false)],
          ["priority", new SymbolMetadata("Internal field to handle site-specific config priorities. Use :seturl/:unseturl to change this value.", new NumberType(false, false), false)],
          ["exmaps", new SymbolMetadata("exmaps contains all of the bindings for the command line.\nYou can of course bind regular ex commands but also [editor functions](/static/docs/modules/_src_lib_editor_.html) and [commandline-specific functions](/static/docs/modules/_src_commandline_frame_.html).", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["ignoremaps", new SymbolMetadata('ignoremaps contain all of the bindings for "ignore mode".\n\nThey consist of key sequences mapped to ex commands.', new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["imaps", new SymbolMetadata('imaps contain all of the bindings for "insert mode".\n\nOn top of regular ex commands, you can also bind [editor functions](/static/docs/modules/_src_lib_editor_.html) in insert mode.\n\nThey consist of key sequences mapped to ex commands.', new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["inputmaps", new SymbolMetadata('inputmaps contain all of the bindings for "input mode".\n\nOn top of regular ex commands, you can also bind [editor functions](/static/docs/modules/_src_lib_editor_.html) in input mode.\n\nThey consist of key sequences mapped to ex commands.', new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["superignore", new SymbolMetadata('Disable Tridactyl almost completely within a page, e.g. `seturl ^https?://mail.google.com disable true`. Only takes affect on page reload.\n\nYou are usually better off using `blacklistadd` and `seturl [url] noiframe true` as you can then still use some Tridactyl binds, e.g. `shift-insert` for exiting ignore mode.\n\nNB: you should only use this with `seturl`. If you get trapped with Tridactyl disabled everywhere just run `tri unset superignore` in the Firefox address bar. If that still doesn\'t fix things, you can totally reset Tridactyl by running `tri help superignore` in the Firefox address bar, scrolling to the bottom of that page and then clicking "Reset Tridactyl config".', new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["nmaps", new SymbolMetadata('nmaps contain all of the bindings for "normal mode".\n\nThey consist of key sequences mapped to ex commands.', new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["vmaps", new SymbolMetadata("", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["hintmaps", new SymbolMetadata("", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["browsermaps", new SymbolMetadata('Browser-wide binds accessible in all modes and on pages where Tridactyl "cannot run".\n<!-- Note to developers: binds here need to also be listed in manifest.json -->', new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["leavegithubalone", new SymbolMetadata("Whether to allow pages (not necessarily github) to override `/`, which is a default Firefox binding.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["blacklistkeys", new SymbolMetadata("Which keys to protect from pages that try to override them. Requires [[leavegithubalone]] to be set to false.", new ArrayType(new StringType(false, false), false, false), false)],
          ["autocmds", new SymbolMetadata("Autocommands that run when certain events happen, and other conditions are met.\n\nRelated ex command: `autocmd`.", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["keytranslatemap", new SymbolMetadata("", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["usekeytranslatemap", new SymbolMetadata("", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["keyboardlayoutforce", new SymbolMetadata('Instead of fetching actual character which depends on selected layout,\nuse machine code of a key and convert to character according to keyboardlayoutoverrides. The default layout mapping\nis US `qwerty`, but can be changed with [[keyboardlayoutbase]].\n\nThere is a much more detailed help page towards the end of `:tutor` under the title "Non-QWERTY layouts".\n\nRecommended for everyone with multiple or/and non-latin keyboard layouts. Make sure [[usekeytranslatemap]] is false\nif you have previously used `keymap`.', new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["keyboardlayoutbase", new SymbolMetadata("Base keyboard layout to use when [[keyboardlayoutforce]] is enabled. At the time of writing, the following layouts are supported: `qwerty, azerty, german, dvorak, uk, ca, bepo`. Requires page reload to take effect.\n\nIf your layout is missing, you can contribute it with the help of https://gistpreview.github.io/?324119c773fac31651f6422087b36804 - please just open an `:issue` with your layout and we'll add it.\n\nYou can manually override individual keys for a layout with [[keyboardlayoutoverrides]].", new UnionType([
            new LiteralTypeType("qwerty", false, false),
            new LiteralTypeType("azerty", false, false),
            new LiteralTypeType("german", false, false),
            new LiteralTypeType("dvorak", false, false),
            new LiteralTypeType("uk", false, false),
            new LiteralTypeType("ca", false, false),
            new LiteralTypeType("bepo", false, false)
          ], false, false), false)],
          ["keyboardlayoutoverrides", new SymbolMetadata('Override individual keys for a layout when [[keyboardlayoutforce]] is enabled. Changes take effect only after a page reload.\n\nKey codes for printable keys for [[keyboardlayoutforce]], lower and upper register. See https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values for the names of each key.\n\nNB: due to a Tridactyl bug, you cannot set this using array notation as you can for, e.g. [[homepage]].\nYou must instead set the lower and upper registers using a string with no spaces in it, for example\n`:set keyboardlayoutoverrides Digit2: 2"` for the British English layout.', new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["autocontain", new SymbolMetadata("Automatically place these sites in the named container.\n\nEach key corresponds to a URL fragment which, if contained within the page URL, the site will be opened in a container tab instead.", new AnyType(true, false), false)],
          ["proxy", new SymbolMetadata("Default proxy to use for all URLs. Has to be the name of a proxy. To add a proxy, see `:help proxyadd`. NB: usage with `:seturl` is buggy, use `:autocontain -s [regex to match URL] none [proxy]` instead", new StringType(false, false), false)],
          ["proxies", new SymbolMetadata("Definitions of proxies.\n\nYou can add a new proxy with `proxyadd proxyname proxyurl`", new AnyType(true, false), false)],
          ["noproxy", new SymbolMetadata("Whether to use proxy settings.\n\nIf set to `true`, all proxy settings will be ignored.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["autocontainmode", new SymbolMetadata("Strict mode will always ensure a domain is open in the correct container, replacing the current tab if necessary.\n\nRelaxed mode is less aggressive and instead treats container domains as a default when opening a new tab.", new UnionType([
            new LiteralTypeType("strict", false, false),
            new LiteralTypeType("relaxed", false, false)
          ], false, false), false)],
          ["exaliases", new SymbolMetadata("Aliases for the commandline.\n\nYou can make a new one with `command alias ex-command`.", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["followpagepatterns", new SymbolMetadata("Used by `]]` and `[[` to look for links containing these words.\n\nEdit these if you want to add, e.g. other language support.", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["searchengine", new SymbolMetadata("The default search engine used by `open search`. If empty string, your browser's default search engine will be used. If set to something, Tridactyl will first look at your [[searchurls]] and then at the search engines for which you have defined a keyword on `about:preferences#search`.", new StringType(false, false), false)],
          ["searchurls", new SymbolMetadata('Definitions of search engines for use via `open [keyword]`.\n\n`%s` will be replaced with your whole query and `%s1`, `%s2`, ..., `%sn` will be replaced with the first, second and nth word of your query. Also supports array slicing, e.g. `%s[2:4]`, `%s[5:]`. If there are none of these patterns in your search urls, your query will simply be appended to the searchurl.\n\nAliases are supported - for example, if you have a `google` searchurl, you can run `:set searchurls.g google` in which case `g` will act as if it was the `google` searchurl.\n\nExamples:\n- When running `open gi cute puppies`, with a `gi` searchurl defined with `set searchurls.gi https://www.google.com/search?q=%s&tbm=isch`, tridactyl will navigate to `https://www.google.com/search?q=cute puppies&tbm=isch`.\n- When running `tabopen translate en ja Tridactyl`, with a `translate` searchurl defined with `set searchurls.translate https://translate.google.com/#view=home&op=translate&sl=%s1&tl=%s2&text=%s3`, tridactyl will navigate to `https://translate.google.com/#view=home&op=translate&sl=en&tl=ja&text=Tridactyl`.\n\n[[setnull]] can be used to "delete" the default search engines. E.g. `setnull searchurls.google`.', new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["jsurls", new SymbolMetadata('Like [[searchurls]] but must be a Javascript function that takes one argument (a single string with the remainder of the command line including spaces) and maps it to a valid href (or a promise that resolves to a valid href) that will be followed, e.g. `set jsurls.googleloud query => "https://google.com/search?q=" + query.toUpperCase()`\n\nNB: the href must be valid, i.e. it must include the protocol (e.g. "http://") and not just be e.g. "www.".', new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["newtab", new SymbolMetadata("URL the newtab will redirect to.\n\nAll usual rules about things you can open with `open` apply, with the caveat that you'll get interesting results if you try to use something that needs `nativeopen`: so don't try `about:newtab` or a `file:///` URI. You should instead use a data URI - https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs - or host a local webserver (e.g. Caddy).", new StringType(false, false), false)],
          ["viewsource", new SymbolMetadata("Whether `:viewsource` will use our own page that you can use Tridactyl binds on, or Firefox's default viewer, which you cannot use Tridactyl on.", new UnionType([
            new LiteralTypeType("tridactyl", false, false),
            new LiteralTypeType("default", false, false)
          ], false, false), false)],
          ["homepages", new SymbolMetadata('Pages opened with `gH`. In order to set this value, use `:set homepages ["example.org", "example.net", "example.com"]` and so on.', new ArrayType(new StringType(false, false), false, false), false)],
          ["hintchars", new SymbolMetadata("Characters to use in hint mode.\n\nThey are used preferentially from left to right.", new StringType(false, false), false)],
          ["hintfiltermode", new SymbolMetadata("The type of hinting to use. `vimperator` will allow you to filter links based on their names by typing non-hint chars. It is recommended that you use this in conjuction with the [[hintchars]] setting, which you should probably set to e.g, `5432167890`. \xB4vimperator-reflow\xB4 additionally updates the hint labels after filtering.", new UnionType([
            new LiteralTypeType("simple", false, false),
            new LiteralTypeType("vimperator", false, false),
            new LiteralTypeType("vimperator-reflow", false, false)
          ], false, false), false)],
          ["hintnames", new SymbolMetadata("Whether to optimise for the shortest possible names for each hint, or to use a simple numerical ordering. If set to `numeric`, overrides `hintchars` setting.", new UnionType([
            new LiteralTypeType("short", false, false),
            new LiteralTypeType("numeric", false, false),
            new LiteralTypeType("uniform", false, false)
          ], false, false), false)],
          ["hintuppercase", new SymbolMetadata("Whether to display the names for hints in uppercase.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["hintdelay", new SymbolMetadata("The delay in milliseconds in `vimperator` style hint modes after selecting a hint before you are returned to normal mode.\n\nThe point of this is to prevent accidental execution of normal mode binds due to people typing more than is necessary to choose a hint.", new NumberType(false, false), false)],
          ["hintshift", new SymbolMetadata("Controls whether hints should be shifted in quick-hints mode.\n\nHere's what it means: let's say you have hints from a to z but are only\ninterested in every second hint. You first press `a`, then `c`.\nTridactyl will realize that you skipped over `b`, and so that the next\nhint you're going to trigger is probably `e`. Tridactyl will shift all\nhint names so that `e` becomes `c`, `d` becomes `b`, `c` becomes `a` and\nso on.\nThis means that once you pressed `c`, you can keep on pressing `c` to\ntrigger every second hint. Only makes sense with hintnames = short.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["hintautoselect", new SymbolMetadata("Controls whether hints should be followed automatically.\n\nIf set to `false`, hints will only be followed upon confirmation. This applies to cases when there is only a single match or only one link on the page.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["allowautofocus", new SymbolMetadata("Controls whether the page can focus elements for you via js\n\nNB: will break fancy editors such as CodeMirror on Jupyter. Simply use `seturl` to whitelist pages you need it on.\n\nBest used in conjunction with browser.autofocus in `about:config`", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["preventautofocusjackhammer", new SymbolMetadata("Uses a loop to prevent focus until you interact with a page. Only recommended for use via `seturl` for problematic sites as it can be a little heavy on CPU if running on all tabs. Should be used in conjuction with [[allowautofocus]]", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["smoothscroll", new SymbolMetadata("Whether to use Tridactyl's (bad) smooth scrolling.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["scrollduration", new SymbolMetadata("How viscous you want smooth scrolling to feel.", new NumberType(false, false), false)],
          ["tabopenpos", new SymbolMetadata("Where to open tabs opened with `tabopen` - to the right of the current tab, or at the end of the tabs.", new UnionType([
            new LiteralTypeType("next", false, false),
            new LiteralTypeType("last", false, false),
            new LiteralTypeType("related", false, false)
          ], false, false), false)],
          ["tabclosepinned", new SymbolMetadata("When enabled (the default), running tabclose will close the tabs whether they are pinned or not. When disabled, tabclose will fail with an error if a tab is pinned.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["tabsort", new SymbolMetadata("Controls which tab order to use when numbering tabs. Either mru = sort by most recent tab or default = by tab index\n\nApplies to all places where Tridactyl numbers tabs including `:tab`, `:tabnext_gt` etc. (so, for example, with `:set tabsort mru` `2gt` would take you to the second most recently used tab, not the second tab in the tab bar).", new UnionType([
            new LiteralTypeType("default", false, false),
            new LiteralTypeType("mru", false, false)
          ], false, false), false)],
          ["relatedopenpos", new SymbolMetadata("Where to open tabs opened with hinting - as if it had been middle clicked, to the right of the current tab, or at the end of the tabs.", new UnionType([
            new LiteralTypeType("next", false, false),
            new LiteralTypeType("last", false, false),
            new LiteralTypeType("related", false, false)
          ], false, false), false)],
          ["ttsvoice", new SymbolMetadata('The name of the voice to use for text-to-speech. You can get the list of installed voices by running the following snippet: `js alert(window.speechSynthesis.getVoices().reduce((a, b) => a + " " + b.name))`', new StringType(false, false), false)],
          ["ttsvolume", new SymbolMetadata("Controls text-to-speech volume. Has to be a number between 0 and 1.", new NumberType(false, false), false)],
          ["ttsrate", new SymbolMetadata("Controls text-to-speech speed. Has to be a number between 0.1 and 10.", new NumberType(false, false), false)],
          ["ttspitch", new SymbolMetadata("Controls text-to-speech pitch. Has to be between 0 and 2.", new NumberType(false, false), false)],
          ["gimode", new SymbolMetadata('When set to "nextinput", pressing `<Tab>` after gi selects the next input.\n\nWhen set to "firefox", `<Tab>` behaves like normal, focusing the next tab-indexed element regardless of type.', new UnionType([
            new LiteralTypeType("nextinput", false, false),
            new LiteralTypeType("firefox", false, false)
          ], false, false), false)],
          ["cursorpos", new SymbolMetadata("Decides where to place the cursor when selecting non-empty input fields", new UnionType([
            new LiteralTypeType("beginning", false, false),
            new LiteralTypeType("end", false, false)
          ], false, false), false)],
          ["theme", new SymbolMetadata("The theme to use.\n\nPermitted values: run `:composite js tri.styling.THEMES | fillcmdline` to find out.", new StringType(false, false), false)],
          ["customthemes", new SymbolMetadata("Storage for custom themes\n\nMaps theme names to CSS. Predominantly used automatically by [[colourscheme]] to store themes read from disk, as documented by [[colourscheme]]. Setting this manually is untested but might work provided that [[colourscheme]] is then used to change the theme to the right theme name.", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["modeindicator", new SymbolMetadata("Whether to display the mode indicator or not.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["modeindicatormodes", new SymbolMetadata("Whether to display the mode indicator in various modes. Ignored if modeindicator set to false.", new ObjectType(/* @__PURE__ */ new Map([["", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false)]]), false, false), false)],
          ["jumpdelay", new SymbolMetadata("Milliseconds before registering a scroll in the jumplist", new NumberType(false, false), false)],
          ["logging", new SymbolMetadata("Logging levels. Unless you're debugging Tridactyl, it's unlikely you'll ever need to change these.", new ObjectType(/* @__PURE__ */ new Map([["", new UnionType([
            new LiteralTypeType("never", false, false),
            new LiteralTypeType("error", false, false),
            new LiteralTypeType("warning", false, false),
            new LiteralTypeType("info", false, false),
            new LiteralTypeType("debug", false, false)
          ], false, false)]]), false, false), false)],
          ["noiframe", new SymbolMetadata(`Disables the commandline iframe. Dangerous setting, use [[seturl]] to set it. If you ever set this setting to "true" globally and then want to set it to false again, you can do this by opening Tridactyl's preferences page from about:addons.`, new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["noiframeon", new SymbolMetadata("", new ArrayType(new StringType(false, false), false, false), false)],
          ["editorcmd", new SymbolMetadata('Insert / input mode edit-in-$EDITOR command to run\nThis has to be a command that stays in the foreground for the whole editing session\n"auto" will attempt to find a sane editor in your path.\nPlease send your requests to have your favourite terminal moved further up the list to /dev/null.\n          (but we are probably happy to add your terminal to the list if it isn\'t already there.)\n\nExample values:\n- linux: `xterm -e vim`\n- windows: `start cmd.exe /c \\"vim\\"`.\n\nAlso see [:editor](/static/docs/modules/_src_excmds_.html#editor).', new StringType(false, false), false)],
          ["rsscmd", new SymbolMetadata('Command that should be run by the [[rssexec]] ex command. Has the\nfollowing format:\n- %u: url\n- %t: title\n- %y: type (rss, atom, xml...)\nWarning: This is a very large footgun. %u will be inserted without any\nkind of escaping, hence you must obey the following rules if you care\nabout security:\n- Do not use a composite command. If you need a composite command,\ncreate an alias.\n- Do not use `js` or `jsb`. If you need to use them, create an alias.\n- Do not insert any %u, %t or %y in shell commands run by the native\nmessenger. Use pipes instead.\n\nHere\'s an example of how to save an rss url in a file on your disk\nsafely:\n`alias save_rss jsb -p tri.native.run("cat >> ~/.config.newsboat/urls", JS_ARG)`\n`set rsscmd save_rss %u`\nThis is safe because the url is passed to jsb as an argument rather than\nbeing expanded inside of the string it will execute and because it is\npiped to the shell command rather than being expanded inside of it.', new StringType(false, false), false)],
          ["browser", new SymbolMetadata("The browser executable to look for in commands such as `restart`. Not as mad as it seems if you have multiple versions of Firefox...", new StringType(false, false), false)],
          ["yankto", new SymbolMetadata("Which clipboard to store items in. Requires the native messenger to be installed.", new UnionType([
            new LiteralTypeType("clipboard", false, false),
            new LiteralTypeType("selection", false, false),
            new LiteralTypeType("both", false, false)
          ], false, false), false)],
          ["putfrom", new SymbolMetadata("Which clipboard to retrieve items from. Requires the native messenger to be installed.\n\nPermitted values: `clipboard`, or `selection`.", new UnionType([
            new LiteralTypeType("clipboard", false, false),
            new LiteralTypeType("selection", false, false)
          ], false, false), false)],
          ["externalclipboardcmd", new SymbolMetadata("Clipboard command to try to get the selection from (e.g. `xsel` or `xclip`)", new StringType(false, false), false)],
          ["downloadsskiphistory", new SymbolMetadata("Whether downloads (e.g. via ;s hint modes) appear in your download history.\n\nNB: will cause downloads to fail silently if Tridactyl is not allowed to run in private windows (regardless of whether you are trying to call it in a private window).", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["downloadforbiddenchars", new SymbolMetadata("Set of characters that are to be considered illegal as download filenames.", new StringType(false, false), false)],
          ["downloadforbiddenreplacement", new SymbolMetadata("Value that will be used to replace the illegal character(s), if found, in the download filename.", new StringType(false, false), false)],
          ["downloadforbiddennames", new SymbolMetadata('Comma-separated list of whole filenames which, if match\nwith the download filename, will be suffixed with the\n"downloadforbiddenreplacement" value.', new StringType(false, false), false)],
          ["nativeinstallcmd", new SymbolMetadata('Set this to something weird if you want to have fun every time Tridactyl tries to update its native messenger.\n\n%TAG will be replaced with your version of Tridactyl for stable builds, or "master" for beta builds\n\nNB: Windows has its own platform-specific default.', new StringType(false, false), false)],
          ["update", new SymbolMetadata("Used by :updatecheck and related built-in functionality to automatically check for updates and prompt users to upgrade.", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["profiledir", new SymbolMetadata("Profile directory to use with native messenger with e.g, `guiset`.", new StringType(false, false), false)],
          ["tabopencontaineraware", new SymbolMetadata("If enabled, tabopen opens a new tab in the currently active tab's container.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["containerindicator", new SymbolMetadata("If moodeindicator is enabled, containerindicator will color the border of the mode indicator with the container color.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["auconcreatecontainer", new SymbolMetadata("Autocontain directives create a container if it doesn't exist already.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["tabgroupnewtaburls", new SymbolMetadata("Initial urls to navigate to when creating a new tab for a new tab group.", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["tabshowhidden", new SymbolMetadata("Whether :tab shows completions for hidden tabs (e.g. tabs in other tab groups).", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["historyresults", new SymbolMetadata("Number of most recent results to ask Firefox for. We display the top 20 or so most frequently visited ones.", new NumberType(false, false), false)],
          ["bmarkweight", new SymbolMetadata("When displaying bookmarks in history completions, how many page views to pretend they have.", new NumberType(false, false), false)],
          ["searchurlweight", new SymbolMetadata("When displaying searchurls in history completions, how many page views to pretend they have.", new NumberType(false, false), false)],
          ["gotoselector", new SymbolMetadata("Default selector for :goto command.", new StringType(false, false), false)],
          ["completions", new SymbolMetadata("General completions options - NB: options are set according to our internal completion source name - see - `src/completions/[name].ts` in the Tridactyl source.", new ObjectType(/* @__PURE__ */ new Map([]), false, false), false)],
          ["findresults", new SymbolMetadata("Number of results that should be shown in completions. -1 for unlimited", new NumberType(false, false), false)],
          ["findcontextlen", new SymbolMetadata("Number of characters to use as context for the matches shown in completions", new NumberType(false, false), false)],
          ["findcase", new SymbolMetadata("Whether find should be case-sensitive", new UnionType([
            new LiteralTypeType("smart", false, false),
            new LiteralTypeType("sensitive", false, false),
            new LiteralTypeType("insensitive", false, false)
          ], false, false), false)],
          ["findhighlighttimeout", new SymbolMetadata("How long find highlights should persist in milliseconds. `<= 0` means they persist until cleared", new NumberType(false, false), false)],
          ["incsearch", new SymbolMetadata("Whether Tridactyl should jump to the first match when using `:find`", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["minincsearchlen", new SymbolMetadata("How many characters should be typed before triggering incsearch/completions", new NumberType(false, false), false)],
          ["csp", new SymbolMetadata('Deprecated.\nChange this to "clobber" to ruin the "Content Security Policy" of all sites a bit and make Tridactyl run a bit better on some of them, e.g. raw.github*', new UnionType([
            new LiteralTypeType("untouched", false, false),
            new LiteralTypeType("clobber", false, false)
          ], false, false), false)],
          ["wordpattern", new SymbolMetadata("JavaScript RegExp used to recognize words in text.* functions (e.g. text.transpose_words). Should match any character belonging to a word.", new StringType(false, false), false)],
          ["perfcounters", new SymbolMetadata("Activate tridactyl's performance counters. These have a\nmeasurable performance impact, since every sample is a few\nhundred bytes and we sample tridactyl densely, but they're good\nwhen you're trying to optimize things.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["perfsamples", new SymbolMetadata(`How many samples to store from the perf counters.

Each performance entry is two numbers (16 bytes), an entryType
of either "mark" or "measure" (js strings are utf-16 ad we have
two marks for each measure, so amortize to about 10 bytes per
entry), and a string name that for Tridactyl object will be
about 40 (utf-16) characters (80 bytes), plus object overhead
roughly proportional to the string-length of the name of the
constructor (in this case something like 30 bytes), for a total
of what we'll call 128 bytes for ease of math.

We want to store, by default, about 1MB of performance
statistics, so somewhere around 10k samples.`, new StringType(false, false), false)],
          ["modeindicatorshowkeys", new SymbolMetadata("Show (partial) command in the mode indicator.\nCorresponds to 'showcmd' option of vi.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["urlparenttrailingslash", new SymbolMetadata("Whether a trailing slash is appended when we get the parent of a url with\ngu (or other means).", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["visualenterauto", new SymbolMetadata("Whether to enter visual mode when text is selected. Visual mode can always be entered with `:mode visual`.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["visualexitauto", new SymbolMetadata("Whether to return to normal mode when text is deselected.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["escapehatchsidebarhack", new SymbolMetadata("Whether to open and close the sidebar quickly to get focus back to the page when <C-,> is pressed.\n\nDisable if the fact that it closes TreeStyleTabs gets on your nerves too much : )\n\nNB: when disabled, <C-,> can't get focus back from the address bar, but it can still get it back from lots of other places (e.g. Flash-style video players)", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)],
          ["completionfuzziness", new SymbolMetadata("Threshold for fuzzy matching on completions. Lower => stricter matching. Range between 0 and 1: 0 corresponds to perfect matches only. 1 will match anything.\n\nhttps://fusejs.io/api/options.html#threshold", new NumberType(false, false), false)],
          ["readerurlintitle", new SymbolMetadata("Whether to show article url in the document.title of Reader View.", new UnionType([
            new LiteralTypeType("false", false, false),
            new LiteralTypeType("true", false, false)
          ], false, false), false)]
        ]))]]), /* @__PURE__ */ new Map([
          ["o", new SymbolMetadata("", new FunctionType([new AnyType(true, false)], new AnyType(true, false), false, false), true)],
          ["schlepp", new SymbolMetadata("", new FunctionType([new AnyType(true, false)], new VoidType(false, false), false, false), true)],
          ["getDeepProperty", new SymbolMetadata("Given an object and a target, extract the target if it exists, else return undefined", new FunctionType([new AnyType(true, false), new ArrayType(new StringType(false, false), false, false)], new AnyType(true, false), false, false), true)],
          ["setDeepProperty", new SymbolMetadata("Create the key path target if it doesn't exist and set the final property to value.\n\nIf the path is an empty array, replace the obj.", new FunctionType([new AnyType(true, false), new AnyType(true, false), new AnyType(true, false)], new AnyType(true, false), false, false), true)],
          ["mergeDeep", new SymbolMetadata("", new FunctionType([new AnyType(true, false), new AnyType(true, false)], new AnyType(true, false), false, false), true)],
          ["getURL", new SymbolMetadata("", new FunctionType([new StringType(false, false), new ArrayType(new StringType(false, false), false, false)], new AnyType(true, false), false, false), true)],
          ["get", new SymbolMetadata("Get the value of the key target.\n\nIf the user has not specified a key, use the corresponding key from\ndefaults, if one exists, else undefined.", new FunctionType([new UnionType([
            new LiteralTypeType("rsscmd", false, false),
            new LiteralTypeType("theme", false, false),
            new LiteralTypeType("autocmds", false, false),
            new LiteralTypeType("exaliases", false, false),
            new LiteralTypeType("modesubconfigs", false, false),
            new LiteralTypeType("allowautofocus", false, false),
            new LiteralTypeType("autocontain", false, false),
            new LiteralTypeType("proxies", false, false),
            new LiteralTypeType("update", false, false),
            new LiteralTypeType("imaps", false, false),
            new LiteralTypeType("viewsource", false, false),
            new LiteralTypeType("nmaps", false, false),
            new LiteralTypeType("configversion", false, false),
            new TypeReferenceType("... 89 more ...", [], false, false),
            new LiteralTypeType("readerurlintitle", false, false)
          ], false, true), new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), true)],
          ["getDynamic", new SymbolMetadata("Get the value of the key target.\n\nPlease only use this with targets that will be used at runtime - it skips static checks. Prefer [[get]].", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new AnyType(true, false), false, false), false)],
          ["getAsyncDynamic", new SymbolMetadata("Get the value of the key target.\n\nPlease only use this with targets that will be used at runtime - it skips static checks. Prefer [[getAsync]].", new FunctionType([new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new AnyType(true, false)], false, false), false, false), false)],
          ["getAsync", new SymbolMetadata("Get the value of the key target, but wait for config to be loaded from the\ndatabase first if it has not been at least once before.\n\nThis is useful if you are a content script and you've just been loaded.", new FunctionType([new UnionType([
            new LiteralTypeType("rsscmd", false, false),
            new LiteralTypeType("theme", false, false),
            new LiteralTypeType("autocmds", false, false),
            new LiteralTypeType("exaliases", false, false),
            new LiteralTypeType("modesubconfigs", false, false),
            new LiteralTypeType("allowautofocus", false, false),
            new LiteralTypeType("autocontain", false, false),
            new LiteralTypeType("proxies", false, false),
            new LiteralTypeType("update", false, false),
            new LiteralTypeType("imaps", false, false),
            new LiteralTypeType("viewsource", false, false),
            new LiteralTypeType("nmaps", false, false),
            new LiteralTypeType("configversion", false, false),
            new TypeReferenceType("... 89 more ...", [], false, false),
            new LiteralTypeType("readerurlintitle", false, false)
          ], false, true), new ArrayType(new StringType(false, false), true, false)], new TypeReferenceType("Promise", [new TypeReferenceType("...", [], false, false)], false, false), false, false), true)],
          ["push", new SymbolMetadata("", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["pull", new SymbolMetadata("", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), false)],
          ["setURL", new SymbolMetadata("", new FunctionType([new AnyType(true, false), new ArrayType(new AnyType(true, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["set", new SymbolMetadata('Full target specification, then value\n\ne.g.\n    set("nmaps", "o", "open")\n    set("search", "default", "google")\n    set("aucmd", "BufRead", "memrise.com", "open memrise.com")', new FunctionType([new ArrayType(new AnyType(true, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["unsetURL", new SymbolMetadata("", new FunctionType([new AnyType(true, false), new ArrayType(new AnyType(true, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["unset", new SymbolMetadata("Delete the key at target in USERCONFIG if it exists", new FunctionType([new ArrayType(new AnyType(true, false), true, false)], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["save", new SymbolMetadata("Save the config back to storage API.\n\nConfig is not synchronised between different instances of this module until\nsometime after this happens.", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["update", new SymbolMetadata(`Updates the config to the latest version.
Proposed semantic for config versionning:
- x.y -> x+1.0 : major architectural changes
- x.y -> x.y+1 : renaming settings/changing their types
There's no need for an updater if you're only adding a new setting/changing
a default setting

When adding updaters, don't forget to set("configversion", newversionnumber)!`, new FunctionType([], new TypeReferenceType("Promise", [new BooleanType(false, false)], false, false), false, false), true)],
          ["init", new SymbolMetadata("Read all user configuration from storage API then notify any waiting asynchronous calls\n\nasynchronous calls generated by getAsync.", new FunctionType([], new TypeReferenceType("Promise", [new VoidType(false, false)], false, false), false, false), true)],
          ["addChangeListener", new SymbolMetadata("", new FunctionType([new TypeReferenceType("P", [], false, false), new FunctionType([new AnyType(true, false), new AnyType(true, false)], new VoidType(false, false), false, false)], new VoidType(false, false), false, false), true)],
          ["removeChangeListener", new SymbolMetadata("", new FunctionType([new TypeReferenceType("P", [], false, false), new FunctionType([new AnyType(true, false), new AnyType(true, false)], new VoidType(false, false), false, false)], new VoidType(false, false), false, false), true)],
          ["parseConfig", new SymbolMetadata('Parse the config into a string representation of a .tridactylrc config file.\nTries to parse the config into sectionable chunks based on keywords.\nBinds, aliases, autocmds and logging settings each have their own section while the rest are dumped into "General Settings".', new FunctionType([], new StringType(false, false), false, false), false)]
        ]))]
      ]));
      staticThemes = ["auto", "dark", "default", "greenmat", "halloween", "midnight", "quake", "quakelight", "shydactyl"];
    }
  });

  // src/lib/aliases.ts
  function expandExstr(exstr, aliases = get("exaliases"), prevExpansions = []) {
    const [command2] = exstr.trim().split(/\s+/);
    if (aliases[command2] === void 0) {
      return exstr;
    }
    if (prevExpansions.includes(command2)) {
      throw new Error(
        `Infinite loop detected while expanding aliases. Stack: ${prevExpansions}.`
      );
    }
    prevExpansions.push(command2);
    return expandExstr(
      exstr.replace(command2, aliases[command2]),
      aliases,
      prevExpansions
    );
  }
  var init_aliases = __esm({
    "src/lib/aliases.ts"() {
      "use strict";
      init_config();
    }
  });

  // src/parsers/exmode.ts
  function convertArgs(types, argv) {
    const typedArgs = [];
    for (let itypes = 0, iargv = 0; itypes < types.length && iargv < argv.length; ++itypes && ++iargv) {
      const curType = types[itypes];
      const curArg = argv[iargv];
      if (curType.isDotDotDot || curType.kind === "array") {
        return typedArgs.concat(curType.convert(argv.slice(iargv)));
      }
      typedArgs.push(curType.convert(curArg));
    }
    return typedArgs;
  }
  function parser(exstr, all_excmds) {
    const expandedExstr = expandExstr(exstr);
    const [func, ...args2] = expandedExstr.trim().split(/\s+/);
    const dotIndex = func.indexOf(".");
    const namespce = func.substring(0, dotIndex);
    const funcName = func.substring(dotIndex + 1);
    const excmds = all_excmds[namespce];
    if (excmds === void 0) {
      throw new Error(`Unknown namespace: ${namespce}.`);
    }
    let converted_args;
    if (namespce == "" && args2.length > 0) {
      let types;
      try {
        types = everything.getFile("src/excmds.ts").getFunction(funcName).type.args;
      } catch (e2) {
        types = null;
        converted_args = args2;
      }
      if (types !== null) {
        try {
          converted_args = convertArgs(types, args2);
        } catch (e2) {
          logger5.error("Error executing or parsing:", exstr, e2);
          throw e2;
        }
      }
    } else {
      converted_args = args2;
    }
    if (excmds[funcName] === void 0) {
      logger5.error("Not an excmd:", exstr);
      throw new Error(`Not an excmd: ${func}`);
    }
    return [excmds[funcName], converted_args];
  }
  var logger5;
  var init_exmode = __esm({
    "src/parsers/exmode.ts"() {
      "use strict";
      init_metadata_generated();
      init_aliases();
      init_logging();
      logger5 = new Logger("exmode");
    }
  });

  // src/lib/controller.ts
  var controller_exports = {};
  __export(controller_exports, {
    acceptExCmd: () => acceptExCmd,
    setExCmds: () => setExCmds
  });
  function setExCmds(excmds) {
    stored_excmds = excmds;
  }
  async function acceptExCmd(exstr) {
    try {
      const [func, args2] = parser(exstr, stored_excmds);
      if (func !== stored_excmds[""].repeat && exstr.search("winopen -private") < 0) {
        getAsync2("last_ex_str").then((last_ex_str) => {
          if (last_ex_str != exstr)
            state.last_ex_str = exstr;
        });
      }
      try {
        return await func(...args2);
      } catch (e2) {
        logger6.error("controller in excmd: ", e2);
      }
    } catch (e2) {
      logger6.error("controller while accepting: ", e2);
    }
  }
  var logger6, stored_excmds;
  var init_controller = __esm({
    "src/lib/controller.ts"() {
      "use strict";
      init_logging();
      init_exmode();
      init_state();
      init_state();
      logger6 = new logging_default("controller");
    }
  });

  // node_modules/semver-compare/index.js
  var require_semver_compare = __commonJS({
    "node_modules/semver-compare/index.js"(exports, module) {
      module.exports = function cmp(a, b) {
        var pa = a.split(".");
        var pb = b.split(".");
        for (var i2 = 0; i2 < 3; i2++) {
          var na = Number(pa[i2]);
          var nb = Number(pb[i2]);
          if (na > nb)
            return 1;
          if (nb > na)
            return -1;
          if (!isNaN(na) && isNaN(nb))
            return 1;
          if (isNaN(na) && !isNaN(nb))
            return -1;
        }
        return 0;
      };
    }
  });

  // src/lib/native.ts
  var native_exports = {};
  __export(native_exports, {
    clipboard: () => clipboard,
    editor: () => editor,
    ff_cmdline: () => ff_cmdline,
    firstinpath: () => firstinpath,
    getBestEditor: () => getBestEditor,
    getConfElsePref: () => getConfElsePref,
    getConfElsePrefElseDefault: () => getConfElsePrefElseDefault,
    getFirefoxDir: () => getFirefoxDir,
    getNativeMessengerVersion: () => getNativeMessengerVersion,
    getPref: () => getPref,
    getPrefs: () => getPrefs,
    getProfile: () => getProfile,
    getProfileDir: () => getProfileDir,
    getProfileName: () => getProfileName,
    getProfileUncached: () => getProfileUncached,
    getenv: () => getenv,
    getrc: () => getrc,
    getrcpath: () => getrcpath,
    inpath: () => inpath,
    listDir: () => listDir,
    loadPrefs: () => loadPrefs,
    mkdir: () => mkdir,
    move: () => move2,
    nativegate: () => nativegate,
    parsePrefs: () => parsePrefs,
    parseProfilesIni: () => parseProfilesIni,
    pyeval: () => pyeval,
    read: () => read,
    removePref: () => removePref,
    run: () => run,
    runAsync: () => runAsync,
    sendNativeMsg: () => sendNativeMsg,
    temp: () => temp,
    unfixamo: () => unfixamo,
    winFirefoxRestart: () => winFirefoxRestart,
    write: () => write,
    writePref: () => writePref,
    writerc: () => writerc
  });
  async function sendNativeMsg(cmd, opts2, quiet = false) {
    const send = Object.assign({ cmd }, opts2);
    let resp;
    logger7.info(`Sending message: ${JSON.stringify(send)}`);
    try {
      resp = await browserBg.runtime.sendNativeMessage(NATIVE_NAME, send);
      logger7.info(`Received response:`, resp);
      return resp;
    } catch (e2) {
      if (!quiet) {
        throw new Error(
          "Failed to send message to native messenger. If it is correctly installed (run `:native`), please report this bug on https://github.com/tridactyl/tridactyl/issues ."
        );
      }
    }
  }
  async function getrcpath(separator2 = "auto") {
    const res = await sendNativeMsg("getconfigpath", {});
    if (res.code !== 0)
      throw new Error("getrcpath error: " + res.code);
    if (separator2 == "unix" && (await browserBg.runtime.getPlatformInfo()).os == "win") {
      return res.content.replace(/\\/g, "/");
    } else {
      return res.content;
    }
  }
  async function getrc() {
    const res = await sendNativeMsg("getconfig", {});
    if (res.content && !res.error) {
      logger7.info(`Successfully retrieved fs config:
${res.content}`);
      return res.content;
    } else {
      logger7.info(`Error in retrieving config: ${res.error}`);
    }
  }
  async function getNativeMessengerVersion(quiet = false) {
    if (NATIVE_VERSION_CACHE !== void 0) {
      return NATIVE_VERSION_CACHE;
    }
    const res = await sendNativeMsg("version", {}, quiet);
    if (res === void 0) {
      if (quiet)
        return void 0;
      throw new Error(`Error retrieving version: ${res.error}`);
    }
    if (res.version && !res.error) {
      logger7.info(`Native version: ${res.version}`);
      NATIVE_VERSION_CACHE = res.version.toString();
      setTimeout(() => NATIVE_VERSION_CACHE = void 0, 500);
      return NATIVE_VERSION_CACHE;
    }
  }
  async function getBestEditor() {
    const gui_candidates = [];
    const term_emulators = [];
    const tui_editors = [];
    const last_resorts = [];
    const os = (await browserBg.runtime.getPlatformInfo()).os;
    const arg_quote = os === "win" ? '"' : "'";
    const vim_positioning_arg = ` ${arg_quote}+normal!%lGzv%c|${arg_quote}`;
    if (os === "mac") {
      gui_candidates.push(
        ...[
          "/Applications/MacVim.app/Contents/bin/mvim -f" + vim_positioning_arg,
          "/usr/local/bin/vimr --wait --nvim +only"
        ]
      );
      term_emulators.push(
        ...[
          "/Applications/cool-retro-term.app/Contents/MacOS/cool-retro-term -e"
        ]
      );
      last_resorts.push(...["open -nWt"]);
    } else {
      gui_candidates.push(...["gvim -f" + vim_positioning_arg]);
      if (os === "linux" || os === "openbsd") {
        term_emulators.push(
          ...[
            // we generally try to give the terminal the class "tridactyl_editor" so that
            // it can be made floating, e.g in i3:
            // for_window [class="tridactyl_editor"] floating enable border pixel 1
            "st -c tridactyl_editor",
            "xterm -class tridactyl_editor -e",
            "uxterm -class tridactyl_editor -e",
            "urxvt -e",
            'termite --class tridactyl_editor -e "%c"',
            "sakura --class tridactyl_editor -e",
            "lilyterm -e",
            "mlterm -N tridactyl_editor -e",
            "roxterm -e",
            "cool-retro-term -e",
            // Terminator doesn't appear to honour -c, but the option is
            // documented in its manpage and seems to cause no errors when supplied.
            'terminator -u -c tridactyl_editor -e "%c"'
            // Gnome-terminal doesn't work consistently, see issue #1035
            // "dbus-launch gnome-terminal --",
          ]
        );
      }
      if (os === "win") {
        term_emulators.push(
          ...["conemu -run", "mintty --class tridactyl_editor -e"]
        );
        if (await nativegate("0.2.1", false)) {
          term_emulators.push("start /wait");
        }
      }
      term_emulators.push(
        ...[
          "alacritty --class tridactyl_editor -e"
          // I wanted to put hyper.js here as a joke but you can't start it running a command,
          // which is a far better joke: a terminal emulator that you can't send commands to.
          // You win this time, web artisans.
          // Still true in 2021.
        ]
      );
      last_resorts.push(
        ...[
          "emacs",
          "gedit",
          "kate",
          "sublime",
          "atom -w",
          "code -nw",
          "abiword",
          "notepad"
        ]
      );
    }
    tui_editors.push(
      ...[
        "vim" + vim_positioning_arg,
        "nvim" + vim_positioning_arg,
        "nano %f",
        "emacs -nw %f"
      ]
    );
    const guicmd = await firstinpath(gui_candidates);
    if (guicmd) {
      return guicmd;
    }
    const termcmd = await firstinpath(term_emulators);
    const tuicmd = await firstinpath(tui_editors);
    if (termcmd && tuicmd) {
      if (termcmd.includes("%c")) {
        return tuicmd.replace("%c", tuicmd);
      } else {
        return termcmd + " " + tuicmd;
      }
    }
    return await firstinpath(last_resorts);
  }
  async function nativegate(version2 = "0", interactive = true, desiredOS = ["mac", "win", "linux", "openbsd"]) {
    if (!desiredOS.includes((await browserBg.runtime.getPlatformInfo()).os)) {
      if (interactive) {
        logger7.error(
          "# Tridactyl's native messenger doesn't support your operating system, yet."
        );
      }
      return false;
    }
    try {
      const actualVersion = await getNativeMessengerVersion();
      if (actualVersion !== void 0) {
        if ((0, import_semver_compare.default)(version2, actualVersion) > 0) {
          if (interactive)
            logger7.error(
              "# Please update to native messenger " + version2 + ", for example by running `:updatenative`."
            );
          return false;
        }
        return true;
      } else if (interactive)
        logger7.error(
          "# Native messenger not found. Please run `:installnative` and follow the instructions."
        );
      return false;
    } catch (e2) {
      if (interactive)
        logger7.error(
          "# Native messenger not found. Please run `:installnative` and follow the instructions."
        );
      return false;
    }
  }
  async function inpath(cmd) {
    const pathcmd = (await browserBg.runtime.getPlatformInfo()).os === "win" ? "where " : "which ";
    return (await run(pathcmd + cmd.split(" ")[0])).code === 0;
  }
  async function firstinpath(cmdarray) {
    let ind = 0;
    let cmd = cmdarray[ind];
    while (!await inpath(cmd.split(" ")[0])) {
      ind++;
      cmd = cmdarray[ind];
      if (cmd === void 0)
        break;
    }
    return cmd;
  }
  async function editor(file, line, col, content) {
    if (content !== void 0)
      await write(file, content);
    const editorcmd = (get("editorcmd") === "auto" ? await getBestEditor() : get("editorcmd")).replace(/%l/, line).replace(/%c/, col);
    let exec;
    if (editorcmd.indexOf("%f") !== -1) {
      exec = await run(editorcmd.replace(/%f/, file));
    } else {
      exec = await run(editorcmd + " " + file);
    }
    if (exec.code != 0)
      return exec;
    return read(file);
  }
  async function read(file) {
    return sendNativeMsg("read", { file }).catch((e2) => {
      throw new Error(`Failed to read ${file}. ${e2}`);
    });
  }
  async function write(file, content) {
    return sendNativeMsg("write", { file, content }).catch((e2) => {
      throw new Error(`Failed to write '${content}' to '${file}'. ${e2}`);
    });
  }
  async function writerc(file, force, content) {
    return sendNativeMsg("writerc", { file, force, content }).catch((e2) => {
      throw new Error(`Failed to write '${content}' to '${file}'. ${e2}`);
    });
  }
  async function mkdir(dir, exist_ok) {
    return sendNativeMsg("mkdir", { dir, exist_ok }).catch((e2) => {
      throw new Error(`Failed to create directory '${dir}'. ${e2}`);
    });
  }
  async function temp(content, prefix) {
    return sendNativeMsg("temp", { content, prefix }).catch((e2) => {
      throw new Error(
        `Failed to write '${content}' to temp file '${prefix}'. ${e2}`
      );
    });
  }
  async function move2(from, to, overwrite, cleanup) {
    const requiredNativeMessengerVersion = "0.3.0";
    if (await nativegate(requiredNativeMessengerVersion, false)) {
      return sendNativeMsg("move", { from, to, overwrite, cleanup }).catch((e2) => {
        throw new Error(`Failed to move '${from}' to '${to}'. ${e2}.`);
      });
    } else {
      return sendNativeMsg("move", { from, to }).catch((e2) => {
        throw new Error(`Failed to move '${from}' to '${to}'. ${e2}.`);
      });
    }
  }
  async function listDir(dir) {
    return sendNativeMsg("list_dir", { path: dir }).catch((e2) => {
      throw new Error(`Failed to read directory '${dir}'. ${e2}`);
    });
  }
  async function winFirefoxRestart(profiledir, browsercmd) {
    const required_version = "0.1.6";
    if (!await nativegate(required_version, false)) {
      throw new Error(
        `'restart' on Windows needs native messenger version >= ${required_version}.`
      );
    }
    return sendNativeMsg("win_firefox_restart", { profiledir, browsercmd });
  }
  async function run(command2, content = "") {
    const msg = await sendNativeMsg("run", { command: command2, content });
    logger7.info(msg);
    return msg;
  }
  async function runAsync(command2) {
    const required_version = "0.3.1";
    if (!await nativegate(required_version, false)) {
      throw new Error(
        `runAsync needs native messenger version >= ${required_version}.`
      );
    }
    logger7.info(await sendNativeMsg("run_async", { command: command2 }));
  }
  async function pyeval(command2) {
    return sendNativeMsg("eval", { command: command2 });
  }
  async function getenv(variable) {
    const required_version = "0.1.2";
    if (!await nativegate(required_version, false)) {
      throw new Error(
        `'getenv' needs native messenger version >= ${required_version}.`
      );
    }
    return (await sendNativeMsg("env", { var: variable })).content;
  }
  async function clipboard(action2, str2) {
    let clipcmd = await get("externalclipboardcmd");
    if (clipcmd === "auto")
      clipcmd = await firstinpath(["xsel", "xclip"]);
    if (clipcmd === void 0) {
      throw new Error("Couldn't find an external clipboard executable");
    }
    if (action2 === "get") {
      const result = await run(clipcmd + " -o");
      if (result.code !== 0) {
        throw new Error(
          `External command failed with code ${result.code}: ${clipcmd}`
        );
      }
      return result.content;
    } else if (action2 === "set") {
      const required_version = "0.1.7";
      if (await nativegate(required_version, false)) {
        const result = await run(`${clipcmd} -i`, str2);
        if (result.code !== 0)
          throw new Error(
            `External command failed with code ${result.code}: ${clipcmd}`
          );
        return "";
      } else {
        let heredoc = "TRIDACTYL";
        while (str2.search(heredoc) !== -1)
          heredoc += Math.round(Math.random() * 10);
        clipcmd = `sed -z 's/.$//' <<'${heredoc}' | ${clipcmd} -i 
${str2}
${heredoc}`;
        await run(clipcmd);
        return "";
      }
    }
    throw new Error("Unknown action!");
  }
  async function ff_cmdline() {
    let output;
    if ((await browserBg.runtime.getPlatformInfo()).os === "win") {
      if (!await nativegate("0.3.3", false)) {
        const browser_name = await get("browser");
        output = await run(
          `powershell -NoProfile -Command "$processes = Get-CimInstance -Property ProcessId,ParentProcessId,Name,CommandLine -ClassName Win32_Process;if (-not ($processes | where { $_.Name -match '^${browser_name}' })) { exit 1; };$ppid = ($processes | where { $_.ProcessId -EQ $PID }).ParentProcessId;$pproc = $processes | where { $_.ProcessId -EQ $ppid };while ($pproc.Name -notmatch '^${browser_name}') {    $ppid = $pproc.ParentProcessId;    $pproc = $processes | where { $_.ProcessId -EQ $ppid };};Write-Output $pproc.CommandLine;"`
        );
      } else {
        output = await run(
          `powershell -NoProfile -Command "Get-CimInstance -Property CommandLine,ProcessId -ClassName Win32_Process | where { $_.ProcessId -EQ ${(await sendNativeMsg("ppid", {})).content} } | select -ExpandProperty CommandLine | Write-Output"`
        );
      }
    } else {
      const actualVersion = await getNativeMessengerVersion();
      if ((0, import_semver_compare.default)("0.2.0", actualVersion) > 0) {
        output = await pyeval(
          // Using ' and + rather than ` because we don't want newlines
          'handleMessage({"cmd": "run", "command": "ps -p " + str(os.getppid()) + " -oargs="})["content"]'
        );
      } else {
        const ppid = (await sendNativeMsg("ppid", {})).content.trim();
        output = await run("ps -p " + ppid + " -oargs=");
      }
      output.content = output.content.replace("\n", "");
    }
    return output.content.trim().split(" ");
  }
  async function parseProfilesIni(content, basePath) {
    const lines = content.split("\n");
    let current = "General";
    const result = {};
    for (const line of lines) {
      let match3 = /^\[([^\]]+)\]$/.exec(line);
      if (match3 !== null) {
        current = match3[1];
        result[current] = {};
      } else {
        match3 = /^([^=]+)=([^=]+)$/.exec(line);
        if (match3 !== null) {
          result[current][match3[1]] = match3[2];
        }
      }
    }
    for (const profileName of Object.keys(result)) {
      const profile = result[profileName];
      if (profile.Path == void 0) {
        delete result[profileName];
        continue;
      }
      if ((await browserBg.runtime.getPlatformInfo()).os === "win") {
        profile.Path = profile.Path.replace("/", "\\");
      }
      if (profile.IsRelative === "1") {
        profile.relativePath = profile.Path;
        profile.absolutePath = basePath + profile.relativePath;
      } else if (profile.IsRelative === "0") {
        if (profile.Path.substring(0, basePath.length) !== basePath) {
          throw new Error(
            `Error parsing profiles ini: basePath "${basePath}" doesn't match profile path ${profile.Path}`
          );
        }
        profile.relativePath = profile.Path.substring(basePath.length);
        profile.absolutePath = profile.Path;
      }
    }
    return result;
  }
  async function getFirefoxDir() {
    switch ((await browserBg.runtime.getPlatformInfo()).os) {
      case "win":
        return getenv("APPDATA").then((path3) => path3 + "\\Mozilla\\Firefox\\");
      case "mac":
        return getenv("HOME").then(
          (path3) => path3 + "/Library/Application Support/Firefox/"
        );
      default:
        return getenv("HOME").then((path3) => path3 + "/.mozilla/firefox/");
    }
  }
  async function getProfileUncached() {
    const ffDir = await getFirefoxDir();
    const iniPath = ffDir + "profiles.ini";
    let iniObject = {};
    let iniSucceeded = false;
    const iniContent = await read(iniPath);
    if (iniContent.code === 0 && iniContent.content.length > 0) {
      try {
        iniObject = await parseProfilesIni(iniContent.content, ffDir);
        iniSucceeded = true;
      } catch (e2) {
      }
    }
    const curProfileDir = get("profiledir");
    if (curProfileDir !== "auto") {
      if (iniSucceeded) {
        for (const profileName of Object.keys(iniObject)) {
          const profile2 = iniObject[profileName];
          if (profile2.absolutePath === curProfileDir) {
            return profile2;
          }
        }
      }
      return {
        Name: void 0,
        IsRelative: "0",
        Path: curProfileDir,
        relativePath: void 0,
        absolutePath: curProfileDir
      };
    }
    const cmdline = await ff_cmdline().catch(() => "");
    let profile = cmdline.indexOf("--profile");
    if (profile === -1)
      profile = cmdline.indexOf("-profile");
    if (profile >= 0 && profile < cmdline.length - 1) {
      const profilePath = cmdline[profile + 1];
      if (iniSucceeded) {
        for (const profileName of Object.keys(iniObject)) {
          const profile2 = iniObject[profileName];
          if (profile2.absolutePath === profilePath) {
            return profile2;
          }
        }
      }
      return {
        Name: void 0,
        IsRelative: "0",
        Path: profilePath,
        relativePath: void 0,
        absolutePath: profilePath
      };
    }
    if (iniSucceeded) {
      let p = cmdline.indexOf("-p");
      if (p === -1)
        p = cmdline.indexOf("-P");
      if (p >= 0 && p < cmdline.length - 1) {
        const pName = cmdline[p + 1];
        for (const profileName of Object.keys(iniObject)) {
          const profile2 = iniObject[profileName];
          if (profile2.Name === pName) {
            return profile2;
          }
        }
        throw new Error(
          `native.ts:getProfile() : '${cmdline[p]}' found in command line arguments but no matching profile name found in "${iniPath}"`
        );
      }
    }
    let hacky_profile_finder = `find "${ffDir}" -maxdepth 2 -name lock`;
    if ((await browserBg.runtime.getPlatformInfo()).os === "mac")
      hacky_profile_finder = `find "${ffDir}" -maxdepth 2 -name .parentlock`;
    const profilecmd = await run(hacky_profile_finder);
    if (profilecmd.code === 0 && profilecmd.content.length !== 0) {
      profilecmd.content = profilecmd.content.trim();
      if (profilecmd.content.split("\n").length === 1) {
        const path3 = profilecmd.content.split("/").slice(0, -1).join("/");
        if (iniSucceeded) {
          for (const profileName of Object.keys(iniObject)) {
            const profile2 = iniObject[profileName];
            if (profile2.absolutePath === path3) {
              return profile2;
            }
          }
        }
        return {
          Name: void 0,
          IsRelative: "0",
          Path: path3,
          relativePath: void 0,
          absolutePath: path3
        };
      }
    }
    if (iniSucceeded) {
      for (const profileName of Object.keys(iniObject)) {
        const profile2 = iniObject[profileName];
        if (profile2.Default === 1 || profile2.Default === "1") {
          return profile2;
        }
      }
    }
    throw new Error(
      `Couldn't deduce which profile you want. See ':help profiledir'`
    );
  }
  async function getProfile() {
    if (cachedProfile === void 0)
      cachedProfile = await getProfileUncached();
    return cachedProfile;
  }
  function getProfileName() {
    return getProfile().then((p) => p.Name);
  }
  async function getProfileDir() {
    const profiledir = get("profiledir");
    if (profiledir !== "auto")
      return Promise.resolve(profiledir);
    return getProfile().then((p) => p.absolutePath);
  }
  function parsePrefs(prefFileContent) {
    const regex = new RegExp(
      /^(user_|sticky_|lock)?[pP]ref\("([^"]+)",\s*"?([^\)]+?)"?\);$/
    );
    return prefFileContent.split("\n").reduce((prefs, line) => {
      const matches = regex.exec(line);
      if (!matches) {
        return prefs;
      }
      const key = matches[2];
      let value = matches[3];
      if (value === '"')
        value = "";
      prefs[key] = value;
      return prefs;
    }, {});
  }
  async function loadPrefs(filename) {
    const result = await read(filename);
    if (result.code !== 0)
      return {};
    return parsePrefs(result.content);
  }
  async function getPrefs() {
    if (cached_prefs !== null)
      return cached_prefs;
    const profile = await getProfileDir() + "/";
    const prefFiles = [
      // Debian has these
      "/usr/share/firefox/browser/defaults/preferences/firefox.js",
      "/usr/share/firefox/browser/defaults/preferences/debugger.js",
      "/usr/share/firefox/browser/defaults/preferences/devtools-startup-prefs.js",
      "/usr/share/firefox/browser/defaults/preferences/devtools.js",
      "/usr/share/firefox/browser/defaults/preferences/firefox-branding.js",
      "/usr/share/firefox/browser/defaults/preferences/vendor.js",
      "/usr/share/firefox/browser/defaults/preferences/firefox.js",
      "/etc/firefox/firefox.js",
      // Pref files can be found here:
      // https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/A_brief_guide_to_Mozilla_preferences
      profile + "grepref.js",
      profile + "services/common/services-common.js",
      profile + "defaults/pref/services-sync.js",
      profile + "browser/app/profile/channel-prefs.js",
      profile + "browser/app/profile/firefox.js",
      profile + "browser/app/profile/firefox-branding.js",
      profile + "browser/defaults/preferences/firefox-l10n.js",
      profile + "prefs.js",
      profile + "user.js"
    ];
    const promises = [];
    for (const file of prefFiles) {
      promises.push(loadPrefs(file));
    }
    cached_prefs = promises.reduce(
      async (a, b) => Object.assign(await a, await b)
    );
    return cached_prefs;
  }
  async function getPref(name) {
    return (await getPrefs())[name];
  }
  async function getConfElsePref(confName, prefName) {
    let option = await getAsyncDynamic(confName);
    if (option === void 0) {
      try {
        option = await getPref(prefName);
      } catch (e2) {
      }
    }
    return option;
  }
  async function getConfElsePrefElseDefault(confName, prefName, def) {
    const option = await getConfElsePref(confName, prefName);
    if (option === void 0)
      return def;
    return option;
  }
  async function writePref(name, value) {
    if (cached_prefs)
      cached_prefs[name] = value;
    const file = await getProfileDir() + "/user.js";
    const text = (await read(file)).content;
    const prefPos = text.indexOf(`pref("${name}",`);
    if (prefPos < 0) {
      write(file, `${text}
user_pref("${name}", ${value});
`);
    } else {
      let substr = text.substring(prefPos);
      const prefEnd = substr.indexOf(";\n");
      substr = text.substring(prefPos, prefPos + prefEnd);
      write(file, text.replace(substr, `pref("${name}", ${value})`));
    }
  }
  async function removePref(name) {
    const file = await getProfileDir() + "/user.js";
    const text = (await read(file)).content;
    const prefPos = text.indexOf(`user_pref("${name}",`);
    if (prefPos >= 0) {
      let substr = text.substring(prefPos);
      const prefEnd = substr.indexOf(";\n") + 1;
      substr = text.substring(prefPos, prefPos + prefEnd);
      write(file, text.replace(substr, ``));
    }
  }
  async function unfixamo() {
    try {
      if (localStorage.unfixedamo2 === "true") {
        return;
      }
      const profile = await getProfileDir() + "/";
      const userjs = await loadPrefs(profile + "user.js");
      const tridactylPref = "tridactyl.unfixedamo";
      const tridactylPref2 = "tridactyl.unfixedamo_removed";
      const restricted = "extensions.webextensions.restrictedDomains";
      const amoblocker = "privacy.resistFingerprinting.block_mozAddonManager";
      const restrictedDomains = '"accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,addons.mozilla.org,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com"';
      if (userjs[tridactylPref2] === "true")
        return;
      if (userjs[restricted] === "" || userjs[restricted] === restrictedDomains) {
        await removePref(tridactylPref);
        await removePref(restricted);
        await removePref(amoblocker);
        await writePref(tridactylPref2, "true");
        browserBg.tabs.create({
          url: browserBg.runtime.getURL("static/unfixamo.html")
        });
      }
      return;
    } catch (e2) {
    } finally {
      localStorage.unfixedamo2 = "true";
    }
  }
  var import_semver_compare, logger7, NATIVE_NAME, NATIVE_VERSION_CACHE, cachedProfile, cached_prefs;
  var init_native = __esm({
    "src/lib/native.ts"() {
      "use strict";
      import_semver_compare = __toESM(require_semver_compare());
      init_config();
      init_webext();
      init_logging();
      logger7 = new logging_default("native");
      NATIVE_NAME = "tridactyl";
      if (getContext() === "background") {
        getProfile();
      }
      addChangeListener("profiledir", () => {
        cachedProfile = void 0;
        getProfile();
      });
      cached_prefs = null;
    }
  });

  // src/lib/text_to_speech.ts
  function getVoiceFromName(name) {
    const voices = window.speechSynthesis.getVoices();
    return voices.find((voice) => voice.name === name);
  }
  function readText(text) {
    if (window.speechSynthesis.getVoices().length === 0) {
      throw new Error("No voice found: cannot use Text-To-Speech API");
    }
    const utterance = new SpeechSynthesisUtterance(text);
    const pitch = get("ttspitch");
    const voice = get("ttsvoice");
    const volume = get("ttsvolume");
    const rate = get("ttsrate");
    if (pitch >= 0 && pitch < 2)
      utterance.pitch = pitch;
    if (volume >= 0 && volume <= 1)
      utterance.volume = volume;
    if (rate >= 0.1 && rate <= 10)
      utterance.rate = rate;
    const voiceObj = getVoiceFromName(voice);
    if (voiceObj) {
      utterance.voice = voiceObj;
    }
    window.speechSynthesis.speak(utterance);
  }
  function doAction(action2) {
    const synth = window.speechSynthesis;
    switch (action2) {
      case "play":
        synth.resume();
        break;
      case "pause":
        synth.pause();
        break;
      case "playpause":
        synth.paused ? synth.resume() : synth.pause();
        break;
      case "stop":
        synth.cancel();
        break;
    }
  }
  var init_text_to_speech = __esm({
    "src/lib/text_to_speech.ts"() {
      "use strict";
      init_config();
    }
  });

  // src/lib/escape.ts
  var sh, windows_cmd;
  var init_escape = __esm({
    "src/lib/escape.ts"() {
      "use strict";
      sh = (dangerous) => `'${dangerous.replace(/'/g, "'\\''")}'`;
      windows_cmd = (dangerous) => dangerous.replace(/([()%!^"<>&|])/g, "^$1");
    }
  });

  // src/lib/math.ts
  function log(x, base) {
    return Math.log(x) / Math.log(base);
  }
  function linspace(a, b, n2) {
    if (typeof n2 === "undefined")
      n2 = Math.max(Math.round(b - a) + 1, 1);
    if (n2 < 2) {
      return n2 === 1 ? [a] : [];
    }
    let i2;
    const ret = Array(n2);
    n2--;
    for (i2 = n2; i2 >= 0; i2--) {
      ret[i2] = (i2 * b + (n2 - i2) * a) / n2;
    }
    return ret;
  }
  function bucketize(values3, buckets) {
    const result = /* @__PURE__ */ new Map();
    for (const bucketval of buckets) {
      result.set(bucketval, 0);
    }
    const placeValue = (val) => {
      for (const bucketval of buckets) {
        if (bucketval >= val) {
          result.set(bucketval, result.get(bucketval) + 1);
          return;
        }
      }
    };
    for (const val of values3) {
      placeValue(val);
    }
    return result;
  }
  var init_math = __esm({
    "src/lib/math.ts"() {
      "use strict";
    }
  });

  // src/content/hinting.ts
  var hinting_exports = {};
  __export(hinting_exports, {
    getHintCommands: () => getHintCommands,
    hintByText: () => hintByText,
    hintByTextFilter: () => hintByTextFilter,
    hintElements: () => hintElements,
    hintPage: () => hintPage,
    hintableImages: () => hintableImages,
    hintables: () => hintables2,
    killables: () => killables,
    parser: () => parser2,
    saveableElements: () => saveableElements,
    toHintablesArray: () => toHintablesArray,
    vimpHelper: () => vimpHelper
  });
  function distance(l1, r1, l2, r2) {
    if (l1 < r2 && r1 > l2) {
      return 0;
    } else {
      return Math.min(Math.abs(l1 - r2), Math.abs(l2 - r1));
    }
  }
  function hintElements(elements, option = {}) {
    var _a;
    const hintable = toHintablesArray(Array.from(elements));
    const rapid = (_a = option["rapid"]) != null ? _a : false;
    const callback = typeof option["callback"] === "function" ? option["callback"] : (x) => x;
    if (!rapid) {
      return new Promise((resolve2, reject4) => {
        hintPage(hintable, (x) => x, resolve2, reject4, rapid);
      }).then((x) => {
        callback(x);
        return x;
      });
    } else {
      const endDefer = deferCreate();
      const endPromise = endDefer.promise.catch((error) => error);
      let onSelect = deferCreate();
      const key = Symbol("select-result");
      const hintCallback = (element) => {
        callback(element);
        onSelect.resolve({ [key]: element });
        onSelect = deferCreate();
      };
      const wrap2 = async function* () {
        while (true) {
          const first = await Promise.race([onSelect.promise, endPromise]);
          if (first && typeof first === "object" && key in first) {
            yield first[key];
          } else
            return await endPromise;
        }
      };
      const result = wrap2();
      hintPage(
        hintable,
        hintCallback,
        endDefer.resolve,
        endDefer.reject,
        rapid
      );
      return result;
    }
    function deferCreate() {
      const defer = {
        resolve: null,
        reject: null,
        promise: null
      };
      defer.promise = new Promise((ok, no) => {
        defer.resolve = ok;
        defer.reject = no;
      });
      return defer;
    }
  }
  function hintPage(hintableElements, onSelect, resolve2 = () => {
  }, reject4 = () => {
  }, rapid = false) {
    reset();
    const buildHints = defaultHintBuilder();
    const filterHints = defaultHintFilter();
    contentState.mode = "hint";
    modeState = new HintState(filterHints, resolve2, reject4, rapid);
    if (!rapid) {
      for (const hints of hintableElements) {
        buildHints(hints, (hint2) => {
          modeState.cleanUpHints();
          hint2.result = onSelect(hint2.target);
          modeState.selectedHints.push(hint2);
          reset();
        });
      }
    } else {
      for (const hints of hintableElements) {
        buildHints(hints, (hint2) => {
          hint2.result = onSelect(hint2.target);
          modeState.selectedHints.push(hint2);
          if (modeState.selectedHints.length > 1 && get("hintshift") === "true") {
            modeState.shiftHints();
          }
        });
      }
    }
    if (!modeState.hints.length) {
      reset();
      return;
    }
    const firstTarget = modeState.hints[0].target;
    const firstTargetIsSelectable = () => firstTarget instanceof HTMLAnchorElement && firstTarget.href !== "" && !firstTarget.href.startsWith("javascript:");
    const allTargetsAreEqual = () => void 0 === modeState.hints.find(
      (h) => !(h.target instanceof HTMLAnchorElement) || h.target.href !== firstTarget.href
    );
    if ((modeState.hints.length == 1 || firstTargetIsSelectable() && allTargetsAreEqual()) && get("hintautoselect") === "true") {
      modeState.cleanUpHints();
      modeState.hints[0].select();
      reset();
      return;
    }
    modeState.focusedHint = modeState.hints[0];
    modeState.focusedHint.focused = true;
    document.documentElement.appendChild(modeState.hintHost);
    modeState.deOverlap();
  }
  function defaultHintBuilder() {
    switch (get("hintfiltermode")) {
      case "simple":
        return buildHintsSimple;
      case "vimperator":
        return buildHintsVimperator;
      case "vimperator-reflow":
        return buildHintsVimperator;
    }
  }
  function defaultHintFilter() {
    switch (get("hintfiltermode")) {
      case "simple":
        return filterHintsSimple;
      case "vimperator":
        return filterHintsVimperator;
      case "vimperator-reflow":
        return (fstr) => filterHintsVimperator(fstr, true);
    }
  }
  function defaultHintChars() {
    if (get("hintnames") === "numeric") {
      return "1234567890";
    }
    return get("hintchars");
  }
  function* hintnames_simple(hintchars = defaultHintChars()) {
    for (let taglen = 1; true; taglen++) {
      yield* map3(
        permutationsWithReplacement(hintchars, taglen),
        (e2) => e2.join("")
      );
    }
  }
  function* hintnames_short(n2, hintchars = defaultHintChars()) {
    const source2 = hintnames_simple(hintchars);
    const num2skip = Math.floor(n2 / hintchars.length);
    yield* islice(source2, num2skip, n2 + num2skip);
  }
  function* hintnames_uniform(n2, hintchars = defaultHintChars()) {
    if (n2 <= hintchars.length)
      yield* islice(hintchars[Symbol.iterator](), n2);
    else {
      const taglen = Math.ceil(log(n2, hintchars.length));
      yield* map3(
        islice(permutationsWithReplacement(hintchars, taglen), n2),
        (perm) => perm.join("")
      );
    }
  }
  function* hintnames_numeric(n2) {
    for (let i2 = 1; i2 <= n2; i2++) {
      yield String(i2);
    }
  }
  function* hintnames(n2, hintchars = defaultHintChars()) {
    switch (get("hintnames")) {
      case "numeric":
        yield* hintnames_numeric(n2);
      case "uniform":
        yield* hintnames_uniform(n2, hintchars);
      default:
        yield* hintnames_short(n2, hintchars);
    }
  }
  function buildHintsSimple(hintables3, onSelect) {
    const els = hintables3.elements.filter((el) => Hint.isHintable(el));
    const names = Array.from(
      hintnames(els.length + modeState.hints.length)
    ).slice(modeState.hints.length);
    for (const [el, name] of izip(els, names)) {
      logger8.debug({ el, name });
      modeState.hintchars += name;
      modeState.hints.push(
        new Hint(el, name, null, onSelect, hintables3.hintclasses)
      );
    }
  }
  function buildHintsVimperator(hintables3, onSelect) {
    const els = hintables3.elements.filter((el) => Hint.isHintable(el));
    const names = Array.from(
      hintnames(els.length + modeState.hints.length)
    ).slice(modeState.hints.length);
    for (const [el, name] of izip(els, names)) {
      let ft = elementFilterableText(el);
      ft = vimpHelper.sanitiseHintText(ft);
      logger8.debug({ el, name, ft });
      modeState.hintchars += name + ft;
      modeState.hints.push(
        new Hint(el, name, ft, onSelect, hintables3.hintclasses)
      );
    }
  }
  function elementFilterableText(el) {
    const nodename = el.nodeName.toLowerCase();
    let text;
    if (nodename === "input") {
      text = el.value;
    } else if (0 < el.textContent.length) {
      text = el.textContent;
    } else if (el.hasAttribute("title")) {
      text = el.getAttribute("title");
    } else {
      text = el.innerHTML;
    }
    return text.slice(0, 2048).toLowerCase() || "";
  }
  function filterHintsSimple(fstr) {
    const active = [];
    let foundMatch;
    const hints = get("hintnames") == "numeric" ? sortBy_default(pipe(prop_default("name"), parseInt), modeState.hints) : modeState.hints;
    for (const h of hints) {
      if (!h.name.startsWith(fstr))
        h.hidden = true;
      else {
        if (!foundMatch) {
          h.focused = true;
          modeState.focusedHint = h;
          foundMatch = true;
        }
        h.hidden = false;
        active.push(h);
      }
    }
    if (active.length === 1 && get("hintautoselect") === "true") {
      selectFocusedHint();
    }
  }
  function filterHintsVimperator(query2, reflow = false) {
    function partitionquery(query3) {
      const peek = (a) => a[a.length - 1];
      const hintChars = defaultHintChars();
      const runs = [];
      for (const char of query3) {
        const isHintChar = hintChars.includes(char);
        if (!peek(runs) || peek(runs).isHintChar !== isHintChar) {
          runs.push({ str: char, isHintChar });
        } else {
          peek(runs).str += char;
        }
      }
      return runs;
    }
    function rename(hints) {
      const names = hintnames(hints.length);
      for (const [hint2, name] of izip(hints, names)) {
        hint2.name = name;
      }
    }
    let active = modeState.hints;
    for (const run2 of partitionquery(query2)) {
      if (run2.isHintChar) {
        active = active.filter((hint2) => hint2.name.startsWith(run2.str));
      } else {
        active = active.filter(
          (hint2) => vimpHelper.matchHint(hint2.filterData, run2.str)
        );
        if (reflow)
          rename(active);
      }
    }
    if (modeState.focusedHint) {
      modeState.focusedHint.focused = false;
      modeState.focusedHint = void 0;
    }
    for (const hint2 of modeState.hints) {
      if (active.includes(hint2)) {
        hint2.hidden = false;
        hint2.flag.textContent = hint2.name;
      } else {
        hint2.hidden = true;
      }
    }
    if (active.length) {
      modeState.focusedHint = active[0];
      modeState.focusedHint.focused = true;
    }
    if (active.length === 1 && get("hintautoselect") === "true") {
      selectFocusedHint(true);
    }
  }
  function reset() {
    if (modeState) {
      modeState.cleanUpHints();
      modeState.resolveHinting();
    }
    modeState = void 0;
    contentState.mode = "normal";
  }
  function popKey() {
    modeState.filter = modeState.filter.slice(0, -1);
    modeState.filterFunc(modeState.filter);
  }
  function pushKey(key) {
    const originalFilter = modeState.filter;
    modeState.filter += key;
    modeState.filterFunc(modeState.filter);
    if (modeState && !modeState.activeHints.length) {
      modeState.filter = originalFilter;
      modeState.filterFunc(modeState.filter);
    }
  }
  function pushKeyCodePoint(codepoint) {
    const key = String.fromCodePoint(parseInt(codepoint, 0));
    return pushKey(key);
  }
  function pushSpace() {
    return pushKey(" ");
  }
  function hintables2(selectors = HINTTAGS_selectors, withjs = false, includeInvisible = false) {
    const visibleFilter = isVisibleFilter(includeInvisible);
    const elems = changeHintablesToLargestChild(
      getElemsBySelector(selectors, []).filter(visibleFilter)
    );
    const hintables3 = [{ elements: elems }];
    if (withjs) {
      hintables3.push({
        elements: changeHintablesToLargestChild(
          Array.from(hintworthy_js_elems).filter(
            (el) => visibleFilter(el) && !elems.includes(el)
          )
        ),
        hintclasses: ["TridactylJSHint"]
      });
    }
    return hintables3;
  }
  function changeHintablesToLargestChild(elements) {
    elements.forEach((element, index2) => {
      if (element.childNodes.length === 0)
        return;
      let largestChild;
      element.childNodes.forEach((c) => {
        const currentChild = c;
        if (!largestChild || isElementLargerThan(currentChild, largestChild)) {
          largestChild = currentChild;
        }
      });
      if (isElementLargerThan(largestChild, element)) {
        elements[index2] = largestChild;
      }
    });
    return elements;
  }
  function isElementLargerThan(e1, e2) {
    if (typeof e1.getBoundingClientRect !== "function") {
      return false;
    } else if (typeof e2.getBoundingClientRect !== "function") {
      return true;
    }
    const e1BR = e1.getBoundingClientRect();
    const e2BR = e2.getBoundingClientRect();
    return e1BR.height > e2BR.height && e1BR.width > e2BR.width;
  }
  function saveableElements(includeInvisible = false) {
    return getElemsBySelector(HINTTAGS_saveable, [
      isVisibleFilter(includeInvisible)
    ]);
  }
  function hintableImages(includeInvisible = false) {
    return getElemsBySelector(HINTTAGS_img_selectors, [
      isVisibleFilter(includeInvisible)
    ]);
  }
  function hintByText(match3) {
    return getElemsBySelector(HINTTAGS_filter_by_text_selectors, [
      isVisible,
      hintByTextFilter(match3)
    ]);
  }
  function hintByTextFilter(match3) {
    return (hint2) => {
      let text;
      if (hint2 instanceof HTMLInputElement) {
        text = hint2.value;
      } else {
        text = hint2.textContent;
      }
      if (match3 instanceof RegExp) {
        return text.match(match3) !== null;
      } else {
        return text.toUpperCase().includes(match3.toUpperCase());
      }
    };
  }
  function killables(includeInvisible = false) {
    return getElemsBySelector(HINTTAGS_killable_selectors, [
      isVisibleFilter(includeInvisible)
    ]);
  }
  function toHintablesArray(hintablesOrElements) {
    if (!hintablesOrElements.length)
      return [];
    if ("className" in hintablesOrElements[0])
      return [{ elements: hintablesOrElements }];
    if ("elements" in hintablesOrElements[0])
      return hintablesOrElements;
    return [];
  }
  function selectFocusedHint(delay = false) {
    logger8.debug("Selecting hint.", contentState.mode);
    const focused = modeState.focusedHint;
    const selectFocusedHintInternal = () => {
      modeState.filter = "";
      modeState.hints.forEach((h) => h.hidden = false);
      focused.select();
    };
    if (delay)
      setTimeout(selectFocusedHintInternal, get("hintdelay"));
    else
      selectFocusedHintInternal();
  }
  function focusNextHint() {
    logger8.debug("Focusing next hint");
    modeState.changeFocusedHintIndex(1);
  }
  function focusPreviousHint() {
    logger8.debug("Focusing previous hint");
    modeState.changeFocusedHintIndex(-1);
  }
  function focusTopHint() {
    logger8.debug("Focusing top hint");
    modeState.changeFocusedHintTop();
  }
  function focusBottomHint() {
    logger8.debug("Focusing bottom hint");
    modeState.changeFocusedHintBottom();
  }
  function focusLeftHint() {
    logger8.debug("Focusing left hint");
    modeState.changeFocusedHintLeft();
  }
  function focusRightHint() {
    logger8.debug("Focusing right hint");
    modeState.changeFocusedHintRight();
  }
  function parser2(keys4) {
    const parsed = parse(
      keys4,
      mapstrMapToKeyMap(
        new Map(
          Object.entries(get("hintmaps")).filter(
            ([_key, value]) => value != ""
          )
        )
      )
    );
    if (parsed.isMatch === true) {
      return parsed;
    }
    const simplekeys = keys4.filter((key) => !hasModifiers(key));
    let exstr;
    if (simplekeys.length > 1) {
      exstr = simplekeys.reduce(
        (acc, key) => `hint.pushKey ${key.key};`,
        "composite "
      );
    } else if (simplekeys.length === 1) {
      exstr = `hint.pushKeyCodePoint ${simplekeys[0].key.codePointAt(0)}`;
    } else {
      return { keys: [], isMatch: false };
    }
    return { exstr, value: exstr, isMatch: true };
  }
  function getHintCommands() {
    return {
      reset,
      focusPreviousHint,
      focusNextHint,
      focusTopHint,
      focusBottomHint,
      focusLeftHint,
      focusRightHint,
      selectFocusedHint,
      pushKey,
      pushSpace,
      pushKeyCodePoint,
      popKey
    };
  }
  var logger8, HintState, modeState, Hint, vimpHelper;
  var init_hinting = __esm({
    "src/content/hinting.ts"() {
      "use strict";
      init_dom();
      init_math();
      init_itertools();
      init_state_content();
      init_config();
      init_logging();
      init_es();
      init_keyseq();
      logger8 = new logging_default("hinting");
      HintState = class {
        constructor(filterFunc, resolve2, reject4, rapid) {
          this.filterFunc = filterFunc;
          this.resolve = resolve2;
          this.reject = reject4;
          this.rapid = rapid;
          this.hintHost = document.createElement("div");
          this.hints = [];
          this.selectedHints = [];
          this.filter = "";
          this.hintchars = "";
          this.hintHost.classList.add("TridactylHintHost", "cleanslate");
        }
        get activeHints() {
          return this.hints.filter((h) => !h.flag.hidden);
        }
        /**
         * Remove hinting elements and classes from the DOM
         */
        cleanUpHints() {
          for (const hint2 of this.hints) {
            hint2.hidden = true;
          }
          this.hintHost.remove();
        }
        resolveHinting() {
          this.cleanUpHints();
          if (this.rapid)
            this.resolve(this.selectedHints.map((h) => h.result));
          else
            this.resolve(
              this.selectedHints[0] ? this.selectedHints[0].result : ""
            );
        }
        // move overlapping hints around
        deOverlap() {
          this.hints.sort((a, b) => a.y - b.y);
          const visited = [];
          for (const h of this.hints) {
            for (const vh of visited) {
              if (h.overlapsWith(vh)) {
                if (vh.x + vh.width < h.rect.right)
                  h.x = vh.x + vh.width;
                else
                  h.y = vh.y + vh.height;
              }
            }
            visited.push(h);
          }
        }
        changeFocusedHintIndex(offset) {
          const activeHints = this.activeHints;
          if (!activeHints.length) {
            return;
          }
          const focusedIndex = activeHints.indexOf(this.focusedHint);
          this.focusedHint.focused = false;
          const nextFocusedIndex = (focusedIndex + offset + activeHints.length) % activeHints.length;
          this.focusedHint = activeHints[nextFocusedIndex];
          this.focusedHint.focused = true;
        }
        changeFocusedHintTop() {
          const focusedRect = this.focusedHint.rect;
          const topHints = this.activeHints.filter(
            (h) => h.rect.top < focusedRect.top && h.rect.bottom < focusedRect.bottom
          );
          if (!topHints.length) {
            return;
          }
          const nextFocusedHint = topHints.reduce((a, b) => {
            const aDistance = distance(
              a.rect.left,
              a.rect.right,
              focusedRect.left,
              focusedRect.right
            );
            const bDistance = distance(
              b.rect.left,
              b.rect.right,
              focusedRect.left,
              focusedRect.right
            );
            if (aDistance < bDistance) {
              return a;
            } else if (aDistance > bDistance) {
              return b;
            } else {
              if (a.rect.bottom < b.rect.bottom) {
                return b;
              } else {
                return a;
              }
            }
          });
          this.focusedHint.focused = false;
          this.focusedHint = nextFocusedHint;
          this.focusedHint.focused = true;
        }
        changeFocusedHintBottom() {
          const focusedRect = this.focusedHint.rect;
          const bottomHints = this.activeHints.filter(
            (h) => h.rect.top > focusedRect.top && h.rect.bottom > focusedRect.bottom
          );
          if (!bottomHints.length) {
            return;
          }
          const nextFocusedHint = bottomHints.reduce((a, b) => {
            const aDistance = distance(
              a.rect.left,
              a.rect.right,
              focusedRect.left,
              focusedRect.right
            );
            const bDistance = distance(
              b.rect.left,
              b.rect.right,
              focusedRect.left,
              focusedRect.right
            );
            if (aDistance < bDistance) {
              return a;
            } else if (aDistance > bDistance) {
              return b;
            } else {
              if (a.rect.top > b.rect.top) {
                return b;
              } else {
                return a;
              }
            }
          });
          this.focusedHint.focused = false;
          this.focusedHint = nextFocusedHint;
          this.focusedHint.focused = true;
        }
        changeFocusedHintLeft() {
          const focusedRect = this.focusedHint.rect;
          const leftHints = this.activeHints.filter(
            (h) => h.rect.left < focusedRect.left && h.rect.right < focusedRect.right
          );
          if (!leftHints.length) {
            return;
          }
          const nextFocusedHint = leftHints.reduce((a, b) => {
            const aDistance = distance(
              a.rect.top,
              a.rect.bottom,
              focusedRect.top,
              focusedRect.bottom
            );
            const bDistance = distance(
              b.rect.top,
              b.rect.bottom,
              focusedRect.top,
              focusedRect.bottom
            );
            if (aDistance < bDistance) {
              return a;
            } else if (aDistance > bDistance) {
              return b;
            } else {
              if (a.rect.right < b.rect.right) {
                return b;
              } else {
                return a;
              }
            }
          });
          this.focusedHint.focused = false;
          this.focusedHint = nextFocusedHint;
          this.focusedHint.focused = true;
        }
        changeFocusedHintRight() {
          const focusedRect = this.focusedHint.rect;
          const rightHints = this.activeHints.filter(
            (h) => h.rect.left > focusedRect.left && h.rect.right > focusedRect.right
          );
          if (!rightHints.length) {
            return;
          }
          const nextFocusedHint = rightHints.reduce((a, b) => {
            const aDistance = distance(
              a.rect.top,
              a.rect.bottom,
              focusedRect.top,
              focusedRect.bottom
            );
            const bDistance = distance(
              b.rect.top,
              b.rect.bottom,
              focusedRect.top,
              focusedRect.bottom
            );
            if (aDistance < bDistance) {
              return a;
            } else if (aDistance > bDistance) {
              return b;
            } else {
              if (a.rect.left > b.rect.left) {
                return b;
              } else {
                return a;
              }
            }
          });
          this.focusedHint.focused = false;
          this.focusedHint = nextFocusedHint;
          this.focusedHint.focused = true;
        }
        // Attempt to make the next hint the same as the previous one
        shiftHints() {
          const lastIndex = this.hints.indexOf(
            this.selectedHints[this.selectedHints.length - 1]
          );
          const prevIndex = this.hints.indexOf(
            this.selectedHints[this.selectedHints.length - 2]
          );
          const distance2 = lastIndex - prevIndex;
          if (distance2 > 0) {
            const savedNames = [];
            for (let i2 = 0; i2 < distance2; ++i2) {
              savedNames.push(this.hints[this.hints.length - 1 - i2].name);
            }
            for (let i2 = this.hints.length - 1; i2 >= distance2; --i2) {
              this.hints[i2].setName(this.hints[i2 - distance2].name);
            }
            for (let i2 = savedNames.length - 1; i2 >= 0; --i2) {
              this.hints[i2].setName(savedNames[i2]);
            }
          } else if (distance2 < 0) {
            const savedNames = [];
            for (let i2 = 0; i2 < Math.abs(distance2); ++i2) {
              savedNames.push(this.hints[i2].name);
            }
            for (let i2 = 0; i2 < this.hints.length + distance2; ++i2) {
              this.hints[i2].setName(this.hints[i2 - distance2].name);
            }
            for (let i2 = 0; i2 < savedNames.length; ++i2) {
              this.hints[this.hints.length + distance2 + i2].setName(
                savedNames[i2]
              );
            }
          }
        }
      };
      Hint = class {
        constructor(target, name, filterData, onSelect, classes) {
          this.target = target;
          this.name = name;
          this.filterData = filterData;
          this.onSelect = onSelect;
          this.flag = document.createElement("span");
          this.rect = null;
          this.result = null;
          this.width = 0;
          this.height = 0;
          this._x = 0;
          this._y = 0;
          let offsetTop = 0;
          let offsetLeft = 0;
          const pad3 = 4;
          if (target.ownerDocument !== document) {
            const iframe = getAllDocumentFrames().find(
              (frame) => frame.contentDocument === target.ownerDocument
            );
            const rect2 = iframe.getClientRects()[0];
            offsetTop += rect2.top;
            offsetLeft += rect2.left;
          }
          const clientRects = target.getClientRects();
          let rect = clientRects[0];
          for (const recti of clientRects) {
            if (recti.bottom + offsetTop > 0 && recti.right + offsetLeft > 0) {
              rect = recti;
              break;
            }
          }
          this.rect = {
            top: rect.top + offsetTop,
            bottom: rect.bottom + offsetTop,
            left: rect.left + offsetLeft,
            right: rect.right + offsetLeft,
            width: rect.width,
            height: rect.height
          };
          this.flag.textContent = name;
          this.flag.className = "TridactylHint";
          if (get("hintuppercase") === "true") {
            this.flag.classList.add("TridactylHintUppercase");
          }
          this.flag.classList.add("TridactylHint" + target.tagName);
          classes == null ? void 0 : classes.forEach((f) => this.flag.classList.add(f));
          const top = rect.top > 0 ? this.rect.top : offsetTop + pad3;
          const left = rect.left > 0 ? this.rect.left : offsetLeft + pad3;
          this.x = window.scrollX + left;
          this.y = window.scrollY + top;
          modeState.hintHost.appendChild(this.flag);
          this.hidden = false;
        }
        static isHintable(target) {
          return target.getClientRects().length > 0;
        }
        setName(n2) {
          this.name = n2;
          this.flag.textContent = this.name;
        }
        // These styles would be better with pseudo selectors. Can we do custom ones?
        // If not, do a state machine.
        set hidden(hide2) {
          this.flag.hidden = hide2;
          if (hide2) {
            this.focused = false;
            this.target.classList.remove("TridactylHintElem");
          } else {
            this.target.classList.add("TridactylHintElem");
          }
        }
        set focused(focus3) {
          if (focus3) {
            this.target.classList.add("TridactylHintActive");
            this.target.classList.remove("TridactylHintElem");
          } else {
            this.target.classList.add("TridactylHintElem");
            this.target.classList.remove("TridactylHintActive");
          }
        }
        select() {
          this.onSelect(this);
        }
        set x(X) {
          this._x = X;
          this.updatePosition();
        }
        get x() {
          return this._x;
        }
        set y(Y) {
          this._y = Y;
          this.updatePosition();
        }
        get y() {
          return this._y;
        }
        overlapsWith(h) {
          if (h.width == 0)
            h.width = h.flag.getClientRects()[0].width;
          if (h.height == 0)
            h.height = h.flag.getClientRects()[0].height;
          if (this.width == 0)
            this.width = this.flag.getClientRects()[0].width;
          if (this.height == 0)
            this.height = this.flag.getClientRects()[0].height;
          return this.x < h.x + h.width && this.x + this.width > h.x && this.y < h.y + h.height && this.y + this.height > h.y;
        }
        updatePosition() {
          this.flag.style.cssText = `
        top: ${this._y}px !important;
        left: ${this._x}px !important;
        `;
        }
      };
      vimpHelper = {
        filterableTextFilter: null,
        sanitiseHintText: function sanitiseHintText(str2) {
          if (vimpHelper.filterableTextFilter === null) {
            const escapedHintChars = defaultHintChars().replace(
              /^\^|[-\\\]]/g,
              "\\$&"
            );
            const filterableTextFilter = new RegExp(
              "[" + escapedHintChars + "]",
              "g"
            );
            vimpHelper.filterableTextFilter = filterableTextFilter;
          }
          return str2.replace(vimpHelper.filterableTextFilter, "");
        },
        matchHint: function matchHint(str2, key) {
          return key.split(/\s+/).every((keyi) => str2.includes(keyi));
        }
      };
    }
  });

  // src/lib/hint_util.ts
  var HintConfig;
  var init_hint_util = __esm({
    "src/lib/hint_util.ts"() {
      "use strict";
      init_dom();
      init_hinting();
      HintConfig = class {
        constructor() {
          this.rapid = false;
          this.textFilter = null;
          this.openMode = "" /* Default */;
          this.includeInvisible = false;
          this.immediate = false;
          this.jshints = true;
          this.callback = null;
          this.excmd = null;
          this.pipeAttribute = null;
          this.selectors = [];
          this.selectorsExclude = [];
          this.warnings = [];
        }
        static parse(args2) {
          let State2;
          ((State3) => {
            State3[State3["Initial"] = 0] = "Initial";
            State3[State3["ExpectF"] = 1] = "ExpectF";
            State3[State3["ExpectFR"] = 2] = "ExpectFR";
            State3[State3["ExpectCallback"] = 3] = "ExpectCallback";
            State3[State3["ExpectExcmd"] = 4] = "ExpectExcmd";
            State3[State3["ExpectSelector"] = 5] = "ExpectSelector";
            State3[State3["ExpectPipeSelector"] = 6] = "ExpectPipeSelector";
            State3[State3["ExpectPipeAttribute"] = 7] = "ExpectPipeAttribute";
            State3[State3["ExpectSelectorCallback"] = 8] = "ExpectSelectorCallback";
            State3[State3["ExpectSelectorExclude"] = 9] = "ExpectSelectorExclude";
          })(State2 || (State2 = {}));
          const result = new HintConfig();
          const multiLetterFlags = ["fr", "wp", "br", "pipe"];
          let state2 = 0 /* Initial */;
          outer:
            for (let argI = 0; argI < args2.length; ++argI) {
              const arg2 = args2[argI];
              switch (state2) {
                case 0 /* Initial */:
                  if (arg2.length >= 2 && arg2[0] === "-" && arg2[1] !== "-") {
                    for (let i2 = 1; i2 < arg2.length; ++i2) {
                      let flag = arg2[i2];
                      if (i2 < arg2.length - 1) {
                        const multiLetterFlag = multiLetterFlags.find(
                          (tlf) => arg2.substring(i2, i2 + tlf.length) === tlf
                        );
                        if (multiLetterFlag !== void 0) {
                          flag = multiLetterFlag;
                          i2 += multiLetterFlag.length - 1;
                        }
                      }
                      let newOpenMode;
                      let newState;
                      switch (flag) {
                        case "br":
                          result.rapid = true;
                          newOpenMode = "-b" /* BackgroundTab */;
                          break;
                        case "q":
                          result.rapid = true;
                          break;
                        case "f":
                          newState = 1 /* ExpectF */;
                          break;
                        case "fr":
                          newState = 2 /* ExpectFR */;
                          break;
                        case "V":
                          result.includeInvisible = true;
                          break;
                        case "J":
                          result.jshints = false;
                          break;
                        case "!":
                          result.immediate = true;
                          break;
                        case "F":
                          newState = 3 /* ExpectCallback */;
                          break;
                        case "W":
                          newState = 4 /* ExpectExcmd */;
                          break;
                        case "c":
                          newState = 5 /* ExpectSelector */;
                          break;
                        case "x":
                          newState = 9 /* ExpectSelectorExclude */;
                          break;
                        case "pipe":
                          newState = 6 /* ExpectPipeSelector */;
                          break;
                        case "t":
                          newOpenMode = "-t" /* Tab */;
                          break;
                        case "b":
                          newOpenMode = "-b" /* BackgroundTab */;
                          break;
                        case "w":
                          newOpenMode = "-w" /* Window */;
                          break;
                        case "wp":
                          newOpenMode = "-wp" /* WindowPrivate */;
                          break;
                        case "h":
                          newOpenMode = "-h" /* Highlight */;
                          break;
                        case "i":
                          newOpenMode = "-i" /* Images */;
                          break;
                        case "I":
                          newOpenMode = "-I" /* ImagesTab */;
                          break;
                        case "k":
                          newOpenMode = "-k" /* Kill */;
                          break;
                        case "K":
                          newOpenMode = "-K" /* KillTridactyl */;
                          break;
                        case "z":
                          newOpenMode = "-z" /* Scroll */;
                          break;
                        case "s":
                          newOpenMode = "-s" /* SaveResource */;
                          break;
                        case "S":
                          newOpenMode = "-S" /* SaveImage */;
                          break;
                        case "a":
                          newOpenMode = "-a" /* SaveAsResource */;
                          break;
                        case "A":
                          newOpenMode = "-A" /* SaveAsImage */;
                          break;
                        case ";":
                          newOpenMode = "-;" /* ScrollFocus */;
                          break;
                        case "r":
                          newOpenMode = "-r" /* TTSRead */;
                          break;
                        case "P":
                          newOpenMode = "-P" /* YankAlt */;
                          break;
                        case "#":
                          newOpenMode = "-#" /* YankAnchor */;
                          break;
                        case "y":
                          newOpenMode = "-y" /* YankLink */;
                          break;
                        case "p":
                          newOpenMode = "-p" /* YankText */;
                          break;
                        default:
                          result.warnings.push(
                            `unknown flag -${flag}`
                          );
                          break;
                      }
                      if (newOpenMode !== void 0) {
                        if (result.openMode !== "" /* Default */) {
                          result.warnings.push(
                            "multiple open mode flags specified, overriding the previous ones"
                          );
                        }
                        result.openMode = newOpenMode;
                      }
                      if (newState !== void 0) {
                        if (state2 === 5 /* ExpectSelector */ && newState === 3 /* ExpectCallback */ || state2 === 3 /* ExpectCallback */ && newState === 5 /* ExpectSelector */) {
                          newState = 8 /* ExpectSelectorCallback */;
                        }
                        if (state2 !== 0 /* Initial */ && newState !== 8 /* ExpectSelectorCallback */) {
                          result.warnings.push(
                            `multiple flags taking a value were specified, only the last one (-${flag}) will be processed`
                          );
                        }
                        state2 = newState;
                      }
                    }
                  } else {
                    result.selectors.push(arg2);
                  }
                  break;
                case 1 /* ExpectF */:
                case 2 /* ExpectFR */:
                  let filter3 = arg2;
                  while (filter3.endsWith("\\")) {
                    filter3 = filter3.substring(0, filter3.length - 1);
                    if (argI + 1 < args2.length) {
                      filter3 += " " + args2[++argI];
                    } else {
                      break;
                    }
                  }
                  if (state2 == 1 /* ExpectF */) {
                    result.textFilter = filter3;
                  } else {
                    result.textFilter = new RegExp(filter3);
                  }
                  state2 = 0 /* Initial */;
                  break;
                case 4 /* ExpectExcmd */:
                  result.excmd = args2.slice(argI).join(" ");
                  state2 = 0 /* Initial */;
                  break outer;
                case 3 /* ExpectCallback */:
                  result.callback = args2.slice(argI).join(" ");
                  state2 = 0 /* Initial */;
                  break outer;
                case 5 /* ExpectSelector */:
                  result.selectors.push(arg2);
                  state2 = 0 /* Initial */;
                  break;
                case 9 /* ExpectSelectorExclude */:
                  result.selectorsExclude.push(arg2);
                  state2 = 0 /* Initial */;
                  break;
                case 6 /* ExpectPipeSelector */:
                  result.selectors.push(arg2);
                  state2 = 7 /* ExpectPipeAttribute */;
                  break;
                case 7 /* ExpectPipeAttribute */:
                  result.pipeAttribute = arg2;
                  state2 = 0 /* Initial */;
                  break;
                case 8 /* ExpectSelectorCallback */:
                  result.selectors.push(arg2);
                  state2 = 3 /* ExpectCallback */;
                  break;
              }
            }
          if (state2 !== 0 /* Initial */) {
            result.warnings.push("error parsing options: expected a value");
          }
          return result;
        }
        printWarnings(logger16) {
          for (const warning of this.warnings) {
            logger16.warning(warning);
          }
        }
        defaultHintables() {
          switch (this.openMode) {
            case "-p" /* YankText */:
            case "-h" /* Highlight */:
            case "-z" /* Scroll */:
              return toHintablesArray(
                elementsWithText(this.includeInvisible)
              );
            case "-P" /* YankAlt */:
              return toHintablesArray(
                getElemsBySelector("[title],[alt]", [
                  isVisibleFilter(this.includeInvisible)
                ])
              );
            case "-#" /* YankAnchor */:
              return toHintablesArray(
                anchors(this.includeInvisible)
              );
            case "-i" /* Images */:
            case "-I" /* ImagesTab */:
            case "-S" /* SaveImage */:
            case "-A" /* SaveAsImage */:
              return toHintablesArray(
                hintableImages(this.includeInvisible)
              );
            case "-k" /* Kill */:
            case "-K" /* KillTridactyl */:
              return toHintablesArray(
                killables(this.includeInvisible)
              );
            case "-s" /* SaveResource */:
            case "-a" /* SaveAsResource */:
              return toHintablesArray(
                saveableElements(this.includeInvisible)
              );
            default:
              return hintables2(
                HINTTAGS_selectors,
                this.jshints,
                this.includeInvisible
              );
          }
        }
        hintables() {
          const hintables3 = this.selectors.length > 0 ? hintables2(
            this.selectors.join(" "),
            this.jshints,
            this.includeInvisible
          ) : this.defaultHintables();
          const textFilter = this.textFilter;
          const exclude = this.selectorsExclude.join(" ");
          for (const elements of hintables3) {
            if (textFilter !== null) {
              elements.elements = elements.elements.filter(
                hintByTextFilter(this.textFilter)
              );
            }
            if (exclude) {
              elements.elements = elements.elements.filter(
                (element) => !element.matches(exclude)
              );
            }
          }
          return hintables3;
        }
        get isYank() {
          return this.openMode === "-#" /* YankAnchor */ || this.openMode === "-P" /* YankAlt */ || this.openMode === "-y" /* YankLink */ || this.openMode === "-p" /* YankText */;
        }
      };
    }
  });

  // node_modules/tridactyl-arg/index.js
  var require_tridactyl_arg = __commonJS({
    "node_modules/tridactyl-arg/index.js"(exports, module) {
      var flagSymbol = Symbol("arg flag");
      var ArgError = class extends Error {
        constructor(msg, code) {
          super(msg);
          this.name = "ArgError";
          this.code = code;
          Object.setPrototypeOf(this, ArgError.prototype);
        }
      };
      function arg2(opts2, {
        argv = process.argv.slice(2),
        permissive = false,
        stopAtPositional = false,
        splitUnknownArguments = true,
        allowNegativePositional = false,
        allowSingleHyphenLongOption = false
      } = {}) {
        if (!opts2) {
          throw new ArgError(
            "argument specification object is required",
            "ARG_CONFIG_NO_SPEC"
          );
        }
        const result = { _: [] };
        const aliases = {};
        const handlers = {};
        for (const key of Object.keys(opts2)) {
          if (!key) {
            throw new ArgError(
              "argument key cannot be an empty string",
              "ARG_CONFIG_EMPTY_KEY"
            );
          }
          if (key[0] !== "-") {
            throw new ArgError(
              `argument key must start with '-' but found: '${key}'`,
              "ARG_CONFIG_NONOPT_KEY"
            );
          }
          if (key.length === 1) {
            throw new ArgError(
              `argument key must have a name; singular '-' keys are not allowed: ${key}`,
              "ARG_CONFIG_NONAME_KEY"
            );
          }
          if (typeof opts2[key] === "string") {
            aliases[key] = opts2[key];
            continue;
          }
          let type3 = opts2[key];
          let isFlag = false;
          if (Array.isArray(type3) && type3.length === 1 && typeof type3[0] === "function") {
            const [fn] = type3;
            type3 = (value, name, prev = []) => {
              prev.push(fn(value, name, prev[prev.length - 1]));
              return prev;
            };
            isFlag = fn === Boolean || fn[flagSymbol] === true;
          } else if (typeof type3 === "function") {
            isFlag = type3 === Boolean || type3[flagSymbol] === true;
          } else {
            throw new ArgError(
              `type missing or not a function or valid array type: ${key}`,
              "ARG_CONFIG_VAD_TYPE"
            );
          }
          if (key[1] !== "-" && key.length > 2 && !allowSingleHyphenLongOption) {
            throw new ArgError(
              `short argument keys (with a single hyphen) must have only one character: ${key}`,
              "ARG_CONFIG_SHORTOPT_TOOLONG"
            );
          }
          handlers[key] = [type3, isFlag];
        }
        for (let i2 = 0, len = argv.length; i2 < len; i2++) {
          const wholeArg = argv[i2];
          if (stopAtPositional && result._.length > 0) {
            result._ = result._.concat(argv.slice(i2));
            break;
          }
          if (wholeArg === "--") {
            result._ = result._.concat(argv.slice(i2 + 1));
            break;
          }
          if (allowNegativePositional && /^-[\d.]/.test(wholeArg)) {
            const n2 = Number(wholeArg);
            if (!Number.isNaN(n2)) {
              result._.push(wholeArg);
              continue;
            }
          }
          if (wholeArg.length > 1 && wholeArg[0] === "-") {
            let separatedArguments = [];
            if (wholeArg[1] === "-" || wholeArg.length === 2) {
              separatedArguments.push(wholeArg);
            } else if (allowSingleHyphenLongOption && wholeArg in handlers) {
              separatedArguments.push(wholeArg);
            } else {
              let allArgumentsExist = true;
              for (const char of wholeArg.slice(1)) {
                const flag = `-${char}`;
                if (!(flag in handlers)) {
                  allArgumentsExist = false;
                }
                separatedArguments.push(`-${char}`);
              }
              if (!splitUnknownArguments && !allArgumentsExist) {
                separatedArguments = [wholeArg];
              }
            }
            for (let j = 0; j < separatedArguments.length; j++) {
              const arg3 = separatedArguments[j];
              const [originalArgName, argStr] = arg3.length > 2 ? arg3.split(/=(.*)/, 2) : [arg3, void 0];
              let argName = originalArgName;
              while (argName in aliases) {
                argName = aliases[argName];
              }
              if (!(argName in handlers)) {
                if (permissive) {
                  result._.push(arg3);
                  continue;
                } else {
                  throw new ArgError(
                    `unknown or unexpected option: ${originalArgName}`,
                    "ARG_UNKNOWN_OPTION"
                  );
                }
              }
              const [type3, isFlag] = handlers[argName];
              if (!isFlag && j + 1 < separatedArguments.length) {
                throw new ArgError(
                  `option requires argument (but was followed by another short argument): ${originalArgName}`,
                  "ARG_MISSING_REQUIRED_SHORTARG"
                );
              }
              if (isFlag) {
                result[argName] = type3(true, argName, result[argName]);
              } else if (argStr === void 0) {
                if (argv.length < i2 + 2 || argv[i2 + 1].length > 1 && argv[i2 + 1][0] === "-" && !(argv[i2 + 1].match(/^-?\d*(\.(?=\d))?\d*$/) && (type3 === Number || // eslint-disable-next-line no-undef
                typeof BigInt !== "undefined" && type3 === BigInt))) {
                  const extended = originalArgName === argName ? "" : ` (alias for ${argName})`;
                  throw new ArgError(
                    `option requires argument: ${originalArgName}${extended}`,
                    "ARG_MISSING_REQUIRED_LONGARG"
                  );
                }
                result[argName] = type3(argv[i2 + 1], argName, result[argName]);
                ++i2;
              } else {
                result[argName] = type3(argStr, argName, result[argName]);
              }
            }
          } else {
            result._.push(wholeArg);
          }
        }
        return result;
      }
      arg2.flag = (fn) => {
        fn[flagSymbol] = true;
        return fn;
      };
      arg2.COUNT = arg2.flag((v, name, existingCount) => (existingCount || 0) + 1);
      arg2.ArgError = ArgError;
      module.exports = arg2;
    }
  });

  // src/lib/arg_util.ts
  var import_tridactyl_arg, lib;
  var init_arg_util = __esm({
    "src/lib/arg_util.ts"() {
      "use strict";
      import_tridactyl_arg = __toESM(require_tridactyl_arg());
      lib = import_tridactyl_arg.default;
    }
  });

  // src/parsers/gobblemode.ts
  function init3(numKeysOrTerminator, endCommand, ...args2) {
    contentState.mode = "gobble";
    modeState2 = new GobbleState();
    const number = Number(numKeysOrTerminator);
    if (!isNaN(number)) {
      modeState2.numKeysOrTerminator = number;
    } else
      modeState2.numKeysOrTerminator = canonicaliseMapstr(numKeysOrTerminator);
    modeState2.endCommand = endCommand;
    modeState2.args = args2.join(" ");
  }
  function reset2() {
    modeState2 = void 0;
    contentState.mode = "normal";
  }
  function parser3(keys4) {
    function exec() {
      const exstr = [
        modeState2.endCommand,
        modeState2.keyCombination,
        modeState2.args
      ].join(" ");
      reset2();
      return { keys: [], exstr };
    }
    const key = keys4[0].key;
    if (key === "Escape") {
      reset2();
    } else if (typeof modeState2.numKeysOrTerminator === "string" && modeState2.numKeysOrTerminator === keys4[0].toMapstr()) {
      return exec();
    } else if (keys4[0].isPrintable()) {
      modeState2.keyCombination += keys4[0].toMapstr();
      if (typeof modeState2.numKeysOrTerminator === "number" && --modeState2.numKeysOrTerminator <= 0)
        return exec();
    }
    return { keys: [], exstr: "", isMatch: true };
  }
  var GobbleState, modeState2;
  var init_gobblemode = __esm({
    "src/parsers/gobblemode.ts"() {
      "use strict";
      init_state_content();
      init_keyseq();
      GobbleState = class {
        constructor() {
          this.numKeysOrTerminator = 0;
          this.keyCombination = "";
          this.endCommand = "";
        }
      };
    }
  });

  // src/parsers/genericmode.ts
  function parser4(conf, keys4) {
    const maps = keyMap(conf);
    return parse(keys4, maps);
  }
  var init_genericmode = __esm({
    "src/parsers/genericmode.ts"() {
      "use strict";
      init_keyseq();
    }
  });

  // src/parsers/nmode.ts
  function init4(endCommand, mode2 = "normal", numCommands = 1) {
    contentState.mode = "nmode";
    modeState3 = new NModeState();
    modeState3.endCommand = endCommand;
    modeState3.numCommands = numCommands;
    modeState3.mode = mode2;
  }
  function parser5(keys4) {
    keys4 = stripOnlyModifiers(keys4);
    if (keys4.length === 0)
      return { keys: [], isMatch: false };
    const conf = mode2maps.get(modeState3.mode) || modeState3.mode + "maps";
    const maps = keyMap(conf);
    const key = keys4[0].key;
    if (key === "Escape") {
      const exstr = modeState3.endCommand;
      modeState3 = void 0;
      return { keys: [], exstr };
    }
    const response = parse(keys4, maps);
    if (response.exstr !== void 0 && response.isMatch || !response.isMatch)
      modeState3.curCommands += 1;
    if (modeState3.curCommands >= modeState3.numCommands) {
      const prefix = response.exstr === void 0 ? "" : "composite " + response.exstr + "; ";
      response.exstr = prefix + modeState3.endCommand;
      modeState3 = void 0;
    }
    return response;
  }
  var NModeState, modeState3;
  var init_nmode = __esm({
    "src/parsers/nmode.ts"() {
      "use strict";
      init_state_content();
      init_keyseq();
      init_binding();
      NModeState = class {
        constructor() {
          this.numCommands = 1;
          this.curCommands = 0;
          this.mode = "normal";
          this.endCommand = "";
        }
      };
    }
  });

  // src/content/controller_content.ts
  var controller_content_exports = {};
  __export(controller_content_exports, {
    acceptKey: () => acceptKey,
    canceller: () => canceller,
    generator: () => generator
  });
  function PrintableKey(k) {
    let result = k.key;
    if (result === "Control" || result === "Meta" || result === "Alt" || result === "Shift" || result === "OS") {
      return "";
    }
    if (k.altKey) {
      result = "A-" + result;
    }
    if (k.ctrlKey) {
      result = "C-" + result;
    }
    if (k.shiftKey) {
      result = "S-" + result;
    }
    if (result.length > 1) {
      result = "<" + result + ">";
    }
    return result;
  }
  function* ParserController() {
    const parsers = {
      normal: (keys4) => parser4("nmaps", keys4),
      insert: (keys4) => parser4("imaps", keys4),
      input: (keys4) => parser4("inputmaps", keys4),
      ignore: (keys4) => parser4("ignoremaps", keys4),
      hint: parser2,
      gobble: parser3,
      visual: (keys4) => parser4("vmaps", keys4),
      nmode: parser5
    };
    while (true) {
      let exstr = "";
      let previousSuffix = null;
      let keyEvents = [];
      try {
        while (true) {
          const keyevent = yield;
          let shadowRoot = null;
          let textEditable = false;
          if (keyevent instanceof KeyboardEvent) {
            shadowRoot = deepestShadowRoot(
              keyevent.target.shadowRoot
            );
            textEditable = shadowRoot === null ? isTextEditable(keyevent.target) : isTextEditable(shadowRoot.activeElement);
            keyEvents.push(minimalKeyFromKeyboardEvent(keyevent));
          } else {
            keyEvents.push(keyevent);
          }
          const currentMode = contentState.mode;
          if (currentMode !== "ignore" && currentMode !== "hint" && currentMode !== "input") {
            if (textEditable) {
              if (currentMode !== "insert") {
                contentState.mode = "insert";
              }
            } else if (currentMode === "insert") {
              contentState.mode = "normal";
            }
          } else if (currentMode === "input" && !textEditable) {
            contentState.mode = "normal";
          }
          const newMode = contentState.mode;
          if (newMode !== currentMode) {
            keyEvents = keyEvents.slice(-1);
            previousSuffix = null;
          }
          const response = (parsers[contentState.mode] || ((keys4) => parser4(contentState.mode + "maps", keys4)))(keyEvents);
          logger9.debug(
            currentMode,
            contentState.mode,
            keyEvents,
            response
          );
          if (response.isMatch && keyevent instanceof KeyboardEvent) {
            keyevent.preventDefault();
            keyevent.stopImmediatePropagation();
            canceller.push(keyevent);
          }
          if (response.exstr) {
            exstr = response.exstr;
            break;
          } else {
            keyEvents = response.keys;
            const suffix = keyEvents.map((x) => PrintableKey(x)).join("");
            if (previousSuffix !== suffix) {
              contentState.suffix = suffix;
              previousSuffix = suffix;
            }
            logger9.debug("suffix: ", suffix);
          }
        }
        contentState.suffix = "";
        acceptExCmd(exstr);
      } catch (e2) {
        logger9.error("An error occurred in the content controller: ", e2);
      }
    }
  }
  function acceptKey(keyevent) {
    return generator.next(keyevent);
  }
  var logger9, KeyCanceller, canceller, generator;
  var init_controller_content = __esm({
    "src/content/controller_content.ts"() {
      "use strict";
      init_dom();
      init_state_content();
      init_logging();
      init_controller();
      init_keyseq();
      init_dom();
      init_hinting();
      init_gobblemode();
      init_genericmode();
      init_nmode();
      logger9 = new logging_default("controller");
      KeyCanceller = class {
        constructor() {
          this.keyPress = [];
          this.keyUp = [];
          this.cancelKeyPress = (ke) => {
            if (!ke.isTrusted)
              return;
            this.cancelKey(ke, this.keyPress);
          };
          this.cancelKeyUp = (ke) => {
            if (!ke.isTrusted)
              return;
            this.cancelKey(ke, this.keyUp);
          };
          this.cancelKeyUp = this.cancelKeyUp.bind(this);
          this.cancelKeyPress = this.cancelKeyPress.bind(this);
        }
        push(ke) {
          this.keyPress.push(ke);
          this.keyUp.push(ke);
        }
        cancelKey(ke, kes) {
          const index2 = kes.findIndex(
            (ke2) => ke.altKey === ke2.altKey && ke.code === ke2.code && ke.composed === ke2.composed && ke.ctrlKey === ke2.ctrlKey && ke.metaKey === ke2.metaKey && ke.shiftKey === ke2.shiftKey && ke.target === ke2.target
          );
          if (index2 >= 0 && ke instanceof KeyboardEvent) {
            ke.preventDefault();
            ke.stopImmediatePropagation();
            kes.splice(index2, 1);
          }
        }
      };
      canceller = new KeyCanceller();
      generator = ParserController();
      generator.next();
    }
  });

  // src/lib/number.clamp.ts
  var init_number_clamp = __esm({
    "src/lib/number.clamp.ts"() {
      "use strict";
      Number.prototype.clamp = function(lo, hi) {
        return Math.max(lo, Math.min(this, hi));
      };
    }
  });

  // src/background/commandline_cmds.ts
  var functions2, CmdlineCmds2;
  var init_commandline_cmds2 = __esm({
    "src/background/commandline_cmds.ts"() {
      "use strict";
      init_commandline_cmds();
      init_messaging();
      functions2 = getCommandlineFns({});
      CmdlineCmds2 = new Proxy(functions2, {
        get(target, property) {
          if (target[property]) {
            return (...args2) => messageActiveTab("commandline_cmd", property, args2);
          }
          return target[property];
        }
      });
    }
  });

  // src/background/editor.ts
  var EditorCmds2;
  var init_editor2 = __esm({
    "src/background/editor.ts"() {
      "use strict";
      init_messaging();
      init_editor();
      EditorCmds2 = new Proxy(editor_exports, {
        get(target, property) {
          if (target[property]) {
            return (...args2) => messageActiveTab("editorfn_content", property, args2);
          }
          return target[property];
        }
      });
    }
  });

  // src/content/styling.ts
  var styling_exports = {};
  __export(styling_exports, {
    THEMES: () => THEMES,
    theme: () => theme
  });
  function capitalise(str2) {
    if (str2 === "")
      return str2;
    return str2[0].toUpperCase() + str2.slice(1);
  }
  function prefixTheme(name) {
    return "TridactylTheme" + capitalise(name);
  }
  async function theme(element) {
    for (const theme2 of THEMES.map(prefixTheme)) {
      element.classList.remove(theme2);
    }
    if (insertedCSS) {
      await browserBg.tabs.removeCSS(await ownTabId(), customCss);
      insertedCSS = false;
    }
    const newTheme = await getAsync("theme");
    if (newTheme !== "default") {
      element.classList.add(prefixTheme(newTheme));
    }
    if (newTheme !== "default") {
      customCss.code = THEMES.includes(newTheme) ? "@import url('" + browser.runtime.getURL(
        "static/themes/" + newTheme + "/" + newTheme + ".css"
      ) + "');" : await getAsync("customthemes", newTheme);
      if (customCss.code) {
        await browserBg.tabs.insertCSS(await ownTabId(), customCss);
        insertedCSS = true;
      } else {
        logger10.error("Theme " + newTheme + " couldn't be found.");
      }
    }
    if (THEMED_ELEMENTS.length < 2 && element.tagName.toUpperCase() === "HTML") {
      THEMED_ELEMENTS.push(element);
    }
  }
  function retheme() {
    THEMED_ELEMENTS.forEach((element) => {
      theme(element).catch((e2) => {
        logger10.warning(
          `Failed to retheme element "${element}". Error: ${e2}`
        );
      });
    });
  }
  var logger10, THEMES, THEMED_ELEMENTS, insertedCSS, customCss, cb;
  var init_styling = __esm({
    "src/content/styling.ts"() {
      "use strict";
      init_metadata_generated();
      init_config();
      init_logging();
      init_webext();
      logger10 = new Logger("styling");
      THEMES = staticThemes;
      THEMED_ELEMENTS = [];
      insertedCSS = false;
      customCss = {
        allFrames: true,
        matchAboutBlank: true,
        code: ""
      };
      addChangeListener("theme", retheme);
      cb = async (mutationList) => {
        const theme2 = await getAsync("theme");
        mutationList.filter((m) => m.target.className.search(prefixTheme("")) === -1).forEach((m) => m.target.classList.add(prefixTheme(theme2)));
      };
      new MutationObserver(cb).observe(document.documentElement, {
        attributes: true,
        childList: false,
        characterData: false,
        subtree: false,
        attributeOldValue: false,
        attributeFilter: ["class"]
      });
    }
  });

  // src/content/commandline_content.ts
  var commandline_content_exports = {};
  __export(commandline_content_exports, {
    blur: () => blur,
    executeWithoutCommandLine: () => executeWithoutCommandLine,
    focus: () => focus2,
    hide: () => hide,
    hide_and_blur: () => hide_and_blur,
    show: () => show
  });
  async function init5() {
    const noiframe = await getAsync("noiframe");
    const notridactyl = await getAsync("superignore");
    if (noiframe === "false" && notridactyl !== "true" && !enabled) {
      hide();
      document.documentElement.appendChild(cmdline_iframe);
      enabled = true;
      await theme(window.document.querySelector(":root"));
    }
  }
  function show(hidehover = false) {
    try {
      if (hidehover) {
        const a = window.document.createElement("A");
        a.href = "";
        document.body.appendChild(a);
        a.focus({ preventScroll: true });
        document.body.removeChild(a);
      }
      cmdline_iframe.classList.remove("hidden");
      const height = cmdline_iframe.contentWindow.document.body.offsetHeight + "px";
      cmdline_iframe.setAttribute("style", `height: ${height} !important;`);
    } catch (e2) {
      console.error(e2);
    }
  }
  function hide() {
    try {
      cmdline_iframe.classList.add("hidden");
      cmdline_iframe.setAttribute("style", "height: 0px !important;");
    } catch (e2) {
      cmdline_logger.error(e2);
    }
  }
  function focus2() {
    try {
      cmdline_iframe.focus();
    } catch (e2) {
      console.error(e2);
    }
  }
  function blur() {
    try {
      cmdline_iframe.blur();
    } catch (e2) {
      cmdline_logger.error(e2);
    }
  }
  function hide_and_blur() {
    hide();
    blur();
  }
  function executeWithoutCommandLine(fn) {
    let parent;
    if (cmdline_iframe) {
      parent = cmdline_iframe.parentNode;
      parent.removeChild(cmdline_iframe);
    }
    let result;
    try {
      result = fn();
    } catch (e2) {
      cmdline_logger.error(e2);
    }
    if (cmdline_iframe)
      parent.appendChild(cmdline_iframe);
    return result;
  }
  var logger11, cmdline_logger, cmdline_iframe, enabled;
  var init_commandline_content = __esm({
    "src/content/commandline_content.ts"() {
      "use strict";
      init_logging();
      init_config();
      init_styling();
      init_messaging();
      init_commandline_content();
      logger11 = new logging_default("messaging");
      cmdline_logger = new logging_default("cmdline");
      cmdline_iframe = window.document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        "iframe"
      );
      cmdline_iframe.className = "cleanslate";
      cmdline_iframe.setAttribute(
        "src",
        browser.runtime.getURL("static/commandline.html")
      );
      cmdline_iframe.setAttribute("id", "cmdline_iframe");
      cmdline_iframe.setAttribute("loading", "lazy");
      enabled = false;
      init5().catch(() => {
        document.addEventListener(
          "DOMContentLoaded",
          () => setTimeout(() => {
            init5().catch(
              (e2) => logger11.error("Couldn't initialise cmdline_iframe!", e2)
            );
          }, 0)
        );
      });
      addListener("commandline_content", attributeCaller(commandline_content_exports));
    }
  });

  // src/content/scrolling.ts
  var scrolling_exports = {};
  __export(scrolling_exports, {
    recursiveScroll: () => recursiveScroll,
    scroll: () => scroll,
    setCurrentFocus: () => setCurrentFocus
  });
  async function getSmooth() {
    if (opts.smooth === null)
      opts.smooth = await getAsync("smoothscroll");
    return opts.smooth;
  }
  async function getDuration() {
    if (opts.duration === null)
      opts.duration = await getAsync("scrollduration");
    return opts.duration;
  }
  async function scroll(xDistance = 0, yDistance = 0, e2, duration) {
    const smooth = await getSmooth();
    if (smooth === "false")
      duration = 0;
    else if (duration === void 0)
      duration = await getDuration();
    let didScroll = false;
    if (xDistance !== 0) {
      let scrollData = horizontallyScrolling.get(e2);
      if (!scrollData) {
        scrollData = new ScrollingData(e2, "scrollLeft");
        horizontallyScrolling.set(e2, scrollData);
      }
      didScroll = didScroll || scrollData.scroll(xDistance, duration);
    }
    if (yDistance !== 0) {
      let scrollData = verticallyScrolling.get(e2);
      if (!scrollData) {
        scrollData = new ScrollingData(e2, "scrollTop");
        verticallyScrolling.set(e2, scrollData);
      }
      didScroll = didScroll || scrollData.scroll(yDistance, duration);
    }
    return didScroll;
  }
  function setCurrentFocus(v) {
    currentFocused = v;
  }
  async function recursiveScroll(xDistance, yDistance, node) {
    var _a;
    let startingFromCached = false;
    if (!node) {
      const sameSignX = xDistance < 0 === lastX < 0;
      const sameSignY = yDistance < 0 === lastY < 0;
      const sameElement = lastFocused == currentFocused;
      if (lastRecursiveScrolled && sameSignX && sameSignY && sameElement) {
        startingFromCached = true;
        node = lastRecursiveScrolled;
      } else {
        if (!currentFocused || currentFocused.nodeName == "#document")
          currentFocused = document.activeElement;
        node = currentFocused;
        while (true) {
          if (await scroll(xDistance, yDistance, node))
            return true;
          node = node.parentElement;
          if (!node)
            break;
        }
        node = document.documentElement;
        lastFocused = currentFocused;
      }
    }
    let treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
    do {
      if (await scroll(xDistance, yDistance, treeWalker.currentNode) || treeWalker.currentNode.contentDocument && !((_a = treeWalker.currentNode.src) == null ? void 0 : _a.startsWith(
        "moz-extension://"
      )) && await recursiveScroll(
        xDistance,
        yDistance,
        treeWalker.currentNode.contentDocument.body
      )) {
        lastRecursiveScrolled = treeWalker.currentNode;
        lastX = xDistance;
        lastY = yDistance;
        return true;
      }
    } while (treeWalker.nextNode());
    if (startingFromCached) {
      treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
      do {
        if (await scroll(xDistance, yDistance, treeWalker.currentNode)) {
          lastRecursiveScrolled = treeWalker.currentNode;
          lastX = xDistance;
          lastY = yDistance;
          return true;
        }
      } while (treeWalker.previousNode());
    }
    lastRecursiveScrolled = null;
    lastX = xDistance;
    lastY = yDistance;
    return false;
  }
  var opts, ScrollingData, horizontallyScrolling, verticallyScrolling, lastRecursiveScrolled, lastFocused, currentFocused, lastX, lastY;
  var init_scrolling = __esm({
    "src/content/scrolling.ts"() {
      "use strict";
      init_config();
      opts = { smooth: null, duration: null };
      addChangeListener("smoothscroll", (prev, cur) => opts.smooth = cur);
      addChangeListener("scrollduration", (prev, cur) => opts.duration = cur);
      ScrollingData = class {
        /** elem: The element that should be scrolled
         * scrollDirection: "scrollLeft" if the element should be scrolled on the horizontal axis, "scrollTop" otherwise
         */
        constructor(elem, scrollDirection = "scrollTop") {
          this.elem = elem;
          this.scrollDirection = scrollDirection;
          // Whether the element is being scrolled
          this.scrolling = false;
          // Duration of the scrolling animation
          this.duration = 0;
        }
        scroll(distance2, duration) {
          this.duration = duration;
          this.startTime = performance.now();
          this.startPos = this.elem[this.scrollDirection];
          if (this.scrolling) {
            this.endPos = this.endPos + distance2;
            return true;
          }
          this.endPos = this.startPos + distance2;
          if ("style" in this.elem)
            this.elem.style.scrollBehavior = "unset";
          this.scrolling = this.scrollStep();
          if (this.scrolling)
            this.scheduleStep();
          return this.scrolling;
        }
        /** Computes where the element should be.
         *  This changes depending on how long ago the first scrolling attempt was
         *  made.
         *  It might be useful to make this function more configurable by making it
         *  accept an argument instead of using performance.now()
         */
        getStep() {
          if (this.startTime === void 0) {
            this.startTime = performance.now();
          }
          const elapsed = performance.now() - this.startTime;
          if (elapsed >= this.duration || this.elem[this.scrollDirection] === this.endPos)
            return this.endPos;
          let pixelToScrollTo = this.startPos + (this.endPos - this.startPos) * elapsed / this.duration;
          if (this.startPos < this.endPos) {
            pixelToScrollTo = Math.ceil(pixelToScrollTo);
            if (pixelToScrollTo == this.elem[this.scrollDirection])
              pixelToScrollTo += 1;
          } else {
            pixelToScrollTo = Math.floor(pixelToScrollTo);
            if (pixelToScrollTo == this.elem[this.scrollDirection])
              pixelToScrollTo -= 1;
          }
          return pixelToScrollTo;
        }
        /** Updates the position of this.elem, returns true if the element has been scrolled, false otherwise. */
        scrollStep() {
          const prevScrollPos = this.elem[this.scrollDirection];
          this.elem[this.scrollDirection] = this.getStep();
          return prevScrollPos !== this.elem[this.scrollDirection];
        }
        /** Calls this.scrollStep() until the element has been completely scrolled
         * or the scrolling animation is complete */
        scheduleStep() {
          window.requestAnimationFrame(
            () => this.scrollStep() ? this.scheduleStep() : this.scrolling = false
          );
        }
      };
      horizontallyScrolling = /* @__PURE__ */ new Map();
      verticallyScrolling = /* @__PURE__ */ new Map();
      lastRecursiveScrolled = null;
      lastFocused = null;
      currentFocused = document.activeElement;
      lastX = 0;
      lastY = 0;
      document.addEventListener("mousedown", (event) => {
        currentFocused = event.target;
      });
      document.addEventListener("focusin", (event) => {
        currentFocused = event.target;
      });
    }
  });

  // node_modules/compute-scroll-into-view/dist/index.js
  var t, e, n, l, i, o4;
  var init_dist = __esm({
    "node_modules/compute-scroll-into-view/dist/index.js"() {
      t = (t2) => "object" == typeof t2 && null != t2 && 1 === t2.nodeType;
      e = (t2, e2) => (!e2 || "hidden" !== t2) && ("visible" !== t2 && "clip" !== t2);
      n = (t2, n2) => {
        if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
          let l2 = getComputedStyle(t2, null);
          return e(l2.overflowY, n2) || e(l2.overflowX, n2) || ((t3) => {
            let e2 = ((t4) => {
              if (!t4.ownerDocument || !t4.ownerDocument.defaultView)
                return null;
              try {
                return t4.ownerDocument.defaultView.frameElement;
              } catch (t5) {
                return null;
              }
            })(t3);
            return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
          })(t2);
        }
        return false;
      };
      l = (t2, e2, n2, l2, i2, o5, r, d) => o5 < t2 && r > e2 || o5 > t2 && r < e2 ? 0 : o5 <= t2 && d <= n2 || r >= e2 && d >= n2 ? o5 - t2 - l2 : r > e2 && d < n2 || o5 < t2 && d > n2 ? r - e2 + i2 : 0;
      i = (t2) => {
        let e2 = t2.parentElement;
        return null == e2 ? t2.getRootNode().host || null : e2;
      };
      o4 = (e2, o5) => {
        var r, d, h, f;
        if ("undefined" == typeof document)
          return [];
        let { scrollMode: u, block: s, inline: c, boundary: a, skipOverflowHiddenElements: g } = o5, m = "function" == typeof a ? a : (t2) => t2 !== a;
        if (!t(e2))
          throw new TypeError("Invalid target");
        let p = document.scrollingElement || document.documentElement, w = [], W = e2;
        for (; t(W) && m(W); ) {
          if (W = i(W), W === p) {
            w.push(W);
            break;
          }
          null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
        }
        let H = null != (d = null == (r = window.visualViewport) ? void 0 : r.width) ? d : innerWidth, b = null != (f = null == (h = window.visualViewport) ? void 0 : h.height) ? f : innerHeight, { scrollX: v, scrollY: y } = window, { height: E, width: M, top: x, right: I, bottom: C, left: R } = e2.getBoundingClientRect(), T2 = "start" === s || "nearest" === s ? x : "end" === s ? C : x + E / 2, V = "center" === c ? R + M / 2 : "end" === c ? I : R, k = [];
        for (let t2 = 0; t2 < w.length; t2++) {
          let e3 = w[t2], { height: n2, width: i2, top: o6, right: r2, bottom: d2, left: h2 } = e3.getBoundingClientRect();
          if ("if-needed" === u && x >= 0 && R >= 0 && C <= b && I <= H && x >= o6 && C <= d2 && R >= h2 && I <= r2)
            return k;
          let f2 = getComputedStyle(e3), a2 = parseInt(f2.borderLeftWidth, 10), g2 = parseInt(f2.borderTopWidth, 10), m2 = parseInt(f2.borderRightWidth, 10), W2 = parseInt(f2.borderBottomWidth, 10), B = 0, D = 0, L = "offsetWidth" in e3 ? e3.offsetWidth - e3.clientWidth - a2 - m2 : 0, S = "offsetHeight" in e3 ? e3.offsetHeight - e3.clientHeight - g2 - W2 : 0, X = "offsetWidth" in e3 ? 0 === e3.offsetWidth ? 0 : i2 / e3.offsetWidth : 0, Y = "offsetHeight" in e3 ? 0 === e3.offsetHeight ? 0 : n2 / e3.offsetHeight : 0;
          if (p === e3)
            B = "start" === s ? T2 : "end" === s ? T2 - b : "nearest" === s ? l(y, y + b, b, g2, W2, y + T2, y + T2 + E, E) : T2 - b / 2, D = "start" === c ? V : "center" === c ? V - H / 2 : "end" === c ? V - H : l(v, v + H, H, a2, m2, v + V, v + V + M, M), B = Math.max(0, B + y), D = Math.max(0, D + v);
          else {
            B = "start" === s ? T2 - o6 - g2 : "end" === s ? T2 - d2 + W2 + S : "nearest" === s ? l(o6, d2, n2, g2, W2 + S, T2, T2 + E, E) : T2 - (o6 + n2 / 2) + S / 2, D = "start" === c ? V - h2 - a2 : "center" === c ? V - (h2 + i2 / 2) + L / 2 : "end" === c ? V - r2 + m2 + L : l(h2, r2, i2, a2, m2 + L, V, V + M, M);
            let { scrollLeft: t3, scrollTop: f3 } = e3;
            B = Math.max(0, Math.min(f3 + B / Y, e3.scrollHeight - n2 / Y + S)), D = Math.max(0, Math.min(t3 + D / X, e3.scrollWidth - i2 / X + L)), T2 += f3 - B, V += t3 - D;
          }
          k.push({ el: e3, top: B, left: D });
        }
        return k;
      };
    }
  });

  // src/content/finding.ts
  var finding_exports = {};
  __export(finding_exports, {
    currentMatchRange: () => currentMatchRange,
    focusHighlight: () => focusHighlight,
    jumpToMatch: () => jumpToMatch,
    jumpToNextMatch: () => jumpToNextMatch,
    removeHighlighting: () => removeHighlighting,
    repositionHighlight: () => repositionHighlight
  });
  function getFindHost() {
    if (host) {
      return host;
    }
    const elem = document.createElement("span");
    elem.id = "TridactylFindHost";
    elem.className = "cleanslate";
    elem.style.position = "absolute";
    elem.style.top = "0px";
    elem.style.left = "0px";
    document.body.appendChild(elem);
    host = elem.attachShadow({ mode: "closed" });
    return host;
  }
  async function jumpToMatch(searchQuery, option) {
    const timeout = get("findhighlighttimeout");
    if (timeout > 0) {
      clearTimeout(HIGHLIGHT_TIMER);
      HIGHLIGHT_TIMER = setTimeout(removeHighlighting, timeout);
    }
    const findcase = get("findcase");
    const sensitive = findcase === "sensitive" || findcase === "smart" && /[A-Z]/.test(searchQuery);
    const findPromise = await browserBg.find.find(searchQuery, {
      tabId: await activeTabId(),
      caseSensitive: sensitive,
      entireWord: false,
      includeRangeData: true,
      includeRectData: true
    });
    state.lastSearchQuery = searchQuery;
    lastHighlights = [];
    removeHighlighting();
    const walker = document.createTreeWalker(
      document,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    const nodes = [];
    let node;
    do {
      node = walker.nextNode();
      nodes.push(node);
    } while (node);
    const results = await findPromise;
    const host2 = getFindHost();
    for (let i2 = 0; i2 < results.count; ++i2) {
      const data = results.rectData[i2];
      if (data.rectsAndTexts.rectList.length < 1) {
        continue;
      }
      const range4 = results.rangeData[i2];
      const high = FindHighlight.fromFindApi(range4, nodes);
      host2.appendChild(high);
      lastHighlights.push(high);
    }
    if (lastHighlights.length < 1) {
      throw new Error("Pattern not found: " + searchQuery);
    }
    lastHighlights.sort(
      option["reverse"] ? (a, b) => b.top - a.top : (a, b) => a.top - b.top
    );
    if ("jumpTo" in option) {
      selected = (option["jumpTo"] + lastHighlights.length) % lastHighlights.length;
      focusHighlight(selected);
      return;
    }
    selected = 0;
    if (isVisible(lastHighlights[selected])) {
      focusHighlight(selected);
    } else {
      const searchFromView = true;
      await jumpToNextMatch(1, searchFromView);
    }
  }
  function drawHighlights(highlights) {
    const host2 = getFindHost();
    highlights.forEach((elem) => host2.appendChild(elem));
  }
  function removeHighlighting() {
    const host2 = getFindHost();
    while (host2.firstChild)
      host2.removeChild(host2.firstChild);
  }
  function focusHighlight(index2) {
    lastHighlights[index2].focus();
    repositionHighlight();
  }
  function repositionHighlight() {
    for (const node of lastHighlights) {
      node.updateRectsPosition();
    }
  }
  async function jumpToNextMatch(n2, searchFromView = false) {
    const lastSearchQuery = await getAsync2("lastSearchQuery");
    if (!lastSearchQuery)
      return;
    if (!lastHighlights) {
      await jumpToMatch(lastSearchQuery, { reverse: n2 < 0 });
      if (Math.abs(n2) === 1)
        return;
      n2 = n2 - n2 / Math.abs(n2);
      searchFromView = false;
    }
    if (!host.firstChild) {
      const timeout = get("findhighlighttimeout");
      if (timeout > 0) {
        clearTimeout(HIGHLIGHT_TIMER);
        HIGHLIGHT_TIMER = setTimeout(removeHighlighting, timeout);
      }
      drawHighlights(lastHighlights);
    }
    if (lastHighlights[selected] === void 0) {
      removeHighlighting();
      throw new Error("Pattern not found: " + lastSearchQuery);
    }
    ;
    lastHighlights[selected].unfocus();
    if (!searchFromView || isVisible(lastHighlights[selected])) {
      selected = (selected + n2 + lastHighlights.length) % lastHighlights.length;
    } else {
      repositionHighlight();
      const length3 = lastHighlights.length;
      const reverse3 = lastHighlights[length3 - 1].top < lastHighlights[0].top;
      const negative = n2 < 0;
      const downward = !reverse3 && !negative || reverse3 && negative;
      const yOffset = window.pageYOffset + (downward ? 0 : window.innerHeight);
      const start = negative ? length3 - 1 : 0;
      const increment = negative ? -1 : 1;
      selected = (n2 - 1 + length3) % length3;
      for (let i2 = start; i2 in lastHighlights; i2 += increment) {
        if (lastHighlights[i2].top > yOffset == downward) {
          selected = (i2 + n2 - increment + length3) % length3;
          break;
        }
      }
    }
    focusHighlight(selected);
  }
  function currentMatchRange() {
    return lastHighlights[selected].range;
  }
  var host, FindHighlight, lastHighlights, selected, HIGHLIGHT_TIMER;
  var init_finding = __esm({
    "src/content/finding.ts"() {
      "use strict";
      init_config();
      init_dom();
      init_webext();
      init_state();
      init_state();
      init_dist();
      FindHighlight = class extends HTMLSpanElement {
        constructor(range4) {
          super();
          this.range = range4;
          this.top = Infinity;
          {
            const proto = FindHighlight.prototype;
            for (const key of Object.getOwnPropertyNames(proto)) {
              this[key] = proto[key];
            }
          }
          this.style.position = "absolute";
          this.style.top = "0px";
          this.style.left = "0px";
          this.updateRectsPosition();
          this.unfocus();
        }
        static fromFindApi(found, allTextNode) {
          const range4 = document.createRange();
          range4.setStart(allTextNode[found.startTextNodePos], found.startOffset);
          range4.setEnd(allTextNode[found.endTextNodePos], found.endOffset);
          return new this(range4);
        }
        updateRectsPosition() {
          const rects = this.getClientRects();
          this.top = Infinity;
          const windowTop = window.pageYOffset;
          const windowLeft = window.pageXOffset;
          for (let i2 = 0; i2 < rects.length; i2++) {
            const rect = rects[i2];
            if (rect.top + windowTop < this.top) {
              this.top = rect.top + windowTop;
            }
            let highlight;
            if (i2 in this.children)
              highlight = this.children[i2];
            else {
              highlight = document.createElement("span");
              this.appendChild(highlight);
            }
            highlight.className = "TridactylFindHighlight";
            highlight.style.position = "absolute";
            highlight.style.top = `${rect.top + windowTop}px`;
            highlight.style.left = `${rect.left + windowLeft}px`;
            highlight.style.width = `${rect.right - rect.left}px`;
            highlight.style.height = `${rect.bottom - rect.top}px`;
            highlight.style.zIndex = "2147483645";
            highlight.style.pointerEvents = "none";
          }
        }
        getBoundingClientRect() {
          return this.range.getBoundingClientRect();
        }
        getClientRects() {
          return this.range.getClientRects();
        }
        unfocus() {
          for (const node of this.children) {
            ;
            node.style.background = `rgba(127,255,255,0.5)`;
          }
        }
        scrollIntoView(...options) {
          let option;
          if (options.length === 0 || options[0] === true) {
            option = { block: "start", inline: "nearest" };
          } else if (options[0] === false) {
            option = { block: "end", inline: "nearest" };
          } else
            option = options[0];
          const fakeNode = {
            nodeType: Node.ELEMENT_NODE,
            getBoundingClientRect: () => this.getBoundingClientRect(),
            parentElement: null
          };
          let parent = this.range.commonAncestorContainer;
          if (parent.nodeType !== Node.ELEMENT_NODE) {
            parent = parent.parentElement;
          }
          fakeNode.parentElement = parent;
          const actions = o4(fakeNode, option);
          for (const { el: element, top, left } of actions) {
            element.scrollTop = top;
            element.scrollLeft = left;
          }
        }
        focus() {
          if (!isVisible(this)) {
            this.scrollIntoView({ block: "center", inline: "center" });
          }
          const focusable = this.queryInRange("a,input,button,details");
          if (focusable)
            focusable.focus();
          for (const node of this.children) {
            const element = node;
            element.style.background = `rgba(255,127,255,0.5)`;
          }
        }
        queryInRange(selector) {
          const range4 = this.range;
          const rangeEndNode = range4.endContainer;
          const walker = document.createTreeWalker(
            document.documentElement,
            // eslint-disable-next-line no-bitwise
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            {
              acceptNode(node) {
                if (node.nodeType === Node.TEXT_NODE) {
                  if (node.isSameNode(rangeEndNode)) {
                    return NodeFilter.FILTER_ACCEPT;
                  }
                  return NodeFilter.FILTER_SKIP;
                }
                const element = node;
                if (element.matches(selector)) {
                  return NodeFilter.FILTER_ACCEPT;
                } else
                  return NodeFilter.FILTER_SKIP;
              }
            }
          );
          walker.currentNode = range4.startContainer;
          if (walker.parentNode())
            return walker.currentNode;
          if (range4.startContainer.isSameNode(rangeEndNode))
            return null;
          if (walker.nextNode() && !walker.currentNode.isSameNode(rangeEndNode)) {
            return walker.currentNode;
          }
          return null;
        }
      };
      customElements.define("find-highlight", FindHighlight, { extends: "span" });
      selected = 0;
    }
  });

  // src/content/toys.ts
  function jack_in() {
    const chinese = "\u7530\u7531\u7532\u7533\u7534\u7535\u7536\u7537\u7538\u7539\u753A\u753B\u753C\u753D\u753E\u753F\u7540\u7541\u7542\u7543\u7544\u7545\u7546\u7547\u7548\u7549\u754A\u754B\u754C\u754D\u754E\u754F\u7550\u7551".split(
      ""
    );
    const colour = "#0F0";
    rain(makeBlock(), chinese, colour);
  }
  function music() {
    const music2 = "\u{1D11E}\u{1D11F}\u{1D130}\u{1D160}\u{1D161}\u{1D162}\u{1D13D}".split("");
    const colour = "#ead115";
    rain(makeBlock(), music2, colour);
  }
  function no_mouse() {
    makeBlock();
  }
  function makeBlock() {
    const overlaydiv = document.createElement("div");
    overlaydiv.className = "_tridactyl_no_mouse_";
    overlaydiv.style.position = "fixed";
    overlaydiv.style.display = "block";
    overlaydiv.style.width = String(window.innerWidth);
    overlaydiv.style.height = String(document.documentElement.scrollHeight);
    overlaydiv.style.top = "0px";
    overlaydiv.style.bottom = "0px";
    overlaydiv.style.left = "0px";
    overlaydiv.style.right = "0px";
    overlaydiv.style.zIndex = "1000";
    overlaydiv.style.opacity = "0.5";
    overlaydiv.style.cursor = "none";
    document.body.appendChild(overlaydiv);
    return overlaydiv;
  }
  function drawable() {
    eraser = false;
    make_drawable(makeBlock());
  }
  function eraser_toggle() {
    eraser = !eraser;
  }
  function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
  }
  function redraw(context) {
    if (eraser) {
      context.globalCompositeOperation = "destination-out";
      context.lineWidth = 18;
    } else {
      context.globalCompositeOperation = "source-over";
      context.lineWidth = 3;
    }
    context.strokeStyle = "#000000";
    context.lineJoin = "miter";
    for (let i2 = 0; i2 < clickX.length; i2++) {
      context.beginPath();
      if (clickDrag[i2] && i2) {
        context.moveTo(clickX[i2 - 1], clickY[i2 - 1]);
      } else {
        context.moveTo(clickX[i2] - 1, clickY[i2]);
      }
      context.lineTo(clickX[i2], clickY[i2]);
      context.closePath();
      context.stroke();
    }
  }
  function handleDown(e2, context) {
    ink = true;
    addClick(e2.pageX, e2.pageY, false);
    redraw(context);
    e2.preventDefault();
    e2.stopPropagation();
  }
  function handleUp(e2) {
    ink = false;
    clickX.length = 0;
    clickY.length = 0;
    clickDrag.length = 0;
    e2.stopPropagation();
    e2.preventDefault();
  }
  function handleMove(e2, context) {
    if (ink) {
      addClick(e2.pageX, e2.pageY, true);
      redraw(context);
    }
    e2.preventDefault();
    e2.stopPropagation();
  }
  function make_drawable(overlaydiv) {
    overlaydiv.style.position = "absolute";
    overlaydiv.style.opacity = "0.8";
    const c = document.createElement("canvas");
    overlaydiv.appendChild(c);
    const context = c.getContext("2d");
    c.height = document.documentElement.scrollHeight;
    c.width = window.innerWidth * 0.98;
    c.style.touchAction = "none";
    c.addEventListener("pointerdown", (e2) => handleDown(e2, context));
    c.addEventListener("pointerup", handleUp);
    c.addEventListener("pointermove", (e2) => handleMove(e2, context));
  }
  function removeBlock() {
    Array.from(document.getElementsByClassName("_tridactyl_no_mouse_")).forEach(
      (el) => {
        if (typeof el.intid === "number") {
          clearInterval(el.intid);
        }
        el.remove();
      }
    );
  }
  function rain(overlaydiv, characters, colour, darkening = 0.05) {
    const c = document.createElement("canvas");
    overlaydiv.appendChild(c);
    const ctx = c.getContext("2d");
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    const font_size = 10;
    const columns = c.width / font_size;
    const drops = [];
    for (let x = 0; x < columns; x++)
      drops[x] = 1;
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, " + darkening + ")";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = colour;
      ctx.font = font_size + "px arial";
      for (let i2 = 0; i2 < drops.length; i2++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i2 * font_size, drops[i2] * font_size);
        if (drops[i2] * font_size > c.height && Math.random() > 0.975)
          drops[i2] = 0;
        drops[i2]++;
      }
    }
    overlaydiv.intid = setInterval(draw, 33);
  }
  var clickX, clickY, clickDrag, ink, eraser, snow;
  var init_toys = __esm({
    "src/content/toys.ts"() {
      "use strict";
      clickX = [];
      clickY = [];
      clickDrag = [];
      eraser = false;
      snow = () => rain(makeBlock(), ["\u2744"], "#FFF", 0.15);
    }
  });

  // node_modules/editor-adapter/index.js
  function computeSelector(element) {
    function uniqueSelector(e2) {
      if (e2.id && e2.id.match("^[a-zA-Z0-9_-]+$")) {
        const id2 = e2.tagName + `[id="${e2.id}"]`;
        if (document.querySelectorAll(id2).length === 1) {
          return id2;
        }
      }
      if (!e2.parentElement) {
        return "HTML";
      }
      const index2 = Array.from(e2.parentElement.children).filter((child) => child.tagName === e2.tagName).indexOf(e2) + 1;
      return `${uniqueSelector(e2.parentElement)} > ${e2.tagName}:nth-of-type(${index2})`;
    }
    return uniqueSelector(element);
  }
  function executeInPage(code) {
    return new Promise((resolve2, reject4) => {
      const script = document.createElement("script");
      const eventId = `${Math.random()}`;
      script.innerHTML = `(async (evId) => {
            try {
                let unwrap = x => x;
                let wrap = x => x;
                let result;
                result = await ${code};
                window.dispatchEvent(new CustomEvent(evId, {
                    detail: {
                        success: true,
                        result,
                    }
                }));
            } catch (e) {
                window.dispatchEvent(new CustomEvent(evId, {
                    detail: { success: false, reason: e },
                }));
            }
        })(${JSON.stringify(eventId)})`;
      window.addEventListener(eventId, ({ detail }) => {
        script.parentNode.removeChild(script);
        if (detail.success) {
          return resolve2(detail.result);
        }
        return reject4(detail.reason);
      }, { once: true });
      document.head.appendChild(script);
    });
  }
  function unwrap(x) {
    if (window.wrappedJSObject) {
      return x.wrappedJSObject;
    }
    return x;
  }
  function wrap(x) {
    if (window.XPCNativeWrapper) {
      return window.XPCNativeWrapper(x);
    }
    return x;
  }
  function getEditor(elem, options) {
    let editor3;
    let classes = [AceEditor, CodeMirrorEditor, MonacoEditor];
    if (options.codeMirror6Enabled) {
      classes.push(CodeMirror6Editor);
    }
    for (let clazz of classes) {
      if (clazz.matches(elem)) {
        editor3 = clazz;
        break;
      }
    }
    if (editor3 === void 0) {
      return new TextareaEditor(elem, options);
    }
    let ed = new editor3(elem, options);
    let result;
    if (window.wrappedJSObject) {
      result = new Proxy(ed, {
        get: (target, prop3) => (...args2) => {
          return target[prop3](computeSelector(target.getElement()), wrap, unwrap, ...args2);
        }
      });
    } else {
      result = new Proxy(ed, {
        get: (target, prop3) => {
          if (prop3 === "getElement") {
            return target[prop3];
          }
          return (...args2) => {
            return executeInPage(`(${target[prop3]})(${JSON.stringify(computeSelector(target.getElement()))}, x => x, x => x, ...${JSON.stringify(args2)})`);
          };
        }
      });
    }
    return result;
  }
  var GenericAbstractEditor, AceEditor, CodeMirror6Editor, CodeMirrorEditor, MonacoEditor, TextareaEditor;
  var init_editor_adapter = __esm({
    "node_modules/editor-adapter/index.js"() {
      GenericAbstractEditor = class {
        constructor(_e, _options) {
        }
        static matches(_) {
          throw new Error("Matches function not overriden");
        }
      };
      AceEditor = class extends GenericAbstractEditor {
        constructor(e2, _options) {
          super(e2, _options);
          this.getAce = (selec) => {
          };
          this.getContent = async (selector, wrap2, unwrap2) => {
            const elem = document.querySelector(selector);
            const ace = elem.aceEditor || unwrap2(window).ace.edit(elem);
            return wrap2(ace.getValue());
          };
          this.getCursor = async (selector, wrap2, unwrap2) => {
            let position;
            const elem = document.querySelector(selector);
            const ace = elem.aceEditor || unwrap2(window).ace.edit(elem);
            if (ace.getCursorPosition !== void 0) {
              position = ace.getCursorPosition();
            } else {
              position = ace.selection.cursor;
            }
            return [wrap2(position.row) + 1, wrap2(position.column)];
          };
          this.getElement = () => {
            return this.elem;
          };
          this.getLanguage = async (selector, wrap2, unwrap2) => {
            const elem = document.querySelector(selector);
            const ace = elem.aceEditor || unwrap2(window).ace.edit(elem);
            return wrap2(ace.session.$modeId).split("/").slice(-1)[0];
          };
          this.setContent = async (selector, wrap2, unwrap2, text) => {
            const elem = document.querySelector(selector);
            const ace = elem.aceEditor || unwrap2(window).ace.edit(elem);
            return wrap2(ace.setValue(text, 1));
          };
          this.setCursor = async (selector, wrap2, unwrap2, line, column) => {
            const elem = document.querySelector(selector);
            const ace = elem.aceEditor || unwrap2(window).ace.edit(elem);
            const selection = ace.getSelection();
            return wrap2(selection.moveCursorTo(line - 1, column, false));
          };
          this.elem = e2;
          let parent = this.elem.parentElement;
          while (AceEditor.matches(parent)) {
            this.elem = parent;
            parent = parent.parentElement;
          }
        }
        static matches(e2) {
          let parent = e2;
          for (let i2 = 0; i2 < 3; ++i2) {
            if (parent !== void 0 && parent !== null) {
              if (/ace_editor/gi.test(parent.className)) {
                return true;
              }
              parent = parent.parentElement;
            }
          }
          return false;
        }
      };
      CodeMirror6Editor = class extends GenericAbstractEditor {
        constructor(e2, options) {
          super(e2, options);
          this.getContent = async (selector, wrap2, unwrap2) => {
            const elem = document.querySelector(selector);
            return wrap2(unwrap2(elem).cmView.view.state.doc.toString());
          };
          this.getCursor = async (selector, wrap2, unwrap2) => {
            const elem = document.querySelector(selector);
            const position = unwrap2(elem).cmView.view.state.selection.main.head;
            return [wrap2(position.line), wrap2(position.ch)];
          };
          this.getElement = () => {
            return this.elem;
          };
          this.getLanguage = async (selector, wrap2, unwrap2) => {
            const elem = document.querySelector(selector);
            return wrap2(unwrap2(elem).dataset.language);
          };
          this.setContent = async (selector, wrap2, unwrap2, text) => {
            const elem = unwrap2(document.querySelector(selector));
            let length3 = elem.cmView.view.state.doc.length;
            return wrap2(elem.cmView.view.dispatch({ changes: { from: 0, to: length3, insert: text } }));
          };
          this.setCursor = async (selector, wrap2, unwrap2, line, column) => {
            const elem = unwrap2(document.querySelector(selector));
            return wrap2(elem.vmView.view.dispatch({
              selection: {
                anchor: elem.cmView.view.doc.line(line) + column
              }
            }));
          };
          this.elem = e2;
          let parent = this.elem.parentElement;
          while (CodeMirror6Editor.matches(parent)) {
            this.elem = parent;
            parent = parent.parentElement;
          }
        }
        static matches(e2) {
          let parent = e2;
          for (let i2 = 0; i2 < 3; ++i2) {
            if (parent !== void 0 && parent !== null) {
              if (/^(.* )?cm-content/gi.test(parent.className)) {
                return true;
              }
              parent = parent.parentElement;
            }
          }
          return false;
        }
      };
      CodeMirrorEditor = class extends GenericAbstractEditor {
        constructor(e2, options) {
          super(e2, options);
          this.getContent = async (selector, wrap2, unwrap2) => {
            const elem = document.querySelector(selector);
            return wrap2(unwrap2(elem).CodeMirror.getValue());
          };
          this.getCursor = async (selector, wrap2, unwrap2) => {
            const elem = document.querySelector(selector);
            const position = unwrap2(elem).CodeMirror.getCursor();
            return [wrap2(position.line) + 1, wrap2(position.ch)];
          };
          this.getElement = () => {
            return this.elem;
          };
          this.getLanguage = async (selector, wrap2, unwrap2) => {
            const elem = document.querySelector(selector);
            return wrap2(unwrap2(elem).CodeMirror.getMode().name);
          };
          this.setContent = async (selector, wrap2, unwrap2, text) => {
            const elem = document.querySelector(selector);
            return wrap2(unwrap2(elem).CodeMirror.setValue(text));
          };
          this.setCursor = async (selector, wrap2, unwrap2, line, column) => {
            const elem = document.querySelector(selector);
            return wrap2(unwrap2(elem).CodeMirror.setCursor({ line: line - 1, ch: column }));
          };
          this.elem = e2;
          let parent = this.elem.parentElement;
          while (CodeMirrorEditor.matches(parent)) {
            this.elem = parent;
            parent = parent.parentElement;
          }
        }
        static matches(e2) {
          let parent = e2;
          for (let i2 = 0; i2 < 3; ++i2) {
            if (parent !== void 0 && parent !== null) {
              if (/^(.* )?CodeMirror/gi.test(parent.className)) {
                return true;
              }
              parent = parent.parentElement;
            }
          }
          return false;
        }
      };
      MonacoEditor = class extends GenericAbstractEditor {
        constructor(e2, options) {
          super(e2, options);
          this.getContent = async (selector, wrap2, unwrap2) => {
            const elem = document.querySelector(selector);
            const uri = elem.getAttribute("data-uri");
            const model = unwrap2(window).monaco.editor.getModel(uri);
            return wrap2(model.getValue());
          };
          this.getCursor = async (selector, wrap2, unwrap2) => {
            return [1, 0];
          };
          this.getElement = () => {
            return this.elem;
          };
          this.getLanguage = async (selector, wrap2, unwrap2) => {
            const elem = document.querySelector(selector);
            const uri = elem.getAttribute("data-uri");
            const model = unwrap2(window).monaco.editor.getModel(uri);
            return wrap2(model.getModeId());
          };
          this.setContent = async (selector, wrap2, unwrap2, text) => {
            const elem = document.querySelector(selector);
            const uri = elem.getAttribute("data-uri");
            const model = unwrap2(window).monaco.editor.getModel(uri);
            return wrap2(model.setValue(text));
          };
          this.setCursor = async (_selector, _wrap, _unwrap, _line, _column) => {
            return void 0;
          };
          this.elem = e2;
          let parent = this.elem.parentElement;
          while (!(this.elem.className.match(/monaco-editor/gi) && this.elem.getAttribute("data-uri").match("file://|inmemory://|gitlab:"))) {
            this.elem = parent;
            parent = parent.parentElement;
          }
        }
        static matches(e2) {
          let parent = e2;
          for (let i2 = 0; i2 < 4; ++i2) {
            if (parent !== void 0 && parent !== null) {
              if (/monaco-editor/gi.test(parent.className)) {
                return true;
              }
              parent = parent.parentElement;
            }
          }
          return false;
        }
      };
      TextareaEditor = class {
        constructor(e2, options) {
          this.getContent = async () => {
            if (this.elem.value !== void 0) {
              return Promise.resolve(this.elem.value);
            }
            if (this.options.preferHTML) {
              return Promise.resolve(this.elem.innerHTML);
            } else {
              return Promise.resolve(this.elem.innerText);
            }
          };
          this.getCursor = async () => {
            return this.getContent().then((text) => {
              let line = 1;
              let column = 0;
              const selectionStart = this.elem.selectionStart !== void 0 ? this.elem.selectionStart : 0;
              for (let cursor = 0; cursor < selectionStart; ++cursor) {
                column += text.charCodeAt(cursor) < 127 ? 1 : 2;
                if (text[cursor] === "\n") {
                  line += 1;
                  column = 0;
                }
              }
              return [line, column];
            });
          };
          this.getElement = () => {
            return this.elem;
          };
          this.getLanguage = async () => {
            if (this.options.preferHTML) {
              return Promise.resolve("html");
            }
            return Promise.resolve(void 0);
          };
          this.setContent = async (text) => {
            if (this.elem.value !== void 0) {
              this.elem.value = text;
            } else {
              if (this.options.preferHTML) {
                this.elem.innerHTML = text;
              } else {
                this.elem.innerText = text;
              }
            }
            return Promise.resolve();
          };
          this.setCursor = async (line, column) => {
            return this.getContent().then((text) => {
              let character = 0;
              while (line > 1 && character < text.length) {
                if (text[character] === "\n") {
                  line -= 1;
                }
                character += 1;
              }
              while (column > 0 && character < text.length) {
                if (text[character] === "\n") {
                  break;
                }
                const code = text.charCodeAt(character);
                if (code <= 127) {
                  column -= 1;
                } else if (code <= 2047) {
                  column -= 2;
                } else if (code >= 55296 && code <= 57343) {
                  column -= 4;
                  character++;
                } else if (code < 65535) {
                  column -= 3;
                } else {
                  column -= 4;
                }
                character += 1;
              }
              if (this.elem.setSelectionRange !== void 0) {
                this.elem.setSelectionRange(character, character);
              }
              return void 0;
            });
          };
          this.options = options;
          this.elem = e2;
        }
        static matches(_) {
          return true;
        }
      };
    }
  });

  // node_modules/@mozilla/readability/Readability.js
  var require_Readability = __commonJS({
    "node_modules/@mozilla/readability/Readability.js"(exports, module) {
      function Readability2(doc, options) {
        if (options && options.documentElement) {
          doc = options;
          options = arguments[2];
        } else if (!doc || !doc.documentElement) {
          throw new Error("First argument to Readability constructor should be a document object.");
        }
        options = options || {};
        this._doc = doc;
        this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__;
        this._articleTitle = null;
        this._articleByline = null;
        this._articleDir = null;
        this._articleSiteName = null;
        this._attempts = [];
        this._debug = !!options.debug;
        this._maxElemsToParse = options.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE;
        this._nbTopCandidates = options.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES;
        this._charThreshold = options.charThreshold || this.DEFAULT_CHAR_THRESHOLD;
        this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(options.classesToPreserve || []);
        this._keepClasses = !!options.keepClasses;
        this._serializer = options.serializer || function(el) {
          return el.innerHTML;
        };
        this._disableJSONLD = !!options.disableJSONLD;
        this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY;
        if (this._debug) {
          let logNode = function(node) {
            if (node.nodeType == node.TEXT_NODE) {
              return `${node.nodeName} ("${node.textContent}")`;
            }
            let attrPairs = Array.from(node.attributes || [], function(attr) {
              return `${attr.name}="${attr.value}"`;
            }).join(" ");
            return `<${node.localName} ${attrPairs}>`;
          };
          this.log = function() {
            if (typeof dump !== "undefined") {
              var msg = Array.prototype.map.call(arguments, function(x) {
                return x && x.nodeName ? logNode(x) : x;
              }).join(" ");
              dump("Reader: (Readability) " + msg + "\n");
            } else if (typeof console !== "undefined") {
              let args2 = Array.from(arguments, (arg2) => {
                if (arg2 && arg2.nodeType == this.ELEMENT_NODE) {
                  return logNode(arg2);
                }
                return arg2;
              });
              args2.unshift("Reader: (Readability)");
              console.log.apply(console, args2);
            }
          };
        } else {
          this.log = function() {
          };
        }
      }
      Readability2.prototype = {
        FLAG_STRIP_UNLIKELYS: 1,
        FLAG_WEIGHT_CLASSES: 2,
        FLAG_CLEAN_CONDITIONALLY: 4,
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        ELEMENT_NODE: 1,
        TEXT_NODE: 3,
        // Max number of nodes supported by this parser. Default: 0 (no limit)
        DEFAULT_MAX_ELEMS_TO_PARSE: 0,
        // The number of top candidates to consider when analysing how
        // tight the competition is among candidates.
        DEFAULT_N_TOP_CANDIDATES: 5,
        // Element tags to score by default.
        DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),
        // The default number of chars an article must have in order to return a result
        DEFAULT_CHAR_THRESHOLD: 500,
        // All of the regular expressions in use within readability.
        // Defined up here so we don't instantiate them repeatedly in loops.
        REGEXPS: {
          // NOTE: These two regular expressions are duplicated in
          // Readability-readerable.js. Please keep both copies in sync.
          unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
          okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
          positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
          negative: /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
          extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
          byline: /byline|author|dateline|writtenby|p-author/i,
          replaceFonts: /<(\/?)font[^>]*>/gi,
          normalize: /\s{2,}/g,
          videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
          shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
          nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
          prevLink: /(prev|earl|old|new|<|«)/i,
          tokenize: /\W+/g,
          whitespace: /^\s*$/,
          hasContent: /\S$/,
          hashUrl: /^#.+/,
          srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
          b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
          // See: https://schema.org/Article
          jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/
        },
        UNLIKELY_ROLES: ["menu", "menubar", "complementary", "navigation", "alert", "alertdialog", "dialog"],
        DIV_TO_P_ELEMS: /* @__PURE__ */ new Set(["BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL"]),
        ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],
        PRESENTATIONAL_ATTRIBUTES: ["align", "background", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "hspace", "rules", "style", "valign", "vspace"],
        DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
        // The commented out elements qualify as phrasing content but tend to be
        // removed by readability when put into paragraphs, so we ignore them here.
        PHRASING_ELEMS: [
          // "CANVAS", "IFRAME", "SVG", "VIDEO",
          "ABBR",
          "AUDIO",
          "B",
          "BDO",
          "BR",
          "BUTTON",
          "CITE",
          "CODE",
          "DATA",
          "DATALIST",
          "DFN",
          "EM",
          "EMBED",
          "I",
          "IMG",
          "INPUT",
          "KBD",
          "LABEL",
          "MARK",
          "MATH",
          "METER",
          "NOSCRIPT",
          "OBJECT",
          "OUTPUT",
          "PROGRESS",
          "Q",
          "RUBY",
          "SAMP",
          "SCRIPT",
          "SELECT",
          "SMALL",
          "SPAN",
          "STRONG",
          "SUB",
          "SUP",
          "TEXTAREA",
          "TIME",
          "VAR",
          "WBR"
        ],
        // These are the classes that readability sets itself.
        CLASSES_TO_PRESERVE: ["page"],
        // These are the list of HTML entities that need to be escaped.
        HTML_ESCAPE_MAP: {
          "lt": "<",
          "gt": ">",
          "amp": "&",
          "quot": '"',
          "apos": "'"
        },
        /**
         * Run any post-process modifications to article content as necessary.
         *
         * @param Element
         * @return void
        **/
        _postProcessContent: function(articleContent) {
          this._fixRelativeUris(articleContent);
          this._simplifyNestedElements(articleContent);
          if (!this._keepClasses) {
            this._cleanClasses(articleContent);
          }
        },
        /**
         * Iterates over a NodeList, calls `filterFn` for each node and removes node
         * if function returned `true`.
         *
         * If function is not passed, removes all the nodes in node list.
         *
         * @param NodeList nodeList The nodes to operate on
         * @param Function filterFn the function to use as a filter
         * @return void
         */
        _removeNodes: function(nodeList, filterFn) {
          if (this._docJSDOMParser && nodeList._isLiveNodeList) {
            throw new Error("Do not pass live node lists to _removeNodes");
          }
          for (var i2 = nodeList.length - 1; i2 >= 0; i2--) {
            var node = nodeList[i2];
            var parentNode = node.parentNode;
            if (parentNode) {
              if (!filterFn || filterFn.call(this, node, i2, nodeList)) {
                parentNode.removeChild(node);
              }
            }
          }
        },
        /**
         * Iterates over a NodeList, and calls _setNodeTag for each node.
         *
         * @param NodeList nodeList The nodes to operate on
         * @param String newTagName the new tag name to use
         * @return void
         */
        _replaceNodeTags: function(nodeList, newTagName) {
          if (this._docJSDOMParser && nodeList._isLiveNodeList) {
            throw new Error("Do not pass live node lists to _replaceNodeTags");
          }
          for (const node of nodeList) {
            this._setNodeTag(node, newTagName);
          }
        },
        /**
         * Iterate over a NodeList, which doesn't natively fully implement the Array
         * interface.
         *
         * For convenience, the current object context is applied to the provided
         * iterate function.
         *
         * @param  NodeList nodeList The NodeList.
         * @param  Function fn       The iterate function.
         * @return void
         */
        _forEachNode: function(nodeList, fn) {
          Array.prototype.forEach.call(nodeList, fn, this);
        },
        /**
         * Iterate over a NodeList, and return the first node that passes
         * the supplied test function
         *
         * For convenience, the current object context is applied to the provided
         * test function.
         *
         * @param  NodeList nodeList The NodeList.
         * @param  Function fn       The test function.
         * @return void
         */
        _findNode: function(nodeList, fn) {
          return Array.prototype.find.call(nodeList, fn, this);
        },
        /**
         * Iterate over a NodeList, return true if any of the provided iterate
         * function calls returns true, false otherwise.
         *
         * For convenience, the current object context is applied to the
         * provided iterate function.
         *
         * @param  NodeList nodeList The NodeList.
         * @param  Function fn       The iterate function.
         * @return Boolean
         */
        _someNode: function(nodeList, fn) {
          return Array.prototype.some.call(nodeList, fn, this);
        },
        /**
         * Iterate over a NodeList, return true if all of the provided iterate
         * function calls return true, false otherwise.
         *
         * For convenience, the current object context is applied to the
         * provided iterate function.
         *
         * @param  NodeList nodeList The NodeList.
         * @param  Function fn       The iterate function.
         * @return Boolean
         */
        _everyNode: function(nodeList, fn) {
          return Array.prototype.every.call(nodeList, fn, this);
        },
        /**
         * Concat all nodelists passed as arguments.
         *
         * @return ...NodeList
         * @return Array
         */
        _concatNodeLists: function() {
          var slice3 = Array.prototype.slice;
          var args2 = slice3.call(arguments);
          var nodeLists = args2.map(function(list) {
            return slice3.call(list);
          });
          return Array.prototype.concat.apply([], nodeLists);
        },
        _getAllNodesWithTag: function(node, tagNames) {
          if (node.querySelectorAll) {
            return node.querySelectorAll(tagNames.join(","));
          }
          return [].concat.apply([], tagNames.map(function(tag) {
            var collection = node.getElementsByTagName(tag);
            return Array.isArray(collection) ? collection : Array.from(collection);
          }));
        },
        /**
         * Removes the class="" attribute from every element in the given
         * subtree, except those that match CLASSES_TO_PRESERVE and
         * the classesToPreserve array from the options object.
         *
         * @param Element
         * @return void
         */
        _cleanClasses: function(node) {
          var classesToPreserve = this._classesToPreserve;
          var className = (node.getAttribute("class") || "").split(/\s+/).filter(function(cls) {
            return classesToPreserve.indexOf(cls) != -1;
          }).join(" ");
          if (className) {
            node.setAttribute("class", className);
          } else {
            node.removeAttribute("class");
          }
          for (node = node.firstElementChild; node; node = node.nextElementSibling) {
            this._cleanClasses(node);
          }
        },
        /**
         * Converts each <a> and <img> uri in the given element to an absolute URI,
         * ignoring #ref URIs.
         *
         * @param Element
         * @return void
         */
        _fixRelativeUris: function(articleContent) {
          var baseURI = this._doc.baseURI;
          var documentURI = this._doc.documentURI;
          function toAbsoluteURI(uri) {
            if (baseURI == documentURI && uri.charAt(0) == "#") {
              return uri;
            }
            try {
              return new URL(uri, baseURI).href;
            } catch (ex) {
            }
            return uri;
          }
          var links = this._getAllNodesWithTag(articleContent, ["a"]);
          this._forEachNode(links, function(link) {
            var href = link.getAttribute("href");
            if (href) {
              if (href.indexOf("javascript:") === 0) {
                if (link.childNodes.length === 1 && link.childNodes[0].nodeType === this.TEXT_NODE) {
                  var text = this._doc.createTextNode(link.textContent);
                  link.parentNode.replaceChild(text, link);
                } else {
                  var container = this._doc.createElement("span");
                  while (link.childNodes.length > 0) {
                    container.appendChild(link.childNodes[0]);
                  }
                  link.parentNode.replaceChild(container, link);
                }
              } else {
                link.setAttribute("href", toAbsoluteURI(href));
              }
            }
          });
          var medias = this._getAllNodesWithTag(articleContent, [
            "img",
            "picture",
            "figure",
            "video",
            "audio",
            "source"
          ]);
          this._forEachNode(medias, function(media) {
            var src = media.getAttribute("src");
            var poster = media.getAttribute("poster");
            var srcset = media.getAttribute("srcset");
            if (src) {
              media.setAttribute("src", toAbsoluteURI(src));
            }
            if (poster) {
              media.setAttribute("poster", toAbsoluteURI(poster));
            }
            if (srcset) {
              var newSrcset = srcset.replace(this.REGEXPS.srcsetUrl, function(_, p1, p2, p3) {
                return toAbsoluteURI(p1) + (p2 || "") + p3;
              });
              media.setAttribute("srcset", newSrcset);
            }
          });
        },
        _simplifyNestedElements: function(articleContent) {
          var node = articleContent;
          while (node) {
            if (node.parentNode && ["DIV", "SECTION"].includes(node.tagName) && !(node.id && node.id.startsWith("readability"))) {
              if (this._isElementWithoutContent(node)) {
                node = this._removeAndGetNext(node);
                continue;
              } else if (this._hasSingleTagInsideElement(node, "DIV") || this._hasSingleTagInsideElement(node, "SECTION")) {
                var child = node.children[0];
                for (var i2 = 0; i2 < node.attributes.length; i2++) {
                  child.setAttribute(node.attributes[i2].name, node.attributes[i2].value);
                }
                node.parentNode.replaceChild(child, node);
                node = child;
                continue;
              }
            }
            node = this._getNextNode(node);
          }
        },
        /**
         * Get the article title as an H1.
         *
         * @return string
         **/
        _getArticleTitle: function() {
          var doc = this._doc;
          var curTitle = "";
          var origTitle = "";
          try {
            curTitle = origTitle = doc.title.trim();
            if (typeof curTitle !== "string")
              curTitle = origTitle = this._getInnerText(doc.getElementsByTagName("title")[0]);
          } catch (e2) {
          }
          var titleHadHierarchicalSeparators = false;
          function wordCount(str2) {
            return str2.split(/\s+/).length;
          }
          if (/ [\|\-\\\/>»] /.test(curTitle)) {
            titleHadHierarchicalSeparators = / [\\\/>»] /.test(curTitle);
            curTitle = origTitle.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1");
            if (wordCount(curTitle) < 3)
              curTitle = origTitle.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1");
          } else if (curTitle.indexOf(": ") !== -1) {
            var headings = this._concatNodeLists(
              doc.getElementsByTagName("h1"),
              doc.getElementsByTagName("h2")
            );
            var trimmedTitle = curTitle.trim();
            var match3 = this._someNode(headings, function(heading) {
              return heading.textContent.trim() === trimmedTitle;
            });
            if (!match3) {
              curTitle = origTitle.substring(origTitle.lastIndexOf(":") + 1);
              if (wordCount(curTitle) < 3) {
                curTitle = origTitle.substring(origTitle.indexOf(":") + 1);
              } else if (wordCount(origTitle.substr(0, origTitle.indexOf(":"))) > 5) {
                curTitle = origTitle;
              }
            }
          } else if (curTitle.length > 150 || curTitle.length < 15) {
            var hOnes = doc.getElementsByTagName("h1");
            if (hOnes.length === 1)
              curTitle = this._getInnerText(hOnes[0]);
          }
          curTitle = curTitle.trim().replace(this.REGEXPS.normalize, " ");
          var curTitleWordCount = wordCount(curTitle);
          if (curTitleWordCount <= 4 && (!titleHadHierarchicalSeparators || curTitleWordCount != wordCount(origTitle.replace(/[\|\-\\\/>»]+/g, "")) - 1)) {
            curTitle = origTitle;
          }
          return curTitle;
        },
        /**
         * Prepare the HTML document for readability to scrape it.
         * This includes things like stripping javascript, CSS, and handling terrible markup.
         *
         * @return void
         **/
        _prepDocument: function() {
          var doc = this._doc;
          this._removeNodes(this._getAllNodesWithTag(doc, ["style"]));
          if (doc.body) {
            this._replaceBrs(doc.body);
          }
          this._replaceNodeTags(this._getAllNodesWithTag(doc, ["font"]), "SPAN");
        },
        /**
         * Finds the next node, starting from the given node, and ignoring
         * whitespace in between. If the given node is an element, the same node is
         * returned.
         */
        _nextNode: function(node) {
          var next = node;
          while (next && next.nodeType != this.ELEMENT_NODE && this.REGEXPS.whitespace.test(next.textContent)) {
            next = next.nextSibling;
          }
          return next;
        },
        /**
         * Replaces 2 or more successive <br> elements with a single <p>.
         * Whitespace between <br> elements are ignored. For example:
         *   <div>foo<br>bar<br> <br><br>abc</div>
         * will become:
         *   <div>foo<br>bar<p>abc</p></div>
         */
        _replaceBrs: function(elem) {
          this._forEachNode(this._getAllNodesWithTag(elem, ["br"]), function(br) {
            var next = br.nextSibling;
            var replaced = false;
            while ((next = this._nextNode(next)) && next.tagName == "BR") {
              replaced = true;
              var brSibling = next.nextSibling;
              next.parentNode.removeChild(next);
              next = brSibling;
            }
            if (replaced) {
              var p = this._doc.createElement("p");
              br.parentNode.replaceChild(p, br);
              next = p.nextSibling;
              while (next) {
                if (next.tagName == "BR") {
                  var nextElem = this._nextNode(next.nextSibling);
                  if (nextElem && nextElem.tagName == "BR")
                    break;
                }
                if (!this._isPhrasingContent(next))
                  break;
                var sibling = next.nextSibling;
                p.appendChild(next);
                next = sibling;
              }
              while (p.lastChild && this._isWhitespace(p.lastChild)) {
                p.removeChild(p.lastChild);
              }
              if (p.parentNode.tagName === "P")
                this._setNodeTag(p.parentNode, "DIV");
            }
          });
        },
        _setNodeTag: function(node, tag) {
          this.log("_setNodeTag", node, tag);
          if (this._docJSDOMParser) {
            node.localName = tag.toLowerCase();
            node.tagName = tag.toUpperCase();
            return node;
          }
          var replacement = node.ownerDocument.createElement(tag);
          while (node.firstChild) {
            replacement.appendChild(node.firstChild);
          }
          node.parentNode.replaceChild(replacement, node);
          if (node.readability)
            replacement.readability = node.readability;
          for (var i2 = 0; i2 < node.attributes.length; i2++) {
            try {
              replacement.setAttribute(node.attributes[i2].name, node.attributes[i2].value);
            } catch (ex) {
            }
          }
          return replacement;
        },
        /**
         * Prepare the article node for display. Clean out any inline styles,
         * iframes, forms, strip extraneous <p> tags, etc.
         *
         * @param Element
         * @return void
         **/
        _prepArticle: function(articleContent) {
          this._cleanStyles(articleContent);
          this._markDataTables(articleContent);
          this._fixLazyImages(articleContent);
          this._cleanConditionally(articleContent, "form");
          this._cleanConditionally(articleContent, "fieldset");
          this._clean(articleContent, "object");
          this._clean(articleContent, "embed");
          this._clean(articleContent, "footer");
          this._clean(articleContent, "link");
          this._clean(articleContent, "aside");
          var shareElementThreshold = this.DEFAULT_CHAR_THRESHOLD;
          this._forEachNode(articleContent.children, function(topCandidate) {
            this._cleanMatchedNodes(topCandidate, function(node, matchString) {
              return this.REGEXPS.shareElements.test(matchString) && node.textContent.length < shareElementThreshold;
            });
          });
          this._clean(articleContent, "iframe");
          this._clean(articleContent, "input");
          this._clean(articleContent, "textarea");
          this._clean(articleContent, "select");
          this._clean(articleContent, "button");
          this._cleanHeaders(articleContent);
          this._cleanConditionally(articleContent, "table");
          this._cleanConditionally(articleContent, "ul");
          this._cleanConditionally(articleContent, "div");
          this._replaceNodeTags(this._getAllNodesWithTag(articleContent, ["h1"]), "h2");
          this._removeNodes(this._getAllNodesWithTag(articleContent, ["p"]), function(paragraph) {
            var imgCount = paragraph.getElementsByTagName("img").length;
            var embedCount = paragraph.getElementsByTagName("embed").length;
            var objectCount = paragraph.getElementsByTagName("object").length;
            var iframeCount = paragraph.getElementsByTagName("iframe").length;
            var totalCount = imgCount + embedCount + objectCount + iframeCount;
            return totalCount === 0 && !this._getInnerText(paragraph, false);
          });
          this._forEachNode(this._getAllNodesWithTag(articleContent, ["br"]), function(br) {
            var next = this._nextNode(br.nextSibling);
            if (next && next.tagName == "P")
              br.parentNode.removeChild(br);
          });
          this._forEachNode(this._getAllNodesWithTag(articleContent, ["table"]), function(table) {
            var tbody = this._hasSingleTagInsideElement(table, "TBODY") ? table.firstElementChild : table;
            if (this._hasSingleTagInsideElement(tbody, "TR")) {
              var row = tbody.firstElementChild;
              if (this._hasSingleTagInsideElement(row, "TD")) {
                var cell = row.firstElementChild;
                cell = this._setNodeTag(cell, this._everyNode(cell.childNodes, this._isPhrasingContent) ? "P" : "DIV");
                table.parentNode.replaceChild(cell, table);
              }
            }
          });
        },
        /**
         * Initialize a node with the readability object. Also checks the
         * className/id for special names to add to its score.
         *
         * @param Element
         * @return void
        **/
        _initializeNode: function(node) {
          node.readability = { "contentScore": 0 };
          switch (node.tagName) {
            case "DIV":
              node.readability.contentScore += 5;
              break;
            case "PRE":
            case "TD":
            case "BLOCKQUOTE":
              node.readability.contentScore += 3;
              break;
            case "ADDRESS":
            case "OL":
            case "UL":
            case "DL":
            case "DD":
            case "DT":
            case "LI":
            case "FORM":
              node.readability.contentScore -= 3;
              break;
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
            case "TH":
              node.readability.contentScore -= 5;
              break;
          }
          node.readability.contentScore += this._getClassWeight(node);
        },
        _removeAndGetNext: function(node) {
          var nextNode = this._getNextNode(node, true);
          node.parentNode.removeChild(node);
          return nextNode;
        },
        /**
         * Traverse the DOM from node to node, starting at the node passed in.
         * Pass true for the second parameter to indicate this node itself
         * (and its kids) are going away, and we want the next node over.
         *
         * Calling this in a loop will traverse the DOM depth-first.
         */
        _getNextNode: function(node, ignoreSelfAndKids) {
          if (!ignoreSelfAndKids && node.firstElementChild) {
            return node.firstElementChild;
          }
          if (node.nextElementSibling) {
            return node.nextElementSibling;
          }
          do {
            node = node.parentNode;
          } while (node && !node.nextElementSibling);
          return node && node.nextElementSibling;
        },
        // compares second text to first one
        // 1 = same text, 0 = completely different text
        // works the way that it splits both texts into words and then finds words that are unique in second text
        // the result is given by the lower length of unique parts
        _textSimilarity: function(textA, textB) {
          var tokensA = textA.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
          var tokensB = textB.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
          if (!tokensA.length || !tokensB.length) {
            return 0;
          }
          var uniqTokensB = tokensB.filter((token) => !tokensA.includes(token));
          var distanceB = uniqTokensB.join(" ").length / tokensB.join(" ").length;
          return 1 - distanceB;
        },
        _checkByline: function(node, matchString) {
          if (this._articleByline) {
            return false;
          }
          if (node.getAttribute !== void 0) {
            var rel = node.getAttribute("rel");
            var itemprop = node.getAttribute("itemprop");
          }
          if ((rel === "author" || itemprop && itemprop.indexOf("author") !== -1 || this.REGEXPS.byline.test(matchString)) && this._isValidByline(node.textContent)) {
            this._articleByline = node.textContent.trim();
            return true;
          }
          return false;
        },
        _getNodeAncestors: function(node, maxDepth) {
          maxDepth = maxDepth || 0;
          var i2 = 0, ancestors = [];
          while (node.parentNode) {
            ancestors.push(node.parentNode);
            if (maxDepth && ++i2 === maxDepth)
              break;
            node = node.parentNode;
          }
          return ancestors;
        },
        /***
         * grabArticle - Using a variety of metrics (content score, classname, element types), find the content that is
         *         most likely to be the stuff a user wants to read. Then return it wrapped up in a div.
         *
         * @param page a document to run upon. Needs to be a full document, complete with body.
         * @return Element
        **/
        _grabArticle: function(page) {
          this.log("**** grabArticle ****");
          var doc = this._doc;
          var isPaging = page !== null;
          page = page ? page : this._doc.body;
          if (!page) {
            this.log("No body found in document. Abort.");
            return null;
          }
          var pageCacheHtml = page.innerHTML;
          while (true) {
            this.log("Starting grabArticle loop");
            var stripUnlikelyCandidates = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS);
            var elementsToScore = [];
            var node = this._doc.documentElement;
            let shouldRemoveTitleHeader = true;
            while (node) {
              var matchString = node.className + " " + node.id;
              if (!this._isProbablyVisible(node)) {
                this.log("Removing hidden node - " + matchString);
                node = this._removeAndGetNext(node);
                continue;
              }
              if (this._checkByline(node, matchString)) {
                node = this._removeAndGetNext(node);
                continue;
              }
              if (shouldRemoveTitleHeader && this._headerDuplicatesTitle(node)) {
                this.log("Removing header: ", node.textContent.trim(), this._articleTitle.trim());
                shouldRemoveTitleHeader = false;
                node = this._removeAndGetNext(node);
                continue;
              }
              if (stripUnlikelyCandidates) {
                if (this.REGEXPS.unlikelyCandidates.test(matchString) && !this.REGEXPS.okMaybeItsACandidate.test(matchString) && !this._hasAncestorTag(node, "table") && !this._hasAncestorTag(node, "code") && node.tagName !== "BODY" && node.tagName !== "A") {
                  this.log("Removing unlikely candidate - " + matchString);
                  node = this._removeAndGetNext(node);
                  continue;
                }
                if (this.UNLIKELY_ROLES.includes(node.getAttribute("role"))) {
                  this.log("Removing content with role " + node.getAttribute("role") + " - " + matchString);
                  node = this._removeAndGetNext(node);
                  continue;
                }
              }
              if ((node.tagName === "DIV" || node.tagName === "SECTION" || node.tagName === "HEADER" || node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3" || node.tagName === "H4" || node.tagName === "H5" || node.tagName === "H6") && this._isElementWithoutContent(node)) {
                node = this._removeAndGetNext(node);
                continue;
              }
              if (this.DEFAULT_TAGS_TO_SCORE.indexOf(node.tagName) !== -1) {
                elementsToScore.push(node);
              }
              if (node.tagName === "DIV") {
                var p = null;
                var childNode = node.firstChild;
                while (childNode) {
                  var nextSibling = childNode.nextSibling;
                  if (this._isPhrasingContent(childNode)) {
                    if (p !== null) {
                      p.appendChild(childNode);
                    } else if (!this._isWhitespace(childNode)) {
                      p = doc.createElement("p");
                      node.replaceChild(p, childNode);
                      p.appendChild(childNode);
                    }
                  } else if (p !== null) {
                    while (p.lastChild && this._isWhitespace(p.lastChild)) {
                      p.removeChild(p.lastChild);
                    }
                    p = null;
                  }
                  childNode = nextSibling;
                }
                if (this._hasSingleTagInsideElement(node, "P") && this._getLinkDensity(node) < 0.25) {
                  var newNode = node.children[0];
                  node.parentNode.replaceChild(newNode, node);
                  node = newNode;
                  elementsToScore.push(node);
                } else if (!this._hasChildBlockElement(node)) {
                  node = this._setNodeTag(node, "P");
                  elementsToScore.push(node);
                }
              }
              node = this._getNextNode(node);
            }
            var candidates = [];
            this._forEachNode(elementsToScore, function(elementToScore) {
              if (!elementToScore.parentNode || typeof elementToScore.parentNode.tagName === "undefined")
                return;
              var innerText = this._getInnerText(elementToScore);
              if (innerText.length < 25)
                return;
              var ancestors2 = this._getNodeAncestors(elementToScore, 5);
              if (ancestors2.length === 0)
                return;
              var contentScore = 0;
              contentScore += 1;
              contentScore += innerText.split(",").length;
              contentScore += Math.min(Math.floor(innerText.length / 100), 3);
              this._forEachNode(ancestors2, function(ancestor, level) {
                if (!ancestor.tagName || !ancestor.parentNode || typeof ancestor.parentNode.tagName === "undefined")
                  return;
                if (typeof ancestor.readability === "undefined") {
                  this._initializeNode(ancestor);
                  candidates.push(ancestor);
                }
                if (level === 0)
                  var scoreDivider = 1;
                else if (level === 1)
                  scoreDivider = 2;
                else
                  scoreDivider = level * 3;
                ancestor.readability.contentScore += contentScore / scoreDivider;
              });
            });
            var topCandidates = [];
            for (var c = 0, cl = candidates.length; c < cl; c += 1) {
              var candidate = candidates[c];
              var candidateScore = candidate.readability.contentScore * (1 - this._getLinkDensity(candidate));
              candidate.readability.contentScore = candidateScore;
              this.log("Candidate:", candidate, "with score " + candidateScore);
              for (var t2 = 0; t2 < this._nbTopCandidates; t2++) {
                var aTopCandidate = topCandidates[t2];
                if (!aTopCandidate || candidateScore > aTopCandidate.readability.contentScore) {
                  topCandidates.splice(t2, 0, candidate);
                  if (topCandidates.length > this._nbTopCandidates)
                    topCandidates.pop();
                  break;
                }
              }
            }
            var topCandidate = topCandidates[0] || null;
            var neededToCreateTopCandidate = false;
            var parentOfTopCandidate;
            if (topCandidate === null || topCandidate.tagName === "BODY") {
              topCandidate = doc.createElement("DIV");
              neededToCreateTopCandidate = true;
              var kids = page.childNodes;
              while (kids.length) {
                this.log("Moving child out:", kids[0]);
                topCandidate.appendChild(kids[0]);
              }
              page.appendChild(topCandidate);
              this._initializeNode(topCandidate);
            } else if (topCandidate) {
              var alternativeCandidateAncestors = [];
              for (var i2 = 1; i2 < topCandidates.length; i2++) {
                if (topCandidates[i2].readability.contentScore / topCandidate.readability.contentScore >= 0.75) {
                  alternativeCandidateAncestors.push(this._getNodeAncestors(topCandidates[i2]));
                }
              }
              var MINIMUM_TOPCANDIDATES = 3;
              if (alternativeCandidateAncestors.length >= MINIMUM_TOPCANDIDATES) {
                parentOfTopCandidate = topCandidate.parentNode;
                while (parentOfTopCandidate.tagName !== "BODY") {
                  var listsContainingThisAncestor = 0;
                  for (var ancestorIndex = 0; ancestorIndex < alternativeCandidateAncestors.length && listsContainingThisAncestor < MINIMUM_TOPCANDIDATES; ancestorIndex++) {
                    listsContainingThisAncestor += Number(alternativeCandidateAncestors[ancestorIndex].includes(parentOfTopCandidate));
                  }
                  if (listsContainingThisAncestor >= MINIMUM_TOPCANDIDATES) {
                    topCandidate = parentOfTopCandidate;
                    break;
                  }
                  parentOfTopCandidate = parentOfTopCandidate.parentNode;
                }
              }
              if (!topCandidate.readability) {
                this._initializeNode(topCandidate);
              }
              parentOfTopCandidate = topCandidate.parentNode;
              var lastScore = topCandidate.readability.contentScore;
              var scoreThreshold = lastScore / 3;
              while (parentOfTopCandidate.tagName !== "BODY") {
                if (!parentOfTopCandidate.readability) {
                  parentOfTopCandidate = parentOfTopCandidate.parentNode;
                  continue;
                }
                var parentScore = parentOfTopCandidate.readability.contentScore;
                if (parentScore < scoreThreshold)
                  break;
                if (parentScore > lastScore) {
                  topCandidate = parentOfTopCandidate;
                  break;
                }
                lastScore = parentOfTopCandidate.readability.contentScore;
                parentOfTopCandidate = parentOfTopCandidate.parentNode;
              }
              parentOfTopCandidate = topCandidate.parentNode;
              while (parentOfTopCandidate.tagName != "BODY" && parentOfTopCandidate.children.length == 1) {
                topCandidate = parentOfTopCandidate;
                parentOfTopCandidate = topCandidate.parentNode;
              }
              if (!topCandidate.readability) {
                this._initializeNode(topCandidate);
              }
            }
            var articleContent = doc.createElement("DIV");
            if (isPaging)
              articleContent.id = "readability-content";
            var siblingScoreThreshold = Math.max(10, topCandidate.readability.contentScore * 0.2);
            parentOfTopCandidate = topCandidate.parentNode;
            var siblings = parentOfTopCandidate.children;
            for (var s = 0, sl = siblings.length; s < sl; s++) {
              var sibling = siblings[s];
              var append3 = false;
              this.log("Looking at sibling node:", sibling, sibling.readability ? "with score " + sibling.readability.contentScore : "");
              this.log("Sibling has score", sibling.readability ? sibling.readability.contentScore : "Unknown");
              if (sibling === topCandidate) {
                append3 = true;
              } else {
                var contentBonus = 0;
                if (sibling.className === topCandidate.className && topCandidate.className !== "")
                  contentBonus += topCandidate.readability.contentScore * 0.2;
                if (sibling.readability && sibling.readability.contentScore + contentBonus >= siblingScoreThreshold) {
                  append3 = true;
                } else if (sibling.nodeName === "P") {
                  var linkDensity = this._getLinkDensity(sibling);
                  var nodeContent = this._getInnerText(sibling);
                  var nodeLength = nodeContent.length;
                  if (nodeLength > 80 && linkDensity < 0.25) {
                    append3 = true;
                  } else if (nodeLength < 80 && nodeLength > 0 && linkDensity === 0 && nodeContent.search(/\.( |$)/) !== -1) {
                    append3 = true;
                  }
                }
              }
              if (append3) {
                this.log("Appending node:", sibling);
                if (this.ALTER_TO_DIV_EXCEPTIONS.indexOf(sibling.nodeName) === -1) {
                  this.log("Altering sibling:", sibling, "to div.");
                  sibling = this._setNodeTag(sibling, "DIV");
                }
                articleContent.appendChild(sibling);
                s -= 1;
                sl -= 1;
              }
            }
            if (this._debug)
              this.log("Article content pre-prep: " + articleContent.innerHTML);
            this._prepArticle(articleContent);
            if (this._debug)
              this.log("Article content post-prep: " + articleContent.innerHTML);
            if (neededToCreateTopCandidate) {
              topCandidate.id = "readability-page-1";
              topCandidate.className = "page";
            } else {
              var div = doc.createElement("DIV");
              div.id = "readability-page-1";
              div.className = "page";
              var children = articleContent.childNodes;
              while (children.length) {
                div.appendChild(children[0]);
              }
              articleContent.appendChild(div);
            }
            if (this._debug)
              this.log("Article content after paging: " + articleContent.innerHTML);
            var parseSuccessful = true;
            var textLength = this._getInnerText(articleContent, true).length;
            if (textLength < this._charThreshold) {
              parseSuccessful = false;
              page.innerHTML = pageCacheHtml;
              if (this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) {
                this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
                this._attempts.push({ articleContent, textLength });
              } else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) {
                this._removeFlag(this.FLAG_WEIGHT_CLASSES);
                this._attempts.push({ articleContent, textLength });
              } else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
                this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
                this._attempts.push({ articleContent, textLength });
              } else {
                this._attempts.push({ articleContent, textLength });
                this._attempts.sort(function(a, b) {
                  return b.textLength - a.textLength;
                });
                if (!this._attempts[0].textLength) {
                  return null;
                }
                articleContent = this._attempts[0].articleContent;
                parseSuccessful = true;
              }
            }
            if (parseSuccessful) {
              var ancestors = [parentOfTopCandidate, topCandidate].concat(this._getNodeAncestors(parentOfTopCandidate));
              this._someNode(ancestors, function(ancestor) {
                if (!ancestor.tagName)
                  return false;
                var articleDir = ancestor.getAttribute("dir");
                if (articleDir) {
                  this._articleDir = articleDir;
                  return true;
                }
                return false;
              });
              return articleContent;
            }
          }
        },
        /**
         * Check whether the input string could be a byline.
         * This verifies that the input is a string, and that the length
         * is less than 100 chars.
         *
         * @param possibleByline {string} - a string to check whether its a byline.
         * @return Boolean - whether the input string is a byline.
         */
        _isValidByline: function(byline) {
          if (typeof byline == "string" || byline instanceof String) {
            byline = byline.trim();
            return byline.length > 0 && byline.length < 100;
          }
          return false;
        },
        /**
         * Converts some of the common HTML entities in string to their corresponding characters.
         *
         * @param str {string} - a string to unescape.
         * @return string without HTML entity.
         */
        _unescapeHtmlEntities: function(str2) {
          if (!str2) {
            return str2;
          }
          var htmlEscapeMap = this.HTML_ESCAPE_MAP;
          return str2.replace(/&(quot|amp|apos|lt|gt);/g, function(_, tag) {
            return htmlEscapeMap[tag];
          }).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, function(_, hex, numStr) {
            var num = parseInt(hex || numStr, hex ? 16 : 10);
            return String.fromCharCode(num);
          });
        },
        /**
         * Try to extract metadata from JSON-LD object.
         * For now, only Schema.org objects of type Article or its subtypes are supported.
         * @return Object with any metadata that could be extracted (possibly none)
         */
        _getJSONLD: function(doc) {
          var scripts = this._getAllNodesWithTag(doc, ["script"]);
          var jsonLdElement = this._findNode(scripts, function(el) {
            return el.getAttribute("type") === "application/ld+json";
          });
          if (jsonLdElement) {
            try {
              var content = jsonLdElement.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, "");
              var parsed = JSON.parse(content);
              var metadata = {};
              if (!parsed["@context"] || !parsed["@context"].match(/^https?\:\/\/schema\.org$/)) {
                return metadata;
              }
              if (!parsed["@type"] && Array.isArray(parsed["@graph"])) {
                parsed = parsed["@graph"].find(function(it) {
                  return (it["@type"] || "").match(
                    this.REGEXPS.jsonLdArticleTypes
                  );
                });
              }
              if (!parsed || !parsed["@type"] || !parsed["@type"].match(this.REGEXPS.jsonLdArticleTypes)) {
                return metadata;
              }
              if (typeof parsed.name === "string") {
                metadata.title = parsed.name.trim();
              } else if (typeof parsed.headline === "string") {
                metadata.title = parsed.headline.trim();
              }
              if (parsed.author) {
                if (typeof parsed.author.name === "string") {
                  metadata.byline = parsed.author.name.trim();
                } else if (Array.isArray(parsed.author) && parsed.author[0] && typeof parsed.author[0].name === "string") {
                  metadata.byline = parsed.author.filter(function(author) {
                    return author && typeof author.name === "string";
                  }).map(function(author) {
                    return author.name.trim();
                  }).join(", ");
                }
              }
              if (typeof parsed.description === "string") {
                metadata.excerpt = parsed.description.trim();
              }
              if (parsed.publisher && typeof parsed.publisher.name === "string") {
                metadata.siteName = parsed.publisher.name.trim();
              }
              return metadata;
            } catch (err) {
              this.log(err.message);
            }
          }
          return {};
        },
        /**
         * Attempts to get excerpt and byline metadata for the article.
         *
         * @param {Object} jsonld — object containing any metadata that
         * could be extracted from JSON-LD object.
         *
         * @return Object with optional "excerpt" and "byline" properties
         */
        _getArticleMetadata: function(jsonld) {
          var metadata = {};
          var values3 = {};
          var metaElements = this._doc.getElementsByTagName("meta");
          var propertyPattern = /\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi;
          var namePattern = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;
          this._forEachNode(metaElements, function(element) {
            var elementName = element.getAttribute("name");
            var elementProperty = element.getAttribute("property");
            var content = element.getAttribute("content");
            if (!content) {
              return;
            }
            var matches = null;
            var name = null;
            if (elementProperty) {
              matches = elementProperty.match(propertyPattern);
              if (matches) {
                name = matches[0].toLowerCase().replace(/\s/g, "");
                values3[name] = content.trim();
              }
            }
            if (!matches && elementName && namePattern.test(elementName)) {
              name = elementName;
              if (content) {
                name = name.toLowerCase().replace(/\s/g, "").replace(/\./g, ":");
                values3[name] = content.trim();
              }
            }
          });
          metadata.title = jsonld.title || values3["dc:title"] || values3["dcterm:title"] || values3["og:title"] || values3["weibo:article:title"] || values3["weibo:webpage:title"] || values3["title"] || values3["twitter:title"];
          if (!metadata.title) {
            metadata.title = this._getArticleTitle();
          }
          metadata.byline = jsonld.byline || values3["dc:creator"] || values3["dcterm:creator"] || values3["author"];
          metadata.excerpt = jsonld.excerpt || values3["dc:description"] || values3["dcterm:description"] || values3["og:description"] || values3["weibo:article:description"] || values3["weibo:webpage:description"] || values3["description"] || values3["twitter:description"];
          metadata.siteName = jsonld.siteName || values3["og:site_name"];
          metadata.title = this._unescapeHtmlEntities(metadata.title);
          metadata.byline = this._unescapeHtmlEntities(metadata.byline);
          metadata.excerpt = this._unescapeHtmlEntities(metadata.excerpt);
          metadata.siteName = this._unescapeHtmlEntities(metadata.siteName);
          return metadata;
        },
        /**
         * Check if node is image, or if node contains exactly only one image
         * whether as a direct child or as its descendants.
         *
         * @param Element
        **/
        _isSingleImage: function(node) {
          if (node.tagName === "IMG") {
            return true;
          }
          if (node.children.length !== 1 || node.textContent.trim() !== "") {
            return false;
          }
          return this._isSingleImage(node.children[0]);
        },
        /**
         * Find all <noscript> that are located after <img> nodes, and which contain only one
         * <img> element. Replace the first image with the image from inside the <noscript> tag,
         * and remove the <noscript> tag. This improves the quality of the images we use on
         * some sites (e.g. Medium).
         *
         * @param Element
        **/
        _unwrapNoscriptImages: function(doc) {
          var imgs = Array.from(doc.getElementsByTagName("img"));
          this._forEachNode(imgs, function(img) {
            for (var i2 = 0; i2 < img.attributes.length; i2++) {
              var attr = img.attributes[i2];
              switch (attr.name) {
                case "src":
                case "srcset":
                case "data-src":
                case "data-srcset":
                  return;
              }
              if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                return;
              }
            }
            img.parentNode.removeChild(img);
          });
          var noscripts = Array.from(doc.getElementsByTagName("noscript"));
          this._forEachNode(noscripts, function(noscript) {
            var tmp = doc.createElement("div");
            tmp.innerHTML = noscript.innerHTML;
            if (!this._isSingleImage(tmp)) {
              return;
            }
            var prevElement = noscript.previousElementSibling;
            if (prevElement && this._isSingleImage(prevElement)) {
              var prevImg = prevElement;
              if (prevImg.tagName !== "IMG") {
                prevImg = prevElement.getElementsByTagName("img")[0];
              }
              var newImg = tmp.getElementsByTagName("img")[0];
              for (var i2 = 0; i2 < prevImg.attributes.length; i2++) {
                var attr = prevImg.attributes[i2];
                if (attr.value === "") {
                  continue;
                }
                if (attr.name === "src" || attr.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                  if (newImg.getAttribute(attr.name) === attr.value) {
                    continue;
                  }
                  var attrName = attr.name;
                  if (newImg.hasAttribute(attrName)) {
                    attrName = "data-old-" + attrName;
                  }
                  newImg.setAttribute(attrName, attr.value);
                }
              }
              noscript.parentNode.replaceChild(tmp.firstElementChild, prevElement);
            }
          });
        },
        /**
         * Removes script tags from the document.
         *
         * @param Element
        **/
        _removeScripts: function(doc) {
          this._removeNodes(this._getAllNodesWithTag(doc, ["script"]), function(scriptNode) {
            scriptNode.nodeValue = "";
            scriptNode.removeAttribute("src");
            return true;
          });
          this._removeNodes(this._getAllNodesWithTag(doc, ["noscript"]));
        },
        /**
         * Check if this node has only whitespace and a single element with given tag
         * Returns false if the DIV node contains non-empty text nodes
         * or if it contains no element with given tag or more than 1 element.
         *
         * @param Element
         * @param string tag of child element
        **/
        _hasSingleTagInsideElement: function(element, tag) {
          if (element.children.length != 1 || element.children[0].tagName !== tag) {
            return false;
          }
          return !this._someNode(element.childNodes, function(node) {
            return node.nodeType === this.TEXT_NODE && this.REGEXPS.hasContent.test(node.textContent);
          });
        },
        _isElementWithoutContent: function(node) {
          return node.nodeType === this.ELEMENT_NODE && node.textContent.trim().length == 0 && (node.children.length == 0 || node.children.length == node.getElementsByTagName("br").length + node.getElementsByTagName("hr").length);
        },
        /**
         * Determine whether element has any children block level elements.
         *
         * @param Element
         */
        _hasChildBlockElement: function(element) {
          return this._someNode(element.childNodes, function(node) {
            return this.DIV_TO_P_ELEMS.has(node.tagName) || this._hasChildBlockElement(node);
          });
        },
        /***
         * Determine if a node qualifies as phrasing content.
         * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
        **/
        _isPhrasingContent: function(node) {
          return node.nodeType === this.TEXT_NODE || this.PHRASING_ELEMS.indexOf(node.tagName) !== -1 || (node.tagName === "A" || node.tagName === "DEL" || node.tagName === "INS") && this._everyNode(node.childNodes, this._isPhrasingContent);
        },
        _isWhitespace: function(node) {
          return node.nodeType === this.TEXT_NODE && node.textContent.trim().length === 0 || node.nodeType === this.ELEMENT_NODE && node.tagName === "BR";
        },
        /**
         * Get the inner text of a node - cross browser compatibly.
         * This also strips out any excess whitespace to be found.
         *
         * @param Element
         * @param Boolean normalizeSpaces (default: true)
         * @return string
        **/
        _getInnerText: function(e2, normalizeSpaces) {
          normalizeSpaces = typeof normalizeSpaces === "undefined" ? true : normalizeSpaces;
          var textContent = e2.textContent.trim();
          if (normalizeSpaces) {
            return textContent.replace(this.REGEXPS.normalize, " ");
          }
          return textContent;
        },
        /**
         * Get the number of times a string s appears in the node e.
         *
         * @param Element
         * @param string - what to split on. Default is ","
         * @return number (integer)
        **/
        _getCharCount: function(e2, s) {
          s = s || ",";
          return this._getInnerText(e2).split(s).length - 1;
        },
        /**
         * Remove the style attribute on every e and under.
         * TODO: Test if getElementsByTagName(*) is faster.
         *
         * @param Element
         * @return void
        **/
        _cleanStyles: function(e2) {
          if (!e2 || e2.tagName.toLowerCase() === "svg")
            return;
          for (var i2 = 0; i2 < this.PRESENTATIONAL_ATTRIBUTES.length; i2++) {
            e2.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i2]);
          }
          if (this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e2.tagName) !== -1) {
            e2.removeAttribute("width");
            e2.removeAttribute("height");
          }
          var cur = e2.firstElementChild;
          while (cur !== null) {
            this._cleanStyles(cur);
            cur = cur.nextElementSibling;
          }
        },
        /**
         * Get the density of links as a percentage of the content
         * This is the amount of text that is inside a link divided by the total text in the node.
         *
         * @param Element
         * @return number (float)
        **/
        _getLinkDensity: function(element) {
          var textLength = this._getInnerText(element).length;
          if (textLength === 0)
            return 0;
          var linkLength = 0;
          this._forEachNode(element.getElementsByTagName("a"), function(linkNode) {
            var href = linkNode.getAttribute("href");
            var coefficient = href && this.REGEXPS.hashUrl.test(href) ? 0.3 : 1;
            linkLength += this._getInnerText(linkNode).length * coefficient;
          });
          return linkLength / textLength;
        },
        /**
         * Get an elements class/id weight. Uses regular expressions to tell if this
         * element looks good or bad.
         *
         * @param Element
         * @return number (Integer)
        **/
        _getClassWeight: function(e2) {
          if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
            return 0;
          var weight = 0;
          if (typeof e2.className === "string" && e2.className !== "") {
            if (this.REGEXPS.negative.test(e2.className))
              weight -= 25;
            if (this.REGEXPS.positive.test(e2.className))
              weight += 25;
          }
          if (typeof e2.id === "string" && e2.id !== "") {
            if (this.REGEXPS.negative.test(e2.id))
              weight -= 25;
            if (this.REGEXPS.positive.test(e2.id))
              weight += 25;
          }
          return weight;
        },
        /**
         * Clean a node of all elements of type "tag".
         * (Unless it's a youtube/vimeo video. People love movies.)
         *
         * @param Element
         * @param string tag to clean
         * @return void
         **/
        _clean: function(e2, tag) {
          var isEmbed = ["object", "embed", "iframe"].indexOf(tag) !== -1;
          this._removeNodes(this._getAllNodesWithTag(e2, [tag]), function(element) {
            if (isEmbed) {
              for (var i2 = 0; i2 < element.attributes.length; i2++) {
                if (this.REGEXPS.videos.test(element.attributes[i2].value)) {
                  return false;
                }
              }
              if (element.tagName === "object" && this.REGEXPS.videos.test(element.innerHTML)) {
                return false;
              }
            }
            return true;
          });
        },
        /**
         * Check if a given node has one of its ancestor tag name matching the
         * provided one.
         * @param  HTMLElement node
         * @param  String      tagName
         * @param  Number      maxDepth
         * @param  Function    filterFn a filter to invoke to determine whether this node 'counts'
         * @return Boolean
         */
        _hasAncestorTag: function(node, tagName, maxDepth, filterFn) {
          maxDepth = maxDepth || 3;
          tagName = tagName.toUpperCase();
          var depth = 0;
          while (node.parentNode) {
            if (maxDepth > 0 && depth > maxDepth)
              return false;
            if (node.parentNode.tagName === tagName && (!filterFn || filterFn(node.parentNode)))
              return true;
            node = node.parentNode;
            depth++;
          }
          return false;
        },
        /**
         * Return an object indicating how many rows and columns this table has.
         */
        _getRowAndColumnCount: function(table) {
          var rows = 0;
          var columns = 0;
          var trs = table.getElementsByTagName("tr");
          for (var i2 = 0; i2 < trs.length; i2++) {
            var rowspan = trs[i2].getAttribute("rowspan") || 0;
            if (rowspan) {
              rowspan = parseInt(rowspan, 10);
            }
            rows += rowspan || 1;
            var columnsInThisRow = 0;
            var cells = trs[i2].getElementsByTagName("td");
            for (var j = 0; j < cells.length; j++) {
              var colspan = cells[j].getAttribute("colspan") || 0;
              if (colspan) {
                colspan = parseInt(colspan, 10);
              }
              columnsInThisRow += colspan || 1;
            }
            columns = Math.max(columns, columnsInThisRow);
          }
          return { rows, columns };
        },
        /**
         * Look for 'data' (as opposed to 'layout') tables, for which we use
         * similar checks as
         * https://searchfox.org/mozilla-central/rev/f82d5c549f046cb64ce5602bfd894b7ae807c8f8/accessible/generic/TableAccessible.cpp#19
         */
        _markDataTables: function(root) {
          var tables = root.getElementsByTagName("table");
          for (var i2 = 0; i2 < tables.length; i2++) {
            var table = tables[i2];
            var role = table.getAttribute("role");
            if (role == "presentation") {
              table._readabilityDataTable = false;
              continue;
            }
            var datatable = table.getAttribute("datatable");
            if (datatable == "0") {
              table._readabilityDataTable = false;
              continue;
            }
            var summary = table.getAttribute("summary");
            if (summary) {
              table._readabilityDataTable = true;
              continue;
            }
            var caption = table.getElementsByTagName("caption")[0];
            if (caption && caption.childNodes.length > 0) {
              table._readabilityDataTable = true;
              continue;
            }
            var dataTableDescendants = ["col", "colgroup", "tfoot", "thead", "th"];
            var descendantExists = function(tag) {
              return !!table.getElementsByTagName(tag)[0];
            };
            if (dataTableDescendants.some(descendantExists)) {
              this.log("Data table because found data-y descendant");
              table._readabilityDataTable = true;
              continue;
            }
            if (table.getElementsByTagName("table")[0]) {
              table._readabilityDataTable = false;
              continue;
            }
            var sizeInfo = this._getRowAndColumnCount(table);
            if (sizeInfo.rows >= 10 || sizeInfo.columns > 4) {
              table._readabilityDataTable = true;
              continue;
            }
            table._readabilityDataTable = sizeInfo.rows * sizeInfo.columns > 10;
          }
        },
        /* convert images and figures that have properties like data-src into images that can be loaded without JS */
        _fixLazyImages: function(root) {
          this._forEachNode(this._getAllNodesWithTag(root, ["img", "picture", "figure"]), function(elem) {
            if (elem.src && this.REGEXPS.b64DataUrl.test(elem.src)) {
              var parts = this.REGEXPS.b64DataUrl.exec(elem.src);
              if (parts[1] === "image/svg+xml") {
                return;
              }
              var srcCouldBeRemoved = false;
              for (var i2 = 0; i2 < elem.attributes.length; i2++) {
                var attr = elem.attributes[i2];
                if (attr.name === "src") {
                  continue;
                }
                if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                  srcCouldBeRemoved = true;
                  break;
                }
              }
              if (srcCouldBeRemoved) {
                var b64starts = elem.src.search(/base64\s*/i) + 7;
                var b64length = elem.src.length - b64starts;
                if (b64length < 133) {
                  elem.removeAttribute("src");
                }
              }
            }
            if ((elem.src || elem.srcset && elem.srcset != "null") && elem.className.toLowerCase().indexOf("lazy") === -1) {
              return;
            }
            for (var j = 0; j < elem.attributes.length; j++) {
              attr = elem.attributes[j];
              if (attr.name === "src" || attr.name === "srcset") {
                continue;
              }
              var copyTo = null;
              if (/\.(jpg|jpeg|png|webp)\s+\d/.test(attr.value)) {
                copyTo = "srcset";
              } else if (/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(attr.value)) {
                copyTo = "src";
              }
              if (copyTo) {
                if (elem.tagName === "IMG" || elem.tagName === "PICTURE") {
                  elem.setAttribute(copyTo, attr.value);
                } else if (elem.tagName === "FIGURE" && !this._getAllNodesWithTag(elem, ["img", "picture"]).length) {
                  var img = this._doc.createElement("img");
                  img.setAttribute(copyTo, attr.value);
                  elem.appendChild(img);
                }
              }
            }
          });
        },
        _getTextDensity: function(e2, tags) {
          var textLength = this._getInnerText(e2, true).length;
          if (textLength === 0) {
            return 0;
          }
          var childrenLength = 0;
          var children = this._getAllNodesWithTag(e2, tags);
          this._forEachNode(children, (child) => childrenLength += this._getInnerText(child, true).length);
          return childrenLength / textLength;
        },
        /**
         * Clean an element of all tags of type "tag" if they look fishy.
         * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
         *
         * @return void
         **/
        _cleanConditionally: function(e2, tag) {
          if (!this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
            return;
          this._removeNodes(this._getAllNodesWithTag(e2, [tag]), function(node) {
            var isDataTable = function(t2) {
              return t2._readabilityDataTable;
            };
            var isList = tag === "ul" || tag === "ol";
            if (!isList) {
              var listLength = 0;
              var listNodes = this._getAllNodesWithTag(node, ["ul", "ol"]);
              this._forEachNode(listNodes, (list) => listLength += this._getInnerText(list).length);
              isList = listLength / this._getInnerText(node).length > 0.9;
            }
            if (tag === "table" && isDataTable(node)) {
              return false;
            }
            if (this._hasAncestorTag(node, "table", -1, isDataTable)) {
              return false;
            }
            if (this._hasAncestorTag(node, "code")) {
              return false;
            }
            var weight = this._getClassWeight(node);
            this.log("Cleaning Conditionally", node);
            var contentScore = 0;
            if (weight + contentScore < 0) {
              return true;
            }
            if (this._getCharCount(node, ",") < 10) {
              var p = node.getElementsByTagName("p").length;
              var img = node.getElementsByTagName("img").length;
              var li = node.getElementsByTagName("li").length - 100;
              var input = node.getElementsByTagName("input").length;
              var headingDensity = this._getTextDensity(node, ["h1", "h2", "h3", "h4", "h5", "h6"]);
              var embedCount = 0;
              var embeds = this._getAllNodesWithTag(node, ["object", "embed", "iframe"]);
              for (var i2 = 0; i2 < embeds.length; i2++) {
                for (var j = 0; j < embeds[i2].attributes.length; j++) {
                  if (this.REGEXPS.videos.test(embeds[i2].attributes[j].value)) {
                    return false;
                  }
                }
                if (embeds[i2].tagName === "object" && this.REGEXPS.videos.test(embeds[i2].innerHTML)) {
                  return false;
                }
                embedCount++;
              }
              var linkDensity = this._getLinkDensity(node);
              var contentLength = this._getInnerText(node).length;
              var haveToRemove = img > 1 && p / img < 0.5 && !this._hasAncestorTag(node, "figure") || !isList && li > p || input > Math.floor(p / 3) || !isList && headingDensity < 0.9 && contentLength < 25 && (img === 0 || img > 2) && !this._hasAncestorTag(node, "figure") || !isList && weight < 25 && linkDensity > 0.2 || weight >= 25 && linkDensity > 0.5 || (embedCount === 1 && contentLength < 75 || embedCount > 1);
              return haveToRemove;
            }
            return false;
          });
        },
        /**
         * Clean out elements that match the specified conditions
         *
         * @param Element
         * @param Function determines whether a node should be removed
         * @return void
         **/
        _cleanMatchedNodes: function(e2, filter3) {
          var endOfSearchMarkerNode = this._getNextNode(e2, true);
          var next = this._getNextNode(e2);
          while (next && next != endOfSearchMarkerNode) {
            if (filter3.call(this, next, next.className + " " + next.id)) {
              next = this._removeAndGetNext(next);
            } else {
              next = this._getNextNode(next);
            }
          }
        },
        /**
         * Clean out spurious headers from an Element.
         *
         * @param Element
         * @return void
        **/
        _cleanHeaders: function(e2) {
          let headingNodes = this._getAllNodesWithTag(e2, ["h1", "h2"]);
          this._removeNodes(headingNodes, function(node) {
            let shouldRemove = this._getClassWeight(node) < 0;
            if (shouldRemove) {
              this.log("Removing header with low class weight:", node);
            }
            return shouldRemove;
          });
        },
        /**
         * Check if this node is an H1 or H2 element whose content is mostly
         * the same as the article title.
         *
         * @param Element  the node to check.
         * @return boolean indicating whether this is a title-like header.
         */
        _headerDuplicatesTitle: function(node) {
          if (node.tagName != "H1" && node.tagName != "H2") {
            return false;
          }
          var heading = this._getInnerText(node, false);
          this.log("Evaluating similarity of header:", heading, this._articleTitle);
          return this._textSimilarity(this._articleTitle, heading) > 0.75;
        },
        _flagIsActive: function(flag) {
          return (this._flags & flag) > 0;
        },
        _removeFlag: function(flag) {
          this._flags = this._flags & ~flag;
        },
        _isProbablyVisible: function(node) {
          return (!node.style || node.style.display != "none") && !node.hasAttribute("hidden") && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1);
        },
        /**
         * Runs readability.
         *
         * Workflow:
         *  1. Prep the document by removing script tags, css, etc.
         *  2. Build readability's DOM tree.
         *  3. Grab the article content from the current dom tree.
         *  4. Replace the current DOM tree with the new one.
         *  5. Read peacefully.
         *
         * @return void
         **/
        parse: function() {
          if (this._maxElemsToParse > 0) {
            var numTags = this._doc.getElementsByTagName("*").length;
            if (numTags > this._maxElemsToParse) {
              throw new Error("Aborting parsing document; " + numTags + " elements found");
            }
          }
          this._unwrapNoscriptImages(this._doc);
          var jsonLd = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
          this._removeScripts(this._doc);
          this._prepDocument();
          var metadata = this._getArticleMetadata(jsonLd);
          this._articleTitle = metadata.title;
          var articleContent = this._grabArticle();
          if (!articleContent)
            return null;
          this.log("Grabbed: " + articleContent.innerHTML);
          this._postProcessContent(articleContent);
          if (!metadata.excerpt) {
            var paragraphs = articleContent.getElementsByTagName("p");
            if (paragraphs.length > 0) {
              metadata.excerpt = paragraphs[0].textContent.trim();
            }
          }
          var textContent = articleContent.textContent;
          return {
            title: this._articleTitle,
            byline: metadata.byline || this._articleByline,
            dir: this._articleDir,
            content: this._serializer(articleContent),
            textContent,
            length: textContent.length,
            excerpt: metadata.excerpt,
            siteName: metadata.siteName || this._articleSiteName
          };
        }
      };
      if (typeof module === "object") {
        module.exports = Readability2;
      }
    }
  });

  // node_modules/@mozilla/readability/Readability-readerable.js
  var require_Readability_readerable = __commonJS({
    "node_modules/@mozilla/readability/Readability-readerable.js"(exports, module) {
      var REGEXPS = {
        // NOTE: These two regular expressions are duplicated in
        // Readability.js. Please keep both copies in sync.
        unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i
      };
      function isNodeVisible(node) {
        return (!node.style || node.style.display != "none") && !node.hasAttribute("hidden") && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1);
      }
      function isProbablyReaderable(doc, options = {}) {
        if (typeof options == "function") {
          options = { visibilityChecker: options };
        }
        var defaultOptions = { minScore: 20, minContentLength: 140, visibilityChecker: isNodeVisible };
        options = Object.assign(defaultOptions, options);
        var nodes = doc.querySelectorAll("p, pre");
        var brNodes = doc.querySelectorAll("div > br");
        if (brNodes.length) {
          var set5 = new Set(nodes);
          [].forEach.call(brNodes, function(node) {
            set5.add(node.parentNode);
          });
          nodes = Array.from(set5);
        }
        var score = 0;
        return [].some.call(nodes, function(node) {
          if (!options.visibilityChecker(node)) {
            return false;
          }
          var matchString = node.className + " " + node.id;
          if (REGEXPS.unlikelyCandidates.test(matchString) && !REGEXPS.okMaybeItsACandidate.test(matchString)) {
            return false;
          }
          if (node.matches("li p")) {
            return false;
          }
          var textContentLength = node.textContent.trim().length;
          if (textContentLength < options.minContentLength) {
            return false;
          }
          score += Math.sqrt(textContentLength - options.minContentLength);
          if (score > options.minScore) {
            return true;
          }
          return false;
        });
      }
      if (typeof module === "object") {
        module.exports = isProbablyReaderable;
      }
    }
  });

  // node_modules/@mozilla/readability/index.js
  var require_readability = __commonJS({
    "node_modules/@mozilla/readability/index.js"(exports, module) {
      var Readability2 = require_Readability();
      var isProbablyReaderable = require_Readability_readerable();
      module.exports = {
        Readability: Readability2,
        isProbablyReaderable
      };
    }
  });

  // src/.excmds_content.generated.ts
  var excmds_content_generated_exports = {};
  __export(excmds_content_generated_exports, {
    ABOUT_WHITELIST: () => ABOUT_WHITELIST,
    INPUTTAGS_selectors: () => INPUTTAGS_selectors,
    addJump: () => addJump,
    addTabHistory: () => addTabHistory,
    addTridactylEditorClass: () => addTridactylEditorClass,
    apropos: () => apropos,
    autocmd: () => autocmd,
    autocmddelete: () => autocmddelete,
    autocontain: () => autocontain,
    back: () => back,
    bind: () => bind3,
    bindshow: () => bindshow,
    bindurl: () => bindurl,
    bindwizard: () => bindwizard,
    blacklistadd: () => blacklistadd,
    bmark: () => bmark,
    bmarks: () => bmarks,
    changelistjump: () => changelistjump,
    clearsearchhighlight: () => clearsearchhighlight,
    clipboard: () => clipboard2,
    cmd_params: () => cmd_params,
    colourscheme: () => colourscheme,
    comclear: () => comclear,
    command: () => command,
    composite: () => composite,
    containerclose: () => containerclose,
    containercreate: () => containercreate,
    containerdelete: () => containerdelete,
    containerupdate: () => containerupdate,
    credits: () => credits,
    cssparse: () => cssparse,
    curJumps: () => curJumps,
    curTabHistory: () => curTabHistory,
    drawingerasertoggle: () => drawingerasertoggle,
    drawingstart: () => drawingstart,
    echo: () => echo,
    editor: () => editor2,
    elementunhide: () => elementunhide,
    escapehatch: () => escapehatch,
    exclaim: () => exclaim,
    exclaim_quiet: () => exclaim_quiet,
    extoptions: () => extoptions,
    fillcmdline: () => fillcmdline,
    fillcmdline_nofocus: () => fillcmdline_nofocus,
    fillcmdline_notrail: () => fillcmdline_notrail,
    fillcmdline_tmp: () => fillcmdline_tmp,
    fillinput: () => fillinput,
    find: () => find4,
    findnext: () => findnext,
    findselect: () => findselect,
    firefoxsyncpull: () => firefoxsyncpull,
    firefoxsyncpush: () => firefoxsyncpush,
    fixamo: () => fixamo,
    fixamo_quiet: () => fixamo_quiet,
    focusbyid: () => focusbyid,
    focusinput: () => focusinput,
    followpage: () => followpage,
    forward: () => forward,
    fullscreen: () => fullscreen,
    get: () => get2,
    getGotoSelectors: () => getGotoSelectors,
    getInput: () => getInput,
    getInputSelector: () => getInputSelector,
    getJumpPageId: () => getJumpPageId,
    getNativeVersion: () => getNativeVersion,
    getRssLinks: () => getRssLinks,
    getclip: () => getclip,
    getinput: () => getinput,
    geturlsforlinks: () => geturlsforlinks,
    gobble: () => gobble,
    goto: () => goto,
    guiset: () => guiset,
    guiset_quiet: () => guiset_quiet,
    help: () => help,
    hidecmdline: () => hidecmdline,
    hint: () => hint,
    home: () => home,
    issue: () => issue,
    js: () => js2,
    jsb: () => jsb,
    jsonview: () => jsonview,
    jsua: () => jsua,
    jumble: () => jumble2,
    jumpnext: () => jumpnext,
    jumpprev: () => jumpprev,
    keyfeed: () => keyfeed,
    keymap: () => keymap,
    loadaucmds: () => loadaucmds,
    loadtheme: () => loadtheme,
    markadd: () => markadd,
    markaddglobal: () => markaddglobal,
    markaddlocal: () => markaddlocal,
    markjump: () => markjump,
    markjumpbefore: () => markjumpbefore,
    markjumpglobal: () => markjumpglobal,
    markjumplocal: () => markjumplocal,
    mktridactylrc: () => mktridactylrc,
    mode: () => mode,
    mouse_mode: () => mouse_mode,
    mute: () => mute,
    native: () => native,
    nativeinstall: () => nativeinstall,
    nativeopen: () => nativeopen,
    neo_mouse_mode: () => neo_mouse_mode,
    nmode: () => nmode,
    no_mouse_mode: () => no_mouse_mode,
    open: () => open,
    open_quiet: () => open_quiet,
    perfdump: () => perfdump,
    perfhistogram: () => perfhistogram,
    pied_piper_mouse_mode: () => pied_piper_mouse_mode,
    pin: () => pin,
    proxyadd: () => proxyadd,
    proxyremove: () => proxyremove,
    qall: () => qall,
    quickmark: () => quickmark,
    reader: () => reader,
    readerold: () => readerold,
    readerurl: () => readerurl,
    recontain: () => recontain,
    reload: () => reload,
    reloadall: () => reloadall,
    reloadallbut: () => reloadallbut,
    reloaddead: () => reloaddead,
    reloadhard: () => reloadhard,
    removeTridactylEditorClass: () => removeTridactylEditorClass,
    removepref: () => removepref,
    repeat: () => repeat3,
    reset: () => reset3,
    reseturl: () => reseturl,
    restart: () => restart,
    rot13: () => rot132,
    rssexec: () => rssexec,
    run_exstr: () => run_exstr,
    sanitise: () => sanitise,
    saveJumps: () => saveJumps,
    saveTabHistory: () => saveTabHistory,
    saveas: () => saveas,
    scrollline: () => scrollline,
    scrollpage: () => scrollpage,
    scrollpx: () => scrollpx,
    scrolltab: () => scrolltab,
    scrollto: () => scrollto,
    searchsetkeyword: () => searchsetkeyword,
    set: () => set4,
    setContentStateGroup: () => setContentStateGroup,
    setmode: () => setmode,
    setnull: () => setnull,
    setpref: () => setpref,
    seturl: () => seturl,
    shellescape: () => shellescape,
    showcmdline: () => showcmdline,
    sidebaropen: () => sidebaropen,
    sidebartoggle: () => sidebartoggle,
    sleep: () => sleep3,
    snow_mouse_mode: () => snow_mouse_mode,
    source: () => source,
    source_quiet: () => source_quiet,
    tab: () => tab,
    tab_helper: () => tab_helper,
    taball: () => taball,
    tabaudio: () => tabaudio,
    tabclose: () => tabclose,
    tabcloseallto: () => tabcloseallto,
    tabcurrentrename: () => tabcurrentrename,
    tabdetach: () => tabdetach,
    tabduplicate: () => tabduplicate,
    tabgrab: () => tabgrab,
    tabmove: () => tabmove,
    tabnext: () => tabnext,
    tabnext_gt: () => tabnext_gt,
    tabonly: () => tabonly,
    tabopen: () => tabopen,
    tabopenwait: () => tabopenwait,
    tabprev: () => tabprev,
    tabpush: () => tabpush,
    tabqueue: () => tabqueue,
    tabrename: () => tabrename,
    tabsort: () => tabsort,
    text2qr: () => text2qr,
    tgroupabort: () => tgroupabort,
    tgroupclose: () => tgroupclose,
    tgroupcreate: () => tgroupcreate,
    tgrouplast: () => tgrouplast,
    tgroupmove: () => tgroupmove,
    tgrouprename: () => tgrouprename,
    tgroupswitch: () => tgroupswitch,
    ttscontrol: () => ttscontrol,
    ttsread: () => ttsread,
    ttsvoices: () => ttsvoices,
    tutor: () => tutor,
    unbind: () => unbind,
    unbindurl: () => unbindurl,
    undo: () => undo,
    unfocus: () => unfocus,
    unloadtheme: () => unloadtheme,
    unset: () => unset2,
    unsetmode: () => unsetmode,
    unseturl: () => unseturl,
    updatecheck: () => updatecheck,
    updatenative: () => updatenative,
    url2args: () => url2args,
    urlincrement: () => urlincrement,
    urlmodify: () => urlmodify,
    urlmodify_js: () => urlmodify_js,
    urlparent: () => urlparent,
    urlroot: () => urlroot,
    version: () => version,
    viewconfig: () => viewconfig,
    viewcontainers: () => viewcontainers,
    viewsource: () => viewsource,
    winclose: () => winclose,
    winmerge: () => winmerge,
    winopen: () => winopen,
    wintitle: () => wintitle,
    yank: () => yank,
    yankimage: () => yankimage,
    zoom: () => zoom
  });
  async function getNativeVersion() {
    logger12.debug("shimming excmd getNativeVersion from content to background");
    return message(
      "excmd_background",
      "getNativeVersion"
    );
  }
  async function getRssLinks() {
    const seen = /* @__PURE__ */ new Set();
    return Array.from(document.querySelectorAll("a, link[rel='alternate']")).filter((e2) => typeof e2.href === "string").reduce((acc, e2) => {
      let type3 = "";
      if (e2.type) {
        if (e2.type.indexOf("rss") < 0 && e2.type.indexOf("atom") < 0)
          return acc;
        type3 = e2.type;
      } else {
        if (/(\.rss)|(rss\.xml)/i.test(e2.href))
          type3 = "application/rss+xml";
        else if (/(\.atom)|(atom\.xml)/i.test(e2.href))
          type3 = "application/atom+xml";
        else
          return acc;
      }
      if (seen.has(e2.href))
        return acc;
      seen.add(e2.href);
      return acc.concat({ type: type3, url: e2.href, title: e2.title || e2.innerText });
    }, []);
  }
  async function rssexec(url, type3, ...title) {
    if (!url || url === "") {
      const links = await getRssLinks();
      switch (links.length) {
        case 0:
          throw new Error("No rss link found on this page.");
          break;
        case 1:
          url = links[0].url;
          title = [links[0].title];
          type3 = links[0].type;
          break;
        default:
          return fillcmdline("rssexec");
      }
    }
    let rsscmd = get("rsscmd");
    if (rsscmd.match("%[uty]")) {
      rsscmd = rsscmd.replace("%u", url).replace("%t", title.join(" ")).replace("%y", type3 || "");
    } else {
      rsscmd += " " + url;
    }
    return acceptExCmd(rsscmd);
  }
  function fillinput(selector, ...content) {
    var _a, _b, _c;
    let inputToFill = document.querySelector(selector);
    if (!inputToFill)
      inputToFill = getLastUsedInput();
    if ((_c = (_b = (_a = inputToFill == null ? void 0 : inputToFill.parentNode) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.className) == null ? void 0 : _c.match(/CodeMirror/gi)) {
      ;
      inputToFill.parentNode.parentElement.wrappedJSObject.CodeMirror.setValue(content.join(" "));
      return;
    }
    if ("value" in inputToFill) {
      ;
      inputToFill.value = content.join(" ");
    } else {
      inputToFill.textContent = content.join(" ");
    }
  }
  function getInput(e2) {
    if ("value" in e2) {
      return e2.value;
    } else {
      return e2.textContent;
    }
  }
  function getinput() {
    return getInput(getLastUsedInput());
  }
  function getInputSelector() {
    return getSelector(getLastUsedInput());
  }
  function addTridactylEditorClass(selector) {
    var _a;
    (_a = document.querySelector(selector)) == null ? void 0 : _a.classList.add("TridactylEditing");
  }
  function removeTridactylEditorClass(selector) {
    var _a;
    (_a = document.querySelector(selector)) == null ? void 0 : _a.classList.remove("TridactylEditing");
  }
  async function editor2() {
    const elem = getLastUsedInput();
    const selector = getSelector(elem);
    addTridactylEditorClass(selector);
    if (!await nativegate()) {
      removeTridactylEditorClass(selector);
      return void 0;
    }
    const beforeUnloadListener = (event) => {
      event.preventDefault();
      event.returnValue = true;
    };
    window.addEventListener("beforeunload", beforeUnloadListener);
    let ans;
    try {
      const editor3 = getEditor(elem, { preferHTML: true });
      const text = await editor3.getContent();
      const pos = await editor3.getCursor();
      const file = (await temp(text, document.location.hostname)).content;
      const exec = await editor(file, ...pos);
      if (exec.code == 0) {
        await editor3.setContent(exec.content);
        await editor3.setCursor(...pos);
        ans = [file, exec.content];
      } else {
        logger12.debug(`Editor terminated with non-zero exit code: ${exec.code}`);
      }
    } catch (e2) {
      throw new Error(`:editor failed: ${e2}`);
    } finally {
      removeTridactylEditorClass(selector);
      window.removeEventListener("beforeunload", beforeUnloadListener);
      return ans;
    }
  }
  async function guiset_quiet(rule, option) {
    logger12.debug("shimming excmd guiset_quiet from content to background");
    return message(
      "excmd_background",
      "guiset_quiet",
      rule,
      option
    );
  }
  async function guiset(rule, option) {
    logger12.debug("shimming excmd guiset from content to background");
    return message(
      "excmd_background",
      "guiset",
      rule,
      option
    );
  }
  function cssparse(...css) {
    logger12.debug("shimming excmd cssparse from content to background");
    return message(
      "excmd_background",
      "cssparse",
      ...css
    );
  }
  async function loadtheme(themename) {
    logger12.debug("shimming excmd loadtheme from content to background");
    return message(
      "excmd_background",
      "loadtheme",
      themename
    );
  }
  async function unloadtheme(themename) {
    logger12.debug("shimming excmd unloadtheme from content to background");
    return message(
      "excmd_background",
      "unloadtheme",
      themename
    );
  }
  async function colourscheme(...args2) {
    logger12.debug("shimming excmd colourscheme from content to background");
    return message(
      "excmd_background",
      "colourscheme",
      ...args2
    );
  }
  function setpref(key, ...value) {
    logger12.debug("shimming excmd setpref from content to background");
    return message(
      "excmd_background",
      "setpref",
      key,
      ...value
    );
  }
  function removepref(key) {
    logger12.debug("shimming excmd removepref from content to background");
    return message(
      "excmd_background",
      "removepref",
      key
    );
  }
  async function fixamo_quiet() {
    logger12.debug("shimming excmd fixamo_quiet from content to background");
    return message(
      "excmd_background",
      "fixamo_quiet"
    );
  }
  async function fixamo() {
    logger12.debug("shimming excmd fixamo from content to background");
    return message(
      "excmd_background",
      "fixamo"
    );
  }
  async function nativeopen(...args2) {
    logger12.debug("shimming excmd nativeopen from content to background");
    return message(
      "excmd_background",
      "nativeopen",
      ...args2
    );
  }
  async function exclaim(...str2) {
    logger12.debug("shimming excmd exclaim from content to background");
    return message(
      "excmd_background",
      "exclaim",
      ...str2
    );
  }
  async function exclaim_quiet(...str2) {
    logger12.debug("shimming excmd exclaim_quiet from content to background");
    return message(
      "excmd_background",
      "exclaim_quiet",
      ...str2
    );
  }
  async function native() {
    logger12.debug("shimming excmd native from content to background");
    return message(
      "excmd_background",
      "native"
    );
  }
  async function nativeinstall() {
    logger12.debug("shimming excmd nativeinstall from content to background");
    return message(
      "excmd_background",
      "nativeinstall"
    );
  }
  async function mktridactylrc(...args2) {
    logger12.debug("shimming excmd mktridactylrc from content to background");
    return message(
      "excmd_background",
      "mktridactylrc",
      ...args2
    );
  }
  async function source(...args2) {
    logger12.debug("shimming excmd source from content to background");
    return message(
      "excmd_background",
      "source",
      ...args2
    );
  }
  async function source_quiet(...args2) {
    logger12.debug("shimming excmd source_quiet from content to background");
    return message(
      "excmd_background",
      "source_quiet",
      ...args2
    );
  }
  async function updatenative(interactive = true) {
    logger12.debug("shimming excmd updatenative from content to background");
    return message(
      "excmd_background",
      "updatenative",
      interactive
    );
  }
  async function restart() {
    logger12.debug("shimming excmd restart from content to background");
    return message(
      "excmd_background",
      "restart"
    );
  }
  async function saveas(...args2) {
    let overwrite = false;
    let cleanup = false;
    const argParse = (args3) => {
      if (args3[0] === "--overwrite") {
        overwrite = true;
        args3.shift();
        argParse(args3);
      }
      if (args3[0] === "--cleanup") {
        cleanup = true;
        args3.shift();
        argParse(args3);
      }
      return args3;
    };
    const file = argParse(args2).join(" ") || void 0;
    const requiredNativeMessengerVersion = "0.3.2";
    if ((overwrite || cleanup) && !await nativegate(requiredNativeMessengerVersion, false)) {
      throw new Error(`":saveas --{overwrite, cleanup}" requires native ${requiredNativeMessengerVersion} or later`);
    }
    if (args2.length > 0) {
      const filename = await message("download_background", "downloadUrlAs", window.location.href, file, overwrite, cleanup);
      return fillcmdline_tmp(1e4, `Download completed: ${filename} stored in ${file}`);
    } else {
      return message("download_background", "downloadUrl", window.location.href, true);
    }
  }
  function getJumpPageId() {
    return document.location.href;
  }
  async function saveJumps(jumps) {
    return browserBg.sessions.setTabValue(await activeTabId(), "jumps", jumps);
  }
  async function saveTabHistory(history3) {
    return browserBg.sessions.setTabValue(await activeTabId(), "history", history3);
  }
  async function curTabHistory() {
    const tabid = await activeTabId();
    return await browserBg.sessions.getTabValue(tabid, "history");
  }
  async function curJumps() {
    const tabid = await activeTabId();
    let jumps = await browserBg.sessions.getTabValue(tabid, "jumps");
    if (!jumps)
      jumps = {};
    const ensure = (obj, key, def) => {
      if (obj[key] === null || obj[key] === void 0)
        obj[key] = def;
    };
    const page = getJumpPageId();
    ensure(jumps, page, {});
    ensure(jumps[page], "list", [{ x: window.scrollX, y: window.scrollY }]);
    ensure(jumps[page], "cur", 0);
    saveJumps(jumps);
    return jumps;
  }
  function jumpnext(n2 = 1) {
    return jumpprev(-n2);
  }
  function jumpprev(n2 = 1) {
    return curJumps().then((alljumps) => {
      const jumps = alljumps[getJumpPageId()];
      const current = jumps.cur - n2;
      if (current < 0) {
        jumps.cur = 0;
        saveJumps(alljumps);
        return back(-current + "");
      } else if (current >= jumps.list.length) {
        jumps.cur = jumps.list.length - 1;
        saveJumps(alljumps);
        return forward(current - jumps.list.length + 1 + "");
      }
      jumps.cur = current;
      const p = jumps.list[jumps.cur];
      saveJumps(alljumps);
      JUMPED = true;
      window.scrollTo(p.x, p.y);
    });
  }
  async function markjump(key) {
    if (key.length !== 1) {
      throw new Error("markjump accepts only a single letter or '`'");
    }
    if (key === "`") {
      return markjumpbefore();
    }
    if (!/[a-z]/i.exec(key)) {
      throw new Error("markjump accepts only a single letter or '`'");
    }
    if (key === key.toUpperCase()) {
      return markjumpglobal(key);
    }
    return markjumplocal(key);
  }
  async function markjumplocal(key) {
    var _a;
    const urlWithoutAnchor = window.location.href.split("#")[0];
    const localMarks = await getAsync2("localMarks");
    const mark = (_a = localMarks.get(urlWithoutAnchor)) == null ? void 0 : _a.get(key);
    if (mark) {
      const currentTabId = await activeTabId();
      state.beforeJumpMark = { url: urlWithoutAnchor, scrollX: window.scrollX, scrollY: window.scrollY, tabId: currentTabId };
      scrolltab(currentTabId, mark.scrollX, mark.scrollY, `# marks: jumped to mark '${key}'`);
    }
    return fillcmdline_tmp(3e3, `# marks: warning - local mark '${key}' is not set in this tab`);
  }
  async function markjumpglobal(key) {
    const globalMarks = await getAsync2("globalMarks");
    const mark = globalMarks.get(key);
    if (!mark) {
      return fillcmdline_tmp(3e3, `# marks: warning - global mark '${key}' is not set`);
    }
    const currentTabId = await activeTabId();
    state.beforeJumpMark = {
      url: window.location.href.split("#")[0],
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      tabId: currentTabId
    };
    try {
      const tab2 = await browserBg.tabs.get(mark.tabId);
      return onTabExists(tab2);
    } catch (e2) {
      return onTabNoLongerValid();
    }
    async function onTabExists(tab2) {
      const tabUrl = tab2.url.split("#")[0];
      if (mark.url !== tabUrl) {
        return onTabNoLongerValid();
      }
      return goToTab(tab2.id).then(() => {
        scrolltab(tab2.id, mark.scrollX, mark.scrollY, `# marks: jumped to mark '${key}'`);
      });
    }
    async function onTabNoLongerValid() {
      const matchingTabs = await browserBg.tabs.query({ url: mark.url });
      if (!matchingTabs.length) {
        return tabopenwait(mark.url).then(updateMarkAndScroll);
      }
      return goToTab(matchingTabs[0].id).then(updateMarkAndScroll);
    }
    function updateMarkAndScroll(tab2) {
      mark.tabId = tab2.id;
      state.globalMarks = globalMarks;
      scrolltab(tab2.id, mark.scrollX, mark.scrollY, `# marks: jumped to mark '${key}'`);
    }
  }
  async function markjumpbefore() {
    const beforeJumpMark = await getAsync2("beforeJumpMark");
    if (!beforeJumpMark) {
      return;
    }
    try {
      const tab2 = await browserBg.tabs.get(beforeJumpMark.tabId);
      const tabUrl = tab2.url.split("#")[0];
      const { url, scrollX, scrollY, tabId } = beforeJumpMark;
      if (url !== tabUrl) {
        return;
      }
      const currentTabId = await activeTabId();
      state.beforeJumpMark = { url: window.location.href.split("#")[0], scrollX: window.scrollX, scrollY: window.scrollY, tabId: currentTabId };
      goToTab(tabId).then(() => scrolltab(tabId, scrollX, scrollY, "# marks: jumped back"));
    } catch (e2) {
    }
  }
  async function scrolltab(tabId, scrollX, scrollY, message2) {
    await messageTab(tabId, "controller_content", "acceptExCmd", [`scrollto ${scrollX} ${scrollY}`]);
    messageTab(tabId, "controller_content", "acceptExCmd", [`fillcmdline_tmp 3000 ${message2}`]);
  }
  async function markadd(key) {
    logger12.debug("shimming excmd markadd from content to background");
    return message(
      "excmd_background",
      "markadd",
      key
    );
  }
  async function markaddlocal(key) {
    const urlWithoutAnchor = window.location.href.split("#")[0];
    const localMarks = await getAsync2("localMarks");
    const localUrlMarks = localMarks.get(urlWithoutAnchor) ? localMarks.get(urlWithoutAnchor) : /* @__PURE__ */ new Map();
    const newLocalMark = { scrollX: window.scrollX, scrollY: window.scrollY };
    localUrlMarks.set(key, newLocalMark);
    localMarks.set(urlWithoutAnchor, localUrlMarks);
    state.localMarks = localMarks;
    fillcmdline_tmp(3e3, `# marks: local mark '${key}' set`);
  }
  async function markaddglobal(key) {
    const urlWithoutAnchor = window.location.href.split("#")[0];
    const globalMarks = await getAsync2("globalMarks");
    const tabId = await activeTabId();
    const newGlobalMark = { url: urlWithoutAnchor, scrollX: window.scrollX, scrollY: window.scrollY, tabId };
    globalMarks.set(key, newGlobalMark);
    state.globalMarks = globalMarks;
    fillcmdline_tmp(3e3, `# marks: global mark '${key}' set`);
  }
  function addJump() {
    if (JUMPED) {
      JUMPED = false;
      return;
    }
    const { scrollX, scrollY } = window;
    clearTimeout(JUMP_TIMEOUTID);
    const localTimeoutID = window.setTimeout(async () => {
      const alljumps = await curJumps();
      if (localTimeoutID !== JUMP_TIMEOUTID)
        return;
      const jumps = alljumps[getJumpPageId()];
      const list = jumps.list;
      if (list[jumps.cur].x === scrollX && list[jumps.cur].y === scrollY)
        return;
      list.push({ x: scrollX, y: scrollY });
      jumps.cur = jumps.list.length - 1;
      saveJumps(alljumps);
    }, get("jumpdelay"));
    JUMP_TIMEOUTID = localTimeoutID;
  }
  async function addTabHistory() {
    let pages = await curTabHistory();
    if (!pages)
      pages = {
        current: null,
        list: []
      };
    const link = getJumpPageId();
    const current = pages["list"].findIndex((item) => item.href === link);
    if (current !== -1) {
      pages["current"] = current;
      pages["list"][current].time = Date.now();
    } else {
      pages["list"].push({
        parent: pages["current"],
        href: link,
        title: document.title,
        id: pages["list"].length,
        time: Date.now()
      });
      pages["current"] = pages["list"].length - 1;
    }
    saveTabHistory(pages);
  }
  function unfocus() {
    ;
    (document.activeElement.shadowRoot ? deepestShadowRoot(document.activeElement.shadowRoot) : document).activeElement.blur();
    contentState.mode = "normal";
  }
  async function scrollpx(a, b) {
    let done = Promise.resolve(void 0);
    if (!await scroll(a, b, document.documentElement)) {
      done = recursiveScroll(a, b);
    }
    return done.then(() => void 0);
  }
  function scrollto(a, b = "y") {
    if (typeof a === "string" && /c$/i.exec(a)) {
      a = Number(a.replace(/c$/, "")) * 100 / (2 * Math.PI);
    }
    a = Number(a);
    const elem = window.document.scrollingElement || window.document.documentElement;
    const percentage = a.clamp(0, 100);
    let done = Promise.resolve(void 0);
    if (b === "y") {
      const top = elem.getClientRects()[0].top;
      window.scrollTo(window.scrollX, percentage * elem.scrollHeight / 100);
      if (top === elem.getClientRects()[0].top && (percentage === 0 || percentage === 100)) {
        done = recursiveScroll(window.scrollX, 1073741824 * (percentage === 0 ? -1 : 1), document.documentElement);
      }
    } else if (b === "x") {
      const left = elem.getClientRects()[0].left;
      window.scrollTo(percentage * elem.scrollWidth / 100, window.scrollY);
      if (left === elem.getClientRects()[0].left && (percentage === 0 || percentage === 100)) {
        done = recursiveScroll(1073741824 * (percentage === 0 ? -1 : 1), window.scrollX, document.documentElement);
      }
    } else {
      window.scrollTo(a, Number(b));
    }
    return done.then(() => void 0);
  }
  function scrollline(n2 = 1, mult = 1) {
    n2 = mult * n2;
    if (lineHeight === null) {
      const getLineHeight = (elem) => {
        const cssHeight = window.getComputedStyle(elem).getPropertyValue("line-height");
        return parseInt(cssHeight.substr(0, cssHeight.length - 2), 10);
      };
      lineHeight = getLineHeight(document.documentElement);
      if (!lineHeight)
        lineHeight = getLineHeight(document.body);
      if (!lineHeight)
        lineHeight = 22;
    }
    return recursiveScroll(0, lineHeight * n2);
  }
  function scrollpage(n2 = 1, count2 = 1) {
    return scrollpx(0, window.innerHeight * n2 * count2);
  }
  function find4(...args2) {
    const argOpt = lib(
      {
        "--jump-to": Number,
        "-:": "--jump-to",
        "--reverse": Boolean,
        "-?": "--reverse"
      },
      {
        argv: args2,
        permissive: true,
        splitUnknownArguments: false
      }
    );
    const option = {};
    option["reverse"] = Boolean(argOpt["--reverse"]);
    if ("--jump-to" in argOpt)
      option["jumpTo"] = argOpt["--jump-to"];
    const searchQuery = argOpt._.join(" ");
    return jumpToMatch(searchQuery, option);
  }
  function findnext(...args2) {
    let n2 = 1;
    const option = lib(
      {
        "--search-from-view": Boolean,
        "-f": "--search-from-view",
        "--reverse": Boolean,
        "-?": "--reverse"
      },
      {
        argv: args2,
        allowNegativePositional: true
      }
    );
    if (option._.length > 0)
      n2 = Number(option._[0]);
    if (option["--reverse"])
      n2 = -n2;
    return jumpToNextMatch(n2, Boolean(option["--search-from-view"]));
  }
  function clearsearchhighlight() {
    return removeHighlighting();
  }
  function findselect() {
    const range4 = currentMatchRange();
    const selection = document.getSelection();
    selection.removeAllRanges();
    selection.addRange(range4);
  }
  function history2(url_or_num, direction) {
    url_or_num = url_or_num == "" ? "1" : url_or_num;
    isNaN(url_or_num) ? open(url_or_num) : window.history.go(parseInt(url_or_num, 10) * direction);
  }
  function forward(...args2) {
    return history2(args2.join(" "), 1);
  }
  function back(...args2) {
    return history2(args2.join(" "), -1);
  }
  async function reload(n2 = 1, hard = false) {
    logger12.debug("shimming excmd reload from content to background");
    return message(
      "excmd_background",
      "reload",
      n2,
      hard
    );
  }
  async function reloadall(hard = false) {
    logger12.debug("shimming excmd reloadall from content to background");
    return message(
      "excmd_background",
      "reloadall",
      hard
    );
  }
  async function reloadallbut(hard = false) {
    logger12.debug("shimming excmd reloadallbut from content to background");
    return message(
      "excmd_background",
      "reloadallbut",
      hard
    );
  }
  async function reloaddead(hard = false) {
    logger12.debug("shimming excmd reloaddead from content to background");
    return message(
      "excmd_background",
      "reloaddead",
      hard
    );
  }
  async function reloadhard(n2 = 1) {
    logger12.debug("shimming excmd reloadhard from content to background");
    return message(
      "excmd_background",
      "reloadhard",
      n2
    );
  }
  async function open(...urlarr) {
    const url = urlarr.join(" ");
    if (!ABOUT_WHITELIST.includes(url) && /^(about|file):.*/.exec(url)) {
      return nativeopen(url);
    } else if (/^javascript:/.exec(url)) {
      const escapeUrl = url.replace(/[\\"]/g, "\\$&");
      window.eval(`window.location.href = "${escapeUrl}"`);
    } else {
      const tab2 = await ownTab();
      return openInTab(tab2, {}, urlarr);
    }
  }
  async function bmarks(opt, ...urlarr) {
    logger12.debug("shimming excmd bmarks from content to background");
    return message(
      "excmd_background",
      "bmarks",
      opt,
      ...urlarr
    );
  }
  async function open_quiet(...urlarr) {
    const url = urlarr.join(" ");
    if (!ABOUT_WHITELIST.includes(url) && /^(about|file):.*/.exec(url)) {
      return nativeopen(url);
    }
    return ownTab().then((tab2) => openInTab(tab2, { loadReplace: true }, urlarr));
  }
  async function url2args() {
    const url = document.location.href;
    const searchurls2 = await getAsync("searchurls");
    let result = url;
    for (const engine2 of Object.keys(searchurls2)) {
      const [beginning, end] = [...searchurls2[engine2].split("%s"), ""];
      if (url.startsWith(beginning) && url.endsWith(end)) {
        let encodedArgs = url.substring(beginning.length);
        encodedArgs = encodedArgs.substring(0, encodedArgs.length - end.length);
        const amperpos = encodedArgs.search("&");
        if (amperpos > 0)
          encodedArgs = encodedArgs.substring(0, amperpos);
        if (beginning.search("duckduckgo") > 0)
          encodedArgs = encodedArgs.replace(/\+/g, " ");
        else if (beginning.search("wikipedia") > 0)
          encodedArgs = encodedArgs.replace(/_/g, " ");
        const args2 = engine2 + " " + decodeURIComponent(encodedArgs);
        if (args2.length < result.length)
          result = args2;
      }
    }
    return result;
  }
  function removeSource() {
    if (sourceElement) {
      sourceElement.remove();
      sourceElement = void 0;
    }
  }
  function viewsource(url = "") {
    if (url === "")
      url = window.location.href;
    if (get("viewsource") === "default") {
      window.location.href = "view-source:" + url;
      return;
    }
    if (!sourceElement) {
      sourceElement = executeWithoutCommandLine(() => {
        const pre = document.createElement("pre");
        pre.id = "TridactylViewsourceElement";
        pre.className = "cleanslate " + get("theme");
        pre.innerText = document.documentElement.innerHTML;
        document.documentElement.appendChild(pre);
        window.addEventListener("popstate", removeSource);
        return pre;
      });
    } else {
      sourceElement.parentNode.removeChild(sourceElement);
      sourceElement = void 0;
      window.removeEventListener("popstate", removeSource);
    }
  }
  function home(all3 = "false") {
    logger12.debug("shimming excmd home from content to background");
    return message(
      "excmd_background",
      "home",
      all3
    );
  }
  async function help(...helpItems) {
    logger12.debug("shimming excmd help from content to background");
    return message(
      "excmd_background",
      "help",
      ...helpItems
    );
  }
  async function apropos(...helpItems) {
    logger12.debug("shimming excmd apropos from content to background");
    return message(
      "excmd_background",
      "apropos",
      ...helpItems
    );
  }
  async function tutor(newtab) {
    logger12.debug("shimming excmd tutor from content to background");
    return message(
      "excmd_background",
      "tutor",
      newtab
    );
  }
  async function credits() {
    logger12.debug("shimming excmd credits from content to background");
    return message(
      "excmd_background",
      "credits"
    );
  }
  function no_mouse_mode() {
    no_mouse();
  }
  function neo_mouse_mode() {
    jack_in();
  }
  function snow_mouse_mode() {
    snow();
  }
  function pied_piper_mouse_mode() {
    music();
  }
  function drawingstart() {
    drawable();
  }
  function drawingerasertoggle() {
    eraser_toggle();
  }
  function mouse_mode() {
    removeBlock();
  }
  function findRelLink(pattern) {
    const links = Array.from(document.querySelectorAll("a[href]"));
    return links.reverse().find((link) => pattern.test(link.innerText));
  }
  function selectLast(selector) {
    const nodes = document.querySelectorAll(selector);
    return nodes.length ? nodes[nodes.length - 1] : null;
  }
  function followpage(rel = "next") {
    const link = selectLast(`link[rel~=${rel}][href]`);
    if (link) {
      window.location.href = link.href;
      return;
    }
    const anchor = selectLast(`a[rel~=${rel}][href]`) || findRelLink(new RegExp(get("followpagepatterns", rel), "i"));
    if (anchor) {
      mouseEvent(anchor, "click");
    } else {
      urlincrement(rel === "next" ? 1 : -1);
    }
  }
  function urlincrement(count2 = 1, multiplier = 1) {
    const newUrl = incrementUrl(window.location.href, count2 * multiplier);
    if (newUrl !== null) {
      try {
        window.location.href = newUrl;
      } catch (e2) {
        logger12.info(`urlincrement: Impossible to navigate to ${newUrl}`);
      }
    }
  }
  function urlroot() {
    const rootUrl = getUrlRoot(window.location);
    if (rootUrl !== null) {
      window.location.href = rootUrl.href;
    }
  }
  function urlparent(count2 = 1) {
    const trailingSlash = get("urlparenttrailingslash") === "true";
    const parentUrl = getUrlParent(window.location, trailingSlash, count2);
    if (parentUrl !== null) {
      window.location.href = parentUrl.href;
    }
  }
  function urlmodify(mode2, ...args2) {
    const newUrl = urlmodify_js(mode2, ...args2);
    if (newUrl && newUrl !== window.location.href) {
      window.location.replace(newUrl);
    }
  }
  function urlmodify_js(mode2, ...args2) {
    let oldUrl;
    let newmode;
    if (mode2.slice(-1) == "u") {
      oldUrl = new URL(args2.pop());
      newmode = mode2.slice(0, -1);
    } else {
      oldUrl = new URL(window.location.href);
      newmode = mode2;
    }
    let newUrl;
    switch (newmode) {
      case "-t":
        if (args2.length !== 2) {
          throw new Error("Text replacement needs 2 arguments:<old> <new>");
        }
        newUrl = oldUrl.href.replace(args2[0], args2[1]);
        break;
      case "-r":
        if (args2.length < 2 || args2.length > 3) {
          throw new Error("RegExp replacement takes 2 or 3 arguments: <regexp> <new> [flags]");
        }
        if (args2[2] && args2[2].search(/^[gi]+$/) === -1) {
          throw new Error("RegExp replacement flags can only include 'g', 'i', Got '" + args2[2] + "'");
        }
        const regexp = new RegExp(args2[0], args2[2]);
        newUrl = oldUrl.href.replace(regexp, args2[1]);
        break;
      case "-s":
        if (args2.length !== 2) {
          throw new Error("Query setting needs 2 arguments:<query> <value>");
        }
        newUrl = setQueryValue(oldUrl, args2[0], args2[1]);
        break;
      case "-q":
        if (args2.length !== 2) {
          throw new Error("Query replacement needs 2 arguments:<query> <new_val>");
        }
        newUrl = replaceQueryValue(oldUrl, args2[0], args2[1]);
        break;
      case "-Q":
        if (args2.length !== 1) {
          throw new Error("Query deletion needs 1 argument:<query>");
        }
        newUrl = deleteQuery(oldUrl, args2[0]);
        break;
      case "-g":
        if (args2.length !== 2) {
          throw new Error("URL path grafting needs 2 arguments:<graft point> <new path tail>");
        }
        newUrl = graftUrlPath(oldUrl, args2[1], Number(args2[0]));
        break;
    }
    return newUrl;
  }
  async function geturlsforlinks(reltype = "rel", rel) {
    const elems = document.querySelectorAll("link[" + reltype + "='" + rel + "']");
    if (elems)
      return Array.prototype.map.call(elems, (x) => x.href);
    return [];
  }
  async function zoom(level = 0, rel = "false", tabId = "auto") {
    logger12.debug("shimming excmd zoom from content to background");
    return message(
      "excmd_background",
      "zoom",
      level,
      rel,
      tabId
    );
  }
  async function readerold() {
    logger12.debug("shimming excmd readerold from content to background");
    return message(
      "excmd_background",
      "readerold"
    );
  }
  async function loadaucmds(cmdType) {
    const aucmds = await getAsync("autocmds", cmdType);
    if (!aucmds)
      return;
    const ausites = Object.keys(aucmds);
    const aukeyarr = ausites.filter((e2) => window.document.location.href.search(e2) >= 0);
    const owntab = await ownTab();
    const replacements = {
      TRI_FIRED_MOZ_TABID: owntab.id,
      TRI_FIRED_TRI_TABINDEX: owntab.index + 1,
      TRI_FIRED_MOZ_WINID: owntab.windowId,
      TRI_FIRED_TRI_WININDEX: await ownWinTriIndex(),
      TRI_FIRED_MOZ_OPENERTABID: owntab.openerTabId,
      TRI_FIRED_ACTIVE: owntab.active,
      TRI_FIRED_AUDIBLE: owntab.audible,
      TRI_FIRED_MUTED: owntab.mutedInfo.muted,
      TRI_FIRED_DISCARDED: owntab.discarded,
      TRI_FIRED_HEIGHT: owntab.height,
      TRI_FIRED_WIDTH: owntab.width,
      TRI_FIRED_HIDDEN: owntab.hidden,
      TRI_FIRED_INCOGNITO: owntab.incognito,
      TRI_FIRED_ISARTICLE: owntab.isArticle,
      TRI_FIRED_LASTACCESSED: owntab.lastAccessed,
      TRI_FIRED_PINNED: owntab.pinned,
      TRI_FIRED_TITLE: owntab.title,
      TRI_FIRED_URL: owntab.url
    };
    for (const aukey of aukeyarr) {
      for (const [k, v] of Object.entries(replacements)) {
        aucmds[aukey] = aucmds[aukey].replace(k, v);
      }
      try {
        autocmd_logger.debug(`${cmdType} matched ${aukey}: ${aucmds[aukey]}`);
        await acceptExCmd(aucmds[aukey]);
      } catch (e2) {
        autocmd_logger.error(e2.toString());
      }
    }
  }
  function focusinput(nth3) {
    let inputToFocus = null;
    let fallbackToNumeric = true;
    if (nth3 === "-l") {
      if (getLastUsedInput()) {
        inputToFocus = getLastUsedInput();
      } else {
        inputToFocus = getElemsBySelector(INPUTTAGS_selectors, [isSubstantial])[0];
      }
    } else if (nth3 === "-n" || nth3 === "-N") {
      const inputs = getElemsBySelector(INPUTTAGS_selectors, [isSubstantial]);
      if (inputs.length) {
        let index2 = inputs.indexOf(getLastUsedInput());
        if (getLastUsedInput()) {
          if (nth3 === "-n") {
            index2++;
          } else {
            index2--;
          }
          index2 = index2.mod(inputs.length);
        } else {
          index2 = 0;
        }
        inputToFocus = inputs[index2];
      }
    } else if (nth3 === "-p") {
      fallbackToNumeric = false;
      const inputs = getElemsBySelector(INPUTPASSWORD_selectors, [isSubstantial]);
      if (inputs.length) {
        inputToFocus = inputs[0];
      }
    } else if (nth3 === "-b") {
      const inputs = getElemsBySelector(INPUTTAGS_selectors, [isSubstantial]);
      inputs.sort(compareElementArea);
      inputToFocus = inputs[inputs.length - 1];
    }
    if ((!inputToFocus || !document.contains(inputToFocus)) && fallbackToNumeric) {
      const index2 = isNaN(nth3) ? 0 : nth3;
      inputToFocus = getNthElement(INPUTTAGS_selectors, index2, [isSubstantial]);
    }
    if (inputToFocus) {
      focus(inputToFocus);
      if (get("gimode") === "nextinput" && contentState.mode !== "input") {
        contentState.mode = "input";
      }
    }
  }
  async function changelistjump() {
    logger12.debug("shimming excmd changelistjump from content to background");
    return message(
      "excmd_background",
      "changelistjump"
    );
  }
  function focusbyid(id2) {
    document.getElementById(id2).focus();
  }
  async function tabnext(increment = 1) {
    logger12.debug("shimming excmd tabnext from content to background");
    return message(
      "excmd_background",
      "tabnext",
      increment
    );
  }
  async function tabnext_gt(index2) {
    logger12.debug("shimming excmd tabnext_gt from content to background");
    return message(
      "excmd_background",
      "tabnext_gt",
      index2
    );
  }
  async function tabprev(increment = 1) {
    logger12.debug("shimming excmd tabprev from content to background");
    return message(
      "excmd_background",
      "tabprev",
      increment
    );
  }
  async function tabpush(windowId) {
    logger12.debug("shimming excmd tabpush from content to background");
    return message(
      "excmd_background",
      "tabpush",
      windowId
    );
  }
  async function tabaudio() {
    logger12.debug("shimming excmd tabaudio from content to background");
    return message(
      "excmd_background",
      "tabaudio"
    );
  }
  async function winmerge(...windowIds) {
    logger12.debug("shimming excmd winmerge from content to background");
    return message(
      "excmd_background",
      "winmerge",
      ...windowIds
    );
  }
  async function tabgrab(id2) {
    logger12.debug("shimming excmd tabgrab from content to background");
    return message(
      "excmd_background",
      "tabgrab",
      id2
    );
  }
  async function tabopen(...addressarr) {
    logger12.debug("shimming excmd tabopen from content to background");
    return message(
      "excmd_background",
      "tabopen",
      ...addressarr
    );
  }
  async function tabopenwait(...addressarr) {
    logger12.debug("shimming excmd tabopenwait from content to background");
    return message(
      "excmd_background",
      "tabopenwait",
      ...addressarr
    );
  }
  function tabqueue(...addresses) {
    logger12.debug("shimming excmd tabqueue from content to background");
    return message(
      "excmd_background",
      "tabqueue",
      ...addresses
    );
  }
  async function tabonly() {
    logger12.debug("shimming excmd tabonly from content to background");
    return message(
      "excmd_background",
      "tabonly"
    );
  }
  async function tabduplicate(index2) {
    logger12.debug("shimming excmd tabduplicate from content to background");
    return message(
      "excmd_background",
      "tabduplicate",
      index2
    );
  }
  async function tabdetach(index2) {
    logger12.debug("shimming excmd tabdetach from content to background");
    return message(
      "excmd_background",
      "tabdetach",
      index2
    );
  }
  async function fullscreen() {
    logger12.debug("shimming excmd fullscreen from content to background");
    return message(
      "excmd_background",
      "fullscreen"
    );
  }
  async function tabclose(...indexes) {
    logger12.debug("shimming excmd tabclose from content to background");
    return message(
      "excmd_background",
      "tabclose",
      ...indexes
    );
  }
  async function tabcloseallto(side) {
    logger12.debug("shimming excmd tabcloseallto from content to background");
    return message(
      "excmd_background",
      "tabcloseallto",
      side
    );
  }
  async function undo(item = "recent") {
    logger12.debug("shimming excmd undo from content to background");
    return message(
      "excmd_background",
      "undo",
      item
    );
  }
  async function tabmove(index2 = "$") {
    logger12.debug("shimming excmd tabmove from content to background");
    return message(
      "excmd_background",
      "tabmove",
      index2
    );
  }
  async function tabsort(...callbackchunks) {
    logger12.debug("shimming excmd tabsort from content to background");
    return message(
      "excmd_background",
      "tabsort",
      ...callbackchunks
    );
  }
  async function pin() {
    logger12.debug("shimming excmd pin from content to background");
    return message(
      "excmd_background",
      "pin"
    );
  }
  async function mute(...muteArgs) {
    logger12.debug("shimming excmd mute from content to background");
    return message(
      "excmd_background",
      "mute",
      ...muteArgs
    );
  }
  async function winopen(...args2) {
    logger12.debug("shimming excmd winopen from content to background");
    return message(
      "excmd_background",
      "winopen",
      ...args2
    );
  }
  async function winclose(...ids) {
    logger12.debug("shimming excmd winclose from content to background");
    return message(
      "excmd_background",
      "winclose",
      ...ids
    );
  }
  async function wintitle(...title) {
    logger12.debug("shimming excmd wintitle from content to background");
    return message(
      "excmd_background",
      "wintitle",
      ...title
    );
  }
  async function qall() {
    logger12.debug("shimming excmd qall from content to background");
    return message(
      "excmd_background",
      "qall"
    );
  }
  async function sidebaropen(...urllike) {
    logger12.debug("shimming excmd sidebaropen from content to background");
    return message(
      "excmd_background",
      "sidebaropen",
      ...urllike
    );
  }
  async function jsua() {
    logger12.debug("shimming excmd jsua from content to background");
    return message(
      "excmd_background",
      "jsua"
    );
  }
  async function sidebartoggle() {
    logger12.debug("shimming excmd sidebartoggle from content to background");
    return message(
      "excmd_background",
      "sidebartoggle"
    );
  }
  async function containerclose(name) {
    logger12.debug("shimming excmd containerclose from content to background");
    return message(
      "excmd_background",
      "containerclose",
      name
    );
  }
  async function containercreate(name, color, icon) {
    logger12.debug("shimming excmd containercreate from content to background");
    return message(
      "excmd_background",
      "containercreate",
      name,
      color,
      icon
    );
  }
  async function containerdelete(name) {
    logger12.debug("shimming excmd containerdelete from content to background");
    return message(
      "excmd_background",
      "containerdelete",
      name
    );
  }
  async function containerupdate(name, uname, ucolor, uicon) {
    logger12.debug("shimming excmd containerupdate from content to background");
    return message(
      "excmd_background",
      "containerupdate",
      name,
      uname,
      ucolor,
      uicon
    );
  }
  async function viewcontainers() {
    const containers = await browserBg.contextualIdentities.query({});
    jsonview(JSON.stringify(containers));
  }
  async function recontain(containerName) {
    logger12.debug("shimming excmd recontain from content to background");
    return message(
      "excmd_background",
      "recontain",
      containerName
    );
  }
  function setContentStateGroup(name) {
    contentState.group = name;
  }
  async function tgroupcreate(name) {
    logger12.debug("shimming excmd tgroupcreate from content to background");
    return message(
      "excmd_background",
      "tgroupcreate",
      name
    );
  }
  async function tgroupswitch(name) {
    logger12.debug("shimming excmd tgroupswitch from content to background");
    return message(
      "excmd_background",
      "tgroupswitch",
      name
    );
  }
  async function tgrouplast() {
    logger12.debug("shimming excmd tgrouplast from content to background");
    return message(
      "excmd_background",
      "tgrouplast"
    );
  }
  async function tgrouprename(name) {
    logger12.debug("shimming excmd tgrouprename from content to background");
    return message(
      "excmd_background",
      "tgrouprename",
      name
    );
  }
  async function tgroupclose(name) {
    logger12.debug("shimming excmd tgroupclose from content to background");
    return message(
      "excmd_background",
      "tgroupclose",
      name
    );
  }
  async function tgroupmove(name) {
    logger12.debug("shimming excmd tgroupmove from content to background");
    return message(
      "excmd_background",
      "tgroupmove",
      name
    );
  }
  async function tgroupabort() {
    logger12.debug("shimming excmd tgroupabort from content to background");
    return message(
      "excmd_background",
      "tgroupabort"
    );
  }
  function version() {
    logger12.debug("shimming excmd version from content to background");
    return message(
      "excmd_background",
      "version"
    );
  }
  function mode(mode2) {
    if (mode2 === "hint") {
      hint();
    } else {
      contentState.mode = mode2;
    }
  }
  async function repeat3(n2 = 1, ...exstr) {
    logger12.debug("shimming excmd repeat from content to background");
    return message(
      "excmd_background",
      "repeat",
      n2,
      ...exstr
    );
  }
  async function composite(...cmds) {
    try {
      return cmds.join(" ").split(";").reduce(async (prev_pipeline, cmd) => {
        await prev_pipeline;
        const cmds2 = cmd.split("|");
        const [fn, args2] = parser(cmds2[0], ALL_EXCMDS);
        const first_value = fn.call({}, ...args2);
        return cmds2.slice(1).reduce(async (pipedValue, cmd2) => {
          const [fn2, args3] = parser(cmd2, ALL_EXCMDS);
          return fn2.call({}, ...args3, await pipedValue);
        }, first_value);
      }, null);
    } catch (e2) {
      logger12.error(e2);
    }
  }
  async function shellescape(...quoteme) {
    const str2 = quoteme.join(" ");
    const os = (await browserBg.runtime.getPlatformInfo()).os;
    if (os === "win") {
      return windows_cmd(str2);
    } else {
      return sh(str2);
    }
  }
  async function escapehatch() {
    logger12.debug("shimming excmd escapehatch from content to background");
    return message(
      "excmd_background",
      "escapehatch"
    );
  }
  function sleep3(time_ms) {
    return new Promise((resolve2) => setTimeout(resolve2, time_ms));
  }
  function showcmdline(focus3 = true) {
    const hidehover = true;
    show(hidehover);
    let done = Promise.resolve();
    if (focus3) {
      focus2();
      done = messageOwnTab("commandline_frame", "focus");
    }
    return done;
  }
  function hidecmdline() {
    hide_and_blur();
  }
  function fillcmdline(...strarr) {
    const str2 = strarr.join(" ");
    showcmdline();
    return messageOwnTab("commandline_frame", "fillcmdline", [str2]);
  }
  function fillcmdline_notrail(...strarr) {
    const str2 = strarr.join(" ");
    showcmdline();
    return messageOwnTab("commandline_frame", "fillcmdline", [str2, false]);
  }
  function fillcmdline_nofocus(...strarr) {
    showcmdline(false);
    return messageOwnTab("commandline_frame", "fillcmdline", [strarr.join(" "), false, false]);
  }
  async function fillcmdline_tmp(ms, ...strarr) {
    const str2 = strarr.join(" ");
    showcmdline(false);
    messageOwnTab("commandline_frame", "fillcmdline", [strarr.join(" "), false, false]);
    return new Promise(
      (resolve2) => setTimeout(async () => {
        if (await messageOwnTab("commandline_frame", "getContent", []) === str2) {
          hide_and_blur();
          resolve2(messageOwnTab("commandline_frame", "clear", [true]));
        }
        resolve2();
      }, ms)
    );
  }
  function yank(...content) {
    logger12.debug("shimming excmd yank from content to background");
    return message(
      "excmd_background",
      "yank",
      ...content
    );
  }
  async function getclip(from) {
    logger12.debug("shimming excmd getclip from content to background");
    return message(
      "excmd_background",
      "getclip",
      from
    );
  }
  async function clipboard2(excmd = "open", ...toYank) {
    logger12.debug("shimming excmd clipboard from content to background");
    return message(
      "excmd_background",
      "clipboard",
      excmd,
      ...toYank
    );
  }
  async function yankimage(url) {
    logger12.debug("shimming excmd yankimage from content to background");
    return message(
      "excmd_background",
      "yankimage",
      url
    );
  }
  async function tab(...id2) {
    logger12.debug("shimming excmd tab from content to background");
    return message(
      "excmd_background",
      "tab",
      ...id2
    );
  }
  async function taball(...id2) {
    logger12.debug("shimming excmd taball from content to background");
    return message(
      "excmd_background",
      "taball",
      ...id2
    );
  }
  function tabcurrentrename(...name) {
    document.title = name.join(" ");
  }
  async function tabrename(index2, ...name) {
    logger12.debug("shimming excmd tabrename from content to background");
    return message(
      "excmd_background",
      "tabrename",
      index2,
      ...name
    );
  }
  async function tab_helper(interactive, anyWindow, ...key) {
    logger12.debug("shimming excmd tab_helper from content to background");
    return message(
      "excmd_background",
      "tab_helper",
      interactive,
      anyWindow,
      ...key
    );
  }
  function command(name, ...definition) {
    logger12.debug("shimming excmd command from content to background");
    return message(
      "excmd_background",
      "command",
      name,
      ...definition
    );
  }
  function comclear(name) {
    logger12.debug("shimming excmd comclear from content to background");
    return message(
      "excmd_background",
      "comclear",
      name
    );
  }
  async function bind3(...args2) {
    logger12.debug("shimming excmd bind from content to background");
    return message(
      "excmd_background",
      "bind",
      ...args2
    );
  }
  function bindshow(...args2) {
    logger12.debug("shimming excmd bindshow from content to background");
    return message(
      "excmd_background",
      "bindshow",
      ...args2
    );
  }
  async function bindwizard(...args2) {
    let mode2 = "normal";
    if (args2.length && args2[0].startsWith("--mode=")) {
      mode2 = args2.shift().replace("--mode=", "");
    }
    return gobble("<CR>", `fillcmdline_notrail bind --mode=${mode2}`, ...args2);
  }
  function bindurl(pattern, mode2, keys4, ...excmd) {
    logger12.debug("shimming excmd bindurl from content to background");
    return message(
      "excmd_background",
      "bindurl",
      pattern,
      mode2,
      keys4,
      ...excmd
    );
  }
  function keymap(source2, target) {
    logger12.debug("shimming excmd keymap from content to background");
    return message(
      "excmd_background",
      "keymap",
      source2,
      target
    );
  }
  function searchsetkeyword() {
    logger12.debug("shimming excmd searchsetkeyword from content to background");
    return message(
      "excmd_background",
      "searchsetkeyword"
    );
  }
  function validateSetArgs(key, values3) {
    const target = key.split(".");
    let value;
    const file = everything.getFile("src/lib/config.ts");
    const default_config2 = file.getClass("default_config");
    const md = default_config2.getMember(target[0]);
    if (md !== void 0) {
      const strval = values3.join(" ");
      if (md.type.kind === "object" && target.length > 1) {
        value = md.type.convertMember(target.slice(1), strval);
      } else {
        value = md.type.convert(strval);
      }
    } else {
      logger12.warning("Could not fetch setting metadata. Falling back to type of current value.");
      const currentValue = get(...target);
      if (Array.isArray(currentValue)) {
      } else if (currentValue === void 0 || typeof currentValue === "string") {
        value = values3.join(" ");
      } else {
        throw new Error("Unsupported setting type!");
      }
    }
    target.push(value);
    return target;
  }
  function seturl(pattern, key, ...values3) {
    if (values3.length === 0 && key) {
      values3 = [key];
      key = pattern;
      pattern = window.location.href;
    }
    if (!pattern || !key || !values3.length) {
      throw new Error("seturl syntax: [pattern] key value");
    }
    return setURL(pattern, ...validateSetArgs(key, values3));
  }
  function setmode(mode2, key, ...values3) {
    if (!mode2 || !key || !values3.length) {
      throw new Error("seturl syntax: mode key value");
    }
    if (key !== "allowautofocus")
      throw new Error("Setting '" + key + "' not supported with setmode");
    return set3("modesubconfigs", mode2, ...validateSetArgs(key, values3));
  }
  function set4(key, ...values3) {
    logger12.debug("shimming excmd set from content to background");
    return message(
      "excmd_background",
      "set",
      key,
      ...values3
    );
  }
  function firefoxsyncpull() {
    logger12.debug("shimming excmd firefoxsyncpull from content to background");
    return message(
      "excmd_background",
      "firefoxsyncpull"
    );
  }
  function firefoxsyncpush() {
    logger12.debug("shimming excmd firefoxsyncpush from content to background");
    return message(
      "excmd_background",
      "firefoxsyncpush"
    );
  }
  function autocmd(event, url, ...excmd) {
    logger12.debug("shimming excmd autocmd from content to background");
    return message(
      "excmd_background",
      "autocmd",
      event,
      url,
      ...excmd
    );
  }
  function autocontain(...args2) {
    logger12.debug("shimming excmd autocontain from content to background");
    return message(
      "excmd_background",
      "autocontain",
      ...args2
    );
  }
  function proxyadd(name, url) {
    logger12.debug("shimming excmd proxyadd from content to background");
    return message(
      "excmd_background",
      "proxyadd",
      name,
      url
    );
  }
  function proxyremove(name) {
    logger12.debug("shimming excmd proxyremove from content to background");
    return message(
      "excmd_background",
      "proxyremove",
      name
    );
  }
  function autocmddelete(event, url) {
    logger12.debug("shimming excmd autocmddelete from content to background");
    return message(
      "excmd_background",
      "autocmddelete",
      event,
      url
    );
  }
  function blacklistadd(url) {
    logger12.debug("shimming excmd blacklistadd from content to background");
    return message(
      "excmd_background",
      "blacklistadd",
      url
    );
  }
  async function unbind(...args2) {
    logger12.debug("shimming excmd unbind from content to background");
    return message(
      "excmd_background",
      "unbind",
      ...args2
    );
  }
  async function unbindurl(pattern, mode2, keys4) {
    logger12.debug("shimming excmd unbindurl from content to background");
    return message(
      "excmd_background",
      "unbindurl",
      pattern,
      mode2,
      keys4
    );
  }
  async function reset3(mode2, key) {
    logger12.debug("shimming excmd reset from content to background");
    return message(
      "excmd_background",
      "reset",
      mode2,
      key
    );
  }
  async function reseturl(pattern, mode2, key) {
    logger12.debug("shimming excmd reseturl from content to background");
    return message(
      "excmd_background",
      "reseturl",
      pattern,
      mode2,
      key
    );
  }
  async function sanitise(...args2) {
    logger12.debug("shimming excmd sanitise from content to background");
    return message(
      "excmd_background",
      "sanitise",
      ...args2
    );
  }
  async function quickmark(key, ...addressarr) {
    logger12.debug("shimming excmd quickmark from content to background");
    return message(
      "excmd_background",
      "quickmark",
      key,
      ...addressarr
    );
  }
  function get2(...keys4) {
    logger12.debug("shimming excmd get from content to background");
    return message(
      "excmd_background",
      "get",
      ...keys4
    );
  }
  function viewconfig(...key) {
    logger12.debug("shimming excmd viewconfig from content to background");
    return message(
      "excmd_background",
      "viewconfig",
      ...key
    );
  }
  async function jsonview(...json) {
    logger12.debug("shimming excmd jsonview from content to background");
    return message(
      "excmd_background",
      "jsonview",
      ...json
    );
  }
  function unseturl(pattern, key) {
    if (!key) {
      key = pattern;
      pattern = window.location.href;
    }
    return unsetURL(pattern, key.split("."));
  }
  function unsetmode(mode2, key) {
    return unset("modesubconfigs", mode2, ...key.split("."));
  }
  function unset2(...keys4) {
    logger12.debug("shimming excmd unset from content to background");
    return message(
      "excmd_background",
      "unset",
      ...keys4
    );
  }
  function setnull(...keys4) {
    logger12.debug("shimming excmd setnull from content to background");
    return message(
      "excmd_background",
      "setnull",
      ...keys4
    );
  }
  async function hint(...args) {
    const config = HintConfig.parse(args);
    config.printWarnings(logger12);
    const hintTabOpen = async (href, active = !config.rapid) => {
      const containerId = await activeTabContainerId();
      if (containerId) {
        return openInNewTab(href, {
          active,
          related: true,
          cookieStoreId: containerId
        });
      } else {
        return openInNewTab(href, {
          active,
          related: true
        });
      }
    };
    return new Promise((resolve, reject) => {
      const hintables = config.hintables();
      const action = config.callback ? eval(config.callback) : (elem) => {
        if (config.pipeAttribute !== null) {
          return elem[config.pipeAttribute];
        }
        if (config.excmd) {
          if (elem.href) {
            run_exstr(config.excmd + " " + elem.href);
            return elem;
          }
          return;
        }
        switch (config.openMode) {
          case "-h" /* Highlight */:
            const r = document.createRange();
            r.setStart(elem, 0);
            r.setEnd(elem, 1);
            const s = document.getSelection();
            s.addRange(r);
            return elem;
          case "-i" /* Images */:
          case "-I" /* ImagesTab */:
            const src = elem.getAttribute("src");
            if (src) {
              if (config.openMode === "-I" /* ImagesTab */) {
                hintTabOpen(new URL(src, window.location.href).href);
              } else {
                open(new URL(src, window.location.href).href);
              }
              return elem;
            }
            return;
          case "-k" /* Kill */:
            elem.remove();
            return elem;
          case "-K" /* KillTridactyl */:
            elem.classList.add("TridactylKilledElem");
            KILL_STACK.push(elem);
            return elem;
          case "-s" /* SaveResource */:
          case "-S" /* SaveImage */:
          case "-a" /* SaveAsResource */:
          case "-A" /* SaveAsImage */:
            const saveAs = config.openMode === "-a" /* SaveAsResource */ || config.openMode === "-A" /* SaveAsImage */;
            const attr = config.openMode === "-S" /* SaveImage */ || config.openMode === "-A" /* SaveAsImage */ ? "src" : "href";
            message("download_background", "downloadUrl", new URL(elem[attr], window.location.href).href, saveAs);
            return elem;
          case "-z" /* Scroll */:
            elem.scrollIntoView(true);
            return elem;
          case "-;" /* ScrollFocus */:
            let tabindexAdded = false;
            if (elem instanceof HTMLImageElement && !elem.getAttribute("tabindex")) {
              elem.setAttribute("tabindex", "-1");
              tabindexAdded = true;
            }
            elem.focus();
            setCurrentFocus(elem);
            if (tabindexAdded)
              elem.removeAttribute("tabindex");
            return elem;
          case "-r" /* TTSRead */:
            readText(elem.textContent);
            return elem;
          case "-P" /* YankAlt */:
            return elem.title ? elem.title : elem.alt;
          case "-#" /* YankAnchor */:
            const anchorUrl = new URL(window.location.href);
            anchorUrl.hash = elem.id || elem.name;
            return anchorUrl.href;
          case "-y" /* YankLink */:
            if (elem.href) {
              return elem.href;
            }
            return;
          case "-p" /* YankText */:
            return elem.textContent;
        }
        if (elem.href) {
          elem.focus();
          switch (config.openMode) {
            case "" /* Default */:
              simulateClick(elem);
              break;
            case "-t" /* Tab */:
              hintTabOpen(elem.href, true).catch(() => simulateClick(elem, 1 /* NewTab */));
              break;
            case "-b" /* BackgroundTab */:
              hintTabOpen(elem.href, false).catch(() => simulateClick(elem, 2 /* NewBackgroundTab */));
              break;
            case "-w" /* Window */:
              openInNewWindow({ url: new URL(elem.href, window.location.href).href });
              break;
            case "-wp" /* WindowPrivate */:
              openInNewWindow({ url: elem.href, incognito: true });
              break;
          }
        } else {
          if (config.openMode === "-wp" /* WindowPrivate */) {
            return;
          } else {
            elem.focus();
            simulateClick(elem);
          }
        }
        return elem;
      };
      if (config.immediate) {
        const results = [];
        for (const elements of hintables) {
          for (const hintable of elements.elements) {
            try {
              results.push(action(hintable));
            } catch (error) {
              logger12.error(error);
            }
          }
        }
        resolve(results);
      } else {
        hintPage(hintables, action, resolve, reject, config.rapid);
      }
    }).then((value) => {
      if (config.isYank) {
        if (Array.isArray(value)) {
          yank(value.join("\n"));
        } else {
          yank(value);
        }
      }
      return value;
    });
  }
  function rot132(n2) {
    if (n2 === void 0)
      n2 = 13;
    const body = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: () => NodeFilter.FILTER_ACCEPT });
    while (body.nextNode()) {
      const t2 = body.currentNode.textContent;
      body.currentNode.textContent = rot13_helper(t2, n2);
    }
  }
  function jumble2() {
    const body = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: () => NodeFilter.FILTER_ACCEPT });
    while (body.nextNode()) {
      const t2 = body.currentNode.textContent;
      body.currentNode.textContent = jumble_helper(t2);
    }
  }
  function run_exstr(...commands) {
    return message("controller_background", "acceptExCmd", commands.join(""));
  }
  async function gobble(numKeysOrTerminator, endCmd, ...args2) {
    return init3(numKeysOrTerminator, endCmd, ...args2);
  }
  async function getGotoSelectors() {
    const result = [];
    let level = 1;
    for (const selector of get("gotoselector").split(",")) {
      result.push(
        ...Array.from(document.querySelectorAll(selector)).filter((e2) => e2.innerText).map((e2) => {
          var _a;
          return { level, y: (_a = e2.getClientRects()[0]) == null ? void 0 : _a.y, title: e2.innerText, selector: getSelector(e2) };
        }).filter((e2) => e2.y !== void 0)
      );
      level += 1;
    }
    return result;
  }
  async function goto(...selector) {
    const element = document.querySelector(selector.join(" "));
    if (element) {
      element.scrollIntoView();
    }
  }
  async function nmode(mode2, n2, ...endexArr) {
    const endex = endexArr.join(" ") || "mode ignore";
    return init4(endex, mode2, n2);
  }
  function tssReadFromCss(selector) {
    const elems = getElemsBySelector(selector, []);
    elems.forEach((e2) => {
      readText(e2.textContent);
    });
  }
  async function ttsread(mode2, ...args2) {
    if (mode2 === "-t") {
      readText(args2.join(" "));
    } else if (mode2 === "-c") {
      if (args2.length > 0) {
        tssReadFromCss(args2[0]);
      } else {
        throw new Error("Error: no CSS selector supplied");
      }
    } else {
      throw new Error("Unknown mode for ttsread command: " + mode2);
    }
  }
  async function ttsvoices() {
    logger12.debug("shimming excmd ttsvoices from content to background");
    return message(
      "excmd_background",
      "ttsvoices"
    );
  }
  async function ttscontrol(action2) {
    if (action2 !== "stop") {
      throw new Error("Unknown text-to-speech action: " + action2);
    }
    return doAction(action2);
  }
  async function perfdump(...filters) {
    logger12.debug("shimming excmd perfdump from content to background");
    return message(
      "excmd_background",
      "perfdump",
      ...filters
    );
  }
  async function perfhistogram(...filters) {
    logger12.debug("shimming excmd perfhistogram from content to background");
    return message(
      "excmd_background",
      "perfhistogram",
      ...filters
    );
  }
  async function bmark(url, ...titlearr) {
    logger12.debug("shimming excmd bmark from content to background");
    return message(
      "excmd_background",
      "bmark",
      url,
      ...titlearr
    );
  }
  function echo(...str2) {
    logger12.debug("shimming excmd echo from content to background");
    return message(
      "excmd_background",
      "echo",
      ...str2
    );
  }
  async function js_helper(str) {
    let JS_ARG = null;
    let JS_ARGS = [];
    let jsContent = null;
    let doSource = false;
    let fromRC = false;
    let separator = null;
    while (true) {
      const flag = str[0];
      if (flag == "-p") {
        JS_ARG = str.pop();
        str.shift();
        continue;
      }
      if (flag == "-s") {
        doSource = true;
        str.shift();
        continue;
      }
      if (flag == "-r") {
        doSource = true;
        fromRC = true;
        str.shift();
        continue;
      }
      const match3 = /-d(.)/.exec(flag);
      if (match3 !== null) {
        separator = match3[1];
        str.shift();
        continue;
      }
      break;
    }
    if (separator !== null) {
      JS_ARGS = str.join(" ").split(separator)[1].split(" ");
      jsContent = str.join(" ").split(separator)[0];
    } else {
      jsContent = str.join(" ");
    }
    if (doSource) {
      let sourcePath = jsContent;
      if (fromRC) {
        const sep = "/";
        const rcPath = (await getrcpath("unix")).split(sep).slice(0, -1);
        sourcePath = [...rcPath, sourcePath].join(sep);
      }
      const file = await read(sourcePath);
      if (file.code !== 0)
        throw new Error("Couldn't read js file " + sourcePath);
      jsContent = file.content;
    }
    return eval(jsContent);
  }
  async function js2(...str2) {
    return js_helper(str2);
  }
  async function jsb(...str2) {
    logger12.debug("shimming excmd jsb from content to background");
    return message(
      "excmd_background",
      "jsb",
      ...str2
    );
  }
  async function issue() {
    const newIssueUrl = "https://github.com/tridactyl/tridactyl/issues/new";
    if (window.location.href !== newIssueUrl) {
      return tabopen(newIssueUrl);
    }
    const textarea = document.getElementById("issue_body");
    if (!(textarea instanceof HTMLTextAreaElement)) {
      logger12.warning("issue(): Couldn't find textarea element in github issue page.");
      return;
    }
    let template2 = await fetch(browser.runtime.getURL("issue_template.md")).then((resp) => resp.body.getReader()).then((reader2) => reader2.read()).then((r) => new TextDecoder("utf-8").decode(r.value));
    if (textarea.value !== template2) {
      logger12.debug("issue(): Textarea value differs from template, exiting early.");
      return;
    }
    const platform = await browserBg.runtime.getPlatformInfo();
    template2 = template2.replace("-   Operating system:\n", "");
    template2 = `Operating system: ${platform.os}
` + template2;
    const info = await browserBg.runtime.getBrowserInfo();
    template2 = template2.replace("-   Firefox version (Top right menu > Help > About Firefox):\n\n", "");
    template2 = `Firefox version: ${info.vendor} ${info.name} ${info.version}
` + template2;
    template2 = template2.replace("-   Tridactyl version (`:version`):\n\n", "");
    template2 = `Tridactyl version: ${TRI_VERSION}
` + template2;
    textarea.value = template2;
  }
  async function text2qr(...args2) {
    let text = null;
    let isParsed = false;
    let openMode = null;
    let timeout = "-1";
    while (!isParsed) {
      switch (args2[0]) {
        case "--window":
          openMode = winopen;
          args2.shift();
          break;
        case "--popup":
          openMode = (...args3) => winopen("-popup", ...args3);
          args2.shift();
          break;
        case "--current":
          openMode = open;
          args2.shift();
          break;
        case "--timeout":
          args2.shift();
          timeout = args2[0];
          args2.shift();
          break;
        default:
          isParsed = true;
          break;
      }
    }
    if (!openMode)
      openMode = tabopen;
    text = args2.join(" ").trim();
    if (!text || text.length == 0) {
      text = window.location.href;
    }
    const urlEncodedText = encodeURIComponent(text);
    const url = new URL(browser.runtime.getURL("static/qrcode.html"));
    url.searchParams.append("data", btoa(urlEncodedText));
    url.searchParams.append("timeout", timeout);
    openMode(url.href);
  }
  async function updatecheck(source2 = "manual") {
    logger12.debug("shimming excmd updatecheck from content to background");
    return message(
      "excmd_background",
      "updatecheck",
      source2
    );
  }
  async function keyfeed(mapstr) {
    const keyseq = mapstrToKeyseq(mapstr);
    for (const k of keyseq) {
      generator.next(k);
      await sleep3(10);
    }
  }
  async function extoptions(...optionNameArgs) {
    logger12.debug("shimming excmd extoptions from content to background");
    return message(
      "excmd_background",
      "extoptions",
      ...optionNameArgs
    );
  }
  async function readerurl() {
    document.querySelectorAll(".TridactylStatusIndicator").forEach((ind) => ind.parentNode.removeChild(ind));
    const article = new import_readability.Readability(document.cloneNode(true)).parse();
    article["link"] = window.location.href;
    return browser.runtime.getURL("static/reader.html#" + btoa(encodeURIComponent(JSON.stringify(article))));
  }
  async function reader(...args2) {
    switch (args2[0]) {
      case "--old":
        readerold();
        break;
      case "--tab":
        tabopen(await readerurl());
        break;
      case "--window":
        winopen(await readerurl());
        break;
      default:
        open(await readerurl());
        break;
    }
  }
  async function elementunhide() {
    const elem = KILL_STACK.pop();
    elem.className = elem.className.replace("TridactylKilledElem", "");
  }
  var import_readability, ALL_EXCMDS, cmd_params, logger12, TRI_VERSION, JUMPED, JUMP_TIMEOUTID, lineHeight, ABOUT_WHITELIST, sourceElement, autocmd_logger, fullscreenhandler, fullscreenApiIsPrefixed, INPUTTAGS_selectors, INPUTPASSWORD_selectors, KILL_STACK;
  var init_excmds_content_generated = __esm({
    "src/.excmds_content.generated.ts"() {
      "use strict";
      init_messaging();
      init_webext();
      init_state();
      init_state();
      init_state_content();
      init_url_util();
      init_config();
      init_logging();
      init_metadata_generated();
      init_native();
      init_text_to_speech();
      init_exmode();
      init_escape();
      init_hint_util();
      init_hint_util();
      init_arg_util();
      init_controller();
      init_controller_content();
      init_number_clamp();
      init_excmds_content_generated();
      init_commandline_cmds2();
      init_editor2();
      init_dom();
      init_commandline_content();
      init_scrolling();
      init_webext();
      init_editor_utils();
      init_finding();
      init_toys();
      init_hinting();
      init_gobblemode();
      init_nmode();
      init_keyseq();
      init_editor_adapter();
      import_readability = __toESM(require_readability());
      cmd_params = /* @__PURE__ */ new Map();
      logger12 = new Logger("excmd");
      TRI_VERSION = getTriVersion();
      ALL_EXCMDS = {
        "": excmds_content_generated_exports,
        ex: CmdlineCmds2,
        text: EditorCmds2
      };
      cmd_params.set("getNativeVersion", /* @__PURE__ */ new Map([]));
      cmd_params.set("getRssLinks", /* @__PURE__ */ new Map([]));
      cmd_params.set("rssexec", /* @__PURE__ */ new Map([["url", "string"], ["type", "string"], ["...title", "string[]"]]));
      cmd_params.set("fillinput", /* @__PURE__ */ new Map([["selector", "string"], ["...content", "string[]"]]));
      cmd_params.set("getinput", /* @__PURE__ */ new Map([]));
      cmd_params.set("getInputSelector", /* @__PURE__ */ new Map([]));
      cmd_params.set("addTridactylEditorClass", /* @__PURE__ */ new Map([["selector", "string"]]));
      cmd_params.set("removeTridactylEditorClass", /* @__PURE__ */ new Map([["selector", "string"]]));
      cmd_params.set("editor", /* @__PURE__ */ new Map([]));
      cmd_params.set("guiset_quiet", /* @__PURE__ */ new Map([["rule", "string"], ["option", "string"]]));
      cmd_params.set("guiset", /* @__PURE__ */ new Map([["rule", "string"], ["option", "string"]]));
      cmd_params.set("cssparse", /* @__PURE__ */ new Map([["...css", "string[]"]]));
      cmd_params.set("loadtheme", /* @__PURE__ */ new Map([["themename", "string"]]));
      cmd_params.set("unloadtheme", /* @__PURE__ */ new Map([["themename", "string"]]));
      cmd_params.set("colourscheme", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("setpref", /* @__PURE__ */ new Map([["key", "string"], ["...value", "string[]"]]));
      cmd_params.set("removepref", /* @__PURE__ */ new Map([["key", "string"]]));
      cmd_params.set("fixamo_quiet", /* @__PURE__ */ new Map([]));
      cmd_params.set("fixamo", /* @__PURE__ */ new Map([]));
      cmd_params.set("nativeopen", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("exclaim", /* @__PURE__ */ new Map([["...str", "string[]"]]));
      cmd_params.set("exclaim_quiet", /* @__PURE__ */ new Map([["...str", "string[]"]]));
      cmd_params.set("native", /* @__PURE__ */ new Map([]));
      cmd_params.set("nativeinstall", /* @__PURE__ */ new Map([]));
      cmd_params.set("mktridactylrc", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("source", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("source_quiet", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("updatenative", /* @__PURE__ */ new Map([["interactive", "boolean"]]));
      cmd_params.set("restart", /* @__PURE__ */ new Map([]));
      cmd_params.set("saveas", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("jumpnext", /* @__PURE__ */ new Map([["n", "number"]]));
      cmd_params.set("jumpprev", /* @__PURE__ */ new Map([["n", "number"]]));
      cmd_params.set("markjump", /* @__PURE__ */ new Map([["key", "string"]]));
      cmd_params.set("markjumplocal", /* @__PURE__ */ new Map([["key", "string"]]));
      cmd_params.set("markjumpglobal", /* @__PURE__ */ new Map([["key", "string"]]));
      cmd_params.set("markjumpbefore", /* @__PURE__ */ new Map([]));
      cmd_params.set("scrolltab", /* @__PURE__ */ new Map([["tabId", "number"], ["scrollX", "number"], ["scrollY", "number"], ["message", "string"]]));
      cmd_params.set("markadd", /* @__PURE__ */ new Map([["key", "string"]]));
      cmd_params.set("markaddlocal", /* @__PURE__ */ new Map([["key", "string"]]));
      cmd_params.set("markaddglobal", /* @__PURE__ */ new Map([["key", "string"]]));
      document.addEventListener("scroll", addJump, { passive: true });
      document.addEventListener("load", () => curJumps().then(() => jumpprev(0)));
      addTabHistory();
      window.addEventListener("HistoryState", addTabHistory);
      cmd_params.set("unfocus", /* @__PURE__ */ new Map([]));
      cmd_params.set("scrollpx", /* @__PURE__ */ new Map([["a", "number"], ["b", "number"]]));
      cmd_params.set("scrollto", /* @__PURE__ */ new Map([["a", "number | string"], ["b", 'number | "x" | "y" = "y"']]));
      lineHeight = null;
      cmd_params.set("scrollline", /* @__PURE__ */ new Map([["n", "number"], ["mult", "number"]]));
      cmd_params.set("scrollpage", /* @__PURE__ */ new Map([["n", "number"], ["count", "number"]]));
      cmd_params.set("find", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("findnext", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("clearsearchhighlight", /* @__PURE__ */ new Map([]));
      cmd_params.set("findselect", /* @__PURE__ */ new Map([]));
      cmd_params.set("forward", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("back", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("reload", /* @__PURE__ */ new Map([["n", "number"], ["hard", "boolean"]]));
      cmd_params.set("reloadall", /* @__PURE__ */ new Map([["hard", "boolean"]]));
      cmd_params.set("reloadallbut", /* @__PURE__ */ new Map([["hard", "boolean"]]));
      cmd_params.set("reloaddead", /* @__PURE__ */ new Map([["hard", "boolean"]]));
      cmd_params.set("reloadhard", /* @__PURE__ */ new Map([["n", "number"]]));
      ABOUT_WHITELIST = ["about:license", "about:logo", "about:rights", "about:blank"];
      cmd_params.set("open", /* @__PURE__ */ new Map([["...urlarr", "string[]"]]));
      cmd_params.set("bmarks", /* @__PURE__ */ new Map([["opt", "string"], ["...urlarr", "string[]"]]));
      cmd_params.set("open_quiet", /* @__PURE__ */ new Map([["...urlarr", "string[]"]]));
      cmd_params.set("url2args", /* @__PURE__ */ new Map([]));
      cmd_params.set("viewsource", /* @__PURE__ */ new Map([["url", "string"]]));
      cmd_params.set("home", /* @__PURE__ */ new Map([["all", '"false" | "true" = "false"']]));
      cmd_params.set("help", /* @__PURE__ */ new Map([["...helpItems", "string[]"]]));
      cmd_params.set("apropos", /* @__PURE__ */ new Map([["...helpItems", "string[]"]]));
      cmd_params.set("tutor", /* @__PURE__ */ new Map([["newtab", "string"]]));
      cmd_params.set("credits", /* @__PURE__ */ new Map([]));
      cmd_params.set("no_mouse_mode", /* @__PURE__ */ new Map([]));
      cmd_params.set("neo_mouse_mode", /* @__PURE__ */ new Map([]));
      cmd_params.set("snow_mouse_mode", /* @__PURE__ */ new Map([]));
      cmd_params.set("pied_piper_mouse_mode", /* @__PURE__ */ new Map([]));
      cmd_params.set("drawingstart", /* @__PURE__ */ new Map([]));
      cmd_params.set("drawingerasertoggle", /* @__PURE__ */ new Map([]));
      cmd_params.set("mouse_mode", /* @__PURE__ */ new Map([]));
      cmd_params.set("followpage", /* @__PURE__ */ new Map([["rel", '"next" | "prev" = "next"']]));
      cmd_params.set("urlincrement", /* @__PURE__ */ new Map([["count", "number"], ["multiplier", "number"]]));
      cmd_params.set("urlroot", /* @__PURE__ */ new Map([]));
      cmd_params.set("urlparent", /* @__PURE__ */ new Map([["count", "number"]]));
      cmd_params.set("urlmodify", /* @__PURE__ */ new Map([["mode", '"-t" | "-r" | "-s" | "-q" | "-Q" | "-g" | "-tu" | "-ru" | "-su" | "-qu" | "-Qu" | "-gu"'], ["...args", "string[]"]]));
      cmd_params.set("urlmodify_js", /* @__PURE__ */ new Map([["mode", '"-t" | "-r" | "-s" | "-q" | "-Q" | "-g" | "-tu" | "-ru" | "-su" | "-qu" | "-Qu" | "-gu"'], ["...args", "string[]"]]));
      cmd_params.set("geturlsforlinks", /* @__PURE__ */ new Map([["reltype", "string"], ["rel", "string"]]));
      cmd_params.set("zoom", /* @__PURE__ */ new Map([["level", "number"], ["rel", "string"], ["tabId", "string"]]));
      cmd_params.set("readerold", /* @__PURE__ */ new Map([]));
      loadaucmds("DocStart");
      autocmd_logger = new Logger("autocmds");
      window.addEventListener("pagehide", () => loadaucmds("DocEnd"));
      window.addEventListener("DOMContentLoaded", () => {
        loadaucmds("DocLoad");
      });
      window.addEventListener("HistoryState", () => loadaucmds("HistoryState"));
      getAsync("autocmds", "UriChange").then((ausites) => {
        if (!ausites)
          return;
        const aukeyarr = Object.keys(ausites).filter((e2) => window.document.location.href.search(e2) >= 0);
        if (aukeyarr.length > 0) {
          let maybeLoad2 = function() {
            const nowUri = window.document.location.href;
            if (nowUri != currUri) {
              currUri = nowUri;
              loadaucmds("UriChange");
            }
          };
          var maybeLoad = maybeLoad2;
          let currUri = window.document.location.href;
          setInterval(maybeLoad2, 100);
        }
      });
      fullscreenhandler = () => {
        loadaucmds("FullscreenChange");
        if (document.fullscreenElement || document.mozFullScreenElement) {
          loadaucmds("FullscreenEnter");
        } else {
          loadaucmds("FullscreenLeft");
        }
      };
      fullscreenApiIsPrefixed = "mozFullScreenEnabled" in document;
      if (fullscreenApiIsPrefixed) {
        document.addEventListener("mozfullscreenchange", fullscreenhandler);
      } else if ("fullscreenEnabled" in document) {
        document.addEventListener("fullscreenchange", fullscreenhandler);
      }
      cmd_params.set("loadaucmds", /* @__PURE__ */ new Map([["cmdType", '"DocStart" | "DocLoad" | "DocEnd" | "TabEnter" | "TabLeft" | "FullscreenEnter" | "FullscreenLeft" | "FullscreenChange" | "UriChange" | "HistoryState"']]));
      INPUTTAGS_selectors = `
input:not([disabled]):not([readonly]):-moz-any(
 :not([type]),
 [type='text'],
 [type='search'],
 [type='password'],
 [type='datetime'],
 [type='datetime-local'],
 [type='date'],
 [type='month'],
 [type='time'],
 [type='week'],
 [type='number'],
 [type='range'],
 [type='email'],
 [type='url'],
 [type='tel'],
 [type='color']
),
textarea:not([disabled]):not([readonly]),
object,
[role='application'],
[contenteditable='true'][role='textbox']
`;
      INPUTPASSWORD_selectors = `
input[type='password']
`;
      cmd_params.set("focusinput", /* @__PURE__ */ new Map([["nth", "number | string"]]));
      cmd_params.set("changelistjump", /* @__PURE__ */ new Map([]));
      cmd_params.set("focusbyid", /* @__PURE__ */ new Map([["id", "string"]]));
      cmd_params.set("tabnext", /* @__PURE__ */ new Map([["increment", "number"]]));
      cmd_params.set("tabnext_gt", /* @__PURE__ */ new Map([["index", "number"]]));
      cmd_params.set("tabprev", /* @__PURE__ */ new Map([["increment", "number"]]));
      cmd_params.set("tabpush", /* @__PURE__ */ new Map([["windowId", "number"]]));
      cmd_params.set("tabaudio", /* @__PURE__ */ new Map([]));
      cmd_params.set("winmerge", /* @__PURE__ */ new Map([["...windowIds", "string[]"]]));
      cmd_params.set("tabgrab", /* @__PURE__ */ new Map([["id", "string"]]));
      cmd_params.set("tabopen", /* @__PURE__ */ new Map([["...addressarr", "string[]"]]));
      cmd_params.set("tabopenwait", /* @__PURE__ */ new Map([["...addressarr", "string[]"]]));
      cmd_params.set("tabqueue", /* @__PURE__ */ new Map([["...addresses", "string[]"]]));
      cmd_params.set("tabonly", /* @__PURE__ */ new Map([]));
      cmd_params.set("tabduplicate", /* @__PURE__ */ new Map([["index", "number"]]));
      cmd_params.set("tabdetach", /* @__PURE__ */ new Map([["index", "number"]]));
      cmd_params.set("fullscreen", /* @__PURE__ */ new Map([]));
      cmd_params.set("tabclose", /* @__PURE__ */ new Map([["...indexes", "string[]"]]));
      cmd_params.set("tabcloseallto", /* @__PURE__ */ new Map([["side", "string"]]));
      cmd_params.set("undo", /* @__PURE__ */ new Map([["item", "string"]]));
      cmd_params.set("tabmove", /* @__PURE__ */ new Map([["index", "string"]]));
      cmd_params.set("tabsort", /* @__PURE__ */ new Map([["...callbackchunks", "string[]"]]));
      cmd_params.set("pin", /* @__PURE__ */ new Map([]));
      cmd_params.set("mute", /* @__PURE__ */ new Map([["...muteArgs", "string[]"]]));
      cmd_params.set("winopen", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("winclose", /* @__PURE__ */ new Map([["...ids", "string[]"]]));
      cmd_params.set("wintitle", /* @__PURE__ */ new Map([["...title", "string[]"]]));
      cmd_params.set("qall", /* @__PURE__ */ new Map([]));
      cmd_params.set("sidebaropen", /* @__PURE__ */ new Map([["...urllike", "string[]"]]));
      cmd_params.set("jsua", /* @__PURE__ */ new Map([]));
      cmd_params.set("sidebartoggle", /* @__PURE__ */ new Map([]));
      cmd_params.set("containerclose", /* @__PURE__ */ new Map([["name", "string"]]));
      cmd_params.set("containercreate", /* @__PURE__ */ new Map([["name", "string"], ["color", "string"], ["icon", "string"]]));
      cmd_params.set("containerdelete", /* @__PURE__ */ new Map([["name", "string"]]));
      cmd_params.set("containerupdate", /* @__PURE__ */ new Map([["name", "string"], ["uname", "string"], ["ucolor", "string"], ["uicon", "string"]]));
      cmd_params.set("viewcontainers", /* @__PURE__ */ new Map([]));
      cmd_params.set("recontain", /* @__PURE__ */ new Map([["containerName", "string"]]));
      cmd_params.set("setContentStateGroup", /* @__PURE__ */ new Map([["name", "string"]]));
      cmd_params.set("tgroupcreate", /* @__PURE__ */ new Map([["name", "string"]]));
      cmd_params.set("tgroupswitch", /* @__PURE__ */ new Map([["name", "string"]]));
      cmd_params.set("tgrouplast", /* @__PURE__ */ new Map([]));
      cmd_params.set("tgrouprename", /* @__PURE__ */ new Map([["name", "string"]]));
      cmd_params.set("tgroupclose", /* @__PURE__ */ new Map([["name", "string"]]));
      cmd_params.set("tgroupmove", /* @__PURE__ */ new Map([["name", "string"]]));
      cmd_params.set("tgroupabort", /* @__PURE__ */ new Map([]));
      cmd_params.set("version", /* @__PURE__ */ new Map([]));
      cmd_params.set("mode", /* @__PURE__ */ new Map([["mode", "ModeName"]]));
      cmd_params.set("repeat", /* @__PURE__ */ new Map([["n", "number"], ["...exstr", "string[]"]]));
      cmd_params.set("composite", /* @__PURE__ */ new Map([["...cmds", "string[]"]]));
      cmd_params.set("escapehatch", /* @__PURE__ */ new Map([]));
      cmd_params.set("sleep", /* @__PURE__ */ new Map([["time_ms", "number"]]));
      cmd_params.set("showcmdline", /* @__PURE__ */ new Map([["focus", "boolean"]]));
      cmd_params.set("hidecmdline", /* @__PURE__ */ new Map([]));
      cmd_params.set("fillcmdline", /* @__PURE__ */ new Map([["...strarr", "string[]"]]));
      cmd_params.set("fillcmdline_notrail", /* @__PURE__ */ new Map([["...strarr", "string[]"]]));
      cmd_params.set("fillcmdline_nofocus", /* @__PURE__ */ new Map([["...strarr", "string[]"]]));
      cmd_params.set("fillcmdline_tmp", /* @__PURE__ */ new Map([["ms", "number"], ["...strarr", "string[]"]]));
      cmd_params.set("yank", /* @__PURE__ */ new Map([["...content", "string[]"]]));
      cmd_params.set("getclip", /* @__PURE__ */ new Map([["from", '"clipboard" | "selection"']]));
      cmd_params.set("clipboard", /* @__PURE__ */ new Map([["excmd", '"open" | "yank" | "yankshort" | "yankcanon" | "yanktitle" | "yankmd" | "yankorg" | "xselpaste" | "tabopen" = "open"'], ["...toYank", "string[]"]]));
      cmd_params.set("yankimage", /* @__PURE__ */ new Map([["url", "string"]]));
      cmd_params.set("tab", /* @__PURE__ */ new Map([["...id", "string[]"]]));
      cmd_params.set("taball", /* @__PURE__ */ new Map([["...id", "string[]"]]));
      cmd_params.set("tabrename", /* @__PURE__ */ new Map([["index", "string"], ["...name", "string[]"]]));
      cmd_params.set("tab_helper", /* @__PURE__ */ new Map([["interactive", "boolean"], ["anyWindow", "boolean"], ["...key", "string[]"]]));
      cmd_params.set("command", /* @__PURE__ */ new Map([["name", "string"], ["...definition", "string[]"]]));
      cmd_params.set("comclear", /* @__PURE__ */ new Map([["name", "string"]]));
      cmd_params.set("bind", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("bindshow", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("bindurl", /* @__PURE__ */ new Map([["pattern", "string"], ["mode", "string"], ["keys", "string"], ["...excmd", "string[]"]]));
      cmd_params.set("keymap", /* @__PURE__ */ new Map([["source", "string"], ["target", "string"]]));
      cmd_params.set("searchsetkeyword", /* @__PURE__ */ new Map([]));
      cmd_params.set("seturl", /* @__PURE__ */ new Map([["pattern", "string"], ["key", "string"], ["...values", "string[]"]]));
      cmd_params.set("setmode", /* @__PURE__ */ new Map([["mode", "string"], ["key", "string"], ["...values", "string[]"]]));
      cmd_params.set("set", /* @__PURE__ */ new Map([["key", "string"], ["...values", "string[]"]]));
      cmd_params.set("firefoxsyncpull", /* @__PURE__ */ new Map([]));
      cmd_params.set("firefoxsyncpush", /* @__PURE__ */ new Map([]));
      cmd_params.set("autocmd", /* @__PURE__ */ new Map([["event", "string"], ["url", "string"], ["...excmd", "string[]"]]));
      cmd_params.set("autocontain", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("proxyadd", /* @__PURE__ */ new Map([["name", "string"], ["url", "string"]]));
      cmd_params.set("proxyremove", /* @__PURE__ */ new Map([["name", "string"]]));
      cmd_params.set("autocmddelete", /* @__PURE__ */ new Map([["event", "string"], ["url", "string"]]));
      cmd_params.set("blacklistadd", /* @__PURE__ */ new Map([["url", "string"]]));
      cmd_params.set("unbind", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("unbindurl", /* @__PURE__ */ new Map([["pattern", "string"], ["mode", "string"], ["keys", "string"]]));
      cmd_params.set("reset", /* @__PURE__ */ new Map([["mode", "string"], ["key", "string"]]));
      cmd_params.set("reseturl", /* @__PURE__ */ new Map([["pattern", "string"], ["mode", "string"], ["key", "string"]]));
      cmd_params.set("sanitise", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("quickmark", /* @__PURE__ */ new Map([["key", "string"], ["...addressarr", "string[]"]]));
      cmd_params.set("get", /* @__PURE__ */ new Map([["...keys", "string[]"]]));
      cmd_params.set("viewconfig", /* @__PURE__ */ new Map([["...key", "string[]"]]));
      cmd_params.set("jsonview", /* @__PURE__ */ new Map([["...json", "string[]"]]));
      cmd_params.set("unseturl", /* @__PURE__ */ new Map([["pattern", "string"], ["key", "string"]]));
      cmd_params.set("unsetmode", /* @__PURE__ */ new Map([["mode", "string"], ["key", "string"]]));
      cmd_params.set("unset", /* @__PURE__ */ new Map([["...keys", "string[]"]]));
      cmd_params.set("setnull", /* @__PURE__ */ new Map([["...keys", "string[]"]]));
      KILL_STACK = [];
      cmd_params.set("hint", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("rot13", /* @__PURE__ */ new Map([["n", "number"]]));
      cmd_params.set("jumble", /* @__PURE__ */ new Map([]));
      cmd_params.set("run_exstr", /* @__PURE__ */ new Map([["...commands", "string[]"]]));
      cmd_params.set("gobble", /* @__PURE__ */ new Map([["numKeysOrTerminator", "string"], ["endCmd", "string"], ["...args", "string[]"]]));
      cmd_params.set("getGotoSelectors", /* @__PURE__ */ new Map([]));
      cmd_params.set("goto", /* @__PURE__ */ new Map([["...selector", "string[]"]]));
      cmd_params.set("nmode", /* @__PURE__ */ new Map([["mode", "string"], ["n", "number"], ["...endexArr", "string[]"]]));
      cmd_params.set("ttsread", /* @__PURE__ */ new Map([["mode", '"-t" | "-c"'], ["...args", "string[]"]]));
      cmd_params.set("ttsvoices", /* @__PURE__ */ new Map([]));
      cmd_params.set("ttscontrol", /* @__PURE__ */ new Map([["action", "string"]]));
      cmd_params.set("perfdump", /* @__PURE__ */ new Map([["...filters", "string[]"]]));
      cmd_params.set("perfhistogram", /* @__PURE__ */ new Map([["...filters", "string[]"]]));
      cmd_params.set("bmark", /* @__PURE__ */ new Map([["url", "string"], ["...titlearr", "string[]"]]));
      cmd_params.set("echo", /* @__PURE__ */ new Map([["...str", "string[]"]]));
      cmd_params.set("js", /* @__PURE__ */ new Map([["...str", "string[]"]]));
      cmd_params.set("jsb", /* @__PURE__ */ new Map([["...str", "string[]"]]));
      cmd_params.set("issue", /* @__PURE__ */ new Map([]));
      cmd_params.set("text2qr", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("updatecheck", /* @__PURE__ */ new Map([["source", '"manual" | "auto_polite" | "auto_impolite" = "manual"']]));
      cmd_params.set("keyfeed", /* @__PURE__ */ new Map([["mapstr", "string"]]));
      cmd_params.set("extoptions", /* @__PURE__ */ new Map([["...optionNameArgs", "string[]"]]));
      cmd_params.set("reader", /* @__PURE__ */ new Map([["...args", "string[]"]]));
      cmd_params.set("elementunhide", /* @__PURE__ */ new Map([]));
    }
  });

  // src/perf.ts
  var perf_exports = {};
  __export(perf_exports, {
    Marker: () => Marker,
    StatsFilter: () => StatsFilter,
    StatsLogger: () => StatsLogger,
    listenForCounters: () => listenForCounters,
    measured: () => measured,
    measuredAsync: () => measuredAsync,
    renderStatsHistogram: () => renderStatsHistogram
  });
  function measured(cls, propertyKey, descriptor) {
    if (!performanceApiAvailable())
      return;
    const originalMethod = descriptor.value;
    descriptor.value = function(...args2) {
      const marker = new Marker(cls.constructor.name, propertyKey).start();
      const result = originalMethod.apply(this, args2);
      marker.end();
      return result;
    };
    return descriptor;
  }
  function measuredAsync(cls, propertyKey, descriptor) {
    if (!performanceApiAvailable())
      return;
    const originalMethod = descriptor.value;
    descriptor.value = async function(...args2) {
      const marker = new Marker(cls.constructor.name, propertyKey).start();
      const result = await originalMethod.apply(this, args2);
      marker.end();
      return result;
    };
    return descriptor;
  }
  function listenForCounters(statsLogger) {
    let callback;
    if (statsLogger === void 0) {
      callback = (list) => {
        sendStats(list.getEntries());
      };
    } else {
      callback = (list) => {
        statsLogger.pushList(list.getEntries());
      };
    }
    const perfObserver = new PerformanceObserver(callback);
    perfObserver.observe({ entryTypes: ["mark", "measure"] });
    return perfObserver;
  }
  function renderStatsHistogram(samples, buckets = 15, width = 80) {
    const durs = samples.map((sample) => sample.duration);
    const min3 = durs.reduce((a, b) => Math.min(a, b));
    const max3 = durs.reduce((a, b) => Math.max(a, b));
    const bucketvals = linspace(min3, max3, buckets);
    const bucketed = bucketize(durs, bucketvals);
    const maxcount = Array.from(bucketed.values()).reduce(
      (a, b) => Math.max(a, b),
      0
    );
    const labelwidth = 20;
    const barwidth = width - labelwidth;
    const tobarwidth = (n2) => barwidth * n2 / maxcount;
    const result = [];
    for (const [bucketval, bucketcount] of bucketed.entries()) {
      const bar = "#".repeat(tobarwidth(bucketcount));
      const label = bucketval.toString().padEnd(labelwidth);
      result.push(label + bar);
    }
    return result.join("\n");
  }
  function performanceApiAvailable() {
    return performance.mark !== void 0;
  }
  function extractMetricName(counterName) {
    const matchresult = extractRegExp.exec(counterName);
    if (!matchresult)
      return;
    const [ownerName, functionName, uniqueSuffix] = matchresult.slice(1);
    return {
      ownerName,
      functionName,
      uniqueSuffix
    };
  }
  function sendStats(list) {
    message(
      "performance_background",
      "receiveStatsJson",
      JSON.stringify(list)
    );
  }
  var logger13, Marker, StatsLogger, StatsFilter, TRI_PERFORMANCE_NAME_PREFIX, extractRegExp, MetricName;
  var init_perf = __esm({
    "src/perf.ts"() {
      "use strict";
      init_messaging();
      init_config();
      init_math();
      init_logging();
      logger13 = new Logger("performance");
      Marker = class {
        constructor(ownerName, functionName, active = performanceApiAvailable() && get("perfcounters") === "true", metricName = new MetricName(
          ownerName,
          functionName
        )) {
          this.active = active;
          this.metricName = metricName;
        }
        start() {
          if (!this.active)
            return this;
          logger13.debug(
            "Marking startpoint of performance counter for %o",
            this.metricName
          );
          performance.mark(this.metricName.startName);
          return this;
        }
        end() {
          if (!this.active)
            return this;
          logger13.debug(
            "Marking endpoint of performance counter for %o",
            this.metricName
          );
          performance.mark(this.metricName.endName);
          performance.measure(
            this.metricName.fullName,
            this.metricName.startName,
            this.metricName.endName
          );
          return this;
        }
      };
      StatsLogger = class {
        constructor() {
          // TODO: Consider mapping each name to a symbol and storing the
          // mapped symbol instead of the name so we're storing more like 50
          // bytes per sample instead of 130 @_@
          this.buffer = [];
          this.idx = 0;
          this.buffersize = 1e4;
          this.lastError = 0;
        }
        /**
         * Target for receiving stats entries from other threads - there
         * was some issue with encoding that I couldn't figure out so I
         * just kludged it.
         */
        receiveStatsJson(entriesJson) {
          this.pushList(JSON.parse(entriesJson));
        }
        /**
         * Ingests the given performance entries into the buffer.
         */
        pushList(entries) {
          for (const entry of entries) {
            this.pushEntry(entry);
          }
        }
        /**
         * Returns only entries that match _all_ of the given filter
         * configs.
         */
        getEntries(...filterConfigs) {
          const filters = filterConfigs.map(
            (fc) => new StatsFilter(fc)
          );
          const filterFun = (e2) => filters.every((f) => f.matches(e2));
          return this.buffer.filter(filterFun);
        }
        updateBuffersize() {
          const perfsamples = Number(get("perfsamples"));
          if (Number.isInteger(perfsamples)) {
            this.buffersize = perfsamples;
          } else {
            if (performance.now() - this.lastError > 5e3) {
              this.lastError = performance.now();
              logger13.error(
                "perfsamples must be an integer, is %O",
                perfsamples
              );
            }
          }
        }
        pushEntry(entry) {
          logger13.debug(
            "Pushing performance entry %o into performance counters",
            entry
          );
          if (!entry.name.startsWith(TRI_PERFORMANCE_NAME_PREFIX))
            return;
          this.buffer[this.idx] = entry;
          this.incrementIdx();
        }
        incrementIdx() {
          this.idx = (this.idx + 1) % this.buffersize;
        }
      };
      StatsFilter = class {
        constructor(config2) {
          this.config = config2;
        }
        matches(entry) {
          const metricNameInfo = extractMetricName(entry.name);
          return !(this.config.kind === "functionName" && this.config.functionName !== metricNameInfo.functionName || this.config.kind === "ownerName" && this.config.ownerName !== metricNameInfo.ownerName || this.config.kind === "eventType" && this.config.eventType !== entry.entryType);
        }
      };
      TRI_PERFORMANCE_NAME_PREFIX = "tri";
      extractRegExp = new RegExp(
        `^${TRI_PERFORMANCE_NAME_PREFIX}/([^/]+)/([^:]+):([^:]+)`
        // No need to handle :start/:end
        // because we can get that from the
        // sample itself.
      );
      MetricName = class {
        constructor(ownerName, functionName) {
          const uniqueSuffix = Math.floor(
            Math.random() * Math.floor(1e6)
          ).toString();
          this.fullName = `${TRI_PERFORMANCE_NAME_PREFIX}/${ownerName}/${functionName}:${uniqueSuffix}`;
          this.startName = `${this.fullName}:start`;
          this.endName = `${this.fullName}:end`;
        }
      };
    }
  });

  // src/lib/updates.ts
  var updates_exports = {};
  __export(updates_exports, {
    getInstalledPatchVersion: () => getInstalledPatchVersion,
    getInstalledVersion: () => getInstalledVersion,
    getLatestVersion: () => getLatestVersion,
    naggedForVersion: () => naggedForVersion,
    secondsSinceLastCheck: () => secondsSinceLastCheck,
    shouldNagForVersion: () => shouldNagForVersion,
    updateLatestNaggedVersion: () => updateLatestNaggedVersion
  });
  function secondsSinceLastCheck() {
    const lastCheck = get("update", "lastchecktime");
    return (Date.now() - lastCheck) / 1e3;
  }
  async function getLatestVersion() {
    try {
      const feed = new DOMParser().parseFromString(
        await (await fetch("https://github.com/tridactyl/tridactyl/tags.atom")).text(),
        "application/xml"
      );
      const mostRecent = feed.querySelectorAll("entry")[0];
      set3("update", "lastchecktime", Date.now());
      const highestKnownVersion = {
        version: mostRecent.querySelector("title").textContent,
        releaseDate: new Date(
          mostRecent.querySelector("updated").textContent
        )
        // e.g. 2018-12-04T15:24:43.000Z
      };
      logger14.debug(
        "Checked for new version of Tridactyl, found ",
        highestKnownVersion
      );
      return highestKnownVersion;
    } catch (e2) {
      logger14.error("Error while checking for updates: ", e2);
    }
  }
  function shouldNagForVersion(version2) {
    const timeSinceRelease = (Date.now() - version2.releaseDate.getTime()) / 1e3;
    const updateNagWaitSeconds = get("update", "nagwait") * 24 * 60 * 60;
    const newerThanInstalled = (0, import_semver_compare2.default)(version2.version, getInstalledPatchVersion()) > 0;
    return newerThanInstalled && timeSinceRelease > updateNagWaitSeconds;
  }
  function naggedForVersion(version2) {
    const lastNaggedVersion = get("update", "lastnaggedversion");
    if (lastNaggedVersion) {
      return (0, import_semver_compare2.default)(version2.version, lastNaggedVersion) <= 0;
    } else {
      return false;
    }
  }
  function updateLatestNaggedVersion(version2) {
    set3("update", "lastnaggedversion", version2.version);
  }
  function getInstalledPatchVersion() {
    return TRI_VERSION2.replace(/pre.*/, "");
  }
  function getInstalledVersion() {
    return TRI_VERSION2;
  }
  var import_semver_compare2, logger14, TRI_VERSION2;
  var init_updates = __esm({
    "src/lib/updates.ts"() {
      "use strict";
      import_semver_compare2 = __toESM(require_semver_compare());
      init_config();
      init_logging();
      init_webext();
      logger14 = new Logger("updates");
      TRI_VERSION2 = getTriVersion();
    }
  });

  // src/lib/visual.ts
  var visual_exports = {};
  __export(visual_exports, {
    reverseSelection: () => reverseSelection
  });
  function reverseSelection(selection) {
    const direction = getSelectionDirection(selection);
    if (direction == null) {
      return;
    }
    const range4 = selection.getRangeAt(0);
    const [edgeNode, edgeOffset] = direction ? [range4.startContainer, range4.startOffset] : [range4.endContainer, range4.endOffset];
    range4.collapse(!direction);
    selection.removeAllRanges();
    selection.addRange(range4);
    selection.extend(edgeNode, edgeOffset);
  }
  function getSelectionDirection(selection) {
    if (selection.isCollapsed) {
      return void 0;
    }
    const { anchorNode, focusNode } = selection;
    if (anchorNode == null || focusNode == null) {
      return void 0;
    }
    const range4 = document.createRange();
    range4.setStart(anchorNode, selection.anchorOffset);
    range4.setEnd(focusNode, selection.focusOffset);
    return !range4.collapsed;
  }
  var init_visual = __esm({
    "src/lib/visual.ts"() {
      "use strict";
    }
  });

  // src/lib/tab_groups.ts
  var tab_groups_exports = {};
  __export(tab_groups_exports, {
    clearAllTgroupInfo: () => clearAllTgroupInfo,
    clearTabTgroup: () => clearTabTgroup,
    clearTgroups: () => clearTgroups,
    clearWindowTgroup: () => clearWindowTgroup,
    setTabTgroup: () => setTabTgroup,
    setTgroups: () => setTgroups,
    setWindowTgroup: () => setWindowTgroup,
    tabTgroup: () => tabTgroup,
    tgroupActivate: () => tgroupActivate,
    tgroupActivateLast: () => tgroupActivateLast,
    tgroupClearOldInfo: () => tgroupClearOldInfo,
    tgroupHandleTabActivated: () => tgroupHandleTabActivated,
    tgroupHandleTabAttached: () => tgroupHandleTabAttached,
    tgroupHandleTabCreated: () => tgroupHandleTabCreated,
    tgroupHandleTabDetached: () => tgroupHandleTabDetached,
    tgroupHandleTabRemoved: () => tgroupHandleTabRemoved,
    tgroupHandleTabUpdated: () => tgroupHandleTabUpdated,
    tgroupLastTabId: () => tgroupLastTabId,
    tgroupTabs: () => tgroupTabs,
    tgroups: () => tgroups,
    windowLastTgroup: () => windowLastTgroup,
    windowTgroup: () => windowTgroup
  });
  async function tgroups() {
    const groups = await browserBg.sessions.getWindowValue(
      await activeWindowId(),
      "tridactyl-tgroups"
    );
    return new Set(groups);
  }
  async function setTgroups(groups) {
    return browserBg.sessions.setWindowValue(
      await activeWindowId(),
      "tridactyl-tgroups",
      [...groups]
    );
  }
  function clearTgroups() {
    return removeActiveWindowValue("tridactyl-tgroups");
  }
  async function windowTgroup(id2) {
    if (id2 === void 0) {
      id2 = await activeWindowId();
    }
    return browserBg.sessions.getWindowValue(
      id2,
      "tridactyl-active-tgroup"
    );
  }
  async function setWindowTgroup(name, id2) {
    if (id2 === void 0) {
      id2 = await activeWindowId();
    }
    return browserBg.sessions.setWindowValue(
      id2,
      "tridactyl-active-tgroup",
      name
    );
  }
  async function windowLastTgroup(id2) {
    const otherGroupsTabs = await tgroupTabs(await windowTgroup(id2), true);
    if (otherGroupsTabs.length === 0) {
      return void 0;
    }
    otherGroupsTabs.sort((a, b) => b.lastAccessed - a.lastAccessed);
    const lastTabId = otherGroupsTabs[0].id;
    return tabTgroup(lastTabId);
  }
  function clearWindowTgroup() {
    return removeActiveWindowValue("tridactyl-active-tgroup");
  }
  async function tabTgroup(id2) {
    if (id2 === void 0) {
      id2 = await activeTabId();
    }
    return browserBg.sessions.getTabValue(
      id2,
      "tridactyl-tgroup"
    );
  }
  async function tabIdsOrCurrent(ids) {
    if (!ids) {
      ids = [await activeTabId()];
    } else if (!Array.isArray(ids)) {
      ids = [ids];
    }
    return ids;
  }
  async function setTabTgroup(name, id2) {
    const ids = await tabIdsOrCurrent(id2);
    return Promise.all(
      ids.map((id3) => {
        browserBg.sessions.setTabValue(id3, "tridactyl-tgroup", name);
      })
    );
  }
  async function clearTabTgroup(id2) {
    const ids = await tabIdsOrCurrent(id2);
    return Promise.all(
      ids.map((id3) => {
        browserBg.sessions.removeTabValue(id3, "tridactyl-tgroup");
      })
    );
  }
  async function tgroupTabs(name, other = false, id2) {
    if (id2 === void 0) {
      id2 = await activeWindowId();
    }
    return browserBg.tabs.query({ windowId: id2 }).then(async (tabs) => {
      const sameGroupIndices = await Promise.all(
        tabs.map(async ({ id: id3 }) => {
          const groupMatched = await tabTgroup(id3) == name;
          return other ? !groupMatched : groupMatched;
        })
      );
      tabs = tabs.filter((_, index2) => sameGroupIndices[index2]);
      return tabs;
    });
  }
  async function tgroupLastTabId(name, previous = false) {
    const tabs = await tgroupTabs(name);
    tabs.sort((a, b) => b.lastAccessed - a.lastAccessed);
    if (previous) {
      return tabs[1].id;
    } else {
      return tabs[0].id;
    }
  }
  async function tgroupClearOldInfo(oldName, newName, id2) {
    const promises = [];
    const groups = await tgroups();
    groups.delete(oldName);
    if (newName) {
      groups.add(newName);
    }
    promises.push(setTgroups(groups));
    if (id2 === void 0) {
      id2 = await activeWindowId();
    }
    if (newName) {
      promises.push(setWindowTgroup(newName, id2));
      promises.push(
        tgroupTabs(oldName, false, id2).then((tabs) => {
          setTabTgroup(
            newName,
            tabs.map((tab2) => tab2.id)
          );
        })
      );
    }
    return Promise.all(promises);
  }
  async function tgroupActivate(name) {
    const lastActiveTabId = await tgroupLastTabId(name);
    return browserBg.tabs.update(lastActiveTabId, { active: true });
  }
  async function tgroupActivateLast() {
    const lastTabGroup = await windowLastTgroup();
    return tgroupActivate(lastTabGroup).then(() => lastTabGroup);
  }
  async function clearAllTgroupInfo() {
    return Promise.all([
      clearTgroups(),
      clearWindowTgroup(),
      browser.tabs.query({ currentWindow: true }).then(async (tabs) => {
        const ids = tabs.map((tab2) => tab2.id);
        await browser.tabs.show(ids);
        return clearTabTgroup(ids);
      })
    ]);
  }
  async function tgroupHandleTabCreated(tab2) {
    const windowGroup = await windowTgroup(tab2.windowId);
    if (windowGroup) {
      const tabGroup = await tabTgroup(tab2.id);
      if (!tabGroup) {
        return setTabTgroup(windowGroup, tab2.id);
      }
    }
  }
  async function tgroupHandleTabAttached(tabId, attachInfo) {
    const windowGroup = await windowTgroup(attachInfo.newWindowId);
    if (windowGroup) {
      return setTabTgroup(windowGroup, tabId);
    }
  }
  async function tgroupHandleTabActivated(activeInfo) {
    const windowGroup = await windowTgroup(activeInfo.windowId);
    const tabGroup = await tabTgroup(activeInfo.tab);
    const promises = [];
    if (windowGroup && tabGroup && windowGroup != tabGroup) {
      await setWindowTgroup(tabGroup, activeInfo.windowId);
      promises.push(
        tgroupTabs(tabGroup, false, activeInfo.windowId).then(
          (tabs) => browserBg.tabs.show(tabs.map((tab2) => tab2.id))
        )
      );
      promises.push(
        tgroupTabs(tabGroup, true, activeInfo.windowId).then(
          (tabs) => browserBg.tabs.hide(tabs.map((tab2) => tab2.id))
        )
      );
    }
    return Promise.all(promises);
  }
  async function tgroupHandleTabUpdated(tabId, changeInfo, tab2) {
    if (changeInfo.pinned !== void 0) {
      const windowGroup = await windowTgroup(tab2.windowId);
      if (windowGroup) {
        if (changeInfo.pinned) {
          return clearTabTgroup(tabId);
        } else {
          return setTabTgroup(windowGroup, tabId);
        }
      }
    }
  }
  async function tgroupHandleTabRemoved(_tabId, removeInfo) {
    if (!removeInfo.isWindowClosing) {
      const windowGroup = await windowTgroup(removeInfo.windowId);
      const tabCount = await tgroupTabs(
        windowGroup,
        false,
        removeInfo.windowId
      ).then((tabs) => tabs.length);
      if (tabCount == 0) {
        return tgroupClearOldInfo(
          windowGroup,
          void 0,
          removeInfo.windowId
        );
      }
    }
  }
  async function tgroupHandleTabDetached(tabId, detachInfo) {
    clearTabTgroup(tabId);
    const windowGroup = await windowTgroup(detachInfo.oldWindowId);
    const tabCount = await tgroupTabs(
      windowGroup,
      false,
      detachInfo.oldWindowId
    ).then((tabs) => tabs.length);
    if (tabCount == 0) {
      return tgroupClearOldInfo(
        windowGroup,
        void 0,
        detachInfo.oldWindowId
      );
    }
  }
  var init_tab_groups = __esm({
    "src/lib/tab_groups.ts"() {
      "use strict";
      init_webext();
    }
  });

  // src/completions/providers.ts
  var providers_exports = {};
  __export(providers_exports, {
    getBookmarks: () => getBookmarks,
    getCombinedHistoryBmarks: () => getCombinedHistoryBmarks,
    getHistory: () => getHistory,
    getSearchUrls: () => getSearchUrls,
    getTopSites: () => getTopSites,
    newtaburl: () => newtaburl
  });
  function newtaburl() {
    const newtab = browser.runtime.getManifest().chrome_url_overrides.newtab;
    return newtab !== null ? browser.runtime.getURL(newtab) : null;
  }
  async function getBookmarks(query2) {
    let bookmarks = await browserBg.bookmarks.search({ query: query2 });
    bookmarks = bookmarks.filter((b) => {
      try {
        return new URL(b.url);
      } catch (e2) {
        return false;
      }
    });
    bookmarks.sort((a, b) => b.dateAdded - a.dateAdded);
    const seen = /* @__PURE__ */ new Map();
    bookmarks = bookmarks.filter((b) => {
      if (seen.get(b.title) === b.url)
        return false;
      else {
        seen.set(b.title, b.url);
        return true;
      }
    });
    return bookmarks;
  }
  async function getSearchUrls(query2) {
    const suconf = get("searchurls");
    const searchUrls = [];
    for (const prop3 in suconf) {
      if (Object.prototype.hasOwnProperty.call(suconf, prop3) && prop3.startsWith(query2)) {
        searchUrls.push({ title: prop3, url: suconf[prop3] });
      }
    }
    return searchUrls;
  }
  function frecency(item) {
    return item.visitCount * -1;
  }
  async function getHistory(query2) {
    let history3 = await browserBg.history.search({
      text: query2,
      maxResults: get("historyresults"),
      startTime: 0
    });
    const dedupe = /* @__PURE__ */ new Map();
    for (const page of history3) {
      if (page.url !== newtaburl()) {
        if (dedupe.has(page.url)) {
          if (dedupe.get(page.url).title.length < page.title.length) {
            dedupe.set(page.url, page);
          }
        } else {
          dedupe.set(page.url, page);
        }
      }
    }
    history3 = [...dedupe.values()];
    history3.sort((a, b) => frecency(a) - frecency(b));
    return history3;
  }
  async function getTopSites() {
    return (await browserBg.topSites.get()).filter(
      (page) => page.url !== newtaburl()
    );
  }
  async function getCombinedHistoryBmarks(query2) {
    const [history3, bookmarks, searchUrls] = await Promise.all([
      getHistory(query2),
      getBookmarks(query2),
      getSearchUrls(query2)
    ]);
    const combinedMap = new Map(
      bookmarks.map((bmark2) => [
        bmark2.url,
        { title: bmark2.title, url: bmark2.url, bmark: bmark2 }
      ])
    );
    history3.forEach((page) => {
      if (combinedMap.has(page.url))
        combinedMap.get(page.url).history = page;
      else
        combinedMap.set(page.url, {
          title: page.title,
          url: page.url,
          history: page
        });
    });
    searchUrls.forEach((su) => {
      combinedMap.set(su.url, {
        title: su.title,
        url: su.url,
        search: true
      });
    });
    const score = (x) => (x.history ? frecency(x.history) : 0) - (x.bmark ? get("bmarkweight") : 0) - (x.search ? get("searchurlweight") : 0);
    return Array.from(combinedMap.values()).sort((a, b) => score(a) - score(b));
  }
  var init_providers = __esm({
    "src/completions/providers.ts"() {
      "use strict";
      init_config();
      init_webext();
    }
  });

  // src/lib/html-tagged-template.js
  (function(window2) {
    "use strict";
    try {
      (function testSpreadOpAndTemplate() {
        const tag = function tag2() {
          return;
        };
        tag`test`;
      })();
      if (!("content" in document.createElement("template") && "from" in Array)) {
        throw new Error();
      }
    } catch (e2) {
      console.log(
        "Your browser does not support the needed functionality to use the html tagged template"
      );
      return;
    }
    if (typeof window2.html === "undefined") {
      let encodeAttributeHTMLEntities = function(str2) {
        return str2.replace(ENCODINGS_REGEX.attribute, function(match3) {
          return ENCODINGS.attribute[match3];
        });
      }, encodeURIEntities = function(str2) {
        return str2.replace(ENCODINGS_REGEX.uri, function(match3) {
          return ENCODINGS.uri[match3];
        });
      };
      const SUBSTITUTION_INDEX = "substitutionindex:";
      const SUBSTITUTION_REGEX = new RegExp(
        SUBSTITUTION_INDEX + "([0-9]+):",
        "g"
      );
      const REJECTION_STRING = "zXssPreventedz";
      const ENCODINGS = {
        attribute: {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;"
        },
        uri: {
          "&": "&amp;"
        }
      };
      const DOM_EVENTS = [
        "onclick",
        "ondblclick",
        "onmousedown",
        "onmouseup",
        "onmouseover",
        "onmousemove",
        "onmouseout",
        "ondragstart",
        "ondrag",
        "ondragenter",
        "ondragleave",
        "ondragover",
        "ondrop",
        "ondragend",
        "onkeydown",
        "onkeypress",
        "onkeyup",
        "onload",
        "onunload",
        "onabort",
        "onerror",
        "onresize",
        "onscroll",
        "onselect",
        "onchange",
        "onsubmit",
        "onreset",
        "onfocus",
        "onblur",
        "onpointerdown",
        "onpointerup",
        "onpointercancel",
        "onpointermove",
        "onpointerover",
        "onpointerout",
        "onpointerenter",
        "onpointerleave",
        "ongotpointercapture",
        "onlostpointercapture",
        "oncut",
        "oncopy",
        "onpaste",
        "onbeforecut",
        "onbeforecopy",
        "onbeforepaste",
        "onafterupdate",
        "onbeforeupdate",
        "oncellchange",
        "ondataavailable",
        "ondatasetchanged",
        "ondatasetcomplete",
        "onerrorupdate",
        "onrowenter",
        "onrowexit",
        "onrowsdelete",
        "onrowinserted",
        "oncontextmenu",
        "ondrag",
        "ondragstart",
        "ondragenter",
        "ondragover",
        "ondragleave",
        "ondragend",
        "ondrop",
        "onselectstart",
        "help",
        "onbeforeunload",
        "onstop",
        "beforeeditfocus",
        "onstart",
        "onfinish",
        "onbounce",
        "onbeforeprint",
        "onafterprint",
        "onpropertychange",
        "onfilterchange",
        "onreadystatechange",
        "onlosecapture",
        "DOMMouseScroll",
        "ondragdrop",
        "ondragenter",
        "ondragexit",
        "ondraggesture",
        "ondragover",
        "onclose",
        "oncommand",
        "oninput",
        "DOMMenuItemActive",
        "DOMMenuItemInactive",
        "oncontextmenu",
        "onoverflow",
        "onoverflowchanged",
        "onunderflow",
        "onpopuphidden",
        "onpopuphiding",
        "onpopupshowing",
        "onpopupshown",
        "onbroadcast",
        "oncommandupdate"
      ];
      const URI_ATTRIBUTES = [
        "action",
        "background",
        "cite",
        "classid",
        "codebase",
        "data",
        "href",
        "longdesc",
        "profile",
        "src",
        "usemap"
      ];
      const ENCODINGS_REGEX = {
        attribute: new RegExp(
          "[" + Object.keys(ENCODINGS.attribute).join("") + "]",
          "g"
        ),
        uri: new RegExp(
          "[" + Object.keys(ENCODINGS.uri).join("") + "]",
          "g"
        )
      };
      const ATTRIBUTE_PARSER_REGEX = /\s([^">=\s]+)(?:="[^"]+")?/g;
      const WRAPPED_WITH_QUOTES_REGEX = /^('|")[\s\S]*\1$/;
      const CUSTOM_URI_ATTRIBUTES_REGEX = /\bur[il]|ur[il]s?$/i;
      window2.html = function(strings, ...values3) {
        if (!strings[0] && values3.length === 0) {
          return;
        }
        function replaceSubstitution(match3, index2) {
          return values3[parseInt(index2, 10)];
        }
        let str2 = strings[0];
        for (let i2 = 0; i2 < values3.length; i2++) {
          str2 += SUBSTITUTION_INDEX + i2 + ":" + strings[i2 + 1];
        }
        const template2 = document.createElement("template");
        template2.innerHTML = str2;
        const walker = document.createNodeIterator(
          template2.content,
          NodeFilter.SHOW_ALL
        );
        let node;
        while (node = walker.nextNode()) {
          let tag = null;
          const attributesToRemove = [];
          let nodeName = node.nodeName.toLowerCase();
          if (nodeName.indexOf(SUBSTITUTION_INDEX) !== -1) {
            nodeName = nodeName.replace(
              SUBSTITUTION_REGEX,
              replaceSubstitution
            );
            tag = document.createElement(nodeName);
            node._replacedWith = tag;
            node.parentNode.insertBefore(tag, node);
          } else if (node.nodeName === "SCRIPT") {
            const script = document.createElement("script");
            tag = script;
            node._replacedWith = script;
            node.parentNode.insertBefore(script, node);
          }
          let attributes;
          if (node.attributes) {
            if (!(node.attributes instanceof NamedNodeMap)) {
              const temp2 = node.cloneNode();
              const attributeMatches = temp2.outerHTML.match(
                ATTRIBUTE_PARSER_REGEX
              );
              attributes = [];
              for (const attribute of attributeMatches.length) {
                const attributeName = attribute.trim().split("=")[0];
                const attributeValue = node.getAttribute(
                  attributeName
                );
                attributes.push({
                  name: attributeName,
                  value: attributeValue
                });
              }
            } else {
              attributes = Array.from(node.attributes);
            }
            for (const attribute of attributes) {
              let name = attribute.name;
              let value = attribute.value;
              let hasSubstitution = false;
              if (name.indexOf(SUBSTITUTION_INDEX) !== -1) {
                name = name.replace(
                  SUBSTITUTION_REGEX,
                  replaceSubstitution
                );
                if (name && typeof name === "string") {
                  hasSubstitution = true;
                }
                attributesToRemove.push(attribute.name);
              }
              if (name && value.indexOf(SUBSTITUTION_INDEX) !== -1) {
                hasSubstitution = true;
                let isRejected = false;
                value = value.replace(SUBSTITUTION_REGEX, function(match3, index2, offset) {
                  if (isRejected) {
                    return "";
                  }
                  let substitutionValue = values3[parseInt(index2, 10)];
                  if (DOM_EVENTS.indexOf(name) !== -1 && typeof substitutionValue === "string" && !WRAPPED_WITH_QUOTES_REGEX.test(
                    substitutionValue
                  )) {
                    substitutionValue = '"' + substitutionValue + '"';
                  } else if (URI_ATTRIBUTES.indexOf(name) !== -1 || CUSTOM_URI_ATTRIBUTES_REGEX.test(name)) {
                    const queryParamIndex = value.indexOf("=");
                    if (queryParamIndex !== -1 && offset > queryParamIndex) {
                      substitutionValue = encodeURIComponent(
                        substitutionValue
                      );
                    } else {
                      substitutionValue = encodeURI(
                        encodeURIEntities(
                          substitutionValue
                        )
                      );
                      if (offset === 0 && substitutionValue.indexOf(":") !== -1) {
                        const authorized_protocols = [
                          "http://",
                          "https://",
                          "moz-extension://",
                          "about://",
                          "data:image/png;base64",
                          "data:image/gif;base64",
                          "data:image/jpg;base64",
                          "data:image/jpeg;base64",
                          "data:image/x-icon;base64"
                        ];
                        if (!authorized_protocols.find(
                          (p) => substitutionValue.startsWith(
                            p
                          )
                        )) {
                          isRejected = true;
                        }
                      }
                    }
                  } else if (typeof substitutionValue === "string") {
                    substitutionValue = encodeAttributeHTMLEntities(
                      substitutionValue
                    );
                  }
                  return substitutionValue;
                });
                if (isRejected) {
                  value = "#" + REJECTION_STRING;
                }
              }
              if (tag || hasSubstitution) {
                const el = tag || node;
                if (name.substr(-1) === "?") {
                  el.removeAttribute(name);
                  if (value === "true") {
                    name = name.slice(0, -1);
                    el.setAttribute(name, "");
                  }
                } else {
                  el.setAttribute(name, value);
                }
              }
            }
          }
          attributesToRemove.forEach(function(attribute) {
            node.removeAttribute(attribute);
          });
          let parentNode;
          if (node.parentNode && node.parentNode._replacedWith) {
            parentNode = node.parentNode;
            node.parentNode._replacedWith.appendChild(node);
          }
          if (node._replacedWith && node.childNodes.length === 0 || parentNode && parentNode.childNodes.length === 0) {
            (parentNode || node).remove();
          }
          if (node.nodeType === 3 && node.nodeValue.indexOf(SUBSTITUTION_INDEX) !== -1) {
            const nodeValue = node.nodeValue.replace(
              SUBSTITUTION_REGEX,
              replaceSubstitution
            );
            const text = document.createTextNode(nodeValue);
            node.parentNode.replaceChild(text, node);
          }
        }
        if (template2.content.childNodes.length > 1) {
          return template2.content;
        }
        return template2.content.firstChild;
      };
    }
  })(window);

  // src/content.ts
  init_config();
  init_logging();
  init_state_content();

  // src/content/commandline_cmds.ts
  init_commandline_cmds();
  init_messaging();
  var functions = getCommandlineFns({});
  var CmdlineCmds = new Proxy(functions, {
    get(target, property) {
      if (target[property]) {
        return (...args2) => messageOwnTab("commandline_cmd", property, args2);
      }
      return target[property];
    }
  });

  // src/content/editor.ts
  init_messaging();
  init_dom();
  init_editor();
  var EditorCmds = new Proxy(editor_exports, {
    get(target, property) {
      if (target[property]) {
        return (...args2) => {
          if (document.activeElement.src === browser.runtime.getURL("static/commandline.html")) {
            return messageOwnTab(
              "commandline_frame",
              "editor_function",
              [property].concat(args2)
            );
          }
          return editor_exports[property](getLastUsedInput(), ...args2);
        };
      }
      return target[property];
    }
  });
  addListener("editorfn_content", attributeCaller(EditorCmds));

  // src/content.ts
  init_dom();
  init_state();
  if (window.tridactyl_content_lock !== void 0) {
    throw Error("Trying to load Tridactyl, but it's already loaded.");
  }
  window.tridactyl_content_lock = "locked";
  var logger15 = new Logger("content");
  logger15.debug("Tridactyl content script loaded, boss!");
  getAsync("superignore").then(async (TRI_DISABLE) => {
    var _a;
    if (TRI_DISABLE === "true")
      return;
    try {
      const realwindow = (_a = window.wrappedJSObject) != null ? _a : window;
      const triPushState = ((hist) => (...args2) => {
        const ret = hist(...args2);
        realwindow.dispatchEvent(new Event("HistoryPushState"));
        realwindow.dispatchEvent(new Event("HistoryState"));
        return ret;
      })(realwindow.history.pushState.bind(realwindow.history));
      const triReplaceState = ((hist) => (...args2) => {
        const ret = hist(...args2);
        realwindow.dispatchEvent(new Event("HistoryReplaceState"));
        realwindow.dispatchEvent(new Event("HistoryState"));
        return ret;
      })(realwindow.history.replaceState.bind(realwindow.history));
      realwindow.addEventListener("popstate", () => {
        realwindow.dispatchEvent(new Event("HistoryState"));
      });
      history.replaceState = triReplaceState;
      history.pushState = triPushState;
      typeof exportFunction == "function" && exportFunction(triReplaceState, history, { defineAs: "replaceState" });
      typeof exportFunction == "function" && exportFunction(triPushState, history, { defineAs: "pushState" });
    } catch (e2) {
      console.error(e2);
    }
    const controller = await Promise.resolve().then(() => (init_controller(), controller_exports));
    const excmds_content = await Promise.resolve().then(() => (init_excmds_content_generated(), excmds_content_generated_exports));
    const hinting_content = await Promise.resolve().then(() => (init_hinting(), hinting_exports));
    const ContentController = await Promise.resolve().then(() => (init_controller_content(), controller_content_exports));
    const commandline_content = await Promise.resolve().then(() => (init_commandline_content(), commandline_content_exports));
    const convert = await Promise.resolve().then(() => (init_convert(), convert_exports));
    const dom = await Promise.resolve().then(() => (init_dom(), dom_exports));
    const excmds = await Promise.resolve().then(() => (init_excmds_content_generated(), excmds_content_generated_exports));
    const finding_content = await Promise.resolve().then(() => (init_finding(), finding_exports));
    const itertools = await Promise.resolve().then(() => (init_itertools(), itertools_exports));
    const messaging = await Promise.resolve().then(() => (init_messaging(), messaging_exports));
    const State2 = await Promise.resolve().then(() => (init_state(), state_exports));
    const webext = await Promise.resolve().then(() => (init_webext(), webext_exports));
    const perf = await Promise.resolve().then(() => (init_perf(), perf_exports));
    const keyseq = await Promise.resolve().then(() => (init_keyseq(), keyseq_exports));
    const native2 = await Promise.resolve().then(() => (init_native(), native_exports));
    const styling = await Promise.resolve().then(() => (init_styling(), styling_exports));
    const updates = await Promise.resolve().then(() => (init_updates(), updates_exports));
    const urlutils = await Promise.resolve().then(() => (init_url_util(), url_util_exports));
    const scrolling = await Promise.resolve().then(() => (init_scrolling(), scrolling_exports));
    const R = await Promise.resolve().then(() => (init_es(), es_exports));
    const visual = await Promise.resolve().then(() => (init_visual(), visual_exports));
    const metadata = await Promise.resolve().then(() => (init_metadata_generated(), metadata_generated_exports));
    const { tabTgroup: tabTgroup2 } = await Promise.resolve().then(() => (init_tab_groups(), tab_groups_exports));
    const completion_providers = await Promise.resolve().then(() => (init_providers(), providers_exports));
    controller.setExCmds({
      "": excmds_content,
      ex: CmdlineCmds,
      text: EditorCmds,
      hint: hinting_content.getHintCommands()
    });
    messaging.addListener(
      "excmd_content",
      messaging.attributeCaller(excmds_content)
    );
    messaging.addListener(
      "controller_content",
      messaging.attributeCaller(controller)
    );
    messaging.addListener("alive", async () => true);
    const guardedAcceptKey = (keyevent) => {
      if (!keyevent.isTrusted)
        return;
      ContentController.acceptKey(keyevent);
    };
    function listen(elem) {
      elem.removeEventListener("keydown", guardedAcceptKey, true);
      elem.removeEventListener(
        "keypress",
        ContentController.canceller.cancelKeyPress,
        true
      );
      elem.removeEventListener(
        "keyup",
        ContentController.canceller.cancelKeyUp,
        true
      );
      elem.addEventListener("keydown", guardedAcceptKey, true);
      elem.addEventListener(
        "keypress",
        ContentController.canceller.cancelKeyPress,
        true
      );
      elem.addEventListener(
        "keyup",
        ContentController.canceller.cancelKeyUp,
        true
      );
    }
    listen(window);
    document.addEventListener(
      "readystatechange",
      (_) => getAllDocumentFrames().forEach((f) => listen(f))
    );
    getAsync("preventautofocusjackhammer").then((allowautofocus) => {
      if (allowautofocus === "false") {
        return;
      }
      const preventAutoFocus = () => {
        ;
        document.activeElement.blur();
        const elem = document.activeElement;
        elem.tabIndex = 0;
        const focusElem = () => elem.focus();
        elem.addEventListener("blur", focusElem);
        elem.addEventListener("focusout", focusElem);
        const interval = setInterval(() => {
          if (document.activeElement != elem)
            focusElem();
        }, 200);
        function stopResettingFocus(event) {
          if (!event.isTrusted)
            return;
          elem.removeEventListener("blur", focusElem);
          elem.removeEventListener("focusout", focusElem);
          clearInterval(interval);
          window.removeEventListener("keydown", stopResettingFocus);
          window.removeEventListener("mousedown", stopResettingFocus);
        }
        window.addEventListener("keydown", stopResettingFocus);
        window.addEventListener("mousedown", stopResettingFocus);
      };
      const tryPreventAutoFocus = () => {
        document.removeEventListener("readystatechange", tryPreventAutoFocus);
        try {
          preventAutoFocus();
        } catch (e2) {
          document.addEventListener("readystatechange", tryPreventAutoFocus);
        }
      };
      tryPreventAutoFocus();
    });
    window.tri = Object.assign(/* @__PURE__ */ Object.create(null), {
      browserBg: webext.browserBg,
      commandline_content,
      convert,
      config: config_exports,
      completion_providers,
      controller,
      dom,
      editor: EditorCmds,
      excmds,
      finding_content,
      hinting_content,
      itertools,
      logger: logger15,
      metadata,
      keyseq,
      messaging,
      state,
      State: State2,
      scrolling,
      visual,
      webext,
      l: (prom) => prom.then(console.log).catch(console.error),
      native: native2,
      styling,
      contentLocation: window.location,
      perf,
      R,
      updates,
      urlutils
    });
    logger15.info("Loaded commandline content?", commandline_content);
    try {
      dom.setupFocusHandler();
      dom.hijackPageListenerFunctions();
    } catch (e2) {
      logger15.warning("Could not hijack due to CSP:", e2);
    }
    if (window.location.protocol === "moz-extension:" && window.location.pathname === "/static/newtab.html") {
      getAsync("newtab").then((newtab) => {
        if (!["about:blank", "about:newtab"].includes(newtab)) {
          if (newtab) {
            excmds.open_quiet(newtab);
          } else {
            const content = document.getElementById("trinewtab");
            content.style.display = "block";
            document.title = "Tridactyl Top Tips & New Tab Page";
          }
        }
      });
    }
    getAsync("modeindicator").then((mode2) => {
      if (mode2 !== "true")
        return;
      const containerIndicator = get("containerindicator");
      const style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = `@media print {
        .TridactylStatusIndicator {
            display: none !important;
        }
    }`;
      const statusIndicator = document.createElement("span");
      const privateMode = browser.extension.inIncognitoContext ? "TridactylPrivate" : "";
      statusIndicator.className = "cleanslate TridactylStatusIndicator " + privateMode + " TridactylModenormal ";
      if (containerIndicator === "true") {
        webext.ownTabContainer().then(
          (ownTab2) => webext.browserBg.contextualIdentities.get(ownTab2.cookieStoreId)
        ).then((container) => {
          statusIndicator.setAttribute(
            "style",
            `border: ${container.colorCode} var(--tridactyl-indicator-border-style, solid) var(--tridactyl-indicator-border-width, 1.5px) !important`
          );
        }).catch((error) => {
          logger15.debug(error);
        });
      }
      statusIndicator.addEventListener("mouseenter", (ev) => {
        const target = ev.target;
        const rect = target.getBoundingClientRect();
        target.classList.add("TridactylInvisible");
        const onMouseOut = (ev2) => {
          if (ev2.clientX < rect.x || ev2.clientX > rect.x + rect.with || ev2.clientY < rect.y || ev2.clientY > rect.y + rect.height) {
            target.classList.remove("TridactylInvisible");
            window.removeEventListener("mousemove", onMouseOut);
          }
        };
        window.addEventListener("mousemove", onMouseOut);
      });
      try {
        statusIndicator.textContent = contentState.mode || "normal";
        document.body.appendChild(statusIndicator);
        document.head.appendChild(style);
      } catch (e2) {
        window.addEventListener("DOMContentLoaded", () => {
          statusIndicator.textContent = contentState.mode || "normal";
          document.body.appendChild(statusIndicator);
          document.head.appendChild(style);
        });
      }
      addContentStateChangedListener(async (property, oldMode, oldValue, newValue) => {
        let mode3 = newValue;
        let suffix = "";
        let result = "";
        if (property !== "mode") {
          if (property === "suffix") {
            mode3 = oldMode;
            suffix = newValue;
          } else if (property === "group") {
            mode3 = oldMode;
          }
        }
        const privateMode2 = browser.extension.inIncognitoContext ? "TridactylPrivate" : "";
        statusIndicator.className = "cleanslate TridactylStatusIndicator " + privateMode2;
        if (dom.isTextEditable(document.activeElement) && !["input", "ignore"].includes(mode3)) {
          result = "insert";
        } else if (mode3 === "insert" && !dom.isTextEditable(document.activeElement)) {
          result = "normal";
        } else {
          result = mode3;
        }
        const modeindicatorshowkeys = get("modeindicatorshowkeys");
        if (modeindicatorshowkeys === "true" && suffix !== "") {
          result = mode3 + " " + suffix;
        }
        const tabGroup = await tabTgroup2();
        if (tabGroup) {
          result = result + " | " + tabGroup;
        }
        logger15.debug(
          "statusindicator: ",
          result,
          ";",
          "config",
          modeindicatorshowkeys
        );
        statusIndicator.textContent = result;
        statusIndicator.className += " TridactylMode" + statusIndicator.textContent;
        if (get("modeindicator") !== "true" || get("modeindicatormodes", mode3) === "false") {
          statusIndicator.classList.add("TridactylInvisible");
        } else {
          statusIndicator.classList.remove("TridactylInvisble");
        }
      });
    });
    function protectSlash(e2) {
      if (!e2.isTrusted)
        return;
      get("blacklistkeys").map((protkey) => {
        if (protkey.indexOf(e2.key) !== -1 && contentState.mode === "normal") {
          e2.cancelBubble = true;
          e2.stopImmediatePropagation();
        }
      });
    }
    getAsync("leavegithubalone").then((v) => {
      if (v === "true")
        return;
      try {
        document.body.addEventListener("keydown", protectSlash);
      } catch (e2) {
        window.addEventListener("DOMContentLoaded", () => {
          document.body.addEventListener("keydown", protectSlash);
        });
      }
    });
    const phoneHome = () => browser.runtime.sendMessage("dom_loaded_background");
    document.readyState === "complete" && phoneHome();
    window.addEventListener("load", () => {
      phoneHome();
    });
    document.addEventListener("selectionchange", () => {
      const selection = document.getSelection();
      if (contentState.mode == "visual" && get("visualexitauto") == "true" && selection.isCollapsed) {
        contentState.mode = "normal";
        return;
      }
      if (contentState.mode !== "normal" || get("visualenterauto") == "false")
        return;
      if (!selection.isCollapsed) {
        contentState.mode = "visual";
      }
    });
    window.tri = Object.assign(window.tri, {
      perfObserver: perf.listenForCounters()
    });
  });
})();
//# sourceMappingURL=content.js.map
