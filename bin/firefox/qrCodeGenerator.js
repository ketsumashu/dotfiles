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

  // vendor/qrcode/qrcode.js
  var require_qrcode = __commonJS({
    "vendor/qrcode/qrcode.js"(exports, module) {
      "use strict";
      var QRCode2 = function(t) {
        "use strict";
        var r, e = function() {
          return "function" == typeof Promise && Promise.prototype && Promise.prototype.then;
        }, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706], o2 = function(t2) {
          if (!t2)
            throw new Error('"version" cannot be null or undefined');
          if (t2 < 1 || t2 > 40)
            throw new Error('"version" should be in range from 1 to 40');
          return 4 * t2 + 17;
        }, a = function(t2) {
          return n[t2];
        }, i = function(t2) {
          for (var r2 = 0; 0 !== t2; )
            r2++, t2 >>>= 1;
          return r2;
        }, u = function(t2) {
          if ("function" != typeof t2)
            throw new Error('"toSJISFunc" is not a valid function.');
          r = t2;
        }, s = function() {
          return void 0 !== r;
        }, f = function(t2) {
          return r(t2);
        };
        function h(t2, r2) {
          return t2(r2 = { exports: {} }, r2.exports), r2.exports;
        }
        var c = h(function(t2, r2) {
          r2.L = { bit: 1 }, r2.M = { bit: 0 }, r2.Q = { bit: 3 }, r2.H = { bit: 2 }, r2.isValid = function(t3) {
            return t3 && void 0 !== t3.bit && t3.bit >= 0 && t3.bit < 4;
          }, r2.from = function(t3, e2) {
            if (r2.isValid(t3))
              return t3;
            try {
              return function(t4) {
                if ("string" != typeof t4)
                  throw new Error("Param is not a string");
                switch (t4.toLowerCase()) {
                  case "l":
                  case "low":
                    return r2.L;
                  case "m":
                  case "medium":
                    return r2.M;
                  case "q":
                  case "quartile":
                    return r2.Q;
                  case "h":
                  case "high":
                    return r2.H;
                  default:
                    throw new Error("Unknown EC Level: " + t4);
                }
              }(t3);
            } catch (t4) {
              return e2;
            }
          };
        });
        function g() {
          this.buffer = [], this.length = 0;
        }
        c.L, c.M, c.Q, c.H, c.isValid, g.prototype = { get: function(t2) {
          var r2 = Math.floor(t2 / 8);
          return 1 == (this.buffer[r2] >>> 7 - t2 % 8 & 1);
        }, put: function(t2, r2) {
          for (var e2 = 0; e2 < r2; e2++)
            this.putBit(1 == (t2 >>> r2 - e2 - 1 & 1));
        }, getLengthInBits: function() {
          return this.length;
        }, putBit: function(t2) {
          var r2 = Math.floor(this.length / 8);
          this.buffer.length <= r2 && this.buffer.push(0), t2 && (this.buffer[r2] |= 128 >>> this.length % 8), this.length++;
        } };
        var d = g;
        function l(t2) {
          if (!t2 || t2 < 1)
            throw new Error("BitMatrix size must be defined and greater than 0");
          this.size = t2, this.data = new Uint8Array(t2 * t2), this.reservedBit = new Uint8Array(t2 * t2);
        }
        l.prototype.set = function(t2, r2, e2, n2) {
          var o3 = t2 * this.size + r2;
          this.data[o3] = e2, n2 && (this.reservedBit[o3] = true);
        }, l.prototype.get = function(t2, r2) {
          return this.data[t2 * this.size + r2];
        }, l.prototype.xor = function(t2, r2, e2) {
          this.data[t2 * this.size + r2] ^= e2;
        }, l.prototype.isReserved = function(t2, r2) {
          return this.reservedBit[t2 * this.size + r2];
        };
        var v = l, p = h(function(t2, r2) {
          var e2 = o2;
          r2.getRowColCoords = function(t3) {
            if (1 === t3)
              return [];
            for (var r3 = Math.floor(t3 / 7) + 2, n2 = e2(t3), o3 = 145 === n2 ? 26 : 2 * Math.ceil((n2 - 13) / (2 * r3 - 2)), a2 = [n2 - 7], i2 = 1; i2 < r3 - 1; i2++)
              a2[i2] = a2[i2 - 1] - o3;
            return a2.push(6), a2.reverse();
          }, r2.getPositions = function(t3) {
            for (var e3 = [], n2 = r2.getRowColCoords(t3), o3 = n2.length, a2 = 0; a2 < o3; a2++)
              for (var i2 = 0; i2 < o3; i2++)
                0 === a2 && 0 === i2 || 0 === a2 && i2 === o3 - 1 || a2 === o3 - 1 && 0 === i2 || e3.push([n2[a2], n2[i2]]);
            return e3;
          };
        });
        p.getRowColCoords, p.getPositions;
        var w = o2, m = function(t2) {
          var r2 = w(t2);
          return [[0, 0], [r2 - 7, 0], [0, r2 - 7]];
        }, E = h(function(t2, r2) {
          r2.Patterns = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
          var e2 = 3, n2 = 3, o3 = 40, a2 = 10;
          function i2(t3, e3, n3) {
            switch (t3) {
              case r2.Patterns.PATTERN000:
                return (e3 + n3) % 2 == 0;
              case r2.Patterns.PATTERN001:
                return e3 % 2 == 0;
              case r2.Patterns.PATTERN010:
                return n3 % 3 == 0;
              case r2.Patterns.PATTERN011:
                return (e3 + n3) % 3 == 0;
              case r2.Patterns.PATTERN100:
                return (Math.floor(e3 / 2) + Math.floor(n3 / 3)) % 2 == 0;
              case r2.Patterns.PATTERN101:
                return e3 * n3 % 2 + e3 * n3 % 3 == 0;
              case r2.Patterns.PATTERN110:
                return (e3 * n3 % 2 + e3 * n3 % 3) % 2 == 0;
              case r2.Patterns.PATTERN111:
                return (e3 * n3 % 3 + (e3 + n3) % 2) % 2 == 0;
              default:
                throw new Error("bad maskPattern:" + t3);
            }
          }
          r2.isValid = function(t3) {
            return null != t3 && "" !== t3 && !isNaN(t3) && t3 >= 0 && t3 <= 7;
          }, r2.from = function(t3) {
            return r2.isValid(t3) ? parseInt(t3, 10) : void 0;
          }, r2.getPenaltyN1 = function(t3) {
            for (var r3 = t3.size, n3 = 0, o4 = 0, a3 = 0, i3 = null, u2 = null, s2 = 0; s2 < r3; s2++) {
              o4 = a3 = 0, i3 = u2 = null;
              for (var f2 = 0; f2 < r3; f2++) {
                var h2 = t3.get(s2, f2);
                h2 === i3 ? o4++ : (o4 >= 5 && (n3 += e2 + (o4 - 5)), i3 = h2, o4 = 1), (h2 = t3.get(f2, s2)) === u2 ? a3++ : (a3 >= 5 && (n3 += e2 + (a3 - 5)), u2 = h2, a3 = 1);
              }
              o4 >= 5 && (n3 += e2 + (o4 - 5)), a3 >= 5 && (n3 += e2 + (a3 - 5));
            }
            return n3;
          }, r2.getPenaltyN2 = function(t3) {
            for (var r3 = t3.size, e3 = 0, o4 = 0; o4 < r3 - 1; o4++)
              for (var a3 = 0; a3 < r3 - 1; a3++) {
                var i3 = t3.get(o4, a3) + t3.get(o4, a3 + 1) + t3.get(o4 + 1, a3) + t3.get(o4 + 1, a3 + 1);
                4 !== i3 && 0 !== i3 || e3++;
              }
            return e3 * n2;
          }, r2.getPenaltyN3 = function(t3) {
            for (var r3 = t3.size, e3 = 0, n3 = 0, a3 = 0, i3 = 0; i3 < r3; i3++) {
              n3 = a3 = 0;
              for (var u2 = 0; u2 < r3; u2++)
                n3 = n3 << 1 & 2047 | t3.get(i3, u2), u2 >= 10 && (1488 === n3 || 93 === n3) && e3++, a3 = a3 << 1 & 2047 | t3.get(u2, i3), u2 >= 10 && (1488 === a3 || 93 === a3) && e3++;
            }
            return e3 * o3;
          }, r2.getPenaltyN4 = function(t3) {
            for (var r3 = 0, e3 = t3.data.length, n3 = 0; n3 < e3; n3++)
              r3 += t3.data[n3];
            return Math.abs(Math.ceil(100 * r3 / e3 / 5) - 10) * a2;
          }, r2.applyMask = function(t3, r3) {
            for (var e3 = r3.size, n3 = 0; n3 < e3; n3++)
              for (var o4 = 0; o4 < e3; o4++)
                r3.isReserved(o4, n3) || r3.xor(o4, n3, i2(t3, o4, n3));
          }, r2.getBestMask = function(t3, e3) {
            for (var n3 = Object.keys(r2.Patterns).length, o4 = 0, a3 = 1 / 0, i3 = 0; i3 < n3; i3++) {
              e3(i3), r2.applyMask(i3, t3);
              var u2 = r2.getPenaltyN1(t3) + r2.getPenaltyN2(t3) + r2.getPenaltyN3(t3) + r2.getPenaltyN4(t3);
              r2.applyMask(i3, t3), u2 < a3 && (a3 = u2, o4 = i3);
            }
            return o4;
          };
        });
        E.Patterns, E.isValid, E.getPenaltyN1, E.getPenaltyN2, E.getPenaltyN3, E.getPenaltyN4, E.applyMask, E.getBestMask;
        var y = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81], A = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430], I = function(t2, r2) {
          switch (r2) {
            case c.L:
              return y[4 * (t2 - 1) + 0];
            case c.M:
              return y[4 * (t2 - 1) + 1];
            case c.Q:
              return y[4 * (t2 - 1) + 2];
            case c.H:
              return y[4 * (t2 - 1) + 3];
            default:
              return;
          }
        }, M = function(t2, r2) {
          switch (r2) {
            case c.L:
              return A[4 * (t2 - 1) + 0];
            case c.M:
              return A[4 * (t2 - 1) + 1];
            case c.Q:
              return A[4 * (t2 - 1) + 2];
            case c.H:
              return A[4 * (t2 - 1) + 3];
            default:
              return;
          }
        }, N = new Uint8Array(512), B = new Uint8Array(256);
        !function() {
          for (var t2 = 1, r2 = 0; r2 < 255; r2++)
            N[r2] = t2, B[t2] = r2, 256 & (t2 <<= 1) && (t2 ^= 285);
          for (var e2 = 255; e2 < 512; e2++)
            N[e2] = N[e2 - 255];
        }();
        var C = function(t2) {
          return N[t2];
        }, P = function(t2, r2) {
          return 0 === t2 || 0 === r2 ? 0 : N[B[t2] + B[r2]];
        }, R = h(function(t2, r2) {
          r2.mul = function(t3, r3) {
            for (var e2 = new Uint8Array(t3.length + r3.length - 1), n2 = 0; n2 < t3.length; n2++)
              for (var o3 = 0; o3 < r3.length; o3++)
                e2[n2 + o3] ^= P(t3[n2], r3[o3]);
            return e2;
          }, r2.mod = function(t3, r3) {
            for (var e2 = new Uint8Array(t3); e2.length - r3.length >= 0; ) {
              for (var n2 = e2[0], o3 = 0; o3 < r3.length; o3++)
                e2[o3] ^= P(r3[o3], n2);
              for (var a2 = 0; a2 < e2.length && 0 === e2[a2]; )
                a2++;
              e2 = e2.slice(a2);
            }
            return e2;
          }, r2.generateECPolynomial = function(t3) {
            for (var e2 = new Uint8Array([1]), n2 = 0; n2 < t3; n2++)
              e2 = r2.mul(e2, new Uint8Array([1, C(n2)]));
            return e2;
          };
        });
        function T(t2) {
          this.genPoly = void 0, this.degree = t2, this.degree && this.initialize(this.degree);
        }
        R.mul, R.mod, R.generateECPolynomial, T.prototype.initialize = function(t2) {
          this.degree = t2, this.genPoly = R.generateECPolynomial(this.degree);
        }, T.prototype.encode = function(t2) {
          if (!this.genPoly)
            throw new Error("Encoder not initialized");
          var r2 = new Uint8Array(t2.length + this.degree);
          r2.set(t2);
          var e2 = R.mod(r2, this.genPoly), n2 = this.degree - e2.length;
          if (n2 > 0) {
            var o3 = new Uint8Array(this.degree);
            return o3.set(e2, n2), o3;
          }
          return e2;
        };
        var L = T, b = function(t2) {
          return !isNaN(t2) && t2 >= 1 && t2 <= 40;
        }, U = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+", x = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (U = U.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+", k = new RegExp(U, "g"), F = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), S = new RegExp(x, "g"), D = new RegExp("[0-9]+", "g"), Y = new RegExp("[A-Z $%*+\\-./:]+", "g"), _ = new RegExp("^" + U + "$"), z = new RegExp("^[0-9]+$"), H = new RegExp("^[A-Z0-9 $%*+\\-./:]+$"), J = { KANJI: k, BYTE_KANJI: F, BYTE: S, NUMERIC: D, ALPHANUMERIC: Y, testKanji: function(t2) {
          return _.test(t2);
        }, testNumeric: function(t2) {
          return z.test(t2);
        }, testAlphanumeric: function(t2) {
          return H.test(t2);
        } }, K = h(function(t2, r2) {
          r2.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }, r2.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }, r2.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }, r2.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }, r2.MIXED = { bit: -1 }, r2.getCharCountIndicator = function(t3, r3) {
            if (!t3.ccBits)
              throw new Error("Invalid mode: " + t3);
            if (!b(r3))
              throw new Error("Invalid version: " + r3);
            return r3 >= 1 && r3 < 10 ? t3.ccBits[0] : r3 < 27 ? t3.ccBits[1] : t3.ccBits[2];
          }, r2.getBestModeForData = function(t3) {
            return J.testNumeric(t3) ? r2.NUMERIC : J.testAlphanumeric(t3) ? r2.ALPHANUMERIC : J.testKanji(t3) ? r2.KANJI : r2.BYTE;
          }, r2.toString = function(t3) {
            if (t3 && t3.id)
              return t3.id;
            throw new Error("Invalid mode");
          }, r2.isValid = function(t3) {
            return t3 && t3.bit && t3.ccBits;
          }, r2.from = function(t3, e2) {
            if (r2.isValid(t3))
              return t3;
            try {
              return function(t4) {
                if ("string" != typeof t4)
                  throw new Error("Param is not a string");
                switch (t4.toLowerCase()) {
                  case "numeric":
                    return r2.NUMERIC;
                  case "alphanumeric":
                    return r2.ALPHANUMERIC;
                  case "kanji":
                    return r2.KANJI;
                  case "byte":
                    return r2.BYTE;
                  default:
                    throw new Error("Unknown mode: " + t4);
                }
              }(t3);
            } catch (t4) {
              return e2;
            }
          };
        });
        K.NUMERIC, K.ALPHANUMERIC, K.BYTE, K.KANJI, K.MIXED, K.getCharCountIndicator, K.getBestModeForData, K.isValid;
        var O = h(function(t2, r2) {
          var e2 = i(7973);
          function n2(t3, r3) {
            return K.getCharCountIndicator(t3, r3) + 4;
          }
          function o3(t3, r3) {
            var e3 = 0;
            return t3.forEach(function(t4) {
              var o4 = n2(t4.mode, r3);
              e3 += o4 + t4.getBitsLength();
            }), e3;
          }
          r2.from = function(t3, r3) {
            return b(t3) ? parseInt(t3, 10) : r3;
          }, r2.getCapacity = function(t3, r3, e3) {
            if (!b(t3))
              throw new Error("Invalid QR Code version");
            void 0 === e3 && (e3 = K.BYTE);
            var o4 = 8 * (a(t3) - M(t3, r3));
            if (e3 === K.MIXED)
              return o4;
            var i2 = o4 - n2(e3, t3);
            switch (e3) {
              case K.NUMERIC:
                return Math.floor(i2 / 10 * 3);
              case K.ALPHANUMERIC:
                return Math.floor(i2 / 11 * 2);
              case K.KANJI:
                return Math.floor(i2 / 13);
              case K.BYTE:
              default:
                return Math.floor(i2 / 8);
            }
          }, r2.getBestVersionForData = function(t3, e3) {
            var n3, a2 = c.from(e3, c.M);
            if (Array.isArray(t3)) {
              if (t3.length > 1)
                return function(t4, e4) {
                  for (var n4 = 1; n4 <= 40; n4++) {
                    if (o3(t4, n4) <= r2.getCapacity(n4, e4, K.MIXED))
                      return n4;
                  }
                }(t3, a2);
              if (0 === t3.length)
                return 1;
              n3 = t3[0];
            } else
              n3 = t3;
            return function(t4, e4, n4) {
              for (var o4 = 1; o4 <= 40; o4++)
                if (e4 <= r2.getCapacity(o4, n4, t4))
                  return o4;
            }(n3.mode, n3.getLength(), a2);
          }, r2.getEncodedBits = function(t3) {
            if (!b(t3) || t3 < 7)
              throw new Error("Invalid QR Code version");
            for (var r3 = t3 << 12; i(r3) - e2 >= 0; )
              r3 ^= 7973 << i(r3) - e2;
            return t3 << 12 | r3;
          };
        });
        O.getCapacity, O.getBestVersionForData, O.getEncodedBits;
        var Q = i(1335), V = function(t2, r2) {
          for (var e2 = t2.bit << 3 | r2, n2 = e2 << 10; i(n2) - Q >= 0; )
            n2 ^= 1335 << i(n2) - Q;
          return 21522 ^ (e2 << 10 | n2);
        };
        function q(t2) {
          this.mode = K.NUMERIC, this.data = t2.toString();
        }
        q.getBitsLength = function(t2) {
          return 10 * Math.floor(t2 / 3) + (t2 % 3 ? t2 % 3 * 3 + 1 : 0);
        }, q.prototype.getLength = function() {
          return this.data.length;
        }, q.prototype.getBitsLength = function() {
          return q.getBitsLength(this.data.length);
        }, q.prototype.write = function(t2) {
          var r2, e2, n2;
          for (r2 = 0; r2 + 3 <= this.data.length; r2 += 3)
            e2 = this.data.substr(r2, 3), n2 = parseInt(e2, 10), t2.put(n2, 10);
          var o3 = this.data.length - r2;
          o3 > 0 && (e2 = this.data.substr(r2), n2 = parseInt(e2, 10), t2.put(n2, 3 * o3 + 1));
        };
        var j = q, $ = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
        function X(t2) {
          this.mode = K.ALPHANUMERIC, this.data = t2;
        }
        X.getBitsLength = function(t2) {
          return 11 * Math.floor(t2 / 2) + t2 % 2 * 6;
        }, X.prototype.getLength = function() {
          return this.data.length;
        }, X.prototype.getBitsLength = function() {
          return X.getBitsLength(this.data.length);
        }, X.prototype.write = function(t2) {
          var r2;
          for (r2 = 0; r2 + 2 <= this.data.length; r2 += 2) {
            var e2 = 45 * $.indexOf(this.data[r2]);
            e2 += $.indexOf(this.data[r2 + 1]), t2.put(e2, 11);
          }
          this.data.length % 2 && t2.put($.indexOf(this.data[r2]), 6);
        };
        var Z = X;
        function W(t2) {
          this.mode = K.BYTE, "string" == typeof t2 && (t2 = function(t3) {
            for (var r2 = [], e2 = t3.length, n2 = 0; n2 < e2; n2++) {
              var o3 = t3.charCodeAt(n2);
              if (o3 >= 55296 && o3 <= 56319 && e2 > n2 + 1) {
                var a2 = t3.charCodeAt(n2 + 1);
                a2 >= 56320 && a2 <= 57343 && (o3 = 1024 * (o3 - 55296) + a2 - 56320 + 65536, n2 += 1);
              }
              o3 < 128 ? r2.push(o3) : o3 < 2048 ? (r2.push(o3 >> 6 | 192), r2.push(63 & o3 | 128)) : o3 < 55296 || o3 >= 57344 && o3 < 65536 ? (r2.push(o3 >> 12 | 224), r2.push(o3 >> 6 & 63 | 128), r2.push(63 & o3 | 128)) : o3 >= 65536 && o3 <= 1114111 ? (r2.push(o3 >> 18 | 240), r2.push(o3 >> 12 & 63 | 128), r2.push(o3 >> 6 & 63 | 128), r2.push(63 & o3 | 128)) : r2.push(239, 191, 189);
            }
            return new Uint8Array(r2).buffer;
          }(t2)), this.data = new Uint8Array(t2);
        }
        W.getBitsLength = function(t2) {
          return 8 * t2;
        }, W.prototype.getLength = function() {
          return this.data.length;
        }, W.prototype.getBitsLength = function() {
          return W.getBitsLength(this.data.length);
        }, W.prototype.write = function(t2) {
          for (var r2 = 0, e2 = this.data.length; r2 < e2; r2++)
            t2.put(this.data[r2], 8);
        };
        var G = W;
        function tt(t2) {
          this.mode = K.KANJI, this.data = t2;
        }
        tt.getBitsLength = function(t2) {
          return 13 * t2;
        }, tt.prototype.getLength = function() {
          return this.data.length;
        }, tt.prototype.getBitsLength = function() {
          return tt.getBitsLength(this.data.length);
        }, tt.prototype.write = function(t2) {
          var r2;
          for (r2 = 0; r2 < this.data.length; r2++) {
            var e2 = f(this.data[r2]);
            if (e2 >= 33088 && e2 <= 40956)
              e2 -= 33088;
            else {
              if (!(e2 >= 57408 && e2 <= 60351))
                throw new Error("Invalid SJIS character: " + this.data[r2] + "\nMake sure your charset is UTF-8");
              e2 -= 49472;
            }
            e2 = 192 * (e2 >>> 8 & 255) + (255 & e2), t2.put(e2, 13);
          }
        };
        var rt = tt, et = h(function(t2) {
          var r2 = { single_source_shortest_paths: function(t3, e2, n2) {
            var o3 = {}, a2 = {};
            a2[e2] = 0;
            var i2, u2, s2, f2, h2, c2, g2, d2 = r2.PriorityQueue.make();
            for (d2.push(e2, 0); !d2.empty(); )
              for (s2 in u2 = (i2 = d2.pop()).value, f2 = i2.cost, h2 = t3[u2] || {})
                h2.hasOwnProperty(s2) && (c2 = f2 + h2[s2], g2 = a2[s2], (void 0 === a2[s2] || g2 > c2) && (a2[s2] = c2, d2.push(s2, c2), o3[s2] = u2));
            if (void 0 !== n2 && void 0 === a2[n2]) {
              var l2 = ["Could not find a path from ", e2, " to ", n2, "."].join("");
              throw new Error(l2);
            }
            return o3;
          }, extract_shortest_path_from_predecessor_list: function(t3, r3) {
            for (var e2 = [], n2 = r3; n2; )
              e2.push(n2), n2 = t3[n2];
            return e2.reverse(), e2;
          }, find_path: function(t3, e2, n2) {
            var o3 = r2.single_source_shortest_paths(t3, e2, n2);
            return r2.extract_shortest_path_from_predecessor_list(o3, n2);
          }, PriorityQueue: { make: function(t3) {
            var e2, n2 = r2.PriorityQueue, o3 = {};
            for (e2 in t3 = t3 || {}, n2)
              n2.hasOwnProperty(e2) && (o3[e2] = n2[e2]);
            return o3.queue = [], o3.sorter = t3.sorter || n2.default_sorter, o3;
          }, default_sorter: function(t3, r3) {
            return t3.cost - r3.cost;
          }, push: function(t3, r3) {
            var e2 = { value: t3, cost: r3 };
            this.queue.push(e2), this.queue.sort(this.sorter);
          }, pop: function() {
            return this.queue.shift();
          }, empty: function() {
            return 0 === this.queue.length;
          } } };
          t2.exports = r2;
        }), nt = h(function(t2, r2) {
          function e2(t3) {
            return unescape(encodeURIComponent(t3)).length;
          }
          function n2(t3, r3, e3) {
            for (var n3, o4 = []; null !== (n3 = t3.exec(e3)); )
              o4.push({ data: n3[0], index: n3.index, mode: r3, length: n3[0].length });
            return o4;
          }
          function o3(t3) {
            var r3, e3, o4 = n2(J.NUMERIC, K.NUMERIC, t3), a3 = n2(J.ALPHANUMERIC, K.ALPHANUMERIC, t3);
            return s() ? (r3 = n2(J.BYTE, K.BYTE, t3), e3 = n2(J.KANJI, K.KANJI, t3)) : (r3 = n2(J.BYTE_KANJI, K.BYTE, t3), e3 = []), o4.concat(a3, r3, e3).sort(function(t4, r4) {
              return t4.index - r4.index;
            }).map(function(t4) {
              return { data: t4.data, mode: t4.mode, length: t4.length };
            });
          }
          function a2(t3, r3) {
            switch (r3) {
              case K.NUMERIC:
                return j.getBitsLength(t3);
              case K.ALPHANUMERIC:
                return Z.getBitsLength(t3);
              case K.KANJI:
                return rt.getBitsLength(t3);
              case K.BYTE:
                return G.getBitsLength(t3);
            }
          }
          function i2(t3, r3) {
            var e3, n3 = K.getBestModeForData(t3);
            if ((e3 = K.from(r3, n3)) !== K.BYTE && e3.bit < n3.bit)
              throw new Error('"' + t3 + '" cannot be encoded with mode ' + K.toString(e3) + ".\n Suggested mode is: " + K.toString(n3));
            switch (e3 !== K.KANJI || s() || (e3 = K.BYTE), e3) {
              case K.NUMERIC:
                return new j(t3);
              case K.ALPHANUMERIC:
                return new Z(t3);
              case K.KANJI:
                return new rt(t3);
              case K.BYTE:
                return new G(t3);
            }
          }
          r2.fromArray = function(t3) {
            return t3.reduce(function(t4, r3) {
              return "string" == typeof r3 ? t4.push(i2(r3, null)) : r3.data && t4.push(i2(r3.data, r3.mode)), t4;
            }, []);
          }, r2.fromString = function(t3, n3) {
            for (var i3 = function(t4, r3) {
              for (var e3 = {}, n4 = { start: {} }, o4 = ["start"], i4 = 0; i4 < t4.length; i4++) {
                for (var u3 = t4[i4], s3 = [], f3 = 0; f3 < u3.length; f3++) {
                  var h2 = u3[f3], c2 = "" + i4 + f3;
                  s3.push(c2), e3[c2] = { node: h2, lastCount: 0 }, n4[c2] = {};
                  for (var g2 = 0; g2 < o4.length; g2++) {
                    var d2 = o4[g2];
                    e3[d2] && e3[d2].node.mode === h2.mode ? (n4[d2][c2] = a2(e3[d2].lastCount + h2.length, h2.mode) - a2(e3[d2].lastCount, h2.mode), e3[d2].lastCount += h2.length) : (e3[d2] && (e3[d2].lastCount = h2.length), n4[d2][c2] = a2(h2.length, h2.mode) + 4 + K.getCharCountIndicator(h2.mode, r3));
                  }
                }
                o4 = s3;
              }
              for (var l2 = 0; l2 < o4.length; l2++)
                n4[o4[l2]].end = 0;
              return { map: n4, table: e3 };
            }(function(t4) {
              for (var r3 = [], n4 = 0; n4 < t4.length; n4++) {
                var o4 = t4[n4];
                switch (o4.mode) {
                  case K.NUMERIC:
                    r3.push([o4, { data: o4.data, mode: K.ALPHANUMERIC, length: o4.length }, { data: o4.data, mode: K.BYTE, length: o4.length }]);
                    break;
                  case K.ALPHANUMERIC:
                    r3.push([o4, { data: o4.data, mode: K.BYTE, length: o4.length }]);
                    break;
                  case K.KANJI:
                    r3.push([o4, { data: o4.data, mode: K.BYTE, length: e2(o4.data) }]);
                    break;
                  case K.BYTE:
                    r3.push([{ data: o4.data, mode: K.BYTE, length: e2(o4.data) }]);
                }
              }
              return r3;
            }(o3(t3)), n3), u2 = et.find_path(i3.map, "start", "end"), s2 = [], f2 = 1; f2 < u2.length - 1; f2++)
              s2.push(i3.table[u2[f2]].node);
            return r2.fromArray(function(t4) {
              return t4.reduce(function(t5, r3) {
                var e3 = t5.length - 1 >= 0 ? t5[t5.length - 1] : null;
                return e3 && e3.mode === r3.mode ? (t5[t5.length - 1].data += r3.data, t5) : (t5.push(r3), t5);
              }, []);
            }(s2));
          }, r2.rawSplit = function(t3) {
            return r2.fromArray(o3(t3));
          };
        });
        function ot(t2, r2, e2) {
          var n2, o3, a2 = t2.size, i2 = V(r2, e2);
          for (n2 = 0; n2 < 15; n2++)
            o3 = 1 == (i2 >> n2 & 1), n2 < 6 ? t2.set(n2, 8, o3, true) : n2 < 8 ? t2.set(n2 + 1, 8, o3, true) : t2.set(a2 - 15 + n2, 8, o3, true), n2 < 8 ? t2.set(8, a2 - n2 - 1, o3, true) : n2 < 9 ? t2.set(8, 15 - n2 - 1 + 1, o3, true) : t2.set(8, 15 - n2 - 1, o3, true);
          t2.set(a2 - 8, 8, 1, true);
        }
        function at(t2, r2, e2) {
          var n2 = new d();
          e2.forEach(function(r3) {
            n2.put(r3.mode.bit, 4), n2.put(r3.getLength(), K.getCharCountIndicator(r3.mode, t2)), r3.write(n2);
          });
          var o3 = 8 * (a(t2) - M(t2, r2));
          for (n2.getLengthInBits() + 4 <= o3 && n2.put(0, 4); n2.getLengthInBits() % 8 != 0; )
            n2.putBit(0);
          for (var i2 = (o3 - n2.getLengthInBits()) / 8, u2 = 0; u2 < i2; u2++)
            n2.put(u2 % 2 ? 17 : 236, 8);
          return function(t3, r3, e3) {
            for (var n3 = a(r3), o4 = M(r3, e3), i3 = n3 - o4, u3 = I(r3, e3), s2 = u3 - n3 % u3, f2 = Math.floor(n3 / u3), h2 = Math.floor(i3 / u3), c2 = h2 + 1, g2 = f2 - h2, d2 = new L(g2), l2 = 0, v2 = new Array(u3), p2 = new Array(u3), w2 = 0, m2 = new Uint8Array(t3.buffer), E2 = 0; E2 < u3; E2++) {
              var y2 = E2 < s2 ? h2 : c2;
              v2[E2] = m2.slice(l2, l2 + y2), p2[E2] = d2.encode(v2[E2]), l2 += y2, w2 = Math.max(w2, y2);
            }
            var A2, N2, B2 = new Uint8Array(n3), C2 = 0;
            for (A2 = 0; A2 < w2; A2++)
              for (N2 = 0; N2 < u3; N2++)
                A2 < v2[N2].length && (B2[C2++] = v2[N2][A2]);
            for (A2 = 0; A2 < g2; A2++)
              for (N2 = 0; N2 < u3; N2++)
                B2[C2++] = p2[N2][A2];
            return B2;
          }(n2, t2, r2);
        }
        function it(t2, r2, e2, n2) {
          var a2;
          if (Array.isArray(t2))
            a2 = nt.fromArray(t2);
          else {
            if ("string" != typeof t2)
              throw new Error("Invalid data");
            var i2 = r2;
            if (!i2) {
              var u2 = nt.rawSplit(t2);
              i2 = O.getBestVersionForData(u2, e2);
            }
            a2 = nt.fromString(t2, i2 || 40);
          }
          var s2 = O.getBestVersionForData(a2, e2);
          if (!s2)
            throw new Error("The amount of data is too big to be stored in a QR Code");
          if (r2) {
            if (r2 < s2)
              throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + s2 + ".\n");
          } else
            r2 = s2;
          var f2 = at(r2, e2, a2), h2 = o2(r2), c2 = new v(h2);
          return function(t3, r3) {
            for (var e3 = t3.size, n3 = m(r3), o3 = 0; o3 < n3.length; o3++)
              for (var a3 = n3[o3][0], i3 = n3[o3][1], u3 = -1; u3 <= 7; u3++)
                if (!(a3 + u3 <= -1 || e3 <= a3 + u3))
                  for (var s3 = -1; s3 <= 7; s3++)
                    i3 + s3 <= -1 || e3 <= i3 + s3 || (u3 >= 0 && u3 <= 6 && (0 === s3 || 6 === s3) || s3 >= 0 && s3 <= 6 && (0 === u3 || 6 === u3) || u3 >= 2 && u3 <= 4 && s3 >= 2 && s3 <= 4 ? t3.set(a3 + u3, i3 + s3, true, true) : t3.set(a3 + u3, i3 + s3, false, true));
          }(c2, r2), function(t3) {
            for (var r3 = t3.size, e3 = 8; e3 < r3 - 8; e3++) {
              var n3 = e3 % 2 == 0;
              t3.set(e3, 6, n3, true), t3.set(6, e3, n3, true);
            }
          }(c2), function(t3, r3) {
            for (var e3 = p.getPositions(r3), n3 = 0; n3 < e3.length; n3++)
              for (var o3 = e3[n3][0], a3 = e3[n3][1], i3 = -2; i3 <= 2; i3++)
                for (var u3 = -2; u3 <= 2; u3++)
                  -2 === i3 || 2 === i3 || -2 === u3 || 2 === u3 || 0 === i3 && 0 === u3 ? t3.set(o3 + i3, a3 + u3, true, true) : t3.set(o3 + i3, a3 + u3, false, true);
          }(c2, r2), ot(c2, e2, 0), r2 >= 7 && function(t3, r3) {
            for (var e3, n3, o3, a3 = t3.size, i3 = O.getEncodedBits(r3), u3 = 0; u3 < 18; u3++)
              e3 = Math.floor(u3 / 3), n3 = u3 % 3 + a3 - 8 - 3, o3 = 1 == (i3 >> u3 & 1), t3.set(e3, n3, o3, true), t3.set(n3, e3, o3, true);
          }(c2, r2), function(t3, r3) {
            for (var e3 = t3.size, n3 = -1, o3 = e3 - 1, a3 = 7, i3 = 0, u3 = e3 - 1; u3 > 0; u3 -= 2)
              for (6 === u3 && u3--; ; ) {
                for (var s3 = 0; s3 < 2; s3++)
                  if (!t3.isReserved(o3, u3 - s3)) {
                    var f3 = false;
                    i3 < r3.length && (f3 = 1 == (r3[i3] >>> a3 & 1)), t3.set(o3, u3 - s3, f3), -1 === --a3 && (i3++, a3 = 7);
                  }
                if ((o3 += n3) < 0 || e3 <= o3) {
                  o3 -= n3, n3 = -n3;
                  break;
                }
              }
          }(c2, f2), isNaN(n2) && (n2 = E.getBestMask(c2, ot.bind(null, c2, e2))), E.applyMask(n2, c2), ot(c2, e2, n2), { modules: c2, version: r2, errorCorrectionLevel: e2, maskPattern: n2, segments: a2 };
        }
        nt.fromArray, nt.fromString, nt.rawSplit;
        var ut = function(t2, r2) {
          if (void 0 === t2 || "" === t2)
            throw new Error("No input text");
          var e2, n2, o3 = c.M;
          return void 0 !== r2 && (o3 = c.from(r2.errorCorrectionLevel, c.M), e2 = O.from(r2.version), n2 = E.from(r2.maskPattern), r2.toSJISFunc && u(r2.toSJISFunc)), it(t2, e2, o3, n2);
        }, st = h(function(t2, r2) {
          function e2(t3) {
            if ("number" == typeof t3 && (t3 = t3.toString()), "string" != typeof t3)
              throw new Error("Color should be defined as hex string");
            var r3 = t3.slice().replace("#", "").split("");
            if (r3.length < 3 || 5 === r3.length || r3.length > 8)
              throw new Error("Invalid hex color: " + t3);
            3 !== r3.length && 4 !== r3.length || (r3 = Array.prototype.concat.apply([], r3.map(function(t4) {
              return [t4, t4];
            }))), 6 === r3.length && r3.push("F", "F");
            var e3 = parseInt(r3.join(""), 16);
            return { r: e3 >> 24 & 255, g: e3 >> 16 & 255, b: e3 >> 8 & 255, a: 255 & e3, hex: "#" + r3.slice(0, 6).join("") };
          }
          r2.getOptions = function(t3) {
            t3 || (t3 = {}), t3.color || (t3.color = {});
            var r3 = void 0 === t3.margin || null === t3.margin || t3.margin < 0 ? 4 : t3.margin, n2 = t3.width && t3.width >= 21 ? t3.width : void 0, o3 = t3.scale || 4;
            return { width: n2, scale: n2 ? 4 : o3, margin: r3, color: { dark: e2(t3.color.dark || "#000000ff"), light: e2(t3.color.light || "#ffffffff") }, type: t3.type, rendererOpts: t3.rendererOpts || {} };
          }, r2.getScale = function(t3, r3) {
            return r3.width && r3.width >= t3 + 2 * r3.margin ? r3.width / (t3 + 2 * r3.margin) : r3.scale;
          }, r2.getImageWidth = function(t3, e3) {
            var n2 = r2.getScale(t3, e3);
            return Math.floor((t3 + 2 * e3.margin) * n2);
          }, r2.qrToImageData = function(t3, e3, n2) {
            for (var o3 = e3.modules.size, a2 = e3.modules.data, i2 = r2.getScale(o3, n2), u2 = Math.floor((o3 + 2 * n2.margin) * i2), s2 = n2.margin * i2, f2 = [n2.color.light, n2.color.dark], h2 = 0; h2 < u2; h2++)
              for (var c2 = 0; c2 < u2; c2++) {
                var g2 = 4 * (h2 * u2 + c2), d2 = n2.color.light;
                if (h2 >= s2 && c2 >= s2 && h2 < u2 - s2 && c2 < u2 - s2)
                  d2 = f2[a2[Math.floor((h2 - s2) / i2) * o3 + Math.floor((c2 - s2) / i2)] ? 1 : 0];
                t3[g2++] = d2.r, t3[g2++] = d2.g, t3[g2++] = d2.b, t3[g2] = d2.a;
              }
          };
        });
        st.getOptions, st.getScale, st.getImageWidth, st.qrToImageData;
        var ft = h(function(t2, r2) {
          r2.render = function(t3, r3, e2) {
            var n2 = e2, o3 = r3;
            void 0 !== n2 || r3 && r3.getContext || (n2 = r3, r3 = void 0), r3 || (o3 = function() {
              try {
                return document.createElement("canvas");
              } catch (t4) {
                throw new Error("You need to specify a canvas element");
              }
            }()), n2 = st.getOptions(n2);
            var a2 = st.getImageWidth(t3.modules.size, n2), i2 = o3.getContext("2d"), u2 = i2.createImageData(a2, a2);
            return st.qrToImageData(u2.data, t3, n2), function(t4, r4, e3) {
              t4.clearRect(0, 0, r4.width, r4.height), r4.style || (r4.style = {}), r4.height = e3, r4.width = e3, r4.style.height = e3 + "px", r4.style.width = e3 + "px";
            }(i2, o3, a2), i2.putImageData(u2, 0, 0), o3;
          }, r2.renderToDataURL = function(t3, e2, n2) {
            var o3 = n2;
            void 0 !== o3 || e2 && e2.getContext || (o3 = e2, e2 = void 0), o3 || (o3 = {});
            var a2 = r2.render(t3, e2, o3), i2 = o3.type || "image/png", u2 = o3.rendererOpts || {};
            return a2.toDataURL(i2, u2.quality);
          };
        });
        function ht(t2, r2) {
          var e2 = t2.a / 255, n2 = r2 + '="' + t2.hex + '"';
          return e2 < 1 ? n2 + " " + r2 + '-opacity="' + e2.toFixed(2).slice(1) + '"' : n2;
        }
        function ct(t2, r2, e2) {
          var n2 = t2 + r2;
          return void 0 !== e2 && (n2 += " " + e2), n2;
        }
        ft.render, ft.renderToDataURL;
        var gt = function(t2, r2, e2) {
          var n2 = st.getOptions(r2), o3 = t2.modules.size, a2 = t2.modules.data, i2 = o3 + 2 * n2.margin, u2 = n2.color.light.a ? "<path " + ht(n2.color.light, "fill") + ' d="M0 0h' + i2 + "v" + i2 + 'H0z"/>' : "", s2 = "<path " + ht(n2.color.dark, "stroke") + ' d="' + function(t3, r3, e3) {
            for (var n3 = "", o4 = 0, a3 = false, i3 = 0, u3 = 0; u3 < t3.length; u3++) {
              var s3 = Math.floor(u3 % r3), f3 = Math.floor(u3 / r3);
              s3 || a3 || (a3 = true), t3[u3] ? (i3++, u3 > 0 && s3 > 0 && t3[u3 - 1] || (n3 += a3 ? ct("M", s3 + e3, 0.5 + f3 + e3) : ct("m", o4, 0), o4 = 0, a3 = false), s3 + 1 < r3 && t3[u3 + 1] || (n3 += ct("h", i3), i3 = 0)) : o4++;
            }
            return n3;
          }(a2, o3, n2.margin) + '"/>', f2 = 'viewBox="0 0 ' + i2 + " " + i2 + '"', h2 = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n2.width ? 'width="' + n2.width + '" height="' + n2.width + '" ' : "") + f2 + ' shape-rendering="crispEdges">' + u2 + s2 + "</svg>\n";
          return "function" == typeof e2 && e2(null, h2), h2;
        };
        function dt(t2, r2, n2, o3, a2) {
          var i2 = [].slice.call(arguments, 1), u2 = i2.length, s2 = "function" == typeof i2[u2 - 1];
          if (!s2 && !e())
            throw new Error("Callback required as last argument");
          if (!s2) {
            if (u2 < 1)
              throw new Error("Too few arguments provided");
            return 1 === u2 ? (n2 = r2, r2 = o3 = void 0) : 2 !== u2 || r2.getContext || (o3 = n2, n2 = r2, r2 = void 0), new Promise(function(e2, a3) {
              try {
                var i3 = ut(n2, o3);
                e2(t2(i3, r2, o3));
              } catch (t3) {
                a3(t3);
              }
            });
          }
          if (u2 < 2)
            throw new Error("Too few arguments provided");
          2 === u2 ? (a2 = n2, n2 = r2, r2 = o3 = void 0) : 3 === u2 && (r2.getContext && void 0 === a2 ? (a2 = o3, o3 = void 0) : (a2 = o3, o3 = n2, n2 = r2, r2 = void 0));
          try {
            var f2 = ut(n2, o3);
            a2(null, t2(f2, r2, o3));
          } catch (t3) {
            a2(t3);
          }
        }
        var lt = ut, vt = dt.bind(null, ft.render), pt = dt.bind(null, ft.renderToDataURL), wt = dt.bind(null, function(t2, r2, e2) {
          return gt(t2, e2);
        }), mt = { create: lt, toCanvas: vt, toDataURL: pt, toString: wt };
        return t.create = lt, t.default = mt, t.toCanvas = vt, t.toDataURL = pt, t.toString = wt, Object.defineProperty(t, "__esModule", { value: true }), t;
      }({});
      module.exports = QRCode2;
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

  // src/qrCodeGenerator.ts
  var import_qrcode = __toESM(require_qrcode());

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

  // src/lib/convert.ts
  function toNumber(s) {
    const n = Number(s);
    if (isNaN(n))
      throw new Error("Not a number! " + s);
    else
      return n;
  }

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

  // src/qrCodeGenerator.ts
  var logger2 = new Logger("qrcode-display");
  function displayError() {
    const errorDisplay = document.querySelector("div#error-display");
    errorDisplay.classList.remove("hide");
    errorDisplay.innerHTML = "Unable to generate QR code for the given data";
  }
  function setUpPage() {
    const imgElem = document.querySelector("div#qr-canvas img");
    const url = new URL(window.location.href);
    let data = url.searchParams.get("data");
    const timeout = parseInt(url.searchParams.get("timeout"), 10);
    data = decodeURIComponent(atob(data));
    const opts = {
      scale: 10
    };
    import_qrcode.default.toDataURL(data, opts, (error, url2) => {
      if (error) {
        logger2.error(error);
        displayError();
      } else {
        imgElem.src = url2;
      }
    });
    if (timeout && timeout > 0) {
      setTimeout(function() {
        activeTab().then((tabInfo) => {
          browserBg.tabs.remove(tabInfo.id);
        }).catch((error) => {
          logger2.error("Unable to close tab" + error);
        });
      }, timeout * 1e3);
    }
  }
  window.addEventListener("load", setUpPage);
})();
//# sourceMappingURL=qrCodeGenerator.js.map
