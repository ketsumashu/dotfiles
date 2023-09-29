"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
        function State(rule, dot, reference, wantedBy) {
          this.rule = rule;
          this.dot = dot;
          this.reference = reference;
          this.data = [];
          this.wantedBy = wantedBy;
          this.isComplete = this.dot === rule.symbols.length;
        }
        State.prototype.toString = function() {
          return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
        };
        State.prototype.nextState = function(child) {
          var state = new State(this.rule, this.dot + 1, this.reference, this.wantedBy);
          state.left = this;
          state.right = child;
          if (state.isComplete) {
            state.data = state.build();
            state.right = void 0;
          }
          return state;
        };
        State.prototype.build = function() {
          var children = [];
          var node = this;
          do {
            children.push(node.right.data);
            node = node.left;
          } while (node.left);
          children.reverse();
          return children;
        };
        State.prototype.finish = function() {
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
            var state = states[w];
            if (state.isComplete) {
              state.finish();
              if (state.data !== Parser3.fail) {
                var wantedBy = state.wantedBy;
                for (var i = wantedBy.length; i--; ) {
                  var left = wantedBy[i];
                  this.complete(left, state);
                }
                if (state.reference === this.index) {
                  var exp = state.rule.name;
                  (this.completed[exp] = this.completed[exp] || []).push(state);
                }
              }
            } else {
              var exp = state.rule.symbols[state.dot];
              if (typeof exp !== "string") {
                this.scannable.push(state);
                continue;
              }
              if (wants[exp]) {
                wants[exp].push(state);
                if (completed.hasOwnProperty(exp)) {
                  var nulls = completed[exp];
                  for (var i = 0; i < nulls.length; i++) {
                    var right = nulls[i];
                    this.complete(state, right);
                  }
                }
              } else {
                wants[exp] = [state];
                this.predict(exp);
              }
            }
          }
        };
        Column.prototype.predict = function(exp) {
          var rules = this.grammar.byName[exp] || [];
          for (var i = 0; i < rules.length; i++) {
            var r = rules[i];
            var wantedBy = this.wants[exp];
            var s = new State(r, 0, this.index, wantedBy);
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
        StreamLexer.prototype.reset = function(data, state) {
          this.buffer = data;
          this.index = 0;
          this.line = state ? state.line : 1;
          this.lastLineBreak = state ? -state.col : 0;
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
            message2 += lines.map(function(line, i) {
              return pad3(this.line - lines.length + i + 1, lastLineDigits) + " " + line;
            }, this).join("\n");
            message2 += "\n" + pad3("", lastLineDigits + col) + "^\n";
            return message2;
          } else {
            return message2 + " at index " + (this.index - 1);
          }
          function pad3(n, length) {
            var s = String(n);
            return Array(length - s.length + 1).join(" ") + s;
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
            } catch (e) {
              var nextColumn = new Column(this.grammar, this.current + 1);
              this.table.push(nextColumn);
              var err = new Error(this.reportLexerError(e));
              err.offset = this.current;
              err.token = e.token;
              throw err;
            }
            var column = this.table[this.current];
            if (!this.options.keepHistory) {
              delete this.table[this.current - 1];
            }
            var n = this.current + 1;
            var nextColumn = new Column(this.grammar, n);
            this.table.push(nextColumn);
            var literal = token.text !== void 0 ? token.text : token.value;
            var value = lexer.constructor === StreamLexer ? token.value : token;
            var scannable = column.scannable;
            for (var w = scannable.length; w--; ) {
              var state = scannable[w];
              var expect = state.rule.symbols[state.dot];
              if (expect.test ? expect.test(value) : expect.type ? expect.type === token.type : expect.literal === literal) {
                var next = state.nextState({ data: value, token, isToken: true, reference: n - 1 });
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
          var expectantStates = lastColumn.states.filter(function(state) {
            var nextSymbol = state.rule.symbols[state.dot];
            return nextSymbol && typeof nextSymbol !== "string";
          });
          if (expectantStates.length === 0) {
            lines.push("Unexpected " + tokenDisplay + ". I did not expect any more input. Here is the state of my parse table:\n");
            this.displayStateStack(lastColumn.states, lines);
          } else {
            lines.push("Unexpected " + tokenDisplay + ". Instead, I was expecting to see one of the following:\n");
            var stateStacks = expectantStates.map(function(state) {
              return this.buildFirstStateStack(state, []) || [state];
            }, this);
            stateStacks.forEach(function(stateStack) {
              var state = stateStack[0];
              var nextSymbol = state.rule.symbols[state.dot];
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
            var state = stateStack[j];
            var display = state.rule.toString(state.dot);
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
        Parser3.prototype.buildFirstStateStack = function(state, visited) {
          if (visited.indexOf(state) !== -1) {
            return null;
          }
          if (state.wantedBy.length === 0) {
            return [state];
          }
          var prevState = state.wantedBy[0];
          var childVisited = [state].concat(visited);
          var childResult = this.buildFirstStateStack(prevState, childVisited);
          if (childResult === null) {
            return null;
          }
          return [state].concat(childResult);
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
          column.states.forEach(function(t) {
            if (t.rule.name === start && t.dot === t.rule.symbols.length && t.reference === 0 && t.data !== Parser3.fail) {
              considerations.push(t);
            }
          });
          return considerations.map(function(c) {
            return c.data;
          });
        };
        function getSymbolLongDisplay(symbol) {
          var type = typeof symbol;
          if (type === "string") {
            return symbol;
          } else if (type === "object") {
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
          var type = typeof symbol;
          if (type === "string") {
            return symbol;
          } else if (type === "object") {
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

  // src/lib/convert.ts
  function toNumber(s) {
    const n = Number(s);
    if (isNaN(n))
      throw new Error("Not a number! " + s);
    else
      return n;
  }

  // src/lib/browser_proxy.ts
  var browserProxy = new Proxy(/* @__PURE__ */ Object.create(null), {
    get(target, api) {
      return new Proxy(
        {},
        {
          get(_, func) {
            return (...args) => message(
              "browser_proxy_background",
              "shim",
              api,
              func,
              args
            );
          }
        }
      );
    }
  });
  var browser_proxy_default = browserProxy;

  // node_modules/ramda/es/internal/_isPlaceholder.js
  function _isPlaceholder(a) {
    return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
  }

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

  // node_modules/ramda/es/internal/_arity.js
  function _arity(n, fn) {
    switch (n) {
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

  // node_modules/ramda/es/internal/_curryN.js
  function _curryN(length, received, fn) {
    return function() {
      var combined = [];
      var argsIdx = 0;
      var left = length;
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
      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
    };
  }

  // node_modules/ramda/es/curryN.js
  var curryN = /* @__PURE__ */ _curry2(function curryN2(length, fn) {
    if (length === 1) {
      return _curry1(fn);
    }
    return _arity(length, _curryN(length, [], fn));
  });
  var curryN_default = curryN;

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

  // node_modules/ramda/es/internal/_isArray.js
  var isArray_default = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
  };

  // node_modules/ramda/es/internal/_isTransformer.js
  function _isTransformer(obj) {
    return obj != null && typeof obj["@@transducer/step"] === "function";
  }

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

  // node_modules/ramda/es/internal/_xfBase.js
  var xfBase_default = {
    init: function() {
      return this.xf["@@transducer/init"]();
    },
    result: function(result) {
      return this.xf["@@transducer/result"](result);
    }
  };

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

  // node_modules/ramda/es/internal/_isString.js
  function _isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
  }

  // node_modules/ramda/es/internal/_isArrayLike.js
  var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
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
  var isArrayLike_default = _isArrayLike;

  // node_modules/ramda/es/internal/_xwrap.js
  var XWrap = /* @__PURE__ */ function() {
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
  function _xwrap(fn) {
    return new XWrap(fn);
  }

  // node_modules/ramda/es/bind.js
  var bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
    return _arity(fn.length, function() {
      return fn.apply(thisObj, arguments);
    });
  });
  var bind_default = bind;

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
  var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
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

  // node_modules/ramda/es/internal/_xmap.js
  var XMap = /* @__PURE__ */ function() {
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
  var _xmap = /* @__PURE__ */ _curry2(function _xmap2(f, xf) {
    return new XMap(f, xf);
  });
  var xmap_default = _xmap;

  // node_modules/ramda/es/internal/_has.js
  function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  // node_modules/ramda/es/internal/_isArguments.js
  var toString = Object.prototype.toString;
  var _isArguments = /* @__PURE__ */ function() {
    return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
      return toString.call(x) === "[object Arguments]";
    } : function _isArguments2(x) {
      return _has("callee", x);
    };
  }();
  var isArguments_default = _isArguments;

  // node_modules/ramda/es/keys.js
  var hasEnumBug = !/* @__PURE__ */ {
    toString: null
  }.propertyIsEnumerable("toString");
  var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
  var hasArgsEnumBug = /* @__PURE__ */ function() {
    "use strict";
    return arguments.propertyIsEnumerable("length");
  }();
  var contains = function contains2(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };
  var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) : /* @__PURE__ */ _curry1(function keys3(obj) {
    if (Object(obj) !== obj) {
      return [];
    }
    var prop, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && isArguments_default(obj);
    for (prop in obj) {
      if (_has(prop, obj) && (!checkArgsLength || prop !== "length")) {
        ks[ks.length] = prop;
      }
    }
    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;
      while (nIdx >= 0) {
        prop = nonEnumerableProps[nIdx];
        if (_has(prop, obj) && !contains(ks, prop)) {
          ks[ks.length] = prop;
        }
        nIdx -= 1;
      }
    }
    return ks;
  });
  var keys_default = keys;

  // node_modules/ramda/es/map.js
  var map = /* @__PURE__ */ _curry2(
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
  var map_default = map;

  // node_modules/ramda/es/internal/_isInteger.js
  var isInteger_default = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
  };

  // node_modules/ramda/es/reduce.js
  var reduce = /* @__PURE__ */ _curry3(_reduce);
  var reduce_default = reduce;

  // node_modules/ramda/es/internal/_pipe.js
  function _pipe(f, g) {
    return function() {
      return g.call(this, f.apply(this, arguments));
    };
  }

  // node_modules/ramda/es/internal/_checkForMethod.js
  function _checkForMethod(methodname, fn) {
    return function() {
      var length = arguments.length;
      if (length === 0) {
        return fn();
      }
      var obj = arguments[length - 1];
      return isArray_default(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
  }

  // node_modules/ramda/es/slice.js
  var slice = /* @__PURE__ */ _curry3(
    /* @__PURE__ */ _checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
      return Array.prototype.slice.call(list, fromIndex, toIndex);
    })
  );
  var slice_default = slice;

  // node_modules/ramda/es/tail.js
  var tail = /* @__PURE__ */ _curry1(
    /* @__PURE__ */ _checkForMethod(
      "tail",
      /* @__PURE__ */ slice_default(1, Infinity)
    )
  );
  var tail_default = tail;

  // node_modules/ramda/es/pipe.js
  function pipe() {
    if (arguments.length === 0) {
      throw new Error("pipe requires at least one argument");
    }
    return _arity(arguments[0].length, reduce_default(_pipe, arguments[0], tail_default(arguments)));
  }

  // node_modules/ramda/es/internal/_toISOString.js
  var pad = function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  };
  var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
    return d.toISOString();
  } : function _toISOString3(d) {
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
  };

  // node_modules/ramda/es/internal/_complement.js
  function _complement(f) {
    return function() {
      return !f.apply(this, arguments);
    };
  }

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

  // node_modules/ramda/es/internal/_isObject.js
  function _isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]";
  }

  // node_modules/ramda/es/internal/_xfilter.js
  var XFilter = /* @__PURE__ */ function() {
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
  var _xfilter = /* @__PURE__ */ _curry2(function _xfilter2(f, xf) {
    return new XFilter(f, xf);
  });
  var xfilter_default = _xfilter;

  // node_modules/ramda/es/filter.js
  var filter = /* @__PURE__ */ _curry2(
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
  var filter_default = filter;

  // node_modules/ramda/es/reject.js
  var reject = /* @__PURE__ */ _curry2(function reject2(pred, filterable) {
    return filter_default(_complement(pred), filterable);
  });
  var reject_default = reject;

  // node_modules/ramda/es/internal/_objectAssign.js
  function _objectAssign(target) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    var idx = 1;
    var length = arguments.length;
    while (idx < length) {
      var source = arguments[idx];
      if (source != null) {
        for (var nextKey in source) {
          if (_has(nextKey, source)) {
            output[nextKey] = source[nextKey];
          }
        }
      }
      idx += 1;
    }
    return output;
  }
  var objectAssign_default = typeof Object.assign === "function" ? Object.assign : _objectAssign;

  // node_modules/ramda/es/is.js
  var is = /* @__PURE__ */ _curry2(function is2(Ctor, val) {
    return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === "Object" && typeof val === "object");
  });
  var is_default = is;

  // node_modules/ramda/es/mergeLeft.js
  var mergeLeft = /* @__PURE__ */ _curry2(function mergeLeft2(l, r) {
    return objectAssign_default({}, r, l);
  });
  var mergeLeft_default = mergeLeft;

  // node_modules/ramda/es/trim.js
  var hasProtoTrim = typeof String.prototype.trim === "function";

  // node_modules/ramda/es/when.js
  var when = /* @__PURE__ */ _curry3(function when2(pred, whenTrueFn, x) {
    return pred(x) ? whenTrueFn(x) : x;
  });
  var when_default = when;

  // src/lib/number.mod.ts
  Number.prototype.mod = function(n) {
    return knuth_mod(this, n);
  };
  function knuth_mod(dividend, divisor) {
    return dividend - divisor * Math.floor(dividend / divisor);
  }

  // src/lib/nearley_utils.ts
  var nearley = __toESM(require_nearley());
  var Parser2 = class {
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

  // src/grammars/.bracketexpr.generated.ts
  function id(d) {
    return d[0];
  }
  var grammar = {
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
          (mods, _, reject3) => {
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
                  return reject3;
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
  var bracketexpr_generated_default = grammar;

  // src/lib/keyseq.ts
  var bracketexpr_grammar = bracketexpr_generated_default;
  var bracketexpr_parser = new Parser2(bracketexpr_grammar);
  var KEYMAP_CACHE = {};
  browser.storage.onChanged.addListener((changes) => {
    if ("userconfig" in changes) {
      KEYMAP_CACHE = {};
    }
  });

  // src/lib/binding.ts
  var mode2maps = /* @__PURE__ */ new Map([
    ["normal", "nmaps"],
    ["ignore", "ignoremaps"],
    ["insert", "imaps"],
    ["input", "inputmaps"],
    ["ex", "exmaps"],
    ["hint", "hintmaps"],
    ["visual", "vmaps"],
    ["browser", "browsermaps"]
  ]);
  var maps2mode = new Map(
    Array.from(mode2maps.keys()).map((k) => [mode2maps.get(k), k])
  );
  var modes = Array.from(mode2maps.keys());
  var modeMaps = Array.from(maps2mode.keys());

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

  // src/lib/config.ts
  var removeNull = when_default(
    is_default(Object),
    pipe(
      // Ramda gives an error here without the any
      reject_default((val) => val === null),
      map_default((a) => removeNull(a))
    )
  );
  var CONFIGNAME = "userconfig";
  var WAITERS = [];
  var INITIALISED = false;
  function o(object) {
    return Object.assign(/* @__PURE__ */ Object.create(null), object);
  }
  function schlepp(settings) {
    Object.assign(USERCONFIG, settings);
  }
  var USERCONFIG = o({});
  var default_config = class {
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
      this.autocontain = o({
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
      this.proxies = o({
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
  var platform_defaults = {
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
  var mergeDeepCull = pipe(mergeDeep, removeNull);
  var DEFAULTS = mergeDeepCull(
    o(new default_config()),
    platform_defaults[getPlatformOs()]
  );
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
  function mergeDeep(o1, o2) {
    if (o1 === null)
      return Object.assign({}, o2);
    const r = Array.isArray(o1) ? o1.slice() : Object.create(o1);
    Object.assign(r, o1, o2);
    if (o2 === void 0)
      return r;
    Object.keys(o1).filter(
      (key) => typeof o1[key] === "object" && typeof o2[key] === "object"
    ).forEach(
      (key) => r[key] == null ? null : Object.assign(r[key], mergeDeep(o1[key], o2[key]))
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
  async function init() {
    const localConfig = await browser.storage.local.get(CONFIGNAME);
    schlepp(localConfig[CONFIGNAME]);
    INITIALISED = true;
    for (const waiter of WAITERS) {
      waiter();
    }
  }
  var changeListeners = /* @__PURE__ */ new Map();
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
        USERCONFIG = o({});
        Object.keys(old).filter((key) => old[key] !== DEFAULTS[key]).forEach((key) => triggerChangeListeners2(key));
      }
    }
  });
  init();

  // src/lib/url_util.ts
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
        }).replace(/%s\[(-?\d+)?:(-?\d+)?\]/g, function(match, p1, p2) {
          const l = (x) => x >= 1 ? x - 1 : x;
          const start = p1 ? l(parseInt(p1, 10)) : 0;
          const slice3 = p2 ? queryWords.slice(start, l(parseInt(p2, 10))) : queryWords.slice(start);
          return slice3.join(" ");
        })
      );
      return new URL(resultingURL.href.replace("%s", query2));
    } else {
      return new URL(urlPattern.href + query2);
    }
  }

  // src/lib/patience.ts
  var sleep = (duration) => new Promise((res) => setTimeout(res, duration));

  // src/lib/webext.ts
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
  var browserBg = inContentScript() ? browser_proxy_default : browser;
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
      const tab = await browserBg.tabs.create(options2);
      const answer = new Promise((resolve) => {
        if (waitForDOM) {
          const listener = (message2, sender) => {
            var _a;
            if (message2 === "dom_loaded_background" && ((_a = sender == null ? void 0 : sender.tab) == null ? void 0 : _a.id) === tab.id) {
              browserBg.runtime.onMessage.removeListener(listener);
              resolve(tab);
            }
          };
          browserBg.runtime.onMessage.addListener(listener);
        } else {
          resolve(tab);
        }
      });
      return Promise.race([
        answer,
        (async () => {
          await sleep(750);
          return tab;
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
      } catch (e) {
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
    } catch (e) {
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
  async function openInTab(tab, opts = {}, strarr) {
    const maybeURL = await queryAndURLwrangler(strarr);
    if (typeof maybeURL === "string") {
      return browserBg.tabs.update(
        tab.id,
        Object.assign({ url: maybeURL }, opts)
      );
    }
    if (typeof maybeURL === "object") {
      return browserBg.search.search({ tabId: tab.id, ...maybeURL });
    }
    return browserBg.tabs.update(
      tab.id,
      Object.assign({ url: "/static/newtab.html" }, opts)
    );
  }
  async function goToTab(tabId) {
    const tab = await browserBg.tabs.update(tabId, { active: true });
    await browserBg.windows.update(tab.windowId, { focused: true });
    return tab;
  }

  // src/lib/logging.ts
  var LevelToNum = /* @__PURE__ */ new Map();
  LevelToNum.set("never", 0);
  LevelToNum.set("error", 1);
  LevelToNum.set("warning", 2);
  LevelToNum.set("info", 3);
  LevelToNum.set("debug", 4);
  var Logger = class {
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
  var logging_default = Logger;

  // src/lib/messaging.ts
  var logger = new logging_default("messaging");
  async function message(type, command, ...args) {
    const message2 = {
      type,
      command,
      args
    };
    return browser.runtime.sendMessage(message2);
  }
  var listeners = /* @__PURE__ */ new Map();
  function addListener(type, callback) {
    if (!listeners.get(type)) {
      listeners.set(type, /* @__PURE__ */ new Set());
    }
    listeners.get(type).add(callback);
    return () => {
      listeners.get(type).delete(callback);
    };
  }
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
  function onMessage(message2, sender, sendResponse) {
    if (listeners.get(message2.type)) {
      for (const listener of listeners.get(message2.type)) {
        listener(message2, sender, sendResponse);
      }
    }
  }
  browser.runtime.onMessage.addListener(onMessage);

  // src/newtab.ts
  function getChangelogDiv() {
    const changelogDiv = document.getElementById("changelog");
    if (!changelogDiv)
      throw new Error("Couldn't find changelog element!");
    return changelogDiv;
  }
  function updateChangelogStatus() {
    const changelogDiv = getChangelogDiv();
    const changelogContent = changelogDiv.textContent;
    if (browser.extension.inIncognitoContext || localStorage.changelogContent === changelogContent) {
      const changelogButton = document.querySelector('input[id^="spoiler"]');
      if (!changelogButton) {
        console.error("Couldn't find changelog button!");
        return;
      }
      changelogButton.classList.add("seen");
    }
  }
  function readChangelog() {
    const changelogDiv = getChangelogDiv();
    localStorage.changelogContent = changelogDiv.textContent;
    updateChangelogStatus();
  }
  window.addEventListener("load", updateChangelogStatus);
  window.addEventListener("load", (_) => {
    const spoilerbutton = document.getElementById("spoilerbutton");
    if (!spoilerbutton) {
      console.error("Couldn't find spoiler button!");
      return;
    }
    spoilerbutton.addEventListener("click", readChangelog);
  });
  window.addEventListener("load", (_) => {
    if (get("update", "nag") === true) {
      message(
        "controller_background",
        "acceptExCmd",
        "updatecheck auto_polite"
      );
    }
  });
  document.getElementById(
    "tridactyl-version-number"
  ).textContent = getPrettyTriVersion();
})();
//# sourceMappingURL=newtab.js.map
