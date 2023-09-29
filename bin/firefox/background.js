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
                for (var i = wantedBy.length; i--; ) {
                  var left = wantedBy[i];
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
                  for (var i = 0; i < nulls.length; i++) {
                    var right = nulls[i];
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
          for (var i = 0; i < rules.length; i++) {
            var r = rules[i];
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
            message2 += lines.map(function(line, i) {
              return pad3(this.line - lines.length + i + 1, lastLineDigits) + " " + line;
            }, this).join("\n");
            message2 += "\n" + pad3("", lastLineDigits + col) + "^\n";
            return message2;
          } else {
            return message2 + " at index " + (this.index - 1);
          }
          function pad3(n, length3) {
            var s = String(n);
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
              var state2 = scannable[w];
              var expect = state2.rule.symbols[state2.dot];
              if (expect.test ? expect.test(value) : expect.type ? expect.type === token.type : expect.literal === literal) {
                var next = state2.nextState({ data: value, token, isToken: true, reference: n - 1 });
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

  // node_modules/css/lib/parse/index.js
  var require_parse = __commonJS({
    "node_modules/css/lib/parse/index.js"(exports, module) {
      var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
      module.exports = function(css, options) {
        options = options || {};
        var lineno = 1;
        var column = 1;
        function updatePosition(str2) {
          var lines = str2.match(/\n/g);
          if (lines)
            lineno += lines.length;
          var i = str2.lastIndexOf("\n");
          column = ~i ? str2.length - i : column + str2.length;
        }
        function position() {
          var start = { line: lineno, column };
          return function(node) {
            node.position = new Position(start);
            whitespace();
            return node;
          };
        }
        function Position(start) {
          this.start = start;
          this.end = { line: lineno, column };
          this.source = options.source;
        }
        Position.prototype.content = css;
        var errorsList = [];
        function error(msg) {
          var err = new Error(options.source + ":" + lineno + ":" + column + ": " + msg);
          err.reason = msg;
          err.filename = options.source;
          err.line = lineno;
          err.column = column;
          err.source = css;
          if (options.silent) {
            errorsList.push(err);
          } else {
            throw err;
          }
        }
        function stylesheet() {
          var rulesList = rules();
          return {
            type: "stylesheet",
            stylesheet: {
              source: options.source,
              rules: rulesList,
              parsingErrors: errorsList
            }
          };
        }
        function open2() {
          return match3(/^{\s*/);
        }
        function close() {
          return match3(/^}/);
        }
        function rules() {
          var node;
          var rules2 = [];
          whitespace();
          comments(rules2);
          while (css.length && css.charAt(0) != "}" && (node = atrule() || rule())) {
            if (node !== false) {
              rules2.push(node);
              comments(rules2);
            }
          }
          return rules2;
        }
        function match3(re) {
          var m = re.exec(css);
          if (!m)
            return;
          var str2 = m[0];
          updatePosition(str2);
          css = css.slice(str2.length);
          return m;
        }
        function whitespace() {
          match3(/^\s*/);
        }
        function comments(rules2) {
          var c;
          rules2 = rules2 || [];
          while (c = comment()) {
            if (c !== false) {
              rules2.push(c);
            }
          }
          return rules2;
        }
        function comment() {
          var pos = position();
          if ("/" != css.charAt(0) || "*" != css.charAt(1))
            return;
          var i = 2;
          while ("" != css.charAt(i) && ("*" != css.charAt(i) || "/" != css.charAt(i + 1)))
            ++i;
          i += 2;
          if ("" === css.charAt(i - 1)) {
            return error("End of comment missing");
          }
          var str2 = css.slice(2, i - 2);
          column += 2;
          updatePosition(str2);
          css = css.slice(i);
          column += 2;
          return pos({
            type: "comment",
            comment: str2
          });
        }
        function selector() {
          var m = match3(/^([^{]+)/);
          if (!m)
            return;
          return trim4(m[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(m2) {
            return m2.replace(/,/g, "\u200C");
          }).split(/\s*(?![^(]*\)),\s*/).map(function(s) {
            return s.replace(/\u200C/g, ",");
          });
        }
        function declaration() {
          var pos = position();
          var prop3 = match3(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
          if (!prop3)
            return;
          prop3 = trim4(prop3[0]);
          if (!match3(/^:\s*/))
            return error("property missing ':'");
          var val = match3(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
          var ret = pos({
            type: "declaration",
            property: prop3.replace(commentre, ""),
            value: val ? trim4(val[0]).replace(commentre, "") : ""
          });
          match3(/^[;\s]*/);
          return ret;
        }
        function declarations() {
          var decls = [];
          if (!open2())
            return error("missing '{'");
          comments(decls);
          var decl;
          while (decl = declaration()) {
            if (decl !== false) {
              decls.push(decl);
              comments(decls);
            }
          }
          if (!close())
            return error("missing '}'");
          return decls;
        }
        function keyframe() {
          var m;
          var vals = [];
          var pos = position();
          while (m = match3(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
            vals.push(m[1]);
            match3(/^,\s*/);
          }
          if (!vals.length)
            return;
          return pos({
            type: "keyframe",
            values: vals,
            declarations: declarations()
          });
        }
        function atkeyframes() {
          var pos = position();
          var m = match3(/^@([-\w]+)?keyframes\s*/);
          if (!m)
            return;
          var vendor = m[1];
          var m = match3(/^([-\w]+)\s*/);
          if (!m)
            return error("@keyframes missing name");
          var name = m[1];
          if (!open2())
            return error("@keyframes missing '{'");
          var frame;
          var frames = comments();
          while (frame = keyframe()) {
            frames.push(frame);
            frames = frames.concat(comments());
          }
          if (!close())
            return error("@keyframes missing '}'");
          return pos({
            type: "keyframes",
            name,
            vendor,
            keyframes: frames
          });
        }
        function atsupports() {
          var pos = position();
          var m = match3(/^@supports *([^{]+)/);
          if (!m)
            return;
          var supports = trim4(m[1]);
          if (!open2())
            return error("@supports missing '{'");
          var style = comments().concat(rules());
          if (!close())
            return error("@supports missing '}'");
          return pos({
            type: "supports",
            supports,
            rules: style
          });
        }
        function athost() {
          var pos = position();
          var m = match3(/^@host\s*/);
          if (!m)
            return;
          if (!open2())
            return error("@host missing '{'");
          var style = comments().concat(rules());
          if (!close())
            return error("@host missing '}'");
          return pos({
            type: "host",
            rules: style
          });
        }
        function atmedia() {
          var pos = position();
          var m = match3(/^@media *([^{]+)/);
          if (!m)
            return;
          var media = trim4(m[1]);
          if (!open2())
            return error("@media missing '{'");
          var style = comments().concat(rules());
          if (!close())
            return error("@media missing '}'");
          return pos({
            type: "media",
            media,
            rules: style
          });
        }
        function atcustommedia() {
          var pos = position();
          var m = match3(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
          if (!m)
            return;
          return pos({
            type: "custom-media",
            name: trim4(m[1]),
            media: trim4(m[2])
          });
        }
        function atpage() {
          var pos = position();
          var m = match3(/^@page */);
          if (!m)
            return;
          var sel = selector() || [];
          if (!open2())
            return error("@page missing '{'");
          var decls = comments();
          var decl;
          while (decl = declaration()) {
            decls.push(decl);
            decls = decls.concat(comments());
          }
          if (!close())
            return error("@page missing '}'");
          return pos({
            type: "page",
            selectors: sel,
            declarations: decls
          });
        }
        function atdocument() {
          var pos = position();
          var m = match3(/^@([-\w]+)?document *([^{]+)/);
          if (!m)
            return;
          var vendor = trim4(m[1]);
          var doc = trim4(m[2]);
          if (!open2())
            return error("@document missing '{'");
          var style = comments().concat(rules());
          if (!close())
            return error("@document missing '}'");
          return pos({
            type: "document",
            document: doc,
            vendor,
            rules: style
          });
        }
        function atfontface() {
          var pos = position();
          var m = match3(/^@font-face\s*/);
          if (!m)
            return;
          if (!open2())
            return error("@font-face missing '{'");
          var decls = comments();
          var decl;
          while (decl = declaration()) {
            decls.push(decl);
            decls = decls.concat(comments());
          }
          if (!close())
            return error("@font-face missing '}'");
          return pos({
            type: "font-face",
            declarations: decls
          });
        }
        var atimport = _compileAtrule("import");
        var atcharset = _compileAtrule("charset");
        var atnamespace = _compileAtrule("namespace");
        function _compileAtrule(name) {
          var re = new RegExp("^@" + name + "\\s*([^;]+);");
          return function() {
            var pos = position();
            var m = match3(re);
            if (!m)
              return;
            var ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
          };
        }
        function atrule() {
          if (css[0] != "@")
            return;
          return atkeyframes() || atmedia() || atcustommedia() || atsupports() || atimport() || atcharset() || atnamespace() || atdocument() || atpage() || athost() || atfontface();
        }
        function rule() {
          var pos = position();
          var sel = selector();
          if (!sel)
            return error("selector missing");
          comments();
          return pos({
            type: "rule",
            selectors: sel,
            declarations: declarations()
          });
        }
        return addParent(stylesheet());
      };
      function trim4(str2) {
        return str2 ? str2.replace(/^\s+|\s+$/g, "") : "";
      }
      function addParent(obj, parent) {
        var isNode = obj && typeof obj.type === "string";
        var childParent = isNode ? obj : parent;
        for (var k in obj) {
          var value = obj[k];
          if (Array.isArray(value)) {
            value.forEach(function(v) {
              addParent(v, childParent);
            });
          } else if (value && typeof value === "object") {
            addParent(value, childParent);
          }
        }
        if (isNode) {
          Object.defineProperty(obj, "parent", {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null
          });
        }
        return obj;
      }
    }
  });

  // node_modules/css/lib/stringify/compiler.js
  var require_compiler = __commonJS({
    "node_modules/css/lib/stringify/compiler.js"(exports, module) {
      module.exports = Compiler;
      function Compiler(opts) {
        this.options = opts || {};
      }
      Compiler.prototype.emit = function(str2) {
        return str2;
      };
      Compiler.prototype.visit = function(node) {
        return this[node.type](node);
      };
      Compiler.prototype.mapVisit = function(nodes, delim) {
        var buf = "";
        delim = delim || "";
        for (var i = 0, length3 = nodes.length; i < length3; i++) {
          buf += this.visit(nodes[i]);
          if (delim && i < length3 - 1)
            buf += this.emit(delim);
        }
        return buf;
      };
    }
  });

  // node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "node_modules/inherits/inherits_browser.js"(exports, module) {
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // node_modules/css/lib/stringify/compress.js
  var require_compress = __commonJS({
    "node_modules/css/lib/stringify/compress.js"(exports, module) {
      var Base = require_compiler();
      var inherits = require_inherits_browser();
      module.exports = Compiler;
      function Compiler(options) {
        Base.call(this, options);
      }
      inherits(Compiler, Base);
      Compiler.prototype.compile = function(node) {
        return node.stylesheet.rules.map(this.visit, this).join("");
      };
      Compiler.prototype.comment = function(node) {
        return this.emit("", node.position);
      };
      Compiler.prototype.import = function(node) {
        return this.emit("@import " + node.import + ";", node.position);
      };
      Compiler.prototype.media = function(node) {
        return this.emit("@media " + node.media, node.position) + this.emit("{") + this.mapVisit(node.rules) + this.emit("}");
      };
      Compiler.prototype.document = function(node) {
        var doc = "@" + (node.vendor || "") + "document " + node.document;
        return this.emit(doc, node.position) + this.emit("{") + this.mapVisit(node.rules) + this.emit("}");
      };
      Compiler.prototype.charset = function(node) {
        return this.emit("@charset " + node.charset + ";", node.position);
      };
      Compiler.prototype.namespace = function(node) {
        return this.emit("@namespace " + node.namespace + ";", node.position);
      };
      Compiler.prototype.supports = function(node) {
        return this.emit("@supports " + node.supports, node.position) + this.emit("{") + this.mapVisit(node.rules) + this.emit("}");
      };
      Compiler.prototype.keyframes = function(node) {
        return this.emit("@" + (node.vendor || "") + "keyframes " + node.name, node.position) + this.emit("{") + this.mapVisit(node.keyframes) + this.emit("}");
      };
      Compiler.prototype.keyframe = function(node) {
        var decls = node.declarations;
        return this.emit(node.values.join(","), node.position) + this.emit("{") + this.mapVisit(decls) + this.emit("}");
      };
      Compiler.prototype.page = function(node) {
        var sel = node.selectors.length ? node.selectors.join(", ") : "";
        return this.emit("@page " + sel, node.position) + this.emit("{") + this.mapVisit(node.declarations) + this.emit("}");
      };
      Compiler.prototype["font-face"] = function(node) {
        return this.emit("@font-face", node.position) + this.emit("{") + this.mapVisit(node.declarations) + this.emit("}");
      };
      Compiler.prototype.host = function(node) {
        return this.emit("@host", node.position) + this.emit("{") + this.mapVisit(node.rules) + this.emit("}");
      };
      Compiler.prototype["custom-media"] = function(node) {
        return this.emit("@custom-media " + node.name + " " + node.media + ";", node.position);
      };
      Compiler.prototype.rule = function(node) {
        var decls = node.declarations;
        if (!decls.length)
          return "";
        return this.emit(node.selectors.join(","), node.position) + this.emit("{") + this.mapVisit(decls) + this.emit("}");
      };
      Compiler.prototype.declaration = function(node) {
        return this.emit(node.property + ":" + node.value, node.position) + this.emit(";");
      };
    }
  });

  // node_modules/css/lib/stringify/identity.js
  var require_identity = __commonJS({
    "node_modules/css/lib/stringify/identity.js"(exports, module) {
      var Base = require_compiler();
      var inherits = require_inherits_browser();
      module.exports = Compiler;
      function Compiler(options) {
        options = options || {};
        Base.call(this, options);
        this.indentation = options.indent;
      }
      inherits(Compiler, Base);
      Compiler.prototype.compile = function(node) {
        return this.stylesheet(node);
      };
      Compiler.prototype.stylesheet = function(node) {
        return this.mapVisit(node.stylesheet.rules, "\n\n");
      };
      Compiler.prototype.comment = function(node) {
        return this.emit(this.indent() + "/*" + node.comment + "*/", node.position);
      };
      Compiler.prototype.import = function(node) {
        return this.emit("@import " + node.import + ";", node.position);
      };
      Compiler.prototype.media = function(node) {
        return this.emit("@media " + node.media, node.position) + this.emit(
          " {\n" + this.indent(1)
        ) + this.mapVisit(node.rules, "\n\n") + this.emit(
          this.indent(-1) + "\n}"
        );
      };
      Compiler.prototype.document = function(node) {
        var doc = "@" + (node.vendor || "") + "document " + node.document;
        return this.emit(doc, node.position) + this.emit(
          "  {\n" + this.indent(1)
        ) + this.mapVisit(node.rules, "\n\n") + this.emit(
          this.indent(-1) + "\n}"
        );
      };
      Compiler.prototype.charset = function(node) {
        return this.emit("@charset " + node.charset + ";", node.position);
      };
      Compiler.prototype.namespace = function(node) {
        return this.emit("@namespace " + node.namespace + ";", node.position);
      };
      Compiler.prototype.supports = function(node) {
        return this.emit("@supports " + node.supports, node.position) + this.emit(
          " {\n" + this.indent(1)
        ) + this.mapVisit(node.rules, "\n\n") + this.emit(
          this.indent(-1) + "\n}"
        );
      };
      Compiler.prototype.keyframes = function(node) {
        return this.emit("@" + (node.vendor || "") + "keyframes " + node.name, node.position) + this.emit(
          " {\n" + this.indent(1)
        ) + this.mapVisit(node.keyframes, "\n") + this.emit(
          this.indent(-1) + "}"
        );
      };
      Compiler.prototype.keyframe = function(node) {
        var decls = node.declarations;
        return this.emit(this.indent()) + this.emit(node.values.join(", "), node.position) + this.emit(
          " {\n" + this.indent(1)
        ) + this.mapVisit(decls, "\n") + this.emit(
          this.indent(-1) + "\n" + this.indent() + "}\n"
        );
      };
      Compiler.prototype.page = function(node) {
        var sel = node.selectors.length ? node.selectors.join(", ") + " " : "";
        return this.emit("@page " + sel, node.position) + this.emit("{\n") + this.emit(this.indent(1)) + this.mapVisit(node.declarations, "\n") + this.emit(this.indent(-1)) + this.emit("\n}");
      };
      Compiler.prototype["font-face"] = function(node) {
        return this.emit("@font-face ", node.position) + this.emit("{\n") + this.emit(this.indent(1)) + this.mapVisit(node.declarations, "\n") + this.emit(this.indent(-1)) + this.emit("\n}");
      };
      Compiler.prototype.host = function(node) {
        return this.emit("@host", node.position) + this.emit(
          " {\n" + this.indent(1)
        ) + this.mapVisit(node.rules, "\n\n") + this.emit(
          this.indent(-1) + "\n}"
        );
      };
      Compiler.prototype["custom-media"] = function(node) {
        return this.emit("@custom-media " + node.name + " " + node.media + ";", node.position);
      };
      Compiler.prototype.rule = function(node) {
        var indent = this.indent();
        var decls = node.declarations;
        if (!decls.length)
          return "";
        return this.emit(node.selectors.map(function(s) {
          return indent + s;
        }).join(",\n"), node.position) + this.emit(" {\n") + this.emit(this.indent(1)) + this.mapVisit(decls, "\n") + this.emit(this.indent(-1)) + this.emit("\n" + this.indent() + "}");
      };
      Compiler.prototype.declaration = function(node) {
        return this.emit(this.indent()) + this.emit(node.property + ": " + node.value, node.position) + this.emit(";");
      };
      Compiler.prototype.indent = function(level) {
        this.level = this.level || 1;
        if (null != level) {
          this.level += level;
          return "";
        }
        return Array(this.level).join(this.indentation || "  ");
      };
    }
  });

  // node_modules/source-map/lib/base64.js
  var require_base64 = __commonJS({
    "node_modules/source-map/lib/base64.js"(exports) {
      var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      exports.encode = function(number) {
        if (0 <= number && number < intToCharMap.length) {
          return intToCharMap[number];
        }
        throw new TypeError("Must be between 0 and 63: " + number);
      };
      exports.decode = function(charCode) {
        var bigA = 65;
        var bigZ = 90;
        var littleA = 97;
        var littleZ = 122;
        var zero = 48;
        var nine = 57;
        var plus = 43;
        var slash = 47;
        var littleOffset = 26;
        var numberOffset = 52;
        if (bigA <= charCode && charCode <= bigZ) {
          return charCode - bigA;
        }
        if (littleA <= charCode && charCode <= littleZ) {
          return charCode - littleA + littleOffset;
        }
        if (zero <= charCode && charCode <= nine) {
          return charCode - zero + numberOffset;
        }
        if (charCode == plus) {
          return 62;
        }
        if (charCode == slash) {
          return 63;
        }
        return -1;
      };
    }
  });

  // node_modules/source-map/lib/base64-vlq.js
  var require_base64_vlq = __commonJS({
    "node_modules/source-map/lib/base64-vlq.js"(exports) {
      var base64 = require_base64();
      var VLQ_BASE_SHIFT = 5;
      var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
      var VLQ_BASE_MASK = VLQ_BASE - 1;
      var VLQ_CONTINUATION_BIT = VLQ_BASE;
      function toVLQSigned(aValue) {
        return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
      }
      function fromVLQSigned(aValue) {
        var isNegative = (aValue & 1) === 1;
        var shifted = aValue >> 1;
        return isNegative ? -shifted : shifted;
      }
      exports.encode = function base64VLQ_encode(aValue) {
        var encoded = "";
        var digit;
        var vlq = toVLQSigned(aValue);
        do {
          digit = vlq & VLQ_BASE_MASK;
          vlq >>>= VLQ_BASE_SHIFT;
          if (vlq > 0) {
            digit |= VLQ_CONTINUATION_BIT;
          }
          encoded += base64.encode(digit);
        } while (vlq > 0);
        return encoded;
      };
      exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
        var strLen = aStr.length;
        var result = 0;
        var shift = 0;
        var continuation, digit;
        do {
          if (aIndex >= strLen) {
            throw new Error("Expected more digits in base 64 VLQ value.");
          }
          digit = base64.decode(aStr.charCodeAt(aIndex++));
          if (digit === -1) {
            throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
          }
          continuation = !!(digit & VLQ_CONTINUATION_BIT);
          digit &= VLQ_BASE_MASK;
          result = result + (digit << shift);
          shift += VLQ_BASE_SHIFT;
        } while (continuation);
        aOutParam.value = fromVLQSigned(result);
        aOutParam.rest = aIndex;
      };
    }
  });

  // node_modules/source-map/lib/util.js
  var require_util = __commonJS({
    "node_modules/source-map/lib/util.js"(exports) {
      function getArg(aArgs, aName, aDefaultValue) {
        if (aName in aArgs) {
          return aArgs[aName];
        } else if (arguments.length === 3) {
          return aDefaultValue;
        } else {
          throw new Error('"' + aName + '" is a required argument.');
        }
      }
      exports.getArg = getArg;
      var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
      var dataUrlRegexp = /^data:.+\,.+$/;
      function urlParse(aUrl) {
        var match3 = aUrl.match(urlRegexp);
        if (!match3) {
          return null;
        }
        return {
          scheme: match3[1],
          auth: match3[2],
          host: match3[3],
          port: match3[4],
          path: match3[5]
        };
      }
      exports.urlParse = urlParse;
      function urlGenerate(aParsedUrl) {
        var url = "";
        if (aParsedUrl.scheme) {
          url += aParsedUrl.scheme + ":";
        }
        url += "//";
        if (aParsedUrl.auth) {
          url += aParsedUrl.auth + "@";
        }
        if (aParsedUrl.host) {
          url += aParsedUrl.host;
        }
        if (aParsedUrl.port) {
          url += ":" + aParsedUrl.port;
        }
        if (aParsedUrl.path) {
          url += aParsedUrl.path;
        }
        return url;
      }
      exports.urlGenerate = urlGenerate;
      function normalize(aPath) {
        var path3 = aPath;
        var url = urlParse(aPath);
        if (url) {
          if (!url.path) {
            return aPath;
          }
          path3 = url.path;
        }
        var isAbsolute = exports.isAbsolute(path3);
        var parts = path3.split(/\/+/);
        for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
          part = parts[i];
          if (part === ".") {
            parts.splice(i, 1);
          } else if (part === "..") {
            up++;
          } else if (up > 0) {
            if (part === "") {
              parts.splice(i + 1, up);
              up = 0;
            } else {
              parts.splice(i, 2);
              up--;
            }
          }
        }
        path3 = parts.join("/");
        if (path3 === "") {
          path3 = isAbsolute ? "/" : ".";
        }
        if (url) {
          url.path = path3;
          return urlGenerate(url);
        }
        return path3;
      }
      exports.normalize = normalize;
      function join2(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }
        if (aPath === "") {
          aPath = ".";
        }
        var aPathUrl = urlParse(aPath);
        var aRootUrl = urlParse(aRoot);
        if (aRootUrl) {
          aRoot = aRootUrl.path || "/";
        }
        if (aPathUrl && !aPathUrl.scheme) {
          if (aRootUrl) {
            aPathUrl.scheme = aRootUrl.scheme;
          }
          return urlGenerate(aPathUrl);
        }
        if (aPathUrl || aPath.match(dataUrlRegexp)) {
          return aPath;
        }
        if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
          aRootUrl.host = aPath;
          return urlGenerate(aRootUrl);
        }
        var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
        if (aRootUrl) {
          aRootUrl.path = joined;
          return urlGenerate(aRootUrl);
        }
        return joined;
      }
      exports.join = join2;
      exports.isAbsolute = function(aPath) {
        return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
      };
      function relative(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }
        aRoot = aRoot.replace(/\/$/, "");
        var level = 0;
        while (aPath.indexOf(aRoot + "/") !== 0) {
          var index2 = aRoot.lastIndexOf("/");
          if (index2 < 0) {
            return aPath;
          }
          aRoot = aRoot.slice(0, index2);
          if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
            return aPath;
          }
          ++level;
        }
        return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
      }
      exports.relative = relative;
      var supportsNullProto = function() {
        var obj = /* @__PURE__ */ Object.create(null);
        return !("__proto__" in obj);
      }();
      function identity2(s) {
        return s;
      }
      function toSetString(aStr) {
        if (isProtoString(aStr)) {
          return "$" + aStr;
        }
        return aStr;
      }
      exports.toSetString = supportsNullProto ? identity2 : toSetString;
      function fromSetString(aStr) {
        if (isProtoString(aStr)) {
          return aStr.slice(1);
        }
        return aStr;
      }
      exports.fromSetString = supportsNullProto ? identity2 : fromSetString;
      function isProtoString(s) {
        if (!s) {
          return false;
        }
        var length3 = s.length;
        if (length3 < 9) {
          return false;
        }
        if (s.charCodeAt(length3 - 1) !== 95 || s.charCodeAt(length3 - 2) !== 95 || s.charCodeAt(length3 - 3) !== 111 || s.charCodeAt(length3 - 4) !== 116 || s.charCodeAt(length3 - 5) !== 111 || s.charCodeAt(length3 - 6) !== 114 || s.charCodeAt(length3 - 7) !== 112 || s.charCodeAt(length3 - 8) !== 95 || s.charCodeAt(length3 - 9) !== 95) {
          return false;
        }
        for (var i = length3 - 10; i >= 0; i--) {
          if (s.charCodeAt(i) !== 36) {
            return false;
          }
        }
        return true;
      }
      function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
        var cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0 || onlyCompareOriginal) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByOriginalPositions = compareByOriginalPositions;
      function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0 || onlyCompareGenerated) {
          return cmp;
        }
        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
      function strcmp(aStr1, aStr2) {
        if (aStr1 === aStr2) {
          return 0;
        }
        if (aStr1 === null) {
          return 1;
        }
        if (aStr2 === null) {
          return -1;
        }
        if (aStr1 > aStr2) {
          return 1;
        }
        return -1;
      }
      function compareByGeneratedPositionsInflated(mappingA, mappingB) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
      function parseSourceMapInput(str2) {
        return JSON.parse(str2.replace(/^\)]}'[^\n]*\n/, ""));
      }
      exports.parseSourceMapInput = parseSourceMapInput;
      function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
        sourceURL = sourceURL || "";
        if (sourceRoot) {
          if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
            sourceRoot += "/";
          }
          sourceURL = sourceRoot + sourceURL;
        }
        if (sourceMapURL) {
          var parsed = urlParse(sourceMapURL);
          if (!parsed) {
            throw new Error("sourceMapURL could not be parsed");
          }
          if (parsed.path) {
            var index2 = parsed.path.lastIndexOf("/");
            if (index2 >= 0) {
              parsed.path = parsed.path.substring(0, index2 + 1);
            }
          }
          sourceURL = join2(urlGenerate(parsed), sourceURL);
        }
        return normalize(sourceURL);
      }
      exports.computeSourceURL = computeSourceURL;
    }
  });

  // node_modules/source-map/lib/array-set.js
  var require_array_set = __commonJS({
    "node_modules/source-map/lib/array-set.js"(exports) {
      var util = require_util();
      var has3 = Object.prototype.hasOwnProperty;
      var hasNativeMap = typeof Map !== "undefined";
      function ArraySet() {
        this._array = [];
        this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
      }
      ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
        var set5 = new ArraySet();
        for (var i = 0, len = aArray.length; i < len; i++) {
          set5.add(aArray[i], aAllowDuplicates);
        }
        return set5;
      };
      ArraySet.prototype.size = function ArraySet_size() {
        return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
      };
      ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
        var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
        var isDuplicate = hasNativeMap ? this.has(aStr) : has3.call(this._set, sStr);
        var idx = this._array.length;
        if (!isDuplicate || aAllowDuplicates) {
          this._array.push(aStr);
        }
        if (!isDuplicate) {
          if (hasNativeMap) {
            this._set.set(aStr, idx);
          } else {
            this._set[sStr] = idx;
          }
        }
      };
      ArraySet.prototype.has = function ArraySet_has(aStr) {
        if (hasNativeMap) {
          return this._set.has(aStr);
        } else {
          var sStr = util.toSetString(aStr);
          return has3.call(this._set, sStr);
        }
      };
      ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
        if (hasNativeMap) {
          var idx = this._set.get(aStr);
          if (idx >= 0) {
            return idx;
          }
        } else {
          var sStr = util.toSetString(aStr);
          if (has3.call(this._set, sStr)) {
            return this._set[sStr];
          }
        }
        throw new Error('"' + aStr + '" is not in the set.');
      };
      ArraySet.prototype.at = function ArraySet_at(aIdx) {
        if (aIdx >= 0 && aIdx < this._array.length) {
          return this._array[aIdx];
        }
        throw new Error("No element indexed by " + aIdx);
      };
      ArraySet.prototype.toArray = function ArraySet_toArray() {
        return this._array.slice();
      };
      exports.ArraySet = ArraySet;
    }
  });

  // node_modules/source-map/lib/mapping-list.js
  var require_mapping_list = __commonJS({
    "node_modules/source-map/lib/mapping-list.js"(exports) {
      var util = require_util();
      function generatedPositionAfter(mappingA, mappingB) {
        var lineA = mappingA.generatedLine;
        var lineB = mappingB.generatedLine;
        var columnA = mappingA.generatedColumn;
        var columnB = mappingB.generatedColumn;
        return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
      }
      function MappingList() {
        this._array = [];
        this._sorted = true;
        this._last = { generatedLine: -1, generatedColumn: 0 };
      }
      MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
        this._array.forEach(aCallback, aThisArg);
      };
      MappingList.prototype.add = function MappingList_add(aMapping) {
        if (generatedPositionAfter(this._last, aMapping)) {
          this._last = aMapping;
          this._array.push(aMapping);
        } else {
          this._sorted = false;
          this._array.push(aMapping);
        }
      };
      MappingList.prototype.toArray = function MappingList_toArray() {
        if (!this._sorted) {
          this._array.sort(util.compareByGeneratedPositionsInflated);
          this._sorted = true;
        }
        return this._array;
      };
      exports.MappingList = MappingList;
    }
  });

  // node_modules/source-map/lib/source-map-generator.js
  var require_source_map_generator = __commonJS({
    "node_modules/source-map/lib/source-map-generator.js"(exports) {
      var base64VLQ = require_base64_vlq();
      var util = require_util();
      var ArraySet = require_array_set().ArraySet;
      var MappingList = require_mapping_list().MappingList;
      function SourceMapGenerator(aArgs) {
        if (!aArgs) {
          aArgs = {};
        }
        this._file = util.getArg(aArgs, "file", null);
        this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
        this._skipValidation = util.getArg(aArgs, "skipValidation", false);
        this._sources = new ArraySet();
        this._names = new ArraySet();
        this._mappings = new MappingList();
        this._sourcesContents = null;
      }
      SourceMapGenerator.prototype._version = 3;
      SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
        var sourceRoot = aSourceMapConsumer.sourceRoot;
        var generator = new SourceMapGenerator({
          file: aSourceMapConsumer.file,
          sourceRoot
        });
        aSourceMapConsumer.eachMapping(function(mapping) {
          var newMapping = {
            generated: {
              line: mapping.generatedLine,
              column: mapping.generatedColumn
            }
          };
          if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) {
              newMapping.source = util.relative(sourceRoot, newMapping.source);
            }
            newMapping.original = {
              line: mapping.originalLine,
              column: mapping.originalColumn
            };
            if (mapping.name != null) {
              newMapping.name = mapping.name;
            }
          }
          generator.addMapping(newMapping);
        });
        aSourceMapConsumer.sources.forEach(function(sourceFile) {
          var sourceRelative = sourceFile;
          if (sourceRoot !== null) {
            sourceRelative = util.relative(sourceRoot, sourceFile);
          }
          if (!generator._sources.has(sourceRelative)) {
            generator._sources.add(sourceRelative);
          }
          var content = aSourceMapConsumer.sourceContentFor(sourceFile);
          if (content != null) {
            generator.setSourceContent(sourceFile, content);
          }
        });
        return generator;
      };
      SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
        var generated = util.getArg(aArgs, "generated");
        var original = util.getArg(aArgs, "original", null);
        var source3 = util.getArg(aArgs, "source", null);
        var name = util.getArg(aArgs, "name", null);
        if (!this._skipValidation) {
          this._validateMapping(generated, original, source3, name);
        }
        if (source3 != null) {
          source3 = String(source3);
          if (!this._sources.has(source3)) {
            this._sources.add(source3);
          }
        }
        if (name != null) {
          name = String(name);
          if (!this._names.has(name)) {
            this._names.add(name);
          }
        }
        this._mappings.add({
          generatedLine: generated.line,
          generatedColumn: generated.column,
          originalLine: original != null && original.line,
          originalColumn: original != null && original.column,
          source: source3,
          name
        });
      };
      SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
        var source3 = aSourceFile;
        if (this._sourceRoot != null) {
          source3 = util.relative(this._sourceRoot, source3);
        }
        if (aSourceContent != null) {
          if (!this._sourcesContents) {
            this._sourcesContents = /* @__PURE__ */ Object.create(null);
          }
          this._sourcesContents[util.toSetString(source3)] = aSourceContent;
        } else if (this._sourcesContents) {
          delete this._sourcesContents[util.toSetString(source3)];
          if (Object.keys(this._sourcesContents).length === 0) {
            this._sourcesContents = null;
          }
        }
      };
      SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
        var sourceFile = aSourceFile;
        if (aSourceFile == null) {
          if (aSourceMapConsumer.file == null) {
            throw new Error(
              `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
            );
          }
          sourceFile = aSourceMapConsumer.file;
        }
        var sourceRoot = this._sourceRoot;
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        var newSources = new ArraySet();
        var newNames = new ArraySet();
        this._mappings.unsortedForEach(function(mapping) {
          if (mapping.source === sourceFile && mapping.originalLine != null) {
            var original = aSourceMapConsumer.originalPositionFor({
              line: mapping.originalLine,
              column: mapping.originalColumn
            });
            if (original.source != null) {
              mapping.source = original.source;
              if (aSourceMapPath != null) {
                mapping.source = util.join(aSourceMapPath, mapping.source);
              }
              if (sourceRoot != null) {
                mapping.source = util.relative(sourceRoot, mapping.source);
              }
              mapping.originalLine = original.line;
              mapping.originalColumn = original.column;
              if (original.name != null) {
                mapping.name = original.name;
              }
            }
          }
          var source3 = mapping.source;
          if (source3 != null && !newSources.has(source3)) {
            newSources.add(source3);
          }
          var name = mapping.name;
          if (name != null && !newNames.has(name)) {
            newNames.add(name);
          }
        }, this);
        this._sources = newSources;
        this._names = newNames;
        aSourceMapConsumer.sources.forEach(function(sourceFile2) {
          var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
          if (content != null) {
            if (aSourceMapPath != null) {
              sourceFile2 = util.join(aSourceMapPath, sourceFile2);
            }
            if (sourceRoot != null) {
              sourceFile2 = util.relative(sourceRoot, sourceFile2);
            }
            this.setSourceContent(sourceFile2, content);
          }
        }, this);
      };
      SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
        if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
          throw new Error(
            "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
          );
        }
        if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
          return;
        } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
          return;
        } else {
          throw new Error("Invalid mapping: " + JSON.stringify({
            generated: aGenerated,
            source: aSource,
            original: aOriginal,
            name: aName
          }));
        }
      };
      SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
        var previousGeneratedColumn = 0;
        var previousGeneratedLine = 1;
        var previousOriginalColumn = 0;
        var previousOriginalLine = 0;
        var previousName = 0;
        var previousSource = 0;
        var result = "";
        var next;
        var mapping;
        var nameIdx;
        var sourceIdx;
        var mappings = this._mappings.toArray();
        for (var i = 0, len = mappings.length; i < len; i++) {
          mapping = mappings[i];
          next = "";
          if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while (mapping.generatedLine !== previousGeneratedLine) {
              next += ";";
              previousGeneratedLine++;
            }
          } else {
            if (i > 0) {
              if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
                continue;
              }
              next += ",";
            }
          }
          next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
          previousGeneratedColumn = mapping.generatedColumn;
          if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
              nameIdx = this._names.indexOf(mapping.name);
              next += base64VLQ.encode(nameIdx - previousName);
              previousName = nameIdx;
            }
          }
          result += next;
        }
        return result;
      };
      SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
        return aSources.map(function(source3) {
          if (!this._sourcesContents) {
            return null;
          }
          if (aSourceRoot != null) {
            source3 = util.relative(aSourceRoot, source3);
          }
          var key = util.toSetString(source3);
          return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
        }, this);
      };
      SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
        var map4 = {
          version: this._version,
          sources: this._sources.toArray(),
          names: this._names.toArray(),
          mappings: this._serializeMappings()
        };
        if (this._file != null) {
          map4.file = this._file;
        }
        if (this._sourceRoot != null) {
          map4.sourceRoot = this._sourceRoot;
        }
        if (this._sourcesContents) {
          map4.sourcesContent = this._generateSourcesContent(map4.sources, map4.sourceRoot);
        }
        return map4;
      };
      SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
        return JSON.stringify(this.toJSON());
      };
      exports.SourceMapGenerator = SourceMapGenerator;
    }
  });

  // node_modules/source-map/lib/binary-search.js
  var require_binary_search = __commonJS({
    "node_modules/source-map/lib/binary-search.js"(exports) {
      exports.GREATEST_LOWER_BOUND = 1;
      exports.LEAST_UPPER_BOUND = 2;
      function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
        var mid = Math.floor((aHigh - aLow) / 2) + aLow;
        var cmp = aCompare(aNeedle, aHaystack[mid], true);
        if (cmp === 0) {
          return mid;
        } else if (cmp > 0) {
          if (aHigh - mid > 1) {
            return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
          }
          if (aBias == exports.LEAST_UPPER_BOUND) {
            return aHigh < aHaystack.length ? aHigh : -1;
          } else {
            return mid;
          }
        } else {
          if (mid - aLow > 1) {
            return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
          }
          if (aBias == exports.LEAST_UPPER_BOUND) {
            return mid;
          } else {
            return aLow < 0 ? -1 : aLow;
          }
        }
      }
      exports.search = function search2(aNeedle, aHaystack, aCompare, aBias) {
        if (aHaystack.length === 0) {
          return -1;
        }
        var index2 = recursiveSearch(
          -1,
          aHaystack.length,
          aNeedle,
          aHaystack,
          aCompare,
          aBias || exports.GREATEST_LOWER_BOUND
        );
        if (index2 < 0) {
          return -1;
        }
        while (index2 - 1 >= 0) {
          if (aCompare(aHaystack[index2], aHaystack[index2 - 1], true) !== 0) {
            break;
          }
          --index2;
        }
        return index2;
      };
    }
  });

  // node_modules/source-map/lib/quick-sort.js
  var require_quick_sort = __commonJS({
    "node_modules/source-map/lib/quick-sort.js"(exports) {
      function swap(ary, x, y) {
        var temp2 = ary[x];
        ary[x] = ary[y];
        ary[y] = temp2;
      }
      function randomIntInRange(low, high) {
        return Math.round(low + Math.random() * (high - low));
      }
      function doQuickSort(ary, comparator4, p, r) {
        if (p < r) {
          var pivotIndex = randomIntInRange(p, r);
          var i = p - 1;
          swap(ary, pivotIndex, r);
          var pivot = ary[r];
          for (var j = p; j < r; j++) {
            if (comparator4(ary[j], pivot) <= 0) {
              i += 1;
              swap(ary, i, j);
            }
          }
          swap(ary, i + 1, j);
          var q = i + 1;
          doQuickSort(ary, comparator4, p, q - 1);
          doQuickSort(ary, comparator4, q + 1, r);
        }
      }
      exports.quickSort = function(ary, comparator4) {
        doQuickSort(ary, comparator4, 0, ary.length - 1);
      };
    }
  });

  // node_modules/source-map/lib/source-map-consumer.js
  var require_source_map_consumer = __commonJS({
    "node_modules/source-map/lib/source-map-consumer.js"(exports) {
      var util = require_util();
      var binarySearch = require_binary_search();
      var ArraySet = require_array_set().ArraySet;
      var base64VLQ = require_base64_vlq();
      var quickSort = require_quick_sort().quickSort;
      function SourceMapConsumer(aSourceMap, aSourceMapURL) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === "string") {
          sourceMap = util.parseSourceMapInput(aSourceMap);
        }
        return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
      }
      SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
        return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
      };
      SourceMapConsumer.prototype._version = 3;
      SourceMapConsumer.prototype.__generatedMappings = null;
      Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
        configurable: true,
        enumerable: true,
        get: function() {
          if (!this.__generatedMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }
          return this.__generatedMappings;
        }
      });
      SourceMapConsumer.prototype.__originalMappings = null;
      Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
        configurable: true,
        enumerable: true,
        get: function() {
          if (!this.__originalMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }
          return this.__originalMappings;
        }
      });
      SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index2) {
        var c = aStr.charAt(index2);
        return c === ";" || c === ",";
      };
      SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        throw new Error("Subclasses must implement _parseMappings");
      };
      SourceMapConsumer.GENERATED_ORDER = 1;
      SourceMapConsumer.ORIGINAL_ORDER = 2;
      SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
      SourceMapConsumer.LEAST_UPPER_BOUND = 2;
      SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
        var context = aContext || null;
        var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
        var mappings;
        switch (order) {
          case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
          case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
          default:
            throw new Error("Unknown order of iteration.");
        }
        var sourceRoot = this.sourceRoot;
        mappings.map(function(mapping) {
          var source3 = mapping.source === null ? null : this._sources.at(mapping.source);
          source3 = util.computeSourceURL(sourceRoot, source3, this._sourceMapURL);
          return {
            source: source3,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
          };
        }, this).forEach(aCallback, context);
      };
      SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
        var line = util.getArg(aArgs, "line");
        var needle = {
          source: util.getArg(aArgs, "source"),
          originalLine: line,
          originalColumn: util.getArg(aArgs, "column", 0)
        };
        needle.source = this._findSourceIndex(needle.source);
        if (needle.source < 0) {
          return [];
        }
        var mappings = [];
        var index2 = this._findMapping(
          needle,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          util.compareByOriginalPositions,
          binarySearch.LEAST_UPPER_BOUND
        );
        if (index2 >= 0) {
          var mapping = this._originalMappings[index2];
          if (aArgs.column === void 0) {
            var originalLine = mapping.originalLine;
            while (mapping && mapping.originalLine === originalLine) {
              mappings.push({
                line: util.getArg(mapping, "generatedLine", null),
                column: util.getArg(mapping, "generatedColumn", null),
                lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
              });
              mapping = this._originalMappings[++index2];
            }
          } else {
            var originalColumn = mapping.originalColumn;
            while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
              mappings.push({
                line: util.getArg(mapping, "generatedLine", null),
                column: util.getArg(mapping, "generatedColumn", null),
                lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
              });
              mapping = this._originalMappings[++index2];
            }
          }
        }
        return mappings;
      };
      exports.SourceMapConsumer = SourceMapConsumer;
      function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === "string") {
          sourceMap = util.parseSourceMapInput(aSourceMap);
        }
        var version2 = util.getArg(sourceMap, "version");
        var sources = util.getArg(sourceMap, "sources");
        var names = util.getArg(sourceMap, "names", []);
        var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
        var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
        var mappings = util.getArg(sourceMap, "mappings");
        var file = util.getArg(sourceMap, "file", null);
        if (version2 != this._version) {
          throw new Error("Unsupported version: " + version2);
        }
        if (sourceRoot) {
          sourceRoot = util.normalize(sourceRoot);
        }
        sources = sources.map(String).map(util.normalize).map(function(source3) {
          return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source3) ? util.relative(sourceRoot, source3) : source3;
        });
        this._names = ArraySet.fromArray(names.map(String), true);
        this._sources = ArraySet.fromArray(sources, true);
        this._absoluteSources = this._sources.toArray().map(function(s) {
          return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
        });
        this.sourceRoot = sourceRoot;
        this.sourcesContent = sourcesContent;
        this._mappings = mappings;
        this._sourceMapURL = aSourceMapURL;
        this.file = file;
      }
      BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
      BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
      BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
        var relativeSource = aSource;
        if (this.sourceRoot != null) {
          relativeSource = util.relative(this.sourceRoot, relativeSource);
        }
        if (this._sources.has(relativeSource)) {
          return this._sources.indexOf(relativeSource);
        }
        var i;
        for (i = 0; i < this._absoluteSources.length; ++i) {
          if (this._absoluteSources[i] == aSource) {
            return i;
          }
        }
        return -1;
      };
      BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
        var smc = Object.create(BasicSourceMapConsumer.prototype);
        var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
        var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
        smc.sourceRoot = aSourceMap._sourceRoot;
        smc.sourcesContent = aSourceMap._generateSourcesContent(
          smc._sources.toArray(),
          smc.sourceRoot
        );
        smc.file = aSourceMap._file;
        smc._sourceMapURL = aSourceMapURL;
        smc._absoluteSources = smc._sources.toArray().map(function(s) {
          return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
        });
        var generatedMappings = aSourceMap._mappings.toArray().slice();
        var destGeneratedMappings = smc.__generatedMappings = [];
        var destOriginalMappings = smc.__originalMappings = [];
        for (var i = 0, length3 = generatedMappings.length; i < length3; i++) {
          var srcMapping = generatedMappings[i];
          var destMapping = new Mapping();
          destMapping.generatedLine = srcMapping.generatedLine;
          destMapping.generatedColumn = srcMapping.generatedColumn;
          if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) {
              destMapping.name = names.indexOf(srcMapping.name);
            }
            destOriginalMappings.push(destMapping);
          }
          destGeneratedMappings.push(destMapping);
        }
        quickSort(smc.__originalMappings, util.compareByOriginalPositions);
        return smc;
      };
      BasicSourceMapConsumer.prototype._version = 3;
      Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
        get: function() {
          return this._absoluteSources.slice();
        }
      });
      function Mapping() {
        this.generatedLine = 0;
        this.generatedColumn = 0;
        this.source = null;
        this.originalLine = null;
        this.originalColumn = null;
        this.name = null;
      }
      BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        var generatedLine = 1;
        var previousGeneratedColumn = 0;
        var previousOriginalLine = 0;
        var previousOriginalColumn = 0;
        var previousSource = 0;
        var previousName = 0;
        var length3 = aStr.length;
        var index2 = 0;
        var cachedSegments = {};
        var temp2 = {};
        var originalMappings = [];
        var generatedMappings = [];
        var mapping, str2, segment, end, value;
        while (index2 < length3) {
          if (aStr.charAt(index2) === ";") {
            generatedLine++;
            index2++;
            previousGeneratedColumn = 0;
          } else if (aStr.charAt(index2) === ",") {
            index2++;
          } else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            for (end = index2; end < length3; end++) {
              if (this._charIsMappingSeparator(aStr, end)) {
                break;
              }
            }
            str2 = aStr.slice(index2, end);
            segment = cachedSegments[str2];
            if (segment) {
              index2 += str2.length;
            } else {
              segment = [];
              while (index2 < end) {
                base64VLQ.decode(aStr, index2, temp2);
                value = temp2.value;
                index2 = temp2.rest;
                segment.push(value);
              }
              if (segment.length === 2) {
                throw new Error("Found a source, but no line and column");
              }
              if (segment.length === 3) {
                throw new Error("Found a source and line, but no column");
              }
              cachedSegments[str2] = segment;
            }
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
              mapping.source = previousSource + segment[1];
              previousSource += segment[1];
              mapping.originalLine = previousOriginalLine + segment[2];
              previousOriginalLine = mapping.originalLine;
              mapping.originalLine += 1;
              mapping.originalColumn = previousOriginalColumn + segment[3];
              previousOriginalColumn = mapping.originalColumn;
              if (segment.length > 4) {
                mapping.name = previousName + segment[4];
                previousName += segment[4];
              }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === "number") {
              originalMappings.push(mapping);
            }
          }
        }
        quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
        this.__generatedMappings = generatedMappings;
        quickSort(originalMappings, util.compareByOriginalPositions);
        this.__originalMappings = originalMappings;
      };
      BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
        if (aNeedle[aLineName] <= 0) {
          throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
        }
        if (aNeedle[aColumnName] < 0) {
          throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
        }
        return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
      };
      BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
        for (var index2 = 0; index2 < this._generatedMappings.length; ++index2) {
          var mapping = this._generatedMappings[index2];
          if (index2 + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index2 + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
              mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
              continue;
            }
          }
          mapping.lastGeneratedColumn = Infinity;
        }
      };
      BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
        var needle = {
          generatedLine: util.getArg(aArgs, "line"),
          generatedColumn: util.getArg(aArgs, "column")
        };
        var index2 = this._findMapping(
          needle,
          this._generatedMappings,
          "generatedLine",
          "generatedColumn",
          util.compareByGeneratedPositionsDeflated,
          util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
        );
        if (index2 >= 0) {
          var mapping = this._generatedMappings[index2];
          if (mapping.generatedLine === needle.generatedLine) {
            var source3 = util.getArg(mapping, "source", null);
            if (source3 !== null) {
              source3 = this._sources.at(source3);
              source3 = util.computeSourceURL(this.sourceRoot, source3, this._sourceMapURL);
            }
            var name = util.getArg(mapping, "name", null);
            if (name !== null) {
              name = this._names.at(name);
            }
            return {
              source: source3,
              line: util.getArg(mapping, "originalLine", null),
              column: util.getArg(mapping, "originalColumn", null),
              name
            };
          }
        }
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      };
      BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
        if (!this.sourcesContent) {
          return false;
        }
        return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
          return sc == null;
        });
      };
      BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
        if (!this.sourcesContent) {
          return null;
        }
        var index2 = this._findSourceIndex(aSource);
        if (index2 >= 0) {
          return this.sourcesContent[index2];
        }
        var relativeSource = aSource;
        if (this.sourceRoot != null) {
          relativeSource = util.relative(this.sourceRoot, relativeSource);
        }
        var url;
        if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
          var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
          if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
            return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
          }
          if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
            return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
          }
        }
        if (nullOnMissing) {
          return null;
        } else {
          throw new Error('"' + relativeSource + '" is not in the SourceMap.');
        }
      };
      BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
        var source3 = util.getArg(aArgs, "source");
        source3 = this._findSourceIndex(source3);
        if (source3 < 0) {
          return {
            line: null,
            column: null,
            lastColumn: null
          };
        }
        var needle = {
          source: source3,
          originalLine: util.getArg(aArgs, "line"),
          originalColumn: util.getArg(aArgs, "column")
        };
        var index2 = this._findMapping(
          needle,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          util.compareByOriginalPositions,
          util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
        );
        if (index2 >= 0) {
          var mapping = this._originalMappings[index2];
          if (mapping.source === needle.source) {
            return {
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            };
          }
        }
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      };
      exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
      function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === "string") {
          sourceMap = util.parseSourceMapInput(aSourceMap);
        }
        var version2 = util.getArg(sourceMap, "version");
        var sections = util.getArg(sourceMap, "sections");
        if (version2 != this._version) {
          throw new Error("Unsupported version: " + version2);
        }
        this._sources = new ArraySet();
        this._names = new ArraySet();
        var lastOffset = {
          line: -1,
          column: 0
        };
        this._sections = sections.map(function(s) {
          if (s.url) {
            throw new Error("Support for url field in sections not implemented.");
          }
          var offset = util.getArg(s, "offset");
          var offsetLine = util.getArg(offset, "line");
          var offsetColumn = util.getArg(offset, "column");
          if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
            throw new Error("Section offsets must be ordered and non-overlapping.");
          }
          lastOffset = offset;
          return {
            generatedOffset: {
              // The offset fields are 0-based, but we use 1-based indices when
              // encoding/decoding from VLQ.
              generatedLine: offsetLine + 1,
              generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
          };
        });
      }
      IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
      IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
      IndexedSourceMapConsumer.prototype._version = 3;
      Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
        get: function() {
          var sources = [];
          for (var i = 0; i < this._sections.length; i++) {
            for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
              sources.push(this._sections[i].consumer.sources[j]);
            }
          }
          return sources;
        }
      });
      IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
        var needle = {
          generatedLine: util.getArg(aArgs, "line"),
          generatedColumn: util.getArg(aArgs, "column")
        };
        var sectionIndex = binarySearch.search(
          needle,
          this._sections,
          function(needle2, section2) {
            var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
            if (cmp) {
              return cmp;
            }
            return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
          }
        );
        var section = this._sections[sectionIndex];
        if (!section) {
          return {
            source: null,
            line: null,
            column: null,
            name: null
          };
        }
        return section.consumer.originalPositionFor({
          line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
          column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
          bias: aArgs.bias
        });
      };
      IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
        return this._sections.every(function(s) {
          return s.consumer.hasContentsOfAllSources();
        });
      };
      IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          var content = section.consumer.sourceContentFor(aSource, true);
          if (content) {
            return content;
          }
        }
        if (nullOnMissing) {
          return null;
        } else {
          throw new Error('"' + aSource + '" is not in the SourceMap.');
        }
      };
      IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) {
            continue;
          }
          var generatedPosition = section.consumer.generatedPositionFor(aArgs);
          if (generatedPosition) {
            var ret = {
              line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
              column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
          }
        }
        return {
          line: null,
          column: null
        };
      };
      IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        this.__generatedMappings = [];
        this.__originalMappings = [];
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          var sectionMappings = section.consumer._generatedMappings;
          for (var j = 0; j < sectionMappings.length; j++) {
            var mapping = sectionMappings[j];
            var source3 = section.consumer._sources.at(mapping.source);
            source3 = util.computeSourceURL(section.consumer.sourceRoot, source3, this._sourceMapURL);
            this._sources.add(source3);
            source3 = this._sources.indexOf(source3);
            var name = null;
            if (mapping.name) {
              name = section.consumer._names.at(mapping.name);
              this._names.add(name);
              name = this._names.indexOf(name);
            }
            var adjustedMapping = {
              source: source3,
              generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
              generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
              originalLine: mapping.originalLine,
              originalColumn: mapping.originalColumn,
              name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === "number") {
              this.__originalMappings.push(adjustedMapping);
            }
          }
        }
        quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
        quickSort(this.__originalMappings, util.compareByOriginalPositions);
      };
      exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
    }
  });

  // node_modules/source-map/lib/source-node.js
  var require_source_node = __commonJS({
    "node_modules/source-map/lib/source-node.js"(exports) {
      var SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
      var util = require_util();
      var REGEX_NEWLINE = /(\r?\n)/;
      var NEWLINE_CODE = 10;
      var isSourceNode = "$$$isSourceNode$$$";
      function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
        this.children = [];
        this.sourceContents = {};
        this.line = aLine == null ? null : aLine;
        this.column = aColumn == null ? null : aColumn;
        this.source = aSource == null ? null : aSource;
        this.name = aName == null ? null : aName;
        this[isSourceNode] = true;
        if (aChunks != null)
          this.add(aChunks);
      }
      SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
        var node = new SourceNode();
        var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
        var remainingLinesIndex = 0;
        var shiftNextLine = function() {
          var lineContents = getNextLine();
          var newLine = getNextLine() || "";
          return lineContents + newLine;
          function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
          }
        };
        var lastGeneratedLine = 1, lastGeneratedColumn = 0;
        var lastMapping = null;
        aSourceMapConsumer.eachMapping(function(mapping) {
          if (lastMapping !== null) {
            if (lastGeneratedLine < mapping.generatedLine) {
              addMappingWithCode(lastMapping, shiftNextLine());
              lastGeneratedLine++;
              lastGeneratedColumn = 0;
            } else {
              var nextLine = remainingLines[remainingLinesIndex] || "";
              var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
              remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
              lastGeneratedColumn = mapping.generatedColumn;
              addMappingWithCode(lastMapping, code);
              lastMapping = mapping;
              return;
            }
          }
          while (lastGeneratedLine < mapping.generatedLine) {
            node.add(shiftNextLine());
            lastGeneratedLine++;
          }
          if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
          }
          lastMapping = mapping;
        }, this);
        if (remainingLinesIndex < remainingLines.length) {
          if (lastMapping) {
            addMappingWithCode(lastMapping, shiftNextLine());
          }
          node.add(remainingLines.splice(remainingLinesIndex).join(""));
        }
        aSourceMapConsumer.sources.forEach(function(sourceFile) {
          var content = aSourceMapConsumer.sourceContentFor(sourceFile);
          if (content != null) {
            if (aRelativePath != null) {
              sourceFile = util.join(aRelativePath, sourceFile);
            }
            node.setSourceContent(sourceFile, content);
          }
        });
        return node;
        function addMappingWithCode(mapping, code) {
          if (mapping === null || mapping.source === void 0) {
            node.add(code);
          } else {
            var source3 = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(
              mapping.originalLine,
              mapping.originalColumn,
              source3,
              code,
              mapping.name
            ));
          }
        }
      };
      SourceNode.prototype.add = function SourceNode_add(aChunk) {
        if (Array.isArray(aChunk)) {
          aChunk.forEach(function(chunk) {
            this.add(chunk);
          }, this);
        } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
          if (aChunk) {
            this.children.push(aChunk);
          }
        } else {
          throw new TypeError(
            "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
          );
        }
        return this;
      };
      SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
        if (Array.isArray(aChunk)) {
          for (var i = aChunk.length - 1; i >= 0; i--) {
            this.prepend(aChunk[i]);
          }
        } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
          this.children.unshift(aChunk);
        } else {
          throw new TypeError(
            "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
          );
        }
        return this;
      };
      SourceNode.prototype.walk = function SourceNode_walk(aFn) {
        var chunk;
        for (var i = 0, len = this.children.length; i < len; i++) {
          chunk = this.children[i];
          if (chunk[isSourceNode]) {
            chunk.walk(aFn);
          } else {
            if (chunk !== "") {
              aFn(chunk, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name
              });
            }
          }
        }
      };
      SourceNode.prototype.join = function SourceNode_join(aSep) {
        var newChildren;
        var i;
        var len = this.children.length;
        if (len > 0) {
          newChildren = [];
          for (i = 0; i < len - 1; i++) {
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
          }
          newChildren.push(this.children[i]);
          this.children = newChildren;
        }
        return this;
      };
      SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
        var lastChild = this.children[this.children.length - 1];
        if (lastChild[isSourceNode]) {
          lastChild.replaceRight(aPattern, aReplacement);
        } else if (typeof lastChild === "string") {
          this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
        } else {
          this.children.push("".replace(aPattern, aReplacement));
        }
        return this;
      };
      SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
        this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
      };
      SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
        for (var i = 0, len = this.children.length; i < len; i++) {
          if (this.children[i][isSourceNode]) {
            this.children[i].walkSourceContents(aFn);
          }
        }
        var sources = Object.keys(this.sourceContents);
        for (var i = 0, len = sources.length; i < len; i++) {
          aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
        }
      };
      SourceNode.prototype.toString = function SourceNode_toString() {
        var str2 = "";
        this.walk(function(chunk) {
          str2 += chunk;
        });
        return str2;
      };
      SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
        var generated = {
          code: "",
          line: 1,
          column: 0
        };
        var map4 = new SourceMapGenerator(aArgs);
        var sourceMappingActive = false;
        var lastOriginalSource = null;
        var lastOriginalLine = null;
        var lastOriginalColumn = null;
        var lastOriginalName = null;
        this.walk(function(chunk, original) {
          generated.code += chunk;
          if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
              map4.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
          } else if (sourceMappingActive) {
            map4.addMapping({
              generated: {
                line: generated.line,
                column: generated.column
              }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
          }
          for (var idx = 0, length3 = chunk.length; idx < length3; idx++) {
            if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
              generated.line++;
              generated.column = 0;
              if (idx + 1 === length3) {
                lastOriginalSource = null;
                sourceMappingActive = false;
              } else if (sourceMappingActive) {
                map4.addMapping({
                  source: original.source,
                  original: {
                    line: original.line,
                    column: original.column
                  },
                  generated: {
                    line: generated.line,
                    column: generated.column
                  },
                  name: original.name
                });
              }
            } else {
              generated.column++;
            }
          }
        });
        this.walkSourceContents(function(sourceFile, sourceContent) {
          map4.setSourceContent(sourceFile, sourceContent);
        });
        return { code: generated.code, map: map4 };
      };
      exports.SourceNode = SourceNode;
    }
  });

  // node_modules/source-map/source-map.js
  var require_source_map = __commonJS({
    "node_modules/source-map/source-map.js"(exports) {
      exports.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
      exports.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
      exports.SourceNode = require_source_node().SourceNode;
    }
  });

  // node_modules/atob/browser-atob.js
  var require_browser_atob = __commonJS({
    "node_modules/atob/browser-atob.js"(exports, module) {
      (function(w) {
        "use strict";
        function findBest(atobNative) {
          if ("function" === typeof atobNative) {
            return atobNative;
          }
          if ("function" === typeof Buffer) {
            return function atobBrowserify(a) {
              return new Buffer(a, "base64").toString("binary");
            };
          }
          if ("object" === typeof w.base64js) {
            return function atobWebWorker_iOS(a) {
              var buf = w.base64js.b64ToByteArray(a);
              return Array.prototype.map.call(buf, function(ch) {
                return String.fromCharCode(ch);
              }).join("");
            };
          }
          return function() {
            throw new Error("You're probably in an old browser or an iOS webworker. It might help to include beatgammit's base64-js.");
          };
        }
        var atobBest = findBest(w.atob);
        w.atob = atobBest;
        if (typeof module === "object" && module && module.exports) {
          module.exports = atobBest;
        }
      })(window);
    }
  });

  // (disabled):url
  var require_url = __commonJS({
    "(disabled):url"() {
    }
  });

  // (disabled):path
  var require_path = __commonJS({
    "(disabled):path"() {
    }
  });

  // node_modules/decode-uri-component/index.js
  var require_decode_uri_component = __commonJS({
    "node_modules/decode-uri-component/index.js"(exports, module) {
      "use strict";
      var token = "%[a-f0-9]{2}";
      var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
      var multiMatcher = new RegExp("(" + token + ")+", "gi");
      function decodeComponents(components, split2) {
        try {
          return [decodeURIComponent(components.join(""))];
        } catch (err) {
        }
        if (components.length === 1) {
          return components;
        }
        split2 = split2 || 1;
        var left = components.slice(0, split2);
        var right = components.slice(split2);
        return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
      }
      function decode(input) {
        try {
          return decodeURIComponent(input);
        } catch (err) {
          var tokens = input.match(singleMatcher) || [];
          for (var i = 1; i < tokens.length; i++) {
            input = decodeComponents(tokens, i).join("");
            tokens = input.match(singleMatcher) || [];
          }
          return input;
        }
      }
      function customDecodeURIComponent(input) {
        var replaceMap = {
          "%FE%FF": "\uFFFD\uFFFD",
          "%FF%FE": "\uFFFD\uFFFD"
        };
        var match3 = multiMatcher.exec(input);
        while (match3) {
          try {
            replaceMap[match3[0]] = decodeURIComponent(match3[0]);
          } catch (err) {
            var result = decode(match3[0]);
            if (result !== match3[0]) {
              replaceMap[match3[0]] = result;
            }
          }
          match3 = multiMatcher.exec(input);
        }
        replaceMap["%C2"] = "\uFFFD";
        var entries = Object.keys(replaceMap);
        for (var i = 0; i < entries.length; i++) {
          var key = entries[i];
          input = input.replace(new RegExp(key, "g"), replaceMap[key]);
        }
        return input;
      }
      module.exports = function(encodedURI) {
        if (typeof encodedURI !== "string") {
          throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
        }
        try {
          encodedURI = encodedURI.replace(/\+/g, " ");
          return decodeURIComponent(encodedURI);
        } catch (err) {
          return customDecodeURIComponent(encodedURI);
        }
      };
    }
  });

  // node_modules/source-map-resolve/index.js
  var require_source_map_resolve = __commonJS({
    "node_modules/source-map-resolve/index.js"(exports, module) {
      var atob2 = require_browser_atob();
      var urlLib = require_url();
      var pathLib = require_path();
      var decodeUriComponentLib = require_decode_uri_component();
      function resolveUrl() {
        return Array.prototype.reduce.call(arguments, function(resolved, nextUrl) {
          return urlLib.resolve(resolved, nextUrl);
        });
      }
      function convertWindowsPath(aPath) {
        return pathLib.sep === "\\" ? aPath.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : aPath;
      }
      function customDecodeUriComponent(string) {
        return decodeUriComponentLib(string.replace(/\+/g, "%2B"));
      }
      function callbackAsync(callback, error, result) {
        setImmediate(function() {
          callback(error, result);
        });
      }
      function parseMapToJSON(string, data) {
        try {
          return JSON.parse(string.replace(/^\)\]\}'/, ""));
        } catch (error) {
          error.sourceMapData = data;
          throw error;
        }
      }
      function readSync(read2, url, data) {
        var readUrl = customDecodeUriComponent(url);
        try {
          return String(read2(readUrl));
        } catch (error) {
          error.sourceMapData = data;
          throw error;
        }
      }
      var innerRegex = /[#@] sourceMappingURL=([^\s'"]*)/;
      var sourceMappingURLRegex = RegExp(
        "(?:/\\*(?:\\s*\r?\n(?://)?)?(?:" + innerRegex.source + ")\\s*\\*/|//(?:" + innerRegex.source + "))\\s*"
      );
      function getSourceMappingUrl(code) {
        var match3 = code.match(sourceMappingURLRegex);
        return match3 ? match3[1] || match3[2] || "" : null;
      }
      function resolveSourceMap(code, codeUrl, read2, callback) {
        var mapData;
        try {
          mapData = resolveSourceMapHelper(code, codeUrl);
        } catch (error) {
          return callbackAsync(callback, error);
        }
        if (!mapData || mapData.map) {
          return callbackAsync(callback, null, mapData);
        }
        var readUrl = customDecodeUriComponent(mapData.url);
        read2(readUrl, function(error, result) {
          if (error) {
            error.sourceMapData = mapData;
            return callback(error);
          }
          mapData.map = String(result);
          try {
            mapData.map = parseMapToJSON(mapData.map, mapData);
          } catch (error2) {
            return callback(error2);
          }
          callback(null, mapData);
        });
      }
      function resolveSourceMapSync(code, codeUrl, read2) {
        var mapData = resolveSourceMapHelper(code, codeUrl);
        if (!mapData || mapData.map) {
          return mapData;
        }
        mapData.map = readSync(read2, mapData.url, mapData);
        mapData.map = parseMapToJSON(mapData.map, mapData);
        return mapData;
      }
      var dataUriRegex = /^data:([^,;]*)(;[^,;]*)*(?:,(.*))?$/;
      var jsonMimeTypeRegex = /^(?:application|text)\/json$/;
      var jsonCharacterEncoding = "utf-8";
      function base64ToBuf(b64) {
        var binStr = atob2(b64);
        var len = binStr.length;
        var arr = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
          arr[i] = binStr.charCodeAt(i);
        }
        return arr;
      }
      function decodeBase64String(b64) {
        if (typeof TextDecoder === "undefined" || typeof Uint8Array === "undefined") {
          return atob2(b64);
        }
        var buf = base64ToBuf(b64);
        var decoder = new TextDecoder(jsonCharacterEncoding, { fatal: true });
        return decoder.decode(buf);
      }
      function resolveSourceMapHelper(code, codeUrl) {
        codeUrl = convertWindowsPath(codeUrl);
        var url = getSourceMappingUrl(code);
        if (!url) {
          return null;
        }
        var dataUri = url.match(dataUriRegex);
        if (dataUri) {
          var mimeType = dataUri[1] || "text/plain";
          var lastParameter = dataUri[2] || "";
          var encoded = dataUri[3] || "";
          var data = {
            sourceMappingURL: url,
            url: null,
            sourcesRelativeTo: codeUrl,
            map: encoded
          };
          if (!jsonMimeTypeRegex.test(mimeType)) {
            var error = new Error("Unuseful data uri mime type: " + mimeType);
            error.sourceMapData = data;
            throw error;
          }
          try {
            data.map = parseMapToJSON(
              lastParameter === ";base64" ? decodeBase64String(encoded) : decodeURIComponent(encoded),
              data
            );
          } catch (error2) {
            error2.sourceMapData = data;
            throw error2;
          }
          return data;
        }
        var mapUrl = resolveUrl(codeUrl, url);
        return {
          sourceMappingURL: url,
          url: mapUrl,
          sourcesRelativeTo: mapUrl,
          map: null
        };
      }
      function resolveSources(map4, mapUrl, read2, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        var pending = map4.sources ? map4.sources.length : 0;
        var result = {
          sourcesResolved: [],
          sourcesContent: []
        };
        if (pending === 0) {
          callbackAsync(callback, null, result);
          return;
        }
        var done = function() {
          pending--;
          if (pending === 0) {
            callback(null, result);
          }
        };
        resolveSourcesHelper(map4, mapUrl, options, function(fullUrl, sourceContent, index2) {
          result.sourcesResolved[index2] = fullUrl;
          if (typeof sourceContent === "string") {
            result.sourcesContent[index2] = sourceContent;
            callbackAsync(done, null);
          } else {
            var readUrl = customDecodeUriComponent(fullUrl);
            read2(readUrl, function(error, source3) {
              result.sourcesContent[index2] = error ? error : String(source3);
              done();
            });
          }
        });
      }
      function resolveSourcesSync(map4, mapUrl, read2, options) {
        var result = {
          sourcesResolved: [],
          sourcesContent: []
        };
        if (!map4.sources || map4.sources.length === 0) {
          return result;
        }
        resolveSourcesHelper(map4, mapUrl, options, function(fullUrl, sourceContent, index2) {
          result.sourcesResolved[index2] = fullUrl;
          if (read2 !== null) {
            if (typeof sourceContent === "string") {
              result.sourcesContent[index2] = sourceContent;
            } else {
              var readUrl = customDecodeUriComponent(fullUrl);
              try {
                result.sourcesContent[index2] = String(read2(readUrl));
              } catch (error) {
                result.sourcesContent[index2] = error;
              }
            }
          }
        });
        return result;
      }
      var endingSlash = /\/?$/;
      function resolveSourcesHelper(map4, mapUrl, options, fn) {
        options = options || {};
        mapUrl = convertWindowsPath(mapUrl);
        var fullUrl;
        var sourceContent;
        var sourceRoot;
        for (var index2 = 0, len = map4.sources.length; index2 < len; index2++) {
          sourceRoot = null;
          if (typeof options.sourceRoot === "string") {
            sourceRoot = options.sourceRoot;
          } else if (typeof map4.sourceRoot === "string" && options.sourceRoot !== false) {
            sourceRoot = map4.sourceRoot;
          }
          if (sourceRoot === null || sourceRoot === "") {
            fullUrl = resolveUrl(mapUrl, map4.sources[index2]);
          } else {
            fullUrl = resolveUrl(mapUrl, sourceRoot.replace(endingSlash, "/"), map4.sources[index2]);
          }
          sourceContent = (map4.sourcesContent || [])[index2];
          fn(fullUrl, sourceContent, index2);
        }
      }
      function resolve(code, codeUrl, read2, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        if (code === null) {
          var mapUrl = codeUrl;
          var data = {
            sourceMappingURL: null,
            url: mapUrl,
            sourcesRelativeTo: mapUrl,
            map: null
          };
          var readUrl = customDecodeUriComponent(mapUrl);
          read2(readUrl, function(error, result) {
            if (error) {
              error.sourceMapData = data;
              return callback(error);
            }
            data.map = String(result);
            try {
              data.map = parseMapToJSON(data.map, data);
            } catch (error2) {
              return callback(error2);
            }
            _resolveSources(data);
          });
        } else {
          resolveSourceMap(code, codeUrl, read2, function(error, mapData) {
            if (error) {
              return callback(error);
            }
            if (!mapData) {
              return callback(null, null);
            }
            _resolveSources(mapData);
          });
        }
        function _resolveSources(mapData) {
          resolveSources(mapData.map, mapData.sourcesRelativeTo, read2, options, function(error, result) {
            if (error) {
              return callback(error);
            }
            mapData.sourcesResolved = result.sourcesResolved;
            mapData.sourcesContent = result.sourcesContent;
            callback(null, mapData);
          });
        }
      }
      function resolveSync(code, codeUrl, read2, options) {
        var mapData;
        if (code === null) {
          var mapUrl = codeUrl;
          mapData = {
            sourceMappingURL: null,
            url: mapUrl,
            sourcesRelativeTo: mapUrl,
            map: null
          };
          mapData.map = readSync(read2, mapUrl, mapData);
          mapData.map = parseMapToJSON(mapData.map, mapData);
        } else {
          mapData = resolveSourceMapSync(code, codeUrl, read2);
          if (!mapData) {
            return null;
          }
        }
        var result = resolveSourcesSync(mapData.map, mapData.sourcesRelativeTo, read2, options);
        mapData.sourcesResolved = result.sourcesResolved;
        mapData.sourcesContent = result.sourcesContent;
        return mapData;
      }
      module.exports = {
        resolveSourceMap,
        resolveSourceMapSync,
        resolveSources,
        resolveSourcesSync,
        resolve,
        resolveSync,
        parseMapToJSON
      };
    }
  });

  // (disabled):fs
  var require_fs = __commonJS({
    "(disabled):fs"() {
    }
  });

  // node_modules/css/lib/stringify/source-map-support.js
  var require_source_map_support = __commonJS({
    "node_modules/css/lib/stringify/source-map-support.js"(exports, module) {
      var SourceMap = require_source_map().SourceMapGenerator;
      var SourceMapConsumer = require_source_map().SourceMapConsumer;
      var sourceMapResolve = require_source_map_resolve();
      var fs = require_fs();
      var path3 = require_path();
      module.exports = mixin;
      var makeFriendlyPath = function(aPath) {
        return path3.sep === "\\" ? aPath.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : aPath;
      };
      function mixin(compiler) {
        compiler._comment = compiler.comment;
        compiler.map = new SourceMap();
        compiler.position = { line: 1, column: 1 };
        compiler.files = {};
        for (var k in exports)
          compiler[k] = exports[k];
      }
      exports.updatePosition = function(str2) {
        var lines = str2.match(/\n/g);
        if (lines)
          this.position.line += lines.length;
        var i = str2.lastIndexOf("\n");
        this.position.column = ~i ? str2.length - i : this.position.column + str2.length;
      };
      exports.emit = function(str2, pos) {
        if (pos) {
          var sourceFile = makeFriendlyPath(pos.source || "source.css");
          this.map.addMapping({
            source: sourceFile,
            generated: {
              line: this.position.line,
              column: Math.max(this.position.column - 1, 0)
            },
            original: {
              line: pos.start.line,
              column: pos.start.column - 1
            }
          });
          this.addFile(sourceFile, pos);
        }
        this.updatePosition(str2);
        return str2;
      };
      exports.addFile = function(file, pos) {
        if (typeof pos.content !== "string")
          return;
        if (Object.prototype.hasOwnProperty.call(this.files, file))
          return;
        this.files[file] = pos.content;
      };
      exports.applySourceMaps = function() {
        Object.keys(this.files).forEach(function(file) {
          var content = this.files[file];
          this.map.setSourceContent(file, content);
          if (this.options.inputSourcemaps !== false) {
            var originalMap = sourceMapResolve.resolveSync(
              content,
              file,
              fs.readFileSync
            );
            if (originalMap) {
              var map4 = new SourceMapConsumer(originalMap.map);
              var relativeTo = originalMap.sourcesRelativeTo;
              this.map.applySourceMap(map4, file, makeFriendlyPath(path3.dirname(relativeTo)));
            }
          }
        }, this);
      };
      exports.comment = function(node) {
        if (/^# sourceMappingURL=/.test(node.comment))
          return this.emit("", node.position);
        else
          return this._comment(node);
      };
    }
  });

  // node_modules/css/lib/stringify/index.js
  var require_stringify = __commonJS({
    "node_modules/css/lib/stringify/index.js"(exports, module) {
      var Compressed = require_compress();
      var Identity2 = require_identity();
      module.exports = function(node, options) {
        options = options || {};
        var compiler = options.compress ? new Compressed(options) : new Identity2(options);
        if (options.sourcemap) {
          var sourcemaps = require_source_map_support();
          sourcemaps(compiler);
          var code = compiler.compile(node);
          compiler.applySourceMaps();
          var map4 = options.sourcemap === "generator" ? compiler.map : compiler.map.toJSON();
          return { code, map: map4 };
        }
        var code = compiler.compile(node);
        return code;
      };
    }
  });

  // node_modules/css/index.js
  var require_css = __commonJS({
    "node_modules/css/index.js"(exports) {
      exports.parse = require_parse();
      exports.stringify = require_stringify();
    }
  });

  // node_modules/semver-compare/index.js
  var require_semver_compare = __commonJS({
    "node_modules/semver-compare/index.js"(exports, module) {
      module.exports = function cmp(a, b) {
        var pa = a.split(".");
        var pb = b.split(".");
        for (var i = 0; i < 3; i++) {
          var na = Number(pa[i]);
          var nb = Number(pb[i]);
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

  // src/lib/browser_proxy_background.ts
  function shim(api, func2, args2) {
    return browser[api][func2](...args2);
  }

  // src/lib/controller.ts
  var controller_exports = {};
  __export(controller_exports, {
    acceptExCmd: () => acceptExCmd,
    setExCmds: () => setExCmds
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

  // node_modules/ramda/es/F.js
  var F = function() {
    return false;
  };
  var F_default = F;

  // node_modules/ramda/es/T.js
  var T = function() {
    return true;
  };
  var T_default = T;

  // node_modules/ramda/es/__.js
  var __default = {
    "@@functional/placeholder": true
  };

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

  // node_modules/ramda/es/add.js
  var add = /* @__PURE__ */ _curry2(function add2(a, b) {
    return Number(a) + Number(b);
  });
  var add_default = add;

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

  // node_modules/ramda/es/curryN.js
  var curryN = /* @__PURE__ */ _curry2(function curryN2(length3, fn) {
    if (length3 === 1) {
      return _curry1(fn);
    }
    return _arity(length3, _curryN(length3, [], fn));
  });
  var curryN_default = curryN;

  // node_modules/ramda/es/addIndex.js
  var addIndex = /* @__PURE__ */ _curry1(function addIndex2(fn) {
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
  var addIndex_default = addIndex;

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

  // node_modules/ramda/es/adjust.js
  var adjust = /* @__PURE__ */ _curry3(function adjust2(idx, fn, list) {
    var len = list.length;
    if (idx >= len || idx < -len) {
      return list;
    }
    var _idx = (len + idx) % len;
    var _list = _concat(list);
    _list[_idx] = fn(list[_idx]);
    return _list;
  });
  var adjust_default = adjust;

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

  // node_modules/ramda/es/internal/_reduced.js
  function _reduced(x) {
    return x && x["@@transducer/reduced"] ? x : {
      "@@transducer/value": x,
      "@@transducer/reduced": true
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

  // node_modules/ramda/es/internal/_xall.js
  var XAll = /* @__PURE__ */ function() {
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
  var _xall = /* @__PURE__ */ _curry2(function _xall2(f, xf) {
    return new XAll(f, xf);
  });
  var xall_default = _xall;

  // node_modules/ramda/es/all.js
  var all = /* @__PURE__ */ _curry2(
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
  var all_default = all;

  // node_modules/ramda/es/max.js
  var max = /* @__PURE__ */ _curry2(function max2(a, b) {
    return b > a ? b : a;
  });
  var max_default = max;

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
  function _has(prop3, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop3);
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

  // node_modules/ramda/es/nth.js
  var nth = /* @__PURE__ */ _curry2(function nth2(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  });
  var nth_default = nth;

  // node_modules/ramda/es/prop.js
  var prop = /* @__PURE__ */ _curry2(function prop2(p, obj) {
    if (obj == null) {
      return;
    }
    return isInteger_default(p) ? nth_default(p, obj) : obj[p];
  });
  var prop_default = prop;

  // node_modules/ramda/es/pluck.js
  var pluck = /* @__PURE__ */ _curry2(function pluck2(p, list) {
    return map_default(prop_default(p), list);
  });
  var pluck_default = pluck;

  // node_modules/ramda/es/reduce.js
  var reduce = /* @__PURE__ */ _curry3(_reduce);
  var reduce_default = reduce;

  // node_modules/ramda/es/allPass.js
  var allPass = /* @__PURE__ */ _curry1(function allPass2(preds) {
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
  var allPass_default = allPass;

  // node_modules/ramda/es/always.js
  var always = /* @__PURE__ */ _curry1(function always2(val) {
    return function() {
      return val;
    };
  });
  var always_default = always;

  // node_modules/ramda/es/and.js
  var and = /* @__PURE__ */ _curry2(function and2(a, b) {
    return a && b;
  });
  var and_default = and;

  // node_modules/ramda/es/internal/_xany.js
  var XAny = /* @__PURE__ */ function() {
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
  var _xany = /* @__PURE__ */ _curry2(function _xany2(f, xf) {
    return new XAny(f, xf);
  });
  var xany_default = _xany;

  // node_modules/ramda/es/any.js
  var any = /* @__PURE__ */ _curry2(
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
  var any_default = any;

  // node_modules/ramda/es/anyPass.js
  var anyPass = /* @__PURE__ */ _curry1(function anyPass2(preds) {
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
  var anyPass_default = anyPass;

  // node_modules/ramda/es/ap.js
  var ap = /* @__PURE__ */ _curry2(function ap2(applyF, applyX) {
    return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
      return applyF(x)(applyX(x));
    } : _reduce(function(acc, f) {
      return _concat(acc, map_default(f, applyX));
    }, [], applyF);
  });
  var ap_default = ap;

  // node_modules/ramda/es/internal/_aperture.js
  function _aperture(n, list) {
    var idx = 0;
    var limit = list.length - (n - 1);
    var acc = new Array(limit >= 0 ? limit : 0);
    while (idx < limit) {
      acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
      idx += 1;
    }
    return acc;
  }

  // node_modules/ramda/es/internal/_xaperture.js
  var XAperture = /* @__PURE__ */ function() {
    function XAperture2(n, xf) {
      this.xf = xf;
      this.pos = 0;
      this.full = false;
      this.acc = new Array(n);
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
  var _xaperture = /* @__PURE__ */ _curry2(function _xaperture2(n, xf) {
    return new XAperture(n, xf);
  });
  var xaperture_default = _xaperture;

  // node_modules/ramda/es/aperture.js
  var aperture = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable([], xaperture_default, _aperture)
  );
  var aperture_default = aperture;

  // node_modules/ramda/es/append.js
  var append = /* @__PURE__ */ _curry2(function append2(el, list) {
    return _concat(list, [el]);
  });
  var append_default = append;

  // node_modules/ramda/es/apply.js
  var apply = /* @__PURE__ */ _curry2(function apply2(fn, args2) {
    return fn.apply(this, args2);
  });
  var apply_default = apply;

  // node_modules/ramda/es/values.js
  var values = /* @__PURE__ */ _curry1(function values2(obj) {
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
  var values_default = values;

  // node_modules/ramda/es/applySpec.js
  function mapValues(fn, obj) {
    return isArray_default(obj) ? obj.map(fn) : keys_default(obj).reduce(function(acc, key) {
      acc[key] = fn(obj[key]);
      return acc;
    }, {});
  }
  var applySpec = /* @__PURE__ */ _curry1(function applySpec2(spec) {
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
  var applySpec_default = applySpec;

  // node_modules/ramda/es/applyTo.js
  var applyTo = /* @__PURE__ */ _curry2(function applyTo2(x, f) {
    return f(x);
  });
  var applyTo_default = applyTo;

  // node_modules/ramda/es/ascend.js
  var ascend = /* @__PURE__ */ _curry3(function ascend2(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
  var ascend_default = ascend;

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

  // node_modules/ramda/es/isNil.js
  var isNil = /* @__PURE__ */ _curry1(function isNil2(x) {
    return x == null;
  });
  var isNil_default = isNil;

  // node_modules/ramda/es/assocPath.js
  var assocPath = /* @__PURE__ */ _curry3(function assocPath2(path3, val, obj) {
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
  var assocPath_default = assocPath;

  // node_modules/ramda/es/assoc.js
  var assoc = /* @__PURE__ */ _curry3(function assoc2(prop3, val, obj) {
    return assocPath_default([prop3], val, obj);
  });
  var assoc_default = assoc;

  // node_modules/ramda/es/nAry.js
  var nAry = /* @__PURE__ */ _curry2(function nAry2(n, fn) {
    switch (n) {
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
  var nAry_default = nAry;

  // node_modules/ramda/es/binary.js
  var binary = /* @__PURE__ */ _curry1(function binary2(fn) {
    return nAry_default(2, fn);
  });
  var binary_default = binary;

  // node_modules/ramda/es/internal/_isFunction.js
  function _isFunction(x) {
    var type3 = Object.prototype.toString.call(x);
    return type3 === "[object Function]" || type3 === "[object AsyncFunction]" || type3 === "[object GeneratorFunction]" || type3 === "[object AsyncGeneratorFunction]";
  }

  // node_modules/ramda/es/liftN.js
  var liftN = /* @__PURE__ */ _curry2(function liftN2(arity, fn) {
    var lifted = curryN_default(arity, fn);
    return curryN_default(arity, function() {
      return _reduce(ap_default, map_default(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
    });
  });
  var liftN_default = liftN;

  // node_modules/ramda/es/lift.js
  var lift = /* @__PURE__ */ _curry1(function lift2(fn) {
    return liftN_default(fn.length, fn);
  });
  var lift_default = lift;

  // node_modules/ramda/es/both.js
  var both = /* @__PURE__ */ _curry2(function both2(f, g) {
    return _isFunction(f) ? function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } : lift_default(and_default)(f, g);
  });
  var both_default = both;

  // node_modules/ramda/es/call.js
  var call = /* @__PURE__ */ _curry1(function call2(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
  });
  var call_default = call;

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

  // node_modules/ramda/es/internal/_forceReduced.js
  function _forceReduced(x) {
    return {
      "@@transducer/value": x,
      "@@transducer/reduced": true
    };
  }

  // node_modules/ramda/es/internal/_flatCat.js
  var preservingReduced = function(xf) {
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
  var _flatCat = function _xcat(xf) {
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
  var flatCat_default = _flatCat;

  // node_modules/ramda/es/internal/_xchain.js
  var _xchain = /* @__PURE__ */ _curry2(function _xchain2(f, xf) {
    return map_default(f, flatCat_default(xf));
  });
  var xchain_default = _xchain;

  // node_modules/ramda/es/chain.js
  var chain = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable(["fantasy-land/chain", "chain"], xchain_default, function chain2(fn, monad) {
      if (typeof monad === "function") {
        return function(x) {
          return fn(monad(x))(x);
        };
      }
      return _makeFlat(false)(map_default(fn, monad));
    })
  );
  var chain_default = chain;

  // node_modules/ramda/es/clamp.js
  var clamp = /* @__PURE__ */ _curry3(function clamp2(min3, max3, value) {
    if (min3 > max3) {
      throw new Error("min must not be greater than max in clamp(min, max, value)");
    }
    return value < min3 ? min3 : value > max3 ? max3 : value;
  });
  var clamp_default = clamp;

  // node_modules/ramda/es/internal/_cloneRegExp.js
  function _cloneRegExp(pattern2) {
    return new RegExp(pattern2.source, (pattern2.global ? "g" : "") + (pattern2.ignoreCase ? "i" : "") + (pattern2.multiline ? "m" : "") + (pattern2.sticky ? "y" : "") + (pattern2.unicode ? "u" : ""));
  }

  // node_modules/ramda/es/type.js
  var type = /* @__PURE__ */ _curry1(function type2(val) {
    return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
  });
  var type_default = type;

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

  // node_modules/ramda/es/clone.js
  var clone = /* @__PURE__ */ _curry1(function clone2(value) {
    return value != null && typeof value.clone === "function" ? value.clone() : _clone(value, [], [], true);
  });
  var clone_default = clone;

  // node_modules/ramda/es/collectBy.js
  var collectBy = /* @__PURE__ */ _curry2(function collectBy2(fn, list) {
    var group = _reduce(function(o4, x) {
      var tag2 = fn(x);
      if (o4[tag2] === void 0) {
        o4[tag2] = [];
      }
      o4[tag2].push(x);
      return o4;
    }, {}, list);
    var newList = [];
    for (var tag in group) {
      newList.push(group[tag]);
    }
    return newList;
  });
  var collectBy_default = collectBy;

  // node_modules/ramda/es/comparator.js
  var comparator2 = /* @__PURE__ */ _curry1(function comparator3(pred) {
    return function(a, b) {
      return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
    };
  });
  var comparator_default = comparator2;

  // node_modules/ramda/es/not.js
  var not = /* @__PURE__ */ _curry1(function not2(a) {
    return !a;
  });
  var not_default = not;

  // node_modules/ramda/es/complement.js
  var complement = /* @__PURE__ */ lift_default(not_default);
  var complement_default = complement;

  // node_modules/ramda/es/internal/_pipe.js
  function _pipe(f, g) {
    return function() {
      return g.call(this, f.apply(this, arguments));
    };
  }

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

  // node_modules/ramda/es/reverse.js
  var reverse = /* @__PURE__ */ _curry1(function reverse2(list) {
    return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
  });
  var reverse_default = reverse;

  // node_modules/ramda/es/compose.js
  function compose() {
    if (arguments.length === 0) {
      throw new Error("compose requires at least one argument");
    }
    return pipe.apply(this, reverse_default(arguments));
  }

  // node_modules/ramda/es/head.js
  var head = /* @__PURE__ */ nth_default(0);
  var head_default = head;

  // node_modules/ramda/es/internal/_identity.js
  function _identity(x) {
    return x;
  }

  // node_modules/ramda/es/identity.js
  var identity = /* @__PURE__ */ _curry1(_identity);
  var identity_default = identity;

  // node_modules/ramda/es/pipeWith.js
  var pipeWith = /* @__PURE__ */ _curry2(function pipeWith2(xf, list) {
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
  var pipeWith_default = pipeWith;

  // node_modules/ramda/es/composeWith.js
  var composeWith = /* @__PURE__ */ _curry2(function composeWith2(xf, list) {
    return pipeWith_default.apply(this, [xf, reverse_default(list)]);
  });
  var composeWith_default = composeWith;

  // node_modules/ramda/es/internal/_arrayFromIterator.js
  function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while (!(next = iter.next()).done) {
      list.push(next.value);
    }
    return list;
  }

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

  // node_modules/ramda/es/internal/_functionName.js
  function _functionName(f) {
    var match3 = String(f).match(/^function (\w*)/);
    return match3 == null ? "" : match3[1];
  }

  // node_modules/ramda/es/internal/_objectIs.js
  function _objectIs(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    } else {
      return a !== a && b !== b;
    }
  }
  var objectIs_default = typeof Object.is === "function" ? Object.is : _objectIs;

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

  // node_modules/ramda/es/equals.js
  var equals = /* @__PURE__ */ _curry2(function equals2(a, b) {
    return _equals(a, b, [], []);
  });
  var equals_default = equals;

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

  // node_modules/ramda/es/internal/_includes.js
  function _includes(a, list) {
    return _indexOf(list, a, 0) >= 0;
  }

  // node_modules/ramda/es/internal/_quote.js
  function _quote(s) {
    var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + escaped.replace(/"/g, '\\"') + '"';
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
  var toISOString_default = _toISOString;

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

  // node_modules/ramda/es/toString.js
  var toString2 = /* @__PURE__ */ _curry1(function toString3(val) {
    return _toString(val, []);
  });
  var toString_default = toString2;

  // node_modules/ramda/es/concat.js
  var concat = /* @__PURE__ */ _curry2(function concat2(a, b) {
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
  var concat_default = concat;

  // node_modules/ramda/es/cond.js
  var cond = /* @__PURE__ */ _curry1(function cond2(pairs) {
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
  var cond_default = cond;

  // node_modules/ramda/es/curry.js
  var curry = /* @__PURE__ */ _curry1(function curry2(fn) {
    return curryN_default(fn.length, fn);
  });
  var curry_default = curry;

  // node_modules/ramda/es/constructN.js
  var constructN = /* @__PURE__ */ _curry2(function constructN2(n, Fn) {
    if (n > 10) {
      throw new Error("Constructor with greater than ten arguments");
    }
    if (n === 0) {
      return function() {
        return new Fn();
      };
    }
    return curry_default(nAry_default(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
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
  var constructN_default = constructN;

  // node_modules/ramda/es/construct.js
  var construct = /* @__PURE__ */ _curry1(function construct2(Fn) {
    return constructN_default(Fn.length, Fn);
  });
  var construct_default = construct;

  // node_modules/ramda/es/converge.js
  var converge = /* @__PURE__ */ _curry2(function converge2(after, fns) {
    return curryN_default(reduce_default(max_default, 0, pluck_default("length", fns)), function() {
      var args2 = arguments;
      var context = this;
      return after.apply(context, _map(function(fn) {
        return fn.apply(context, args2);
      }, fns));
    });
  });
  var converge_default = converge;

  // node_modules/ramda/es/count.js
  var count = /* @__PURE__ */ curry_default(function(pred, list) {
    return _reduce(function(a, e) {
      return pred(e) ? a + 1 : a;
    }, 0, list);
  });
  var count_default = count;

  // node_modules/ramda/es/internal/_xreduceBy.js
  var XReduceBy = /* @__PURE__ */ function() {
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
  var _xreduceBy = /* @__PURE__ */ _curryN(4, [], function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
  });
  var xreduceBy_default = _xreduceBy;

  // node_modules/ramda/es/reduceBy.js
  var reduceBy = /* @__PURE__ */ _curryN(
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
  var reduceBy_default = reduceBy;

  // node_modules/ramda/es/countBy.js
  var countBy = /* @__PURE__ */ reduceBy_default(function(acc, elem) {
    return acc + 1;
  }, 0);
  var countBy_default = countBy;

  // node_modules/ramda/es/dec.js
  var dec = /* @__PURE__ */ add_default(-1);
  var dec_default = dec;

  // node_modules/ramda/es/defaultTo.js
  var defaultTo = /* @__PURE__ */ _curry2(function defaultTo2(d, v) {
    return v == null || v !== v ? d : v;
  });
  var defaultTo_default = defaultTo;

  // node_modules/ramda/es/descend.js
  var descend = /* @__PURE__ */ _curry3(function descend2(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa > bb ? -1 : aa < bb ? 1 : 0;
  });
  var descend_default = descend;

  // node_modules/ramda/es/internal/_Set.js
  var _Set = /* @__PURE__ */ function() {
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
  var Set_default = _Set;

  // node_modules/ramda/es/difference.js
  var difference = /* @__PURE__ */ _curry2(function difference2(first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    var secondLen = second.length;
    var toFilterOut = new Set_default();
    for (var i = 0; i < secondLen; i += 1) {
      toFilterOut.add(second[i]);
    }
    while (idx < firstLen) {
      if (toFilterOut.add(first[idx])) {
        out[out.length] = first[idx];
      }
      idx += 1;
    }
    return out;
  });
  var difference_default = difference;

  // node_modules/ramda/es/differenceWith.js
  var differenceWith = /* @__PURE__ */ _curry3(function differenceWith2(pred, first, second) {
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
  var differenceWith_default = differenceWith;

  // node_modules/ramda/es/remove.js
  var remove = /* @__PURE__ */ _curry3(function remove2(start, count2, list) {
    var result = Array.prototype.slice.call(list, 0);
    result.splice(start, count2);
    return result;
  });
  var remove_default = remove;

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
  var dissocPath = /* @__PURE__ */ _curry2(function dissocPath2(path3, obj) {
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
  var dissocPath_default = dissocPath;

  // node_modules/ramda/es/dissoc.js
  var dissoc = /* @__PURE__ */ _curry2(function dissoc2(prop3, obj) {
    return dissocPath_default([prop3], obj);
  });
  var dissoc_default = dissoc;

  // node_modules/ramda/es/divide.js
  var divide = /* @__PURE__ */ _curry2(function divide2(a, b) {
    return a / b;
  });
  var divide_default = divide;

  // node_modules/ramda/es/internal/_xdrop.js
  var XDrop = /* @__PURE__ */ function() {
    function XDrop2(n, xf) {
      this.xf = xf;
      this.n = n;
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
  var _xdrop = /* @__PURE__ */ _curry2(function _xdrop2(n, xf) {
    return new XDrop(n, xf);
  });
  var xdrop_default = _xdrop;

  // node_modules/ramda/es/drop.js
  var drop = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable(["drop"], xdrop_default, function drop2(n, xs) {
      return slice_default(Math.max(0, n), Infinity, xs);
    })
  );
  var drop_default = drop;

  // node_modules/ramda/es/internal/_xtake.js
  var XTake = /* @__PURE__ */ function() {
    function XTake2(n, xf) {
      this.xf = xf;
      this.n = n;
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
  var _xtake = /* @__PURE__ */ _curry2(function _xtake2(n, xf) {
    return new XTake(n, xf);
  });
  var xtake_default = _xtake;

  // node_modules/ramda/es/take.js
  var take = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable(["take"], xtake_default, function take2(n, xs) {
      return slice_default(0, n < 0 ? Infinity : n, xs);
    })
  );
  var take_default = take;

  // node_modules/ramda/es/internal/_dropLast.js
  function dropLast(n, xs) {
    return take_default(n < xs.length ? xs.length - n : 0, xs);
  }

  // node_modules/ramda/es/internal/_xdropLast.js
  var XDropLast = /* @__PURE__ */ function() {
    function XDropLast2(n, xf) {
      this.xf = xf;
      this.pos = 0;
      this.full = false;
      this.acc = new Array(n);
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
  var _xdropLast = /* @__PURE__ */ _curry2(function _xdropLast2(n, xf) {
    return new XDropLast(n, xf);
  });
  var xdropLast_default = _xdropLast;

  // node_modules/ramda/es/dropLast.js
  var dropLast2 = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable([], xdropLast_default, dropLast)
  );
  var dropLast_default = dropLast2;

  // node_modules/ramda/es/internal/_dropLastWhile.js
  function dropLastWhile(pred, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && pred(xs[idx])) {
      idx -= 1;
    }
    return slice_default(0, idx + 1, xs);
  }

  // node_modules/ramda/es/internal/_xdropLastWhile.js
  var XDropLastWhile = /* @__PURE__ */ function() {
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
  var _xdropLastWhile = /* @__PURE__ */ _curry2(function _xdropLastWhile2(fn, xf) {
    return new XDropLastWhile(fn, xf);
  });
  var xdropLastWhile_default = _xdropLastWhile;

  // node_modules/ramda/es/dropLastWhile.js
  var dropLastWhile2 = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable([], xdropLastWhile_default, dropLastWhile)
  );
  var dropLastWhile_default = dropLastWhile2;

  // node_modules/ramda/es/internal/_xdropRepeatsWith.js
  var XDropRepeatsWith = /* @__PURE__ */ function() {
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
  var _xdropRepeatsWith = /* @__PURE__ */ _curry2(function _xdropRepeatsWith2(pred, xf) {
    return new XDropRepeatsWith(pred, xf);
  });
  var xdropRepeatsWith_default = _xdropRepeatsWith;

  // node_modules/ramda/es/last.js
  var last = /* @__PURE__ */ nth_default(-1);
  var last_default = last;

  // node_modules/ramda/es/dropRepeatsWith.js
  var dropRepeatsWith = /* @__PURE__ */ _curry2(
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
  var dropRepeatsWith_default = dropRepeatsWith;

  // node_modules/ramda/es/dropRepeats.js
  var dropRepeats = /* @__PURE__ */ _curry1(
    /* @__PURE__ */ _dispatchable(
      [],
      /* @__PURE__ */ xdropRepeatsWith_default(equals_default),
      /* @__PURE__ */ dropRepeatsWith_default(equals_default)
    )
  );
  var dropRepeats_default = dropRepeats;

  // node_modules/ramda/es/internal/_xdropWhile.js
  var XDropWhile = /* @__PURE__ */ function() {
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
  var _xdropWhile = /* @__PURE__ */ _curry2(function _xdropWhile2(f, xf) {
    return new XDropWhile(f, xf);
  });
  var xdropWhile_default = _xdropWhile;

  // node_modules/ramda/es/dropWhile.js
  var dropWhile = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable(["dropWhile"], xdropWhile_default, function dropWhile2(pred, xs) {
      var idx = 0;
      var len = xs.length;
      while (idx < len && pred(xs[idx])) {
        idx += 1;
      }
      return slice_default(idx, Infinity, xs);
    })
  );
  var dropWhile_default = dropWhile;

  // node_modules/ramda/es/or.js
  var or = /* @__PURE__ */ _curry2(function or2(a, b) {
    return a || b;
  });
  var or_default = or;

  // node_modules/ramda/es/either.js
  var either = /* @__PURE__ */ _curry2(function either2(f, g) {
    return _isFunction(f) ? function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } : lift_default(or_default)(f, g);
  });
  var either_default = either;

  // node_modules/ramda/es/internal/_isTypedArray.js
  function _isTypedArray(val) {
    var type3 = Object.prototype.toString.call(val);
    return type3 === "[object Uint8ClampedArray]" || type3 === "[object Int8Array]" || type3 === "[object Uint8Array]" || type3 === "[object Int16Array]" || type3 === "[object Uint16Array]" || type3 === "[object Int32Array]" || type3 === "[object Uint32Array]" || type3 === "[object Float32Array]" || type3 === "[object Float64Array]" || type3 === "[object BigInt64Array]" || type3 === "[object BigUint64Array]";
  }

  // node_modules/ramda/es/empty.js
  var empty = /* @__PURE__ */ _curry1(function empty2(x) {
    return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : isArray_default(x) ? [] : _isString(x) ? "" : _isObject(x) ? {} : isArguments_default(x) ? function() {
      return arguments;
    }() : _isTypedArray(x) ? x.constructor.from("") : void 0;
  });
  var empty_default = empty;

  // node_modules/ramda/es/takeLast.js
  var takeLast = /* @__PURE__ */ _curry2(function takeLast2(n, xs) {
    return drop_default(n >= 0 ? xs.length - n : 0, xs);
  });
  var takeLast_default = takeLast;

  // node_modules/ramda/es/endsWith.js
  var endsWith = /* @__PURE__ */ _curry2(function(suffix, list) {
    return equals_default(takeLast_default(suffix.length, list), suffix);
  });
  var endsWith_default = endsWith;

  // node_modules/ramda/es/eqBy.js
  var eqBy = /* @__PURE__ */ _curry3(function eqBy2(f, x, y) {
    return equals_default(f(x), f(y));
  });
  var eqBy_default = eqBy;

  // node_modules/ramda/es/eqProps.js
  var eqProps = /* @__PURE__ */ _curry3(function eqProps2(prop3, obj1, obj2) {
    return equals_default(obj1[prop3], obj2[prop3]);
  });
  var eqProps_default = eqProps;

  // node_modules/ramda/es/evolve.js
  var evolve = /* @__PURE__ */ _curry2(function evolve2(transformations, object) {
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
  var evolve_default = evolve;

  // node_modules/ramda/es/internal/_xfind.js
  var XFind = /* @__PURE__ */ function() {
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
  var _xfind = /* @__PURE__ */ _curry2(function _xfind2(f, xf) {
    return new XFind(f, xf);
  });
  var xfind_default = _xfind;

  // node_modules/ramda/es/find.js
  var find = /* @__PURE__ */ _curry2(
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
  var find_default = find;

  // node_modules/ramda/es/internal/_xfindIndex.js
  var XFindIndex = /* @__PURE__ */ function() {
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
  var _xfindIndex = /* @__PURE__ */ _curry2(function _xfindIndex2(f, xf) {
    return new XFindIndex(f, xf);
  });
  var xfindIndex_default = _xfindIndex;

  // node_modules/ramda/es/findIndex.js
  var findIndex = /* @__PURE__ */ _curry2(
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
  var findIndex_default = findIndex;

  // node_modules/ramda/es/internal/_xfindLast.js
  var XFindLast = /* @__PURE__ */ function() {
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
  var _xfindLast = /* @__PURE__ */ _curry2(function _xfindLast2(f, xf) {
    return new XFindLast(f, xf);
  });
  var xfindLast_default = _xfindLast;

  // node_modules/ramda/es/findLast.js
  var findLast = /* @__PURE__ */ _curry2(
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
  var findLast_default = findLast;

  // node_modules/ramda/es/internal/_xfindLastIndex.js
  var XFindLastIndex = /* @__PURE__ */ function() {
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
  var _xfindLastIndex = /* @__PURE__ */ _curry2(function _xfindLastIndex2(f, xf) {
    return new XFindLastIndex(f, xf);
  });
  var xfindLastIndex_default = _xfindLastIndex;

  // node_modules/ramda/es/findLastIndex.js
  var findLastIndex = /* @__PURE__ */ _curry2(
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
  var findLastIndex_default = findLastIndex;

  // node_modules/ramda/es/flatten.js
  var flatten = /* @__PURE__ */ _curry1(
    /* @__PURE__ */ _makeFlat(true)
  );
  var flatten_default = flatten;

  // node_modules/ramda/es/flip.js
  var flip = /* @__PURE__ */ _curry1(function flip2(fn) {
    return curryN_default(fn.length, function(a, b) {
      var args2 = Array.prototype.slice.call(arguments, 0);
      args2[0] = b;
      args2[1] = a;
      return fn.apply(this, args2);
    });
  });
  var flip_default = flip;

  // node_modules/ramda/es/forEach.js
  var forEach = /* @__PURE__ */ _curry2(
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
  var forEach_default = forEach;

  // node_modules/ramda/es/forEachObjIndexed.js
  var forEachObjIndexed = /* @__PURE__ */ _curry2(function forEachObjIndexed2(fn, obj) {
    var keyList = keys_default(obj);
    var idx = 0;
    while (idx < keyList.length) {
      var key = keyList[idx];
      fn(obj[key], key, obj);
      idx += 1;
    }
    return obj;
  });
  var forEachObjIndexed_default = forEachObjIndexed;

  // node_modules/ramda/es/fromPairs.js
  var fromPairs = /* @__PURE__ */ _curry1(function fromPairs2(pairs) {
    var result = {};
    var idx = 0;
    while (idx < pairs.length) {
      result[pairs[idx][0]] = pairs[idx][1];
      idx += 1;
    }
    return result;
  });
  var fromPairs_default = fromPairs;

  // node_modules/ramda/es/groupBy.js
  var groupBy = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _checkForMethod(
      "groupBy",
      /* @__PURE__ */ reduceBy_default(function(acc, item) {
        acc.push(item);
        return acc;
      }, [])
    )
  );
  var groupBy_default = groupBy;

  // node_modules/ramda/es/groupWith.js
  var groupWith = /* @__PURE__ */ _curry2(function(fn, list) {
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
  var groupWith_default = groupWith;

  // node_modules/ramda/es/gt.js
  var gt = /* @__PURE__ */ _curry2(function gt2(a, b) {
    return a > b;
  });
  var gt_default = gt;

  // node_modules/ramda/es/gte.js
  var gte = /* @__PURE__ */ _curry2(function gte2(a, b) {
    return a >= b;
  });
  var gte_default = gte;

  // node_modules/ramda/es/hasPath.js
  var hasPath = /* @__PURE__ */ _curry2(function hasPath2(_path, obj) {
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
  var hasPath_default = hasPath;

  // node_modules/ramda/es/has.js
  var has = /* @__PURE__ */ _curry2(function has2(prop3, obj) {
    return hasPath_default([prop3], obj);
  });
  var has_default = has;

  // node_modules/ramda/es/hasIn.js
  var hasIn = /* @__PURE__ */ _curry2(function hasIn2(prop3, obj) {
    if (isNil_default(obj)) {
      return false;
    }
    return prop3 in obj;
  });
  var hasIn_default = hasIn;

  // node_modules/ramda/es/identical.js
  var identical = /* @__PURE__ */ _curry2(objectIs_default);
  var identical_default = identical;

  // node_modules/ramda/es/ifElse.js
  var ifElse = /* @__PURE__ */ _curry3(function ifElse2(condition, onTrue, onFalse) {
    return curryN_default(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    });
  });
  var ifElse_default = ifElse;

  // node_modules/ramda/es/inc.js
  var inc = /* @__PURE__ */ add_default(1);
  var inc_default = inc;

  // node_modules/ramda/es/includes.js
  var includes = /* @__PURE__ */ _curry2(_includes);
  var includes_default = includes;

  // node_modules/ramda/es/indexBy.js
  var indexBy = /* @__PURE__ */ reduceBy_default(function(acc, elem) {
    return elem;
  }, null);
  var indexBy_default = indexBy;

  // node_modules/ramda/es/indexOf.js
  var indexOf = /* @__PURE__ */ _curry2(function indexOf2(target, xs) {
    return typeof xs.indexOf === "function" && !isArray_default(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
  });
  var indexOf_default = indexOf;

  // node_modules/ramda/es/init.js
  var init = /* @__PURE__ */ slice_default(0, -1);
  var init_default = init;

  // node_modules/ramda/es/innerJoin.js
  var innerJoin = /* @__PURE__ */ _curry3(function innerJoin2(pred, xs, ys) {
    return _filter(function(x) {
      return _includesWith(pred, x, ys);
    }, xs);
  });
  var innerJoin_default = innerJoin;

  // node_modules/ramda/es/insert.js
  var insert = /* @__PURE__ */ _curry3(function insert2(idx, elt, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    var result = Array.prototype.slice.call(list, 0);
    result.splice(idx, 0, elt);
    return result;
  });
  var insert_default = insert;

  // node_modules/ramda/es/insertAll.js
  var insertAll = /* @__PURE__ */ _curry3(function insertAll2(idx, elts, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
  });
  var insertAll_default = insertAll;

  // node_modules/ramda/es/internal/_xuniqBy.js
  var XUniqBy = /* @__PURE__ */ function() {
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
  var _xuniqBy = /* @__PURE__ */ _curry2(function _xuniqBy2(f, xf) {
    return new XUniqBy(f, xf);
  });
  var xuniqBy_default = _xuniqBy;

  // node_modules/ramda/es/uniqBy.js
  var uniqBy = /* @__PURE__ */ _curry2(
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
  var uniqBy_default = uniqBy;

  // node_modules/ramda/es/uniq.js
  var uniq = /* @__PURE__ */ uniqBy_default(identity_default);
  var uniq_default = uniq;

  // node_modules/ramda/es/intersection.js
  var intersection = /* @__PURE__ */ _curry2(function intersection2(list1, list2) {
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
  var intersection_default = intersection;

  // node_modules/ramda/es/intersperse.js
  var intersperse = /* @__PURE__ */ _curry2(
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
  var intersperse_default = intersperse;

  // node_modules/ramda/es/internal/_objectAssign.js
  function _objectAssign(target) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    var idx = 1;
    var length3 = arguments.length;
    while (idx < length3) {
      var source3 = arguments[idx];
      if (source3 != null) {
        for (var nextKey in source3) {
          if (_has(nextKey, source3)) {
            output[nextKey] = source3[nextKey];
          }
        }
      }
      idx += 1;
    }
    return output;
  }
  var objectAssign_default = typeof Object.assign === "function" ? Object.assign : _objectAssign;

  // node_modules/ramda/es/objOf.js
  var objOf = /* @__PURE__ */ _curry2(function objOf2(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
  });
  var objOf_default = objOf;

  // node_modules/ramda/es/internal/_stepCat.js
  var _stepCatArray = {
    "@@transducer/init": Array,
    "@@transducer/step": function(xs, x) {
      xs.push(x);
      return xs;
    },
    "@@transducer/result": _identity
  };
  var _stepCatString = {
    "@@transducer/init": String,
    "@@transducer/step": function(a, b) {
      return a + b;
    },
    "@@transducer/result": _identity
  };
  var _stepCatObject = {
    "@@transducer/init": Object,
    "@@transducer/step": function(result, input) {
      return objectAssign_default(result, isArrayLike_default(input) ? objOf_default(input[0], input[1]) : input);
    },
    "@@transducer/result": _identity
  };
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

  // node_modules/ramda/es/into.js
  var into = /* @__PURE__ */ _curry3(function into2(acc, xf, list) {
    return _isTransformer(acc) ? _reduce(xf(acc), acc["@@transducer/init"](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
  });
  var into_default = into;

  // node_modules/ramda/es/invert.js
  var invert = /* @__PURE__ */ _curry1(function invert2(obj) {
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
  var invert_default = invert;

  // node_modules/ramda/es/invertObj.js
  var invertObj = /* @__PURE__ */ _curry1(function invertObj2(obj) {
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
  var invertObj_default = invertObj;

  // node_modules/ramda/es/invoker.js
  var invoker = /* @__PURE__ */ _curry2(function invoker2(arity, method) {
    return curryN_default(arity + 1, function() {
      var target = arguments[arity];
      if (target != null && _isFunction(target[method])) {
        return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
      }
      throw new TypeError(toString_default(target) + ' does not have a method named "' + method + '"');
    });
  });
  var invoker_default = invoker;

  // node_modules/ramda/es/is.js
  var is = /* @__PURE__ */ _curry2(function is2(Ctor, val) {
    return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === "Object" && typeof val === "object");
  });
  var is_default = is;

  // node_modules/ramda/es/isEmpty.js
  var isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x) {
    return x != null && equals_default(x, empty_default(x));
  });
  var isEmpty_default = isEmpty;

  // node_modules/ramda/es/join.js
  var join = /* @__PURE__ */ invoker_default(1, "join");
  var join_default = join;

  // node_modules/ramda/es/juxt.js
  var juxt = /* @__PURE__ */ _curry1(function juxt2(fns) {
    return converge_default(function() {
      return Array.prototype.slice.call(arguments, 0);
    }, fns);
  });
  var juxt_default = juxt;

  // node_modules/ramda/es/keysIn.js
  var keysIn = /* @__PURE__ */ _curry1(function keysIn2(obj) {
    var prop3;
    var ks = [];
    for (prop3 in obj) {
      ks[ks.length] = prop3;
    }
    return ks;
  });
  var keysIn_default = keysIn;

  // node_modules/ramda/es/lastIndexOf.js
  var lastIndexOf = /* @__PURE__ */ _curry2(function lastIndexOf2(target, xs) {
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
  var lastIndexOf_default = lastIndexOf;

  // node_modules/ramda/es/internal/_isNumber.js
  function _isNumber(x) {
    return Object.prototype.toString.call(x) === "[object Number]";
  }

  // node_modules/ramda/es/length.js
  var length = /* @__PURE__ */ _curry1(function length2(list) {
    return list != null && _isNumber(list.length) ? list.length : NaN;
  });
  var length_default = length;

  // node_modules/ramda/es/lens.js
  var lens = /* @__PURE__ */ _curry2(function lens2(getter, setter) {
    return function(toFunctorFn) {
      return function(target) {
        return map_default(function(focus2) {
          return setter(focus2, target);
        }, toFunctorFn(getter(target)));
      };
    };
  });
  var lens_default = lens;

  // node_modules/ramda/es/update.js
  var update = /* @__PURE__ */ _curry3(function update2(idx, x, list) {
    return adjust_default(idx, always_default(x), list);
  });
  var update_default = update;

  // node_modules/ramda/es/lensIndex.js
  var lensIndex = /* @__PURE__ */ _curry1(function lensIndex2(n) {
    return lens_default(nth_default(n), update_default(n));
  });
  var lensIndex_default = lensIndex;

  // node_modules/ramda/es/paths.js
  var paths = /* @__PURE__ */ _curry2(function paths2(pathsArray, obj) {
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
  var paths_default = paths;

  // node_modules/ramda/es/path.js
  var path = /* @__PURE__ */ _curry2(function path2(pathAr, obj) {
    return paths_default([pathAr], obj)[0];
  });
  var path_default = path;

  // node_modules/ramda/es/lensPath.js
  var lensPath = /* @__PURE__ */ _curry1(function lensPath2(p) {
    return lens_default(path_default(p), assocPath_default(p));
  });
  var lensPath_default = lensPath;

  // node_modules/ramda/es/lensProp.js
  var lensProp = /* @__PURE__ */ _curry1(function lensProp2(k) {
    return lens_default(prop_default(k), assoc_default(k));
  });
  var lensProp_default = lensProp;

  // node_modules/ramda/es/lt.js
  var lt = /* @__PURE__ */ _curry2(function lt2(a, b) {
    return a < b;
  });
  var lt_default = lt;

  // node_modules/ramda/es/lte.js
  var lte = /* @__PURE__ */ _curry2(function lte2(a, b) {
    return a <= b;
  });
  var lte_default = lte;

  // node_modules/ramda/es/mapAccum.js
  var mapAccum = /* @__PURE__ */ _curry3(function mapAccum2(fn, acc, list) {
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
  var mapAccum_default = mapAccum;

  // node_modules/ramda/es/mapAccumRight.js
  var mapAccumRight = /* @__PURE__ */ _curry3(function mapAccumRight2(fn, acc, list) {
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
  var mapAccumRight_default = mapAccumRight;

  // node_modules/ramda/es/mapObjIndexed.js
  var mapObjIndexed = /* @__PURE__ */ _curry2(function mapObjIndexed2(fn, obj) {
    return _reduce(function(acc, key) {
      acc[key] = fn(obj[key], key, obj);
      return acc;
    }, {}, keys_default(obj));
  });
  var mapObjIndexed_default = mapObjIndexed;

  // node_modules/ramda/es/match.js
  var match = /* @__PURE__ */ _curry2(function match2(rx, str2) {
    return str2.match(rx) || [];
  });
  var match_default = match;

  // node_modules/ramda/es/mathMod.js
  var mathMod = /* @__PURE__ */ _curry2(function mathMod2(m, p) {
    if (!isInteger_default(m)) {
      return NaN;
    }
    if (!isInteger_default(p) || p < 1) {
      return NaN;
    }
    return (m % p + p) % p;
  });
  var mathMod_default = mathMod;

  // node_modules/ramda/es/maxBy.js
  var maxBy = /* @__PURE__ */ _curry3(function maxBy2(f, a, b) {
    return f(b) > f(a) ? b : a;
  });
  var maxBy_default = maxBy;

  // node_modules/ramda/es/sum.js
  var sum = /* @__PURE__ */ reduce_default(add_default, 0);
  var sum_default = sum;

  // node_modules/ramda/es/mean.js
  var mean = /* @__PURE__ */ _curry1(function mean2(list) {
    return sum_default(list) / list.length;
  });
  var mean_default = mean;

  // node_modules/ramda/es/median.js
  var median = /* @__PURE__ */ _curry1(function median2(list) {
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
  var median_default = median;

  // node_modules/ramda/es/memoizeWith.js
  var memoizeWith = /* @__PURE__ */ _curry2(function memoizeWith2(mFn, fn) {
    var cache = {};
    return _arity(fn.length, function() {
      var key = mFn.apply(this, arguments);
      if (!_has(key, cache)) {
        cache[key] = fn.apply(this, arguments);
      }
      return cache[key];
    });
  });
  var memoizeWith_default = memoizeWith;

  // node_modules/ramda/es/mergeAll.js
  var mergeAll = /* @__PURE__ */ _curry1(function mergeAll2(list) {
    return objectAssign_default.apply(null, [{}].concat(list));
  });
  var mergeAll_default = mergeAll;

  // node_modules/ramda/es/mergeWithKey.js
  var mergeWithKey = /* @__PURE__ */ _curry3(function mergeWithKey2(fn, l, r) {
    var result = {};
    var k;
    for (k in l) {
      if (_has(k, l)) {
        result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
      }
    }
    for (k in r) {
      if (_has(k, r) && !_has(k, result)) {
        result[k] = r[k];
      }
    }
    return result;
  });
  var mergeWithKey_default = mergeWithKey;

  // node_modules/ramda/es/mergeDeepWithKey.js
  var mergeDeepWithKey = /* @__PURE__ */ _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
    return mergeWithKey_default(function(k, lVal, rVal) {
      if (_isObject(lVal) && _isObject(rVal)) {
        return mergeDeepWithKey2(fn, lVal, rVal);
      } else {
        return fn(k, lVal, rVal);
      }
    }, lObj, rObj);
  });
  var mergeDeepWithKey_default = mergeDeepWithKey;

  // node_modules/ramda/es/mergeDeepLeft.js
  var mergeDeepLeft = /* @__PURE__ */ _curry2(function mergeDeepLeft2(lObj, rObj) {
    return mergeDeepWithKey_default(function(k, lVal, rVal) {
      return lVal;
    }, lObj, rObj);
  });
  var mergeDeepLeft_default = mergeDeepLeft;

  // node_modules/ramda/es/mergeDeepRight.js
  var mergeDeepRight = /* @__PURE__ */ _curry2(function mergeDeepRight2(lObj, rObj) {
    return mergeDeepWithKey_default(function(k, lVal, rVal) {
      return rVal;
    }, lObj, rObj);
  });
  var mergeDeepRight_default = mergeDeepRight;

  // node_modules/ramda/es/mergeDeepWith.js
  var mergeDeepWith = /* @__PURE__ */ _curry3(function mergeDeepWith2(fn, lObj, rObj) {
    return mergeDeepWithKey_default(function(k, lVal, rVal) {
      return fn(lVal, rVal);
    }, lObj, rObj);
  });
  var mergeDeepWith_default = mergeDeepWith;

  // node_modules/ramda/es/mergeLeft.js
  var mergeLeft = /* @__PURE__ */ _curry2(function mergeLeft2(l, r) {
    return objectAssign_default({}, r, l);
  });
  var mergeLeft_default = mergeLeft;

  // node_modules/ramda/es/mergeRight.js
  var mergeRight = /* @__PURE__ */ _curry2(function mergeRight2(l, r) {
    return objectAssign_default({}, l, r);
  });
  var mergeRight_default = mergeRight;

  // node_modules/ramda/es/mergeWith.js
  var mergeWith = /* @__PURE__ */ _curry3(function mergeWith2(fn, l, r) {
    return mergeWithKey_default(function(_, _l, _r) {
      return fn(_l, _r);
    }, l, r);
  });
  var mergeWith_default = mergeWith;

  // node_modules/ramda/es/min.js
  var min = /* @__PURE__ */ _curry2(function min2(a, b) {
    return b < a ? b : a;
  });
  var min_default = min;

  // node_modules/ramda/es/minBy.js
  var minBy = /* @__PURE__ */ _curry3(function minBy2(f, a, b) {
    return f(b) < f(a) ? b : a;
  });
  var minBy_default = minBy;

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

  // node_modules/ramda/es/modifyPath.js
  var modifyPath = /* @__PURE__ */ _curry3(function modifyPath2(path3, fn, object) {
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
  var modifyPath_default = modifyPath;

  // node_modules/ramda/es/modify.js
  var modify = /* @__PURE__ */ _curry3(function modify2(prop3, fn, object) {
    return modifyPath_default([prop3], fn, object);
  });
  var modify_default = modify;

  // node_modules/ramda/es/modulo.js
  var modulo = /* @__PURE__ */ _curry2(function modulo2(a, b) {
    return a % b;
  });
  var modulo_default = modulo;

  // node_modules/ramda/es/move.js
  var move = /* @__PURE__ */ _curry3(function(from, to, list) {
    var length3 = list.length;
    var result = list.slice();
    var positiveFrom = from < 0 ? length3 + from : from;
    var positiveTo = to < 0 ? length3 + to : to;
    var item = result.splice(positiveFrom, 1);
    return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
  });
  var move_default = move;

  // node_modules/ramda/es/multiply.js
  var multiply = /* @__PURE__ */ _curry2(function multiply2(a, b) {
    return a * b;
  });
  var multiply_default = multiply;

  // node_modules/ramda/es/partialObject.js
  var partialObject_default = /* @__PURE__ */ _curry2((f, o4) => (props3) => f.call(void 0, mergeDeepRight_default(o4, props3)));

  // node_modules/ramda/es/negate.js
  var negate = /* @__PURE__ */ _curry1(function negate2(n) {
    return -n;
  });
  var negate_default = negate;

  // node_modules/ramda/es/none.js
  var none = /* @__PURE__ */ _curry2(function none2(fn, input) {
    return all_default(_complement(fn), input);
  });
  var none_default = none;

  // node_modules/ramda/es/nthArg.js
  var nthArg = /* @__PURE__ */ _curry1(function nthArg2(n) {
    var arity = n < 0 ? 1 : n + 1;
    return curryN_default(arity, function() {
      return nth_default(n, arguments);
    });
  });
  var nthArg_default = nthArg;

  // node_modules/ramda/es/o.js
  var o = /* @__PURE__ */ _curry3(function o2(f, g, x) {
    return f(g(x));
  });
  var o_default = o;

  // node_modules/ramda/es/internal/_of.js
  function _of(x) {
    return [x];
  }

  // node_modules/ramda/es/of.js
  var of = /* @__PURE__ */ _curry1(_of);
  var of_default = of;

  // node_modules/ramda/es/omit.js
  var omit = /* @__PURE__ */ _curry2(function omit2(names, obj) {
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
  var omit_default = omit;

  // node_modules/ramda/es/on.js
  var on = /* @__PURE__ */ _curryN(4, [], function on2(f, g, a, b) {
    return f(g(a), g(b));
  });
  var on_default = on;

  // node_modules/ramda/es/once.js
  var once = /* @__PURE__ */ _curry1(function once2(fn) {
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
  var once_default = once;

  // node_modules/ramda/es/internal/_assertPromise.js
  function _assertPromise(name, p) {
    if (p == null || !_isFunction(p.then)) {
      throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p, []));
    }
  }

  // node_modules/ramda/es/otherwise.js
  var otherwise = /* @__PURE__ */ _curry2(function otherwise2(f, p) {
    _assertPromise("otherwise", p);
    return p.then(null, f);
  });
  var otherwise_default = otherwise;

  // node_modules/ramda/es/over.js
  var Identity = function(x) {
    return {
      value: x,
      map: function(f) {
        return Identity(f(x));
      }
    };
  };
  var over = /* @__PURE__ */ _curry3(function over2(lens3, f, x) {
    return lens3(function(y) {
      return Identity(f(y));
    })(x).value;
  });
  var over_default = over;

  // node_modules/ramda/es/pair.js
  var pair = /* @__PURE__ */ _curry2(function pair2(fst, snd) {
    return [fst, snd];
  });
  var pair_default = pair;

  // node_modules/ramda/es/internal/_createPartialApplicator.js
  function _createPartialApplicator(concat3) {
    return _curry2(function(fn, args2) {
      return _arity(Math.max(0, fn.length - args2.length), function() {
        return fn.apply(this, concat3(args2, arguments));
      });
    });
  }

  // node_modules/ramda/es/partial.js
  var partial = /* @__PURE__ */ _createPartialApplicator(_concat);
  var partial_default = partial;

  // node_modules/ramda/es/partialRight.js
  var partialRight = /* @__PURE__ */ _createPartialApplicator(
    /* @__PURE__ */ flip_default(_concat)
  );
  var partialRight_default = partialRight;

  // node_modules/ramda/es/partition.js
  var partition = /* @__PURE__ */ juxt_default([filter_default, reject_default]);
  var partition_default = partition;

  // node_modules/ramda/es/pathEq.js
  var pathEq = /* @__PURE__ */ _curry3(function pathEq2(_path, val, obj) {
    return equals_default(path_default(_path, obj), val);
  });
  var pathEq_default = pathEq;

  // node_modules/ramda/es/pathOr.js
  var pathOr = /* @__PURE__ */ _curry3(function pathOr2(d, p, obj) {
    return defaultTo_default(d, path_default(p, obj));
  });
  var pathOr_default = pathOr;

  // node_modules/ramda/es/pathSatisfies.js
  var pathSatisfies = /* @__PURE__ */ _curry3(function pathSatisfies2(pred, propPath, obj) {
    return pred(path_default(propPath, obj));
  });
  var pathSatisfies_default = pathSatisfies;

  // node_modules/ramda/es/pick.js
  var pick = /* @__PURE__ */ _curry2(function pick2(names, obj) {
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
  var pick_default = pick;

  // node_modules/ramda/es/pickAll.js
  var pickAll = /* @__PURE__ */ _curry2(function pickAll2(names, obj) {
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
  var pickAll_default = pickAll;

  // node_modules/ramda/es/pickBy.js
  var pickBy = /* @__PURE__ */ _curry2(function pickBy2(test3, obj) {
    var result = {};
    for (var prop3 in obj) {
      if (test3(obj[prop3], prop3, obj)) {
        result[prop3] = obj[prop3];
      }
    }
    return result;
  });
  var pickBy_default = pickBy;

  // node_modules/ramda/es/prepend.js
  var prepend = /* @__PURE__ */ _curry2(function prepend2(el, list) {
    return _concat([el], list);
  });
  var prepend_default = prepend;

  // node_modules/ramda/es/product.js
  var product = /* @__PURE__ */ reduce_default(multiply_default, 1);
  var product_default = product;

  // node_modules/ramda/es/useWith.js
  var useWith = /* @__PURE__ */ _curry2(function useWith2(fn, transformers) {
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
  var useWith_default = useWith;

  // node_modules/ramda/es/project.js
  var project = /* @__PURE__ */ useWith_default(_map, [pickAll_default, identity_default]);
  var project_default = project;

  // node_modules/ramda/es/internal/_promap.js
  function _promap(f, g, profunctor) {
    return function(x) {
      return g(profunctor(f(x)));
    };
  }

  // node_modules/ramda/es/internal/_xpromap.js
  var XPromap = /* @__PURE__ */ function() {
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
  var _xpromap = /* @__PURE__ */ _curry3(function _xpromap2(f, g, xf) {
    return new XPromap(f, g, xf);
  });
  var xpromap_default = _xpromap;

  // node_modules/ramda/es/promap.js
  var promap = /* @__PURE__ */ _curry3(
    /* @__PURE__ */ _dispatchable(["fantasy-land/promap", "promap"], xpromap_default, _promap)
  );
  var promap_default = promap;

  // node_modules/ramda/es/propEq.js
  var propEq = /* @__PURE__ */ _curry3(function propEq2(name, val, obj) {
    return equals_default(val, prop_default(name, obj));
  });
  var propEq_default = propEq;

  // node_modules/ramda/es/propIs.js
  var propIs = /* @__PURE__ */ _curry3(function propIs2(type3, name, obj) {
    return is_default(type3, prop_default(name, obj));
  });
  var propIs_default = propIs;

  // node_modules/ramda/es/propOr.js
  var propOr = /* @__PURE__ */ _curry3(function propOr2(val, p, obj) {
    return defaultTo_default(val, prop_default(p, obj));
  });
  var propOr_default = propOr;

  // node_modules/ramda/es/propSatisfies.js
  var propSatisfies = /* @__PURE__ */ _curry3(function propSatisfies2(pred, name, obj) {
    return pred(prop_default(name, obj));
  });
  var propSatisfies_default = propSatisfies;

  // node_modules/ramda/es/props.js
  var props = /* @__PURE__ */ _curry2(function props2(ps, obj) {
    return ps.map(function(p) {
      return path_default([p], obj);
    });
  });
  var props_default = props;

  // node_modules/ramda/es/range.js
  var range = /* @__PURE__ */ _curry2(function range2(from, to) {
    if (!(_isNumber(from) && _isNumber(to))) {
      throw new TypeError("Both arguments to range must be numbers");
    }
    var result = [];
    var n = from;
    while (n < to) {
      result.push(n);
      n += 1;
    }
    return result;
  });
  var range_default = range;

  // node_modules/ramda/es/reduceRight.js
  var reduceRight = /* @__PURE__ */ _curry3(function reduceRight2(fn, acc, list) {
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
  var reduceRight_default = reduceRight;

  // node_modules/ramda/es/reduceWhile.js
  var reduceWhile = /* @__PURE__ */ _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
    return _reduce(function(acc, x) {
      return pred(acc, x) ? fn(acc, x) : _reduced(acc);
    }, a, list);
  });
  var reduceWhile_default = reduceWhile;

  // node_modules/ramda/es/reduced.js
  var reduced = /* @__PURE__ */ _curry1(_reduced);
  var reduced_default = reduced;

  // node_modules/ramda/es/times.js
  var times = /* @__PURE__ */ _curry2(function times2(fn, n) {
    var len = Number(n);
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
  var times_default = times;

  // node_modules/ramda/es/repeat.js
  var repeat = /* @__PURE__ */ _curry2(function repeat2(value, n) {
    return times_default(always_default(value), n);
  });
  var repeat_default = repeat;

  // node_modules/ramda/es/replace.js
  var replace = /* @__PURE__ */ _curry3(function replace2(regex, replacement, str2) {
    return str2.replace(regex, replacement);
  });
  var replace_default = replace;

  // node_modules/ramda/es/scan.js
  var scan = /* @__PURE__ */ _curry3(function scan2(fn, acc, list) {
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
  var scan_default = scan;

  // node_modules/ramda/es/sequence.js
  var sequence = /* @__PURE__ */ _curry2(function sequence2(of2, traversable) {
    return typeof traversable.sequence === "function" ? traversable.sequence(of2) : reduceRight_default(function(x, acc) {
      return ap_default(map_default(prepend_default, x), acc);
    }, of2([]), traversable);
  });
  var sequence_default = sequence;

  // node_modules/ramda/es/set.js
  var set = /* @__PURE__ */ _curry3(function set2(lens3, v, x) {
    return over_default(lens3, always_default(v), x);
  });
  var set_default = set;

  // node_modules/ramda/es/sort.js
  var sort = /* @__PURE__ */ _curry2(function sort2(comparator4, list) {
    return Array.prototype.slice.call(list, 0).sort(comparator4);
  });
  var sort_default = sort;

  // node_modules/ramda/es/sortBy.js
  var sortBy = /* @__PURE__ */ _curry2(function sortBy2(fn, list) {
    return Array.prototype.slice.call(list, 0).sort(function(a, b) {
      var aa = fn(a);
      var bb = fn(b);
      return aa < bb ? -1 : aa > bb ? 1 : 0;
    });
  });
  var sortBy_default = sortBy;

  // node_modules/ramda/es/sortWith.js
  var sortWith = /* @__PURE__ */ _curry2(function sortWith2(fns, list) {
    return Array.prototype.slice.call(list, 0).sort(function(a, b) {
      var result = 0;
      var i = 0;
      while (result === 0 && i < fns.length) {
        result = fns[i](a, b);
        i += 1;
      }
      return result;
    });
  });
  var sortWith_default = sortWith;

  // node_modules/ramda/es/split.js
  var split = /* @__PURE__ */ invoker_default(1, "split");
  var split_default = split;

  // node_modules/ramda/es/splitAt.js
  var splitAt = /* @__PURE__ */ _curry2(function splitAt2(index2, array) {
    return [slice_default(0, index2, array), slice_default(index2, length_default(array), array)];
  });
  var splitAt_default = splitAt;

  // node_modules/ramda/es/splitEvery.js
  var splitEvery = /* @__PURE__ */ _curry2(function splitEvery2(n, list) {
    if (n <= 0) {
      throw new Error("First argument to splitEvery must be a positive integer");
    }
    var result = [];
    var idx = 0;
    while (idx < list.length) {
      result.push(slice_default(idx, idx += n, list));
    }
    return result;
  });
  var splitEvery_default = splitEvery;

  // node_modules/ramda/es/splitWhen.js
  var splitWhen = /* @__PURE__ */ _curry2(function splitWhen2(pred, list) {
    var idx = 0;
    var len = list.length;
    var prefix = [];
    while (idx < len && !pred(list[idx])) {
      prefix.push(list[idx]);
      idx += 1;
    }
    return [prefix, Array.prototype.slice.call(list, idx)];
  });
  var splitWhen_default = splitWhen;

  // node_modules/ramda/es/splitWhenever.js
  var splitWhenever = /* @__PURE__ */ _curryN(2, [], function splitWhenever2(pred, list) {
    var acc = [];
    var curr = [];
    for (var i = 0; i < list.length; i = i + 1) {
      if (!pred(list[i])) {
        curr.push(list[i]);
      }
      if ((i < list.length - 1 && pred(list[i + 1]) || i === list.length - 1) && curr.length > 0) {
        acc.push(curr);
        curr = [];
      }
    }
    return acc;
  });
  var splitWhenever_default = splitWhenever;

  // node_modules/ramda/es/startsWith.js
  var startsWith = /* @__PURE__ */ _curry2(function(prefix, list) {
    return equals_default(take_default(prefix.length, list), prefix);
  });
  var startsWith_default = startsWith;

  // node_modules/ramda/es/subtract.js
  var subtract = /* @__PURE__ */ _curry2(function subtract2(a, b) {
    return Number(a) - Number(b);
  });
  var subtract_default = subtract;

  // node_modules/ramda/es/symmetricDifference.js
  var symmetricDifference = /* @__PURE__ */ _curry2(function symmetricDifference2(list1, list2) {
    return concat_default(difference_default(list1, list2), difference_default(list2, list1));
  });
  var symmetricDifference_default = symmetricDifference;

  // node_modules/ramda/es/symmetricDifferenceWith.js
  var symmetricDifferenceWith = /* @__PURE__ */ _curry3(function symmetricDifferenceWith2(pred, list1, list2) {
    return concat_default(differenceWith_default(pred, list1, list2), differenceWith_default(pred, list2, list1));
  });
  var symmetricDifferenceWith_default = symmetricDifferenceWith;

  // node_modules/ramda/es/takeLastWhile.js
  var takeLastWhile = /* @__PURE__ */ _curry2(function takeLastWhile2(fn, xs) {
    var idx = xs.length - 1;
    while (idx >= 0 && fn(xs[idx])) {
      idx -= 1;
    }
    return slice_default(idx + 1, Infinity, xs);
  });
  var takeLastWhile_default = takeLastWhile;

  // node_modules/ramda/es/internal/_xtakeWhile.js
  var XTakeWhile = /* @__PURE__ */ function() {
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
  var _xtakeWhile = /* @__PURE__ */ _curry2(function _xtakeWhile2(f, xf) {
    return new XTakeWhile(f, xf);
  });
  var xtakeWhile_default = _xtakeWhile;

  // node_modules/ramda/es/takeWhile.js
  var takeWhile = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable(["takeWhile"], xtakeWhile_default, function takeWhile2(fn, xs) {
      var idx = 0;
      var len = xs.length;
      while (idx < len && fn(xs[idx])) {
        idx += 1;
      }
      return slice_default(0, idx, xs);
    })
  );
  var takeWhile_default = takeWhile;

  // node_modules/ramda/es/internal/_xtap.js
  var XTap = /* @__PURE__ */ function() {
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
  var _xtap = /* @__PURE__ */ _curry2(function _xtap2(f, xf) {
    return new XTap(f, xf);
  });
  var xtap_default = _xtap;

  // node_modules/ramda/es/tap.js
  var tap = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable([], xtap_default, function tap2(fn, x) {
      fn(x);
      return x;
    })
  );
  var tap_default = tap;

  // node_modules/ramda/es/internal/_isRegExp.js
  function _isRegExp(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
  }

  // node_modules/ramda/es/test.js
  var test = /* @__PURE__ */ _curry2(function test2(pattern2, str2) {
    if (!_isRegExp(pattern2)) {
      throw new TypeError("\u2018test\u2019 requires a value of type RegExp as its first argument; received " + toString_default(pattern2));
    }
    return _cloneRegExp(pattern2).test(str2);
  });
  var test_default = test;

  // node_modules/ramda/es/andThen.js
  var andThen = /* @__PURE__ */ _curry2(function andThen2(f, p) {
    _assertPromise("andThen", p);
    return p.then(f);
  });
  var andThen_default = andThen;

  // node_modules/ramda/es/toLower.js
  var toLower = /* @__PURE__ */ invoker_default(0, "toLowerCase");
  var toLower_default = toLower;

  // node_modules/ramda/es/toPairs.js
  var toPairs = /* @__PURE__ */ _curry1(function toPairs2(obj) {
    var pairs = [];
    for (var prop3 in obj) {
      if (_has(prop3, obj)) {
        pairs[pairs.length] = [prop3, obj[prop3]];
      }
    }
    return pairs;
  });
  var toPairs_default = toPairs;

  // node_modules/ramda/es/toPairsIn.js
  var toPairsIn = /* @__PURE__ */ _curry1(function toPairsIn2(obj) {
    var pairs = [];
    for (var prop3 in obj) {
      pairs[pairs.length] = [prop3, obj[prop3]];
    }
    return pairs;
  });
  var toPairsIn_default = toPairsIn;

  // node_modules/ramda/es/toUpper.js
  var toUpper = /* @__PURE__ */ invoker_default(0, "toUpperCase");
  var toUpper_default = toUpper;

  // node_modules/ramda/es/transduce.js
  var transduce = /* @__PURE__ */ curryN_default(4, function transduce2(xf, fn, acc, list) {
    return _reduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list);
  });
  var transduce_default = transduce;

  // node_modules/ramda/es/transpose.js
  var transpose = /* @__PURE__ */ _curry1(function transpose2(outerlist) {
    var i = 0;
    var result = [];
    while (i < outerlist.length) {
      var innerlist = outerlist[i];
      var j = 0;
      while (j < innerlist.length) {
        if (typeof result[j] === "undefined") {
          result[j] = [];
        }
        result[j].push(innerlist[j]);
        j += 1;
      }
      i += 1;
    }
    return result;
  });
  var transpose_default = transpose;

  // node_modules/ramda/es/traverse.js
  var traverse = /* @__PURE__ */ _curry3(function traverse2(of2, f, traversable) {
    return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](f, of2) : typeof traversable.traverse === "function" ? traversable.traverse(f, of2) : sequence_default(of2, map_default(f, traversable));
  });
  var traverse_default = traverse;

  // node_modules/ramda/es/trim.js
  var ws = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  var zeroWidth = "\u200B";
  var hasProtoTrim = typeof String.prototype.trim === "function";
  var trim = !hasProtoTrim || /* @__PURE__ */ ws.trim() || !/* @__PURE__ */ zeroWidth.trim() ? /* @__PURE__ */ _curry1(function trim2(str2) {
    var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
    var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
    return str2.replace(beginRx, "").replace(endRx, "");
  }) : /* @__PURE__ */ _curry1(function trim3(str2) {
    return str2.trim();
  });
  var trim_default = trim;

  // node_modules/ramda/es/tryCatch.js
  var tryCatch = /* @__PURE__ */ _curry2(function _tryCatch(tryer, catcher) {
    return _arity(tryer.length, function() {
      try {
        return tryer.apply(this, arguments);
      } catch (e) {
        return catcher.apply(this, _concat([e], arguments));
      }
    });
  });
  var tryCatch_default = tryCatch;

  // node_modules/ramda/es/unapply.js
  var unapply = /* @__PURE__ */ _curry1(function unapply2(fn) {
    return function() {
      return fn(Array.prototype.slice.call(arguments, 0));
    };
  });
  var unapply_default = unapply;

  // node_modules/ramda/es/unary.js
  var unary = /* @__PURE__ */ _curry1(function unary2(fn) {
    return nAry_default(1, fn);
  });
  var unary_default = unary;

  // node_modules/ramda/es/uncurryN.js
  var uncurryN = /* @__PURE__ */ _curry2(function uncurryN2(depth, fn) {
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
  var uncurryN_default = uncurryN;

  // node_modules/ramda/es/unfold.js
  var unfold = /* @__PURE__ */ _curry2(function unfold2(fn, seed) {
    var pair3 = fn(seed);
    var result = [];
    while (pair3 && pair3.length) {
      result[result.length] = pair3[0];
      pair3 = fn(pair3[1]);
    }
    return result;
  });
  var unfold_default = unfold;

  // node_modules/ramda/es/union.js
  var union = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ compose(uniq_default, _concat)
  );
  var union_default = union;

  // node_modules/ramda/es/internal/_xuniqWith.js
  var XUniqWith = /* @__PURE__ */ function() {
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
  var _xuniqWith = /* @__PURE__ */ _curry2(function _xuniqWith2(pred, xf) {
    return new XUniqWith(pred, xf);
  });
  var xuniqWith_default = _xuniqWith;

  // node_modules/ramda/es/uniqWith.js
  var uniqWith = /* @__PURE__ */ _curry2(
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
  var uniqWith_default = uniqWith;

  // node_modules/ramda/es/unionWith.js
  var unionWith = /* @__PURE__ */ _curry3(function unionWith2(pred, list1, list2) {
    return uniqWith_default(pred, _concat(list1, list2));
  });
  var unionWith_default = unionWith;

  // node_modules/ramda/es/unless.js
  var unless = /* @__PURE__ */ _curry3(function unless2(pred, whenFalseFn, x) {
    return pred(x) ? x : whenFalseFn(x);
  });
  var unless_default = unless;

  // node_modules/ramda/es/unnest.js
  var unnest = /* @__PURE__ */ chain_default(_identity);
  var unnest_default = unnest;

  // node_modules/ramda/es/until.js
  var until = /* @__PURE__ */ _curry3(function until2(pred, fn, init5) {
    var val = init5;
    while (!pred(val)) {
      val = fn(val);
    }
    return val;
  });
  var until_default = until;

  // node_modules/ramda/es/unwind.js
  var unwind = /* @__PURE__ */ _curry2(function(key, object) {
    if (!(key in object && isArray_default(object[key]))) {
      return [object];
    }
    return _map(function(item) {
      return _assoc(key, item, object);
    }, object[key]);
  });
  var unwind_default = unwind;

  // node_modules/ramda/es/valuesIn.js
  var valuesIn = /* @__PURE__ */ _curry1(function valuesIn2(obj) {
    var prop3;
    var vs = [];
    for (prop3 in obj) {
      vs[vs.length] = obj[prop3];
    }
    return vs;
  });
  var valuesIn_default = valuesIn;

  // node_modules/ramda/es/view.js
  var Const = function(x) {
    return {
      value: x,
      "fantasy-land/map": function() {
        return this;
      }
    };
  };
  var view = /* @__PURE__ */ _curry2(function view2(lens3, x) {
    return lens3(Const)(x).value;
  });
  var view_default = view;

  // node_modules/ramda/es/when.js
  var when = /* @__PURE__ */ _curry3(function when2(pred, whenTrueFn, x) {
    return pred(x) ? whenTrueFn(x) : x;
  });
  var when_default = when;

  // node_modules/ramda/es/where.js
  var where = /* @__PURE__ */ _curry2(function where2(spec, testObj) {
    for (var prop3 in spec) {
      if (_has(prop3, spec) && !spec[prop3](testObj[prop3])) {
        return false;
      }
    }
    return true;
  });
  var where_default = where;

  // node_modules/ramda/es/whereAny.js
  var whereAny = /* @__PURE__ */ _curry2(function whereAny2(spec, testObj) {
    for (var prop3 in spec) {
      if (_has(prop3, spec) && spec[prop3](testObj[prop3])) {
        return true;
      }
    }
    return false;
  });
  var whereAny_default = whereAny;

  // node_modules/ramda/es/whereEq.js
  var whereEq = /* @__PURE__ */ _curry2(function whereEq2(spec, testObj) {
    return where_default(map_default(equals_default, spec), testObj);
  });
  var whereEq_default = whereEq;

  // node_modules/ramda/es/without.js
  var without = /* @__PURE__ */ _curry2(function(xs, list) {
    return reject_default(flip_default(_includes)(xs), list);
  });
  var without_default = without;

  // node_modules/ramda/es/xor.js
  var xor = /* @__PURE__ */ _curry2(function xor2(a, b) {
    return Boolean(!a ^ !b);
  });
  var xor_default = xor;

  // node_modules/ramda/es/xprod.js
  var xprod = /* @__PURE__ */ _curry2(function xprod2(a, b) {
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
  var xprod_default = xprod;

  // node_modules/ramda/es/zip.js
  var zip = /* @__PURE__ */ _curry2(function zip2(a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while (idx < len) {
      rv[idx] = [a[idx], b[idx]];
      idx += 1;
    }
    return rv;
  });
  var zip_default = zip;

  // node_modules/ramda/es/zipObj.js
  var zipObj = /* @__PURE__ */ _curry2(function zipObj2(keys4, values3) {
    var idx = 0;
    var len = Math.min(keys4.length, values3.length);
    var out = {};
    while (idx < len) {
      out[keys4[idx]] = values3[idx];
      idx += 1;
    }
    return out;
  });
  var zipObj_default = zipObj;

  // node_modules/ramda/es/zipWith.js
  var zipWith = /* @__PURE__ */ _curry3(function zipWith2(fn, a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while (idx < len) {
      rv[idx] = fn(a[idx], b[idx]);
      idx += 1;
    }
    return rv;
  });
  var zipWith_default = zipWith;

  // node_modules/ramda/es/thunkify.js
  var thunkify = /* @__PURE__ */ _curry1(function thunkify2(fn) {
    return curryN_default(fn.length, function createThunk() {
      var fnArgs = arguments;
      return function invokeThunk() {
        return fn.apply(this, fnArgs);
      };
    });
  });
  var thunkify_default = thunkify;

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

  // src/lib/number.mod.ts
  Number.prototype.mod = function(n) {
    return knuth_mod(this, n);
  };
  function knuth_mod(dividend, divisor) {
    return dividend - divisor * Math.floor(dividend / divisor);
  }

  // src/lib/itertools.ts
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
    return [...Array(arrays[0].length)].map((_, i) => arrays.map((a) => a[i]));
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
    const iterators = arrays.map((e) => e[Symbol.iterator]());
    const box = Array(arrays.length);
    for (let v of iterators[0]) {
      box[0] = v;
      let i;
      try {
        for ([i, v] of enumerate(iterators.slice(1))) {
          box[i + 1] = head2(v);
        }
        yield [...box];
      } catch (e) {
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
  function zeros(n) {
    return new Array(n).fill(0);
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
      for (let i = start; i < stop; i++) {
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
  function* permutationsWithReplacement(arr, n) {
    const len = arr.length;
    const counters = zeros(n);
    let index2 = 1;
    for (const _ of range3(Math.pow(len, n))) {
      yield counters.map((i) => arr[i]);
      for (const i of range3(counters.length)) {
        if (index2.mod(Math.pow(len, counters.length - 1 - i)) === 0)
          counters[i] = (counters[i] + 1).mod(len);
      }
      index2++;
    }
  }
  function* map3(arr, func2) {
    for (const v of arr)
      yield func2(v);
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
    for (const e of arr) {
      const hash = hasher(e);
      if (!hashes.has(hash)) {
        yield e;
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
  var KEYCODETRANSLATEMAP = {};
  var modifiers = /* @__PURE__ */ new Map([
    ["A", "altKey"],
    ["C", "ctrlKey"],
    ["M", "metaKey"],
    ["S", "shiftKey"]
  ]);
  var MinimalKey = class {
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
      } catch (e) {
        if (!(e instanceof RangeError))
          throw e;
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
      } catch (e) {
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
  var commandKey2jsKey = {
    Comma: ",",
    Period: ".",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Space: " "
  };
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
  var KEYMAP_CACHE = {};
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
  browser.storage.onChanged.addListener((changes) => {
    if ("userconfig" in changes) {
      KEYMAP_CACHE = {};
    }
  });
  function updateBaseLayout() {
    KEYCODETRANSLATEMAP = mergeRight_default(
      keyboardlayouts[get("keyboardlayoutbase")],
      get("keyboardlayoutoverrides")
    );
  }

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
  function parse_bind_args(...args2) {
    if (args2.length === 0)
      throw new Error("Invalid bind/unbind arguments.");
    const result = {};
    result.mode = "normal";
    if (args2[0].startsWith("--mode=")) {
      result.mode = args2.shift().replace("--mode=", "");
    }
    if (!mode2maps.has(result.mode)) {
      result.configName = result.mode + "maps";
    } else {
      result.configName = mode2maps.get(result.mode);
    }
    const key = args2.shift();
    result.key = canonicaliseMapstr(key);
    result.excmd = args2.join(" ");
    return result;
  }

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
  function o3(object) {
    return Object.assign(/* @__PURE__ */ Object.create(null), object);
  }
  function schlepp(settings) {
    Object.assign(USERCONFIG, settings);
  }
  var USERCONFIG = o3({});
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
  var keyboardlayouts = {
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
  var mergeDeepCull = pipe(mergeDeep, removeNull);
  var DEFAULTS = mergeDeepCull(
    o3(new default_config()),
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
        (resolve) => WAITERS.push(() => resolve(get(target_typed, ...target)))
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
  function setURL(pattern2, ...args2) {
    try {
      new RegExp(pattern2);
      return set3("subconfigs", pattern2, ...args2);
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
  function unsetURL(pattern2, ...target) {
    return unset("subconfigs", pattern2, ...target);
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
        Object.keys(subconfigs).map((pattern2) => [pattern2, getURL(pattern2, setting)]).filter(([_pattern, value]) => value).forEach(
          ([pattern2, value]) => setURL(pattern2, ...setting, fn(value))
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
            (l) => set3("logging", l, leveltostr[logging[l]])
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
  var changeListeners = /* @__PURE__ */ new Map();
  function addChangeListener(name, listener3) {
    let arr = changeListeners.get(name);
    if (!arr) {
      arr = [];
      changeListeners.set(name, arr);
    }
    arr.push(listener3);
  }
  function removeChangeListener(name, listener3) {
    const arr = changeListeners.get(name);
    if (!arr)
      return;
    const i = arr.indexOf(listener3);
    if (i >= 0)
      arr.splice(i, 1);
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
  var parseConfigHelper = (pconf, parseobj, prefix = []) => {
    for (const i of Object.keys(pconf)) {
      if (typeof pconf[i] !== "object") {
        if (prefix[0] === "subconfigs") {
          const pattern2 = prefix[1];
          const subconf = [...prefix.slice(2), i].join(".");
          parseobj.subconfigs.push(
            `seturl ${pattern2} ${subconf} ${pconf[i]}`
          );
        } else {
          parseobj.conf.push(
            `set ${[...prefix, i].join(".")} ${pconf[i]}`
          );
        }
      } else if (pconf[i] === null) {
        parseobj.nulls.push(`setnull ${[...prefix, i].join(".")}`);
      } else {
        for (const e of Object.keys(pconf[i])) {
          if (modeMaps.includes(i)) {
            let cmd = "bind";
            if (prefix[0] === "subconfigs")
              cmd = cmd + "url " + prefix[1];
            if (i !== "nmaps") {
              const mode2 = maps2mode.get(i);
              cmd += ` --mode=${mode2}`;
            }
            if (pconf[i][e] === null) {
              parseobj.binds.push(`un${cmd} ${e}`);
              continue;
            }
            if (pconf[i][e].length > 0) {
              parseobj.binds.push(`${cmd} ${e} ${pconf[i][e]}`);
            } else {
              parseobj.binds.push(`un${cmd} ${e}`);
            }
          } else if (pconf[i][e] === null) {
            parseobj.nulls.push(`setnull ${i}.${e}`);
          } else if (i === "exaliases") {
            if (e === "alias") {
              parseobj.aliases.push(`command ${e} ${pconf[i][e]}`);
            } else {
              parseobj.aliases.push(`alias ${e} ${pconf[i][e]}`);
            }
          } else if (i === "autocmds") {
            for (const a of Object.keys(pconf[i][e])) {
              parseobj.aucmds.push(
                `autocmd ${e} ${a} ${pconf[i][e][a]}`
              );
            }
          } else if (i === "autocontain") {
            parseobj.aucons.push(`autocontain ${e} ${pconf[i][e]}`);
          } else if (i === "logging") {
            let level;
            if (pconf[i][e] === 0)
              level = "never";
            if (pconf[i][e] === 1)
              level = "error";
            if (pconf[i][e] === 2)
              level = "warning";
            if (pconf[i][e] === 3)
              level = "info";
            if (pconf[i][e] === 4)
              level = "debug";
            parseobj.logging.push(`set logging.${e} ${level}`);
          } else if (i === "customthemes") {
          } else {
            parseConfigHelper(pconf[i], parseobj, [...prefix, i]);
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

  // compiler/types/AnyType.ts
  var AnyType = class {
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
    convert(argument2) {
      return argument2;
    }
  };

  // compiler/types/BooleanType.ts
  var BooleanType = class {
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
    convert(argument2) {
      if (argument2 === "true") {
        return true;
      } else if (argument2 === "false") {
        return false;
      }
      throw new Error("Can't convert ${argument} to boolean");
    }
  };

  // compiler/types/FunctionType.ts
  var FunctionType = class {
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
    convert(argument2) {
      throw new Error(`Conversion to function not implemented: ${argument2}`);
    }
  };

  // compiler/types/NumberType.ts
  var NumberType = class {
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
    convert(argument2) {
      const n = parseFloat(argument2);
      if (!Number.isNaN(n)) {
        return n;
      }
      throw new Error(`Can't convert to number: ${argument2}`);
    }
  };

  // compiler/types/ObjectType.ts
  var ObjectType = class {
    // Note: a map that has an empty key ("") uses the corresponding type as default type
    constructor(members = /* @__PURE__ */ new Map(), isDotDotDot = false, isQuestion = false) {
      this.members = members;
      this.isDotDotDot = isDotDotDot;
      this.isQuestion = isQuestion;
      this.kind = "object";
    }
    toConstructor() {
      return `new ObjectType(new Map<string, Type>([` + Array.from(this.members.entries()).map(([n, m]) => `[${JSON.stringify(n)}, ${m.toConstructor()}]`).join(", ") + `]), ${this.isDotDotDot}, ${this.isQuestion})`;
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
    convert(argument2) {
      try {
        return JSON.parse(argument2);
      } catch (e) {
        throw new Error(`Can't convert to object: ${argument2}`);
      }
    }
  };

  // compiler/types/StringType.ts
  var StringType = class {
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
    convert(argument2) {
      if (typeof argument2 === "string") {
        return argument2;
      }
      throw new Error(`Can't convert to string: ${argument2}`);
    }
  };

  // compiler/types/TypeReferenceType.ts
  var TypeReferenceType = class {
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
    convert(argument2) {
      throw new Error("Conversion of simple type references not implemented.");
    }
  };

  // compiler/types/VoidType.ts
  var VoidType = class {
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
    convert(argument2) {
      return null;
    }
  };

  // compiler/types/ArrayType.ts
  var ArrayType = class {
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
    convert(argument2) {
      if (!Array.isArray(argument2)) {
        try {
          argument2 = JSON.parse(argument2);
        } catch (e) {
          throw new Error(`Can't convert ${argument2} to array:`);
        }
        if (!Array.isArray(argument2)) {
          throw new Error(`Can't convert ${argument2} to array:`);
        }
      }
      return argument2.map((v) => this.elemType.convert(v));
    }
  };

  // compiler/types/LiteralTypeType.ts
  var LiteralTypeType = class {
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
    convert(argument2) {
      if (argument2 === this.value) {
        return argument2;
      }
      throw new Error(
        `Argument does not match expected value (${this.value}): ${argument2}`
      );
    }
  };

  // compiler/types/TupleType.ts
  var TupleType = class {
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
      return `[${this.elemTypes.map((e) => e.toString()).join(", ")}]`;
    }
    convert(argument2) {
      if (!Array.isArray(argument2)) {
        try {
          argument2 = JSON.parse(argument2);
        } catch (e) {
          throw new Error(`Can't convert to tuple: ${argument2}`);
        }
        if (!Array.isArray(argument2)) {
          throw new Error(`Can't convert to tuple: ${argument2}`);
        }
      }
      if (argument2.length !== this.elemTypes.length) {
        throw new Error(
          `Error converting tuple: number of elements and type mismatch ${argument2}`
        );
      }
      return argument2.map((v, i) => this.elemTypes[i].convert(v));
    }
  };

  // compiler/types/UnionType.ts
  var UnionType = class {
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
      return this.types.map((t) => t.toString()).join(" | ");
    }
    convert(argument2) {
      for (const t of this.types) {
        try {
          return t.convert(argument2);
        } catch (e) {
        }
      }
      throw new Error(`Can't convert "${argument2}" to any of: ${this.types}`);
    }
  };

  // compiler/metadata/SymbolMetadata.ts
  var SymbolMetadata = class {
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

  // compiler/metadata/ClassMetadata.ts
  var ClassMetadata = class {
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
      return `new ClassMetadata(new Map<string, SymbolMetadata>([` + Array.from(this.members.entries()).map(([n, m]) => `[${JSON.stringify(n)}, ${m.toConstructor()}]`).join(",\n") + `]))`;
    }
  };

  // compiler/metadata/FileMetadata.ts
  var FileMetadata = class {
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
      return `new FileMetadata(new Map<string, ClassMetadata>([` + Array.from(this.classes.entries()).map(([n, c]) => `[${JSON.stringify(n)}, ${c.toConstructor()}]`).join(",\n") + `]), new Map<string, SymbolMetadata>([` + Array.from(this.functions.entries()).map(([n, f]) => `[${JSON.stringify(n)}, ${f.toConstructor()}]`).join(",\n") + `]))`;
    }
  };

  // compiler/metadata/ProgramMetadata.ts
  var ProgramMetadata = class {
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
      return `new ProgramMetadata(new Map<string, FileMetadata>([` + Array.from(this.files.entries()).map(([n, f]) => `[${JSON.stringify(n)}, ${f.toConstructor()}]`).join(",\n") + `]))`;
    }
  };

  // src/.metadata.generated.ts
  var everything = new ProgramMetadata(/* @__PURE__ */ new Map([
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
  var staticThemes = ["auto", "dark", "default", "greenmat", "halloween", "midnight", "quake", "quakelight", "shydactyl"];

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

  // src/parsers/exmode.ts
  var logger = new Logger("exmode");
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
    const [func2, ...args2] = expandedExstr.trim().split(/\s+/);
    const dotIndex = func2.indexOf(".");
    const namespce = func2.substring(0, dotIndex);
    const funcName = func2.substring(dotIndex + 1);
    const excmds = all_excmds[namespce];
    if (excmds === void 0) {
      throw new Error(`Unknown namespace: ${namespce}.`);
    }
    let converted_args;
    if (namespce == "" && args2.length > 0) {
      let types;
      try {
        types = everything.getFile("src/excmds.ts").getFunction(funcName).type.args;
      } catch (e) {
        types = null;
        converted_args = args2;
      }
      if (types !== null) {
        try {
          converted_args = convertArgs(types, args2);
        } catch (e) {
          logger.error("Error executing or parsing:", exstr, e);
          throw e;
        }
      }
    } else {
      converted_args = args2;
    }
    if (excmds[funcName] === void 0) {
      logger.error("Not an excmd:", exstr);
      throw new Error(`Not an excmd: ${func2}`);
    }
    return [excmds[funcName], converted_args];
  }

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
          get(_, func2) {
            return (...args2) => message(
              "browser_proxy_background",
              "shim",
              api,
              func2,
              args2
            );
          }
        }
      );
    }
  });
  var browser_proxy_default = browserProxy;

  // src/lib/url_util.ts
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
  function getAbsoluteURL(url, baseURI = document.baseURI) {
    return new URL(url, baseURI).href;
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
      const tab2 = await browserBg.tabs.create(options2);
      const answer = new Promise((resolve) => {
        if (waitForDOM) {
          const listener3 = (message2, sender) => {
            var _a;
            if (message2 === "dom_loaded_background" && ((_a = sender == null ? void 0 : sender.tab) == null ? void 0 : _a.id) === tab2.id) {
              browserBg.runtime.onMessage.removeListener(listener3);
              resolve(tab2);
            }
          };
          browserBg.runtime.onMessage.addListener(listener3);
        } else {
          resolve(tab2);
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
  async function openInTab(tab2, opts = {}, strarr) {
    const maybeURL = await queryAndURLwrangler(strarr);
    if (typeof maybeURL === "string") {
      return browserBg.tabs.update(
        tab2.id,
        Object.assign({ url: maybeURL }, opts)
      );
    }
    if (typeof maybeURL === "object") {
      return browserBg.search.search({ tabId: tab2.id, ...maybeURL });
    }
    return browserBg.tabs.update(
      tab2.id,
      Object.assign({ url: "/static/newtab.html" }, opts)
    );
  }
  async function goToTab(tabId) {
    const tab2 = await browserBg.tabs.update(tabId, { active: true });
    await browserBg.windows.update(tab2.windowId, { focused: true });
    return tab2;
  }

  // src/lib/messaging.ts
  var logger2 = new logging_default("messaging");
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
      } catch (e) {
        logger2.error(
          `Error processing ${message2.command}(${message2.args})`,
          e
        );
        return Promise.reject(e);
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
  var _ownTabId;
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
      } catch (e) {
        if (e.message != "Could not establish connection. Receiving end does not exist.") {
          logger2.error(e);
        }
      }
    }
    return responses;
  }
  var listeners = /* @__PURE__ */ new Map();
  function addListener(type3, callback) {
    if (!listeners.get(type3)) {
      listeners.set(type3, /* @__PURE__ */ new Set());
    }
    listeners.get(type3).add(callback);
    return () => {
      listeners.get(type3).delete(callback);
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
      for (const listener3 of listeners.get(message2.type)) {
        listener3(message2, sender, sendResponse);
      }
    }
  }
  browser.runtime.onMessage.addListener(onMessage);

  // src/state.ts
  var logger3 = new logging_default("state");
  var State = class {
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
  var PERSISTENT_KEYS = ["cmdHistory", "globalMarks"];
  var defaults = Object.freeze(new State());
  var overlay = {};
  browser.storage.local.get("state").then((res) => {
    if ("state" in res) {
      logger3.debug("Loaded initial state:", res.state);
      Object.assign(overlay, res.state);
    }
  }).catch((...args2) => logger3.error(...args2));
  var state = new Proxy(overlay, {
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

  // src/lib/controller.ts
  var logger4 = new logging_default("controller");
  var stored_excmds;
  function setExCmds(excmds) {
    stored_excmds = excmds;
  }
  async function acceptExCmd(exstr) {
    try {
      const [func2, args2] = parser(exstr, stored_excmds);
      if (func2 !== stored_excmds[""].repeat && exstr.search("winopen -private") < 0) {
        getAsync2("last_ex_str").then((last_ex_str) => {
          if (last_ex_str != exstr)
            state.last_ex_str = exstr;
        });
      }
      try {
        return await func2(...args2);
      } catch (e) {
        logger4.error("controller in excmd: ", e);
      }
    } catch (e) {
      logger4.error("controller while accepting: ", e);
    }
  }

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

  // src/lib/math.ts
  function linspace(a, b, n) {
    if (typeof n === "undefined")
      n = Math.max(Math.round(b - a) + 1, 1);
    if (n < 2) {
      return n === 1 ? [a] : [];
    }
    let i;
    const ret = Array(n);
    n--;
    for (i = n; i >= 0; i--) {
      ret[i] = (i * b + (n - i) * a) / n;
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

  // src/perf.ts
  var logger5 = new Logger("performance");
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
  var Marker = class {
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
      logger5.debug(
        "Marking startpoint of performance counter for %o",
        this.metricName
      );
      performance.mark(this.metricName.startName);
      return this;
    }
    end() {
      if (!this.active)
        return this;
      logger5.debug(
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
  function listenForCounters(statsLogger2) {
    let callback;
    if (statsLogger2 === void 0) {
      callback = (list) => {
        sendStats(list.getEntries());
      };
    } else {
      callback = (list) => {
        statsLogger2.pushList(list.getEntries());
      };
    }
    const perfObserver2 = new PerformanceObserver(callback);
    perfObserver2.observe({ entryTypes: ["mark", "measure"] });
    return perfObserver2;
  }
  var StatsLogger = class {
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
      const filterFun = (e) => filters.every((f) => f.matches(e));
      return this.buffer.filter(filterFun);
    }
    updateBuffersize() {
      const perfsamples = Number(get("perfsamples"));
      if (Number.isInteger(perfsamples)) {
        this.buffersize = perfsamples;
      } else {
        if (performance.now() - this.lastError > 5e3) {
          this.lastError = performance.now();
          logger5.error(
            "perfsamples must be an integer, is %O",
            perfsamples
          );
        }
      }
    }
    pushEntry(entry) {
      logger5.debug(
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
    const tobarwidth = (n) => barwidth * n / maxcount;
    const result = [];
    for (const [bucketval, bucketcount] of bucketed.entries()) {
      const bar = "#".repeat(tobarwidth(bucketcount));
      const label = bucketval.toString().padEnd(labelwidth);
      result.push(label + bar);
    }
    return result.join("\n");
  }
  var StatsFilter = class {
    constructor(config) {
      this.config = config;
    }
    matches(entry) {
      const metricNameInfo = extractMetricName(entry.name);
      return !(this.config.kind === "functionName" && this.config.functionName !== metricNameInfo.functionName || this.config.kind === "ownerName" && this.config.ownerName !== metricNameInfo.ownerName || this.config.kind === "eventType" && this.config.eventType !== entry.entryType);
    }
  };
  var TRI_PERFORMANCE_NAME_PREFIX = "tri";
  function performanceApiAvailable() {
    return performance.mark !== void 0;
  }
  var extractRegExp = new RegExp(
    `^${TRI_PERFORMANCE_NAME_PREFIX}/([^/]+)/([^:]+):([^:]+)`
    // No need to handle :start/:end
    // because we can get that from the
    // sample itself.
  );
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
  var MetricName = class {
    constructor(ownerName, functionName) {
      const uniqueSuffix = Math.floor(
        Math.random() * Math.floor(1e6)
      ).toString();
      this.fullName = `${TRI_PERFORMANCE_NAME_PREFIX}/${ownerName}/${functionName}:${uniqueSuffix}`;
      this.startName = `${this.fullName}:start`;
      this.endName = `${this.fullName}:end`;
    }
  };
  function sendStats(list) {
    message(
      "performance_background",
      "receiveStatsJson",
      JSON.stringify(list)
    );
  }

  // src/.excmds_background.generated.ts
  var excmds_background_generated_exports = {};
  __export(excmds_background_generated_exports, {
    ABOUT_WHITELIST: () => ABOUT_WHITELIST,
    INPUTTAGS_selectors: () => INPUTTAGS_selectors,
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
    buildFilterConfigs: () => buildFilterConfigs,
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
    drawingerasertoggle: () => drawingerasertoggle,
    drawingstart: () => drawingstart,
    echo: () => echo,
    editor: () => editor2,
    elementunhide: () => elementunhide,
    escapehatch: () => escapehatch2,
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
    get: () => get3,
    getAutocmdEvents: () => getAutocmdEvents,
    getGotoSelectors: () => getGotoSelectors,
    getInputSelector: () => getInputSelector,
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
    jsua: () => jsua2,
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
    recontain: () => recontain,
    reload: () => reload,
    reloadall: () => reloadall,
    reloadallbut: () => reloadallbut,
    reloaddead: () => reloaddead,
    reloadhard: () => reloadhard,
    removeTridactylEditorClass: () => removeTridactylEditorClass,
    removepref: () => removepref,
    repeat: () => repeat3,
    reset: () => reset,
    reseturl: () => reseturl,
    restart: () => restart,
    rot13: () => rot132,
    rssexec: () => rssexec,
    run_exstr: () => run_exstr,
    sanitise: () => sanitise,
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
    sidebartoggle: () => sidebartoggle2,
    sleep: () => sleep3,
    snow_mouse_mode: () => snow_mouse_mode,
    source: () => source2,
    source_quiet: () => source_quiet,
    tab: () => tab,
    tab_helper: () => tab_helper,
    taball: () => taball,
    tabaudio: () => tabaudio,
    tabclose: () => tabclose,
    tabcloseallto: () => tabcloseallto,
    tabdetach: () => tabdetach,
    tabduplicate: () => tabduplicate,
    tabgrab: () => tabgrab,
    tabmove: () => tabmove,
    tabnext: () => tabnext,
    tabnext_gt: () => tabnext_gt,
    tabonly: () => tabonly,
    tabopen: () => tabopen,
    tabopen_helper: () => tabopen_helper,
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

  // node_modules/fuse.js/dist/fuse.esm.js
  function isArray(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
  }
  var INFINITY = 1 / 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    let result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function toString4(value) {
    return value == null ? "" : baseToString(value);
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
  }
  function isObject(value) {
    return typeof value === "object";
  }
  function isObjectLike(value) {
    return isObject(value) && value !== null;
  }
  function isDefined(value) {
    return value !== void 0 && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  }
  function getTag(value) {
    return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
  }
  var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
  var PATTERN_LENGTH_TOO_LARGE = (max3) => `Pattern length exceeds max of ${max3}.`;
  var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
  var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
  var hasOwn = Object.prototype.hasOwnProperty;
  var KeyStore = class {
    constructor(keys4) {
      this._keys = [];
      this._keyMap = {};
      let totalWeight = 0;
      keys4.forEach((key) => {
        let obj = createKey(key);
        totalWeight += obj.weight;
        this._keys.push(obj);
        this._keyMap[obj.id] = obj;
        totalWeight += obj.weight;
      });
      this._keys.forEach((key) => {
        key.weight /= totalWeight;
      });
    }
    get(keyId) {
      return this._keyMap[keyId];
    }
    keys() {
      return this._keys;
    }
    toJSON() {
      return JSON.stringify(this._keys);
    }
  };
  function createKey(key) {
    let path3 = null;
    let id2 = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString(key) || isArray(key)) {
      src = key;
      path3 = createKeyPath(key);
      id2 = createKeyId(key);
    } else {
      if (!hasOwn.call(key, "name")) {
        throw new Error(MISSING_KEY_PROPERTY("name"));
      }
      const name = key.name;
      src = name;
      if (hasOwn.call(key, "weight")) {
        weight = key.weight;
        if (weight <= 0) {
          throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
      }
      path3 = createKeyPath(name);
      id2 = createKeyId(name);
      getFn = key.getFn;
    }
    return { path: path3, id: id2, weight, src, getFn };
  }
  function createKeyPath(key) {
    return isArray(key) ? key : key.split(".");
  }
  function createKeyId(key) {
    return isArray(key) ? key.join(".") : key;
  }
  function get2(obj, path3) {
    let list = [];
    let arr = false;
    const deepGet = (obj2, path4, index2) => {
      if (!isDefined(obj2)) {
        return;
      }
      if (!path4[index2]) {
        list.push(obj2);
      } else {
        let key = path4[index2];
        const value = obj2[key];
        if (!isDefined(value)) {
          return;
        }
        if (index2 === path4.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
          list.push(toString4(value));
        } else if (isArray(value)) {
          arr = true;
          for (let i = 0, len = value.length; i < len; i += 1) {
            deepGet(value[i], path4, index2 + 1);
          }
        } else if (path4.length) {
          deepGet(value, path4, index2 + 1);
        }
      }
    };
    deepGet(obj, isString(path3) ? path3.split(".") : path3, 0);
    return arr ? list : list[0];
  }
  var MatchOptions = {
    // Whether the matches should be included in the result set. When `true`, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When `true`, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
  };
  var BasicOptions = {
    // When `true`, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
  };
  var FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
  };
  var AdvancedOptions = {
    // When `true`, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get2,
    // When `true`, search will ignore `location` and `distance`, so it won't matter
    // where in the string the pattern appears.
    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
    ignoreLocation: false,
    // When `true`, the calculation for the relevance score (used for sorting) will
    // ignore the field-length norm.
    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
    ignoreFieldNorm: false,
    // The weight to determine how much field length norm effects scoring.
    fieldNormWeight: 1
  };
  var Config = {
    ...BasicOptions,
    ...MatchOptions,
    ...FuzzyOptions,
    ...AdvancedOptions
  };
  var SPACE = /[^ ]+/g;
  function norm(weight = 1, mantissa = 3) {
    const cache = /* @__PURE__ */ new Map();
    const m = Math.pow(10, mantissa);
    return {
      get(value) {
        const numTokens = value.match(SPACE).length;
        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        }
        const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
        const n = parseFloat(Math.round(norm2 * m) / m);
        cache.set(numTokens, n);
        return n;
      },
      clear() {
        cache.clear();
      }
    };
  }
  var FuseIndex = class {
    constructor({
      getFn = Config.getFn,
      fieldNormWeight = Config.fieldNormWeight
    } = {}) {
      this.norm = norm(fieldNormWeight, 3);
      this.getFn = getFn;
      this.isCreated = false;
      this.setIndexRecords();
    }
    setSources(docs = []) {
      this.docs = docs;
    }
    setIndexRecords(records = []) {
      this.records = records;
    }
    setKeys(keys4 = []) {
      this.keys = keys4;
      this._keysMap = {};
      keys4.forEach((key, idx) => {
        this._keysMap[key.id] = idx;
      });
    }
    create() {
      if (this.isCreated || !this.docs.length) {
        return;
      }
      this.isCreated = true;
      if (isString(this.docs[0])) {
        this.docs.forEach((doc, docIndex) => {
          this._addString(doc, docIndex);
        });
      } else {
        this.docs.forEach((doc, docIndex) => {
          this._addObject(doc, docIndex);
        });
      }
      this.norm.clear();
    }
    // Adds a doc to the end of the index
    add(doc) {
      const idx = this.size();
      if (isString(doc)) {
        this._addString(doc, idx);
      } else {
        this._addObject(doc, idx);
      }
    }
    // Removes the doc at the specified index of the index
    removeAt(idx) {
      this.records.splice(idx, 1);
      for (let i = idx, len = this.size(); i < len; i += 1) {
        this.records[i].i -= 1;
      }
    }
    getValueForItemAtKeyId(item, keyId) {
      return item[this._keysMap[keyId]];
    }
    size() {
      return this.records.length;
    }
    _addString(doc, docIndex) {
      if (!isDefined(doc) || isBlank(doc)) {
        return;
      }
      let record = {
        v: doc,
        i: docIndex,
        n: this.norm.get(doc)
      };
      this.records.push(record);
    }
    _addObject(doc, docIndex) {
      let record = { i: docIndex, $: {} };
      this.keys.forEach((key, keyIndex) => {
        let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
        if (!isDefined(value)) {
          return;
        }
        if (isArray(value)) {
          let subRecords = [];
          const stack = [{ nestedArrIndex: -1, value }];
          while (stack.length) {
            const { nestedArrIndex, value: value2 } = stack.pop();
            if (!isDefined(value2)) {
              continue;
            }
            if (isString(value2) && !isBlank(value2)) {
              let subRecord = {
                v: value2,
                i: nestedArrIndex,
                n: this.norm.get(value2)
              };
              subRecords.push(subRecord);
            } else if (isArray(value2)) {
              value2.forEach((item, k) => {
                stack.push({
                  nestedArrIndex: k,
                  value: item
                });
              });
            } else
              ;
          }
          record.$[keyIndex] = subRecords;
        } else if (isString(value) && !isBlank(value)) {
          let subRecord = {
            v: value,
            n: this.norm.get(value)
          };
          record.$[keyIndex] = subRecord;
        }
      });
      this.records.push(record);
    }
    toJSON() {
      return {
        keys: this.keys,
        records: this.records
      };
    }
  };
  function createIndex(keys4, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys4.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const { keys: keys4, records } = data;
    const myIndex = new FuseIndex({ getFn, fieldNormWeight });
    myIndex.setKeys(keys4);
    myIndex.setIndexRecords(records);
    return myIndex;
  }
  function computeScore$1(pattern2, {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    const accuracy = errors / pattern2.length;
    if (ignoreLocation) {
      return accuracy;
    }
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) {
      return proximity ? 1 : accuracy;
    }
    return accuracy + proximity / distance;
  }
  function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i = 0;
    for (let len = matchmask.length; i < len; i += 1) {
      let match3 = matchmask[i];
      if (match3 && start === -1) {
        start = i;
      } else if (!match3 && start !== -1) {
        end = i - 1;
        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }
        start = -1;
      }
    }
    if (matchmask[i - 1] && i - start >= minMatchCharLength) {
      indices.push([start, i - 1]);
    }
    return indices;
  }
  var MAX_BITS = 32;
  function search(text, pattern2, patternAlphabet, {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    if (pattern2.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }
    const patternLen = pattern2.length;
    const textLen = text.length;
    const expectedLocation = Math.max(0, Math.min(location, textLen));
    let currentThreshold = threshold;
    let bestLocation = expectedLocation;
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    const matchMask = computeMatches ? Array(textLen) : [];
    let index2;
    while ((index2 = text.indexOf(pattern2, bestLocation)) > -1) {
      let score = computeScore$1(pattern2, {
        currentLocation: index2,
        expectedLocation,
        distance,
        ignoreLocation
      });
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index2 + patternLen;
      if (computeMatches) {
        let i = 0;
        while (i < patternLen) {
          matchMask[index2 + i] = 1;
          i += 1;
        }
      }
    }
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for (let i = 0; i < patternLen; i += 1) {
      let binMin = 0;
      let binMid = binMax;
      while (binMin < binMid) {
        const score2 = computeScore$1(pattern2, {
          errors: i,
          currentLocation: expectedLocation + binMid,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      }
      binMax = binMid;
      let start = Math.max(1, expectedLocation - binMid + 1);
      let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
      let bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << i) - 1;
      for (let j = finish; j >= start; j -= 1) {
        let currentLocation = j - 1;
        let charMatch = patternAlphabet[text.charAt(currentLocation)];
        if (computeMatches) {
          matchMask[currentLocation] = +!!charMatch;
        }
        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
        if (i) {
          bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
        }
        if (bitArr[j] & mask) {
          finalScore = computeScore$1(pattern2, {
            errors: i,
            currentLocation,
            expectedLocation,
            distance,
            ignoreLocation
          });
          if (finalScore <= currentThreshold) {
            currentThreshold = finalScore;
            bestLocation = currentLocation;
            if (bestLocation <= expectedLocation) {
              break;
            }
            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      }
      const score = computeScore$1(pattern2, {
        errors: i + 1,
        currentLocation: expectedLocation,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score > currentThreshold) {
        break;
      }
      lastBitArr = bitArr;
    }
    const result = {
      isMatch: bestLocation >= 0,
      // Count exact matches (those with a score of 0) to be "almost" exact
      score: Math.max(1e-3, finalScore)
    };
    if (computeMatches) {
      const indices = convertMaskToIndices(matchMask, minMatchCharLength);
      if (!indices.length) {
        result.isMatch = false;
      } else if (includeMatches) {
        result.indices = indices;
      }
    }
    return result;
  }
  function createPatternAlphabet(pattern2) {
    let mask = {};
    for (let i = 0, len = pattern2.length; i < len; i += 1) {
      const char = pattern2.charAt(i);
      mask[char] = (mask[char] || 0) | 1 << len - i - 1;
    }
    return mask;
  }
  var BitapSearch = class {
    constructor(pattern2, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      this.options = {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreLocation
      };
      this.pattern = isCaseSensitive ? pattern2 : pattern2.toLowerCase();
      this.chunks = [];
      if (!this.pattern.length) {
        return;
      }
      const addChunk = (pattern3, startIndex) => {
        this.chunks.push({
          pattern: pattern3,
          alphabet: createPatternAlphabet(pattern3),
          startIndex
        });
      };
      const len = this.pattern.length;
      if (len > MAX_BITS) {
        let i = 0;
        const remainder = len % MAX_BITS;
        const end = len - remainder;
        while (i < end) {
          addChunk(this.pattern.substr(i, MAX_BITS), i);
          i += MAX_BITS;
        }
        if (remainder) {
          const startIndex = len - MAX_BITS;
          addChunk(this.pattern.substr(startIndex), startIndex);
        }
      } else {
        addChunk(this.pattern, 0);
      }
    }
    searchIn(text) {
      const { isCaseSensitive, includeMatches } = this.options;
      if (!isCaseSensitive) {
        text = text.toLowerCase();
      }
      if (this.pattern === text) {
        let result2 = {
          isMatch: true,
          score: 0
        };
        if (includeMatches) {
          result2.indices = [[0, text.length - 1]];
        }
        return result2;
      }
      const {
        location,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        ignoreLocation
      } = this.options;
      let allIndices = [];
      let totalScore = 0;
      let hasMatches = false;
      this.chunks.forEach(({ pattern: pattern2, alphabet, startIndex }) => {
        const { isMatch, score, indices } = search(text, pattern2, alphabet, {
          location: location + startIndex,
          distance,
          threshold,
          findAllMatches,
          minMatchCharLength,
          includeMatches,
          ignoreLocation
        });
        if (isMatch) {
          hasMatches = true;
        }
        totalScore += score;
        if (isMatch && indices) {
          allIndices = [...allIndices, ...indices];
        }
      });
      let result = {
        isMatch: hasMatches,
        score: hasMatches ? totalScore / this.chunks.length : 1
      };
      if (hasMatches && includeMatches) {
        result.indices = allIndices;
      }
      return result;
    }
  };
  var BaseMatch = class {
    constructor(pattern2) {
      this.pattern = pattern2;
    }
    static isMultiMatch(pattern2) {
      return getMatch(pattern2, this.multiRegex);
    }
    static isSingleMatch(pattern2) {
      return getMatch(pattern2, this.singleRegex);
    }
    search() {
    }
  };
  function getMatch(pattern2, exp) {
    const matches = pattern2.match(exp);
    return matches ? matches[1] : null;
  }
  var ExactMatch = class extends BaseMatch {
    constructor(pattern2) {
      super(pattern2);
    }
    static get type() {
      return "exact";
    }
    static get multiRegex() {
      return /^="(.*)"$/;
    }
    static get singleRegex() {
      return /^=(.*)$/;
    }
    search(text) {
      const isMatch = text === this.pattern;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InverseExactMatch = class extends BaseMatch {
    constructor(pattern2) {
      super(pattern2);
    }
    static get type() {
      return "inverse-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"$/;
    }
    static get singleRegex() {
      return /^!(.*)$/;
    }
    search(text) {
      const index2 = text.indexOf(this.pattern);
      const isMatch = index2 === -1;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var PrefixExactMatch = class extends BaseMatch {
    constructor(pattern2) {
      super(pattern2);
    }
    static get type() {
      return "prefix-exact";
    }
    static get multiRegex() {
      return /^\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^\^(.*)$/;
    }
    search(text) {
      const isMatch = text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  };
  var InversePrefixExactMatch = class extends BaseMatch {
    constructor(pattern2) {
      super(pattern2);
    }
    static get type() {
      return "inverse-prefix-exact";
    }
    static get multiRegex() {
      return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^!\^(.*)$/;
    }
    search(text) {
      const isMatch = !text.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var SuffixExactMatch = class extends BaseMatch {
    constructor(pattern2) {
      super(pattern2);
    }
    static get type() {
      return "suffix-exact";
    }
    static get multiRegex() {
      return /^"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^(.*)\$$/;
    }
    search(text) {
      const isMatch = text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [text.length - this.pattern.length, text.length - 1]
      };
    }
  };
  var InverseSuffixExactMatch = class extends BaseMatch {
    constructor(pattern2) {
      super(pattern2);
    }
    static get type() {
      return "inverse-suffix-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^!(.*)\$$/;
    }
    search(text) {
      const isMatch = !text.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text.length - 1]
      };
    }
  };
  var FuzzyMatch = class extends BaseMatch {
    constructor(pattern2, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      super(pattern2);
      this._bitapSearch = new BitapSearch(pattern2, {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreLocation
      });
    }
    static get type() {
      return "fuzzy";
    }
    static get multiRegex() {
      return /^"(.*)"$/;
    }
    static get singleRegex() {
      return /^(.*)$/;
    }
    search(text) {
      return this._bitapSearch.searchIn(text);
    }
  };
  var IncludeMatch = class extends BaseMatch {
    constructor(pattern2) {
      super(pattern2);
    }
    static get type() {
      return "include";
    }
    static get multiRegex() {
      return /^'"(.*)"$/;
    }
    static get singleRegex() {
      return /^'(.*)$/;
    }
    search(text) {
      let location = 0;
      let index2;
      const indices = [];
      const patternLen = this.pattern.length;
      while ((index2 = text.indexOf(this.pattern, location)) > -1) {
        location = index2 + patternLen;
        indices.push([index2, location - 1]);
      }
      const isMatch = !!indices.length;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices
      };
    }
  };
  var searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
  ];
  var searchersLen = searchers.length;
  var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
  var OR_TOKEN = "|";
  function parseQuery(pattern2, options = {}) {
    return pattern2.split(OR_TOKEN).map((item) => {
      let query2 = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
      let results = [];
      for (let i = 0, len = query2.length; i < len; i += 1) {
        const queryItem = query2[i];
        let found = false;
        let idx = -1;
        while (!found && ++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isMultiMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            found = true;
          }
        }
        if (found) {
          continue;
        }
        idx = -1;
        while (++idx < searchersLen) {
          const searcher = searchers[idx];
          let token = searcher.isSingleMatch(queryItem);
          if (token) {
            results.push(new searcher(token, options));
            break;
          }
        }
      }
      return results;
    });
  }
  var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
  var ExtendedSearch = class {
    constructor(pattern2, {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}) {
      this.query = null;
      this.options = {
        isCaseSensitive,
        includeMatches,
        minMatchCharLength,
        findAllMatches,
        ignoreLocation,
        location,
        threshold,
        distance
      };
      this.pattern = isCaseSensitive ? pattern2 : pattern2.toLowerCase();
      this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_, options) {
      return options.useExtendedSearch;
    }
    searchIn(text) {
      const query2 = this.query;
      if (!query2) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const { includeMatches, isCaseSensitive } = this.options;
      text = isCaseSensitive ? text : text.toLowerCase();
      let numMatches = 0;
      let allIndices = [];
      let totalScore = 0;
      for (let i = 0, qLen = query2.length; i < qLen; i += 1) {
        const searchers2 = query2[i];
        allIndices.length = 0;
        numMatches = 0;
        for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
          const searcher = searchers2[j];
          const { isMatch, indices, score } = searcher.search(text);
          if (isMatch) {
            numMatches += 1;
            totalScore += score;
            if (includeMatches) {
              const type3 = searcher.constructor.type;
              if (MultiMatchSet.has(type3)) {
                allIndices = [...allIndices, ...indices];
              } else {
                allIndices.push(indices);
              }
            }
          } else {
            totalScore = 0;
            numMatches = 0;
            allIndices.length = 0;
            break;
          }
        }
        if (numMatches) {
          let result = {
            isMatch: true,
            score: totalScore / numMatches
          };
          if (includeMatches) {
            result.indices = allIndices;
          }
          return result;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  };
  var registeredSearchers = [];
  function register(...args2) {
    registeredSearchers.push(...args2);
  }
  function createSearcher(pattern2, options) {
    for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
      let searcherClass = registeredSearchers[i];
      if (searcherClass.condition(pattern2, options)) {
        return new searcherClass(pattern2, options);
      }
    }
    return new BitapSearch(pattern2, options);
  }
  var LogicalOperator = {
    AND: "$and",
    OR: "$or"
  };
  var KeyType = {
    PATH: "$path",
    PATTERN: "$val"
  };
  var isExpression = (query2) => !!(query2[LogicalOperator.AND] || query2[LogicalOperator.OR]);
  var isPath = (query2) => !!query2[KeyType.PATH];
  var isLeaf = (query2) => !isArray(query2) && isObject(query2) && !isExpression(query2);
  var convertToExplicit = (query2) => ({
    [LogicalOperator.AND]: Object.keys(query2).map((key) => ({
      [key]: query2[key]
    }))
  });
  function parse2(query2, options, { auto = true } = {}) {
    const next = (query3) => {
      let keys4 = Object.keys(query3);
      const isQueryPath = isPath(query3);
      if (!isQueryPath && keys4.length > 1 && !isExpression(query3)) {
        return next(convertToExplicit(query3));
      }
      if (isLeaf(query3)) {
        const key = isQueryPath ? query3[KeyType.PATH] : keys4[0];
        const pattern2 = isQueryPath ? query3[KeyType.PATTERN] : query3[key];
        if (!isString(pattern2)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }
        const obj = {
          keyId: createKeyId(key),
          pattern: pattern2
        };
        if (auto) {
          obj.searcher = createSearcher(pattern2, options);
        }
        return obj;
      }
      let node = {
        children: [],
        operator: keys4[0]
      };
      keys4.forEach((key) => {
        const value = query3[key];
        if (isArray(value)) {
          value.forEach((item) => {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };
    if (!isExpression(query2)) {
      query2 = convertToExplicit(query2);
    }
    return next(query2);
  }
  function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
    results.forEach((result) => {
      let totalScore = 1;
      result.matches.forEach(({ key, norm: norm2, score }) => {
        const weight = key ? key.weight : null;
        totalScore *= Math.pow(
          score === 0 && weight ? Number.EPSILON : score,
          (weight || 1) * (ignoreFieldNorm ? 1 : norm2)
        );
      });
      result.score = totalScore;
    });
  }
  function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) {
      return;
    }
    matches.forEach((match3) => {
      if (!isDefined(match3.indices) || !match3.indices.length) {
        return;
      }
      const { indices, value } = match3;
      let obj = {
        indices,
        value
      };
      if (match3.key) {
        obj.key = match3.key.src;
      }
      if (match3.idx > -1) {
        obj.refIndex = match3.idx;
      }
      data.matches.push(obj);
    });
  }
  function transformScore(result, data) {
    data.score = result.score;
  }
  function format(results, docs, {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}) {
    const transformers = [];
    if (includeMatches)
      transformers.push(transformMatches);
    if (includeScore)
      transformers.push(transformScore);
    return results.map((result) => {
      const { idx } = result;
      const data = {
        item: docs[idx],
        refIndex: idx
      };
      if (transformers.length) {
        transformers.forEach((transformer) => {
          transformer(result, data);
        });
      }
      return data;
    });
  }
  var Fuse = class {
    constructor(docs, options = {}, index2) {
      this.options = { ...Config, ...options };
      if (this.options.useExtendedSearch && false) {
        throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
      }
      this._keyStore = new KeyStore(this.options.keys);
      this.setCollection(docs, index2);
    }
    setCollection(docs, index2) {
      this._docs = docs;
      if (index2 && !(index2 instanceof FuseIndex)) {
        throw new Error(INCORRECT_INDEX_TYPE);
      }
      this._myIndex = index2 || createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
    }
    add(doc) {
      if (!isDefined(doc)) {
        return;
      }
      this._docs.push(doc);
      this._myIndex.add(doc);
    }
    remove(predicate = () => false) {
      const results = [];
      for (let i = 0, len = this._docs.length; i < len; i += 1) {
        const doc = this._docs[i];
        if (predicate(doc, i)) {
          this.removeAt(i);
          i -= 1;
          len -= 1;
          results.push(doc);
        }
      }
      return results;
    }
    removeAt(idx) {
      this._docs.splice(idx, 1);
      this._myIndex.removeAt(idx);
    }
    getIndex() {
      return this._myIndex;
    }
    search(query2, { limit = -1 } = {}) {
      const {
        includeMatches,
        includeScore,
        shouldSort,
        sortFn,
        ignoreFieldNorm
      } = this.options;
      let results = isString(query2) ? isString(this._docs[0]) ? this._searchStringList(query2) : this._searchObjectList(query2) : this._searchLogical(query2);
      computeScore(results, { ignoreFieldNorm });
      if (shouldSort) {
        results.sort(sortFn);
      }
      if (isNumber(limit) && limit > -1) {
        results = results.slice(0, limit);
      }
      return format(results, this._docs, {
        includeMatches,
        includeScore
      });
    }
    _searchStringList(query2) {
      const searcher = createSearcher(query2, this.options);
      const { records } = this._myIndex;
      const results = [];
      records.forEach(({ v: text, i: idx, n: norm2 }) => {
        if (!isDefined(text)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          results.push({
            item: text,
            idx,
            matches: [{ score, value: text, norm: norm2, indices }]
          });
        }
      });
      return results;
    }
    _searchLogical(query2) {
      const expression = parse2(query2, this.options);
      const evaluate = (node, item, idx) => {
        if (!node.children) {
          const { keyId, searcher } = node;
          const matches = this._findMatches({
            key: this._keyStore.get(keyId),
            value: this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher
          });
          if (matches && matches.length) {
            return [
              {
                idx,
                item,
                matches
              }
            ];
          }
          return [];
        }
        const res = [];
        for (let i = 0, len = node.children.length; i < len; i += 1) {
          const child = node.children[i];
          const result = evaluate(child, item, idx);
          if (result.length) {
            res.push(...result);
          } else if (node.operator === LogicalOperator.AND) {
            return [];
          }
        }
        return res;
      };
      const records = this._myIndex.records;
      const resultMap = {};
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (isDefined(item)) {
          let expResults = evaluate(expression, item, idx);
          if (expResults.length) {
            if (!resultMap[idx]) {
              resultMap[idx] = { idx, item, matches: [] };
              results.push(resultMap[idx]);
            }
            expResults.forEach(({ matches }) => {
              resultMap[idx].matches.push(...matches);
            });
          }
        }
      });
      return results;
    }
    _searchObjectList(query2) {
      const searcher = createSearcher(query2, this.options);
      const { keys: keys4, records } = this._myIndex;
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (!isDefined(item)) {
          return;
        }
        let matches = [];
        keys4.forEach((key, keyIndex) => {
          matches.push(
            ...this._findMatches({
              key,
              value: item[keyIndex],
              searcher
            })
          );
        });
        if (matches.length) {
          results.push({
            idx,
            item,
            matches
          });
        }
      });
      return results;
    }
    _findMatches({ key, value, searcher }) {
      if (!isDefined(value)) {
        return [];
      }
      let matches = [];
      if (isArray(value)) {
        value.forEach(({ v: text, i: idx, n: norm2 }) => {
          if (!isDefined(text)) {
            return;
          }
          const { isMatch, score, indices } = searcher.searchIn(text);
          if (isMatch) {
            matches.push({
              score,
              key,
              value: text,
              idx,
              norm: norm2,
              indices
            });
          }
        });
      } else {
        const { v: text, n: norm2 } = value;
        const { isMatch, score, indices } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({ score, key, value: text, norm: norm2, indices });
        }
      }
      return matches;
    }
  };
  Fuse.version = "6.6.2";
  Fuse.createIndex = createIndex;
  Fuse.parseIndex = parseIndex;
  Fuse.config = Config;
  {
    Fuse.parseQuery = parse2;
  }
  {
    register(ExtendedSearch);
  }

  // src/lib/containers.ts
  var logger6 = new Logger("containers");
  var ContainerColor = [
    "blue",
    "turquoise",
    "green",
    "yellow",
    "orange",
    "red",
    "pink",
    "purple"
  ];
  var ContainerIcon = [
    "fingerprint",
    "briefcase",
    "dollar",
    "cart",
    "circle",
    "gift",
    "vacation",
    "food",
    "fruit",
    "pet",
    "tree",
    "chill"
  ];
  var DefaultContainer = Object.freeze(
    fromString("default", "invisible", "noicond", "firefox-default")
  );
  async function create(name, color = "random", icon = "fingerprint") {
    if (color === "random")
      color = chooseRandomColor();
    const container = fromString(name, color, icon);
    delete container.cookieStoreId;
    logger6.debug(container);
    if (await exists(name)) {
      logger6.debug(`[Container.create] container already exists ${container}`);
      throw new Error(
        `[Container.create] container already exists, aborting.`
      );
    } else {
      const res = await browser.contextualIdentities.create(container);
      return res.cookieStoreId;
    }
  }
  async function remove3(name) {
    logger6.debug(name);
    const id2 = await getId(name);
    const res = await browser.contextualIdentities.remove(id2);
    logger6.debug("[Container.remove] removed container:", res.cookieStoreId);
  }
  function update4(containerId, updateObj) {
    const { name, color, icon } = updateObj;
    if (!isValidColor(color)) {
      logger6.debug(updateObj);
      throw new Error("[Container.update] invalid container color: " + color);
    }
    if (!isValidIcon(icon)) {
      logger6.debug(updateObj);
      throw new Error("[Container.update] invalid container icon: " + icon);
    }
    browser.contextualIdentities.update(containerId, { name, color, icon });
  }
  async function exists(cname) {
    let exists3 = false;
    try {
      const containers = await getAll();
      const res = containers.filter(
        (c) => c.name.toLowerCase() === cname.toLowerCase()
      );
      if (res.length > 0) {
        exists3 = true;
      }
    } catch (e) {
      exists3 = true;
      logger6.error(
        "[Container.exists] Error querying contextualIdentities:",
        e
      );
    }
    return exists3;
  }
  function fromString(name, color, icon, id2 = "") {
    return {
      name,
      color,
      icon,
      cookieStoreId: id2
    };
  }
  async function getAll() {
    return browser.contextualIdentities.query({});
  }
  async function getId(name) {
    const containers = await getAll();
    const res = containers.filter(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );
    if (res.length !== 1) {
      throw new Error(`Container '${name}' does not exist.`);
    } else {
      return res[0].cookieStoreId;
    }
  }
  async function fuzzyMatch(partialName) {
    const fuseOptions = {
      id: "cookieStoreId",
      shouldSort: true,
      threshold: 0.5,
      location: 0,
      distance: 100,
      mimMatchCharLength: 3,
      keys: ["name"]
    };
    const containers = await getAll();
    const fuse = new Fuse(containers, fuseOptions);
    const res = fuse.search(partialName);
    if (res.length >= 1)
      return res[0].item.cookieStoreId;
    else {
      throw new Error(
        "[Container.fuzzyMatch] no container matched that string"
      );
    }
  }
  function chooseRandomColor() {
    const max3 = Math.floor(ContainerColor.length);
    const n = Math.floor(Math.random() * max3);
    return ContainerColor[n];
  }
  function isValidColor(color) {
    return ContainerColor.indexOf(color) > -1;
  }
  function isValidIcon(icon) {
    return ContainerIcon.indexOf(icon) > -1;
  }

  // src/lib/extension_info.ts
  var KNOWN_EXTENSIONS = {
    temp_containers: "{c607c8df-14a7-4f28-894f-29e8722976af}",
    multi_account_containers: "@testpilot-containers"
  };
  var installedExtensions = {};
  function updateExtensionInfo(extension) {
    installedExtensions[extension.id] = extension;
  }
  function getExtensionEnabled(id2) {
    if (getExtensionInstalled(id2)) {
      return installedExtensions[id2].enabled;
    } else {
      return false;
    }
  }
  function getExtensionInstalled(id2) {
    return id2 in installedExtensions;
  }
  async function hasManagementPermission() {
    return browser.permissions.contains({
      permissions: ["management"]
    });
  }
  async function init3() {
    const hasPermission = await hasManagementPermission();
    if (!hasPermission) {
      return;
    }
    let extensions = [];
    try {
      extensions = await browser.management.getAll();
    } catch (e) {
      return;
    }
    for (const extension of extensions) {
      installedExtensions[extension.id] = extension;
    }
    browser.management.onInstalled.addListener(updateExtensionInfo);
    browser.management.onEnabled.addListener(updateExtensionInfo);
    browser.management.onDisabled.addListener(updateExtensionInfo);
    browser.management.onUninstalled.addListener(updateExtensionInfo);
  }
  async function listExtensions() {
    await init3();
    return Object.keys(installedExtensions).map((key) => installedExtensions[key]).filter((obj) => obj.optionsUrl.length > 0);
  }

  // src/lib/autocontainers.ts
  var logger7 = new Logger("containers");
  var AutoContain = class {
    constructor() {
      this.cancelledRequests = [];
      this.lastCreatedTab = null;
      this.tabCreatedListener = (tab2) => {
        this.lastCreatedTab = tab2;
      };
      this.completedRequestListener = (details) => {
        if (this.getCancelledRequest(details.tabId)) {
          this.clearCancelledRequests(details.tabId);
        }
      };
      this.autocontainConfigured = () => {
        const aucons = get("autocontain");
        return Object.keys(aucons).length !== 0;
      };
      this.autoContain = async (details) => {
        if (!this.autocontainConfigured())
          return { cancel: false };
        if (get("autocontainmode") === "relaxed")
          return { cancel: false };
        if (details.url.search("^https?://") < 0)
          return { cancel: false };
        if (details.tabId === -1)
          return { cancel: false };
        const [
          tab2,
          otherExtensionHasPriority,
          cookieStoreId
        ] = await Promise.all([
          browser.tabs.get(details.tabId),
          this.checkOtherExtensionsHavePriority(details),
          this.getAuconForDetails(details)
        ]);
        if (otherExtensionHasPriority)
          return { cancel: false };
        if (tab2.incognito)
          return { cancel: false };
        if (tab2.cookieStoreId === cookieStoreId)
          return { cancel: false };
        if (this.cancelEarly(tab2, details))
          return { cancel: true };
        const removeTab = this.lastCreatedTab && this.lastCreatedTab.id === tab2.id;
        const openerTabId = removeTab ? tab2.openerTabId : tab2.id;
        logger7.debug(
          "in tab %o and with details %o, reopening from container %o to container %o",
          tab2,
          details,
          tab2.cookieStoreId,
          cookieStoreId
        );
        browser.tabs.create({
          url: details.url,
          cookieStoreId,
          active: tab2.active,
          windowId: tab2.windowId,
          index: tab2.index + 1,
          openerTabId
        }).then((result) => {
          logger7.debug("Autocontainer created tab %o", result);
        });
        if (removeTab) {
          logger7.debug("Closing newly-opened tab %o", tab2);
          browser.tabs.remove(tab2.id);
        }
        return { cancel: true };
      };
      // Handles the requests after the initial checks made in this.autoContain.
      this.cancelEarly = (tab2, details) => {
        if (!this.cancelledRequests[tab2.id]) {
          this.cancelRequest(tab2, details);
        } else {
          let cancel = false;
          if (this.cancelledRequests[tab2.id].requestIds[details.requestId] || this.cancelledRequests[tab2.id].urls[details.url]) {
            cancel = true;
          }
          this.cancelledRequests[tab2.id].requestIds[details.requestId] = true;
          this.cancelledRequests[tab2.id].urls[details.url] = true;
          return cancel;
        }
        return false;
      };
      this.cancelRequest = (tab2, details) => {
        this.cancelledRequests[tab2.id] = {
          requestIds: {
            [details.requestId]: true
          },
          urls: {
            [details.url]: true
          }
        };
        setTimeout(() => {
          this.clearCancelledRequests(tab2.id);
        }, 2e3);
      };
      this.getCancelledRequest = (tabId) => this.cancelledRequests[tabId];
      // Clear the cancelled requests.
      this.clearCancelledRequests = (tabId) => {
        if (this.cancelledRequests[tabId]) {
          delete this.cancelledRequests[tabId];
        }
      };
      // Checks to see if there are any other container-related extensions and avoids getting into
      // fights with them.
      this.checkOtherExtensionsHavePriority = async (details) => {
        const priorities = await Promise.all([
          this.checkMACPriority(details),
          this.checkTempContainersPriority(details)
        ]);
        return priorities.some((t) => t);
      };
      this.checkMACPriority = async (details) => {
        if (!getExtensionEnabled(
          KNOWN_EXTENSIONS.multi_account_containers
        )) {
          logger7.debug("multi-account containers extension does not exist");
          return false;
        }
        const macAssignment = await browser.runtime.sendMessage(
          KNOWN_EXTENSIONS.multi_account_containers,
          {
            method: "getAssignment",
            url: details.url
          }
        ).catch((error) => {
          logger7.warning(
            "failed to communicate with multi-account containers extension: %o",
            error
          );
          return false;
        });
        if (macAssignment) {
          logger7.debug(
            "multi-account containers extension has priority over autocontainer directives"
          );
          return true;
        } else {
          logger7.debug(
            "multi-account containers extension exists but does not claim priority"
          );
          return false;
        }
      };
      this.checkTempContainersPriority = async (details) => {
        if (!getExtensionEnabled(
          KNOWN_EXTENSIONS.temp_containers
        )) {
          logger7.debug("temporary containers extension does not exist");
          return false;
        }
        const willContainInDefault = await this.getAuconForDetails(details) === "firefox-default";
        if (willContainInDefault) {
          logger7.info(
            "temporary containers extension has priority over autocontainer directives"
          );
        } else {
          logger7.debug(
            "temporary containers extension exists but does not claim priority"
          );
        }
        return willContainInDefault;
      };
      this.getAuconAndProxiesForUrl = async (url) => {
        const aucons = get("autocontain");
        const ausites = Object.keys(aucons);
        const aukeyarr = ausites.filter((e) => url.search(e) >= 0).sort((a, b) => b.length - a.length);
        if (!aukeyarr.length) {
          return ["firefox-default", []];
        } else {
          const val = aucons[aukeyarr[0]];
          const matches = val.match(/(.*)\+(.*)/);
          const [aucon2, proxies] = matches ? [matches[1], matches[2].split(",")] : [val, []];
          if (aucon2.toLowerCase() === "firefox-default" || aucon2.toLowerCase() === "none") {
            return ["firefox-default", proxies];
          }
          const containerExists = await exists(aucon2);
          if (!containerExists) {
            if (get("auconcreatecontainer") === "true") {
              await create(aucon2);
            } else {
              logger7.error(
                "Specified container doesn't exist. consider setting 'auconcreatecontainer' to true"
              );
            }
          }
          return [await getId(aucon2), proxies];
        }
      };
      // Parses autocontain directives and returns valid cookieStoreIds or errors.
      this.getAuconForDetails = async (details) => {
        const [aucon2] = await this.getAuconAndProxiesForUrl(details.url);
        return aucon2;
      };
    }
  };

  // src/.excmds_background.generated.ts
  var CSS2 = __toESM(require_css());

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
  var import_semver_compare = __toESM(require_semver_compare());
  var logger8 = new logging_default("native");
  var NATIVE_NAME = "tridactyl";
  async function sendNativeMsg(cmd, opts, quiet = false) {
    const send = Object.assign({ cmd }, opts);
    let resp;
    logger8.info(`Sending message: ${JSON.stringify(send)}`);
    try {
      resp = await browserBg.runtime.sendNativeMessage(NATIVE_NAME, send);
      logger8.info(`Received response:`, resp);
      return resp;
    } catch (e) {
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
      logger8.info(`Successfully retrieved fs config:
${res.content}`);
      return res.content;
    } else {
      logger8.info(`Error in retrieving config: ${res.error}`);
    }
  }
  var NATIVE_VERSION_CACHE;
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
      logger8.info(`Native version: ${res.version}`);
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
        logger8.error(
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
            logger8.error(
              "# Please update to native messenger " + version2 + ", for example by running `:updatenative`."
            );
          return false;
        }
        return true;
      } else if (interactive)
        logger8.error(
          "# Native messenger not found. Please run `:installnative` and follow the instructions."
        );
      return false;
    } catch (e) {
      if (interactive)
        logger8.error(
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
    return sendNativeMsg("read", { file }).catch((e) => {
      throw new Error(`Failed to read ${file}. ${e}`);
    });
  }
  async function write(file, content) {
    return sendNativeMsg("write", { file, content }).catch((e) => {
      throw new Error(`Failed to write '${content}' to '${file}'. ${e}`);
    });
  }
  async function writerc(file, force, content) {
    return sendNativeMsg("writerc", { file, force, content }).catch((e) => {
      throw new Error(`Failed to write '${content}' to '${file}'. ${e}`);
    });
  }
  async function mkdir(dir, exist_ok) {
    return sendNativeMsg("mkdir", { dir, exist_ok }).catch((e) => {
      throw new Error(`Failed to create directory '${dir}'. ${e}`);
    });
  }
  async function temp(content, prefix) {
    return sendNativeMsg("temp", { content, prefix }).catch((e) => {
      throw new Error(
        `Failed to write '${content}' to temp file '${prefix}'. ${e}`
      );
    });
  }
  async function move2(from, to, overwrite, cleanup) {
    const requiredNativeMessengerVersion = "0.3.0";
    if (await nativegate(requiredNativeMessengerVersion, false)) {
      return sendNativeMsg("move", { from, to, overwrite, cleanup }).catch((e) => {
        throw new Error(`Failed to move '${from}' to '${to}'. ${e}.`);
      });
    } else {
      return sendNativeMsg("move", { from, to }).catch((e) => {
        throw new Error(`Failed to move '${from}' to '${to}'. ${e}.`);
      });
    }
  }
  async function listDir(dir) {
    return sendNativeMsg("list_dir", { path: dir }).catch((e) => {
      throw new Error(`Failed to read directory '${dir}'. ${e}`);
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
    logger8.info(msg);
    return msg;
  }
  async function runAsync(command2) {
    const required_version = "0.3.1";
    if (!await nativegate(required_version, false)) {
      throw new Error(
        `runAsync needs native messenger version >= ${required_version}.`
      );
    }
    logger8.info(await sendNativeMsg("run_async", { command: command2 }));
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
  async function clipboard(action, str2) {
    let clipcmd = await get("externalclipboardcmd");
    if (clipcmd === "auto")
      clipcmd = await firstinpath(["xsel", "xclip"]);
    if (clipcmd === void 0) {
      throw new Error("Couldn't find an external clipboard executable");
    }
    if (action === "get") {
      const result = await run(clipcmd + " -o");
      if (result.code !== 0) {
        throw new Error(
          `External command failed with code ${result.code}: ${clipcmd}`
        );
      }
      return result.content;
    } else if (action === "set") {
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
      } catch (e) {
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
  var cachedProfile;
  async function getProfile() {
    if (cachedProfile === void 0)
      cachedProfile = await getProfileUncached();
    return cachedProfile;
  }
  if (getContext() === "background") {
    getProfile();
  }
  addChangeListener("profiledir", () => {
    cachedProfile = void 0;
    getProfile();
  });
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
  var cached_prefs = null;
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
      } catch (e) {
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
    } catch (e) {
    } finally {
      localStorage.unfixedamo2 = "true";
    }
  }

  // src/lib/text_to_speech.ts
  function listVoices() {
    const voices = window.speechSynthesis.getVoices();
    return voices.map((voice) => voice.name);
  }

  // src/lib/escape.ts
  var sh = (dangerous) => `'${dangerous.replace(/'/g, "'\\''")}'`;
  var windows_cmd = (dangerous) => dangerous.replace(/([()%!^"<>&|])/g, "^$1");

  // src/.excmds_background.generated.ts
  var import_semver_compare3 = __toESM(require_semver_compare());

  // src/lib/proxy.ts
  var logger9 = new Logger("proxy");
  var proxyTypes = ["http", "https", "socks", "socks4"];
  function isProxyType(proxyType) {
    return proxyTypes.includes(proxyType);
  }
  var authListener = (url, proxy) => {
    const listener3 = (details) => {
      const info = details.challenger;
      if (!details.isProxy || details.url !== url || info.host !== proxy.host || info.port !== proxy.port)
        return {};
      const result = {
        authCredentials: {
          username: proxy.username,
          password: proxy.password
        }
      };
      browser.webRequest.onAuthRequired.removeListener(listener3);
      return result;
    };
    browser.webRequest.onAuthRequired.addListener(
      listener3,
      { urls: ["<all_urls>"] },
      ["blocking"]
    );
  };
  var proxyFromUrl = (proxyUrl) => {
    const regex = new RegExp(/.+:\/\//);
    const match3 = regex.exec(proxyUrl);
    if (!match3) {
      throw new Error(`Not a valid URL`);
    }
    let protocol;
    let url;
    if (match3[0] !== "http://" && match3[0] !== "https://") {
      proxyUrl = "http://" + proxyUrl.substring(match3[0].length);
      url = new URL(proxyUrl);
      protocol = match3[0].substring(0, match3[0].length - 2);
    } else {
      url = new URL(proxyUrl);
      protocol = url.protocol;
    }
    protocol = protocol.replace(":", "");
    protocol = protocol === "socks5" ? "socks" : protocol === "ssl" ? "https" : protocol;
    if (!isProxyType(protocol)) {
      throw new Error(`Invalid proxy type: ${protocol}`);
    }
    return {
      type: protocol,
      host: url.hostname,
      port: parseInt(url.port, 10),
      username: url.username,
      password: url.password,
      proxyDNS: url.searchParams.get("proxyDNS") === "true",
      failoverTimeout: 5
    };
  };
  function exists2(names) {
    const currProxies = Object.keys(get("proxies"));
    const missingProxies = names.filter((name) => !currProxies.includes(name));
    if (missingProxies.length) {
      throw new Error(
        `${missingProxies.length === 1 ? "Proxy" : "Proxies"} ${missingProxies.join(
          ", "
        )} does not exist. See :help proxyadd for more info.`
      );
    }
  }
  var getProxies = () => {
    const userProxies = get("proxies");
    return Object.entries(userProxies).reduce((acc, [name, url]) => {
      acc[name] = proxyFromUrl(url);
      return acc;
    }, {});
  };
  var getProxiesForUrl = async (url) => {
    const aucon2 = new AutoContain();
    const [, containerProxies] = await aucon2.getAuconAndProxiesForUrl(url);
    const proxies = getProxies();
    const filteredProxies = Object.entries(proxies).filter(([name]) => containerProxies.includes(name)).map(([, proxy]) => proxy);
    const defaultProxy = get("proxy");
    if (defaultProxy in proxies && !containerProxies.includes(defaultProxy)) {
      filteredProxies.push(proxies[defaultProxy]);
    }
    return filteredProxies;
  };
  var onRequestListener = async (details) => {
    const noProxy = [];
    if (get("noproxy") === "true") {
      return noProxy;
    }
    try {
      const proxies = await getProxiesForUrl(details.url);
      if (!proxies.length)
        return noProxy;
      proxies.forEach((proxy) => {
        if (proxy.type === "http" || proxy.type === "https") {
          authListener(details.url, proxy);
        }
      });
      return proxies;
    } catch (e) {
      logger9.error(`Error in onRequest listener: ${e}`);
      return noProxy;
    }
  };

  // src/content/state_content.ts
  var logger10 = new logging_default("state");
  var onChangedListeners = [];
  var contentState = new Proxy(
    { mode: "normal" },
    {
      get(target, property) {
        return target[property];
      },
      set(target, property, newValue) {
        logger10.debug("Content state changed!", property, newValue);
        const oldValue = target[property];
        const mode2 = target.mode;
        target[property] = newValue;
        for (const listener3 of onChangedListeners) {
          listener3(property, mode2, oldValue, newValue);
        }
        return true;
      }
    }
  );

  // src/lib/commandline_cmds.ts
  var sleep2 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
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
        const func2 = command2.trim().split(/\s+/)[0];
        return !(func2.length === 0 || func2.startsWith("#"));
      },
      /**
       * Save non-secret commands to the cmdHistory and update the cmdline_history_position
       */
      store_ex_string: (command2) => {
        const [func2, ...args2] = command2.trim().split(/\s+/);
        if (!browser.extension.inIncognitoContext && !(func2 === "winopen" && args2[0] === "-private")) {
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

  // src/background/commandline_cmds.ts
  var functions = getCommandlineFns({});
  var CmdlineCmds = new Proxy(functions, {
    get(target, property) {
      if (target[property]) {
        return (...args2) => messageActiveTab("commandline_cmd", property, args2);
      }
      return target[property];
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

  // src/lib/editor_utils.ts
  function applyToElem(e, fn) {
    let result;
    if (e instanceof HTMLInputElement && e.type !== "text") {
      const t = e.type;
      e.type = "text";
      result = fn(e);
      e.type = t;
    } else {
      result = fn(e);
    }
    return result;
  }
  function getSimpleValues(e) {
    return applyToElem(e, (e2) => [e2.value, e2.selectionStart, e2.selectionEnd]);
  }
  function getContentEditableValues(e) {
    const selection = e.ownerDocument.getSelection();
    let n = selection.anchorNode;
    while (n && n !== e)
      n = n.parentNode;
    if (!n)
      return [null, null, null];
    const r = selection.getRangeAt(0).cloneRange();
    const selectionLength = r.toString().length;
    r.setEnd(e, e.childNodes.length);
    const lengthFromCaretToEndOfText = r.toString().length;
    r.setStart(e, 0);
    const s = r.toString();
    const caretPos = s.length - lengthFromCaretToEndOfText;
    return [s, caretPos, caretPos + selectionLength];
  }
  function setSimpleValues(e, text, start, end) {
    return applyToElem(e, (e2) => {
      if (text !== null)
        e2.value = text;
      if (start !== null) {
        if (end === null)
          end = start;
        e2.selectionStart = start;
        e2.selectionEnd = end;
      }
    });
  }
  function setContentEditableValues(e, text, start, end) {
    const selection = e.ownerDocument.getSelection();
    if (selection.rangeCount < 1) {
      const r = new Range();
      r.setStart(e, 0);
      r.setEnd(e, e.childNodes.length);
      selection.addRange(r);
    }
    if (text !== null) {
      const range4 = selection.getRangeAt(0);
      const anchorNode = selection.anchorNode;
      const focusNode = selection.focusNode;
      range4.setStart(anchorNode, 0);
      range4.setEndAfter(focusNode, focusNode.length);
      e.ownerDocument.execCommand("insertText", false, text);
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
    return (e, arg) => {
      let getValues = getSimpleValues;
      let setValues = setSimpleValues;
      if (e.isContentEditable) {
        getValues = getContentEditableValues;
        setValues = setContentEditableValues;
      }
      const [origText, origStart, origEnd] = getValues(e);
      if (origText === null || origStart === null)
        return false;
      setValues(e, ...fn(origText, origStart, origEnd, arg));
      return true;
    };
  }
  function needs_text(fn, arg) {
    return (text, selectionStart, selectionEnd, arg2) => {
      if (text.length === 0 || selectionStart === null || selectionStart === void 0)
        return [null, null, null];
      return fn(
        text,
        selectionStart,
        typeof selectionEnd === "number" ? selectionEnd : selectionStart,
        arg2
      );
    };
  }
  function getWordBoundaries(text, position, before) {
    if (position < 0 || position > text.length)
      throw new Error(
        `getWordBoundaries: position (${position}) should be within text ("${text}") boundaries (0, ${text.length})`
      );
    const pattern2 = new RegExp(get("wordpattern"), "g");
    let boundary1 = position < text.length ? position : text.length;
    const direction = before ? -1 : 1;
    if (before && boundary1 > 0)
      boundary1 -= 1;
    while (boundary1 >= 0 && boundary1 < text.length && !text[boundary1].match(pattern2)) {
      boundary1 += direction;
    }
    if (boundary1 < 0)
      boundary1 = 0;
    else if (boundary1 >= text.length)
      boundary1 = text.length - 1;
    while (boundary1 >= 0 && boundary1 < text.length && !text[boundary1].match(pattern2)) {
      boundary1 -= direction;
    }
    if (boundary1 < 0)
      boundary1 = 0;
    else if (boundary1 >= text.length)
      boundary1 = text.length - 1;
    if (!text[boundary1].match(pattern2)) {
      throw new Error(
        `getWordBoundaries: no characters matching wordpattern (${pattern2.source}) in text (${text})`
      );
    }
    while (boundary1 >= 0 && boundary1 < text.length && !!text[boundary1].match(pattern2)) {
      boundary1 += direction;
    }
    boundary1 -= direction;
    let boundary2 = boundary1;
    while (boundary2 >= 0 && boundary2 < text.length && !!text[boundary2].match(pattern2)) {
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
    const pattern2 = new RegExp(get("wordpattern"), "g");
    while (position < text.length && !!text[position].match(pattern2))
      position += 1;
    while (position < text.length && !text[position].match(pattern2))
      position += 1;
    if (position >= text.length)
      return -1;
    return position;
  }
  var rot13_helper = (s, n = 13) => {
    let sa = s.split("");
    sa = sa.map((x) => charesar(x, n));
    return sa.join("");
  };
  var charesar = (c, n = 13) => {
    const cn = c.charCodeAt(0);
    if (cn >= 65 && cn <= 90)
      return String.fromCharCode((cn - 65 + n) % 26 + 65);
    if (cn >= 97 && cn <= 122)
      return String.fromCharCode((cn - 97 + n) % 26 + 97);
    return c;
  };
  var jumble_helper = (text) => {
    const wordSplitRegex = new RegExp("([^a-zA-Z]|[A-Z][a-z]+)");
    return text.split(wordSplitRegex).map(jumbleWord).join("");
  };
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
  var shuffle = (text) => {
    const arr = text.split("");
    for (let i = arr.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * i + 1);
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr.join("");
  };

  // src/lib/editor.ts
  var delete_char = wrap_input(
    needs_text((text, selectionStart, selectionEnd) => {
      if (selectionStart !== selectionEnd) {
        text = text.substring(0, selectionStart) + text.substring(selectionEnd);
      } else {
        text = text.substring(0, selectionStart) + text.substring(selectionStart + 1);
      }
      return [text, selectionStart, null];
    })
  );
  var delete_backward_char = wrap_input(
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
  var tab_insert = wrap_input((text, selectionStart, selectionEnd) => {
    if (selectionStart !== selectionEnd) {
      text = text.substring(0, selectionStart) + "	" + text.substring(selectionEnd);
    } else {
      text = text.substring(0, selectionStart) + "	" + text.substring(selectionStart);
    }
    selectionStart += 1;
    return [text, selectionStart, null];
  });
  var transpose_chars = wrap_input(
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
  var transpose_words = wrap_input(
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
  var upcase_word = wrap_input(
    needs_text(
      (text, selectionStart, selectionEnd) => applyWord(
        text,
        selectionStart,
        selectionEnd,
        (word) => word.toUpperCase()
      )
    )
  );
  var downcase_word = wrap_input(
    needs_text(
      (text, selectionStart, selectionEnd) => applyWord(
        text,
        selectionStart,
        selectionEnd,
        (word) => word.toLowerCase()
      )
    )
  );
  var capitalize_word = wrap_input(
    needs_text(
      (text, selectionStart, selectionEnd) => applyWord(
        text,
        selectionStart,
        selectionEnd,
        (word) => word[0].toUpperCase() + word.substring(1)
      )
    )
  );
  var kill_line = wrap_input(
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
  var backward_kill_line = wrap_input(
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
  var kill_whole_line = wrap_input(
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
  var kill_word = wrap_input(
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
  var backward_kill_word = wrap_input(
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
  var beginning_of_line = wrap_input(
    needs_text((text, selectionStart) => {
      while (text[selectionStart - 1] !== void 0 && text[selectionStart - 1] !== "\n")
        selectionStart -= 1;
      return [null, selectionStart, null];
    })
  );
  var end_of_line = wrap_input(
    needs_text((text, selectionStart) => {
      while (text[selectionStart] !== void 0 && text[selectionStart] !== "\n")
        selectionStart += 1;
      return [null, selectionStart, null];
    })
  );
  var forward_char = wrap_input((text, selectionStart) => [
    null,
    selectionStart + 1,
    null
  ]);
  var backward_char = wrap_input(
    (text, selectionStart) => [null, selectionStart - 1, null]
  );
  var forward_word = wrap_input(
    needs_text((text, selectionStart) => {
      if (selectionStart === text.length)
        return [null, null, null];
      const boundaries = getWordBoundaries(text, selectionStart, false);
      return [null, boundaries[1], null];
    })
  );
  var backward_word = wrap_input(
    (text, selectionStart) => {
      if (selectionStart === 0)
        return [null, null, null];
      const boundaries = getWordBoundaries(text, selectionStart, true);
      return [null, boundaries[0], null];
    }
  );
  var insert_text = wrap_input(
    (text, selectionStart, selectionEnd, arg) => [
      text.slice(0, selectionStart) + arg + text.slice(selectionEnd),
      selectionStart + arg.length,
      null
    ]
  );
  var rot13 = wrap_input((text, selectionStart, selectionEnd) => [
    rot13_helper(text.slice(0, selectionStart) + text.slice(selectionEnd)),
    selectionStart,
    null
  ]);
  var jumble = wrap_input((text, selectionStart, selectionEnd) => [
    jumble_helper(text.slice(0, selectionStart) + text.slice(selectionEnd)),
    selectionStart,
    null
  ]);

  // src/background/editor.ts
  var EditorCmds = new Proxy(editor_exports, {
    get(target, property) {
      if (target[property]) {
        return (...args2) => messageActiveTab("editorfn_content", property, args2);
      }
      return target[property];
    }
  });

  // src/background/config_rc.ts
  async function source(filename = "auto") {
    let rctext = "";
    if (filename === "auto") {
      rctext = await getrc();
    } else {
      rctext = (await read(filename)).content;
    }
    if (rctext === void 0)
      return false;
    await runRc(rctext);
    return true;
  }
  async function fetchText(url) {
    const response = await fetch(url);
    const reader2 = response.body.getReader();
    let rctext = "";
    const decoder = new TextDecoder("utf-8");
    while (true) {
      const { value: chunk, done: isDone } = await reader2.read();
      if (isDone)
        return rctext;
      rctext += decoder.decode(chunk);
    }
  }
  var fetchConfig = fetchText;
  async function sourceFromUrl(url) {
    const rctext = await fetchConfig(url);
    if (!rctext)
      return false;
    await runRc(rctext);
    return true;
  }
  async function writeRc(conf, force = false, filename = "auto") {
    let path3;
    if (filename === "auto") {
      try {
        path3 = await getrcpath();
      } catch (e) {
        path3 = "~/.tridactylrc";
      }
    } else {
      path3 = filename;
    }
    return await writerc(path3, force, conf);
  }
  async function runRc(rc) {
    for (const cmd of rcFileToExCmds(rc)) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      await acceptExCmd(cmd);
    }
  }
  function rcFileToExCmds(rcText) {
    const excmds = rcText.split("\n");
    const ex = excmds.filter(
      (x) => /\S/.test(x) && !x.trim().startsWith('"') && !x.trim().startsWith("#")
    );
    const res = ex.join("\n");
    const joined = res.replace(/\\\n/g, "");
    return joined.split("\n");
  }

  // src/lib/css_util.ts
  var CSS = __toESM(require_css());
  function findCssRules(selectors, sheet) {
    const filtSheet = [...sheet.stylesheet.rules.entries()].filter((x) => {
      const rule = x[1];
      return rule.type === "rule" && "selectors" in rule && // Make sure that there are as many selectors in the current rule
      // as there are in the rule we're looking for
      rule.selectors.length === selectors.length && // Also make sure that each of the selectors of the current rule
      // are present in the rule we're looking for
      !rule.selectors.find((selector) => !selectors.includes(selector));
    });
    return filtSheet.map((x) => x[0]);
  }
  var potentialRules = {
    statuspanel: {
      name: `#statuspanel`,
      options: {
        none: `display: none !important;`,
        right: `right: 0; display: inline;`,
        left: ``,
        "top-left": `top: 2em; z-index: 2; display: inline;`,
        "top-right": `top: 2em; z-index: 2; right: 0; display: inline;`
      }
    },
    hoverlink: {
      name: `statuspanel[type="overLink"], #statuspanel[type="overLink"]`,
      options: {
        none: `display: none !important;`,
        right: `right: 0; display: inline;`,
        left: ``,
        "top-left": `top: 2em; z-index: 2; display: inline;`,
        "top-right": `top: 2em; z-index: 2; right: 0; display: inline;`
      }
    },
    tabstoolbar: {
      name: `#TabsToolbar`,
      options: {
        none: `visibility: collapse;`,
        show: ``
      }
    },
    tabstoolbarunfocused: {
      name: `:root:not([customizing]) #navigator-toolbox:not(:hover):not(:focus-within) #TabsToolbar`,
      options: {
        hide: `visibility: collapse;`,
        show: ``
      }
    },
    tabcounter: {
      name: `tabs`,
      options: {
        off: ``,
        on: `counter-reset: tab-counter;`
      }
    },
    tabcounters: {
      name: `.tab-label::before`,
      options: {
        hide: ``,
        show: ` counter-increment: tab-counter;
                    content: counter(tab-counter) " - ";`
      }
    },
    navtoolboxunfocused: {
      name: `:root:not([customizing]) #navigator-toolbox:not(:hover):not(:focus-within)`,
      options: {
        hide: `max-height: 1px; min-height: calc(0px); overflow: hidden;`,
        show: ``
      }
    },
    navbarunfocused: {
      name: `:root:not([customizing]) #navigator-toolbox:not(:hover):not(:focus-within) #nav-bar`,
      // tridactyl auto show zone doesn't seem to make a difference
      options: {
        hide: `max-height: 0;
                    min-height: 0!important;
                    --tridactyl-auto-show-zone: 10px;
                    margin-bottom: calc(-1 * var(--tridactyl-auto-show-zone));
                    opacity: 0;`,
        show: ``
      }
    },
    // Annoying black line at top in fullscreen
    navbarafter: {
      name: `#navigator-toolbox::after`,
      options: {
        hide: `display: none !important;`,
        show: ``
      }
    },
    // All children except add-on panels
    navbarnonaddonchildren: {
      name: `:root:not([customizing]) #nav-bar > :not(#customizationui-widget-panel)`,
      options: {
        hide: `display: none !important;`,
        show: ``
      }
    },
    // Set navbar height to 0
    navbarnoheight: {
      name: `:root:not([customizing]) #nav-bar`,
      options: {
        hide: ``,
        show: `max-height: 0; min-height: 0 !important;`
      }
    },
    // This inherits transparency if we aren't careful
    menubar: {
      name: `#navigator-toolbox:not(:hover):not(:focus-within) #toolbar-menubar > *`,
      options: {
        grey: `background-color: rgb(232, 232, 231);`,
        default: ``
      }
    },
    // Window dectorations
    titlebar: {
      name: `#titlebar`,
      options: {
        hide: `display: none !important;`,
        show: ``
      }
    },
    padwhenmaximised: {
      name: `#main-window[sizemode="maximized"] #content-deck`,
      options: {
        some: `padding-top: 8px;`,
        none: ``
      }
    }
  };
  var metaRules = {
    gui: {
      none: {
        hoverlink: "none",
        tabs: "none",
        navbar: "autohide",
        menubar: "grey",
        padwhenmaximised: "some"
      },
      full: {
        hoverlink: "left",
        tabs: "always",
        navbar: "always",
        menubar: "default",
        padwhenmaximised: "none"
      }
    },
    tabs: {
      none: {
        tabstoolbar: "none",
        navtoolboxunfocused: "hide"
      },
      always: {
        tabstoolbar: "show",
        tabstoolbarunfocused: "show",
        navtoolboxunfocused: "show"
      },
      autohide: {
        tabstoolbar: "show",
        tabstoolbarunfocused: "hide",
        navtoolboxunfocused: "hide"
      },
      count: {
        tabcounter: "on",
        tabcounters: "show"
      },
      nocount: {
        tabcounter: "off",
        tabcounters: "hide"
      }
    },
    navbar: {
      autohide: {
        navbarunfocused: "hide",
        navtoolboxunfocused: "hide",
        navbarafter: "hide",
        navbarnonaddonchildren: "show",
        navbarnoheight: "hide"
      },
      always: {
        navbarunfocused: "show",
        navtoolboxunfocused: "show",
        navbarafter: "show",
        navbarnonaddonchildren: "show",
        navbarnoheight: "hide"
      },
      none: {
        navbarunfocused: "show",
        navtoolboxunfocused: "show",
        navbarafter: "hide",
        navbarnonaddonchildren: "hide",
        navbarnoheight: "show"
      }
    }
  };
  function changeSingleCss(rulename, optionname, sheet) {
    const selector = potentialRules[rulename].name;
    const newRule = `${selector} {
        ${potentialRules[rulename].options[optionname]}
    }`;
    const miniSheet = CSS.parse(newRule).stylesheet.rules[0];
    const oldRuleIndexes = findCssRules(
      "selectors" in miniSheet ? miniSheet.selectors : [],
      sheet
    );
    if (oldRuleIndexes.length > 0) {
      sheet.stylesheet.rules[oldRuleIndexes[0]] = miniSheet;
    } else {
      sheet.stylesheet.rules = sheet.stylesheet.rules.concat(miniSheet);
    }
    return sheet;
  }
  function changeCss(rulename, optionname, sheet) {
    if (rulename in metaRules) {
      const metarule = metaRules[rulename][optionname];
      for (const rule of Object.keys(metarule)) {
        sheet = changeCss(rule, metarule[rule], sheet);
      }
    } else
      sheet = changeSingleCss(rulename, optionname, sheet);
    return sheet;
  }

  // src/lib/updates.ts
  var import_semver_compare2 = __toESM(require_semver_compare());
  var logger11 = new Logger("updates");
  var TRI_VERSION = getTriVersion();
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
      logger11.debug(
        "Checked for new version of Tridactyl, found ",
        highestKnownVersion
      );
      return highestKnownVersion;
    } catch (e) {
      logger11.error("Error while checking for updates: ", e);
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
    return TRI_VERSION.replace(/pre.*/, "");
  }
  function getInstalledVersion() {
    return TRI_VERSION;
  }

  // src/background/webrequests.ts
  var webrequests_exports = {};
  __export(webrequests_exports, {
    LISTENERS: () => LISTENERS,
    registerWebRequestAutocmd: () => registerWebRequestAutocmd,
    requestEventExpraInfoSpecMap: () => requestEventExpraInfoSpecMap,
    requestEvents: () => requestEvents,
    unregisterWebRequestAutocmd: () => unregisterWebRequestAutocmd
  });
  var requestEventExpraInfoSpecMap = {
    AuthRequired: ["blocking", "responseHeaders"],
    BeforeRedirect: ["responseHeaders"],
    BeforeRequest: ["blocking", "requestBody"],
    BeforeSendHeaders: ["blocking", "requestHeaders"],
    Completed: ["responseHeaders"],
    ErrorOccured: [],
    HeadersReceived: ["blocking", "responseHeaders"],
    ResponseStarted: ["responseHeaders"],
    SendHeaders: ["requestHeaders"]
  };
  var requestEvents = Object.keys(requestEventExpraInfoSpecMap);
  var LISTENERS = {};
  var registerWebRequestAutocmd = (requestEvent, pattern, func) => {
    const listener = eval(func);
    if (!LISTENERS[requestEvent])
      LISTENERS[requestEvent] = {};
    LISTENERS[requestEvent][pattern] = listener;
    return browser.webRequest["on" + requestEvent].addListener(
      listener,
      { urls: [pattern] },
      requestEventExpraInfoSpecMap[requestEvent]
    );
  };
  var unregisterWebRequestAutocmd = (requestEvent2, pattern2) => browser.webRequest["on" + requestEvent2].removeListener(
    LISTENERS[requestEvent2][pattern2]
  );

  // src/background/meta.ts
  var meta_exports = {};
  __export(meta_exports, {
    getTridactylTabs: () => getTridactylTabs
  });
  async function getTridactylTabs(tabs, negate3 = false) {
    tabs = tabs || await browser.tabs.query({ currentWindow: true });
    const tridactyl_tabs = [];
    await Promise.all(
      tabs.map(async (tab2) => {
        try {
          await messageTab(tab2.id, "alive");
          !negate3 && tridactyl_tabs.push(tab2);
          return true;
        } catch (e) {
          negate3 && tridactyl_tabs.push(tab2);
          return false;
        }
      })
    );
    return tridactyl_tabs;
  }

  // src/background/user_actions.ts
  function escapehatch() {
    if (get("escapehatchsidebarhack") == "true") {
      browser.sidebarAction.open().catch();
      browser.sidebarAction.close().catch();
    }
    ;
    (async () => {
      const tabs = await browser.tabs.query({ currentWindow: true });
      const tridactyl_tabs = await getTridactylTabs(tabs);
      const curr_pos = tabs.filter((t) => t.active)[0].index;
      if (tridactyl_tabs.length == 0)
        return tabopen();
      const best = sortBy_default(
        (tab2) => Math.abs(tab2.index - curr_pos),
        tridactyl_tabs
      )[0];
      if (best.active) {
        return unfocus();
      }
      return browser.tabs.update(best.id, { active: true });
    })();
  }
  function sidebartoggle() {
    return browser.sidebarAction.toggle();
  }
  function jsua(...args) {
    return eval(args.join(" "));
  }
  var useractions = {
    escapehatch,
    sidebartoggle,
    jsua
  };

  // src/background/commands.ts
  function makelistener(commands) {
    return (command_name) => {
      const command2 = commands.filter((c) => c.name == command_name)[0];
      const [excmd, ...exargs] = get(
        "browsermaps",
        mozMapToMinimalKey(command2.shortcut).toMapstr()
      ).split(" ");
      if (excmd in useractions)
        return useractions[excmd](...exargs);
      return acceptExCmd([excmd, ...exargs].join(" "));
    };
  }
  var listener2;
  async function updateListener() {
    listener2 !== void 0 && browser.commands.onCommand.removeListener(listener2);
    listener2 = makelistener(await browser.commands.getAll());
    browser.commands.onCommand.addListener(listener2);
    return listener2;
  }

  // src/lib/tab_groups.ts
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

  // src/.excmds_background.generated.ts
  var ALL_EXCMDS;
  var cmd_params = /* @__PURE__ */ new Map();
  var logger12 = new Logger("excmd");
  var TRI_VERSION2 = getTriVersion();
  ALL_EXCMDS = {
    "": excmds_background_generated_exports,
    ex: CmdlineCmds,
    text: EditorCmds
  };
  cmd_params.set("getNativeVersion", /* @__PURE__ */ new Map([]));
  async function getNativeVersion() {
    return getNativeMessengerVersion();
  }
  cmd_params.set("getRssLinks", /* @__PURE__ */ new Map([]));
  async function getRssLinks() {
    logger12.debug("shimming excmd getRssLinks from background to content");
    return messageActiveTab(
      "excmd_content",
      "getRssLinks",
      []
    );
  }
  cmd_params.set("rssexec", /* @__PURE__ */ new Map([["url", "string"], ["type", "string"], ["...title", "string[]"]]));
  async function rssexec(url, type3, ...title) {
    logger12.debug("shimming excmd rssexec from background to content");
    return messageActiveTab(
      "excmd_content",
      "rssexec",
      [url, type3, ...title]
    );
  }
  cmd_params.set("fillinput", /* @__PURE__ */ new Map([["selector", "string"], ["...content", "string[]"]]));
  function fillinput(selector, ...content) {
    logger12.debug("shimming excmd fillinput from background to content");
    return messageActiveTab(
      "excmd_content",
      "fillinput",
      [selector, ...content]
    );
  }
  cmd_params.set("getinput", /* @__PURE__ */ new Map([]));
  function getinput() {
    logger12.debug("shimming excmd getinput from background to content");
    return messageActiveTab(
      "excmd_content",
      "getinput",
      []
    );
  }
  cmd_params.set("getInputSelector", /* @__PURE__ */ new Map([]));
  function getInputSelector() {
    logger12.debug("shimming excmd getInputSelector from background to content");
    return messageActiveTab(
      "excmd_content",
      "getInputSelector",
      []
    );
  }
  cmd_params.set("addTridactylEditorClass", /* @__PURE__ */ new Map([["selector", "string"]]));
  function addTridactylEditorClass(selector) {
    logger12.debug("shimming excmd addTridactylEditorClass from background to content");
    return messageActiveTab(
      "excmd_content",
      "addTridactylEditorClass",
      [selector]
    );
  }
  cmd_params.set("removeTridactylEditorClass", /* @__PURE__ */ new Map([["selector", "string"]]));
  function removeTridactylEditorClass(selector) {
    logger12.debug("shimming excmd removeTridactylEditorClass from background to content");
    return messageActiveTab(
      "excmd_content",
      "removeTridactylEditorClass",
      [selector]
    );
  }
  cmd_params.set("editor", /* @__PURE__ */ new Map([]));
  async function editor2() {
    logger12.debug("shimming excmd editor from background to content");
    return messageActiveTab(
      "excmd_content",
      "editor",
      []
    );
  }
  cmd_params.set("guiset_quiet", /* @__PURE__ */ new Map([["rule", "string"], ["option", "string"]]));
  async function guiset_quiet(rule, option) {
    if (!rule || !option)
      throw new Error(":guiset requires two arguments. See `:help guiset` for more information.");
    if (rule == "navbar" && option == "none")
      throw new Error("`:guiset navbar none` is currently broken, see https://github.com/tridactyl/tridactyl/issues/1728");
    if (!await nativegate("0.1.1"))
      return;
    const profile_dir = await getProfileDir();
    await setpref("toolkit.legacyUserProfileCustomizations.stylesheets", "true");
    await mkdir(profile_dir + "/chrome", true);
    const cssstr = (await read(profile_dir + "/chrome/userChrome.css")).content;
    const cssstrOrig = (await read(profile_dir + "/chrome/userChrome.orig.css")).content;
    if (cssstrOrig === "")
      await write(profile_dir + "/chrome/userChrome.orig.css", cssstr);
    await write(profile_dir + "/chrome/userChrome.css.tri.bak", cssstr);
    const stylesheet = CSS2.parse(cssstr, { silent: true });
    if (stylesheet.stylesheet.parsingErrors.length) {
      const error = stylesheet.stylesheet.parsingErrors[0];
      throw new Error(`Your current userChrome.css is malformed: ${error.reason} at ${error.line}:${error.column}. Fix or delete it and try again.`);
    }
    const stylesheetDone = CSS2.stringify(changeCss(rule, option, stylesheet)).trim();
    return write(profile_dir + "/chrome/userChrome.css", stylesheetDone);
  }
  cmd_params.set("guiset", /* @__PURE__ */ new Map([["rule", "string"], ["option", "string"]]));
  async function guiset(rule, option) {
    if (!await guiset_quiet(rule, option)) {
      throw new Error(":guiset failed. Please ensure native messenger is installed.");
    }
    return fillcmdline_tmp(3e3, "userChrome.css written. Please restart Firefox to see the changes.");
  }
  cmd_params.set("cssparse", /* @__PURE__ */ new Map([["...css", "string[]"]]));
  function cssparse(...css) {
    console.log(CSS2.parse(css.join(" ")));
  }
  cmd_params.set("loadtheme", /* @__PURE__ */ new Map([["themename", "string"]]));
  async function loadtheme(themename) {
    if (!await nativegate("0.1.9"))
      return;
    const separator2 = (await browserBg.runtime.getPlatformInfo()).os === "win" ? "\\" : "/";
    const path3 = (await getrcpath()).split(separator2).slice(0, -1).join(separator2) + separator2 + "themes" + separator2 + themename + ".css";
    const file = await read(path3);
    if (file.code !== 0) {
      if (Object.keys(await get("customthemes")).includes(themename))
        return;
      throw new Error("Couldn't read theme " + path3);
    }
    return set4("customthemes." + themename, file.content);
  }
  cmd_params.set("unloadtheme", /* @__PURE__ */ new Map([["themename", "string"]]));
  async function unloadtheme(themename) {
    return unset2("customthemes." + themename);
  }
  cmd_params.set("colourscheme", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function colourscheme(...args2) {
    const themename = args2[0] == "--url" ? args2[2] : args2[0];
    if (staticThemes.includes(themename))
      return set4("theme", themename);
    if (themename.search("\\.") >= 0)
      throw new Error(`Theme name should not contain any dots! (given name: ${themename}).`);
    if (args2[0] == "--url") {
      if (themename === void 0)
        throw new Error(`You must provide a theme name!`);
      let url = args2[1];
      if (url === "%")
        url = window.location.href;
      if (!(url.startsWith("http://") || url.startsWith("https://")))
        url = "http://" + url;
      const css = await fetchText(url);
      set4("customthemes." + themename, css);
    } else {
      await loadtheme(themename);
    }
    return set4("theme", themename);
  }
  cmd_params.set("setpref", /* @__PURE__ */ new Map([["key", "string"], ["...value", "string[]"]]));
  function setpref(key, ...value) {
    return writePref(key, value.join(" "));
  }
  cmd_params.set("removepref", /* @__PURE__ */ new Map([["key", "string"]]));
  function removepref(key) {
    return removePref(key);
  }
  cmd_params.set("fixamo_quiet", /* @__PURE__ */ new Map([]));
  async function fixamo_quiet() {
    return logger12.warning("fixamo_quiet has been removed at the behest of the Firefox Security team. See :help fixamo for more info.");
  }
  cmd_params.set("fixamo", /* @__PURE__ */ new Map([]));
  async function fixamo() {
    fillcmdline_tmp(1e4, "fixamo has been removed at the request of the Firefox Security team. Alternatives exist in our exemplar RC file.");
  }
  cmd_params.set("nativeopen", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function nativeopen(...args2) {
    const index2 = args2.findIndex((arg) => !arg.startsWith("-"));
    let firefoxArgs = [];
    if (index2 >= 0) {
      firefoxArgs = args2.slice(0, index2);
    }
    const url = args2.slice(firefoxArgs.length).join(" ");
    if (await nativegate()) {
      const pos = await getAsync("tabopenpos");
      let index3 = (await activeTab()).index + 1;
      switch (pos) {
        case "last":
          index3 = -1;
          break;
        case "related":
          break;
      }
      const selecttab = (tab2) => {
        browser.tabs.onCreated.removeListener(selecttab);
        tabSetActive(tab2.id);
        browser.tabs.move(tab2.id, { index: index3 });
      };
      browser.tabs.onCreated.addListener(selecttab);
      try {
        if ((await browser.runtime.getPlatformInfo()).os === "mac") {
          if ((await browser.windows.getCurrent()).incognito) {
            throw new Error("nativeopen isn't supported in private mode on OSX. Consider installing Linux or Windows :).");
          }
          const osascriptArgs = ["-e 'on run argv'", `-e 'tell application "Firefox" to open location item 1 of argv'`, "-e 'end run'"];
          await run("osascript " + osascriptArgs.join(" ") + " " + url);
        } else {
          const os = (await browser.runtime.getPlatformInfo()).os;
          if (firefoxArgs.length === 0) {
            try {
              const profile = await getProfile();
              if (profile.Name !== void 0) {
                if (os === "win") {
                  firefoxArgs = [`-p "${profile.Name}"`];
                } else {
                  firefoxArgs = [`-p '${profile.Name}'`];
                }
              } else if (profile.absolutePath !== void 0) {
                if (os === "win") {
                  firefoxArgs = [`--profile "${profile.absolutePath}"`];
                } else {
                  firefoxArgs = [`--profile '${profile.absolutePath}'`];
                }
              }
            } catch (e) {
              logger12.debug(e);
              firefoxArgs = [];
            }
            firefoxArgs.push("--new-tab");
          }
          let escapedUrl;
          if (os === "win") {
            escapedUrl = windows_cmd(url);
          } else {
            escapedUrl = sh(url);
          }
          await run(`${get("browser")} ${firefoxArgs.join(" ")} ${escapedUrl}`);
        }
        setTimeout(() => browser.tabs.onCreated.removeListener(selecttab), 100);
      } catch (e) {
        browser.tabs.onCreated.removeListener(selecttab);
        throw e;
      }
    }
  }
  cmd_params.set("exclaim", /* @__PURE__ */ new Map([["...str", "string[]"]]));
  async function exclaim(...str2) {
    let done = Promise.resolve();
    if (await nativegate()) {
      done = fillcmdline((await run(str2.join(" "))).content);
    }
    return done;
  }
  cmd_params.set("exclaim_quiet", /* @__PURE__ */ new Map([["...str", "string[]"]]));
  async function exclaim_quiet(...str2) {
    let result = "";
    if (await nativegate()) {
      result = (await run(str2.join(" "))).content;
    }
    return result;
  }
  cmd_params.set("native", /* @__PURE__ */ new Map([]));
  async function native() {
    const version2 = await getNativeMessengerVersion(true);
    let done;
    if (version2 !== void 0) {
      done = fillcmdline("# Native messenger is correctly installed, version " + version2);
    } else {
      done = fillcmdline("# Native messenger not found. Please run `:nativeinstall` and follow the instructions.");
    }
    return done;
  }
  cmd_params.set("nativeinstall", /* @__PURE__ */ new Map([]));
  async function nativeinstall() {
    const tag = TRI_VERSION2.includes("pre") ? "master" : TRI_VERSION2;
    let done;
    const installstr = (await get("nativeinstallcmd")).replace("%TAG", tag);
    await yank(installstr);
    if ((await browser.runtime.getPlatformInfo()).os === "win") {
      done = fillcmdline("# Installation command copied to clipboard. Please paste and run it in cmd.exe (other shells won't work) to install the native messenger.");
    } else {
      done = fillcmdline("# Installation command copied to clipboard. Please paste and run it in your shell to install the native messenger.");
    }
    return done;
  }
  cmd_params.set("mktridactylrc", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function mktridactylrc(...args2) {
    let overwrite = false;
    const argParse = (args3) => {
      if (args3[0] === "-f") {
        overwrite = true;
        args3.shift();
        argParse(args3);
      }
      return args3;
    };
    const file = argParse(args2).join(" ") || void 0;
    const conf = parseConfig();
    if (file == "--clipboard") {
      setclip(conf);
      return fillcmdline_tmp(3e3, "# RC copied to clipboard");
    }
    if (await nativegate("0.1.11") && !await writeRc(conf, overwrite, file))
      logger12.error("Could not write RC file");
    return conf;
  }
  cmd_params.set("source", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function source2(...args2) {
    if (args2[0] === "--url") {
      let url = args2[1];
      if (!url || url === "%")
        url = window.location.href;
      if (!new RegExp("^(https?://)|data:").test(url))
        url = "http://" + url;
      await sourceFromUrl(url);
    } else {
      const file = args2.join(" ") || void 0;
      if (await nativegate("0.1.3") && !await source(file)) {
        logger12.error("Could not find RC file");
      }
    }
  }
  cmd_params.set("source_quiet", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function source_quiet(...args2) {
    try {
      await source2(...args2);
    } catch (e) {
      logger12.info("Automatic loading of RC file failed.");
    }
  }
  cmd_params.set("updatenative", /* @__PURE__ */ new Map([["interactive", "boolean"]]));
  async function updatenative(interactive = true) {
    if (!await nativegate("0", interactive)) {
      return;
    } else if ((await browser.runtime.getPlatformInfo()).os === "mac") {
      if (interactive)
        logger12.error("Updating the native messenger on OSX is broken. Please use `:nativeinstall` instead.");
      return;
    }
    const tag = TRI_VERSION2.includes("pre") ? "master" : TRI_VERSION2;
    const update_command = (await get("nativeinstallcmd")).replace("%TAG", tag);
    const native_version = await getNativeMessengerVersion();
    if ((0, import_semver_compare3.default)(native_version, "0.2.0") < 0) {
      await run(update_command);
    } else if ((0, import_semver_compare3.default)(native_version, "0.3.1") < 0) {
      if (interactive) {
        throw new Error("Updating is broken on this version of the native messenger. Please use `:nativeinstall` instead.");
      }
      return;
    } else {
      await runAsync(update_command);
    }
    if (interactive)
      native();
  }
  cmd_params.set("restart", /* @__PURE__ */ new Map([]));
  async function restart() {
    const profiledir = await getProfileDir();
    const browsercmd = await get("browser");
    if ((await browser.runtime.getPlatformInfo()).os === "win") {
      const reply = await winFirefoxRestart(profiledir, browsercmd);
      logger12.info("[+] win_firefox_restart 'reply' = " + JSON.stringify(reply));
      if (Number(reply.code) === 0) {
        fillcmdline("#" + reply.content);
        qall();
      } else {
        fillcmdline("#" + reply.error);
      }
    } else {
      const firefox = (await ff_cmdline()).join(" ");
      run(`while readlink ${profiledir}/lock ; do sleep 1 ; done ; sleep 1 ; ${firefox}`);
      qall();
    }
  }
  cmd_params.set("saveas", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function saveas(...args2) {
    logger12.debug("shimming excmd saveas from background to content");
    return messageActiveTab(
      "excmd_content",
      "saveas",
      [...args2]
    );
  }
  function tabSetActive(id2) {
    return browser.tabs.update(id2, { active: true });
  }
  cmd_params.set("jumpnext", /* @__PURE__ */ new Map([["n", "number"]]));
  function jumpnext(n = 1) {
    logger12.debug("shimming excmd jumpnext from background to content");
    return messageActiveTab(
      "excmd_content",
      "jumpnext",
      [n]
    );
  }
  cmd_params.set("jumpprev", /* @__PURE__ */ new Map([["n", "number"]]));
  function jumpprev(n = 1) {
    logger12.debug("shimming excmd jumpprev from background to content");
    return messageActiveTab(
      "excmd_content",
      "jumpprev",
      [n]
    );
  }
  cmd_params.set("markjump", /* @__PURE__ */ new Map([["key", "string"]]));
  async function markjump(key) {
    logger12.debug("shimming excmd markjump from background to content");
    return messageActiveTab(
      "excmd_content",
      "markjump",
      [key]
    );
  }
  cmd_params.set("markjumplocal", /* @__PURE__ */ new Map([["key", "string"]]));
  async function markjumplocal(key) {
    logger12.debug("shimming excmd markjumplocal from background to content");
    return messageActiveTab(
      "excmd_content",
      "markjumplocal",
      [key]
    );
  }
  cmd_params.set("markjumpglobal", /* @__PURE__ */ new Map([["key", "string"]]));
  async function markjumpglobal(key) {
    logger12.debug("shimming excmd markjumpglobal from background to content");
    return messageActiveTab(
      "excmd_content",
      "markjumpglobal",
      [key]
    );
  }
  cmd_params.set("markjumpbefore", /* @__PURE__ */ new Map([]));
  async function markjumpbefore() {
    logger12.debug("shimming excmd markjumpbefore from background to content");
    return messageActiveTab(
      "excmd_content",
      "markjumpbefore",
      []
    );
  }
  cmd_params.set("scrolltab", /* @__PURE__ */ new Map([["tabId", "number"], ["scrollX", "number"], ["scrollY", "number"], ["message", "string"]]));
  async function scrolltab(tabId, scrollX, scrollY, message2) {
    logger12.debug("shimming excmd scrolltab from background to content");
    return messageActiveTab(
      "excmd_content",
      "scrolltab",
      [tabId, scrollX, scrollY, message2]
    );
  }
  cmd_params.set("markadd", /* @__PURE__ */ new Map([["key", "string"]]));
  async function markadd(key) {
    if ((await browser.windows.getCurrent()).incognito) {
      throw new Error("Marks cannot be set in private mode");
    }
    if (!/[a-z]/i.exec(key) || key.length !== 1) {
      throw new Error("markadd accepts only a single letter");
    }
    if (key === key.toUpperCase()) {
      return markaddglobal(key);
    }
    return markaddlocal(key);
  }
  cmd_params.set("markaddlocal", /* @__PURE__ */ new Map([["key", "string"]]));
  async function markaddlocal(key) {
    logger12.debug("shimming excmd markaddlocal from background to content");
    return messageActiveTab(
      "excmd_content",
      "markaddlocal",
      [key]
    );
  }
  cmd_params.set("markaddglobal", /* @__PURE__ */ new Map([["key", "string"]]));
  async function markaddglobal(key) {
    logger12.debug("shimming excmd markaddglobal from background to content");
    return messageActiveTab(
      "excmd_content",
      "markaddglobal",
      [key]
    );
  }
  cmd_params.set("unfocus", /* @__PURE__ */ new Map([]));
  function unfocus() {
    logger12.debug("shimming excmd unfocus from background to content");
    return messageActiveTab(
      "excmd_content",
      "unfocus",
      []
    );
  }
  cmd_params.set("scrollpx", /* @__PURE__ */ new Map([["a", "number"], ["b", "number"]]));
  async function scrollpx(a, b) {
    logger12.debug("shimming excmd scrollpx from background to content");
    return messageActiveTab(
      "excmd_content",
      "scrollpx",
      [a, b]
    );
  }
  cmd_params.set("scrollto", /* @__PURE__ */ new Map([["a", "number | string"], ["b", 'number | "x" | "y" = "y"']]));
  function scrollto(a, b = "y") {
    logger12.debug("shimming excmd scrollto from background to content");
    return messageActiveTab(
      "excmd_content",
      "scrollto",
      [a, b]
    );
  }
  cmd_params.set("scrollline", /* @__PURE__ */ new Map([["n", "number"], ["mult", "number"]]));
  function scrollline(n = 1, mult = 1) {
    logger12.debug("shimming excmd scrollline from background to content");
    return messageActiveTab(
      "excmd_content",
      "scrollline",
      [n, mult]
    );
  }
  cmd_params.set("scrollpage", /* @__PURE__ */ new Map([["n", "number"], ["count", "number"]]));
  function scrollpage(n = 1, count2 = 1) {
    logger12.debug("shimming excmd scrollpage from background to content");
    return messageActiveTab(
      "excmd_content",
      "scrollpage",
      [n, count2]
    );
  }
  cmd_params.set("find", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  function find4(...args2) {
    logger12.debug("shimming excmd find from background to content");
    return messageActiveTab(
      "excmd_content",
      "find",
      [...args2]
    );
  }
  cmd_params.set("findnext", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  function findnext(...args2) {
    logger12.debug("shimming excmd findnext from background to content");
    return messageActiveTab(
      "excmd_content",
      "findnext",
      [...args2]
    );
  }
  cmd_params.set("clearsearchhighlight", /* @__PURE__ */ new Map([]));
  function clearsearchhighlight() {
    logger12.debug("shimming excmd clearsearchhighlight from background to content");
    return messageActiveTab(
      "excmd_content",
      "clearsearchhighlight",
      []
    );
  }
  cmd_params.set("findselect", /* @__PURE__ */ new Map([]));
  function findselect() {
    logger12.debug("shimming excmd findselect from background to content");
    return messageActiveTab(
      "excmd_content",
      "findselect",
      []
    );
  }
  cmd_params.set("forward", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  function forward(...args2) {
    logger12.debug("shimming excmd forward from background to content");
    return messageActiveTab(
      "excmd_content",
      "forward",
      [...args2]
    );
  }
  cmd_params.set("back", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  function back(...args2) {
    logger12.debug("shimming excmd back from background to content");
    return messageActiveTab(
      "excmd_content",
      "back",
      [...args2]
    );
  }
  cmd_params.set("reload", /* @__PURE__ */ new Map([["n", "number"], ["hard", "boolean"]]));
  async function reload(n = 1, hard = false) {
    const tabstoreload = await getnexttabs(await activeTabId(), n);
    const reloadProperties = { bypassCache: hard };
    return Promise.all(tabstoreload.map((n2) => browser.tabs.reload(n2, reloadProperties)));
  }
  cmd_params.set("reloadall", /* @__PURE__ */ new Map([["hard", "boolean"]]));
  async function reloadall(hard = false) {
    const tabs = await browser.tabs.query({ currentWindow: true });
    const reloadprops = { bypassCache: hard };
    return Promise.all(tabs.map((tab2) => browser.tabs.reload(tab2.id, reloadprops)));
  }
  cmd_params.set("reloadallbut", /* @__PURE__ */ new Map([["hard", "boolean"]]));
  async function reloadallbut(hard = false) {
    let tabs = await browser.tabs.query({ currentWindow: true });
    const currId = await activeTabId();
    tabs = tabs.filter((tab2) => tab2.id !== currId);
    const reloadprops = { bypassCache: hard };
    return Promise.all(tabs.map((tab2) => browser.tabs.reload(tab2.id, reloadprops)));
  }
  cmd_params.set("reloaddead", /* @__PURE__ */ new Map([["hard", "boolean"]]));
  async function reloaddead(hard = false) {
    const tabs = await browser.tabs.query({ currentWindow: true });
    const not_tridactyl_tabs = await getTridactylTabs(tabs, true);
    const reloadprops = { bypassCache: hard };
    return Promise.all(not_tridactyl_tabs.map((tab2) => browser.tabs.reload(tab2.id, reloadprops)));
  }
  cmd_params.set("reloadhard", /* @__PURE__ */ new Map([["n", "number"]]));
  async function reloadhard(n = 1) {
    return reload(n, true);
  }
  var ABOUT_WHITELIST = ["about:license", "about:logo", "about:rights", "about:blank"];
  cmd_params.set("open", /* @__PURE__ */ new Map([["...urlarr", "string[]"]]));
  async function open(...urlarr) {
    logger12.debug("shimming excmd open from background to content");
    return messageActiveTab(
      "excmd_content",
      "open",
      [...urlarr]
    );
  }
  cmd_params.set("bmarks", /* @__PURE__ */ new Map([["opt", "string"], ["...urlarr", "string[]"]]));
  async function bmarks(opt, ...urlarr) {
    if (opt === "-t")
      return tabopen(...urlarr);
    else
      return open(opt, ...urlarr);
  }
  cmd_params.set("open_quiet", /* @__PURE__ */ new Map([["...urlarr", "string[]"]]));
  async function open_quiet(...urlarr) {
    logger12.debug("shimming excmd open_quiet from background to content");
    return messageActiveTab(
      "excmd_content",
      "open_quiet",
      [...urlarr]
    );
  }
  cmd_params.set("url2args", /* @__PURE__ */ new Map([]));
  async function url2args() {
    logger12.debug("shimming excmd url2args from background to content");
    return messageActiveTab(
      "excmd_content",
      "url2args",
      []
    );
  }
  cmd_params.set("viewsource", /* @__PURE__ */ new Map([["url", "string"]]));
  function viewsource(url = "") {
    logger12.debug("shimming excmd viewsource from background to content");
    return messageActiveTab(
      "excmd_content",
      "viewsource",
      [url]
    );
  }
  cmd_params.set("home", /* @__PURE__ */ new Map([["all", '"false" | "true" = "false"']]));
  function home(all3 = "false") {
    const homepages = get("homepages");
    let done = Promise.resolve(void 0);
    if (homepages.length > 0) {
      if (all3 === "false") {
        done = open(homepages[homepages.length - 1]);
      } else {
        done = Promise.all(homepages.map((t) => tabopen(t)));
      }
    }
    return done.then(() => void 0);
  }
  cmd_params.set("help", /* @__PURE__ */ new Map([["...helpItems", "string[]"]]));
  async function help(...helpItems) {
    const flags = {
      // -a: look for an alias
      "-a": (settings2, helpItem) => {
        const aliases = settings2.exaliases;
        const resolved = [];
        while (aliases[helpItem]) {
          resolved.push(helpItem);
          helpItem = aliases[helpItem].split(" ");
          helpItem = helpItem[0] === "composite" ? helpItem[1] : helpItem[0];
          if (resolved.includes(helpItem))
            break;
        }
        if (resolved.length > 0) {
          return browser.runtime.getURL("static/docs/modules/_src_excmds_.html") + "#" + helpItem;
        }
        return "";
      },
      // -b: look for a binding
      "-b": (settings2, helpItem) => {
        for (const mode2 of modeMaps) {
          const bindings = settings2[mode2];
          if (helpItem in bindings) {
            helpItem = bindings[helpItem].split(" ");
            helpItem = ["composite", "fillcmdline"].includes(helpItem[0]) ? helpItem[1] : helpItem[0];
            return browser.runtime.getURL("static/docs/modules/_src_excmds_.html") + "#" + helpItem;
          }
        }
        return "";
      },
      // -e: look for an excmd
      "-e": (settings2, helpItem) => browser.runtime.getURL("static/docs/modules/_src_excmds_.html") + "#" + helpItem,
      // -s: look for a setting
      "-s": (settings2, helpItem) => {
        let subSettings = settings2;
        const settingNames = helpItem.split(".");
        let settingHelpAnchor = "";
        for (const settingName of settingNames) {
          if (settingName in subSettings) {
            settingHelpAnchor += settingName + ".";
            subSettings = subSettings[settingName];
          }
        }
        if (settingHelpAnchor !== "") {
          return browser.runtime.getURL("static/docs/classes/_src_lib_config_.default_config.html") + "#" + settingHelpAnchor.slice(0, -1);
        }
        return "";
      }
    };
    let flag = "";
    if (helpItems.length > 0 && Object.keys(flags).includes(helpItems[0])) {
      flag = helpItems[0];
      helpItems.splice(0, 1);
    }
    const subject = helpItems.join(" ");
    const settings = await getAsync();
    let url = "";
    if (subject === "") {
      url = browser.runtime.getURL("static/docs/modules/_src_excmds_.html");
    } else {
      if (flag !== "") {
        url = flags[flag](settings, subject);
      }
      if (url === "") {
        url = ["-b", "-s", "-a", "-e"].reduce((acc, curFlag) => {
          if (acc !== "")
            return acc;
          return flags[curFlag](settings, subject);
        }, "");
      }
    }
    let done;
    if ((await activeTab()).url.startsWith(browser.runtime.getURL("static/docs/"))) {
      done = open(url);
    } else {
      done = tabopen(url);
    }
    return done.then(() => void 0);
  }
  cmd_params.set("apropos", /* @__PURE__ */ new Map([["...helpItems", "string[]"]]));
  async function apropos(...helpItems) {
    return help(...helpItems);
  }
  cmd_params.set("tutor", /* @__PURE__ */ new Map([["newtab", "string"]]));
  async function tutor(newtab) {
    const tutor2 = browser.runtime.getURL("static/clippy/1-tutor.html");
    let done;
    if (newtab) {
      done = tabopen(tutor2);
    } else {
      done = open(tutor2);
    }
    return done.then(() => void 0);
  }
  cmd_params.set("credits", /* @__PURE__ */ new Map([]));
  async function credits() {
    const creditspage = browser.runtime.getURL("static/authors.html");
    return tabopen(creditspage);
  }
  cmd_params.set("no_mouse_mode", /* @__PURE__ */ new Map([]));
  function no_mouse_mode() {
    logger12.debug("shimming excmd no_mouse_mode from background to content");
    return messageActiveTab(
      "excmd_content",
      "no_mouse_mode",
      []
    );
  }
  cmd_params.set("neo_mouse_mode", /* @__PURE__ */ new Map([]));
  function neo_mouse_mode() {
    logger12.debug("shimming excmd neo_mouse_mode from background to content");
    return messageActiveTab(
      "excmd_content",
      "neo_mouse_mode",
      []
    );
  }
  cmd_params.set("snow_mouse_mode", /* @__PURE__ */ new Map([]));
  function snow_mouse_mode() {
    logger12.debug("shimming excmd snow_mouse_mode from background to content");
    return messageActiveTab(
      "excmd_content",
      "snow_mouse_mode",
      []
    );
  }
  cmd_params.set("pied_piper_mouse_mode", /* @__PURE__ */ new Map([]));
  function pied_piper_mouse_mode() {
    logger12.debug("shimming excmd pied_piper_mouse_mode from background to content");
    return messageActiveTab(
      "excmd_content",
      "pied_piper_mouse_mode",
      []
    );
  }
  cmd_params.set("drawingstart", /* @__PURE__ */ new Map([]));
  function drawingstart() {
    logger12.debug("shimming excmd drawingstart from background to content");
    return messageActiveTab(
      "excmd_content",
      "drawingstart",
      []
    );
  }
  cmd_params.set("drawingerasertoggle", /* @__PURE__ */ new Map([]));
  function drawingerasertoggle() {
    logger12.debug("shimming excmd drawingerasertoggle from background to content");
    return messageActiveTab(
      "excmd_content",
      "drawingerasertoggle",
      []
    );
  }
  cmd_params.set("mouse_mode", /* @__PURE__ */ new Map([]));
  function mouse_mode() {
    logger12.debug("shimming excmd mouse_mode from background to content");
    return messageActiveTab(
      "excmd_content",
      "mouse_mode",
      []
    );
  }
  function selectLast(selector) {
    const nodes = document.querySelectorAll(selector);
    return nodes.length ? nodes[nodes.length - 1] : null;
  }
  cmd_params.set("followpage", /* @__PURE__ */ new Map([["rel", '"next" | "prev" = "next"']]));
  function followpage(rel = "next") {
    logger12.debug("shimming excmd followpage from background to content");
    return messageActiveTab(
      "excmd_content",
      "followpage",
      [rel]
    );
  }
  cmd_params.set("urlincrement", /* @__PURE__ */ new Map([["count", "number"], ["multiplier", "number"]]));
  function urlincrement(count2 = 1, multiplier = 1) {
    logger12.debug("shimming excmd urlincrement from background to content");
    return messageActiveTab(
      "excmd_content",
      "urlincrement",
      [count2, multiplier]
    );
  }
  cmd_params.set("urlroot", /* @__PURE__ */ new Map([]));
  function urlroot() {
    logger12.debug("shimming excmd urlroot from background to content");
    return messageActiveTab(
      "excmd_content",
      "urlroot",
      []
    );
  }
  cmd_params.set("urlparent", /* @__PURE__ */ new Map([["count", "number"]]));
  function urlparent(count2 = 1) {
    logger12.debug("shimming excmd urlparent from background to content");
    return messageActiveTab(
      "excmd_content",
      "urlparent",
      [count2]
    );
  }
  cmd_params.set("urlmodify", /* @__PURE__ */ new Map([["mode", '"-t" | "-r" | "-s" | "-q" | "-Q" | "-g" | "-tu" | "-ru" | "-su" | "-qu" | "-Qu" | "-gu"'], ["...args", "string[]"]]));
  function urlmodify(mode2, ...args2) {
    logger12.debug("shimming excmd urlmodify from background to content");
    return messageActiveTab(
      "excmd_content",
      "urlmodify",
      [mode2, ...args2]
    );
  }
  cmd_params.set("urlmodify_js", /* @__PURE__ */ new Map([["mode", '"-t" | "-r" | "-s" | "-q" | "-Q" | "-g" | "-tu" | "-ru" | "-su" | "-qu" | "-Qu" | "-gu"'], ["...args", "string[]"]]));
  function urlmodify_js(mode2, ...args2) {
    logger12.debug("shimming excmd urlmodify_js from background to content");
    return messageActiveTab(
      "excmd_content",
      "urlmodify_js",
      [mode2, ...args2]
    );
  }
  cmd_params.set("geturlsforlinks", /* @__PURE__ */ new Map([["reltype", "string"], ["rel", "string"]]));
  async function geturlsforlinks(reltype = "rel", rel) {
    logger12.debug("shimming excmd geturlsforlinks from background to content");
    return messageActiveTab(
      "excmd_content",
      "geturlsforlinks",
      [reltype, rel]
    );
  }
  cmd_params.set("zoom", /* @__PURE__ */ new Map([["level", "number"], ["rel", "string"], ["tabId", "string"]]));
  async function zoom(level = 0, rel = "false", tabId = "auto") {
    level = Math.abs(level) > 3 ? level / 100 : level;
    if (rel === "false" && (level > 3 || level < 0.3)) {
      throw new Error(`[zoom] level out of range: ${level}`);
    }
    if (rel === "true") {
      level += await browser.tabs.getZoom();
      if (level > 3)
        level = 3;
      if (level < 0.3)
        level = 0.3;
    }
    if (tabId === "auto") {
      return browser.tabs.setZoom(level);
    } else {
      return browser.tabs.setZoom(parseInt(tabId, 10), level);
    }
  }
  cmd_params.set("readerold", /* @__PURE__ */ new Map([]));
  async function readerold() {
    if (await firefoxVersionAtLeast(58)) {
      const aTab = await activeTab();
      if (aTab.isArticle) {
        return browser.tabs.toggleReaderMode();
      }
    }
  }
  cmd_params.set("loadaucmds", /* @__PURE__ */ new Map([["cmdType", '"DocStart" | "DocLoad" | "DocEnd" | "TabEnter" | "TabLeft" | "FullscreenEnter" | "FullscreenLeft" | "FullscreenChange" | "UriChange" | "HistoryState"']]));
  async function loadaucmds(cmdType) {
    logger12.debug("shimming excmd loadaucmds from background to content");
    return messageActiveTab(
      "excmd_content",
      "loadaucmds",
      [cmdType]
    );
  }
  var INPUTTAGS_selectors = `
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
  var INPUTPASSWORD_selectors = `
input[type='password']
`;
  cmd_params.set("focusinput", /* @__PURE__ */ new Map([["nth", "number | string"]]));
  function focusinput(nth3) {
    logger12.debug("shimming excmd focusinput from background to content");
    return messageActiveTab(
      "excmd_content",
      "focusinput",
      [nth3]
    );
  }
  cmd_params.set("changelistjump", /* @__PURE__ */ new Map([]));
  async function changelistjump() {
    const tail3 = state.prevInputs[state.prevInputs.length - 1];
    const jumppos = tail3.jumppos ? tail3.jumppos : state.prevInputs.length - 1;
    const input = state.prevInputs[jumppos];
    await browser.tabs.update(input.tab, { active: true });
    const id2 = input.inputId;
    if (id2)
      focusbyid(input.inputId);
    else
      focusinput("-l");
  }
  cmd_params.set("focusbyid", /* @__PURE__ */ new Map([["id", "string"]]));
  function focusbyid(id2) {
    logger12.debug("shimming excmd focusbyid from background to content");
    return messageActiveTab(
      "excmd_content",
      "focusbyid",
      [id2]
    );
  }
  async function tabIndexSetActive(index2) {
    return tabSetActive(await idFromIndex(index2));
  }
  cmd_params.set("tabnext", /* @__PURE__ */ new Map([["increment", "number"]]));
  async function tabnext(increment = 1) {
    return tabprev(-increment);
  }
  cmd_params.set("tabnext_gt", /* @__PURE__ */ new Map([["index", "number"]]));
  async function tabnext_gt(index2) {
    let done;
    if (index2 === void 0) {
      done = tabnext();
    } else {
      done = tabIndexSetActive(index2);
    }
    return done.then(() => void 0);
  }
  cmd_params.set("tabprev", /* @__PURE__ */ new Map([["increment", "number"]]));
  async function tabprev(increment = 1) {
    return browser.tabs.query({ currentWindow: true, hidden: false }).then((tabs) => {
      tabs.sort((t1, t2) => t1.index - t2.index);
      const prevTab = (tabs.findIndex((t) => t.active) - increment + tabs.length) % tabs.length;
      return browser.tabs.update(tabs[prevTab].id, { active: true });
    });
  }
  cmd_params.set("tabpush", /* @__PURE__ */ new Map([["windowId", "number"]]));
  async function tabpush(windowId) {
    const currentWindow = await browser.windows.getCurrent();
    const windows2 = (await browser.windows.getAll()).filter((w) => w.incognito === currentWindow.incognito);
    windows2.sort((w1, w2) => w1.id - w2.id);
    const nextWindow = windows2[(windows2.findIndex((window2) => window2.id === currentWindow.id) + 1) % windows2.length];
    const tabId = await activeTabId();
    return browser.tabs.move(tabId, { index: -1, windowId: windowId != null ? windowId : nextWindow.id });
  }
  cmd_params.set("tabaudio", /* @__PURE__ */ new Map([]));
  async function tabaudio() {
    const tabs = await browser.tabs.query({ audible: true });
    if (tabs.length > 0) {
      await browser.windows.update(tabs[0].windowId, { focused: true });
      return browser.tabs.update(tabs[0].id, { active: true });
    }
  }
  cmd_params.set("winmerge", /* @__PURE__ */ new Map([["...windowIds", "string[]"]]));
  async function winmerge(...windowIds) {
    const target_wins = windowIds.length > 0 ? await Promise.all(windowIds.map((windowId) => browser.windows.get(parseInt(windowId, 10), { populate: true }))) : await browser.windows.getAll({ populate: true });
    const active_win = await browser.windows.getCurrent();
    return target_wins.forEach(
      (target_win) => browser.tabs.move(
        target_win.tabs.map((t) => t.id),
        { index: -1, windowId: active_win.id }
      )
    );
  }
  async function parseWinTabIndex(id2) {
    const windows2 = (await browser.windows.getAll()).map((w) => w.id).sort((a, b) => a - b);
    if (id2 === null || id2 === void 0 || !/\d+\.\d+/.exec(id2)) {
      const tab2 = await activeTab();
      const prevId = id2;
      id2 = windows2.indexOf(tab2.windowId) + "." + (tab2.index + 1);
      logger12.info(`taball: Bad tab id: ${prevId}, defaulting to ${id2}`);
    }
    const [winindex, tabindex_string] = id2.split(".");
    return [windows2[parseInt(winindex, 10) - 1], parseInt(tabindex_string, 10) - 1];
  }
  cmd_params.set("tabgrab", /* @__PURE__ */ new Map([["id", "string"]]));
  async function tabgrab(id2) {
    const [winid, tabindex_number] = await parseWinTabIndex(id2);
    const tabid = (await browser.tabs.query({ windowId: winid, index: tabindex_number }))[0].id;
    const windowId = (await browser.windows.getLastFocused({ windowTypes: ["normal"] })).id;
    return browser.tabs.move(tabid, { index: -1, windowId });
  }
  cmd_params.set("tabopen", /* @__PURE__ */ new Map([["...addressarr", "string[]"]]));
  async function tabopen(...addressarr) {
    return tabopen_helper({ addressarr });
  }
  cmd_params.set("tabopenwait", /* @__PURE__ */ new Map([["...addressarr", "string[]"]]));
  async function tabopenwait(...addressarr) {
    return tabopen_helper({ addressarr, waitForDom: true });
  }
  async function tabopen_helper({ addressarr = [], waitForDom = false }) {
    let active;
    let container;
    let bypassFocusHack = false;
    let discarded = false;
    const win = await browser.windows.getCurrent();
    async function argParse(args3) {
      if (args3[0] === "-b") {
        active = false;
        args3.shift();
        argParse(args3);
      } else if (args3[0] === "-w") {
        waitForDom = true;
        args3.shift();
        argParse(args3);
      } else if (args3[0] === "--focus-address-bar") {
        bypassFocusHack = true;
        args3.shift();
        argParse(args3);
      } else if (args3[0] === "--discard") {
        discarded = true;
        active = false;
        args3.shift();
        argParse(args3);
      } else if (args3[0] === "-c") {
        if (args3.length < 2)
          throw new Error(`You must provide a container name!`);
        if (!win.incognito) {
          if (args3[1] === "firefox-default" || args3[1].toLowerCase() === "none") {
            container = "firefox-default";
          } else {
            container = await fuzzyMatch(args3[1]);
          }
        } else
          logger12.error("[tabopen] can't open a container in a private browsing window.");
        args3.shift();
        args3.shift();
        argParse(args3);
      }
      return args3;
    }
    const query2 = await argParse(addressarr);
    const address2 = query2.join(" ");
    if (!ABOUT_WHITELIST.includes(address2) && /^(about|file):.*/.exec(address2)) {
      return nativeopen(address2);
    }
    const aucon2 = new AutoContain();
    if (!container && aucon2.autocontainConfigured()) {
      const [autoContainer] = await aucon2.getAuconAndProxiesForUrl(address2);
      if (autoContainer && autoContainer !== "firefox-default") {
        container = autoContainer;
        logger12.debug("tabopen setting container automatically using autocontain directive");
      }
    }
    const containerId = await activeTabContainerId();
    const args2 = { active };
    if (container) {
      if (container !== "firefox-default") {
        args2.cookieStoreId = container;
      }
    } else if (containerId && get("tabopencontaineraware") === "true") {
      args2.cookieStoreId = containerId;
    }
    args2.bypassFocusHack = bypassFocusHack;
    args2.discarded = discarded;
    const maybeURL = await queryAndURLwrangler(query2);
    if (typeof maybeURL === "string") {
      return openInNewTab(maybeURL, args2, waitForDom);
    }
    if (typeof maybeURL === "object") {
      if (await firefoxVersionAtLeast(80)) {
        if (args2.active === false || args2.cookieStoreId !== void 0 || waitForDom === true) {
          throw new Error("Firefox search engines do not support containers or background tabs in FF >80. `:set searchengine google` or see issue https://github.com/tridactyl/tridactyl/issues/2695");
        }
        return browser.search.search(maybeURL);
      }
      return openInNewTab(null, args2, waitForDom).then((tab2) => browser.search.search({ tabId: tab2.id, ...maybeURL }));
    }
    return openInNewTab(null, args2, waitForDom);
  }
  cmd_params.set("tabqueue", /* @__PURE__ */ new Map([["...addresses", "string[]"]]));
  function tabqueue(...addresses) {
    addresses = addresses.flat(Infinity);
    if (addresses.length === 0) {
      return Promise.resolve();
    }
    return tabopen("-b", addresses[0]).then(
      (tab2) => new Promise((resolve) => {
        function openNextTab(activeInfo) {
          if (activeInfo.tabId === tab2.id) {
            resolve(tabqueue(...addresses.slice(1)));
            removeTabqueueListeners(tab2.id);
          }
        }
        function removeTabqueueListeners(tabId) {
          if (tabId === tab2.id) {
            browser.tabs.onActivated.removeListener(openNextTab);
            browser.tabs.onRemoved.removeListener(removeTabqueueListeners);
            resolve(tab2);
          }
        }
        browser.tabs.onActivated.addListener(openNextTab);
        browser.tabs.onRemoved.addListener(removeTabqueueListeners);
      })
    );
  }
  async function idFromIndex(index2) {
    return (await tabFromIndex(index2)).id;
  }
  async function tabFromIndex(index2) {
    if (index2 === "#") {
      return prevActiveTab();
    } else if (index2 !== void 0 && index2 !== "%") {
      const tabs = await getSortedTabs();
      index2 = Number(index2);
      index2 = (index2 - 1).mod(tabs.length) + 1;
      return tabs[index2 - 1];
    } else {
      return activeTab();
    }
  }
  cmd_params.set("tabonly", /* @__PURE__ */ new Map([]));
  async function tabonly() {
    const tabs = await browser.tabs.query({
      pinned: false,
      active: false,
      currentWindow: true
    });
    const tabsIds = tabs.map((tab2) => tab2.id);
    return browser.tabs.remove(tabsIds);
  }
  cmd_params.set("tabduplicate", /* @__PURE__ */ new Map([["index", "number"]]));
  async function tabduplicate(index2) {
    return browser.tabs.duplicate(await idFromIndex(index2));
  }
  cmd_params.set("tabdetach", /* @__PURE__ */ new Map([["index", "number"]]));
  async function tabdetach(index2) {
    return browser.windows.create({ tabId: await idFromIndex(index2) });
  }
  cmd_params.set("fullscreen", /* @__PURE__ */ new Map([]));
  async function fullscreen() {
    const currwin = await browser.windows.getCurrent();
    const wid = currwin.id;
    const state2 = currwin.state === "fullscreen" ? "normal" : "fullscreen";
    return browser.windows.update(wid, { state: state2 });
  }
  cmd_params.set("tabclose", /* @__PURE__ */ new Map([["...indexes", "string[]"]]));
  async function tabclose(...indexes) {
    async function maybeWinTabToTab(id2) {
      if (id2.includes(".")) {
        const [winid, tabindex_number] = await parseWinTabIndex(id2);
        return (await browser.tabs.query({ windowId: winid, index: tabindex_number }))[0];
      }
      return tabFromIndex(id2);
    }
    const tabs = await Promise.all(indexes.length > 0 ? indexes.map(maybeWinTabToTab) : [activeTab()]);
    const tabclosepinned = await getAsync("tabclosepinned") === "true";
    if (!tabclosepinned) {
      for (const tab2 of tabs) {
        if (tab2.pinned) {
          throw new Error(`Tab ${tab2.windowId}:${tab2.index + 1} is pinned and tabclosepinned is false, aborting tabclose`);
        }
      }
    }
    return browser.tabs.remove(tabs.map((t) => t.id));
  }
  cmd_params.set("tabcloseallto", /* @__PURE__ */ new Map([["side", "string"]]));
  async function tabcloseallto(side) {
    if (!["left", "right"].includes(side)) {
      throw new Error("side argument must be left or right");
    }
    const tabs = await browser.tabs.query({
      pinned: false,
      currentWindow: true
    });
    const atab = await activeTab();
    const comp = side == "right" ? (tab2) => tab2.index > atab.index : (tab2) => tab2.index < atab.index;
    const ids = tabs.filter(comp).map((tab2) => tab2.id);
    return browser.tabs.remove(ids);
  }
  cmd_params.set("undo", /* @__PURE__ */ new Map([["item", "string"]]));
  async function undo(item = "recent") {
    const current_win_id = (await browser.windows.getCurrent()).id;
    const sessions = await browser.sessions.getRecentlyClosed();
    const predicate = item === "recent" ? (s) => s.window || s.tab && s.tab.windowId === current_win_id : item === "tab" ? (s) => s.tab : item === "tab_strict" ? (s) => s.tab && s.tab.windowId === current_win_id : item === "window" ? (s) => s.window : !isNaN(parseInt(item, 10)) ? (s) => (s.tab || s.window).sessionId === item : () => {
      throw new Error(`[undo] Invalid argument: ${item}. Must be one of "recent, "tab", "tab_strict", "window" or a sessionId (by selecting a session using the undo completion).`);
    };
    const session = sessions.find(predicate);
    if (session) {
      const restore = await browser.sessions.restore((session.tab || session.window).sessionId);
      return (restore.tab || restore.window).id;
    }
    return -1;
  }
  cmd_params.set("tabmove", /* @__PURE__ */ new Map([["index", "string"]]));
  async function tabmove(index2 = "$") {
    const aTab = await activeTab();
    const windowTabs2 = await browser.tabs.query({ currentWindow: true });
    const windowPinnedTabs = await browser.tabs.query({ currentWindow: true, pinned: true });
    const maxPinnedIndex = windowPinnedTabs.length - 1;
    let minindex;
    let maxindex;
    if (aTab.pinned) {
      minindex = 0;
      maxindex = maxPinnedIndex;
    } else {
      minindex = maxPinnedIndex + 1;
      maxindex = windowTabs2.length - 1;
    }
    let newindex;
    let relative = false;
    if (index2.startsWith("+") || index2.startsWith("-")) {
      relative = true;
      newindex = Number(index2) + aTab.index;
    } else if (["end", "$", "0"].includes(index2)) {
      newindex = maxindex;
    } else if (["start", "^"].includes(index2)) {
      newindex = 0;
    } else {
      newindex = Number(index2) + minindex - 1;
    }
    if (newindex > maxindex) {
      if (relative) {
        while (newindex > maxindex) {
          newindex -= maxindex - minindex + 1;
        }
      } else
        newindex = maxindex;
    }
    if (newindex < minindex) {
      if (relative) {
        while (newindex < minindex) {
          newindex += maxindex - minindex + 1;
        }
      } else
        newindex = minindex;
    }
    return browser.tabs.move(aTab.id, { index: newindex });
  }
  cmd_params.set("tabsort", /* @__PURE__ */ new Map([["...callbackchunks", "string[]"]]));
  async function tabsort(...callbackchunks) {
    const argument = callbackchunks.join(" ");
    const comparator = argument == "--containers" ? (l, r) => l.cookieStoreId < r.cookieStoreId : argument == "--title" ? (l, r) => l.title < r.title : argument == "--url" || argument == "" ? (l, r) => l.url < r.url : eval(argument);
    const windowTabs = await browser.tabs.query({ currentWindow: true });
    windowTabs.sort(comparator);
    Object.entries(windowTabs).forEach(([index2, tab2]) => {
      browser.tabs.move(tab2.id, { index: parseInt(index2, 10) });
    });
  }
  cmd_params.set("pin", /* @__PURE__ */ new Map([]));
  async function pin() {
    const aTab = await activeTab();
    return browser.tabs.update(aTab.id, { pinned: !aTab.pinned });
  }
  cmd_params.set("mute", /* @__PURE__ */ new Map([["...muteArgs", "string[]"]]));
  async function mute(...muteArgs) {
    let mute2 = true;
    let toggle = false;
    let all3 = false;
    const argParse = (args2) => {
      if (args2 === null) {
        return;
      }
      if (args2[0] === "all") {
        all3 = true;
        args2.shift();
        argParse(args2);
      }
      if (args2[0] === "unmute") {
        mute2 = false;
        args2.shift();
        argParse(args2);
      }
      if (args2[0] === "toggle") {
        toggle = true;
        args2.shift();
        argParse(args2);
      }
    };
    argParse(muteArgs);
    const updateObj = { muted: false };
    if (mute2) {
      updateObj.muted = true;
    }
    let done;
    if (all3) {
      const tabs = await browser.tabs.query({ currentWindow: true });
      const promises = [];
      for (const tab2 of tabs) {
        if (toggle) {
          updateObj.muted = !tab2.mutedInfo.muted;
        }
        promises.push(browser.tabs.update(tab2.id, updateObj));
      }
      done = Promise.all(promises);
    } else {
      const tab2 = await activeTab();
      if (toggle) {
        updateObj.muted = !tab2.mutedInfo.muted;
      }
      done = browser.tabs.update(tab2.id, updateObj);
    }
    return done.then(() => void 0);
  }
  cmd_params.set("winopen", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function winopen(...args2) {
    const createData = {};
    let firefoxArgs = "--new-window";
    let done = false;
    let useContainer = false;
    while (!done) {
      switch (args2[0]) {
        case "-private":
          createData.incognito = true;
          args2.shift();
          firefoxArgs = "--private-window";
          break;
        case "-popup":
          createData.type = "popup";
          args2.shift();
          break;
        case "-c":
          if (args2.length < 2)
            throw new Error(`You must provide a container name!`);
          args2.shift();
          useContainer = true;
          break;
        default:
          done = true;
          break;
      }
    }
    const address2 = args2.join(" ");
    if (useContainer) {
      if (firefoxArgs === "--private-window") {
        throw new Error("Can't open a container in a private browsing window.");
      } else {
        args2.unshift("-c");
        return tabopen(...args2).then(() => tabdetach());
      }
    }
    if (!ABOUT_WHITELIST.includes(address2) && /^(about|file):.*/.exec(address2)) {
      return nativeopen(firefoxArgs, address2);
    }
    createData.url = "https://fix-a-firefox-bug.invalid";
    return browser.windows.create(createData).then((win) => openInTab(win.tabs[0], { loadReplace: true }, address2.split(" ")));
  }
  cmd_params.set("winclose", /* @__PURE__ */ new Map([["...ids", "string[]"]]));
  async function winclose(...ids) {
    if (ids.length === 0) {
      ids.push(`${(await browser.windows.getCurrent()).id}`);
    }
    return Promise.all(ids.map((id2) => browser.windows.remove(parseInt(id2, 10))));
  }
  cmd_params.set("wintitle", /* @__PURE__ */ new Map([["...title", "string[]"]]));
  async function wintitle(...title) {
    const id2 = (await browser.windows.getCurrent()).id;
    return browser.windows.update(id2, { titlePreface: title.join(" ") + " " });
  }
  cmd_params.set("qall", /* @__PURE__ */ new Map([]));
  async function qall() {
    const windows2 = await browser.windows.getAll();
    return Promise.all(windows2.map((window2) => browser.windows.remove(window2.id)));
  }
  cmd_params.set("sidebaropen", /* @__PURE__ */ new Map([["...urllike", "string[]"]]));
  async function sidebaropen(...urllike) {
    const url = await queryAndURLwrangler(urllike);
    if (typeof url === "string")
      return browser.sidebarAction.setPanel({ panel: url });
    throw new Error("Unsupported URL for sidebar. If it was a search term try `:set searchengine google` first");
  }
  cmd_params.set("jsua", /* @__PURE__ */ new Map([]));
  async function jsua2() {
    throw new Error(":jsua can only be called through `bind --mode=browser` binds, see `:help jsua`");
  }
  cmd_params.set("sidebartoggle", /* @__PURE__ */ new Map([]));
  async function sidebartoggle2() {
    throw new Error(":sidebartoggle can only be called through `bind --mode=browser` binds, see `:help sidebartoggle`");
  }
  cmd_params.set("containerclose", /* @__PURE__ */ new Map([["name", "string"]]));
  async function containerclose(name) {
    const containerId = await getId(name);
    return browser.tabs.query({ cookieStoreId: containerId }).then((tabs) => browser.tabs.remove(tabs.map((tab2) => tab2.id)));
  }
  cmd_params.set("containercreate", /* @__PURE__ */ new Map([["name", "string"], ["color", "string"], ["icon", "string"]]));
  async function containercreate(name, color, icon) {
    await create(name, color, icon);
  }
  cmd_params.set("containerdelete", /* @__PURE__ */ new Map([["name", "string"]]));
  async function containerdelete(name) {
    if (name == void 0)
      return;
    await containerclose(name);
    await remove3(name);
  }
  cmd_params.set("containerupdate", /* @__PURE__ */ new Map([["name", "string"], ["uname", "string"], ["ucolor", "string"], ["uicon", "string"]]));
  async function containerupdate(name, uname, ucolor, uicon) {
    logger12.debug("containerupdate parameters: " + name + ", " + uname + ", " + ucolor + ", " + uicon);
    const containerId = await fuzzyMatch(name);
    const containerObj = fromString(uname, ucolor, uicon);
    update4(containerId, containerObj);
  }
  cmd_params.set("viewcontainers", /* @__PURE__ */ new Map([]));
  async function viewcontainers() {
    logger12.debug("shimming excmd viewcontainers from background to content");
    return messageActiveTab(
      "excmd_content",
      "viewcontainers",
      []
    );
  }
  cmd_params.set("recontain", /* @__PURE__ */ new Map([["containerName", "string"]]));
  async function recontain(containerName) {
    const thisTab = await activeTab();
    let container;
    await fuzzyMatch(containerName).then((match3) => {
      container = match3;
    }).catch(() => {
      container = DefaultContainer.cookieStoreId;
    });
    await openInNewTab(thisTab.url, {
      active: true,
      related: true,
      cookieStoreId: container
    });
    return browser.tabs.remove(thisTab.id);
  }
  browser.tabs.onCreated.addListener(tgroupHandleTabCreated);
  browser.tabs.onRemoved.addListener(tgroupHandleTabRemoved);
  browser.tabs.onDetached.addListener(tgroupHandleTabDetached);
  browser.tabs.onAttached.addListener(tgroupHandleTabAttached);
  browser.tabs.onActivated.addListener(tgroupHandleTabActivated);
  browser.tabs.onUpdated.addListener(tgroupHandleTabUpdated);
  cmd_params.set("setContentStateGroup", /* @__PURE__ */ new Map([["name", "string"]]));
  function setContentStateGroup(name) {
    logger12.debug("shimming excmd setContentStateGroup from background to content");
    return messageActiveTab(
      "excmd_content",
      "setContentStateGroup",
      [name]
    );
  }
  cmd_params.set("tgroupcreate", /* @__PURE__ */ new Map([["name", "string"]]));
  async function tgroupcreate(name) {
    const promises = [];
    const groups = await tgroups();
    if (groups.has(name) || name === "#") {
      throw new Error(`Tab group "${name}" already exists`);
    }
    if (groups.size > 0) {
      await setWindowTgroup(name);
      const initialUrl = await get("tabgroupnewtaburls")[name];
      await tabopen(initialUrl);
      promises.push(tgroupTabs(name, true).then((tabs) => browserBg.tabs.hide(tabs.map((tab2) => tab2.id))));
    } else {
      promises.push(
        browser.tabs.query({ currentWindow: true, pinned: false }).then((tabs) => {
          setTabTgroup(
            name,
            tabs.map(({ id: id2 }) => id2)
          );
          setContentStateGroup(name);
        })
      );
      promises.push(setWindowTgroup(name));
    }
    groups.add(name);
    promises.push(setTgroups(groups));
    return Promise.all(promises).then(() => name);
  }
  cmd_params.set("tgroupswitch", /* @__PURE__ */ new Map([["name", "string"]]));
  async function tgroupswitch(name) {
    if (name === "#") {
      return tgrouplast().then(() => name);
    }
    if (name == await windowTgroup()) {
      return;
    }
    const groups = await tgroups();
    if (groups.size > 0) {
      if (groups.has(name)) {
        return tgroupActivate(name).then(() => name);
      } else {
        return tgroupcreate(name).then(() => name);
      }
    } else {
      return tgroupcreate(name).then(() => name);
    }
  }
  cmd_params.set("tgrouplast", /* @__PURE__ */ new Map([]));
  async function tgrouplast() {
    if ((await tgroups()).size < 2) {
      throw new Error("No last tab group");
    }
    return tgroupActivateLast();
  }
  cmd_params.set("tgrouprename", /* @__PURE__ */ new Map([["name", "string"]]));
  async function tgrouprename(name) {
    if ((await tgroups()).size == 0) {
      throw new Error("No tab groups exist");
    }
    return tgroupClearOldInfo(await windowTgroup(), name).then(() => {
      setContentStateGroup(name);
      return name;
    });
  }
  cmd_params.set("tgroupclose", /* @__PURE__ */ new Map([["name", "string"]]));
  async function tgroupclose(name) {
    const groups = await tgroups();
    if (groups.size == 0) {
      throw new Error("No tab groups exist");
    } else if (groups.size == 1) {
      throw new Error("This is the only tab group");
    } else if (name !== void 0 && name !== "#" && !groups.has(name)) {
      throw new Error(`No tab group named "${name}"`);
    } else if (groups.size > 1) {
      const currentGroup = await windowTgroup();
      let closeGroup = currentGroup;
      if (name === "#") {
        closeGroup = await windowLastTgroup();
        if (name === void 0) {
          throw new Error("No alternate tab group");
        }
      } else if (name !== void 0) {
        closeGroup = name;
      }
      let newTabGroup = currentGroup;
      if (closeGroup === currentGroup) {
        newTabGroup = await tgroupActivateLast();
      }
      await tgroupTabs(closeGroup).then((tabs) => {
        browser.tabs.remove(tabs.map((tab2) => tab2.id));
      });
      return tgroupClearOldInfo(closeGroup).then(() => newTabGroup);
    }
  }
  cmd_params.set("tgroupmove", /* @__PURE__ */ new Map([["name", "string"]]));
  async function tgroupmove(name) {
    const groups = await tgroups();
    const currentGroup = await windowTgroup();
    if (groups.size == 0) {
      throw new Error("No tab groups exist");
    }
    if (name == currentGroup) {
      throw new Error(`Tab is already on group "${name}"`);
    }
    if (name === "#") {
      name = await windowLastTgroup();
      if (name === void 0) {
        throw new Error("No alternate tab group");
      }
    }
    if (!groups.has(name)) {
      groups.add(name);
      await setTgroups(groups);
    }
    const tabCount = await tgroupTabs(currentGroup).then((tabs) => tabs.length);
    await setTabTgroup(name);
    setContentStateGroup(name);
    const currentTabId = await activeTabId();
    if (tabCount == 1) {
      return Promise.all([
        tgroupClearOldInfo(currentGroup, name),
        tgroupTabs(name).then((tabs) => {
          browserBg.tabs.show(tabs.map((tab2) => tab2.id));
        })
      ]).then(() => name);
    } else {
      const lastTabId = await tgroupLastTabId(currentGroup);
      await tabSetActive(lastTabId);
      return browser.tabs.hide(currentTabId).then(() => currentGroup);
    }
  }
  cmd_params.set("tgroupabort", /* @__PURE__ */ new Map([]));
  async function tgroupabort() {
    if ((await tgroups()).size == 0) {
      throw new Error("No tab groups exist");
    }
    return clearAllTgroupInfo().then(() => void 0);
  }
  cmd_params.set("version", /* @__PURE__ */ new Map([]));
  function version() {
    return fillcmdline_notrail(TRI_VERSION2);
  }
  cmd_params.set("mode", /* @__PURE__ */ new Map([["mode", "ModeName"]]));
  function mode(mode2) {
    logger12.debug("shimming excmd mode from background to content");
    return messageActiveTab(
      "excmd_content",
      "mode",
      [mode2]
    );
  }
  async function getnexttabs(tabid, n) {
    const curIndex = (await browser.tabs.get(tabid)).index;
    const tabs = await browser.tabs.query({
      currentWindow: true
    });
    const indexFilter = ((tab2) => curIndex <= tab2.index && (n ? tab2.index < curIndex + Number(n) : true)).bind(n);
    return tabs.filter(indexFilter).map((tab2) => tab2.id);
  }
  cmd_params.set("repeat", /* @__PURE__ */ new Map([["n", "number"], ["...exstr", "string[]"]]));
  async function repeat3(n = 1, ...exstr) {
    let cmd = state.last_ex_str;
    if (exstr.length > 0)
      cmd = exstr.join(" ");
    logger12.debug("repeating " + cmd + " " + n + " times");
    for (let i = 0; i < n; i++) {
      await acceptExCmd(cmd);
    }
  }
  cmd_params.set("composite", /* @__PURE__ */ new Map([["...cmds", "string[]"]]));
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
    } catch (e) {
      logger12.error(e);
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
  cmd_params.set("escapehatch", /* @__PURE__ */ new Map([]));
  async function escapehatch2() {
    useractions.escapehatch();
  }
  cmd_params.set("sleep", /* @__PURE__ */ new Map([["time_ms", "number"]]));
  function sleep3(time_ms) {
    return new Promise((resolve) => setTimeout(resolve, time_ms));
  }
  cmd_params.set("showcmdline", /* @__PURE__ */ new Map([["focus", "boolean"]]));
  function showcmdline(focus2 = true) {
    logger12.debug("shimming excmd showcmdline from background to content");
    return messageActiveTab(
      "excmd_content",
      "showcmdline",
      [focus2]
    );
  }
  cmd_params.set("hidecmdline", /* @__PURE__ */ new Map([]));
  function hidecmdline() {
    logger12.debug("shimming excmd hidecmdline from background to content");
    return messageActiveTab(
      "excmd_content",
      "hidecmdline",
      []
    );
  }
  cmd_params.set("fillcmdline", /* @__PURE__ */ new Map([["...strarr", "string[]"]]));
  function fillcmdline(...strarr) {
    logger12.debug("shimming excmd fillcmdline from background to content");
    return messageActiveTab(
      "excmd_content",
      "fillcmdline",
      [...strarr]
    );
  }
  cmd_params.set("fillcmdline_notrail", /* @__PURE__ */ new Map([["...strarr", "string[]"]]));
  function fillcmdline_notrail(...strarr) {
    logger12.debug("shimming excmd fillcmdline_notrail from background to content");
    return messageActiveTab(
      "excmd_content",
      "fillcmdline_notrail",
      [...strarr]
    );
  }
  cmd_params.set("fillcmdline_nofocus", /* @__PURE__ */ new Map([["...strarr", "string[]"]]));
  function fillcmdline_nofocus(...strarr) {
    logger12.debug("shimming excmd fillcmdline_nofocus from background to content");
    return messageActiveTab(
      "excmd_content",
      "fillcmdline_nofocus",
      [...strarr]
    );
  }
  cmd_params.set("fillcmdline_tmp", /* @__PURE__ */ new Map([["ms", "number"], ["...strarr", "string[]"]]));
  async function fillcmdline_tmp(ms, ...strarr) {
    logger12.debug("shimming excmd fillcmdline_tmp from background to content");
    return messageActiveTab(
      "excmd_content",
      "fillcmdline_tmp",
      [ms, ...strarr]
    );
  }
  cmd_params.set("yank", /* @__PURE__ */ new Map([["...content", "string[]"]]));
  function yank(...content) {
    return setclip(content.join(" "));
  }
  async function setclip(data) {
    const setclip_selection = (data2) => clipboard("set", data2);
    let promises;
    switch (await getAsync("yankto")) {
      case "selection":
        promises = [setclip_selection(data)];
        break;
      case "clipboard":
        promises = [setclip_webapi(data)];
        break;
      case "both":
        promises = [setclip_selection(data), setclip_webapi(data)];
        break;
    }
    return Promise.all(promises);
  }
  async function setclip_webapi(data) {
    return window.navigator.clipboard.writeText(data);
  }
  cmd_params.set("getclip", /* @__PURE__ */ new Map([["from", '"clipboard" | "selection"']]));
  async function getclip(from) {
    if (from === void 0)
      from = await getAsync("putfrom");
    if (from === "clipboard") {
      return getclip_webapi();
    } else {
      return clipboard("get", "");
    }
  }
  async function getclip_webapi() {
    return window.navigator.clipboard.readText();
  }
  cmd_params.set("clipboard", /* @__PURE__ */ new Map([["excmd", '"open" | "yank" | "yankshort" | "yankcanon" | "yanktitle" | "yankmd" | "yankorg" | "xselpaste" | "tabopen" = "open"'], ["...toYank", "string[]"]]));
  async function clipboard2(excmd = "open", ...toYank) {
    let content = toYank.join(" ");
    let url = "";
    let urls = [];
    let done = Promise.resolve(void 0);
    switch (excmd) {
      case "yankshort":
        urls = await geturlsforlinks("rel", "shortlink");
        if (urls.length === 0) {
          urls = await geturlsforlinks("rev", "canonical");
        }
        if (urls.length > 0) {
          await yank(urls[0]);
          done = fillcmdline_tmp(3e3, "# " + urls[0] + " copied to clipboard.");
          break;
        }
      case "yankcanon":
        urls = await geturlsforlinks("rel", "canonical");
        if (urls.length > 0) {
          await yank(urls[0]);
          done = fillcmdline_tmp(3e3, "# " + urls[0] + " copied to clipboard.");
          break;
        }
      case "yank":
        content = content === "" ? (await activeTab()).url : content;
        await yank(content);
        done = fillcmdline_tmp(3e3, "# " + content + " copied to clipboard.");
        break;
      case "yanktitle":
        content = (await activeTab()).title;
        await yank(content);
        done = fillcmdline_tmp(3e3, "# " + content + " copied to clipboard.");
        break;
      case "yankmd":
        content = "[" + (await activeTab()).title + "](" + (await activeTab()).url + ")";
        await yank(content);
        done = fillcmdline_tmp(3e3, "# " + content + " copied to clipboard.");
        break;
      case "yankorg":
        content = "[[" + (await activeTab()).url + "][" + (await activeTab()).title + "]]";
        await yank(content);
        done = fillcmdline_tmp(3e3, "# " + content + " copied to clipboard.");
        break;
      case "open":
        url = await getclip();
        if (url) {
          done = open(url.trim());
        }
        break;
      case "tabopen":
        url = await getclip();
        if (url) {
          done = tabopen(url.trim());
        }
        break;
      case "xselpaste":
        content = await getclip("selection");
        if (content.length > 0) {
          EditorCmds.insert_text(content);
        }
        break;
      default:
        throw new Error(`[clipboard] unknown excmd: ${excmd}`);
    }
    return done.then(() => void 0);
  }
  cmd_params.set("yankimage", /* @__PURE__ */ new Map([["url", "string"]]));
  async function yankimage(url) {
    const absoluteUrl = getAbsoluteURL(url, document.baseURI);
    const image = await window.fetch(absoluteUrl);
    const blob = await image.blob();
    const imageType = blob.type.split("/")[1].split(";")[0];
    try {
      browser.clipboard.setImageData(await blob.arrayBuffer(), imageType);
    } catch (err) {
      if (err instanceof Error && err.message.includes("imageType")) {
        throw new Error(`Image type ${blob.type} is not supported`);
      } else {
        throw err;
      }
    }
  }
  cmd_params.set("tab", /* @__PURE__ */ new Map([["...id", "string[]"]]));
  async function tab(...id2) {
    return tab_helper(true, false, ...id2);
  }
  cmd_params.set("taball", /* @__PURE__ */ new Map([["...id", "string[]"]]));
  async function taball(...id2) {
    return tab_helper(true, true, ...id2);
  }
  cmd_params.set("tabrename", /* @__PURE__ */ new Map([["index", "string"], ["...name", "string[]"]]));
  async function tabrename(index2, ...name) {
    const id2 = await idFromIndex(index2);
    return messageTab(id2, "excmd_content", "tabcurrentrename", name);
  }
  cmd_params.set("tab_helper", /* @__PURE__ */ new Map([["interactive", "boolean"], ["anyWindow", "boolean"], ["...key", "string[]"]]));
  async function tab_helper(interactive, anyWindow, ...key) {
    const id2 = key.join(" ");
    if (Number.isInteger(Number(id2)))
      return tabIndexSetActive(Number(id2));
    if (id2 === "#")
      return tabIndexSetActive(id2);
    if (id2 !== null && id2 !== void 0 && !/\d+\.\d+/.exec(id2)) {
      let defaultQuery = {};
      if (!anyWindow)
        defaultQuery = { windowId: (await activeTab()).windowId };
      const results = /* @__PURE__ */ new Map();
      try {
        ;
        (await browser.tabs.query({ ...defaultQuery, ...{ url: id2 } })).forEach((tab2) => results.set(tab2.id, tab2));
      } catch (e) {
      }
      if (results.size < 2)
        (await browser.tabs.query({ ...defaultQuery, ...{ title: id2.replace("*", "\\*") } })).forEach((tab2) => results.set(tab2.id, tab2));
      if (results.size < 2)
        (await browser.tabs.query(defaultQuery)).filter((tab2) => tab2.url.includes(id2)).forEach((tab2) => results.set(tab2.id, tab2));
      if (results.size < 2)
        (await browser.tabs.query({ ...defaultQuery, ...{ title: "*" + id2 + "*" } })).forEach((tab2) => results.set(tab2.id, tab2));
      if (results.size) {
        if (interactive && results.size > 1)
          return fillcmdline_notrail(anyWindow ? "taball" : "tab", id2);
        const firstTab = results.values().next().value;
        await browser.windows.update(firstTab.windowId, { focused: true });
        return browser.tabs.update(firstTab.id, { active: true });
      }
      throw new Error("No tab found matching: " + id2);
    }
    const [winid, tabindex_number] = await parseWinTabIndex(id2);
    const tabid = (await browser.tabs.query({ windowId: winid, index: tabindex_number }))[0].id;
    await browser.windows.update(winid, { focused: true });
    return browser.tabs.update(tabid, { active: true });
  }
  cmd_params.set("command", /* @__PURE__ */ new Map([["name", "string"], ["...definition", "string[]"]]));
  function command(name, ...definition) {
    try {
      const def = definition.join(" ");
      expandExstr(name);
      return set3("exaliases", name, def);
    } catch (e) {
      unset("exaliases", name);
      throw new Error(`Alias not set. ${e}`);
    }
  }
  cmd_params.set("comclear", /* @__PURE__ */ new Map([["name", "string"]]));
  function comclear(name) {
    unset("exaliases", name);
  }
  cmd_params.set("bind", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function bind3(...args2) {
    const args_obj = parse_bind_args(...args2);
    let p = Promise.resolve();
    if (args_obj.excmd !== "") {
      for (let i = 0; i < args_obj.key.length; i++) {
        const key_sub = args_obj.key.slice(0, i);
        if (getDynamic(args_obj.configName, key_sub)) {
          fillcmdline_notrail("# Warning: bind `" + key_sub + "` exists and will shadow `" + args_obj.key + "`. Try running `:unbind --mode=" + args_obj.mode + " " + key_sub + "`");
          break;
        }
      }
      if (args_obj.mode == "browser") {
        const commands = await browser.commands.getAll();
        let command2 = commands.filter((c) => mozMapToMinimalKey(c.shortcut).toMapstr() == args_obj.key)[0];
        command2 = command2 === void 0 ? command2 = commands.filter((c) => c.shortcut === "")[0] : command2;
        if (command2 === void 0)
          throw new Error("You have reached the maximum number of browser binds. `:unbind` one you don't want from `:viewconfig browsermaps`.");
        await browser.commands.update({ name: command2.name, shortcut: minimalKeyToMozMap(mapstrToKeyseq(args_obj.key)[0]) });
        await updateListener();
      }
      p = set3(args_obj.configName, args_obj.key, args_obj.excmd);
    } else if (args_obj.key.length) {
      p = bindshow(...args2);
    }
    return p;
  }
  cmd_params.set("bindshow", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  function bindshow(...args2) {
    const args_obj = parse_bind_args(...args2);
    return fillcmdline_notrail("bind", (args_obj.mode ? "--mode=" + args_obj.mode + " " : "") + args_obj.key, getDynamic(args_obj.configName, args_obj.key));
  }
  async function bindwizard(...args2) {
    let mode2 = "normal";
    if (args2.length && args2[0].startsWith("--mode=")) {
      mode2 = args2.shift().replace("--mode=", "");
    }
    return gobble("<CR>", `fillcmdline_notrail bind --mode=${mode2}`, ...args2);
  }
  cmd_params.set("bindurl", /* @__PURE__ */ new Map([["pattern", "string"], ["mode", "string"], ["keys", "string"], ["...excmd", "string[]"]]));
  function bindurl(pattern2, mode2, keys4, ...excmd) {
    const args_obj = parse_bind_args(mode2, keys4, ...excmd);
    if (args_obj.mode === "browser")
      throw new Error("Browser-wide binds are not supported per-URL");
    let p = Promise.resolve();
    if (args_obj.excmd !== "") {
      p = setURL(pattern2, args_obj.configName, args_obj.key, args_obj.excmd);
    } else if (args_obj.key.length) {
      p = fillcmdline_notrail("#", args_obj.key, "=", getURL(pattern2, [args_obj.configName, args_obj.key]));
    }
    return p;
  }
  cmd_params.set("keymap", /* @__PURE__ */ new Map([["source", "string"], ["target", "string"]]));
  function keymap(source3, target) {
    if (get("keyboardlayoutforce") == "true") {
      fillcmdline("You can't keymap with keyboardlayoutforce set. Set values in keyboardlayoutoverrides to change layout for tridactyl shortcuts.");
      return;
    }
    return set4("keytranslatemap." + source3, target);
  }
  cmd_params.set("searchsetkeyword", /* @__PURE__ */ new Map([]));
  function searchsetkeyword() {
    throw new Error(":searchsetkeyword has been deprecated. Use `set searchurls.KEYWORD URL` instead.");
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
  cmd_params.set("seturl", /* @__PURE__ */ new Map([["pattern", "string"], ["key", "string"], ["...values", "string[]"]]));
  function seturl(pattern2, key, ...values3) {
    logger12.debug("shimming excmd seturl from background to content");
    return messageActiveTab(
      "excmd_content",
      "seturl",
      [pattern2, key, ...values3]
    );
  }
  cmd_params.set("setmode", /* @__PURE__ */ new Map([["mode", "string"], ["key", "string"], ["...values", "string[]"]]));
  function setmode(mode2, key, ...values3) {
    logger12.debug("shimming excmd setmode from background to content");
    return messageActiveTab(
      "excmd_content",
      "setmode",
      [mode2, key, ...values3]
    );
  }
  cmd_params.set("set", /* @__PURE__ */ new Map([["key", "string"], ["...values", "string[]"]]));
  function set4(key, ...values3) {
    if (!key) {
      throw new Error("Key must be provided!");
    } else if (!values3[0]) {
      return get3(key);
    }
    if (key === "noiframeon") {
      const noiframes = get("noiframeon");
      if (noiframes)
        noiframes.forEach((url) => seturl(url, "noiframe", "false"));
      values3.forEach((url) => seturl(url, "noiframe", "true"));
      set3("noiframeon", values3);
      throw new Error("Warning: `noiframeon $url1 $url2` has been deprecated in favor of `:seturl $url1 noiframe true`. The right seturl calls have been made for you but from now on please use `:seturl`.");
    }
    if (key === "csp" && values3[0] === "clobber") {
      const msg = "#Error: Mozilla asked us to remove our csp-clobbering code. See https://github.com/tridactyl/tridactyl/issues/1800";
      fillcmdline_tmp(3e3, msg);
      throw msg;
    }
    const target = validateSetArgs(key, values3);
    key === "proxy" && exists2(target.slice(-1));
    return set3(...target);
  }
  cmd_params.set("firefoxsyncpull", /* @__PURE__ */ new Map([]));
  function firefoxsyncpull() {
    return pull();
  }
  cmd_params.set("firefoxsyncpush", /* @__PURE__ */ new Map([]));
  function firefoxsyncpush() {
    return push();
  }
  var AUCMDS = ["DocStart", "DocLoad", "DocEnd", "TriStart", "TabEnter", "TabLeft", "FullscreenChange", "FullscreenEnter", "FullscreenLeft", "UriChange", "HistoryState"].concat(requestEvents);
  function getAutocmdEvents() {
    return AUCMDS;
  }
  cmd_params.set("autocmd", /* @__PURE__ */ new Map([["event", "string"], ["url", "string"], ["...excmd", "string[]"]]));
  function autocmd(event, url, ...excmd) {
    if (!getAutocmdEvents().includes(event))
      throw new Error(event + " is not a supported event.");
    return set3("autocmds", event, url, excmd.join(" "));
  }
  cmd_params.set("autocontain", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  function autocontain(...args2) {
    if (args2.length === 0)
      throw new Error("Invalid autocontain arguments.");
    const urlMode = args2[0] === "-u";
    const saneMode = args2[0] === "-s";
    if (urlMode || saneMode) {
      args2.splice(0, 1);
    }
    if (args2.length < 2)
      throw new Error("syntax: autocontain [-{u,s}] pattern container proxy1 proxy2");
    let [pattern2, container, ...proxies] = args2;
    if (!urlMode) {
      pattern2 = saneMode ? `^https?://([^/]*\\.|)${pattern2}/` : `^https?://[^/]*${pattern2}/`;
    }
    proxies.length && exists2(proxies);
    return set3("autocontain", pattern2, proxies.length ? [container, proxies.join(",")].join("+") : container);
  }
  cmd_params.set("proxyadd", /* @__PURE__ */ new Map([["name", "string"], ["url", "string"]]));
  function proxyadd(name, url) {
    if (!name || !url)
      throw new Error(":proxyadd requires two arguments. See `:help proxyadd` for more information.");
    proxyFromUrl(url);
    return set3("proxies", name, url);
  }
  cmd_params.set("proxyremove", /* @__PURE__ */ new Map([["name", "string"]]));
  function proxyremove(name) {
    if (!name) {
      throw new Error("proxyremove syntax: `proxyremove proxyname`");
    }
    unset("proxies", name);
  }
  cmd_params.set("autocmddelete", /* @__PURE__ */ new Map([["event", "string"], ["url", "string"]]));
  function autocmddelete(event, url) {
    if (!getAutocmdEvents().includes(event))
      throw new Error(`${event} is not a supported event.`);
    if (requestEvents.includes(event)) {
      unregisterWebRequestAutocmd(event, url);
    }
    return unset("autocmds", event, url);
  }
  cmd_params.set("blacklistadd", /* @__PURE__ */ new Map([["url", "string"]]));
  function blacklistadd(url) {
    return autocmd("DocStart", url, "mode ignore");
  }
  cmd_params.set("unbind", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function unbind(...args2) {
    const args_obj = parse_bind_args(...args2);
    if (args_obj.excmd !== "")
      throw new Error("unbind syntax: `unbind key`");
    if (args_obj.mode == "browser") {
      const commands = await browser.commands.getAll();
      const command2 = commands.filter((c) => mozMapToMinimalKey(c.shortcut).toMapstr() == args_obj.key)[0];
      if (command2 !== void 0) {
        await browser.commands.update({ name: command2.name, shortcut: "" });
        await updateListener();
      }
    }
    return set3(args_obj.configName, args_obj.key, null);
  }
  cmd_params.set("unbindurl", /* @__PURE__ */ new Map([["pattern", "string"], ["mode", "string"], ["keys", "string"]]));
  async function unbindurl(pattern2, mode2, keys4) {
    const args_obj = parse_bind_args(mode2, keys4);
    return setURL(pattern2, args_obj.configName, args_obj.key, null);
  }
  cmd_params.set("reset", /* @__PURE__ */ new Map([["mode", "string"], ["key", "string"]]));
  async function reset(mode2, key) {
    const args_obj = parse_bind_args(mode2, key);
    return unset(args_obj.configName, args_obj.key);
  }
  cmd_params.set("reseturl", /* @__PURE__ */ new Map([["pattern", "string"], ["mode", "string"], ["key", "string"]]));
  async function reseturl(pattern2, mode2, key) {
    const args_obj = parse_bind_args(mode2, key);
    return unsetURL(pattern2, args_obj.configName, args_obj.key);
  }
  cmd_params.set("sanitise", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function sanitise(...args2) {
    const flagpos = args2.indexOf("-t");
    let since = {};
    if (flagpos > -1) {
      if (flagpos < args2.length - 1) {
        const match3 = /^([0-9])+(m|h|d|w)$/.exec(args2[flagpos + 1]);
        if (match3 !== null && match3.length === 3) {
          let millis = parseInt(match3[1], 10) * 1e3;
          switch (match3[2]) {
            case "w":
              millis *= 7;
            case "d":
              millis *= 24;
            case "h":
              millis *= 60;
            case "m":
              millis *= 60;
          }
          since = { since: (/* @__PURE__ */ new Date()).getTime() - millis };
        } else {
          throw new Error(":sanitise error: expected time format: ^([0-9])+(m|h|d|w)$, given format:" + args2[flagpos + 1]);
        }
      } else {
        throw new Error(":sanitise error: -t given but no following arguments");
      }
    }
    const dts = {
      cache: false,
      cookies: false,
      downloads: false,
      formData: false,
      history: false,
      localStorage: false,
      passwords: false,
      serviceWorkers: false,
      // These are Tridactyl-specific
      commandline: false,
      tridactyllocal: false,
      tridactylsync: false
      /* When this one is activated, a lot of errors seem to pop up in
         the console. Keeping it disabled is probably a good idea.
      "pluginData": false,
       */
      /* These 3 are supported by Chrome and Opera but not by Firefox yet.
      "fileSystems": false,
      "indexedDB": false,
      "serverBoundCertificates": false,
       */
    };
    if (args2.find((x) => x === "all") !== void 0) {
      for (const attr in dts)
        if (Object.prototype.hasOwnProperty.call(dts, attr))
          dts[attr] = true;
    } else {
      args2.forEach((x) => {
        if (dts[x] === false)
          dts[x] = true;
      });
    }
    if (dts.commandline === true)
      state.cmdHistory = [];
    delete dts.commandline;
    if (dts.tridactyllocal === true)
      await browser.storage.local.clear();
    delete dts.tridactyllocal;
    if (dts.tridactylsync === true)
      await browser.storage.sync.clear();
    delete dts.tridactylsync;
    return browser.browsingData.remove(since, dts);
  }
  cmd_params.set("quickmark", /* @__PURE__ */ new Map([["key", "string"], ["...addressarr", "string[]"]]));
  async function quickmark(key, ...addressarr) {
    if (key.length !== 1) {
      return;
    }
    if (addressarr.length <= 1) {
      const address2 = addressarr.length === 0 ? (await activeTab()).url : addressarr[0];
      await bind3("gn" + key, "tabopen", address2);
      await sleep3(50);
      await bind3("go" + key, "open", address2);
      await sleep3(50);
      await bind3("gw" + key, "winopen", address2);
    } else {
      const compstring = addressarr.join("; tabopen ");
      const compstringwin = addressarr.join("; winopen ");
      await bind3("gn" + key, "composite tabopen", compstring);
      await sleep3(50);
      await bind3("go" + key, "composite open", compstring);
      await sleep3(50);
      await bind3("gw" + key, "composite winopen", compstringwin);
    }
  }
  cmd_params.set("get", /* @__PURE__ */ new Map([["...keys", "string[]"]]));
  function get3(...keys4) {
    const target = keys4.join(".").split(".");
    const value = getDynamic(...target);
    console.log(value);
    let done;
    if (typeof value === "object") {
      done = fillcmdline_notrail(`# ${keys4.join(".")} ${JSON.stringify(value)}`);
    } else {
      done = fillcmdline_notrail(`# ${keys4.join(".")} ${value}`);
    }
    return done;
  }
  cmd_params.set("viewconfig", /* @__PURE__ */ new Map([["...key", "string[]"]]));
  function viewconfig(...key) {
    let json;
    if (key.length === 0)
      json = get();
    else if (key[0] === "--default") {
      json = key[1] !== void 0 ? getDeepProperty(o3(new default_config()), key[1].split(".")) : o3(new default_config());
    } else if (key[0] === "--user") {
      json = key[1] !== void 0 ? getDeepProperty(USERCONFIG, key[1].split(".")) : USERCONFIG;
    } else {
      json = getDynamic(...key.join(".").split("."));
    }
    jsonview(JSON.stringify(json));
  }
  cmd_params.set("jsonview", /* @__PURE__ */ new Map([["...json", "string[]"]]));
  async function jsonview(...json) {
    const tab2 = await tabopen("-w", browser.runtime.getURL("static/newtab.html"));
    const url = "data:application/json," + encodeURIComponent(json.join(" "));
    return browser.tabs.executeScript(tab2.id, { code: `window.location.href = "${url}";` });
  }
  cmd_params.set("unseturl", /* @__PURE__ */ new Map([["pattern", "string"], ["key", "string"]]));
  function unseturl(pattern2, key) {
    logger12.debug("shimming excmd unseturl from background to content");
    return messageActiveTab(
      "excmd_content",
      "unseturl",
      [pattern2, key]
    );
  }
  cmd_params.set("unsetmode", /* @__PURE__ */ new Map([["mode", "string"], ["key", "string"]]));
  function unsetmode(mode2, key) {
    logger12.debug("shimming excmd unsetmode from background to content");
    return messageActiveTab(
      "excmd_content",
      "unsetmode",
      [mode2, key]
    );
  }
  cmd_params.set("unset", /* @__PURE__ */ new Map([["...keys", "string[]"]]));
  function unset2(...keys4) {
    const target = keys4.join(".").split(".");
    if (target === void 0)
      throw new Error("You must define a target!");
    return unset(...target);
  }
  cmd_params.set("setnull", /* @__PURE__ */ new Map([["...keys", "string[]"]]));
  function setnull(...keys4) {
    const target = keys4.join(".").split(".");
    if (target === void 0)
      throw new Error("You must define a target!");
    return set3(...target, null);
  }
  cmd_params.set("hint", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function hint(...args2) {
    logger12.debug("shimming excmd hint from background to content");
    return messageActiveTab(
      "excmd_content",
      "hint",
      [...args2]
    );
  }
  cmd_params.set("rot13", /* @__PURE__ */ new Map([["n", "number"]]));
  function rot132(n) {
    logger12.debug("shimming excmd rot13 from background to content");
    return messageActiveTab(
      "excmd_content",
      "rot13",
      [n]
    );
  }
  cmd_params.set("jumble", /* @__PURE__ */ new Map([]));
  function jumble2() {
    logger12.debug("shimming excmd jumble from background to content");
    return messageActiveTab(
      "excmd_content",
      "jumble",
      []
    );
  }
  cmd_params.set("run_exstr", /* @__PURE__ */ new Map([["...commands", "string[]"]]));
  function run_exstr(...commands) {
    logger12.debug("shimming excmd run_exstr from background to content");
    return messageActiveTab(
      "excmd_content",
      "run_exstr",
      [...commands]
    );
  }
  cmd_params.set("gobble", /* @__PURE__ */ new Map([["numKeysOrTerminator", "string"], ["endCmd", "string"], ["...args", "string[]"]]));
  async function gobble(numKeysOrTerminator, endCmd, ...args2) {
    logger12.debug("shimming excmd gobble from background to content");
    return messageActiveTab(
      "excmd_content",
      "gobble",
      [numKeysOrTerminator, endCmd, ...args2]
    );
  }
  cmd_params.set("getGotoSelectors", /* @__PURE__ */ new Map([]));
  async function getGotoSelectors() {
    logger12.debug("shimming excmd getGotoSelectors from background to content");
    return messageActiveTab(
      "excmd_content",
      "getGotoSelectors",
      []
    );
  }
  cmd_params.set("goto", /* @__PURE__ */ new Map([["...selector", "string[]"]]));
  async function goto(...selector) {
    logger12.debug("shimming excmd goto from background to content");
    return messageActiveTab(
      "excmd_content",
      "goto",
      [...selector]
    );
  }
  cmd_params.set("nmode", /* @__PURE__ */ new Map([["mode", "string"], ["n", "number"], ["...endexArr", "string[]"]]));
  async function nmode(mode2, n, ...endexArr) {
    logger12.debug("shimming excmd nmode from background to content");
    return messageActiveTab(
      "excmd_content",
      "nmode",
      [mode2, n, ...endexArr]
    );
  }
  cmd_params.set("ttsread", /* @__PURE__ */ new Map([["mode", '"-t" | "-c"'], ["...args", "string[]"]]));
  async function ttsread(mode2, ...args2) {
    logger12.debug("shimming excmd ttsread from background to content");
    return messageActiveTab(
      "excmd_content",
      "ttsread",
      [mode2, ...args2]
    );
  }
  cmd_params.set("ttsvoices", /* @__PURE__ */ new Map([]));
  async function ttsvoices() {
    const voices = listVoices();
    voices.sort();
    return fillcmdline_notrail("#", voices.join(", "));
  }
  cmd_params.set("ttscontrol", /* @__PURE__ */ new Map([["action", "string"]]));
  async function ttscontrol(action) {
    logger12.debug("shimming excmd ttscontrol from background to content");
    return messageActiveTab(
      "excmd_content",
      "ttscontrol",
      [action]
    );
  }
  function buildFilterConfigs(filters) {
    return filters.map((filter3) => {
      if (filter3.endsWith("/")) {
        return { kind: "ownerName", ownerName: filter3.slice(0, -1) };
      } else if (filter3 === ":start") {
        return { kind: "eventType", eventType: "start" };
      } else if (filter3 === ":end") {
        return { kind: "eventType", eventType: "end" };
      } else if (filter3 === ":measure") {
        return { kind: "eventType", eventType: "measure" };
      } else {
        return { kind: "functionName", functionName: filter3 };
      }
    });
  }
  cmd_params.set("perfdump", /* @__PURE__ */ new Map([["...filters", "string[]"]]));
  async function perfdump(...filters) {
    const filterconfigs = buildFilterConfigs(filters);
    const entries = window.tri.statsLogger.getEntries(...filterconfigs);
    console.log(filterconfigs);
    return open("data:application/json;charset=UTF-8," + JSON.stringify(entries));
  }
  cmd_params.set("perfhistogram", /* @__PURE__ */ new Map([["...filters", "string[]"]]));
  async function perfhistogram(...filters) {
    const filterconfigs = buildFilterConfigs(filters);
    filterconfigs.push({ kind: "eventType", eventType: "measure" });
    const entries = window.tri.statsLogger.getEntries(...filterconfigs);
    if (entries.length === 0) {
      return fillcmdline_tmp(3e3, "perfhistogram: No samples found.");
    }
    const histogram = renderStatsHistogram(entries);
    console.log(histogram);
    return open("data:text/plain;charset=UTF-8;base64," + btoa(histogram));
  }
  cmd_params.set("bmark", /* @__PURE__ */ new Map([["url", "string"], ["...titlearr", "string[]"]]));
  async function bmark(url, ...titlearr) {
    const auto_url = url == void 0 || url == (await activeTab()).url;
    url = url === void 0 ? (await activeTab()).url : ((_) => {
      try {
        return new URL(url).href;
      } catch (e) {
        return new URL("http://" + url).href;
      }
    })();
    let title = titlearr.join(" ");
    const dupbmarks = await browser.bookmarks.search({ url });
    dupbmarks.forEach((bookmark) => browser.bookmarks.remove(bookmark.id));
    if (dupbmarks.length !== 0)
      return;
    const path3 = title.substring(0, title.lastIndexOf("/") + 1);
    if (title == "" && auto_url) {
      title = (await activeTab()).title;
    }
    if (path3 != "") {
      const tree = (await browser.bookmarks.getTree())[0];
      const treeClimber = (tree2, treestr) => {
        if (tree2.type !== "folder")
          return {};
        treestr += tree2.title + "/";
        if (!("children" in tree2) || tree2.children.length === 0)
          return [{ path: treestr, id: tree2.id }];
        return [{ path: treestr, id: tree2.id }, tree2.children.map((child) => treeClimber(child, treestr))];
      };
      const treeClimberResult = treeClimber(tree, "");
      let validpaths = [];
      if (treeClimberResult instanceof Array)
        validpaths = treeClimberResult.flat(Infinity).filter((x) => "path" in x);
      title = title.substring(title.lastIndexOf("/") + 1);
      let pathobj = validpaths.find((p) => p.path === path3);
      if (pathobj === void 0)
        pathobj = validpaths.find((p) => p.path.includes(path3));
      if (title == "" && auto_url) {
        const currTitle = (await activeTab()).title;
        title = currTitle;
      }
      if (pathobj !== void 0) {
        return browser.bookmarks.create({ url, title, parentId: pathobj.id });
      }
    }
    return browser.bookmarks.create({ url, title });
  }
  cmd_params.set("echo", /* @__PURE__ */ new Map([["...str", "string[]"]]));
  function echo(...str2) {
    return str2.join(" ");
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
  cmd_params.set("js", /* @__PURE__ */ new Map([["...str", "string[]"]]));
  async function js2(...str2) {
    logger12.debug("shimming excmd js from background to content");
    return messageActiveTab(
      "excmd_content",
      "js",
      [...str2]
    );
  }
  cmd_params.set("jsb", /* @__PURE__ */ new Map([["...str", "string[]"]]));
  async function jsb(...str2) {
    return js_helper(str2);
  }
  cmd_params.set("issue", /* @__PURE__ */ new Map([]));
  async function issue() {
    logger12.debug("shimming excmd issue from background to content");
    return messageActiveTab(
      "excmd_content",
      "issue",
      []
    );
  }
  cmd_params.set("text2qr", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function text2qr(...args2) {
    logger12.debug("shimming excmd text2qr from background to content");
    return messageActiveTab(
      "excmd_content",
      "text2qr",
      [...args2]
    );
  }
  cmd_params.set("updatecheck", /* @__PURE__ */ new Map([["source", '"manual" | "auto_polite" | "auto_impolite" = "manual"']]));
  async function updatecheck(source3 = "manual") {
    const forceCheck = source3 == "manual";
    if (!(forceCheck || secondsSinceLastCheck() > get("update", "checkintervalsecs"))) {
      return false;
    }
    const highestKnownVersion = await getLatestVersion();
    if (!highestKnownVersion) {
      return false;
    }
    if (!shouldNagForVersion(highestKnownVersion)) {
      if (source3 == "manual") {
        fillcmdline_tmp(3e4, "You're up to date! Tridactyl version " + highestKnownVersion.version + ".");
      }
      return false;
    }
    const notify = () => {
      fillcmdline_tmp(3e4, "Tridactyl " + highestKnownVersion.version + " is available (you're on " + getInstalledVersion() + "). Visit about:addons, right click Tridactyl, click 'Find Updates'. Restart Firefox once it has downloaded.");
    };
    if (source3 == "manual") {
      notify();
    } else if (source3 == "auto_impolite") {
      logger12.debug("Impolitely nagging user to update. Installed, latest: ", getInstalledVersion(), highestKnownVersion);
      notify();
      updateLatestNaggedVersion(highestKnownVersion);
    } else if (source3 == "auto_polite" && !naggedForVersion(highestKnownVersion)) {
      logger12.debug("Politely nagging user to update. Installed, latest: ", getInstalledVersion(), highestKnownVersion);
      notify();
      updateLatestNaggedVersion(highestKnownVersion);
    }
  }
  cmd_params.set("keyfeed", /* @__PURE__ */ new Map([["mapstr", "string"]]));
  async function keyfeed(mapstr) {
    logger12.debug("shimming excmd keyfeed from background to content");
    return messageActiveTab(
      "excmd_content",
      "keyfeed",
      [mapstr]
    );
  }
  browser.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install")
      tutor("newtab");
    else if (details.reason === "update") {
      if (details.temporary !== true) {
        updatenative(false);
      } else {
        tabopen();
      }
    }
  });
  cmd_params.set("extoptions", /* @__PURE__ */ new Map([["...optionNameArgs", "string[]"]]));
  async function extoptions(...optionNameArgs) {
    const optionName = optionNameArgs.join(" ");
    const extensions = await listExtensions();
    const selectedExtension = extensions.find((ext) => ext.name === optionName);
    return winopen("-popup", selectedExtension.optionsUrl);
  }
  cmd_params.set("reader", /* @__PURE__ */ new Map([["...args", "string[]"]]));
  async function reader(...args2) {
    logger12.debug("shimming excmd reader from background to content");
    return messageActiveTab(
      "excmd_content",
      "reader",
      [...args2]
    );
  }
  cmd_params.set("elementunhide", /* @__PURE__ */ new Map([]));
  async function elementunhide() {
    logger12.debug("shimming excmd elementunhide from background to content");
    return messageActiveTab(
      "excmd_content",
      "elementunhide",
      []
    );
  }

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
  var logger13 = new Logger("dom");
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
    for (let i = 0, length3 = query2.snapshotLength; i < length3; ++i) {
      yield query2.snapshotItem(i);
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
        } catch (e) {
        }
        return acc.concat(newFrames);
      }, [])
    );
  }
  function getSelector(e) {
    function uniqueSelector(e2) {
      if (e2.id && /^[a-zA-Z0-9]+$/.exec(e2.id))
        return "#" + e2.id;
      if (!e2.parentElement)
        return "HTML";
      const index2 = Array.from(e2.parentElement.children).filter((child) => child.tagName === e2.tagName).indexOf(e2) + 1;
      return uniqueSelector(e2.parentElement) + ` > ${e2.tagName}:nth-of-type(${index2})`;
    }
    return uniqueSelector(e);
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
      } catch (e) {
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
  var hintworthy_js_elems = /* @__PURE__ */ new Set();
  function registerEvListenerAction(elem, add3, event) {
    if (!(elem instanceof Element)) {
      return;
    }
    try {
      Node.prototype.hasChildNodes.apply(elem);
    } catch (e) {
      logger13.error("Elem is not a real Node", elem);
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
  function focus(e) {
    e.focus();
    if (e instanceof HTMLInputElement && ["text", "search", "url", "tel", "password"].includes(
      e.type.toLowerCase()
    )) {
      let pos = 0;
      if (get("cursorpos") === "end")
        pos = e.value.length;
      e.setSelectionRange(pos, pos);
    }
  }
  var LAST_USED_INPUT = null;
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
    document.addEventListener("focusin", (e) => {
      let elem = e.target;
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
  var HINTTAGS_selectors = `
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
  var HINTTAGS_filter_by_text_selectors = `
input:not([type=hidden]):not([disabled]),
a,
textarea,
button,
select,
[class*='button']
`;
  var HINTTAGS_img_selectors = `
img,
[src]
`;
  var HINTTAGS_anchor_selectors = `
[id],
[name]
`;
  var HINTTAGS_killable_selectors = `
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
  var HINTTAGS_saveable = `
[href]:not([href='#'])
`;
  function anchors(includeInvisible = false) {
    return getElemsBySelector(HINTTAGS_anchor_selectors, [
      isVisibleFilter(includeInvisible)
    ]);
  }
  var TabTarget = /* @__PURE__ */ ((TabTarget2) => {
    TabTarget2[TabTarget2["CurrentTab"] = 0] = "CurrentTab";
    TabTarget2[TabTarget2["NewTab"] = 1] = "NewTab";
    TabTarget2[TabTarget2["NewBackgroundTab"] = 2] = "NewBackgroundTab";
    TabTarget2[TabTarget2["NewWindow"] = 3] = "NewWindow";
    return TabTarget2;
  })(TabTarget || {});
  var tabTargetToModifierKey = {
    [0 /* CurrentTab */]: {},
    [1 /* NewTab */]: { ctrlKey: true, shiftKey: true },
    [2 /* NewBackgroundTab */]: { ctrlKey: true },
    [3 /* NewWindow */]: { shiftKey: true }
  };
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

  // src/background/download_background.ts
  var download_background_exports = {};
  __export(download_background_exports, {
    downloadUrl: () => downloadUrl,
    downloadUrlAs: () => downloadUrlAs
  });
  function objectUrlFromDataUrl(dataUrl) {
    const b64 = dataUrl.pathname.split(",", 2)[1];
    const binaryF = atob(b64);
    const dataArray = new Uint8Array(binaryF.length);
    for (let i = 0, len = binaryF.length; i < len; ++i) {
      dataArray[i] = binaryF.charCodeAt(i);
    }
    return URL.createObjectURL(new Blob([dataArray]));
  }
  async function downloadUrl(url, saveAs) {
    const urlToSave = new URL(url);
    let urlToDownload;
    if (urlToSave.protocol === "data:") {
      urlToDownload = objectUrlFromDataUrl(urlToSave);
    } else {
      urlToDownload = urlToSave.href;
    }
    const fileName = getDownloadFilenameForUrl(urlToSave);
    const downloadPromise = browser.downloads.download({
      url: urlToDownload,
      filename: fileName,
      incognito: get("downloadsskiphistory") === "true",
      saveAs
    });
    await downloadPromise;
  }
  async function downloadUrlAs(url, saveAs, overwrite, cleanup) {
    if (!await nativegate("0.1.9", true))
      return;
    const urlToSave = new URL(url);
    let urlToDownload;
    if (urlToSave.protocol === "data:") {
      urlToDownload = objectUrlFromDataUrl(urlToSave);
    } else {
      urlToDownload = urlToSave.href;
    }
    let fileName = getDownloadFilenameForUrl(urlToSave);
    const regex_matcher = new RegExp("[" + get("downloadforbiddenchars") + "]", "g");
    fileName = fileName.replace(regex_matcher, get("downloadforbiddenreplacement"));
    get("downloadforbiddennames").split(",").forEach((item) => {
      if (item.trim() === fileName) {
        fileName = fileName + get("downloadforbiddenreplacement");
      }
    });
    const downloadId = await browser.downloads.download({
      conflictAction: "uniquify",
      url: urlToDownload,
      filename: fileName,
      incognito: get("downloadsskiphistory") === "true"
    });
    return new Promise((resolve, reject3) => {
      const onDownloadComplete = async (downloadDelta) => {
        if (downloadDelta.id !== downloadId) {
          return;
        }
        if (downloadDelta.state && downloadDelta.state.current !== "in_progress") {
          browser.downloads.onChanged.removeListener(onDownloadComplete);
          const downloadItem = (await browser.downloads.search({
            id: downloadId
          }))[0];
          if (downloadDelta.state.current === "complete") {
            const operation = await move2(
              downloadItem.filename,
              saveAs,
              overwrite,
              cleanup
            );
            const code2human = (n) => defaultTo_default(
              "Unknown error",
              { 1: "File already exists", 2: "Other OS error" }[n]
            );
            if (operation.code != 0) {
              reject3(
                new Error(
                  `${code2human(operation.code)}. '${downloadItem.filename}' could not be moved to '${saveAs}'. Error code: ${operation.code}`
                )
              );
            } else {
              resolve(downloadItem.filename);
            }
          } else {
            reject3(
              new Error(
                `'${downloadItem.filename}' state not in_progress anymore but not complete either (would have been moved to '${saveAs}')`
              )
            );
          }
        }
      };
      browser.downloads.onChanged.addListener(onDownloadComplete);
    });
  }

  // src/lib/requests.ts
  var requests_exports = {};
  __export(requests_exports, {
    clobberCSP: () => clobberCSP
  });

  // node_modules/csp-serdes/dist/index.js
  function parse5(policy) {
    const seenNames = /* @__PURE__ */ new Set();
    function unseenName(name) {
      if (!seenNames.has(name)) {
        seenNames.add(name);
        return true;
      } else {
        return false;
      }
    }
    return new Map(policy.split(";").map((token) => token.trim()).filter((token) => token !== "").map((token) => {
      let [name, ...value] = token.split(/\s+/);
      return [name.toLowerCase(), new Set(value)];
    }).filter(([name, _]) => unseenName(name)));
  }
  function serialize(policy) {
    return Array.from(policy.entries()).map(([name, value]) => [name, ...Array.from(value)].join(" ")).join("; ");
  }

  // src/lib/requests.ts
  var logger14 = new logging_default("requests");
  var DefaultMap = class extends Map {
    constructor(defaultFactory, ...args2) {
      super(...args2);
      this.defaultFactory = defaultFactory;
    }
    get(key) {
      if (!this.has(key)) {
        this.set(key, this.defaultFactory(key));
      }
      return super.get(key);
    }
  };
  function clobberCSP(response) {
    const headers = response.responseHeaders;
    const cspHeader = headers.find(
      (header) => header.name.toLowerCase() === "content-security-policy"
    );
    if (cspHeader !== void 0) {
      const policy = new DefaultMap(
        () => /* @__PURE__ */ new Set(),
        parse5(cspHeader.value)
      );
      logger14.info(
        "given CSP",
        cspHeader.value,
        "parsed CSP",
        policy,
        "reserialized CSP",
        serialize(policy)
      );
      policy.delete("sandbox");
      if (policy.has("default-src") && !policy.has("style-src")) {
        policy.set("style-src", policy.get("default-src"));
      }
      if (policy.has("style-src")) {
        policy.get("style-src").add("'unsafe-inline'").add("'self'");
      }
      cspHeader.value = serialize(policy);
      logger14.info("new CSP", cspHeader.value, "parsed as", policy);
      return { responseHeaders: headers };
    } else {
      return {};
    }
  }

  // src/background/omnibox.ts
  function inputEnteredListener(input) {
    acceptExCmd(input);
  }
  function init4() {
    browser.omnibox.onInputEntered.addListener(inputEnteredListener);
    browser.omnibox.setDefaultSuggestion({
      description: `Execute a Tridactyl exstr (for example, "tabopen -c container www.google.com")`
    });
  }

  // src/content/hinting.ts
  var logger15 = new logging_default("hinting");
  var modeState;
  function reset2() {
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
  function selectFocusedHint(delay = false) {
    logger15.debug("Selecting hint.", contentState.mode);
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
    logger15.debug("Focusing next hint");
    modeState.changeFocusedHintIndex(1);
  }
  function focusPreviousHint() {
    logger15.debug("Focusing previous hint");
    modeState.changeFocusedHintIndex(-1);
  }
  function focusTopHint() {
    logger15.debug("Focusing top hint");
    modeState.changeFocusedHintTop();
  }
  function focusBottomHint() {
    logger15.debug("Focusing bottom hint");
    modeState.changeFocusedHintBottom();
  }
  function focusLeftHint() {
    logger15.debug("Focusing left hint");
    modeState.changeFocusedHintLeft();
  }
  function focusRightHint() {
    logger15.debug("Focusing right hint");
    modeState.changeFocusedHintRight();
  }
  function getHintCommands() {
    return {
      reset: reset2,
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

  // src/background/hinting.ts
  var functions2 = getHintCommands();
  var HintingCmds = new Proxy(functions2, {
    get(target, property) {
      if (target[property]) {
        return (...args2) => messageActiveTab(
          "controller_content",
          "acceptExCmd",
          [property].concat(args2)
        );
      }
      return target[property];
    }
  });

  // src/background.ts
  window.tri = Object.assign(/* @__PURE__ */ Object.create(null), {
    messaging: messaging_exports,
    excmds: excmds_background_generated_exports,
    convert: convert_exports,
    config: config_exports,
    controller: controller_exports,
    dom: dom_exports,
    download_background: download_background_exports,
    itertools: itertools_exports,
    native: native_exports,
    keyseq: keyseq_exports,
    request: requests_exports,
    state,
    webext: webext_exports,
    webrequests: webrequests_exports,
    l: (prom) => prom.then(console.log).catch(console.error),
    contentLocation: window.location,
    R: es_exports,
    perf: perf_exports,
    meta: meta_exports
  });
  setExCmds({
    "": excmds_background_generated_exports,
    ex: CmdlineCmds,
    text: EditorCmds,
    hint: HintingCmds
  });
  browser.tabs.query({ currentWindow: true, active: true }).then((t) => {
    ;
    window.tri.contentLocation = new URL(t[0].url);
  });
  var contentLocationCount = 0;
  browser.tabs.onActivated.addListener((ev) => {
    const myId = contentLocationCount + 1;
    contentLocationCount = myId;
    browser.tabs.get(ev.tabId).then((t) => {
      if (contentLocationCount === myId) {
        ;
        window.tri.contentLocation = new URL(t.url);
      }
    });
  });
  browser.proxy.onRequest.addListener(onRequestListener, {
    urls: ["<all_urls>"]
  });
  browser.tabs.onRemoved.addListener((tabId) => {
    messageAllTabs("tab_changes", "tab_close", [tabId]);
  });
  browser.tabs.onAttached.addListener((tabId) => {
    messageAllTabs("tab_changes", "tab_attached", [tabId]);
  });
  browser.tabs.onCreated.addListener((tabId) => {
    messageAllTabs("tab_changes", "tab_created", [tabId]);
  });
  browser.tabs.onDetached.addListener((tabId) => {
    messageAllTabs("tab_changes", "tab_detached", [tabId]);
  });
  browser.tabs.onMoved.addListener((tabId) => {
    messageAllTabs("tab_changes", "tab_moved", [tabId]);
  });
  browser.webNavigation.onDOMContentLoaded.addListener(() => {
    browser.tabs.query({ currentWindow: true, active: true }).then((t) => {
      ;
      window.tri.contentLocation = new URL(t[0].url);
    });
  });
  browser.runtime.onUpdateAvailable.addListener((_) => void 0);
  var autocmd_logger = new Logger("autocmds");
  browser.runtime.onStartup.addListener(() => {
    getAsync("autocmds", "TriStart").then((aucmds) => {
      const hosts = Object.keys(aucmds);
      if (hosts.length === 1 && hosts[0] === ".*") {
        autocmd_logger.debug(
          `TriStart matched ${hosts[0]}: ${aucmds[hosts[0]]}`
        );
        acceptExCmd(aucmds[hosts[0]]);
      } else {
        run("hostname").then((hostname) => {
          for (const host of hosts) {
            if (new RegExp(host).exec(hostname.content)) {
              autocmd_logger.debug(
                `TriStart matched ${host}: ${aucmds[host]}`
              );
              acceptExCmd(aucmds[host]);
            }
          }
        });
      }
    });
  });
  getAsync("update", "nag").then((nag) => {
    if (nag === true)
      updatecheck("auto_polite");
  });
  var curTab = null;
  browser.tabs.onActivated.addListener((ev) => {
    const ignore = (_) => _;
    if (curTab !== null) {
      messageTab(curTab, "excmd_content", "loadaucmds", ["TabLeft"]).catch(ignore);
    }
    curTab = ev.tabId;
    messageTab(curTab, "excmd_content", "loadaucmds", ["TabEnter"]).catch(ignore);
  });
  for (const requestEvent2 of requestEvents) {
    getAsync("autocmds", requestEvent2).then((aucmds) => {
      if (!aucmds)
        return;
      const patterns = Object.keys(aucmds);
      patterns.forEach(
        (pattern2) => registerWebRequestAutocmd(
          requestEvent2,
          pattern2,
          aucmds[pattern2]
        )
      );
    });
  }
  addChangeListener(
    "autocmds",
    (previous, current) => requestEvents.forEach(
      (requestEvent2) => (
        // If there are autocmd(s) for this requestEvent
        current[requestEvent2] !== void 0 && Object.entries(
          current[requestEvent2]
        ).forEach(([pattern2, func2]) => {
          const path3 = path_default([requestEvent2, pattern2]);
          path3(current) !== path3(previous) && registerWebRequestAutocmd(
            requestEvent2,
            pattern2,
            func2
          );
        })
      )
    )
  );
  init3();
  var aucon = new AutoContain();
  browser.webRequest.onCompleted.addListener(aucon.completedRequestListener, {
    urls: ["<all_urls>"],
    types: ["main_frame"]
  });
  browser.webRequest.onErrorOccurred.addListener(aucon.completedRequestListener, {
    urls: ["<all_urls>"],
    types: ["main_frame"]
  });
  browser.webRequest.onBeforeRequest.addListener(
    aucon.autoContain,
    { urls: ["<all_urls>"], types: ["main_frame"] },
    ["blocking"]
  );
  browser.tabs.onCreated.addListener(aucon.tabCreatedListener);
  var statsLogger = new StatsLogger();
  var messages = {
    excmd_background: excmds_background_generated_exports,
    controller_background: controller_exports,
    performance_background: statsLogger,
    download_background: {
      downloadUrl,
      downloadUrlAs
    },
    browser_proxy_background: { shim }
  };
  setupListener(messages);
  var perfObserver = listenForCounters(statsLogger);
  window.tri = Object.assign(window.tri || /* @__PURE__ */ Object.create(null), {
    // Attach the perf observer to the window object, since there
    // appears to be a bug causing performance observers to be GC'd
    // even if they're still the target of a callback.
    perfObserver,
    // Also attach the statsLogger so we can access our stats from the
    // console.
    statsLogger
  });
  init4();
  setTimeout(update3, 5e3);
  updateListener();
  unfixamo();
})();
/*! Bundled license information:

atob/browser-atob.js:
  (*!! Deliberately using an API that's deprecated in node.js because *)
  (*!! this file is for browsers and we expect them to cope with it. *)
  (*!! Discussion: github.com/node-browser-compat/atob/pull/9 *)
*/
//# sourceMappingURL=background.js.map
